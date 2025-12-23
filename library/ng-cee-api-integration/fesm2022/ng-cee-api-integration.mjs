import * as i0 from '@angular/core';
import { Injectable, NgModule } from '@angular/core';
import { forkJoin } from 'rxjs';
import { saveAs } from 'file-saver';
import { jwtDecode } from 'jwt-decode';
import * as i1 from '@ng/cee-core';
import * as i2 from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';

class NgCeeApiIntegrationService {
    sharedEventsService;
    eventResponseHandler;
    http;
    downloadType = '';
    MimeTypeMap = {
        csv: 'text/csv',
        excel: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
        pdf: 'application/pdf'
    };
    subscription = {};
    constructor(sharedEventsService, eventResponseHandler, http) {
        this.sharedEventsService = sharedEventsService;
        this.eventResponseHandler = eventResponseHandler;
        this.http = http;
    }
    init() {
        this.subscription['apiIntegrationEmitter'] = this.sharedEventsService.apiIntegrationEventHandlerEmitter.subscribe(apiConfigData => {
            // console.log(apiConfigData);
            const response = {
                handler: apiConfigData.handler,
                response: null,
                event_success: true,
                storageType: apiConfigData.storageType,
                statusCode: 0
            };
            this.downloadType = apiConfigData.downloadType;
            this.ceeApiService(apiConfigData).subscribe(res => {
                // console.log('check if api config data has download Type and then check type');
                if (this.downloadType) {
                    const blob = new Blob([res.body], { type: this.MimeTypeMap[this.downloadType] });
                    const fileName = `File_${Math.floor(Date.now() / 1000)}.${this.downloadType.toLowerCase()}`;
                    saveAs(blob, fileName); // save the file
                }
                this.emitDataToCee(response, this.downloadType ? { body: {}, status: 200 } : res, apiConfigData, true);
            }, error => {
                console.error(`Error Occurred for handler: ${apiConfigData.handler} and ${JSON.stringify(error)}`);
                if (apiConfigData.hasAuthorisation && localStorage.getItem('CEE_OIDC') === '1' && error.status === 401) {
                    // check if the hasAuthorization is true for this event and CEE_OIDC 1 and status code is 401
                    // then emit the oidcDataEmitter to refresh the token and revalidate and again hit the api with all the data
                    const obj = {
                        oldApiConfigData: apiConfigData
                    };
                    this.sharedEventsService.apiUnauthorizedEmitter.emit(obj);
                }
                else {
                    this.emitDataToCee(response, error, apiConfigData, false);
                }
            });
        });
        this.subscription['apiIntegrationParallelEmitter'] = this.sharedEventsService.apiIntegrationParallelEventHandlerEmitter.subscribe(apiConfigDataArr => {
            // console.log('Parallel API Integration Handler: ', apiConfigDataArr);
            // **************** Parallel API Response Handling ******************
            var handlerArr = apiConfigDataArr.map(config => config.handler);
            this.ceeParallelApiService(apiConfigDataArr).subscribe({
                next: (handlerArr) => {
                    handlerArr.forEach((res, index) => {
                        let response = {
                            handler: apiConfigDataArr.map(config => config.handler)[index],
                            response: null,
                            event_success: true,
                            storageType: apiConfigDataArr[index].storageType,
                            statusCode: 0
                        };
                        apiConfigDataArr[index].isEvent = false; // default isEvent to false
                        this.emitDataToCee(response, handlerArr[index], apiConfigDataArr[index], true);
                        // console.log( response.handler, ' :handler response Data: ', handlerArr[index]);
                    });
                },
                error: (err) => {
                    console.error('Error in one of the requests:', err);
                }
            });
        });
    }
    /**
     * function that emits back the api response for a particular api
     * @param response the response object
     * @param res the response
     * @param isEvent if the handler is called from an event
     * @param success if the api res is success
     */
    emitDataToCee(response, res, apiConfigData, success) {
        response.statusCode = res.status;
        response.response = res.body || res.error;
        response.event_success = success;
        /* ESB API INTIGRATION */
        if (apiConfigData.isESB && response.response.api_response) {
            response.response = JSON.parse(response.response.api_response);
        }
        /* ESB API INTIGRATION (END) */
        if (apiConfigData.isEvent) {
            this.sharedEventsService.eventResponseSubscriber.emit(response);
        }
        else {
            this.eventResponseHandler.emitAPIDATA(response);
        }
    }
    /**
     * CEE internal API Service that hits the api
     * @param apiConfigData the api config data for the handler
     * via internal libraries of CEE
     */
    ceeApiService(apiConfigData) {
        //
        const headers = apiConfigData.headers;
        // set header request type
        switch (apiConfigData.requestType) {
            case 'application/json':
            case 'multipart/form-data':
            case 'application/x-www-form-urlencoded':
            case 'text/plain':
                headers['Content-Type'] = apiConfigData.requestType;
                break;
            default:
                console.error(`Invalid request type in returnHeaders: ${apiConfigData.requestType}`);
        }
        let apiURL = apiConfigData.url;
        // set url param
        for (const key of Object.keys(apiConfigData.urlParams)) {
            if (apiURL.includes(`{${key}}`)) {
                apiURL = apiURL.split(`{${key}}`).join(apiConfigData.urlParams[key]);
            }
        }
        // set query param
        // CI-1397 >> query params with [*]
        const queryParamObj = {};
        for (const key of Object.keys(apiConfigData.queryParams)) {
            if (Array.isArray(apiConfigData.queryParams[key])) {
                const keys = Object.keys(apiConfigData.queryParams[key][0]);
                for (const q of keys) {
                    queryParamObj[key + '.' + q] = '[' + apiConfigData.queryParams[key].map(a => a[q]) + ']';
                }
            }
            else {
                queryParamObj[key] = apiConfigData.queryParams[key];
            }
        }
        for (const key of Object.keys(queryParamObj)) {
            if (apiURL.includes(`{${key}}`)) {
                apiURL = apiURL.split(`{${key}}`).join(queryParamObj[key]);
            }
        }
        // set request body
        let requestBody = this.formRequestBody(apiConfigData.requestBody, apiConfigData.requestType);
        /* ESB API INTIGRATION */
        if (apiConfigData.isESB) {
            requestBody = {
                api_request: JSON.stringify(requestBody)
            };
            if (apiConfigData.esbRequestBody) {
                requestBody = Object.assign(requestBody, apiConfigData.esbRequestBody);
            }
        }
        /* ESB API INTIGRATION (END) */
        // check downloadType if valid download Type then add responseType as blob
        switch (apiConfigData.methodType.toUpperCase()) {
            case 'POST':
            case 'PUT':
            case 'PATCH':
                return this.http[apiConfigData.methodType.toLowerCase()](apiURL, requestBody, this.downloadType ? {
                    headers,
                    observe: 'response',
                    responseType: 'blob'
                }
                    : { headers, observe: 'response' });
                break;
            case 'DELETE':
                return this.http[apiConfigData.methodType.toLowerCase()](apiURL, this.downloadType ? {
                    headers,
                    observe: 'response',
                    responseType: 'blob',
                    body: requestBody
                }
                    : { headers, observe: 'response', body: requestBody });
                break;
            case 'GET':
                return this.http[apiConfigData.methodType.toLowerCase()](apiURL, this.downloadType ? {
                    headers,
                    observe: 'response',
                    responseType: 'blob'
                }
                    : { headers, observe: 'response' });
                break;
        }
    }
    getCookie(name) {
        const ca = document.cookie.split(';');
        const caLen = ca.length;
        const cookieName = `${name}=`;
        let c;
        for (let i = 0; i < caLen; i += 1) {
            c = ca[i].replace(/^\s+/g, '');
            if (c.indexOf(cookieName) === 0) {
                return c.substring(cookieName.length, c.length);
            }
        }
        return '';
    }
    ceeParallelApiService(apiConfigDataArr) {
        // Create an array to hold all HTTP requests
        var httpObjArr = [];
        apiConfigDataArr.forEach(apiConfigData => {
            // ################## Parallel Api Request Processing ####################
            var headers = apiConfigData.headers;
            // set header request type
            switch (apiConfigData.requestType) {
                case 'application/json':
                case 'multipart/form-data':
                case 'application/x-www-form-urlencoded':
                case 'text/plain':
                    headers['Content-Type'] = apiConfigData.requestType;
                    break;
                default:
                    console.error(`Invalid request type in returnHeaders: ${apiConfigData.requestType}`);
            }
            const accessToken = `${this.getCookie('headerPayload')}.${this.getCookie('signature')}`;
            const decoded = jwtDecode(accessToken);
            headers.Authorization = `Bearer ${accessToken}`;
            let apiURL = apiConfigData.url;
            // set url param
            for (const key of Object.keys(apiConfigData.urlParams)) {
                if (apiURL.includes(`{${key}}`)) {
                    apiURL = apiURL.split(`{${key}}`).join(apiConfigData.urlParams[key]);
                }
            }
            // set query param
            const queryParamObj = {};
            for (const key of Object.keys(apiConfigData.queryParams)) {
                if (Array.isArray(apiConfigData.queryParams[key])) {
                    const keys = Object.keys(apiConfigData.queryParams[key][0]);
                    for (const q of keys) {
                        queryParamObj[key + '.' + q] = '[' + apiConfigData.queryParams[key].map(a => a[q]) + ']';
                    }
                }
                else {
                    queryParamObj[key] = apiConfigData.queryParams[key];
                }
            }
            for (const key of Object.keys(queryParamObj)) {
                if (apiURL.includes(`{${key}}`)) {
                    apiURL = apiURL.split(`{${key}}`).join(queryParamObj[key]);
                }
            }
            // set request body
            let requestBody = this.formRequestBody(apiConfigData.requestBody, apiConfigData.requestType);
            /* ESB API INTIGRATION */
            if (apiConfigData.isESB) {
                requestBody = {
                    api_request: JSON.stringify(requestBody)
                };
                if (apiConfigData.esbRequestBody) {
                    requestBody = Object.assign(requestBody, apiConfigData.esbRequestBody);
                }
            }
            /* ESB API INTIGRATION (END) */
            // check downloadType if valid download Type then add responseType as blob
            switch (apiConfigData.methodType.toUpperCase()) {
                case 'POST':
                case 'PUT':
                case 'PATCH':
                    httpObjArr.push(this.http[apiConfigData.methodType.toLowerCase()](apiURL, requestBody, this.downloadType ? {
                        headers,
                        observe: 'response',
                        responseType: 'blob'
                    }
                        : { headers, observe: 'response' }));
                    break;
                case 'DELETE':
                    httpObjArr.push(this.http[apiConfigData.methodType.toLowerCase()](apiURL, this.downloadType ? {
                        headers,
                        observe: 'response',
                        responseType: 'blob',
                        body: requestBody
                    }
                        : { headers, observe: 'response', body: requestBody }));
                    break;
                case 'GET':
                    httpObjArr.push(this.http[apiConfigData.methodType.toLowerCase()](apiURL, this.downloadType ? {
                        headers,
                        observe: 'response',
                        responseType: 'blob'
                    }
                        : { headers, observe: 'response' }));
                    break;
            }
            // ######################################
        });
        // Parallel Api Calling using forkJoin
        // forkJoin will wait for all the requests to complete and then return an array of responses
        return forkJoin(httpObjArr);
    }
    formRequestBody(requestData, type) {
        switch (type) {
            case 'text/plain':
            case 'application/json':
                return requestData;
            case 'multipart/form-data':
                const fd = new FormData();
                for (const key of Object.keys(requestData)) {
                    fd.append(key, requestData[key]);
                }
                return fd;
            case 'application/x-www-form-urlencoded':
                const body = new URLSearchParams();
                for (const key of Object.keys(requestData)) {
                    body.set(key, requestData[key]);
                }
                return body.toString();
            default:
                console.error(`Invalid request type in formRequestBody: ${type}`);
                return {};
        }
    }
    destroySubscription() {
        // Called once, before the instance is destroyed.
        // Add 'implements OnDestroy' to the class.
        for (const singleSubscription in this.subscription) {
            if (this.subscription[singleSubscription]) {
                this.subscription[singleSubscription].unsubscribe();
            }
        }
    }
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeApiIntegrationService, deps: [{ token: i1.SharedEventsServiceService }, { token: i1.EventResponseHandlerService }, { token: i2.HttpClient }], target: i0.ɵɵFactoryTarget.Injectable });
    static ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeApiIntegrationService, providedIn: 'root' });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeApiIntegrationService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: 'root'
                }]
        }], ctorParameters: () => [{ type: i1.SharedEventsServiceService }, { type: i1.EventResponseHandlerService }, { type: i2.HttpClient }] });

class NgCeeApiIntegrationModule {
    static ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeApiIntegrationModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
    static ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "14.0.0", version: "17.3.12", ngImport: i0, type: NgCeeApiIntegrationModule, imports: [HttpClientModule] });
    static ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeApiIntegrationModule, imports: [HttpClientModule] });
}
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "17.3.12", ngImport: i0, type: NgCeeApiIntegrationModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [],
                    imports: [
                        HttpClientModule
                    ],
                    exports: []
                }]
        }] });

/*
 * Public API Surface of ng-cee-api-integration
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgCeeApiIntegrationModule, NgCeeApiIntegrationService };
//# sourceMappingURL=ng-cee-api-integration.mjs.map
