import { FlatUnflat } from './flat-unflat-json';
import { CommonUtil } from './common-util';
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../models/app-data/app-data.service";
import * as i3 from "../models/api-data/api-data.service";
export default class InternalResponseUtil {
    http;
    appDataService;
    apiDataService;
    constructor(http, appDataService, apiDataService) {
        this.http = http;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.flatAndNestUtil = new FlatUnflat(appDataService);
        this.commonUtil = new CommonUtil();
    }
    flatAndNestUtil;
    commonUtil;
    /**
     * this function save field data on response handler
     * so that can consume on field load
     * @required @param handler WFE Event handler
     */
    saveResponseData(stepId) {
        const appStoreData = this.getAppData(stepId);
        this.saveApiData(appStoreData);
    }
    /**
     * function returns an object which is the mapping of the  apiKey and the value in a field.
     */
    getAppData(stepId) {
        let obj = {};
        const appStoreData = this.appDataService.getAllAppStoreData();
        for (const data of appStoreData) {
            if (data.responseApiKey.length > 0 && data.stepId === stepId) {
                for (const key of data.responseApiKey) {
                    if (key) {
                        if (data.dataFormatSeparator) {
                            // tslint:disable-next-line: no-unused-expression
                            ((key.includes(':::')) && (obj = {
                                ...this.checkForDateOrTimePicker(key.split(':::'), data.value.split(data.dataFormatSeparator)), ...obj
                            }));
                        }
                        obj[key] = data.value;
                    }
                }
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
    saveApiData(data) {
        // console.log(data)
        let obj = {};
        for (const key in data) {
            const value = data[key];
            const handlerName = this.commonUtil.getHandlerName(key);
            if (obj[handlerName]) {
            }
            else {
                const handlerData = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(key));
                obj[handlerName] = handlerData ? JSON.parse(JSON.stringify(handlerData.value)) : {};
            }
            obj[handlerName][key] = value;
        }
        // console.log(obj)
        for (const handlerName in obj) {
            const handlerData = {
                apiKey: '',
                id: handlerName,
                apiUrl: handlerName,
                value: obj[handlerName]
            };
            const isPresent = this.apiDataService.getApiDataByHandler(handlerName);
            if (isPresent) {
                this.apiDataService.updateApiData(Object.assign({}, handlerData));
            }
            else {
                this.apiDataService.addApiData(Object.assign({}, handlerData));
            }
        } // setApiData
    }
    static ɵfac = function InternalResponseUtil_Factory(t) { return new (t || InternalResponseUtil)(i0.ɵɵinject(i1.HttpClient), i0.ɵɵinject(i2.AppDataService), i0.ɵɵinject(i3.ApiDataService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: InternalResponseUtil, factory: InternalResponseUtil.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(InternalResponseUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.HttpClient }, { type: i2.AppDataService }, { type: i3.ApiDataService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50ZXJuYWwtcmVzcG9uc2UudXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi91dGlscy9pbnRlcm5hbC1yZXNwb25zZS51dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVVBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUdoRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7Ozs7O0FBSTNDLE1BQU0sQ0FBQyxPQUFPLE9BQU8sb0JBQW9CO0lBRWhDO0lBQ0E7SUFDQTtJQUhSLFlBQ1EsSUFBZ0IsRUFDaEIsY0FBOEIsRUFDOUIsY0FBOEI7UUFGOUIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBRXJDLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxVQUFVLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO0lBQ3BDLENBQUM7SUFFRCxlQUFlLENBQWE7SUFDNUIsVUFBVSxDQUFhO0lBRXZCOzs7O09BSUc7SUFDSCxnQkFBZ0IsQ0FBQyxNQUFNO1FBRXRCLE1BQU0sWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0MsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUNoQyxDQUFDO0lBRUQ7O09BRUc7SUFDSyxVQUFVLENBQUMsTUFBTTtRQUN4QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDYixNQUFNLFlBQVksR0FBYyxJQUFJLENBQUMsY0FB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QUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUM7YUFDL0Q7U0FDRCxDQUFBLGFBQWE7SUFDZixDQUFDOzhFQXZGbUIsb0JBQW9CO2dFQUFwQixvQkFBb0IsV0FBcEIsb0JBQW9CLG1CQUZ6QixNQUFNOztpRkFFRCxvQkFBb0I7Y0FIeEMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFRoaXMgaXMgYSB1dGlsIGZpbGUgdGhhdCBjb250YWlucyBmdW5jdGlvbiB0aGF0IHdpbGwgYmUgY2FsbGVkIHdoZW4gdGhlIGFwaSB0eXBlIGlzIEVYVEVSTkFMLlxyXG4gKiBUaGlzIGZpbGUgcmVhZHMgdGhlIGFwaSBjb25maWcganNvbiBnZXRzIHRoZSBqc29uIGZvciB0aGUgc3BlY2lmaWMgZXZlbnQgaGFuZGxlciBhbmQgZm9ybXMgdGhlXHJcbiAqIGhlYWRlciwgcmVxdWVzdEJvZHksIHF1ZXJ5UGFyYW1ldGVycywgdXJsUGFyYW1ldGVycy5cclxuICogTm90ZTovLyBXaGVuIHRoZSB0eXBlIG9mIGFwaSBjb25maWcgaXMgc2V0IHRvIHRoZSBFWFRFUk5BTCBpdCB3aWxsIGF1dG9tYXRpY2FsbHkgdXNlIHRoZSBoYXNoZWQgQVBJIEtFWSBjb25jZXB0LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmxhdFVuZmxhdCB9IGZyb20gJy4vZmxhdC11bmZsYXQtanNvbic7XHJcbmltcG9ydCB7IEFwaURhdGEgfSBmcm9tICcuLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4vY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbkBJbmplY3RhYmxlKHtcclxuICAgIHByb3ZpZGVkSW46ICdyb290JyxcclxufSlcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW50ZXJuYWxSZXNwb25zZVV0aWwge1xyXG5cdGNvbnN0cnVjdG9yKFxyXG5cdFx0cHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcblx0XHRwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG5cdFx0cHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZVxyXG5cdCkge1xyXG5cdFx0dGhpcy5mbGF0QW5kTmVzdFV0aWwgPSBuZXcgRmxhdFVuZmxhdChhcHBEYXRhU2VydmljZSk7XHJcblx0XHR0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG5cdH1cclxuXHJcblx0ZmxhdEFuZE5lc3RVdGlsOiBGbGF0VW5mbGF0O1xyXG5cdGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcblxyXG5cdC8qKlxyXG5cdCAqIHRoaXMgZnVuY3Rpb24gc2F2ZSBmaWVsZCBkYXRhIG9uIHJlc3BvbnNlIGhhbmRsZXJcclxuXHQgKiBzbyB0aGF0IGNhbiBjb25zdW1lIG9uIGZpZWxkIGxvYWRcclxuXHQgKiBAcmVxdWlyZWQgQHBhcmFtIGhhbmRsZXIgV0ZFIEV2ZW50IGhhbmRsZXJcclxuXHQgKi9cclxuXHRzYXZlUmVzcG9uc2VEYXRhKHN0ZXBJZCkge1xyXG5cclxuXHRcdGNvbnN0IGFwcFN0b3JlRGF0YSA9IHRoaXMuZ2V0QXBwRGF0YShzdGVwSWQpO1xyXG5cdFx0dGhpcy5zYXZlQXBpRGF0YShhcHBTdG9yZURhdGEpO1xyXG5cdH1cclxuXHJcblx0LyoqXHJcblx0ICogZnVuY3Rpb24gcmV0dXJucyBhbiBvYmplY3Qgd2hpY2ggaXMgdGhlIG1hcHBpbmcgb2YgdGhlICBhcGlLZXkgYW5kIHRoZSB2YWx1ZSBpbiBhIGZpZWxkLlxyXG5cdCAqL1xyXG5cdHByaXZhdGUgZ2V0QXBwRGF0YShzdGVwSWQpIHtcclxuXHRcdGxldCBvYmogPSB7fTtcclxuXHRcdGNvbnN0IGFwcFN0b3JlRGF0YTogQXBwRGF0YVtdID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRBbGxBcHBTdG9yZURhdGEoKTtcclxuXHRcdGZvciAoY29uc3QgZGF0YSBvZiBhcHBTdG9yZURhdGEpIHtcclxuXHRcdFx0aWYgKGRhdGEucmVzcG9uc2VBcGlLZXkubGVuZ3RoID4gMCAmJiBkYXRhLnN0ZXBJZCA9PT0gc3RlcElkKSB7XHJcblx0XHRcdFx0Zm9yIChjb25zdCBrZXkgb2YgZGF0YS5yZXNwb25zZUFwaUtleSkge1xyXG5cdFx0XHRcdFx0aWYgKGtleSkge1xyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YS5kYXRhRm9ybWF0U2VwYXJhdG9yKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby11bnVzZWQtZXhwcmVzc2lvblxyXG5cdFx0XHRcdFx0XHRcdCgoa2V5LmluY2x1ZGVzKCc6OjonKSkgJiYgKG9iaiA9IHtcclxuXHRcdFx0XHRcdFx0XHRcdC4uLnRoaXMuY2hlY2tGb3JEYXRlT3JUaW1lUGlja2VyKGtleS5zcGxpdCgnOjo6JyksXHJcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGEudmFsdWUuc3BsaXQoZGF0YS5kYXRhRm9ybWF0U2VwYXJhdG9yKSksIC4uLm9ialxyXG5cdFx0XHRcdFx0XHRcdH0pKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRvYmpba2V5XSA9IGRhdGEudmFsdWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gb2JqO1xyXG5cdH1cclxuXHJcblx0cHJpdmF0ZSBjaGVja0ZvckRhdGVPclRpbWVQaWNrZXIoa2V5cywgYXBpVmFsdWUpIHtcclxuXHRcdGNvbnN0IG9iaiA9IHt9O1xyXG5cdFx0Zm9yIChjb25zdCBbaW5kZXgsIHZhbHVlXSBvZiBrZXlzLmVudHJpZXMoKSkge1xyXG5cdFx0XHRvYmpbdmFsdWVdID0gYXBpVmFsdWVbaW5kZXhdIHx8ICcnO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIG9iajtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgc2F2ZUFwaURhdGEoZGF0YSkge1xyXG5cdFx0Ly8gY29uc29sZS5sb2coZGF0YSlcclxuXHRcdGxldCBvYmogPSB7fTtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuXHRcdFx0Y29uc3QgdmFsdWUgPSBkYXRhW2tleV07XHJcblx0XHRcdGNvbnN0IGhhbmRsZXJOYW1lID0gdGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGtleSk7XHJcblx0XHRcdGlmIChvYmpbaGFuZGxlck5hbWVdKSB7XHJcblxyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdGNvbnN0IGhhbmRsZXJEYXRhOiBBcGlEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKFxyXG5cdFx0XHRcdFx0dGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGtleSkpXHJcblx0XHRcdFx0b2JqW2hhbmRsZXJOYW1lXSA9IGhhbmRsZXJEYXRhID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShoYW5kbGVyRGF0YS52YWx1ZSkpIDoge307XHJcblx0XHRcdH1cclxuXHRcdFx0b2JqW2hhbmRsZXJOYW1lXVtrZXldID0gdmFsdWU7XHJcblx0XHR9XHJcblx0XHQvLyBjb25zb2xlLmxvZyhvYmopXHJcblx0XHRmb3IgKGNvbnN0IGhhbmRsZXJOYW1lIGluIG9iaikge1xyXG5cdFx0XHRjb25zdCBoYW5kbGVyRGF0YTogQXBpRGF0YSA9IHtcclxuXHRcdFx0XHRhcGlLZXk6ICcnLFxyXG5cdFx0XHRcdGlkOiBoYW5kbGVyTmFtZSxcclxuXHRcdFx0XHRhcGlVcmw6IGhhbmRsZXJOYW1lLFxyXG5cdFx0XHRcdHZhbHVlOiBvYmpbaGFuZGxlck5hbWVdXHJcblx0XHRcdH1cclxuXHRcdFx0Y29uc3QgaXNQcmVzZW50ID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGhhbmRsZXJOYW1lKTtcclxuXHRcdFx0aWYgKGlzUHJlc2VudCkge1xyXG5cdFx0XHRcdHRoaXMuYXBpRGF0YVNlcnZpY2UudXBkYXRlQXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBoYW5kbGVyRGF0YSkpO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdHRoaXMuYXBpRGF0YVNlcnZpY2UuYWRkQXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBoYW5kbGVyRGF0YSkpO1xyXG5cdFx0XHR9XHJcblx0XHR9Ly8gc2V0QXBpRGF0YVxyXG5cdH1cclxuXHJcbn1cclxuIl19