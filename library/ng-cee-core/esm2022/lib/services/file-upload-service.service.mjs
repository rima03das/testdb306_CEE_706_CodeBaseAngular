import { Injectable } from '@angular/core';
import { CEEEncryptDecryptUtil } from '../utils/cee-encrypt-decrypt-util';
import { FlatUnflat } from '../utils/flat-unflat-json';
import { CommonUtil } from '../utils/common-util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "./internal-cee-emitter-service.service";
import * as i3 from "../models/api-data/api-data.service";
import * as i4 from "../models/app-data/app-data.service";
export class FileUploadService {
    http;
    ceeInternalEmitter;
    apiDataService;
    appDataService;
    headers = {};
    apiEndPoint = `/application/${sessionStorage.getItem('CEE_WFEId')}/attachment/`;
    applicationServicesUrl = localStorage.getItem('applicationServicesUrl');
    renameEndPoint = '/rename-object';
    encrypted = window.sessionStorage.getItem('CEE_Encrypt') &&
        (window.sessionStorage.getItem('CEE_Encrypt_Values') || '').includes('user_attachments') ? true : false;
    flatAndNestUtil;
    encryptRequestBody = {
        region: '',
        keyId: '',
        algorithm: ''
    };
    decryptRequestBody = {
        region: '',
        cipherTextBlob: '',
        decrypt: 'true'
    };
    url = '';
    apiData = {
        id: '',
        apiKey: '',
        apiUrl: '',
        value: ''
    };
    ceeEncryptDecrypt;
    commonUtil;
    constructor(http, ceeInternalEmitter, apiDataService, appDataService) {
        this.http = http;
        this.ceeInternalEmitter = ceeInternalEmitter;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.flatAndNestUtil = new FlatUnflat(appDataService);
        this.ceeEncryptDecrypt = new CEEEncryptDecryptUtil(window.sessionStorage.getItem('CEE_Encrypt') || '');
        const encryptConfig = JSON.parse(localStorage.getItem('CEE_ENCRYPT_CONFIG')) || {};
        // set the encrypt/decrypt variables
        this.encryptRequestBody.keyId = encryptConfig['KEY_ID'] || '';
        this.encryptRequestBody.region = this.decryptRequestBody.region = encryptConfig['REGION'] || '';
        this.encryptRequestBody.algorithm = encryptConfig['ALG'] || '';
        this.url = encryptConfig['URL'] || '';
        this.commonUtil = new CommonUtil();
    }
    get getHeaders() {
        return this.headers;
    }
    set setHeaders(data) {
        if (data) {
            this.headers = { ...this.headers, ...data };
        }
    }
    /**
     * a setter function that stores the attachment
     * meta data response that comes from the backend
     * object should contain id, apiUrl, value
     */
    storeAttachmentMetaData(data) {
        const { id, apiUrl, value } = data;
        const flattenResponse = this.flatAndNestUtil.flattenJSON(value);
        this.apiData.id = id;
        this.apiData.apiUrl = apiUrl;
        const modifiedObject = {};
        for (const key of Object.keys(flattenResponse)) {
            const keyName = id + '##' + key;
            let flatData = flattenResponse[key];
            if (flattenResponse[key] === null || flattenResponse[key] === 'null') {
                flatData = '';
            }
            else if (typeof (flattenResponse[key]) === 'boolean') {
                flatData = flattenResponse[key] ? '1' : '0';
            }
            else if ((!Array.isArray(flattenResponse[key]) ||
                typeof (flattenResponse[key]) !== 'object') &&
                typeof (flattenResponse[key]) !== 'string') {
                flatData = String(flattenResponse[key]);
            }
            modifiedObject[keyName] = flatData;
        }
        modifiedObject.handler_name = apiUrl;
        this.apiData.value = modifiedObject;
        // if exists update else add api data
        const isPresent = this.apiDataService.getApiDataByHandler(String(id));
        if (isPresent) {
            this.apiDataService.updateApiData(Object.assign({}, this.apiData));
        }
        else {
            this.apiDataService.addApiData(Object.assign({}, this.apiData));
        }
    }
    /**
     * generic file service function that uploads, downloads,  previews, deletes
     * the files based on the type of the request
     * @param type the type of the request
     * @param payLoad the data specific to the generic application services
     * @param extraConfigData the data that can be configured in the api config json
     */
    async genericFileService(type, payLoad, extraConfigData = {}, eventHandler = '') {
        let queryData;
        let requestBody;
        let queryParam = '';
        const url = extraConfigData.url ? this.getUrl(extraConfigData) : '';
        // set the headers
        this.setHeaders = extraConfigData.headers || {};
        if (extraConfigData.hasAuthorisation) {
            const accessToken = this.commonUtil.returnAccessToken();
            this.setHeaders = { Authorization: accessToken };
        }
        const hasCustomEventHandler = extraConfigData.hasCustomEventHandler || false, customEventHandler = extraConfigData.customEventHandler || undefined;
        // if there is a record id present
        // in the akita store use that else use the record id in the session storage
        // if not present session storage will return null and null if null record id wont be
        // added as a request body
        const getRecordId = window.sessionStorage.getItem('CEE_RecordId');
        const app_id = window.sessionStorage.getItem('CEE_WFEId');
        const recordId = (getRecordId && (this.apiDataService.getApiDataByApiKey(getRecordId) || {})['value']) || getRecordId;
        // // console.log(this.apiEndPoint);
        if (payLoad && payLoad.fileData) {
            queryData = {
                apiKey: payLoad.fileData.apiKey || '',
                attachmentId: encodeURIComponent(payLoad.fileData.attachmentId || '')
            };
            if (eventHandler === 'file/fetch' || eventHandler === 'file/remove' || eventHandler === 'file/rename') {
                queryData = {};
                queryParam = payLoad.fileData.attachmentId;
            }
            if (payLoad.fileData.attachmentPath) {
                queryData['attachmentPath'] = payLoad.fileData.attachmentPath;
            }
            if (payLoad.hasOwnProperty('extraQueryParams') && payLoad['extraQueryParams']) {
                queryData = { ...queryData, ...payLoad['extraQueryParams'] };
            }
            // tslint:disable-next-line: no-unused-expression
            recordId && (queryData['recordId'] = recordId);
            Object.keys(queryData).forEach((key, index) => queryParam = `${queryParam}${(index === 0) ?
                (url.includes('?') ? '&' : '?') : '&'}${key}=${queryData[key]}`);
            if (payLoad.fileData.file) {
                if (extraConfigData.isESB) {
                    requestBody = {
                        name: payLoad.fileData.file.name,
                        size: payLoad.fileData.file.size,
                        type: payLoad.fileData.file.type,
                        uId: payLoad.fileData.uId,
                        attachmentName: payLoad.fileData.attachmentName,
                        fileSize: payLoad.fileData.fileSize
                    };
                    requestBody = {
                        ...extraConfigData.esbRequestBody,
                        app_id,
                        api_request: JSON.stringify(requestBody)
                    };
                }
                else {
                    requestBody = new FormData();
                    // tslint:disable-next-line: no-unused-expression
                    recordId && requestBody.append('recordId', recordId);
                    // tslint:disable-next-line: no-unused-expression
                    for (const metaKey of Object.keys(payLoad.fileData)) {
                        if (metaKey != 'attachmentName') {
                            requestBody.append(metaKey, payLoad.fileData[metaKey]);
                        }
                    }
                    requestBody.append('attachmentName', payLoad.fileData.file.name);
                    if (payLoad && payLoad.fileData && payLoad.fileData.uId) {
                        this.setHeaders = { 'uId': payLoad.fileData.uId };
                    }
                    // payLoad.fileData.apiKey && requestBody.append('apiKey', payLoad.fileData.apiKey);
                    // requestBody.append('attachmentPath', payLoad.fileData.attachmentPath || '');
                    // requestBody.append('xxxx', payLoad.fileData.attachmentPath || '');
                    // check if encrypted is true and on upload encrypt the request file
                    if (type === 'OnUpload' && this.encrypted) {
                        const encryptRes = await this.encryptDecrypt().toPromise();
                        if (encryptRes.status == 200 && encryptRes.body && encryptRes.body['credentials']) {
                            const { cipherTextBlob, plainText } = encryptRes.body['credentials'];
                            // create string from the blob
                            const strFile = await Promise.resolve(this.createStringFromBlob(payLoad.fileData.file));
                            // create the encrypted file string
                            const encryptedFile = this.ceeEncryptDecrypt.encrypt(strFile, plainText, cipherTextBlob);
                            // create blob
                            const blob = new Blob([encryptedFile], { type: payLoad.fileData.file.type });
                            // create file
                            const file = new File([blob], payLoad.fileData.file.name, { type: payLoad.fileData.file.type });
                            // assign the converted blob to payload
                            payLoad.fileData.file = file;
                        }
                        else {
                            console.error(`Something went wrong while encrypting the file Status Code ${encryptRes.status} ${encryptRes}`);
                            return { statusCode: encryptRes.status, data: {}, emit: false };
                        }
                    }
                    requestBody.append('file', payLoad.fileData.file);
                    // check for request body in the extra config data object
                    if (extraConfigData.requestBody) {
                        Object.keys(extraConfigData.requestBody).forEach(key => {
                            requestBody.append(key, extraConfigData.requestBody[key]);
                        });
                    }
                }
            }
        }
        // emit flag false will not emit the emitApiSuccessResponse in the
        // wfe event list handler
        const responseData = {
            handler: hasCustomEventHandler ? customEventHandler : eventHandler,
            actualHandler: eventHandler,
            hasCustomEventHandler: hasCustomEventHandler,
            statusCode: 200,
            event_success: true,
            emit: false,
            data: {}
        };
        let res;
        switch (type) {
            case 'OnPreview':
            case 'OnLoad':
                if (type !== 'OnPreview') {
                    responseData.emit = true;
                }
                try {
                    // res = await this.fetchFile(queryParam, url).toPromise();
                    if ((extraConfigData.isESB) && (extraConfigData.methodType == "POST")) {
                        res = await this.postReq({ ...extraConfigData.esbRequestBody, app_id, id: queryParam }, url).toPromise();
                    }
                    else {
                        res = await this.fetchFile(queryParam, url).toPromise();
                    }
                }
                catch (err) {
                    res = err;
                }
                break;
            case 'OnUpload':
                try {
                    // responseData.emit = true;
                    res = await this.uploadFile(requestBody, url).toPromise();
                    if (res && res.status === 200 && res.body && res.body.api_response) {
                        const apiRes = JSON.parse(res.body.api_response);
                        const uploadLink = JSON.parse(JSON.stringify(apiRes.result.url));
                        const requestFileBody = new FormData();
                        for (const key in uploadLink['fields']) {
                            requestFileBody.append(key, uploadLink['fields'][key]);
                        }
                        requestFileBody.append('file', payLoad.fileData.file);
                        this.headers = {};
                        const resFile = await this.uploadFile(requestFileBody, uploadLink['url']).toPromise();
                        if (resFile.status === 204) {
                            res.body = apiRes;
                        }
                        else {
                            res = { err: 'File Upload faild to: ' + uploadLink };
                        }
                    }
                }
                catch (err) {
                    res = err;
                }
                break;
            case 'OnRemove':
                try {
                    // res = await this.removeFile(queryParam, url).toPromise();
                    if ((extraConfigData.isESB) && (extraConfigData.methodType == "POST")) {
                        res = await this.postReq({ ...extraConfigData.esbRequestBody, app_id, id: queryParam }, url).toPromise();
                    }
                    else {
                        res = await this.removeFile(queryParam, url).toPromise();
                    }
                }
                catch (err) {
                    res = err;
                }
                break;
            case 'OnRename':
                try {
                    res = await this.renameFile({ ...extraConfigData.esbRequestBody, app_id: app_id, id: payLoad.fileData.attachmentId, "file-rename": payLoad.fileData.newName }, url).toPromise();
                }
                catch (err) {
                    res = err;
                }
                break;
            default:
                console.error(`Event Name Mismatch: ${type}`);
                break;
        }
        responseData.statusCode = res.body.header_status_code || res.statusCode || res.status;
        // responseData.data = {};
        // check if res.result && res.result.fileUpload is true
        // if yes then do the following
        // else
        // check if payload has an api key
        // the sent the res.result back
        // else
        // create an object with key FILE_UPLOAD_DATA
        // and value as res.result as the key is the custom api key
        // if both the above conditions are undefined
        // then return res.error
        responseData.data = res.body ? (res.body.result && res.body.result.fileUpload ? {
            [payLoad.fileData.apiKey]: typeof (res.body.result.fileUpload) === 'string' ? JSON.parse(res.body.result.fileUpload) :
                res.body.result.fileUpload
        } : (payLoad.fileData.apiKey || payLoad.fileData.apiKey === '') ? res.body.result || res.body : { FILE_UPLOAD_DATA: res.body.result }) || res.body : res.error;
        //
        responseData.event_success = responseData.statusCode == 200;
        // check if event handler is present
        if (res.status !== 0) {
            this.storeAttachmentMetaData({
                id: hasCustomEventHandler ? customEventHandler : eventHandler,
                apiUrl: hasCustomEventHandler ? customEventHandler : eventHandler,
                apiKey: '',
                value: responseData.data
            });
        }
        //
        this.ceeInternalEmitter.fileUploadActionEmitter.emit({ type, responseData, payLoad });
        return responseData;
    }
    uploadFile(requestBody, url = '') {
        return this.http.post(url || `${this.applicationServicesUrl}${this.apiEndPoint}add`, requestBody, { headers: this.headers, observe: 'response', reportProgress: true });
    }
    removeFile(queryData, url = '') {
        return this.http.delete(url ? `${url}${queryData}` :
            `${this.applicationServicesUrl}${this.apiEndPoint}delete${queryData}`, { headers: this.headers, observe: 'response' });
    }
    fetchFile(queryData, url = '') {
        return this.http.get(url ? `${url}${queryData}` :
            `${this.applicationServicesUrl}${this.apiEndPoint}fetch${queryData}`, { headers: this.headers, observe: 'response' });
    }
    postReq(requestBody, url = '') {
        return this.http.post(`${url}`, requestBody, { headers: this.headers, observe: 'response' });
    }
    previewFile(queryData, url = '') {
        return this.http.get(url ? `${url}${queryData}` :
            `${this.applicationServicesUrl}${this.apiEndPoint}fetch${queryData}`, { headers: this.headers, observe: 'response' });
    }
    updateFile(requestBody, url = '') {
        return this.http.patch(url || `${this.applicationServicesUrl}${this.apiEndPoint}update`, requestBody, {
            headers: this.headers, observe: 'response'
        });
    }
    renameFile(requestBody, url = '') {
        return this.http.post(url || `${this.applicationServicesUrl}${this.renameEndPoint}`, requestBody, { headers: this.headers, observe: 'response', reportProgress: true });
    }
    /***
     * function that sets the url
     * from the config
     * @param apiConfigData the configured data from api config
     */
    getUrl(apiConfigData) {
        let apiURL = apiConfigData.url;
        // set url param
        for (const key of Object.keys(apiConfigData.urlParams)) {
            if (apiURL.includes(`{${key}}`)) {
                apiURL = apiURL.split(`{${key}}`).join(apiConfigData.urlParams[key]);
            }
        }
        // set query param
        for (const key of Object.keys(apiConfigData.queryParams)) {
            if (apiURL.includes(`{${key}}`)) {
                apiURL = apiURL.split(`{${key}}`).join(apiConfigData.queryParams[key]);
            }
        }
        // console.log(apiURL);
        return apiURL;
    }
    /**
     * call the ceeEncryptDecrypt decrypt function so that
     * the code should call this function not the function in util file
     */
    returnDecryptedResult(strFile, secretKey) {
        return this.ceeEncryptDecrypt.decrypt(strFile, secretKey);
    }
    /**
     * function that will get the private key/secret key from the api
     * @param type the type of the operation that is performed
     * @param decryptString the string that needs to be sent to the
     * backend to get the private key
     * * decryptString is only needed when the type is decrypt
     * @returns an observable
     */
    encryptDecrypt(type = 'encrypt', decryptString = '') {
        if (type !== 'encrypt') {
            this.decryptRequestBody.cipherTextBlob = decryptString.split(this.ceeEncryptDecrypt.delimiter)[1] || '';
        }
        return this.http.post(this.url, type === 'encrypt' ? this.encryptRequestBody : this.decryptRequestBody, { observe: 'response' });
    }
    /**
     * method that creates a base64 string/normal string based on the type
     * @param blob the blob of a file
     * @param type the type of the operation based on which the
     * the file needs to be read and sen back
     * * type == 'encrypt' reads a base64 string else
     * * reads a normal text string
     * @returns a Promise of string
     */
    createStringFromBlob(blob, type = 'encrypt') {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
                resolve(reader.result);
            };
            if (type === 'encrypt') {
                reader.readAsDataURL(blob);
            }
            else {
                reader.readAsText(blob);
            }
            reader.onerror = error => {
                console.error('Error while converting buffer to string', error);
                reject(error);
            };
        });
    }
    static ɵfac = function FileUploadService_Factory(t) { return new (t || FileUploadService)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.CEEInternalEmitterService), i0.ɵɵinject(i3.ApiDataService), i0.ɵɵinject(i4.AppDataService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: FileUploadService, factory: FileUploadService.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(FileUploadService, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.CEEInternalEmitterService }, { type: i3.ApiDataService }, { type: i4.AppDataService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsZS11cGxvYWQtc2VydmljZS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL3NlcnZpY2VzL2ZpbGUtdXBsb2FkLXNlcnZpY2Uuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFNQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSTNDLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLG1DQUFtQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUV2RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7Ozs7OztBQU1sRCxNQUFNLE9BQU8saUJBQWlCO0lBa0NkO0lBQ0E7SUFDQTtJQUNBO0lBcENKLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDckIsV0FBVyxHQUFHLGdCQUFnQixjQUFjLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxjQUFjLENBQUM7SUFDaEYsc0JBQXNCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0lBQ3hFLGNBQWMsR0FBRyxnQkFBZ0IsQ0FBQTtJQUV6QixTQUFTLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDO1FBQzVELENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsb0JBQW9CLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFFcEcsZUFBZSxDQUFhO0lBQzVCLGtCQUFrQixHQUFHO1FBQ3pCLE1BQU0sRUFBRSxFQUFFO1FBQ1YsS0FBSyxFQUFFLEVBQUU7UUFDVCxT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Q0gsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUMzQjtZQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEVBQUU7Z0JBQ3JCLE9BQU8sQ0FBQyxLQUFLLENBQUMseUNBQXlDLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNsQixDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7MkVBcGJRLGlCQUFpQjtnRUFBakIsaUJBQWlCLFdBQWpCLGlCQUFpQixtQkFIZCxNQUFNOztpRkFHVCxpQkFBaUI7Y0FKN0IsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIGZpbGUgb25seSBjYWxscyB0aGUgYXBwbGljYXRpb24gc2VydmljZSBmb3IgZmlsZSBVcGxvYWRcclxuICogVGhpcyBpcyBhIHN0YXRpYyBzZXJ2aWNlXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcGlEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDRUVFbmNyeXB0RGVjcnlwdFV0aWwgfSBmcm9tICcuLi91dGlscy9jZWUtZW5jcnlwdC1kZWNyeXB0LXV0aWwnO1xyXG5pbXBvcnQgeyBGbGF0VW5mbGF0IH0gZnJvbSAnLi4vdXRpbHMvZmxhdC11bmZsYXQtanNvbic7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi91dGlscy9jb21tb24tdXRpbCc7XHJcblxyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBGaWxlVXBsb2FkU2VydmljZSB7XHJcbiAgICBwcml2YXRlIGhlYWRlcnMgPSB7fTtcclxuICAgIGFwaUVuZFBvaW50ID0gYC9hcHBsaWNhdGlvbi8ke3Nlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9XRkVJZCcpfS9hdHRhY2htZW50L2A7XHJcbiAgICBhcHBsaWNhdGlvblNlcnZpY2VzVXJsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2FwcGxpY2F0aW9uU2VydmljZXNVcmwnKTtcclxuICAgIHJlbmFtZUVuZFBvaW50ID0gJy9yZW5hbWUtb2JqZWN0J1xyXG5cclxuICAgIHByaXZhdGUgZW5jcnlwdGVkID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9FbmNyeXB0JykgJiZcclxuICAgICAgICAod2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9FbmNyeXB0X1ZhbHVlcycpIHx8ICcnKS5pbmNsdWRlcygndXNlcl9hdHRhY2htZW50cycpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgIHByaXZhdGUgZmxhdEFuZE5lc3RVdGlsOiBGbGF0VW5mbGF0O1xyXG4gICAgcHJpdmF0ZSBlbmNyeXB0UmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgICAgcmVnaW9uOiAnJyxcclxuICAgICAgICBrZXlJZDogJycsXHJcbiAgICAgICAgYWxnb3JpdGhtOiAnJ1xyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGRlY3J5cHRSZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICByZWdpb246ICcnLFxyXG4gICAgICAgIGNpcGhlclRleHRCbG9iOiAnJyxcclxuICAgICAgICBkZWNyeXB0OiAndHJ1ZSdcclxuICAgIH07XHJcblxyXG4gICAgcHJpdmF0ZSB1cmwgPSAnJztcclxuXHJcbiAgICBwcml2YXRlIGFwaURhdGE6IEFwaURhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIGFwaUtleTogJycsXHJcbiAgICAgICAgYXBpVXJsOiAnJyxcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgIH07XHJcbiAgICBwcml2YXRlIGNlZUVuY3J5cHREZWNyeXB0OiBDRUVFbmNyeXB0RGVjcnlwdFV0aWw7XHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIGNlZUludGVybmFsRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSkge1xyXG4gICAgICAgIHRoaXMuZmxhdEFuZE5lc3RVdGlsID0gbmV3IEZsYXRVbmZsYXQoYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuY2VlRW5jcnlwdERlY3J5cHQgPSBuZXcgQ0VFRW5jcnlwdERlY3J5cHRVdGlsKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdDRUVfRW5jcnlwdCcpIHx8ICcnKTtcclxuICAgICAgICBjb25zdCBlbmNyeXB0Q29uZmlnID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX0VOQ1JZUFRfQ09ORklHJykpIHx8IHt9O1xyXG4gICAgICAgIC8vIHNldCB0aGUgZW5jcnlwdC9kZWNyeXB0IHZhcmlhYmxlc1xyXG4gICAgICAgIHRoaXMuZW5jcnlwdFJlcXVlc3RCb2R5LmtleUlkID0gZW5jcnlwdENvbmZpZ1snS0VZX0lEJ10gfHwgJyc7XHJcbiAgICAgICAgdGhpcy5lbmNyeXB0UmVxdWVzdEJvZHkucmVnaW9uID0gdGhpcy5kZWNyeXB0UmVxdWVzdEJvZHkucmVnaW9uID0gZW5jcnlwdENvbmZpZ1snUkVHSU9OJ10gfHwgJyc7XHJcbiAgICAgICAgdGhpcy5lbmNyeXB0UmVxdWVzdEJvZHkuYWxnb3JpdGhtID0gZW5jcnlwdENvbmZpZ1snQUxHJ10gfHwgJyc7XHJcbiAgICAgICAgdGhpcy51cmwgPSBlbmNyeXB0Q29uZmlnWydVUkwnXSB8fCAnJztcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBnZXRIZWFkZXJzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlcnM7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0IHNldEhlYWRlcnMoZGF0YSkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGVhZGVycyA9IHsgLi4udGhpcy5oZWFkZXJzLCAuLi5kYXRhIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYSBzZXR0ZXIgZnVuY3Rpb24gdGhhdCBzdG9yZXMgdGhlIGF0dGFjaG1lbnRcclxuICAgICAqIG1ldGEgZGF0YSByZXNwb25zZSB0aGF0IGNvbWVzIGZyb20gdGhlIGJhY2tlbmRcclxuICAgICAqIG9iamVjdCBzaG91bGQgY29udGFpbiBpZCwgYXBpVXJsLCB2YWx1ZVxyXG4gICAgICovXHJcbiAgICBzdG9yZUF0dGFjaG1lbnRNZXRhRGF0YShkYXRhOiBBcGlEYXRhKSB7XHJcbiAgICAgICAgY29uc3QgeyBpZCwgYXBpVXJsLCB2YWx1ZSB9ID0gZGF0YTtcclxuICAgICAgICBjb25zdCBmbGF0dGVuUmVzcG9uc2UgPSB0aGlzLmZsYXRBbmROZXN0VXRpbC5mbGF0dGVuSlNPTih2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5hcGlEYXRhLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5hcGlEYXRhLmFwaVVybCA9IGFwaVVybDtcclxuICAgICAgICBjb25zdCBtb2RpZmllZE9iamVjdDogYW55ID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZmxhdHRlblJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlOYW1lID0gaWQgKyAnIyMnICsga2V5O1xyXG4gICAgICAgICAgICBsZXQgZmxhdERhdGEgPSBmbGF0dGVuUmVzcG9uc2Vba2V5XTtcclxuICAgICAgICAgICAgaWYgKGZsYXR0ZW5SZXNwb25zZVtrZXldID09PSBudWxsIHx8IGZsYXR0ZW5SZXNwb25zZVtrZXldID09PSAnbnVsbCcpIHtcclxuICAgICAgICAgICAgICAgIGZsYXREYXRhID0gJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIChmbGF0dGVuUmVzcG9uc2Vba2V5XSkgPT09ICdib29sZWFuJykge1xyXG4gICAgICAgICAgICAgICAgZmxhdERhdGEgPSBmbGF0dGVuUmVzcG9uc2Vba2V5XSA/ICcxJyA6ICcwJztcclxuICAgICAgICAgICAgfSBlbHNlIGlmICgoXHJcbiAgICAgICAgICAgICAgICAhQXJyYXkuaXNBcnJheShmbGF0dGVuUmVzcG9uc2Vba2V5XSkgfHxcclxuICAgICAgICAgICAgICAgIHR5cGVvZiAoZmxhdHRlblJlc3BvbnNlW2tleV0pICE9PSAnb2JqZWN0JykgJiZcclxuICAgICAgICAgICAgICAgIHR5cGVvZiAoZmxhdHRlblJlc3BvbnNlW2tleV0pICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgZmxhdERhdGEgPSBTdHJpbmcoZmxhdHRlblJlc3BvbnNlW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG1vZGlmaWVkT2JqZWN0W2tleU5hbWVdID0gZmxhdERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1vZGlmaWVkT2JqZWN0LmhhbmRsZXJfbmFtZSA9IGFwaVVybDtcclxuICAgICAgICB0aGlzLmFwaURhdGEudmFsdWUgPSBtb2RpZmllZE9iamVjdDtcclxuICAgICAgICAvLyBpZiBleGlzdHMgdXBkYXRlIGVsc2UgYWRkIGFwaSBkYXRhXHJcbiAgICAgICAgY29uc3QgaXNQcmVzZW50ID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKFN0cmluZyhpZCkpO1xyXG4gICAgICAgIGlmIChpc1ByZXNlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS51cGRhdGVBcGlEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBpRGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2UuYWRkQXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFwaURhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBnZW5lcmljIGZpbGUgc2VydmljZSBmdW5jdGlvbiB0aGF0IHVwbG9hZHMsIGRvd25sb2FkcywgIHByZXZpZXdzLCBkZWxldGVzXHJcbiAgICAgKiB0aGUgZmlsZXMgYmFzZWQgb24gdGhlIHR5cGUgb2YgdGhlIHJlcXVlc3RcclxuICAgICAqIEBwYXJhbSB0eXBlIHRoZSB0eXBlIG9mIHRoZSByZXF1ZXN0XHJcbiAgICAgKiBAcGFyYW0gcGF5TG9hZCB0aGUgZGF0YSBzcGVjaWZpYyB0byB0aGUgZ2VuZXJpYyBhcHBsaWNhdGlvbiBzZXJ2aWNlc1xyXG4gICAgICogQHBhcmFtIGV4dHJhQ29uZmlnRGF0YSB0aGUgZGF0YSB0aGF0IGNhbiBiZSBjb25maWd1cmVkIGluIHRoZSBhcGkgY29uZmlnIGpzb25cclxuICAgICAqL1xyXG4gICAgYXN5bmMgZ2VuZXJpY0ZpbGVTZXJ2aWNlKHR5cGU6IHN0cmluZywgcGF5TG9hZDogYW55LCBleHRyYUNvbmZpZ0RhdGE6IGFueSA9IHt9LCBldmVudEhhbmRsZXI6IHN0cmluZyA9ICcnKSB7XHJcbiAgICAgICAgbGV0IHF1ZXJ5RGF0YTtcclxuICAgICAgICBsZXQgcmVxdWVzdEJvZHk7XHJcbiAgICAgICAgbGV0IHF1ZXJ5UGFyYW0gPSAnJztcclxuXHJcbiAgICAgICAgY29uc3QgdXJsID0gZXh0cmFDb25maWdEYXRhLnVybCA/IHRoaXMuZ2V0VXJsKGV4dHJhQ29uZmlnRGF0YSkgOiAnJztcclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBoZWFkZXJzXHJcbiAgICAgICAgdGhpcy5zZXRIZWFkZXJzID0gZXh0cmFDb25maWdEYXRhLmhlYWRlcnMgfHwge307XHJcbiAgICAgICAgaWYgKGV4dHJhQ29uZmlnRGF0YS5oYXNBdXRob3Jpc2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFjY2Vzc1Rva2VuID0gdGhpcy5jb21tb25VdGlsLnJldHVybkFjY2Vzc1Rva2VuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SGVhZGVycyA9IHsgQXV0aG9yaXphdGlvbjogYWNjZXNzVG9rZW4gfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgaGFzQ3VzdG9tRXZlbnRIYW5kbGVyID0gZXh0cmFDb25maWdEYXRhLmhhc0N1c3RvbUV2ZW50SGFuZGxlciB8fCBmYWxzZSxcclxuICAgICAgICAgICAgY3VzdG9tRXZlbnRIYW5kbGVyID0gZXh0cmFDb25maWdEYXRhLmN1c3RvbUV2ZW50SGFuZGxlciB8fCB1bmRlZmluZWQ7XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZXJlIGlzIGEgcmVjb3JkIGlkIHByZXNlbnRcclxuICAgICAgICAvLyBpbiB0aGUgYWtpdGEgc3RvcmUgdXNlIHRoYXQgZWxzZSB1c2UgdGhlIHJlY29yZCBpZCBpbiB0aGUgc2Vzc2lvbiBzdG9yYWdlXHJcbiAgICAgICAgLy8gaWYgbm90IHByZXNlbnQgc2Vzc2lvbiBzdG9yYWdlIHdpbGwgcmV0dXJuIG51bGwgYW5kIG51bGwgaWYgbnVsbCByZWNvcmQgaWQgd29udCBiZVxyXG4gICAgICAgIC8vIGFkZGVkIGFzIGEgcmVxdWVzdCBib2R5XHJcbiAgICAgICAgY29uc3QgZ2V0UmVjb3JkSWQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX1JlY29yZElkJyk7XHJcbiAgICAgICAgY29uc3QgYXBwX2lkID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9XRkVJZCcpO1xyXG4gICAgICAgIGNvbnN0IHJlY29yZElkID0gKGdldFJlY29yZElkICYmICh0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUFwaUtleShnZXRSZWNvcmRJZCkgfHwge30pWyd2YWx1ZSddKSB8fCBnZXRSZWNvcmRJZDtcclxuICAgICAgICAvLyAvLyBjb25zb2xlLmxvZyh0aGlzLmFwaUVuZFBvaW50KTtcclxuICAgICAgICBpZiAocGF5TG9hZCAmJiBwYXlMb2FkLmZpbGVEYXRhKSB7XHJcbiAgICAgICAgICAgIHF1ZXJ5RGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGFwaUtleTogcGF5TG9hZC5maWxlRGF0YS5hcGlLZXkgfHwgJycsXHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50SWQ6IGVuY29kZVVSSUNvbXBvbmVudChwYXlMb2FkLmZpbGVEYXRhLmF0dGFjaG1lbnRJZCB8fCAnJylcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50SGFuZGxlciA9PT0gJ2ZpbGUvZmV0Y2gnIHx8IGV2ZW50SGFuZGxlciA9PT0gJ2ZpbGUvcmVtb3ZlJyB8fCBldmVudEhhbmRsZXIgPT09ICdmaWxlL3JlbmFtZScpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgcXVlcnlQYXJhbSA9IHBheUxvYWQuZmlsZURhdGEuYXR0YWNobWVudElkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBheUxvYWQuZmlsZURhdGEuYXR0YWNobWVudFBhdGgpIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YVsnYXR0YWNobWVudFBhdGgnXSA9IHBheUxvYWQuZmlsZURhdGEuYXR0YWNobWVudFBhdGg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBheUxvYWQuaGFzT3duUHJvcGVydHkoJ2V4dHJhUXVlcnlQYXJhbXMnKSAmJiBwYXlMb2FkWydleHRyYVF1ZXJ5UGFyYW1zJ10pIHtcclxuICAgICAgICAgICAgICAgIHF1ZXJ5RGF0YSA9IHsuLi5xdWVyeURhdGEsIC4uLnBheUxvYWRbJ2V4dHJhUXVlcnlQYXJhbXMnXX07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tdW51c2VkLWV4cHJlc3Npb25cclxuICAgICAgICAgICAgcmVjb3JkSWQgJiYgKHF1ZXJ5RGF0YVsncmVjb3JkSWQnXSA9IHJlY29yZElkKTtcclxuXHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHF1ZXJ5RGF0YSkuZm9yRWFjaCgoa2V5LCBpbmRleCkgPT4gcXVlcnlQYXJhbSA9IGAke3F1ZXJ5UGFyYW19JHsoaW5kZXggPT09IDApID9cclxuICAgICAgICAgICAgICAgICh1cmwuaW5jbHVkZXMoJz8nKSA/ICcmJyA6ICc/JykgOiAnJid9JHtrZXl9PSR7cXVlcnlEYXRhW2tleV19YCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocGF5TG9hZC5maWxlRGF0YS5maWxlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0cmFDb25maWdEYXRhLmlzRVNCKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHBheUxvYWQuZmlsZURhdGEuZmlsZS5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplOiBwYXlMb2FkLmZpbGVEYXRhLmZpbGUuc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogcGF5TG9hZC5maWxlRGF0YS5maWxlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVJZDogcGF5TG9hZC5maWxlRGF0YS51SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnROYW1lOiBwYXlMb2FkLmZpbGVEYXRhLmF0dGFjaG1lbnROYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlU2l6ZTogcGF5TG9hZC5maWxlRGF0YS5maWxlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0Qm9keSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZXh0cmFDb25maWdEYXRhLmVzYlJlcXVlc3RCb2R5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcHBfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaV9yZXF1ZXN0OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0Qm9keSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5ID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxyXG4gICAgICAgICAgICAgICAgICAgIHJlY29yZElkICYmIHJlcXVlc3RCb2R5LmFwcGVuZCgncmVjb3JkSWQnLCByZWNvcmRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG1ldGFLZXkgb2YgT2JqZWN0LmtleXMocGF5TG9hZC5maWxlRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGFLZXkgIT0gJ2F0dGFjaG1lbnROYW1lJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEJvZHkuYXBwZW5kKG1ldGFLZXksIHBheUxvYWQuZmlsZURhdGFbbWV0YUtleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZCgnYXR0YWNobWVudE5hbWUnLCBwYXlMb2FkLmZpbGVEYXRhLmZpbGUubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBheUxvYWQgJiYgcGF5TG9hZC5maWxlRGF0YSAmJiBwYXlMb2FkLmZpbGVEYXRhLnVJZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEhlYWRlcnMgPSB7ICd1SWQnOiBwYXlMb2FkLmZpbGVEYXRhLnVJZCB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBwYXlMb2FkLmZpbGVEYXRhLmFwaUtleSAmJiByZXF1ZXN0Qm9keS5hcHBlbmQoJ2FwaUtleScsIHBheUxvYWQuZmlsZURhdGEuYXBpS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXF1ZXN0Qm9keS5hcHBlbmQoJ2F0dGFjaG1lbnRQYXRoJywgcGF5TG9hZC5maWxlRGF0YS5hdHRhY2htZW50UGF0aCB8fCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVxdWVzdEJvZHkuYXBwZW5kKCd4eHh4JywgcGF5TG9hZC5maWxlRGF0YS5hdHRhY2htZW50UGF0aCB8fCAnJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGlmIGVuY3J5cHRlZCBpcyB0cnVlIGFuZCBvbiB1cGxvYWQgZW5jcnlwdCB0aGUgcmVxdWVzdCBmaWxlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdPblVwbG9hZCcgJiYgdGhpcy5lbmNyeXB0ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5jcnlwdFJlcyA9IGF3YWl0IHRoaXMuZW5jcnlwdERlY3J5cHQoKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVuY3J5cHRSZXMuc3RhdHVzID09IDIwMCAmJiBlbmNyeXB0UmVzLmJvZHkgJiYgZW5jcnlwdFJlcy5ib2R5WydjcmVkZW50aWFscyddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB7IGNpcGhlclRleHRCbG9iLCBwbGFpblRleHQgfSA9IGVuY3J5cHRSZXMuYm9keVsnY3JlZGVudGlhbHMnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBzdHJpbmcgZnJvbSB0aGUgYmxvYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyRmlsZTogc3RyaW5nID0gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHRoaXMuY3JlYXRlU3RyaW5nRnJvbUJsb2IocGF5TG9hZC5maWxlRGF0YS5maWxlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIGVuY3J5cHRlZCBmaWxlIHN0cmluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZW5jcnlwdGVkRmlsZSA9IHRoaXMuY2VlRW5jcnlwdERlY3J5cHQuZW5jcnlwdChzdHJGaWxlLCBwbGFpblRleHQsIGNpcGhlclRleHRCbG9iKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSBibG9iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW2VuY3J5cHRlZEZpbGVdLCB7IHR5cGU6IHBheUxvYWQuZmlsZURhdGEuZmlsZS50eXBlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgRmlsZShbYmxvYl0sIHBheUxvYWQuZmlsZURhdGEuZmlsZS5uYW1lLCB7IHR5cGU6IHBheUxvYWQuZmlsZURhdGEuZmlsZS50eXBlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXNzaWduIHRoZSBjb252ZXJ0ZWQgYmxvYiB0byBwYXlsb2FkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXlMb2FkLmZpbGVEYXRhLmZpbGUgPSBmaWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgZW5jcnlwdGluZyB0aGUgZmlsZSBTdGF0dXMgQ29kZSAke2VuY3J5cHRSZXMuc3RhdHVzfSAke2VuY3J5cHRSZXN9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBzdGF0dXNDb2RlOiBlbmNyeXB0UmVzLnN0YXR1cywgZGF0YToge30sIGVtaXQ6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZCgnZmlsZScsIHBheUxvYWQuZmlsZURhdGEuZmlsZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHJlcXVlc3QgYm9keSBpbiB0aGUgZXh0cmEgY29uZmlnIGRhdGEgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dHJhQ29uZmlnRGF0YS5yZXF1ZXN0Qm9keSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhleHRyYUNvbmZpZ0RhdGEucmVxdWVzdEJvZHkpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RCb2R5LmFwcGVuZChrZXksIGV4dHJhQ29uZmlnRGF0YS5yZXF1ZXN0Qm9keVtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGVtaXQgZmxhZyBmYWxzZSB3aWxsIG5vdCBlbWl0IHRoZSBlbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlIGluIHRoZVxyXG4gICAgICAgIC8vIHdmZSBldmVudCBsaXN0IGhhbmRsZXJcclxuICAgICAgICBjb25zdCByZXNwb25zZURhdGEgPSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXI6IGhhc0N1c3RvbUV2ZW50SGFuZGxlciA/IGN1c3RvbUV2ZW50SGFuZGxlciA6IGV2ZW50SGFuZGxlcixcclxuICAgICAgICAgICAgYWN0dWFsSGFuZGxlcjogZXZlbnRIYW5kbGVyLFxyXG4gICAgICAgICAgICBoYXNDdXN0b21FdmVudEhhbmRsZXI6IGhhc0N1c3RvbUV2ZW50SGFuZGxlcixcclxuICAgICAgICAgICAgc3RhdHVzQ29kZTogMjAwLFxyXG4gICAgICAgICAgICBldmVudF9zdWNjZXNzOiB0cnVlLFxyXG4gICAgICAgICAgICBlbWl0OiBmYWxzZSxcclxuICAgICAgICAgICAgZGF0YToge31cclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCByZXM7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ09uUHJldmlldyc6XHJcbiAgICAgICAgICAgIGNhc2UgJ09uTG9hZCc6XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZSAhPT0gJ09uUHJldmlldycpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEuZW1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlcyA9IGF3YWl0IHRoaXMuZmV0Y2hGaWxlKHF1ZXJ5UGFyYW0sIHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChleHRyYUNvbmZpZ0RhdGEuaXNFU0IpICYmIChleHRyYUNvbmZpZ0RhdGEubWV0aG9kVHlwZSA9PSBcIlBPU1RcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5wb3N0UmVxKHsgLi4uZXh0cmFDb25maWdEYXRhLmVzYlJlcXVlc3RCb2R5LCBhcHBfaWQsIGlkOiBxdWVyeVBhcmFtIH0sIHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5mZXRjaEZpbGUocXVlcnlQYXJhbSwgdXJsKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSBlcnI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnT25VcGxvYWQnOlxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZXNwb25zZURhdGEuZW1pdCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy51cGxvYWRGaWxlKHJlcXVlc3RCb2R5LCB1cmwpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLnN0YXR1cyA9PT0gMjAwICYmIHJlcy5ib2R5ICYmIHJlcy5ib2R5LmFwaV9yZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlSZXMgPSBKU09OLnBhcnNlKHJlcy5ib2R5LmFwaV9yZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVwbG9hZExpbmsgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGFwaVJlcy5yZXN1bHQudXJsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcXVlc3RGaWxlQm9keSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB1cGxvYWRMaW5rWydmaWVsZHMnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEZpbGVCb2R5LmFwcGVuZChrZXksIHVwbG9hZExpbmtbJ2ZpZWxkcyddW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RGaWxlQm9keS5hcHBlbmQoJ2ZpbGUnLCBwYXlMb2FkLmZpbGVEYXRhLmZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhlYWRlcnMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzRmlsZSA9IGF3YWl0IHRoaXMudXBsb2FkRmlsZShyZXF1ZXN0RmlsZUJvZHksIHVwbG9hZExpbmtbJ3VybCddKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc0ZpbGUuc3RhdHVzID09PSAyMDQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5ID0gYXBpUmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0geyBlcnI6ICdGaWxlIFVwbG9hZCBmYWlsZCB0bzogJyArIHVwbG9hZExpbmsgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ09uUmVtb3ZlJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzID0gYXdhaXQgdGhpcy5yZW1vdmVGaWxlKHF1ZXJ5UGFyYW0sIHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChleHRyYUNvbmZpZ0RhdGEuaXNFU0IpICYmIChleHRyYUNvbmZpZ0RhdGEubWV0aG9kVHlwZSA9PSBcIlBPU1RcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5wb3N0UmVxKHsgLi4uZXh0cmFDb25maWdEYXRhLmVzYlJlcXVlc3RCb2R5LCBhcHBfaWQsIGlkOiBxdWVyeVBhcmFtIH0sIHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5yZW1vdmVGaWxlKHF1ZXJ5UGFyYW0sIHVybCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ09uUmVuYW1lJzpcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gYXdhaXQgdGhpcy5yZW5hbWVGaWxlKHsgLi4uZXh0cmFDb25maWdEYXRhLmVzYlJlcXVlc3RCb2R5LCBhcHBfaWQ6IGFwcF9pZCwgaWQ6IHBheUxvYWQuZmlsZURhdGEuYXR0YWNobWVudElkLCBcImZpbGUtcmVuYW1lXCI6IHBheUxvYWQuZmlsZURhdGEubmV3TmFtZSB9LCB1cmwpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0gZXJyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFdmVudCBOYW1lIE1pc21hdGNoOiAke3R5cGV9YCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc3BvbnNlRGF0YS5zdGF0dXNDb2RlID0gcmVzLmJvZHkuaGVhZGVyX3N0YXR1c19jb2RlIHx8IHJlcy5zdGF0dXNDb2RlIHx8IHJlcy5zdGF0dXM7XHJcbiAgICAgICAgLy8gcmVzcG9uc2VEYXRhLmRhdGEgPSB7fTtcclxuICAgICAgICAvLyBjaGVjayBpZiByZXMucmVzdWx0ICYmIHJlcy5yZXN1bHQuZmlsZVVwbG9hZCBpcyB0cnVlXHJcbiAgICAgICAgLy8gaWYgeWVzIHRoZW4gZG8gdGhlIGZvbGxvd2luZ1xyXG4gICAgICAgIC8vIGVsc2VcclxuICAgICAgICAvLyBjaGVjayBpZiBwYXlsb2FkIGhhcyBhbiBhcGkga2V5XHJcbiAgICAgICAgLy8gdGhlIHNlbnQgdGhlIHJlcy5yZXN1bHQgYmFja1xyXG4gICAgICAgIC8vIGVsc2VcclxuICAgICAgICAvLyBjcmVhdGUgYW4gb2JqZWN0IHdpdGgga2V5IEZJTEVfVVBMT0FEX0RBVEFcclxuICAgICAgICAvLyBhbmQgdmFsdWUgYXMgcmVzLnJlc3VsdCBhcyB0aGUga2V5IGlzIHRoZSBjdXN0b20gYXBpIGtleVxyXG4gICAgICAgIC8vIGlmIGJvdGggdGhlIGFib3ZlIGNvbmRpdGlvbnMgYXJlIHVuZGVmaW5lZFxyXG4gICAgICAgIC8vIHRoZW4gcmV0dXJuIHJlcy5lcnJvclxyXG4gICAgICAgIHJlc3BvbnNlRGF0YS5kYXRhID0gcmVzLmJvZHkgPyAocmVzLmJvZHkucmVzdWx0ICYmIHJlcy5ib2R5LnJlc3VsdC5maWxlVXBsb2FkID8ge1xyXG4gICAgICAgICAgICBbcGF5TG9hZC5maWxlRGF0YS5hcGlLZXldOlxyXG4gICAgICAgICAgICAgICAgdHlwZW9mIChyZXMuYm9keS5yZXN1bHQuZmlsZVVwbG9hZCkgPT09ICdzdHJpbmcnID8gSlNPTi5wYXJzZShyZXMuYm9keS5yZXN1bHQuZmlsZVVwbG9hZCkgOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcy5ib2R5LnJlc3VsdC5maWxlVXBsb2FkXHJcbiAgICAgICAgfSA6IChwYXlMb2FkLmZpbGVEYXRhLmFwaUtleSB8fCBwYXlMb2FkLmZpbGVEYXRhLmFwaUtleSA9PT0gJycpID8gcmVzLmJvZHkucmVzdWx0IHx8IHJlcy5ib2R5IDogeyBGSUxFX1VQTE9BRF9EQVRBOiByZXMuYm9keS5yZXN1bHQgfSkgfHwgcmVzLmJvZHkgOiByZXMuZXJyb3I7XHJcbiAgICAgICAgLy9cclxuICAgICAgICByZXNwb25zZURhdGEuZXZlbnRfc3VjY2VzcyA9IHJlc3BvbnNlRGF0YS5zdGF0dXNDb2RlID09IDIwMDtcclxuICAgICAgICAvLyBjaGVjayBpZiBldmVudCBoYW5kbGVyIGlzIHByZXNlbnRcclxuICAgICAgICBpZiAocmVzLnN0YXR1cyAhPT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlQXR0YWNobWVudE1ldGFEYXRhKHtcclxuICAgICAgICAgICAgICAgIGlkOiBoYXNDdXN0b21FdmVudEhhbmRsZXIgPyBjdXN0b21FdmVudEhhbmRsZXIgOiBldmVudEhhbmRsZXIsXHJcbiAgICAgICAgICAgICAgICBhcGlVcmw6IGhhc0N1c3RvbUV2ZW50SGFuZGxlciA/IGN1c3RvbUV2ZW50SGFuZGxlciA6IGV2ZW50SGFuZGxlcixcclxuICAgICAgICAgICAgICAgIGFwaUtleTogJycsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcmVzcG9uc2VEYXRhLmRhdGFcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgdGhpcy5jZWVJbnRlcm5hbEVtaXR0ZXIuZmlsZVVwbG9hZEFjdGlvbkVtaXR0ZXIuZW1pdCh7IHR5cGUsIHJlc3BvbnNlRGF0YSwgcGF5TG9hZCB9KTtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2VEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBsb2FkRmlsZShyZXF1ZXN0Qm9keSwgdXJsID0gJycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIHVybCB8fCBgJHt0aGlzLmFwcGxpY2F0aW9uU2VydmljZXNVcmx9JHt0aGlzLmFwaUVuZFBvaW50fWFkZGAsIHJlcXVlc3RCb2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZW1vdmVGaWxlKHF1ZXJ5RGF0YTogc3RyaW5nLCB1cmwgPSAnJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZGVsZXRlKHVybCA/IGAke3VybH0ke3F1ZXJ5RGF0YX1gIDpcclxuICAgICAgICAgICAgYCR7dGhpcy5hcHBsaWNhdGlvblNlcnZpY2VzVXJsfSR7dGhpcy5hcGlFbmRQb2ludH1kZWxldGUke3F1ZXJ5RGF0YX1gLCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZldGNoRmlsZShxdWVyeURhdGEsIHVybCA9ICcnKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5nZXQodXJsID8gYCR7dXJsfSR7cXVlcnlEYXRhfWAgOlxyXG4gICAgICAgICAgICBgJHt0aGlzLmFwcGxpY2F0aW9uU2VydmljZXNVcmx9JHt0aGlzLmFwaUVuZFBvaW50fWZldGNoJHtxdWVyeURhdGF9YCwgeyBoZWFkZXJzOiB0aGlzLmhlYWRlcnMsIG9ic2VydmU6ICdyZXNwb25zZScgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwb3N0UmVxKHJlcXVlc3RCb2R5LCB1cmwgPSAnJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChgJHt1cmx9YCwgcmVxdWVzdEJvZHksIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJldmlld0ZpbGUocXVlcnlEYXRhLCB1cmwgPSAnJykge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KHVybCA/IGAke3VybH0ke3F1ZXJ5RGF0YX1gIDpcclxuICAgICAgICAgICAgYCR7dGhpcy5hcHBsaWNhdGlvblNlcnZpY2VzVXJsfSR7dGhpcy5hcGlFbmRQb2ludH1mZXRjaCR7cXVlcnlEYXRhfWAsIHsgaGVhZGVyczogdGhpcy5oZWFkZXJzLCBvYnNlcnZlOiAncmVzcG9uc2UnIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRmlsZShyZXF1ZXN0Qm9keSwgdXJsID0gJycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBhdGNoKHVybCB8fCBgJHt0aGlzLmFwcGxpY2F0aW9uU2VydmljZXNVcmx9JHt0aGlzLmFwaUVuZFBvaW50fXVwZGF0ZWAsIHJlcXVlc3RCb2R5LCB7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJ1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmVuYW1lRmlsZShyZXF1ZXN0Qm9keSwgdXJsID0gJycpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnBvc3QoXHJcbiAgICAgICAgICAgIHVybCB8fCBgJHt0aGlzLmFwcGxpY2F0aW9uU2VydmljZXNVcmx9JHt0aGlzLnJlbmFtZUVuZFBvaW50fWAsIHJlcXVlc3RCb2R5LCB7IGhlYWRlcnM6IHRoaXMuaGVhZGVycywgb2JzZXJ2ZTogJ3Jlc3BvbnNlJywgcmVwb3J0UHJvZ3Jlc3M6IHRydWUgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSB1cmxcclxuICAgICAqIGZyb20gdGhlIGNvbmZpZ1xyXG4gICAgICogQHBhcmFtIGFwaUNvbmZpZ0RhdGEgdGhlIGNvbmZpZ3VyZWQgZGF0YSBmcm9tIGFwaSBjb25maWdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRVcmwoYXBpQ29uZmlnRGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGFwaVVSTCA9IGFwaUNvbmZpZ0RhdGEudXJsO1xyXG4gICAgICAgIC8vIHNldCB1cmwgcGFyYW1cclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyhhcGlDb25maWdEYXRhLnVybFBhcmFtcykpIHtcclxuICAgICAgICAgICAgaWYgKGFwaVVSTC5pbmNsdWRlcyhgeyR7a2V5fX1gKSkge1xyXG4gICAgICAgICAgICAgICAgYXBpVVJMID0gYXBpVVJMLnNwbGl0KGB7JHtrZXl9fWApLmpvaW4oYXBpQ29uZmlnRGF0YS51cmxQYXJhbXNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBxdWVyeSBwYXJhbVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXMpKSB7XHJcbiAgICAgICAgICAgIGlmIChhcGlVUkwuaW5jbHVkZXMoYHske2tleX19YCkpIHtcclxuICAgICAgICAgICAgICAgIGFwaVVSTCA9IGFwaVVSTC5zcGxpdChgeyR7a2V5fX1gKS5qb2luKGFwaUNvbmZpZ0RhdGEucXVlcnlQYXJhbXNba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coYXBpVVJMKTtcclxuICAgICAgICByZXR1cm4gYXBpVVJMO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogY2FsbCB0aGUgY2VlRW5jcnlwdERlY3J5cHQgZGVjcnlwdCBmdW5jdGlvbiBzbyB0aGF0XHJcbiAgICAgKiB0aGUgY29kZSBzaG91bGQgY2FsbCB0aGlzIGZ1bmN0aW9uIG5vdCB0aGUgZnVuY3Rpb24gaW4gdXRpbCBmaWxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyByZXR1cm5EZWNyeXB0ZWRSZXN1bHQoc3RyRmlsZSwgc2VjcmV0S2V5KSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2VlRW5jcnlwdERlY3J5cHQuZGVjcnlwdChzdHJGaWxlLCBzZWNyZXRLZXkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCB3aWxsIGdldCB0aGUgcHJpdmF0ZSBrZXkvc2VjcmV0IGtleSBmcm9tIHRoZSBhcGlcclxuICAgICAqIEBwYXJhbSB0eXBlIHRoZSB0eXBlIG9mIHRoZSBvcGVyYXRpb24gdGhhdCBpcyBwZXJmb3JtZWRcclxuICAgICAqIEBwYXJhbSBkZWNyeXB0U3RyaW5nIHRoZSBzdHJpbmcgdGhhdCBuZWVkcyB0byBiZSBzZW50IHRvIHRoZVxyXG4gICAgICogYmFja2VuZCB0byBnZXQgdGhlIHByaXZhdGUga2V5XHJcbiAgICAgKiAqIGRlY3J5cHRTdHJpbmcgaXMgb25seSBuZWVkZWQgd2hlbiB0aGUgdHlwZSBpcyBkZWNyeXB0XHJcbiAgICAgKiBAcmV0dXJucyBhbiBvYnNlcnZhYmxlXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBlbmNyeXB0RGVjcnlwdCh0eXBlID0gJ2VuY3J5cHQnLCBkZWNyeXB0U3RyaW5nID0gJycpIHtcclxuICAgICAgICBpZiAodHlwZSAhPT0gJ2VuY3J5cHQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVjcnlwdFJlcXVlc3RCb2R5LmNpcGhlclRleHRCbG9iID0gZGVjcnlwdFN0cmluZy5zcGxpdCh0aGlzLmNlZUVuY3J5cHREZWNyeXB0LmRlbGltaXRlcilbMV0gfHwgJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAucG9zdChcclxuICAgICAgICAgICAgdGhpcy51cmwsXHJcbiAgICAgICAgICAgIHR5cGUgPT09ICdlbmNyeXB0JyA/IHRoaXMuZW5jcnlwdFJlcXVlc3RCb2R5IDogdGhpcy5kZWNyeXB0UmVxdWVzdEJvZHksXHJcbiAgICAgICAgICAgIHsgb2JzZXJ2ZTogJ3Jlc3BvbnNlJyB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ldGhvZCB0aGF0IGNyZWF0ZXMgYSBiYXNlNjQgc3RyaW5nL25vcm1hbCBzdHJpbmcgYmFzZWQgb24gdGhlIHR5cGVcclxuICAgICAqIEBwYXJhbSBibG9iIHRoZSBibG9iIG9mIGEgZmlsZVxyXG4gICAgICogQHBhcmFtIHR5cGUgdGhlIHR5cGUgb2YgdGhlIG9wZXJhdGlvbiBiYXNlZCBvbiB3aGljaCB0aGVcclxuICAgICAqIHRoZSBmaWxlIG5lZWRzIHRvIGJlIHJlYWQgYW5kIHNlbiBiYWNrXHJcbiAgICAgKiAqIHR5cGUgPT0gJ2VuY3J5cHQnIHJlYWRzIGEgYmFzZTY0IHN0cmluZyBlbHNlXHJcbiAgICAgKiAqIHJlYWRzIGEgbm9ybWFsIHRleHQgc3RyaW5nXHJcbiAgICAgKiBAcmV0dXJucyBhIFByb21pc2Ugb2Ygc3RyaW5nXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBjcmVhdGVTdHJpbmdGcm9tQmxvYihibG9iLCB0eXBlID0gJ2VuY3J5cHQnKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZWFkZXIucmVzdWx0KTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdlbmNyeXB0Jykge1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoYmxvYik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChibG9iKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSBlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGlsZSBjb252ZXJ0aW5nIGJ1ZmZlciB0byBzdHJpbmcnLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=