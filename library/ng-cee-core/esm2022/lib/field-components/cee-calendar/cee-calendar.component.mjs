import { Component, Input, ViewChild } from '@angular/core';
import { NgClass, NgStyle, CommonModule } from '@angular/common';
import { BaseView } from '../cee-base-class';
// import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
import { take } from 'rxjs/operators';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CustomTooltipDirective } from '../../directives/app.directive';
import { MatInputModule } from '@angular/material/input';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { Subscription } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "../../services/user-data-handler.service";
import * as i3 from "../../services/internal-cee-emitter-service.service";
import * as i4 from "../../services/shared-events-service.service";
import * as i5 from "../../models/app-data/app-data.service";
import * as i6 from "../../models/api-data/api-data.service";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "@angular/material/dialog";
import * as i9 from "@angular/material/snack-bar";
import * as i10 from "@angular/common/http";
import * as i11 from "@angular/material/form-field";
import * as i12 from "@angular/material/input";
import * as i13 from "@angular/forms";
import * as i14 from "@angular/material/datepicker";
import * as i15 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["datePicker"];
const _c1 = a0 => ({ "current": a0 });
const _c2 = a0 => ({ "color": a0 });
function CeeCalendarComponent_div_0_div_2_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 33);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeCalendarComponent_div_0_div_2_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 34);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeCalendarComponent_div_0_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_div_2_ng_container_1_label_1_Template, 2, 1, "label", 31)(2, CeeCalendarComponent_div_0_div_2_ng_container_1_label_2_Template, 1, 1, "label", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeCalendarComponent_div_0_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 35);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeCalendarComponent_div_0_div_2_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 36);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeCalendarComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_div_2_ng_container_1_Template, 3, 2, "ng-container", 8)(2, CeeCalendarComponent_div_0_div_2_span_2_Template, 2, 0, "span", 29)(3, CeeCalendarComponent_div_0_div_2_button_3_Template, 2, 2, "button", 30);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
function CeeCalendarComponent_div_0_mat_label_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeCalendarComponent_div_0_div_12_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["max_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_p_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["min_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_p_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["future_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_p_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["invalid_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_p_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 39);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.additionalParameter["unavailable_date_error"], "");
} }
function CeeCalendarComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 37)(1, "div");
    i0.ɵɵtemplate(2, CeeCalendarComponent_div_0_div_12_p_2_Template, 2, 1, "p", 38)(3, CeeCalendarComponent_div_0_div_12_p_3_Template, 2, 1, "p", 38)(4, CeeCalendarComponent_div_0_div_12_p_4_Template, 2, 1, "p", 38)(5, CeeCalendarComponent_div_0_div_12_p_5_Template, 2, 1, "p", 38)(6, CeeCalendarComponent_div_0_div_12_p_6_Template, 2, 1, "p", 38);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const datePicker_r3 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r3.hasError("matDatepickerMax"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && !ctx_r1.isFutureDate && datePicker_r3.hasError("matDatepickerMin"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.invalidDate && ctx_r1.isFutureDate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.invalidDate || datePicker_r3.hasError("matDatepickerParse"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.invalidDate || datePicker_r3.hasError("matDatepickerMax") || datePicker_r3.hasError("matDatepickerMin") || ctx_r1.isFutureDate) && ctx_r1.isUnavailableDate);
} }
function CeeCalendarComponent_div_0_button_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 40);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn-tooltip ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeCalendarComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 41)(1, "span", 42);
    i0.ɵɵlistener("keydown.enter", function CeeCalendarComponent_div_0_div_17_Template_span_keydown_enter_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateMonthIndex(-1)); })("click", function CeeCalendarComponent_div_0_div_17_Template_span_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateMonthIndex(-1)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 43);
    i0.ɵɵlistener("keydown.enter", function CeeCalendarComponent_div_0_div_17_Template_span_keydown_enter_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateMonthIndex(1)); })("click", function CeeCalendarComponent_div_0_div_17_Template_span_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.updateMonthIndex(1)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
} }
function CeeCalendarComponent_div_0_ng_container_27_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const week_r6 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("title", week_r6.full);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", week_r6.short, " ");
} }
function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_div_1_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayView_r8 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(dayView_r8.label);
} }
function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "span", 54);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_div_1_span_3_Template, 2, 1, "span", 55);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayView_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵclassProp("DayPicker-Day-With-Label", dayView_r8.label);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(dayView_r8.date.getDate());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", dayView_r8.label);
} }
function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52);
    i0.ɵɵlistener("keydown", function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template_div_keydown_0_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.handleKeyDown($event)); })("click", function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template_div_click_0_listener() { const dayView_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.isEditable && !dayView_r8.disabled && ctx_r1.onDateSelected(dayView_r8)); })("keydown.enter", function CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template_div_keydown_enter_0_listener() { const dayView_r8 = i0.ɵɵrestoreView(_r7).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.isEditable && !dayView_r8.disabled && ctx_r1.onDateSelected(dayView_r8)); });
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_div_1_Template, 4, 4, "div", 53);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const dayView_r8 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵstyleProp("color", dayView_r8.color);
    i0.ɵɵclassProp("DayPicker-Day--currMonth", dayView_r8.currMonth)("DayPicker-Day--today", dayView_r8.today)("DayPicker-Day--disabled", !ctx_r1.isEditable || dayView_r8.disabled)("DayPicker-Day--selected", dayView_r8.value === ctx_r1.shadowValue)("DayPicker-Day--unAvailable", dayView_r8.unAvailable);
    i0.ɵɵattribute("aria-label", dayView_r8.ariaLabel)("aria-disabled", !ctx_r1.isEditable || dayView_r8.disabled)("aria-selected", dayView_r8.value === ctx_r1.shadowValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", dayView_r8.currMonth);
} }
function CeeCalendarComponent_div_0_ng_container_27_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_27_div_5_div_1_Template, 2, 16, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const calendarWeek_r9 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", calendarWeek_r9);
} }
function CeeCalendarComponent_div_0_ng_container_27_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 44)(2, "div", 45);
    i0.ɵɵtemplate(3, CeeCalendarComponent_div_0_ng_container_27_div_3_Template, 2, 2, "div", 46);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div", 47);
    i0.ɵɵlistener("focus", function CeeCalendarComponent_div_0_ng_container_27_Template_div_focus_4_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.OnDayViewFocus($event)); });
    i0.ɵɵtemplate(5, CeeCalendarComponent_div_0_ng_container_27_div_5_Template, 2, 1, "div", 48);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.weekArray);
    i0.ɵɵadvance();
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.calendarDays);
} }
function CeeCalendarComponent_div_0_div_28_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "button", 61);
    i0.ɵɵlistener("click", function CeeCalendarComponent_div_0_div_28_div_2_Template_button_click_1_listener() { const m_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.setMonthData(m_r11.value)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const m_r11 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", m_r11.disabled)("ngClass", i0.ɵɵpureFunction1(3, _c1, m_r11.full == ctx_r1.captionData.month && !m_r11.disabled));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(m_r11.short);
} }
function CeeCalendarComponent_div_0_div_28_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 57)(1, "div", 58);
    i0.ɵɵtemplate(2, CeeCalendarComponent_div_0_div_28_div_2_Template, 3, 5, "div", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.monthArray);
} }
function CeeCalendarComponent_div_0_div_29_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 60)(1, "button", 63);
    i0.ɵɵlistener("click", function CeeCalendarComponent_div_0_div_29_div_2_Template_button_click_1_listener() { const y_r13 = i0.ɵɵrestoreView(_r12).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.setYearData(y_r13.value)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const y_r13 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c1, y_r13.value == ctx_r1.captionData.year && !y_r13.disabled))("disabled", y_r13.disabled);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(y_r13.value);
} }
function CeeCalendarComponent_div_0_div_29_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62)(1, "div", 58);
    i0.ɵɵtemplate(2, CeeCalendarComponent_div_0_div_29_div_2_Template, 3, 5, "div", 59);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.yearArray);
} }
function CeeCalendarComponent_div_0_ng_container_30_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 68);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r14 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r1.returnMessageData(message_r14.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r14.code).message_text, " ");
} }
function CeeCalendarComponent_div_0_ng_container_30_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 66);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_30_ng_container_1_div_1_p_1_Template, 2, 4, "p", 67);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeCalendarComponent_div_0_ng_container_30_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_30_ng_container_1_div_1_Template, 2, 1, "div", 65);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext));
} }
function CeeCalendarComponent_div_0_ng_container_30_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeCalendarComponent_div_0_ng_container_30_ng_container_1_Template, 2, 1, "ng-container", 64);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeCalendarComponent_div_0_span_32_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const type_r15 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("", type_r15.typeName.toLowerCase(), " box");
    i0.ɵɵstyleProp("color", type_r15.color);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("D-", type_r15.typeName, "");
} }
function CeeCalendarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵtemplate(2, CeeCalendarComponent_div_0_div_2_Template, 4, 3, "div", 5);
    i0.ɵɵelementStart(3, "div", 6)(4, "mat-form-field", 7);
    i0.ɵɵtemplate(5, CeeCalendarComponent_div_0_mat_label_5_Template, 2, 1, "mat-label", 8);
    i0.ɵɵelementStart(6, "input", 9);
    i0.ɵɵlistener("keypress", function CeeCalendarComponent_div_0_Template_input_keypress_6_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.dateOnly($event)); })("keyup", function CeeCalendarComponent_div_0_Template_input_keyup_6_listener($event) { i0.ɵɵrestoreView(_r1); const datePicker_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); ctx_r1.onDateInput($event.target.value); return i0.ɵɵresetView(ctx_r1.setState({ touched: true, dirty: datePicker_r3.dirty }, ctx_r1.datePickerState)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "input", 10, 0);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeCalendarComponent_div_0_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(9, "mat-datepicker-toggle", 11);
    i0.ɵɵelementStart(10, "mat-datepicker", 12, 1);
    i0.ɵɵlistener("closed", function CeeCalendarComponent_div_0_Template_mat_datepicker_closed_10_listener() { i0.ɵɵrestoreView(_r1); const datePicker_r3 = i0.ɵɵreference(8); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.setState({ touched: true, dirty: datePicker_r3.dirty }, ctx_r1.datePickerState)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(12, CeeCalendarComponent_div_0_div_12_Template, 7, 5, "div", 13)(13, CeeCalendarComponent_div_0_button_13_Template, 2, 5, "button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(14, "div", 15)(15, "div", 16)(16, "div", 17);
    i0.ɵɵlistener("keydown", function CeeCalendarComponent_div_0_Template_div_keydown_16_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleKeyDownCalendar($event)); });
    i0.ɵɵtemplate(17, CeeCalendarComponent_div_0_div_17_Template, 3, 2, "div", 18);
    i0.ɵɵelementStart(18, "div", 19)(19, "div", 20)(20, "div", 21)(21, "div")(22, "span", 22);
    i0.ɵɵlistener("click", function CeeCalendarComponent_div_0_Template_span_click_22_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.displayView("M")); });
    i0.ɵɵtext(23);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(24, "\u00A0 ");
    i0.ɵɵelementStart(25, "span", 23);
    i0.ɵɵlistener("click", function CeeCalendarComponent_div_0_Template_span_click_25_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.displayView("Y")); });
    i0.ɵɵtext(26);
    i0.ɵɵelementEnd()()();
    i0.ɵɵtemplate(27, CeeCalendarComponent_div_0_ng_container_27_Template, 6, 3, "ng-container", 8)(28, CeeCalendarComponent_div_0_div_28_Template, 3, 1, "div", 24)(29, CeeCalendarComponent_div_0_div_29_Template, 3, 1, "div", 25);
    i0.ɵɵelementEnd()()()()();
    i0.ɵɵtemplate(30, CeeCalendarComponent_div_0_ng_container_30_Template, 2, 1, "ng-container", 8);
    i0.ɵɵelementStart(31, "div", 26);
    i0.ɵɵtemplate(32, CeeCalendarComponent_div_0_span_32_Template, 2, 6, "span", 27);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const picker_r16 = i0.ɵɵreference(11);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.fieldData.unique_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.is_material);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("input-group ", !ctx_r1.inputValue && ctx_r1.isMandatory && (ctx_r1.datePickerState.dirty || ctx_r1.datePickerState.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("floatLabel", !ctx_r1.is_material ? "never" : "auto");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("value", ctx_r1.shadowValue)("required", ctx_r1.is_material && ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable)("readonly", !ctx_r1.allowManualEntry);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue)("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Select " + ctx_r1.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("min", ctx_r1.minDate)("max", ctx_r1.maxDate)("matDatepicker", picker_r16);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", picker_r16);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", true);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.allowManualEntry && ctx_r1.datePickerState.touched);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.is_material && ctx_r1.hasTooltip);
    i0.ɵɵadvance(3);
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.view.month);
    i0.ɵɵadvance(6);
    i0.ɵɵtextInterpolate(ctx_r1.captionData.month);
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(ctx_r1.captionData.year);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.view.day);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.view.month);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.view.year);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.typeWiseList);
} }
export class CeeCalendarComponent extends BaseView {
    datepipe;
    userDataHandlerService;
    internalCEEEmitter;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    elementRef;
    datePicker;
    stepId;
    fieldData;
    rowData;
    keepState = false;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    minDate;
    maxDate;
    isValid = true;
    inputValue;
    now = new Date();
    nowDate = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
    datePickerState = {
        touched: false,
        dirty: false
    };
    dayPickerIndex = new Date();
    monthCaption;
    calendarDays = [];
    dateData = {};
    allowManualEntry;
    invalidDate = false;
    previousDateInputValue = "";
    isUnavailableDate = false;
    dateFormat = 'MM/DD/YYYY';
    apiDateFormat = 'MM/DD/YYYY';
    defaultValue;
    typeWiseList = [];
    weekArray = [];
    monthArray = [];
    yearArray = [];
    locale = 'en';
    captionData = {
        month: '',
        year: ''
    };
    view = {
        day: true,
        month: false,
        year: false
    };
    switchTimeout = null;
    subscriptions = new Subscription();
    jQueryCleanupElements = [];
    momentInstances = []; // Track moment instances
    constructor(datepipe, userDataHandlerService, internalCEEEmitter, sharedEventsService, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, elementRef) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.datepipe = datepipe;
        this.userDataHandlerService = userDataHandlerService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.sharedEventsService = sharedEventsService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.elementRef = elementRef;
    }
    get currDate() {
        let d = new Date();
        d.setHours(0, 0, 0, 0);
        return d;
    }
    updateMonthIndex(index) {
        if (index) {
            if (this.view.day) {
                this.dayPickerIndex.setMonth(this.dayPickerIndex.getMonth() + index);
                this.generateDayPicker();
            }
            else if (this.view.year) {
                let currentYear = (index == -1) ? (this.yearArray[0].value - 12) : (this.yearArray[this.yearArray.length - 1].value + 1);
                this.yearArray = [];
                this.loadYearList(currentYear);
            }
        }
    }
    generateDayPicker() {
        if (this.dayPickerIndex) {
            const captionDate = moment.default(this.dayPickerIndex.toISOString()).locale(this.locale);
            if (captionDate) {
                this.captionData.month = captionDate.format('MMMM');
                this.captionData.year = captionDate.format('YYYY');
            }
            const date = new Date(this.dayPickerIndex);
            const firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
            const lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
            const firstCalendarDay = this.getSunday(firstDay);
            const lastCalendarDay = this.getSaturday(lastDay);
            const cDays = [];
            let count = 0;
            for (var d = new Date(firstCalendarDay); d <= lastCalendarDay; d.setDate(d.getDate() + 1)) {
                const index = Math.floor(count / 7);
                if (!cDays[index]) {
                    cDays[index] = [];
                }
                const dayView = {
                    date: new Date(d),
                    value: moment.default(d.toISOString()).format(this.dateFormat),
                    ariaLabel: moment.default(d.toISOString()).format('dddd MMM DD YYYY'),
                    today: d.getTime() === this.nowDate.getTime(),
                    currMonth: d.getMonth() === date.getMonth(),
                    disabled: true,
                    unAvailable: false,
                    label: '',
                    color: ''
                };
                if (this.validateMinMaxRange(d)) {
                    const dateKey = moment.default(d.toISOString()).format(this.apiDateFormat);
                    if (this.dateData[dateKey]) {
                        dayView.disabled = this.dateData[dateKey].disabled;
                        dayView.label = this.dateData[dateKey].label;
                        dayView.color = this.dateData[dateKey].color;
                        dayView.unAvailable = this.dateData[dateKey].unAvailable;
                    }
                    else if (this.dateData['all']) {
                        dayView.disabled = this.dateData['all'].disabled;
                        dayView.label = this.dateData['all'].label;
                        dayView.color = this.dateData['all'].color;
                        dayView.unAvailable = this.dateData['all'].unAvailable;
                    }
                }
                cDays[index].push(dayView);
                count++;
            }
            this.calendarDays = cDays;
        }
    }
    // Check if the entered date value is unavailable i.e Disabled. If yes then return true.
    checkIfUnavailableDate(dateValue) {
        let strDateValue = dateValue ? moment.default(new Date(dateValue).toISOString()).format(this.dateFormat) : "";
        for (const dateList of this.calendarDays) {
            for (const innerDate of dateList) {
                let strInnerDate = moment.default(new Date(innerDate.value).toISOString()).format(this.dateFormat);
                if ((strInnerDate === strDateValue) && (!this.isEditable || innerDate.disabled)) {
                    return true;
                }
            }
        }
        return false;
    }
    getSunday(d) {
        d = new Date(d);
        var day = d.getDay(), diff = d.getDate() - day;
        return new Date(d.setDate(diff));
    }
    getSaturday(d) {
        d = new Date(d);
        var day = d.getDay(), diff = d.getDate() + (6 - day);
        return new Date(d.setDate(diff));
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    ngOnDestroy() {
        if (this.switchTimeout) {
            clearTimeout(this.switchTimeout);
            this.switchTimeout = null;
        }
        // Clear subscriptions
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        // Clean up jQuery references
        this.jQueryCleanupElements.forEach(element => {
            if (element && element.length) {
                element.off(); // Remove all event handlers
            }
        });
        this.jQueryCleanupElements = [];
        // 4. Clear large object references
        this.calendarDays = [];
        this.dateData = {};
        this.typeWiseList = [];
        this.weekArray = [];
        this.monthArray = [];
        this.yearArray = [];
        // 5. Clear moment instances (if tracked)
        this.momentInstances.forEach(instance => {
            if (instance && typeof instance.destroy === 'function') {
                instance.destroy();
            }
        });
        this.momentInstances = [];
        // 6. Clear DOM references
        if (this.datePicker) {
            this.datePicker = null;
        }
        // 7. Clear date references
        this.inputValue = null;
        this.minDate = null;
        this.maxDate = null;
        this.dayPickerIndex = null;
        this.defaultValue = null;
        // 8. Reset flags and state
        this.dViewTabFlag = false;
        this.invalidDate = false;
        this.isUnavailableDate = false;
        // 9. Call parent cleanup
        this.onViewUnload();
    }
    get isFutureDate() {
        return (this.inputValue && this.additionalParameter['future_date_error'] && new Date(this.inputValue) > new Date());
    }
    get shadowValue() {
        return this.inputValue ? moment.default(new Date(this.inputValue).toISOString()).format(this.dateFormat) : "";
    }
    onViewDataInit() {
        this.setMinandMaxValue();
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        if (this.additionalParameter['default_value']) {
            this.defaultValue = this.additionalParameter['default_value'];
        }
        if (this.additionalParameter['Date Format']) {
            this.dateFormat = this.additionalParameter['Date Format'];
        }
        if (this.additionalParameter['API Date Format']) {
            this.apiDateFormat = this.additionalParameter['API Date Format'];
        }
        if (this.additionalParameter['allow_manual_entry']) {
            this.allowManualEntry = this.additionalParameter['allow_manual_entry'] === 'true' ? true : false;
        }
        if (this.additionalParameter['LanguageFieldID']) {
            this.subscriptions.add(this.appDataService.getAppDataByFieldId(this.additionalParameter['LanguageFieldID']).pipe(take(1))
                .subscribe(val => {
                this.locale = val.value;
                this.loadWeekList();
                this.loadMonthList();
                this.loadYearList();
            }));
        }
        else {
            this.loadWeekList();
            this.loadMonthList();
            this.loadYearList();
        }
        if (this.fieldValue !== undefined && !Array.isArray(this.fieldValue)) {
            if (this.fieldValue === 'CURR_DATE') {
                this.inputValue = new Date();
                this.onSessionDataUpdated(new Date());
            }
            else {
                this.inputValue = this.fieldValue ? this.commonUtil.adjustTZ(new Date(this.fieldValue)) : "";
                this.onSessionDataUpdated(this.inputValue);
            }
            this.previousDateInputValue = this.shadowValue;
        }
        if (this.defaultValue && (this.defaultValue.includes('d') || this.defaultValue.includes('m') || this.defaultValue.includes('y'))) {
            let calculated_date = this.returnDate(this.defaultValue);
            this.inputValue = calculated_date;
            this.onSessionDataUpdated(calculated_date);
        }
        if (this.fieldData.possible_values.length > 0) {
            for (const pVal of this.fieldData.possible_values) {
                const pvArr = pVal.split('||').map(s => s.trim());
                if (pvArr.length === 5) {
                    const dateVal = pvArr[0].split('|').map(s => s.trim());
                    const typeVal = pvArr[1].split('|').map(s => s.trim());
                    const color = pvArr[2].split('|').map(s => s.trim());
                    const label = pvArr[3].split('|').map(s => s.trim());
                    if (dateVal.length === 2) {
                        if (dateVal[0]) {
                            // dynamic dates
                            this.typeWiseList.push({
                                date: dateVal[0],
                                typeKey: typeVal[0],
                                typeName: typeVal[1],
                                color: color[0] || color[1],
                                label: label[0] || label[1],
                                disabled: (pvArr[4] === 'Clickable' ? false : true)
                            });
                        }
                        else {
                            // static dates
                            this.dateData[dateVal[1] ? dateVal[1] : 'all'] = {
                                color: color[1],
                                label: label[1],
                                disabled: (pvArr[4] === 'Clickable' ? false : true)
                            };
                            this.updateMonthIndex(this.monthDiff(this.dayPickerIndex, dateVal[1] ? new Date(dateVal[1]) : new Date()));
                        }
                    }
                }
            }
            this.generateDayPicker();
        }
        this.processApiRes(this.apiValue);
    }
    setDefaultDateFromAPI() {
        // console.log("unique_id: ",this.fieldData.unique_id)
        // console.log("getAllAppData: ",this.appDataService.getAllAppStoreData())
        // console.log("previousDateInputValue: ", this.previousDateInputValue)
        let appDatas = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        // console.log("appDatas: ",appDatas)
        if (!this.previousDateInputValue && this.defaultValue && (this.defaultValue.includes('##'))) {
            let apiDatas = this.apiDataService.getApiDataByHandler(this.defaultValue.split('##')[0]);
            if (apiDatas && apiDatas.value) {
                let calculated_date = this.commonUtil.adjustTZ(new Date(apiDatas.value[this.defaultValue]));
                this.inputValue = calculated_date;
                this.onSessionDataUpdated(calculated_date);
            }
        }
        if (!appDatas && this.previousDateInputValue) {
            this.inputValue = this.previousDateInputValue;
            this.onSessionDataUpdated(this.previousDateInputValue);
        }
    }
    loadWeekList() {
        const localeData = moment.localeData(this.locale);
        const shortWeek = Array.from(localeData.weekdaysShort());
        this.weekArray = localeData.weekdays().map((i, index) => {
            return { full: i, short: shortWeek[index], value: index };
        });
        // this.weekArray = Array.apply(null, Array(7)).map(function (_, i) {
        //   const week = moment.default(i, 'e').startOf('week').isoWeekday(i + 1).locale(this.locale)
        //   return { full: week.format('dddd'), short: week.format('ddd') };
        // }.bind(this));
    }
    setState(value, inputBoxesState) {
        inputBoxesState.touched !== value.touched && (inputBoxesState.touched = value.touched);
        inputBoxesState.dirty !== value.dirty && (inputBoxesState.dirty = value.dirty);
    }
    concatData() { }
    onDateSelected(d) {
        this.updateMonthIndex(this.monthDiff(this.dayPickerIndex, d.date));
        this.previousDateInputValue = this.shadowValue;
        this.inputValue = moment.default(d.value, this.dateFormat).toDate();
        this.isUnavailableDate = false;
        this.setState({ touched: true, dirty: true }, this.datePickerState);
        this.onSessionDataUpdated(d.date);
    }
    isValidDate(d) {
        return d instanceof Date && !isNaN(d.getDate());
    }
    dateOnly(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (charCode > 31 && (charCode < 47 || charCode > 57)) {
            return false;
        }
        return true;
    }
    onDateInput(val) {
        if (this.previousDateInputValue === val) {
            return; // When input value is unchanged while keyup.
        }
        this.previousDateInputValue = val;
        if (val && (val.length === this.dateFormat.length) && this.commonUtil.isValidDateStr(val, this.dateFormat)) {
            this.invalidDate = false;
            this.inputValue = new Date(val);
            this.updateMonthIndex(this.monthDiff(this.dayPickerIndex, this.inputValue));
            this.isValid = this.validateMinMaxRange(this.inputValue);
            this.isUnavailableDate = this.checkIfUnavailableDate(val);
            if (!this.isUnavailableDate && this.isValid) {
                this.onSessionDataUpdated(this.inputValue);
            }
        }
        else if (val) {
            this.invalidDate = true;
        }
        else {
            this.invalidDate = false;
            this.isUnavailableDate = false;
        }
    }
    onBlurDP(val) {
        if (val && this.commonUtil.isValidDateStr(val, this.dateFormat)) {
            this.invalidDate = false;
        }
    }
    onSessionDataUpdated(date) {
        if (this.isValidDate(new Date(date))) {
            let tDatet = this.commonUtil.adjustTZ(new Date(date));
            const tDate = moment.default(tDatet.toISOString());
            this.isValid = this.validateMinMaxRange(this.inputValue);
            this.updateFieldData(!tDate.isValid() ? '' : tDate.format(this.apiDateFormat), this.isValid);
            this.onComponentEvent('OnDateSelect');
        }
        else {
            this.inputValue = '';
            this.updateFieldData('', false);
        }
        this.onDirty();
    }
    validateMinMaxRange(d) {
        if (this.maxDate && (new Date(moment.default(this.maxDate).format('MM/DD/YYYY'))).getTime() < new Date(d).getTime()) {
            return false;
        }
        if (this.minDate && (new Date(moment.default(this.minDate).format('MM/DD/YYYY'))).getTime() > new Date(d).getTime()) {
            return false;
        }
        return true;
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        this.setMinandMaxValue();
        this.processApiRes(apiValue);
    }
    processApiRes(apiValue) {
        if (apiValue && Array.isArray(apiValue)) {
            this.setDefaultDateFromAPI();
            for (const apiDate of apiValue) {
                for (const typeData of this.typeWiseList) {
                    const date = apiDate[typeData.date] ? apiDate[typeData.date] : typeData.date;
                    const color = apiDate[typeData.color] ? apiDate[typeData.color] : typeData.color;
                    const label = apiDate[typeData.label] ? apiDate[typeData.label] : typeData.label;
                    const disabled = typeData.disabled;
                    const unAvailable = (apiDate[typeData.typeKey] && apiDate[typeData.typeKey].indexOf('not available') > -1) ? true : false; // typeData.typeKey = 'status'
                    if ((!apiDate[typeData.typeKey] && apiDate[typeData.date]) || (apiDate[typeData.typeKey] && apiDate[typeData.typeKey] === typeData.typeName)) {
                        this.dateData[date] = {
                            color,
                            label,
                            disabled,
                            unAvailable
                        };
                        this.updateMonthIndex(this.monthDiff(this.dayPickerIndex, this.inputValue ? new Date(this.inputValue) : new Date(date)));
                        break;
                    }
                }
            }
            this.generateDayPicker();
        }
    }
    monthDiff(d1, d2) {
        var months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months;
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
        if (additionalMinValue) {
            if (additionalMinValue === apiKey) {
                const date = new Date(value);
                this.minDate = this.commonUtil.adjustTZ(new Date(date));
            }
            else {
                const date = this.getDateOnType(additionalMinValue, 'min');
                this.minDate = this.commonUtil.adjustTZ(new Date(date));
            }
        }
        if (additionalMaxValue) {
            if (additionalMaxValue === apiKey) {
                this.maxDate = this.commonUtil.adjustTZ(new Date(value));
            }
            else {
                this.maxDate = this.commonUtil.adjustTZ(this.getDateOnType(additionalMaxValue, 'max'));
            }
        }
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    setMinandMaxValue() {
        const additionalMinValue = this.additionalParameter['MinValue'];
        const additionalMaxValue = this.additionalParameter['MaxValue'];
        const additionalRange = this.additionalParameter['range'];
        if (additionalMinValue) {
            this.minDate = this.commonUtil.adjustTZ(this.getDateOnType(additionalMinValue, 'min'));
        }
        if (additionalMaxValue) {
            this.maxDate = this.commonUtil.adjustTZ(this.getDateOnType(additionalMaxValue, 'max'));
        }
        if (additionalRange) {
            let range;
            if (/^[0-9]+$/.test(additionalRange)) {
                range = additionalRange + 'd';
            }
            else {
                const handlerData = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(additionalRange));
                const rangeApiVal = this.setApiCallBackDataUtil.setApiCallBackData(additionalRange, handlerData ? handlerData.value : {});
                if (/^[0-9]+$/.test(rangeApiVal)) {
                    range = rangeApiVal + 'd';
                }
            }
            if (range) {
                this.minDate = this.getDateOnType('CURR_DATE', 'min');
                const date = this.getDateOnType(range, 'max');
                date.setDate(date.getDate() - 1);
                this.maxDate = date;
            }
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
                // console.log(str, date);
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
            else {
                console.error('Something is wrong with min or max value');
            }
            return date;
        }
        else {
            if (field === 'CURR_DATE') {
                return new Date();
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
                    return new Date(moment.default(value).format());
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
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            let date;
                            if (this.additionalParameter['default_value'] === 'CURR_DATE') {
                                date = new Date(this.currDate);
                            }
                            else {
                                date = this.commonUtil.adjustTZ(new Date(paramter.value));
                            }
                            this.inputValue = moment.default(new Date(date).toISOString()).format(this.dateFormat);
                            this.updateFieldData(moment.default(new Date(date).toISOString()).format(this.apiDateFormat));
                            break;
                        }
                        else {
                            this.inputValue = '';
                            this.updateFieldData('');
                        }
                    }
                }
                else {
                    this.inputValue = '';
                    this.updateFieldData('');
                }
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
            this.inputValue = this.commonUtil.adjustTZ(new Date(get_data[unique_id_value]));
            this.updateFieldData(moment.default(this.inputValue).format('MM/DD/YYYY'));
        }
    }
    clearDate(event) {
        event.stopPropagation();
        this.inputValue = null;
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
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](moment.default(this.inputValue).format('MM/DD/YYYY'));
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
        // throw new Error('Method not implemented.');
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
    loadMonthList() {
        const localeData = moment.localeData(this.locale);
        const shortMonth = Array.from(localeData.monthsShort());
        this.monthArray = localeData.months().map((i, index) => {
            return { full: i, short: shortMonth[index], value: index };
        });
    }
    loadYearList(year = null) {
        if (year == null) {
            if (this.captionData.year) {
                year = this.captionData.year;
            }
            else {
                year = new Date().getFullYear();
            }
        }
        for (let y = year; y < (year + 12); y++) {
            let disabled = false;
            if (this.minDate && y < new Date(this.minDate).getFullYear()) {
                disabled = true;
            }
            if (this.maxDate && y > new Date(this.maxDate).getFullYear()) {
                disabled = true;
            }
            this.yearArray.push({
                value: y,
                disabled
            });
        }
    }
    displayView(view = 'D') {
        switch (view) {
            case 'D':
                this.view = { day: true, month: false, year: false };
                break;
            case 'M':
                if (this.view.month) {
                    this.view = { day: true, month: false, year: false };
                }
                else {
                    const minDate = new Date(this.minDate);
                    const maxDate = new Date(this.maxDate);
                    this.monthArray = this.monthArray.map((i, index) => {
                        let disabled = false;
                        if (this.minDate &&
                            ((this.captionData.year < minDate.getFullYear()) ||
                                (this.captionData.year == minDate.getFullYear()) && (index < minDate.getMonth()))) {
                            disabled = true;
                        }
                        if (this.maxDate &&
                            ((this.captionData.year > maxDate.getFullYear()) ||
                                (this.captionData.year == minDate.getFullYear()) && (index > maxDate.getMonth()))) {
                            disabled = true;
                        }
                        return {
                            ...i,
                            disabled
                        };
                    });
                    if (this.minDate) {
                    }
                    if (this.maxDate) {
                    }
                    this.view = { day: false, month: true, year: false };
                }
                break;
            case 'Y':
                if (this.view.year) {
                    this.view = { day: true, month: false, year: false };
                }
                else {
                    this.view = { day: false, month: false, year: true };
                }
                break;
        }
    }
    setMonthData(month) {
        this.dayPickerIndex.setUTCMonth(month);
        this.generateDayPicker();
        this.displayView('D');
    }
    setYearData(year) {
        this.dayPickerIndex.setFullYear(year);
        this.generateDayPicker();
        this.displayView('M');
    }
    handleKeyDown(e) {
        const target = e.currentTarget;
        const targetNext = target.nextElementSibling;
        const targetPrevious = target.previousElementSibling;
        const targetParentNext = target.parentNode.nextElementSibling && target.parentNode.nextElementSibling.nodeName === 'DIV' ? target.parentNode.nextElementSibling.querySelector('.DayPicker-Day--currMonth:first-child') : null;
        const targetParentPrevious = target.parentNode.previousElementSibling && target.parentNode.previousElementSibling.nodeName === 'DIV' ? target.parentNode.previousElementSibling.querySelector('.DayPicker-Day--currMonth:last-child') : null;
        const targetIndex = $(target).index();
        const targetParentDown = target.parentNode.nextElementSibling && target.parentNode.nextElementSibling.nodeName === 'DIV' ? target.parentNode.nextElementSibling.querySelector('.DayPicker-Day--currMonth:nth-child(' + (targetIndex + 1) + ')') : null;
        const targetParentUp = target.parentNode.previousElementSibling && target.parentNode.previousElementSibling.nodeName === 'DIV' ? target.parentNode.previousElementSibling.querySelector('.DayPicker-Day--currMonth:nth-child(' + (targetIndex + 1) + ')') : null;
        switch (e.key) {
            case 'Tab':
                this.switchTimeout = setTimeout(() => {
                    target.tabIndex = "-1";
                    $(target.parentNode.parentNode).attr("tabindex", this.tabIndexValue);
                    this.dViewTabFlag = false;
                }, 0);
                break;
            case 'ArrowRight':
                if (targetNext && targetNext.nodeName === 'DIV' && targetNext.classList.contains('DayPicker-Day--currMonth')) {
                    target.tabIndex = "-1";
                    targetNext.tabIndex = "0";
                    targetNext.focus();
                }
                else if (targetParentNext) {
                    target.tabIndex = "-1";
                    targetParentNext.tabIndex = "0";
                    targetParentNext.focus();
                }
                e.preventDefault();
                break;
            case 'ArrowLeft':
                if (targetPrevious && targetPrevious.nodeName === 'DIV' && targetPrevious.classList.contains('DayPicker-Day--currMonth')) {
                    target.tabIndex = "-1";
                    targetPrevious.tabIndex = "0";
                    targetPrevious.focus();
                }
                else if (targetParentPrevious) {
                    target.tabIndex = "-1";
                    targetParentPrevious.tabIndex = "0";
                    targetParentPrevious.focus();
                }
                e.preventDefault();
                break;
            case 'ArrowDown':
                if (targetParentDown) {
                    target.tabIndex = "-1";
                    targetParentDown.tabIndex = "0";
                    targetParentDown.focus();
                }
                e.preventDefault();
                break;
            case 'ArrowUp':
                if (targetParentUp) {
                    target.tabIndex = "-1";
                    targetParentUp.tabIndex = "0";
                    targetParentUp.focus();
                }
                e.preventDefault();
                break;
        }
    }
    handleKeyDownCalendar(e) {
        if (e.target && (e.target.classList.contains('DayPicker-wrapper') || e.target.classList.contains('DayPicker-NavButton'))) {
            switch (e.key) {
                case 'ArrowRight':
                    this.updateMonthIndex(1);
                    e.preventDefault();
                    break;
                case 'ArrowLeft':
                    this.updateMonthIndex(-1);
                    e.preventDefault();
                    break;
                case 'ArrowDown':
                    this.updateMonthIndex(12);
                    e.preventDefault();
                    break;
                case 'ArrowUp':
                    this.updateMonthIndex(-12);
                    e.preventDefault();
                    break;
            }
        }
    }
    dViewTabFlag = false;
    OnDayViewFocus(e) {
        if (!this.dViewTabFlag) {
            const currentTarget = $(e.currentTarget);
            const dayPickerElements = $('.DayPicker-Day--currMonth');
            // Store references for cleanup
            this.jQueryCleanupElements.push(currentTarget, dayPickerElements);
            currentTarget.attr("tabindex", "-1");
            dayPickerElements.eq(0).attr("tabindex", "0").trigger("focus");
            this.dViewTabFlag = true;
        }
    }
    static ɵfac = function CeeCalendarComponent_Factory(t) { return new (t || CeeCalendarComponent)(i0.ɵɵdirectiveInject(i1.DatePipe), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.SharedEventsServiceService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.MatDialog), i0.ɵɵdirectiveInject(i9.MatSnackBar), i0.ɵɵdirectiveInject(i10.HttpClient), i0.ɵɵdirectiveInject(i0.ElementRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCalendarComponent, selectors: [["app-cee-calendar"]], viewQuery: function CeeCalendarComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.datePicker = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", rowData: "rowData", keepState: "keepState", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["datePicker", "ngModel"], ["picker", ""], ["class", "field-wrapper", 3, "id", "class", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-group"], ["class", "form-label", 4, "ngIf"], [1, "form-field"], [3, "floatLabel"], [4, "ngIf"], ["matInput", "", "maxlength", "10", 3, "keypress", "keyup", "placeholder", "value", "required", "disabled", "readonly"], ["matInput", "", "tabindex", "-1", "readonly", "", 1, "shadow-dateInput", 3, "ngModelChange", "min", "max", "matDatepicker", "ngModel"], ["matSuffix", "", 3, "for"], [3, "closed", "disabled"], ["class", "error-message-validation", 4, "ngIf"], ["type", "button", 3, "class", "tooltip", 4, "ngIf"], [1, "calendar-view"], ["lang", "en", 1, "DayPicker"], [1, "DayPicker-wrapper", 3, "keydown"], ["class", "DayPicker-NavBar", 4, "ngIf"], [1, "DayPicker-Months"], ["role", "grid", 1, "DayPicker-Month"], ["role", "heading", 1, "DayPicker-Caption"], [1, "m-data", 3, "click"], [1, "y-data", 3, "click"], ["class", "monthpicker-body", 4, "ngIf"], ["class", "yearpicker-body", 4, "ngIf"], [1, "field", "field-type-label", "field-container"], [3, "class", "color", 4, "ngFor", "ngForOf"], [1, "form-label"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "error-message-validation"], ["class", "error", 4, "ngIf"], [1, "error"], ["type", "button", 3, "tooltip"], [1, "DayPicker-NavBar"], ["role", "button", "aria-label", "Previous Month", 1, "DayPicker-NavButton", "DayPicker-NavButton--prev", 3, "keydown.enter", "click"], ["role", "button", "aria-label", "Next Month", 1, "DayPicker-NavButton", "DayPicker-NavButton--next", 3, "keydown.enter", "click"], ["role", "rowgroup", 1, "DayPicker-Weekdays"], ["role", "row", 1, "DayPicker-WeekdaysRow"], ["class", "DayPicker-Weekday", 3, "title", 4, "ngFor", "ngForOf"], ["role", "rowgroup", 1, "DayPicker-Body", 3, "focus"], ["class", "DayPicker-Week", "role", "row", 4, "ngFor", "ngForOf"], [1, "DayPicker-Weekday", 3, "title"], ["role", "row", 1, "DayPicker-Week"], ["class", "DayPicker-Day", "role", "gridcell", 3, "DayPicker-Day--currMonth", "DayPicker-Day--today", "DayPicker-Day--disabled", "DayPicker-Day--selected", "DayPicker-Day--unAvailable", "color", "keydown", "click", "keydown.enter", 4, "ngFor", "ngForOf"], ["role", "gridcell", 1, "DayPicker-Day", 3, "keydown", "click", "keydown.enter"], [3, "DayPicker-Day-With-Label", 4, "ngIf"], [1, "Day-Picker-Day"], ["class", "Day-Picker-Label", 4, "ngIf"], [1, "Day-Picker-Label"], [1, "monthpicker-body"], [1, "row"], ["class", "col-3", 4, "ngFor", "ngForOf"], [1, "col-3"], [3, "click", "disabled", "ngClass"], [1, "yearpicker-body"], [3, "click", "ngClass", "disabled"], [4, "ngFor", "ngForOf"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeCalendarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeCalendarComponent_div_0_Template, 33, 34, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatFormFieldModule, i11.MatFormField, i11.MatLabel, i11.MatSuffix, MatInputModule, i12.MatInput, MatTooltipModule, CommonModule, i1.NgClass, i1.NgForOf, i1.NgIf, i1.NgStyle, FormsModule, i13.DefaultValueAccessor, i13.NgControlStatus, i13.NgModel, MatDatepickerModule, i14.MatDatepicker, i14.MatDatepickerInput, i14.MatDatepickerToggle, TooltipModule, i15.TooltipDirective], styles: [".DayPicker[_ngcontent-%COMP%]{display:inline-block;font-size:1rem}.DayPicker-wrapper[_ngcontent-%COMP%]{position:relative;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-Months[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap;justify-content:center}.DayPicker-Month[_ngcontent-%COMP%]{display:table;margin:1em 1em 0;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-NavButton[_ngcontent-%COMP%]{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer}.DayPicker-NavButton[_ngcontent-%COMP%]:hover{opacity:.8}.DayPicker-NavButton--prev[_ngcontent-%COMP%]{margin-right:1.5em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC)}.DayPicker-NavButton--next[_ngcontent-%COMP%]{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==)}.DayPicker-NavButton--interactionDisabled[_ngcontent-%COMP%]{display:none}.DayPicker-Caption[_ngcontent-%COMP%]{display:table-caption;margin-bottom:.5em;padding:0 .5em;text-align:left}.DayPicker-Caption[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{font-weight:500;font-size:1.15em}.DayPicker-Weekdays[_ngcontent-%COMP%]{display:table-header-group;margin-top:1em}.DayPicker-WeekdaysRow[_ngcontent-%COMP%]{display:table-row}.DayPicker-Weekday[_ngcontent-%COMP%]{display:table-cell;padding:.5em;color:#8b9898;text-align:center;font-size:.875em}.DayPicker-Weekday[_ngcontent-%COMP%]   abbr[title][_ngcontent-%COMP%]{border-bottom:none;text-decoration:none}.DayPicker-Body[_ngcontent-%COMP%]{display:table-row-group}.DayPicker-Week[_ngcontent-%COMP%]{display:table-row}.DayPicker-Day[_ngcontent-%COMP%]{display:table-cell;padding:.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer}.DayPicker-WeekNumber[_ngcontent-%COMP%]{display:table-cell;padding:.5em;min-width:1em;border-right:1px solid #EAECEC;color:#8b9898;vertical-align:middle;text-align:right;font-size:.75em;cursor:pointer}.DayPicker--interactionDisabled[_ngcontent-%COMP%]   .DayPicker-Day[_ngcontent-%COMP%]{cursor:default}.DayPicker-Footer[_ngcontent-%COMP%]{padding-top:.5em}.DayPicker-TodayButton[_ngcontent-%COMP%]{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:.875em;cursor:pointer}.DayPicker-Day--today[_ngcontent-%COMP%]{color:#d0021b;font-weight:700}.DayPicker-Day--outside[_ngcontent-%COMP%]{color:#8b9898;cursor:default}.DayPicker-Day--disabled[_ngcontent-%COMP%]{color:#dce0e0;cursor:default}.DayPicker-Day--sunday[_ngcontent-%COMP%]{background-color:#f7f8f8}.DayPicker-Day--sunday[_ngcontent-%COMP%]:not(.DayPicker-Day--today){color:#dce0e0}.DayPicker-Day--selected[_ngcontent-%COMP%]:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff}.DayPicker-Day--selected[_ngcontent-%COMP%]:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa}.DayPicker[_ngcontent-%COMP%]:not(.DayPicker--interactionDisabled)   .DayPicker-Day[_ngcontent-%COMP%]:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff}.DayPickerInput[_ngcontent-%COMP%]{display:inline-block}.DayPickerInput-OverlayWrapper[_ngcontent-%COMP%]{position:relative}.DayPickerInput-Overlay[_ngcontent-%COMP%]{position:absolute;left:0;z-index:1;background:#fff;box-shadow:0 2px 5px #00000026}.error[_ngcontent-%COMP%]{color:red}.error[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-weight:700}.shadow-dateInput[_ngcontent-%COMP%]{position:absolute;width:1px;height:1px;opacity:0}.monthpicker-body[_ngcontent-%COMP%], .yearpicker-body[_ngcontent-%COMP%]{width:300px}.monthpicker-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%], .yearpicker-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{width:100%;border:none;background:transparent;height:50px}.monthpicker-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover, .yearpicker-body[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#f0f8ff}.monthpicker-body[_ngcontent-%COMP%]   button.current[_ngcontent-%COMP%], .yearpicker-body[_ngcontent-%COMP%]   button.current[_ngcontent-%COMP%]{background-color:#4a90e2;font-weight:700}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCalendarComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-calendar', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatTooltipModule, CommonModule, FormsModule, MatDatepickerModule, CustomTooltipDirective, NgClass, NgStyle, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <!-- Tooltip Template -->\r\n    <!-- <ng-template #tooltipTemplate>\r\n        <div class=\"tooltip_container\">\r\n            <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n        </div>\r\n    </ng-template> -->\r\n\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\" *ngIf='!is_material'>\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n        </div>\r\n        <div class=\"form-field\" class=\"input-group {{(!inputValue &&\r\n\t\t\tisMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\">\r\n            <mat-form-field floatLabel=\"{{!is_material?'never':'auto'}}\">\r\n                <mat-label *ngIf='is_material'>{{fieldData.field_label}}</mat-label>\r\n                <input matInput placeholder=\"{{fieldData.placeholder_text}}\" [value]=\"shadowValue\" maxlength=\"10\"\r\n                    [required]=\"is_material && isMandatory\" [disabled]=\"!isEditable\" [readonly]=\"!allowManualEntry\"\r\n                    [attr.tabindex]=\"tabIndexValue\"\r\n                    [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Select '+ fieldData.field_label\"\r\n                    (keypress)=\"dateOnly($event)\"\r\n                    (keyup)=\"onDateInput($event.target.value); setState({touched:true,dirty:datePicker.dirty}, datePickerState)\">\r\n                <input class=\"shadow-dateInput\" matInput [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]=\"picker\"\r\n                    [(ngModel)]=\"inputValue\" #datePicker=\"ngModel\" tabindex=\"-1\" readonly>\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                <!-- Date picker is disabled i.e disabled = true, as already calendar is used below to select the date from. -->\r\n                <mat-datepicker #picker (closed)=\"setState({touched:true,dirty:datePicker.dirty}, datePickerState)\"\r\n                    [disabled]=\"true\"></mat-datepicker>\r\n            </mat-form-field>\r\n            <div class=\"error-message-validation\" *ngIf=\"allowManualEntry && datePickerState.touched\">\r\n                <div>\r\n                    <p class=\"error\" *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMax')\">\r\n                        {{additionalParameter['max_date_error']}}</p>\r\n                    <p class=\"error\" *ngIf=\"!invalidDate && !isFutureDate && datePicker.hasError('matDatepickerMin')\">\r\n                        {{additionalParameter['min_date_error']}}</p>\r\n                    <p class=\"error\" *ngIf=\"!invalidDate && isFutureDate\">\r\n                        {{additionalParameter['future_date_error']}}</p>\r\n                    <p class=\"error\" *ngIf=\"invalidDate || datePicker.hasError('matDatepickerParse')\">\r\n                        {{additionalParameter['invalid_date_error']}}</p>\r\n                    <p class=\"error\"\r\n                        *ngIf=\"!(invalidDate || datePicker.hasError('matDatepickerMax') || datePicker.hasError('matDatepickerMin') || isFutureDate) && isUnavailableDate\">\r\n                        {{additionalParameter['unavailable_date_error']}}</p>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Tooltip with informaion icon -->\r\n            <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n                class=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n                [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"calendar-view\">\r\n            <div class=\"DayPicker\" lang=\"en\">\r\n                <div class=\"DayPicker-wrapper\" [attr.tabindex]=\"tabIndexValue\"\r\n                    (keydown)=\"handleKeyDownCalendar($event)\">\r\n                    <div class=\"DayPicker-NavBar\" *ngIf=\"!view.month\">\r\n                        <span [attr.tabindex]=\"tabIndexValue\" role=\"button\" aria-label=\"Previous Month\"\r\n                            class=\"DayPicker-NavButton DayPicker-NavButton--prev\" (keydown.enter)=\"updateMonthIndex(-1)\"\r\n                            (click)=\"updateMonthIndex(-1)\"></span>\r\n                        <span [attr.tabindex]=\"tabIndexValue\" role=\"button\" aria-label=\"Next Month\"\r\n                            class=\"DayPicker-NavButton DayPicker-NavButton--next\" (keydown.enter)=\"updateMonthIndex(1)\"\r\n                            (click)=\"updateMonthIndex(1)\"></span>\r\n                    </div>\r\n                    <div class=\"DayPicker-Months\">\r\n                        <div class=\"DayPicker-Month\" role=\"grid\">\r\n                            <div class=\"DayPicker-Caption\" role=\"heading\">\r\n                                <div>\r\n                                    <span class=\"m-data\" (click)=\"displayView('M')\">{{ captionData.month }}</span>&nbsp;\r\n                                    <span class=\"y-data\" (click)=\"displayView('Y')\">{{ captionData.year }}</span>\r\n                                </div>\r\n                            </div>\r\n                            <ng-container *ngIf=\"view.day\">\r\n                                <div class=\"DayPicker-Weekdays\" role=\"rowgroup\">\r\n                                    <div class=\"DayPicker-WeekdaysRow\" role=\"row\">\r\n                                        <div class=\"DayPicker-Weekday\" *ngFor=\"let week of weekArray;\"\r\n                                            title=\"{{week.full}}\">{{week.short}}\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"DayPicker-Body\" role=\"rowgroup\" (focus)=\"OnDayViewFocus($event)\"\r\n                                    [attr.tabindex]=\"tabIndexValue\">\r\n                                    <div *ngFor=\"let calendarWeek of calendarDays;\" class=\"DayPicker-Week\" role=\"row\">\r\n                                        <!-- DayPicker-Day--disabled DayPicker-Day--today DayPicker-Day--selected DayPicker-Day--available-4 -->\r\n                                        <div (keydown)=\"handleKeyDown($event)\" *ngFor=\"let dayView of calendarWeek;\"\r\n                                            class=\"DayPicker-Day\" [class.DayPicker-Day--currMonth]=\"dayView.currMonth\"\r\n                                            [class.DayPicker-Day--today]=\"dayView.today\"\r\n                                            [class.DayPicker-Day--disabled]=\"!isEditable || dayView.disabled\"\r\n                                            [class.DayPicker-Day--selected]=\"dayView.value === shadowValue\"\r\n                                            [class.DayPicker-Day--unAvailable]=\"dayView.unAvailable\" role=\"gridcell\"\r\n                                            [attr.aria-label]=\"dayView.ariaLabel\"\r\n                                            [attr.aria-disabled]=\"!isEditable || dayView.disabled\"\r\n                                            [attr.aria-selected]=\"dayView.value === shadowValue\"\r\n                                            [style.color]=\"dayView.color\"\r\n                                            (click)=\"isEditable && !dayView.disabled && onDateSelected(dayView)\"\r\n                                            (keydown.enter)=\"isEditable && !dayView.disabled && onDateSelected(dayView)\">\r\n                                            <div *ngIf=\"dayView.currMonth\"\r\n                                                [class.DayPicker-Day-With-Label]=\"dayView.label\"><span\r\n                                                    class=\"Day-Picker-Day\">{{dayView.date.getDate()}}</span><span\r\n                                                    *ngIf=\"dayView.label\"\r\n                                                    class=\"Day-Picker-Label\">{{dayView.label}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n                            <div *ngIf=\"view.month\" class=\"monthpicker-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-3\" *ngFor=\"let m of monthArray\">\r\n                                        <button [disabled]=\"m.disabled\"\r\n                                            [ngClass]=\"{'current': (m.full == captionData.month && !m.disabled ) }\"\r\n                                            (click)=\"setMonthData(m.value)\">{{ m.short }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"view.year\" class=\"yearpicker-body\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-3\" *ngFor=\"let y of yearArray\">\r\n                                        <button [ngClass]=\"{'current': y.value == captionData.year && !y.disabled }\"\r\n                                            [disabled]=\"y.disabled\" (click)=\"setYearData(y.value)\">{{ y.value\r\n                                            }}</button>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngIf=\"multipleErrorMessage\">\r\n            <ng-container *ngFor=\"let message of messages\">\r\n                <div class=\"error-message-wrapper\"\r\n                    *ngIf=\"!inputValue && isMandatory && (datePickerState.dirty || datePickerState.touched || showErrorOnNext)\">\r\n                    <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                        {{returnMessageData(message.code).message_text}}\r\n                    </p>\r\n                </div>\r\n            </ng-container>\r\n        </ng-container>\r\n        <div class=\"field field-type-label field-container\">\r\n            <span *ngFor=\"let type of typeWiseList\" class=\"{{type.typeName.toLowerCase()}} box\"\r\n                [style.color]=\"type.color\">D-{{type.typeName}}</span>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".DayPicker{display:inline-block;font-size:1rem}.DayPicker-wrapper{position:relative;flex-direction:row;padding-bottom:1em;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-Months{display:flex;flex-wrap:wrap;justify-content:center}.DayPicker-Month{display:table;margin:1em 1em 0;border-spacing:0;border-collapse:collapse;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.DayPicker-NavButton{position:absolute;top:1em;right:1.5em;left:auto;display:inline-block;margin-top:2px;width:1.25em;height:1.25em;background-position:center;background-size:50%;background-repeat:no-repeat;color:#8b9898;cursor:pointer}.DayPicker-NavButton:hover{opacity:.8}.DayPicker-NavButton--prev{margin-right:1.5em;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAVVJREFUWAnN2G0KgjAYwPHpGfRkaZeqvgQaK+hY3SUHrk1YzNLay/OiEFp92I+/Mp2F2Mh2lLISWnflFjzH263RQjzMZ19wgs73ez0o1WmtW+dgA01VxrE3p6l2GLsnBy1VYQOtVSEH/atCCgqpQgKKqYIOiq2CBkqtggLKqQIKgqgCBjpJ2Y5CdJ+zrT9A7HHSTA1dxUdHgzCqJIEwq0SDsKsEg6iqBIEoq/wEcVRZBXFV+QJxV5mBtlDFB5VjYTaGZ2sf4R9PM7U9ZU+lLuaetPP/5Die3ToO1+u+MKtHs06qODB2zBnI/jBd4MPQm1VkY79Tb18gB+C62FdBFsZR6yeIo1YQiLJWMIiqVjQIu1YSCLNWFgijVjYIuhYYCKoWKAiiFgoopxYaKLUWOii2FgkophYp6F3r42W5A9s9OcgNvva8xQaysKXlFytoqdYmQH6tF3toSUo0INq9AAAAAElFTkSuQmCC)}.DayPicker-NavButton--next{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAwCAYAAAB5R9gVAAAABGdBTUEAALGPC/xhBQAAAXRJREFUWAnN119ugjAcwPHWzJ1gnmxzB/BBE0n24m4xfNkTaOL7wOtsl3AXMMb+Vjaa1BG00N8fSEibPpAP3xAKKs2yjzTPH9RAjhEo9WzPr/Vm8zgE0+gXATAxxuxtqeJ9t5tIwv5AtQAApsfT6TPdbp+kUBcgVwvO51KqVhMkXKsVJFXrOkigVhCIs1Y4iKlWZxB1rX4gwlpRIIpa8SDkWmggrFq4IIRaJKCYWnSgnrXIQV1r8YD+1Vrn+bReagysIFfLABRt31v8oBu1xEBttfRbltmfjgEcWh9snUS2kNdBK6WN1vrOWxObWsz+fjxevsxmB1GQDfINWiev83nhaoiB/CoOU438oPrhXS0WpQ9xc1ZQWxWHqUYe0I0qrKCQKjygDlXIQV2r0IF6ViEBxVTBBSFUQQNhVYkHIVeJAtkNsbQ7c1LtzP6FsObhb2rCKv7NBIGoq4SDmKoEgTirXAcJVGkFSVVpgoSrXICGUMUH/QBZNSUy5XWUhwAAAABJRU5ErkJggg==)}.DayPicker-NavButton--interactionDisabled{display:none}.DayPicker-Caption{display:table-caption;margin-bottom:.5em;padding:0 .5em;text-align:left}.DayPicker-Caption>div{font-weight:500;font-size:1.15em}.DayPicker-Weekdays{display:table-header-group;margin-top:1em}.DayPicker-WeekdaysRow{display:table-row}.DayPicker-Weekday{display:table-cell;padding:.5em;color:#8b9898;text-align:center;font-size:.875em}.DayPicker-Weekday abbr[title]{border-bottom:none;text-decoration:none}.DayPicker-Body{display:table-row-group}.DayPicker-Week{display:table-row}.DayPicker-Day{display:table-cell;padding:.5em;border-radius:50%;vertical-align:middle;text-align:center;cursor:pointer}.DayPicker-WeekNumber{display:table-cell;padding:.5em;min-width:1em;border-right:1px solid #EAECEC;color:#8b9898;vertical-align:middle;text-align:right;font-size:.75em;cursor:pointer}.DayPicker--interactionDisabled .DayPicker-Day{cursor:default}.DayPicker-Footer{padding-top:.5em}.DayPicker-TodayButton{border:none;background-color:transparent;background-image:none;box-shadow:none;color:#4a90e2;font-size:.875em;cursor:pointer}.DayPicker-Day--today{color:#d0021b;font-weight:700}.DayPicker-Day--outside{color:#8b9898;cursor:default}.DayPicker-Day--disabled{color:#dce0e0;cursor:default}.DayPicker-Day--sunday{background-color:#f7f8f8}.DayPicker-Day--sunday:not(.DayPicker-Day--today){color:#dce0e0}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside){position:relative;background-color:#4a90e2;color:#f0f8ff}.DayPicker-Day--selected:not(.DayPicker-Day--disabled):not(.DayPicker-Day--outside):hover{background-color:#51a0fa}.DayPicker:not(.DayPicker--interactionDisabled) .DayPicker-Day:not(.DayPicker-Day--disabled):not(.DayPicker-Day--selected):not(.DayPicker-Day--outside):hover{background-color:#f0f8ff}.DayPickerInput{display:inline-block}.DayPickerInput-OverlayWrapper{position:relative}.DayPickerInput-Overlay{position:absolute;left:0;z-index:1;background:#fff;box-shadow:0 2px 5px #00000026}.error{color:red}.error span{font-weight:700}.shadow-dateInput{position:absolute;width:1px;height:1px;opacity:0}.monthpicker-body,.yearpicker-body{width:300px}.monthpicker-body button,.yearpicker-body button{width:100%;border:none;background:transparent;height:50px}.monthpicker-body button:hover,.yearpicker-body button:hover{background-color:#f0f8ff}.monthpicker-body button.current,.yearpicker-body button.current{background-color:#4a90e2;font-weight:700}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DatePipe }, { type: i2.UserDataHandlerService }, { type: i3.CEEInternalEmitterService }, { type: i4.SharedEventsServiceService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.MatDialog }, { type: i9.MatSnackBar }, { type: i10.HttpClient }, { type: i0.ElementRef }], { datePicker: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCalendarComponent, { className: "CeeCalendarComponent", filePath: "lib\\field-components\\cee-calendar\\cee-calendar.component.ts", lineNumber: 33 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1jYWxlbmRhci9jZWUtY2FsZW5kYXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWNhbGVuZGFyL2NlZS1jYWxlbmRhci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBMkIsU0FBUyxFQUE4RCxNQUFNLGVBQWUsQ0FBQztBQUN6SixPQUFPLEVBQVksT0FBTyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMzRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsaUVBQWlFO0FBQ2pFLE9BQU8sRUFBZSxXQUFXLEVBQVcsTUFBTSxnQkFBZ0IsQ0FBQztBQUNuRSxPQUFPLEtBQUssTUFBTSxNQUFNLFFBQVEsQ0FBQztBQVdqQyxPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDbkUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3pELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sTUFBTSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNYcEIsaUNBQXFFO0lBQUEsWUFBeUI7SUFBQSxpQkFBUTs7O0lBQWpDLGNBQXlCO0lBQXpCLGtEQUF5Qjs7O0lBQzlGLDRCQUNnRDs7O0lBQTVDLDJFQUFtQzs7O0lBSDNDLDZCQUFnRDtJQUU1QyxBQURBLHFHQUFxRSx3RkFFN0I7Ozs7SUFGVCxjQUFvQztJQUFwQyxtRUFBb0M7SUFDcEMsY0FBbUM7SUFBbkMsa0VBQW1DOzs7SUFHdEUsZ0NBQWlEO0lBQUMsa0JBQUM7SUFBQSxpQkFBTzs7O0lBQzFELGtDQUF3SjtJQUFBLGlCQUFDO0lBQUEsaUJBQVM7OztJQUE3RixrREFBNkI7Ozs7SUFQdEcsK0JBQTZDO0lBT3pDLEFBREEsQUFMQSxtR0FBZ0QsdUVBS0MsMkVBQ3VHO0lBQzVKLGlCQUFNOzs7SUFQYSxjQUErQjtJQUEvQix5REFBK0I7SUFLdkMsY0FBaUI7SUFBakIseUNBQWlCO0lBQ2YsY0FBZ0I7SUFBaEIsd0NBQWdCOzs7SUFLckIsaUNBQStCO0lBQUEsWUFBeUI7SUFBQSxpQkFBWTs7O0lBQXJDLGNBQXlCO0lBQXpCLGtEQUF5Qjs7O0lBZ0JwRCw2QkFBa0c7SUFDOUYsWUFBeUM7SUFBQSxpQkFBSTs7O0lBQTdDLGNBQXlDO0lBQXpDLDRFQUF5Qzs7O0lBQzdDLDZCQUFrRztJQUM5RixZQUF5QztJQUFBLGlCQUFJOzs7SUFBN0MsY0FBeUM7SUFBekMsNEVBQXlDOzs7SUFDN0MsNkJBQXNEO0lBQ2xELFlBQTRDO0lBQUEsaUJBQUk7OztJQUFoRCxjQUE0QztJQUE1QywrRUFBNEM7OztJQUNoRCw2QkFBa0Y7SUFDOUUsWUFBNkM7SUFBQSxpQkFBSTs7O0lBQWpELGNBQTZDO0lBQTdDLGdGQUE2Qzs7O0lBQ2pELDZCQUNzSjtJQUNsSixZQUFpRDtJQUFBLGlCQUFJOzs7SUFBckQsY0FBaUQ7SUFBakQsb0ZBQWlEOzs7SUFYekQsQUFESiwrQkFBMEYsVUFDakY7SUFTRCxBQUZBLEFBRkEsQUFGQSxBQUZBLCtFQUFrRyxrRUFFQSxrRUFFNUMsa0VBRTRCLGtFQUdvRTtJQUc5SixBQURJLGlCQUFNLEVBQ0o7Ozs7O0lBWm9CLGVBQThFO0lBQTlFLGdIQUE4RTtJQUU5RSxjQUE4RTtJQUE5RSxnSEFBOEU7SUFFOUUsY0FBa0M7SUFBbEMsaUVBQWtDO0lBRWxDLGNBQThEO0lBQTlELHlGQUE4RDtJQUczRSxjQUErSTtJQUEvSSwyTEFBK0k7OztJQU01SixrQ0FFc0Y7SUFDbEYsbUJBQ0o7SUFBQSxpQkFBUzs7O0lBSEwsNkZBQStEO0lBQ1gsa0RBQTZCOzs7OztJQVN6RSxBQURKLCtCQUFrRCxlQUdYO0lBQS9CLEFBRHNELHNNQUFpQix5QkFBa0IsQ0FBQyxDQUFDLEtBQUMseUtBQ25GLHlCQUFrQixDQUFDLENBQUMsS0FBQztJQUFDLGlCQUFPO0lBQzFDLGdDQUVrQztJQUE5QixBQURzRCxzTUFBaUIsd0JBQWlCLENBQUMsQ0FBQyxLQUFDLHlLQUNsRix3QkFBaUIsQ0FBQyxDQUFDLEtBQUM7SUFDckMsQUFEc0MsaUJBQU8sRUFDdkM7OztJQU5JLGNBQStCOztJQUcvQixjQUErQjs7OztJQWVyQiwrQkFDMEI7SUFBQSxZQUMxQjtJQUFBLGlCQUFNOzs7SUFERiwrQ0FBcUI7SUFBQyxjQUMxQjtJQUQwQiw2Q0FDMUI7OztJQXFCb0UsZ0NBRS9CO0lBQUEsWUFBaUI7SUFBQSxpQkFBTzs7O0lBQXhCLGNBQWlCO0lBQWpCLHNDQUFpQjs7O0lBSEcsQUFEckQsMkJBQ3FELGVBQ3RCO0lBQUEsWUFBMEI7SUFBQSxpQkFBTztJQUFBLGdIQUUvQjtJQUNqQyxpQkFBTTs7O0lBSkYsNERBQWdEO0lBQ3JCLGVBQTBCO0lBQTFCLCtDQUEwQjtJQUNoRCxjQUFtQjtJQUFuQix1Q0FBbUI7Ozs7SUFmaEMsK0JBV2lGO0lBQTdFLEFBREEsQUFWQyxvTkFBVyw0QkFBcUIsS0FBQyx1UUFVVSxpQ0FBdUIsS0FBQyx1UkFDaEIsaUNBQXVCLEtBQUM7SUFDNUUsd0dBQ3FEO0lBS3pELGlCQUFNOzs7O0lBVEYseUNBQTZCO0lBSjdCLEFBREEsQUFEQSxBQURBLEFBRHNCLGdFQUFvRCwwQ0FDOUIsc0VBQ3FCLG9FQUNGLHNEQUNQOztJQU9sRCxjQUF1QjtJQUF2QiwyQ0FBdUI7OztJQWRyQywrQkFBa0Y7SUFFOUUsbUdBV2lGO0lBUXJGLGlCQUFNOzs7SUFuQnlELGNBQWdCO0lBQWhCLHlDQUFnQjs7OztJQVp2Riw2QkFBK0I7SUFFdkIsQUFESiwrQkFBZ0QsY0FDRTtJQUMxQyw0RkFDMEI7SUFHbEMsQUFESSxpQkFBTSxFQUNKO0lBQ04sK0JBQ29DO0lBRFEsb01BQVMsNkJBQXNCLEtBQUM7SUFFeEUsNEZBQWtGO0lBc0J0RixpQkFBTTs7OztJQTdCa0QsZUFBYTtJQUFiLDBDQUFhO0lBTWpFLGNBQStCOztJQUNELGNBQWdCO0lBQWhCLDZDQUFnQjs7OztJQTJCMUMsQUFESiwrQkFBZ0QsaUJBR1I7SUFBaEMsdU5BQVMsZ0NBQXFCLEtBQUM7SUFBQyxZQUFhO0lBQ3JELEFBRHFELGlCQUFTLEVBQ3hEOzs7O0lBSE0sY0FBdUI7SUFDM0IsQUFESSx5Q0FBdUIsa0dBQzRDO0lBQ3ZDLGNBQWE7SUFBYixpQ0FBYTs7O0lBSnpELEFBREosK0JBQWlELGNBQzVCO0lBQ2IsbUZBQWdEO0lBTXhELEFBREksaUJBQU0sRUFDSjs7O0lBTm1DLGVBQWE7SUFBYiwyQ0FBYTs7OztJQVUxQyxBQURKLCtCQUErQyxpQkFFZ0I7SUFBL0IsdU5BQVMsK0JBQW9CLEtBQUM7SUFBQyxZQUNyRDtJQUNWLEFBRFUsaUJBQVMsRUFDYjs7OztJQUhNLGNBQW9FO0lBQ3hFLEFBREksK0dBQW9FLDRCQUNqRDtJQUFnQyxjQUNyRDtJQURxRCxpQ0FDckQ7OztJQUpkLEFBREosK0JBQStDLGNBQzFCO0lBQ2IsbUZBQStDO0lBTXZELEFBREksaUJBQU0sRUFDSjs7O0lBTm1DLGVBQVk7SUFBWiwwQ0FBWTs7O0lBZ0I3RCw2QkFBb0Y7SUFDaEYsWUFDSjtJQUFBLGlCQUFJOzs7O0lBRm1CLHNHQUE0RDtJQUMvRSxjQUNKO0lBREksd0ZBQ0o7OztJQUpKLCtCQUNnSDtJQUM1Ryw2R0FBb0Y7SUFHeEYsaUJBQU07OztJQUhFLGNBQWlCO0lBQWpCLHlDQUFpQjs7O0lBSDdCLDZCQUErQztJQUMzQywyR0FDZ0g7Ozs7SUFBM0csY0FBeUc7SUFBekcsNkpBQXlHOzs7SUFIdEgsNkJBQTJDO0lBQ3ZDLDhHQUErQzs7OztJQUFiLGNBQVc7SUFBWCx5Q0FBVzs7O0lBVTdDLDRCQUMrQjtJQUFBLFlBQW1CO0lBQUEsaUJBQU87OztJQURqQixzRUFBMkM7SUFDL0UsdUNBQTBCO0lBQUMsY0FBbUI7SUFBbkIsa0RBQW1COzs7O0lBM0kxRCxBQVRKLDhCQUNvRyxhQVF4RTtJQUNwQiwyRUFBNkM7SUFXekMsQUFGSiw4QkFDMkcsd0JBQzFDO0lBQ3pELHVGQUErQjtJQUMvQixnQ0FLaUg7SUFBN0csQUFEQSwyTEFBWSx1QkFBZ0IsS0FBQywyTEFDcEIsdUNBQWdDLHdCQUFFLGdCQUFTLFdBQVMsSUFBSSw4QkFBd0IseUJBQWtCLEtBQUM7SUFMaEgsaUJBS2lIO0lBQ2pILG9DQUMwRTtJQUF0RSx3U0FBd0I7SUFENUIsaUJBQzBFO0lBQzFFLDRDQUF3RTtJQUV4RSw4Q0FDc0I7SUFERSxvT0FBVSxnQkFBUyxXQUFTLElBQUksOEJBQXdCLHlCQUFrQixLQUFDO0lBRXZHLEFBRDBCLGlCQUFpQixFQUMxQjtJQWtCakIsQUFqQkEsOEVBQTBGLHVFQW1CSjtJQUcxRixpQkFBTTtJQUdFLEFBREosQUFESixnQ0FBMkIsZUFDVSxlQUVpQjtJQUExQyx3TEFBVyxvQ0FBNkIsS0FBQztJQUN6Qyw4RUFBa0Q7SUFZbEMsQUFESixBQURKLEFBREosQUFESixnQ0FBOEIsZUFDZSxlQUNTLFdBQ3JDLGdCQUMrQztJQUEzQiwrS0FBUyxtQkFBWSxHQUFHLENBQUMsS0FBQztJQUFDLGFBQXVCO0lBQUEsaUJBQU87SUFBQSx3QkFDOUU7SUFBQSxpQ0FBZ0Q7SUFBM0IsK0tBQVMsbUJBQVksR0FBRyxDQUFDLEtBQUM7SUFBQyxhQUFzQjtJQUU5RSxBQURJLEFBRDBFLGlCQUFPLEVBQzNFLEVBQ0o7SUE0Q04sQUFUQSxBQWxDQSwrRkFBK0IsaUVBa0NrQixpRUFTRjtJQWFuRSxBQURJLEFBREksQUFESSxBQURJLGlCQUFNLEVBQ0osRUFDSixFQUNKLEVBQ0o7SUFDTiwrRkFBMkM7SUFVM0MsZ0NBQW9EO0lBQ2hELGdGQUMrQjtJQUczQyxBQURJLEFBREksaUJBQU0sRUFDSixFQUNKOzs7O0lBdEpGLHlIQUErRjtJQUR4RSwwREFBNEI7SUFVdEIsZUFBa0I7SUFBbEIsMENBQWtCO0lBU25CLGNBQ2tGO0lBRGxGLDJNQUNrRjtJQUN0RixjQUE0QztJQUE1Qyw4RUFBNEM7SUFDNUMsY0FBaUI7SUFBakIseUNBQWlCO0lBQ2IsY0FBNEM7SUFBNUMsMEVBQTRDO0lBQ1MsQUFBekIsQUFBeEMsQUFEeUQsMENBQXFCLHNEQUN2QyxnQ0FBeUIsc0NBQStCOztJQUsxRCxjQUFlO0lBQWlCLEFBQWhCLEFBQWhCLG9DQUFlLHVCQUFnQiw2QkFBeUI7SUFDN0YsaURBQXdCO0lBQ0ssZUFBYztJQUFkLGdDQUFjO0lBRzNDLGNBQWlCO0lBQWpCLCtCQUFpQjtJQUVjLGVBQWlEO0lBQWpELGdGQUFpRDtJQWlCL0UsY0FBK0I7SUFBL0IsOERBQStCO0lBUUwsZUFBK0I7O0lBRTNCLGNBQWlCO0lBQWpCLHlDQUFpQjtJQVlnQixlQUF1QjtJQUF2Qiw4Q0FBdUI7SUFDdkIsZUFBc0I7SUFBdEIsNkNBQXNCO0lBRy9ELGNBQWM7SUFBZCxzQ0FBYztJQWtDdkIsY0FBZ0I7SUFBaEIsd0NBQWdCO0lBU2hCLGNBQWU7SUFBZix1Q0FBZTtJQWMxQixjQUEwQjtJQUExQixrREFBMEI7SUFXZCxlQUFlO0lBQWYsNkNBQWU7O0FEbkhsRCxNQUFNLE9BQU8sb0JBQXFCLFNBQVEsUUFBUTtJQXdEdkM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQztJQS9EZSxVQUFVLENBQVU7SUFFNUIsTUFBTSxDQUFNO0lBQ1osU0FBUyxDQUFNO0lBQ3ZCLE9BQU8sQ0FBTTtJQUNiLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFDbEIsa0JBQWtCLENBQU07SUFDeEIsaUJBQWlCLENBQU07SUFDdkIsZ0JBQWdCLENBQU07SUFFL0IsT0FBTyxDQUFPO0lBQ2QsT0FBTyxDQUFPO0lBQ2QsT0FBTyxHQUFHLElBQUksQ0FBQztJQUVmLFVBQVUsQ0FBQztJQUNYLEdBQUcsR0FBUyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQ3ZCLE9BQU8sR0FBUyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDO0lBQzFGLGVBQWUsR0FBRztRQUNoQixPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRSxLQUFLO0tBQ2IsQ0FBQztJQUNGLGNBQWMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0lBQzVCLFlBQVksQ0FBUztJQUNyQixZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCxnQkFBZ0IsQ0FBVTtJQUMxQixXQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLHNCQUFzQixHQUFXLEVBQUUsQ0FBQTtJQUNuQyxpQkFBaUIsR0FBWSxLQUFLLENBQUM7SUFDbkMsVUFBVSxHQUFXLFlBQVksQ0FBQztJQUNsQyxhQUFhLEdBQVcsWUFBWSxDQUFDO0lBQ3JDLFlBQVksQ0FBTTtJQUNsQixZQUFZLEdBQUcsRUFBRSxDQUFDO0lBQ2xCLFNBQVMsR0FBZSxFQUFFLENBQUM7SUFDM0IsVUFBVSxHQUFlLEVBQUUsQ0FBQztJQUM1QixTQUFTLEdBQWUsRUFBRSxDQUFDO0lBQzNCLE1BQU0sR0FBVyxJQUFJLENBQUM7SUFFdEIsV0FBVyxHQUFRO1FBQ2pCLEtBQUssRUFBRSxFQUFFO1FBQ1QsSUFBSSxFQUFFLEVBQUU7S0FDVCxDQUFDO0lBQ0YsSUFBSSxHQUFRO1FBQ1YsR0FBRyxFQUFFLElBQUk7UUFDVCxLQUFLLEVBQUUsS0FBSztRQUNaLElBQUksRUFBRSxLQUFLO0tBQ1osQ0FBQztJQUNNLGFBQWEsR0FBRyxJQUFJLENBQUM7SUFDckIsYUFBYSxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7SUFDbkMscUJBQXFCLEdBQWEsRUFBRSxDQUFDO0lBQ3JDLGVBQWUsR0FBVSxFQUFFLENBQUMsQ0FBQyx5QkFBeUI7SUFFOUQsWUFDUyxRQUFrQixFQUNsQixzQkFBOEMsRUFDOUMsa0JBQTZDLEVBQzdDLG1CQUErQyxFQUMvQyxjQUE4QixFQUM5QixjQUE4QixFQUM5QixvQkFBMEMsRUFDMUMsTUFBaUIsRUFDakIsUUFBcUIsRUFDckIsSUFBZ0IsRUFDZixVQUFzQjtRQUU5QixLQUFLLENBQUMsc0JBQXNCLEVBQzFCLG1CQUFtQixFQUNuQixrQkFBa0IsRUFDbEIsY0FBYyxFQUNkLGNBQWMsRUFDZCxvQkFBb0IsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBakJ6QyxhQUFRLEdBQVIsUUFBUSxDQUFVO1FBQ2xCLDJCQUFzQixHQUF0QixzQkFBc0IsQ0FBd0I7UUFDOUMsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEyQjtRQUM3Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIseUJBQW9CLEdBQXBCLG9CQUFvQixDQUFzQjtRQUMxQyxXQUFNLEdBQU4sTUFBTSxDQUFXO1FBQ2pCLGFBQVEsR0FBUixRQUFRLENBQWE7UUFDckIsU0FBSSxHQUFKLElBQUksQ0FBWTtRQUNmLGVBQVUsR0FBVixVQUFVLENBQVk7SUFRaEMsQ0FBQztJQUVELElBQUksUUFBUTtRQUNWLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxFQUFFLENBQUM7UUFDbkIsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUN2QixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxnQkFBZ0IsQ0FBQyxLQUFhO1FBQzVCLElBQUksS0FBSyxFQUFFO1lBQ1QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRTtnQkFDakIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLEVBQUUsR0FBRyxLQUFLLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7YUFDMUI7aUJBQU0sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtnQkFDekIsSUFBSSxXQUFXLEdBQUcsQ0FBQyxLQUFLLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDekgsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxDQUFDLENBQUM7YUFDaEM7U0FDRjtJQUNILENBQUM7SUFFRCxpQkFBaUI7UUFDZixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsTUFBTSxXQUFXLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUMxRixJQUFJLFdBQVcsRUFBRTtnQkFDZixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNwRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1lBQzNDLE1BQU0sUUFBUSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEUsTUFBTSxPQUFPLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDckUsTUFBTSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ2xELE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFbEQsTUFBTSxLQUFLLEdBQUcsRUFBRSxDQUFDO1lBQ2pCLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLElBQUksZUFBZSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO2dCQUN6RixNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBRTtvQkFDakIsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQTtpQkFDbEI7Z0JBQ0QsTUFBTSxPQUFPLEdBQUc7b0JBQ2QsSUFBSSxFQUFFLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDakIsS0FBSyxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7b0JBQzlELFNBQVMsRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztvQkFDckUsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRTtvQkFDN0MsU0FBUyxFQUFFLENBQUMsQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFO29CQUMzQyxRQUFRLEVBQUUsSUFBSTtvQkFDZCxXQUFXLEVBQUUsS0FBSztvQkFDbEIsS0FBSyxFQUFFLEVBQUU7b0JBQ1QsS0FBSyxFQUFFLEVBQUU7aUJBQ1YsQ0FBQztnQkFFRixJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDL0IsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUMzRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLEVBQUU7d0JBQzFCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ25ELE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQzdDLE9BQU8sQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQzdDLE9BQU8sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLENBQUM7cUJBQzFEO3lCQUFNLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDL0IsT0FBTyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFFBQVEsQ0FBQzt3QkFDakQsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDM0MsT0FBTyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsQ0FBQztxQkFDeEQ7aUJBQ0Y7Z0JBRUQsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQTtnQkFDMUIsS0FBSyxFQUFFLENBQUM7YUFDVDtZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1NBQzNCO0lBQ0gsQ0FBQztJQUVELHdGQUF3RjtJQUN4RixzQkFBc0IsQ0FBQyxTQUFTO1FBQzlCLElBQUksWUFBWSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5RyxLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7WUFDeEMsS0FBSyxNQUFNLFNBQVMsSUFBSSxRQUFRLEVBQUU7Z0JBQ2hDLElBQUksWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztnQkFDbkcsSUFBSSxDQUFDLFlBQVksS0FBSyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQy9FLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVELFNBQVMsQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFDbEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxHQUFHLENBQUM7UUFDM0IsT0FBTyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVELFdBQVcsQ0FBQyxDQUFDO1FBQ1gsQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hCLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFDbEIsSUFBSSxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQztRQUNqQyxPQUFPLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNuQyxDQUFDO0lBR0QsUUFBUTtRQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3ZFLENBQUM7SUFFRCxzQ0FBc0M7SUFFdEMsV0FBVztRQUNSLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNyQixZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ2pDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1NBQzdCO1FBRUQsc0JBQXNCO1FBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ3BDO1FBRUEsNkJBQTZCO1FBQzlCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLEVBQUU7WUFDekMsSUFBSSxPQUFPLElBQUksT0FBTyxDQUFDLE1BQU0sRUFBRTtnQkFDM0IsT0FBTyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsNEJBQTRCO2FBQzlDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMscUJBQXFCLEdBQUcsRUFBRSxDQUFDO1FBRWhDLG1DQUFtQztRQUMvQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsWUFBWSxHQUFHLEVBQUUsQ0FBQztRQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQix5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7WUFDcEMsSUFBSSxRQUFRLElBQUksT0FBTyxRQUFRLENBQUMsT0FBTyxLQUFLLFVBQVUsRUFBRTtnQkFDcEQsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUUxQiwwQkFBMEI7UUFDMUIsSUFBSSxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQzFCO1FBRUQsMkJBQTJCO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDO1FBRXpCLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBRS9CLHlCQUF5QjtRQUN6QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQztJQUVELElBQUksWUFBWTtRQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUM7SUFDdEgsQ0FBQztJQUVELElBQUksV0FBVztRQUNiLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDaEgsQ0FBQztJQUVELGNBQWM7UUFDWixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxRCxJQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsRUFBRTtZQUM1QyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsQ0FBQztTQUMvRDtRQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxFQUFFO1lBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGFBQWEsQ0FBQyxDQUFDO1NBQzNEO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsaUJBQWlCLENBQUMsRUFBRTtZQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ2xFO1FBQ0QsSUFBSSxJQUFJLENBQUMsbUJBQW1CLENBQUMsb0JBQW9CLENBQUMsRUFBRTtZQUNsRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLG9CQUFvQixDQUFDLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztTQUNsRztRQUNELElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLEVBQUU7WUFDL0MsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRyxTQUFTLENBQ1IsR0FBRyxDQUFDLEVBQUU7Z0JBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDO2dCQUN4QixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3RCLENBQUMsQ0FDRixDQUNGLENBQUM7U0FDSDthQUNJO1lBQ0gsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7U0FDckI7UUFFRCxJQUFJLElBQUksQ0FBQyxVQUFVLEtBQUssU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7WUFDcEUsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLFdBQVcsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO2dCQUM3QixJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUNJO2dCQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDN0YsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUM1QztZQUNELElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1NBQ2hEO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRTtZQUNoSSxJQUFJLGVBQWUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN6RCxJQUFJLENBQUMsVUFBVSxHQUFHLGVBQWUsQ0FBQztZQUNsQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLENBQUM7U0FDNUM7UUFHRCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDN0MsS0FBSyxNQUFNLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLGVBQWUsRUFBRTtnQkFDakQsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtvQkFDdEIsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDdkQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDckQsTUFBTSxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztvQkFDckQsSUFBSSxPQUFPLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTt3QkFDeEIsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7NEJBQ2QsZ0JBQWdCOzRCQUNoQixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQztnQ0FDckIsSUFBSSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7Z0NBQ2hCLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dDQUNuQixRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQztnQ0FDcEIsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQyxDQUFDO2dDQUMzQixLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQzNCLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDOzZCQUNwRCxDQUFDLENBQUM7eUJBQ0o7NkJBQU07NEJBQ0wsZUFBZTs0QkFDZixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRztnQ0FDL0MsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ2YsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0NBQ2YsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLFdBQVcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7NkJBQ3BELENBQUM7NEJBQ0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQzt5QkFDNUc7cUJBQ0Y7aUJBQ0Y7YUFDRjtZQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO1FBRUQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHFCQUFxQjtRQUNuQixzREFBc0Q7UUFDdEQsMEVBQTBFO1FBQzFFLHVFQUF1RTtRQUN2RSxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkYscUNBQXFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLElBQUksSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUU7WUFDM0YsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pGLElBQUcsUUFBUSxJQUFJLFFBQVEsQ0FBQyxLQUFLLEVBQUU7Z0JBQzdCLElBQUksZUFBZSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUYsSUFBSSxDQUFDLFVBQVUsR0FBRyxlQUFlLENBQUM7Z0JBQ2xDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsQ0FBQzthQUM1QztTQUNGO1FBRUQsSUFBRyxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDM0MsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUM7WUFDOUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ3hEO0lBQ0gsQ0FBQztJQUdPLFlBQVk7UUFDbEIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsTUFBTSxTQUFTLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDdEQsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7UUFDSCxxRUFBcUU7UUFDckUsOEZBQThGO1FBQzlGLHFFQUFxRTtRQUNyRSxpQkFBaUI7SUFDbkIsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFVLEVBQUUsZUFBZTtRQUNsQyxlQUFlLENBQUMsT0FBTyxLQUFLLEtBQUssQ0FBQyxPQUFPLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUN2RixlQUFlLENBQUMsS0FBSyxLQUFLLEtBQUssQ0FBQyxLQUFLLElBQUksQ0FBQyxlQUFlLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNqRixDQUFDO0lBRUQsVUFBVSxLQUFLLENBQUM7SUFFaEIsY0FBYyxDQUFDLENBQUM7UUFDZCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ25FLElBQUksQ0FBQyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1FBQy9DLElBQUksQ0FBQyxVQUFVLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNwRSxJQUFJLENBQUMsaUJBQWlCLEdBQUcsS0FBSyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQsV0FBVyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELFFBQVEsQ0FBQyxLQUFLO1FBQ1osTUFBTSxRQUFRLEdBQUcsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7UUFDN0QsSUFBSSxRQUFRLEdBQUcsRUFBRSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLEVBQUU7WUFDckQsT0FBTyxLQUFLLENBQUM7U0FDZDtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVELFdBQVcsQ0FBQyxHQUFXO1FBQ3JCLElBQUksSUFBSSxDQUFDLHNCQUFzQixLQUFLLEdBQUcsRUFBRTtZQUN2QyxPQUFPLENBQUMsNkNBQTZDO1NBQ3REO1FBQ0QsSUFBSSxDQUFDLHNCQUFzQixHQUFHLEdBQUcsQ0FBQztRQUNsQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO1lBQzFHLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDaEMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUM1RSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGlCQUFpQixHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxRCxJQUFJLENBQUMsSUFBSSxDQUFDLGlCQUFpQixJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQzNDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDNUM7U0FDRjthQUFNLElBQUksR0FBRyxFQUFFO1lBQ2QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNMLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxLQUFLLENBQUM7U0FDaEM7SUFDSCxDQUFDO0lBRUQsUUFBUSxDQUFDLEdBQVc7UUFDbEIsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRTtZQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztTQUMxQjtJQUNILENBQUM7SUFFRCxvQkFBb0IsQ0FBQyxJQUFTO1FBQzVCLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFO1lBQ3BDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdEQsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUNuRCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDN0YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO1NBQ3ZDO2FBQU07WUFDTCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztZQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztTQUNqQztRQUNELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQixDQUFDO0lBRUQsbUJBQW1CLENBQUMsQ0FBQztRQUNuQixJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25ILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQ25ILE9BQU8sS0FBSyxDQUFDO1NBQ2Q7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBUztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRixNQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN0RixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFRCxhQUFhLENBQUMsUUFBUTtRQUNwQixJQUFJLFFBQVEsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFDO1lBQzdCLEtBQUssTUFBTSxPQUFPLElBQUksUUFBUSxFQUFFO2dCQUM5QixLQUFLLE1BQU0sUUFBUSxJQUFJLElBQUksQ0FBQyxZQUFZLEVBQUU7b0JBRXhDLE1BQU0sSUFBSSxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUM7b0JBQzdFLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQ2pGLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUM7b0JBQ2pGLE1BQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxRQUFRLENBQUM7b0JBQ25DLE1BQU0sV0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFlLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLDhCQUE4QjtvQkFFekosSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUN4RCxJQUFJLENBQ0QsT0FBTyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsSUFBSSxPQUFPLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFDL0U7d0JBQ0EsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRzs0QkFDcEIsS0FBSzs0QkFDTCxLQUFLOzRCQUNMLFFBQVE7NEJBQ1IsV0FBVzt5QkFDWixDQUFDO3dCQUNGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3pILE1BQU07cUJBQ1A7aUJBQ0Y7YUFDRjtZQUNELElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO1NBQzFCO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtRQUNkLElBQUksTUFBTSxDQUFDO1FBQ1gsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNwRCxNQUFNLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ3hCLE1BQU0sSUFBSSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDeEIsT0FBTyxNQUFNLENBQUM7SUFDaEIsQ0FBQztJQUVELGdCQUFnQixDQUFDLE1BQWMsRUFBRSxLQUFVO1FBQ3pDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDdEMsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxrQkFBa0IsR0FBRyxJQUFJLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDOUQsSUFBSSxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDbEMsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsSUFBSSxrQkFBa0IsS0FBSyxXQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzNFLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuRzthQUNGO1lBQ0QsSUFBSSxrQkFBa0IsRUFBRTtnQkFDdEIsSUFBSSxrQkFBa0IsS0FBSyxXQUFXLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQzNFLGtCQUFrQixHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLGtCQUFrQixHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNuRzthQUNGO1NBQ0Y7UUFDRCxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLElBQUksa0JBQWtCLEtBQUssTUFBTSxFQUFFO2dCQUNqQyxNQUFNLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDN0IsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2FBQ3pEO2lCQUFNO2dCQUNMLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQzNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzthQUN6RDtTQUNGO1FBQ0QsSUFBSSxrQkFBa0IsRUFBRTtZQUN0QixJQUFJLGtCQUFrQixLQUFLLE1BQU0sRUFBRTtnQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzFEO2lCQUFNO2dCQUNMLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ3hGO1NBQ0Y7UUFDRCxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVELGlCQUFpQjtRQUNmLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sa0JBQWtCLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sZUFBZSxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUUxRCxJQUFJLGtCQUFrQixFQUFFO1lBQ3RCLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ3hGO1FBQ0QsSUFBSSxrQkFBa0IsRUFBRTtZQUN0QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUN4RjtRQUNELElBQUksZUFBZSxFQUFFO1lBQ25CLElBQUksS0FBSyxDQUFDO1lBQ1YsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFFO2dCQUNwQyxLQUFLLEdBQUcsZUFBZSxHQUFHLEdBQUcsQ0FBQTthQUM5QjtpQkFBTTtnQkFDTCxNQUFNLFdBQVcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7Z0JBQzdHLE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxzQkFBc0IsQ0FBQyxrQkFBa0IsQ0FBQyxlQUFlLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDMUgsSUFBSSxVQUFVLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO29CQUNoQyxLQUFLLEdBQUcsV0FBVyxHQUFHLEdBQUcsQ0FBQTtpQkFDMUI7YUFDRjtZQUVELElBQUksS0FBSyxFQUFFO2dCQUNULElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLEVBQUUsS0FBSyxDQUFDLENBQUM7Z0JBQ3RELE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFDO2dCQUM5QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDckI7U0FDRjtJQUNILENBQUM7SUFFRCxhQUFhLENBQUMsY0FBYyxFQUFFLElBQUk7UUFDaEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLHVCQUF1QixDQUFDLGNBQWMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLEtBQUssS0FBSyxFQUFFO1lBQ3JDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1NBQ25EO2FBQU07WUFDTCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztTQUNuRDtJQUNILENBQUM7SUFFRCx1QkFBdUIsQ0FBQyxjQUFjLEVBQUUsSUFBSTtRQUMxQyxNQUFNLEdBQUcsR0FBRztZQUNWLEtBQUssRUFBRSxDQUFDLGNBQWMsQ0FBQztZQUN2QixJQUFJO1NBQ0wsQ0FBQztRQUNGLElBQUksY0FBYyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNoQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztZQUNmLEtBQUssTUFBTSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzdHLE1BQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2xDLDBCQUEwQjtnQkFDMUIsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsR0FBRyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQ3RCO2FBQ0Y7WUFDRCxJQUFJLGNBQWMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQ2pDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUMxQztTQUNGO2FBQU07WUFDTCxHQUFHLENBQUMsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO1NBQy9DO1FBQ0QsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQsVUFBVSxDQUFDLEtBQUs7UUFDZCxNQUFNLEtBQUssR0FBRyx5QkFBeUIsQ0FBQztRQUN4QyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLElBQUksTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxPQUFPLEVBQUU7WUFDWCxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO1lBQ3RCLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNuRztpQkFBTSxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ25DLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDbkc7aUJBQU0sSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNuQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQ25HO2lCQUFNLElBQUksT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxFQUFFLElBQUksRUFBRSxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUNuRztpQkFBTTtnQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLDBDQUEwQyxDQUFDLENBQUM7YUFDM0Q7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO2FBQU07WUFDTCxJQUFJLEtBQUssS0FBSyxXQUFXLEVBQUU7Z0JBQ3pCLE9BQU8sSUFBSSxJQUFJLEVBQUUsQ0FBQzthQUNuQjtpQkFBTTtnQkFDTCxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUNuRCxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDeEIsS0FBSzs0QkFDSCxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEtBQUssR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUNyRztpQkFDRjtnQkFDRCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUMvRCxJQUFJLEtBQUssRUFBRTtvQkFDVCxPQUFPLElBQUksSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztpQkFDakQ7YUFDRjtTQUNGO0lBQ0gsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNLLGFBQWEsQ0FBQyxJQUFZLEVBQUUsV0FBaUIsRUFBRSxFQUFVLEVBQUUsUUFBZ0I7UUFDakYsTUFBTSxJQUFJLEdBQUcsV0FBVyxDQUFDO1FBQ3pCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxHQUFHO2dCQUNOLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtvQkFDdEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUNuRTtxQkFBTTtvQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxDQUFDLFdBQVcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQ25FO1lBQ0gsS0FBSyxHQUFHO2dCQUNOLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtvQkFDdEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUM3RDtxQkFBTTtvQkFDTCxPQUFPLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7aUJBQzdEO1lBQ0gsS0FBSyxHQUFHO2dCQUNOLElBQUksUUFBUSxLQUFLLEtBQUssRUFBRTtvQkFDdEIsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQ2pFO3FCQUFNO29CQUNMLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNqRTtZQUNILEtBQUssR0FBRztnQkFDTixJQUFJLFFBQVEsS0FBSyxLQUFLLEVBQUU7b0JBQ3RCLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQztpQkFDM0Q7cUJBQU07b0JBQ0wsT0FBTyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDO2lCQUMzRDtTQUNKO0lBQ0gsQ0FBQztJQUVELGNBQWMsQ0FBQyxRQUFhO1FBQzFCLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUNkLElBQUksZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUN6QixJQUFJLFFBQVEsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNsQyxJQUFJLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUMzQixlQUFlLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDTCxJQUFJLEdBQUcsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUN4QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7Z0JBQ3ZCLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUM7aUJBQU07Z0JBQ0wsZUFBZSxHQUFHLENBQUMsR0FBRyxlQUFlO29CQUNyQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQ25DLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQ3BDLElBQUksQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLGVBQWUsR0FBRztvQkFDaEIsR0FBRyxlQUFlO29CQUNsQixHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxlQUFlLENBQUM7aUJBQUMsQ0FBQzthQUMxRTtTQUNGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUNqQixJQUFJLGVBQWUsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2pDLGdCQUFnQjtnQkFDaEIsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMscUJBQXFCLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDM0YsS0FBSyxNQUFNLFFBQVEsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLHFCQUFxQixFQUFFO3dCQUMzRCxJQUFJLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLGNBQWMsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ25FLElBQUksUUFBUSxDQUFDLGNBQWMsS0FBSyxlQUFlLEVBQUU7NEJBQy9DLElBQUksSUFBSSxDQUFDOzRCQUNULElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLFdBQVcsRUFBRTtnQ0FDN0QsSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzs2QkFDaEM7aUNBQ0k7Z0NBQ0gsSUFBSSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDOzZCQUMzRDs0QkFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDOzRCQUN2RixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUE7NEJBQzdGLE1BQU07eUJBQ1A7NkJBQU07NEJBQ0wsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7NEJBQ3JCLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7eUJBQzFCO3FCQUNGO2lCQUNGO3FCQUFNO29CQUNMLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxDQUFDO29CQUNyQixJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxDQUFDO2lCQUMxQjtnQkFDRCxpREFBaUQ7Z0JBQ2pELGlGQUFpRjtnQkFDakYseURBQXlEO2dCQUN6RCxxSEFBcUg7Z0JBQ3JILG1DQUFtQztnQkFDbkMsSUFBSSxDQUFDLGVBQWUsR0FBRyxLQUFLLENBQUM7Z0JBQzdCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO2dCQUNsQixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLGVBQWUsRUFBRSxDQUFDO29CQUMxQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsQ0FBQztvQkFDekMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsc0JBQXNCLEVBQUUsQ0FBQztpQkFDbEQ7Z0JBQ0QsT0FBTzthQUNSO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsb0JBQW9CLENBQUMsUUFBYTtRQUNoQyx5REFBeUQ7UUFDekQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxlQUFlLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksT0FBTyxRQUFRLEtBQUssUUFBUSxFQUFFO1lBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFO2dCQUMzQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2pCLENBQUMsQ0FBQyxDQUFDO1lBQ0gsZUFBZSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDO1NBQzVDO1FBQ0QsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoRixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQUVELFNBQVMsQ0FBQyxLQUFLO1FBQ2IsS0FBSyxDQUFDLGVBQWUsRUFBRSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw2QkFBNkIsQ0FBQyxJQUFZO1FBQ3hDLElBQUksSUFBSSxFQUFFO1lBQ1IsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQ3hELElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDN0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLGlHQUFpRztnQkFDakcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7YUFDN0g7U0FDRjtJQUNILENBQUM7SUFFRCwrQkFBK0IsQ0FBQyxJQUFZO0lBRTVDLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBWTtRQUN6Qiw4Q0FBOEM7SUFDaEQsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVM7UUFDMUIsOENBQThDO0lBQ2hELENBQUM7SUFFRCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsSUFBSSxPQUFPLENBQUMsaUJBQWlCLEVBQUU7WUFDN0IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsWUFBWSxFQUFFLFlBQVksQ0FBQyxDQUFDO1NBQzFFO1FBQ0QsSUFBSSxPQUFPLENBQUMsZ0JBQWdCLEVBQUU7WUFDNUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsWUFBWSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1NBQ3hFO1FBQ0QsSUFBSSxPQUFPLENBQUMsa0JBQWtCLEVBQUU7WUFDOUIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsa0JBQWtCLENBQUMsWUFBWSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQztJQUVPLGFBQWE7UUFDbkIsTUFBTSxVQUFVLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEQsTUFBTSxVQUFVLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztRQUN4RCxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLEVBQUU7WUFDckQsT0FBTyxFQUFFLElBQUksRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ08sWUFBWSxDQUFDLElBQUksR0FBRyxJQUFJO1FBQzlCLElBQUksSUFBSSxJQUFJLElBQUksRUFBRTtZQUNoQixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxFQUFFO2dCQUN6QixJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7YUFDOUI7aUJBQU07Z0JBQ0wsSUFBSSxHQUFHLElBQUksSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7YUFDakM7U0FDRjtRQUNELEtBQUssSUFBSSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN2QyxJQUFJLFFBQVEsR0FBRyxLQUFLLENBQUM7WUFDckIsSUFBSSxJQUFJLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLEVBQUU7Z0JBQzVELFFBQVEsR0FBRyxJQUFJLENBQUM7YUFDakI7WUFDRCxJQUFJLElBQUksQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxXQUFXLEVBQUUsRUFBRTtnQkFDNUQsUUFBUSxHQUFHLElBQUksQ0FBQzthQUNqQjtZQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDO2dCQUNsQixLQUFLLEVBQUUsQ0FBQztnQkFDUixRQUFRO2FBQ1QsQ0FBQyxDQUFDO1NBQ0o7SUFDSCxDQUFDO0lBQ0QsV0FBVyxDQUFDLElBQUksR0FBRyxHQUFHO1FBQ3BCLFFBQVEsSUFBSSxFQUFFO1lBQ1osS0FBSyxHQUFHO2dCQUNOLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO2dCQUNyRCxNQUFNO1lBQ1IsS0FBSyxHQUFHO2dCQUNOLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUU7b0JBQ25CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxDQUFDO2lCQUN0RDtxQkFBTTtvQkFDTCxNQUFNLE9BQU8sR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7b0JBQ3ZDLE1BQU0sT0FBTyxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFFdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTt3QkFDakQsSUFBSSxRQUFRLEdBQUcsS0FBSyxDQUFDO3dCQUNyQixJQUNFLElBQUksQ0FBQyxPQUFPOzRCQUNaLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUM7Z0NBQzlDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLElBQUksT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsRUFDbkY7NEJBQ0EsUUFBUSxHQUFHLElBQUksQ0FBQzt5QkFDakI7d0JBQ0QsSUFDRSxJQUFJLENBQUMsT0FBTzs0QkFDWixDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dDQUM5QyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLEVBQ25GOzRCQUNBLFFBQVEsR0FBRyxJQUFJLENBQUM7eUJBQ2pCO3dCQUNELE9BQU87NEJBQ0wsR0FBRyxDQUFDOzRCQUNKLFFBQVE7eUJBQ1QsQ0FBQztvQkFDSixDQUFDLENBQUMsQ0FBQztvQkFDSCxJQUFJLElBQUksQ0FBQyxPQUFPLEVBQUU7cUJBQ2pCO29CQUNELElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTtxQkFFakI7b0JBQ0QsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ3REO2dCQUNELE1BQU07WUFDUixLQUFLLEdBQUc7Z0JBQ04sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDbEIsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLENBQUM7aUJBQ3REO3FCQUFNO29CQUNMLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDO2lCQUN0RDtnQkFDRCxNQUFNO1NBQ1Q7SUFDSCxDQUFDO0lBQ0QsWUFBWSxDQUFDLEtBQUs7UUFDaEIsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN4QixDQUFDO0lBQ0QsV0FBVyxDQUFDLElBQUk7UUFDZCxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztRQUN6QixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTSxhQUFhLENBQUMsQ0FBQztRQUNwQixNQUFNLE1BQU0sR0FBRyxDQUFDLENBQUMsYUFBYSxDQUFDO1FBQy9CLE1BQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQztRQUM3QyxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsc0JBQXNCLENBQUM7UUFDckQsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO1FBQzlOLE1BQU0sb0JBQW9CLEdBQUcsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsSUFBSSxNQUFNLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsYUFBYSxDQUFDLHNDQUFzQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUM3TyxNQUFNLFdBQVcsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsTUFBTSxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGtCQUFrQixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxhQUFhLENBQUMsc0NBQXNDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUN2UCxNQUFNLGNBQWMsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLHNCQUFzQixJQUFJLE1BQU0sQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsUUFBUSxLQUFLLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxhQUFhLENBQUMsc0NBQXNDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNqUSxRQUFRLENBQUMsQ0FBQyxHQUFHLEVBQUU7WUFDYixLQUFLLEtBQUs7Z0JBQ1IsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNuQyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ3JFLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUM1QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ04sTUFBTTtZQUNSLEtBQUssWUFBWTtnQkFDZixJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsUUFBUSxLQUFLLEtBQUssSUFBSSxVQUFVLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFO29CQUM1RyxNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsVUFBVSxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBQzFCLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDcEI7cUJBQU0sSUFBSSxnQkFBZ0IsRUFBRTtvQkFDM0IsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLGdCQUFnQixDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBQ2hDLGdCQUFnQixDQUFDLEtBQUssRUFBRSxDQUFDO2lCQUMxQjtnQkFDRCxDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7Z0JBQ25CLE1BQU07WUFDUixLQUFLLFdBQVc7Z0JBQ2QsSUFBSSxjQUFjLElBQUksY0FBYyxDQUFDLFFBQVEsS0FBSyxLQUFLLElBQUksY0FBYyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsMEJBQTBCLENBQUMsRUFBRTtvQkFDeEgsTUFBTSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLGNBQWMsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO29CQUM5QixjQUFjLENBQUMsS0FBSyxFQUFFLENBQUM7aUJBQ3hCO3FCQUFNLElBQUksb0JBQW9CLEVBQUU7b0JBQy9CLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN2QixvQkFBb0IsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO29CQUNwQyxvQkFBb0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDOUI7Z0JBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUVuQixNQUFNO1lBQ1IsS0FBSyxXQUFXO2dCQUNkLElBQUksZ0JBQWdCLEVBQUU7b0JBQ3BCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUN2QixnQkFBZ0IsQ0FBQyxRQUFRLEdBQUcsR0FBRyxDQUFDO29CQUNoQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDMUI7Z0JBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixNQUFNO1lBQ1IsS0FBSyxTQUFTO2dCQUNaLElBQUksY0FBYyxFQUFFO29CQUNsQixNQUFNLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztvQkFDdkIsY0FBYyxDQUFDLFFBQVEsR0FBRyxHQUFHLENBQUM7b0JBQzlCLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDeEI7Z0JBQ0QsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO2dCQUNuQixNQUFNO1NBRVQ7SUFDSCxDQUFDO0lBRU0scUJBQXFCLENBQUMsQ0FBQztRQUM1QixJQUFJLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMscUJBQXFCLENBQUMsQ0FBQyxFQUFFO1lBQ3hILFFBQVEsQ0FBQyxDQUFDLEdBQUcsRUFBRTtnQkFDYixLQUFLLFlBQVk7b0JBQ2YsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUN6QixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUMxQixDQUFDLENBQUMsY0FBYyxFQUFFLENBQUM7b0JBQ25CLE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDMUIsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixNQUFNO2dCQUNSLEtBQUssU0FBUztvQkFDWixJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztvQkFDM0IsQ0FBQyxDQUFDLGNBQWMsRUFBRSxDQUFDO29CQUNuQixNQUFNO2FBQ1Q7U0FDRjtJQUNILENBQUM7SUFFRCxZQUFZLEdBQVksS0FBSyxDQUFDO0lBQ3ZCLGNBQWMsQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ3BCLE1BQU0sYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDekMsTUFBTSxpQkFBaUIsR0FBRyxDQUFDLENBQUMsMkJBQTJCLENBQUMsQ0FBQztZQUV6RCwrQkFBK0I7WUFDL0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztZQUVsRSxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUNyQyxpQkFBaUIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDL0QsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7SUFDSCxDQUFDOzhFQXA5QlUsb0JBQW9COzZEQUFwQixvQkFBb0I7Ozs7OztZQ2hDakMsdUVBQ29HOztZQUQzQyxvQ0FBZTs0QkQ2QjVELGtCQUFrQixpREFBRSxjQUFjLGdCQUFFLGdCQUFnQixFQUFFLFlBQVksK0NBQUUsV0FBVyw4REFBRSxtQkFBbUIsc0VBQTRDLGFBQWE7O2lGQUc1SixvQkFBb0I7Y0FSaEMsU0FBUzsyQkFDRSxrQkFBa0IsY0FHaEIsSUFBSSxXQUNQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGdCQUFnQixFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsbUJBQW1CLEVBQUUsc0JBQXNCLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLENBQUM7aVdBTS9JLFVBQVU7a0JBQWxDLFNBQVM7bUJBQUMsWUFBWTtZQUVOLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSzs7a0ZBWEssb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkLCBFbGVtZW50UmVmLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIMm1Q29uc29sZSwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBEYXRlUGlwZSwgTmdDbGFzcywgTmdTdHlsZSwgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tICcuLi9jZWUtYmFzZS1jbGFzcyc7XHJcbi8vIGltcG9ydCB7IEJzRGF0ZXBpY2tlckNvbmZpZyB9IGZyb20gJ25neC1ib290c3RyYXAvZGF0ZXBpY2tlcic7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBGb3Jtc01vZHVsZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgTWF0RGF0ZXBpY2tlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQgeyBDdXN0b21Ub29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9hcHAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdhcHAtY2VlLWNhbGVuZGFyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vY2VlLWNhbGVuZGFyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9jZWUtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRUb29sdGlwTW9kdWxlLCBDb21tb25Nb2R1bGUsIEZvcm1zTW9kdWxlLCBNYXREYXRlcGlja2VyTW9kdWxlLCBDdXN0b21Ub29sdGlwRGlyZWN0aXZlLCBOZ0NsYXNzLCBOZ1N0eWxlLCBUb29sdGlwTW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENlZUNhbGVuZGFyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcblxyXG4gIEBWaWV3Q2hpbGQoJ2RhdGVQaWNrZXInKSBkYXRlUGlja2VyOiBOZ01vZGVsO1xyXG5cclxuICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gIEBJbnB1dCgpIG1hbmRhdG9yeUNvbmRpdGlvbjogYW55O1xyXG4gIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG5cclxuICBtaW5EYXRlOiBEYXRlO1xyXG4gIG1heERhdGU6IERhdGU7XHJcbiAgaXNWYWxpZCA9IHRydWU7XHJcblxyXG4gIGlucHV0VmFsdWU7XHJcbiAgbm93OiBEYXRlID0gbmV3IERhdGUoKTtcclxuICBub3dEYXRlOiBEYXRlID0gbmV3IERhdGUodGhpcy5ub3cuZ2V0RnVsbFllYXIoKSwgdGhpcy5ub3cuZ2V0TW9udGgoKSwgdGhpcy5ub3cuZ2V0RGF0ZSgpKTtcclxuICBkYXRlUGlja2VyU3RhdGUgPSB7XHJcbiAgICB0b3VjaGVkOiBmYWxzZSxcclxuICAgIGRpcnR5OiBmYWxzZVxyXG4gIH07XHJcbiAgZGF5UGlja2VySW5kZXggPSBuZXcgRGF0ZSgpO1xyXG4gIG1vbnRoQ2FwdGlvbjogc3RyaW5nO1xyXG4gIGNhbGVuZGFyRGF5cyA9IFtdO1xyXG4gIGRhdGVEYXRhID0ge307XHJcbiAgYWxsb3dNYW51YWxFbnRyeTogYm9vbGVhbjtcclxuICBpbnZhbGlkRGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHByZXZpb3VzRGF0ZUlucHV0VmFsdWU6IHN0cmluZyA9IFwiXCJcclxuICBpc1VuYXZhaWxhYmxlRGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIGRhdGVGb3JtYXQ6IHN0cmluZyA9ICdNTS9ERC9ZWVlZJztcclxuICBhcGlEYXRlRm9ybWF0OiBzdHJpbmcgPSAnTU0vREQvWVlZWSc7XHJcbiAgZGVmYXVsdFZhbHVlOiBhbnk7XHJcbiAgdHlwZVdpc2VMaXN0ID0gW107XHJcbiAgd2Vla0FycmF5OiBBcnJheTxhbnk+ID0gW107XHJcbiAgbW9udGhBcnJheTogQXJyYXk8YW55PiA9IFtdO1xyXG4gIHllYXJBcnJheTogQXJyYXk8YW55PiA9IFtdO1xyXG4gIGxvY2FsZTogc3RyaW5nID0gJ2VuJztcclxuXHJcbiAgY2FwdGlvbkRhdGE6IGFueSA9IHtcclxuICAgIG1vbnRoOiAnJyxcclxuICAgIHllYXI6ICcnXHJcbiAgfTtcclxuICB2aWV3OiBhbnkgPSB7XHJcbiAgICBkYXk6IHRydWUsXHJcbiAgICBtb250aDogZmFsc2UsXHJcbiAgICB5ZWFyOiBmYWxzZVxyXG4gIH07XHJcbiAgcHJpdmF0ZSBzd2l0Y2hUaW1lb3V0ID0gbnVsbDtcclxuICBwcml2YXRlIHN1YnNjcmlwdGlvbnMgPSBuZXcgU3Vic2NyaXB0aW9uKCk7XHJcbiAgcHJpdmF0ZSBqUXVlcnlDbGVhbnVwRWxlbWVudHM6IEpRdWVyeVtdID0gW107XHJcbiAgcHJpdmF0ZSBtb21lbnRJbnN0YW5jZXM6IGFueVtdID0gW107IC8vIFRyYWNrIG1vbWVudCBpbnN0YW5jZXNcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGF0ZXBpcGU6IERhdGVQaXBlLFxyXG4gICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBlbGVtZW50UmVmOiBFbGVtZW50UmVmXHJcbiAgKSB7XHJcbiAgICBzdXBlcih1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlLFxyXG4gICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgIGFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICBhcGlEYXRhU2VydmljZSxcclxuICAgICAgd2ZlU3RlcExvYWRlclNlcnZpY2UsIGRpYWxvZywgc25hY2tCYXIsIGh0dHApO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGN1cnJEYXRlKCk6IERhdGUge1xyXG4gICAgbGV0IGQgPSBuZXcgRGF0ZSgpO1xyXG4gICAgZC5zZXRIb3VycygwLCAwLCAwLCAwKTtcclxuICAgIHJldHVybiBkO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlTW9udGhJbmRleChpbmRleDogbnVtYmVyKSB7XHJcbiAgICBpZiAoaW5kZXgpIHtcclxuICAgICAgaWYgKHRoaXMudmlldy5kYXkpIHtcclxuICAgICAgICB0aGlzLmRheVBpY2tlckluZGV4LnNldE1vbnRoKHRoaXMuZGF5UGlja2VySW5kZXguZ2V0TW9udGgoKSArIGluZGV4KTtcclxuICAgICAgICB0aGlzLmdlbmVyYXRlRGF5UGlja2VyKCk7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy52aWV3LnllYXIpIHtcclxuICAgICAgICBsZXQgY3VycmVudFllYXIgPSAoaW5kZXggPT0gLTEpID8gKHRoaXMueWVhckFycmF5WzBdLnZhbHVlIC0gMTIpIDogKHRoaXMueWVhckFycmF5W3RoaXMueWVhckFycmF5Lmxlbmd0aCAtIDFdLnZhbHVlICsgMSk7XHJcbiAgICAgICAgdGhpcy55ZWFyQXJyYXkgPSBbXTtcclxuICAgICAgICB0aGlzLmxvYWRZZWFyTGlzdChjdXJyZW50WWVhcik7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdlbmVyYXRlRGF5UGlja2VyKCkge1xyXG4gICAgaWYgKHRoaXMuZGF5UGlja2VySW5kZXgpIHtcclxuICAgICAgY29uc3QgY2FwdGlvbkRhdGUgPSBtb21lbnQuZGVmYXVsdCh0aGlzLmRheVBpY2tlckluZGV4LnRvSVNPU3RyaW5nKCkpLmxvY2FsZSh0aGlzLmxvY2FsZSk7XHJcbiAgICAgIGlmIChjYXB0aW9uRGF0ZSkge1xyXG4gICAgICAgIHRoaXMuY2FwdGlvbkRhdGEubW9udGggPSBjYXB0aW9uRGF0ZS5mb3JtYXQoJ01NTU0nKTtcclxuICAgICAgICB0aGlzLmNhcHRpb25EYXRhLnllYXIgPSBjYXB0aW9uRGF0ZS5mb3JtYXQoJ1lZWVknKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUodGhpcy5kYXlQaWNrZXJJbmRleCk7XHJcbiAgICAgIGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpO1xyXG4gICAgICBjb25zdCBsYXN0RGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcclxuICAgICAgY29uc3QgZmlyc3RDYWxlbmRhckRheSA9IHRoaXMuZ2V0U3VuZGF5KGZpcnN0RGF5KTtcclxuICAgICAgY29uc3QgbGFzdENhbGVuZGFyRGF5ID0gdGhpcy5nZXRTYXR1cmRheShsYXN0RGF5KTtcclxuXHJcbiAgICAgIGNvbnN0IGNEYXlzID0gW107XHJcbiAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgIGZvciAodmFyIGQgPSBuZXcgRGF0ZShmaXJzdENhbGVuZGFyRGF5KTsgZCA8PSBsYXN0Q2FsZW5kYXJEYXk7IGQuc2V0RGF0ZShkLmdldERhdGUoKSArIDEpKSB7XHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBNYXRoLmZsb29yKGNvdW50IC8gNyk7XHJcbiAgICAgICAgaWYgKCFjRGF5c1tpbmRleF0pIHtcclxuICAgICAgICAgIGNEYXlzW2luZGV4XSA9IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRheVZpZXcgPSB7XHJcbiAgICAgICAgICBkYXRlOiBuZXcgRGF0ZShkKSxcclxuICAgICAgICAgIHZhbHVlOiBtb21lbnQuZGVmYXVsdChkLnRvSVNPU3RyaW5nKCkpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpLFxyXG4gICAgICAgICAgYXJpYUxhYmVsOiBtb21lbnQuZGVmYXVsdChkLnRvSVNPU3RyaW5nKCkpLmZvcm1hdCgnZGRkZCBNTU0gREQgWVlZWScpLFxyXG4gICAgICAgICAgdG9kYXk6IGQuZ2V0VGltZSgpID09PSB0aGlzLm5vd0RhdGUuZ2V0VGltZSgpLFxyXG4gICAgICAgICAgY3Vyck1vbnRoOiBkLmdldE1vbnRoKCkgPT09IGRhdGUuZ2V0TW9udGgoKSxcclxuICAgICAgICAgIGRpc2FibGVkOiB0cnVlLFxyXG4gICAgICAgICAgdW5BdmFpbGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgbGFiZWw6ICcnLFxyXG4gICAgICAgICAgY29sb3I6ICcnXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVNaW5NYXhSYW5nZShkKSkge1xyXG4gICAgICAgICAgY29uc3QgZGF0ZUtleSA9IG1vbWVudC5kZWZhdWx0KGQudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICBpZiAodGhpcy5kYXRlRGF0YVtkYXRlS2V5XSkge1xyXG4gICAgICAgICAgICBkYXlWaWV3LmRpc2FibGVkID0gdGhpcy5kYXRlRGF0YVtkYXRlS2V5XS5kaXNhYmxlZDtcclxuICAgICAgICAgICAgZGF5Vmlldy5sYWJlbCA9IHRoaXMuZGF0ZURhdGFbZGF0ZUtleV0ubGFiZWw7XHJcbiAgICAgICAgICAgIGRheVZpZXcuY29sb3IgPSB0aGlzLmRhdGVEYXRhW2RhdGVLZXldLmNvbG9yO1xyXG4gICAgICAgICAgICBkYXlWaWV3LnVuQXZhaWxhYmxlID0gdGhpcy5kYXRlRGF0YVtkYXRlS2V5XS51bkF2YWlsYWJsZTtcclxuICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRlRGF0YVsnYWxsJ10pIHtcclxuICAgICAgICAgICAgZGF5Vmlldy5kaXNhYmxlZCA9IHRoaXMuZGF0ZURhdGFbJ2FsbCddLmRpc2FibGVkO1xyXG4gICAgICAgICAgICBkYXlWaWV3LmxhYmVsID0gdGhpcy5kYXRlRGF0YVsnYWxsJ10ubGFiZWw7XHJcbiAgICAgICAgICAgIGRheVZpZXcuY29sb3IgPSB0aGlzLmRhdGVEYXRhWydhbGwnXS5jb2xvcjtcclxuICAgICAgICAgICAgZGF5Vmlldy51bkF2YWlsYWJsZSA9IHRoaXMuZGF0ZURhdGFbJ2FsbCddLnVuQXZhaWxhYmxlO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY0RheXNbaW5kZXhdLnB1c2goZGF5VmlldylcclxuICAgICAgICBjb3VudCsrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuY2FsZW5kYXJEYXlzID0gY0RheXM7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvLyBDaGVjayBpZiB0aGUgZW50ZXJlZCBkYXRlIHZhbHVlIGlzIHVuYXZhaWxhYmxlIGkuZSBEaXNhYmxlZC4gSWYgeWVzIHRoZW4gcmV0dXJuIHRydWUuXHJcbiAgY2hlY2tJZlVuYXZhaWxhYmxlRGF0ZShkYXRlVmFsdWUpIHtcclxuICAgIGxldCBzdHJEYXRlVmFsdWUgPSBkYXRlVmFsdWUgPyBtb21lbnQuZGVmYXVsdChuZXcgRGF0ZShkYXRlVmFsdWUpLnRvSVNPU3RyaW5nKCkpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpIDogXCJcIjtcclxuICAgIGZvciAoY29uc3QgZGF0ZUxpc3Qgb2YgdGhpcy5jYWxlbmRhckRheXMpIHtcclxuICAgICAgZm9yIChjb25zdCBpbm5lckRhdGUgb2YgZGF0ZUxpc3QpIHtcclxuICAgICAgICBsZXQgc3RySW5uZXJEYXRlID0gbW9tZW50LmRlZmF1bHQobmV3IERhdGUoaW5uZXJEYXRlLnZhbHVlKS50b0lTT1N0cmluZygpKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcclxuICAgICAgICBpZiAoKHN0cklubmVyRGF0ZSA9PT0gc3RyRGF0ZVZhbHVlKSAmJiAoIXRoaXMuaXNFZGl0YWJsZSB8fCBpbm5lckRhdGUuZGlzYWJsZWQpKSB7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBmYWxzZTtcclxuICB9XHJcblxyXG4gIGdldFN1bmRheShkKSB7XHJcbiAgICBkID0gbmV3IERhdGUoZCk7XHJcbiAgICB2YXIgZGF5ID0gZC5nZXREYXkoKSxcclxuICAgICAgZGlmZiA9IGQuZ2V0RGF0ZSgpIC0gZGF5O1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGQuc2V0RGF0ZShkaWZmKSk7XHJcbiAgfVxyXG5cclxuICBnZXRTYXR1cmRheShkKSB7XHJcbiAgICBkID0gbmV3IERhdGUoZCk7XHJcbiAgICB2YXIgZGF5ID0gZC5nZXREYXkoKSxcclxuICAgICAgZGlmZiA9IGQuZ2V0RGF0ZSgpICsgKDYgLSBkYXkpO1xyXG4gICAgcmV0dXJuIG5ldyBEYXRlKGQuc2V0RGF0ZShkaWZmKSk7XHJcbiAgfVxyXG5cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICB9XHJcblxyXG4gIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgIGlmICh0aGlzLnN3aXRjaFRpbWVvdXQpIHtcclxuICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5zd2l0Y2hUaW1lb3V0KTtcclxuICAgICAgICB0aGlzLnN3aXRjaFRpbWVvdXQgPSBudWxsO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBDbGVhciBzdWJzY3JpcHRpb25zXHJcbiAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnVuc3Vic2NyaWJlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgIC8vIENsZWFuIHVwIGpRdWVyeSByZWZlcmVuY2VzXHJcbiAgICB0aGlzLmpRdWVyeUNsZWFudXBFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGVsZW1lbnQub2ZmKCk7IC8vIFJlbW92ZSBhbGwgZXZlbnQgaGFuZGxlcnNcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIHRoaXMualF1ZXJ5Q2xlYW51cEVsZW1lbnRzID0gW107XHJcblxyXG4gICAgLy8gNC4gQ2xlYXIgbGFyZ2Ugb2JqZWN0IHJlZmVyZW5jZXNcclxuICAgICAgICB0aGlzLmNhbGVuZGFyRGF5cyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGF0ZURhdGEgPSB7fTtcclxuICAgICAgICB0aGlzLnR5cGVXaXNlTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMud2Vla0FycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy5tb250aEFycmF5ID0gW107XHJcbiAgICAgICAgdGhpcy55ZWFyQXJyYXkgPSBbXTtcclxuICAgICAgXHJcbiAgICAgICAgLy8gNS4gQ2xlYXIgbW9tZW50IGluc3RhbmNlcyAoaWYgdHJhY2tlZClcclxuICAgICAgICB0aGlzLm1vbWVudEluc3RhbmNlcy5mb3JFYWNoKGluc3RhbmNlID0+IHtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlICYmIHR5cGVvZiBpbnN0YW5jZS5kZXN0cm95ID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5kZXN0cm95KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLm1vbWVudEluc3RhbmNlcyA9IFtdO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDYuIENsZWFyIERPTSByZWZlcmVuY2VzXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyA3LiBDbGVhciBkYXRlIHJlZmVyZW5jZXNcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMubWluRGF0ZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5tYXhEYXRlID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRheVBpY2tlckluZGV4ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmRlZmF1bHRWYWx1ZSA9IG51bGw7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gOC4gUmVzZXQgZmxhZ3MgYW5kIHN0YXRlXHJcbiAgICAgICAgdGhpcy5kVmlld1RhYkZsYWcgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pc1VuYXZhaWxhYmxlRGF0ZSA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIDkuIENhbGwgcGFyZW50IGNsZWFudXBcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGlzRnV0dXJlRGF0ZSgpOiBib29sZWFuIHtcclxuICAgIHJldHVybiAodGhpcy5pbnB1dFZhbHVlICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZnV0dXJlX2RhdGVfZXJyb3InXSAmJiBuZXcgRGF0ZSh0aGlzLmlucHV0VmFsdWUpID4gbmV3IERhdGUoKSk7XHJcbiAgfVxyXG5cclxuICBnZXQgc2hhZG93VmFsdWUoKTogc3RyaW5nIHtcclxuICAgIHJldHVybiB0aGlzLmlucHV0VmFsdWUgPyBtb21lbnQuZGVmYXVsdChuZXcgRGF0ZSh0aGlzLmlucHV0VmFsdWUpLnRvSVNPU3RyaW5nKCkpLmZvcm1hdCh0aGlzLmRhdGVGb3JtYXQpIDogXCJcIjtcclxuICB9XHJcblxyXG4gIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zZXRNaW5hbmRNYXhWYWx1ZSgpO1xyXG4gICAgdGhpcy50YWJJbmRleFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUYWJJbmRleCddO1xyXG4gICAgaWYodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10pIHtcclxuICAgICAgdGhpcy5kZWZhdWx0VmFsdWUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2RlZmF1bHRfdmFsdWUnXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0RhdGUgRm9ybWF0J10pIHtcclxuICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEYXRlIEZvcm1hdCddO1xyXG4gICAgfVxyXG4gICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQVBJIERhdGUgRm9ybWF0J10pIHtcclxuICAgICAgdGhpcy5hcGlEYXRlRm9ybWF0ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBUEkgRGF0ZSBGb3JtYXQnXTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2FsbG93X21hbnVhbF9lbnRyeSddKSB7XHJcbiAgICAgIHRoaXMuYWxsb3dNYW51YWxFbnRyeSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnYWxsb3dfbWFudWFsX2VudHJ5J10gPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0xhbmd1YWdlRmllbGRJRCddKSB7XHJcbiAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXHJcbiAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5nZXRBcHBEYXRhQnlGaWVsZElkKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTGFuZ3VhZ2VGaWVsZElEJ10pLnBpcGUodGFrZSgxKSlcclxuICAgICAgICAuc3Vic2NyaWJlKFxyXG4gICAgICAgICAgdmFsID0+IHtcclxuICAgICAgICAgICAgdGhpcy5sb2NhbGUgPSB2YWwudmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFdlZWtMaXN0KCk7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZE1vbnRoTGlzdCgpO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRZZWFyTGlzdCgpO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIClcclxuICAgICAgKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICB0aGlzLmxvYWRXZWVrTGlzdCgpO1xyXG4gICAgICB0aGlzLmxvYWRNb250aExpc3QoKTtcclxuICAgICAgdGhpcy5sb2FkWWVhckxpc3QoKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5maWVsZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5maWVsZFZhbHVlKSkge1xyXG4gICAgICBpZiAodGhpcy5maWVsZFZhbHVlID09PSAnQ1VSUl9EQVRFJykge1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZChuZXcgRGF0ZSgpKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIHtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUgPyB0aGlzLmNvbW1vblV0aWwuYWRqdXN0VFoobmV3IERhdGUodGhpcy5maWVsZFZhbHVlKSkgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMub25TZXNzaW9uRGF0YVVwZGF0ZWQodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnByZXZpb3VzRGF0ZUlucHV0VmFsdWUgPSB0aGlzLnNoYWRvd1ZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmRlZmF1bHRWYWx1ZSAmJiAodGhpcy5kZWZhdWx0VmFsdWUuaW5jbHVkZXMoJ2QnKSB8fCB0aGlzLmRlZmF1bHRWYWx1ZS5pbmNsdWRlcygnbScpIHx8IHRoaXMuZGVmYXVsdFZhbHVlLmluY2x1ZGVzKCd5JykpKSB7XHJcbiAgICAgIGxldCBjYWxjdWxhdGVkX2RhdGUgPSB0aGlzLnJldHVybkRhdGUodGhpcy5kZWZhdWx0VmFsdWUpO1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSBjYWxjdWxhdGVkX2RhdGU7XHJcbiAgICAgIHRoaXMub25TZXNzaW9uRGF0YVVwZGF0ZWQoY2FsY3VsYXRlZF9kYXRlKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgaWYgKHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcFZhbCBvZiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICBjb25zdCBwdkFyciA9IHBWYWwuc3BsaXQoJ3x8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgIGlmIChwdkFyci5sZW5ndGggPT09IDUpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGVWYWwgPSBwdkFyclswXS5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgIGNvbnN0IHR5cGVWYWwgPSBwdkFyclsxXS5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgIGNvbnN0IGNvbG9yID0gcHZBcnJbMl0uc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IHB2QXJyWzNdLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgaWYgKGRhdGVWYWwubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRlVmFsWzBdKSB7XHJcbiAgICAgICAgICAgICAgLy8gZHluYW1pYyBkYXRlc1xyXG4gICAgICAgICAgICAgIHRoaXMudHlwZVdpc2VMaXN0LnB1c2goe1xyXG4gICAgICAgICAgICAgICAgZGF0ZTogZGF0ZVZhbFswXSxcclxuICAgICAgICAgICAgICAgIHR5cGVLZXk6IHR5cGVWYWxbMF0sXHJcbiAgICAgICAgICAgICAgICB0eXBlTmFtZTogdHlwZVZhbFsxXSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBjb2xvclswXSB8fCBjb2xvclsxXSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBsYWJlbFswXSB8fCBsYWJlbFsxXSxcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAocHZBcnJbNF0gPT09ICdDbGlja2FibGUnID8gZmFsc2UgOiB0cnVlKVxyXG4gICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIC8vIHN0YXRpYyBkYXRlc1xyXG4gICAgICAgICAgICAgIHRoaXMuZGF0ZURhdGFbZGF0ZVZhbFsxXSA/IGRhdGVWYWxbMV0gOiAnYWxsJ10gPSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogY29sb3JbMV0sXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWxbMV0sXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZDogKHB2QXJyWzRdID09PSAnQ2xpY2thYmxlJyA/IGZhbHNlIDogdHJ1ZSlcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgIHRoaXMudXBkYXRlTW9udGhJbmRleCh0aGlzLm1vbnRoRGlmZih0aGlzLmRheVBpY2tlckluZGV4LCBkYXRlVmFsWzFdID8gbmV3IERhdGUoZGF0ZVZhbFsxXSkgOiBuZXcgRGF0ZSgpKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5nZW5lcmF0ZURheVBpY2tlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMucHJvY2Vzc0FwaVJlcyh0aGlzLmFwaVZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHREYXRlRnJvbUFQSSgpIHtcclxuICAgIC8vIGNvbnNvbGUubG9nKFwidW5pcXVlX2lkOiBcIix0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcImdldEFsbEFwcERhdGE6IFwiLHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0QWxsQXBwU3RvcmVEYXRhKCkpXHJcbiAgICAvLyBjb25zb2xlLmxvZyhcInByZXZpb3VzRGF0ZUlucHV0VmFsdWU6IFwiLCB0aGlzLnByZXZpb3VzRGF0ZUlucHV0VmFsdWUpXHJcbiAgICBsZXQgYXBwRGF0YXMgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgLy8gY29uc29sZS5sb2coXCJhcHBEYXRhczogXCIsYXBwRGF0YXMpXHJcbiAgICBpZiAoIXRoaXMucHJldmlvdXNEYXRlSW5wdXRWYWx1ZSAmJiB0aGlzLmRlZmF1bHRWYWx1ZSAmJiAodGhpcy5kZWZhdWx0VmFsdWUuaW5jbHVkZXMoJyMjJykpKSB7XHJcbiAgICAgIGxldCBhcGlEYXRhcyA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcih0aGlzLmRlZmF1bHRWYWx1ZS5zcGxpdCgnIyMnKVswXSk7XHJcbiAgICAgIGlmKGFwaURhdGFzICYmIGFwaURhdGFzLnZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGNhbGN1bGF0ZWRfZGF0ZSA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWihuZXcgRGF0ZShhcGlEYXRhcy52YWx1ZVt0aGlzLmRlZmF1bHRWYWx1ZV0pKTtcclxuICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBjYWxjdWxhdGVkX2RhdGU7XHJcbiAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZChjYWxjdWxhdGVkX2RhdGUpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYoIWFwcERhdGFzICYmIHRoaXMucHJldmlvdXNEYXRlSW5wdXRWYWx1ZSkge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLnByZXZpb3VzRGF0ZUlucHV0VmFsdWU7XHJcbiAgICAgIHRoaXMub25TZXNzaW9uRGF0YVVwZGF0ZWQodGhpcy5wcmV2aW91c0RhdGVJbnB1dFZhbHVlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGxvYWRXZWVrTGlzdCgpIHtcclxuICAgIGNvbnN0IGxvY2FsZURhdGEgPSBtb21lbnQubG9jYWxlRGF0YSh0aGlzLmxvY2FsZSk7XHJcbiAgICBjb25zdCBzaG9ydFdlZWsgPSBBcnJheS5mcm9tKGxvY2FsZURhdGEud2Vla2RheXNTaG9ydCgpKTtcclxuICAgIHRoaXMud2Vla0FycmF5ID0gbG9jYWxlRGF0YS53ZWVrZGF5cygpLm1hcCgoaSwgaW5kZXgpID0+IHtcclxuICAgICAgcmV0dXJuIHsgZnVsbDogaSwgc2hvcnQ6IHNob3J0V2Vla1tpbmRleF0sIHZhbHVlOiBpbmRleCB9O1xyXG4gICAgfSk7XHJcbiAgICAvLyB0aGlzLndlZWtBcnJheSA9IEFycmF5LmFwcGx5KG51bGwsIEFycmF5KDcpKS5tYXAoZnVuY3Rpb24gKF8sIGkpIHtcclxuICAgIC8vICAgY29uc3Qgd2VlayA9IG1vbWVudC5kZWZhdWx0KGksICdlJykuc3RhcnRPZignd2VlaycpLmlzb1dlZWtkYXkoaSArIDEpLmxvY2FsZSh0aGlzLmxvY2FsZSlcclxuICAgIC8vICAgcmV0dXJuIHsgZnVsbDogd2Vlay5mb3JtYXQoJ2RkZGQnKSwgc2hvcnQ6IHdlZWsuZm9ybWF0KCdkZGQnKSB9O1xyXG4gICAgLy8gfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlKHZhbHVlOiBhbnksIGlucHV0Qm94ZXNTdGF0ZSkge1xyXG4gICAgaW5wdXRCb3hlc1N0YXRlLnRvdWNoZWQgIT09IHZhbHVlLnRvdWNoZWQgJiYgKGlucHV0Qm94ZXNTdGF0ZS50b3VjaGVkID0gdmFsdWUudG91Y2hlZCk7XHJcbiAgICBpbnB1dEJveGVzU3RhdGUuZGlydHkgIT09IHZhbHVlLmRpcnR5ICYmIChpbnB1dEJveGVzU3RhdGUuZGlydHkgPSB2YWx1ZS5kaXJ0eSk7XHJcbiAgfVxyXG5cclxuICBjb25jYXREYXRhKCkgeyB9XHJcblxyXG4gIG9uRGF0ZVNlbGVjdGVkKGQpIHtcclxuICAgIHRoaXMudXBkYXRlTW9udGhJbmRleCh0aGlzLm1vbnRoRGlmZih0aGlzLmRheVBpY2tlckluZGV4LCBkLmRhdGUpKTtcclxuICAgIHRoaXMucHJldmlvdXNEYXRlSW5wdXRWYWx1ZSA9IHRoaXMuc2hhZG93VmFsdWU7XHJcbiAgICB0aGlzLmlucHV0VmFsdWUgPSBtb21lbnQuZGVmYXVsdChkLnZhbHVlLCB0aGlzLmRhdGVGb3JtYXQpLnRvRGF0ZSgpO1xyXG4gICAgdGhpcy5pc1VuYXZhaWxhYmxlRGF0ZSA9IGZhbHNlO1xyXG4gICAgdGhpcy5zZXRTdGF0ZSh7IHRvdWNoZWQ6IHRydWUsIGRpcnR5OiB0cnVlIH0sIHRoaXMuZGF0ZVBpY2tlclN0YXRlKTtcclxuICAgIHRoaXMub25TZXNzaW9uRGF0YVVwZGF0ZWQoZC5kYXRlKTtcclxuICB9XHJcblxyXG4gIGlzVmFsaWREYXRlKGQpIHtcclxuICAgIHJldHVybiBkIGluc3RhbmNlb2YgRGF0ZSAmJiAhaXNOYU4oZC5nZXREYXRlKCkpO1xyXG4gIH1cclxuXHJcbiAgZGF0ZU9ubHkoZXZlbnQpIHtcclxuICAgIGNvbnN0IGNoYXJDb2RlID0gKGV2ZW50LndoaWNoKSA/IGV2ZW50LndoaWNoIDogZXZlbnQua2V5Q29kZTtcclxuICAgIGlmIChjaGFyQ29kZSA+IDMxICYmIChjaGFyQ29kZSA8IDQ3IHx8IGNoYXJDb2RlID4gNTcpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH1cclxuXHJcbiAgb25EYXRlSW5wdXQodmFsOiBzdHJpbmcpIHtcclxuICAgIGlmICh0aGlzLnByZXZpb3VzRGF0ZUlucHV0VmFsdWUgPT09IHZhbCkge1xyXG4gICAgICByZXR1cm47IC8vIFdoZW4gaW5wdXQgdmFsdWUgaXMgdW5jaGFuZ2VkIHdoaWxlIGtleXVwLlxyXG4gICAgfVxyXG4gICAgdGhpcy5wcmV2aW91c0RhdGVJbnB1dFZhbHVlID0gdmFsO1xyXG4gICAgaWYgKHZhbCAmJiAodmFsLmxlbmd0aCA9PT0gdGhpcy5kYXRlRm9ybWF0Lmxlbmd0aCkgJiYgdGhpcy5jb21tb25VdGlsLmlzVmFsaWREYXRlU3RyKHZhbCwgdGhpcy5kYXRlRm9ybWF0KSkge1xyXG4gICAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IG5ldyBEYXRlKHZhbCk7XHJcbiAgICAgIHRoaXMudXBkYXRlTW9udGhJbmRleCh0aGlzLm1vbnRoRGlmZih0aGlzLmRheVBpY2tlckluZGV4LCB0aGlzLmlucHV0VmFsdWUpKTtcclxuICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy52YWxpZGF0ZU1pbk1heFJhbmdlKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgIHRoaXMuaXNVbmF2YWlsYWJsZURhdGUgPSB0aGlzLmNoZWNrSWZVbmF2YWlsYWJsZURhdGUodmFsKTtcclxuICAgICAgaWYgKCF0aGlzLmlzVW5hdmFpbGFibGVEYXRlICYmIHRoaXMuaXNWYWxpZCkge1xyXG4gICAgICAgIHRoaXMub25TZXNzaW9uRGF0YVVwZGF0ZWQodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIGlmICh2YWwpIHtcclxuICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmludmFsaWREYXRlID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaXNVbmF2YWlsYWJsZURhdGUgPSBmYWxzZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uQmx1ckRQKHZhbDogc3RyaW5nKSB7XHJcbiAgICBpZiAodmFsICYmIHRoaXMuY29tbW9uVXRpbC5pc1ZhbGlkRGF0ZVN0cih2YWwsIHRoaXMuZGF0ZUZvcm1hdCkpIHtcclxuICAgICAgdGhpcy5pbnZhbGlkRGF0ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TZXNzaW9uRGF0YVVwZGF0ZWQoZGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5pc1ZhbGlkRGF0ZShuZXcgRGF0ZShkYXRlKSkpIHtcclxuICAgICAgbGV0IHREYXRldCA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWihuZXcgRGF0ZShkYXRlKSk7XHJcbiAgICAgIGNvbnN0IHREYXRlID0gbW9tZW50LmRlZmF1bHQodERhdGV0LnRvSVNPU3RyaW5nKCkpO1xyXG4gICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLnZhbGlkYXRlTWluTWF4UmFuZ2UodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoIXREYXRlLmlzVmFsaWQoKSA/ICcnIDogdERhdGUuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCksIHRoaXMuaXNWYWxpZCk7XHJcbiAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25EYXRlU2VsZWN0Jyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoJycsIGZhbHNlKTtcclxuICAgIH1cclxuICAgIHRoaXMub25EaXJ0eSgpO1xyXG4gIH1cclxuXHJcbiAgdmFsaWRhdGVNaW5NYXhSYW5nZShkKTogYm9vbGVhbiB7XHJcbiAgICBpZiAodGhpcy5tYXhEYXRlICYmIChuZXcgRGF0ZShtb21lbnQuZGVmYXVsdCh0aGlzLm1heERhdGUpLmZvcm1hdCgnTU0vREQvWVlZWScpKSkuZ2V0VGltZSgpIDwgbmV3IERhdGUoZCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLm1pbkRhdGUgJiYgKG5ldyBEYXRlKG1vbWVudC5kZWZhdWx0KHRoaXMubWluRGF0ZSkuZm9ybWF0KCdNTS9ERC9ZWVlZJykpKS5nZXRUaW1lKCkgPiBuZXcgRGF0ZShkKS5nZXRUaW1lKCkpIHtcclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfVxyXG5cclxuICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgIGNvbnN0IGFwaVZhbHVlID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICB0aGlzLnNldE1pbmFuZE1heFZhbHVlKCk7XHJcbiAgICB0aGlzLnByb2Nlc3NBcGlSZXMoYXBpVmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcHJvY2Vzc0FwaVJlcyhhcGlWYWx1ZSkge1xyXG4gICAgaWYgKGFwaVZhbHVlICYmIEFycmF5LmlzQXJyYXkoYXBpVmFsdWUpKSB7XHJcbiAgICAgIHRoaXMuc2V0RGVmYXVsdERhdGVGcm9tQVBJKCk7XHJcbiAgICAgIGZvciAoY29uc3QgYXBpRGF0ZSBvZiBhcGlWYWx1ZSkge1xyXG4gICAgICAgIGZvciAoY29uc3QgdHlwZURhdGEgb2YgdGhpcy50eXBlV2lzZUxpc3QpIHtcclxuXHJcbiAgICAgICAgICBjb25zdCBkYXRlID0gYXBpRGF0ZVt0eXBlRGF0YS5kYXRlXSA/IGFwaURhdGVbdHlwZURhdGEuZGF0ZV0gOiB0eXBlRGF0YS5kYXRlO1xyXG4gICAgICAgICAgY29uc3QgY29sb3IgPSBhcGlEYXRlW3R5cGVEYXRhLmNvbG9yXSA/IGFwaURhdGVbdHlwZURhdGEuY29sb3JdIDogdHlwZURhdGEuY29sb3I7XHJcbiAgICAgICAgICBjb25zdCBsYWJlbCA9IGFwaURhdGVbdHlwZURhdGEubGFiZWxdID8gYXBpRGF0ZVt0eXBlRGF0YS5sYWJlbF0gOiB0eXBlRGF0YS5sYWJlbDtcclxuICAgICAgICAgIGNvbnN0IGRpc2FibGVkID0gdHlwZURhdGEuZGlzYWJsZWQ7XHJcbiAgICAgICAgICBjb25zdCB1bkF2YWlsYWJsZSA9IChhcGlEYXRlW3R5cGVEYXRhLnR5cGVLZXldICYmIGFwaURhdGVbdHlwZURhdGEudHlwZUtleV0uaW5kZXhPZignbm90IGF2YWlsYWJsZScpID4gLTEpID8gdHJ1ZSA6IGZhbHNlOyAvLyB0eXBlRGF0YS50eXBlS2V5ID0gJ3N0YXR1cydcclxuXHJcbiAgICAgICAgICBpZiAoKCFhcGlEYXRlW3R5cGVEYXRhLnR5cGVLZXldICYmIGFwaURhdGVbdHlwZURhdGEuZGF0ZV1cclxuICAgICAgICAgICkgfHwgKFxyXG4gICAgICAgICAgICAgIGFwaURhdGVbdHlwZURhdGEudHlwZUtleV0gJiYgYXBpRGF0ZVt0eXBlRGF0YS50eXBlS2V5XSA9PT0gdHlwZURhdGEudHlwZU5hbWUpXHJcbiAgICAgICAgICApIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRlRGF0YVtkYXRlXSA9IHtcclxuICAgICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgICBsYWJlbCxcclxuICAgICAgICAgICAgICBkaXNhYmxlZCxcclxuICAgICAgICAgICAgICB1bkF2YWlsYWJsZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZU1vbnRoSW5kZXgodGhpcy5tb250aERpZmYodGhpcy5kYXlQaWNrZXJJbmRleCwgdGhpcy5pbnB1dFZhbHVlID8gbmV3IERhdGUodGhpcy5pbnB1dFZhbHVlKSA6IG5ldyBEYXRlKGRhdGUpKSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICB0aGlzLmdlbmVyYXRlRGF5UGlja2VyKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb250aERpZmYoZDEsIGQyKSB7XHJcbiAgICB2YXIgbW9udGhzO1xyXG4gICAgbW9udGhzID0gKGQyLmdldEZ1bGxZZWFyKCkgLSBkMS5nZXRGdWxsWWVhcigpKSAqIDEyO1xyXG4gICAgbW9udGhzIC09IGQxLmdldE1vbnRoKCk7XHJcbiAgICBtb250aHMgKz0gZDIuZ2V0TW9udGgoKTtcclxuICAgIHJldHVybiBtb250aHM7XHJcbiAgfVxyXG5cclxuICBvblNldFNlc3Npb25EYXRhKGFwaUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICBzdXBlci5vblNldFNlc3Npb25EYXRhKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgbGV0IGFkZGl0aW9uYWxNaW5WYWx1ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTWluVmFsdWUnXTtcclxuICAgIGxldCBhZGRpdGlvbmFsTWF4VmFsdWUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ01heFZhbHVlJ107XHJcbiAgICBpZiAoYXBpS2V5LnNwbGl0KCckJykubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgIGlmIChhZGRpdGlvbmFsTWluVmFsdWUpIHtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbE1pblZhbHVlICE9PSAnQ1VSUl9EQVRFJyAmJiAhYWRkaXRpb25hbE1pblZhbHVlLmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgIGFkZGl0aW9uYWxNaW5WYWx1ZSA9IGFwaUtleS5zcGxpdCgnJCcpWzBdICsgJyQnICsgYWRkaXRpb25hbE1pblZhbHVlICsgJyQnICsgYXBpS2V5LnNwbGl0KCckJylbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmIChhZGRpdGlvbmFsTWF4VmFsdWUpIHtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbE1heFZhbHVlICE9PSAnQ1VSUl9EQVRFJyAmJiAhYWRkaXRpb25hbE1heFZhbHVlLmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgIGFkZGl0aW9uYWxNYXhWYWx1ZSA9IGFwaUtleS5zcGxpdCgnJCcpWzBdICsgJyQnICsgYWRkaXRpb25hbE1heFZhbHVlICsgJyQnICsgYXBpS2V5LnNwbGl0KCckJylbMl07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAoYWRkaXRpb25hbE1pblZhbHVlKSB7XHJcbiAgICAgIGlmIChhZGRpdGlvbmFsTWluVmFsdWUgPT09IGFwaUtleSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5taW5EYXRlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKGRhdGUpKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5nZXREYXRlT25UeXBlKGFkZGl0aW9uYWxNaW5WYWx1ZSwgJ21pbicpO1xyXG4gICAgICAgIHRoaXMubWluRGF0ZSA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWihuZXcgRGF0ZShkYXRlKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIGlmIChhZGRpdGlvbmFsTWF4VmFsdWUpIHtcclxuICAgICAgaWYgKGFkZGl0aW9uYWxNYXhWYWx1ZSA9PT0gYXBpS2V5KSB7XHJcbiAgICAgICAgdGhpcy5tYXhEYXRlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKHZhbHVlKSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tYXhEYXRlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKHRoaXMuZ2V0RGF0ZU9uVHlwZShhZGRpdGlvbmFsTWF4VmFsdWUsICdtYXgnKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZSh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIHZhbHVlKTtcclxuICB9XHJcblxyXG4gIHNldE1pbmFuZE1heFZhbHVlKCkge1xyXG4gICAgY29uc3QgYWRkaXRpb25hbE1pblZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNaW5WYWx1ZSddO1xyXG4gICAgY29uc3QgYWRkaXRpb25hbE1heFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYXhWYWx1ZSddO1xyXG4gICAgY29uc3QgYWRkaXRpb25hbFJhbmdlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydyYW5nZSddO1xyXG5cclxuICAgIGlmIChhZGRpdGlvbmFsTWluVmFsdWUpIHtcclxuICAgICAgdGhpcy5taW5EYXRlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKHRoaXMuZ2V0RGF0ZU9uVHlwZShhZGRpdGlvbmFsTWluVmFsdWUsICdtaW4nKSk7XHJcbiAgICB9XHJcbiAgICBpZiAoYWRkaXRpb25hbE1heFZhbHVlKSB7XHJcbiAgICAgIHRoaXMubWF4RGF0ZSA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWih0aGlzLmdldERhdGVPblR5cGUoYWRkaXRpb25hbE1heFZhbHVlLCAnbWF4JykpO1xyXG4gICAgfVxyXG4gICAgaWYgKGFkZGl0aW9uYWxSYW5nZSkge1xyXG4gICAgICBsZXQgcmFuZ2U7XHJcbiAgICAgIGlmICgvXlswLTldKyQvLnRlc3QoYWRkaXRpb25hbFJhbmdlKSkge1xyXG4gICAgICAgIHJhbmdlID0gYWRkaXRpb25hbFJhbmdlICsgJ2QnXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGFkZGl0aW9uYWxSYW5nZSkpO1xyXG4gICAgICAgIGNvbnN0IHJhbmdlQXBpVmFsID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShhZGRpdGlvbmFsUmFuZ2UsIGhhbmRsZXJEYXRhID8gaGFuZGxlckRhdGEudmFsdWUgOiB7fSk7XHJcbiAgICAgICAgaWYgKC9eWzAtOV0rJC8udGVzdChyYW5nZUFwaVZhbCkpIHtcclxuICAgICAgICAgIHJhbmdlID0gcmFuZ2VBcGlWYWwgKyAnZCdcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChyYW5nZSkge1xyXG4gICAgICAgIHRoaXMubWluRGF0ZSA9IHRoaXMuZ2V0RGF0ZU9uVHlwZSgnQ1VSUl9EQVRFJywgJ21pbicpO1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmdldERhdGVPblR5cGUocmFuZ2UsICdtYXgnKTtcclxuICAgICAgICBkYXRlLnNldERhdGUoZGF0ZS5nZXREYXRlKCkgLSAxKTtcclxuICAgICAgICB0aGlzLm1heERhdGUgPSBkYXRlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXREYXRlT25UeXBlKHBhcmFtZXRlclZhbHVlLCB0eXBlKSB7XHJcbiAgICBjb25zdCBkYXRhID0gdGhpcy5yZXR1cm5EYXRlQXJyYXlXaXRoVHlwZShwYXJhbWV0ZXJWYWx1ZSwgdHlwZSk7XHJcbiAgICBpZiAoZGF0YS50eXBlLnRvTG93ZXJDYXNlKCkgPT09ICdtaW4nKSB7XHJcbiAgICAgIHJldHVybiBuZXcgRGF0ZShNYXRoLm1pbi5hcHBseShudWxsLCBkYXRhLmRhdGVzKSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoTWF0aC5tYXguYXBwbHkobnVsbCwgZGF0YS5kYXRlcykpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuRGF0ZUFycmF5V2l0aFR5cGUocGFyYW1ldGVyVmFsdWUsIHR5cGUpIHtcclxuICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgZGF0ZXM6IFtwYXJhbWV0ZXJWYWx1ZV0sXHJcbiAgICAgIHR5cGVcclxuICAgIH07XHJcbiAgICBpZiAocGFyYW1ldGVyVmFsdWUuaW5jbHVkZXMoJ3wnKSkge1xyXG4gICAgICBvYmouZGF0ZXMgPSBbXTtcclxuICAgICAgZm9yIChjb25zdCBzdHIgb2YgKHBhcmFtZXRlclZhbHVlLmluY2x1ZGVzKCd8fCcpID8gcGFyYW1ldGVyVmFsdWUuc3BsaXQoJ3x8JylbMF0gOiBwYXJhbWV0ZXJWYWx1ZSkuc3BsaXQoJ3wnKSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLnJldHVybkRhdGUoc3RyKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhzdHIsIGRhdGUpO1xyXG4gICAgICAgIGlmIChkYXRlKSB7XHJcbiAgICAgICAgICBvYmouZGF0ZXMucHVzaChkYXRlKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHBhcmFtZXRlclZhbHVlLmluY2x1ZGVzKCd8fCcpKSB7XHJcbiAgICAgICAgb2JqLnR5cGUgPSBwYXJhbWV0ZXJWYWx1ZS5zcGxpdCgnfHwnKVsxXTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgb2JqLmRhdGVzID0gW3RoaXMucmV0dXJuRGF0ZShwYXJhbWV0ZXJWYWx1ZSldO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9iajtcclxuICB9XHJcblxyXG4gIHJldHVybkRhdGUoZmllbGQpIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gJyhbKy1dKikoWzAtOV0rKShbeWRtd10pJztcclxuICAgIGNvbnN0IG1hdGNoZWQgPSBmaWVsZC5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICBpZiAobWF0Y2hlZCkge1xyXG4gICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGlmIChtYXRjaGVkWzNdLmluY2x1ZGVzKCd5JykpIHtcclxuICAgICAgICBkYXRlID0gdGhpcy5jYWxjdWxhdGVEYXRlKCd5JywgZGF0ZSwgTnVtYmVyKG1hdGNoZWRbMl0pLCBtYXRjaGVkWzFdICE9PSAnLScgPyAnYWRkJyA6ICdzdWJ0cmFjdCcpO1xyXG4gICAgICB9IGVsc2UgaWYgKG1hdGNoZWRbM10uaW5jbHVkZXMoJ2QnKSkge1xyXG4gICAgICAgIGRhdGUgPSB0aGlzLmNhbGN1bGF0ZURhdGUoJ2QnLCBkYXRlLCBOdW1iZXIobWF0Y2hlZFsyXSksIG1hdGNoZWRbMV0gIT09ICctJyA/ICdhZGQnIDogJ3N1YnRyYWN0Jyk7XHJcbiAgICAgIH0gZWxzZSBpZiAobWF0Y2hlZFszXS5pbmNsdWRlcygnbScpKSB7XHJcbiAgICAgICAgZGF0ZSA9IHRoaXMuY2FsY3VsYXRlRGF0ZSgnbScsIGRhdGUsIE51bWJlcihtYXRjaGVkWzJdKSwgbWF0Y2hlZFsxXSAhPT0gJy0nID8gJ2FkZCcgOiAnc3VidHJhY3QnKTtcclxuICAgICAgfSBlbHNlIGlmIChtYXRjaGVkWzNdLmluY2x1ZGVzKCd3JykpIHtcclxuICAgICAgICBkYXRlID0gdGhpcy5jYWxjdWxhdGVEYXRlKCd3JywgZGF0ZSwgTnVtYmVyKG1hdGNoZWRbMl0pLCBtYXRjaGVkWzFdICE9PSAnLScgPyAnYWRkJyA6ICdzdWJ0cmFjdCcpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyBpcyB3cm9uZyB3aXRoIG1pbiBvciBtYXggdmFsdWUnKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZGF0ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmIChmaWVsZCA9PT0gJ0NVUlJfREFURScpIHtcclxuICAgICAgICByZXR1cm4gbmV3IERhdGUoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkuc3BsaXQoJyQnKS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgIGlmICghZmllbGQuaW5jbHVkZXMoJyQnKSkge1xyXG4gICAgICAgICAgICBmaWVsZCA9XHJcbiAgICAgICAgICAgICAgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkuc3BsaXQoJyQnKVswXSArICckJyArIGZpZWxkICsgJyQnICsgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkuc3BsaXQoJyQnKVsyXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChmaWVsZCk7XHJcbiAgICAgICAgaWYgKHZhbHVlKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUobW9tZW50LmRlZmF1bHQodmFsdWUpLmZvcm1hdCgpKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8qKlxyXG4gICAqIHRoaXMgZnVuY3Rpb24gY2FsY3VsYXRlcyBkYXRlIGlmIG1heCB2YWx1ZSBvciBtaW4gdmFsdWUgc2V0IGFzIDF3IG9yIDFkIG9yIDF5IG9yIDFtIG9yIDF3IDFkIDF5IDFtXHJcbiAgICogQHBhcmFtIHR5cGUgdGhlIHR5cGUgb2YgdGhlIG1pbiBvciBtYXggdmFsdWVcclxuICAgKiBAcGFyYW0gY3VycmVudERhdGUgdGhlIGN1cnJlbnQgZnJvbSB3aGljaCBpdCBuZWVkcyB0byBiZSBkZWR1Y3RlZCBvciBhZGRlZFxyXG4gICAqIEBwYXJhbSBubyB0aGUgbnVtYmVyIG9mIGRhdGUgbW9udGggd2VlayBvciB5ZWFyXHJcbiAgICogQHBhcmFtIG9wZXJhdG9yIHN1YnRyYWN0IG9yIGFkZCB0byB0aGUgY3VycmVudCBkYXRlXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBjYWxjdWxhdGVEYXRlKHR5cGU6IHN0cmluZywgY3VycmVudERhdGU6IERhdGUsIG5vOiBudW1iZXIsIG9wZXJhdG9yOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IGRhdGUgPSBjdXJyZW50RGF0ZTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICBjYXNlICd5JzpcclxuICAgICAgICBpZiAob3BlcmF0b3IgPT09ICdhZGQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRGdWxsWWVhcihjdXJyZW50RGF0ZS5nZXRGdWxsWWVhcigpICsgbm8pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RnVsbFllYXIoY3VycmVudERhdGUuZ2V0RnVsbFllYXIoKSAtIG5vKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICdtJzpcclxuICAgICAgICBpZiAob3BlcmF0b3IgPT09ICdhZGQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXRNb250aChjdXJyZW50RGF0ZS5nZXRNb250aCgpICsgbm8pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0TW9udGgoY3VycmVudERhdGUuZ2V0TW9udGgoKSAtIG5vKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBjYXNlICd3JzpcclxuICAgICAgICBpZiAob3BlcmF0b3IgPT09ICdhZGQnKSB7XHJcbiAgICAgICAgICByZXR1cm4gbmV3IERhdGUoZGF0ZS5zZXREYXRlKGN1cnJlbnREYXRlLmdldERhdGUoKSArIChubyAqIDcpKSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpIC0gKG5vICogNykpKTtcclxuICAgICAgICB9XHJcbiAgICAgIGNhc2UgJ2QnOlxyXG4gICAgICAgIGlmIChvcGVyYXRvciA9PT0gJ2FkZCcpIHtcclxuICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLnNldERhdGUoY3VycmVudERhdGUuZ2V0RGF0ZSgpICsgbm8pKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKGRhdGUuc2V0RGF0ZShjdXJyZW50RGF0ZS5nZXREYXRlKCkgLSBubykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9uRW1wdHlTZXNzaW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgIGxldCBkYXRhID0gW107XHJcbiAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICBpZiAoZ2V0X2RhdGEudW5pcXVlX2lkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGRhdGEgPSBnZXRfZGF0YS51bmlxdWVfaWRzO1xyXG4gICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5hcHBEYXRhLmlkXTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmZpZWxkRGF0YS5hcGlfa2V5XTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbXHJcbiAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlcXVlc3RfYXBpX2tleSldO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgaWYgKHVuaXF1ZV9pZF92YWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpIHtcclxuICAgICAgICAgICAgICBsZXQgZGF0ZTtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10gPT09ICdDVVJSX0RBVEUnKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRlID0gbmV3IERhdGUodGhpcy5jdXJyRGF0ZSk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZGF0ZSA9IHRoaXMuY29tbW9uVXRpbC5hZGp1c3RUWihuZXcgRGF0ZShwYXJhbXRlci52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBtb21lbnQuZGVmYXVsdChuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpKS5mb3JtYXQodGhpcy5kYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShtb21lbnQuZGVmYXVsdChuZXcgRGF0ZShkYXRlKS50b0lTT1N0cmluZygpKS5mb3JtYXQodGhpcy5hcGlEYXRlRm9ybWF0KSlcclxuICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSgnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSgnJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHJlc2V0dGluZyB0aGUgZm9ybSBmaWVsZCBkb2VzIG5vdCB3b3JrIGJlY2F1c2VcclxuICAgICAgICAvLyBvbmNlIGl0IGdldHMgcmVzZXQgaWYgaXQgaXMgbm90IHRvdWNoZWQgYWdhaW4gdGhlbiB0aGUgZmllbGQgd29uJ3QgZ2V0IGludmFsaWRcclxuICAgICAgICAvLyBhZnRlciB0aGUgZm9ybSBnZXRzIHN1Ym1pdHRlZCBhbmQgZXJyb3JzIHdvbid0IHNob3cgdXBcclxuICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgZmllbGQgYXMgdW5Ub3VjaGVkLCBQcmlzdGluZSAsIHVwZGF0ZSB2YWx1ZSBhbiB2YWxpZGl0eSBhbmQgc2hvd0Vycm9yT25OZXh0IHRvIHRydWVcclxuICAgICAgICAvLyB0aGlzLmRhdGVQaWNrZXIuY29udHJvbC5yZXNldCgpO1xyXG4gICAgICAgIHRoaXMuc2hvd0Vycm9yT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0ZVBpY2tlcikge1xyXG4gICAgICAgICAgdGhpcy5kYXRlUGlja2VyLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgICAgICAgICB0aGlzLmRhdGVQaWNrZXIuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICAgICAgdGhpcy5kYXRlUGlja2VyLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm47XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2dldF9kYXRhJywgdHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jyk7XHJcbiAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9ICcnO1xyXG4gICAgaWYgKHR5cGVvZiBnZXRfZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgT2JqZWN0LmtleXMoZ2V0X2RhdGEpLmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICBkYXRhLnB1c2goa2V5KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgIH1cclxuICAgIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZV9pZF92YWx1ZSkpIHtcclxuICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKGdldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV0pKTtcclxuICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEobW9tZW50LmRlZmF1bHQodGhpcy5pbnB1dFZhbHVlKS5mb3JtYXQoJ01NL0REL1lZWVknKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhckRhdGUoZXZlbnQpIHtcclxuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgdGhpcy5pbnB1dFZhbHVlID0gbnVsbDtcclxuICAgIHRoaXMudXBkYXRlRmllbGREYXRhKCcnKTtcclxuICAgIHRoaXMuc2V0TWluYW5kTWF4VmFsdWUoKTtcclxuICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25EYXRlU2VsZWN0Jyk7XHJcbiAgfVxyXG5cclxuICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgIGlmIChkYXRhKSB7XHJcbiAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmFkanVzdFRaKG5ldyBEYXRlKGRhdGFbJ3ZhbHVlcyddLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgZGF0YVsndmFsdWVzJ11bZGF0YVsndW5pcXVlSWRzJ10uaW5kZXhPZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpXSA6XHJcbiAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVswXSkpO1xyXG4gICAgICAgIC8vIG9mIHRyaWdnZXJVcGRhdGUgaXMgdHJ1ZSB0aGVuIHVwZGF0ZSB0aGUgZmllbGQgdmFsdWUgb3IgdXBkYXRlIHZhbHVlIGFuZCBlbWl0IGNvbmRpdGlvbnMgZXZlbnRcclxuICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10obW9tZW50LmRlZmF1bHQodGhpcy5pbnB1dFZhbHVlKS5mb3JtYXQoJ01NL0REL1lZWVknKSk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gIH1cclxuXHJcbiAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG5cclxuICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc1Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgbG9hZE1vbnRoTGlzdCgpIHtcclxuICAgIGNvbnN0IGxvY2FsZURhdGEgPSBtb21lbnQubG9jYWxlRGF0YSh0aGlzLmxvY2FsZSk7XHJcbiAgICBjb25zdCBzaG9ydE1vbnRoID0gQXJyYXkuZnJvbShsb2NhbGVEYXRhLm1vbnRoc1Nob3J0KCkpO1xyXG4gICAgdGhpcy5tb250aEFycmF5ID0gbG9jYWxlRGF0YS5tb250aHMoKS5tYXAoKGksIGluZGV4KSA9PiB7XHJcbiAgICAgIHJldHVybiB7IGZ1bGw6IGksIHNob3J0OiBzaG9ydE1vbnRoW2luZGV4XSwgdmFsdWU6IGluZGV4IH07XHJcbiAgICB9KTtcclxuICB9XHJcbiAgcHJpdmF0ZSBsb2FkWWVhckxpc3QoeWVhciA9IG51bGwpIHtcclxuICAgIGlmICh5ZWFyID09IG51bGwpIHtcclxuICAgICAgaWYgKHRoaXMuY2FwdGlvbkRhdGEueWVhcikge1xyXG4gICAgICAgIHllYXIgPSB0aGlzLmNhcHRpb25EYXRhLnllYXI7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgeWVhciA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgZm9yIChsZXQgeSA9IHllYXI7IHkgPCAoeWVhciArIDEyKTsgeSsrKSB7XHJcbiAgICAgIGxldCBkaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICBpZiAodGhpcy5taW5EYXRlICYmIHkgPCBuZXcgRGF0ZSh0aGlzLm1pbkRhdGUpLmdldEZ1bGxZZWFyKCkpIHtcclxuICAgICAgICBkaXNhYmxlZCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKHRoaXMubWF4RGF0ZSAmJiB5ID4gbmV3IERhdGUodGhpcy5tYXhEYXRlKS5nZXRGdWxsWWVhcigpKSB7XHJcbiAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMueWVhckFycmF5LnB1c2goe1xyXG4gICAgICAgIHZhbHVlOiB5LFxyXG4gICAgICAgIGRpc2FibGVkXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXNwbGF5Vmlldyh2aWV3ID0gJ0QnKSB7XHJcbiAgICBzd2l0Y2ggKHZpZXcpIHtcclxuICAgICAgY2FzZSAnRCc6XHJcbiAgICAgICAgdGhpcy52aWV3ID0geyBkYXk6IHRydWUsIG1vbnRoOiBmYWxzZSwgeWVhcjogZmFsc2UgfTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnTSc6XHJcbiAgICAgICAgaWYgKHRoaXMudmlldy5tb250aCkge1xyXG4gICAgICAgICAgdGhpcy52aWV3ID0geyBkYXk6IHRydWUsIG1vbnRoOiBmYWxzZSwgeWVhcjogZmFsc2UgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgbWluRGF0ZSA9IG5ldyBEYXRlKHRoaXMubWluRGF0ZSk7XHJcbiAgICAgICAgICBjb25zdCBtYXhEYXRlID0gbmV3IERhdGUodGhpcy5tYXhEYXRlKTtcclxuXHJcbiAgICAgICAgICB0aGlzLm1vbnRoQXJyYXkgPSB0aGlzLm1vbnRoQXJyYXkubWFwKChpLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgIHRoaXMubWluRGF0ZSAmJlxyXG4gICAgICAgICAgICAgICgodGhpcy5jYXB0aW9uRGF0YS55ZWFyIDwgbWluRGF0ZS5nZXRGdWxsWWVhcigpKSB8fFxyXG4gICAgICAgICAgICAgICAgKHRoaXMuY2FwdGlvbkRhdGEueWVhciA9PSBtaW5EYXRlLmdldEZ1bGxZZWFyKCkpICYmIChpbmRleCA8IG1pbkRhdGUuZ2V0TW9udGgoKSkpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgIGRpc2FibGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgdGhpcy5tYXhEYXRlICYmXHJcbiAgICAgICAgICAgICAgKCh0aGlzLmNhcHRpb25EYXRhLnllYXIgPiBtYXhEYXRlLmdldEZ1bGxZZWFyKCkpIHx8XHJcbiAgICAgICAgICAgICAgICAodGhpcy5jYXB0aW9uRGF0YS55ZWFyID09IG1pbkRhdGUuZ2V0RnVsbFllYXIoKSkgJiYgKGluZGV4ID4gbWF4RGF0ZS5nZXRNb250aCgpKSlcclxuICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgLi4uaSxcclxuICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAodGhpcy5taW5EYXRlKSB7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpZiAodGhpcy5tYXhEYXRlKSB7XHJcblxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhpcy52aWV3ID0geyBkYXk6IGZhbHNlLCBtb250aDogdHJ1ZSwgeWVhcjogZmFsc2UgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgJ1knOlxyXG4gICAgICAgIGlmICh0aGlzLnZpZXcueWVhcikge1xyXG4gICAgICAgICAgdGhpcy52aWV3ID0geyBkYXk6IHRydWUsIG1vbnRoOiBmYWxzZSwgeWVhcjogZmFsc2UgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy52aWV3ID0geyBkYXk6IGZhbHNlLCBtb250aDogZmFsc2UsIHllYXI6IHRydWUgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNldE1vbnRoRGF0YShtb250aCkge1xyXG4gICAgdGhpcy5kYXlQaWNrZXJJbmRleC5zZXRVVENNb250aChtb250aCk7XHJcbiAgICB0aGlzLmdlbmVyYXRlRGF5UGlja2VyKCk7XHJcbiAgICB0aGlzLmRpc3BsYXlWaWV3KCdEJyk7XHJcbiAgfVxyXG4gIHNldFllYXJEYXRhKHllYXIpIHtcclxuICAgIHRoaXMuZGF5UGlja2VySW5kZXguc2V0RnVsbFllYXIoeWVhcik7XHJcbiAgICB0aGlzLmdlbmVyYXRlRGF5UGlja2VyKCk7XHJcbiAgICB0aGlzLmRpc3BsYXlWaWV3KCdNJyk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgaGFuZGxlS2V5RG93bihlKTogdm9pZCB7XHJcbiAgICBjb25zdCB0YXJnZXQgPSBlLmN1cnJlbnRUYXJnZXQ7XHJcbiAgICBjb25zdCB0YXJnZXROZXh0ID0gdGFyZ2V0Lm5leHRFbGVtZW50U2libGluZztcclxuICAgIGNvbnN0IHRhcmdldFByZXZpb3VzID0gdGFyZ2V0LnByZXZpb3VzRWxlbWVudFNpYmxpbmc7XHJcbiAgICBjb25zdCB0YXJnZXRQYXJlbnROZXh0ID0gdGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nICYmIHRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5ub2RlTmFtZSA9PT0gJ0RJVicgPyB0YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLkRheVBpY2tlci1EYXktLWN1cnJNb250aDpmaXJzdC1jaGlsZCcpIDogbnVsbDtcclxuICAgIGNvbnN0IHRhcmdldFBhcmVudFByZXZpb3VzID0gdGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyAmJiB0YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLm5vZGVOYW1lID09PSAnRElWJyA/IHRhcmdldC5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLkRheVBpY2tlci1EYXktLWN1cnJNb250aDpsYXN0LWNoaWxkJykgOiBudWxsO1xyXG4gICAgY29uc3QgdGFyZ2V0SW5kZXggPSAkKHRhcmdldCkuaW5kZXgoKTtcclxuICAgIGNvbnN0IHRhcmdldFBhcmVudERvd24gPSB0YXJnZXQucGFyZW50Tm9kZS5uZXh0RWxlbWVudFNpYmxpbmcgJiYgdGFyZ2V0LnBhcmVudE5vZGUubmV4dEVsZW1lbnRTaWJsaW5nLm5vZGVOYW1lID09PSAnRElWJyA/IHRhcmdldC5wYXJlbnROb2RlLm5leHRFbGVtZW50U2libGluZy5xdWVyeVNlbGVjdG9yKCcuRGF5UGlja2VyLURheS0tY3Vyck1vbnRoOm50aC1jaGlsZCgnICsgKHRhcmdldEluZGV4ICsgMSkgKyAnKScpIDogbnVsbDtcclxuICAgIGNvbnN0IHRhcmdldFBhcmVudFVwID0gdGFyZ2V0LnBhcmVudE5vZGUucHJldmlvdXNFbGVtZW50U2libGluZyAmJiB0YXJnZXQucGFyZW50Tm9kZS5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLm5vZGVOYW1lID09PSAnRElWJyA/IHRhcmdldC5wYXJlbnROb2RlLnByZXZpb3VzRWxlbWVudFNpYmxpbmcucXVlcnlTZWxlY3RvcignLkRheVBpY2tlci1EYXktLWN1cnJNb250aDpudGgtY2hpbGQoJyArICh0YXJnZXRJbmRleCArIDEpICsgJyknKSA6IG51bGw7XHJcbiAgICBzd2l0Y2ggKGUua2V5KSB7XHJcbiAgICAgIGNhc2UgJ1RhYic6XHJcbiAgICAgICAgdGhpcy5zd2l0Y2hUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0YXJnZXQudGFiSW5kZXggPSBcIi0xXCI7XHJcbiAgICAgICAgICAkKHRhcmdldC5wYXJlbnROb2RlLnBhcmVudE5vZGUpLmF0dHIoXCJ0YWJpbmRleFwiLCB0aGlzLnRhYkluZGV4VmFsdWUpO1xyXG4gICAgICAgICAgdGhpcy5kVmlld1RhYkZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9LCAwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6XHJcbiAgICAgICAgaWYgKHRhcmdldE5leHQgJiYgdGFyZ2V0TmV4dC5ub2RlTmFtZSA9PT0gJ0RJVicgJiYgdGFyZ2V0TmV4dC5jbGFzc0xpc3QuY29udGFpbnMoJ0RheVBpY2tlci1EYXktLWN1cnJNb250aCcpKSB7XHJcbiAgICAgICAgICB0YXJnZXQudGFiSW5kZXggPSBcIi0xXCI7XHJcbiAgICAgICAgICB0YXJnZXROZXh0LnRhYkluZGV4ID0gXCIwXCI7XHJcbiAgICAgICAgICB0YXJnZXROZXh0LmZvY3VzKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0YXJnZXRQYXJlbnROZXh0KSB7XHJcbiAgICAgICAgICB0YXJnZXQudGFiSW5kZXggPSBcIi0xXCI7XHJcbiAgICAgICAgICB0YXJnZXRQYXJlbnROZXh0LnRhYkluZGV4ID0gXCIwXCI7XHJcbiAgICAgICAgICB0YXJnZXRQYXJlbnROZXh0LmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dMZWZ0JzpcclxuICAgICAgICBpZiAodGFyZ2V0UHJldmlvdXMgJiYgdGFyZ2V0UHJldmlvdXMubm9kZU5hbWUgPT09ICdESVYnICYmIHRhcmdldFByZXZpb3VzLmNsYXNzTGlzdC5jb250YWlucygnRGF5UGlja2VyLURheS0tY3Vyck1vbnRoJykpIHtcclxuICAgICAgICAgIHRhcmdldC50YWJJbmRleCA9IFwiLTFcIjtcclxuICAgICAgICAgIHRhcmdldFByZXZpb3VzLnRhYkluZGV4ID0gXCIwXCI7XHJcbiAgICAgICAgICB0YXJnZXRQcmV2aW91cy5mb2N1cygpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0UGFyZW50UHJldmlvdXMpIHtcclxuICAgICAgICAgIHRhcmdldC50YWJJbmRleCA9IFwiLTFcIjtcclxuICAgICAgICAgIHRhcmdldFBhcmVudFByZXZpb3VzLnRhYkluZGV4ID0gXCIwXCI7XHJcbiAgICAgICAgICB0YXJnZXRQYXJlbnRQcmV2aW91cy5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlICdBcnJvd0Rvd24nOlxyXG4gICAgICAgIGlmICh0YXJnZXRQYXJlbnREb3duKSB7XHJcbiAgICAgICAgICB0YXJnZXQudGFiSW5kZXggPSBcIi0xXCI7XHJcbiAgICAgICAgICB0YXJnZXRQYXJlbnREb3duLnRhYkluZGV4ID0gXCIwXCI7XHJcbiAgICAgICAgICB0YXJnZXRQYXJlbnREb3duLmZvY3VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnQXJyb3dVcCc6XHJcbiAgICAgICAgaWYgKHRhcmdldFBhcmVudFVwKSB7XHJcbiAgICAgICAgICB0YXJnZXQudGFiSW5kZXggPSBcIi0xXCI7XHJcbiAgICAgICAgICB0YXJnZXRQYXJlbnRVcC50YWJJbmRleCA9IFwiMFwiO1xyXG4gICAgICAgICAgdGFyZ2V0UGFyZW50VXAuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBoYW5kbGVLZXlEb3duQ2FsZW5kYXIoZSk6IHZvaWQge1xyXG4gICAgaWYgKGUudGFyZ2V0ICYmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ0RheVBpY2tlci13cmFwcGVyJykgfHwgZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdEYXlQaWNrZXItTmF2QnV0dG9uJykpKSB7XHJcbiAgICAgIHN3aXRjaCAoZS5rZXkpIHtcclxuICAgICAgICBjYXNlICdBcnJvd1JpZ2h0JzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlTW9udGhJbmRleCgxKTtcclxuICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ0Fycm93TGVmdCc6XHJcbiAgICAgICAgICB0aGlzLnVwZGF0ZU1vbnRoSW5kZXgoLTEpO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSAnQXJyb3dEb3duJzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlTW9udGhJbmRleCgxMik7XHJcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICdBcnJvd1VwJzpcclxuICAgICAgICAgIHRoaXMudXBkYXRlTW9udGhJbmRleCgtMTIpO1xyXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgYnJlYWs7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIGRWaWV3VGFiRmxhZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gIHB1YmxpYyBPbkRheVZpZXdGb2N1cyhlKTogdm9pZCB7XHJcbiAgICBpZiAoIXRoaXMuZFZpZXdUYWJGbGFnKSB7XHJcbiAgICAgICAgY29uc3QgY3VycmVudFRhcmdldCA9ICQoZS5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICBjb25zdCBkYXlQaWNrZXJFbGVtZW50cyA9ICQoJy5EYXlQaWNrZXItRGF5LS1jdXJyTW9udGgnKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBTdG9yZSByZWZlcmVuY2VzIGZvciBjbGVhbnVwXHJcbiAgICAgICAgdGhpcy5qUXVlcnlDbGVhbnVwRWxlbWVudHMucHVzaChjdXJyZW50VGFyZ2V0LCBkYXlQaWNrZXJFbGVtZW50cyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgY3VycmVudFRhcmdldC5hdHRyKFwidGFiaW5kZXhcIiwgXCItMVwiKTtcclxuICAgICAgICBkYXlQaWNrZXJFbGVtZW50cy5lcSgwKS5hdHRyKFwidGFiaW5kZXhcIiwgXCIwXCIpLnRyaWdnZXIoXCJmb2N1c1wiKTtcclxuICAgICAgICB0aGlzLmRWaWV3VGFiRmxhZyA9IHRydWU7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiIGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIiAqbmdJZj1cImlzVmlzaWJsZVwiXHJcbiAgICBjbGFzcz1cInt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiPlxyXG4gICAgPCEtLSBUb29sdGlwIFRlbXBsYXRlIC0tPlxyXG4gICAgPCEtLSA8bmctdGVtcGxhdGUgI3Rvb2x0aXBUZW1wbGF0ZT5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b29sdGlwX3RleHRcIiBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS50b29sdGlwXCI+PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9uZy10ZW1wbGF0ZT4gLS0+XHJcblxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPSchaXNfbWF0ZXJpYWwnPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImJ0bi10b29sdGlwIG1sLWF1dG9cIiBbdG9vbHRpcF09XCJmaWVsZERhdGEudG9vbHRpcFwiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyBmaWVsZERhdGEudG9vbHRpcCBcIj5pPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIiBjbGFzcz1cImlucHV0LWdyb3VwIHt7KCFpbnB1dFZhbHVlICYmXHJcblx0XHRcdGlzTWFuZGF0b3J5ICYmIChkYXRlUGlja2VyU3RhdGUuZGlydHkgfHwgZGF0ZVBpY2tlclN0YXRlLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCI+XHJcbiAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZCBmbG9hdExhYmVsPVwie3shaXNfbWF0ZXJpYWw/J25ldmVyJzonYXV0byd9fVwiPlxyXG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbCAqbmdJZj0naXNfbWF0ZXJpYWwnPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBwbGFjZWhvbGRlcj1cInt7ZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHR9fVwiIFt2YWx1ZV09XCJzaGFkb3dWYWx1ZVwiIG1heGxlbmd0aD1cIjEwXCJcclxuICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiaXNfbWF0ZXJpYWwgJiYgaXNNYW5kYXRvcnlcIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBbcmVhZG9ubHldPVwiIWFsbG93TWFudWFsRW50cnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1NlbGVjdCAnKyBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIChrZXlwcmVzcyk9XCJkYXRlT25seSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAoa2V5dXApPVwib25EYXRlSW5wdXQoJGV2ZW50LnRhcmdldC52YWx1ZSk7IHNldFN0YXRlKHt0b3VjaGVkOnRydWUsZGlydHk6ZGF0ZVBpY2tlci5kaXJ0eX0sIGRhdGVQaWNrZXJTdGF0ZSlcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInNoYWRvdy1kYXRlSW5wdXRcIiBtYXRJbnB1dCBbbWluXT1cIm1pbkRhdGVcIiBbbWF4XT1cIm1heERhdGVcIiBbbWF0RGF0ZXBpY2tlcl09XCJwaWNrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiICNkYXRlUGlja2VyPVwibmdNb2RlbFwiIHRhYmluZGV4PVwiLTFcIiByZWFkb25seT5cclxuICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgbWF0U3VmZml4IFtmb3JdPVwicGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICA8IS0tIERhdGUgcGlja2VyIGlzIGRpc2FibGVkIGkuZSBkaXNhYmxlZCA9IHRydWUsIGFzIGFscmVhZHkgY2FsZW5kYXIgaXMgdXNlZCBiZWxvdyB0byBzZWxlY3QgdGhlIGRhdGUgZnJvbS4gLS0+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI3BpY2tlciAoY2xvc2VkKT1cInNldFN0YXRlKHt0b3VjaGVkOnRydWUsZGlydHk6ZGF0ZVBpY2tlci5kaXJ0eX0sIGRhdGVQaWNrZXJTdGF0ZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCJ0cnVlXCI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2UtdmFsaWRhdGlvblwiICpuZ0lmPVwiYWxsb3dNYW51YWxFbnRyeSAmJiBkYXRlUGlja2VyU3RhdGUudG91Y2hlZFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImVycm9yXCIgKm5nSWY9XCIhaW52YWxpZERhdGUgJiYgIWlzRnV0dXJlRGF0ZSAmJiBkYXRlUGlja2VyLmhhc0Vycm9yKCdtYXREYXRlcGlja2VyTWF4JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3thZGRpdGlvbmFsUGFyYW1ldGVyWydtYXhfZGF0ZV9lcnJvciddfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiIWludmFsaWREYXRlICYmICFpc0Z1dHVyZURhdGUgJiYgZGF0ZVBpY2tlci5oYXNFcnJvcignbWF0RGF0ZXBpY2tlck1pbicpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7YWRkaXRpb25hbFBhcmFtZXRlclsnbWluX2RhdGVfZXJyb3InXX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3JcIiAqbmdJZj1cIiFpbnZhbGlkRGF0ZSAmJiBpc0Z1dHVyZURhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3thZGRpdGlvbmFsUGFyYW1ldGVyWydmdXR1cmVfZGF0ZV9lcnJvciddfX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJlcnJvclwiICpuZ0lmPVwiaW52YWxpZERhdGUgfHwgZGF0ZVBpY2tlci5oYXNFcnJvcignbWF0RGF0ZXBpY2tlclBhcnNlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3thZGRpdGlvbmFsUGFyYW1ldGVyWydpbnZhbGlkX2RhdGVfZXJyb3InXX19PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZXJyb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiEoaW52YWxpZERhdGUgfHwgZGF0ZVBpY2tlci5oYXNFcnJvcignbWF0RGF0ZXBpY2tlck1heCcpIHx8IGRhdGVQaWNrZXIuaGFzRXJyb3IoJ21hdERhdGVwaWNrZXJNaW4nKSB8fCBpc0Z1dHVyZURhdGUpICYmIGlzVW5hdmFpbGFibGVEYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7YWRkaXRpb25hbFBhcmFtZXRlclsndW5hdmFpbGFibGVfZGF0ZV9lcnJvciddfX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tIFRvb2x0aXAgd2l0aCBpbmZvcm1haW9uIGljb24gLS0+XHJcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJpc19tYXRlcmlhbCAmJiBoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImJ0bi10b29sdGlwIG1sLWF1dG8gYnRuLXRvb2x0aXAte3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIj5cclxuICAgICAgICAgICAgICAgIGlcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImNhbGVuZGFyLXZpZXdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkRheVBpY2tlclwiIGxhbmc9XCJlblwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkRheVBpY2tlci13cmFwcGVyXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgKGtleWRvd24pPVwiaGFuZGxlS2V5RG93bkNhbGVuZGFyKCRldmVudClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiRGF5UGlja2VyLU5hdkJhclwiICpuZ0lmPVwiIXZpZXcubW9udGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiIHJvbGU9XCJidXR0b25cIiBhcmlhLWxhYmVsPVwiUHJldmlvdXMgTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJEYXlQaWNrZXItTmF2QnV0dG9uIERheVBpY2tlci1OYXZCdXR0b24tLXByZXZcIiAoa2V5ZG93bi5lbnRlcik9XCJ1cGRhdGVNb250aEluZGV4KC0xKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwidXBkYXRlTW9udGhJbmRleCgtMSlcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD1cIk5leHQgTW9udGhcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJEYXlQaWNrZXItTmF2QnV0dG9uIERheVBpY2tlci1OYXZCdXR0b24tLW5leHRcIiAoa2V5ZG93bi5lbnRlcik9XCJ1cGRhdGVNb250aEluZGV4KDEpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJ1cGRhdGVNb250aEluZGV4KDEpXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJEYXlQaWNrZXItTW9udGhzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJEYXlQaWNrZXItTW9udGhcIiByb2xlPVwiZ3JpZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIkRheVBpY2tlci1DYXB0aW9uXCIgcm9sZT1cImhlYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm0tZGF0YVwiIChjbGljayk9XCJkaXNwbGF5VmlldygnTScpXCI+e3sgY2FwdGlvbkRhdGEubW9udGggfX08L3NwYW4+Jm5ic3A7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwieS1kYXRhXCIgKGNsaWNrKT1cImRpc3BsYXlWaWV3KCdZJylcIj57eyBjYXB0aW9uRGF0YS55ZWFyIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidmlldy5kYXlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiRGF5UGlja2VyLVdlZWtkYXlzXCIgcm9sZT1cInJvd2dyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJEYXlQaWNrZXItV2Vla2RheXNSb3dcIiByb2xlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiRGF5UGlja2VyLVdlZWtkYXlcIiAqbmdGb3I9XCJsZXQgd2VlayBvZiB3ZWVrQXJyYXk7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cInt7d2Vlay5mdWxsfX1cIj57e3dlZWsuc2hvcnR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJEYXlQaWNrZXItQm9keVwiIHJvbGU9XCJyb3dncm91cFwiIChmb2N1cyk9XCJPbkRheVZpZXdGb2N1cygkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBjYWxlbmRhcldlZWsgb2YgY2FsZW5kYXJEYXlzO1wiIGNsYXNzPVwiRGF5UGlja2VyLVdlZWtcIiByb2xlPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIERheVBpY2tlci1EYXktLWRpc2FibGVkIERheVBpY2tlci1EYXktLXRvZGF5IERheVBpY2tlci1EYXktLXNlbGVjdGVkIERheVBpY2tlci1EYXktLWF2YWlsYWJsZS00IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAoa2V5ZG93bik9XCJoYW5kbGVLZXlEb3duKCRldmVudClcIiAqbmdGb3I9XCJsZXQgZGF5VmlldyBvZiBjYWxlbmRhcldlZWs7XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cIkRheVBpY2tlci1EYXlcIiBbY2xhc3MuRGF5UGlja2VyLURheS0tY3Vyck1vbnRoXT1cImRheVZpZXcuY3Vyck1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2xhc3MuRGF5UGlja2VyLURheS0tdG9kYXldPVwiZGF5Vmlldy50b2RheVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLkRheVBpY2tlci1EYXktLWRpc2FibGVkXT1cIiFpc0VkaXRhYmxlIHx8IGRheVZpZXcuZGlzYWJsZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtjbGFzcy5EYXlQaWNrZXItRGF5LS1zZWxlY3RlZF09XCJkYXlWaWV3LnZhbHVlID09PSBzaGFkb3dWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLkRheVBpY2tlci1EYXktLXVuQXZhaWxhYmxlXT1cImRheVZpZXcudW5BdmFpbGFibGVcIiByb2xlPVwiZ3JpZGNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF5Vmlldy5hcmlhTGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtZGlzYWJsZWRdPVwiIWlzRWRpdGFibGUgfHwgZGF5Vmlldy5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1zZWxlY3RlZF09XCJkYXlWaWV3LnZhbHVlID09PSBzaGFkb3dWYWx1ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0eWxlLmNvbG9yXT1cImRheVZpZXcuY29sb3JcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJpc0VkaXRhYmxlICYmICFkYXlWaWV3LmRpc2FibGVkICYmIG9uRGF0ZVNlbGVjdGVkKGRheVZpZXcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoa2V5ZG93bi5lbnRlcik9XCJpc0VkaXRhYmxlICYmICFkYXlWaWV3LmRpc2FibGVkICYmIG9uRGF0ZVNlbGVjdGVkKGRheVZpZXcpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImRheVZpZXcuY3Vyck1vbnRoXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NsYXNzLkRheVBpY2tlci1EYXktV2l0aC1MYWJlbF09XCJkYXlWaWV3LmxhYmVsXCI+PHNwYW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiRGF5LVBpY2tlci1EYXlcIj57e2RheVZpZXcuZGF0ZS5nZXREYXRlKCl9fTwvc3Bhbj48c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJkYXlWaWV3LmxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiRGF5LVBpY2tlci1MYWJlbFwiPnt7ZGF5Vmlldy5sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidmlldy5tb250aFwiIGNsYXNzPVwibW9udGhwaWNrZXItYm9keVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC0zXCIgKm5nRm9yPVwibGV0IG0gb2YgbW9udGhBcnJheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbZGlzYWJsZWRdPVwibS5kaXNhYmxlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieydjdXJyZW50JzogKG0uZnVsbCA9PSBjYXB0aW9uRGF0YS5tb250aCAmJiAhbS5kaXNhYmxlZCApIH1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJzZXRNb250aERhdGEobS52YWx1ZSlcIj57eyBtLnNob3J0IH19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidmlldy55ZWFyXCIgY2xhc3M9XCJ5ZWFycGlja2VyLWJvZHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtM1wiICpuZ0Zvcj1cImxldCB5IG9mIHllYXJBcnJheVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBbbmdDbGFzc109XCJ7J2N1cnJlbnQnOiB5LnZhbHVlID09IGNhcHRpb25EYXRhLnllYXIgJiYgIXkuZGlzYWJsZWQgfVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cInkuZGlzYWJsZWRcIiAoY2xpY2spPVwic2V0WWVhckRhdGEoeS52YWx1ZSlcIj57eyB5LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpcGxlRXJyb3JNZXNzYWdlXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKGRhdGVQaWNrZXJTdGF0ZS5kaXJ0eSB8fCBkYXRlUGlja2VyU3RhdGUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkIGZpZWxkLXR5cGUtbGFiZWwgZmllbGQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0Zvcj1cImxldCB0eXBlIG9mIHR5cGVXaXNlTGlzdFwiIGNsYXNzPVwie3t0eXBlLnR5cGVOYW1lLnRvTG93ZXJDYXNlKCl9fSBib3hcIlxyXG4gICAgICAgICAgICAgICAgW3N0eWxlLmNvbG9yXT1cInR5cGUuY29sb3JcIj5ELXt7dHlwZS50eXBlTmFtZX19PC9zcGFuPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=