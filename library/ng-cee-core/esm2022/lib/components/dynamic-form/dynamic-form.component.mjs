import { Component, Input, forwardRef } from '@angular/core';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { EmptyUtil } from '../../utils/empty-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { DynamicRendererComponent } from '../dynamic-renderer/dynamic-renderer.component';
// import { CeeAttachmentsComponent } from '../../field-components/cee-attachments/cee-attachments.component';
// import { CeeTimePickerComponent } from '../../field-components/cee-time-picker/cee-time-picker.component';
// import { CeeDateComponent } from '../../field-components/cee-date/cee-date.component';
// import { CeeRadioComponent } from '../../field-components/cee-radio/cee-radio.component';
// import { CeePickerComponent } from '../../field-components/cee-picker/cee-picker.component';
// import { CeeImageComponent } from '../../field-components/cee-image/cee-image.component';
// import { CeeTextareaComponent } from '../../field-components/cee-textarea/cee-textarea.component';
// import { CeeTextfieldComponent } from '../../field-components/cee-textfield/cee-textfield.component';
// import { CeeLabelComponent } from '../../field-components/cee-label/cee-label.component';
import { CommonModule, NgStyle } from '@angular/common';
import { ViewRendererComponent } from '../../components/view-renderer/view-renderer.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared-events-service.service";
import * as i2 from "../../services/internal-cee-emitter-service.service";
import * as i3 from "../../models/api-data/api-data.service";
import * as i4 from "../../models/app-data/app-data.service";
import * as i5 from "../../services/wfe-step-loader.service";
import * as i6 from "../../services/cee-api-service.service";
import * as i7 from "@angular/material/dialog";
import * as i8 from "@angular/material/snack-bar";
import * as i9 from "@angular/common/http";
import * as i10 from "@angular/router";
import * as i11 from "@angular/common";
const _c0 = a0 => ({ "color": a0 });
function DynamicFormComponent_ng_container_0_div_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.sectionData.field_label);
} }
function DynamicFormComponent_ng_container_0_div_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 8);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.sectionData.field_label, i0.ɵɵsanitizeHtml);
} }
function DynamicFormComponent_ng_container_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 4);
    i0.ɵɵtemplate(1, DynamicFormComponent_ng_container_0_div_2_label_1_Template, 2, 1, "label", 5)(2, DynamicFormComponent_ng_container_0_div_2_label_2_Template, 1, 1, "label", 6);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.sectionData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.sectionData.field_label));
} }
function DynamicFormComponent_ng_container_0_ng_container_3_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r2 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, message_r2.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r2.message_text, " ");
} }
function DynamicFormComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, DynamicFormComponent_ng_container_0_ng_container_3_div_1_p_1_Template, 2, 4, "p", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function DynamicFormComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFormComponent_ng_container_0_ng_container_3_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext);
} }
function DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const field_r4 = ctx_r2.$implicit;
    const position_r5 = ctx_r2.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("form-field form-field-pos-", position_r5, " ", field_r4.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r4.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r4)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r4)("position", position_r5)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData);
} }
function DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-dynamic-renderer", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    const field_r4 = ctx_r2.$implicit;
    const position_r5 = ctx_r2.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("form-field form-field-pos-", position_r5, " ", field_r4.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r4.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r4)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r5, "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("fieldData", field_r4)("moduleName", field_r4.field_type);
} }
function DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_ng_container_1_Template, 2, 9, "ng-container", 0)(2, DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_ng_container_2_Template, 3, 10, "ng-container", 0);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.allowedFieldTypes.includes(field_r4.field_type));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.allowedFieldTypes.includes(field_r4.field_type));
} }
function DynamicFormComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, DynamicFormComponent_ng_container_0_ng_container_4_ng_container_2_Template, 3, 2, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1(" ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fieldList);
} }
function DynamicFormComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 15);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.noDataFoundLabel);
} }
function DynamicFormComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 1);
    i0.ɵɵtemplate(2, DynamicFormComponent_ng_container_0_div_2_Template, 3, 2, "div", 2)(3, DynamicFormComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 3)(4, DynamicFormComponent_ng_container_0_ng_container_4_Template, 3, 4, "ng-container", 0)(5, DynamicFormComponent_ng_container_0_ng_container_5_Template, 3, 1, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.hideLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.noDataFound);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.noDataFound && !ctx_r0.showLoading && !ctx_r0.showSkeletonLoader);
} }
export class DynamicFormComponent {
    sharedEventsServiceService;
    internalCEEEmitter;
    apiDataService;
    appDataService;
    wfeStepLoaderService;
    ceeApiService;
    dialog;
    snackBar;
    http;
    router;
    sectionData;
    stepId;
    templateId;
    rowData;
    rootData;
    childList = {};
    type;
    displayValues = [];
    displayValuesLazy = [];
    lazyInterval = [];
    searchData = new MatTableDataSource([]);
    showLoading = true;
    noDataFound = true;
    showSkeletonLoader = true;
    listElements = [];
    showErrorOnNext = false;
    messages = [];
    contextArray = [];
    fieldIdMapApiKey = {}; // to map the api field id and the api key of a single field
    additionalParameters = {};
    setAPIKeyUtil;
    eventListHandler;
    apiKeyUtil;
    // apiSubscription: Subscription;
    variableObj = {};
    conditionalUtil;
    fieldData;
    isMandatory = false;
    is_bootstrap = false;
    blockRenderedData;
    commonUtil;
    isVisible = true;
    fieldValue;
    checkEmpty;
    setDynamicLabelUtil;
    noDataFoundLabel = 'no record found.';
    flatAndNestUtil;
    html_id = '';
    fieldList = [];
    hideLabel = false;
    allowedFieldTypes = [
        "label",
        "Textfield",
        "Textarea",
        "Image",
        "Picker",
        "radio",
        "Date",
        "Timepicker",
        "Attachments"
    ];
    constructor(sharedEventsServiceService, internalCEEEmitter, apiDataService, appDataService, wfeStepLoaderService, ceeApiService, dialog, snackBar, http, router) {
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.ceeApiService = ceeApiService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.router = router;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.eventListHandler = new WFEEventListHandler(ceeApiService, router, sharedEventsServiceService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        this.checkEmpty = new EmptyUtil();
        this.flatAndNestUtil = new FlatUnflat(appDataService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    async ngOnInit() {
        const { additional_parameters } = this.sectionData;
        if (additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
            }
        }
        if (!this.additionalParameters['default_value']) {
            console.error("Provide default_value in additional_parameters for Dynamic Form: " + this.sectionData.unique_id);
            return;
        }
        const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        this.html_id = this.rowData && this.rowData.html_id ? this.rowData.html_id : this.sectionData.unique_id;
        this.hideLabel = this.rowData && this.rowData.fromField && this.rowData.fromField === 'Table' ? true : false;
        if (this.blockRenderedData && this.additionalParameters['OverrideFieldJSON']) {
            const OverrideFieldJSON = this.additionalParameters['OverrideFieldJSON'].split("||").map(ofj => {
                const ofjSplit = ofj.split("|");
                if (ofjSplit.length === 2) {
                    return {
                        propertyName: ofjSplit[0],
                        apiKey: ofjSplit[1]
                    };
                }
            }).filter(ofj => ofj);
            if (this.blockRenderedData.block_fields && this.blockRenderedData.block_fields.length > 0) {
                let blockRenderedDataTemp = JSON.parse(JSON.stringify(this.blockRenderedData));
                for (const ofjSplit of OverrideFieldJSON) {
                    if (blockRenderedDataTemp.block_fields[0].hasOwnProperty(ofjSplit['propertyName'])) {
                        blockRenderedDataTemp.block_fields[0][ofjSplit['propertyName']] = "#" + ofjSplit['apiKey'];
                    }
                }
                this.blockRenderedData = blockRenderedDataTemp;
            }
        }
        // console.log(this.rowData);
        if (this.rowData && this.rowData.value) {
            if (this.rowData.value.length > 0) {
                this.noDataFound = false;
                this.renderFieldJson(this.rowData.value);
            }
            else {
                this.noDataFound = true;
            }
        }
        else {
            this.variableObj['emitApiSuccessResponse_' +
                this.html_id] =
                this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                    this.setListData(res);
                }, err => {
                    console.error(err);
                    this.showLoading = false;
                    this.noDataFound = true;
                });
        }
        this.onComponentEvent('OnLoad');
    }
    /**
     * function that sets list data
     * @param res api response or the response of possible values
     */
    setListData(res) {
        if ((this.isSingleAPIKey && this.sectionData.api_key !== '') ||
            (!this.isSingleAPIKey && this.sectionData.response_api_key !== '')) {
            const result = this.setAPIKeyUtil.setApiCallBackData(this.sectionData, res);
            if (result) {
                if (result.length > 0) {
                    this.noDataFound = false;
                    this.renderFieldJson(result);
                }
                else {
                    this.noDataFound = true;
                }
            }
        }
    }
    propParseRecurs(prop) {
        const boolPropList = ["isDefault"];
        if (typeof prop === 'object' && Array.isArray(prop)) {
            for (const iterator of prop) {
                this.propParseRecurs(iterator);
            }
        }
        else if (typeof prop === 'object') {
            for (const key in prop) {
                const element = prop[key];
                if (boolPropList.includes(key)) {
                    if (element === '0' || element === 0 || element === false) {
                        prop[key] = false;
                    }
                    else {
                        prop[key] = true;
                    }
                }
                this.propParseRecurs(prop[key]);
            }
        }
    }
    /**
     * function that generate field JSON
     * @param result api response or the response of possible values
     */
    renderFieldJson(result) {
        const numericPropList = ["seq", "is_editable", "is_mandatory", "is_display", "field_character_limit"];
        this.fieldList = [];
        if (this.blockRenderedData.block_fields.length > 0) {
            for (let i = 0; i < result.length; i++) {
                const element = result[i];
                let fieldTempJson = JSON.parse(JSON.stringify(this.blockRenderedData.block_fields[0]));
                if (typeof fieldTempJson.unique_id === "string" && !fieldTempJson.unique_id.startsWith('#')) {
                    fieldTempJson.unique_id = this.html_id + '_' + fieldTempJson.unique_id + '_' + i;
                }
                for (const jKey in fieldTempJson) {
                    if (typeof fieldTempJson[jKey] === "string") {
                        if (this.hasDynamicKey(fieldTempJson[jKey], element)) {
                            fieldTempJson[jKey] = element[fieldTempJson[jKey].replace(/^#/g, '')];
                            if (numericPropList.includes(jKey)) {
                                fieldTempJson[jKey] = Number(fieldTempJson[jKey]);
                            }
                            this.propParseRecurs(fieldTempJson[jKey]);
                        }
                    }
                    else if (jKey === 'additional_parameters' && fieldTempJson[jKey].length >= 1) {
                        const addiParas = [];
                        for (const paraObj of fieldTempJson[jKey]) {
                            if (paraObj.value && this.hasDynamicKey(paraObj.value, element)) {
                                if (element[paraObj.value.replace(/^#/g, '')]) {
                                    paraObj.value = element[paraObj.value.replace(/^#/g, '')];
                                    addiParas.push(paraObj);
                                }
                            }
                            else {
                                addiParas.push(paraObj);
                            }
                        }
                        fieldTempJson[jKey] = addiParas;
                    }
                    else if (jKey === 'possible_values' && Array.isArray(fieldTempJson[jKey])
                        && fieldTempJson[jKey].length === 1
                        && typeof fieldTempJson[jKey][0] === "string" && /^#(.)+\[\*\](.)+\|\|#(.)+\[\*\](.)+/.test(fieldTempJson[jKey][0])) {
                        const newPossVal = [];
                        const possVal = fieldTempJson[jKey][0].split('||');
                        const data = this.flatAndNestUtil.flattenJSON(element);
                        for (let i = 0; i < Object.keys(data).length; i++) {
                            const tempIdKey = possVal[0].replace(/^#/g, '').replace('[*]', '[' + i + ']');
                            const tempValKey = possVal[1].replace(/^#/g, '').replace('[*]', '[' + i + ']');
                            if (data[tempIdKey] && data[tempValKey]) {
                                newPossVal.push(data[tempIdKey] + '||' + data[tempValKey]);
                            }
                            else {
                                break;
                            }
                        }
                        fieldTempJson[jKey] = newPossVal;
                    }
                }
                // console.log(fieldTempJson);
                this.fieldList.push(fieldTempJson);
            }
        }
    }
    hasDynamicKey(fieldParam, ApiParam) {
        if (fieldParam.startsWith('#')
            && Object.prototype.hasOwnProperty.call(ApiParam, fieldParam.replace(/^#/g, ''))) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * trigger event if there has been an event triggered on the list
     * @param name the name of the event
     */
    onComponentEvent(name) {
        if (this.sectionData.event_list.length > 0) {
            for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                if (event.isDefault && event.event_name.toLowerCase() === name.toLowerCase()) {
                    this.eventListHandler.switchEventDisplayType(event, this.sectionData.event_list);
                }
            }
        }
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    /**
     * unsubscribe all the subscriptions on ngDestroy
     */
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    static ɵfac = function DynamicFormComponent_Factory(t) { return new (t || DynamicFormComponent)(i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.WfeStepLoaderService), i0.ɵɵdirectiveInject(i6.CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DynamicFormComponent, selectors: [["app-dynamic-form"]], inputs: { sectionData: "sectionData", stepId: "stepId", templateId: "templateId", rowData: "rowData", rootData: "rootData", childList: "childList", type: "type" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "dynamic-form-container", 3, "id"], ["class", "form-label", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "form-label"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "stepId", "field", "position", "templateId", "rootData"], [3, "stepId", "fieldData", "moduleName"], [1, "no-data-info", "text-center", "my-5"]], template: function DynamicFormComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DynamicFormComponent_ng_container_0_Template, 6, 5, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [NgStyle, CommonModule, i11.NgForOf, i11.NgIf, ViewRendererComponent, DynamicRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DynamicFormComponent, [{
        type: Component,
        args: [{ selector: 'app-dynamic-form', standalone: true, imports: [NgStyle, CommonModule, forwardRef(() => ViewRendererComponent), DynamicRendererComponent], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<div class=\"dynamic-form-container\" id=\"{{html_id}}\">\r\n\t\t<div class=\"form-label\" *ngIf=\"!hideLabel\">\r\n\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(sectionData.field_label)\">{{sectionData.field_label}}</label>\r\n\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(sectionData.field_label)\"\r\n\t\t\t\t[innerHTML]=\"sectionData.field_label\"></label>\r\n\t\t</div>\r\n\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t\t{{message.message_text}}\r\n\t\t\t\t</p>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t\t<div class=\" {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t<ng-container *ngFor=\"let field of fieldList; index as position\">\r\n\t\t\t\t\t<!-- <div class=\"form-field form-field-pos-{{position}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellData; context:{field:field,position:position}\">\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</div> -->\r\n\t\t\t\t\t<ng-container *ngIf=\"allowedFieldTypes.includes(field.field_type)\">\r\n\t\t\t\t\t\t<app-view-renderer class=\"form-field form-field-pos-{{position}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\" [position]=\"position\" [templateId]=\"templateId\"\r\n\t\t\t\t\t\t[rootData]=\"rootData\">\r\n\t\t\t\t\t\t</app-view-renderer>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-container *ngIf=\"!allowedFieldTypes.includes(field.field_type)\">\r\n\t\t\t\t\t\t<div class=\"form-field form-field-pos-{{position}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t<app-dynamic-renderer [stepId]=\"stepId\" [fieldData]=\"field\" [moduleName]=\"field.field_type\"\r\n\t\t\t\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t\t\t\t\t</app-dynamic-renderer>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngIf=\"noDataFound && !showLoading && !showSkeletonLoader\">\r\n\t\t\t<h5 class=\"no-data-info text-center my-5\">{{noDataFoundLabel}}</h5>\r\n\t\t</ng-container>\r\n\t</div>\r\n</ng-container>\r\n\r\n<!-- <ng-template #cellData let-field=\"field\" let-position=\"position\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<app-cee-label [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\" tabindex=\"0\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-label>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<app-cee-textfield [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-textfield>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Textarea'\">\r\n\t\t\t<app-cee-textarea [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-textarea>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<app-cee-image [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-image>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<app-cee-picker [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-picker>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'radio'\">\r\n\t\t\t<app-cee-radio [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-radio>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Date'\">\r\n\t\t\t<app-cee-date [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n\t\t\t</app-cee-date>\r\n\t\t</ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'Timepicker'\">\r\n        <app-cee-time-picker [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\"></app-cee-time-picker>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"'Attachments'\">\r\n        <app-cee-attachments [keepState]=\"true\" [stepId]=\"stepId\" [rootData]=\"rootData\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n        </app-cee-attachments>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchDefault>\r\n        <app-dynamic-renderer [stepId]=\"stepId\" [fieldData]=\"field\" [moduleName]=\"field.field_type\"\r\n\t\t\t\tclass=\"field-{{ position }}\">\r\n        </app-dynamic-renderer>\r\n    </ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template> -->\r\n" }]
    }], () => [{ type: i1.SharedEventsServiceService }, { type: i2.CEEInternalEmitterService }, { type: i3.ApiDataService }, { type: i4.AppDataService }, { type: i5.WfeStepLoaderService }, { type: i6.CeeApiService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.Router }], { sectionData: [{
            type: Input
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], childList: [{
            type: Input
        }], type: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DynamicFormComponent, { className: "DynamicFormComponent", filePath: "lib\\components\\dynamic-form\\dynamic-form.component.ts", lineNumber: 42 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHluYW1pYy1mb3JtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBOEMsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBSXpHLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBQzVFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQU1uRSxPQUFPLEVBQUUsa0JBQWtCLElBQUksa0JBQWtCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNuRixPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUc5RSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNuRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxnQ0FBZ0MsQ0FBQztBQUVsRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7QUFDMUYsOEdBQThHO0FBQzlHLDZHQUE2RztBQUM3Ryx5RkFBeUY7QUFDekYsNEZBQTRGO0FBQzVGLCtGQUErRjtBQUMvRiw0RkFBNEY7QUFDNUYscUdBQXFHO0FBQ3JHLHdHQUF3RztBQUN4Ryw0RkFBNEY7QUFDNUYsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDN0I1RixnQ0FBdUU7SUFBQSxZQUEyQjtJQUFBLGlCQUFROzs7SUFBbkMsY0FBMkI7SUFBM0Isb0RBQTJCOzs7SUFDbEcsMkJBQytDOzs7SUFBOUMsNkVBQXFDOzs7SUFIdkMsOEJBQTJDO0lBRTFDLEFBREEsOEZBQXVFLGlGQUVoQztJQUN4QyxpQkFBTTs7O0lBSDBCLGNBQXNDO0lBQXRDLHFFQUFzQztJQUN0QyxjQUFxQztJQUFyQyxvRUFBcUM7OztJQUtuRSw2QkFBNEQ7SUFDM0QsWUFDRDtJQUFBLGlCQUFJOzs7SUFGbUIsc0VBQW9DO0lBQzFELGNBQ0Q7SUFEQyx3REFDRDs7O0lBSEQsK0JBQTJEO0lBQzFELHNHQUE0RDtJQUc3RCxpQkFBTTs7O0lBSEQsY0FBaUI7SUFBakIseUNBQWlCOzs7SUFGdkIsNkJBQStDO0lBQzlDLG1HQUEyRDs7OztJQUF2QixjQUFxQjtJQUFyQiw2Q0FBcUI7OztJQWF2RCw2QkFBbUU7SUFDbEUsd0NBRW9COzs7Ozs7O0lBRkQsY0FBZ047SUFBaE4sOFFBQWdOO0lBQ25PLEFBRDRSLEFBQXRCLEFBQWhCLEFBQWxCLHNDQUFpQixtQkFBZ0IseUJBQXNCLGlDQUEwQiw2QkFDaFM7OztJQUd0Qiw2QkFBb0U7SUFDbkUsMkJBQXNOO0lBQ3JOLDJDQUV1QjtJQUN4QixpQkFBTTs7Ozs7OztJQUpELGNBQWdOO0lBQWhOLDhRQUFnTjtJQUVwTixjQUE0QjtJQUE1QixvREFBNEI7SUFEZ0MsQUFBcEIsQUFBbEIsc0NBQWlCLHVCQUFvQixtQ0FBZ0M7OztJQVo5Riw2QkFBaUU7SUFVaEUsQUFMQSxvSUFBbUUsd0hBS0M7Ozs7O0lBTHJELGNBQWtEO0lBQWxELDZFQUFrRDtJQUtsRCxjQUFtRDtJQUFuRCw4RUFBbUQ7OztJQVpyRSw2QkFBbUM7SUFDbEMsMkJBQXdDO0lBQ3ZDLHFIQUFpRTtJQWtCbEUsaUJBQU07Ozs7SUFuQkQsY0FBa0M7SUFBbEMsb0VBQWtDO0lBQ04sY0FBYztJQUFkLDBDQUFjOzs7SUFxQmhELDZCQUF5RTtJQUN4RSw4QkFBMEM7SUFBQSxZQUFvQjtJQUFBLGlCQUFLOzs7O0lBQXpCLGVBQW9CO0lBQXBCLDZDQUFvQjs7O0lBdENqRSw2QkFBZ0M7SUFDL0IsOEJBQXFEO0lBb0NwRCxBQXZCQSxBQVBBLEFBTEEsb0ZBQTJDLHlGQUtJLHlGQU9aLHlGQXVCc0M7SUFHMUUsaUJBQU07Ozs7SUF2QzhCLGNBQWdCO0lBQWhCLDhDQUFnQjtJQUMxQixjQUFnQjtJQUFoQix3Q0FBZ0I7SUFLUCxjQUFXO0lBQVgseUNBQVc7SUFPOUIsY0FBa0I7SUFBbEIsMENBQWtCO0lBdUJsQixjQUF3RDtJQUF4RCw4RkFBd0Q7O0FESXpFLE1BQU0sT0FBTyxvQkFBb0I7SUEyRGpCO0lBQ0Q7SUFDQztJQUNBO0lBQ0E7SUFDRDtJQUNBO0lBQ0E7SUFDQztJQUNEO0lBbEVGLFdBQVcsQ0FBTTtJQUNULE1BQU0sQ0FBTTtJQUNwQixVQUFVLENBQU07SUFDaEIsT0FBTyxDQUFNO0lBQ0wsUUFBUSxDQUFNO0lBQ3RCLFNBQVMsR0FBUSxFQUFFLENBQUM7SUFDcEIsSUFBSSxDQUFNO0lBRW5CLGFBQWEsR0FBUSxFQUFFLENBQUM7SUFDeEIsaUJBQWlCLEdBQVEsRUFBRSxDQUFDO0lBQzVCLFlBQVksR0FBUSxFQUFFLENBQUM7SUFDdkIsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLGtCQUFrQixHQUFZLElBQUksQ0FBQztJQUNuQyxZQUFZLEdBQVEsRUFBRSxDQUFDO0lBQ3ZCLGVBQWUsR0FBRyxLQUFLLENBQUM7SUFDeEIsUUFBUSxHQUFHLEVBQUUsQ0FBQztJQUVkLFlBQVksR0FBUSxFQUFFLENBQUM7SUFDdkIsZ0JBQWdCLEdBQVcsRUFBRSxDQUFDLENBQUMsNERBQTREO0lBRTNGLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztJQUUxQixhQUFhLENBQXFCO0lBQ2xDLGdCQUFnQixDQUFzQjtJQUN0QyxVQUFVLENBQWE7SUFDdkIsaUNBQWlDO0lBQ2pDLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsZUFBZSxDQUFrQjtJQUNqQyxTQUFTLENBQU07SUFDZixXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLFlBQVksR0FBWSxLQUFLLENBQUM7SUFDOUIsaUJBQWlCLENBQU07SUFDdkIsVUFBVSxDQUFhO0lBQ3ZCLFNBQVMsR0FBRyxJQUFJLENBQUM7SUFDakIsVUFBVSxDQUFNO0lBQ2hCLFVBQVUsQ0FBWTtJQUN0QixtQkFBbUIsQ0FBbUI7SUFDdEMsZ0JBQWdCLEdBQVcsa0JBQWtCLENBQUM7SUFDOUMsZUFBZSxDQUFhO0lBQzVCLE9BQU8sR0FBVSxFQUFFLENBQUM7SUFDcEIsU0FBUyxHQUFHLEVBQUUsQ0FBQztJQUNmLFNBQVMsR0FBWSxLQUFLLENBQUM7SUFDM0IsaUJBQWlCLEdBQVk7UUFDekIsT0FBTztRQUNQLFdBQVc7UUFDWCxVQUFVO1FBQ1YsT0FBTztRQUNQLFFBQVE7UUFDUixPQUFPO1FBQ1AsTUFBTTtRQUNOLFlBQVk7UUFDWixhQUFhO0tBQ2hCLENBQUE7SUFFRCxZQUNZLDBCQUFzRCxFQUN2RCxrQkFBNkMsRUFDNUMsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzNDLGFBQTRCLEVBQzVCLE1BQWlCLEVBQ2pCLFFBQXFCLEVBQ3BCLElBQWdCLEVBQ2pCLE1BQWM7UUFUYiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3ZELHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFDNUMsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzNDLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNwQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2pCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFHckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGtCQUFrQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLGdCQUFnQixDQUFDLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLGNBQWMsRUFBRSxjQUFjLENBQUMsQ0FBQztRQUNoSixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxtQkFBbUIsQ0FDM0MsYUFBYSxFQUNiLE1BQU0sRUFDTiwwQkFBMEIsRUFDMUIsa0JBQWtCLEVBQ2xCLG9CQUFvQixFQUNwQixjQUFjLEVBQ2QsY0FBYyxFQUNkLE1BQU0sRUFDTixRQUFRLEVBQ1IsSUFBSSxDQUFDLENBQUM7UUFDVixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDO1FBQ25DLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksVUFBVSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3RELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsS0FBSyxDQUFDLFFBQVE7UUFDVixNQUFNLEVBQ0YscUJBQXFCLEVBQ3hCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUNyQixJQUFJLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDbEMsS0FBSyxNQUFNLFFBQVEsSUFBSSxxQkFBcUIsRUFBRTtnQkFDMUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO2FBQ3ZFO1NBQ0o7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQzdDLE9BQU8sQ0FBQyxLQUFLLENBQUMsbUVBQW1FLEdBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQTtZQUM3RyxPQUFPO1NBQ1Y7UUFFRCxNQUFNLElBQUksR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDckgsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsSUFBSSxDQUFDLENBQUM7UUFFckUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7UUFDeEcsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7UUFFN0csSUFBSSxJQUFJLENBQUMsaUJBQWlCLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLG1CQUFtQixDQUFDLEVBQUU7WUFDMUUsTUFBTSxpQkFBaUIsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMzRixNQUFNLFFBQVEsR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLFFBQVEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUN2QixPQUFPO3dCQUNILFlBQVksRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUN6QixNQUFNLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztxQkFDdEIsQ0FBQTtpQkFDSjtZQUNMLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXRCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3ZGLElBQUkscUJBQXFCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQy9FLEtBQUssTUFBTSxRQUFRLElBQUksaUJBQWlCLEVBQUU7b0JBQ3RDLElBQUkscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUMsRUFBRTt3QkFDaEYscUJBQXFCLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxjQUFjLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7cUJBQzlGO2lCQUNKO2dCQUNELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxxQkFBcUIsQ0FBQzthQUNsRDtTQUNKO1FBRUQsNkJBQTZCO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNwQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0gsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7YUFDM0I7U0FDSjthQUFNO1lBQ0gsSUFBSSxDQUFDLFdBQVcsQ0FDWix5QkFBeUI7Z0JBQ3pCLElBQUksQ0FBQyxPQUFPLENBQUM7Z0JBQ2IsSUFBSSxDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFO29CQUNMLE9BQU8sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztnQkFDNUIsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUNELElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssV0FBVyxDQUFDLEdBQUc7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEtBQUssRUFBRSxDQUFDO1lBQ3hELENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLEtBQUssRUFBRSxDQUFDLEVBQUU7WUFDcEUsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEdBQUcsQ0FBQyxDQUFDO1lBQzVFLElBQUksTUFBTSxFQUFFO2dCQUNSLElBQUksTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO29CQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNoQztxQkFBTTtvQkFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDM0I7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVPLGVBQWUsQ0FBQyxJQUFJO1FBQ3hCLE1BQU0sWUFBWSxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkMsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNqRCxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksRUFBRTtnQkFDekIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUNsQztTQUNKO2FBQU0sSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7WUFDakMsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3BCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxZQUFZLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUM1QixJQUFJLE9BQU8sS0FBSyxHQUFHLElBQUksT0FBTyxLQUFLLENBQUMsSUFBSSxPQUFPLEtBQUssS0FBSyxFQUFFO3dCQUN2RCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDO3FCQUNyQjt5QkFBTTt3QkFDSCxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO3FCQUNwQjtpQkFDSjtnQkFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2FBQ25DO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssZUFBZSxDQUFDLE1BQU07UUFDMUIsTUFBTSxlQUFlLEdBQUcsQ0FBQyxLQUFLLEVBQUUsYUFBYSxFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLENBQUMsQ0FBQztRQUN0RyxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZGLElBQUksT0FBTyxhQUFhLENBQUMsU0FBUyxLQUFLLFFBQVEsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN6RixhQUFhLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLGFBQWEsQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztpQkFDcEY7Z0JBQ0QsS0FBSyxNQUFNLElBQUksSUFBSSxhQUFhLEVBQUU7b0JBQzlCLElBQUksT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUN6QyxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLE9BQU8sQ0FBQyxFQUFFOzRCQUNsRCxhQUFhLENBQUMsSUFBSSxDQUFDLEdBQUcsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7NEJBQ3RFLElBQUksZUFBZSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQ0FDaEMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzs2QkFDckQ7NEJBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDN0M7cUJBQ0o7eUJBQ0ksSUFBSSxJQUFJLEtBQUssdUJBQXVCLElBQUksYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQzFFLE1BQU0sU0FBUyxHQUFHLEVBQUUsQ0FBQTt3QkFDcEIsS0FBSyxNQUFNLE9BQU8sSUFBSSxhQUFhLENBQUMsSUFBSSxDQUFDLEVBQUU7NEJBQ3ZDLElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLEVBQUU7Z0NBQzdELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxFQUFFO29DQUMzQyxPQUFPLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQztvQ0FDMUQsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQ0FDM0I7NkJBQ0o7aUNBQ0k7Z0NBQ0QsU0FBUyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQzs2QkFDM0I7eUJBQ0o7d0JBQ0QsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLFNBQVMsQ0FBQztxQkFDbkM7eUJBQ0ksSUFBSSxJQUFJLEtBQUssaUJBQWlCLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7MkJBQ2xFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQzsyQkFDaEMsT0FBTyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxJQUFJLHFDQUFxQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFDckg7d0JBQ0UsTUFBTSxVQUFVLEdBQUcsRUFBRSxDQUFDO3dCQUN0QixNQUFNLE9BQU8sR0FBRyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNuRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQzt3QkFFdkQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFOzRCQUMvQyxNQUFNLFNBQVMsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7NEJBQzlFLE1BQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQzs0QkFDL0UsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO2dDQUNyQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUE7NkJBQzdEO2lDQUFNO2dDQUNILE1BQU07NkJBQ1Q7eUJBQ0o7d0JBQ0QsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQztxQkFDcEM7aUJBQ0o7Z0JBQ0QsOEJBQThCO2dCQUU5QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUN0QztTQUVKO0lBQ0wsQ0FBQztJQUVPLGFBQWEsQ0FBQyxVQUFVLEVBQUUsUUFBUTtRQUN0QyxJQUFJLFVBQVUsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDO2VBQ3ZCLE1BQU0sQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRTtZQUNsRixPQUFPLElBQUksQ0FBQztTQUNmO2FBQ0k7WUFDRCxPQUFPLEtBQUssQ0FBQztTQUNoQjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxJQUFZO1FBQ3pCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QyxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDLEVBQUU7Z0JBQ3pFLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDMUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHNCQUFzQixDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNwRjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQsMEJBQTBCO0lBQzFCLElBQUksY0FBYztRQUNkLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQzFFLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDUCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxXQUFXLEVBQUU7WUFDaEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3ZDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQWE7UUFDaEIsTUFBTSxLQUFLLEdBQUcsZUFBZSxDQUFDO1FBQzlCLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM3QixDQUFDOzhFQXJUUSxvQkFBb0I7NkRBQXBCLG9CQUFvQjtZQ3pDakMsdUZBQWdDOztZQUFqQixvQ0FBZTtrQ0R1Q2hCLE9BQU8sRUFBRSxZQUFZLHlCQUFtQixxQkFBcUIsRUFBRyx3QkFBd0I7O2lGQUV6RixvQkFBb0I7Y0FQaEMsU0FBUzsyQkFDSSxrQkFBa0IsY0FHaEIsSUFBSSxXQUNQLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSx3QkFBd0IsQ0FBQzs2VEFJMUYsV0FBVztrQkFBbkIsS0FBSztZQUNXLE1BQU07a0JBQXRCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7O2tGQVJHLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNldEFQSUNhbGxiYWNrRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3NldC1hcGktY2FsbGJhY2stZGF0YS11dGlsJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXV0aWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBXRkVFdmVudExpc3RIYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWV2ZW50LWxpc3QtaGFuZGxlci11dGlsJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgQVBJS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1rZXktdXRpbCc7XHJcbmltcG9ydCB7IEVtcHR5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2VtcHR5LXV0aWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGFiZWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHluYW1pYy1sYWJlbC11dGlsJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEZsYXRVbmZsYXQgfSBmcm9tICcuLi8uLi91dGlscy9mbGF0LXVuZmxhdC1qc29uJztcclxuaW1wb3J0IHsgRHluYW1pY1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vZHluYW1pYy1yZW5kZXJlci9keW5hbWljLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZUF0dGFjaG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYXR0YWNobWVudHMvY2VlLWF0dGFjaG1lbnRzLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRpbWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10aW1lLXBpY2tlci9jZWUtdGltZS1waWNrZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlRGF0ZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWRhdGUvY2VlLWRhdGUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlUmFkaW9Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1yYWRpby9jZWUtcmFkaW8uY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcGlja2VyL2NlZS1waWNrZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1pbWFnZS9jZWUtaW1hZ2UuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlVGV4dGFyZWFDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10ZXh0YXJlYS9jZWUtdGV4dGFyZWEuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlVGV4dGZpZWxkQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGV4dGZpZWxkL2NlZS10ZXh0ZmllbGQuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlTGFiZWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1sYWJlbC9jZWUtbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVmlld1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy92aWV3LXJlbmRlcmVyL3ZpZXctcmVuZGVyZXIuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtZHluYW1pYy1mb3JtJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9keW5hbWljLWZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vZHluYW1pYy1mb3JtLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW05nU3R5bGUsIENvbW1vbk1vZHVsZSwgZm9yd2FyZFJlZigoKSA9PiBWaWV3UmVuZGVyZXJDb21wb25lbnQpLCBEeW5hbWljUmVuZGVyZXJDb21wb25lbnRdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEeW5hbWljRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBzZWN0aW9uRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHRlbXBsYXRlSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGNoaWxkTGlzdDogYW55ID0ge307XHJcbiAgICBASW5wdXQoKSB0eXBlOiBhbnk7XHJcblxyXG4gICAgZGlzcGxheVZhbHVlczogYW55ID0gW107XHJcbiAgICBkaXNwbGF5VmFsdWVzTGF6eTogYW55ID0gW107XHJcbiAgICBsYXp5SW50ZXJ2YWw6IGFueSA9IFtdO1xyXG4gICAgc2VhcmNoRGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoW10pO1xyXG4gICAgc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgbm9EYXRhRm91bmQgPSB0cnVlO1xyXG4gICAgc2hvd1NrZWxldG9uTG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGxpc3RFbGVtZW50czogYW55ID0gW107XHJcbiAgICBzaG93RXJyb3JPbk5leHQgPSBmYWxzZTtcclxuICAgIG1lc3NhZ2VzID0gW107XHJcblxyXG4gICAgY29udGV4dEFycmF5OiBhbnkgPSBbXTtcclxuICAgIGZpZWxkSWRNYXBBcGlLZXk6IG9iamVjdCA9IHt9OyAvLyB0byBtYXAgdGhlIGFwaSBmaWVsZCBpZCBhbmQgdGhlIGFwaSBrZXkgb2YgYSBzaW5nbGUgZmllbGRcclxuXHJcbiAgICBhZGRpdGlvbmFsUGFyYW1ldGVycyA9IHt9O1xyXG5cclxuICAgIHNldEFQSUtleVV0aWw6IFNldEFQSUNhbGxiYWNrRGF0YTtcclxuICAgIGV2ZW50TGlzdEhhbmRsZXI6IFdGRUV2ZW50TGlzdEhhbmRsZXI7XHJcbiAgICBhcGlLZXlVdGlsOiBBUElLZXlVdGlsO1xyXG4gICAgLy8gYXBpU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICB2YXJpYWJsZU9iaiA9IHt9O1xyXG4gICAgY29uZGl0aW9uYWxVdGlsOiBDb25kaXRpb25hbFV0aWw7XHJcbiAgICBmaWVsZERhdGE6IGFueTtcclxuICAgIGlzTWFuZGF0b3J5ID0gZmFsc2U7XHJcbiAgICBpc19ib290c3RyYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJsb2NrUmVuZGVyZWREYXRhOiBhbnk7XHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG4gICAgaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgIGZpZWxkVmFsdWU6IGFueTtcclxuICAgIGNoZWNrRW1wdHk6IEVtcHR5VXRpbDtcclxuICAgIHNldER5bmFtaWNMYWJlbFV0aWw6IER5bmFtaWNMYWJlbFV0aWw7XHJcbiAgICBub0RhdGFGb3VuZExhYmVsOiBzdHJpbmcgPSAnbm8gcmVjb3JkIGZvdW5kLic7XHJcbiAgICBmbGF0QW5kTmVzdFV0aWw6IEZsYXRVbmZsYXQ7XHJcbiAgICBodG1sX2lkOnN0cmluZyA9ICcnO1xyXG4gICAgZmllbGRMaXN0ID0gW107XHJcbiAgICBoaWRlTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGFsbG93ZWRGaWVsZFR5cGVzOnN0cmluZ1tdID0gW1xyXG4gICAgICAgIFwibGFiZWxcIixcclxuICAgICAgICBcIlRleHRmaWVsZFwiLFxyXG4gICAgICAgIFwiVGV4dGFyZWFcIixcclxuICAgICAgICBcIkltYWdlXCIsXHJcbiAgICAgICAgXCJQaWNrZXJcIixcclxuICAgICAgICBcInJhZGlvXCIsXHJcbiAgICAgICAgXCJEYXRlXCIsXHJcbiAgICAgICAgXCJUaW1lcGlja2VyXCIsXHJcbiAgICAgICAgXCJBdHRhY2htZW50c1wiXHJcbiAgICBdXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNldEFQSUtleVV0aWwgPSBuZXcgU2V0QVBJQ2FsbGJhY2tEYXRhKGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwgPSBuZXcgRHluYW1pY0xhYmVsVXRpbChhcGlEYXRhU2VydmljZSwgYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxVdGlsID0gbmV3IENvbmRpdGlvbmFsVXRpbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNTaW5nbGVDb25kaXRpb24nKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlciA9IG5ldyBXRkVFdmVudExpc3RIYW5kbGVyKFxyXG4gICAgICAgICAgICBjZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgYXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGRpYWxvZyxcclxuICAgICAgICAgICAgc25hY2tCYXIsXHJcbiAgICAgICAgICAgIGh0dHApO1xyXG4gICAgICAgIHRoaXMuY29tbW9uVXRpbCA9IG5ldyBDb21tb25VdGlsKCk7XHJcbiAgICAgICAgdGhpcy5hcGlLZXlVdGlsID0gbmV3IEFQSUtleVV0aWwoKTtcclxuICAgICAgICB0aGlzLmNoZWNrRW1wdHkgPSBuZXcgRW1wdHlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy5mbGF0QW5kTmVzdFV0aWwgPSBuZXcgRmxhdFVuZmxhdChhcHBEYXRhU2VydmljZSk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfYm9vdHN0cmFwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhZGRpdGlvbmFsX3BhcmFtZXRlcnNcclxuICAgICAgICB9ID0gdGhpcy5zZWN0aW9uRGF0YTtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiBhZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydkZWZhdWx0X3ZhbHVlJ10pIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlByb3ZpZGUgZGVmYXVsdF92YWx1ZSBpbiBhZGRpdGlvbmFsX3BhcmFtZXRlcnMgZm9yIER5bmFtaWMgRm9ybTogXCIrdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydkZWZhdWx0X3ZhbHVlJ10pLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGRhdGEpO1xyXG5cclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLmh0bWxfaWQgPyB0aGlzLnJvd0RhdGEuaHRtbF9pZCA6IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgIHRoaXMuaGlkZUxhYmVsID0gdGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YS5mcm9tRmllbGQgJiYgdGhpcy5yb3dEYXRhLmZyb21GaWVsZCA9PT0gJ1RhYmxlJyA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snT3ZlcnJpZGVGaWVsZEpTT04nXSkge1xyXG4gICAgICAgICAgICBjb25zdCBPdmVycmlkZUZpZWxkSlNPTiA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ092ZXJyaWRlRmllbGRKU09OJ10uc3BsaXQoXCJ8fFwiKS5tYXAob2ZqID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9malNwbGl0ID0gb2ZqLnNwbGl0KFwifFwiKTtcclxuICAgICAgICAgICAgICAgIGlmIChvZmpTcGxpdC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wZXJ0eU5hbWU6IG9malNwbGl0WzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IG9malNwbGl0WzFdXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5maWx0ZXIob2ZqID0+IG9maik7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHMgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJsb2NrUmVuZGVyZWREYXRhVGVtcCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5ibG9ja1JlbmRlcmVkRGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBvZmpTcGxpdCBvZiBPdmVycmlkZUZpZWxkSlNPTikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChibG9ja1JlbmRlcmVkRGF0YVRlbXAuYmxvY2tfZmllbGRzWzBdLmhhc093blByb3BlcnR5KG9malNwbGl0Wydwcm9wZXJ0eU5hbWUnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tSZW5kZXJlZERhdGFUZW1wLmJsb2NrX2ZpZWxkc1swXVtvZmpTcGxpdFsncHJvcGVydHlOYW1lJ11dID0gXCIjXCIgKyBvZmpTcGxpdFsnYXBpS2V5J107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YSA9IGJsb2NrUmVuZGVyZWREYXRhVGVtcDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5yb3dEYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YS52YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhLnZhbHVlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyRmllbGRKc29uKHRoaXMucm93RGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgICAgICAgICAnZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZV8nICtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbF9pZF0gPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TGlzdERhdGEocmVzKTtcclxuICAgICAgICAgICAgICAgIH0sIGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uTG9hZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXRzIGxpc3QgZGF0YVxyXG4gICAgICogQHBhcmFtIHJlcyBhcGkgcmVzcG9uc2Ugb3IgdGhlIHJlc3BvbnNlIG9mIHBvc3NpYmxlIHZhbHVlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldExpc3REYXRhKHJlcykge1xyXG4gICAgICAgIGlmICgodGhpcy5pc1NpbmdsZUFQSUtleSAmJiB0aGlzLnNlY3Rpb25EYXRhLmFwaV9rZXkgIT09ICcnKSB8fFxyXG4gICAgICAgICAgICAoIXRoaXMuaXNTaW5nbGVBUElLZXkgJiYgdGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5ICE9PSAnJykpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLnNlY3Rpb25EYXRhLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJGaWVsZEpzb24ocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RhdGFGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9wUGFyc2VSZWN1cnMocHJvcCkge1xyXG4gICAgICAgIGNvbnN0IGJvb2xQcm9wTGlzdCA9IFtcImlzRGVmYXVsdFwiXTtcclxuICAgICAgICBpZiAodHlwZW9mIHByb3AgPT09ICdvYmplY3QnICYmIEFycmF5LmlzQXJyYXkocHJvcCkpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBpdGVyYXRvciBvZiBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb3BQYXJzZVJlY3VycyhpdGVyYXRvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBwcm9wID09PSAnb2JqZWN0JykgeyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcHJvcFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGJvb2xQcm9wTGlzdC5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgPT09ICcwJyB8fCBlbGVtZW50ID09PSAwIHx8IGVsZW1lbnQgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bba2V5XSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3Bba2V5XSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvcFBhcnNlUmVjdXJzKHByb3Bba2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IGdlbmVyYXRlIGZpZWxkIEpTT05cclxuICAgICAqIEBwYXJhbSByZXN1bHQgYXBpIHJlc3BvbnNlIG9yIHRoZSByZXNwb25zZSBvZiBwb3NzaWJsZSB2YWx1ZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZW5kZXJGaWVsZEpzb24ocmVzdWx0KSB7XHJcbiAgICAgICAgY29uc3QgbnVtZXJpY1Byb3BMaXN0ID0gW1wic2VxXCIsIFwiaXNfZWRpdGFibGVcIiwgXCJpc19tYW5kYXRvcnlcIiwgXCJpc19kaXNwbGF5XCIsIFwiZmllbGRfY2hhcmFjdGVyX2xpbWl0XCJdO1xyXG4gICAgICAgIHRoaXMuZmllbGRMaXN0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXN1bHQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSByZXN1bHRbaV07XHJcbiAgICAgICAgICAgICAgICBsZXQgZmllbGRUZW1wSnNvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHNbMF0pKTtcclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZmllbGRUZW1wSnNvbi51bmlxdWVfaWQgPT09IFwic3RyaW5nXCIgJiYgIWZpZWxkVGVtcEpzb24udW5pcXVlX2lkLnN0YXJ0c1dpdGgoJyMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkVGVtcEpzb24udW5pcXVlX2lkID0gdGhpcy5odG1sX2lkICsgJ18nICsgZmllbGRUZW1wSnNvbi51bmlxdWVfaWQgKyAnXycgKyBpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBqS2V5IGluIGZpZWxkVGVtcEpzb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGZpZWxkVGVtcEpzb25baktleV0gPT09IFwic3RyaW5nXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaGFzRHluYW1pY0tleShmaWVsZFRlbXBKc29uW2pLZXldLCBlbGVtZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRUZW1wSnNvbltqS2V5XSA9IGVsZW1lbnRbZmllbGRUZW1wSnNvbltqS2V5XS5yZXBsYWNlKC9eIy9nLCAnJyldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bWVyaWNQcm9wTGlzdC5pbmNsdWRlcyhqS2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVGVtcEpzb25baktleV0gPSBOdW1iZXIoZmllbGRUZW1wSnNvbltqS2V5XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb3BQYXJzZVJlY3VycyhmaWVsZFRlbXBKc29uW2pLZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChqS2V5ID09PSAnYWRkaXRpb25hbF9wYXJhbWV0ZXJzJyAmJiBmaWVsZFRlbXBKc29uW2pLZXldLmxlbmd0aCA+PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFkZGlQYXJhcyA9IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYU9iaiBvZiBmaWVsZFRlbXBKc29uW2pLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYU9iai52YWx1ZSAmJiB0aGlzLmhhc0R5bmFtaWNLZXkocGFyYU9iai52YWx1ZSwgZWxlbWVudCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFtwYXJhT2JqLnZhbHVlLnJlcGxhY2UoL14jL2csICcnKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYU9iai52YWx1ZSA9IGVsZW1lbnRbcGFyYU9iai52YWx1ZS5yZXBsYWNlKC9eIy9nLCAnJyldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpUGFyYXMucHVzaChwYXJhT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpUGFyYXMucHVzaChwYXJhT2JqKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFRlbXBKc29uW2pLZXldID0gYWRkaVBhcmFzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChqS2V5ID09PSAncG9zc2libGVfdmFsdWVzJyAmJiBBcnJheS5pc0FycmF5KGZpZWxkVGVtcEpzb25baktleV0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIGZpZWxkVGVtcEpzb25baktleV0ubGVuZ3RoID09PSAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICYmIHR5cGVvZiBmaWVsZFRlbXBKc29uW2pLZXldWzBdID09PSBcInN0cmluZ1wiICYmIC9eIyguKStcXFtcXCpcXF0oLikrXFx8XFx8IyguKStcXFtcXCpcXF0oLikrLy50ZXN0KGZpZWxkVGVtcEpzb25baktleV1bMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld1Bvc3NWYWwgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zc1ZhbCA9IGZpZWxkVGVtcEpzb25baktleV1bMF0uc3BsaXQoJ3x8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZsYXRBbmROZXN0VXRpbC5mbGF0dGVuSlNPTihlbGVtZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBJZEtleSA9IHBvc3NWYWxbMF0ucmVwbGFjZSgvXiMvZywgJycpLnJlcGxhY2UoJ1sqXScsICdbJyArIGkgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcFZhbEtleSA9IHBvc3NWYWxbMV0ucmVwbGFjZSgvXiMvZywgJycpLnJlcGxhY2UoJ1sqXScsICdbJyArIGkgKyAnXScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFbdGVtcElkS2V5XSAmJiBkYXRhW3RlbXBWYWxLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3UG9zc1ZhbC5wdXNoKGRhdGFbdGVtcElkS2V5XSArICd8fCcgKyBkYXRhW3RlbXBWYWxLZXldKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFRlbXBKc29uW2pLZXldID0gbmV3UG9zc1ZhbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhmaWVsZFRlbXBKc29uKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGlzdC5wdXNoKGZpZWxkVGVtcEpzb24pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGhhc0R5bmFtaWNLZXkoZmllbGRQYXJhbSwgQXBpUGFyYW0pIHtcclxuICAgICAgICBpZiAoZmllbGRQYXJhbS5zdGFydHNXaXRoKCcjJylcclxuICAgICAgICAgICAgJiYgT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKEFwaVBhcmFtLCBmaWVsZFBhcmFtLnJlcGxhY2UoL14jL2csICcnKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdHJpZ2dlciBldmVudCBpZiB0aGVyZSBoYXMgYmVlbiBhbiBldmVudCB0cmlnZ2VyZWQgb24gdGhlIGxpc3RcclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG4gICAgICovXHJcbiAgICBvbkNvbXBvbmVudEV2ZW50KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmV2ZW50X2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5pc0RlZmF1bHQgJiYgZXZlbnQuZXZlbnRfbmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TGlzdEhhbmRsZXIuc3dpdGNoRXZlbnREaXNwbGF5VHlwZShldmVudCwgdGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXR0ZXIgc2V0dGVyIGdvZXMgaGVyZVxyXG4gICAgZ2V0IGlzU2luZ2xlQVBJS2V5KCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHVuc3Vic2NyaWJlIGFsbCB0aGUgc3Vic2NyaXB0aW9ucyBvbiBuZ0Rlc3Ryb3lcclxuICAgICAqL1xyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52YXJpYWJsZU9iaikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9ialtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0hUTUwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gLyg8KFtePl0rKT4pL2lnO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXNWaXNpYmxlXCI+XHJcblx0PGRpdiBjbGFzcz1cImR5bmFtaWMtZm9ybS1jb250YWluZXJcIiBpZD1cInt7aHRtbF9pZH19XCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPVwiIWhpZGVMYWJlbFwiPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiICpuZ0lmPVwiIWlzSFRNTChzZWN0aW9uRGF0YS5maWVsZF9sYWJlbClcIj57e3NlY3Rpb25EYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiICpuZ0lmPVwiaXNIVE1MKHNlY3Rpb25EYXRhLmZpZWxkX2xhYmVsKVwiXHJcblx0XHRcdFx0W2lubmVySFRNTF09XCJzZWN0aW9uRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcblx0XHQ8L2Rpdj5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwic2hvd0Vycm9yT25OZXh0XCI+XHJcblx0XHRcdFx0PHAgKm5nSWY9XCJpc01hbmRhdG9yeVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBtZXNzYWdlLmNvbG9yfVwiPlxyXG5cdFx0XHRcdFx0e3ttZXNzYWdlLm1lc3NhZ2VfdGV4dH19XHJcblx0XHRcdFx0PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFub0RhdGFGb3VuZFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiIHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBmaWVsZExpc3Q7IGluZGV4IGFzIHBvc2l0aW9uXCI+XHJcblx0XHRcdFx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtcG9zLXt7cG9zaXRpb259fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6ZmllbGQscG9zaXRpb246cG9zaXRpb259XCI+XHJcblx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8L2Rpdj4gLS0+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiYWxsb3dlZEZpZWxkVHlwZXMuaW5jbHVkZXMoZmllbGQuZmllbGRfdHlwZSlcIj5cclxuXHRcdFx0XHRcdFx0PGFwcC12aWV3LXJlbmRlcmVyIGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLXBvcy17e3Bvc2l0aW9ufX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIiBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZF09XCJmaWVsZFwiIFtwb3NpdGlvbl09XCJwb3NpdGlvblwiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIlxyXG5cdFx0XHRcdFx0XHRbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuXHRcdFx0XHRcdFx0PC9hcHAtdmlldy1yZW5kZXJlcj5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFhbGxvd2VkRmllbGRUeXBlcy5pbmNsdWRlcyhmaWVsZC5maWVsZF90eXBlKVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLXBvcy17e3Bvc2l0aW9ufX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8YXBwLWR5bmFtaWMtcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbZmllbGREYXRhXT1cImZpZWxkXCIgW21vZHVsZU5hbWVdPVwiZmllbGQuZmllbGRfdHlwZVwiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvYXBwLWR5bmFtaWMtcmVuZGVyZXI+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vRGF0YUZvdW5kICYmICFzaG93TG9hZGluZyAmJiAhc2hvd1NrZWxldG9uTG9hZGVyXCI+XHJcblx0XHRcdDxoNSBjbGFzcz1cIm5vLWRhdGEtaW5mbyB0ZXh0LWNlbnRlciBteS01XCI+e3tub0RhdGFGb3VuZExhYmVsfX08L2g1PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0PC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPCEtLSA8bmctdGVtcGxhdGUgI2NlbGxEYXRhIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LXBvc2l0aW9uPVwicG9zaXRpb25cIj5cclxuXHQ8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC5maWVsZF90eXBlXCI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcblx0XHRcdDxhcHAtY2VlLWxhYmVsIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiIHRhYmluZGV4PVwiMFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtbGFiZWw+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVGV4dGZpZWxkJ1wiPlxyXG5cdFx0XHQ8YXBwLWNlZS10ZXh0ZmllbGQgW2tlZXBTdGF0ZV09XCJ0cnVlXCIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbZmllbGREYXRhXT1cImZpZWxkXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCI+XHJcblx0XHRcdDwvYXBwLWNlZS10ZXh0ZmllbGQ+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVGV4dGFyZWEnXCI+XHJcblx0XHRcdDxhcHAtY2VlLXRleHRhcmVhIFtrZWVwU3RhdGVdPVwidHJ1ZVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtdGV4dGFyZWE+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInSW1hZ2UnXCI+XHJcblx0XHRcdDxhcHAtY2VlLWltYWdlIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtaW1hZ2U+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInUGlja2VyJ1wiPlxyXG5cdFx0XHQ8YXBwLWNlZS1waWNrZXIgW2tlZXBTdGF0ZV09XCJ0cnVlXCIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbZmllbGREYXRhXT1cImZpZWxkXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1waWNrZXI+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCI+XHJcblx0XHRcdDxhcHAtY2VlLXJhZGlvIFtrZWVwU3RhdGVdPVwidHJ1ZVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtcmFkaW8+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInRGF0ZSdcIj5cclxuXHRcdFx0PGFwcC1jZWUtZGF0ZSBba2VlcFN0YXRlXT1cInRydWVcIiBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb290RGF0YV09XCJyb290RGF0YVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuXHRcdFx0PC9hcHAtY2VlLWRhdGU+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVGltZXBpY2tlcidcIj5cclxuICAgICAgICA8YXBwLWNlZS10aW1lLXBpY2tlciBba2VlcFN0YXRlXT1cInRydWVcIiBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb290RGF0YV09XCJyb290RGF0YVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj48L2FwcC1jZWUtdGltZS1waWNrZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInQXR0YWNobWVudHMnXCI+XHJcbiAgICAgICAgPGFwcC1jZWUtYXR0YWNobWVudHMgW2tlZXBTdGF0ZV09XCJ0cnVlXCIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbZmllbGREYXRhXT1cImZpZWxkXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCI+XHJcbiAgICAgICAgPC9hcHAtY2VlLWF0dGFjaG1lbnRzPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgIDxhcHAtZHluYW1pYy1yZW5kZXJlciBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZERhdGFdPVwiZmllbGRcIiBbbW9kdWxlTmFtZV09XCJmaWVsZC5maWVsZF90eXBlXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCI+XHJcbiAgICAgICAgPC9hcHAtZHluYW1pYy1yZW5kZXJlcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT4gLS0+XHJcbiJdfQ==