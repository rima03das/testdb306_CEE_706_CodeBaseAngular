import { Component, ViewChild, HostListener, Input, forwardRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { CommonUtil } from '../../utils/common-util';
import { GenerateFieldRow } from '../../utils/generate-field-util';
import { ViewRendererComponent } from '../view-renderer/view-renderer.component';
// import { CeeAttachmentsComponent } from '../../field-components/cee-attachments/cee-attachments.component';
import { defer } from 'rxjs';
import { ProgressBarRendererComponent } from '../progress-bar-renderer/progress-bar-renderer.component';
import { BlockRendererComponent } from '../../ng-cee-core.module';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import * as i0 from "@angular/core";
import * as i1 from "@angular/cdk/overlay";
import * as i2 from "@angular/common/http";
import * as i3 from "../../models/app-data/app-data.service";
import * as i4 from "../../models/api-data/api-data.service";
import * as i5 from "../../services/shared-events-service.service";
import * as i6 from "../../services/wfe-step-loader.service";
import * as i7 from "@angular/common";
const _c0 = ["triggerBtn"];
const _c1 = ["overlayTemplate"];
const _c2 = ["floatingBox"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ stepId: a0, rootData: a1, fieldData: a2, metaFields: a3, keepState: true, rowData: a4, mandatoryCondition: a5, editableCondition: a6, visibleCondition: a7 });
function SelectComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 4, 2);
    i0.ɵɵlistener("click", function SelectComponent_ng_container_0_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleOverlay()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("", ctx_r1.fieldData.field_style.custom_class_name, "-btn");
    i0.ɵɵproperty("innerHTML", ctx_r1.processedDynamicHTML, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("role", "button")("tabindex", "0");
} }
function SelectComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 5, 2);
    i0.ɵɵlistener("click", function SelectComponent_ng_template_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.toggleOverlay()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("", ctx_r1.fieldData.field_style.custom_class_name, "-btn");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.fieldName);
} }
function SelectComponent_ng_template_3_ng_container_2_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const pos_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r1.blockRenderedData.block_id, "-", pos_r5, " ", field_r4.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r4.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r4)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r4)("position", pos_r5)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData)("rowData", ctx_r1.generateRowData(field_r4))("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition);
} }
function SelectComponent_ng_template_3_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 9);
    i0.ɵɵtemplate(1, SelectComponent_ng_template_3_ng_container_2_section_1_ng_container_1_Template, 2, 13, "ng-container", 10);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block generic-block template-", ctx_r1.templateId, " block-", ctx_r1.blockRenderedData.block_id, "  block-", ctx_r1.blockPosition, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.blockRenderedData.block_id);
    i0.ɵɵproperty("ngClass", ctx_r1.blockRenderedData.block_style && ctx_r1.blockRenderedData.block_style.custom_class_name && ctx_r1.customClassCondition ? ctx_r1.blockRenderedData.block_style.custom_class_name : "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function SelectComponent_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SelectComponent_ng_template_3_ng_container_2_section_1_Template, 2, 13, "section", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.blockRenderedData && ctx_r1.isVisible);
} }
function SelectComponent_ng_template_3_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r6 = ctx.$implicit;
    const pos_r7 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r1.blockRenderedData ? ctx_r1.blockRenderedData.block_id : ctx_r1.blockId, "-", pos_r7, " ", field_r6.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r6.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r6)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r6)("position", pos_r7)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData)("rowData", ctx_r1.generateRowData(field_r6))("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition);
} }
function SelectComponent_ng_template_3_ng_container_3_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SelectComponent_ng_template_3_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SelectComponent_ng_template_3_ng_container_3_ng_container_2_ng_container_1_Template, 2, 13, "ng-container", 10);
    i0.ɵɵelementStart(2, "div")(3, "div");
    i0.ɵɵtemplate(4, SelectComponent_ng_template_3_ng_container_3_ng_container_2_ng_container_4_Template, 1, 0, "ng-container", 13);
    i0.ɵɵpipe(5, "async");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? ctx_r1.fieldData.field_style.bootstrap_class_name : "col-12");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", ctx_r1.blockRenderedData ? ctx_r1.blockRenderedData.block_fields.length : 0, " ", ctx_r1.is_bootstrap ? ctx_r1.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(5, 11, ctx_r1.componentMap))("ngComponentOutletInputs", i0.ɵɵpureFunction8(13, _c3, ctx_r1.stepId, ctx_r1.rootData, ctx_r1.attachmentFieldData, ctx_r1.attachmentBlockField, ctx_r1.generateRowData(ctx_r1.attachmentFieldData), ctx_r1.mandatoryCondition, ctx_r1.editableCondition, ctx_r1.visibleCondition));
} }
function SelectComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 12);
    i0.ɵɵtemplate(2, SelectComponent_ng_template_3_ng_container_3_ng_container_2_Template, 6, 22, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate6("cee-block generic-block template-", ctx_r1.templateId, " block-", ctx_r1.blockRenderedData ? ctx_r1.blockRenderedData.block_id : ctx_r1.blockId, "  block-", ctx_r1.blockPosition, " ", ctx_r1.blockRenderedData && ctx_r1.blockRenderedData.block_style && ctx_r1.customClassCondition ? ctx_r1.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.blockRenderedData ? ctx_r1.blockRenderedData.block_id : ctx_r1.blockId);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.blockRenderedData);
} }
function SelectComponent_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 12);
    i0.ɵɵelement(2, "app-block-renderer", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("sub-menu-container ", ctx_r1.additionalParameter["displayPosition"] || "left", "");
    i0.ɵɵpropertyInterpolate1("id", "navblock-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("hamburgermenu hamburgermenu-", ctx_r1.blockRenderedData.block_id, "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", ctx_r1.templateId)("blockId", ctx_r1.blockRenderedData)("rootData", ctx_r1.rootData);
} }
function SelectComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 6);
    i0.ɵɵtemplate(2, SelectComponent_ng_template_3_ng_container_2_Template, 2, 1, "ng-container", 7)(3, SelectComponent_ng_template_3_ng_container_3_Template, 3, 12, "ng-container", 7)(4, SelectComponent_ng_template_3_ng_container_4_Template, 3, 14, "ng-container", 7);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.fieldData.field_style.custom_class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isAttachmentBlock && !ctx_r1.isHamburgerMenu);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isAttachmentBlock && !ctx_r1.isHamburgerMenu && ctx_r1.attachmentFieldData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isAttachmentBlock && ctx_r1.isHamburgerMenu);
} }
export class SelectComponent {
    overlay;
    positionBuilder;
    vcr;
    http;
    appDataService;
    apiDataService;
    sharedEventsServiceService;
    wfeStepLoaderService;
    cdRef;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    triggerBtn;
    overlayTemplate;
    stepId;
    fieldData;
    templateId;
    blockPosition;
    rootData;
    isAttachmentBlock;
    visibleCondition;
    editableCondition;
    mandatoryCondition;
    floatingBox;
    keepState = false;
    rowData;
    isOpen = true;
    conditionalUtil;
    overlayRef;
    isVisible;
    fieldName;
    commonUtil;
    generateUtil;
    is_bootstrap;
    variableObj = {};
    additionalParameter = {};
    blockId;
    skipLoader;
    setDynamicLabelUtil;
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
    conditionObj = {};
    isEditable = false;
    isMandatory = false;
    //rowData = {};  
    progressBlock = {};
    attachmentFieldData;
    attachmentBlockField = [];
    customClassCondition = true;
    isHamburgerMenu = false;
    processedDynamicHTML = '';
    componentMap = defer(() => {
        return import('../../field-components/cee-attachments/cee-attachments.component').then(m => m.CeeAttachmentsComponent);
    });
    constructor(overlay, positionBuilder, vcr, http, appDataService, apiDataService, sharedEventsServiceService, wfeStepLoaderService, cdRef) {
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.vcr = vcr;
        this.http = http;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.cdRef = cdRef;
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.commonUtil = new CommonUtil();
        this.generateUtil = new GenerateFieldRow(this.appDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
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
        this.stepId, this.fieldData, this.keepState, this.rowData;
        this.initializeDynamicContent();
        //this.processedDynamicHTML = this.fieldData?.field_label || this.fieldData?.field_label_config || '';
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        // this.rowData = { mandatory: this.isMandatory, editable: this.isEditable };
        if (this.fieldData.is_display === 2 || this.fieldData.is_display === 1) {
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
        this.fieldName = this.fieldData?.field_label;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = String(paramter.value);
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
    initializeDynamicContent() {
        if (this.fieldData?.field_label?.includes('((dynamic))') ||
            this.fieldData?.field_label_config?.includes('((dynamic))')) {
            const data = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
            let processedHTML = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data).field_label;
            // Handle blank image sources
            processedHTML = this.handleBlankImageSources(processedHTML);
            this.processedDynamicHTML = processedHTML;
        }
    }
    handleBlankImageSources(html) {
        // Default fallback image URL
        let defaultImageUrl = 'assets/images/marker.png';
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = String(paramter.value);
                switch (paramter.parameter_type) {
                    case 'CEE_Popover_Img':
                        defaultImageUrl = paramter.value;
                        break;
                }
            }
        }
        // Handle img tags with empty or blank src attributes
        return html.replace(/<img([^>]*?)src=['"]([^'"]*?)['"]([^>]*?)>/gi, (match, beforeSrc, srcValue, afterSrc) => {
            // Check if src is empty, blank, or just whitespace
            const trimmedSrc = srcValue.trim();
            if (!trimmedSrc || trimmedSrc === '' || trimmedSrc === 'undefined' || trimmedSrc === 'null') {
                // Replace with default image URL
                return `<img${beforeSrc}src="${defaultImageUrl}"${afterSrc}>`;
            }
            // Keep original if src has value
            return match;
        });
    }
    trackById(index, item) {
        return item.unique_id;
    }
    onFieldDataUpdated(fieldId, value) {
        const display = this.conditionalUtil.checkVisibility(this.fieldData, fieldId, value);
        if (display !== undefined) {
            this.isVisible = display;
            if (this.isVisible === true) {
                this.renderBolckData();
            }
        }
        this.initializeDynamicContent();
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
            this.isAttachmentBlock = this.blockRenderedData.block_fields;
        }
        this.cdRef.detectChanges();
    }
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
    setOverride(editable, arg1) {
        throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
        this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
    }
    generateRowData(field) {
        return this.generateUtil.generateRowData(field);
    }
    get navigateStepName() {
        return localStorage.getItem('navigateStepName') === 'true' ? true : false;
    }
    toggleOverlay() {
        if (this.overlayRef) {
            this.overlayRef.detach();
            this.overlayRef = null;
            return;
        }
        const positionStrategy = this.positionBuilder
            .flexibleConnectedTo(this.triggerBtn)
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: 5,
            },
        ])
            .withFlexibleDimensions(false)
            .withPush(false);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: true,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        const portal = new TemplatePortal(this.overlayTemplate, this.vcr);
        this.overlayRef.attach(portal);
        this.overlayRef.backdropClick().subscribe(() => this.closeOverlay());
    }
    closeOverlay() {
        if (this.overlayRef) {
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    onWindowScroll() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
            this.overlayRef = null;
        }
    }
    static ɵfac = function SelectComponent_Factory(t) { return new (t || SelectComponent)(i0.ɵɵdirectiveInject(i1.Overlay), i0.ɵɵdirectiveInject(i1.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i2.HttpClient), i0.ɵɵdirectiveInject(i3.AppDataService), i0.ɵɵdirectiveInject(i4.ApiDataService), i0.ɵɵdirectiveInject(i5.SharedEventsServiceService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SelectComponent, selectors: [["app-SelectComponent"]], viewQuery: function SelectComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.triggerBtn = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlayTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.floatingBox = _t.first);
        } }, hostBindings: function SelectComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function SelectComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", blockPosition: "blockPosition", rootData: "rootData", isAttachmentBlock: "isAttachmentBlock", visibleCondition: "visibleCondition", editableCondition: "editableCondition", mandatoryCondition: "mandatoryCondition", keepState: "keepState", rowData: "rowData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 2, consts: [["notDynamic", ""], ["overlayTemplate", ""], ["triggerBtn", ""], [4, "ngIf", "ngIfElse"], [2, "cursor", "pointer", 3, "click", "innerHTML"], [3, "click"], [1, "container"], [4, "ngIf"], [3, "id", "class", "ngClass", 4, "ngIf"], [3, "id", "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "stepId", "field", "position", "templateId", "rootData", "rowData", "mandatoryCondition", "editableCondition"], [3, "id"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "templateId", "blockId", "rootData"]], template: function SelectComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SelectComponent_ng_container_0_Template, 3, 6, "ng-container", 3)(1, SelectComponent_ng_template_1_Template, 3, 4, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, SelectComponent_ng_template_3_Template, 5, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const notDynamic_r8 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.fieldData.field_label.includes("((dynamic))") || ctx.fieldData.field_label_config && ctx.fieldData.field_label_config.includes("((dynamic))"))("ngIfElse", notDynamic_r8);
        } }, dependencies: () => [CommonModule, i7.NgClass, i7.NgComponentOutlet, i7.NgForOf, i7.NgIf, i7.AsyncPipe, FormsModule, ViewRendererComponent, BlockRendererComponent], styles: [".container[_ngcontent-%COMP%]{display:flex}.column[_ngcontent-%COMP%]{padding:10px;display:flex;flex-direction:column;gap:8px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SelectComponent, [{
        type: Component,
        args: [{ selector: 'app-SelectComponent', standalone: true, imports: [CommonModule, FormsModule, ProgressBarRendererComponent, NgIf, forwardRef(() => ViewRendererComponent), forwardRef(() => BlockRendererComponent)], template: "<!-- <button class=\"{{fieldData.field_style.custom_class_name}}-btn\" #triggerBtn (click)=\"toggleOverlay()\">{{fieldName}}</button> -->\r\n<ng-container\r\n    *ngIf=\"fieldData.field_label.includes('((dynamic))') || (fieldData.field_label_config && fieldData.field_label_config.includes('((dynamic))')) ; else notDynamic\">\r\n    <div class=\"{{fieldData.field_style.custom_class_name}}-btn\"\r\n        [innerHTML]=\"processedDynamicHTML\"\r\n         #triggerBtn\r\n        (click)=\"toggleOverlay()\"\r\n        [attr.role]=\"'button'\"\r\n        [attr.tabindex]=\"'0'\"\r\n        style=\"cursor: pointer;\"\r\n        >\r\n    </div>\r\n</ng-container>\r\n<ng-template #notDynamic>\r\n    <button class=\"{{fieldData.field_style.custom_class_name}}-btn\" #triggerBtn\r\n        (click)=\"toggleOverlay()\">{{fieldName}}</button>\r\n</ng-template>\r\n<ng-template #overlayTemplate> \r\n  <div class=\"{{fieldData.field_style.custom_class_name}}\">\r\n    <div class=\"container\">\r\n      <!-- show normal block -->\r\n\r\n<!-- HTML FOR ALL GENERIC BLOCK -->\r\n<ng-container *ngIf=\"!isAttachmentBlock && !isHamburgerMenu\">\r\n  <section id=\"{{ blockRenderedData.block_id }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\"\r\n      *ngIf=\"blockRenderedData  && isVisible\" [ngClass]=\"blockRenderedData.block_style && blockRenderedData.block_style.custom_class_name && customClassCondition ? blockRenderedData.block_style.custom_class_name : ''\">\r\n\r\n      <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n          <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n              [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n          </app-view-renderer>\r\n      </ng-container>\r\n\r\n  </section>\r\n\r\n</ng-container>\r\n<ng-container *ngIf=\"isAttachmentBlock && !isHamburgerMenu && attachmentFieldData\">\r\n  <section id=\"{{ blockRenderedData? blockRenderedData.block_id: blockId }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData? blockRenderedData.block_id: blockId }}  block-{{blockPosition}} {{(blockRenderedData && blockRenderedData.block_style && customClassCondition)?blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\">\r\n\r\n      <ng-container *ngIf=\"blockRenderedData\">\r\n\r\n          <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n              <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData? blockRenderedData.block_id: blockId }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\"\r\n                  [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n              </app-view-renderer>\r\n          </ng-container>\r\n\r\n\r\n          <div class=\"{{is_bootstrap?fieldData.field_style.bootstrap_class_name:'col-12'}}\">\r\n              <div class=\"field-{{ blockRenderedData? blockRenderedData.block_fields.length:0 }} {{is_bootstrap?fieldData.field_style.custom_class_name:''}}\">\r\n                  <ng-container *ngComponentOutlet=\"componentMap | async; \r\n                  inputs: {stepId: stepId, rootData: rootData, fieldData: attachmentFieldData, metaFields: attachmentBlockField, keepState: true, \r\n                      rowData: generateRowData(attachmentFieldData), mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                  ></ng-container>\r\n              </div>\r\n              <!-- <app-cee-attachments [stepId]=\"stepId\" [fieldData]=\"attachmentFieldData\" [metaFields]=\"attachmentBlockField\" [rootData]=\"rootData\" [keepState]=\"true\" class=\"field-{{ blockRenderedData? blockRenderedData.block_fields.length:0 }} {{is_bootstrap?fieldData.field_style.custom_class_name:''}}\"\r\n                  [rowData]=\"generateRowData(attachmentFieldData)\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n              </app-cee-attachments> -->\r\n          </div>\r\n      </ng-container>\r\n  </section>\r\n</ng-container>\r\n      <!-- HTML FOR Hamburger Menu -->\r\n      <ng-container *ngIf=\"!isAttachmentBlock && isHamburgerMenu\">\r\n        <section [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n        [attr.role]=\"additionalParameter['Aria-Role']\" id=\"navblock-{{fieldData.unique_id}}\"\r\n        class=\"sub-menu-container {{additionalParameter['displayPosition']||'left'}}\">\r\n        <app-block-renderer [stepId]=\"stepId\" [templateId]=\"templateId\" [blockId]=\"blockRenderedData\"\r\n            class=\"hamburgermenu hamburgermenu-{{blockRenderedData.block_id}}\"\r\n            [rootData]=\"rootData\">\r\n        </app-block-renderer>\r\n    </section>\r\n    </ng-container>\r\n    </div>\r\n  </div>\r\n</ng-template>", styles: [".container{display:flex}.column{padding:10px;display:flex;flex-direction:column;gap:8px}\n"] }]
    }], () => [{ type: i1.Overlay }, { type: i1.OverlayPositionBuilder }, { type: i0.ViewContainerRef }, { type: i2.HttpClient }, { type: i3.AppDataService }, { type: i4.ApiDataService }, { type: i5.SharedEventsServiceService }, { type: i6.WfeStepLoaderService }, { type: i0.ChangeDetectorRef }], { triggerBtn: [{
            type: ViewChild,
            args: ['triggerBtn']
        }], overlayTemplate: [{
            type: ViewChild,
            args: ['overlayTemplate']
        }], stepId: [{
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
        }], floatingBox: [{
            type: ViewChild,
            args: ['floatingBox']
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], onWindowScroll: [{
            type: HostListener,
            args: ['window:scroll', []]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SelectComponent, { className: "SelectComponent", filePath: "lib\\components\\Popover\\Popover.component.ts", lineNumber: 40 }); })();
function orwardRef(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUG9wb3Zlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9Qb3BvdmVyL1BvcG92ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvUG9wb3Zlci9Qb3BvdmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsU0FBUyxFQUFlLFlBQVksRUFBRSxLQUFLLEVBQTBDLFVBQVUsRUFBUyxNQUFNLGVBQWUsQ0FBQztBQVE5SixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0scUJBQXFCLENBQUM7QUFFckQsT0FBTyxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFLN0MsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUVuRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVqRiw4R0FBOEc7QUFDOUcsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QixPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSwwREFBMEQsQ0FBQztBQUN4RyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUNs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LFNBQVM7MkJBQ0UscUJBQXFCLGNBR25CLElBQUksV0FFUCxDQUFDLFlBQVksRUFBRSxXQUFXLEVBQUUsNEJBQTRCLEVBQUUsSUFBSSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDOzJTQU1sSSxVQUFVO2tCQUFsQyxTQUFTO21CQUFDLFlBQVk7WUFDTyxlQUFlO2tCQUE1QyxTQUFTO21CQUFDLGlCQUFpQjtZQUNYLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLGFBQWE7a0JBQXJCLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ29CLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYTtZQUNmLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFtYU4sY0FBYztrQkFEYixZQUFZO21CQUFDLGVBQWUsRUFBRSxFQUFFOztrRkFsYnRCLGVBQWU7QUEyYjVCLFNBQVMsU0FBUyxDQUFDLElBQXdDO0lBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBpbXBvcnRQcm92aWRlcnNGcm9tLCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiwgaW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7XHJcbiAgT3ZlcmxheSxcclxuICBPdmVybGF5UmVmLFxyXG4gIE92ZXJsYXlQb3NpdGlvbkJ1aWxkZXIsXHJcbiAgQ29ubmVjdGVkUG9zaXRpb24sXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL292ZXJsYXknO1xyXG5pbXBvcnQgeyBUZW1wbGF0ZVBvcnRhbCB9IGZyb20gJ0Bhbmd1bGFyL2Nkay9wb3J0YWwnO1xyXG5pbXBvcnQgeyBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdJZiB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25hbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtY29uZGl0aW9uYWwtdXRpbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IENoaWxkQ29uZGl0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoaWxkQ29uZGl0aW9uLm1vZGVsJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEdlbmVyYXRlRmllbGRSb3cgfSBmcm9tICcuLi8uLi91dGlscy9nZW5lcmF0ZS1maWVsZC11dGlsJztcclxuaW1wb3J0IHsgQXBwRGF0YSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5tb2RlbCc7XHJcbmltcG9ydCB7IFZpZXdSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL3ZpZXctcmVuZGVyZXIvdmlldy1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVIdG1sIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbi8vIGltcG9ydCB7IENlZUF0dGFjaG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYXR0YWNobWVudHMvY2VlLWF0dGFjaG1lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRlZmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IFByb2dyZXNzQmFyUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9wcm9ncmVzcy1iYXItcmVuZGVyZXIvcHJvZ3Jlc3MtYmFyLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsb2NrUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9uZy1jZWUtY29yZS5tb2R1bGUnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGFiZWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHluYW1pYy1sYWJlbC11dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLVNlbGVjdENvbXBvbmVudCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL1BvcG92ZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL1BvcG92ZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG5cclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUHJvZ3Jlc3NCYXJSZW5kZXJlckNvbXBvbmVudCwgTmdJZiwgZm9yd2FyZFJlZigoKSA9PiBWaWV3UmVuZGVyZXJDb21wb25lbnQpLCBmb3J3YXJkUmVmKCgpID0+IEJsb2NrUmVuZGVyZXJDb21wb25lbnQpXVxyXG4gIFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU2VsZWN0Q29tcG9uZW50IHtcclxuICBhdXRvUHJldmlld0NvbmZpZ1BhdGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRU5BQkxFX0FVVE9fUFJFVklFVycpPy50b0xvd2VyQ2FzZSgpID09IFwidHJ1ZVwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBVVRPX1BSRVZJRVdfQ09ORklHX1BBVEgnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBVVRPX1BSRVZJRVdfQ09ORklHX1BBVEgnKSA6ICdhc3NldHMvY29uZmlnJztcclxuICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG4gIEBWaWV3Q2hpbGQoJ3RyaWdnZXJCdG4nKSB0cmlnZ2VyQnRuITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdvdmVybGF5VGVtcGxhdGUnKSBvdmVybGF5VGVtcGxhdGUhOiBUZW1wbGF0ZVJlZjxhbnk+O1xyXG4gIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICBASW5wdXQoKSB0ZW1wbGF0ZUlkOiBhbnk7XHJcbiAgQElucHV0KCkgYmxvY2tQb3NpdGlvbjogbnVtYmVyO1xyXG4gIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICBASW5wdXQoKSBpc0F0dGFjaG1lbnRCbG9jazogYW55O1xyXG4gIEBJbnB1dCgpIHZpc2libGVDb25kaXRpb246IENoaWxkQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBDaGlsZENvbmRpdGlvbjtcclxuICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IENoaWxkQ29uZGl0aW9uOyAgXHJcbiAgQFZpZXdDaGlsZCgnZmxvYXRpbmdCb3gnKSBmbG9hdGluZ0JveCE6IEVsZW1lbnRSZWY7XHJcbiAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7IFxyXG4gIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICBpc09wZW4gPSB0cnVlO1xyXG4gIFxyXG5cclxuICBjb25kaXRpb25hbFV0aWw6IENvbmRpdGlvbmFsVXRpbDtcclxuXHJcbiAgcHJpdmF0ZSBvdmVybGF5UmVmITogT3ZlcmxheVJlZjtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgZmllbGROYW1lOiBzdHJpbmc7XHJcbiAgY29tbW9uVXRpbDogQ29tbW9uVXRpbDtcclxuICBnZW5lcmF0ZVV0aWw6IEdlbmVyYXRlRmllbGRSb3c7XHJcbiAgaXNfYm9vdHN0cmFwOiBib29sZWFuOyBcclxuICB2YXJpYWJsZU9iaiA9IHt9O1xyXG4gIGFkZGl0aW9uYWxQYXJhbWV0ZXIgPSB7fTtcclxuICBibG9ja0lkOiBhbnk7XHJcbiAgc2tpcExvYWRlcjogYm9vbGVhbjtcclxuICBzZXREeW5hbWljTGFiZWxVdGlsOiBEeW5hbWljTGFiZWxVdGlsO1xyXG4gIGFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICBpZDogJycsXHJcbiAgICBzdGVwSWQ6ICcnLFxyXG4gICAgYXBpS2V5OiAnR2VuZXJpYyBCbG9jaycsXHJcbiAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgaXNWYWxpZDogdHJ1ZVxyXG4gIH07XHJcbiAgYmxvY2tSZW5kZXJlZERhdGE6IGFueTsgIFxyXG4gIGNvbmRpdGlvbk9iaiA9IHt9O1xyXG4gIGlzRWRpdGFibGUgPSBmYWxzZTsgIFxyXG4gIGlzTWFuZGF0b3J5ID0gZmFsc2U7ICBcclxuICAvL3Jvd0RhdGEgPSB7fTsgIFxyXG4gIHByb2dyZXNzQmxvY2s6IGFueSA9IHt9OyAgXHJcbiAgYXR0YWNobWVudEZpZWxkRGF0YTogYW55O1xyXG4gIGF0dGFjaG1lbnRCbG9ja0ZpZWxkOiBhbnkgPSBbXTtcclxuICBjdXN0b21DbGFzc0NvbmRpdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcbiAgaXNIYW1idXJnZXJNZW51OiBib29sZWFuID0gZmFsc2U7XHJcbiAgcHJvY2Vzc2VkRHluYW1pY0hUTUw6IFNhZmVIdG1sID0gJyc7XHJcbmNvbXBvbmVudE1hcCA9IGRlZmVyKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1hdHRhY2htZW50cy9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQXR0YWNobWVudHNDb21wb25lbnQpO1xyXG4gICAgfSk7ICBcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHByaXZhdGUgb3ZlcmxheTogT3ZlcmxheSxcclxuICAgIHByaXZhdGUgcG9zaXRpb25CdWlsZGVyOiBPdmVybGF5UG9zaXRpb25CdWlsZGVyLFxyXG4gICAgcHJpdmF0ZSB2Y3I6IFZpZXdDb250YWluZXJSZWYsXHJcbiAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgIHByaXZhdGUgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSBzaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICBwcml2YXRlIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgXHJcblxyXG4gICkge1xyXG4gICAgdGhpcy5jb25kaXRpb25hbFV0aWwgPSBuZXcgQ29uZGl0aW9uYWxVdGlsKGZhbHNlLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgIHRoaXMuZ2VuZXJhdGVVdGlsID0gbmV3IEdlbmVyYXRlRmllbGRSb3codGhpcy5hcHBEYXRhU2VydmljZSk7XHJcbiAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwgPSBuZXcgRHluYW1pY0xhYmVsVXRpbChhcGlEYXRhU2VydmljZSwgYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHRoaXMuaXNfYm9vdHN0cmFwID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2htZW50QmxvY2spIHtcclxuICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbiA9IHtcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgZmllbGRzOiBbXSxcclxuICAgICAgICBleGNlcHRpb25GaWVsZHM6IFtdLFxyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGVBbGw6IGZhbHNlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uID0ge1xyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICAgIGV4Y2VwdGlvbkZpZWxkczogW10sXHJcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcclxuICAgICAgICBvdmVycmlkZUFsbDogZmFsc2VcclxuICAgICAgfTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICAvLyBjb25zb2xlLmxvZygncm9vdCBkYXRhJywgdGhpcy5yb290RGF0YSk7XHJcbiAgICAgIHRoaXMuc3RlcElkLCB0aGlzLmZpZWxkRGF0YSwgdGhpcy5rZWVwU3RhdGUsIHRoaXMucm93RGF0YTtcclxuICAgICAgdGhpcy5pbml0aWFsaXplRHluYW1pY0NvbnRlbnQoKTtcclxuICAgICAgLy90aGlzLnByb2Nlc3NlZER5bmFtaWNIVE1MID0gdGhpcy5maWVsZERhdGE/LmZpZWxkX2xhYmVsIHx8IHRoaXMuZmllbGREYXRhPy5maWVsZF9sYWJlbF9jb25maWcgfHwgJyc7XHJcbiAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZGlzcGxheSA9PT0gMSkge1xyXG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy5yb3dEYXRhID0geyBtYW5kYXRvcnk6IHRoaXMuaXNNYW5kYXRvcnksIGVkaXRhYmxlOiB0aGlzLmlzRWRpdGFibGUgfTtcclxuICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc19kaXNwbGF5ID09PSAyIHx8IHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgY29uc3QgZW1pdE9iaiA9IHtcclxuICAgICAgICBhcGlLZXk6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfTsgICAgICBcclxuICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkLmVtaXQoZW1pdE9iaik7XHJcbiAgICAgIHRoaXMudmFyaWFibGVPYmpbJ2VtaXRPbkRhdGFTZXRPclVwZGF0ZWRfJyArIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF0gPVxyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLm9uRmllbGREYXRhVXBkYXRlZChyZXMuYXBpS2V5LCByZXMudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB0aGlzLnZhcmlhYmxlT2JqWydlbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlXycgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdID1cclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRBcGlTdWNjZXNzUmVzcG9uc2Uuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vbkZpZWxkRGF0YVVwZGF0ZWQobnVsbCwgbnVsbCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpZWxkTmFtZSA9IHRoaXMuZmllbGREYXRhPy5maWVsZF9sYWJlbDtcclxuICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gU3RyaW5nKHBhcmFtdGVyLnZhbHVlKTtcclxuICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdkZWZhdWx0X3ZhbHVlJzpcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0lkID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnU2tpcExvYWRlcic6XHJcbiAgICAgICAgICAgIHRoaXMuc2tpcExvYWRlciA9IHBhcmFtdGVyLnZhbHVlID09PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmJsb2NrSWQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1Zpc2libGUgPT09IHRydWUpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyQm9sY2tEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmlzQXR0YWNobWVudEJsb2NrKSB7XHJcbiAgICAgICAgICB0aGlzLmF0dGFjaG1lbnRGaWVsZERhdGEgPSBPYmplY3QuYXNzaWduKHtcclxuICAgICAgICAgICAgaXNBdHRhY2htZW50QmxvY2s6IHRydWVcclxuICAgICAgICAgIH0sIHRoaXMuZmllbGREYXRhKTtcclxuICAgICAgICAgIHRoaXMuYXR0YWNobWVudEZpZWxkRGF0YS5maWVsZF90eXBlID0gJ0F0dGFjaG1lbnRzJztcclxuICAgICAgICAgIC8vICAgdGhpcy5hdHRhY2htZW50RmllbGREYXRhLnVuaXF1ZV9pZCA9ICdhdHRhY2htZW50X2ZpZWxkXycgKyB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkO1xyXG4gICAgICAgICAgdGhpcy5hdHRhY2htZW50RmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5zcGxpY2UodGhpcy5hdHRhY2htZW50RmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maW5kSW5kZXgoaSA9PiBpLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgLy8gc2V0IHByb2dyZXNzIGJhclxyXG4gICAgICB0aGlzLnNldFByb2dyZXNzQmxvY2tSZW5kZXJlcigpO1xyXG4gICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZGlzcGxheSA9PT0gMikge1xyXG4gICAgICAgIGNvbnN0IGVtaXRPYmogPSB7XHJcbiAgICAgICAgICBhcGlLZXk6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICAgIHZhbHVlOiAnJ1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkLmVtaXQoZW1pdE9iaik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF90eXBlICE9IFwiQXR0YWNobWVudCBCbG9ja1wiKSB7XHJcbiAgICAgIHRoaXMuYXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLFxyXG4gICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgYXBpS2V5OiAnR2VuZXJpYyBCbG9jaycsXHJcbiAgICAgICAgbGlua2VkQmxvY2tJZDogdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihlID0+IGUucGFyYW1ldGVyX3R5cGUgPT09IFwiZGVmYXVsdF92YWx1ZVwiKS5sZW5ndGggPiAwID8gdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihlID0+IGUucGFyYW1ldGVyX3R5cGUgPT09IFwiZGVmYXVsdF92YWx1ZVwiKVswXVsndmFsdWUnXSA6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IHRoaXMuaXNNYW5kYXRvcnksXHJcbiAgICAgICAgZWRpdGFibGU6IHRoaXMuaXNFZGl0YWJsZSxcclxuICAgICAgICB2aXNpYmxlOiB0aGlzLmlzVmlzaWJsZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLmFkZEFwcERhdGEodGhpcy5hcHBEYXRhKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaW5pdGlhbGl6ZUR5bmFtaWNDb250ZW50KCk6IHZvaWQge1xyXG4gICAgIGlmICh0aGlzLmZpZWxkRGF0YT8uZmllbGRfbGFiZWw/LmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpIHx8IFxyXG4gICAgIHRoaXMuZmllbGREYXRhPy5maWVsZF9sYWJlbF9jb25maWc/LmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICBjb25zdCBkYXRhID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5maWVsZERhdGEudW5pcXVlX2lkKTtcclxuICAgICAgIGxldCBwcm9jZXNzZWRIVE1MID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSkuZmllbGRfbGFiZWw7XHJcbiAgICAgICBcclxuICAgICAgIC8vIEhhbmRsZSBibGFuayBpbWFnZSBzb3VyY2VzXHJcbiAgICAgICBwcm9jZXNzZWRIVE1MID0gdGhpcy5oYW5kbGVCbGFua0ltYWdlU291cmNlcyhwcm9jZXNzZWRIVE1MKTtcclxuICAgICAgIFxyXG4gICAgICAgdGhpcy5wcm9jZXNzZWREeW5hbWljSFRNTCA9IHByb2Nlc3NlZEhUTUw7XHJcbiAgICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBoYW5kbGVCbGFua0ltYWdlU291cmNlcyhodG1sOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgIC8vIERlZmF1bHQgZmFsbGJhY2sgaW1hZ2UgVVJMXHJcbiAgICAgbGV0IGRlZmF1bHRJbWFnZVVybCA9ICdhc3NldHMvaW1hZ2VzL21hcmtlci5wbmcnO1xyXG5cclxuICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gU3RyaW5nKHBhcmFtdGVyLnZhbHVlKTtcclxuICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdDRUVfUG9wb3Zlcl9JbWcnOlxyXG4gICAgICAgICAgICBkZWZhdWx0SW1hZ2VVcmwgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgYnJlYWs7ICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9IFxyXG4gIFxyXG4gIC8vIEhhbmRsZSBpbWcgdGFncyB3aXRoIGVtcHR5IG9yIGJsYW5rIHNyYyBhdHRyaWJ1dGVzXHJcbiAgcmV0dXJuIGh0bWwucmVwbGFjZSgvPGltZyhbXj5dKj8pc3JjPVsnXCJdKFteJ1wiXSo/KVsnXCJdKFtePl0qPyk+L2dpLCAobWF0Y2gsIGJlZm9yZVNyYywgc3JjVmFsdWUsIGFmdGVyU3JjKSA9PiB7XHJcbiAgICAvLyBDaGVjayBpZiBzcmMgaXMgZW1wdHksIGJsYW5rLCBvciBqdXN0IHdoaXRlc3BhY2VcclxuICAgIGNvbnN0IHRyaW1tZWRTcmMgPSBzcmNWYWx1ZS50cmltKCk7XHJcbiAgICBcclxuICAgIGlmICghdHJpbW1lZFNyYyB8fCB0cmltbWVkU3JjID09PSAnJyB8fCB0cmltbWVkU3JjID09PSAndW5kZWZpbmVkJyB8fCB0cmltbWVkU3JjID09PSAnbnVsbCcpIHtcclxuICAgICAgLy8gUmVwbGFjZSB3aXRoIGRlZmF1bHQgaW1hZ2UgVVJMXHJcbiAgICAgIHJldHVybiBgPGltZyR7YmVmb3JlU3JjfXNyYz1cIiR7ZGVmYXVsdEltYWdlVXJsfVwiJHthZnRlclNyY30+YDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLy8gS2VlcCBvcmlnaW5hbCBpZiBzcmMgaGFzIHZhbHVlXHJcbiAgICByZXR1cm4gbWF0Y2g7XHJcbiAgfSk7XHJcbn1cclxuXHJcblxyXG5cclxuICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgIHJldHVybiBpdGVtLnVuaXF1ZV9pZDtcclxuICB9XHJcbiAgXHJcbiAgcHJpdmF0ZSBvbkZpZWxkRGF0YVVwZGF0ZWQoZmllbGRJZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KHRoaXMuZmllbGREYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICBpZiAoZGlzcGxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gZGlzcGxheTtcclxuICAgICAgaWYgKHRoaXMuaXNWaXNpYmxlID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJCb2xja0RhdGEoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5pdGlhbGl6ZUR5bmFtaWNDb250ZW50KCk7XHJcbiAgfVxyXG4gIHJlbmRlckJvbGNrRGF0YSgpIHsgICAgXHJcbiAgICBpZih3aW5kb3dbJ2Jsb2NrTG9ncyddID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgIHdpbmRvd1snYmxvY2tMb2dzJ10gPSAgW107XHJcbiAgICAgICAgd2luZG93WydibG9ja0RhdGFMb2dzJ10gPSAgW107XHJcbiAgICB9ICAgIFxyXG4gICAgaWYgKHdpbmRvd1snYmxvY2tMb2dzJ10gJiYgd2luZG93WydibG9ja0xvZ3MnXS5pbmRleE9mKHRoaXMuYmxvY2tJZCkgPT09IC0xKSB7XHJcbiAgICAgICAgd2luZG93WydibG9ja0xvZ3MnXS5wdXNoKHRoaXMuYmxvY2tJZCk7XHJcbiAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkZXJTZXJ2aWNlLnNraXBMb2FkaW5nID0gdGhpcy5za2lwTG9hZGVyO1xyXG4gICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKHRoaXMuYmxvY2tJZCkuc3Vic2NyaWJlKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHdpbmRvd1snYmxvY2tEYXRhTG9ncyddLnB1c2goeyBibG9ja0lkOiB0aGlzLmJsb2NrSWQsIGJsb2NrRGF0YTogZGF0YSB9KTtcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzQmxvY2tEYXRhKGRhdGEpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSBlbHNlIGlmKHdpbmRvd1snYmxvY2tEYXRhTG9ncyddKSB7XHJcbiAgICAgICAgbGV0IGJsb2NrRGF0YSA9IHdpbmRvd1snYmxvY2tEYXRhTG9ncyddLmZpbHRlcihlPT57aWYoZS5ibG9ja0lkID09IHRoaXMuYmxvY2tJZCkgcmV0dXJuIGUuYmxvY2tEYXRhfSkubGVuZ3RoID4gMCA/IHdpbmRvd1snYmxvY2tEYXRhTG9ncyddLmZpbHRlcihlPT57aWYoZS5ibG9ja0lkID09IHRoaXMuYmxvY2tJZCkgcmV0dXJuIGUuYmxvY2tEYXRhfSlbMF0uYmxvY2tEYXRhIDogdW5kZWZpbmVkO1xyXG4gICAgICAgIGlmKGJsb2NrRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3NCbG9ja0RhdGEoYmxvY2tEYXRhKTsgXHJcbiAgICAgICAgfVxyXG4gICAgfSAgICAgIFxyXG59XHJcbnByb2Nlc3NCbG9ja0RhdGEoZGF0YSkge1xyXG4gIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGRhdGEpO1xyXG4gIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX25hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2hhbWJ1cmdlcm1lbnUnKSB7XHJcbiAgICAgIHRoaXMuaXNIYW1idXJnZXJNZW51ID0gdHJ1ZTtcclxuICB9XHJcbiAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgIGNhc2UgJ092ZXJyaWRlQ29uZGl0aW9ucyc6XHJcbiAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci52YWx1ZSAmJiBwYXJhbXRlci52YWx1ZSAhPT0gJ05PTkUnICYmIHBhcmFtdGVyLnZhbHVlICE9PSAnQUxMJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAodmFsID0+IHZhbC50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24uZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbi5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnZpc2libGVDb25kaXRpb24uZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGNhc2UgJ0V4Y2VwdGlvbkNvbmRpdGlvbnMnOlxyXG4gICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfCcpLm1hcCh2YWwgPT4gdmFsLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLmV4Y2VwdGlvbkZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbi5leGNlcHRpb25GaWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMudmlzaWJsZUNvbmRpdGlvbi5leGNlcHRpb25GaWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIC8vIHN1YnNjcmliZSB0byBmaWVsZCBjaGFuZ2VzXHJcbiAgaWYgKCh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF92aXNpYmxlLmxlbmd0aCA+IDApIHx8XHJcbiAgICAgICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlICYmIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUubGVuZ3RoID4gMCkgfHxcclxuICAgICAgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfbWFuZGF0b3J5ICYmIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfbWFuZGF0b3J5Lmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIHRoaXMudmFyaWFibGVPYmpbdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCArICdfZW1pdE9uRGF0YVNldE9yVXBkYXRlZEZvckdlbmVyaWNCbG9jayddID1cclxuICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZEZvckdlbmVyaWNCbG9jay5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgdGhpcy5vbkZpZWxkRGF0YVVwZGF0ZWRGb3JHZW5lcmljQmxvY2socmVzLmFwaUtleSwgcmVzLnZhbHVlKTtcclxuICAgICAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGFbJ2N1c3RvbV9jbGFzc19jb25kaXRpb24nXSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhWydjdXN0b21fY2xhc3NfY29uZGl0aW9uJ10uaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YVsnY3VzdG9tX2NsYXNzX2NvbmRpdGlvbiddWydxdWVyeSddICE9ICcnKSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3NDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0N1c3RvbUNsYXNzKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLCAnJyk7XHJcbiAgICAgIHRoaXMudmFyaWFibGVPYmpbdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCArICdfZW1pdE9uRGF0YVNldE9yVXBkYXRlZCddID1cclxuICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQocmVzLnZhbHVlKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICAvKiBpZiAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF92aXNpYmxlICYmIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMudmlzaWJsZUNvbmRpdGlvbi5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgfSAqL1xyXG5cclxuICBpZiAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9lZGl0YWJsZSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlLmxlbmd0aCA+IDApIHtcclxuICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbi5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBpZiAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbi5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgfVxyXG5cclxuICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW3RoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWRdID0gW107XHJcbiAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHMpIHtcclxuICAgICAgdGhpcy5yb290RGF0YVsnYmxvY2tGaWVsZHMnXVt0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkXS5wdXNoKGZpZWxkLnVuaXF1ZV9pZCk7XHJcbiAgfVxyXG4gIGlmICh0aGlzLmlzQXR0YWNobWVudEJsb2NrKSB7XHJcbiAgICAgIHRoaXMuaXNBdHRhY2htZW50QmxvY2sgPSB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcztcclxuICB9XHJcblxyXG4gIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG59XHJcbnNldFByb2dyZXNzQmxvY2tSZW5kZXJlcigpIHtcclxuICBsZXQgY3VyclN0ZXAgPSB0aGlzLnN0ZXBJZDtcclxuICBpZiAodGhpcy5uYXZpZ2F0ZVN0ZXBOYW1lICYmIHRoaXMuc3RlcElkLmluY2x1ZGVzKCctJykpIHtcclxuICAgICAgY29uc3QgZGF0YSA9IGN1cnJTdGVwLnNwbGl0KCctJyk7XHJcbiAgICAgIGN1cnJTdGVwID0gZGF0YVtkYXRhLmxlbmd0aCAtIDFdO1xyXG4gIH1cclxuICBjb25zdCB3b3JrZmxvd1NlcXVlbmNlSW5kZXggPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldFdvcmtmbG93U2VxdWVuY2VJbmRleEZyb21TdGVwKGN1cnJTdGVwKTtcclxuICBpZiAoIXdvcmtmbG93U2VxdWVuY2VJbmRleCkge1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgfVxyXG4gIGNvbnN0IHByb2dyZXNzRGF0YSA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UucHJvZ3Jlc3NCYXJNYXBbXHJcbiAgICAgIHdvcmtmbG93U2VxdWVuY2VJbmRleC5zZXF1ZW5jZV0gfHwge307XHJcbiAgaWYgKHByb2dyZXNzRGF0YS5wcm9ncmVzcyAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1Byb2dyZXNzQmxvY2tJZCddKSB7XHJcbiAgICAgIGlmIChwcm9ncmVzc0RhdGEucHJvZ3Jlc3MucHJvZ3Jlc3NfYmFyX2lkID09PSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1Byb2dyZXNzQmxvY2tJZCddKSB7XHJcbiAgICAgICAgICB0aGlzLnByb2dyZXNzQmxvY2sgPSBwcm9ncmVzc0RhdGE7XHJcbiAgICAgIH1cclxuICB9XHJcblxyXG59XHJcbnByaXZhdGUgb25GaWVsZERhdGFVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrKGZpZWxkSWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ092ZXJyaWRlQ29uZGl0aW9ucyddICE9PSAnTk9ORScpIHtcclxuICAgICAgLyogY29uc3QgZGlzcGxheSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eSh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgIGlmIChkaXNwbGF5ICE9PSB1bmRlZmluZWQgJiYgdGhpcy5pc0ZpZWxkRGlzcGxheSA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gZGlzcGxheTtcclxuICAgICAgICAgIHRoaXMudmlzaWJsZUNvbmRpdGlvbi52YWx1ZSA9IGRpc3BsYXk7XHJcbiAgICAgICAgICB0aGlzLnNldE92ZXJyaWRlKGRpc3BsYXksICd2aXNpYmxlQ29uZGl0aW9uJyk7XHJcbiAgICAgIH0gKi9cclxuICAgICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgaWYgKGVkaXRhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoaXMuZWRpdGFibGVDb25kaXRpb24udmFsdWUgPSBlZGl0YWJsZTtcclxuICAgICAgICAgIHRoaXMuc2V0T3ZlcnJpZGUoZWRpdGFibGUsICdlZGl0YWJsZUNvbmRpdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICAgIGNvbnN0IG1hbmRhdG9yeSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrTWFuZGF0b3J5KHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgaWYgKG1hbmRhdG9yeSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbi52YWx1ZSA9IG1hbmRhdG9yeTtcclxuICAgICAgICAgIHRoaXMuc2V0T3ZlcnJpZGUobWFuZGF0b3J5LCAnbWFuZGF0b3J5Q29uZGl0aW9uJyk7XHJcbiAgICAgIH1cclxuICAgICAgLy8gdGhpcy52aXNpYmxlQ29uZGl0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnZpc2libGVDb25kaXRpb24pKTtcclxuXHJcbiAgICAgIHRoaXMuZWRpdGFibGVDb25kaXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZWRpdGFibGVDb25kaXRpb24pKTtcclxuXHJcbiAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbikpO1xyXG4gIH1cclxufVxyXG4gIHNldE92ZXJyaWRlKGVkaXRhYmxlOiBhbnksIGFyZzE6IHN0cmluZykge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gIH1cclxuICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgIHRoaXMuY3VzdG9tQ2xhc3NDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0N1c3RvbUNsYXNzKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLCAnJyk7XHJcbn1cclxuXHJcbmdlbmVyYXRlUm93RGF0YShmaWVsZCkge1xyXG4gIHJldHVybiB0aGlzLmdlbmVyYXRlVXRpbC5nZW5lcmF0ZVJvd0RhdGEoZmllbGQpO1xyXG59XHJcbmdldCBuYXZpZ2F0ZVN0ZXBOYW1lKCkge1xyXG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmF2aWdhdGVTdGVwTmFtZScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbn1cclxuXHJcbiAgdG9nZ2xlT3ZlcmxheSgpIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsITtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9uU3RyYXRlZ3kgPSB0aGlzLnBvc2l0aW9uQnVpbGRlclxyXG4gICAgICAuZmxleGlibGVDb25uZWN0ZWRUbyh0aGlzLnRyaWdnZXJCdG4pXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgICAgIG9mZnNldFk6IDUsXHJcbiAgICAgICAgfSBhcyBDb25uZWN0ZWRQb3NpdGlvbixcclxuICAgICAgXSlcclxuICAgICBcclxuICAgICAgLndpdGhGbGV4aWJsZURpbWVuc2lvbnMoZmFsc2UpXHJcbiAgICAgIC53aXRoUHVzaChmYWxzZSk7XHJcblxyXG4gICAgdGhpcy5vdmVybGF5UmVmID0gdGhpcy5vdmVybGF5LmNyZWF0ZSh7XHJcbiAgICAgIHBvc2l0aW9uU3RyYXRlZ3ksXHJcbiAgICAgIGhhc0JhY2tkcm9wOiB0cnVlLFxyXG4gICAgICBzY3JvbGxTdHJhdGVneTogdGhpcy5vdmVybGF5LnNjcm9sbFN0cmF0ZWdpZXMucmVwb3NpdGlvbigpLFxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcG9ydGFsID0gbmV3IFRlbXBsYXRlUG9ydGFsKHRoaXMub3ZlcmxheVRlbXBsYXRlLCB0aGlzLnZjcik7XHJcbiAgICB0aGlzLm92ZXJsYXlSZWYuYXR0YWNoKHBvcnRhbCk7XHJcbiAgIHRoaXMub3ZlcmxheVJlZi5iYWNrZHJvcENsaWNrKCkuc3Vic2NyaWJlKCgpID0+IHRoaXMuY2xvc2VPdmVybGF5KCkpO1xyXG4gIH1cclxuICBjbG9zZU92ZXJsYXkoKSB7XHJcbiAgICBpZiAodGhpcy5vdmVybGF5UmVmKSB7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kaXNwb3NlKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZiA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpzY3JvbGwnLCBbXSlcclxuICBvbldpbmRvd1Njcm9sbCgpIHtcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRldGFjaCgpO1xyXG4gICAgICB0aGlzLm92ZXJsYXlSZWYgPSBudWxsITtcclxuICAgIH1cclxuICB9ICBcclxuICBcclxufVxyXG5mdW5jdGlvbiBvcndhcmRSZWYoYXJnMDogKCkgPT4gdHlwZW9mIFZpZXdSZW5kZXJlckNvbXBvbmVudCk6IHJlYWRvbmx5IGFueVtdIHwgaW1wb3J0KFwiQGFuZ3VsYXIvY29yZVwiKS5UeXBlPGFueT4ge1xyXG4gIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLicpO1xyXG59XHJcblxyXG4iLCI8IS0tIDxidXR0b24gY2xhc3M9XCJ7e2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZX19LWJ0blwiICN0cmlnZ2VyQnRuIChjbGljayk9XCJ0b2dnbGVPdmVybGF5KClcIj57e2ZpZWxkTmFtZX19PC9idXR0b24+IC0tPlxyXG48bmctY29udGFpbmVyXHJcbiAgICAqbmdJZj1cImZpZWxkRGF0YS5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSB8fCAoZmllbGREYXRhLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiBmaWVsZERhdGEuZmllbGRfbGFiZWxfY29uZmlnLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSA7IGVsc2Ugbm90RHluYW1pY1wiPlxyXG4gICAgPGRpdiBjbGFzcz1cInt7ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lfX0tYnRuXCJcclxuICAgICAgICBbaW5uZXJIVE1MXT1cInByb2Nlc3NlZER5bmFtaWNIVE1MXCJcclxuICAgICAgICAgI3RyaWdnZXJCdG5cclxuICAgICAgICAoY2xpY2spPVwidG9nZ2xlT3ZlcmxheSgpXCJcclxuICAgICAgICBbYXR0ci5yb2xlXT1cIididXR0b24nXCJcclxuICAgICAgICBbYXR0ci50YWJpbmRleF09XCInMCdcIlxyXG4gICAgICAgIHN0eWxlPVwiY3Vyc29yOiBwb2ludGVyO1wiXHJcbiAgICAgICAgPlxyXG4gICAgPC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG48bmctdGVtcGxhdGUgI25vdER5bmFtaWM+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwie3tmaWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWV9fS1idG5cIiAjdHJpZ2dlckJ0blxyXG4gICAgICAgIChjbGljayk9XCJ0b2dnbGVPdmVybGF5KClcIj57e2ZpZWxkTmFtZX19PC9idXR0b24+XHJcbjwvbmctdGVtcGxhdGU+XHJcbjxuZy10ZW1wbGF0ZSAjb3ZlcmxheVRlbXBsYXRlPiBcclxuICA8ZGl2IGNsYXNzPVwie3tmaWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWV9fVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgICA8IS0tIHNob3cgbm9ybWFsIGJsb2NrIC0tPlxyXG5cclxuPCEtLSBIVE1MIEZPUiBBTEwgR0VORVJJQyBCTE9DSyAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc0F0dGFjaG1lbnRCbG9jayAmJiAhaXNIYW1idXJnZXJNZW51XCI+XHJcbiAgPHNlY3Rpb24gaWQ9XCJ7eyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCB9fVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogdW5kZWZpbmVkXCIgW2F0dHIucm9sZV09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLVJvbGUnXVwiIGNsYXNzPVwiY2VlLWJsb2NrIGdlbmVyaWMtYmxvY2sgdGVtcGxhdGUte3t0ZW1wbGF0ZUlkfX0gYmxvY2ste3sgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX0gIGJsb2NrLXt7YmxvY2tQb3NpdGlvbn19IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tpc1Zpc2libGU/ICd2aXNhYmxlLXNlY3Rpb24nOicnfX1cIlxyXG4gICAgICAqbmdJZj1cImJsb2NrUmVuZGVyZWREYXRhICAmJiBpc1Zpc2libGVcIiBbbmdDbGFzc109XCJibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19zdHlsZSAmJiBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSAmJiBjdXN0b21DbGFzc0NvbmRpdGlvbiA/IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lIDogJydcIj5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkczsgaW5kZXggYXMgcG9zOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgIDxhcHAtdmlldy1yZW5kZXJlciBjbGFzcz1cImFwcC12aWV3LXJlbmRlcmVyLXt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19LXt7cG9zfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIiBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZF09XCJmaWVsZFwiIFtwb3NpdGlvbl09XCJwb3NcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCJcclxuICAgICAgICAgICAgICBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbcm93RGF0YV09XCJnZW5lcmF0ZVJvd0RhdGEoZmllbGQpXCIgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJtYW5kYXRvcnlDb25kaXRpb25cIiBbZWRpdGFibGVDb25kaXRpb25dPVwiZWRpdGFibGVDb25kaXRpb25cIj5cclxuICAgICAgICAgIDwvYXBwLXZpZXctcmVuZGVyZXI+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICA8L3NlY3Rpb24+XHJcblxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzQXR0YWNobWVudEJsb2NrICYmICFpc0hhbWJ1cmdlck1lbnUgJiYgYXR0YWNobWVudEZpZWxkRGF0YVwiPlxyXG4gIDxzZWN0aW9uIGlkPVwie3sgYmxvY2tSZW5kZXJlZERhdGE/IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkOiBibG9ja0lkIH19XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIiBbYXR0ci5yb2xlXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtUm9sZSddXCIgY2xhc3M9XCJjZWUtYmxvY2sgZ2VuZXJpYy1ibG9jayB0ZW1wbGF0ZS17e3RlbXBsYXRlSWR9fSBibG9jay17eyBibG9ja1JlbmRlcmVkRGF0YT8gYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQ6IGJsb2NrSWQgfX0gIGJsb2NrLXt7YmxvY2tQb3NpdGlvbn19IHt7KGJsb2NrUmVuZGVyZWREYXRhICYmIGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlICYmIGN1c3RvbUNsYXNzQ29uZGl0aW9uKT9ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tpc1Zpc2libGU/ICd2aXNhYmxlLXNlY3Rpb24nOicnfX1cIj5cclxuXHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJibG9ja1JlbmRlcmVkRGF0YVwiPlxyXG5cclxuICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkczsgaW5kZXggYXMgcG9zOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgICAgICA8YXBwLXZpZXctcmVuZGVyZXIgY2xhc3M9XCJhcHAtdmlldy1yZW5kZXJlci17eyBibG9ja1JlbmRlcmVkRGF0YT8gYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQ6IGJsb2NrSWQgfX0te3twb3N9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgW3Bvc2l0aW9uXT1cInBvc1wiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbcm93RGF0YV09XCJnZW5lcmF0ZVJvd0RhdGEoZmllbGQpXCIgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJtYW5kYXRvcnlDb25kaXRpb25cIiBbZWRpdGFibGVDb25kaXRpb25dPVwiZWRpdGFibGVDb25kaXRpb25cIj5cclxuICAgICAgICAgICAgICA8L2FwcC12aWV3LXJlbmRlcmVyPlxyXG4gICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ7e2lzX2Jvb3RzdHJhcD9maWVsZERhdGEuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWU6J2NvbC0xMid9fVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBibG9ja1JlbmRlcmVkRGF0YT8gYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzLmxlbmd0aDowIH19IHt7aXNfYm9vdHN0cmFwP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwIHwgYXN5bmM7IFxyXG4gICAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCBmaWVsZERhdGE6IGF0dGFjaG1lbnRGaWVsZERhdGEsIG1ldGFGaWVsZHM6IGF0dGFjaG1lbnRCbG9ja0ZpZWxkLCBrZWVwU3RhdGU6IHRydWUsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgcm93RGF0YTogZ2VuZXJhdGVSb3dEYXRhKGF0dGFjaG1lbnRGaWVsZERhdGEpLCBtYW5kYXRvcnlDb25kaXRpb246IG1hbmRhdG9yeUNvbmRpdGlvbiwgZWRpdGFibGVDb25kaXRpb246IGVkaXRhYmxlQ29uZGl0aW9uLCB2aXNpYmxlQ29uZGl0aW9uOiB2aXNpYmxlQ29uZGl0aW9ufVwiXHJcbiAgICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8IS0tIDxhcHAtY2VlLWF0dGFjaG1lbnRzIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkRGF0YV09XCJhdHRhY2htZW50RmllbGREYXRhXCIgW21ldGFGaWVsZHNdPVwiYXR0YWNobWVudEJsb2NrRmllbGRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBba2VlcFN0YXRlXT1cInRydWVcIiBjbGFzcz1cImZpZWxkLXt7IGJsb2NrUmVuZGVyZWREYXRhPyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHMubGVuZ3RoOjAgfX0ge3tpc19ib290c3RyYXA/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICBbcm93RGF0YV09XCJnZW5lcmF0ZVJvd0RhdGEoYXR0YWNobWVudEZpZWxkRGF0YSlcIiBbbWFuZGF0b3J5Q29uZGl0aW9uXT1cIm1hbmRhdG9yeUNvbmRpdGlvblwiIFtlZGl0YWJsZUNvbmRpdGlvbl09XCJlZGl0YWJsZUNvbmRpdGlvblwiIFt2aXNpYmxlQ29uZGl0aW9uXT1cInZpc2libGVDb25kaXRpb25cIj5cclxuICAgICAgICAgICAgICA8L2FwcC1jZWUtYXR0YWNobWVudHM+IC0tPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gIDwvc2VjdGlvbj5cclxuPC9uZy1jb250YWluZXI+XHJcbiAgICAgIDwhLS0gSFRNTCBGT1IgSGFtYnVyZ2VyIE1lbnUgLS0+XHJcbiAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNBdHRhY2htZW50QmxvY2sgJiYgaXNIYW1idXJnZXJNZW51XCI+XHJcbiAgICAgICAgPHNlY3Rpb24gW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIlxyXG4gICAgICAgIFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1Sb2xlJ11cIiBpZD1cIm5hdmJsb2NrLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCJcclxuICAgICAgICBjbGFzcz1cInN1Yi1tZW51LWNvbnRhaW5lciB7e2FkZGl0aW9uYWxQYXJhbWV0ZXJbJ2Rpc3BsYXlQb3NpdGlvbiddfHwnbGVmdCd9fVwiPlxyXG4gICAgICAgIDxhcHAtYmxvY2stcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW2Jsb2NrSWRdPVwiYmxvY2tSZW5kZXJlZERhdGFcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImhhbWJ1cmdlcm1lbnUgaGFtYnVyZ2VybWVudS17e2Jsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkfX1cIlxyXG4gICAgICAgICAgICBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuICAgICAgICA8L2FwcC1ibG9jay1yZW5kZXJlcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvbmctdGVtcGxhdGU+Il19