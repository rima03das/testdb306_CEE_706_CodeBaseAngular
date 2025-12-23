import { Component, Input, HostListener } from '@angular/core';
import { CommonUtil } from '../../utils/common-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { GenerateFieldRow } from '../../utils/generate-field-util';
import { ViewRendererComponent } from '../view-renderer/view-renderer.component';
import { CommonModule, NgSwitch } from '@angular/common';
import { DynamicRendererComponent } from '../dynamic-renderer/dynamic-renderer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
import * as i3 from "../../services/shared-events-service.service";
import * as i4 from "../../models/app-data/app-data.service";
import * as i5 from "../../models/api-data/api-data.service";
import * as i6 from "../../services/wfe-step-loader.service";
import * as i7 from "@angular/common";
function BlockRendererComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-dynamic-renderer", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("cee_loader cee_loader_", ctx_r0.blockRenderedData.block_id, "");
} }
function BlockRendererComponent_ng_container_0_ng_container_3_header_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r2 = ctx.$implicit;
    const pos_r3 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r0.blockRenderedData.block_id, "-", pos_r3, " ", field_r2.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r2.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r2)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r2)("position", pos_r3)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition)("visibleCondition", ctx_r0.visibleCondition);
} }
function BlockRendererComponent_ng_container_0_ng_container_3_header_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "header", 7);
    i0.ɵɵtemplate(1, BlockRendererComponent_ng_container_0_ng_container_3_header_1_ng_container_1_Template, 2, 13, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block block-header  template-", ctx_r0.templateId, " block-", ctx_r0.blockRenderedData.block_id, "  block-", ctx_r0.blockPosition, " ", ctx_r0.blockRenderedData.block_style ? ctx_r0.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.blockRenderedData.block_id);
    i0.ɵɵproperty("hidden", ctx_r0.loader.showSection || !ctx_r0.isVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.blockRenderedData.block_fields)("ngForTrackBy", ctx_r0.trackById);
} }
function BlockRendererComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BlockRendererComponent_ng_container_0_ng_container_3_header_1_Template, 2, 11, "header", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.blockRenderedData);
} }
function BlockRendererComponent_ng_container_0_ng_container_4_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "li", 12);
    i0.ɵɵelement(2, "app-view-renderer", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    const pos_r6 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate4("app-view-renderer-", ctx_r0.blockRenderedData.block_id, "-", pos_r6, " ", field_r5.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r5.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r5)) : "", " ", ctx_r0.setActiveItem(field_r5), "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r5)("position", pos_r6)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition)("visibleCondition", ctx_r0.visibleCondition);
} }
function BlockRendererComponent_ng_container_0_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 7)(1, "button", 10);
    i0.ɵɵlistener("click", function BlockRendererComponent_ng_container_0_ng_container_4_div_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.toggleNav()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "nav")(3, "ul", 11);
    i0.ɵɵtemplate(4, BlockRendererComponent_ng_container_0_ng_container_4_div_1_ng_container_4_Template, 3, 14, "ng-container", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block block-navbar   template-", ctx_r0.templateId, " block-", ctx_r0.blockRenderedData.block_id, "  block-", ctx_r0.blockPosition, " ", ctx_r0.blockRenderedData.block_style ? ctx_r0.blockRenderedData.block_style.custom_class_name : "", "  ", ctx_r0.hiddennavContainerCssClass, "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.blockRenderedData.block_id);
    i0.ɵɵproperty("hidden", ctx_r0.loader.showSection || !ctx_r0.isVisible);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate2("nav-container ", ctx_r0.hiddenNavCssClass, "  ", ctx_r0.additionalParameter["slidePosition"] || "top", "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.blockRenderedData.block_fields)("ngForTrackBy", ctx_r0.trackById);
} }
function BlockRendererComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BlockRendererComponent_ng_container_0_ng_container_4_div_1_Template, 5, 17, "div", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.blockRenderedData);
} }
function BlockRendererComponent_ng_container_0_ng_container_5_footer_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r7 = ctx.$implicit;
    const pos_r8 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r0.blockRenderedData.block_id, "-", pos_r8, " ", field_r7.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r7.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r7)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r7)("position", pos_r8)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition)("visibleCondition", ctx_r0.visibleCondition)("rowData", ctx_r0.generateRowData(field_r7));
} }
function BlockRendererComponent_ng_container_0_ng_container_5_footer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "footer", 7);
    i0.ɵɵtemplate(1, BlockRendererComponent_ng_container_0_ng_container_5_footer_1_ng_container_1_Template, 2, 14, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block block-footer template-", ctx_r0.templateId, " block-", ctx_r0.blockRenderedData.block_id, "  block-", ctx_r0.blockPosition, " ", ctx_r0.blockRenderedData.block_style ? ctx_r0.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.blockRenderedData.block_id);
    i0.ɵɵproperty("hidden", ctx_r0.loader.showSection || !ctx_r0.isVisible);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.blockRenderedData.block_fields)("ngForTrackBy", ctx_r0.trackById);
} }
function BlockRendererComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BlockRendererComponent_ng_container_0_ng_container_5_footer_1_Template, 2, 11, "footer", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.blockRenderedData);
} }
function BlockRendererComponent_ng_container_0_ng_container_6_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const pos_r10 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r0.blockRenderedData.block_id, "-", pos_r10, " ", field_r9.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r9.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, ctx_r0.rootData.templateClass, ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r9)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r9)("position", pos_r10)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition)("visibleCondition", ctx_r0.visibleCondition)("rowData", ctx_r0.generateRowData(field_r9));
} }
function BlockRendererComponent_ng_container_0_ng_container_6_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 15);
    i0.ɵɵtemplate(1, BlockRendererComponent_ng_container_0_ng_container_6_section_1_ng_container_1_Template, 2, 14, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block template-", ctx_r0.templateId, " block-", ctx_r0.blockRenderedData.block_id, "  block-", ctx_r0.blockPosition, " ", ctx_r0.blockRenderedData.block_style ? ctx_r0.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.blockRenderedData.block_id);
    i0.ɵɵproperty("hidden", ctx_r0.loader.showSection || !ctx_r0.isVisible);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.blockRenderedData.block_fields)("ngForTrackBy", ctx_r0.trackById);
} }
function BlockRendererComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BlockRendererComponent_ng_container_0_ng_container_6_section_1_Template, 2, 13, "section", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.blockRenderedData);
} }
function BlockRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, BlockRendererComponent_ng_container_0_div_1_Template, 2, 3, "div", 1);
    i0.ɵɵelementContainerStart(2, 2);
    i0.ɵɵtemplate(3, BlockRendererComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 3)(4, BlockRendererComponent_ng_container_0_ng_container_4_Template, 2, 1, "ng-container", 3)(5, BlockRendererComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 3)(6, BlockRendererComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.loader.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", ctx_r0.blockRenderedData.block_name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Header");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Hamburgermenu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Footer");
} }
export class BlockRendererComponent {
    http;
    router;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    cdRef;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    blockId;
    blockPosition;
    templateId;
    rootData;
    blockRenderedData;
    emitterObj = {};
    isVisible = true;
    additionalParameter = {};
    is_bootstrap = false;
    commonUtil;
    conditionalUtil;
    generateUtil;
    loader = {
        name: 'CEE_LOADER',
        showSection: false
    };
    mandatoryCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    editableCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    visibleCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    hiddenNavCssClass = '';
    hiddennavContainerCssClass = '';
    constructor(http, router, sharedEventsService, appDataService, apiDataService, wfeStepLoaderService, cdRef) {
        this.http = http;
        this.router = router;
        this.sharedEventsService = sharedEventsService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.cdRef = cdRef;
        this.commonUtil = new CommonUtil();
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.generateUtil = new GenerateFieldRow(this.appDataService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    trackById(index, item) {
        return item.unique_id;
    }
    async ngOnInit() {
        let data = this.wfeStepLoaderService.searchBlockDataFromCache(this.blockId);
        if (!data) {
            data = typeof (this.blockId) === 'string' ?
                await this.wfeStepLoaderService.loadBlockByName(this.blockId).toPromise() : this.blockId;
        }
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        this.cdRef.detectChanges();
        this.toggleNav();
        this.emitterObj[this.blockRenderedData.block_id + '_toggle_nav'] = this.sharedEventsService.hamburgermenuEmitter.subscribe((res) => {
            this.toggleNav();
        });
        if (this.blockRenderedData.additional_parameters && this.blockRenderedData.additional_parameters.length > 0) {
            for (const paramter of this.blockRenderedData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'Loader Handler name':
                        this.emitterObj[this.blockRenderedData.block_id + '_customSectionLoaderEmitter'] =
                            this.sharedEventsService.customSectionLoaderEmitter.subscribe((res) => {
                                if (this.additionalParameter['Loader Handler name'].split('|').map(str => str.trim()).includes(res.handlerName)) {
                                    this.loader.showSection = res.loading;
                                }
                            });
                        break;
                    case 'OverrideConditions':
                        if (paramter.value && paramter.value !== 'NONE' && paramter.value !== 'ALL') {
                            const fields = paramter.value.split('|').map(val => val.trim());
                            this.mandatoryCondition.fields = fields;
                            this.editableCondition.fields = fields;
                            this.visibleCondition.fields = fields;
                        }
                        break;
                    case 'ExceptionConditions':
                        const fields = paramter.value.split('|').map(val => val.trim());
                        this.mandatoryCondition.exceptionFields = fields;
                        this.editableCondition.exceptionFields = fields;
                        this.visibleCondition.exceptionFields = fields;
                        break;
                    case 'expand':
                        this.toggleNav();
                        break;
                    default:
                }
            }
        }
        // subscribe to field changes
        if (this.blockRenderedData.conditional_visible) {
            if (this.blockRenderedData.conditional_visible.length > 0 ||
                this.blockRenderedData.conditional_editable.length > 0 ||
                this.blockRenderedData.conditional_mandatory.length > 0) {
                this.emitterObj[this.blockRenderedData.block_id + '_emitOnDataSetOrUpdatedForBlock'] =
                    this.sharedEventsService.emitOnDataSetOrUpdatedForBlock.subscribe((res) => {
                        this.onFieldDataUpdated(res.apiKey, res.value);
                    });
            }
            if (this.blockRenderedData.conditional_visible.length > 0) {
                this.visibleCondition.isActive = true;
            }
        }
        if (this.blockRenderedData.conditional_editable && this.blockRenderedData.conditional_editable.length > 0) {
            this.editableCondition.isActive = true;
        }
        if (this.blockRenderedData.conditional_mandatory && this.blockRenderedData.conditional_mandatory.length > 0) {
            this.mandatoryCondition.isActive = true;
        }
        if (!this.rootData && Object.keys(this.rootData).length) {
            if (this.wfeStepLoaderService.rootData && Object.keys(this.wfeStepLoaderService.rootData).length) {
                this.rootData = this.wfeStepLoaderService.rootData;
            }
            else {
                this.rootData = {};
                this.rootData['blockFields'] = {};
            }
        }
        this.rootData['blockFields'][this.blockRenderedData.block_id] = [];
        for (let field of this.blockRenderedData.block_fields) {
            this.rootData['blockFields'][this.blockRenderedData.block_id].push(field.unique_id);
        }
    }
    // Uses cases for the following function
    // 1: override NONE child can override r override all false;
    // 2: override ALL child cannot override;
    // 3: when value is false child cannot override
    // 4: when value is true and override condition is not NONE or ALL and override condition
    // has pipe separated field values then only those fields will be overridden set override to true
    onFieldDataUpdated(fieldId, value) {
        if (this.additionalParameter.OverrideConditions !== 'NONE') {
            const display = this.conditionalUtil.checkVisibility(this.blockRenderedData, fieldId, value);
            if (display !== undefined) {
                this.isVisible = display;
                this.visibleCondition.value = display;
                this.setOverride(display, 'visibleCondition');
            }
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
            this.visibleCondition = JSON.parse(JSON.stringify(this.visibleCondition));
            this.editableCondition = JSON.parse(JSON.stringify(this.editableCondition));
            this.mandatoryCondition = JSON.parse(JSON.stringify(this.mandatoryCondition));
        }
    }
    setOverride(property, value) {
        if (!this.additionalParameter.hasOwnProperty('OverrideConditions')) {
            return;
        }
        // use case 1
        if (this.additionalParameter.OverrideConditions === 'NONE') {
            this[value].overrideAll = false;
            this[value].override = false;
        }
        // use case 2 and 3
        if (!property || this.additionalParameter.OverrideConditions === 'ALL') {
            this[value].overrideAll = true;
            this[value].override = true;
        }
        // use case 4
        if (property && this.additionalParameter.OverrideConditions !== 'NONE' &&
            this.additionalParameter.OverrideConditions !== 'ALL' &&
            this[value].fields.length > 0) {
            this[value].overrideAll = false;
            this[value].override = true;
        }
    }
    ngOnDestroy() {
        for (const key in this.emitterObj) {
            if (this.emitterObj[key]) {
                this.emitterObj[key].unsubscribe();
            }
        }
    }
    generateRowData(field) {
        return this.generateUtil.generateRowData(field);
    }
    toggleNav() {
        this.hiddennavContainerCssClass = (this.hiddennavContainerCssClass) ? '' : 'hidden-nav-container';
        this.hiddenNavCssClass = (this.hiddenNavCssClass) ? '' : 'hidden-nav';
        window['navOpenStaus'] = (this.hiddenNavCssClass) ? false : true;
    }
    setActiveItem(field) {
        const activeItem = window.localStorage.getItem('active_item');
        if (activeItem && field.unique_id === activeItem) {
            return 'active-item';
        }
        return '';
    }
    onDocumentClick(event) {
        const clickedElement = event.target;
        // Check if SidebarCloseConfig is enabled
        if (this.additionalParameter['SidebarCloseConfig']) {
            const configValues = this.additionalParameter['SidebarCloseConfig'].split('|');
            const isEnabled = configValues[0]?.trim().toLowerCase() === 'true';
            const ctrlName = configValues[1]?.trim();
            if (isEnabled && ctrlName) {
                // Target the specific sidebar by ID
                const sidebarElement = document.getElementById(this?.blockId?.block_id);
                const hamburgerBtn = document.querySelector('[class*="hamburger"]');
                // Only proceed if the sidebar exists
                if (sidebarElement) {
                    const clickedInsideSidebar = sidebarElement.contains(clickedElement);
                    const clickedOnHamburger = hamburgerBtn && hamburgerBtn.contains(clickedElement);
                    // Check if clicked element is a navigation element (link, button with navigation)
                    const isNavigationElement = this.isNavigationElement(clickedElement);
                    // Close sidebar if:
                    // 1. Clicked outside both sidebar and hamburger, OR
                    // 2. Clicked inside sidebar on a navigation element
                    if (!clickedInsideSidebar && !clickedOnHamburger) {
                        this.closeNav(ctrlName);
                    }
                    else if (clickedInsideSidebar && isNavigationElement) {
                        // Close sidebar on navigation elements inside sidebar
                        setTimeout(() => this.closeNav(ctrlName), 100); // Small delay to ensure navigation starts
                    }
                }
            }
        }
    }
    isNavigationElement(element) {
        // Check if element or its parents are navigation elements
        let currentElement = element;
        while (currentElement && currentElement !== document.body) {
            // Check for links
            if (currentElement.tagName.toLowerCase() === 'a') {
                const href = currentElement.href;
                return href && href !== '#' && href !== 'javascript:void(0)';
            }
            // Check for buttons with navigation attributes
            if (currentElement.tagName.toLowerCase() === 'button' || currentElement.getAttribute('role') === 'button') {
                const hasNavAttributes = currentElement.hasAttribute('routerLink') ||
                    currentElement.hasAttribute('ng-reflect-router-link') ||
                    currentElement.getAttribute('data-navigate') ||
                    currentElement.classList.contains('nav-link') ||
                    currentElement.classList.contains('navigation') ||
                    currentElement.classList.contains('menu-btn') ||
                    currentElement.classList.contains('menu-item') ||
                    currentElement.getAttribute('aria-label')?.toLowerCase().includes('click on');
                if (hasNavAttributes)
                    return true;
            }
            // Check for elements with navigation classes or attributes
            if (currentElement.classList.contains('menu-item') ||
                currentElement.classList.contains('nav-item') ||
                currentElement.classList.contains('menu-btn') ||
                currentElement.hasAttribute('routerLink') ||
                currentElement.hasAttribute('ng-reflect-router-link') ||
                currentElement.getAttribute('aria-label')?.toLowerCase().includes('click on')) {
                return true;
            }
            currentElement = currentElement.parentElement;
        }
        return false;
    }
    closeNav(ctrlName) {
        const selector = `input[id*="${ctrlName}"]`;
        const checkbox = document.querySelector(selector);
        if (checkbox && checkbox.type === 'checkbox') {
            checkbox.checked = false;
            checkbox.dispatchEvent(new Event('change', { bubbles: true }));
        }
    }
    static ɵfac = function BlockRendererComponent_Factory(t) { return new (t || BlockRendererComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BlockRendererComponent, selectors: [["app-block-renderer"]], hostBindings: function BlockRendererComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("click", function BlockRendererComponent_click_HostBindingHandler($event) { return ctx.onDocumentClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { stepId: "stepId", blockId: "blockId", blockPosition: "blockPosition", templateId: "templateId", rootData: "rootData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "class", 4, "ngIf"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["moduleName", "CEE_LOADER"], [3, "hidden", "id", "class", 4, "ngIf"], [3, "hidden", "id"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "stepId", "field", "position", "templateId", "rootData", "mandatoryCondition", "editableCondition", "visibleCondition"], [1, "navbar-toggler", "toggle-btn", 3, "click"], [1, "navbar-nav", "mr-auto"], [1, "nav-item"], [3, "stepId", "field", "position", "templateId", "rootData", "mandatoryCondition", "editableCondition", "visibleCondition", "rowData"], [3, "id", "class", "hidden", 4, "ngIf"], [3, "id", "hidden"]], template: function BlockRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BlockRendererComponent_ng_container_0_Template, 7, 5, "ng-container", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.blockRenderedData);
        } }, dependencies: [DynamicRendererComponent, NgSwitch, ViewRendererComponent, CommonModule, i7.NgForOf, i7.NgIf, i7.NgSwitchCase, i7.NgSwitchDefault], styles: [".block-header[_ngcontent-%COMP%]{grid-area:header}.nav-container[_ngcontent-%COMP%]{transform:translate(0)}.nav-container.right[_ngcontent-%COMP%]{transform:translate(0) scaleX(1);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.right.hidden-nav[_ngcontent-%COMP%]{transform:translate(100%) scaleX(0);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.left[_ngcontent-%COMP%]{transform:translate(0) scaleX(1);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.left.hidden-nav[_ngcontent-%COMP%]{transform:translate(-100%) scaleX(0);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.top[_ngcontent-%COMP%]{-webkit-transform:translateY(0px) scaleY(1);-moz-transform:translateY(0px) scaleY(1);transform:translateY(0) scaleY(1);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.top.hidden-nav[_ngcontent-%COMP%]{-webkit-transform:translateY(-200%) scaleY(0);-moz-transform:translateY(-200%) scaleY(0);transform:translateY(-100%) scaleY(0);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.ham-backpop[_ngcontent-%COMP%]{background:#f4f4f480;width:100vw;height:100vh;position:absolute}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BlockRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-block-renderer', standalone: true, imports: [DynamicRendererComponent, NgSwitch, ViewRendererComponent, CommonModule], template: "<!-- <section id=\"{{ blockRenderedData.block_id }}\"\r\n    class=\"cee-block template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}}\" *ngIf=\"blockRenderedData\"\r\n    [ngClass]=\"{ 'Header':'block-header', 'Footer':'block-footer', 'menu':'block-menu'}[blockRenderedData.block_name]\">\r\n    <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos\">\r\n        <app-view-renderer [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"></app-view-renderer>\r\n    </ng-container>\r\n</section> -->\r\n<ng-container *ngIf=\"blockRenderedData\">\r\n    <div *ngIf=\"loader.showSection\" class=\"cee_loader cee_loader_{{blockRenderedData.block_id}}\">\r\n        <app-dynamic-renderer moduleName=\"CEE_LOADER\"></app-dynamic-renderer>\r\n    </div>\r\n    <ng-container [ngSwitch]=\"blockRenderedData.block_name\">\r\n        <ng-container *ngSwitchCase=\"'Header'\">\r\n            <header [hidden]=\"loader.showSection || !isVisible\" id=\"{{ blockRenderedData.block_id }}\" class=\"cee-block block-header  template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{blockRenderedData.block_style?blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                *ngIf=\"blockRenderedData\">\r\n\r\n                <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                    <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n                        [rootData]=\"rootData\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n                    </app-view-renderer>\r\n                </ng-container>\r\n            </header>\r\n        </ng-container>\r\n        <!-- Hamburgermenu  -->\r\n        <ng-container *ngSwitchCase=\"'Hamburgermenu'\">\r\n            <div [hidden]=\"loader.showSection || !isVisible\" id=\"{{ blockRenderedData.block_id }}\" class=\"cee-block block-navbar   template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{blockRenderedData.block_style?blockRenderedData.block_style.custom_class_name:''}}  {{hiddennavContainerCssClass}}\"\r\n                *ngIf=\"blockRenderedData\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\">\r\n\r\n                <button class=\"navbar-toggler toggle-btn\" (click)=\"toggleNav()\"></button>\r\n\r\n                <nav class=\"nav-container {{ hiddenNavCssClass }}  {{additionalParameter['slidePosition']||'top'}}\">\r\n                    <!-- <div class=\"ham-backpop\" (click)=\"toggleNav()\"></div> -->\r\n                    <ul class=\"navbar-nav mr-auto\">\r\n\r\n                        <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <li class=\"nav-item\">\r\n\r\n                                <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}} {{setActiveItem(field)}}\" [stepId]=\"stepId\" [field]=\"field\"\r\n                                    [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n                                </app-view-renderer>\r\n                            </li>\r\n                        </ng-container>\r\n                    </ul>\r\n                </nav>\r\n            </div>\r\n        </ng-container>\r\n        <!-- Hamburgermenu End -->\r\n        <ng-container *ngSwitchCase=\"'Footer'\">\r\n            <footer [hidden]=\"loader.showSection || !isVisible\" id=\"{{ blockRenderedData.block_id }}\" class=\"cee-block block-footer template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{blockRenderedData.block_style?blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                *ngIf=\"blockRenderedData\">\r\n\r\n                <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                    <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n                        [rootData]=\"rootData\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\" [rowData]=\"generateRowData(field)\">\r\n                    </app-view-renderer>\r\n                </ng-container>\r\n            </footer>\r\n        </ng-container>\r\n        <ng-container *ngSwitchDefault>\r\n            <section id=\"{{ blockRenderedData.block_id }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{blockRenderedData.block_style?blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                *ngIf=\"blockRenderedData\" [hidden]=\"loader.showSection || !isVisible\">\r\n\r\n                <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                    <app-view-renderer class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, rootData.templateClass, conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [field]=\"field\"\r\n                        [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\" [rowData]=\"generateRowData(field)\">\r\n                    </app-view-renderer>\r\n                </ng-container>\r\n            </section>\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-container>", styles: [".block-header{grid-area:header}.nav-container{transform:translate(0)}.nav-container.right{transform:translate(0) scaleX(1);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.right.hidden-nav{transform:translate(100%) scaleX(0);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.left{transform:translate(0) scaleX(1);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.left.hidden-nav{transform:translate(-100%) scaleX(0);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.top{-webkit-transform:translateY(0px) scaleY(1);-moz-transform:translateY(0px) scaleY(1);transform:translateY(0) scaleY(1);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.nav-container.top.hidden-nav{-webkit-transform:translateY(-200%) scaleY(0);-moz-transform:translateY(-200%) scaleY(0);transform:translateY(-100%) scaleY(0);-webkit-transition:all .5s ease-in-out;-moz-transition:all .5s ease-in-out;transition:all .5s ease-in-out}.ham-backpop{background:#f4f4f480;width:100vw;height:100vh;position:absolute}\n"] }]
    }], () => [{ type: i1.HttpClient }, { type: i2.Router }, { type: i3.SharedEventsServiceService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i0.ChangeDetectorRef }], { stepId: [{
            type: Input
        }], blockId: [{
            type: Input
        }], blockPosition: [{
            type: Input
        }], templateId: [{
            type: Input
        }], rootData: [{
            type: Input
        }], onDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BlockRendererComponent, { className: "BlockRendererComponent", filePath: "lib\\components\\block-renderer\\block-renderer.component.ts", lineNumber: 23 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmxvY2stcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYmxvY2stcmVuZGVyZXIvYmxvY2stcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYmxvY2stcmVuZGVyZXIvYmxvY2stcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdDLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUdyRyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFLckQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBRW5FLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDBDQUEwQyxDQUFDO0FBQ2pGLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDekQsT0FBTyxFQUFFLHdCQUF3QixFQUFFLE1BQU0sZ0RBQWdELENBQUM7Ozs7Ozs7Ozs7SUNMdEYsMkJBQTZGO0lBQ3pGLDBDQUFxRTtJQUN6RSxpQkFBTTs7O0lBRjBCLDBGQUE0RDs7O0lBUWhGLDZCQUFxRztJQUNqRyx1Q0FFb0I7Ozs7OztJQUZELGNBQW9PO0lBQXBPLHlTQUFvTztJQUMzSSxBQUF4QyxBQUExQyxBQUF0QixBQUR1UyxBQUFqQixBQUFoQixBQUFsQixzQ0FBaUIs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QXdDOztZQUF6Qiw0Q0FBdUI7NEJEWXhCLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxZQUFZOztpRkFHeEUsc0JBQXNCO2NBUmxDLFNBQVM7MkJBQ0ksb0JBQW9CLGNBR2xCLElBQUksV0FDUCxDQUFDLHdCQUF3QixFQUFFLFFBQVEsRUFBRSxxQkFBcUIsRUFBRSxZQUFZLENBQUM7c09BT2pFLE1BQU07a0JBQXRCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxhQUFhO2tCQUFyQixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUF3T04sZUFBZTtrQkFEZCxZQUFZO21CQUFDLGdCQUFnQixFQUFFLENBQUMsUUFBUSxDQUFDOztrRkEvT2pDLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDaGlsZENvbmRpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jaGlsZENvbmRpdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXV0aWwnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2VuZXJhdGVGaWVsZFJvdyB9IGZyb20gJy4uLy4uL3V0aWxzL2dlbmVyYXRlLWZpZWxkLXV0aWwnO1xyXG5pbXBvcnQgeyBWaWV3UmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi92aWV3LXJlbmRlcmVyL3ZpZXctcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N3aXRjaCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IER5bmFtaWNSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL2R5bmFtaWMtcmVuZGVyZXIvZHluYW1pYy1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWJsb2NrLXJlbmRlcmVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9ibG9jay1yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9ibG9jay1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtEeW5hbWljUmVuZGVyZXJDb21wb25lbnQsIE5nU3dpdGNoLCBWaWV3UmVuZGVyZXJDb21wb25lbnQsIENvbW1vbk1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCbG9ja1JlbmRlcmVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG5cclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBibG9ja0lkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBibG9ja1Bvc2l0aW9uOiBudW1iZXI7XHJcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZUlkOiBhbnk7XHJcbiAgICBASW5wdXQoKSByb290RGF0YT86IGFueTtcclxuXHJcbiAgICBibG9ja1JlbmRlcmVkRGF0YTogYW55O1xyXG4gICAgZW1pdHRlck9iaiA9IHt9O1xyXG4gICAgaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXI6IGFueSA9IHt9O1xyXG4gICAgaXNfYm9vdHN0cmFwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG4gICAgY29uZGl0aW9uYWxVdGlsOiBDb25kaXRpb25hbFV0aWw7XHJcbiAgICBnZW5lcmF0ZVV0aWw6IEdlbmVyYXRlRmllbGRSb3c7XHJcbiAgICBsb2FkZXIgPSB7XHJcbiAgICAgICAgbmFtZTogJ0NFRV9MT0FERVInLFxyXG4gICAgICAgIHNob3dTZWN0aW9uOiBmYWxzZVxyXG4gICAgfTtcclxuICAgIG1hbmRhdG9yeUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb24gPSB7XHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgZXhjZXB0aW9uRmllbGRzOiBbXSxcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlQWxsOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBlZGl0YWJsZUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb24gPSB7XHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgZXhjZXB0aW9uRmllbGRzOiBbXSxcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlQWxsOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICB2aXNpYmxlQ29uZGl0aW9uOiBDaGlsZENvbmRpdGlvbiA9IHtcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgZmllbGRzOiBbXSxcclxuICAgICAgICBleGNlcHRpb25GaWVsZHM6IFtdLFxyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGVBbGw6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgaGlkZGVuTmF2Q3NzQ2xhc3M6IGFueSA9ICcnO1xyXG4gICAgaGlkZGVubmF2Q29udGFpbmVyQ3NzQ2xhc3M6IGFueSA9ICcnO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVXRpbCA9IG5ldyBDb25kaXRpb25hbFV0aWwoZmFsc2UsIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVV0aWwgPSBuZXcgR2VuZXJhdGVGaWVsZFJvdyh0aGlzLmFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzX2Jvb3RzdHJhcCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5pc19ib290c3RyYXAgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmFja0J5SWQoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gaXRlbS51bmlxdWVfaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnNlYXJjaEJsb2NrRGF0YUZyb21DYWNoZSh0aGlzLmJsb2NrSWQpO1xyXG4gICAgICAgIGlmKCFkYXRhKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSB0eXBlb2YgKHRoaXMuYmxvY2tJZCkgPT09ICdzdHJpbmcnID9cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUodGhpcy5ibG9ja0lkKS50b1Byb21pc2UoKSA6IHRoaXMuYmxvY2tJZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YSA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgdGhpcy50b2dnbGVOYXYoKTtcclxuICAgICAgICB0aGlzLmVtaXR0ZXJPYmpbdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCsnX3RvZ2dsZV9uYXYnXT10aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuaGFtYnVyZ2VybWVudUVtaXR0ZXIuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50b2dnbGVOYXYoKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTG9hZGVyIEhhbmRsZXIgbmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlck9ialt0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkICsgJ19jdXN0b21TZWN0aW9uTG9hZGVyRW1pdHRlciddID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5jdXN0b21TZWN0aW9uTG9hZGVyRW1pdHRlci5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTG9hZGVyIEhhbmRsZXIgbmFtZSddLnNwbGl0KCd8JykubWFwKHN0ciA9PiBzdHIudHJpbSgpKS5pbmNsdWRlcyhyZXMuaGFuZGxlck5hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGVyLnNob3dTZWN0aW9uID0gcmVzLmxvYWRpbmc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ092ZXJyaWRlQ29uZGl0aW9ucyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci52YWx1ZSAmJiBwYXJhbXRlci52YWx1ZSAhPT0gJ05PTkUnICYmIHBhcmFtdGVyLnZhbHVlICE9PSAnQUxMJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAodmFsID0+IHZhbC50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24uZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbi5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVDb25kaXRpb24uZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0V4Y2VwdGlvbkNvbmRpdGlvbnMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfCcpLm1hcCh2YWwgPT4gdmFsLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLmV4Y2VwdGlvbkZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbi5leGNlcHRpb25GaWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZUNvbmRpdGlvbi5leGNlcHRpb25GaWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdleHBhbmQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRvZ2dsZU5hdigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gZmllbGQgY2hhbmdlc1xyXG4gICAgICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZS5sZW5ndGggPiAwIHx8XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlLmxlbmd0aCA+IDAgfHxcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfbWFuZGF0b3J5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlck9ialt0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkICsgJ19lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yQmxvY2snXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWRGb3JCbG9jay5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlQ29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlICYmIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnJvb3REYXRhICYmIE9iamVjdC5rZXlzKHRoaXMucm9vdERhdGEpLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5yb290RGF0YSAmJiBPYmplY3Qua2V5cyh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnJvb3REYXRhKS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGEgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnJvb3REYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yb290RGF0YVsnYmxvY2tGaWVsZHMnXVt0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkXSA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGZpZWxkIG9mIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZF0ucHVzaChmaWVsZC51bmlxdWVfaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2VzIGNhc2VzIGZvciB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uXHJcbiAgICAvLyAxOiBvdmVycmlkZSBOT05FIGNoaWxkIGNhbiBvdmVycmlkZSByIG92ZXJyaWRlIGFsbCBmYWxzZTtcclxuICAgIC8vIDI6IG92ZXJyaWRlIEFMTCBjaGlsZCBjYW5ub3Qgb3ZlcnJpZGU7XHJcbiAgICAvLyAzOiB3aGVuIHZhbHVlIGlzIGZhbHNlIGNoaWxkIGNhbm5vdCBvdmVycmlkZVxyXG4gICAgLy8gNDogd2hlbiB2YWx1ZSBpcyB0cnVlIGFuZCBvdmVycmlkZSBjb25kaXRpb24gaXMgbm90IE5PTkUgb3IgQUxMIGFuZCBvdmVycmlkZSBjb25kaXRpb25cclxuICAgIC8vIGhhcyBwaXBlIHNlcGFyYXRlZCBmaWVsZCB2YWx1ZXMgdGhlbiBvbmx5IHRob3NlIGZpZWxkcyB3aWxsIGJlIG92ZXJyaWRkZW4gc2V0IG92ZXJyaWRlIHRvIHRydWVcclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGREYXRhVXBkYXRlZChmaWVsZElkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5PdmVycmlkZUNvbmRpdGlvbnMgIT09ICdOT05FJykge1xyXG4gICAgICAgICAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGRpc3BsYXkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBkaXNwbGF5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy52aXNpYmxlQ29uZGl0aW9uLnZhbHVlID0gZGlzcGxheTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0T3ZlcnJpZGUoZGlzcGxheSwgJ3Zpc2libGVDb25kaXRpb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrRWRpdGFibGUodGhpcy5ibG9ja1JlbmRlcmVkRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoZWRpdGFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbi52YWx1ZSA9IGVkaXRhYmxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPdmVycmlkZShlZGl0YWJsZSwgJ2VkaXRhYmxlQ29uZGl0aW9uJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgbWFuZGF0b3J5ID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tNYW5kYXRvcnkodGhpcy5ibG9ja1JlbmRlcmVkRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLnZhbHVlID0gbWFuZGF0b3J5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPdmVycmlkZShtYW5kYXRvcnksICdtYW5kYXRvcnlDb25kaXRpb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnZpc2libGVDb25kaXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMudmlzaWJsZUNvbmRpdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5lZGl0YWJsZUNvbmRpdGlvbikpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldE92ZXJyaWRlKHByb3BlcnR5LCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICghdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KCdPdmVycmlkZUNvbmRpdGlvbnMnKSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHVzZSBjYXNlIDFcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLk92ZXJyaWRlQ29uZGl0aW9ucyA9PT0gJ05PTkUnKSB7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlQWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyB1c2UgY2FzZSAyIGFuZCAzXHJcbiAgICAgICAgaWYgKCFwcm9wZXJ0eSB8fCB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuT3ZlcnJpZGVDb25kaXRpb25zID09PSAnQUxMJykge1xyXG4gICAgICAgICAgICB0aGlzW3ZhbHVlXS5vdmVycmlkZUFsbCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVzZSBjYXNlIDRcclxuICAgICAgICBpZiAocHJvcGVydHkgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLk92ZXJyaWRlQ29uZGl0aW9ucyAhPT0gJ05PTkUnICYmXHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5PdmVycmlkZUNvbmRpdGlvbnMgIT09ICdBTEwnICYmXHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLmZpZWxkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlQWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5lbWl0dGVyT2JqKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVtaXR0ZXJPYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0dGVyT2JqW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGdlbmVyYXRlUm93RGF0YShmaWVsZCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlVXRpbC5nZW5lcmF0ZVJvd0RhdGEoZmllbGQpO1xyXG4gICAgfVxyXG4gICAgdG9nZ2xlTmF2KCkge1xyXG4gICAgICAgIHRoaXMuaGlkZGVubmF2Q29udGFpbmVyQ3NzQ2xhc3MgPSAodGhpcy5oaWRkZW5uYXZDb250YWluZXJDc3NDbGFzcykgPyAnJyA6ICdoaWRkZW4tbmF2LWNvbnRhaW5lcic7XHJcbiAgICAgICAgdGhpcy5oaWRkZW5OYXZDc3NDbGFzcyA9ICh0aGlzLmhpZGRlbk5hdkNzc0NsYXNzKSA/ICcnIDogJ2hpZGRlbi1uYXYnO1xyXG4gICAgICAgIHdpbmRvd1snbmF2T3BlblN0YXVzJ10gPSAodGhpcy5oaWRkZW5OYXZDc3NDbGFzcykgPyBmYWxzZSA6IHRydWU7XHJcbiAgICB9XHJcbiAgICBzZXRBY3RpdmVJdGVtKGZpZWxkOiBhbnkpIHtcclxuICAgICAgICBjb25zdCBhY3RpdmVJdGVtID0gd2luZG93LmxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhY3RpdmVfaXRlbScpO1xyXG4gICAgICAgIGlmIChhY3RpdmVJdGVtICYmIGZpZWxkLnVuaXF1ZV9pZCA9PT0gYWN0aXZlSXRlbSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2FjdGl2ZS1pdGVtJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgfVxyXG5cclxuICAgIEBIb3N0TGlzdGVuZXIoJ2RvY3VtZW50OmNsaWNrJywgWyckZXZlbnQnXSlcclxuICAgIG9uRG9jdW1lbnRDbGljayhldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNsaWNrZWRFbGVtZW50ID0gZXZlbnQudGFyZ2V0IGFzIEhUTUxFbGVtZW50O1xyXG4gXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgU2lkZWJhckNsb3NlQ29uZmlnIGlzIGVuYWJsZWRcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydTaWRlYmFyQ2xvc2VDb25maWcnXSkge1xyXG4gICAgICAgICAgICBjb25zdCBjb25maWdWYWx1ZXMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1NpZGViYXJDbG9zZUNvbmZpZyddLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlzRW5hYmxlZCA9IGNvbmZpZ1ZhbHVlc1swXT8udHJpbSgpLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJztcclxuICAgICAgICAgICAgY29uc3QgY3RybE5hbWUgPSBjb25maWdWYWx1ZXNbMV0/LnRyaW0oKTtcclxuIFxyXG4gICAgICAgICAgICBpZiAoaXNFbmFibGVkICYmIGN0cmxOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUYXJnZXQgdGhlIHNwZWNpZmljIHNpZGViYXIgYnkgSURcclxuICAgICAgICAgICAgICAgIGNvbnN0IHNpZGViYXJFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcz8uYmxvY2tJZD8uYmxvY2tfaWQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFtYnVyZ2VyQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2NsYXNzKj1cImhhbWJ1cmdlclwiXScpO1xyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyBPbmx5IHByb2NlZWQgaWYgdGhlIHNpZGViYXIgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBpZiAoc2lkZWJhckVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkSW5zaWRlU2lkZWJhciA9IHNpZGViYXJFbGVtZW50LmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGlja2VkT25IYW1idXJnZXIgPSBoYW1idXJnZXJCdG4gJiYgaGFtYnVyZ2VyQnRuLmNvbnRhaW5zKGNsaWNrZWRFbGVtZW50KTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGNsaWNrZWQgZWxlbWVudCBpcyBhIG5hdmlnYXRpb24gZWxlbWVudCAobGluaywgYnV0dG9uIHdpdGggbmF2aWdhdGlvbilcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc05hdmlnYXRpb25FbGVtZW50ID0gdGhpcy5pc05hdmlnYXRpb25FbGVtZW50KGNsaWNrZWRFbGVtZW50KTtcclxuIFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIHNpZGViYXIgaWY6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMS4gQ2xpY2tlZCBvdXRzaWRlIGJvdGggc2lkZWJhciBhbmQgaGFtYnVyZ2VyLCBPUlxyXG4gICAgICAgICAgICAgICAgICAgIC8vIDIuIENsaWNrZWQgaW5zaWRlIHNpZGViYXIgb24gYSBuYXZpZ2F0aW9uIGVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNsaWNrZWRJbnNpZGVTaWRlYmFyICYmICFjbGlja2VkT25IYW1idXJnZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbG9zZU5hdihjdHJsTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChjbGlja2VkSW5zaWRlU2lkZWJhciAmJiBpc05hdmlnYXRpb25FbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENsb3NlIHNpZGViYXIgb24gbmF2aWdhdGlvbiBlbGVtZW50cyBpbnNpZGUgc2lkZWJhclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuY2xvc2VOYXYoY3RybE5hbWUpLCAxMDApOyAvLyBTbWFsbCBkZWxheSB0byBlbnN1cmUgbmF2aWdhdGlvbiBzdGFydHNcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiBcclxuICAgIHByaXZhdGUgaXNOYXZpZ2F0aW9uRWxlbWVudChlbGVtZW50OiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGVsZW1lbnQgb3IgaXRzIHBhcmVudHMgYXJlIG5hdmlnYXRpb24gZWxlbWVudHNcclxuICAgICAgICBsZXQgY3VycmVudEVsZW1lbnQgPSBlbGVtZW50O1xyXG4gICAgICAgIHdoaWxlIChjdXJyZW50RWxlbWVudCAmJiBjdXJyZW50RWxlbWVudCAhPT0gZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBmb3IgbGlua3NcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnRFbGVtZW50LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBocmVmID0gKGN1cnJlbnRFbGVtZW50IGFzIEhUTUxBbmNob3JFbGVtZW50KS5ocmVmO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGhyZWYgJiYgaHJlZiAhPT0gJyMnICYmIGhyZWYgIT09ICdqYXZhc2NyaXB0OnZvaWQoMCknO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBidXR0b25zIHdpdGggbmF2aWdhdGlvbiBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC50YWdOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdidXR0b24nIHx8IGN1cnJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgncm9sZScpID09PSAnYnV0dG9uJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFzTmF2QXR0cmlidXRlcyA9IGN1cnJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgncm91dGVyTGluaycpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbmctcmVmbGVjdC1yb3V0ZXItbGluaycpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1uYXZpZ2F0ZScpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbmF2LWxpbmsnKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdmlnYXRpb24nKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtYnRuJykgfHxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtZW51LWl0ZW0nKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnY2xpY2sgb24nKTtcclxuICAgICAgICAgICAgICAgIGlmIChoYXNOYXZBdHRyaWJ1dGVzKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gXHJcbiAgICAgICAgICAgIC8vIENoZWNrIGZvciBlbGVtZW50cyB3aXRoIG5hdmlnYXRpb24gY2xhc3NlcyBvciBhdHRyaWJ1dGVzXHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ21lbnUtaXRlbScpIHx8XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ25hdi1pdGVtJykgfHxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnbWVudS1idG4nKSB8fFxyXG4gICAgICAgICAgICAgICAgY3VycmVudEVsZW1lbnQuaGFzQXR0cmlidXRlKCdyb3V0ZXJMaW5rJykgfHxcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRFbGVtZW50Lmhhc0F0dHJpYnV0ZSgnbmctcmVmbGVjdC1yb3V0ZXItbGluaycpIHx8XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKT8udG9Mb3dlckNhc2UoKS5pbmNsdWRlcygnY2xpY2sgb24nKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuIFxyXG4gICAgICAgICAgICBjdXJyZW50RWxlbWVudCA9IGN1cnJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuIFxyXG4gICAgY2xvc2VOYXYoY3RybE5hbWU/OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RvciA9IGBpbnB1dFtpZCo9XCIke2N0cmxOYW1lfVwiXWA7XHJcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmIChjaGVja2JveCAmJiBjaGVja2JveC50eXBlID09PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgY2hlY2tib3guZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScsIHsgYnViYmxlczogdHJ1ZSB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjwhLS0gPHNlY3Rpb24gaWQ9XCJ7eyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCB9fVwiXHJcbiAgICBjbGFzcz1cImNlZS1ibG9jayB0ZW1wbGF0ZS17e3RlbXBsYXRlSWR9fSBibG9jay17eyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCB9fSAgYmxvY2ste3tibG9ja1Bvc2l0aW9ufX1cIiAqbmdJZj1cImJsb2NrUmVuZGVyZWREYXRhXCJcclxuICAgIFtuZ0NsYXNzXT1cInsgJ0hlYWRlcic6J2Jsb2NrLWhlYWRlcicsICdGb290ZXInOidibG9jay1mb290ZXInLCAnbWVudSc6J2Jsb2NrLW1lbnUnfVtibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19uYW1lXVwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzOyBpbmRleCBhcyBwb3NcIj5cclxuICAgICAgICA8YXBwLXZpZXctcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbZmllbGRdPVwiZmllbGRcIiBbcG9zaXRpb25dPVwicG9zXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiPjwvYXBwLXZpZXctcmVuZGVyZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuPC9zZWN0aW9uPiAtLT5cclxuPG5nLWNvbnRhaW5lciAqbmdJZj1cImJsb2NrUmVuZGVyZWREYXRhXCI+XHJcbiAgICA8ZGl2ICpuZ0lmPVwibG9hZGVyLnNob3dTZWN0aW9uXCIgY2xhc3M9XCJjZWVfbG9hZGVyIGNlZV9sb2FkZXJfe3tibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZH19XCI+XHJcbiAgICAgICAgPGFwcC1keW5hbWljLXJlbmRlcmVyIG1vZHVsZU5hbWU9XCJDRUVfTE9BREVSXCI+PC9hcHAtZHluYW1pYy1yZW5kZXJlcj5cclxuICAgIDwvZGl2PlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfbmFtZVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidIZWFkZXInXCI+XHJcbiAgICAgICAgICAgIDxoZWFkZXIgW2hpZGRlbl09XCJsb2FkZXIuc2hvd1NlY3Rpb24gfHwgIWlzVmlzaWJsZVwiIGlkPVwie3sgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX1cIiBjbGFzcz1cImNlZS1ibG9jayBibG9jay1oZWFkZXIgIHRlbXBsYXRlLXt7dGVtcGxhdGVJZH19IGJsb2NrLXt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19ICBibG9jay17e2Jsb2NrUG9zaXRpb259fSB7e2Jsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlP2Jsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImJsb2NrUmVuZGVyZWREYXRhXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzOyBpbmRleCBhcyBwb3M7IHRyYWNrQnk6IHRyYWNrQnlJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtdmlldy1yZW5kZXJlciBjbGFzcz1cImFwcC12aWV3LXJlbmRlcmVyLXt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19LXt7cG9zfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIiBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZF09XCJmaWVsZFwiIFtwb3NpdGlvbl09XCJwb3NcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJtYW5kYXRvcnlDb25kaXRpb25cIiBbZWRpdGFibGVDb25kaXRpb25dPVwiZWRpdGFibGVDb25kaXRpb25cIiBbdmlzaWJsZUNvbmRpdGlvbl09XCJ2aXNpYmxlQ29uZGl0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hcHAtdmlldy1yZW5kZXJlcj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2hlYWRlcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8IS0tIEhhbWJ1cmdlcm1lbnUgIC0tPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidIYW1idXJnZXJtZW51J1wiPlxyXG4gICAgICAgICAgICA8ZGl2IFtoaWRkZW5dPVwibG9hZGVyLnNob3dTZWN0aW9uIHx8ICFpc1Zpc2libGVcIiBpZD1cInt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19XCIgY2xhc3M9XCJjZWUtYmxvY2sgYmxvY2stbmF2YmFyICAgdGVtcGxhdGUte3t0ZW1wbGF0ZUlkfX0gYmxvY2ste3sgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX0gIGJsb2NrLXt7YmxvY2tQb3NpdGlvbn19IHt7YmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGU/YmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fSAge3toaWRkZW5uYXZDb250YWluZXJDc3NDbGFzc319XCJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYmxvY2tSZW5kZXJlZERhdGFcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6IHVuZGVmaW5lZFwiIFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1Sb2xlJ11cIj5cclxuXHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibmF2YmFyLXRvZ2dsZXIgdG9nZ2xlLWJ0blwiIChjbGljayk9XCJ0b2dnbGVOYXYoKVwiPjwvYnV0dG9uPlxyXG5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3M9XCJuYXYtY29udGFpbmVyIHt7IGhpZGRlbk5hdkNzc0NsYXNzIH19ICB7e2FkZGl0aW9uYWxQYXJhbWV0ZXJbJ3NsaWRlUG9zaXRpb24nXXx8J3RvcCd9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGRpdiBjbGFzcz1cImhhbS1iYWNrcG9wXCIgKGNsaWNrKT1cInRvZ2dsZU5hdigpXCI+PC9kaXY+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm5hdmJhci1uYXYgbXItYXV0b1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzOyBpbmRleCBhcyBwb3M7IHRyYWNrQnk6IHRyYWNrQnlJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPVwibmF2LWl0ZW1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC12aWV3LXJlbmRlcmVyIGNsYXNzPVwiYXBwLXZpZXctcmVuZGVyZXIte3sgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX0te3twb3N9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fSB7e3NldEFjdGl2ZUl0ZW0oZmllbGQpfX1cIiBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZF09XCJmaWVsZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwb3NpdGlvbl09XCJwb3NcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJtYW5kYXRvcnlDb25kaXRpb25cIiBbZWRpdGFibGVDb25kaXRpb25dPVwiZWRpdGFibGVDb25kaXRpb25cIiBbdmlzaWJsZUNvbmRpdGlvbl09XCJ2aXNpYmxlQ29uZGl0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtdmlldy1yZW5kZXJlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPCEtLSBIYW1idXJnZXJtZW51IEVuZCAtLT5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInRm9vdGVyJ1wiPlxyXG4gICAgICAgICAgICA8Zm9vdGVyIFtoaWRkZW5dPVwibG9hZGVyLnNob3dTZWN0aW9uIHx8ICFpc1Zpc2libGVcIiBpZD1cInt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19XCIgY2xhc3M9XCJjZWUtYmxvY2sgYmxvY2stZm9vdGVyIHRlbXBsYXRlLXt7dGVtcGxhdGVJZH19IGJsb2NrLXt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19ICBibG9jay17e2Jsb2NrUG9zaXRpb259fSB7e2Jsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlP2Jsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiXHJcbiAgICAgICAgICAgICAgICAqbmdJZj1cImJsb2NrUmVuZGVyZWREYXRhXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzOyBpbmRleCBhcyBwb3M7IHRyYWNrQnk6IHRyYWNrQnlJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtdmlldy1yZW5kZXJlciBjbGFzcz1cImFwcC12aWV3LXJlbmRlcmVyLXt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19LXt7cG9zfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIiBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZF09XCJmaWVsZFwiIFtwb3NpdGlvbl09XCJwb3NcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJtYW5kYXRvcnlDb25kaXRpb25cIiBbZWRpdGFibGVDb25kaXRpb25dPVwiZWRpdGFibGVDb25kaXRpb25cIiBbdmlzaWJsZUNvbmRpdGlvbl09XCJ2aXNpYmxlQ29uZGl0aW9uXCIgW3Jvd0RhdGFdPVwiZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYXBwLXZpZXctcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9mb290ZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgICAgICA8c2VjdGlvbiBpZD1cInt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19XCIgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIiBbYXR0ci5yb2xlXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtUm9sZSddXCIgY2xhc3M9XCJjZWUtYmxvY2sgdGVtcGxhdGUte3t0ZW1wbGF0ZUlkfX0gYmxvY2ste3sgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX0gIGJsb2NrLXt7YmxvY2tQb3NpdGlvbn19IHt7YmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGU/YmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fSB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319XCJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiYmxvY2tSZW5kZXJlZERhdGFcIiBbaGlkZGVuXT1cImxvYWRlci5zaG93U2VjdGlvbiB8fCAhaXNWaXNpYmxlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzOyBpbmRleCBhcyBwb3M7IHRyYWNrQnk6IHRyYWNrQnlJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtdmlldy1yZW5kZXJlciBjbGFzcz1cImFwcC12aWV3LXJlbmRlcmVyLXt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19LXt7cG9zfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsIHJvb3REYXRhLnRlbXBsYXRlQ2xhc3MsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkXT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3Bvc2l0aW9uXT1cInBvc1wiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbbWFuZGF0b3J5Q29uZGl0aW9uXT1cIm1hbmRhdG9yeUNvbmRpdGlvblwiIFtlZGl0YWJsZUNvbmRpdGlvbl09XCJlZGl0YWJsZUNvbmRpdGlvblwiIFt2aXNpYmxlQ29uZGl0aW9uXT1cInZpc2libGVDb25kaXRpb25cIiBbcm93RGF0YV09XCJnZW5lcmF0ZVJvd0RhdGEoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hcHAtdmlldy1yZW5kZXJlcj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+Il19