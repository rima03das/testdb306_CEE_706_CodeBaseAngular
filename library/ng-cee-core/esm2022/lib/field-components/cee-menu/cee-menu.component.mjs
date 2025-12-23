import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatMenuModule } from '@angular/material/menu';
import { CommonModule, NgStyle } from '@angular/common';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../services/shared-events-service.service";
import * as i3 from "../../services/internal-cee-emitter-service.service";
import * as i4 from "../../services/cee-api-service.service";
import * as i5 from "../../models/app-data/app-data.service";
import * as i6 from "../../models/api-data/api-data.service";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "@angular/router";
import * as i9 from "@angular/material/dialog";
import * as i10 from "@angular/material/snack-bar";
import * as i11 from "@angular/common/http";
import * as i12 from "@angular/material/menu";
import * as i13 from "@angular/common";
import * as i14 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["ButtonClickMenuTrigger"];
const _c1 = a0 => ({ "color": a0 });
function CeeMenuComponent_div_0_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeMenuComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("role", "button")("id", "tooltip_" + ctx_r0.fieldData.unique_id)("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeMenuComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 16, 2);
    i0.ɵɵlistener("click", function CeeMenuComponent_div_0_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.openMenu()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menu_r3 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("menu menu_", ctx_r0.fieldData.unique_id, " ", ctx_r0.isMandatory && ctx_r0.showErrorOnNext ? "invalid" : "valid", "");
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("matMenuTriggerFor", menu_r3);
    i0.ɵɵattribute("role", "button")("id", "button_" + ctx_r0.fieldData.unique_id)("aria-label", "Menu: " + ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.fieldData.field_label, "");
} }
function CeeMenuComponent_div_0_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "button", 17);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menu_r3 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("matMenuTriggerFor", menu_r3)("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("role", "button");
} }
function CeeMenuComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵlistener("click", function CeeMenuComponent_div_0_div_9_Template_div_click_0_listener() { const opt_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.getUpdatedValue(ctx_r0.commonUtil.getID(opt_r5))); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r5 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("menu_item menu_item_", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵproperty("innerHTML", ctx_r0.getInnerValue(ctx_r0.commonUtil.getValue(opt_r5)), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", "Menu Item: " + ctx_r0.commonUtil.getValue(opt_r5));
} }
function CeeMenuComponent_div_0_ng_container_10_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r0.returnMessageData(message_r6.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r6.code).message_text, " ");
} }
function CeeMenuComponent_div_0_ng_container_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CeeMenuComponent_div_0_ng_container_10_ng_container_1_div_1_p_1_Template, 2, 4, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeMenuComponent_div_0_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeMenuComponent_div_0_ng_container_10_ng_container_1_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext);
} }
function CeeMenuComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeMenuComponent_div_0_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeMenuComponent_div_0_ng_template_11_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, " ");
} }
function CeeMenuComponent_div_0_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, CeeMenuComponent_div_0_ng_template_11_div_0_p_1_Template, 2, 4, "p", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeMenuComponent_div_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeMenuComponent_div_0_ng_template_11_div_0_Template, 2, 1, "div", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext);
} }
function CeeMenuComponent_div_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 20)(2, "div")(3, "p", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, item_r7.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.value.message_text, "");
} }
function CeeMenuComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    i0.ɵɵtemplate(3, CeeMenuComponent_div_0_span_3_Template, 2, 0, "span", 7)(4, CeeMenuComponent_div_0_button_4_Template, 2, 5, "button", 8)(5, CeeMenuComponent_div_0_button_5_Template, 3, 10, "button", 9)(6, CeeMenuComponent_div_0_button_6_Template, 1, 4, "button", 10);
    i0.ɵɵelementStart(7, "mat-menu", null, 0);
    i0.ɵɵtemplate(9, CeeMenuComponent_div_0_div_9_Template, 1, 5, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(10, CeeMenuComponent_div_0_ng_container_10_Template, 2, 1, "ng-container", 12)(11, CeeMenuComponent_div_0_ng_template_11_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(13, CeeMenuComponent_div_0_ng_container_13_Template, 5, 4, "ng-container", 13);
    i0.ɵɵpipe(14, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const singleErrorMessage_r8 = i0.ɵɵreference(12);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.fieldData.unique_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.pickerValues);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(14, 9, ctx_r0.showComparisonError));
} }
export class CeeMenuComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    ceeApiService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    router;
    dialog;
    snackBar;
    http;
    ButtonClickMenuTrigger;
    stepId;
    fieldData;
    keepState = false;
    primaryKeyIndex;
    rowData;
    rootData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    dependentSubscriber$;
    pickerValues = [];
    labelEmitter;
    fieldLabels = [];
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, appDataService, apiDataService, wfeStepLoaderService, router, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.ceeApiService = ceeApiService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
        this.unsubscribe();
    }
    concatData() { }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe();
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
        }
    }
    getInnerValue(val) {
        val = val.replace(/\"/g, "'");
        return val;
    }
    onViewDataInit() {
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData);
        this.pickerValues = this.fieldData.possible_values;
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.pickerValues = this.rowData.value;
                }
                else {
                    this.fieldValue = this.rowData.value;
                }
            }
        }
        // set dynamic label on load
        if (!this.rowData) {
            this.getDynamicLabel();
            this.labelEmitter = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                const data = {};
                data[res.apiKey] = res.value;
                this.getDynamicLabel(data);
            });
        }
    }
    getDynamicLabel(data) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
            if (this.fieldData.field_label != null) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.fieldData.field_label);
            }
        }
    }
    onAPICallback(data) {
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            if (Array.isArray(apiValue) && this.isSingleApiKey) {
                this.fieldData.possible_values = apiValue;
                this.pickerValues = this.fieldData.possible_values;
            }
            else {
                this.fieldValue = apiValue;
                this.updateFieldData(this.fieldValue);
            }
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        if (Array.isArray(externalApiOptionValue)) {
                            this.fieldData.possible_values = externalApiOptionValue;
                            this.pickerValues = this.fieldData.possible_values;
                        }
                        else {
                            console.error('Something Went Wrong in Menu !!!');
                        }
                    }
                }
            }
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        this.pickerValues = this.fieldData.possible_values;
    }
    onEmptySession(get_data) {
        let data = [];
        let unique_id_value = [];
        if (get_data.unique_ids.length > 0) {
            data = get_data.unique_ids;
            unique_id_value = [this.appData.id];
        }
        else {
            data = get_data.apiKeys;
            if (this.isSingleApiKey) {
                unique_id_value = [this.fieldData.api_key];
            }
            else {
                unique_id_value = [...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key))];
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key)
                ];
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                // default value
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = this.commonUtil.getID(paramter.value);
                            break;
                        }
                        else {
                            this.fieldValue = '';
                        }
                    }
                }
                else {
                    this.fieldValue = '';
                }
                this.updateFieldData(this.fieldValue);
                return;
            }
        });
    }
    handleCustomFunction(get_data) {
        //console.log('get_data', typeof get_data === 'object');
        let data = [];
        let unique_id_value = '';
        if (typeof get_data === 'object') {
            Object.keys(get_data).forEach((key, value) => {
                data.push(key);
            });
            unique_id_value = this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.fieldValue = get_data[unique_id_value];
            this.updateFieldData(this.fieldValue);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        // this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    getUpdatedValue(value) {
        this.updateFieldData(this.commonUtil.getID(value));
        if (this.rowData) {
            this.appDataService.setAppData(Object.assign({}, this.appData, {
                value: this.commonUtil.getID(value)
            }));
        }
        const primaryData = this.setPrimaryKey(this.primaryKeyIndex);
        this.onComponentEvent('onClick', primaryData);
        this.onDirty();
    }
    openMenu() {
        if (this.pickerValues.length > 0) {
            this.ButtonClickMenuTrigger.openMenu();
        }
        else {
            this.ButtonClickMenuTrigger.closeMenu();
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'pickerValues'
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
    static ɵfac = function CeeMenuComponent_Factory(t) { return new (t || CeeMenuComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.CeeApiService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.Router), i0.ɵɵdirectiveInject(i9.MatDialog), i0.ɵɵdirectiveInject(i10.MatSnackBar), i0.ɵɵdirectiveInject(i11.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeMenuComponent, selectors: [["app-cee-menu"]], viewQuery: function CeeMenuComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ButtonClickMenuTrigger = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", primaryKeyIndex: "primaryKeyIndex", rowData: "rowData", rootData: "rootData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["menu", "matMenu"], ["singleErrorMessage", ""], ["ButtonClickMenuTrigger", "matMenuTrigger"], ["class", "", 3, "id", 4, "ngIf"], [1, "", 3, "id"], [1, "form-group"], [1, "form-field"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "disabled", "tooltip", 4, "ngIf"], ["mat-button", "", 3, "disabled", "class", "matMenuTriggerFor", "click", 4, "ngIf"], ["mat-button", "", 3, "matMenuTriggerFor", "innerHTML", "disabled", 4, "ngIf"], ["mat-menu-item", "", 3, "class", "innerHTML", "click", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "disabled", "tooltip"], ["mat-button", "", 3, "click", "disabled", "matMenuTriggerFor"], ["mat-button", "", 3, "matMenuTriggerFor", "innerHTML", "disabled"], ["mat-menu-item", "", 3, "click", "innerHTML"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeMenuComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeMenuComponent_div_0_Template, 15, 11, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, MatMenuModule, i12.MatMenu, i12.MatMenuItem, i12.MatMenuTrigger, NgStyle, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, i14.TooltipDirective] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeMenuComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-menu', standalone: true, imports: [MatTooltipModule, MatMenuModule, NgStyle, CommonModule, TooltipModule], template: "<div class=\"\" id=\"{{ fieldData.unique_id }}\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-field\">\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t<button [disabled]=\"!isEditable\" [attr.role]=\"'button'\" [attr.id]=\"'tooltip_'+fieldData.unique_id\"\r\n\t\t\t\t*ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\"\r\n\t\t\t\t[attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t\t<button [disabled]=\"!isEditable\" [attr.role]=\"'button'\" [attr.id]=\"'button_'+fieldData.unique_id\" mat-button\r\n\t\t\t\tclass=\"menu menu_{{fieldData.unique_id}} {{ isMandatory && showErrorOnNext ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t*ngIf=\"!isHTML(fieldData.field_label)\" [attr.aria-label]=\"'Menu: ' + fieldData.field_label \"\r\n\t\t\t\t#ButtonClickMenuTrigger=\"matMenuTrigger\" [matMenuTriggerFor]=\"menu\" (click)=\"openMenu()\">\r\n\t\t\t\t{{fieldData.field_label}}</button>\r\n\t\t\t<button mat-button [matMenuTriggerFor]=\"menu\" [attr.role]=\"'button'\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t[innerHTML]=\"fieldData.field_label\" [disabled]=\"!isEditable\">\r\n\t\t\t</button>\r\n\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t<div class=\"menu_item menu_item_{{fieldData.unique_id}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"'Menu Item: ' + commonUtil.getValue(opt)\" mat-menu-item *ngFor=\"let opt of pickerValues\"\r\n\t\t\t\t\t(click)=\"getUpdatedValue(commonUtil.getID(opt))\" [innerHTML]=\"getInnerValue(commonUtil.getValue(opt))\">\r\n\t\t\t\t\t</div>\r\n\t\t\t</mat-menu>\r\n\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}\r\n\t\t\t\t\t\t</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t\t{{errorMessageData.message_text}}\r\n\t\t\t\t\t</p>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t<div>\r\n\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n" }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.CeeApiService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.Router }, { type: i9.MatDialog }, { type: i10.MatSnackBar }, { type: i11.HttpClient }], { ButtonClickMenuTrigger: [{
            type: ViewChild,
            args: ['ButtonClickMenuTrigger']
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeMenuComponent, { className: "CeeMenuComponent", filePath: "lib\\field-components\\cee-menu\\cee-menu.component.ts", lineNumber: 28 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLW1lbnUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLW1lbnUvY2VlLW1lbnUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLW1lbnUvY2VlLW1lbnUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTJCLFNBQVMsRUFBNEIsTUFBTSxlQUFlLENBQUM7QUFZdkgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2ZyRSxnQ0FBaUQ7SUFBQyxrQkFBQztJQUFBLGlCQUFPOzs7SUFDMUQsa0NBRXNEO0lBQUEsaUJBQUM7SUFBQSxpQkFBUzs7O0lBRFYsQUFEOUMsNkNBQXdCLHFDQUNtRDs7Ozs7SUFFbkYscUNBRzBGO0lBQXJCLHNMQUFTLGlCQUFVLEtBQUM7SUFDeEYsWUFBeUI7SUFBQSxpQkFBUzs7Ozs7SUFIbEMsZ0pBQW9HO0lBRTNELEFBSGxDLDZDQUF3Qiw4QkFHb0M7O0lBQ25FLGVBQXlCO0lB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NUIsU0FBUzsyQkFDSSxjQUFjLGNBR1osSUFBSSxXQUNQLENBQUMsZ0JBQWdCLEVBQUUsYUFBYSxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsYUFBYSxDQUFDO21XQUczQyxzQkFBc0I7a0JBQTFELFNBQVM7bUJBQUMsd0JBQXdCO1lBQ2xCLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLOztrRkFWRyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdE1lbnVUcmlnZ2VyIGFzIE1hdE1lbnVUcmlnZ2VyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvbWVudSc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS1tZW51JyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtbWVudS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jZWUtbWVudS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRUb29sdGlwTW9kdWxlLCBNYXRNZW51TW9kdWxlLCBOZ1N0eWxlLCBDb21tb25Nb2R1bGUsIFRvb2x0aXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVNZW51Q29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAgIEBWaWV3Q2hpbGQoJ0J1dHRvbkNsaWNrTWVudVRyaWdnZXInKSBCdXR0b25DbGlja01lbnVUcmlnZ2VyOiBNYXRNZW51VHJpZ2dlcjtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwcmltYXJ5S2V5SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIG1hbmRhdG9yeUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZWRpdGFibGVDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHZpc2libGVDb25kaXRpb246IGFueTtcclxuXHJcbiAgICBkZXBlbmRlbnRTdWJzY3JpYmVyJDogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIHBpY2tlclZhbHVlcyA9IFtdO1xyXG4gICAgbGFiZWxFbWl0dGVyOiBTdWJzY3JpcHRpb247XHJcbiAgICBmaWVsZExhYmVscyA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLFxyXG4gICAgICAgICAgICBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgICAgICB0aGlzLmRlcGVuZGVuY3lIYW5kbGVyKCdvbkxvYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbEVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEVtaXR0ZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SW5uZXJWYWx1ZSh2YWwpe1xyXG4gICAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKC9cXFwiL2csIFwiJ1wiKTtcclxuICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBzZXR0aW5nIHRoZSBmaWVsZCBkYXRhIGJlbG93IGJlY2F1c2UgZ2V0IER5bmFtaWMgVXRpbCBpcyBjaGVja2luZyB0aGUgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhKTtcclxuXHJcbiAgICAgICAgdGhpcy5waWNrZXJWYWx1ZXMgPSB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXM7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5yb3dEYXRhLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyVmFsdWVzID0gdGhpcy5yb3dEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLnJvd0RhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCBkeW5hbWljIGxhYmVsIG9uIGxvYWRcclxuICAgICAgICBpZiAoIXRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmdldER5bmFtaWNMYWJlbCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsRW1pdHRlciA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7fTtcclxuICAgICAgICAgICAgICAgIGRhdGFbcmVzLmFwaUtleV0gPSByZXMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldER5bmFtaWNMYWJlbChkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldER5bmFtaWNMYWJlbChkYXRhPykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCAmJiB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbF9jb25maWcgJiYgdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWxfY29uZmlnLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzLnB1c2godGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYXBpVmFsdWUgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBpZiAoYXBpVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXBpVmFsdWUpICYmIHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IGFwaVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJWYWx1ZXMgPSB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBhcGlWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvciBtdWx0aXBsZSBhcGkga2V5cyB0aGUgdmFsdWUgdGhhdCBuZWVkcyB0byBiZSBzZXQgd2lsbCBjb21lXHJcbiAgICAgICAgLy8gZnJvbSBhZGRpdGlvbmFsUGFyYW1ldGVyIHdpdGggdHlwZSBleHRlcm5hbEFwaU9wdGlvblZhbHVlXHJcbiAgICAgICAgaWYodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZShwYXJhbWV0ZXIudmFsdWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbEFwaU9wdGlvblZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVybmFsQXBpT3B0aW9uVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgPSBleHRlcm5hbEFwaU9wdGlvblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJWYWx1ZXMgPSB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgV2VudCBXcm9uZyBpbiBNZW51ICEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIHNldHRpbmcgdGhlIGZpZWxkIGRhdGEgYmVsb3cgYmVjYXVzZSBnZXQgRHluYW1pYyBVdGlsIGlzIGNoZWNraW5nIHRoZSBwb3NzaWJsZSB2YWx1ZXNcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgaWYgKGdldF9kYXRhLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEudW5pcXVlX2lkcztcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuYXBwRGF0YS5pZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLmFwaUtleXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVuaXF1ZV9pZF92YWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5nZXRJRChwYXJhbXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDdXN0b21GdW5jdGlvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0X2RhdGEnLCB0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKTtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhnZXRfZGF0YSkuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZV9pZF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gZ2V0X2RhdGFbdW5pcXVlX2lkX3ZhbHVlXTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNldFNlc3Npb25EYXRhKGFwaUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25TZXRTZXNzaW9uRGF0YShhcGlLZXksIHZhbHVlKTtcclxuICAgICAgICAvLyB0aGlzLnNldE1vZGFsb3JTYW5ja0Jhck1lc3NhZ2UodGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VXBkYXRlZFZhbHVlKHZhbHVlKSB7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5jb21tb25VdGlsLmdldElEKHZhbHVlKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnNldEFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcHBEYXRhLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByaW1hcnlEYXRhID0gdGhpcy5zZXRQcmltYXJ5S2V5KHRoaXMucHJpbWFyeUtleUluZGV4KTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ29uQ2xpY2snLCBwcmltYXJ5RGF0YSk7XHJcbiAgICAgICAgdGhpcy5vbkRpcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3Blbk1lbnUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGlja2VyVmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5CdXR0b25DbGlja01lbnVUcmlnZ2VyLm9wZW5NZW51KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5CdXR0b25DbGlja01lbnVUcmlnZ2VyLmNsb3NlTWVudSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc3QgY2hhbmdlTWFwID0ge1xyXG4gICAgICAgIC8vICAgICBmaWVsZF9sYWJlbDogJ2ZpZWxkRGF0YS5maWVsZF9sYWJlbCcsXHJcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyX3RleHQ6ICdmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCcsXHJcbiAgICAgICAgLy8gICAgIHRvb2x0aXA6ICdmaWVsZERhdGEudG9vbHRpcCcsXHJcbiAgICAgICAgLy8gICAgICdhZGRpdGlvbmFsX3BhcmFtZXRlcnNbKl1BcmlhLUxhYmVsJzogJ2FkZGl0aW9uYWxQYXJhbWV0ZXJbXFwnQXJpYS1MYWJlbFxcJ10nLFxyXG4gICAgICAgIC8vICAgICAnZmllbGRfZGF0YS5wb3NzaWJsZV92YWx1ZXNbKl0nOiAncGlja2VyVmFsdWVzJ1xyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCB2YWx1ZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VNYXApKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGxhbmdWYWwgPSB0aGlzLnN3aXRjaExhbmcodmFsdWUsIGRhdGEsIGNoYW5nZU1hcCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChsYW5nVmFsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzW2xhbmdWYWwua2V5XSA9IGxhbmdWYWwudmFsO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhICYmIGNoYW5nZXMucm9vdERhdGEuY3VycmVudFZhbHVlLmxhbmdDaGFuZ2VkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlTGFuZ3VhZ2UoY2hhbmdlcy5maWVsZERhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cIlwiIGlkPVwie3sgZmllbGREYXRhLnVuaXF1ZV9pZCB9fVwiICpuZ0lmPVwiaXNWaXNpYmxlXCI+XHJcblx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XHJcblx0XHRcdDxzcGFuICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBjbGFzcz1cIm1hbmRldG9yeS1tYXJrXCI+ICo8L3NwYW4+XHJcblx0XHRcdDxidXR0b24gW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgW2F0dHIucm9sZV09XCInYnV0dG9uJ1wiIFthdHRyLmlkXT1cIid0b29sdGlwXycrZmllbGREYXRhLnVuaXF1ZV9pZFwiXHJcblx0XHRcdFx0Km5nSWY9XCJoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvb2x0aXBcIiBbdG9vbHRpcF09XCJmaWVsZERhdGEudG9vbHRpcFwiXHJcblx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwIFwiPmk8L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBbYXR0ci5yb2xlXT1cIididXR0b24nXCIgW2F0dHIuaWRdPVwiJ2J1dHRvbl8nK2ZpZWxkRGF0YS51bmlxdWVfaWRcIiBtYXQtYnV0dG9uXHJcblx0XHRcdFx0Y2xhc3M9XCJtZW51IG1lbnVfe3tmaWVsZERhdGEudW5pcXVlX2lkfX0ge3sgaXNNYW5kYXRvcnkgJiYgc2hvd0Vycm9yT25OZXh0ID8gJ2ludmFsaWQnIDogJ3ZhbGlkJyB9fVwiXHJcblx0XHRcdFx0Km5nSWY9XCIhaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidNZW51OiAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsIFwiXHJcblx0XHRcdFx0I0J1dHRvbkNsaWNrTWVudVRyaWdnZXI9XCJtYXRNZW51VHJpZ2dlclwiIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCIgKGNsaWNrKT1cIm9wZW5NZW51KClcIj5cclxuXHRcdFx0XHR7e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gbWF0LWJ1dHRvbiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiIFthdHRyLnJvbGVdPVwiJ2J1dHRvbidcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuXHRcdFx0XHRbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdFx0PG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJtZW51X2l0ZW0gbWVudV9pdGVtX3t7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCJcclxuXHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiJ01lbnUgSXRlbTogJyArIGNvbW1vblV0aWwuZ2V0VmFsdWUob3B0KVwiIG1hdC1tZW51LWl0ZW0gKm5nRm9yPVwibGV0IG9wdCBvZiBwaWNrZXJWYWx1ZXNcIlxyXG5cdFx0XHRcdFx0KGNsaWNrKT1cImdldFVwZGF0ZWRWYWx1ZShjb21tb25VdGlsLmdldElEKG9wdCkpXCIgW2lubmVySFRNTF09XCJnZXRJbm5lclZhbHVlKGNvbW1vblV0aWwuZ2V0VmFsdWUob3B0KSlcIj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L21hdC1tZW51PlxyXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwic2hvd0Vycm9yT25OZXh0XCI+XHJcblx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHR7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX1cclxuXHRcdFx0XHRcdFx0PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCIgKm5nSWY9XCJzaG93RXJyb3JPbk5leHRcIj5cclxuXHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogZXJyb3JNZXNzYWdlRGF0YS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0e3tlcnJvck1lc3NhZ2VEYXRhLm1lc3NhZ2VfdGV4dH19XHJcblx0XHRcdFx0XHQ8L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2hvd0NvbXBhcmlzb25FcnJvciB8IGtleXZhbHVlXCI+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0PHAgW25nU3R5bGVdPVwieydjb2xvcic6IGl0ZW0udmFsdWUuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdFx0e3tpdGVtLnZhbHVlLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=