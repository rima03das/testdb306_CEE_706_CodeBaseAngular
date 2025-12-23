import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule, NgStyle } from '@angular/common';
import { ShowPasswordDirective } from '../../directives/showPassword/showPassword.directive';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../services/internal-cee-emitter-service.service";
import * as i3 from "../../services/shared-events-service.service";
import * as i4 from "../../models/app-data/app-data.service";
import * as i5 from "../../models/api-data/api-data.service";
import * as i6 from "../../services/wfe-step-loader.service";
import * as i7 from "@angular/material/dialog";
import * as i8 from "@angular/material/snack-bar";
import * as i9 from "@angular/common/http";
import * as i10 from "@angular/forms";
import * as i11 from "@angular/common";
import * as i12 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["textField"];
const _c1 = ["selectField"];
const _c2 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, color: a3, "border-color": a4, height: a5, width: a6, "background-color": a7 });
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c4 = a0 => ({ "color": a0 });
function CeePhoneNumberComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeePhoneNumberComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 23);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeePhoneNumberComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 20)(2, CeePhoneNumberComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeePhoneNumberComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeePhoneNumberComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeePhoneNumberComponent_div_0_option_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("value", opt_r3.value);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r3.label, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r4.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r4.code).message_text, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const selectField_r5 = i0.ɵɵreference(10);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r4.type == "Mandatory" && !selectField_r5.value);
} }
function CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const selectField_r5 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectField_r5 == null ? null : selectField_r5.errors.required);
} }
function CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_div_1_Template, 2, 1, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const selectField_r5 = i0.ɵɵreference(10);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectField_r5.invalid && (selectField_r5.dirty || selectField_r5.touched || ctx_r1.showErrorOnNext));
} }
function CeePhoneNumberComponent_div_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeePhoneNumberComponent_div_0_ng_template_15_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 32);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeePhoneNumberComponent_div_0_ng_template_15_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_template_15_div_0_div_1_p_1_Template, 1, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeePhoneNumberComponent_div_0_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_template_15_div_0_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const selectField_r5 = i0.ɵɵreference(10);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectField_r5 == null ? null : selectField_r5.errors.required);
} }
function CeePhoneNumberComponent_div_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePhoneNumberComponent_div_0_ng_template_15_div_0_Template, 2, 1, "div", 27);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const selectField_r5 = i0.ɵɵreference(10);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", selectField_r5.invalid && (selectField_r5.dirty || selectField_r5.touched || ctx_r1.showErrorOnNext));
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r7.code).message_text, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r7.type == "Mandatory" && !textField_r6.value);
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r7.code).message_text, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "minlength" && textField_r6.value);
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r7.code).message_text, "");
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "Regex" && textField_r6.value);
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_1_Template, 2, 1, "div", 7)(2, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_2_Template, 2, 1, "div", 7)(3, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_div_3_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r6 = i0.ɵɵreference(19);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r6 == null ? null : textField_r6.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r6 == null ? null : textField_r6.errors == null ? null : textField_r6.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r6 == null ? null : textField_r6.errors.pattern);
} }
function CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_div_1_Template, 4, 3, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r6.invalid && (textField_r6.dirty || textField_r6.touched || ctx_r1.showErrorOnNext || textField_r6.value));
} }
function CeePhoneNumberComponent_div_0_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_container_20_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeePhoneNumberComponent_div_0_ng_template_21_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 32);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeePhoneNumberComponent_div_0_ng_template_21_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_template_21_div_0_div_1_p_1_Template, 1, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeePhoneNumberComponent_div_0_ng_template_21_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeePhoneNumberComponent_div_0_ng_template_21_div_0_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r6 = i0.ɵɵreference(19);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r6 == null ? null : textField_r6.errors.required) || (textField_r6 == null ? null : textField_r6.errors.minlength) || (textField_r6 == null ? null : textField_r6.errors.pattern));
} }
function CeePhoneNumberComponent_div_0_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePhoneNumberComponent_div_0_ng_template_21_div_0_Template, 2, 1, "div", 27);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r6 = i0.ɵɵreference(19);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", textField_r6.invalid && (textField_r6.dirty || textField_r6.touched || ctx_r1.showErrorOnNext || textField_r6.value));
} }
function CeePhoneNumberComponent_div_0_ng_container_23_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28)(2, "div")(3, "p", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r8.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r8.value.message_text, "");
} }
function CeePhoneNumberComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    i0.ɵɵtemplate(3, CeePhoneNumberComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 7)(4, CeePhoneNumberComponent_div_0_span_4_Template, 2, 0, "span", 8)(5, CeePhoneNumberComponent_div_0_button_5_Template, 2, 2, "button", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 10)(7, "div", 11)(8, "div", 12)(9, "select", 13, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePhoneNumberComponent_div_0_Template_select_ngModelChange_9_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.ccValue, $event) || (ctx_r1.ccValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeePhoneNumberComponent_div_0_Template_select_change_9_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setCountryCode()); });
    i0.ɵɵelementStart(11, "option", 14);
    i0.ɵɵtext(12, "Select Country");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, CeePhoneNumberComponent_div_0_option_13_Template, 2, 2, "option", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(14, CeePhoneNumberComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 16)(15, CeePhoneNumberComponent_div_0_ng_template_15_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(17, "div", 17)(18, "input", 18, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePhoneNumberComponent_div_0_Template_input_ngModelChange_18_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function CeePhoneNumberComponent_div_0_Template_input_keyup_18_listener($event) { i0.ɵɵrestoreView(_r1); const textField_r6 = i0.ɵɵreference(19); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r6)); })("blur", function CeePhoneNumberComponent_div_0_Template_input_blur_18_listener() { i0.ɵɵrestoreView(_r1); const textField_r6 = i0.ɵɵreference(19); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r6.value, textField_r6)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(20, CeePhoneNumberComponent_div_0_ng_container_20_Template, 2, 1, "ng-container", 16)(21, CeePhoneNumberComponent_div_0_ng_template_21_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(23, CeePhoneNumberComponent_div_0_ng_container_23_Template, 5, 4, "ng-container", 19);
    i0.ɵɵpipe(24, "keyvalue");
    i0.ɵɵelementEnd()()()()();
} if (rf & 2) {
    const selectField_r5 = i0.ɵɵreference(10);
    const singleErrorMessage_r9 = i0.ɵɵreference(16);
    const textField_r6 = i0.ɵɵreference(19);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate2("custom-select ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || selectField_r5.invalid && ctx_r1.isMandatory && (selectField_r5.dirty || selectField_r5.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(36, _c2, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color))("disabled", !ctx_r1.isEditable);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.ccValue);
    i0.ɵɵproperty("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", "country_" + ctx_r1.html_id)("aria-label", "Select a country code");
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngForOf", ctx_r1.countryValues);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r9);
    i0.ɵɵadvance(4);
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || textField_r6.invalid && ctx_r1.isMandatory && (textField_r6.dirty || textField_r6.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("type", ctx_r1.hide ? "password" : "text");
    i0.ɵɵpropertyInterpolate("showLastCharDelay", ctx_r1.additionalParameter["CEE_MaskNumberLimit"] === "1" ? true : false);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "10" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("pattern", ctx_r1.validationRegex)("ngStyle", i0.ɵɵpureFunction8(45, _c3, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r9);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(24, 34, ctx_r1.showComparisonError));
} }
export class CeePhoneNumberComponent extends BaseView {
    userDataHandlerService;
    internalCEEEmitter;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    textField;
    selectField;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = '';
    html_id = '';
    isValid;
    countryValues = [];
    ccValueOld = '';
    ccValue = '';
    countryCodeApiKey;
    hide = false;
    constructor(userDataHandlerService, internalCEEEmitter, sharedEventsService, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.userDataHandlerService = userDataHandlerService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.sharedEventsService = sharedEventsService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.sessionKeyUtil = new SessionKeyUtil();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // END
        this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
            : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
        // END
        this.inputValue = this.fieldValue;
        this.countryValues = [];
        for (const possi of this.fieldData.possible_values) {
            const pValue = possi.split('||').map(v => v.trim());
            if (pValue.length === 3) {
                this.countryValues.push({
                    value: pValue[0],
                    label: pValue[1],
                    sync: pValue[2]
                });
            }
        }
        if (this.additionalParameter['country_code_api_key']) {
            this.countryCodeApiKey = this.additionalParameter['country_code_api_key'].split('|').map(val => val.trim());
        }
        this.syncPhoneNumber();
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            this.hide = true;
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    onSessionDataUpdated(value, state) {
        this.isValid = state.valid;
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.setPhoneNumber();
    }
    onKey(event, value) {
        if (event.key === 'Tab' && value.value === '') {
            return;
        }
        this.isValid = value.valid;
        this.setPhoneNumber();
    }
    syncPhoneNumber(countryCodeValue = null) {
        let matchedCCSync = '';
        let matchedCCValue = '';
        if (countryCodeValue) {
            const tempCCV = this.countryValues.find(c => c.value === countryCodeValue);
            matchedCCSync = tempCCV ? tempCCV.sync : '';
            matchedCCValue = tempCCV ? tempCCV.value : '';
        }
        else {
            for (const key of this.countryValues) {
                const cCode = key.sync;
                if (this.inputValue.indexOf(cCode) === 0) {
                    if (matchedCCSync.length < cCode.length) {
                        matchedCCSync = cCode;
                        matchedCCValue = key.value;
                    }
                }
            }
            const dupCountryCode = this.countryValues.find(c => c.sync === matchedCCSync && c.value === this.ccValueOld && this.ccValueOld !== matchedCCValue);
            if (dupCountryCode) {
                matchedCCValue = this.ccValueOld;
            }
        }
        if (this.ccValueOld !== matchedCCValue) {
            this.ccValue = this.ccValueOld = matchedCCValue;
        }
        if (this.countryCodeApiKey && this.countryCodeApiKey[0]) {
            const apiData = {
                id: this.countryCodeApiKey[0],
                apiUrl: '',
                apiKey: this.countryCodeApiKey[0],
                value: this.ccValue
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
        const pnValue = this.inputValue.replace(new RegExp('^' + this.commonUtil.escapeRegExp(matchedCCSync)), '');
        if (this.additionalParameter['phone_number_api_key']) {
            const apiData = {
                id: this.additionalParameter['phone_number_api_key'],
                apiUrl: '',
                apiKey: this.additionalParameter['phone_number_api_key'],
                value: pnValue
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
    }
    setPhoneNumber(countryCodeValue = null) {
        this.onDirty();
        this.syncPhoneNumber(countryCodeValue);
        this.updateFieldData(this.ccValue && this.additionalParameter['country_code_api_key'] ? this.inputValue : "", this.isValid);
        this.onComponentEvent('OnKeyUp');
    }
    setCountryCode() {
        if (this.ccValueOld.length && this.inputValue.indexOf(this.getSyncValue(this.ccValueOld)) === 0) {
            this.inputValue = this.inputValue.replace(this.getSyncValue(this.ccValueOld), this.getSyncValue(this.ccValue));
        }
        else {
            this.inputValue = this.getSyncValue(this.ccValue) + this.inputValue;
        }
        this.setPhoneNumber(this.ccValue);
    }
    getSyncValue(countryCodeValue = null) {
        const tempCCV = this.countryValues.find(c => c.value === countryCodeValue);
        return tempCCV ? tempCCV.sync : '';
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            var valid = true;
            if (apiValue && this.validationRegex) {
                const patt = new RegExp(this.validationRegex);
                valid = patt.test(apiValue);
            }
            this.inputValue = apiValue;
            let countryCodeValue = null;
            if (this.countryCodeApiKey && this.countryCodeApiKey.length === 2) {
                countryCodeValue = this.setApiCallBackDataUtil.setApiCallBackData(this.countryCodeApiKey[1], data);
            }
            this.syncPhoneNumber(countryCodeValue);
            this.updateFieldData(this.inputValue, valid);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(apiKey, value);
    }
    concatData() { }
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
                this.inputValue = this.additionalParameter['default_value'] ? this.additionalParameter['default_value'] : '';
                this.syncPhoneNumber();
                this.updateFieldData(this.inputValue);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.textField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.textField) {
                    this.textField.reset(this.inputValue);
                    this.textField.control.markAsUntouched();
                    this.textField.control.markAsPristine();
                    this.textField.control.updateValueAndValidity();
                }
                if (this.selectField) {
                    this.selectField.reset(this.ccValue);
                    this.selectField.control.markAsUntouched();
                    this.selectField.control.markAsPristine();
                    this.selectField.control.updateValueAndValidity();
                }
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
            this.inputValue = get_data[unique_id_value];
            this.syncPhoneNumber();
            this.updateFieldData(this.inputValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
    }
    ngOnChanges(changes) {
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
    static ɵfac = function CeePhoneNumberComponent_Factory(t) { return new (t || CeePhoneNumberComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeePhoneNumberComponent, selectors: [["app-cee-phone-number"]], viewQuery: function CeePhoneNumberComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textField = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["selectField", "ngModel"], ["singleErrorMessage", ""], ["textField", "ngModel"], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [1, "row"], [1, "col-3"], [3, "ngModelChange", "change", "ngStyle", "disabled", "ngModel", "required"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [1, "col-9"], ["showPassword", "", 3, "ngModelChange", "keyup", "blur", "type", "showLastCharDelay", "pattern", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [3, "value"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "innerHTML", "ngStyle", 4, "ngIf"], [3, "innerHTML", "ngStyle"]], template: function CeePhoneNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeePhoneNumberComponent_div_0_Template, 25, 54, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, FormsModule, i10.NgSelectOption, i10.ɵNgSelectMultipleOption, i10.DefaultValueAccessor, i10.SelectControlValueAccessor, i10.NgControlStatus, i10.RequiredValidator, i10.MaxLengthValidator, i10.PatternValidator, i10.NgModel, NgStyle, ShowPasswordDirective, CommonModule, i11.NgForOf, i11.NgIf, i11.KeyValuePipe, TooltipModule, i12.TooltipDirective] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeePhoneNumberComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-phone-number', standalone: true, imports: [MatTooltipModule, FormsModule, NgStyle, ShowPasswordDirective, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t</ng-container>\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n\t\t\t\ti\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\r\n\t\t<div class=\"form-field\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col-3\">\r\n\t\t\t\t\t<select\r\n\t\t\t\t\t\tclass=\"custom-select {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (selectField.invalid && isMandatory && (selectField.dirty || selectField.touched || showErrorOnNext))  ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t#selectField=\"ngModel\" [attr.id]=\"'country_'+html_id\" [ngStyle]=\"{\r\n          'font-family': fieldData.field_style.font_name,\r\n          'font-size': fieldData.field_style.font_size,\r\n          'font-style': fieldData.field_style.font_style,\r\n          color: fieldData.field_style.font_color,\r\n          'border-color': fieldData.field_style.border_color,\r\n          height: fieldData.field_style.field_height,\r\n          width: fieldData.field_style.field_width,\r\n          'background-color': fieldData.field_style.background_color }\" [disabled]=\"!isEditable\" [(ngModel)]=\"ccValue\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"'Select a country code'\" [required]=\"isMandatory\" (change)=\"setCountryCode()\">\r\n\t\t\t\t\t\t<option value=\"\" disabled>Select Country</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let opt of countryValues\" value=\"{{opt.value}}\">\r\n\t\t\t\t\t\t\t{{opt.label}}</option>\r\n\t\t\t\t\t</select>\r\n\t\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"selectField.invalid && (selectField.dirty || selectField.touched || showErrorOnNext )\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"selectField?.errors.required\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory' && !selectField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"selectField.invalid && (selectField.dirty || selectField.touched || showErrorOnNext )\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"selectField?.errors.required\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"col-9\">\r\n\t\t\t\t\t<input type=\"{{ hide ? 'password':'text' }}\" showPassword showLastCharDelay=\"{{additionalParameter['CEE_MaskNumberLimit'] === '1' ? true : false}}\"\r\n\t\t\t\t\t\tclass=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField.invalid && isMandatory && ( textField.dirty || textField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t[attr.id]=\"html_id\" [pattern]=\"validationRegex\" [ngStyle]=\"{'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t'font-color': fieldData.field_style.font_color,\r\n\t\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\t\t'height': fieldData.field_style.field_height,\r\n\t\t\t\t'width': fieldData.field_style.field_width,\r\n\t\t\t\t'background-color': fieldData.field_style.background_color }\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n\t\t\t\t\t\tmaxlength=\"{{fieldData.field_character_limit == '0' ? '10': fieldData.field_character_limit}}\"\r\n\t\t\t\t\t\t[(ngModel)]=\"inputValue\" (keyup)=\"onKey($event, textField)\"\r\n\t\t\t\t\t\t(blur)=\"onSessionDataUpdated(textField.value, textField)\" [disabled]=\"!isEditable\" #textField=\"ngModel\"\r\n\t\t\t\t\t\t[required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\" />\r\n\t\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext || textField.value )\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength' && textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex' && textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext || textField.value)\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>" }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.CEEInternalEmitterService }, { type: i3.SharedEventsServiceService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { textField: [{
            type: ViewChild,
            args: ['textField']
        }], selectField: [{
            type: ViewChild,
            args: ['selectField']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeePhoneNumberComponent, { className: "CeePhoneNumberComponent", filePath: "lib\\field-components\\cee-phone-number\\cee-phone-number.component.ts", lineNumber: 26 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXBob25lLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtcGhvbmUtbnVtYmVyL2NlZS1waG9uZS1udW1iZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXBob25lLW51bWJlci9jZWUtcGhvbmUtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFxRCxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPdkgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUs5RCxPQUFPLEVBQUUsV0FBVyxFQUFXLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxzREFBc0QsQ0FBQztBQUM3RixPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDYnBFLGlDQUFxRTtJQUFBLFlBQXlCO0lBQUEsaUJBQVE7OztJQUFqQyxjQUF5QjtJQUF6QixrREFBeUI7OztJQUM5Riw0QkFBZ0g7OztJQUE1QywyRUFBbUM7OztJQUZ4Ryw2QkFBZ0Q7SUFFL0MsQUFEQSxrR0FBcUUscUZBQ21DOzs7O0lBRHpFLGNBQW9DO0lBQXBDLG1FQUFvQztJQUNwQyxjQUFtQztJQUFuQyxrRUFBbUM7OztJQUVuRSxnQ0FBaUQ7SUFBQyxrQkFBQztJQUFBLGlCQUFPOzs7SUFDMUQsa0NBQXdKO0lBQ3ZKLG1CQUNEO0lBQUEsaUJBQVM7OztJQUY0RCxrREFBNkI7Ozs7SUFzQi9GLGtDQUFnRTtJQUMvRCxZQUFhO0lBQUEsaUJBQVM7OztJQURtQiwrQ0FBcUI7SUFDOUQsY0FBYTtJQUFiLDRDQUFhOzs7SUFPWCw2QkFDOEQ7SUFDN0QsWUFBZ0Q7SUFBQSxpQkFBSTs7OztJQURwRCxxR0FBNEQ7SUFDNUQsY0FBZ0Q7SUFBaEQsc0ZBQWdEOzs7SUFIbEQsMkJBQTBDO0lBQ3pDLHNIQUM4RDtJQUUvRCxpQkFBTTs7Ozs7O0lBSEQsY0FBc0U7SUFBdEUsb0dBQXNFOzs7SUFINUUsK0JBQytGO0lBQzlGLG1IQUEwQztJQUszQyxpQkFBTTs7OztJQUxDLGNBQWtDO0lBQWxDLHFGQUFrQzs7O0lBSDFDLDZCQUErQztJQUM5Qyw4R0FDK0Y7Ozs7OztJQUE3RixjQUEyRjtJQUEzRiwySEFBMkY7OztJQUgvRiw2QkFBb0U7SUFDbkUsaUhBQStDOzs7O0lBQWIsY0FBVztJQUFYLHlDQUFXOzs7SUFlM0Msd0JBQ21EOzs7SUFBbEQsQUFEc0IsbUZBQTJDLHNFQUNwQjs7O0lBRi9DLDJCQUEwQztJQUN6QyxzR0FDK0M7SUFDaEQsaUJBQU07OztJQUZELGNBQWlCO0lBQWpCLHlDQUFpQjs7O0lBSHZCLCtCQUMrRjtJQUM5RixtR0FBMEM7SUFJM0MsaUJBQU07Ozs7SUFKQyxjQUFrQztJQUFsQyxxRkFBa0M7OztJQUZ6Qyw4RkFDK0Y7Ozs7O0lBQTdGLDJIQUEyRjs7O0lBNkIxRiw2QkFDOEQ7SUFDN0QsWUFBZ0Q7SUFBQSxpQkFBSTs7OztJQURwRCxxR0FBNEQ7SUFDNUQsY0FBZ0Q7SUFBaEQsc0ZBQWdEOzs7SUFIbEQsMkJBQXdDO0lBQ3ZDLHNIQUM4RDtJQUUvRCxpQkFBTTs7Ozs7O0lBSEQsY0FBb0U7SUFBcEUsa0dBQW9FOzs7SUFLeEUsNkJBQzhEO0lBQzdELFlBQWdEO0lBQUEsaUJBQUk7Ozs7SUFEcEQscUdBQTREO0lBQzVELGNBQWdEO0lBQWhELHNGQUFnRDs7O0lBSGxELDJCQUEwQztJQUN6QyxzSEFDOEQ7SUFFL0QsaUJBQU07Ozs7O0lBSEQsY0FBb0Q7SUFBcEQsMkVBQW9EOzs7SUFLeEQsNkJBQzhEO0lBQzdELFlBQWdEO0lBQUEsaUJBQUk7Ozs7SUFEcEQscUdBQTREO0lBQzVELGNBQWdEO0lBQWhELHNGQUFnRDs7O0lBSGxELDJCQUF1QztJQUN0QyxzSEFDOEQ7SUFFL0QsaUJBQU07Ozs7O0lBSEQsY0FBZ0Q7SUFBaEQsdUVBQWdEOzs7SUFidEQsK0JBQzRHO0lBVzNHLEFBTEEsQUFMQSxtSEFBd0Msc0dBS0Usc0dBS0g7SUFLeEMsaUJBQU07Ozs7SUFmQyxjQUFnQztJQUFoQyxpRkFBZ0M7SUFLaEMsY0FBa0M7SUFBbEMsdUhBQWtDO0lBS2xDLGNBQStCO0lBQS9CLGdGQUErQjs7O0lBYnZDLDZCQUErQztJQUM5Qyw4R0FDNEc7Ozs7OztJQUExRyxjQUF3RztJQUF4RywySUFBd0c7OztJQUg1Ryw2QkFBb0U7SUFDbkUsaUhBQStDOzs7O0lBQWIsY0FBVztJQUFYLHlDQUFXOzs7SUF5QjNDLHdCQUNtRDs7O0lBQWxELEFBRHNCLG1GQUEyQyxzRUFDcEI7OztJQUYvQywyQkFBb0c7SUFDbkcsc0dBQytDO0lBQ2hELGlCQUFNOzs7SUFGRCxjQUFpQjtJQUFqQix5Q0FBaUI7OztJQUh2QiwrQkFDMkc7SUFDMUcsbUdBQW9HO0lBSXJHLGlCQUFNOzs7O0lBSkMsY0FBNEY7SUFBNUYsbU5BQTRGOzs7SUFGbkcsOEZBQzJHOzs7OztJQUF6RywySUFBdUc7OztJQU8xRyw2QkFBa0U7SUFHL0QsQUFERCxBQURELCtCQUFtQyxVQUM3QixZQUN1QztJQUMxQyxZQUEyQjtJQUU5QixBQURDLEFBRDZCLGlCQUFJLEVBQzNCLEVBQ0Q7Ozs7SUFIRCxlQUF1QztJQUF2Qyx5RUFBdUM7SUFDekMsY0FBMkI7SUFBM0IsMERBQTJCOzs7O0lBeEdsQyxBQURELEFBREQsOEJBQTZDLGFBQ3BCLGFBQ0M7SUFNdkIsQUFEQSxBQUpBLGdHQUFnRCxtRUFJQyx1RUFDdUc7SUFHekosaUJBQU07SUFNSCxBQURELEFBREQsQUFERCwrQkFBd0IsY0FDTixjQUNHLG9CQVlnRjtJQUROLHNTQUFxQjtJQUMzQyxxTEFBVSx1QkFBZ0IsS0FBQztJQUNoRyxtQ0FBMEI7SUFBQSwrQkFBYztJQUFBLGlCQUFTO0lBQ2pELHVGQUFnRTtJQUVqRSxpQkFBUztJQWFULEFBWkEsbUdBQW9FLG9IQVluQztJQVNsQyxpQkFBTTtJQUVMLEFBREQsZ0NBQW1CLG9CQWV1RDtJQUZ4RSw0U0FBd0I7SUFDeEIsQUFEeUIsa09BQVMsa0NBQXdCLEtBQUMsNk1BQ25ELDZEQUFnRCxLQUFDO0lBYjFELGlCQWN5RTtJQWdDekUsQUFUQSxBQXRCQSxtR0FBb0Usb0hBc0JuQyxzRkFTaUM7O0lBY3ZFLEFBRkMsQUFEQyxBQURDLEFBREMsaUJBQU0sRUFDRCxFQUNELEVBQ0QsRUFFRDs7Ozs7O0lBakhZLGVBQStCO0lBQS9CLHlEQUErQjtJQUl2QyxjQUFpQjtJQUFqQix5Q0FBaUI7SUFDZixjQUFnQjtJQUFoQix3Q0FBZ0I7SUFVdEIsZUFBMFA7SUFBMVAsbVVBQTBQO0lBU3hMLEFBUlosc1lBUVcsZ0NBQXlCO0lBQUMsOENBQXFCO0lBQ3BFLDZDQUF3Qjs7SUFFNUMsZUFBZ0I7SUFBaEIsOENBQWdCO0lBRzFCLGNBQTRCO0lBQUEsQUFBNUIsa0RBQTRCLG1DQUF1QjtJQXdCakUsZUFBbVA7SUFBblAsNFRBQW1QO0lBRDdPLG1FQUFxQztJQUFjLHVIQUF5RjtJQVdsSixvSUFBOEY7SUFHckUsMEVBQTRDO0lBWnJCLEFBQTVCLGdEQUEyQix5WEFPWTtJQUczRCxpREFBd0I7SUFFeEIsQUFEMEQsNkNBQXdCLGdDQUMxRDs7SUFDVixlQUE0QjtJQUFBLEFBQTVCLGtEQUE0QixtQ0FBdUI7SUErQm5DLGVBQWlDO0lBQWpDLDRFQUFpQzs7QUQ3RXJFLE1BQU0sT0FBTyx1QkFBd0IsU0FBUSxRQUFRO0lBMEJ0QztJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFqQ2EsU0FBUyxDQUFVO0lBQ2pCLFdBQVcsQ0FBVTtJQUU5QixNQUFNLENBQU07SUFDWixTQUFTLENBQU07SUFDdkIsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNsQixPQUFPLENBQU07SUFDYixrQkFBa0IsQ0FBTTtJQUN4QixpQkFBaUIsQ0FBTTtJQUN2QixnQkFBZ0IsQ0FBTTtJQUNkLFFBQVEsQ0FBTTtJQUV2QixjQUFjLENBQWlCO0lBQ3ZDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDckIsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixPQUFPLEdBQUcsRUFBRSxDQUFDO0lBQ2IsT0FBTyxDQUFVO0lBQ2pCLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFDbkIsVUFBVSxHQUFXLEVBQUUsQ0FBQztJQUN4QixPQUFPLEdBQVcsRUFBRSxDQUFDO0lBQ3JCLGlCQUFpQixDQUFXO0lBQzVCLElBQUksR0FBRyxLQUFLLENBQUM7SUFHYixZQUNXLHNCQUE4QyxFQUM5QyxrQkFBNkMsRUFDN0MsbUJBQStDLEVBQy9DLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxNQUFpQixFQUNqQixRQUFxQixFQUNyQixJQUFnQjtRQUV2QixLQUFLLENBQ0Qsc0JBQXNCLEVBQ3RCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxvQkFBb0IsRUFDcEIsTUFBTSxFQUNOLFFBQVEsRUFDUixJQUFJLENBQUMsQ0FBQztRQW5CSCwyQkFBc0IsR0FBdEIsc0JBQXNCLENBQXdCO1FBQzlDLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFDN0Msd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDMUMsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3JCLFNBQUksR0FBSixJQUFJLENBQVk7UUFZdkIsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO0lBQy9DLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDekUsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxTQUFTO1FBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxjQUFjO1FBQ1YscUJBQXFCO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUE7UUFDckMsTUFBTTtRQUNOLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLElBQUksUUFBUSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLEdBQUc7WUFDbE0sQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDNUksTUFBTTtRQUNOLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUNsQyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQztRQUN4QixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxFQUFFO1lBQ2hELE1BQU0sTUFBTSxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7WUFDcEQsSUFBSSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtnQkFDckIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7b0JBQ3BCLEtBQUssRUFBRSxNQUFNLENBQUMsQ0FBQyxDQUFDO29CQUNoQixLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztvQkFDaEIsSUFBSSxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUM7aUJBQ2xCLENBQUMsQ0FBQTthQUNMO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ2xELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7U0FDL0c7UUFDRCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUNqRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztTQUNwQjtRQUNELGtDQUFrQztRQUNsQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFO1lBQ3ZELElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRTtnQkFDaEUsUUFBUSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQzVELENBQUMsQ0FBQztTQUNMO0lBQ0wsQ0FBQztJQUdELG9CQUFvQixDQUFDLEtBQVUsRUFBRSxLQUFVO1FBQ3ZDLElBQUksQ0FBQyxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQztRQUUzQixJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxLQUFLLENBQUMsS0FBVSxFQUFFLEtBQVU7UUFDeEIsSUFBSSxLQUFLLENBQUMsR0FBRyxLQUFLLEtBQUssSUFBSSxLQUFLLENBQUMsS0FBSyxLQUFLLEVBQUUsRUFBRTtZQUMzQyxPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFFRCxlQUFlLENBQUMsbUJBQTJCLElBQUk7UUFDM0MsSUFBSSxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLElBQUksY0FBYyxHQUFHLEVBQUUsQ0FBQztRQUN4QixJQUFJLGdCQUFnQixFQUFFO1lBQ2xCLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzNFLGFBQWEsR0FBRyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1QyxjQUFjLEdBQUcsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDakQ7YUFDSTtZQUNELEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtnQkFDbEMsTUFBTSxLQUFLLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQztnQkFDdkIsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQUU7b0JBQ3RDLElBQUksYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsTUFBTSxFQUFFO3dCQUNyQyxhQUFhLEdBQUcsS0FBSyxDQUFDO3dCQUN0QixjQUFjLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztxQkFDOUI7aUJBQ0o7YUFDSjtZQUNELE1BQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxhQUFhLElBQUksQ0FBQyxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssY0FBYyxDQUFDLENBQUM7WUFDbkosSUFBSSxjQUFjLEVBQUU7Z0JBQ2hCLGNBQWMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO2FBQ3BDO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssY0FBYyxFQUFFO1lBQ3BDLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsR0FBRyxjQUFjLENBQUM7U0FDbkQ7UUFDRCxJQUFJLElBQUksQ0FBQyxpQkFBaUIsSUFBSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDckQsTUFBTSxPQUFPLEdBQUc7Z0JBQ1osRUFBRSxFQUFFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7Z0JBQzdCLE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUNqQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU87YUFDdEIsQ0FBQztZQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDOUQ7UUFDRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQTtRQUMxRyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFO1lBQ2xELE1BQU0sT0FBTyxHQUFHO2dCQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3BELE1BQU0sRUFBRSxFQUFFO2dCQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsbUJBQW1CLENBQUMsc0JBQXNCLENBQUM7Z0JBQ3hELEtBQUssRUFBRSxPQUFPO2FBQ2pCLENBQUM7WUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQzlEO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxtQkFBMkIsSUFBSTtRQUMxQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsZUFBZSxDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVILElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsY0FBYztRQUNWLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDN0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1NBQ2xIO2FBQU07WUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7U0FDdkU7UUFDRCxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsWUFBWSxDQUFDLG1CQUEyQixJQUFJO1FBQ3hDLE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQzNFLE9BQU8sT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDdkMsQ0FBQztJQUVELGFBQWEsQ0FBQyxJQUFTO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2hGLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RGLElBQUksUUFBUSxLQUFLLElBQUksRUFBRTtZQUNuQixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxRQUFRLElBQUksSUFBSSxDQUFDLGVBQWUsRUFBRTtnQkFDbEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDO2dCQUM5QyxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMvQjtZQUNELElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO1lBQzNCLElBQUksZ0JBQWdCLEdBQUcsSUFBSSxDQUFDO1lBQzVCLElBQUksSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO2dCQUMvRCxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3RHO1lBQ0QsSUFBSSxDQUFDLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQ3ZDLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsS0FBVTtRQUN2QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFVBQVUsS0FBSyxDQUFDO0lBRWhCLGNBQWMsQ0FBQyxRQUFhO1FBQ3hCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUMzQixlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JCLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0gsZUFBZSxHQUFHLENBQUMsR0FBRyxlQUFlO29CQUNyQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLGVBQWUsR0FBRztvQkFDZCxHQUFHLGVBQWU7b0JBQ2xCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztpQkFBQyxDQUFDO2FBQzlFO1NBQ0o7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixnQkFBZ0I7Z0JBQ2hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDN0csSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO2dCQUN2QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDdEMsaURBQWlEO2dCQUNqRCxpRkFBaUY7Z0JBQ2pGLHlEQUF5RDtnQkFDekQscUhBQXFIO2dCQUNySCxrQ0FBa0M7Z0JBQ2xDLElBQUksQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztnQkFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUN6QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDeEMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDbkQ7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO29CQUNsQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMzQyxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDMUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDckQ7YUFDSjtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9CQUFvQixDQUFDLFFBQWE7UUFDOUIsd0RBQXdEO1FBQ3hELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLE9BQU8sUUFBUSxLQUFLLFFBQVEsRUFBRTtZQUM5QixNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDekMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNuQixDQUFDLENBQUMsQ0FBQztZQUNILGVBQWUsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQztTQUM5QztRQUNELElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM1QyxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDekM7SUFDTCxDQUFDO0lBRUQsNkJBQTZCLENBQUMsSUFBWTtRQUN0QyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxFQUFFO2dCQUN0RCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLGlHQUFpRztnQkFDakcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFGO1NBQ0o7SUFDTCxDQUFDO0lBRUQsK0JBQStCLENBQUMsSUFBWTtJQUU1QyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBUztRQUN4Qiw4Q0FBOEM7SUFDbEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFZO0lBQzNCLENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFFOUIsSUFBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDM0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzVFO1FBQ0QsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDMUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQztpRkFsVFEsdUJBQXVCOzZEQUF2Qix1QkFBdUI7Ozs7Ozs7O1lDekJwQywwRUFBNkM7O1lBQWpCLG9DQUFlOzRCRHVCN0IsZ0JBQWdCLEVBQUUsV0FBVyxvTkFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSwyQ0FBRSxhQUFhOztpRkFFM0YsdUJBQXVCO2NBUG5DLFNBQVM7MkJBQ0ksc0JBQXNCLGNBR3BCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQztnVEFHN0UsU0FBUztrQkFBaEMsU0FBUzttQkFBQyxXQUFXO1lBQ0ksV0FBVztrQkFBcEMsU0FBUzttQkFBQyxhQUFhO1lBRVAsTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSzs7a0ZBWEcsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBTZXNzaW9uS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24ta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2hvd1Bhc3N3b3JkRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9zaG93UGFzc3dvcmQvc2hvd1Bhc3N3b3JkLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS1waG9uZS1udW1iZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1waG9uZS1udW1iZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLXBob25lLW51bWJlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRUb29sdGlwTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdTdHlsZSwgU2hvd1Bhc3N3b3JkRGlyZWN0aXZlLCBDb21tb25Nb2R1bGUsIFRvb2x0aXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVQaG9uZU51bWJlckNvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBAVmlld0NoaWxkKCd0ZXh0RmllbGQnKSB0ZXh0RmllbGQ6IE5nTW9kZWw7XHJcbiAgICBAVmlld0NoaWxkKCdzZWxlY3RGaWVsZCcpIHNlbGVjdEZpZWxkOiBOZ01vZGVsO1xyXG5cclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2aXNpYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcblxyXG4gICAgZGVjbGFyZSBzZXNzaW9uS2V5VXRpbDogU2Vzc2lvbktleVV0aWw7XHJcbiAgICB2YWxpZGF0aW9uUmVnZXggPSAnJztcclxuICAgIGlucHV0VmFsdWUgPSAnJztcclxuICAgIGh0bWxfaWQgPSAnJztcclxuICAgIGlzVmFsaWQ6IGJvb2xlYW47XHJcbiAgICBjb3VudHJ5VmFsdWVzID0gW107XHJcbiAgICBjY1ZhbHVlT2xkOiBzdHJpbmcgPSAnJztcclxuICAgIGNjVmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gICAgY291bnRyeUNvZGVBcGlLZXk6IHN0cmluZ1tdO1xyXG4gICAgaGlkZSA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudFxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLFxyXG4gICAgICAgICAgICBzbmFja0JhcixcclxuICAgICAgICAgICAgaHR0cCk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uS2V5VXRpbCA9IG5ldyBTZXNzaW9uS2V5VXRpbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEZvciB1bmlxdWUgaHRtbCBpZFxyXG4gICAgICAgIHRoaXMuaHRtbF9pZCA9IHRoaXMuZmllbGREYXRhLmh0bWxfaWRcclxuICAgICAgICAvLyBFTkRcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SZWdleCA9ICh0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4ICYmIHR5cGVvZiB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4LndlYiA9PSAnb2JqZWN0JyAmJiB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4LldlYiAhPT0gJycpID8gdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleC53ZWJcclxuICAgICAgICAgICAgOiAodHlwZW9mIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggPT0gJ3N0cmluZycgJiYgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCAhPT0gJycpID8gdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCA6ICcnO1xyXG4gICAgICAgIC8vIEVORFxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICB0aGlzLmNvdW50cnlWYWx1ZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IHBvc3NpIG9mIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykge1xyXG4gICAgICAgICAgICBjb25zdCBwVmFsdWUgPSBwb3NzaS5zcGxpdCgnfHwnKS5tYXAodiA9PiB2LnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGlmIChwVmFsdWUubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50cnlWYWx1ZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHBWYWx1ZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogcFZhbHVlWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHN5bmM6IHBWYWx1ZVsyXVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydjb3VudHJ5X2NvZGVfYXBpX2tleSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnRyeUNvZGVBcGlLZXkgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2NvdW50cnlfY29kZV9hcGlfa2V5J10uc3BsaXQoJ3wnKS5tYXAodmFsID0+IHZhbC50cmltKCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN5bmNQaG9uZU51bWJlcigpO1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NYXNrTnVtYmVyTGltaXQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL2ZvciBWYWxpZGF0ZSBBTkQgTWFuZGF0b3J5IGVycm9yXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdERhdGEgJiYgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVt0aGlzLmZpZWxkRGF0YS5odG1sX2lkXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZmllbGREYXRhLmh0bWxfaWQpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvblNlc3Npb25EYXRhVXBkYXRlZCh2YWx1ZTogYW55LCBzdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gc3RhdGUudmFsaWQ7XHJcblxyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZSh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldFBob25lTnVtYmVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXkoZXZlbnQ6IGFueSwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInICYmIHZhbHVlLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHZhbHVlLnZhbGlkO1xyXG4gICAgICAgIHRoaXMuc2V0UGhvbmVOdW1iZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBzeW5jUGhvbmVOdW1iZXIoY291bnRyeUNvZGVWYWx1ZTogc3RyaW5nID0gbnVsbCkge1xyXG4gICAgICAgIGxldCBtYXRjaGVkQ0NTeW5jID0gJyc7XHJcbiAgICAgICAgbGV0IG1hdGNoZWRDQ1ZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKGNvdW50cnlDb2RlVmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc3QgdGVtcENDViA9IHRoaXMuY291bnRyeVZhbHVlcy5maW5kKGMgPT4gYy52YWx1ZSA9PT0gY291bnRyeUNvZGVWYWx1ZSk7XHJcbiAgICAgICAgICAgIG1hdGNoZWRDQ1N5bmMgPSB0ZW1wQ0NWID8gdGVtcENDVi5zeW5jIDogJyc7XHJcbiAgICAgICAgICAgIG1hdGNoZWRDQ1ZhbHVlID0gdGVtcENDViA/IHRlbXBDQ1YudmFsdWUgOiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHRoaXMuY291bnRyeVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY0NvZGUgPSBrZXkuc3luYztcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUuaW5kZXhPZihjQ29kZSkgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hlZENDU3luYy5sZW5ndGggPCBjQ29kZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZENDU3luYyA9IGNDb2RlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkQ0NWYWx1ZSA9IGtleS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZHVwQ291bnRyeUNvZGUgPSB0aGlzLmNvdW50cnlWYWx1ZXMuZmluZChjID0+IGMuc3luYyA9PT0gbWF0Y2hlZENDU3luYyAmJiBjLnZhbHVlID09PSB0aGlzLmNjVmFsdWVPbGQgJiYgdGhpcy5jY1ZhbHVlT2xkICE9PSBtYXRjaGVkQ0NWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChkdXBDb3VudHJ5Q29kZSkge1xyXG4gICAgICAgICAgICAgICAgbWF0Y2hlZENDVmFsdWUgPSB0aGlzLmNjVmFsdWVPbGQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2NWYWx1ZU9sZCAhPT0gbWF0Y2hlZENDVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jY1ZhbHVlID0gdGhpcy5jY1ZhbHVlT2xkID0gbWF0Y2hlZENDVmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50cnlDb2RlQXBpS2V5ICYmIHRoaXMuY291bnRyeUNvZGVBcGlLZXlbMF0pIHtcclxuICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmNvdW50cnlDb2RlQXBpS2V5WzBdLFxyXG4gICAgICAgICAgICAgICAgYXBpVXJsOiAnJyxcclxuICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5jb3VudHJ5Q29kZUFwaUtleVswXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNjVmFsdWVcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5zZXRBcGlEYXRhKE9iamVjdC5hc3NpZ24oe30sIGFwaURhdGEpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG5WYWx1ZSA9IHRoaXMuaW5wdXRWYWx1ZS5yZXBsYWNlKG5ldyBSZWdFeHAoJ14nICsgdGhpcy5jb21tb25VdGlsLmVzY2FwZVJlZ0V4cChtYXRjaGVkQ0NTeW5jKSksICcnKVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3Bob25lX251bWJlcl9hcGlfa2V5J10pIHtcclxuICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3Bob25lX251bWJlcl9hcGlfa2V5J10sXHJcbiAgICAgICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3Bob25lX251bWJlcl9hcGlfa2V5J10sXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogcG5WYWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLnNldEFwaURhdGEoT2JqZWN0LmFzc2lnbih7fSwgYXBpRGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQaG9uZU51bWJlcihjb3VudHJ5Q29kZVZhbHVlOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgdGhpcy5vbkRpcnR5KCk7XHJcbiAgICAgICAgdGhpcy5zeW5jUGhvbmVOdW1iZXIoY291bnRyeUNvZGVWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5jY1ZhbHVlICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnY291bnRyeV9jb2RlX2FwaV9rZXknXSA/IHRoaXMuaW5wdXRWYWx1ZSA6IFwiXCIsIHRoaXMuaXNWYWxpZCk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbktleVVwJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Q291bnRyeUNvZGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuY2NWYWx1ZU9sZC5sZW5ndGggJiYgdGhpcy5pbnB1dFZhbHVlLmluZGV4T2YodGhpcy5nZXRTeW5jVmFsdWUodGhpcy5jY1ZhbHVlT2xkKSkgPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5pbnB1dFZhbHVlLnJlcGxhY2UodGhpcy5nZXRTeW5jVmFsdWUodGhpcy5jY1ZhbHVlT2xkKSwgdGhpcy5nZXRTeW5jVmFsdWUodGhpcy5jY1ZhbHVlKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5nZXRTeW5jVmFsdWUodGhpcy5jY1ZhbHVlKSArIHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRQaG9uZU51bWJlcih0aGlzLmNjVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFN5bmNWYWx1ZShjb3VudHJ5Q29kZVZhbHVlOiBzdHJpbmcgPSBudWxsKSB7XHJcbiAgICAgICAgY29uc3QgdGVtcENDViA9IHRoaXMuY291bnRyeVZhbHVlcy5maW5kKGMgPT4gYy52YWx1ZSA9PT0gY291bnRyeUNvZGVWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIHRlbXBDQ1YgPyB0ZW1wQ0NWLnN5bmMgOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgY29uc3QgYXBpVmFsdWUgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBpZiAoYXBpVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdmFyIHZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgaWYgKGFwaVZhbHVlICYmIHRoaXMudmFsaWRhdGlvblJlZ2V4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXR0ID0gbmV3IFJlZ0V4cCh0aGlzLnZhbGlkYXRpb25SZWdleCk7XHJcbiAgICAgICAgICAgICAgICB2YWxpZCA9IHBhdHQudGVzdChhcGlWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gYXBpVmFsdWU7XHJcbiAgICAgICAgICAgIGxldCBjb3VudHJ5Q29kZVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY291bnRyeUNvZGVBcGlLZXkgJiYgdGhpcy5jb3VudHJ5Q29kZUFwaUtleS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGNvdW50cnlDb2RlVmFsdWUgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuY291bnRyeUNvZGVBcGlLZXlbMV0sIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc3luY1Bob25lTnVtYmVyKGNvdW50cnlDb2RlVmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUsIHZhbGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgaWYgKGdldF9kYXRhLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEudW5pcXVlX2lkcztcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuYXBwRGF0YS5pZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLmFwaUtleXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVuaXF1ZV9pZF92YWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2RlZmF1bHRfdmFsdWUnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF92YWx1ZSddIDogJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN5bmNQaG9uZU51bWJlcigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0dGluZyB0aGUgZm9ybSBmaWVsZCBkb2VzIG5vdCB3b3JrIGJlY2F1c2VcclxuICAgICAgICAgICAgICAgIC8vIG9uY2UgaXQgZ2V0cyByZXNldCBpZiBpdCBpcyBub3QgdG91Y2hlZCBhZ2FpbiB0aGVuIHRoZSBmaWVsZCB3b24ndCBnZXQgaW52YWxpZFxyXG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIGZvcm0gZ2V0cyBzdWJtaXR0ZWQgYW5kIGVycm9ycyB3b24ndCBzaG93IHVwXHJcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgZmllbGQgYXMgdW5Ub3VjaGVkLCBQcmlzdGluZSAsIHVwZGF0ZSB2YWx1ZSBhbiB2YWxpZGl0eSBhbmQgc2hvd0Vycm9yT25OZXh0IHRvIHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLnJlc2V0KHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmllbGQucmVzZXQodGhpcy5jY1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZpZWxkLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGaWVsZC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RGaWVsZC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRfZGF0YScsIHR5cGVvZiBnZXRfZGF0YSA9PT0gJ29iamVjdCcpO1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGdldF9kYXRhKS5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXModW5pcXVlX2lkX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdO1xyXG4gICAgICAgICAgICB0aGlzLnN5bmNQaG9uZU51bWJlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVsndW5pcXVlSWRzJ10uaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YVsndmFsdWVzJ10ubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bZGF0YVsndW5pcXVlSWRzJ10uaW5kZXhPZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bMF07XHJcbiAgICAgICAgICAgICAgICAvLyBvZiB0cmlnZ2VyVXBkYXRlIGlzIHRydWUgdGhlbiB1cGRhdGUgdGhlIGZpZWxkIHZhbHVlIG9yIHVwZGF0ZSB2YWx1ZSBhbmQgZW1pdCBjb25kaXRpb25zIGV2ZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10odGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc0VkaXRhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc1Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc01hbmRhdG9yeScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiICpuZ0lmPVwiaXNWaXNpYmxlXCI+XHJcblx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZERhdGEuZmllbGRfbGFiZWwhPScnXCI+XHJcblx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG5cdFx0XHRcdDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCJpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiIFtpbm5lckhUTUxdPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsXCI+PC9sYWJlbD5cclxuXHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDxzcGFuICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBjbGFzcz1cIm1hbmRldG9yeS1tYXJrXCI+ICo8L3NwYW4+XHJcblx0XHRcdDxidXR0b24gKm5nSWY9XCJoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0b1wiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwIFwiPlxyXG5cdFx0XHRcdGlcclxuXHRcdFx0PC9idXR0b24+XHJcblx0XHQ8L2Rpdj5cclxuXHJcblxyXG5cdFx0PGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInJvd1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJjb2wtM1wiPlxyXG5cdFx0XHRcdFx0PHNlbGVjdFxyXG5cdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1zZWxlY3Qge3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319IHt7ICF2YWxpZCB8fCAoc2VsZWN0RmllbGQuaW52YWxpZCAmJiBpc01hbmRhdG9yeSAmJiAoc2VsZWN0RmllbGQuZGlydHkgfHwgc2VsZWN0RmllbGQudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSAgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCJcclxuXHRcdFx0XHRcdFx0I3NlbGVjdEZpZWxkPVwibmdNb2RlbFwiIFthdHRyLmlkXT1cIidjb3VudHJ5XycraHRtbF9pZFwiIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICdmb250LWZhbWlseSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X25hbWUsXHJcbiAgICAgICAgICAnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuICAgICAgICAgICdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcbiAgICAgICAgICBjb2xvcjogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcbiAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJvcmRlcl9jb2xvcixcclxuICAgICAgICAgIGhlaWdodDogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX2hlaWdodCxcclxuICAgICAgICAgIHdpZHRoOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5iYWNrZ3JvdW5kX2NvbG9yIH1cIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBbKG5nTW9kZWwpXT1cImNjVmFsdWVcIlxyXG5cdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIidTZWxlY3QgYSBjb3VudHJ5IGNvZGUnXCIgW3JlcXVpcmVkXT1cImlzTWFuZGF0b3J5XCIgKGNoYW5nZSk9XCJzZXRDb3VudHJ5Q29kZSgpXCI+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gdmFsdWU9XCJcIiBkaXNhYmxlZD5TZWxlY3QgQ291bnRyeTwvb3B0aW9uPlxyXG5cdFx0XHRcdFx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgY291bnRyeVZhbHVlc1wiIHZhbHVlPVwie3tvcHQudmFsdWV9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7b3B0LmxhYmVsfX08L29wdGlvbj5cclxuXHRcdFx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpcGxlRXJyb3JNZXNzYWdlOyBlbHNlIHNpbmdsZUVycm9yTWVzc2FnZVwiPlxyXG5cdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcblx0XHRcdFx0XHRcdFx0XHQqbmdJZj1cInNlbGVjdEZpZWxkLmludmFsaWQgJiYgKHNlbGVjdEZpZWxkLmRpcnR5IHx8IHNlbGVjdEZpZWxkLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0IClcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJzZWxlY3RGaWVsZD8uZXJyb3JzLnJlcXVpcmVkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnkgJiYgbWVzc2FnZS50eXBlID09ICdNYW5kYXRvcnknICYmICFzZWxlY3RGaWVsZC52YWx1ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcblx0XHRcdFx0XHRcdFx0Km5nSWY9XCJzZWxlY3RGaWVsZC5pbnZhbGlkICYmIChzZWxlY3RGaWVsZC5kaXJ0eSB8fCBzZWxlY3RGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCApXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiAqbmdJZj1cInNlbGVjdEZpZWxkPy5lcnJvcnMucmVxdWlyZWRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbaW5uZXJIVE1MXT1cImVycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0W25nU3R5bGVdPVwieydjb2xvcic6IGVycm9yTWVzc2FnZURhdGEuY29sb3J9XCI+PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImNvbC05XCI+XHJcblx0XHRcdFx0XHQ8aW5wdXQgdHlwZT1cInt7IGhpZGUgPyAncGFzc3dvcmQnOid0ZXh0JyB9fVwiIHNob3dQYXNzd29yZCBzaG93TGFzdENoYXJEZWxheT1cInt7YWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX01hc2tOdW1iZXJMaW1pdCddID09PSAnMScgPyB0cnVlIDogZmFsc2V9fVwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fSB7eyAhdmFsaWQgfHwgKHRleHRGaWVsZC5pbnZhbGlkICYmIGlzTWFuZGF0b3J5ICYmICggdGV4dEZpZWxkLmRpcnR5IHx8IHRleHRGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCkpID8gJ2ludmFsaWQnIDogJ3ZhbGlkJyB9fVwiXHJcblx0XHRcdFx0XHRcdFthdHRyLmlkXT1cImh0bWxfaWRcIiBbcGF0dGVybl09XCJ2YWxpZGF0aW9uUmVnZXhcIiBbbmdTdHlsZV09XCJ7J2ZvbnQtZmFtaWx5JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfbmFtZSxcclxuXHRcdFx0XHQnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuXHRcdFx0XHQnZm9udC1zdHlsZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG5cdFx0XHRcdCdmb250LWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcblx0XHRcdFx0J2JvcmRlci1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5ib3JkZXJfY29sb3IsXHJcblx0XHRcdFx0J2hlaWdodCc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9oZWlnaHQsXHJcblx0XHRcdFx0J3dpZHRoJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX3dpZHRoLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3IgfVwiXHJcblx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1R5cGUgYSB2YWx1ZSBpbiAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuXHRcdFx0XHRcdFx0bWF4bGVuZ3RoPVwie3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0ID09ICcwJyA/ICcxMCc6IGZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fVwiXHJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIChrZXl1cCk9XCJvbktleSgkZXZlbnQsIHRleHRGaWVsZClcIlxyXG5cdFx0XHRcdFx0XHQoYmx1cik9XCJvblNlc3Npb25EYXRhVXBkYXRlZCh0ZXh0RmllbGQudmFsdWUsIHRleHRGaWVsZClcIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiAjdGV4dEZpZWxkPVwibmdNb2RlbFwiXHJcblx0XHRcdFx0XHRcdFtyZXF1aXJlZF09XCJpc01hbmRhdG9yeVwiIHBsYWNlaG9sZGVyPVwie3tmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dH19XCIgLz5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJtdWx0aXBsZUVycm9yTWVzc2FnZTsgZWxzZSBzaW5nbGVFcnJvck1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Km5nSWY9XCJ0ZXh0RmllbGQuaW52YWxpZCAmJiAodGV4dEZpZWxkLmRpcnR5IHx8IHRleHRGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQudmFsdWUgKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzLnJlcXVpcmVkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnkgJiYgbWVzc2FnZS50eXBlID09ICdNYW5kYXRvcnknICYmICF0ZXh0RmllbGQudmFsdWVcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PHAgKm5nSWY9XCJtZXNzYWdlLnR5cGUgPT0gJ21pbmxlbmd0aCcgJiYgdGV4dEZpZWxkLnZhbHVlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycy5wYXR0ZXJuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwibWVzc2FnZS50eXBlID09ICdSZWdleCcgJiYgdGV4dEZpZWxkLnZhbHVlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAjc2luZ2xlRXJyb3JNZXNzYWdlPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuXHRcdFx0XHRcdFx0XHQqbmdJZj1cInRleHRGaWVsZC5pbnZhbGlkICYmICh0ZXh0RmllbGQuZGlydHkgfHwgdGV4dEZpZWxkLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0IHx8IHRleHRGaWVsZC52YWx1ZSlcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwidGV4dEZpZWxkPy5lcnJvcnMucmVxdWlyZWQgfHwgdGV4dEZpZWxkPy5lcnJvcnMubWlubGVuZ3RoIHx8IHRleHRGaWVsZD8uZXJyb3JzLnBhdHRlcm5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbaW5uZXJIVE1MXT1cImVycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0XCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0W25nU3R5bGVdPVwieydjb2xvcic6IGVycm9yTWVzc2FnZURhdGEuY29sb3J9XCI+PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNob3dDb21wYXJpc29uRXJyb3IgfCBrZXl2YWx1ZVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwIFtuZ1N0eWxlXT1cInsnY29sb3InOiBpdGVtLnZhbHVlLmNvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7e2l0ZW0udmFsdWUubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG5cclxuPC9kaXY+Il19