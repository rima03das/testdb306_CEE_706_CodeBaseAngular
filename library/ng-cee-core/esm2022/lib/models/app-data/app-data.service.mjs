import { Injectable } from '@angular/core';
import { take, map } from 'rxjs/operators';
import { RepeatableBlockData } from '../repeatable-block-data/repetableBlockData.util';
import { APIKeyUtil } from '../../utils/api-key-util';
import * as i0 from "@angular/core";
import * as i1 from "./app-data.store";
import * as i2 from "./app-data.query";
import * as i3 from "../api-data/api-data.service";
export class AppDataService {
    appDataStore;
    appDataQuery;
    apiDataService;
    repetableBlockUtil;
    apiKeyUtil;
    appDatasubscription;
    appDatacurrentValue;
    logoutAllTabChannel;
    constructor(appDataStore, appDataQuery, apiDataService) {
        this.appDataStore = appDataStore;
        this.appDataQuery = appDataQuery;
        this.apiDataService = apiDataService;
        this.repetableBlockUtil = new RepeatableBlockData();
        this.apiKeyUtil = new APIKeyUtil();
        this.fetchappData();
        this.logoutAllTabChannel = new BroadcastChannel('logoutAllTab');
        this.listenForClearData();
    }
    // return top largest entities with size
    topLargestEntities(n) {
        const storeStates = this.appDataStore.getValue();
        const storeEntries = Object.entries(storeStates.entities);
        const storeStatesWithSize = storeEntries.map(([key, value]) => {
            const sizeKB = (new Blob([JSON.stringify(value)]).size / 1024).toFixed(2);
            ;
            return { key, sizeKB };
        });
        return storeStatesWithSize
            .sort((a, b) => Number(b.sizeKB) - Number(a.sizeKB))
            .slice(0, n);
    }
    fetchappData() {
        this.appDatasubscription = this.currentValueChanges().subscribe(newState => {
            this.appDatacurrentValue = newState;
        });
    }
    currentValueChanges() {
        return this.appDataQuery.select(state => state);
    }
    ngOnDestroy() {
        if (this.appDatasubscription) {
            this.appDatasubscription.unsubscribe();
        }
        if (this.logoutAllTabChannel) {
            this.logoutAllTabChannel.close();
        }
    }
    addAppData(appData) {
        this.appDataStore.add({ ...appData, ...{ createdOn: (new Date()).getTime(), updatedOn: (new Date()).getTime() } });
    }
    updateMultipleAppData(data) {
    }
    getIndividualAppData(id) {
        return this.appDataQuery.selectAll({
            filterBy: entity => entity.id === id
        });
    }
    updateAppData(appData) {
        // const data = this.appDataStore.getValue();
        const dataEnities = this.appDatacurrentValue['entities'];
        const keyData = dataEnities[appData.id] !== undefined ? JSON.parse(JSON.stringify(dataEnities[appData.id])) : undefined;
        if (keyData) {
            keyData.createdOn && delete keyData.createdOn;
            keyData.updatedOn && delete keyData.updatedOn;
            appData["createdOn"] && delete appData["createdOn"];
            appData["updatedOn"] && delete appData["updatedOn"];
        }
        if (keyData && JSON.stringify(keyData) !== JSON.stringify(appData)) {
            if (keyData['value'] === appData['value']) {
                this.appDataStore.update(appData.id, { ...appData });
            }
            else {
                this.appDataStore.update(appData.id, { ...appData, ...{ updatedOn: (new Date()).getTime() } });
            }
        }
    }
    deleteAppData(id) {
        this.appDataStore.remove(id);
    }
    deleteMultipleAppData(ids) {
        // clear the language in the session storage
        // if (ids.includes(window.localStorage.getItem('langField'))) {
        //     window.localStorage.removeItem('lang');
        //     localStorage.removeItem('stepDataCache');
        //     localStorage.removeItem('lastBlockLoaded');
        //     localStorage.removeItem('blockDataCache');
        // }
        this.appDataStore.remove(ids);
    }
    removeAllAppData() {
        const saveFieldListValue = localStorage.getItem('saveFieldList');
        if (saveFieldListValue) {
            const saveFieldList = saveFieldListValue.split('|').map(str => str.trim());
            this.appDataQuery.selectAll().subscribe(apiKeyValues => {
                const ids = [];
                for (const apiKeyVal of apiKeyValues) {
                    if (!saveFieldList.includes(String(apiKeyVal.id))) {
                        ids.push(apiKeyVal.id);
                    }
                }
                this.appDataStore.remove(ids);
            });
        }
        else {
            this.appDataStore.remove();
        }
        // clear the language data
        // window.localStorage.removeItem('lang');
        // localStorage.removeItem('stepDataCache');
        // localStorage.removeItem('lastBlockLoaded');
        // localStorage.removeItem('blockDataCache');
        this.repetableBlockUtil.resetRepeatableStore();
    }
    destroyAllAppData() {
        this.appDataStore.destroy();
    }
    /////////////////////// Query Statements ///////////////////////
    /**
     * function that updates appData to the akita store if the field is found
     * else adds the appData to the akita store
     * @param appData AppData model object
     */
    setAppData(appData) {
        this.getAppDataByFieldId(String(appData.id)).pipe(take(1)).subscribe(val => {
            if (val && (val.id === String(appData.id))) {
                this.updateAppData({ ...val, ...appData });
            }
            else {
                this.addAppData(appData);
            }
        });
    }
    getFieldPropertiesByID(fieldId) {
        return this.appDataStore.getValue().entities[fieldId];
    }
    getAllAppStoreData(blockId) {
        let storeData = [];
        if (blockId && blockId !== 'true' && blockId !== 'false') {
            return this.appDataQuery.getAll({
                filterBy: [
                    entity => String(entity.id).includes(blockId),
                    entity => entity.mandatory
                ]
            });
        }
        else {
            storeData = Object.values(this.appDataStore.getValue().entities);
        }
        const appData = [];
        // tslint:disable-next-line: forin
        for (const data in storeData) {
            let obj = storeData[data];
            // if (obj.linkedBlockId) {
            //     obj = {
            //         ...obj,
            //         ...{
            //             mandatory: this.repetableBlockUtil.getRepeatableLocalStorageData
            //                 (obj.linkedBlockId, String(obj.id))['isMandatory']
            //         }
            //     };
            // }
            appData.push(obj);
        }
        return appData;
    }
    getAllAppData() {
        return this.appDataQuery.selectAll();
    }
    getAllStepData(stepId) {
        return this.appDataQuery.selectAll({
            filterBy: entity => entity.stepId === stepId
        });
    }
    getAllStepDataWithApiKey(stepId) {
        return this.appDataQuery.selectAll({
            filterBy: [
                entity => entity.stepId === stepId,
                entity => entity.apiKey.trim().length > 0
            ]
        });
    }
    getAllStepDataWithRequestApiKey(stepId) {
        return this.appDataQuery.selectAll({
            filterBy: [
                entity => entity.stepId === stepId
            ]
        }).pipe(map(res => {
            let finalArr = [];
            for (const data of res) {
                let obj = {};
                const arr = [];
                for (const requestKey of data.requestApiKey) {
                    obj = data;
                    obj = { ...obj, apiKey: requestKey };
                    arr.push(obj);
                }
                finalArr = [...finalArr, ...arr];
            }
            return finalArr;
        }));
    }
    getAllStepDataByMandatory(stepId, isMandatory) {
        return this.appDataQuery.selectAll({
            filterBy: [
                entity => entity.stepId === stepId,
                entity => entity.mandatory === isMandatory
            ]
        });
    }
    getAppDataByFieldId(fieldId) {
        return this.appDataQuery.selectEntity(fieldId);
    }
    getFieldDataByFieldIds(separatedFieldString, separator) {
        const data = this.appDataStore.getValue();
        const fieldData = [];
        for (const field of separatedFieldString.split(separator)) {
            fieldData.push(data.entities[field.trim()] !== undefined ? data.entities[field.trim()].value : undefined);
        }
        return fieldData;
    }
    getFieldDataByFieldId(fieldId) {
        // let success = false;
        // let keyValue = '';
        // this.appDataQuery.selectEntity(fieldId)
        //     .pipe(take(1)).subscribe(val => {
        //         keyValue = val ? val.value : undefined;
        //         success = true;
        //     });
        // return keyValue;
        const data = this.appDataStore.getValue();
        const keyVal = data.entities[fieldId] !== undefined ? data.entities[fieldId].value : undefined;
        return keyVal;
    }
    returnIfRepeatedField(repeatedBlockFieldId) {
        const data = this.appDataStore.getValue();
        let isRepeated = false;
        for (const entity in data.entities) {
            if (entity === repeatedBlockFieldId) {
                if (data.entities[repeatedBlockFieldId].isRepeatedField) {
                    isRepeated = true;
                    break;
                }
            }
        }
        return isRepeated;
    }
    getFieldIdMapFieldValueByRepeatedBlockFieldId(repeatedBlockFieldId) {
        const obj = {};
        const data = this.appDataStore.getValue();
        for (const entity in data.entities) {
            if (data.entities[entity].repeatedBlockFieldId) {
                if (repeatedBlockFieldId === data.entities[entity].repeatedBlockFieldId) {
                    obj[entity] = data.entities[entity].value;
                }
            }
        }
        return obj;
    }
    // getFieldDataByApiKey(apiKey: string) {
    //     let success = false;
    //     let keyValue = '';
    //     this.appDataQuery.selectAll({
    //         filterBy: [
    //             entity => entity.apiKey === apiKey
    //         ]
    //     }).subscribe(val => {
    //         keyValue = val[0].value;
    //         success = true;
    //     });
    //     if (success) {
    //         return keyValue;
    //     }
    // }
    /**
     * returns the field value of the basis of the type of the api key
     *
     * @param apiKey is tha api key that is required
     * @param type is bsically the type of the api key i.e request or response
     */
    getFieldDataByApiKey(apiKey, type) {
        let success = false;
        let keyValue = '';
        this.appDataQuery.selectAll().subscribe(val => {
            for (const singleVal of val) {
                if (type === 'request') {
                    for (const api_key of singleVal.requestApiKey) {
                        if (api_key === apiKey) {
                            keyValue = singleVal.value;
                            success = true;
                        }
                    }
                }
                else if (type === 'response') {
                    for (const api_key of singleVal.responseApiKey) {
                        if (api_key === apiKey) {
                            keyValue = singleVal.value;
                            success = true;
                        }
                    }
                }
                else {
                    if (apiKey === singleVal.apiKey) {
                        keyValue = singleVal.value;
                        success = true;
                    }
                }
            }
        });
        if (success) {
            return keyValue;
        }
    }
    // getAppDataByApiKey(apiKey: string) {
    //     return this.appDataQuery.selectAll({
    //         filterBy: entity => entity.apiKey === apiKey
    //     });
    // }
    /**
     * returns the app data on the basis of api key and
     *  the type of the apiKey
     *
     * @param apiKey is the api key
     * @param type can be of two types ex. request or response
     */
    getAppDataByApiKey(apiKey, type) {
        let success = false;
        let appData;
        this.appDataQuery.selectAll().subscribe(val => {
            for (const singleVal of val) {
                if (type === 'request') {
                    for (const api_key of singleVal.requestApiKey) {
                        if (api_key === apiKey) {
                            appData = singleVal;
                            success = true;
                        }
                    }
                }
                else if (type === 'response') {
                    for (const api_key of singleVal.responseApiKey) {
                        if (api_key === apiKey) {
                            appData = singleVal;
                            success = true;
                        }
                    }
                }
                else {
                    if (apiKey === singleVal.apiKey) {
                        appData = singleVal;
                        success = true;
                    }
                }
            }
        });
        if (success) {
            return appData;
        }
    }
    removeDataFromStep(stepId, callback) {
        let loopEnded = false;
        try {
            this.appDataQuery.selectAll().subscribe(stepValues => {
                if (!loopEnded) {
                    for (const stepVal of stepValues) {
                        if (stepId === stepVal.stepId) {
                            // clear the session storage
                            this.apiDataService.deleteApiData(stepVal.apiKey);
                            this.deleteAppData(stepVal.id);
                        }
                        if (stepVal.linkedBlockId) {
                            // localStorage.removeItem(stepVal.linkedBlockId + '_count');
                            this.repetableBlockUtil.removeByBlockId(stepVal.linkedBlockId);
                        }
                    }
                    if (callback) {
                        loopEnded = true;
                        callback(true);
                    }
                }
            });
        }
        catch (error) {
            if (callback) {
                loopEnded = true;
                callback(false);
            }
        }
    }
    removeDataFromStepIds(stepIds, callback) {
        let loopEnded = false;
        try {
            this.appDataQuery.selectAll().subscribe(stepValues => {
                if (!loopEnded) {
                    for (const stepVal of stepValues) {
                        if (stepIds.includes(stepVal.stepId)) {
                            this.apiDataService.deleteApiData(stepVal.apiKey);
                            this.deleteAppData(stepVal.id);
                        }
                        if (stepVal.linkedBlockId) {
                            // localStorage.removeItem(stepVal.linkedBlockId + '_count');
                            this.repetableBlockUtil.removeByBlockId(stepVal.linkedBlockId);
                        }
                    }
                    if (callback && !loopEnded) {
                        loopEnded = true;
                        callback(true);
                    }
                }
            });
        }
        catch (e) {
            if (callback) {
                loopEnded = true;
                callback(false);
            }
        }
    }
    getDataFromStepIds(stepIds, callback) {
        let loopEnded = false;
        let mandatoryCheck = true;
        try {
            this.appDataQuery.selectAll().subscribe(stepValues => {
                if (!loopEnded) {
                    for (const stepVal of stepValues) {
                        if (stepIds.includes(stepVal.stepId)) {
                            if (stepVal.mandatory === true && stepVal.value === '') {
                                mandatoryCheck = false;
                                break;
                            }
                        }
                    }
                    if (callback) {
                        loopEnded = true;
                        callback(mandatoryCheck);
                    }
                }
            });
        }
        catch (e) {
            if (callback) {
                loopEnded = true;
                callback(false);
            }
        }
    }
    // removeDataUsingAPIKeys(apiKeys: Array<any>, callback: any) {
    //     let loopEnded = false;
    //     try {
    //         this.appDataQuery.selectAll().subscribe(apiKeyValues => {
    //             if (!loopEnded) {
    //                 for (const apiKeyVal of apiKeyValues) {
    //                     if (apiKeys.includes(apiKeyVal.apiKey)) {
    //                         this.apiDataService.deleteApiData(apiKeyVal.apiKey);
    //                         this.deleteAppData(apiKeyVal.id);
    //                     }
    //                 }
    //                 if (callback) {
    //                     loopEnded = true;
    //                     callback(true);
    //                 }
    //             }
    //         });
    //     } catch (error) {
    //         if (callback) {
    //             loopEnded = true;
    //             callback(true);
    //         }
    //     }
    // }
    /**
     * function to remove data for both request and response api keys
     * @param apiKeys
     * @param callback
     */
    removeDataUsingRequestAndResponseAPIKeys(apiKeys, callback) {
        let loopEnded = false;
        try {
            this.appDataQuery.selectAll().pipe(take(1)).subscribe(apiKeyValues => {
                if (!loopEnded) {
                    for (const apiKeyVal of apiKeyValues) {
                        for (const resApiKey of apiKeyVal.responseApiKey) {
                            if (apiKeys.includes(resApiKey)) {
                                this.apiDataService.deleteApiData(resApiKey);
                                this.deleteAppData(apiKeyVal.id);
                            }
                        }
                        for (const reqApiKey of apiKeyVal.requestApiKey) {
                            if (apiKeys.includes(reqApiKey)) {
                                this.apiDataService.deleteApiData(reqApiKey);
                                this.deleteAppData(apiKeyVal.id);
                            }
                        }
                    }
                    if (callback) {
                        loopEnded = true;
                        callback(true);
                    }
                }
            });
        }
        catch (error) {
            if (callback) {
                loopEnded = true;
                callback(true);
            }
        }
    }
    /**
     * function to remove data from either response or request api keys
     * @param apiKeys
     * @param callback
     */
    removeDataUsingAPIKeys(apiKeys, callback) {
        let loopEnded = false;
        try {
            this.appDataQuery.selectAll().subscribe(apiKeyValues => {
                const singleAPIKey = localStorage.getItem('singleApiKey') === 'true' ? true : false;
                if (!loopEnded) {
                    for (const apiKey of apiKeys) {
                        this.apiDataService.deleteApiData(apiKey);
                    }
                    for (const apiKeyVal of apiKeyValues) {
                        if (singleAPIKey) {
                            if (apiKeys.includes(apiKeyVal.apiKey)) {
                                this.deleteAppData(apiKeyVal.id);
                            }
                        }
                        else {
                            // remove from response api keys
                            for (const key of apiKeyVal.responseApiKey) {
                                if (apiKeys.includes(key)) {
                                    this.apiDataService.deleteApiData(key);
                                    if (apiKeyVal.responseApiKey.length === 1) {
                                        this.deleteAppData(apiKeyVal.id);
                                    }
                                    else {
                                        this.appDataStore.update(apiKeyVal.id, {
                                            ...apiKeyVal,
                                            ...{
                                                responseApiKey: apiKeyVal.responseApiKey.splice(apiKeyVal.responseApiKey.indexOf(key), 1)
                                            },
                                            ...{ updatedOn: (new Date()).getTime() }
                                        });
                                    }
                                }
                            }
                            // remove from request api keys
                            for (const key of apiKeyVal.requestApiKey) {
                                if (apiKeys.includes(key)) {
                                    this.apiDataService.deleteApiData(key);
                                    if (apiKeyVal.requestApiKey.length === 1) {
                                        this.deleteAppData(apiKeyVal.id);
                                    }
                                    else {
                                        this.appDataStore.update(apiKeyVal.id, {
                                            ...apiKeyVal,
                                            ...{
                                                requestApiKey: apiKeyVal.requestApiKey.splice(apiKeyVal.requestApiKey.indexOf(key), 1)
                                            },
                                            ...{ updatedOn: (new Date()).getTime() }
                                        });
                                    }
                                }
                            }
                        }
                    }
                    if (callback) {
                        loopEnded = true;
                        callback(true);
                    }
                }
            });
        }
        catch (error) {
            if (callback) {
                loopEnded = true;
                callback(true);
            }
        }
    }
    /**
     * function to check delete an api key that is under response api keys or
     * reuest api keys or simply api an api key
     * @param apiKey
     * @param type type can be of request or response or simply
     * @param callback
     */
    removeDataUsingAPIKey(apiKey, type = '', callback) {
        this.apiDataService.deleteApiData(apiKey);
        let loopEnded = false;
        try {
            this.appDataQuery.selectAll().subscribe(apiKeyValues => {
                if (!loopEnded) {
                    for (const apiKeyVal of apiKeyValues) {
                        if (type === 'request') {
                            if (apiKeyVal.requestApiKey.includes(apiKey)) {
                                this.apiDataService.deleteApiData(apiKey);
                                this.deleteAppData(apiKeyVal.id);
                            }
                        }
                        else if (type === 'response') {
                            if (apiKeyVal.responseApiKey.includes(apiKey)) {
                                this.apiDataService.deleteApiData(apiKey);
                                this.deleteAppData(apiKeyVal.id);
                            }
                        }
                        else {
                            if (apiKeyVal.apiKey === apiKey) {
                                this.apiDataService.deleteApiData(apiKey);
                                this.deleteAppData(apiKeyVal.id);
                            }
                        }
                    }
                    if (callback && !loopEnded) {
                        loopEnded = true;
                        callback(true);
                    }
                }
            });
        }
        catch (error) {
            if (callback) {
                loopEnded = true;
                callback(true);
            }
        }
    }
    removeDataUsingResponseAndRequestAPIKey(apiKey, callback) {
        this.apiDataService.deleteApiData(apiKey);
        let loopEnded = false;
        try {
            this.appDataQuery.selectAll().subscribe(apiKeyValues => {
                if (!loopEnded) {
                    for (const apiKeyVal of apiKeyValues) {
                        if (apiKeyVal.requestApiKey.includes(apiKey)) {
                            this.apiDataService.deleteApiData(apiKey);
                            this.deleteAppData(apiKeyVal.id);
                        }
                        if (apiKeyVal.responseApiKey.includes(apiKey)) {
                            this.apiDataService.deleteApiData(apiKey);
                            this.deleteAppData(apiKeyVal.id);
                        }
                    }
                    if (callback) {
                        loopEnded = true;
                        callback(true);
                    }
                }
            });
        }
        catch (error) {
            if (callback) {
                loopEnded = true;
                callback(true);
            }
        }
    }
    removeDataUsingUniqueIds(fieldIds, callback) {
        let loopEnded = false;
        try {
            this.appDataQuery.selectMany(fieldIds).subscribe(fieldValues => {
                if (!loopEnded) {
                    for (const fieldIdVal of fieldValues) {
                        if (fieldIds.includes(fieldIdVal.id)) {
                            this.appDataStore.remove(fieldIdVal.id);
                        }
                    }
                    if (callback) {
                        loopEnded = true;
                        callback(true);
                    }
                }
            });
        }
        catch (error) {
            if (callback) {
                loopEnded = true;
                callback(true);
            }
        }
    }
    removeDataUsingUniqueId(fieldId, callback) {
        let loopEnded = false;
        try {
            this.appDataQuery.selectAll({
                filterBy: entity => entity.id === fieldId
            }).subscribe(fieldValues => {
                if (!loopEnded) {
                    for (const apiKeyVal of fieldValues) {
                        this.appDataStore.remove(apiKeyVal.id);
                    }
                    if (callback) {
                        loopEnded = true;
                        callback(true);
                    }
                }
            });
        }
        catch (error) {
            if (callback) {
                loopEnded = true;
                callback(true);
            }
        }
    }
    clearDataUsingUniqueIds(fieldIds, callback) {
        // const data = this.appDataStore.getValue();
        const dataEnities = this.appDatacurrentValue['entities'];
        for (const entity in dataEnities) {
            if (fieldIds.includes(dataEnities[entity].id)) {
                const newData = { ...dataEnities[entity], ...{ value: '' } };
                this.updateAppData(newData);
            }
        }
        callback(true);
    }
    clearDataUsingApiKeys(apiKeys, callback) {
        // const data = this.appDataStore.getValue();
        const dataEnities = this.appDatacurrentValue['entities'];
        // tslint:disable-next-line: forin
        for (const entity in dataEnities) {
            if (apiKeys.includes(dataEnities[entity].apiKey)) {
                const newData = { ...dataEnities[entity], ...{ value: '' } };
                this.updateAppData(newData);
            }
            // should only work when using multiple api keys
            if (localStorage.getItem('singleApiKey') === 'false') {
                if (apiKeys.includes(this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(dataEnities[entity].requestApiKey)))) {
                    const newData = { ...dataEnities[entity], ...{ value: '' } };
                    this.updateAppData(newData);
                }
                if (apiKeys.includes(this.apiKeyUtil.getMultipleApiKeys(dataEnities[entity].responseApiKey))) {
                    const newData = { ...dataEnities[entity], ...{ value: '' } };
                    this.updateAppData(newData);
                }
            }
        }
        callback(true);
    }
    listenForClearData() {
        this.logoutAllTabChannel.addEventListener('message', (event) => {
            if (event.data === 'redirectToLogoutTabs') {
                this.removeAllAppData();
            }
        });
    }
    static ɵfac = function AppDataService_Factory(t) { return new (t || AppDataService)(i0.ɵɵinject(i1.AppDataStore), i0.ɵɵinject(i2.AppDataQuery), i0.ɵɵinject(i3.ApiDataService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: AppDataService, factory: AppDataService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AppDataService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.AppDataStore }, { type: i2.AppDataQuery }, { type: i3.ApiDataService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWRhdGEuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSzNDLE9BQU8sRUFBRSxJQUFJLEVBQUUsR0FBRyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFM0MsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sa0RBQWtELENBQUM7QUFDdkYsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7OztBQU10RCxNQUFNLE9BQU8sY0FBYztJQVFYO0lBQ0E7SUFDQTtJQVRaLGtCQUFrQixDQUFzQjtJQUN4QyxVQUFVLENBQWE7SUFDZixtQkFBbUIsQ0FBZTtJQUMxQyxtQkFBbUIsQ0FBZTtJQUNsQyxtQkFBbUIsQ0FBbUI7SUFFdEMsWUFDWSxZQUEwQixFQUMxQixZQUEwQixFQUMxQixjQUE4QjtRQUY5QixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixpQkFBWSxHQUFaLFlBQVksQ0FBYztRQUMxQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFFdEMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztRQUNwRCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCx3Q0FBd0M7SUFDeEMs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S0FBSyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7b0JBQzdELElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQy9CO2dCQUNELElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxFQUFFO29CQUMxRixNQUFNLE9BQU8sR0FBRyxFQUFFLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztvQkFDN0QsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQkFDL0I7YUFDSjtTQUNKO1FBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ25CLENBQUM7SUFFRCxrQkFBa0I7UUFDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLENBQUMsS0FBSyxFQUFFLEVBQUU7WUFDM0QsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLHNCQUFzQixFQUFFO2dCQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQzthQUMzQjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQzt3RUEzd0JRLGNBQWM7Z0VBQWQsY0FBYyxXQUFkLGNBQWMsbUJBRlgsTUFBTTs7aUZBRVQsY0FBYztjQUgxQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElEIH0gZnJvbSAnQGRhdG9yYW1hL2FraXRhJztcclxuaW1wb3J0IHsgQXBwRGF0YVN0b3JlIH0gZnJvbSAnLi9hcHAtZGF0YS5zdG9yZSc7XHJcbmltcG9ydCB7IEFwcERhdGFRdWVyeSB9IGZyb20gJy4vYXBwLWRhdGEucXVlcnknO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi9hcHAtZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IHRha2UsIG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUmVwZWF0YWJsZUJsb2NrRGF0YSB9IGZyb20gJy4uL3JlcGVhdGFibGUtYmxvY2stZGF0YS9yZXBldGFibGVCbG9ja0RhdGEudXRpbCc7XHJcbmltcG9ydCB7IEFQSUtleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9hcGkta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuXHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwRGF0YVNlcnZpY2Uge1xyXG4gICAgcmVwZXRhYmxlQmxvY2tVdGlsOiBSZXBlYXRhYmxlQmxvY2tEYXRhO1xyXG4gICAgYXBpS2V5VXRpbDogQVBJS2V5VXRpbDtcclxuICAgIHByaXZhdGUgYXBwRGF0YXN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgYXBwRGF0YWN1cnJlbnRWYWx1ZTogQXBwRGF0YVN0b3JlO1xyXG4gICAgbG9nb3V0QWxsVGFiQ2hhbm5lbDogQnJvYWRjYXN0Q2hhbm5lbDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGFwcERhdGFTdG9yZTogQXBwRGF0YVN0b3JlLFxyXG4gICAgICAgIHByaXZhdGUgYXBwRGF0YVF1ZXJ5OiBBcHBEYXRhUXVlcnksXHJcbiAgICAgICAgcHJpdmF0ZSBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmVwZXRhYmxlQmxvY2tVdGlsID0gbmV3IFJlcGVhdGFibGVCbG9ja0RhdGEoKTtcclxuICAgICAgICB0aGlzLmFwaUtleVV0aWwgPSBuZXcgQVBJS2V5VXRpbCgpO1xyXG4gICAgICAgIHRoaXMuZmV0Y2hhcHBEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5sb2dvdXRBbGxUYWJDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoJ2xvZ291dEFsbFRhYicpO1xyXG4gICAgICAgIHRoaXMubGlzdGVuRm9yQ2xlYXJEYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIHRvcCBsYXJnZXN0IGVudGl0aWVzIHdpdGggc2l6ZVxyXG4gICAgdG9wTGFyZ2VzdEVudGl0aWVzKG46IG51bWJlcikge1xyXG4gICAgICAgIGNvbnN0IHN0b3JlU3RhdGVzID0gdGhpcy5hcHBEYXRhU3RvcmUuZ2V0VmFsdWUoKTtcclxuICAgICAgICBjb25zdCBzdG9yZUVudHJpZXMgPSBPYmplY3QuZW50cmllcyhzdG9yZVN0YXRlcy5lbnRpdGllcyk7XHJcbiAgICAgICAgY29uc3Qgc3RvcmVTdGF0ZXNXaXRoU2l6ZSA9IHN0b3JlRW50cmllcy5tYXAoKFtrZXksIHZhbHVlXSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzaXplS0IgPSAobmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KHZhbHVlKV0pLnNpemUgLyAxMDI0KS50b0ZpeGVkKDIpOztcclxuICAgICAgICAgICAgcmV0dXJuIHsga2V5LCBzaXplS0IgfTtcclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gc3RvcmVTdGF0ZXNXaXRoU2l6ZVxyXG4gICAgICAgICAgICAuc29ydCgoYSwgYikgPT4gTnVtYmVyKGIuc2l6ZUtCKSAtIE51bWJlcihhLnNpemVLQikpXHJcbiAgICAgICAgICAgIC5zbGljZSgwLCBuKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZldGNoYXBwRGF0YSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmFwcERhdGFzdWJzY3JpcHRpb24gPSB0aGlzLmN1cnJlbnRWYWx1ZUNoYW5nZXMoKS5zdWJzY3JpYmUobmV3U3RhdGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFjdXJyZW50VmFsdWUgPSBuZXdTdGF0ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjdXJyZW50VmFsdWVDaGFuZ2VzKCk6IE9ic2VydmFibGU8YW55PiB7IFxyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3Qoc3RhdGUgPT4gc3RhdGUpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5hcHBEYXRhc3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgICAgICB0aGlzLmFwcERhdGFzdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5sb2dvdXRBbGxUYWJDaGFubmVsKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9nb3V0QWxsVGFiQ2hhbm5lbC5jbG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgfVxyXG5cclxuICAgIGFkZEFwcERhdGEoYXBwRGF0YTogQXBwRGF0YSkge1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YVN0b3JlLmFkZCh7IC4uLmFwcERhdGEsIC4uLntjcmVhdGVkT246IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCksIHVwZGF0ZWRPbjogKG5ldyBEYXRlKCkpLmdldFRpbWUoKX0gfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTXVsdGlwbGVBcHBEYXRhKGRhdGE6IGFueSkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRJbmRpdmlkdWFsQXBwRGF0YShpZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YVF1ZXJ5LnNlbGVjdEFsbCh7XHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiBlbnRpdHkgPT4gZW50aXR5LmlkID09PSBpZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUFwcERhdGEoYXBwRGF0YTogQXBwRGF0YSkge1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSB0aGlzLmFwcERhdGFTdG9yZS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnN0IGRhdGFFbml0aWVzID0gdGhpcy5hcHBEYXRhY3VycmVudFZhbHVlWydlbnRpdGllcyddO1xyXG4gICAgICAgIGNvbnN0IGtleURhdGEgPSBkYXRhRW5pdGllc1thcHBEYXRhLmlkXSAhPT0gdW5kZWZpbmVkID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShkYXRhRW5pdGllc1thcHBEYXRhLmlkXSkpIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmIChrZXlEYXRhKSB7XHJcbiAgICAgICAgICAgIGtleURhdGEuY3JlYXRlZE9uICYmIGRlbGV0ZSBrZXlEYXRhLmNyZWF0ZWRPbjtcclxuICAgICAgICAgICAga2V5RGF0YS51cGRhdGVkT24gJiYgZGVsZXRlIGtleURhdGEudXBkYXRlZE9uO1xyXG4gICAgICAgICAgICBhcHBEYXRhW1wiY3JlYXRlZE9uXCJdICYmIGRlbGV0ZSBhcHBEYXRhW1wiY3JlYXRlZE9uXCJdO1xyXG4gICAgICAgICAgICBhcHBEYXRhW1widXBkYXRlZE9uXCJdICYmIGRlbGV0ZSBhcHBEYXRhW1widXBkYXRlZE9uXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoa2V5RGF0YSAmJiBKU09OLnN0cmluZ2lmeShrZXlEYXRhKSAhPT0gSlNPTi5zdHJpbmdpZnkoYXBwRGF0YSkpIHtcclxuICAgICAgICAgICAgaWYgKGtleURhdGFbJ3ZhbHVlJ10gPT09IGFwcERhdGFbJ3ZhbHVlJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVN0b3JlLnVwZGF0ZShhcHBEYXRhLmlkLCB7IC4uLmFwcERhdGEgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTdG9yZS51cGRhdGUoYXBwRGF0YS5pZCwgeyAuLi5hcHBEYXRhLCAuLi57dXBkYXRlZE9uOiAobmV3IERhdGUoKSkuZ2V0VGltZSgpfSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVBcHBEYXRhKGlkOiBJRCkge1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YVN0b3JlLnJlbW92ZShpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVsZXRlTXVsdGlwbGVBcHBEYXRhKGlkczogSURbXSkge1xyXG4gICAgICAgIC8vIGNsZWFyIHRoZSBsYW5ndWFnZSBpbiB0aGUgc2Vzc2lvbiBzdG9yYWdlXHJcbiAgICAgICAgLy8gaWYgKGlkcy5pbmNsdWRlcyh3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhbmdGaWVsZCcpKSkge1xyXG4gICAgICAgIC8vICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhbmcnKTtcclxuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3N0ZXBEYXRhQ2FjaGUnKTtcclxuICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RCbG9ja0xvYWRlZCcpO1xyXG4gICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnYmxvY2tEYXRhQ2FjaGUnKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhU3RvcmUucmVtb3ZlKGlkcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlQWxsQXBwRGF0YSgpIHtcclxuICAgICAgICBjb25zdCBzYXZlRmllbGRMaXN0VmFsdWU6IHN0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzYXZlRmllbGRMaXN0Jyk7XHJcbiAgICAgICAgaWYgKHNhdmVGaWVsZExpc3RWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBzYXZlRmllbGRMaXN0OiBzdHJpbmdbXSA9IHNhdmVGaWVsZExpc3RWYWx1ZS5zcGxpdCgnfCcpLm1hcChzdHIgPT4gc3RyLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVF1ZXJ5LnNlbGVjdEFsbCgpLnN1YnNjcmliZShhcGlLZXlWYWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWRzOiBJRFtdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleVZhbCBvZiBhcGlLZXlWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNhdmVGaWVsZExpc3QuaW5jbHVkZXMoU3RyaW5nKGFwaUtleVZhbC5pZCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkcy5wdXNoKGFwaUtleVZhbC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU3RvcmUucmVtb3ZlKGlkcyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVN0b3JlLnJlbW92ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjbGVhciB0aGUgbGFuZ3VhZ2UgZGF0YVxyXG4gICAgICAgIC8vIHdpbmRvdy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGFuZycpO1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzdGVwRGF0YUNhY2hlJyk7XHJcbiAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RCbG9ja0xvYWRlZCcpO1xyXG4gICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdibG9ja0RhdGFDYWNoZScpO1xyXG4gICAgICAgIHRoaXMucmVwZXRhYmxlQmxvY2tVdGlsLnJlc2V0UmVwZWF0YWJsZVN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVzdHJveUFsbEFwcERhdGEoKSB7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhU3RvcmUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vIFF1ZXJ5IFN0YXRlbWVudHMgLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyBhcHBEYXRhIHRvIHRoZSBha2l0YSBzdG9yZSBpZiB0aGUgZmllbGQgaXMgZm91bmRcclxuICAgICAqIGVsc2UgYWRkcyB0aGUgYXBwRGF0YSB0byB0aGUgYWtpdGEgc3RvcmVcclxuICAgICAqIEBwYXJhbSBhcHBEYXRhIEFwcERhdGEgbW9kZWwgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHNldEFwcERhdGEoYXBwRGF0YTogQXBwRGF0YSkge1xyXG4gICAgICAgIHRoaXMuZ2V0QXBwRGF0YUJ5RmllbGRJZChTdHJpbmcoYXBwRGF0YS5pZCkpLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgICAgICAgIGlmICh2YWwgJiYgKHZhbC5pZCA9PT0gU3RyaW5nKGFwcERhdGEuaWQpKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBcHBEYXRhKHsgLi4udmFsLCAuLi5hcHBEYXRhIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBcHBEYXRhKGFwcERhdGEpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmllbGRQcm9wZXJ0aWVzQnlJRChmaWVsZElkPzogYW55KSB7ICAgICAgICBcclxuICAgICAgICByZXR1cm4gIHRoaXMuYXBwRGF0YVN0b3JlLmdldFZhbHVlKCkuZW50aXRpZXNbZmllbGRJZF07ICAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbEFwcFN0b3JlRGF0YShibG9ja0lkPzogYW55KSB7XHJcbiAgICAgICAgbGV0IHN0b3JlRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICBpZiAoYmxvY2tJZCAmJiBibG9ja0lkICE9PSAndHJ1ZScgJiYgYmxvY2tJZCAhPT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YVF1ZXJ5LmdldEFsbCh7XHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiBbXHJcbiAgICAgICAgICAgICAgZW50aXR5ID0+IFN0cmluZyhlbnRpdHkuaWQpLmluY2x1ZGVzKGJsb2NrSWQpLFxyXG4gICAgICAgICAgICAgIGVudGl0eSA9PiBlbnRpdHkubWFuZGF0b3J5XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBzdG9yZURhdGEgPSBPYmplY3QudmFsdWVzKHRoaXMuYXBwRGF0YVN0b3JlLmdldFZhbHVlKCkuZW50aXRpZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBhcHBEYXRhID0gW107XHJcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmb3JpblxyXG4gICAgICAgIGZvciAoY29uc3QgZGF0YSBpbiBzdG9yZURhdGEpIHtcclxuICAgICAgICAgICAgbGV0IG9iaiA9IHN0b3JlRGF0YVtkYXRhXTtcclxuICAgICAgICAgICAgLy8gaWYgKG9iai5saW5rZWRCbG9ja0lkKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLi4ub2JqLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbWFuZGF0b3J5OiB0aGlzLnJlcGV0YWJsZUJsb2NrVXRpbC5nZXRSZXBlYXRhYmxlTG9jYWxTdG9yYWdlRGF0YVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgKG9iai5saW5rZWRCbG9ja0lkLCBTdHJpbmcob2JqLmlkKSlbJ2lzTWFuZGF0b3J5J11cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9O1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIGFwcERhdGEucHVzaChvYmopO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXBwRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxBcHBEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxTdGVwRGF0YShzdGVwSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoe1xyXG4gICAgICAgICAgICBmaWx0ZXJCeTogZW50aXR5ID0+IGVudGl0eS5zdGVwSWQgPT09IHN0ZXBJZFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEFsbFN0ZXBEYXRhV2l0aEFwaUtleShzdGVwSWQ6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoe1xyXG4gICAgICAgICAgICBmaWx0ZXJCeTogW1xyXG4gICAgICAgICAgICAgICAgZW50aXR5ID0+IGVudGl0eS5zdGVwSWQgPT09IHN0ZXBJZCxcclxuICAgICAgICAgICAgICAgIGVudGl0eSA9PiBlbnRpdHkuYXBpS2V5LnRyaW0oKS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxTdGVwRGF0YVdpdGhSZXF1ZXN0QXBpS2V5KHN0ZXBJZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YVF1ZXJ5LnNlbGVjdEFsbCh7XHJcbiAgICAgICAgICAgIGZpbHRlckJ5OiBbXHJcbiAgICAgICAgICAgICAgICBlbnRpdHkgPT4gZW50aXR5LnN0ZXBJZCA9PT0gc3RlcElkXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9KS5waXBlKG1hcChcclxuICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmaW5hbEFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHJlcXVlc3RLZXkgb2YgZGF0YS5yZXF1ZXN0QXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHsgLi4ub2JqLCBhcGlLZXk6IHJlcXVlc3RLZXkgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmluYWxBcnIgPSBbLi4uZmluYWxBcnIsIC4uLmFycl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmluYWxBcnI7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRBbGxTdGVwRGF0YUJ5TWFuZGF0b3J5KHN0ZXBJZDogc3RyaW5nLCBpc01hbmRhdG9yeTogYm9vbGVhbikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoe1xyXG4gICAgICAgICAgICBmaWx0ZXJCeTogW1xyXG4gICAgICAgICAgICAgICAgZW50aXR5ID0+IGVudGl0eS5zdGVwSWQgPT09IHN0ZXBJZCxcclxuICAgICAgICAgICAgICAgIGVudGl0eSA9PiBlbnRpdHkubWFuZGF0b3J5ID09PSBpc01hbmRhdG9yeVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QXBwRGF0YUJ5RmllbGRJZChmaWVsZElkOiBzdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hcHBEYXRhUXVlcnkuc2VsZWN0RW50aXR5KGZpZWxkSWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEZpZWxkRGF0YUJ5RmllbGRJZHMoc2VwYXJhdGVkRmllbGRTdHJpbmc6IHN0cmluZywgc2VwYXJhdG9yOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5hcHBEYXRhU3RvcmUuZ2V0VmFsdWUoKTtcclxuICAgICAgICBjb25zdCBmaWVsZERhdGEgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHNlcGFyYXRlZEZpZWxkU3RyaW5nLnNwbGl0KHNlcGFyYXRvcikpIHtcclxuICAgICAgICAgICAgZmllbGREYXRhLnB1c2goZGF0YS5lbnRpdGllc1tmaWVsZC50cmltKCldICE9PSB1bmRlZmluZWQgPyBkYXRhLmVudGl0aWVzW2ZpZWxkLnRyaW0oKV0udmFsdWUgOiB1bmRlZmluZWQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWVsZERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RmllbGREYXRhQnlGaWVsZElkKGZpZWxkSWQ6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAgICAgLy8gbGV0IGtleVZhbHVlID0gJyc7XHJcbiAgICAgICAgLy8gdGhpcy5hcHBEYXRhUXVlcnkuc2VsZWN0RW50aXR5KGZpZWxkSWQpXHJcbiAgICAgICAgLy8gICAgIC5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAga2V5VmFsdWUgPSB2YWwgPyB2YWwudmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgLy8gICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gcmV0dXJuIGtleVZhbHVlO1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmFwcERhdGFTdG9yZS5nZXRWYWx1ZSgpO1xyXG4gICAgICAgIGNvbnN0IGtleVZhbCA9IGRhdGEuZW50aXRpZXNbZmllbGRJZF0gIT09IHVuZGVmaW5lZCA/IGRhdGEuZW50aXRpZXNbZmllbGRJZF0udmFsdWUgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgcmV0dXJuIGtleVZhbDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm5JZlJlcGVhdGVkRmllbGQocmVwZWF0ZWRCbG9ja0ZpZWxkSWQpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5hcHBEYXRhU3RvcmUuZ2V0VmFsdWUoKTtcclxuICAgICAgICBsZXQgaXNSZXBlYXRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAoY29uc3QgZW50aXR5IGluIGRhdGEuZW50aXRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKGVudGl0eSA9PT0gcmVwZWF0ZWRCbG9ja0ZpZWxkSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLmVudGl0aWVzW3JlcGVhdGVkQmxvY2tGaWVsZElkXS5pc1JlcGVhdGVkRmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICBpc1JlcGVhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaXNSZXBlYXRlZDtcclxuICAgIH1cclxuXHJcbiAgICBnZXRGaWVsZElkTWFwRmllbGRWYWx1ZUJ5UmVwZWF0ZWRCbG9ja0ZpZWxkSWQocmVwZWF0ZWRCbG9ja0ZpZWxkSWQpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5hcHBEYXRhU3RvcmUuZ2V0VmFsdWUoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGVudGl0eSBpbiBkYXRhLmVudGl0aWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmVudGl0aWVzW2VudGl0eV0ucmVwZWF0ZWRCbG9ja0ZpZWxkSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXBlYXRlZEJsb2NrRmllbGRJZCA9PT0gZGF0YS5lbnRpdGllc1tlbnRpdHldLnJlcGVhdGVkQmxvY2tGaWVsZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2VudGl0eV0gPSBkYXRhLmVudGl0aWVzW2VudGl0eV0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXRGaWVsZERhdGFCeUFwaUtleShhcGlLZXk6IHN0cmluZykge1xyXG4gICAgLy8gICAgIGxldCBzdWNjZXNzID0gZmFsc2U7XHJcbiAgICAvLyAgICAgbGV0IGtleVZhbHVlID0gJyc7XHJcbiAgICAvLyAgICAgdGhpcy5hcHBEYXRhUXVlcnkuc2VsZWN0QWxsKHtcclxuICAgIC8vICAgICAgICAgZmlsdGVyQnk6IFtcclxuICAgIC8vICAgICAgICAgICAgIGVudGl0eSA9PiBlbnRpdHkuYXBpS2V5ID09PSBhcGlLZXlcclxuICAgIC8vICAgICAgICAgXVxyXG4gICAgLy8gICAgIH0pLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgLy8gICAgICAgICBrZXlWYWx1ZSA9IHZhbFswXS52YWx1ZTtcclxuICAgIC8vICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgIC8vICAgICAgICAgcmV0dXJuIGtleVZhbHVlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIGZpZWxkIHZhbHVlIG9mIHRoZSBiYXNpcyBvZiB0aGUgdHlwZSBvZiB0aGUgYXBpIGtleVxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBhcGlLZXkgaXMgdGhhIGFwaSBrZXkgdGhhdCBpcyByZXF1aXJlZFxyXG4gICAgICogQHBhcmFtIHR5cGUgaXMgYnNpY2FsbHkgdGhlIHR5cGUgb2YgdGhlIGFwaSBrZXkgaS5lIHJlcXVlc3Qgb3IgcmVzcG9uc2VcclxuICAgICAqL1xyXG5cclxuICAgIGdldEZpZWxkRGF0YUJ5QXBpS2V5KGFwaUtleTogc3RyaW5nLCB0eXBlPzogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICBsZXQga2V5VmFsdWUgPSAnJztcclxuICAgICAgICB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoKS5zdWJzY3JpYmUodmFsID0+IHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzaW5nbGVWYWwgb2YgdmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA9PT0gJ3JlcXVlc3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcGlfa2V5IG9mIHNpbmdsZVZhbC5yZXF1ZXN0QXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlfa2V5ID09PSBhcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlID0gc2luZ2xlVmFsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXNwb25zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaV9rZXkgb2Ygc2luZ2xlVmFsLnJlc3BvbnNlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlfa2V5ID09PSBhcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGtleVZhbHVlID0gc2luZ2xlVmFsLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcGlLZXkgPT09IHNpbmdsZVZhbC5hcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5VmFsdWUgPSBzaW5nbGVWYWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0QXBwRGF0YUJ5QXBpS2V5KGFwaUtleTogc3RyaW5nKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuIHRoaXMuYXBwRGF0YVF1ZXJ5LnNlbGVjdEFsbCh7XHJcbiAgICAvLyAgICAgICAgIGZpbHRlckJ5OiBlbnRpdHkgPT4gZW50aXR5LmFwaUtleSA9PT0gYXBpS2V5XHJcbiAgICAvLyAgICAgfSk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSBhcHAgZGF0YSBvbiB0aGUgYmFzaXMgb2YgYXBpIGtleSBhbmRcclxuICAgICAqICB0aGUgdHlwZSBvZiB0aGUgYXBpS2V5XHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGFwaUtleSBpcyB0aGUgYXBpIGtleVxyXG4gICAgICogQHBhcmFtIHR5cGUgY2FuIGJlIG9mIHR3byB0eXBlcyBleC4gcmVxdWVzdCBvciByZXNwb25zZVxyXG4gICAgICovXHJcbiAgICBnZXRBcHBEYXRhQnlBcGlLZXkoYXBpS2V5OiBzdHJpbmcsIHR5cGU/OiBzdHJpbmcpIHtcclxuICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBhcHBEYXRhOiBhbnk7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhUXVlcnkuc2VsZWN0QWxsKCkuc3Vic2NyaWJlKHZhbCA9PiB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc2luZ2xlVmFsIG9mIHZhbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdyZXF1ZXN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBpX2tleSBvZiBzaW5nbGVWYWwucmVxdWVzdEFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpX2tleSA9PT0gYXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBEYXRhID0gc2luZ2xlVmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09ICdyZXNwb25zZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaV9rZXkgb2Ygc2luZ2xlVmFsLnJlc3BvbnNlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlfa2V5ID09PSBhcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcERhdGEgPSBzaW5nbGVWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwaUtleSA9PT0gc2luZ2xlVmFsLmFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBEYXRhID0gc2luZ2xlVmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBwRGF0YTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlRGF0YUZyb21TdGVwKHN0ZXBJZDogc3RyaW5nLCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgbGV0IGxvb3BFbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVF1ZXJ5LnNlbGVjdEFsbCgpLnN1YnNjcmliZShzdGVwVmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9vcEVuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdGVwVmFsIG9mIHN0ZXBWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXBJZCA9PT0gc3RlcFZhbC5zdGVwSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNsZWFyIHRoZSBzZXNzaW9uIHN0b3JhZ2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2UuZGVsZXRlQXBpRGF0YShzdGVwVmFsLmFwaUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFwcERhdGEoc3RlcFZhbC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXBWYWwubGlua2VkQmxvY2tJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oc3RlcFZhbC5saW5rZWRCbG9ja0lkICsgJ19jb3VudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBldGFibGVCbG9ja1V0aWwucmVtb3ZlQnlCbG9ja0lkKHN0ZXBWYWwubGlua2VkQmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZURhdGFGcm9tU3RlcElkcyhzdGVwSWRzOiBBcnJheTxhbnk+LCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgbGV0IGxvb3BFbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVF1ZXJ5LnNlbGVjdEFsbCgpLnN1YnNjcmliZShzdGVwVmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9vcEVuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzdGVwVmFsIG9mIHN0ZXBWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHN0ZXBJZHMuaW5jbHVkZXMoc3RlcFZhbC5zdGVwSWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmRlbGV0ZUFwaURhdGEoc3RlcFZhbC5hcGlLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBcHBEYXRhKHN0ZXBWYWwuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGVwVmFsLmxpbmtlZEJsb2NrSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKHN0ZXBWYWwubGlua2VkQmxvY2tJZCArICdfY291bnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwZXRhYmxlQmxvY2tVdGlsLnJlbW92ZUJ5QmxvY2tJZChzdGVwVmFsLmxpbmtlZEJsb2NrSWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmICFsb29wRW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcEVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgbG9vcEVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKGZhbHNlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdldERhdGFGcm9tU3RlcElkcyhzdGVwSWRzOiBBcnJheTxhbnk+LCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgbGV0IGxvb3BFbmRlZCA9IGZhbHNlO1xyXG4gICAgICAgIGxldCBtYW5kYXRvcnlDaGVjayA9IHRydWU7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhUXVlcnkuc2VsZWN0QWxsKCkuc3Vic2NyaWJlKHN0ZXBWYWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb29wRW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHN0ZXBWYWwgb2Ygc3RlcFZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RlcElkcy5pbmNsdWRlcyhzdGVwVmFsLnN0ZXBJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGVwVmFsLm1hbmRhdG9yeSA9PT0gdHJ1ZSAmJiBzdGVwVmFsLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeUNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKG1hbmRhdG9yeUNoZWNrKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZURhdGFVc2luZ0FQSUtleXMoYXBpS2V5czogQXJyYXk8YW55PiwgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgLy8gICAgIGxldCBsb29wRW5kZWQgPSBmYWxzZTtcclxuICAgIC8vICAgICB0cnkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoKS5zdWJzY3JpYmUoYXBpS2V5VmFsdWVzID0+IHtcclxuICAgIC8vICAgICAgICAgICAgIGlmICghbG9vcEVuZGVkKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcGlLZXlWYWwgb2YgYXBpS2V5VmFsdWVzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlLZXlzLmluY2x1ZGVzKGFwaUtleVZhbC5hcGlLZXkpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmRlbGV0ZUFwaURhdGEoYXBpS2V5VmFsLmFwaUtleSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFwcERhdGEoYXBpS2V5VmFsLmlkKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgbG9vcEVuZGVkID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgIC8vICAgICAgICAgICAgIGxvb3BFbmRlZCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRvIHJlbW92ZSBkYXRhIGZvciBib3RoIHJlcXVlc3QgYW5kIHJlc3BvbnNlIGFwaSBrZXlzXHJcbiAgICAgKiBAcGFyYW0gYXBpS2V5c1xyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZURhdGFVc2luZ1JlcXVlc3RBbmRSZXNwb25zZUFQSUtleXMoYXBpS2V5czogQXJyYXk8YW55PiwgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGxldCBsb29wRW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShhcGlLZXlWYWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb29wRW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleVZhbCBvZiBhcGlLZXlWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCByZXNBcGlLZXkgb2YgYXBpS2V5VmFsLnJlc3BvbnNlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpS2V5cy5pbmNsdWRlcyhyZXNBcGlLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5kZWxldGVBcGlEYXRhKHJlc0FwaUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBcHBEYXRhKGFwaUtleVZhbC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVxQXBpS2V5IG9mIGFwaUtleVZhbC5yZXF1ZXN0QXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpS2V5cy5pbmNsdWRlcyhyZXFBcGlLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5kZWxldGVBcGlEYXRhKHJlcUFwaUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBcHBEYXRhKGFwaUtleVZhbC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byByZW1vdmUgZGF0YSBmcm9tIGVpdGhlciByZXNwb25zZSBvciByZXF1ZXN0IGFwaSBrZXlzXHJcbiAgICAgKiBAcGFyYW0gYXBpS2V5c1xyXG4gICAgICogQHBhcmFtIGNhbGxiYWNrXHJcbiAgICAgKi9cclxuICAgIHJlbW92ZURhdGFVc2luZ0FQSUtleXMoYXBpS2V5czogQXJyYXk8YW55PiwgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGxldCBsb29wRW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoKS5zdWJzY3JpYmUoYXBpS2V5VmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpbmdsZUFQSUtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaW5nbGVBcGlLZXknKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsb29wRW5kZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2UuZGVsZXRlQXBpRGF0YShhcGlLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleVZhbCBvZiBhcGlLZXlWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNpbmdsZUFQSUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwaUtleXMuaW5jbHVkZXMoYXBpS2V5VmFsLmFwaUtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFwcERhdGEoYXBpS2V5VmFsLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmcm9tIHJlc3BvbnNlIGFwaSBrZXlzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBhcGlLZXlWYWwucmVzcG9uc2VBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpS2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2UuZGVsZXRlQXBpRGF0YShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpS2V5VmFsLnJlc3BvbnNlQXBpS2V5Lmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVBcHBEYXRhKGFwaUtleVZhbC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTdG9yZS51cGRhdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpS2V5VmFsLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYXBpS2V5VmFsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUFwaUtleTpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXlWYWwucmVzcG9uc2VBcGlLZXkuc3BsaWNlKGFwaUtleVZhbC5yZXNwb25zZUFwaUtleS5pbmRleE9mKGtleSksIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnt1cGRhdGVkT246IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gcmVxdWVzdCBhcGkga2V5c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgYXBpS2V5VmFsLnJlcXVlc3RBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpS2V5cy5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2UuZGVsZXRlQXBpRGF0YShrZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpS2V5VmFsLnJlcXVlc3RBcGlLZXkubGVuZ3RoID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFwcERhdGEoYXBpS2V5VmFsLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVN0b3JlLnVwZGF0ZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXlWYWwuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hcGlLZXlWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpS2V5VmFsLnJlcXVlc3RBcGlLZXkuc3BsaWNlKGFwaUtleVZhbC5yZXF1ZXN0QXBpS2V5LmluZGV4T2Yoa2V5KSwgMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnt1cGRhdGVkT246IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvb3BFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBsb29wRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRvIGNoZWNrIGRlbGV0ZSBhbiBhcGkga2V5IHRoYXQgaXMgdW5kZXIgcmVzcG9uc2UgYXBpIGtleXMgb3JcclxuICAgICAqIHJldWVzdCBhcGkga2V5cyBvciBzaW1wbHkgYXBpIGFuIGFwaSBrZXlcclxuICAgICAqIEBwYXJhbSBhcGlLZXlcclxuICAgICAqIEBwYXJhbSB0eXBlIHR5cGUgY2FuIGJlIG9mIHJlcXVlc3Qgb3IgcmVzcG9uc2Ugb3Igc2ltcGx5XHJcbiAgICAgKiBAcGFyYW0gY2FsbGJhY2tcclxuICAgICAqL1xyXG5cclxuICAgIHJlbW92ZURhdGFVc2luZ0FQSUtleShhcGlLZXk6IHN0cmluZywgdHlwZTogc3RyaW5nID0gJycsIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmRlbGV0ZUFwaURhdGEoYXBpS2V5KTtcclxuICAgICAgICBsZXQgbG9vcEVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhUXVlcnkuc2VsZWN0QWxsKCkuc3Vic2NyaWJlKGFwaUtleVZhbHVlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWxvb3BFbmRlZCkge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleVZhbCBvZiBhcGlLZXlWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdyZXF1ZXN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwaUtleVZhbC5yZXF1ZXN0QXBpS2V5LmluY2x1ZGVzKGFwaUtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmRlbGV0ZUFwaURhdGEoYXBpS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFwcERhdGEoYXBpS2V5VmFsLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAncmVzcG9uc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXBpS2V5VmFsLnJlc3BvbnNlQXBpS2V5LmluY2x1ZGVzKGFwaUtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmRlbGV0ZUFwaURhdGEoYXBpS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFwcERhdGEoYXBpS2V5VmFsLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlLZXlWYWwuYXBpS2V5ID09PSBhcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmRlbGV0ZUFwaURhdGEoYXBpS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFwcERhdGEoYXBpS2V5VmFsLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2sgJiYgIWxvb3BFbmRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgbG9vcEVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZURhdGFVc2luZ1Jlc3BvbnNlQW5kUmVxdWVzdEFQSUtleShhcGlLZXk6IHN0cmluZywgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2UuZGVsZXRlQXBpRGF0YShhcGlLZXkpO1xyXG4gICAgICAgIGxldCBsb29wRW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoKS5zdWJzY3JpYmUoYXBpS2V5VmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9vcEVuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcGlLZXlWYWwgb2YgYXBpS2V5VmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlLZXlWYWwucmVxdWVzdEFwaUtleS5pbmNsdWRlcyhhcGlLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmRlbGV0ZUFwaURhdGEoYXBpS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQXBwRGF0YShhcGlLZXlWYWwuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlLZXlWYWwucmVzcG9uc2VBcGlLZXkuaW5jbHVkZXMoYXBpS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5kZWxldGVBcGlEYXRhKGFwaUtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUFwcERhdGEoYXBpS2V5VmFsLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9vcEVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAoY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGxvb3BFbmRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZW1vdmVEYXRhVXNpbmdVbmlxdWVJZHMoZmllbGRJZHM6IEFycmF5PGFueT4sIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICBsZXQgbG9vcEVuZGVkID0gZmFsc2U7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhUXVlcnkuc2VsZWN0TWFueShmaWVsZElkcykuc3Vic2NyaWJlKGZpZWxkVmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9vcEVuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZElkVmFsIG9mIGZpZWxkVmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZElkcy5pbmNsdWRlcyhmaWVsZElkVmFsLmlkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU3RvcmUucmVtb3ZlKGZpZWxkSWRWYWwuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgbG9vcEVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZURhdGFVc2luZ1VuaXF1ZUlkKGZpZWxkSWQ6IHN0cmluZywgY2FsbGJhY2s6IGFueSkge1xyXG4gICAgICAgIGxldCBsb29wRW5kZWQgPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFRdWVyeS5zZWxlY3RBbGwoe1xyXG4gICAgICAgICAgICAgICAgZmlsdGVyQnk6IGVudGl0eSA9PiBlbnRpdHkuaWQgPT09IGZpZWxkSWRcclxuICAgICAgICAgICAgfSkuc3Vic2NyaWJlKGZpZWxkVmFsdWVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghbG9vcEVuZGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcGlLZXlWYWwgb2YgZmllbGRWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU3RvcmUucmVtb3ZlKGFwaUtleVZhbC5pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb29wRW5kZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykge1xyXG4gICAgICAgICAgICAgICAgbG9vcEVuZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRGF0YVVzaW5nVW5pcXVlSWRzKGZpZWxkSWRzOiBBcnJheTxhbnk+LCBjYWxsYmFjazogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc3QgZGF0YSA9IHRoaXMuYXBwRGF0YVN0b3JlLmdldFZhbHVlKCk7XHJcbiAgICAgICAgY29uc3QgZGF0YUVuaXRpZXMgPSB0aGlzLmFwcERhdGFjdXJyZW50VmFsdWVbJ2VudGl0aWVzJ107XHJcbiAgICAgICAgZm9yIChjb25zdCBlbnRpdHkgaW4gZGF0YUVuaXRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkSWRzLmluY2x1ZGVzKGRhdGFFbml0aWVzW2VudGl0eV0uaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRhID0geyAuLi5kYXRhRW5pdGllc1tlbnRpdHldLCAuLi57IHZhbHVlOiAnJyB9IH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFwcERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJEYXRhVXNpbmdBcGlLZXlzKGFwaUtleXM6IEFycmF5PGFueT4sIGNhbGxiYWNrOiBhbnkpIHtcclxuICAgICAgICAvLyBjb25zdCBkYXRhID0gdGhpcy5hcHBEYXRhU3RvcmUuZ2V0VmFsdWUoKTtcclxuICAgICAgICBjb25zdCBkYXRhRW5pdGllcyA9IHRoaXMuYXBwRGF0YWN1cnJlbnRWYWx1ZVsnZW50aXRpZXMnXTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXHJcbiAgICAgICAgZm9yIChjb25zdCBlbnRpdHkgaW4gZGF0YUVuaXRpZXMpIHtcclxuICAgICAgICAgICAgaWYgKGFwaUtleXMuaW5jbHVkZXMoZGF0YUVuaXRpZXNbZW50aXR5XS5hcGlLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBuZXdEYXRhID0geyAuLi5kYXRhRW5pdGllc1tlbnRpdHldLCAuLi57IHZhbHVlOiAnJyB9IH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFwcERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gc2hvdWxkIG9ubHkgd29yayB3aGVuIHVzaW5nIG11bHRpcGxlIGFwaSBrZXlzXHJcbiAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcGlLZXlzLmluY2x1ZGVzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKGRhdGFFbml0aWVzW2VudGl0eV0ucmVxdWVzdEFwaUtleSkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7IC4uLmRhdGFFbml0aWVzW2VudGl0eV0sIC4uLnsgdmFsdWU6ICcnIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFwcERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYXBpS2V5cy5pbmNsdWRlcyh0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKGRhdGFFbml0aWVzW2VudGl0eV0ucmVzcG9uc2VBcGlLZXkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RhdGEgPSB7IC4uLmRhdGFFbml0aWVzW2VudGl0eV0sIC4uLnsgdmFsdWU6ICcnIH0gfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUFwcERhdGEobmV3RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdGVuRm9yQ2xlYXJEYXRhKCkge1xyXG4gICAgICAgIHRoaXMubG9nb3V0QWxsVGFiQ2hhbm5lbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5kYXRhID09PSAncmVkaXJlY3RUb0xvZ291dFRhYnMnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUFsbEFwcERhdGEoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==