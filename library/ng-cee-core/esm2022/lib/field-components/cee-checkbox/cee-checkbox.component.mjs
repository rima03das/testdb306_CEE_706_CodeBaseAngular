import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule, NgStyle } from '@angular/common';
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
import * as i10 from "@angular/material/checkbox";
import * as i11 from "@angular/forms";
import * as i12 from "@ng-bootstrap/ng-bootstrap";
import * as i13 from "@angular/common";
import * as i14 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["checkBoxControl"];
const _c1 = ["checkField"];
const _c2 = (a0, a1, a2, a3) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "color": a3 });
const _c3 = a0 => ({ "color": a0 });
function CeeCheckboxComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeCheckboxComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 16)(2, CeeCheckboxComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeCheckboxComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeCheckboxComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeCheckboxComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 22);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("innerHTML", item_r3.label, i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const customMatTooltipCheckList_r4 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckList_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3 == null ? null : item_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(item_r3 == null ? null : item_r3.title));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "mat-checkbox", 24, 3);
    i0.ɵɵlistener("keyup", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template_mat_checkbox_keyup_2_listener($event) { i0.ɵɵrestoreView(_r2); const item_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onEnter($event, item_r3)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const item_r3 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(item_r3.isChecked, $event) || (item_r3.isChecked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkedVal($event)); });
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_label_4_Template, 1, 1, "label", 17)(5, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_span_5_Template, 5, 2, "span", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const item_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(!ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext ? "invalid" : "valid");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵproperty("tabIndex", ctx_r0.tabIndexValue)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵtwoWayProperty("ngModel", item_r3.isChecked);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable || item_r3.maxValueDisabled);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.validateContaint(item_r3.label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.validateContaint(item_r3.label));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const customMatTooltipCheckList_r4 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckList_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 31);
    i0.ɵɵlistener("click", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_Template_label_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const item_r3 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.storeLastClickedValue(ctx_r0.commonUtil.getID(item_r3).value, $event.target)); });
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3 == null ? null : item_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(item_r3 == null ? null : item_r3.title));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    const customMatTooltipCheckList_r4 = i0.ɵɵreference(4);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckList_r4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(item_r3.label);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 32);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    const item_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(6, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", item_r3 == null ? null : item_r3.title);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !(item_r3 == null ? null : item_r3.title));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 33);
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext(2);
    const item_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(5, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color))("innerHTML", item_r3.label, i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "input", 27);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const item_r3 = i0.ɵɵnextContext().$implicit; i0.ɵɵtwoWayBindingSet(item_r3.isChecked, $event) || (item_r3.isChecked = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkedVal($event.target)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_3_Template, 5, 8, "label", 28)(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_4_Template, 5, 11, "label", 29)(5, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_label_5_Template, 1, 10, "label", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const item_r3 = ctx_r4.$implicit;
    const i_r6 = ctx_r4.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("custom-control custom-checkbox  ", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r0.html_id, "", i_r6, "");
    i0.ɵɵtwoWayProperty("ngModel", item_r3.isChecked);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable || item_r3.maxValueDisabled);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(item_r3.label) && ctx_r0.additionalParameter["CEE_last_checked_value_api_key"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(item_r3.label) && !ctx_r0.additionalParameter["CEE_last_checked_value_api_key"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(item_r3.label));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r3 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(item_r3.title);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(item_r3.description);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r9.code).message_text, "");
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_ng_container_1_div_1_Template, 3, 4, "div", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r9 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext && message_r9.type == "Mandatory");
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessageData.message_text);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_template_2_div_0_Template, 3, 4, "div", 37);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext);
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 38)(2, "div")(3, "p", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r10.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r10.value.message_text, "");
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 36)(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(4, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_ng_container_4_Template, 5, 4, "ng-container", 23);
    i0.ɵɵpipe(5, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const singleErrorMessage_r11 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r11);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 3, ctx_r0.showComparisonError));
} }
function CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_1_Template, 6, 15, "ng-container", 12)(2, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_2_Template, 6, 16, "ng-container", 12)(3, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_template_3_Template, 7, 2, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(5, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_ng_container_5_Template, 6, 5, "ng-container", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const isLast_r12 = ctx.last;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.is_material);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", isLast_r12);
} }
function CeeCheckboxComponent_div_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_ng_template_7_ng_container_0_Template, 6, 3, "ng-container", 23);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.checkboxesDataList);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(2).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]), i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const customMatTooltipCheckbox_r15 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckbox_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]), ">");
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r16 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length <= 2);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "mat-checkbox", 40, 6);
    i0.ɵɵlistener("change", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkedVal($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_Template_mat_checkbox_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(5, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_label_5_Template, 1, 1, "label", 17)(6, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_span_6_Template, 5, 2, "span", 12);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const checkBoxControl_r17 = i0.ɵɵreference(4);
    const i_r14 = i0.ɵɵnextContext().index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(!ctx_r0.inputValue && ctx_r0.isMandatory && checkBoxControl_r17 && (checkBoxControl_r17.dirty || checkBoxControl_r17.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(ctx_r0.fieldValue));
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵproperty("tabIndex", ctx_r0.tabIndexValue);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("checked", ctx_r0.isSingleCheckboxChecked)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.validateContaint(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.validateContaint(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const customMatTooltipCheckbox_r15 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckbox_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 31);
    i0.ɵɵlistener("click", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_Template_label_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.storeLastClickedValue(ctx_r0.commonUtil.getID(ctx_r0.fieldValue), $event.target)); });
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r16 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(3, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length <= 2);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const customMatTooltipCheckbox_r15 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipCheckbox_r15);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 32);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_span_2_Template, 2, 2, "span", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_span_4_Template, 2, 1, "span", 12);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext(2);
    const opt_r16 = ctx_r19.$implicit;
    const i_r14 = ctx_r19.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(6, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r16.split("||").length <= 2);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 33);
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext(2).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(5, _c2, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color))("innerHTML", ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14]), i0.ɵɵsanitizeHtml);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "input", 41, 7);
    i0.ɵɵlistener("change", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkedVal($event.target)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_4_Template, 5, 8, "label", 28)(5, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_5_Template, 5, 11, "label", 29)(6, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_label_6_Template, 1, 10, "label", 30);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const i_r14 = i0.ɵɵnextContext().index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("custom-control custom-checkbox  ", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.showErrorOnNext ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(ctx_r0.fieldValue));
    i0.ɵɵpropertyInterpolate2("name", "", ctx_r0.html_id, "", i_r14, "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("checked", ctx_r0.isSingleCheckboxChecked)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])) && ctx_r0.additionalParameter["CEE_last_checked_value_api_key"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])) && !ctx_r0.additionalParameter["CEE_last_checked_value_api_key"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.commonUtil.getValue(ctx_r0.fieldData.possible_values[i_r14])));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 35);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getTitlesOptions(opt_r16));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getDescriptionOptions(opt_r16));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r21.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r21.code).message_text, "");
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_ng_container_1_div_1_Template, 3, 4, "div", 37);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r21 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.checkBoxControl && (ctx_r0.checkBoxControl.dirty || ctx_r0.checkBoxControl.touched || ctx_r0.showErrorOnNext) && message_r21.type == "Mandatory");
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 23);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 38)(1, "p", 39);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.errorMessageData.message_text);
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_template_2_div_0_Template, 3, 4, "div", 37);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && ctx_r0.checkBoxControl && (ctx_r0.checkBoxControl.dirty || ctx_r0.checkBoxControl.touched || ctx_r0.showErrorOnNext));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 38)(2, "div")(3, "p", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r22 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r22.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r22.value.message_text, "");
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 36)(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(4, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_ng_container_4_Template, 5, 4, "ng-container", 23);
    i0.ɵɵpipe(5, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const singleErrorMessage_r23 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r23);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(5, 3, ctx_r0.showComparisonError));
} }
function CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_1_Template, 7, 17, "ng-container", 12)(2, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_2_Template, 7, 18, "ng-container", 12)(3, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_template_3_Template, 7, 2, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(5, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_ng_container_5_Template, 6, 5, "ng-container", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const isLast_r24 = ctx.last;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.is_material);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", isLast_r24);
} }
function CeeCheckboxComponent_div_0_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_ng_template_9_ng_container_0_Template, 6, 3, "ng-container", 23);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.fieldData.possible_values);
} }
function CeeCheckboxComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9)(1, "div", 10)(2, "div", 11);
    i0.ɵɵtemplate(3, CeeCheckboxComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 12)(4, CeeCheckboxComponent_div_0_span_4_Template, 2, 0, "span", 13)(5, CeeCheckboxComponent_div_0_button_5_Template, 2, 2, "button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeeCheckboxComponent_div_0_div_6_Template, 1, 0, "div", 15)(7, CeeCheckboxComponent_div_0_ng_template_7_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(9, CeeCheckboxComponent_div_0_ng_template_9_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const thenBlock_r25 = i0.ɵɵreference(8);
    const elseBlock_r26 = i0.ɵɵreference(10);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.checkboxesDataList.length > 1 || ctx_r0.extraPossibleValueStatus == true && ctx_r0.checkboxesDataList.length > 0)("ngIfThen", thenBlock_r25)("ngIfElse", elseBlock_r26);
} }
export class CeeCheckboxComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    checkBoxControl;
    checkField;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    columns = 0;
    inputValue = false;
    html_id = '';
    checkboxesDataList = [];
    extraPossibleValueStatus = false;
    isHTMLContent = false;
    isSingleCheckboxChecked = false;
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
        this.dependencyHandler('onLoad');
    }
    /**
     * function that unsubscribes all the events in base view when the component is unloaded
     * @param $event HTML event
     */
    // @HostListener('window:beforeunload', ['$event'])
    // undloadComponent($event: any) {
    //     this.onViewUnload();
    //     // $event.returnValue = true;
    // }
    // Helper method to clear checkbox data
    clearCheckboxData() {
        if (this.checkboxesDataList && this.checkboxesDataList.length > 0) {
            // Clear the array completely
            this.checkboxesDataList.length = 0;
            this.checkboxesDataList = [];
        }
    }
    ngOnDestroy() {
        // Clear DOM function references
        if (this.rootData &&
            this.rootData['FieldErrorFunctions'] &&
            this.fieldData &&
            this.fieldData.html_id) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Clear checkbox data
        this.clearCheckboxData();
        // Clear ViewChild references
        this.checkBoxControl = null;
        this.checkField = null;
        // Clear component state
        this.inputValue = false;
        this.html_id = '';
        this.extraPossibleValueStatus = false;
        this.isHTMLContent = false;
        this.isSingleCheckboxChecked = false;
        this.columns = 0;
        // Clear input properties
        this.rootData = null;
        this.mandatoryCondition = null;
        this.editableCondition = null;
        this.visibleCondition = null;
        // Clear field value
        this.fieldValue = null;
        this.onViewUnload();
    }
    /**
     * setting the data of the field when the key in the data matches the api key of the field
     * @param data api response data
     */
    onAPICallback(data) {
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.additionalParameter['externalApiOptionValue']) {
            const externalApiOptionValue = this.getExternalApiOptionValue(this.additionalParameter['externalApiOptionValue'], data);
            if (externalApiOptionValue !== null) {
                this.multipleCheckboxRender(externalApiOptionValue);
                this.setValues(this.fieldValue || []);
            }
        }
        if (this.rowData) {
            return;
        }
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            this.fieldValue = apiValue;
            this.inputValue = this.fieldValue === 'true' || this.fieldValue === '1' ? true : false;
            this.updateFieldData(this.fieldValue === 'false' || this.fieldValue === '0' ? '' : this.fieldValue);
            this.setValues(this.fieldValue || []);
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    multipleCheckboxRender(data) {
        let checkboxData = this.fieldData.possible_values;
        if (data) {
            checkboxData = data;
        }
        this.checkboxesDataList = [];
        if (checkboxData) {
            for (const [i, checkbox] of checkboxData.entries()) {
                let checkboxObject = {
                    id: 'C00' + i,
                    label: this.commonUtil.getValue(checkbox),
                    value: this.commonUtil.getID(checkbox),
                    isChecked: this.fieldValue.includes(this.commonUtil.getID(checkbox)) || this.commonUtil.getID(checkbox) == 1 ? true : false,
                    maxValueDisabled: false
                };
                if (checkbox.split('||').length > 2) {
                    checkboxObject['description'] = this.commonUtil.getDescriptionOptions(checkbox);
                    checkboxObject['title'] = this.commonUtil.getTitlesOptions(checkbox);
                }
                if (checkboxObject.label.includes('((dynamic))')) {
                    checkboxObject.label = this.setDynamicLabelUtil.getDynamicValue({ field_label: checkboxObject.label }).field_label;
                }
                this.checkboxesDataList.push(checkboxObject);
            }
            this.getMaskDataOnCheckBox(this.checkboxesDataList, true);
        }
        this.maxValueCheck();
    }
    maxValueCheck() {
        if (this.additionalParameter['MaxValue']) {
            const selectedEle = this.checkboxesDataList.filter(element => element['isChecked'] === true);
            this.checkboxesDataList.forEach((element) => {
                element.maxValueDisabled = (selectedEle.length >= parseInt(this.additionalParameter['MaxValue']) && element['isChecked'] === false);
            });
        }
    }
    /**
     * abstract method that gets loaded after the field has been initialized
     */
    onViewDataInit() {
        this.extraPossibleValueStatus = (this.additionalParameter['externalApiOptionValue']) ? true : false;
        this.multipleCheckboxRender();
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // END
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        const saveFieldListValue = localStorage.getItem('saveFieldList');
        const parameters = this.fieldData.additional_parameters;
        const columnParam = parameters?.find(p => p.parameter_type?.trim() === 'ShowinColumn_no');
        this.columns = columnParam?.value ?? '1';
        if (saveFieldListValue
            && saveFieldListValue.split('|').map(str => str.trim()).includes(this.fieldData.unique_id)) {
            this.fieldValue = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        }
        else {
            // this.fieldValue = this.commonUtil.getID(this.fieldData.possible_values[0]);
            this.fieldValue = this.commonUtil.getID(this.fieldValue);
            if (this.rowData) {
                if (this.rowData.hasOwnProperty('value')) {
                    this.fieldValue = this.rowData.value;
                    if (this.rowData.isApiResponse) {
                        this.appDataService.updateAppData(Object.assign({}, this.appData, { value: this.fieldValue }));
                    }
                }
            }
        }
        //for repeated externalApiOptionValue
        if (this.rowData && this.rowData['externalApiOptionValue'] && this.rowData['externalApiOptionValue'].length > 0) {
            // this.additionalParameter['externalApiOptionValue'] = this.rowData['externalApiOptionValue'][0];
            let position = this.rowData.position;
            this.additionalParameter['externalApiOptionValue'] = this.additionalParameter['externalApiOptionValue'].replaceAll('**', position);
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.additionalParameter['externalApiOptionValue']) {
            const handlerData = this.apiDataService.getApiDataByHandler(this.additionalParameter['externalApiOptionValue'].split('##')[0]);
            if (handlerData && handlerData.value) {
                const externalApiOptionValue = this.getExternalApiOptionValue(this.additionalParameter['externalApiOptionValue'], handlerData.value);
                if (externalApiOptionValue !== null) {
                    this.multipleCheckboxRender(externalApiOptionValue);
                }
            }
        }
        // this.inputValue = this.fieldValue === '1' ? true : false;
        this.setInputValue();
        this.setValues(this.fieldValue);
        if (this.fieldData.possible_values && this.fieldData.possible_values.length > 1) {
            this.fieldValue = this.returnCheckedValues();
            this.updateFieldData(this.fieldValue);
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                if (this.is_material) {
                    if (this.checkField)
                        this.checkField.focus();
                }
                else {
                    document.getElementById(this.fieldData.html_id + '0').focus();
                }
            };
        }
        if (this.fieldValue !== null) {
            this.updateFieldData(this.fieldValue);
        }
        this.getMaskDataOnCheckBox(this.fieldData.possible_values, false);
        //console.log("checkboxesDataList", this.checkboxesDataList)
        //For Single
        this.isSingleCheckboxChecked = this.isCheckboxChecked(this.fieldValue);
    }
    getMaskDataOnCheckBox(data, fielData) {
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            let checkLabelData = [];
            if (fielData) {
                data.forEach(x => {
                    let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
                    let formatStr = x.label;
                    x.label = this.commonUtil.getMaskedData(formatStr, formats[0], formats[1], formats[2]);
                    checkLabelData.push(x);
                });
                this.checkboxesDataList = checkLabelData;
            }
            else {
                data.forEach(x => {
                    let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
                    let formatStr = x.split('||');
                    let field_box = this.commonUtil.getMaskedData(formatStr[1], formats[0], formats[1], formats[2]);
                    checkLabelData.push(field_box);
                });
                this.fieldData.possible_values = checkLabelData;
            }
        }
    }
    /**
     * abstract method called when any Empty Session event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that needs to be cleared
     */
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
                if (this.fieldData.possible_values.length > 1) {
                    this.multipleCheckboxRender();
                    this.updateFieldData([]);
                    return;
                }
                // default value
                this.fieldValue = '';
                if (this.additionalParameter['default_value']) {
                    this.fieldValue = this.commonUtil.getID(this.additionalParameter['default_value']);
                }
                // else if (this.fieldData.possible_values.length > 0) {
                //     this.fieldValue = this.commonUtil.getID(this.fieldData.possible_values[0]);
                // } else { }
                // this.inputValue = this.fieldValue === '1' ? true : false;
                this.setInputValue();
                this.updateFieldData(this.fieldValue === '0' ? '' : this.fieldValue);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.checkBoxControl.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.checkBoxControl) {
                    this.checkBoxControl.control.markAsUntouched();
                    this.checkBoxControl.control.markAsPristine();
                    this.checkBoxControl.control.updateValueAndValidity();
                }
                return;
            }
        });
    }
    /**
     * abstract method called when any Custom Function event is triggered
     * @param get_data the object that contains the unique_ids
     * and the api keys of the fields that project needs to set specifically
     * by completing any operation on the project end.
     */
    handleCustomFunction(get_data) {
        let data = [];
        let unique_id_value = '';
        if (typeof get_data === 'object') {
            Object.keys(get_data).forEach((key, value) => {
                data.push(key);
            });
            unique_id_value = this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.fieldValue = this.commonUtil.getID(get_data[unique_id_value]);
            // this.inputValue = this.fieldValue === '1' ? true : false;
            this.setInputValue();
            this.updateFieldData(this.fieldValue);
            this.setValues(this.fieldValue);
        }
    }
    concatData() { }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    setValues(valArr) {
        if (valArr && Array.isArray(valArr)) {
            this.checkboxesDataList.forEach((element) => {
                element.isChecked = valArr.includes(element.value);
            });
        }
        else {
            this.checkboxesDataList.forEach((element) => {
                element.isChecked = false;
            });
        }
        this.maxValueCheck();
    }
    onEnter(event, item) {
        if (event.key === 'Enter') {
            item.isChecked = !item.isChecked;
            if (this.checkboxesDataList.length > 1 || (this.extraPossibleValueStatus == true && this.checkboxesDataList.length > 0)) {
                this.fieldValue = this.returnCheckedValues();
                this.updateFieldData(this.fieldValue);
            }
            else {
                if (this.additionalParameter.hasOwnProperty("CEE_SingleCheckboxOption")) {
                    if (this.additionalParameter['CEE_SingleCheckboxOption'] == "true") {
                        const checkedCond = item.isChecked ? '1' : ''; // I agree
                        this.inputValue = item.isChecked;
                        this.updateFieldData(checkedCond);
                    }
                    else {
                        //For Possible Values
                        this.inputValue = this.getCheckedValue(item.isChecked);
                        this.updateFieldData(this.inputValue);
                    }
                }
                else {
                    const checkedCond = item.isChecked ? '1' : ''; // I agree
                    this.inputValue = item.isChecked;
                    this.updateFieldData(checkedCond);
                }
            }
            if (item.isChecked) {
                this.onComponentEvent('OnChecked');
            }
            else if (!item.isChecked) {
                this.onComponentEvent('OnUnchecked');
            }
            // onClick event of checkbox
            this.onComponentEvent('OnClick');
            this.onDirty();
            this.maxValueCheck();
        }
    }
    storeLastClickedValue(clickedVal, eventTarget) {
        this.checkedVal(eventTarget);
        if (this.additionalParameter['CEE_last_checked_value_api_key']) {
            let primaryFieldData = this.appData;
            primaryFieldData = {
                ...primaryFieldData, ...{
                    id: "detail_id_clicked",
                    editable: false,
                    visible: false,
                    mandatory: false,
                    value: clickedVal,
                    apiKey: this.isSingleApiKey ? this.additionalParameter['CEE_last_checked_value_api_key'] : '',
                    isValid: true,
                    responseApiKey: [],
                    requestApiKey: this.isSingleApiKey ? [] : [this.additionalParameter['CEE_last_checked_value_api_key']]
                }
            };
            this.appDataService.setAppData(primaryFieldData);
            this.onComponentEvent('OnDisplayValueClicked');
        }
    }
    checkedVal(eventTarget) {
        if (this.checkboxesDataList.length > 1 || (this.extraPossibleValueStatus == true && this.checkboxesDataList.length > 0)) {
            this.fieldValue = this.returnCheckedValues();
            this.updateFieldData(this.fieldValue);
        }
        else {
            if (this.additionalParameter.hasOwnProperty("CEE_SingleCheckboxOption")) {
                if (this.additionalParameter['CEE_SingleCheckboxOption'] == "true") {
                    const checkedCond = eventTarget.checked ? '1' : ''; // I agree
                    this.inputValue = eventTarget.checked;
                    this.updateFieldData(checkedCond);
                }
                else {
                    //For Possible Values
                    this.inputValue = this.getCheckedValue(eventTarget.checked);
                    this.updateFieldData(this.inputValue);
                }
            }
            else {
                const checkedCond = eventTarget.checked ? '1' : ''; // I agree
                this.inputValue = eventTarget.checked;
                this.updateFieldData(checkedCond);
            }
        }
        if (eventTarget.checked) {
            this.onComponentEvent('OnChecked');
        }
        else if (!eventTarget.checked) {
            this.onComponentEvent('OnUnchecked');
        }
        // onClick event of checkbox
        this.onComponentEvent('OnClick');
        this.onDirty();
        this.maxValueCheck();
    }
    /**
     * function that returns checked values
     * only works when the possible values are more than 1
     */
    returnCheckedValues() {
        return this.checkboxesDataList.filter((value) => {
            return value.isChecked;
        }).map((item) => {
            return item.value;
        });
    }
    /**
     * function that returns checked values
     * only works when the possible values is 1 or not present
     */
    getCheckedValue(isChecked) {
        if (isChecked) {
            if (this.additionalParameter.hasOwnProperty("CEE_StoreValueAsList") && this.additionalParameter['CEE_StoreValueAsList'] == "true") {
                return this.fieldData.possible_values.map((item) => {
                    return this.commonUtil.getID(item);
                });
            }
            else {
                return this.commonUtil.getID(this.fieldData.possible_values[0]);
            }
        }
        else {
            return "";
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = this.commonUtil.getID(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]);
                // this.inputValue = this.fieldValue === '1' ? true : false;
                this.setInputValue();
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
                this.setValues(this.fieldValue);
            }
        }
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
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'multipleCheckboxRender()'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         if (changeMap[value].includes('()')) {
        //             changeMap[value.split('()')[0]]();
        //         } else {
        //             this[langVal.key] = langVal.val;
        //         }
        //     }
        // }
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'isEditable');
        }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        if (changes.mandatoryCondition) {
            this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        }
    }
    validateContaint(content) {
        this.isHTMLContent = false;
        var elementArr = ["<b>", "<h1>", "<h2>", "<h3>", "<h4>", "<h5>", "<h6>", "<div>", "<span>", "<img>"];
        elementArr.every((element) => {
            if (content.includes(element)) {
                this.isHTMLContent = true;
                return true;
            }
        });
        return this.isHTMLContent;
    }
    isCheckboxChecked(fieldValue) {
        if (this.additionalParameter.hasOwnProperty("CEE_SingleCheckboxOption")) {
            if (this.additionalParameter['CEE_SingleCheckboxOption'] == "true") {
                return this.commonUtil.getID(fieldValue) == '1' ? true : false;
            }
            else {
                //   console.log(fieldValue, this.fieldValue, this.inputValue)
                return this.commonUtil.getID(fieldValue) == fieldValue ? true : false;
            }
        }
        else {
            return this.commonUtil.getID(fieldValue) == '1' ? true : false;
        }
    }
    setInputValue() {
        if (this.additionalParameter.hasOwnProperty("CEE_SingleCheckboxOption")) {
            if (this.additionalParameter['CEE_SingleCheckboxOption'] == "true") {
                this.inputValue = this.fieldValue === '1' ? true : false;
            }
            else {
                this.inputValue = ((this.fieldValue == this.getCheckedValue(true)) ? true : false);
            }
        }
        else {
            this.inputValue = this.fieldValue === '1' ? true : false;
        }
    }
    static ɵfac = function CeeCheckboxComponent_Factory(t) { return new (t || CeeCheckboxComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCheckboxComponent, selectors: [["app-cee-checkbox"]], viewQuery: function CeeCheckboxComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkBoxControl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.checkField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["thenBlock", ""], ["elseBlock", ""], ["customMatTooltipCheckList", ""], ["checkField", ""], ["singleErrorMessage", ""], ["customMatTooltipCheckbox", ""], ["checkField", "", "checkBoxControl", "ngModel"], ["checkBoxControl", "ngModel"], ["class", "field-wrapper", 3, "id", "class", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], ["class", "form-field", 4, "ngIf", "ngIfThen", "ngIfElse"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], [1, "form-field"], [4, "ngFor", "ngForOf"], [3, "keyup", "ngModelChange", "change", "tabIndex", "aria-label", "id", "ngModel", "disabled", "name"], ["placement", "top", 3, "ngbTooltip", 4, "ngIf"], ["placement", "top", 3, "ngbTooltip"], ["type", "checkbox", 1, "custom-control-input", 3, "ngModelChange", "change", "id", "ngModel", "disabled", "name"], ["class", "custom-control-label", 3, "ngStyle", "click", 4, "ngIf"], ["class", "custom-control-label", 3, "for", "ngStyle", 4, "ngIf"], ["class", "custom-control-label", 3, "for", "ngStyle", "innerHTML", 4, "ngIf"], [1, "custom-control-label", 3, "click", "ngStyle"], [1, "custom-control-label", 3, "for", "ngStyle"], [1, "custom-control-label", 3, "for", "ngStyle", "innerHTML"], [1, "tooltip_container"], [1, "tooltip_text"], [4, "ngIf", "ngIfElse"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle"], [3, "change", "ngModelChange", "tabIndex", "id", "value", "ngModel", "checked", "disabled", "name"], ["type", "checkbox", 1, "custom-control-input", 3, "change", "ngModelChange", "id", "value", "ngModel", "checked", "disabled", "name"]], template: function CeeCheckboxComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeCheckboxComponent_div_0_Template, 11, 10, "div", 8);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, MatCheckboxModule, i10.MatCheckbox, FormsModule, i11.CheckboxControlValueAccessor, i11.NgControlStatus, i11.NgModel, NgbTooltipModule, i12.NgbTooltip, NgStyle, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, i14.TooltipDirective], styles: ["input[type=checkbox][_ngcontent-%COMP%]:focus-visible + label[_ngcontent-%COMP%]{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCheckboxComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-checkbox', standalone: true, imports: [MatTooltipModule, MatCheckboxModule, FormsModule, NgbTooltipModule, NgStyle, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{html_id}}\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n        </div>\r\n        <div class=\"form-field\"\r\n            *ngIf=\"(checkboxesDataList.length>1 || (extraPossibleValueStatus == true && checkboxesDataList.length>0)); then thenBlock else elseBlock\">\r\n        </div>\r\n        <ng-template #thenBlock>\r\n            <ng-container *ngFor=\"let item of checkboxesDataList; index as i; last as isLast\">  \r\n                <!-- Material checkbox -->\r\n                <!-- '$event' of mat-checkbox = '$event.target' of normal input checkbox -->\r\n                <ng-container *ngIf=\"is_material\">\r\n                    \r\n                    <div class=\"{{ !inputValue && isMandatory && (showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                        <mat-checkbox #checkField [tabIndex]=\"tabIndexValue\"\r\n                            (keyup)=\"onEnter($event, item)\"\r\n                            [aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                            id=\"{{html_id}}{{i}}\" [(ngModel)]=\"item.isChecked\" (change)=\"checkedVal($event)\"\r\n                            [disabled]=\"!isEditable || item.maxValueDisabled\" name=\"{{html_id}}{{i}}\">\r\n                            <label class=\"col-form-label\" *ngIf=\"validateContaint(item.label)\" [innerHTML]=\"item.label\"></label>\r\n                            <span *ngIf=\"!validateContaint(item.label)\">\r\n                                <ng-container><span *ngIf=\"item?.title\" [ngbTooltip]=\"customMatTooltipCheckList\" placement=\"top\">{{item.label}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"!item?.title\">{{item.label}}</span></ng-container>\r\n                            </span>\r\n                        </mat-checkbox>\r\n                    </div>                \r\n                </ng-container>\r\n\r\n                <!-- Normal Input Checkbox -->\r\n                <ng-container *ngIf=\"!is_material\">                                   \r\n                    <div class=\"custom-control custom-checkbox  {{ !inputValue && isMandatory && (showErrorOnNext) ? 'invalid' : 'valid' }}\">                       \r\n                        <input type=\"checkbox\" [attr.tabindex]=\"tabIndexValue\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                            class=\"custom-control-input\" id=\"{{html_id}}{{i}}\" [(ngModel)]=\"item.isChecked\"\r\n                            (change)=\"checkedVal($event.target)\" [disabled]=\"!isEditable || item.maxValueDisabled\"\r\n                            name=\"{{html_id}}{{i}}\">\r\n                      \r\n                        <label class=\"custom-control-label\" [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\t\t'color': fieldData.field_style.font_color\r\n\t\t\t\t\t\t\t\t\t\t}\" (click)=\"storeLastClickedValue(commonUtil.getID(item).value, $event.target)\"\r\n                                        *ngIf=\"!isHTML(item.label) && additionalParameter['CEE_last_checked_value_api_key']\">\r\n                                        <ng-container><span *ngIf=\"item?.title\" [ngbTooltip]=\"customMatTooltipCheckList\" placement=\"top\">{{item.label}}</span></ng-container>\r\n                                        <ng-container><span *ngIf=\"!item?.title\">{{item.label}}</span></ng-container>\r\n                                    </label>\r\n\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n                                        'font-family': fieldData.field_style.font_name,\r\n                                        'font-size': fieldData.field_style.font_size,\r\n                                        'font-style': fieldData.field_style.font_style,\r\n                                        'color': fieldData.field_style.font_color\r\n                                }\" *ngIf=\"!isHTML(item.label) && !additionalParameter['CEE_last_checked_value_api_key']\">\r\n                                <ng-container><span *ngIf=\"item?.title\" [ngbTooltip]=\"customMatTooltipCheckList\" placement=\"top\">{{item.label}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"!item?.title\">{{item.label}}</span></ng-container>\r\n                            </label>\r\n\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t'color': fieldData.field_style.font_color\r\n\t\t\t\t\t\t\t\t\t\t\t\t}\" *ngIf=\"isHTML(item.label)\" [innerHTML]=\"item.label\"></label>\r\n                    </div>\r\n                    \r\n                </ng-container>\r\n                <ng-template #customMatTooltipCheckList >\r\n                    <div class=\"tooltip_container\">\r\n                    <strong>{{ item.title }}</strong><br/>\r\n                    <span class=\"tooltip_text\">{{ item.description }}</span><br/>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"isLast\">\r\n                    <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                        <ng-container *ngFor=\"let message of messages\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"!inputValue && isMandatory && (showErrorOnNext) && message.type == 'Mandatory'\">\r\n                                <p [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #singleErrorMessage>\r\n                        <div class=\"error-message-wrapper\" *ngIf=\"!inputValue && isMandatory && (showErrorOnNext)\">\r\n                            <p [ngStyle]=\"{'color': errorMessageData.color}\">{{errorMessageData.message_text}}</p>\r\n                        </div>\r\n                    </ng-template>\r\n\r\n                    <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                        <div class=\"error-message-wrapper\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </ng-container>\r\n        </ng-template>\r\n        <ng-template #elseBlock>\r\n            <ng-container *ngFor=\"let opt of fieldData.possible_values; index as i; last as isLast\">\r\n                <!-- Material checkbox -->\r\n                <!-- '$event of mat-checkbox = '$event.target' of normal input checkbox -->\r\n                <ng-container *ngIf=\"is_material\">                    \r\n                    <div\r\n                        class=\"{{ !inputValue && isMandatory && checkBoxControl && (checkBoxControl.dirty || checkBoxControl.touched || showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                        <mat-checkbox #checkField [tabIndex]=\"tabIndexValue\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                            id=\"{{html_id}}{{i}}\" value=\"{{commonUtil.getID(fieldValue)}}\" (change)=\"checkedVal($event)\"\r\n                            [(ngModel)]=\"inputValue\" [checked]=\"isSingleCheckboxChecked\"\r\n                            [disabled]=\"!isEditable\" name=\"{{html_id}}{{i}}\" #checkBoxControl=\"ngModel\">\r\n                            <label class=\"col-form-label\" *ngIf=\"!validateContaint(commonUtil.getValue(fieldData.possible_values[i]))\"\r\n                                [innerHTML]=\"commonUtil.getValue(fieldData.possible_values[i])\"></label>\r\n                            <span *ngIf=\"!validateContaint(commonUtil.getValue(fieldData.possible_values[i]))\">\r\n                                <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customMatTooltipCheckbox\" placement=\"top\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(fieldData.possible_values[i])}}></span></ng-container>\r\n                            </span>\r\n                        </mat-checkbox>\r\n                    </div>                   \r\n                </ng-container>\r\n\r\n                <!-- Normal Input checkbox -->\r\n                <ng-container *ngIf=\"!is_material\">\r\n                   \r\n                    <div\r\n                        class=\"custom-control custom-checkbox  {{ !inputValue && isMandatory && (showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                        <input type=\"checkbox\" [attr.tabindex]=\"tabIndexValue\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                            class=\"custom-control-input\" id=\"{{html_id}}{{i}}\" value=\"{{commonUtil.getID(fieldValue)}}\"\r\n                            (change)=\"checkedVal($event.target)\" [(ngModel)]=\"inputValue\"\r\n                            [checked]=\"isSingleCheckboxChecked\" [disabled]=\"!isEditable\"\r\n                            name=\"{{html_id}}{{i}}\" #checkBoxControl=\"ngModel\">\r\n\r\n                        <label class=\"custom-control-label\" [ngStyle]=\"{\r\n                                        'font-family': fieldData.field_style.font_name,\r\n                                        'font-size': fieldData.field_style.font_size,\r\n                                        'font-style': fieldData.field_style.font_style,\r\n                                        'color': fieldData.field_style.font_color\r\n                                }\"  (click)=\"storeLastClickedValue(commonUtil.getID(fieldValue), $event.target)\"\r\n                                *ngIf=\"!isHTML(commonUtil.getValue(fieldData.possible_values[i])) && additionalParameter['CEE_last_checked_value_api_key']\">\r\n                                <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customMatTooltipCheckbox\" placement=\"top\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                            </label>\r\n\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t'color': fieldData.field_style.font_color\r\n\t\t\t\t\t\t\t\t\t\t\t}\" *ngIf=\"!isHTML(commonUtil.getValue(fieldData.possible_values[i])) && !additionalParameter['CEE_last_checked_value_api_key']\">\r\n                                            <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customMatTooltipCheckbox\" placement=\"top\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                                            <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(fieldData.possible_values[i])}}</span></ng-container>\r\n                                        </label>\r\n\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t'color': fieldData.field_style.font_color\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t}\" *ngIf=\"isHTML(commonUtil.getValue(fieldData.possible_values[i]))\"\r\n                            [innerHTML]=\"commonUtil.getValue(fieldData.possible_values[i])\"></label>\r\n                    </div>                    \r\n                </ng-container>\r\n                <ng-template #customMatTooltipCheckbox >\r\n                    <div class=\"tooltip_container\">\r\n                    <strong>{{ commonUtil.getTitlesOptions(opt) }}</strong><br/>\r\n                    <span class=\"tooltip_text\">{{ commonUtil.getDescriptionOptions(opt) }}</span><br/>\r\n                    </div>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"isLast\">\r\n                    <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                        <ng-container *ngFor=\"let message of messages\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"!inputValue && isMandatory && checkBoxControl && (checkBoxControl.dirty || checkBoxControl.touched || showErrorOnNext) && message.type == 'Mandatory'\">\r\n                                <p [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #singleErrorMessage>\r\n                        <div class=\"error-message-wrapper\"\r\n                            *ngIf=\"!inputValue && isMandatory && checkBoxControl && (checkBoxControl.dirty || checkBoxControl.touched || showErrorOnNext)\">\r\n                            <p [ngStyle]=\"{'color': errorMessageData.color}\">{{errorMessageData.message_text}}</p>\r\n                        </div>\r\n                    </ng-template>\r\n\r\n                    <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                        <div class=\"error-message-wrapper\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </ng-container>\r\n        </ng-template>\r\n    </div>\r\n</div>\r\n", styles: ["input[type=checkbox]:focus-visible+label{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { checkBoxControl: [{
            type: ViewChild,
            args: ['checkBoxControl', { static: false }]
        }], checkField: [{
            type: ViewChild,
            args: ['checkField', { static: false }]
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCheckboxComponent, { className: "CeeCheckboxComponent", filePath: "lib\\field-components\\cee-checkbox\\cee-checkbox.component.ts", lineNumber: 29 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWNoZWNrYm94LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1jaGVja2JveC9jZWUtY2hlY2tib3guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWNoZWNrYm94L2NlZS1jaGVja2JveC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBcUQsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUs3QyxPQUFPLEVBQUUsV0FBVyxFQUFXLE1BQU0sZ0JBQWdCLENBQUM7QUFHdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDL0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDOUQsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2R4RCxpQ0FBcUU7SUFBQSxZQUF5QjtJQUFBLGlCQUFROzs7SUFBakMsY0FBeUI7SUFBekIsa0RBQXlCOzs7SUFDOUYsNEJBQ2dEOzs7SUFBNUMsMkVBQW1DOzs7SUFIM0MsNkJBQWdEO0lB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RUFobEJRLG9CQUFvQjs2REFBcEIsb0JBQW9COzs7Ozs7OztZQzVCakMsdUVBQ29HOztZQUR2RCxvQ0FBZTs0QkQwQjlDLGdCQUFnQixFQUFFLGlCQUFpQixtQkFBRSxXQUFXLHNFQUFFLGdCQUFnQixrQkFBRSxPQUFPLEVBQUUsWUFBWSwyQ0FBRSxhQUFhOztpRkFFekcsb0JBQW9CO2NBUGhDLFNBQVM7MkJBQ0ksa0JBQWtCLGNBR2hCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLGlCQUFpQixFQUFFLFdBQVcsRUFBRSxnQkFBZ0IsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztnVEFJbEUsZUFBZTtrQkFBL0QsU0FBUzttQkFBQyxpQkFBaUIsRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDSCxVQUFVO2tCQUFyRCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFFekIsTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSzs7a0ZBWkcsb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveCBhcyBNYXRDaGVja2JveCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgTmdiVG9vbHRpcE1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS1jaGVja2JveCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLWNoZWNrYm94LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1jaGVja2JveC5jb21wb25lbnQuc2NzcycsICcuLi9maWVsZC1jb21tb24uc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRUb29sdGlwTW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgRm9ybXNNb2R1bGUsIE5nYlRvb2x0aXBNb2R1bGUsIE5nU3R5bGUsIENvbW1vbk1vZHVsZSwgVG9vbHRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZUNoZWNrYm94Q29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdjaGVja0JveENvbnRyb2wnLCB7IHN0YXRpYzogZmFsc2UgfSkgY2hlY2tCb3hDb250cm9sOiBOZ01vZGVsO1xyXG4gICAgQFZpZXdDaGlsZCgnY2hlY2tGaWVsZCcsIHsgc3RhdGljOiBmYWxzZSB9KSBjaGVja0ZpZWxkOiBNYXRDaGVja2JveDtcclxuXHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG4gICAgY29sdW1ucyA9IDA7XHJcbiAgICBpbnB1dFZhbHVlID0gZmFsc2U7XHJcbiAgICBodG1sX2lkID0gJyc7XHJcbiAgICBjaGVja2JveGVzRGF0YUxpc3Q6IG9iamVjdFtdID0gW107XHJcbiAgICBleHRyYVBvc3NpYmxlVmFsdWVTdGF0dXMgPSBmYWxzZTtcclxuICAgIGlzSFRNTENvbnRlbnQ6IGFueSA9IGZhbHNlO1xyXG4gICAgaXNTaW5nbGVDaGVja2JveENoZWNrZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlciwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuc3RlcElkLCB0aGlzLmZpZWxkRGF0YSwgdGhpcy5rZWVwU3RhdGUsIHRoaXMucm93RGF0YSk7XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmN5SGFuZGxlcignb25Mb2FkJyk7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgdW5zdWJzY3JpYmVzIGFsbCB0aGUgZXZlbnRzIGluIGJhc2UgdmlldyB3aGVuIHRoZSBjb21wb25lbnQgaXMgdW5sb2FkZWRcclxuICAgICAqIEBwYXJhbSAkZXZlbnQgSFRNTCBldmVudFxyXG4gICAgICovXHJcbiAgICAvLyBASG9zdExpc3RlbmVyKCd3aW5kb3c6YmVmb3JldW5sb2FkJywgWyckZXZlbnQnXSlcclxuICAgIC8vIHVuZGxvYWRDb21wb25lbnQoJGV2ZW50OiBhbnkpIHtcclxuICAgIC8vICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgLy8gICAgIC8vICRldmVudC5yZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgIC8vIEhlbHBlciBtZXRob2QgdG8gY2xlYXIgY2hlY2tib3ggZGF0YVxyXG4gICAgcHJpdmF0ZSBjbGVhckNoZWNrYm94RGF0YSgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5jaGVja2JveGVzRGF0YUxpc3QgJiYgdGhpcy5jaGVja2JveGVzRGF0YUxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyBDbGVhciB0aGUgYXJyYXkgY29tcGxldGVseVxyXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94ZXNEYXRhTGlzdC5sZW5ndGggPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94ZXNEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICAvLyBDbGVhciBET00gZnVuY3Rpb24gcmVmZXJlbmNlc1xyXG4gICAgICAgIGlmICh0aGlzLnJvb3REYXRhICYmIFxyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ10gJiYgXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhICYmIFxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5odG1sX2lkKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ11bdGhpcy5maWVsZERhdGEuaHRtbF9pZF07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbGVhciBjaGVja2JveCBkYXRhXHJcbiAgICAgICAgdGhpcy5jbGVhckNoZWNrYm94RGF0YSgpO1xyXG5cclxuICAgICAgICAvLyBDbGVhciBWaWV3Q2hpbGQgcmVmZXJlbmNlc1xyXG4gICAgICAgIHRoaXMuY2hlY2tCb3hDb250cm9sID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNoZWNrRmllbGQgPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBDbGVhciBjb21wb25lbnQgc3RhdGVcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSAnJztcclxuICAgICAgICB0aGlzLmV4dHJhUG9zc2libGVWYWx1ZVN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNIVE1MQ29udGVudCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuaXNTaW5nbGVDaGVja2JveENoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSAwO1xyXG5cclxuICAgICAgICAvLyBDbGVhciBpbnB1dCBwcm9wZXJ0aWVzXHJcblxyXG5cclxuICAgICAgICB0aGlzLnJvb3REYXRhID0gbnVsbDtcclxuICAgICAgICB0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lZGl0YWJsZUNvbmRpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlQ29uZGl0aW9uID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgZmllbGQgdmFsdWVcclxuICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXR0aW5nIHRoZSBkYXRhIG9mIHRoZSBmaWVsZCB3aGVuIHRoZSBrZXkgaW4gdGhlIGRhdGEgbWF0Y2hlcyB0aGUgYXBpIGtleSBvZiB0aGUgZmllbGRcclxuICAgICAqIEBwYXJhbSBkYXRhIGFwaSByZXNwb25zZSBkYXRhXHJcbiAgICAgKi9cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gZm9yIG11bHRpcGxlIGFwaSBrZXlzIHRoZSB2YWx1ZSB0aGF0IG5lZWRzIHRvIGJlIHNldCB3aWxsIGNvbWVcclxuICAgICAgICAvLyBmcm9tIGFkZGl0aW9uYWxQYXJhbWV0ZXIgd2l0aCB0eXBlIGV4dGVybmFsQXBpT3B0aW9uVmFsdWVcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10pIHtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChleHRlcm5hbEFwaU9wdGlvblZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxlQ2hlY2tib3hSZW5kZXIoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh0aGlzLmZpZWxkVmFsdWUgfHwgW10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYXBpVmFsdWUgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBpZiAoYXBpVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gYXBpVmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZSA9PT0gJ3RydWUnIHx8IHRoaXMuZmllbGRWYWx1ZSA9PT0gJzEnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUgPT09ICdmYWxzZScgfHwgdGhpcy5maWVsZFZhbHVlID09PSAnMCcgPyAnJyA6IHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWVzKHRoaXMuZmllbGRWYWx1ZSB8fCBbXSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXR0aW5nIHRoZSBmaWVsZCBkYXRhIGJlbG93IGJlY2F1c2UgZ2V0IER5bmFtaWMgVXRpbCBpcyBjaGVja2luZyB0aGUgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBtdWx0aXBsZUNoZWNrYm94UmVuZGVyKGRhdGE/OiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgbGV0IGNoZWNrYm94RGF0YSA9IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcztcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBjaGVja2JveERhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrYm94ZXNEYXRhTGlzdCA9IFtdO1xyXG4gICAgICAgIGlmIChjaGVja2JveERhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBbaSwgY2hlY2tib3hdIG9mIGNoZWNrYm94RGF0YS5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja2JveE9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogJ0MwMCcgKyBpLFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiB0aGlzLmNvbW1vblV0aWwuZ2V0VmFsdWUoY2hlY2tib3gpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoY2hlY2tib3gpLFxyXG4gICAgICAgICAgICAgICAgICAgIGlzQ2hlY2tlZDogdGhpcy5maWVsZFZhbHVlLmluY2x1ZGVzKHRoaXMuY29tbW9uVXRpbC5nZXRJRChjaGVja2JveCkpIHx8IHRoaXMuY29tbW9uVXRpbC5nZXRJRChjaGVja2JveCkgPT0gMSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBtYXhWYWx1ZURpc2FibGVkOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2JveC5zcGxpdCgnfHwnKS5sZW5ndGggPiAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tib3hPYmplY3RbJ2Rlc2NyaXB0aW9uJ10gPSB0aGlzLmNvbW1vblV0aWwuZ2V0RGVzY3JpcHRpb25PcHRpb25zKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2JveE9iamVjdFsndGl0bGUnXSA9IHRoaXMuY29tbW9uVXRpbC5nZXRUaXRsZXNPcHRpb25zKGNoZWNrYm94KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjaGVja2JveE9iamVjdC5sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrYm94T2JqZWN0LmxhYmVsID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh7IGZpZWxkX2xhYmVsOiBjaGVja2JveE9iamVjdC5sYWJlbCB9KS5maWVsZF9sYWJlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tib3hlc0RhdGFMaXN0LnB1c2goY2hlY2tib3hPYmplY3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0TWFza0RhdGFPbkNoZWNrQm94KHRoaXMuY2hlY2tib3hlc0RhdGFMaXN0LCB0cnVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMubWF4VmFsdWVDaGVjaygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbWF4VmFsdWVDaGVjaygpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYXhWYWx1ZSddKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRWxlID0gdGhpcy5jaGVja2JveGVzRGF0YUxpc3QuZmlsdGVyKGVsZW1lbnQgPT4gZWxlbWVudFsnaXNDaGVja2VkJ10gPT09IHRydWUpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94ZXNEYXRhTGlzdC5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQubWF4VmFsdWVEaXNhYmxlZCA9IChzZWxlY3RlZEVsZS5sZW5ndGggPj0gcGFyc2VJbnQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYXhWYWx1ZSddKSAmJiBlbGVtZW50Wydpc0NoZWNrZWQnXSA9PT0gZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBhYnN0cmFjdCBtZXRob2QgdGhhdCBnZXRzIGxvYWRlZCBhZnRlciB0aGUgZmllbGQgaGFzIGJlZW4gaW5pdGlhbGl6ZWRcclxuICAgICAqL1xyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5leHRyYVBvc3NpYmxlVmFsdWVTdGF0dXMgPSAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10pID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubXVsdGlwbGVDaGVja2JveFJlbmRlcigpO1xyXG4gICAgICAgIC8vIEZvciB1bmlxdWUgaHRtbCBpZFxyXG4gICAgICAgIHRoaXMuaHRtbF9pZCA9IHRoaXMuZmllbGREYXRhLmh0bWxfaWRcclxuICAgICAgICAvLyBFTkRcclxuICAgICAgICB0aGlzLnRhYkluZGV4VmFsdWUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RhYkluZGV4J107XHJcbiAgICAgICAgY29uc3Qgc2F2ZUZpZWxkTGlzdFZhbHVlOiBzdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2F2ZUZpZWxkTGlzdCcpO1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnM7XHJcbiAgICAgICAgY29uc3QgY29sdW1uUGFyYW0gPSBwYXJhbWV0ZXJzPy5maW5kKHAgPT4gcC5wYXJhbWV0ZXJfdHlwZT8udHJpbSgpID09PSAnU2hvd2luQ29sdW1uX25vJyk7XHJcbiAgICAgICAgdGhpcy5jb2x1bW5zID0gY29sdW1uUGFyYW0/LnZhbHVlID8/ICcxJztcclxuICAgICAgICBpZiAoc2F2ZUZpZWxkTGlzdFZhbHVlXHJcbiAgICAgICAgICAgICYmIHNhdmVGaWVsZExpc3RWYWx1ZS5zcGxpdCgnfCcpLm1hcChzdHIgPT4gc3RyLnRyaW0oKSkuaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5nZXRJRCh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNbMF0pO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMucm93RGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhLmlzQXBpUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBwRGF0YSwgeyB2YWx1ZTogdGhpcy5maWVsZFZhbHVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9mb3IgcmVwZWF0ZWQgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZVxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10gJiYgdGhpcy5yb3dEYXRhWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAvLyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSA9IHRoaXMucm93RGF0YVsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddWzBdO1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnJvd0RhdGEucG9zaXRpb247XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10ucmVwbGFjZUFsbCgnKionLCBwb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmb3IgbXVsdGlwbGUgYXBpIGtleXMgdGhlIHZhbHVlIHRoYXQgbmVlZHMgdG8gYmUgc2V0IHdpbGwgY29tZVxyXG4gICAgICAgIC8vIGZyb20gYWRkaXRpb25hbFBhcmFtZXRlciB3aXRoIHR5cGUgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSkge1xyXG4gICAgICAgICAgICBjb25zdCBoYW5kbGVyRGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXS5zcGxpdCgnIyMnKVswXSk7XHJcbiAgICAgICAgICAgIGlmIChoYW5kbGVyRGF0YSAmJiBoYW5kbGVyRGF0YS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSwgaGFuZGxlckRhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsQXBpT3B0aW9uVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxlQ2hlY2tib3hSZW5kZXIoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZSA9PT0gJzEnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFZhbHVlcyh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgJiYgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5yZXR1cm5DaGVja2VkVmFsdWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vZm9yIFZhbGlkYXRlIEFORCBNYW5kYXRvcnkgZXJyb3JcclxuICAgICAgICBpZiAodGhpcy5yb290RGF0YSAmJiB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddW3RoaXMuZmllbGREYXRhLmh0bWxfaWRdID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNfbWF0ZXJpYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0ZpZWxkKSB0aGlzLmNoZWNrRmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5maWVsZERhdGEuaHRtbF9pZCArICcwJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5maWVsZFZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0TWFza0RhdGFPbkNoZWNrQm94KHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcywgZmFsc2UpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJjaGVja2JveGVzRGF0YUxpc3RcIiwgdGhpcy5jaGVja2JveGVzRGF0YUxpc3QpXHJcblxyXG4gICAgICAgIC8vRm9yIFNpbmdsZVxyXG4gICAgICAgIHRoaXMuaXNTaW5nbGVDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzQ2hlY2tib3hDaGVja2VkKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFza0RhdGFPbkNoZWNrQm94KGRhdGE6IGFueVtdLCBmaWVsRGF0YTogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NYXNrTnVtYmVyTGltaXQnXSkge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tMYWJlbERhdGEgPSBbXTtcclxuICAgICAgICAgICAgaWYgKGZpZWxEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdHMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NYXNrTnVtYmVyTGltaXQnXS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBmb3JtYXRTdHIgPSB4LmxhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgIHgubGFiZWwgPSB0aGlzLmNvbW1vblV0aWwuZ2V0TWFza2VkRGF0YShmb3JtYXRTdHIsIGZvcm1hdHNbMF0sIGZvcm1hdHNbMV0sIGZvcm1hdHNbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrTGFiZWxEYXRhLnB1c2goeCk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2JveGVzRGF0YUxpc3QgPSBjaGVja0xhYmVsRGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZm9ybWF0cyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX01hc2tOdW1iZXJMaW1pdCddLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZvcm1hdFN0ciA9IHguc3BsaXQoJ3x8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGZpZWxkX2JveCA9IHRoaXMuY29tbW9uVXRpbC5nZXRNYXNrZWREYXRhKGZvcm1hdFN0clsxXSwgZm9ybWF0c1swXSwgZm9ybWF0c1sxXSwgZm9ybWF0c1syXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tMYWJlbERhdGEucHVzaChmaWVsZF9ib3gpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IGNoZWNrTGFiZWxEYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWJzdHJhY3QgbWV0aG9kIGNhbGxlZCB3aGVuIGFueSBFbXB0eSBTZXNzaW9uIGV2ZW50IGlzIHRyaWdnZXJlZFxyXG4gICAgICogQHBhcmFtIGdldF9kYXRhIHRoZSBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgdW5pcXVlX2lkc1xyXG4gICAgICogYW5kIHRoZSBhcGkga2V5cyBvZiB0aGUgZmllbGRzIHRoYXQgbmVlZHMgdG8gYmUgY2xlYXJlZFxyXG4gICAgICovXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgaWYgKGdldF9kYXRhLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEudW5pcXVlX2lkcztcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuYXBwRGF0YS5pZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLmFwaUtleXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVuaXF1ZV9pZF92YWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm11bHRpcGxlQ2hlY2tib3hSZW5kZXIoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShbXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gZWxzZSBpZiAodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzWzBdKTtcclxuICAgICAgICAgICAgICAgIC8vIH0gZWxzZSB7IH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUgPT09ICcxJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlID09PSAnMCcgPyAnJyA6IHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXNldHRpbmcgdGhlIGZvcm0gZmllbGQgZG9lcyBub3Qgd29yayBiZWNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBvbmNlIGl0IGdldHMgcmVzZXQgaWYgaXQgaXMgbm90IHRvdWNoZWQgYWdhaW4gdGhlbiB0aGUgZmllbGQgd29uJ3QgZ2V0IGludmFsaWRcclxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHRoZSBmb3JtIGdldHMgc3VibWl0dGVkIGFuZCBlcnJvcnMgd29uJ3Qgc2hvdyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGZpZWxkIGFzIHVuVG91Y2hlZCwgUHJpc3RpbmUgLCB1cGRhdGUgdmFsdWUgYW4gdmFsaWRpdHkgYW5kIHNob3dFcnJvck9uTmV4dCB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmNoZWNrQm94Q29udHJvbC5jb250cm9sLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja0JveENvbnRyb2wpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQm94Q29udHJvbC5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tCb3hDb250cm9sLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrQm94Q29udHJvbC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogYWJzdHJhY3QgbWV0aG9kIGNhbGxlZCB3aGVuIGFueSBDdXN0b20gRnVuY3Rpb24gZXZlbnQgaXMgdHJpZ2dlcmVkXHJcbiAgICAgKiBAcGFyYW0gZ2V0X2RhdGEgdGhlIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSB1bmlxdWVfaWRzXHJcbiAgICAgKiBhbmQgdGhlIGFwaSBrZXlzIG9mIHRoZSBmaWVsZHMgdGhhdCBwcm9qZWN0IG5lZWRzIHRvIHNldCBzcGVjaWZpY2FsbHlcclxuICAgICAqIGJ5IGNvbXBsZXRpbmcgYW55IG9wZXJhdGlvbiBvbiB0aGUgcHJvamVjdCBlbmQuXHJcbiAgICAgKi9cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhnZXRfZGF0YSkuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZV9pZF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmdldElEKGdldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV0pO1xyXG5cclxuICAgICAgICAgICAgLy8gdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5maWVsZFZhbHVlID09PSAnMScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0SW5wdXRWYWx1ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlcyh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdmFsdWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZXModmFsQXJyKSB7XHJcbiAgICAgICAgaWYgKHZhbEFyciAmJiBBcnJheS5pc0FycmF5KHZhbEFycikpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja2JveGVzRGF0YUxpc3QuZm9yRWFjaCgoZWxlbWVudDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlbGVtZW50LmlzQ2hlY2tlZCA9IHZhbEFyci5pbmNsdWRlcyhlbGVtZW50LnZhbHVlKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrYm94ZXNEYXRhTGlzdC5mb3JFYWNoKChlbGVtZW50OiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuaXNDaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1heFZhbHVlQ2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVudGVyKGV2ZW50LCBpdGVtKSB7XHJcbiAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xyXG4gICAgICAgICAgICBpdGVtLmlzQ2hlY2tlZCA9ICFpdGVtLmlzQ2hlY2tlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tib3hlc0RhdGFMaXN0Lmxlbmd0aCA+IDEgfHwgKHRoaXMuZXh0cmFQb3NzaWJsZVZhbHVlU3RhdHVzID09IHRydWUgJiYgdGhpcy5jaGVja2JveGVzRGF0YUxpc3QubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMucmV0dXJuQ2hlY2tlZFZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoXCJDRUVfU2luZ2xlQ2hlY2tib3hPcHRpb25cIikpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU2luZ2xlQ2hlY2tib3hPcHRpb24nXSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkQ29uZCA9IGl0ZW0uaXNDaGVja2VkID8gJzEnIDogJyc7IC8vIEkgYWdyZWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gaXRlbS5pc0NoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKGNoZWNrZWRDb25kKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL0ZvciBQb3NzaWJsZSBWYWx1ZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5nZXRDaGVja2VkVmFsdWUoaXRlbS5pc0NoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZENvbmQgPSBpdGVtLmlzQ2hlY2tlZCA/ICcxJyA6ICcnOyAvLyBJIGFncmVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gaXRlbS5pc0NoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoY2hlY2tlZENvbmQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChpdGVtLmlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNoZWNrZWQnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICghaXRlbS5pc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25VbmNoZWNrZWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBvbkNsaWNrIGV2ZW50IG9mIGNoZWNrYm94XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DbGljaycpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZUNoZWNrKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlTGFzdENsaWNrZWRWYWx1ZShjbGlja2VkVmFsLCBldmVudFRhcmdldCkge1xyXG4gICAgICAgIHRoaXMuY2hlY2tlZFZhbChldmVudFRhcmdldCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX2xhc3RfY2hlY2tlZF92YWx1ZV9hcGlfa2V5J10pIHtcclxuICAgICAgICAgICAgbGV0IHByaW1hcnlGaWVsZERhdGEgPSB0aGlzLmFwcERhdGE7XHJcbiAgICAgICAgICAgIHByaW1hcnlGaWVsZERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi5wcmltYXJ5RmllbGREYXRhLCAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IFwiZGV0YWlsX2lkX2NsaWNrZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2xpY2tlZFZhbCxcclxuICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuaXNTaW5nbGVBcGlLZXkgPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9sYXN0X2NoZWNrZWRfdmFsdWVfYXBpX2tleSddIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFwaUtleTogdGhpcy5pc1NpbmdsZUFwaUtleSA/IFtdIDogW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX2xhc3RfY2hlY2tlZF92YWx1ZV9hcGlfa2V5J11dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2Uuc2V0QXBwRGF0YShwcmltYXJ5RmllbGREYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkRpc3BsYXlWYWx1ZUNsaWNrZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tlZFZhbChldmVudFRhcmdldCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoZWNrYm94ZXNEYXRhTGlzdC5sZW5ndGggPiAxIHx8ICh0aGlzLmV4dHJhUG9zc2libGVWYWx1ZVN0YXR1cyA9PSB0cnVlICYmIHRoaXMuY2hlY2tib3hlc0RhdGFMaXN0Lmxlbmd0aCA+IDApKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMucmV0dXJuQ2hlY2tlZFZhbHVlcygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoXCJDRUVfU2luZ2xlQ2hlY2tib3hPcHRpb25cIikpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TaW5nbGVDaGVja2JveE9wdGlvbiddID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hlY2tlZENvbmQgPSBldmVudFRhcmdldC5jaGVja2VkID8gJzEnIDogJyc7ICAvLyBJIGFncmVlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZXZlbnRUYXJnZXQuY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShjaGVja2VkQ29uZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vRm9yIFBvc3NpYmxlIFZhbHVlc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZ2V0Q2hlY2tlZFZhbHVlKGV2ZW50VGFyZ2V0LmNoZWNrZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjaGVja2VkQ29uZCA9IGV2ZW50VGFyZ2V0LmNoZWNrZWQgPyAnMScgOiAnJzsgLy8gSSBhZ3JlZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZXZlbnRUYXJnZXQuY2hlY2tlZDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKGNoZWNrZWRDb25kKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnRUYXJnZXQuY2hlY2tlZCkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2hlY2tlZCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoIWV2ZW50VGFyZ2V0LmNoZWNrZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblVuY2hlY2tlZCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBvbkNsaWNrIGV2ZW50IG9mIGNoZWNrYm94XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNsaWNrJyk7XHJcbiAgICAgICAgdGhpcy5vbkRpcnR5KCk7XHJcbiAgICAgICAgdGhpcy5tYXhWYWx1ZUNoZWNrKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgY2hlY2tlZCB2YWx1ZXNcclxuICAgICAqIG9ubHkgd29ya3Mgd2hlbiB0aGUgcG9zc2libGUgdmFsdWVzIGFyZSBtb3JlIHRoYW4gMVxyXG4gICAgICovXHJcbiAgICByZXR1cm5DaGVja2VkVmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrYm94ZXNEYXRhTGlzdC5maWx0ZXIoKHZhbHVlOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlLmlzQ2hlY2tlZDtcclxuICAgICAgICB9KS5tYXAoKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbS52YWx1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBjaGVja2VkIHZhbHVlc1xyXG4gICAgICogb25seSB3b3JrcyB3aGVuIHRoZSBwb3NzaWJsZSB2YWx1ZXMgaXMgMSBvciBub3QgcHJlc2VudFxyXG4gICAgICovXHJcbiAgICBnZXRDaGVja2VkVmFsdWUoaXNDaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KFwiQ0VFX1N0b3JlVmFsdWVBc0xpc3RcIikgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU3RvcmVWYWx1ZUFzTGlzdCddID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLm1hcCgoaXRlbTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbW9uVXRpbC5nZXRJRChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbW9uVXRpbC5nZXRJRCh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ10ubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJ3ZhbHVlcyddW2RhdGFbJ3VuaXF1ZUlkcyddLmluZGV4T2YodGhpcy5maWVsZERhdGEudW5pcXVlX2lkKV0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVswXSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5maWVsZFZhbHVlID09PSAnMScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldElucHV0VmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIC8vIG9mIHRyaWdnZXJVcGRhdGUgaXMgdHJ1ZSB0aGVuIHVwZGF0ZSB0aGUgZmllbGQgdmFsdWUgb3IgdXBkYXRlIHZhbHVlIGFuZCBlbWl0IGNvbmRpdGlvbnMgZXZlbnRcclxuICAgICAgICAgICAgICAgIHRoaXNbZGF0YVsndHJpZ2dlclVwZGF0ZSddID8gJ3VwZGF0ZUZpZWxkRW50aXR5JyA6ICd1cGRhdGVGaWVsZERhdGEnXSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZXModGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc3QgY2hhbmdlTWFwID0ge1xyXG4gICAgICAgIC8vICAgICBmaWVsZF9sYWJlbDogJ2ZpZWxkRGF0YS5maWVsZF9sYWJlbCcsXHJcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyX3RleHQ6ICdmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCcsXHJcbiAgICAgICAgLy8gICAgIHRvb2x0aXA6ICdmaWVsZERhdGEudG9vbHRpcCcsXHJcbiAgICAgICAgLy8gICAgICdhZGRpdGlvbmFsX3BhcmFtZXRlcnNbKl1BcmlhLUxhYmVsJzogJ2FkZGl0aW9uYWxQYXJhbWV0ZXJbXFwnQXJpYS1MYWJlbFxcJ10nLFxyXG4gICAgICAgIC8vICAgICAnZmllbGRfZGF0YS5wb3NzaWJsZV92YWx1ZXNbKl0nOiAnbXVsdGlwbGVDaGVja2JveFJlbmRlcigpJ1xyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCB2YWx1ZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VNYXApKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGxhbmdWYWwgPSB0aGlzLnN3aXRjaExhbmcodmFsdWUsIGRhdGEsIGNoYW5nZU1hcCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChsYW5nVmFsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAoY2hhbmdlTWFwW3ZhbHVlXS5pbmNsdWRlcygnKCknKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNoYW5nZU1hcFt2YWx1ZS5zcGxpdCgnKCknKVswXV0oKTtcclxuICAgICAgICAvLyAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpc1tsYW5nVmFsLmtleV0gPSBsYW5nVmFsLnZhbDtcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhICYmIGNoYW5nZXMucm9vdERhdGEuY3VycmVudFZhbHVlLmxhbmdDaGFuZ2VkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlTGFuZ3VhZ2UoY2hhbmdlcy5maWVsZERhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlQ29udGFpbnQoY29udGVudCkge1xyXG4gICAgICAgIHRoaXMuaXNIVE1MQ29udGVudCA9IGZhbHNlO1xyXG4gICAgICAgIHZhciBlbGVtZW50QXJyID0gW1wiPGI+XCIsIFwiPGgxPlwiLCBcIjxoMj5cIiwgXCI8aDM+XCIsIFwiPGg0PlwiLCBcIjxoNT5cIiwgXCI8aDY+XCIsIFwiPGRpdj5cIiwgXCI8c3Bhbj5cIiwgXCI8aW1nPlwiXTtcclxuICAgICAgICBlbGVtZW50QXJyLmV2ZXJ5KChlbGVtZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjb250ZW50LmluY2x1ZGVzKGVsZW1lbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzSFRNTENvbnRlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICByZXR1cm4gdGhpcy5pc0hUTUxDb250ZW50O1xyXG4gICAgfVxyXG5cclxuICAgIGlzQ2hlY2tib3hDaGVja2VkKGZpZWxkVmFsdWU6IGFueSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoXCJDRUVfU2luZ2xlQ2hlY2tib3hPcHRpb25cIikpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1NpbmdsZUNoZWNrYm94T3B0aW9uJ10gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoZmllbGRWYWx1ZSkgPT0gJzEnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhmaWVsZFZhbHVlLCB0aGlzLmZpZWxkVmFsdWUsIHRoaXMuaW5wdXRWYWx1ZSlcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoZmllbGRWYWx1ZSkgPT0gZmllbGRWYWx1ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoZmllbGRWYWx1ZSkgPT0gJzEnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnB1dFZhbHVlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoXCJDRUVfU2luZ2xlQ2hlY2tib3hPcHRpb25cIikpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1NpbmdsZUNoZWNrYm94T3B0aW9uJ10gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZSA9PT0gJzEnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAoKHRoaXMuZmllbGRWYWx1ZSA9PSB0aGlzLmdldENoZWNrZWRWYWx1ZSh0cnVlKSkgPyB0cnVlIDogZmFsc2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5maWVsZFZhbHVlID09PSAnMScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiIGlkPVwie3todG1sX2lkfX1cIiAqbmdJZj1cImlzVmlzaWJsZVwiXHJcbiAgICBjbGFzcz1cInt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10b29sdGlwXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+aTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCJcclxuICAgICAgICAgICAgKm5nSWY9XCIoY2hlY2tib3hlc0RhdGFMaXN0Lmxlbmd0aD4xIHx8IChleHRyYVBvc3NpYmxlVmFsdWVTdGF0dXMgPT0gdHJ1ZSAmJiBjaGVja2JveGVzRGF0YUxpc3QubGVuZ3RoPjApKTsgdGhlbiB0aGVuQmxvY2sgZWxzZSBlbHNlQmxvY2tcIj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI3RoZW5CbG9jaz5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBjaGVja2JveGVzRGF0YUxpc3Q7IGluZGV4IGFzIGk7IGxhc3QgYXMgaXNMYXN0XCI+ICBcclxuICAgICAgICAgICAgICAgIDwhLS0gTWF0ZXJpYWwgY2hlY2tib3ggLS0+XHJcbiAgICAgICAgICAgICAgICA8IS0tICckZXZlbnQnIG9mIG1hdC1jaGVja2JveCA9ICckZXZlbnQudGFyZ2V0JyBvZiBub3JtYWwgaW5wdXQgY2hlY2tib3ggLS0+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNfbWF0ZXJpYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwie3sgIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKHNob3dFcnJvck9uTmV4dCkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggI2NoZWNrRmllbGQgW3RhYkluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uRW50ZXIoJGV2ZW50LCBpdGVtKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2h0bWxfaWR9fXt7aX19XCIgWyhuZ01vZGVsKV09XCJpdGVtLmlzQ2hlY2tlZFwiIChjaGFuZ2UpPVwiY2hlY2tlZFZhbCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZSB8fCBpdGVtLm1heFZhbHVlRGlzYWJsZWRcIiBuYW1lPVwie3todG1sX2lkfX17e2l9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cInZhbGlkYXRlQ29udGFpbnQoaXRlbS5sYWJlbClcIiBbaW5uZXJIVE1MXT1cIml0ZW0ubGFiZWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhdmFsaWRhdGVDb250YWludChpdGVtLmxhYmVsKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+PHNwYW4gKm5nSWY9XCJpdGVtPy50aXRsZVwiIFtuZ2JUb29sdGlwXT1cImN1c3RvbU1hdFRvb2x0aXBDaGVja0xpc3RcIiBwbGFjZW1lbnQ9XCJ0b3BcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPjxzcGFuICpuZ0lmPVwiIWl0ZW0/LnRpdGxlXCI+e3tpdGVtLmxhYmVsfX08L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gTm9ybWFsIElucHV0IENoZWNrYm94IC0tPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc19tYXRlcmlhbFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCAge3sgIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKHNob3dFcnJvck9uTmV4dCkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCI+ICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJjaGVja2JveFwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbC1pbnB1dFwiIGlkPVwie3todG1sX2lkfX17e2l9fVwiIFsobmdNb2RlbCldPVwiaXRlbS5pc0NoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJjaGVja2VkVmFsKCRldmVudC50YXJnZXQpXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlIHx8IGl0ZW0ubWF4VmFsdWVEaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3todG1sX2lkfX17e2l9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgW25nU3R5bGVdPVwie1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZvbnQtc3R5bGUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zdHlsZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2NvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XCIgKGNsaWNrKT1cInN0b3JlTGFzdENsaWNrZWRWYWx1ZShjb21tb25VdGlsLmdldElEKGl0ZW0pLnZhbHVlLCAkZXZlbnQudGFyZ2V0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFpc0hUTUwoaXRlbS5sYWJlbCkgJiYgYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX2xhc3RfY2hlY2tlZF92YWx1ZV9hcGlfa2V5J11cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+PHNwYW4gKm5nSWY9XCJpdGVtPy50aXRsZVwiIFtuZ2JUb29sdGlwXT1cImN1c3RvbU1hdFRvb2x0aXBDaGVja0xpc3RcIiBwbGFjZW1lbnQ9XCJ0b3BcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+PHNwYW4gKm5nSWY9XCIhaXRlbT8udGl0bGVcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwie3todG1sX2lkfX17e2l9fVwiIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiAqbmdJZj1cIiFpc0hUTUwoaXRlbS5sYWJlbCkgJiYgIWFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9sYXN0X2NoZWNrZWRfdmFsdWVfYXBpX2tleSddXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj48c3BhbiAqbmdJZj1cIml0ZW0/LnRpdGxlXCIgW25nYlRvb2x0aXBdPVwiY3VzdG9tTWF0VG9vbHRpcENoZWNrTGlzdFwiIHBsYWNlbWVudD1cInRvcFwiPnt7aXRlbS5sYWJlbH19PC9zcGFuPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+PHNwYW4gKm5nSWY9XCIhaXRlbT8udGl0bGVcIj57e2l0ZW0ubGFiZWx9fTwvc3Bhbj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cInt7aHRtbF9pZH19e3tpfX1cIiBbbmdTdHlsZV09XCJ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3NpemUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZm9udC1zdHlsZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2NvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVwiICpuZ0lmPVwiaXNIVE1MKGl0ZW0ubGFiZWwpXCIgW2lubmVySFRNTF09XCJpdGVtLmxhYmVsXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjdXN0b21NYXRUb29sdGlwQ2hlY2tMaXN0ID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGl0ZW0udGl0bGUgfX08L3N0cm9uZz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcF90ZXh0XCI+e3sgaXRlbS5kZXNjcmlwdGlvbiB9fTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0xhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKHNob3dFcnJvck9uTmV4dCkgJiYgbWVzc2FnZS50eXBlID09ICdNYW5kYXRvcnknXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwiIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKHNob3dFcnJvck9uTmV4dClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIFtuZ1N0eWxlXT1cInsnY29sb3InOiBlcnJvck1lc3NhZ2VEYXRhLmNvbG9yfVwiPnt7ZXJyb3JNZXNzYWdlRGF0YS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnZhbHVlLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNlbHNlQmxvY2s+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG9wdCBvZiBmaWVsZERhdGEucG9zc2libGVfdmFsdWVzOyBpbmRleCBhcyBpOyBsYXN0IGFzIGlzTGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgPCEtLSBNYXRlcmlhbCBjaGVja2JveCAtLT5cclxuICAgICAgICAgICAgICAgIDwhLS0gJyRldmVudCBvZiBtYXQtY2hlY2tib3ggPSAnJGV2ZW50LnRhcmdldCcgb2Ygbm9ybWFsIGlucHV0IGNoZWNrYm94IC0tPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzX21hdGVyaWFsXCI+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3sgIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgY2hlY2tCb3hDb250cm9sICYmIChjaGVja0JveENvbnRyb2wuZGlydHkgfHwgY2hlY2tCb3hDb250cm9sLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCAjY2hlY2tGaWVsZCBbdGFiSW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6IGZpZWxkRGF0YS5maWVsZF9sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7aHRtbF9pZH19e3tpfX1cIiB2YWx1ZT1cInt7Y29tbW9uVXRpbC5nZXRJRChmaWVsZFZhbHVlKX19XCIgKGNoYW5nZSk9XCJjaGVja2VkVmFsKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCIgW2NoZWNrZWRdPVwiaXNTaW5nbGVDaGVja2JveENoZWNrZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgbmFtZT1cInt7aHRtbF9pZH19e3tpfX1cIiAjY2hlY2tCb3hDb250cm9sPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiF2YWxpZGF0ZUNvbnRhaW50KGNvbW1vblV0aWwuZ2V0VmFsdWUoZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlc1tpXSkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImNvbW1vblV0aWwuZ2V0VmFsdWUoZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlc1tpXSlcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCIhdmFsaWRhdGVDb250YWludChjb21tb25VdGlsLmdldFZhbHVlKGZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNbaV0pKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+PHNwYW4gKm5nSWY9XCJvcHQuc3BsaXQoJ3x8JykubGVuZ3RoID4gMlwiIFtuZ2JUb29sdGlwXT1cImN1c3RvbU1hdFRvb2x0aXBDaGVja2JveFwiIHBsYWNlbWVudD1cInRvcFwiPnt7Y29tbW9uVXRpbC5nZXRWYWx1ZShmaWVsZERhdGEucG9zc2libGVfdmFsdWVzW2ldKX19PC9zcGFuPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+PHNwYW4gKm5nSWY9XCJvcHQuc3BsaXQoJ3x8JykubGVuZ3RoIDw9IDJcIj57e2NvbW1vblV0aWwuZ2V0VmFsdWUoZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlc1tpXSl9fT48L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDwhLS0gTm9ybWFsIElucHV0IGNoZWNrYm94IC0tPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc19tYXRlcmlhbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImN1c3RvbS1jb250cm9sIGN1c3RvbS1jaGVja2JveCAge3sgIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKHNob3dFcnJvck9uTmV4dCkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cInt7aHRtbF9pZH19e3tpfX1cIiB2YWx1ZT1cInt7Y29tbW9uVXRpbC5nZXRJRChmaWVsZFZhbHVlKX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiY2hlY2tlZFZhbCgkZXZlbnQudGFyZ2V0KVwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJpc1NpbmdsZUNoZWNrYm94Q2hlY2tlZFwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwie3todG1sX2lkfX17e2l9fVwiICNjaGVja0JveENvbnRyb2w9XCJuZ01vZGVsXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIiAgKGNsaWNrKT1cInN0b3JlTGFzdENsaWNrZWRWYWx1ZShjb21tb25VdGlsLmdldElEKGZpZWxkVmFsdWUpLCAkZXZlbnQudGFyZ2V0KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhaXNIVE1MKGNvbW1vblV0aWwuZ2V0VmFsdWUoZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlc1tpXSkpICYmIGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9sYXN0X2NoZWNrZWRfdmFsdWVfYXBpX2tleSddXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj48c3BhbiAqbmdJZj1cIm9wdC5zcGxpdCgnfHwnKS5sZW5ndGggPiAyXCIgW25nYlRvb2x0aXBdPVwiY3VzdG9tTWF0VG9vbHRpcENoZWNrYm94XCIgcGxhY2VtZW50PVwidG9wXCI+e3tjb21tb25VdGlsLmdldFZhbHVlKGZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNbaV0pfX08L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj48c3BhbiAqbmdJZj1cIm9wdC5zcGxpdCgnfHwnKS5sZW5ndGggPD0gMlwiPnt7Y29tbW9uVXRpbC5nZXRWYWx1ZShmaWVsZERhdGEucG9zc2libGVfdmFsdWVzW2ldKX19PC9zcGFuPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwie3todG1sX2lkfX17e2l9fVwiIFtuZ1N0eWxlXT1cIntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zaXplLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2NvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cIiAqbmdJZj1cIiFpc0hUTUwoY29tbW9uVXRpbC5nZXRWYWx1ZShmaWVsZERhdGEucG9zc2libGVfdmFsdWVzW2ldKSkgJiYgIWFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9sYXN0X2NoZWNrZWRfdmFsdWVfYXBpX2tleSddXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj48c3BhbiAqbmdJZj1cIm9wdC5zcGxpdCgnfHwnKS5sZW5ndGggPiAyXCIgW25nYlRvb2x0aXBdPVwiY3VzdG9tTWF0VG9vbHRpcENoZWNrYm94XCIgcGxhY2VtZW50PVwidG9wXCI+e3tjb21tb25VdGlsLmdldFZhbHVlKGZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXNbaV0pfX08L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj48c3BhbiAqbmdJZj1cIm9wdC5zcGxpdCgnfHwnKS5sZW5ndGggPD0gMlwiPnt7Y29tbW9uVXRpbC5nZXRWYWx1ZShmaWVsZERhdGEucG9zc2libGVfdmFsdWVzW2ldKX19PC9zcGFuPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1jb250cm9sLWxhYmVsXCIgZm9yPVwie3todG1sX2lkfX17e2l9fVwiIFtuZ1N0eWxlXT1cIntcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZvbnQtZmFtaWx5JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfbmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3NpemUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCdjb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X2NvbG9yXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVwiICpuZ0lmPVwiaXNIVE1MKGNvbW1vblV0aWwuZ2V0VmFsdWUoZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlc1tpXSkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiY29tbW9uVXRpbC5nZXRWYWx1ZShmaWVsZERhdGEucG9zc2libGVfdmFsdWVzW2ldKVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjdXN0b21NYXRUb29sdGlwQ2hlY2tib3ggPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0b29sdGlwX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgY29tbW9uVXRpbC5nZXRUaXRsZXNPcHRpb25zKG9wdCkgfX08L3N0cm9uZz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcF90ZXh0XCI+e3sgY29tbW9uVXRpbC5nZXREZXNjcmlwdGlvbk9wdGlvbnMob3B0KSB9fTwvc3Bhbj48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0xhc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgY2hlY2tCb3hDb250cm9sICYmIChjaGVja0JveENvbnRyb2wuZGlydHkgfHwgY2hlY2tCb3hDb250cm9sLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSAmJiBtZXNzYWdlLnR5cGUgPT0gJ01hbmRhdG9yeSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc2luZ2xlRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgY2hlY2tCb3hDb250cm9sICYmIChjaGVja0JveENvbnRyb2wuZGlydHkgfHwgY2hlY2tCb3hDb250cm9sLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgW25nU3R5bGVdPVwieydjb2xvcic6IGVycm9yTWVzc2FnZURhdGEuY29sb3J9XCI+e3tlcnJvck1lc3NhZ2VEYXRhLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNob3dDb21wYXJpc29uRXJyb3IgfCBrZXl2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIFtuZ1N0eWxlXT1cInsnY29sb3InOiBpdGVtLnZhbHVlLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0udmFsdWUubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19