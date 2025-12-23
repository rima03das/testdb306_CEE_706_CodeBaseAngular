import { Component, Input, forwardRef } from '@angular/core';
import { CommonUtil } from '../../utils/common-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { GenerateFieldRow } from '../../utils/generate-field-util';
// import { CeeMenucontextComponent } from '../../field-components/cee-menucontext/cee-menucontext.component';
import { ViewRendererComponent } from '../view-renderer/view-renderer.component';
// import { AccordionRendererComponent } from '../accordion-renderer/accordion-renderer.component';
import { NgSwitch } from '@angular/common';
// import { TreeRendererComponent } from '../tree-renderer/tree-renderer.component';
// import { ListRendererComponent } from '../list-renderer/list-renderer.component';
// import { CeeTableComponent } from '../../field-components/cee-table/cee-table.component';
import { DynamicRendererComponent } from '../dynamic-renderer/dynamic-renderer.component';
import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { defer } from 'rxjs';
import { SidemenuBarRendererComponent } from '../sidemenu-bar-renderer/sidemenu-bar-renderer.component';
import { ContentProjectionWrapperComponent } from '../content-projection-wrapper/content-projection-wrapper.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared-events-service.service";
import * as i2 from "../../models/app-data/app-data.service";
import * as i3 from "../../models/api-data/api-data.service";
import * as i4 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4, a5) => ({ stepId: a0, rootData: a1, paginateValue: a2, fieldData: a3, sectionData: a4, type: a5 });
const _c1 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, templateId: a2, sectionData: a3, type: a4 });
const _c2 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true });
const _c3 = a0 => ({ stepId: a0 });
function SectionRendererComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "app-dynamic-renderer", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("cee_loader cee_loader_", ctx_r0.sectionData.section_id, "");
} }
function SectionRendererComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section");
    i0.ɵɵelement(2, "app-sidemenu-bar-renderer", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("sub-menu-bar ", ctx_r0.sideBarData.sidemenuBlock ? ctx_r0.sideBarData.sidemenuBlock == null ? null : ctx_r0.sideBarData.sidemenuBlock.side_menu_class : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("sidemenuBlockElements", ctx_r0.sideBarData.sidemenuBlock.submenu)("sidemenuBlock", ctx_r0.sideBarData.sidemenuBlock)("currentStep", ctx_r0.stepId)("currentStepName", ctx_r0.stepName);
} }
function SectionRendererComponent_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SectionRendererComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 9);
    i0.ɵɵtemplate(2, SectionRendererComponent_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 10);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 2, ctx_r0.componentMap["Table"]))("ngComponentOutletInputs", i0.ɵɵpureFunction6(4, _c0, ctx_r0.stepId, ctx_r0.rootData, ctx_r0.paginateValue, ctx_r0.fieldValue, ctx_r0.sectionData, ctx_r0.componentName));
} }
function SectionRendererComponent_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SectionRendererComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, SectionRendererComponent_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 10);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("app-list-renderer ", ctx_r0.is_bootstrap ? ctx_r0.sectionData.field_style.custom_class_name : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r0.componentMap["List"]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c1, ctx_r0.stepId, ctx_r0.rootData, ctx_r0.templateId, ctx_r0.sectionData, ctx_r0.componentName));
} }
function SectionRendererComponent_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SectionRendererComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, SectionRendererComponent_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 10);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("app-tree-renderer ", ctx_r0.is_bootstrap ? ctx_r0.sectionData.field_style.custom_class_name : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r0.componentMap["TreeView"]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c1, ctx_r0.stepId, ctx_r0.rootData, ctx_r0.templateId, ctx_r0.sectionData, ctx_r0.componentName));
} }
function SectionRendererComponent_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SectionRendererComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, SectionRendererComponent_ng_container_6_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(2, 2, ctx_r0.componentMap["Accordion"]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(4, _c1, ctx_r0.stepId, ctx_r0.rootData, ctx_r0.templateId, ctx_r0.sectionData, ctx_r0.componentName));
} }
function SectionRendererComponent_ng_container_7_ng_container_2_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SectionRendererComponent_ng_container_7_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, SectionRendererComponent_ng_container_7_ng_container_2_div_2_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    const field_r3 = ctx_r1.$implicit;
    const pos_r4 = ctx_r1.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("field-", pos_r4, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(2, 5, ctx_r0.componentMap["ContextMenu"]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(7, _c2, ctx_r0.stepId, ctx_r0.rootData, ctx_r0.generateRowData(field_r3), field_r3));
} }
function SectionRendererComponent_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 14);
    i0.ɵɵtemplate(2, SectionRendererComponent_ng_container_7_ng_container_2_div_2_Template, 3, 12, "div", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    const pos_r4 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r0.sectionData.section_id, "-", pos_r4, " ", field_r3.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r3.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, ctx_r0.rootData.templateClass, ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r3)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("field", field_r3)("position", pos_r4)("templateId", ctx_r0.templateId)("rootData", ctx_r0.rootData)("mandatoryCondition", ctx_r0.mandatoryCondition)("editableCondition", ctx_r0.editableCondition)("visibleCondition", ctx_r0.visibleCondition)("rowData", ctx_r0.generateRowData(field_r3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r3.field_type == "ContextMenu");
} }
function SectionRendererComponent_ng_container_7_Conditional_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function SectionRendererComponent_ng_container_7_Conditional_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, SectionRendererComponent_ng_container_7_Conditional_3_ng_container_1_Template, 1, 0, "ng-container", 10);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("id", "inner-step-renderer-", ctx_r0.isRenderStep, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(2, 4, ctx_r0.componentMap["Step"]))("ngComponentOutletInputs", i0.ɵɵpureFunction1(6, _c3, ctx_r0.isRenderStep));
} }
function SectionRendererComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section", 11);
    i0.ɵɵtemplate(2, SectionRendererComponent_ng_container_7_ng_container_2_Template, 3, 15, "ng-container", 12)(3, SectionRendererComponent_ng_container_7_Conditional_3_Template, 3, 8, "div", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("cee-section template-", ctx_r0.templateId, " step-", ctx_r0.stepId, "  section-", ctx_r0.stepPosition, " ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.sectionData.section_id);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : undefined)("role", ctx_r0.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.sectionData.fields)("ngForTrackBy", ctx_r0.trackBySectionFields);
    i0.ɵɵadvance();
    i0.ɵɵconditional(3, ctx_r0.isRenderStep ? 3 : -1);
} }
function SectionRendererComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-dynamic-renderer", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("moduleName", ctx_r0.componentName);
} }
function SectionRendererComponent_section_9_ng_container_1_app_section_renderer_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-section-renderer", 19);
} if (rf & 2) {
    const section_r5 = ctx.$implicit;
    const pos_r6 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate4("compliance-form-wrapper section-child-", pos_r6, " block-main-", pos_r6, "-", ctx_r0.stepPosition, " ", section_r5.section_style ? ctx_r0.commonUtil.bootstrapColClass(ctx_r0.commonUtil.implodeClassName(section_r5.section_style.bootstrap_class_name), ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(section_r5)) : "", "");
    i0.ɵɵproperty("templateId", ctx_r0.templateId)("sectionData", section_r5)("stepPosition", ctx_r0.stepPosition + "-" + pos_r6)("sideBarData", ctx_r0.sideBarData)("stepId", ctx_r0.stepId)("stepName", ctx_r0.stepName)("rootData", ctx_r0.rootData);
} }
function SectionRendererComponent_section_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "print-preview-wrapper", 17);
    i0.ɵɵtemplate(2, SectionRendererComponent_section_9_ng_container_1_app_section_renderer_2_Template, 1, 13, "app-section-renderer", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("sectionData", ctx_r0.sectionData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.sectionData.sections)("ngForTrackBy", ctx_r0.trackBySections);
} }
function SectionRendererComponent_section_9_ng_template_2_app_section_renderer_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-section-renderer", 19);
} if (rf & 2) {
    const section_r7 = ctx.$implicit;
    const pos_r8 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate4("section-child-", pos_r8, " block-main-", pos_r8, "-", ctx_r0.stepPosition, "  ", section_r7.section_style ? ctx_r0.commonUtil.bootstrapColClass(ctx_r0.commonUtil.implodeClassName(section_r7.section_style.bootstrap_class_name), ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(section_r7)) : "", "");
    i0.ɵɵproperty("templateId", ctx_r0.templateId)("sectionData", section_r7)("stepPosition", ctx_r0.stepPosition + "-" + pos_r8)("sideBarData", ctx_r0.sideBarData)("stepId", ctx_r0.stepId)("stepName", ctx_r0.stepName)("rootData", ctx_r0.rootData);
} }
function SectionRendererComponent_section_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, SectionRendererComponent_section_9_ng_template_2_app_section_renderer_0_Template, 1, 13, "app-section-renderer", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.sectionData.sections)("ngForTrackBy", ctx_r0.trackBySections);
} }
function SectionRendererComponent_section_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 11);
    i0.ɵɵtemplate(1, SectionRendererComponent_section_9_ng_container_1_Template, 3, 3, "ng-container", 16)(2, SectionRendererComponent_section_9_ng_template_2_Template, 1, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const regularSection_r9 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("section-nested-body ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate1("id", "section-nested-", ctx_r0.sectionData ? ctx_r0.sectionData.section_id : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.useContentProjection)("ngIfElse", regularSection_r9);
} }
export class SectionRendererComponent {
    sharedEventsService;
    appDataService;
    apiDataService;
    cdRef;
    sectionData;
    stepPosition;
    stepId;
    stepName;
    templateId;
    rootData;
    sideBarData;
    emitterObj = {};
    additionalParameter = {};
    componentName = 'none';
    paginateValue;
    fieldValue;
    is_bootstrap = false;
    loader = {
        name: 'CEE_LOADER',
        showSection: false
    };
    isVisible = true;
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
    commonUtil;
    conditionalUtil;
    generateUtil;
    componentList = {};
    componentMap = {
        Table: defer(() => {
            if (this.componentList['Table']) {
                return this.componentList['Table'];
            }
            else {
                const c = import('../../field-components/cee-table/cee-table.component').then(m => m.CeeTableComponent);
                this.componentList['Table'] = c;
                return c;
            }
        }),
        List: defer(() => {
            if (this.componentList['List']) {
                return this.componentList['List'];
            }
            else {
                const c = import('../../components/list-renderer/list-renderer.component').then(m => m.ListRendererComponent);
                this.componentList['List'] = c;
                return c;
            }
        }),
        TreeView: defer(() => {
            if (this.componentList['TreeView']) {
                return this.componentList['TreeView'];
            }
            else {
                const c = import('../../components/tree-renderer/tree-renderer.component').then(m => m.TreeRendererComponent);
                this.componentList['TreeView'] = c;
                return c;
            }
        }),
        Accordion: defer(() => {
            if (this.componentList['Accordion']) {
                return this.componentList['Accordion'];
            }
            else {
                const c = import('../../components/accordion-renderer/accordion-renderer.component').then(m => m.AccordionRendererComponent);
                this.componentList['Accordion'] = c;
                return c;
            }
        }),
        ContextMenu: defer(() => {
            if (this.componentList['ContextMenu']) {
                return this.componentList['ContextMenu'];
            }
            else {
                const c = import('../../field-components/cee-menucontext/cee-menucontext.component').then(m => m.CeeMenucontextComponent);
                this.componentList['ContextMenu'] = c;
                return c;
            }
        }),
        Step: defer(() => {
            if (this.componentList['Step']) {
                return this.componentList['Step'];
            }
            else {
                const c = import('../../components/step-renderer/step-renderer.component').then(m => m.StepRendererComponent);
                this.componentList['Step'] = c;
                return c;
            }
        })
    };
    isRenderStep;
    useShadowDom = false;
    useContentProjection = false;
    constructor(sharedEventsService, appDataService, apiDataService, cdRef) {
        this.sharedEventsService = sharedEventsService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.cdRef = cdRef;
        this.commonUtil = new CommonUtil();
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.generateUtil = new GenerateFieldRow(appDataService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    trackBySectionFields(index, item) {
        return item.unique_id;
    }
    trackBySections(index, item) {
        return item.section_id;
    }
    ngOnInit() {
        if (this.sectionData.additional_parameters && this.sectionData.additional_parameters.length > 0) {
            for (const paramter of this.sectionData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'CEE_pdfGenerationShadoDomEnabled':
                        this.useContentProjection = paramter.value == 'true' ? true : false;
                        break;
                    /* case 'CEE_ShowHeader':
                        this.contentProjectionOptions.showHeader = paramter.value == 'true' ? true : false;
                        break;
                    case 'CEE_ShowBefore':
                        this.contentProjectionOptions.showBefore = paramter.value == 'true' ? true : false;
                        break;
                    case 'CEE_ShowAfter':
                        this.contentProjectionOptions.showAfter = paramter.value == 'true' ? true : false;
                        break;
                    case 'CEE_ShowSidebar':
                        this.contentProjectionOptions.showSidebar = paramter.value == 'true' ? true : false;
                        break;
                    case 'CEE_ShowFooter':
                        this.contentProjectionOptions.showFooter = paramter.value == 'true' ? true : false;
                        break;
                    case 'CEE_ShowActions':
                        this.contentProjectionOptions.showActions = paramter.value == 'true' ? true : false;
                        break;
                    case 'CEE_WrapperClass':
                        this.contentProjectionOptions.wrapperClass = paramter.value;
                        break;
                    case 'CEE_IsolateStyles':
                        this.contentProjectionOptions.isolateStyles = paramter.value == 'true' ? true : false;
                        break;
                    case 'CEE_LogoPath':
                        this.contentProjectionOptions.logoPath = paramter.value;
                        break;
                    case 'CEE_FontPath':
                        this.contentProjectionOptions.fontPath = paramter.value;
                        break; */
                    case 'renderType':
                        this.componentName = paramter.value;
                        break;
                    case 'WebSectionTemplate':
                        this.componentName = paramter.value;
                        this.fieldValue = this.sectionData.fields;
                        break;
                    case 'DataTablePagination':
                        this.paginateValue = paramter.value;
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
                    default:
                        break;
                }
            }
        }
        // subscribe to field changes
        if ((this.sectionData.conditional_visible && this.sectionData.conditional_visible.length > 0) ||
            (this.sectionData.conditional_editable && this.sectionData.conditional_editable.length) > 0 ||
            (this.sectionData.conditional_mandatory && this.sectionData.conditional_mandatory.length > 0)) {
            this.onFieldDataUpdated(null, null);
            this.emitterObj[this.sectionData.section_id + '_emitOnDataSetOrUpdatedForSection'] =
                this.sharedEventsService.emitOnDataSetOrUpdatedForSection.subscribe((res) => {
                    this.onFieldDataUpdated(res.apiKey, res.value);
                });
        }
        if (this.sectionData.conditional_visible && this.sectionData.conditional_visible.length > 0) {
            this.visibleCondition.isActive = true;
        }
        if (this.sectionData.conditional_editable && this.sectionData.conditional_editable.length > 0) {
            this.editableCondition.isActive = true;
        }
        if (this.sectionData.conditional_mandatory && this.sectionData.conditional_mandatory.length > 0) {
            this.mandatoryCondition.isActive = true;
        }
        this.rootData['sectionFields'][this.sectionData.section_id] = [];
        if (this.sectionData.fields) {
            for (let i = 0; i < this.sectionData.fields.length; i++) {
                const field = this.sectionData.fields[i];
                // bootstrap_class_name configuration
                if (this.is_bootstrap && this.componentName === 'none' && field.field_style && this.sectionData.section_style) {
                    if (this.sectionData.section_style.bootstrap_class_name && !field.field_style.bootstrap_class_name) {
                        field.field_style.bootstrap_class_name = this.sectionData.section_style.bootstrap_class_name;
                    }
                    field.field_style.bootstrap_class_name = this.commonUtil.implodeClassName(field.field_style.bootstrap_class_name);
                    field.field_style.custom_class_name = this.commonUtil.implodeClassName(field.field_style.custom_class_name);
                }
                this.rootData['sectionFields'][this.sectionData.section_id].push(field.unique_id);
            }
        }
        this.cdRef.detectChanges();
        if (this.additionalParameter['Loader Handler name']) {
            this.emitterObj[this.sectionData.section_id + '_customSectionLoaderEmitter'] =
                this.sharedEventsService.customSectionLoaderEmitter.subscribe((res) => {
                    if (this.additionalParameter['Loader Handler name'].split('|').map(str => str.trim()).includes(res.handlerName)) {
                        this.loader.showSection = res.loading;
                    }
                });
        }
        this.emitterObj[this.sectionData.section_id + '_targetStepRedirection'] =
            this.sharedEventsService.targetStepRedirection.subscribe(res => {
                if (res?.target && this.sectionData.section_id === res.target && res?.stepId) {
                    this.isRenderStep = res.stepId;
                }
            });
    }
    // Uses cases for the following function
    // 1: override NONE child can override r override all false;
    // 2: override ALL child cannot override;
    // 3: when value is false child cannot override
    // 4: when value is true and override condition is not NONE or ALL and override condition
    // has pipe separated field values then only those fields will be overridden set override to true
    onFieldDataUpdated(fieldId, value) {
        if (this.additionalParameter.OverrideConditions !== 'NONE') {
            const display = this.conditionalUtil.checkVisibility(this.sectionData, fieldId, value);
            if (display !== undefined) {
                this.isVisible = display;
                this.visibleCondition.value = display;
                this.setOverride(display, 'visibleCondition');
            }
            const editable = this.conditionalUtil.checkEditable(this.sectionData, fieldId, value);
            if (editable !== undefined) {
                this.editableCondition.value = editable;
                this.setOverride(editable, 'editableCondition');
            }
            const mandatory = this.conditionalUtil.checkMandatory(this.sectionData, fieldId, value);
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
        // use case 5
        if (this.additionalParameter.OverrideConditions === 'AUTO') {
            this[value].overrideAll = true;
            this[value].override = true;
            if (property) {
                this[value].overrideAll = false;
                this[value].override = false;
            }
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
    static ɵfac = function SectionRendererComponent_Factory(t) { return new (t || SectionRendererComponent)(i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.AppDataService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: SectionRendererComponent, selectors: [["app-section-renderer"]], inputs: { sectionData: "sectionData", stepPosition: "stepPosition", stepId: "stepId", stepName: "stepName", templateId: "templateId", rootData: "rootData", sideBarData: "sideBarData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 10, vars: 13, consts: [["regularSection", ""], [3, "class", 4, "ngIf"], [3, "hidden", "ngSwitch"], [4, "ngIf"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "id", "class", 4, "ngIf"], ["moduleName", "CEE_LOADER"], [3, "sidemenuBlockElements", "sidemenuBlock", "currentStep", "currentStepName"], [1, "app-cee-table"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "id"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "inner-step-renderer", 3, "id"], [3, "stepId", "field", "position", "templateId", "rootData", "mandatoryCondition", "editableCondition", "visibleCondition", "rowData"], [3, "moduleName"], [4, "ngIf", "ngIfElse"], [3, "sectionData"], [3, "templateId", "sectionData", "stepPosition", "sideBarData", "stepId", "stepName", "class", "rootData", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "templateId", "sectionData", "stepPosition", "sideBarData", "stepId", "stepName", "rootData"]], template: function SectionRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, SectionRendererComponent_div_0_Template, 2, 3, "div", 1);
            i0.ɵɵelementStart(1, "div", 2);
            i0.ɵɵtemplate(2, SectionRendererComponent_ng_container_2_Template, 3, 7, "ng-container", 3)(3, SectionRendererComponent_ng_container_3_Template, 4, 11, "ng-container", 4)(4, SectionRendererComponent_ng_container_4_Template, 4, 13, "ng-container", 4)(5, SectionRendererComponent_ng_container_5_Template, 4, 13, "ng-container", 4)(6, SectionRendererComponent_ng_container_6_Template, 3, 10, "ng-container", 4)(7, SectionRendererComponent_ng_container_7_Template, 4, 12, "ng-container", 4)(8, SectionRendererComponent_ng_container_8_Template, 2, 1, "ng-container", 5)(9, SectionRendererComponent_section_9_Template, 4, 7, "section", 6);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.loader.showSection);
            i0.ɵɵadvance();
            i0.ɵɵclassMap(ctx.sectionData.section_style ? ctx.commonUtil.implodeClassName(ctx.sectionData.section_style.custom_class_name) : "");
            i0.ɵɵproperty("hidden", ctx.loader.showSection || !ctx.isVisible)("ngSwitch", true);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.sideBarData && ctx.sideBarData.sidemenuBlock && (ctx.sideBarData.sidemenuBlock.section_id == null ? null : ctx.sideBarData.sidemenuBlock.section_id.includes(ctx.sectionData.section_id)));
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", ctx.componentName === "Table" || ctx.componentName === "Table-Single-Select" || ctx.componentName === "Table-Multi-Select" || ctx.componentName === "Table-Expandable");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", ctx.componentName === "List" || ctx.componentName === "List-Single-Select" || ctx.componentName === "List-Multi-Select" || ctx.componentName === "List-Expandable");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", ctx.componentName === "TreeView");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", ctx.componentName === "Accordion");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngSwitchCase", ctx.componentName === "none");
            i0.ɵɵadvance(2);
            i0.ɵɵproperty("ngIf", ctx.sectionData.sections && ctx.sectionData.sections.length);
        } }, dependencies: () => [SectionRendererComponent, SidemenuBarRendererComponent,
            DynamicRendererComponent,
            MatInputModule,
            MatFormFieldModule,
            CommonModule, i4.NgComponentOutlet, i4.NgForOf, i4.NgIf, i4.NgSwitch, i4.NgSwitchCase, i4.NgSwitchDefault, i4.AsyncPipe, ViewRendererComponent, ContentProjectionWrapperComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(SectionRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-section-renderer', standalone: true, imports: [
                    SidemenuBarRendererComponent,
                    DynamicRendererComponent,
                    MatInputModule,
                    MatFormFieldModule,
                    CommonModule,
                    NgSwitch,
                    forwardRef(() => ViewRendererComponent),
                    ContentProjectionWrapperComponent
                ], template: "<div *ngIf=\"loader.showSection\" class=\"cee_loader cee_loader_{{sectionData.section_id}}\">\r\n    <app-dynamic-renderer moduleName=\"CEE_LOADER\"></app-dynamic-renderer>\r\n</div>\r\n<div [hidden]=\"loader.showSection || !isVisible\" [ngSwitch]=\"true\"\r\n    class=\"{{sectionData.section_style?commonUtil.implodeClassName(sectionData.section_style.custom_class_name):''}}\">\r\n    <!-- Sidemenu Blocks -->\r\n    <ng-container *ngIf=\"sideBarData && sideBarData.sidemenuBlock && sideBarData.sidemenuBlock.section_id?.includes(sectionData.section_id)\">\r\n        <section class=\"sub-menu-bar {{sideBarData.sidemenuBlock ? sideBarData.sidemenuBlock ?.side_menu_class: ''}}\">\r\n            <app-sidemenu-bar-renderer [sidemenuBlockElements]=\"sideBarData.sidemenuBlock.submenu\" [sidemenuBlock]=\"sideBarData.sidemenuBlock\"\r\n            [currentStep]=\"stepId\" [currentStepName] = \"stepName\"></app-sidemenu-bar-renderer>\r\n        </section>\r\n    </ng-container>\r\n    <ng-container\r\n        *ngSwitchCase=\"componentName === 'Table' || componentName === 'Table-Single-Select' || componentName === 'Table-Multi-Select' || componentName === 'Table-Expandable'\">\r\n        <div class=\"app-cee-table\">\r\n            <ng-container\r\n                *ngComponentOutlet=\"componentMap['Table'] | async; \r\n                                    inputs: {stepId: stepId, rootData: rootData, paginateValue: paginateValue, fieldData: fieldValue, \r\n                                    sectionData: sectionData, type: componentName}\"></ng-container>\r\n        </div>\r\n        <!-- <app-cee-table [stepId]=\"stepId\" class=\"app-cee-table\" [paginateValue]=\"paginateValue\" [fieldData]=\"fieldValue\"\r\n            [sectionData]=\"sectionData\" [type]=\"componentName\">\r\n        </app-cee-table> -->\r\n    </ng-container>\r\n\r\n    <ng-container\r\n        *ngSwitchCase=\"componentName === 'List' || componentName === 'List-Single-Select' || componentName === 'List-Multi-Select' || componentName === 'List-Expandable'\">\r\n        <div class=\"app-list-renderer {{is_bootstrap?sectionData.field_style.custom_class_name:''}}\">\r\n            <ng-container\r\n                *ngComponentOutlet=\"componentMap['List'] | async; \r\n                                    inputs: {stepId: stepId, rootData: rootData, templateId: templateId, \r\n                                    sectionData: sectionData, type: componentName}\"></ng-container>\r\n        </div>\r\n        <!-- <app-list-renderer class=\"app-list-renderer {{is_bootstrap?sectionData.field_style.custom_class_name:''}}\"\r\n            [sectionData]=\"sectionData\" [stepId]=\"stepId\" [templateId]=\"templateId\" [type]=\"componentName\"\r\n            [rootData]=\"rootData\">\r\n        </app-list-renderer> -->\r\n    </ng-container>\r\n\r\n    <ng-container\r\n        *ngSwitchCase=\"componentName === 'TreeView'\">\r\n        <div class=\"app-tree-renderer {{is_bootstrap?sectionData.field_style.custom_class_name:''}}\">\r\n            <ng-container\r\n                *ngComponentOutlet=\"componentMap['TreeView'] | async; \r\n                                    inputs: {stepId: stepId, rootData: rootData, templateId: templateId, \r\n                                    sectionData: sectionData, type: componentName}\"></ng-container>\r\n        </div>\r\n        <!-- <app-tree-renderer class=\"app-tree-renderer {{is_bootstrap?sectionData.field_style.custom_class_name:''}}\"\r\n            [sectionData]=\"sectionData\" [stepId]=\"stepId\" [templateId]=\"templateId\" [type]=\"componentName\"\r\n            [rootData]=\"rootData\">\r\n        </app-tree-renderer> -->\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"componentName === 'Accordion'\">\r\n        <ng-container\r\n                *ngComponentOutlet=\"componentMap['Accordion'] | async; \r\n                                    inputs: {stepId: stepId, rootData: rootData, templateId: templateId, \r\n                                    sectionData: sectionData, type: componentName}\"></ng-container>\r\n        <!-- <app-accordion-renderer class=\"app-accordion-renderer\" [sectionData]=\"sectionData\" [stepId]=\"stepId\"\r\n            [templateId]=\"templateId\" [rootData]=\"rootData\"></app-accordion-renderer> -->\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchCase=\"componentName === 'none'\">\r\n        <section [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n            [attr.role]=\"additionalParameter['Aria-Role']\" id=\"{{ sectionData.section_id }}\"\r\n            class=\"cee-section template-{{ templateId }} step-{{ stepId }}  section-{{stepPosition}} {{is_bootstrap?'row':''}}\">\r\n            <ng-container *ngFor=\"let field of sectionData.fields; index as pos; trackBy: trackBySectionFields;\">\r\n                <app-view-renderer\r\n                    class=\"app-view-renderer-{{ sectionData.section_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, rootData.templateClass, conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                    [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\"\r\n                    [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\"\r\n                    [visibleCondition]=\"visibleCondition\" [rowData]=\"generateRowData(field)\">\r\n                </app-view-renderer>\r\n                <div *ngIf=\"field.field_type == 'ContextMenu'\" class=\"field-{{ pos }}\" >\r\n                    <ng-container *ngComponentOutlet=\"componentMap['ContextMenu'] | async; \r\n                                            inputs: {stepId: stepId, rootData: rootData, rowData: generateRowData(field), \r\n                                                fieldData: field, keepState: true}\"></ng-container>\r\n                </div>\r\n                <!-- <app-cee-menucontext *ngIf=\"field.field_type == 'ContextMenu'\" [stepId]=\"stepId\" [fieldData]=\"field\" [rootData]=\"rootData\" [keepState]=\"true\"\r\n                    class=\"field-{{ pos }}\" [rowData]=\"generateRowData(field)\">\r\n                </app-cee-menucontext> -->\r\n            </ng-container>            \r\n\r\n            @if (isRenderStep) {\r\n                <div class=\"inner-step-renderer\" id=\"inner-step-renderer-{{isRenderStep}}\">\r\n                    <ng-container *ngComponentOutlet=\"componentMap['Step'] | async;  inputs: {stepId: isRenderStep}\"></ng-container>\r\n                </div>\r\n            }\r\n        </section>\r\n    </ng-container>\r\n\r\n    <ng-container *ngSwitchDefault>\r\n        <app-dynamic-renderer [moduleName]=\"componentName\"></app-dynamic-renderer>\r\n    </ng-container>\r\n\r\n\r\n    <section *ngIf=\"sectionData.sections && sectionData.sections.length\"\r\n        id=\"section-nested-{{sectionData?sectionData.section_id:''}}\"\r\n        class=\"section-nested-body {{is_bootstrap?'row':''}}\">\r\n        <!-- <app-section-renderer [templateId]=\"templateId\" [sectionData]=\"section\" [stepPosition]=\"stepPosition+'-'+pos\" [sideBarData]=\"sideBarData\"\r\n            [stepId]=\"stepId\" [stepName]=\"stepName\" *ngFor=\"let section of sectionData.sections; let pos = index; trackBy: trackBySections;\"\r\n            class=\"section-child-{{pos}} block-main-{{pos}}-{{stepPosition}}  {{section.section_style?commonUtil.bootstrapColClass(commonUtil.implodeClassName(section.section_style.bootstrap_class_name), is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(section)):''}}\"\r\n            [rootData]=\"rootData\">\r\n        </app-section-renderer> -->\r\n\r\n        <ng-container *ngIf=\"useContentProjection; else regularSection\">\r\n            <print-preview-wrapper [sectionData]=\"sectionData\">\r\n                <!-- Main content (default slot) -->\r\n                <app-section-renderer \r\n                    [templateId]=\"templateId\" \r\n                    [sectionData]=\"section\" \r\n                    [stepPosition]=\"stepPosition+'-'+pos\" \r\n                    [sideBarData]=\"sideBarData\"\r\n                    [stepId]=\"stepId\" \r\n                    [stepName]=\"stepName\" \r\n                    *ngFor=\"let section of sectionData.sections; let pos = index; trackBy: trackBySections;\"\r\n                    class=\"compliance-form-wrapper section-child-{{pos}} block-main-{{pos}}-{{stepPosition}} {{section.section_style?commonUtil.bootstrapColClass(commonUtil.implodeClassName(section.section_style.bootstrap_class_name), is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(section)):''}}\"\r\n                    [rootData]=\"rootData\">\r\n                </app-section-renderer>\r\n            </print-preview-wrapper>\r\n        </ng-container>\r\n        \r\n        <ng-template #regularSection>\r\n            <app-section-renderer [templateId]=\"templateId\" [sectionData]=\"section\" [stepPosition]=\"stepPosition+'-'+pos\" [sideBarData]=\"sideBarData\"\r\n                [stepId]=\"stepId\" [stepName]=\"stepName\" *ngFor=\"let section of sectionData.sections; let pos = index; trackBy: trackBySections;\"\r\n                class=\"section-child-{{pos}} block-main-{{pos}}-{{stepPosition}}  {{section.section_style?commonUtil.bootstrapColClass(commonUtil.implodeClassName(section.section_style.bootstrap_class_name), is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(section)):''}}\"\r\n                [rootData]=\"rootData\">\r\n            </app-section-renderer>\r\n        </ng-template>\r\n\r\n    </section>\r\n\r\n</div>\r\n" }]
    }], () => [{ type: i1.SharedEventsServiceService }, { type: i2.AppDataService }, { type: i3.ApiDataService }, { type: i0.ChangeDetectorRef }], { sectionData: [{
            type: Input
        }], stepPosition: [{
            type: Input
        }], stepId: [{
            type: Input
        }], stepName: [{
            type: Input
        }], templateId: [{
            type: Input
        }], rootData: [{
            type: Input
        }], sideBarData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(SectionRendererComponent, { className: "SectionRendererComponent", filePath: "lib\\components\\section-renderer\\section-renderer.component.ts", lineNumber: 39 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VjdGlvbi1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9zZWN0aW9uLXJlbmRlcmVyL3NlY3Rpb24tcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvc2VjdGlvbi1yZW5kZXJlci9zZWN0aW9uLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFnQyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDbkcsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBS3JELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUNuRSw4R0FBOEc7QUFDOUcsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsbUdBQW1HO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzQyxvRkFBb0Y7QUFDcEYsb0ZBQW9GO0FBQ3BGLDRGQUE0RjtBQUM1RixPQUFPLEVBQUUsd0JBQXdCLEVBQUUsTUFBTSxnREFBZ0QsQ0FBQztBQUMxRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDN0IsT0FBTyxFQUFFLDRCQUE0QixFQUFFLE1BQU0sMERBQTBELENBQUM7QUFDeEcsT0FBTyxFQUFFLGlDQUFpQyxFQUFFLE1BQU0sb0VBQW9FLENBQUM7Ozs7Ozs7Ozs7O0lDckJ2SCwyQkFBeUY7SUFDckYsMENBQXFFO0lBQ3pFLGlCQUFNOzs7SUFGMEIsc0ZBQXdEOzs7SUFNcEYsNkJBQXlJO0lBQ3JJLCtCQUE4RztJQUMxRywrQ0FDa0Y7SUFDdEYsaUJBQVU7Ozs7SUFIRCxjQUFvRztJQUFwRywwTEFBb0c7SUFDOUUsY0FBMkQ7SUFDL0QsQUFBdkIsQUFEdUYsQUFBNUQsZ0ZBQTJELG1EQUE0Qyw4QkFDNUcsb0NBQStCOzs7SUFNckQsd0JBR3VGOzs7SUFOL0YsNkJBQzJLO0lBQ3ZLLDhCQUEyQjtJQUN2QiwyR0FHd0U7O0lBQzVFLGlCQUFNOzs7O0lBSEcsZUFDa0I7SUFBQSxBQURsQixzRkFDa0IsMEtBQzZDOzs7SUFVcEUsd0JBR3VGOzs7SUFOL0YsNkJBQ3VLO0lBQ25LLDJCQUE2RjtJQUN6RiwyR0FHd0U7O0lBQzVFLGlCQUFNOzs7O0lBTEQsY0FBdUY7SUFBdkYsZ0lBQXVGO0lBRW5GLGNBQ2tCO0lBQUEsQUFEbEIscUZBQ2tCLG9KQUM2Qzs7O0lBV3BFLHdCQUd1Rjs7O0lBTi9GLDZCQUNpRDtJQUM3QywyQkFBNkY7SUFDekYsMkdBR3dFOztJQUM1RSxpQkFBTTs7OztJQUxELGNBQXVGO0lBQXZGLGdJQUF1RjtJQUVuRixjQUNrQjtJQUFBLEFBRGxCLHlGQUNrQixvSkFDNkM7OztJQVN4RSx3QkFHMkY7OztJQUovRiw2QkFBNEQ7SUFDeEQsMkdBRzRFOzs7OztJQUZuRSxjQUNrQjtJQUFBLEFBRGxCLDBGQUNrQixvSkFDNkM7OztJQWlCNUQsd0JBRStFOzs7SUFIbkYsMkJBQXdFO0lBQ3BFLGdJQUVnRTs7SUFDcEUsaUJBQU07Ozs7OztJQUp5QywrQ0FBdUI7SUFDbkQsY0FDUTtJQUFBLEFBRFIsNEZBQ1EsbUlBQ3FDOzs7SUFWcEUsNkJBQXFHO0lBQ2pHLHdDQUtvQjtJQUNwQix3R0FBd0U7Ozs7OztJQUxwRSxjQUFvUDtJQUFwUCxnVUFBb1A7SUFHOU0sQUFBdEMsQUFEMEMsQUFBMUMsQUFENkUsQUFBMUIsQUFBakIsQUFBaEIsQUFBbEIsc0NBQWlCLG1CQUFnQixvQkFBaUIsaUNBQTBCLDZCQUFzQixpREFDekQsK0NBQXdDLDZDQUM1Qyw2Q0FBbUM7SUFFdEUsY0FBdUM7SUFBdkMsMkRBQXVDOzs7SUFZekMsd0JBQWdIOzs7SUFEcEgsK0JBQTJFO0lBQ3ZFLHlIQUFpRzs7SUFDckcsaUJBQU07OztJQUYyQixnRkFBeUM7SUFDdkQsY0FBa0Q7SUFBQSxBQUFsRCxxRkFBa0QsNEVBQThCOzs7SUF2Qi9HLDZCQUF1RDtJQUNuRCxtQ0FFd0g7SUFrQnBILEFBakJBLDRHQUFxRyxvRkFpQmpGO0lBS3hCLGlCQUFVOzs7O0lBdkJOLGNBQW1IO0lBQW5ILDRLQUFtSDtJQURwRSw2REFBaUM7O0lBRWhELGNBQXVCO0lBQWMsQUFBckMsbURBQXVCLDZDQUE0QztJQWlCbkcsY0FJQztJQUpELGlEQUlDOzs7SUFJVCw2QkFBK0I7SUFDM0IsMkNBQTBFOzs7O0lBQXBELGNBQTRCO0lBQTVCLGlEQUE0Qjs7O0lBZ0IxQywyQ0FVdUI7Ozs7O0lBRm5CLHFYQUFrUztJQUNsUyxBQUhBLEFBREEsQUFEQSxBQURBLEFBREEsQUFEQSw4Q0FBeUIsMkJBQ0Ysb0RBQ2MsbUNBQ1YseUJBQ1YsNkJBQ0ksNkJBR0E7OztJQVpqQyw2QkFBZ0U7SUFDNUQsaURBQW1EO0lBRS9DLHNJQVMwQjtJQUU5QixpQkFBd0I7Ozs7SUFiRCxjQUEyQjtJQUEzQixnREFBMkI7SUFTdEIsY0FBeUI7SUFBaUIsQUFBMUMscURBQXlCLHdDQUEwQzs7O0lBUS9GLDJDQUl1Qjs7Ozs7SUFGbkIsOFZBQTJRO0lBQzNRLEFBRmtCLEFBQWxCLEFBRDBHLEFBQXRDLEFBQXhCLEFBQTFCLDhDQUF5QiwyQkFBd0Isb0RBQXNDLG1DQUE0Qix5QkFDcEgsNkJBQXNCLDZCQUVsQjs7O0lBSHpCLHFJQUcwQjs7O0lBRmdGLEFBQTFDLHFEQUF5Qix3Q0FBMEM7OztJQTVCM0ksbUNBRTBEO0lBd0J0RCxBQWpCQSxzR0FBZ0UsdUhBaUJuQztJQVFqQyxpQkFBVTs7OztJQWhDTix1RkFBcUQ7SUFEckQsK0dBQTZEO0lBUTlDLGNBQTRCO0lBQUEsQUFBNUIsa0RBQTRCLCtCQUFtQjs7QURuRXRFLE1BQU0sT0FBTyx3QkFBd0I7SUFpSHJCO0lBQ0E7SUFDQTtJQUNBO0lBbEhILFdBQVcsQ0FBTTtJQUNqQixZQUFZLENBQU07SUFDVixNQUFNLENBQU07SUFDcEIsUUFBUSxDQUFNO0lBQ2QsVUFBVSxDQUFNO0lBQ1IsUUFBUSxDQUFNO0lBQ2QsV0FBVyxDQUFNO0lBQ2xDLFVBQVUsR0FBRyxFQUFFLENBQUM7SUFDaEIsbUJBQW1CLEdBQVEsRUFBRSxDQUFDO0lBQzlCLGFBQWEsR0FBRyxNQUFNLENBQUM7SUFDdkIsYUFBYSxDQUFNO0lBQ25CLFVBQVUsQ0FBTTtJQUNoQixZQUFZLEdBQVksS0FBSyxDQUFDO0lBQzlCLE1BQU0sR0FBRztRQUNMLElBQUksRUFBRSxZQUFZO1FBQ2xCLFdBQVcsRUFBRSxLQUFLO0tBQ3JCLENBQUE7SUFDRCxTQUFTLEdBQUcsSUFBSSxDQUFDO0lBQ2pCLGtCQUFrQixHQUFtQjtRQUNqQyxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxFQUFFO1FBQ1YsZUFBZSxFQUFFLEVBQUU7UUFDbkIsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxLQUFLO0tBQ3JCLENBQUM7SUFFRixpQkFBaUIsR0FBbUI7UUFDaEMsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLEVBQUUsRUFBRTtRQUNWLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsS0FBSztLQUNyQixDQUFDO0lBRUYsZ0JBQWdCLEdBQW1CO1FBQy9CLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEVBQUU7UUFDVixlQUFlLEVBQUUsRUFBRTtRQUNuQixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLEtBQUs7S0FDckIsQ0FBQztJQUVGLFVBQVUsQ0FBYTtJQUN2QixlQUFlLENBQWtCO0lBQ2pDLFlBQVksQ0FBbUI7SUFBQSxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBRWxELFlBQVksR0FBRztRQUNYLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLHNEQUFzRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3hHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsSUFBSSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDYixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDOUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixRQUFRLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNqQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ2hDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUN6QztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDOUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ25DLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsMEJBQTBCLENBQUMsQ0FBQztnQkFDN0gsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixXQUFXLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNwQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLEVBQUU7Z0JBQ25DLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUM1QztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsdUJBQXVCLENBQUMsQ0FBQztnQkFDMUgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDO2dCQUM5RyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQztLQUNKLENBQUE7SUFDRixZQUFZLENBQVM7SUFFckIsWUFBWSxHQUFZLEtBQUssQ0FBQztJQUM5QixvQkFBb0IsR0FBWSxLQUFLLENBQUM7SUFFdEMsWUFDWSxtQkFBK0MsRUFDL0MsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsS0FBd0I7UUFIeEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksZUFBZSxDQUFDLEtBQUssRUFBRSxjQUFjLEVBQUUsY0FBYyxDQUFDLENBQUM7UUFDbEYsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3pELElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsS0FBYSxFQUFFLElBQVM7UUFDekMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlLENBQUMsS0FBYSxFQUFFLElBQVM7UUFDcEMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQzNCLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUU7Z0JBQzNELElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDbkUsUUFBUSxRQUFRLENBQUMsY0FBYyxFQUFFO29CQUM3QixLQUFLLGtDQUFrQzt3QkFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxLQUFLLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDcEUsTUFBTTtvQkFDVjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7aUNBNkJhO29CQUdiLEtBQUssWUFBWTt3QkFDYixJQUFJLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ3BDLE1BQU07b0JBQ1YsS0FBSyxvQkFBb0I7d0JBQ3JCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQzt3QkFDMUMsTUFBTTtvQkFDVixLQUFLLHFCQUFxQjt3QkFDdEIsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO3dCQUNwQyxNQUFNO29CQUNWLEtBQUssb0JBQW9CO3dCQUNyQixJQUFJLFFBQVEsQ0FBQyxLQUFLLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxLQUFLLEVBQUU7NEJBQ3pFLE1BQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDOzRCQUNoRSxJQUFJLENBQUMsa0JBQWtCLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQzs0QkFDeEMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7NEJBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO3lCQUN6Qzt3QkFDRCxNQUFNO29CQUNWLEtBQUsscUJBQXFCO3dCQUN0QixNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQzt3QkFDaEUsSUFBSSxDQUFDLGtCQUFrQixDQUFDLGVBQWUsR0FBRyxNQUFNLENBQUM7d0JBQ2pELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxlQUFlLEdBQUcsTUFBTSxDQUFDO3dCQUNoRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsZUFBZSxHQUFHLE1BQU0sQ0FBQzt3QkFDL0MsTUFBTTtvQkFDVjt3QkFDSSxNQUFNO2lCQUNiO2FBQ0o7U0FDSjtRQUVELDZCQUE2QjtRQUM3QixJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7WUFDekYsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLG9CQUFvQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQztZQUMzRixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUU7WUFDL0YsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNwQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxHQUFHLG1DQUFtQyxDQUFDO2dCQUM5RSxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0NBQWdDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBUSxFQUFFLEVBQUU7b0JBQzdFLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbkQsQ0FBQyxDQUFDLENBQUM7U0FDVjtRQUVELElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLG1CQUFtQixDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDekYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDekM7UUFFRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsb0JBQW9CLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxvQkFBb0IsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQzNGLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzFDO1FBRUQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUM3RixJQUFJLENBQUMsa0JBQWtCLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMzQztRQUVELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDakUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sRUFBRTtZQUN6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNyRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekMscUNBQXFDO2dCQUNyQyxJQUFJLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxNQUFNLElBQUksS0FBSyxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRTtvQkFDM0csSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsQ0FBQyxvQkFBb0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEVBQUU7d0JBQ2hHLEtBQUssQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUE7cUJBQy9GO29CQUNELEtBQUssQ0FBQyxXQUFXLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLG9CQUFvQixDQUFDLENBQUM7b0JBQ2xILEtBQUssQ0FBQyxXQUFXLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQUM7aUJBRS9HO2dCQUNELElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDO2FBQ3JGO1NBQ0o7UUFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBRTNCLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLHFCQUFxQixDQUFDLEVBQUU7WUFDakQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyw2QkFBNkIsQ0FBQztnQkFDeEUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLDBCQUEwQixDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQVEsRUFBRSxFQUFFO29CQUN2RSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dCQUM3RyxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDO3FCQUN6QztnQkFDTCxDQUFDLENBQUMsQ0FBQztTQUNWO1FBRUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsR0FBRyx3QkFBd0IsQ0FBQztZQUNuRSxJQUFJLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvRCxJQUFJLEdBQUcsRUFBRSxNQUFNLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssR0FBRyxDQUFDLE1BQU0sSUFBSSxHQUFHLEVBQUUsTUFBTSxFQUFFO29CQUMxRSxJQUFJLENBQUMsWUFBWSxHQUFHLEdBQUcsQ0FBQyxNQUFNLENBQUM7aUJBQ2xDO1lBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsd0NBQXdDO0lBQ3hDLDREQUE0RDtJQUM1RCx5Q0FBeUM7SUFDekMsK0NBQStDO0lBQy9DLHlGQUF5RjtJQUN6RixpR0FBaUc7SUFFekYsa0JBQWtCLENBQUMsT0FBZSxFQUFFLEtBQWE7UUFDckQsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEtBQUssTUFBTSxFQUFFO1lBQ3hELE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3ZGLElBQUksT0FBTyxLQUFLLFNBQVMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDO2dCQUN0QyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO2FBQ2pEO1lBQ0QsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdEYsSUFBSSxRQUFRLEtBQUssU0FBUyxFQUFFO2dCQUN4QixJQUFJLENBQUMsaUJBQWlCLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztnQkFDeEMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsbUJBQW1CLENBQUMsQ0FBQzthQUNuRDtZQUNELE1BQU0sU0FBUyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsT0FBTyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ3hGLElBQUksU0FBUyxLQUFLLFNBQVMsRUFBRTtnQkFDekIsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEtBQUssR0FBRyxTQUFTLENBQUM7Z0JBQzFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFLG9CQUFvQixDQUFDLENBQUM7YUFDckQ7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7WUFFMUUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO1lBRTVFLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztTQUNqRjtJQUNMLENBQUM7SUFFRCxXQUFXLENBQUMsUUFBUSxFQUFFLEtBQUs7UUFDdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxjQUFjLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUNoRSxPQUFPO1NBQ1Y7UUFDRCxhQUFhO1FBQ2IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEtBQUssTUFBTSxFQUFFO1lBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO1FBRUQsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixLQUFLLEtBQUssRUFBRTtZQUNwRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUMvQjtRQUVELGFBQWE7UUFDYixJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEtBQUssTUFBTTtZQUNsRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEtBQUssS0FBSztZQUNyRCxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7WUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDL0I7UUFFRCxhQUFhO1FBQ2IsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLEtBQUssTUFBTSxFQUFFO1lBQ3hELElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUcsUUFBUSxFQUFDO2dCQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQzthQUNoQztTQUNKO0lBQ0wsQ0FBQztJQUVELFdBQVc7UUFDUCxLQUFLLE1BQU0sR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN0QixJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RDO1NBQ0o7SUFDTCxDQUFDO0lBQ0QsZUFBZSxDQUFDLEtBQUs7UUFDakIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwRCxDQUFDO2tGQWxWUSx3QkFBd0I7NkRBQXhCLHdCQUF3QjtZQ3RDckMseUVBQXlGO1lBR3pGLDhCQUNzSDtZQTRGbEgsQUFMQSxBQTdCQSxBQVRBLEFBZEEsQUFkQSxBQWJBLEFBTkEsMkZBQXlJLCtFQU9rQywrRUFhSiwrRUFjdEgsK0VBYVcsK0VBU0wsOEVBNkJ4QixvRUFPMkI7WUFrQzlELGlCQUFNOztZQXBJQSw2Q0FBd0I7WUFJMUIsY0FBaUg7WUFBakgsb0lBQWlIO1lBRHBFLEFBQTVDLGlFQUEyQyxrQkFBa0I7WUFHL0MsY0FBd0g7WUFBeEgsb05BQXdIO1lBT2xJLGNBQW9LO1lBQXBLLHFNQUFvSztZQWFwSyxjQUFnSztZQUFoSyxpTUFBZ0s7WUFjaEssY0FBMEM7WUFBMUMsK0RBQTBDO1lBYWhDLGNBQTJDO1lBQTNDLGdFQUEyQztZQVMzQyxjQUFzQztZQUF0QywyREFBc0M7WUFrQzNDLGVBQXlEO1lBQXpELGtGQUF5RDtrQ0QxRDFELHdCQUF3QixFQVY3Qiw0QkFBNEI7WUFDNUIsd0JBQXdCO1lBQ3hCLGNBQWM7WUFDZCxrQkFBa0I7WUFDbEIsWUFBWSw2R0FFSyxxQkFBcUIsRUFDdEMsaUNBQWlDOztpRkFHNUIsd0JBQXdCO2NBaEJwQyxTQUFTOzJCQUNJLHNCQUFzQixjQUdwQixJQUFJLFdBQ1A7b0JBQ0wsNEJBQTRCO29CQUM1Qix3QkFBd0I7b0JBQ3hCLGNBQWM7b0JBQ2Qsa0JBQWtCO29CQUNsQixZQUFZO29CQUNaLFFBQVE7b0JBQ1IsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLHFCQUFxQixDQUFDO29CQUN2QyxpQ0FBaUM7aUJBQ3BDO3FKQUlRLFdBQVc7a0JBQW5CLEtBQUs7WUFDRyxZQUFZO2tCQUFwQixLQUFLO1lBQ1csTUFBTTtrQkFBdEIsS0FBSztZQUNHLFFBQVE7a0JBQWhCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSztZQUNXLFdBQVc7a0JBQTNCLEtBQUs7O2tGQVJHLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2hpbGRDb25kaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hpbGRDb25kaXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbmFsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1jb25kaXRpb25hbC11dGlsJztcclxuaW1wb3J0IHsgR2VuZXJhdGVGaWVsZFJvdyB9IGZyb20gJy4uLy4uL3V0aWxzL2dlbmVyYXRlLWZpZWxkLXV0aWwnO1xyXG4vLyBpbXBvcnQgeyBDZWVNZW51Y29udGV4dENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLW1lbnVjb250ZXh0L2NlZS1tZW51Y29udGV4dC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3UmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi92aWV3LXJlbmRlcmVyL3ZpZXctcmVuZGVyZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQWNjb3JkaW9uUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9hY2NvcmRpb24tcmVuZGVyZXIvYWNjb3JkaW9uLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE5nU3dpdGNoIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuLy8gaW1wb3J0IHsgVHJlZVJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vdHJlZS1yZW5kZXJlci90cmVlLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IExpc3RSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL2xpc3QtcmVuZGVyZXIvbGlzdC1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlL2NlZS10YWJsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBEeW5hbWljUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9keW5hbWljLXJlbmRlcmVyL2R5bmFtaWMtcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBkZWZlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBTaWRlbWVudUJhclJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vc2lkZW1lbnUtYmFyLXJlbmRlcmVyL3NpZGVtZW51LWJhci1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb250ZW50UHJvamVjdGlvbldyYXBwZXJDb21wb25lbnQgfSBmcm9tICcuLi9jb250ZW50LXByb2plY3Rpb24td3JhcHBlci9jb250ZW50LXByb2plY3Rpb24td3JhcHBlci5jb21wb25lbnQnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXNlY3Rpb24tcmVuZGVyZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3NlY3Rpb24tcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vc2VjdGlvbi1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBTaWRlbWVudUJhclJlbmRlcmVyQ29tcG9uZW50LCBcclxuICAgICAgICBEeW5hbWljUmVuZGVyZXJDb21wb25lbnQsIFxyXG4gICAgICAgIE1hdElucHV0TW9kdWxlLCBcclxuICAgICAgICBNYXRGb3JtRmllbGRNb2R1bGUsIFxyXG4gICAgICAgIENvbW1vbk1vZHVsZSwgXHJcbiAgICAgICAgTmdTd2l0Y2gsIFxyXG4gICAgICAgIGZvcndhcmRSZWYoKCkgPT4gVmlld1JlbmRlcmVyQ29tcG9uZW50KSxcclxuICAgICAgICBDb250ZW50UHJvamVjdGlvbldyYXBwZXJDb21wb25lbnRcclxuICAgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlY3Rpb25SZW5kZXJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBASW5wdXQoKSBzZWN0aW9uRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgc3RlcFBvc2l0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgc3RlcE5hbWU6IGFueTtcclxuICAgIEBJbnB1dCgpIHRlbXBsYXRlSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc2lkZUJhckRhdGE6IGFueTtcclxuICAgIGVtaXR0ZXJPYmogPSB7fTtcclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXI6IGFueSA9IHt9O1xyXG4gICAgY29tcG9uZW50TmFtZSA9ICdub25lJztcclxuICAgIHBhZ2luYXRlVmFsdWU6IGFueTtcclxuICAgIGZpZWxkVmFsdWU6IGFueTtcclxuICAgIGlzX2Jvb3RzdHJhcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbG9hZGVyID0ge1xyXG4gICAgICAgIG5hbWU6ICdDRUVfTE9BREVSJyxcclxuICAgICAgICBzaG93U2VjdGlvbjogZmFsc2VcclxuICAgIH1cclxuICAgIGlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICBtYW5kYXRvcnlDb25kaXRpb246IENoaWxkQ29uZGl0aW9uID0ge1xyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICAgIGV4Y2VwdGlvbkZpZWxkczogW10sXHJcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcclxuICAgICAgICBvdmVycmlkZUFsbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgZWRpdGFibGVDb25kaXRpb246IENoaWxkQ29uZGl0aW9uID0ge1xyXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcclxuICAgICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICAgIGV4Y2VwdGlvbkZpZWxkczogW10sXHJcbiAgICAgICAgaXNBY3RpdmU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlOiBmYWxzZSxcclxuICAgICAgICBvdmVycmlkZUFsbDogZmFsc2VcclxuICAgIH07XHJcblxyXG4gICAgdmlzaWJsZUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb24gPSB7XHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgZXhjZXB0aW9uRmllbGRzOiBbXSxcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlQWxsOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG4gICAgY29uZGl0aW9uYWxVdGlsOiBDb25kaXRpb25hbFV0aWw7XHJcbiAgICBnZW5lcmF0ZVV0aWw6IEdlbmVyYXRlRmllbGRSb3c7Y29tcG9uZW50TGlzdCA9IHt9O1xyXG5cclxuICAgIGNvbXBvbmVudE1hcCA9IHtcclxuICAgICAgICBUYWJsZTogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydUYWJsZSddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZSddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGFibGUvY2VlLXRhYmxlLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRhYmxlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGFibGUnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIExpc3Q6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnTGlzdCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydMaXN0J107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2xpc3QtcmVuZGVyZXIvbGlzdC1yZW5kZXJlci5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5MaXN0UmVuZGVyZXJDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydMaXN0J10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBUcmVlVmlldzogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydUcmVlVmlldyddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUcmVlVmlldyddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy90cmVlLXJlbmRlcmVyL3RyZWUtcmVuZGVyZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uVHJlZVJlbmRlcmVyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVHJlZVZpZXcnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEFjY29yZGlvbjogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydBY2NvcmRpb24nXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnQWNjb3JkaW9uJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2FjY29yZGlvbi1yZW5kZXJlci9hY2NvcmRpb24tcmVuZGVyZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQWNjb3JkaW9uUmVuZGVyZXJDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydBY2NvcmRpb24nXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIENvbnRleHRNZW51OiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ0NvbnRleHRNZW51J10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0NvbnRleHRNZW51J107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1tZW51Y29udGV4dC9jZWUtbWVudWNvbnRleHQuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlTWVudWNvbnRleHRDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydDb250ZXh0TWVudSddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgU3RlcDogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydTdGVwJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1N0ZXAnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvc3RlcC1yZW5kZXJlci9zdGVwLXJlbmRlcmVyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLlN0ZXBSZW5kZXJlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1N0ZXAnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgfVxyXG4gICAgaXNSZW5kZXJTdGVwOiBzdHJpbmc7XHJcblxyXG4gICAgdXNlU2hhZG93RG9tOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB1c2VDb250ZW50UHJvamVjdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgY2RSZWY6IENoYW5nZURldGVjdG9yUmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVXRpbCA9IG5ldyBDb25kaXRpb25hbFV0aWwoZmFsc2UsIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5nZW5lcmF0ZVV0aWwgPSBuZXcgR2VuZXJhdGVGaWVsZFJvdyhhcHBEYXRhU2VydmljZSk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfYm9vdHN0cmFwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tCeVNlY3Rpb25GaWVsZHMoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogbnVtYmVyIHtcclxuICAgICAgICByZXR1cm4gaXRlbS51bmlxdWVfaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tCeVNlY3Rpb25zKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSk6IG51bWJlciB7XHJcbiAgICAgICAgcmV0dXJuIGl0ZW0uc2VjdGlvbl9pZDtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuc2VjdGlvbkRhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX3BkZkdlbmVyYXRpb25TaGFkb0RvbUVuYWJsZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVzZUNvbnRlbnRQcm9qZWN0aW9uID0gcGFyYW10ZXIudmFsdWUgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvKiBjYXNlICdDRUVfU2hvd0hlYWRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFByb2plY3Rpb25PcHRpb25zLnNob3dIZWFkZXIgPSBwYXJhbXRlci52YWx1ZSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9TaG93QmVmb3JlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc2hvd0JlZm9yZSA9IHBhcmFtdGVyLnZhbHVlID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX1Nob3dBZnRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudFByb2plY3Rpb25PcHRpb25zLnNob3dBZnRlciA9IHBhcmFtdGVyLnZhbHVlID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX1Nob3dTaWRlYmFyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc2hvd1NpZGViYXIgPSBwYXJhbXRlci52YWx1ZSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9TaG93Rm9vdGVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc2hvd0Zvb3RlciA9IHBhcmFtdGVyLnZhbHVlID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX1Nob3dBY3Rpb25zJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZW50UHJvamVjdGlvbk9wdGlvbnMuc2hvd0FjdGlvbnMgPSBwYXJhbXRlci52YWx1ZSA9PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9XcmFwcGVyQ2xhc3MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy53cmFwcGVyQ2xhc3MgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX0lzb2xhdGVTdHlsZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5pc29sYXRlU3R5bGVzID0gcGFyYW10ZXIudmFsdWUgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfTG9nb1BhdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5sb2dvUGF0aCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfRm9udFBhdGgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRQcm9qZWN0aW9uT3B0aW9ucy5mb250UGF0aCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgKi9cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbmRlclR5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudE5hbWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnV2ViU2VjdGlvblRlbXBsYXRlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnROYW1lID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdEYXRhVGFibGVQYWdpbmF0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0ZVZhbHVlID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ092ZXJyaWRlQ29uZGl0aW9ucyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci52YWx1ZSAmJiBwYXJhbXRlci52YWx1ZSAhPT0gJ05PTkUnICYmIHBhcmFtdGVyLnZhbHVlICE9PSAnQUxMJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAodmFsID0+IHZhbC50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24uZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbi5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVDb25kaXRpb24uZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0V4Y2VwdGlvbkNvbmRpdGlvbnMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfCcpLm1hcCh2YWwgPT4gdmFsLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLmV4Y2VwdGlvbkZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbi5leGNlcHRpb25GaWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmlzaWJsZUNvbmRpdGlvbi5leGNlcHRpb25GaWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzdWJzY3JpYmUgdG8gZmllbGQgY2hhbmdlc1xyXG4gICAgICAgIGlmICgodGhpcy5zZWN0aW9uRGF0YS5jb25kaXRpb25hbF92aXNpYmxlICYmIHRoaXMuc2VjdGlvbkRhdGEuY29uZGl0aW9uYWxfdmlzaWJsZS5sZW5ndGggPiAwKSB8fFxyXG4gICAgICAgICAgICAodGhpcy5zZWN0aW9uRGF0YS5jb25kaXRpb25hbF9lZGl0YWJsZSAmJiB0aGlzLnNlY3Rpb25EYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlLmxlbmd0aCkgPiAwIHx8XHJcbiAgICAgICAgICAgICh0aGlzLnNlY3Rpb25EYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeSAmJiB0aGlzLnNlY3Rpb25EYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeS5sZW5ndGggPiAwKSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmllbGREYXRhVXBkYXRlZChudWxsLCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyT2JqW3RoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbl9pZCArICdfZW1pdE9uRGF0YVNldE9yVXBkYXRlZEZvclNlY3Rpb24nXSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZEZvclNlY3Rpb24uc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUgJiYgdGhpcy5zZWN0aW9uRGF0YS5jb25kaXRpb25hbF92aXNpYmxlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy52aXNpYmxlQ29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlICYmIHRoaXMuc2VjdGlvbkRhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeSAmJiB0aGlzLnNlY3Rpb25EYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm9vdERhdGFbJ3NlY3Rpb25GaWVsZHMnXVt0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25faWRdID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zZWN0aW9uRGF0YS5maWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5zZWN0aW9uRGF0YS5maWVsZHNbaV07XHJcbiAgICAgICAgICAgICAgICAvLyBib290c3RyYXBfY2xhc3NfbmFtZSBjb25maWd1cmF0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc19ib290c3RyYXAgJiYgdGhpcy5jb21wb25lbnROYW1lID09PSAnbm9uZScgJiYgZmllbGQuZmllbGRfc3R5bGUgJiYgdGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uX3N0eWxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbl9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSAmJiAhZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUgPSB0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25fc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWVcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUgPSB0aGlzLmNvbW1vblV0aWwuaW1wbG9kZUNsYXNzTmFtZShmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUgPSB0aGlzLmNvbW1vblV0aWwuaW1wbG9kZUNsYXNzTmFtZShmaWVsZC5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnc2VjdGlvbkZpZWxkcyddW3RoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbl9pZF0ucHVzaChmaWVsZC51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydMb2FkZXIgSGFuZGxlciBuYW1lJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5lbWl0dGVyT2JqW3RoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbl9pZCArICdfY3VzdG9tU2VjdGlvbkxvYWRlckVtaXR0ZXInXSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuY3VzdG9tU2VjdGlvbkxvYWRlckVtaXR0ZXIuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0xvYWRlciBIYW5kbGVyIG5hbWUnXS5zcGxpdCgnfCcpLm1hcChzdHIgPT4gc3RyLnRyaW0oKSkuaW5jbHVkZXMocmVzLmhhbmRsZXJOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRlci5zaG93U2VjdGlvbiA9IHJlcy5sb2FkaW5nO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5lbWl0dGVyT2JqW3RoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbl9pZCArICdfdGFyZ2V0U3RlcFJlZGlyZWN0aW9uJ10gPVxyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UudGFyZ2V0U3RlcFJlZGlyZWN0aW9uLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzPy50YXJnZXQgJiYgdGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uX2lkID09PSByZXMudGFyZ2V0ICYmIHJlcz8uc3RlcElkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzUmVuZGVyU3RlcCA9IHJlcy5zdGVwSWQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVc2VzIGNhc2VzIGZvciB0aGUgZm9sbG93aW5nIGZ1bmN0aW9uXHJcbiAgICAvLyAxOiBvdmVycmlkZSBOT05FIGNoaWxkIGNhbiBvdmVycmlkZSByIG92ZXJyaWRlIGFsbCBmYWxzZTtcclxuICAgIC8vIDI6IG92ZXJyaWRlIEFMTCBjaGlsZCBjYW5ub3Qgb3ZlcnJpZGU7XHJcbiAgICAvLyAzOiB3aGVuIHZhbHVlIGlzIGZhbHNlIGNoaWxkIGNhbm5vdCBvdmVycmlkZVxyXG4gICAgLy8gNDogd2hlbiB2YWx1ZSBpcyB0cnVlIGFuZCBvdmVycmlkZSBjb25kaXRpb24gaXMgbm90IE5PTkUgb3IgQUxMIGFuZCBvdmVycmlkZSBjb25kaXRpb25cclxuICAgIC8vIGhhcyBwaXBlIHNlcGFyYXRlZCBmaWVsZCB2YWx1ZXMgdGhlbiBvbmx5IHRob3NlIGZpZWxkcyB3aWxsIGJlIG92ZXJyaWRkZW4gc2V0IG92ZXJyaWRlIHRvIHRydWVcclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGREYXRhVXBkYXRlZChmaWVsZElkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLk92ZXJyaWRlQ29uZGl0aW9ucyAhPT0gJ05PTkUnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5zZWN0aW9uRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoZGlzcGxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGRpc3BsYXk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZpc2libGVDb25kaXRpb24udmFsdWUgPSBkaXNwbGF5O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRPdmVycmlkZShkaXNwbGF5LCAndmlzaWJsZUNvbmRpdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tFZGl0YWJsZSh0aGlzLnNlY3Rpb25EYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChlZGl0YWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uLnZhbHVlID0gZWRpdGFibGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE92ZXJyaWRlKGVkaXRhYmxlLCAnZWRpdGFibGVDb25kaXRpb24nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBtYW5kYXRvcnkgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja01hbmRhdG9yeSh0aGlzLnNlY3Rpb25EYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24udmFsdWUgPSBtYW5kYXRvcnk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldE92ZXJyaWRlKG1hbmRhdG9yeSwgJ21hbmRhdG9yeUNvbmRpdGlvbicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmlzaWJsZUNvbmRpdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy52aXNpYmxlQ29uZGl0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmVkaXRhYmxlQ29uZGl0aW9uKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5tYW5kYXRvcnlDb25kaXRpb24pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0T3ZlcnJpZGUocHJvcGVydHksIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoJ092ZXJyaWRlQ29uZGl0aW9ucycpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdXNlIGNhc2UgMVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuT3ZlcnJpZGVDb25kaXRpb25zID09PSAnTk9ORScpIHtcclxuICAgICAgICAgICAgdGhpc1t2YWx1ZV0ub3ZlcnJpZGVBbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpc1t2YWx1ZV0ub3ZlcnJpZGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHVzZSBjYXNlIDIgYW5kIDNcclxuICAgICAgICBpZiAoIXByb3BlcnR5IHx8IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5PdmVycmlkZUNvbmRpdGlvbnMgPT09ICdBTEwnKSB7XHJcbiAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlQWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpc1t2YWx1ZV0ub3ZlcnJpZGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXNlIGNhc2UgNFxyXG4gICAgICAgIGlmIChwcm9wZXJ0eSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuT3ZlcnJpZGVDb25kaXRpb25zICE9PSAnTk9ORScgJiZcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLk92ZXJyaWRlQ29uZGl0aW9ucyAhPT0gJ0FMTCcgJiZcclxuICAgICAgICAgICAgdGhpc1t2YWx1ZV0uZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpc1t2YWx1ZV0ub3ZlcnJpZGVBbGwgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpc1t2YWx1ZV0ub3ZlcnJpZGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdXNlIGNhc2UgNVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuT3ZlcnJpZGVDb25kaXRpb25zID09PSAnQVVUTycpIHtcclxuICAgICAgICAgICAgdGhpc1t2YWx1ZV0ub3ZlcnJpZGVBbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzW3ZhbHVlXS5vdmVycmlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmKHByb3BlcnR5KXtcclxuICAgICAgICAgICAgICAgIHRoaXNbdmFsdWVdLm92ZXJyaWRlQWxsID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3ZhbHVlXS5vdmVycmlkZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZW1pdHRlck9iaikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5lbWl0dGVyT2JqW2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW1pdHRlck9ialtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBnZW5lcmF0ZVJvd0RhdGEoZmllbGQpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVV0aWwuZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKTtcclxuICAgIH1cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwibG9hZGVyLnNob3dTZWN0aW9uXCIgY2xhc3M9XCJjZWVfbG9hZGVyIGNlZV9sb2FkZXJfe3tzZWN0aW9uRGF0YS5zZWN0aW9uX2lkfX1cIj5cclxuICAgIDxhcHAtZHluYW1pYy1yZW5kZXJlciBtb2R1bGVOYW1lPVwiQ0VFX0xPQURFUlwiPjwvYXBwLWR5bmFtaWMtcmVuZGVyZXI+XHJcbjwvZGl2PlxyXG48ZGl2IFtoaWRkZW5dPVwibG9hZGVyLnNob3dTZWN0aW9uIHx8ICFpc1Zpc2libGVcIiBbbmdTd2l0Y2hdPVwidHJ1ZVwiXHJcbiAgICBjbGFzcz1cInt7c2VjdGlvbkRhdGEuc2VjdGlvbl9zdHlsZT9jb21tb25VdGlsLmltcGxvZGVDbGFzc05hbWUoc2VjdGlvbkRhdGEuc2VjdGlvbl9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSk6Jyd9fVwiPlxyXG4gICAgPCEtLSBTaWRlbWVudSBCbG9ja3MgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2lkZUJhckRhdGEgJiYgc2lkZUJhckRhdGEuc2lkZW1lbnVCbG9jayAmJiBzaWRlQmFyRGF0YS5zaWRlbWVudUJsb2NrLnNlY3Rpb25faWQ/LmluY2x1ZGVzKHNlY3Rpb25EYXRhLnNlY3Rpb25faWQpXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzdWItbWVudS1iYXIge3tzaWRlQmFyRGF0YS5zaWRlbWVudUJsb2NrID8gc2lkZUJhckRhdGEuc2lkZW1lbnVCbG9jayA/LnNpZGVfbWVudV9jbGFzczogJyd9fVwiPlxyXG4gICAgICAgICAgICA8YXBwLXNpZGVtZW51LWJhci1yZW5kZXJlciBbc2lkZW1lbnVCbG9ja0VsZW1lbnRzXT1cInNpZGVCYXJEYXRhLnNpZGVtZW51QmxvY2suc3VibWVudVwiIFtzaWRlbWVudUJsb2NrXT1cInNpZGVCYXJEYXRhLnNpZGVtZW51QmxvY2tcIlxyXG4gICAgICAgICAgICBbY3VycmVudFN0ZXBdPVwic3RlcElkXCIgW2N1cnJlbnRTdGVwTmFtZV0gPSBcInN0ZXBOYW1lXCI+PC9hcHAtc2lkZW1lbnUtYmFyLXJlbmRlcmVyPlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICpuZ1N3aXRjaENhc2U9XCJjb21wb25lbnROYW1lID09PSAnVGFibGUnIHx8IGNvbXBvbmVudE5hbWUgPT09ICdUYWJsZS1TaW5nbGUtU2VsZWN0JyB8fCBjb21wb25lbnROYW1lID09PSAnVGFibGUtTXVsdGktU2VsZWN0JyB8fCBjb21wb25lbnROYW1lID09PSAnVGFibGUtRXhwYW5kYWJsZSdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiYXBwLWNlZS10YWJsZVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbJ1RhYmxlJ10gfCBhc3luYzsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHBhZ2luYXRlVmFsdWU6IHBhZ2luYXRlVmFsdWUsIGZpZWxkRGF0YTogZmllbGRWYWx1ZSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25EYXRhOiBzZWN0aW9uRGF0YSwgdHlwZTogY29tcG9uZW50TmFtZX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIDxhcHAtY2VlLXRhYmxlIFtzdGVwSWRdPVwic3RlcElkXCIgY2xhc3M9XCJhcHAtY2VlLXRhYmxlXCIgW3BhZ2luYXRlVmFsdWVdPVwicGFnaW5hdGVWYWx1ZVwiIFtmaWVsZERhdGFdPVwiZmllbGRWYWx1ZVwiXHJcbiAgICAgICAgICAgIFtzZWN0aW9uRGF0YV09XCJzZWN0aW9uRGF0YVwiIFt0eXBlXT1cImNvbXBvbmVudE5hbWVcIj5cclxuICAgICAgICA8L2FwcC1jZWUtdGFibGU+IC0tPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICpuZ1N3aXRjaENhc2U9XCJjb21wb25lbnROYW1lID09PSAnTGlzdCcgfHwgY29tcG9uZW50TmFtZSA9PT0gJ0xpc3QtU2luZ2xlLVNlbGVjdCcgfHwgY29tcG9uZW50TmFtZSA9PT0gJ0xpc3QtTXVsdGktU2VsZWN0JyB8fCBjb21wb25lbnROYW1lID09PSAnTGlzdC1FeHBhbmRhYmxlJ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtbGlzdC1yZW5kZXJlciB7e2lzX2Jvb3RzdHJhcD9zZWN0aW9uRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFsnTGlzdCddIHwgYXN5bmM7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCB0ZW1wbGF0ZUlkOiB0ZW1wbGF0ZUlkLCBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbkRhdGE6IHNlY3Rpb25EYXRhLCB0eXBlOiBjb21wb25lbnROYW1lfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwhLS0gPGFwcC1saXN0LXJlbmRlcmVyIGNsYXNzPVwiYXBwLWxpc3QtcmVuZGVyZXIge3tpc19ib290c3RyYXA/c2VjdGlvbkRhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiXHJcbiAgICAgICAgICAgIFtzZWN0aW9uRGF0YV09XCJzZWN0aW9uRGF0YVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiIFt0eXBlXT1cImNvbXBvbmVudE5hbWVcIlxyXG4gICAgICAgICAgICBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuICAgICAgICA8L2FwcC1saXN0LXJlbmRlcmVyPiAtLT5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiY29tcG9uZW50TmFtZSA9PT0gJ1RyZWVWaWV3J1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJhcHAtdHJlZS1yZW5kZXJlciB7e2lzX2Jvb3RzdHJhcD9zZWN0aW9uRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFsnVHJlZVZpZXcnXSB8IGFzeW5jOyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgdGVtcGxhdGVJZDogdGVtcGxhdGVJZCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25EYXRhOiBzZWN0aW9uRGF0YSwgdHlwZTogY29tcG9uZW50TmFtZX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIDxhcHAtdHJlZS1yZW5kZXJlciBjbGFzcz1cImFwcC10cmVlLXJlbmRlcmVyIHt7aXNfYm9vdHN0cmFwP3NlY3Rpb25EYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIlxyXG4gICAgICAgICAgICBbc2VjdGlvbkRhdGFdPVwic2VjdGlvbkRhdGFcIiBbc3RlcElkXT1cInN0ZXBJZFwiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbdHlwZV09XCJjb21wb25lbnROYW1lXCJcclxuICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgPC9hcHAtdHJlZS1yZW5kZXJlcj4gLS0+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJjb21wb25lbnROYW1lID09PSAnQWNjb3JkaW9uJ1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFsnQWNjb3JkaW9uJ10gfCBhc3luYzsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHRlbXBsYXRlSWQ6IHRlbXBsYXRlSWQsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWN0aW9uRGF0YTogc2VjdGlvbkRhdGEsIHR5cGU6IGNvbXBvbmVudE5hbWV9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPCEtLSA8YXBwLWFjY29yZGlvbi1yZW5kZXJlciBjbGFzcz1cImFwcC1hY2NvcmRpb24tcmVuZGVyZXJcIiBbc2VjdGlvbkRhdGFdPVwic2VjdGlvbkRhdGFcIiBbc3RlcElkXT1cInN0ZXBJZFwiXHJcbiAgICAgICAgICAgIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIj48L2FwcC1hY2NvcmRpb24tcmVuZGVyZXI+IC0tPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiY29tcG9uZW50TmFtZSA9PT0gJ25vbmUnXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICBbYXR0ci5yb2xlXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtUm9sZSddXCIgaWQ9XCJ7eyBzZWN0aW9uRGF0YS5zZWN0aW9uX2lkIH19XCJcclxuICAgICAgICAgICAgY2xhc3M9XCJjZWUtc2VjdGlvbiB0ZW1wbGF0ZS17eyB0ZW1wbGF0ZUlkIH19IHN0ZXAte3sgc3RlcElkIH19ICBzZWN0aW9uLXt7c3RlcFBvc2l0aW9ufX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBzZWN0aW9uRGF0YS5maWVsZHM7IGluZGV4IGFzIHBvczsgdHJhY2tCeTogdHJhY2tCeVNlY3Rpb25GaWVsZHM7XCI+XHJcbiAgICAgICAgICAgICAgICA8YXBwLXZpZXctcmVuZGVyZXJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcC12aWV3LXJlbmRlcmVyLXt7IHNlY3Rpb25EYXRhLnNlY3Rpb25faWQgfX0te3twb3N9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgcm9vdERhdGEudGVtcGxhdGVDbGFzcywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZF09XCJmaWVsZFwiIFtwb3NpdGlvbl09XCJwb3NcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICBbbWFuZGF0b3J5Q29uZGl0aW9uXT1cIm1hbmRhdG9yeUNvbmRpdGlvblwiIFtlZGl0YWJsZUNvbmRpdGlvbl09XCJlZGl0YWJsZUNvbmRpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgW3Zpc2libGVDb25kaXRpb25dPVwidmlzaWJsZUNvbmRpdGlvblwiIFtyb3dEYXRhXT1cImdlbmVyYXRlUm93RGF0YShmaWVsZClcIj5cclxuICAgICAgICAgICAgICAgIDwvYXBwLXZpZXctcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZmllbGQuZmllbGRfdHlwZSA9PSAnQ29udGV4dE1lbnUnXCIgY2xhc3M9XCJmaWVsZC17eyBwb3MgfX1cIiA+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbJ0NvbnRleHRNZW51J10gfCBhc3luYzsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKSwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkRGF0YTogZmllbGQsIGtlZXBTdGF0ZTogdHJ1ZX1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPCEtLSA8YXBwLWNlZS1tZW51Y29udGV4dCAqbmdJZj1cImZpZWxkLmZpZWxkX3R5cGUgPT0gJ0NvbnRleHRNZW51J1wiIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiIFtyb290RGF0YV09XCJyb290RGF0YVwiIFtrZWVwU3RhdGVdPVwidHJ1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmaWVsZC17eyBwb3MgfX1cIiBbcm93RGF0YV09XCJnZW5lcmF0ZVJvd0RhdGEoZmllbGQpXCI+XHJcbiAgICAgICAgICAgICAgICA8L2FwcC1jZWUtbWVudWNvbnRleHQ+IC0tPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj4gICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgIEBpZiAoaXNSZW5kZXJTdGVwKSB7XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXItc3RlcC1yZW5kZXJlclwiIGlkPVwiaW5uZXItc3RlcC1yZW5kZXJlci17e2lzUmVuZGVyU3RlcH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbJ1N0ZXAnXSB8IGFzeW5jOyAgaW5wdXRzOiB7c3RlcElkOiBpc1JlbmRlclN0ZXB9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICA8YXBwLWR5bmFtaWMtcmVuZGVyZXIgW21vZHVsZU5hbWVdPVwiY29tcG9uZW50TmFtZVwiPjwvYXBwLWR5bmFtaWMtcmVuZGVyZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG4gICAgPHNlY3Rpb24gKm5nSWY9XCJzZWN0aW9uRGF0YS5zZWN0aW9ucyAmJiBzZWN0aW9uRGF0YS5zZWN0aW9ucy5sZW5ndGhcIlxyXG4gICAgICAgIGlkPVwic2VjdGlvbi1uZXN0ZWQte3tzZWN0aW9uRGF0YT9zZWN0aW9uRGF0YS5zZWN0aW9uX2lkOicnfX1cIlxyXG4gICAgICAgIGNsYXNzPVwic2VjdGlvbi1uZXN0ZWQtYm9keSB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319XCI+XHJcbiAgICAgICAgPCEtLSA8YXBwLXNlY3Rpb24tcmVuZGVyZXIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiIFtzZWN0aW9uRGF0YV09XCJzZWN0aW9uXCIgW3N0ZXBQb3NpdGlvbl09XCJzdGVwUG9zaXRpb24rJy0nK3Bvc1wiIFtzaWRlQmFyRGF0YV09XCJzaWRlQmFyRGF0YVwiXHJcbiAgICAgICAgICAgIFtzdGVwSWRdPVwic3RlcElkXCIgW3N0ZXBOYW1lXT1cInN0ZXBOYW1lXCIgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbkRhdGEuc2VjdGlvbnM7IGxldCBwb3MgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeVNlY3Rpb25zO1wiXHJcbiAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbi1jaGlsZC17e3Bvc319IGJsb2NrLW1haW4te3twb3N9fS17e3N0ZXBQb3NpdGlvbn19ICB7e3NlY3Rpb24uc2VjdGlvbl9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGNvbW1vblV0aWwuaW1wbG9kZUNsYXNzTmFtZShzZWN0aW9uLnNlY3Rpb25fc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUpLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihzZWN0aW9uKSk6Jyd9fVwiXHJcbiAgICAgICAgICAgIFtyb290RGF0YV09XCJyb290RGF0YVwiPlxyXG4gICAgICAgIDwvYXBwLXNlY3Rpb24tcmVuZGVyZXI+IC0tPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidXNlQ29udGVudFByb2plY3Rpb247IGVsc2UgcmVndWxhclNlY3Rpb25cIj5cclxuICAgICAgICAgICAgPHByaW50LXByZXZpZXctd3JhcHBlciBbc2VjdGlvbkRhdGFdPVwic2VjdGlvbkRhdGFcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gTWFpbiBjb250ZW50IChkZWZhdWx0IHNsb3QpIC0tPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1zZWN0aW9uLXJlbmRlcmVyIFxyXG4gICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBcclxuICAgICAgICAgICAgICAgICAgICBbc2VjdGlvbkRhdGFdPVwic2VjdGlvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwUG9zaXRpb25dPVwic3RlcFBvc2l0aW9uKyctJytwb3NcIiBcclxuICAgICAgICAgICAgICAgICAgICBbc2lkZUJhckRhdGFdPVwic2lkZUJhckRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtzdGVwSWRdPVwic3RlcElkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgW3N0ZXBOYW1lXT1cInN0ZXBOYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IHNlY3Rpb24gb2Ygc2VjdGlvbkRhdGEuc2VjdGlvbnM7IGxldCBwb3MgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeVNlY3Rpb25zO1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjb21wbGlhbmNlLWZvcm0td3JhcHBlciBzZWN0aW9uLWNoaWxkLXt7cG9zfX0gYmxvY2stbWFpbi17e3Bvc319LXt7c3RlcFBvc2l0aW9ufX0ge3tzZWN0aW9uLnNlY3Rpb25fc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhjb21tb25VdGlsLmltcGxvZGVDbGFzc05hbWUoc2VjdGlvbi5zZWN0aW9uX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lKSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oc2VjdGlvbikpOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgIFtyb290RGF0YV09XCJyb290RGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgPC9hcHAtc2VjdGlvbi1yZW5kZXJlcj5cclxuICAgICAgICAgICAgPC9wcmludC1wcmV2aWV3LXdyYXBwZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgXHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNyZWd1bGFyU2VjdGlvbj5cclxuICAgICAgICAgICAgPGFwcC1zZWN0aW9uLXJlbmRlcmVyIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbc2VjdGlvbkRhdGFdPVwic2VjdGlvblwiIFtzdGVwUG9zaXRpb25dPVwic3RlcFBvc2l0aW9uKyctJytwb3NcIiBbc2lkZUJhckRhdGFdPVwic2lkZUJhckRhdGFcIlxyXG4gICAgICAgICAgICAgICAgW3N0ZXBJZF09XCJzdGVwSWRcIiBbc3RlcE5hbWVdPVwic3RlcE5hbWVcIiAqbmdGb3I9XCJsZXQgc2VjdGlvbiBvZiBzZWN0aW9uRGF0YS5zZWN0aW9uczsgbGV0IHBvcyA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5U2VjdGlvbnM7XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwic2VjdGlvbi1jaGlsZC17e3Bvc319IGJsb2NrLW1haW4te3twb3N9fS17e3N0ZXBQb3NpdGlvbn19ICB7e3NlY3Rpb24uc2VjdGlvbl9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGNvbW1vblV0aWwuaW1wbG9kZUNsYXNzTmFtZShzZWN0aW9uLnNlY3Rpb25fc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUpLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihzZWN0aW9uKSk6Jyd9fVwiXHJcbiAgICAgICAgICAgICAgICBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuICAgICAgICAgICAgPC9hcHAtc2VjdGlvbi1yZW5kZXJlcj5cclxuICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgIDwvc2VjdGlvbj5cclxuXHJcbjwvZGl2PlxyXG4iXX0=