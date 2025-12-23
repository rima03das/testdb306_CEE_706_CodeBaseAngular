import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { CommonModule, NgStyle } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { UiSwitchModule } from 'ngx-ui-switch';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../services/shared-events-service.service";
import * as i3 from "../../services/internal-cee-emitter-service.service";
import * as i4 from "../../models/app-data/app-data.service";
import * as i5 from "../../models/api-data/api-data.service";
import * as i6 from "../../services/wfe-step-loader.service";
import * as i7 from "@angular/material/dialog";
import * as i8 from "@angular/material/snack-bar";
import * as i9 from "@angular/common/http";
import * as i10 from "ngx-ui-switch";
import * as i11 from "@angular/common";
import * as i12 from "../../directives/tooltip/tooltip.directive";
const _c0 = a0 => ({ "color": a0 });
function CeeSwitchComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeSwitchComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 13);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeSwitchComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeSwitchComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 10)(2, CeeSwitchComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeSwitchComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeSwitchComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeSwitchComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ui-switch", 16);
    i0.ɵɵlistener("change", function CeeSwitchComponent_div_0_ng_container_8_Template_ui_switch_change_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSessionDataUpdated($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("color", ctx_r0.fieldData.field_style.font_color);
    i0.ɵɵpropertyInterpolate("checkedLabel", ctx_r0.keyValuePair[1].key);
    i0.ɵɵpropertyInterpolate("uncheckedLabel", ctx_r0.keyValuePair[0].key);
    i0.ɵɵproperty("checked", !ctx_r0.fieldValue || ctx_r0.fieldValue == ctx_r0.keyValuePair[0].value ? false : true)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
} }
function CeeSwitchComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17)(2, "div")(3, "p", 18);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, item_r3.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r3.value.message_text, "");
} }
function CeeSwitchComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    i0.ɵɵtemplate(3, CeeSwitchComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 4)(4, CeeSwitchComponent_div_0_span_4_Template, 2, 0, "span", 5)(5, CeeSwitchComponent_div_0_button_5_Template, 2, 2, "button", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7)(7, "div", 8);
    i0.ɵɵtemplate(8, CeeSwitchComponent_div_0_ng_container_8_Template, 2, 7, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeSwitchComponent_div_0_ng_container_9_Template, 5, 4, "ng-container", 9);
    i0.ɵɵpipe(10, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.fieldData.unique_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.keyValuePair && ctx_r0.keyValuePair.length === 2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(10, 6, ctx_r0.showComparisonError));
} }
export class CeeSwitchComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    rootData;
    keyValuePair = [];
    value1 = '';
    value2 = '';
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    setKeyValue() {
        if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
            for (let item of this.fieldData.possible_values) {
                let pair = item.split("||");
                this.keyValuePair.push({
                    value: pair[0],
                    key: pair[1],
                });
            }
        }
    }
    onViewDataInit() {
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.setKeyValue();
        if (this.keyValuePair.length > 0) {
            this.value1 = this.keyValuePair[0]['value'];
            this.value2 = this.keyValuePair[1]['value'];
            // --- Default value support ---
            const defaultValue = this.additionalParameter['default_value'];
            if (!this.fieldValue || this.fieldValue === '') {
                if (defaultValue === this.value1 || defaultValue === this.value2) {
                    this.fieldValue = defaultValue;
                }
                else {
                    this.fieldValue = this.value1; // fallback to value1
                }
                this.fieldData.value = this.fieldValue;
                this.updateFieldData(this.fieldValue);
            }
            else {
                if (this.fieldValue[this.fieldData.unique_id]) {
                    this.fieldValue = this.fieldValue[this.fieldData.unique_id]['value'];
                }
                this.fieldData.value = this.fieldValue;
            }
        }
    }
    concatData() { }
    onSessionDataUpdated(event) {
        this.updateFieldData(event ? this.value2 : this.value1);
        // on click on switch
        // setting the value of the switch and passing it as payload so that
        // it can be set and emitted from the event list
        this.onComponentEvent('OnClick', {}, true, { uniqueId: this.fieldData.unique_id, value: event ? this.value2 : this.value1 });
    }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            this.fieldValue = apiValue;
            this.updateFieldData(apiValue);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data.hasOwnProperty('uniqueIds') && data.hasOwnProperty('values')) {
            if (data['uniqueIds'].length !== data['values'].length) {
                return;
            }
            if (data['uniqueIds'].length > 0) {
                if (data['uniqueIds']?.includes(this.fieldData.unique_id)) {
                    const index = data['uniqueIds']?.indexOf(this.fieldData.unique_id);
                    if (index !== -1) {
                        this.fieldValue = data['values'][index];
                        this.fieldData.value = this.fieldValue;
                        this.updateFieldData(this.fieldValue);
                    }
                }
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']',
        //     'fieldData.possible_values[0]': 'value1',
        //     'fieldData.possible_values[1]': 'value2',
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
    }
    static ɵfac = function CeeSwitchComponent_Factory(t) { return new (t || CeeSwitchComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeSwitchComponent, selectors: [["app-cee-switch"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "id", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-group", "switch-container"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [1, "custom-control", "custom-switch"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [3, "change", "color", "checked", "checkedLabel", "uncheckedLabel", "disabled"], [1, "error-message-wrapper"], [3, "ngStyle"]], template: function CeeSwitchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeSwitchComponent_div_0_Template, 11, 8, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, NgStyle, UiSwitchModule, i10.UiSwitchComponent, CommonModule, i11.NgForOf, i11.NgIf, i11.KeyValuePipe, TooltipModule, i12.TooltipDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeSwitchComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-switch', standalone: true, imports: [MatTooltipModule, NgStyle, UiSwitchModule, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group switch-container\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <div class=\"custom-control custom-switch\">\r\n                <!-- <input [disabled]=\"!isEditable\" type=\"checkbox\" name=\"{{fieldData.unique_id}}\"\r\n                    class=\"custom-control-input\" id=\"{{fieldData.unique_id}}{{i}}\" value=\"{{fieldValue}}\"\r\n                    (change)=\"getUpdatedValue($event)\"> -->\r\n                <!-- labelOn=\"{{keyValuePair[1].key}}\" labelOff=\"{{keyValuePair[0].key}}\" -->\r\n                <ng-container *ngIf=\"keyValuePair && keyValuePair.length === 2\">\r\n                    <ui-switch color=\"{{fieldData.field_style.font_color}}\"\r\n                        [checked]=\"(!fieldValue || fieldValue == keyValuePair[0].value) ? false: true\"\r\n                        checkedLabel=\"{{keyValuePair[1].key}}\" uncheckedLabel=\"{{keyValuePair[0].key}}\"\r\n                        [disabled]=\"!isEditable\" (change)=\"onSessionDataUpdated($event)\" [attr.tabindex]=\"tabIndexValue\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\">\r\n                    </ui-switch>\r\n                </ng-container>\r\n                <!-- <ui-switch color=\"{{fieldData.field_style.font_color}}\"\r\n                    [checked]=\"(!fieldValue || fieldValue == keyValuePair[0].value) ? false: true\"\r\n                    checkedLabel=\"{{keyValuePair[1].key}}\" uncheckedLabel=\"{{keyValuePair[0].key}}\"\r\n                    [disabled]=\"!isEditable\" (change)=\"onSessionDataUpdated($event)\" labelOn=\"{{keyValuePair[1] ? keyValuePair[1].key : ''}}\"\r\n                    labelOff=\"{{keyValuePair[0] ? keyValuePair[0].key : ''}}\" [attr.tabindex]=\"tabIndexValue\"\r\n                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\">\r\n                </ui-switch> -->\r\n                <!-- <mat-slide-toggle [color]=\"fieldData.field_style.font_color\" [checked]=\"fieldValue == value1 ? false: true\"\r\n                    [disabled]=\"!isEditable\">\r\n                    {{value1}}\r\n                </mat-slide-toggle> -->\r\n            </div>\r\n            <!-- <div class=\"error-message-wrapper\" *ngIf=\"isMandatory\">\r\n                <p [ngStyle]=\"{'color': errorMessageData.color}\">{{errorMessageData.message_text}}</p>\r\n            </div> -->\r\n            <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                <div class=\"error-message-wrapper\">\r\n                    <div>\r\n                        <p [ngStyle]=\"{'color': item.value.color}\">\r\n                            {{item.value.message_text}}</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeSwitchComponent, { className: "CeeSwitchComponent", filePath: "lib\\field-components\\cee-switch\\cee-switch.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXN3aXRjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtc3dpdGNoL2NlZS1zd2l0Y2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXN3aXRjaC9jZWUtc3dpdGNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFxRCxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFZN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztJQ1p4RCxpQ0FBcUU7SUFBQSxZQUF5QjtJQUFBLGlCQUFROzs7SUFBakMsY0FBeUI7SUFBekIsa0RBQXlCOzs7SUFDOUYsNEJBQ2dEOzs7SUFBNUMsMkVBQW1DOzs7SUFIM0MsNkJBQWdEO0lBRTVDLEFBREEsNkZBQXFFLGdGQUU3Qjs7OztJQUZULGNBQW9DO0lBQXBDLG1FQUFvQztJQUNwQyxjQUFtQztJQUFuQyxrRUFBbUM7OztJQUd0RSxnQ0FBaUQ7SUFBQyxrQkFBQztJQUFBLGlCQUFPOzs7SUFD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cG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IFVpU3dpdGNoTW9kdWxlIH0gZnJvbSAnbmd4LXVpLXN3aXRjaCc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtc3dpdGNoJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtc3dpdGNoLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1zd2l0Y2guY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTWF0VG9vbHRpcE1vZHVsZSwgTmdTdHlsZSwgVWlTd2l0Y2hNb2R1bGUsIENvbW1vbk1vZHVsZSwgVG9vbHRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZVN3aXRjaENvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIGtleVZhbHVlUGFpcjogYW55ID0gW11cclxuICAgIHZhbHVlMSA9ICcnO1xyXG4gICAgdmFsdWUyID0gJyc7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIodXNlckRhdGFIYW5kbGVyU2VydmljZSwgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UsIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLCBkaWFsb2csIHNuYWNrQmFyLCBodHRwKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEtleVZhbHVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgJiYgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwYWlyID0gaXRlbS5zcGxpdChcInx8XCIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5rZXlWYWx1ZVBhaXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBhaXJbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBwYWlyWzFdLFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy50YWJJbmRleFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUYWJJbmRleCddO1xyXG4gICAgICAgIHRoaXMuc2V0S2V5VmFsdWUoKTtcclxuICAgICAgICBpZiAodGhpcy5rZXlWYWx1ZVBhaXIubGVuZ3RoID4gMCkge1xyXG5cclxuICAgICAgICAgICAgdGhpcy52YWx1ZTEgPSB0aGlzLmtleVZhbHVlUGFpclswXVsndmFsdWUnXTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZTIgPSB0aGlzLmtleVZhbHVlUGFpclsxXVsndmFsdWUnXTtcclxuICAgICAgICAgICAgLy8gLS0tIERlZmF1bHQgdmFsdWUgc3VwcG9ydCAtLS1cclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ107XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZmllbGRWYWx1ZSB8fCB0aGlzLmZpZWxkVmFsdWUgPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlID09PSB0aGlzLnZhbHVlMSB8fCBkZWZhdWx0VmFsdWUgPT09IHRoaXMudmFsdWUyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLnZhbHVlMTsgLy8gZmFsbGJhY2sgdG8gdmFsdWUxXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS52YWx1ZSA9IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZFZhbHVlW3RoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmZpZWxkVmFsdWVbdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXVsndmFsdWUnXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnZhbHVlID0gdGhpcy5maWVsZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuXHJcbiAgICBvblNlc3Npb25EYXRhVXBkYXRlZChldmVudCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKGV2ZW50ID8gdGhpcy52YWx1ZTIgOiB0aGlzLnZhbHVlMSk7XHJcbiAgICAgICAgLy8gb24gY2xpY2sgb24gc3dpdGNoXHJcbiAgICAgICAgLy8gc2V0dGluZyB0aGUgdmFsdWUgb2YgdGhlIHN3aXRjaCBhbmQgcGFzc2luZyBpdCBhcyBwYXlsb2FkIHNvIHRoYXRcclxuICAgICAgICAvLyBpdCBjYW4gYmUgc2V0IGFuZCBlbWl0dGVkIGZyb20gdGhlIGV2ZW50IGxpc3RcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snLCB7fSwgdHJ1ZSwgeyB1bmlxdWVJZDogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCB2YWx1ZTogZXZlbnQgPyB0aGlzLnZhbHVlMiA6IHRoaXMudmFsdWUxIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgY29uc3QgYXBpVmFsdWUgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBpZiAoYXBpVmFsdWUgIT09IG51bGwpIHtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IGFwaVZhbHVlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShhcGlWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vblNldFNlc3Npb25EYXRhKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZSh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDdXN0b21GdW5jdGlvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkgeyAgICAgICAgXHJcbiAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3VuaXF1ZUlkcycpICYmIGRhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlcycpKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5sZW5ndGggIT09IGRhdGFbJ3ZhbHVlcyddLmxlbmd0aCkgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YVsndW5pcXVlSWRzJ10ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbJ3VuaXF1ZUlkcyddPy5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kZXggPSBkYXRhWyd1bmlxdWVJZHMnXT8uaW5kZXhPZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gZGF0YVsndmFsdWVzJ11baW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS52YWx1ZSA9IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHsgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGNoYW5nZU1hcCA9IHtcclxuICAgICAgICAvLyAgICAgZmllbGRfbGFiZWw6ICdmaWVsZERhdGEuZmllbGRfbGFiZWwnLFxyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlcl90ZXh0OiAnZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQnLFxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOiAnZmllbGREYXRhLnRvb2x0aXAnLFxyXG4gICAgICAgIC8vICAgICAnYWRkaXRpb25hbF9wYXJhbWV0ZXJzWypdQXJpYS1MYWJlbCc6ICdBZGRpdGlvbmFsUGFyYW1ldGVyW1xcJ0FyaWEtTGFiZWxcXCddJyxcclxuICAgICAgICAvLyAgICAgJ2ZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNbMF0nOiAndmFsdWUxJyxcclxuICAgICAgICAvLyAgICAgJ2ZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNbMV0nOiAndmFsdWUyJyxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlTWFwKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBsYW5nVmFsID0gdGhpcy5zd2l0Y2hMYW5nKHZhbHVlLCBkYXRhLCBjaGFuZ2VNYXApO1xyXG4gICAgICAgIC8vICAgICBpZiAobGFuZ1ZhbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc1tsYW5nVmFsLmtleV0gPSBsYW5nVmFsLnZhbDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhICYmIGNoYW5nZXMucm9vdERhdGEuY3VycmVudFZhbHVlLmxhbmdDaGFuZ2VkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlTGFuZ3VhZ2UoY2hhbmdlcy5maWVsZERhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiBpZD1cInt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwIHN3aXRjaC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10b29sdGlwIG1sLWF1dG9cIiBbdG9vbHRpcF09XCJmaWVsZERhdGEudG9vbHRpcFwiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyBmaWVsZERhdGEudG9vbHRpcCBcIj5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1zd2l0Y2hcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gPGlucHV0IFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJ7e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX17e2l9fVwiIHZhbHVlPVwie3tmaWVsZFZhbHVlfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiZ2V0VXBkYXRlZFZhbHVlKCRldmVudClcIj4gLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tIGxhYmVsT249XCJ7e2tleVZhbHVlUGFpclsxXS5rZXl9fVwiIGxhYmVsT2ZmPVwie3trZXlWYWx1ZVBhaXJbMF0ua2V5fX1cIiAtLT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJrZXlWYWx1ZVBhaXIgJiYga2V5VmFsdWVQYWlyLmxlbmd0aCA9PT0gMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1aS1zd2l0Y2ggY29sb3I9XCJ7e2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X2NvbG9yfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCIoIWZpZWxkVmFsdWUgfHwgZmllbGRWYWx1ZSA9PSBrZXlWYWx1ZVBhaXJbMF0udmFsdWUpID8gZmFsc2U6IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGVja2VkTGFiZWw9XCJ7e2tleVZhbHVlUGFpclsxXS5rZXl9fVwiIHVuY2hlY2tlZExhYmVsPVwie3trZXlWYWx1ZVBhaXJbMF0ua2V5fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiAoY2hhbmdlKT1cIm9uU2Vzc2lvbkRhdGFVcGRhdGVkKCRldmVudClcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiBmaWVsZERhdGEuZmllbGRfbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L3VpLXN3aXRjaD5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8dWktc3dpdGNoIGNvbG9yPVwie3tmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvcn19XCJcclxuICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCIoIWZpZWxkVmFsdWUgfHwgZmllbGRWYWx1ZSA9PSBrZXlWYWx1ZVBhaXJbMF0udmFsdWUpID8gZmFsc2U6IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWRMYWJlbD1cInt7a2V5VmFsdWVQYWlyWzFdLmtleX19XCIgdW5jaGVja2VkTGFiZWw9XCJ7e2tleVZhbHVlUGFpclswXS5rZXl9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgKGNoYW5nZSk9XCJvblNlc3Npb25EYXRhVXBkYXRlZCgkZXZlbnQpXCIgbGFiZWxPbj1cInt7a2V5VmFsdWVQYWlyWzFdID8ga2V5VmFsdWVQYWlyWzFdLmtleSA6ICcnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsT2ZmPVwie3trZXlWYWx1ZVBhaXJbMF0gPyBrZXlWYWx1ZVBhaXJbMF0ua2V5IDogJyd9fVwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogZmllbGREYXRhLmZpZWxkX2xhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICA8L3VpLXN3aXRjaD4gLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxtYXQtc2xpZGUtdG9nZ2xlIFtjb2xvcl09XCJmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvclwiIFtjaGVja2VkXT1cImZpZWxkVmFsdWUgPT0gdmFsdWUxID8gZmFsc2U6IHRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7dmFsdWUxfX1cclxuICAgICAgICAgICAgICAgIDwvbWF0LXNsaWRlLXRvZ2dsZT4gLS0+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIiAqbmdJZj1cImlzTWFuZGF0b3J5XCI+XHJcbiAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogZXJyb3JNZXNzYWdlRGF0YS5jb2xvcn1cIj57e2Vycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19