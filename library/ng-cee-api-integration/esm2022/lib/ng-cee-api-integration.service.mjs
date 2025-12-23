import { Injectable } from '@angular/core';
import { forkJoin } from 'rxjs';
import { saveAs } from 'file-saver';
import { jwtDecode } from 'jwt-decode';
import * as i0 from "@angular/core";
import * as i1 from "@ng/cee-core";
import * as i2 from "@angular/common/http";
export class NgCeeApiIntegrationService {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmctY2VlLWFwaS1pbnRlZ3JhdGlvbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYW5ndWxhciAxNyBsaWJyYXJ5L2VzZi1hbmd1bGFyLXdmZS1saWJyYXJ5L3Byb2plY3RzL25nLWNlZS1hcGktaW50ZWdyYXRpb24vc3JjL2xpYi9uZy1jZWUtYXBpLWludGVncmF0aW9uLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUUzQyxPQUFPLEVBQUUsUUFBUSxFQUEwQixNQUFNLE1BQU0sQ0FBQztBQUN4RCxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxZQUFZLENBQUM7Ozs7QUFJdkMsTUFBTSxPQUFPLDBCQUEwQjtJQVkzQjtJQUNBO0lBQ0E7SUFaRixZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLFdBQVcsR0FBRztRQUNwQixHQUFHLEVBQUUsVUFBVTtRQUNmLEtBQUssRUFBRSxtRUFBbUU7UUFDMUUsR0FBRyxFQUFFLGlCQUFpQjtLQUN2QixDQUFDO0lBRU0sWUFBWSxHQUFRLEVBQUUsQ0FBQztJQUUvQixZQUNVLG1CQUErQyxFQUMvQyxvQkFBaUQsRUFDakQsSUFBZ0I7UUFGaEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyx5QkFBb0IsR0FBcEIsb0JBQW9CLENBQTZCO1FBQ2pELFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDO0lBRS9CLElBQUk7UUFDRixJQUFJLENBQUMsWUFBWSxDQUFDLHVCQUF1QixDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlDQUFpQyxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRTtZQUNoSSw4QkFBOEI7WUFDOUIsTUFBTSxRQUFRLEdBQUc7Z0JBQ2YsT0FBTyxFQUFFLGFBQWEsQ0FBQyxPQUFPO2dCQUM5QixRQUFRLEVBQUUsSUFBSTtnQkFDZCxhQUFhLEVBQUUsSUFBSTtnQkFDbkIsV0FBVyxFQUFFLGFBQWEsQ0FBQyxXQUFXO2dCQUN0QyxVQUFVLEVBQUUsQ0FBQzthQUNkLENBQUM7WUFDRixJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2hELGlGQUFpRjtnQkFDakYsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO29CQUNyQixNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ2pGLE1BQU0sUUFBUSxHQUFHLFFBQVEsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLEVBQUUsRUFBRSxDQUFDO29CQUM1RixNQUFNLENBQUMsSUFBSSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCO2lCQUN6QztnQkFDRCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsYUFBYSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pHLENBQUMsRUFBRSxLQUFLLENBQUMsRUFBRTtnQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLCtCQUErQixhQUFhLENBQUMsT0FBTyxRQUFRLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNuRyxJQUFJLGFBQWEsQ0FBQyxnQkFBZ0IsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxLQUFLLEdBQUcsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLEdBQUcsRUFBRTtvQkFDdEcsNkZBQTZGO29CQUM3Riw0R0FBNEc7b0JBQzVHLE1BQU0sR0FBRyxHQUF1Qjt3QkFDOUIsZ0JBQWdCLEVBQUUsYUFBYTtxQkFDaEMsQ0FBQztvQkFDRixJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUMzRDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsYUFBYSxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUMzRDtZQUNILENBQUMsQ0FBQyxDQUFDO1FBRUwsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsWUFBWSxDQUFDLCtCQUErQixDQUFDLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLHlDQUF5QyxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ25KLHVFQUF1RTtZQUV2RSxxRUFBcUU7WUFDckUsSUFBSSxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ2hFLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLFNBQVMsQ0FBQztnQkFDckQsSUFBSSxFQUFFLENBQUMsVUFBVSxFQUFFLEVBQUU7b0JBQ25CLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7d0JBQ2hDLElBQUksUUFBUSxHQUFHOzRCQUNiLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDOzRCQUM5RCxRQUFRLEVBQUUsSUFBSTs0QkFDZCxhQUFhLEVBQUUsSUFBSTs0QkFDbkIsV0FBVyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVc7NEJBQ2hELFVBQVUsRUFBRSxDQUFDO3lCQUNkLENBQUM7d0JBQ0YsZ0JBQWdCLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxDQUFDLDJCQUEyQjt3QkFDcEUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxFQUFFLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3dCQUMvRSxrRkFBa0Y7b0JBQ3BGLENBQUMsQ0FBQyxDQUFDO2dCQUNMLENBQUM7Z0JBQ0QsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUU7b0JBQ2IsT0FBTyxDQUFDLEtBQUssQ0FBQywrQkFBK0IsRUFBRSxHQUFHLENBQUMsQ0FBQztnQkFDdEQsQ0FBQzthQUNGLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGFBQWEsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLGFBQWEsRUFBRSxPQUFPO1FBQ3pELFFBQVEsQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUNqQyxRQUFRLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxJQUFJLElBQUksR0FBRyxDQUFDLEtBQUssQ0FBQztRQUMxQyxRQUFRLENBQUMsYUFBYSxHQUFHLE9BQU8sQ0FBQztRQUNqQyx5QkFBeUI7UUFDekIsSUFBSSxhQUFhLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxFQUFFO1lBQ3pELFFBQVEsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ2hFO1FBQ0QsK0JBQStCO1FBQy9CLElBQUksYUFBYSxDQUFDLE9BQU8sRUFBRTtZQUN6QixJQUFJLENBQUMsbUJBQW1CLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pFO2FBQU07WUFDTCxJQUFJLENBQUMsb0JBQW9CLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pEO0lBQ0gsQ0FBQztJQUVEOzs7O09BSUc7SUFDSyxhQUFhLENBQUMsYUFBYTtRQUNqQyxFQUFFO1FBQ0YsTUFBTSxPQUFPLEdBQUcsYUFBYSxDQUFDLE9BQU8sQ0FBQztRQUN0QywwQkFBMEI7UUFDMUIsUUFBUSxhQUFhLENBQUMsV0FBVyxFQUFFO1lBQ2pDLEtBQUssa0JBQWtCLENBQUM7WUFDeEIsS0FBSyxxQkFBcUIsQ0FBQztZQUMzQixLQUFLLG1DQUFtQyxDQUFDO1lBQ3pDLEtBQUssWUFBWTtnQkFDZixPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQztnQkFDcEQsTUFBTTtZQUNSO2dCQUNFLE9BQU8sQ0FBQyxLQUFLLENBQUMsMENBQTBDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3hGO1FBRUQsSUFBSSxNQUFNLEdBQUcsYUFBYSxDQUFDLEdBQUcsQ0FBQztRQUUvQixnQkFBZ0I7UUFDaEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUN0RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQzthQUN0RTtTQUNGO1FBRUQsa0JBQWtCO1FBQ2xCLG1DQUFtQztRQUNuQyxNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7UUFDekIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtZQUN4RCxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUNqRCxNQUFNLElBQUksR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUQsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLGFBQWEsQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztpQkFDMUY7YUFDRjtpQkFBTTtnQkFDTCxhQUFhLENBQUMsR0FBRyxDQUFDLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQzthQUNyRDtTQUNGO1FBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzVDLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLE1BQU0sR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7YUFDNUQ7U0FDRjtRQUNELG1CQUFtQjtRQUNuQixJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzdGLHlCQUF5QjtRQUN6QixJQUFJLGFBQWEsQ0FBQyxLQUFLLEVBQUU7WUFDdkIsV0FBVyxHQUFHO2dCQUNaLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQzthQUN6QyxDQUFDO1lBQ0YsSUFBSSxhQUFhLENBQUMsY0FBYyxFQUFFO2dCQUNoQyxXQUFXLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsYUFBYSxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQ3hFO1NBQ0Y7UUFDRCwrQkFBK0I7UUFFL0IsMEVBQTBFO1FBQzFFLFFBQVEsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtZQUM5QyxLQUFLLE1BQU0sQ0FBQztZQUNaLEtBQUssS0FBSyxDQUFDO1lBQ1gsS0FBSyxPQUFPO2dCQUNWLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQ3RELE1BQU0sRUFDTixXQUFXLEVBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLE9BQU87b0JBQ1AsT0FBTyxFQUFFLFVBQVU7b0JBQ25CLFlBQVksRUFBRSxNQUFNO2lCQUNyQjtvQkFDQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7Z0JBQ3hDLE1BQU07WUFDUixLQUFLLFFBQVE7Z0JBQ1gsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDdEQsTUFBTSxFQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO29CQUNsQixPQUFPO29CQUNQLE9BQU8sRUFBRSxVQUFVO29CQUNuQixZQUFZLEVBQUUsTUFBTTtvQkFDcEIsSUFBSSxFQUFFLFdBQVc7aUJBQ2xCO29CQUNDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDO2dCQUMzRCxNQUFNO1lBQ1IsS0FBSyxLQUFLO2dCQUNSLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQ3RELE1BQU0sRUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztvQkFDbEIsT0FBTztvQkFDUCxPQUFPLEVBQUUsVUFBVTtvQkFDbkIsWUFBWSxFQUFFLE1BQU07aUJBQ3JCO29CQUNDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQztnQkFDeEMsTUFBTTtTQUNUO0lBQ0gsQ0FBQztJQUVPLFNBQVMsQ0FBQyxJQUFZO1FBQzVCLE1BQU0sRUFBRSxHQUFrQixRQUFRLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyRCxNQUFNLEtBQUssR0FBVyxFQUFFLENBQUMsTUFBTSxDQUFDO1FBQ2hDLE1BQU0sVUFBVSxHQUFHLEdBQUcsSUFBSSxHQUFHLENBQUM7UUFDOUIsSUFBSSxDQUFTLENBQUM7UUFFZCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDakMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQy9CLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNqRDtTQUNGO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDWixDQUFDO0lBRU8scUJBQXFCLENBQUMsZ0JBQWdCO1FBQzVDLDRDQUE0QztRQUM1QyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDcEIsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQ3ZDLDBFQUEwRTtZQUMxRSxJQUFJLE9BQU8sR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDO1lBQ3BDLDBCQUEwQjtZQUMxQixRQUFRLGFBQWEsQ0FBQyxXQUFXLEVBQUU7Z0JBQ2pDLEtBQUssa0JBQWtCLENBQUM7Z0JBQ3hCLEtBQUsscUJBQXFCLENBQUM7Z0JBQzNCLEtBQUssbUNBQW1DLENBQUM7Z0JBQ3pDLEtBQUssWUFBWTtvQkFDZixPQUFPLENBQUMsY0FBYyxDQUFDLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQztvQkFDcEQsTUFBTTtnQkFDUjtvQkFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxhQUFhLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQzthQUN4RjtZQUVELE1BQU0sV0FBVyxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUE7WUFDdkYsTUFBTSxPQUFPLEdBQVEsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsVUFBVSxXQUFXLEVBQUUsQ0FBQztZQUVoRCxJQUFJLE1BQU0sR0FBRyxhQUFhLENBQUMsR0FBRyxDQUFDO1lBRS9CLGdCQUFnQjtZQUNoQixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN0RCxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO29CQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDdEU7YUFDRjtZQUVELGtCQUFrQjtZQUNsQixNQUFNLGFBQWEsR0FBRyxFQUFFLENBQUM7WUFDekIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDeEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtvQkFDakQsTUFBTSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVELEtBQUssTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFO3dCQUNwQixhQUFhLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7cUJBQzFGO2lCQUNGO3FCQUFNO29CQUNMLGFBQWEsQ0FBQyxHQUFHLENBQUMsR0FBRyxhQUFhLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNyRDthQUNGO1lBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFO2dCQUM1QyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFO29CQUMvQixNQUFNLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUM1RDthQUNGO1lBQ0QsbUJBQW1CO1lBQ25CLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDN0YseUJBQXlCO1lBQ3pCLElBQUksYUFBYSxDQUFDLEtBQUssRUFBRTtnQkFDdkIsV0FBVyxHQUFHO29CQUNaLFdBQVcsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQztpQkFDekMsQ0FBQztnQkFDRixJQUFJLGFBQWEsQ0FBQyxjQUFjLEVBQUU7b0JBQ2hDLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxhQUFhLENBQUMsY0FBYyxDQUFDLENBQUM7aUJBQ3hFO2FBQ0Y7WUFDRCwrQkFBK0I7WUFFL0IsMEVBQTBFO1lBQzFFLFFBQVEsYUFBYSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDOUMsS0FBSyxNQUFNLENBQUM7Z0JBQ1osS0FBSyxLQUFLLENBQUM7Z0JBQ1gsS0FBSyxPQUFPO29CQUNWLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQy9ELE1BQU0sRUFDTixXQUFXLEVBQ1gsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLE9BQU87d0JBQ1AsT0FBTyxFQUFFLFVBQVU7d0JBQ25CLFlBQVksRUFBRSxNQUFNO3FCQUNyQjt3QkFDQyxDQUFDLENBQUMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDekMsTUFBTTtnQkFDUixLQUFLLFFBQVE7b0JBQ1gsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FDL0QsTUFBTSxFQUNOLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO3dCQUNsQixPQUFPO3dCQUNQLE9BQU8sRUFBRSxVQUFVO3dCQUNuQixZQUFZLEVBQUUsTUFBTTt3QkFDcEIsSUFBSSxFQUFFLFdBQVc7cUJBQ2xCO3dCQUNDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLElBQUksRUFBRSxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQzVELE1BQU07Z0JBQ1IsS0FBSyxLQUFLO29CQUNSLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQy9ELE1BQU0sRUFDTixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsT0FBTzt3QkFDUCxPQUFPLEVBQUUsVUFBVTt3QkFDbkIsWUFBWSxFQUFFLE1BQU07cUJBQ3JCO3dCQUNDLENBQUMsQ0FBQyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxNQUFNO2FBQ1Q7WUFDRCx5Q0FBeUM7UUFDM0MsQ0FBQyxDQUFDLENBQUM7UUFDSCxzQ0FBc0M7UUFDdEMsNEZBQTRGO1FBQzVGLE9BQU8sUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFTyxlQUFlLENBQUMsV0FBZ0IsRUFBRSxJQUFZO1FBQ3BELFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxZQUFZLENBQUM7WUFDbEIsS0FBSyxrQkFBa0I7Z0JBQ3JCLE9BQU8sV0FBVyxDQUFDO1lBQ3JCLEtBQUsscUJBQXFCO2dCQUN4QixNQUFNLEVBQUUsR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO2dCQUMxQixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQzFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNsQztnQkFDRCxPQUFPLEVBQUUsQ0FBQztZQUNaLEtBQUssbUNBQW1DO2dCQUN0QyxNQUFNLElBQUksR0FBRyxJQUFJLGVBQWUsRUFBRSxDQUFDO2dCQUNuQyxLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUU7b0JBQzFDLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2lCQUNqQztnQkFDRCxPQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztZQUN6QjtnQkFDRSxPQUFPLENBQUMsS0FBSyxDQUFDLDRDQUE0QyxJQUFJLEVBQUUsQ0FBQyxDQUFDO2dCQUNsRSxPQUFPLEVBQUUsQ0FBQztTQUNiO0lBQ0gsQ0FBQztJQUVELG1CQUFtQjtRQUNqQixpREFBaUQ7UUFDakQsMkNBQTJDO1FBQzNDLEtBQUssTUFBTSxrQkFBa0IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ2xELElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO2dCQUN6QyxJQUFJLENBQUMsWUFBWSxDQUFDLGtCQUFrQixDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDckQ7U0FDRjtJQUNILENBQUM7d0dBL1ZVLDBCQUEwQjs0R0FBMUIsMEJBQTBCLGNBRnpCLE1BQU07OzRGQUVQLDBCQUEwQjtrQkFIdEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIdHRwQ2xpZW50LCBIdHRwSGVhZGVycyB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSwgRXZlbnRSZXNwb25zZUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnQG5nL2NlZS1jb3JlJztcclxuaW1wb3J0IHsgZm9ya0pvaW4sIE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgc2F2ZUFzIH0gZnJvbSAnZmlsZS1zYXZlcic7XHJcbmltcG9ydCB7IGp3dERlY29kZSB9IGZyb20gJ2p3dC1kZWNvZGUnO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ0NlZUFwaUludGVncmF0aW9uU2VydmljZSB7XHJcblxyXG4gIHByaXZhdGUgZG93bmxvYWRUeXBlID0gJyc7XHJcbiAgcHJpdmF0ZSBNaW1lVHlwZU1hcCA9IHtcclxuICAgIGNzdjogJ3RleHQvY3N2JyxcclxuICAgIGV4Y2VsOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxyXG4gICAgcGRmOiAnYXBwbGljYXRpb24vcGRmJ1xyXG4gIH07XHJcblxyXG4gIHByaXZhdGUgc3Vic2NyaXB0aW9uOiBhbnkgPSB7fTtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwcml2YXRlIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBldmVudFJlc3BvbnNlSGFuZGxlcjogRXZlbnRSZXNwb25zZUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50KSB7IH1cclxuXHJcbiAgaW5pdCgpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uWydhcGlJbnRlZ3JhdGlvbkVtaXR0ZXInXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5hcGlJbnRlZ3JhdGlvbkV2ZW50SGFuZGxlckVtaXR0ZXIuc3Vic2NyaWJlKGFwaUNvbmZpZ0RhdGEgPT4ge1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhhcGlDb25maWdEYXRhKTtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSB7XHJcbiAgICAgICAgaGFuZGxlcjogYXBpQ29uZmlnRGF0YS5oYW5kbGVyLFxyXG4gICAgICAgIHJlc3BvbnNlOiBudWxsLFxyXG4gICAgICAgIGV2ZW50X3N1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgc3RvcmFnZVR5cGU6IGFwaUNvbmZpZ0RhdGEuc3RvcmFnZVR5cGUsXHJcbiAgICAgICAgc3RhdHVzQ29kZTogMFxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmRvd25sb2FkVHlwZSA9IGFwaUNvbmZpZ0RhdGEuZG93bmxvYWRUeXBlO1xyXG4gICAgICB0aGlzLmNlZUFwaVNlcnZpY2UoYXBpQ29uZmlnRGF0YSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NoZWNrIGlmIGFwaSBjb25maWcgZGF0YSBoYXMgZG93bmxvYWQgVHlwZSBhbmQgdGhlbiBjaGVjayB0eXBlJyk7XHJcbiAgICAgICAgaWYgKHRoaXMuZG93bmxvYWRUeXBlKSB7XHJcbiAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW3Jlcy5ib2R5XSwgeyB0eXBlOiB0aGlzLk1pbWVUeXBlTWFwW3RoaXMuZG93bmxvYWRUeXBlXSB9KTtcclxuICAgICAgICAgIGNvbnN0IGZpbGVOYW1lID0gYEZpbGVfJHtNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKX0uJHt0aGlzLmRvd25sb2FkVHlwZS50b0xvd2VyQ2FzZSgpfWA7XHJcbiAgICAgICAgICBzYXZlQXMoYmxvYiwgZmlsZU5hbWUpOyAvLyBzYXZlIHRoZSBmaWxlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZW1pdERhdGFUb0NlZShyZXNwb25zZSwgdGhpcy5kb3dubG9hZFR5cGUgPyB7IGJvZHk6IHt9LCBzdGF0dXM6IDIwMCB9IDogcmVzLCBhcGlDb25maWdEYXRhLCB0cnVlKTtcclxuICAgICAgfSwgZXJyb3IgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIE9jY3VycmVkIGZvciBoYW5kbGVyOiAke2FwaUNvbmZpZ0RhdGEuaGFuZGxlcn0gYW5kICR7SlNPTi5zdHJpbmdpZnkoZXJyb3IpfWApO1xyXG4gICAgICAgIGlmIChhcGlDb25maWdEYXRhLmhhc0F1dGhvcmlzYXRpb24gJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0NFRV9PSURDJykgPT09ICcxJyAmJiBlcnJvci5zdGF0dXMgPT09IDQwMSkge1xyXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGhhc0F1dGhvcml6YXRpb24gaXMgdHJ1ZSBmb3IgdGhpcyBldmVudCBhbmQgQ0VFX09JREMgMSBhbmQgc3RhdHVzIGNvZGUgaXMgNDAxXHJcbiAgICAgICAgICAvLyB0aGVuIGVtaXQgdGhlIG9pZGNEYXRhRW1pdHRlciB0byByZWZyZXNoIHRoZSB0b2tlbiBhbmQgcmV2YWxpZGF0ZSBhbmQgYWdhaW4gaGl0IHRoZSBhcGkgd2l0aCBhbGwgdGhlIGRhdGFcclxuICAgICAgICAgIGNvbnN0IG9iajogUmVmcmVzaEFjY2Vzc1Rva2VuID0ge1xyXG4gICAgICAgICAgICBvbGRBcGlDb25maWdEYXRhOiBhcGlDb25maWdEYXRhXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmFwaVVuYXV0aG9yaXplZEVtaXR0ZXIuZW1pdChvYmopO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLmVtaXREYXRhVG9DZWUocmVzcG9uc2UsIGVycm9yLCBhcGlDb25maWdEYXRhLCBmYWxzZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnN1YnNjcmlwdGlvblsnYXBpSW50ZWdyYXRpb25QYXJhbGxlbEVtaXR0ZXInXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5hcGlJbnRlZ3JhdGlvblBhcmFsbGVsRXZlbnRIYW5kbGVyRW1pdHRlci5zdWJzY3JpYmUoYXBpQ29uZmlnRGF0YUFyciA9PiB7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKCdQYXJhbGxlbCBBUEkgSW50ZWdyYXRpb24gSGFuZGxlcjogJywgYXBpQ29uZmlnRGF0YUFycik7XHJcblxyXG4gICAgICAvLyAqKioqKioqKioqKioqKioqIFBhcmFsbGVsIEFQSSBSZXNwb25zZSBIYW5kbGluZyAqKioqKioqKioqKioqKioqKipcclxuICAgICAgdmFyIGhhbmRsZXJBcnIgPSBhcGlDb25maWdEYXRhQXJyLm1hcChjb25maWcgPT4gY29uZmlnLmhhbmRsZXIpO1xyXG4gICAgICB0aGlzLmNlZVBhcmFsbGVsQXBpU2VydmljZShhcGlDb25maWdEYXRhQXJyKS5zdWJzY3JpYmUoe1xyXG4gICAgICAgIG5leHQ6IChoYW5kbGVyQXJyKSA9PiB7XHJcbiAgICAgICAgICBoYW5kbGVyQXJyLmZvckVhY2goKHJlcywgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgbGV0IHJlc3BvbnNlID0ge1xyXG4gICAgICAgICAgICAgIGhhbmRsZXI6IGFwaUNvbmZpZ0RhdGFBcnIubWFwKGNvbmZpZyA9PiBjb25maWcuaGFuZGxlcilbaW5kZXhdLFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlOiBudWxsLFxyXG4gICAgICAgICAgICAgIGV2ZW50X3N1Y2Nlc3M6IHRydWUsXHJcbiAgICAgICAgICAgICAgc3RvcmFnZVR5cGU6IGFwaUNvbmZpZ0RhdGFBcnJbaW5kZXhdLnN0b3JhZ2VUeXBlLFxyXG4gICAgICAgICAgICAgIHN0YXR1c0NvZGU6IDBcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYXBpQ29uZmlnRGF0YUFycltpbmRleF0uaXNFdmVudCA9IGZhbHNlOyAvLyBkZWZhdWx0IGlzRXZlbnQgdG8gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5lbWl0RGF0YVRvQ2VlKHJlc3BvbnNlLCBoYW5kbGVyQXJyW2luZGV4XSwgYXBpQ29uZmlnRGF0YUFycltpbmRleF0sIHRydWUpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyggcmVzcG9uc2UuaGFuZGxlciwgJyA6aGFuZGxlciByZXNwb25zZSBEYXRhOiAnLCBoYW5kbGVyQXJyW2luZGV4XSk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGVycm9yOiAoZXJyKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBvbmUgb2YgdGhlIHJlcXVlc3RzOicsIGVycik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgLyoqXHJcbiAgICogZnVuY3Rpb24gdGhhdCBlbWl0cyBiYWNrIHRoZSBhcGkgcmVzcG9uc2UgZm9yIGEgcGFydGljdWxhciBhcGlcclxuICAgKiBAcGFyYW0gcmVzcG9uc2UgdGhlIHJlc3BvbnNlIG9iamVjdFxyXG4gICAqIEBwYXJhbSByZXMgdGhlIHJlc3BvbnNlXHJcbiAgICogQHBhcmFtIGlzRXZlbnQgaWYgdGhlIGhhbmRsZXIgaXMgY2FsbGVkIGZyb20gYW4gZXZlbnRcclxuICAgKiBAcGFyYW0gc3VjY2VzcyBpZiB0aGUgYXBpIHJlcyBpcyBzdWNjZXNzXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBlbWl0RGF0YVRvQ2VlKHJlc3BvbnNlLCByZXMsIGFwaUNvbmZpZ0RhdGEsIHN1Y2Nlc3MpIHtcclxuICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSByZXMuc3RhdHVzO1xyXG4gICAgcmVzcG9uc2UucmVzcG9uc2UgPSByZXMuYm9keSB8fCByZXMuZXJyb3I7XHJcbiAgICByZXNwb25zZS5ldmVudF9zdWNjZXNzID0gc3VjY2VzcztcclxuICAgIC8qIEVTQiBBUEkgSU5USUdSQVRJT04gKi9cclxuICAgIGlmIChhcGlDb25maWdEYXRhLmlzRVNCICYmIHJlc3BvbnNlLnJlc3BvbnNlLmFwaV9yZXNwb25zZSkge1xyXG4gICAgICByZXNwb25zZS5yZXNwb25zZSA9IEpTT04ucGFyc2UocmVzcG9uc2UucmVzcG9uc2UuYXBpX3Jlc3BvbnNlKTtcclxuICAgIH1cclxuICAgIC8qIEVTQiBBUEkgSU5USUdSQVRJT04gKEVORCkgKi9cclxuICAgIGlmIChhcGlDb25maWdEYXRhLmlzRXZlbnQpIHtcclxuICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmV2ZW50UmVzcG9uc2VTdWJzY3JpYmVyLmVtaXQocmVzcG9uc2UpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5ldmVudFJlc3BvbnNlSGFuZGxlci5lbWl0QVBJREFUQShyZXNwb25zZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBDRUUgaW50ZXJuYWwgQVBJIFNlcnZpY2UgdGhhdCBoaXRzIHRoZSBhcGlcclxuICAgKiBAcGFyYW0gYXBpQ29uZmlnRGF0YSB0aGUgYXBpIGNvbmZpZyBkYXRhIGZvciB0aGUgaGFuZGxlclxyXG4gICAqIHZpYSBpbnRlcm5hbCBsaWJyYXJpZXMgb2YgQ0VFXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjZWVBcGlTZXJ2aWNlKGFwaUNvbmZpZ0RhdGEpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG4gICAgLy9cclxuICAgIGNvbnN0IGhlYWRlcnMgPSBhcGlDb25maWdEYXRhLmhlYWRlcnM7XHJcbiAgICAvLyBzZXQgaGVhZGVyIHJlcXVlc3QgdHlwZVxyXG4gICAgc3dpdGNoIChhcGlDb25maWdEYXRhLnJlcXVlc3RUeXBlKSB7XHJcbiAgICAgIGNhc2UgJ2FwcGxpY2F0aW9uL2pzb24nOlxyXG4gICAgICBjYXNlICdtdWx0aXBhcnQvZm9ybS1kYXRhJzpcclxuICAgICAgY2FzZSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzpcclxuICAgICAgY2FzZSAndGV4dC9wbGFpbic6XHJcbiAgICAgICAgaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSBhcGlDb25maWdEYXRhLnJlcXVlc3RUeXBlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEludmFsaWQgcmVxdWVzdCB0eXBlIGluIHJldHVybkhlYWRlcnM6ICR7YXBpQ29uZmlnRGF0YS5yZXF1ZXN0VHlwZX1gKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYXBpVVJMID0gYXBpQ29uZmlnRGF0YS51cmw7XHJcblxyXG4gICAgLy8gc2V0IHVybCBwYXJhbVxyXG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYXBpQ29uZmlnRGF0YS51cmxQYXJhbXMpKSB7XHJcbiAgICAgIGlmIChhcGlVUkwuaW5jbHVkZXMoYHske2tleX19YCkpIHtcclxuICAgICAgICBhcGlVUkwgPSBhcGlVUkwuc3BsaXQoYHske2tleX19YCkuam9pbihhcGlDb25maWdEYXRhLnVybFBhcmFtc1trZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHNldCBxdWVyeSBwYXJhbVxyXG4gICAgLy8gQ0ktMTM5NyA+PiBxdWVyeSBwYXJhbXMgd2l0aCBbKl1cclxuICAgIGNvbnN0IHF1ZXJ5UGFyYW1PYmogPSB7fTtcclxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXMpKSB7XHJcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXNba2V5XSkpIHtcclxuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMoYXBpQ29uZmlnRGF0YS5xdWVyeVBhcmFtc1trZXldWzBdKTtcclxuICAgICAgICBmb3IgKGNvbnN0IHEgb2Yga2V5cykge1xyXG4gICAgICAgICAgcXVlcnlQYXJhbU9ialtrZXkgKyAnLicgKyBxXSA9ICdbJyArIGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXNba2V5XS5tYXAoYSA9PiBhW3FdKSArICddJztcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcXVlcnlQYXJhbU9ialtrZXldID0gYXBpQ29uZmlnRGF0YS5xdWVyeVBhcmFtc1trZXldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeVBhcmFtT2JqKSkge1xyXG4gICAgICBpZiAoYXBpVVJMLmluY2x1ZGVzKGB7JHtrZXl9fWApKSB7XHJcbiAgICAgICAgYXBpVVJMID0gYXBpVVJMLnNwbGl0KGB7JHtrZXl9fWApLmpvaW4ocXVlcnlQYXJhbU9ialtrZXldKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLy8gc2V0IHJlcXVlc3QgYm9keVxyXG4gICAgbGV0IHJlcXVlc3RCb2R5ID0gdGhpcy5mb3JtUmVxdWVzdEJvZHkoYXBpQ29uZmlnRGF0YS5yZXF1ZXN0Qm9keSwgYXBpQ29uZmlnRGF0YS5yZXF1ZXN0VHlwZSk7XHJcbiAgICAvKiBFU0IgQVBJIElOVElHUkFUSU9OICovXHJcbiAgICBpZiAoYXBpQ29uZmlnRGF0YS5pc0VTQikge1xyXG4gICAgICByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICBhcGlfcmVxdWVzdDogSlNPTi5zdHJpbmdpZnkocmVxdWVzdEJvZHkpXHJcbiAgICAgIH07XHJcbiAgICAgIGlmIChhcGlDb25maWdEYXRhLmVzYlJlcXVlc3RCb2R5KSB7XHJcbiAgICAgICAgcmVxdWVzdEJvZHkgPSBPYmplY3QuYXNzaWduKHJlcXVlc3RCb2R5LCBhcGlDb25maWdEYXRhLmVzYlJlcXVlc3RCb2R5KTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyogRVNCIEFQSSBJTlRJR1JBVElPTiAoRU5EKSAqL1xyXG5cclxuICAgIC8vIGNoZWNrIGRvd25sb2FkVHlwZSBpZiB2YWxpZCBkb3dubG9hZCBUeXBlIHRoZW4gYWRkIHJlc3BvbnNlVHlwZSBhcyBibG9iXHJcbiAgICBzd2l0Y2ggKGFwaUNvbmZpZ0RhdGEubWV0aG9kVHlwZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgIGNhc2UgJ1BPU1QnOlxyXG4gICAgICBjYXNlICdQVVQnOlxyXG4gICAgICBjYXNlICdQQVRDSCc6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cFthcGlDb25maWdEYXRhLm1ldGhvZFR5cGUudG9Mb3dlckNhc2UoKV0oXHJcbiAgICAgICAgICBhcGlVUkwsXHJcbiAgICAgICAgICByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgIHRoaXMuZG93bmxvYWRUeXBlID8ge1xyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgICA6IHsgaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnREVMRVRFJzpcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwW2FwaUNvbmZpZ0RhdGEubWV0aG9kVHlwZS50b0xvd2VyQ2FzZSgpXShcclxuICAgICAgICAgIGFwaVVSTCxcclxuICAgICAgICAgIHRoaXMuZG93bmxvYWRUeXBlID8ge1xyXG4gICAgICAgICAgICBoZWFkZXJzLFxyXG4gICAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJyxcclxuICAgICAgICAgICAgYm9keTogcmVxdWVzdEJvZHlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgICAgOiB7IGhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScsIGJvZHk6IHJlcXVlc3RCb2R5IH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdHRVQnOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHBbYXBpQ29uZmlnRGF0YS5tZXRob2RUeXBlLnRvTG93ZXJDYXNlKCldKFxyXG4gICAgICAgICAgYXBpVVJMLFxyXG4gICAgICAgICAgdGhpcy5kb3dubG9hZFR5cGUgPyB7XHJcbiAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgIG9ic2VydmU6ICdyZXNwb25zZScsXHJcbiAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDogeyBoZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBnZXRDb29raWUobmFtZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBjYTogQXJyYXk8c3RyaW5nPiA9IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOycpO1xyXG4gICAgY29uc3QgY2FMZW46IG51bWJlciA9IGNhLmxlbmd0aDtcclxuICAgIGNvbnN0IGNvb2tpZU5hbWUgPSBgJHtuYW1lfT1gO1xyXG4gICAgbGV0IGM6IHN0cmluZztcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNhTGVuOyBpICs9IDEpIHtcclxuICAgICAgYyA9IGNhW2ldLnJlcGxhY2UoL15cXHMrL2csICcnKTtcclxuICAgICAgaWYgKGMuaW5kZXhPZihjb29raWVOYW1lKSA9PT0gMCkge1xyXG4gICAgICAgIHJldHVybiBjLnN1YnN0cmluZyhjb29raWVOYW1lLmxlbmd0aCwgYy5sZW5ndGgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gJyc7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGNlZVBhcmFsbGVsQXBpU2VydmljZShhcGlDb25maWdEYXRhQXJyKTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuICAgIC8vIENyZWF0ZSBhbiBhcnJheSB0byBob2xkIGFsbCBIVFRQIHJlcXVlc3RzXHJcbiAgICB2YXIgaHR0cE9iakFyciA9IFtdO1xyXG4gICAgYXBpQ29uZmlnRGF0YUFyci5mb3JFYWNoKGFwaUNvbmZpZ0RhdGEgPT4ge1xyXG4gICAgICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMgUGFyYWxsZWwgQXBpIFJlcXVlc3QgUHJvY2Vzc2luZyAjIyMjIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgICB2YXIgaGVhZGVycyA9IGFwaUNvbmZpZ0RhdGEuaGVhZGVycztcclxuICAgICAgLy8gc2V0IGhlYWRlciByZXF1ZXN0IHR5cGVcclxuICAgICAgc3dpdGNoIChhcGlDb25maWdEYXRhLnJlcXVlc3RUeXBlKSB7XHJcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XHJcbiAgICAgICAgY2FzZSAnbXVsdGlwYXJ0L2Zvcm0tZGF0YSc6XHJcbiAgICAgICAgY2FzZSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzpcclxuICAgICAgICBjYXNlICd0ZXh0L3BsYWluJzpcclxuICAgICAgICAgIGhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gYXBpQ29uZmlnRGF0YS5yZXF1ZXN0VHlwZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIHJlcXVlc3QgdHlwZSBpbiByZXR1cm5IZWFkZXJzOiAke2FwaUNvbmZpZ0RhdGEucmVxdWVzdFR5cGV9YCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gYCR7dGhpcy5nZXRDb29raWUoJ2hlYWRlclBheWxvYWQnKX0uJHt0aGlzLmdldENvb2tpZSgnc2lnbmF0dXJlJyl9YFxyXG4gICAgICBjb25zdCBkZWNvZGVkOiBhbnkgPSBqd3REZWNvZGUoYWNjZXNzVG9rZW4pO1xyXG4gICAgICBoZWFkZXJzLkF1dGhvcml6YXRpb24gPSBgQmVhcmVyICR7YWNjZXNzVG9rZW59YDtcclxuXHJcbiAgICAgIGxldCBhcGlVUkwgPSBhcGlDb25maWdEYXRhLnVybDtcclxuXHJcbiAgICAgIC8vIHNldCB1cmwgcGFyYW1cclxuICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYXBpQ29uZmlnRGF0YS51cmxQYXJhbXMpKSB7XHJcbiAgICAgICAgaWYgKGFwaVVSTC5pbmNsdWRlcyhgeyR7a2V5fX1gKSkge1xyXG4gICAgICAgICAgYXBpVVJMID0gYXBpVVJMLnNwbGl0KGB7JHtrZXl9fWApLmpvaW4oYXBpQ29uZmlnRGF0YS51cmxQYXJhbXNba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXQgcXVlcnkgcGFyYW1cclxuICAgICAgY29uc3QgcXVlcnlQYXJhbU9iaiA9IHt9O1xyXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhcGlDb25maWdEYXRhLnF1ZXJ5UGFyYW1zKSkge1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXNba2V5XSkpIHtcclxuICAgICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhhcGlDb25maWdEYXRhLnF1ZXJ5UGFyYW1zW2tleV1bMF0pO1xyXG4gICAgICAgICAgZm9yIChjb25zdCBxIG9mIGtleXMpIHtcclxuICAgICAgICAgICAgcXVlcnlQYXJhbU9ialtrZXkgKyAnLicgKyBxXSA9ICdbJyArIGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXNba2V5XS5tYXAoYSA9PiBhW3FdKSArICddJztcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcXVlcnlQYXJhbU9ialtrZXldID0gYXBpQ29uZmlnRGF0YS5xdWVyeVBhcmFtc1trZXldO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhxdWVyeVBhcmFtT2JqKSkge1xyXG4gICAgICAgIGlmIChhcGlVUkwuaW5jbHVkZXMoYHske2tleX19YCkpIHtcclxuICAgICAgICAgIGFwaVVSTCA9IGFwaVVSTC5zcGxpdChgeyR7a2V5fX1gKS5qb2luKHF1ZXJ5UGFyYW1PYmpba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC8vIHNldCByZXF1ZXN0IGJvZHlcclxuICAgICAgbGV0IHJlcXVlc3RCb2R5ID0gdGhpcy5mb3JtUmVxdWVzdEJvZHkoYXBpQ29uZmlnRGF0YS5yZXF1ZXN0Qm9keSwgYXBpQ29uZmlnRGF0YS5yZXF1ZXN0VHlwZSk7XHJcbiAgICAgIC8qIEVTQiBBUEkgSU5USUdSQVRJT04gKi9cclxuICAgICAgaWYgKGFwaUNvbmZpZ0RhdGEuaXNFU0IpIHtcclxuICAgICAgICByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICAgIGFwaV9yZXF1ZXN0OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSlcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmIChhcGlDb25maWdEYXRhLmVzYlJlcXVlc3RCb2R5KSB7XHJcbiAgICAgICAgICByZXF1ZXN0Qm9keSA9IE9iamVjdC5hc3NpZ24ocmVxdWVzdEJvZHksIGFwaUNvbmZpZ0RhdGEuZXNiUmVxdWVzdEJvZHkpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAvKiBFU0IgQVBJIElOVElHUkFUSU9OIChFTkQpICovXHJcblxyXG4gICAgICAvLyBjaGVjayBkb3dubG9hZFR5cGUgaWYgdmFsaWQgZG93bmxvYWQgVHlwZSB0aGVuIGFkZCByZXNwb25zZVR5cGUgYXMgYmxvYlxyXG4gICAgICBzd2l0Y2ggKGFwaUNvbmZpZ0RhdGEubWV0aG9kVHlwZS50b1VwcGVyQ2FzZSgpKSB7XHJcbiAgICAgICAgY2FzZSAnUE9TVCc6XHJcbiAgICAgICAgY2FzZSAnUFVUJzpcclxuICAgICAgICBjYXNlICdQQVRDSCc6XHJcbiAgICAgICAgICBodHRwT2JqQXJyLnB1c2godGhpcy5odHRwW2FwaUNvbmZpZ0RhdGEubWV0aG9kVHlwZS50b0xvd2VyQ2FzZSgpXShcclxuICAgICAgICAgICAgYXBpVVJMLFxyXG4gICAgICAgICAgICByZXF1ZXN0Qm9keSxcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZFR5cGUgPyB7XHJcbiAgICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IHsgaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KSk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdERUxFVEUnOlxyXG4gICAgICAgICAgaHR0cE9iakFyci5wdXNoKHRoaXMuaHR0cFthcGlDb25maWdEYXRhLm1ldGhvZFR5cGUudG9Mb3dlckNhc2UoKV0oXHJcbiAgICAgICAgICAgIGFwaVVSTCxcclxuICAgICAgICAgICAgdGhpcy5kb3dubG9hZFR5cGUgPyB7XHJcbiAgICAgICAgICAgICAgaGVhZGVycyxcclxuICAgICAgICAgICAgICBvYnNlcnZlOiAncmVzcG9uc2UnLFxyXG4gICAgICAgICAgICAgIHJlc3BvbnNlVHlwZTogJ2Jsb2InLFxyXG4gICAgICAgICAgICAgIGJvZHk6IHJlcXVlc3RCb2R5XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICA6IHsgaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJywgYm9keTogcmVxdWVzdEJvZHkgfSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnR0VUJzpcclxuICAgICAgICAgIGh0dHBPYmpBcnIucHVzaCh0aGlzLmh0dHBbYXBpQ29uZmlnRGF0YS5tZXRob2RUeXBlLnRvTG93ZXJDYXNlKCldKFxyXG4gICAgICAgICAgICBhcGlVUkwsXHJcbiAgICAgICAgICAgIHRoaXMuZG93bmxvYWRUeXBlID8ge1xyXG4gICAgICAgICAgICAgIGhlYWRlcnMsXHJcbiAgICAgICAgICAgICAgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyxcclxuICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICdibG9iJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgOiB7IGhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSkpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgICAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuICAgIH0pO1xyXG4gICAgLy8gUGFyYWxsZWwgQXBpIENhbGxpbmcgdXNpbmcgZm9ya0pvaW5cclxuICAgIC8vIGZvcmtKb2luIHdpbGwgd2FpdCBmb3IgYWxsIHRoZSByZXF1ZXN0cyB0byBjb21wbGV0ZSBhbmQgdGhlbiByZXR1cm4gYW4gYXJyYXkgb2YgcmVzcG9uc2VzXHJcbiAgICByZXR1cm4gZm9ya0pvaW4oaHR0cE9iakFycik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIGZvcm1SZXF1ZXN0Qm9keShyZXF1ZXN0RGF0YTogYW55LCB0eXBlOiBzdHJpbmcpIHtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICd0ZXh0L3BsYWluJzpcclxuICAgICAgY2FzZSAnYXBwbGljYXRpb24vanNvbic6XHJcbiAgICAgICAgcmV0dXJuIHJlcXVlc3REYXRhO1xyXG4gICAgICBjYXNlICdtdWx0aXBhcnQvZm9ybS1kYXRhJzpcclxuICAgICAgICBjb25zdCBmZCA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJlcXVlc3REYXRhKSkge1xyXG4gICAgICAgICAgZmQuYXBwZW5kKGtleSwgcmVxdWVzdERhdGFba2V5XSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmZDtcclxuICAgICAgY2FzZSAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkJzpcclxuICAgICAgICBjb25zdCBib2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJlcXVlc3REYXRhKSkge1xyXG4gICAgICAgICAgYm9keS5zZXQoa2V5LCByZXF1ZXN0RGF0YVtrZXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJvZHkudG9TdHJpbmcoKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zb2xlLmVycm9yKGBJbnZhbGlkIHJlcXVlc3QgdHlwZSBpbiBmb3JtUmVxdWVzdEJvZHk6ICR7dHlwZX1gKTtcclxuICAgICAgICByZXR1cm4ge307XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBkZXN0cm95U3Vic2NyaXB0aW9uKCkge1xyXG4gICAgLy8gQ2FsbGVkIG9uY2UsIGJlZm9yZSB0aGUgaW5zdGFuY2UgaXMgZGVzdHJveWVkLlxyXG4gICAgLy8gQWRkICdpbXBsZW1lbnRzIE9uRGVzdHJveScgdG8gdGhlIGNsYXNzLlxyXG4gICAgZm9yIChjb25zdCBzaW5nbGVTdWJzY3JpcHRpb24gaW4gdGhpcy5zdWJzY3JpcHRpb24pIHtcclxuICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9uW3NpbmdsZVN1YnNjcmlwdGlvbl0pIHtcclxuICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbltzaW5nbGVTdWJzY3JpcHRpb25dLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgUmVmcmVzaEFjY2Vzc1Rva2VuIHtcclxuICBvbGRBcGlDb25maWdEYXRhOiBvYmplY3Q7XHJcbn1cclxuIl19