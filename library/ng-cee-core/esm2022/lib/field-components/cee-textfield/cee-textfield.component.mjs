import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { WfeEncryptionUtil } from '../../utils/wfe-encryption-util';
import { debounceTime, filter, take } from 'rxjs/operators';
import { CommonUtil } from '../../utils/common-util';
import { Subject, Subscription } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CalculationUtil } from '../../utils/calculation';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CustomTooltipDirective } from '../../directives/app.directive';
import { NgClass, NgStyle, NgSwitch, NgTemplateOutlet } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ShowPasswordDirective } from '../../directives/showPassword/showPassword.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { SeparatorDirective } from '../../directives/thousandSeparator/separator.directive';
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
import * as i12 from "@angular/material/form-field";
import * as i13 from "@angular/material/input";
import * as i14 from "@angular/forms";
import * as i15 from "@angular/material/icon";
import * as i16 from "@angular/common";
import * as i17 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["textField"];
const _c1 = ["inputField"];
const _c2 = a0 => ({ "input-group": a0 });
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c4 = a0 => ({ "color": a0 });
const _c5 = () => ({ "Search": "default" });
function CeeTextfieldComponent_ng_container_0_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textFieldData_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r1);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementContainer(2, 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textFieldData_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r1);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 26);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_label_1_Template, 2, 1, "label", 23)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_label_2_Template, 1, 1, "label", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 27);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 34)(1, "span", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.inputPrefix);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 36, 5);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_paste_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_copy_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_cut_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r3); const textField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r4)); })("keydown", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r3); const textField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r4)); })("blur", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r3); const textField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r4 == null ? null : textField_r4.value, textField_r4)); })("focus", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onFocus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r4 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r4 == null ? null : textField_r4.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r4 == null ? null : textField_r4.dirty) ? ctx_r1.maskDirty : textField_r4 == null ? null : textField_r4.dirty) || (textField_r4 == null ? null : textField_r4.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵpropertyInterpolate("type", ctx_r1.inputType);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("pattern", !ctx_r1.maskString ? ctx_r1.validationRegex : "")("ngStyle", i0.ɵɵpureFunction8(21, _c3, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label)("min", ctx_r1.additionalParameter["Min"])("max", ctx_r1.additionalParameter["Max"]);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 37, 6);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_paste_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_copy_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_cut_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r5); const textField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r6)); })("keydown", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_keydown_1_listener($event) { i0.ɵɵrestoreView(_r5); const textField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r6)); })("blur", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r5); const textField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r6 == null ? null : textField_r6.value, textField_r6)); })("focus", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_focus_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onFocus($event)); })("keydown.enter", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template_input_keydown_enter_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.focusedInputOnKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r6 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r6 == null ? null : textField_r6.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r6 == null ? null : textField_r6.dirty) ? ctx_r1.maskDirty : textField_r6 == null ? null : textField_r6.dirty) || (textField_r6 == null ? null : textField_r6.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵpropertyInterpolate("type", ctx_r1.inputType);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("pattern", !ctx_r1.maskString ? ctx_r1.validationRegex : "")("ngStyle", i0.ɵɵpureFunction8(21, _c3, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label)("min", ctx_r1.additionalParameter["Min"])("max", ctx_r1.additionalParameter["Max"]);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.additionalParameter["ClearButton"]);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.additionalParameter["ClearButton"], i0.ɵɵsanitizeHtml);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_1_Template, 2, 1, "span", 38)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_span_2_Template, 1, 1, "span", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.additionalParameter["ClearButton"]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.additionalParameter["ClearButton"]));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 42)(1, "span", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.inputSuffix);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_1_Template, 2, 7, "span", 44)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_2_Template, 2, 7, "span", 44)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_3_Template, 2, 6, "span", 44)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_span_4_Template, 2, 6, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngSwitch", ctx_r1.characterCount.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Count");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Remaining");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Total");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "CharRemaining");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, message_r9.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r9.message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div");
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_div_1_p_2_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r9.color && message_r9.message_text);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_div_1_Template, 3, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.mask && (ctx_r1.textField == null ? null : ctx_r1.textField.dirty) ? ctx_r1.maskDirty : ctx_r1.textField == null ? null : ctx_r1.textField.dirty) || (ctx_r1.textField == null ? null : ctx_r1.textField.touched) || ctx_r1.showErrorOnNext || (ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r10.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r10.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r10.type == "Mandatory" && !(ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r10.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r10.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_2_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r10.type == "minlength" && (ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r10.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r10.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_3_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r10.type == "Regex" && (ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_1_Template, 2, 1, "div", 19)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_2_Template, 2, 1, "div", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_div_3_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.textField == null ? null : ctx_r1.textField.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.textField == null ? null : ctx_r1.textField.errors == null ? null : ctx_r1.textField.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.textField == null ? null : ctx_r1.textField.errors.pattern);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.getRegexMessage(message_r10.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.getRegexMessage(message_r10.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r10.type == "Regex" && (ctx_r1.textField == null ? null : ctx_r1.textField.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isDataFormatWithRegex && !ctx_r1.isValid);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 47);
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_2_Template, 4, 3, "ng-container", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_ng_container_3_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.textField == null ? null : ctx_r1.textField.invalid) && ((ctx_r1.mask && (ctx_r1.textField == null ? null : ctx_r1.textField.dirty) ? ctx_r1.maskDirty : ctx_r1.textField == null ? null : ctx_r1.textField.dirty) || (ctx_r1.textField == null ? null : ctx_r1.textField.touched) || ctx_r1.showErrorOnNext || (ctx_r1.textField == null ? null : ctx_r1.textField.value)));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.valid || (ctx_r1.textField == null ? null : ctx_r1.textField.invalid) && ((ctx_r1.mask && (ctx_r1.textField == null ? null : ctx_r1.textField.dirty) ? ctx_r1.maskDirty : ctx_r1.textField == null ? null : ctx_r1.textField.dirty) || (ctx_r1.textField == null ? null : ctx_r1.textField.touched) || ctx_r1.showErrorOnNext || (ctx_r1.textField == null ? null : ctx_r1.textField.value)));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_ng_container_1_Template, 4, 2, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 50);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.textField == null ? null : ctx_r1.textField.errors.required) || (ctx_r1.textField == null ? null : ctx_r1.textField.errors.minlength) || (ctx_r1.textField == null ? null : ctx_r1.textField.errors.pattern));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_div_0_Template, 2, 1, "div", 46);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngIf", (ctx_r1.textField == null ? null : ctx_r1.textField.invalid) && ((ctx_r1.mask && (ctx_r1.textField == null ? null : ctx_r1.textField.dirty) ? ctx_r1.maskDirty : ctx_r1.textField == null ? null : ctx_r1.textField.dirty) || (ctx_r1.textField == null ? null : ctx_r1.textField.touched) || ctx_r1.showErrorOnNext || (ctx_r1.textField == null ? null : ctx_r1.textField.value)));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_ng_template_1_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r11 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r11);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 47)(2, "div")(3, "p", 45);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r12.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r12.value.message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_1_Template, 3, 1, "div", 30)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_2_Template, 3, 30, "ng-container", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_3_Template, 4, 30, "ng-container", 19)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_4_Template, 3, 2, "ng-container", 19)(5, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_5_Template, 3, 1, "div", 31)(6, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_div_6_Template, 5, 5, "div", 32)(7, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_7_Template, 2, 1, "ng-container", 11)(8, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_template_8_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(10, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_ng_container_10_Template, 5, 4, "ng-container", 33);
    i0.ɵɵpipe(11, "keyvalue");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ceeError_r13 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(12, _c2, ctx_r1.inputPrefix || ctx_r1.inputSuffix));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputPrefix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isThousandSeparatorEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isThousandSeparatorEnabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable && ctx_r1.additionalParameter["ClearButton"] && ctx_r1.inputValue.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputSuffix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck && ctx_r1.messages.length === 0)("ngIfElse", ceeError_r13);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 10, ctx_r1.showComparisonError));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 40);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_1_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.additionalParameter["ClearButton"]);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_2_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 41);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_2_Template_span_click_0_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.additionalParameter["ClearButton"], i0.ɵɵsanitizeHtml);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_1_Template, 2, 1, "span", 38)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_span_2_Template, 1, 1, "span", 39);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.additionalParameter["ClearButton"]));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.additionalParameter["ClearButton"]));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_1_Template, 2, 7, "span", 44)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_2_Template, 2, 7, "span", 44)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_3_Template, 2, 6, "span", 44)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_span_4_Template, 2, 6, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngSwitch", ctx_r1.characterCount.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Count");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Remaining");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Total");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "CharRemaining");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r18 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, message_r18.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r18.message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div");
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_div_1_p_2_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r18 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r18.color && message_r18.message_text);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_div_1_Template, 3, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.mask && (textField_r15 == null ? null : textField_r15.dirty) ? ctx_r1.maskDirty : textField_r15 == null ? null : textField_r15.dirty) || (textField_r15 == null ? null : textField_r15.touched) || ctx_r1.showErrorOnNext || (textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r19.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r19.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r19.type == "Mandatory" && !(textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r19.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r19.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r19.type == "minlength" && (textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r19.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r19.code).message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r19 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r19.type == "Regex" && (textField_r15 == null ? null : textField_r15.value));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 19)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(4);
    const textField_r15 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r15 == null ? null : textField_r15.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r15 == null ? null : textField_r15.errors == null ? null : textField_r15.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r15 == null ? null : textField_r15.errors.pattern);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r15 == null ? null : textField_r15.invalid) && ((ctx_r1.mask && (textField_r15 == null ? null : textField_r15.dirty) ? ctx_r1.maskDirty : textField_r15 == null ? null : textField_r15.dirty) || (textField_r15 == null ? null : textField_r15.touched) || ctx_r1.showErrorOnNext || (textField_r15 == null ? null : textField_r15.value)));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 50);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r15 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r15 == null ? null : textField_r15.errors.required) || (textField_r15 == null ? null : textField_r15.errors.minlength) || (textField_r15 == null ? null : textField_r15.errors.pattern));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_div_0_Template, 2, 1, "div", 46);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r15 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", (textField_r15 == null ? null : textField_r15.invalid) && ((ctx_r1.mask && (textField_r15 == null ? null : textField_r15.dirty) ? ctx_r1.maskDirty : textField_r15 == null ? null : textField_r15.dirty) || (textField_r15 == null ? null : textField_r15.touched) || ctx_r1.showErrorOnNext || (textField_r15 == null ? null : textField_r15.value)));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_ng_template_1_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r20 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r20);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "p", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r21 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r21.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r21.value.message_text, "");
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_13_div_1_Template, 4, 4, "div", 56);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.showComparisonError));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 51)(1, "div", 52)(2, "input", 53, 5);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_paste_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_copy_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_cut_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_keyup_2_listener($event) { i0.ɵɵrestoreView(_r14); const textField_r15 = i0.ɵɵreference(3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r15)); })("keydown", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_keydown_2_listener($event) { i0.ɵɵrestoreView(_r14); const textField_r15 = i0.ɵɵreference(3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r15)); })("blur", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_blur_2_listener() { i0.ɵɵrestoreView(_r14); const textField_r15 = i0.ɵɵreference(3); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r15 == null ? null : textField_r15.value, textField_r15)); })("focus", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_input_focus_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onFocus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 42)(5, "span", 54);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template_span_click_5_listener() { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.hide = !ctx_r1.hide); });
    i0.ɵɵelementStart(6, "mat-icon", 55);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()()()();
    i0.ɵɵtemplate(8, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_8_Template, 3, 2, "ng-container", 19)(9, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_div_9_Template, 5, 5, "div", 32)(10, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_10_Template, 2, 1, "ng-container", 11)(11, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_template_11_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(13, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_ng_container_13_Template, 3, 3, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const textField_r15 = i0.ɵɵreference(3);
    const ceeError_r22 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate3("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r15 == null ? null : textField_r15.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r15 == null ? null : textField_r15.dirty) ? ctx_r1.maskDirty : textField_r15 == null ? null : textField_r15.dirty) || (textField_r15 == null ? null : textField_r15.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵpropertyInterpolate("type", ctx_r1.hide ? "password" : "text");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("pattern", ctx_r1.validationRegex)("ngStyle", i0.ɵɵpureFunction8(27, _c3, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(4);
    i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.hide ? "visibility_off" : "visibility", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable && ctx_r1.additionalParameter["ClearButton"] && ctx_r1.inputValue.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck && ctx_r1.messages.length === 0)("ngIfElse", ceeError_r22);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !(textField_r15 == null ? null : textField_r15.invalid));
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 57)(2, "button", 58);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_8_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.triggerEvent()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("cee-search-button cee-search-button-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵpropertyInterpolate1("id", "search_", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction0(9, _c5)[ctx_r1.fieldData.field_type])("disabled", !ctx_r1.inputValue || !ctx_r1.isValid || !ctx_r1.searchButtonEditable || !ctx_r1.isEditable);
    i0.ɵɵattribute("aria-label", "Click On " + ctx_r1.additionalParameter["Button Label"]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.buttonLabel);
} }
function CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 17)(1, "div", 18);
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_2_Template, 3, 2, "ng-container", 19)(3, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_span_3_Template, 2, 0, "span", 20)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_button_4_Template, 2, 2, "button", 21);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_div_5_Template, 12, 14, "div", 22)(6, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_template_6_Template, 14, 36, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(8, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_ng_container_8_Template, 4, 10, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const passwordField_r24 = i0.ɵɵreference(7);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameter["display_password"] != "true")("ngIfElse", passwordField_r24);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameter["Textfield Type"] == "Search");
} }
function CeeTextfieldComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 13);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_ng_container_1_Template, 2, 1, "ng-container", 11)(2, CeeTextfieldComponent_ng_container_0_div_1_ng_template_2_Template, 3, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, CeeTextfieldComponent_ng_container_0_div_1_ng_template_4_Template, 9, 6, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const autocompleteTextfield_r25 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngClass", ctx_r1.cssClasses);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.autocomplete)("ngIfElse", autocompleteTextfield_r25);
} }
function CeeTextfieldComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_container_0_div_1_Template, 6, 3, "div", 12);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isVisible || ctx_r1.isSafariClass);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const materialTextFieldData_r26 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", materialTextFieldData_r26);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 15);
    i0.ɵɵelement(1, "input", 16);
    i0.ɵɵelementContainer(2, 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const materialTextFieldData_r26 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", materialTextFieldData_r26);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 61);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_span_1_Template, 2, 1, "span", 19)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_span_2_Template, 1, 1, "span", 60);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_ng_container_0_Template, 3, 2, "ng-container", 19);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_button_8_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd()();
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_span_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 68);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.inputPrefix, "\u00A0");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_span_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.inputSuffix);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_1_Template, 2, 7, "span", 44)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_2_Template, 2, 7, "span", 44)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_3_Template, 2, 6, "span", 44)(4, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_span_4_Template, 2, 6, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngSwitch", ctx_r1.characterCount.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Count");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Remaining");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Total");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "CharRemaining");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r30 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, message_r30.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r30.message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div");
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_div_1_p_2_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r30 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r30.color && message_r30.message_text);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_div_1_Template, 3, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext || (textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r31.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r31.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r31.type == "Mandatory" && !(textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r31.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r31.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r31.type == "minlength" && (textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r31.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r31.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r31 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r31.type == "Regex" && (textField_r28 == null ? null : textField_r28.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 19)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 19)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(4);
    const textField_r28 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r28 == null ? null : textField_r28.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r28 == null ? null : textField_r28.errors == null ? null : textField_r28.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r28 == null ? null : textField_r28.errors.pattern);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r28 == null ? null : textField_r28.invalid) && ((ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext || (textField_r28 == null ? null : textField_r28.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 50);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r28 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r28 == null ? null : textField_r28.errors.required) || (textField_r28 == null ? null : textField_r28.errors.minlength) || (textField_r28 == null ? null : textField_r28.errors.pattern));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_div_0_Template, 2, 1, "div", 46);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r28 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", (textField_r28 == null ? null : textField_r28.invalid) && ((ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext || (textField_r28 == null ? null : textField_r28.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_ng_template_1_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r32 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r32);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "p", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r33 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r33.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r33.value.message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_15_div_1_Template, 4, 4, "div", 56);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.showComparisonError));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "mat-form-field", 62)(3, "mat-label");
    i0.ɵɵelementContainer(4, 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "input", 63, 6);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_paste_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_copy_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_cut_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_ngModelChange_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_keyup_5_listener($event) { i0.ɵɵrestoreView(_r27); const textField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r28)); })("keydown", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_keydown_5_listener($event) { i0.ɵɵrestoreView(_r27); const textField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r28)); })("blur", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_blur_5_listener() { i0.ɵɵrestoreView(_r27); const textField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r28 == null ? null : textField_r28.value, textField_r28)); })("focus", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_focus_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onFocus($event)); })("keydown.enter", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template_input_keydown_enter_5_listener($event) { i0.ɵɵrestoreView(_r27); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.focusedInputOnKeyDown($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_button_8_Template, 3, 0, "button", 64)(9, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_span_9_Template, 2, 1, "span", 65)(10, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_span_10_Template, 2, 1, "span", 66);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_div_11_Template, 5, 5, "div", 32)(12, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_12_Template, 2, 1, "ng-container", 11)(13, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_template_13_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_ng_container_15_Template, 3, 3, "ng-container", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const textField_r28 = i0.ɵɵreference(6);
    const ceeError_r34 = i0.ɵɵreference(14);
    i0.ɵɵnextContext();
    const materialLabel_r35 = i0.ɵɵreference(1);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r28 == null ? null : textField_r28.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", materialLabel_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("type", ctx_r1.inputType)("id", ctx_r1.html_id)("pattern", !ctx_r1.maskString ? ctx_r1.validationRegex : "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label)("min", ctx_r1.additionalParameter["Min"])("max", ctx_r1.additionalParameter["Max"]);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable && ctx_r1.additionalParameter["ClearButton"] && ctx_r1.inputValue.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputPrefix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputSuffix);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck && ctx_r1.messages.length === 0)("ngIfElse", ceeError_r34);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !(textField_r28 == null ? null : textField_r28.invalid) && ((ctx_r1.mask && (textField_r28 == null ? null : textField_r28.dirty) ? ctx_r1.maskDirty : textField_r28 == null ? null : textField_r28.dirty) || (textField_r28 == null ? null : textField_r28.touched) || ctx_r1.showErrorOnNext || (textField_r28 == null ? null : textField_r28.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 67);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_10_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.clearValue($event)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "close");
    i0.ɵɵelementEnd()();
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c4, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 43);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_1_Template, 2, 7, "span", 44)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_2_Template, 2, 7, "span", 44)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_3_Template, 2, 6, "span", 44)(4, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_span_4_Template, 2, 6, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngSwitch", ctx_r1.characterCount.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Count");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Remaining");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Total");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "CharRemaining");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r39 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, message_r39.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r39.message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div");
    i0.ɵɵtemplate(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_div_1_p_2_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r39 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r39.color && message_r39.message_text);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_div_1_Template, 3, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r1.mask && (textField_r37 == null ? null : textField_r37.dirty) ? ctx_r1.maskDirty : textField_r37 == null ? null : textField_r37.dirty) || (textField_r37 == null ? null : textField_r37.touched) || ctx_r1.showErrorOnNext || (textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r40.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r40.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r40.type == "Mandatory" && !(textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r40.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r40.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r40.type == "minlength" && (textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 45);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.returnMessageData(message_r40.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r40.code).message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r40 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r40.type == "Regex" && (textField_r37 == null ? null : textField_r37.value));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 19)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 19)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(4);
    const textField_r37 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r37 == null ? null : textField_r37.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r37 == null ? null : textField_r37.errors == null ? null : textField_r37.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r37 == null ? null : textField_r37.errors.pattern);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r37 == null ? null : textField_r37.invalid) && ((ctx_r1.mask && (textField_r37 == null ? null : textField_r37.dirty) ? ctx_r1.maskDirty : textField_r37 == null ? null : textField_r37.dirty) || (textField_r37 == null ? null : textField_r37.touched) || ctx_r1.showErrorOnNext || (textField_r37 == null ? null : textField_r37.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "p", 50);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(9);
    i0.ɵɵproperty("innerHTML", ctx_r1.errorMessageData.message_text, i0.ɵɵsanitizeHtml)("ngStyle", i0.ɵɵpureFunction1(2, _c4, ctx_r1.errorMessageData.color));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_div_1_p_1_Template, 1, 4, "p", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_div_1_Template, 2, 1, "div", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r37 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r37 == null ? null : textField_r37.errors.required) || (textField_r37 == null ? null : textField_r37.errors.minlength) || (textField_r37 == null ? null : textField_r37.errors.pattern));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_div_0_Template, 2, 1, "div", 46);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r37 = i0.ɵɵreference(5);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", (textField_r37 == null ? null : textField_r37.invalid) && ((ctx_r1.mask && (textField_r37 == null ? null : textField_r37.dirty) ? ctx_r1.maskDirty : textField_r37 == null ? null : textField_r37.dirty) || (textField_r37 == null ? null : textField_r37.touched) || ctx_r1.showErrorOnNext || (textField_r37 == null ? null : textField_r37.value)));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_ng_template_1_Template, 1, 1, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r41 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r41);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_15_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div")(2, "p", 45);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const item_r42 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c4, item_r42.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r42.value.message_text, "");
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_15_div_1_Template, 4, 4, "div", 56);
    i0.ɵɵpipe(2, "keyvalue");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(2, 1, ctx_r1.showComparisonError));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mat-form-field", 62)(2, "mat-label");
    i0.ɵɵelementContainer(3, 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "input", 70, 5);
    i0.ɵɵlistener("paste", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_paste_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("copy", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_copy_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); })("cut", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_cut_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_ngModelChange_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("keyup", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_keyup_4_listener($event) { i0.ɵɵrestoreView(_r36); const textField_r37 = i0.ɵɵreference(5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKey($event, textField_r37)); })("keydown", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_keydown_4_listener($event) { i0.ɵɵrestoreView(_r36); const textField_r37 = i0.ɵɵreference(5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onKeyDown($event, textField_r37)); })("blur", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_blur_4_listener() { i0.ɵɵrestoreView(_r36); const textField_r37 = i0.ɵɵreference(5); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textField_r37 == null ? null : textField_r37.value, textField_r37)); })("focus", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_input_focus_4_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.onFocus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_6_Template, 2, 5, "button", 59);
    i0.ɵɵelementStart(7, "button", 71);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.hide = !ctx_r1.hide); });
    i0.ɵɵelementStart(8, "mat-icon", 55);
    i0.ɵɵtext(9);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(10, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_button_10_Template, 3, 0, "button", 64);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_div_11_Template, 5, 5, "div", 32)(12, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_12_Template, 2, 1, "ng-container", 11)(13, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_template_13_Template, 3, 2, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(15, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_ng_container_15_Template, 3, 3, "ng-container", 19);
} if (rf & 2) {
    const textField_r37 = i0.ɵɵreference(5);
    const ceeError_r43 = i0.ɵɵreference(14);
    i0.ɵɵnextContext();
    const materialLabel_r35 = i0.ɵɵreference(1);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.valid || (textField_r37 == null ? null : textField_r37.invalid) && ctx_r1.isMandatory && ((ctx_r1.mask && (textField_r37 == null ? null : textField_r37.dirty) ? ctx_r1.maskDirty : textField_r37 == null ? null : textField_r37.dirty) || (textField_r37 == null ? null : textField_r37.touched) || ctx_r1.showErrorOnNext) ? "invalid" : "valid", " ", ctx_r1.fieldData.field_class_name, "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", materialLabel_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("type", ctx_r1.hide ? "password" : "text");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("specialCharacters", ctx_r1.maskSpecialCharacters)("mask", ctx_r1.maskString)("dropSpecialCharacters", ctx_r1.maskDropSpecialCharacters)("id", ctx_r1.html_id)("pattern", !ctx_r1.maskString ? ctx_r1.validationRegex : "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", "Hide password")("aria-pressed", ctx_r1.hide);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.hide ? "visibility_off" : "visibility", " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable && ctx_r1.additionalParameter["ClearButton"] && ctx_r1.inputValue.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck && ctx_r1.messages.length === 0)("ngIfElse", ceeError_r43);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !(textField_r37 == null ? null : textField_r37.invalid));
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 57)(2, "button", 58);
    i0.ɵɵlistener("click", function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r44); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.triggerEvent()); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("cee-search-button cee-search-button-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵpropertyInterpolate1("id", "search_", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction0(9, _c5)[ctx_r1.fieldData.field_type])("disabled", !ctx_r1.isValid || !ctx_r1.searchButtonEditable || !ctx_r1.isEditable);
    i0.ɵɵattribute("aria-label", "Click On " + ctx_r1.additionalParameter["Button Label"]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.buttonLabel);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 72);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_0_Template, 1, 1, "ng-template", null, 9, i0.ɵɵtemplateRefExtractor)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_2_Template, 16, 28, "ng-container", 11)(3, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_template_3_Template, 16, 28, "ng-template", null, 10, i0.ɵɵtemplateRefExtractor)(5, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_ng_container_5_Template, 4, 10, "ng-container", 19)(6, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_button_6_Template, 2, 5, "button", 59);
} if (rf & 2) {
    const materialPasswordField_r45 = i0.ɵɵreference(4);
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameter["display_password"] != "true")("ngIfElse", materialPasswordField_r45);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameter["Textfield Type"] == "Search");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
function CeeTextfieldComponent_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextfieldComponent_ng_template_1_div_0_ng_container_1_Template, 2, 1, "ng-container", 11)(2, CeeTextfieldComponent_ng_template_1_div_0_ng_template_2_Template, 3, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(4, CeeTextfieldComponent_ng_template_1_div_0_ng_template_4_Template, 7, 4, "ng-template", null, 8, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const autocompleteTextfield_r46 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.autocomplete)("ngIfElse", autocompleteTextfield_r46);
} }
function CeeTextfieldComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_template_1_div_0_Template, 6, 2, "div", 19);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.isVisible);
} }
export class CeeTextfieldComponent extends BaseView {
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
    cdr;
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
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = '';
    buttonLabel = '';
    searchButtonEditable = true;
    isSearch = false;
    isValid = false;
    // When "Data Format" available
    mask = false;
    maskDirty = false;
    maskString;
    maskStringCopy;
    separator = ',';
    decimalMarker = '.';
    // When "API Data Format" available
    apiDataFormat = '';
    apiDataFormatMask = false;
    maskDropSpecialCharacters = true;
    maskSpecialCharacters = [];
    phonePattern = new RegExp('^\\d{3}-\\d{3}-\\d{4}(?:\\s+ext\\s+\\d{3})?$');
    withoutSpacePattern = new RegExp('^\\d{3}-\\d{3}-\\d{4}$');
    withSpacePattern = new RegExp('^\\d{3}-\\d{3}-\\d{4}\\s$');
    withExtPattern = new RegExp('^\\d{3}-\\d{3}-\\d{4} ext\\s$');
    $emitKeyDown;
    timer = null;
    timer1 = null;
    html_id = '';
    autocomplete = false;
    showCross = false;
    hide = false;
    oldFieldData = {};
    isSet = false;
    inputType = 'text';
    oldInputValue = '';
    calculationUtil;
    calculationRoundOff;
    inputPrefix = '';
    inputSuffix = '';
    noneditablePlaceholder = "";
    fieldPlaceholder = "";
    prevCommaCount = 0;
    inputField;
    enterKeySubject = new Subject();
    enterKeySubscription;
    isThousandSeparatorEnabled = false;
    subscriptions = new Subscription();
    isDataFormatWithRegex = false;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, cdr) {
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
        this.cdr = cdr;
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
        this.calculationUtil = new CalculationUtil();
        this.enterKeySubscription = this.enterKeySubject.pipe(debounceTime(500), filter(event => event.key === 'Enter')).subscribe(() => {
            this.triggerEvent();
        });
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.fieldPlaceholder = this.fieldData.placeholder_text;
        this.noneditablePlaceholder = this.additionalParameter['CEE_Noneditable_Placeholder'] ? this.additionalParameter['CEE_Noneditable_Placeholder'] : "";
        if (this.noneditablePlaceholder && !this.isEditable) {
            this.fieldData.placeholder_text = this.noneditablePlaceholder;
        }
        this.subscriptions.add(this.sharedEventsService.emitOnEditableStatusChanged.subscribe((res) => {
            if (this.fieldData.unique_id == res) {
                if (this.noneditablePlaceholder && !this.isEditable) {
                    this.fieldData.placeholder_text = this.noneditablePlaceholder;
                }
                else {
                    this.fieldData.placeholder_text = this.fieldPlaceholder;
                }
            }
        }));
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        // Clear all subscriptions
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        // Clear all timeouts
        if (this.timer) {
            clearTimeout(this.timer);
            this.timer = null;
        }
        if (this.timer1) {
            clearTimeout(this.timer1);
            this.timer1 = null;
        }
        // Complete subject
        if (this.enterKeySubject) {
            this.enterKeySubject.complete();
        }
        if (this.enterKeySubscription) {
            this.enterKeySubscription.unsubscribe();
        }
        // Clean up any event handlers stored in variableObject
        if (this.variableObject) {
            Object.keys(this.variableObject).forEach(key => {
                if (this.variableObject[key] && typeof this.variableObject[key].unsubscribe === 'function') {
                    this.variableObject[key].unsubscribe();
                }
            });
            // Clear object references
            this.variableObject = null;
        }
        // Clean up DOM references
        if (this.rootData && this.rootData['FieldErrorFunctions'] && this.fieldData) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Clean up arithmetic name references
        if (this.additionalParameter?.["ArithmeticName"] &&
            this.rootData?.['ArithmeticNames']?.[this.additionalParameter["ArithmeticName"]]?.calculations) {
            delete this.rootData['ArithmeticNames'][this.additionalParameter["ArithmeticName"]].calculations[this.fieldData.unique_id];
        }
        // Clear references to large objects
        this.rootData = null;
        this.inputValue = null;
        // Call base class destroy method if it exists
        this.onViewUnload();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    // function returns the value whether to stop copy or paste event (return false means pause)
    // { "parameter_type": "Override", "value":"COPY||PASTE||CUT"} whichever event you want to stop
    onOverrideHandler(event) {
        if (event.type == "paste" && this.additionalParameter['CEE_STRING_FORMAT'] && this.additionalParameter['CEE_STRING_FORMAT'] != '' && this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'] && this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'].toLowerCase() == 'true') {
            this.onSessionDataUpdated(event.target.value, this.textField);
        }
        if (this.additionalParameter["Override"]) {
            let returnValue = true;
            this.additionalParameter["Override"].split('||').map((value, i) => {
                if (value.toLowerCase() == event.type) {
                    returnValue = false;
                }
            });
            return returnValue;
        }
        else {
            return true;
        }
    }
    onViewDataInit() {
        this.calculationRoundOff = localStorage.getItem('calculationRoundOff') ? Number(localStorage.getItem('calculationRoundOff')) : 2;
        this.oldFieldData = this.fieldData;
        // For unique html id
        this.html_id = this.fieldData.html_id;
        if (this.fieldData.field_type.toLowerCase() === 'password' || (this.additionalParameter['display_password'] && this.additionalParameter['display_password'].toLowerCase() == 'true')) {
            this.hide = true;
        }
        // END 
        this.inputPrefix = this.additionalParameter['CEE_INPUT_PREFIX'] ? this.additionalParameter['CEE_INPUT_PREFIX'] : '';
        this.inputSuffix = this.additionalParameter['CEE_INPUT_SUFFIX'] ? this.additionalParameter['CEE_INPUT_SUFFIX'] : '';
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
            : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
        this.inputValue = this.fieldValue && !Array.isArray(this.fieldValue) ? this.fieldValue : '';
        // Store the initial default value to restore it later when session is emptied
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                if (paramter.parameter_type === 'default_value') {
                    if (!this.inputValue) { // Only set if inputValue is empty
                        this.inputValue = paramter.value;
                    }
                    break;
                }
            }
        }
        if (this.additionalParameter["AutoCompleteText"] && this.additionalParameter["AutoCompleteText"] == "OFF") {
            this.autocomplete = true;
        }
        // For masking as "API Data Format"
        if (this.additionalParameter["API Data Format"] && this.additionalParameter["API Data Format"] != '') {
            this.apiDataFormatMask = [];
            this.apiDataFormat = this.additionalParameter["API Data Format"];
            this.apiDataFormat.split('').forEach(element => {
                element == 'X' ? this.apiDataFormatMask.push(/[0-9a-zA-Z]/) : element == '0' ? this.apiDataFormatMask.push(/\d/) : this.apiDataFormatMask.push(element);
            });
        }
        // For masking as "Data Format"
        if (this.additionalParameter["Data Format"] && this.additionalParameter["Data Format"] != '') {
            // Check if validation regex is present with Data Format
            this.isDataFormatWithRegex = this.validationRegex && this.validationRegex != '' ? true : false;
            // this.mask = [];
            let maskFormat = this.additionalParameter["Data Format"];
            this.maskString = maskFormat;
            this.maskStringCopy = this.maskString;
            if (this.fieldData.unique_id == '') {
                console.log('fieldData.field_character_limit***', this.fieldData.field_character_limit);
            }
            this.maskDropSpecialCharacters = this.additionalParameter["Data Format"] !== this.additionalParameter["API Data Format"];
            const maskChars = ['0', 'S', 'A', '*'];
            const maskSpecialCharacters = maskFormat.split("").filter(t => !maskChars.includes(t));
            this.maskSpecialCharacters = maskSpecialCharacters.filter(function (item, pos) {
                return maskSpecialCharacters.indexOf(item) == pos;
            });
            // maskFormat.split('').forEach(element => {
            //     element == 'X' ? this.mask.push(/[0-9a-zA-Z]/) : element == '0' ? this.mask.push(/\d/) : this.mask.push(element);
            // });
            // this.inputValue = this.getMaskedInputValue(this.inputValue, this.mask);
            // this.validationRegex = "";
            this.timer = setTimeout(() => {
                this.inputValue = this.fieldValue && !Array.isArray(this.fieldValue) ? this.fieldValue : '';
            }, 0);
        }
        // this.formatThousandSeparator(this.inputValue);
        this.setSearchData();
        switch (this.fieldData.field_type) {
            case 'Password':
                this.inputType = 'password';
                break;
            default:
                this.inputType = 'text';
                break;
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id)?.focus();
            };
        }
        this.isValid = this.valid;
        this.setValueArithmeticName();
        this.setValueCalculation();
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            this.hide = true;
        }
        if (this.additionalParameter.hasOwnProperty('CEE_Thousand_Separator') && this.additionalParameter['CEE_Thousand_Separator'].toLowerCase() == 'true') {
            this.isThousandSeparatorEnabled = true;
        }
        if (this.isThousandSeparatorEnabled) {
            this.timer = setTimeout(() => {
                this.inputValue = this.commonUtil.formatNumber(this.inputValue);
                if (this.inputValue != '' && this.inputValue != undefined && this.inputValue != null && !this.inputValue.includes('.')) {
                    this.inputValue += '.00';
                }
            }, 0);
        }
        if (!this.additionalParameter.hasOwnProperty('default_value') || (this.additionalParameter.hasOwnProperty('default_value') && this.additionalParameter['default_value'].indexOf('||') === -1)) {
            this.updateFieldData(this.inputValue, this.isValid);
        }
    }
    setValueArithmeticName(source = []) {
        if (this.additionalParameter["ArithmeticName"] && this.additionalParameter["ArithmeticName"] != '') {
            const arithmeticName = this.additionalParameter["ArithmeticName"];
            if (this.rootData['ArithmeticNames'][arithmeticName]) {
                this.rootData['ArithmeticNames'][arithmeticName]['value']
                    = this.inputValue.replaceAll(',', '');
            }
            else {
                this.rootData['ArithmeticNames'][arithmeticName] = {
                    value: this.inputValue.replaceAll(',', ''),
                    calculations: {}
                };
                for (const uId in this.rootData['_ArithmeticNames']) {
                    if (this.rootData['_ArithmeticNames'][uId].value.includes(arithmeticName)) {
                        this.rootData['ArithmeticNames'][arithmeticName].calculations[uId] = this.rootData['_ArithmeticNames'][uId];
                        delete this.rootData['_ArithmeticNames'][uId];
                    }
                }
            }
            for (const unique_id in this.rootData['ArithmeticNames'][arithmeticName]['calculations']) {
                if (!source.includes(unique_id)) {
                    source.push(this.fieldData.unique_id);
                    this.rootData['ArithmeticNames'][arithmeticName]['calculations'][unique_id].calculate(source);
                }
            }
        }
    }
    setValueCalculation() {
        const _this = this;
        this.timer = setTimeout(() => {
            if (this.additionalParameter["Calculation"] && this.additionalParameter["Calculation"] != '') {
                const calculation = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.additionalParameter["Calculation"] }).field_label;
                let aNameExist = false;
                for (const key in this.rootData['ArithmeticNames']) {
                    if (calculation.includes(key)) {
                        aNameExist = true;
                        this.rootData['ArithmeticNames'][key]['calculations'][this.fieldData.unique_id] = {
                            value: calculation,
                            calculate: (source) => {
                                return _this.calculateResult(calculation, source);
                            }
                        };
                        this.rootData['ArithmeticNames'][key]['calculations'][this.fieldData.unique_id].calculate([this.fieldData.unique_id]);
                    }
                }
                if (!aNameExist) {
                    this.rootData['_ArithmeticNames'][this.fieldData.unique_id] = {
                        value: calculation,
                        calculate: (source) => {
                            return _this.calculateResult(calculation, source);
                        }
                    };
                }
            }
        }, 1000);
    }
    calculateResult(calculation, source) {
        let result = calculation;
        for (const key in this.rootData['ArithmeticNames']) {
            result = result.replace(new RegExp(key, 'g'), this.rootData['ArithmeticNames'][key].value);
        }
        result = this.calculationUtil.calculate(result);
        if (!isFinite(result)) {
            result = 0;
        }
        this.inputValue = !isNaN(result) ? Math.round(result * Math.pow(10, this.calculationRoundOff)) / Math.pow(10, this.calculationRoundOff) + '' : '';
        this.updateFieldData(this.inputValue, this.isValid);
        this.onComponentEvent('OnChangeValue');
        this.setValueArithmeticName(source);
    }
    setSearchData() {
        if (this.additionalParameter['Textfield Type'] === 'Search') {
            this.buttonLabel = this.additionalParameter['Button Label'] ? this.additionalParameter['Button Label'] : '';
            if (this.additionalParameter['Character Limit']) {
                this.searchButtonEditable = Number(this.additionalParameter['Character Limit']) > 0 ? false : true;
                if (this.inputValue.length >= Number(this.additionalParameter['Character Limit'])) {
                    this.searchButtonEditable = true;
                }
            }
        }
    }
    // getMaskedInputValue(inputValue, mask) {
    //     if (inputValue && mask && mask.length > 0) {
    //         return this.conformToMask(inputValue, mask).conformedValue;
    //     }
    //     return inputValue;
    // }
    // ######### This is a substitute function for masking, need to test ##########
    // conformToMask(rawValue, mask) {
    //     let conformedValue = ''; let rawIndex = 0; for (let i = 0; i < mask.length; i++) {
    //         const maskChar = mask[i]; if (rawIndex >= rawValue.length) {
    //             break;  // Stop if we've reached the end of the input value    
    //         } 
    //         const rawChar = rawValue[rawIndex]; 
    //         if (maskChar === '9' && /\d/.test(rawChar)) { 
    //             conformedValue += rawChar; rawIndex++; 
    //         } else if (maskChar === 'A' && /[a-zA-Z]/.test(rawChar)) { 
    //             conformedValue += rawChar; rawIndex++; 
    //         } else { 
    //             conformedValue += maskChar; 
    //         }
    //     } return {'conformedValue': conformedValue};
    // }
    onFocus(event) {
        // For Onclick event on Focus
        // if (!this.additionalParameter['Textfield Type']) {
        //     this.onComponentEvent('OnClick');
        // }
        // // if (this.additionalParameter["Data Format"] && event.target.value != '' && this.maskString.includes('ext')){
        // //     const fullPattern = new RegExp(`^\\d{3}-\\d{3}-\\d{4}(?: ext \\d{1,4})?$`);
        // //     this.isValid = fullPattern.test(event.target.value);
        // //     this.valid = true;
        // // }
        // this.oldInputValue = event.target.value;
        // // END
        // this.$emitKeyDown = this.sharedEventsService.emitKeyDown.subscribe(() => {
        //     // if (this.apiDataFormat) {
        //     //     this.inputValue = this.getMaskedInputValue(this.inputValue, this.apiDataFormatMask);
        //     // }
        //     this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], this.inputValue));
        // });
    }
    onChange(event) {
        // this.setSessionData(newValue);
    }
    // onKey(event: any, value: any) {
    //     if (event.key === 'Tab' && value.value === '') {
    //         return;
    //     }
    //     this.onDirty();
    //     this.isValid = value.valid;
    //     if (this.additionalParameter["Data Format"] && value.value == '') {
    //         this.maskDirty = true;
    //         let pattern = /[0-9\+\-\ ]/;
    //         if (this.additionalParameter["Data Format"].charAt(0) != '0' && this.additionalParameter["Data Format"].charAt(1) != '0') {
    //             pattern = /[0-9a-zA-Z\+\-\ ]/;
    //         }
    //         let inputChar = String.fromCharCode(event.key);
    //         if (!pattern.test(inputChar)) {
    //             this.isValid = true;
    //             this.valid = true;
    //             this.maskDirty = false;
    //         }
    //     }
    //     if (!this.additionalParameter['Character Limit'] || this.inputValue.length >= Number(this.additionalParameter['Character Limit'])) {
    //         this.searchButtonEditable = true;
    //     } else {
    //         this.searchButtonEditable = false;
    //     }
    //     if (this.additionalParameter['BindKey']) {
    //         if (this.additionalParameter['BindKey'].split('|').map(str => Number(str.trim())).includes(event.keyCode)) {
    //             // if (this.apiDataFormat) {
    //             //     this.inputValue = this.getMaskedInputValue(this.inputValue, this.apiDataFormatMask);
    //             // }
    //             this.updateFieldData(
    //                 this.wfeEncryption.getEncryptedData(
    //                     this.additionalParameter['EncryptionType'], this.inputValue), this.isValid);
    //             this.onComponentEvent('OnBindKey');
    //         }
    //     } else {
    //         let userInput = value.value;
    //         clearTimeout(this.timer);
    //         this.timer = setTimeout(() => {
    //             // if (this.apiDataFormat) {
    //             // userInput = this.getMaskedInputValue(userInput, this.apiDataFormatMask);
    //             // }
    //             this.updateFieldData(
    //                 this.wfeEncryption.getEncryptedData(
    //                     this.additionalParameter['EncryptionType'], userInput), this.isValid);
    //             this.onComponentEvent('OnKeyUp');
    //         }, 500);
    //     }
    //     this.setValueArithmeticName();
    //     if (this.additionalParameter['CEE_STRING_FORMAT'] && this.additionalParameter['CEE_STRING_FORMAT'] != '' && this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'] && this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'].toLowerCase() == 'true') {
    //         this.onSessionDataUpdated(value.value, value);
    //     }
    // }
    validateCombinedPhoneFormat(value) {
        this.isValid = false;
        this.valid = false;
        this.maskDirty = true;
        if (this.phonePattern.test(value)) {
            this.isValid = true;
            this.valid = true;
            // console.log('Matched with combined');
        }
    }
    // Modified function to check for phone extension validation
    getRegexMessage(code) {
        // Check if input contains extension and has phone extension validation configured
        if (this.inputValue && this.inputValue.includes('ext') &&
            this.additionalParameter?.['CEE_PhoneNoExtValidation']) {
            return this.returnMessageData(this.additionalParameter['CEE_PhoneNoExtValidation']);
        }
        return this.returnMessageData(code);
    }
    validateDataFormat(value, code) {
        if (value.length > 13 && !value.includes('ext') && code != 'Backspace') {
            value = `${value.slice(0, 12)} ext ${value.at(-1).repeat(3)}`;
            this.maskString = '000-000-0000 ext 0*';
            this.textField.control.setValue(value);
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.maskDirty = false;
            this.cdr.detectChanges();
        }
        if (code == 'Backspace' && this.withExtPattern.test(value)) {
            value = value.slice(0, -5);
            this.maskString = '000-000-0000*';
            this.textField.control.setValue(value.trim());
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.maskDirty = false;
            this.isValid = true;
            this.valid = true;
            this.cdr.detectChanges();
        }
        if (value.includes(' ')) {
            this.validateCombinedPhoneFormat(value);
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.maskDirty = false;
            this.cdr.detectChanges();
            return;
        }
        this.isValid = false;
        this.valid = false;
        this.maskDirty = true;
        // let withSpace = code == 'Space' || value.includes(' ');
        // let extraSpace = code == 'Space' && !value.includes(' ') ? ' ' : '';
        let withSpace = (code === 'Space' && value.length === 12) || value.length === 13 || value.includes(' ');
        let extraSpace = ((code === 'Space' && value.length === 12) || (value.length === 13 || value.length > 13)) && !value.includes(' ') ? ' ' : '';
        if (withSpace) {
            if (code != 'Space') {
                value = value.slice(0, 12);
            }
            if (this.withSpacePattern.test(value + extraSpace)) {
                this.maskString = '000-000-0000 ext 0*';
                this.textField.control.setValue(`${value} ext`);
                this.textField.control.markAsDirty();
                this.textField.control.markAsPristine();
                this.textField.control.updateValueAndValidity();
                this.maskDirty = false;
                this.cdr.detectChanges();
                // console.log('MaskString updated:', this.maskString);
            }
        }
        else if (this.withoutSpacePattern.test(value) && value.length === 12) {
            this.maskString = '000-000-0000*';
            this.textField.control.setValue(value);
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.maskDirty = false;
            this.isValid = true;
            this.valid = true;
            this.cdr.detectChanges();
            // console.log('Matched without space, maskString updated:', this.maskString);
        }
    }
    // validateSINFormat(sin: any) {
    //     this.maskDirty = true;
    //     this.isValid = false;
    //     this.valid = false;
    //     // Remove all non-digit characters (e.g., dashes, spaces)
    //     const sanitizedSIN = sin.replace(/\D/g, '');
    //     // SIN must be exactly 9 digits
    //     if (sanitizedSIN.length !== 9) {
    //         this.maskDirty = false;
    //         this.isValid = false;
    //         this.valid = false;
    //         this.textField.control.markAsDirty();
    //     this.textField.control.markAsPristine();
    //     this.textField.control.updateValueAndValidity();
    //     this.cdr.detectChanges();
    //         return false;
    //     }
    //     console.log('test 1');
    //     if (sanitizedSIN.toString() == '000000000') {
    //         this.maskDirty = false;
    //         this.isValid = true;
    //         this.valid = true;
    //         this.textField.control.markAsDirty();
    //     this.textField.control.markAsPristine();
    //     this.textField.control.updateValueAndValidity();
    //     this.cdr.detectChanges();
    //         return true;
    //     }
    //     console.log('test 2');
    //     let total = 0;
    //     // Iterate through each digit
    //     for (let i = 0; i < sanitizedSIN.length; i++) {
    //         let digit = parseInt(sanitizedSIN[i], 10);
    //         // Double every second digit from the left (even indices in 0-based index)
    //         if (i % 2 === 1) {
    //             digit *= 2;
    //             // If the result is two digits, add the digits together
    //             if (digit > 9) {
    //                 digit = Math.floor(digit / 10) + (digit % 10);
    //             }
    //         }
    //         // Add the processed digit to the total
    //         total += digit;
    //     }
    //     const isValid = total % 10 === 0;
    //     // Set condition result for conditional validation
    //     if (!this.rootData['_ValidationData']) this.rootData['_ValidationData'] = {};
    //     if (!this.rootData['_ValidationData']['validateSIN']) {
    //         this.rootData['_ValidationData']['validateSIN'] = {};
    //     }
    //     this.rootData['_ValidationData']['validateSIN']['isValidSIN'] = isValid ? '1' : '0';
    //     // Update field validity
    //     this.isValid = isValid;
    //     this.valid = isValid;
    //     this.updateFieldData(this.inputValue, this.isValid);
    //     // Force error re-evaluation and UI update
    //     this.textField.control.markAsDirty();
    //     this.textField.control.markAsPristine();
    //     this.textField.control.updateValueAndValidity();
    //     this.showErrorOnNext = !isValid; // Optional: force show error if needed
    //     this.cdr.detectChanges();
    //     return isValid;
    // }
    validateSINFormat() {
        if (this.additionalParameter['sin_number'] === 'true' && this.inputValue) {
            //localStorage.setItem('isSinNumber', "1");
            const sin = this.inputValue.replace(/\D/g, ''); // Remove non-digit chars
            const isValid = this.isValidSIN(sin);
            // Update field validity
            this.updateFieldData(this.inputValue, isValid);
            // console.log(this.wfeStepLoaderService.messagesDataMap["sin_validation_message"]);
            // console.log('isValid', isValid);
            // Evaluate conditional error messages manually
            if (!isValid) {
                this.isValid = false;
                this.valid = false;
                this.conditionalErrorMessageCompareFieldsSin(this.fieldData.api_key, this.fieldData, String(this.appData.id), true);
            }
            else {
                this.isValid = true;
                this.valid = true;
                this.conditionalErrorMessageCompareFieldsSin(this.fieldData.api_key, this.fieldData, String(this.appData.id), false);
            }
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
            this.cdr.detectChanges();
        }
    }
    isValidSIN(sin) {
        if (!/^\d{9}$/.test(sin))
            return false;
        let sum = 0;
        for (let i = 0; i < sin.length; i++) {
            let digit = parseInt(sin.charAt(i), 10);
            if (i % 2 === 1) {
                digit *= 2;
                if (digit > 9)
                    digit -= 9;
            }
            sum += digit;
        }
        if (sin.toString() == '000000000') {
            return true;
        }
        return sum % 10 === 0;
    }
    onKey(event, value) {
        // Handle Tab key with empty value
        //console.log('event key', event)
        if (event.key === 'Tab' && value.value === '') {
            return;
        }
        if (this.additionalParameter["CEE_SEARCH_HIGHLIGHT_SOURCE_FIELD"] && this.additionalParameter["CEE_SEARCH_HIGHLIGHT_ENABLE"] && this.additionalParameter["CEE_SEARCH_HIGHLIGHT_ENABLE"] === 'true') {
            this.sharedEventsService.emitOnApplyFilter.emit({
                source: this.additionalParameter["CEE_SEARCH_HIGHLIGHT_SOURCE_FIELD"],
                highlight: value.value.trim().toLowerCase()
            });
        }
        // Mark input as dirty and update validity
        this.onDirty();
        if (this.additionalParameter["Data Format"] && value.value != '' && this.maskStringCopy.includes('ext')) {
            this.validateCombinedPhoneFormat(value);
            // Test input value against the regex
            this.validateDataFormat(value.value, event.code);
        }
        // if (this.additionalParameter["sin_number"] && value.value != '' ) {
        //     // Test input value against the regex
        //     this.validateSINFormat(value.value);
        // }
        else {
            this.isValid = value.valid;
        }
        // Validation logic for mask with extension support
        if (this.additionalParameter["Data Format"] && value.value == '') {
            this.maskDirty = true;
            // Fallback pattern for basic numeric input
            const pattern = /[0-9\+\-\ ]/;
            const inputChar = String.fromCharCode(event.key);
            if (pattern.test(inputChar)) {
                return;
            }
        }
        // Enforce character limit if applicable
        if (!this.additionalParameter['Character Limit'] || this.inputValue.length >= Number(this.additionalParameter['Character Limit'])) {
            this.searchButtonEditable = true;
        }
        else {
            this.searchButtonEditable = false;
        }
        // Handle BindKey functionality
        if (this.additionalParameter['BindKey']) {
            const bindKeys = this.additionalParameter['BindKey']
                .split('|')
                .map(str => Number(str.trim()));
            if (bindKeys.includes(event.keyCode)) {
                this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], this.inputValue), this.isValid);
                this.onComponentEvent('OnBindKey');
                return;
            }
        }
        else {
            // Handle input validation with delay
            let userInput = value.value;
            clearTimeout(this.timer);
            this.timer = setTimeout(() => {
                this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], userInput), this.isValid);
                this.onComponentEvent('OnKeyUp');
            }, 500);
        }
        // Perform additional formatting checks
        this.setValueArithmeticName();
        if (this.additionalParameter['CEE_STRING_FORMAT'] &&
            this.additionalParameter['CEE_STRING_FORMAT'] !== '' &&
            this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'] &&
            this.additionalParameter['CEE_FORMAT_ON_KEY_PRESS'].toLowerCase() === 'true') {
            this.onSessionDataUpdated(value.value, value);
        }
        // Commented due to phone number breaking
        // if (this.additionalParameter['CEE_Thousand_Separator'] && this.additionalParameter['CEE_Thousand_Separator'].toLowerCase() == 'true' && value.value != "") {
        //     this.maskString = 'separator.2';
        //     // this.formatThousandSeparator(value.value);
        //     // this.onInput(event);
        //     // setTimeout(() => {
        //     //     this.updateFieldData(value.value.replaceAll(',', ''))
        //     // }, 1000);
        // }
        this.validateSINFormat();
    }
    // isNumeric(n) {
    //     return !isNaN(parseFloat(n)) && isFinite(n);
    // }
    // onInput(event): void {
    //     let position = event.target.selectionStart;
    //     // console.log("value: ",(<HTMLInputElement>event.target).value)
    //     let commaCount = this.inputValue ? this.inputValue.split(',').length - 1 : 0
    //     setTimeout(() => {
    //         // console.log("position: ", position, "commaCount: ", commaCount, "prevCommaCount: ", this.prevCommaCount)
    //         let seletionPosition = (Number(this.prevCommaCount) == Number(commaCount)) ? position : (position + 1);
    //         let beforeDecimal = this.inputValue.indexOf('.');
    //         // console.log("seletionPosition: ", seletionPosition)
    //         event.target.selectionStart = event.target.selectionEnd = seletionPosition;
    //         this.prevCommaCount = commaCount;
    //     }, 0);
    //     // let beforeDecimal = this.inputValue.indexOf('.');
    //     // setTimeout(() => {
    //     //     event.target.selectionStart = event.target.selectionEnd = beforeDecimal ? beforeDecimal : 0;
    //     // },0);
    // }
    // formatThousandSeparator(value) {
    //     if (this.additionalParameter['CEE_Thousand_Separator'] && this.additionalParameter['CEE_Thousand_Separator'].toLowerCase() == 'true' && value != "" && this.isNumeric(value.replaceAll(',', ''))) {
    //         console.log("inputValue: ", this.inputValue)
    //         console.log("value: ", value);
    //         const filterPipe = new ThousandSeparatorPipe();
    //         const fiteredArr = filterPipe.transform(value.replaceAll(',', ''), 'en-US');
    //         this.inputValue = fiteredArr;
    //         // console.log("fiteredArr: ",this.numberWithCommas(value.value))
    //         // this.inputValue = this.numberWithCommas(value.value);
    //         // this.onSessionDataUpdated(value.value, value);
    //     }
    // }
    // numberWithCommas(x) {
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    // }
    onKeyDown(event, value) {
        if (this.additionalParameter["Data Format"]) {
            let inputArray = value.value.split('');
            let cursorPosition = event.target.selectionStart;
            if (event.keyCode === 46) {
                if (inputArray[cursorPosition - 1] == '-') {
                    this.timer = setTimeout(() => {
                        event.target.selectionStart = cursorPosition;
                        event.target.selectionEnd = cursorPosition;
                    });
                }
                else if (inputArray[cursorPosition] == '-') {
                    inputArray.splice(cursorPosition + 1, 1);
                    this.inputValue = inputArray.join();
                    this.timer = setTimeout(() => {
                        event.target.selectionStart = cursorPosition + 1;
                        event.target.selectionEnd = cursorPosition + 1;
                    });
                }
                else { }
            }
            else {
                // if (event.keyCode > 47 && inputArray.length < cursorPosition) {
                //     event.target.selectionStart = inputArray.length;
                //     event.target.selectionEnd = inputArray.length;
                // }
            }
        }
        if (this.oldInputValue !== value) {
            this.onComponentEvent('OnChangeValue');
        }
    }
    onSessionDataUpdated(value, state) {
        if (this.additionalParameter["Data Format"] && value != '' && this.maskStringCopy.includes('ext')) {
            this.validateCombinedPhoneFormat(value);
            this.updateFieldData(value, true);
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
        }
        else {
            this.isValid = state.valid;
        }
        if (this.$emitKeyDown) {
            this.$emitKeyDown.unsubscribe();
        }
        // if (this.apiDataFormat) {
        //     value = this.getMaskedInputValue(value, this.apiDataFormatMask);
        // }
        if (this.additionalParameter['CEE_STRING_FORMAT']) {
            this.inputValue = value = this.wfeStepLoaderService.manipulateString(this.additionalParameter['CEE_STRING_FORMAT'], value);
        }
        // console.log("this.isValid: ",this.isValid)
        let valid = this.isValid;
        if (this.inputValue && this.validationRegex) {
            const patt = new RegExp(this.validationRegex);
            valid = patt.test(this.inputValue);
        }
        if (this.isThousandSeparatorEnabled && value != "") {
            value = value.replaceAll(',', '');
            if (value != undefined && value != null && !value.includes('.')) {
                value += '.00';
            }
            this.inputValue = this.commonUtil.formatNumber(value);
        }
        this.timer = setTimeout(() => {
            this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], value), valid);
        }, 10);
        // Hide _ in input box
        /* if (this.additionalParameter["Data Format"]) {
            if (this.additionalParameter["Data Format"].length != value.length) {
                this.clearValue(state);
            }
        } */
        // trigger event list of focus out
        if (this.additionalParameter['ValidationCheck'] && this.additionalParameter['ValidationCheck'].toLowerCase() === 'true') {
            if (this.isValid) {
                if (this.oldInputValue !== value) {
                    this.onComponentEvent('OnChangeValue');
                }
                this.onComponentEvent('OnFocusOut');
            }
            else {
                return;
            }
        }
        else {
            if (this.oldInputValue !== value) {
                this.onComponentEvent('OnChangeValue');
            }
            this.onComponentEvent('OnFocusOut');
        }
        if (this.additionalParameter['sin_number'] === 'true') {
            //("checkig for sin number");
            const sin = this.inputValue.replace(/\D/g, ''); // Remove non-digit chars
            const isValid = this.isValidSIN(sin);
            //console.log('isValid test - ', isValid);
            this.validateSINFormat(); // check
            this.updateFieldData(value, isValid); // test
            this.textField.control.markAsDirty();
            this.textField.control.markAsPristine();
            this.textField.control.updateValueAndValidity();
        }
    }
    // get isThousandSeparatorEnabled(): boolean {
    //     return this.additionalParameter['CEE_Thousand_Separator']?.toLowerCase() === 'true';
    // }
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
    clearValue(event) {
        this.showCross = false;
        this.inputValue = '';
        this.updateFieldData('');
        this.onComponentEvent('clear');
        if (this.additionalParameter['CEE_RELOAD_PAGE_ON_CLEAR'] && this.additionalParameter['CEE_RELOAD_PAGE_ON_CLEAR'].toLowerCase() == 'true') {
            this.onComponentEvent('OnClick');
        }
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        let apiData = null;
        if (!this.rowData) {
            apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        }
        else if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            apiData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
        }
        if (apiData !== null) {
            if (!Array.isArray(apiData)) {
                var valid = true;
                this.inputValue = apiData;
                // this.inputValue = this.getMaskedInputValue(apiData, this.mask); // Value to display.
                if (this.inputValue && this.validationRegex) {
                    const patt = new RegExp(this.validationRegex);
                    valid = patt.test(this.inputValue);
                }
                this.setValueArithmeticName();
                // if (this.apiDataFormat) {
                //     let valueToUpdate = this.getMaskedInputValue(apiData, this.apiDataFormatMask);
                //                         this.updateFieldData(valueToUpdate, valid);
                // } else {
                //                         this.updateFieldData(this.inputValue, valid);
                // }
                this.updateFieldData(this.inputValue, valid);
                // this.formatThousandSeparator(this.inputValue);
            }
        }
        // else{
        //     this.setSessionData(this.inputValue);
        // }
        if (this.isThousandSeparatorEnabled) {
            this.timer = setTimeout(() => {
                this.inputValue = this.commonUtil.formatNumber(this.inputValue);
                if (this.inputValue != '' && this.inputValue != undefined && this.inputValue != null && !this.inputValue.includes('.')) {
                    this.inputValue += '.00';
                }
            }, 0);
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
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.inputValue = paramter.value;
                            value = paramter.value;
                        }
                    }
                }
                // if (this.apiDataFormat) {
                //     value = this.getMaskedInputValue(value, this.apiDataFormatMask);
                // }
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
                this.setSearchData();
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
            unique_id_value = (this.rowData && this.rowData.unique_id) ? this.rowData.unique_id : this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.inputValue = get_data[unique_id_value];
            // if (this.apiDataFormat) {
            //     this.inputValue = this.getMaskedInputValue(this.inputValue, this.apiDataFormatMask);
            // }
            this.updateFieldData(this.inputValue);
        }
    }
    triggerEvent() {
        if (this.searchButtonEditable) {
            this.onComponentEvent('OnClick');
        }
    }
    focusedInputOnKeyDown(event) {
        // Only listen for events from the specific input
        setTimeout(() => {
            if (event.target === this.inputField.nativeElement) {
                if (this.inputValue.trim() != "") {
                    this.enterKeySubject.next(event);
                }
            }
        }, 0);
    }
    setFieldValueOnSetValuesEvent(data) {
        this.setEyeIconDisableForPassword();
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                if (this.isThousandSeparatorEnabled) {
                    this.inputValue = this.commonUtil.formatNumber(this.inputValue);
                    if (this.inputValue != '' && this.inputValue != undefined && this.inputValue != null && !this.inputValue.includes('.')) {
                        this.inputValue += '.00';
                    }
                }
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
                setTimeout(() => {
                    this.sharedEventsService.settingFieldValueEventFinished.emit(true);
                }, 10);
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
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']'
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
    setEyeIconDisableForPassword() {
        if (this.isEditable && this.inputType == 'password') {
            this.hide = true;
        }
    }
    static ɵfac = function CeeTextfieldComponent_Factory(t) { return new (t || CeeTextfieldComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTextfieldComponent, selectors: [["app-cee-textfield"]], viewQuery: function CeeTextfieldComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textField = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.inputField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵProvidersFeature([
                provideNgxMask(),
                CommonUtil
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [["materialInput", ""], ["autocompleteTextfield", ""], ["textFieldData", ""], ["passwordField", ""], ["ceeError", ""], ["textField", "ngModel"], ["textField", "ngModel", "inputField", ""], ["singleErrorMessage", ""], ["materialTextFieldData", ""], ["materialLabel", ""], ["materialPasswordField", ""], [4, "ngIf", "ngIfElse"], [3, "ngClass", 4, "ngIf"], [3, "ngClass"], [3, "ngTemplateOutlet"], ["autocomplete", "off"], ["type", "submit", "value", "submit", 2, "display", "none"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["class", "form-field", 3, "ngClass", 4, "ngIf", "ngIfElse"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "form-field", 3, "ngClass"], ["class", "input-group-prepend", 4, "ngIf"], ["class", "input-group-append", 4, "ngIf"], ["class", "display_character_count", 3, "ngSwitch", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "input-group-prepend"], [1, "input-group-text"], ["separator", "", 3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "specialCharacters", "mask", "dropSpecialCharacters", "type", "pattern", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], [3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "keydown.enter", "specialCharacters", "mask", "dropSpecialCharacters", "type", "pattern", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], ["class", "textfield-cross-icon", 3, "click", 4, "ngIf"], ["class", "textfield-cross-icon", 3, "innerHTML", "click", 4, "ngIf"], [1, "textfield-cross-icon", 3, "click"], [1, "textfield-cross-icon", 3, "click", "innerHTML"], [1, "input-group-append"], [1, "display_character_count", 3, "ngSwitch"], [3, "ngStyle", 4, "ngSwitchCase"], [3, "ngStyle"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "innerHTML", "ngStyle", 4, "ngIf"], [3, "innerHTML", "ngStyle"], [1, "form-field"], [1, "input-group"], [3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "specialCharacters", "mask", "dropSpecialCharacters", "type", "pattern", "ngStyle", "maxlength", "ngModel", "disabled", "required", "placeholder"], [1, "input-group-text", 3, "click"], [1, "pointer"], ["class", "error-message-wrapper", 4, "ngFor", "ngForOf"], [1, "form-button"], ["type", "button", 3, "click", "id", "ngClass", "disabled"], ["type", "button", 3, "class", "tooltip", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "mat-full-width"], ["matInput", "", 3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "keydown.enter", "specialCharacters", "mask", "dropSpecialCharacters", "type", "id", "pattern", "maxlength", "ngModel", "disabled", "required", "placeholder"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click", 4, "ngIf"], ["matTextPrefix", "", 4, "ngIf"], ["matTextSuffix", "", 4, "ngIf"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Clear", 3, "click"], ["matTextPrefix", ""], ["matTextSuffix", ""], ["matInput", "", 3, "paste", "copy", "cut", "ngModelChange", "keyup", "keydown", "blur", "focus", "specialCharacters", "mask", "dropSpecialCharacters", "type", "id", "pattern", "maxlength", "ngModel", "disabled", "required", "placeholder"], ["matSuffix", "", "mat-icon-button", "", 3, "click"], ["type", "button", 3, "tooltip"]], template: function CeeTextfieldComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTextfieldComponent_ng_container_0_Template, 2, 1, "ng-container", 11)(1, CeeTextfieldComponent_ng_template_1_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const materialInput_r47 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", !ctx.is_material)("ngIfElse", materialInput_r47);
        } }, dependencies: [SeparatorDirective, MatFormFieldModule, i12.MatFormField, i12.MatLabel, i12.MatPrefix, i12.MatSuffix, MatInputModule, i13.MatInput, FormsModule, i14.ɵNgNoValidate, i14.DefaultValueAccessor, i14.NgControlStatus, i14.NgControlStatusGroup, i14.RequiredValidator, i14.MaxLengthValidator, i14.PatternValidator, i14.NgModel, i14.NgForm, NgTemplateOutlet,
            NgSwitch, MatIconModule, i15.MatIcon, NgStyle, NgClass,
            MatTooltipModule, NgxMaskDirective, CommonModule, i16.NgForOf, i16.NgIf, i16.NgSwitchCase, i16.KeyValuePipe, TooltipModule, i17.TooltipDirective], styles: [".mat-full-width[_ngcontent-%COMP%]{width:100%}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTextfieldComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-textfield', standalone: true, imports: [
                    SeparatorDirective, MatFormFieldModule, MatInputModule, FormsModule, NgTemplateOutlet,
                    ShowPasswordDirective, NgSwitch, MatIconModule, NgStyle, NgClass, CustomTooltipDirective,
                    MatTooltipModule, NgxMaskDirective, CommonModule, TooltipModule
                ], providers: [
                    provideNgxMask(),
                    CommonUtil
                ], template: "<!-- Bootstrap support by default -->\r\n<ng-container *ngIf=\"!is_material; else materialInput\">\r\n    <div [ngClass]=\"cssClasses\" *ngIf=\"isVisible || isSafariClass\">\r\n        <ng-container *ngIf=\"!autocomplete; else autocompleteTextfield\">\r\n            <ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n        </ng-container>\r\n        <ng-template #autocompleteTextfield>\r\n            <form autocomplete=\"off\">\r\n                <input type=\"submit\" value=\"submit\" style=\"display:none\" />\r\n                <ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n            </form>\r\n        </ng-template>\r\n\r\n        <ng-template #textFieldData>\r\n            <div class=\"form-group\">\r\n                <div class=\"form-label\">\r\n                    <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                        <label class=\"col-form-label\"\r\n                            *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                        <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                            [innerHTML]=\"fieldData.field_label\"></label>\r\n                    </ng-container>\r\n                    <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n                    <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\"\r\n                    [tooltip]=\"fieldData.tooltip\"\r\n                        [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                        i\r\n                    </button>\r\n                </div>\r\n                <div class=\"form-field\" [ngClass]=\"{'input-group': inputPrefix || inputSuffix}\" *ngIf=\"additionalParameter['display_password'] != 'true'; else passwordField\">\r\n                    <div class=\"input-group-prepend\" *ngIf=\"inputPrefix\">\r\n                        <span class=\"input-group-text\">{{inputPrefix}}</span>\r\n                    </div>\r\n                    <!-- <input (paste)=\"onOverrideHandler($event)\" [textMask]=\"{ mask: mask, guide: false }\" -->\r\n                    <ng-container *ngIf=\"isThousandSeparatorEnabled\">\r\n                    <input separator (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                        type=\"{{inputType}}\" (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n                        class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\"\r\n                        [attr.id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"!maskString ? validationRegex : ''\" [ngStyle]=\"{'font-family': fieldData.field_style.font_name,\r\n                        'font-size': fieldData.field_style.font_size,\r\n                        'font-style': fieldData.field_style.font_style,\r\n                        'font-color': fieldData.field_style.font_color,\r\n                        'border-color': fieldData.field_style.border_color,\r\n                        'height': fieldData.field_style.field_height,\r\n                        'width': fieldData.field_style.field_width,\r\n                        'background-color': fieldData.field_style.background_color\r\n                        }\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                        maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                        [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\" (keyup)=\"onKey($event, textField)\"\r\n                        (keydown)=\"onKeyDown($event, textField)\"\r\n                        (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                        #textField=\"ngModel\" [required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n                        (focus)=\"onFocus($event)\" [attr.min]=\"additionalParameter['Min']\"\r\n                        [attr.max]=\"additionalParameter['Max']\" />\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"!isThousandSeparatorEnabled\">\r\n                        <input (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                            type=\"{{inputType}}\" (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n                            class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\"\r\n                            [attr.id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"!maskString ? validationRegex : ''\" [ngStyle]=\"{'font-family': fieldData.field_style.font_name,\r\n                            'font-size': fieldData.field_style.font_size,\r\n                            'font-style': fieldData.field_style.font_style,\r\n                            'font-color': fieldData.field_style.font_color,\r\n                            'border-color': fieldData.field_style.border_color,\r\n                            'height': fieldData.field_style.field_height,\r\n                            'width': fieldData.field_style.field_width,\r\n                            'background-color': fieldData.field_style.background_color\r\n                            }\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                            maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                            [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\" (keyup)=\"onKey($event, textField)\"\r\n                            (keydown)=\"onKeyDown($event, textField)\"\r\n                            (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                            #textField=\"ngModel\" [required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n                            (focus)=\"onFocus($event)\" [attr.min]=\"additionalParameter['Min']\"\r\n                            [attr.max]=\"additionalParameter['Max']\" #inputField (keydown.enter)=\"focusedInputOnKeyDown($event)\"/>\r\n                        </ng-container>\r\n                    <ng-container *ngIf=\"isEditable && additionalParameter['ClearButton'] && inputValue.length > 0\">\r\n                        <span (click)=\"clearValue($event)\" class=\"textfield-cross-icon\"\r\n                            *ngIf=\"!isHTML(additionalParameter['ClearButton'])\">{{additionalParameter['ClearButton']}}</span>\r\n                        <span (click)=\"clearValue($event)\" class=\"textfield-cross-icon\"\r\n                            *ngIf=\"isHTML(additionalParameter['ClearButton'])\"\r\n                            [innerHTML]=\"additionalParameter['ClearButton']\"></span>\r\n                    </ng-container>\r\n                    <div class=\"input-group-append\" *ngIf=\"inputSuffix\">\r\n                        <span class=\"input-group-text\">{{inputSuffix}}</span>\r\n                    </div>\r\n                    <div class=\"display_character_count\" *ngIf=\"characterCount.display\"\r\n                        [ngSwitch]=\"characterCount.type\">\r\n                        <span *ngSwitchCase=\"'Count'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                            ? characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'Remaining'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit -\r\n                            inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                            ? characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'Total'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                            characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'CharRemaining'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit -\r\n                            inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                            characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                    </div>\r\n                    <ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n                        <ng-container\r\n                            *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField?.value)\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                <div>\r\n                                    <p *ngIf=\"message.color && message.message_text\"\r\n                                        [ngStyle]=\"{'color': message.color}\">\r\n                                        {{message.message_text}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #ceeError>\r\n                        <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                            <ng-container *ngFor=\"let message of messages\">\r\n                                <div class=\"error-message-wrapper\">\r\n                                    <ng-container *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                        <div *ngIf=\"textField?.errors.required\">\r\n                                            <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"textField?.errors?.minlength\">\r\n                                            <p *ngIf=\"message.type == 'minlength' && textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"textField?.errors.pattern\">\r\n                                            <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                    </ng-container>\r\n\r\n                                    <ng-container  *ngIf=\"!valid || (textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value\r\n                                    ))\">\r\n                                        <div *ngIf=\"(isDataFormatWithRegex && !isValid)\">\r\n                                            <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                               [ngStyle]=\"{'color': getRegexMessage(message.code).color}\">\r\n                                                {{getRegexMessage(message.code).message_text}}</p>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-template #singleErrorMessage>\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                                <div\r\n                                    *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n                                    <p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n                                        [ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ng-template>\r\n                    <!-- <ng-container *ngIf=\"!textField?.invalid\">\r\n                        <div class=\"error-message-wrapper\" *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container> -->\r\n                    <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                        <div class=\"error-message-wrapper\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <ng-template #passwordField>\r\n                    <div class=\"form-field\">\r\n                        <div class=\"input-group\">\r\n                            <!-- <input (paste)=\"onOverrideHandler($event)\" [textMask]=\"{ mask: mask, guide: false }\" -->\r\n                            <input (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                                (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n                                type=\"{{ hide ? 'password':'text' }}\"\r\n                                class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\"\r\n                                [attr.id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"validationRegex\"\r\n                                [ngStyle]=\"{\r\n                                                                            'font-family': fieldData.field_style.font_name,\r\n                                                                            'font-size': fieldData.field_style.font_size,\r\n                                                                            'font-style': fieldData.field_style.font_style,\r\n                                                                            'font-color': fieldData.field_style.font_color,\r\n                                                                            'border-color': fieldData.field_style.border_color,\r\n                                                                            'height': fieldData.field_style.field_height,\r\n                                                                            'width': fieldData.field_style.field_width,\r\n                                                                            'background-color': fieldData.field_style.background_color\r\n                                                                          }\"\r\n                                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                                maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                                [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\"\r\n                                (keyup)=\"onKey($event, textField)\" (keydown)=\"onKeyDown($event, textField)\"\r\n                                (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                                #textField=\"ngModel\" [required]=\"isMandatory\"\r\n                                placeholder=\"{{fieldData.placeholder_text}}\" (focus)=\"onFocus($event)\" />\r\n                            <div class=\"input-group-append\">\r\n                                <span class=\"input-group-text\" (click)=\"hide = !hide\">\r\n                                    <mat-icon [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\"\r\n                                        class=\"pointer\">\r\n                                        {{hide ?\r\n                                        'visibility_off' : 'visibility'}}</mat-icon>\r\n                                </span>\r\n                            </div>\r\n                        </div>\r\n                        <ng-container *ngIf=\"isEditable && additionalParameter['ClearButton'] && inputValue.length > 0\">\r\n                            <span (click)=\"clearValue($event)\" class=\"textfield-cross-icon\"\r\n                                *ngIf=\"!isHTML(additionalParameter['ClearButton'])\">{{additionalParameter['ClearButton']}}</span>\r\n                            <span (click)=\"clearValue($event)\" class=\"textfield-cross-icon\"\r\n                                *ngIf=\"isHTML(additionalParameter['ClearButton'])\"\r\n                                [innerHTML]=\"additionalParameter['ClearButton']\"></span>\r\n                        </ng-container>\r\n                        <div class=\"display_character_count\" *ngIf=\"characterCount.display\"\r\n                            [ngSwitch]=\"characterCount.type\">\r\n                            <span *ngSwitchCase=\"'Count'\"\r\n                                [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                                {{characterCountMessageData.left.message_text ?\r\n                                characterCountMessageData.left.message_text\r\n                                :\r\n                                ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                                ? characterCountMessageData.right.message_text : ''}}\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'Remaining'\"\r\n                                [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                                {{characterCountMessageData.left.message_text ?\r\n                                characterCountMessageData.left.message_text\r\n                                :\r\n                                ''}}{{fieldData.field_character_limit -\r\n                                inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                                ? characterCountMessageData.right.message_text : ''}}\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'Total'\"\r\n                                [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                                {{characterCountMessageData.left.message_text ?\r\n                                characterCountMessageData.left.message_text\r\n                                :\r\n                                ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                                characterCountMessageData.right.message_text : ''}}\r\n                            </span>\r\n                            <span *ngSwitchCase=\"'CharRemaining'\"\r\n                                [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                                {{characterCountMessageData.left.message_text ?\r\n                                characterCountMessageData.left.message_text\r\n                                :\r\n                                ''}}{{fieldData.field_character_limit -\r\n                                inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                                characterCountMessageData.right.message_text : ''}}\r\n                            </span>\r\n                        </div>\r\n                        <ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n                            <ng-container\r\n                                *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField?.value)\">\r\n                                <div class=\"error-message-wrapper\"\r\n                                    *ngIf=\"( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                    <div>\r\n                                        <p *ngIf=\"message.color && message.message_text\"\r\n                                            [ngStyle]=\"{'color': message.color}\">\r\n                                            {{message.message_text}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-template #ceeError>\r\n                            <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                                <ng-container *ngFor=\"let message of messages\">\r\n                                    <div class=\"error-message-wrapper\"\r\n                                        *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                        <div *ngIf=\"textField?.errors.required\">\r\n                                            <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"textField?.errors?.minlength\">\r\n                                            <p *ngIf=\"message.type == 'minlength' && textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                        <div *ngIf=\"textField?.errors.pattern\">\r\n                                            <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                                {{returnMessageData(message.code).message_text}}</p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </ng-container>\r\n                            <ng-template #singleErrorMessage>\r\n                                <div class=\"error-message-wrapper\"\r\n                                    *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                                    <div\r\n                                        *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n                                        <p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n                                            [ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-template>\r\n                        </ng-template>\r\n                        <ng-container *ngIf=\"!textField?.invalid\">\r\n                            <div class=\"error-message-wrapper\" *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                                <div>\r\n                                    <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                        {{item.value.message_text}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n                </ng-template>\r\n\r\n                <ng-container *ngIf=\"additionalParameter['Textfield Type'] == 'Search'\">\r\n                    <div class=\"form-button\">\r\n                        <button class=\"cee-search-button cee-search-button-{{fieldData.unique_id}}\"\r\n                            id=\"search_{{fieldData.unique_id}}\"\r\n                            [attr.aria-label]=\"'Click On ' + additionalParameter['Button Label'] \"\r\n                            [ngClass]=\"{'Search':'default'}[fieldData.field_type]\" type=\"button\"\r\n                            (click)=\"triggerEvent()\"\r\n                            [disabled]=\"!inputValue || !isValid || !searchButtonEditable || !isEditable\">{{buttonLabel}}</button>\r\n                    </div>\r\n                </ng-container>\r\n            </div>\r\n        </ng-template>\r\n    </div>\r\n</ng-container>\r\n\r\n<!-- Material support -->\r\n<ng-template #materialInput>\r\n    <div *ngIf=\"isVisible\">\r\n        <ng-container *ngIf=\"!autocomplete; else autocompleteTextfield\">\r\n            <ng-container [ngTemplateOutlet]=\"materialTextFieldData\"></ng-container>\r\n        </ng-container>\r\n        <ng-template #autocompleteTextfield>\r\n            <form autocomplete=\"off\">\r\n                <input type=\"submit\" value=\"submit\" style=\"display:none\" />\r\n                <ng-container [ngTemplateOutlet]=\"materialTextFieldData\"></ng-container>\r\n            </form>\r\n        </ng-template>\r\n\r\n        <ng-template #materialTextFieldData>\r\n            <!-- Template:-  #materialLabel -Field label common for textfield and passwordfield-->\r\n            <ng-template #materialLabel>\r\n                <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                    <span *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</span>\r\n                    <span *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></span>\r\n                </ng-container>\r\n\r\n            </ng-template>\r\n            <ng-container *ngIf=\"additionalParameter['display_password'] != 'true'; else materialPasswordField\">\r\n                <div\r\n                    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\">\r\n                    <mat-form-field class=\"mat-full-width\">\r\n                        <mat-label>\r\n                            <ng-container [ngTemplateOutlet]=\"materialLabel\"></ng-container>\r\n                        </mat-label>\r\n                        <!-- <input matInput (paste)=\"onOverrideHandler($event)\" [textMask]=\"{ mask: mask, guide: false }\" -->\r\n                        <input matInput (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                            (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\" [type]=\"inputType\"\r\n                            [id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"!maskString ? validationRegex : ''\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                            maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                            [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\"\r\n                            (keyup)=\"onKey($event, textField)\" (keydown)=\"onKeyDown($event, textField)\"\r\n                            (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                            #textField=\"ngModel\" [required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n                            (focus)=\"onFocus($event)\" [attr.min]=\"additionalParameter['Min']\"\r\n                            [attr.max]=\"additionalParameter['Max']\" #inputField (keydown.enter)=\"focusedInputOnKeyDown($event)\"/>\r\n\r\n                        <!-- Clear Button i.e cross button to clear the input text -->\r\n                        <button matSuffix mat-icon-button aria-label=\"Clear\"\r\n                            *ngIf=\"isEditable && additionalParameter['ClearButton'] && inputValue.length > 0\"\r\n                            (click)=\"clearValue($event)\">\r\n                            <mat-icon>close</mat-icon>\r\n                        </button>\r\n                        <span matTextPrefix *ngIf=\"inputPrefix\">{{inputPrefix}}&nbsp;</span>\r\n                        <span matTextSuffix *ngIf=\"inputSuffix\">{{inputSuffix}}</span>\r\n                    </mat-form-field>\r\n\r\n                    <!-- Differet messages below the text field -->\r\n                    <div class=\"display_character_count\" *ngIf=\"characterCount.display\"\r\n                        [ngSwitch]=\"characterCount.type\">\r\n                        <span *ngSwitchCase=\"'Count'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                            ? characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'Remaining'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit -\r\n                            inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                            ? characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'Total'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                            characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                        <span *ngSwitchCase=\"'CharRemaining'\"\r\n                            [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                            {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                            :\r\n                            ''}}{{fieldData.field_character_limit -\r\n                            inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                            characterCountMessageData.right.message_text : ''}}\r\n                        </span>\r\n                    </div>\r\n\r\n                    <!-- Error messages -->\r\n                    <ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n                        <ng-container\r\n                            *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField?.value)\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                <div>\r\n                                    <p *ngIf=\"message.color && message.message_text\"\r\n                                        [ngStyle]=\"{'color': message.color}\">\r\n                                        {{message.message_text}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n\r\n                    <ng-template #ceeError>\r\n                        <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                            <ng-container *ngFor=\"let message of messages\">\r\n                                <div class=\"error-message-wrapper\"\r\n                                    *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                    <div *ngIf=\"textField?.errors.required\">\r\n                                        <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField?.value\"\r\n                                            [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                            {{returnMessageData(message.code).message_text}}</p>\r\n                                    </div>\r\n                                    <div *ngIf=\"textField?.errors?.minlength\">\r\n                                        <p *ngIf=\"message.type == 'minlength' && textField?.value\"\r\n                                            [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                            {{returnMessageData(message.code).message_text}}</p>\r\n                                    </div>\r\n                                    <div *ngIf=\"textField?.errors.pattern\">\r\n                                        <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                            [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                            {{returnMessageData(message.code).message_text}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-template #singleErrorMessage>\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                                <div\r\n                                    *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n                                    <p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n                                        [ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-template>\r\n                    </ng-template>\r\n                    <ng-container *ngIf=\"!textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                        <div class=\"error-message-wrapper\" *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                            <div>\r\n                                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                    {{item.value.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-template #materialPasswordField>\r\n                <div\r\n                    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ !valid || (textField?.invalid && isMandatory && ( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext)) ? 'invalid' : 'valid' }} {{fieldData.field_class_name}}\">\r\n                    <mat-form-field class=\"mat-full-width\">\r\n                        <mat-label>\r\n                            <ng-container [ngTemplateOutlet]=\"materialLabel\"></ng-container>\r\n                        </mat-label>\r\n                        <!-- <input matInput (paste)=\"onOverrideHandler($event)\" [textMask]=\"{ mask: mask, guide: false }\" -->\r\n                        <input matInput (paste)=\"onOverrideHandler($event)\" [specialCharacters]=\"maskSpecialCharacters\" [mask]=\"maskString\" [dropSpecialCharacters]=\"maskDropSpecialCharacters\"\r\n                            (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n                            type=\"{{ hide ? 'password':'text' }}\" [id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\"\r\n                            [pattern]=\"!maskString ? validationRegex : ''\"\r\n                            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                            maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                            [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\"\r\n                            (keyup)=\"onKey($event, textField)\" (keydown)=\"onKeyDown($event, textField)\"\r\n                            (blur)=\"onSessionDataUpdated(textField?.value, textField)\" [disabled]=\"!isEditable\"\r\n                            #textField=\"ngModel\" [required]=\"isMandatory\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n                            (focus)=\"onFocus($event)\" />\r\n\r\n                        <!-- Tooltip with informaion icon -->\r\n                        <button *ngIf=\"hasTooltip\" type=\"button\"\r\n                            class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n                            [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n                            i\r\n                        </button>\r\n\r\n                        <!-- Password visibility toggle button on textfield -->\r\n                        <button matSuffix mat-icon-button (click)=\"hide = !hide\">\r\n                            <mat-icon [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\" class=\"pointer\">\r\n                                {{hide ? 'visibility_off' : 'visibility'}}\r\n                            </mat-icon>\r\n                        </button>\r\n\r\n                        <!-- Clear Button i.e cross button to clear the input text -->\r\n                        <button matSuffix mat-icon-button aria-label=\"Clear\"\r\n                            *ngIf=\"isEditable && additionalParameter['ClearButton'] && inputValue.length > 0\"\r\n                            (click)=\"clearValue($event)\">\r\n                            <mat-icon>close</mat-icon>\r\n                        </button>\r\n                    </mat-form-field>\r\n                </div>\r\n\r\n                <!-- Differet messages below the text field -->\r\n                <div class=\"display_character_count\" *ngIf=\"characterCount.display\" [ngSwitch]=\"characterCount.type\">\r\n                    <span *ngSwitchCase=\"'Count'\"\r\n                        [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                        {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                        :\r\n                        ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                        ? characterCountMessageData.right.message_text : ''}}\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Remaining'\"\r\n                        [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                        {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                        :\r\n                        ''}}{{fieldData.field_character_limit -\r\n                        inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                        ? characterCountMessageData.right.message_text : ''}}\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'Total'\"\r\n                        [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                        {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                        :\r\n                        ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                        characterCountMessageData.right.message_text : ''}}\r\n                    </span>\r\n                    <span *ngSwitchCase=\"'CharRemaining'\"\r\n                        [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                        {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text\r\n                        :\r\n                        ''}}{{fieldData.field_character_limit -\r\n                        inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                        characterCountMessageData.right.message_text : ''}}\r\n                    </span>\r\n                </div>\r\n                <ng-container *ngIf=\"customCheck && messages.length === 0, else ceeError\">\r\n                    <ng-container\r\n                        *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textField?.value)\">\r\n                        <div class=\"error-message-wrapper\"\r\n                            *ngIf=\"( (mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                            <div>\r\n                                <p *ngIf=\"message.color && message.message_text\" [ngStyle]=\"{'color': message.color}\">\r\n                                    {{message.message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n                <ng-template #ceeError>\r\n                    <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                        <ng-container *ngFor=\"let message of messages\">\r\n                            <div class=\"error-message-wrapper\"\r\n                                *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value )\">\r\n                                <div *ngIf=\"textField?.errors.required\">\r\n                                    <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textField?.value\"\r\n                                        [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                        {{returnMessageData(message.code).message_text}}</p>\r\n                                </div>\r\n                                <div *ngIf=\"textField?.errors?.minlength\">\r\n                                    <p *ngIf=\"message.type == 'minlength' && textField?.value\"\r\n                                        [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                        {{returnMessageData(message.code).message_text}}</p>\r\n                                </div>\r\n                                <div *ngIf=\"textField?.errors.pattern\">\r\n                                    <p *ngIf=\"message.type == 'Regex' && textField?.value\"\r\n                                        [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                        {{returnMessageData(message.code).message_text}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-template #singleErrorMessage>\r\n                        <div class=\"error-message-wrapper\"\r\n                            *ngIf=\"textField?.invalid && ((mask && textField?.dirty ? maskDirty : textField?.dirty) || textField?.touched || showErrorOnNext || textField?.value)\">\r\n                            <div\r\n                                *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n                                <p *ngIf=\"isMandatory\" [innerHTML]=\"errorMessageData.message_text\"\r\n                                    [ngStyle]=\"{'color': errorMessageData.color}\"></p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-template>\r\n                </ng-template>\r\n                <ng-container *ngIf=\"!textField?.invalid\">\r\n                    <div class=\"error-message-wrapper\" *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                        <div>\r\n                            <p [ngStyle]=\"{'color': item.value.color}\">\r\n                                {{item.value.message_text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-template>\r\n\r\n            <ng-container *ngIf=\"additionalParameter['Textfield Type'] == 'Search'\">\r\n                <div class=\"form-button\">\r\n                    <button class=\"cee-search-button cee-search-button-{{fieldData.unique_id}}\"\r\n                        id=\"search_{{fieldData.unique_id}}\"\r\n                        [attr.aria-label]=\"'Click On ' + additionalParameter['Button Label'] \"\r\n                        [ngClass]=\"{'Search':'default'}[fieldData.field_type]\" type=\"button\"\r\n                        (click)=\"triggerEvent()\"\r\n                        [disabled]=\"!isValid || !searchButtonEditable || !isEditable\">{{buttonLabel}}</button>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <!-- Tooltip with informaion icon -->\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n                [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n                i\r\n            </button>\r\n        </ng-template>\r\n\r\n        <!-- Tooltip Template -->\r\n        <!-- <ng-template #tooltipTemplate>\r\n            <div class=\"tooltip_container\">\r\n                <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n            </div>\r\n        </ng-template> -->\r\n    </div>\r\n</ng-template>\r\n", styles: [".mat-full-width{width:100%}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.CeeApiService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }], { textField: [{
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
        }], inputField: [{
            type: ViewChild,
            args: ['inputField']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTextfieldComponent, { className: "CeeTextfieldComponent", filePath: "lib\\field-components\\cee-textfield\\cee-textfield.component.ts", lineNumber: 49 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRleHRmaWVsZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtdGV4dGZpZWxkL2NlZS10ZXh0ZmllbGQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRleHRmaWVsZC9jZWUtdGV4dGZpZWxkLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE2RCxTQUFTLEVBQWlDLE1BQU0sZUFBZSxDQUFDO0FBUTlKLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDOUQsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFHcEUsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRXJELE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBQzdDLE9BQU8sRUFBRSxXQUFXLEVBQVcsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDMUQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLHNCQUFz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QUFFLE9BQU8sRUFBRSxzQkFBc0I7b0JBQ3hGLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxhQUFhO2lCQUFDLGFBQ3pEO29CQUNQLGNBQWMsRUFBRTtvQkFDaEIsVUFBVTtpQkFDYjttWUFJdUIsU0FBUztrQkFBaEMsU0FBUzttQkFBQyxXQUFXO1lBRUwsTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7WUFrRG1CLFVBQVU7a0JBQWxDLFNBQVM7bUJBQUMsWUFBWTs7a0ZBN0RkLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIE91dHB1dCwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgU2Vzc2lvbktleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLWtleS11dGlsJztcclxuaW1wb3J0IHsgV2ZlRW5jcnlwdGlvblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtZW5jcnlwdGlvbi11dGlsJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgZGVib3VuY2VUaW1lLCBmaWx0ZXIsIHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFN1YmplY3QsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENhbGN1bGF0aW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NhbGN1bGF0aW9uJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBDdXN0b21Ub29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9hcHAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTmdDbGFzcywgTmdTdHlsZSwgTmdTd2l0Y2gsIE5nVGVtcGxhdGVPdXRsZXQgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IFNob3dQYXNzd29yZERpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvc2hvd1Bhc3N3b3JkL3Nob3dQYXNzd29yZC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IHByb3ZpZGVOZ3hNYXNrLCBOZ3hNYXNrRGlyZWN0aXZlIH0gZnJvbSAnbmd4LW1hc2snXHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBUaG91c2FuZFNlcGFyYXRvclBpcGUgfSBmcm9tICcuLi8uLi9waXBlcy90aG91c2FuZC1zZXBhcmF0b3IucGlwZSc7XHJcbmltcG9ydCB7IFNlcGFyYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdGhvdXNhbmRTZXBhcmF0b3Ivc2VwYXJhdG9yLmRpcmVjdGl2ZSc7XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLXRleHRmaWVsZCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLXRleHRmaWVsZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jZWUtdGV4dGZpZWxkLmNvbXBvbmVudC5zY3NzJywgJy4uL2ZpZWxkLWNvbW1vbi5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIFNlcGFyYXRvckRpcmVjdGl2ZSwgTWF0Rm9ybUZpZWxkTW9kdWxlLCBNYXRJbnB1dE1vZHVsZSwgRm9ybXNNb2R1bGUsIE5nVGVtcGxhdGVPdXRsZXQsIFxyXG4gICAgICAgIFNob3dQYXNzd29yZERpcmVjdGl2ZSwgTmdTd2l0Y2gsIE1hdEljb25Nb2R1bGUsIE5nU3R5bGUsIE5nQ2xhc3MsIEN1c3RvbVRvb2x0aXBEaXJlY3RpdmUsXHJcbiAgICAgICAgTWF0VG9vbHRpcE1vZHVsZSwgTmd4TWFza0RpcmVjdGl2ZSwgQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIHByb3ZpZGVOZ3hNYXNrKCksXHJcbiAgICAgICAgQ29tbW9uVXRpbFxyXG4gICAgXSxcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDZWVUZXh0ZmllbGRDb21wb25lbnQgZXh0ZW5kcyBCYXNlVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gICAgQFZpZXdDaGlsZCgndGV4dEZpZWxkJykgdGV4dEZpZWxkOiBOZ01vZGVsO1xyXG5cclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgcHJpbWFyeUtleUluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIG1hbmRhdG9yeUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZWRpdGFibGVDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHZpc2libGVDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IG9iamVjdDtcclxuXHJcbiAgICB3ZmVFbmNyeXB0aW9uOiBXZmVFbmNyeXB0aW9uVXRpbDtcclxuICAgIGRlY2xhcmUgc2Vzc2lvbktleVV0aWw6IFNlc3Npb25LZXlVdGlsO1xyXG4gICAgdmFsaWRhdGlvblJlZ2V4ID0gJyc7XHJcbiAgICBpbnB1dFZhbHVlOiBhbnkgPSAnJztcclxuICAgIGJ1dHRvbkxhYmVsID0gJyc7XHJcbiAgICBzZWFyY2hCdXR0b25FZGl0YWJsZSA9IHRydWU7XHJcbiAgICBpc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgaXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFdoZW4gXCJEYXRhIEZvcm1hdFwiIGF2YWlsYWJsZVxyXG4gICAgbWFzazogYW55ID0gZmFsc2U7XHJcbiAgICBtYXNrRGlydHk6IGFueSA9IGZhbHNlO1xyXG4gICAgbWFza1N0cmluZzogYW55O1xyXG4gICAgbWFza1N0cmluZ0NvcHk6IGFueTtcclxuICAgIHNlcGFyYXRvcjogYW55ID0gJywnO1xyXG4gICAgZGVjaW1hbE1hcmtlcjogYW55ID0gJy4nO1xyXG5cclxuICAgIC8vIFdoZW4gXCJBUEkgRGF0YSBGb3JtYXRcIiBhdmFpbGFibGVcclxuICAgIGFwaURhdGFGb3JtYXQgPSAnJztcclxuICAgIGFwaURhdGFGb3JtYXRNYXNrOiBhbnkgPSBmYWxzZTtcclxuXHJcbiAgICBtYXNrRHJvcFNwZWNpYWxDaGFyYWN0ZXJzOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIG1hc2tTcGVjaWFsQ2hhcmFjdGVyczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBwaG9uZVBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeXFxcXGR7M30tXFxcXGR7M30tXFxcXGR7NH0oPzpcXFxccytleHRcXFxccytcXFxcZHszfSk/JCcpO1xyXG4gICAgd2l0aG91dFNwYWNlUGF0dGVybiA9IG5ldyBSZWdFeHAoJ15cXFxcZHszfS1cXFxcZHszfS1cXFxcZHs0fSQnKTtcclxuICAgIHdpdGhTcGFjZVBhdHRlcm4gPSBuZXcgUmVnRXhwKCdeXFxcXGR7M30tXFxcXGR7M30tXFxcXGR7NH1cXFxccyQnKTtcclxuICAgIHdpdGhFeHRQYXR0ZXJuID0gbmV3IFJlZ0V4cCgnXlxcXFxkezN9LVxcXFxkezN9LVxcXFxkezR9IGV4dFxcXFxzJCcpO1xyXG5cclxuICAgICRlbWl0S2V5RG93bjogU3Vic2NyaXB0aW9uO1xyXG4gICAgdGltZXIgPSBudWxsO1xyXG4gICAgdGltZXIxID0gbnVsbDtcclxuICAgIGh0bWxfaWQgPSAnJztcclxuICAgIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgc2hvd0Nyb3NzID0gZmFsc2U7XHJcbiAgICBoaWRlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG9sZEZpZWxkRGF0YTogYW55ID0ge307XHJcbiAgICBpc1NldCA9IGZhbHNlO1xyXG4gICAgaW5wdXRUeXBlID0gJ3RleHQnO1xyXG4gICAgb2xkSW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgY2FsY3VsYXRpb25VdGlsOiBDYWxjdWxhdGlvblV0aWw7XHJcbiAgICBjYWxjdWxhdGlvblJvdW5kT2ZmOiBudW1iZXI7XHJcbiAgICBpbnB1dFByZWZpeDogYW55ID0gJyc7XHJcbiAgICBpbnB1dFN1ZmZpeDogYW55ID0gJyc7XHJcbiAgICBub25lZGl0YWJsZVBsYWNlaG9sZGVyID0gXCJcIjtcclxuICAgIGZpZWxkUGxhY2Vob2xkZXI6IGFueSA9IFwiXCI7XHJcbiAgICBwcmV2Q29tbWFDb3VudDogYW55ID0gMDtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdpbnB1dEZpZWxkJykgaW5wdXRGaWVsZDogRWxlbWVudFJlZjtcclxuICAgIHByaXZhdGUgZW50ZXJLZXlTdWJqZWN0ID0gbmV3IFN1YmplY3Q8S2V5Ym9hcmRFdmVudD4oKTtcclxuICAgIHB1YmxpYyBlbnRlcktleVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGlzVGhvdXNhbmRTZXBhcmF0b3JFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcblxyXG4gICAgaXNEYXRhRm9ybWF0V2l0aFJlZ2V4OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLCBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyKTtcclxuICAgICAgICB0aGlzLndmZUVuY3J5cHRpb24gPSBuZXcgV2ZlRW5jcnlwdGlvblV0aWwoKTtcclxuICAgICAgICB0aGlzLnNlc3Npb25LZXlVdGlsID0gbmV3IFNlc3Npb25LZXlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLmNhbGN1bGF0aW9uVXRpbCA9IG5ldyBDYWxjdWxhdGlvblV0aWwoKTtcclxuXHJcbiAgICAgICAgdGhpcy5lbnRlcktleVN1YnNjcmlwdGlvbiA9IHRoaXMuZW50ZXJLZXlTdWJqZWN0LnBpcGUoXHJcbiAgICAgICAgICAgIGRlYm91bmNlVGltZSg1MDApLFxyXG4gICAgICAgICAgICBmaWx0ZXIoZXZlbnQgPT4gZXZlbnQua2V5ID09PSAnRW50ZXInKVxyXG4gICAgICAgICkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy50cmlnZ2VyRXZlbnQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgICAgICB0aGlzLmZpZWxkUGxhY2Vob2xkZXIgPSB0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0O1xyXG4gICAgICAgIHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlciA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX05vbmVkaXRhYmxlX1BsYWNlaG9sZGVyJ10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9Ob25lZGl0YWJsZV9QbGFjZWhvbGRlciddIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5ub25lZGl0YWJsZVBsYWNlaG9sZGVyICYmICF0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA9IHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkVkaXRhYmxlU3RhdHVzQ2hhbmdlZC5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEudW5pcXVlX2lkID09IHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlciAmJiAhdGhpcy5pc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA9IHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA9IHRoaXMuZmllbGRQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICAvLyBvbkRlc3Ryb3koKSB7XHJcbiAgICAvLyAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBDbGVhciBhbGwgc3Vic2NyaXB0aW9uc1xyXG4gICAgICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbnMpIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsZWFyIGFsbCB0aW1lb3V0c1xyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRpbWVyMSkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcjEpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyMSA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENvbXBsZXRlIHN1YmplY3RcclxuICAgICAgICBpZiAodGhpcy5lbnRlcktleVN1YmplY3QpIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRlcktleVN1YmplY3QuY29tcGxldGUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuZW50ZXJLZXlTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRlcktleVN1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBDbGVhbiB1cCBhbnkgZXZlbnQgaGFuZGxlcnMgc3RvcmVkIGluIHZhcmlhYmxlT2JqZWN0XHJcbiAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy52YXJpYWJsZU9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3Rba2V5XSAmJiB0eXBlb2YgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBDbGVhciBvYmplY3QgcmVmZXJlbmNlc1xyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgRE9NIHJlZmVyZW5jZXNcclxuICAgICAgICBpZiAodGhpcy5yb290RGF0YSAmJiB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ10gJiYgdGhpcy5maWVsZERhdGEpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVt0aGlzLmZpZWxkRGF0YS5odG1sX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgYXJpdGhtZXRpYyBuYW1lIHJlZmVyZW5jZXNcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyPy5bXCJBcml0aG1ldGljTmFtZVwiXSAmJiBcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YT8uWydBcml0aG1ldGljTmFtZXMnXT8uW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkFyaXRobWV0aWNOYW1lXCJdXT8uY2FsY3VsYXRpb25zKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb3REYXRhWydBcml0aG1ldGljTmFtZXMnXVt0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJBcml0aG1ldGljTmFtZVwiXV0uY2FsY3VsYXRpb25zW3RoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsZWFyIHJlZmVyZW5jZXMgdG8gbGFyZ2Ugb2JqZWN0c1xyXG5cclxuICAgICAgICB0aGlzLnJvb3REYXRhID0gbnVsbDtcclxuICAgIFxyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2FsbCBiYXNlIGNsYXNzIGRlc3Ryb3kgbWV0aG9kIGlmIGl0IGV4aXN0c1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIC8vIGZ1bmN0aW9uIHJldHVybnMgdGhlIHZhbHVlIHdoZXRoZXIgdG8gc3RvcCBjb3B5IG9yIHBhc3RlIGV2ZW50IChyZXR1cm4gZmFsc2UgbWVhbnMgcGF1c2UpXHJcbiAgICAvLyB7IFwicGFyYW1ldGVyX3R5cGVcIjogXCJPdmVycmlkZVwiLCBcInZhbHVlXCI6XCJDT1BZfHxQQVNURXx8Q1VUXCJ9IHdoaWNoZXZlciBldmVudCB5b3Ugd2FudCB0byBzdG9wXHJcbiAgICBvbk92ZXJyaWRlSGFuZGxlcihldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC50eXBlID09IFwicGFzdGVcIiAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TVFJJTkdfRk9STUFUJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU1RSSU5HX0ZPUk1BVCddICE9ICcnICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0ZPUk1BVF9PTl9LRVlfUFJFU1MnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9GT1JNQVRfT05fS0VZX1BSRVNTJ10udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZChldmVudC50YXJnZXQudmFsdWUsIHRoaXMudGV4dEZpZWxkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIk92ZXJyaWRlXCJdKSB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIk92ZXJyaWRlXCJdLnNwbGl0KCd8fCcpLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09IGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuY2FsY3VsYXRpb25Sb3VuZE9mZiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjYWxjdWxhdGlvblJvdW5kT2ZmJykgPyBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NhbGN1bGF0aW9uUm91bmRPZmYnKSkgOiAyXHJcbiAgICAgICAgdGhpcy5vbGRGaWVsZERhdGEgPSB0aGlzLmZpZWxkRGF0YTtcclxuICAgICAgICAvLyBGb3IgdW5pcXVlIGh0bWwgaWRcclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLmZpZWxkRGF0YS5odG1sX2lkO1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF90eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdwYXNzd29yZCcgfHwgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGlzcGxheV9wYXNzd29yZCddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGlzcGxheV9wYXNzd29yZCddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhpZGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBFTkQgXHJcbiAgICAgICAgdGhpcy5pbnB1dFByZWZpeCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0lOUFVUX1BSRUZJWCddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfSU5QVVRfUFJFRklYJ10gOiAnJztcclxuICAgICAgICB0aGlzLmlucHV0U3VmZml4ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfSU5QVVRfU1VGRklYJ10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9JTlBVVF9TVUZGSVgnXSA6ICcnO1xyXG5cclxuICAgICAgICB0aGlzLnRhYkluZGV4VmFsdWUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RhYkluZGV4J107XHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVnZXggPSAodGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCAmJiB0eXBlb2YgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleC53ZWIgPT0gJ29iamVjdCcgJiYgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleC5XZWIgIT09ICcnKSA/IHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXgud2ViXHJcbiAgICAgICAgICAgIDogKHR5cGVvZiB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4ID09ICdzdHJpbmcnICYmIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggIT09ICcnKSA/IHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggOiAnJztcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5maWVsZFZhbHVlKSA/IHRoaXMuZmllbGRWYWx1ZSA6ICcnO1xyXG4gICAgICAgXHJcbiAgICAgICAgICAgIC8vIFN0b3JlIHRoZSBpbml0aWFsIGRlZmF1bHQgdmFsdWUgdG8gcmVzdG9yZSBpdCBsYXRlciB3aGVuIHNlc3Npb24gaXMgZW1wdGllZFxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlucHV0VmFsdWUpIHsgLy8gT25seSBzZXQgaWYgaW5wdXRWYWx1ZSBpcyBlbXB0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkF1dG9Db21wbGV0ZVRleHRcIl0gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQXV0b0NvbXBsZXRlVGV4dFwiXSA9PSBcIk9GRlwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXV0b2NvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvciBtYXNraW5nIGFzIFwiQVBJIERhdGEgRm9ybWF0XCJcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQVBJIERhdGEgRm9ybWF0XCJdICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkFQSSBEYXRhIEZvcm1hdFwiXSAhPSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGFGb3JtYXRNYXNrID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YUZvcm1hdCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkFQSSBEYXRhIEZvcm1hdFwiXTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YUZvcm1hdC5zcGxpdCgnJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQgPT0gJ1gnID8gdGhpcy5hcGlEYXRhRm9ybWF0TWFzay5wdXNoKC9bMC05YS16QS1aXS8pIDogZWxlbWVudCA9PSAnMCcgPyB0aGlzLmFwaURhdGFGb3JtYXRNYXNrLnB1c2goL1xcZC8pIDogdGhpcy5hcGlEYXRhRm9ybWF0TWFzay5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvciBtYXNraW5nIGFzIFwiRGF0YSBGb3JtYXRcIlxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEYXRhIEZvcm1hdFwiXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEYXRhIEZvcm1hdFwiXSAhPSAnJykge1xyXG5cclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdmFsaWRhdGlvbiByZWdleCBpcyBwcmVzZW50IHdpdGggRGF0YSBGb3JtYXRcclxuICAgICAgICAgICAgdGhpcy5pc0RhdGFGb3JtYXRXaXRoUmVnZXggPSB0aGlzLnZhbGlkYXRpb25SZWdleCAmJiB0aGlzLnZhbGlkYXRpb25SZWdleCAhPSAnJyA/IHRydWUgOiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIHRoaXMubWFzayA9IFtdO1xyXG5cclxuICAgICAgICAgICAgbGV0IG1hc2tGb3JtYXQgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEYXRhIEZvcm1hdFwiXTtcclxuICAgICAgICAgICAgdGhpcy5tYXNrU3RyaW5nID0gbWFza0Zvcm1hdDtcclxuICAgICAgICAgICAgdGhpcy5tYXNrU3RyaW5nQ29weSA9IHRoaXMubWFza1N0cmluZztcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQqKionLCB0aGlzLmZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tYXNrRHJvcFNwZWNpYWxDaGFyYWN0ZXJzID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiRGF0YSBGb3JtYXRcIl0gIT09IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkFQSSBEYXRhIEZvcm1hdFwiXTtcclxuICAgICAgICAgICAgY29uc3QgbWFza0NoYXJzID0gWycwJywgJ1MnLCAnQScsICcqJ107XHJcbiAgICAgICAgICAgIGNvbnN0IG1hc2tTcGVjaWFsQ2hhcmFjdGVycyA9IG1hc2tGb3JtYXQuc3BsaXQoXCJcIikuZmlsdGVyKHQgPT4gIW1hc2tDaGFycy5pbmNsdWRlcyh0KSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza1NwZWNpYWxDaGFyYWN0ZXJzID0gbWFza1NwZWNpYWxDaGFyYWN0ZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSwgcG9zKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbWFza1NwZWNpYWxDaGFyYWN0ZXJzLmluZGV4T2YoaXRlbSkgPT0gcG9zO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gbWFza0Zvcm1hdC5zcGxpdCgnJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGVsZW1lbnQgPT0gJ1gnID8gdGhpcy5tYXNrLnB1c2goL1swLTlhLXpBLVpdLykgOiBlbGVtZW50ID09ICcwJyA/IHRoaXMubWFzay5wdXNoKC9cXGQvKSA6IHRoaXMubWFzay5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5nZXRNYXNrZWRJbnB1dFZhbHVlKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5tYXNrKTtcclxuICAgICAgICAgICAgLy8gdGhpcy52YWxpZGF0aW9uUmVnZXggPSBcIlwiO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5maWVsZFZhbHVlKSA/IHRoaXMuZmllbGRWYWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5mb3JtYXRUaG91c2FuZFNlcGFyYXRvcih0aGlzLmlucHV0VmFsdWUpO1xyXG5cclxuICAgICAgICB0aGlzLnNldFNlYXJjaERhdGEoKTtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmZpZWxkRGF0YS5maWVsZF90eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ1Bhc3N3b3JkJzpcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRUeXBlID0gJ3Bhc3N3b3JkJztcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFR5cGUgPSAndGV4dCc7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9mb3IgVmFsaWRhdGUgQU5EIE1hbmRhdG9yeSBlcnJvclxyXG4gICAgICAgIGlmICh0aGlzLnJvb3REYXRhICYmIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ11bdGhpcy5maWVsZERhdGEuaHRtbF9pZF0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKT8uZm9jdXMoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMudmFsaWQ7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUFyaXRobWV0aWNOYW1lKCk7XHJcbiAgICAgICAgdGhpcy5zZXRWYWx1ZUNhbGN1bGF0aW9uKCk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX01hc2tOdW1iZXJMaW1pdCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoJ0NFRV9UaG91c2FuZF9TZXBhcmF0b3InKSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9UaG91c2FuZF9TZXBhcmF0b3InXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzVGhvdXNhbmRTZXBhcmF0b3JFbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUaG91c2FuZFNlcGFyYXRvckVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmZvcm1hdE51bWJlcih0aGlzLmlucHV0VmFsdWUpOyAgXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnB1dFZhbHVlICE9ICcnICYmIHRoaXMuaW5wdXRWYWx1ZSAhPSB1bmRlZmluZWQgJiYgdGhpcy5pbnB1dFZhbHVlICE9IG51bGwgJiYgIXRoaXMuaW5wdXRWYWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlICs9ICcuMDAnO1xyXG4gICAgICAgICAgICAgICAgICB9ICAgICAgICAgICBcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKCF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoJ2RlZmF1bHRfdmFsdWUnKSB8fCAoIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eSgnZGVmYXVsdF92YWx1ZScpICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF92YWx1ZSddLmluZGV4T2YoJ3x8JykgPT09IC0xKSl7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRWYWx1ZUFyaXRobWV0aWNOYW1lKHNvdXJjZSA9IFtdKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkFyaXRobWV0aWNOYW1lXCJdICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkFyaXRobWV0aWNOYW1lXCJdICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFyaXRobWV0aWNOYW1lID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQXJpdGhtZXRpY05hbWVcIl07XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3REYXRhWydBcml0aG1ldGljTmFtZXMnXVthcml0aG1ldGljTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0FyaXRobWV0aWNOYW1lcyddW2FyaXRobWV0aWNOYW1lXVsndmFsdWUnXVxyXG4gICAgICAgICAgICAgICAgICAgID0gdGhpcy5pbnB1dFZhbHVlLnJlcGxhY2VBbGwoJywnLCAnJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhWydBcml0aG1ldGljTmFtZXMnXVthcml0aG1ldGljTmFtZV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuaW5wdXRWYWx1ZS5yZXBsYWNlQWxsKCcsJywgJycpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0aW9uczoge31cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHVJZCBpbiB0aGlzLnJvb3REYXRhWydfQXJpdGhtZXRpY05hbWVzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb290RGF0YVsnX0FyaXRobWV0aWNOYW1lcyddW3VJZF0udmFsdWUuaW5jbHVkZXMoYXJpdGhtZXRpY05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0FyaXRobWV0aWNOYW1lcyddW2FyaXRobWV0aWNOYW1lXS5jYWxjdWxhdGlvbnNbdUlkXSA9IHRoaXMucm9vdERhdGFbJ19Bcml0aG1ldGljTmFtZXMnXVt1SWRdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5yb290RGF0YVsnX0FyaXRobWV0aWNOYW1lcyddW3VJZF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgdW5pcXVlX2lkIGluIHRoaXMucm9vdERhdGFbJ0FyaXRobWV0aWNOYW1lcyddW2FyaXRobWV0aWNOYW1lXVsnY2FsY3VsYXRpb25zJ10pIHtcclxuICAgICAgICAgICAgICAgIGlmICghc291cmNlLmluY2x1ZGVzKHVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBzb3VyY2UucHVzaCh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0FyaXRobWV0aWNOYW1lcyddW2FyaXRobWV0aWNOYW1lXVsnY2FsY3VsYXRpb25zJ11bdW5pcXVlX2lkXS5jYWxjdWxhdGUoc291cmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFZhbHVlQ2FsY3VsYXRpb24oKSB7XHJcbiAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNhbGN1bGF0aW9uXCJdICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNhbGN1bGF0aW9uXCJdICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjYWxjdWxhdGlvbiA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUoeyBmaWVsZF9sYWJlbDogdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ2FsY3VsYXRpb25cIl0gfSkuZmllbGRfbGFiZWw7XHJcbiAgICAgICAgICAgICAgICBsZXQgYU5hbWVFeGlzdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5yb290RGF0YVsnQXJpdGhtZXRpY05hbWVzJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsY3VsYXRpb24uaW5jbHVkZXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhTmFtZUV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnQXJpdGhtZXRpY05hbWVzJ11ba2V5XVsnY2FsY3VsYXRpb25zJ11bdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjYWxjdWxhdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZTogKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jYWxjdWxhdGVSZXN1bHQoY2FsY3VsYXRpb24sIHNvdXJjZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnQXJpdGhtZXRpY05hbWVzJ11ba2V5XVsnY2FsY3VsYXRpb25zJ11bdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXS5jYWxjdWxhdGUoW3RoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghYU5hbWVFeGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ19Bcml0aG1ldGljTmFtZXMnXVt0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogY2FsY3VsYXRpb24sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGN1bGF0ZTogKHNvdXJjZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNhbGN1bGF0ZVJlc3VsdChjYWxjdWxhdGlvbiwgc291cmNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMDApXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjYWxjdWxhdGVSZXN1bHQoY2FsY3VsYXRpb24sIHNvdXJjZSkge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBjYWxjdWxhdGlvbjtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnJvb3REYXRhWydBcml0aG1ldGljTmFtZXMnXSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShuZXcgUmVnRXhwKGtleSwgJ2cnKSwgdGhpcy5yb290RGF0YVsnQXJpdGhtZXRpY05hbWVzJ11ba2V5XS52YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJlc3VsdCA9IHRoaXMuY2FsY3VsYXRpb25VdGlsLmNhbGN1bGF0ZShyZXN1bHQpO1xyXG4gICAgICAgIGlmICghaXNGaW5pdGUocmVzdWx0KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAhaXNOYU4ocmVzdWx0KSA/IE1hdGgucm91bmQocmVzdWx0ICogTWF0aC5wb3coMTAsIHRoaXMuY2FsY3VsYXRpb25Sb3VuZE9mZikpIC8gTWF0aC5wb3coMTAsIHRoaXMuY2FsY3VsYXRpb25Sb3VuZE9mZikgKyAnJyA6ICcnO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2hhbmdlVmFsdWUnKTtcclxuICAgICAgICB0aGlzLnNldFZhbHVlQXJpdGhtZXRpY05hbWUoc291cmNlKVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNlYXJjaERhdGEoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnVGV4dGZpZWxkIFR5cGUnXSA9PT0gJ1NlYXJjaCcpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25MYWJlbCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQnV0dG9uIExhYmVsJ10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0J1dHRvbiBMYWJlbCddIDogJyc7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NoYXJhY3RlciBMaW1pdCddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaEJ1dHRvbkVkaXRhYmxlID0gTnVtYmVyKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ2hhcmFjdGVyIExpbWl0J10pID4gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUubGVuZ3RoID49IE51bWJlcih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NoYXJhY3RlciBMaW1pdCddKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoQnV0dG9uRWRpdGFibGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldE1hc2tlZElucHV0VmFsdWUoaW5wdXRWYWx1ZSwgbWFzaykge1xyXG4gICAgLy8gICAgIGlmIChpbnB1dFZhbHVlICYmIG1hc2sgJiYgbWFzay5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiB0aGlzLmNvbmZvcm1Ub01hc2soaW5wdXRWYWx1ZSwgbWFzaykuY29uZm9ybWVkVmFsdWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBpbnB1dFZhbHVlO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vICMjIyMjIyMjIyBUaGlzIGlzIGEgc3Vic3RpdHV0ZSBmdW5jdGlvbiBmb3IgbWFza2luZywgbmVlZCB0byB0ZXN0ICMjIyMjIyMjIyNcclxuICAgIC8vIGNvbmZvcm1Ub01hc2socmF3VmFsdWUsIG1hc2spIHtcclxuICAgIC8vICAgICBsZXQgY29uZm9ybWVkVmFsdWUgPSAnJzsgbGV0IHJhd0luZGV4ID0gMDsgZm9yIChsZXQgaSA9IDA7IGkgPCBtYXNrLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IG1hc2tDaGFyID0gbWFza1tpXTsgaWYgKHJhd0luZGV4ID49IHJhd1ZhbHVlLmxlbmd0aCkge1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7ICAvLyBTdG9wIGlmIHdlJ3ZlIHJlYWNoZWQgdGhlIGVuZCBvZiB0aGUgaW5wdXQgdmFsdWUgICAgXHJcbiAgICAvLyAgICAgICAgIH0gXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHJhd0NoYXIgPSByYXdWYWx1ZVtyYXdJbmRleF07IFxyXG4gICAgLy8gICAgICAgICBpZiAobWFza0NoYXIgPT09ICc5JyAmJiAvXFxkLy50ZXN0KHJhd0NoYXIpKSB7IFxyXG4gICAgLy8gICAgICAgICAgICAgY29uZm9ybWVkVmFsdWUgKz0gcmF3Q2hhcjsgcmF3SW5kZXgrKzsgXHJcbiAgICAvLyAgICAgICAgIH0gZWxzZSBpZiAobWFza0NoYXIgPT09ICdBJyAmJiAvW2EtekEtWl0vLnRlc3QocmF3Q2hhcikpIHsgXHJcbiAgICAvLyAgICAgICAgICAgICBjb25mb3JtZWRWYWx1ZSArPSByYXdDaGFyOyByYXdJbmRleCsrOyBcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHsgXHJcbiAgICAvLyAgICAgICAgICAgICBjb25mb3JtZWRWYWx1ZSArPSBtYXNrQ2hhcjsgXHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9IHJldHVybiB7J2NvbmZvcm1lZFZhbHVlJzogY29uZm9ybWVkVmFsdWV9O1xyXG4gICAgLy8gfVxyXG5cclxuICAgIG9uRm9jdXMoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIC8vIEZvciBPbmNsaWNrIGV2ZW50IG9uIEZvY3VzXHJcbiAgICAgICAgLy8gaWYgKCF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RleHRmaWVsZCBUeXBlJ10pIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNsaWNrJyk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIC8vIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEYXRhIEZvcm1hdFwiXSAmJiBldmVudC50YXJnZXQudmFsdWUgIT0gJycgJiYgdGhpcy5tYXNrU3RyaW5nLmluY2x1ZGVzKCdleHQnKSl7XHJcbiAgICAgICAgLy8gLy8gICAgIGNvbnN0IGZ1bGxQYXR0ZXJuID0gbmV3IFJlZ0V4cChgXlxcXFxkezN9LVxcXFxkezN9LVxcXFxkezR9KD86IGV4dCBcXFxcZHsxLDR9KT8kYCk7XHJcbiAgICAgICAgLy8gLy8gICAgIHRoaXMuaXNWYWxpZCA9IGZ1bGxQYXR0ZXJuLnRlc3QoZXZlbnQudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICAvLyAvLyAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgLy8gLy8gfVxyXG4gICAgICAgIC8vIHRoaXMub2xkSW5wdXRWYWx1ZSA9IGV2ZW50LnRhcmdldC52YWx1ZTtcclxuICAgICAgICAvLyAvLyBFTkRcclxuICAgICAgICAvLyB0aGlzLiRlbWl0S2V5RG93biA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0S2V5RG93bi5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgIC8vICAgICAvLyBpZiAodGhpcy5hcGlEYXRhRm9ybWF0KSB7XHJcbiAgICAgICAgLy8gICAgIC8vICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmdldE1hc2tlZElucHV0VmFsdWUodGhpcy5pbnB1dFZhbHVlLCB0aGlzLmFwaURhdGFGb3JtYXRNYXNrKTtcclxuICAgICAgICAvLyAgICAgLy8gfVxyXG4gICAgICAgIC8vICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLndmZUVuY3J5cHRpb24uZ2V0RW5jcnlwdGVkRGF0YSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0VuY3J5cHRpb25UeXBlJ10sIHRoaXMuaW5wdXRWYWx1ZSkpO1xyXG4gICAgICAgIC8vIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICAvLyB0aGlzLnNldFNlc3Npb25EYXRhKG5ld1ZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBvbktleShldmVudDogYW55LCB2YWx1ZTogYW55KSB7XHJcbiAgICAvLyAgICAgaWYgKGV2ZW50LmtleSA9PT0gJ1RhYicgJiYgdmFsdWUudmFsdWUgPT09ICcnKSB7XHJcbiAgICAvLyAgICAgICAgIHJldHVybjtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy5vbkRpcnR5KCk7XHJcbiAgICAvLyAgICAgdGhpcy5pc1ZhbGlkID0gdmFsdWUudmFsaWQ7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkRhdGEgRm9ybWF0XCJdICYmIHZhbHVlLnZhbHVlID09ICcnKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMubWFza0RpcnR5ID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgbGV0IHBhdHRlcm4gPSAvWzAtOVxcK1xcLVxcIF0vO1xyXG4gICAgLy8gICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiRGF0YSBGb3JtYXRcIl0uY2hhckF0KDApICE9ICcwJyAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEYXRhIEZvcm1hdFwiXS5jaGFyQXQoMSkgIT0gJzAnKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBwYXR0ZXJuID0gL1swLTlhLXpBLVpcXCtcXC1cXCBdLztcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgICAgICBsZXQgaW5wdXRDaGFyID0gU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXkpO1xyXG4gICAgLy8gICAgICAgICBpZiAoIXBhdHRlcm4udGVzdChpbnB1dENoYXIpKSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm1hc2tEaXJ0eSA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgfVxyXG5cclxuICAgIC8vICAgICBpZiAoIXRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ2hhcmFjdGVyIExpbWl0J10gfHwgdGhpcy5pbnB1dFZhbHVlLmxlbmd0aCA+PSBOdW1iZXIodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDaGFyYWN0ZXIgTGltaXQnXSkpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b25FZGl0YWJsZSA9IHRydWU7XHJcbiAgICAvLyAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b25FZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgLy8gICAgIH1cclxuXHJcbiAgICAvLyAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQmluZEtleSddKSB7XHJcbiAgICAvLyAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0JpbmRLZXknXS5zcGxpdCgnfCcpLm1hcChzdHIgPT4gTnVtYmVyKHN0ci50cmltKCkpKS5pbmNsdWRlcyhldmVudC5rZXlDb2RlKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gaWYgKHRoaXMuYXBpRGF0YUZvcm1hdCkge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZ2V0TWFza2VkSW5wdXRWYWx1ZSh0aGlzLmlucHV0VmFsdWUsIHRoaXMuYXBpRGF0YUZvcm1hdE1hc2spO1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gfVxyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy53ZmVFbmNyeXB0aW9uLmdldEVuY3J5cHRlZERhdGEoXHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRW5jcnlwdGlvblR5cGUnXSwgdGhpcy5pbnB1dFZhbHVlKSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgIC8vICAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25CaW5kS2V5Jyk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICBsZXQgdXNlcklucHV0ID0gdmFsdWUudmFsdWU7XHJcbiAgICAvLyAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnRpbWVyKTtcclxuICAgIC8vICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gaWYgKHRoaXMuYXBpRGF0YUZvcm1hdCkge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gdXNlcklucHV0ID0gdGhpcy5nZXRNYXNrZWRJbnB1dFZhbHVlKHVzZXJJbnB1dCwgdGhpcy5hcGlEYXRhRm9ybWF0TWFzayk7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyB9XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLndmZUVuY3J5cHRpb24uZ2V0RW5jcnlwdGVkRGF0YShcclxuICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydFbmNyeXB0aW9uVHlwZSddLCB1c2VySW5wdXQpLCB0aGlzLmlzVmFsaWQpO1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbktleVVwJyk7XHJcbiAgICAvLyAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuc2V0VmFsdWVBcml0aG1ldGljTmFtZSgpO1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TVFJJTkdfRk9STUFUJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU1RSSU5HX0ZPUk1BVCddICE9ICcnICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0ZPUk1BVF9PTl9LRVlfUFJFU1MnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9GT1JNQVRfT05fS0VZX1BSRVNTJ10udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZCh2YWx1ZS52YWx1ZSwgdmFsdWUpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICB2YWxpZGF0ZUNvbWJpbmVkUGhvbmVGb3JtYXQodmFsdWU6IGFueSkge1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMudmFsaWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm1hc2tEaXJ0eSA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMucGhvbmVQYXR0ZXJuLnRlc3QodmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnTWF0Y2hlZCB3aXRoIGNvbWJpbmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE1vZGlmaWVkIGZ1bmN0aW9uIHRvIGNoZWNrIGZvciBwaG9uZSBleHRlbnNpb24gdmFsaWRhdGlvblxyXG4gICAgZ2V0UmVnZXhNZXNzYWdlKGNvZGU6IGFueSkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIGlucHV0IGNvbnRhaW5zIGV4dGVuc2lvbiBhbmQgaGFzIHBob25lIGV4dGVuc2lvbiB2YWxpZGF0aW9uIGNvbmZpZ3VyZWRcclxuICAgICAgICBpZiAodGhpcy5pbnB1dFZhbHVlICYmIHRoaXMuaW5wdXRWYWx1ZS5pbmNsdWRlcygnZXh0JykgJiYgXHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcj8uWydDRUVfUGhvbmVOb0V4dFZhbGlkYXRpb24nXSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZXR1cm5NZXNzYWdlRGF0YSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9QaG9uZU5vRXh0VmFsaWRhdGlvbiddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucmV0dXJuTWVzc2FnZURhdGEoY29kZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmFsaWRhdGVEYXRhRm9ybWF0KHZhbHVlOiBhbnksIGNvZGU6IGFueSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5sZW5ndGggPiAxMyAmJiAhdmFsdWUuaW5jbHVkZXMoJ2V4dCcpICYmIGNvZGUgIT0gJ0JhY2tzcGFjZScpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSBgJHt2YWx1ZS5zbGljZSgwLCAxMil9IGV4dCAke3ZhbHVlLmF0KC0xKS5yZXBlYXQoMyl9YDtcclxuICAgICAgICAgICAgdGhpcy5tYXNrU3RyaW5nID0gJzAwMC0wMDAtMDAwMCBleHQgMConO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLnNldFZhbHVlKHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tEaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb2RlID09ICdCYWNrc3BhY2UnICYmIHRoaXMud2l0aEV4dFBhdHRlcm4udGVzdCh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgwLCAtNSk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza1N0cmluZyA9ICcwMDAtMDAwLTAwMDAqJztcclxuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5zZXRWYWx1ZSh2YWx1ZS50cmltKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza0RpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnICcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVDb21iaW5lZFBob25lRm9ybWF0KHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tEaXJ0eSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWFza0RpcnR5ID0gdHJ1ZTtcclxuICAgICAgICAvLyBsZXQgd2l0aFNwYWNlID0gY29kZSA9PSAnU3BhY2UnIHx8IHZhbHVlLmluY2x1ZGVzKCcgJyk7XHJcbiAgICAgICAgLy8gbGV0IGV4dHJhU3BhY2UgPSBjb2RlID09ICdTcGFjZScgJiYgIXZhbHVlLmluY2x1ZGVzKCcgJykgPyAnICcgOiAnJztcclxuICAgICAgICBsZXQgd2l0aFNwYWNlID0gKGNvZGUgPT09ICdTcGFjZScgJiYgdmFsdWUubGVuZ3RoID09PSAxMikgfHwgdmFsdWUubGVuZ3RoID09PSAxMyB8fCB2YWx1ZS5pbmNsdWRlcygnICcpO1xyXG4gICAgICAgIGxldCBleHRyYVNwYWNlID0gKChjb2RlID09PSAnU3BhY2UnICYmIHZhbHVlLmxlbmd0aCA9PT0gMTIpIHx8ICh2YWx1ZS5sZW5ndGggPT09IDEzIHx8IHZhbHVlLmxlbmd0aCA+IDEzKSkgJiYgIXZhbHVlLmluY2x1ZGVzKCcgJykgPyAnICcgOiAnJztcclxuICAgICAgICBpZiAod2l0aFNwYWNlKSB7XHJcbiAgICAgICAgICAgIGlmIChjb2RlICE9ICdTcGFjZScpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMCwgMTIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLndpdGhTcGFjZVBhdHRlcm4udGVzdCh2YWx1ZSArIGV4dHJhU3BhY2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1hc2tTdHJpbmcgPSAnMDAwLTAwMC0wMDAwIGV4dCAwKic7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLnNldFZhbHVlKGAke3ZhbHVlfSBleHRgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXNrRGlydHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNYXNrU3RyaW5nIHVwZGF0ZWQ6JywgdGhpcy5tYXNrU3RyaW5nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLndpdGhvdXRTcGFjZVBhdHRlcm4udGVzdCh2YWx1ZSkgJiYgdmFsdWUubGVuZ3RoID09PSAxMikge1xyXG4gICAgICAgICAgICB0aGlzLm1hc2tTdHJpbmcgPSAnMDAwLTAwMC0wMDAwKic7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgIHRoaXMubWFza0RpcnR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdNYXRjaGVkIHdpdGhvdXQgc3BhY2UsIG1hc2tTdHJpbmcgdXBkYXRlZDonLCB0aGlzLm1hc2tTdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB2YWxpZGF0ZVNJTkZvcm1hdChzaW46IGFueSkge1xyXG4gICAgLy8gICAgIHRoaXMubWFza0RpcnR5ID0gdHJ1ZTtcclxuICAgIC8vICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcclxuICAgIC8vICAgICB0aGlzLnZhbGlkID0gZmFsc2U7XHJcblxyXG5cclxuICAgIC8vICAgICAvLyBSZW1vdmUgYWxsIG5vbi1kaWdpdCBjaGFyYWN0ZXJzIChlLmcuLCBkYXNoZXMsIHNwYWNlcylcclxuXHJcbiAgICAvLyAgICAgY29uc3Qgc2FuaXRpemVkU0lOID0gc2luLnJlcGxhY2UoL1xcRC9nLCAnJyk7XHJcblxyXG4gICAgLy8gICAgIC8vIFNJTiBtdXN0IGJlIGV4YWN0bHkgOSBkaWdpdHNcclxuXHJcbiAgICAvLyAgICAgaWYgKHNhbml0aXplZFNJTi5sZW5ndGggIT09IDkpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5tYXNrRGlydHkgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudmFsaWQgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgLy8gICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgIC8vICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIC8vICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAvLyAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIC8vICAgICB9XHJcblxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0ZXN0IDEnKTtcclxuICAgIC8vICAgICBpZiAoc2FuaXRpemVkU0lOLnRvU3RyaW5nKCkgPT0gJzAwMDAwMDAwMCcpIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5tYXNrRGlydHkgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgIC8vICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgIC8vICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAvLyAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAvLyAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgIC8vICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCd0ZXN0IDInKTtcclxuICAgIC8vICAgICBsZXQgdG90YWwgPSAwO1xyXG4gICAgLy8gICAgIC8vIEl0ZXJhdGUgdGhyb3VnaCBlYWNoIGRpZ2l0XHJcblxyXG4gICAgLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2FuaXRpemVkU0lOLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAvLyAgICAgICAgIGxldCBkaWdpdCA9IHBhcnNlSW50KHNhbml0aXplZFNJTltpXSwgMTApO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gRG91YmxlIGV2ZXJ5IHNlY29uZCBkaWdpdCBmcm9tIHRoZSBsZWZ0IChldmVuIGluZGljZXMgaW4gMC1iYXNlZCBpbmRleClcclxuXHJcbiAgICAvLyAgICAgICAgIGlmIChpICUgMiA9PT0gMSkge1xyXG4gICAgLy8gICAgICAgICAgICAgZGlnaXQgKj0gMjtcclxuXHJcbiAgICAvLyAgICAgICAgICAgICAvLyBJZiB0aGUgcmVzdWx0IGlzIHR3byBkaWdpdHMsIGFkZCB0aGUgZGlnaXRzIHRvZ2V0aGVyXHJcblxyXG4gICAgLy8gICAgICAgICAgICAgaWYgKGRpZ2l0ID4gOSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIGRpZ2l0ID0gTWF0aC5mbG9vcihkaWdpdCAvIDEwKSArIChkaWdpdCAlIDEwKTtcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG5cclxuICAgIC8vICAgICAgICAgLy8gQWRkIHRoZSBwcm9jZXNzZWQgZGlnaXQgdG8gdGhlIHRvdGFsXHJcblxyXG4gICAgLy8gICAgICAgICB0b3RhbCArPSBkaWdpdDtcclxuICAgIC8vICAgICB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgICAvLyAgICAgY29uc3QgaXNWYWxpZCA9IHRvdGFsICUgMTAgPT09IDA7XHJcblxyXG4gICAgLy8gICAgIC8vIFNldCBjb25kaXRpb24gcmVzdWx0IGZvciBjb25kaXRpb25hbCB2YWxpZGF0aW9uXHJcbiAgICAvLyAgICAgaWYgKCF0aGlzLnJvb3REYXRhWydfVmFsaWRhdGlvbkRhdGEnXSkgdGhpcy5yb290RGF0YVsnX1ZhbGlkYXRpb25EYXRhJ10gPSB7fTtcclxuICAgIC8vICAgICBpZiAoIXRoaXMucm9vdERhdGFbJ19WYWxpZGF0aW9uRGF0YSddWyd2YWxpZGF0ZVNJTiddKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucm9vdERhdGFbJ19WYWxpZGF0aW9uRGF0YSddWyd2YWxpZGF0ZVNJTiddID0ge307XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMucm9vdERhdGFbJ19WYWxpZGF0aW9uRGF0YSddWyd2YWxpZGF0ZVNJTiddWydpc1ZhbGlkU0lOJ10gPSBpc1ZhbGlkID8gJzEnIDogJzAnO1xyXG5cclxuICAgIC8vICAgICAvLyBVcGRhdGUgZmllbGQgdmFsaWRpdHlcclxuICAgIC8vICAgICB0aGlzLmlzVmFsaWQgPSBpc1ZhbGlkO1xyXG4gICAgLy8gICAgIHRoaXMudmFsaWQgPSBpc1ZhbGlkO1xyXG4gICAgLy8gICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5pc1ZhbGlkKTtcclxuXHJcbiAgICAvLyAgICAgLy8gRm9yY2UgZXJyb3IgcmUtZXZhbHVhdGlvbiBhbmQgVUkgdXBkYXRlXHJcbiAgICAvLyAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgLy8gICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgIC8vICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgIC8vICAgICB0aGlzLnNob3dFcnJvck9uTmV4dCA9ICFpc1ZhbGlkOyAvLyBPcHRpb25hbDogZm9yY2Ugc2hvdyBlcnJvciBpZiBuZWVkZWRcclxuICAgIC8vICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcblxyXG5cclxuICAgIC8vICAgICByZXR1cm4gaXNWYWxpZDtcclxuICAgIC8vIH1cclxuXHJcbiAgICB2YWxpZGF0ZVNJTkZvcm1hdCgpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnc2luX251bWJlciddID09PSAndHJ1ZScgJiYgdGhpcy5pbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzU2luTnVtYmVyJywgXCIxXCIpO1xyXG4gICAgICAgICAgICBjb25zdCBzaW4gPSB0aGlzLmlucHV0VmFsdWUucmVwbGFjZSgvXFxEL2csICcnKTsgLy8gUmVtb3ZlIG5vbi1kaWdpdCBjaGFyc1xyXG4gICAgICAgICAgICBjb25zdCBpc1ZhbGlkID0gdGhpcy5pc1ZhbGlkU0lOKHNpbik7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgZmllbGQgdmFsaWRpdHlcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5pbnB1dFZhbHVlLCBpc1ZhbGlkKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5tZXNzYWdlc0RhdGFNYXBbXCJzaW5fdmFsaWRhdGlvbl9tZXNzYWdlXCJdKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2lzVmFsaWQnLCBpc1ZhbGlkKTtcclxuICAgICAgICAgICAgLy8gRXZhbHVhdGUgY29uZGl0aW9uYWwgZXJyb3IgbWVzc2FnZXMgbWFudWFsbHlcclxuICAgICAgICAgICAgaWYgKCFpc1ZhbGlkKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbmFsRXJyb3JNZXNzYWdlQ29tcGFyZUZpZWxkc1Npbih0aGlzLmZpZWxkRGF0YS5hcGlfa2V5LCB0aGlzLmZpZWxkRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksIHRydWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25hbEVycm9yTWVzc2FnZUNvbXBhcmVGaWVsZHNTaW4odGhpcy5maWVsZERhdGEuYXBpX2tleSwgdGhpcy5maWVsZERhdGEsIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzVmFsaWRTSU4oc2luOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAoIS9eXFxkezl9JC8udGVzdChzaW4pKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICAgIGxldCBzdW0gPSAwO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2luLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkaWdpdCA9IHBhcnNlSW50KHNpbi5jaGFyQXQoaSksIDEwKTtcclxuICAgICAgICAgICAgaWYgKGkgJSAyID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBkaWdpdCAqPSAyO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpZ2l0ID4gOSkgZGlnaXQgLT0gOTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBzdW0gKz0gZGlnaXQ7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoc2luLnRvU3RyaW5nKCkgPT0gJzAwMDAwMDAwMCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gc3VtICUgMTAgPT09IDA7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBvbktleShldmVudDogYW55LCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgLy8gSGFuZGxlIFRhYiBrZXkgd2l0aCBlbXB0eSB2YWx1ZVxyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2V2ZW50IGtleScsIGV2ZW50KVxyXG4gICAgICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInICYmIHZhbHVlLnZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX1NFQVJDSF9ISUdITElHSFRfU09VUkNFX0ZJRUxEXCJdICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9TRUFSQ0hfSElHSExJR0hUX0VOQUJMRVwiXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfU0VBUkNIX0hJR0hMSUdIVF9FTkFCTEVcIl0gPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uQXBwbHlGaWx0ZXIuZW1pdCh7XHJcbiAgICAgICAgICAgICAgICBzb3VyY2U6IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9TRUFSQ0hfSElHSExJR0hUX1NPVVJDRV9GSUVMRFwiXSxcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdmFsdWUudmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1hcmsgaW5wdXQgYXMgZGlydHkgYW5kIHVwZGF0ZSB2YWxpZGl0eVxyXG4gICAgICAgIHRoaXMub25EaXJ0eSgpO1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEYXRhIEZvcm1hdFwiXSAmJiB2YWx1ZS52YWx1ZSAhPSAnJyAmJiB0aGlzLm1hc2tTdHJpbmdDb3B5LmluY2x1ZGVzKCdleHQnKSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNvbWJpbmVkUGhvbmVGb3JtYXQodmFsdWUpO1xyXG4gICAgICAgICAgICAvLyBUZXN0IGlucHV0IHZhbHVlIGFnYWluc3QgdGhlIHJlZ2V4XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVEYXRhRm9ybWF0KHZhbHVlLnZhbHVlLCBldmVudC5jb2RlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcInNpbl9udW1iZXJcIl0gJiYgdmFsdWUudmFsdWUgIT0gJycgKSB7XHJcbiAgICAgICAgLy8gICAgIC8vIFRlc3QgaW5wdXQgdmFsdWUgYWdhaW5zdCB0aGUgcmVnZXhcclxuICAgICAgICAvLyAgICAgdGhpcy52YWxpZGF0ZVNJTkZvcm1hdCh2YWx1ZS52YWx1ZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSB2YWx1ZS52YWxpZDtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAvLyBWYWxpZGF0aW9uIGxvZ2ljIGZvciBtYXNrIHdpdGggZXh0ZW5zaW9uIHN1cHBvcnRcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiRGF0YSBGb3JtYXRcIl0gJiYgdmFsdWUudmFsdWUgPT0gJycpIHtcclxuICAgICAgICAgICAgdGhpcy5tYXNrRGlydHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAvLyBGYWxsYmFjayBwYXR0ZXJuIGZvciBiYXNpYyBudW1lcmljIGlucHV0XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdHRlcm4gPSAvWzAtOVxcK1xcLVxcIF0vO1xyXG4gICAgICAgICAgICBjb25zdCBpbnB1dENoYXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGV2ZW50LmtleSk7XHJcbiAgICAgICAgICAgIGlmIChwYXR0ZXJuLnRlc3QoaW5wdXRDaGFyKSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEVuZm9yY2UgY2hhcmFjdGVyIGxpbWl0IGlmIGFwcGxpY2FibGVcclxuICAgICAgICBpZiAoIXRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ2hhcmFjdGVyIExpbWl0J10gfHwgdGhpcy5pbnB1dFZhbHVlLmxlbmd0aCA+PSBOdW1iZXIodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDaGFyYWN0ZXIgTGltaXQnXSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b25FZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hCdXR0b25FZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBIYW5kbGUgQmluZEtleSBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQmluZEtleSddKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJpbmRLZXlzID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydCaW5kS2V5J11cclxuICAgICAgICAgICAgICAgIC5zcGxpdCgnfCcpXHJcbiAgICAgICAgICAgICAgICAubWFwKHN0ciA9PiBOdW1iZXIoc3RyLnRyaW0oKSkpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGJpbmRLZXlzLmluY2x1ZGVzKGV2ZW50LmtleUNvZGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndmZUVuY3J5cHRpb24uZ2V0RW5jcnlwdGVkRGF0YSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0VuY3J5cHRpb25UeXBlJ10sIHRoaXMuaW5wdXRWYWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1ZhbGlkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkJpbmRLZXknKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBpbnB1dCB2YWxpZGF0aW9uIHdpdGggZGVsYXlcclxuICAgICAgICAgICAgbGV0IHVzZXJJbnB1dCA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50aW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlRW5jcnlwdGlvbi5nZXRFbmNyeXB0ZWREYXRhKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRW5jcnlwdGlvblR5cGUnXSwgdXNlcklucHV0KSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWRcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uS2V5VXAnKTtcclxuICAgICAgICAgICAgfSwgNTAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFBlcmZvcm0gYWRkaXRpb25hbCBmb3JtYXR0aW5nIGNoZWNrc1xyXG4gICAgICAgIHRoaXMuc2V0VmFsdWVBcml0aG1ldGljTmFtZSgpO1xyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU1RSSU5HX0ZPUk1BVCddICYmXHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1NUUklOR19GT1JNQVQnXSAhPT0gJycgJiZcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRk9STUFUX09OX0tFWV9QUkVTUyddICYmXHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0ZPUk1BVF9PTl9LRVlfUFJFU1MnXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZSdcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZCh2YWx1ZS52YWx1ZSwgdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDb21tZW50ZWQgZHVlIHRvIHBob25lIG51bWJlciBicmVha2luZ1xyXG4gICAgICAgIC8vIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9UaG91c2FuZF9TZXBhcmF0b3InXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9UaG91c2FuZF9TZXBhcmF0b3InXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyAmJiB2YWx1ZS52YWx1ZSAhPSBcIlwiKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMubWFza1N0cmluZyA9ICdzZXBhcmF0b3IuMic7XHJcbiAgICAgICAgLy8gICAgIC8vIHRoaXMuZm9ybWF0VGhvdXNhbmRTZXBhcmF0b3IodmFsdWUudmFsdWUpO1xyXG4gICAgICAgIC8vICAgICAvLyB0aGlzLm9uSW5wdXQoZXZlbnQpO1xyXG4gICAgICAgIC8vICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHZhbHVlLnZhbHVlLnJlcGxhY2VBbGwoJywnLCAnJykpXHJcbiAgICAgICAgLy8gICAgIC8vIH0sIDEwMDApO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy52YWxpZGF0ZVNJTkZvcm1hdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlzTnVtZXJpYyhuKSB7XHJcbiAgICAvLyAgICAgcmV0dXJuICFpc05hTihwYXJzZUZsb2F0KG4pKSAmJiBpc0Zpbml0ZShuKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBvbklucHV0KGV2ZW50KTogdm9pZCB7XHJcbiAgICAvLyAgICAgbGV0IHBvc2l0aW9uID0gZXZlbnQudGFyZ2V0LnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgLy8gICAgIC8vIGNvbnNvbGUubG9nKFwidmFsdWU6IFwiLCg8SFRNTElucHV0RWxlbWVudD5ldmVudC50YXJnZXQpLnZhbHVlKVxyXG4gICAgLy8gICAgIGxldCBjb21tYUNvdW50ID0gdGhpcy5pbnB1dFZhbHVlID8gdGhpcy5pbnB1dFZhbHVlLnNwbGl0KCcsJykubGVuZ3RoIC0gMSA6IDBcclxuXHJcbiAgICAvLyAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAvLyAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicG9zaXRpb246IFwiLCBwb3NpdGlvbiwgXCJjb21tYUNvdW50OiBcIiwgY29tbWFDb3VudCwgXCJwcmV2Q29tbWFDb3VudDogXCIsIHRoaXMucHJldkNvbW1hQ291bnQpXHJcbiAgICAvLyAgICAgICAgIGxldCBzZWxldGlvblBvc2l0aW9uID0gKE51bWJlcih0aGlzLnByZXZDb21tYUNvdW50KSA9PSBOdW1iZXIoY29tbWFDb3VudCkpID8gcG9zaXRpb24gOiAocG9zaXRpb24gKyAxKTtcclxuICAgIC8vICAgICAgICAgbGV0IGJlZm9yZURlY2ltYWwgPSB0aGlzLmlucHV0VmFsdWUuaW5kZXhPZignLicpO1xyXG4gICAgLy8gICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNlbGV0aW9uUG9zaXRpb246IFwiLCBzZWxldGlvblBvc2l0aW9uKVxyXG4gICAgLy8gICAgICAgICBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPSBldmVudC50YXJnZXQuc2VsZWN0aW9uRW5kID0gc2VsZXRpb25Qb3NpdGlvbjtcclxuICAgIC8vICAgICAgICAgdGhpcy5wcmV2Q29tbWFDb3VudCA9IGNvbW1hQ291bnQ7XHJcbiAgICAvLyAgICAgfSwgMCk7XHJcbiAgICAvLyAgICAgLy8gbGV0IGJlZm9yZURlY2ltYWwgPSB0aGlzLmlucHV0VmFsdWUuaW5kZXhPZignLicpO1xyXG4gICAgLy8gICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgLy8gICAgIC8vICAgICBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPSBldmVudC50YXJnZXQuc2VsZWN0aW9uRW5kID0gYmVmb3JlRGVjaW1hbCA/IGJlZm9yZURlY2ltYWwgOiAwO1xyXG4gICAgLy8gICAgIC8vIH0sMCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLy8gZm9ybWF0VGhvdXNhbmRTZXBhcmF0b3IodmFsdWUpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfVGhvdXNhbmRfU2VwYXJhdG9yJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfVGhvdXNhbmRfU2VwYXJhdG9yJ10udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScgJiYgdmFsdWUgIT0gXCJcIiAmJiB0aGlzLmlzTnVtZXJpYyh2YWx1ZS5yZXBsYWNlQWxsKCcsJywgJycpKSkge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmxvZyhcImlucHV0VmFsdWU6IFwiLCB0aGlzLmlucHV0VmFsdWUpXHJcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwidmFsdWU6IFwiLCB2YWx1ZSk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGZpbHRlclBpcGUgPSBuZXcgVGhvdXNhbmRTZXBhcmF0b3JQaXBlKCk7XHJcbiAgICAvLyAgICAgICAgIGNvbnN0IGZpdGVyZWRBcnIgPSBmaWx0ZXJQaXBlLnRyYW5zZm9ybSh2YWx1ZS5yZXBsYWNlQWxsKCcsJywgJycpLCAnZW4tVVMnKTtcclxuICAgIC8vICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZml0ZXJlZEFycjtcclxuICAgIC8vICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaXRlcmVkQXJyOiBcIix0aGlzLm51bWJlcldpdGhDb21tYXModmFsdWUudmFsdWUpKVxyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLm51bWJlcldpdGhDb21tYXModmFsdWUudmFsdWUpO1xyXG4gICAgLy8gICAgICAgICAvLyB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKHZhbHVlLnZhbHVlLCB2YWx1ZSk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIG51bWJlcldpdGhDb21tYXMoeCkge1xyXG4gICAgLy8gICAgIHJldHVybiB4LnRvU3RyaW5nKCkucmVwbGFjZSgvXFxCKD89KFxcZHszfSkrKD8hXFxkKSkvZywgXCIsXCIpO1xyXG4gICAgLy8gfVxyXG5cclxuXHJcbiAgICBvbktleURvd24oZXZlbnQ6IGFueSwgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEYXRhIEZvcm1hdFwiXSkge1xyXG5cclxuICAgICAgICAgICAgbGV0IGlucHV0QXJyYXkgPSB2YWx1ZS52YWx1ZS5zcGxpdCgnJyk7XHJcbiAgICAgICAgICAgIGxldCBjdXJzb3JQb3NpdGlvbiA9IGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydDtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmtleUNvZGUgPT09IDQ2KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXRBcnJheVtjdXJzb3JQb3NpdGlvbiAtIDFdID09ICctJykge1xyXG4gICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZWxlY3Rpb25TdGFydCA9IGN1cnNvclBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc2VsZWN0aW9uRW5kID0gY3Vyc29yUG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGlucHV0QXJyYXlbY3Vyc29yUG9zaXRpb25dID09ICctJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlucHV0QXJyYXkuc3BsaWNlKGN1cnNvclBvc2l0aW9uICsgMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gaW5wdXRBcnJheS5qb2luKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPSBjdXJzb3JQb3NpdGlvbiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zZWxlY3Rpb25FbmQgPSBjdXJzb3JQb3NpdGlvbiArIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgeyB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAoZXZlbnQua2V5Q29kZSA+IDQ3ICYmIGlucHV0QXJyYXkubGVuZ3RoIDwgY3Vyc29yUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBldmVudC50YXJnZXQuc2VsZWN0aW9uU3RhcnQgPSBpbnB1dEFycmF5Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBldmVudC50YXJnZXQuc2VsZWN0aW9uRW5kID0gaW5wdXRBcnJheS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMub2xkSW5wdXRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNoYW5nZVZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2Vzc2lvbkRhdGFVcGRhdGVkKHZhbHVlOiBhbnksIHN0YXRlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiRGF0YSBGb3JtYXRcIl0gJiYgdmFsdWUgIT0gJycgJiYgdGhpcy5tYXNrU3RyaW5nQ29weS5pbmNsdWRlcygnZXh0JykpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0ZUNvbWJpbmVkUGhvbmVGb3JtYXQodmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh2YWx1ZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHN0YXRlLnZhbGlkO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGVtaXRLZXlEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXRLZXlEb3duLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5hcGlEYXRhRm9ybWF0KSB7XHJcbiAgICAgICAgLy8gICAgIHZhbHVlID0gdGhpcy5nZXRNYXNrZWRJbnB1dFZhbHVlKHZhbHVlLCB0aGlzLmFwaURhdGFGb3JtYXRNYXNrKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TVFJJTkdfRk9STUFUJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWUgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLm1hbmlwdWxhdGVTdHJpbmcodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU1RSSU5HX0ZPUk1BVCddLCB2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMuaXNWYWxpZDogXCIsdGhpcy5pc1ZhbGlkKVxyXG4gICAgICAgIGxldCB2YWxpZCA9IHRoaXMuaXNWYWxpZDtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dFZhbHVlICYmIHRoaXMudmFsaWRhdGlvblJlZ2V4KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhdHQgPSBuZXcgUmVnRXhwKHRoaXMudmFsaWRhdGlvblJlZ2V4KTtcclxuICAgICAgICAgICAgdmFsaWQgPSBwYXR0LnRlc3QodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNUaG91c2FuZFNlcGFyYXRvckVuYWJsZWQgJiYgdmFsdWUgIT0gXCJcIikge1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2VBbGwoJywnLCAnJyk7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPSB1bmRlZmluZWQgJiYgdmFsdWUgIT0gbnVsbCAmJiAhdmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgKz0gJy4wMCc7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZm9ybWF0TnVtYmVyKHZhbHVlKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy53ZmVFbmNyeXB0aW9uLmdldEVuY3J5cHRlZERhdGEodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydFbmNyeXB0aW9uVHlwZSddLCB2YWx1ZSksIHZhbGlkKTsgICAgIFxyXG4gICAgICAgIH0sIDEwKTtcclxuICAgICAgICAvLyBIaWRlIF8gaW4gaW5wdXQgYm94XHJcbiAgICAgICAgLyogaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkRhdGEgRm9ybWF0XCJdKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEYXRhIEZvcm1hdFwiXS5sZW5ndGggIT0gdmFsdWUubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyVmFsdWUoc3RhdGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSAqL1xyXG5cclxuICAgICAgICAvLyB0cmlnZ2VyIGV2ZW50IGxpc3Qgb2YgZm9jdXMgb3V0XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnVmFsaWRhdGlvbkNoZWNrJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydWYWxpZGF0aW9uQ2hlY2snXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMub2xkSW5wdXRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2hhbmdlVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Gb2N1c091dCcpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMub2xkSW5wdXRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DaGFuZ2VWYWx1ZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Gb2N1c091dCcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydzaW5fbnVtYmVyJ10gPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAvLyhcImNoZWNraWcgZm9yIHNpbiBudW1iZXJcIik7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpbiA9IHRoaXMuaW5wdXRWYWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpOyAvLyBSZW1vdmUgbm9uLWRpZ2l0IGNoYXJzXHJcbiAgICAgICAgICAgIGNvbnN0IGlzVmFsaWQgPSB0aGlzLmlzVmFsaWRTSU4oc2luKTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaXNWYWxpZCB0ZXN0IC0gJywgaXNWYWxpZCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGVTSU5Gb3JtYXQoKTsgLy8gY2hlY2tcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodmFsdWUsIGlzVmFsaWQpOyAvLyB0ZXN0XHJcbiAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0IGlzVGhvdXNhbmRTZXBhcmF0b3JFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgLy8gICAgIHJldHVybiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9UaG91c2FuZF9TZXBhcmF0b3InXT8udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIGNvbmNhdERhdGEgPSAocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5maWQgPT09IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkge1xyXG4gICAgICAgICAgICBsZXQgc3VjY2VzcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgZGF0YTtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5nZXRJbmRpdmlkdWFsQXBwRGF0YShyZXNbJ2ZpZCddKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShyID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzWydmaWQnXSA9PSByWzBdLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gclswXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbmNhdEFycmF5cyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbmNhdGVkU3RyaW5nczogc3RyaW5nO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByZXMuY29uY2F0VmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaW5nbGVBcGlLZXknKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmNhdEFycmF5cy5wdXNoKHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHJlcy5jb25jYXRWYWx1ZXNbaV0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jYXRBcnJheXMucHVzaCh0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5QXBpS2V5KHJlcy5jb25jYXRWYWx1ZXNbaV0sICdyZXF1ZXN0JykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbmNhdGVkU3RyaW5ncyA9IGNvbmNhdEFycmF5cy5qb2luKCcgJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZpc2libGU6IGRhdGEudmlzaWJsZSwgZWRpdGFibGU6IGRhdGEuZWRpdGFibGUsIG1hbmRhdG9yeTogZGF0YS5tYW5kYXRvcnksIHZhbHVlOiBjb25jYXRlZFN0cmluZ3MgfSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gY29uY2F0ZWRTdHJpbmdzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYXJWYWx1ZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Nyb3NzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoJycpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnY2xlYXInKTtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfUkVMT0FEX1BBR0VfT05fQ0xFQVInXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9SRUxPQURfUEFHRV9PTl9DTEVBUiddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DbGljaycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgbGV0IGFwaURhdGEgPSBudWxsXHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgYXBpRGF0YSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnJvd0RhdGE/LnJlc3BvbnNlX2FwaV9rZXkgJiYgdGhpcy5yb3dEYXRhPy5yZXNwb25zZV9hcGlfa2V5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBhcGlEYXRhID0gZGF0YS5oYXNPd25Qcm9wZXJ0eSh0aGlzLnJvd0RhdGEucmVzcG9uc2VfYXBpX2tleVsxXSkgPyBkYXRhW3RoaXMucm93RGF0YS5yZXNwb25zZV9hcGlfa2V5WzFdXSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFwaURhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFwaURhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gYXBpRGF0YTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZ2V0TWFza2VkSW5wdXRWYWx1ZShhcGlEYXRhLCB0aGlzLm1hc2spOyAvLyBWYWx1ZSB0byBkaXNwbGF5LlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSAmJiB0aGlzLnZhbGlkYXRpb25SZWdleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdHQgPSBuZXcgUmVnRXhwKHRoaXMudmFsaWRhdGlvblJlZ2V4KTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHBhdHQudGVzdCh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZUFyaXRobWV0aWNOYW1lKCk7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiAodGhpcy5hcGlEYXRhRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgbGV0IHZhbHVlVG9VcGRhdGUgPSB0aGlzLmdldE1hc2tlZElucHV0VmFsdWUoYXBpRGF0YSwgdGhpcy5hcGlEYXRhRm9ybWF0TWFzayk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh2YWx1ZVRvVXBkYXRlLCB2YWxpZCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5pbnB1dFZhbHVlLCB2YWxpZCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUsIHZhbGlkKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmZvcm1hdFRob3VzYW5kU2VwYXJhdG9yKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gZWxzZXtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRTZXNzaW9uRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuaXNUaG91c2FuZFNlcGFyYXRvckVuYWJsZWQpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmZvcm1hdE51bWJlcih0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSAhPSAnJyAmJiB0aGlzLmlucHV0VmFsdWUgIT0gdW5kZWZpbmVkICYmIHRoaXMuaW5wdXRWYWx1ZSAhPSBudWxsICYmICF0aGlzLmlucHV0VmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSArPSAnLjAwJztcclxuICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSBbXTtcclxuICAgICAgICBpZiAoZ2V0X2RhdGEudW5pcXVlX2lkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS51bmlxdWVfaWRzO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5hcHBEYXRhLmlkXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEuYXBpS2V5cztcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmZpZWxkRGF0YS5hcGlfa2V5XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFsuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KSldO1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlcXVlc3RfYXBpX2tleSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICAgICAgICBpZiAodW5pcXVlX2lkX3ZhbHVlLmluY2x1ZGVzKGVsbSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIFRPRE8gVXBkYXRlXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmFwaURhdGFGb3JtYXQpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB2YWx1ZSA9IHRoaXMuZ2V0TWFza2VkSW5wdXRWYWx1ZSh2YWx1ZSwgdGhpcy5hcGlEYXRhRm9ybWF0TWFzayk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXNldHRpbmcgdGhlIGZvcm0gZmllbGQgZG9lcyBub3Qgd29yayBiZWNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBvbmNlIGl0IGdldHMgcmVzZXQgaWYgaXQgaXMgbm90IHRvdWNoZWQgYWdhaW4gdGhlbiB0aGUgZmllbGQgd29uJ3QgZ2V0IGludmFsaWRcclxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHRoZSBmb3JtIGdldHMgc3VibWl0dGVkIGFuZCBlcnJvcnMgd29uJ3Qgc2hvdyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGZpZWxkIGFzIHVuVG91Y2hlZCwgUHJpc3RpbmUgLCB1cGRhdGUgdmFsdWUgYW4gdmFsaWRpdHkgYW5kIHNob3dFcnJvck9uTmV4dCB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRleHRGaWVsZC5jb250cm9sLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy50ZXh0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5yZXNldCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0RmllbGQuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNlYXJjaERhdGEoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhnZXRfZGF0YSkuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSAodGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YS51bmlxdWVfaWQpID8gdGhpcy5yb3dEYXRhLnVuaXF1ZV9pZCA6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXModW5pcXVlX2lkX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdO1xyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5hcGlEYXRhRm9ybWF0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmdldE1hc2tlZElucHV0VmFsdWUodGhpcy5pbnB1dFZhbHVlLCB0aGlzLmFwaURhdGFGb3JtYXRNYXNrKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyRXZlbnQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VhcmNoQnV0dG9uRWRpdGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNsaWNrJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvY3VzZWRJbnB1dE9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIC8vIE9ubHkgbGlzdGVuIGZvciBldmVudHMgZnJvbSB0aGUgc3BlY2lmaWMgaW5wdXRcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy5pbnB1dEZpZWxkLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0VmFsdWUudHJpbSgpICE9IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVudGVyS2V5U3ViamVjdC5uZXh0KGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIHRoaXMuc2V0RXllSWNvbkRpc2FibGVGb3JQYXNzd29yZCgpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBkYXRhWyd2YWx1ZXMnXS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVtkYXRhWyd1bmlxdWVJZHMnXS5pbmRleE9mKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCldIDpcclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVswXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1Rob3VzYW5kU2VwYXJhdG9yRW5hYmxlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5mb3JtYXROdW1iZXIodGhpcy5pbnB1dFZhbHVlKTsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSAhPSAnJyAmJiB0aGlzLmlucHV0VmFsdWUgIT0gdW5kZWZpbmVkICYmIHRoaXMuaW5wdXRWYWx1ZSAhPSBudWxsICYmICF0aGlzLmlucHV0VmFsdWUuaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgKz0gJy4wMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10odGhpcy5pbnB1dFZhbHVlKTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IC8vIGxldCB2YWx1ZXMgcHJvcG9nYXRlZCB0byBvdGhlciBmaWVsZHMsIHNvIGVtaXR0aW5nIGV2ZW50IGFmdGVyIGEgZGVsYXlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uuc2V0dGluZ0ZpZWxkVmFsdWVFdmVudEZpbmlzaGVkLmVtaXQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGNoYW5nZU1hcCA9IHtcclxuICAgICAgICAvLyAgICAgZmllbGRfbGFiZWw6ICdmaWVsZERhdGEuZmllbGRfbGFiZWwnLFxyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlcl90ZXh0OiAnZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQnLFxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOiAnZmllbGREYXRhLnRvb2x0aXAnLFxyXG4gICAgICAgIC8vICAgICAnYWRkaXRpb25hbF9wYXJhbWV0ZXJzWypdQXJpYS1MYWJlbCc6ICdhZGRpdGlvbmFsUGFyYW1ldGVyW1xcJ0FyaWEtTGFiZWxcXCddJ1xyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCB2YWx1ZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VNYXApKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGxhbmdWYWwgPSB0aGlzLnN3aXRjaExhbmcodmFsdWUsIGRhdGEsIGNoYW5nZU1hcCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChsYW5nVmFsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzW2xhbmdWYWwua2V5XSA9IGxhbmdWYWwudmFsO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoY2hhbmdlcy5maWVsZERhdGEgJiYgY2hhbmdlcy5yb290RGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhLmN1cnJlbnRWYWx1ZS5sYW5nQ2hhbmdlZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvZ2dsZUxhbmd1YWdlKGNoYW5nZXMuZmllbGREYXRhLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5yb3dEYXRhICYmIGNoYW5nZXMucm93RGF0YS5jdXJyZW50VmFsdWUgJiYgdGhpcy5pbnB1dFZhbHVlICE9PSBjaGFuZ2VzLnJvd0RhdGEuY3VycmVudFZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGNoYW5nZXMucm93RGF0YS5jdXJyZW50VmFsdWUudmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEV5ZUljb25EaXNhYmxlRm9yUGFzc3dvcmQoKSB7XHJcbiAgICAgICAgaWYodGhpcy5pc0VkaXRhYmxlICYmIHRoaXMuaW5wdXRUeXBlID09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgdGhpcy5oaWRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPCEtLSBCb290c3RyYXAgc3VwcG9ydCBieSBkZWZhdWx0IC0tPlxyXG48bmctY29udGFpbmVyICpuZ0lmPVwiIWlzX21hdGVyaWFsOyBlbHNlIG1hdGVyaWFsSW5wdXRcIj5cclxuICAgIDxkaXYgW25nQ2xhc3NdPVwiY3NzQ2xhc3Nlc1wiICpuZ0lmPVwiaXNWaXNpYmxlIHx8IGlzU2FmYXJpQ2xhc3NcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWF1dG9jb21wbGV0ZTsgZWxzZSBhdXRvY29tcGxldGVUZXh0ZmllbGRcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJ0ZXh0RmllbGREYXRhXCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICNhdXRvY29tcGxldGVUZXh0ZmllbGQ+XHJcbiAgICAgICAgICAgIDxmb3JtIGF1dG9jb21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cInN1Ym1pdFwiIHN0eWxlPVwiZGlzcGxheTpub25lXCIgLz5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGV4dEZpZWxkRGF0YVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPG5nLXRlbXBsYXRlICN0ZXh0RmllbGREYXRhPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiICpuZ0lmPVwiaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBjbGFzcz1cIm1hbmRldG9yeS1tYXJrXCI+ICo8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCJcclxuICAgICAgICAgICAgICAgICAgICBbdG9vbHRpcF09XCJmaWVsZERhdGEudG9vbHRpcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyBmaWVsZERhdGEudG9vbHRpcCBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiIFtuZ0NsYXNzXT1cInsnaW5wdXQtZ3JvdXAnOiBpbnB1dFByZWZpeCB8fCBpbnB1dFN1ZmZpeH1cIiAqbmdJZj1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2Rpc3BsYXlfcGFzc3dvcmQnXSAhPSAndHJ1ZSc7IGVsc2UgcGFzc3dvcmRGaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1wcmVwZW5kXCIgKm5nSWY9XCJpbnB1dFByZWZpeFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIj57e2lucHV0UHJlZml4fX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgKHBhc3RlKT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIiBbdGV4dE1hc2tdPVwieyBtYXNrOiBtYXNrLCBndWlkZTogZmFsc2UgfVwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Rob3VzYW5kU2VwYXJhdG9yRW5hYmxlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCBzZXBhcmF0b3IgKHBhc3RlKT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIiBbc3BlY2lhbENoYXJhY3RlcnNdPVwibWFza1NwZWNpYWxDaGFyYWN0ZXJzXCIgW21hc2tdPVwibWFza1N0cmluZ1wiIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwibWFza0Ryb3BTcGVjaWFsQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2lucHV0VHlwZX19XCIgKGNvcHkpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiIChjdXQpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiZm9ybS1jb250cm9sIHt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fSB7eyAhdmFsaWQgfHwgKHRleHRGaWVsZD8uaW52YWxpZCAmJiBpc01hbmRhdG9yeSAmJiAoIChtYXNrICYmIHRleHRGaWVsZD8uZGlydHkgPyBtYXNrRGlydHkgOiB0ZXh0RmllbGQ/LmRpcnR5KSB8fCB0ZXh0RmllbGQ/LnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19IHt7ZmllbGREYXRhLmZpZWxkX2NsYXNzX25hbWV9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmlkXT1cImh0bWxfaWRcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCIgW3BhdHRlcm5dPVwiIW1hc2tTdHJpbmcgPyB2YWxpZGF0aW9uUmVnZXggOiAnJ1wiIFtuZ1N0eWxlXT1cInsnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc3R5bGUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5ib3JkZXJfY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1R5cGUgYSB2YWx1ZSBpbiAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0ID09ICcwJyA/ICcxMDAwJzogZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiIChrZXl1cCk9XCJvbktleSgkZXZlbnQsIHRleHRGaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50LCB0ZXh0RmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25TZXNzaW9uRGF0YVVwZGF0ZWQodGV4dEZpZWxkPy52YWx1ZSwgdGV4dEZpZWxkKVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICN0ZXh0RmllbGQ9XCJuZ01vZGVsXCIgW3JlcXVpcmVkXT1cImlzTWFuZGF0b3J5XCIgcGxhY2Vob2xkZXI9XCJ7e2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCIgW2F0dHIubWluXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01pbiddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIubWF4XT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heCddXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzVGhvdXNhbmRTZXBhcmF0b3JFbmFibGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAocGFzdGUpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiIFtzcGVjaWFsQ2hhcmFjdGVyc109XCJtYXNrU3BlY2lhbENoYXJhY3RlcnNcIiBbbWFza109XCJtYXNrU3RyaW5nXCIgW2Ryb3BTcGVjaWFsQ2hhcmFjdGVyc109XCJtYXNrRHJvcFNwZWNpYWxDaGFyYWN0ZXJzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7e2lucHV0VHlwZX19XCIgKGNvcHkpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiIChjdXQpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCB7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX0ge3sgIXZhbGlkIHx8ICh0ZXh0RmllbGQ/LmludmFsaWQgJiYgaXNNYW5kYXRvcnkgJiYgKCAobWFzayAmJiB0ZXh0RmllbGQ/LmRpcnR5ID8gbWFza0RpcnR5IDogdGV4dEZpZWxkPy5kaXJ0eSkgfHwgdGV4dEZpZWxkPy50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCkpID8gJ2ludmFsaWQnIDogJ3ZhbGlkJyB9fSB7e2ZpZWxkRGF0YS5maWVsZF9jbGFzc19uYW1lfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuaWRdPVwiaHRtbF9pZFwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiBbcGF0dGVybl09XCIhbWFza1N0cmluZyA/IHZhbGlkYXRpb25SZWdleCA6ICcnXCIgW25nU3R5bGVdPVwieydmb250LWZhbWlseSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X25hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZm9udC1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X2NvbG9yLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5ib3JkZXJfY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX2hlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF93aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiAnVHlwZSBhIHZhbHVlIGluICcgKyBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0ID09ICcwJyA/ICcxMDAwJzogZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIiAoa2V5dXApPVwib25LZXkoJGV2ZW50LCB0ZXh0RmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQsIHRleHRGaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25TZXNzaW9uRGF0YVVwZGF0ZWQodGV4dEZpZWxkPy52YWx1ZSwgdGV4dEZpZWxkKVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGV4dEZpZWxkPVwibmdNb2RlbFwiIFtyZXF1aXJlZF09XCJpc01hbmRhdG9yeVwiIHBsYWNlaG9sZGVyPVwie3tmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIiBbYXR0ci5taW5dPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnTWluJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIubWF4XT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heCddXCIgI2lucHV0RmllbGQgKGtleWRvd24uZW50ZXIpPVwiZm9jdXNlZElucHV0T25LZXlEb3duKCRldmVudClcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJpc0VkaXRhYmxlICYmIGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NsZWFyQnV0dG9uJ10gJiYgaW5wdXRWYWx1ZS5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIChjbGljayk9XCJjbGVhclZhbHVlKCRldmVudClcIiBjbGFzcz1cInRleHRmaWVsZC1jcm9zcy1pY29uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlzSFRNTChhZGRpdGlvbmFsUGFyYW1ldGVyWydDbGVhckJ1dHRvbiddKVwiPnt7YWRkaXRpb25hbFBhcmFtZXRlclsnQ2xlYXJCdXR0b24nXX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAoY2xpY2spPVwiY2xlYXJWYWx1ZSgkZXZlbnQpXCIgY2xhc3M9XCJ0ZXh0ZmllbGQtY3Jvc3MtaWNvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzSFRNTChhZGRpdGlvbmFsUGFyYW1ldGVyWydDbGVhckJ1dHRvbiddKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NsZWFyQnV0dG9uJ11cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwLWFwcGVuZFwiICpuZ0lmPVwiaW5wdXRTdWZmaXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbnB1dC1ncm91cC10ZXh0XCI+e3tpbnB1dFN1ZmZpeH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5X2NoYXJhY3Rlcl9jb3VudFwiICpuZ0lmPVwiY2hhcmFjdGVyQ291bnQuZGlzcGxheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N3aXRjaF09XCJjaGFyYWN0ZXJDb3VudC50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInQ291bnQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3IgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0LmNvbG9yIDogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyd9fXt7aW5wdXRWYWx1ZS5sZW5ndGh9fS97e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fXt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidSZW1haW5pbmcnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3IgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0LmNvbG9yIDogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJyd9fXt7ZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aH19L3t7ZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA6ICcnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ1RvdGFsJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnfX17e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fXt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidDaGFyUmVtYWluaW5nJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnfX17e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZS5sZW5ndGh9fXt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tQ2hlY2sgJiYgbWVzc2FnZXMubGVuZ3RoID09PSAwLCBlbHNlIGNlZUVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIGN1c3RvbUVycm9yc1ZhbGlkYXRpb24uZ2V0TWVzc2FnZXMoYXBwRGF0YS5pZCwgdGV4dEZpZWxkPy52YWx1ZSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKCAobWFzayAmJiB0ZXh0RmllbGQ/LmRpcnR5ID8gbWFza0RpcnR5IDogdGV4dEZpZWxkPy5kaXJ0eSkgfHwgdGV4dEZpZWxkPy50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQ/LnZhbHVlIClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2UuY29sb3IgJiYgbWVzc2FnZS5tZXNzYWdlX3RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IG1lc3NhZ2UuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e21lc3NhZ2UubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjZWVFcnJvcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpcGxlRXJyb3JNZXNzYWdlOyBlbHNlIHNpbmdsZUVycm9yTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRleHRGaWVsZD8uaW52YWxpZCAmJiAoKG1hc2sgJiYgdGV4dEZpZWxkPy5kaXJ0eSA/IG1hc2tEaXJ0eSA6IHRleHRGaWVsZD8uZGlydHkpIHx8IHRleHRGaWVsZD8udG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQgfHwgdGV4dEZpZWxkPy52YWx1ZSApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGV4dEZpZWxkPy5lcnJvcnMucmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImlzTWFuZGF0b3J5ICYmIG1lc3NhZ2UudHlwZSA9PSAnTWFuZGF0b3J5JyAmJiAhdGV4dEZpZWxkPy52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycz8ubWlubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJtZXNzYWdlLnR5cGUgPT0gJ21pbmxlbmd0aCcgJiYgdGV4dEZpZWxkPy52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycy5wYXR0ZXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJtZXNzYWdlLnR5cGUgPT0gJ1JlZ2V4JyAmJiB0ZXh0RmllbGQ/LnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgICpuZ0lmPVwiIXZhbGlkIHx8ICh0ZXh0RmllbGQ/LmludmFsaWQgJiYgKChtYXNrICYmIHRleHRGaWVsZD8uZGlydHkgPyBtYXNrRGlydHkgOiB0ZXh0RmllbGQ/LmRpcnR5KSB8fCB0ZXh0RmllbGQ/LnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0IHx8IHRleHRGaWVsZD8udmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIoaXNEYXRhRm9ybWF0V2l0aFJlZ2V4ICYmICFpc1ZhbGlkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwibWVzc2FnZS50eXBlID09ICdSZWdleCcgJiYgdGV4dEZpZWxkPy52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGdldFJlZ2V4TWVzc2FnZShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2dldFJlZ2V4TWVzc2FnZShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwidGV4dEZpZWxkPy5pbnZhbGlkICYmICgobWFzayAmJiB0ZXh0RmllbGQ/LmRpcnR5ID8gbWFza0RpcnR5IDogdGV4dEZpZWxkPy5kaXJ0eSkgfHwgdGV4dEZpZWxkPy50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQ/LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycy5yZXF1aXJlZCB8fCB0ZXh0RmllbGQ/LmVycm9ycy5taW5sZW5ndGggfHwgdGV4dEZpZWxkPy5lcnJvcnMucGF0dGVyblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImlzTWFuZGF0b3J5XCIgW2lubmVySFRNTF09XCJlcnJvck1lc3NhZ2VEYXRhLm1lc3NhZ2VfdGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogZXJyb3JNZXNzYWdlRGF0YS5jb2xvcn1cIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZXh0RmllbGQ/LmludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNob3dDb21wYXJpc29uRXJyb3IgfCBrZXl2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tpdGVtLnZhbHVlLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNob3dDb21wYXJpc29uRXJyb3IgfCBrZXl2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIFtuZ1N0eWxlXT1cInsnY29sb3InOiBpdGVtLnZhbHVlLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0udmFsdWUubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3Bhc3N3b3JkRmllbGQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxpbnB1dCAocGFzdGUpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiIFt0ZXh0TWFza109XCJ7IG1hc2s6IG1hc2ssIGd1aWRlOiBmYWxzZSB9XCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgKHBhc3RlKT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIiBbc3BlY2lhbENoYXJhY3RlcnNdPVwibWFza1NwZWNpYWxDaGFyYWN0ZXJzXCIgW21hc2tdPVwibWFza1N0cmluZ1wiIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwibWFza0Ryb3BTcGVjaWFsQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvcHkpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiIChjdXQpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInt7IGhpZGUgPyAncGFzc3dvcmQnOid0ZXh0JyB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wge3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319IHt7ICF2YWxpZCB8fCAodGV4dEZpZWxkPy5pbnZhbGlkICYmIGlzTWFuZGF0b3J5ICYmICggKG1hc2sgJiYgdGV4dEZpZWxkPy5kaXJ0eSA/IG1hc2tEaXJ0eSA6IHRleHRGaWVsZD8uZGlydHkpIHx8IHRleHRGaWVsZD8udG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX0ge3tmaWVsZERhdGEuZmllbGRfY2xhc3NfbmFtZX19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5pZF09XCJodG1sX2lkXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiIFtwYXR0ZXJuXT1cInZhbGlkYXRpb25SZWdleFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LXNpemUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zaXplLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc3R5bGUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zdHlsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdmb250LWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJvcmRlcl9jb2xvcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICdoZWlnaHQnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3dpZHRoJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX3dpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYmFja2dyb3VuZF9jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1R5cGUgYSB2YWx1ZSBpbiAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQgPT0gJzAnID8gJzEwMDAnOiBmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJvbktleSgkZXZlbnQsIHRleHRGaWVsZClcIiAoa2V5ZG93bik9XCJvbktleURvd24oJGV2ZW50LCB0ZXh0RmllbGQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvblNlc3Npb25EYXRhVXBkYXRlZCh0ZXh0RmllbGQ/LnZhbHVlLCB0ZXh0RmllbGQpXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGV4dEZpZWxkPVwibmdNb2RlbFwiIFtyZXF1aXJlZF09XCJpc01hbmRhdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0fX1cIiAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1ncm91cC1hcHBlbmRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImlucHV0LWdyb3VwLXRleHRcIiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBbYXR0ci5hcmlhLWxhYmVsXT1cIidIaWRlIHBhc3N3b3JkJ1wiIFthdHRyLmFyaWEtcHJlc3NlZF09XCJoaWRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3toaWRlID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5X29mZicgOiAndmlzaWJpbGl0eSd9fTwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNFZGl0YWJsZSAmJiBhZGRpdGlvbmFsUGFyYW1ldGVyWydDbGVhckJ1dHRvbiddICYmIGlucHV0VmFsdWUubGVuZ3RoID4gMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImNsZWFyVmFsdWUoJGV2ZW50KVwiIGNsYXNzPVwidGV4dGZpZWxkLWNyb3NzLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlzSFRNTChhZGRpdGlvbmFsUGFyYW1ldGVyWydDbGVhckJ1dHRvbiddKVwiPnt7YWRkaXRpb25hbFBhcmFtZXRlclsnQ2xlYXJCdXR0b24nXX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKGNsaWNrKT1cImNsZWFyVmFsdWUoJGV2ZW50KVwiIGNsYXNzPVwidGV4dGZpZWxkLWNyb3NzLWljb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNIVE1MKGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NsZWFyQnV0dG9uJ10pXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NsZWFyQnV0dG9uJ11cIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheV9jaGFyYWN0ZXJfY291bnRcIiAqbmdJZj1cImNoYXJhY3RlckNvdW50LmRpc3BsYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3dpdGNoXT1cImNoYXJhY3RlckNvdW50LnR5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInQ291bnQnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyd9fXt7aW5wdXRWYWx1ZS5sZW5ndGh9fS97e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fXt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidSZW1haW5pbmcnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHQgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJyd9fXt7ZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZS5sZW5ndGh9fS97e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fXt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidUb3RhbCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3IgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0LmNvbG9yIDogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ319e3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX17e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA6ICcnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInQ2hhclJlbWFpbmluZydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3IgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0LmNvbG9yIDogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ319e3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aH19e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tQ2hlY2sgJiYgbWVzc2FnZXMubGVuZ3RoID09PSAwLCBlbHNlIGNlZUVycm9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgY3VzdG9tRXJyb3JzVmFsaWRhdGlvbi5nZXRNZXNzYWdlcyhhcHBEYXRhLmlkLCB0ZXh0RmllbGQ/LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiggKG1hc2sgJiYgdGV4dEZpZWxkPy5kaXJ0eSA/IG1hc2tEaXJ0eSA6IHRleHRGaWVsZD8uZGlydHkpIHx8IHRleHRGaWVsZD8udG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQgfHwgdGV4dEZpZWxkPy52YWx1ZSApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2UuY29sb3IgJiYgbWVzc2FnZS5tZXNzYWdlX3RleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBtZXNzYWdlLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bWVzc2FnZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjY2VlRXJyb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwidGV4dEZpZWxkPy5pbnZhbGlkICYmICgobWFzayAmJiB0ZXh0RmllbGQ/LmRpcnR5ID8gbWFza0RpcnR5IDogdGV4dEZpZWxkPy5kaXJ0eSkgfHwgdGV4dEZpZWxkPy50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQ/LnZhbHVlIClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycy5yZXF1aXJlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNNYW5kYXRvcnkgJiYgbWVzc2FnZS50eXBlID09ICdNYW5kYXRvcnknICYmICF0ZXh0RmllbGQ/LnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnbWlubGVuZ3RoJyAmJiB0ZXh0RmllbGQ/LnZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzLnBhdHRlcm5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnUmVnZXgnICYmIHRleHRGaWVsZD8udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0ZXh0RmllbGQ/LmludmFsaWQgJiYgKChtYXNrICYmIHRleHRGaWVsZD8uZGlydHkgPyBtYXNrRGlydHkgOiB0ZXh0RmllbGQ/LmRpcnR5KSB8fCB0ZXh0RmllbGQ/LnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0IHx8IHRleHRGaWVsZD8udmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwidGV4dEZpZWxkPy5lcnJvcnMucmVxdWlyZWQgfHwgdGV4dEZpZWxkPy5lcnJvcnMubWlubGVuZ3RoIHx8IHRleHRGaWVsZD8uZXJyb3JzLnBhdHRlcm5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbaW5uZXJIVE1MXT1cImVycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogZXJyb3JNZXNzYWdlRGF0YS5jb2xvcn1cIj48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZXh0RmllbGQ/LmludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RleHRmaWVsZCBUeXBlJ10gPT0gJ1NlYXJjaCdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1idXR0b25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNlZS1zZWFyY2gtYnV0dG9uIGNlZS1zZWFyY2gtYnV0dG9uLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2VhcmNoX3t7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ0NsaWNrIE9uICcgKyBhZGRpdGlvbmFsUGFyYW1ldGVyWydCdXR0b24gTGFiZWwnXSBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydTZWFyY2gnOidkZWZhdWx0J31bZmllbGREYXRhLmZpZWxkX3R5cGVdXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidHJpZ2dlckV2ZW50KClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpbnB1dFZhbHVlIHx8ICFpc1ZhbGlkIHx8ICFzZWFyY2hCdXR0b25FZGl0YWJsZSB8fCAhaXNFZGl0YWJsZVwiPnt7YnV0dG9uTGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48IS0tIE1hdGVyaWFsIHN1cHBvcnQgLS0+XHJcbjxuZy10ZW1wbGF0ZSAjbWF0ZXJpYWxJbnB1dD5cclxuICAgIDxkaXYgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWF1dG9jb21wbGV0ZTsgZWxzZSBhdXRvY29tcGxldGVUZXh0ZmllbGRcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJtYXRlcmlhbFRleHRGaWVsZERhdGFcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8bmctdGVtcGxhdGUgI2F1dG9jb21wbGV0ZVRleHRmaWVsZD5cclxuICAgICAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwic3VibWl0XCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbmdUZW1wbGF0ZU91dGxldF09XCJtYXRlcmlhbFRleHRGaWVsZERhdGFcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjbWF0ZXJpYWxUZXh0RmllbGREYXRhPlxyXG4gICAgICAgICAgICA8IS0tIFRlbXBsYXRlOi0gICNtYXRlcmlhbExhYmVsIC1GaWVsZCBsYWJlbCBjb21tb24gZm9yIHRleHRmaWVsZCBhbmQgcGFzc3dvcmRmaWVsZC0tPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI21hdGVyaWFsTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIWlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCI+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCIgW2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydkaXNwbGF5X3Bhc3N3b3JkJ10gIT0gJ3RydWUnOyBlbHNlIG1hdGVyaWFsUGFzc3dvcmRGaWVsZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319IHt7ICF2YWxpZCB8fCAodGV4dEZpZWxkPy5pbnZhbGlkICYmIGlzTWFuZGF0b3J5ICYmICggKG1hc2sgJiYgdGV4dEZpZWxkPy5kaXJ0eSA/IG1hc2tEaXJ0eSA6IHRleHRGaWVsZD8uZGlydHkpIHx8IHRleHRGaWVsZD8udG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX0ge3tmaWVsZERhdGEuZmllbGRfY2xhc3NfbmFtZX19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwibWF0ZXJpYWxMYWJlbFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgbWF0SW5wdXQgKHBhc3RlKT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIiBbdGV4dE1hc2tdPVwieyBtYXNrOiBtYXNrLCBndWlkZTogZmFsc2UgfVwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKHBhc3RlKT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIiBbc3BlY2lhbENoYXJhY3RlcnNdPVwibWFza1NwZWNpYWxDaGFyYWN0ZXJzXCIgW21hc2tdPVwibWFza1N0cmluZ1wiIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwibWFza0Ryb3BTcGVjaWFsQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29weSk9XCJvbk92ZXJyaWRlSGFuZGxlcigkZXZlbnQpXCIgKGN1dCk9XCJvbk92ZXJyaWRlSGFuZGxlcigkZXZlbnQpXCIgW3R5cGVdPVwiaW5wdXRUeXBlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtpZF09XCJodG1sX2lkXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiIFtwYXR0ZXJuXT1cIiFtYXNrU3RyaW5nID8gdmFsaWRhdGlvblJlZ2V4IDogJydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiAnVHlwZSBhIHZhbHVlIGluICcgKyBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0ID09ICcwJyA/ICcxMDAwJzogZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uS2V5KCRldmVudCwgdGV4dEZpZWxkKVwiIChrZXlkb3duKT1cIm9uS2V5RG93bigkZXZlbnQsIHRleHRGaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25TZXNzaW9uRGF0YVVwZGF0ZWQodGV4dEZpZWxkPy52YWx1ZSwgdGV4dEZpZWxkKVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAjdGV4dEZpZWxkPVwibmdNb2RlbFwiIFtyZXF1aXJlZF09XCJpc01hbmRhdG9yeVwiIHBsYWNlaG9sZGVyPVwie3tmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChmb2N1cyk9XCJvbkZvY3VzKCRldmVudClcIiBbYXR0ci5taW5dPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnTWluJ11cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIubWF4XT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heCddXCIgI2lucHV0RmllbGQgKGtleWRvd24uZW50ZXIpPVwiZm9jdXNlZElucHV0T25LZXlEb3duKCRldmVudClcIi8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENsZWFyIEJ1dHRvbiBpLmUgY3Jvc3MgYnV0dG9uIHRvIGNsZWFyIHRoZSBpbnB1dCB0ZXh0IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdFN1ZmZpeCBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNsZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNFZGl0YWJsZSAmJiBhZGRpdGlvbmFsUGFyYW1ldGVyWydDbGVhckJ1dHRvbiddICYmIGlucHV0VmFsdWUubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJWYWx1ZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gbWF0VGV4dFByZWZpeCAqbmdJZj1cImlucHV0UHJlZml4XCI+e3tpbnB1dFByZWZpeH19Jm5ic3A7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBtYXRUZXh0U3VmZml4ICpuZ0lmPVwiaW5wdXRTdWZmaXhcIj57e2lucHV0U3VmZml4fX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPCEtLSBEaWZmZXJldCBtZXNzYWdlcyBiZWxvdyB0aGUgdGV4dCBmaWVsZCAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGlzcGxheV9jaGFyYWN0ZXJfY291bnRcIiAqbmdJZj1cImNoYXJhY3RlckNvdW50LmRpc3BsYXlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdTd2l0Y2hdPVwiY2hhcmFjdGVyQ291bnQudHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ0NvdW50J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnfX17e2lucHV0VmFsdWUubGVuZ3RofX0ve3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX17e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInUmVtYWluaW5nJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICcnfX17e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5wdXRWYWx1ZS5sZW5ndGh9fS97e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fXt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidUb3RhbCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvciA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQuY29sb3IgOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHQgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ319e3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX17e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInQ2hhclJlbWFpbmluZydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvciA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQuY29sb3IgOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHQgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnJ319e3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0IC1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUubGVuZ3RofX17e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gRXJyb3IgbWVzc2FnZXMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1c3RvbUNoZWNrICYmIG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCwgZWxzZSBjZWVFcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBjdXN0b21FcnJvcnNWYWxpZGF0aW9uLmdldE1lc3NhZ2VzKGFwcERhdGEuaWQsIHRleHRGaWVsZD8udmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiggKG1hc2sgJiYgdGV4dEZpZWxkPy5kaXJ0eSA/IG1hc2tEaXJ0eSA6IHRleHRGaWVsZD8uZGlydHkpIHx8IHRleHRGaWVsZD8udG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQgfHwgdGV4dEZpZWxkPy52YWx1ZSApXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJtZXNzYWdlLmNvbG9yICYmIG1lc3NhZ2UubWVzc2FnZV90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBtZXNzYWdlLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3ttZXNzYWdlLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NlZUVycm9yPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwidGV4dEZpZWxkPy5pbnZhbGlkICYmICgobWFzayAmJiB0ZXh0RmllbGQ/LmRpcnR5ID8gbWFza0RpcnR5IDogdGV4dEZpZWxkPy5kaXJ0eSkgfHwgdGV4dEZpZWxkPy50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQ/LnZhbHVlIClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzLnJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImlzTWFuZGF0b3J5ICYmIG1lc3NhZ2UudHlwZSA9PSAnTWFuZGF0b3J5JyAmJiAhdGV4dEZpZWxkPy52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwibWVzc2FnZS50eXBlID09ICdtaW5sZW5ndGgnICYmIHRleHRGaWVsZD8udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycy5wYXR0ZXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnUmVnZXgnICYmIHRleHRGaWVsZD8udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjc2luZ2xlRXJyb3JNZXNzYWdlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0ZXh0RmllbGQ/LmludmFsaWQgJiYgKChtYXNrICYmIHRleHRGaWVsZD8uZGlydHkgPyBtYXNrRGlydHkgOiB0ZXh0RmllbGQ/LmRpcnR5KSB8fCB0ZXh0RmllbGQ/LnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0IHx8IHRleHRGaWVsZD8udmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzLnJlcXVpcmVkIHx8IHRleHRGaWVsZD8uZXJyb3JzLm1pbmxlbmd0aCB8fCB0ZXh0RmllbGQ/LmVycm9ycy5wYXR0ZXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbaW5uZXJIVE1MXT1cImVycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBlcnJvck1lc3NhZ2VEYXRhLmNvbG9yfVwiPjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZXh0RmllbGQ/LmludmFsaWQgJiYgKChtYXNrICYmIHRleHRGaWVsZD8uZGlydHkgPyBtYXNrRGlydHkgOiB0ZXh0RmllbGQ/LmRpcnR5KSB8fCB0ZXh0RmllbGQ/LnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0IHx8IHRleHRGaWVsZD8udmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIiAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgW25nU3R5bGVdPVwieydjb2xvcic6IGl0ZW0udmFsdWUuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjbWF0ZXJpYWxQYXNzd29yZEZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319IHt7ICF2YWxpZCB8fCAodGV4dEZpZWxkPy5pbnZhbGlkICYmIGlzTWFuZGF0b3J5ICYmICggKG1hc2sgJiYgdGV4dEZpZWxkPy5kaXJ0eSA/IG1hc2tEaXJ0eSA6IHRleHRGaWVsZD8uZGlydHkpIHx8IHRleHRGaWVsZD8udG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX0ge3tmaWVsZERhdGEuZmllbGRfY2xhc3NfbmFtZX19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwibWF0LWZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwibWF0ZXJpYWxMYWJlbFwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgbWF0SW5wdXQgKHBhc3RlKT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIiBbdGV4dE1hc2tdPVwieyBtYXNrOiBtYXNrLCBndWlkZTogZmFsc2UgfVwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgKHBhc3RlKT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIiBbc3BlY2lhbENoYXJhY3RlcnNdPVwibWFza1NwZWNpYWxDaGFyYWN0ZXJzXCIgW21hc2tdPVwibWFza1N0cmluZ1wiIFtkcm9wU3BlY2lhbENoYXJhY3RlcnNdPVwibWFza0Ryb3BTcGVjaWFsQ2hhcmFjdGVyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29weSk9XCJvbk92ZXJyaWRlSGFuZGxlcigkZXZlbnQpXCIgKGN1dCk9XCJvbk92ZXJyaWRlSGFuZGxlcigkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ7eyBoaWRlID8gJ3Bhc3N3b3JkJzondGV4dCcgfX1cIiBbaWRdPVwiaHRtbF9pZFwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BhdHRlcm5dPVwiIW1hc2tTdHJpbmcgPyB2YWxpZGF0aW9uUmVnZXggOiAnJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6ICdUeXBlIGEgdmFsdWUgaW4gJyArIGZpZWxkRGF0YS5maWVsZF9sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCJ7e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQgPT0gJzAnID8gJzEwMDAnOiBmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25DaGFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwib25LZXkoJGV2ZW50LCB0ZXh0RmllbGQpXCIgKGtleWRvd24pPVwib25LZXlEb3duKCRldmVudCwgdGV4dEZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvblNlc3Npb25EYXRhVXBkYXRlZCh0ZXh0RmllbGQ/LnZhbHVlLCB0ZXh0RmllbGQpXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICN0ZXh0RmllbGQ9XCJuZ01vZGVsXCIgW3JlcXVpcmVkXT1cImlzTWFuZGF0b3J5XCIgcGxhY2Vob2xkZXI9XCJ7e2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0fX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cIm9uRm9jdXMoJGV2ZW50KVwiIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFRvb2x0aXAgd2l0aCBpbmZvcm1haW9uIGljb24gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi10b29sdGlwIG1sLWF1dG8gYnRuLXRvb2x0aXAte3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIFBhc3N3b3JkIHZpc2liaWxpdHkgdG9nZ2xlIGJ1dHRvbiBvbiB0ZXh0ZmllbGQgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0U3VmZml4IG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwiaGlkZSA9ICFoaWRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24gW2F0dHIuYXJpYS1sYWJlbF09XCInSGlkZSBwYXNzd29yZCdcIiBbYXR0ci5hcmlhLXByZXNzZWRdPVwiaGlkZVwiIGNsYXNzPVwicG9pbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aGlkZSA/ICd2aXNpYmlsaXR5X29mZicgOiAndmlzaWJpbGl0eSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIENsZWFyIEJ1dHRvbiBpLmUgY3Jvc3MgYnV0dG9uIHRvIGNsZWFyIHRoZSBpbnB1dCB0ZXh0IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdFN1ZmZpeCBtYXQtaWNvbi1idXR0b24gYXJpYS1sYWJlbD1cIkNsZWFyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNFZGl0YWJsZSAmJiBhZGRpdGlvbmFsUGFyYW1ldGVyWydDbGVhckJ1dHRvbiddICYmIGlucHV0VmFsdWUubGVuZ3RoID4gMFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJWYWx1ZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPCEtLSBEaWZmZXJldCBtZXNzYWdlcyBiZWxvdyB0aGUgdGV4dCBmaWVsZCAtLT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5X2NoYXJhY3Rlcl9jb3VudFwiICpuZ0lmPVwiY2hhcmFjdGVyQ291bnQuZGlzcGxheVwiIFtuZ1N3aXRjaF09XCJjaGFyYWN0ZXJDb3VudC50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidDb3VudCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcnfX17e2lucHV0VmFsdWUubGVuZ3RofX0ve3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX17e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInUmVtYWluaW5nJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3IgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0LmNvbG9yIDogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHQgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgJyd9fXt7ZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdCAtXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlucHV0VmFsdWUubGVuZ3RofX0ve3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX17e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInVG90YWwnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvciA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQuY29sb3IgOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAnJ319e3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX17e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0ID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ1N3aXRjaENhc2U9XCInQ2hhclJlbWFpbmluZydcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICcnfX17e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQgLVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aH19e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImN1c3RvbUNoZWNrICYmIG1lc3NhZ2VzLmxlbmd0aCA9PT0gMCwgZWxzZSBjZWVFcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgY3VzdG9tRXJyb3JzVmFsaWRhdGlvbi5nZXRNZXNzYWdlcyhhcHBEYXRhLmlkLCB0ZXh0RmllbGQ/LnZhbHVlKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKCAobWFzayAmJiB0ZXh0RmllbGQ/LmRpcnR5ID8gbWFza0RpcnR5IDogdGV4dEZpZWxkPy5kaXJ0eSkgfHwgdGV4dEZpZWxkPy50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQ/LnZhbHVlIClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJtZXNzYWdlLmNvbG9yICYmIG1lc3NhZ2UubWVzc2FnZV90ZXh0XCIgW25nU3R5bGVdPVwieydjb2xvcic6IG1lc3NhZ2UuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7bWVzc2FnZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNjZWVFcnJvcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwidGV4dEZpZWxkPy5pbnZhbGlkICYmICgobWFzayAmJiB0ZXh0RmllbGQ/LmRpcnR5ID8gbWFza0RpcnR5IDogdGV4dEZpZWxkPy5kaXJ0eSkgfHwgdGV4dEZpZWxkPy50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0RmllbGQ/LnZhbHVlIClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGV4dEZpZWxkPy5lcnJvcnMucmVxdWlyZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeSAmJiBtZXNzYWdlLnR5cGUgPT0gJ01hbmRhdG9yeScgJiYgIXRleHRGaWVsZD8udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzPy5taW5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJtZXNzYWdlLnR5cGUgPT0gJ21pbmxlbmd0aCcgJiYgdGV4dEZpZWxkPy52YWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGV4dEZpZWxkPy5lcnJvcnMucGF0dGVyblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnUmVnZXgnICYmIHRleHRGaWVsZD8udmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzaW5nbGVFcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0ZXh0RmllbGQ/LmludmFsaWQgJiYgKChtYXNrICYmIHRleHRGaWVsZD8uZGlydHkgPyBtYXNrRGlydHkgOiB0ZXh0RmllbGQ/LmRpcnR5KSB8fCB0ZXh0RmllbGQ/LnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0IHx8IHRleHRGaWVsZD8udmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycy5yZXF1aXJlZCB8fCB0ZXh0RmllbGQ/LmVycm9ycy5taW5sZW5ndGggfHwgdGV4dEZpZWxkPy5lcnJvcnMucGF0dGVyblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbaW5uZXJIVE1MXT1cImVycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGVycm9yTWVzc2FnZURhdGEuY29sb3J9XCI+PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0ZXh0RmllbGQ/LmludmFsaWRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2hvd0NvbXBhcmlzb25FcnJvciB8IGtleXZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0udmFsdWUubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnVGV4dGZpZWxkIFR5cGUnXSA9PSAnU2VhcmNoJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNlZS1zZWFyY2gtYnV0dG9uIGNlZS1zZWFyY2gtYnV0dG9uLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzZWFyY2hfe3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidDbGljayBPbiAnICsgYWRkaXRpb25hbFBhcmFtZXRlclsnQnV0dG9uIExhYmVsJ10gXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydTZWFyY2gnOidkZWZhdWx0J31bZmllbGREYXRhLmZpZWxkX3R5cGVdXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ0cmlnZ2VyRXZlbnQoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNWYWxpZCB8fCAhc2VhcmNoQnV0dG9uRWRpdGFibGUgfHwgIWlzRWRpdGFibGVcIj57e2J1dHRvbkxhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gVG9vbHRpcCB3aXRoIGluZm9ybWFpb24gaWNvbiAtLT5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvIGJ0bi10b29sdGlwLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCJcclxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyBmaWVsZERhdGEudG9vbHRpcFwiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCI+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG4gICAgICAgIDwhLS0gVG9vbHRpcCBUZW1wbGF0ZSAtLT5cclxuICAgICAgICA8IS0tIDxuZy10ZW1wbGF0ZSAjdG9vbHRpcFRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcF90ZXh0XCIgW2lubmVySFRNTF09XCJmaWVsZERhdGEudG9vbHRpcFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT4gLS0+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19