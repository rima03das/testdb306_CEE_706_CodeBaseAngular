import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { WfeEncryptionUtil } from '../../utils/wfe-encryption-util';
import { UndoRedo } from './../../utils/undo-redo.util';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle, NgSwitch } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
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
import * as i10 from "@angular/forms";
import * as i11 from "@angular/common";
import * as i12 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["textareaField"];
const _c1 = a0 => ({ "color": a0 });
function CeeTextareaComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeTextareaComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 18);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTextareaComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 15)(2, CeeTextareaComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeTextareaComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTextareaComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTextareaComponent_div_0_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextareaComponent_div_0_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c1, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "/", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextareaComponent_div_0_div_9_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextareaComponent_div_0_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c1, ctx_r1.characterCountMessageData.left.color ? ctx_r1.characterCountMessageData.right.color : ctx_r1.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r1.characterCountMessageData.left.message_text ? ctx_r1.characterCountMessageData.left.message_text : "", "", ctx_r1.fieldData.field_character_limit - ctx_r1.inputValue.length, "", ctx_r1.characterCountMessageData.right.message_text ? ctx_r1.characterCountMessageData.right.message_text : "", " ");
} }
function CeeTextareaComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_div_9_span_1_Template, 2, 7, "span", 22)(2, CeeTextareaComponent_div_0_div_9_span_2_Template, 2, 7, "span", 22)(3, CeeTextareaComponent_div_0_div_9_span_3_Template, 2, 6, "span", 22)(4, CeeTextareaComponent_div_0_div_9_span_4_Template, 2, 6, "span", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
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
function CeeTextareaComponent_div_0_ng_container_10_ng_container_1_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, message_r4.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r4.message_text, "");
} }
function CeeTextareaComponent_div_0_ng_container_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "div");
    i0.ɵɵtemplate(2, CeeTextareaComponent_div_0_ng_container_10_ng_container_1_div_1_p_2_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r4 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", message_r4.color && message_r4.message_text);
} }
function CeeTextareaComponent_div_0_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_container_10_ng_container_1_div_1_Template, 3, 1, "div", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 && (textareaField_r3.dirty || textareaField_r3.touched || ctx_r1.showErrorOnNext || textareaField_r3.value));
} }
function CeeTextareaComponent_div_0_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.customErrorsValidation.getMessages(ctx_r1.appData.id, textareaField_r3.value));
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r5.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r5.code).message_text, "");
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r5.type == "Mandatory" && !textareaField_r3.value);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r5.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r5.code).message_text, "");
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r5.type == "minlength" && textareaField_r3.value);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r5.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r5.code).message_text, "");
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r5 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r5.type == "Regex" && textareaField_r3.value);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 7)(2, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 7)(3, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(4);
    const textareaField_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 == null ? null : textareaField_r3.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 == null ? null : textareaField_r3.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 == null ? null : textareaField_r3.errors.pattern);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 24);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textareaField_r3 && (textareaField_r3.invalid && (textareaField_r3.dirty || textareaField_r3.touched || ctx_r1.showErrorOnNext || textareaField_r3.value)));
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 23);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.errorMessageData.message_text, "");
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_div_1_p_1_Template, 2, 4, "p", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtemplate(1, CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_div_1_Template, 2, 1, "div", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textareaField_r3 = i0.ɵɵreference(8);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textareaField_r3 == null ? null : textareaField_r3.errors.required) || (textareaField_r3 == null ? null : textareaField_r3.errors.minlength) || (textareaField_r3 == null ? null : textareaField_r3.errors.pattern));
} }
function CeeTextareaComponent_div_0_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextareaComponent_div_0_ng_template_11_ng_template_1_div_0_Template, 2, 1, "div", 24);
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textareaField_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", textareaField_r3 && (textareaField_r3.invalid && (textareaField_r3.dirty || textareaField_r3.touched || ctx_r1.showErrorOnNext || textareaField_r3.value)));
} }
function CeeTextareaComponent_div_0_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTextareaComponent_div_0_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 13)(1, CeeTextareaComponent_div_0_ng_template_11_ng_template_1_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const singleErrorMessage_r6 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r6);
} }
function CeeTextareaComponent_div_0_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 25)(2, "div")(3, "p", 23);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, item_r7.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.value.message_text, "");
} }
function CeeTextareaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "div", 5)(2, "div", 6);
    i0.ɵɵtemplate(3, CeeTextareaComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 7)(4, CeeTextareaComponent_div_0_span_4_Template, 2, 0, "span", 8)(5, CeeTextareaComponent_div_0_button_5_Template, 2, 2, "button", 9);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 10)(7, "textarea", 11, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTextareaComponent_div_0_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTextareaComponent_div_0_Template_textarea_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("blur", function CeeTextareaComponent_div_0_Template_textarea_blur_7_listener() { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSessionDataUpdated(textareaField_r3.value)); })("paste", function CeeTextareaComponent_div_0_Template_textarea_paste_7_listener($event) { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event, textareaField_r3)); })("copy", function CeeTextareaComponent_div_0_Template_textarea_copy_7_listener($event) { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event, textareaField_r3)); })("cut", function CeeTextareaComponent_div_0_Template_textarea_cut_7_listener($event) { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onOverrideHandler($event, textareaField_r3)); })("keyup", function CeeTextareaComponent_div_0_Template_textarea_keyup_7_listener($event) { i0.ɵɵrestoreView(_r1); const textareaField_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onKey($event, textareaField_r3)); })("focus", function CeeTextareaComponent_div_0_Template_textarea_focus_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onFocus($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeTextareaComponent_div_0_div_9_Template, 5, 5, "div", 12)(10, CeeTextareaComponent_div_0_ng_container_10_Template, 2, 1, "ng-container", 13)(11, CeeTextareaComponent_div_0_ng_template_11_Template, 3, 2, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(13, CeeTextareaComponent_div_0_ng_container_13_Template, 5, 4, "ng-container", 14);
    i0.ɵɵpipe(14, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const textareaField_r3 = i0.ɵɵreference(8);
    const ceeError_r8 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", "  ", !ctx_r1.valid || textareaField_r3.invalid && ctx_r1.isMandatory && (textareaField_r3.dirty || textareaField_r3.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r1.fieldData.field_character_limit == "0" ? "1000" : ctx_r1.fieldData.field_character_limit);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("pattern", ctx_r1.validationRegex);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("disabled", !ctx_r1.isEditable)("required", ctx_r1.isMandatory);
    i0.ɵɵattribute("id", ctx_r1.html_id)("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Type a value in " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.customCheck)("ngIfElse", ceeError_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(14, 20, ctx_r1.showComparisonError));
} }
export class CeeTextareaComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    textareaField;
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
    editorData = '';
    html_id = '';
    isValid = true;
    $emitKeyDown;
    undoRedoUtil;
    oldInputValue = '';
    // isEditorMode = false;
    isEditorDarty = false;
    isEditorTouched = false;
    // public Editor = ClassicEditor;
    editorOptions = {
    // toolbar: [ 'heading', '|', 'bold', 'italic' ] 
    };
    noneditablePlaceholder = "";
    fieldPlaceholder = "";
    editableStatusSubscription;
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
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.undoRedoUtil = new UndoRedo();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.fieldPlaceholder = this.fieldData.placeholder_text;
        this.noneditablePlaceholder = this.additionalParameter['CEE_Noneditable_Placeholder'] ? this.additionalParameter['CEE_Noneditable_Placeholder'] : "";
        if (this.noneditablePlaceholder && !this.isEditable) {
            this.fieldData.placeholder_text = this.noneditablePlaceholder;
        }
        this.editableStatusSubscription = this.sharedEventsService.emitOnEditableStatusChanged.subscribe((res) => {
            if (this.fieldData.unique_id == res) {
                if (this.noneditablePlaceholder && !this.isEditable) {
                    this.fieldData.placeholder_text = this.noneditablePlaceholder;
                }
                else {
                    this.fieldData.placeholder_text = this.fieldPlaceholder;
                }
            }
        });
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    //     this.unsubscribe(); // unsubscribe the event on destroy
    // }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    unsubscribe() {
        if (this.$emitKeyDown) {
            this.$emitKeyDown.unsubscribe();
        }
        if (this.editableStatusSubscription) {
            this.editableStatusSubscription.unsubscribe();
        }
    }
    onKey(event, ctrl) {
        this.isValid = this.textareaField.valid;
        this.updateFieldData(ctrl.value, this.isValid);
        this.onComponentEvent('OnKeyUp');
    }
    onOverrideHandler(event, ctrl) {
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
            this.isValid = this.textareaField.valid;
            this.updateFieldData(ctrl.value, this.isValid);
            return true;
        }
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // END
        this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
            : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
        this.inputValue = this.fieldValue ? this.fieldValue : this.inputValue;
        // if (this.rowData) {
        //     if (this.rowData.hasOwnProperty('value')) {
        //         this.updateFieldData(this.inputValue);
        //     }
        // }
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        // this.isEditorMode = this.additionalParameter['CEE_EDITOR_MODE'] && this.additionalParameter['CEE_EDITOR_MODE'].toLowerCase() == 'true' ? true : false;
        this.editorOptions = this.additionalParameter['CEE_EDITOR_OPTIONS'] ? this.additionalParameter['CEE_EDITOR_OPTIONS'] : {};
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    // public onEditorClicked() {
    //     this.isEditorTouched = true;
    //     const data = this.editorData;
    //     // console.log("man: ",this.isMandatory,"data: ",data)
    //     if(this.isMandatory && !data) {
    //         this.isValid = false;
    //         this.updateFieldData(data, this.isValid);
    //     } else {
    //         this.isValid = true;
    //         this.updateFieldData(data, this.isValid);
    //     }
    // }
    // public onEditorDataChange( { editor }: ChangeEvent ) {
    //     this.isEditorDarty = true;
    //     const data = editor.getData();
    //     this.editorData = data;
    //     this.onChange(editor);
    //     this.onEditorDataChangeProcess(data);
    // }
    // public onEditorDataChangeProcess(data) {
    //     this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], data), this.isValid);
    //     if(this.isMandatory && !data) {
    //         this.isValid = false;
    //         this.updateFieldData(data, this.isValid);
    //     } else {
    //         this.isValid = true;
    //         this.updateFieldData(data, this.isValid);
    //     }
    //     // trigger event list of focus out
    //     if (this.oldInputValue !== data) {
    //         this.onComponentEvent('OnChangeValue');
    //     }
    //     this.onComponentEvent('OnFocusOut');
    //     this.setModalorSanckBarMessage(this.fieldData.unique_id, data);
    //     this.onDirty();
    //     // console.log("Editor: ", data)
    //     // console.log( data );
    // }
    onFocus(event) {
        this.oldInputValue = event.target.value;
        // Unsubscribe previous subscription before creating new one
        if (this.$emitKeyDown) {
            this.$emitKeyDown.unsubscribe();
        }
        this.$emitKeyDown = this.sharedEventsService.emitKeyDown.subscribe(() => {
            this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], this.inputValue));
        });
    }
    onChange(newValue) {
        // console.log(newValue);
        // this.setSessionData(newValue);
    }
    onSessionDataUpdated(value) {
        this.isValid = this.textareaField.valid;
        if (this.$emitKeyDown) {
            this.$emitKeyDown.unsubscribe();
        }
        if (this.additionalParameter['CEE_STRING_FORMAT']) {
            this.inputValue = value = this.wfeStepLoaderService.manipulateString(this.additionalParameter['CEE_STRING_FORMAT'], value);
        }
        this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], value), this.isValid);
        // trigger event list of focus out
        if (this.oldInputValue !== value) {
            this.onComponentEvent('OnChangeValue');
        }
        this.onComponentEvent('OnKeyUp');
        this.onComponentEvent('OnFocusOut');
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.onDirty();
    }
    onEmptySession(get_data) {
        let data = [];
        let associatedData = [];
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
        if (get_data.isAssociated) {
            if (data.some(r => unique_id_value.includes(r))) {
                const values = this.getAssociatedFields();
                if (values.includes(this.undoRedoUtil.getCurrentId())) {
                    // associatedData = new Array(unique_id_value);
                    associatedData = unique_id_value;
                }
            }
        }
        (get_data.isAssociated ? associatedData : data).forEach(elm => {
            if ((unique_id_value).includes(elm)) {
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
                this.updateFieldData(value);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.textareaField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.textareaField) {
                    this.textareaField.reset(value);
                    this.textareaField.control.markAsUntouched();
                    this.textareaField.control.markAsPristine();
                    this.textareaField.control.updateValueAndValidity();
                }
                return;
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
            this.updateFieldData(this.inputValue);
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
                if (this.inputValue && this.validationRegex) {
                    const patt = new RegExp(this.validationRegex);
                    valid = patt.test(this.inputValue);
                }
                this.updateFieldData(this.inputValue, valid);
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    concatData() { }
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
    static ɵfac = function CeeTextareaComponent_Factory(t) { return new (t || CeeTextareaComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTextareaComponent, selectors: [["app-cee-textarea"]], viewQuery: function CeeTextareaComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textareaField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["textareaField", "ngModel"], ["ceeError", ""], ["singleErrorMessage", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], ["type", "text", 3, "ngModelChange", "blur", "paste", "copy", "cut", "keyup", "focus", "pattern", "maxlength", "ngModel", "disabled", "required", "placeholder"], ["class", "display_character_count", 3, "ngSwitch", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "display_character_count", 3, "ngSwitch"], [3, "ngStyle", 4, "ngSwitchCase"], [3, "ngStyle"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"]], template: function CeeTextareaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTextareaComponent_div_0_Template, 15, 22, "div", 3);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, FormsModule, i10.DefaultValueAccessor, i10.NgControlStatus, i10.RequiredValidator, i10.MaxLengthValidator, i10.PatternValidator, i10.NgModel, NgStyle, NgSwitch, CommonModule, i11.NgForOf, i11.NgIf, i11.NgSwitchCase, i11.KeyValuePipe, TooltipModule, i12.TooltipDirective], styles: ["textarea[_ngcontent-%COMP%]{resize:none}[_nghost-%COMP%]     .ck-editor__editable_inline{min-height:200px}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTextareaComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-textarea', standalone: true, imports: [MatTooltipModule, FormsModule, NgStyle, NgSwitch, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\"\r\n         [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <textarea #textareaField=\"ngModel\" type=\"text\"\r\n                class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}  {{ !valid || (textareaField.invalid && isMandatory && (textareaField.dirty || textareaField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n                [attr.id]=\"html_id\" [attr.tabindex]=\"tabIndexValue\" [pattern]=\"validationRegex\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Type a value in ' + fieldData.field_label\"\r\n                maxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n                [(ngModel)]=\"inputValue\" (ngModelChange)=\"onChange($event)\"\r\n                (blur)=\"onSessionDataUpdated(textareaField.value)\" [disabled]=\"!isEditable\" [required]=\"isMandatory\"\r\n                placeholder=\"{{fieldData.placeholder_text}}\" (paste)=\"onOverrideHandler($event,textareaField)\"\r\n                (copy)=\"onOverrideHandler($event,textareaField)\" (cut)=\"onOverrideHandler($event,textareaField)\" (keyup)=\"onKey($event,textareaField)\"\r\n                (focus)=\"onFocus($event)\"></textarea>\r\n\r\n            <div class=\"display_character_count\" *ngIf=\"characterCount.display\" [ngSwitch]=\"characterCount.type\">\r\n                <span *ngSwitchCase=\"'Count'\"\r\n                    [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                    {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n                    ''}}{{inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                    ? characterCountMessageData.right.message_text : ''}}\r\n                </span>\r\n                <span *ngSwitchCase=\"'Remaining'\"\r\n                    [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                    {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n                    ''}}{{fieldData.field_character_limit -\r\n                    inputValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n                    ? characterCountMessageData.right.message_text : ''}}\r\n                </span>\r\n                <span *ngSwitchCase=\"'Total'\"\r\n                    [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                    {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n                    ''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n                    characterCountMessageData.right.message_text : ''}}\r\n                </span>\r\n                <span *ngSwitchCase=\"'CharRemaining'\"\r\n                    [ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n                    {{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n                    ''}}{{fieldData.field_character_limit -\r\n                    inputValue.length}}{{characterCountMessageData.right.message_text ?\r\n                    characterCountMessageData.right.message_text : ''}}\r\n                </span>\r\n            </div>\r\n            <ng-container *ngIf=\"customCheck, else ceeError\">\r\n                <ng-container\r\n                    *ngFor=\"let message of customErrorsValidation.getMessages(appData.id, textareaField.value)\">\r\n                    <div class=\"error-message-wrapper\"\r\n                        *ngIf=\"(textareaField && (textareaField.dirty || textareaField.touched || showErrorOnNext || textareaField.value ))\">\r\n                        <div>\r\n                            <p *ngIf=\"message.color && message.message_text\" [ngStyle]=\"{'color': message.color}\">\r\n                                {{message.message_text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-template #ceeError>\r\n                <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                    <ng-container *ngFor=\"let message of messages\">\r\n                        <div class=\"error-message-wrapper\"\r\n                            *ngIf=\"(textareaField && (textareaField.invalid && (textareaField.dirty || textareaField.touched || showErrorOnNext || textareaField.value)))\">\r\n                            <div *ngIf=\"textareaField?.errors.required\">\r\n                                <p *ngIf=\"isMandatory && message.type == 'Mandatory' && !textareaField.value\"\r\n                                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                            <div *ngIf=\"textareaField?.errors.minlength\">\r\n                                <p *ngIf=\"message.type == 'minlength' && textareaField.value\"\r\n                                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                            <div *ngIf=\"textareaField?.errors.pattern\">\r\n                                <p *ngIf=\"message.type == 'Regex' && textareaField.value\"\r\n                                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                    {{returnMessageData(message.code).message_text}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n                <ng-template #singleErrorMessage>\r\n                    <div class=\"error-message-wrapper\"\r\n                        *ngIf=\"(textareaField && (textareaField.invalid && (textareaField.dirty || textareaField.touched || showErrorOnNext || textareaField.value)))\">\r\n                        <div\r\n                            *ngIf=\"textareaField?.errors.required || textareaField?.errors.minlength || textareaField?.errors.pattern\">\r\n                            <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n                                {{errorMessageData.message_text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </ng-template>\r\n            </ng-template>\r\n            <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                <div class=\"error-message-wrapper\">\r\n                    <div>\r\n                        <p [ngStyle]=\"{'color': item.value.color}\">\r\n                            {{item.value.message_text}}</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: ["textarea{resize:none}:host ::ng-deep .ck-editor__editable_inline{min-height:200px}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { textareaField: [{
            type: ViewChild,
            args: ['textareaField']
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTextareaComponent, { className: "CeeTextareaComponent", filePath: "lib\\field-components\\cee-textarea\\cee-textarea.component.ts", lineNumber: 31 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRleHRhcmVhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS10ZXh0YXJlYS9jZWUtdGV4dGFyZWEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRleHRhcmVhL2NlZS10ZXh0YXJlYS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBcUQsTUFBTSxlQUFlLENBQUM7QUFRNUcsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUtwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFXLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ2pCeEQsaUNBQXFFO0lBQUEsWUFBeUI7SUFBQSxp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QUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksT0FBTyxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztTQUM5RTtJQUNMLENBQUM7OEVBcFhRLG9CQUFvQjs2REFBcEIsb0JBQW9COzs7Ozs7WUM5QmpDLHVFQUE2Qzs7WUFBakIsb0NBQWU7NEJENEI3QixnQkFBZ0IsRUFBRSxXQUFXLG1JQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSw2REFBRSxhQUFhOztpRkFFOUUsb0JBQW9CO2NBUGhDLFNBQVM7MkJBQ0ksa0JBQWtCLGNBR2hCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7Z1RBSTVELGFBQWE7a0JBQXhDLFNBQVM7bUJBQUMsZUFBZTtZQUVULE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLOztrRkFaRyxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBTZXNzaW9uS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24ta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBXZmVFbmNyeXB0aW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1lbmNyeXB0aW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVW5kb1JlZG8gfSBmcm9tICcuLy4uLy4uL3V0aWxzL3VuZG8tcmVkby51dGlsJztcclxuaW1wb3J0IHsgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlLCBOZ1N3aXRjaCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS10ZXh0YXJlYScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLXRleHRhcmVhLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS10ZXh0YXJlYS5jb21wb25lbnQuc2NzcycsICcuLi9maWVsZC1jb21tb24uc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRUb29sdGlwTW9kdWxlLCBGb3Jtc01vZHVsZSwgTmdTdHlsZSwgTmdTd2l0Y2gsIENvbW1vbk1vZHVsZSwgVG9vbHRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZVRleHRhcmVhQ29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCd0ZXh0YXJlYUZpZWxkJykgdGV4dGFyZWFGaWVsZDogTmdNb2RlbDtcclxuXHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2aXNpYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBvYmplY3Q7XHJcblxyXG4gICAgd2ZlRW5jcnlwdGlvbjogV2ZlRW5jcnlwdGlvblV0aWw7XHJcbiAgICBkZWNsYXJlIHNlc3Npb25LZXlVdGlsOiBTZXNzaW9uS2V5VXRpbDtcclxuICAgIHZhbGlkYXRpb25SZWdleCA9ICcnO1xyXG4gICAgaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgZWRpdG9yRGF0YSA9ICcnO1xyXG4gICAgaHRtbF9pZCA9ICcnO1xyXG4gICAgaXNWYWxpZCA9IHRydWU7XHJcbiAgICAkZW1pdEtleURvd246IFN1YnNjcmlwdGlvbjtcclxuICAgIHVuZG9SZWRvVXRpbDogVW5kb1JlZG87XHJcbiAgICBvbGRJbnB1dFZhbHVlID0gJyc7XHJcbiAgICAvLyBpc0VkaXRvck1vZGUgPSBmYWxzZTtcclxuICAgIGlzRWRpdG9yRGFydHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGlzRWRpdG9yVG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgLy8gcHVibGljIEVkaXRvciA9IENsYXNzaWNFZGl0b3I7XHJcbiAgICBlZGl0b3JPcHRpb25zID0geyBcclxuICAgICAgICAvLyB0b29sYmFyOiBbICdoZWFkaW5nJywgJ3wnLCAnYm9sZCcsICdpdGFsaWMnIF0gXHJcbiAgICB9O1xyXG4gICAgbm9uZWRpdGFibGVQbGFjZWhvbGRlciA9IFwiXCI7XHJcbiAgICBmaWVsZFBsYWNlaG9sZGVyOiBhbnkgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBlZGl0YWJsZVN0YXR1c1N1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgdXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UsIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLCBkaWFsb2csIHNuYWNrQmFyLCBodHRwKTtcclxuICAgICAgICB0aGlzLndmZUVuY3J5cHRpb24gPSBuZXcgV2ZlRW5jcnlwdGlvblV0aWwoKTtcclxuICAgICAgICB0aGlzLnNlc3Npb25LZXlVdGlsID0gbmV3IFNlc3Npb25LZXlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy51bmRvUmVkb1V0aWwgPSBuZXcgVW5kb1JlZG8oKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgICAgICB0aGlzLmZpZWxkUGxhY2Vob2xkZXIgPSB0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0O1xyXG4gICAgICAgIHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlciA9dGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfTm9uZWRpdGFibGVfUGxhY2Vob2xkZXInXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX05vbmVkaXRhYmxlX1BsYWNlaG9sZGVyJ10gOiBcIlwiO1xyXG4gICAgICAgIGlmKHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlciAmJiAhdGhpcy5pc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQgPSB0aGlzLm5vbmVkaXRhYmxlUGxhY2Vob2xkZXI7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmVkaXRhYmxlU3RhdHVzU3Vic2NyaXB0aW9uID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkVkaXRhYmxlU3RhdHVzQ2hhbmdlZC5zdWJzY3JpYmUoKHJlcyk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5maWVsZERhdGEudW5pcXVlX2lkID09IHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub25lZGl0YWJsZVBsYWNlaG9sZGVyICYmICF0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0ID0gdGhpcy5ub25lZGl0YWJsZVBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0ID0gdGhpcy5maWVsZFBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLy9ASG9zdExpc3RlbmVyKCd3aW5kb3c6YmVmb3JldW5sb2FkJylcclxuICAgIC8vIG9uRGVzdHJveSgpIHtcclxuICAgIC8vICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgLy8gICAgIHRoaXMudW5zdWJzY3JpYmUoKTsgLy8gdW5zdWJzY3JpYmUgdGhlIGV2ZW50IG9uIGRlc3Ryb3lcclxuICAgIC8vIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTsgLy8gdW5zdWJzY3JpYmUgdGhlIGV2ZW50IG9uIGRlc3Ryb3lcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICBpZiAodGhpcy4kZW1pdEtleURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdEtleURvd24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZWRpdGFibGVTdGF0dXNTdWJzY3JpcHRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5lZGl0YWJsZVN0YXR1c1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbktleShldmVudDogYW55LCBjdHJsOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLnRleHRhcmVhRmllbGQudmFsaWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoY3RybC52YWx1ZSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uS2V5VXAnKTtcclxuICAgIH1cclxuXHJcbiAgICBvbk92ZXJyaWRlSGFuZGxlcihldmVudCwgY3RybDogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIk92ZXJyaWRlXCJdKSB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIk92ZXJyaWRlXCJdLnNwbGl0KCd8fCcpLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09IGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMudGV4dGFyZWFGaWVsZC52YWxpZDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoY3RybC52YWx1ZSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBGb3IgdW5pcXVlIGh0bWwgaWRcclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLmZpZWxkRGF0YS5odG1sX2lkXHJcbiAgICAgICAgLy8gRU5EXHJcbiAgICAgICAgdGhpcy52YWxpZGF0aW9uUmVnZXggPSAodGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCAmJiB0eXBlb2YgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleC53ZWIgPT0gJ29iamVjdCcgJiYgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleC5XZWIgIT09ICcnKSA/IHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXgud2ViXHJcbiAgICAgICAgICAgIDogKHR5cGVvZiB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4ID09ICdzdHJpbmcnICYmIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggIT09ICcnKSA/IHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggOiAnJztcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUgPyB0aGlzLmZpZWxkVmFsdWUgOiB0aGlzLmlucHV0VmFsdWU7XHJcbiAgICAgICAgLy8gaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHRoaXMudGFiSW5kZXhWYWx1ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnVGFiSW5kZXgnXTtcclxuICAgICAgICAvLyB0aGlzLmlzRWRpdG9yTW9kZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VESVRPUl9NT0RFJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRURJVE9SX01PREUnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLmVkaXRvck9wdGlvbnMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FRElUT1JfT1BUSU9OUyddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRURJVE9SX09QVElPTlMnXSA6IHt9O1xyXG4gICAgICAgIC8vZm9yIFZhbGlkYXRlIEFORCBNYW5kYXRvcnkgZXJyb3JcclxuICAgICAgICBpZiAodGhpcy5yb290RGF0YSAmJiB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddW3RoaXMuZmllbGREYXRhLmh0bWxfaWRdID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5maWVsZERhdGEuaHRtbF9pZCkuZm9jdXMoKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcHVibGljIG9uRWRpdG9yQ2xpY2tlZCgpIHtcclxuICAgIC8vICAgICB0aGlzLmlzRWRpdG9yVG91Y2hlZCA9IHRydWU7XHJcbiAgICAvLyAgICAgY29uc3QgZGF0YSA9IHRoaXMuZWRpdG9yRGF0YTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIm1hbjogXCIsdGhpcy5pc01hbmRhdG9yeSxcImRhdGE6IFwiLGRhdGEpXHJcbiAgICAvLyAgICAgaWYodGhpcy5pc01hbmRhdG9yeSAmJiAhZGF0YSkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzVmFsaWQgPSBmYWxzZTtcclxuICAgIC8vICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoZGF0YSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShkYXRhLCB0aGlzLmlzVmFsaWQpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgb25FZGl0b3JEYXRhQ2hhbmdlKCB7IGVkaXRvciB9OiBDaGFuZ2VFdmVudCApIHtcclxuICAgIC8vICAgICB0aGlzLmlzRWRpdG9yRGFydHkgPSB0cnVlO1xyXG4gICAgLy8gICAgIGNvbnN0IGRhdGEgPSBlZGl0b3IuZ2V0RGF0YSgpO1xyXG4gICAgLy8gICAgIHRoaXMuZWRpdG9yRGF0YSA9IGRhdGE7XHJcbiAgICAvLyAgICAgdGhpcy5vbkNoYW5nZShlZGl0b3IpO1xyXG4gICAgLy8gICAgIHRoaXMub25FZGl0b3JEYXRhQ2hhbmdlUHJvY2VzcyhkYXRhKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBwdWJsaWMgb25FZGl0b3JEYXRhQ2hhbmdlUHJvY2VzcyhkYXRhKSB7XHJcbiAgICAvLyAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy53ZmVFbmNyeXB0aW9uLmdldEVuY3J5cHRlZERhdGEodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydFbmNyeXB0aW9uVHlwZSddLCBkYXRhKSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgIC8vICAgICBpZih0aGlzLmlzTWFuZGF0b3J5ICYmICFkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNWYWxpZCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShkYXRhLCB0aGlzLmlzVmFsaWQpO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRydWU7XHJcbiAgICAvLyAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKGRhdGEsIHRoaXMuaXNWYWxpZCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIC8vIHRyaWdnZXIgZXZlbnQgbGlzdCBvZiBmb2N1cyBvdXRcclxuICAgIC8vICAgICBpZiAodGhpcy5vbGRJbnB1dFZhbHVlICE9PSBkYXRhKSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DaGFuZ2VWYWx1ZScpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uRm9jdXNPdXQnKTtcclxuICAgIC8vICAgICB0aGlzLnNldE1vZGFsb3JTYW5ja0Jhck1lc3NhZ2UodGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCBkYXRhKTtcclxuICAgIC8vICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgIC8vICAgICAvLyBjb25zb2xlLmxvZyhcIkVkaXRvcjogXCIsIGRhdGEpXHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coIGRhdGEgKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBvbkZvY3VzKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLm9sZElucHV0VmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XHJcbiAgICAgICAgLy8gVW5zdWJzY3JpYmUgcHJldmlvdXMgc3Vic2NyaXB0aW9uIGJlZm9yZSBjcmVhdGluZyBuZXcgb25lXHJcbiAgICAgICAgaWYgKHRoaXMuJGVtaXRLZXlEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXRLZXlEb3duLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuJGVtaXRLZXlEb3duID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRLZXlEb3duLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMud2ZlRW5jcnlwdGlvbi5nZXRFbmNyeXB0ZWREYXRhKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRW5jcnlwdGlvblR5cGUnXSwgdGhpcy5pbnB1dFZhbHVlKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UobmV3VmFsdWUpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhuZXdWYWx1ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTZXNzaW9uRGF0YShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXNzaW9uRGF0YVVwZGF0ZWQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMudGV4dGFyZWFGaWVsZC52YWxpZDtcclxuICAgICAgICBpZiAodGhpcy4kZW1pdEtleURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdEtleURvd24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1NUUklOR19GT1JNQVQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZSA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWFuaXB1bGF0ZVN0cmluZyh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TVFJJTkdfRk9STUFUJ10sdmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLndmZUVuY3J5cHRpb24uZ2V0RW5jcnlwdGVkRGF0YSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0VuY3J5cHRpb25UeXBlJ10sIHZhbHVlKSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgICAgICAvLyB0cmlnZ2VyIGV2ZW50IGxpc3Qgb2YgZm9jdXMgb3V0XHJcbiAgICAgICAgaWYgKHRoaXMub2xkSW5wdXRWYWx1ZSAhPT0gdmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNoYW5nZVZhbHVlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25LZXlVcCcpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Gb2N1c091dCcpO1xyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZSh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgYXNzb2NpYXRlZERhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgaWYgKGdldF9kYXRhLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEudW5pcXVlX2lkcztcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuYXBwRGF0YS5pZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLmFwaUtleXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0X2RhdGEuaXNBc3NvY2lhdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnNvbWUociA9PiB1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMocikpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEFzc29jaWF0ZWRGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuaW5jbHVkZXModGhpcy51bmRvUmVkb1V0aWwuZ2V0Q3VycmVudElkKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXNzb2NpYXRlZERhdGEgPSBuZXcgQXJyYXkodW5pcXVlX2lkX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGVkRGF0YSA9IHVuaXF1ZV9pZF92YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAoZ2V0X2RhdGEuaXNBc3NvY2lhdGVkID8gYXNzb2NpYXRlZERhdGEgOiBkYXRhKS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgodW5pcXVlX2lkX3ZhbHVlKS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXNldHRpbmcgdGhlIGZvcm0gZmllbGQgZG9lcyBub3Qgd29yayBiZWNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBvbmNlIGl0IGdldHMgcmVzZXQgaWYgaXQgaXMgbm90IHRvdWNoZWQgYWdhaW4gdGhlbiB0aGUgZmllbGQgd29uJ3QgZ2V0IGludmFsaWRcclxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHRoZSBmb3JtIGdldHMgc3VibWl0dGVkIGFuZCBlcnJvcnMgd29uJ3Qgc2hvdyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGZpZWxkIGFzIHVuVG91Y2hlZCwgUHJpc3RpbmUgLCB1cGRhdGUgdmFsdWUgYW4gdmFsaWRpdHkgYW5kIHNob3dFcnJvck9uTmV4dCB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnRleHRhcmVhRmllbGQuY29udHJvbC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudGV4dGFyZWFGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dGFyZWFGaWVsZC5yZXNldCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlYUZpZWxkLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50ZXh0YXJlYUZpZWxkLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRhcmVhRmllbGQuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdnZXRfZGF0YScsIHR5cGVvZiBnZXRfZGF0YSA9PT0gJ29iamVjdCcpO1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGdldF9kYXRhKS5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXModW5pcXVlX2lkX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBsZXQgYXBpRGF0YSA9IG51bGxcclxuICAgICAgICBpZiAoIXRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICBhcGlEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucm93RGF0YT8ucmVzcG9uc2VfYXBpX2tleSAmJiB0aGlzLnJvd0RhdGE/LnJlc3BvbnNlX2FwaV9rZXkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGFwaURhdGEgPSBkYXRhLmhhc093blByb3BlcnR5KHRoaXMucm93RGF0YS5yZXNwb25zZV9hcGlfa2V5WzFdKSA/IGRhdGFbdGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXlbMV1dIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoYXBpRGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkoYXBpRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgIHZhciB2YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBhcGlEYXRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSAmJiB0aGlzLnZhbGlkYXRpb25SZWdleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdHQgPSBuZXcgUmVnRXhwKHRoaXMudmFsaWRhdGlvblJlZ2V4KTtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHBhdHQudGVzdCh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSwgdmFsaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzdXBlci5vblNldFNlc3Npb25EYXRhKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVsndW5pcXVlSWRzJ10uaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YVsndmFsdWVzJ10ubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bZGF0YVsndW5pcXVlSWRzJ10uaW5kZXhPZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bMF07XHJcbiAgICAgICAgICAgICAgICAvLyBvZiB0cmlnZ2VyVXBkYXRlIGlzIHRydWUgdGhlbiB1cGRhdGUgdGhlIGZpZWxkIHZhbHVlIG9yIHVwZGF0ZSB2YWx1ZSBhbmQgZW1pdCBjb25kaXRpb25zIGV2ZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10odGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc3QgY2hhbmdlTWFwID0ge1xyXG4gICAgICAgIC8vICAgICBmaWVsZF9sYWJlbDogJ2ZpZWxkRGF0YS5maWVsZF9sYWJlbCcsXHJcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyX3RleHQ6ICdmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCcsXHJcbiAgICAgICAgLy8gICAgIHRvb2x0aXA6ICdmaWVsZERhdGEudG9vbHRpcCcsXHJcbiAgICAgICAgLy8gICAgICdhZGRpdGlvbmFsX3BhcmFtZXRlcnNbKl1BcmlhLUxhYmVsJzogJ0FkZGl0aW9uYWxQYXJhbWV0ZXJbXFwnQXJpYS1MYWJlbFxcJ10nXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBmb3IgKGNvbnN0IHZhbHVlIG9mIE9iamVjdC5rZXlzKGNoYW5nZU1hcCkpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbGFuZ1ZhbCA9IHRoaXMuc3dpdGNoTGFuZyh2YWx1ZSwgZGF0YSwgY2hhbmdlTWFwKTtcclxuICAgICAgICAvLyAgICAgaWYgKGxhbmdWYWwpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXNbbGFuZ1ZhbC5rZXldID0gbGFuZ1ZhbC52YWw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhICYmIGNoYW5nZXMucm9vdERhdGEuY3VycmVudFZhbHVlLmxhbmdDaGFuZ2VkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlTGFuZ3VhZ2UoY2hhbmdlcy5maWVsZERhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkRGF0YS5maWVsZF9sYWJlbCE9JydcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCIhaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIj57e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCJpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc01hbmRhdG9yeVwiIGNsYXNzPVwibWFuZGV0b3J5LW1hcmtcIj4gKjwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIlxyXG4gICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgIDx0ZXh0YXJlYSAjdGV4dGFyZWFGaWVsZD1cIm5nTW9kZWxcIiB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCB7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX0gIHt7ICF2YWxpZCB8fCAodGV4dGFyZWFGaWVsZC5pbnZhbGlkICYmIGlzTWFuZGF0b3J5ICYmICh0ZXh0YXJlYUZpZWxkLmRpcnR5IHx8IHRleHRhcmVhRmllbGQudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX1cIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuaWRdPVwiaHRtbF9pZFwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiBbcGF0dGVybl09XCJ2YWxpZGF0aW9uUmVnZXhcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiAnVHlwZSBhIHZhbHVlIGluICcgKyBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwie3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0ID09ICcwJyA/ICcxMDAwJzogZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19XCJcclxuICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgKGJsdXIpPVwib25TZXNzaW9uRGF0YVVwZGF0ZWQodGV4dGFyZWFGaWVsZC52YWx1ZSlcIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBbcmVxdWlyZWRdPVwiaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0fX1cIiAocGFzdGUpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50LHRleHRhcmVhRmllbGQpXCJcclxuICAgICAgICAgICAgICAgIChjb3B5KT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudCx0ZXh0YXJlYUZpZWxkKVwiIChjdXQpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50LHRleHRhcmVhRmllbGQpXCIgKGtleXVwKT1cIm9uS2V5KCRldmVudCx0ZXh0YXJlYUZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAoZm9jdXMpPVwib25Gb2N1cygkZXZlbnQpXCI+PC90ZXh0YXJlYT5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXNwbGF5X2NoYXJhY3Rlcl9jb3VudFwiICpuZ0lmPVwiY2hhcmFjdGVyQ291bnQuZGlzcGxheVwiIFtuZ1N3aXRjaF09XCJjaGFyYWN0ZXJDb3VudC50eXBlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ0NvdW50J1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvciA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQuY29sb3IgOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA6XHJcbiAgICAgICAgICAgICAgICAgICAgJyd9fXt7aW5wdXRWYWx1ZS5sZW5ndGh9fS97e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fXt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHRcclxuICAgICAgICAgICAgICAgICAgICA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidSZW1haW5pbmcnXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHQgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0IDpcclxuICAgICAgICAgICAgICAgICAgICAnJ319e3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0IC1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aH19L3t7ZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dFxyXG4gICAgICAgICAgICAgICAgICAgID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ1RvdGFsJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgW25nU3R5bGVdPVwieydjb2xvcic6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvciA/IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQuY29sb3IgOiBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA6XHJcbiAgICAgICAgICAgICAgICAgICAgJyd9fXt7ZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA/XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ0NoYXJSZW1haW5pbmcnXCJcclxuICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICB7e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5tZXNzYWdlX3RleHQgPyBjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0IDpcclxuICAgICAgICAgICAgICAgICAgICAnJ319e3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0IC1cclxuICAgICAgICAgICAgICAgICAgICBpbnB1dFZhbHVlLmxlbmd0aH19e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA/XHJcbiAgICAgICAgICAgICAgICAgICAgY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY3VzdG9tQ2hlY2ssIGVsc2UgY2VlRXJyb3JcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBjdXN0b21FcnJvcnNWYWxpZGF0aW9uLmdldE1lc3NhZ2VzKGFwcERhdGEuaWQsIHRleHRhcmVhRmllbGQudmFsdWUpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiKHRleHRhcmVhRmllbGQgJiYgKHRleHRhcmVhRmllbGQuZGlydHkgfHwgdGV4dGFyZWFGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0YXJlYUZpZWxkLnZhbHVlICkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2UuY29sb3IgJiYgbWVzc2FnZS5tZXNzYWdlX3RleHRcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogbWVzc2FnZS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e21lc3NhZ2UubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctdGVtcGxhdGUgI2NlZUVycm9yPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpcGxlRXJyb3JNZXNzYWdlOyBlbHNlIHNpbmdsZUVycm9yTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIih0ZXh0YXJlYUZpZWxkICYmICh0ZXh0YXJlYUZpZWxkLmludmFsaWQgJiYgKHRleHRhcmVhRmllbGQuZGlydHkgfHwgdGV4dGFyZWFGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCB8fCB0ZXh0YXJlYUZpZWxkLnZhbHVlKSkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGV4dGFyZWFGaWVsZD8uZXJyb3JzLnJlcXVpcmVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeSAmJiBtZXNzYWdlLnR5cGUgPT0gJ01hbmRhdG9yeScgJiYgIXRleHRhcmVhRmllbGQudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGV4dGFyZWFGaWVsZD8uZXJyb3JzLm1pbmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwibWVzc2FnZS50eXBlID09ICdtaW5sZW5ndGgnICYmIHRleHRhcmVhRmllbGQudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGV4dGFyZWFGaWVsZD8uZXJyb3JzLnBhdHRlcm5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnUmVnZXgnICYmIHRleHRhcmVhRmllbGQudmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIodGV4dGFyZWFGaWVsZCAmJiAodGV4dGFyZWFGaWVsZC5pbnZhbGlkICYmICh0ZXh0YXJlYUZpZWxkLmRpcnR5IHx8IHRleHRhcmVhRmllbGQudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQgfHwgdGV4dGFyZWFGaWVsZC52YWx1ZSkpKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cInRleHRhcmVhRmllbGQ/LmVycm9ycy5yZXF1aXJlZCB8fCB0ZXh0YXJlYUZpZWxkPy5lcnJvcnMubWlubGVuZ3RoIHx8IHRleHRhcmVhRmllbGQ/LmVycm9ycy5wYXR0ZXJuXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImlzTWFuZGF0b3J5XCIgW25nU3R5bGVdPVwieydjb2xvcic6IGVycm9yTWVzc2FnZURhdGEuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tlcnJvck1lc3NhZ2VEYXRhLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGl0ZW0gb2Ygc2hvd0NvbXBhcmlzb25FcnJvciB8IGtleXZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgW25nU3R5bGVdPVwieydjb2xvcic6IGl0ZW0udmFsdWUuY29sb3J9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7e2l0ZW0udmFsdWUubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==