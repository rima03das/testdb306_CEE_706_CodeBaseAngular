import { Component, Input, forwardRef } from '@angular/core';
import { map } from 'rxjs/operators';
import { CommonUtil } from '../../utils/common-util';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { BlockRendererComponent } from '../block-renderer/block-renderer.component';
import { CommonModule, NgSwitch } from '@angular/common';
import { ViewRendererComponent } from '../view-renderer/view-renderer.component';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "@angular/router";
import * as i3 from "../../models/app-data/app-data.service";
import * as i4 from "../../models/api-data/api-data.service";
import * as i5 from "../../services/shared-events-service.service";
import * as i6 from "../../services/wfe-step-loader.service";
import * as i7 from "../../services/accordian-services";
import * as i8 from "../../utils/wfe-event-list-handler-util";
import * as i9 from "@angular/common";
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(field_r3.field_label);
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const field_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", field_r3.field_label, i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtext(1, " Collapse ");
    i0.ɵɵelementEnd();
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtext(1, "Expand ");
    i0.ɵɵelementEnd();
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_app_block_renderer_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-block-renderer", 18);
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext(2);
    const field_r3 = ctx_r3.$implicit;
    const pos_r5 = ctx_r3.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", ctx_r1.templateId)("blockId", ctx_r1.getBlockData(field_r3))("blockPosition", pos_r5)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section")(2, "div", 8);
    i0.ɵɵlistener("click", function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_Template_div_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(4); ctx_r1.isEditable && ctx_r1.show_section === false ? ctx_r1.show_section = true : ctx_r1.show_section = false; return i0.ɵɵresetView(ctx_r1.isEditable && ctx_r1.emitAccordingState(ctx_r1.sectionData.section_id, ctx_r1.show_section)); });
    i0.ɵɵtemplate(3, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_3_Template, 2, 1, "div", 9)(4, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_4_Template, 1, 1, "div", 10)(5, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_5_Template, 2, 0, "div", 11)(6, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_div_6_Template, 2, 0, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_app_block_renderer_7_Template, 1, 5, "app-block-renderer", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r3 = i0.ɵɵnextContext();
    const field_r3 = ctx_r3.$implicit;
    const pos_r5 = ctx_r3.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("accordion-section accordion-section-", pos_r5, "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : undefined)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(field_r3.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(field_r3.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.show_section == false ? true : false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.show_section);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.show_section);
} }
function AccordionRendererComponent_section_0_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 6);
    i0.ɵɵtemplate(2, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_ng_container_2_Template, 8, 10, "ng-container", 7);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", field_r3.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Generic Block");
} }
function AccordionRendererComponent_section_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionData.fields)("ngForTrackBy", ctx_r1.trackById);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r7.name);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", data_r7.name, i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.additionalParameters["collapseTitle"]);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 29);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.additionalParameters["collapseTitle"], i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_span_1_Template, 2, 1, "span", 26)(2, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_span_2_Template, 1, 1, "span", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.additionalParameters["collapseTitle"]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.additionalParameters["collapseTitle"]));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 28);
    i0.ɵɵtext(1, "Collapse");
    i0.ɵɵelementEnd();
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_container_1_Template, 3, 2, "ng-container", 25)(2, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_ng_template_2_Template, 2, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noCollapseText_r8 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["collapseTitle"])("ngIfElse", noCollapseText_r8);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.additionalParameters["expandTitle"]);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 33);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.additionalParameters["expandTitle"], i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_span_1_Template, 2, 1, "span", 30)(2, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_span_2_Template, 1, 1, "span", 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.additionalParameters["expandTitle"]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.additionalParameters["expandTitle"]));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 32);
    i0.ɵɵtext(1, "Open");
    i0.ɵɵelementEnd();
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_container_1_Template, 3, 2, "ng-container", 25)(2, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_ng_template_2_Template, 2, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noOpenText_r9 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["expandTitle"])("ngIfElse", noOpenText_r9);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_app_block_renderer_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-block-renderer", 34);
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const data_r7 = ctx_r9.$implicit;
    const pos_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("hidden", !data_r7.showSection)("stepId", ctx_r1.stepId)("templateId", ctx_r1.templateId)("blockId", data_r7.blockId)("blockPosition", pos_r11)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_ng_container_1_app_view_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-view-renderer", 38);
} if (rf & 2) {
    const ctx_r11 = i0.ɵɵnextContext();
    const field_r13 = ctx_r11.$implicit;
    const pos_r14 = ctx_r11.index;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", data_r7.block_id, "-", pos_r14, " ", field_r13.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r13.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, ctx_r1.rootData.templateClass, ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r13)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r13)("position", pos_r14)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_ng_container_1_app_view_renderer_1_Template, 1, 10, "app-view-renderer", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r13 = ctx.$implicit;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.subHeaderFields.includes(field_r13.unique_id));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const data_r7 = ctx_r9.$implicit;
    const pos_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block template-", ctx_r1.templateId, " block-", data_r7.block_id, "  block-", pos_r11, " ", data_r7.blockRenderedData.block_style ? data_r7.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", data_r7.block_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r7.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 35);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_section_1_Template, 2, 10, "section", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("hidden", data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.blockRenderedData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_ng_container_1_app_view_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-view-renderer", 38);
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const field_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", data_r7.block_id, "-", pos_r17, " ", field_r16.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r16.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, ctx_r1.rootData.templateClass, ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r16)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r16)("position", pos_r17)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_ng_container_1_app_view_renderer_1_Template, 1, 10, "app-view-renderer", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r16 = ctx.$implicit;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r7.footerFields.includes(field_r16.unique_id) && !data_r7.subHeaderFields.includes(field_r16.unique_id));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const data_r7 = ctx_r9.$implicit;
    const pos_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block template-", ctx_r1.templateId, " block-", data_r7.block_id, "  block-", pos_r11, " ", data_r7.blockRenderedData.block_style ? data_r7.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", data_r7.block_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r7.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 39);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_section_1_Template, 2, 10, "section", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("hidden", !data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.blockRenderedData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_ng_container_1_app_view_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-view-renderer", 38);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const field_r19 = ctx_r17.$implicit;
    const pos_r20 = ctx_r17.index;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", data_r7.block_id, "-", pos_r20, " ", field_r19.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r19.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, ctx_r1.rootData.templateClass, ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r19)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r19)("position", pos_r20)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_ng_container_1_app_view_renderer_1_Template, 1, 10, "app-view-renderer", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const data_r7 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.footerFields.includes(field_r19.unique_id));
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_ng_container_1_Template, 2, 1, "ng-container", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext(2);
    const data_r7 = ctx_r9.$implicit;
    const pos_r11 = ctx_r9.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate5("cee-block template-", ctx_r1.templateId, " block-", data_r7.block_id, "  block-", pos_r11, " ", data_r7.blockRenderedData.block_style ? data_r7.blockRenderedData.block_style.custom_class_name : "", " ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵpropertyInterpolate("id", data_r7.block_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r7.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 40);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_section_1_Template, 2, 10, "section", 36);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("hidden", !data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.blockRenderedData);
} }
function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section")(2, "div", 8);
    i0.ɵɵlistener("click", function AccordionRendererComponent_section_0_ng_container_2_ng_container_1_Template_div_click_2_listener() { const data_r7 = i0.ɵɵrestoreView(_r6).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.isEditable && ctx_r1.displayAccordion(data_r7); return i0.ɵɵresetView(ctx_r1.isEditable && ctx_r1.emitAccordingState(data_r7.blockId, data_r7.showSection)); });
    i0.ɵɵtemplate(3, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_3_Template, 2, 1, "div", 9)(4, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_4_Template, 1, 1, "div", 10);
    i0.ɵɵelementStart(5, "div", 20);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_7_Template, 4, 2, "div", 11)(8, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_8_Template, 4, 2, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_app_block_renderer_9_Template, 1, 6, "app-block-renderer", 21)(10, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_10_Template, 2, 2, "div", 22)(11, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_11_Template, 2, 2, "div", 23)(12, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_div_12_Template, 2, 2, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r7 = ctx.$implicit;
    const pos_r11 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("accordion-section accordion-section-", pos_r11, "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : undefined)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(data_r7.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(data_r7.name));
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.apiData[ctx_r1.commonUtil.getPossibleId(data_r7.possible_value)]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r7.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.footerFields.length == 0 && data_r7.subHeaderFields.length == 0 && data_r7.jsonLoaded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.subHeaderFields.length > 0 && data_r7.jsonLoaded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (data_r7.footerFields.length > 0 || data_r7.subHeaderFields.length > 0) && data_r7.jsonLoaded);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r7.footerFields.length > 0 && data_r7.jsonLoaded);
} }
function AccordionRendererComponent_section_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_2_ng_container_1_Template, 13, 14, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.accordionData);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(data_r22.name);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 15);
} if (rf & 2) {
    const data_r22 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", data_r22.name, i0.ɵɵsanitizeHtml);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameters["collapseTitle"], " ");
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Collapse ");
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_ng_container_1_Template, 2, 1, "ng-container", 25)(2, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_ng_template_2_Template, 1, 0, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noCollapseText_r23 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["collapseTitle"])("ngIfElse", noCollapseText_r23);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameters["expandTitle"], " ");
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0, " Open ");
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_ng_container_1_Template, 2, 1, "ng-container", 25)(2, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_ng_template_2_Template, 1, 0, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const noOpenText_r24 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["expandTitle"])("ngIfElse", noOpenText_r24);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 42);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r25 = ctx.$implicit;
    const position_r26 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r26, " ", field_r25.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r25.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r25)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r25)("position", position_r26)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData)("rowData", field_r25["rowData"])("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition)("visibleCondition", ctx_r1.visibleCondition);
} }
function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "section")(2, "div", 8);
    i0.ɵɵlistener("click", function AccordionRendererComponent_section_0_ng_container_3_ng_container_1_Template_div_click_2_listener() { const data_r22 = i0.ɵɵrestoreView(_r21).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.isEditable && ctx_r1.displayAccordion(data_r22); return i0.ɵɵresetView(ctx_r1.isEditable && ctx_r1.emitAccordingState(data_r22.id, data_r22.showSection)); });
    i0.ɵɵtemplate(3, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_3_Template, 2, 1, "div", 9)(4, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_4_Template, 1, 1, "div", 10)(5, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_5_Template, 4, 2, "div", 11)(6, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_div_6_Template, 4, 2, "div", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "div", 41);
    i0.ɵɵtemplate(8, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_ng_container_8_Template, 2, 13, "ng-container", 19);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    const pos_r27 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("accordion-section accordion-section-", pos_r27, "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : undefined)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(data_r22.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(data_r22.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r22.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !data_r22.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("hidden", !data_r22.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r22.fields);
} }
function AccordionRendererComponent_section_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_3_ng_container_1_Template, 9, 11, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.accordionListData);
} }
function AccordionRendererComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 3);
    i0.ɵɵtemplate(1, AccordionRendererComponent_section_0_ng_container_1_Template, 2, 2, "ng-container", 4)(2, AccordionRendererComponent_section_0_ng_container_2_Template, 2, 1, "ng-container", 4)(3, AccordionRendererComponent_section_0_ng_container_3_Template, 2, 1, "ng-container", 4);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("cee-accordion ", ctx_r1.sectionData.section_style ? ctx_r1.sectionData.section_style.custom_class_name : ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.sectionData.unique_id);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameters["Aria-Label"] ? ctx_r1.additionalParameters["Aria-Label"] : ctx_r1.sectionData.unique_id ? ctx_r1.sectionData.field_label : ctx_r1.sectionData.section_name)("role", ctx_r1.additionalParameters["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData && ctx_r1.sectionData.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData && ctx_r1.sectionData.possible_values && ctx_r1.accordionData.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData && ctx_r1.isListAccordion && ctx_r1.accordionListData.length > 0);
} }
export class AccordionRendererComponent {
    http;
    router;
    appDataService;
    apiDataService;
    sharedEventsService;
    wfeStepLoaderService;
    accordionService;
    cdr;
    eventListHandler;
    ngZone;
    el;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    sectionData;
    primaryKeyIndex;
    stepId;
    templateId;
    block_description;
    rootData;
    blockRenderedData;
    additionalParameters = {
        expandTitle: '',
        collapseTitle: ''
    };
    accordionData = [];
    show_section = true;
    apiData = {}; // special api key for PIVS
    commonUtil;
    flatandNestUtil;
    setApiCallBackUtil;
    setDynamicLabelUtil;
    is_bootstrap;
    variableObject = {}; // variable object
    isListAccordion = false;
    accordionListData = [];
    fieldIdMapApiKey;
    apiKeyUtil;
    conditionalUtil;
    isVisible = false;
    isEditable = false;
    dummyaccordionData = [];
    CEE_Skip_accordion_load;
    sectionSubscription;
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
    constructor(http, router, appDataService, apiDataService, sharedEventsService, wfeStepLoaderService, accordionService, cdr, eventListHandler, ngZone, el) {
        this.http = http;
        this.router = router;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.sharedEventsService = sharedEventsService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.accordionService = accordionService;
        this.cdr = cdr;
        this.eventListHandler = eventListHandler;
        this.ngZone = ngZone;
        this.el = el;
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        this.flatandNestUtil = new FlatUnflat(appDataService);
        this.setApiCallBackUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    trackById(index, item) {
        return item.unique_id;
    }
    async ngOnInit() {
        const savedClass = localStorage.getItem('lastExpandedAccordion');
        const lastExpandedAccordionId = localStorage.getItem('lastExpandedAccordionId');
        // const lastRoute = localStorage.getItem('lastRoute');
        // const currentRoute = this.router.url;
        if (savedClass) {
            setTimeout(() => {
                const elementToScroll = document.querySelector(`.${savedClass}`); //document.getElementById(lastExpandedAccordionId);
                if (elementToScroll) {
                    elementToScroll.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    // ✅ Remove localStorage items after scrolling
                    localStorage.removeItem('lastExpandedAccordion');
                    localStorage.removeItem('lastExpandedAccordionId');
                    localStorage.removeItem('lastRoute');
                }
            }, 500); // Delay ensures the DOM is fully rendered
        }
        // Means it is a field not a section
        if (this.sectionData && this.sectionData.unique_id) {
            if (this.sectionData.additional_parameters.length > 0) {
                for (const paramter of this.sectionData.additional_parameters) {
                    this.additionalParameters[paramter.parameter_type] = paramter.value;
                }
                // this.CEE_Skip_accordion_load = this.additionalParameters['CEE_Skip_accordion_load'] ? this.additionalParameters['CEE_Skip_accordion_load'] : false;
                // if(this.CEE_Skip_accordion_load == "true"){
                //     this.setAdditionalParams();
                // }
            }
            this.isListAccordion = this.additionalParameters['renderType'] && this.additionalParameters['renderType'].toLowerCase() === 'dynamic' ? true : false;
            if (!this.isListAccordion && this.sectionData.possible_values.length > 0) {
                // if(this.CEE_Skip_accordion_load != "true"){
                this.processOutsideOfAngularZone();
                // }
            }
            if (this.isListAccordion) {
                if (this.additionalParameters['default_value']) {
                    this.processOutsideOfAngularZoneDefault();
                }
                else {
                    console.error('Additional parameter default_value not define');
                }
            }
            this.variableObject['emitApiSuccessResponse_' + this.sectionData.unique_id] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
                if (this.isListAccordion) {
                    const result = this.setApiCallBackUtil.setApiCallBackData(this.sectionData, res);
                    if (result) {
                        this.accordionListData = [];
                        let i = 0;
                        for (const value of result) {
                            let labelName = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.sectionData.field_label }, value);
                            let fields = [];
                            if (this.sectionData.fields) {
                                for (const j of this.sectionData.fields) {
                                    const field = JSON.parse(JSON.stringify(j));
                                    field['rowData'] = this.generateRowData(field, value, i);
                                    fields.push(field);
                                }
                            }
                            this.accordionListData.push({
                                id: i,
                                name: labelName.field_label,
                                fields,
                                showSection: (this.additionalParameters['allowMultiple'] === 'true') ? true : false
                            });
                            i++;
                        }
                    }
                }
                else {
                    const resData = this.flatandNestUtil.flattenJSON(res);
                    var passed = this.accordionData.every((element, index, array) => {
                        return resData[this.commonUtil.getPossibleId(element.possible_value)];
                    });
                    this.additionalParameters = this.setDynamicLabelUtil.getDynamicValue(this.additionalParameters, resData);
                    if (passed) {
                        this.apiData = resData;
                    }
                    for (let i = 0; i < this.accordionData.length; i++) {
                        if (this.accordionData[i]['name_config'].includes('((dynamic))')) {
                            this.accordionData[i].name = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.accordionData[i]['name_config'] }).field_label;
                        }
                    }
                }
            });
            const _this = this;
            this.variableObject['toggleAccordionEmitter_' + this.sectionData.unique_id] = this.sharedEventsService.toggleAccordionEmitter.subscribe(res => {
                if (res['ExpandBlock']) {
                    this.accordionData.map(function (val, index) {
                        if (val.blockId === res['ExpandBlock']) {
                            val.showSection = true;
                            val.jsonLoaded = true;
                        }
                        else if (_this.additionalParameters['allowMultiple'] === 'false') {
                            val.showSection = false;
                        }
                        return val;
                    });
                }
            });
            this.variableObject['emitForEmptySession_' + this.sectionData.unique_id] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
                if (res) {
                    this.onEmptySession(res);
                }
            });
            this.variableObject['emitOnDataSetOrUpdated_' + this.sectionData.unique_id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
                this.onFieldDataUpdated(res.apiKey, res.value);
            });
            this.onFieldDataUpdated(null, null);
            this.variableObject['emitFieldStateChangeEventEmitter_' + this.sectionData.unique_id] =
                this.sharedEventsService.emitFieldStateChangeEventEmitter.subscribe(res => {
                    if (res) {
                        const id = this.sectionData.unique_id;
                        if (res.ids.includes(id)) {
                            switch (res.type) {
                                case 'ChangeVisibility':
                                    setTimeout(() => {
                                        this.isVisible = (res.value.length > 0 ? res.value[res.ids.indexOf(id)] : res.value[0]) === 0 ? false : true;
                                    }, 0);
                                    break;
                                case 'ChangeEditable':
                                    setTimeout(() => {
                                        this.isEditable =
                                            (res.value.length > 0 ? res.value[res.ids.indexOf(id)] : res.value[0]) === 0 ? false : true;
                                    }, 0);
                                    break;
                            }
                        }
                    }
                });
            if (this.sectionData.is_display === 1) {
                this.isVisible = true;
            }
            if (this.sectionData.is_editable === 1) {
                this.isEditable = true;
            }
        }
        this.variableObject['showMandatoryErrorMsg_' + this.sectionData.unique_id] = this.sharedEventsService.showMandatoryErrorMsg.subscribe((res) => {
            if (res) {
                if (Array.isArray(res.fields) && res.type === 'click') {
                    for (const data of this.accordionData) {
                        if (this.rootData.blockFields && this.rootData.blockFields.hasOwnProperty(data.blockId)) {
                            for (const fieldId of this.rootData.blockFields[data.blockId]) {
                                if (res.fields.includes(fieldId)) {
                                    data.jsonLoaded = true;
                                    data.showSection = true;
                                }
                            }
                        }
                    }
                }
            }
        });
        this.sectionSubscription = this.accordionService.sectionOpen$.subscribe(sectionId => {
            //console.log("accordian service call occur");   
            //console.log(`📢 Received request to open section: ${sectionId}`);
            this.openAccordionById(sectionId);
        });
    }
    // openAccordionById(sectionId: string) {
    //     if (this.accordionData.length > 0) {
    //         this.accordionData.forEach((accordion) => {
    //             if (accordion.blockId === sectionId) {
    //                 accordion.showSection = true;
    //                 accordion.jsonLoaded = true;
    //             }
    //         });
    //     }
    // }
    openAccordionById(sectionId) {
        //console.log("sectionId to open -- ", sectionId);
        this.accordionData.forEach(accordion => {
            if (accordion.blockId === sectionId) {
                accordion.showSection = true;
                accordion.jsonLoaded = true;
            }
            else if (this.additionalParameters['allowMultiple'] === 'false') {
                accordion.showSection = false;
            }
        });
    }
    // setAdditionalParams(){
    //     let index = 0;
    //     let gBlockId;
    //     let collapseTitle = 'Collapse';
    //     let expandTitle = 'Open';
    //     let showSectionbox = false;
    //     let footerFields = [];
    //     let skipLoad = "false";
    //     let name = this.sectionData.field_label;
    //     let applicationDetails = '';
    //     let subHeaderFields = [];
    //     let showMultiple = false;
    //     for (const paramter of this.sectionData.additional_parameters) {
    //         switch (paramter.parameter_type) {
    //             case 'default_value':
    //                 gBlockId = paramter.value;
    //                 break;
    //             case 'collapseTitle':
    //                 collapseTitle = paramter.value;
    //                 break;
    //             case 'expandTitle':
    //                 expandTitle = paramter.value;
    //                 break;
    //             case 'CEE_FOOTER_FIELDS':
    //                 footerFields = paramter.value.split('|').map(s => s.trim());
    //                 break;
    //             case 'CEE_Skip_rb_accordion_load':
    //                 skipLoad = paramter.value;
    //                 showSectionbox = true;
    //                 break;
    //             case 'CEE_rb_accordion_InfoBlock':
    //                 applicationDetails = paramter.value ? paramter.value : '';
    //                 break;
    //             case 'CEE_SUB_HEADER_FIELDS':
    //                 subHeaderFields = paramter.value.split('|').map(s => s.trim());
    //                 break;
    //             case 'allowMultiple':
    //                 showMultiple = paramter.value === 'true' ? true : false;
    //                 break;
    //         }
    //     }
    //     const dummyaccInfo = {
    //         id: index,
    //         name: name,
    //         blockId: gBlockId,
    //         possible_value: gBlockId,
    //         showSection: showMultiple,
    //         jsonLoaded: showMultiple,
    //         blockRenderedData: {},
    //         footerFields,
    //         subHeaderFields,
    //         collapseTitle,
    //         expandTitle,
    //         showSectionbox
    //     };
    //     this.dummyaccordionData.push(dummyaccInfo);
    //     index++;
    // }
    async processjsonLoad(data) {
        const blockId = this.getBlockId(data.blockId);
        if (!this.dummyaccordionData.includes(blockId)) {
            const bData = await this.wfeStepLoaderService.loadBlockByName(blockId).toPromise();
            if (bData) {
                let bDataSet = this.commonUtil.blockBootstrapProcess(bData);
                this.rootData['blockFields'][bDataSet.block_id] = [];
                for (let field of bDataSet.block_fields) {
                    this.rootData['blockFields'][bDataSet.block_id]?.push(field.unique_id);
                }
                data.name = bData ? bData['block_description'] : '';
                data.blockRenderedData = bData ? this.commonUtil.blockBootstrapProcess(bData) : {},
                    data.showSection = true;
                data.jsonLoaded = true;
                data['name_config'] = data.name;
                if (data['name_config'].includes('((dynamic))')) {
                    data.name = this.setDynamicLabelUtil.getDynamicValue({ field_label: data['name_config'] }).field_label;
                }
                if (this.accordionData.filter(x => x.blockId === blockId).length > 0) {
                    this.accordionData.forEach((x, index) => {
                        if (x.blockId === blockId) {
                            this.accordionData[index] = data;
                        }
                    });
                }
                // this.accordionData.push(data);
                this.dummyaccordionData.push(data.blockId);
                // this.dummyaccordionData.forEach(x =>{
                //     if(x.blockId = blockId){
                //         this.dummyaccordionData.splice(this.dummyaccordionData.indexOf(x), 1);
                //     }
                // })
            }
        }
    }
    processOutsideOfAngularZone() {
        this.ngZone.runOutsideAngular(async () => {
            let index = 0;
            const footerFields = this.additionalParameters['CEE_FOOTER_FIELDS'] ? this.additionalParameters['CEE_FOOTER_FIELDS'].split('|').map(s => s.trim()) : [];
            const subHeaderFields = this.additionalParameters['CEE_SUB_HEADER_FIELDS'] ? this.additionalParameters['CEE_SUB_HEADER_FIELDS'].split('|').map(s => s.trim()) : [];
            this.CEE_Skip_accordion_load = this.additionalParameters['CEE_Skip_accordion_load'] ? this.additionalParameters['CEE_Skip_accordion_load'] : false;
            for (const value of this.sectionData.possible_values) {
                const blockId = this.getBlockId(value);
                if (this.CEE_Skip_accordion_load !== "true") {
                    this.dummyaccordionData.push(blockId);
                }
                const bData = await this.wfeStepLoaderService.loadBlockByName(blockId).toPromise();
                if (bData) {
                    let bDataSet = this.commonUtil.blockBootstrapProcess(bData);
                    this.rootData['blockFields'][bDataSet.block_id] = [];
                    for (let field of bDataSet.block_fields) {
                        this.rootData['blockFields'][bDataSet.block_id]?.push(field.unique_id);
                    }
                    const accInfo = {
                        id: index,
                        name: bData ? bData['block_description'] : '',
                        blockId: blockId,
                        possible_value: value,
                        showSection: (this.additionalParameters['allowMultiple'] === 'true') ? true : false,
                        jsonLoaded: (this.additionalParameters['allowMultiple'] === 'true') ? true : false,
                        blockRenderedData: this.CEE_Skip_accordion_load == "true" ? {} : this.commonUtil.blockBootstrapProcess(bData),
                        footerFields,
                        subHeaderFields
                    };
                    accInfo['name_config'] = accInfo.name;
                    if (accInfo['name_config'].includes('((dynamic))')) {
                        accInfo.name = this.setDynamicLabelUtil.getDynamicValue({ field_label: accInfo['name_config'] }).field_label;
                    }
                    this.accordionData.push(accInfo);
                    index++;
                }
            }
        });
    }
    processOutsideOfAngularZoneDefault() {
        this.ngZone.runOutsideAngular(async () => {
            const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
            this.rootData['blockFields'][this.blockRenderedData.block_id] = [];
            for (let field of this.blockRenderedData.block_fields) {
                this.rootData['blockFields'][this.blockRenderedData.block_id].push(field.unique_id);
            }
            this.sectionData.fields = this.blockRenderedData.block_fields;
        });
    }
    generateRowData(field, data, list_pos, expandable = false) {
        this.ngZone.runOutsideAngular(async () => {
            this.generateRowDataprocess(field, data, list_pos, expandable = false);
        });
    }
    onFieldDataUpdated(fieldId, value) {
        if (this.sectionData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.sectionData, fieldId, value);
            if (visible !== undefined) {
                this.isVisible = visible;
            }
        }
        if (this.sectionData.is_editable === 2) {
            const editable = this.conditionalUtil.checkEditable(this.sectionData, fieldId, value);
            if (editable !== undefined) {
                this.isEditable = editable;
            }
        }
    }
    /**
     * method called when any Empty Session event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that needs to be cleared
     */
    onEmptySession(get_data) {
        let data = [];
        let unique_id_value = [];
        if (get_data.unique_ids.length > 0) {
            data = get_data.unique_ids;
            unique_id_value = [this.sectionData.unique_id];
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                for (const data of this.accordionData) {
                    data.jsonLoaded = false;
                    data.showSection = false;
                }
                return;
            }
        });
    }
    /**
     * returns the row data on the basis of the type of the list and the editable and visible conditions
     * @param field the cee field object
     * @param data the api response data object
     */
    generateRowDataprocess(field, data, list_pos, expandable = false) {
        let apiData = this.setApiCallBackUtil.setApiCallBackData(field, data);
        expandable && apiData && (data['hasExpandableData'] = true);
        let labelType = '';
        if (field.field_type === 'label') {
            labelType = (this.isSingleAPIKey ? field.api_key : field.response_api_key) ? '' : 'STATIC';
        }
        if (field.field_type === 'Link') {
            apiData = data;
        }
        let obj;
        if (this.sectionData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            let isEditable = false;
            let isVisible = false;
            if (field.is_editable === 1) {
                isEditable = true;
            }
            if (field.is_display === 1) {
                isVisible = true;
            }
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            obj = {
                unique_id: field.unique_id,
                html_id: field.unique_id + '-' + list_pos,
                fromField: 'Accordion',
                visible: field.is_display === 2 ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: (field && field.field_type && (field.field_type === 'label' && field.field_label.includes('((dynamic))') ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData
            };
        }
        else {
            obj = {
                value: (field && field.field_type && (field.field_type === 'label' && field.field_label.includes('((dynamic))') ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                html_id: field.unique_id + '-' + list_pos
            };
        }
        return obj;
    }
    // TODO: Delete this function once the conditional statements depend on the api key then only return the single api response obj
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse) {
        const obj = {};
        for (const key of Object.keys(this.fieldIdMapApiKey)) {
            const uniqueId = this.fieldIdMapApiKey[key];
            obj[uniqueId] = this.setApiCallBackUtil.setApiCallBackData(key, apiResponse) ? this.setApiCallBackUtil.setApiCallBackData(key, apiResponse) : '';
        }
        return obj;
    }
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey() {
        const obj = {};
        for (const field of this.sectionData.fields) {
            this.returnFieldIdMapApiKeyValue(obj, field);
        }
        this.fieldIdMapApiKey = obj;
    }
    // inner function of returnFieldIdMapApiKey
    returnFieldIdMapApiKeyValue(obj, field) {
        if (this.isSingleAPIKey && field.api_key) {
            obj[field.api_key] = field.unique_id; // TODO: Support multiple api keys
        }
        else {
            if (field.response_api_key) {
                if (field.response_api_key.includes('|')) {
                    const keys = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(field.response_api_key));
                    for (const key of keys) {
                        obj[key] = field.unique_id;
                    }
                }
                else {
                    obj[field.response_api_key] = field.unique_id;
                }
            }
        }
    }
    /**
     * return the visible condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalVisible(data, presentValue, field) {
        const visibilityCondition = this.conditionalUtil.checkVisibility(field, field.unique_id, '', data);
        if (visibilityCondition) {
            return visibilityCondition;
        }
        return presentValue;
    }
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalEditable(data, presentValue, field) {
        const editableCondition = this.conditionalUtil.checkEditable(field, field.unique_id, '', data);
        if (editableCondition) {
            return editableCondition;
        }
        return presentValue;
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    // Old phase 1 implementation
    getBlockData(field) {
        let blockData = {};
        if (field.additional_parameters.length > 0) {
            for (const paramter of field.additional_parameters) {
                switch (paramter.parameter_type) {
                    case 'default_value':
                        blockData = paramter.value;
                        break;
                }
            }
        }
        return blockData;
    }
    displayAccordion(data) {
        //console.log("invoked here");
        if (Object.keys(data?.blockRenderedData).length == 0) {
            this.processjsonLoad(data);
        }
        data.jsonLoaded = true;
        if (this.additionalParameters['allowMultiple'] === 'false') {
            if (this.isListAccordion) {
                for (const accordion of this.accordionListData) {
                    if (accordion.id === data.id) {
                        accordion.showSection ? accordion.showSection = false : accordion.showSection = true;
                    }
                    else {
                        accordion.showSection = false;
                    }
                    if (accordion.showSection == true) {
                        this.onItemExpand(accordion);
                    }
                    else {
                        this.onItemCollapse(accordion);
                    }
                }
            }
            else {
                for (const accordion of this.accordionData) {
                    if (accordion.id === data.id) {
                        accordion.showSection ? accordion.showSection = false : accordion.showSection = true;
                    }
                    else {
                        accordion.showSection = false;
                    }
                    if (accordion.showSection == true) {
                        this.onItemExpand(accordion);
                    }
                    else {
                        this.onItemCollapse(accordion);
                    }
                }
            }
        }
        else {
            data.showSection ? data.showSection = false : data.showSection = true;
            if (data.showSection == true) {
                this.onItemExpand(data);
            }
            else {
                this.onItemCollapse(data);
            }
        }
    }
    getBlockId(field) {
        return this.commonUtil.getValue(field);
        // if (field.split('|').length > 1) {
        //     return field.split('|')[1].trim();
        // } else {
        //     return field;
        // }
    }
    async getAccordionName(field) {
        try {
            this.block_description = await this.getBlockDescription(this.getBlockId(field));
        }
        catch (e) {
            console.error(e);
        }
        if (this.block_description !== '') {
            return this.block_description;
        }
        else {
            // return field;
            return '';
        }
    }
    async getBlockDescription(field) {
        return await this.wfeStepLoaderService.loadBlockByName(field).
            pipe(map(block_description_res => block_description_res['block_description'])).toPromise();
    }
    emitAccordingState(id, state) {
        if (state) {
            const parentViewRenderer = this.el.nativeElement.closest('app-view-renderer');
            if (parentViewRenderer) {
                // Extract class that starts with "app-view-renderer-"
                const classList = parentViewRenderer.className.split(' ');
                const targetClass = classList.find(cls => cls.startsWith('app-view-renderer-'));
                if (targetClass.includes('contact_view')) {
                    localStorage.setItem('lastExpandedAccordionId', id);
                    // Store class in localStorage
                    localStorage.setItem('lastExpandedAccordion', targetClass);
                    localStorage.setItem('lastRoute', this.router.url); // Store current route
                }
            }
        }
        else {
            localStorage.removeItem('lastExpandedAccordion');
            localStorage.removeItem('lastExpandedAccordionId');
            localStorage.removeItem('lastRoute');
        }
        this.sharedEventsService.accordionStateEmitter.emit({ id, state });
    }
    ngOnDestroy() {
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    onItemExpand(event) {
        this.onComponentEvent('OnExpand');
    }
    onItemCollapse(event) {
        this.onComponentEvent('OnCollapse');
    }
    /**
     * trigger event if there has been an event triggered on the accordion
     * @param name the name of the event
     */
    onComponentEvent(name) {
        if (this.sectionData && this.sectionData.unique_id) {
            if (this.sectionData && this.sectionData.event_list && this.sectionData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                    if (event && event.isDefault && event.event_name && event.event_name.toLowerCase() === name.toLowerCase()) {
                        this.eventListHandler.switchEventDisplayType(event, this.sectionData.event_list);
                    }
                }
            }
        }
    }
    static ɵfac = function AccordionRendererComponent_Factory(t) { return new (t || AccordionRendererComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.Router), i0.ɵɵdirectiveInject(i3.AppDataService), i0.ɵɵdirectiveInject(i4.ApiDataService), i0.ɵɵdirectiveInject(i5.SharedEventsServiceService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.AccordionService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i8.WFEEventListHandler), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AccordionRendererComponent, selectors: [["app-accordion-renderer"]], inputs: { sectionData: "sectionData", primaryKeyIndex: "primaryKeyIndex", stepId: "stepId", templateId: "templateId", block_description: "block_description", rootData: "rootData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["noCollapseText", ""], ["noOpenText", ""], [3, "class", "id", 4, "ngIf"], [3, "id"], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "ngSwitch"], [4, "ngSwitchCase"], [1, "accordion-header", 3, "click"], ["class", "accordion-header-text", 4, "ngIf"], ["class", "accordion-header-text", 3, "innerHTML", 4, "ngIf"], ["class", "accordion-header-collapse-btn", 4, "ngIf"], ["class", "accordion-header-open-btn", 4, "ngIf"], ["class", "accordion-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData", 4, "ngIf"], [1, "accordion-header-text"], [1, "accordion-header-text", 3, "innerHTML"], [1, "accordion-header-collapse-btn"], [1, "accordion-header-open-btn"], [1, "accordion-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], [4, "ngFor", "ngForOf"], [1, "accordion-api-data"], ["class", "accordion-content", 3, "hidden", "stepId", "templateId", "blockId", "blockPosition", "rootData", 4, "ngIf"], ["class", "accordion-sub-header", 3, "hidden", 4, "ngIf"], ["class", "accordion-content", 3, "hidden", 4, "ngIf"], ["class", "accordion-footer", 3, "hidden", 4, "ngIf"], [4, "ngIf", "ngIfElse"], ["class", "accordion-header-collapse-text", 4, "ngIf"], ["class", "accordion-header-collapse-text", 3, "innerHTML", 4, "ngIf"], [1, "accordion-header-collapse-text"], [1, "accordion-header-collapse-text", 3, "innerHTML"], ["class", "accordion-header-expand-text", 4, "ngIf"], ["class", "accordion-header-expand-text", 3, "innerHTML", 4, "ngIf"], [1, "accordion-header-expand-text"], [1, "accordion-header-expand-text", 3, "innerHTML"], [1, "accordion-content", 3, "hidden", "stepId", "templateId", "blockId", "blockPosition", "rootData"], [1, "accordion-sub-header", 3, "hidden"], [3, "id", "class", 4, "ngIf"], [3, "class", "stepId", "field", "position", "templateId", "rootData", 4, "ngIf"], [3, "stepId", "field", "position", "templateId", "rootData"], [1, "accordion-content", 3, "hidden"], [1, "accordion-footer", 3, "hidden"], [3, "hidden"], [3, "stepId", "field", "position", "templateId", "rootData", "rowData", "mandatoryCondition", "editableCondition", "visibleCondition"]], template: function AccordionRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AccordionRendererComponent_section_0_Template, 4, 9, "section", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [NgSwitch, CommonModule, i9.NgForOf, i9.NgIf, i9.NgSwitchCase, BlockRendererComponent, ViewRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AccordionRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-accordion-renderer', standalone: true, imports: [NgSwitch, CommonModule, forwardRef(() => BlockRendererComponent), forwardRef(() => ViewRendererComponent)], template: "<section *ngIf=\"isVisible\"\r\n    class=\"cee-accordion {{sectionData.section_style?sectionData.section_style.custom_class_name:(sectionData.field_style?sectionData.field_style.custom_class_name:'')}}\"\r\n    [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : sectionData.unique_id ? sectionData.field_label : sectionData.section_name\"\r\n    [attr.role]=\"additionalParameters['Aria-Role']\" id=\"{{sectionData.unique_id}}\">\r\n    <!-- Phase 1 -->\r\n\r\n    <ng-container *ngIf=\"sectionData && sectionData.fields\">\r\n        <ng-container *ngFor=\"let field of sectionData.fields; index as pos; trackBy: trackById\">\r\n            <ng-container [ngSwitch]=\"field.field_type\">\r\n                <ng-container *ngSwitchCase=\"'Generic Block'\">\r\n                    <section class=\"accordion-section accordion-section-{{pos}}\"\r\n                        [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n                        [attr.role]=\"additionalParameters['Aria-Role']\">\r\n                        <div class=\"accordion-header\"\r\n                            (click)=\"isEditable && (show_section === false) ? show_section = true : show_section = false; isEditable && emitAccordingState(sectionData.section_id, show_section)\">\r\n                            <div *ngIf=\"!isHTML(field.field_label)\" class=\"accordion-header-text\">{{field.field_label}}</div>\r\n                            <div *ngIf=\"isHTML(field.field_label)\" class=\"accordion-header-text\" [innerHTML]=\"field.field_label\"></div>\r\n                            <div class=\"accordion-header-collapse-btn\" *ngIf=\"show_section == false ? true : false\">\r\n                                Collapse\r\n                            </div>\r\n                            <div class=\"accordion-header-open-btn\" *ngIf=\"show_section\">Expand\r\n                            </div>\r\n                        </div>\r\n                        <!-- [hidden]=\"field.showSection===false\"  -->\r\n                        <app-block-renderer *ngIf=\"!show_section\" [stepId]=\"stepId\" [templateId]=\"templateId\"\r\n                            [blockId]=\"getBlockData(field)\" class=\"accordion-content\" [blockPosition]=\"pos\"\r\n                            [rootData]=\"rootData\">\r\n                        </app-block-renderer>\r\n                    </section>\r\n                </ng-container>\r\n            </ng-container>\r\n        </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- Phase 2, Accrdion as a datatype -->\r\n    <ng-container *ngIf=\"sectionData && sectionData.possible_values && accordionData.length > 0\">\r\n        <ng-container *ngFor=\"let data of accordionData; index as pos\">\r\n            <section class=\"accordion-section accordion-section-{{pos}}\"\r\n                [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n                [attr.role]=\"additionalParameters['Aria-Role']\">\r\n                <div class=\"accordion-header\"\r\n                    (click)=\"isEditable && displayAccordion(data); isEditable && emitAccordingState(data.blockId, data.showSection)\">\r\n                    <div *ngIf=\"!isHTML(data.name)\" class=\"accordion-header-text\">{{data.name}}</div>\r\n                    <div *ngIf=\"isHTML(data.name)\" class=\"accordion-header-text\" [innerHTML]=\"data.name\"></div>\r\n                    <div class=\"accordion-api-data\">{{apiData[commonUtil.getPossibleId(data.possible_value)]}}</div>\r\n                    <div class=\"accordion-header-collapse-btn\" *ngIf=\"data.showSection\">\r\n                        <ng-container *ngIf=\"additionalParameters['collapseTitle']; else noCollapseText\">\r\n                            <span *ngIf=\"!isHTML(additionalParameters['collapseTitle'])\" class=\"accordion-header-collapse-text\">{{additionalParameters['collapseTitle']}}</span>\r\n                            <span *ngIf=\"isHTML(additionalParameters['collapseTitle'])\" class=\"accordion-header-collapse-text\" [innerHTML]=\"additionalParameters['collapseTitle']\"></span>\r\n                        </ng-container>\r\n                        <ng-template #noCollapseText>\r\n                            <span class=\"accordion-header-collapse-text\">Collapse</span>\r\n                        </ng-template>\r\n                    </div>\r\n                    <div class=\"accordion-header-open-btn\" *ngIf=\"!data.showSection\">\r\n                        <ng-container *ngIf=\"additionalParameters['expandTitle']; else noOpenText\">\r\n                            <span *ngIf=\"!isHTML(additionalParameters['expandTitle'])\" class=\"accordion-header-expand-text\">{{additionalParameters['expandTitle']}}</span>\r\n                            <span *ngIf=\"isHTML(additionalParameters['expandTitle'])\" class=\"accordion-header-expand-text\" [innerHTML]=\"additionalParameters['expandTitle']\"></span>\r\n                        </ng-container>\r\n                        <ng-template #noOpenText>\r\n                            <span class=\"accordion-header-expand-text\">Open</span>\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n                <!--*ngIf=\"data.showSection\"  [hidden]=\"!data.showSection\"-->\r\n                <app-block-renderer *ngIf=\"data.footerFields.length == 0 && data.subHeaderFields.length == 0 && data.jsonLoaded\" [hidden]=\"!data.showSection\" [stepId]=\"stepId\"\r\n                    [templateId]=\"templateId\" [blockId]=\"data.blockId\" class=\"accordion-content\" [blockPosition]=\"pos\"\r\n                    [rootData]=\"rootData\">\r\n                </app-block-renderer>\r\n\r\n                <div *ngIf=\"data.subHeaderFields.length > 0 && data.jsonLoaded\" [hidden]=\"data.showSection\" class=\"accordion-sub-header\">\r\n                    <section id=\"{{ data.block_id }}\"\r\n                        class=\"cee-block template-{{templateId}} block-{{ data.block_id }}  block-{{pos}} {{data.blockRenderedData.block_style?data.blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                        *ngIf=\"data.blockRenderedData\">\r\n                \r\n                        <ng-container *ngFor=\"let field of data.blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer *ngIf=\"data.subHeaderFields.includes(field.unique_id)\"\r\n                                class=\"app-view-renderer-{{ data.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, rootData.templateClass, conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n                    </section>\r\n                </div>\r\n\r\n                <div *ngIf=\"(data.footerFields.length > 0 || data.subHeaderFields.length > 0) && data.jsonLoaded\" [hidden]=\"!data.showSection\" class=\"accordion-content\">\r\n                    <section id=\"{{ data.block_id }}\"\r\n                        class=\"cee-block template-{{templateId}} block-{{ data.block_id }}  block-{{pos}} {{data.blockRenderedData.block_style?data.blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                        *ngIf=\"data.blockRenderedData\">\r\n                \r\n                        <ng-container *ngFor=\"let field of data.blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer\r\n                                *ngIf=\"!data.footerFields.includes(field.unique_id) && !data.subHeaderFields.includes(field.unique_id)\"\r\n                                class=\"app-view-renderer-{{ data.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, rootData.templateClass, conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n                    </section>\r\n                </div>\r\n\r\n                <div *ngIf=\"data.footerFields.length > 0 && data.jsonLoaded\" [hidden]=\"!data.showSection\" class=\"accordion-footer\">\r\n                    <section id=\"{{ data.block_id }}\"\r\n                        class=\"cee-block template-{{templateId}} block-{{ data.block_id }}  block-{{pos}} {{data.blockRenderedData.block_style?data.blockRenderedData.block_style.custom_class_name:''}} {{is_bootstrap?'row':''}}\"\r\n                        *ngIf=\"data.blockRenderedData\">\r\n                \r\n                        <ng-container *ngFor=\"let field of data.blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer *ngIf=\"data.footerFields.includes(field.unique_id)\"\r\n                                class=\"app-view-renderer-{{ data.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, rootData.templateClass, conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\" [rootData]=\"rootData\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n                    </section>\r\n                </div>\r\n\r\n            </section>\r\n        </ng-container>\r\n    </ng-container>\r\n\r\n    <!-- Phase 3, Accrdion as a datatype with dynamic data -->\r\n    <ng-container *ngIf=\"sectionData && isListAccordion && accordionListData.length > 0\">\r\n        <ng-container *ngFor=\"let data of accordionListData; index as pos\">\r\n            <section class=\"accordion-section accordion-section-{{pos}}\"\r\n                [attr.aria-label]=\"additionalParameters['Aria-Label'] ? additionalParameters['Aria-Label'] : undefined\"\r\n                [attr.role]=\"additionalParameters['Aria-Role']\">\r\n                <div class=\"accordion-header\"\r\n                    (click)=\"isEditable && displayAccordion(data); isEditable && emitAccordingState(data.id, data.showSection)\">\r\n                    <div *ngIf=\"!isHTML(data.name)\" class=\"accordion-header-text\">{{data.name}}</div>\r\n                    <div *ngIf=\"isHTML(data.name)\" class=\"accordion-header-text\" [innerHTML]=\"data.name\"></div>\r\n                    <div class=\"accordion-header-collapse-btn\" *ngIf=\"data.showSection\">\r\n                        <ng-container *ngIf=\"additionalParameters['collapseTitle']; else noCollapseText\">\r\n                            {{additionalParameters['collapseTitle']}}\r\n                        </ng-container>\r\n                        <ng-template #noCollapseText>\r\n                            Collapse\r\n                        </ng-template>\r\n                    </div>\r\n                    <div class=\"accordion-header-open-btn\" *ngIf=\"!data.showSection\">\r\n                        <ng-container *ngIf=\"additionalParameters['expandTitle']; else noOpenText\">\r\n                            {{additionalParameters['expandTitle']}}\r\n                        </ng-container>\r\n                        <ng-template #noOpenText>\r\n                            Open\r\n                        </ng-template>\r\n                    </div>\r\n                </div>\r\n                <div [hidden]=\"!data.showSection\">\r\n                    <ng-container *ngFor=\"let field of data.fields; index as position\">\r\n                        <app-view-renderer \r\n                            [stepId]=\"stepId\" \r\n                            [field]=\"field\" \r\n                            [position]=\"position\" \r\n                            [templateId]=\"templateId\" \r\n                            [rootData]=\"rootData\"\r\n                            [rowData]=\"field['rowData']\"\r\n                            [mandatoryCondition]=\"mandatoryCondition\"\r\n                            [editableCondition]=\"editableCondition\"\r\n                            [visibleCondition]=\"visibleCondition\"\r\n                            class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                        </app-view-renderer>\r\n                    </ng-container>\r\n                </div>\r\n            </section>\r\n        </ng-container>\r\n    </ng-container>\r\n</section>\r\n" }]
    }], () => [{ type: i1.HttpClient }, { type: i2.Router }, { type: i3.AppDataService }, { type: i4.ApiDataService }, { type: i5.SharedEventsServiceService }, { type: i6.WfeStepLoaderService }, { type: i7.AccordionService }, { type: i0.ChangeDetectorRef }, { type: i8.WFEEventListHandler }, { type: i0.NgZone }, { type: i0.ElementRef }], { sectionData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], block_description: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AccordionRendererComponent, { className: "AccordionRendererComponent", filePath: "lib\\components\\accordion-renderer\\accordion-renderer.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWNjb3JkaW9uLXJlbmRlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL2FjY29yZGlvbi1yZW5kZXJlci9hY2NvcmRpb24tcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWNjb3JkaW9uLXJlbmRlcmVyL2FjY29yZGlvbi1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBRSxVQUFVLEVBQXlDLE1BQU0sZUFBZSxDQUFDO0FBRzVHLE9BQU8sRUFBRSxHQUFHLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUdyQyxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBRTFELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sNENBQTRDLENBQUM7QUFDcEYsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUV6RCxPQUFPLEVBQUUscUJBQXFCLEVB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Iiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IG1hcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgcGlwZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgRmxhdFVuZmxhdCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZsYXQtdW5mbGF0LWpzb24nO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2V0QVBJQ2FsbGJhY2tEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0LWFwaS1jYWxsYmFjay1kYXRhLXV0aWwnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRHluYW1pY0xhYmVsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2R5bmFtaWMtbGFiZWwtdXRpbCc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBUElLZXlVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWtleS11dGlsJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXV0aWwnO1xyXG5pbXBvcnQgeyBXRkVFdmVudExpc3RIYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWV2ZW50LWxpc3QtaGFuZGxlci11dGlsJztcclxuaW1wb3J0IHsgQmxvY2tSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL2Jsb2NrLXJlbmRlcmVyL2Jsb2NrLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdTd2l0Y2ggfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgVmlld1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldy1yZW5kZXJlci92aWV3LXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFjY29yZGlvblNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9hY2NvcmRpYW4tc2VydmljZXMnO1xyXG5pbXBvcnQgeyBkZWZlciwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENoaWxkQ29uZGl0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NoaWxkQ29uZGl0aW9uLm1vZGVsJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1hY2NvcmRpb24tcmVuZGVyZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2FjY29yZGlvbi1yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9hY2NvcmRpb24tcmVuZGVyZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmdTd2l0Y2gsIENvbW1vbk1vZHVsZSwgZm9yd2FyZFJlZigoKSA9PiBCbG9ja1JlbmRlcmVyQ29tcG9uZW50KSwgZm9yd2FyZFJlZigoKSA9PiBWaWV3UmVuZGVyZXJDb21wb25lbnQpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQWNjb3JkaW9uUmVuZGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG4gICAgQElucHV0KCkgc2VjdGlvbkRhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHRlbXBsYXRlSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGJsb2NrX2Rlc2NyaXB0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcblxyXG4gICAgYmxvY2tSZW5kZXJlZERhdGE6IGFueTtcclxuXHJcbiAgICBhZGRpdGlvbmFsUGFyYW1ldGVycyA9IHtcclxuICAgICAgICBleHBhbmRUaXRsZTogJycsXHJcbiAgICAgICAgY29sbGFwc2VUaXRsZTogJydcclxuICAgIH07XHJcbiAgICBhY2NvcmRpb25EYXRhID0gW107XHJcbiAgICBzaG93X3NlY3Rpb24gPSB0cnVlO1xyXG4gICAgYXBpRGF0YSA9IHt9OyAvLyBzcGVjaWFsIGFwaSBrZXkgZm9yIFBJVlNcclxuXHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG4gICAgZmxhdGFuZE5lc3RVdGlsOiBGbGF0VW5mbGF0O1xyXG4gICAgc2V0QXBpQ2FsbEJhY2tVdGlsOiBTZXRBUElDYWxsYmFja0RhdGE7XHJcbiAgICBzZXREeW5hbWljTGFiZWxVdGlsOiBEeW5hbWljTGFiZWxVdGlsO1xyXG4gICAgaXNfYm9vdHN0cmFwOiBib29sZWFuO1xyXG4gICAgdmFyaWFibGVPYmplY3QgPSB7fTsgLy8gdmFyaWFibGUgb2JqZWN0XHJcbiAgICBpc0xpc3RBY2NvcmRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGFjY29yZGlvbkxpc3REYXRhID0gW107XHJcbiAgICBmaWVsZElkTWFwQXBpS2V5OiB7fTtcclxuICAgIGFwaUtleVV0aWw6IEFQSUtleVV0aWw7XHJcbiAgICBjb25kaXRpb25hbFV0aWw6IENvbmRpdGlvbmFsVXRpbDtcclxuICAgIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgZHVtbXlhY2NvcmRpb25EYXRhID0gW107XHJcbiAgICBDRUVfU2tpcF9hY2NvcmRpb25fbG9hZDogYW55O1xyXG4gICAgcHJpdmF0ZSBzZWN0aW9uU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIG1hbmRhdG9yeUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb24gPSB7XHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgZXhjZXB0aW9uRmllbGRzOiBbXSxcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlQWxsOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBlZGl0YWJsZUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb24gPSB7XHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgZXhjZXB0aW9uRmllbGRzOiBbXSxcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlQWxsOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICB2aXNpYmxlQ29uZGl0aW9uOiBDaGlsZENvbmRpdGlvbiA9IHtcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgZmllbGRzOiBbXSxcclxuICAgICAgICBleGNlcHRpb25GaWVsZHM6IFtdLFxyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGVBbGw6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFjY29yZGlvblNlcnZpY2U6IEFjY29yZGlvblNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHB1YmxpYyBldmVudExpc3RIYW5kbGVyOiBXRkVFdmVudExpc3RIYW5kbGVyLFxyXG4gICAgICAgIHByaXZhdGUgbmdab25lPzogTmdab25lLFxyXG4gICAgICAgIHByaXZhdGUgZWw/OiBFbGVtZW50UmVmKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLmFwaUtleVV0aWwgPSBuZXcgQVBJS2V5VXRpbCgpO1xyXG4gICAgICAgIHRoaXMuZmxhdGFuZE5lc3RVdGlsID0gbmV3IEZsYXRVbmZsYXQoYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0QXBpQ2FsbEJhY2tVdGlsID0gbmV3IFNldEFQSUNhbGxiYWNrRGF0YShhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsID0gbmV3IER5bmFtaWNMYWJlbFV0aWwoYXBpRGF0YVNlcnZpY2UsIGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVXRpbCA9IG5ldyBDb25kaXRpb25hbFV0aWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzX2Jvb3RzdHJhcCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5pc19ib290c3RyYXAgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnVuaXF1ZV9pZDtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICBjb25zdCBzYXZlZENsYXNzID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RFeHBhbmRlZEFjY29yZGlvbicpO1xyXG4gICAgICAgIGNvbnN0IGxhc3RFeHBhbmRlZEFjY29yZGlvbklkID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RFeHBhbmRlZEFjY29yZGlvbklkJyk7XHJcbiAgICAgICAgLy8gY29uc3QgbGFzdFJvdXRlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RSb3V0ZScpO1xyXG4gICAgICAgIC8vIGNvbnN0IGN1cnJlbnRSb3V0ZSA9IHRoaXMucm91dGVyLnVybDtcclxuICAgICAgICBpZiAoc2F2ZWRDbGFzcykge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnRUb1Njcm9sbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke3NhdmVkQ2xhc3N9YCk7Ly9kb2N1bWVudC5nZXRFbGVtZW50QnlJZChsYXN0RXhwYW5kZWRBY2NvcmRpb25JZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFRvU2Nyb2xsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudFRvU2Nyb2xsLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JyB9KTtcclxuICAgICAgICAgICAgICAgIC8vIOKchSBSZW1vdmUgbG9jYWxTdG9yYWdlIGl0ZW1zIGFmdGVyIHNjcm9sbGluZ1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RFeHBhbmRlZEFjY29yZGlvbicpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RFeHBhbmRlZEFjY29yZGlvbklkJyk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGFzdFJvdXRlJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDUwMCk7IC8vIERlbGF5IGVuc3VyZXMgdGhlIERPTSBpcyBmdWxseSByZW5kZXJlZFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTWVhbnMgaXQgaXMgYSBmaWVsZCBub3QgYSBzZWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEgJiYgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5DRUVfU2tpcF9hY2NvcmRpb25fbG9hZCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0NFRV9Ta2lwX2FjY29yZGlvbl9sb2FkJ10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDRUVfU2tpcF9hY2NvcmRpb25fbG9hZCddIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBpZih0aGlzLkNFRV9Ta2lwX2FjY29yZGlvbl9sb2FkID09IFwidHJ1ZVwiKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnNldEFkZGl0aW9uYWxQYXJhbXMoKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlzTGlzdEFjY29yZGlvbiA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ3JlbmRlclR5cGUnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydyZW5kZXJUeXBlJ10udG9Mb3dlckNhc2UoKSA9PT0gJ2R5bmFtaWMnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNMaXN0QWNjb3JkaW9uICYmIHRoaXMuc2VjdGlvbkRhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHRoaXMuQ0VFX1NraXBfYWNjb3JkaW9uX2xvYWQgIT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc091dHNpZGVPZkFuZ3VsYXJab25lKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNMaXN0QWNjb3JkaW9uKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snZGVmYXVsdF92YWx1ZSddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wcm9jZXNzT3V0c2lkZU9mQW5ndWxhclpvbmVEZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdBZGRpdGlvbmFsIHBhcmFtZXRlciBkZWZhdWx0X3ZhbHVlIG5vdCBkZWZpbmUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNMaXN0QWNjb3JkaW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZXRBcGlDYWxsQmFja1V0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuc2VjdGlvbkRhdGEsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvbkxpc3REYXRhID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWx1ZSBvZiByZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBsYWJlbE5hbWUgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHsgZmllbGRfbGFiZWw6IHRoaXMuc2VjdGlvbkRhdGEuZmllbGRfbGFiZWwgfSwgdmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS5maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGogb2YgdGhpcy5zZWN0aW9uRGF0YS5maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGopKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbJ3Jvd0RhdGEnXSA9IHRoaXMuZ2VuZXJhdGVSb3dEYXRhKGZpZWxkLCB2YWx1ZSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvbkxpc3REYXRhLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGxhYmVsTmFtZS5maWVsZF9sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd1NlY3Rpb246ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydhbGxvd011bHRpcGxlJ10gPT09ICd0cnVlJykgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc0RhdGEgPSB0aGlzLmZsYXRhbmROZXN0VXRpbC5mbGF0dGVuSlNPTihyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXNzZWQgPSB0aGlzLmFjY29yZGlvbkRhdGEuZXZlcnkoKGVsZW1lbnQsIGluZGV4LCBhcnJheSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzRGF0YVt0aGlzLmNvbW1vblV0aWwuZ2V0UG9zc2libGVJZChlbGVtZW50LnBvc3NpYmxlX3ZhbHVlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVycyA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVycywgcmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhc3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGEgPSByZXNEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuYWNjb3JkaW9uRGF0YS5sZW5ndGg7IGkrKykgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWNjb3JkaW9uRGF0YVtpXVsnbmFtZV9jb25maWcnXS5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25EYXRhW2ldLm5hbWUgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHsgZmllbGRfbGFiZWw6IHRoaXMuYWNjb3JkaW9uRGF0YVtpXVsnbmFtZV9jb25maWcnXSB9KS5maWVsZF9sYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsndG9nZ2xlQWNjb3JkaW9uRW1pdHRlcl8nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnRvZ2dsZUFjY29yZGlvbkVtaXR0ZXIuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzWydFeHBhbmRCbG9jayddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25EYXRhLm1hcChmdW5jdGlvbiAodmFsLCBpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsLmJsb2NrSWQgPT09IHJlc1snRXhwYW5kQmxvY2snXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsLnNob3dTZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbC5qc29uTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChfdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snYWxsb3dNdWx0aXBsZSddID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwuc2hvd1NlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0Rm9yRW1wdHlTZXNzaW9uXycgKyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEZvckVtcHR5U2Vzc2lvbi5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRW1wdHlTZXNzaW9uKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0W1xyXG4gICAgICAgICAgICAgICAgJ2VtaXRPbkRhdGFTZXRPclVwZGF0ZWRfJyArIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkXHJcbiAgICAgICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vbkZpZWxkRGF0YVVwZGF0ZWQobnVsbCwgbnVsbCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0RmllbGRTdGF0ZUNoYW5nZUV2ZW50RW1pdHRlcl8nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdID1cclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRGaWVsZFN0YXRlQ2hhbmdlRXZlbnRFbWl0dGVyLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocmVzLnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NoYW5nZVZpc2liaWxpdHknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcy52YWx1ZS5sZW5ndGggPiAwID8gcmVzLnZhbHVlW3Jlcy5pZHMuaW5kZXhPZihpZCldIDogcmVzLnZhbHVlWzBdKSA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NoYW5nZUVkaXRhYmxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VkaXRhYmxlID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXMudmFsdWUubGVuZ3RoID4gMCA/IHJlcy52YWx1ZVtyZXMuaWRzLmluZGV4T2YoaWQpXSA6IHJlcy52YWx1ZVswXSkgPT09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuaXNfZGlzcGxheSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IFxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuaXNfZWRpdGFibGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ3Nob3dNYW5kYXRvcnlFcnJvck1zZ18nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnNob3dNYW5kYXRvcnlFcnJvck1zZy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgIChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcy5maWVsZHMpICYmIHJlcy50eXBlID09PSAnY2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZGF0YSBvZiB0aGlzLmFjY29yZGlvbkRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvb3REYXRhLmJsb2NrRmllbGRzICYmIHRoaXMucm9vdERhdGEuYmxvY2tGaWVsZHMuaGFzT3duUHJvcGVydHkoZGF0YS5ibG9ja0lkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGRJZCBvZiB0aGlzLnJvb3REYXRhLmJsb2NrRmllbGRzW2RhdGEuYmxvY2tJZF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5maWVsZHMuaW5jbHVkZXMoZmllbGRJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuanNvbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnNob3dTZWN0aW9uID0gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2VjdGlvblN1YnNjcmlwdGlvbiA9IHRoaXMuYWNjb3JkaW9uU2VydmljZS5zZWN0aW9uT3BlbiQuc3Vic2NyaWJlKHNlY3Rpb25JZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYWNjb3JkaWFuIHNlcnZpY2UgY2FsbCBvY2N1clwiKTsgICBcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYPCfk6IgUmVjZWl2ZWQgcmVxdWVzdCB0byBvcGVuIHNlY3Rpb246ICR7c2VjdGlvbklkfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5BY2NvcmRpb25CeUlkKHNlY3Rpb25JZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gb3BlbkFjY29yZGlvbkJ5SWQoc2VjdGlvbklkOiBzdHJpbmcpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5hY2NvcmRpb25EYXRhLmxlbmd0aCA+IDApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5hY2NvcmRpb25EYXRhLmZvckVhY2goKGFjY29yZGlvbikgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGFjY29yZGlvbi5ibG9ja0lkID09PSBzZWN0aW9uSWQpIHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBhY2NvcmRpb24uc2hvd1NlY3Rpb24gPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFjY29yZGlvbi5qc29uTG9hZGVkID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIG9wZW5BY2NvcmRpb25CeUlkKHNlY3Rpb25JZDogc3RyaW5nKSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcInNlY3Rpb25JZCB0byBvcGVuIC0tIFwiLCBzZWN0aW9uSWQpO1xyXG4gICAgICAgIHRoaXMuYWNjb3JkaW9uRGF0YS5mb3JFYWNoKGFjY29yZGlvbiA9PiB7XHJcbiAgICAgICAgICBpZiAoYWNjb3JkaW9uLmJsb2NrSWQgPT09IHNlY3Rpb25JZCkge1xyXG4gICAgICAgICAgICBhY2NvcmRpb24uc2hvd1NlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICBhY2NvcmRpb24uanNvbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2FsbG93TXVsdGlwbGUnXSA9PT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICBhY2NvcmRpb24uc2hvd1NlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgIFxyXG5cclxuICAgIC8vIHNldEFkZGl0aW9uYWxQYXJhbXMoKXtcclxuICAgIC8vICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgLy8gICAgIGxldCBnQmxvY2tJZDtcclxuICAgIC8vICAgICBsZXQgY29sbGFwc2VUaXRsZSA9ICdDb2xsYXBzZSc7XHJcbiAgICAvLyAgICAgbGV0IGV4cGFuZFRpdGxlID0gJ09wZW4nO1xyXG4gICAgLy8gICAgIGxldCBzaG93U2VjdGlvbmJveCA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGxldCBmb290ZXJGaWVsZHMgPSBbXTtcclxuICAgIC8vICAgICBsZXQgc2tpcExvYWQgPSBcImZhbHNlXCI7XHJcbiAgICAvLyAgICAgbGV0IG5hbWUgPSB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkX2xhYmVsO1xyXG4gICAgLy8gICAgIGxldCBhcHBsaWNhdGlvbkRldGFpbHMgPSAnJztcclxuICAgIC8vICAgICBsZXQgc3ViSGVhZGVyRmllbGRzID0gW107XHJcbiAgICAvLyAgICAgbGV0IHNob3dNdWx0aXBsZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgIC8vICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgY2FzZSAnZGVmYXVsdF92YWx1ZSc6XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgZ0Jsb2NrSWQgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgIGNhc2UgJ2NvbGxhcHNlVGl0bGUnOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGNvbGxhcHNlVGl0bGUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgIGNhc2UgJ2V4cGFuZFRpdGxlJzpcclxuICAgIC8vICAgICAgICAgICAgICAgICBleHBhbmRUaXRsZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgY2FzZSAnQ0VFX0ZPT1RFUl9GSUVMRFMnOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGZvb3RlckZpZWxkcyA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgY2FzZSAnQ0VFX1NraXBfcmJfYWNjb3JkaW9uX2xvYWQnOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIHNraXBMb2FkID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc2hvd1NlY3Rpb25ib3ggPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICAgICAgY2FzZSAnQ0VFX3JiX2FjY29yZGlvbl9JbmZvQmxvY2snOlxyXG4gICAgLy8gICAgICAgICAgICAgICAgIGFwcGxpY2F0aW9uRGV0YWlscyA9IHBhcmFtdGVyLnZhbHVlID8gcGFyYW10ZXIudmFsdWUgOiAnJztcclxuICAgIC8vICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgIGNhc2UgJ0NFRV9TVUJfSEVBREVSX0ZJRUxEUyc6XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgc3ViSGVhZGVyRmllbGRzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgICAgICBjYXNlICdhbGxvd011bHRpcGxlJzpcclxuICAgIC8vICAgICAgICAgICAgICAgICBzaG93TXVsdGlwbGUgPSBwYXJhbXRlci52YWx1ZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgLy8gICAgIGNvbnN0IGR1bW15YWNjSW5mbyA9IHtcclxuICAgIC8vICAgICAgICAgaWQ6IGluZGV4LFxyXG4gICAgLy8gICAgICAgICBuYW1lOiBuYW1lLFxyXG4gICAgLy8gICAgICAgICBibG9ja0lkOiBnQmxvY2tJZCxcclxuICAgIC8vICAgICAgICAgcG9zc2libGVfdmFsdWU6IGdCbG9ja0lkLFxyXG4gICAgLy8gICAgICAgICBzaG93U2VjdGlvbjogc2hvd011bHRpcGxlLFxyXG4gICAgLy8gICAgICAgICBqc29uTG9hZGVkOiBzaG93TXVsdGlwbGUsXHJcbiAgICAvLyAgICAgICAgIGJsb2NrUmVuZGVyZWREYXRhOiB7fSxcclxuICAgIC8vICAgICAgICAgZm9vdGVyRmllbGRzLFxyXG4gICAgLy8gICAgICAgICBzdWJIZWFkZXJGaWVsZHMsXHJcbiAgICAvLyAgICAgICAgIGNvbGxhcHNlVGl0bGUsXHJcbiAgICAvLyAgICAgICAgIGV4cGFuZFRpdGxlLFxyXG4gICAgLy8gICAgICAgICBzaG93U2VjdGlvbmJveFxyXG4gICAgLy8gICAgIH07XHJcbiAgICAvLyAgICAgdGhpcy5kdW1teWFjY29yZGlvbkRhdGEucHVzaChkdW1teWFjY0luZm8pO1xyXG4gICAgLy8gICAgIGluZGV4Kys7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgYXN5bmMgcHJvY2Vzc2pzb25Mb2FkKGRhdGEpe1xyXG4gICAgICAgIGNvbnN0IGJsb2NrSWQgPSB0aGlzLmdldEJsb2NrSWQoZGF0YS5ibG9ja0lkKTtcclxuICAgICAgICBpZighdGhpcy5kdW1teWFjY29yZGlvbkRhdGEuaW5jbHVkZXMoYmxvY2tJZCkpe1xyXG4gICAgICAgICAgICBjb25zdCBiRGF0YSA9IGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKGJsb2NrSWQpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICBpZihiRGF0YSl7XHJcbiAgICAgICAgICAgICAgICBsZXQgYkRhdGFTZXQgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGJEYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bYkRhdGFTZXQuYmxvY2tfaWRdID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiBiRGF0YVNldC5ibG9ja19maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW2JEYXRhU2V0LmJsb2NrX2lkXT8ucHVzaChmaWVsZC51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZGF0YS5uYW1lID0gYkRhdGE/IGJEYXRhWydibG9ja19kZXNjcmlwdGlvbiddOiAnJztcclxuICAgICAgICAgICAgICAgIGRhdGEuYmxvY2tSZW5kZXJlZERhdGEgPSBiRGF0YT8gdGhpcy5jb21tb25VdGlsLmJsb2NrQm9vdHN0cmFwUHJvY2VzcyhiRGF0YSk6e30sXHJcbiAgICAgICAgICAgICAgICBkYXRhLnNob3dTZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGRhdGEuanNvbkxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBkYXRhWyduYW1lX2NvbmZpZyddID0gZGF0YS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGFbJ25hbWVfY29uZmlnJ10uaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhLm5hbWUgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHsgZmllbGRfbGFiZWw6IGRhdGFbJ25hbWVfY29uZmlnJ10gfSkuZmllbGRfbGFiZWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmFjY29yZGlvbkRhdGEuZmlsdGVyKHggPT4geC5ibG9ja0lkID09PSBibG9ja0lkKS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvbkRhdGEuZm9yRWFjaCgoeCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoeC5ibG9ja0lkID09PSBibG9ja0lkKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWNjb3JkaW9uRGF0YVtpbmRleF0gPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFjY29yZGlvbkRhdGEucHVzaChkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHVtbXlhY2NvcmRpb25EYXRhLnB1c2goZGF0YS5ibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuZHVtbXlhY2NvcmRpb25EYXRhLmZvckVhY2goeCA9PntcclxuICAgICAgICAgICAgICAgIC8vICAgICBpZih4LmJsb2NrSWQgPSBibG9ja0lkKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5kdW1teWFjY29yZGlvbkRhdGEuc3BsaWNlKHRoaXMuZHVtbXlhY2NvcmRpb25EYXRhLmluZGV4T2YoeCksIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc091dHNpZGVPZkFuZ3VsYXJab25lKCl7XHJcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuT3V0c2lkZUFuZ3VsYXIoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvb3RlckZpZWxkcyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0NFRV9GT09URVJfRklFTERTJ10/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0NFRV9GT09URVJfRklFTERTJ10uc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk6W107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJIZWFkZXJGaWVsZHMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDRUVfU1VCX0hFQURFUl9GSUVMRFMnXT8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQ0VFX1NVQl9IRUFERVJfRklFTERTJ10uc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk6W107XHJcbiAgICAgICAgICAgICAgICB0aGlzLkNFRV9Ta2lwX2FjY29yZGlvbl9sb2FkID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQ0VFX1NraXBfYWNjb3JkaW9uX2xvYWQnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0NFRV9Ta2lwX2FjY29yZGlvbl9sb2FkJ10gOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuc2VjdGlvbkRhdGEucG9zc2libGVfdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJsb2NrSWQgPSB0aGlzLmdldEJsb2NrSWQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLkNFRV9Ta2lwX2FjY29yZGlvbl9sb2FkICE9PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmR1bW15YWNjb3JkaW9uRGF0YS5wdXNoKGJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGJEYXRhID0gYXdhaXQgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUoYmxvY2tJZCkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGJEYXRhKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBiRGF0YVNldCA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MoYkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnYmxvY2tGaWVsZHMnXVtiRGF0YVNldC5ibG9ja19pZF0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIG9mIGJEYXRhU2V0LmJsb2NrX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bYkRhdGFTZXQuYmxvY2tfaWRdPy5wdXNoKGZpZWxkLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhY2NJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBiRGF0YT8gYkRhdGFbJ2Jsb2NrX2Rlc2NyaXB0aW9uJ106ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrSWQ6IGJsb2NrSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zc2libGVfdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dTZWN0aW9uOiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snYWxsb3dNdWx0aXBsZSddID09PSAndHJ1ZScpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb25Mb2FkZWQ6ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydhbGxvd011bHRpcGxlJ10gPT09ICd0cnVlJykgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmxvY2tSZW5kZXJlZERhdGE6dGhpcy5DRUVfU2tpcF9hY2NvcmRpb25fbG9hZCA9PSBcInRydWVcIiA/IHt9IDogdGhpcy5jb21tb25VdGlsLmJsb2NrQm9vdHN0cmFwUHJvY2VzcyhiRGF0YSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9vdGVyRmllbGRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YkhlYWRlckZpZWxkc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjSW5mb1snbmFtZV9jb25maWcnXSA9IGFjY0luZm8ubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY2NJbmZvWyduYW1lX2NvbmZpZyddLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWNjSW5mby5uYW1lID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh7IGZpZWxkX2xhYmVsOiBhY2NJbmZvWyduYW1lX2NvbmZpZyddIH0pLmZpZWxkX2xhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25EYXRhLnB1c2goYWNjSW5mbyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCsrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NPdXRzaWRlT2ZBbmd1bGFyWm9uZURlZmF1bHQoKXtcclxuICAgICAgICB0aGlzLm5nWm9uZS5ydW5PdXRzaWRlQW5ndWxhcihhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydkZWZhdWx0X3ZhbHVlJ10pLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZF0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW3RoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWRdLnB1c2goZmllbGQudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uRGF0YS5maWVsZHMgPSB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJvd0RhdGEoZmllbGQsIGRhdGEsIGxpc3RfcG9zLCBleHBhbmRhYmxlID0gZmFsc2Upe1xyXG4gICAgICAgIHRoaXMubmdab25lLnJ1bk91dHNpZGVBbmd1bGFyKGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5nZW5lcmF0ZVJvd0RhdGFwcm9jZXNzKGZpZWxkLCBkYXRhLCBsaXN0X3BvcywgZXhwYW5kYWJsZSA9IGZhbHNlKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBwcml2YXRlIG9uRmllbGREYXRhVXBkYXRlZChmaWVsZElkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS5pc19kaXNwbGF5ID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5zZWN0aW9uRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuaXNfZWRpdGFibGUgPT09IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKHRoaXMuc2VjdGlvbkRhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGVkaXRhYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0YWJsZSA9IGVkaXRhYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogbWV0aG9kIGNhbGxlZCB3aGVuIGFueSBFbXB0eSBTZXNzaW9uIGV2ZW50IGlzIHRyaWdnZXJlZFxyXG4gICAgICogQHBhcmFtIGdldF9kYXRhIHRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgdW5pcXVlX2lkc1xyXG4gICAgICogYW5kIHRoZSBhcGkga2V5cyBvZiB0aGUgZmllbGRzIHRoYXQgbmVlZHMgdG8gYmUgY2xlYXJlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG9uRW1wdHlTZXNzaW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSBbXTtcclxuICAgICAgICBpZiAoZ2V0X2RhdGEudW5pcXVlX2lkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS51bmlxdWVfaWRzO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVuaXF1ZV9pZF92YWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5hY2NvcmRpb25EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5qc29uTG9hZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5zaG93U2VjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSByb3cgZGF0YSBvbiB0aGUgYmFzaXMgb2YgdGhlIHR5cGUgb2YgdGhlIGxpc3QgYW5kIHRoZSBlZGl0YWJsZSBhbmQgdmlzaWJsZSBjb25kaXRpb25zXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgdGhlIGNlZSBmaWVsZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBhcGkgcmVzcG9uc2UgZGF0YSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVSb3dEYXRhcHJvY2VzcyhmaWVsZCwgZGF0YSwgbGlzdF9wb3MsIGV4cGFuZGFibGUgPSBmYWxzZSkge1xyXG4gICAgICAgIGxldCBhcGlEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja1V0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGZpZWxkLCBkYXRhKTtcclxuICAgICAgICBleHBhbmRhYmxlICYmIGFwaURhdGEgJiYgKGRhdGFbJ2hhc0V4cGFuZGFibGVEYXRhJ10gPSB0cnVlKTtcclxuICAgICAgICBsZXQgbGFiZWxUeXBlID0gJyc7XHJcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgICAgICAgbGFiZWxUeXBlID0gKHRoaXMuaXNTaW5nbGVBUElLZXkgPyBmaWVsZC5hcGlfa2V5IDogZmllbGQucmVzcG9uc2VfYXBpX2tleSkgPyAnJyA6ICdTVEFUSUMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0xpbmsnKSB7XHJcbiAgICAgICAgICAgIGFwaURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCAmJiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMiB8fCBmaWVsZC5pc19lZGl0YWJsZSA9PT0gMikpIHtcclxuICAgICAgICAgICAgbGV0IGlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoZmllbGQuaXNfZWRpdGFibGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIGlzRWRpdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCB1aUFwaVZhbHVlID0gdGhpcy5yZXR1cm5VbmlxdWVJZE1hcEFwaVZhbHVlKGRhdGEpO1xyXG4gICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IGZpZWxkLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgIGh0bWxfaWQ6IGZpZWxkLnVuaXF1ZV9pZCArICctJyArIGxpc3RfcG9zLFxyXG4gICAgICAgICAgICAgICAgZnJvbUZpZWxkOiAnQWNjb3JkaW9uJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZpZWxkLmlzX2Rpc3BsYXkgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uZGl0aW9uYWxWaXNpYmxlKHVpQXBpVmFsdWUsIGlzVmlzaWJsZSwgZmllbGQpIDogaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IGZpZWxkLmlzX2VkaXRhYmxlID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbmRpdGlvbmFsRWRpdGFibGUodWlBcGlWYWx1ZSwgaXNFZGl0YWJsZSwgZmllbGQpIDogaXNFZGl0YWJsZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoZmllbGQgJiYgZmllbGQuZmllbGRfdHlwZSAmJiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ2xhYmVsJyAmJiBmaWVsZC5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChmaWVsZC5maWVsZF9sYWJlbF9jb25maWcgJiYgZmllbGQuZmllbGRfbGFiZWxfY29uZmlnLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSkpID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKGZpZWxkLCBkYXRhKS5maWVsZF9sYWJlbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUeXBlID09PSAnU1RBVElDJyA/IGZpZWxkLmZpZWxkX2xhYmVsIDogYXBpRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKGZpZWxkICYmIGZpZWxkLmZpZWxkX3R5cGUgJiYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcgJiYgZmllbGQuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykgfHxcclxuICAgICAgICAgICAgICAgICAgICAoZmllbGQuZmllbGRfbGFiZWxfY29uZmlnICYmIGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZy5pbmNsdWRlcygnKChkeW5hbWljKSknKSkpKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZShmaWVsZCwgZGF0YSkuZmllbGRfbGFiZWwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVHlwZSA9PT0gJ1NUQVRJQycgPyBmaWVsZC5maWVsZF9sYWJlbCA6IGFwaURhdGEsXHJcbiAgICAgICAgICAgICAgICBodG1sX2lkOiBmaWVsZC51bmlxdWVfaWQgKyAnLScgKyBsaXN0X3Bvc1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gICAgLy8gVE9ETzogRGVsZXRlIHRoaXMgZnVuY3Rpb24gb25jZSB0aGUgY29uZGl0aW9uYWwgc3RhdGVtZW50cyBkZXBlbmQgb24gdGhlIGFwaSBrZXkgdGhlbiBvbmx5IHJldHVybiB0aGUgc2luZ2xlIGFwaSByZXNwb25zZSBvYmpcclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyB0aGUgbWFwcGluZyBvZiB1bmlxdWUgaWQgdG8gdGhlIGFwaSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGFwaVJlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgaS5lLiB0aGUgc2luZ2xlIGluZGV4IG9mIHRoZSBhcnJheVxyXG4gICAgICovXHJcbiAgICByZXR1cm5VbmlxdWVJZE1hcEFwaVZhbHVlKGFwaVJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5maWVsZElkTWFwQXBpS2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCB1bmlxdWVJZCA9IHRoaXMuZmllbGRJZE1hcEFwaUtleVtrZXldO1xyXG4gICAgICAgICAgICBvYmpbdW5pcXVlSWRdID0gdGhpcy5zZXRBcGlDYWxsQmFja1V0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGtleSwgYXBpUmVzcG9uc2UpID8gdGhpcy5zZXRBcGlDYWxsQmFja1V0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGtleSwgYXBpUmVzcG9uc2UpIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBtYXAgYmV0d2VlbiBmaWVsZElkIGFuZCBhcGkga2V5XHJcbiAgICAgKi9cclxuICAgIHJldHVybkZpZWxkSWRNYXBBcGlLZXkoKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5GaWVsZElkTWFwQXBpS2V5VmFsdWUob2JqLCBmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmllbGRJZE1hcEFwaUtleSA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbm5lciBmdW5jdGlvbiBvZiByZXR1cm5GaWVsZElkTWFwQXBpS2V5XHJcbiAgICBwcml2YXRlIHJldHVybkZpZWxkSWRNYXBBcGlLZXlWYWx1ZShvYmosIGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBUElLZXkgJiYgZmllbGQuYXBpX2tleSkge1xyXG4gICAgICAgICAgICBvYmpbZmllbGQuYXBpX2tleV0gPSBmaWVsZC51bmlxdWVfaWQ7IC8vIFRPRE86IFN1cHBvcnQgbXVsdGlwbGUgYXBpIGtleXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQucmVzcG9uc2VfYXBpX2tleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkuaW5jbHVkZXMoJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gZmllbGQudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ZpZWxkLnJlc3BvbnNlX2FwaV9rZXldID0gZmllbGQudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSB2aXNpYmxlIGNvbmRpdGlvblxyXG4gICAgICogQHBhcmFtIGRhdGEgYXBpIHJlc3BvbnNlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHByZXNlbnRWYWx1ZSBwcmVzZW50IHZhbHVlIG9mIHRoZSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGZpZWxkIHRoZSBmaWVsZCBwcm9wZXJ0eSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2V0Q29uZGl0aW9uYWxWaXNpYmxlKGRhdGEsIHByZXNlbnRWYWx1ZSwgZmllbGQpIHtcclxuICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KGZpZWxkLCBmaWVsZC51bmlxdWVfaWQsICcnLCBkYXRhKTtcclxuICAgICAgICBpZiAodmlzaWJpbGl0eUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlzaWJpbGl0eUNvbmRpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByZXNlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiB0aGUgZWRpdGFibGUgY29uZGl0aW9uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBhcGkgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gcHJlc2VudFZhbHVlIHByZXNlbnQgdmFsdWUgb2YgdGhlIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgdGhlIGZpZWxkIHByb3BlcnR5IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRDb25kaXRpb25hbEVkaXRhYmxlKGRhdGEsIHByZXNlbnRWYWx1ZSwgZmllbGQpIHtcclxuICAgICAgICBjb25zdCBlZGl0YWJsZUNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrRWRpdGFibGUoZmllbGQsIGZpZWxkLnVuaXF1ZV9pZCwgJycsIGRhdGEpO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZWRpdGFibGVDb25kaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmVzZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0dGVyIHNldHRlciBnb2VzIGhlcmVcclxuICAgIGdldCBpc1NpbmdsZUFQSUtleSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpbmdsZUFwaUtleScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gT2xkIHBoYXNlIDEgaW1wbGVtZW50YXRpb25cclxuICAgIGdldEJsb2NrRGF0YShmaWVsZDogYW55KTogYW55IHtcclxuICAgICAgICBsZXQgYmxvY2tEYXRhID0ge307XHJcbiAgICAgICAgaWYgKGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgZmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVmYXVsdF92YWx1ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmxvY2tEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlBY2NvcmRpb24oZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImludm9rZWQgaGVyZVwiKTtcclxuICAgICAgICBpZihPYmplY3Qua2V5cyhkYXRhPy5ibG9ja1JlbmRlcmVkRGF0YSkubGVuZ3RoID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLnByb2Nlc3Nqc29uTG9hZChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5qc29uTG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snYWxsb3dNdWx0aXBsZSddID09PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzTGlzdEFjY29yZGlvbikge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhY2NvcmRpb24gb2YgdGhpcy5hY2NvcmRpb25MaXN0RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhY2NvcmRpb24uaWQgPT09IGRhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3JkaW9uLnNob3dTZWN0aW9uID8gYWNjb3JkaW9uLnNob3dTZWN0aW9uID0gZmFsc2UgOiBhY2NvcmRpb24uc2hvd1NlY3Rpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjY29yZGlvbi5zaG93U2VjdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZihhY2NvcmRpb24uc2hvd1NlY3Rpb24gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSXRlbUV4cGFuZChhY2NvcmRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkl0ZW1Db2xsYXBzZShhY2NvcmRpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBhY2NvcmRpb24gb2YgdGhpcy5hY2NvcmRpb25EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFjY29yZGlvbi5pZCA9PT0gZGF0YS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvcmRpb24uc2hvd1NlY3Rpb24gPyBhY2NvcmRpb24uc2hvd1NlY3Rpb24gPSBmYWxzZSA6IGFjY29yZGlvbi5zaG93U2VjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWNjb3JkaW9uLnNob3dTZWN0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKGFjY29yZGlvbi5zaG93U2VjdGlvbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25JdGVtRXhwYW5kKGFjY29yZGlvbilcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uSXRlbUNvbGxhcHNlKGFjY29yZGlvbilcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhLnNob3dTZWN0aW9uID8gZGF0YS5zaG93U2VjdGlvbiA9IGZhbHNlIDogZGF0YS5zaG93U2VjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZihkYXRhLnNob3dTZWN0aW9uID09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25JdGVtRXhwYW5kKGRhdGEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uSXRlbUNvbGxhcHNlKGRhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QmxvY2tJZChmaWVsZDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb21tb25VdGlsLmdldFZhbHVlKGZpZWxkKTtcclxuICAgICAgICAvLyBpZiAoZmllbGQuc3BsaXQoJ3wnKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgLy8gICAgIHJldHVybiBmaWVsZC5zcGxpdCgnfCcpWzFdLnRyaW0oKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICByZXR1cm4gZmllbGQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGdldEFjY29yZGlvbk5hbWUoZmllbGQ6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tfZGVzY3JpcHRpb24gPSBhd2FpdCB0aGlzLmdldEJsb2NrRGVzY3JpcHRpb24odGhpcy5nZXRCbG9ja0lkKGZpZWxkKSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5ibG9ja19kZXNjcmlwdGlvbiAhPT0gJycpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYmxvY2tfZGVzY3JpcHRpb247XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGZpZWxkO1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZ2V0QmxvY2tEZXNjcmlwdGlvbihmaWVsZDogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKGZpZWxkKS5cclxuICAgICAgICAgICAgcGlwZShtYXAoYmxvY2tfZGVzY3JpcHRpb25fcmVzID0+IGJsb2NrX2Rlc2NyaXB0aW9uX3Jlc1snYmxvY2tfZGVzY3JpcHRpb24nXSkpLnRvUHJvbWlzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGVtaXRBY2NvcmRpbmdTdGF0ZShpZCwgc3RhdGUpIHtcclxuICAgICAgICBpZiAoc3RhdGUpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFyZW50Vmlld1JlbmRlcmVyID0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LmNsb3Nlc3QoJ2FwcC12aWV3LXJlbmRlcmVyJyk7XHJcbiAgICAgICAgICAgIGlmIChwYXJlbnRWaWV3UmVuZGVyZXIpIHtcclxuICAgICAgICAgICAgLy8gRXh0cmFjdCBjbGFzcyB0aGF0IHN0YXJ0cyB3aXRoIFwiYXBwLXZpZXctcmVuZGVyZXItXCJcclxuICAgICAgICAgICAgY29uc3QgY2xhc3NMaXN0ID0gcGFyZW50Vmlld1JlbmRlcmVyLmNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRDbGFzcyA9IGNsYXNzTGlzdC5maW5kKGNscyA9PiBjbHMuc3RhcnRzV2l0aCgnYXBwLXZpZXctcmVuZGVyZXItJykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRhcmdldENsYXNzLmluY2x1ZGVzKCdjb250YWN0X3ZpZXcnKSkge1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RFeHBhbmRlZEFjY29yZGlvbklkJywgaWQpO1xyXG4gICAgICAgICAgICAgICAgLy8gU3RvcmUgY2xhc3MgaW4gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdEV4cGFuZGVkQWNjb3JkaW9uJywgdGFyZ2V0Q2xhc3MpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RSb3V0ZScsIHRoaXMucm91dGVyLnVybCk7IC8vIFN0b3JlIGN1cnJlbnQgcm91dGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RFeHBhbmRlZEFjY29yZGlvbicpO1xyXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGFzdEV4cGFuZGVkQWNjb3JkaW9uSWQnKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2xhc3RSb3V0ZScpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5hY2NvcmRpb25TdGF0ZUVtaXR0ZXIuZW1pdCh7IGlkLCBzdGF0ZSB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnZhcmlhYmxlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhcmlhYmxlT2JqZWN0W2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmplY3Rba2V5XS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzSFRNTCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvKDwoW14+XSspPikvaWc7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uSXRlbUV4cGFuZChldmVudCkge1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25FeHBhbmQnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1Db2xsYXBzZShldmVudCkge1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Db2xsYXBzZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdHJpZ2dlciBldmVudCBpZiB0aGVyZSBoYXMgYmVlbiBhbiBldmVudCB0cmlnZ2VyZWQgb24gdGhlIGFjY29yZGlvblxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIG9uQ29tcG9uZW50RXZlbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEgJiYgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEgJiYgdGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0ICYmIHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUgJiYgZXZlbnQuZXZlbnRfbmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoZXZlbnQsIHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjxzZWN0aW9uICpuZ0lmPVwiaXNWaXNpYmxlXCJcclxuICAgIGNsYXNzPVwiY2VlLWFjY29yZGlvbiB7e3NlY3Rpb25EYXRhLnNlY3Rpb25fc3R5bGU/c2VjdGlvbkRhdGEuc2VjdGlvbl9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTooc2VjdGlvbkRhdGEuZmllbGRfc3R5bGU/c2VjdGlvbkRhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6JycpfX1cIlxyXG4gICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyc1snQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0FyaWEtTGFiZWwnXSA6IHNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA/IHNlY3Rpb25EYXRhLmZpZWxkX2xhYmVsIDogc2VjdGlvbkRhdGEuc2VjdGlvbl9uYW1lXCJcclxuICAgIFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0FyaWEtUm9sZSddXCIgaWQ9XCJ7e3NlY3Rpb25EYXRhLnVuaXF1ZV9pZH19XCI+XHJcbiAgICA8IS0tIFBoYXNlIDEgLS0+XHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlY3Rpb25EYXRhICYmIHNlY3Rpb25EYXRhLmZpZWxkc1wiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNlY3Rpb25EYXRhLmZpZWxkczsgaW5kZXggYXMgcG9zOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZmllbGQuZmllbGRfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0dlbmVyaWMgQmxvY2snXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJhY2NvcmRpb24tc2VjdGlvbiBhY2NvcmRpb24tc2VjdGlvbi17e3Bvc319XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyc1snQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0FyaWEtTGFiZWwnXSA6IHVuZGVmaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0FyaWEtUm9sZSddXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJpc0VkaXRhYmxlICYmIChzaG93X3NlY3Rpb24gPT09IGZhbHNlKSA/IHNob3dfc2VjdGlvbiA9IHRydWUgOiBzaG93X3NlY3Rpb24gPSBmYWxzZTsgaXNFZGl0YWJsZSAmJiBlbWl0QWNjb3JkaW5nU3RhdGUoc2VjdGlvbkRhdGEuc2VjdGlvbl9pZCwgc2hvd19zZWN0aW9uKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFpc0hUTUwoZmllbGQuZmllbGRfbGFiZWwpXCIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLXRleHRcIj57e2ZpZWxkLmZpZWxkX2xhYmVsfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJpc0hUTUwoZmllbGQuZmllbGRfbGFiZWwpXCIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLXRleHRcIiBbaW5uZXJIVE1MXT1cImZpZWxkLmZpZWxkX2xhYmVsXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlci1jb2xsYXBzZS1idG5cIiAqbmdJZj1cInNob3dfc2VjdGlvbiA9PSBmYWxzZSA/IHRydWUgOiBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbGxhcHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLW9wZW4tYnRuXCIgKm5nSWY9XCJzaG93X3NlY3Rpb25cIj5FeHBhbmRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBbaGlkZGVuXT1cImZpZWxkLnNob3dTZWN0aW9uPT09ZmFsc2VcIiAgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtYmxvY2stcmVuZGVyZXIgKm5nSWY9XCIhc2hvd19zZWN0aW9uXCIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtibG9ja0lkXT1cImdldEJsb2NrRGF0YShmaWVsZClcIiBjbGFzcz1cImFjY29yZGlvbi1jb250ZW50XCIgW2Jsb2NrUG9zaXRpb25dPVwicG9zXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb290RGF0YV09XCJyb290RGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC1ibG9jay1yZW5kZXJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8IS0tIFBoYXNlIDIsIEFjY3JkaW9uIGFzIGEgZGF0YXR5cGUgLS0+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwic2VjdGlvbkRhdGEgJiYgc2VjdGlvbkRhdGEucG9zc2libGVfdmFsdWVzICYmIGFjY29yZGlvbkRhdGEubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRhdGEgb2YgYWNjb3JkaW9uRGF0YTsgaW5kZXggYXMgcG9zXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYWNjb3JkaW9uLXNlY3Rpb24gYWNjb3JkaW9uLXNlY3Rpb24te3twb3N9fVwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJzWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyc1snQXJpYS1MYWJlbCddIDogdW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgIFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0FyaWEtUm9sZSddXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImlzRWRpdGFibGUgJiYgZGlzcGxheUFjY29yZGlvbihkYXRhKTsgaXNFZGl0YWJsZSAmJiBlbWl0QWNjb3JkaW5nU3RhdGUoZGF0YS5ibG9ja0lkLCBkYXRhLnNob3dTZWN0aW9uKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaXNIVE1MKGRhdGEubmFtZSlcIiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXItdGV4dFwiPnt7ZGF0YS5uYW1lfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiaXNIVE1MKGRhdGEubmFtZSlcIiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXItdGV4dFwiIFtpbm5lckhUTUxdPVwiZGF0YS5uYW1lXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1hcGktZGF0YVwiPnt7YXBpRGF0YVtjb21tb25VdGlsLmdldFBvc3NpYmxlSWQoZGF0YS5wb3NzaWJsZV92YWx1ZSldfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlci1jb2xsYXBzZS1idG5cIiAqbmdJZj1cImRhdGEuc2hvd1NlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFkZGl0aW9uYWxQYXJhbWV0ZXJzWydjb2xsYXBzZVRpdGxlJ107IGVsc2Ugbm9Db2xsYXBzZVRleHRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWlzSFRNTChhZGRpdGlvbmFsUGFyYW1ldGVyc1snY29sbGFwc2VUaXRsZSddKVwiIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlci1jb2xsYXBzZS10ZXh0XCI+e3thZGRpdGlvbmFsUGFyYW1ldGVyc1snY29sbGFwc2VUaXRsZSddfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzSFRNTChhZGRpdGlvbmFsUGFyYW1ldGVyc1snY29sbGFwc2VUaXRsZSddKVwiIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlci1jb2xsYXBzZS10ZXh0XCIgW2lubmVySFRNTF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyc1snY29sbGFwc2VUaXRsZSddXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNub0NvbGxhcHNlVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlci1jb2xsYXBzZS10ZXh0XCI+Q29sbGFwc2U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXItb3Blbi1idG5cIiAqbmdJZj1cIiFkYXRhLnNob3dTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhZGRpdGlvbmFsUGFyYW1ldGVyc1snZXhwYW5kVGl0bGUnXTsgZWxzZSBub09wZW5UZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpc0hUTUwoYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2V4cGFuZFRpdGxlJ10pXCIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLWV4cGFuZC10ZXh0XCI+e3thZGRpdGlvbmFsUGFyYW1ldGVyc1snZXhwYW5kVGl0bGUnXX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc0hUTUwoYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2V4cGFuZFRpdGxlJ10pXCIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLWV4cGFuZC10ZXh0XCIgW2lubmVySFRNTF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyc1snZXhwYW5kVGl0bGUnXVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9PcGVuVGV4dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlci1leHBhbmQtdGV4dFwiPk9wZW48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwhLS0qbmdJZj1cImRhdGEuc2hvd1NlY3Rpb25cIiAgW2hpZGRlbl09XCIhZGF0YS5zaG93U2VjdGlvblwiLS0+XHJcbiAgICAgICAgICAgICAgICA8YXBwLWJsb2NrLXJlbmRlcmVyICpuZ0lmPVwiZGF0YS5mb290ZXJGaWVsZHMubGVuZ3RoID09IDAgJiYgZGF0YS5zdWJIZWFkZXJGaWVsZHMubGVuZ3RoID09IDAgJiYgZGF0YS5qc29uTG9hZGVkXCIgW2hpZGRlbl09XCIhZGF0YS5zaG93U2VjdGlvblwiIFtzdGVwSWRdPVwic3RlcElkXCJcclxuICAgICAgICAgICAgICAgICAgICBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW2Jsb2NrSWRdPVwiZGF0YS5ibG9ja0lkXCIgY2xhc3M9XCJhY2NvcmRpb24tY29udGVudFwiIFtibG9ja1Bvc2l0aW9uXT1cInBvc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgICAgICAgICA8L2FwcC1ibG9jay1yZW5kZXJlcj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5zdWJIZWFkZXJGaWVsZHMubGVuZ3RoID4gMCAmJiBkYXRhLmpzb25Mb2FkZWRcIiBbaGlkZGVuXT1cImRhdGEuc2hvd1NlY3Rpb25cIiBjbGFzcz1cImFjY29yZGlvbi1zdWItaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ7eyBkYXRhLmJsb2NrX2lkIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtYmxvY2sgdGVtcGxhdGUte3t0ZW1wbGF0ZUlkfX0gYmxvY2ste3sgZGF0YS5ibG9ja19pZCB9fSAgYmxvY2ste3twb3N9fSB7e2RhdGEuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGU/ZGF0YS5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuYmxvY2tSZW5kZXJlZERhdGFcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkYXRhLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkczsgaW5kZXggYXMgcG9zOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtdmlldy1yZW5kZXJlciAqbmdJZj1cImRhdGEuc3ViSGVhZGVyRmllbGRzLmluY2x1ZGVzKGZpZWxkLnVuaXF1ZV9pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwLXZpZXctcmVuZGVyZXIte3sgZGF0YS5ibG9ja19pZCB9fS17e3Bvc319IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCByb290RGF0YS50ZW1wbGF0ZUNsYXNzLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkXT1cImZpZWxkXCIgW3Bvc2l0aW9uXT1cInBvc1wiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLXZpZXctcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIoZGF0YS5mb290ZXJGaWVsZHMubGVuZ3RoID4gMCB8fCBkYXRhLnN1YkhlYWRlckZpZWxkcy5sZW5ndGggPiAwKSAmJiBkYXRhLmpzb25Mb2FkZWRcIiBbaGlkZGVuXT1cIiFkYXRhLnNob3dTZWN0aW9uXCIgY2xhc3M9XCJhY2NvcmRpb24tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwie3sgZGF0YS5ibG9ja19pZCB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VlLWJsb2NrIHRlbXBsYXRlLXt7dGVtcGxhdGVJZH19IGJsb2NrLXt7IGRhdGEuYmxvY2tfaWQgfX0gIGJsb2NrLXt7cG9zfX0ge3tkYXRhLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlP2RhdGEuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fSB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXRhLmJsb2NrUmVuZGVyZWREYXRhXCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZGF0YS5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHM7IGluZGV4IGFzIHBvczsgdHJhY2tCeTogdHJhY2tCeUlkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXZpZXctcmVuZGVyZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFkYXRhLmZvb3RlckZpZWxkcy5pbmNsdWRlcyhmaWVsZC51bmlxdWVfaWQpICYmICFkYXRhLnN1YkhlYWRlckZpZWxkcy5pbmNsdWRlcyhmaWVsZC51bmlxdWVfaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImFwcC12aWV3LXJlbmRlcmVyLXt7IGRhdGEuYmxvY2tfaWQgfX0te3twb3N9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgcm9vdERhdGEudGVtcGxhdGVDbGFzcywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZF09XCJmaWVsZFwiIFtwb3NpdGlvbl09XCJwb3NcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2FwcC12aWV3LXJlbmRlcmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZGF0YS5mb290ZXJGaWVsZHMubGVuZ3RoID4gMCAmJiBkYXRhLmpzb25Mb2FkZWRcIiBbaGlkZGVuXT1cIiFkYXRhLnNob3dTZWN0aW9uXCIgY2xhc3M9XCJhY2NvcmRpb24tZm9vdGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNlY3Rpb24gaWQ9XCJ7eyBkYXRhLmJsb2NrX2lkIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtYmxvY2sgdGVtcGxhdGUte3t0ZW1wbGF0ZUlkfX0gYmxvY2ste3sgZGF0YS5ibG9ja19pZCB9fSAgYmxvY2ste3twb3N9fSB7e2RhdGEuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGU/ZGF0YS5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRhdGEuYmxvY2tSZW5kZXJlZERhdGFcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkYXRhLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkczsgaW5kZXggYXMgcG9zOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtdmlldy1yZW5kZXJlciAqbmdJZj1cImRhdGEuZm9vdGVyRmllbGRzLmluY2x1ZGVzKGZpZWxkLnVuaXF1ZV9pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwLXZpZXctcmVuZGVyZXIte3sgZGF0YS5ibG9ja19pZCB9fS17e3Bvc319IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCByb290RGF0YS50ZW1wbGF0ZUNsYXNzLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkXT1cImZpZWxkXCIgW3Bvc2l0aW9uXT1cInBvc1wiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLXZpZXctcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgPCEtLSBQaGFzZSAzLCBBY2NyZGlvbiBhcyBhIGRhdGF0eXBlIHdpdGggZHluYW1pYyBkYXRhIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInNlY3Rpb25EYXRhICYmIGlzTGlzdEFjY29yZGlvbiAmJiBhY2NvcmRpb25MaXN0RGF0YS5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBhY2NvcmRpb25MaXN0RGF0YTsgaW5kZXggYXMgcG9zXCI+XHJcbiAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiYWNjb3JkaW9uLXNlY3Rpb24gYWNjb3JkaW9uLXNlY3Rpb24te3twb3N9fVwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJzWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyc1snQXJpYS1MYWJlbCddIDogdW5kZWZpbmVkXCJcclxuICAgICAgICAgICAgICAgIFthdHRyLnJvbGVdPVwiYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0FyaWEtUm9sZSddXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWhlYWRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImlzRWRpdGFibGUgJiYgZGlzcGxheUFjY29yZGlvbihkYXRhKTsgaXNFZGl0YWJsZSAmJiBlbWl0QWNjb3JkaW5nU3RhdGUoZGF0YS5pZCwgZGF0YS5zaG93U2VjdGlvbilcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWlzSFRNTChkYXRhLm5hbWUpXCIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLXRleHRcIj57e2RhdGEubmFtZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzSFRNTChkYXRhLm5hbWUpXCIgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLXRleHRcIiBbaW5uZXJIVE1MXT1cImRhdGEubmFtZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLWNvbGxhcHNlLWJ0blwiICpuZ0lmPVwiZGF0YS5zaG93U2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2NvbGxhcHNlVGl0bGUnXTsgZWxzZSBub0NvbGxhcHNlVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3thZGRpdGlvbmFsUGFyYW1ldGVyc1snY29sbGFwc2VUaXRsZSddfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbm9Db2xsYXBzZVRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBDb2xsYXBzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLW9wZW4tYnRuXCIgKm5nSWY9XCIhZGF0YS5zaG93U2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2V4cGFuZFRpdGxlJ107IGVsc2Ugbm9PcGVuVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3thZGRpdGlvbmFsUGFyYW1ldGVyc1snZXhwYW5kVGl0bGUnXX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI25vT3BlblRleHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBPcGVuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgW2hpZGRlbl09XCIhZGF0YS5zaG93U2VjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGRhdGEuZmllbGRzOyBpbmRleCBhcyBwb3NpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLXZpZXctcmVuZGVyZXIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbc3RlcElkXT1cInN0ZXBJZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2ZpZWxkXT1cImZpZWxkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcG9zaXRpb25dPVwicG9zaXRpb25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyb290RGF0YV09XCJyb290RGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttYW5kYXRvcnlDb25kaXRpb25dPVwibWFuZGF0b3J5Q29uZGl0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0YWJsZUNvbmRpdGlvbl09XCJlZGl0YWJsZUNvbmRpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbdmlzaWJsZUNvbmRpdGlvbl09XCJ2aXNpYmxlQ29uZGl0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtdmlldy1yZW5kZXJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuPC9zZWN0aW9uPlxyXG4iXX0=