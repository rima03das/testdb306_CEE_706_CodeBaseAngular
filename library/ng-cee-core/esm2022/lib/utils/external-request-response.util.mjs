import { FlatUnflat } from './flat-unflat-json';
import { CommonUtil } from './common-util';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../models/app-data/app-data.service";
import * as i3 from "../models/api-data/api-data.service";
import * as i4 from "../services/shared-events-service.service";
export default class ExternalRequestResponseUtil {
    http;
    appDataService;
    apiDataService;
    sharedEventsService;
    constructor(http, appDataService, apiDataService, sharedEventsService) {
        this.http = http;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsService = sharedEventsService;
        this.flatAndNestUtil = new FlatUnflat(appDataService);
        this.commonUtil = new CommonUtil();
    }
    flatAndNestUtil;
    apiConfig = {};
    commonUtil;
    externalApiRequest = {
        handler: '',
        headers: {},
        queryParams: {},
        urlParams: {},
        requestBody: {},
        primaryData: {}
    };
    internalApiRequest = {
        handler: '',
        headers: {},
        queryParams: {},
        urlParams: {},
        requestBody: {},
        url: '',
        methodType: '',
        requestType: '',
        isESB: false,
        hasAuthorisation: false,
        storageType: '',
        useUID: false,
        isEvent: false,
        downloadType: '',
        esbRequestBody: [],
        primaryData: {}
    };
    apiData = {
        id: '',
        apiKey: '',
        apiUrl: '',
        value: ''
    };
    booleanValues = {
        1: true,
        0: false,
        "true": true,
        "false": false
    };
    /**
     * this function prepares the object that needs to be sent to the project end
     * so that they can consume the headers, queryParams, urlParams and RequestBody
     * @required @param handler WFE Event handler
     * @param type The API calling type empty
     * @param isEvent If the function is triggered from an event
     * @param downloadType If the function is triggered from an event and is called from an download event
     */
    prepareObjectToBeSent(handler, type = '', isEvent = false, downloadType = '', encriptedFileData = [], primaryData = {}, tableOperations = '', tableOperationsBlock = '') {
        const handlerArr = handler.split('||');
        // console.log('handlerArr: ', handlerArr);
        // try {
        const apiConfig = JSON.parse(localStorage.getItem('API_CONFIG'));
        const apiConfigObject = apiConfig[handler.split('||')[0]];
        // ************ For Parallel API Integration *************
        const apiConfigObjectArr = [];
        handlerArr.forEach((handlerId) => {
            const config = apiConfig[handlerId];
            if (config) {
                apiConfigObjectArr.push(config);
            }
        });
        // console.log('apiConfigObjectArr: ', apiConfigObjectArr);
        // for (const config of apiConfig) {
        //     if (config.id === handler) {
        //         apiConfigObject = config;
        //         break;
        //     }
        // }
        if (!apiConfigObject || !apiConfigObjectArr || apiConfigObjectArr.length !== handlerArr.length) {
            console.log(`Error in Mapping ${handler}`);
            return false;
        }
        // check for use UID
        // if present add it in the request Body array
        if (window.sessionStorage.getItem('CEE_OIDC') === '1' && apiConfigObject.useUID && window.sessionStorage.getItem('CEE_Token')) {
            const splitData = window.sessionStorage.getItem('CEE_Token').split('##');
            let identificationTag = window.sessionStorage.getItem('CEE_SUB') || window.sessionStorage.getItem('CEE_PRN') || '';
            identificationTag = identificationTag.includes('$$') ? identificationTag.split('$$')[1] : identificationTag;
            apiConfigObject.requestBody.push(identificationTag);
            // ************ For Parallel API Integration *************
            apiConfigObjectArr.forEach((config) => {
                config.requestBody.push(identificationTag);
            });
            // console.log("apiConfigObjectArr identificationTag: ", apiConfigObjectArr);
        }
        const { requestBody, headers, queryParams, urlParams, url, methodType, requestType, isESB, hasAuthorisation, storageType, useUID, esbRequestBody } = this.formTheRequestObj(apiConfigObject, encriptedFileData, primaryData.type);
        // const requestBody = apiConfigObject.requestBody.length > 0 ? this.returnFormattedObject(apiConfigObject.requestBody) : {};
        // const headers = apiConfigObject.headerParams.length > 0 ?
        //     this.returnFormattedObject(apiConfigObject.headerParams) : {};
        // const queryParams = apiConfigObject.queryParams.length > 0 ?
        //     this.returnFormattedObject(apiConfigObject.queryParams) : {};
        // const urlParams = apiConfigObject.urlParams.length > 0 ?
        //     this.returnFormattedObject(apiConfigObject.urlParams) : {};
        if (type || window.sessionStorage.getItem('CEE_OIDC') === '1') {
            this.internalApiRequest = {
                handler,
                urlParams,
                headers,
                queryParams,
                requestBody,
                url,
                methodType,
                requestType,
                isESB,
                hasAuthorisation,
                storageType,
                useUID,
                isEvent,
                downloadType,
                esbRequestBody,
                primaryData
            };
            // ************ For Parallel API Integration *************
            var requestArr = [];
            apiConfigObjectArr.forEach((element, index) => {
                const { requestBody, headers, queryParams, urlParams, url, methodType, requestType, isESB, hasAuthorisation, storageType, useUID, esbRequestBody } = this.formTheRequestObj(element, encriptedFileData, primaryData.type);
                this.internalApiRequest = {
                    handler,
                    urlParams,
                    headers,
                    queryParams,
                    requestBody,
                    url,
                    methodType,
                    requestType,
                    isESB,
                    hasAuthorisation,
                    storageType,
                    useUID,
                    isEvent,
                    downloadType,
                    esbRequestBody,
                    primaryData
                };
                requestArr.push({
                    urlParams: element.urlParams,
                    headerParams: element.headerParams,
                    queryParams: element.queryParams,
                    requestBody: element.requestBody,
                    primaryData: primaryData,
                    url: element.url,
                    ...this.internalApiRequest,
                    handler: element.id
                });
            });
            // check if has CEE_OIDC is 1
            if (window.sessionStorage.getItem('CEE_OIDC') === '1') {
                if (apiConfigObjectArr.length > 1) { // For Parallel API Integration
                    this.sharedEventsService.apiIntegrationParallelEventHandlerEmitter.emit(requestArr);
                }
                else if (apiConfigObject.isExternal) {
                    this.externalApiRequest = {
                        handler,
                        urlParams,
                        headers,
                        queryParams,
                        requestBody,
                        primaryData
                    };
                    this.sharedEventsService.eventHandlerEmitter.emit(this.externalApiRequest);
                }
                else {
                    if ((tableOperations === "save" || tableOperations === "update") && tableOperationsBlock == "employment") {
                        this.internalApiRequest.requestBody = this.exployeeSaveBody(this.internalApiRequest, primaryData.value.position, primaryData.value.parentPosition);
                    }
                    if ((tableOperations === "save" || tableOperations === "update") && tableOperationsBlock == "living_address") {
                        this.internalApiRequest.requestBody = this.generateLivingAddressBody(this.internalApiRequest, primaryData.value.position);
                    }
                    if ((tableOperations === "save" || tableOperations === "update") && tableOperationsBlock == "income") {
                        this.internalApiRequest.requestBody = this.generateAdditionalIncomeBody(this.internalApiRequest, primaryData.value.position);
                    }
                    if ((tableOperations === "save" || tableOperations === "update") && tableOperationsBlock == "asset") {
                        this.internalApiRequest.requestBody = this.assetBody(this.internalApiRequest);
                    }
                    if ((tableOperations === "save" || tableOperations === "update") && tableOperationsBlock == "liabilities") {
                        this.internalApiRequest.requestBody = this.liabilityBody(this.internalApiRequest);
                    }
                    if ((tableOperations === "save" || tableOperations === "update") && (tableOperationsBlock == "properties" || tableOperationsBlock == "properties_mortgage")) {
                        this.internalApiRequest.requestBody = this.saveDealPropertiesBody(this.internalApiRequest);
                        if (tableOperations === "save") {
                            this.internalApiRequest.requestBody["data"]["mortgageData"] = [];
                        }
                        if (tableOperations === "update") {
                            // parentPosition
                            let propertyArr = this.getAkitaDataFromHandler("getFullDealDetails")['getFullDealDetails##data']['properties'];
                            let propertyPosition = this.internalApiRequest.primaryData.value?.position ? this.internalApiRequest.primaryData.value?.position : 0;
                            if (tableOperationsBlock == "properties_mortgage") {
                                propertyPosition = this.internalApiRequest.primaryData.value?.parentPosition ? this.internalApiRequest.primaryData.value?.parentPosition : 0;
                            }
                            // let mortgagePosition = this.internalApiRequest.primaryData.value?.position ? this.internalApiRequest.primaryData.value?.position : 0;
                            // console.log("propertyArr: ",propertyArr)
                            let propertyID = propertyArr[propertyPosition].application_id ? propertyArr[propertyPosition].application_id : this.internalApiRequest.requestBody["properties_application_id"];
                            if (this.internalApiRequest.requestBody["properties_application_id"] !== propertyID) {
                                let oldPropertyData = {};
                                for (const [key, value] of Object.entries(this.internalApiRequest.requestBody["data"]["propertyData"])) {
                                    let keyVal = tableOperationsBlock == "properties" ? value : propertyArr[propertyPosition][key];
                                    switch (typeof (value)) {
                                        case 'boolean':
                                            oldPropertyData[key] = Number(keyVal) ? true : false;
                                            break;
                                        case 'string':
                                            oldPropertyData[key] = keyVal;
                                            break;
                                        case 'number':
                                            oldPropertyData[key] = Number(keyVal);
                                            break;
                                        default:
                                            oldPropertyData[key] = keyVal;
                                            break;
                                    }
                                }
                                this.internalApiRequest.requestBody["data"]["propertyData"] = oldPropertyData;
                                this.internalApiRequest.requestBody["properties_application_id"] = propertyID;
                            }
                            // console.log("propertyID: ",propertyID)
                            let propertyData = propertyArr?.filter((item) => item.application_id === propertyID)[0];
                            // var newMortgageData = propertyData?.mortgage ? propertyData.mortgage : [];
                            // if(this.internalApiRequest.requestBody["data"]["mortgageData"][mortgagePosition] && this.internalApiRequest.requestBody["data"]["mortgageData"][mortgagePosition]?.record_id !== "") {
                            //     let isMortgageFound = propertyData.mortgage.find((item) => item.application_id === this.internalApiRequest.requestBody["data"]["mortgageData"][mortgagePosition]?.record_id);
                            //     if(!isMortgageFound) {
                            //         newMortgageData.push(this.internalApiRequest.requestBody["data"]["mortgageData"]);
                            //     } else {
                            //         newMortgageData.forEach((element,index) => {
                            //             if(element.application_id === this.internalApiRequest.requestBody["data"]["mortgageData"][mortgagePosition]["record_id"]){
                            //                 newMortgageData[index] = this.internalApiRequest.requestBody["data"]["mortgageData"][mortgagePosition];
                            //             }
                            //         });
                            //     }
                            // } else {
                            //     if(newMortgageData.length > 0) {
                            //         newMortgageData.push(this.internalApiRequest.requestBody["data"]["mortgageData"][mortgagePosition]);
                            //     } else {
                            //         newMortgageData = [Object.assign({}, this.internalApiRequest.requestBody["data"]["mortgageData"][mortgagePosition])]
                            //     }
                            // }
                            // // this.internalApiRequest.requestBody["data"]["mortgageData"] = newMortgageData;
                            // this.internalApiRequest.requestBody["data"]["mortgageData"] = [newMortgageData[mortgagePosition]]
                            // To retrict the mortgage from other property 
                            this.internalApiRequest.requestBody["data"]["mortgageData"]?.forEach((element, index) => {
                                let mortgageID = element.record_id;
                                let isMortgageFound = propertyData.mortgage ? propertyData.mortgage.find((item) => item.application_id === mortgageID) : null;
                                if (!isMortgageFound && mortgageID !== "") {
                                    this.internalApiRequest.requestBody["data"]["mortgageData"].splice(index, 1);
                                }
                            });
                        }
                        // return;
                        // console.log("saveDealPropertiesBody: ",this.internalApiRequest.requestBody)
                    }
                    if (tableOperations === "delete" && tableOperationsBlock == "properties") {
                        this.internalApiRequest.requestBody = this.deleteCurrentproperty(this.internalApiRequest);
                    }
                    if ((tableOperations === "update") && tableOperationsBlock == "personal_info") {
                        this.internalApiRequest.requestBody = this.applicantInfoBody(this.internalApiRequest, primaryData.value.position);
                    }
                    if ((tableOperations === "update") && tableOperationsBlock == "deal_info") {
                        this.internalApiRequest.requestBody = this.dealinfoBody(this.internalApiRequest);
                    }
                    if ((tableOperations === "save" || tableOperations === "update") && tableOperationsBlock == "subject_property") {
                        this.internalApiRequest.requestBody = this.saveSubjectPropertyBody(this.internalApiRequest);
                    }
                    if ((tableOperations === "save") && tableOperationsBlock == "subject_property_mortgage") {
                        this.internalApiRequest.requestBody = this.newMortgage(this.internalApiRequest);
                    }
                    if ((tableOperations === "update") && tableOperationsBlock == "subject_property_mortgage") {
                        this.internalApiRequest.requestBody = this.updateNewMortgage(this.internalApiRequest);
                    }
                    if ((tableOperations === "save") && tableOperationsBlock == "mortgage") {
                        this.internalApiRequest.requestBody = this.newDealMortgage(this.internalApiRequest);
                    }
                    if ((tableOperations === "update") && tableOperationsBlock == "mortgage") {
                        this.internalApiRequest.requestBody = this.newDealMortgage(this.internalApiRequest);
                    }
                    if ((tableOperations === "update") && tableOperationsBlock == "update_subject_property") {
                        this.internalApiRequest.requestBody = this.newSubjectProperty(this.internalApiRequest);
                    }
                    if ((tableOperations === "delete") && tableOperationsBlock == "mortgagedelete") {
                        this.internalApiRequest.requestBody = this.deleteCurrentPropertyMortGage(this.internalApiRequest);
                    }
                    if (!this.internalApiRequest.requestBody["method"] || (this.internalApiRequest.requestBody["method"] && this.internalApiRequest.requestBody["method"] != "soft_delete")) {
                        this.sharedEventsService.oidcDataEmitter.emit(this.internalApiRequest);
                    }
                }
            }
            else {
                if (apiConfigObject.isExternal) {
                    this.externalApiRequest = {
                        handler,
                        urlParams,
                        headers,
                        queryParams,
                        requestBody,
                        primaryData
                    };
                    this.sharedEventsService.eventHandlerEmitter.emit(this.externalApiRequest);
                }
                else {
                    if (apiConfigObjectArr.length > 1) { // For Parallel API Integration
                        this.sharedEventsService.apiIntegrationParallelEventHandlerEmitter.emit(requestArr);
                    }
                    else {
                        this.sharedEventsService.apiIntegrationEventHandlerEmitter.emit(this.internalApiRequest);
                    }
                }
            }
        }
        else {
            this.externalApiRequest = {
                handler,
                urlParams,
                headers,
                queryParams,
                requestBody,
                primaryData
            };
            this.sharedEventsService.eventHandlerEmitter.emit(this.externalApiRequest);
        }
        this.showOrHideLoader(handler, true);
        // } catch (error) {
        //     throw new Error(`Error Occurred while fetching data from api_config for handler: ${handler}`);
        // }
    }
    getAkitaDataFromHandler(handler) {
        if (this.apiDataService.getApiDataByHandler(handler)) {
            return this.returnNestedData(this.apiDataService.getApiDataByHandler(handler).value);
        }
    }
    returnNestedData(data) {
        if (Object(data) !== data || Array.isArray(data)) {
            return data;
        }
        const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
        const resultholder = {};
        // tslint:disable-next-line: forin
        for (const p in data) {
            let cur = resultholder;
            let prop = '';
            let m;
            while ((m = regex.exec(p))) {
                cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
                prop = m[2] || m[1];
            }
            cur[prop] = data[p];
        }
        return resultholder[''] || resultholder;
    }
    deleteCurrentPropertyMortGage = (res) => {
        const parentIndex = res.primaryData?.value?.parentPosition ?? 0;
        const urlProperties = res.urlParams?.properties;
        const urlProperty = urlProperties[parentIndex];
        const childIndex = res.primaryData.value.position;
        const currentMortgage = urlProperties?.mortgage[childIndex];
        if (!currentMortgage.record_id) {
            this.sharedEventsService.eventDeleteRepeatedBlockSubscriber.emit(res);
            this.sharedEventsService.eventResponseSubscriber.emit({
                handler: res.handler,
                response: { status: true },
                event_success: true,
            });
            return { method: "soft_delete" };
        }
        return { ...res.requestBody, mortgage_application_id: currentMortgage?.record_id };
    };
    newMortgage(res) {
        const subPropBody = this.newDealSubjectProperty(res);
        const subData = subPropBody['data'];
        const property = subPropBody['subject_property_id'];
        var body = {
            ...res.queryParams,
            data: { property_id: property, include_in_mortgage: true },
        };
        if (res?.urlParams?.data?.transaction_type == "Purchase") {
            body.data = { ...body.data, property_value: subData.purchase_price };
        }
        return body;
    }
    updateNewMortgage(res) {
        const subPropBody = this.newDealSubjectProperty(res);
        const subData = subPropBody['data'];
        const property = subPropBody['subject_property_id'];
        var body = {
            ...res.queryParams,
            data: { property_id: property, include_in_mortgage: true },
        };
        if (res?.urlParams?.data?.transaction_type == "Purchase") {
            body.data = { ...body.data, property_value: subData.purchase_price };
        }
        if (res?.urlParams?.data?.record_id != '') {
            body.data = { ...body.data, record_id: res.urlParams?.data?.record_id };
        }
        return body;
    }
    newDealMortgage(res) {
        var path = this.extractPathParamsFromCurrentUrl();
        if (path[2]) {
            res.requestBody.loan_application_id = path[2];
        }
        const mortgageProp = res.requestBody.data;
        var loan_term = Number(res.requestBody.data.loan_term_year ?? 0) * 12 + Number(res.requestBody.data.loan_term_month ?? 0);
        var amortization_period = Number(res.requestBody.data.amortization_period_year ?? 0) * 12 + Number(res.requestBody.data.amortization_period_month ?? 0);
        if (res.requestBody.data.record_id !== '') {
            var mortgageBody = {
                ...res.queryParams,
                data: { ...mortgageProp, record_id: res.requestBody.data.record_id, loan_term, amortization_period },
            };
        }
        else {
            delete mortgageProp.record_id;
            var mortgageBody = {
                ...res.queryParams,
                data: { ...mortgageProp, loan_term, amortization_period },
            };
        }
        delete mortgageBody.data.loan_term_year;
        delete mortgageBody.data.loan_term_month;
        delete mortgageBody.data.amortization_period_year;
        delete mortgageBody.data.amortization_period_month;
        mortgageBody = this.setEmptyKeysToNull(mortgageBody);
        return mortgageBody;
    }
    setEmptyKeysToNull(obj) {
        if (Array.isArray(obj)) {
            return obj.map((item) => this.setEmptyKeysToNull(item)).filter((item) => item !== undefined && item !== 'Invalid date');
        }
        else if (typeof obj === 'object' && obj !== null) {
            return Object.fromEntries(Object.entries(obj).map(([key, value]) => [
                key,
                typeof value === 'object' && value !== null
                    ? this.setEmptyKeysToNull(value) // Recursively process nested objects/arrays
                    : value === null || value === undefined || value === '' || value === 'Invalid date'
                        ? null
                        : value, // Set to null if empty
            ]));
        }
        return obj;
    }
    newSubjectProperty = (res) => {
        var body = {
            ...res.queryParams,
            subject_property_id: res.urlParams.data?.property_id,
            data: { purchase_price: (res.requestBody.data.property_value ? +res.requestBody.data.property_value : 0), is_subject_property: true },
        };
        return body;
    };
    saveSubjectPropertyBody(res) {
        var path = this.extractPathParamsFromCurrentUrl();
        if (path[2]) {
            res.requestBody.data.loan_application_id = path[2];
        }
        const subPropBody = this.newDealSubjectProperty(res);
        return subPropBody;
    }
    newDealSubjectProperty(res) {
        const subProp = res.requestBody.data;
        res.requestBody.data.total_expenses = Number(res.requestBody.data?.monthly_heating_fees + res.requestBody.data?.monthly_hydro_costs + res.requestBody.data?.monthly_insurance_costs + res.requestBody.data?.monthly_management_costs + res.requestBody.data?.monthly_repairs_costs + res.requestBody.data?.monthly_interest_costs + res.requestBody.data?.monthly_other_costs + res.requestBody.data?.monthly_rental_income + res.requestBody.data?.monthly_condo_fees);
        if (res.queryParams.data?.subject_property_id !== '') {
            var subBody = {
                ...res.queryParams,
                data: { ...subProp, is_subject_property: true, property_related_to: res.queryParams.data?.property_related_to },
                subject_property_id: res.queryParams.data?.subject_property_id,
                record_id: res.queryParams.data?.record_id
            };
        }
        else {
            var subBody = {
                ...res.queryParams,
                data: { ...subProp, is_subject_property: true, property_related_to: res.queryParams.data?.property_related_to },
            };
        }
        return subBody;
    }
    dealinfoBody(res, related = {}) {
        if (related) {
            res.requestBody.deal_information.related_to = related['loan_application_id'];
        }
        const { closing_date, intended_use_of_funds } = res.requestBody.deal_information;
        const body = {
            ...res.urlParams,
            application_id: res.queryParams.deal_application_id,
            data: { ...res.requestBody.deal_information, intended_use_of_funds: Array.isArray(intended_use_of_funds) ? intended_use_of_funds : [], organization_id: res.queryParams.data.organization_id, closing_date: this.invalidDate(closing_date) },
        };
        return body;
    }
    applicantInfoBody(res, position) {
        const CurrentapplicantInfoBody = res.requestBody['borrowers'][position];
        const id = res.urlParams['borrowers'][position];
        const body = {
            data: { ...CurrentapplicantInfoBody, date_of_birth: this.invalidDate(CurrentapplicantInfoBody.date_of_birth), loan_application_id: res.urlParams.loan_application_id },
            ...res.queryParams,
            ...id
        };
        return body;
    }
    ;
    assetBody(res) {
        const body = {
            data: res.requestBody,
            ...res.queryParams,
        };
        return body;
    }
    ;
    saveDealPropertiesBody(res) {
        const index = res.primaryData?.value?.position;
        const properties = res.requestBody?.properties;
        // const current = properties[index];
        // if (!current) {
        //   throw new Error(`Property at parentIndex ${index} does not exist.`);
        // }
        const propertyData = { ...properties }; // Create a shallow copy
        delete propertyData['mortgage']; // Remove the `mortgage` key
        const length = properties?.mortgage ? Object.keys(properties.mortgage).length : 0;
        let mortgageArray = [];
        if (length > 0) {
            var mortgageDataArray = properties.mortgage;
            mortgageArray = Array.isArray(mortgageDataArray)
                ? mortgageDataArray
                : (mortgageDataArray && typeof mortgageDataArray === 'object' ? Object.values(mortgageDataArray) : []);
            mortgageArray.forEach((element) => {
                if (element && typeof element === 'object') {
                    element['maturity_date'] = this.invalidDate(element['maturity_date']);
                }
            });
        }
        let bodyObj = {
            ...res.queryParams,
            data: {
                propertyData: {
                    ...propertyData,
                    is_subject_property: false,
                    loan_application_id: res.urlParams?.deal_id,
                },
                mortgageData: mortgageArray ? mortgageArray : [],
            },
        };
        // bodyObj = removeEmptyKeys(bodyObj);
        const urlProperties = res.urlParams?.properties;
        // const urlProperty = urlProperties[index];
        if (urlProperties?.properties_application_id) {
            bodyObj = {
                ...bodyObj,
                properties_application_id: urlProperties.properties_application_id,
            };
        }
        return bodyObj;
    }
    ;
    liabilityBody = (res) => {
        const body = {
            data: res.requestBody,
            maturity_date: this.invalidDate(res.requestBody.maturity_date),
            ...res.queryParams,
        };
        return body;
    };
    deleteCurrentproperty(res) {
        const parentIndex = res.primaryData?.value?.position;
        const urlProperties = res.urlParams?.properties || [];
        const urlProperty = urlProperties[parentIndex];
        let propertyArr = this.getAkitaDataFromHandler("getFullDealDetails")['getFullDealDetails##data']['properties'];
        let propertyPosition = this.internalApiRequest.primaryData.value?.position ? this.internalApiRequest.primaryData.value?.position : 0;
        let propertyID = propertyArr[propertyPosition]?.application_id ? propertyArr[propertyPosition]?.application_id : res?.requestBody?.properties?.properties_application_id;
        if (!propertyID) {
            this.sharedEventsService.eventDeleteRepeatedBlockSubscriber.emit(res);
            this.sharedEventsService.eventResponseSubscriber.emit({
                handler: res.handler,
                response: { status: true },
                event_success: true,
            });
            return { method: "soft_delete" };
        }
        return { ...res.requestBody, properties_application_id: propertyID };
    }
    ;
    generateAdditionalIncomeBody(res, currPosition) {
        const position = currPosition;
        const index = currPosition;
        const income = res.requestBody?.income || [];
        const current = income[position];
        if (!current) {
            throw new Error(`income at parentIndex ${position} does not exist.`);
        }
        const borrowers = res.urlParams?.borrowers[position];
        let bodyObj = {
            ...res.queryParams,
            data: {
                ...current,
                payment_type: [current.payment_type],
                borrower_id: borrowers.applicant_application_id,
                employer_name: 'Additional Income',
                employment_type: 'Seasonal',
                start_date: this.invalidDate(current.start_date),
                end_date: this.invalidDate(current.end_date),
                is_salary_income: false,
            },
        };
        const urlincome = res.urlParams?.income[position];
        if (urlincome?.income_application_id != '') {
            bodyObj = {
                ...bodyObj,
                income_application_id: urlincome.income_application_id,
            };
        }
        return bodyObj;
    }
    ;
    generateLivingAddressBody(res, currPosition) {
        const index = currPosition;
        const address = res.requestBody?.address || [];
        const current = address[index];
        const urlAddresses = res.urlParams?.address[index];
        if (!current) {
            throw new Error(`address at parentIndex ${index} does not exist.`);
        }
        const borrowers = res.urlParams?.borrowers ? res.urlParams?.borrowers[index] : [];
        let bodyObj = {
            ...res.queryParams,
            data: {
                ...current,
                move_in_date: this.invalidDate(current.move_in_date),
                move_out_date: this.invalidDate(current.move_out_date),
                borrower_id: borrowers.applicant_application_id,
            },
        };
        if (urlAddresses?.address_application_id != '') {
            bodyObj = {
                ...bodyObj,
                ...urlAddresses
            };
        }
        return bodyObj;
    }
    ;
    exployeeSaveBody(res, currPosition, parentPosition) {
        const parentIndex = currPosition;
        const currentApplicant = res.requestBody?.applicant[parentIndex];
        const currentEmployee = currentApplicant.employment;
        const { payment_type } = currentEmployee;
        var bodyObj = { ...res.urlParams, data: { ...currentEmployee, start_date: this.invalidDate(currentEmployee.start_date), end_date: this.invalidDate(currentEmployee.end_date), payment_type: Array.isArray(payment_type) ? payment_type : [payment_type], borrower_id: res.queryParams.borrowers ? res.queryParams.borrowers[parentPosition].applicant_application_id : '' } };
        if (res && res.queryParams && res.queryParams.applicant && res.queryParams.applicant[parentIndex] && res.queryParams.applicant[parentIndex].employment['employment_application_id'] != '') {
            bodyObj = { ...bodyObj, employment_application_id: res.queryParams.applicant[parentIndex].employment['employment_application_id'] };
        }
        if (bodyObj.data['start_date'] === 'Invalid date') {
            bodyObj.data['start_date'] = '';
        }
        else if (bodyObj.data['end_date'] === 'Invalid date') {
            bodyObj.data['end_date'] = '';
        }
        return bodyObj;
    }
    ;
    invalidDate(date) {
        if (date?.toLowerCase() === 'invalid date' || date?.toLowerCase() === '') {
            date = "";
        }
        return date;
    }
    ;
    /**
     * function that forms the request object that takes in the
     * api config object and
     * returns the query param, header param, url param,
     * and request body as an object
     * @required @param apiConfigObject type is object
     * @returns an object that contains all the data that is required by the
     * API
     */
    formTheRequestObj(apiConfigObject, encriptedFileData = [], type = "") {
        return {
            requestBody: encriptedFileData.length > 0 ? { file: encriptedFileData } : (apiConfigObject.requestBody.length > 0 ? this.returnFormattedObject(apiConfigObject.requestBody, type, 'requestBody') : {}),
            headers: (apiConfigObject.headerParams && apiConfigObject.headerParams.length > 0) ?
                this.returnFormattedObject(apiConfigObject.headerParams, type) : {},
            queryParams: apiConfigObject.queryParams.length > 0 ?
                this.returnFormattedObject(apiConfigObject.queryParams, type) : {},
            urlParams: apiConfigObject.urlParams.length > 0 ?
                this.returnFormattedObject(apiConfigObject.urlParams, type) : {},
            url: this.getURL(apiConfigObject.url),
            methodType: apiConfigObject.methodType,
            requestType: apiConfigObject.requestType,
            isESB: apiConfigObject.isESB,
            hasAuthorisation: apiConfigObject.hasAuthorisation,
            storageType: apiConfigObject.storageType,
            useUID: apiConfigObject.useUID || false,
            esbRequestBody: (apiConfigObject.esbRequestBody && apiConfigObject.esbRequestBody.length > 0) ? this.returnFormattedObject(apiConfigObject.esbRequestBody) : {},
            isExternal: apiConfigObject.isExternal
        };
    }
    /**
     * method modifies the url of the api_config object
     * for example: url -> ${BASE_URL}/mocks/api
     * code matches the regex and finds the BASE_URL
     * then it checks the local storage for any
     * value for BASE_URL as it should be added in the app_config.json
     * if it is not added then the code will remove ${} from the url and
     * hit the api
     */
    getURL(url) {
        const dynamicPath = url.match(new RegExp(/\$\{(.*?)\}/g));
        if (dynamicPath) {
            for (const path of dynamicPath) {
                const p = path;
                const matchPath = p.match(new RegExp(/\w+/g));
                let apiPath = p;
                if (matchPath) {
                    apiPath = localStorage.getItem(matchPath[0]);
                    if (!apiPath) {
                        apiPath = matchPath[0];
                        console.warn(`Variable ${matchPath[0]} is not declared`);
                    }
                }
                url = url.split(path).join(apiPath);
            }
            return url;
        }
        return url;
    }
    /**
     * function returns an object which is the mapping of the  apiKey and the value in a field.
     */
    getAppData(onlyValues = true) {
        let obj = {};
        const appStoreData = this.appDataService.getAllAppStoreData().sort((a, b) => {
            if (a.updatedOn && a.updatedOn < b.updatedOn) {
                return -1;
            }
            if (a.updatedOn && a.updatedOn > b.updatedOn) {
                return 1;
            }
            return 0;
        });
        for (const data of appStoreData) {
            if (data.requestApiKey.length > 0) {
                for (const key of data.requestApiKey) {
                    if (data.dataFormatSeparator) {
                        // tslint:disable-next-line: no-unused-expression
                        (key && (key.includes(':::')) && (obj = {
                            ...this.checkForDateOrTimePicker(key.split(':::'), data.value.split(data.dataFormatSeparator)), ...obj
                        }));
                    }
                    obj[key] = onlyValues ? data.value : { value: data.value, updatedOn: data.updatedOn };
                }
            }
            else {
                obj[data.apiKey] = onlyValues ? data.value : { value: data.value, updatedOn: data.updatedOn };
            }
        }
        return obj;
    }
    checkForDateOrTimePicker(keys, apiValue) {
        const obj = {};
        for (const [index, value] of keys.entries()) {
            obj[value] = apiValue[index] || '';
        }
        return obj;
    }
    /**
     * function returns an array of objects in which the first one is the object with key
     * which the apiKey concatenated with the api url and second one is the object with the normal apiKey
     * which are basically the url parameters that does not have an endpoint
     */
    getApiData() {
        let endPointMappedObj = {}; // store all api key value mappings in which the keys are url hash mapped
        const obj = {}; // store all the api key value mappings in which the api keys are not hash mapped
        const apiStoreData = this.apiDataService.getAllApiStoreData();
        for (const data of apiStoreData) {
            if (data.apiUrl) {
                // keeping data.value at first because when the data is received in the
                // front end data is stored in the api data and only at that time
                // apiUrl is added so we need to update the data in the current api data with
                // the api data that comes from the api for example pagination data, primaryKey,
                // pre-defined global parameter
                endPointMappedObj = { ...data.value, ...endPointMappedObj };
            }
            else if (data.apiKey.includes('##')) {
                const apiObj = {};
                apiObj[data.apiKey] = data.value;
                endPointMappedObj = { ...endPointMappedObj, ...apiObj };
            }
            else {
                obj[data.apiKey] = data.value;
            }
        }
        return [endPointMappedObj, obj];
    }
    /**
     * function that returns the object mapped according to the given keys array
     * @param keys the array of ids that needs to be mapped
     */
    /* private returnFormattedObject(keys, type='') {
        const apiStoreData = this.getApiData();
        const appStoreData = this.getAppData();
        
        const obj = {};
        for (const key of keys) {
            const split = key.split('##');
            const configKeys = key.includes('##') ? split[0] + '##' + split[1] : key;
            const isOptional = split[3] == 'optional';
            if (configKeys.includes('((params))')) {
                let targetApiKey = ''
                let apiKey = ''
                if (configKeys.includes('||') && configKeys.split('||').length === 2) {
                    targetApiKey = configKeys.split('||')[0];
                    apiKey = configKeys.split('||')[1].substring(10);
                }
                else {
                    targetApiKey = apiKey = configKeys.substring(10);
                }
                obj[targetApiKey] = this.sharedEventsService.params[apiKey];
            } else if (configKeys.includes('[*]')) {
                const regex = configKeys.split('[*]').join('\\[\\d+\\]');
                // check for data in appData Store
                for (const dataKey of Object.keys(appStoreData)) {
                    const result = dataKey.match(new RegExp(regex));
                    if (result) {
                        obj[this.getKey(result[0])] = this.returnParsedValues(split[2], appStoreData[result[0]], isOptional);
                    }
                }

                // check for data in api data store
                for (const dataKey of Object.keys(apiStoreData[0])) {
                    const result = dataKey.match(new RegExp(regex));
                    if (result) {
                        // check if the configKeys that needs to be pushed already exits in the object
                        const apiKey = this.getKey(result[0]);
                        if (!Object.keys(obj).includes(apiKey)) {
                            obj[apiKey] = this.returnParsedValues(split[2], apiStoreData[0][result[0]], isOptional);
                        }
                    }
                }
            } else if (configKeys.includes('{*}')) {
                const regex = configKeys.split('{*}').join('.+');
                // check for data in appData Store
                for (const dataKey of Object.keys(appStoreData)) {
                    const result = dataKey.match(new RegExp(regex));
                    if (result) {
                        obj[this.getKey(result[0])] = this.returnParsedValues(split[2], appStoreData[result[0]], isOptional);
                    }
                }

                // check for data in api data store
                for (const dataKey of Object.keys(apiStoreData[0])) {
                    const result = dataKey.match(new RegExp(regex));
                    if (result) {
                        // check if the configKeys that needs to be pushed already exits in the object
                        const apiKey = this.getKey(result[0]);
                        if (!Object.keys(obj).includes(apiKey)) {
                            obj[apiKey] = this.returnParsedValues(split[2], apiStoreData[0][result[0]], isOptional);
                        }
                    }
                }
            } else {
                const apiKey = this.getKey(configKeys);
                // check if configKeys exists in the app data store
                if (Object.keys(appStoreData).includes(configKeys)) {
                    obj[apiKey] = this.returnParsedValues(split[2], appStoreData[configKeys], isOptional);
                } else if (Object.keys(apiStoreData[0]).includes(configKeys)) {
                    // check if configKeys exists in api data store where keys are has mapped
                    obj[apiKey] = this.returnParsedValues(split[2], apiStoreData[0][configKeys], isOptional);
                } else if (Object.keys(apiStoreData[1]).includes(apiKey)) {
                    // check if configKeys exists in api data store where keys are not hash mapped
                    obj[apiKey] = this.returnParsedValues(split[2], apiStoreData[1][apiKey], isOptional);
                }
                // for optional apikey
                if (obj[apiKey] === undefined) {
                    delete obj[apiKey];
                }
            }
        }
        let finalObj = this.flatAndNestUtil.createNestedObject(obj, type);
        return finalObj;
    } */
    removeEmptyKeys(obj) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) { // Ensure it's not from the prototype chain
                if (obj[key] === null || obj[key] === undefined) {
                    delete obj[key];
                }
            }
        }
        return obj;
    }
    // returns the object mapped according to the given keys array 
    getMultipleApisDataByKeys(storeData, keys) {
        const obj = {};
        for (const key of keys) {
            if (storeData[key]) {
                obj[key] = storeData[key];
            }
        }
        return obj;
    }
    /**
     * Gets the latest value from store data based on updatedOn timestamp
     */
    getLatestValue(storeData) {
        return Object.entries(storeData)
            .reduce((latest, [key, data]) => {
            if (!latest || data.updatedOn > latest.updatedOn) {
                return {
                    key,
                    value: data.value,
                    updatedOn: data.updatedOn
                };
            }
            return latest;
        }, null);
    }
    /**
     * function that returns the object mapped according to the given keys array
     * @param keys the array of ids that needs to be mapped
     */
    returnFormattedObject(keys, type = '', configType = '') {
        const obj = {};
        const apiStoreData = this.getApiData();
        const appStoreData = this.getAppData();
        // filtering and separating app config keys and api keys
        const [appConfigKeys, apiKeys] = keys.reduce((acc, key) => { acc[key.startsWith('%appconfig') ? 0 : 1].push(key); return acc; }, [[], []]);
        keys = apiKeys;
        // Process appConfigKeys if present
        if (appConfigKeys.length > 0) {
            // Handle app config keys logic here
            this.processAppConfigKeys(appConfigKeys, obj);
        }
        if (configType === 'requestBody') {
            const allAppStoreData = this.getAppData(false);
            for (const key of keys) {
                // Handle OR conditions in keys
                if (key.includes('||')) {
                    const orKeys = key.split('||').map(k => k.trim());
                    const orKeyData = this.getMultipleApisDataByKeys(allAppStoreData, orKeys);
                    const latestKeyData = this.getLatestValue(orKeyData);
                    if (latestKeyData) {
                        // If we have a latest key data, use it
                        const value = this.handleKey(latestKeyData.key, apiStoreData, appStoreData);
                        if (value && Object.keys(value).length > 0) {
                            Object.assign(obj, value);
                        }
                        continue; // Skip to next key since we found a value    
                    }
                }
                else {
                    const value = this.handleKey(key, apiStoreData, appStoreData);
                    if (value && Object.keys(value).length > 0) {
                        Object.assign(obj, value);
                    }
                }
            }
        }
        else {
            for (const key of keys) {
                const value = this.handleKey(key, apiStoreData, appStoreData);
                if (value && Object.keys(value).length > 0) {
                    Object.assign(obj, value);
                }
            }
        }
        return this.flatAndNestUtil.createNestedObject(obj, type);
    }
    processAppConfigKeys(appConfigKeys, obj) {
        for (const key of appConfigKeys) {
            // Extract the parts: %appconfig##app_name:application_name
            const configPart = key.replace('%appconfig##', '');
            const [storageKey, targetProperty] = configPart.split(':');
            // Get value from localStorage
            const value = localStorage.getItem(storageKey);
            if (storageKey && targetProperty) {
                obj[targetProperty] = value ? value : '';
            }
            else if (storageKey) {
                // If only storageKey is present, use it as the key
                obj[storageKey] = value ? value : '';
            }
        }
    }
    handleKey(key, apiStoreData, appStoreData) {
        const split = key.split('##');
        const configKeys = key.includes('##') ? split[0] + '##' + split[1] : key;
        const isOptional = (split && split.length > 3 && split[3] === 'optional');
        let obj = {};
        if (configKeys.includes('((params))')) {
            let targetApiKey = '';
            let apiKey = '';
            if (configKeys.includes('||') && configKeys.split('||').length === 2) {
                targetApiKey = configKeys.split('||')[0];
                apiKey = configKeys.split('||')[1].substring(10);
            }
            else {
                targetApiKey = apiKey = configKeys.substring(10);
            }
            obj[targetApiKey] = this.sharedEventsService.params[apiKey];
        }
        else if (configKeys.includes('[*]')) {
            const regex = configKeys.split('[*]').join('\\[\\d+\\]');
            // check for data in appData Store
            for (const dataKey of Object.keys(appStoreData)) {
                const result = dataKey.match(new RegExp(regex));
                if (result) {
                    obj[this.getKey(result[0])] = this.returnParsedValues(split[2], appStoreData[result[0]], isOptional);
                }
            }
            // check for data in api data store
            for (const dataKey of Object.keys(apiStoreData[0])) {
                const result = dataKey.match(new RegExp(regex));
                if (result) {
                    // check if the configKeys that needs to be pushed already exits in the object
                    const apiKey = this.getKey(result[0]);
                    if (!Object.keys(obj).includes(apiKey)) {
                        obj[apiKey] = this.returnParsedValues(split[2], apiStoreData[0][result[0]], isOptional);
                    }
                }
            }
        }
        else if (configKeys.includes('{*}')) {
            const regex = configKeys.split('{*}').join('.+');
            // check for data in appData Store
            for (const dataKey of Object.keys(appStoreData)) {
                const result = dataKey.match(new RegExp(regex));
                if (result) {
                    obj[this.getKey(result[0])] = this.returnParsedValues(split[2], appStoreData[result[0]], isOptional);
                }
            }
            // check for data in api data store
            for (const dataKey of Object.keys(apiStoreData[0])) {
                const result = dataKey.match(new RegExp(regex));
                if (result) {
                    // check if the configKeys that needs to be pushed already exits in the object
                    const apiKey = this.getKey(result[0]);
                    if (!Object.keys(obj).includes(apiKey)) {
                        obj[apiKey] = this.returnParsedValues(split[2], apiStoreData[0][result[0]], isOptional);
                    }
                }
            }
        }
        else {
            const apiKey = this.getKey(configKeys);
            // check if configKeys exists in the app data store
            if (Object.keys(appStoreData).includes(configKeys)) {
                obj[apiKey] = this.returnParsedValues(split[2], appStoreData[configKeys], isOptional);
            }
            else if (Object.keys(apiStoreData[0]).includes(configKeys)) {
                // check if configKeys exists in api data store where keys are has mapped
                obj[apiKey] = this.returnParsedValues(split[2], apiStoreData[0][configKeys], isOptional);
            }
            else if (Object.keys(apiStoreData[1]).includes(apiKey)) {
                // check if configKeys exists in api data store where keys are not hash mapped
                obj[apiKey] = this.returnParsedValues(split[2], apiStoreData[1][apiKey], isOptional);
            }
            // for optional apikey
            if (obj[apiKey] === undefined) {
                delete obj[apiKey];
            }
        }
        return obj;
    }
    /**
     * function that takes in api response as an object of type External Response
     * and stores and returns the modified object that can then be sent to the
     * inner fields for consumption
     * @param res an object of type External Response
     */
    storeResponse(res) {
        try {
            const responseData = JSON.parse(JSON.stringify(res));
            const data = this.flatAndNestUtil.flattenJSON(responseData.response);
            const modifiedObject = {};
            modifiedObject.handler_name = responseData.handler;
            for (const key of Object.keys(data)) {
                const keyName = responseData.handler + '##' + key;
                let value = data[key];
                if (data[key] === null || data[key] === 'null') {
                    value = '';
                }
                else if (typeof (data[key]) === 'boolean') {
                    value = data[key] ? '1' : '0';
                }
                else if ((!Array.isArray(data[key]) || typeof (data[key]) !== 'object') && typeof (data[key]) !== 'string') {
                    value = String(data[key]);
                }
                modifiedObject[keyName] = value;
                // Uncomment if encoding decoding is required
                // modifiedObject[keyName] = typeof (value) === 'string' ? decodeURIComponent(value) : value;
            }
            this.joinResponse(modifiedObject);
            this.apiData.id = res.handler;
            this.apiData.apiUrl = res.handler;
            this.apiData.value = modifiedObject;
            let store = true;
            if (res.storageType && res.storageType !== 'persist') {
                store = false;
            }
            // if (store) {
            //     // if exists update else add api data
            //     const isPresent = this.apiDataService.getApiDataByHandler(res.handler);
            //     if (isPresent) {
            //         this.apiDataService.updateApiData(Object.assign({}, this.apiData));
            //     } else {
            //         this.apiDataService.addApiData(Object.assign({}, this.apiData));
            //     }
            // }
            if (store) {
                let urls = '';
                // if exists update else add api data
                const isPresent = this.apiDataService.getApiDataByHandler(res.handler);
                let isSessionStor = (!localStorage.getItem('CEE_STORE_LOCATION') || (localStorage.getItem('CEE_STORE_LOCATION') && localStorage.getItem('CEE_STORE_LOCATION').toLowerCase() != 'local_storage')) ? true : false;
                // var path = this.extractPathParamsFromCurrentUrl();
                // if (path[2] != urls) {
                if (isSessionStor) {
                    this.apiDataService.addApiData(Object.assign({}, this.apiData), isSessionStor);
                    // urls = path[2];
                }
                else {
                    if (isPresent) {
                        this.apiDataService.updateApiData(Object.assign({}, this.apiData));
                    }
                    else {
                        this.apiDataService.addApiData(Object.assign({}, this.apiData));
                    }
                }
            }
            const result = {
                response: modifiedObject,
                handler: responseData.handler,
                event_success: responseData.event_success
            };
            // result.response = modifiedObject;
            this.showOrHideLoader(responseData.handler, false);
            // check if res has status code
            let r = {};
            if (res.statusCode) {
                r.status = res.statusCode;
                r.body = data;
                // tslint:disable-next-line: no-unused-expression
                (res.logout !== undefined) && (r.logout = res.logout);
            }
            else {
                r = data;
            }
            return { formattedResponse: result, flattenResponse: r };
        }
        catch (error) {
            console.error(`Error Occurred. ${error}`);
        }
    }
    extractPathParamsFromCurrentUrl() {
        const path = window.location.pathname;
        const pathSegments = path.split('/').filter(Boolean);
        return pathSegments;
    }
    /**
     * function to join the response from the api data store
     * @param res the api response
     */
    joinResponse(res) {
        const apiConfig = JSON.parse(localStorage.getItem('API_CONFIG'));
        if (res && res.handler_name && apiConfig[res.handler_name] && apiConfig[res.handler_name].join) {
            for (const joinConfig of apiConfig[res.handler_name].join) {
                if (joinConfig.fromKey
                    && joinConfig.toKey
                    && joinConfig.fromKey.length === joinConfig.toKey.length
                    && joinConfig.fromKey.length === joinConfig.fromKey.filter((a) => {
                        return a.includes('[*]') && joinConfig.fromKey.length > 0 && this.commonUtil.getHandlerName(a) === this.commonUtil.getHandlerName(joinConfig.fromKey[0]);
                    }).length
                    && joinConfig.toKey.length === joinConfig.toKey.filter((a) => {
                        return a.includes('[*]') && this.commonUtil.getHandlerName(a) === res.handler_name;
                    }).length) {
                    const fData = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(joinConfig.fromKey[0]));
                    if (fData && fData.value) {
                        const fromData = this.flatAndNestUtil.createNestedObject(fData.value);
                        const fromDataKey = joinConfig.fromKey[0].split('[*]')[0];
                        const toData = this.flatAndNestUtil.createNestedObject(res);
                        const toDataKey = joinConfig.toKey[0].split('[*]')[0];
                        for (const [tIndex, tRow] of toData[toDataKey].entries()) {
                            let matchedFromRow;
                            for (const fRow of fromData[fromDataKey]) {
                                let matchedFlag = true;
                                for (let i = 0; i < joinConfig.toKey.length; i++) {
                                    const toKey = joinConfig.toKey[i].split('[*].')[1];
                                    const fromKey = joinConfig.fromKey[i].split('[*].')[1];
                                    if (tRow[toKey] !== fRow[fromKey]) {
                                        matchedFlag = false;
                                    }
                                }
                                if (matchedFlag) {
                                    matchedFromRow = JSON.parse(JSON.stringify(fRow));
                                }
                            }
                            for (const select of joinConfig.select) {
                                const toSelectKey = joinConfig.toKey[0].replace(joinConfig.toKey[0].split('[*].')[1], select).replace('*', tIndex);
                                res[toSelectKey] = matchedFromRow && Object.prototype.hasOwnProperty.call(matchedFromRow, select) ? matchedFromRow[select] : null;
                            }
                        }
                    }
                }
            }
        }
    }
    /**
     * function to filter Join Keys from the api data keys
     * @param JoinData the api data set
     * @param joinConfigKey the api key name of the join config
     */
    filterJoinKeys(JoinData, joinConfigKey) {
        const regex = joinConfigKey.replace('*', '\\d+')
            .replace(/\[/g, '\\[')
            .replace(/\]/g, '\\]');
        const dataJoinKey = Object.keys(JoinData).filter((key) => key.match(new RegExp(regex)))
            .reduce((cur, key) => { return Object.assign(cur, { [key]: JoinData[key] }); }, {});
        return dataJoinKey;
    }
    /**
     * function to fetch the response from the api data store
     * @param name the api key name of the field
     */
    fetchResponse(name) {
        const apiStoreData = this.getApiData();
        // check if the hashed key value store includes name
        if (Object.keys(apiStoreData[0]).includes(name)) {
            return apiStoreData[0][name];
        }
        else {
            // check if the name includes ## and
            // there is any data in the api data store that
            // matches with the handler name or the api key
            if (name.includes('##')) {
                const apiDataByApiKey = this.apiDataService.getApiDataByApiKey(name);
                return apiDataByApiKey ? apiDataByApiKey.value : undefined;
            }
            else {
                if (Object.keys(apiStoreData[1]).includes(name)) {
                    return apiStoreData[1][name];
                }
            }
        }
        return undefined;
    }
    /**
     * function that returns parsed values or undefined if value doesn't exist
     * @param type the type to which the value needs to be parsed
     * @param value the store value
     * @param isOptional indicates the result can be optional allowing to return undefined
     */
    returnParsedValues(type, value, isOptional = false) {
        switch (type) {
            case 'integer':
                return Number(value) || (isOptional ? undefined : 0);
            case 'number':
                const parsedValue = typeof value === 'string'
                    ? parseFloat(value.replace(/,/g, ''))
                    : parseFloat(value);
                return parsedValue || (isOptional ? undefined : 0);
            case 'boolean':
                value = (value && typeof value === 'string') ? value.toLowerCase() : '';
                return this.booleanValues[value] ?? (isOptional ? undefined : false); // ?? allows to preserve false as a valid value
            case 'optional':
                return value ? value : undefined;
            default:
                return value;
            // Uncomment when encoding code is required
            // if (!Array.isArray(value) && typeof (value) === 'string') {
            //     return encodeURIComponent(value);
            // } else {
            //     return value;
            // }
        }
    }
    /**
     * function to emit the if the loading is needed to not
     * @param handlerName event handler or external api or api_information
     * @param loading true or false
     */
    showOrHideLoader(handlerName, loading) {
        this.sharedEventsService.customSectionLoaderEmitter.emit({
            handlerName,
            loading
        });
    }
    /**
     * normal function to get the api value
     * @param name the parameter
     */
    getKey(name) {
        return this.commonUtil.getAPIKey(name);
    }
    /**
     * normal function to get the handler name
     * @param name the parameter
     */
    getHandler(name) {
        return this.commonUtil.getHandlerName(name);
    }
    // getter setters
    get config() {
        return this.apiConfig;
    }
    set config(value) {
        this.apiConfig = value;
    }
    static ɵfac = function ExternalRequestResponseUtil_Factory(t) { return new (t || ExternalRequestResponseUtil)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AppDataService), i0.ɵɵinject(i3.ApiDataService), i0.ɵɵinject(i4.SharedEventsServiceService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ExternalRequestResponseUtil, factory: ExternalRequestResponseUtil.ɵfac, providedIn: 'any' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ExternalRequestResponseUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'any',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.AppDataService }, { type: i3.ApiDataService }, { type: i4.SharedEventsServiceService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0ZXJuYWwtcmVxdWVzdC1yZXNwb25zZS51dGlsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3V0aWxzL2V4dGVybmFsLXJlcXVlc3QtcmVzcG9uc2UudXRpbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFXQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFFaEQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7Ozs7QUFJM0MsTUFBTSxDQUFDLE9BQU8sT0FBTywyQkFBMkI7SUFFakM7SUFDQTtJQUNBO0lBQ0E7SUFKWCxZQUNXLElBQWdCLEVBQ2hCLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLG1CQUErQztRQUgvQyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUV0RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsZUFBZSxDQUFhO0lBQzVCLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDZixVQUFVLENBQWE7SUFDdkIsa0JBQWtCLEdBQW9CO1FBQ2xDLE9BQU8sRUFBRSxFQUFFO1FBQ1gsT0FBTyxFQUFFLEVBQUU7UUFDWCxXQUFXLEVBQUUsRUFBRTtRQUNmLFNBQVMsRUFBRSxFQUFFO1FBQ2IsV0FBVyxFQUFFLEVBQUU7UUFDZixXQUFXLEVBQUUsRUFBRTtLQUNsQixD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Q0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUM7WUFDckQsV0FBVztZQUNYLE9BQU87U0FDVixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssTUFBTSxDQUFDLElBQUk7UUFDZixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFFRDs7O09BR0c7SUFDSyxVQUFVLENBQUMsSUFBSTtRQUNuQixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hELENBQUM7SUFFRCxpQkFBaUI7SUFFakIsSUFBSSxNQUFNO1FBQ04sT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFDRCxJQUFJLE1BQU0sQ0FBQyxLQUFLO1FBQ1osSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDM0IsQ0FBQztxRkE5MkNnQiwyQkFBMkI7Z0VBQTNCLDJCQUEyQixXQUEzQiwyQkFBMkIsbUJBRmhDLEtBQUs7O2lGQUVBLDJCQUEyQjtjQUgvQyxVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLEtBQUs7YUFDcEIiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpc3RhbmJ1bCBpZ25vcmUgZmlsZSAqL1xyXG4vKipcclxuICogVGhpcyBpcyBhIHV0aWwgZmlsZSB0aGF0IGNvbnRhaW5zIGZ1bmN0aW9uIHRoYXQgd2lsbCBiZSBjYWxsZWQgd2hlbiB0aGUgYXBpIHR5cGUgaXMgRVhURVJOQUwuXHJcbiAqIFRoaXMgZmlsZSByZWFkcyB0aGUgYXBpIGNvbmZpZyBqc29uIGdldHMgdGhlIGpzb24gZm9yIHRoZSBzcGVjaWZpYyBldmVudCBoYW5kbGVyIGFuZCBmb3JtcyB0aGVcclxuICogaGVhZGVyLCByZXF1ZXN0Qm9keSwgcXVlcnlQYXJhbWV0ZXJzLCB1cmxQYXJhbWV0ZXJzLlxyXG4gKiBOb3RlOi8vIFdoZW4gdGhlIHR5cGUgb2YgYXBpIGNvbmZpZyBpcyBzZXQgdG8gdGhlIEVYVEVSTkFMIGl0IHdpbGwgYXV0b21hdGljYWxseSB1c2UgdGhlIGhhc2hlZCBBUEkgS0VZIGNvbmNlcHQuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBGbGF0VW5mbGF0IH0gZnJvbSAnLi9mbGF0LXVuZmxhdC1qc29uJztcclxuaW1wb3J0IHsgQXBpRGF0YSB9IGZyb20gJy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuQEluamVjdGFibGUoe1xyXG4gICAgcHJvdmlkZWRJbjogJ2FueScsXHJcbn0pXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEV4dGVybmFsUmVxdWVzdFJlc3BvbnNlVXRpbCB7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmZsYXRBbmROZXN0VXRpbCA9IG5ldyBGbGF0VW5mbGF0KGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZsYXRBbmROZXN0VXRpbDogRmxhdFVuZmxhdDtcclxuICAgIGFwaUNvbmZpZyA9IHt9O1xyXG4gICAgY29tbW9uVXRpbDogQ29tbW9uVXRpbDtcclxuICAgIGV4dGVybmFsQXBpUmVxdWVzdDogRXh0ZXJuYWxSZXF1ZXN0ID0ge1xyXG4gICAgICAgIGhhbmRsZXI6ICcnLFxyXG4gICAgICAgIGhlYWRlcnM6IHt9LFxyXG4gICAgICAgIHF1ZXJ5UGFyYW1zOiB7fSxcclxuICAgICAgICB1cmxQYXJhbXM6IHt9LFxyXG4gICAgICAgIHJlcXVlc3RCb2R5OiB7fSxcclxuICAgICAgICBwcmltYXJ5RGF0YToge31cclxuICAgIH07XHJcblxyXG4gICAgaW50ZXJuYWxBcGlSZXF1ZXN0OiBJbnRlcm5hbFJlcXVlc3QgPSB7XHJcbiAgICAgICAgaGFuZGxlcjogJycsXHJcbiAgICAgICAgaGVhZGVyczoge30sXHJcbiAgICAgICAgcXVlcnlQYXJhbXM6IHt9LFxyXG4gICAgICAgIHVybFBhcmFtczoge30sXHJcbiAgICAgICAgcmVxdWVzdEJvZHk6IHt9LFxyXG4gICAgICAgIHVybDogJycsXHJcbiAgICAgICAgbWV0aG9kVHlwZTogJycsXHJcbiAgICAgICAgcmVxdWVzdFR5cGU6ICcnLFxyXG4gICAgICAgIGlzRVNCOiBmYWxzZSxcclxuICAgICAgICBoYXNBdXRob3Jpc2F0aW9uOiBmYWxzZSxcclxuICAgICAgICBzdG9yYWdlVHlwZTogJycsXHJcbiAgICAgICAgdXNlVUlEOiBmYWxzZSxcclxuICAgICAgICBpc0V2ZW50OiBmYWxzZSxcclxuICAgICAgICBkb3dubG9hZFR5cGU6ICcnLFxyXG4gICAgICAgIGVzYlJlcXVlc3RCb2R5OiBbXSxcclxuICAgICAgICBwcmltYXJ5RGF0YToge31cclxuICAgIH07XHJcblxyXG4gICAgYXBpRGF0YTogQXBpRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGJvb2xlYW5WYWx1ZXMgPSB7XHJcbiAgICAgICAgMTogdHJ1ZSxcclxuICAgICAgICAwOiBmYWxzZSxcclxuICAgICAgICBcInRydWVcIjogdHJ1ZSxcclxuICAgICAgICBcImZhbHNlXCI6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBmdW5jdGlvbiBwcmVwYXJlcyB0aGUgb2JqZWN0IHRoYXQgbmVlZHMgdG8gYmUgc2VudCB0byB0aGUgcHJvamVjdCBlbmRcclxuICAgICAqIHNvIHRoYXQgdGhleSBjYW4gY29uc3VtZSB0aGUgaGVhZGVycywgcXVlcnlQYXJhbXMsIHVybFBhcmFtcyBhbmQgUmVxdWVzdEJvZHlcclxuICAgICAqIEByZXF1aXJlZCBAcGFyYW0gaGFuZGxlciBXRkUgRXZlbnQgaGFuZGxlclxyXG4gICAgICogQHBhcmFtIHR5cGUgVGhlIEFQSSBjYWxsaW5nIHR5cGUgZW1wdHlcclxuICAgICAqIEBwYXJhbSBpc0V2ZW50IElmIHRoZSBmdW5jdGlvbiBpcyB0cmlnZ2VyZWQgZnJvbSBhbiBldmVudFxyXG4gICAgICogQHBhcmFtIGRvd25sb2FkVHlwZSBJZiB0aGUgZnVuY3Rpb24gaXMgdHJpZ2dlcmVkIGZyb20gYW4gZXZlbnQgYW5kIGlzIGNhbGxlZCBmcm9tIGFuIGRvd25sb2FkIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIHByZXBhcmVPYmplY3RUb0JlU2VudChoYW5kbGVyLCB0eXBlID0gJycsIGlzRXZlbnQgPSBmYWxzZSwgZG93bmxvYWRUeXBlID0gJycsIGVuY3JpcHRlZEZpbGVEYXRhID0gW10sIHByaW1hcnlEYXRhOiBhbnkgPSB7fSwgdGFibGVPcGVyYXRpb25zID0gJycsIHRhYmxlT3BlcmF0aW9uc0Jsb2NrID0gJycpIHtcclxuICAgICAgICBjb25zdCBoYW5kbGVyQXJyID0gaGFuZGxlci5zcGxpdCgnfHwnKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnaGFuZGxlckFycjogJywgaGFuZGxlckFycik7XHJcbiAgICAgICAgLy8gdHJ5IHtcclxuICAgICAgICBjb25zdCBhcGlDb25maWc6IGFueSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FQSV9DT05GSUcnKSk7XHJcbiAgICAgICAgY29uc3QgYXBpQ29uZmlnT2JqZWN0OiBhbnkgPSBhcGlDb25maWdbaGFuZGxlci5zcGxpdCgnfHwnKVswXV07XHJcbiAgICAgICAgLy8gKioqKioqKioqKioqIEZvciBQYXJhbGxlbCBBUEkgSW50ZWdyYXRpb24gKioqKioqKioqKioqKlxyXG4gICAgICAgIGNvbnN0IGFwaUNvbmZpZ09iamVjdEFycjogYW55ID0gW107XHJcbiAgICAgICAgaGFuZGxlckFyci5mb3JFYWNoKChoYW5kbGVySWQpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29uZmlnID0gYXBpQ29uZmlnW2hhbmRsZXJJZF07XHJcbiAgICAgICAgICAgIGlmIChjb25maWcpIHtcclxuICAgICAgICAgICAgICAgIGFwaUNvbmZpZ09iamVjdEFyci5wdXNoKGNvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnYXBpQ29uZmlnT2JqZWN0QXJyOiAnLCBhcGlDb25maWdPYmplY3RBcnIpO1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgY29uZmlnIG9mIGFwaUNvbmZpZykge1xyXG4gICAgICAgIC8vICAgICBpZiAoY29uZmlnLmlkID09PSBoYW5kbGVyKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBhcGlDb25maWdPYmplY3QgPSBjb25maWc7XHJcbiAgICAgICAgLy8gICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKCFhcGlDb25maWdPYmplY3QgfHwgIWFwaUNvbmZpZ09iamVjdEFyciB8fCBhcGlDb25maWdPYmplY3RBcnIubGVuZ3RoICE9PSBoYW5kbGVyQXJyLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3IgaW4gTWFwcGluZyAke2hhbmRsZXJ9YCk7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIHVzZSBVSURcclxuICAgICAgICAvLyBpZiBwcmVzZW50IGFkZCBpdCBpbiB0aGUgcmVxdWVzdCBCb2R5IGFycmF5XHJcbiAgICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDRUVfT0lEQycpID09PSAnMScgJiYgYXBpQ29uZmlnT2JqZWN0LnVzZVVJRCAmJiB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX1Rva2VuJykpIHtcclxuICAgICAgICAgICAgY29uc3Qgc3BsaXREYXRhID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9Ub2tlbicpLnNwbGl0KCcjIycpO1xyXG4gICAgICAgICAgICBsZXQgaWRlbnRpZmljYXRpb25UYWcgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX1NVQicpIHx8IHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDRUVfUFJOJykgfHwgJyc7XHJcbiAgICAgICAgICAgIGlkZW50aWZpY2F0aW9uVGFnID0gaWRlbnRpZmljYXRpb25UYWcuaW5jbHVkZXMoJyQkJykgPyBpZGVudGlmaWNhdGlvblRhZy5zcGxpdCgnJCQnKVsxXSA6IGlkZW50aWZpY2F0aW9uVGFnO1xyXG4gICAgICAgICAgICBhcGlDb25maWdPYmplY3QucmVxdWVzdEJvZHkucHVzaChpZGVudGlmaWNhdGlvblRhZyk7XHJcbiAgICAgICAgICAgIC8vICoqKioqKioqKioqKiBGb3IgUGFyYWxsZWwgQVBJIEludGVncmF0aW9uICoqKioqKioqKioqKipcclxuICAgICAgICAgICAgYXBpQ29uZmlnT2JqZWN0QXJyLmZvckVhY2goKGNvbmZpZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLnJlcXVlc3RCb2R5LnB1c2goaWRlbnRpZmljYXRpb25UYWcpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcGlDb25maWdPYmplY3RBcnIgaWRlbnRpZmljYXRpb25UYWc6IFwiLCBhcGlDb25maWdPYmplY3RBcnIpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RCb2R5LFxyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgdXJsUGFyYW1zLFxyXG4gICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgIG1ldGhvZFR5cGUsXHJcbiAgICAgICAgICAgIHJlcXVlc3RUeXBlLFxyXG4gICAgICAgICAgICBpc0VTQixcclxuICAgICAgICAgICAgaGFzQXV0aG9yaXNhdGlvbixcclxuICAgICAgICAgICAgc3RvcmFnZVR5cGUsXHJcbiAgICAgICAgICAgIHVzZVVJRCxcclxuICAgICAgICAgICAgZXNiUmVxdWVzdEJvZHkgfSA9IHRoaXMuZm9ybVRoZVJlcXVlc3RPYmooYXBpQ29uZmlnT2JqZWN0LCBlbmNyaXB0ZWRGaWxlRGF0YSwgcHJpbWFyeURhdGEudHlwZSk7XHJcbiAgICAgICAgLy8gY29uc3QgcmVxdWVzdEJvZHkgPSBhcGlDb25maWdPYmplY3QucmVxdWVzdEJvZHkubGVuZ3RoID4gMCA/IHRoaXMucmV0dXJuRm9ybWF0dGVkT2JqZWN0KGFwaUNvbmZpZ09iamVjdC5yZXF1ZXN0Qm9keSkgOiB7fTtcclxuICAgICAgICAvLyBjb25zdCBoZWFkZXJzID0gYXBpQ29uZmlnT2JqZWN0LmhlYWRlclBhcmFtcy5sZW5ndGggPiAwID9cclxuICAgICAgICAvLyAgICAgdGhpcy5yZXR1cm5Gb3JtYXR0ZWRPYmplY3QoYXBpQ29uZmlnT2JqZWN0LmhlYWRlclBhcmFtcykgOiB7fTtcclxuICAgICAgICAvLyBjb25zdCBxdWVyeVBhcmFtcyA9IGFwaUNvbmZpZ09iamVjdC5xdWVyeVBhcmFtcy5sZW5ndGggPiAwID9cclxuICAgICAgICAvLyAgICAgdGhpcy5yZXR1cm5Gb3JtYXR0ZWRPYmplY3QoYXBpQ29uZmlnT2JqZWN0LnF1ZXJ5UGFyYW1zKSA6IHt9O1xyXG4gICAgICAgIC8vIGNvbnN0IHVybFBhcmFtcyA9IGFwaUNvbmZpZ09iamVjdC51cmxQYXJhbXMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgLy8gICAgIHRoaXMucmV0dXJuRm9ybWF0dGVkT2JqZWN0KGFwaUNvbmZpZ09iamVjdC51cmxQYXJhbXMpIDoge307XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHR5cGUgfHwgd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9PSURDJykgPT09ICcxJykge1xyXG4gICAgICAgICAgICB0aGlzLmludGVybmFsQXBpUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICB1cmxQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZFR5cGUsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VHlwZSxcclxuICAgICAgICAgICAgICAgIGlzRVNCLFxyXG4gICAgICAgICAgICAgICAgaGFzQXV0aG9yaXNhdGlvbixcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgdXNlVUlELFxyXG4gICAgICAgICAgICAgICAgaXNFdmVudCxcclxuICAgICAgICAgICAgICAgIGRvd25sb2FkVHlwZSxcclxuICAgICAgICAgICAgICAgIGVzYlJlcXVlc3RCb2R5LFxyXG4gICAgICAgICAgICAgICAgcHJpbWFyeURhdGFcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gKioqKioqKioqKioqIEZvciBQYXJhbGxlbCBBUEkgSW50ZWdyYXRpb24gKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICB2YXIgcmVxdWVzdEFyciA9IFtdXHJcbiAgICAgICAgICAgIGFwaUNvbmZpZ09iamVjdEFyci5mb3JFYWNoKChlbGVtZW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgICAgIHVybFBhcmFtcyxcclxuICAgICAgICAgICAgICAgIHVybCxcclxuICAgICAgICAgICAgICAgIG1ldGhvZFR5cGUsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0VHlwZSxcclxuICAgICAgICAgICAgICAgIGlzRVNCLFxyXG4gICAgICAgICAgICAgICAgaGFzQXV0aG9yaXNhdGlvbixcclxuICAgICAgICAgICAgICAgIHN0b3JhZ2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgdXNlVUlELFxyXG4gICAgICAgICAgICAgICAgZXNiUmVxdWVzdEJvZHkgfSA9IHRoaXMuZm9ybVRoZVJlcXVlc3RPYmooZWxlbWVudCwgZW5jcmlwdGVkRmlsZURhdGEsIHByaW1hcnlEYXRhLnR5cGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcixcclxuICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgICAgICAgICB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0VHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBpc0VTQixcclxuICAgICAgICAgICAgICAgICAgICBoYXNBdXRob3Jpc2F0aW9uLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JhZ2VUeXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIHVzZVVJRCxcclxuICAgICAgICAgICAgICAgICAgICBpc0V2ZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGRvd25sb2FkVHlwZSxcclxuICAgICAgICAgICAgICAgICAgICBlc2JSZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5RGF0YVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBcnIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1zOiBlbGVtZW50LnVybFBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkZXJQYXJhbXM6IGVsZW1lbnQuaGVhZGVyUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBlbGVtZW50LnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5OiBlbGVtZW50LnJlcXVlc3RCb2R5LFxyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlEYXRhOiBwcmltYXJ5RGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB1cmw6IGVsZW1lbnQudXJsLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGVsZW1lbnQuaWRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gY2hlY2sgaWYgaGFzIENFRV9PSURDIGlzIDFcclxuICAgICAgICAgICAgaWYgKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDRUVfT0lEQycpID09PSAnMScpIHtcclxuICAgICAgICAgICAgICAgIGlmKGFwaUNvbmZpZ09iamVjdEFyci5sZW5ndGggPiAxKSB7IC8vIEZvciBQYXJhbGxlbCBBUEkgSW50ZWdyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuYXBpSW50ZWdyYXRpb25QYXJhbGxlbEV2ZW50SGFuZGxlckVtaXR0ZXIuZW1pdChyZXF1ZXN0QXJyKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYXBpQ29uZmlnT2JqZWN0LmlzRXh0ZXJuYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGVybmFsQXBpUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsUGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByaW1hcnlEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZXZlbnRIYW5kbGVyRW1pdHRlci5lbWl0KHRoaXMuZXh0ZXJuYWxBcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJzYXZlXCIgfHwgdGFibGVPcGVyYXRpb25zID09PSBcInVwZGF0ZVwiKSAmJiB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcImVtcGxveW1lbnRcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5ID0gdGhpcy5leHBsb3llZVNhdmVCb2R5KHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LCBwcmltYXJ5RGF0YS52YWx1ZS5wb3NpdGlvbiwgcHJpbWFyeURhdGEudmFsdWUucGFyZW50UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZigodGFibGVPcGVyYXRpb25zID09PSBcInNhdmVcIiB8fCB0YWJsZU9wZXJhdGlvbnMgPT09IFwidXBkYXRlXCIpICYmIHRhYmxlT3BlcmF0aW9uc0Jsb2NrID09IFwibGl2aW5nX2FkZHJlc3NcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5ID0gdGhpcy5nZW5lcmF0ZUxpdmluZ0FkZHJlc3NCb2R5KHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LCBwcmltYXJ5RGF0YS52YWx1ZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh0YWJsZU9wZXJhdGlvbnMgPT09IFwic2F2ZVwiIHx8IHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJ1cGRhdGVcIikgJiYgdGFibGVPcGVyYXRpb25zQmxvY2sgPT0gXCJpbmNvbWVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5ID0gdGhpcy5nZW5lcmF0ZUFkZGl0aW9uYWxJbmNvbWVCb2R5KHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LCBwcmltYXJ5RGF0YS52YWx1ZS5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh0YWJsZU9wZXJhdGlvbnMgPT09IFwic2F2ZVwiIHx8IHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJ1cGRhdGVcIikgJiYgdGFibGVPcGVyYXRpb25zQmxvY2sgPT0gXCJhc3NldFwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHkgPSB0aGlzLmFzc2V0Qm9keSh0aGlzLmludGVybmFsQXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh0YWJsZU9wZXJhdGlvbnMgPT09IFwic2F2ZVwiIHx8IHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJ1cGRhdGVcIikgJiYgdGFibGVPcGVyYXRpb25zQmxvY2sgPT0gXCJsaWFiaWxpdGllc1wiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHkgPSB0aGlzLmxpYWJpbGl0eUJvZHkodGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZigodGFibGVPcGVyYXRpb25zID09PSBcInNhdmVcIiB8fCB0YWJsZU9wZXJhdGlvbnMgPT09IFwidXBkYXRlXCIpICYmICh0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcInByb3BlcnRpZXNcIiB8fCB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcInByb3BlcnRpZXNfbW9ydGdhZ2VcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keSA9IHRoaXMuc2F2ZURlYWxQcm9wZXJ0aWVzQm9keSh0aGlzLmludGVybmFsQXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJzYXZlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wiZGF0YVwiXVtcIm1vcnRnYWdlRGF0YVwiXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJ1cGRhdGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcGFyZW50UG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eUFyciA9IHRoaXMuZ2V0QWtpdGFEYXRhRnJvbUhhbmRsZXIoXCJnZXRGdWxsRGVhbERldGFpbHNcIilbJ2dldEZ1bGxEZWFsRGV0YWlscyMjZGF0YSddWydwcm9wZXJ0aWVzJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlQb3NpdGlvbiA9IHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnByaW1hcnlEYXRhLnZhbHVlPy5wb3NpdGlvbiA/IHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnByaW1hcnlEYXRhLnZhbHVlPy5wb3NpdGlvbiA6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcInByb3BlcnRpZXNfbW9ydGdhZ2VcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BlcnR5UG9zaXRpb24gPSB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5wcmltYXJ5RGF0YS52YWx1ZT8ucGFyZW50UG9zaXRpb24gPyB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5wcmltYXJ5RGF0YS52YWx1ZT8ucGFyZW50UG9zaXRpb24gOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IG1vcnRnYWdlUG9zaXRpb24gPSB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5wcmltYXJ5RGF0YS52YWx1ZT8ucG9zaXRpb24gPyB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5wcmltYXJ5RGF0YS52YWx1ZT8ucG9zaXRpb24gOiAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcm9wZXJ0eUFycjogXCIscHJvcGVydHlBcnIpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcHJvcGVydHlJRCA9IHByb3BlcnR5QXJyW3Byb3BlcnR5UG9zaXRpb25dLmFwcGxpY2F0aW9uX2lkID8gcHJvcGVydHlBcnJbcHJvcGVydHlQb3NpdGlvbl0uYXBwbGljYXRpb25faWQgOiB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keVtcInByb3BlcnRpZXNfYXBwbGljYXRpb25faWRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keVtcInByb3BlcnRpZXNfYXBwbGljYXRpb25faWRcIl0gIT09IHByb3BlcnR5SUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2xkUHJvcGVydHlEYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXModGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHlbXCJkYXRhXCJdW1wicHJvcGVydHlEYXRhXCJdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5VmFsPSB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcInByb3BlcnRpZXNcIiA/IHZhbHVlIDogcHJvcGVydHlBcnJbcHJvcGVydHlQb3NpdGlvbl1ba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoKHR5cGVvZih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFByb3BlcnR5RGF0YVtrZXldID0gTnVtYmVyKGtleVZhbCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3N0cmluZyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkUHJvcGVydHlEYXRhW2tleV0gPSBrZXlWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkUHJvcGVydHlEYXRhW2tleV0gPSBOdW1iZXIoa2V5VmFsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9sZFByb3BlcnR5RGF0YVtrZXldID0ga2V5VmFsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keVtcImRhdGFcIl1bXCJwcm9wZXJ0eURhdGFcIl0gPSBvbGRQcm9wZXJ0eURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHlbXCJwcm9wZXJ0aWVzX2FwcGxpY2F0aW9uX2lkXCJdID0gcHJvcGVydHlJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHJvcGVydHlJRDogXCIscHJvcGVydHlJRClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwcm9wZXJ0eURhdGEgPSBwcm9wZXJ0eUFycj8uZmlsdGVyKChpdGVtKSA9PiBpdGVtLmFwcGxpY2F0aW9uX2lkID09PSBwcm9wZXJ0eUlEKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHZhciBuZXdNb3J0Z2FnZURhdGEgPSBwcm9wZXJ0eURhdGE/Lm1vcnRnYWdlID8gcHJvcGVydHlEYXRhLm1vcnRnYWdlIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBpZih0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keVtcImRhdGFcIl1bXCJtb3J0Z2FnZURhdGFcIl1bbW9ydGdhZ2VQb3NpdGlvbl0gJiYgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHlbXCJkYXRhXCJdW1wibW9ydGdhZ2VEYXRhXCJdW21vcnRnYWdlUG9zaXRpb25dPy5yZWNvcmRfaWQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgaXNNb3J0Z2FnZUZvdW5kID0gcHJvcGVydHlEYXRhLm1vcnRnYWdlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uYXBwbGljYXRpb25faWQgPT09IHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wiZGF0YVwiXVtcIm1vcnRnYWdlRGF0YVwiXVttb3J0Z2FnZVBvc2l0aW9uXT8ucmVjb3JkX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZighaXNNb3J0Z2FnZUZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld01vcnRnYWdlRGF0YS5wdXNoKHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wiZGF0YVwiXVtcIm1vcnRnYWdlRGF0YVwiXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgbmV3TW9ydGdhZ2VEYXRhLmZvckVhY2goKGVsZW1lbnQsaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIGlmKGVsZW1lbnQuYXBwbGljYXRpb25faWQgPT09IHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wiZGF0YVwiXVtcIm1vcnRnYWdlRGF0YVwiXVttb3J0Z2FnZVBvc2l0aW9uXVtcInJlY29yZF9pZFwiXSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbmV3TW9ydGdhZ2VEYXRhW2luZGV4XSA9IHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wiZGF0YVwiXVtcIm1vcnRnYWdlRGF0YVwiXVttb3J0Z2FnZVBvc2l0aW9uXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBpZihuZXdNb3J0Z2FnZURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBuZXdNb3J0Z2FnZURhdGEucHVzaCh0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keVtcImRhdGFcIl1bXCJtb3J0Z2FnZURhdGFcIl1bbW9ydGdhZ2VQb3NpdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld01vcnRnYWdlRGF0YSA9IFtPYmplY3QuYXNzaWduKHt9LCB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keVtcImRhdGFcIl1bXCJtb3J0Z2FnZURhdGFcIl1bbW9ydGdhZ2VQb3NpdGlvbl0pXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wiZGF0YVwiXVtcIm1vcnRnYWdlRGF0YVwiXSA9IG5ld01vcnRnYWdlRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wiZGF0YVwiXVtcIm1vcnRnYWdlRGF0YVwiXSA9IFtuZXdNb3J0Z2FnZURhdGFbbW9ydGdhZ2VQb3NpdGlvbl1dXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUbyByZXRyaWN0IHRoZSBtb3J0Z2FnZSBmcm9tIG90aGVyIHByb3BlcnR5IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHlbXCJkYXRhXCJdW1wibW9ydGdhZ2VEYXRhXCJdPy5mb3JFYWNoKChlbGVtZW50LGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1vcnRnYWdlSUQgPSBlbGVtZW50LnJlY29yZF9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaXNNb3J0Z2FnZUZvdW5kID0gcHJvcGVydHlEYXRhLm1vcnRnYWdlID8gcHJvcGVydHlEYXRhLm1vcnRnYWdlLmZpbmQoKGl0ZW0pID0+IGl0ZW0uYXBwbGljYXRpb25faWQgPT09IG1vcnRnYWdlSUQpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZighaXNNb3J0Z2FnZUZvdW5kICYmIG1vcnRnYWdlSUQgIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHlbXCJkYXRhXCJdW1wibW9ydGdhZ2VEYXRhXCJdLnNwbGljZShpbmRleCwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2F2ZURlYWxQcm9wZXJ0aWVzQm9keTogXCIsdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJkZWxldGVcIiAmJiB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcInByb3BlcnRpZXNcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5ID0gdGhpcy5kZWxldGVDdXJyZW50cHJvcGVydHkodGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZigodGFibGVPcGVyYXRpb25zID09PSBcInVwZGF0ZVwiKSAmJiB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcInBlcnNvbmFsX2luZm9cIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5ID0gdGhpcy5hcHBsaWNhbnRJbmZvQm9keSh0aGlzLmludGVybmFsQXBpUmVxdWVzdCwgcHJpbWFyeURhdGEudmFsdWUucG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZigodGFibGVPcGVyYXRpb25zID09PSBcInVwZGF0ZVwiKSAmJiB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcImRlYWxfaW5mb1wiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHkgPSB0aGlzLmRlYWxpbmZvQm9keSh0aGlzLmludGVybmFsQXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh0YWJsZU9wZXJhdGlvbnMgPT09IFwic2F2ZVwiIHx8IHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJ1cGRhdGVcIikgJiYgdGFibGVPcGVyYXRpb25zQmxvY2sgPT0gXCJzdWJqZWN0X3Byb3BlcnR5XCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keSA9IHRoaXMuc2F2ZVN1YmplY3RQcm9wZXJ0eUJvZHkodGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZigodGFibGVPcGVyYXRpb25zID09PSBcInNhdmVcIikgJiYgdGFibGVPcGVyYXRpb25zQmxvY2sgPT0gXCJzdWJqZWN0X3Byb3BlcnR5X21vcnRnYWdlXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keSA9IHRoaXMubmV3TW9ydGdhZ2UodGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZigodGFibGVPcGVyYXRpb25zID09PSBcInVwZGF0ZVwiKSAmJiB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcInN1YmplY3RfcHJvcGVydHlfbW9ydGdhZ2VcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5ID0gdGhpcy51cGRhdGVOZXdNb3J0Z2FnZSh0aGlzLmludGVybmFsQXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh0YWJsZU9wZXJhdGlvbnMgPT09IFwic2F2ZVwiKSAmJiB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcIm1vcnRnYWdlXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keSA9IHRoaXMubmV3RGVhbE1vcnRnYWdlKHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoKHRhYmxlT3BlcmF0aW9ucyA9PT0gXCJ1cGRhdGVcIikgJiYgdGFibGVPcGVyYXRpb25zQmxvY2sgPT0gXCJtb3J0Z2FnZVwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHkgPSB0aGlzLm5ld0RlYWxNb3J0Z2FnZSh0aGlzLmludGVybmFsQXBpUmVxdWVzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCh0YWJsZU9wZXJhdGlvbnMgPT09IFwidXBkYXRlXCIpICYmIHRhYmxlT3BlcmF0aW9uc0Jsb2NrID09IFwidXBkYXRlX3N1YmplY3RfcHJvcGVydHlcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5ID0gdGhpcy5uZXdTdWJqZWN0UHJvcGVydHkodGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZigodGFibGVPcGVyYXRpb25zID09PSBcImRlbGV0ZVwiKSAmJiB0YWJsZU9wZXJhdGlvbnNCbG9jayA9PSBcIm1vcnRnYWdlZGVsZXRlXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmludGVybmFsQXBpUmVxdWVzdC5yZXF1ZXN0Qm9keSA9IHRoaXMuZGVsZXRlQ3VycmVudFByb3BlcnR5TW9ydEdhZ2UodGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucmVxdWVzdEJvZHlbXCJtZXRob2RcIl0gfHwgKHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wibWV0aG9kXCJdICYmIHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0LnJlcXVlc3RCb2R5W1wibWV0aG9kXCJdICE9IFwic29mdF9kZWxldGVcIikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uub2lkY0RhdGFFbWl0dGVyLmVtaXQodGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChhcGlDb25maWdPYmplY3QuaXNFeHRlcm5hbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZXJuYWxBcGlSZXF1ZXN0ID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmxQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJpbWFyeURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5ldmVudEhhbmRsZXJFbWl0dGVyLmVtaXQodGhpcy5leHRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihhcGlDb25maWdPYmplY3RBcnIubGVuZ3RoID4gMSkgey8vIEZvciBQYXJhbGxlbCBBUEkgSW50ZWdyYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmFwaUludGVncmF0aW9uUGFyYWxsZWxFdmVudEhhbmRsZXJFbWl0dGVyLmVtaXQocmVxdWVzdEFycik7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmFwaUludGVncmF0aW9uRXZlbnRIYW5kbGVyRW1pdHRlci5lbWl0KHRoaXMuaW50ZXJuYWxBcGlSZXF1ZXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmV4dGVybmFsQXBpUmVxdWVzdCA9IHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICB1cmxQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgICAgIHByaW1hcnlEYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5ldmVudEhhbmRsZXJFbWl0dGVyLmVtaXQodGhpcy5leHRlcm5hbEFwaVJlcXVlc3QpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dPckhpZGVMb2FkZXIoaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICAgICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAvLyAgICAgdGhyb3cgbmV3IEVycm9yKGBFcnJvciBPY2N1cnJlZCB3aGlsZSBmZXRjaGluZyBkYXRhIGZyb20gYXBpX2NvbmZpZyBmb3IgaGFuZGxlcjogJHtoYW5kbGVyfWApO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRBa2l0YURhdGFGcm9tSGFuZGxlcihoYW5kbGVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcihoYW5kbGVyKSkge1xyXG4gICAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuTmVzdGVkRGF0YSh0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIoaGFuZGxlcikudmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm5OZXN0ZWREYXRhKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKE9iamVjdChkYXRhKSAhPT0gZGF0YSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgcmVnZXggPSAvXFwuPyhbXi5cXFtcXF1dKyl8XFxbKFxcZCspXFxdL2c7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdGhvbGRlciA9IHt9O1xyXG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgbGV0IGN1ciA9IHJlc3VsdGhvbGRlcjtcclxuICAgICAgICAgICAgICBsZXQgcHJvcCA9ICcnO1xyXG4gICAgICAgICAgICAgIGxldCBtO1xyXG4gICAgICAgICAgICAgIHdoaWxlICgobSA9IHJlZ2V4LmV4ZWMocCkpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXIgPSBjdXJbcHJvcF0gfHwgKGN1cltwcm9wXSA9IG1bMl0gPyBbXSA6IHt9KTtcclxuICAgICAgICAgICAgICAgIHByb3AgPSBtWzJdIHx8IG1bMV07XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGN1cltwcm9wXSA9IGRhdGFbcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGhvbGRlclsnJ10gfHwgcmVzdWx0aG9sZGVyO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUN1cnJlbnRQcm9wZXJ0eU1vcnRHYWdlID0gKHJlcykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhcmVudEluZGV4ID0gcmVzLnByaW1hcnlEYXRhPy52YWx1ZT8ucGFyZW50UG9zaXRpb24gPz8gMDtcclxuICAgICAgICBjb25zdCB1cmxQcm9wZXJ0aWVzID0gcmVzLnVybFBhcmFtcz8ucHJvcGVydGllcztcclxuICAgICAgICBjb25zdCB1cmxQcm9wZXJ0eSA9IHVybFByb3BlcnRpZXNbcGFyZW50SW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGNoaWxkSW5kZXggPSByZXMucHJpbWFyeURhdGEudmFsdWUucG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgY3VycmVudE1vcnRnYWdlID0gdXJsUHJvcGVydGllcz8ubW9ydGdhZ2VbY2hpbGRJbmRleF07XHJcbiAgICAgICAgaWYoIWN1cnJlbnRNb3J0Z2FnZS5yZWNvcmRfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmV2ZW50RGVsZXRlUmVwZWF0ZWRCbG9ja1N1YnNjcmliZXIuZW1pdChyZXMpO1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZXZlbnRSZXNwb25zZVN1YnNjcmliZXIuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiByZXMuaGFuZGxlcixcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiB7IHN0YXR1czogdHJ1ZSB9LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRfc3VjY2VzczogdHJ1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG1ldGhvZDogXCJzb2Z0X2RlbGV0ZVwiIH07XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICByZXR1cm4geyAuLi5yZXMucmVxdWVzdEJvZHksIG1vcnRnYWdlX2FwcGxpY2F0aW9uX2lkOiBjdXJyZW50TW9ydGdhZ2U/LnJlY29yZF9pZCB9O1xyXG4gICAgfTtcclxuIFxyXG4gICAgbmV3TW9ydGdhZ2UocmVzKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViUHJvcEJvZHkgPSB0aGlzLm5ld0RlYWxTdWJqZWN0UHJvcGVydHkocmVzKTtcclxuICAgICAgICBjb25zdCBzdWJEYXRhID0gc3ViUHJvcEJvZHlbJ2RhdGEnXTtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHN1YlByb3BCb2R5WydzdWJqZWN0X3Byb3BlcnR5X2lkJ107XHJcbiAgICAgICAgdmFyIGJvZHkgPSB7XHJcbiAgICAgICAgICAuLi5yZXMucXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICBkYXRhOiB7IHByb3BlcnR5X2lkOiBwcm9wZXJ0eSwgaW5jbHVkZV9pbl9tb3J0Z2FnZTogdHJ1ZSB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlcz8udXJsUGFyYW1zPy5kYXRhPy50cmFuc2FjdGlvbl90eXBlID09IFwiUHVyY2hhc2VcIikge1xyXG4gICAgICAgICAgICBib2R5LmRhdGEgPSB7IC4uLmJvZHkuZGF0YSwgcHJvcGVydHlfdmFsdWU6IHN1YkRhdGEucHVyY2hhc2VfcHJpY2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlTmV3TW9ydGdhZ2UocmVzKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViUHJvcEJvZHkgPSB0aGlzLm5ld0RlYWxTdWJqZWN0UHJvcGVydHkocmVzKTtcclxuICAgICAgICBjb25zdCBzdWJEYXRhID0gc3ViUHJvcEJvZHlbJ2RhdGEnXTtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eSA9IHN1YlByb3BCb2R5WydzdWJqZWN0X3Byb3BlcnR5X2lkJ107XHJcbiAgICAgICAgdmFyIGJvZHkgPSB7XHJcbiAgICAgICAgICAuLi5yZXMucXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICBkYXRhOiB7IHByb3BlcnR5X2lkOiBwcm9wZXJ0eSwgaW5jbHVkZV9pbl9tb3J0Z2FnZTogdHJ1ZSB9LFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHJlcz8udXJsUGFyYW1zPy5kYXRhPy50cmFuc2FjdGlvbl90eXBlID09IFwiUHVyY2hhc2VcIikge1xyXG4gICAgICAgICAgICBib2R5LmRhdGEgPSB7IC4uLmJvZHkuZGF0YSwgcHJvcGVydHlfdmFsdWU6IHN1YkRhdGEucHVyY2hhc2VfcHJpY2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcz8udXJsUGFyYW1zPy5kYXRhPy5yZWNvcmRfaWQgIT0gJycpIHtcclxuICAgICAgICAgIGJvZHkuZGF0YSA9IHsgLi4uYm9keS5kYXRhLCByZWNvcmRfaWQ6IHJlcy51cmxQYXJhbXM/LmRhdGE/LnJlY29yZF9pZCB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYm9keTtcclxuICAgIH1cclxuXHJcbiAgICBuZXdEZWFsTW9ydGdhZ2UocmVzKSB7XHJcbiAgICAgICAgdmFyIHBhdGggPSB0aGlzLmV4dHJhY3RQYXRoUGFyYW1zRnJvbUN1cnJlbnRVcmwoKTtcclxuICAgICAgICBpZiAocGF0aFsyXSkge1xyXG4gICAgICAgICAgcmVzLnJlcXVlc3RCb2R5LmxvYW5fYXBwbGljYXRpb25faWQgPSBwYXRoWzJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCBtb3J0Z2FnZVByb3AgPSByZXMucmVxdWVzdEJvZHkuZGF0YTtcclxuICAgICAgICB2YXIgbG9hbl90ZXJtID0gTnVtYmVyKHJlcy5yZXF1ZXN0Qm9keS5kYXRhLmxvYW5fdGVybV95ZWFyPz8wKSAqIDEyICsgTnVtYmVyKHJlcy5yZXF1ZXN0Qm9keS5kYXRhLmxvYW5fdGVybV9tb250aCA/PyAwKTtcclxuICAgICAgICB2YXIgYW1vcnRpemF0aW9uX3BlcmlvZCA9IE51bWJlcihyZXMucmVxdWVzdEJvZHkuZGF0YS5hbW9ydGl6YXRpb25fcGVyaW9kX3llYXI/PzApICogMTIgKyBOdW1iZXIocmVzLnJlcXVlc3RCb2R5LmRhdGEuYW1vcnRpemF0aW9uX3BlcmlvZF9tb250aCA/PyAwKTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKHJlcy5yZXF1ZXN0Qm9keS5kYXRhLnJlY29yZF9pZCAhPT0gJycpIHtcclxuICAgICAgICAgIHZhciBtb3J0Z2FnZUJvZHkgPSB7XHJcbiAgICAgICAgICAgIC4uLnJlcy5xdWVyeVBhcmFtcyxcclxuICAgICAgICAgICAgZGF0YTogeyAuLi5tb3J0Z2FnZVByb3AsIHJlY29yZF9pZDogcmVzLnJlcXVlc3RCb2R5LmRhdGEucmVjb3JkX2lkLCBsb2FuX3Rlcm0sIGFtb3J0aXphdGlvbl9wZXJpb2QgfSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGRlbGV0ZSBtb3J0Z2FnZVByb3AucmVjb3JkX2lkO1xyXG4gICAgICAgICAgdmFyIG1vcnRnYWdlQm9keSA9IHtcclxuICAgICAgICAgICAgLi4ucmVzLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICBkYXRhOiB7IC4uLm1vcnRnYWdlUHJvcCwgbG9hbl90ZXJtLCBhbW9ydGl6YXRpb25fcGVyaW9kIH0sXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgbW9ydGdhZ2VCb2R5LmRhdGEubG9hbl90ZXJtX3llYXI7XHJcbiAgICAgICAgZGVsZXRlIG1vcnRnYWdlQm9keS5kYXRhLmxvYW5fdGVybV9tb250aDtcclxuICAgICAgICBkZWxldGUgbW9ydGdhZ2VCb2R5LmRhdGEuYW1vcnRpemF0aW9uX3BlcmlvZF95ZWFyO1xyXG4gICAgICAgIGRlbGV0ZSBtb3J0Z2FnZUJvZHkuZGF0YS5hbW9ydGl6YXRpb25fcGVyaW9kX21vbnRoO1xyXG4gICAgICAgIG1vcnRnYWdlQm9keSA9IHRoaXMuc2V0RW1wdHlLZXlzVG9OdWxsKG1vcnRnYWdlQm9keSk7XHJcbiAgICAgICAgcmV0dXJuIG1vcnRnYWdlQm9keTtcclxuICAgICAgXHJcbn1cclxuXHJcbnNldEVtcHR5S2V5c1RvTnVsbChvYmopIHtcclxuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcclxuICAgICAgcmV0dXJuIG9iai5tYXAoKGl0ZW0pID0+IHRoaXMuc2V0RW1wdHlLZXlzVG9OdWxsKGl0ZW0pKS5maWx0ZXIoKGl0ZW0pID0+IGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBpdGVtICE9PSAnSW52YWxpZCBkYXRlJyk7XHJcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4gT2JqZWN0LmZyb21FbnRyaWVzKFxyXG4gICAgICAgIE9iamVjdC5lbnRyaWVzKG9iaikubWFwKChba2V5LCB2YWx1ZV0pID0+IFtcclxuICAgICAgICAgIGtleSxcclxuICAgICAgICAgIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGxcclxuICAgICAgICAgICAgPyB0aGlzLnNldEVtcHR5S2V5c1RvTnVsbCh2YWx1ZSkgLy8gUmVjdXJzaXZlbHkgcHJvY2VzcyBuZXN0ZWQgb2JqZWN0cy9hcnJheXNcclxuICAgICAgICAgICAgOiB2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSAnJyB8fCB2YWx1ZSA9PT0gJ0ludmFsaWQgZGF0ZSdcclxuICAgICAgICAgICAgPyBudWxsXHJcbiAgICAgICAgICAgIDogdmFsdWUsIC8vIFNldCB0byBudWxsIGlmIGVtcHR5XHJcbiAgICAgICAgXSlcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIHJldHVybiBvYmo7XHJcbn1cclxuXHJcbiAgICBuZXdTdWJqZWN0UHJvcGVydHkgPSAocmVzKSA9PiB7XHJcbiAgICB2YXIgYm9keSA9IHtcclxuICAgICAgLi4ucmVzLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICBzdWJqZWN0X3Byb3BlcnR5X2lkOiByZXMudXJsUGFyYW1zLmRhdGE/LnByb3BlcnR5X2lkLFxyXG4gICAgICBkYXRhOiB7IHB1cmNoYXNlX3ByaWNlOiAocmVzLnJlcXVlc3RCb2R5LmRhdGEucHJvcGVydHlfdmFsdWUgPyArcmVzLnJlcXVlc3RCb2R5LmRhdGEucHJvcGVydHlfdmFsdWUgOiAwKSwgaXNfc3ViamVjdF9wcm9wZXJ0eTogdHJ1ZSB9LFxyXG4gICAgfTtcclxuICBcclxuICAgIHJldHVybiBib2R5O1xyXG4gICAgfTtcclxuXHJcbiAgICBzYXZlU3ViamVjdFByb3BlcnR5Qm9keShyZXMpIHtcclxuICAgICAgICB2YXIgcGF0aCA9IHRoaXMuZXh0cmFjdFBhdGhQYXJhbXNGcm9tQ3VycmVudFVybCgpO1xyXG4gICAgICAgIGlmIChwYXRoWzJdKSB7XHJcbiAgICAgICAgcmVzLnJlcXVlc3RCb2R5LmRhdGEubG9hbl9hcHBsaWNhdGlvbl9pZCA9IHBhdGhbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHN1YlByb3BCb2R5ID0gdGhpcy5uZXdEZWFsU3ViamVjdFByb3BlcnR5KHJlcyk7XHJcbiAgICAgICAgcmV0dXJuIHN1YlByb3BCb2R5O1xyXG4gICAgfVxyXG5cclxuICAgIG5ld0RlYWxTdWJqZWN0UHJvcGVydHkocmVzKSB7XHJcbiAgICAgICAgY29uc3Qgc3ViUHJvcCA9IHJlcy5yZXF1ZXN0Qm9keS5kYXRhO1xyXG4gICAgICAgIHJlcy5yZXF1ZXN0Qm9keS5kYXRhLnRvdGFsX2V4cGVuc2VzID0gTnVtYmVyKHJlcy5yZXF1ZXN0Qm9keS5kYXRhPy5tb250aGx5X2hlYXRpbmdfZmVlcyArIHJlcy5yZXF1ZXN0Qm9keS5kYXRhPy5tb250aGx5X2h5ZHJvX2Nvc3RzICsgcmVzLnJlcXVlc3RCb2R5LmRhdGE/Lm1vbnRobHlfaW5zdXJhbmNlX2Nvc3RzICsgcmVzLnJlcXVlc3RCb2R5LmRhdGE/Lm1vbnRobHlfbWFuYWdlbWVudF9jb3N0cyArIHJlcy5yZXF1ZXN0Qm9keS5kYXRhPy5tb250aGx5X3JlcGFpcnNfY29zdHMgKyByZXMucmVxdWVzdEJvZHkuZGF0YT8ubW9udGhseV9pbnRlcmVzdF9jb3N0cyArIHJlcy5yZXF1ZXN0Qm9keS5kYXRhPy5tb250aGx5X290aGVyX2Nvc3RzICsgcmVzLnJlcXVlc3RCb2R5LmRhdGE/Lm1vbnRobHlfcmVudGFsX2luY29tZSArIHJlcy5yZXF1ZXN0Qm9keS5kYXRhPy5tb250aGx5X2NvbmRvX2ZlZXMpO1xyXG4gICAgICBcclxuICAgICAgICBpZiAocmVzLnF1ZXJ5UGFyYW1zLmRhdGE/LnN1YmplY3RfcHJvcGVydHlfaWQgIT09ICcnKSB7XHJcbiAgICAgICAgICB2YXIgc3ViQm9keSA9IHtcclxuICAgICAgICAgICAgLi4ucmVzLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgICBkYXRhOiB7IC4uLnN1YlByb3AsIGlzX3N1YmplY3RfcHJvcGVydHk6IHRydWUsIHByb3BlcnR5X3JlbGF0ZWRfdG86IHJlcy5xdWVyeVBhcmFtcy5kYXRhPy5wcm9wZXJ0eV9yZWxhdGVkX3RvIH0sXHJcbiAgICAgICAgICAgIHN1YmplY3RfcHJvcGVydHlfaWQ6IHJlcy5xdWVyeVBhcmFtcy5kYXRhPy5zdWJqZWN0X3Byb3BlcnR5X2lkLFxyXG4gICAgICAgICAgICByZWNvcmRfaWQ6IHJlcy5xdWVyeVBhcmFtcy5kYXRhPy5yZWNvcmRfaWRcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHZhciBzdWJCb2R5ID0ge1xyXG4gICAgICAgICAgICAuLi5yZXMucXVlcnlQYXJhbXMsXHJcbiAgICAgICAgICAgIGRhdGE6IHsgLi4uc3ViUHJvcCwgaXNfc3ViamVjdF9wcm9wZXJ0eTogdHJ1ZSwgcHJvcGVydHlfcmVsYXRlZF90bzogcmVzLnF1ZXJ5UGFyYW1zLmRhdGE/LnByb3BlcnR5X3JlbGF0ZWRfdG8gfSxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBzdWJCb2R5O1xyXG4gICAgfVxyXG5cclxuICAgIGRlYWxpbmZvQm9keShyZXMsIHJlbGF0ZWQ9e30pIHtcclxuICAgICAgICBpZiAocmVsYXRlZCkge1xyXG4gICAgICAgICAgcmVzLnJlcXVlc3RCb2R5LmRlYWxfaW5mb3JtYXRpb24ucmVsYXRlZF90byA9IHJlbGF0ZWRbJ2xvYW5fYXBwbGljYXRpb25faWQnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBjbG9zaW5nX2RhdGUsIGludGVuZGVkX3VzZV9vZl9mdW5kcyB9ID0gcmVzLnJlcXVlc3RCb2R5LmRlYWxfaW5mb3JtYXRpb247XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgIC4uLnJlcy51cmxQYXJhbXMsXHJcbiAgICAgICAgICBhcHBsaWNhdGlvbl9pZDogcmVzLnF1ZXJ5UGFyYW1zLmRlYWxfYXBwbGljYXRpb25faWQsXHJcbiAgICAgICAgICBkYXRhOiB7IC4uLnJlcy5yZXF1ZXN0Qm9keS5kZWFsX2luZm9ybWF0aW9uLCBpbnRlbmRlZF91c2Vfb2ZfZnVuZHM6IEFycmF5LmlzQXJyYXkoaW50ZW5kZWRfdXNlX29mX2Z1bmRzKSA/IGludGVuZGVkX3VzZV9vZl9mdW5kcyA6IFtdLCBvcmdhbml6YXRpb25faWQ6IHJlcy5xdWVyeVBhcmFtcy5kYXRhLm9yZ2FuaXphdGlvbl9pZCwgY2xvc2luZ19kYXRlOiB0aGlzLmludmFsaWREYXRlKGNsb3NpbmdfZGF0ZSkgfSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBib2R5XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbGljYW50SW5mb0JvZHkocmVzLCBwb3NpdGlvbil7XHJcbiAgICAgICAgY29uc3QgQ3VycmVudGFwcGxpY2FudEluZm9Cb2R5ID0gcmVzLnJlcXVlc3RCb2R5Wydib3Jyb3dlcnMnXVtwb3NpdGlvbl07XHJcbiAgICAgICAgY29uc3QgaWQgPSByZXMudXJsUGFyYW1zWydib3Jyb3dlcnMnXVtwb3NpdGlvbl07XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgZGF0YTogeyAuLi5DdXJyZW50YXBwbGljYW50SW5mb0JvZHksIGRhdGVfb2ZfYmlydGg6IHRoaXMuaW52YWxpZERhdGUoQ3VycmVudGFwcGxpY2FudEluZm9Cb2R5LmRhdGVfb2ZfYmlydGgpLCBsb2FuX2FwcGxpY2F0aW9uX2lkOiByZXMudXJsUGFyYW1zLmxvYW5fYXBwbGljYXRpb25faWQgfSxcclxuICAgICAgICAgICAgLi4ucmVzLnF1ZXJ5UGFyYW1zLCBcclxuICAgICAgICAgICAgLi4uaWRcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9O1xyXG5cclxuICAgIGFzc2V0Qm9keSAocmVzKSB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgIGRhdGE6IHJlcy5yZXF1ZXN0Qm9keSxcclxuICAgICAgICAgIC4uLnJlcy5xdWVyeVBhcmFtcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJldHVybiBib2R5O1xyXG4gICAgfTtcclxuXHJcbiAgICBzYXZlRGVhbFByb3BlcnRpZXNCb2R5IChyZXMpIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IHJlcy5wcmltYXJ5RGF0YT8udmFsdWU/LnBvc2l0aW9uO1xyXG4gICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSByZXMucmVxdWVzdEJvZHk/LnByb3BlcnRpZXM7XHJcbiAgICAgICAgLy8gY29uc3QgY3VycmVudCA9IHByb3BlcnRpZXNbaW5kZXhdO1xyXG4gICAgICBcclxuICAgICAgICAvLyBpZiAoIWN1cnJlbnQpIHtcclxuICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcihgUHJvcGVydHkgYXQgcGFyZW50SW5kZXggJHtpbmRleH0gZG9lcyBub3QgZXhpc3QuYCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICBcclxuICAgICAgICBjb25zdCBwcm9wZXJ0eURhdGEgPSB7IC4uLnByb3BlcnRpZXMgfTsgLy8gQ3JlYXRlIGEgc2hhbGxvdyBjb3B5XHJcbiAgICAgICAgZGVsZXRlIHByb3BlcnR5RGF0YVsnbW9ydGdhZ2UnXTsgLy8gUmVtb3ZlIHRoZSBgbW9ydGdhZ2VgIGtleVxyXG4gICAgICBcclxuICAgICAgICBjb25zdCBsZW5ndGggPSBwcm9wZXJ0aWVzPy5tb3J0Z2FnZSA/IE9iamVjdC5rZXlzKHByb3BlcnRpZXMubW9ydGdhZ2UpLmxlbmd0aCA6IDA7XHJcbiAgICAgICAgbGV0IG1vcnRnYWdlQXJyYXk9W11cclxuICAgICAgICBpZihsZW5ndGggPiAwKXtcclxuICAgICAgICAgICB2YXIgbW9ydGdhZ2VEYXRhQXJyYXk9cHJvcGVydGllcy5tb3J0Z2FnZTtcclxuXHJcbiAgICAgICAgICAgIG1vcnRnYWdlQXJyYXkgPSBBcnJheS5pc0FycmF5KG1vcnRnYWdlRGF0YUFycmF5KSBcclxuICAgICAgICAgICAgPyBtb3J0Z2FnZURhdGFBcnJheSBcclxuICAgICAgICAgICAgOiAobW9ydGdhZ2VEYXRhQXJyYXkgJiYgdHlwZW9mIG1vcnRnYWdlRGF0YUFycmF5ID09PSAnb2JqZWN0JyA/IE9iamVjdC52YWx1ZXMobW9ydGdhZ2VEYXRhQXJyYXkpIDogW10pO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICBtb3J0Z2FnZUFycmF5LmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIHR5cGVvZiBlbGVtZW50ID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnRbJ21hdHVyaXR5X2RhdGUnXSA9IHRoaXMuaW52YWxpZERhdGUoZWxlbWVudFsnbWF0dXJpdHlfZGF0ZSddKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBib2R5T2JqID0ge1xyXG4gICAgICAgICAgLi4ucmVzLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICBwcm9wZXJ0eURhdGE6IHtcclxuICAgICAgICAgICAgICAuLi5wcm9wZXJ0eURhdGEsXHJcbiAgICAgICAgICAgICAgaXNfc3ViamVjdF9wcm9wZXJ0eTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgbG9hbl9hcHBsaWNhdGlvbl9pZDogcmVzLnVybFBhcmFtcz8uZGVhbF9pZCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbW9ydGdhZ2VEYXRhOiBtb3J0Z2FnZUFycmF5ID8gbW9ydGdhZ2VBcnJheSA6IFtdLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICBcclxuICAgICAgICAvLyBib2R5T2JqID0gcmVtb3ZlRW1wdHlLZXlzKGJvZHlPYmopO1xyXG4gICAgICAgIGNvbnN0IHVybFByb3BlcnRpZXMgPSByZXMudXJsUGFyYW1zPy5wcm9wZXJ0aWVzO1xyXG4gICAgICAgIC8vIGNvbnN0IHVybFByb3BlcnR5ID0gdXJsUHJvcGVydGllc1tpbmRleF07XHJcbiAgICAgIFxyXG4gICAgICAgIGlmICh1cmxQcm9wZXJ0aWVzPy5wcm9wZXJ0aWVzX2FwcGxpY2F0aW9uX2lkKSB7XHJcbiAgICAgICAgICBib2R5T2JqID0ge1xyXG4gICAgICAgICAgICAuLi5ib2R5T2JqLFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzX2FwcGxpY2F0aW9uX2lkOiB1cmxQcm9wZXJ0aWVzLnByb3BlcnRpZXNfYXBwbGljYXRpb25faWQsXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGJvZHlPYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIGxpYWJpbGl0eUJvZHkgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgIGRhdGE6IHJlcy5yZXF1ZXN0Qm9keSxcclxuICAgICAgICAgIG1hdHVyaXR5X2RhdGU6IHRoaXMuaW52YWxpZERhdGUocmVzLnJlcXVlc3RCb2R5Lm1hdHVyaXR5X2RhdGUpLFxyXG4gICAgICAgICAgLi4ucmVzLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIGJvZHk7XHJcbiAgICB9O1xyXG5cclxuICAgIGRlbGV0ZUN1cnJlbnRwcm9wZXJ0eSAocmVzKSB7XHJcbiAgICAgICAgY29uc3QgcGFyZW50SW5kZXggPSByZXMucHJpbWFyeURhdGE/LnZhbHVlPy5wb3NpdGlvbjtcclxuICAgICAgICBjb25zdCB1cmxQcm9wZXJ0aWVzID0gcmVzLnVybFBhcmFtcz8ucHJvcGVydGllcyB8fCBbXTtcclxuICAgICAgICBjb25zdCB1cmxQcm9wZXJ0eSA9IHVybFByb3BlcnRpZXNbcGFyZW50SW5kZXhdO1xyXG5cclxuICAgICAgICBsZXQgcHJvcGVydHlBcnIgPSB0aGlzLmdldEFraXRhRGF0YUZyb21IYW5kbGVyKFwiZ2V0RnVsbERlYWxEZXRhaWxzXCIpWydnZXRGdWxsRGVhbERldGFpbHMjI2RhdGEnXVsncHJvcGVydGllcyddO1xyXG4gICAgICAgIGxldCBwcm9wZXJ0eVBvc2l0aW9uID0gdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucHJpbWFyeURhdGEudmFsdWU/LnBvc2l0aW9uID8gdGhpcy5pbnRlcm5hbEFwaVJlcXVlc3QucHJpbWFyeURhdGEudmFsdWU/LnBvc2l0aW9uIDogMDtcclxuICAgICAgICBsZXQgcHJvcGVydHlJRCA9IHByb3BlcnR5QXJyW3Byb3BlcnR5UG9zaXRpb25dPy5hcHBsaWNhdGlvbl9pZCA/IHByb3BlcnR5QXJyW3Byb3BlcnR5UG9zaXRpb25dPy5hcHBsaWNhdGlvbl9pZCA6IHJlcz8ucmVxdWVzdEJvZHk/LnByb3BlcnRpZXM/LnByb3BlcnRpZXNfYXBwbGljYXRpb25faWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBpZighcHJvcGVydHlJRCkge1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZXZlbnREZWxldGVSZXBlYXRlZEJsb2NrU3Vic2NyaWJlci5lbWl0KHJlcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5ldmVudFJlc3BvbnNlU3Vic2NyaWJlci5lbWl0KHtcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHJlcy5oYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2U6IHsgc3RhdHVzOiB0cnVlIH0sXHJcbiAgICAgICAgICAgICAgICBldmVudF9zdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHsgbWV0aG9kOiBcInNvZnRfZGVsZXRlXCIgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucmVzLnJlcXVlc3RCb2R5LCBwcm9wZXJ0aWVzX2FwcGxpY2F0aW9uX2lkOiBwcm9wZXJ0eUlEIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGdlbmVyYXRlQWRkaXRpb25hbEluY29tZUJvZHkgKHJlcywgY3VyclBvc2l0aW9uKSB7XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb24gPSBjdXJyUG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBjdXJyUG9zaXRpb247XHJcbiAgICAgICAgY29uc3QgaW5jb21lID0gcmVzLnJlcXVlc3RCb2R5Py5pbmNvbWUgfHwgW107XHJcbiAgICAgICAgY29uc3QgY3VycmVudCA9IGluY29tZVtwb3NpdGlvbl07XHJcbiAgICAgIFxyXG4gICAgICAgIGlmICghY3VycmVudCkge1xyXG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBpbmNvbWUgYXQgcGFyZW50SW5kZXggJHtwb3NpdGlvbn0gZG9lcyBub3QgZXhpc3QuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICBjb25zdCBib3Jyb3dlcnMgPSByZXMudXJsUGFyYW1zPy5ib3Jyb3dlcnNbcG9zaXRpb25dO1xyXG4gICAgICAgIGxldCBib2R5T2JqID0ge1xyXG4gICAgICAgICAgLi4ucmVzLnF1ZXJ5UGFyYW1zLFxyXG4gICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAuLi5jdXJyZW50LFxyXG4gICAgICAgICAgICBwYXltZW50X3R5cGU6IFtjdXJyZW50LnBheW1lbnRfdHlwZV0sXHJcbiAgICAgICAgICAgIGJvcnJvd2VyX2lkOiBib3Jyb3dlcnMuYXBwbGljYW50X2FwcGxpY2F0aW9uX2lkLFxyXG4gICAgICAgICAgICBlbXBsb3llcl9uYW1lOiAnQWRkaXRpb25hbCBJbmNvbWUnLFxyXG4gICAgICAgICAgICBlbXBsb3ltZW50X3R5cGU6ICdTZWFzb25hbCcsXHJcbiAgICAgICAgICAgIHN0YXJ0X2RhdGU6IHRoaXMuaW52YWxpZERhdGUoY3VycmVudC5zdGFydF9kYXRlKSxcclxuICAgICAgICAgICAgZW5kX2RhdGU6IHRoaXMuaW52YWxpZERhdGUoY3VycmVudC5lbmRfZGF0ZSksXHJcbiAgICAgICAgICAgIGlzX3NhbGFyeV9pbmNvbWU6IGZhbHNlLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9O1xyXG4gICAgICBcclxuICAgICAgICBjb25zdCB1cmxpbmNvbWUgPSByZXMudXJsUGFyYW1zPy5pbmNvbWVbcG9zaXRpb25dO1xyXG4gICAgICBcclxuICAgICAgICBpZiAodXJsaW5jb21lPy5pbmNvbWVfYXBwbGljYXRpb25faWQgIT0gJycpIHtcclxuICAgICAgICAgIGJvZHlPYmogPSB7XHJcbiAgICAgICAgICAgIC4uLmJvZHlPYmosXHJcbiAgICAgICAgICAgIGluY29tZV9hcHBsaWNhdGlvbl9pZDogdXJsaW5jb21lLmluY29tZV9hcHBsaWNhdGlvbl9pZCxcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBib2R5T2JqO1xyXG4gICAgICB9O1xyXG5cclxuICAgIGdlbmVyYXRlTGl2aW5nQWRkcmVzc0JvZHkocmVzLCBjdXJyUG9zaXRpb24pIHtcclxuICAgICAgICBjb25zdCBpbmRleCA9IGN1cnJQb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBhZGRyZXNzID0gcmVzLnJlcXVlc3RCb2R5Py5hZGRyZXNzIHx8IFtdO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnQgPSBhZGRyZXNzW2luZGV4XTtcclxuICAgICAgICBjb25zdCB1cmxBZGRyZXNzZXMgPSByZXMudXJsUGFyYW1zPy5hZGRyZXNzW2luZGV4XTtcclxuICAgICAgICBpZiAoIWN1cnJlbnQpIHtcclxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgYWRkcmVzcyBhdCBwYXJlbnRJbmRleCAke2luZGV4fSBkb2VzIG5vdCBleGlzdC5gKTtcclxuICAgICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAgIGNvbnN0IGJvcnJvd2VycyA9IHJlcy51cmxQYXJhbXM/LmJvcnJvd2VycyA/IHJlcy51cmxQYXJhbXM/LmJvcnJvd2Vyc1tpbmRleF0gOiBbXTtcclxuICAgICAgICBsZXQgYm9keU9iaiA9IHtcclxuICAgICAgICAgIC4uLnJlcy5xdWVyeVBhcmFtcyxcclxuICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgLi4uY3VycmVudCxcclxuICAgICAgICAgICAgbW92ZV9pbl9kYXRlOiB0aGlzLmludmFsaWREYXRlKGN1cnJlbnQubW92ZV9pbl9kYXRlKSxcclxuICAgICAgICAgICAgbW92ZV9vdXRfZGF0ZTogdGhpcy5pbnZhbGlkRGF0ZShjdXJyZW50Lm1vdmVfb3V0X2RhdGUpLFxyXG4gICAgICAgICAgICBib3Jyb3dlcl9pZDogYm9ycm93ZXJzLmFwcGxpY2FudF9hcHBsaWNhdGlvbl9pZCxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgICAgaWYgKHVybEFkZHJlc3Nlcz8uYWRkcmVzc19hcHBsaWNhdGlvbl9pZCAhPSAnJykge1xyXG4gICAgICAgICAgYm9keU9iaiA9IHtcclxuICAgICAgICAgICAgLi4uYm9keU9iaixcclxuICAgICAgICAgICAgLi4udXJsQWRkcmVzc2VzXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgXHJcbiAgICAgICAgcmV0dXJuIGJvZHlPYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIGV4cGxveWVlU2F2ZUJvZHkocmVzLCBjdXJyUG9zaXRpb24sIHBhcmVudFBvc2l0aW9uKXtcclxuICAgICAgICBjb25zdCBwYXJlbnRJbmRleCA9IGN1cnJQb3NpdGlvbjtcclxuICAgICAgICBjb25zdCBjdXJyZW50QXBwbGljYW50ID0gcmVzLnJlcXVlc3RCb2R5Py5hcHBsaWNhbnRbcGFyZW50SW5kZXhdO1xyXG4gICAgICAgIGNvbnN0IGN1cnJlbnRFbXBsb3llZSA9IGN1cnJlbnRBcHBsaWNhbnQuZW1wbG95bWVudDtcclxuICAgICAgICBjb25zdCB7IHBheW1lbnRfdHlwZSB9ID0gY3VycmVudEVtcGxveWVlO1xyXG4gICAgICAgIHZhciBib2R5T2JqID0geyAuLi5yZXMudXJsUGFyYW1zLCBkYXRhOiB7IC4uLmN1cnJlbnRFbXBsb3llZSwgc3RhcnRfZGF0ZTogdGhpcy5pbnZhbGlkRGF0ZShjdXJyZW50RW1wbG95ZWUuc3RhcnRfZGF0ZSksIGVuZF9kYXRlOiB0aGlzLmludmFsaWREYXRlKGN1cnJlbnRFbXBsb3llZS5lbmRfZGF0ZSksIHBheW1lbnRfdHlwZTogQXJyYXkuaXNBcnJheShwYXltZW50X3R5cGUpID8gcGF5bWVudF90eXBlIDogW3BheW1lbnRfdHlwZV0sIGJvcnJvd2VyX2lkOiByZXMucXVlcnlQYXJhbXMuYm9ycm93ZXJzID8gcmVzLnF1ZXJ5UGFyYW1zLmJvcnJvd2Vyc1twYXJlbnRQb3NpdGlvbl0uYXBwbGljYW50X2FwcGxpY2F0aW9uX2lkIDogJycgfSB9O1xyXG4gICAgICAgIGlmIChyZXMgJiYgcmVzLnF1ZXJ5UGFyYW1zICYmIHJlcy5xdWVyeVBhcmFtcy5hcHBsaWNhbnQgJiYgcmVzLnF1ZXJ5UGFyYW1zLmFwcGxpY2FudFtwYXJlbnRJbmRleF0gJiYgcmVzLnF1ZXJ5UGFyYW1zLmFwcGxpY2FudFtwYXJlbnRJbmRleF0uZW1wbG95bWVudFsnZW1wbG95bWVudF9hcHBsaWNhdGlvbl9pZCddICE9ICcnKSB7XHJcbiAgICAgICAgICBib2R5T2JqID0geyAuLi5ib2R5T2JqLCBlbXBsb3ltZW50X2FwcGxpY2F0aW9uX2lkOiByZXMucXVlcnlQYXJhbXMuYXBwbGljYW50W3BhcmVudEluZGV4XS5lbXBsb3ltZW50WydlbXBsb3ltZW50X2FwcGxpY2F0aW9uX2lkJ10gfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJvZHlPYmouZGF0YVsnc3RhcnRfZGF0ZSddID09PSAnSW52YWxpZCBkYXRlJykge1xyXG4gICAgICAgICAgICBib2R5T2JqLmRhdGFbJ3N0YXJ0X2RhdGUnXSA9ICcnO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYm9keU9iai5kYXRhWydlbmRfZGF0ZSddID09PSAnSW52YWxpZCBkYXRlJykge1xyXG4gICAgICAgICAgICBib2R5T2JqLmRhdGFbJ2VuZF9kYXRlJ10gPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHlPYmo7XHJcbiAgICB9O1xyXG5cclxuICAgIGludmFsaWREYXRlKGRhdGUpe1xyXG4gICAgICAgIGlmIChkYXRlPy50b0xvd2VyQ2FzZSgpID09PSAnaW52YWxpZCBkYXRlJyB8fCBkYXRlPy50b0xvd2VyQ2FzZSgpID09PSAnJyApIHtcclxuICAgICAgICAgIGRhdGUgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IGZvcm1zIHRoZSByZXF1ZXN0IG9iamVjdCB0aGF0IHRha2VzIGluIHRoZVxyXG4gICAgICogYXBpIGNvbmZpZyBvYmplY3QgYW5kXHJcbiAgICAgKiByZXR1cm5zIHRoZSBxdWVyeSBwYXJhbSwgaGVhZGVyIHBhcmFtLCB1cmwgcGFyYW0sXHJcbiAgICAgKiBhbmQgcmVxdWVzdCBib2R5IGFzIGFuIG9iamVjdFxyXG4gICAgICogQHJlcXVpcmVkIEBwYXJhbSBhcGlDb25maWdPYmplY3QgdHlwZSBpcyBvYmplY3RcclxuICAgICAqIEByZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIGFsbCB0aGUgZGF0YSB0aGF0IGlzIHJlcXVpcmVkIGJ5IHRoZVxyXG4gICAgICogQVBJXHJcbiAgICAgKi9cclxuICAgIGZvcm1UaGVSZXF1ZXN0T2JqKGFwaUNvbmZpZ09iamVjdCwgZW5jcmlwdGVkRmlsZURhdGEgPSBbXSwgdHlwZT1cIlwiKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcmVxdWVzdEJvZHk6IGVuY3JpcHRlZEZpbGVEYXRhLmxlbmd0aCA+IDAgPyB7IGZpbGU6IGVuY3JpcHRlZEZpbGVEYXRhIH0gOiAoYXBpQ29uZmlnT2JqZWN0LnJlcXVlc3RCb2R5Lmxlbmd0aCA+IDAgPyB0aGlzLnJldHVybkZvcm1hdHRlZE9iamVjdChhcGlDb25maWdPYmplY3QucmVxdWVzdEJvZHksIHR5cGUsICdyZXF1ZXN0Qm9keScpIDoge30pLFxyXG4gICAgICAgICAgICBoZWFkZXJzOiAoYXBpQ29uZmlnT2JqZWN0LmhlYWRlclBhcmFtcyAmJiBhcGlDb25maWdPYmplY3QuaGVhZGVyUGFyYW1zLmxlbmd0aCA+IDApID9cclxuICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuRm9ybWF0dGVkT2JqZWN0KGFwaUNvbmZpZ09iamVjdC5oZWFkZXJQYXJhbXMsIHR5cGUpIDoge30sXHJcbiAgICAgICAgICAgIHF1ZXJ5UGFyYW1zOiBhcGlDb25maWdPYmplY3QucXVlcnlQYXJhbXMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldHVybkZvcm1hdHRlZE9iamVjdChhcGlDb25maWdPYmplY3QucXVlcnlQYXJhbXMsIHR5cGUpIDoge30sXHJcbiAgICAgICAgICAgIHVybFBhcmFtczogYXBpQ29uZmlnT2JqZWN0LnVybFBhcmFtcy5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuRm9ybWF0dGVkT2JqZWN0KGFwaUNvbmZpZ09iamVjdC51cmxQYXJhbXMsIHR5cGUpIDoge30sXHJcbiAgICAgICAgICAgIHVybDogdGhpcy5nZXRVUkwoYXBpQ29uZmlnT2JqZWN0LnVybCksXHJcbiAgICAgICAgICAgIG1ldGhvZFR5cGU6IGFwaUNvbmZpZ09iamVjdC5tZXRob2RUeXBlLFxyXG4gICAgICAgICAgICByZXF1ZXN0VHlwZTogYXBpQ29uZmlnT2JqZWN0LnJlcXVlc3RUeXBlLFxyXG4gICAgICAgICAgICBpc0VTQjogYXBpQ29uZmlnT2JqZWN0LmlzRVNCLFxyXG4gICAgICAgICAgICBoYXNBdXRob3Jpc2F0aW9uOiBhcGlDb25maWdPYmplY3QuaGFzQXV0aG9yaXNhdGlvbixcclxuICAgICAgICAgICAgc3RvcmFnZVR5cGU6IGFwaUNvbmZpZ09iamVjdC5zdG9yYWdlVHlwZSxcclxuICAgICAgICAgICAgdXNlVUlEOiBhcGlDb25maWdPYmplY3QudXNlVUlEIHx8IGZhbHNlLFxyXG4gICAgICAgICAgICBlc2JSZXF1ZXN0Qm9keTogKGFwaUNvbmZpZ09iamVjdC5lc2JSZXF1ZXN0Qm9keSAmJiBhcGlDb25maWdPYmplY3QuZXNiUmVxdWVzdEJvZHkubGVuZ3RoID4gMCkgPyB0aGlzLnJldHVybkZvcm1hdHRlZE9iamVjdChhcGlDb25maWdPYmplY3QuZXNiUmVxdWVzdEJvZHkpIDoge30sXHJcbiAgICAgICAgICAgIGlzRXh0ZXJuYWw6IGFwaUNvbmZpZ09iamVjdC5pc0V4dGVybmFsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ldGhvZCBtb2RpZmllcyB0aGUgdXJsIG9mIHRoZSBhcGlfY29uZmlnIG9iamVjdFxyXG4gICAgICogZm9yIGV4YW1wbGU6IHVybCAtPiAke0JBU0VfVVJMfS9tb2Nrcy9hcGlcclxuICAgICAqIGNvZGUgbWF0Y2hlcyB0aGUgcmVnZXggYW5kIGZpbmRzIHRoZSBCQVNFX1VSTFxyXG4gICAgICogdGhlbiBpdCBjaGVja3MgdGhlIGxvY2FsIHN0b3JhZ2UgZm9yIGFueVxyXG4gICAgICogdmFsdWUgZm9yIEJBU0VfVVJMIGFzIGl0IHNob3VsZCBiZSBhZGRlZCBpbiB0aGUgYXBwX2NvbmZpZy5qc29uXHJcbiAgICAgKiBpZiBpdCBpcyBub3QgYWRkZWQgdGhlbiB0aGUgY29kZSB3aWxsIHJlbW92ZSAke30gZnJvbSB0aGUgdXJsIGFuZFxyXG4gICAgICogaGl0IHRoZSBhcGlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRVUkwodXJsKSB7XHJcbiAgICAgICAgY29uc3QgZHluYW1pY1BhdGggPSB1cmwubWF0Y2gobmV3IFJlZ0V4cCgvXFwkXFx7KC4qPylcXH0vZykpO1xyXG4gICAgICAgIGlmIChkeW5hbWljUGF0aCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhdGggb2YgZHluYW1pY1BhdGgpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHA6IGFueSA9IHBhdGg7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaFBhdGggPSBwLm1hdGNoKG5ldyBSZWdFeHAoL1xcdysvZykpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGFwaVBhdGggPSBwO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaVBhdGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShtYXRjaFBhdGhbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYXBpUGF0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlQYXRoID0gbWF0Y2hQYXRoWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYFZhcmlhYmxlICR7bWF0Y2hQYXRoWzBdfSBpcyBub3QgZGVjbGFyZWRgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB1cmwgPSB1cmwuc3BsaXQocGF0aCkuam9pbihhcGlQYXRoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyBhbiBvYmplY3Qgd2hpY2ggaXMgdGhlIG1hcHBpbmcgb2YgdGhlICBhcGlLZXkgYW5kIHRoZSB2YWx1ZSBpbiBhIGZpZWxkLlxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEFwcERhdGEob25seVZhbHVlcyA9IHRydWUpIHtcclxuICAgICAgICBsZXQgb2JqID0ge307XHJcbiAgICAgICAgY29uc3QgYXBwU3RvcmVEYXRhID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRBbGxBcHBTdG9yZURhdGEoKS5zb3J0KCggYSwgYiApID0+IHtcclxuICAgICAgICAgICAgaWYgKGEudXBkYXRlZE9uICYmIGEudXBkYXRlZE9uIDwgYi51cGRhdGVkT24gKXtcclxuICAgICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGEudXBkYXRlZE9uICYmIGEudXBkYXRlZE9uID4gYi51cGRhdGVkT24gKXtcclxuICAgICAgICAgICAgICByZXR1cm4gMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIGFwcFN0b3JlRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5yZXF1ZXN0QXBpS2V5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGRhdGEucmVxdWVzdEFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmRhdGFGb3JtYXRTZXBhcmF0b3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5ICYmIChrZXkuaW5jbHVkZXMoJzo6OicpKSAmJiAob2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jaGVja0ZvckRhdGVPclRpbWVQaWNrZXIoa2V5LnNwbGl0KCc6OjonKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnZhbHVlLnNwbGl0KGRhdGEuZGF0YUZvcm1hdFNlcGFyYXRvcikpLCAuLi5vYmpcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IG9ubHlWYWx1ZXMgPyBkYXRhLnZhbHVlIDogeyB2YWx1ZTogZGF0YS52YWx1ZSwgdXBkYXRlZE9uOiBkYXRhLnVwZGF0ZWRPbiB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgb2JqW2RhdGEuYXBpS2V5XSA9IG9ubHlWYWx1ZXMgPyBkYXRhLnZhbHVlIDogeyB2YWx1ZTogZGF0YS52YWx1ZSwgdXBkYXRlZE9uOiBkYXRhLnVwZGF0ZWRPbiB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tGb3JEYXRlT3JUaW1lUGlja2VyKGtleXMsIGFwaVZhbHVlKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBrZXlzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBvYmpbdmFsdWVdID0gYXBpVmFsdWVbaW5kZXhdIHx8ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyBhbiBhcnJheSBvZiBvYmplY3RzIGluIHdoaWNoIHRoZSBmaXJzdCBvbmUgaXMgdGhlIG9iamVjdCB3aXRoIGtleVxyXG4gICAgICogd2hpY2ggdGhlIGFwaUtleSBjb25jYXRlbmF0ZWQgd2l0aCB0aGUgYXBpIHVybCBhbmQgc2Vjb25kIG9uZSBpcyB0aGUgb2JqZWN0IHdpdGggdGhlIG5vcm1hbCBhcGlLZXlcclxuICAgICAqIHdoaWNoIGFyZSBiYXNpY2FsbHkgdGhlIHVybCBwYXJhbWV0ZXJzIHRoYXQgZG9lcyBub3QgaGF2ZSBhbiBlbmRwb2ludFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEFwaURhdGEoKSB7XHJcbiAgICAgICAgbGV0IGVuZFBvaW50TWFwcGVkT2JqID0ge307IC8vIHN0b3JlIGFsbCBhcGkga2V5IHZhbHVlIG1hcHBpbmdzIGluIHdoaWNoIHRoZSBrZXlzIGFyZSB1cmwgaGFzaCBtYXBwZWRcclxuICAgICAgICBjb25zdCBvYmogPSB7fTsgLy8gc3RvcmUgYWxsIHRoZSBhcGkga2V5IHZhbHVlIG1hcHBpbmdzIGluIHdoaWNoIHRoZSBhcGkga2V5cyBhcmUgbm90IGhhc2ggbWFwcGVkXHJcbiAgICAgICAgY29uc3QgYXBpU3RvcmVEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBbGxBcGlTdG9yZURhdGEoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgYXBpU3RvcmVEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmFwaVVybCkge1xyXG4gICAgICAgICAgICAgICAgLy8ga2VlcGluZyBkYXRhLnZhbHVlIGF0IGZpcnN0IGJlY2F1c2Ugd2hlbiB0aGUgZGF0YSBpcyByZWNlaXZlZCBpbiB0aGVcclxuICAgICAgICAgICAgICAgIC8vIGZyb250IGVuZCBkYXRhIGlzIHN0b3JlZCBpbiB0aGUgYXBpIGRhdGEgYW5kIG9ubHkgYXQgdGhhdCB0aW1lXHJcbiAgICAgICAgICAgICAgICAvLyBhcGlVcmwgaXMgYWRkZWQgc28gd2UgbmVlZCB0byB1cGRhdGUgdGhlIGRhdGEgaW4gdGhlIGN1cnJlbnQgYXBpIGRhdGEgd2l0aFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlIGFwaSBkYXRhIHRoYXQgY29tZXMgZnJvbSB0aGUgYXBpIGZvciBleGFtcGxlIHBhZ2luYXRpb24gZGF0YSwgcHJpbWFyeUtleSxcclxuICAgICAgICAgICAgICAgIC8vIHByZS1kZWZpbmVkIGdsb2JhbCBwYXJhbWV0ZXJcclxuICAgICAgICAgICAgICAgIGVuZFBvaW50TWFwcGVkT2JqID0geyAuLi5kYXRhLnZhbHVlLCAuLi5lbmRQb2ludE1hcHBlZE9iaiB9O1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRhdGEuYXBpS2V5LmluY2x1ZGVzKCcjIycpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlPYmogPSB7fTtcclxuICAgICAgICAgICAgICAgIGFwaU9ialtkYXRhLmFwaUtleV0gPSBkYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgZW5kUG9pbnRNYXBwZWRPYmogPSB7IC4uLmVuZFBvaW50TWFwcGVkT2JqLCAuLi5hcGlPYmogfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9ialtkYXRhLmFwaUtleV0gPSBkYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBbZW5kUG9pbnRNYXBwZWRPYmosIG9ial07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgdGhlIG9iamVjdCBtYXBwZWQgYWNjb3JkaW5nIHRvIHRoZSBnaXZlbiBrZXlzIGFycmF5XHJcbiAgICAgKiBAcGFyYW0ga2V5cyB0aGUgYXJyYXkgb2YgaWRzIHRoYXQgbmVlZHMgdG8gYmUgbWFwcGVkXHJcbiAgICAgKi9cclxuICAgIC8qIHByaXZhdGUgcmV0dXJuRm9ybWF0dGVkT2JqZWN0KGtleXMsIHR5cGU9JycpIHtcclxuICAgICAgICBjb25zdCBhcGlTdG9yZURhdGEgPSB0aGlzLmdldEFwaURhdGEoKTtcclxuICAgICAgICBjb25zdCBhcHBTdG9yZURhdGEgPSB0aGlzLmdldEFwcERhdGEoKTtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0ID0ga2V5LnNwbGl0KCcjIycpO1xyXG4gICAgICAgICAgICBjb25zdCBjb25maWdLZXlzID0ga2V5LmluY2x1ZGVzKCcjIycpID8gc3BsaXRbMF0gKyAnIyMnICsgc3BsaXRbMV0gOiBrZXk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzT3B0aW9uYWwgPSBzcGxpdFszXSA9PSAnb3B0aW9uYWwnO1xyXG4gICAgICAgICAgICBpZiAoY29uZmlnS2V5cy5pbmNsdWRlcygnKChwYXJhbXMpKScpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0QXBpS2V5ID0gJydcclxuICAgICAgICAgICAgICAgIGxldCBhcGlLZXkgPSAnJ1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmZpZ0tleXMuaW5jbHVkZXMoJ3x8JykgJiYgY29uZmlnS2V5cy5zcGxpdCgnfHwnKS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRBcGlLZXkgPSBjb25maWdLZXlzLnNwbGl0KCd8fCcpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaUtleSA9IGNvbmZpZ0tleXMuc3BsaXQoJ3x8JylbMV0uc3Vic3RyaW5nKDEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldEFwaUtleSA9IGFwaUtleSA9IGNvbmZpZ0tleXMuc3Vic3RyaW5nKDEwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIG9ialt0YXJnZXRBcGlLZXldID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnBhcmFtc1thcGlLZXldO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZ0tleXMuaW5jbHVkZXMoJ1sqXScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGNvbmZpZ0tleXMuc3BsaXQoJ1sqXScpLmpvaW4oJ1xcXFxbXFxcXGQrXFxcXF0nKTtcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciBkYXRhIGluIGFwcERhdGEgU3RvcmVcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGF0YUtleSBvZiBPYmplY3Qua2V5cyhhcHBTdG9yZURhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YUtleS5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbdGhpcy5nZXRLZXkocmVzdWx0WzBdKV0gPSB0aGlzLnJldHVyblBhcnNlZFZhbHVlcyhzcGxpdFsyXSwgYXBwU3RvcmVEYXRhW3Jlc3VsdFswXV0sIGlzT3B0aW9uYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgZGF0YSBpbiBhcGkgZGF0YSBzdG9yZVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhS2V5IG9mIE9iamVjdC5rZXlzKGFwaVN0b3JlRGF0YVswXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhS2V5Lm1hdGNoKG5ldyBSZWdFeHAocmVnZXgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBjb25maWdLZXlzIHRoYXQgbmVlZHMgdG8gYmUgcHVzaGVkIGFscmVhZHkgZXhpdHMgaW4gdGhlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlLZXkgPSB0aGlzLmdldEtleShyZXN1bHRbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikuaW5jbHVkZXMoYXBpS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2FwaUtleV0gPSB0aGlzLnJldHVyblBhcnNlZFZhbHVlcyhzcGxpdFsyXSwgYXBpU3RvcmVEYXRhWzBdW3Jlc3VsdFswXV0sIGlzT3B0aW9uYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNvbmZpZ0tleXMuaW5jbHVkZXMoJ3sqfScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IGNvbmZpZ0tleXMuc3BsaXQoJ3sqfScpLmpvaW4oJy4rJyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgZGF0YSBpbiBhcHBEYXRhIFN0b3JlXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXMoYXBwU3RvcmVEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGFLZXkubWF0Y2gobmV3IFJlZ0V4cChyZWdleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3RoaXMuZ2V0S2V5KHJlc3VsdFswXSldID0gdGhpcy5yZXR1cm5QYXJzZWRWYWx1ZXMoc3BsaXRbMl0sIGFwcFN0b3JlRGF0YVtyZXN1bHRbMF1dLCBpc09wdGlvbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGRhdGEgaW4gYXBpIGRhdGEgc3RvcmVcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGF0YUtleSBvZiBPYmplY3Qua2V5cyhhcGlTdG9yZURhdGFbMF0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YUtleS5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgY29uZmlnS2V5cyB0aGF0IG5lZWRzIHRvIGJlIHB1c2hlZCBhbHJlYWR5IGV4aXRzIGluIHRoZSBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpS2V5ID0gdGhpcy5nZXRLZXkocmVzdWx0WzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmopLmluY2x1ZGVzKGFwaUtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialthcGlLZXldID0gdGhpcy5yZXR1cm5QYXJzZWRWYWx1ZXMoc3BsaXRbMl0sIGFwaVN0b3JlRGF0YVswXVtyZXN1bHRbMF1dLCBpc09wdGlvbmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwaUtleSA9IHRoaXMuZ2V0S2V5KGNvbmZpZ0tleXMpO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgY29uZmlnS2V5cyBleGlzdHMgaW4gdGhlIGFwcCBkYXRhIHN0b3JlXHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXBwU3RvcmVEYXRhKS5pbmNsdWRlcyhjb25maWdLZXlzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialthcGlLZXldID0gdGhpcy5yZXR1cm5QYXJzZWRWYWx1ZXMoc3BsaXRbMl0sIGFwcFN0b3JlRGF0YVtjb25maWdLZXlzXSwgaXNPcHRpb25hbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGFwaVN0b3JlRGF0YVswXSkuaW5jbHVkZXMoY29uZmlnS2V5cykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBjb25maWdLZXlzIGV4aXN0cyBpbiBhcGkgZGF0YSBzdG9yZSB3aGVyZSBrZXlzIGFyZSBoYXMgbWFwcGVkXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2FwaUtleV0gPSB0aGlzLnJldHVyblBhcnNlZFZhbHVlcyhzcGxpdFsyXSwgYXBpU3RvcmVEYXRhWzBdW2NvbmZpZ0tleXNdLCBpc09wdGlvbmFsKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoT2JqZWN0LmtleXMoYXBpU3RvcmVEYXRhWzFdKS5pbmNsdWRlcyhhcGlLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgY29uZmlnS2V5cyBleGlzdHMgaW4gYXBpIGRhdGEgc3RvcmUgd2hlcmUga2V5cyBhcmUgbm90IGhhc2ggbWFwcGVkXHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2FwaUtleV0gPSB0aGlzLnJldHVyblBhcnNlZFZhbHVlcyhzcGxpdFsyXSwgYXBpU3RvcmVEYXRhWzFdW2FwaUtleV0sIGlzT3B0aW9uYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZm9yIG9wdGlvbmFsIGFwaWtleVxyXG4gICAgICAgICAgICAgICAgaWYgKG9ialthcGlLZXldID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgb2JqW2FwaUtleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGZpbmFsT2JqID0gdGhpcy5mbGF0QW5kTmVzdFV0aWwuY3JlYXRlTmVzdGVkT2JqZWN0KG9iaiwgdHlwZSk7XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsT2JqO1xyXG4gICAgfSAqL1xyXG5cclxuICAgIHJlbW92ZUVtcHR5S2V5cyhvYmopIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7IC8vIEVuc3VyZSBpdCdzIG5vdCBmcm9tIHRoZSBwcm90b3R5cGUgY2hhaW5cclxuICAgICAgICAgICAgICAgIGlmIChvYmpba2V5XSA9PT0gbnVsbCB8fCBvYmpba2V5XSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIG9ialtrZXldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0aGUgb2JqZWN0IG1hcHBlZCBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGtleXMgYXJyYXkgXHJcbiAgICBnZXRNdWx0aXBsZUFwaXNEYXRhQnlLZXlzKHN0b3JlRGF0YTogeyBba2V5OiBzdHJpbmddOiB7IHZhbHVlOiBhbnk7IHVwZGF0ZWRPbjogbnVtYmVyOyB9IH0sIGtleXM6IHN0cmluZ1tdKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICBpZiAoc3RvcmVEYXRhW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIG9ialtrZXldID0gc3RvcmVEYXRhW2tleV07ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIHRoZSBsYXRlc3QgdmFsdWUgZnJvbSBzdG9yZSBkYXRhIGJhc2VkIG9uIHVwZGF0ZWRPbiB0aW1lc3RhbXBcclxuICAgICAqL1xyXG4gICAgZ2V0TGF0ZXN0VmFsdWUoc3RvcmVEYXRhOiB7XHJcbiAgICAgICAgW2tleTogc3RyaW5nXToge1xyXG4gICAgICAgICAgICB2YWx1ZTogYW55O1xyXG4gICAgICAgICAgICB1cGRhdGVkT246IG51bWJlcjtcclxuICAgICAgICB9O1xyXG4gICAgfSk6IHsga2V5OiBzdHJpbmc7IHZhbHVlOiBhbnk7IHVwZGF0ZWRPbjogbnVtYmVyIH0ge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuZW50cmllcyhzdG9yZURhdGEpXHJcbiAgICAgICAgICAgIC5yZWR1Y2UoKGxhdGVzdDogYW55LCBba2V5LCBkYXRhXSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFsYXRlc3QgfHwgZGF0YS51cGRhdGVkT24gPiBsYXRlc3QudXBkYXRlZE9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZE9uOiBkYXRhLnVwZGF0ZWRPblxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbGF0ZXN0O1xyXG4gICAgICAgICAgICB9LCBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgb2JqZWN0IG1hcHBlZCBhY2NvcmRpbmcgdG8gdGhlIGdpdmVuIGtleXMgYXJyYXlcclxuICAgICAqIEBwYXJhbSBrZXlzIHRoZSBhcnJheSBvZiBpZHMgdGhhdCBuZWVkcyB0byBiZSBtYXBwZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5Gb3JtYXR0ZWRPYmplY3Qoa2V5cywgdHlwZSA9ICcnLCBjb25maWdUeXBlID0gJycpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICBjb25zdCBhcGlTdG9yZURhdGEgPSB0aGlzLmdldEFwaURhdGEoKTtcclxuICAgICAgICBjb25zdCBhcHBTdG9yZURhdGEgPSB0aGlzLmdldEFwcERhdGEoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBmaWx0ZXJpbmcgYW5kIHNlcGFyYXRpbmcgYXBwIGNvbmZpZyBrZXlzIGFuZCBhcGkga2V5c1xyXG4gICAgICAgIGNvbnN0IFthcHBDb25maWdLZXlzLCBhcGlLZXlzXSA9IGtleXMucmVkdWNlKChhY2MsIGtleSkgPT4geyBhY2Nba2V5LnN0YXJ0c1dpdGgoJyVhcHBjb25maWcnKSA/IDAgOiAxXS5wdXNoKGtleSk7IHJldHVybiBhY2M7IH0sIFtbXSwgW11dKTtcclxuICAgICAgICBcclxuICAgICAgICBrZXlzID0gYXBpS2V5cztcclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBhcHBDb25maWdLZXlzIGlmIHByZXNlbnRcclxuICAgICAgICBpZiAoYXBwQ29uZmlnS2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBhcHAgY29uZmlnIGtleXMgbG9naWMgaGVyZVxyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NBcHBDb25maWdLZXlzKGFwcENvbmZpZ0tleXMsIG9iaik7XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgIGlmIChjb25maWdUeXBlID09PSAncmVxdWVzdEJvZHknKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFsbEFwcFN0b3JlRGF0YSA9IHRoaXMuZ2V0QXBwRGF0YShmYWxzZSk7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBPUiBjb25kaXRpb25zIGluIGtleXNcclxuICAgICAgICAgICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJ3x8JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcktleXMgPSBrZXkuc3BsaXQoJ3x8JykubWFwKGsgPT4gay50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yS2V5RGF0YSA9IHRoaXMuZ2V0TXVsdGlwbGVBcGlzRGF0YUJ5S2V5cyhhbGxBcHBTdG9yZURhdGEsIG9yS2V5cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbGF0ZXN0S2V5RGF0YSA9IHRoaXMuZ2V0TGF0ZXN0VmFsdWUob3JLZXlEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobGF0ZXN0S2V5RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGEgbGF0ZXN0IGtleSBkYXRhLCB1c2UgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmhhbmRsZUtleShsYXRlc3RLZXlEYXRhLmtleSwgYXBpU3RvcmVEYXRhLCBhcHBTdG9yZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7IC8vIFNraXAgdG8gbmV4dCBrZXkgc2luY2Ugd2UgZm91bmQgYSB2YWx1ZSAgICBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5oYW5kbGVLZXkoa2V5LCBhcGlTdG9yZURhdGEsIGFwcFN0b3JlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIE9iamVjdC5rZXlzKHZhbHVlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5hc3NpZ24ob2JqLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5oYW5kbGVLZXkoa2V5LCBhcGlTdG9yZURhdGEsIGFwcFN0b3JlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUgJiYgT2JqZWN0LmtleXModmFsdWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3QuYXNzaWduKG9iaiwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiB0aGlzLmZsYXRBbmROZXN0VXRpbC5jcmVhdGVOZXN0ZWRPYmplY3Qob2JqLCB0eXBlKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzQXBwQ29uZmlnS2V5cyhhcHBDb25maWdLZXlzLCBvYmopIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBhcHBDb25maWdLZXlzKSB7XHJcbiAgICAgICAgICAgIC8vIEV4dHJhY3QgdGhlIHBhcnRzOiAlYXBwY29uZmlnIyNhcHBfbmFtZTphcHBsaWNhdGlvbl9uYW1lXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpZ1BhcnQgPSBrZXkucmVwbGFjZSgnJWFwcGNvbmZpZyMjJywgJycpO1xyXG4gICAgICAgICAgICBjb25zdCBbc3RvcmFnZUtleSwgdGFyZ2V0UHJvcGVydHldID0gY29uZmlnUGFydC5zcGxpdCgnOicpO1xyXG4gICAgICAgICAgICAvLyBHZXQgdmFsdWUgZnJvbSBsb2NhbFN0b3JhZ2VcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KTtcclxuICAgICAgICAgICAgaWYgKHN0b3JhZ2VLZXkgJiYgdGFyZ2V0UHJvcGVydHkpIHtcclxuICAgICAgICAgICAgICAgIG9ialt0YXJnZXRQcm9wZXJ0eV0gPSB2YWx1ZSA/IHZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoc3RvcmFnZUtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgb25seSBzdG9yYWdlS2V5IGlzIHByZXNlbnQsIHVzZSBpdCBhcyB0aGUga2V5XHJcbiAgICAgICAgICAgICAgICBvYmpbc3RvcmFnZUtleV0gPSB2YWx1ZSA/IHZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBoYW5kbGVLZXkoa2V5LCBhcGlTdG9yZURhdGEsIGFwcFN0b3JlRGF0YSkge1xyXG4gICAgICAgIGNvbnN0IHNwbGl0ID0ga2V5LnNwbGl0KCcjIycpO1xyXG4gICAgICAgIGNvbnN0IGNvbmZpZ0tleXMgPSBrZXkuaW5jbHVkZXMoJyMjJykgPyBzcGxpdFswXSArICcjIycgKyBzcGxpdFsxXSA6IGtleTtcclxuICAgICAgICBjb25zdCBpc09wdGlvbmFsID0gKHNwbGl0ICYmIHNwbGl0Lmxlbmd0aCA+IDMgJiYgc3BsaXRbM10gPT09ICdvcHRpb25hbCcpO1xyXG4gICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICBpZiAoY29uZmlnS2V5cy5pbmNsdWRlcygnKChwYXJhbXMpKScpKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRBcGlLZXkgPSAnJ1xyXG4gICAgICAgICAgICBsZXQgYXBpS2V5ID0gJydcclxuICAgICAgICAgICAgaWYgKGNvbmZpZ0tleXMuaW5jbHVkZXMoJ3x8JykgJiYgY29uZmlnS2V5cy5zcGxpdCgnfHwnKS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldEFwaUtleSA9IGNvbmZpZ0tleXMuc3BsaXQoJ3x8JylbMF07XHJcbiAgICAgICAgICAgICAgICBhcGlLZXkgPSBjb25maWdLZXlzLnNwbGl0KCd8fCcpWzFdLnN1YnN0cmluZygxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXRBcGlLZXkgPSBhcGlLZXkgPSBjb25maWdLZXlzLnN1YnN0cmluZygxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb2JqW3RhcmdldEFwaUtleV0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UucGFyYW1zW2FwaUtleV07XHJcbiAgICAgICAgfSBlbHNlIGlmIChjb25maWdLZXlzLmluY2x1ZGVzKCdbKl0nKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZWdleCA9IGNvbmZpZ0tleXMuc3BsaXQoJ1sqXScpLmpvaW4oJ1xcXFxbXFxcXGQrXFxcXF0nKTtcclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGRhdGEgaW4gYXBwRGF0YSBTdG9yZVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXMoYXBwU3RvcmVEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YUtleS5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW3RoaXMuZ2V0S2V5KHJlc3VsdFswXSldID0gdGhpcy5yZXR1cm5QYXJzZWRWYWx1ZXMoc3BsaXRbMl0sIGFwcFN0b3JlRGF0YVtyZXN1bHRbMF1dLCBpc09wdGlvbmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGRhdGEgaW4gYXBpIGRhdGEgc3RvcmVcclxuICAgICAgICAgICAgZm9yIChjb25zdCBkYXRhS2V5IG9mIE9iamVjdC5rZXlzKGFwaVN0b3JlRGF0YVswXSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGRhdGFLZXkubWF0Y2gobmV3IFJlZ0V4cChyZWdleCkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBjb25maWdLZXlzIHRoYXQgbmVlZHMgdG8gYmUgcHVzaGVkIGFscmVhZHkgZXhpdHMgaW4gdGhlIG9iamVjdFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaUtleSA9IHRoaXMuZ2V0S2V5KHJlc3VsdFswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFPYmplY3Qua2V5cyhvYmopLmluY2x1ZGVzKGFwaUtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2FwaUtleV0gPSB0aGlzLnJldHVyblBhcnNlZFZhbHVlcyhzcGxpdFsyXSwgYXBpU3RvcmVEYXRhWzBdW3Jlc3VsdFswXV0sIGlzT3B0aW9uYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoY29uZmlnS2V5cy5pbmNsdWRlcygneyp9JykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVnZXggPSBjb25maWdLZXlzLnNwbGl0KCd7Kn0nKS5qb2luKCcuKycpO1xyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgZGF0YSBpbiBhcHBEYXRhIFN0b3JlXHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZGF0YUtleSBvZiBPYmplY3Qua2V5cyhhcHBTdG9yZURhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBkYXRhS2V5Lm1hdGNoKG5ldyBSZWdFeHAocmVnZXgpKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbdGhpcy5nZXRLZXkocmVzdWx0WzBdKV0gPSB0aGlzLnJldHVyblBhcnNlZFZhbHVlcyhzcGxpdFsyXSwgYXBwU3RvcmVEYXRhW3Jlc3VsdFswXV0sIGlzT3B0aW9uYWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgZGF0YSBpbiBhcGkgZGF0YSBzdG9yZVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGFLZXkgb2YgT2JqZWN0LmtleXMoYXBpU3RvcmVEYXRhWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZGF0YUtleS5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGNvbmZpZ0tleXMgdGhhdCBuZWVkcyB0byBiZSBwdXNoZWQgYWxyZWFkeSBleGl0cyBpbiB0aGUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpS2V5ID0gdGhpcy5nZXRLZXkocmVzdWx0WzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIU9iamVjdC5rZXlzKG9iaikuaW5jbHVkZXMoYXBpS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpbYXBpS2V5XSA9IHRoaXMucmV0dXJuUGFyc2VkVmFsdWVzKHNwbGl0WzJdLCBhcGlTdG9yZURhdGFbMF1bcmVzdWx0WzBdXSwgaXNPcHRpb25hbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgYXBpS2V5ID0gdGhpcy5nZXRLZXkoY29uZmlnS2V5cyk7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIGNvbmZpZ0tleXMgZXhpc3RzIGluIHRoZSBhcHAgZGF0YSBzdG9yZVxyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXBwU3RvcmVEYXRhKS5pbmNsdWRlcyhjb25maWdLZXlzKSkge1xyXG4gICAgICAgICAgICAgICAgb2JqW2FwaUtleV0gPSB0aGlzLnJldHVyblBhcnNlZFZhbHVlcyhzcGxpdFsyXSwgYXBwU3RvcmVEYXRhW2NvbmZpZ0tleXNdLCBpc09wdGlvbmFsKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhhcGlTdG9yZURhdGFbMF0pLmluY2x1ZGVzKGNvbmZpZ0tleXMpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBjb25maWdLZXlzIGV4aXN0cyBpbiBhcGkgZGF0YSBzdG9yZSB3aGVyZSBrZXlzIGFyZSBoYXMgbWFwcGVkXHJcbiAgICAgICAgICAgICAgICBvYmpbYXBpS2V5XSA9IHRoaXMucmV0dXJuUGFyc2VkVmFsdWVzKHNwbGl0WzJdLCBhcGlTdG9yZURhdGFbMF1bY29uZmlnS2V5c10sIGlzT3B0aW9uYWwpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKGFwaVN0b3JlRGF0YVsxXSkuaW5jbHVkZXMoYXBpS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgY29uZmlnS2V5cyBleGlzdHMgaW4gYXBpIGRhdGEgc3RvcmUgd2hlcmUga2V5cyBhcmUgbm90IGhhc2ggbWFwcGVkXHJcbiAgICAgICAgICAgICAgICBvYmpbYXBpS2V5XSA9IHRoaXMucmV0dXJuUGFyc2VkVmFsdWVzKHNwbGl0WzJdLCBhcGlTdG9yZURhdGFbMV1bYXBpS2V5XSwgaXNPcHRpb25hbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gZm9yIG9wdGlvbmFsIGFwaWtleVxyXG4gICAgICAgICAgICBpZiAob2JqW2FwaUtleV0gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIG9ialthcGlLZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHRha2VzIGluIGFwaSByZXNwb25zZSBhcyBhbiBvYmplY3Qgb2YgdHlwZSBFeHRlcm5hbCBSZXNwb25zZVxyXG4gICAgICogYW5kIHN0b3JlcyBhbmQgcmV0dXJucyB0aGUgbW9kaWZpZWQgb2JqZWN0IHRoYXQgY2FuIHRoZW4gYmUgc2VudCB0byB0aGVcclxuICAgICAqIGlubmVyIGZpZWxkcyBmb3IgY29uc3VtcHRpb25cclxuICAgICAqIEBwYXJhbSByZXMgYW4gb2JqZWN0IG9mIHR5cGUgRXh0ZXJuYWwgUmVzcG9uc2VcclxuICAgICAqL1xyXG4gICAgc3RvcmVSZXNwb25zZShyZXM6IEV4dGVybmFsUmVzcG9uc2UpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mbGF0QW5kTmVzdFV0aWwuZmxhdHRlbkpTT04ocmVzcG9uc2VEYXRhLnJlc3BvbnNlKTtcclxuICAgICAgICAgICAgY29uc3QgbW9kaWZpZWRPYmplY3Q6IGFueSA9IHt9O1xyXG4gICAgICAgICAgICBtb2RpZmllZE9iamVjdC5oYW5kbGVyX25hbWUgPSByZXNwb25zZURhdGEuaGFuZGxlcjtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleU5hbWUgPSByZXNwb25zZURhdGEuaGFuZGxlciArICcjIycgKyBrZXk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtrZXldID09PSBudWxsIHx8IGRhdGFba2V5XSA9PT0gJ251bGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChkYXRhW2tleV0pID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGRhdGFba2V5XSA/ICcxJyA6ICcwJztcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKCFBcnJheS5pc0FycmF5KGRhdGFba2V5XSkgfHwgdHlwZW9mIChkYXRhW2tleV0pICE9PSAnb2JqZWN0JykgJiYgdHlwZW9mIChkYXRhW2tleV0pICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlID0gU3RyaW5nKGRhdGFba2V5XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtb2RpZmllZE9iamVjdFtrZXlOYW1lXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gVW5jb21tZW50IGlmIGVuY29kaW5nIGRlY29kaW5nIGlzIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvLyBtb2RpZmllZE9iamVjdFtrZXlOYW1lXSA9IHR5cGVvZiAodmFsdWUpID09PSAnc3RyaW5nJyA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkgOiB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmpvaW5SZXNwb25zZShtb2RpZmllZE9iamVjdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YS5pZCA9IHJlcy5oYW5kbGVyO1xyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGEuYXBpVXJsID0gcmVzLmhhbmRsZXI7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YS52YWx1ZSA9IG1vZGlmaWVkT2JqZWN0O1xyXG4gICAgICAgICAgICBsZXQgc3RvcmUgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzLnN0b3JhZ2VUeXBlICYmIHJlcy5zdG9yYWdlVHlwZSAhPT0gJ3BlcnNpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICBzdG9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiAoc3RvcmUpIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIGlmIGV4aXN0cyB1cGRhdGUgZWxzZSBhZGQgYXBpIGRhdGFcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IGlzUHJlc2VudCA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcihyZXMuaGFuZGxlcik7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoaXNQcmVzZW50KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS51cGRhdGVBcGlEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBpRGF0YSkpO1xyXG4gICAgICAgICAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmFkZEFwaURhdGEoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcGlEYXRhKSk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgaWYgKHN0b3JlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJscyA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgZXhpc3RzIHVwZGF0ZSBlbHNlIGFkZCBhcGkgZGF0YVxyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNQcmVzZW50ID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKHJlcy5oYW5kbGVyKTtcclxuICAgICAgICAgICAgICAgIGxldCBpc1Nlc3Npb25TdG9yID0gKCAhbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NFRV9TVE9SRV9MT0NBVElPTicpIHx8ICggbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NFRV9TVE9SRV9MT0NBVElPTicpICYmICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX1NUT1JFX0xPQ0FUSU9OJykudG9Mb3dlckNhc2UoKSAhPSAnbG9jYWxfc3RvcmFnZScgKSkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyB2YXIgcGF0aCA9IHRoaXMuZXh0cmFjdFBhdGhQYXJhbXNGcm9tQ3VycmVudFVybCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHBhdGhbMl0gIT0gdXJscykge1xyXG4gICAgICAgICAgICAgICAgaWYoaXNTZXNzaW9uU3Rvcikge1xyXG4gICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmFkZEFwaURhdGEoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcGlEYXRhKSwgaXNTZXNzaW9uU3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdXJscyA9IHBhdGhbMl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1ByZXNlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS51cGRhdGVBcGlEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBpRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2UuYWRkQXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFwaURhdGEpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdDogRXh0ZXJuYWxSZXNwb25zZSA9IHtcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBtb2RpZmllZE9iamVjdCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6IHJlc3BvbnNlRGF0YS5oYW5kbGVyLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRfc3VjY2VzczogcmVzcG9uc2VEYXRhLmV2ZW50X3N1Y2Nlc3NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy8gcmVzdWx0LnJlc3BvbnNlID0gbW9kaWZpZWRPYmplY3Q7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd09ySGlkZUxvYWRlcihyZXNwb25zZURhdGEuaGFuZGxlciwgZmFsc2UpO1xyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiByZXMgaGFzIHN0YXR1cyBjb2RlXHJcbiAgICAgICAgICAgIGxldCByOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgaWYgKHJlcy5zdGF0dXNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICByLnN0YXR1cyA9IHJlcy5zdGF0dXNDb2RlO1xyXG4gICAgICAgICAgICAgICAgci5ib2R5ID0gZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAgICAgICAgICAgICAgIChyZXMubG9nb3V0ICE9PSB1bmRlZmluZWQpICYmIChyLmxvZ291dCA9IHJlcy5sb2dvdXQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgciA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHsgZm9ybWF0dGVkUmVzcG9uc2U6IHJlc3VsdCwgZmxhdHRlblJlc3BvbnNlOiByIH07XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgT2NjdXJyZWQuICR7ZXJyb3J9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4dHJhY3RQYXRoUGFyYW1zRnJvbUN1cnJlbnRVcmwoKSB7XHJcbiAgICAgICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcclxuICAgICAgICBjb25zdCBwYXRoU2VnbWVudHMgPSBwYXRoLnNwbGl0KCcvJykuZmlsdGVyKEJvb2xlYW4pO1xyXG4gICAgICAgIHJldHVybiBwYXRoU2VnbWVudHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byBqb2luIHRoZSByZXNwb25zZSBmcm9tIHRoZSBhcGkgZGF0YSBzdG9yZVxyXG4gICAgICogQHBhcmFtIHJlcyB0aGUgYXBpIHJlc3BvbnNlXHJcbiAgICAgKi9cclxuXHJcbiAgICBwcml2YXRlIGpvaW5SZXNwb25zZShyZXMpIHtcclxuICAgICAgICBjb25zdCBhcGlDb25maWc6IGFueSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FQSV9DT05GSUcnKSk7XHJcbiAgICAgICAgaWYgKHJlcyAmJiByZXMuaGFuZGxlcl9uYW1lICYmIGFwaUNvbmZpZ1tyZXMuaGFuZGxlcl9uYW1lXSAmJiBhcGlDb25maWdbcmVzLmhhbmRsZXJfbmFtZV0uam9pbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGpvaW5Db25maWcgb2YgYXBpQ29uZmlnW3Jlcy5oYW5kbGVyX25hbWVdLmpvaW4pIHtcclxuICAgICAgICAgICAgICAgIGlmIChqb2luQ29uZmlnLmZyb21LZXlcclxuICAgICAgICAgICAgICAgICAgICAmJiBqb2luQ29uZmlnLnRvS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgJiYgam9pbkNvbmZpZy5mcm9tS2V5Lmxlbmd0aCA9PT0gam9pbkNvbmZpZy50b0tleS5sZW5ndGhcclxuICAgICAgICAgICAgICAgICAgICAmJiBqb2luQ29uZmlnLmZyb21LZXkubGVuZ3RoID09PSBqb2luQ29uZmlnLmZyb21LZXkuZmlsdGVyKChhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluY2x1ZGVzKCdbKl0nKSAmJiBqb2luQ29uZmlnLmZyb21LZXkubGVuZ3RoID4gMCAmJiB0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUoYSkgPT09IHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZShqb2luQ29uZmlnLmZyb21LZXlbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgfSkubGVuZ3RoXHJcbiAgICAgICAgICAgICAgICAgICAgJiYgam9pbkNvbmZpZy50b0tleS5sZW5ndGggPT09IGpvaW5Db25maWcudG9LZXkuZmlsdGVyKChhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLmluY2x1ZGVzKCdbKl0nKSAmJiB0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUoYSkgPT09IHJlcy5oYW5kbGVyX25hbWVcclxuICAgICAgICAgICAgICAgICAgICB9KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmRGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcihcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGpvaW5Db25maWcuZnJvbUtleVswXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmRGF0YSAmJiBmRGF0YS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tRGF0YSA9IHRoaXMuZmxhdEFuZE5lc3RVdGlsLmNyZWF0ZU5lc3RlZE9iamVjdChmRGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZyb21EYXRhS2V5ID0gam9pbkNvbmZpZy5mcm9tS2V5WzBdLnNwbGl0KCdbKl0nKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9EYXRhID0gdGhpcy5mbGF0QW5kTmVzdFV0aWwuY3JlYXRlTmVzdGVkT2JqZWN0KHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvRGF0YUtleSA9IGpvaW5Db25maWcudG9LZXlbMF0uc3BsaXQoJ1sqXScpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFt0SW5kZXgsIHRSb3ddIG9mIHRvRGF0YVt0b0RhdGFLZXldLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoZWRGcm9tUm93O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBmUm93IG9mIGZyb21EYXRhW2Zyb21EYXRhS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXRjaGVkRmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBqb2luQ29uZmlnLnRvS2V5Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRvS2V5ID0gam9pbkNvbmZpZy50b0tleVtpXS5zcGxpdCgnWypdLicpWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmcm9tS2V5ID0gam9pbkNvbmZpZy5mcm9tS2V5W2ldLnNwbGl0KCdbKl0uJylbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Um93W3RvS2V5XSAhPT0gZlJvd1tmcm9tS2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZEZsYWcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZEZsYWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZEZyb21Sb3cgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZSb3cpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNlbGVjdCBvZiBqb2luQ29uZmlnLnNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB0b1NlbGVjdEtleSA9IGpvaW5Db25maWcudG9LZXlbMF0ucmVwbGFjZShqb2luQ29uZmlnLnRvS2V5WzBdLnNwbGl0KCdbKl0uJylbMV0sIHNlbGVjdCkucmVwbGFjZSgnKicsIHRJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzW3RvU2VsZWN0S2V5XSA9IG1hdGNoZWRGcm9tUm93ICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtYXRjaGVkRnJvbVJvdywgc2VsZWN0KSA/IG1hdGNoZWRGcm9tUm93W3NlbGVjdF06IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byBmaWx0ZXIgSm9pbiBLZXlzIGZyb20gdGhlIGFwaSBkYXRhIGtleXNcclxuICAgICAqIEBwYXJhbSBKb2luRGF0YSB0aGUgYXBpIGRhdGEgc2V0XHJcbiAgICAgKiBAcGFyYW0gam9pbkNvbmZpZ0tleSB0aGUgYXBpIGtleSBuYW1lIG9mIHRoZSBqb2luIGNvbmZpZ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGZpbHRlckpvaW5LZXlzKEpvaW5EYXRhLCBqb2luQ29uZmlnS2V5KSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSBqb2luQ29uZmlnS2V5LnJlcGxhY2UoJyonLCAnXFxcXGQrJylcclxuICAgICAgICAucmVwbGFjZSgvXFxbL2csICdcXFxcWycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXS9nLCAnXFxcXF0nKTtcclxuICAgICAgICBjb25zdCBkYXRhSm9pbktleSA9IE9iamVjdC5rZXlzKEpvaW5EYXRhKS5maWx0ZXIoKGtleSkgPT4ga2V5Lm1hdGNoKG5ldyBSZWdFeHAocmVnZXgpKSlcclxuICAgICAgICAucmVkdWNlKChjdXIsIGtleSkgPT4geyByZXR1cm4gT2JqZWN0LmFzc2lnbihjdXIsIHsgW2tleV06IEpvaW5EYXRhW2tleV0gfSl9LCB7fSk7XHJcbiAgICAgICAgcmV0dXJuIGRhdGFKb2luS2V5O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdG8gZmV0Y2ggdGhlIHJlc3BvbnNlIGZyb20gdGhlIGFwaSBkYXRhIHN0b3JlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgYXBpIGtleSBuYW1lIG9mIHRoZSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGZldGNoUmVzcG9uc2UobmFtZSkge1xyXG4gICAgICAgIGNvbnN0IGFwaVN0b3JlRGF0YSA9IHRoaXMuZ2V0QXBpRGF0YSgpO1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBoYXNoZWQga2V5IHZhbHVlIHN0b3JlIGluY2x1ZGVzIG5hbWVcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoYXBpU3RvcmVEYXRhWzBdKS5pbmNsdWRlcyhuYW1lKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBpU3RvcmVEYXRhWzBdW25hbWVdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBuYW1lIGluY2x1ZGVzICMjIGFuZFxyXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhbnkgZGF0YSBpbiB0aGUgYXBpIGRhdGEgc3RvcmUgdGhhdFxyXG4gICAgICAgICAgICAvLyBtYXRjaGVzIHdpdGggdGhlIGhhbmRsZXIgbmFtZSBvciB0aGUgYXBpIGtleVxyXG4gICAgICAgICAgICBpZiAobmFtZS5pbmNsdWRlcygnIyMnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBpRGF0YUJ5QXBpS2V5ID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlBcGlLZXkobmFtZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYXBpRGF0YUJ5QXBpS2V5ID8gYXBpRGF0YUJ5QXBpS2V5LnZhbHVlIDogdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGFwaVN0b3JlRGF0YVsxXSkuaW5jbHVkZXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXBpU3RvcmVEYXRhWzFdW25hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgcGFyc2VkIHZhbHVlcyBvciB1bmRlZmluZWQgaWYgdmFsdWUgZG9lc24ndCBleGlzdFxyXG4gICAgICogQHBhcmFtIHR5cGUgdGhlIHR5cGUgdG8gd2hpY2ggdGhlIHZhbHVlIG5lZWRzIHRvIGJlIHBhcnNlZFxyXG4gICAgICogQHBhcmFtIHZhbHVlIHRoZSBzdG9yZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGlzT3B0aW9uYWwgaW5kaWNhdGVzIHRoZSByZXN1bHQgY2FuIGJlIG9wdGlvbmFsIGFsbG93aW5nIHRvIHJldHVybiB1bmRlZmluZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5QYXJzZWRWYWx1ZXModHlwZTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBpc09wdGlvbmFsOiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAnaW50ZWdlcic6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKSB8fCAoaXNPcHRpb25hbCA/IHVuZGVmaW5lZCA6IDApO1xyXG4gICAgICAgICAgICBjYXNlICdudW1iZXInOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFyc2VkVmFsdWUgPSB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnXHJcbiAgICAgICAgICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHZhbHVlLnJlcGxhY2UoLywvZywgJycpKVxyXG4gICAgICAgICAgICAgICAgICAgIDogcGFyc2VGbG9hdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VkVmFsdWUgfHwgKGlzT3B0aW9uYWwgPyB1bmRlZmluZWQgOiAwKTtcclxuICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUgPT09ICdzdHJpbmcnKSA/IHZhbHVlLnRvTG93ZXJDYXNlKCkgOiAnJztcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmJvb2xlYW5WYWx1ZXNbdmFsdWVdID8/IChpc09wdGlvbmFsID8gdW5kZWZpbmVkIDogZmFsc2UpOyAvLyA/PyBhbGxvd3MgdG8gcHJlc2VydmUgZmFsc2UgYXMgYSB2YWxpZCB2YWx1ZVxyXG4gICAgICAgICAgICBjYXNlICdvcHRpb25hbCc6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgICAgICAgICAgLy8gVW5jb21tZW50IHdoZW4gZW5jb2RpbmcgY29kZSBpcyByZXF1aXJlZFxyXG4gICAgICAgICAgICAvLyBpZiAoIUFycmF5LmlzQXJyYXkodmFsdWUpICYmIHR5cGVvZiAodmFsdWUpID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byBlbWl0IHRoZSBpZiB0aGUgbG9hZGluZyBpcyBuZWVkZWQgdG8gbm90XHJcbiAgICAgKiBAcGFyYW0gaGFuZGxlck5hbWUgZXZlbnQgaGFuZGxlciBvciBleHRlcm5hbCBhcGkgb3IgYXBpX2luZm9ybWF0aW9uXHJcbiAgICAgKiBAcGFyYW0gbG9hZGluZyB0cnVlIG9yIGZhbHNlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2hvd09ySGlkZUxvYWRlcihoYW5kbGVyTmFtZTogc3RyaW5nLCBsb2FkaW5nOiBib29sZWFuKSB7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmN1c3RvbVNlY3Rpb25Mb2FkZXJFbWl0dGVyLmVtaXQoe1xyXG4gICAgICAgICAgICBoYW5kbGVyTmFtZSxcclxuICAgICAgICAgICAgbG9hZGluZ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbm9ybWFsIGZ1bmN0aW9uIHRvIGdldCB0aGUgYXBpIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgcGFyYW1ldGVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZ2V0S2V5KG5hbWUpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tb25VdGlsLmdldEFQSUtleShuYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG5vcm1hbCBmdW5jdGlvbiB0byBnZXQgdGhlIGhhbmRsZXIgbmFtZVxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIHBhcmFtZXRlclxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGdldEhhbmRsZXIobmFtZSkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUobmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0dGVyIHNldHRlcnNcclxuXHJcbiAgICBnZXQgY29uZmlnKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmFwaUNvbmZpZztcclxuICAgIH1cclxuICAgIHNldCBjb25maWcodmFsdWUpIHtcclxuICAgICAgICB0aGlzLmFwaUNvbmZpZyA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFeHRlcm5hbFJlc3BvbnNlIHtcclxuICAgIGhhbmRsZXI6IHN0cmluZztcclxuICAgIHJlc3BvbnNlOiBhbnk7XHJcbiAgICBldmVudF9zdWNjZXNzOiBib29sZWFuO1xyXG4gICAgc3RvcmFnZVR5cGU/OiBzdHJpbmc7XHJcbiAgICBzdGF0dXNDb2RlPzogbnVtYmVyO1xyXG4gICAgbG9nb3V0PzogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBFeHRlcm5hbFJlcXVlc3Qge1xyXG4gICAgaGFuZGxlcjogc3RyaW5nO1xyXG4gICAgcmVxdWVzdEJvZHk6IGFueTtcclxuICAgIHVybFBhcmFtczogYW55O1xyXG4gICAgcXVlcnlQYXJhbXM6IGFueTtcclxuICAgIGhlYWRlcnM6IGFueTtcclxuICAgIHByaW1hcnlEYXRhOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSW50ZXJuYWxSZXF1ZXN0IHtcclxuICAgIGhhbmRsZXI6IHN0cmluZztcclxuICAgIHJlcXVlc3RCb2R5OiBhbnk7XHJcbiAgICB1cmxQYXJhbXM6IGFueTtcclxuICAgIHF1ZXJ5UGFyYW1zOiBhbnk7XHJcbiAgICBoZWFkZXJzOiBhbnk7XHJcbiAgICB1cmw6IHN0cmluZztcclxuICAgIG1ldGhvZFR5cGU6IHN0cmluZztcclxuICAgIHJlcXVlc3RUeXBlOiBzdHJpbmc7XHJcbiAgICBpc0VTQjogYm9vbGVhbjtcclxuICAgIGhhc0F1dGhvcmlzYXRpb246IGJvb2xlYW47XHJcbiAgICBzdG9yYWdlVHlwZTogc3RyaW5nO1xyXG4gICAgdXNlVUlEOiBib29sZWFuO1xyXG4gICAgaXNFdmVudDogYm9vbGVhbjtcclxuICAgIGRvd25sb2FkVHlwZTogc3RyaW5nO1xyXG4gICAgZXNiUmVxdWVzdEJvZHk6IGFueTtcclxuICAgIHByaW1hcnlEYXRhOiBhbnlcclxufVxyXG4iXX0=