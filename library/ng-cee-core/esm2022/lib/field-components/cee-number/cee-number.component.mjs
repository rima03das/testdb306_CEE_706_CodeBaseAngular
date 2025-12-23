import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { take } from 'rxjs/operators';
import { CommonUtil } from '../../utils/common-util';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { MatSliderModule } from '@angular/material/slider';
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
import * as i10 from "../../services/cee-api-service.service";
import * as i11 from "@angular/router";
import * as i12 from "@angular/forms";
import * as i13 from "@angular/common";
import * as i14 from "../../directives/tooltip/tooltip.directive";
import * as i15 from "@angular/material/slider";
const _c0 = ["textField"];
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c2 = a0 => ({ "color": a0 });
function CeeNumberComponent_div_0_ng_template_3_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_container_2_label_1_Template, 2, 1, "label", 15)(2, CeeNumberComponent_div_0_ng_template_3_ng_container_2_label_2_Template, 1, 1, "label", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeNumberComponent_div_0_ng_template_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeNumberComponent_div_0_ng_template_3_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-slider", 21)(2, "input", 22, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template_input_ngModelChange_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.valueChange()); })("keyup", function CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template_input_keyup_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onKeyUp()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r3 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("min", ctx_r0.AdditionalParameter["Min"])("max", ctx_r0.AdditionalParameter["Max"])("step", ctx_r0.AdditionalParameter["CEE_STEPPER_SLIDER"])("displayWith", ctx_r0.formatLabel);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", " ", !ctx_r0.valid || textField_r3.invalid && ctx_r0.isMandatory && (textField_r3.dirty || textField_r3.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r0.fieldData.field_character_limit == "0" ? "1000" : ctx_r0.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.fieldData.placeholder_text);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("required", ctx_r0.isMandatory);
    i0.ɵɵattribute("id", ctx_r0.html_id)("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Type a value in " + ctx_r0.fieldData.field_label)("min", ctx_r0.AdditionalParameter["Min"])("max", ctx_r0.AdditionalParameter["Max"]);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 23);
    i0.ɵɵlistener("click", function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.isEditable && ctx_r0.decrement()); });
    i0.ɵɵtext(2, "-");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 24, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template_input_keyup_3_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onKeyUp()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 25);
    i0.ɵɵlistener("click", function CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template_button_click_5_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.isEditable && ctx_r0.increment()); });
    i0.ɵɵtext(6, "+");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r5 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", " ", !ctx_r0.valid || textField_r5.invalid && ctx_r0.isMandatory && (textField_r5.dirty || textField_r5.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r0.fieldData.field_character_limit == "0" ? "1000" : ctx_r0.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.fieldData.placeholder_text);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(14, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color, ctx_r0.fieldData.field_style.border_color, ctx_r0.fieldData.field_style.field_height, ctx_r0.fieldData.field_style.field_width, ctx_r0.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("required", ctx_r0.isMandatory);
    i0.ɵɵattribute("id", ctx_r0.html_id)("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Type a value in " + ctx_r0.fieldData.field_label)("min", ctx_r0.AdditionalParameter["Min"])("max", ctx_r0.AdditionalParameter["Max"]);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r6 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, message_r6.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r6.message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27)(1, "div");
    i0.ɵɵtemplate(2, CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_div_1_p_2_Template, 2, 4, "p", 28);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r6 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r6.color && message_r6.message_text);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_div_1_Template, 3, 1, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField.dirty || ctx_r0.textField.touched || ctx_r0.showErrorOnNext || ctx_r0.textField.value);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_container_8_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.customErrorsValidation.getMessages(ctx_r0.appData.id, ctx_r0.textField.value));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r7.code).message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r7.type == "Mandatory" && !ctx_r0.textField.value);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r7.code).message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "minlength" && ctx_r0.textField.value);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 29);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r7.code).message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "Regex" && ctx_r0.textField.value);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 9)(2, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 9)(3, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField == null ? null : ctx_r0.textField.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField == null ? null : ctx_r0.textField.errors == null ? null : ctx_r0.textField.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField == null ? null : ctx_r0.textField.errors.pattern);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 26);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.textField.invalid && (ctx_r0.textField.dirty || ctx_r0.textField.touched || ctx_r0.showErrorOnNext || ctx_r0.textField.value));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 31);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("innerHTML", ctx_r0.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.errorMessageData.color));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.textField == null ? null : ctx_r0.textField.errors.required) || (ctx_r0.textField == null ? null : ctx_r0.textField.errors.minlength) || (ctx_r0.textField == null ? null : ctx_r0.textField.errors.pattern));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_div_0_Template, 2, 1, "div", 26);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r0.textField.invalid && (ctx_r0.textField.dirty || ctx_r0.textField.touched || ctx_r0.showErrorOnNext || ctx_r0.textField.value));
} }
function CeeNumberComponent_div_0_ng_template_3_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_container_0_Template, 2, 1, "ng-container", 13)(1, CeeNumberComponent_div_0_ng_template_3_ng_template_9_ng_template_1_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r8 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r8);
} }
function CeeNumberComponent_div_0_ng_template_3_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27)(2, "div")(3, "p", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r9 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, item_r9.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r9.value.message_text, "");
} }
function CeeNumberComponent_div_0_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 7)(1, "div", 8);
    i0.ɵɵtemplate(2, CeeNumberComponent_div_0_ng_template_3_ng_container_2_Template, 3, 2, "ng-container", 9)(3, CeeNumberComponent_div_0_ng_template_3_span_3_Template, 2, 0, "span", 10)(4, CeeNumberComponent_div_0_ng_template_3_button_4_Template, 2, 2, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 12);
    i0.ɵɵtemplate(6, CeeNumberComponent_div_0_ng_template_3_ng_container_6_Template, 4, 17, "ng-container", 9)(7, CeeNumberComponent_div_0_ng_template_3_ng_container_7_Template, 7, 23, "ng-container", 9)(8, CeeNumberComponent_div_0_ng_template_3_ng_container_8_Template, 2, 1, "ng-container", 13)(9, CeeNumberComponent_div_0_ng_template_3_ng_template_9_Template, 3, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(11, CeeNumberComponent_div_0_ng_template_3_ng_container_11_Template, 5, 4, "ng-container", 14);
    i0.ɵɵpipe(12, "keyvalue");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ceeError_r10 = i0.ɵɵreference(10);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] && ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] || ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] && ctx_r0.AdditionalParameter["CEE_ENABLE_SLIDER"] != "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.customCheck && ctx_r0.messages.length === 0)("ngIfElse", ceeError_r10);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(12, 8, ctx_r0.showComparisonError));
} }
function CeeNumberComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵelementContainerStart(1);
    i0.ɵɵelementContainer(2, 6);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(3, CeeNumberComponent_div_0_ng_template_3_Template, 13, 10, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const textFieldData_r11 = i0.ɵɵreference(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r11);
} }
export class CeeNumberComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    ceeApiService;
    router;
    textField;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    sessionKeyUtil;
    inputValue = '';
    html_id = '';
    AdditionalParameter = {};
    isSet = false;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router) {
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
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
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
        this.inputValue = this.fieldValue && !Array.isArray(this.fieldValue) ? Number(this.fieldValue).toString() : '';
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                this.AdditionalParameter[parameter.parameter_type] = parameter.value;
            }
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    decrement() {
        if ((this.AdditionalParameter['Min'] && Number(this.inputValue) > Number(this.AdditionalParameter['Min'])) || !this.AdditionalParameter['Min']) {
            this.inputValue = (Number(this.inputValue) - 1).toString();
            this.updateFieldData(this.inputValue);
            this.onComponentEvent('OnChangeValue');
        }
        this.onComponentEvent('OnClick');
    }
    increment() {
        if ((this.AdditionalParameter['Max'] && Number(this.inputValue) < Number(this.AdditionalParameter['Max'])) || !this.AdditionalParameter['Max']) {
            this.inputValue = (Number(this.inputValue) + 1).toString();
            this.updateFieldData(this.inputValue);
            this.onComponentEvent('OnChangeValue');
        }
        this.onComponentEvent('OnClick');
    }
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return `${value}`;
    }
    valueChange() {
        this.onKeyUp();
    }
    onKeyUp() {
        // console.log("onkey up inputValue: ",this.inputValue)
        if (this.AdditionalParameter['Max'] && Number(this.inputValue) > Number(this.AdditionalParameter['Max'])) {
            this.inputValue = Number(this.AdditionalParameter['Max']).toString();
        }
        if (this.AdditionalParameter['Min'] && Number(this.inputValue) < Number(this.AdditionalParameter['Min'])) {
            this.inputValue = Number(this.AdditionalParameter['Min']).toString();
        }
        this.updateFieldData(this.inputValue);
        this.onComponentEvent('OnKeyUp');
        this.onComponentEvent('OnChangeValue');
    }
    concatData = (res) => {
        if (res.fid === this.fieldData.unique_id) {
            let success = false;
            let data;
            this.appDataService.getIndividualAppData(res['fid']).pipe(take(1)).subscribe(r => {
                if (r.length > 0) {
                    if (res['fid'] == r[0].id) {
                        success = true;
                        data = r[0];
                    }
                }
            });
            if (success) {
                let concatArrays = [];
                let concatedStrings;
                for (let i = 0; i < res.concatValues.length; i++) {
                    if (localStorage.getItem('singleApiKey') === 'true') {
                        concatArrays.push(this.appDataService.getFieldDataByFieldId(res.concatValues[i]));
                    }
                    else {
                        concatArrays.push(this.appDataService.getFieldDataByApiKey(res.concatValues[i], 'request'));
                    }
                }
                concatedStrings = concatArrays.join(' ');
                this.appDataService.updateAppData(Object.assign({}, data, { visible: data.visible, editable: data.editable, mandatory: data.mandatory, value: concatedStrings }));
                this.inputValue = concatedStrings;
            }
        }
    };
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiData !== null) {
            if (!Array.isArray(apiData)) {
                this.inputValue = Number(apiData).toString();
                this.updateFieldData(this.inputValue);
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(apiKey, value);
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
                // TODO Update
                let value = '';
                this.inputValue = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.AdditionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.inputValue = paramter.value;
                            value = paramter.value;
                        }
                    }
                }
                this.updateFieldData(value);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.textField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.textField) {
                    this.textField.reset(value);
                    this.textField.control.markAsUntouched();
                    this.textField.control.markAsPristine();
                    this.textField.control.updateValueAndValidity();
                }
                return;
            }
        });
    }
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
            this.inputValue = get_data[unique_id_value];
            this.updateFieldData(this.inputValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // console.log('Data', data);
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
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']'
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
        if (changes.rowData && changes.rowData.currentValue && this.inputValue !== changes.rowData.currentValue.value) {
            this.inputValue = changes.rowData.currentValue.value;
        }
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
    static ɵfac = function CeeNumberComponent_Factory(t) { return new (t || CeeNumberComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeNumberComponent, selectors: [["app-cee-number"]], viewQuery: function CeeNumberComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["textFieldData", ""], ["ceeError", ""], ["textField", "ngModel"], ["singleErrorMessage", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [3, "ngTemplateOutlet"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field", "number-wrapper"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], ["showTickMarks", "", "discrete", "", 3, "min", "max", "step", "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "keyup", "maxlength", "ngModel", "disabled", "required", "placeholder"], [1, "number-down", "btn", "btn-primary", 3, "click"], ["type", "number", 3, "ngModelChange", "keyup", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], [1, "number-up", "btn", "btn-primary", 3, "click"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "innerHTML", "ngStyle", 4, "ngIf"], [3, "innerHTML", "ngStyle"]], template: function CeeNumberComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeNumberComponent_div_0_Template, 5, 1, "div", 4);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgTemplateOutlet, MatTooltipModule, NgStyle, FormsModule, i12.DefaultValueAccessor, i12.NumberValueAccessor, i12.NgControlStatus, i12.RequiredValidator, i12.MaxLengthValidator, i12.NgModel, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, i14.TooltipDirective, MatSliderModule, i15.MatSlider, i15.MatSliderThumb], styles: ["input[_ngcontent-%COMP%]::-webkit-outer-spin-button, input[_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number][_ngcontent-%COMP%]{-moz-appearance:textfield}.number-wrapper[_ngcontent-%COMP%]{position:relative;width:150px}.number-wrapper[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:100%;padding-left:45px;padding-right:45px;text-align:center}.number-wrapper[_ngcontent-%COMP%]   .number-down[_ngcontent-%COMP%], .number-wrapper[_ngcontent-%COMP%]   .number-up[_ngcontent-%COMP%]{position:absolute;width:35px;font-weight:700}.number-wrapper[_ngcontent-%COMP%]   .number-up[_ngcontent-%COMP%]{right:0;top:0}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeNumberComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-number', standalone: true, imports: [NgTemplateOutlet, MatTooltipModule, NgStyle, FormsModule, CommonModule, TooltipModule, MatSliderModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<ng-container>\r\n\t\t<ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n\t</ng-container>\r\n\r\n\t<ng-template #textFieldData>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"form-label\">\r\n\t\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n\t\t\t\t\ti\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-field number-wrapper\">\r\n\t\t\t\t<ng-container *ngIf=\"AdditionalParameter['CEE_ENABLE_SLIDER'] && AdditionalParameter['CEE_ENABLE_SLIDER'] == 'true'\">\r\n\t\t\t\t\t<mat-slider [min]=\"AdditionalParameter['Min']\" [max]=\"AdditionalParameter['Max']\" [step]=\"AdditionalParameter['CEE_STEPPER_SLIDER']\" showTickMarks discrete [displayWith]=\"formatLabel\">\r\n\t\t\t\t\t\t<input matSliderThumb\r\n\t\t\t\t\t\tclass=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField.invalid && isMandatory && ( textField.dirty || textField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t[attr.id]=\"html_id\" [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n\t\t\t\t\t\tmaxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n\t\t\t\t\t\t[(ngModel)]=\"inputValue\" (ngModelChange)=\"valueChange()\" [disabled]=\"!isEditable\" #textField=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t\tplaceholder=\"{{fieldData.placeholder_text}}\" [attr.min]=\"AdditionalParameter['Min']\"\r\n\t\t\t\t\t\t[attr.max]=\"AdditionalParameter['Max']\" (keyup)=\"onKeyUp()\">\r\n\t\t\t\t\t</mat-slider>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"!AdditionalParameter['CEE_ENABLE_SLIDER'] || (AdditionalParameter['CEE_ENABLE_SLIDER'] && AdditionalParameter['CEE_ENABLE_SLIDER'] != 'true')\">\r\n\t\t\t\t\t<button class=\"number-down btn btn-primary\" (click)=\"isEditable && decrement()\">-</button>\r\n\t\t\t\t\t<input type=\"number\"\r\n\t\t\t\t\t\tclass=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField.invalid && isMandatory && ( textField.dirty || textField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t[attr.id]=\"html_id\" [ngStyle]=\"{'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t'font-color': fieldData.field_style.font_color,\r\n\t\t\t\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\t\t\t\t'height': fieldData.field_style.field_height,\r\n\t\t\t\t\t\t'width': fieldData.field_style.field_width,\r\n\t\t\t\t\t\t'background-color': fieldData.field_style.background_color\r\n\t\t\t\t\t\t}\" [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n\t\t\t\t\t\tmaxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n\t\t\t\t\t\t[(ngModel)]=\"inputValue\" [disabled]=\"!isEditable\" #textField=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t\tplaceholder=\"{{fieldData.placeholder_text}}\" [attr.min]=\"AdditionalParameter['Min']\"\r\n\t\t\t\t\t\t[attr.max]=\"AdditionalParameter['Max']\" (keyup)=\"onKeyUp()\" />\r\n\t\t\t\t\t<button class=\"number-up btn btn-primary\" (click)=\"isEditable && increment()\">+</button>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t\r\n\t\t\t\t\r\n\t\t\t\t<ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField.value)\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"( textField.dirty || textField.touched || showErrorOnNext || textField.value )\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.color && message.message_text\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t\t\t\t\t\t{{message.message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-template #ceeError>\r\n\t\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext || textField.value )\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors?.minlength\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength' && textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex' && textField.value\"\r\n\t\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext || textField.value)\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n</div>\r\n", styles: ["input::-webkit-outer-spin-button,input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}input[type=number]{-moz-appearance:textfield}.number-wrapper{position:relative;width:150px}.number-wrapper input{width:100%;padding-left:45px;padding-right:45px;text-align:center}.number-wrapper .number-down,.number-wrapper .number-up{position:absolute;width:35px;font-weight:700}.number-wrapper .number-up{right:0;top:0}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.CeeApiService }, { type: i11.Router }], { textField: [{
            type: ViewChild,
            args: ['textField']
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeNumberComponent, { className: "CeeNumberComponent", filePath: "lib\\field-components\\cee-number\\cee-number.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLW51bWJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtbnVtYmVyL2NlZS1udW1iZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLW51bWJlci9jZWUtbnVtYmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE2RCxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFRM0ksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUc5RCxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEMsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBR3JELE9BQU8sRUFBRSxXQUFXLEVBQVcsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzFFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUMsZUFBZSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ2JwRCxpQ0FBcUU7SUFBQSxZQUF5QjtJ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LGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzlFO0lBQ0wsQ0FBQzs0RUE3UlEsa0JBQWtCOzZEQUFsQixrQkFBa0I7Ozs7OztZQy9CL0IsbUVBQTZDOztZQUFqQixvQ0FBZTs0QkQ0QjdCLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLE9BQU8sRUFBRSxXQUFXLHNJQUFFLFlBQVksMkNBQUUsYUFBYSx3QkFBRSxlQUFlOztpRkFHdkcsa0JBQWtCO2NBUjlCLFNBQVM7MkJBQ0ksZ0JBQWdCLGNBR2QsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGVBQWUsQ0FBQzttV0FJekYsU0FBUztrQkFBaEMsU0FBUzttQkFBQyxXQUFXO1lBRUwsTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7O2tGQVhHLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3Q2hpbGQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBTZXNzaW9uS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24ta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nU3R5bGUsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5pbXBvcnQge01hdFNsaWRlck1vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2xpZGVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtbnVtYmVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtbnVtYmVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1udW1iZXIuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmdUZW1wbGF0ZU91dGxldCwgTWF0VG9vbHRpcE1vZHVsZSwgTmdTdHlsZSwgRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgVG9vbHRpcE1vZHVsZSwgTWF0U2xpZGVyTW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENlZU51bWJlckNvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBAVmlld0NoaWxkKCd0ZXh0RmllbGQnKSB0ZXh0RmllbGQ6IE5nTW9kZWw7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwcmltYXJ5S2V5SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogb2JqZWN0O1xyXG5cclxuICAgIGRlY2xhcmUgc2Vzc2lvbktleVV0aWw6IFNlc3Npb25LZXlVdGlsO1xyXG4gICAgaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgaHRtbF9pZCA9ICcnO1xyXG4gICAgQWRkaXRpb25hbFBhcmFtZXRlcjogYW55ID0ge307XHJcbiAgICBpc1NldCA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLCBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyKTtcclxuICAgICAgICB0aGlzLnNlc3Npb25LZXlVdGlsID0gbmV3IFNlc3Npb25LZXlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBGb3IgdW5pcXVlIGh0bWwgaWRcclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLmZpZWxkRGF0YS5odG1sX2lkO1xyXG4gICAgICAgIC8vIEVORFxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZSAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLmZpZWxkVmFsdWUpID8gTnVtYmVyKHRoaXMuZmllbGRWYWx1ZSkudG9TdHJpbmcoKSA6ICcnO1xyXG5cclxuICAgICAgICBpZih0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW1ldGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtZXRlci52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2ZvciBWYWxpZGF0ZSBBTkQgTWFuZGF0b3J5IGVycm9yXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdERhdGEgJiYgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVt0aGlzLmZpZWxkRGF0YS5odG1sX2lkXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZmllbGREYXRhLmh0bWxfaWQpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlY3JlbWVudCgpIHtcclxuICAgICAgICBpZiAoKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnTWluJ10gJiYgTnVtYmVyKHRoaXMuaW5wdXRWYWx1ZSkgPiBOdW1iZXIodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydNaW4nXSkpIHx8ICF0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01pbiddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IChOdW1iZXIodGhpcy5pbnB1dFZhbHVlKSAtIDEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DaGFuZ2VWYWx1ZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBpbmNyZW1lbnQoKSB7XHJcbiAgICAgICAgaWYgKCh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heCddICYmIE51bWJlcih0aGlzLmlucHV0VmFsdWUpIDwgTnVtYmVyKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnTWF4J10pKSB8fCAhdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydNYXgnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAoTnVtYmVyKHRoaXMuaW5wdXRWYWx1ZSkgKyAxKS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2hhbmdlVmFsdWUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZm9ybWF0TGFiZWwodmFsdWU6IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKHZhbHVlID49IDEwMDApIHtcclxuICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKHZhbHVlIC8gMTAwMCkgKyAnayc7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgcmV0dXJuIGAke3ZhbHVlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsdWVDaGFuZ2UoKSB7XHJcbiAgICAgICAgdGhpcy5vbktleVVwKClcclxuICAgIH1cclxuXHJcbiAgICBvbktleVVwKCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25rZXkgdXAgaW5wdXRWYWx1ZTogXCIsdGhpcy5pbnB1dFZhbHVlKVxyXG4gICAgICAgIGlmICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heCddICYmIE51bWJlcih0aGlzLmlucHV0VmFsdWUpID4gTnVtYmVyKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnTWF4J10pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IE51bWJlcih0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heCddKS50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydNaW4nXSAmJiBOdW1iZXIodGhpcy5pbnB1dFZhbHVlKSA8IE51bWJlcih0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01pbiddKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBOdW1iZXIodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydNaW4nXSkudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uS2V5VXAnKTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2hhbmdlVmFsdWUnKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhID0gKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZmlkID09PSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0SW5kaXZpZHVhbEFwcERhdGEocmVzWydmaWQnXSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUociA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1snZmlkJ10gPT0gclswXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb25jYXRBcnJheXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGxldCBjb25jYXRlZFN0cmluZ3M6IHN0cmluZztcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmNvbmNhdFZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jYXRBcnJheXMucHVzaCh0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChyZXMuY29uY2F0VmFsdWVzW2ldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uY2F0QXJyYXlzLnB1c2godGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUFwaUtleShyZXMuY29uY2F0VmFsdWVzW2ldLCAncmVxdWVzdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25jYXRlZFN0cmluZ3MgPSBjb25jYXRBcnJheXMuam9pbignICcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKE9iamVjdC5hc3NpZ24oe30sIGRhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgeyB2aXNpYmxlOiBkYXRhLnZpc2libGUsIGVkaXRhYmxlOiBkYXRhLmVkaXRhYmxlLCBtYW5kYXRvcnk6IGRhdGEubWFuZGF0b3J5LCB2YWx1ZTogY29uY2F0ZWRTdHJpbmdzIH0pKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGNvbmNhdGVkU3RyaW5ncztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIGlmIChhcGlEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcGlEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gTnVtYmVyKGFwaURhdGEpLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzdXBlci5vblNldFNlc3Npb25EYXRhKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZShhcGlLZXksIHZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgaWYgKGdldF9kYXRhLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEudW5pcXVlX2lkcztcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuYXBwRGF0YS5pZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLmFwaUtleXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgaWYgKHVuaXF1ZV9pZF92YWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXNldHRpbmcgdGhlIGZvcm0gZmllbGQgZG9lcyBub3Qgd29yayBiZWNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBvbmNlIGl0IGdldHMgcmVzZXQgaWYgaXQgaXMgbm90IHRvdWNoZWQgYWdhaW4gdGhlbiB0aGUgZmllbGQgd29uJ3QgZ2V0IGludmFsaWRcclxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHRoZSBmb3JtIGdldHMgc3VibWl0dGVkIGFuZCBlcnJvcnMgd29uJ3Qgc2hvdyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGZpZWxkIGFzIHVuVG91Y2hlZCwgUHJpc3RpbmUgLCB1cGRhdGUgdmFsdWUgYW4gdmFsaWRpdHkgYW5kIHNob3dFcnJvck9uTmV4dCB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRleHRGaWVsZC5jb250cm9sLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5yZXNldCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDdXN0b21GdW5jdGlvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRfZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZ2V0X2RhdGEpLmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gdGhpcy5maWVsZERhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5pbmNsdWRlcyh1bmlxdWVfaWRfdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGdldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBkYXRhWyd2YWx1ZXMnXS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVtkYXRhWyd1bmlxdWVJZHMnXS5pbmRleE9mKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCldIDpcclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVswXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdEYXRhJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10odGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc3QgY2hhbmdlTWFwID0ge1xyXG4gICAgICAgIC8vICAgICBmaWVsZF9sYWJlbDogJ2ZpZWxkRGF0YS5maWVsZF9sYWJlbCcsXHJcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyX3RleHQ6ICdmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCcsXHJcbiAgICAgICAgLy8gICAgIHRvb2x0aXA6ICdmaWVsZERhdGEudG9vbHRpcCcsXHJcbiAgICAgICAgLy8gICAgICdhZGRpdGlvbmFsX3BhcmFtZXRlcnNbKl1BcmlhLUxhYmVsJzogJ0FkZGl0aW9uYWxQYXJhbWV0ZXJbXFwnQXJpYS1MYWJlbFxcJ10nXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBmb3IgKGNvbnN0IHZhbHVlIG9mIE9iamVjdC5rZXlzKGNoYW5nZU1hcCkpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbGFuZ1ZhbCA9IHRoaXMuc3dpdGNoTGFuZyh2YWx1ZSwgZGF0YSwgY2hhbmdlTWFwKTtcclxuICAgICAgICAvLyAgICAgaWYgKGxhbmdWYWwpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXNbbGFuZ1ZhbC5rZXldID0gbGFuZ1ZhbC52YWw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhICYmIGNoYW5nZXMucm9vdERhdGEuY3VycmVudFZhbHVlLmxhbmdDaGFuZ2VkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlTGFuZ3VhZ2UoY2hhbmdlcy5maWVsZERhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnJvd0RhdGEgJiYgY2hhbmdlcy5yb3dEYXRhLmN1cnJlbnRWYWx1ZSAmJiB0aGlzLmlucHV0VmFsdWUgIT09IGNoYW5nZXMucm93RGF0YS5jdXJyZW50VmFsdWUudmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gY2hhbmdlcy5yb3dEYXRhLmN1cnJlbnRWYWx1ZS52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNFZGl0YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG5cdDxuZy1jb250YWluZXI+XHJcblx0XHQ8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cInRleHRGaWVsZERhdGFcIj48L25nLWNvbnRhaW5lcj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0PG5nLXRlbXBsYXRlICN0ZXh0RmllbGREYXRhPlxyXG5cdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuXHRcdFx0XHRcdFx0W2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBjbGFzcz1cIm1hbmRldG9yeS1tYXJrXCI+ICo8L3NwYW4+XHJcblx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+XHJcblx0XHRcdFx0XHRpXHJcblx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBudW1iZXItd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJBZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRU5BQkxFX1NMSURFUiddICYmIEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FTkFCTEVfU0xJREVSJ10gPT0gJ3RydWUnXCI+XHJcblx0XHRcdFx0XHQ8bWF0LXNsaWRlciBbbWluXT1cIkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01pbiddXCIgW21heF09XCJBZGRpdGlvbmFsUGFyYW1ldGVyWydNYXgnXVwiIFtzdGVwXT1cIkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TVEVQUEVSX1NMSURFUiddXCIgc2hvd1RpY2tNYXJrcyBkaXNjcmV0ZSBbZGlzcGxheVdpdGhdPVwiZm9ybWF0TGFiZWxcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IG1hdFNsaWRlclRodW1iXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwiZm9ybS1jb250cm9sIHt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fSB7eyAhdmFsaWQgfHwgKHRleHRGaWVsZC5pbnZhbGlkICYmIGlzTWFuZGF0b3J5ICYmICggdGV4dEZpZWxkLmRpcnR5IHx8IHRleHRGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCkpID8gJ2ludmFsaWQnIDogJ3ZhbGlkJyB9fVwiXHJcblx0XHRcdFx0XHRcdFthdHRyLmlkXT1cImh0bWxfaWRcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6ICdUeXBlIGEgdmFsdWUgaW4gJyArIGZpZWxkRGF0YS5maWVsZF9sYWJlbFwiXHJcblx0XHRcdFx0XHRcdG1heGxlbmd0aD1cInt7ZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdCA9PSAnMCcgPyAnMTAwMCc6IGZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fVwiXHJcblx0XHRcdFx0XHRcdFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cInZhbHVlQ2hhbmdlKClcIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiAjdGV4dEZpZWxkPVwibmdNb2RlbFwiIFtyZXF1aXJlZF09XCJpc01hbmRhdG9yeVwiXHJcblx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyPVwie3tmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dH19XCIgW2F0dHIubWluXT1cIkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01pbiddXCJcclxuXHRcdFx0XHRcdFx0W2F0dHIubWF4XT1cIkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heCddXCIgKGtleXVwKT1cIm9uS2V5VXAoKVwiPlxyXG5cdFx0XHRcdFx0PC9tYXQtc2xpZGVyPlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VOQUJMRV9TTElERVInXSB8fCAoQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VOQUJMRV9TTElERVInXSAmJiBBZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRU5BQkxFX1NMSURFUiddICE9ICd0cnVlJylcIj5cclxuXHRcdFx0XHRcdDxidXR0b24gY2xhc3M9XCJudW1iZXItZG93biBidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiaXNFZGl0YWJsZSAmJiBkZWNyZW1lbnQoKVwiPi08L2J1dHRvbj5cclxuXHRcdFx0XHRcdDxpbnB1dCB0eXBlPVwibnVtYmVyXCJcclxuXHRcdFx0XHRcdFx0Y2xhc3M9XCJmb3JtLWNvbnRyb2wge3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319IHt7ICF2YWxpZCB8fCAodGV4dEZpZWxkLmludmFsaWQgJiYgaXNNYW5kYXRvcnkgJiYgKCB0ZXh0RmllbGQuZGlydHkgfHwgdGV4dEZpZWxkLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCJcclxuXHRcdFx0XHRcdFx0W2F0dHIuaWRdPVwiaHRtbF9pZFwiIFtuZ1N0eWxlXT1cInsnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG5cdFx0XHRcdFx0XHQnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuXHRcdFx0XHRcdFx0J2ZvbnQtc3R5bGUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zdHlsZSxcclxuXHRcdFx0XHRcdFx0J2ZvbnQtY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvcixcclxuXHRcdFx0XHRcdFx0J2JvcmRlci1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5ib3JkZXJfY29sb3IsXHJcblx0XHRcdFx0XHRcdCdoZWlnaHQnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfaGVpZ2h0LFxyXG5cdFx0XHRcdFx0XHQnd2lkdGgnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcblx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3JcclxuXHRcdFx0XHRcdFx0fVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiQWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gQWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1R5cGUgYSB2YWx1ZSBpbiAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuXHRcdFx0XHRcdFx0bWF4bGVuZ3RoPVwie3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0ID09ICcwJyA/ICcxMDAwJzogZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19XCJcclxuXHRcdFx0XHRcdFx0WyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgI3RleHRGaWVsZD1cIm5nTW9kZWxcIiBbcmVxdWlyZWRdPVwiaXNNYW5kYXRvcnlcIlxyXG5cdFx0XHRcdFx0XHRwbGFjZWhvbGRlcj1cInt7ZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHR9fVwiIFthdHRyLm1pbl09XCJBZGRpdGlvbmFsUGFyYW1ldGVyWydNaW4nXVwiXHJcblx0XHRcdFx0XHRcdFthdHRyLm1heF09XCJBZGRpdGlvbmFsUGFyYW1ldGVyWydNYXgnXVwiIChrZXl1cCk9XCJvbktleVVwKClcIiAvPlxyXG5cdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cIm51bWJlci11cCBidG4gYnRuLXByaW1hcnlcIiAoY2xpY2spPVwiaXNFZGl0YWJsZSAmJiBpbmNyZW1lbnQoKVwiPis8L2J1dHRvbj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tQ2hlY2sgJiYgbWVzc2FnZXMubGVuZ3RoID09PSAwLCBlbHNlIGNlZUVycm9yXCI+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIGN1c3RvbUVycm9yc1ZhbGlkYXRpb24uZ2V0TWVzc2FnZXMoYXBwRGF0YS5pZCwgdGV4dEZpZWxkLnZhbHVlKVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuXHRcdFx0XHRcdFx0XHQqbmdJZj1cIiggdGV4dEZpZWxkLmRpcnR5IHx8IHRleHRGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQudmFsdWUgKVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCAqbmdJZj1cIm1lc3NhZ2UuY29sb3IgJiYgbWVzc2FnZS5tZXNzYWdlX3RleHRcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogbWVzc2FnZS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3ttZXNzYWdlLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSAjY2VlRXJyb3I+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuXHRcdFx0XHRcdFx0XHRcdCpuZ0lmPVwidGV4dEZpZWxkLmludmFsaWQgJiYgKHRleHRGaWVsZC5kaXJ0eSB8fCB0ZXh0RmllbGQudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQgfHwgdGV4dEZpZWxkLnZhbHVlIClcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycy5yZXF1aXJlZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCAqbmdJZj1cImlzTWFuZGF0b3J5ICYmIG1lc3NhZ2UudHlwZSA9PSAnTWFuZGF0b3J5JyAmJiAhdGV4dEZpZWxkLnZhbHVlXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycz8ubWlubGVuZ3RoXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwibWVzc2FnZS50eXBlID09ICdtaW5sZW5ndGgnICYmIHRleHRGaWVsZC52YWx1ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwidGV4dEZpZWxkPy5lcnJvcnMucGF0dGVyblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnUmVnZXgnICYmIHRleHRGaWVsZC52YWx1ZVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0W25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcblx0XHRcdFx0XHRcdFx0Km5nSWY9XCJ0ZXh0RmllbGQuaW52YWxpZCAmJiAodGV4dEZpZWxkLmRpcnR5IHx8IHRleHRGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQudmFsdWUpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzLnJlcXVpcmVkIHx8IHRleHRGaWVsZD8uZXJyb3JzLm1pbmxlbmd0aCB8fCB0ZXh0RmllbGQ/LmVycm9ycy5wYXR0ZXJuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCAqbmdJZj1cImlzTWFuZGF0b3J5XCIgW2lubmVySFRNTF09XCJlcnJvck1lc3NhZ2VEYXRhLm1lc3NhZ2VfdGV4dFwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFtuZ1N0eWxlXT1cInsnY29sb3InOiBlcnJvck1lc3NhZ2VEYXRhLmNvbG9yfVwiPjwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuIl19