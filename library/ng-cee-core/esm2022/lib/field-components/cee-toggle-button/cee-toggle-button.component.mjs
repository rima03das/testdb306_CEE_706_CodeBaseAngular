import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule, NgStyle } from '@angular/common';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../services/shared-events-service.service";
import * as i3 from "../../services/internal-cee-emitter-service.service";
import * as i4 from "../../services/cee-api-service.service";
import * as i5 from "@angular/router";
import * as i6 from "../../services/wfe-step-loader.service";
import * as i7 from "../../models/app-data/app-data.service";
import * as i8 from "../../models/api-data/api-data.service";
import * as i9 from "@angular/material/dialog";
import * as i10 from "@angular/material/snack-bar";
import * as i11 from "@angular/common/http";
import * as i12 from "@angular/common";
import * as i13 from "../../directives/tooltip/tooltip.directive";
const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
function CeeToggleButtonComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 6);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeToggleButtonComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 7);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
} }
function CeeToggleButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
    i0.ɵɵlistener("click", function CeeToggleButtonComponent_div_0_Template_button_click_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleClickListener($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeToggleButtonComponent_div_0_span_3_Template, 2, 0, "span", 4)(4, CeeToggleButtonComponent_div_0_button_4_Template, 2, 1, "button", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("name", ctx_r1.fieldData.api_key);
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(9, _c0, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color))("disabled", !ctx_r1.isEditable)("innerHtml", ctx_r1.inputValue ? ctx_r1.label1 : ctx_r1.label2, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : ctx_r1.inputValue ? ctx_r1.label1 : ctx_r1.label2)("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
export class CeeToggleButtonComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    ceeApiService;
    router;
    sharedEventsServices;
    wfeStepLoaderService;
    appDataService;
    apiDataService;
    dialog;
    snackBar;
    http;
    stepId;
    fieldData;
    sectionData;
    keepState = false;
    primaryKeyIndex;
    rowData;
    rootData;
    sessionKeyUtil;
    setApiCallBackUtil;
    keyValuePair = [];
    value1 = '';
    value2 = '';
    label1 = '';
    label2 = '';
    inputValue = true;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, router, 
    // public ceeInitService: CeeInitServiceService,
    sharedEventsServices, 
    // public ceeLogHandlerService: CeeLogHandlerService,
    wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.sharedEventsServices = sharedEventsServices;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.sessionKeyUtil = new SessionKeyUtil();
        this.setApiCallBackUtil = new SetAPICallbackData(apiDataService);
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    setKeyValue() {
        if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
            for (let item of this.fieldData.possible_values) {
                let pair = item.split("||");
                this.keyValuePair.push({
                    value: pair[0],
                    label: pair[1],
                });
            }
        }
    }
    onViewDataInit() {
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.setKeyValue();
        if (this.keyValuePair.length > 1) {
            this.value1 = this.keyValuePair[0]['value'];
            this.value2 = this.keyValuePair[1]['value'];
            this.label1 = this.keyValuePair[0]['label'];
            this.label2 = this.keyValuePair[1]['label'];
            if (this.rowData && this.rowData.hasOwnProperty('value')) {
                this.fieldValue = this.rowData.value;
            }
            if (this.fieldValue === '') {
                this.fieldValue = this.value1;
            }
            this.inputValue = (this.value1 == this.fieldValue) ? true : false;
        }
    }
    concatData() { }
    onEmptySession(data) {
        //throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const fieldVal = this.setApiCallBackUtil.setApiCallBackData(this.fieldData, data);
        if (fieldVal) {
            this.fieldValue = fieldVal;
            this.inputValue = (this.value1 == this.fieldValue) ? true : false;
        }
    }
    /* Special chek for button click */
    toggleClickListener(e) {
        this.inputValue = !this.inputValue;
        this.updateFieldData(this.inputValue ? this.value1 : this.value2);
        this.onComponentEvent('OnClick', {}, true, { uniqueId: this.fieldData.unique_id, value: this.inputValue ? this.value1 : this.value2 });
        this.setModalorSanckBarMessage(this.fieldData.unique_id, e);
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']',
        //     'fieldData.possible_values[*]': 'fieldData.possible_values'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
    }
    static ɵfac = function CeeToggleButtonComponent_Factory(t) { return new (t || CeeToggleButtonComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.CeeApiService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.AppDataService), i0.ɵɵdirectiveInject(i8.ApiDataService), i0.ɵɵdirectiveInject(i9.MatDialog), i0.ɵɵdirectiveInject(i10.MatSnackBar), i0.ɵɵdirectiveInject(i11.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeToggleButtonComponent, selectors: [["app-cee-toggle-button"]], inputs: { stepId: "stepId", fieldData: "fieldData", sectionData: "sectionData", keepState: "keepState", primaryKeyIndex: "primaryKeyIndex", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-field"], ["type", "button", 1, "cee-toogle-button", 3, "click", "name", "id", "ngStyle", "disabled", "innerHtml"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"]], template: function CeeToggleButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeToggleButtonComponent_div_0_Template, 5, 18, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgStyle, MatTooltipModule, CommonModule, i12.NgIf, TooltipModule, i13.TooltipDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeToggleButtonComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-toggle-button', standalone: true, imports: [NgStyle, MatTooltipModule, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-field\">\r\n\t\t<button name=\"{{fieldData.api_key}}\" class=\"cee-toogle-button\" id=\"{{fieldData.unique_id}}\"\r\n\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : inputValue?label1:label2\"\r\n\t\t\t[attr.tabindex]=\"tabIndexValue\" [ngStyle]=\"{\r\n                'font-family': fieldData.field_style.font_name,\r\n                'font-size': fieldData.field_style.font_size,\r\n                'font-style': fieldData.field_style.font_style,\r\n                'color': fieldData.field_style.font_color,\r\n                'border-color': fieldData.field_style.border_color,\r\n                'height': fieldData.field_style.field_height,\r\n                'width': fieldData.field_style.field_width,\r\n                'background-color': fieldData.field_style.background_color\r\n            }\" type=\"button\" (click)=\"toggleClickListener($event)\" [disabled]=\"!isEditable\"\r\n\t\t\t[innerHtml]=\"inputValue?label1:label2\"></button>\r\n\t\t<span *ngIf=\"this.isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\r\n\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\">i</button>\r\n\t</div>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.CeeApiService }, { type: i5.Router }, { type: i2.SharedEventsServiceService }, { type: i6.WfeStepLoaderService }, { type: i7.AppDataService }, { type: i8.ApiDataService }, { type: i9.MatDialog }, { type: i10.MatSnackBar }, { type: i11.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], sectionData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeToggleButtonComponent, { className: "CeeToggleButtonComponent", filePath: "lib\\field-components\\cee-toggle-button\\cee-toggle-button.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRvZ2dsZS1idXR0b24uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRvZ2dsZS1idXR0b24vY2VlLXRvZ2dsZS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRvZ2dsZS1idXR0b24vY2VlLXRvZ2dsZS1idXR0b24uY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTBDLE1BQU0sZUFBZSxDQUFDO0FBQ2pHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVk3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFJOUQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHNUUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUHRFLCtCQUFzRDtJQUFDLGtCQUFDO0lBQUEsaUJBQU87OztJQUUvRCxpQ0FBbUc7SUFBQSxpQkFBQztJQUFBLGlCQUFTOzs7SUFBeEMsa0RBQTZCOzs7O0lBZmxHLEFBREQsQUFERCw4QkFBNkMsYUFDcEIsZ0JBYWlCO0lBRGIsMExBQVMsa0NBQTJC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eyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5cclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IENlZUluaXRTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1pbml0LXNlcnZpY2Uuc2VydmljZSc7XHJcbi8vIGltcG9ydCB7IENlZUxvZ0hhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWxvZy1oYW5kbGVyLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgU2Vzc2lvbktleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLWtleS11dGlsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgU2V0QVBJQ2FsbGJhY2tEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0LWFwaS1jYWxsYmFjay1kYXRhLXV0aWwnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLXRvZ2dsZS1idXR0b24nLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS10b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS10b2dnbGUtYnV0dG9uLmNvbXBvbmVudC5zY3NzJywgJy4uL2ZpZWxkLWNvbW1vbi5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW05nU3R5bGUsIE1hdFRvb2x0aXBNb2R1bGUsIENvbW1vbk1vZHVsZSxUb29sdGlwTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlVG9nZ2xlQnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHNlY3Rpb25EYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG5cclxuXHJcbiAgICBkZWNsYXJlIHNlc3Npb25LZXlVdGlsOiBTZXNzaW9uS2V5VXRpbDtcclxuICAgIHNldEFwaUNhbGxCYWNrVXRpbDogU2V0QVBJQ2FsbGJhY2tEYXRhO1xyXG4gICAga2V5VmFsdWVQYWlyOiBhbnkgPSBbXTtcclxuICAgIHZhbHVlMSA9ICcnO1xyXG4gICAgdmFsdWUyID0gJyc7XHJcbiAgICBsYWJlbDEgPSAnJztcclxuICAgIGxhYmVsMiA9ICcnO1xyXG4gICAgaW5wdXRWYWx1ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIC8vIHB1YmxpYyBjZWVJbml0U2VydmljZTogQ2VlSW5pdFNlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlczogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgLy8gcHVibGljIGNlZUxvZ0hhbmRsZXJTZXJ2aWNlOiBDZWVMb2dIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIodXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UsIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLCBkaWFsb2csIHNuYWNrQmFyLCBodHRwLCBjZWVBcGlTZXJ2aWNlLCByb3V0ZXIpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbktleVV0aWwgPSBuZXcgU2Vzc2lvbktleVV0aWwoKTtcclxuICAgICAgICB0aGlzLnNldEFwaUNhbGxCYWNrVXRpbCA9IG5ldyBTZXRBUElDYWxsYmFja0RhdGEoYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICAvLyBvbkRlc3Ryb3koKSB7XHJcbiAgICAvLyAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZXRLZXlWYWx1ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzICYmIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGl0ZW0gb2YgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcGFpciA9IGl0ZW0uc3BsaXQoXCJ8fFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMua2V5VmFsdWVQYWlyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwYWlyWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBwYWlyWzFdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50YWJJbmRleFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUYWJJbmRleCddO1xyXG4gICAgICAgIHRoaXMuc2V0S2V5VmFsdWUoKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlWYWx1ZVBhaXIubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlMSA9IHRoaXMua2V5VmFsdWVQYWlyWzBdWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlMiA9IHRoaXMua2V5VmFsdWVQYWlyWzFdWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMSA9IHRoaXMua2V5VmFsdWVQYWlyWzBdWydsYWJlbCddO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsMiA9IHRoaXMua2V5VmFsdWVQYWlyWzFdWydsYWJlbCddO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5yb3dEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLnZhbHVlMTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAodGhpcy52YWx1ZTEgPT0gdGhpcy5maWVsZFZhbHVlKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0RGF0YSgpIHsgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG4gICAgb25BUElDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGZpZWxkVmFsID0gdGhpcy5zZXRBcGlDYWxsQmFja1V0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBpZiAoZmllbGRWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gZmllbGRWYWw7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICh0aGlzLnZhbHVlMSA9PSB0aGlzLmZpZWxkVmFsdWUpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiBTcGVjaWFsIGNoZWsgZm9yIGJ1dHRvbiBjbGljayAqL1xyXG4gICAgdG9nZ2xlQ2xpY2tMaXN0ZW5lcihlKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gIXRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUgPyB0aGlzLnZhbHVlMSA6IHRoaXMudmFsdWUyKTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snLCB7fSwgdHJ1ZSwgeyB1bmlxdWVJZDogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCB2YWx1ZTogdGhpcy5pbnB1dFZhbHVlID8gdGhpcy52YWx1ZTEgOiB0aGlzLnZhbHVlMiB9KTtcclxuICAgICAgICB0aGlzLnNldE1vZGFsb3JTYW5ja0Jhck1lc3NhZ2UodGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCBlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGNoYW5nZU1hcCA9IHtcclxuICAgICAgICAvLyAgICAgZmllbGRfbGFiZWw6ICdmaWVsZERhdGEuZmllbGRfbGFiZWwnLFxyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlcl90ZXh0OiAnZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQnLFxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOiAnZmllbGREYXRhLnRvb2x0aXAnLFxyXG4gICAgICAgIC8vICAgICAnYWRkaXRpb25hbF9wYXJhbWV0ZXJzWypdQXJpYS1MYWJlbCc6ICdBZGRpdGlvbmFsUGFyYW1ldGVyW1xcJ0FyaWEtTGFiZWxcXCddJyxcclxuICAgICAgICAvLyAgICAgJ2ZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNbKl0nOiAnZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcydcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlTWFwKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBsYW5nVmFsID0gdGhpcy5zd2l0Y2hMYW5nKHZhbHVlLCBkYXRhLCBjaGFuZ2VNYXApO1xyXG4gICAgICAgIC8vICAgICBpZiAobGFuZ1ZhbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc1tsYW5nVmFsLmtleV0gPSBsYW5nVmFsLnZhbDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgKGNoYW5nZXMuZmllbGREYXRhICYmIGNoYW5nZXMucm9vdERhdGEgJiYgY2hhbmdlcy5yb290RGF0YS5jdXJyZW50VmFsdWUubGFuZ0NoYW5nZWQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy50b2dnbGVMYW5ndWFnZShjaGFuZ2VzLmZpZWxkRGF0YS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxyXG5cdFx0PGJ1dHRvbiBuYW1lPVwie3tmaWVsZERhdGEuYXBpX2tleX19XCIgY2xhc3M9XCJjZWUtdG9vZ2xlLWJ1dHRvblwiIGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIlxyXG5cdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6IGlucHV0VmFsdWU/bGFiZWwxOmxhYmVsMlwiXHJcblx0XHRcdFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3NpemUsXHJcbiAgICAgICAgICAgICAgICAnZm9udC1zdHlsZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG4gICAgICAgICAgICAgICAgJ2NvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcbiAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJvcmRlcl9jb2xvcixcclxuICAgICAgICAgICAgICAgICdoZWlnaHQnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgJ3dpZHRoJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYmFja2dyb3VuZF9jb2xvclxyXG4gICAgICAgICAgICB9XCIgdHlwZT1cImJ1dHRvblwiIChjbGljayk9XCJ0b2dnbGVDbGlja0xpc3RlbmVyKCRldmVudClcIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIlxyXG5cdFx0XHRbaW5uZXJIdG1sXT1cImlucHV0VmFsdWU/bGFiZWwxOmxhYmVsMlwiPjwvYnV0dG9uPlxyXG5cdFx0PHNwYW4gKm5nSWY9XCJ0aGlzLmlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG5cclxuXHRcdDxidXR0b24gKm5nSWY9XCJoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0b1wiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCI+aTwvYnV0dG9uPlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuIl19