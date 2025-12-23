import { Injectable } from '@angular/core';
import { Observable, forkJoin } from 'rxjs';
import { ApplicationStateStoreUtil } from '../utils/application-state-store-util';
import { take } from 'rxjs/operators';
import { SetAPICallbackData } from '../utils/set-api-callback-data-util';
import { CommonUtil } from '../utils/common-util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./cee-init-service.service";
import * as i3 from "../models/api-data/api-data.service";
import * as i4 from "../models/app-data/app-data.service";
import * as i5 from "./loader-service";
import * as i6 from "./shared-events-service.service";
import * as i7 from "ngx-toastr";
export class WfeStepLoaderService {
    http;
    ceeInitService;
    apiDataService;
    appDataService;
    loaderService;
    sharedEventsService;
    toastr;
    globalPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    fieldIdMapBasePath = '/wfe_unique_id.json';
    configBasePath = '/base_wfe.json?hash=' + Date.now();
    configApplicationPath = '/application_step/application_step_';
    configBlockPath = '/application_blocks/application_blocks_';
    customErrorMessages;
    progressBarMap = {};
    progressBarSequenceMap = {};
    userRoleDataMap = [];
    sequenceDataMap = [];
    messagesDataMap = {};
    menuDataMap = [];
    additionalParameters = {};
    stepNameAndIdDataMap = {};
    // blockNameAndIdDataMap: any[] = [];
    stepData = {};
    fieldStepData = {};
    blocksData = [];
    baseJSONData; // can also be declared {} but to check undefined it is undeclared
    currentSequenceId = '';
    currentSequencePointer = 0;
    applicationStateStoreUtil;
    defaultLang = '';
    rootData;
    lastStepRootData;
    stepDataStore = {};
    blockDataStore = {};
    setAPIKeyUtil;
    commonUtil;
    constructor(http, ceeInitService, apiDataService, appDataService, loaderService, sharedEventsService, toastr) {
        this.http = http;
        this.ceeInitService = ceeInitService;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.loaderService = loaderService;
        this.sharedEventsService = sharedEventsService;
        this.toastr = toastr;
        this.applicationStateStoreUtil = new ApplicationStateStoreUtil(this.appDataService);
        this.defaultLang = window.localStorage.getItem('lang') || '';
        if (!this.defaultLang && window.localStorage.getItem('defaultLang')) {
            this.defaultLang = '/' + window.localStorage.getItem('defaultLang');
        }
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.commonUtil = new CommonUtil();
    }
    processBaseJSON(data) {
        if (data) {
            const obj = {};
            const navigateStepNameOnly = localStorage.getItem('navigateStepNameOnly') === 'true' ? true : false;
            for (const sequence of data.workflow_sequence) {
                this.sequenceDataMap[sequence.sequence_id] = sequence;
                for (const step of sequence.sequence) {
                    this.stepNameAndIdDataMap[step.name] = step.tid;
                    if (navigateStepNameOnly) {
                        obj[step.tid] =
                            step.name.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ').join('-');
                    }
                    else {
                        obj[step.tid] =
                            step.name.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ').join('-') + '-' + step.tid;
                    }
                }
                // for the progress bar
                if (sequence.progress_bar_id) {
                    if (data.progress_block) {
                        for (const progressBlock of data.progress_block) {
                            if (progressBlock.progress_bar_id === sequence.progress_bar_id) {
                                const stepMap = sequence.sequence.map(step => {
                                    this.applicationStateStoreUtil.setDefaultState(progressBlock, step.tid);
                                    return step;
                                });
                                this.progressBarMap[sequence.sequence_id] = { steps: stepMap };
                                this.progressBarMap[sequence.sequence_id].progress = progressBlock;
                            }
                        }
                    }
                }
            }
            localStorage.setItem('modals', JSON.stringify(data.modals));
            localStorage.setItem('CEE_ROUTE_MAP', JSON.stringify(obj));
            for (const message of data.constant_text.error_message) {
                if (message && typeof message.message_text === 'string' && message.message_text.includes('%')) {
                    message.message_text = this.extractAPIKeyValue(message).trim() === '' ? message.message_text : this.extractAPIKeyValue(message);
                }
                this.messagesDataMap[message.message_code] = message;
            }
            this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
                this.setDynamicMessage(res);
            });
            if ((data.application_menu && data.application_menu !== null) ||
                (data.application_menu && data.application_menu.toLowerCase() !== 'null')) {
                for (const menu of data.application_menu) {
                    this.menuDataMap[menu.menu_id] = menu;
                }
            }
            for (const role of data.user_roles) {
                this.userRoleDataMap[role.role] = role.workflow_sequence_ids;
            }
            /**
             * load bootstrap settings
             */
            if (data['application_settings']) {
                const storeData = ['is_bootstrap', 'container_type', 'is_material'];
                for (const sData of storeData) {
                    localStorage.setItem(sData, data['application_settings'][sData] || '');
                }
            }
            if (data['socket_settings']) {
                data['socket_settings'] = this.commonUtil.setAppConfigValue(data['socket_settings']);
                localStorage.setItem('socket_settings', JSON.stringify(data['socket_settings']) || '{}');
            }
        }
    }
    /**
     * the api data that is set to dynamic message
     * @param data then api call back data
     */
    setDynamicMessage(data) {
        for (const messagesData in this.messagesDataMap) {
            const m = this.messagesDataMap[messagesData];
            if (m.type.toLowerCase() === 'dynamic') {
                if (!m.message_text_config) {
                    m.message_text_config = m.message_text;
                }
                else {
                    m.message_text = m.message_text_config;
                }
                const keys = m.message_text.match(new RegExp(/\%(.*?)\%/g));
                if (keys && keys.length > 0) {
                    keys.forEach((apiKey, i) => {
                        apiKey = apiKey.split('%')[1];
                        let keyValue = this.returnKeyValue(apiKey.trim(), data);
                        m.message_text = m.message_text.replace('%' + apiKey + '%', keyValue !== undefined ? keyValue : '');
                    });
                }
            }
        }
        // console.log(this.messagesDataMap)
    }
    extractAPIKeyValue(message) {
        const keys = message.message_text.match(new RegExp(/\%(.*?)\%/g));
        var apiValue = '';
        if (keys && keys.length > 0) {
            keys.forEach((apiKey, i) => {
                apiKey = apiKey.split('%')[1];
                const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                if (handlerData != null) {
                    const extractValue = handlerData.value[apiKey];
                    apiValue = message.message_text.replace('%' + apiKey + '%', extractValue);
                    return apiValue;
                }
            });
        }
        return apiValue;
    }
    /**
     * the api key that is set to dynamic
     * @param apiKey the api key string
     * @param data then api call back data
     */
    returnKeyValue(apiKey, data) {
        return this.setAPIKeyUtil.isSingleApiKey || this.setAPIKeyUtil.setApiCallBackData(apiKey, data) !== null ?
            this.setAPIKeyUtil.setApiCallBackData(apiKey, data) : this.setAPIKeyUtil.setApiCallBackData(apiKey, this.setAPIKeyUtil.returnValueFromApiStoreUsingHandlerName(apiKey)) !== null ? this.setAPIKeyUtil.setApiCallBackData(apiKey, this.setAPIKeyUtil.returnValueFromApiStoreUsingHandlerName(apiKey)) : '';
    }
    reloadPage() {
        window.location.reload();
    }
    /**
     * pre fetch the base wfe json so that it gets loaded once when a step is loaded
     * and the additional parameters get mapped before the step is loaded
     */
    async prefetchBaseJSON() {
        if (!this.baseJSONData) {
            this.baseJSONData = await this.http.get(`${this.globalPath}${this.defaultLang}${this.configBasePath}`).toPromise();
            //config JSON version update process
            if (this.baseJSONData && this.baseJSONData['version_id']) {
                const configJSONVersion = this.baseJSONData['version_id'] + '';
                const configJSONVersionOld = localStorage.getItem('CONFIG_JSON_VERSION');
                let reloadFlag = false;
                if (configJSONVersion && configJSONVersionOld && configJSONVersion !== configJSONVersionOld) {
                    localStorage.clear();
                    sessionStorage.clear();
                    reloadFlag = true;
                }
                configJSONVersion && localStorage.setItem('CONFIG_JSON_VERSION', configJSONVersion);
                if (reloadFlag) {
                    this.reloadPage();
                }
            }
            this.setAdditionalParameters(this.baseJSONData.additional_parameters || []);
        }
        else {
            if (window.sessionStorage.length === 0) {
                this.setAdditionalParameters(this.baseJSONData.additional_parameters || []);
            }
        }
        this.processBaseJSON(this.baseJSONData);
        return;
    }
    getDefaultStep(sequence_id = '') {
        let defaultStep = null;
        if (this.baseJSONData) {
            if (this.baseJSONData.workflow_sequence) {
                const sequenceData = this.baseJSONData.workflow_sequence.find((i) => {
                    if (i.sequence.length > 0 && (!sequence_id || i.sequence_id === sequence_id)) {
                        return true;
                    }
                    else {
                        return false;
                    }
                });
                const navigateStepNameOnly = localStorage.getItem('navigateStepNameOnly') === 'true' ? true : false;
                if (sequenceData) {
                    const { name, tid } = sequenceData.sequence[0];
                    if (navigateStepNameOnly) {
                        defaultStep = {
                            tid,
                            stepName: name.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ').join('-')
                        };
                    }
                    else {
                        defaultStep = {
                            tid,
                            stepName: name.toLowerCase().replace(/[^a-zA-Z ]/g, '').split(' ').join('-') + '-' + tid
                        };
                    }
                }
            }
        }
        return defaultStep;
    }
    /**
     * Load step configuration and supporting information
     * @param roleId: string
     * @param stepId: string
     * @param callback: string
     */
    getWFEStepData(roleId, stepId, callback) {
        try {
            this.stepData = {};
            const initCalls = [];
            // const sId = stepId.match(/[0-9]+$/g);
            // stepId = sId[0] ? sId[0] : stepId;
            // if custom Error Messages is undefined then assign the custom error messages from ceeInit service
            if (!this.customErrorMessages) {
                this.customErrorMessages = this.ceeInitService.customErrors;
            }
            initCalls.push(this.http.get(`${this.globalPath}${this.defaultLang}${this.configApplicationPath}${stepId}.json`));
            if (this.sequenceDataMap.length === 0) {
                if (!this.baseJSONData) {
                    initCalls.push(this.http.get(this.configBasePath));
                }
            }
            forkJoin(initCalls).subscribe((results) => {
                if (this.baseJSONData) {
                    results.push(this.baseJSONData);
                }
                this.mapData(roleId, results, callback);
            }, errors => {
                console.error(errors);
                if (callback) {
                    callback(undefined, 'An error occurred while loading page.');
                }
            });
        }
        catch (e) {
            console.error(e);
            if (callback) {
                callback(undefined, 'An error occurred while loading page.');
            }
        }
    }
    /**
     * Get user step access information based on role id.
     * @param roleId: string
     * @param stepData: any
     * @param blocksData: any
     * @param callback: any
     */
    checkUserRoleAccess(roleId, stepData, callback) {
        try {
            const roleArr = this.baseJSONData.user_roles.map((i) => {
                return i.role;
            });
            let anonymousCount = 0;
            const sequenceData = [];
            for (const roleName of roleId.split(',')) {
                if (this.userRoleDataMap[(roleName === '' || roleName === null) ? 'ANONYMOUS' : roleName]) {
                    const sequences = this.userRoleDataMap[(roleName === '' || roleName === null) ? 'ANONYMOUS' : roleName] ||
                        this.userRoleDataMap['ANONYMOUS'];
                    sequenceData.push(...sequences);
                }
                if (roleArr.includes(roleName)) {
                    anonymousCount += 1;
                }
            }
            if (roleId.length > 0 && roleArr.includes('AUTHENTICATED')) {
                const sequences = this.userRoleDataMap['AUTHENTICATED'];
                sequenceData.push(...sequences);
                anonymousCount += 1;
            }
            if (anonymousCount == 0) {
                const sequences = this.userRoleDataMap['ANONYMOUS'];
                sequenceData.push(...sequences);
            }
            if (sequenceData.length > 0) {
                if (this.getAllStepIdFromSequenceArray(sequenceData).includes(stepData.tid)) {
                    if (callback) {
                        callback(stepData, undefined);
                    }
                }
                else {
                    if (callback) {
                        callback(undefined, 'No step found for the given user role.');
                    }
                }
            }
            else {
                if (callback) {
                    callback(undefined, 'Invalid user role definition.');
                }
            }
        }
        catch (e) {
            console.error(e);
            if (callback) {
                callback(undefined, 'An error occured while loading page.');
            }
        }
    }
    /**
     * Get default step by user role id.
     * @param roleId: string
     */
    getDefaultStepByRole(roleId) {
        try {
            const roleArr = this.baseJSONData.user_roles.map((i) => {
                return i.role;
            });
            let anonymousCount = 0;
            const sequenceData = [];
            for (const roleName of roleId.split(',')) {
                if (this.userRoleDataMap[(roleName === '' || roleName === null) ? 'ANONYMOUS' : roleName]) {
                    const sequences = this.userRoleDataMap[(roleName === '' || roleName === null) ? 'ANONYMOUS' : roleName] ||
                        this.userRoleDataMap['ANONYMOUS'];
                    sequenceData.push(...sequences);
                }
                if (roleArr.includes(roleName)) {
                    anonymousCount += 1;
                }
            }
            if (roleId.length > 0 && roleArr.includes('AUTHENTICATED')) {
                const sequences = this.userRoleDataMap['AUTHENTICATED'];
                sequenceData.push(...sequences);
                anonymousCount += 1;
            }
            if (anonymousCount == 0) {
                const sequences = this.userRoleDataMap['ANONYMOUS'];
                sequenceData.push(...sequences);
            }
            return this.getDefaultStep(sequenceData[0][0]);
        }
        catch (e) {
            console.error(e);
            return '';
        }
    }
    /**
     * Map base.json data for access.
     * @param roleId : User role ID
     * @param stepData : WFE Step data
     * @param callback : Data loaded callback
     */
    mapData(roleId, stepData, callback) {
        try {
            this.processBaseJSON(stepData[1]);
            if (stepData[0]) {
                this.stepData = JSON.parse(JSON.stringify(stepData[0]));
                this.checkUserRoleAccess(roleId, this.stepData, callback);
            }
        }
        catch (e) {
            console.error(e);
            if (callback) {
                callback(undefined, 'An error occurred while loading page.');
            }
        }
    }
    /**
     * method loads a step when the function
     * is called based on the step Id
     * @param stepId: string
     */
    loadOnLangChange(stepId, lang) {
        const step = this.http.get(`${this.globalPath}${lang}${this.configApplicationPath}${stepId}.json`);
        const baseJSON = this.http.get(`${this.globalPath}${lang}${this.configBasePath}`);
        return forkJoin([step, baseJSON]);
    }
    setAdditionalParameters(additionalParameters) {
        // this.defaultLang = window.localStorage.getItem('lang') || '';
        for (const additionalParameter of additionalParameters) {
            let paramValue = additionalParameter.value ? additionalParameter.value : '';
            this.additionalParameters[additionalParameter.parameter_type] = paramValue;
            // TODO: uncomment if default Language is set as an additional parameter
            // set default language
            // if (additionalParameter.parameter_type === 'DefaultLanguage' && !this.defaultLang) {
            //     this.defaultLang = paramValue.toLowerCase();
            // }
            if (paramValue && paramValue.includes('$$')) {
                paramValue = paramValue.split('$$')[1].trim();
            }
            if (window.sessionStorage.getItem(additionalParameter.parameter_type) !== '') {
                window.sessionStorage.setItem(additionalParameter.parameter_type, paramValue);
            }
        }
        // if (this.defaultLang) {
        //     window.localStorage.setItem('lang', `${this.defaultLang}`);
        // }
    }
    getListOfStepIdsByWorkflow(workflowIds) {
        const stepIds = [];
        if (typeof workflowIds === 'string') {
            workflowIds = [workflowIds];
        }
        for (const workflowId of workflowIds) {
            if (this.sequenceDataMap[workflowId]) {
                for (const step of this.sequenceDataMap[workflowId].sequence) {
                    stepIds.push(step.tid);
                }
            }
        }
        return stepIds;
    }
    /**
     * function that sets the progress block step to pending
     * @param sequenceId the sequence id
     */
    setSequenceProgressInit(sequenceId) {
        if (this.progressBarMap) {
            const progressBar = this.progressBarMap[sequenceId];
            if (progressBar && progressBar.progress && progressBar.progress.progress_bar_id) {
                progressBar.steps.forEach(step => {
                    this.applicationStateStoreUtil.setAnyState(progressBar.progress.progress_bar_id, step.tid, 'STATE_PENDING');
                });
            }
        }
    }
    /**
     *
     * @param sequenceArray
     */
    getAllStepIdFromSequenceArray(sequenceArray) {
        const stepIdArray = [];
        for (const singleSequence of sequenceArray) {
            for (const sequence of this.sequenceDataMap[singleSequence]?.sequence) {
                stepIdArray.push(sequence.tid);
            }
        }
        return stepIdArray;
    }
    /**
     * Get messages based on message id
     * @param code
     */
    getMessage(code) {
        // TODO handle dynamic messages
        if (this.messagesDataMap[code]) {
            return this.messagesDataMap[code].message_text;
            // if (this.messagesDataMap[code].type.toLowerCase() === 'dynamic') {
            //     return this.messagesDataMap[code].message_text;
            // } else {
            //     return this.messagesDataMap[code].message_text;
            // }
        }
        else {
            return undefined;
        }
    }
    /**
     * Returns the whole WFE Base JSON Data
     */
    loadWFEUniqueIdJSON() {
        return this.http.get(`${this.globalPath}${this.defaultLang}${this.fieldIdMapBasePath}`);
    }
    /**
     * save the step data in cache
     * @param stepName
     */
    setStepDataInCache(stepName, data) {
        stepName = this.stepNameAndIdDataMap[stepName] ? this.stepNameAndIdDataMap[stepName] : stepName;
        this.stepDataStore[stepName] = JSON.stringify(data);
        // let stepData = localStorage.getItem('stepDataCache') ? JSON.parse(localStorage.getItem('stepDataCache'))['data'] : [];
        // let cacheData = ( stepData && stepData.length > 0 ) ? stepData.filter(el => el.step_id == stepName) : [];
        // if(cacheData && cacheData.length == 0) {
        //     stepData.push({step_id: stepName, step_data: data});
        //     localStorage.setItem('stepDataCache', JSON.stringify({data : stepData}))
        // }
    }
    /**
     * fetch the step data from cache
     * @param stepName
     */
    getStepDataFromCache(stepName) {
        stepName = this.stepNameAndIdDataMap[stepName] ? this.stepNameAndIdDataMap[stepName] : stepName;
        return this.stepDataStore[stepName] ? JSON.parse(this.stepDataStore[stepName]) : null;
        // let stepData;
        // let stepDataCache = localStorage.getItem('stepDataCache') ? JSON.parse(localStorage.getItem('stepDataCache'))['data'] : [];
        // let cacheData = ( stepDataCache && stepDataCache.length > 0 ) ? stepDataCache.filter(el => el.step_id == stepName) : [];
        // if(cacheData && cacheData.length > 0) {
        //     stepData = cacheData[0].step_data;
        // }
        // return stepData;
    }
    /**
     * Returns the step data according to the step name
     * @param stepName
     */
    loadStepByName(stepName) {
        if (!this.stepNameAndIdDataMap[stepName]) {
            console.error('Invalid step name: ' + stepName);
        }
        return new Observable((observer) => {
            // const stepDataCache = this.getStepDataFromCache(stepId);
            const stepId = this.stepNameAndIdDataMap[stepName];
            if (this.stepDataStore[stepId]) {
                observer.next(JSON.parse(this.stepDataStore[stepId]));
                observer.complete();
            }
            else {
                this.http.get(`${this.globalPath}${this.defaultLang}${this.configApplicationPath}${stepId}.json`).subscribe((currStepData) => {
                    this.stepDataStore[stepId] = JSON.stringify(currStepData);
                    observer.next(currStepData);
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                    observer.complete();
                });
            }
            return {
                unsubscribe() { }
            };
        });
        // return this.http.get(
        //     `${this.globalPath}${this.defaultLang}${this.configApplicationPath}${this.stepNameAndIdDataMap[stepName]}.json`);
    }
    /**
     * Returns the step data according to the step name
     * @param stepId
     */
    loadStepById(stepId) {
        return new Observable((observer) => {
            const stepDataCache = this.getStepDataFromCache(stepId);
            if (stepDataCache) {
                observer.next(stepDataCache);
                observer.complete();
            }
            else {
                this.http.get(`${this.globalPath}${this.defaultLang}${this.configApplicationPath}${stepId}.json`).subscribe((currStepData) => {
                    this.setStepDataInCache(stepId, currStepData);
                    observer.next(currStepData);
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                    observer.complete();
                });
            }
            return {
                unsubscribe() { }
            };
        });
        // return this.http.get(`${this.globalPath}${this.defaultLang}${this.configApplicationPath}${stepId}.json`);
    }
    /**
     * returns sequence name and index of the current step
     */
    getWorkflowSequenceIndexFromStep(stepId) {
        // tslint:disable-next-line: forin
        for (const sequence in this.sequenceDataMap) {
            for (const singleSequenceIndex in this.sequenceDataMap[sequence].sequence) {
                if (this.sequenceDataMap[sequence].sequence[singleSequenceIndex].tid === stepId) {
                    return { sequence, singleSequenceIndex };
                }
            }
        }
        return undefined;
    }
    getNextStepInCurrentSequence(currentStepId) {
        const sequenceData = this.getWorkflowSequenceIndexFromStep(currentStepId);
        if (sequenceData) {
            const { sequence, singleSequenceIndex } = sequenceData;
            if ((Number(singleSequenceIndex) + 1) < this.sequenceDataMap[sequence].sequence.length) {
                return this.sequenceDataMap[sequence].sequence[Number(singleSequenceIndex) + 1].tid;
            }
        }
        return null;
    }
    getPreviousStepInCurrentSequence(currentStepId) {
        const sequenceData = this.getWorkflowSequenceIndexFromStep(currentStepId);
        if (sequenceData) {
            const { sequence, singleSequenceIndex } = sequenceData;
            if (Number(singleSequenceIndex) !== 0) {
                return this.sequenceDataMap[sequence].sequence[Number(singleSequenceIndex) - 1].tid;
            }
        }
        return null;
    }
    ////////////////////// OLD Implementations ///////////////////////////
    getFirstSequenceInSequenceArray(sequenceArray) {
        if (sequenceArray.length > 0) {
            return this.sequenceDataMap[sequenceArray[0]].sequence[0].tid;
        }
        else {
            return '404';
        }
    }
    getFirstStepInSquence(stepArray) {
        return stepArray[0].tid;
    }
    getSequenceDefaultStepIdBySequenceId(sequenceId) {
        this.currentSequenceId = sequenceId;
        this.currentSequencePointer = 0;
        const selectedSeqData = this.sequenceDataMap[this.currentSequenceId];
        return selectedSeqData;
    }
    // getNextStepInCurrentSequence() {
    //   if (this.currentSequencePointer < (this.sequenceDataMap[this.currentSequenceId].sequence.length - 1)) {
    //     this.currentSequencePointer++;
    //   }
    //   return this.sequenceDataMap[this.currentSequenceId].sequence[this.currentSequencePointer].tid;
    // }
    // getPreviousStepInCurrentSequence() {
    //   if (this.currentSequencePointer > 0) {
    //     this.currentSequencePointer--;
    //   }
    //   return this.sequenceDataMap[this.currentSequenceId].sequence[this.currentSequencePointer].tid;
    // }
    /**
     * Returns the block data according to the block name
     * @param blockName
     */
    searchBlockDataFromCache(blockName) {
        return this.blockDataStore[blockName] ? JSON.parse(this.blockDataStore[blockName]) : null;
        // let blockData;
        // let blockDataCache = localStorage.getItem('blockDataCache') ? JSON.parse(localStorage.getItem('blockDataCache'))['data'] : [];
        // let cacheData = ( blockDataCache && blockDataCache.length > 0 ) ? blockDataCache.filter(el => el.block_id == blockName) : [];
        // if(cacheData && cacheData.length > 0) {
        //     blockData = cacheData[0].block_data;
        // }
        // return blockData;
    }
    /**
     * Returns the block data according to the block name
     * @param blockName
     */
    loadBlockByName(blockName) {
        return new Observable((observer) => {
            const blockDataCache = this.searchBlockDataFromCache(blockName);
            if (blockDataCache) {
                observer.next(blockDataCache);
                observer.complete();
            }
            else {
                this.http.get(`${this.globalPath}${this.defaultLang}${this.configBlockPath}${blockName}.json`).subscribe((currStepData) => {
                    this.setBlockDataInCache(blockName, currStepData);
                    observer.next(currStepData);
                    observer.complete();
                }, (error) => {
                    observer.error(error);
                    observer.complete();
                });
            }
            return {
                unsubscribe() { }
            };
        });
        // return this.http.get(
        // `${this.globalPath}${this.defaultLang}${this.configBlockPath}${blockName}.json`);
    }
    setBlockDataInCache(blockName, data) {
        this.blockDataStore[blockName] = JSON.stringify(data);
        // blockName = this.blockNameAndIdDataMap[blockName] ? this.blockNameAndIdDataMap[blockName] : blockName;
        // let blockData = localStorage.getItem('blockDataCache') ? JSON.parse(localStorage.getItem('blockDataCache'))['data'] : [];
        // let cacheData = ( blockData && blockData.length > 0 ) ? blockData.filter(el => el.step_id == blockName) : [];
        // if(cacheData && cacheData.length == 0) {
        //     blockData.push({block_id: blockName, block_data: data});
        //     localStorage.setItem('blockDataCache', JSON.stringify({data : blockData}))
        // }
    }
    // loadBlockByNameId(blockName) {
    //     return new Observable((observer) => {
    //         const blockDataCache = this.searchBlockDataFromCache(blockName);
    //         if (blockDataCache) {
    //             observer.next(blockDataCache);                  
    //             observer.complete();
    //         }
    //         else {
    //             this.http.get(`${this.globalPath}${this.defaultLang}${this.configBlockPath}${blockName}.json`).subscribe((currStepData: any) => {
    //                 this.setBlockDataInCache(blockName, currStepData);
    //                 observer.next(currStepData);                  
    //                 observer.complete();
    //             }, (error) => {
    //                 observer.error(error);                  
    //                 observer.complete();
    //             });
    //         }
    //         return {
    //             unsubscribe() { }
    //         };
    //     });
    // }
    /**
     * Returns workflow details from step id
     * @param stepId
     */
    getWorkflowDetails(stepId) {
        if (this.baseJSONData.workflow_sequence) {
            return this.baseJSONData.workflow_sequence.find((i) => {
                return i.sequence.findIndex((x) => {
                    return x.tid == stepId;
                }) > -1;
            });
        }
        return null;
    }
    openToster(msgObj) {
        this.toastr.success(msgObj.html, '', {
            enableHtml: true,
            timeOut: Number(msgObj.duration),
            closeButton: msgObj.closeButton,
            toastClass: msgObj.panelClass.join(' '),
            progressBar: msgObj.progressBar,
            positionClass: 'toast-' + msgObj.verticalPosition + '-' + msgObj.horizontalPosition
        });
    }
    manipulateString(type, value) {
        let fieldIds, separator, fieldValueList;
        if (!type)
            return value;
        switch (type.toLowerCase().split("||")[0]) {
            case "trim_spaces":
                value = value.trim();
                // this.inputValue = value;
                break;
            case "remove_all":
                let searchString = type.toLowerCase().split("||").length > 1 ? type.toLowerCase().split("||")[1] : " ";
                let replaceWith = type.toLowerCase().split("||").length > 2 ? type.toLowerCase().split("||")[2] : "";
                value = value.replaceAll(searchString, replaceWith);
                // this.inputValue = value;
                break;
            case "upper":
                value = value.toUpperCase();
                // this.inputValue = value;
                break;
            case "lower":
                value = value.toLowerCase();
                // this.inputValue = value;
                break;
            case "proper":
                const arr = value.split(" ");
                for (var i = 0; i < arr.length; i++) {
                    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
                }
                value = arr.join(" ");
                // this.inputValue = value;
                break;
            case "starts_with":
                let startWith = type.split("||").length > 1 ? type.split("||")[1] : "";
                value = value.trim() ? startWith + value.replaceAll(startWith, '') : '';
                // this.inputValue = value;
                break;
            case "concat":
                fieldIds = type.split("||").length > 1 ? type.split("||").slice(2) : [];
                separator = type.split("||").length > 1 ? type.split("||")[1] : " ";
                fieldValueList = [];
                fieldIds.forEach(element => {
                    fieldValueList.push(this.appDataService.getFieldDataByFieldId(element));
                });
                value = fieldValueList.join(separator);
                // this.inputValue = value;
                break;
            case "split":
                fieldIds = type.split("||").length > 1 ? type.split("||").slice(2) : [];
                separator = type.split("||").length > 1 ? type.split("||")[1] : " ";
                fieldValueList = value ? value.split(separator) : [];
                fieldIds.forEach((element, index) => {
                    this.appDataService.getIndividualAppData(element).pipe(take(1)).subscribe(fieldData => {
                        if (fieldData.length > 0) {
                            this.appDataService.updateAppData({ ...fieldData[0], ...{ value: fieldValueList[index] } });
                            this.sharedEventsService.emitSetFieldValueOnEvent.emit({ uniqueIds: element, values: fieldValueList[index] });
                        }
                    });
                });
                break;
        }
        return value;
    }
    static ɵfac = function WfeStepLoaderService_Factory(t) { return new (t || WfeStepLoaderService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CeeInitServiceService), i0.ɵɵinject(i3.ApiDataService), i0.ɵɵinject(i4.AppDataService), i0.ɵɵinject(i5.LoaderService), i0.ɵɵinject(i6.SharedEventsServiceService), i0.ɵɵinject(i7.ToastrService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: WfeStepLoaderService, factory: WfeStepLoaderService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(WfeStepLoaderService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.CeeInitServiceService }, { type: i3.ApiDataService }, { type: i4.AppDataService }, { type: i5.LoaderService }, { type: i6.SharedEventsServiceService }, { type: i7.ToastrService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM1QyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUtsRixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDOzs7Ozs7Ozs7QUFJbEQsTUFBTSxPQUFPLG9CQUFvQjtJQWlDVDtJQUEwQjtJQUErQztJQUF3QztJQUF1QztJQUFxQztJQUF3RDtJQWhDelEsVUFBVSxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxNQUFNLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUMzTSxrQkFBa0IsR0FBRyxxQkFBcUIsQ0FBQztJQUMzQyxjQUFjLEdBQUcsc0JBQXNCLEdBQUcsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO0lBQ3JELHFCQUFxQixHQUFHLHFDQUFxQyxDQUFDO0lBQzlELGVBQWUsR0FBRyx5Q0FBeUMsQ0FBQztJQUM1RCxtQkFBbUIs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Z3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIGZvcmtKb2luIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFwcGxpY2F0aW9uU3RhdGVTdG9yZVV0aWwgfSBmcm9tICcuLi91dGlscy9hcHBsaWNhdGlvbi1zdGF0ZS1zdG9yZS11dGlsJztcclxuaW1wb3J0IHsgQ2VlSW5pdFNlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi9jZWUtaW5pdC1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTG9hZGVyU2VydmljZSB9IGZyb20gJy4vbG9hZGVyLXNlcnZpY2UnO1xyXG5pbXBvcnQgeyBUb2FzdHJTZXJ2aWNlIH0gZnJvbSAnbmd4LXRvYXN0cic7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTZXRBUElDYWxsYmFja0RhdGEgfSBmcm9tICcuLi91dGlscy9zZXQtYXBpLWNhbGxiYWNrLWRhdGEtdXRpbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi91dGlscy9jb21tb24tdXRpbCc7XHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgV2ZlU3RlcExvYWRlclNlcnZpY2Uge1xyXG4gICAgZ2xvYmFsUGF0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdFTkFCTEVfQVVUT19QUkVWSUVXJyk/LnRvTG93ZXJDYXNlKCkgPT0gXCJ0cnVlXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FVVE9fUFJFVklFV19DT05GSUdfUEFUSCcpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FVVE9fUFJFVklFV19DT05GSUdfUEFUSCcpIDogJ2Fzc2V0cy9jb25maWcnO1xyXG4gICAgZmllbGRJZE1hcEJhc2VQYXRoID0gJy93ZmVfdW5pcXVlX2lkLmpzb24nO1xyXG4gICAgY29uZmlnQmFzZVBhdGggPSAnL2Jhc2Vfd2ZlLmpzb24/aGFzaD0nICsgRGF0ZS5ub3coKTtcclxuICAgIGNvbmZpZ0FwcGxpY2F0aW9uUGF0aCA9ICcvYXBwbGljYXRpb25fc3RlcC9hcHBsaWNhdGlvbl9zdGVwXyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSAnL2FwcGxpY2F0aW9uX2Jsb2Nrcy9hcHBsaWNhdGlvbl9ibG9ja3NfJztcclxuICAgIGN1c3RvbUVycm9yTWVzc2FnZXM6IGFueTtcclxuICAgIHByb2dyZXNzQmFyTWFwOiBhbnkgPSB7fTtcclxuICAgIHByb2dyZXNzQmFyU2VxdWVuY2VNYXA6IGFueSA9IHt9O1xyXG4gICAgdXNlclJvbGVEYXRhTWFwOiBhbnlbXSA9IFtdO1xyXG4gICAgc2VxdWVuY2VEYXRhTWFwOiBhbnlbXSA9IFtdO1xyXG4gICAgbWVzc2FnZXNEYXRhTWFwOiBhbnkgPSB7fTtcclxuICAgIG1lbnVEYXRhTWFwOiBhbnlbXSA9IFtdO1xyXG4gICAgYWRkaXRpb25hbFBhcmFtZXRlcnM6IGFueSA9IHt9O1xyXG4gICAgc3RlcE5hbWVBbmRJZERhdGFNYXA6IGFueSA9IHt9O1xyXG5cclxuICAgIC8vIGJsb2NrTmFtZUFuZElkRGF0YU1hcDogYW55W10gPSBbXTtcclxuICAgIHN0ZXBEYXRhID0ge307XHJcbiAgICBmaWVsZFN0ZXBEYXRhID0ge307XHJcbiAgICBibG9ja3NEYXRhOiBhbnlbXSA9IFtdO1xyXG4gICAgYmFzZUpTT05EYXRhOiBhbnk7IC8vIGNhbiBhbHNvIGJlIGRlY2xhcmVkIHt9IGJ1dCB0byBjaGVjayB1bmRlZmluZWQgaXQgaXMgdW5kZWNsYXJlZFxyXG5cclxuICAgIGN1cnJlbnRTZXF1ZW5jZUlkID0gJyc7XHJcbiAgICBjdXJyZW50U2VxdWVuY2VQb2ludGVyID0gMDtcclxuICAgIGFwcGxpY2F0aW9uU3RhdGVTdG9yZVV0aWw6IEFwcGxpY2F0aW9uU3RhdGVTdG9yZVV0aWw7XHJcbiAgICBkZWZhdWx0TGFuZyA9ICcnO1xyXG4gICAgcm9vdERhdGE7XHJcbiAgICBsYXN0U3RlcFJvb3REYXRhO1xyXG4gICAgc3RlcERhdGFTdG9yZSA9IHt9O1xyXG4gICAgYmxvY2tEYXRhU3RvcmUgPSB7fTtcclxuICAgIHNldEFQSUtleVV0aWw6IFNldEFQSUNhbGxiYWNrRGF0YTtcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcbiAgICBcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgcHJpdmF0ZSBjZWVJbml0U2VydmljZTogQ2VlSW5pdFNlcnZpY2VTZXJ2aWNlLCBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSwgcHJpdmF0ZSBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsIHB1YmxpYyBsb2FkZXJTZXJ2aWNlOiBMb2FkZXJTZXJ2aWNlLCBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsIHB1YmxpYyB0b2FzdHI6IFRvYXN0clNlcnZpY2UpIHtcclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVTdG9yZVV0aWwgPSBuZXcgQXBwbGljYXRpb25TdGF0ZVN0b3JlVXRpbCh0aGlzLmFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmRlZmF1bHRMYW5nID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJykgfHwgJyc7XHJcbiAgICAgICAgaWYgKCF0aGlzLmRlZmF1bHRMYW5nICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGVmYXVsdExhbmcnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRlZmF1bHRMYW5nID0gJy8nICsgd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdkZWZhdWx0TGFuZycpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldEFQSUtleVV0aWwgPSBuZXcgU2V0QVBJQ2FsbGJhY2tEYXRhKGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NCYXNlSlNPTihkYXRhKSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IG5hdmlnYXRlU3RlcE5hbWVPbmx5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hdmlnYXRlU3RlcE5hbWVPbmx5JykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzZXF1ZW5jZSBvZiBkYXRhLndvcmtmbG93X3NlcXVlbmNlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlcXVlbmNlRGF0YU1hcFtzZXF1ZW5jZS5zZXF1ZW5jZV9pZF0gPSBzZXF1ZW5jZTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc3RlcCBvZiBzZXF1ZW5jZS5zZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RlcE5hbWVBbmRJZERhdGFNYXBbc3RlcC5uYW1lXSA9IHN0ZXAudGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYXZpZ2F0ZVN0ZXBOYW1lT25seSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbc3RlcC50aWRdID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXAubmFtZS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1teYS16QS1aIF0vZywgJycpLnNwbGl0KCcgJykuam9pbignLScpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3N0ZXAudGlkXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGVwLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWiBdL2csICcnKS5zcGxpdCgnICcpLmpvaW4oJy0nKSArICctJyArIHN0ZXAudGlkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBmb3IgdGhlIHByb2dyZXNzIGJhclxyXG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlLnByb2dyZXNzX2Jhcl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnByb2dyZXNzX2Jsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcHJvZ3Jlc3NCbG9jayBvZiBkYXRhLnByb2dyZXNzX2Jsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3NCbG9jay5wcm9ncmVzc19iYXJfaWQgPT09IHNlcXVlbmNlLnByb2dyZXNzX2Jhcl9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ZXBNYXAgPSBzZXF1ZW5jZS5zZXF1ZW5jZS5tYXAoc3RlcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0ZVN0b3JlVXRpbC5zZXREZWZhdWx0U3RhdGUocHJvZ3Jlc3NCbG9jaywgc3RlcC50aWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RlcDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyTWFwW3NlcXVlbmNlLnNlcXVlbmNlX2lkXSA9IHsgc3RlcHM6IHN0ZXBNYXAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2dyZXNzQmFyTWFwW3NlcXVlbmNlLnNlcXVlbmNlX2lkXS5wcm9ncmVzcyA9IHByb2dyZXNzQmxvY2s7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ21vZGFscycsIEpTT04uc3RyaW5naWZ5KGRhdGEubW9kYWxzKSk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDRUVfUk9VVEVfTUFQJywgSlNPTi5zdHJpbmdpZnkob2JqKSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgZGF0YS5jb25zdGFudF90ZXh0LmVycm9yX21lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgIGlmIChtZXNzYWdlICYmIHR5cGVvZiBtZXNzYWdlLm1lc3NhZ2VfdGV4dCA9PT0gJ3N0cmluZycgJiYgbWVzc2FnZS5tZXNzYWdlX3RleHQuaW5jbHVkZXMoJyUnKSkgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZS5tZXNzYWdlX3RleHQgPSB0aGlzLmV4dHJhY3RBUElLZXlWYWx1ZShtZXNzYWdlKS50cmltKCkgPT09ICcnID8gbWVzc2FnZS5tZXNzYWdlX3RleHQgOiB0aGlzLmV4dHJhY3RBUElLZXlWYWx1ZShtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXNEYXRhTWFwW21lc3NhZ2UubWVzc2FnZV9jb2RlXSA9IG1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RHluYW1pY01lc3NhZ2UocmVzKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGlmICgoZGF0YS5hcHBsaWNhdGlvbl9tZW51ICYmIGRhdGEuYXBwbGljYXRpb25fbWVudSAhPT0gbnVsbCkgfHxcclxuICAgICAgICAgICAgICAgIChkYXRhLmFwcGxpY2F0aW9uX21lbnUgJiYgZGF0YS5hcHBsaWNhdGlvbl9tZW51LnRvTG93ZXJDYXNlKCkgIT09ICdudWxsJykpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWVudSBvZiBkYXRhLmFwcGxpY2F0aW9uX21lbnUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1lbnVEYXRhTWFwW21lbnUubWVudV9pZF0gPSBtZW51O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgcm9sZSBvZiBkYXRhLnVzZXJfcm9sZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXNlclJvbGVEYXRhTWFwW3JvbGUucm9sZV0gPSByb2xlLndvcmtmbG93X3NlcXVlbmNlX2lkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICogbG9hZCBib290c3RyYXAgc2V0dGluZ3NcclxuICAgICAgICAgICAgICovXHJcbiAgICAgICAgICAgIGlmIChkYXRhWydhcHBsaWNhdGlvbl9zZXR0aW5ncyddKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdG9yZURhdGEgPSBbJ2lzX2Jvb3RzdHJhcCcsICdjb250YWluZXJfdHlwZScsICdpc19tYXRlcmlhbCddO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzRGF0YSBvZiBzdG9yZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVsnYXBwbGljYXRpb25fc2V0dGluZ3MnXVtzRGF0YV0gfHwgJycpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGRhdGFbJ3NvY2tldF9zZXR0aW5ncyddKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhWydzb2NrZXRfc2V0dGluZ3MnXSA9IHRoaXMuY29tbW9uVXRpbC5zZXRBcHBDb25maWdWYWx1ZShkYXRhWydzb2NrZXRfc2V0dGluZ3MnXSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc29ja2V0X3NldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoZGF0YVsnc29ja2V0X3NldHRpbmdzJ10pIHx8ICd7fScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiB0aGUgYXBpIGRhdGEgdGhhdCBpcyBzZXQgdG8gZHluYW1pYyBtZXNzYWdlXHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGVuIGFwaSBjYWxsIGJhY2sgZGF0YVxyXG4gICAgICovXHJcbiAgICBzZXREeW5hbWljTWVzc2FnZShkYXRhKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlc0RhdGEgaW4gdGhpcy5tZXNzYWdlc0RhdGFNYXApIHtcclxuICAgICAgICAgICAgY29uc3QgbSA9IHRoaXMubWVzc2FnZXNEYXRhTWFwW21lc3NhZ2VzRGF0YV07XHJcbiAgICAgICAgICAgIGlmIChtLnR5cGUudG9Mb3dlckNhc2UoKSA9PT0gJ2R5bmFtaWMnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIW0ubWVzc2FnZV90ZXh0X2NvbmZpZykgeyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbS5tZXNzYWdlX3RleHRfY29uZmlnID0gbS5tZXNzYWdlX3RleHQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHsgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBtLm1lc3NhZ2VfdGV4dCA9IG0ubWVzc2FnZV90ZXh0X2NvbmZpZztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBtLm1lc3NhZ2VfdGV4dC5tYXRjaChuZXcgUmVnRXhwKC9cXCUoLio/KVxcJS9nKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5cyAmJiBrZXlzLmxlbmd0aCA+IDApIHsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBrZXlzLmZvckVhY2goKGFwaUtleSwgaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXkgPSBhcGlLZXkuc3BsaXQoJyUnKVsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleVZhbHVlID0gdGhpcy5yZXR1cm5LZXlWYWx1ZShhcGlLZXkudHJpbSgpLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbS5tZXNzYWdlX3RleHQgPSBtLm1lc3NhZ2VfdGV4dC5yZXBsYWNlKCclJyArIGFwaUtleSArICclJywga2V5VmFsdWUgIT09IHVuZGVmaW5lZCA/IGtleVZhbHVlIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubWVzc2FnZXNEYXRhTWFwKVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBleHRyYWN0QVBJS2V5VmFsdWUobWVzc2FnZSkge1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBtZXNzYWdlLm1lc3NhZ2VfdGV4dC5tYXRjaChuZXcgUmVnRXhwKC9cXCUoLio/KVxcJS9nKSk7XHJcbiAgICAgICAgdmFyIGFwaVZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKGtleXMgJiYga2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGtleXMuZm9yRWFjaCgoYXBpS2V5LCBpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBhcGlLZXkgPSBhcGlLZXkuc3BsaXQoJyUnKVsxXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGFwaUtleS5zcGxpdCgnIyMnKVswXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaGFuZGxlckRhdGEgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RWYWx1ZSA9IGhhbmRsZXJEYXRhLnZhbHVlW2FwaUtleV07XHJcbiAgICAgICAgICAgICAgICAgICAgYXBpVmFsdWUgPSBtZXNzYWdlLm1lc3NhZ2VfdGV4dC5yZXBsYWNlKCclJyArIGFwaUtleSArICclJywgZXh0cmFjdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBpVmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBhcGlWYWx1ZTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogdGhlIGFwaSBrZXkgdGhhdCBpcyBzZXQgdG8gZHluYW1pY1xyXG4gICAgICogQHBhcmFtIGFwaUtleSB0aGUgYXBpIGtleSBzdHJpbmdcclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZW4gYXBpIGNhbGwgYmFjayBkYXRhXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmV0dXJuS2V5VmFsdWUoYXBpS2V5LCBkYXRhKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0QVBJS2V5VXRpbC5pc1NpbmdsZUFwaUtleSB8fCB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGFwaUtleSwgZGF0YSkgIT09IG51bGwgP1xyXG4gICAgICAgICAgICB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGFwaUtleSwgZGF0YSkgOiB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGFwaUtleSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QVBJS2V5VXRpbC5yZXR1cm5WYWx1ZUZyb21BcGlTdG9yZVVzaW5nSGFuZGxlck5hbWUoYXBpS2V5KSkgIT09IG51bGwgPyB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGFwaUtleSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEFQSUtleVV0aWwucmV0dXJuVmFsdWVGcm9tQXBpU3RvcmVVc2luZ0hhbmRsZXJOYW1lKGFwaUtleSkpIDogJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVsb2FkUGFnZSgpIHtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIHByZSBmZXRjaCB0aGUgYmFzZSB3ZmUganNvbiBzbyB0aGF0IGl0IGdldHMgbG9hZGVkIG9uY2Ugd2hlbiBhIHN0ZXAgaXMgbG9hZGVkXHJcbiAgICAgKiBhbmQgdGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBnZXQgbWFwcGVkIGJlZm9yZSB0aGUgc3RlcCBpcyBsb2FkZWRcclxuICAgICAqL1xyXG4gICAgYXN5bmMgcHJlZmV0Y2hCYXNlSlNPTigpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmFzZUpTT05EYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFzZUpTT05EYXRhID0gYXdhaXQgdGhpcy5odHRwLmdldChgJHt0aGlzLmdsb2JhbFBhdGh9JHt0aGlzLmRlZmF1bHRMYW5nfSR7dGhpcy5jb25maWdCYXNlUGF0aH1gKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgIC8vY29uZmlnIEpTT04gdmVyc2lvbiB1cGRhdGUgcHJvY2Vzc1xyXG4gICAgICAgICAgICAgaWYgKHRoaXMuYmFzZUpTT05EYXRhICYmIHRoaXMuYmFzZUpTT05EYXRhWyd2ZXJzaW9uX2lkJ10pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0pTT05WZXJzaW9uID0gdGhpcy5iYXNlSlNPTkRhdGFbJ3ZlcnNpb25faWQnXSsnJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZ0pTT05WZXJzaW9uT2xkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NPTkZJR19KU09OX1ZFUlNJT04nKTtcclxuICAgICAgICAgICAgICAgIGxldCByZWxvYWRGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnSlNPTlZlcnNpb24gJiYgY29uZmlnSlNPTlZlcnNpb25PbGQgJiYgY29uZmlnSlNPTlZlcnNpb24gIT09IGNvbmZpZ0pTT05WZXJzaW9uT2xkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2Vzc2lvblN0b3JhZ2UuY2xlYXIoKTtcclxuICAgICAgICAgICAgICAgICAgICByZWxvYWRGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbmZpZ0pTT05WZXJzaW9uICYmIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdDT05GSUdfSlNPTl9WRVJTSU9OJywgY29uZmlnSlNPTlZlcnNpb24pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlbG9hZEZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbG9hZFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldEFkZGl0aW9uYWxQYXJhbWV0ZXJzKHRoaXMuYmFzZUpTT05EYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyB8fCBbXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0QWRkaXRpb25hbFBhcmFtZXRlcnModGhpcy5iYXNlSlNPTkRhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzIHx8IFtdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NCYXNlSlNPTih0aGlzLmJhc2VKU09ORGF0YSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RGVmYXVsdFN0ZXAoc2VxdWVuY2VfaWQgPSAnJykge1xyXG4gICAgICAgIGxldCBkZWZhdWx0U3RlcCA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuYmFzZUpTT05EYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJhc2VKU09ORGF0YS53b3JrZmxvd19zZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VEYXRhID0gdGhpcy5iYXNlSlNPTkRhdGEud29ya2Zsb3dfc2VxdWVuY2UuZmluZCgoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpLnNlcXVlbmNlLmxlbmd0aCA+IDAgJiYgKCFzZXF1ZW5jZV9pZCB8fCBpLnNlcXVlbmNlX2lkID09PSBzZXF1ZW5jZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmF2aWdhdGVTdGVwTmFtZU9ubHkgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmF2aWdhdGVTdGVwTmFtZU9ubHknKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlcXVlbmNlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHsgbmFtZSwgdGlkIH0gPSBzZXF1ZW5jZURhdGEuc2VxdWVuY2VbMF1cclxuICAgICAgICAgICAgICAgICAgICA7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hdmlnYXRlU3RlcE5hbWVPbmx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdGVwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE5hbWU6IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWiBdL2csICcnKS5zcGxpdCgnICcpLmpvaW4oJy0nKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRTdGVwID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE5hbWU6IG5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWiBdL2csICcnKS5zcGxpdCgnICcpLmpvaW4oJy0nKSArICctJyArIHRpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGVmYXVsdFN0ZXA7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTG9hZCBzdGVwIGNvbmZpZ3VyYXRpb24gYW5kIHN1cHBvcnRpbmcgaW5mb3JtYXRpb25cclxuICAgICAqIEBwYXJhbSByb2xlSWQ6IHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHN0ZXBJZDogc3RyaW5nXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2s6IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBnZXRXRkVTdGVwRGF0YShyb2xlSWQ6IHN0cmluZywgc3RlcElkOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLnN0ZXBEYXRhID0ge307XHJcbiAgICAgICAgICAgIGNvbnN0IGluaXRDYWxsczogYW55W10gPSBbXTtcclxuICAgICAgICAgICAgLy8gY29uc3Qgc0lkID0gc3RlcElkLm1hdGNoKC9bMC05XSskL2cpO1xyXG4gICAgICAgICAgICAvLyBzdGVwSWQgPSBzSWRbMF0gPyBzSWRbMF0gOiBzdGVwSWQ7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiBjdXN0b20gRXJyb3IgTWVzc2FnZXMgaXMgdW5kZWZpbmVkIHRoZW4gYXNzaWduIHRoZSBjdXN0b20gZXJyb3IgbWVzc2FnZXMgZnJvbSBjZWVJbml0IHNlcnZpY2VcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmN1c3RvbUVycm9yTWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VzdG9tRXJyb3JNZXNzYWdlcyA9IHRoaXMuY2VlSW5pdFNlcnZpY2UuY3VzdG9tRXJyb3JzO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpbml0Q2FsbHMucHVzaCh0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZ2xvYmFsUGF0aH0ke3RoaXMuZGVmYXVsdExhbmd9JHt0aGlzLmNvbmZpZ0FwcGxpY2F0aW9uUGF0aH0ke3N0ZXBJZH0uanNvbmApKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VxdWVuY2VEYXRhTWFwLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmJhc2VKU09ORGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRDYWxscy5wdXNoKHRoaXMuaHR0cC5nZXQodGhpcy5jb25maWdCYXNlUGF0aCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvcmtKb2luKGluaXRDYWxscykuc3Vic2NyaWJlKChyZXN1bHRzOiBBcnJheTxhbnk+KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5iYXNlSlNPTkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5iYXNlSlNPTkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXBEYXRhKHJvbGVJZCwgcmVzdWx0cywgY2FsbGJhY2spO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9ycyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgJ0FuIGVycm9yIG9jY3VycmVkIHdoaWxlIGxvYWRpbmcgcGFnZS4nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCAnQW4gZXJyb3Igb2NjdXJyZWQgd2hpbGUgbG9hZGluZyBwYWdlLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IHVzZXIgc3RlcCBhY2Nlc3MgaW5mb3JtYXRpb24gYmFzZWQgb24gcm9sZSBpZC5cclxuICAgICAqIEBwYXJhbSByb2xlSWQ6IHN0cmluZ1xyXG4gICAgICogQHBhcmFtIHN0ZXBEYXRhOiBhbnlcclxuICAgICAqIEBwYXJhbSBibG9ja3NEYXRhOiBhbnlcclxuICAgICAqIEBwYXJhbSBjYWxsYmFjazogYW55XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjaGVja1VzZXJSb2xlQWNjZXNzKHJvbGVJZDogc3RyaW5nLCBzdGVwRGF0YTogYW55LCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3Qgcm9sZUFyciA9IHRoaXMuYmFzZUpTT05EYXRhLnVzZXJfcm9sZXMubWFwKChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaS5yb2xlO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgbGV0IGFub255bW91c0NvdW50ID0gMDtcclxuICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VEYXRhID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJvbGVOYW1lIG9mIHJvbGVJZC5zcGxpdCgnLCcpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VyUm9sZURhdGFNYXBbKHJvbGVOYW1lID09PSAnJyB8fCByb2xlTmFtZSA9PT0gbnVsbCkgPyAnQU5PTllNT1VTJyA6IHJvbGVOYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHRoaXMudXNlclJvbGVEYXRhTWFwWyhyb2xlTmFtZSA9PT0gJycgfHwgcm9sZU5hbWUgPT09IG51bGwpID8gJ0FOT05ZTU9VUycgOiByb2xlTmFtZV0gfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51c2VyUm9sZURhdGFNYXBbJ0FOT05ZTU9VUyddO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlcXVlbmNlRGF0YS5wdXNoKC4uLnNlcXVlbmNlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAocm9sZUFyci5pbmNsdWRlcyhyb2xlTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbm9ueW1vdXNDb3VudCArPSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChyb2xlSWQubGVuZ3RoID4gMCAmJiByb2xlQXJyLmluY2x1ZGVzKCdBVVRIRU5USUNBVEVEJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNlcXVlbmNlcyA9IHRoaXMudXNlclJvbGVEYXRhTWFwWydBVVRIRU5USUNBVEVEJ107XHJcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZURhdGEucHVzaCguLi5zZXF1ZW5jZXMpO1xyXG4gICAgICAgICAgICAgICAgYW5vbnltb3VzQ291bnQgKz0gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYW5vbnltb3VzQ291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gdGhpcy51c2VyUm9sZURhdGFNYXBbJ0FOT05ZTU9VUyddO1xyXG4gICAgICAgICAgICAgICAgc2VxdWVuY2VEYXRhLnB1c2goLi4uc2VxdWVuY2VzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoc2VxdWVuY2VEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldEFsbFN0ZXBJZEZyb21TZXF1ZW5jZUFycmF5KHNlcXVlbmNlRGF0YSkuaW5jbHVkZXMoc3RlcERhdGEudGlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhzdGVwRGF0YSwgdW5kZWZpbmVkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsICdObyBzdGVwIGZvdW5kIGZvciB0aGUgZ2l2ZW4gdXNlciByb2xlLicpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHVuZGVmaW5lZCwgJ0ludmFsaWQgdXNlciByb2xlIGRlZmluaXRpb24uJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodW5kZWZpbmVkLCAnQW4gZXJyb3Igb2NjdXJlZCB3aGlsZSBsb2FkaW5nIHBhZ2UuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgZGVmYXVsdCBzdGVwIGJ5IHVzZXIgcm9sZSBpZC5cclxuICAgICAqIEBwYXJhbSByb2xlSWQ6IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgZ2V0RGVmYXVsdFN0ZXBCeVJvbGUocm9sZUlkOiBzdHJpbmcpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByb2xlQXJyID0gdGhpcy5iYXNlSlNPTkRhdGEudXNlcl9yb2xlcy5tYXAoKGkpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpLnJvbGU7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBsZXQgYW5vbnltb3VzQ291bnQgPSAwO1xyXG4gICAgICAgICAgICBjb25zdCBzZXF1ZW5jZURhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgcm9sZU5hbWUgb2Ygcm9sZUlkLnNwbGl0KCcsJykpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVzZXJSb2xlRGF0YU1hcFsocm9sZU5hbWUgPT09ICcnIHx8IHJvbGVOYW1lID09PSBudWxsKSA/ICdBTk9OWU1PVVMnIDogcm9sZU5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gdGhpcy51c2VyUm9sZURhdGFNYXBbKHJvbGVOYW1lID09PSAnJyB8fCByb2xlTmFtZSA9PT0gbnVsbCkgPyAnQU5PTllNT1VTJyA6IHJvbGVOYW1lXSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZXJSb2xlRGF0YU1hcFsnQU5PTllNT1VTJ107XHJcbiAgICAgICAgICAgICAgICAgICAgc2VxdWVuY2VEYXRhLnB1c2goLi4uc2VxdWVuY2VzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyb2xlQXJyLmluY2x1ZGVzKHJvbGVOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFub255bW91c0NvdW50ICs9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJvbGVJZC5sZW5ndGggPiAwICYmIHJvbGVBcnIuaW5jbHVkZXMoJ0FVVEhFTlRJQ0FURUQnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VxdWVuY2VzID0gdGhpcy51c2VyUm9sZURhdGFNYXBbJ0FVVEhFTlRJQ0FURUQnXTtcclxuICAgICAgICAgICAgICAgIHNlcXVlbmNlRGF0YS5wdXNoKC4uLnNlcXVlbmNlcyk7XHJcbiAgICAgICAgICAgICAgICBhbm9ueW1vdXNDb3VudCArPSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhbm9ueW1vdXNDb3VudCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzZXF1ZW5jZXMgPSB0aGlzLnVzZXJSb2xlRGF0YU1hcFsnQU5PTllNT1VTJ107XHJcbiAgICAgICAgICAgICAgICBzZXF1ZW5jZURhdGEucHVzaCguLi5zZXF1ZW5jZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERlZmF1bHRTdGVwKHNlcXVlbmNlRGF0YVswXVswXSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogTWFwIGJhc2UuanNvbiBkYXRhIGZvciBhY2Nlc3MuXHJcbiAgICAgKiBAcGFyYW0gcm9sZUlkIDogVXNlciByb2xlIElEXHJcbiAgICAgKiBAcGFyYW0gc3RlcERhdGEgOiBXRkUgU3RlcCBkYXRhXHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2sgOiBEYXRhIGxvYWRlZCBjYWxsYmFja1xyXG4gICAgICovXHJcbiAgICBwdWJsaWMgbWFwRGF0YShyb2xlSWQ6IHN0cmluZywgc3RlcERhdGE6IGFueVtdLCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQmFzZUpTT04oc3RlcERhdGFbMV0pXHJcbiAgICAgICAgICAgIGlmIChzdGVwRGF0YVswXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGVwRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoc3RlcERhdGFbMF0pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tVc2VyUm9sZUFjY2Vzcyhyb2xlSWQsIHRoaXMuc3RlcERhdGEsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh1bmRlZmluZWQsICdBbiBlcnJvciBvY2N1cnJlZCB3aGlsZSBsb2FkaW5nIHBhZ2UuJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBtZXRob2QgbG9hZHMgYSBzdGVwIHdoZW4gdGhlIGZ1bmN0aW9uXHJcbiAgICAgKiBpcyBjYWxsZWQgYmFzZWQgb24gdGhlIHN0ZXAgSWRcclxuICAgICAqIEBwYXJhbSBzdGVwSWQ6IHN0cmluZ1xyXG4gICAgICovXHJcbiAgICBsb2FkT25MYW5nQ2hhbmdlKHN0ZXBJZDogc3RyaW5nLCBsYW5nOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzdGVwID0gdGhpcy5odHRwLmdldChgJHt0aGlzLmdsb2JhbFBhdGh9JHtsYW5nfSR7dGhpcy5jb25maWdBcHBsaWNhdGlvblBhdGh9JHtzdGVwSWR9Lmpzb25gKTtcclxuICAgICAgICBjb25zdCBiYXNlSlNPTiA9IHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5nbG9iYWxQYXRofSR7bGFuZ30ke3RoaXMuY29uZmlnQmFzZVBhdGh9YCk7XHJcbiAgICAgICAgcmV0dXJuIGZvcmtKb2luKFtzdGVwLCBiYXNlSlNPTl0pO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldEFkZGl0aW9uYWxQYXJhbWV0ZXJzKGFkZGl0aW9uYWxQYXJhbWV0ZXJzOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgLy8gdGhpcy5kZWZhdWx0TGFuZyA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpIHx8ICcnO1xyXG4gICAgICAgIGZvciAoY29uc3QgYWRkaXRpb25hbFBhcmFtZXRlciBvZiBhZGRpdGlvbmFsUGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1WYWx1ZSA9IGFkZGl0aW9uYWxQYXJhbWV0ZXIudmFsdWUgPyBhZGRpdGlvbmFsUGFyYW1ldGVyLnZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbYWRkaXRpb25hbFBhcmFtZXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbVZhbHVlO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiB1bmNvbW1lbnQgaWYgZGVmYXVsdCBMYW5ndWFnZSBpcyBzZXQgYXMgYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJcclxuICAgICAgICAgICAgLy8gc2V0IGRlZmF1bHQgbGFuZ3VhZ2VcclxuICAgICAgICAgICAgLy8gaWYgKGFkZGl0aW9uYWxQYXJhbWV0ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdEZWZhdWx0TGFuZ3VhZ2UnICYmICF0aGlzLmRlZmF1bHRMYW5nKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmRlZmF1bHRMYW5nID0gcGFyYW1WYWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGlmIChwYXJhbVZhbHVlICYmIHBhcmFtVmFsdWUuaW5jbHVkZXMoJyQkJykpIHtcclxuICAgICAgICAgICAgICAgIHBhcmFtVmFsdWUgPSBwYXJhbVZhbHVlLnNwbGl0KCckJCcpWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oYWRkaXRpb25hbFBhcmFtZXRlci5wYXJhbWV0ZXJfdHlwZSkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShhZGRpdGlvbmFsUGFyYW1ldGVyLnBhcmFtZXRlcl90eXBlLCBwYXJhbVZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMuZGVmYXVsdExhbmcpIHtcclxuICAgICAgICAvLyAgICAgd2luZG93LmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYW5nJywgYCR7dGhpcy5kZWZhdWx0TGFuZ31gKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TGlzdE9mU3RlcElkc0J5V29ya2Zsb3cod29ya2Zsb3dJZHMpIHtcclxuICAgICAgICBjb25zdCBzdGVwSWRzID0gW107XHJcbiAgICAgICAgaWYgKHR5cGVvZiB3b3JrZmxvd0lkcyA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgd29ya2Zsb3dJZHMgPSBbd29ya2Zsb3dJZHNdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IHdvcmtmbG93SWQgb2Ygd29ya2Zsb3dJZHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VxdWVuY2VEYXRhTWFwW3dvcmtmbG93SWRdKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHN0ZXAgb2YgdGhpcy5zZXF1ZW5jZURhdGFNYXBbd29ya2Zsb3dJZF0uc2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdGVwSWRzLnB1c2goc3RlcC50aWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdGVwSWRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBwcm9ncmVzcyBibG9jayBzdGVwIHRvIHBlbmRpbmdcclxuICAgICAqIEBwYXJhbSBzZXF1ZW5jZUlkIHRoZSBzZXF1ZW5jZSBpZFxyXG4gICAgICovXHJcbiAgICBzZXRTZXF1ZW5jZVByb2dyZXNzSW5pdChzZXF1ZW5jZUlkOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5wcm9ncmVzc0Jhck1hcCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMucHJvZ3Jlc3NCYXJNYXBbc2VxdWVuY2VJZF07XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc0JhciAmJiBwcm9ncmVzc0Jhci5wcm9ncmVzcyAmJiBwcm9ncmVzc0Jhci5wcm9ncmVzcy5wcm9ncmVzc19iYXJfaWQpIHtcclxuICAgICAgICAgICAgICAgIHByb2dyZXNzQmFyLnN0ZXBzLmZvckVhY2goc3RlcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsLnNldEFueVN0YXRlKHByb2dyZXNzQmFyLnByb2dyZXNzLnByb2dyZXNzX2Jhcl9pZCwgc3RlcC50aWQsICdTVEFURV9QRU5ESU5HJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gc2VxdWVuY2VBcnJheVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEFsbFN0ZXBJZEZyb21TZXF1ZW5jZUFycmF5KHNlcXVlbmNlQXJyYXk6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBjb25zdCBzdGVwSWRBcnJheSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qgc2luZ2xlU2VxdWVuY2Ugb2Ygc2VxdWVuY2VBcnJheSkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNlcXVlbmNlIG9mIHRoaXMuc2VxdWVuY2VEYXRhTWFwW3NpbmdsZVNlcXVlbmNlXT8uc2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBJZEFycmF5LnB1c2goc2VxdWVuY2UudGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gc3RlcElkQXJyYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgbWVzc2FnZXMgYmFzZWQgb24gbWVzc2FnZSBpZFxyXG4gICAgICogQHBhcmFtIGNvZGVcclxuICAgICAqL1xyXG4gICAgZ2V0TWVzc2FnZShjb2RlOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBUT0RPIGhhbmRsZSBkeW5hbWljIG1lc3NhZ2VzXHJcbiAgICAgICAgaWYgKHRoaXMubWVzc2FnZXNEYXRhTWFwW2NvZGVdKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzRGF0YU1hcFtjb2RlXS5tZXNzYWdlX3RleHQ7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLm1lc3NhZ2VzRGF0YU1hcFtjb2RlXS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdkeW5hbWljJykge1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMubWVzc2FnZXNEYXRhTWFwW2NvZGVdLm1lc3NhZ2VfdGV4dDtcclxuICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLm1lc3NhZ2VzRGF0YU1hcFtjb2RlXS5tZXNzYWdlX3RleHQ7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHdob2xlIFdGRSBCYXNlIEpTT04gRGF0YVxyXG4gICAgICovXHJcbiAgICBsb2FkV0ZFVW5pcXVlSWRKU09OKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZ2xvYmFsUGF0aH0ke3RoaXMuZGVmYXVsdExhbmd9JHt0aGlzLmZpZWxkSWRNYXBCYXNlUGF0aH1gKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNhdmUgdGhlIHN0ZXAgZGF0YSBpbiBjYWNoZVxyXG4gICAgICogQHBhcmFtIHN0ZXBOYW1lXHJcbiAgICAgKi9cclxuICAgIHNldFN0ZXBEYXRhSW5DYWNoZShzdGVwTmFtZSxkYXRhKSB7XHJcbiAgICAgICAgc3RlcE5hbWUgPSB0aGlzLnN0ZXBOYW1lQW5kSWREYXRhTWFwW3N0ZXBOYW1lXSA/IHRoaXMuc3RlcE5hbWVBbmRJZERhdGFNYXBbc3RlcE5hbWVdIDogc3RlcE5hbWU7XHJcbiAgICAgICAgdGhpcy5zdGVwRGF0YVN0b3JlW3N0ZXBOYW1lXSA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xyXG4gICAgICAgIC8vIGxldCBzdGVwRGF0YSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwRGF0YUNhY2hlJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdGVwRGF0YUNhY2hlJykpWydkYXRhJ10gOiBbXTtcclxuICAgICAgICAvLyBsZXQgY2FjaGVEYXRhID0gKCBzdGVwRGF0YSAmJiBzdGVwRGF0YS5sZW5ndGggPiAwICkgPyBzdGVwRGF0YS5maWx0ZXIoZWwgPT4gZWwuc3RlcF9pZCA9PSBzdGVwTmFtZSkgOiBbXTtcclxuICAgICAgICAvLyBpZihjYWNoZURhdGEgJiYgY2FjaGVEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgLy8gICAgIHN0ZXBEYXRhLnB1c2goe3N0ZXBfaWQ6IHN0ZXBOYW1lLCBzdGVwX2RhdGE6IGRhdGF9KTtcclxuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3N0ZXBEYXRhQ2FjaGUnLCBKU09OLnN0cmluZ2lmeSh7ZGF0YSA6IHN0ZXBEYXRhfSkpXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZmV0Y2ggdGhlIHN0ZXAgZGF0YSBmcm9tIGNhY2hlXHJcbiAgICAgKiBAcGFyYW0gc3RlcE5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0U3RlcERhdGFGcm9tQ2FjaGUoc3RlcE5hbWUpIHtcclxuICAgICAgICBzdGVwTmFtZSA9IHRoaXMuc3RlcE5hbWVBbmRJZERhdGFNYXBbc3RlcE5hbWVdID8gdGhpcy5zdGVwTmFtZUFuZElkRGF0YU1hcFtzdGVwTmFtZV0gOiBzdGVwTmFtZTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zdGVwRGF0YVN0b3JlW3N0ZXBOYW1lXT8gSlNPTi5wYXJzZSh0aGlzLnN0ZXBEYXRhU3RvcmVbc3RlcE5hbWVdKSA6IG51bGw7XHJcbiAgICAgICAgLy8gbGV0IHN0ZXBEYXRhO1xyXG4gICAgICAgIC8vIGxldCBzdGVwRGF0YUNhY2hlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXBEYXRhQ2FjaGUnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0ZXBEYXRhQ2FjaGUnKSlbJ2RhdGEnXSA6IFtdO1xyXG4gICAgICAgIC8vIGxldCBjYWNoZURhdGEgPSAoIHN0ZXBEYXRhQ2FjaGUgJiYgc3RlcERhdGFDYWNoZS5sZW5ndGggPiAwICkgPyBzdGVwRGF0YUNhY2hlLmZpbHRlcihlbCA9PiBlbC5zdGVwX2lkID09IHN0ZXBOYW1lKSA6IFtdO1xyXG4gICAgICAgIC8vIGlmKGNhY2hlRGF0YSAmJiBjYWNoZURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICBzdGVwRGF0YSA9IGNhY2hlRGF0YVswXS5zdGVwX2RhdGE7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHJldHVybiBzdGVwRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgdGhlIHN0ZXAgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIHN0ZXAgbmFtZVxyXG4gICAgICogQHBhcmFtIHN0ZXBOYW1lXHJcbiAgICAgKi9cclxuICAgIGxvYWRTdGVwQnlOYW1lKHN0ZXBOYW1lKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0ZXBOYW1lQW5kSWREYXRhTWFwW3N0ZXBOYW1lXSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdJbnZhbGlkIHN0ZXAgbmFtZTogJyArIHN0ZXBOYW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zdCBzdGVwRGF0YUNhY2hlID0gdGhpcy5nZXRTdGVwRGF0YUZyb21DYWNoZShzdGVwSWQpO1xyXG4gICAgICAgICAgICBjb25zdCBzdGVwSWQgPSB0aGlzLnN0ZXBOYW1lQW5kSWREYXRhTWFwW3N0ZXBOYW1lXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RlcERhdGFTdG9yZVtzdGVwSWRdKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KEpTT04ucGFyc2UodGhpcy5zdGVwRGF0YVN0b3JlW3N0ZXBJZF0pKTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmh0dHAuZ2V0KGAke3RoaXMuZ2xvYmFsUGF0aH0ke3RoaXMuZGVmYXVsdExhbmd9JHt0aGlzLmNvbmZpZ0FwcGxpY2F0aW9uUGF0aH0ke3N0ZXBJZH0uanNvbmApLnN1YnNjcmliZSgoY3VyclN0ZXBEYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0ZXBEYXRhU3RvcmVbc3RlcElkXSA9IEpTT04uc3RyaW5naWZ5KGN1cnJTdGVwRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChjdXJyU3RlcERhdGEpOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmNvbXBsZXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5lcnJvcihlcnJvcik7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1bnN1YnNjcmliZSgpIHsgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHJldHVybiB0aGlzLmh0dHAuZ2V0KFxyXG4gICAgICAgIC8vICAgICBgJHt0aGlzLmdsb2JhbFBhdGh9JHt0aGlzLmRlZmF1bHRMYW5nfSR7dGhpcy5jb25maWdBcHBsaWNhdGlvblBhdGh9JHt0aGlzLnN0ZXBOYW1lQW5kSWREYXRhTWFwW3N0ZXBOYW1lXX0uanNvbmApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgc3RlcCBkYXRhIGFjY29yZGluZyB0byB0aGUgc3RlcCBuYW1lXHJcbiAgICAgKiBAcGFyYW0gc3RlcElkXHJcbiAgICAgKi9cclxuICAgIGxvYWRTdGVwQnlJZChzdGVwSWQpIHtcclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGUoKG9ic2VydmVyKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0ZXBEYXRhQ2FjaGUgPSB0aGlzLmdldFN0ZXBEYXRhRnJvbUNhY2hlKHN0ZXBJZCk7XHJcbiAgICAgICAgICAgIGlmIChzdGVwRGF0YUNhY2hlKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KHN0ZXBEYXRhQ2FjaGUpOyAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5nbG9iYWxQYXRofSR7dGhpcy5kZWZhdWx0TGFuZ30ke3RoaXMuY29uZmlnQXBwbGljYXRpb25QYXRofSR7c3RlcElkfS5qc29uYCkuc3Vic2NyaWJlKChjdXJyU3RlcERhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RlcERhdGFJbkNhY2hlKHN0ZXBJZCwgY3VyclN0ZXBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGN1cnJTdGVwRGF0YSk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTsgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCkgeyB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5nbG9iYWxQYXRofSR7dGhpcy5kZWZhdWx0TGFuZ30ke3RoaXMuY29uZmlnQXBwbGljYXRpb25QYXRofSR7c3RlcElkfS5qc29uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHNlcXVlbmNlIG5hbWUgYW5kIGluZGV4IG9mIHRoZSBjdXJyZW50IHN0ZXBcclxuICAgICAqL1xyXG4gICAgZ2V0V29ya2Zsb3dTZXF1ZW5jZUluZGV4RnJvbVN0ZXAoc3RlcElkOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXHJcbiAgICAgICAgZm9yIChjb25zdCBzZXF1ZW5jZSBpbiB0aGlzLnNlcXVlbmNlRGF0YU1hcCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNpbmdsZVNlcXVlbmNlSW5kZXggaW4gdGhpcy5zZXF1ZW5jZURhdGFNYXBbc2VxdWVuY2VdLnNlcXVlbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXF1ZW5jZURhdGFNYXBbc2VxdWVuY2VdLnNlcXVlbmNlW3NpbmdsZVNlcXVlbmNlSW5kZXhdLnRpZCA9PT0gc3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHsgc2VxdWVuY2UsIHNpbmdsZVNlcXVlbmNlSW5kZXggfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIGdldE5leHRTdGVwSW5DdXJyZW50U2VxdWVuY2UoY3VycmVudFN0ZXBJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3Qgc2VxdWVuY2VEYXRhID0gdGhpcy5nZXRXb3JrZmxvd1NlcXVlbmNlSW5kZXhGcm9tU3RlcChjdXJyZW50U3RlcElkKTtcclxuICAgICAgICBpZiAoc2VxdWVuY2VEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgc2VxdWVuY2UsIHNpbmdsZVNlcXVlbmNlSW5kZXggfSA9IHNlcXVlbmNlRGF0YTtcclxuICAgICAgICAgICAgaWYgKChOdW1iZXIoc2luZ2xlU2VxdWVuY2VJbmRleCkgKyAxKSA8IHRoaXMuc2VxdWVuY2VEYXRhTWFwW3NlcXVlbmNlXS5zZXF1ZW5jZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcXVlbmNlRGF0YU1hcFtzZXF1ZW5jZV0uc2VxdWVuY2VbTnVtYmVyKHNpbmdsZVNlcXVlbmNlSW5kZXgpICsgMV0udGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFByZXZpb3VzU3RlcEluQ3VycmVudFNlcXVlbmNlKGN1cnJlbnRTdGVwSWQ6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHNlcXVlbmNlRGF0YSA9IHRoaXMuZ2V0V29ya2Zsb3dTZXF1ZW5jZUluZGV4RnJvbVN0ZXAoY3VycmVudFN0ZXBJZCk7XHJcbiAgICAgICAgaWYgKHNlcXVlbmNlRGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCB7IHNlcXVlbmNlLCBzaW5nbGVTZXF1ZW5jZUluZGV4IH0gPSBzZXF1ZW5jZURhdGE7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoc2luZ2xlU2VxdWVuY2VJbmRleCkgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcXVlbmNlRGF0YU1hcFtzZXF1ZW5jZV0uc2VxdWVuY2VbTnVtYmVyKHNpbmdsZVNlcXVlbmNlSW5kZXgpIC0gMV0udGlkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8gT0xEIEltcGxlbWVudGF0aW9ucyAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICBnZXRGaXJzdFNlcXVlbmNlSW5TZXF1ZW5jZUFycmF5KHNlcXVlbmNlQXJyYXk6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBpZiAoc2VxdWVuY2VBcnJheS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNlcXVlbmNlRGF0YU1hcFtzZXF1ZW5jZUFycmF5WzBdXS5zZXF1ZW5jZVswXS50aWQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuICc0MDQnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRGaXJzdFN0ZXBJblNxdWVuY2Uoc3RlcEFycmF5OiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgcmV0dXJuIHN0ZXBBcnJheVswXS50aWQ7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U2VxdWVuY2VEZWZhdWx0U3RlcElkQnlTZXF1ZW5jZUlkKHNlcXVlbmNlSWQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZUlkID0gc2VxdWVuY2VJZDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZVBvaW50ZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkU2VxRGF0YSA9IHRoaXMuc2VxdWVuY2VEYXRhTWFwW3RoaXMuY3VycmVudFNlcXVlbmNlSWRdO1xyXG4gICAgICAgIHJldHVybiBzZWxlY3RlZFNlcURhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0TmV4dFN0ZXBJbkN1cnJlbnRTZXF1ZW5jZSgpIHtcclxuICAgIC8vICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlUG9pbnRlciA8ICh0aGlzLnNlcXVlbmNlRGF0YU1hcFt0aGlzLmN1cnJlbnRTZXF1ZW5jZUlkXS5zZXF1ZW5jZS5sZW5ndGggLSAxKSkge1xyXG4gICAgLy8gICAgIHRoaXMuY3VycmVudFNlcXVlbmNlUG9pbnRlcisrO1xyXG4gICAgLy8gICB9XHJcbiAgICAvLyAgIHJldHVybiB0aGlzLnNlcXVlbmNlRGF0YU1hcFt0aGlzLmN1cnJlbnRTZXF1ZW5jZUlkXS5zZXF1ZW5jZVt0aGlzLmN1cnJlbnRTZXF1ZW5jZVBvaW50ZXJdLnRpZDtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBnZXRQcmV2aW91c1N0ZXBJbkN1cnJlbnRTZXF1ZW5jZSgpIHtcclxuICAgIC8vICAgaWYgKHRoaXMuY3VycmVudFNlcXVlbmNlUG9pbnRlciA+IDApIHtcclxuICAgIC8vICAgICB0aGlzLmN1cnJlbnRTZXF1ZW5jZVBvaW50ZXItLTtcclxuICAgIC8vICAgfVxyXG4gICAgLy8gICByZXR1cm4gdGhpcy5zZXF1ZW5jZURhdGFNYXBbdGhpcy5jdXJyZW50U2VxdWVuY2VJZF0uc2VxdWVuY2VbdGhpcy5jdXJyZW50U2VxdWVuY2VQb2ludGVyXS50aWQ7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIHRoZSBibG9jayBkYXRhIGFjY29yZGluZyB0byB0aGUgYmxvY2sgbmFtZVxyXG4gICAgICogQHBhcmFtIGJsb2NrTmFtZVxyXG4gICAgICovXHJcbiAgICBzZWFyY2hCbG9ja0RhdGFGcm9tQ2FjaGUoYmxvY2tOYW1lKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tEYXRhU3RvcmVbYmxvY2tOYW1lXSA/IEpTT04ucGFyc2UodGhpcy5ibG9ja0RhdGFTdG9yZVtibG9ja05hbWVdKSA6IG51bGw7XHJcbiAgICAgICAgLy8gbGV0IGJsb2NrRGF0YTtcclxuICAgICAgICAvLyBsZXQgYmxvY2tEYXRhQ2FjaGUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvY2tEYXRhQ2FjaGUnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2NrRGF0YUNhY2hlJykpWydkYXRhJ10gOiBbXTtcclxuICAgICAgICAvLyBsZXQgY2FjaGVEYXRhID0gKCBibG9ja0RhdGFDYWNoZSAmJiBibG9ja0RhdGFDYWNoZS5sZW5ndGggPiAwICkgPyBibG9ja0RhdGFDYWNoZS5maWx0ZXIoZWwgPT4gZWwuYmxvY2tfaWQgPT0gYmxvY2tOYW1lKSA6IFtdO1xyXG4gICAgICAgIC8vIGlmKGNhY2hlRGF0YSAmJiBjYWNoZURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICBibG9ja0RhdGEgPSBjYWNoZURhdGFbMF0uYmxvY2tfZGF0YTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gcmV0dXJuIGJsb2NrRGF0YTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyB0aGUgYmxvY2sgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIGJsb2NrIG5hbWVcclxuICAgICAqIEBwYXJhbSBibG9ja05hbWVcclxuICAgICAqL1xyXG4gICAgbG9hZEJsb2NrQnlOYW1lKGJsb2NrTmFtZSkge1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IE9ic2VydmFibGU8T2JqZWN0Pigob2JzZXJ2ZXIpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgYmxvY2tEYXRhQ2FjaGUgPSB0aGlzLnNlYXJjaEJsb2NrRGF0YUZyb21DYWNoZShibG9ja05hbWUpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tEYXRhQ2FjaGUpIHtcclxuICAgICAgICAgICAgICAgIG9ic2VydmVyLm5leHQoYmxvY2tEYXRhQ2FjaGUpO1xyXG4gICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHR0cC5nZXQoYCR7dGhpcy5nbG9iYWxQYXRofSR7dGhpcy5kZWZhdWx0TGFuZ30ke3RoaXMuY29uZmlnQmxvY2tQYXRofSR7YmxvY2tOYW1lfS5qc29uYCkuc3Vic2NyaWJlKChjdXJyU3RlcERhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QmxvY2tEYXRhSW5DYWNoZShibG9ja05hbWUsIGN1cnJTdGVwRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChjdXJyU3RlcERhdGEpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCkgeyB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7ICAgICAgICBcclxuICAgICAgICAvLyByZXR1cm4gdGhpcy5odHRwLmdldChcclxuICAgICAgICAgICAgLy8gYCR7dGhpcy5nbG9iYWxQYXRofSR7dGhpcy5kZWZhdWx0TGFuZ30ke3RoaXMuY29uZmlnQmxvY2tQYXRofSR7YmxvY2tOYW1lfS5qc29uYCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QmxvY2tEYXRhSW5DYWNoZShibG9ja05hbWUsIGRhdGEpIHtcclxuICAgICAgICB0aGlzLmJsb2NrRGF0YVN0b3JlW2Jsb2NrTmFtZV0gPSBKU09OLnN0cmluZ2lmeShkYXRhKTtcclxuICAgICAgICAvLyBibG9ja05hbWUgPSB0aGlzLmJsb2NrTmFtZUFuZElkRGF0YU1hcFtibG9ja05hbWVdID8gdGhpcy5ibG9ja05hbWVBbmRJZERhdGFNYXBbYmxvY2tOYW1lXSA6IGJsb2NrTmFtZTtcclxuICAgICAgICAvLyBsZXQgYmxvY2tEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2NrRGF0YUNhY2hlJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9ja0RhdGFDYWNoZScpKVsnZGF0YSddIDogW107XHJcbiAgICAgICAgLy8gbGV0IGNhY2hlRGF0YSA9ICggYmxvY2tEYXRhICYmIGJsb2NrRGF0YS5sZW5ndGggPiAwICkgPyBibG9ja0RhdGEuZmlsdGVyKGVsID0+IGVsLnN0ZXBfaWQgPT0gYmxvY2tOYW1lKSA6IFtdO1xyXG4gICAgICAgIC8vIGlmKGNhY2hlRGF0YSAmJiBjYWNoZURhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAvLyAgICAgYmxvY2tEYXRhLnB1c2goe2Jsb2NrX2lkOiBibG9ja05hbWUsIGJsb2NrX2RhdGE6IGRhdGF9KTtcclxuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jsb2NrRGF0YUNhY2hlJywgSlNPTi5zdHJpbmdpZnkoe2RhdGEgOiBibG9ja0RhdGF9KSlcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbG9hZEJsb2NrQnlOYW1lSWQoYmxvY2tOYW1lKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIG5ldyBPYnNlcnZhYmxlKChvYnNlcnZlcikgPT4ge1xyXG4gICAgLy8gICAgICAgICBjb25zdCBibG9ja0RhdGFDYWNoZSA9IHRoaXMuc2VhcmNoQmxvY2tEYXRhRnJvbUNhY2hlKGJsb2NrTmFtZSk7XHJcbiAgICAvLyAgICAgICAgIGlmIChibG9ja0RhdGFDYWNoZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgb2JzZXJ2ZXIubmV4dChibG9ja0RhdGFDYWNoZSk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5odHRwLmdldChgJHt0aGlzLmdsb2JhbFBhdGh9JHt0aGlzLmRlZmF1bHRMYW5nfSR7dGhpcy5jb25maWdCbG9ja1BhdGh9JHtibG9ja05hbWV9Lmpzb25gKS5zdWJzY3JpYmUoKGN1cnJTdGVwRGF0YTogYW55KSA9PiB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zZXRCbG9ja0RhdGFJbkNhY2hlKGJsb2NrTmFtZSwgY3VyclN0ZXBEYXRhKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBvYnNlcnZlci5uZXh0KGN1cnJTdGVwRGF0YSk7ICAgICAgICAgICAgICAgICAgXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIuY29tcGxldGUoKTtcclxuICAgIC8vICAgICAgICAgICAgIH0sIChlcnJvcikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIG9ic2VydmVyLmVycm9yKGVycm9yKTsgICAgICAgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgICAgICAgICBvYnNlcnZlci5jb21wbGV0ZSgpO1xyXG4gICAgLy8gICAgICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgcmV0dXJuIHtcclxuICAgIC8vICAgICAgICAgICAgIHVuc3Vic2NyaWJlKCkgeyB9XHJcbiAgICAvLyAgICAgICAgIH07XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcbiAgICAvKipcclxuICAgICAqIFJldHVybnMgd29ya2Zsb3cgZGV0YWlscyBmcm9tIHN0ZXAgaWRcclxuICAgICAqIEBwYXJhbSBzdGVwSWRcclxuICAgICAqL1xyXG4gICAgZ2V0V29ya2Zsb3dEZXRhaWxzKHN0ZXBJZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmJhc2VKU09ORGF0YS53b3JrZmxvd19zZXF1ZW5jZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5iYXNlSlNPTkRhdGEud29ya2Zsb3dfc2VxdWVuY2UuZmluZCgoaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGkuc2VxdWVuY2UuZmluZEluZGV4KCh4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHgudGlkID09IHN0ZXBJZDtcclxuICAgICAgICAgICAgICAgIH0pID4gLTE7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuVG9zdGVyKG1zZ09iaikge1xyXG4gICAgICAgIHRoaXMudG9hc3RyLnN1Y2Nlc3MobXNnT2JqLmh0bWwsICcnLCB7XHJcbiAgICAgICAgICAgIGVuYWJsZUh0bWw6IHRydWUsXHJcbiAgICAgICAgICAgIHRpbWVPdXQ6IE51bWJlcihtc2dPYmouZHVyYXRpb24pLFxyXG4gICAgICAgICAgICBjbG9zZUJ1dHRvbjogbXNnT2JqLmNsb3NlQnV0dG9uLFxyXG4gICAgICAgICAgICB0b2FzdENsYXNzOiBtc2dPYmoucGFuZWxDbGFzcy5qb2luKCcgJyksXHJcbiAgICAgICAgICAgIHByb2dyZXNzQmFyOiBtc2dPYmoucHJvZ3Jlc3NCYXIsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uQ2xhc3M6ICd0b2FzdC0nICsgbXNnT2JqLnZlcnRpY2FsUG9zaXRpb24gKyAnLScgKyBtc2dPYmouaG9yaXpvbnRhbFBvc2l0aW9uXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbWFuaXB1bGF0ZVN0cmluZyh0eXBlLHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGZpZWxkSWRzLCBzZXBhcmF0b3IsIGZpZWxkVmFsdWVMaXN0O1xyXG4gICAgICAgIGlmKCF0eXBlKSByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgc3dpdGNoKHR5cGUudG9Mb3dlckNhc2UoKS5zcGxpdChcInx8XCIpWzBdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgXCJ0cmltX3NwYWNlc1wiOiBcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcInJlbW92ZV9hbGxcIjogXHJcbiAgICAgICAgICAgICAgICBsZXQgc2VhcmNoU3RyaW5nID0gdHlwZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwifHxcIikubGVuZ3RoID4gMSA/IHR5cGUudG9Mb3dlckNhc2UoKS5zcGxpdChcInx8XCIpWzFdIDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmVwbGFjZVdpdGggPSB0eXBlLnRvTG93ZXJDYXNlKCkuc3BsaXQoXCJ8fFwiKS5sZW5ndGggPiAyID8gdHlwZS50b0xvd2VyQ2FzZSgpLnNwbGl0KFwifHxcIilbMl0gOiBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlQWxsKHNlYXJjaFN0cmluZyxyZXBsYWNlV2l0aCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwidXBwZXJcIjogXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvVXBwZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwibG93ZXJcIjogXHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwicHJvcGVyXCI6IFxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gdmFsdWUuc3BsaXQoXCIgXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICBhcnJbaV0gPSBhcnJbaV0uY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBhcnJbaV0uc2xpY2UoMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGFyci5qb2luKFwiIFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJzdGFydHNfd2l0aFwiOiBcclxuICAgICAgICAgICAgICAgIGxldCBzdGFydFdpdGggPSB0eXBlLnNwbGl0KFwifHxcIikubGVuZ3RoID4gMSA/IHR5cGUuc3BsaXQoXCJ8fFwiKVsxXSA6IFwiXCI7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnRyaW0oKSA/IHN0YXJ0V2l0aCArIHZhbHVlLnJlcGxhY2VBbGwoc3RhcnRXaXRoLCcnKSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSBcImNvbmNhdFwiOiBcclxuICAgICAgICAgICAgICAgIGZpZWxkSWRzID0gdHlwZS5zcGxpdChcInx8XCIpLmxlbmd0aCA+IDEgPyB0eXBlLnNwbGl0KFwifHxcIikuc2xpY2UoMikgOiBbXTtcclxuICAgICAgICAgICAgICAgIHNlcGFyYXRvciA9IHR5cGUuc3BsaXQoXCJ8fFwiKS5sZW5ndGggPiAxID8gdHlwZS5zcGxpdChcInx8XCIpWzFdIDogXCIgXCI7XHJcbiAgICAgICAgICAgICAgICBmaWVsZFZhbHVlTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZmllbGRJZHMuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFZhbHVlTGlzdC5wdXNoKHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKGVsZW1lbnQpKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSBmaWVsZFZhbHVlTGlzdC5qb2luKHNlcGFyYXRvcik7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwic3BsaXRcIjogXHJcbiAgICAgICAgICAgICAgICBmaWVsZElkcyA9IHR5cGUuc3BsaXQoXCJ8fFwiKS5sZW5ndGggPiAxID8gdHlwZS5zcGxpdChcInx8XCIpLnNsaWNlKDIpIDogW107XHJcbiAgICAgICAgICAgICAgICBzZXBhcmF0b3IgPSB0eXBlLnNwbGl0KFwifHxcIikubGVuZ3RoID4gMSA/IHR5cGUuc3BsaXQoXCJ8fFwiKVsxXSA6IFwiIFwiO1xyXG4gICAgICAgICAgICAgICAgZmllbGRWYWx1ZUxpc3QgPSB2YWx1ZSA/IHZhbHVlLnNwbGl0KHNlcGFyYXRvcikgOiBbXTtcclxuICAgICAgICAgICAgICAgIGZpZWxkSWRzLmZvckVhY2goKGVsZW1lbnQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEluZGl2aWR1YWxBcHBEYXRhKGVsZW1lbnQpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKGZpZWxkRGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZERhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKHsgLi4uZmllbGREYXRhWzBdLCAuLi57dmFsdWU6IGZpZWxkVmFsdWVMaXN0W2luZGV4XX19KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRTZXRGaWVsZFZhbHVlT25FdmVudC5lbWl0KHt1bmlxdWVJZHM6IGVsZW1lbnQsIHZhbHVlczogZmllbGRWYWx1ZUxpc3RbaW5kZXhdfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxufVxyXG4iXX0=