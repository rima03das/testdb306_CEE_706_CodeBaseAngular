import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { UndoRedo } from '../../utils/undo-redo.util';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomTooltipDirective } from '../../directives/app.directive';
import { MatRadioModule } from '@angular/material/radio';
import { NgbModule, NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
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
import * as i10 from "@angular/router";
import * as i11 from "../../services/cee-api-service.service";
import * as i12 from "@angular/material/radio";
import * as i13 from "@ng-bootstrap/ng-bootstrap";
import * as i14 from "@angular/forms";
import * as i15 from "@angular/common";
import * as i16 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["radioField"];
const _c1 = (a0, a1, a2, a3) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "color": a3 });
const _c2 = a0 => ({ "color": a0 });
function CeeRadioComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeRadioComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeRadioComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 15)(2, CeeRadioComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeRadioComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeRadioComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_span_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext(2).$implicit;
    const customMatTooltipRadio_r6 = i0.ɵɵreference(6);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customMatTooltipRadio_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(opt_r4));
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_span_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(opt_r4));
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeRadioComponent_div_0_ng_container_7_div_3_span_3_span_2_Template, 2, 2, "span", 26);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeRadioComponent_div_0_ng_container_7_div_3_span_3_span_4_Template, 2, 1, "span", 9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r4.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r4.split("||").length <= 2);
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 28);
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.commonUtil.getValue(opt_r4), i0.ɵɵsanitizeHtml);
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getTitlesOptions(opt_r4));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getDescriptionOptions(opt_r4));
} }
function CeeRadioComponent_div_0_ng_container_7_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "mat-radio-button", 24, 2);
    i0.ɵɵlistener("change", function CeeRadioComponent_div_0_ng_container_7_div_3_Template_mat_radio_button_change_1_listener() { const opt_r4 = i0.ɵɵrestoreView(_r3).$implicit; i0.ɵɵnextContext(); const radioControl_r5 = i0.ɵɵreference(2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.checkedVal(ctx_r0.commonUtil.getID(opt_r4), radioControl_r5)); })("focus", function CeeRadioComponent_div_0_ng_container_7_div_3_Template_mat_radio_button_focus_1_listener() { i0.ɵɵrestoreView(_r3); i0.ɵɵnextContext(); const radioControl_r5 = i0.ɵɵreference(2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r5)); })("blur", function CeeRadioComponent_div_0_ng_container_7_div_3_Template_mat_radio_button_blur_1_listener() { i0.ɵɵrestoreView(_r3); i0.ɵɵnextContext(); const radioControl_r5 = i0.ɵɵreference(2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r5)); });
    i0.ɵɵtemplate(3, CeeRadioComponent_div_0_ng_container_7_div_3_span_3_Template, 5, 2, "span", 9)(4, CeeRadioComponent_div_0_ng_container_7_div_3_span_4_Template, 1, 1, "span", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeRadioComponent_div_0_ng_container_7_div_3_ng_template_5_Template, 7, 2, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r4 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("value", ctx_r0.commonUtil.getID(opt_r4))("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.commonUtil.getValue(opt_r4));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.commonUtil.getValue(opt_r4)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.commonUtil.getValue(opt_r4)));
} }
function CeeRadioComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-group", 21, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeRadioComponent_div_0_ng_container_7_Template_mat_radio_group_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.fieldValue, $event) || (ctx_r0.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(3, CeeRadioComponent_div_0_ng_container_7_div_3_Template, 7, 5, "div", 22);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.fieldValue);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.radioValues);
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r8 = i0.ɵɵnextContext(2).$implicit;
    const customTooltipRadio_r10 = i0.ɵɵreference(7);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngbTooltip", customTooltipRadio_r10);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.commonUtil.getValue(opt_r8), ">");
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getValue(opt_r8));
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 34);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵtemplate(2, CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_span_2_Template, 2, 2, "span", 26);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(3);
    i0.ɵɵtemplate(4, CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_span_4_Template, 2, 1, "span", 9);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const opt_r8 = ctx_r10.$implicit;
    const i_r12 = ctx_r10.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r12, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(6, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r8.split("||").length > 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", opt_r8.split("||").length <= 2);
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 35);
} if (rf & 2) {
    const ctx_r10 = i0.ɵɵnextContext();
    const opt_r8 = ctx_r10.$implicit;
    const i_r12 = ctx_r10.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.html_id, "", i_r12, "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction4(5, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color))("innerHTML", ctx_r0.commonUtil.getValue(opt_r8), i0.ɵɵsanitizeHtml);
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29)(1, "strong");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "br");
    i0.ɵɵelementStart(4, "span", 30);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "br");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getTitlesOptions(opt_r8));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r0.commonUtil.getDescriptionOptions(opt_r8));
} }
function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "input", 31, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.fieldValue, $event) || (ctx_r0.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template_input_change_2_listener() { const opt_r8 = i0.ɵɵrestoreView(_r7).$implicit; const radioControl_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.checkedVal(ctx_r0.commonUtil.getID(opt_r8), radioControl_r9)); })("focus", function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template_input_focus_2_listener() { i0.ɵɵrestoreView(_r7); const radioControl_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r9)); })("blur", function CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template_input_blur_2_listener() { i0.ɵɵrestoreView(_r7); const radioControl_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r9)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_4_Template, 5, 11, "label", 32)(5, CeeRadioComponent_div_0_ng_container_8_ng_container_1_label_5_Template, 1, 10, "label", 33);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeeRadioComponent_div_0_ng_container_8_ng_container_1_ng_template_6_Template, 7, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const opt_r8 = ctx.$implicit;
    const i_r12 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("custom-control custom-radio ", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("name", ctx_r0.html_id);
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.html_id, "", i_r12, "");
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(opt_r8));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.fieldValue);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue)("name", ctx_r0.html_id)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.commonUtil.getValue(opt_r8));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.commonUtil.getValue(opt_r8)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.commonUtil.getValue(opt_r8)));
} }
function CeeRadioComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_8_ng_container_1_Template, 8, 15, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.radioValues);
} }
function CeeRadioComponent_div_0_ng_container_9_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r13.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r13.code).message_text, " ");
} }
function CeeRadioComponent_div_0_ng_container_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_9_ng_container_1_div_1_p_1_Template, 2, 4, "p", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeRadioComponent_div_0_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_9_ng_container_1_div_1_Template, 2, 1, "div", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r13 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext) && message_r13.type == "Mandatory");
} }
function CeeRadioComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeRadioComponent_div_0_ng_template_10_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, " ");
} }
function CeeRadioComponent_div_0_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37);
    i0.ɵɵtemplate(1, CeeRadioComponent_div_0_ng_template_10_div_0_p_1_Template, 2, 4, "p", 38);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeRadioComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeRadioComponent_div_0_ng_template_10_div_0_Template, 2, 1, "div", 36);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext));
} }
function CeeRadioComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37)(2, "div")(3, "p", 39);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r14 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, item_r14.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r14.value.message_text, "");
} }
function CeeRadioComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵtemplate(3, CeeRadioComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 9)(4, CeeRadioComponent_div_0_span_4_Template, 2, 0, "span", 10)(5, CeeRadioComponent_div_0_button_5_Template, 2, 2, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 12);
    i0.ɵɵtemplate(7, CeeRadioComponent_div_0_ng_container_7_Template, 4, 3, "ng-container", 9)(8, CeeRadioComponent_div_0_ng_container_8_Template, 2, 1, "ng-container", 9)(9, CeeRadioComponent_div_0_ng_container_9_Template, 2, 1, "ng-container", 13)(10, CeeRadioComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(12, CeeRadioComponent_div_0_ng_container_12_Template, 5, 4, "ng-container", 14);
    i0.ɵɵpipe(13, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const singleErrorMessage_r15 = i0.ɵɵreference(11);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r15);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 12, ctx_r0.showComparisonError));
} }
export class CeeRadioComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    router;
    ceeApiService;
    radioField;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    columns = 3;
    undoRedoUtil;
    inputValue = false;
    radioState = {
        touched: false,
        dirty: false
    };
    html_id = '';
    radioValues = [];
    checkValueTimeout = null;
    dynamicStyleElement;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, router, ceeApiService) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.router = router;
        this.ceeApiService = ceeApiService;
        this.undoRedoUtil = new UndoRedo();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
        /*----------  Dynamic style for custom radio START ----------*/
        this.dynamicStyleElement = document.createElement('style');
        this.dynamicStyleElement.innerHTML = `.custom-radio .custom-control-label::before {
        width: ${this.fieldData.field_style.field_width} !important;
        height: ${this.fieldData.field_style.field_height} !important;
     }
     .custom-radio .custom-control-input:checked ~ .custom-control-label::before{
        border-color: ${this.fieldData.field_style.border_color} !important;
        background-color: ${this.fieldData.field_style.background_color} !important;
     }
     `;
        document.body.appendChild(this.dynamicStyleElement);
        /*----------  Dynamic style for custom radio END ----------*/
        const parameters = this.fieldData.additional_parameters;
        const validParameter = parameters?.find((p) => p.parameter_type === 'externalApiOptionValue');
        const columnParam = parameters?.find(p => p.parameter_type?.trim() === 'ShowinColumn_no');
        this.columns = columnParam?.value ?? '1';
        if (validParameter) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(validParameter.value));
            const externalApiOptionValue = data ? this.getExternalApiOptionValue(validParameter.value, data['value']) : null;
            if (externalApiOptionValue !== null) {
                if (Array.isArray(externalApiOptionValue)) {
                    this.fieldData.possible_values = externalApiOptionValue;
                    this.radioValues = this.fieldData.possible_values;
                }
                else {
                    console.error('Something Went Wrong in Radio !!!');
                }
            }
        }
    }
    ngOnDestroy() {
        if (this.checkValueTimeout) {
            clearTimeout(this.checkValueTimeout);
            this.checkValueTimeout = null;
        }
        // Clear rootData reference to avoid circular references
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Remove dynamic style element
        if (this.dynamicStyleElement && this.dynamicStyleElement.parentNode) {
            this.dynamicStyleElement.parentNode.removeChild(this.dynamicStyleElement);
        }
        this.radioField = null;
        this.radioValues = null;
        this.radioState = null;
        this.undoRedoUtil = null;
        // Clear other object references
        this.rootData = null;
        this.onViewUnload();
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        // END
        // if (this.userDataHandlerService.getFieldData(this.sessionKeyUtil.generateSessionKey(this.fieldData)).trim().length === 0) {
        //   this.setSessionData('');
        // }
        // this.getSessionData();
        this.radioValues = this.fieldData.possible_values;
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.fieldData.possible_values = this.rowData.value;
                    this.radioValues = this.fieldData.possible_values;
                }
                else {
                    this.fieldValue = this.commonUtil.getID(this.rowData.value);
                    this.updateFieldData(this.fieldValue);
                    this.undoRedoUtil.push(this.appData.id, this.fieldValue);
                }
            }
        }
        this.inputValue = this.fieldValue ? true : false;
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                if (this.is_material) {
                    if (this.radioField)
                        this.radioField.focus();
                }
                else {
                    if (document.getElementById(this.fieldData.html_id + '0'))
                        document.getElementById(this.fieldData.html_id + '0').focus();
                }
            };
        }
        this.getMaskDataOnRadio();
    }
    getMaskDataOnRadio() {
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            let radioLabelData = [];
            this.radioValues.forEach(x => {
                let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
                let formatStr = x.split('||');
                ;
                let field_box = this.commonUtil.getMaskedData(formatStr[1], formats[0], formats[1], formats[2]);
                radioLabelData.push(field_box);
            });
            this.radioValues = radioLabelData;
        }
    }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
        let apiData = null;
        if (!this.rowData) {
            apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        }
        else if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            apiData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
        }
        // if (!this.rowData) {
        // const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiData !== null) {
            if (Array.isArray(apiData) && this.isSingleApiKey) {
                this.fieldData.possible_values = apiData;
                this.radioValues = this.fieldData.possible_values;
            }
            else {
                this.fieldValue = apiData;
                this.inputValue = this.fieldValue ? true : false;
                this.updateFieldData(this.fieldValue);
                this.undoRedoUtil.push(this.appData.id, this.fieldValue);
            }
        }
        // }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        if (Array.isArray(externalApiOptionValue)) {
                            this.fieldData.possible_values = externalApiOptionValue;
                            this.radioValues = this.fieldData.possible_values;
                        }
                        else {
                            console.error('Something Went Wrong in Radio !!!');
                        }
                    }
                }
            }
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    concatData() { }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    setState(value) {
        this.radioState.touched !== value.touched && (this.radioState.touched = value.touched);
        this.radioState.dirty !== value.dirty && (this.radioState.dirty = value.dirty);
    }
    checkedVal(value, state) {
        if (this.checkValueTimeout) {
            clearTimeout(this.checkValueTimeout);
            this.checkValueTimeout = null;
        }
        this.checkValueTimeout = setTimeout(() => {
            this.setState(state);
            this.inputValue = value ? true : false;
            this.updateFieldData(value); // set the session value on checked
            this.undoRedoUtil.push(this.appData.id, value);
            this.undoRedoUtil.setCurrentId(this.appData.id);
            // on click event on radio
            this.onComponentEvent('OnClick', {}, true, {
                uniqueId: this.html_id,
                value
            });
            this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
            this.onDirty();
        }, 0);
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
                this.fieldValue = '';
                // default value
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = this.commonUtil.getID(paramter.value);
                        }
                    }
                }
                this.inputValue = this.fieldValue ? true : false;
                this.updateFieldData(this.fieldValue);
                this.setState(false);
                this.showErrorOnNext = false;
                return;
            }
        });
    }
    handleCustomFunction(get_data) {
        // console.log('get_data', typeof get_data === 'object');
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
            this.inputValue = this.fieldValue ? true : false;
            this.updateFieldData(this.fieldValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = this.commonUtil.getID(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]);
                this.inputValue = this.fieldValue ? true : false;
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
        if (data.includes(this.fieldData.unique_id)) {
            const stateValue = this.undoRedoUtil.getPresentValue(this.fieldData.unique_id);
            const fieldValue = this.commonUtil.getID(this.fieldValue);
            if (stateValue !== null || stateValue !== undefined) {
                if (stateValue !== fieldValue) {
                    this.fieldValue = stateValue;
                    this.inputValue = this.fieldValue ? true : false;
                    this.updateFieldData(this.fieldValue);
                }
            }
        }
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'radioValues'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
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
    static ɵfac = function CeeRadioComponent_Factory(t) { return new (t || CeeRadioComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.Router), i0.ɵɵdirectiveInject(i11.CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeRadioComponent, selectors: [["app-cee-radio"]], viewQuery: function CeeRadioComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.radioField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["singleErrorMessage", ""], ["radioControl", "ngModel"], ["radioField", ""], ["customMatTooltipRadio", ""], ["customTooltipRadio", ""], ["class", "field-wrapper", 3, "id", "class", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], ["aria-labelledby", "example-radio-group-label", 1, "example-radio-group", 3, "ngModelChange", "ngModel"], ["class", "mat-radio-content", 4, "ngFor", "ngForOf"], [1, "mat-radio-content"], [1, "example-radio-button", 3, "change", "focus", "blur", "value", "disabled"], [3, "innerHTML", 4, "ngIf"], ["placement", "top", 3, "ngbTooltip", 4, "ngIf"], ["placement", "top", 3, "ngbTooltip"], [3, "innerHTML"], [1, "tooltip_container"], [1, "tooltip_text"], ["type", "radio", 1, "custom-control-input", 3, "ngModelChange", "change", "focus", "blur", "name", "id", "ngModel", "value", "disabled"], ["class", "custom-control-label", 3, "for", "ngStyle", 4, "ngIf"], ["class", "custom-control-label", 3, "for", "ngStyle", "innerHTML", 4, "ngIf"], [1, "custom-control-label", 3, "for", "ngStyle"], [1, "custom-control-label", 3, "for", "ngStyle", "innerHTML"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeRadioComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeRadioComponent_div_0_Template, 14, 14, "div", 5);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, MatRadioModule, i12.MatRadioGroup, i12.MatRadioButton, NgbTooltipModule, i13.NgbTooltip, FormsModule, i14.DefaultValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgModel, NgStyle, NgbModule, CommonModule, i15.NgForOf, i15.NgIf, i15.KeyValuePipe, TooltipModule, i16.TooltipDirective], styles: ["input[type=radio][_ngcontent-%COMP%]:focus-visible + label[_ngcontent-%COMP%]{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeRadioComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-radio', standalone: true, imports: [MatTooltipModule, CustomTooltipDirective, MatRadioModule, NgbTooltipModule, FormsModule, NgStyle, NgbModule, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{html_id}}\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\"\r\n            [tooltip]=\"fieldData.tooltip\"\r\n                [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\r\n            <!-- Tooltip with informaion icon -->\r\n            <!-- <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n                class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n                [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [customTooltip]=\"tooltipTemplate\"\r\n                [tooltipId]=\"fieldData.unique_id\" [tooltipAdditionalparameter]=\"additionalParameter\">\r\n                i\r\n            </button> -->\r\n\r\n            <!-- Tooltip Template -->\r\n            <!-- <ng-template #tooltipTemplate>\r\n                <div class=\"tooltip_container\">\r\n                    <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n                </div>\r\n            </ng-template> -->\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <ng-container *ngIf=\"is_material\">\r\n                <mat-radio-group [attr.tabindex]=\"tabIndexValue\" aria-labelledby=\"example-radio-group-label\"\r\n                    class=\"example-radio-group\" [(ngModel)]=\"fieldValue\" #radioControl=\"ngModel\">\r\n                    <div class=\"mat-radio-content\" *ngFor=\"let opt of radioValues; index as i; last as isLast\">\r\n                        <mat-radio-button #radioField class=\"example-radio-button\" [value]=\"commonUtil.getID(opt)\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : commonUtil.getValue(opt)\"\r\n                            (change)=\"checkedVal(commonUtil.getID(opt), radioControl)\" [disabled]=\"!isEditable\"\r\n                            (focus)=\"setState(radioControl)\" (blur)=\"setState(radioControl)\">\r\n                            <span *ngIf=\"!isHTML(commonUtil.getValue(opt))\">\r\n                                <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customMatTooltipRadio\" placement=\"top\">{{commonUtil.getValue(opt)}}</span></ng-container>\r\n                                <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(opt)}}</span></ng-container>\r\n                            </span>\r\n                            <span *ngIf=\"isHTML(commonUtil.getValue(opt))\"\r\n                                [innerHTML]=\"commonUtil.getValue(opt)\"></span>\r\n                        </mat-radio-button>\r\n                        <ng-template #customMatTooltipRadio >\r\n                            <div class=\"tooltip_container\">\r\n                            <strong>{{ commonUtil.getTitlesOptions(opt) }}</strong><br/>\r\n                            <span class=\"tooltip_text\">{{ commonUtil.getDescriptionOptions(opt) }}</span><br/>\r\n                            </div>\r\n                        </ng-template>\r\n                    </div>\r\n                </mat-radio-group>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!is_material\">\r\n                <ng-container *ngFor=\"let opt of radioValues; index as i; last as isLast\">\r\n                    <div\r\n                        class=\"custom-control custom-radio {{ !inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                        <input type=\"radio\" [attr.tabindex]=\"tabIndexValue\" name=\"{{html_id}}\" [attr.name]=\"html_id\"\r\n                            class=\"custom-control-input\" id=\"{{html_id}}{{i}}\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : commonUtil.getValue(opt)\"\r\n                            [(ngModel)]=\"fieldValue\" value=\"{{commonUtil.getID(opt)}}\"\r\n                            (change)=\"checkedVal(commonUtil.getID(opt), radioControl)\" [disabled]=\"!isEditable\" #radioControl=\"ngModel\"\r\n                            (focus)=\"setState(radioControl)\" (blur)=\"setState(radioControl)\">\r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n                            'font-family': fieldData.field_style.font_name,\r\n                            'font-size': fieldData.field_style.font_size,\r\n                            'font-style': fieldData.field_style.font_style,\r\n                            'color': fieldData.field_style.font_color\r\n                        }\" *ngIf=\"!isHTML(commonUtil.getValue(opt))\">\r\n                            <ng-container><span *ngIf=\"opt.split('||').length > 2\" [ngbTooltip]=\"customTooltipRadio\"\r\n                                    placement=\"top\">{{commonUtil.getValue(opt)}}></span></ng-container>\r\n                            <ng-container><span *ngIf=\"opt.split('||').length <= 2\">{{commonUtil.getValue(opt)}}</span></ng-container>\r\n                        </label>\r\n                \r\n                        <label class=\"custom-control-label\" for=\"{{html_id}}{{i}}\" [ngStyle]=\"{\r\n                            'font-family': fieldData.field_style.font_name,\r\n                            'font-size': fieldData.field_style.font_size,\r\n                            'font-style': fieldData.field_style.font_style,\r\n                            'color': fieldData.field_style.font_color\r\n                        }\" *ngIf=\"isHTML(commonUtil.getValue(opt))\" [innerHTML]=\"commonUtil.getValue(opt)\"></label>\r\n                    </div>\r\n                    <!-- Tooltip for Radio -->\r\n                    <ng-template #customTooltipRadio>\r\n                        <div class=\"tooltip_container\">\r\n                            <strong>{{ commonUtil.getTitlesOptions(opt) }}</strong><br />\r\n                            <span class=\"tooltip_text\">{{ commonUtil.getDescriptionOptions(opt) }}</span><br />\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                <ng-container *ngFor=\"let message of messages\">\r\n                    <div class=\"error-message-wrapper\"\r\n                        *ngIf=\"!inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext) && message.type == 'Mandatory'\">\r\n                        <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                            {{returnMessageData(message.code).message_text}}\r\n                        </p>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-template #singleErrorMessage>\r\n                <div class=\"error-message-wrapper\"\r\n                    *ngIf=\"!inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext)\">\r\n                    <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n                        {{errorMessageData.message_text}}\r\n                    </p>\r\n                </div>\r\n            </ng-template>\r\n            <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                <div class=\"error-message-wrapper\">\r\n                    <div>\r\n                        <p [ngStyle]=\"{'color': item.value.color}\">\r\n                            {{item.value.message_text}}</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: ["input[type=radio]:focus-visible+label{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.Router }, { type: i11.CeeApiService }], { radioField: [{
            type: ViewChild,
            args: ['radioField', { static: false }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeRadioComponent, { className: "CeeRadioComponent", filePath: "lib\\field-components\\cee-radio\\cee-radio.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXJhZGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1yYWRpby9jZWUtcmFkaW8uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXJhZGlvL2NlZS1yYWRpby5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBcUQsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVU3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFLdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNqQnhELGlDQUFxRTtJQUFBLFlBQXlCO0lB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O2tCQUFyRCxTQUFTO21CQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUU7WUFDekIsTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSzs7a0ZBVEcsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tICcuLi9jZWUtYmFzZS1jbGFzcyc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBVbmRvUmVkbyB9IGZyb20gJy4uLy4uL3V0aWxzL3VuZG8tcmVkby51dGlsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFJhZGlvQnV0dG9uIGFzIE1hdFJhZGlvQnV0dG9uIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IEN1c3RvbVRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2FwcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXRSYWRpb01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3JhZGlvJztcclxuaW1wb3J0IHsgTmdiTW9kdWxlLCBOZ2JUb29sdGlwTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS1yYWRpbycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLXJhZGlvLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1yYWRpby5jb21wb25lbnQuc2NzcycsICcuLi9maWVsZC1jb21tb24uc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRUb29sdGlwTW9kdWxlLCBDdXN0b21Ub29sdGlwRGlyZWN0aXZlLCBNYXRSYWRpb01vZHVsZSwgTmdiVG9vbHRpcE1vZHVsZSwgRm9ybXNNb2R1bGUsIE5nU3R5bGUsIE5nYk1vZHVsZSwgQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlUmFkaW9Db21wb25lbnQgZXh0ZW5kcyBCYXNlVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgQFZpZXdDaGlsZCgncmFkaW9GaWVsZCcsIHsgc3RhdGljOiBmYWxzZSB9KSByYWRpb0ZpZWxkOiBNYXRSYWRpb0J1dHRvbjtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2aXNpYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcbiAgICBjb2x1bW5zID0gMztcclxuICAgIHVuZG9SZWRvVXRpbDogVW5kb1JlZG87XHJcbiAgICBpbnB1dFZhbHVlID0gZmFsc2U7XHJcbiAgICByYWRpb1N0YXRlID0ge1xyXG4gICAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5OiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGh0bWxfaWQgPSAnJztcclxuICAgIHJhZGlvVmFsdWVzID0gW107XHJcbiAgICBjaGVja1ZhbHVlVGltZW91dDogYW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgZHluYW1pY1N0eWxlRWxlbWVudDogSFRNTFN0eWxlRWxlbWVudDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyKTtcclxuICAgICAgICB0aGlzLnVuZG9SZWRvVXRpbCA9IG5ldyBVbmRvUmVkbygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgICAgIHRoaXMuZGVwZW5kZW5jeUhhbmRsZXIoJ29uTG9hZCcpO1xyXG4gICAgICAgIC8qLS0tLS0tLS0tLSAgRHluYW1pYyBzdHlsZSBmb3IgY3VzdG9tIHJhZGlvIFNUQVJUIC0tLS0tLS0tLS0qL1xyXG5cclxuICAgICAgICB0aGlzLmR5bmFtaWNTdHlsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHRoaXMuZHluYW1pY1N0eWxlRWxlbWVudC5pbm5lckhUTUwgPSBgLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtbGFiZWw6OmJlZm9yZSB7XHJcbiAgICAgICAgd2lkdGg6ICR7dGhpcy5maWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGh9ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgaGVpZ2h0OiAke3RoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX2hlaWdodH0gIWltcG9ydGFudDtcclxuICAgICB9XHJcbiAgICAgLmN1c3RvbS1yYWRpbyAuY3VzdG9tLWNvbnRyb2wtaW5wdXQ6Y2hlY2tlZCB+IC5jdXN0b20tY29udHJvbC1sYWJlbDo6YmVmb3Jle1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogJHt0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5ib3JkZXJfY29sb3J9ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHt0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5iYWNrZ3JvdW5kX2NvbG9yfSAhaW1wb3J0YW50O1xyXG4gICAgIH1cclxuICAgICBgO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcy5keW5hbWljU3R5bGVFbGVtZW50KTtcclxuXHJcbiAgICAgICAgLyotLS0tLS0tLS0tICBEeW5hbWljIHN0eWxlIGZvciBjdXN0b20gcmFkaW8gRU5EIC0tLS0tLS0tLS0qL1xyXG4gICAgICAgIGNvbnN0IHBhcmFtZXRlcnMgPSB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnM7XHJcbiAgICAgICAgY29uc3QgdmFsaWRQYXJhbWV0ZXIgPSBwYXJhbWV0ZXJzPy5maW5kKFxyXG4gICAgICAgICAgICAocCkgPT4gcC5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXHJcbiAgICAgICAgKTtcclxuICAgICAgICBjb25zdCBjb2x1bW5QYXJhbSA9IHBhcmFtZXRlcnM/LmZpbmQocCA9PiBwLnBhcmFtZXRlcl90eXBlPy50cmltKCkgPT09ICdTaG93aW5Db2x1bW5fbm8nKTtcclxuICAgICAgICB0aGlzLmNvbHVtbnMgPSBjb2x1bW5QYXJhbT8udmFsdWUgPz8gJzEnO1xyXG4gICAgICAgIGlmICh2YWxpZFBhcmFtZXRlcikge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcih0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUodmFsaWRQYXJhbWV0ZXIudmFsdWUpKTtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSA9IGRhdGEgPyB0aGlzLmdldEV4dGVybmFsQXBpT3B0aW9uVmFsdWUodmFsaWRQYXJhbWV0ZXIudmFsdWUsIGRhdGFbJ3ZhbHVlJ10pIDogbnVsbDtcclxuICAgICAgICAgICAgaWYgKGV4dGVybmFsQXBpT3B0aW9uVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVybmFsQXBpT3B0aW9uVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZGlvVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgV2VudCBXcm9uZyBpbiBSYWRpbyAhISEnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZih0aGlzLmNoZWNrVmFsdWVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuY2hlY2tWYWx1ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgIHRoaXMuY2hlY2tWYWx1ZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAgLy8gQ2xlYXIgcm9vdERhdGEgcmVmZXJlbmNlIHRvIGF2b2lkIGNpcmN1bGFyIHJlZmVyZW5jZXNcclxuICAgICAgICBpZiAodGhpcy5yb290RGF0YSAmJiB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ10pIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVt0aGlzLmZpZWxkRGF0YS5odG1sX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIGR5bmFtaWMgc3R5bGUgZWxlbWVudFxyXG4gICAgICAgIGlmICh0aGlzLmR5bmFtaWNTdHlsZUVsZW1lbnQgJiYgdGhpcy5keW5hbWljU3R5bGVFbGVtZW50LnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgdGhpcy5keW5hbWljU3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5keW5hbWljU3R5bGVFbGVtZW50KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yYWRpb0ZpZWxkID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJhZGlvVmFsdWVzID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJhZGlvU3RhdGUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudW5kb1JlZG9VdGlsID0gbnVsbDtcclxuICAgICAgICAvLyBDbGVhciBvdGhlciBvYmplY3QgcmVmZXJlbmNlc1xyXG4gICAgICAgIHRoaXMucm9vdERhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKFxyXG5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBGb3IgdW5pcXVlIGh0bWwgaWRcclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLmZpZWxkRGF0YS5odG1sX2lkXHJcbiAgICAgICAgdGhpcy50YWJJbmRleFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUYWJJbmRleCddO1xyXG4gICAgICAgIC8vIEVORFxyXG4gICAgICAgIC8vIGlmICh0aGlzLnVzZXJEYXRhSGFuZGxlclNlcnZpY2UuZ2V0RmllbGREYXRhKHRoaXMuc2Vzc2lvbktleVV0aWwuZ2VuZXJhdGVTZXNzaW9uS2V5KHRoaXMuZmllbGREYXRhKSkudHJpbSgpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgdGhpcy5zZXRTZXNzaW9uRGF0YSgnJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIHRoaXMuZ2V0U2Vzc2lvbkRhdGEoKTtcclxuICAgICAgICB0aGlzLnJhZGlvVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5yb3dEYXRhLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IHRoaXMucm93RGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZGlvVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodGhpcy5yb3dEYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb1JlZG9VdGlsLnB1c2godGhpcy5hcHBEYXRhLmlkLCB0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAvL2ZvciBWYWxpZGF0ZSBBTkQgTWFuZGF0b3J5IGVycm9yXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdERhdGEgJiYgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVt0aGlzLmZpZWxkRGF0YS5odG1sX2lkXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzX21hdGVyaWFsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucmFkaW9GaWVsZCkgdGhpcy5yYWRpb0ZpZWxkLmZvY3VzKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkICsgJzAnKSkgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5maWVsZERhdGEuaHRtbF9pZCArICcwJykuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZ2V0TWFza0RhdGFPblJhZGlvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFza0RhdGFPblJhZGlvKCl7XHJcbiAgICAgICAgaWYodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfTWFza051bWJlckxpbWl0J10pe1xyXG4gICAgICAgICAgICBsZXQgcmFkaW9MYWJlbERhdGEgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5yYWRpb1ZhbHVlcy5mb3JFYWNoKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdHMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NYXNrTnVtYmVyTGltaXQnXS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1hdFN0ciA9IHguc3BsaXQoJ3x8Jyk7O1xyXG4gICAgICAgICAgICAgICAgbGV0IGZpZWxkX2JveCA9IHRoaXMuY29tbW9uVXRpbC5nZXRNYXNrZWREYXRhKGZvcm1hdFN0clsxXSxmb3JtYXRzWzBdLCBmb3JtYXRzWzFdLGZvcm1hdHNbMl0pO1xyXG4gICAgICAgICAgICAgICAgcmFkaW9MYWJlbERhdGEucHVzaChmaWVsZF9ib3gpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnJhZGlvVmFsdWVzID0gcmFkaW9MYWJlbERhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgICAgIGxldCBhcGlEYXRhID0gbnVsbFxyXG4gICAgICAgIGlmICghdGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGFwaURhdGEgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5yb3dEYXRhPy5yZXNwb25zZV9hcGlfa2V5ICYmIHRoaXMucm93RGF0YT8ucmVzcG9uc2VfYXBpX2tleS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgYXBpRGF0YSA9IGRhdGEuaGFzT3duUHJvcGVydHkodGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXlbMV0pID8gZGF0YVt0aGlzLnJvd0RhdGEucmVzcG9uc2VfYXBpX2tleVsxXV0gOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICghdGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGNvbnN0IGFwaVZhbHVlID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChhcGlEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhcGlEYXRhKSAmJiB0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gYXBpRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZGlvVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBhcGlEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb1JlZG9VdGlsLnB1c2godGhpcy5hcHBEYXRhLmlkLCB0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vIGZvciBtdWx0aXBsZSBhcGkga2V5cyB0aGUgdmFsdWUgdGhhdCBuZWVkcyB0byBiZSBzZXQgd2lsbCBjb21lXHJcbiAgICAgICAgLy8gZnJvbSBhZGRpdGlvbmFsUGFyYW1ldGVyIHdpdGggdHlwZSBleHRlcm5hbEFwaU9wdGlvblZhbHVlXHJcbiAgICAgICAgaWYodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZShwYXJhbWV0ZXIudmFsdWUsIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbEFwaU9wdGlvblZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVybmFsQXBpT3B0aW9uVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgPSBleHRlcm5hbEFwaU9wdGlvblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWRpb1ZhbHVlcyA9IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyBXZW50IFdyb25nIGluIFJhZGlvICEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXR0aW5nIHRoZSBmaWVsZCBkYXRhIGJlbG93IGJlY2F1c2UgZ2V0IER5bmFtaWMgVXRpbCBpcyBjaGVja2luZyB0aGUgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMucmFkaW9TdGF0ZS50b3VjaGVkICE9PSB2YWx1ZS50b3VjaGVkICYmICh0aGlzLnJhZGlvU3RhdGUudG91Y2hlZCA9IHZhbHVlLnRvdWNoZWQpO1xyXG4gICAgICAgIHRoaXMucmFkaW9TdGF0ZS5kaXJ0eSAhPT0gdmFsdWUuZGlydHkgJiYgKHRoaXMucmFkaW9TdGF0ZS5kaXJ0eSA9IHZhbHVlLmRpcnR5KTtcclxuICAgIH1cclxuXHJcbiAgICBjaGVja2VkVmFsKHZhbHVlLCBzdGF0ZSkge1xyXG4gICAgICAgICBpZiAodGhpcy5jaGVja1ZhbHVlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5jaGVja1ZhbHVlVGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tWYWx1ZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNoZWNrVmFsdWVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoc3RhdGUpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodmFsdWUpOyAvLyBzZXQgdGhlIHNlc3Npb24gdmFsdWUgb24gY2hlY2tlZFxyXG4gICAgICAgICAgICB0aGlzLnVuZG9SZWRvVXRpbC5wdXNoKHRoaXMuYXBwRGF0YS5pZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVuZG9SZWRvVXRpbC5zZXRDdXJyZW50SWQodGhpcy5hcHBEYXRhLmlkKTtcclxuICAgICAgICAgICAgLy8gb24gY2xpY2sgZXZlbnQgb24gcmFkaW9cclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNsaWNrJywge30sIHRydWUsIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZUlkOiB0aGlzLmh0bWxfaWQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgaWYgKGdldF9kYXRhLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEudW5pcXVlX2lkcztcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuYXBwRGF0YS5pZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLmFwaUtleXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVuaXF1ZV9pZF92YWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHQgdmFsdWVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQocGFyYW10ZXIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5maWVsZFZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnZ2V0X2RhdGEnLCB0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKTtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhnZXRfZGF0YSkuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZV9pZF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmdldElEKGdldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV0pO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ10ubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJ3ZhbHVlcyddW2RhdGFbJ3VuaXF1ZUlkcyddLmluZGV4T2YodGhpcy5maWVsZERhdGEudW5pcXVlX2lkKV0gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVswXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAvLyBvZiB0cmlnZ2VyVXBkYXRlIGlzIHRydWUgdGhlbiB1cGRhdGUgdGhlIGZpZWxkIHZhbHVlIG9yIHVwZGF0ZSB2YWx1ZSBhbmQgZW1pdCBjb25kaXRpb25zIGV2ZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10odGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGF0ZVZhbHVlID0gdGhpcy51bmRvUmVkb1V0aWwuZ2V0UHJlc2VudFZhbHVlKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHN0YXRlVmFsdWUgIT09IG51bGwgfHwgc3RhdGVWYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVWYWx1ZSAhPT0gZmllbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHN0YXRlVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5maWVsZFZhbHVlID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc3QgY2hhbmdlTWFwID0ge1xyXG4gICAgICAgIC8vICAgICBmaWVsZF9sYWJlbDogJ2ZpZWxkRGF0YS5maWVsZF9sYWJlbCcsXHJcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyX3RleHQ6ICdmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCcsXHJcbiAgICAgICAgLy8gICAgIHRvb2x0aXA6ICdmaWVsZERhdGEudG9vbHRpcCcsXHJcbiAgICAgICAgLy8gICAgICdhZGRpdGlvbmFsX3BhcmFtZXRlcnNbKl1BcmlhLUxhYmVsJzogJ2FkZGl0aW9uYWxQYXJhbWV0ZXJbXFwnQXJpYS1MYWJlbFxcJ10nLFxyXG4gICAgICAgIC8vICAgICAnZmllbGRfZGF0YS5wb3NzaWJsZV92YWx1ZXNbKl0nOiAncmFkaW9WYWx1ZXMnXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBmb3IgKGNvbnN0IHZhbHVlIG9mIE9iamVjdC5rZXlzKGNoYW5nZU1hcCkpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbGFuZ1ZhbCA9IHRoaXMuc3dpdGNoTGFuZyh2YWx1ZSwgZGF0YSwgY2hhbmdlTWFwKTtcclxuICAgICAgICAvLyAgICAgaWYgKGxhbmdWYWwpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXNbbGFuZ1ZhbC5rZXldID0gbGFuZ1ZhbC52YWw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICAgICAgICAvLyBpZiAoY2hhbmdlcy5maWVsZERhdGEgJiYgY2hhbmdlcy5yb290RGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhLmN1cnJlbnRWYWx1ZS5sYW5nQ2hhbmdlZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvZ2dsZUxhbmd1YWdlKGNoYW5nZXMuZmllbGREYXRhLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc0VkaXRhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc1Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc01hbmRhdG9yeScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiIGlkPVwie3todG1sX2lkfX1cIiAqbmdJZj1cImlzVmlzaWJsZVwiXHJcbiAgICBjbGFzcz1cInt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10b29sdGlwXCJcclxuICAgICAgICAgICAgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwIFwiPmk8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gVG9vbHRpcCB3aXRoIGluZm9ybWFpb24gaWNvbiAtLT5cclxuICAgICAgICAgICAgPCEtLSA8YnV0dG9uICpuZ0lmPVwiaXNfbWF0ZXJpYWwgJiYgaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvIGJ0bi10b29sdGlwLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCJcclxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyBmaWVsZERhdGEudG9vbHRpcFwiIFtjdXN0b21Ub29sdGlwXT1cInRvb2x0aXBUZW1wbGF0ZVwiXHJcbiAgICAgICAgICAgICAgICBbdG9vbHRpcElkXT1cImZpZWxkRGF0YS51bmlxdWVfaWRcIiBbdG9vbHRpcEFkZGl0aW9uYWxwYXJhbWV0ZXJdPVwiYWRkaXRpb25hbFBhcmFtZXRlclwiPlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICA8L2J1dHRvbj4gLS0+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFRvb2x0aXAgVGVtcGxhdGUgLS0+XHJcbiAgICAgICAgICAgIDwhLS0gPG5nLXRlbXBsYXRlICN0b29sdGlwVGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXBfdGV4dFwiIFtpbm5lckhUTUxdPVwiZmllbGREYXRhLnRvb2x0aXBcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT4gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzX21hdGVyaWFsXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiBhcmlhLWxhYmVsbGVkYnk9XCJleGFtcGxlLXJhZGlvLWdyb3VwLWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImV4YW1wbGUtcmFkaW8tZ3JvdXBcIiBbKG5nTW9kZWwpXT1cImZpZWxkVmFsdWVcIiAjcmFkaW9Db250cm9sPVwibmdNb2RlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtcmFkaW8tY29udGVudFwiICpuZ0Zvcj1cImxldCBvcHQgb2YgcmFkaW9WYWx1ZXM7IGluZGV4IGFzIGk7IGxhc3QgYXMgaXNMYXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uICNyYWRpb0ZpZWxkIGNsYXNzPVwiZXhhbXBsZS1yYWRpby1idXR0b25cIiBbdmFsdWVdPVwiY29tbW9uVXRpbC5nZXRJRChvcHQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogY29tbW9uVXRpbC5nZXRWYWx1ZShvcHQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiY2hlY2tlZFZhbChjb21tb25VdGlsLmdldElEKG9wdCksIHJhZGlvQ29udHJvbClcIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cInNldFN0YXRlKHJhZGlvQ29udHJvbClcIiAoYmx1cik9XCJzZXRTdGF0ZShyYWRpb0NvbnRyb2wpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFpc0hUTUwoY29tbW9uVXRpbC5nZXRWYWx1ZShvcHQpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXI+PHNwYW4gKm5nSWY9XCJvcHQuc3BsaXQoJ3x8JykubGVuZ3RoID4gMlwiIFtuZ2JUb29sdGlwXT1cImN1c3RvbU1hdFRvb2x0aXBSYWRpb1wiIHBsYWNlbWVudD1cInRvcFwiPnt7Y29tbW9uVXRpbC5nZXRWYWx1ZShvcHQpfX08L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj48c3BhbiAqbmdJZj1cIm9wdC5zcGxpdCgnfHwnKS5sZW5ndGggPD0gMlwiPnt7Y29tbW9uVXRpbC5nZXRWYWx1ZShvcHQpfX08L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzSFRNTChjb21tb25VdGlsLmdldFZhbHVlKG9wdCkpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImNvbW1vblV0aWwuZ2V0VmFsdWUob3B0KVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2N1c3RvbU1hdFRvb2x0aXBSYWRpbyA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3sgY29tbW9uVXRpbC5nZXRUaXRsZXNPcHRpb25zKG9wdCkgfX08L3N0cm9uZz48YnIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwX3RleHRcIj57eyBjb21tb25VdGlsLmdldERlc2NyaXB0aW9uT3B0aW9ucyhvcHQpIH19PC9zcGFuPjxici8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFpc19tYXRlcmlhbFwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgb3B0IG9mIHJhZGlvVmFsdWVzOyBpbmRleCBhcyBpOyBsYXN0IGFzIGlzTGFzdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tY29udHJvbCBjdXN0b20tcmFkaW8ge3sgIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKHJhZGlvU3RhdGUuZGlydHkgfHwgcmFkaW9TdGF0ZS50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCIgbmFtZT1cInt7aHRtbF9pZH19XCIgW2F0dHIubmFtZV09XCJodG1sX2lkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtaW5wdXRcIiBpZD1cInt7aHRtbF9pZH19e3tpfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiBjb21tb25VdGlsLmdldFZhbHVlKG9wdClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJmaWVsZFZhbHVlXCIgdmFsdWU9XCJ7e2NvbW1vblV0aWwuZ2V0SUQob3B0KX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiY2hlY2tlZFZhbChjb21tb25VdGlsLmdldElEKG9wdCksIHJhZGlvQ29udHJvbClcIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiAjcmFkaW9Db250cm9sPVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwic2V0U3RhdGUocmFkaW9Db250cm9sKVwiIChibHVyKT1cInNldFN0YXRlKHJhZGlvQ29udHJvbClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWNvbnRyb2wtbGFiZWxcIiBmb3I9XCJ7e2h0bWxfaWR9fXt7aX19XCIgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc3R5bGUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdjb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X2NvbG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cIiAqbmdJZj1cIiFpc0hUTUwoY29tbW9uVXRpbC5nZXRWYWx1ZShvcHQpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lcj48c3BhbiAqbmdJZj1cIm9wdC5zcGxpdCgnfHwnKS5sZW5ndGggPiAyXCIgW25nYlRvb2x0aXBdPVwiY3VzdG9tVG9vbHRpcFJhZGlvXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2VtZW50PVwidG9wXCI+e3tjb21tb25VdGlsLmdldFZhbHVlKG9wdCl9fT48L3NwYW4+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPjxzcGFuICpuZ0lmPVwib3B0LnNwbGl0KCd8fCcpLmxlbmd0aCA8PSAyXCI+e3tjb21tb25VdGlsLmdldFZhbHVlKG9wdCl9fTwvc3Bhbj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjdXN0b20tY29udHJvbC1sYWJlbFwiIGZvcj1cInt7aHRtbF9pZH19e3tpfX1cIiBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3NpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1zdHlsZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2NvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiICpuZ0lmPVwiaXNIVE1MKGNvbW1vblV0aWwuZ2V0VmFsdWUob3B0KSlcIiBbaW5uZXJIVE1MXT1cImNvbW1vblV0aWwuZ2V0VmFsdWUob3B0KVwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBUb29sdGlwIGZvciBSYWRpbyAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2N1c3RvbVRvb2x0aXBSYWRpbz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRvb2x0aXBfY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPnt7IGNvbW1vblV0aWwuZ2V0VGl0bGVzT3B0aW9ucyhvcHQpIH19PC9zdHJvbmc+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXBfdGV4dFwiPnt7IGNvbW1vblV0aWwuZ2V0RGVzY3JpcHRpb25PcHRpb25zKG9wdCkgfX08L3NwYW4+PGJyIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtdWx0aXBsZUVycm9yTWVzc2FnZTsgZWxzZSBzaW5nbGVFcnJvck1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhaW5wdXRWYWx1ZSAmJiBpc01hbmRhdG9yeSAmJiAocmFkaW9TdGF0ZS5kaXJ0eSB8fCByYWRpb1N0YXRlLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSAmJiBtZXNzYWdlLnR5cGUgPT0gJ01hbmRhdG9yeSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzaW5nbGVFcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFpbnB1dFZhbHVlICYmIGlzTWFuZGF0b3J5ICYmIChyYWRpb1N0YXRlLmRpcnR5IHx8IHJhZGlvU3RhdGUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBlcnJvck1lc3NhZ2VEYXRhLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2Vycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19