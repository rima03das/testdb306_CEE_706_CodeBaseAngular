import { Component, Input, forwardRef } from '@angular/core';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { CommonUtil } from '../../utils/common-util';
import { GenerateFieldRow } from '../../utils/generate-field-util';
import { BlockRendererComponent } from '../block-renderer/block-renderer.component';
// import { CeeAttachmentsComponent } from '../../field-components/cee-attachments/cee-attachments.component';
import { ViewRendererComponent } from '../view-renderer/view-renderer.component';
import { ProgressBarRendererComponent } from '../progress-bar-renderer/progress-bar-renderer.component';
import { CommonModule, NgIf } from '@angular/common';
import { defer } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../models/app-data/app-data.service";
import * as i3 from "../../models/api-data/api-data.service";
import * as i4 from "../../services/shared-events-service.service";
import * as i5 from "../../services/wfe-step-loader.service";
import * as i6 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ stepId: a0, rootData: a1, fieldData: a2, metaFields: a3, keepState: true, rowData: a4, mandatoryCondition: a5, editableCondition: a6, visibleCondition: a7 });
function GenericBlockRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-progress-bar-renderer", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("progressRenderer progressRenderer-", ctx_r0.fieldData.unique_id, "-", ctx_r0.progressBlock["progress"]["progress_bar_id"], "  progressRenderer-", ctx_r0.fieldData.unique_id, " progressRenderer-", ctx_r0.progressBlock["progress"]["progress_bar_id"], " ", ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵproperty("progressBlock", ctx_r0.progressBlock["progress"])("stateIdMap", ctx_r0.progressBlock["steps"])("currentStep", ctx_r0.stepId);
} }
function GenericBlockRendererComponent_ng_container_1_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const pos_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r0.blockRenderedData.block_id, "-", pos_r3, " ", field_r2.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r2.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r2)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r2)("position", pos_r3)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("rowData", ctx_r0.generateRowData(field_r2))("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition);
} }
function GenericBlockRendererComponent_ng_container_1_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, GenericBlockRendererComponent_ng_container_1_section_1_ng_container_1_Template, 2, 13, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate5("cee-block generic-block template-", ctx_r0.templateId, " block-", ctx_r0.blockRenderedData.block_id, "  block-", ctx_r0.blockPosition, " ", ctx_r0.is_bootstrap ? "row" : "", " ", ctx_r0.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.blockRenderedData.block_id);
    i0.ɵɵproperty("ngClass", ctx_r0.blockRenderedData.block_style && ctx_r0.blockRenderedData.block_style.custom_class_name && ctx_r0.customClassCondition ? ctx_r0.blockRenderedData.block_style.custom_class_name : "");
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.blockRenderedData.block_fields)("ngForTrackBy", ctx_r0.trackById);
} }
function GenericBlockRendererComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GenericBlockRendererComponent_ng_container_1_section_1_Template, 2, 13, "section", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.blockRenderedData && ctx_r0.isVisible);
} }
function GenericBlockRendererComponent_ng_container_2_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const pos_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r0.blockRenderedData ? ctx_r0.blockRenderedData.block_id : ctx_r0.blockId, "-", pos_r5, " ", field_r4.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r4.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r4)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r4)("position", pos_r5)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("rowData", ctx_r0.generateRowData(field_r4))("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition);
} }
function GenericBlockRendererComponent_ng_container_2_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function GenericBlockRendererComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GenericBlockRendererComponent_ng_container_2_ng_container_2_ng_container_1_Template, 2, 13, "ng-container", 4);
    i0.ɵɵelementStart(2, "div")(3, "div");
    i0.ɵɵtemplate(4, GenericBlockRendererComponent_ng_container_2_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 7);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.blockRenderedData.block_fields)("ngForTrackBy", ctx_r0.trackById);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.is_bootstrap ? ctx_r0.fieldData.field_style.bootstrap_class_name : "col-12");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", ctx_r0.blockRenderedData ? ctx_r0.blockRenderedData.block_fields.length : 0, " ", ctx_r0.is_bootstrap ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(5, 11, ctx_r0.componentMap))("ngComponentOutletInputs", i0.ɵɵpureFunction8(13, _c0, ctx_r0.stepId, ctx_r0.rootData, ctx_r0.attachmentFieldData, ctx_r0.attachmentBlockField, ctx_r0.generateRowData(ctx_r0.attachmentFieldData), ctx_r0.mandatoryCondition, ctx_r0.editableCondition, ctx_r0.visibleCondition));
} }
function GenericBlockRendererComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 6);
    i0.ɵɵtemplate(2, GenericBlockRendererComponent_ng_container_2_ng_container_2_Template, 6, 22, "ng-container", 0);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate6("cee-block generic-block template-", ctx_r0.templateId, " block-", ctx_r0.blockRenderedData ? ctx_r0.blockRenderedData.block_id : ctx_r0.blockId, "  block-", ctx_r0.blockPosition, " ", ctx_r0.blockRenderedData && ctx_r0.blockRenderedData.block_style && ctx_r0.customClassCondition ? ctx_r0.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r0.is_bootstrap ? "row" : "", " ", ctx_r0.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.blockRenderedData ? ctx_r0.blockRenderedData.block_id : ctx_r0.blockId);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.blockRenderedData);
} }
function GenericBlockRendererComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 6);
    i0.ɵɵelement(2, "app-block-renderer", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("sub-menu-container ", ctx_r0.additionalParameter["displayPosition"] || "left", "");
    i0.ɵɵpropertyInterpolate1("id", "navblock-", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("hamburgermenu hamburgermenu-", ctx_r0.blockRenderedData.block_id, "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("templateId", ctx_r0.templateId)("blockId", ctx_r0.blockRenderedData)("rootData", ctx_r0.rootData);
} }
// import { BrowserModule } from '@angular/platform-browser';
export class GenericBlockRendererComponent {
    http;
    appDataService;
    apiDataService;
    sharedEventsServiceService;
    wfeStepLoaderService;
    cdRef;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    fieldData;
    templateId;
    blockPosition;
    rootData;
    isAttachmentBlock;
    visibleCondition;
    editableCondition;
    mandatoryCondition;
    viewcomp;
    appData = {
        id: '',
        stepId: '',
        apiKey: 'Generic Block',
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
    blockRenderedData;
    additionalParameter = {};
    conditionObj = {};
    isEditable = false;
    isVisible = false;
    isMandatory = false;
    blockId = '';
    skipLoader = false;
    conditionalUtil;
    rowData = {};
    is_bootstrap = false;
    progressBlock = {};
    variableObj = {};
    commonUtil;
    generateUtil;
    attachmentFieldData;
    attachmentBlockField = [];
    customClassCondition = true;
    isHamburgerMenu = false;
    componentMap = defer(() => {
        return import('../../field-components/cee-attachments/cee-attachments.component').then(m => m.CeeAttachmentsComponent);
    });
    constructor(http, appDataService, apiDataService, sharedEventsServiceService, wfeStepLoaderService, cdRef) {
        this.http = http;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.cdRef = cdRef;
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.commonUtil = new CommonUtil();
        this.generateUtil = new GenerateFieldRow(this.appDataService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        if (!this.isAttachmentBlock) {
            this.editableCondition = {
                value: false,
                fields: [],
                exceptionFields: [],
                isActive: false,
                override: false,
                overrideAll: false
            };
            this.mandatoryCondition = {
                value: false,
                fields: [],
                exceptionFields: [],
                isActive: false,
                override: false,
                overrideAll: false
            };
        }
    }
    ngOnInit() {
        // console.log('root data', this.rootData);
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        // this.rowData = { mandatory: this.isMandatory, editable: this.isEditable };
        if (this.fieldData.is_display === 2) {
            const emitObj = {
                apiKey: this.fieldData.unique_id,
                value: ''
            };
            this.sharedEventsServiceService.emitOnDataSetOrUpdated.emit(emitObj);
            this.variableObj['emitOnDataSetOrUpdated_' + this.fieldData.unique_id] =
                this.sharedEventsServiceService.emitOnDataSetOrUpdated.subscribe((res) => {
                    this.onFieldDataUpdated(res.apiKey, res.value);
                });
            this.variableObj['emitApiSuccessResponse_' + this.fieldData.unique_id] =
                this.sharedEventsServiceService.emitApiSuccessResponse.subscribe((res) => {
                    this.onFieldDataUpdated(null, null);
                });
        }
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'default_value':
                        this.blockId = paramter.value;
                        break;
                    case 'SkipLoader':
                        this.skipLoader = paramter.value === "true" ? true : false;
                        break;
                }
            }
            if (this.blockId) {
                if (this.isVisible === true) {
                    this.renderBolckData();
                }
                if (this.isAttachmentBlock) {
                    this.attachmentFieldData = Object.assign({
                        isAttachmentBlock: true
                    }, this.fieldData);
                    this.attachmentFieldData.field_type = 'Attachments';
                    //   this.attachmentFieldData.unique_id = 'attachment_field_' + this.blockRenderedData.block_id;
                    this.attachmentFieldData.additional_parameters.splice(this.attachmentFieldData.additional_parameters.findIndex(i => i.parameter_type === 'default_value'), 1);
                }
            }
            // set progress bar
            this.setProgressBlockRenderer();
            if (this.fieldData.is_display === 2) {
                const emitObj = {
                    apiKey: this.fieldData.unique_id,
                    value: ''
                };
                this.sharedEventsServiceService.emitOnDataSetOrUpdated.emit(emitObj);
            }
        }
        if (this.fieldData.field_type != "Attachment Block") {
            this.appData = {
                id: this.fieldData.unique_id,
                stepId: this.stepId,
                apiKey: 'Generic Block',
                linkedBlockId: this.fieldData.additional_parameters.filter(e => e.parameter_type === "default_value").length > 0 ? this.fieldData.additional_parameters.filter(e => e.parameter_type === "default_value")[0]['value'] : '',
                isRepeatedField: false,
                repeatedBlockFieldId: '',
                requestApiKey: [],
                responseApiKey: [],
                dataFormatSeparator: '',
                mandatory: this.isMandatory,
                editable: this.isEditable,
                visible: this.isVisible,
                value: '',
                isValid: true
            };
            this.appDataService.addAppData(this.appData);
        }
    }
    trackById(index, item) {
        return item.unique_id;
    }
    renderBolckData() {
        if (window['blockLogs'] === undefined) {
            window['blockLogs'] = [];
            window['blockDataLogs'] = [];
        }
        if (window['blockLogs'] && window['blockLogs'].indexOf(this.blockId) === -1) {
            window['blockLogs'].push(this.blockId);
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            this.wfeStepLoaderService.loadBlockByName(this.blockId).subscribe((data) => {
                window['blockDataLogs'].push({ blockId: this.blockId, blockData: data });
                this.processBlockData(data);
            });
        }
        else if (window['blockDataLogs']) {
            let blockData = window['blockDataLogs'].filter(e => { if (e.blockId == this.blockId)
                return e.blockData; }).length > 0 ? window['blockDataLogs'].filter(e => { if (e.blockId == this.blockId)
                return e.blockData; })[0].blockData : undefined;
            if (blockData) {
                this.processBlockData(blockData);
            }
        }
    }
    processBlockData(data) {
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        if (this.blockRenderedData.block_name.toLowerCase() === 'hamburgermenu') {
            this.isHamburgerMenu = true;
        }
        if (this.blockRenderedData.additional_parameters && this.blockRenderedData.additional_parameters.length > 0) {
            for (const paramter of this.blockRenderedData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'OverrideConditions':
                        if (paramter.value && paramter.value !== 'NONE' && paramter.value !== 'ALL') {
                            const fields = paramter.value.split('|').map(val => val.trim());
                            this.mandatoryCondition.fields = fields;
                            this.editableCondition.fields = fields;
                            // this.visibleCondition.fields = fields;
                        }
                        break;
                    case 'ExceptionConditions':
                        const fields = paramter.value.split('|').map(val => val.trim());
                        this.mandatoryCondition.exceptionFields = fields;
                        this.editableCondition.exceptionFields = fields;
                        // this.visibleCondition.exceptionFields = fields;
                        break;
                    default:
                        break;
                }
            }
        }
        // subscribe to field changes
        if ((this.blockRenderedData.conditional_visible && this.blockRenderedData.conditional_visible.length > 0) ||
            (this.blockRenderedData.conditional_editable && this.blockRenderedData.conditional_editable.length > 0) ||
            (this.blockRenderedData.conditional_mandatory && this.blockRenderedData.conditional_mandatory.length > 0)) {
            this.variableObj[this.blockRenderedData.block_id + '_emitOnDataSetOrUpdatedForGenericBlock'] =
                this.sharedEventsServiceService.emitOnDataSetOrUpdatedForGenericBlock.subscribe((res) => {
                    this.onFieldDataUpdatedForGenericBlock(res.apiKey, res.value);
                });
        }
        if (this.blockRenderedData['custom_class_condition'] && this.blockRenderedData['custom_class_condition'].hasOwnProperty('query') && this.blockRenderedData['custom_class_condition']['query'] != '') {
            this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
            this.variableObj[this.blockRenderedData.block_id + '_emitOnDataSetOrUpdated'] =
                this.sharedEventsServiceService.emitOnDataSetOrUpdated.subscribe((res) => {
                    this.setFieldValueOnSetValuesEvent(res.value);
                });
        }
        /* if (this.blockRenderedData.conditional_visible && this.blockRenderedData.conditional_visible.length > 0) {
            this.visibleCondition.isActive = true;
        } */
        if (this.blockRenderedData.conditional_editable && this.blockRenderedData.conditional_editable.length > 0) {
            this.editableCondition.isActive = true;
        }
        if (this.blockRenderedData.conditional_mandatory && this.blockRenderedData.conditional_mandatory.length > 0) {
            this.mandatoryCondition.isActive = true;
        }
        this.rootData['blockFields'][this.blockRenderedData.block_id] = [];
        for (let field of this.blockRenderedData.block_fields) {
            this.rootData['blockFields'][this.blockRenderedData.block_id].push(field.unique_id);
        }
        if (this.isAttachmentBlock) {
            this.attachmentBlockField = this.blockRenderedData.block_fields;
        }
        this.cdRef.detectChanges();
    }
    onFieldDataUpdated(fieldId, value) {
        const display = this.conditionalUtil.checkVisibility(this.fieldData, fieldId, value);
        if (display !== undefined) {
            this.isVisible = display;
            if (this.isVisible === true) {
                this.renderBolckData();
            }
        }
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
    }
    /**
     * function that sets the progress Bar data based on the map to section ids
     */
    setProgressBlockRenderer() {
        let currStep = this.stepId;
        if (this.navigateStepName && this.stepId.includes('-')) {
            const data = currStep.split('-');
            currStep = data[data.length - 1];
        }
        const workflowSequenceIndex = this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(currStep);
        if (!workflowSequenceIndex) {
            return false;
        }
        const progressData = this.wfeStepLoaderService.progressBarMap[workflowSequenceIndex.sequence] || {};
        if (progressData.progress && this.additionalParameter['ProgressBlockId']) {
            if (progressData.progress.progress_bar_id === this.additionalParameter['ProgressBlockId']) {
                this.progressBlock = progressData;
            }
        }
    }
    // setConditions(childConditions: ChildCondition, type) {
    //     let check = true;
    //     if (childConditions.exceptionFields.length > 0 && childConditions.exceptionFields.includes(this.fieldData.unique_id)) {
    //         check = false;
    //     }
    //     if (check && childConditions && childConditions.isActive) {
    //         if (childConditions.fields.length > 0 && childConditions.fields.includes(this.fieldData.unique_id)) {
    //             this[type] = childConditions.value;
    //             this.conditionObj[type] = true;
    //         } else if (childConditions.overrideAll) {
    //             // console.log(type, obj);
    //             this[type] = childConditions.value;
    //             this.conditionObj[type] = true;
    //         } else {
    //             this.conditionObj[type] = false;
    //         }
    //     }
    // }
    onFieldDataUpdatedForGenericBlock(fieldId, value) {
        if (this.additionalParameter['OverrideConditions'] !== 'NONE') {
            /* const display = this.conditionalUtil.checkVisibility(this.blockRenderedData, fieldId, value);
            if (display !== undefined && this.isFieldDisplay === false) {
                this.isVisible = display;
                this.visibleCondition.value = display;
                this.setOverride(display, 'visibleCondition');
            } */
            const editable = this.conditionalUtil.checkEditable(this.blockRenderedData, fieldId, value);
            if (editable !== undefined) {
                this.editableCondition.value = editable;
                this.setOverride(editable, 'editableCondition');
            }
            const mandatory = this.conditionalUtil.checkMandatory(this.blockRenderedData, fieldId, value);
            if (mandatory !== undefined) {
                this.mandatoryCondition.value = mandatory;
                this.setOverride(mandatory, 'mandatoryCondition');
            }
            // this.visibleCondition = JSON.parse(JSON.stringify(this.visibleCondition));
            this.editableCondition = JSON.parse(JSON.stringify(this.editableCondition));
            this.mandatoryCondition = JSON.parse(JSON.stringify(this.mandatoryCondition));
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
    }
    setOverride(property, value) {
        if (!this.additionalParameter.hasOwnProperty('OverrideConditions')) {
            return;
        }
        // use case 1
        if (this.additionalParameter['OverrideConditions'] === 'NONE') {
            this[value].overrideAll = false;
            this[value].override = false;
        }
        // use case 2 and 3
        if (!property || this.additionalParameter['OverrideConditions'] === 'ALL') {
            this[value].overrideAll = true;
            this[value].override = true;
        }
        // use case 4
        if (property && this.additionalParameter['OverrideConditions'] !== 'NONE' &&
            this.additionalParameter['OverrideConditions'] !== 'ALL' &&
            this[value].fields.length > 0) {
            this[value].overrideAll = false;
            this[value].override = true;
        }
    }
    get navigateStepName() {
        return localStorage.getItem('navigateStepName') === 'true' ? true : false;
    }
    generateRowData(field) {
        return this.generateUtil.generateRowData(field);
    }
    static ɵfac = function GenericBlockRendererComponent_Factory(t) { return new (t || GenericBlockRendererComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.AppDataService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.SharedEventsServiceService), i0.ɵɵdirectiveInject(i5.WfeStepLoaderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GenericBlockRendererComponent, selectors: [["generic-block-renderer"]], inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", blockPosition: "blockPosition", rootData: "rootData", isAttachmentBlock: "isAttachmentBlock", visibleCondition: "visibleCondition", editableCondition: "editableCondition", mandatoryCondition: "mandatoryCondition" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 4, vars: 4, consts: [[4, "ngIf"], [3, "progressBlock", "stateIdMap", "currentStep"], [3, "id", "class", "ngClass", 4, "ngIf"], [3, "id", "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "stepId", "field", "position", "templateId", "rootData", "rowData", "mandatoryCondition", "editableCondition"], [3, "id"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "templateId", "blockId", "rootData"]], template: function GenericBlockRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GenericBlockRendererComponent_ng_container_0_Template, 2, 10, "ng-container", 0)(1, GenericBlockRendererComponent_ng_container_1_Template, 2, 1, "ng-container", 0)(2, GenericBlockRendererComponent_ng_container_2_Template, 3, 12, "ng-container", 0)(3, GenericBlockRendererComponent_ng_container_3_Template, 3, 14, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.progressBlock["progress"]);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isAttachmentBlock && !ctx.isHamburgerMenu);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isAttachmentBlock && !ctx.isHamburgerMenu && ctx.attachmentFieldData);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", !ctx.isAttachmentBlock && ctx.isHamburgerMenu);
        } }, dependencies: () => [ProgressBarRendererComponent, NgIf, CommonModule, i6.NgClass, i6.NgComponentOutlet, i6.NgForOf, i6.AsyncPipe, ViewRendererComponent, BlockRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GenericBlockRendererComponent, [{
        type: Component,
        args: [{ selector: 'generic-block-renderer', standalone: true, imports: [ProgressBarRendererComponent, NgIf, CommonModule, forwardRef(() => ViewRendererComponent), forwardRef(() => BlockRendererComponent)], template: "<!-- show progress bar -->\r\n<ng-container *ngIf=\"progressBlock['progress']\">\r\n    <app-progress-bar-renderer [progressBlock]=\"progressBlock['progress']\" [stateIdMap]=\"progressBlock['steps']\" [currentStep]=\"stepId\" class=\"progressRenderer progressRenderer-{{fieldData.unique_id}}-{{progressBlock['progress']['progress_bar_id']}}  progressRenderer-{{fieldData.unique_id}} progressRenderer-{{progressBlock['progress']['progress_bar_id']}} {{fieldData.field_style?fieldData.field_style.custom_class_name:''}}\">\r\n    </app-progress-bar-renderer>\r\n</ng-container>\r\n<!-- show normal block -->\r\n\r\n<!-- HTML FOR ALL GENERIC BLOCK -->\r\n<ng-container *ngIf=\"!isAttachmentBlock && !isHamburgerMenu\">\r\n    <section id=\"{{ blockRenderedData.block_id }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\"\r\n        *ngIf=\"blockRenderedData  && isVisible\" [ngClass]=\"blockRenderedData.block_style && blockRenderedData.block_style.custom_class_name && customClassCondition ? blockRenderedData.block_style.custom_class_name : ''\">\r\n\r\n        <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n            <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n                [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n            </app-view-renderer>\r\n        </ng-container>\r\n\r\n    </section>\r\n\r\n</ng-container>\r\n<!-- HTML FOR ATTACHMENT BLOCK -->\r\n<ng-container *ngIf=\"isAttachmentBlock && !isHamburgerMenu && attachmentFieldData\">\r\n    <section id=\"{{ blockRenderedData? blockRenderedData.block_id: blockId }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData? blockRenderedData.block_id: blockId }}  block-{{blockPosition}} {{(blockRenderedData && blockRenderedData.block_style && customClassCondition)?blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\">\r\n\r\n        <ng-container *ngIf=\"blockRenderedData\">\r\n\r\n            <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData? blockRenderedData.block_id: blockId }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\"\r\n                    [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n                </app-view-renderer>\r\n            </ng-container>\r\n\r\n\r\n            <div class=\"{{is_bootstrap?fieldData.field_style.bootstrap_class_name:'col-12'}}\">\r\n                <div class=\"field-{{ blockRenderedData? blockRenderedData.block_fields.length:0 }} {{is_bootstrap?fieldData.field_style.custom_class_name:''}}\">\r\n                    <ng-container *ngComponentOutlet=\"componentMap | async; \r\n                    inputs: {stepId: stepId, rootData: rootData, fieldData: attachmentFieldData, metaFields: attachmentBlockField, keepState: true, \r\n                        rowData: generateRowData(attachmentFieldData), mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                    ></ng-container>\r\n                </div>\r\n                <!-- <app-cee-attachments [stepId]=\"stepId\" [fieldData]=\"attachmentFieldData\" [metaFields]=\"attachmentBlockField\" [rootData]=\"rootData\" [keepState]=\"true\" class=\"field-{{ blockRenderedData? blockRenderedData.block_fields.length:0 }} {{is_bootstrap?fieldData.field_style.custom_class_name:''}}\"\r\n                    [rowData]=\"generateRowData(attachmentFieldData)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n                </app-cee-attachments> -->\r\n            </div>\r\n        </ng-container>\r\n    </section>\r\n</ng-container>\r\n<!-- HTML FOR Hamburger Menu -->\r\n<ng-container *ngIf=\"!isAttachmentBlock && isHamburgerMenu\">\r\n    <section [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n    [attr.role]=\"additionalParameter['Aria-Role']\" id=\"navblock-{{fieldData.unique_id}}\"\r\n    class=\"sub-menu-container {{additionalParameter['displayPosition']||'left'}}\">\r\n    <app-block-renderer [stepId]=\"stepId\" [templateId]=\"templateId\" [blockId]=\"blockRenderedData\"\r\n        class=\"hamburgermenu hamburgermenu-{{blockRenderedData.block_id}}\"\r\n        [rootData]=\"rootData\">\r\n    </app-block-renderer>\r\n</section>\r\n</ng-container>" }]
    }], () => [{ type: i1.HttpClient }, { type: i2.AppDataService }, { type: i3.ApiDataService }, { type: i4.SharedEventsServiceService }, { type: i5.WfeStepLoaderService }, { type: i0.ChangeDetectorRef }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], templateId: [{
            type: Input
        }], blockPosition: [{
            type: Input
        }], rootData: [{
            type: Input
        }], isAttachmentBlock: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GenericBlockRendererComponent, { className: "GenericBlockRendererComponent", filePath: "lib\\components\\generic-block-renderer\\generic-block-renderer.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2VuZXJpYy1ibG9jay1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9nZW5lcmljLWJsb2NrLXJlbmRlcmVyL2dlbmVyaWMtYmxvY2stcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ2VuZXJpYy1ibG9jay1yZW5kZXJlci9nZW5lcmljLWJsb2NrLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFnQyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLbkcsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUduRSxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRiw4R0FBOEc7QUFDOUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDeEcsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7O0lDaEI3Qiw2QkFBZ0Q7SUFDNUMsK0NBQzRCOzs7O0lBRHdHLGNBQW1TO0lBQW5TLGdYQUFtUztJQUExVCxBQUF0QyxBQUE1QyxnRUFBMkMsNkNBQXNDLDhCQUF1Qjs7O0lBVS9ILDZCQUFxRztJQUNqRyx1Q0FFb0I7Ozs7OztJQUZELGNBQW9PO0lBQXBPLHlTQUFvTztJQUNoSixBQUExQyxBQUFuQyxBQUF0QixBQUR1UyxBQUFqQixBQUFoQixBQUFsQixzQ0FBaUIsbUJBQWdCLG9CQUFpQixpQ0FBMEIsNkJBQzNTLDZDQUFtQyxpREFBMEMsK0NBQXdDOzs7SUFMdEosa0NBQ3dOO0lBRXBOLDBIQUFxRztJQU16RyxpQkFBVTs7O0lBVDBMLDRQQUFxTDtJQUFoWCxpRUFBcUM7SUFDRixxTkFBMks7O0lBRW5MLGNBQW1DO0lBQWMsQUFBakQsK0RBQW1DLGtDQUFnQzs7O0lBSjNHLDZCQUE2RDtJQUN6RCxzR0FDd047Ozs7SUFBbk4sY0FBcUM7SUFBckMsbUVBQXFDOzs7SUFpQmxDLDZCQUFxRztJQUNqRyx1Q0FFb0I7Ozs7OztJQUZELGNBQWdRO0lBQWhRLHFWQUFnUTtJQUNqSSxBQUExQyxBQUFuQyxBQUF0QixBQUExQixBQUFqQixBQURrUyxBQUFsQixzQ0FBaUIsbUJBQWdCLG9CQUNqUyxpQ0FBMEIsNkJBQXNCLDZDQUFtQyxpREFBMEMsK0NBQXdDOzs7SUFPckwsd0JBR2dCOzs7SUFkNUIsNkJBQXdDO0lBRXBDLCtIQUFxRztJQVFqRyxBQURKLDJCQUFrRixVQUNrRTtJQUM1SSw4SEFHQzs7SUFLVCxBQUpJLGlCQUFNLEVBSUo7Ozs7SUFqQjBCLGNBQW1DO0lBQWMsQUFBakQsK0RBQW1DLGtDQUFnQztJQU85RixjQUE0RTtJQUE1RSxpR0FBNEU7SUFDeEUsY0FBMEk7SUFBMUksb01BQTBJO0lBQzVILGNBQ2hCO0lBQUEsQUFEZ0IsOEVBQ2hCLG1SQUNtSzs7O0lBaEJ0TCw2QkFBbUY7SUFDL0Usa0NBQXNqQjtJQUVsakIsZ0hBQXdDO0lBcUI1QyxpQkFBVTs7OztJQXZCc04sY0FBcVY7SUFBclYsNGNBQXFWO0lBQTVpQiw2R0FBaUU7O0lBRXZELGNBQXVCO0lBQXZCLCtDQUF1Qjs7O0lBd0I5Qyw2QkFBNEQ7SUFDeEQsa0NBRThFO0lBQzlFLHdDQUdxQjtJQUN6QixpQkFBVTs7OztJQUxOLGNBQTZFO0lBQTdFLDZHQUE2RTtJQUQ5Qiw0RUFBcUM7O0lBR2hGLGNBQWtFO0lBQWxFLGdHQUFrRTtJQUNsRSxBQUY0RCxBQUExQixBQUFsQixzQ0FBaUIsaUNBQTBCLHFDQUE4Qiw2QkFFcEU7O0FEckM3Qiw2REFBNkQ7QUFRN0QsTUFBTSxPQUFPLDZCQUE2QjtJQXlEMUI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBNURaLHFCQUFxQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxNQUFNLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLGVBQWUsQ0FBQztJQUN0TixlQUFlLEdBQUcsSUFBSSxDQUFDLHFCQUFxQixHQUFHLHlDQUF5QyxDQUFDO0lBQ3hFLE1BQU0sQ0FBTTtJQUNaLFNBQVMsQ0FBTTtJQUN2QixVQUFVLENBQU07SUFDaEIsYUFBYSxDQUFTO0lBQ2QsUUFBUSxDQUFNO0lBQ3RCLGlCQUFpQixDQUFNO0lBQ3ZCLGdCQUFnQixDQUFpQjtJQUNqQyxpQkFBaUIsQ0FBaUI7SUFDbEMsa0JBQWtCLENBQWlCO0lBRzVDLFFBQVEsQ0FBTTtJQUVkLE9BQU8sR0FBWTtRQUNmLEVBQUUsRUFBRSxFQUFFO1FBQ04sTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsZUFBZTtRQUN2QixhQUFhLEVBQUUsRUFBRTtRQUNqQixlQUFlLEVBQUUsS0FBSztRQUN0QixvQkFBb0IsRUFBRSxFQUFFO1FBQ3hCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLG1CQUFtQixFQUFFLEVBQUU7UUFDdkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLElBQUk7S0FDaEIsQ0FBQztJQUVGLGlCQUFpQixDQUFNO0lBQ3ZCLG1CQUFtQixHQUFHLEVBQUUsQ0FBQztJQUN6QixZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDbkIsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNsQixXQUFXLEdBQUcsS0FBSyxDQUFDO0lBQ3BCLE9BQU8sR0FBRyxFQUFFLENBQUM7SUFDYixVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ25CLGVBQWUsQ0FBa0I7SUFDakMsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLFlBQVksR0FBWSxLQUFLLENBQUM7SUFDOUIsYUFBYSxHQUFRLEVBQUUsQ0FBQztJQUN4QixXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLFVBQVUsQ0FBYTtJQUN2QixZQUFZLENBQW1CO0lBQy9CLG1CQUFtQixDQUFNO0lBQ3pCLG9CQUFvQixHQUFRLEVBQUUsQ0FBQztJQUMvQixvQkFBb0IsR0FBWSxJQUFJLENBQUM7SUFDckMsZUFBZSxHQUFZLEtBQUssQ0FBQztJQUNqQyxZQUFZLEdBQUcsS0FBSyxDQUFDLEdBQUcsRUFBRTtRQUN0QixPQUFPLE1BQU0sQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO0lBQzNILENBQUMsQ0FBQyxDQUFDO0lBQ0gsWUFDWSxJQUFnQixFQUNoQixjQUE4QixFQUM5QixjQUE4QixFQUM5QiwwQkFBc0QsRUFDdEQsb0JBQTBDLEVBQzFDLEtBQXdCO1FBTHhCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDaEIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QiwrQkFBMEIsR0FBMUIsMEJBQTBCLENBQTRCO1FBQ3RELHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsVUFBSyxHQUFMLEtBQUssQ0FBbUI7UUFDaEMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLGVBQWUsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2xGLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksZ0JBQWdCLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzlELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRztnQkFDckIsS0FBSyxFQUFFLEtBQUs7Z0JBQ1osTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsZUFBZSxFQUFFLEVBQUU7Z0JBQ25CLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFFBQVEsRUFBRSxLQUFLO2dCQUNmLFdBQVcsRUFBRSxLQUFLO2FBQ3JCLENBQUM7WUFDRixJQUFJLENBQUMsa0JBQWtCLEdBQUc7Z0JBQ3RCLEtBQUssRUFBRSxLQUFLO2dCQUNaLE1BQU0sRUFBRSxFQUFFO2dCQUNWLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixRQUFRLEVBQUUsS0FBSztnQkFDZixRQUFRLEVBQUUsS0FBSztnQkFDZixXQUFXLEVBQUUsS0FBSzthQUNyQixDQUFDO1NBQ0w7SUFDTCxDQUFDO0lBRUQsUUFBUTtRQUNKLDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUVELDZFQUE2RTtRQUM3RSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUNqQyxNQUFNLE9BQU8sR0FBRztnQkFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO2dCQUNoQyxLQUFLLEVBQUUsRUFBRTthQUNaLENBQUM7WUFDRixJQUFJLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtvQkFDMUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNuRCxDQUFDLENBQUMsQ0FBQztZQUNQLElBQUksQ0FBQyxXQUFXLENBQUMseUJBQXlCLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7Z0JBQ2xFLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFRLEVBQUUsRUFBRTtvQkFDMUUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDeEMsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekYsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFO2dCQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7Z0JBQ25FLFFBQVEsUUFBUSxDQUFDLGNBQWMsRUFBRTtvQkFDN0IsS0FBSyxlQUFlO3dCQUNoQixJQUFJLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQzlCLE1BQU07b0JBQ1YsS0FBSyxZQUFZO3dCQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO3dCQUMzRCxNQUFNO2lCQUNiO2FBQ0o7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLElBQUksRUFBRTtvQkFDekIsSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2lCQUMxQjtnQkFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtvQkFDeEIsSUFBSSxDQUFDLG1CQUFtQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUM7d0JBQ3JDLGlCQUFpQixFQUFFLElBQUk7cUJBQzFCLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUNuQixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztvQkFDcEQsZ0dBQWdHO29CQUNoRyxJQUFJLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxLQUFLLGVBQWUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNqSzthQUNKO1lBSUQsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyx3QkFBd0IsRUFBRSxDQUFDO1lBQ2hDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEtBQUssQ0FBQyxFQUFFO2dCQUNqQyxNQUFNLE9BQU8sR0FBRztvQkFDWixNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO29CQUNoQyxLQUFLLEVBQUUsRUFBRTtpQkFDWixDQUFDO2dCQUNGLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDeEU7U0FDSjtRQUNELElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLElBQUksa0JBQWtCLEVBQUU7WUFDaEQsSUFBSSxDQUFDLE9BQU8sR0FBRztnQkFDWCxFQUFFLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTO2dCQUM1QixNQUFNLEVBQUUsSUFBSSxDQUFDLE1BQU07Z0JBQ25CLE1BQU0sRUFBRSxlQUFlO2dCQUN2QixhQUFhLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsY0FBYyxLQUFLLGVBQWUsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGNBQWMsS0FBSyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDMU4sZUFBZSxFQUFFLEtBQUs7Z0JBQ3RCLG9CQUFvQixFQUFFLEVBQUU7Z0JBQ3hCLGFBQWEsRUFBRSxFQUFFO2dCQUNqQixjQUFjLEVBQUUsRUFBRTtnQkFDbEIsbUJBQW1CLEVBQUUsRUFBRTtnQkFDdkIsU0FBUyxFQUFFLElBQUksQ0FBQyxXQUFXO2dCQUMzQixRQUFRLEVBQUUsSUFBSSxDQUFDLFVBQVU7Z0JBQ3pCLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUztnQkFDdkIsS0FBSyxFQUFFLEVBQUU7Z0JBQ1QsT0FBTyxFQUFFLElBQUk7YUFDaEIsQ0FBQztZQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCxTQUFTLENBQUMsS0FBYSxFQUFFLElBQVM7UUFDOUIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlO1FBQ1gsSUFBRyxNQUFNLENBQUMsV0FBVyxDQUFDLEtBQUssU0FBUyxFQUFDO1lBQ2pDLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBSSxFQUFFLENBQUM7WUFDMUIsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFJLEVBQUUsQ0FBQztTQUNqQztRQUNELElBQUksTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1lBQ3pFLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7WUFDdEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7Z0JBQ3ZFLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDekUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDO1NBQ047YUFBTSxJQUFHLE1BQU0sQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUMvQixJQUFJLFNBQVMsR0FBRyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQSxFQUFFLEdBQUMsSUFBRyxDQUFDLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxPQUFPO2dCQUFFLE9BQU8sQ0FBQyxDQUFDLFNBQVMsQ0FBQSxDQUFBLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFBLEVBQUUsR0FBQyxJQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksSUFBSSxDQUFDLE9BQU87Z0JBQUUsT0FBTyxDQUFDLENBQUMsU0FBUyxDQUFBLENBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUM7WUFDbE8sSUFBRyxTQUFTLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7SUFDTCxDQUFDO0lBRUQsZ0JBQWdCLENBQUMsSUFBSTtRQUNqQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssZUFBZSxFQUFFO1lBQ3JFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1NBQy9CO1FBQ0QsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekcsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDbkUsUUFBUSxRQUFRLENBQUMsY0FBYyxFQUFFO29CQUM3QixLQUFLLG9CQUFvQjt3QkFDckIsSUFBSSxRQUFRLENBQUMsS0FBSyxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssTUFBTSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEtBQUssS0FBSyxFQUFFOzRCQUN6RSxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzs0QkFDaEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7NEJBQ3hDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDOzRCQUN2Qyx5Q0FBeUM7eUJBQzVDO3dCQUNELE1BQU07b0JBQ1YsS0FBSyxxQkFBcUI7d0JBQ3RCLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUNoRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQzt3QkFDakQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7d0JBQ2hELGtEQUFrRDt3QkFDbEQsTUFBTTtvQkFDVjt3QkFDSSxNQUFNO2lCQUNiO2FBQ0o7U0FDSjtRQUNELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG1CQUFtQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3JHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQ3ZHLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDM0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLHdDQUF3QyxDQUFDO2dCQUN4RixJQUFJLENBQUMsMEJBQTBCLENBQUMscUNBQXFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7b0JBQ3pGLElBQUksQ0FBQyxpQ0FBaUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEUsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHdCQUF3QixDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUNqTSxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7WUFDdkgsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxHQUFHLHlCQUF5QixDQUFDO2dCQUM3RSxJQUFJLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7b0JBQzFFLElBQUksQ0FBQyw2QkFBNkIsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2xELENBQUMsQ0FBQyxDQUFDO1NBQ047UUFFRDs7WUFFSTtRQUVKLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDM0M7UUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDbkUsS0FBSyxJQUFJLEtBQUssSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFO1lBQ25ELElBQUksQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7U0FDdkY7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsRUFBRTtZQUN4QixJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQztTQUNuRTtRQUVELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDL0IsQ0FBQztJQUVPLGtCQUFrQixDQUFDLE9BQWUsRUFBRSxLQUFhO1FBQ3JELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3JGLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtZQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQztZQUN6QixJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssSUFBSSxFQUFFO2dCQUN6QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7YUFDMUI7U0FDSjtJQUNMLENBQUM7SUFFRCxXQUFXO1FBQ1AsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QztTQUNKO0lBQ0wsQ0FBQztJQUdEOztPQUVHO0lBQ0gsd0JBQXdCO1FBQ3BCLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDM0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDcEQsTUFBTSxJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNqQyxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDcEM7UUFDRCxNQUFNLHFCQUFxQixHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxnQ0FBZ0MsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNuRyxJQUFJLENBQUMscUJBQXFCLEVBQUU7WUFDeEIsT0FBTyxLQUFLLENBQUM7U0FDaEI7UUFDRCxNQUFNLFlBQVksR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUN6RCxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUMsSUFBSSxZQUFZLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFO1lBQ3RFLElBQUksWUFBWSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEtBQUssSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEVBQUU7Z0JBQ3ZGLElBQUksQ0FBQyxhQUFhLEdBQUcsWUFBWSxDQUFDO2FBQ3JDO1NBQ0o7SUFFTCxDQUFDO0lBRUQseURBQXlEO0lBQ3pELHdCQUF3QjtJQUN4Qiw4SEFBOEg7SUFDOUgseUJBQXlCO0lBQ3pCLFFBQVE7SUFDUixrRUFBa0U7SUFDbEUsZ0hBQWdIO0lBQ2hILGtEQUFrRDtJQUNsRCw4Q0FBOEM7SUFDOUMsb0RBQW9EO0lBQ3BELHlDQUF5QztJQUN6QyxrREFBa0Q7SUFDbEQsOENBQThDO0lBQzlDLG1CQUFtQjtJQUNuQiwrQ0FBK0M7SUFDL0MsWUFBWTtJQUNaLFFBQVE7SUFDUixJQUFJO0lBQ0ksaUNBQWlDLENBQUMsT0FBZSxFQUFFLEtBQWE7UUFDcEUsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDM0Q7Ozs7O2dCQUtJO1lBQ0osTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM1RixJQUFJLFFBQVEsS0FBSyxTQUFTLEVBQUU7Z0JBQ3hCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUN4QyxJQUFJLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxtQkFBbUIsQ0FBQyxDQUFDO2FBQ25EO1lBQ0QsTUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQztZQUM5RixJQUFJLFNBQVMsS0FBSyxTQUFTLEVBQUU7Z0JBQ3pCLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO2dCQUMxQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRSxvQkFBb0IsQ0FBQyxDQUFDO2FBQ3JEO1lBQ0QsNkVBQTZFO1lBRTdFLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztZQUU1RSxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7U0FDakY7SUFDTCxDQUFDO0lBRUQsNkJBQTZCLENBQUMsSUFBWTtRQUN0QyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDM0gsQ0FBQztJQUVELFdBQVcsQ0FBQyxRQUFRLEVBQUUsS0FBSztRQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGNBQWMsQ0FBQyxvQkFBb0IsQ0FBQyxFQUFFO1lBQ2hFLE9BQU87U0FDVjtRQUNELGFBQWE7UUFDYixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLE1BQU0sRUFBRTtZQUMzRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUNoQztRQUVELG1CQUFtQjtRQUNuQixJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEtBQUssRUFBRTtZQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMvQjtRQUVELGFBQWE7UUFDYixJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsS0FBSyxNQUFNO1lBQ3JFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQyxLQUFLLEtBQUs7WUFDeEQsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELElBQUksZ0JBQWdCO1FBQ2hCLE9BQU8sWUFBWSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDOUUsQ0FBQztJQUVELGVBQWUsQ0FBQyxLQUFLO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLFlBQVksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDcEQsQ0FBQzt1RkFsWVEsNkJBQTZCOzZEQUE3Qiw2QkFBNkI7WUN1QjFDLEFBM0JBLEFBZEEsQUFQQSxpR0FBZ0QsbUZBT2Esb0ZBY3NCLG9GQTJCdkI7O1lBaEQ3QyxvREFBK0I7WUFPL0IsY0FBNEM7WUFBNUMscUVBQTRDO1lBYzVDLGNBQWtFO1lBQWxFLCtGQUFrRTtZQTJCbEUsY0FBMkM7WUFBM0Msb0VBQTJDO2tDRHpCNUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLFlBQVksOERBQW1CLHFCQUFxQixFQUFvQixzQkFBc0I7O2lGQUVuSSw2QkFBNkI7Y0FQekMsU0FBUzsyQkFDSSx3QkFBd0IsY0FHdEIsSUFBSSxXQUNQLENBQUMsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQztpTkFNN0gsTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7O2tGQVpHLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25hbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtY29uZGl0aW9uYWwtdXRpbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IENoaWxkQ29uZGl0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoaWxkQ29uZGl0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEdlbmVyYXRlRmllbGRSb3cgfSBmcm9tICcuLi8uLi91dGlscy9nZW5lcmF0ZS1maWVsZC11dGlsJztcclxuaW1wb3J0IHsgQXBwRGF0YSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IEFwcERhdGFTdG9yZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zdG9yZSc7XHJcbmltcG9ydCB7IEJsb2NrUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9ibG9jay1yZW5kZXJlci9ibG9jay1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVBdHRhY2htZW50c0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWF0dGFjaG1lbnRzL2NlZS1hdHRhY2htZW50cy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3UmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi92aWV3LXJlbmRlcmVyL3ZpZXctcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci1yZW5kZXJlci9wcm9ncmVzcy1iYXItcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgZGVmZXIgfSBmcm9tICdyeGpzJztcclxuLy8gaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnZ2VuZXJpYy1ibG9jay1yZW5kZXJlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZ2VuZXJpYy1ibG9jay1yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9nZW5lcmljLWJsb2NrLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW1Byb2dyZXNzQmFyUmVuZGVyZXJDb21wb25lbnQsIE5nSWYsIENvbW1vbk1vZHVsZSwgZm9yd2FyZFJlZigoKSA9PiBWaWV3UmVuZGVyZXJDb21wb25lbnQpLCBmb3J3YXJkUmVmKCgpID0+IEJsb2NrUmVuZGVyZXJDb21wb25lbnQpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2VuZXJpY0Jsb2NrUmVuZGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZUlkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBibG9ja1Bvc2l0aW9uOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBpc0F0dGFjaG1lbnRCbG9jazogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb247XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb247XHJcbiAgICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IENoaWxkQ29uZGl0aW9uO1xyXG5cclxuICAgIFxyXG4gICAgdmlld2NvbXA6IGFueTtcclxuICAgIFxyXG4gICAgYXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICdHZW5lcmljIEJsb2NrJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgZGF0YUZvcm1hdFNlcGFyYXRvcjogJycsXHJcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIGlzVmFsaWQ6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgYmxvY2tSZW5kZXJlZERhdGE6IGFueTtcclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXIgPSB7fTtcclxuICAgIGNvbmRpdGlvbk9iaiA9IHt9O1xyXG4gICAgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICBpc01hbmRhdG9yeSA9IGZhbHNlO1xyXG4gICAgYmxvY2tJZCA9ICcnO1xyXG4gICAgc2tpcExvYWRlciA9IGZhbHNlO1xyXG4gICAgY29uZGl0aW9uYWxVdGlsOiBDb25kaXRpb25hbFV0aWw7XHJcbiAgICByb3dEYXRhID0ge307XHJcbiAgICBpc19ib290c3RyYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByb2dyZXNzQmxvY2s6IGFueSA9IHt9O1xyXG4gICAgdmFyaWFibGVPYmogPSB7fTtcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcbiAgICBnZW5lcmF0ZVV0aWw6IEdlbmVyYXRlRmllbGRSb3c7XHJcbiAgICBhdHRhY2htZW50RmllbGREYXRhOiBhbnk7XHJcbiAgICBhdHRhY2htZW50QmxvY2tGaWVsZDogYW55ID0gW107XHJcbiAgICBjdXN0b21DbGFzc0NvbmRpdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBpc0hhbWJ1cmdlck1lbnU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbXBvbmVudE1hcCA9IGRlZmVyKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1hdHRhY2htZW50cy9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQXR0YWNobWVudHNDb21wb25lbnQpO1xyXG4gICAgfSk7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYpIHtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVXRpbCA9IG5ldyBDb25kaXRpb25hbFV0aWwoZmFsc2UsIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlVXRpbCA9IG5ldyBHZW5lcmF0ZUZpZWxkUm93KHRoaXMuYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNfYm9vdHN0cmFwJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzX2Jvb3RzdHJhcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuaXNBdHRhY2htZW50QmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbiA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgICAgICAgICBleGNlcHRpb25GaWVsZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgb3ZlcnJpZGVBbGw6IGZhbHNlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgZmllbGRzOiBbXSxcclxuICAgICAgICAgICAgICAgIGV4Y2VwdGlvbkZpZWxkczogW10sXHJcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBvdmVycmlkZUFsbDogZmFsc2VcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3Jvb3QgZGF0YScsIHRoaXMucm9vdERhdGEpO1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc19kaXNwbGF5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMucm93RGF0YSA9IHsgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5LCBlZGl0YWJsZTogdGhpcy5pc0VkaXRhYmxlIH07XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgZW1pdE9iaiA9IHtcclxuICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5lbWl0KGVtaXRPYmopO1xyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydlbWl0T25EYXRhU2V0T3JVcGRhdGVkXycgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdID1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpZWxkRGF0YVVwZGF0ZWQocmVzLmFwaUtleSwgcmVzLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydlbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlXycgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdID1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpZWxkRGF0YVVwZGF0ZWQobnVsbCwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWZhdWx0X3ZhbHVlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja0lkID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NraXBMb2FkZXInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNraXBMb2FkZXIgPSBwYXJhbXRlci52YWx1ZSA9PT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJsb2NrSWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQm9sY2tEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0F0dGFjaG1lbnRCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXR0YWNobWVudEZpZWxkRGF0YSA9IE9iamVjdC5hc3NpZ24oe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0F0dGFjaG1lbnRCbG9jazogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMuZmllbGREYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF0dGFjaG1lbnRGaWVsZERhdGEuZmllbGRfdHlwZSA9ICdBdHRhY2htZW50cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICB0aGlzLmF0dGFjaG1lbnRGaWVsZERhdGEudW5pcXVlX2lkID0gJ2F0dGFjaG1lbnRfZmllbGRfJyArIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdHRhY2htZW50RmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5zcGxpY2UodGhpcy5hdHRhY2htZW50RmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maW5kSW5kZXgoaSA9PiBpLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICAvLyBzZXQgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJvZ3Jlc3NCbG9ja1JlbmRlcmVyKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc19kaXNwbGF5ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbWl0T2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5lbWl0KGVtaXRPYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuZmllbGREYXRhLmZpZWxkX3R5cGUgIT0gXCJBdHRhY2htZW50IEJsb2NrXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6ICdHZW5lcmljIEJsb2NrJyxcclxuICAgICAgICAgICAgICAgIGxpbmtlZEJsb2NrSWQ6IHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZSA9PiBlLnBhcmFtZXRlcl90eXBlID09PSBcImRlZmF1bHRfdmFsdWVcIikubGVuZ3RoID4gMCA/IHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZSA9PiBlLnBhcmFtZXRlcl90eXBlID09PSBcImRlZmF1bHRfdmFsdWVcIilbMF1bJ3ZhbHVlJ10gOiAnJyxcclxuICAgICAgICAgICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICAgICAgICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5LFxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IHRoaXMuaXNFZGl0YWJsZSxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IHRoaXMuaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLmFkZEFwcERhdGEodGhpcy5hcHBEYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tCeUlkKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0udW5pcXVlX2lkO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlckJvbGNrRGF0YSgpIHsgICAgXHJcbiAgICAgICAgaWYod2luZG93WydibG9ja0xvZ3MnXSA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgd2luZG93WydibG9ja0xvZ3MnXSA9ICBbXTtcclxuICAgICAgICAgICAgd2luZG93WydibG9ja0RhdGFMb2dzJ10gPSAgW107XHJcbiAgICAgICAgfSAgICBcclxuICAgICAgICBpZiAod2luZG93WydibG9ja0xvZ3MnXSAmJiB3aW5kb3dbJ2Jsb2NrTG9ncyddLmluZGV4T2YodGhpcy5ibG9ja0lkKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93WydibG9ja0xvZ3MnXS5wdXNoKHRoaXMuYmxvY2tJZCk7XHJcbiAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZGVyU2VydmljZS5za2lwTG9hZGluZyA9IHRoaXMuc2tpcExvYWRlcjtcclxuICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUodGhpcy5ibG9ja0lkKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHdpbmRvd1snYmxvY2tEYXRhTG9ncyddLnB1c2goeyBibG9ja0lkOiB0aGlzLmJsb2NrSWQsIGJsb2NrRGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Jsb2NrRGF0YShkYXRhKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHdpbmRvd1snYmxvY2tEYXRhTG9ncyddKSB7XHJcbiAgICAgICAgICAgIGxldCBibG9ja0RhdGEgPSB3aW5kb3dbJ2Jsb2NrRGF0YUxvZ3MnXS5maWx0ZXIoZT0+e2lmKGUuYmxvY2tJZCA9PSB0aGlzLmJsb2NrSWQpIHJldHVybiBlLmJsb2NrRGF0YX0pLmxlbmd0aCA+IDAgPyB3aW5kb3dbJ2Jsb2NrRGF0YUxvZ3MnXS5maWx0ZXIoZT0+e2lmKGUuYmxvY2tJZCA9PSB0aGlzLmJsb2NrSWQpIHJldHVybiBlLmJsb2NrRGF0YX0pWzBdLmJsb2NrRGF0YSA6IHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgaWYoYmxvY2tEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NCbG9ja0RhdGEoYmxvY2tEYXRhKTsgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0Jsb2NrRGF0YShkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YSA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaGFtYnVyZ2VybWVudScpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0hhbWJ1cmdlck1lbnUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnT3ZlcnJpZGVDb25kaXRpb25zJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnZhbHVlICYmIHBhcmFtdGVyLnZhbHVlICE9PSAnTk9ORScgJiYgcGFyYW10ZXIudmFsdWUgIT09ICdBTEwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfCcpLm1hcCh2YWwgPT4gdmFsLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbi5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uLmZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudmlzaWJsZUNvbmRpdGlvbi5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRXhjZXB0aW9uQ29uZGl0aW9ucyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHZhbCA9PiB2YWwudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24uZXhjZXB0aW9uRmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uLmV4Y2VwdGlvbkZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy52aXNpYmxlQ29uZGl0aW9uLmV4Y2VwdGlvbkZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc3Vic2NyaWJlIHRvIGZpZWxkIGNoYW5nZXNcclxuICAgICAgICBpZiAoKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUubGVuZ3RoID4gMCkgfHxcclxuICAgICAgICAgICAgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9lZGl0YWJsZS5sZW5ndGggPiAwKSB8fFxyXG4gICAgICAgICAgICAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialt0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkICsgJ19lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrJ10gPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmllbGREYXRhVXBkYXRlZEZvckdlbmVyaWNCbG9jayhyZXMuYXBpS2V5LCByZXMudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YVsnY3VzdG9tX2NsYXNzX2NvbmRpdGlvbiddICYmIHRoaXMuYmxvY2tSZW5kZXJlZERhdGFbJ2N1c3RvbV9jbGFzc19jb25kaXRpb24nXS5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhWydjdXN0b21fY2xhc3NfY29uZGl0aW9uJ11bJ3F1ZXJ5J10gIT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21DbGFzc0NvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrQ3VzdG9tQ2xhc3ModGhpcy5ibG9ja1JlbmRlcmVkRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksICcnKTtcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialt0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkICsgJ19lbWl0T25EYXRhU2V0T3JVcGRhdGVkJ10gPVxyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChyZXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF92aXNpYmxlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlQ29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9ICovXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlICYmIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZF0gPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcykge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW3RoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWRdLnB1c2goZmllbGQudW5pcXVlX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNBdHRhY2htZW50QmxvY2spIHtcclxuICAgICAgICAgICAgdGhpcy5hdHRhY2htZW50QmxvY2tGaWVsZCA9IHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkZpZWxkRGF0YVVwZGF0ZWQoZmllbGRJZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgZGlzcGxheSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eSh0aGlzLmZpZWxkRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgIGlmIChkaXNwbGF5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBkaXNwbGF5O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQm9sY2tEYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52YXJpYWJsZU9iaikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9ialtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHNldHMgdGhlIHByb2dyZXNzIEJhciBkYXRhIGJhc2VkIG9uIHRoZSBtYXAgdG8gc2VjdGlvbiBpZHNcclxuICAgICAqL1xyXG4gICAgc2V0UHJvZ3Jlc3NCbG9ja1JlbmRlcmVyKCkge1xyXG4gICAgICAgIGxldCBjdXJyU3RlcCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgIGlmICh0aGlzLm5hdmlnYXRlU3RlcE5hbWUgJiYgdGhpcy5zdGVwSWQuaW5jbHVkZXMoJy0nKSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gY3VyclN0ZXAuc3BsaXQoJy0nKTtcclxuICAgICAgICAgICAgY3VyclN0ZXAgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHdvcmtmbG93U2VxdWVuY2VJbmRleCA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuZ2V0V29ya2Zsb3dTZXF1ZW5jZUluZGV4RnJvbVN0ZXAoY3VyclN0ZXApO1xyXG4gICAgICAgIGlmICghd29ya2Zsb3dTZXF1ZW5jZUluZGV4KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcHJvZ3Jlc3NEYXRhID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5wcm9ncmVzc0Jhck1hcFtcclxuICAgICAgICAgICAgd29ya2Zsb3dTZXF1ZW5jZUluZGV4LnNlcXVlbmNlXSB8fCB7fTtcclxuICAgICAgICBpZiAocHJvZ3Jlc3NEYXRhLnByb2dyZXNzICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJvZ3Jlc3NCbG9ja0lkJ10pIHtcclxuICAgICAgICAgICAgaWYgKHByb2dyZXNzRGF0YS5wcm9ncmVzcy5wcm9ncmVzc19iYXJfaWQgPT09IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJvZ3Jlc3NCbG9ja0lkJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvZ3Jlc3NCbG9jayA9IHByb2dyZXNzRGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gc2V0Q29uZGl0aW9ucyhjaGlsZENvbmRpdGlvbnM6IENoaWxkQ29uZGl0aW9uLCB0eXBlKSB7XHJcbiAgICAvLyAgICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgIC8vICAgICBpZiAoY2hpbGRDb25kaXRpb25zLmV4Y2VwdGlvbkZpZWxkcy5sZW5ndGggPiAwICYmIGNoaWxkQ29uZGl0aW9ucy5leGNlcHRpb25GaWVsZHMuaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgLy8gICAgICAgICBjaGVjayA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICBpZiAoY2hlY2sgJiYgY2hpbGRDb25kaXRpb25zICYmIGNoaWxkQ29uZGl0aW9ucy5pc0FjdGl2ZSkge1xyXG4gICAgLy8gICAgICAgICBpZiAoY2hpbGRDb25kaXRpb25zLmZpZWxkcy5sZW5ndGggPiAwICYmIGNoaWxkQ29uZGl0aW9ucy5maWVsZHMuaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpc1t0eXBlXSA9IGNoaWxkQ29uZGl0aW9ucy52YWx1ZTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uT2JqW3R5cGVdID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIGlmIChjaGlsZENvbmRpdGlvbnMub3ZlcnJpZGVBbGwpIHtcclxuICAgIC8vICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHR5cGUsIG9iaik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzW3R5cGVdID0gY2hpbGRDb25kaXRpb25zLnZhbHVlO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jb25kaXRpb25PYmpbdHlwZV0gPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5jb25kaXRpb25PYmpbdHlwZV0gPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuICAgIHByaXZhdGUgb25GaWVsZERhdGFVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrKGZpZWxkSWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ092ZXJyaWRlQ29uZGl0aW9ucyddICE9PSAnTk9ORScpIHtcclxuICAgICAgICAgICAgLyogY29uc3QgZGlzcGxheSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eSh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChkaXNwbGF5ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pc0ZpZWxkRGlzcGxheSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZGlzcGxheTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZUNvbmRpdGlvbi52YWx1ZSA9IGRpc3BsYXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE92ZXJyaWRlKGRpc3BsYXksICd2aXNpYmxlQ29uZGl0aW9uJyk7XHJcbiAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGVkaXRhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRpdGFibGVDb25kaXRpb24udmFsdWUgPSBlZGl0YWJsZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3ZlcnJpZGUoZWRpdGFibGUsICdlZGl0YWJsZUNvbmRpdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG1hbmRhdG9yeSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrTWFuZGF0b3J5KHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbi52YWx1ZSA9IG1hbmRhdG9yeTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3ZlcnJpZGUobWFuZGF0b3J5LCAnbWFuZGF0b3J5Q29uZGl0aW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gdGhpcy52aXNpYmxlQ29uZGl0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnZpc2libGVDb25kaXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZWRpdGFibGVDb25kaXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZWRpdGFibGVDb25kaXRpb24pKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbikpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICB0aGlzLmN1c3RvbUNsYXNzQ29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tDdXN0b21DbGFzcyh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLCBTdHJpbmcodGhpcy5hcHBEYXRhLmlkKSwgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE92ZXJyaWRlKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KCdPdmVycmlkZUNvbmRpdGlvbnMnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHVzZSBjYXNlIDFcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydPdmVycmlkZUNvbmRpdGlvbnMnXSA9PT0gJ05PTkUnKSB7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlQWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1c2UgY2FzZSAyIGFuZCAzXHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0eSB8fCB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ092ZXJyaWRlQ29uZGl0aW9ucyddID09PSAnQUxMJykge1xyXG4gICAgICAgICAgICB0aGlzW3ZhbHVlXS5vdmVycmlkZUFsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVzZSBjYXNlIDRcclxuICAgICAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydPdmVycmlkZUNvbmRpdGlvbnMnXSAhPT0gJ05PTkUnICYmXHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnT3ZlcnJpZGVDb25kaXRpb25zJ10gIT09ICdBTEwnICYmXHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlQWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG5hdmlnYXRlU3RlcE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYXZpZ2F0ZVN0ZXBOYW1lJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJvd0RhdGEoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVV0aWwuZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKTtcclxuICAgIH1cclxufVxyXG4iLCI8IS0tIHNob3cgcHJvZ3Jlc3MgYmFyIC0tPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwicHJvZ3Jlc3NCbG9ja1sncHJvZ3Jlc3MnXVwiPlxyXG4gICAgPGFwcC1wcm9ncmVzcy1iYXItcmVuZGVyZXIgW3Byb2dyZXNzQmxvY2tdPVwicHJvZ3Jlc3NCbG9ja1sncHJvZ3Jlc3MnXVwiIFtzdGF0ZUlkTWFwXT1cInByb2dyZXNzQmxvY2tbJ3N0ZXBzJ11cIiBbY3VycmVudFN0ZXBdPVwic3RlcElkXCIgY2xhc3M9XCJwcm9ncmVzc1JlbmRlcmVyIHByb2dyZXNzUmVuZGVyZXIte3tmaWVsZERhdGEudW5pcXVlX2lkfX0te3twcm9ncmVzc0Jsb2NrWydwcm9ncmVzcyddWydwcm9ncmVzc19iYXJfaWQnXX19ICBwcm9ncmVzc1JlbmRlcmVyLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19IHByb2dyZXNzUmVuZGVyZXIte3twcm9ncmVzc0Jsb2NrWydwcm9ncmVzcyddWydwcm9ncmVzc19iYXJfaWQnXX19IHt7ZmllbGREYXRhLmZpZWxkX3N0eWxlP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcbiAgICA8L2FwcC1wcm9ncmVzcy1iYXItcmVuZGVyZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG48IS0tIHNob3cgbm9ybWFsIGJsb2NrIC0tPlxyXG5cclxuPCEtLSBIVE1MIEZPUiBBTEwgR0VORVJJQyBCTE9DSyAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0F0dGFjaG1lbnRCbG9jayAmJiAhaXNIYW1idXJnZXJNZW51XCI+XHJcbiAgICA8c2VjdGlvbiBpZD1cInt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIiBbYXR0ci5yb2xlXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtUm9sZSddXCIgY2xhc3M9XCJjZWUtYmxvY2sgZ2VuZXJpYy1ibG9jayB0ZW1wbGF0ZS17e3RlbXBsYXRlSWR9fSBibG9jay17eyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCB9fSAgYmxvY2ste3tibG9ja1Bvc2l0aW9ufX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fSB7e2lzVmlzaWJsZT8gJ3Zpc2FibGUtc2VjdGlvbic6Jyd9fVwiXHJcbiAgICAgICAgKm5nSWY9XCJibG9ja1JlbmRlcmVkRGF0YSAgJiYgaXNWaXNpYmxlXCIgW25nQ2xhc3NdPVwiYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUgJiYgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUgJiYgY3VzdG9tQ2xhc3NDb25kaXRpb24gPyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSA6ICcnXCI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkczsgaW5kZXggYXMgcG9zOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgICAgPGFwcC12aWV3LXJlbmRlcmVyIGNsYXNzPVwiYXBwLXZpZXctcmVuZGVyZXIte3sgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX0te3twb3N9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkXT1cImZpZWxkXCIgW3Bvc2l0aW9uXT1cInBvc1wiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIlxyXG4gICAgICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW3Jvd0RhdGFdPVwiZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKVwiIFttYW5kYXRvcnlDb25kaXRpb25dPVwibWFuZGF0b3J5Q29uZGl0aW9uXCIgW2VkaXRhYmxlQ29uZGl0aW9uXT1cImVkaXRhYmxlQ29uZGl0aW9uXCI+XHJcbiAgICAgICAgICAgIDwvYXBwLXZpZXctcmVuZGVyZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPC9zZWN0aW9uPlxyXG5cclxuPC9uZy1jb250YWluZXI+XHJcbjwhLS0gSFRNTCBGT1IgQVRUQUNITUVOVCBCTE9DSyAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQXR0YWNobWVudEJsb2NrICYmICFpc0hhbWJ1cmdlck1lbnUgJiYgYXR0YWNobWVudEZpZWxkRGF0YVwiPlxyXG4gICAgPHNlY3Rpb24gaWQ9XCJ7eyBibG9ja1JlbmRlcmVkRGF0YT8gYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQ6IGJsb2NrSWQgfX1cIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6IHVuZGVmaW5lZFwiIFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1Sb2xlJ11cIiBjbGFzcz1cImNlZS1ibG9jayBnZW5lcmljLWJsb2NrIHRlbXBsYXRlLXt7dGVtcGxhdGVJZH19IGJsb2NrLXt7IGJsb2NrUmVuZGVyZWREYXRhPyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZDogYmxvY2tJZCB9fSAgYmxvY2ste3tibG9ja1Bvc2l0aW9ufX0ge3soYmxvY2tSZW5kZXJlZERhdGEgJiYgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUgJiYgY3VzdG9tQ2xhc3NDb25kaXRpb24pP2Jsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fSB7e2lzVmlzaWJsZT8gJ3Zpc2FibGUtc2VjdGlvbic6Jyd9fVwiPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYmxvY2tSZW5kZXJlZERhdGFcIj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkczsgaW5kZXggYXMgcG9zOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgICAgICAgIDxhcHAtdmlldy1yZW5kZXJlciBjbGFzcz1cImFwcC12aWV3LXJlbmRlcmVyLXt7IGJsb2NrUmVuZGVyZWREYXRhPyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZDogYmxvY2tJZCB9fS17e3Bvc319IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbZmllbGRdPVwiZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtwb3NpdGlvbl09XCJwb3NcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW3Jvd0RhdGFdPVwiZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKVwiIFttYW5kYXRvcnlDb25kaXRpb25dPVwibWFuZGF0b3J5Q29uZGl0aW9uXCIgW2VkaXRhYmxlQ29uZGl0aW9uXT1cImVkaXRhYmxlQ29uZGl0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8L2FwcC12aWV3LXJlbmRlcmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3tpc19ib290c3RyYXA/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lOidjb2wtMTInfX1cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBibG9ja1JlbmRlcmVkRGF0YT8gYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzLmxlbmd0aDowIH19IHt7aXNfYm9vdHN0cmFwP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXAgfCBhc3luYzsgXHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgZmllbGREYXRhOiBhdHRhY2htZW50RmllbGREYXRhLCBtZXRhRmllbGRzOiBhdHRhY2htZW50QmxvY2tGaWVsZCwga2VlcFN0YXRlOiB0cnVlLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93RGF0YTogZ2VuZXJhdGVSb3dEYXRhKGF0dGFjaG1lbnRGaWVsZERhdGEpLCBtYW5kYXRvcnlDb25kaXRpb246IG1hbmRhdG9yeUNvbmRpdGlvbiwgZWRpdGFibGVDb25kaXRpb246IGVkaXRhYmxlQ29uZGl0aW9uLCB2aXNpYmxlQ29uZGl0aW9uOiB2aXNpYmxlQ29uZGl0aW9ufVwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8IS0tIDxhcHAtY2VlLWF0dGFjaG1lbnRzIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkRGF0YV09XCJhdHRhY2htZW50RmllbGREYXRhXCIgW21ldGFGaWVsZHNdPVwiYXR0YWNobWVudEJsb2NrRmllbGRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBba2VlcFN0YXRlXT1cInRydWVcIiBjbGFzcz1cImZpZWxkLXt7IGJsb2NrUmVuZGVyZWREYXRhPyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHMubGVuZ3RoOjAgfX0ge3tpc19ib290c3RyYXA/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtyb3dEYXRhXT1cImdlbmVyYXRlUm93RGF0YShhdHRhY2htZW50RmllbGREYXRhKVwiIFttYW5kYXRvcnlDb25kaXRpb25dPVwibWFuZGF0b3J5Q29uZGl0aW9uXCIgW2VkaXRhYmxlQ29uZGl0aW9uXT1cImVkaXRhYmxlQ29uZGl0aW9uXCIgW3Zpc2libGVDb25kaXRpb25dPVwidmlzaWJsZUNvbmRpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPC9hcHAtY2VlLWF0dGFjaG1lbnRzPiAtLT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L3NlY3Rpb24+XHJcbjwvbmctY29udGFpbmVyPlxyXG48IS0tIEhUTUwgRk9SIEhhbWJ1cmdlciBNZW51IC0tPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIWlzQXR0YWNobWVudEJsb2NrICYmIGlzSGFtYnVyZ2VyTWVudVwiPlxyXG4gICAgPHNlY3Rpb24gW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIlxyXG4gICAgW2F0dHIucm9sZV09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLVJvbGUnXVwiIGlkPVwibmF2YmxvY2ste3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIlxyXG4gICAgY2xhc3M9XCJzdWItbWVudS1jb250YWluZXIge3thZGRpdGlvbmFsUGFyYW1ldGVyWydkaXNwbGF5UG9zaXRpb24nXXx8J2xlZnQnfX1cIj5cclxuICAgIDxhcHAtYmxvY2stcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW2Jsb2NrSWRdPVwiYmxvY2tSZW5kZXJlZERhdGFcIlxyXG4gICAgICAgIGNsYXNzPVwiaGFtYnVyZ2VybWVudSBoYW1idXJnZXJtZW51LXt7YmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWR9fVwiXHJcbiAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICA8L2FwcC1ibG9jay1yZW5kZXJlcj5cclxuPC9zZWN0aW9uPlxyXG48L25nLWNvbnRhaW5lcj4iXX0=