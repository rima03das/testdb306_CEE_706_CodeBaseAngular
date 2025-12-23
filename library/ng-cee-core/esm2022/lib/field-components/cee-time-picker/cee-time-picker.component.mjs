import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import * as moment from 'moment';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { CommonModule, NgStyle } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgbTimepicker } from '@ng-bootstrap/ng-bootstrap';
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
import * as i11 from "ngx-material-timepicker";
import * as i12 from "@angular/common";
import * as i13 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["fieldName"];
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
const _c2 = a0 => ({ fieldName: a0 });
const _c3 = a0 => ({ "color": a0 });
function CeeTimePickerComponent_div_0_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTimePickerComponent_div_0_button_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeTimePickerComponent_div_0_ng_container_9_3_ng_template_0_Template(rf, ctx) { }
function CeeTimePickerComponent_div_0_ng_container_9_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimePickerComponent_div_0_ng_container_9_3_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTimePickerComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "ngb-timepicker", 16, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTimePickerComponent_div_0_ng_container_9_Template_ngb_timepicker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.time, $event) || (ctx_r0.time = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTimePickerComponent_div_0_ng_container_9_Template_ngb_timepicker_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSessionDataUpdated($event)); })("blur", function CeeTimePickerComponent_div_0_ng_container_9_Template_ngb_timepicker_blur_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSessionDataUpdated($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeTimePickerComponent_div_0_ng_container_9_3_Template, 1, 0, null, 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldName_r3 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(2);
    const errorMessage_r4 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.time);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable)("required", ctx_r0.isMandatory)("ngStyle", i0.ɵɵpureFunction8(13, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color, ctx_r0.fieldData.field_style.border_color, ctx_r0.fieldData.field_style.field_height, ctx_r0.fieldData.field_style.field_width, ctx_r0.fieldData.field_style.background_color))("seconds", ctx_r0.seconds)("hourStep", ctx_r0.timeConfig.hour)("minuteStep", ctx_r0.timeConfig.minute)("secondStep", ctx_r0.timeConfig.second)("meridian", ctx_r0.meridian);
    i0.ɵɵattribute("id", ctx_r0.html_id)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngTemplateOutlet", errorMessage_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(22, _c2, fieldName_r3));
} }
function CeeTimePickerComponent_div_0_ng_template_10_5_ng_template_0_Template(rf, ctx) { }
function CeeTimePickerComponent_div_0_ng_template_10_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimePickerComponent_div_0_ng_template_10_5_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTimePickerComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 18, 2);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTimePickerComponent_div_0_ng_template_10_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(2, "ngx-material-timepicker-toggle", 9);
    i0.ɵɵelementStart(3, "ngx-material-timepicker", 19, 3);
    i0.ɵɵlistener("timeSet", function CeeTimePickerComponent_div_0_ng_template_10_Template_ngx_material_timepicker_timeSet_3_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.onSessionDataUpdated($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeTimePickerComponent_div_0_ng_template_10_5_Template, 1, 0, null, 17);
} if (rf & 2) {
    const fieldName_r6 = i0.ɵɵreference(1);
    const picker_r7 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(2);
    const errorMessage_r4 = i0.ɵɵreference(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.fieldData.placeholder_text);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵproperty("ngxTimepicker", picker_r7)("disabled", !ctx_r0.isEditable)("value", ctx_r0.inputValue)("format", ctx_r0.matTpFormat)("required", ctx_r0.isMandatory)("ngStyle", i0.ɵɵpureFunction8(13, _c1, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color, ctx_r0.fieldData.field_style.border_color, ctx_r0.fieldData.field_style.field_height, ctx_r0.fieldData.field_style.field_width, ctx_r0.fieldData.field_style.background_color));
    i0.ɵɵattribute("id", ctx_r0.html_id)("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("for", picker_r7);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngTemplateOutlet", errorMessage_r4)("ngTemplateOutletContext", i0.ɵɵpureFunction1(22, _c2, fieldName_r6));
} }
function CeeTimePickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8)(3, "label", 9)(4, "span");
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeeTimePickerComponent_div_0_span_6_Template, 2, 0, "span", 10)(7, CeeTimePickerComponent_div_0_button_7_Template, 2, 2, "button", 11);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 12);
    i0.ɵɵtemplate(9, CeeTimePickerComponent_div_0_ng_container_9_Template, 4, 24, "ng-container", 13)(10, CeeTimePickerComponent_div_0_ng_template_10_Template, 6, 24, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const materialInput_r8 = i0.ɵɵreference(11);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("for", ctx_r0.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.matTP)("ngIfElse", materialInput_r8);
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r9.code).message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r9.type == "Mandatory");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r9.code).message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r9.type == "minlength");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.returnMessageData(message_r9.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r9.code).message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r9.type == "Regex");
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 23)(2, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 23)(3, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldName_r10 = i0.ɵɵnextContext(3).fieldName;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r10 == null ? null : fieldName_r10.errors.required);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r10 == null ? null : fieldName_r10.errors.minlength);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r10 == null ? null : fieldName_r10.errors.pattern);
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 21);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldName_r10 = i0.ɵɵnextContext(2).fieldName;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r10.invalid && (fieldName_r10.dirty || fieldName_r10.touched || ctx_r0.showErrorOnNext));
} }
function CeeTimePickerComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_div_1_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtemplate(1, CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_div_1_Template, 2, 1, "div", 23);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldName_r10 = i0.ɵɵnextContext(2).fieldName;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (fieldName_r10 == null ? null : fieldName_r10.errors.required) || (fieldName_r10 == null ? null : fieldName_r10.errors.minlength) || (fieldName_r10 == null ? null : fieldName_r10.errors.pattern));
} }
function CeeTimePickerComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimePickerComponent_ng_template_1_ng_template_1_div_0_Template, 2, 1, "div", 21);
} if (rf & 2) {
    const fieldName_r10 = i0.ɵɵnextContext().fieldName;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", fieldName_r10.invalid && (fieldName_r10.dirty || fieldName_r10.touched || ctx_r0.showErrorOnNext));
} }
function CeeTimePickerComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 22)(2, "div")(3, "p", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r11 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r11.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r11.value.message_text, "");
} }
function CeeTimePickerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimePickerComponent_ng_template_1_ng_container_0_Template, 2, 1, "ng-container", 13)(1, CeeTimePickerComponent_ng_template_1_ng_template_1_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor)(3, CeeTimePickerComponent_ng_template_1_ng_container_3_Template, 5, 4, "ng-container", 20);
    i0.ɵɵpipe(4, "keyvalue");
} if (rf & 2) {
    const singleErrorMessage_r12 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r12);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 3, ctx_r0.showComparisonError));
} }
export class CeeTimePickerComponent extends BaseView {
    userDataHandlerService;
    internalCEEEmitter;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    fieldName;
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
    time = {};
    seconds = false;
    timeConfig = { hour: 1, minute: 1, second: 1 };
    meridian = false;
    matTP = true;
    dateFormat = 'h:mm A';
    apiDateFormat = 'H:mm';
    nowDate = new Date();
    matTpFormat = 12;
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
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        this.matTP = this.is_material;
        if (this.additionalParameter['Material UI']) {
            this.matTP = this.additionalParameter['Material UI'] === "true" ? true : false;
        }
        // END
        if (!this.matTP) {
            if (this.seconds) {
                this.time = { hour: 0, minute: 0, second: 0 };
            }
            else {
                this.time = { hour: 0, minute: 0 };
            }
            this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
                : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
            if (this.fieldValue === 'CURR_TIME') {
                const date = new Date();
                if (this.seconds) {
                    this.time = { hour: Number(date.getHours()), minute: Number(date.getMinutes()), second: Number(date.getSeconds()) };
                }
                else {
                    this.time = { hour: Number(date.getHours()), minute: Number(date.getMinutes()) };
                }
            }
            else {
                this.inputValue = this.fieldValue;
                this.time = this.getTime(this.inputValue);
            }
            this.setMinMaxTime(this.setTime(this.time));
            if (this.additionalParameter['PickerStep']) {
                const pStep = this.additionalParameter['PickerStep'].split("|").map(v => { return Number(v) ? Number(v) : 1; });
                if (pStep.length === 3) {
                    this.timeConfig.hour = pStep[0];
                    this.timeConfig.minute = pStep[1];
                    this.timeConfig.second = pStep[2];
                }
            }
        }
        else {
            if (this.additionalParameter['Date Format']) {
                this.dateFormat = this.additionalParameter['Date Format'];
            }
            if (this.additionalParameter['API Date Format']) {
                this.apiDateFormat = this.additionalParameter['API Date Format'];
            }
            if (this.dateFormat.includes('H')) {
                this.matTpFormat = 24;
            }
            else {
                this.matTpFormat = 12;
            }
            if (this.fieldValue !== undefined) {
                if (this.fieldValue === 'CURR_TIME') {
                    this.fieldValue = moment.default(this.nowDate.toISOString()).format(this.apiDateFormat);
                    this.onSessionDataUpdated(this.fieldValue);
                }
                if (this.fieldValue && this.commonUtil.isValidTimeStr(this.fieldValue, this.apiDateFormat)) {
                    this.inputValue = this.commonUtil.parseTime(this.fieldValue, this.dateFormat);
                }
            }
        }
    }
    onSessionDataUpdated(value) {
        if (!this.matTP) {
            this.updateFieldData(this.setTime(value));
            this.setMinMaxTime(this.setTime(value));
        }
        else {
            this.updateFieldData(this.commonUtil.parseTime(value, this.apiDateFormat));
        }
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.onDirty();
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            if (!this.matTP) {
                this.inputValue = apiValue;
                this.time = this.getTime(this.inputValue);
                this.updateFieldData(this.inputValue);
            }
            else {
                if (this.commonUtil.isValidTimeStr(apiValue, this.apiDateFormat)) {
                    this.inputValue = this.commonUtil.parseTime(apiValue, this.dateFormat);
                    this.updateFieldData(apiValue);
                }
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    setState(value, inputBoxesState) {
        inputBoxesState.touched !== value.touched && (inputBoxesState.touched = value.touched);
        inputBoxesState.dirty !== value.dirty && (inputBoxesState.dirty = value.dirty);
    }
    concatData() { }
    getTime(time) {
        if (time) {
            const array = time.split(':');
            if (this.seconds) {
                return {
                    hour: Number(array[0]) ? Number(array[0]) : Number('00'),
                    minute: Number(array[1]) ? Number(array[1]) : Number('00'),
                    second: Number(array[2]) ? Number(array[2]) : Number('00')
                };
            }
            else {
                return {
                    hour: Number(array[0]) ? Number(array[0]) : Number('00'),
                    minute: Number(array[1]) ? Number(array[1]) : Number('00')
                };
            }
        }
        else {
            return null;
        }
    }
    setTime(timeObject) {
        // console.log(timeObject);
        if (timeObject) {
            if (this.seconds) {
                return this.getTimeVal(timeObject['hour']) + ':' + this.getTimeVal(timeObject['minute']) + ':' + this.getTimeVal(timeObject['second']);
            }
            else {
                return this.getTimeVal(timeObject['hour']) + ':' + this.getTimeVal(timeObject['minute']);
            }
        }
        else {
            return "";
        }
    }
    getTimeVal(val) {
        if (val < 10) {
            return '0' + val.toString();
        }
        else {
            return val.toString();
        }
    }
    setMinMaxTime(time) {
        if (this.additionalParameter['MinValue']) {
            const minTime = this.getTime(this.appDataService.getFieldDataByFieldId(this.additionalParameter['MinValue']));
            if (minTime && time < this.setTime(minTime)) {
                this.time = minTime;
                this.onSessionDataUpdated(minTime);
            }
        }
        if (this.additionalParameter['MaxValue']) {
            const maxTime = this.getTime(this.appDataService.getFieldDataByFieldId(this.additionalParameter['MaxValue']));
            if (maxTime && time > this.setTime(maxTime)) {
                this.time = maxTime;
                this.onSessionDataUpdated(maxTime);
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
                this.inputValue = '';
                // default value
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        switch (paramter.parameter_type) {
                            case 'default_value':
                                if (!this.matTP) {
                                    this.inputValue = paramter.value;
                                    this.time = this.getTime(this.inputValue);
                                }
                                else {
                                    let setVal = paramter.value;
                                    if (setVal === 'CURR_DATE') {
                                        setVal = moment.default(this.nowDate.toISOString()).format(this.apiDateFormat);
                                        this.onSessionDataUpdated(setVal);
                                    }
                                    if (setVal && this.commonUtil.isValidTimeStr(setVal, this.apiDateFormat)) {
                                        this.inputValue = this.commonUtil.parseTime(setVal, this.dateFormat);
                                    }
                                }
                                break;
                        }
                    }
                }
                else {
                    this.inputValue = '';
                    this.time = '';
                }
                this.updateFieldData(this.inputValue);
                if (this.fieldName) {
                    this.fieldName.reset(this.inputValue);
                    this.fieldName.control.markAsUntouched();
                    this.fieldName.control.markAsPristine();
                    this.fieldName.control.updateValueAndValidity();
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
            if (!this.matTP) {
                this.inputValue = get_data[unique_id_value];
                this.time = this.getTime(this.inputValue);
                this.updateFieldData(this.inputValue);
            }
            else {
                if (this.commonUtil.isValidTimeStr(get_data[unique_id_value], this.apiDateFormat)) {
                    this.inputValue = this.commonUtil.parseTime(get_data[unique_id_value], this.dateFormat);
                    this.updateFieldData(get_data[unique_id_value]);
                }
            }
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                let setVal = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                if (!this.matTP) {
                    this.inputValue = setVal;
                    this.time = this.getTime(this.inputValue);
                    // of triggerUpdate is true then update the field value or update value and emit conditions event
                    this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
                }
                else {
                    if (this.commonUtil.isValidTimeStr(setVal, this.apiDateFormat)) {
                        this.inputValue = this.commonUtil.parseTime(setVal, this.dateFormat);
                        // of triggerUpdate is true then update the field value or update value and emit conditions event
                        this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](setVal);
                    }
                }
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
    static ɵfac = function CeeTimePickerComponent_Factory(t) { return new (t || CeeTimePickerComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTimePickerComponent, selectors: [["app-cee-time-picker"]], viewQuery: function CeeTimePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fieldName = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["errorMessage", ""], ["materialInput", ""], ["fieldName", "ngModel"], ["picker", ""], ["singleErrorMessage", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [3, "for"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [4, "ngIf", "ngIfElse"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], ["maxlength", "2", 3, "ngModelChange", "blur", "ngModel", "disabled", "required", "ngStyle", "seconds", "hourStep", "minuteStep", "secondStep", "meridian"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["readonly", "", 3, "ngModelChange", "ngModel", "ngxTimepicker", "disabled", "value", "format", "placeholder", "required", "ngStyle"], [3, "timeSet"], [4, "ngFor", "ngForOf"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [4, "ngIf"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeTimePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTimePickerComponent_div_0_Template, 12, 6, "div", 5)(1, CeeTimePickerComponent_ng_template_1_Template, 5, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, NgStyle, FormsModule, i10.DefaultValueAccessor, i10.NgControlStatus, i10.RequiredValidator, i10.MaxLengthValidator, i10.NgModel, NgbTimepicker, NgbModule, NgbTimepickerModule, NgxMaterialTimepickerModule, i11.NgxMaterialTimepickerComponent, i11.NgxMaterialTimepickerToggleComponent, i11.TimepickerDirective, CommonModule, i12.NgForOf, i12.NgIf, i12.NgTemplateOutlet, i12.KeyValuePipe, TooltipModule, i13.TooltipDirective] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTimePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-time-picker', standalone: true, imports: [MatTooltipModule, NgStyle, FormsModule, NgbTimepicker, NgbModule, NgbTimepickerModule, NgxMaterialTimepickerModule, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<label for=\"{{html_id }}\">\r\n\t\t\t\t<span>{{fieldData.field_label}}</span><span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t\t</label>\r\n\t\t</div>\r\n\t\t<div class=\"form-field\">\r\n\t\t\t<ng-container *ngIf=\"!matTP; else materialInput\">\r\n\t\t\t\t<!-- <ngb-timepicker [(ngModel)]=\"time\" [attr.id]=\"html_id\" (ngModelChange)=\"onSessionDataUpdated($event)\"\r\n\t\t\t\t\t(blur)=\"onSessionDataUpdated($event)\" [disabled]=\"!isEditable\" #fieldName=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t[ngStyle]=\"{\r\n            'font-family': fieldData.field_style.font_name,\r\n            'font-size': fieldData.field_style.font_size,\r\n            'font-style': fieldData.field_style.font_style,\r\n            'font-color': fieldData.field_style.font_color,\r\n            'border-color': fieldData.field_style.border_color,\r\n            'height': fieldData.field_style.field_height,\r\n            'width': fieldData.field_style.field_width,\r\n            'background-color': fieldData.field_style.background_color\r\n          }\"\r\n\t\t  \t\t\tplaceholder=\"{{fieldData.placeholder_text}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n\t\t\t\t\t[seconds]=\"seconds\" [hourStep]=\"timeConfig.hour\" [minuteStep]=\"timeConfig.minute\"\r\n\t\t\t\t\t[secondStep]=\"timeConfig.second\" [meridian]=\"meridian\" maxlength=\"2\"></ngb-timepicker> -->\r\n\t\t\t\t\t<ngb-timepicker [(ngModel)]=\"time\" [attr.id]=\"html_id\" (ngModelChange)=\"onSessionDataUpdated($event)\"\r\n\t\t\t\t\t(blur)=\"onSessionDataUpdated($event)\" [disabled]=\"!isEditable\" #fieldName=\"ngModel\" [required]=\"isMandatory\"\r\n\t\t\t\t\t[ngStyle]=\"{\r\n            'font-family': fieldData.field_style.font_name,\r\n            'font-size': fieldData.field_style.font_size,\r\n            'font-style': fieldData.field_style.font_style,\r\n            'font-color': fieldData.field_style.font_color,\r\n            'border-color': fieldData.field_style.border_color,\r\n            'height': fieldData.field_style.field_height,\r\n            'width': fieldData.field_style.field_width,\r\n            'background-color': fieldData.field_style.background_color\r\n          }\"\r\n\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n\t\t\t\t\t[seconds]=\"seconds\" [hourStep]=\"timeConfig.hour\" [minuteStep]=\"timeConfig.minute\"\r\n\t\t\t\t\t[secondStep]=\"timeConfig.second\" [meridian]=\"meridian\" maxlength=\"2\"></ngb-timepicker>\r\n\t\t\t\t<ng-template *ngTemplateOutlet=\"errorMessage; context:{fieldName:fieldName}\"></ng-template>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #materialInput>\r\n\t\t\t\t<input #fieldName=\"ngModel\" [(ngModel)]=\"inputValue\" [ngxTimepicker]=\"picker\" [disabled]=\"!isEditable\"\r\n\t\t\t\t\t[value]=\"inputValue\" [attr.id]=\"html_id\" [format]=\"matTpFormat\" readonly  placeholder=\"{{fieldData.placeholder_text}}\"\r\n\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n\t\t\t\t\t[required]=\"isMandatory\" [ngStyle]=\"{\r\n            'font-family': fieldData.field_style.font_name,\r\n            'font-size': fieldData.field_style.font_size,\r\n            'font-style': fieldData.field_style.font_style,\r\n            'font-color': fieldData.field_style.font_color,\r\n            'border-color': fieldData.field_style.border_color,\r\n            'height': fieldData.field_style.field_height,\r\n            'width': fieldData.field_style.field_width,\r\n            'background-color': fieldData.field_style.background_color\r\n          }\">\r\n\t\t\t\t<ngx-material-timepicker-toggle [for]=\"picker\"></ngx-material-timepicker-toggle>\r\n\t\t\t\t<ngx-material-timepicker #picker (timeSet)=\"onSessionDataUpdated($event)\"></ngx-material-timepicker>\r\n\t\t\t\t<ng-template *ngTemplateOutlet=\"errorMessage; context:{fieldName:fieldName}\">\r\n\t\t\t\t</ng-template>\r\n\t\t\t</ng-template>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n<ng-template #errorMessage let-fieldName='fieldName'>\r\n\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t*ngIf=\"fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext )\">\r\n\t\t\t\t<div *ngIf=\"fieldName?.errors.required\">\r\n\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"fieldName?.errors.minlength\">\r\n\t\t\t\t\t<p *ngIf=\"message.type == 'minlength'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div *ngIf=\"fieldName?.errors.pattern\">\r\n\t\t\t\t\t<p *ngIf=\"message.type == 'Regex'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<ng-template #singleErrorMessage>\r\n\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t*ngIf=\"fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext)\">\r\n\t\t\t<div *ngIf=\"fieldName?.errors.required || fieldName?.errors.minlength || fieldName?.errors.pattern\">\r\n\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t<div>\r\n\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</ng-template>\r\n" }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.CEEInternalEmitterService }, { type: i3.SharedEventsServiceService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { fieldName: [{
            type: ViewChild,
            args: ['fieldName', { static: false }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTimePickerComponent, { className: "CeeTimePickerComponent", filePath: "lib\\field-components\\cee-time-picker\\cee-time-picker.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS10aW1lLXBpY2tlci9jZWUtdGltZS1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRpbWUtcGlja2VyL2NlZS10aW1lLXBpY2tlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBcUQsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3ZILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUM3QyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFLOUQsT0FBTyxLQUFLLE1BQU0sTUFBTSxRQUFRLENBQUM7QUFDakMsT0FBTyxFQUFFLFdBQVcsRUFBVyxNQUFNLGdCQUFnQixDQUFDO0FBQ3RELE9BQU8sRUFBRSxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUM1RSxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUN0RSxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUUsYUFBYSxFQUFF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QkFBbkQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBRXhCLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7O2tGQVhHLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgU2Vzc2lvbktleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLWtleS11dGlsJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCAqIGFzIG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmdiTW9kdWxlLCBOZ2JUaW1lcGlja2VyTW9kdWxlIH0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUgfSBmcm9tICduZ3gtbWF0ZXJpYWwtdGltZXBpY2tlcic7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgTmdiVGltZXBpY2tlcn0gZnJvbSAnQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLXRpbWUtcGlja2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtdGltZS1waWNrZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLXRpbWUtcGlja2VyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogWyBNYXRUb29sdGlwTW9kdWxlLCBOZ1N0eWxlLCBGb3Jtc01vZHVsZSwgTmdiVGltZXBpY2tlciwgTmdiTW9kdWxlLCBOZ2JUaW1lcGlja2VyTW9kdWxlLCBOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGUsIENvbW1vbk1vZHVsZSwgVG9vbHRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZVRpbWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2ZpZWxkTmFtZScsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWVsZE5hbWU6IE5nTW9kZWw7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIG1hbmRhdG9yeUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZWRpdGFibGVDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHZpc2libGVDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuXHJcbiAgICBkZWNsYXJlIHNlc3Npb25LZXlVdGlsOiBTZXNzaW9uS2V5VXRpbDtcclxuICAgIHZhbGlkYXRpb25SZWdleCA9ICcnO1xyXG4gICAgaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgaHRtbF9pZCA9ICcnO1xyXG4gICAgdGltZSA9IHt9O1xyXG4gICAgc2Vjb25kcyA9IGZhbHNlO1xyXG4gICAgdGltZUNvbmZpZyA9IHsgaG91cjogMSwgbWludXRlOiAxLCBzZWNvbmQ6IDEgfTtcclxuICAgIG1lcmlkaWFuID0gZmFsc2U7XHJcbiAgICBtYXRUUCA9IHRydWU7XHJcbiAgICBkYXRlRm9ybWF0OiBzdHJpbmcgPSAnaDptbSBBJztcclxuICAgIGFwaURhdGVGb3JtYXQ6IHN0cmluZyA9ICdIOm1tJztcclxuICAgIG5vd0RhdGU6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbWF0VHBGb3JtYXQ6IG51bWJlciA9IDEyO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBhcGlEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgd2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIGRpYWxvZyxcclxuICAgICAgICAgICAgc25hY2tCYXIsXHJcbiAgICAgICAgICAgIGh0dHApO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbktleVV0aWwgPSBuZXcgU2Vzc2lvbktleVV0aWwoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgLy8gb25EZXN0cm95KCkge1xyXG4gICAgLy8gICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBGb3IgdW5pcXVlIGh0bWwgaWRcclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLmZpZWxkRGF0YS5odG1sX2lkXHJcbiAgICAgICAgdGhpcy5tYXRUUCA9IHRoaXMuaXNfbWF0ZXJpYWw7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTWF0ZXJpYWwgVUknXSkge1xyXG4gICAgICAgICAgICB0aGlzLm1hdFRQID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYXRlcmlhbCBVSSddID09PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gRU5EXHJcbiAgICAgICAgaWYgKCF0aGlzLm1hdFRQKSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWNvbmRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB7IGhvdXI6IDAsIG1pbnV0ZTogMCwgc2Vjb25kOiAwIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB7IGhvdXI6IDAsIG1pbnV0ZTogMCB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblJlZ2V4ID0gKHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggJiYgdHlwZW9mIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXgud2ViID09ICdvYmplY3QnICYmIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXguV2ViICE9PSAnJykgPyB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4LndlYlxyXG4gICAgICAgICAgICAgICAgOiAodHlwZW9mIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggPT0gJ3N0cmluZycgJiYgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCAhPT0gJycpID8gdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCA6ICcnO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZFZhbHVlID09PSAnQ1VSUl9USU1FJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWNvbmRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0geyBob3VyOiBOdW1iZXIoZGF0ZS5nZXRIb3VycygpKSwgbWludXRlOiBOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCkpLCBzZWNvbmQ6IE51bWJlcihkYXRlLmdldFNlY29uZHMoKSkgfTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0geyBob3VyOiBOdW1iZXIoZGF0ZS5nZXRIb3VycygpKSwgbWludXRlOiBOdW1iZXIoZGF0ZS5nZXRNaW51dGVzKCkpIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmdldFRpbWUodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldE1pbk1heFRpbWUodGhpcy5zZXRUaW1lKHRoaXMudGltZSkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydQaWNrZXJTdGVwJ10pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBTdGVwID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydQaWNrZXJTdGVwJ10uc3BsaXQoXCJ8XCIpLm1hcCh2ID0+IHsgcmV0dXJuIE51bWJlcih2KSA/IE51bWJlcih2KSA6IDEgfSk7XHJcbiAgICAgICAgICAgICAgICBpZiAocFN0ZXAubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ29uZmlnLmhvdXIgPSBwU3RlcFswXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWVDb25maWcubWludXRlID0gcFN0ZXBbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lQ29uZmlnLnNlY29uZCA9IHBTdGVwWzJdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGF0ZSBGb3JtYXQnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRlRm9ybWF0ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEYXRlIEZvcm1hdCddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FQSSBEYXRlIEZvcm1hdCddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGVGb3JtYXQgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FQSSBEYXRlIEZvcm1hdCddO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmRhdGVGb3JtYXQuaW5jbHVkZXMoJ0gnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRUcEZvcm1hdCA9IDI0O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXRUcEZvcm1hdCA9IDEyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRWYWx1ZSA9PT0gJ0NVUlJfVElNRScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBtb21lbnQuZGVmYXVsdCh0aGlzLm5vd0RhdGUudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZCh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRWYWx1ZSAmJiB0aGlzLmNvbW1vblV0aWwuaXNWYWxpZFRpbWVTdHIodGhpcy5maWVsZFZhbHVlLCB0aGlzLmFwaURhdGVGb3JtYXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLnBhcnNlVGltZSh0aGlzLmZpZWxkVmFsdWUsIHRoaXMuZGF0ZUZvcm1hdClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXNzaW9uRGF0YVVwZGF0ZWQodmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghdGhpcy5tYXRUUCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLnNldFRpbWUodmFsdWUpKTtcclxuICAgICAgICAgICAgdGhpcy5zZXRNaW5NYXhUaW1lKHRoaXMuc2V0VGltZSh2YWx1ZSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuY29tbW9uVXRpbC5wYXJzZVRpbWUodmFsdWUsIHRoaXMuYXBpRGF0ZUZvcm1hdCkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldE1vZGFsb3JTYW5ja0Jhck1lc3NhZ2UodGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5vbkRpcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BUElDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGFwaVZhbHVlID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgaWYgKGFwaVZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5tYXRUUCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gYXBpVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmdldFRpbWUodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25VdGlsLmlzVmFsaWRUaW1lU3RyKGFwaVZhbHVlLCB0aGlzLmFwaURhdGVGb3JtYXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLnBhcnNlVGltZShhcGlWYWx1ZSwgdGhpcy5kYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShhcGlWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSkge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U3RhdGUodmFsdWU6IGFueSwgaW5wdXRCb3hlc1N0YXRlKSB7XHJcbiAgICAgICAgaW5wdXRCb3hlc1N0YXRlLnRvdWNoZWQgIT09IHZhbHVlLnRvdWNoZWQgJiYgKGlucHV0Qm94ZXNTdGF0ZS50b3VjaGVkID0gdmFsdWUudG91Y2hlZCk7XHJcbiAgICAgICAgaW5wdXRCb3hlc1N0YXRlLmRpcnR5ICE9PSB2YWx1ZS5kaXJ0eSAmJiAoaW5wdXRCb3hlc1N0YXRlLmRpcnR5ID0gdmFsdWUuZGlydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuXHJcbiAgICBnZXRUaW1lKHRpbWUpIHtcclxuICAgICAgICBpZiAodGltZSkge1xyXG4gICAgICAgICAgICBjb25zdCBhcnJheSA9IHRpbWUuc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2Vjb25kcykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBob3VyOiBOdW1iZXIoYXJyYXlbMF0pID8gTnVtYmVyKGFycmF5WzBdKSA6IE51bWJlcignMDAnKSxcclxuICAgICAgICAgICAgICAgICAgICBtaW51dGU6IE51bWJlcihhcnJheVsxXSkgPyBOdW1iZXIoYXJyYXlbMV0pIDogTnVtYmVyKCcwMCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlY29uZDogTnVtYmVyKGFycmF5WzJdKSA/IE51bWJlcihhcnJheVsyXSkgOiBOdW1iZXIoJzAwJylcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGhvdXI6IE51bWJlcihhcnJheVswXSkgPyBOdW1iZXIoYXJyYXlbMF0pIDogTnVtYmVyKCcwMCcpLFxyXG4gICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogTnVtYmVyKGFycmF5WzFdKSA/IE51bWJlcihhcnJheVsxXSkgOiBOdW1iZXIoJzAwJylcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRUaW1lKHRpbWVPYmplY3QpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aW1lT2JqZWN0KTtcclxuICAgICAgICBpZiAodGltZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWNvbmRzKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUaW1lVmFsKHRpbWVPYmplY3RbJ2hvdXInXSkgKyAnOicgKyB0aGlzLmdldFRpbWVWYWwodGltZU9iamVjdFsnbWludXRlJ10pICsgJzonICsgdGhpcy5nZXRUaW1lVmFsKHRpbWVPYmplY3RbJ3NlY29uZCddKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRpbWVWYWwodGltZU9iamVjdFsnaG91ciddKSArICc6JyArIHRoaXMuZ2V0VGltZVZhbCh0aW1lT2JqZWN0WydtaW51dGUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZVZhbCh2YWwpIHtcclxuICAgICAgICBpZiAodmFsIDwgMTApIHtcclxuICAgICAgICAgICAgcmV0dXJuICcwJyArIHZhbC50b1N0cmluZygpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWwudG9TdHJpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TWluTWF4VGltZSh0aW1lKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTWluVmFsdWUnXSkge1xyXG4gICAgICAgICAgICBjb25zdCBtaW5UaW1lID0gdGhpcy5nZXRUaW1lKHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTWluVmFsdWUnXSkpO1xyXG4gICAgICAgICAgICBpZiAobWluVGltZSAmJiB0aW1lIDwgdGhpcy5zZXRUaW1lKG1pblRpbWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSBtaW5UaW1lO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZChtaW5UaW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYXhWYWx1ZSddKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heFRpbWUgPSB0aGlzLmdldFRpbWUodGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYXhWYWx1ZSddKSk7XHJcbiAgICAgICAgICAgIGlmIChtYXhUaW1lICYmIHRpbWUgPiB0aGlzLnNldFRpbWUobWF4VGltZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZSA9IG1heFRpbWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKG1heFRpbWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSBbXTtcclxuICAgICAgICBpZiAoZ2V0X2RhdGEudW5pcXVlX2lkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS51bmlxdWVfaWRzO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5hcHBEYXRhLmlkXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEuYXBpS2V5cztcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmZpZWxkRGF0YS5hcGlfa2V5XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFsuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KSldO1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlcXVlc3RfYXBpX2tleSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICAgICAgICBpZiAodW5pcXVlX2lkX3ZhbHVlLmluY2x1ZGVzKGVsbSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgLy8gZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVmYXVsdF92YWx1ZSc6XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXRUUCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lID0gdGhpcy5nZXRUaW1lKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2V0VmFsID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzZXRWYWwgPT09ICdDVVJSX0RBVEUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWwgPSBtb21lbnQuZGVmYXVsdCh0aGlzLm5vd0RhdGUudG9JU09TdHJpbmcoKSkuZm9ybWF0KHRoaXMuYXBpRGF0ZUZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKHNldFZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNldFZhbCAmJiB0aGlzLmNvbW1vblV0aWwuaXNWYWxpZFRpbWVTdHIoc2V0VmFsLCB0aGlzLmFwaURhdGVGb3JtYXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmNvbW1vblV0aWwucGFyc2VUaW1lKHNldFZhbCwgdGhpcy5kYXRlRm9ybWF0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE5hbWUucmVzZXQodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTmFtZS5jb250cm9sLm1hcmtBc1VudG91Y2hlZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGROYW1lLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTmFtZS5jb250cm9sLnVwZGF0ZVZhbHVlQW5kVmFsaWRpdHkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBoYW5kbGVDdXN0b21GdW5jdGlvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0X2RhdGEnLCB0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKTtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhnZXRfZGF0YSkuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZV9pZF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLm1hdFRQKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lID0gdGhpcy5nZXRUaW1lKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbW9uVXRpbC5pc1ZhbGlkVGltZVN0cihnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdLCB0aGlzLmFwaURhdGVGb3JtYXQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5jb21tb25VdGlsLnBhcnNlVGltZShnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdLCB0aGlzLmRhdGVGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKGdldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc2V0VmFsID0gZGF0YVsndmFsdWVzJ10ubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bZGF0YVsndW5pcXVlSWRzJ10uaW5kZXhPZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bMF1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5tYXRUUCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHNldFZhbDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRpbWUgPSB0aGlzLmdldFRpbWUodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBvZiB0cmlnZ2VyVXBkYXRlIGlzIHRydWUgdGhlbiB1cGRhdGUgdGhlIGZpZWxkIHZhbHVlIG9yIHVwZGF0ZSB2YWx1ZSBhbmQgZW1pdCBjb25kaXRpb25zIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tkYXRhWyd0cmlnZ2VyVXBkYXRlJ10gPyAndXBkYXRlRmllbGRFbnRpdHknIDogJ3VwZGF0ZUZpZWxkRGF0YSddKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25VdGlsLmlzVmFsaWRUaW1lU3RyKHNldFZhbCwgdGhpcy5hcGlEYXRlRm9ybWF0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmNvbW1vblV0aWwucGFyc2VUaW1lKHNldFZhbCwgdGhpcy5kYXRlRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gb2YgdHJpZ2dlclVwZGF0ZSBpcyB0cnVlIHRoZW4gdXBkYXRlIHRoZSBmaWVsZCB2YWx1ZSBvciB1cGRhdGUgdmFsdWUgYW5kIGVtaXQgY29uZGl0aW9ucyBldmVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10oc2V0VmFsKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGNoYW5nZU1hcCA9IHtcclxuICAgICAgICAvLyAgICAgZmllbGRfbGFiZWw6ICdmaWVsZERhdGEuZmllbGRfbGFiZWwnLFxyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlcl90ZXh0OiAnZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQnLFxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOiAnZmllbGREYXRhLnRvb2x0aXAnLFxyXG4gICAgICAgIC8vICAgICAnYWRkaXRpb25hbF9wYXJhbWV0ZXJzWypdQXJpYS1MYWJlbCc6ICdhZGRpdGlvbmFsUGFyYW1ldGVyW1xcJ0FyaWEtTGFiZWxcXCddJyxcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlTWFwKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBsYW5nVmFsID0gdGhpcy5zd2l0Y2hMYW5nKHZhbHVlLCBkYXRhLCBjaGFuZ2VNYXApO1xyXG4gICAgICAgIC8vICAgICBpZiAobGFuZ1ZhbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc1tsYW5nVmFsLmtleV0gPSBsYW5nVmFsLnZhbDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgKGNoYW5nZXMuZmllbGREYXRhICYmIGNoYW5nZXMucm9vdERhdGEgJiYgY2hhbmdlcy5yb290RGF0YS5jdXJyZW50VmFsdWUubGFuZ0NoYW5nZWQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy50b2dnbGVMYW5ndWFnZShjaGFuZ2VzLmZpZWxkRGF0YS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNFZGl0YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHQ8bGFiZWwgZm9yPVwie3todG1sX2lkIH19XCI+XHJcblx0XHRcdFx0PHNwYW4+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fTwvc3Bhbj48c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG5cdFx0XHRcdDxidXR0b24gKm5nSWY9XCJoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0b1wiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwIFwiPmk8L2J1dHRvbj5cclxuXHRcdFx0PC9sYWJlbD5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFtYXRUUDsgZWxzZSBtYXRlcmlhbElucHV0XCI+XHJcblx0XHRcdFx0PCEtLSA8bmdiLXRpbWVwaWNrZXIgWyhuZ01vZGVsKV09XCJ0aW1lXCIgW2F0dHIuaWRdPVwiaHRtbF9pZFwiIChuZ01vZGVsQ2hhbmdlKT1cIm9uU2Vzc2lvbkRhdGFVcGRhdGVkKCRldmVudClcIlxyXG5cdFx0XHRcdFx0KGJsdXIpPVwib25TZXNzaW9uRGF0YVVwZGF0ZWQoJGV2ZW50KVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiICNmaWVsZE5hbWU9XCJuZ01vZGVsXCIgW3JlcXVpcmVkXT1cImlzTWFuZGF0b3J5XCJcclxuXHRcdFx0XHRcdFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfbmFtZSxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3NpemUsXHJcbiAgICAgICAgICAgICdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcbiAgICAgICAgICAgICdmb250LWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcbiAgICAgICAgICAgICdib3JkZXItY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYm9yZGVyX2NvbG9yLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX2hlaWdodCxcclxuICAgICAgICAgICAgJ3dpZHRoJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX3dpZHRoLFxyXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5iYWNrZ3JvdW5kX2NvbG9yXHJcbiAgICAgICAgICB9XCJcclxuXHRcdCAgXHRcdFx0cGxhY2Vob2xkZXI9XCJ7e2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0fX1cIlxyXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG5cdFx0XHRcdFx0W3NlY29uZHNdPVwic2Vjb25kc1wiIFtob3VyU3RlcF09XCJ0aW1lQ29uZmlnLmhvdXJcIiBbbWludXRlU3RlcF09XCJ0aW1lQ29uZmlnLm1pbnV0ZVwiXHJcblx0XHRcdFx0XHRbc2Vjb25kU3RlcF09XCJ0aW1lQ29uZmlnLnNlY29uZFwiIFttZXJpZGlhbl09XCJtZXJpZGlhblwiIG1heGxlbmd0aD1cIjJcIj48L25nYi10aW1lcGlja2VyPiAtLT5cclxuXHRcdFx0XHRcdDxuZ2ItdGltZXBpY2tlciBbKG5nTW9kZWwpXT1cInRpbWVcIiBbYXR0ci5pZF09XCJodG1sX2lkXCIgKG5nTW9kZWxDaGFuZ2UpPVwib25TZXNzaW9uRGF0YVVwZGF0ZWQoJGV2ZW50KVwiXHJcblx0XHRcdFx0XHQoYmx1cik9XCJvblNlc3Npb25EYXRhVXBkYXRlZCgkZXZlbnQpXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgI2ZpZWxkTmFtZT1cIm5nTW9kZWxcIiBbcmVxdWlyZWRdPVwiaXNNYW5kYXRvcnlcIlxyXG5cdFx0XHRcdFx0W25nU3R5bGVdPVwie1xyXG4gICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG4gICAgICAgICAgICAnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuICAgICAgICAgICAgJ2ZvbnQtc3R5bGUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zdHlsZSxcclxuICAgICAgICAgICAgJ2ZvbnQtY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvcixcclxuICAgICAgICAgICAgJ2JvcmRlci1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5ib3JkZXJfY29sb3IsXHJcbiAgICAgICAgICAgICdoZWlnaHQnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfaGVpZ2h0LFxyXG4gICAgICAgICAgICAnd2lkdGgnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3JcclxuICAgICAgICAgIH1cIlxyXG5cdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG5cdFx0XHRcdFx0W3NlY29uZHNdPVwic2Vjb25kc1wiIFtob3VyU3RlcF09XCJ0aW1lQ29uZmlnLmhvdXJcIiBbbWludXRlU3RlcF09XCJ0aW1lQ29uZmlnLm1pbnV0ZVwiXHJcblx0XHRcdFx0XHRbc2Vjb25kU3RlcF09XCJ0aW1lQ29uZmlnLnNlY29uZFwiIFttZXJpZGlhbl09XCJtZXJpZGlhblwiIG1heGxlbmd0aD1cIjJcIj48L25nYi10aW1lcGlja2VyPlxyXG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImVycm9yTWVzc2FnZTsgY29udGV4dDp7ZmllbGROYW1lOmZpZWxkTmFtZX1cIj48L25nLXRlbXBsYXRlPlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PG5nLXRlbXBsYXRlICNtYXRlcmlhbElucHV0PlxyXG5cdFx0XHRcdDxpbnB1dCAjZmllbGROYW1lPVwibmdNb2RlbFwiIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIFtuZ3hUaW1lcGlja2VyXT1cInBpY2tlclwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiXHJcblx0XHRcdFx0XHRbdmFsdWVdPVwiaW5wdXRWYWx1ZVwiIFthdHRyLmlkXT1cImh0bWxfaWRcIiBbZm9ybWF0XT1cIm1hdFRwRm9ybWF0XCIgcmVhZG9ubHkgIHBsYWNlaG9sZGVyPVwie3tmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dH19XCJcclxuXHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuXHRcdFx0XHRcdFtyZXF1aXJlZF09XCJpc01hbmRhdG9yeVwiIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfbmFtZSxcclxuICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3NpemUsXHJcbiAgICAgICAgICAgICdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcbiAgICAgICAgICAgICdmb250LWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcbiAgICAgICAgICAgICdib3JkZXItY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYm9yZGVyX2NvbG9yLFxyXG4gICAgICAgICAgICAnaGVpZ2h0JzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX2hlaWdodCxcclxuICAgICAgICAgICAgJ3dpZHRoJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX3dpZHRoLFxyXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5iYWNrZ3JvdW5kX2NvbG9yXHJcbiAgICAgICAgICB9XCI+XHJcblx0XHRcdFx0PG5neC1tYXRlcmlhbC10aW1lcGlja2VyLXRvZ2dsZSBbZm9yXT1cInBpY2tlclwiPjwvbmd4LW1hdGVyaWFsLXRpbWVwaWNrZXItdG9nZ2xlPlxyXG5cdFx0XHRcdDxuZ3gtbWF0ZXJpYWwtdGltZXBpY2tlciAjcGlja2VyICh0aW1lU2V0KT1cIm9uU2Vzc2lvbkRhdGFVcGRhdGVkKCRldmVudClcIj48L25neC1tYXRlcmlhbC10aW1lcGlja2VyPlxyXG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImVycm9yTWVzc2FnZTsgY29udGV4dDp7ZmllbGROYW1lOmZpZWxkTmFtZX1cIj5cclxuXHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG48bmctdGVtcGxhdGUgI2Vycm9yTWVzc2FnZSBsZXQtZmllbGROYW1lPSdmaWVsZE5hbWUnPlxyXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJtdWx0aXBsZUVycm9yTWVzc2FnZTsgZWxzZSBzaW5nbGVFcnJvck1lc3NhZ2VcIj5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcblx0XHRcdFx0Km5nSWY9XCJmaWVsZE5hbWUuaW52YWxpZCAmJiAoZmllbGROYW1lLmRpcnR5IHx8IGZpZWxkTmFtZS50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCApXCI+XHJcblx0XHRcdFx0PGRpdiAqbmdJZj1cImZpZWxkTmFtZT8uZXJyb3JzLnJlcXVpcmVkXCI+XHJcblx0XHRcdFx0XHQ8cCAqbmdJZj1cImlzTWFuZGF0b3J5ICYmIG1lc3NhZ2UudHlwZSA9PSAnTWFuZGF0b3J5J1wiXHJcblx0XHRcdFx0XHRcdFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHR7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PGRpdiAqbmdJZj1cImZpZWxkTmFtZT8uZXJyb3JzLm1pbmxlbmd0aFwiPlxyXG5cdFx0XHRcdFx0PHAgKm5nSWY9XCJtZXNzYWdlLnR5cGUgPT0gJ21pbmxlbmd0aCdcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxkaXYgKm5nSWY9XCJmaWVsZE5hbWU/LmVycm9ycy5wYXR0ZXJuXCI+XHJcblx0XHRcdFx0XHQ8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnUmVnZXgnXCIgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuXHRcdDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG5cdFx0XHQqbmdJZj1cImZpZWxkTmFtZS5pbnZhbGlkICYmIChmaWVsZE5hbWUuZGlydHkgfHwgZmllbGROYW1lLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KVwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiZmllbGROYW1lPy5lcnJvcnMucmVxdWlyZWQgfHwgZmllbGROYW1lPy5lcnJvcnMubWlubGVuZ3RoIHx8IGZpZWxkTmFtZT8uZXJyb3JzLnBhdHRlcm5cIj5cclxuXHRcdFx0XHQ8cCAqbmdJZj1cImlzTWFuZGF0b3J5XCIgW25nU3R5bGVdPVwieydjb2xvcic6IGVycm9yTWVzc2FnZURhdGEuY29sb3J9XCI+XHJcblx0XHRcdFx0XHR7e2Vycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy10ZW1wbGF0ZT5cclxuXHJcblx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIj5cclxuXHRcdFx0PGRpdj5cclxuXHRcdFx0XHQ8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuIl19