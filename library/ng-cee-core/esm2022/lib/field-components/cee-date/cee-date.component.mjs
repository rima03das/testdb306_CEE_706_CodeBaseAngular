import { Component, Input, ViewChild, Inject, forwardRef } from '@angular/core';
import { DOCUMENT, NgClass, NgStyle, NgSwitch, NgTemplateOutlet } from '@angular/common';
import { BaseView } from '../cee-base-class';
// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { NG_VALUE_ACCESSOR, FormsModule } from '@angular/forms';
import * as moment from 'moment';
// import { conformToMask } from 'angular2-text-mask';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgxMatDatetimePickerModule } from '@angular-material-components/datetime-picker';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomTooltipDirective } from '../../directives/app.directive';
import { CommonModule } from '@angular/common';
import { provideNgxMask, NgxMaskDirective } from 'ngx-mask';
import { MatInputModule } from '@angular/material/input';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import dayjs from "dayjs";
import { NgxDaterangepickerBootstrapModule, NgxDaterangepickerLocaleService, } from 'ngx-daterangepicker-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../services/user-data-handler.service";
import * as i3 from "../../services/shared-events-service.service";
import * as i4 from "../../services/internal-cee-emitter-service.service";
import * as i5 from "../../models/app-data/app-data.service";
import * as i6 from "../../models/api-data/api-data.service";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "@angular/material/dialog";
import * as i9 from "@angular/material/snack-bar";
import * as i10 from "@angular/common/http";
import * as i11 from "ngx-daterangepicker-bootstrap";
import * as i12 from "@angular/forms";
import * as i13 from "@angular/material/form-field";
import * as i14 from "@angular-material-components/datetime-picker";
import * as i15 from "@angular/material/icon";
import * as i16 from "@angular/material/datepicker";
import * as i17 from "@angular/material/input";
import * as i18 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["datePicker"];
const _c1 = a0 => ({ "color": a0 });
const _c2 = a0 => ({ "input-group": a0 });
const _c3 = a0 => ({ datePicker: a0 });
const _c4 = a0 => ({ uiType: "with_time", picker: a0 });
const _c5 = a0 => ({ uiType: "default", picker: a0 });
function CeeDateComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementContainer(1, 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldLayout_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", fieldLayout_r1);
} }
function CeeDateComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "form", 19);
    i0.ɵɵelement(1, "input", 20);
    i0.ɵɵelementContainer(2, 18);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldLayout_r1 = i0.ɵɵreference(5);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", fieldLayout_r1);
} }
function CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 34);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_label_1_Template, 2, 1, "label", 31)(2, CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_label_2_Template, 1, 1, "label", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeDateComponent_div_0_ng_template_4_div_1_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeDateComponent_div_0_ng_template_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_div_1_ng_container_1_Template, 3, 2, "ng-container", 28)(2, CeeDateComponent_div_0_ng_template_4_div_1_span_2_Template, 2, 0, "span", 29)(3, CeeDateComponent_div_0_ng_template_4_div_1_button_3_Template, 2, 2, "button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "input", 42, 5);
    i0.ɵɵlistener("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r3); const dayField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("day", dayField_r4, ctx_r1.dayBoxState)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValueDay, $event) || (ctx_r1.inputValueDay = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template_input_focus_1_listener() { i0.ɵɵrestoreView(_r3); const dayField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setState(dayField_r4, ctx_r1.dayBoxState)); })("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r3); const dayField_r4 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("day", dayField_r4, ctx_r1.dayBoxState)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const dayField_r4 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("form-control day-field ", ctx_r1.dayFormatError || ctx_r1.dayError || !ctx_r1.isValid || !ctx_r1.inputValueDay && ctx_r1.isMandatory && (dayField_r4.dirty || dayField_r4.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValueDay);
    i0.ɵɵproperty("required", ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "input", 43, 6);
    i0.ɵɵlistener("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r5); const monthField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("month", monthField_r6, ctx_r1.monthBoxState)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValueMonth, $event) || (ctx_r1.inputValueMonth = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template_input_focus_1_listener() { i0.ɵɵrestoreView(_r5); const monthField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setState(monthField_r6, ctx_r1.monthBoxState)); })("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r5); const monthField_r6 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("month", monthField_r6, ctx_r1.monthBoxState)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const monthField_r6 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("form-control month-field ", ctx_r1.monthFormatError || ctx_r1.monthError || !ctx_r1.isValid || !ctx_r1.inputValueMonth && ctx_r1.isMandatory && (monthField_r6.dirty || monthField_r6.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValueMonth);
    i0.ɵɵproperty("required", ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "input", 44, 7);
    i0.ɵɵlistener("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r7); const yearField_r8 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("year", yearField_r8, ctx_r1.yearBoxState)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValueYear, $event) || (ctx_r1.inputValueYear = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template_input_focus_1_listener() { i0.ɵɵrestoreView(_r7); const yearField_r8 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setState(yearField_r8, ctx_r1.yearBoxState)); })("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template_input_blur_1_listener() { i0.ɵɵrestoreView(_r7); const yearField_r8 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.boxKeyUp("year", yearField_r8, ctx_r1.yearBoxState)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const yearField_r8 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("form-control year-field ", ctx_r1.yearFormatError || ctx_r1.yearError || !ctx_r1.isValid || !ctx_r1.inputValueYear && ctx_r1.isMandatory && (yearField_r8.dirty || yearField_r8.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValueYear);
    i0.ɵɵproperty("required", ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r9.code).message_text, " ");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_div_1_Template, 2, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.inputValueDay && ctx_r1.isMandatory && (ctx_r1.dayBoxState.dirty || ctx_r1.dayBoxState.touched || ctx_r1.showErrorOnNext) || !ctx_r1.inputValueMonth && ctx_r1.isMandatory && (ctx_r1.monthBoxState.dirty || ctx_r1.monthBoxState.touched || ctx_r1.showErrorOnNext) || !ctx_r1.inputValueYear && ctx_r1.isMandatory && (ctx_r1.yearBoxState.dirty || ctx_r1.yearBoxState.touched || ctx_r1.showErrorOnNext));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_ng_container_1_Template, 2, 1, "ng-container", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Please enter numbers only.");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Entered day must be in ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "DD");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " format. ");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Entered month must be in ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "MM");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " format. ");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1, "Entered year must be in ");
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, "YYYY");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, " format. ");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_p_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" Please enter a valid ", ctx_r1.fieldData.field_label, ". ");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵtemplate(2, CeeDateComponent_div_0_ng_template_4_ng_container_4_div_2_Template, 3, 6, "div", 38)(3, CeeDateComponent_div_0_ng_template_4_ng_container_4_div_3_Template, 3, 6, "div", 38)(4, CeeDateComponent_div_0_ng_template_4_ng_container_4_div_4_Template, 3, 6, "div", 38);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeDateComponent_div_0_ng_template_4_ng_container_4_ng_container_5_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementStart(6, "div", 39)(7, "div");
    i0.ɵɵtemplate(8, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_8_Template, 2, 0, "p", 40)(9, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_9_Template, 5, 0, "p", 40)(10, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_10_Template, 5, 0, "p", 40)(11, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_11_Template, 5, 0, "p", 40)(12, CeeDateComponent_div_0_ng_template_4_ng_container_4_p_12_Template, 2, 1, "p", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.entryFields.includes("day"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.entryFields.includes("month"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.entryFields.includes("year"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.numberError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dayFormatError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.monthFormatError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.yearFormatError);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.inputValue && !ctx_r1.isValid || ctx_r1.dayError || ctx_r1.monthError || ctx_r1.yearError);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const picker_r11 = i0.ɵɵreference(12);
    i0.ɵɵnextContext(3);
    const maskDateInputs_r12 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", maskDateInputs_r12)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c4, picker_r11));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 59);
    i0.ɵɵlistener("click", function CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_icon_9_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.clearDate($event)); });
    i0.ɵɵtext(1, " clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1.showCross);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1, "OK");
    i0.ɵɵelementEnd();
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_14_ng_template_0_Template(rf, ctx) { }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_div_0_ng_template_4_ng_container_5_14_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51)(2, "mat-form-field", 52);
    i0.ɵɵtemplate(3, CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_label_3_Template, 2, 1, "mat-label", 28)(4, CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_container_4_Template, 2, 4, "ng-container", 28);
    i0.ɵɵelementStart(5, "input", 53, 8);
    i0.ɵɵlistener("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_blur_5_listener($event) { i0.ɵɵrestoreView(_r10); const dateField_r13 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onBlurDP($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateField_r13, ctx_r1.datePickerState)); })("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_keyup_5_listener($event) { i0.ɵɵrestoreView(_r10); const dateField_r13 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateField_r13, ctx_r1.datePickerState)); })("change", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateInput($event.target.value, true)); })("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_focus_5_listener() { i0.ɵɵrestoreView(_r10); const picker_r11 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && picker_r11.open()); })("click", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_click_5_listener() { i0.ɵɵrestoreView(_r10); const picker_r11 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && picker_r11.open()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 54, 9);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.maskInputValue, $event) || (ctx_r1.maskInputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("dateChange", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_input_dateChange_7_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateChange()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeDateComponent_div_0_ng_template_4_ng_container_5_mat_icon_9_Template, 2, 1, "mat-icon", 55);
    i0.ɵɵelement(10, "mat-datepicker-toggle", 56);
    i0.ɵɵelementStart(11, "ngx-mat-datetime-picker", 57, 10);
    i0.ɵɵlistener("closed", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_ngx_mat_datetime_picker_closed_11_listener() { i0.ɵɵrestoreView(_r10); const dateField_r13 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.setState({ touched: true, dirty: dateField_r13.dirty }, ctx_r1.datePickerState)); })("opened", function CeeDateComponent_div_0_ng_template_4_ng_container_5_Template_ngx_mat_datetime_picker_opened_11_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.toggleModalCssClass()); });
    i0.ɵɵtemplate(13, CeeDateComponent_div_0_ng_template_4_ng_container_5_ng_template_13_Template, 2, 0, "ng-template");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, CeeDateComponent_div_0_ng_template_4_ng_container_5_14_Template, 1, 0, null, 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const datePicker_r15 = i0.ɵɵreference(8);
    const picker_r11 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext(3);
    const errorMassageTemplate_r16 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isFutureDate || ctx_r1.invalidDate || datePicker_r15.hasError("matDatepickerMax") || datePicker_r15.hasError("matDatepickerMin") || datePicker_r15.hasError("matDatepickerParse") || !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(32, _c2, !ctx_r1.is_material));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("floatLabel", !ctx_r1.is_material ? "never" : "auto");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hide);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext");
    i0.ɵɵproperty("ngModel", ctx_r1.shadowValue)("mask", ctx_r1.maskString)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry)("required", ctx_r1.is_material && ctx_r1.isMandatory)("hidden", ctx_r1.hide);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("min", ctx_r1.minDatex)("max", ctx_r1.maxDatex)("ngxMatDatetimePicker", picker_r11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.maskInputValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", picker_r11)("disabled", !ctx_r1.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("enableMeridian", ctx_r1.enableMeridian)("stepHour", ctx_r1.timeConfig.hour)("stepMinute", ctx_r1.timeConfig.minute)("stepSecond", ctx_r1.timeConfig.second);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", errorMassageTemplate_r16)("ngTemplateOutletContext", i0.ɵɵpureFunction1(34, _c3, datePicker_r15));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_6_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 66);
    i0.ɵɵlistener("click", function CeeDateComponent_div_0_ng_template_4_ng_container_6_mat_icon_9_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r23); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.clearDateRange($event)); });
    i0.ɵɵtext(1, " clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1.showCross);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_6_13_ng_template_0_Template(rf, ctx) { }
function CeeDateComponent_div_0_ng_template_4_ng_container_6_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_div_0_ng_template_4_ng_container_6_13_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 60)(2, "mat-date-range-input", 61)(3, "input", 62, 11);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.startDateRangeDisp, $event) || (ctx_r1.startDateRangeDisp = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_blur_3_listener($event) { i0.ɵɵrestoreView(_r17); const dateFieldStart_r18 = i0.ɵɵreference(4); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onBlurDP($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateFieldStart_r18, ctx_r1.datePickerState)); })("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_keyup_3_listener($event) { i0.ɵɵrestoreView(_r17); const dateFieldStart_r18 = i0.ɵɵreference(4); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateFieldStart_r18, ctx_r1.datePickerState)); })("change", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_change_3_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateInput($event.target.value, true)); })("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_focus_3_listener() { i0.ɵɵrestoreView(_r17); const dateRangePicker_r19 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && dateRangePicker_r19.open()); })("click", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_click_3_listener() { i0.ɵɵrestoreView(_r17); const dateRangePicker_r19 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && dateRangePicker_r19.open()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "input", 63, 12);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_ngModelChange_6_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.endDateRangeDisp, $event) || (ctx_r1.endDateRangeDisp = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_blur_6_listener($event) { i0.ɵɵrestoreView(_r17); const dateFieldEnd_r20 = i0.ɵɵreference(7); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onBlurDP($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateFieldEnd_r20, ctx_r1.datePickerState)); })("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r17); const dateFieldEnd_r20 = i0.ɵɵreference(7); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateFieldEnd_r20, ctx_r1.datePickerState)); })("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_focus_6_listener() { i0.ɵɵrestoreView(_r17); const dateRangePicker_r19 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && dateRangePicker_r19.open()); })("click", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_click_6_listener() { i0.ɵɵrestoreView(_r17); const dateRangePicker_r19 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && dateRangePicker_r19.open()); })("dateChange", function CeeDateComponent_div_0_ng_template_4_ng_container_6_Template_input_dateChange_6_listener() { i0.ɵɵrestoreView(_r17); const dateRangeStart_r21 = i0.ɵɵreference(5); const dateRangeEnd_r22 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.dateRangeChange(dateRangeStart_r21, dateRangeEnd_r22)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(9, CeeDateComponent_div_0_ng_template_4_ng_container_6_mat_icon_9_Template, 2, 1, "mat-icon", 64);
    i0.ɵɵelement(10, "mat-datepicker-toggle", 65)(11, "mat-date-range-picker", null, 13);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(13, CeeDateComponent_div_0_ng_template_4_ng_container_6_13_Template, 1, 0, null, 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const dateFieldStart_r18 = i0.ɵɵreference(4);
    const dateFieldEnd_r20 = i0.ɵɵreference(7);
    const dateRangePicker_r19 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext(3);
    const dateRangeErrorMassageTemplate_r24 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isFutureDate || !ctx_r1.isValid || ctx_r1.invalidDate || dateFieldStart_r18.hasError("matDatepickerMax") || dateFieldStart_r18.hasError("matDatepickerMin") || dateFieldStart_r18.hasError("matDatepickerParse") || dateFieldEnd_r20.hasError("matDatepickerMax") || dateFieldEnd_r20.hasError("matDatepickerMin") || dateFieldEnd_r20.hasError("matDatepickerParse") || !ctx_r1.endDateRangeDisp && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid");
    i0.ɵɵadvance();
    i0.ɵɵproperty("min", ctx_r1.minDatex)("max", ctx_r1.maxDatex)("rangePicker", dateRangePicker_r19);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext_start");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.startDateRangeDisp);
    i0.ɵɵproperty("placeholder", ctx_r1.dateRangeStartPlaceholder)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry)("required", ctx_r1.is_material && ctx_r1.isMandatory);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext_end");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.endDateRangeDisp);
    i0.ɵɵproperty("placeholder", ctx_r1.dateRangeEndPlaceholder)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry)("required", ctx_r1.is_material && ctx_r1.isMandatory);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", dateRangePicker_r19);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", dateRangeErrorMassageTemplate_r24)("ngTemplateOutletContext", i0.ɵɵpureFunction1(28, _c3, dateFieldEnd_r20));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "input", 67);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_7_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.selectedRangeCalendarCenter, $event) || (ctx_r1.selectedRangeCalendarCenter = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("datesUpdated", function CeeDateComponent_div_0_ng_template_4_ng_container_7_Template_input_datesUpdated_1_listener($event) { i0.ɵɵrestoreView(_r25); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.datesUpdatedRange($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.selectedRangeCalendarCenter);
    i0.ɵɵproperty("drops", ctx_r1.dropsDown)("opens", ctx_r1.opensLeft)("locale", ctx_r1.localeSet)("ranges", ctx_r1.ranges)("showCustomRangeLabel", true)("showCancel", true)("linkedCalendars", true)("alwaysShowCalendars", true)("showRangeLabelOnInput", false)("keepCalendarOpeningWithRange", false)("closeOnAutoApply", true)("autoApply", false)("isTooltipDate", ctx_r1.isTooltipDate)("isCustomDate", ctx_r1.isCustomDate)("isInvalidDate", ctx_r1.isInvalidDate);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_ng_container_8_ng_container_4_ng_container_1_Template, 1, 0, "ng-container", 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const picker_r27 = i0.ɵɵreference(12);
    i0.ɵɵnextContext(3);
    const maskDateInputs_r12 = i0.ɵɵreference(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", maskDateInputs_r12)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c5, picker_r27));
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_icon_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-icon", 59);
    i0.ɵɵlistener("click", function CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_icon_9_Template_mat_icon_click_0_listener($event) { i0.ɵɵrestoreView(_r29); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.clearDate($event)); });
    i0.ɵɵtext(1, " clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("hidden", !ctx_r1.showCross);
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_13_ng_template_0_Template(rf, ctx) { }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_div_0_ng_template_4_ng_container_8_13_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 51)(2, "mat-form-field", 52);
    i0.ɵɵtemplate(3, CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_label_3_Template, 2, 1, "mat-label", 28)(4, CeeDateComponent_div_0_ng_template_4_ng_container_8_ng_container_4_Template, 2, 4, "ng-container", 28);
    i0.ɵɵelementStart(5, "input", 53, 8);
    i0.ɵɵlistener("blur", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_blur_5_listener($event) { i0.ɵɵrestoreView(_r26); const dateField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onBlurDP($event.target.value); return i0.ɵɵresetView(ctx_r1.onBlurDPSetState($event.target.value, dateField_r28)); })("keyup", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_keyup_5_listener($event) { i0.ɵɵrestoreView(_r26); const dateField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState(dateField_r28, ctx_r1.datePickerState)); })("change", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_change_5_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateInput($event.target.value, true)); })("focus", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_focus_5_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && ctx_r1.setHiddenOverlay()); })("click", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_click_5_listener() { i0.ɵɵrestoreView(_r26); const picker_r27 = i0.ɵɵreference(12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(!ctx_r1.allowManualEntry && picker_r27.open()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 68, 9);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.maskInputValue, $event) || (ctx_r1.maskInputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("dateChange", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_input_dateChange_7_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onDateChange()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeDateComponent_div_0_ng_template_4_ng_container_8_mat_icon_9_Template, 2, 1, "mat-icon", 55);
    i0.ɵɵelement(10, "mat-datepicker-toggle", 56);
    i0.ɵɵelementStart(11, "mat-datepicker", 69, 10);
    i0.ɵɵlistener("closed", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_mat_datepicker_closed_11_listener() { i0.ɵɵrestoreView(_r26); const dateField_r28 = i0.ɵɵreference(6); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onNoDateSelection(); return i0.ɵɵresetView(ctx_r1.setState({ touched: true, dirty: dateField_r28.dirty }, ctx_r1.datePickerState)); })("opened", function CeeDateComponent_div_0_ng_template_4_ng_container_8_Template_mat_datepicker_opened_11_listener() { i0.ɵɵrestoreView(_r26); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.toggleModalCssClass()); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(13, CeeDateComponent_div_0_ng_template_4_ng_container_8_13_Template, 1, 0, null, 58);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const datePicker_r30 = i0.ɵɵreference(8);
    const picker_r27 = i0.ɵɵreference(12);
    const ctx_r1 = i0.ɵɵnextContext(3);
    const errorMassageTemplate_r16 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isFutureDate || ctx_r1.invalidDate || datePicker_r30.hasError("matDatepickerMax") || datePicker_r30.hasError("matDatepickerMin") || datePicker_r30.hasError("matDatepickerParse") || !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(30, _c2, !ctx_r1.is_material));
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("floatLabel", !ctx_r1.is_material ? "never" : "auto");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hide);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext");
    i0.ɵɵproperty("ngModel", ctx_r1.shadowValue)("mask", ctx_r1.maskString)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry)("required", ctx_r1.is_material && ctx_r1.isMandatory)("hidden", ctx_r1.hide);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext");
    i0.ɵɵproperty("min", ctx_r1.minDatex)("max", ctx_r1.maxDatex)("matDatepicker", picker_r27);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.maskInputValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", picker_r27)("disabled", !ctx_r1.isEditable);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", errorMassageTemplate_r16)("ngTemplateOutletContext", i0.ɵɵpureFunction1(32, _c3, datePicker_r30));
} }
function CeeDateComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 21);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_template_4_div_1_Template, 4, 3, "div", 22);
    i0.ɵɵelementStart(2, "div", 23);
    i0.ɵɵelementContainerStart(3, 24);
    i0.ɵɵtemplate(4, CeeDateComponent_div_0_ng_template_4_ng_container_4_Template, 13, 9, "ng-container", 25)(5, CeeDateComponent_div_0_ng_template_4_ng_container_5_Template, 15, 36, "ng-container", 25)(6, CeeDateComponent_div_0_ng_template_4_ng_container_6_Template, 14, 30, "ng-container", 25)(7, CeeDateComponent_div_0_ng_template_4_ng_container_7_Template, 2, 16, "ng-container", 25)(8, CeeDateComponent_div_0_ng_template_4_ng_container_8_Template, 14, 34, "ng-container", 26);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.is_material);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngSwitch", ctx_r1.additionalParameter["ui_type"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "input_boxes");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "with_time");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "date_range");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "date_range_boostrap");
} }
function CeeDateComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 16);
    i0.ɵɵtemplate(1, CeeDateComponent_div_0_ng_container_1_Template, 2, 1, "ng-container", 17)(2, CeeDateComponent_div_0_ng_template_2_Template, 3, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(4, CeeDateComponent_div_0_ng_template_4_Template, 9, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const autocompleteOffField_r31 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.autocomplete)("ngIfElse", autocompleteOffField_r31);
} }
function CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r32 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r32.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r32.code).message_text, " ");
} }
function CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_div_1_Template, 2, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const datePicker_r33 = i0.ɵɵnextContext(2).datePicker;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !datePicker_r33.hasError("matDatepickerParse") && !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext));
} }
function CeeDateComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeDateComponent_ng_template_1_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "p", 49);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.errorMessageData.message_text);
} }
function CeeDateComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_ng_template_1_ng_template_1_div_0_Template, 3, 4, "div", 46);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.inputValue && ctx_r1.isMandatory && ctx_r1.showErrorOnNext);
} }
function CeeDateComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 47)(2, "div")(3, "p", 49);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r34 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, item_r34.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r34.value.message_text, "");
} }
function CeeDateComponent_ng_template_1_p_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["max_date_error"], "");
} }
function CeeDateComponent_ng_template_1_p_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["min_date_error"], "");
} }
function CeeDateComponent_ng_template_1_p_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["future_date_error"], "");
} }
function CeeDateComponent_ng_template_1_p_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["invalid_date_error"], "");
} }
function CeeDateComponent_ng_template_1_button_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeDateComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 17)(1, CeeDateComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 14, i0.ɵɵtemplateRefExtractor)(3, CeeDateComponent_ng_template_1_ng_container_3_Template, 5, 4, "ng-container", 45);
    i0.ɵɵpipe(4, "keyvalue");
    i0.ɵɵelementStart(5, "div", 39)(6, "div");
    i0.ɵɵtemplate(7, CeeDateComponent_ng_template_1_p_7_Template, 2, 1, "p", 40)(8, CeeDateComponent_ng_template_1_p_8_Template, 2, 1, "p", 40)(9, CeeDateComponent_ng_template_1_p_9_Template, 2, 1, "p", 40)(10, CeeDateComponent_ng_template_1_p_10_Template, 2, 1, "p", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(11, CeeDateComponent_ng_template_1_button_11_Template, 2, 5, "button", 70);
} if (rf & 2) {
    const datePicker_r33 = ctx.datePicker;
    const singleErrorMessage_r35 = i0.ɵɵreference(2);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r35);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 8, ctx_r1.showComparisonError));
    i0.ɵɵadvance(4);
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r33.hasError("matDatepickerMax"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r33.hasError("matDatepickerMin"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && ctx_r1.isFutureDate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.invalidDate || datePicker_r33.hasError("matDatepickerParse"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material && ctx_r1.hasTooltip);
} }
function CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r36 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, ctx_r1.returnMessageData(message_r36.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r36.code).message_text, " ");
} }
function CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_div_1_p_1_Template, 2, 4, "p", 48);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_div_1_Template, 2, 1, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const datePicker_r37 = i0.ɵɵnextContext(2).datePicker;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !datePicker_r37.hasError("matDatepickerParse") && !ctx_r1.endDateRangeDisp && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext));
} }
function CeeDateComponent_ng_template_3_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeDateComponent_ng_template_3_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 45);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeDateComponent_ng_template_3_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["max_date_error"], "");
} }
function CeeDateComponent_ng_template_3_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["min_date_error"], "");
} }
function CeeDateComponent_ng_template_3_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["future_date_error"], "");
} }
function CeeDateComponent_ng_template_3_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 50);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["invalid_date_error"], "");
} }
function CeeDateComponent_ng_template_3_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeDateComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_ng_template_3_ng_container_0_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementStart(1, "div", 39)(2, "div");
    i0.ɵɵtemplate(3, CeeDateComponent_ng_template_3_p_3_Template, 2, 1, "p", 40)(4, CeeDateComponent_ng_template_3_p_4_Template, 2, 1, "p", 40)(5, CeeDateComponent_ng_template_3_p_5_Template, 2, 1, "p", 40)(6, CeeDateComponent_ng_template_3_p_6_Template, 2, 1, "p", 40);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, CeeDateComponent_ng_template_3_button_7_Template, 2, 5, "button", 70);
} if (rf & 2) {
    const datePicker_r37 = ctx.datePicker;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r37.hasError("matDatepickerMax"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r37.hasError("matDatepickerMin"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && ctx_r1.isFutureDate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.invalidDate || datePicker_r37.hasError("matDatepickerParse"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material && ctx_r1.hasTooltip);
} }
function CeeDateComponent_ng_template_5_Case_0_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 72, 8);
    i0.ɵɵlistener("focus", function CeeDateComponent_ng_template_5_Case_0_Template_input_focus_0_listener() { i0.ɵɵrestoreView(_r38); const picker_r39 = i0.ɵɵnextContext().picker; return i0.ɵɵresetView(picker_r39.open()); })("click", function CeeDateComponent_ng_template_5_Case_0_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r38); const picker_r39 = i0.ɵɵnextContext().picker; return i0.ɵɵresetView(picker_r39.open()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext_redacted");
    i0.ɵɵproperty("ngModel", ctx_r1.redactedValue)("disabled", !ctx_r1.isEditable)("required", ctx_r1.is_material && ctx_r1.isMandatory)("readonly", true);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_ng_template_5_Case_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 72, 8);
    i0.ɵɵlistener("focus", function CeeDateComponent_ng_template_5_Case_1_Template_input_focus_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setHiddenOverlay()); })("click", function CeeDateComponent_ng_template_5_Case_1_Template_input_click_0_listener() { i0.ɵɵrestoreView(_r40); const picker_r39 = i0.ɵɵnextContext().picker; return i0.ɵɵresetView(picker_r39.open()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵpropertyInterpolate1("id", "", ctx_r1.fieldData.unique_id, "_masktext_redacted");
    i0.ɵɵproperty("ngModel", ctx_r1.redactedValue)("disabled", !ctx_r1.isEditable)("required", ctx_r1.is_material && ctx_r1.isMandatory)("readonly", true);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
} }
function CeeDateComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeDateComponent_ng_template_5_Case_0_Template, 2, 9)(1, CeeDateComponent_ng_template_5_Case_1_Template, 2, 9);
} if (rf & 2) {
    let tmp_6_0;
    const uiType_r41 = ctx.uiType;
    i0.ɵɵconditional(0, (tmp_6_0 = uiType_r41) === "with_time" ? 0 : tmp_6_0 === "default" ? 1 : -1);
} }
export const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CeeDateComponent),
    multi: true
};
export class CeeDateComponent extends BaseView {
    datepipe;
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    elementRef;
    renderer;
    document;
    datePicker;
    stepId;
    fieldData;
    rowData;
    keepState = false;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    minDatex;
    maxDatex;
    isValid = true;
    showCross = false;
    inputValue;
    inputDateRangeValue;
    entryFields = [];
    inputValueDay;
    inputValueMonth;
    inputValueYear;
    dayFormatError;
    monthFormatError;
    yearFormatError;
    dayError;
    monthError;
    yearError;
    nowDate = new Date();
    dayBoxState = {
        touched: false,
        dirty: false
    };
    monthBoxState = {
        touched: false,
        dirty: false
    };
    yearBoxState = {
        touched: false,
        dirty: false
    };
    datePickerState = {
        touched: false,
        dirty: false
    };
    entryFieldsPossibleValues = {
        date: [],
        month: [],
        year: []
    };
    numberError;
    allowManualEntry;
    invalidDate = false;
    dateFormat = 'MM/DD/YYYY';
    apiDateFormat = 'MM/DD/YYYY';
    modalGenericCssClass = '';
    maskString = '00/00/0000';
    autocomplete = true;
    withTime = false;
    timeConfig = { hour: 1, minute: 1, second: 1 };
    enableMeridian = true;
    start;
    end;
    dateRangeStartPlaceholder = "";
    dateRangeEndPlaceholder = "";
    startDateRangeDisp;
    endDateRangeDisp;
    // range = new FormGroup({
    //     startDt: new FormControl<Date | null>(null),
    //     endDt: new FormControl<Date | null>(null),
    // });
    dropsDown = 'down';
    dropsUp = 'up';
    opensRight = 'right';
    opensCenter = 'center';
    opensLeft = 'left';
    selectedRangeCalendarCenter;
    maxDate;
    minDate;
    invalidDates = [];
    ranges = {
        Today: [dayjs().startOf('day'), dayjs().endOf('day')],
    };
    locale = {
        firstDay: 1,
        startDate: dayjs().startOf('day'),
        endDate: dayjs().endOf('day'),
        format: 'DD/MM/YYYY',
        applyLabel: 'Apply',
        cancelLabel: 'Cancel',
        fromLabel: 'From',
        toLabel: 'To',
    };
    localeSet;
    tooltips = [
        { date: dayjs(), text: 'Today is just unselectable' },
        { date: dayjs().add(2, 'days'), text: 'Yeeeees!!!' },
    ];
    noneditablePlaceholder = "";
    fieldPlaceholder = "";
    overlayContainer;
    hide = false;
    dateMaskFormat = this.dateFormat;
    dataTimeout;
    constructor(datepipe, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, elementRef, renderer, document) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.datepipe = datepipe;
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.elementRef = elementRef;
        this.renderer = renderer;
        this.document = document;
        this.selectedRangeCalendarCenter = {
            startDate: dayjs().startOf('day'),
            endDate: dayjs().endOf('day'),
        };
    }
    get isFutureDate() {
        return (this.inputValue && this.additionalParameter['future_date_error'] && new Date(this.inputValue) > new Date());
    }
    get shadowValue() {
        return this.inputValue && this.isValidDate(this.inputValue) ? moment.default(this.inputValue.toISOString()).format(this.dateFormat) : null;
    }
    get redactedValue() {
        return this.getRedactedDate(this.shadowValue);
    }
    set shadowValue(v) {
        const date = moment.default(v, this.dateFormat).toDate();
        if (date !== this.inputValue) {
            this.inputValue = date;
        }
    }
    get shadowStartValue() {
        return this.inputDateRangeValue && this.inputDateRangeValue.length > 0 && this.inputDateRangeValue[0] && this.isValidDate(this.inputDateRangeValue[0]) ? moment.default(new Date(this.inputDateRangeValue[0]).toISOString()).format(this.dateFormat) : null;
    }
    set shadowStartValue(v) {
        if (!this.inputDateRangeValue || (this.inputDateRangeValue && this.inputDateRangeValue.length > 0 && new Date(v) !== this.inputDateRangeValue[0])) {
            this.inputDateRangeValue[0] = new Date(v);
        }
    }
    get shadowEndValue() {
        return this.inputDateRangeValue && this.inputDateRangeValue.length > 1 && this.inputDateRangeValue[1] && this.isValidDate(this.inputDateRangeValue[1]) ? moment.default(new Date(this.inputDateRangeValue[1]).toISOString()).format(this.dateFormat) : null;
    }
    set shadowEndValue(v) {
        if (!this.inputDateRangeValue || (this.inputDateRangeValue && this.inputDateRangeValue.length > 1 && new Date(v) !== this.inputDateRangeValue[1])) {
            this.inputDateRangeValue[1] = new Date(v);
        }
    }
    get currDate() {
        let d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }
    get maskInputValue() {
        return this.inputValue;
    }
    set maskInputValue(v) {
        if (v !== this.inputValue) {
            this.inputValue = v;
        }
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.modalGenericCssClass = 'modal-date-picker-' + this.stepId;
    }
    isInvalidDate = (m) => {
        return this.invalidDates.some((d) => d.isSame(m, 'day'));
    };
    isCustomDate = (date) => {
        return date.month() === 0 || date.month() === 6 ? 'mycustomdate' : false;
    };
    isTooltipDate = (m) => {
        const tooltip = this.tooltips.find((tt) => tt.date.isSame(m, 'day'));
        return tooltip ? tooltip.text : false;
    };
    datesUpdatedRange($event) {
        if ($event['endDate'] && $event['startDate']) {
            this.setDateRangeValue({ value: { startDate: dayjs($event['startDate']).format(this.apiDateFormat), endDate: dayjs($event['endDate']).format(this.apiDateFormat) }, touched: true, dirty: false }, true);
        }
    }
    //@HostListener('window:beforeunload')
    // ngOnDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        if (this.overlayContainer != undefined && this.overlayContainer != null) {
            this.renderer.appendChild(this.document.body, this.overlayContainer);
        }
        // Clean up subscriptions
        Object.keys(this.variableObject).forEach(key => {
            if (this.variableObject[key] && typeof this.variableObject[key].unsubscribe === 'function') {
                this.variableObject[key].unsubscribe();
                delete this.variableObject[key];
            }
        });
        this.variableObject = {};
        // Clean up event listeners
        const dayField = this.elementRef.nativeElement?.querySelector('#dayField');
        const monthField = this.elementRef.nativeElement?.querySelector('#monthField');
        const yearField = this.elementRef.nativeElement?.querySelector('#yearField');
        [dayField, monthField, yearField].forEach(field => {
            if (field && field.removeEventListener) {
                field.removeEventListener('input', field.inputHandler);
            }
        });
        if (this.dataTimeout) {
            clearTimeout(this.dataTimeout);
            this.dataTimeout = null;
        }
        // Clear all object references
        //this.inputValue = null;
        this.inputDateRangeValue = null;
        this.minDatex = null;
        this.maxDatex = null;
        this.nowDate = null;
        // this.startDateRangeDisp = null;
        // this.endDateRangeDisp = null;
        this.selectedRangeCalendarCenter = null;
        this.ranges = null;
        this.invalidDates = [];
        this.tooltips = [];
        // Clear service references
        this.elementRef = null;
        this.renderer = null;
        // Call parent cleanup
        this.onViewUnload();
        // if (this.datePicker) {
        //     this.datePicker.control.setValue(null);
        //     this.datePicker.control.markAsPristine();
        //     this.datePicker.control.markAsUntouched();
        //     this.datePicker.control.updateValueAndValidity();
        // }
        //this.updateFieldData('');
        // if (this.overlayContainer) {
        //     this.renderer.removeChild(this.document.querySelector('dialog'), this.overlayContainer);
        // }
    }
    onViewDataInit() {
        if (this.additionalParameter['ui_type'] && this.additionalParameter['ui_type'] === 'with_time') {
            this.dateFormat = 'MM/DD/YYYY hh:mm A';
            this.apiDateFormat = 'MM/DD/YYYY HH:mm';
            this.withTime = true;
        }
        this.setMinandMaxValue();
        this.setDefaultValue();
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        if (this.additionalParameter['Date Format']) {
            this.dateFormat = this.additionalParameter['Date Format'];
        }
        if (this.additionalParameter['API Date Format']) {
            this.apiDateFormat = this.additionalParameter['API Date Format'];
        }
        if (this.additionalParameter['PickerStep']) {
            const pStep = this.additionalParameter['PickerStep'].split("|").map(v => { return Number(v) ? Number(v) : 1; });
            if (pStep.length === 3) {
                this.timeConfig.hour = pStep[0];
                this.timeConfig.minute = pStep[1];
                this.timeConfig.second = pStep[2];
            }
        }
        if (this.dateFormat.includes('H')) {
            this.enableMeridian = false;
        }
        else {
            this.enableMeridian = true;
        }
        if (this.additionalParameter['ui_type'] === "date_range") {
            const value = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
            this.startDateRangeDisp = (value && value.length > 0 && value[0]) ? new Date(value[0]) : null;
            this.endDateRangeDisp = (value && value.length > 1 && value[1]) ? new Date(value[1]) : null;
            if ((!value || value == "CURR_DATE") && this.additionalParameter['default_value'] === "CURR_DATE") {
                this.startDateRangeDisp = this.currDate;
                this.endDateRangeDisp = this.currDate;
                this.setDateRangeValue({ value: { startDate: moment.default(this.currDate.toISOString()).format(this.apiDateFormat), endDate: moment.default(this.currDate.toISOString()).format(this.apiDateFormat) }, touched: true, dirty: false }, true);
            }
        }
        if (this.additionalParameter['ui_type'] === "date_range_boostrap") {
            const value = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
            if (value) {
                this.selectedRangeCalendarCenter = {
                    startDate: (value && value.length > 0 && value[0]) ? new Date(value[0]) : null,
                    endDate: (value && value.length > 1 && value[1]) ? new Date(value[1]) : null,
                };
            }
            if ((!value || value == "CURR_DATE") && this.additionalParameter['default_value'] === "CURR_DATE") {
                this.selectedRangeCalendarCenter = {
                    startDate: this.currDate,
                    endDate: this.currDate,
                };
                this.setDateRangeValue({ value: { startDate: moment.default(this.currDate.toISOString()).format(this.apiDateFormat), endDate: moment.default(this.currDate.toISOString()).format(this.apiDateFormat) }, touched: true, dirty: false }, true);
            }
            this.localeSet = this.locale;
            if (this.additionalParameter['date_with_time_boostrap'] === "true") {
                this.localeSet = {
                    firstDay: 1,
                    startDate: dayjs().startOf('day'),
                    endDate: dayjs().endOf('day'),
                    format: 'DD/MM/YYYY HH:mm:ss',
                    applyLabel: 'Apply',
                    cancelLabel: 'Cancel',
                    fromLabel: 'From',
                    toLabel: 'To',
                };
            }
            if (this.additionalParameter['boostrap_duration_btn']) {
                this.setDateRanges(this.additionalParameter['boostrap_duration_btn']);
            }
        }
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                this.fieldValue = moment.default(this.rowData.value, this.apiDateFormat).format(this.dateFormat);
                const date = moment.default(this.rowData.value, this.apiDateFormat).toDate();
                if (date instanceof Date) {
                    this.inputValue = this.commonUtil.adjustTZ(date);
                    this.updateFieldData(moment.default(this.inputValue).format(this.apiDateFormat));
                    this.setBoxDate();
                }
                if (this.fieldValue === "Invalid date") {
                    this.updateFieldData("");
                    this.inputValue = null;
                }
            }
        }
        if (this.fieldValue !== undefined) {
            if (this.fieldValue === 'CURR_DATE') {
                this.fieldValue = moment.default(this.currDate.toISOString()).format(this.apiDateFormat);
                this.onSessionDataUpdated(this.fieldValue);
            }
            const date = moment.default(this.fieldValue, this.apiDateFormat).toDate();
            if (this.fieldValue && date instanceof Date) {
                this.showCross = true;
                this.inputValue = this.commonUtil.adjustTZ(date);
                this.setBoxDate();
            }
        }
        if (this.additionalParameter['entry_fields']) {
            this.entryFields = this.additionalParameter['entry_fields'].split('|').map(s => s.trim());
        }
        if (!this.entryFields.includes('day')) {
            this.nowDate.setDate(this.nowDate.getDate() + 1);
            this.inputValueDay = moment.default(this.nowDate).format('DD');
        }
        if (!this.entryFields.includes('month')) {
            this.inputValueMonth = moment.default(this.nowDate).format('MM');
        }
        if (!this.entryFields.includes('year')) {
            this.inputValueYear = moment.default(this.nowDate).format('YYYY');
        }
        if (this.additionalParameter['allow_manual_entry']) {
            this.allowManualEntry = this.additionalParameter['allow_manual_entry'] === 'true' ? true : false;
        }
        // this.maskString = this.getMaskedInputValue();
        this.maskString = this.dateFormat.includes("A") ? this.getMaskedInputValue() : null;
        if (this.additionalParameter.hasOwnProperty("CEE_MASK_DATE_FORMAT")) {
            this.hide = true;
            this.dateMaskFormat = this.additionalParameter['CEE_MASK_DATE_FORMAT'] != "" ? this.additionalParameter['CEE_MASK_DATE_FORMAT'] : this.dateFormat;
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                if (this.additionalParameter['ui_type'] === 'input_boxes') {
                    //
                }
                else {
                    document.getElementById(this.fieldData.html_id + '_masktext').focus();
                }
            };
        }
        if (this.additionalParameter['AutoCompleteText']) {
            this.autocomplete = this.additionalParameter['AutoCompleteText'] === 'OFF' ? false : true;
        }
        this.fieldPlaceholder = this.fieldData.placeholder_text;
        this.noneditablePlaceholder = this.additionalParameter['CEE_Noneditable_Placeholder'] ? this.additionalParameter['CEE_Noneditable_Placeholder'] : "";
        if (this.noneditablePlaceholder && !this.isEditable) {
            this.fieldData.placeholder_text = this.noneditablePlaceholder;
        }
        this.variableObject['emitOnEditableStatusChanged_' + this.appData.id] = this.sharedEventsService.emitOnEditableStatusChanged.subscribe((res) => {
            if (this.fieldData.unique_id == res) {
                if (this.noneditablePlaceholder && !this.isEditable) {
                    this.fieldData.placeholder_text = this.noneditablePlaceholder;
                }
                else {
                    this.fieldData.placeholder_text = this.fieldPlaceholder;
                }
                let placeholder = this.fieldData?.placeholder_text?.split('||');
                this.dateRangeStartPlaceholder = placeholder && placeholder.length > 0 ? placeholder[0] : '';
                this.dateRangeEndPlaceholder = placeholder && placeholder.length > 1 ? placeholder[1] : '';
            }
        });
        let placeholder = this.fieldData?.placeholder_text?.split('||');
        this.dateRangeStartPlaceholder = placeholder && placeholder.length > 0 ? placeholder[0] : '';
        this.dateRangeEndPlaceholder = placeholder && placeholder.length > 1 ? placeholder[1] : '';
    }
    setDateRanges(ranges) {
        ranges.split("||").map(x => {
            let getData = {};
            let getdata = this.setDateValRanges(x.at(-1), x.substring(0, x.length - 1));
            this.ranges[getdata.name] = getdata.value;
        });
    }
    setDateValRanges(type, number) {
        let name, value;
        // if(type === "d" && number === 1){
        //     name = "Today" ;
        //     value = [dayjs().startOf('day'), dayjs().endOf('day')];
        // }
        if (type === "d") {
            name = `${number} day`;
            value = [dayjs().startOf('day'), dayjs().subtract(number, 'day')];
        }
        if (type === "m") {
            name = `${number} month`;
            value = [dayjs().startOf('day'), dayjs().subtract(number, 'month')];
        }
        if (type === "y") {
            name = `${number} year`;
            value = [dayjs().startOf('day'), dayjs().subtract(number, 'year')];
        }
        return { name: name, value: value };
    }
    dateRangeChange(dateRangeStart, dateRangeEnd) {
        if (dateRangeStart.value && dateRangeEnd.value) {
            this.setDateRangeValue({ value: { startDate: moment.default(new Date(dateRangeStart.value).toISOString()).format(this.apiDateFormat), endDate: moment.default(new Date(dateRangeEnd.value).toISOString()).format(this.apiDateFormat) }, touched: true, dirty: false }, true);
        }
    }
    getMaskedInputValue() {
        let mask = '';
        let dateFormat = this.dateFormat;
        dateFormat = dateFormat.replace(/A|a/, 'SS');
        dateFormat = dateFormat.replace('MMMM', 'A*');
        dateFormat = dateFormat.replace('MMM', 'SSS');
        dateFormat.split('').forEach(element => {
            // tslint:disable-next-line: max-line-length
            if (('dmyhs').includes(element.toLowerCase())) {
                mask += '0';
            }
            else {
                mask += element;
            }
        });
        return mask;
    }
    dateOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 47 || charCode > 57)) {
            return false;
        }
        return true;
    }
    onDateChange() {
        this.onSessionDataUpdated(this.inputValue);
        this.invalidDate = false;
    }
    // To redact date like password for example, 31/03/2025 => ##/##/2025 or ##/03/2025 or 31/03/####
    getRedactedDate(date) {
        if (date == null || date == "" || date == undefined) {
            return null;
        }
        return moment.default(date, this.dateFormat).format(this.dateMaskFormat);
    }
    onDateInput(val, change = false) {
        if (val && (val.length === this.dateFormat.length || change) && this.commonUtil.isValidDateStr(val, this.dateFormat, this.withTime)) {
            this.invalidDate = false;
            this.inputValue = new Date(val);
            this.onSessionDataUpdated(this.inputValue);
        }
        else if (val) {
            this.invalidDate = true;
            this.updateFieldData('', !this.invalidDate);
        }
        else {
            this.inputValue = null;
            this.invalidDate = false;
            this.showCross = false;
            this.updateFieldData('');
            this.onComponentEvent('OnDateSelect');
        }
        if (!change) {
            this.onComponentEvent('OnKeyUp');
        }
    }
    onBlurDP(val) {
        if (val && this.commonUtil.isValidDateStr(val, this.dateFormat, this.withTime)) {
            this.invalidDate = false;
        }
    }
    onBlurDPSetState(val, dateField) {
        if (val && this.commonUtil.isValidDateStr(val, this.dateFormat, this.withTime)) {
            this.setState(dateField, this.datePickerState);
        }
    }
    setBoxDate() {
        if (this.inputValue) {
            this.inputValueDay = moment.default(this.inputValue).format('DD');
            this.inputValueMonth = moment.default(this.inputValue).format('MM');
            this.inputValueYear = moment.default(this.inputValue).format('YYYY');
        }
    }
    boxKeyUp(boxType, valueState, inputBoxesState) {
        switch (boxType) {
            case 'day':
                if (this.inputValueDay) {
                    this.setState(valueState, inputBoxesState);
                    this.dayFormatError = !(/^\d{2}$/.test(this.inputValueDay) && parseInt(this.inputValueDay) >= 1 && parseInt(this.inputValueDay) <= 31);
                    if (!this.dayFormatError) {
                        this.dayError = !(parseInt(this.inputValueDay) >= 1 && parseInt(this.inputValueDay) <= 31);
                    }
                    else {
                        this.dayError = false;
                    }
                }
                else {
                    this.dayFormatError = false;
                    this.dayError = false;
                }
                break;
            case 'month':
                if (this.inputValueMonth) {
                    this.setState(valueState, inputBoxesState);
                    this.monthFormatError = !(/^\d{2}$/.test(this.inputValueMonth));
                    if (!this.monthFormatError) {
                        this.monthError = !(parseInt(this.inputValueMonth) >= 1 && parseInt(this.inputValueMonth) <= 12);
                    }
                    else {
                        this.monthError = false;
                    }
                }
                else {
                    this.monthFormatError = false;
                    this.monthError = false;
                }
                break;
            case 'year':
                if (this.inputValueYear) {
                    this.setState(valueState, inputBoxesState);
                    this.yearFormatError = !(/^\d{4}$/.test(this.inputValueYear));
                    if (!this.yearFormatError) {
                        this.yearError = !(parseInt(this.inputValueYear) >= 1900 && parseInt(this.inputValueYear) <= 2100);
                    }
                    else {
                        this.yearError = false;
                    }
                }
                else {
                    this.yearFormatError = false;
                    this.yearError = false;
                }
                break;
        }
        if (this.dayError || this.monthError || this.yearError || this.dayFormatError || this.monthFormatError || this.yearFormatError || !this.inputValueYear || !this.inputValueMonth || !this.inputValueDay) {
            this.onSessionDataUpdated('');
        }
        else {
            const boxFullDate = new Date(this.inputValueYear, this.inputValueMonth - 1, this.inputValueDay);
            this.inputValue = boxFullDate;
            this.onSessionDataUpdated(boxFullDate);
        }
    }
    setDateRangeValue(value, inputBoxesState) {
        let appDataToBeStored = [];
        if (value['value']['startDate']) {
            appDataToBeStored.push(value['value']['startDate']);
        }
        if (value['value']['endDate']) {
            appDataToBeStored.push(value['value']['endDate']);
        }
        if (appDataToBeStored.length > 1) {
            // this.inputDateRangeValue = appDataToBeStored;
            this.onSessionDateRangeDataUpdated(appDataToBeStored);
        }
        // this.setState(value, inputBoxesState);
    }
    setState(value, inputBoxesState) {
        // this.overlayContainer = this.document.querySelector('.cdk-overlay-container');
        // this.renderer.appendChild(this.document.querySelector('dialog'), this.overlayContainer);
        inputBoxesState.touched !== value.touched && (inputBoxesState.touched = value.touched);
        inputBoxesState.dirty !== value.dirty && (inputBoxesState.dirty = value.dirty);
        if (this.inputValue == null) {
            this.updateFieldData('');
            return;
        }
        this.onSessionDataUpdated(this.inputValue);
    }
    concatData() { }
    isValidDate(d) {
        return d instanceof Date && !isNaN(d.getDate());
    }
    onSessionDataUpdated(date) {
        if (this.isValidDate(new Date(date))) {
            this.showCross = true;
            let tDatet = this.commonUtil.adjustTZ(new Date(date));
            const tDate = moment.default(tDatet.toISOString());
            this.isValid = this.validateMinMaxRange();
            this.updateFieldData(!tDate.isValid() ? '' : tDate.format(this.apiDateFormat), this.isValid);
            this.onComponentEvent('OnDateSelect');
        }
        else {
            this.inputValue = null;
            this.updateFieldData('', false);
        }
        this.onDirty();
    }
    onSessionDateRangeDataUpdated(date) {
        let dateRangeValue = [];
        let isInputValid = false;
        date.forEach((dt) => {
            if (this.isValidDate(new Date(dt))) {
                this.showCross = true;
                let tDatet = this.commonUtil.adjustTZ(new Date(dt));
                const tDate = moment.default(tDatet.toISOString());
                this.isValid = this.validateDateRangeMinMax(dt);
                dateRangeValue.push(!tDate.isValid() ? '' : tDate.format(this.apiDateFormat));
                isInputValid = true;
            }
            else {
                this.inputValue = null;
                this.updateFieldData('', false);
            }
            this.onDirty();
        });
        if (isInputValid) {
            this.updateFieldData(dateRangeValue, this.isValid);
            this.onComponentEvent('OnDateSelect');
        }
    }
    validateDateRangeMinMax(dt) {
        if (this.maxDatex && new Date(moment.default(this.maxDatex).format('MM/DD/YYYY')) < new Date(moment.default(dt).format('MM/DD/YYYY'))) {
            return false;
        }
        if (this.minDatex && new Date(moment.default(this.minDatex).format('MM/DD/YYYY')) > new Date(moment.default(dt).format('MM/DD/YYYY'))) {
            return false;
        }
        return true;
    }
    validateMinMaxRange() {
        if (this.maxDatex && new Date(moment.default(this.maxDatex).format('MM/DD/YYYY')) < new Date(this.inputValue)) {
            return false;
        }
        if (this.minDatex && new Date(moment.default(this.minDatex).format('MM/DD/YYYY')) > new Date(this.inputValue)) {
            return false;
        }
        return true;
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        let apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (this.rowData) {
            this.dataTimeout = setTimeout(() => {
                apiValue = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
            }, 0);
            // return;
        }
        if (apiValue) {
            const date = moment.default(apiValue, this.apiDateFormat).toDate();
            if (date instanceof Date) {
                this.inputValue = this.commonUtil.adjustTZ(date);
                this.updateFieldData(moment.default(this.inputValue).format(this.apiDateFormat));
                this.setBoxDate();
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        let additionalMinValue = this.additionalParameter['MinValue'];
        let additionalMaxValue = this.additionalParameter['MaxValue'];
        if (apiKey.split('$').length === 3) {
            if (additionalMinValue) {
                if (additionalMinValue !== 'CURR_DATE' && !additionalMinValue.includes('|')) {
                    additionalMinValue = apiKey.split('$')[0] + '$' + additionalMinValue + '$' + apiKey.split('$')[2];
                }
            }
            if (additionalMaxValue) {
                if (additionalMaxValue !== 'CURR_DATE' && !additionalMaxValue.includes('|')) {
                    additionalMaxValue = apiKey.split('$')[0] + '$' + additionalMaxValue + '$' + apiKey.split('$')[2];
                }
            }
        }
        if (apiKey.split('$').length === 4) {
            if (additionalMinValue) {
                if (additionalMinValue !== 'CURR_DATE' && !additionalMinValue.includes('|')) {
                    additionalMinValue = apiKey.split('$')[0] + '$' + additionalMinValue + '$' + apiKey.split('$')[2] + '$' + apiKey.split('$')[3];
                }
            }
            if (additionalMaxValue) {
                if (additionalMaxValue !== 'CURR_DATE' && !additionalMaxValue.includes('|')) {
                    additionalMaxValue = apiKey.split('$')[0] + '$' + additionalMaxValue + '$' + apiKey.split('$')[2] + '$' + apiKey.split('$')[3];
                }
            }
        }
        if (additionalMinValue) {
            if (additionalMinValue === apiKey) {
                this.minDatex = this.commonUtil.adjustTZ(new Date(value));
            }
            else {
                const minFieldValue = this.appDataService.getFieldDataByFieldId(this.additionalParameter['MinValue']);
                if (minFieldValue) {
                    this.minDatex = this.commonUtil.adjustTZ(new Date(minFieldValue));
                }
            }
        }
        if (additionalMaxValue) {
            if (additionalMaxValue === apiKey) {
                this.maxDatex = this.commonUtil.adjustTZ(new Date(value));
            }
            else {
                const maxFieldValue = this.appDataService.getFieldDataByFieldId(this.additionalParameter['MaxValue']);
                if (maxFieldValue) {
                    this.maxDatex = this.commonUtil.adjustTZ(new Date(maxFieldValue));
                }
            }
        }
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    setMinandMaxValue() {
        const additionalMinValue = this.additionalParameter['MinValue'];
        const additionalMaxValue = this.additionalParameter['MaxValue'];
        if (additionalMinValue) {
            this.minDatex = this.commonUtil.adjustTZ(this.getDateOnType(additionalMinValue, 'min'));
        }
        if (additionalMaxValue) {
            this.maxDatex = this.commonUtil.adjustTZ(this.getDateOnType(additionalMaxValue, 'max'));
        }
    }
    setDefaultValue() {
        const defVal = this.additionalParameter["default_value"];
        if (defVal === 'CURR_DATE') {
            this.inputValue = new Date(this.currDate);
            this.onDateChange();
        }
    }
    getDateOnType(parameterValue, type) {
        const data = this.returnDateArrayWithType(parameterValue, type);
        if (data.type.toLowerCase() === 'min') {
            return new Date(Math.min.apply(null, data.dates));
        }
        else {
            return new Date(Math.max.apply(null, data.dates));
        }
    }
    returnDateArrayWithType(parameterValue, type) {
        const obj = {
            dates: [parameterValue],
            type
        };
        if (parameterValue.includes('|')) {
            obj.dates = [];
            for (const str of (parameterValue.includes('||') ? parameterValue.split('||')[0] : parameterValue).split('|')) {
                const date = this.returnDate(str);
                if (date) {
                    obj.dates.push(date);
                }
            }
            if (parameterValue.includes('||')) {
                obj.type = parameterValue.split('||')[1];
            }
        }
        else {
            obj.dates = [this.returnDate(parameterValue)];
        }
        return obj;
    }
    returnDate(field) {
        const regex = '([+-]*)([0-9]+)([ydmw])';
        const matched = field.match(new RegExp(regex));
        if (matched) {
            let date = new Date();
            if (matched[3].includes('y')) {
                date = this.calculateDate('y', date, Number(matched[2]), matched[1] !== '-' ? 'add' : 'subtract');
            }
            else if (matched[3].includes('d')) {
                date = this.calculateDate('d', date, Number(matched[2]), matched[1] !== '-' ? 'add' : 'subtract');
            }
            else if (matched[3].includes('m')) {
                date = this.calculateDate('m', date, Number(matched[2]), matched[1] !== '-' ? 'add' : 'subtract');
            }
            else if (matched[3].includes('w')) {
                date = this.calculateDate('w', date, Number(matched[2]), matched[1] !== '-' ? 'add' : 'subtract');
            }
            return date;
        }
        else {
            if (field === 'CURR_DATE') {
                return new Date(this.currDate);
            }
            else {
                if (String(this.appData.id).split('$').length === 3) {
                    if (!field.includes('$')) {
                        field =
                            String(this.appData.id).split('$')[0] + '$' + field + '$' + String(this.appData.id).split('$')[2];
                    }
                }
                const value = this.appDataService.getFieldDataByFieldId(field);
                if (value) {
                    return new Date(value);
                }
            }
        }
    }
    /**
     * this function calculates date if max value or min value set as 1w or 1d or 1y or 1m or 1w 1d 1y 1m
     * @param type the type of the min or max value
     * @param currentDate the current from which it needs to be deducted or added
     * @param no the number of date month week or year
     * @param operator subtract or add to the current date
     */
    calculateDate(type, currentDate, no, operator) {
        const date = currentDate;
        switch (type) {
            case 'y':
                if (operator === 'add') {
                    return new Date(date.setFullYear(currentDate.getFullYear() + no));
                }
                else {
                    return new Date(date.setFullYear(currentDate.getFullYear() - no));
                }
            case 'm':
                if (operator === 'add') {
                    return new Date(date.setMonth(currentDate.getMonth() + no));
                }
                else {
                    return new Date(date.setMonth(currentDate.getMonth() - no));
                }
            case 'w':
                if (operator === 'add') {
                    return new Date(date.setDate(currentDate.getDate() + (no * 7)));
                }
                else {
                    return new Date(date.setDate(currentDate.getDate() - (no * 7)));
                }
            case 'd':
                if (operator === 'add') {
                    return new Date(date.setDate(currentDate.getDate() + no));
                }
                else {
                    return new Date(date.setDate(currentDate.getDate() - no));
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
                // default value
                // default value
                if (this.additionalParameter['default_value']) {
                    if (this.additionalParameter['default_value'] === 'CURR_DATE') {
                        this.inputValue = new Date(this.currDate);
                    }
                    else {
                        this.inputValue = this.commonUtil.adjustTZ(new Date(this.additionalParameter['default_value']));
                    }
                    this.showCross = true;
                }
                else {
                    this.inputValue = null;
                    this.showCross = false;
                }
                this.setEmptyUIType();
                this.updateFieldData(this.inputValue ? moment.default(this.inputValue).format(this.apiDateFormat) : '');
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.datePicker.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.datePicker) {
                    this.datePicker.control.markAsUntouched();
                    this.datePicker.control.markAsPristine();
                    this.datePicker.control.updateValueAndValidity();
                }
                this.dayBoxState = {
                    touched: false,
                    dirty: false
                };
                this.monthBoxState = {
                    touched: false,
                    dirty: false
                };
                this.yearBoxState = {
                    touched: false,
                    dirty: false
                };
                this.datePickerState = {
                    touched: false,
                    dirty: false
                };
                return;
            }
        });
    }
    setEmptyUIType() {
        if (this.additionalParameter['ui_type'] === 'input_boxes') {
            this.entryFields.includes('day') && (this.inputValueDay = '');
            this.entryFields.includes('month') && (this.inputValueMonth = '');
            this.entryFields.includes('year') && (this.inputValueYear = '');
        }
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
            this.inputValue = this.commonUtil.adjustTZ(new Date(get_data[unique_id_value]));
            this.updateFieldData(moment.default(this.inputValue).format(this.apiDateFormat));
        }
    }
    clearDate(event) {
        this.showCross = false;
        event.stopPropagation();
        this.inputValue = null;
        this.updateFieldData('');
        this.setMinandMaxValue();
        this.onComponentEvent('OnDateSelect');
    }
    onNoDateSelection() {
        if (!this.isValidDate(this.inputValue)) {
            this.showCross = false;
            this.inputValue = null;
            this.updateFieldData('');
            this.setMinandMaxValue();
            this.onComponentEvent('OnDateSelect');
        }
    }
    clearDateRange(event) {
        this.showCross = false;
        event.stopPropagation();
        this.startDateRangeDisp = null;
        this.endDateRangeDisp = null;
        this.updateFieldData('');
        this.setMinandMaxValue();
        this.onComponentEvent('OnDateSelect');
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = this.commonUtil.adjustTZ(new Date(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]));
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](moment.default(this.inputValue).format(this.apiDateFormat));
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
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
    setInputFilter(textbox, inputFilter) {
        const _this = this;
        ["input"].forEach(function (event) {
            textbox.addEventListener(event, function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                    if (this.getAttribute('number-error') === '2') {
                        this.setAttribute('number-error', '1');
                    }
                    else {
                        this.setAttribute('number-error', '0');
                    }
                }
                else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                    this.setAttribute('number-error', '2');
                    this.dispatchEvent(new Event('input'));
                }
                else {
                    this.value = "";
                    this.setAttribute('number-error', '2');
                    this.dispatchEvent(new Event('input'));
                }
                _this.numberError = (this.getAttribute('number-error') !== '0');
            });
        });
    }
    toggleLanguage(data) {
    }
    toggleModalCssClass() {
        this.overlayContainer = this.document.querySelector('.cdk-overlay-container');
        if (this.overlayContainer) {
            const dialog = this.document.querySelector('dialog');
            if (dialog) {
                this.renderer.appendChild(dialog, this.overlayContainer);
            }
            const modalWrapper = window.document.querySelector('.cdk-overlay-pane');
            if (modalWrapper) {
                modalWrapper.classList.toggle('modal-date-picker-wrapper');
                modalWrapper.classList.toggle(this.modalGenericCssClass);
            }
        }
    }
    ngAfterViewInit() {
        this.commonUtil.moveMatDialogToStepModalIfExist();
        const dayField = this.elementRef.nativeElement.querySelector('#dayField');
        const monthField = this.elementRef.nativeElement.querySelector('#monthField');
        const yearField = this.elementRef.nativeElement.querySelector('#yearField');
        if (dayField) {
            this.setInputFilter(dayField, function (value) {
                return /^\d*$/.test(value);
            });
        }
        if (monthField) {
            this.setInputFilter(monthField, function (value) {
                return /^\d*$/.test(value);
            });
        }
        if (yearField) {
            this.setInputFilter(yearField, function (value) {
                return /^\d*$/.test(value);
            });
        }
    }
    setHiddenOverlay() {
        this.overlayContainer = this.document.querySelector('.cdk-overlay-container');
        if (this.overlayContainer) {
            const dialog = this.document.querySelector('dialog');
            if (dialog) {
                this.renderer.appendChild(dialog, this.overlayContainer);
            }
        }
    }
    static ɵfac = function CeeDateComponent_Factory(t) { return new (t || CeeDateComponent)(i0.ɵɵdirectiveInject(i1.DatePipe), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.MatDialog), i0.ɵɵdirectiveInject(i9.MatSnackBar), i0.ɵɵdirectiveInject(i10.HttpClient), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(DOCUMENT)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeDateComponent, selectors: [["app-cee-date"]], viewQuery: function CeeDateComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePicker = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", rowData: "rowData", keepState: "keepState", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵProvidersFeature([
                CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                provideNgxMask(),
                NgxDaterangepickerLocaleService
            ]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 7, vars: 1, consts: [["errorMassageTemplate", ""], ["dateRangeErrorMassageTemplate", ""], ["maskDateInputs", ""], ["autocompleteOffField", ""], ["fieldLayout", ""], ["dayField", "ngModel"], ["monthField", "ngModel"], ["yearField", "ngModel"], ["dateField", "ngModel"], ["datePicker", "ngModel"], ["picker", ""], ["dateFieldStart", "ngModel", "dateRangeStart", ""], ["dateFieldEnd", "ngModel", "dateRangeEnd", ""], ["dateRangePicker", ""], ["singleErrorMessage", ""], ["class", "field-wrapper", 3, "id", "class", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [4, "ngIf", "ngIfElse"], [3, "ngTemplateOutlet"], ["autocomplete", "off"], ["type", "submit", "value", "submit", 2, "display", "none"], [1, "form-group"], ["class", "form-label", 4, "ngIf"], [1, "form-field"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "form-inline"], ["class", "input-group", 4, "ngIf"], [1, "error-message-validation"], ["class", "error", 4, "ngIf"], [1, "input-group"], ["id", "dayField", "type", "text", "placeholder", "DD", "aria-label", "Day", "maxlength", "2", 3, "keyup", "ngModelChange", "focus", "blur", "ngModel", "required", "disabled"], ["id", "monthField", "type", "text", "placeholder", "MM", "aria-label", "Month", "maxlength", "2", 3, "keyup", "ngModelChange", "focus", "blur", "ngModel", "required", "disabled"], ["id", "yearField", "type", "text", "placeholder", "YYYY", "aria-label", "Year", "maxlength", "4", 3, "keyup", "ngModelChange", "focus", "blur", "ngModel", "required", "disabled"], [4, "ngFor", "ngForOf"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [1, "error"], [3, "ngClass"], [3, "floatLabel"], ["matInput", "", 3, "blur", "keyup", "change", "focus", "click", "ngModel", "mask", "placeholder", "disabled", "readonly", "required", "id", "hidden"], ["readonly", "", "tabindex", "-1", 1, "shadow-dateInput", 3, "ngModelChange", "dateChange", "min", "max", "ngxMatDatetimePicker", "ngModel"], ["class", "mat-icon-class", "alt", "Calender Icon Image", "aria-label", "close date picker", "matDatepickerToggleIcon", "", 3, "hidden", "click", 4, "ngIf"], ["matSuffix", "", 3, "for", "disabled"], [3, "closed", "opened", "enableMeridian", "stepHour", "stepMinute", "stepSecond"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["alt", "Calender Icon Image", "aria-label", "close date picker", "matDatepickerToggleIcon", "", 1, "mat-icon-class", 3, "click", "hidden"], [1, "date-range-continer", "form-field"], [1, "form-control", 3, "min", "max", "rangePicker"], ["matStartDate", "", 3, "ngModelChange", "blur", "keyup", "change", "focus", "click", "ngModel", "placeholder", "disabled", "readonly", "required", "id"], ["matEndDate", "", 3, "ngModelChange", "blur", "keyup", "focus", "click", "dateChange", "ngModel", "placeholder", "disabled", "readonly", "required", "id"], ["class", "clear-date-range", "alt", "Calender Icon Image", "aria-label", "clear date picker", "matDatepickerToggleIcon", "", 3, "hidden", "click", 4, "ngIf"], ["matPrefix", "", 3, "for"], ["alt", "Calender Icon Image", "aria-label", "clear date picker", "matDatepickerToggleIcon", "", 1, "clear-date-range", 3, "click", "hidden"], ["type", "text", "id", "rangeCalendarAutoright", "readonly", "", "ngxDaterangepickerBootstrap", "", "aria-describedby", "rangeCalendarAutoLeftDesc", 1, "form-control", 2, "box-shadow", "none", "text-overflow", "ellipsis", "overflow", "hidden", "white-space", "nowrap", 3, "ngModelChange", "datesUpdated", "ngModel", "drops", "opens", "locale", "ranges", "showCustomRangeLabel", "showCancel", "linkedCalendars", "alwaysShowCalendars", "showRangeLabelOnInput", "keepCalendarOpeningWithRange", "closeOnAutoApply", "autoApply", "isTooltipDate", "isCustomDate", "isInvalidDate"], ["readonly", "", "tabindex", "-1", 1, "shadow-dateInput", 3, "ngModelChange", "dateChange", "min", "max", "matDatepicker", "ngModel", "id"], [3, "closed", "opened"], ["type", "button", 3, "class", "tooltip", 4, "ngIf"], ["type", "button", 3, "tooltip"], ["matInput", "", 1, "masked-input", 3, "focus", "click", "ngModel", "placeholder", "disabled", "required", "id", "readonly"]], template: function CeeDateComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeDateComponent_div_0_Template, 6, 6, "div", 15)(1, CeeDateComponent_ng_template_1_Template, 12, 10, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, CeeDateComponent_ng_template_3_Template, 8, 6, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(5, CeeDateComponent_ng_template_5_Template, 2, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgxDaterangepickerBootstrapModule, i11.NgxDaterangepickerBootstrapDirective, NgTemplateOutlet, CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.KeyValuePipe, MatTooltipModule, FormsModule, i12.ɵNgNoValidate, i12.DefaultValueAccessor, i12.NgControlStatus, i12.NgControlStatusGroup, i12.RequiredValidator, i12.MaxLengthValidator, i12.NgModel, i12.NgForm, MatFormFieldModule, i13.MatFormField, i13.MatLabel, i13.MatPrefix, i13.MatSuffix, NgxMatDatetimePickerModule, i14.NgxMatDatetimepicker, i14.NgxMatDatepickerInput, MatIconModule, i15.MatIcon, MatDatepickerModule, i16.MatDatepicker, i16.MatDatepickerInput, i16.MatDatepickerToggle, i16.MatDatepickerToggleIcon, i16.MatDateRangeInput, i16.MatStartDate, i16.MatEndDate, i16.MatDateRangePicker, NgxMaskDirective, MatInputModule, i17.MatInput, TooltipModule, i18.TooltipDirective], styles: [".datepickerHld[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1}.datepickerHld[_ngcontent-%COMP%]   .form-control[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.datepickerHld[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;padding:0 1px;background:#fff}.datepickerHld[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]   .btn-calender[_ngcontent-%COMP%]{padding:16px 18px;border:0;background-size:20px auto}.datepickerHld[_ngcontent-%COMP%]   .input-group-append[_ngcontent-%COMP%]{margin-left:-1px;height:calc(1.5em + .75rem + 2px)}.datepickerHld[_ngcontent-%COMP%]   .mat-datepicker-input[_ngcontent-%COMP%]{width:85%}.mat-icon-class[_ngcontent-%COMP%]{cursor:pointer;position:absolute;float:right;top:2px;right:-3px;color:#0000008a}.day-field[_ngcontent-%COMP%], .month-field[_ngcontent-%COMP%]{width:60px;text-align:center;margin-right:10px}.year-field[_ngcontent-%COMP%]{width:80px;text-align:center}.error[_ngcontent-%COMP%]{color:red}.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.shadow-dateInput[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;opacity:0}  .mat-calendar-content button.mat-calendar-body-cell{position:absolute;height:100%}  .mat-calendar-content td.mat-calendar-body-cell{position:relative;height:0}  .date-range-continer .mat-datepicker-toggle{position:absolute;right:15px;top:50px}.date-range-continer[_ngcontent-%COMP%]   .invalid[_ngcontent-%COMP%]{border:1px #f00 solid}.date-range-continer[_ngcontent-%COMP%]   .clear-date-range[_ngcontent-%COMP%]{cursor:pointer;position:absolute;float:right;top:59px;right:51px;color:#0000008a}.masked-input[_ngcontent-%COMP%]{border:none;background:none}.masked-input[_ngcontent-%COMP%]:focus{outline:none}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeDateComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-date', providers: [
                    CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR,
                    provideNgxMask(),
                    NgxDaterangepickerLocaleService
                ], standalone: true, imports: [NgxDaterangepickerBootstrapModule, NgTemplateOutlet, CommonModule, MatTooltipModule, NgSwitch, FormsModule, NgStyle, NgClass, MatFormFieldModule, NgxMatDatetimePickerModule, MatIconModule, MatDatepickerModule,
                    CustomTooltipDirective, NgxMaskDirective, MatInputModule, TooltipModule
                ], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <ng-container *ngIf=\"autocomplete; else autocompleteOffField\">\r\n        <ng-container [ngTemplateOutlet]=\"fieldLayout\"></ng-container>\r\n    </ng-container>\r\n    <ng-template #autocompleteOffField>\r\n        <form autocomplete=\"off\">\r\n            <input type=\"submit\" value=\"submit\" style=\"display:none\" />\r\n            <ng-container [ngTemplateOutlet]=\"fieldLayout\"></ng-container>\r\n        </form>\r\n    </ng-template>\r\n    <ng-template #fieldLayout>\r\n        <div class=\"form-group\">\r\n            <div class=\"form-label\" *ngIf='!is_material'>\r\n                <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                    <label class=\"col-form-label\"\r\n                        *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                    <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                        [innerHTML]=\"fieldData.field_label\"></label>\r\n                </ng-container>\r\n                <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n                <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\"\r\n                [tooltip]=\"fieldData.tooltip\"\r\n                    [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n            </div>\r\n            <div class=\"form-field\">\r\n                <ng-container [ngSwitch]=\"additionalParameter['ui_type']\">\r\n                    <ng-container *ngSwitchCase=\"'input_boxes'\">\r\n                        <div class=\"form-inline\">\r\n                            <div *ngIf=\"entryFields.includes('day')\" class=\"input-group\">\r\n                                <input #dayField=\"ngModel\" id=\"dayField\" type=\"text\"\r\n                                    class=\"form-control day-field {{ dayFormatError || dayError || !isValid || (!inputValueDay && isMandatory && (dayField.dirty || dayField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n                                    placeholder=\"DD\" aria-label=\"Day\" (keyup)=\"boxKeyUp('day', dayField, dayBoxState)\"\r\n                                    [(ngModel)]=\"inputValueDay\" maxlength=\"2\" [required]=\"isMandatory\"\r\n                                    (focus)=\"setState(dayField, dayBoxState)\"\r\n                                    (blur)=\"boxKeyUp('day', dayField, dayBoxState)\" [disabled]=\"!isEditable\">\r\n                            </div>\r\n                            <div *ngIf=\"entryFields.includes('month')\" class=\"input-group\">\r\n                                <input #monthField=\"ngModel\" id=\"monthField\" type=\"text\"\r\n                                    class=\"form-control month-field {{ monthFormatError || monthError || !isValid || (!inputValueMonth && isMandatory && (monthField.dirty || monthField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n                                    placeholder=\"MM\" aria-label=\"Month\"\r\n                                    (keyup)=\"boxKeyUp('month', monthField, monthBoxState)\" [(ngModel)]=\"inputValueMonth\"\r\n                                    maxlength=\"2\" [required]=\"isMandatory\" (focus)=\"setState(monthField, monthBoxState)\"\r\n                                    (blur)=\"boxKeyUp('month', monthField, monthBoxState)\" [disabled]=\"!isEditable\">\r\n                            </div>\r\n                            <div *ngIf=\"entryFields.includes('year')\" class=\"input-group\">\r\n                                <input #yearField=\"ngModel\" id=\"yearField\" type=\"text\"\r\n                                    class=\"form-control year-field {{ yearFormatError || yearError || !isValid || (!inputValueYear && isMandatory && (yearField.dirty || yearField.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n                                    placeholder=\"YYYY\" aria-label=\"Year\"\r\n                                    (keyup)=\"boxKeyUp('year', yearField, yearBoxState)\" [(ngModel)]=\"inputValueYear\"\r\n                                    maxlength=\"4\" [required]=\"isMandatory\" (focus)=\"setState(yearField, yearBoxState)\"\r\n                                    (blur)=\"boxKeyUp('year', yearField, yearBoxState)\" [disabled]=\"!isEditable\">\r\n                            </div>\r\n                        </div>\r\n                        <ng-container *ngIf=\"multipleErrorMessage\">\r\n                            <ng-container *ngFor=\"let message of messages\">\r\n                                <div class=\"error-message-wrapper\"\r\n                                    *ngIf=\"(!inputValueDay && isMandatory && (dayBoxState.dirty || dayBoxState.touched || showErrorOnNext)) || (!inputValueMonth && isMandatory && (monthBoxState.dirty || monthBoxState.touched || showErrorOnNext)) || (!inputValueYear && isMandatory && (yearBoxState.dirty || yearBoxState.touched || showErrorOnNext))\">\r\n                                    <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                        {{returnMessageData(message.code).message_text}}\r\n                                    </p>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <div class=\"error-message-validation\">\r\n                            <div>\r\n                                <p class=\"error\" *ngIf=\"numberError\">Please enter numbers only.</p>\r\n                                <p class=\"error\" *ngIf=\"dayFormatError\">Entered day must be in <span>DD</span> format.\r\n                                </p>\r\n                                <p class=\"error\" *ngIf=\"monthFormatError\">Entered month must be in <span>MM</span>\r\n                                    format.\r\n                                </p>\r\n                                <p class=\"error\" *ngIf=\"yearFormatError\">Entered year must be in <span>YYYY</span>\r\n                                    format.\r\n                                </p>\r\n                                <p class=\"error\"\r\n                                    *ngIf=\"(inputValue && !isValid) || dayError || monthError || yearError\">\r\n                                    Please enter a valid {{fieldData.field_label}}.\r\n                                </p>\r\n                            </div>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"'with_time'\">\r\n                        <div [ngClass]=\"{'input-group': !is_material}\"\r\n                            class=\"{{isFutureDate || invalidDate || datePicker.hasError('matDatepickerMax') || datePicker.hasError('matDatepickerMin') || datePicker.hasError('matDatepickerParse') || (!inputValue && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\">\r\n                            <mat-form-field floatLabel=\"{{!is_material?'never':'auto'}}\">\r\n\r\n                                <mat-label *ngIf='is_material'>{{fieldData.field_label}}</mat-label>\r\n                                <!-- <input matInput [textMask]=\"maskData\" [ngModel]=\"shadowValue\" -->\r\n                                <ng-container *ngIf=\"hide\">\r\n                                    <ng-container *ngTemplateOutlet=\"maskDateInputs; context:{uiType:'with_time', picker: picker}\"></ng-container>\r\n                                </ng-container>\r\n                                <input matInput [ngModel]=\"shadowValue\" [mask]=\"maskString\"\r\n                                    (blur)=\"onBlurDP($event.target.value); setState(dateField, datePickerState)\"\r\n                                    (keyup)=\"onDateInput($event.target.value); setState(dateField, datePickerState)\"\r\n                                    (change)=\"onDateInput($event.target.value, true)\"\r\n                                    (focus)=\"!allowManualEntry && picker.open()\"\r\n                                    (click)=\"!allowManualEntry && picker.open()\"\r\n                                    placeholder=\"{{fieldData.placeholder_text}}\" [disabled]=\"!isEditable\"\r\n                                    [readonly]=\"!allowManualEntry\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [required]=\"is_material && isMandatory\"\r\n                                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                                    #dateField=\"ngModel\" id=\"{{fieldData.unique_id}}_masktext\" [hidden]=\"hide\">\r\n                                <input class=\"shadow-dateInput\" [min]=\"minDatex\" [max]=\"maxDatex\"\r\n                                    [ngxMatDatetimePicker]=\"picker\" [(ngModel)]=\"maskInputValue\" #datePicker=\"ngModel\"\r\n                                    readonly (dateChange)=\"onDateChange()\" tabindex=\"-1\">\r\n                                <mat-icon class=\"mat-icon-class\" *ngIf=\"isEditable\" alt=\"Calender Icon Image\"\r\n                                    aria-label=\"close date picker\" matDatepickerToggleIcon [hidden]=\"!showCross\"\r\n                                    (click)=\"clearDate($event)\">\r\n                                    clear</mat-icon>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [disabled]=\"!isEditable\">\r\n                                </mat-datepicker-toggle>\r\n                                <ngx-mat-datetime-picker #picker\r\n                                    (closed)=\"setState({touched:true,dirty:dateField.dirty}, datePickerState)\"\r\n                                    (opened)=\"toggleModalCssClass()\" [enableMeridian]=\"enableMeridian\"  [stepHour]=\"timeConfig.hour\"\r\n                                    [stepMinute]=\"timeConfig.minute\" [stepSecond]=\"timeConfig.second\">\r\n                                    <ng-template>\r\n                                        <span>OK</span>\r\n                                      </ng-template>\r\n                                </ngx-mat-datetime-picker>\r\n                            </mat-form-field>                            \r\n                            <ng-template *ngTemplateOutlet=\"errorMassageTemplate; context:{datePicker:datePicker}\"></ng-template>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"'date_range'\">\r\n                        <div class=\"date-range-continer form-field\"\r\n                        class=\"{{isFutureDate || !isValid || invalidDate || dateFieldStart.hasError('matDatepickerMax') || dateFieldStart.hasError('matDatepickerMin') || dateFieldStart.hasError('matDatepickerParse') || dateFieldEnd.hasError('matDatepickerMax') || dateFieldEnd.hasError('matDatepickerMin') || dateFieldEnd.hasError('matDatepickerParse') || (!endDateRangeDisp && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\">\r\n                            <mat-date-range-input  [min]=\"minDatex\" [max]=\"maxDatex\" class=\"form-control\" [rangePicker]=\"dateRangePicker\">\r\n                                <input matStartDate [(ngModel)]=\"startDateRangeDisp\"\r\n                                    [placeholder]=\"dateRangeStartPlaceholder\"\r\n                                    #dateFieldStart=\"ngModel\"\r\n                                    #dateRangeStart\r\n                                    (blur)=\"onBlurDP($event.target.value); setState(dateFieldStart, datePickerState)\"\r\n                                    (keyup)=\"onDateInput($event.target.value); setState(dateFieldStart, datePickerState)\"\r\n                                    (change)=\"onDateInput($event.target.value, true)\"\r\n                                    (focus)=\"!allowManualEntry && dateRangePicker.open()\"\r\n                                    (click)=\"!allowManualEntry && dateRangePicker.open()\"\r\n                                    [disabled]=\"!isEditable\"\r\n                                    [readonly]=\"!allowManualEntry\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [required]=\"is_material && isMandatory\"\r\n                                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                                    id=\"{{fieldData.unique_id}}_masktext_start\">\r\n                                <input matEndDate [(ngModel)]=\"endDateRangeDisp\"\r\n                                    [placeholder]=\"dateRangeEndPlaceholder\"\r\n                                    #dateFieldEnd=\"ngModel\"\r\n                                    #dateRangeEnd\r\n                                    (blur)=\"onBlurDP($event.target.value); setState(dateFieldEnd, datePickerState)\"\r\n                                    (keyup)=\"onDateInput($event.target.value); setState(dateFieldEnd, datePickerState)\"\r\n                                    (focus)=\"!allowManualEntry && dateRangePicker.open()\"\r\n                                    (click)=\"!allowManualEntry && dateRangePicker.open()\"\r\n                                    [disabled]=\"!isEditable\"\r\n                                    [readonly]=\"!allowManualEntry\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [required]=\"is_material && isMandatory\"\r\n                                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                                    id=\"{{fieldData.unique_id}}_masktext_end\"\r\n                                    (dateChange)=\"dateRangeChange(dateRangeStart, dateRangeEnd)\">\r\n                            </mat-date-range-input>\r\n                            <mat-icon class=\"clear-date-range\" *ngIf=\"isEditable\" alt=\"Calender Icon Image\"\r\n                            aria-label=\"clear date picker\" matDatepickerToggleIcon [hidden]=\"!showCross\"\r\n                            (click)=\"clearDateRange($event)\">\r\n                            clear</mat-icon>\r\n                            <mat-datepicker-toggle matPrefix [for]=\"dateRangePicker\"> </mat-datepicker-toggle>\r\n                            <mat-date-range-picker #dateRangePicker></mat-date-range-picker>\r\n                        </div>\r\n                        <!-- <ng-container *ngIf=\"!isValid\"> -->\r\n                            <ng-template *ngTemplateOutlet=\"dateRangeErrorMassageTemplate; context:{datePicker:dateFieldEnd}\"></ng-template>\r\n                        <!-- </ng-container> -->\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"'date_range_boostrap'\">\r\n                        <input\r\n                            type=\"text\"\r\n                            id=\"rangeCalendarAutoright\"\r\n                            class=\"form-control\"\r\n                            style=\"box-shadow: none; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;\"\r\n                            readonly\r\n                            ngxDaterangepickerBootstrap\r\n                            [(ngModel)]=\"selectedRangeCalendarCenter\"\r\n                            [drops]=\"dropsDown\"\r\n                            [opens]=\"opensLeft\"\r\n                            [locale]=\"localeSet\"\r\n                            [ranges]=\"ranges\"\r\n                            [showCustomRangeLabel]=\"true\"\r\n                            [showCancel]=\"true\"\r\n                            [linkedCalendars]=\"true\"\r\n                            [alwaysShowCalendars]=\"true\"\r\n                            [showRangeLabelOnInput]=\"false\"\r\n                            [keepCalendarOpeningWithRange]=\"false\"\r\n                            [closeOnAutoApply]=\"true\"\r\n                            [autoApply]=\"false\"\r\n                            [isTooltipDate]=\"isTooltipDate\"\r\n                            [isCustomDate]=\"isCustomDate\"\r\n                            [isInvalidDate]=\"isInvalidDate\"\r\n                            (datesUpdated)=\"datesUpdatedRange($event)\"\r\n                            aria-describedby=\"rangeCalendarAutoLeftDesc\"\r\n                        />\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchDefault>\r\n                        <div [ngClass]=\"{'input-group': !is_material}\"\r\n                            class=\"{{isFutureDate || invalidDate || datePicker.hasError('matDatepickerMax') || datePicker.hasError('matDatepickerMin') || datePicker.hasError('matDatepickerParse') || (!inputValue && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\">\r\n                            <mat-form-field floatLabel=\"{{!is_material?'never':'auto'}}\">\r\n                                <mat-label *ngIf='is_material'>{{fieldData.field_label}}</mat-label>\r\n                                <!-- <input matInput [textMask]=\"maskData\" [ngModel]=\"shadowValue\" -->\r\n\r\n                                <ng-container *ngIf=\"hide\">\r\n                                    <ng-container *ngTemplateOutlet=\"maskDateInputs; context:{uiType:'default', picker: picker}\"></ng-container>\r\n                                </ng-container>\r\n                                \r\n                                <input matInput [ngModel]=\"shadowValue\" [mask]=\"maskString\"\r\n                                    (blur)=\"onBlurDP($event.target.value);onBlurDPSetState($event.target.value,dateField)\"\r\n                                    (keyup)=\"onDateInput($event.target.value); setState(dateField, datePickerState)\"\r\n                                    (change)=\"onDateInput($event.target.value, true)\"\r\n                                    (focus)=\"!allowManualEntry && setHiddenOverlay()\"\r\n                                    (click)=\"!allowManualEntry && picker.open()\"\r\n                                    placeholder=\"{{fieldData.placeholder_text}}\" [disabled]=\"!isEditable\"\r\n                                    [readonly]=\"!allowManualEntry\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [required]=\"is_material && isMandatory\"\r\n                                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                                    #dateField=\"ngModel\" id=\"{{fieldData.unique_id}}_masktext\" [hidden]=\"hide\">\r\n\r\n                                <input class=\"shadow-dateInput\" [min]=\"minDatex\" [max]=\"maxDatex\" [matDatepicker]=\"picker\"\r\n                                    [(ngModel)]=\"maskInputValue\" #datePicker=\"ngModel\" readonly\r\n                                    (dateChange)=\"onDateChange()\"\r\n                                    id=\"{{fieldData.unique_id}}_masktext\" tabindex=\"-1\">\r\n                                <mat-icon class=\"mat-icon-class\" *ngIf=\"isEditable\" alt=\"Calender Icon Image\"\r\n                                    aria-label=\"close date picker\" matDatepickerToggleIcon [hidden]=\"!showCross\"\r\n                                    (click)=\"clearDate($event)\">\r\n                                    clear</mat-icon>\r\n                                <mat-datepicker-toggle matSuffix [for]=\"picker\" [attr.tabindex]=\"tabIndexValue\"\r\n                                    [disabled]=\"!isEditable\">\r\n                                </mat-datepicker-toggle>\r\n                                <mat-datepicker #picker\r\n                                    (closed)=\"onNoDateSelection();setState({touched:true,dirty:dateField.dirty}, datePickerState)\"\r\n                                    (opened)=\"toggleModalCssClass()\"></mat-datepicker>\r\n                            </mat-form-field>\r\n                            <ng-template *ngTemplateOutlet=\"errorMassageTemplate; context:{datePicker:datePicker}\"></ng-template>\r\n                        </div>\r\n                    </ng-container>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n    </ng-template>\r\n</div>\r\n<!-- error massage Template -->\r\n<ng-template #errorMassageTemplate let-datePicker=\"datePicker\">\r\n    <ng-container *ngIf=\"multipleErrorMessage else singleErrorMessage\">\r\n        <ng-container *ngFor=\"let message of messages\">\r\n            <div class=\"error-message-wrapper\"\r\n                *ngIf=\"!invalidDate && !datePicker.hasError('matDatepickerParse') && !inputValue && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)\">\r\n                <p *ngIf=\"isMandatory\"\r\n                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                    {{returnMessageData(message.code).message_text}}\r\n                </p>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n    <ng-template #singleErrorMessage>\r\n        <div class=\"error-message-wrapper\" *ngIf=\"!inputValue && isMandatory && (showErrorOnNext)\">\r\n            <p [ngStyle]=\"{'color': errorMessageData.color}\">{{errorMessageData.message_text}}</p>\r\n        </div>\r\n    </ng-template>\r\n\r\n    <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n        <div class=\"error-message-wrapper\">\r\n            <div>\r\n                <p [ngStyle]=\"{'color': item.value.color}\">\r\n                    {{item.value.message_text}}</p>\r\n            </div>\r\n        </div>\r\n    </ng-container>\r\n    \r\n    <div class=\"error-message-validation\">\r\n        <div>\r\n            <p class=\"error\"\r\n                *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMax')\">\r\n                {{additionalParameter['max_date_error']}}</p>\r\n            <p class=\"error\"\r\n                *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMin')\">\r\n                {{additionalParameter['min_date_error']}}</p>\r\n            <p class=\"error\" *ngIf=\"!invalidDate && isFutureDate\">\r\n                {{additionalParameter['future_date_error']}}</p>\r\n            <p class=\"error\" *ngIf=\"invalidDate || datePicker.hasError('matDatepickerParse')\">\r\n                {{additionalParameter['invalid_date_error']}}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Tooltip with informaion icon -->\r\n    <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n        class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n        [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n        i\r\n    </button>\r\n</ng-template>\r\n\r\n<!-- date range error massage Template -->\r\n<ng-template #dateRangeErrorMassageTemplate let-datePicker=\"datePicker\">\r\n    <ng-container *ngIf=\"multipleErrorMessage\">\r\n        <ng-container *ngFor=\"let message of messages\">\r\n            <div class=\"error-message-wrapper\"\r\n                *ngIf=\"!invalidDate && !datePicker.hasError('matDatepickerParse') && !endDateRangeDisp && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)\">\r\n                <p *ngIf=\"isMandatory\"\r\n                    [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                    {{returnMessageData(message.code).message_text}}\r\n                </p>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n    <div class=\"error-message-validation\">\r\n        <div>\r\n            <p class=\"error\"\r\n                *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMax')\">\r\n                {{additionalParameter['max_date_error']}}</p>\r\n            <p class=\"error\"\r\n                *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMin')\">\r\n                {{additionalParameter['min_date_error']}}</p>\r\n            <p class=\"error\" *ngIf=\"!invalidDate && isFutureDate\">\r\n                {{additionalParameter['future_date_error']}}</p>\r\n            <p class=\"error\" *ngIf=\"invalidDate || datePicker.hasError('matDatepickerParse')\">\r\n                {{additionalParameter['invalid_date_error']}}</p>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Tooltip with informaion icon -->\r\n    <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n        class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n        [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n        i\r\n    </button>\r\n</ng-template>\r\n<!-- Tooltip Template -->\r\n<!-- Tooltip Template -->\r\n<!-- <ng-template #tooltipTemplate>\r\n    <div class=\"tooltip_container\">\r\n        <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n    </div>\r\n</ng-template> -->\r\n\r\n<ng-template #maskDateInputs let-uiType=\"uiType\" let-picker=\"picker\">\r\n    @switch (uiType) {\r\n        @case ('with_time') {\r\n            <input class=\"masked-input\" matInput [ngModel]=\"redactedValue\"\r\n                (focus)=\"picker.open()\"\r\n                (click)=\"picker.open()\"\r\n                placeholder=\"{{fieldData.placeholder_text}}\" [disabled]=\"!isEditable\" \r\n                [attr.tabindex]=\"tabIndexValue\"\r\n                [required]=\"is_material && isMandatory\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                #dateField=\"ngModel\" id=\"{{fieldData.unique_id}}_masktext_redacted\" [readonly]=\"true\">\r\n        }\r\n        @case ('default') {\r\n            <input class=\"masked-input\" matInput [ngModel]=\"redactedValue\"\r\n                (focus)=\"setHiddenOverlay()\"\r\n                (click)=\"picker.open()\"\r\n                placeholder=\"{{fieldData.placeholder_text}}\" [disabled]=\"!isEditable\" [attr.tabindex]=\"tabIndexValue\"\r\n                [required]=\"is_material && isMandatory\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                #dateField=\"ngModel\" id=\"{{fieldData.unique_id}}_masktext_redacted\" [readonly]=\"true\">\r\n        }\r\n    }\r\n</ng-template>", styles: [".datepickerHld .form-control{border-radius:0;border-color:#d1d1d1}.datepickerHld .form-control:disabled{cursor:not-allowed}.datepickerHld .input-group-text{border-radius:0;border-color:#d1d1d1;padding:0 1px;background:#fff}.datepickerHld .input-group-text .btn-calender{padding:16px 18px;border:0;background-size:20px auto}.datepickerHld .input-group-append{margin-left:-1px;height:calc(1.5em + .75rem + 2px)}.datepickerHld .mat-datepicker-input{width:85%}.mat-icon-class{cursor:pointer;position:absolute;float:right;top:2px;right:-3px;color:#0000008a}.day-field,.month-field{width:60px;text-align:center;margin-right:10px}.year-field{width:80px;text-align:center}.error{color:red}.error span{font-weight:700}.shadow-dateInput{position:absolute;width:1px;height:1px;opacity:0}::ng-deep .mat-calendar-content button.mat-calendar-body-cell{position:absolute;height:100%}::ng-deep .mat-calendar-content td.mat-calendar-body-cell{position:relative;height:0}::ng-deep .date-range-continer .mat-datepicker-toggle{position:absolute;right:15px;top:50px}.date-range-continer .invalid{border:1px #f00 solid}.date-range-continer .clear-date-range{cursor:pointer;position:absolute;float:right;top:59px;right:51px;color:#0000008a}.masked-input{border:none;background:none}.masked-input:focus{outline:none}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DatePipe }, { type: i2.UserDataHandlerService }, { type: i3.SharedEventsServiceService }, { type: i4.CEEInternalEmitterService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.MatDialog }, { type: i9.MatSnackBar }, { type: i10.HttpClient }, { type: i0.ElementRef }, { type: i0.Renderer2 }, { type: Document, decorators: [{
                type: Inject,
                args: [DOCUMENT]
            }] }], { datePicker: [{
            type: ViewChild,
            args: ['datePicker']
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], rowData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeDateComponent, { className: "CeeDateComponent", filePath: "lib\\field-components\\cee-date\\cee-date.component.ts", lineNumber: 54 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWRhdGUuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWRhdGUvY2VlLWRhdGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWRhdGUvY2VlLWRhdGUuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTJCLFNBQVMsRUFBd0IsTUFBTSxFQUEyQyxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDaEwsT0FBTyxFQUFZLFFBQVEsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ25HLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxpRUFBaUU7QUFDakUsT0FBTyxFQUE4QyxpQkFBaUIsRUFBYSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUN2SCxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQVdqQyxzREFBc0Q7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0sOENBQThDLENBQUM7QUFDMUYsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFB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QjtrQkFBMUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSzs7a0ZBVkcsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLFJlbmRlcmVyMiwgSW5qZWN0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEFmdGVyVmlld0luaXQsIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRGF0ZVBpcGUsIERPQ1VNRU5ULCBOZ0NsYXNzLCBOZ1N0eWxlLCBOZ1N3aXRjaCwgTmdUZW1wbGF0ZU91dGxldCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG4vLyBpbXBvcnQgeyBCc0RhdGVwaWNrZXJDb25maWcgfSBmcm9tICduZ3gtYm9vdHN0cmFwL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgTmdNb2RlbCwgQ29udHJvbFZhbHVlQWNjZXNzb3IsIE5HX1ZBTFVFX0FDQ0VTU09SLCBGb3JtR3JvdXAsIEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgeyBjb25mb3JtVG9NYXNrIH0gZnJvbSAnYW5ndWxhcjItdGV4dC1tYXNrJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTmd4TWF0RGF0ZXRpbWVQaWNrZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci1tYXRlcmlhbC1jb21wb25lbnRzL2RhdGV0aW1lLXBpY2tlcic7XHJcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBDdXN0b21Ub29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9hcHAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgcHJvdmlkZU5neE1hc2ssIE5neE1hc2tEaXJlY3RpdmUgfSBmcm9tICduZ3gtbWFzaydcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5pbXBvcnQgZGF5anMsIHtEYXlqc30gZnJvbSBcImRheWpzXCI7XHJcbmltcG9ydCB7XHJcbiAgICBOZ3hEYXRlcmFuZ2VwaWNrZXJCb290c3RyYXBNb2R1bGUsXHJcbiAgICBOZ3hEYXRlcmFuZ2VwaWNrZXJMb2NhbGVTZXJ2aWNlLFxyXG4gIH0gZnJvbSAnbmd4LWRhdGVyYW5nZXBpY2tlci1ib290c3RyYXAnO1xyXG5leHBvcnQgY29uc3QgQ1VTVE9NX0lOUFVUX0NPTlRST0xfVkFMVUVfQUNDRVNTT1I6IGFueSA9IHtcclxuICAgIHByb3ZpZGU6IE5HX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gQ2VlRGF0ZUNvbXBvbmVudCksXHJcbiAgICBtdWx0aTogdHJ1ZVxyXG59O1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtZGF0ZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLWRhdGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLWRhdGUuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIENVU1RPTV9JTlBVVF9DT05UUk9MX1ZBTFVFX0FDQ0VTU09SLFxyXG4gICAgICAgIHByb3ZpZGVOZ3hNYXNrKCksXHJcbiAgICAgICAgTmd4RGF0ZXJhbmdlcGlja2VyTG9jYWxlU2VydmljZVxyXG4gICAgXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmd4RGF0ZXJhbmdlcGlja2VyQm9vdHN0cmFwTW9kdWxlLCBOZ1RlbXBsYXRlT3V0bGV0LCBDb21tb25Nb2R1bGUsIE1hdFRvb2x0aXBNb2R1bGUsIE5nU3dpdGNoLCBGb3Jtc01vZHVsZSwgTmdTdHlsZSwgTmdDbGFzcywgTWF0Rm9ybUZpZWxkTW9kdWxlLCBOZ3hNYXREYXRldGltZVBpY2tlck1vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0RGF0ZXBpY2tlck1vZHVsZSxcclxuICAgICAgICBDdXN0b21Ub29sdGlwRGlyZWN0aXZlLCBOZ3hNYXNrRGlyZWN0aXZlLE1hdElucHV0TW9kdWxlLFRvb2x0aXBNb2R1bGVcclxuICAgIF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDZWVEYXRlQ29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBAVmlld0NoaWxkKCdkYXRlUGlja2VyJykgZGF0ZVBpY2tlcjogTmdNb2RlbDtcclxuXHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG5cclxuICAgIG1pbkRhdGV4OiBEYXRlO1xyXG4gICAgbWF4RGF0ZXg6IERhdGU7XHJcbiAgICBpc1ZhbGlkID0gdHJ1ZTtcclxuICAgIHNob3dDcm9zcyA9IGZhbHNlO1xyXG5cclxuICAgIGlucHV0VmFsdWU6IERhdGU7XHJcbiAgICBpbnB1dERhdGVSYW5nZVZhbHVlOiBhbnk7XHJcbiAgICBlbnRyeUZpZWxkczogc3RyaW5nW10gPSBbXTtcclxuICAgIGlucHV0VmFsdWVEYXk7XHJcbiAgICBpbnB1dFZhbHVlTW9udGg7XHJcbiAgICBpbnB1dFZhbHVlWWVhcjtcclxuICAgIGRheUZvcm1hdEVycm9yOiBib29sZWFuO1xyXG4gICAgbW9udGhGb3JtYXRFcnJvcjogYm9vbGVhbjtcclxuICAgIHllYXJGb3JtYXRFcnJvcjogYm9vbGVhbjtcclxuICAgIGRheUVycm9yOiBib29sZWFuO1xyXG4gICAgbW9udGhFcnJvcjogYm9vbGVhbjtcclxuICAgIHllYXJFcnJvcjogYm9vbGVhbjtcclxuICAgIG5vd0RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZGF5Qm94U3RhdGUgPSB7XHJcbiAgICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgZGlydHk6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgbW9udGhCb3hTdGF0ZSA9IHtcclxuICAgICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgICBkaXJ0eTogZmFsc2VcclxuICAgIH07XHJcbiAgICB5ZWFyQm94U3RhdGUgPSB7XHJcbiAgICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgZGlydHk6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgZGF0ZVBpY2tlclN0YXRlID0ge1xyXG4gICAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5OiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGVudHJ5RmllbGRzUG9zc2libGVWYWx1ZXMgPSB7XHJcbiAgICAgICAgZGF0ZTogW10sXHJcbiAgICAgICAgbW9udGg6IFtdLFxyXG4gICAgICAgIHllYXI6IFtdXHJcbiAgICB9O1xyXG4gICAgbnVtYmVyRXJyb3I6IGJvb2xlYW47XHJcbiAgICBhbGxvd01hbnVhbEVudHJ5OiBib29sZWFuO1xyXG4gICAgaW52YWxpZERhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdNTS9ERC9ZWVlZJztcclxuICAgIGFwaURhdGVGb3JtYXQ6IHN0cmluZyA9ICdNTS9ERC9ZWVlZJztcclxuICAgIG1vZGFsR2VuZXJpY0Nzc0NsYXNzID0gJyc7XHJcbiAgICBtYXNrU3RyaW5nID0gJzAwLzAwLzAwMDAnO1xyXG4gICAgYXV0b2NvbXBsZXRlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHdpdGhUaW1lOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB0aW1lQ29uZmlnID0geyBob3VyOiAxLCBtaW51dGU6IDEsIHNlY29uZDogMSB9O1xyXG4gICAgZW5hYmxlTWVyaWRpYW46IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgc3RhcnQ6IGFueTtcclxuICAgIGVuZDogYW55O1xyXG4gICAgZGF0ZVJhbmdlU3RhcnRQbGFjZWhvbGRlcjogYW55ID0gXCJcIjtcclxuICAgIGRhdGVSYW5nZUVuZFBsYWNlaG9sZGVyOiBhbnkgPSBcIlwiO1xyXG4gICAgc3RhcnREYXRlUmFuZ2VEaXNwOiBhbnk7XHJcbiAgICBlbmREYXRlUmFuZ2VEaXNwOiBhbnk7XHJcblxyXG4gICAgLy8gcmFuZ2UgPSBuZXcgRm9ybUdyb3VwKHtcclxuICAgIC8vICAgICBzdGFydER0OiBuZXcgRm9ybUNvbnRyb2w8RGF0ZSB8IG51bGw+KG51bGwpLFxyXG4gICAgLy8gICAgIGVuZER0OiBuZXcgRm9ybUNvbnRyb2w8RGF0ZSB8IG51bGw+KG51bGwpLFxyXG4gICAgLy8gfSk7XHJcbiAgICBkcm9wc0Rvd24gPSAnZG93bic7XHJcbiAgICBkcm9wc1VwID0gJ3VwJztcclxuICAgIG9wZW5zUmlnaHQgPSAncmlnaHQnO1xyXG4gICAgb3BlbnNDZW50ZXIgPSAnY2VudGVyJztcclxuICAgIG9wZW5zTGVmdCA9ICdsZWZ0JztcclxuICAgIHNlbGVjdGVkUmFuZ2VDYWxlbmRhckNlbnRlcjogYW55O1xyXG4gICAgbWF4RGF0ZT86IGRheWpzLkRheWpzO1xyXG4gICAgbWluRGF0ZT86IGRheWpzLkRheWpzO1xyXG4gICAgaW52YWxpZERhdGVzOiBkYXlqcy5EYXlqc1tdID0gW107XHJcbiAgICByYW5nZXM6IGFueSA9IHtcclxuICAgICAgVG9kYXk6IFtkYXlqcygpLnN0YXJ0T2YoJ2RheScpLCBkYXlqcygpLmVuZE9mKCdkYXknKV0sXHJcbiAgICB9O1xyXG4gICAgbG9jYWxlID0ge1xyXG4gICAgICBmaXJzdERheTogMSxcclxuICAgICAgc3RhcnREYXRlOiBkYXlqcygpLnN0YXJ0T2YoJ2RheScpLFxyXG4gICAgICBlbmREYXRlOiBkYXlqcygpLmVuZE9mKCdkYXknKSxcclxuICAgICAgZm9ybWF0OiAnREQvTU0vWVlZWScsXHJcbiAgICAgIGFwcGx5TGFiZWw6ICdBcHBseScsXHJcbiAgICAgIGNhbmNlbExhYmVsOiAnQ2FuY2VsJyxcclxuICAgICAgZnJvbUxhYmVsOiAnRnJvbScsXHJcbiAgICAgIHRvTGFiZWw6ICdUbycsXHJcbiAgICB9O1xyXG4gICAgbG9jYWxlU2V0OiBhbnk7XHJcbiAgICB0b29sdGlwcyA9IFtcclxuICAgICAgeyBkYXRlOiBkYXlqcygpLCB0ZXh0OiAnVG9kYXkgaXMganVzdCB1bnNlbGVjdGFibGUnIH0sXHJcbiAgICAgIHsgZGF0ZTogZGF5anMoKS5hZGQoMiwgJ2RheXMnKSwgdGV4dDogJ1llZWVlZXMhISEnIH0sXHJcbiAgICBdO1xyXG4gICAgbm9uZWRpdGFibGVQbGFjZWhvbGRlciA9IFwiXCI7XHJcbiAgICBmaWVsZFBsYWNlaG9sZGVyOiBhbnkgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBvdmVybGF5Q29udGFpbmVyOiBIVE1MRWxlbWVudDtcclxuXHJcbiAgICBoaWRlOiBib29sZWFuID0gZmFsc2U7ICAgIFxyXG4gICAgZGF0ZU1hc2tGb3JtYXQ6IHN0cmluZyA9IHRoaXMuZGF0ZUZvcm1hdDtcclxuICAgIHB1YmxpYyBkYXRhVGltZW91dDogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBkYXRlcGlwZTogRGF0ZVBpcGUsXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgQEluamVjdChET0NVTUVOVCkgcHJpdmF0ZSBkb2N1bWVudDogRG9jdW1lbnRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCk7XHJcbiAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlQ2FsZW5kYXJDZW50ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydERhdGU6IGRheWpzKCkuc3RhcnRPZignZGF5JyksXHJcbiAgICAgICAgICAgICAgICBlbmREYXRlOiBkYXlqcygpLmVuZE9mKCdkYXknKSxcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgZ2V0IGlzRnV0dXJlRGF0ZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gKHRoaXMuaW5wdXRWYWx1ZSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2Z1dHVyZV9kYXRlX2Vycm9yJ10gJiYgbmV3IERhdGUodGhpcy5pbnB1dFZhbHVlKSA+IG5ldyBEYXRlKCkpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldCBzaGFkb3dWYWx1ZSgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgJiYgdGhpcy5pc1ZhbGlkRGF0ZSh0aGlzLmlucHV0VmFsdWUpID8gbW9tZW50LmRlZmF1bHQodGhpcy5pbnB1dFZhbHVlLnRvSVNPU3RyaW5nKCkpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpIDogbnVsbDtcclxuICAgIH1cclxuICAgIGdldCByZWRhY3RlZFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0UmVkYWN0ZWREYXRlKHRoaXMuc2hhZG93VmFsdWUpO1xyXG4gICAgfVxyXG4gICAgc2V0IHNoYWRvd1ZhbHVlKHY6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBtb21lbnQuZGVmYXVsdCh2LCB0aGlzLmRhdGVGb3JtYXQpLnRvRGF0ZSgpO1xyXG4gICAgICAgIGlmIChkYXRlICE9PSB0aGlzLmlucHV0VmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNoYWRvd1N0YXJ0VmFsdWUoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnB1dERhdGVSYW5nZVZhbHVlICYmIHRoaXMuaW5wdXREYXRlUmFuZ2VWYWx1ZS5sZW5ndGg+MCAmJiB0aGlzLmlucHV0RGF0ZVJhbmdlVmFsdWVbMF0gJiYgdGhpcy5pc1ZhbGlkRGF0ZSh0aGlzLmlucHV0RGF0ZVJhbmdlVmFsdWVbMF0pID8gbW9tZW50LmRlZmF1bHQobmV3IERhdGUodGhpcy5pbnB1dERhdGVSYW5nZVZhbHVlWzBdKS50b0lTT1N0cmluZygpKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KSA6IG51bGw7XHJcbiAgICB9XHJcbiAgICBzZXQgc2hhZG93U3RhcnRWYWx1ZSh2OiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaW5wdXREYXRlUmFuZ2VWYWx1ZSB8fCAodGhpcy5pbnB1dERhdGVSYW5nZVZhbHVlICYmIHRoaXMuaW5wdXREYXRlUmFuZ2VWYWx1ZS5sZW5ndGg+MCAmJiBuZXcgRGF0ZSh2KSAhPT0gdGhpcy5pbnB1dERhdGVSYW5nZVZhbHVlWzBdKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0RGF0ZVJhbmdlVmFsdWVbMF0gPSBuZXcgRGF0ZSh2KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHNoYWRvd0VuZFZhbHVlKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXREYXRlUmFuZ2VWYWx1ZSAmJiB0aGlzLmlucHV0RGF0ZVJhbmdlVmFsdWUubGVuZ3RoPjEgJiYgdGhpcy5pbnB1dERhdGVSYW5nZVZhbHVlWzFdICYmIHRoaXMuaXNWYWxpZERhdGUodGhpcy5pbnB1dERhdGVSYW5nZVZhbHVlWzFdKSA/IG1vbWVudC5kZWZhdWx0KG5ldyBEYXRlKHRoaXMuaW5wdXREYXRlUmFuZ2VWYWx1ZVsxXSkudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuZGF0ZUZvcm1hdCkgOiBudWxsO1xyXG4gICAgfVxyXG4gICAgc2V0IHNoYWRvd0VuZFZhbHVlKHY6IHN0cmluZykge1xyXG4gICAgICAgIGlmICghdGhpcy5pbnB1dERhdGVSYW5nZVZhbHVlIHx8ICh0aGlzLmlucHV0RGF0ZVJhbmdlVmFsdWUgJiYgdGhpcy5pbnB1dERhdGVSYW5nZVZhbHVlLmxlbmd0aD4xICYmIG5ldyBEYXRlKHYpICE9PSB0aGlzLmlucHV0RGF0ZVJhbmdlVmFsdWVbMV0pKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXREYXRlUmFuZ2VWYWx1ZVsxXSA9IG5ldyBEYXRlKHYpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgY3VyckRhdGUoKTogRGF0ZSB7XHJcbiAgICAgICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgICAgIGQuc2V0SG91cnMoMCwgMCwgMCwgMCk7XHJcbiAgICAgICAgcmV0dXJuIGQ7XHJcbiAgICB9XHJcbiAgICBnZXQgbWFza0lucHV0VmFsdWUoKTogRGF0ZSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5wdXRWYWx1ZTtcclxuICAgIH1cclxuICAgIHNldCBtYXNrSW5wdXRWYWx1ZSh2OiBEYXRlKSB7XHJcbiAgICAgICAgaWYgKHYgIT09IHRoaXMuaW5wdXRWYWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgICAgICB0aGlzLm1vZGFsR2VuZXJpY0Nzc0NsYXNzID0gJ21vZGFsLWRhdGUtcGlja2VyLScgKyB0aGlzLnN0ZXBJZDtcclxuICAgIH1cclxuXHJcbiAgICBpc0ludmFsaWREYXRlID0gKG06IGRheWpzLkRheWpzKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW52YWxpZERhdGVzLnNvbWUoKGQpID0+IGQuaXNTYW1lKG0sICdkYXknKSk7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICAgIGlzQ3VzdG9tRGF0ZSA9IChkYXRlOiBkYXlqcy5EYXlqcykgPT4ge1xyXG4gICAgICAgIHJldHVybiBkYXRlLm1vbnRoKCkgPT09IDAgfHwgZGF0ZS5tb250aCgpID09PSA2ID8gJ215Y3VzdG9tZGF0ZScgOiBmYWxzZTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBpc1Rvb2x0aXBEYXRlID0gKG06IGRheWpzLkRheWpzKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG9vbHRpcCA9IHRoaXMudG9vbHRpcHMuZmluZCgodHQpID0+IHR0LmRhdGUuaXNTYW1lKG0sICdkYXknKSk7XHJcbiAgICAgICAgcmV0dXJuIHRvb2x0aXAgPyB0b29sdGlwLnRleHQgOiBmYWxzZTtcclxuICAgICAgfTtcclxuICAgIFxyXG4gICAgICBkYXRlc1VwZGF0ZWRSYW5nZSgkZXZlbnQ6IE9iamVjdCkge1xyXG4gICAgICAgIGlmKCRldmVudFsnZW5kRGF0ZSddICYmICRldmVudFsnc3RhcnREYXRlJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREYXRlUmFuZ2VWYWx1ZSh7dmFsdWU6IHtzdGFydERhdGU6IGRheWpzKCRldmVudFsnc3RhcnREYXRlJ10pLmZvcm1hdCh0aGlzLmFwaURhdGVGb3JtYXQpLCBlbmREYXRlOiBkYXlqcygkZXZlbnRbJ2VuZERhdGUnXSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCl9LCB0b3VjaGVkOnRydWUsIGRpcnR5OiBmYWxzZX0sIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICBcclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgLy8gbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAvLyAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICBpZih0aGlzLm92ZXJsYXlDb250YWluZXIhPXVuZGVmaW5lZCAmJiB0aGlzLm92ZXJsYXlDb250YWluZXIhPW51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW5kZXJlci5hcHBlbmRDaGlsZCh0aGlzLmRvY3VtZW50LmJvZHksIHRoaXMub3ZlcmxheUNvbnRhaW5lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsZWFuIHVwIHN1YnNjcmlwdGlvbnNcclxuICAgICAgICBPYmplY3Qua2V5cyh0aGlzLnZhcmlhYmxlT2JqZWN0KS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhcmlhYmxlT2JqZWN0W2tleV0gJiYgdHlwZW9mIHRoaXMudmFyaWFibGVPYmplY3Rba2V5XS51bnN1YnNjcmliZSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdCA9IHt9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsZWFuIHVwIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICAgIGNvbnN0IGRheUZpZWxkID0gdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQ/LnF1ZXJ5U2VsZWN0b3IoJyNkYXlGaWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoRmllbGQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudD8ucXVlcnlTZWxlY3RvcignI21vbnRoRmllbGQnKTtcclxuICAgICAgICBjb25zdCB5ZWFyRmllbGQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudD8ucXVlcnlTZWxlY3RvcignI3llYXJGaWVsZCcpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIFtkYXlGaWVsZCwgbW9udGhGaWVsZCwgeWVhckZpZWxkXS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkICYmIGZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICAgICAgICAgIGZpZWxkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZmllbGQuaW5wdXRIYW5kbGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZih0aGlzLmRhdGFUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRhdGFUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsZWFyIGFsbCBvYmplY3QgcmVmZXJlbmNlc1xyXG4gICAgICAgIC8vdGhpcy5pbnB1dFZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmlucHV0RGF0ZVJhbmdlVmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWluRGF0ZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWF4RGF0ZXggPSBudWxsO1xyXG4gICAgICAgIHRoaXMubm93RGF0ZSA9IG51bGw7XHJcbiAgICAgICAgLy8gdGhpcy5zdGFydERhdGVSYW5nZURpc3AgPSBudWxsO1xyXG4gICAgICAgIC8vIHRoaXMuZW5kRGF0ZVJhbmdlRGlzcCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlQ2FsZW5kYXJDZW50ZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMucmFuZ2VzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmludmFsaWREYXRlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMudG9vbHRpcHMgPSBbXTtcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYXIgc2VydmljZSByZWZlcmVuY2VzXHJcbiAgICAgICAgdGhpcy5lbGVtZW50UmVmID0gbnVsbDtcclxuICAgICAgICB0aGlzLnJlbmRlcmVyID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDYWxsIHBhcmVudCBjbGVhbnVwXHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIFxyXG4gICAgICAgIC8vIGlmICh0aGlzLmRhdGVQaWNrZXIpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5kYXRlUGlja2VyLmNvbnRyb2wuc2V0VmFsdWUobnVsbCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGF0ZVBpY2tlci5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGF0ZVBpY2tlci5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRhdGVQaWNrZXIuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgXHJcbiAgICAgICAgLy90aGlzLnVwZGF0ZUZpZWxkRGF0YSgnJyk7XHJcbiAgICBcclxuICAgICAgICAvLyBpZiAodGhpcy5vdmVybGF5Q29udGFpbmVyKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMucmVuZGVyZXIucmVtb3ZlQ2hpbGQodGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKSwgdGhpcy5vdmVybGF5Q29udGFpbmVyKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcbiAgICBcclxuXHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsndWlfdHlwZSddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsndWlfdHlwZSddID09PSAnd2l0aF90aW1lJykge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVGb3JtYXQgPSAnTU0vREQvWVlZWSBoaDptbSBBJztcclxuICAgICAgICAgICAgdGhpcy5hcGlEYXRlRm9ybWF0ID0gJ01NL0REL1lZWVkgSEg6bW0nO1xyXG4gICAgICAgICAgICB0aGlzLndpdGhUaW1lID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRNaW5hbmRNYXhWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy50YWJJbmRleFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUYWJJbmRleCddO1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0RhdGUgRm9ybWF0J10pIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEYXRlIEZvcm1hdCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBUEkgRGF0ZSBGb3JtYXQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGVGb3JtYXQgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FQSSBEYXRlIEZvcm1hdCddO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydQaWNrZXJTdGVwJ10pIHtcclxuICAgICAgICAgICAgY29uc3QgcFN0ZXAgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1BpY2tlclN0ZXAnXS5zcGxpdChcInxcIikubWFwKHYgPT4geyByZXR1cm4gTnVtYmVyKHYpID8gTnVtYmVyKHYpIDogMSB9KTtcclxuICAgICAgICAgICAgaWYgKHBTdGVwLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lQ29uZmlnLmhvdXIgPSBwU3RlcFswXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUNvbmZpZy5taW51dGUgPSBwU3RlcFsxXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZUNvbmZpZy5zZWNvbmQgPSBwU3RlcFsyXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5kYXRlRm9ybWF0LmluY2x1ZGVzKCdIJykpIHtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVNZXJpZGlhbiA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlTWVyaWRpYW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWyd1aV90eXBlJ10gPT09IFwiZGF0ZV9yYW5nZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5maWVsZERhdGEuaHRtbF9pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlUmFuZ2VEaXNwID0gKCB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAwICYmIHZhbHVlWzBdICkgPyBuZXcgRGF0ZSh2YWx1ZVswXSkgOiBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmVuZERhdGVSYW5nZURpc3AgPSAoIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDEgJiYgdmFsdWVbMV0gKSA/IG5ldyBEYXRlKHZhbHVlWzFdKSA6IG51bGw7XHJcbiAgICAgICAgICAgIGlmKCghdmFsdWUgfHwgdmFsdWUgPT0gXCJDVVJSX0RBVEVcIikgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10gPT09IFwiQ1VSUl9EQVRFXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnREYXRlUmFuZ2VEaXNwID0gdGhpcy5jdXJyRGF0ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRGF0ZVJhbmdlRGlzcCA9IHRoaXMuY3VyckRhdGU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldERhdGVSYW5nZVZhbHVlKHt2YWx1ZToge3N0YXJ0RGF0ZTogbW9tZW50LmRlZmF1bHQodGhpcy5jdXJyRGF0ZS50b0lTT1N0cmluZygpKS5mb3JtYXQodGhpcy5hcGlEYXRlRm9ybWF0KSwgZW5kRGF0ZTogbW9tZW50LmRlZmF1bHQodGhpcy5jdXJyRGF0ZS50b0lTT1N0cmluZygpKS5mb3JtYXQodGhpcy5hcGlEYXRlRm9ybWF0KX0sIHRvdWNoZWQ6dHJ1ZSwgZGlydHk6IGZhbHNlfSwgdHJ1ZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3VpX3R5cGUnXSA9PT0gXCJkYXRlX3JhbmdlX2Jvb3N0cmFwXCIpIHtcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKTtcclxuICAgICAgICAgICAgaWYodmFsdWUpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFJhbmdlQ2FsZW5kYXJDZW50ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhcnREYXRlOiAoIHZhbHVlICYmIHZhbHVlLmxlbmd0aCA+IDAgJiYgdmFsdWVbMF0gKSA/IG5ldyBEYXRlKHZhbHVlWzBdKSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogKCB2YWx1ZSAmJiB2YWx1ZS5sZW5ndGggPiAxICYmIHZhbHVlWzFdICkgPyBuZXcgRGF0ZSh2YWx1ZVsxXSkgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCghdmFsdWUgfHwgdmFsdWUgPT0gXCJDVVJSX0RBVEVcIikgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10gPT09IFwiQ1VSUl9EQVRFXCIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRSYW5nZUNhbGVuZGFyQ2VudGVyID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXJ0RGF0ZTogdGhpcy5jdXJyRGF0ZSxcclxuICAgICAgICAgICAgICAgICAgICBlbmREYXRlOiB0aGlzLmN1cnJEYXRlLFxyXG4gICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREYXRlUmFuZ2VWYWx1ZSh7dmFsdWU6IHtzdGFydERhdGU6IG1vbWVudC5kZWZhdWx0KHRoaXMuY3VyckRhdGUudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCksIGVuZERhdGU6IG1vbWVudC5kZWZhdWx0KHRoaXMuY3VyckRhdGUudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCl9LCB0b3VjaGVkOnRydWUsIGRpcnR5OiBmYWxzZX0sIHRydWUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2NhbGVTZXQgPSB0aGlzLmxvY2FsZTtcclxuICAgICAgICAgICAgaWYodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkYXRlX3dpdGhfdGltZV9ib29zdHJhcCddID09PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZVNldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdERheTogMSxcclxuICAgICAgICAgICAgICAgICAgICBzdGFydERhdGU6IGRheWpzKCkuc3RhcnRPZignZGF5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgZW5kRGF0ZTogZGF5anMoKS5lbmRPZignZGF5JyksXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiAnREQvTU0vWVlZWSBISDptbTpzcycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbHlMYWJlbDogJ0FwcGx5JyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5jZWxMYWJlbDogJ0NhbmNlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZnJvbUxhYmVsOiAnRnJvbScsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9MYWJlbDogJ1RvJyxcclxuICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2Jvb3N0cmFwX2R1cmF0aW9uX2J0biddKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RGF0ZVJhbmdlcyh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2Jvb3N0cmFwX2R1cmF0aW9uX2J0biddKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gbW9tZW50LmRlZmF1bHQodGhpcy5yb3dEYXRhLnZhbHVlLCB0aGlzLmFwaURhdGVGb3JtYXQpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG1vbWVudC5kZWZhdWx0KHRoaXMucm93RGF0YS52YWx1ZSwgdGhpcy5hcGlEYXRlRm9ybWF0KS50b0RhdGUoKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWihkYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShtb21lbnQuZGVmYXVsdCh0aGlzLmlucHV0VmFsdWUpLmZvcm1hdCh0aGlzLmFwaURhdGVGb3JtYXQpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEJveERhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZmllbGRWYWx1ZSA9PT0gXCJJbnZhbGlkIGRhdGVcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZFZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRWYWx1ZSA9PT0gJ0NVUlJfREFURScpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IG1vbWVudC5kZWZhdWx0KHRoaXMuY3VyckRhdGUudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG1vbWVudC5kZWZhdWx0KHRoaXMuZmllbGRWYWx1ZSwgdGhpcy5hcGlEYXRlRm9ybWF0KS50b0RhdGUoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRWYWx1ZSAmJiBkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93Q3Jvc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRCb3hEYXRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydlbnRyeV9maWVsZHMnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmVudHJ5RmllbGRzID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydlbnRyeV9maWVsZHMnXS5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmVudHJ5RmllbGRzLmluY2x1ZGVzKCdkYXknKSkge1xyXG4gICAgICAgICAgICB0aGlzLm5vd0RhdGUuc2V0RGF0ZSh0aGlzLm5vd0RhdGUuZ2V0RGF0ZSgpICsgMSlcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlRGF5ID0gbW9tZW50LmRlZmF1bHQodGhpcy5ub3dEYXRlKS5mb3JtYXQoJ0REJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5lbnRyeUZpZWxkcy5pbmNsdWRlcygnbW9udGgnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWVNb250aCA9IG1vbWVudC5kZWZhdWx0KHRoaXMubm93RGF0ZSkuZm9ybWF0KCdNTScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMuZW50cnlGaWVsZHMuaW5jbHVkZXMoJ3llYXInKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWVZZWFyID0gbW9tZW50LmRlZmF1bHQodGhpcy5ub3dEYXRlKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnYWxsb3dfbWFudWFsX2VudHJ5J10pIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxvd01hbnVhbEVudHJ5ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydhbGxvd19tYW51YWxfZW50cnknXSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gdGhpcy5tYXNrU3RyaW5nID0gdGhpcy5nZXRNYXNrZWRJbnB1dFZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5tYXNrU3RyaW5nID0gdGhpcy5kYXRlRm9ybWF0LmluY2x1ZGVzKFwiQVwiKSA/IHRoaXMuZ2V0TWFza2VkSW5wdXRWYWx1ZSgpIDogbnVsbDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eShcIkNFRV9NQVNLX0RBVEVfRk9STUFUXCIpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGlkZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0ZU1hc2tGb3JtYXQgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NQVNLX0RBVEVfRk9STUFUJ10gIT0gXCJcIiA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX01BU0tfREFURV9GT1JNQVQnXSA6IHRoaXMuZGF0ZUZvcm1hdDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vZm9yIFZhbGlkYXRlIEFORCBNYW5kYXRvcnkgZXJyb3JcclxuICAgICAgICBpZiAodGhpcy5yb290RGF0YSAmJiB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddW3RoaXMuZmllbGREYXRhLmh0bWxfaWRdID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsndWlfdHlwZSddID09PSAnaW5wdXRfYm94ZXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZmllbGREYXRhLmh0bWxfaWQgKyAnX21hc2t0ZXh0JykuZm9jdXMoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBdXRvQ29tcGxldGVUZXh0J10pIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0F1dG9Db21wbGV0ZVRleHQnXSA9PT0gJ09GRicgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmllbGRQbGFjZWhvbGRlciA9IHRoaXMuZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQ7XHJcbiAgICAgICAgdGhpcy5ub25lZGl0YWJsZVBsYWNlaG9sZGVyID10aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9Ob25lZGl0YWJsZV9QbGFjZWhvbGRlciddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfTm9uZWRpdGFibGVfUGxhY2Vob2xkZXInXSA6IFwiXCI7XHJcbiAgICAgICAgaWYodGhpcy5ub25lZGl0YWJsZVBsYWNlaG9sZGVyICYmICF0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA9IHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsnZW1pdE9uRWRpdGFibGVTdGF0dXNDaGFuZ2VkXycgKyB0aGlzLmFwcERhdGEuaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkVkaXRhYmxlU3RhdHVzQ2hhbmdlZC5zdWJzY3JpYmUoKHJlcyk9PntcclxuICAgICAgICAgICAgaWYodGhpcy5maWVsZERhdGEudW5pcXVlX2lkID09IHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub25lZGl0YWJsZVBsYWNlaG9sZGVyICYmICF0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0ID0gdGhpcy5ub25lZGl0YWJsZVBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0ID0gdGhpcy5maWVsZFBsYWNlaG9sZGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IHBsYWNlaG9sZGVyID0gdGhpcy5maWVsZERhdGE/LnBsYWNlaG9sZGVyX3RleHQ/LnNwbGl0KCd8fCcpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUmFuZ2VTdGFydFBsYWNlaG9sZGVyICA9IHBsYWNlaG9sZGVyICYmIHBsYWNlaG9sZGVyLmxlbmd0aCA+IDAgPyBwbGFjZWhvbGRlclswXSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUmFuZ2VFbmRQbGFjZWhvbGRlciAgPSBwbGFjZWhvbGRlciAmJiBwbGFjZWhvbGRlci5sZW5ndGggPiAxID8gcGxhY2Vob2xkZXJbMV0gOiAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGxldCBwbGFjZWhvbGRlciA9IHRoaXMuZmllbGREYXRhPy5wbGFjZWhvbGRlcl90ZXh0Py5zcGxpdCgnfHwnKTtcclxuICAgICAgICB0aGlzLmRhdGVSYW5nZVN0YXJ0UGxhY2Vob2xkZXIgID0gcGxhY2Vob2xkZXIgJiYgcGxhY2Vob2xkZXIubGVuZ3RoID4gMCA/IHBsYWNlaG9sZGVyWzBdIDogJyc7XHJcbiAgICAgICAgdGhpcy5kYXRlUmFuZ2VFbmRQbGFjZWhvbGRlciAgPSBwbGFjZWhvbGRlciAmJiBwbGFjZWhvbGRlci5sZW5ndGggPiAxID8gcGxhY2Vob2xkZXJbMV0gOiAnJztcclxuICAgIH1cclxuXHJcbiAgICBzZXREYXRlUmFuZ2VzKHJhbmdlcyl7XHJcbiAgICAgICAgcmFuZ2VzLnNwbGl0KFwifHxcIikubWFwKHg9PntcclxuICAgICAgICAgICAgbGV0IGdldERhdGEgPSB7fTtcclxuICAgICAgICAgICAgbGV0IGdldGRhdGEgPSB0aGlzLnNldERhdGVWYWxSYW5nZXMoeC5hdCgtMSksIHguc3Vic3RyaW5nKDAsIHgubGVuZ3RoIC0gMSkpXHJcbiAgICAgICAgICAgIHRoaXMucmFuZ2VzW2dldGRhdGEubmFtZV0gPSBnZXRkYXRhLnZhbHVlO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGF0ZVZhbFJhbmdlcyh0eXBlLCBudW1iZXIpe1xyXG4gICAgICAgIGxldCBuYW1lLCB2YWx1ZTtcclxuICAgICAgICAvLyBpZih0eXBlID09PSBcImRcIiAmJiBudW1iZXIgPT09IDEpe1xyXG4gICAgICAgIC8vICAgICBuYW1lID0gXCJUb2RheVwiIDtcclxuICAgICAgICAvLyAgICAgdmFsdWUgPSBbZGF5anMoKS5zdGFydE9mKCdkYXknKSwgZGF5anMoKS5lbmRPZignZGF5JyldO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZih0eXBlID09PSBcImRcIil7XHJcbiAgICAgICAgICAgIG5hbWUgPSBgJHtudW1iZXJ9IGRheWA7XHJcbiAgICAgICAgICAgIHZhbHVlID0gW2RheWpzKCkuc3RhcnRPZignZGF5JyksIGRheWpzKCkuc3VidHJhY3QobnVtYmVyLCAnZGF5JyldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHR5cGUgPT09IFwibVwiKXtcclxuICAgICAgICAgICAgbmFtZT0gYCR7bnVtYmVyfSBtb250aGA7XHJcbiAgICAgICAgICAgIHZhbHVlID0gW2RheWpzKCkuc3RhcnRPZignZGF5JyksIGRheWpzKCkuc3VidHJhY3QobnVtYmVyLCAnbW9udGgnKV1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodHlwZSA9PT0gXCJ5XCIpe1xyXG4gICAgICAgICAgICBuYW1lID0gYCR7bnVtYmVyfSB5ZWFyYDtcclxuICAgICAgICAgICAgdmFsdWUgPSBbZGF5anMoKS5zdGFydE9mKCdkYXknKSwgZGF5anMoKS5zdWJ0cmFjdChudW1iZXIsICd5ZWFyJyldXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB7bmFtZTogbmFtZSwgdmFsdWU6IHZhbHVlfTtcclxuICAgIH1cclxuICAgIGRhdGVSYW5nZUNoYW5nZShkYXRlUmFuZ2VTdGFydDogSFRNTElucHV0RWxlbWVudCwgZGF0ZVJhbmdlRW5kOiBIVE1MSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgaWYoZGF0ZVJhbmdlU3RhcnQudmFsdWUgJiYgZGF0ZVJhbmdlRW5kLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RGF0ZVJhbmdlVmFsdWUoe3ZhbHVlOiB7c3RhcnREYXRlOiBtb21lbnQuZGVmYXVsdChuZXcgRGF0ZShkYXRlUmFuZ2VTdGFydC52YWx1ZSkudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCksIGVuZERhdGU6IG1vbWVudC5kZWZhdWx0KG5ldyBEYXRlKGRhdGVSYW5nZUVuZC52YWx1ZSkudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCl9LCB0b3VjaGVkOnRydWUsIGRpcnR5OiBmYWxzZX0sIHRydWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZ2V0TWFza2VkSW5wdXRWYWx1ZSgpIHtcclxuICAgICAgICBsZXQgbWFzayA9ICcnO1xyXG4gICAgICAgIGxldCBkYXRlRm9ybWF0ID0gdGhpcy5kYXRlRm9ybWF0O1xyXG4gICAgICAgIGRhdGVGb3JtYXQgPSBkYXRlRm9ybWF0LnJlcGxhY2UoL0F8YS8sICdTUycpO1xyXG4gICAgICAgIGRhdGVGb3JtYXQgPSBkYXRlRm9ybWF0LnJlcGxhY2UoJ01NTU0nLCAnQSonKTtcclxuICAgICAgICBkYXRlRm9ybWF0ID0gZGF0ZUZvcm1hdC5yZXBsYWNlKCdNTU0nLCAnU1NTJyk7XHJcbiAgICAgICAgZGF0ZUZvcm1hdC5zcGxpdCgnJykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBtYXgtbGluZS1sZW5ndGhcclxuICAgICAgICAgICAgaWYgKCgnZG15aHMnKS5pbmNsdWRlcyhlbGVtZW50LnRvTG93ZXJDYXNlKCkpKSB7XHJcbiAgICAgICAgICAgICAgICBtYXNrICs9ICcwJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG1hc2sgKz0gZWxlbWVudFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIG1hc2s7XHJcbiAgICB9XHJcbiAgICBkYXRlT25seShldmVudCkge1xyXG4gICAgICAgIGNvbnN0IGNoYXJDb2RlID0gKGV2ZW50LndoaWNoKSA/IGV2ZW50LndoaWNoIDogZXZlbnQua2V5Q29kZTtcclxuICAgICAgICBpZiAoY2hhckNvZGUgPiAzMSAmJiAoY2hhckNvZGUgPCA0NyB8fCBjaGFyQ29kZSA+IDU3KSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZUNoYW5nZSgpIHtcclxuICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRvIHJlZGFjdCBkYXRlIGxpa2UgcGFzc3dvcmQgZm9yIGV4YW1wbGUsIDMxLzAzLzIwMjUgPT4gIyMvIyMvMjAyNSBvciAjIy8wMy8yMDI1IG9yIDMxLzAzLyMjIyNcclxuICAgIGdldFJlZGFjdGVkRGF0ZShkYXRlOiBhbnkpIHtcclxuICAgICAgICBpZiAoZGF0ZSA9PSBudWxsIHx8IGRhdGUgPT0gXCJcIiB8fCBkYXRlID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG1vbWVudC5kZWZhdWx0KGRhdGUsIHRoaXMuZGF0ZUZvcm1hdCkuZm9ybWF0KHRoaXMuZGF0ZU1hc2tGb3JtYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRGF0ZUlucHV0KHZhbDogc3RyaW5nLCBjaGFuZ2U6IGJvb2xlYW4gPSBmYWxzZSkge1xyXG4gICAgICAgIGlmICh2YWwgJiYgKHZhbC5sZW5ndGggPT09IHRoaXMuZGF0ZUZvcm1hdC5sZW5ndGggfHwgY2hhbmdlKSAmJiB0aGlzLmNvbW1vblV0aWwuaXNWYWxpZERhdGVTdHIodmFsLCB0aGlzLmRhdGVGb3JtYXQsIHRoaXMud2l0aFRpbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbmV3IERhdGUodmFsKVxyXG4gICAgICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKCcnLCAhdGhpcy5pbnZhbGlkRGF0ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbnVsbFxyXG4gICAgICAgICAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuc2hvd0Nyb3NzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKCcnKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkRhdGVTZWxlY3QnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFjaGFuZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbktleVVwJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmx1ckRQKHZhbDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHZhbCAmJiB0aGlzLmNvbW1vblV0aWwuaXNWYWxpZERhdGVTdHIodmFsLCB0aGlzLmRhdGVGb3JtYXQsIHRoaXMud2l0aFRpbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW52YWxpZERhdGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkJsdXJEUFNldFN0YXRlKHZhbDogc3RyaW5nLGRhdGVGaWVsZDpOZ01vZGVsKSB7XHJcbiAgICAgICAgaWYgKHZhbCAmJiB0aGlzLmNvbW1vblV0aWwuaXNWYWxpZERhdGVTdHIodmFsLCB0aGlzLmRhdGVGb3JtYXQsIHRoaXMud2l0aFRpbWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoZGF0ZUZpZWxkLCB0aGlzLmRhdGVQaWNrZXJTdGF0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Qm94RGF0ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pbnB1dFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZURheSA9IG1vbWVudC5kZWZhdWx0KHRoaXMuaW5wdXRWYWx1ZSkuZm9ybWF0KCdERCcpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWVNb250aCA9IG1vbWVudC5kZWZhdWx0KHRoaXMuaW5wdXRWYWx1ZSkuZm9ybWF0KCdNTScpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWVZZWFyID0gbW9tZW50LmRlZmF1bHQodGhpcy5pbnB1dFZhbHVlKS5mb3JtYXQoJ1lZWVknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYm94S2V5VXAoYm94VHlwZTogc3RyaW5nLCB2YWx1ZVN0YXRlOiBhbnksIGlucHV0Qm94ZXNTdGF0ZSkge1xyXG4gICAgICAgIHN3aXRjaCAoYm94VHlwZSkge1xyXG4gICAgICAgICAgICBjYXNlICdkYXknOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZURheSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUodmFsdWVTdGF0ZSwgaW5wdXRCb3hlc1N0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRheUZvcm1hdEVycm9yID0gISgvXlxcZHsyfSQvLnRlc3QodGhpcy5pbnB1dFZhbHVlRGF5KSAmJiBwYXJzZUludCh0aGlzLmlucHV0VmFsdWVEYXkpID49IDEgJiYgcGFyc2VJbnQodGhpcy5pbnB1dFZhbHVlRGF5KSA8PSAzMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmRheUZvcm1hdEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF5RXJyb3IgPSAhKHBhcnNlSW50KHRoaXMuaW5wdXRWYWx1ZURheSkgPj0gMSAmJiBwYXJzZUludCh0aGlzLmlucHV0VmFsdWVEYXkpIDw9IDMxKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF5RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF5Rm9ybWF0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRheUVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnbW9udGgnOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZU1vbnRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh2YWx1ZVN0YXRlLCBpbnB1dEJveGVzU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9udGhGb3JtYXRFcnJvciA9ICEoL15cXGR7Mn0kLy50ZXN0KHRoaXMuaW5wdXRWYWx1ZU1vbnRoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLm1vbnRoRm9ybWF0RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aEVycm9yID0gIShwYXJzZUludCh0aGlzLmlucHV0VmFsdWVNb250aCkgPj0gMSAmJiBwYXJzZUludCh0aGlzLmlucHV0VmFsdWVNb250aCkgPD0gMTIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb250aEVycm9yID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoRm9ybWF0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vbnRoRXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd5ZWFyJzpcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlucHV0VmFsdWVZZWFyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh2YWx1ZVN0YXRlLCBpbnB1dEJveGVzU3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueWVhckZvcm1hdEVycm9yID0gISgvXlxcZHs0fSQvLnRlc3QodGhpcy5pbnB1dFZhbHVlWWVhcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy55ZWFyRm9ybWF0RXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyRXJyb3IgPSAhKHBhcnNlSW50KHRoaXMuaW5wdXRWYWx1ZVllYXIpID49IDE5MDAgJiYgcGFyc2VJbnQodGhpcy5pbnB1dFZhbHVlWWVhcikgPD0gMjEwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ZWFyRm9ybWF0RXJyb3IgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnllYXJFcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRheUVycm9yIHx8IHRoaXMubW9udGhFcnJvciB8fCB0aGlzLnllYXJFcnJvciB8fCB0aGlzLmRheUZvcm1hdEVycm9yIHx8IHRoaXMubW9udGhGb3JtYXRFcnJvciB8fCB0aGlzLnllYXJGb3JtYXRFcnJvciB8fCAhdGhpcy5pbnB1dFZhbHVlWWVhciB8fCAhdGhpcy5pbnB1dFZhbHVlTW9udGggfHwgIXRoaXMuaW5wdXRWYWx1ZURheSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGJveEZ1bGxEYXRlID0gbmV3IERhdGUodGhpcy5pbnB1dFZhbHVlWWVhciwgdGhpcy5pbnB1dFZhbHVlTW9udGggLSAxLCB0aGlzLmlucHV0VmFsdWVEYXkpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBib3hGdWxsRGF0ZTtcclxuICAgICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZChib3hGdWxsRGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgc2V0RGF0ZVJhbmdlVmFsdWUodmFsdWU6IGFueSwgaW5wdXRCb3hlc1N0YXRlKSB7XHJcbiAgICAgICAgbGV0IGFwcERhdGFUb0JlU3RvcmVkID0gW107XHJcbiAgICAgICAgaWYodmFsdWVbJ3ZhbHVlJ11bJ3N0YXJ0RGF0ZSddKSB7XHJcbiAgICAgICAgICAgIGFwcERhdGFUb0JlU3RvcmVkLnB1c2godmFsdWVbJ3ZhbHVlJ11bJ3N0YXJ0RGF0ZSddKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodmFsdWVbJ3ZhbHVlJ11bJ2VuZERhdGUnXSkge1xyXG4gICAgICAgICAgICBhcHBEYXRhVG9CZVN0b3JlZC5wdXNoKHZhbHVlWyd2YWx1ZSddWydlbmREYXRlJ10pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihhcHBEYXRhVG9CZVN0b3JlZC5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaW5wdXREYXRlUmFuZ2VWYWx1ZSA9IGFwcERhdGFUb0JlU3RvcmVkO1xyXG4gICAgICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGVSYW5nZURhdGFVcGRhdGVkKGFwcERhdGFUb0JlU3RvcmVkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zZXRTdGF0ZSh2YWx1ZSwgaW5wdXRCb3hlc1N0YXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZSh2YWx1ZTogYW55LCBpbnB1dEJveGVzU3RhdGUpIHtcclxuICAgICAgICAvLyB0aGlzLm92ZXJsYXlDb250YWluZXIgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKTtcclxuICAgICAgICAvLyB0aGlzLnJlbmRlcmVyLmFwcGVuZENoaWxkKHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZGlhbG9nJyksIHRoaXMub3ZlcmxheUNvbnRhaW5lcik7XHJcbiAgICAgICAgaW5wdXRCb3hlc1N0YXRlLnRvdWNoZWQgIT09IHZhbHVlLnRvdWNoZWQgJiYgKGlucHV0Qm94ZXNTdGF0ZS50b3VjaGVkID0gdmFsdWUudG91Y2hlZCk7XHJcbiAgICAgICAgaW5wdXRCb3hlc1N0YXRlLmRpcnR5ICE9PSB2YWx1ZS5kaXJ0eSAmJiAoaW5wdXRCb3hlc1N0YXRlLmRpcnR5ID0gdmFsdWUuZGlydHkpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuaW5wdXRWYWx1ZSA9PSBudWxsKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKCcnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0RGF0YSgpIHsgfVxyXG5cclxuICAgIGlzVmFsaWREYXRlKGQpIHtcclxuICAgICAgICByZXR1cm4gZCBpbnN0YW5jZW9mIERhdGUgJiYgIWlzTmFOKGQuZ2V0RGF0ZSgpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlc3Npb25EYXRhVXBkYXRlZChkYXRlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkRGF0ZShuZXcgRGF0ZShkYXRlKSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q3Jvc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICBsZXQgdERhdGV0ID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKGRhdGUpKTtcclxuICAgICAgICAgICAgY29uc3QgdERhdGUgPSBtb21lbnQuZGVmYXVsdCh0RGF0ZXQudG9JU09TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMudmFsaWRhdGVNaW5NYXhSYW5nZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSghdERhdGUuaXNWYWxpZCgpID8gJycgOiB0RGF0ZS5mb3JtYXQodGhpcy5hcGlEYXRlRm9ybWF0KSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkRhdGVTZWxlY3QnKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSgnJywgZmFsc2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblNlc3Npb25EYXRlUmFuZ2VEYXRhVXBkYXRlZChkYXRlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGF0ZVJhbmdlVmFsdWUgPSBbXTtcclxuICAgICAgICBsZXQgaXNJbnB1dFZhbGlkID0gZmFsc2U7XHJcbiAgICAgICAgZGF0ZS5mb3JFYWNoKChkdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkRGF0ZShuZXcgRGF0ZShkdCkpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dDcm9zcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBsZXQgdERhdGV0ID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKGR0KSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0RGF0ZSA9IG1vbWVudC5kZWZhdWx0KHREYXRldC50b0lTT1N0cmluZygpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMudmFsaWRhdGVEYXRlUmFuZ2VNaW5NYXgoZHQpO1xyXG4gICAgICAgICAgICAgICAgZGF0ZVJhbmdlVmFsdWUucHVzaCghdERhdGUuaXNWYWxpZCgpID8gJycgOiB0RGF0ZS5mb3JtYXQodGhpcy5hcGlEYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICBpc0lucHV0VmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKCcnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbkRpcnR5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYoaXNJbnB1dFZhbGlkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKGRhdGVSYW5nZVZhbHVlLCB0aGlzLmlzVmFsaWQpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uRGF0ZVNlbGVjdCcpO1xyXG4gICAgICAgIH0gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlRGF0ZVJhbmdlTWluTWF4KGR0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKHRoaXMubWF4RGF0ZXggJiYgbmV3IERhdGUobW9tZW50LmRlZmF1bHQodGhpcy5tYXhEYXRleCkuZm9ybWF0KCdNTS9ERC9ZWVlZJykpIDwgbmV3IERhdGUobW9tZW50LmRlZmF1bHQoZHQpLmZvcm1hdCgnTU0vREQvWVlZWScpKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1pbkRhdGV4ICYmIG5ldyBEYXRlKG1vbWVudC5kZWZhdWx0KHRoaXMubWluRGF0ZXgpLmZvcm1hdCgnTU0vREQvWVlZWScpKSA+IG5ldyBEYXRlKG1vbWVudC5kZWZhdWx0KGR0KS5mb3JtYXQoJ01NL0REL1lZWVknKSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZU1pbk1heFJhbmdlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLm1heERhdGV4ICYmIG5ldyBEYXRlKG1vbWVudC5kZWZhdWx0KHRoaXMubWF4RGF0ZXgpLmZvcm1hdCgnTU0vREQvWVlZWScpKSA8IG5ldyBEYXRlKHRoaXMuaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5taW5EYXRleCAmJiBuZXcgRGF0ZShtb21lbnQuZGVmYXVsdCh0aGlzLm1pbkRhdGV4KS5mb3JtYXQoJ01NL0REL1lZWVknKSkgPiBuZXcgRGF0ZSh0aGlzLmlucHV0VmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgb25BUElDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIGxldCBhcGlWYWx1ZSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgYXBpVmFsdWUgPSBkYXRhLmhhc093blByb3BlcnR5KHRoaXMucm93RGF0YS5yZXNwb25zZV9hcGlfa2V5WzFdKSA/IGRhdGFbdGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXlbMV1dIDogbnVsbFxyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIGlmIChhcGlWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRlID0gbW9tZW50LmRlZmF1bHQoYXBpVmFsdWUsIHRoaXMuYXBpRGF0ZUZvcm1hdCkudG9EYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChkYXRlIGluc3RhbmNlb2YgRGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEobW9tZW50LmRlZmF1bHQodGhpcy5pbnB1dFZhbHVlKS5mb3JtYXQodGhpcy5hcGlEYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEJveERhdGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblNldFNlc3Npb25EYXRhKGFwaUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIub25TZXRTZXNzaW9uRGF0YShhcGlLZXksIHZhbHVlKTtcclxuICAgICAgICBsZXQgYWRkaXRpb25hbE1pblZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNaW5WYWx1ZSddO1xyXG4gICAgICAgIGxldCBhZGRpdGlvbmFsTWF4VmFsdWUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heFZhbHVlJ107XHJcbiAgICAgICAgaWYgKGFwaUtleS5zcGxpdCgnJCcpLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBpZiAoYWRkaXRpb25hbE1pblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkaXRpb25hbE1pblZhbHVlICE9PSAnQ1VSUl9EQVRFJyAmJiAhYWRkaXRpb25hbE1pblZhbHVlLmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsTWluVmFsdWUgPSBhcGlLZXkuc3BsaXQoJyQnKVswXSArICckJyArIGFkZGl0aW9uYWxNaW5WYWx1ZSArICckJyArIGFwaUtleS5zcGxpdCgnJCcpWzJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhZGRpdGlvbmFsTWF4VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChhZGRpdGlvbmFsTWF4VmFsdWUgIT09ICdDVVJSX0RBVEUnICYmICFhZGRpdGlvbmFsTWF4VmFsdWUuaW5jbHVkZXMoJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxNYXhWYWx1ZSA9IGFwaUtleS5zcGxpdCgnJCcpWzBdICsgJyQnICsgYWRkaXRpb25hbE1heFZhbHVlICsgJyQnICsgYXBpS2V5LnNwbGl0KCckJylbMl07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFwaUtleS5zcGxpdCgnJCcpLmxlbmd0aCA9PT0gNCkge1xyXG4gICAgICAgICAgICBpZiAoYWRkaXRpb25hbE1pblZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYWRkaXRpb25hbE1pblZhbHVlICE9PSAnQ1VSUl9EQVRFJyAmJiAhYWRkaXRpb25hbE1pblZhbHVlLmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBhZGRpdGlvbmFsTWluVmFsdWUgPSBhcGlLZXkuc3BsaXQoJyQnKVswXSArICckJyArIGFkZGl0aW9uYWxNaW5WYWx1ZSArICckJyArIGFwaUtleS5zcGxpdCgnJCcpWzJdICsgJyQnICsgYXBpS2V5LnNwbGl0KCckJylbM107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxNYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxNYXhWYWx1ZSAhPT0gJ0NVUlJfREFURScgJiYgIWFkZGl0aW9uYWxNYXhWYWx1ZS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWRkaXRpb25hbE1heFZhbHVlID0gYXBpS2V5LnNwbGl0KCckJylbMF0gKyAnJCcgKyBhZGRpdGlvbmFsTWF4VmFsdWUgKyAnJCcgKyBhcGlLZXkuc3BsaXQoJyQnKVsyXSArICckJyArIGFwaUtleS5zcGxpdCgnJCcpWzNdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChhZGRpdGlvbmFsTWluVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxNaW5WYWx1ZSA9PT0gYXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbkRhdGV4ID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtaW5GaWVsZFZhbHVlID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNaW5WYWx1ZSddKTtcclxuICAgICAgICAgICAgICAgIGlmIChtaW5GaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5taW5EYXRleCA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWihuZXcgRGF0ZShtaW5GaWVsZFZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxNYXhWYWx1ZSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxNYXhWYWx1ZSA9PT0gYXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heERhdGV4ID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXhGaWVsZFZhbHVlID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYXhWYWx1ZSddKTtcclxuICAgICAgICAgICAgICAgIGlmIChtYXhGaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYXhEYXRleCA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWihuZXcgRGF0ZShtYXhGaWVsZFZhbHVlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1pbmFuZE1heFZhbHVlKCkge1xyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxNaW5WYWx1ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTWluVmFsdWUnXTtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsTWF4VmFsdWUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heFZhbHVlJ107XHJcblxyXG4gICAgICAgIGlmIChhZGRpdGlvbmFsTWluVmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5taW5EYXRleCA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWih0aGlzLmdldERhdGVPblR5cGUoYWRkaXRpb25hbE1pblZhbHVlLCAnbWluJykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYWRkaXRpb25hbE1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGF0ZXggPSB0aGlzLmNvbW1vblV0aWwuYWRqdXN0VFoodGhpcy5nZXREYXRlT25UeXBlKGFkZGl0aW9uYWxNYXhWYWx1ZSwgJ21heCcpKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RGVmYXVsdFZhbHVlKCkge1xyXG4gICAgICAgIGNvbnN0IGRlZlZhbCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcImRlZmF1bHRfdmFsdWVcIl07XHJcbiAgICAgICAgaWYgKGRlZlZhbCA9PT0gJ0NVUlJfREFURScpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbmV3IERhdGUodGhpcy5jdXJyRGF0ZSk7XHJcbiAgICAgICAgICAgIHRoaXMub25EYXRlQ2hhbmdlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGVPblR5cGUocGFyYW1ldGVyVmFsdWUsIHR5cGUpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5yZXR1cm5EYXRlQXJyYXlXaXRoVHlwZShwYXJhbWV0ZXJWYWx1ZSwgdHlwZSk7XHJcbiAgICAgICAgaWYgKGRhdGEudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnbWluJykge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoTWF0aC5taW4uYXBwbHkobnVsbCwgZGF0YS5kYXRlcykpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShNYXRoLm1heC5hcHBseShudWxsLCBkYXRhLmRhdGVzKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybkRhdGVBcnJheVdpdGhUeXBlKHBhcmFtZXRlclZhbHVlLCB0eXBlKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge1xyXG4gICAgICAgICAgICBkYXRlczogW3BhcmFtZXRlclZhbHVlXSxcclxuICAgICAgICAgICAgdHlwZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKHBhcmFtZXRlclZhbHVlLmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgICAgb2JqLmRhdGVzID0gW107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qgc3RyIG9mIChwYXJhbWV0ZXJWYWx1ZS5pbmNsdWRlcygnfHwnKSA/IHBhcmFtZXRlclZhbHVlLnNwbGl0KCd8fCcpWzBdIDogcGFyYW1ldGVyVmFsdWUpLnNwbGl0KCd8JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnJldHVybkRhdGUoc3RyKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqLmRhdGVzLnB1c2goZGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlclZhbHVlLmluY2x1ZGVzKCd8fCcpKSB7XHJcbiAgICAgICAgICAgICAgICBvYmoudHlwZSA9IHBhcmFtZXRlclZhbHVlLnNwbGl0KCd8fCcpWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqLmRhdGVzID0gW3RoaXMucmV0dXJuRGF0ZShwYXJhbWV0ZXJWYWx1ZSldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybkRhdGUoZmllbGQpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9ICcoWystXSopKFswLTldKykoW3lkbXddKSc7XHJcbiAgICAgICAgY29uc3QgbWF0Y2hlZCA9IGZpZWxkLm1hdGNoKG5ldyBSZWdFeHAocmVnZXgpKTtcclxuICAgICAgICBpZiAobWF0Y2hlZCkge1xyXG4gICAgICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgIGlmIChtYXRjaGVkWzNdLmluY2x1ZGVzKCd5JykpIHtcclxuICAgICAgICAgICAgICAgIGRhdGUgPSB0aGlzLmNhbGN1bGF0ZURhdGUoJ3knLCBkYXRlLCBOdW1iZXIobWF0Y2hlZFsyXSksIG1hdGNoZWRbMV0gIT09ICctJyA/ICdhZGQnIDogJ3N1YnRyYWN0Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAobWF0Y2hlZFszXS5pbmNsdWRlcygnZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlID0gdGhpcy5jYWxjdWxhdGVEYXRlKCdkJywgZGF0ZSwgTnVtYmVyKG1hdGNoZWRbMl0pLCBtYXRjaGVkWzFdICE9PSAnLScgPyAnYWRkJyA6ICdzdWJ0cmFjdCcpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG1hdGNoZWRbM10uaW5jbHVkZXMoJ20nKSkge1xyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IHRoaXMuY2FsY3VsYXRlRGF0ZSgnbScsIGRhdGUsIE51bWJlcihtYXRjaGVkWzJdKSwgbWF0Y2hlZFsxXSAhPT0gJy0nID8gJ2FkZCcgOiAnc3VidHJhY3QnKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChtYXRjaGVkWzNdLmluY2x1ZGVzKCd3JykpIHtcclxuICAgICAgICAgICAgICAgIGRhdGUgPSB0aGlzLmNhbGN1bGF0ZURhdGUoJ3cnLCBkYXRlLCBOdW1iZXIobWF0Y2hlZFsyXSksIG1hdGNoZWRbMV0gIT09ICctJyA/ICdhZGQnIDogJ3N1YnRyYWN0Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGRhdGU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkID09PSAnQ1VSUl9EQVRFJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHRoaXMuY3VyckRhdGUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLnNwbGl0KCckJykubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFmaWVsZC5pbmNsdWRlcygnJCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkID1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLnNwbGl0KCckJylbMF0gKyAnJCcgKyBmaWVsZCArICckJyArIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLnNwbGl0KCckJylbMl07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBmdW5jdGlvbiBjYWxjdWxhdGVzIGRhdGUgaWYgbWF4IHZhbHVlIG9yIG1pbiB2YWx1ZSBzZXQgYXMgMXcgb3IgMWQgb3IgMXkgb3IgMW0gb3IgMXcgMWQgMXkgMW1cclxuICAgICAqIEBwYXJhbSB0eXBlIHRoZSB0eXBlIG9mIHRoZSBtaW4gb3IgbWF4IHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gY3VycmVudERhdGUgdGhlIGN1cnJlbnQgZnJvbSB3aGljaCBpdCBuZWVkcyB0byBiZSBkZWR1Y3RlZCBvciBhZGRlZFxyXG4gICAgICogQHBhcmFtIG5vIHRoZSBudW1iZXIgb2YgZGF0ZSBtb250aCB3ZWVrIG9yIHllYXJcclxuICAgICAqIEBwYXJhbSBvcGVyYXRvciBzdWJ0cmFjdCBvciBhZGQgdG8gdGhlIGN1cnJlbnQgZGF0ZVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNhbGN1bGF0ZURhdGUodHlwZTogc3RyaW5nLCBjdXJyZW50RGF0ZTogRGF0ZSwgbm86IG51bWJlciwgb3BlcmF0b3I6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICAgICAgY2FzZSAneSc6XHJcbiAgICAgICAgICAgICAgICBpZiAob3BlcmF0b3IgPT09ICdhZGQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RnVsbFllYXIoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSArIG5vKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldEZ1bGxZZWFyKGN1cnJlbnREYXRlLmdldEZ1bGxZZWFyKCkgLSBubykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdtJzpcclxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2FkZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRNb250aChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgbm8pKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0TW9udGgoY3VycmVudERhdGUuZ2V0TW9udGgoKSAtIG5vKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhc2UgJ3cnOlxyXG4gICAgICAgICAgICAgICAgaWYgKG9wZXJhdG9yID09PSAnYWRkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgKG5vICogNykpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSAobm8gKiA3KSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYXNlICdkJzpcclxuICAgICAgICAgICAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2FkZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIG5vKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpIC0gbm8pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbXB0eVNlc3Npb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9IFtdO1xyXG4gICAgICAgIGlmIChnZXRfZGF0YS51bmlxdWVfaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLnVuaXF1ZV9pZHM7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmFwcERhdGEuaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuZmllbGREYXRhLmFwaV9rZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gWy4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKV07XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMoZWxtKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF92YWx1ZSddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF92YWx1ZSddID09PSAnQ1VSUl9EQVRFJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJEYXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWihuZXcgRGF0ZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2RlZmF1bHRfdmFsdWUnXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDcm9zcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q3Jvc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RW1wdHlVSVR5cGUoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSA/IG1vbWVudC5kZWZhdWx0KHRoaXMuaW5wdXRWYWx1ZSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCkgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAvLyByZXNldHRpbmcgdGhlIGZvcm0gZmllbGQgZG9lcyBub3Qgd29yayBiZWNhdXNlXHJcbiAgICAgICAgICAgICAgICAvLyBvbmNlIGl0IGdldHMgcmVzZXQgaWYgaXQgaXMgbm90IHRvdWNoZWQgYWdhaW4gdGhlbiB0aGUgZmllbGQgd29uJ3QgZ2V0IGludmFsaWRcclxuICAgICAgICAgICAgICAgIC8vIGFmdGVyIHRoZSBmb3JtIGdldHMgc3VibWl0dGVkIGFuZCBlcnJvcnMgd29uJ3Qgc2hvdyB1cFxyXG4gICAgICAgICAgICAgICAgLy8gc28gd2UgbmVlZCB0byBtYW51YWxseSBzZXQgdGhlIGZpZWxkIGFzIHVuVG91Y2hlZCwgUHJpc3RpbmUgLCB1cGRhdGUgdmFsdWUgYW4gdmFsaWRpdHkgYW5kIHNob3dFcnJvck9uTmV4dCB0byB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRhdGVQaWNrZXIuY29udHJvbC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlci5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0ZVBpY2tlci5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VyLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXlCb3hTdGF0ZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBkaXJ0eTogZmFsc2VcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vbnRoQm94U3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ZWFyQm94U3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlUGlja2VyU3RhdGUgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG91Y2hlZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlydHk6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RW1wdHlVSVR5cGUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsndWlfdHlwZSddID09PSAnaW5wdXRfYm94ZXMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50cnlGaWVsZHMuaW5jbHVkZXMoJ2RheScpICYmICh0aGlzLmlucHV0VmFsdWVEYXkgPSAnJyk7XHJcbiAgICAgICAgICAgIHRoaXMuZW50cnlGaWVsZHMuaW5jbHVkZXMoJ21vbnRoJykgJiYgKHRoaXMuaW5wdXRWYWx1ZU1vbnRoID0gJycpO1xyXG4gICAgICAgICAgICB0aGlzLmVudHJ5RmllbGRzLmluY2x1ZGVzKCd5ZWFyJykgJiYgKHRoaXMuaW5wdXRWYWx1ZVllYXIgPSAnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhnZXRfZGF0YSkuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZV9pZF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKGdldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV0pKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEobW9tZW50LmRlZmF1bHQodGhpcy5pbnB1dFZhbHVlKS5mb3JtYXQodGhpcy5hcGlEYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNsZWFyRGF0ZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Nyb3NzID0gZmFsc2U7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbnVsbDtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSgnJyk7XHJcbiAgICAgICAgdGhpcy5zZXRNaW5hbmRNYXhWYWx1ZSgpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25EYXRlU2VsZWN0Jyk7XHJcbiAgICB9XHJcblxyXG4gICAgb25Ob0RhdGVTZWxlY3Rpb24oKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWREYXRlKHRoaXMuaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q3Jvc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoJycpO1xyXG4gICAgICAgICAgICB0aGlzLnNldE1pbmFuZE1heFZhbHVlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25EYXRlU2VsZWN0Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG4gICAgIFxyXG4gICAgY2xlYXJEYXRlUmFuZ2UoZXZlbnQpIHtcclxuICAgICAgICB0aGlzLnNob3dDcm9zcyA9IGZhbHNlO1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuc3RhcnREYXRlUmFuZ2VEaXNwID0gbnVsbDtcclxuICAgICAgICB0aGlzLmVuZERhdGVSYW5nZURpc3AgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKCcnKTtcclxuICAgICAgICB0aGlzLnNldE1pbmFuZE1heFZhbHVlKCk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkRhdGVTZWxlY3QnKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVsndW5pcXVlSWRzJ10uaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKGRhdGFbJ3ZhbHVlcyddLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJ3ZhbHVlcyddW2RhdGFbJ3VuaXF1ZUlkcyddLmluZGV4T2YodGhpcy5maWVsZERhdGEudW5pcXVlX2lkKV0gOlxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJ3ZhbHVlcyddWzBdKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBvZiB0cmlnZ2VyVXBkYXRlIGlzIHRydWUgdGhlbiB1cGRhdGUgdGhlIGZpZWxkIHZhbHVlIG9yIHVwZGF0ZSB2YWx1ZSBhbmQgZW1pdCBjb25kaXRpb25zIGV2ZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10obW9tZW50LmRlZmF1bHQodGhpcy5pbnB1dFZhbHVlKS5mb3JtYXQodGhpcy5hcGlEYXRlRm9ybWF0KSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRJbnB1dEZpbHRlcih0ZXh0Ym94LCBpbnB1dEZpbHRlcikge1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICBbXCJpbnB1dFwiXS5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgICAgICAgICB0ZXh0Ym94LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dEZpbHRlcih0aGlzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2xkVmFsdWUgPSB0aGlzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2xkU2VsZWN0aW9uU3RhcnQgPSB0aGlzLnNlbGVjdGlvblN0YXJ0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub2xkU2VsZWN0aW9uRW5kID0gdGhpcy5zZWxlY3Rpb25FbmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0QXR0cmlidXRlKCdudW1iZXItZXJyb3InKSA9PT0gJzInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdudW1iZXItZXJyb3InLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdudW1iZXItZXJyb3InLCAnMCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNPd25Qcm9wZXJ0eShcIm9sZFZhbHVlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMub2xkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb25SYW5nZSh0aGlzLm9sZFNlbGVjdGlvblN0YXJ0LCB0aGlzLm9sZFNlbGVjdGlvbkVuZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ251bWJlci1lcnJvcicsICcyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbnVtYmVyLWVycm9yJywgJzInKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5udW1iZXJFcnJvciA9ICh0aGlzLmdldEF0dHJpYnV0ZSgnbnVtYmVyLWVycm9yJykgIT09ICcwJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVNb2RhbENzc0NsYXNzKCkge1xyXG4gICAgICAgICB0aGlzLm92ZXJsYXlDb250YWluZXIgPSB0aGlzLmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jZGstb3ZlcmxheS1jb250YWluZXInKTtcclxuICAgICAgICAgaWYodGhpcy5vdmVybGF5Q29udGFpbmVyKXtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcclxuICAgICAgICAgICAgaWYoZGlhbG9nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZGlhbG9nLCB0aGlzLm92ZXJsYXlDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBtb2RhbFdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LXBhbmUnKTtcclxuICAgICAgICAgICAgaWYgKG1vZGFsV3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgbW9kYWxXcmFwcGVyLmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLWRhdGUtcGlja2VyLXdyYXBwZXInKTtcclxuICAgICAgICAgICAgICAgIG1vZGFsV3JhcHBlci5jbGFzc0xpc3QudG9nZ2xlKHRoaXMubW9kYWxHZW5lcmljQ3NzQ2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsLm1vdmVNYXREaWFsb2dUb1N0ZXBNb2RhbElmRXhpc3QoKTtcclxuICAgICAgICBjb25zdCBkYXlGaWVsZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXlGaWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IG1vbnRoRmllbGQgPSB0aGlzLmVsZW1lbnRSZWYubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcjbW9udGhGaWVsZCcpO1xyXG4gICAgICAgIGNvbnN0IHllYXJGaWVsZCA9IHRoaXMuZWxlbWVudFJlZi5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJyN5ZWFyRmllbGQnKTtcclxuICAgICAgICBpZiAoZGF5RmllbGQpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRJbnB1dEZpbHRlcihkYXlGaWVsZCwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15cXGQqJC8udGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAobW9udGhGaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElucHV0RmlsdGVyKG1vbnRoRmllbGQsIGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC9eXFxkKiQvLnRlc3QodmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHllYXJGaWVsZCkge1xyXG4gICAgICAgICAgICB0aGlzLnNldElucHV0RmlsdGVyKHllYXJGaWVsZCwgZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gL15cXGQqJC8udGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRIaWRkZW5PdmVybGF5KCkge1xyXG4gICAgICAgIHRoaXMub3ZlcmxheUNvbnRhaW5lciA9IHRoaXMuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGlmICh0aGlzLm92ZXJsYXlDb250YWluZXIpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nID0gdGhpcy5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaWFsb2cnKTtcclxuICAgICAgICAgICAgaWYoZGlhbG9nKXtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyZXIuYXBwZW5kQ2hpbGQoZGlhbG9nLCB0aGlzLm92ZXJsYXlDb250YWluZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiBpZD1cInt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCIgKm5nSWY9XCJpc1Zpc2libGVcIlxyXG4gICAgY2xhc3M9XCJ7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIj5cclxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJhdXRvY29tcGxldGU7IGVsc2UgYXV0b2NvbXBsZXRlT2ZmRmllbGRcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImZpZWxkTGF5b3V0XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDxuZy10ZW1wbGF0ZSAjYXV0b2NvbXBsZXRlT2ZmRmllbGQ+XHJcbiAgICAgICAgPGZvcm0gYXV0b2NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCJzdWJtaXRcIiBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIC8+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nVGVtcGxhdGVPdXRsZXRdPVwiZmllbGRMYXlvdXRcIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgPG5nLXRlbXBsYXRlICNmaWVsZExheW91dD5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPSchaXNfbWF0ZXJpYWwnPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkRGF0YS5maWVsZF9sYWJlbCE9JydcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCI+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCJcclxuICAgICAgICAgICAgICAgIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCJcclxuICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+aTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3VpX3R5cGUnXVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidpbnB1dF9ib3hlcydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0taW5saW5lXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW50cnlGaWVsZHMuaW5jbHVkZXMoJ2RheScpXCIgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCAjZGF5RmllbGQ9XCJuZ01vZGVsXCIgaWQ9XCJkYXlGaWVsZFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgZGF5LWZpZWxkIHt7IGRheUZvcm1hdEVycm9yIHx8IGRheUVycm9yIHx8ICFpc1ZhbGlkIHx8ICghaW5wdXRWYWx1ZURheSAmJiBpc01hbmRhdG9yeSAmJiAoZGF5RmllbGQuZGlydHkgfHwgZGF5RmllbGQudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkREXCIgYXJpYS1sYWJlbD1cIkRheVwiIChrZXl1cCk9XCJib3hLZXlVcCgnZGF5JywgZGF5RmllbGQsIGRheUJveFN0YXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZURheVwiIG1heGxlbmd0aD1cIjJcIiBbcmVxdWlyZWRdPVwiaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwic2V0U3RhdGUoZGF5RmllbGQsIGRheUJveFN0YXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cImJveEtleVVwKCdkYXknLCBkYXlGaWVsZCwgZGF5Qm94U3RhdGUpXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJlbnRyeUZpZWxkcy5pbmNsdWRlcygnbW9udGgnKVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI21vbnRoRmllbGQ9XCJuZ01vZGVsXCIgaWQ9XCJtb250aEZpZWxkXCIgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCBtb250aC1maWVsZCB7eyBtb250aEZvcm1hdEVycm9yIHx8IG1vbnRoRXJyb3IgfHwgIWlzVmFsaWQgfHwgKCFpbnB1dFZhbHVlTW9udGggJiYgaXNNYW5kYXRvcnkgJiYgKG1vbnRoRmllbGQuZGlydHkgfHwgbW9udGhGaWVsZC50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCkpID8gJ2ludmFsaWQnIDogJ3ZhbGlkJyB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTU1cIiBhcmlhLWxhYmVsPVwiTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwiYm94S2V5VXAoJ21vbnRoJywgbW9udGhGaWVsZCwgbW9udGhCb3hTdGF0ZSlcIiBbKG5nTW9kZWwpXT1cImlucHV0VmFsdWVNb250aFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1heGxlbmd0aD1cIjJcIiBbcmVxdWlyZWRdPVwiaXNNYW5kYXRvcnlcIiAoZm9jdXMpPVwic2V0U3RhdGUobW9udGhGaWVsZCwgbW9udGhCb3hTdGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJib3hLZXlVcCgnbW9udGgnLCBtb250aEZpZWxkLCBtb250aEJveFN0YXRlKVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZW50cnlGaWVsZHMuaW5jbHVkZXMoJ3llYXInKVwiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgI3llYXJGaWVsZD1cIm5nTW9kZWxcIiBpZD1cInllYXJGaWVsZFwiIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2wgeWVhci1maWVsZCB7eyB5ZWFyRm9ybWF0RXJyb3IgfHwgeWVhckVycm9yIHx8ICFpc1ZhbGlkIHx8ICghaW5wdXRWYWx1ZVllYXIgJiYgaXNNYW5kYXRvcnkgJiYgKHllYXJGaWVsZC5kaXJ0eSB8fCB5ZWFyRmllbGQudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIllZWVlcIiBhcmlhLWxhYmVsPVwiWWVhclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJib3hLZXlVcCgneWVhcicsIHllYXJGaWVsZCwgeWVhckJveFN0YXRlKVwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVllYXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhsZW5ndGg9XCI0XCIgW3JlcXVpcmVkXT1cImlzTWFuZGF0b3J5XCIgKGZvY3VzKT1cInNldFN0YXRlKHllYXJGaWVsZCwgeWVhckJveFN0YXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cImJveEtleVVwKCd5ZWFyJywgeWVhckZpZWxkLCB5ZWFyQm94U3RhdGUpXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtdWx0aXBsZUVycm9yTWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIighaW5wdXRWYWx1ZURheSAmJiBpc01hbmRhdG9yeSAmJiAoZGF5Qm94U3RhdGUuZGlydHkgfHwgZGF5Qm94U3RhdGUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSB8fCAoIWlucHV0VmFsdWVNb250aCAmJiBpc01hbmRhdG9yeSAmJiAobW9udGhCb3hTdGF0ZS5kaXJ0eSB8fCBtb250aEJveFN0YXRlLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSkgfHwgKCFpbnB1dFZhbHVlWWVhciAmJiBpc01hbmRhdG9yeSAmJiAoeWVhckJveFN0YXRlLmRpcnR5IHx8IHllYXJCb3hTdGF0ZS50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXZhbGlkYXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwibnVtYmVyRXJyb3JcIj5QbGVhc2UgZW50ZXIgbnVtYmVycyBvbmx5LjwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJkYXlGb3JtYXRFcnJvclwiPkVudGVyZWQgZGF5IG11c3QgYmUgaW4gPHNwYW4+REQ8L3NwYW4+IGZvcm1hdC5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwibW9udGhGb3JtYXRFcnJvclwiPkVudGVyZWQgbW9udGggbXVzdCBiZSBpbiA8c3Bhbj5NTTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCJ5ZWFyRm9ybWF0RXJyb3JcIj5FbnRlcmVkIHllYXIgbXVzdCBiZSBpbiA8c3Bhbj5ZWVlZPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIihpbnB1dFZhbHVlICYmICFpc1ZhbGlkKSB8fCBkYXlFcnJvciB8fCBtb250aEVycm9yIHx8IHllYXJFcnJvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBQbGVhc2UgZW50ZXIgYSB2YWxpZCB7e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19LlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInd2l0aF90aW1lJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsnaW5wdXQtZ3JvdXAnOiAhaXNfbWF0ZXJpYWx9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tpc0Z1dHVyZURhdGUgfHwgaW52YWxpZERhdGUgfHwgZGF0ZVBpY2tlci5oYXNFcnJvcignbWF0RGF0ZXBpY2tlck1heCcpIHx8IGRhdGVQaWNrZXIuaGFzRXJyb3IoJ21hdERhdGVwaWNrZXJNaW4nKSB8fCBkYXRlUGlja2VyLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyUGFyc2UnKSB8fCAoIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKGRhdGVQaWNrZXJTdGF0ZS5kaXJ0eSB8fCBkYXRlUGlja2VyU3RhdGUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmbG9hdExhYmVsPVwie3shaXNfbWF0ZXJpYWw/J25ldmVyJzonYXV0byd9fVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsICpuZ0lmPSdpc19tYXRlcmlhbCc+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPGlucHV0IG1hdElucHV0IFt0ZXh0TWFza109XCJtYXNrRGF0YVwiIFtuZ01vZGVsXT1cInNoYWRvd1ZhbHVlXCIgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1hc2tEYXRlSW5wdXRzOyBjb250ZXh0Ont1aVR5cGU6J3dpdGhfdGltZScsIHBpY2tlcjogcGlja2VyfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBbbmdNb2RlbF09XCJzaGFkb3dWYWx1ZVwiIFttYXNrXT1cIm1hc2tTdHJpbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXJEUCgkZXZlbnQudGFyZ2V0LnZhbHVlKTsgc2V0U3RhdGUoZGF0ZUZpZWxkLCBkYXRlUGlja2VyU3RhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uRGF0ZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUpOyBzZXRTdGF0ZShkYXRlRmllbGQsIGRhdGVQaWNrZXJTdGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uRGF0ZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUsIHRydWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cIiFhbGxvd01hbnVhbEVudHJ5ICYmIHBpY2tlci5vcGVuKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiIWFsbG93TWFudWFsRW50cnkgJiYgcGlja2VyLm9wZW4oKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dH19XCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cIiFhbGxvd01hbnVhbEVudHJ5XCIgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJpc19tYXRlcmlhbCAmJiBpc01hbmRhdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1NlbGVjdCAnKyBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZGF0ZUZpZWxkPVwibmdNb2RlbFwiIGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX1fbWFza3RleHRcIiBbaGlkZGVuXT1cImhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3M9XCJzaGFkb3ctZGF0ZUlucHV0XCIgW21pbl09XCJtaW5EYXRleFwiIFttYXhdPVwibWF4RGF0ZXhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmd4TWF0RGF0ZXRpbWVQaWNrZXJdPVwicGlja2VyXCIgWyhuZ01vZGVsKV09XCJtYXNrSW5wdXRWYWx1ZVwiICNkYXRlUGlja2VyPVwibmdNb2RlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5IChkYXRlQ2hhbmdlKT1cIm9uRGF0ZUNoYW5nZSgpXCIgdGFiaW5kZXg9XCItMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cIm1hdC1pY29uLWNsYXNzXCIgKm5nSWY9XCJpc0VkaXRhYmxlXCIgYWx0PVwiQ2FsZW5kZXIgSWNvbiBJbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbG9zZSBkYXRlIHBpY2tlclwiIG1hdERhdGVwaWNrZXJUb2dnbGVJY29uIFtoaWRkZW5dPVwiIXNob3dDcm9zc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJjbGVhckRhdGUoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhcjwvbWF0LWljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRTdWZmaXggW2Zvcl09XCJwaWNrZXJcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5neC1tYXQtZGF0ZXRpbWUtcGlja2VyICNwaWNrZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsb3NlZCk9XCJzZXRTdGF0ZSh7dG91Y2hlZDp0cnVlLGRpcnR5OmRhdGVGaWVsZC5kaXJ0eX0sIGRhdGVQaWNrZXJTdGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAob3BlbmVkKT1cInRvZ2dsZU1vZGFsQ3NzQ2xhc3MoKVwiIFtlbmFibGVNZXJpZGlhbl09XCJlbmFibGVNZXJpZGlhblwiICBbc3RlcEhvdXJdPVwidGltZUNvbmZpZy5ob3VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0ZXBNaW51dGVdPVwidGltZUNvbmZpZy5taW51dGVcIiBbc3RlcFNlY29uZF09XCJ0aW1lQ29uZmlnLnNlY29uZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5PSzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmd4LW1hdC1kYXRldGltZS1waWNrZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImVycm9yTWFzc2FnZVRlbXBsYXRlOyBjb250ZXh0OntkYXRlUGlja2VyOmRhdGVQaWNrZXJ9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2RhdGVfcmFuZ2UnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRlLXJhbmdlLWNvbnRpbmVyIGZvcm0tZmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInt7aXNGdXR1cmVEYXRlIHx8ICFpc1ZhbGlkIHx8IGludmFsaWREYXRlIHx8IGRhdGVGaWVsZFN0YXJ0Lmhhc0Vycm9yKCdtYXREYXRlcGlja2VyTWF4JykgfHwgZGF0ZUZpZWxkU3RhcnQuaGFzRXJyb3IoJ21hdERhdGVwaWNrZXJNaW4nKSB8fCBkYXRlRmllbGRTdGFydC5oYXNFcnJvcignbWF0RGF0ZXBpY2tlclBhcnNlJykgfHwgZGF0ZUZpZWxkRW5kLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyTWF4JykgfHwgZGF0ZUZpZWxkRW5kLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyTWluJykgfHwgZGF0ZUZpZWxkRW5kLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyUGFyc2UnKSB8fCAoIWVuZERhdGVSYW5nZURpc3AgJiYgaXNNYW5kYXRvcnkgJiYgKGRhdGVQaWNrZXJTdGF0ZS5kaXJ0eSB8fCBkYXRlUGlja2VyU3RhdGUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZS1yYW5nZS1pbnB1dCAgW21pbl09XCJtaW5EYXRleFwiIFttYXhdPVwibWF4RGF0ZXhcIiBjbGFzcz1cImZvcm0tY29udHJvbFwiIFtyYW5nZVBpY2tlcl09XCJkYXRlUmFuZ2VQaWNrZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0U3RhcnREYXRlIFsobmdNb2RlbCldPVwic3RhcnREYXRlUmFuZ2VEaXNwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3BsYWNlaG9sZGVyXT1cImRhdGVSYW5nZVN0YXJ0UGxhY2Vob2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZGF0ZUZpZWxkU3RhcnQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2RhdGVSYW5nZVN0YXJ0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChibHVyKT1cIm9uQmx1ckRQKCRldmVudC50YXJnZXQudmFsdWUpOyBzZXRTdGF0ZShkYXRlRmllbGRTdGFydCwgZGF0ZVBpY2tlclN0YXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChrZXl1cCk9XCJvbkRhdGVJbnB1dCgkZXZlbnQudGFyZ2V0LnZhbHVlKTsgc2V0U3RhdGUoZGF0ZUZpZWxkU3RhcnQsIGRhdGVQaWNrZXJTdGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cIm9uRGF0ZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUsIHRydWUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGZvY3VzKT1cIiFhbGxvd01hbnVhbEVudHJ5ICYmIGRhdGVSYW5nZVBpY2tlci5vcGVuKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiIWFsbG93TWFudWFsRW50cnkgJiYgZGF0ZVJhbmdlUGlja2VyLm9wZW4oKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCIhYWxsb3dNYW51YWxFbnRyeVwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiaXNfbWF0ZXJpYWwgJiYgaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6ICdTZWxlY3QgJysgZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJ7e2ZpZWxkRGF0YS51bmlxdWVfaWR9fV9tYXNrdGV4dF9zdGFydFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRFbmREYXRlIFsobmdNb2RlbCldPVwiZW5kRGF0ZVJhbmdlRGlzcFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtwbGFjZWhvbGRlcl09XCJkYXRlUmFuZ2VFbmRQbGFjZWhvbGRlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICNkYXRlRmllbGRFbmQ9XCJuZ01vZGVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2RhdGVSYW5nZUVuZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoYmx1cik9XCJvbkJsdXJEUCgkZXZlbnQudGFyZ2V0LnZhbHVlKTsgc2V0U3RhdGUoZGF0ZUZpZWxkRW5kLCBkYXRlUGlja2VyU3RhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGtleXVwKT1cIm9uRGF0ZUlucHV0KCRldmVudC50YXJnZXQudmFsdWUpOyBzZXRTdGF0ZShkYXRlRmllbGRFbmQsIGRhdGVQaWNrZXJTdGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwiIWFsbG93TWFudWFsRW50cnkgJiYgZGF0ZVJhbmdlUGlja2VyLm9wZW4oKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIhYWxsb3dNYW51YWxFbnRyeSAmJiBkYXRlUmFuZ2VQaWNrZXIub3BlbigpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3JlYWRvbmx5XT1cIiFhbGxvd01hbnVhbEVudHJ5XCIgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZXF1aXJlZF09XCJpc19tYXRlcmlhbCAmJiBpc01hbmRhdG9yeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1NlbGVjdCAnKyBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInt7ZmllbGREYXRhLnVuaXF1ZV9pZH19X21hc2t0ZXh0X2VuZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRlQ2hhbmdlKT1cImRhdGVSYW5nZUNoYW5nZShkYXRlUmFuZ2VTdGFydCwgZGF0ZVJhbmdlRW5kKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZGF0ZS1yYW5nZS1pbnB1dD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBjbGFzcz1cImNsZWFyLWRhdGUtcmFuZ2VcIiAqbmdJZj1cImlzRWRpdGFibGVcIiBhbHQ9XCJDYWxlbmRlciBJY29uIEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyaWEtbGFiZWw9XCJjbGVhciBkYXRlIHBpY2tlclwiIG1hdERhdGVwaWNrZXJUb2dnbGVJY29uIFtoaWRkZW5dPVwiIXNob3dDcm9zc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2xlYXJEYXRlUmFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXI8L21hdC1pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyLXRvZ2dsZSBtYXRQcmVmaXggW2Zvcl09XCJkYXRlUmFuZ2VQaWNrZXJcIj4gPC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGUtcmFuZ2UtcGlja2VyICNkYXRlUmFuZ2VQaWNrZXI+PC9tYXQtZGF0ZS1yYW5nZS1waWNrZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNWYWxpZFwiPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImRhdGVSYW5nZUVycm9yTWFzc2FnZVRlbXBsYXRlOyBjb250ZXh0OntkYXRlUGlja2VyOmRhdGVGaWVsZEVuZH1cIj48L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDwvbmctY29udGFpbmVyPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInZGF0ZV9yYW5nZV9ib29zdHJhcCdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cInJhbmdlQ2FsZW5kYXJBdXRvcmlnaHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJib3gtc2hhZG93OiBub25lOyB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpczsgb3ZlcmZsb3c6IGhpZGRlbjsgd2hpdGUtc3BhY2U6IG5vd3JhcDtcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5neERhdGVyYW5nZXBpY2tlckJvb3RzdHJhcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZFJhbmdlQ2FsZW5kYXJDZW50ZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Ryb3BzXT1cImRyb3BzRG93blwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbb3BlbnNdPVwib3BlbnNMZWZ0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtsb2NhbGVdPVwibG9jYWxlU2V0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyYW5nZXNdPVwicmFuZ2VzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93Q3VzdG9tUmFuZ2VMYWJlbF09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtzaG93Q2FuY2VsXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2xpbmtlZENhbGVuZGFyc109XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthbHdheXNTaG93Q2FsZW5kYXJzXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Nob3dSYW5nZUxhYmVsT25JbnB1dF09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBba2VlcENhbGVuZGFyT3BlbmluZ1dpdGhSYW5nZV09XCJmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xvc2VPbkF1dG9BcHBseV09XCJ0cnVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdXRvQXBwbHldPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lzVG9vbHRpcERhdGVdPVwiaXNUb29sdGlwRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNDdXN0b21EYXRlXT1cImlzQ3VzdG9tRGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaXNJbnZhbGlkRGF0ZV09XCJpc0ludmFsaWREYXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkYXRlc1VwZGF0ZWQpPVwiZGF0ZXNVcGRhdGVkUmFuZ2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwicmFuZ2VDYWxlbmRhckF1dG9MZWZ0RGVzY1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hEZWZhdWx0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtuZ0NsYXNzXT1cInsnaW5wdXQtZ3JvdXAnOiAhaXNfbWF0ZXJpYWx9XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwie3tpc0Z1dHVyZURhdGUgfHwgaW52YWxpZERhdGUgfHwgZGF0ZVBpY2tlci5oYXNFcnJvcignbWF0RGF0ZXBpY2tlck1heCcpIHx8IGRhdGVQaWNrZXIuaGFzRXJyb3IoJ21hdERhdGVwaWNrZXJNaW4nKSB8fCBkYXRlUGlja2VyLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyUGFyc2UnKSB8fCAoIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKGRhdGVQaWNrZXJTdGF0ZS5kaXJ0eSB8fCBkYXRlUGlja2VyU3RhdGUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSA/ICdpbnZhbGlkJyA6ICd2YWxpZCcgfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmbG9hdExhYmVsPVwie3shaXNfbWF0ZXJpYWw/J25ldmVyJzonYXV0byd9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWwgKm5nSWY9J2lzX21hdGVyaWFsJz57e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8aW5wdXQgbWF0SW5wdXQgW3RleHRNYXNrXT1cIm1hc2tEYXRhXCIgW25nTW9kZWxdPVwic2hhZG93VmFsdWVcIiAtLT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhpZGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cIm1hc2tEYXRlSW5wdXRzOyBjb250ZXh0Ont1aVR5cGU6J2RlZmF1bHQnLCBwaWNrZXI6IHBpY2tlcn1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgW25nTW9kZWxdPVwic2hhZG93VmFsdWVcIiBbbWFza109XCJtYXNrU3RyaW5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGJsdXIpPVwib25CbHVyRFAoJGV2ZW50LnRhcmdldC52YWx1ZSk7b25CbHVyRFBTZXRTdGF0ZSgkZXZlbnQudGFyZ2V0LnZhbHVlLGRhdGVGaWVsZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwib25EYXRlSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSk7IHNldFN0YXRlKGRhdGVGaWVsZCwgZGF0ZVBpY2tlclN0YXRlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwib25EYXRlSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSwgdHJ1ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwiIWFsbG93TWFudWFsRW50cnkgJiYgc2V0SGlkZGVuT3ZlcmxheSgpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cIiFhbGxvd01hbnVhbEVudHJ5ICYmIHBpY2tlci5vcGVuKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHR9fVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtyZWFkb25seV09XCIhYWxsb3dNYW51YWxFbnRyeVwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiaXNfbWF0ZXJpYWwgJiYgaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6ICdTZWxlY3QgJysgZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgI2RhdGVGaWVsZD1cIm5nTW9kZWxcIiBpZD1cInt7ZmllbGREYXRhLnVuaXF1ZV9pZH19X21hc2t0ZXh0XCIgW2hpZGRlbl09XCJoaWRlXCI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInNoYWRvdy1kYXRlSW5wdXRcIiBbbWluXT1cIm1pbkRhdGV4XCIgW21heF09XCJtYXhEYXRleFwiIFttYXREYXRlcGlja2VyXT1cInBpY2tlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwibWFza0lucHV0VmFsdWVcIiAjZGF0ZVBpY2tlcj1cIm5nTW9kZWxcIiByZWFkb25seVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0ZUNoYW5nZSk9XCJvbkRhdGVDaGFuZ2UoKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX1fbWFza3RleHRcIiB0YWJpbmRleD1cIi0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIGNsYXNzPVwibWF0LWljb24tY2xhc3NcIiAqbmdJZj1cImlzRWRpdGFibGVcIiBhbHQ9XCJDYWxlbmRlciBJY29uIEltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cImNsb3NlIGRhdGUgcGlja2VyXCIgbWF0RGF0ZXBpY2tlclRvZ2dsZUljb24gW2hpZGRlbl09XCIhc2hvd0Nyb3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNsZWFyRGF0ZSgkZXZlbnQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFyPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIG1hdFN1ZmZpeCBbZm9yXT1cInBpY2tlclwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xvc2VkKT1cIm9uTm9EYXRlU2VsZWN0aW9uKCk7c2V0U3RhdGUoe3RvdWNoZWQ6dHJ1ZSxkaXJ0eTpkYXRlRmllbGQuZGlydHl9LCBkYXRlUGlja2VyU3RhdGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9wZW5lZCk9XCJ0b2dnbGVNb2RhbENzc0NsYXNzKClcIj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImVycm9yTWFzc2FnZVRlbXBsYXRlOyBjb250ZXh0OntkYXRlUGlja2VyOmRhdGVQaWNrZXJ9XCI+PC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG48L2Rpdj5cclxuPCEtLSBlcnJvciBtYXNzYWdlIFRlbXBsYXRlIC0tPlxyXG48bmctdGVtcGxhdGUgI2Vycm9yTWFzc2FnZVRlbXBsYXRlIGxldC1kYXRlUGlja2VyPVwiZGF0ZVBpY2tlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpcGxlRXJyb3JNZXNzYWdlIGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWludmFsaWREYXRlICYmICFkYXRlUGlja2VyLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyUGFyc2UnKSAmJiAhaW5wdXRWYWx1ZSAmJiBpc01hbmRhdG9yeSAmJiAoZGF0ZVBpY2tlclN0YXRlLmRpcnR5IHx8IGRhdGVQaWNrZXJTdGF0ZS50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dClcIj5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPG5nLXRlbXBsYXRlICNzaW5nbGVFcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwiIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKHNob3dFcnJvck9uTmV4dClcIj5cclxuICAgICAgICAgICAgPHAgW25nU3R5bGVdPVwieydjb2xvcic6IGVycm9yTWVzc2FnZURhdGEuY29sb3J9XCI+e3tlcnJvck1lc3NhZ2VEYXRhLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT5cclxuXHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNob3dDb21wYXJpc29uRXJyb3IgfCBrZXl2YWx1ZVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwIFtuZ1N0eWxlXT1cInsnY29sb3InOiBpdGVtLnZhbHVlLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIFxyXG4gICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2UtdmFsaWRhdGlvblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhaW52YWxpZERhdGUgJiYgIWlzRnV0dXJlRGF0ZSAmJiBkYXRlUGlja2VyLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyTWF4JylcIj5cclxuICAgICAgICAgICAgICAgIHt7YWRkaXRpb25hbFBhcmFtZXRlclsnbWF4X2RhdGVfZXJyb3InXX19PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yXCJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWludmFsaWREYXRlICYmICFpc0Z1dHVyZURhdGUgJiYgZGF0ZVBpY2tlci5oYXNFcnJvcignbWF0RGF0ZXBpY2tlck1pbicpXCI+XHJcbiAgICAgICAgICAgICAgICB7e2FkZGl0aW9uYWxQYXJhbWV0ZXJbJ21pbl9kYXRlX2Vycm9yJ119fTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiIWludmFsaWREYXRlICYmIGlzRnV0dXJlRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAge3thZGRpdGlvbmFsUGFyYW1ldGVyWydmdXR1cmVfZGF0ZV9lcnJvciddfX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImludmFsaWREYXRlIHx8IGRhdGVQaWNrZXIuaGFzRXJyb3IoJ21hdERhdGVwaWNrZXJQYXJzZScpXCI+XHJcbiAgICAgICAgICAgICAgICB7e2FkZGl0aW9uYWxQYXJhbWV0ZXJbJ2ludmFsaWRfZGF0ZV9lcnJvciddfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIFRvb2x0aXAgd2l0aCBpbmZvcm1haW9uIGljb24gLS0+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiaXNfbWF0ZXJpYWwgJiYgaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0byBidG4tdG9vbHRpcC17e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIj5cclxuICAgICAgICBpXHJcbiAgICA8L2J1dHRvbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjwhLS0gZGF0ZSByYW5nZSBlcnJvciBtYXNzYWdlIFRlbXBsYXRlIC0tPlxyXG48bmctdGVtcGxhdGUgI2RhdGVSYW5nZUVycm9yTWFzc2FnZVRlbXBsYXRlIGxldC1kYXRlUGlja2VyPVwiZGF0ZVBpY2tlclwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpcGxlRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWludmFsaWREYXRlICYmICFkYXRlUGlja2VyLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyUGFyc2UnKSAmJiAhZW5kRGF0ZVJhbmdlRGlzcCAmJiBpc01hbmRhdG9yeSAmJiAoZGF0ZVBpY2tlclN0YXRlLmRpcnR5IHx8IGRhdGVQaWNrZXJTdGF0ZS50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dClcIj5cclxuICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fVxyXG4gICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2UtdmFsaWRhdGlvblwiPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgKm5nSWY9XCIhaW52YWxpZERhdGUgJiYgIWlzRnV0dXJlRGF0ZSAmJiBkYXRlUGlja2VyLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyTWF4JylcIj5cclxuICAgICAgICAgICAgICAgIHt7YWRkaXRpb25hbFBhcmFtZXRlclsnbWF4X2RhdGVfZXJyb3InXX19PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yXCJcclxuICAgICAgICAgICAgICAgICpuZ0lmPVwiIWludmFsaWREYXRlICYmICFpc0Z1dHVyZURhdGUgJiYgZGF0ZVBpY2tlci5oYXNFcnJvcignbWF0RGF0ZXBpY2tlck1pbicpXCI+XHJcbiAgICAgICAgICAgICAgICB7e2FkZGl0aW9uYWxQYXJhbWV0ZXJbJ21pbl9kYXRlX2Vycm9yJ119fTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiIWludmFsaWREYXRlICYmIGlzRnV0dXJlRGF0ZVwiPlxyXG4gICAgICAgICAgICAgICAge3thZGRpdGlvbmFsUGFyYW1ldGVyWydmdXR1cmVfZGF0ZV9lcnJvciddfX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cImludmFsaWREYXRlIHx8IGRhdGVQaWNrZXIuaGFzRXJyb3IoJ21hdERhdGVwaWNrZXJQYXJzZScpXCI+XHJcbiAgICAgICAgICAgICAgICB7e2FkZGl0aW9uYWxQYXJhbWV0ZXJbJ2ludmFsaWRfZGF0ZV9lcnJvciddfX08L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8IS0tIFRvb2x0aXAgd2l0aCBpbmZvcm1haW9uIGljb24gLS0+XHJcbiAgICA8YnV0dG9uICpuZ0lmPVwiaXNfbWF0ZXJpYWwgJiYgaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIlxyXG4gICAgICAgIGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0byBidG4tdG9vbHRpcC17e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiXHJcbiAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIj5cclxuICAgICAgICBpXHJcbiAgICA8L2J1dHRvbj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuPCEtLSBUb29sdGlwIFRlbXBsYXRlIC0tPlxyXG48IS0tIFRvb2x0aXAgVGVtcGxhdGUgLS0+XHJcbjwhLS0gPG5nLXRlbXBsYXRlICN0b29sdGlwVGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9jb250YWluZXJcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cInRvb2x0aXBfdGV4dFwiIFtpbm5lckhUTUxdPVwiZmllbGREYXRhLnRvb2x0aXBcIj48L3NwYW4+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy10ZW1wbGF0ZT4gLS0+XHJcblxyXG48bmctdGVtcGxhdGUgI21hc2tEYXRlSW5wdXRzIGxldC11aVR5cGU9XCJ1aVR5cGVcIiBsZXQtcGlja2VyPVwicGlja2VyXCI+XHJcbiAgICBAc3dpdGNoICh1aVR5cGUpIHtcclxuICAgICAgICBAY2FzZSAoJ3dpdGhfdGltZScpIHtcclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwibWFza2VkLWlucHV0XCIgbWF0SW5wdXQgW25nTW9kZWxdPVwicmVkYWN0ZWRWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAoZm9jdXMpPVwicGlja2VyLm9wZW4oKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGlja2VyLm9wZW4oKVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHR9fVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiIFxyXG4gICAgICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiaXNfbWF0ZXJpYWwgJiYgaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiAnU2VsZWN0ICcrIGZpZWxkRGF0YS5maWVsZF9sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAjZGF0ZUZpZWxkPVwibmdNb2RlbFwiIGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX1fbWFza3RleHRfcmVkYWN0ZWRcIiBbcmVhZG9ubHldPVwidHJ1ZVwiPlxyXG4gICAgICAgIH1cclxuICAgICAgICBAY2FzZSAoJ2RlZmF1bHQnKSB7XHJcbiAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cIm1hc2tlZC1pbnB1dFwiIG1hdElucHV0IFtuZ01vZGVsXT1cInJlZGFjdGVkVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgKGZvY3VzKT1cInNldEhpZGRlbk92ZXJsYXkoKVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwicGlja2VyLm9wZW4oKVwiXHJcbiAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHR9fVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgW3JlcXVpcmVkXT1cImlzX21hdGVyaWFsICYmIGlzTWFuZGF0b3J5XCJcclxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1NlbGVjdCAnKyBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgI2RhdGVGaWVsZD1cIm5nTW9kZWxcIiBpZD1cInt7ZmllbGREYXRhLnVuaXF1ZV9pZH19X21hc2t0ZXh0X3JlZGFjdGVkXCIgW3JlYWRvbmx5XT1cInRydWVcIj5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbjwvbmctdGVtcGxhdGU+Il19