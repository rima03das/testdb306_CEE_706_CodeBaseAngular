import { Injectable } from "@angular/core";
import { take } from "rxjs/operators";
import { APIKeyUtil } from "./api-key-util";
import * as i0 from "@angular/core";
import * as i1 from "../models/app-data/app-data.service";
export class ApplicationStateStoreUtil {
    appDataService;
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        requestApiKey: [],
        responseApiKey: [],
        mandatory: false,
        editable: false,
        visible: false,
        value: '',
        isValid: true
    };
    apiKeyUtil;
    constructor(appDataService) {
        this.appDataService = appDataService;
        this.apiKeyUtil = new APIKeyUtil();
    }
    setState(stepId, type, progressBarId) {
        const stepMap = this.getStepMap(progressBarId) || {};
        stepMap[stepId] = type;
        this.setStepMap(progressBarId, stepMap);
    }
    /**
     * set any state
     * @param progressBarId
     * @param stepId
     * @param type
     */
    // do not use the function until and unless extremely required
    setAnyState(progressBarId, stepId, type) {
        this.setState(stepId, type, progressBarId);
    }
    /**
     * function that sets progress bar
     * @param progressBarId
     * @param stepId
     */
    setProgressStatusOnLastSavedState(progressBarId, stepId, progressBarMap) {
        const stepMap = this.getStepMap(progressBarId) || {};
        // stepMap[stepId] = type;
        if (stepMap) {
            const stepIds = progressBarMap.steps.filter(stepData => stepData.tid === stepId)[0];
            if (stepIds) {
                const stepIndex = progressBarMap.steps.indexOf(stepIds);
                if (stepIndex !== -1) {
                    progressBarMap.steps.forEach((value, index) => {
                        if (index <= stepIndex) {
                            stepMap[value.tid] = 'STATE_COMPLETE';
                        }
                        else {
                            stepMap[value.tid] = 'STATE_PENDING';
                        }
                    });
                    this.setStepMap(progressBarId, stepMap);
                }
            }
        }
    }
    /**
     * set active state active to a step in progress bar
     * @param progressBarId
     * @param stepId
     */
    setActive(progressBarId, stepId) {
        this.setState(stepId, 'STATE_ACTIVE', progressBarId);
    }
    /**
     * set active state active to a step in progress bar
     * @param progressBarId
     * @param stepId
     */
    setPending(progressBarId, stepId) {
        this.setState(stepId, 'STATE_PENDING', progressBarId);
    }
    /**
     * set active state incomplete to a step in progress bar
     * @param progressBarId
     * @param stepId
     */
    setIncomplete(progressBarId, stepId) {
        this.setState(stepId, 'STATE_INCOMPLETE', progressBarId);
    }
    /**
     * set active state complete to a step in progress bar
     * @param progressBarId
     * @param stepId
     */
    setComplete(progressBarId, stepId) {
        this.setState(stepId, 'STATE_COMPLETE', progressBarId);
    }
    /**
     * get current step state
     * @param progressBarId
     * @param stepId
     */
    getStepState(progressBarId, stepId) {
        const stepMap = this.getStepMap(progressBarId) || {};
        return stepMap[stepId];
    }
    /**
     * set active state pending to a step in progress bar
     * @param progressBlock
     * @param stepId
     */
    setDefaultState(progressBlock, stepId) {
        const { progress_bar_id, request_api_key, response_api_key, api_key } = progressBlock;
        const stepMap = this.getStepMap(progress_bar_id) || {};
        if (Object.keys(stepMap).length !== 0) {
            if (!stepMap[stepId]) {
                stepMap[stepId] = 'STATE_PENDING';
            }
        }
        else {
            const obj = {
                id: progress_bar_id,
                responseApiKey: this.apiKeyUtil.getMultipleApiKeys(response_api_key),
                requestApiKey: this.apiKeyUtil.getMultipleApiKeys(request_api_key),
                apiKey: api_key
            };
            this.appDataService.setAppData({ ...this.appData, ...obj });
            stepMap[stepId] = 'STATE_PENDING';
        }
        this.setStepMap(progress_bar_id, stepMap);
    }
    /**
     * set state value set to a progress bar
     * @param progressBarId
     * @param value
     */
    setStateValue(progressBarId, value) {
        this.setStepMap(progressBarId, value);
    }
    setStepMap(progressBarId, obj) {
        // window.sessionStorage.setItem('state-map', JSON.stringify(obj));
        // window.sessionStorage.setItem('state-map', btoa(JSON.stringify(obj)));
        this.appDataService.getAppDataByFieldId(progressBarId).pipe(take(1))
            .subscribe(val => {
            this.appDataService.updateAppData(Object.assign({}, val, { value: btoa(JSON.stringify(obj)) }));
        });
    }
    getStepMap(progressBarId) {
        const data = this.appDataService.getFieldDataByFieldId(progressBarId);
        // const data = window.sessionStorage.getItem('state-map');
        if (data) {
            // return JSON.parse(data);
            return JSON.parse(atob(data));
        }
        else {
            return undefined;
        }
    }
    static ɵfac = function ApplicationStateStoreUtil_Factory(t) { return new (t || ApplicationStateStoreUtil)(i0.ɵɵinject(i1.AppDataService)); };
    static ɵprov = /*@__PURE__*/ i0.ɵɵdefineInjectable({ token: ApplicationStateStoreUtil, factory: ApplicationStateStoreUtil.ɵfac, providedIn: 'root' });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ApplicationStateStoreUtil, [{
        type: Injectable,
        args: [{
                providedIn: 'root',
            }]
    }], () => [{ type: i1.AppDataService }], null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwbGljYXRpb24tc3RhdGUtc3RvcmUtdXRpbC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi91dGlscy9hcHBsaWNhdGlvbi1zdGF0ZS1zdG9yZS11dGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBR3RDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7O0FBSzVDLE1BQU0sT0FBTyx5QkFBeUI7SUFlZDtJQWRwQixPQUFPLEdBQVk7UUFDZixFQUFFLEVBQUUsRUFBRTtRQUNOLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixhQUFhLEVBQUUsRUFBRTtRQUNqQixjQUFjLEVBQUUsRUFBRTtRQUNsQixTQUFTLEVBQUUsS0FBSztRQUNoQixRQUFRLEVBQUUsS0FBSztRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsSUFBSTtLQUNoQixDQUFDO0lBQ00sVUFBVSxDQUFhO0lBRS9CLFlBQW9CLGNBQThCO1FBQTlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUNPLFFBQVEsQ0FBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLGFBQWE7UUFDeEMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckQsT0FBTyxDQUFDLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQztRQUN2QixJQUFJLENBQUMsVUFB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QUNwRyxDQUFDLENBQ0osQ0FBQTtJQUNULENBQUM7SUFFTyxVQUFVLENBQUMsYUFBYTtRQUM1QixNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLDJEQUEyRDtRQUMzRCxJQUFJLElBQUksRUFBRTtZQUNOLDJCQUEyQjtZQUMzQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDakM7YUFBTTtZQUNILE9BQU8sU0FBUyxDQUFDO1NBQ3BCO0lBQ0wsQ0FBQzttRkF4S1EseUJBQXlCO2dFQUF6Qix5QkFBeUIsV0FBekIseUJBQXlCLG1CQUh0QixNQUFNOztpRkFHVCx5QkFBeUI7Y0FKckMsVUFBVTtlQUFDO2dCQUNSLFVBQVUsRUFBRSxNQUFNO2FBQ3JCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcclxuaW1wb3J0IHsgQXBwRGF0YSB9IGZyb20gXCIuLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEubW9kZWxcIjtcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tIFwiLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2VcIjtcclxuaW1wb3J0IHsgQVBJS2V5VXRpbCB9IGZyb20gXCIuL2FwaS1rZXktdXRpbFwiO1xyXG5ASW5qZWN0YWJsZSh7XHJcbiAgICBwcm92aWRlZEluOiAncm9vdCcsXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgQXBwbGljYXRpb25TdGF0ZVN0b3JlVXRpbCB7XHJcbiAgICBhcHBEYXRhOiBBcHBEYXRhID0ge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBzdGVwSWQ6ICcnLFxyXG4gICAgICAgIGFwaUtleTogJycsXHJcbiAgICAgICAgcmVxdWVzdEFwaUtleTogW10sXHJcbiAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgcHJpdmF0ZSBhcGlLZXlVdGlsOiBBUElLZXlVdGlsO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlKSB7XHJcbiAgICAgICAgdGhpcy5hcGlLZXlVdGlsID0gbmV3IEFQSUtleVV0aWwoKTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgc2V0U3RhdGUoc3RlcElkLCB0eXBlLCBwcm9ncmVzc0JhcklkKSB7XHJcbiAgICAgICAgY29uc3Qgc3RlcE1hcCA9IHRoaXMuZ2V0U3RlcE1hcChwcm9ncmVzc0JhcklkKSB8fCB7fTtcclxuICAgICAgICBzdGVwTWFwW3N0ZXBJZF0gPSB0eXBlO1xyXG4gICAgICAgIHRoaXMuc2V0U3RlcE1hcChwcm9ncmVzc0JhcklkLCBzdGVwTWFwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBhbnkgc3RhdGVcclxuICAgICAqIEBwYXJhbSBwcm9ncmVzc0JhcklkXHJcbiAgICAgKiBAcGFyYW0gc3RlcElkXHJcbiAgICAgKiBAcGFyYW0gdHlwZVxyXG4gICAgICovXHJcbiAgICAvLyBkbyBub3QgdXNlIHRoZSBmdW5jdGlvbiB1bnRpbCBhbmQgdW5sZXNzIGV4dHJlbWVseSByZXF1aXJlZFxyXG4gICAgc2V0QW55U3RhdGUocHJvZ3Jlc3NCYXJJZCwgc3RlcElkLCB0eXBlKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGVwSWQsIHR5cGUsIHByb2dyZXNzQmFySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXRzIHByb2dyZXNzIGJhclxyXG4gICAgICogQHBhcmFtIHByb2dyZXNzQmFySWRcclxuICAgICAqIEBwYXJhbSBzdGVwSWRcclxuICAgICAqL1xyXG4gICAgc2V0UHJvZ3Jlc3NTdGF0dXNPbkxhc3RTYXZlZFN0YXRlKHByb2dyZXNzQmFySWQsIHN0ZXBJZCwgcHJvZ3Jlc3NCYXJNYXApIHtcclxuICAgICAgICBjb25zdCBzdGVwTWFwID0gdGhpcy5nZXRTdGVwTWFwKHByb2dyZXNzQmFySWQpIHx8IHt9O1xyXG4gICAgICAgIC8vIHN0ZXBNYXBbc3RlcElkXSA9IHR5cGU7XHJcbiAgICAgICAgaWYgKHN0ZXBNYXApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RlcElkcyA9IHByb2dyZXNzQmFyTWFwLnN0ZXBzLmZpbHRlcihzdGVwRGF0YSA9PiBzdGVwRGF0YS50aWQgPT09IHN0ZXBJZClbMF07XHJcbiAgICAgICAgICAgIGlmIChzdGVwSWRzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGVwSW5kZXggPSBwcm9ncmVzc0Jhck1hcC5zdGVwcy5pbmRleE9mKHN0ZXBJZHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXBJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9ncmVzc0Jhck1hcC5zdGVwcy5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluZGV4IDw9IHN0ZXBJbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcE1hcFt2YWx1ZS50aWRdID0gJ1NUQVRFX0NPTVBMRVRFJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBNYXBbdmFsdWUudGlkXSA9ICdTVEFURV9QRU5ESU5HJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0ZXBNYXAocHJvZ3Jlc3NCYXJJZCwgc3RlcE1hcCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgYWN0aXZlIHN0YXRlIGFjdGl2ZSB0byBhIHN0ZXAgaW4gcHJvZ3Jlc3MgYmFyXHJcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3NCYXJJZFxyXG4gICAgICogQHBhcmFtIHN0ZXBJZFxyXG4gICAgICovXHJcbiAgICBzZXRBY3RpdmUocHJvZ3Jlc3NCYXJJZCwgc3RlcElkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGVwSWQsICdTVEFURV9BQ1RJVkUnLCBwcm9ncmVzc0JhcklkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBhY3RpdmUgc3RhdGUgYWN0aXZlIHRvIGEgc3RlcCBpbiBwcm9ncmVzcyBiYXJcclxuICAgICAqIEBwYXJhbSBwcm9ncmVzc0JhcklkXHJcbiAgICAgKiBAcGFyYW0gc3RlcElkXHJcbiAgICAgKi9cclxuICAgIHNldFBlbmRpbmcocHJvZ3Jlc3NCYXJJZCwgc3RlcElkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGVwSWQsICdTVEFURV9QRU5ESU5HJywgcHJvZ3Jlc3NCYXJJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgYWN0aXZlIHN0YXRlIGluY29tcGxldGUgdG8gYSBzdGVwIGluIHByb2dyZXNzIGJhclxyXG4gICAgICogQHBhcmFtIHByb2dyZXNzQmFySWRcclxuICAgICAqIEBwYXJhbSBzdGVwSWRcclxuICAgICAqL1xyXG4gICAgc2V0SW5jb21wbGV0ZShwcm9ncmVzc0JhcklkLCBzdGVwSWQpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHN0ZXBJZCwgJ1NUQVRFX0lOQ09NUExFVEUnLCBwcm9ncmVzc0JhcklkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBhY3RpdmUgc3RhdGUgY29tcGxldGUgdG8gYSBzdGVwIGluIHByb2dyZXNzIGJhclxyXG4gICAgICogQHBhcmFtIHByb2dyZXNzQmFySWRcclxuICAgICAqIEBwYXJhbSBzdGVwSWRcclxuICAgICAqL1xyXG4gICAgc2V0Q29tcGxldGUocHJvZ3Jlc3NCYXJJZCwgc3RlcElkKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShzdGVwSWQsICdTVEFURV9DT01QTEVURScsIHByb2dyZXNzQmFySWQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZ2V0IGN1cnJlbnQgc3RlcCBzdGF0ZVxyXG4gICAgICogQHBhcmFtIHByb2dyZXNzQmFySWRcclxuICAgICAqIEBwYXJhbSBzdGVwSWRcclxuICAgICAqL1xyXG4gICAgZ2V0U3RlcFN0YXRlKHByb2dyZXNzQmFySWQsIHN0ZXBJZCkge1xyXG4gICAgICAgIGNvbnN0IHN0ZXBNYXAgPSB0aGlzLmdldFN0ZXBNYXAocHJvZ3Jlc3NCYXJJZCkgfHwge307XHJcbiAgICAgICAgcmV0dXJuIHN0ZXBNYXBbc3RlcElkXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCBhY3RpdmUgc3RhdGUgcGVuZGluZyB0byBhIHN0ZXAgaW4gcHJvZ3Jlc3MgYmFyXHJcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3NCbG9ja1xyXG4gICAgICogQHBhcmFtIHN0ZXBJZFxyXG4gICAgICovXHJcbiAgICBzZXREZWZhdWx0U3RhdGUocHJvZ3Jlc3NCbG9jaywgc3RlcElkKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBwcm9ncmVzc19iYXJfaWQsXHJcbiAgICAgICAgICAgIHJlcXVlc3RfYXBpX2tleSxcclxuICAgICAgICAgICAgcmVzcG9uc2VfYXBpX2tleSxcclxuICAgICAgICAgICAgYXBpX2tleVxyXG4gICAgICAgIH0gPSBwcm9ncmVzc0Jsb2NrO1xyXG4gICAgICAgIGNvbnN0IHN0ZXBNYXAgPSB0aGlzLmdldFN0ZXBNYXAocHJvZ3Jlc3NfYmFyX2lkKSB8fCB7fTtcclxuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RlcE1hcCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmICghc3RlcE1hcFtzdGVwSWRdKSB7XHJcbiAgICAgICAgICAgICAgICBzdGVwTWFwW3N0ZXBJZF0gPSAnU1RBVEVfUEVORElORyc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogcHJvZ3Jlc3NfYmFyX2lkLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VBcGlLZXk6IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMocmVzcG9uc2VfYXBpX2tleSksXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QXBpS2V5OiB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHJlcXVlc3RfYXBpX2tleSksXHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IGFwaV9rZXlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5zZXRBcHBEYXRhKHsgLi4udGhpcy5hcHBEYXRhLCAuLi5vYmogfSk7XHJcbiAgICAgICAgICAgIHN0ZXBNYXBbc3RlcElkXSA9ICdTVEFURV9QRU5ESU5HJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTdGVwTWFwKHByb2dyZXNzX2Jhcl9pZCwgc3RlcE1hcCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgc3RhdGUgdmFsdWUgc2V0IHRvIGEgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgKiBAcGFyYW0gcHJvZ3Jlc3NCYXJJZFxyXG4gICAgICogQHBhcmFtIHZhbHVlXHJcbiAgICAgKi9cclxuICAgIHNldFN0YXRlVmFsdWUocHJvZ3Jlc3NCYXJJZCwgdmFsdWUpIHtcclxuICAgICAgICB0aGlzLnNldFN0ZXBNYXAocHJvZ3Jlc3NCYXJJZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwcml2YXRlIHNldFN0ZXBNYXAocHJvZ3Jlc3NCYXJJZCwgb2JqKSB7XHJcbiAgICAgICAgLy8gd2luZG93LnNlc3Npb25TdG9yYWdlLnNldEl0ZW0oJ3N0YXRlLW1hcCcsIEpTT04uc3RyaW5naWZ5KG9iaikpO1xyXG4gICAgICAgIC8vIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdzdGF0ZS1tYXAnLCBidG9hKEpTT04uc3RyaW5naWZ5KG9iaikpKTtcclxuICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEFwcERhdGFCeUZpZWxkSWQocHJvZ3Jlc3NCYXJJZCkucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgICAgICAgdmFsID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgdmFsLCB7IHZhbHVlOiBidG9hKEpTT04uc3RyaW5naWZ5KG9iaikpIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0U3RlcE1hcChwcm9ncmVzc0JhcklkKSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHByb2dyZXNzQmFySWQpO1xyXG4gICAgICAgIC8vIGNvbnN0IGRhdGEgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnc3RhdGUtbWFwJyk7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGF0b2IoZGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==