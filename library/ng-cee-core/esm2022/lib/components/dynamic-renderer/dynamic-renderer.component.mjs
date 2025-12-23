import { CommonModule } from '@angular/common';
import { Component, Input, Inject, ViewContainerRef, EventEmitter } from '@angular/core';
import { take } from 'rxjs/operators';
import { APIKeyUtil } from '../../utils/api-key-util';
import { CommonUtil } from '../../utils/common-util';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import * as i0 from "@angular/core";
import * as i1 from "../../models/app-data/app-data.service";
import * as i2 from "../../models/api-data/api-data.service";
import * as i3 from "../../services/shared-events-service.service";
import * as i4 from "../../services/dynamic-component-handler.service";
export class DynamicRendererComponent {
    appDataService;
    apiDataService;
    sharedEventsService;
    dynamicHandlerService;
    moduleName;
    fieldData;
    stepId;
    apiKeyUtil;
    store = {};
    fieldData$;
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
        linkedBlockId: '',
        isRepeatedField: false,
        repeatedBlockFieldId: '',
        requestApiKey: [],
        responseApiKey: [],
        dataFormatSeparator: '',
        mandatory: false,
        editable: false,
        visible: false,
        value: '',
        isValid: true
    };
    variableObject = {}; // variable object
    setAPIKeyUtil;
    commonUtil;
    conditionalUtil;
    constructor(appDataService, apiDataService, sharedEventsService, dynamicHandlerService, viewContainerRef) {
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsService = sharedEventsService;
        this.dynamicHandlerService = dynamicHandlerService;
        this.apiKeyUtil = new APIKeyUtil();
        this.commonUtil = new CommonUtil();
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.dynamicHandlerService.setRootViewContainerRef(viewContainerRef);
        this.conditionalUtil = new ConditionalUtil(this.singleCondition, appDataService, apiDataService);
    }
    ngOnInit() {
        this.processFieldData();
        this.dynamicHandlerService.addDynamicComponent(this.moduleName, {
            fieldData: this.fieldData,
            stepId: this.stepId,
            store: this.store
        });
    }
    processFieldData() {
        this.store['value'] = '';
        this.store['setValue'] = () => { };
        this.store['onAPICallback'] = new EventEmitter();
        this.store['showMandatoryErrorMsg'] = new EventEmitter();
        if (this.fieldData && this.fieldData.unique_id) {
            this.appData.id = this.fieldData.unique_id;
            this.appData.stepId = this.stepId;
            if (this.isSingleApiKey) {
                this.appData.apiKey = this.fieldData.api_key;
            }
            else {
                this.appData.requestApiKey = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key);
                this.appData.responseApiKey =
                    this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
            }
            const fieldUniqueId = this.fieldData.unique_id;
            if (this.fieldData.is_mandatory === 1) {
                this.appData.mandatory = true;
            }
            this.fieldData$ = this.appDataService.getAppDataByFieldId(fieldUniqueId);
            this.fieldData$
                .pipe(take(1))
                .subscribe(val => {
                if (val) {
                    this.store['value'] = val.value;
                }
                else {
                    this.appDataService.addAppData(this.appData);
                }
            }, err => {
                console.error(err);
            });
            const apiValue = this.setFieldValue();
            if (apiValue) {
                this.appData.value = apiValue;
                this.appDataService.updateAppData(Object.assign({}, this.appData));
                this.store['value'] = apiValue;
            }
            this.store['setValue'] = (v) => {
                this.appData.value = v;
                this.appDataService.setAppData(Object.assign({}, this.appData));
            };
            this.variableObject['emitApiSuccessResponse_' + this.appData.id] =
                this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
                    if (res) {
                        const result = this.setAPIKeyUtil.setApiCallBackData(this.fieldData, res);
                        if (result) {
                            this.store['onAPICallback'].emit(result);
                        }
                    }
                });
            this.variableObject['emitOnDataSetOrUpdated_' + this.appData.id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
                if (res.index) {
                }
                else {
                    this.onSetSessionData(res.apiKey, res.value);
                }
            });
            this.variableObject['showMandatoryErrorMsg_' + this.appData.id] = this.sharedEventsService.showMandatoryErrorMsg.subscribe((res) => {
                if (res && Array.isArray(res.fields) && res.fields.includes(this.appData.id)) {
                    this.store['showMandatoryErrorMsg'].emit(true);
                }
                else {
                    this.store['showMandatoryErrorMsg'].emit(false);
                }
            });
            this.onSetSessionData(this.fieldData.unique_id, this.store['value']);
        }
    }
    onSetSessionData(apiKey, value) {
        let mandatoryCondition = this.conditionalUtil.checkMandatory(this.fieldData, String(this.appData.id), value);
        if (mandatoryCondition !== undefined) {
            this.appData.mandatory = mandatoryCondition;
        }
        if (this.fieldData.is_mandatory === 2) {
            this.appDataService.updateAppData(Object.assign({}, this.appData));
        }
    }
    setFieldValue() {
        let value;
        // TODO: check functionality
        if (this.fieldData.response_api_key && this.fieldData.response_api_key.includes('|')) {
            // set concatenated field values
            const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
            for (const key of apiKeys) {
                const apiCallbackData = this.returnValueFromCallback(key);
                if (apiCallbackData !== null && apiCallbackData !== undefined) {
                    value = apiCallbackData;
                }
            }
        }
        else {
            value = this.returnValueFromCallback(this.fieldData.response_api_key);
        }
        return value;
    }
    /**
     * function that returns value from set api callback util
     * @param keyName the api key name
     */
    returnValueFromCallback(keyName) {
        const handlerValue = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(keyName)) ?
            this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(keyName)).value : {};
        return this.setAPIKeyUtil.setApiCallBackData(keyName, handlerValue);
    }
    // all getter and setters go here
    get singleCondition() {
        return localStorage.getItem('isSingleCondition') === 'true' ? true : false;
    }
    get isSingleApiKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    ngOnDestroy() {
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
    }
    static ɵfac = function DynamicRendererComponent_Factory(t) { return new (t || DynamicRendererComponent)(i0.ɵɵdirectiveInject(i1.AppDataService), i0.ɵɵdirectiveInject(i2.ApiDataService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.DynamicComponentHandlerService), i0.ɵɵdirectiveInject(ViewContainerRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicRendererComponent, selectors: [["app-dynamic-renderer"]], inputs: { moduleName: "moduleName", fieldData: "fieldData", stepId: "stepId" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 0, vars: 0, template: function DynamicRendererComponent_Template(rf, ctx) { }, dependencies: [CommonModule] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-dynamic-renderer', standalone: true, imports: [CommonModule], template: "<!-- <p>dynamic-renderer works!</p> -->\r\n" }]
    }], () => [{ type: i1.AppDataService }, { type: i2.ApiDataService }, { type: i3.SharedEventsServiceService }, { type: i4.DynamicComponentHandlerService }, { type: undefined, decorators: [{
                type: Inject,
                args: [ViewContainerRef]
            }] }], { moduleName: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], stepId: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DynamicRendererComponent, { className: "DynamicRendererComponent", filePath: "lib\\components\\dynamic-renderer\\dynamic-renderer.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9keW5hbWljLXJlbmRlcmVyL2R5bmFtaWMtcmVuZGVyZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxNQUFNLEVBQUUsZ0JBQWdCLEVBQUUsWUFBWSxFQUEwQixNQUFNLGVBQWUsQ0FBQztBQUN6SCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFNdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7Ozs7OztBQVNuRSxNQUFNLE9BQU8sd0JBQXdCO0lBaUM1QjtJQUNBO0lBQ007SUFDTDtJQWxDQSxVQUFVLENBQVM7SUFDWCxTQUFTLENBQU07SUFDZixNQUFNLENBQU07SUFFMUIsVUFBVSxDQUFhO0lBQzFCLEtBQUssR0FBUSxFQUFFLENBQUM7SUFDYixVQUFVLENBQUM7SUFFWCxPQUFPLEdBQVk7UUFDZixFQUFFLEVBQUUsRUFBRTtRQUNOLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixVQUFVLEVBQUUsRUFBRTtRQUNkLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLG9CQUFvQixFQUFF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O0lBQ2pDLElBQUksZUFBZTtRQUNmLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0UsQ0FBQztJQUVELElBQUksY0FBYztRQUNkLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFFLENBQUM7SUFFSixXQUFXO1FBQ1YsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQzdCLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDMUIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUMxQztTQUNKO0lBQ1IsQ0FBQztrRkEvTFcsd0JBQXdCLHVOQXFDM0IsZ0JBQWdCOzZEQXJDYix3QkFBd0Isb1JBRjFCLFlBQVk7O2lGQUVWLHdCQUF3QjtjQVBwQyxTQUFTOzJCQUNDLHNCQUFzQixjQUdwQixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUM7O3NCQXVDckIsTUFBTTt1QkFBQyxnQkFBZ0I7cUJBbkNoQixVQUFVO2tCQUFsQixLQUFLO1lBQ1csU0FBUztrQkFBekIsS0FBSztZQUNXLE1BQU07a0JBQXRCLEtBQUs7O2tGQUpNLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgSW5qZWN0LCBWaWV3Q29udGFpbmVyUmVmLCBFdmVudEVtaXR0ZXIsIE9uRGVzdHJveSwgZm9yd2FyZFJlZiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0NvbXBvbmVudEhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvZHluYW1pYy1jb21wb25lbnQtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEFQSUtleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9hcGkta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBTZXRBUElDYWxsYmFja0RhdGEgfSBmcm9tICcuLi8uLi91dGlscy9zZXQtYXBpLWNhbGxiYWNrLWRhdGEtdXRpbCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbmFsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1jb25kaXRpb25hbC11dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWR5bmFtaWMtcmVuZGVyZXInLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9keW5hbWljLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcblx0c3RhbmRhbG9uZTogdHJ1ZSxcclxuXHRpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHluYW1pY1JlbmRlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuXHRASW5wdXQoKSBtb2R1bGVOYW1lOiBzdHJpbmc7XHJcblx0QElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuXHRASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG5cclxuICAgIGFwaUtleVV0aWw6IEFQSUtleVV0aWw7XHJcblx0c3RvcmU6IGFueSA9IHt9O1xyXG4gICAgZmllbGREYXRhJDtcclxuXHRcclxuICAgIGFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBmaWVsZExhYmVsOiAnJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgZGF0YUZvcm1hdFNlcGFyYXRvcjogJycsXHJcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIGlzVmFsaWQ6IHRydWVcclxuICAgIH07XHJcbiAgICB2YXJpYWJsZU9iamVjdCA9IHt9OyAvLyB2YXJpYWJsZSBvYmplY3RcclxuXHRzZXRBUElLZXlVdGlsOiBTZXRBUElDYWxsYmFja0RhdGE7XHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG5cdGNvbmRpdGlvbmFsVXRpbDogQ29uZGl0aW9uYWxVdGlsO1xyXG5cclxuXHRjb25zdHJ1Y3RvcihcclxuXHRcdHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcblx0XHRwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuXHRcdHByaXZhdGUgZHluYW1pY0hhbmRsZXJTZXJ2aWNlOiBEeW5hbWljQ29tcG9uZW50SGFuZGxlclNlcnZpY2UsXHJcblx0XHRASW5qZWN0KFZpZXdDb250YWluZXJSZWYpIHZpZXdDb250YWluZXJSZWZcclxuXHQpIHtcclxuXHRcdHRoaXMuYXBpS2V5VXRpbCA9IG5ldyBBUElLZXlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLnNldEFQSUtleVV0aWwgPSBuZXcgU2V0QVBJQ2FsbGJhY2tEYXRhKGFwaURhdGFTZXJ2aWNlKTtcclxuXHRcdHRoaXMuZHluYW1pY0hhbmRsZXJTZXJ2aWNlLnNldFJvb3RWaWV3Q29udGFpbmVyUmVmKHZpZXdDb250YWluZXJSZWYpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxVdGlsID0gbmV3IENvbmRpdGlvbmFsVXRpbChcclxuICAgICAgICAgICAgdGhpcy5zaW5nbGVDb25kaXRpb24sXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSk7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMucHJvY2Vzc0ZpZWxkRGF0YSgpXHJcblxyXG5cdFx0dGhpcy5keW5hbWljSGFuZGxlclNlcnZpY2UuYWRkRHluYW1pY0NvbXBvbmVudCh0aGlzLm1vZHVsZU5hbWUsIHtcclxuXHRcdFx0ZmllbGREYXRhIDogdGhpcy5maWVsZERhdGEsIFxyXG5cdFx0XHRzdGVwSWQgOiB0aGlzLnN0ZXBJZCwgXHJcblx0XHRcdHN0b3JlIDogdGhpcy5zdG9yZVxyXG5cdFx0fSk7XHJcblx0fVxyXG5cclxuXHRwcm9jZXNzRmllbGREYXRhKCkge1xyXG5cdFx0dGhpcy5zdG9yZVsndmFsdWUnXSA9ICcnO1xyXG5cdFx0dGhpcy5zdG9yZVsnc2V0VmFsdWUnXSA9ICgpID0+IHt9O1xyXG5cdFx0dGhpcy5zdG9yZVsnb25BUElDYWxsYmFjayddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xyXG5cdFx0dGhpcy5zdG9yZVsnc2hvd01hbmRhdG9yeUVycm9yTXNnJ10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG5cdFx0aWYgKHRoaXMuZmllbGREYXRhICYmIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkge1x0XHRcdFxyXG5cdFx0XHR0aGlzLmFwcERhdGEuaWQgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcblx0XHRcdHRoaXMuYXBwRGF0YS5zdGVwSWQgPSB0aGlzLnN0ZXBJZDtcclxuXHRcdFx0aWYgKHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuXHRcdFx0XHR0aGlzLmFwcERhdGEuYXBpS2V5ID0gdGhpcy5maWVsZERhdGEuYXBpX2tleTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmFwcERhdGEucmVxdWVzdEFwaUtleSA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KTtcclxuXHRcdFx0XHR0aGlzLmFwcERhdGEucmVzcG9uc2VBcGlLZXkgPVxyXG5cdFx0XHRcdFx0dGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuXHRcdFx0XHRcdFx0dGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXModGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNvbnN0IGZpZWxkVW5pcXVlSWQgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcblx0XHRcdGlmICh0aGlzLmZpZWxkRGF0YS5pc19tYW5kYXRvcnkgPT09IDEpIHtcclxuXHRcdFx0XHR0aGlzLmFwcERhdGEubWFuZGF0b3J5ID0gdHJ1ZTtcclxuXHRcdFx0fVxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YSQgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEFwcERhdGFCeUZpZWxkSWQoZmllbGRVbmlxdWVJZCk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhJFxyXG4gICAgICAgICAgICAgICAgLnBpcGUodGFrZSgxKSlcclxuICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsID0+IHtcclxuXHRcdFx0XHRcdFx0aWYgKHZhbCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMuc3RvcmVbJ3ZhbHVlJ10gPSB2YWwudmFsdWU7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy5hcHBEYXRhU2VydmljZS5hZGRBcHBEYXRhKHRoaXMuYXBwRGF0YSk7XHJcblx0XHRcdFx0XHRcdH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHRcdFx0Y29uc3QgYXBpVmFsdWUgPSB0aGlzLnNldEZpZWxkVmFsdWUoKTtcclxuXHRcdFx0aWYgKGFwaVZhbHVlKSB7XHJcblx0XHRcdFx0dGhpcy5hcHBEYXRhLnZhbHVlID0gYXBpVmFsdWU7XHJcblx0XHRcdFx0dGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBwRGF0YSkpO1xyXG5cdFx0XHRcdHRoaXMuc3RvcmVbJ3ZhbHVlJ10gPSBhcGlWYWx1ZTtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0dGhpcy5zdG9yZVsnc2V0VmFsdWUnXSA9ICh2KSA9PiB7XHJcblx0XHRcdFx0dGhpcy5hcHBEYXRhLnZhbHVlID0gdjtcclxuXHRcdFx0XHR0aGlzLmFwcERhdGFTZXJ2aWNlLnNldEFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcHBEYXRhKSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHRoaXMudmFyaWFibGVPYmplY3RbJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArIHRoaXMuYXBwRGF0YS5pZF0gPVxyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCByZXMpO1xyXG5cdFx0XHRcdFx0aWYgKHJlc3VsdCkge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0b3JlWydvbkFQSUNhbGxiYWNrJ10uZW1pdChyZXN1bHQpO1xyXG5cdFx0XHRcdFx0fVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblx0XHRcdHRoaXMudmFyaWFibGVPYmplY3RbJ2VtaXRPbkRhdGFTZXRPclVwZGF0ZWRfJyArIHRoaXMuYXBwRGF0YS5pZF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNldFNlc3Npb25EYXRhKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHRcdFx0dGhpcy52YXJpYWJsZU9iamVjdFsnc2hvd01hbmRhdG9yeUVycm9yTXNnXycgKyB0aGlzLmFwcERhdGEuaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnNob3dNYW5kYXRvcnlFcnJvck1zZy5zdWJzY3JpYmUoXHJcblx0XHRcdChyZXM6IGFueSkgPT4ge1xyXG5cdFx0XHRcdGlmIChyZXMgJiYgQXJyYXkuaXNBcnJheShyZXMuZmllbGRzKSAmJiByZXMuZmllbGRzLmluY2x1ZGVzKHRoaXMuYXBwRGF0YS5pZCkpIHtcclxuXHRcdFx0XHRcdHRoaXMuc3RvcmVbJ3Nob3dNYW5kYXRvcnlFcnJvck1zZyddLmVtaXQodHJ1ZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGVsc2Uge1xyXG5cdFx0XHRcdFx0dGhpcy5zdG9yZVsnc2hvd01hbmRhdG9yeUVycm9yTXNnJ10uZW1pdChmYWxzZSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5vblNldFNlc3Npb25EYXRhKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdGhpcy5zdG9yZVsndmFsdWUnXSk7XHJcblx0XHR9XHJcblx0XHRcclxuXHR9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuXHRcdGxldCBtYW5kYXRvcnlDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja01hbmRhdG9yeSh0aGlzLmZpZWxkRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksIHZhbHVlKTtcclxuXHRcdCAgICAgICAgXHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUNvbmRpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5tYW5kYXRvcnkgPSBtYW5kYXRvcnlDb25kaXRpb247XHJcbiAgICAgICAgfVxyXG5cdFx0aWYgKHRoaXMuZmllbGREYXRhLmlzX21hbmRhdG9yeSA9PT0gMikge1xyXG5cdFx0XHR0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcHBEYXRhKSk7XHJcblx0XHR9XHJcbiAgICB9XHJcblx0XHJcbiAgICBzZXRGaWVsZFZhbHVlKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICAvLyBUT0RPOiBjaGVjayBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkgJiYgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgIC8vIHNldCBjb25jYXRlbmF0ZWQgZmllbGQgdmFsdWVzXHJcbiAgICAgICAgICAgIGNvbnN0IGFwaUtleXMgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgYXBpS2V5cykge1xyXG5cdFx0XHRcdGNvbnN0IGFwaUNhbGxiYWNrRGF0YSA9IHRoaXMucmV0dXJuVmFsdWVGcm9tQ2FsbGJhY2soa2V5KTtcclxuXHRcdFx0XHRpZiAoYXBpQ2FsbGJhY2tEYXRhICE9PSBudWxsICYmIGFwaUNhbGxiYWNrRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdFx0XHR2YWx1ZSA9IGFwaUNhbGxiYWNrRGF0YTtcclxuXHRcdFx0XHR9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHRoaXMucmV0dXJuVmFsdWVGcm9tQ2FsbGJhY2sodGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcblx0LyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgdmFsdWUgZnJvbSBzZXQgYXBpIGNhbGxiYWNrIHV0aWxcclxuICAgICAqIEBwYXJhbSBrZXlOYW1lIHRoZSBhcGkga2V5IG5hbWVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5WYWx1ZUZyb21DYWxsYmFjayhrZXlOYW1lKSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlclZhbHVlID1cclxuICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZShrZXlOYW1lKSkgP1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZShrZXlOYW1lKSkudmFsdWUgOiB7fTtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShrZXlOYW1lLCBoYW5kbGVyVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsbCBnZXR0ZXIgYW5kIHNldHRlcnMgZ28gaGVyZVxyXG4gICAgZ2V0IHNpbmdsZUNvbmRpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaXNTaW5nbGVBcGlLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaW5nbGVBcGlLZXknKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuXHRuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuXHRcdGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3Rba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblx0fVxyXG5cclxufVxyXG4iXX0=