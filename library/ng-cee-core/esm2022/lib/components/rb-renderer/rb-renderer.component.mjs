import { Component, Input } from '@angular/core';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { CommonModule, NgClass, NgSwitch } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { RBUtil } from './rb-util';
import { RBCurrentIndexUtil } from './rb-current-index-util';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../models/app-data/app-data.service";
import * as i3 from "../../models/api-data/api-data.service";
import * as i4 from "../../services/internal-cee-emitter-service.service";
import * as i5 from "../../services/shared-events-service.service";
import * as i6 from "@angular/material/snack-bar";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "@angular/router";
import * as i9 from "../../services/cee-api-service.service";
import * as i10 from "@angular/common";
const _c0 = (a0, a1, a2, a3) => ({ field: a0, position: a1, i: a2, activePosition: a3 });
function RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_1_Template, 1, 0, null, 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r1 = ctx.$implicit;
    const position_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    const pos_r4 = ctx_r2.$implicit;
    const i_r5 = ctx_r2.index;
    i0.ɵɵnextContext(2);
    const cellData_r6 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, field_r1, position_r2, i_r5, pos_r4));
} }
function RBRendererComponent_ng_container_0_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4);
    i0.ɵɵtemplate(1, RBRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_1_Template, 2, 7, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = i0.ɵɵnextContext().index;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolateV(["cee-block sectionRb-", i_r5, " ", ctx_r6.blockId, "-sidebar-item-", i_r5, "  ", ctx_r6.parentPosition ? ctx_r6.blockId + "-p-" + ctx_r6.parentPosition + "-c-" + i_r5 : ctx_r6.blockId + "-c-" + i_r5, "  template-", ctx_r6.templateId, " block-", ctx_r6.blockId, " ", ctx_r6.is_bootstrap ? "row" : "", " ", ctx_r6.reapeatableLoading ? "reapeatable-pending" : "reapeatable-loaded", " ", ctx_r6.sectionCustomClass[i_r5] ? ctx_r6.sectionCustomClass[i_r5] : "", " "]);
    i0.ɵɵpropertyInterpolate("id", ctx_r6.blockId);
    i0.ɵɵattribute("aria-label", ctx_r6.additionalParameter["Aria-Label"] ? ctx_r6.additionalParameter["Aria-Label"] : undefined)("role", ctx_r6.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r6.blockRenderedData.block_fields)("ngForTrackBy", ctx_r6.trackByIdBlock);
} }
function RBRendererComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RBRendererComponent_ng_container_0_ng_container_2_section_1_Template, 2, 16, "section", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r6 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", pos_r4.active && ctx_r6.blockRenderedData && ctx_r6.repeatebleFieldsRows[i_r5]);
} }
function RBRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div");
    i0.ɵɵtemplate(2, RBRendererComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("reapeatable-loader ", ctx_r6.reapeatableLoading ? "reapeatable-pending" : "reapeatable-loaded", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r6.counter)("ngForTrackBy", ctx_r6.trackByIdCounter);
} }
function RBRendererComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "rb-renderer", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const field_r9 = ctx_r7.field;
    const position_r10 = ctx_r7.position;
    const i_r11 = ctx_r7.i;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r6.rbUtil.getFieldClasses(field_r9, position_r10));
    i0.ɵɵproperty("stepId", ctx_r6.stepId)("rootData", ctx_r6.rootData)("rowData", ctx_r6.repeatebleFieldsRows[i_r11] == null ? null : ctx_r6.repeatebleFieldsRows[i_r11][field_r9.unique_id])("parentBlock", ctx_r6.fieldData.unique_id)("parentPosition", i_r11)("fieldData", field_r9)("templateId", ctx_r6.templateId)("mandatoryCondition", ctx_r6.mandatoryCondition)("editableCondition", ctx_r6.editableCondition)("visibleCondition", ctx_r6.visibleCondition);
} }
function RBRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RBRendererComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RBRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 7);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r7 = i0.ɵɵnextContext();
    const field_r9 = ctx_r7.field;
    const position_r10 = ctx_r7.position;
    const i_r11 = ctx_r7.i;
    const activePosition_r12 = ctx_r7.activePosition;
    const ctx_r6 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r6.rbUtil.getFieldClasses(field_r9, position_r10));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 4, ctx_r6.rbUtil.getComponentType(field_r9.field_type)))("ngComponentOutletInputs", ctx_r6.rbUtil.getComponentInputs(field_r9, i_r11, activePosition_r12));
} }
function RBRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RBRendererComponent_ng_template_1_ng_container_0_Template, 2, 12, "ng-container", 1)(1, RBRendererComponent_ng_template_1_ng_container_1_Template, 4, 6, "ng-container", 1);
} if (rf & 2) {
    const field_r9 = ctx.field;
    i0.ɵɵproperty("ngIf", field_r9.field_type === "RBLite" || field_r9.field_type === "Repeatable Block");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r9.field_type !== "RBLite" && field_r9.field_type !== "Repeatable Block");
} }
export class RBRendererComponent {
    userDataHandlerService;
    appDataService;
    apiDataService;
    internalCEEEmitter;
    sharedEventsService;
    snackBar;
    wfeStepLoaderService;
    router;
    cdr;
    _ceeApiService;
    renderer;
    stepId;
    fieldData;
    templateId;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    parentPosition;
    rowData;
    parentBlock;
    blockRenderedData;
    childArr = [];
    additionalParameter = {};
    counter = [{ active: true }];
    childCounter = {};
    maxBlocksCount = 0;
    checkedItems;
    type = '';
    hideActionButton = true;
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        linkedBlockId: '',
        isRepeatedField: true,
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
    variableObj = {}; // variableObject
    responseMap = {};
    isEditable = false;
    buttonEditable = false;
    isVisible = false;
    isMandatory = false;
    blockId = '';
    flatten;
    conditionalUtil;
    isApiResponse = false;
    is_bootstrap = false;
    commonUtil;
    apiKeyUtil;
    rbCurrentIndexUtil;
    rbUtil;
    lazyInterval = []; //setInterval for lazy loading
    counterTemp = [];
    presetData;
    setApiCallBackDataUtil;
    repeatebleFieldsRows = [];
    reapeatableLoading = false;
    sectionCustomClass = {};
    skipLoader = false;
    delimiter = '$';
    addRowByDefault = true;
    enableDeleteLastRow = false;
    storeBlockIdIfNull;
    setDynamicLabelUtil;
    dummyBlocks = {};
    resetIndexOnAddOrRemove = false;
    activeBlocksCount = 0;
    disableAddButton = false;
    focusChildView = false;
    constructor(userDataHandlerService, appDataService, apiDataService, internalCEEEmitter, sharedEventsService, snackBar, wfeStepLoaderService, router, cdr, _ceeApiService, renderer) {
        this.userDataHandlerService = userDataHandlerService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.sharedEventsService = sharedEventsService;
        this.snackBar = snackBar;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.router = router;
        this.cdr = cdr;
        this._ceeApiService = _ceeApiService;
        this.renderer = renderer;
        this.rbUtil = new RBUtil(this);
        this.flatten = new FlatUnflat(appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        this.setApiCallBackDataUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.rbCurrentIndexUtil = new RBCurrentIndexUtil(this);
    }
    ngAfterContentChecked() {
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    trackByIdBlock(index, item) {
        return item.message_code;
    }
    trackByIdCounter(index, item) {
        // console.log(item);
        const lastChar = item.message_code?.slice(-1);
        return lastChar;
    }
    //Counts Active Parent and Child Blocks and
    countActiveBlocks() {
        this.maxBlocksCount = this.fieldData.repeatable_block_configuration.no_of_allowed_blocks;
        if (this.isChildBlock()) {
            this.activeBlocksCount = this.childCounter[this.parentPosition].reduce((acc, rec) => rec.active ? acc + 1 : acc, 0);
        }
        else {
            this.activeBlocksCount = this.counter.reduce((acc, rec) => rec.active ? acc + 1 : acc, 0);
        }
        this.disableAddButton = this.activeBlocksCount == Number(this.maxBlocksCount) ? true : false;
    }
    // initialize app data model
    initAppDataModel() {
        this.appData.id = this.fieldData.unique_id;
        this.appData.mandatory = this.isMandatory;
        this.appData.stepId = this.stepId;
        this.appData.apiKey = '';
        this.appData.responseApiKey = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
        this.appData.requestApiKey = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key);
        this.appData.editable = this.isEditable;
        this.appData.visible = this.isVisible;
        this.appData.value = this.type;
        // preset data is rowData coming from parent component
        this.fieldData.html_id = this.presetData?.html_id || this.fieldData.unique_id;
        this.appData.linkedBlockId = this.presetData?.linkedBlockId || this.blockId;
        this.appData.repeatedBlockFieldId = this.presetData?.repeatedBlockFieldId || '';
        if (typeof (this.presetData) === 'object' && this.presetData !== null) {
            if (this.presetData.unique_id) {
                this.appData.id = this.presetData.unique_id;
            }
            if (this.presetData.mandatory) {
                this.appData.mandatory = this.presetData.mandatory;
            }
            if (this.presetData.editable) {
                this.appData.editable = this.presetData.editable;
            }
            if (this.presetData.visible) {
                this.appData.visible = this.presetData.visible;
            }
        }
    }
    async ngOnInit() { await this.init(); }
    init = async () => {
        this.presetData = this.rowData;
        this.maxBlocksCount = this.fieldData.repeatable_block_configuration.no_of_allowed_blocks;
        this.blockId = this.fieldData.repeatable_block_configuration.linked_block_id;
        if (this.blockId) {
            // console.log(this.blockId);            
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            let res = await this.wfeStepLoaderService.loadBlockByName(this.blockId).toPromise();
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(res);
        }
        else {
            console.error('linked_block_id not found');
            return false;
        }
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        if (this.fieldData.is_editable === 1) {
            this.buttonEditable = true;
        }
        this.variableObj['emitApiSuccessResponse_' + this.fieldData.unique_id] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
            // console.log("-- RBL got apiSuccessResponse:", this.blockId);
            this.sharedEventsService.stepLoaderEmitter.emit({ "blockId": this.blockId });
            const response = this.flatten.flattenJSON(res);
            // The data is reset to remove inner doms already rendered.
            // If not done the values from API will not get reflected.
            if (this.checkIfResHasRepeatedData(response)) {
                console.log("- YES my blockId and key:", this.fieldData.unique_id);
                this.rootData['FieldLoadStack']['add'](); // keep spinner till all doms are rendered
                this.responseMap = {};
                this.counter = [];
                this.childCounter = {};
                this.counterTemp = this.getMaxIndex(response); // existing line                  
                this.processRowData(this.counterTemp);
                this.conditionCheck(null);
                this.updateSectionCustomClass(this.counterTemp, null);
                this.rootData['FieldLoadStack']['remove'](); // stop spinner as all doms are rendered
                this.lazyLoading();
            }
        });
        this.rbCurrentIndexUtil.suscribeRBCurrentIndex();
        // TODO: Set Conditional Value on the Repeatable Block
        this.variableObj['emitOnDataSetOrUpdated_' + this.fieldData.unique_id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
            // console.log("-- RBL got onDataSetOrUpdated:", this.blockId);
            this.onFieldDataUpdated(res.apiKey, res.value);
        });
        this.initAppDataModel();
    };
    // fetch object from counterTemp and start rendering it one by one and append to 
    // counter or childCounter based on parent or child block
    lazyLoading() {
        // stop existing interval and start new interval for lazy loading
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.reapeatableLoading = true;
        this.counter = [];
        this.childCounter[this.parentPosition] = [];
        this.lazyInterval = setInterval(() => {
            if (this.isChildBlock()) {
                if (this.childCounter && this.childCounter[this.parentPosition] && this.childCounter[this.parentPosition].length !== this.counterTemp.length) {
                    this.childCounter[this.parentPosition].push(this.counterTemp[this.childCounter[this.parentPosition].length]);
                }
                else {
                    this.reapeatableLoading = false;
                    clearInterval(this.lazyInterval);
                }
            }
            else {
                if (this.counter.length !== this.counterTemp.length) {
                    this.counter.push(this.counterTemp[this.counter.length]);
                }
                else {
                    this.reapeatableLoading = false;
                    clearInterval(this.lazyInterval);
                }
            }
            if (this.cdr && !this.cdr.destroyed) {
                this.cdr.detectChanges();
            }
            // To Enable or Disable 
            this.countActiveBlocks();
            // Emit to Reset ActiveIndex On Adding or Removing RB
            if (this.resetIndexOnAddOrRemove) {
                this.sharedEventsService.emitOnAddOrRemoveRB.emit();
            }
        }, 0);
    }
    getRowDataList(i) {
        const rowDataList = {};
        const uniqueIds = {};
        for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
            const field = this.blockRenderedData.block_fields[position];
            rowDataList[field.unique_id] = this.generateRowData(i, field);
            uniqueIds[field.unique_id] = rowDataList[field.unique_id].unique_id;
        }
        this.processEventList(rowDataList, uniqueIds);
        return rowDataList;
    }
    processRowData(c) {
        this.repeatebleFieldsRows = [];
        for (let i = 0; i < c.length; i++) {
            const rowDataList = this.getRowDataList(i);
            this.repeatebleFieldsRows.push(rowDataList);
        }
        // console.log("repeatebleFieldsRows:------->", this.repeatebleFieldsRows);
        this.sharedEventsService.stepLoaderEmitter.emit({ "blockId": this.blockId });
    }
    generateRowData(arrayPos, fieldTemp, type = "") {
        const value = '[' + arrayPos + ']';
        let apiKey;
        let id = this.stepId + '$' + fieldTemp.unique_id + '$' + arrayPos;
        if (this.isChildBlock()) {
            id = this.stepId + '$' + fieldTemp.unique_id + '$' + this.parentPosition + '$' + arrayPos;
            apiKey = fieldTemp.api_key ? fieldTemp?.api_key.replace('[**]', this.parentPosition) : '';
        }
        apiKey = fieldTemp?.api_key ? fieldTemp?.api_key.replace('[*]', value) : '';
        let updatedResponseApiKey = this.returnRequestOrResponseApiKeys('response', fieldTemp?.response_api_key, value, this.parentPosition);
        const formattedVal = {
            api_key: '',
            unique_id: id,
            html_id: id,
            response_api_key: updatedResponseApiKey,
            request_api_key: this.returnRequestOrResponseApiKeys('request', fieldTemp?.request_api_key, value, this.parentPosition),
            linkedBlockId: this.blockId,
            repeatedBlockFieldId: this.fieldData.unique_id,
            isApiResponse: this.isApiResponse,
            value: this.returnFieldDataForLabel(fieldTemp, updatedResponseApiKey, id, value),
            position: arrayPos,
            parentPosition: this.parentPosition,
            parentBlockId: this.parentBlock,
            event_list: fieldTemp?.event_list ? JSON.parse(JSON.stringify(fieldTemp?.event_list)) : [],
            // resIsDiffHandler: fieldTemp?.response_api_key && this.commonUtil.getHandlerName(this.fieldData?.response_api_key)
            // !== this.commonUtil.getHandlerName(fieldTemp?.response_api_key) ? true : false
        };
        if (type != "superBlocks") {
            // formattedVal.mandatory = fieldTemp?.is_mandatory === 1 || fieldTemp?.is_mandatory === 2;
            formattedVal.mandatory = fieldTemp?.is_mandatory === 1; // By defalt mandatory should be false for conditional mandatory fields 
            formattedVal.editable = fieldTemp?.is_editable === 1 || fieldTemp?.is_editable === 2;
            formattedVal.visible = fieldTemp?.is_display === 1 || fieldTemp?.is_display === 2;
        }
        if (this.presetData && this.presetData.value && Array.isArray(this.presetData.value)) {
            formattedVal.value = this.presetData.value[arrayPos] &&
                this.presetData.value[arrayPos][fieldTemp.response_api_key] ?
                this.presetData.value[arrayPos][fieldTemp.response_api_key] : formattedVal.value;
            let currentValueNew = this.appDataService.getFieldDataByFieldId(formattedVal.unique_id);
            if (currentValueNew && currentValueNew != undefined && currentValueNew != null && currentValueNew != '') {
                formattedVal.value = currentValueNew ? currentValueNew : formattedVal.value;
            }
        }
        else {
            let currentValueNew = this.appDataService.getFieldDataByFieldId(formattedVal.unique_id);
            if (currentValueNew && currentValueNew != undefined && currentValueNew != null && currentValueNew != '') {
                formattedVal.value = currentValueNew ? currentValueNew : formattedVal.value;
            }
        }
        const eaoValue = fieldTemp?.additional_parameters ? fieldTemp?.additional_parameters.find(pv => pv.parameter_type === 'externalApiOptionValue') : null;
        if (eaoValue) {
            formattedVal['externalApiOptionValue'] = this.returnRequestOrResponseApiKeys('request', eaoValue.value, value, this.parentPosition);
        }
        return formattedVal;
    }
    // uptdates field ids configured in events with unique ids generated for repeatable block rows
    processEventList(rowData, uniqueIds) {
        for (const uId in rowData) {
            const fieldData = rowData[uId];
            for (const event of fieldData?.event_list) {
                for (const eParam of event?.event_params) {
                    switch (eParam?.event_config?.display_step) {
                        case "SetValues":
                        case "CustomFunctions":
                            const pTypes = ['TargetFields', 'ValueFields', 'Variables', 'Targets'];
                            for (const addi_param of eParam?.invoke_event_config?.additional_parameters) {
                                if (addi_param.parameter_type && addi_param.value && pTypes.includes(addi_param.parameter_type)) {
                                    let addiParamValNew = [];
                                    const addiParamVals = addi_param.value.split('|').map(val => val.trim());
                                    for (const addiParamVal of addiParamVals) {
                                        if (Object.keys(uniqueIds).includes(addiParamVal)) {
                                            addiParamValNew.push(uniqueIds[addiParamVal]);
                                        }
                                        else {
                                            addiParamValNew.push(addiParamVal);
                                        }
                                    }
                                    addi_param.value = addiParamValNew.join('|');
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    isChildBlock() {
        return (this.parentPosition != undefined && this.parentPosition != null);
    }
    // update the custom class of the repeatable block if required
    updateSectionCustomClass(counts, value) {
        if (counts) {
            for (let i = 0; i < counts.length; i++) {
                this.sectionCustomClass[i] = this.blockRenderedData?.block_style?.custom_class_name || '';
                if (this.blockRenderedData?.custom_class_condition && this.blockRenderedData?.custom_class_condition['query'] != '') {
                    const customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, this.stepId + '$' + this.blockId + '$' + i, value);
                    if (!customClassCondition) {
                        this.sectionCustomClass[i] = '';
                    }
                }
            }
        }
    }
    onFieldDataUpdated(fieldId, value) {
        // skip conditionCheck and updateSectionCustomClass if fieldId does not match
        if (this.fieldData.unique_id !== fieldId) {
            return;
        }
        this.conditionCheck(value);
        this.updateSectionCustomClass(this.counter, value);
    }
    // update visible and editable flags of the repeatable block
    conditionCheck(value) {
        if (this.fieldData.is_editable === 2) {
            const editable = this.conditionalUtil.checkEditable(this.fieldData, String(this.appData.id), value);
            if (editable !== undefined) {
                this.buttonEditable = editable;
                this.hideActionButton = editable;
            }
        }
        if (this.fieldData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.fieldData, String(this.appData.id), value);
            if (visible !== undefined) {
                this.isVisible = visible;
                // If the block is not visible, check and set the mandatory condition for fields
                this.setMandatoryConditionForBlockFields();
            }
        }
    }
    /**
     * Sets the mandatory condition for all fields in the block when the block is not visible.
     * This ensures that if the block is hidden, any fields that were mandatory are set to non-mandatory.
     */
    setMandatoryConditionForBlockFields() {
        if (!this.blockRenderedData)
            return;
        const appData = this.appDataService.getAllAppStoreData();
        if (!appData)
            return;
        if (this.isVisible) {
            // Filter fields that belong to this block and were mandatory originally
            const fieldsToUpdate = appData.filter(field => this.blockId === field.linkedBlockId && field.mandatoryOriginal && field.visible);
            // Batch update all fields that need changes
            if (fieldsToUpdate.length > 0) {
                fieldsToUpdate.forEach(field => {
                    this.appDataService.updateAppData({
                        ...field,
                        mandatory: true,
                    });
                });
            }
        }
        else {
            // Filter fields that belong to this block and are mandatory
            const fieldsToUpdate = appData.filter(field => this.blockId === field.linkedBlockId && field.mandatory);
            // Batch update all fields that need changes
            if (fieldsToUpdate.length > 0) {
                fieldsToUpdate.forEach(field => {
                    this.appDataService.updateAppData({
                        ...field,
                        mandatory: false,
                        mandatoryOriginal: true,
                    });
                });
            }
        }
    }
    checkFieldVisibility(field, rowData) {
        if (field.is_display === 0)
            return false;
        if (field.is_display === 2)
            return this.conditionalUtil.checkVisibility(field, rowData.api_key, rowData.value);
        return true;
    }
    // this is otimized function to get the max index from the response
    getMaxIndex(res) {
        let hasAPIKey = false;
        if (res) {
            let max = 0;
            let apiKeys = this.returnAPIKeyForMultipleApiKeys();
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                // Escape special regex characters and replace [*] with a regex pattern to capture the index
                const regexPattern = apiKey.replace('*', '\\d+')
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]');
                const regex = new RegExp(regexPattern);
                let keys = Object.keys(res);
                for (let i = keys.length - 1; i >= 0; i--) {
                    const key = keys[i];
                    const result = key.match(regex);
                    if (result) {
                        hasAPIKey = true;
                        const startIdx = apiKey.replace('[*]', '').length + 1;
                        const endIdx = result[0].indexOf(']', startIdx);
                        max = +result[0].substring(startIdx, endIdx); // unary plus to convert string to number which is fastest
                        break;
                    }
                }
            }
            this.responseMap = res; // assign the entire response map
            if (hasAPIKey) {
                const tCounter = [];
                for (let index = 0; index < max + 1; index++) {
                    tCounter.push({ active: true, activeIndex: index + 1 });
                }
                this.isApiResponse = true;
                return tCounter;
            }
            else {
                if (this.isChildBlock()) {
                    return this.childCounter;
                }
                return this.counter;
            }
        }
        else {
            if (this.isChildBlock()) {
                return this.childCounter;
            }
            return this.counter;
        }
    }
    checkIfResHasBlankData(res) {
        let flag = false;
        if (res) {
            let apiKeys = this.returnAPIKeyForMultipleApiKeys();
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const key = apiKey.replace('[*]', '');
                if (res[key] && res[key].length === 0) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    checkIfResHasRepeatedData(res) {
        let hasAPIKey = false;
        if (res) {
            let apiKeys = this.returnAPIKeyForMultipleApiKeys();
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const regex = apiKey.replace('*', '\\d+')
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]');
                for (const key of Object.keys(res)) {
                    if (key.indexOf('[*]') <= -1) {
                        const result = key.match(new RegExp(regex));
                        if (result) {
                            hasAPIKey = true;
                        }
                    }
                    else {
                        hasAPIKey = false;
                        break;
                    }
                }
            }
        }
        return hasAPIKey;
    }
    updateFieldState(appData) {
        this.appDataService.updateAppData(appData);
    }
    /**
     * function that returns field label or the value of the label
     * @param fieldTemp field Data
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    returnFieldDataForLabel(fieldTemp, apiKey, id, posVal) {
        let returnValue;
        if (fieldTemp?.field_type === 'label' && !(fieldTemp?.response_api_key)) {
            returnValue = fieldTemp?.field_label;
            if (returnValue && returnValue.includes('((dynamic))')) {
                const keys = (returnValue.split('((dynamic))')[1]).match(new RegExp(/\%(.*?)\%/g));
                if (keys) {
                    for (const apiKey1 of keys) {
                        let apiKey = apiKey1.split('%')[1];
                        const keyValue = this.returnRequestOrResponseApiKeys('response', apiKey, posVal, this.parentPosition);
                        returnValue = returnValue.replace('%' + apiKey + '%', keyValue !== undefined ? '%' + keyValue + '%' : '');
                    }
                }
            }
        }
        else {
            returnValue = this.returnFieldValue(apiKey, id);
            if (returnValue === undefined) {
                const defaultValue = fieldTemp?.additional_parameters ? fieldTemp?.additional_parameters.find(i => i.parameter_type === 'default_value') : null;
                if (defaultValue) {
                    returnValue = defaultValue.value;
                }
            }
        }
        return returnValue ? returnValue : '';
    }
    /**
     * function that returns value in respect ot the api key based on the
     * condition if it uses single or multiple api key
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    returnFieldValue(apiKey, id) {
        // TODO: Check functionality
        let value;
        for (const key of apiKey) {
            if (key.includes('+')) {
                let val;
                const concatKeys = key.split('+');
                for (const singleKey of concatKeys) {
                    val = concatKeys.indexOf(singleKey) === 0 ? this.responseMap[singleKey] : value + ' ' + this.responseMap[singleKey];
                }
                value = val;
            }
            else if (this.responseMap.hasOwnProperty(key)) {
                value = this.responseMap[key];
            }
            else {
                const valTemp = this.setApiCallBackDataUtil.getArrayWithIndex(this.responseMap, key);
                if (valTemp) {
                    value = valTemp;
                }
            }
        }
        if (value === undefined) {
            value = this.appDataService.getFieldDataByFieldId(id);
        }
        return value;
    }
    /**
     * returns the multiple api keys based on the type of the key
     * @param type the type of the key
     * @param key the api key
     */
    returnRequestOrResponseApiKeys(type, key, position, parentPosition = null) {
        if (key) {
            if (!key.includes('||')) {
                key = key.replace(/\[\*\]/g, position); // change [*] with [ index ]
                if (this.isChildBlock()) {
                    key = key.replace(/\[\*\*\]/g, '[' + parentPosition + ']'); // change [**] with [ parentindex ]
                }
                return this.apiKeyUtil.getMultipleApiKeys(type === 'response' ?
                    this.apiKeyUtil.getConcatenatedApiKeys(key) : key);
            }
            else {
                let newKeyArr = [];
                key.split('||').forEach(element => {
                    let starCount = element.split('[*]');
                    if (starCount && starCount.length > 2) {
                        newKeyArr.push(element.replace(/\[\*\]/, position)); // change [*] with [ index ]
                    }
                    else {
                        newKeyArr.push(element);
                    }
                });
                return this.apiKeyUtil.getMultipleApiKeys(type === 'response' ?
                    this.apiKeyUtil.getConcatenatedApiKeys(newKeyArr.join('|')) : newKeyArr.join('|'));
            }
        }
        else {
            return [];
        }
    }
    /**
     * function returns the last index of the api key
     */
    returnAPIKeyForMultipleApiKeys() {
        if (this.fieldData.response_api_key.includes('||')) {
            // return all response keys separately so the
            // data map stores the values of each and every key
            return this.fieldData.response_api_key.split('||').map(str => str.trim());
        }
        else {
            const keys = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.response_api_key);
            return keys;
        }
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.counter = [];
        this.childCounter = {};
        this.repeatebleFieldsRows = [];
    }
    ngOnChanges(changes) {
    }
    static ɵfac = function RBRendererComponent_Factory(t) { return new (t || RBRendererComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.AppDataService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.SharedEventsServiceService), i0.ɵɵdirectiveInject(i6.MatSnackBar), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i9.CeeApiService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RBRendererComponent, selectors: [["rb-renderer"]], inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData", parentPosition: "parentPosition", rowData: "rowData", parentBlock: "parentBlock" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "class", 4, "ngIf"], [3, "id"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "stepId", "rootData", "rowData", "parentBlock", "parentPosition", "fieldData", "templateId", "mandatoryCondition", "editableCondition", "visibleCondition"], [4, "ngComponentOutlet", "ngComponentOutletInputs"]], template: function RBRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RBRendererComponent_ng_container_0_Template, 3, 5, "ng-container", 1)(1, RBRendererComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [RBRendererComponent, MatFormFieldModule, FormsModule, CommonModule, i10.NgComponentOutlet, i10.NgForOf, i10.NgIf, i10.NgTemplateOutlet, i10.AsyncPipe] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RBRendererComponent, [{
        type: Component,
        args: [{ selector: 'rb-renderer', standalone: true, imports: [NgSwitch, NgClass, MatFormFieldModule, FormsModule, CommonModule], template: "<ng-container *ngIf=\"isVisible\">\r\n    <div class=\"reapeatable-loader {{reapeatableLoading ? 'reapeatable-pending':'reapeatable-loaded'}}\"></div>\r\n    <ng-container *ngFor=\"let pos of counter; let i = index; trackBy: trackByIdCounter;\">\r\n        <section *ngIf=\"pos.active && blockRenderedData && repeatebleFieldsRows[i]\" id=\"{{ blockId }}\" \r\n            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" \r\n            [attr.role]=\"additionalParameter['Aria-Role']\" \r\n            class=\"cee-block sectionRb-{{i}} {{blockId}}-sidebar-item-{{i}}  {{parentPosition ? (blockId+'-p-'+parentPosition+'-c-'+i) : (blockId+'-c-'+i)}}  template-{{templateId}} block-{{ blockId }} {{is_bootstrap ? 'row': ''}} {{reapeatableLoading ? 'reapeatable-pending':'reapeatable-loaded'}} {{sectionCustomClass[i] ? sectionCustomClass[i]: ''}} \">            \r\n            <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as position; trackBy: trackByIdBlock;\">\r\n                <ng-template *ngTemplateOutlet=\"cellData; context:{field:field,position:position,i:i, activePosition: pos}\">\r\n                </ng-template>\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n</ng-container>\r\n\r\n<!-- cellData template -->\r\n<ng-template #cellData let-field=\"field\" let-position=\"position\" let-i=\"i\" let-activePosition=\"activePosition\">\r\n    <ng-container *ngIf=\"field.field_type === 'RBLite' || field.field_type === 'Repeatable Block'\">\r\n        <rb-renderer [class]=\"rbUtil.getFieldClasses(field, position)\"\r\n            [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"repeatebleFieldsRows[i]?.[field.unique_id]\" \r\n            [parentBlock]=\"fieldData.unique_id\" [parentPosition]=\"i\" [fieldData]=\"field\" [templateId]=\"templateId\"             \r\n            [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n        </rb-renderer>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"field.field_type !== 'RBLite' && field.field_type !== 'Repeatable Block'\">\r\n        <div [class]=\"rbUtil.getFieldClasses(field, position)\">\r\n            <ng-container *ngComponentOutlet=\"rbUtil.getComponentType(field.field_type) | async; inputs: rbUtil.getComponentInputs(field, i, activePosition)\"></ng-container>\r\n        </div>\r\n    </ng-container>\r\n</ng-template>\r\n \r\n " }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.AppDataService }, { type: i3.ApiDataService }, { type: i4.CEEInternalEmitterService }, { type: i5.SharedEventsServiceService }, { type: i6.MatSnackBar }, { type: i7.WfeStepLoaderService }, { type: i8.Router }, { type: i0.ChangeDetectorRef }, { type: i9.CeeApiService }, { type: i0.Renderer2 }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], templateId: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], rootData: [{
            type: Input
        }], parentPosition: [{
            type: Input
        }], rowData: [{
            type: Input
        }], parentBlock: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RBRendererComponent, { className: "RBRendererComponent", filePath: "lib\\components\\rb-renderer\\rb-renderer.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmItcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmItcmVuZGVyZXIvcmItcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmItcmVuZGVyZXIvcmItcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBcUIsS0FBSyxFQUFtRSxNQUFNLGVBQWUsQ0FBQztBQUlySSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBUW5FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFdEQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBQ2xFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxXQUFXLENBQUM7QUFDbkMsT0FBTyxFQUFFLGtC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QUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSztZQUNHLGNBQWM7a0JBQXRCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxXQUFXO2tCQUFuQixLQUFLOztrRkFWRyxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFJlbmRlcmVyMiwgT25Jbml0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0b3JSZWYsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmxhdFVuZmxhdCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZsYXQtdW5mbGF0LWpzb24nO1xyXG5pbXBvcnQgeyBDb25kaXRpb25hbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtY29uZGl0aW9uYWwtdXRpbCc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBBUElLZXlVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWtleS11dGlsJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFNldEFQSUNhbGxiYWNrRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3NldC1hcGktY2FsbGJhY2stZGF0YS11dGlsJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ0NsYXNzLCBOZ1N3aXRjaCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRHluYW1pY0xhYmVsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2R5bmFtaWMtbGFiZWwtdXRpbCc7XHJcbmltcG9ydCB7IFJCVXRpbCB9IGZyb20gJy4vcmItdXRpbCc7XHJcbmltcG9ydCB7IFJCQ3VycmVudEluZGV4VXRpbCB9IGZyb20gJy4vcmItY3VycmVudC1pbmRleC11dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdyYi1yZW5kZXJlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmItcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vcmItcmVuZGVyZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmdTd2l0Y2gsIE5nQ2xhc3MsIE1hdEZvcm1GaWVsZE1vZHVsZSwgRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJCUmVuZGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgdGVtcGxhdGVJZDogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgcGFyZW50UG9zaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHBhcmVudEJsb2NrOiBhbnk7XHJcblxyXG4gICAgYmxvY2tSZW5kZXJlZERhdGE6IGFueTtcclxuICAgIGNoaWxkQXJyID0gW107XHJcbiAgICBhZGRpdGlvbmFsUGFyYW1ldGVyID0ge307XHJcbiAgICBjb3VudGVyOiBhbnkgPSBbeyBhY3RpdmU6IHRydWUgfV07XHJcbiAgICBjaGlsZENvdW50ZXI6IGFueSA9IHt9O1xyXG4gICAgbWF4QmxvY2tzQ291bnQgPSAwO1xyXG4gICAgY2hlY2tlZEl0ZW1zOiBBcnJheTxhbnk+O1xyXG4gICAgdHlwZSA9ICcnOyAgICBcclxuICAgIGhpZGVBY3Rpb25CdXR0b246IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgIGFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IHRydWUsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuICAgIHZhcmlhYmxlT2JqID0ge307IC8vIHZhcmlhYmxlT2JqZWN0XHJcbiAgICByZXNwb25zZU1hcCA9IHt9O1xyXG4gICAgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgYnV0dG9uRWRpdGFibGUgPSBmYWxzZTtcclxuICAgIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgaXNNYW5kYXRvcnkgPSBmYWxzZTtcclxuICAgIGJsb2NrSWQgPSAnJztcclxuICAgIGZsYXR0ZW46IEZsYXRVbmZsYXQ7XHJcbiAgICBjb25kaXRpb25hbFV0aWw6IENvbmRpdGlvbmFsVXRpbDsgICAgXHJcbiAgICBpc0FwaVJlc3BvbnNlID0gZmFsc2U7XHJcbiAgICBpc19ib290c3RyYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcbiAgICBhcGlLZXlVdGlsOiBBUElLZXlVdGlsO1xyXG4gICAgcmJDdXJyZW50SW5kZXhVdGlsOiBSQkN1cnJlbnRJbmRleFV0aWw7XHJcbiAgICByYlV0aWw6IFJCVXRpbDtcclxuXHJcbiAgICBsYXp5SW50ZXJ2YWw6IGFueSA9IFtdOyAgLy9zZXRJbnRlcnZhbCBmb3IgbGF6eSBsb2FkaW5nXHJcbiAgICBjb3VudGVyVGVtcDogYW55W10gPSBbXTtcclxuICAgIHByZXNldERhdGE6IGFueTtcclxuICAgIHNldEFwaUNhbGxCYWNrRGF0YVV0aWw6IFNldEFQSUNhbGxiYWNrRGF0YTtcclxuICAgIHJlcGVhdGVibGVGaWVsZHNSb3dzID0gW107XHJcbiAgICByZWFwZWF0YWJsZUxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlY3Rpb25DdXN0b21DbGFzcyA9IHt9O1xyXG4gICAgc2tpcExvYWRlciA9IGZhbHNlO1xyXG4gICAgZGVsaW1pdGVyID0gJyQnO1xyXG5cclxuICAgIGFkZFJvd0J5RGVmYXVsdDogYW55ID0gdHJ1ZTtcclxuICAgIGVuYWJsZURlbGV0ZUxhc3RSb3c6IGFueSA9IGZhbHNlO1xyXG4gICAgc3RvcmVCbG9ja0lkSWZOdWxsOiBhbnk7ICAgIFxyXG5cclxuICAgIHNldER5bmFtaWNMYWJlbFV0aWw6IER5bmFtaWNMYWJlbFV0aWw7XHJcbiAgICBkdW1teUJsb2NrcyA9IHt9O1xyXG4gICAgcmVzZXRJbmRleE9uQWRkT3JSZW1vdmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGFjdGl2ZUJsb2Nrc0NvdW50OiBudW1iZXIgPSAwO1xyXG4gICAgZGlzYWJsZUFkZEJ1dHRvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZm9jdXNDaGlsZFZpZXc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHVibGljIF9jZWVBcGlTZXJ2aWNlPzogQ2VlQXBpU2VydmljZSwgICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI/OiBSZW5kZXJlcjJcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMucmJVdGlsID0gbmV3IFJCVXRpbCh0aGlzKTtcclxuICAgICAgICB0aGlzLmZsYXR0ZW4gPSBuZXcgRmxhdFVuZmxhdChhcHBEYXRhU2VydmljZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxVdGlsID0gbmV3IENvbmRpdGlvbmFsVXRpbChcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLmFwaUtleVV0aWwgPSBuZXcgQVBJS2V5VXRpbCgpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNfYm9vdHN0cmFwJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzX2Jvb3RzdHJhcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbCA9IG5ldyBTZXRBUElDYWxsYmFja0RhdGEoYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbCA9IG5ldyBEeW5hbWljTGFiZWxVdGlsKGFwaURhdGFTZXJ2aWNlLCBhcHBEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5yYkN1cnJlbnRJbmRleFV0aWwgPSBuZXcgUkJDdXJyZW50SW5kZXhVdGlsKHRoaXMpO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFja0J5SWRCbG9jayhpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBpdGVtLm1lc3NhZ2VfY29kZTtcclxuICAgIH1cclxuXHJcbiAgICB0cmFja0J5SWRDb3VudGVyKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coaXRlbSk7XHJcbiAgICAgICAgY29uc3QgbGFzdENoYXIgPSBpdGVtLm1lc3NhZ2VfY29kZT8uc2xpY2UoLTEpOyBcclxuICAgICAgICByZXR1cm4gbGFzdENoYXI7XHJcbiAgICB9XHJcblxyXG4gICAgLy9Db3VudHMgQWN0aXZlIFBhcmVudCBhbmQgQ2hpbGQgQmxvY2tzIGFuZFxyXG4gICAgY291bnRBY3RpdmVCbG9ja3MoKSB7XHJcbiAgICAgICAgdGhpcy5tYXhCbG9ja3NDb3VudCA9IHRoaXMuZmllbGREYXRhLnJlcGVhdGFibGVfYmxvY2tfY29uZmlndXJhdGlvbi5ub19vZl9hbGxvd2VkX2Jsb2NrcztcclxuICAgICAgICBpZiAodGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGl2ZUJsb2Nrc0NvdW50ID0gdGhpcy5jaGlsZENvdW50ZXJbdGhpcy5wYXJlbnRQb3NpdGlvbl0ucmVkdWNlKChhY2MsIHJlYykgPT4gcmVjLmFjdGl2ZSA/IGFjYyArIDEgOiBhY2MsIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQmxvY2tzQ291bnQgPSB0aGlzLmNvdW50ZXIucmVkdWNlKChhY2MsIHJlYykgPT4gcmVjLmFjdGl2ZSA/IGFjYyArIDEgOiBhY2MsIDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc2FibGVBZGRCdXR0b24gPSB0aGlzLmFjdGl2ZUJsb2Nrc0NvdW50ID09IE51bWJlcih0aGlzLm1heEJsb2Nrc0NvdW50KSA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbml0aWFsaXplIGFwcCBkYXRhIG1vZGVsXHJcbiAgICBpbml0QXBwRGF0YU1vZGVsKCkgeyBcclxuICAgICAgICB0aGlzLmFwcERhdGEuaWQgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLm1hbmRhdG9yeSA9IHRoaXMuaXNNYW5kYXRvcnk7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLnN0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5hcGlLZXkgPSAnJztcclxuICAgICAgICB0aGlzLmFwcERhdGEucmVzcG9uc2VBcGlLZXkgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKTtcclxuICAgICAgICB0aGlzLmFwcERhdGEucmVxdWVzdEFwaUtleSA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KTtcclxuICAgICAgICB0aGlzLmFwcERhdGEuZWRpdGFibGUgPSB0aGlzLmlzRWRpdGFibGU7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLnZpc2libGUgPSB0aGlzLmlzVmlzaWJsZTtcclxuICAgICAgICB0aGlzLmFwcERhdGEudmFsdWUgPSB0aGlzLnR5cGU7ICAgICAgICBcclxuXHJcbiAgICAgICAgLy8gcHJlc2V0IGRhdGEgaXMgcm93RGF0YSBjb21pbmcgZnJvbSBwYXJlbnQgY29tcG9uZW50XHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEuaHRtbF9pZCA9IHRoaXMucHJlc2V0RGF0YT8uaHRtbF9pZCB8fCB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7IFxyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5saW5rZWRCbG9ja0lkID0gdGhpcy5wcmVzZXREYXRhPy5saW5rZWRCbG9ja0lkIHx8IHRoaXMuYmxvY2tJZDtcclxuICAgICAgICB0aGlzLmFwcERhdGEucmVwZWF0ZWRCbG9ja0ZpZWxkSWQgPSB0aGlzLnByZXNldERhdGE/LnJlcGVhdGVkQmxvY2tGaWVsZElkIHx8ICcnO1xyXG5cclxuICAgICAgICBpZiAodHlwZW9mICh0aGlzLnByZXNldERhdGEpID09PSAnb2JqZWN0JyAmJiB0aGlzLnByZXNldERhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5pZCA9IHRoaXMucHJlc2V0RGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS5tYW5kYXRvcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5tYW5kYXRvcnkgPSB0aGlzLnByZXNldERhdGEubWFuZGF0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXNldERhdGEuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5lZGl0YWJsZSA9IHRoaXMucHJlc2V0RGF0YS5lZGl0YWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhLnZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YS52aXNpYmxlID0gdGhpcy5wcmVzZXREYXRhLnZpc2libGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbmdPbkluaXQgKCkge2F3YWl0IHRoaXMuaW5pdCgpO31cclxuICAgIGluaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5wcmVzZXREYXRhID0gdGhpcy5yb3dEYXRhO1xyXG4gICAgICAgIHRoaXMubWF4QmxvY2tzQ291bnQgPSB0aGlzLmZpZWxkRGF0YS5yZXBlYXRhYmxlX2Jsb2NrX2NvbmZpZ3VyYXRpb24ubm9fb2ZfYWxsb3dlZF9ibG9ja3M7XHJcbiAgICAgICAgdGhpcy5ibG9ja0lkID0gdGhpcy5maWVsZERhdGEucmVwZWF0YWJsZV9ibG9ja19jb25maWd1cmF0aW9uLmxpbmtlZF9ibG9ja19pZDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tJZCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJsb2NrSWQpOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRlclNlcnZpY2Uuc2tpcExvYWRpbmcgPSB0aGlzLnNraXBMb2FkZXI7XHJcbiAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh0aGlzLmJsb2NrSWQpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrUmVuZGVyZWREYXRhID0gdGhpcy5jb21tb25VdGlsLmJsb2NrQm9vdHN0cmFwUHJvY2VzcyhyZXMpOyAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsaW5rZWRfYmxvY2tfaWQgbm90IGZvdW5kJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZWRpdGFibGUgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25FZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgICAgICAnZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZV8nICsgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXHJcbiAgICAgICAgXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tIFJCTCBnb3QgYXBpU3VjY2Vzc1Jlc3BvbnNlOlwiLCB0aGlzLmJsb2NrSWQpO1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uuc3RlcExvYWRlckVtaXR0ZXIuZW1pdCh7XCJibG9ja0lkXCI6IHRoaXMuYmxvY2tJZH0pO1xyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuZmxhdHRlbi5mbGF0dGVuSlNPTihyZXMpO1xyXG4gICAgICAgICAgICAvLyBUaGUgZGF0YSBpcyByZXNldCB0byByZW1vdmUgaW5uZXIgZG9tcyBhbHJlYWR5IHJlbmRlcmVkLlxyXG4gICAgICAgICAgICAvLyBJZiBub3QgZG9uZSB0aGUgdmFsdWVzIGZyb20gQVBJIHdpbGwgbm90IGdldCByZWZsZWN0ZWQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSWZSZXNIYXNSZXBlYXRlZERhdGEocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIi0gWUVTIG15IGJsb2NrSWQgYW5kIGtleTpcIiwgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0ZpZWxkTG9hZFN0YWNrJ11bJ2FkZCddKCk7IC8vIGtlZXAgc3Bpbm5lciB0aWxsIGFsbCBkb21zIGFyZSByZW5kZXJlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZU1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ291bnRlciA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlclRlbXAgPSB0aGlzLmdldE1heEluZGV4KHJlc3BvbnNlKTsgIC8vIGV4aXN0aW5nIGxpbmUgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jvd0RhdGEodGhpcy5jb3VudGVyVGVtcCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrKG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTZWN0aW9uQ3VzdG9tQ2xhc3ModGhpcy5jb3VudGVyVGVtcCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhWydGaWVsZExvYWRTdGFjayddWydyZW1vdmUnXSgpOyAvLyBzdG9wIHNwaW5uZXIgYXMgYWxsIGRvbXMgYXJlIHJlbmRlcmVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLmxhenlMb2FkaW5nKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5yYkN1cnJlbnRJbmRleFV0aWwuc3VzY3JpYmVSQkN1cnJlbnRJbmRleCgpO1xyXG5cclxuICAgICAgICAvLyBUT0RPOiBTZXQgQ29uZGl0aW9uYWwgVmFsdWUgb24gdGhlIFJlcGVhdGFibGUgQmxvY2tcclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydlbWl0T25EYXRhU2V0T3JVcGRhdGVkXycgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiLS0gUkJMIGdvdCBvbkRhdGFTZXRPclVwZGF0ZWQ6XCIsIHRoaXMuYmxvY2tJZCk7XHJcbiAgICAgICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdEFwcERhdGFNb2RlbCgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBmZXRjaCBvYmplY3QgZnJvbSBjb3VudGVyVGVtcCBhbmQgc3RhcnQgcmVuZGVyaW5nIGl0IG9uZSBieSBvbmUgYW5kIGFwcGVuZCB0byBcclxuICAgIC8vIGNvdW50ZXIgb3IgY2hpbGRDb3VudGVyIGJhc2VkIG9uIHBhcmVudCBvciBjaGlsZCBibG9ja1xyXG4gICAgbGF6eUxvYWRpbmcoKSB7XHJcbiAgICAgICAgLy8gc3RvcCBleGlzdGluZyBpbnRlcnZhbCBhbmQgc3RhcnQgbmV3IGludGVydmFsIGZvciBsYXp5IGxvYWRpbmdcclxuICAgICAgICBpZiAodGhpcy5sYXp5SW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxhenlJbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVhcGVhdGFibGVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSBbXTtcclxuICAgICAgICB0aGlzLmNoaWxkQ291bnRlclt0aGlzLnBhcmVudFBvc2l0aW9uXSA9IFtdO1xyXG4gICAgICAgIHRoaXMubGF6eUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRDb3VudGVyICYmIHRoaXMuY2hpbGRDb3VudGVyW3RoaXMucGFyZW50UG9zaXRpb25dICYmIHRoaXMuY2hpbGRDb3VudGVyW3RoaXMucGFyZW50UG9zaXRpb25dLmxlbmd0aCAhPT0gdGhpcy5jb3VudGVyVGVtcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ291bnRlclt0aGlzLnBhcmVudFBvc2l0aW9uXS5wdXNoKHRoaXMuY291bnRlclRlbXBbdGhpcy5jaGlsZENvdW50ZXJbdGhpcy5wYXJlbnRQb3NpdGlvbl0ubGVuZ3RoXSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFwZWF0YWJsZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubGF6eUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ZXIubGVuZ3RoICE9PSB0aGlzLmNvdW50ZXJUZW1wLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlci5wdXNoKHRoaXMuY291bnRlclRlbXBbdGhpcy5jb3VudGVyLmxlbmd0aF0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhcGVhdGFibGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxhenlJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2RyICYmICEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRvIEVuYWJsZSBvciBEaXNhYmxlIFxyXG4gICAgICAgICAgICB0aGlzLmNvdW50QWN0aXZlQmxvY2tzKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbWl0IHRvIFJlc2V0IEFjdGl2ZUluZGV4IE9uIEFkZGluZyBvciBSZW1vdmluZyBSQlxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNldEluZGV4T25BZGRPclJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkFkZE9yUmVtb3ZlUkIuZW1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgfSAgIFxyXG5cclxuICAgIGdldFJvd0RhdGFMaXN0KGkpIHtcclxuICAgICAgICBjb25zdCByb3dEYXRhTGlzdCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUlkcyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCB0aGlzLmJsb2NrUmVuZGVyZWREYXRhPy5ibG9ja19maWVsZHMubGVuZ3RoOyBwb3NpdGlvbisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHNbcG9zaXRpb25dO1xyXG4gICAgICAgICAgICByb3dEYXRhTGlzdFtmaWVsZC51bmlxdWVfaWRdID0gdGhpcy5nZW5lcmF0ZVJvd0RhdGEoaSwgZmllbGQpO1xyXG4gICAgICAgICAgICB1bmlxdWVJZHNbZmllbGQudW5pcXVlX2lkXSA9IHJvd0RhdGFMaXN0W2ZpZWxkLnVuaXF1ZV9pZF0udW5pcXVlX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnByb2Nlc3NFdmVudExpc3Qocm93RGF0YUxpc3QsIHVuaXF1ZUlkcyk7XHJcbiAgICAgICAgcmV0dXJuIHJvd0RhdGFMaXN0O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc1Jvd0RhdGEoYzogYW55KSB7ICAgXHJcbiAgICAgICB0aGlzLnJlcGVhdGVibGVGaWVsZHNSb3dzID0gW107XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJvd0RhdGFMaXN0ID0gdGhpcy5nZXRSb3dEYXRhTGlzdChpKTtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93cy5wdXNoKHJvd0RhdGFMaXN0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVwZWF0ZWJsZUZpZWxkc1Jvd3M6LS0tLS0tLT5cIiwgdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93cyk7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnN0ZXBMb2FkZXJFbWl0dGVyLmVtaXQoe1wiYmxvY2tJZFwiOiB0aGlzLmJsb2NrSWR9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJvd0RhdGEoYXJyYXlQb3M6IGFueSwgZmllbGRUZW1wOiBhbnksIHR5cGU9XCJcIikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJ1snICsgYXJyYXlQb3MgKyAnXSc7XHJcbiAgICAgICAgbGV0IGFwaUtleTtcclxuICAgICAgICBsZXQgaWQgPSB0aGlzLnN0ZXBJZCArICckJyArIGZpZWxkVGVtcC51bmlxdWVfaWQgKyAnJCcgKyBhcnJheVBvcztcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEJsb2NrKCkpIHtcclxuICAgICAgICAgICAgaWQgPSB0aGlzLnN0ZXBJZCArICckJyArIGZpZWxkVGVtcC51bmlxdWVfaWQgKyAnJCcgKyB0aGlzLnBhcmVudFBvc2l0aW9uICsgJyQnICsgYXJyYXlQb3M7XHJcbiAgICAgICAgICAgIGFwaUtleSA9IGZpZWxkVGVtcC5hcGlfa2V5ID8gZmllbGRUZW1wPy5hcGlfa2V5LnJlcGxhY2UoJ1sqKl0nLCB0aGlzLnBhcmVudFBvc2l0aW9uKSA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhcGlLZXkgPSBmaWVsZFRlbXA/LmFwaV9rZXkgPyBmaWVsZFRlbXA/LmFwaV9rZXkucmVwbGFjZSgnWypdJywgdmFsdWUpIDogJyc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbGV0IHVwZGF0ZWRSZXNwb25zZUFwaUtleSA9IHRoaXMucmV0dXJuUmVxdWVzdE9yUmVzcG9uc2VBcGlLZXlzKCdyZXNwb25zZScsIGZpZWxkVGVtcD8ucmVzcG9uc2VfYXBpX2tleSwgdmFsdWUsIHRoaXMucGFyZW50UG9zaXRpb24pO1xyXG5cclxuICAgICAgICBjb25zdCBmb3JtYXR0ZWRWYWw6IGFueSA9IHtcclxuICAgICAgICAgICAgYXBpX2tleTogJycsXHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZDogaWQsXHJcbiAgICAgICAgICAgIGh0bWxfaWQ6ICBpZCxcclxuICAgICAgICAgICAgcmVzcG9uc2VfYXBpX2tleTogdXBkYXRlZFJlc3BvbnNlQXBpS2V5LFxyXG4gICAgICAgICAgICByZXF1ZXN0X2FwaV9rZXk6IHRoaXMucmV0dXJuUmVxdWVzdE9yUmVzcG9uc2VBcGlLZXlzKCdyZXF1ZXN0JywgZmllbGRUZW1wPy5yZXF1ZXN0X2FwaV9rZXksIHZhbHVlLCB0aGlzLnBhcmVudFBvc2l0aW9uKSxcclxuICAgICAgICAgICAgbGlua2VkQmxvY2tJZDogdGhpcy5ibG9ja0lkLFxyXG4gICAgICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICBpc0FwaVJlc3BvbnNlOiB0aGlzLmlzQXBpUmVzcG9uc2UsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLnJldHVybkZpZWxkRGF0YUZvckxhYmVsKGZpZWxkVGVtcCwgdXBkYXRlZFJlc3BvbnNlQXBpS2V5LCBpZCwgdmFsdWUpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYXJyYXlQb3MsXHJcbiAgICAgICAgICAgIHBhcmVudFBvc2l0aW9uOiB0aGlzLnBhcmVudFBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwYXJlbnRCbG9ja0lkOiB0aGlzLnBhcmVudEJsb2NrLFxyXG4gICAgICAgICAgICBldmVudF9saXN0OiBmaWVsZFRlbXA/LmV2ZW50X2xpc3QgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpZWxkVGVtcD8uZXZlbnRfbGlzdCkpIDogW10sXHJcbiAgICAgICAgICAgIC8vIHJlc0lzRGlmZkhhbmRsZXI6IGZpZWxkVGVtcD8ucmVzcG9uc2VfYXBpX2tleSAmJiB0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUodGhpcy5maWVsZERhdGE/LnJlc3BvbnNlX2FwaV9rZXkpXHJcbiAgICAgICAgICAgICAgICAvLyAhPT0gdGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGZpZWxkVGVtcD8ucmVzcG9uc2VfYXBpX2tleSkgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKHR5cGUgIT0gXCJzdXBlckJsb2Nrc1wiKXtcclxuICAgICAgICAgICAgLy8gZm9ybWF0dGVkVmFsLm1hbmRhdG9yeSA9IGZpZWxkVGVtcD8uaXNfbWFuZGF0b3J5ID09PSAxIHx8IGZpZWxkVGVtcD8uaXNfbWFuZGF0b3J5ID09PSAyO1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWwubWFuZGF0b3J5ID0gZmllbGRUZW1wPy5pc19tYW5kYXRvcnkgPT09IDE7IC8vIEJ5IGRlZmFsdCBtYW5kYXRvcnkgc2hvdWxkIGJlIGZhbHNlIGZvciBjb25kaXRpb25hbCBtYW5kYXRvcnkgZmllbGRzIFxyXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWwuZWRpdGFibGUgPSBmaWVsZFRlbXA/LmlzX2VkaXRhYmxlID09PSAxIHx8IGZpZWxkVGVtcD8uaXNfZWRpdGFibGUgPT09IDI7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbC52aXNpYmxlID0gZmllbGRUZW1wPy5pc19kaXNwbGF5ID09PSAxIHx8IGZpZWxkVGVtcD8uaXNfZGlzcGxheSA9PT0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByZXNldERhdGEgJiYgdGhpcy5wcmVzZXREYXRhLnZhbHVlICYmIEFycmF5LmlzQXJyYXkodGhpcy5wcmVzZXREYXRhLnZhbHVlKSkge1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWwudmFsdWUgPSB0aGlzLnByZXNldERhdGEudmFsdWVbYXJyYXlQb3NdICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNldERhdGEudmFsdWVbYXJyYXlQb3NdW2ZpZWxkVGVtcC5yZXNwb25zZV9hcGlfa2V5XSA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByZXNldERhdGEudmFsdWVbYXJyYXlQb3NdW2ZpZWxkVGVtcC5yZXNwb25zZV9hcGlfa2V5XSA6IGZvcm1hdHRlZFZhbC52YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50VmFsdWVOZXcgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChmb3JtYXR0ZWRWYWwudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRWYWx1ZU5ldyAmJiBjdXJyZW50VmFsdWVOZXcgIT0gdW5kZWZpbmVkICYmIGN1cnJlbnRWYWx1ZU5ldyAhPSBudWxsICYmIGN1cnJlbnRWYWx1ZU5ldyAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgZm9ybWF0dGVkVmFsLnZhbHVlID0gY3VycmVudFZhbHVlTmV3ID8gY3VycmVudFZhbHVlTmV3IDogZm9ybWF0dGVkVmFsLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZU5ldyA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKGZvcm1hdHRlZFZhbC51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlTmV3ICYmIGN1cnJlbnRWYWx1ZU5ldyAhPSB1bmRlZmluZWQgJiYgY3VycmVudFZhbHVlTmV3ICE9IG51bGwgJiYgY3VycmVudFZhbHVlTmV3ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWwudmFsdWUgPSBjdXJyZW50VmFsdWVOZXcgPyBjdXJyZW50VmFsdWVOZXcgOiBmb3JtYXR0ZWRWYWwudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBjb25zdCBlYW9WYWx1ZSA9IGZpZWxkVGVtcD8uYWRkaXRpb25hbF9wYXJhbWV0ZXJzID8gZmllbGRUZW1wPy5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmluZChwdiA9PiBwdi5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnKSA6IG51bGw7XHJcbiAgICAgICAgaWYgKGVhb1ZhbHVlKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbFsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddID0gdGhpcy5yZXR1cm5SZXF1ZXN0T3JSZXNwb25zZUFwaUtleXMoJ3JlcXVlc3QnLCBlYW9WYWx1ZS52YWx1ZSwgdmFsdWUsIHRoaXMucGFyZW50UG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRlZFZhbDtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXB0ZGF0ZXMgZmllbGQgaWRzIGNvbmZpZ3VyZWQgaW4gZXZlbnRzIHdpdGggdW5pcXVlIGlkcyBnZW5lcmF0ZWQgZm9yIHJlcGVhdGFibGUgYmxvY2sgcm93c1xyXG4gICAgcHJvY2Vzc0V2ZW50TGlzdChyb3dEYXRhLCB1bmlxdWVJZHMpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IHVJZCBpbiByb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkRGF0YSA9IHJvd0RhdGFbdUlkXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBmaWVsZERhdGE/LmV2ZW50X2xpc3QpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZVBhcmFtIG9mIGV2ZW50Py5ldmVudF9wYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGVQYXJhbT8uZXZlbnRfY29uZmlnPy5kaXNwbGF5X3N0ZXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIlNldFZhbHVlc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIFwiQ3VzdG9tRnVuY3Rpb25zXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwVHlwZXMgPSBbJ1RhcmdldEZpZWxkcycsICdWYWx1ZUZpZWxkcycsICdWYXJpYWJsZXMnLCAnVGFyZ2V0cyddXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFkZGlfcGFyYW0gb2YgZVBhcmFtPy5pbnZva2VfZXZlbnRfY29uZmlnPy5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWRkaV9wYXJhbS5wYXJhbWV0ZXJfdHlwZSAmJiBhZGRpX3BhcmFtLnZhbHVlICYmIHBUeXBlcy5pbmNsdWRlcyhhZGRpX3BhcmFtLnBhcmFtZXRlcl90eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYWRkaVBhcmFtVmFsTmV3OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRpUGFyYW1WYWxzID0gYWRkaV9wYXJhbS52YWx1ZS5zcGxpdCgnfCcpLm1hcCh2YWwgPT4gdmFsLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYWRkaVBhcmFtVmFsIG9mIGFkZGlQYXJhbVZhbHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh1bmlxdWVJZHMpLmluY2x1ZGVzKGFkZGlQYXJhbVZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpUGFyYW1WYWxOZXcucHVzaCh1bmlxdWVJZHNbYWRkaVBhcmFtVmFsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpUGFyYW1WYWxOZXcucHVzaChhZGRpUGFyYW1WYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGlfcGFyYW0udmFsdWUgPSBhZGRpUGFyYW1WYWxOZXcuam9pbignfCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBpc0NoaWxkQmxvY2soKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLnBhcmVudFBvc2l0aW9uICE9IHVuZGVmaW5lZCAmJiB0aGlzLnBhcmVudFBvc2l0aW9uICE9IG51bGwpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSB0aGUgY3VzdG9tIGNsYXNzIG9mIHRoZSByZXBlYXRhYmxlIGJsb2NrIGlmIHJlcXVpcmVkXHJcbiAgICB1cGRhdGVTZWN0aW9uQ3VzdG9tQ2xhc3MoY291bnRzOiBhbnksIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoY291bnRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25DdXN0b21DbGFzc1tpXSA9ICB0aGlzLmJsb2NrUmVuZGVyZWREYXRhPy5ibG9ja19zdHlsZT8uY3VzdG9tX2NsYXNzX25hbWUgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YT8uY3VzdG9tX2NsYXNzX2NvbmRpdGlvbiAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhPy5jdXN0b21fY2xhc3NfY29uZGl0aW9uWydxdWVyeSddICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VzdG9tQ2xhc3NDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0N1c3RvbUNsYXNzKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIHRoaXMuc3RlcElkICsgJyQnICsgdGhpcy5ibG9ja0lkICsgJyQnICsgaSwgdmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY3VzdG9tQ2xhc3NDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uQ3VzdG9tQ2xhc3NbaV0gPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkZpZWxkRGF0YVVwZGF0ZWQoZmllbGRJZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gc2tpcCBjb25kaXRpb25DaGVjayBhbmQgdXBkYXRlU2VjdGlvbkN1c3RvbUNsYXNzIGlmIGZpZWxkSWQgZG9lcyBub3QgbWF0Y2hcclxuICAgICAgICBpZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQgIT09IGZpZWxkSWQpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2sodmFsdWUpOyAgICAgICAgXHJcbiAgICAgICAgdGhpcy51cGRhdGVTZWN0aW9uQ3VzdG9tQ2xhc3ModGhpcy5jb3VudGVyLCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIHZpc2libGUgYW5kIGVkaXRhYmxlIGZsYWdzIG9mIHRoZSByZXBlYXRhYmxlIGJsb2NrXHJcbiAgICBwcml2YXRlIGNvbmRpdGlvbkNoZWNrKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZWRpdGFibGUgPT09IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKHRoaXMuZmllbGREYXRhLCBTdHJpbmcodGhpcy5hcHBEYXRhLmlkKSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoZWRpdGFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25FZGl0YWJsZSA9IGVkaXRhYmxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQWN0aW9uQnV0dG9uID0gZWRpdGFibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc19kaXNwbGF5ID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5maWVsZERhdGEsIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdmlzaWJsZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgYmxvY2sgaXMgbm90IHZpc2libGUsIGNoZWNrIGFuZCBzZXQgdGhlIG1hbmRhdG9yeSBjb25kaXRpb24gZm9yIGZpZWxkc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRNYW5kYXRvcnlDb25kaXRpb25Gb3JCbG9ja0ZpZWxkcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU2V0cyB0aGUgbWFuZGF0b3J5IGNvbmRpdGlvbiBmb3IgYWxsIGZpZWxkcyBpbiB0aGUgYmxvY2sgd2hlbiB0aGUgYmxvY2sgaXMgbm90IHZpc2libGUuXHJcbiAgICAgKiBUaGlzIGVuc3VyZXMgdGhhdCBpZiB0aGUgYmxvY2sgaXMgaGlkZGVuLCBhbnkgZmllbGRzIHRoYXQgd2VyZSBtYW5kYXRvcnkgYXJlIHNldCB0byBub24tbWFuZGF0b3J5LlxyXG4gICAgICovXHJcbiAgICBzZXRNYW5kYXRvcnlDb25kaXRpb25Gb3JCbG9ja0ZpZWxkcygpIHtcclxuICAgICAgICBpZighdGhpcy5ibG9ja1JlbmRlcmVkRGF0YSkgXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICBjb25zdCBhcHBEYXRhID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRBbGxBcHBTdG9yZURhdGEoKTtcclxuICAgICAgICBpZiAoIWFwcERhdGEpXHJcbiAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIC8vIEZpbHRlciBmaWVsZHMgdGhhdCBiZWxvbmcgdG8gdGhpcyBibG9jayBhbmQgd2VyZSBtYW5kYXRvcnkgb3JpZ2luYWxseVxyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHNUb1VwZGF0ZSA9IGFwcERhdGEuZmlsdGVyKGZpZWxkID0+XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrSWQgPT09IGZpZWxkLmxpbmtlZEJsb2NrSWQgJiYgZmllbGQubWFuZGF0b3J5T3JpZ2luYWwgJiYgZmllbGQudmlzaWJsZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gQmF0Y2ggdXBkYXRlIGFsbCBmaWVsZHMgdGhhdCBuZWVkIGNoYW5nZXNcclxuICAgICAgICAgICAgaWYgKGZpZWxkc1RvVXBkYXRlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkc1RvVXBkYXRlLmZvckVhY2goZmllbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgLy8gRmlsdGVyIGZpZWxkcyB0aGF0IGJlbG9uZyB0byB0aGlzIGJsb2NrIGFuZCBhcmUgbWFuZGF0b3J5XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkc1RvVXBkYXRlID0gYXBwRGF0YS5maWx0ZXIoZmllbGQgPT5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tJZCA9PT0gZmllbGQubGlua2VkQmxvY2tJZCAmJiBmaWVsZC5tYW5kYXRvcnlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEJhdGNoIHVwZGF0ZSBhbGwgZmllbGRzIHRoYXQgbmVlZCBjaGFuZ2VzXHJcbiAgICAgICAgICAgIGlmIChmaWVsZHNUb1VwZGF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNUb1VwZGF0ZS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5T3JpZ2luYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2hlY2tGaWVsZFZpc2liaWxpdHkoZmllbGQ6IGFueSwgcm93RGF0YTogYW55KSB7ICAgICAgICBcclxuICAgICAgICBpZiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAyKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KGZpZWxkLCByb3dEYXRhLmFwaV9rZXksIHJvd0RhdGEudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHRoaXMgaXMgb3RpbWl6ZWQgZnVuY3Rpb24gdG8gZ2V0IHRoZSBtYXggaW5kZXggZnJvbSB0aGUgcmVzcG9uc2VcclxuICAgIHByaXZhdGUgZ2V0TWF4SW5kZXgocmVzOiBhbnkpIHtcclxuICAgICAgICBsZXQgaGFzQVBJS2V5ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgbWF4ID0gMDtcclxuICAgICAgICAgICAgbGV0IGFwaUtleXMgPSB0aGlzLnJldHVybkFQSUtleUZvck11bHRpcGxlQXBpS2V5cygpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyBFc2NhcGUgc3BlY2lhbCByZWdleCBjaGFyYWN0ZXJzIGFuZCByZXBsYWNlIFsqXSB3aXRoIGEgcmVnZXggcGF0dGVybiB0byBjYXB0dXJlIHRoZSBpbmRleFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXhQYXR0ZXJuID0gYXBpS2V5LnJlcGxhY2UoJyonLCAnXFxcXGQrJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxbL2csICdcXFxcWycpXHJcbiAgICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXS9nLCAnXFxcXF0nKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cChyZWdleFBhdHRlcm4pO1xyXG4gICAgICAgICAgICAgICAgbGV0IGtleXMgPSBPYmplY3Qua2V5cyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGtleXMubGVuZ3RoLTE7IGkgPj0gMCA7IGktLSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0ga2V5Lm1hdGNoKHJlZ2V4KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FQSUtleSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YXJ0SWR4ID0gYXBpS2V5LnJlcGxhY2UoJ1sqXScsICcnKS5sZW5ndGggKyAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbmRJZHggPSByZXN1bHRbMF0uaW5kZXhPZignXScsIHN0YXJ0SWR4KTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4ID0gK3Jlc3VsdFswXS5zdWJzdHJpbmcoc3RhcnRJZHgsIGVuZElkeCk7IC8vIHVuYXJ5IHBsdXMgdG8gY29udmVydCBzdHJpbmcgdG8gbnVtYmVyIHdoaWNoIGlzIGZhc3Rlc3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMucmVzcG9uc2VNYXAgPSByZXM7IC8vIGFzc2lnbiB0aGUgZW50aXJlIHJlc3BvbnNlIG1hcFxyXG4gICAgICAgICAgICBpZiAoaGFzQVBJS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0Q291bnRlciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG1heCArIDE7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0Q291bnRlci5wdXNoKHsgYWN0aXZlOiB0cnVlLCBhY3RpdmVJbmRleDogaW5kZXggKyAxIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0FwaVJlc3BvbnNlID0gdHJ1ZTsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdENvdW50ZXI7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkQ291bnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY2hpbGRDb3VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvdW50ZXI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tJZlJlc0hhc0JsYW5rRGF0YShyZXMpIHtcclxuICAgICAgICBsZXQgZmxhZyA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgbGV0IGFwaUtleXMgPSB0aGlzLnJldHVybkFQSUtleUZvck11bHRpcGxlQXBpS2V5cygpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gYXBpS2V5LnJlcGxhY2UoJ1sqXScsICcnKTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNba2V5XSAmJiByZXNba2V5XS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmxhZztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSWZSZXNIYXNSZXBlYXRlZERhdGEocmVzKSB7XHJcbiAgICAgICAgbGV0IGhhc0FQSUtleSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgbGV0IGFwaUtleXMgPSB0aGlzLnJldHVybkFQSUtleUZvck11bHRpcGxlQXBpS2V5cygpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBhcGlLZXkucmVwbGFjZSgnKicsICdcXFxcZCsnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFsvZywgJ1xcXFxbJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxdL2csICdcXFxcXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1sqXScpIDw9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGtleS5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FQSUtleSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBUElLZXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoYXNBUElLZXk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUZpZWxkU3RhdGUoYXBwRGF0YSkge1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YShhcHBEYXRhKTtcclxuICAgIH0gIFxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGZpZWxkIGxhYmVsIG9yIHRoZSB2YWx1ZSBvZiB0aGUgbGFiZWxcclxuICAgICAqIEBwYXJhbSBmaWVsZFRlbXAgZmllbGQgRGF0YVxyXG4gICAgICogQHBhcmFtIGFwaUtleSB0aGUgYXBpIGtleSByZXNwb25zZSBhcGkga2V5IG9yIG5vcm1hbCBhcGkga2V5XHJcbiAgICAgKiBAcGFyYW0gaWQgZmllbGQgaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5GaWVsZERhdGFGb3JMYWJlbChmaWVsZFRlbXAsIGFwaUtleSwgaWQsIHBvc1ZhbCkge1xyXG4gICAgICAgIGxldCByZXR1cm5WYWx1ZTtcclxuICAgICAgICBpZiAoZmllbGRUZW1wPy5maWVsZF90eXBlID09PSAnbGFiZWwnICYmICEoZmllbGRUZW1wPy5yZXNwb25zZV9hcGlfa2V5KSkge1xyXG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGZpZWxkVGVtcD8uZmllbGRfbGFiZWw7XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZSAmJiByZXR1cm5WYWx1ZS5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IChyZXR1cm5WYWx1ZS5zcGxpdCgnKChkeW5hbWljKSknKVsxXSkubWF0Y2gobmV3IFJlZ0V4cCgvXFwlKC4qPylcXCUvZykpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleTEgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXBpS2V5ID0gYXBpS2V5MS5zcGxpdCgnJScpWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHRoaXMucmV0dXJuUmVxdWVzdE9yUmVzcG9uc2VBcGlLZXlzKCdyZXNwb25zZScsIGFwaUtleSwgcG9zVmFsLCB0aGlzLnBhcmVudFBvc2l0aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSByZXR1cm5WYWx1ZS5yZXBsYWNlKCclJyArIGFwaUtleSArICclJywga2V5VmFsdWUgIT09IHVuZGVmaW5lZCA/ICclJyArIGtleVZhbHVlICsgJyUnIDogJycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdGhpcy5yZXR1cm5GaWVsZFZhbHVlKGFwaUtleSwgaWQpO1xyXG4gICAgICAgICAgICBpZiAocmV0dXJuVmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVmYXVsdFZhbHVlID0gZmllbGRUZW1wPy5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgPyBmaWVsZFRlbXA/LmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maW5kKGkgPT4gaS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGVmYXVsdFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSBkZWZhdWx0VmFsdWUudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlID8gcmV0dXJuVmFsdWUgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB2YWx1ZSBpbiByZXNwZWN0IG90IHRoZSBhcGkga2V5IGJhc2VkIG9uIHRoZVxyXG4gICAgICogY29uZGl0aW9uIGlmIGl0IHVzZXMgc2luZ2xlIG9yIG11bHRpcGxlIGFwaSBrZXlcclxuICAgICAqIEBwYXJhbSBhcGlLZXkgdGhlIGFwaSBrZXkgcmVzcG9uc2UgYXBpIGtleSBvciBub3JtYWwgYXBpIGtleVxyXG4gICAgICogQHBhcmFtIGlkIGZpZWxkIGlkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmV0dXJuRmllbGRWYWx1ZShhcGlLZXksIGlkKSB7XHJcbiAgICAgICAgLy8gVE9ETzogQ2hlY2sgZnVuY3Rpb25hbGl0eVxyXG4gICAgICAgIGxldCB2YWx1ZTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBhcGlLZXkpIHtcclxuICAgICAgICAgICAgaWYgKGtleS5pbmNsdWRlcygnKycpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uY2F0S2V5cyA9IGtleS5zcGxpdCgnKycpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaW5nbGVLZXkgb2YgY29uY2F0S2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbCA9IGNvbmNhdEtleXMuaW5kZXhPZihzaW5nbGVLZXkpID09PSAwID8gdGhpcy5yZXNwb25zZU1hcFtzaW5nbGVLZXldIDogdmFsdWUgKyAnICcgKyB0aGlzLnJlc3BvbnNlTWFwW3NpbmdsZUtleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnJlc3BvbnNlTWFwLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNwb25zZU1hcFtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsVGVtcCA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5nZXRBcnJheVdpdGhJbmRleCh0aGlzLnJlc3BvbnNlTWFwLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbFRlbXApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbFRlbXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQoaWQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSBtdWx0aXBsZSBhcGkga2V5cyBiYXNlZCBvbiB0aGUgdHlwZSBvZiB0aGUga2V5XHJcbiAgICAgKiBAcGFyYW0gdHlwZSB0aGUgdHlwZSBvZiB0aGUga2V5XHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBhcGkga2V5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmV0dXJuUmVxdWVzdE9yUmVzcG9uc2VBcGlLZXlzKHR5cGUsIGtleSwgcG9zaXRpb24sIHBhcmVudFBvc2l0aW9uID0gbnVsbCkge1xyXG4gICAgICAgIGlmIChrZXkpIHtcclxuICAgICAgICAgICAgaWYgKCFrZXkuaW5jbHVkZXMoJ3x8JykpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXCpcXF0vZywgcG9zaXRpb24pOyAvLyBjaGFuZ2UgWypdIHdpdGggWyBpbmRleCBdXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKC9cXFtcXCpcXCpcXF0vZywgJ1snICsgcGFyZW50UG9zaXRpb24gKyAnXScpOyAvLyBjaGFuZ2UgWyoqXSB3aXRoIFsgcGFyZW50aW5kZXggXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZSA9PT0gJ3Jlc3BvbnNlJyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKGtleSkgOiBrZXkpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5ld0tleUFyciA9IFtdO1xyXG4gICAgICAgICAgICAgICAga2V5LnNwbGl0KCd8fCcpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHN0YXJDb3VudCA9IGVsZW1lbnQuc3BsaXQoJ1sqXScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzdGFyQ291bnQgJiYgc3RhckNvdW50Lmxlbmd0aCA+IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3S2V5QXJyLnB1c2goZWxlbWVudC5yZXBsYWNlKC9cXFtcXCpcXF0vLCBwb3NpdGlvbikpOyAvLyBjaGFuZ2UgWypdIHdpdGggWyBpbmRleCBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3S2V5QXJyLnB1c2goZWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAncmVzcG9uc2UnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMobmV3S2V5QXJyLmpvaW4oJ3wnKSkgOiBuZXdLZXlBcnIuam9pbignfCcpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIHRoZSBsYXN0IGluZGV4IG9mIHRoZSBhcGkga2V5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmV0dXJuQVBJS2V5Rm9yTXVsdGlwbGVBcGlLZXlzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5LmluY2x1ZGVzKCd8fCcpKSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBhbGwgcmVzcG9uc2Uga2V5cyBzZXBhcmF0ZWx5IHNvIHRoZVxyXG4gICAgICAgICAgICAvLyBkYXRhIG1hcCBzdG9yZXMgdGhlIHZhbHVlcyBvZiBlYWNoIGFuZCBldmVyeSBrZXlcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkuc3BsaXQoJ3x8JykubWFwKHN0ciA9PiBzdHIudHJpbSgpKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIGtleXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhenlJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubGF6eUludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jb3VudGVyID0gW107XHJcbiAgICAgICAgdGhpcy5jaGlsZENvdW50ZXIgPSB7fTtcclxuICAgICAgICB0aGlzLnJlcGVhdGVibGVGaWVsZHNSb3dzID0gW107XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7ICAgICAgICBcclxuICAgIH1cclxuICAgIFxyXG59IiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlYXBlYXRhYmxlLWxvYWRlciB7e3JlYXBlYXRhYmxlTG9hZGluZyA/ICdyZWFwZWF0YWJsZS1wZW5kaW5nJzoncmVhcGVhdGFibGUtbG9hZGVkJ319XCI+PC9kaXY+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwb3Mgb2YgY291bnRlcjsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeUlkQ291bnRlcjtcIj5cclxuICAgICAgICA8c2VjdGlvbiAqbmdJZj1cInBvcy5hY3RpdmUgJiYgYmxvY2tSZW5kZXJlZERhdGEgJiYgcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV1cIiBpZD1cInt7IGJsb2NrSWQgfX1cIiBcclxuICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIiBcclxuICAgICAgICAgICAgW2F0dHIucm9sZV09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLVJvbGUnXVwiIFxyXG4gICAgICAgICAgICBjbGFzcz1cImNlZS1ibG9jayBzZWN0aW9uUmIte3tpfX0ge3tibG9ja0lkfX0tc2lkZWJhci1pdGVtLXt7aX19ICB7e3BhcmVudFBvc2l0aW9uID8gKGJsb2NrSWQrJy1wLScrcGFyZW50UG9zaXRpb24rJy1jLScraSkgOiAoYmxvY2tJZCsnLWMtJytpKX19ICB0ZW1wbGF0ZS17e3RlbXBsYXRlSWR9fSBibG9jay17eyBibG9ja0lkIH19IHt7aXNfYm9vdHN0cmFwID8gJ3Jvdyc6ICcnfX0ge3tyZWFwZWF0YWJsZUxvYWRpbmcgPyAncmVhcGVhdGFibGUtcGVuZGluZyc6J3JlYXBlYXRhYmxlLWxvYWRlZCd9fSB7e3NlY3Rpb25DdXN0b21DbGFzc1tpXSA/IHNlY3Rpb25DdXN0b21DbGFzc1tpXTogJyd9fSBcIj4gICAgICAgICAgICBcclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzOyBpbmRleCBhcyBwb3NpdGlvbjsgdHJhY2tCeTogdHJhY2tCeUlkQmxvY2s7XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6ZmllbGQscG9zaXRpb246cG9zaXRpb24saTppLCBhY3RpdmVQb3NpdGlvbjogcG9zfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPCEtLSBjZWxsRGF0YSB0ZW1wbGF0ZSAtLT5cclxuPG5nLXRlbXBsYXRlICNjZWxsRGF0YSBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1wb3NpdGlvbj1cInBvc2l0aW9uXCIgbGV0LWk9XCJpXCIgbGV0LWFjdGl2ZVBvc2l0aW9uPVwiYWN0aXZlUG9zaXRpb25cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5maWVsZF90eXBlID09PSAnUkJMaXRlJyB8fCBmaWVsZC5maWVsZF90eXBlID09PSAnUmVwZWF0YWJsZSBCbG9jaydcIj5cclxuICAgICAgICA8cmItcmVuZGVyZXIgW2NsYXNzXT1cInJiVXRpbC5nZXRGaWVsZENsYXNzZXMoZmllbGQsIHBvc2l0aW9uKVwiXHJcbiAgICAgICAgICAgIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW3Jvd0RhdGFdPVwicmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdXCIgXHJcbiAgICAgICAgICAgIFtwYXJlbnRCbG9ja109XCJmaWVsZERhdGEudW5pcXVlX2lkXCIgW3BhcmVudFBvc2l0aW9uXT1cImlcIiBbZmllbGREYXRhXT1cImZpZWxkXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBbbWFuZGF0b3J5Q29uZGl0aW9uXT1cIm1hbmRhdG9yeUNvbmRpdGlvblwiIFtlZGl0YWJsZUNvbmRpdGlvbl09XCJlZGl0YWJsZUNvbmRpdGlvblwiIFt2aXNpYmxlQ29uZGl0aW9uXT1cInZpc2libGVDb25kaXRpb25cIj5cclxuICAgICAgICA8L3JiLXJlbmRlcmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuZmllbGRfdHlwZSAhPT0gJ1JCTGl0ZScgJiYgZmllbGQuZmllbGRfdHlwZSAhPT0gJ1JlcGVhdGFibGUgQmxvY2snXCI+XHJcbiAgICAgICAgPGRpdiBbY2xhc3NdPVwicmJVdGlsLmdldEZpZWxkQ2xhc3NlcyhmaWVsZCwgcG9zaXRpb24pXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwicmJVdGlsLmdldENvbXBvbmVudFR5cGUoZmllbGQuZmllbGRfdHlwZSkgfCBhc3luYzsgaW5wdXRzOiByYlV0aWwuZ2V0Q29tcG9uZW50SW5wdXRzKGZpZWxkLCBpLCBhY3RpdmVQb3NpdGlvbilcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG4gXHJcbiAiXX0=