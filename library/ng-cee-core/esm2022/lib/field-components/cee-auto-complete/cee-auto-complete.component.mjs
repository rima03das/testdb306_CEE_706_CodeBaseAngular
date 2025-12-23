import { Component, Input, HostListener, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { WfeEncryptionUtil } from '../../utils/wfe-encryption-util';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { CommonUtil } from '../../utils/common-util';
import { Subject } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle, NgSwitch, NgTemplateOutlet } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
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
import * as i10 from "../../services/cee-api-service.service";
import * as i11 from "@angular/router";
import * as i12 from "@angular/forms";
import * as i13 from "@angular/common";
import * as i14 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["textField"];
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c2 = (a0, a1) => ({ key: a0, value: a1 });
const _c3 = a0 => ({ "color": a0 });
function CeeAutoCompleteComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textFieldData_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r1);
} }
function CeeAutoCompleteComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 8);
    i0.ɵɵelement(1, "input", 9);
    i0.ɵɵelementContainer(2, 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textFieldData_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", textFieldData_r1);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.fieldData.field_label);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 23);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r2.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_label_1_Template, 2, 1, "label", 20)(2, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_label_2_Template, 1, 1, "label", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.isHTML(ctx_r2.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isHTML(ctx_r2.fieldData.field_label));
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 24);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 25);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r2.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r2.fieldData.tooltip);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li", 28);
    i0.ɵɵlistener("pointerdown", function CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_li_1_Template_li_pointerdown_0_listener() { const option_r6 = i0.ɵɵrestoreView(_r5).$implicit; const ctx_r2 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r2.setValueNew(true, option_r6)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("value", i0.ɵɵpureFunction2(2, _c2, ctx_r2.additionalParameter["PrimaryKeyName"] ? option_r6[ctx_r2.additionalParameter["PrimaryKeyName"]] : null, ctx_r2.additionalParameter["Display Key Name"] ? option_r6[ctx_r2.additionalParameter["Display Key Name"]] : option_r6));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.additionalParameter["Display Key Name"] ? option_r6[ctx_r2.additionalParameter["Display Key Name"]] : option_r6, " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 26);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_li_1_Template, 2, 5, "li", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.firstFilteredOptions);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c3, ctx_r2.characterCountMessageData.left.color ? ctx_r2.characterCountMessageData.right.color : ctx_r2.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r2.characterCountMessageData.left.message_text ? ctx_r2.characterCountMessageData.left.message_text : "", "", ctx_r2.fieldValue.length, "/", ctx_r2.fieldData.field_character_limit, "", ctx_r2.characterCountMessageData.right.message_text ? ctx_r2.characterCountMessageData.right.message_text : "", " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(5, _c3, ctx_r2.characterCountMessageData.left.color ? ctx_r2.characterCountMessageData.right.color : ctx_r2.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate4(" ", ctx_r2.characterCountMessageData.left.message_text ? ctx_r2.characterCountMessageData.left.message_text : "", "", ctx_r2.fieldData.field_character_limit - ctx_r2.fieldValue.length, "/", ctx_r2.fieldData.field_character_limit, "", ctx_r2.characterCountMessageData.right.message_text ? ctx_r2.characterCountMessageData.right.message_text : "", " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c3, ctx_r2.characterCountMessageData.left.color ? ctx_r2.characterCountMessageData.right.color : ctx_r2.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r2.characterCountMessageData.left.message_text ? ctx_r2.characterCountMessageData.left.message_text : "", "", ctx_r2.fieldData.field_character_limit, "", ctx_r2.characterCountMessageData.right.message_text ? ctx_r2.characterCountMessageData.right.message_text : "", " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(4, _c3, ctx_r2.characterCountMessageData.left.color ? ctx_r2.characterCountMessageData.right.color : ctx_r2.characterCountMessageData.left.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate3(" ", ctx_r2.characterCountMessageData.left.message_text ? ctx_r2.characterCountMessageData.left.message_text : "", "", ctx_r2.fieldData.field_character_limit - ctx_r2.fieldValue.length, "", ctx_r2.characterCountMessageData.right.message_text ? ctx_r2.characterCountMessageData.right.message_text : "", " ");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 29);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_1_Template, 2, 7, "span", 30)(2, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_2_Template, 2, 7, "span", 30)(3, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_3_Template, 2, 6, "span", 30)(4, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_span_4_Template, 2, 6, "span", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngSwitch", ctx_r2.characterCount.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Count");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Remaining");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Total");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "CharRemaining");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r2.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.returnMessageData(message_r7.code).message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isMandatory && message_r7.type == "Mandatory");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r2.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.returnMessageData(message_r7.code).message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "minlength");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r2.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.returnMessageData(message_r7.code).message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r7.type == "Regex");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_1_Template, 2, 1, "div", 12)(2, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_2_Template, 2, 1, "div", 12)(3, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_div_3_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const textField_r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r4 == null ? null : textField_r4.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r4 == null ? null : textField_r4.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r4 == null ? null : textField_r4.errors.pattern);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_div_1_Template, 4, 3, "div", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r4 = i0.ɵɵreference(7);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", textField_r4.invalid && (textField_r4.dirty || textField_r4.touched || ctx_r2.showErrorOnNext));
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_ng_container_1_Template, 2, 1, "ng-container", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.messages);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 31);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r2.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.errorMessageData.message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_div_1_p_1_Template, 2, 4, "p", 34);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isMandatory);
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 33);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const textField_r4 = i0.ɵɵreference(7);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (textField_r4 == null ? null : textField_r4.errors.required) || (textField_r4 == null ? null : textField_r4.errors.minlength) || (textField_r4 == null ? null : textField_r4.errors.pattern));
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_div_0_Template, 2, 1, "div", 32);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const textField_r4 = i0.ɵɵreference(7);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", textField_r4.invalid && (textField_r4.dirty || textField_r4.touched || ctx_r2.showErrorOnNext));
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 33)(2, "div")(3, "p", 31);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r8.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r8.value.message_text, "");
} }
function CeeAutoCompleteComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "div", 11);
    i0.ɵɵtemplate(2, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_2_Template, 3, 2, "ng-container", 12)(3, CeeAutoCompleteComponent_div_0_ng_template_4_span_3_Template, 2, 0, "span", 13)(4, CeeAutoCompleteComponent_div_0_ng_template_4_button_4_Template, 2, 2, "button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 15)(6, "input", 16, 2);
    i0.ɵɵlistener("paste", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_paste_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onOverrideHandler($event)); })("copy", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_copy_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onOverrideHandler($event)); })("cut", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_cut_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onOverrideHandler($event)); })("focus", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_focus_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onFocus()); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.fieldValue, $event) || (ctx_r2.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r2); const textField_r4 = i0.ɵɵreference(7); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onKeyUp($event, textField_r4)); })("blur", function CeeAutoCompleteComponent_div_0_ng_template_4_Template_input_blur_6_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.setUpdatedValue()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CeeAutoCompleteComponent_div_0_ng_template_4_ul_8_Template, 2, 1, "ul", 17)(9, CeeAutoCompleteComponent_div_0_ng_template_4_div_9_Template, 5, 5, "div", 18)(10, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_10_Template, 2, 1, "ng-container", 6)(11, CeeAutoCompleteComponent_div_0_ng_template_4_ng_template_11_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(13, CeeAutoCompleteComponent_div_0_ng_template_4_ng_container_13_Template, 5, 4, "ng-container", 19);
    i0.ɵɵpipe(14, "keyvalue");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const textField_r4 = i0.ɵɵreference(7);
    const singleErrorMessage_r9 = i0.ɵɵreference(12);
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r2.isCustomClass && ctx_r2.fieldData.field_style ? ctx_r2.fieldData.field_style.custom_class_name : "", "  ", !ctx_r2.valid || textField_r4.invalid && ctx_r2.isMandatory && (textField_r4.dirty || textField_r4.touched || ctx_r2.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r2.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate("maxlength", ctx_r2.fieldData.field_character_limit == "0" ? "1000" : ctx_r2.fieldData.field_character_limit);
    i0.ɵɵproperty("value", ctx_r2.fieldValue);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.fieldValue);
    i0.ɵɵproperty("required", ctx_r2.isMandatory)("disabled", !ctx_r2.isEditable)("pattern", ctx_r2.validationRegex)("ngStyle", i0.ɵɵpureFunction8(24, _c1, ctx_r2.fieldData.field_style.font_name, ctx_r2.fieldData.field_style.font_size, ctx_r2.fieldData.field_style.font_style, ctx_r2.fieldData.field_style.font_color, ctx_r2.fieldData.field_style.border_color, ctx_r2.fieldData.field_style.field_height, ctx_r2.fieldData.field_style.field_width, ctx_r2.fieldData.field_style.background_color));
    i0.ɵɵattribute("id", ctx_r2.html_id)("aria-label", ctx_r2.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r2.openOptions && ctx_r2.firstFilteredOptions.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.characterCount.display);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.multipleErrorMessage)("ngIfElse", singleErrorMessage_r9);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(14, 22, ctx_r2.showComparisonError));
} }
function CeeAutoCompleteComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 5);
    i0.ɵɵtemplate(1, CeeAutoCompleteComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 6)(2, CeeAutoCompleteComponent_div_0_ng_template_2_Template, 3, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(4, CeeAutoCompleteComponent_div_0_ng_template_4_Template, 15, 33, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const autocompleteTextfield_r10 = i0.ɵɵreference(3);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r2.autocomplete)("ngIfElse", autocompleteTextfield_r10);
} }
export class CeeAutoCompleteComponent extends BaseView {
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
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    fieldValue = '';
    buttonLabel = '';
    html_id = '';
    searchButtonEditable = true;
    isSearch = false;
    isValid = false;
    optionChangedSubscription;
    timer = null;
    autocomplete = false;
    options = [];
    firstFilteredOptions = [];
    optionChanged = new Subject();
    openOptions = false;
    searchSubject = new Subject();
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
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
        this.searchSubject.pipe(debounceTime(800), distinctUntilChanged() // Only trigger if the value changes
        ).subscribe((value) => {
            this.onKey(value);
        });
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
    }
    onDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    unsubscribe() {
        if (this.optionChangedSubscription) {
            this.optionChangedSubscription.unsubscribe();
        }
    }
    // ngAfterViewInit() {
    //   // console.log(this.txtVal.nativeElement);
    // }
    _filter(value) {
        // Check if options fetched from ExternalAPI
        if (this.additionalParameter.hasOwnProperty("externalApiOptionValue") && !this.additionalParameter.hasOwnProperty("externalApiOptionValuefilter")) {
            return this.options;
        }
        else {
            // return this.options;
            const filterValue = typeof value == "string" ? value.toLowerCase() : value;
            return this.options.filter(option => {
                if (option && typeof (option) === 'object') {
                    // check if display key name is added as an additional paramter
                    if (option && this.additionalParameter['Display Key Name']) {
                        return String(option[this.additionalParameter['Display Key Name']]).toLowerCase().indexOf(filterValue) !== -1;
                    }
                    else {
                        console.error(`Display key Name is required as an additional parameter`);
                        return false;
                    }
                }
                else {
                    return option.toLowerCase().indexOf(filterValue) !== -1;
                }
            });
        }
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // END
        this.options = this.firstFilteredOptions = this.fieldData.possible_values;
        if (this.additionalParameter["AutoCompleteText"] && this.additionalParameter["AutoCompleteText"] == "OFF") {
            this.autocomplete = true;
        }
        //
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.firstFilteredOptions = this.rowData.value;
                }
                else {
                    this.fieldValue = this.rowData.value;
                    // this.updateFieldData(this.fieldValue);
                }
            }
        }
        this.checkOptions(); // check if options are there
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    // checks for options if present
    // trigger present event if not then trigger
    // not present event
    checkOptions() {
        this.optionChangedSubscription = this.optionChanged.subscribe(res => {
            if (this.options.length) {
                let found = false;
                if (res.length) {
                    found = true;
                    // console.log('Data Found');
                }
                this.onComponentEvent('OnKeyUp', undefined, true, found, 'OnFilter');
            }
        });
    }
    onFocus() {
        this.openOptions = true;
        // this.$emitKeyDown = this.sharedEventsService.emitKeyDown.subscribe(() => {
        //     this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], this.fieldValue));
        // });
    }
    onChange(event) {
        // this.setSessionData(newValue);
    }
    onKeyUp(event, txtField) {
        // Emit the value to the searchSubject to trigger debounce logic
        this.searchSubject.next(txtField.value);
    }
    onKey(value) {
        this.isValid = this.textField.valid;
        clearTimeout(this.timer);
        // if first filtered options is present then
        // check for the first filtered option
        if (this.firstFilteredOptions) {
            //this.firstFilteredOptions = this._filter(value.value);
            this.firstFilteredOptions = this._filter(value);
            this.optionChanged.next(this.firstFilteredOptions);
        }
        // this.openOptions = value.model.length > 0 ? true : false;
        // console.log(this.firstFilteredOptions);
        // this.updateFieldData(value.value);
        this.timer = setTimeout(() => {
            if (!this.additionalParameter['onlyFromDropdown'] || (this.additionalParameter['onlyFromDropdown'] && this.additionalParameter['onlyFromDropdown'] != 'true')) {
                this.updateFieldData(value, this.isValid);
            }
            this.onComponentEvent('OnKeyUp');
        }, 100);
    }
    concatData() { }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        let resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            setTimeout(() => {
                resData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
            }, 0);
        }
        if (resData !== null) {
            if (Array.isArray(resData) && this.isSingleApiKey) {
                // this.fieldData.possible_values = resData;
                this.options = resData;
                this.firstFilteredOptions = this._filter(this.fieldValue);
            }
            else {
                this.fieldValue = resData;
                this.updateFieldData(this.fieldValue);
            }
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        if (Array.isArray(externalApiOptionValue)) {
                            // this.fieldData.possible_values = externalApiOptionValue;
                            this.options = externalApiOptionValue;
                            this.firstFilteredOptions = this._filter(this.fieldValue);
                            this.optionChanged.next(this.firstFilteredOptions);
                        }
                        else {
                            console.error('Something Went Wrong in Picker !!!');
                        }
                    }
                }
            }
        }
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
                this.fieldValue = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = paramter.value;
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
                // from additionalParameter with type externalApiOptionValue
                if (this.fieldData.additional_parameters.filter((parameter, index) => {
                    if (parameter.parameter_type === 'externalApiOptionValue') {
                        return parameter;
                    }
                }).length == 0) {
                    this.options = this.firstFilteredOptions = this.fieldData.possible_values;
                }
                if (this.textField) {
                    this.textField.reset(value);
                    this.textField.control.markAsUntouched();
                    this.textField.control.markAsPristine();
                    this.textField.control.updateValueAndValidity();
                }
                this.options = [];
                this.firstFilteredOptions = [];
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
            this.fieldValue = this.commonUtil.getID(get_data[unique_id_value]);
            this.updateFieldData(this.fieldValue);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    setUpdatedValue() {
        this.onDirty();
        setTimeout(() => {
            this.openOptions = false;
        }, 200);
    }
    setValueNew(selected = null, value) {
        if (value && value[this.additionalParameter['Display Key Name']]) {
            value = { key: value[this.additionalParameter['PrimaryKeyName']], value: value[this.additionalParameter['Display Key Name']] };
        }
        this.getUpdatedValue(selected, value);
    }
    // function sets the value in the field from the auto complete
    // and creates a new field in the app data store if the field
    // is not present and has additional parameter Display Key Name
    // and Primary Key Field Id
    getUpdatedValue(selected = null, value) {
        this.onDirty();
        if (selected) {
            // check if type of value is an object
            if (value && typeof (value) === 'object') {
                this.fieldValue = value.value;
                // check if the key is not null
                // check if the additional paramter has PrimaryKeyName and Primary Key Field Id
                // then add a new hidden field needs to be added or updated
                if (this.additionalParameter['PrimaryKeyName'] && this.additionalParameter['Primary Key Field Id'] && value.key !== null) {
                    let primaryFieldData = this.appData;
                    primaryFieldData = {
                        ...primaryFieldData, ...{
                            id: this.additionalParameter['Primary Key Field Id'],
                            editable: false,
                            visible: false,
                            mandatory: false,
                            value: value.key,
                            apiKey: this.isSingleApiKey ? this.additionalParameter['PrimaryKeyName'] : '',
                            isValid: true,
                            responseApiKey: [],
                            requestApiKey: this.isSingleApiKey ? [] : [this.additionalParameter['PrimaryKeyName']]
                        }
                    };
                    this.appDataService.setAppData(primaryFieldData);
                }
            }
            else {
                // string update field value
                this.fieldValue = value;
            }
            this.updateFieldData(this.fieldValue);
            this.onComponentEvent('onSelect');
        }
        this.openOptions = false;
    }
    // function returns the option value
    getOptionText(option) {
        // as the option will come in an object pattern
        // and the object would be { key: <some value>, value: <some value> }
        let value = '';
        if (option) {
            if (typeof (option) === 'object') {
                value = option.value;
            }
            else {
                // because on init the value comes as a string
                value = option;
            }
        }
        else {
            value = '';
        }
        return value;
    }
    // function returns the value whether to stop copy or paste event (return false means pause)
    // { "parameter_type": "Override", "value":"COPY||PASTE||CUT"} whichever event you want to stop
    onOverrideHandler(event) {
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
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
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
    static ɵfac = function CeeAutoCompleteComponent_Factory(t) { return new (t || CeeAutoCompleteComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeAutoCompleteComponent, selectors: [["app-cee-auto-complete"]], viewQuery: function CeeAutoCompleteComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.textField = _t.first);
        } }, hostBindings: function CeeAutoCompleteComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("beforeunload", function CeeAutoCompleteComponent_beforeunload_HostBindingHandler() { return ctx.onDestroy(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["autocompleteTextfield", ""], ["textFieldData", ""], ["textField", "ngModel"], ["singleErrorMessage", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["autocomplete", "off"], ["type", "submit", "value", "submit", 2, "display", "none"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], [1, "form-field", "dropdown-container"], ["type", "text", 3, "paste", "copy", "cut", "focus", "ngModelChange", "keyup", "blur", "value", "ngModel", "required", "disabled", "placeholder", "maxlength", "pattern", "ngStyle"], ["class", "dropdown", 4, "ngIf"], ["class", "display_character_count", 3, "ngSwitch", 4, "ngIf"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], [1, "dropdown"], ["class", "dropdown-item", 3, "value", "pointerdown", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "pointerdown", "value"], [1, "display_character_count", 3, "ngSwitch"], [3, "ngStyle", 4, "ngSwitchCase"], [3, "ngStyle"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"]], template: function CeeAutoCompleteComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeAutoCompleteComponent_div_0_Template, 6, 2, "div", 4);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgTemplateOutlet, MatTooltipModule, FormsModule, i12.ɵNgNoValidate, i12.DefaultValueAccessor, i12.NgControlStatus, i12.NgControlStatusGroup, i12.RequiredValidator, i12.MaxLengthValidator, i12.PatternValidator, i12.NgModel, i12.NgForm, MatAutocompleteModule, NgStyle, NgSwitch, CommonModule, i13.NgForOf, i13.NgIf, i13.NgSwitchCase, i13.KeyValuePipe, TooltipModule, i14.TooltipDirective], styles: [".dropdown[_ngcontent-%COMP%]{position:absolute;width:100%;max-height:200px;margin:0;padding:0;list-style:none;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;box-shadow:0 4px 6px #0000001a;background-color:#fff;overflow-y:auto;z-index:10}.dropdown-container[_ngcontent-%COMP%]{position:relative;width:100%}.dropdown-item[_ngcontent-%COMP%]{padding:8px 12px;cursor:pointer}.dropdown-item[_ngcontent-%COMP%]:hover{background-color:#f0f0f0}.dropdown-item[_ngcontent-%COMP%]:active{background-color:#ddd}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeAutoCompleteComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-auto-complete', standalone: true, imports: [NgTemplateOutlet, MatTooltipModule, FormsModule, MatAutocompleteModule, NgStyle, NgSwitch, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<ng-container *ngIf=\"!autocomplete; else autocompleteTextfield\">\r\n\t\t<ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n\t</ng-container>\r\n\t<ng-template #autocompleteTextfield>\r\n\t\t<form autocomplete=\"off\">\r\n\t\t\t<input type=\"submit\" value=\"submit\" style=\"display:none\" />\r\n\t\t\t<ng-container [ngTemplateOutlet]=\"textFieldData\"></ng-container>\r\n\t\t</form>\r\n\t</ng-template>\r\n\t<ng-template #textFieldData>\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"form-label\">\r\n\t\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t\t</div>\r\n\t\t\t<div class=\"form-field dropdown-container\">\r\n\t\t\t\t<input (paste)=\"onOverrideHandler($event)\" (copy)=\"onOverrideHandler($event)\" (cut)=\"onOverrideHandler($event)\"\r\n\t\t\t\t\ttype=\"text\" [value]=\"fieldValue\" (focus)=\"onFocus()\" [(ngModel)]=\"fieldValue\" (keyup)=\"onKeyUp($event, textField)\"\r\n\t\t\t\t\t(blur)=\"setUpdatedValue()\" #textField=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t[disabled]=\"!isEditable\" placeholder=\"{{fieldData.placeholder_text}}\"\r\n\t\t\t\t\tclass=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}  {{ !valid || (textField.invalid && isMandatory && (textField.dirty || textField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t[attr.id]=\"html_id\"\r\n\t\t\t\t\tmaxlength=\"{{fieldData.field_character_limit == '0' ? '1000': fieldData.field_character_limit}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"fieldData.field_label \" [pattern]=\"validationRegex\" [ngStyle]=\"{\r\n            'font-family': fieldData.field_style.font_name,\r\n            'font-size': fieldData.field_style.font_size,\r\n            'font-style': fieldData.field_style.font_style,\r\n            'font-color': fieldData.field_style.font_color,\r\n            'border-color': fieldData.field_style.border_color,\r\n            'height': fieldData.field_style.field_height,\r\n            'width': fieldData.field_style.field_width,\r\n            'background-color': fieldData.field_style.background_color\r\n          }\">\r\n\t\t\t\t<!-- <mat-autocomplete #auto=\"matAutocomplete\" [displayWith]=\"getOptionText\"\r\n\t\t\t\t\t(optionSelected)=\"getUpdatedValue(true, $event.option.value)\">\r\n\t\t\t\t\t<mat-option *ngFor=\"let option of firstFilteredOptions\"\r\n\t\t\t\t\t\t[value]=\"{ key: additionalParameter['PrimaryKeyName'] ? option[additionalParameter['PrimaryKeyName']] : null , value: additionalParameter['Display Key Name'] ? option[additionalParameter['Display Key Name']]: option }\">\r\n\t\t\t\t\t\t{{additionalParameter[\"Display Key Name\"] ? option[additionalParameter[\"Display Key Name\"]]: option}}\r\n\t\t\t\t\t</mat-option>\r\n\t\t\t\t</mat-autocomplete> -->\r\n\t\t\t\t<ul *ngIf=\"openOptions && firstFilteredOptions.length\" class=\"dropdown\" >\r\n\t\t\t\t\t<li *ngFor=\"let option of firstFilteredOptions\" (pointerdown)=\"setValueNew(true, option)\" class=\"dropdown-item\"\r\n\t\t\t\t\t\t[value]=\"{ key: additionalParameter['PrimaryKeyName'] ? option[additionalParameter['PrimaryKeyName']] : null , value: additionalParameter['Display Key Name'] ? option[additionalParameter['Display Key Name']]: option }\">\r\n\t\t\t\t\t\t{{additionalParameter[\"Display Key Name\"] ? option[additionalParameter[\"Display Key Name\"]]: option}}\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<div class=\"display_character_count\" *ngIf=\"characterCount.display\" [ngSwitch]=\"characterCount.type\">\r\n\t\t\t\t\t<span *ngSwitchCase=\"'Count'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n\t\t\t\t\t\t{{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n\t\t\t\t\t\t''}}{{fieldValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text\r\n\t\t\t\t\t\t? characterCountMessageData.right.message_text : ''}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngSwitchCase=\"'Remaining'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n\t\t\t\t\t\t{{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n\t\t\t\t\t\t''}}{{fieldData.field_character_limit -\r\n\t\t\t\t\t\tfieldValue.length}}/{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n\t\t\t\t\t\tcharacterCountMessageData.right.message_text : ''}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngSwitchCase=\"'Total'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n\t\t\t\t\t\t{{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n\t\t\t\t\t\t''}}{{fieldData.field_character_limit}}{{characterCountMessageData.right.message_text ?\r\n\t\t\t\t\t\tcharacterCountMessageData.right.message_text : ''}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<span *ngSwitchCase=\"'CharRemaining'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': characterCountMessageData.left.color ? characterCountMessageData.right.color : characterCountMessageData.left.color}\">\r\n\t\t\t\t\t\t{{characterCountMessageData.left.message_text ? characterCountMessageData.left.message_text :\r\n\t\t\t\t\t\t''}}{{fieldData.field_character_limit - fieldValue.length}}{{characterCountMessageData.right.message_text ?\r\n\t\t\t\t\t\tcharacterCountMessageData.right.message_text : ''}}\r\n\t\t\t\t\t</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext )\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t*ngIf=\"textField.invalid && (textField.dirty || textField.touched || showErrorOnNext)\">\r\n\t\t\t\t\t\t<div *ngIf=\"textField?.errors.required || textField?.errors.minlength || textField?.errors.pattern\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\r\n\t\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n</div>\r\n<!--   [formControl]=\"myControl\" -->\r\n", styles: [".dropdown{position:absolute;width:100%;max-height:200px;margin:0;padding:0;list-style:none;border:1px solid #ccc;border-top:none;border-radius:0 0 4px 4px;box-shadow:0 4px 6px #0000001a;background-color:#fff;overflow-y:auto;z-index:10}.dropdown-container{position:relative;width:100%}.dropdown-item{padding:8px 12px;cursor:pointer}.dropdown-item:hover{background-color:#f0f0f0}.dropdown-item:active{background-color:#ddd}\n"] }]
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
        }], onDestroy: [{
            type: HostListener,
            args: ['window:beforeunload']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeAutoCompleteComponent, { className: "CeeAutoCompleteComponent", filePath: "lib\\field-components\\cee-auto-complete\\cee-auto-complete.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWF1dG8tY29tcGxldGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWF1dG8tY29tcGxldGUvY2VlLWF1dG8tY29tcGxldGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWF1dG8tY29tcGxldGUvY2VlLWF1dG8tY29tcGxldGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWEsWUFBWSxFQUE0QixTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFPbkksT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUlwRSxPQUFPLEVBQXdCLFlBQVksRUFBRSxvQkFBb0IsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBRTFGLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUVyRCxPQUFPLEVBQWdCLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUM3QyxPQUFPLEVBQUUsV0FBVyxFQUFXLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEYsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDdkUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUN0QnZFLDZCQUFnRTtJQUMvRCwyQkFBZ0U7Ozs7O0lBQWxELGNBQWtDO0lBQWxDLG1EQUFrQzs7O0lBR2hELCtCQUF5QjtJQUN4QiwyQkFBMkQ7SUFDM0QsMkJBQWdFO0lBQ2pFLGlCQUFPOzs7O0lBRFEsZUFBa0M7SUFBbEMsbURBQWtDOzs7SUFPOUMsaUNBQXFFO0lBQUEsWUFBeUI7SUFBQSxpQkFBUTs7O0lBQWpDLGNBQXlCO0lBQXpCLGtEQUF5Qjs7O0lBQzlGLDRCQUM2Qzs7O0lBQTVDLDJFQUFtQzs7O0lBSHJDLDZCQUFnRDtJQUUvQyxBQURBLGlIQUFxRSxvR0FFaEM7Ozs7SUFGTixjQUFvQztJQUFwQyxtRUFBb0M7SUFDcEMsY0FBbUM7SUFBbkMsa0VBQW1DOzs7SUFHbkUsZ0NBQWlEO0lBQUMsa0JBQUM7SUFBQSxpQkFBTzs7O0lBQzFELGtDQUFnSjtJQUFBLGlCQUFDO0lBQUEsaUJBQVM7OztJQUE3RixrREFBNkI7Ozs7O0lBNEJ6Riw4QkFDNE47SUFENUssaVBBQWUsbUJBQVksSUFBSSxZQUFTLEtBQUM7SUFFeEYsWUFDRDtJQUFBLGlCQUFLOzs7O0lBRkoseVJBQTBOO0lBQzFOLGNBQ0Q7SUFEQyx1SkFDRDs7O0lBSkQsOEJBQXlFO0lBQ3hFLGlHQUM0TjtJQUc3TixpQkFBSzs7O0lBSm1CLGNBQXVCO0lBQXZCLHFEQUF1Qjs7O0lBTTlDLGdDQUM0STtJQUMzSSxZQUdEO0lBQUEsaUJBQU87OztJQUpOLDhMQUEwSTtJQUMxSSxjQUdEO0lBSEMsNFVBR0Q7OztJQUNBLGdDQUM0STtJQUMzSSxZQUlEO0lBQUEsaUJBQU87OztJQUxOLDhMQUEwSTtJQUMxSSxjQUlEO0lBSkMscVhBSUQ7OztJQUNBLGdDQUM0STtJQUMzSSxZQUdEO0lBQUEsaUJBQU87OztJQUpOLDhMQUEwSTtJQUMxSSxjQUdEO0lBSEMsNlNBR0Q7OztJQUNBLGdDQUM0STtJQUMzSSxZQUdEO0lBQUEsaUJBQU87OztJQUpOLDhMQUEwSTtJQUMxSSxjQUdEO0lBSEMsd1VBR0Q7OztJQXpCRCwrQkFBcUc7SUFvQnBHLEFBTkEsQUFQQSxBQU5BLHNHQUM0SSx5RkFNQSx5RkFPQSx5RkFNQTtJQUs3SSxpQkFBTTs7O0lBMUI4RCxxREFBZ0M7SUFDNUYsY0FBcUI7SUFBckIsc0NBQXFCO0lBTXJCLGNBQXlCO0lBQXpCLDBDQUF5QjtJQU96QixjQUFxQjtJQUFyQixzQ0FBcUI7SUFNckIsY0FBNkI7SUFBN0IsOENBQTZCOzs7SUFZakMsNkJBQzhEO0lBQzdELFlBQWdEO0lBQUEsaUJBQUk7Ozs7SUFEcEQscUdBQTREO0lBQzVELGNBQWdEO0lBQWhELHNGQUFnRDs7O0lBSGxELDJCQUF3QztJQUN2QyxxSUFDOEQ7SUFFL0QsaUJBQU07Ozs7SUFIRCxjQUFnRDtJQUFoRCwyRUFBZ0Q7OztJQUtwRCw2QkFBb0c7SUFDbkcsWUFBZ0Q7SUFBQSxpQkFBSTs7OztJQURkLHFHQUE0RDtJQUNsRyxjQUFnRDtJQUFoRCxzRkFBZ0Q7OztJQUZsRCwyQkFBeUM7SUFDeEMscUlBQW9HO0lBRXJHLGlCQUFNOzs7SUFGRCxjQUFpQztJQUFqQyxxREFBaUM7OztJQUlyQyw2QkFBZ0c7SUFDL0YsWUFBZ0Q7SUFBQSxpQkFBSTs7OztJQURsQixxR0FBNEQ7SUFDOUYsY0FBZ0Q7SUFBaEQsc0ZBQWdEOzs7SUFGbEQsMkJBQXVDO0lBQ3RDLHFJQUFnRztJQUVqRyxpQkFBTTs7O0lBRkQsY0FBNkI7SUFBN0IsaURBQTZCOzs7SUFabkMsK0JBQ3lGO0lBVXhGLEFBSkEsQUFMQSxtSUFBd0Msc0hBS0Msc0hBSUY7SUFJeEMsaUJBQU07Ozs7SUFiQyxjQUFnQztJQUFoQyxpRkFBZ0M7SUFLaEMsY0FBaUM7SUFBakMsa0ZBQWlDO0lBSWpDLGNBQStCO0lBQS9CLGdGQUErQjs7O0lBWnZDLDZCQUErQztJQUM5Qyw2SEFDeUY7Ozs7OztJQUF2RixjQUFxRjtJQUFyRixxSEFBcUY7OztJQUh6Riw2QkFBb0U7SUFDbkUsZ0lBQStDOzs7O0lBQWIsY0FBVztJQUFYLHlDQUFXOzs7SUF1QjNDLDZCQUFxRTtJQUNwRSxZQUFpQztJQUFBLGlCQUFJOzs7SUFEZixtRkFBNkM7SUFDbkUsY0FBaUM7SUFBakMsb0VBQWlDOzs7SUFGbkMsMkJBQW9HO0lBQ25HLHFIQUFxRTtJQUV0RSxpQkFBTTs7O0lBRkQsY0FBaUI7SUFBakIseUNBQWlCOzs7SUFIdkIsK0JBQ3dGO0lBQ3ZGLG1IQUFvRztJQUlyRyxpQkFBTTs7OztJQUpDLGNBQTRGO0lBQTVGLG1OQUE0Rjs7O0lBRm5HLDZHQUN3Rjs7Ozs7SUFBdEYscUhBQW9GOzs7SUFRdkYsNkJBQWtFO0lBRy9ELEFBREQsQUFERCwrQkFBbUMsVUFDN0IsWUFDdUM7SUFDMUMsWUFBMkI7SUFFOUIsQUFEQyxBQUQ2QixpQkFBSSxFQUMzQixFQUNEOzs7O0lBSEQsZUFBdUM7SUFBdkMseUVBQXVDO0lBQ3pDLGNBQTJCO0lBQTNCLDBEQUEyQjs7OztJQXJHaEMsQUFERCwrQkFBd0IsY0FDQztJQU92QixBQURBLEFBTEEsZ0hBQWdELG1GQUtDLHVGQUMrRjtJQUNqSixpQkFBTTtJQUVMLEFBREQsK0JBQTJDLG1CQWlCakM7SUFmeUIsQUFENEMsQUFBbkMsQUFBcEMsd01BQVMsZ0NBQXlCLEtBQUMseUxBQVMsZ0NBQXlCLEtBQUMsdUxBQVEsZ0NBQXlCLEtBQUMscUxBQ3BFLGdCQUFTLEtBQUM7SUFBQywyVEFBd0I7SUFDN0UsQUFEOEUsZ1BBQVMsb0NBQTBCLEtBQUMsbUxBQzFHLHdCQUFpQixLQUFDO0lBRjNCLGlCQWdCUztJQXVFVCxBQVZBLEFBcEJBLEFBM0JBLEFBTkEsNEZBQXlFLGlGQU00QixvR0EyQmpDLG1JQW9CbkMscUdBVWlDOztJQVNwRSxBQURDLGlCQUFNLEVBQ0Q7Ozs7O0lBekdXLGVBQStCO0lBQS9CLHlEQUErQjtJQUt2QyxjQUFpQjtJQUFqQix5Q0FBaUI7SUFDZixjQUFnQjtJQUFoQix3Q0FBZ0I7SUFPeEIsZUFBbVA7SUFBblAsNlRBQW1QO0lBRDFOLDBFQUE0QztJQUdyRSxzSUFBZ0c7SUFMcEYseUNBQW9CO0lBQXFCLGlEQUF3QjtJQU1OLEFBQTVCLEFBSjNDLEFBRGdELDZDQUF3QixnQ0FDaEQsbUNBSThDLHlYQVMvRDs7SUFRSCxlQUFnRDtJQUFoRCwrRUFBZ0Q7SUFNZixjQUE0QjtJQUE1QixvREFBNEI7SUEyQm5ELGNBQTRCO0lBQUEsQUFBNUIsa0RBQTRCLG1DQUF1QjtJQThCbkMsZUFBaUM7SUFBakMsNEVBQWlDOzs7SUE3R3BFLDhCQUE2QztJQVU1QyxBQU5BLEFBSEEsaUdBQWdFLG1IQUc1QixxSEFNUjtJQThHN0IsaUJBQU07Ozs7SUF2SFUsY0FBcUI7SUFBQSxBQUFyQiwyQ0FBcUIsdUNBQTBCOztBRCtCL0QsTUFBTSxPQUFPLHdCQUF5QixTQUFRLFFBQVE7SUErQnZDO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUF2Q2EsU0FBUyxDQUFVO0lBRTFCLE1BQU0sQ0FBTTtJQUNaLFNBQVMsQ0FBTTtJQUN2QixlQUFlLENBQU07SUFDckIsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNsQixPQUFPLENBQU07SUFDYixrQkFBa0IsQ0FBTTtJQUN4QixpQkFBaUIsQ0FBTTtJQUN2QixnQkFBZ0IsQ0FBTTtJQUMvQixhQUFhLENBQW9CO0lBQ3pCLGNBQWMsQ0FBaUI7SUFDdkMsZUFBZSxHQUFHLEVBQUUsQ0FBQztJQUNyQixVQUFVLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLFdBQVcsR0FBRyxFQUFFLENBQUM7SUFDakIsT0FBTyxHQUFHLEVBQUUsQ0FBQztJQUNiLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBQ2pCLE9BQU8sR0FBRyxLQUFLLENBQUM7SUFDaEIseUJBQXlCLENBQWU7SUFDeEMsS0FBSyxHQUFHLElBQUksQ0FBQztJQUNiLFlBQVksR0FBRyxLQUFLLENBQUM7SUFDckIsT0FBTyxHQUFhLEVBQUUsQ0FBQztJQUN2QixvQkFBb0IsR0FBRyxFQUFFLENBQUM7SUFDMUIsYUFBYSxHQUFHLElBQUksT0FBTyxFQUFPLENBQUM7SUFDbkMsV0FBVyxHQUFhLEtBQUssQ0FBQztJQUN0QixhQUFhLEdBQUcsSUFBSSxPQUFPLEVBQVUsQ0FBQztJQUU5QyxZQUNXLHNCQUE4QyxFQUM5QyxtQkFBK0MsRUFDL0Msa0JBQTZDLEVBQzdDLGNBQThCLEVBQzlCLGNBQThCLEVBQzlCLG9CQUEwQyxFQUMxQyxNQUFpQixFQUNqQixRQUFxQixFQUNyQixJQUFnQixFQUNoQixhQUE0QixFQUM1QixNQUFjO1FBRXJCLEtBQUssQ0FDRCxzQkFBc0IsRUFDdEIsbUJBQW1CLEVBQ25CLGtCQUFrQixFQUNsQixjQUFjLEVBQ2QsY0FBYyxFQUNkLG9CQUFvQixFQUNwQixNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFuQjVDLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUE0QjtRQUMvQyx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQTJCO1FBQzdDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNoQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUM1QixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBVXJCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxpQkFBaUIsRUFBRSxDQUFDO1FBQzdDLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxjQUFjLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFFbkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQ25CLFlBQVksQ0FBQyxHQUFHLENBQUMsRUFDakIsb0JBQW9CLEVBQUUsQ0FBRyxvQ0FBb0M7U0FDaEUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRTtZQUNsQixJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELFFBQVE7UUFDSixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUdELFNBQVM7UUFDTCxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsbUNBQW1DO0lBQzNELENBQUM7SUFFRCxXQUFXO1FBQ1AsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLG1DQUFtQztJQUMzRCxDQUFDO0lBRUQsV0FBVztRQUNQLElBQUksSUFBSSxDQUFDLHlCQUF5QixFQUFFO1lBQ2hDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNoRDtJQUNMLENBQUM7SUFFRCxzQkFBc0I7SUFDdEIsK0NBQStDO0lBQy9DLElBQUk7SUFFSSxPQUFPLENBQUMsS0FBYTtRQUV6Qiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLHdCQUF3QixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsY0FBYyxDQUFDLDhCQUE4QixDQUFDLEVBQUU7WUFDL0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1NBQ3ZCO2FBQU07WUFDSCx1QkFBdUI7WUFDdkIsTUFBTSxXQUFXLEdBQUcsT0FBTyxLQUFLLElBQUksUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUMzRSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLE1BQU0sSUFBSSxPQUFPLENBQUMsTUFBTSxDQUFDLEtBQUssUUFBUSxFQUFFO29CQUN4QywrREFBK0Q7b0JBQy9ELElBQUksTUFBTSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxFQUFFO3dCQUN4RCxPQUFPLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztxQkFDakg7eUJBQU07d0JBQ0gsT0FBTyxDQUFDLEtBQUssQ0FBQyx5REFBeUQsQ0FBQyxDQUFDO3dCQUN6RSxPQUFPLEtBQUssQ0FBQztxQkFDaEI7aUJBQ0o7cUJBQU07b0JBQ0gsT0FBTyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2lCQUMzRDtZQUNMLENBQUMsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQsY0FBYztRQUNWLHFCQUFxQjtRQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDO1FBQ3RDLE1BQU07UUFDTixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztRQUMxRSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLEtBQUssRUFBRTtZQUN2RyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQztTQUM1QjtRQUNELEVBQUU7UUFDRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN0QyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDbkMsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDO29CQUNyQyx5Q0FBeUM7aUJBQzVDO2FBQ0o7U0FDSjtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQyxDQUFDLDZCQUE2QjtRQUNsRCxrQ0FBa0M7UUFDbEMsSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsRUFBRTtZQUN2RCxJQUFJLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUU7Z0JBQ2hFLFFBQVEsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM1RCxDQUFDLENBQUM7U0FDTDtJQUNMLENBQUM7SUFFRCxnQ0FBZ0M7SUFDaEMsNENBQTRDO0lBQzVDLG9CQUFvQjtJQUNwQixZQUFZO1FBQ1IsSUFBSSxDQUFDLHlCQUF5QixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2hFLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUU7Z0JBQ3JCLElBQUksS0FBSyxHQUFHLEtBQUssQ0FBQztnQkFDbEIsSUFBSSxHQUFHLENBQUMsTUFBTSxFQUFFO29CQUNaLEtBQUssR0FBRyxJQUFJLENBQUM7b0JBQ2IsNkJBQTZCO2lCQUNoQztnQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3hFO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsT0FBTztRQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLDZFQUE2RTtRQUM3RSw4SEFBOEg7UUFDOUgsTUFBTTtJQUNWLENBQUM7SUFFRCxRQUFRLENBQUMsS0FBVTtRQUNmLGlDQUFpQztJQUNyQyxDQUFDO0lBRUQsT0FBTyxDQUFDLEtBQVUsRUFBRSxRQUFhO1FBQzdCLGdFQUFnRTtRQUNoRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDNUMsQ0FBQztJQUVELEtBQUssQ0FBQyxLQUFVO1FBRVosSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQztRQUNwQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3pCLDRDQUE0QztRQUM1QyxzQ0FBc0M7UUFDdEMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLEVBQUU7WUFDM0Isd0RBQXdEO1lBQ3hELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQ3REO1FBQ0QsNERBQTREO1FBQzVELDBDQUEwQztRQUMxQyxxQ0FBcUM7UUFDckMsSUFBSSxDQUFDLEtBQUssR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO1lBQ3pCLElBQUcsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxFQUFDO2dCQUN6SixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDN0M7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1osQ0FBQztJQUVELFVBQVUsS0FBSyxDQUFDO0lBRWhCLGFBQWEsQ0FBQyxJQUFTO1FBQ25CLDhDQUE4QztRQUM5QyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUUsZ0JBQWdCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRSxnQkFBZ0IsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQzdFLFVBQVUsQ0FBQyxHQUFHLEVBQUU7Z0JBQ1osT0FBTyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7WUFDbkgsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7UUFDRCxJQUFJLE9BQU8sS0FBSyxJQUFJLEVBQUU7WUFDbEIsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQy9DLDRDQUE0QztnQkFDNUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM3RDtpQkFBTTtnQkFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekM7U0FDSjtRQUVELGlFQUFpRTtRQUNqRSw0REFBNEQ7UUFDNUQsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4RixLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLEVBQUU7Z0JBQzFELElBQUksU0FBUyxDQUFDLGNBQWMsS0FBSyx3QkFBd0IsRUFBRTtvQkFDdkQsTUFBTSxzQkFBc0IsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDckYsSUFBSSxzQkFBc0IsS0FBSyxJQUFJLEVBQUU7d0JBQ2pDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFOzRCQUN2QywyREFBMkQ7NEJBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsc0JBQXNCLENBQUM7NEJBQ3RDLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzs0QkFDMUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUM7eUJBQ3REOzZCQUFNOzRCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsb0NBQW9DLENBQUMsQ0FBQzt5QkFDdkQ7cUJBQ0o7aUJBQ0o7YUFDSjtTQUNKO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFhO1FBQ3hCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUMzQixlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDSCxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3JCLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDOUM7aUJBQU07Z0JBQ0gsZUFBZSxHQUFHLENBQUMsR0FBRyxlQUFlO29CQUNyQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQ2xDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLGVBQWUsR0FBRztvQkFDZCxHQUFHLGVBQWU7b0JBQ2xCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztpQkFBQyxDQUFDO2FBQzlFO1NBQ0o7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ2YsSUFBSSxlQUFlLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUMvQixjQUFjO2dCQUNkLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztnQkFDZixJQUFJLENBQUMsVUFBVSxHQUFHLEtBQUssQ0FBQztnQkFDeEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDekYsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFO3dCQUN6RCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ25FLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxlQUFlLEVBQUU7NEJBQzdDLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzs0QkFDakMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7eUJBQzFCO3FCQUNKO2lCQUNKO2dCQUNELElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQzVCLGlEQUFpRDtnQkFDakQsaUZBQWlGO2dCQUNqRix5REFBeUQ7Z0JBQ3pELHFIQUFxSDtnQkFDckgsa0NBQWtDO2dCQUNsQyxJQUFJLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztnQkFDN0IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7Z0JBQ2xCLDREQUE0RDtnQkFDNUQsSUFBRyxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsRUFBQyxLQUFLLEVBQUMsRUFBRTtvQkFDOUQsSUFBRyxTQUFTLENBQUMsY0FBYyxLQUFLLHdCQUF3QixFQUFDO3dCQUNyRCxPQUFPLFNBQVMsQ0FBQztxQkFDcEI7Z0JBQ0wsQ0FBQyxDQUFDLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtvQkFDWixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsQ0FBQztpQkFDN0U7Z0JBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO29CQUNoQixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsZUFBZSxFQUFFLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUN4QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxzQkFBc0IsRUFBRSxDQUFDO2lCQUNuRDtnQkFDRCxJQUFJLENBQUMsT0FBTyxHQUFHLEVBQUUsQ0FBQztnQkFDbEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztnQkFDL0IsT0FBTzthQUNWO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsUUFBYTtRQUM5QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZCxJQUFJLGVBQWUsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxPQUFPLFFBQVEsS0FBSyxRQUFRLEVBQUU7WUFDOUIsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3pDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUM7WUFDSCxlQUFlLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUM7U0FDOUM7UUFDRCxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztZQUNuRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztTQUN6QztJQUNMLENBQUM7SUFDRCxnQkFBZ0IsQ0FBQyxNQUFjLEVBQUUsS0FBVTtRQUN2QyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3RDLElBQUksQ0FBQyx5QkFBeUIsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsZUFBZTtRQUNYLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNmLFVBQVUsQ0FBQyxHQUFHLEVBQUU7WUFDWixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUM1QixDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsV0FBVyxDQUFDLFFBQVEsR0FBRyxJQUFJLEVBQUUsS0FBVTtRQUNuQyxJQUFHLEtBQUssSUFBSSxLQUFLLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGtCQUFrQixDQUFDLENBQUMsRUFBQztZQUM1RCxLQUFLLEdBQUcsRUFBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxFQUFDLENBQUE7U0FDL0g7UUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUN6QyxDQUFDO0lBRUQsOERBQThEO0lBQzlELDZEQUE2RDtJQUM3RCwrREFBK0Q7SUFDL0QsMkJBQTJCO0lBQzNCLGVBQWUsQ0FBQyxRQUFRLEdBQUcsSUFBSSxFQUFFLEtBQVU7UUFDdkMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsSUFBSSxRQUFRLEVBQUU7WUFDVixzQ0FBc0M7WUFDdEMsSUFBSSxLQUFLLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLFFBQVEsRUFBRTtnQkFDdEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUM5QiwrQkFBK0I7Z0JBQy9CLCtFQUErRTtnQkFDL0UsMkRBQTJEO2dCQUMzRCxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLEtBQUssQ0FBQyxHQUFHLEtBQUssSUFBSSxFQUFFO29CQUN0SCxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7b0JBQ3BDLGdCQUFnQixHQUFHO3dCQUNmLEdBQUcsZ0JBQWdCLEVBQUUsR0FBRzs0QkFDcEIsRUFBRSxFQUFFLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxzQkFBc0IsQ0FBQzs0QkFDcEQsUUFBUSxFQUFFLEtBQUs7NEJBQ2YsT0FBTyxFQUFFLEtBQUs7NEJBQ2QsU0FBUyxFQUFFLEtBQUs7NEJBQ2hCLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRzs0QkFDaEIsTUFBTSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzRCQUM3RSxPQUFPLEVBQUUsSUFBSTs0QkFDYixjQUFjLEVBQUUsRUFBRTs0QkFDbEIsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsZ0JBQWdCLENBQUMsQ0FBQzt5QkFDekY7cUJBQ0osQ0FBQztvQkFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2lCQUVwRDthQUVKO2lCQUFNO2dCQUNILDRCQUE0QjtnQkFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7YUFDM0I7WUFDRCxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUN0QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLENBQUM7U0FDckM7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztJQUM3QixDQUFDO0lBRUQsb0NBQW9DO0lBQ3BDLGFBQWEsQ0FBQyxNQUFNO1FBQ2hCLCtDQUErQztRQUMvQyxxRUFBcUU7UUFDckUsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxNQUFNLEVBQUU7WUFDUixJQUFJLE9BQU8sQ0FBQyxNQUFNLENBQUMsS0FBSyxRQUFRLEVBQUU7Z0JBQzlCLEtBQUssR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILDhDQUE4QztnQkFDOUMsS0FBSyxHQUFHLE1BQU0sQ0FBQzthQUNsQjtTQUNKO2FBQU07WUFDSCxLQUFLLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNqQixDQUFDO0lBQ0QsNEZBQTRGO0lBQzVGLCtGQUErRjtJQUMvRixpQkFBaUIsQ0FBQyxLQUFLO1FBQ25CLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQ3RDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQztZQUN2QixJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDOUQsSUFBSSxLQUFLLENBQUMsV0FBVyxFQUFFLElBQUksS0FBSyxDQUFDLElBQUksRUFBRTtvQkFDbkMsV0FBVyxHQUFHLEtBQUssQ0FBQztpQkFDdkI7WUFDTCxDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sV0FBVyxDQUFDO1NBQ3RCO2FBQU07WUFDSCxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0wsQ0FBQztJQUNELDZCQUE2QixDQUFDLElBQVk7UUFDdEMsSUFBSSxJQUFJLEVBQUU7WUFDTixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtnQkFDdEQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO29CQUN6QyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDckUsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixpR0FBaUc7Z0JBQ2pHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUMxRjtTQUNKO0lBQ0wsQ0FBQztJQUVELCtCQUErQixDQUFDLElBQVk7SUFFNUMsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVM7UUFDeEIsOENBQThDO0lBQ2xELENBQUM7SUFFRCxjQUFjLENBQUMsSUFBWTtJQUUzQixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO1FBQzlCLElBQUksT0FBTyxDQUFDLGlCQUFpQixFQUFFO1lBQzNCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGlCQUFpQixDQUFDLFlBQVksRUFBRSxZQUFZLENBQUMsQ0FBQztTQUM1RTtRQUNELElBQUksT0FBTyxDQUFDLGdCQUFnQixFQUFFO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRSxXQUFXLENBQUMsQ0FBQztTQUMxRTtRQUNELElBQUksT0FBTyxDQUFDLGtCQUFrQixFQUFFO1lBQzVCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxhQUFhLENBQUMsQ0FBQztTQUM5RTtJQUNMLENBQUM7a0ZBMWJRLHdCQUF3Qjs2REFBeEIsd0JBQXdCOzs7Ozs7WUFBeEIsMkdBQUEsZUFBVywrQkFBYTs7WUNoQ3JDLHlFQUE2Qzs7WUFBakIsb0NBQWU7NEJEOEI3QixnQkFBZ0IsRUFBRSxnQkFBZ0IsRUFBRSxXQUFXLDRMQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSw2REFBRSxhQUFhOztpRkFFdkgsd0JBQXdCO2NBUHBDLFNBQVM7MkJBQ0ksdUJBQXVCLGNBR3JCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxxQkFBcUIsRUFBRSxPQUFPLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxhQUFhLENBQUM7bVdBSXpHLFNBQVM7a0JBQWhDLFNBQVM7bUJBQUMsV0FBVztZQUVMLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUEwRE4sU0FBUztrQkFEUixZQUFZO21CQUFDLHFCQUFxQjs7a0ZBcEUxQix3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgU2Vzc2lvbktleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLWtleS11dGlsJztcclxuaW1wb3J0IHsgV2ZlRW5jcnlwdGlvblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtZW5jcnlwdGlvbi11dGlsJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXAgYXMgTWF0VG9vbHRpcCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IHRha2UsIHN0YXJ0V2l0aCwgbWFwLCBkZWJvdW5jZVRpbWUsIGRpc3RpbmN0VW50aWxDaGFuZ2VkIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24sIFN1YmplY3QgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIE5nTW9kZWwgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nU3R5bGUsIE5nU3dpdGNoLCBOZ1RlbXBsYXRlT3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLWF1dG8tY29tcGxldGUnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1hdXRvLWNvbXBsZXRlLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW05nVGVtcGxhdGVPdXRsZXQsIE1hdFRvb2x0aXBNb2R1bGUsIEZvcm1zTW9kdWxlLCBNYXRBdXRvY29tcGxldGVNb2R1bGUsIE5nU3R5bGUsIE5nU3dpdGNoLCBDb21tb25Nb2R1bGUsIFRvb2x0aXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVBdXRvQ29tcGxldGVDb21wb25lbnQgZXh0ZW5kcyBCYXNlVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ3RleHRGaWVsZCcpIHRleHRGaWVsZDogTmdNb2RlbDtcclxuXHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2aXNpYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICB3ZmVFbmNyeXB0aW9uOiBXZmVFbmNyeXB0aW9uVXRpbDtcclxuICAgIGRlY2xhcmUgc2Vzc2lvbktleVV0aWw6IFNlc3Npb25LZXlVdGlsO1xyXG4gICAgdmFsaWRhdGlvblJlZ2V4ID0gJyc7XHJcbiAgICBmaWVsZFZhbHVlID0gJyc7XHJcbiAgICBidXR0b25MYWJlbCA9ICcnO1xyXG4gICAgaHRtbF9pZCA9ICcnO1xyXG4gICAgc2VhcmNoQnV0dG9uRWRpdGFibGUgPSB0cnVlO1xyXG4gICAgaXNTZWFyY2ggPSBmYWxzZTtcclxuICAgIGlzVmFsaWQgPSBmYWxzZTtcclxuICAgIG9wdGlvbkNoYW5nZWRTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHRpbWVyID0gbnVsbDtcclxuICAgIGF1dG9jb21wbGV0ZSA9IGZhbHNlO1xyXG4gICAgb3B0aW9uczogc3RyaW5nW10gPSBbXTtcclxuICAgIGZpcnN0RmlsdGVyZWRPcHRpb25zID0gW107XHJcbiAgICBvcHRpb25DaGFuZ2VkID0gbmV3IFN1YmplY3Q8YW55PigpO1xyXG4gICAgb3Blbk9wdGlvbnMgOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNlYXJjaFN1YmplY3QgPSBuZXcgU3ViamVjdDxzdHJpbmc+KCk7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgdXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgYXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2csIHNuYWNrQmFyLCBodHRwLCBjZWVBcGlTZXJ2aWNlLCByb3V0ZXIpO1xyXG4gICAgICAgIHRoaXMud2ZlRW5jcnlwdGlvbiA9IG5ldyBXZmVFbmNyeXB0aW9uVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbktleVV0aWwgPSBuZXcgU2Vzc2lvbktleVV0aWwoKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG5cclxuICAgICAgICB0aGlzLnNlYXJjaFN1YmplY3QucGlwZShcclxuICAgICAgICAgICAgZGVib3VuY2VUaW1lKDgwMCksXHJcbiAgICAgICAgICAgIGRpc3RpbmN0VW50aWxDaGFuZ2VkKCkgICAvLyBPbmx5IHRyaWdnZXIgaWYgdGhlIHZhbHVlIGNoYW5nZXNcclxuICAgICAgICApLnN1YnNjcmliZSgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbktleSh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuc3RlcElkLCB0aGlzLmZpZWxkRGF0YSwgdGhpcy5rZWVwU3RhdGUsIHRoaXMucm93RGF0YSk7XHJcbiAgICAgICAgdGhpcy5kZXBlbmRlbmN5SGFuZGxlcignb25Mb2FkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7IC8vIHVuc3Vic2NyaWJlIHRoZSBldmVudCBvbiBkZXN0cm95XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7IC8vIHVuc3Vic2NyaWJlIHRoZSBldmVudCBvbiBkZXN0cm95XHJcbiAgICB9XHJcblxyXG4gICAgdW5zdWJzY3JpYmUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMub3B0aW9uQ2hhbmdlZFN1YnNjcmlwdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLm9wdGlvbkNoYW5nZWRTdWJzY3JpcHRpb24udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgLy8gICAvLyBjb25zb2xlLmxvZyh0aGlzLnR4dFZhbC5uYXRpdmVFbGVtZW50KTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBwcml2YXRlIF9maWx0ZXIodmFsdWU6IHN0cmluZyk6IHN0cmluZ1tdIHtcclxuXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgb3B0aW9ucyBmZXRjaGVkIGZyb20gRXh0ZXJuYWxBUElcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KFwiZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZVwiKSAmJiAhdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KFwiZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZWZpbHRlclwiKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5vcHRpb25zO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiB0aGlzLm9wdGlvbnM7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbHRlclZhbHVlID0gdHlwZW9mIHZhbHVlID09IFwic3RyaW5nXCIgPyB2YWx1ZS50b0xvd2VyQ2FzZSgpIDogdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMuZmlsdGVyKG9wdGlvbiA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIHR5cGVvZiAob3B0aW9uKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBpZiBkaXNwbGF5IGtleSBuYW1lIGlzIGFkZGVkIGFzIGFuIGFkZGl0aW9uYWwgcGFyYW10ZXJcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGlzcGxheSBLZXkgTmFtZSddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBTdHJpbmcob3B0aW9uW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGlzcGxheSBLZXkgTmFtZSddXSkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlclZhbHVlKSAhPT0gLTE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRGlzcGxheSBrZXkgTmFtZSBpcyByZXF1aXJlZCBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlcmApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXJWYWx1ZSkgIT09IC0xO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRm9yIHVuaXF1ZSBodG1sIGlkXHJcbiAgICAgICAgdGhpcy5odG1sX2lkID0gdGhpcy5maWVsZERhdGEuaHRtbF9pZDtcclxuICAgICAgICAvLyBFTkRcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmZpcnN0RmlsdGVyZWRPcHRpb25zID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJBdXRvQ29tcGxldGVUZXh0XCJdICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkF1dG9Db21wbGV0ZVRleHRcIl0gPT0gXCJPRkZcIikge1xyXG4gICAgICAgICAgICB0aGlzLmF1dG9jb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnJvd0RhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdEZpbHRlcmVkT3B0aW9ucyA9IHRoaXMucm93RGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5yb3dEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja09wdGlvbnMoKTsgLy8gY2hlY2sgaWYgb3B0aW9ucyBhcmUgdGhlcmVcclxuICAgICAgICAvL2ZvciBWYWxpZGF0ZSBBTkQgTWFuZGF0b3J5IGVycm9yXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdERhdGEgJiYgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVt0aGlzLmZpZWxkRGF0YS5odG1sX2lkXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZmllbGREYXRhLmh0bWxfaWQpLmZvY3VzKCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGNoZWNrcyBmb3Igb3B0aW9ucyBpZiBwcmVzZW50XHJcbiAgICAvLyB0cmlnZ2VyIHByZXNlbnQgZXZlbnQgaWYgbm90IHRoZW4gdHJpZ2dlclxyXG4gICAgLy8gbm90IHByZXNlbnQgZXZlbnRcclxuICAgIGNoZWNrT3B0aW9ucygpIHtcclxuICAgICAgICB0aGlzLm9wdGlvbkNoYW5nZWRTdWJzY3JpcHRpb24gPSB0aGlzLm9wdGlvbkNoYW5nZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdEYXRhIEZvdW5kJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uS2V5VXAnLCB1bmRlZmluZWQsIHRydWUsIGZvdW5kLCAnT25GaWx0ZXInKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRm9jdXMoKSB7XHJcbiAgICAgICAgdGhpcy5vcGVuT3B0aW9ucyA9IHRydWU7XHJcbiAgICAgICAgLy8gdGhpcy4kZW1pdEtleURvd24gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEtleURvd24uc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy53ZmVFbmNyeXB0aW9uLmdldEVuY3J5cHRlZERhdGEodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydFbmNyeXB0aW9uVHlwZSddLCB0aGlzLmZpZWxkVmFsdWUpKTtcclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvbkNoYW5nZShldmVudDogYW55KSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTZXNzaW9uRGF0YShuZXdWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25LZXlVcChldmVudDogYW55LCB0eHRGaWVsZDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gRW1pdCB0aGUgdmFsdWUgdG8gdGhlIHNlYXJjaFN1YmplY3QgdG8gdHJpZ2dlciBkZWJvdW5jZSBsb2dpY1xyXG4gICAgICAgIHRoaXMuc2VhcmNoU3ViamVjdC5uZXh0KHR4dEZpZWxkLnZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbktleSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy50ZXh0RmllbGQudmFsaWQ7XHJcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudGltZXIpO1xyXG4gICAgICAgIC8vIGlmIGZpcnN0IGZpbHRlcmVkIG9wdGlvbnMgaXMgcHJlc2VudCB0aGVuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIHRoZSBmaXJzdCBmaWx0ZXJlZCBvcHRpb25cclxuICAgICAgICBpZiAodGhpcy5maXJzdEZpbHRlcmVkT3B0aW9ucykge1xyXG4gICAgICAgICAgICAvL3RoaXMuZmlyc3RGaWx0ZXJlZE9wdGlvbnMgPSB0aGlzLl9maWx0ZXIodmFsdWUudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpcnN0RmlsdGVyZWRPcHRpb25zID0gdGhpcy5fZmlsdGVyKHZhbHVlKTtcclxuICAgICAgICAgICAgdGhpcy5vcHRpb25DaGFuZ2VkLm5leHQodGhpcy5maXJzdEZpbHRlcmVkT3B0aW9ucyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMub3Blbk9wdGlvbnMgPSB2YWx1ZS5tb2RlbC5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmlyc3RGaWx0ZXJlZE9wdGlvbnMpO1xyXG4gICAgICAgIC8vIHRoaXMudXBkYXRlRmllbGREYXRhKHZhbHVlLnZhbHVlKTtcclxuICAgICAgICB0aGlzLnRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ29ubHlGcm9tRHJvcGRvd24nXSB8fCAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydvbmx5RnJvbURyb3Bkb3duJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydvbmx5RnJvbURyb3Bkb3duJ10gIT0gJ3RydWUnKSl7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh2YWx1ZSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uS2V5VXAnKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIGxldCByZXNEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgIGlmICh0aGlzLnJvd0RhdGE/LnJlc3BvbnNlX2FwaV9rZXkgJiYgdGhpcy5yb3dEYXRhPy5yZXNwb25zZV9hcGlfa2V5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc0RhdGEgPSBkYXRhLmhhc093blByb3BlcnR5KHRoaXMucm93RGF0YS5yZXNwb25zZV9hcGlfa2V5WzFdKSA/IGRhdGFbdGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXlbMV1dIDogbnVsbFxyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlc0RhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzRGF0YSkgJiYgdGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gcmVzRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IHJlc0RhdGE7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0RmlsdGVyZWRPcHRpb25zID0gdGhpcy5fZmlsdGVyKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSByZXNEYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZm9yIG11bHRpcGxlIGFwaSBrZXlzIHRoZSB2YWx1ZSB0aGF0IG5lZWRzIHRvIGJlIHNldCB3aWxsIGNvbWVcclxuICAgICAgICAvLyBmcm9tIGFkZGl0aW9uYWxQYXJhbWV0ZXIgd2l0aCB0eXBlIGV4dGVybmFsQXBpT3B0aW9uVmFsdWVcclxuICAgICAgICBpZih0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyLnBhcmFtZXRlcl90eXBlID09PSAnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbEFwaU9wdGlvblZhbHVlID0gdGhpcy5nZXRFeHRlcm5hbEFwaU9wdGlvblZhbHVlKHBhcmFtZXRlci52YWx1ZSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsQXBpT3B0aW9uVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IGV4dGVybmFsQXBpT3B0aW9uVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnMgPSBleHRlcm5hbEFwaU9wdGlvblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maXJzdEZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuX2ZpbHRlcih0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25DaGFuZ2VkLm5leHQodGhpcy5maXJzdEZpbHRlcmVkT3B0aW9ucyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgV2VudCBXcm9uZyBpbiBQaWNrZXIgISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbXB0eVNlc3Npb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9IFtdO1xyXG4gICAgICAgIGlmIChnZXRfZGF0YS51bmlxdWVfaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLnVuaXF1ZV9pZHM7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmFwcERhdGEuaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuZmllbGREYXRhLmFwaV9rZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gWy4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKV07XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMoZWxtKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyBVcGRhdGVcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdkZWZhdWx0X3ZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVzZXR0aW5nIHRoZSBmb3JtIGZpZWxkIGRvZXMgbm90IHdvcmsgYmVjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gb25jZSBpdCBnZXRzIHJlc2V0IGlmIGl0IGlzIG5vdCB0b3VjaGVkIGFnYWluIHRoZW4gdGhlIGZpZWxkIHdvbid0IGdldCBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgZm9ybSBnZXRzIHN1Ym1pdHRlZCBhbmQgZXJyb3JzIHdvbid0IHNob3cgdXBcclxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZSBmaWVsZCBhcyB1blRvdWNoZWQsIFByaXN0aW5lICwgdXBkYXRlIHZhbHVlIGFuIHZhbGlkaXR5IGFuZCBzaG93RXJyb3JPbk5leHQgdG8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50ZXh0RmllbGQuY29udHJvbC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gZnJvbSBhZGRpdGlvbmFsUGFyYW1ldGVyIHdpdGggdHlwZSBleHRlcm5hbEFwaU9wdGlvblZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmlsdGVyKChwYXJhbWV0ZXIsaW5kZXgpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocGFyYW1ldGVyLnBhcmFtZXRlcl90eXBlID09PSAnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZScpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcGFyYW1ldGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5maXJzdEZpbHRlcmVkT3B0aW9ucyA9IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnRleHRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLnJlc2V0KHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRleHRGaWVsZC5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMub3B0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdEZpbHRlcmVkT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGdldF9kYXRhKS5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXModW5pcXVlX2lkX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoZ2V0X2RhdGFbdW5pcXVlX2lkX3ZhbHVlXSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFVwZGF0ZWRWYWx1ZSgpIHtcclxuICAgICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vcGVuT3B0aW9ucyA9IGZhbHNlO1xyXG4gICAgICAgICB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlTmV3KHNlbGVjdGVkID0gbnVsbCwgdmFsdWU6IGFueSl7XHJcbiAgICAgICAgaWYodmFsdWUgJiYgdmFsdWVbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEaXNwbGF5IEtleSBOYW1lJ11dKXtcclxuICAgICAgICAgICAgdmFsdWUgPSB7a2V5OiB2YWx1ZVt0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1ByaW1hcnlLZXlOYW1lJ11dLCB2YWx1ZTogdmFsdWVbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEaXNwbGF5IEtleSBOYW1lJ11dfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdldFVwZGF0ZWRWYWx1ZShzZWxlY3RlZCwgdmFsdWUpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gZnVuY3Rpb24gc2V0cyB0aGUgdmFsdWUgaW4gdGhlIGZpZWxkIGZyb20gdGhlIGF1dG8gY29tcGxldGVcclxuICAgIC8vIGFuZCBjcmVhdGVzIGEgbmV3IGZpZWxkIGluIHRoZSBhcHAgZGF0YSBzdG9yZSBpZiB0aGUgZmllbGRcclxuICAgIC8vIGlzIG5vdCBwcmVzZW50IGFuZCBoYXMgYWRkaXRpb25hbCBwYXJhbWV0ZXIgRGlzcGxheSBLZXkgTmFtZVxyXG4gICAgLy8gYW5kIFByaW1hcnkgS2V5IEZpZWxkIElkXHJcbiAgICBnZXRVcGRhdGVkVmFsdWUoc2VsZWN0ZWQgPSBudWxsLCB2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5vbkRpcnR5KCk7XHJcbiAgICAgICAgaWYgKHNlbGVjdGVkKSB7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHR5cGUgb2YgdmFsdWUgaXMgYW4gb2JqZWN0XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgKHZhbHVlKSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBub3QgbnVsbFxyXG4gICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGFkZGl0aW9uYWwgcGFyYW10ZXIgaGFzIFByaW1hcnlLZXlOYW1lIGFuZCBQcmltYXJ5IEtleSBGaWVsZCBJZFxyXG4gICAgICAgICAgICAgICAgLy8gdGhlbiBhZGQgYSBuZXcgaGlkZGVuIGZpZWxkIG5lZWRzIHRvIGJlIGFkZGVkIG9yIHVwZGF0ZWRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1ByaW1hcnlLZXlOYW1lJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydQcmltYXJ5IEtleSBGaWVsZCBJZCddICYmIHZhbHVlLmtleSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBwcmltYXJ5RmllbGREYXRhID0gdGhpcy5hcHBEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlGaWVsZERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLnByaW1hcnlGaWVsZERhdGEsIC4uLntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1ByaW1hcnkgS2V5IEZpZWxkIElkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWUua2V5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmlzU2luZ2xlQXBpS2V5ID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydQcmltYXJ5S2V5TmFtZSddIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFwaUtleTogdGhpcy5pc1NpbmdsZUFwaUtleSA/IFtdIDogW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJpbWFyeUtleU5hbWUnXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5zZXRBcHBEYXRhKHByaW1hcnlGaWVsZERhdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdHJpbmcgdXBkYXRlIGZpZWxkIHZhbHVlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ29uU2VsZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub3Blbk9wdGlvbnMgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBmdW5jdGlvbiByZXR1cm5zIHRoZSBvcHRpb24gdmFsdWVcclxuICAgIGdldE9wdGlvblRleHQob3B0aW9uKSB7XHJcbiAgICAgICAgLy8gYXMgdGhlIG9wdGlvbiB3aWxsIGNvbWUgaW4gYW4gb2JqZWN0IHBhdHRlcm5cclxuICAgICAgICAvLyBhbmQgdGhlIG9iamVjdCB3b3VsZCBiZSB7IGtleTogPHNvbWUgdmFsdWU+LCB2YWx1ZTogPHNvbWUgdmFsdWU+IH1cclxuICAgICAgICBsZXQgdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAob3B0aW9uKSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKG9wdGlvbikgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IG9wdGlvbi52YWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGJlY2F1c2Ugb24gaW5pdCB0aGUgdmFsdWUgY29tZXMgYXMgYSBzdHJpbmdcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gb3B0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG4gICAgLy8gZnVuY3Rpb24gcmV0dXJucyB0aGUgdmFsdWUgd2hldGhlciB0byBzdG9wIGNvcHkgb3IgcGFzdGUgZXZlbnQgKHJldHVybiBmYWxzZSBtZWFucyBwYXVzZSlcclxuICAgIC8vIHsgXCJwYXJhbWV0ZXJfdHlwZVwiOiBcIk92ZXJyaWRlXCIsIFwidmFsdWVcIjpcIkNPUFl8fFBBU1RFfHxDVVRcIn0gd2hpY2hldmVyIGV2ZW50IHlvdSB3YW50IHRvIHN0b3BcclxuICAgIG9uT3ZlcnJpZGVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIk92ZXJyaWRlXCJdKSB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIk92ZXJyaWRlXCJdLnNwbGl0KCd8fCcpLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09IGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBkYXRhWyd2YWx1ZXMnXS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVtkYXRhWyd1bmlxdWVJZHMnXS5pbmRleE9mKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCldIDpcclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVswXTtcclxuICAgICAgICAgICAgICAgIC8vIG9mIHRyaWdnZXJVcGRhdGUgaXMgdHJ1ZSB0aGVuIHVwZGF0ZSB0aGUgZmllbGQgdmFsdWUgb3IgdXBkYXRlIHZhbHVlIGFuZCBlbWl0IGNvbmRpdGlvbnMgZXZlbnRcclxuICAgICAgICAgICAgICAgIHRoaXNbZGF0YVsndHJpZ2dlclVwZGF0ZSddID8gJ3VwZGF0ZUZpZWxkRW50aXR5JyA6ICd1cGRhdGVGaWVsZERhdGEnXSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlSGlzdG9yeShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMYW5ndWFnZShkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWF1dG9jb21wbGV0ZTsgZWxzZSBhdXRvY29tcGxldGVUZXh0ZmllbGRcIj5cclxuXHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGV4dEZpZWxkRGF0YVwiPjwvbmctY29udGFpbmVyPlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cdDxuZy10ZW1wbGF0ZSAjYXV0b2NvbXBsZXRlVGV4dGZpZWxkPlxyXG5cdFx0PGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCI+XHJcblx0XHRcdDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIC8+XHJcblx0XHRcdDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwidGV4dEZpZWxkRGF0YVwiPjwvbmctY29udGFpbmVyPlxyXG5cdFx0PC9mb3JtPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcblx0PG5nLXRlbXBsYXRlICN0ZXh0RmllbGREYXRhPlxyXG5cdFx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG5cdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuXHRcdFx0XHRcdFx0W2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDxzcGFuICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBjbGFzcz1cIm1hbmRldG9yeS1tYXJrXCI+ICo8L3NwYW4+XHJcblx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcFwiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwIFwiPmk8L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGRyb3Bkb3duLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdDxpbnB1dCAocGFzdGUpPVwib25PdmVycmlkZUhhbmRsZXIoJGV2ZW50KVwiIChjb3B5KT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIiAoY3V0KT1cIm9uT3ZlcnJpZGVIYW5kbGVyKCRldmVudClcIlxyXG5cdFx0XHRcdFx0dHlwZT1cInRleHRcIiBbdmFsdWVdPVwiZmllbGRWYWx1ZVwiIChmb2N1cyk9XCJvbkZvY3VzKClcIiBbKG5nTW9kZWwpXT1cImZpZWxkVmFsdWVcIiAoa2V5dXApPVwib25LZXlVcCgkZXZlbnQsIHRleHRGaWVsZClcIlxyXG5cdFx0XHRcdFx0KGJsdXIpPVwic2V0VXBkYXRlZFZhbHVlKClcIiAjdGV4dEZpZWxkPVwibmdNb2RlbFwiIFtyZXF1aXJlZF09XCJpc01hbmRhdG9yeVwiXHJcblx0XHRcdFx0XHRbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBwbGFjZWhvbGRlcj1cInt7ZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHR9fVwiXHJcblx0XHRcdFx0XHRjbGFzcz1cImZvcm0tY29udHJvbCB7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX0gIHt7ICF2YWxpZCB8fCAodGV4dEZpZWxkLmludmFsaWQgJiYgaXNNYW5kYXRvcnkgJiYgKHRleHRGaWVsZC5kaXJ0eSB8fCB0ZXh0RmllbGQudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX1cIlxyXG5cdFx0XHRcdFx0W2F0dHIuaWRdPVwiaHRtbF9pZFwiXHJcblx0XHRcdFx0XHRtYXhsZW5ndGg9XCJ7e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQgPT0gJzAnID8gJzEwMDAnOiBmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX1cIlxyXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWwgXCIgW3BhdHRlcm5dPVwidmFsaWRhdGlvblJlZ2V4XCIgW25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuICAgICAgICAgICAgJ2ZvbnQtc3R5bGUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zdHlsZSxcclxuICAgICAgICAgICAgJ2ZvbnQtY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvcixcclxuICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5ib3JkZXJfY29sb3IsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfaGVpZ2h0LFxyXG4gICAgICAgICAgICAnd2lkdGgnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3JcclxuICAgICAgICAgIH1cIj5cclxuXHRcdFx0XHQ8IS0tIDxtYXQtYXV0b2NvbXBsZXRlICNhdXRvPVwibWF0QXV0b2NvbXBsZXRlXCIgW2Rpc3BsYXlXaXRoXT1cImdldE9wdGlvblRleHRcIlxyXG5cdFx0XHRcdFx0KG9wdGlvblNlbGVjdGVkKT1cImdldFVwZGF0ZWRWYWx1ZSh0cnVlLCAkZXZlbnQub3B0aW9uLnZhbHVlKVwiPlxyXG5cdFx0XHRcdFx0PG1hdC1vcHRpb24gKm5nRm9yPVwibGV0IG9wdGlvbiBvZiBmaXJzdEZpbHRlcmVkT3B0aW9uc1wiXHJcblx0XHRcdFx0XHRcdFt2YWx1ZV09XCJ7IGtleTogYWRkaXRpb25hbFBhcmFtZXRlclsnUHJpbWFyeUtleU5hbWUnXSA/IG9wdGlvblthZGRpdGlvbmFsUGFyYW1ldGVyWydQcmltYXJ5S2V5TmFtZSddXSA6IG51bGwgLCB2YWx1ZTogYWRkaXRpb25hbFBhcmFtZXRlclsnRGlzcGxheSBLZXkgTmFtZSddID8gb3B0aW9uW2FkZGl0aW9uYWxQYXJhbWV0ZXJbJ0Rpc3BsYXkgS2V5IE5hbWUnXV06IG9wdGlvbiB9XCI+XHJcblx0XHRcdFx0XHRcdHt7YWRkaXRpb25hbFBhcmFtZXRlcltcIkRpc3BsYXkgS2V5IE5hbWVcIl0gPyBvcHRpb25bYWRkaXRpb25hbFBhcmFtZXRlcltcIkRpc3BsYXkgS2V5IE5hbWVcIl1dOiBvcHRpb259fVxyXG5cdFx0XHRcdFx0PC9tYXQtb3B0aW9uPlxyXG5cdFx0XHRcdDwvbWF0LWF1dG9jb21wbGV0ZT4gLS0+XHJcblx0XHRcdFx0PHVsICpuZ0lmPVwib3Blbk9wdGlvbnMgJiYgZmlyc3RGaWx0ZXJlZE9wdGlvbnMubGVuZ3RoXCIgY2xhc3M9XCJkcm9wZG93blwiID5cclxuXHRcdFx0XHRcdDxsaSAqbmdGb3I9XCJsZXQgb3B0aW9uIG9mIGZpcnN0RmlsdGVyZWRPcHRpb25zXCIgKHBvaW50ZXJkb3duKT1cInNldFZhbHVlTmV3KHRydWUsIG9wdGlvbilcIiBjbGFzcz1cImRyb3Bkb3duLWl0ZW1cIlxyXG5cdFx0XHRcdFx0XHRbdmFsdWVdPVwieyBrZXk6IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1ByaW1hcnlLZXlOYW1lJ10gPyBvcHRpb25bYWRkaXRpb25hbFBhcmFtZXRlclsnUHJpbWFyeUtleU5hbWUnXV0gOiBudWxsICwgdmFsdWU6IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0Rpc3BsYXkgS2V5IE5hbWUnXSA/IG9wdGlvblthZGRpdGlvbmFsUGFyYW1ldGVyWydEaXNwbGF5IEtleSBOYW1lJ11dOiBvcHRpb24gfVwiPlxyXG5cdFx0XHRcdFx0XHR7e2FkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEaXNwbGF5IEtleSBOYW1lXCJdID8gb3B0aW9uW2FkZGl0aW9uYWxQYXJhbWV0ZXJbXCJEaXNwbGF5IEtleSBOYW1lXCJdXTogb3B0aW9ufX1cclxuXHRcdFx0XHRcdDwvbGk+XHJcblx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZGlzcGxheV9jaGFyYWN0ZXJfY291bnRcIiAqbmdJZj1cImNoYXJhY3RlckNvdW50LmRpc3BsYXlcIiBbbmdTd2l0Y2hdPVwiY2hhcmFjdGVyQ291bnQudHlwZVwiPlxyXG5cdFx0XHRcdFx0PHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidDb3VudCdcIlxyXG5cdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA6XHJcblx0XHRcdFx0XHRcdCcnfX17e2ZpZWxkVmFsdWUubGVuZ3RofX0ve3tmaWVsZERhdGEuZmllbGRfY2hhcmFjdGVyX2xpbWl0fX17e2NoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0XHJcblx0XHRcdFx0XHRcdD8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgOiAnJ319XHJcblx0XHRcdFx0XHQ8L3NwYW4+XHJcblx0XHRcdFx0XHQ8c3BhbiAqbmdTd2l0Y2hDYXNlPVwiJ1JlbWFpbmluZydcIlxyXG5cdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA6XHJcblx0XHRcdFx0XHRcdCcnfX17e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQgLVxyXG5cdFx0XHRcdFx0XHRmaWVsZFZhbHVlLmxlbmd0aH19L3t7ZmllbGREYXRhLmZpZWxkX2NoYXJhY3Rlcl9saW1pdH19e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA/XHJcblx0XHRcdFx0XHRcdGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdFx0PHNwYW4gKm5nU3dpdGNoQ2FzZT1cIidUb3RhbCdcIlxyXG5cdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA6XHJcblx0XHRcdFx0XHRcdCcnfX17e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXR9fXt7Y2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5tZXNzYWdlX3RleHQgP1xyXG5cdFx0XHRcdFx0XHRjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA6ICcnfX1cclxuXHRcdFx0XHRcdDwvc3Bhbj5cclxuXHRcdFx0XHRcdDxzcGFuICpuZ1N3aXRjaENhc2U9XCInQ2hhclJlbWFpbmluZydcIlxyXG5cdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0LmNvbG9yID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodC5jb2xvciA6IGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdC5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLmxlZnQubWVzc2FnZV90ZXh0ID8gY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5sZWZ0Lm1lc3NhZ2VfdGV4dCA6XHJcblx0XHRcdFx0XHRcdCcnfX17e2ZpZWxkRGF0YS5maWVsZF9jaGFyYWN0ZXJfbGltaXQgLSBmaWVsZFZhbHVlLmxlbmd0aH19e3tjaGFyYWN0ZXJDb3VudE1lc3NhZ2VEYXRhLnJpZ2h0Lm1lc3NhZ2VfdGV4dCA/XHJcblx0XHRcdFx0XHRcdGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEucmlnaHQubWVzc2FnZV90ZXh0IDogJyd9fVxyXG5cdFx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJtdWx0aXBsZUVycm9yTWVzc2FnZTsgZWxzZSBzaW5nbGVFcnJvck1lc3NhZ2VcIj5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcblx0XHRcdFx0XHRcdFx0Km5nSWY9XCJ0ZXh0RmllbGQuaW52YWxpZCAmJiAodGV4dEZpZWxkLmRpcnR5IHx8IHRleHRGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCApXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzLnJlcXVpcmVkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCAqbmdJZj1cImlzTWFuZGF0b3J5ICYmIG1lc3NhZ2UudHlwZSA9PSAnTWFuZGF0b3J5J1wiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHR7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiAqbmdJZj1cInRleHRGaWVsZD8uZXJyb3JzLm1pbmxlbmd0aFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgKm5nSWY9XCJtZXNzYWdlLnR5cGUgPT0gJ21pbmxlbmd0aCdcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJ0ZXh0RmllbGQ/LmVycm9ycy5wYXR0ZXJuXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnUmVnZXgnXCIgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG5cdFx0XHRcdFx0XHQqbmdJZj1cInRleHRGaWVsZC5pbnZhbGlkICYmICh0ZXh0RmllbGQuZGlydHkgfHwgdGV4dEZpZWxkLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KVwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwidGV4dEZpZWxkPy5lcnJvcnMucmVxdWlyZWQgfHwgdGV4dEZpZWxkPy5lcnJvcnMubWlubGVuZ3RoIHx8IHRleHRGaWVsZD8uZXJyb3JzLnBhdHRlcm5cIj5cclxuXHRcdFx0XHRcdFx0XHQ8cCAqbmdJZj1cImlzTWFuZGF0b3J5XCIgW25nU3R5bGVdPVwieydjb2xvcic6IGVycm9yTWVzc2FnZURhdGEuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7e2Vycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIj5cclxuXHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHQ8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPCEtLSAgIFtmb3JtQ29udHJvbF09XCJteUNvbnRyb2xcIiAtLT5cclxuIl19