import { Component, Input, ViewChild, ElementRef, EventEmitter } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { debounceTime, filter, Subject, takeUntil } from 'rxjs';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule, NgStyle } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../services/shared-events-service.service";
import * as i3 from "../../services/internal-cee-emitter-service.service";
import * as i4 from "../../services/cee-api-service.service";
import * as i5 from "../../models/app-data/app-data.service";
import * as i6 from "../../models/api-data/api-data.service";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "@angular/router";
import * as i9 from "@angular/material/dialog";
import * as i10 from "@angular/material/snack-bar";
import * as i11 from "@angular/common/http";
import * as i12 from "@angular/material/form-field";
import * as i13 from "@angular/forms";
import * as i14 from "@angular/material/select";
import * as i15 from "@angular/material/core";
import * as i16 from "@angular/common";
import * as i17 from "../../directives/tooltip/tooltip.directive";
import * as i18 from "angular2-multiselect-dropdown";
const _c0 = ["fieldName"];
const _c1 = ["selectField"];
const _c2 = ["ang2SelectField"];
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, color: a3, "border-color": a4, height: a5, width: a6, "background-color": a7 });
const _c4 = a0 => ({ fieldName: a0 });
const _c5 = a0 => ({ "color": a0 });
function CeePickerComponent_div_0_ng_container_1_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 18);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_container_3_label_1_Template, 2, 1, "label", 15)(2, CeePickerComponent_div_0_ng_container_1_ng_container_3_label_2_Template, 1, 1, "label", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeePickerComponent_div_0_ng_container_1_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 19);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeePickerComponent_div_0_ng_container_1_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 20);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_option_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(opt_r3));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.commonUtil.getValue(opt_r3), "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_8_ng_template_0_Template(rf, ctx) { }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_8_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 21)(2, "select", 22, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_Template_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r0.fieldValue, $event) || (ctx_r0.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_Template_select_change_2_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.getUpdatedValue()); });
    i0.ɵɵelementStart(5, "option", 23);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_option_7_Template, 2, 2, "option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_8_Template, 1, 0, null, 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldName_r4 = i0.ɵɵreference(4);
    i0.ɵɵnextContext(2);
    const errorContainer_r5 = i0.ɵɵreference(12);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate2("custom-select ", ctx_r0.isCustomClass && ctx_r0.custom_class_name ? ctx_r0.custom_class_name[0] : "", " ", !ctx_r0.valid || fieldName_r4.invalid && ctx_r0.isMandatory && (fieldName_r4.dirty || fieldName_r4.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(14, _c3, ctx_r0.fieldData.field_style.font_name, ctx_r0.fieldData.field_style.font_size, ctx_r0.fieldData.field_style.font_style, ctx_r0.fieldData.field_style.font_color, ctx_r0.fieldData.field_style.border_color, ctx_r0.fieldData.field_style.field_height, ctx_r0.fieldData.field_style.field_width, ctx_r0.fieldData.field_style.background_color))("disabled", !ctx_r0.isEditable);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.fieldValue);
    i0.ɵɵproperty("required", ctx_r0.isMandatory);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"].replace("%value%", ctx_r0.fieldValue) : "Select a " + ctx_r0.fieldData.field_label)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.placeholder_text);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.pickerValues);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", errorContainer_r5)("ngTemplateOutletContext", i0.ɵɵpureFunction1(23, _c4, fieldName_r4));
} }
function CeePickerComponent_div_0_ng_container_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_container_6_ng_container_1_Template, 9, 25, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const angularMultiselect_r6 = i0.ɵɵreference(10);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.additionalParameter["CEE_Enable_Search_Filter"] || ctx_r0.additionalParameter["CEE_Enable_Search_Filter"] && ctx_r0.additionalParameter["CEE_Enable_Search_Filter"] == "false")("ngIfElse", angularMultiselect_r6);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r8 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r8.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r8.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div");
    i0.ɵɵtemplate(2, CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_div_1_p_2_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r8.type == "Mandatory");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_div_1_Template, 3, 1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldName_r9 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.valid && fieldName_r9.dirty);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 21)(1, "angular2-multiselect", 27, 5);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.selectedItems, $event) || (ctx_r0.selectedItems = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onSelect_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onItemSelect($event)); })("onDeSelect", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onDeSelect_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.OnItemDeSelect($event)); })("onSelectAll", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onSelectAll_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onSelectAll($event)); })("onDeSelectAll", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onDeSelectAll_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onDeSelectAll($event)); })("onClose", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_onClose_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onMultiselectClicked($event)); })("click", function CeePickerComponent_div_0_ng_container_1_ng_template_7_Template_angular2_multiselect_click_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onDropdownClick($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CeePickerComponent_div_0_ng_container_1_ng_template_7_div_4_Template, 2, 1, "div", 28);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.dropdownList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.selectedItems);
    i0.ɵɵproperty("settings", ctx_r0.dropdownSettings)("title", ctx_r0.multiselectTooltip);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"].replace("%value%", ctx_r0.fieldValue) : "Select a " + ctx_r0.fieldData.field_label)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r11 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r11.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r11.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30)(1, "div");
    i0.ɵɵtemplate(2, CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_div_1_p_2_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const message_r11 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r11.type == "Mandatory");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_div_1_Template, 3, 1, "div", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldName_r12 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.valid && fieldName_r12.dirty);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "angular2-multiselect", 27, 5);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.selectedItems, $event) || (ctx_r0.selectedItems = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onSelect", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onSelect_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onItemSelect($event)); })("onDeSelect", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onDeSelect_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.OnItemDeSelect($event)); })("onSelectAll", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onSelectAll_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onSelectAll($event)); })("onDeSelectAll", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onDeSelectAll_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onDeSelectAll($event)); })("onClose", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_onClose_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onMultiselectClicked($event)); })("click", function CeePickerComponent_div_0_ng_container_1_ng_template_9_Template_angular2_multiselect_click_0_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onDropdownClick($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeePickerComponent_div_0_ng_container_1_ng_template_9_div_3_Template, 2, 1, "div", 28);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("data", ctx_r0.dropdownList);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.selectedItems);
    i0.ɵɵproperty("settings", ctx_r0.dropdownSettings)("title", ctx_r0.multiselectTooltip);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"].replace("%value%", ctx_r0.fieldValue) : "Select a " + ctx_r0.fieldData.field_label)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r13.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r13.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r13.type == "Mandatory");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r13.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r13.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r13.type == "minlength");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r13.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r13.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r13 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r13.type == "Regex");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_1_Template, 2, 1, "div", 12)(2, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_2_Template, 2, 1, "div", 12)(3, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_div_3_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldName_r14 = i0.ɵɵnextContext(3).fieldName;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext && !ctx_r0.isEditable && !ctx_r0.fieldValue || fieldName_r14.errors && (fieldName_r14 == null ? null : fieldName_r14.errors.required));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r14.errors && (fieldName_r14 == null ? null : fieldName_r14.errors.minlength));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r14.errors && (fieldName_r14 == null ? null : fieldName_r14.errors.pattern));
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldName_r14 = i0.ɵɵnextContext(2).fieldName;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext && !ctx_r0.isEditable || fieldName_r14.invalid && (fieldName_r14.dirty || fieldName_r14.touched || ctx_r0.showErrorOnNext));
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_ng_container_1_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(7);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_div_1_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldName_r14 = i0.ɵɵnextContext(2).fieldName;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (fieldName_r14 == null ? null : fieldName_r14.errors.required) || (fieldName_r14 == null ? null : fieldName_r14.errors.minlength) || (fieldName_r14 == null ? null : fieldName_r14.errors.pattern));
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_div_0_Template, 2, 1, "div", 29);
} if (rf & 2) {
    const fieldName_r14 = i0.ɵɵnextContext().fieldName;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", fieldName_r14.invalid && (fieldName_r14.dirty || fieldName_r14.touched || ctx_r0.showErrorOnNext));
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30)(2, "div")(3, "p", 32);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r15 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, item_r15.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r15.value.message_text, "");
} }
function CeePickerComponent_div_0_ng_container_1_ng_template_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_0_Template, 2, 1, "ng-container", 9)(1, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_template_1_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(3, CeePickerComponent_div_0_ng_container_1_ng_template_11_ng_container_3_Template, 5, 4, "ng-container", 28);
    i0.ɵɵpipe(4, "keyvalue");
} if (rf & 2) {
    const singleErrorMessage_r16 = i0.ɵɵreference(2);
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r16);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(4, 3, ctx_r0.showComparisonError));
} }
function CeePickerComponent_div_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 10)(2, "div", 11);
    i0.ɵɵtemplate(3, CeePickerComponent_div_0_ng_container_1_ng_container_3_Template, 3, 2, "ng-container", 12)(4, CeePickerComponent_div_0_ng_container_1_span_4_Template, 2, 0, "span", 13)(5, CeePickerComponent_div_0_ng_container_1_button_5_Template, 2, 2, "button", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeePickerComponent_div_0_ng_container_1_ng_container_6_Template, 2, 2, "ng-container", 9)(7, CeePickerComponent_div_0_ng_container_1_ng_template_7_Template, 5, 7, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor)(9, CeePickerComponent_div_0_ng_container_1_ng_template_9_Template, 4, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(11, CeePickerComponent_div_0_ng_container_1_ng_template_11_Template, 5, 5, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const IsMultipleSelect_r17 = i0.ɵɵreference(8);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.additionalParameter["MultipleSelect"] || ctx_r0.additionalParameter["MultipleSelect"] != "true")("ngIfElse", IsMultipleSelect_r17);
} }
function CeePickerComponent_div_0_ng_template_2_mat_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeePickerComponent_div_0_ng_template_2_mat_option_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r19 = ctx.$implicit;
    const i_r20 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate("value", ctx_r0.commonUtil.getID(opt_r19));
    i0.ɵɵattribute("aria-label", ctx_r0.optionsAriaLabel ? ctx_r0.optionsAriaLabel[i_r20] : "Select " + opt_r19);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.commonUtil.getValue(opt_r19), "");
} }
function CeePickerComponent_div_0_ng_template_2_button_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 35);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r21.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r21.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r21.type == "Mandatory");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r21.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r21.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_2_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r21.type == "minlength");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_3_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.returnMessageData(message_r21.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r21.code).message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_3_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r21 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r21.type == "Regex");
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_1_Template, 2, 1, "div", 12)(2, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_2_Template, 2, 1, "div", 12)(3, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_div_3_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(3);
    const fieldName_r22 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext && !ctx_r0.isEditable || fieldName_r22.errors && (fieldName_r22 == null ? null : fieldName_r22.errors.required));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r22.errors && (fieldName_r22 == null ? null : fieldName_r22.errors.minlength));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldName_r22.errors && (fieldName_r22 == null ? null : fieldName_r22.errors.pattern));
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_div_1_Template, 4, 3, "div", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const fieldName_r22 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext && !ctx_r0.isEditable || fieldName_r22.invalid && (fieldName_r22.dirty || fieldName_r22.touched || ctx_r0.showErrorOnNext));
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 28);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 32);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_div_1_p_1_Template, 2, 4, "p", 31);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 30);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_div_1_Template, 2, 1, "div", 12);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext(2);
    const fieldName_r22 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (fieldName_r22 == null ? null : fieldName_r22.errors.required) || (fieldName_r22 == null ? null : fieldName_r22.errors.minlength) || (fieldName_r22 == null ? null : fieldName_r22.errors.pattern));
} }
function CeePickerComponent_div_0_ng_template_2_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeePickerComponent_div_0_ng_template_2_ng_template_8_div_0_Template, 2, 1, "div", 29);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const fieldName_r22 = i0.ɵɵreference(4);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", fieldName_r22.invalid && (fieldName_r22.dirty || fieldName_r22.touched || ctx_r0.showErrorOnNext));
} }
function CeePickerComponent_div_0_ng_template_2_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 30)(2, "div")(3, "p", 32);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r23 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c5, item_r23.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r23.value.message_text, "");
} }
function CeePickerComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field");
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_template_2_mat_label_1_Template, 2, 1, "mat-label", 12);
    i0.ɵɵelementStart(2, "mat-select", 33, 4);
    i0.ɵɵtwoWayListener("ngModelChange", function CeePickerComponent_div_0_ng_template_2_Template_mat_select_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.fieldValue, $event) || (ctx_r0.fieldValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("selectionChange", function CeePickerComponent_div_0_ng_template_2_Template_mat_select_selectionChange_2_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.getUpdatedValue()); })("openedChange", function CeePickerComponent_div_0_ng_template_2_Template_mat_select_openedChange_2_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.toggleModalCssClass()); });
    i0.ɵɵtemplate(5, CeePickerComponent_div_0_ng_template_2_mat_option_5_Template, 2, 3, "mat-option", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, CeePickerComponent_div_0_ng_template_2_button_6_Template, 2, 2, "button", 34);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CeePickerComponent_div_0_ng_template_2_ng_container_7_Template, 2, 1, "ng-container", 9)(8, CeePickerComponent_div_0_ng_template_2_ng_template_8_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(10, CeePickerComponent_div_0_ng_template_2_ng_container_10_Template, 5, 4, "ng-container", 28);
    i0.ɵɵpipe(11, "keyvalue");
} if (rf & 2) {
    const fieldName_r22 = i0.ɵɵreference(4);
    const singleErrorMessage_r24 = i0.ɵɵreference(9);
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("", ctx_r0.isCustomClass && ctx_r0.custom_class_name ? ctx_r0.custom_class_name[0] : "", " ", !ctx_r0.valid || fieldName_r22.invalid && ctx_r0.isMandatory && (fieldName_r22.dirty || fieldName_r22.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r0.fieldData.placeholder_text);
    i0.ɵɵproperty("value", ctx_r0.fieldValue)("ngStyle", ctx_r0.fieldStyle)("disabled", !ctx_r0.isEditable);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.fieldValue);
    i0.ɵɵproperty("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"].replace("%value%", ctx_r0.fieldValue) : "Select a " + ctx_r0.fieldData.field_label)("required", ctx_r0.isMandatory)("multiple", ctx_r0.additionalParameter["MultipleSelect"] && ctx_r0.additionalParameter["MultipleSelect"] == "true");
    i0.ɵɵattribute("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.pickerValues);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r24);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(11, 19, ctx_r0.showComparisonError));
} }
function CeePickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 8);
    i0.ɵɵtemplate(1, CeePickerComponent_div_0_ng_container_1_Template, 13, 5, "ng-container", 9)(2, CeePickerComponent_div_0_ng_template_2_Template, 12, 21, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const IsMaterial_r25 = i0.ɵɵreference(3);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.cssClasses);
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.is_material)("ngIfElse", IsMaterial_r25);
} }
export class CeePickerComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    ceeApiService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    router;
    dialog;
    snackBar;
    http;
    cdRef;
    fieldName;
    selectField;
    ang2SelectField;
    stepId;
    fieldData;
    keepState = false;
    primaryKeyIndex;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    dependentSubscriber$;
    pickerValues = [];
    html_id = '';
    modalGenericCssClass = '';
    custom_class_name;
    optionsAriaLabel = [];
    dropdownList = [];
    selectedItems = [];
    dropdownSettings = {};
    primaryKeyVal = '';
    labelKeyVal = '';
    classList = "form-control multi-select ";
    multiselectTooltip = "";
    noneditablePlaceholder = "";
    fieldPlaceholder = "";
    isValidDataStore = false;
    isValueSetFromRowData = false;
    timeoutIds = [];
    // for api search
    isApiSearchEnabled = false;
    searchMinCharacters = 0;
    searchDebounceTime = 300;
    searchSubject = new Subject();
    destroy$ = new Subject();
    requestApiKeyForSearch = '';
    searchInputElement = null;
    boundOnSearchInput = this.onSearchInput.bind(this);
    limitForSearch = 10;
    limitForSearchApplicable = false;
    apiKeyForDisplayValue = "";
    fieldDisplayValue = null;
    clearButton;
    internalAPIResponseEmitter = new EventEmitter();
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, appDataService, apiDataService, wfeStepLoaderService, router, dialog, snackBar, http, cdRef) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.ceeApiService = ceeApiService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdRef = cdRef;
    }
    ngOnInit() {
        // console.log("Before filed data: ",this.fieldData.html_id,"row data: ",this.rowData.html_id)
        // this.fieldData.html_id = this.rowData.html_id;
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.classList = "form-control multi-select valid ";
        this.modalGenericCssClass = 'modal-picker-' + this.stepId;
        this.isApiSearchEnabled = this.additionalParameter['CEE_Enable_API_Search'] === 'true';
        if (this.isApiSearchEnabled) {
            this.initializeApiSearchSettings();
        }
        this.dependencyHandler('onLoad');
        this.fieldPlaceholder = this.fieldData.placeholder_text;
        this.noneditablePlaceholder = this.additionalParameter['CEE_Noneditable_Placeholder'] ? this.additionalParameter['CEE_Noneditable_Placeholder'] : "";
        if (this.additionalParameter.hasOwnProperty('CEE_Store_Valid_Data')) {
            this.isValidDataStore = this.additionalParameter['CEE_Store_Valid_Data'].toLowerCase() === 'true' ? true : false;
        }
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
            }
        });
        this.optionsAriaLabel = this.additionalParameter['Options-Aria-Label'] ? this.additionalParameter['Options-Aria-Label'].split("|") : [];
        // console.log("filed data: ",this.fieldData.html_id,"row data: ",this.rowData.html_id)
        if (this.rowData && this.rowData['externalApiOptionValue'] && this.rowData['externalApiOptionValue'].length > 0) {
            this.additionalParameter['externalApiOptionValue'] = this.rowData['externalApiOptionValue'].join('||');
            // console.log("rowdata external val: ",this.rowData['externalApiOptionValue'])
        }
        // this.dropdownList = [];
        this.selectedItems = [];
        this.primaryKeyVal = this.getValueFromExpternalApi(0) || 'id';
        this.labelKeyVal = this.getValueFromExpternalApi(1) || 'itemName';
        if (Array.isArray(this.fieldValue) || (this.rowData && Array.isArray(this.rowData.value))) {
            const sourceArray = Array.isArray(this.fieldValue) ? this.fieldValue : this.rowData.value;
            const primaryKey = this.primaryKeyVal || 'id';
            const timeoutId = setTimeout(() => {
                this.selectedItems = [];
                sourceArray.forEach(element => {
                    const matchItem = this.dropdownList.find(obj => obj[primaryKey] === element);
                    if (matchItem) {
                        this.selectedItems.push(matchItem);
                    }
                });
            }, 10);
            this.timeoutIds.push(timeoutId);
            this.fieldValue = this.rowData?.value;
            this.updateFieldData(this.fieldValue, this.valid);
        }
        let listOfItems = [];
        this.selectedItems.forEach(el => {
            if (el && el.hasOwnProperty(this.labelKeyVal)) {
                listOfItems.push(el[this.labelKeyVal]);
            }
        });
        this.multiselectTooltip = listOfItems.join(', ');
        this.dropdownSettings = {
            singleSelection: !this.additionalParameter['MultipleSelect'] || (this.additionalParameter['MultipleSelect'] && this.additionalParameter['MultipleSelect'] == 'false') ? true : false,
            text: this.fieldData.placeholder_text ? this.fieldData.placeholder_text : 'Select  Item',
            enableCheckAll: this.additionalParameter['CEE_Enable_Check_All'] && this.additionalParameter['CEE_Enable_Check_All'] != 'false' ? true : false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] != 'false' ? true : false,
            classes: this.classList,
            badgeShowLimit: this.additionalParameter['CEE_Badge_Show_Limit'] ? Number(this.additionalParameter['CEE_Badge_Show_Limit']) : 1,
            labelKey: this.labelKeyVal,
            primaryKey: this.primaryKeyVal,
            searchBy: [this.labelKeyVal],
            disabled: !this.isEditable
        };
        // console.log("SelectedItems: ",this.selectedItems)
        // console.log("primaryKeyVal: ",this.primaryKeyVal)
        // console.log("labelKeyVal: ",this.labelKeyVal)
        // console.log("listOfItems: ",listOfItems)
        // console.log("placeholder: ",this.fieldData.placeholder_text)
        this.variableObject['emitOnDataSetOrUpdatedForSection'] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
            // console.log("fieldData: ",this.fieldData);
            // console.log("res: ",res);
            let isConditionExist = false;
            if (this.fieldData.is_editable == 2 && this.fieldData.editable_condition && this.fieldData.editable_condition.condition && this.fieldData.editable_condition.condition.length > 0 && this.fieldData.editable_condition.condition.filter(x => x.field == res.apiKey).length > 0) {
                isConditionExist = true;
            }
            else if (this.fieldData.is_display == 2 && this.fieldData.display_condition && this.fieldData.display_condition.condition && this.fieldData.display_condition.condition.length > 0 && this.fieldData.display_condition.condition.filter(x => x.field == res.apiKey).length > 0) {
                isConditionExist = true;
            }
            else if (this.fieldData.is_mandatory == 2 && this.fieldData.mandatory_condition && this.fieldData.mandatory_condition.condition && this.fieldData.mandatory_condition.condition.length > 0 && this.fieldData.mandatory_condition.condition.filter(x => x.field == res.apiKey).length > 0) {
                isConditionExist = true;
            }
            if ((this.fieldData.is_editable == 2 || this.fieldData.is_display == 2 || this.fieldData.is_mandatory == 2) && isConditionExist) {
                // this.assignPickerOptionValues();
                // console.log("isConditionExist: ",isConditionExist);
                this.dropdownSettings = {
                    singleSelection: !this.additionalParameter['MultipleSelect'] || (this.additionalParameter['MultipleSelect'] && this.additionalParameter['MultipleSelect'] == 'false') ? true : false,
                    text: this.fieldData.placeholder_text ? this.fieldData.placeholder_text : 'Select  Item',
                    enableCheckAll: this.additionalParameter['CEE_Enable_Check_All'] && this.additionalParameter['CEE_Enable_Check_All'] != 'false' ? true : false,
                    selectAllText: 'Select All',
                    unSelectAllText: 'UnSelect All',
                    enableSearchFilter: this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] != 'false' ? true : false,
                    classes: this.classList,
                    badgeShowLimit: this.additionalParameter['CEE_Badge_Show_Limit'] ? Number(this.additionalParameter['CEE_Badge_Show_Limit']) : 1,
                    labelKey: this.labelKeyVal,
                    primaryKey: this.primaryKeyVal,
                    searchBy: [this.labelKeyVal],
                    disabled: !this.isEditable
                };
            }
        });
        if (this.isApiSearchEnabled) {
            this.variableObject['isApiSearchEnabled' + this.appData.id] = this.searchSubject.pipe(debounceTime(this.searchDebounceTime), filter(term => term.length >= this.searchMinCharacters || term.length === 0), takeUntil(this.destroy$)).subscribe(term => {
                this.performSearch(term);
            });
        }
    }
    initializeApiSearchSettings() {
        // Initialize search with empty term
        this.updateDataOnChange('');
        // Set search configuration with defaults
        const params = this.additionalParameter;
        this.searchMinCharacters = parseInt(params['CEE_Search_Min_Characters']) || 0;
        this.searchDebounceTime = parseInt(params['CEE_Search_Debounce_Time']) || 300;
        this.requestApiKeyForSearch = params['CEE_Search_Request_api_Key_For_Search_input'] || '';
        this.apiKeyForDisplayValue = params['CEE_Search_response_api_key_for_display_label'] || '';
        // Handle search limit configuration
        this.setupSearchLimitConfig(params['CEE_Search_limit_Config']);
        this.variableObject['internalEmmitter' + this.appData.id] = this.internalAPIResponseEmitter.subscribe((res) => {
            if (Array.isArray(res)) {
                this.onAPICallback(res[0]);
            }
            else {
                this.onAPICallback(res);
            }
        });
    }
    setupSearchLimitConfig(limitConfig) {
        if (!limitConfig)
            return;
        const [limitForSearchApplicable, limit, limitKey] = limitConfig.split('|');
        this.limitForSearch = parseInt(limit) || 10;
        this.limitForSearchApplicable = limitForSearchApplicable === 'true';
        if (this.limitForSearchApplicable && limitKey) {
            this.setLimitApiData(limitKey);
        }
    }
    setLimitApiData(limitKey) {
        const apiData = {
            id: limitKey,
            apiUrl: '',
            apiKey: limitKey,
            value: this.limitForSearch
        };
        this.apiDataService.setApiData(apiData);
    }
    // returns css classes for field wrapper
    get cssClasses() {
        var clsName = this.isCustomClass && this.custom_class_name?.length >= 2 ? this.custom_class_name[1] : '';
        if (this.isSafariClass) {
            clsName += 'safari-visibility-wrapper ' + (this.isVisible ? 'safari-visible' : 'safari-hidden');
        }
        return clsName;
    }
    /**
     * Retrieves a value (primary key or label key) from the `externalApiOptionValue` parameter.
     *
     * @param {number} i - The index to determine which value to retrieve:
     *                     0 for the primary key, 1 for the label key.
     * @returns {string | undefined} - The extracted value from the `externalApiOptionValue` parameter,
     *                                  or `undefined` if the value is not found or invalid.
     *
     * The `externalApiOptionValue` is expected to be a string in the format:
     * "key1.key2||key3.key4", where `||` separates the primary key and label key,
     * and `.` separates nested keys.
     *
     * Example:
     * If `externalApiOptionValue` is "data.id||data.name":
     * - Calling `getValueFromExpternalApi(0)` will return "id".
     * - Calling `getValueFromExpternalApi(1)` will return "name".
     */
    getValueFromExpternalApi(i = 0) {
        let extApiValue = this.additionalParameter['externalApiOptionValue'];
        if (extApiValue) {
            const parts = extApiValue.split('||');
            if (parts.length > 0) {
                const subParts = parts[i]?.split('.');
                if (subParts?.length > 0) {
                    return subParts[subParts.length - 1];
                }
            }
        }
        return undefined;
    }
    processPickerSetting(value = false) {
        if (!value) {
            this.fieldName.control.markAsDirty();
        }
        this.classList = "form-control multi-select";
        if (this.isCustomClass && this.custom_class_name) {
            this.classList = this.classList + ' ' + this.custom_class_name[0];
        }
        if (!this.valid || (this.fieldName && this.fieldName.invalid && this.isMandatory && (this.fieldName.dirty || this.fieldName.touched || this.showErrorOnNext))) {
            this.classList = this.classList + ' invalid';
        }
        else {
            this.classList = this.classList + ' valid';
        }
        // console.log("Class List: ", this.classList)
        this.dropdownSettings = {
            singleSelection: !this.additionalParameter['MultipleSelect'] || (this.additionalParameter['MultipleSelect'] && this.additionalParameter['MultipleSelect'] == 'false') ? true : false,
            text: this.fieldData.placeholder_text ? this.fieldData.placeholder_text : 'Select  Item',
            enableCheckAll: this.additionalParameter['CEE_Enable_Check_All'] && this.additionalParameter['CEE_Enable_Check_All'] != 'false' ? true : false,
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            enableSearchFilter: this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] != 'false' ? true : false,
            classes: this.classList,
            badgeShowLimit: this.additionalParameter['CEE_Badge_Show_Limit'] ? Number(this.additionalParameter['CEE_Badge_Show_Limit']) : 1,
            labelKey: this.labelKeyVal,
            primaryKey: this.primaryKeyVal,
            searchBy: [this.labelKeyVal],
            disabled: !this.isEditable
        };
        let listOfItems = [];
        this.selectedItems.forEach(el => {
            if (el && el.hasOwnProperty(this.labelKeyVal)) {
                listOfItems.push(el[this.labelKeyVal]);
            }
        });
        this.multiselectTooltip = listOfItems.join(', ');
        // console.log("this.valid: ", this.valid)
        // console.log("this.messages: ", this.messages)
        if (this.fieldName) {
            this.fieldName.control.updateValueAndValidity();
        }
    }
    // this is bound on close event
    onMultiselectClicked(event) {
        this.updateDataOnChange("");
        this.fieldName.control.markAsDirty();
        if (!this.isMandatory || (this.isMandatory && this.selectedItems && Array.isArray(this.selectedItems) && this.selectedItems.length > 0)) {
            this.valid = true;
        }
        else {
            this.valid = false;
        }
        // console.log("onMultiselectClicked: ", this.valid)
        this.updateFieldData(this.fieldValue, this.valid);
        this.processPickerSetting();
    }
    onItemSelect(item) {
        this.changeStoreValues();
        this.processPickerSetting();
    }
    OnItemDeSelect(item) {
        // update mandatory flag in appData if it has changed conditionally
        // this.isMandatory is changed correctly from base class, but appData.mandatory is not updated
        if (this.appData.mandatory != this.isMandatory) {
            this.appData.mandatory = this.isMandatory;
        }
        this.changeStoreValues();
        this.processPickerSetting();
    }
    onSelectAll(items) {
        this.changeStoreValues();
        this.processPickerSetting();
    }
    onDeSelectAll(items) {
        // update mandatory flag in appData if it has changed conditionally
        // this.isMandatory is changed correctly from base class, but appData.mandatory is not updated
        if (this.appData.mandatory != this.isMandatory) {
            this.appData.mandatory = this.isMandatory;
        }
        this.changeStoreValues();
        this.processPickerSetting();
    }
    changeStoreValues() {
        let primaryKey = this.getValueFromExpternalApi() || this.additionalParameter['PrimaryKeyName'] || 'id';
        this.fieldValue = this.selectedItems.map(a => a[primaryKey]);
        // this.valid decides whether to show the inline error message or not
        if (!this.isMandatory || (this.isMandatory && this.fieldValue && Array.isArray(this.fieldValue) && this.fieldValue.length > 0)) {
            this.valid = true;
        }
        else {
            this.valid = false;
        }
        // if fieldValue is [], then
        // setting blank space is necessary to bring in original state for use case of conditional display
        // if [] is set, then it will consider as user has entered value and mandatory check will fail
        // even when field is not visible
        if ((!this.additionalParameter['MultipleSelect'] || (this.additionalParameter['MultipleSelect'] && this.additionalParameter['MultipleSelect'].toLowerCase() != 'true'))
            && (this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'].toLowerCase() == 'true')) {
            this.updateFieldData((this.fieldValue && this.fieldValue.length > 0) ? this.fieldValue[0] : '', this.valid);
        }
        else {
            this.updateFieldData((this.fieldValue && this.fieldValue.length > 0) ? this.fieldValue : '', this.valid);
        }
        this.getUpdatedValue();
        // console.log(this.selectedItems);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    concatData() { }
    ngOnDestroy() {
        this.onViewUnload();
        // Clean up arrays and objects
        this.pickerValues = [];
        this.dropdownList = [];
        this.selectedItems = [];
        this.dropdownSettings = null;
        this.custom_class_name = null;
        this.optionsAriaLabel = [];
        // clear setTimeout
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        // Clean up ViewChild references
        this.fieldName = null;
        this.selectField = null;
        // Clean up event handlers
        if (this.rootData && this.rootData['FieldErrorFunctions'] && this.fieldData) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Clean up any other external references
        if (this.variableObject) {
            Object.keys(this.variableObject).forEach(key => {
                if (this.variableObject[key] && typeof this.variableObject[key].unsubscribe === 'function') {
                    this.variableObject[key].unsubscribe();
                }
            });
        }
        this.destroy$.next();
        this.destroy$.complete();
        this.searchSubject.complete();
        this.removeSearchEventListeners();
        if (this.clearButton) {
            this.clearButton.removeEventListener('click', this.onClearClicked);
        }
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // console.log("_____________>",this.fieldData.html_id)
        // END
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.pickerValues = this.fieldData.possible_values;
        this.assignPickerOptionValues();
        // console.log("on view data init PickerValue: ", this.pickerValues)
        this.updateFieldData(this.fieldValue);
        if (this.rowData) {
            this.setValueFromRowData();
        }
        if (this.additionalParameter['externalApiOptionValue']) {
            const timeoutId = setTimeout(() => {
                let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameter['externalApiOptionValue']));
                const externalApiOptionValue = data
                    ? this.getExternalApiOptionValue(this.additionalParameter['externalApiOptionValue'], data['value'])
                    : null;
                if (!externalApiOptionValue || !Array.isArray(externalApiOptionValue)) {
                    // console.error('Something Went Wrong in Picker !!!');
                    return;
                }
                // Assign values
                this.fieldData.possible_values = externalApiOptionValue;
                this.pickerValues = this.fieldData.possible_values;
                this.assignPickerOptionValues();
                if (!this.pickerValues.length || !this.additionalParameter['default_value'])
                    return;
                if (!this.isValueSetFromRowData) {
                    this.setValueFromDefaultValue(this.additionalParameter['default_value'], data);
                }
                // Update field data
                this.updateFieldData(this.fieldValue);
                // ✅ Add this block to set selectedItems explicitly
                this.selectedItems = [];
                if (this.fieldValue) {
                    if (Array.isArray(this.fieldValue)) {
                        this.fieldValue.forEach(element => {
                            let key = this.primaryKeyVal || 'id';
                            let results = this.dropdownList.filter(obj => obj[key] === element);
                            let matchItem = results.length > 0 ? results[0] : null;
                            if (matchItem && matchItem != null) {
                                this.selectedItems.push(matchItem);
                            }
                        });
                    }
                    else {
                        let results = this.dropdownList.filter(obj => obj[this.primaryKeyVal] === this.fieldValue);
                        let matchItem = results.length > 0 ? results[0] : null;
                        if (matchItem && matchItem != null) {
                            this.selectedItems = [matchItem];
                        }
                    }
                }
                this.cdRef.detectChanges(); // ✅ trigger UI refresh
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
        else {
            if (this.fieldData.possible_values.length > 0) {
                if (this.additionalParameter['default_value'] && this.fieldValue == '') {
                    this.fieldValue = this.commonUtil.getID(this.additionalParameter['default_value']);
                    this.updateFieldData(this.fieldValue);
                }
            }
        }
        this.custom_class_name = this.fieldData.field_style && this.fieldData.field_style.custom_class_name ? this.fieldData.field_style.custom_class_name.split('|') : [];
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                if (this.is_material) {
                    if (this.selectField && typeof this.selectField.focus === "function")
                        this.selectField.focus();
                }
                else {
                    if (document.getElementById(this.fieldData.html_id).querySelector('select'))
                        document.getElementById(this.fieldData.html_id).querySelector('select').focus();
                }
            };
        }
    }
    ngAfterContentChecked() {
        this.cdRef.detectChanges();
    }
    ngAfterViewInit() {
        this.initSelectPicker();
        // Special handling for search filter with default value
        if (this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] != 'false' &&
            this.additionalParameter['default_value'] && this.fieldValue) {
            // Ensure selectedItems reflects the default value after view initialization
            this.assignPickerOptionValues();
            this.cdRef.detectChanges();
        }
        this.cdRef.detectChanges();
    }
    initSelectPicker() {
        if (!this.is_material && $ && $('.multi-select') && $('.multi-select')['selectpicker']) {
            const timeoutId = setTimeout(() => {
                $('.multi-select').selectpicker('destroy');
                $('.multi-select').selectpicker();
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
    }
    setValueFromRowData() {
        if (this.rowData.hasOwnProperty('value')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.data);
            if (Array.isArray(this.rowData.value)) {
                this.pickerValues = this.rowData.value;
                this.assignPickerOptionValues();
            }
            else {
                this.fieldValue = this.rowData && this.rowData.value;
                this.isValueSetFromRowData = true;
                // this.updateFieldData(this.fieldValue);
            }
        }
        if (this.rowData.hasOwnProperty('resIsDiffHandler') && this.rowData.resIsDiffHandler
            && this.rowData.hasOwnProperty('response_api_key')) {
            let val;
            for (const key of this.rowData.response_api_key) {
                val = this.returnValueFromCallback(key);
            }
            if (val) {
                this.fieldValue = val;
                this.isValueSetFromRowData = true;
                this.updateFieldData(this.fieldValue);
            }
        }
    }
    setValueFromDefaultValue(defaultValue, data) {
        if (defaultValue.includes('|')) {
            const [fullApiKey, isDefaultValue, keyName] = defaultValue.split('|');
            const [fulldataApiKey, apiKey] = fullApiKey.split('.');
            const valueData = this.setApiCallBackDataUtil.setApiCallBackData(fulldataApiKey, data['value']);
            const defaultEntity = valueData.find(item => item[apiKey] === isDefaultValue);
            if (defaultEntity) {
                // console.log("Master entity value for default:", defaultEntity.master_entity_value);
                this.fieldValue = this.commonUtil.getID(defaultEntity[keyName]);
            }
            else {
                // console.log("No default entity found");
            }
        }
        else {
            this.fieldValue = this.commonUtil.getID(defaultValue);
        }
    }
    assignPickerOptionValues() {
        this.dropdownList = [];
        this.primaryKeyVal = this.getValueFromExpternalApi() || 'id';
        this.labelKeyVal = this.getValueFromExpternalApi(1) || 'itemName';
        // if in search mode, add previously selected items to picker values, to maintain list
        if (this.isApiSearchEnabled) {
            if (this.selectedItems.length > 0) {
                // console.log("Adding Selected items for search: ", this.selectedItems);
                // convert selected items into OP_VALUE||DISPLAY_VALUE                
                let pvSelected = this.selectedItems.map(item => `${item[this.primaryKeyVal]}||${item[this.labelKeyVal]}`);
                // merge with picker values and remove duplicates
                this.pickerValues = [...new Set([...pvSelected, ...this.pickerValues])];
            }
            else if (this.fieldValue && this.fieldDisplayValue) {
                if (Array.isArray(this.fieldValue)) {
                    // combine both arrays operationValues and apiData (displayValues) with '||'            
                    let pairs = this.fieldValue.map((id, index) => `${id}||${this.fieldDisplayValue[index]}`);
                    // merge with picker values and remove duplicates
                    this.pickerValues = [...new Set([...pairs, ...this.pickerValues])];
                }
                else {
                    let pairs = [`${this.fieldValue}||${this.fieldDisplayValue}`];
                    this.pickerValues = [...new Set([...pairs, ...this.pickerValues])];
                }
            }
        }
        this.pickerValues.forEach(element => {
            let obj = {};
            obj[this.primaryKeyVal] = element.split('||')[0];
            obj[this.labelKeyVal] = element.split('||')[1];
            this.dropdownList.push(obj);
        });
        // console.log("dropdownList: ", this.dropdownList)
        this.selectedItems = [];
        if (this.fieldValue) {
            if (Array.isArray(this.fieldValue)) {
                this.fieldValue.forEach(element => {
                    // console.log(this.additionalParameter['PrimaryKeyName'])
                    let key = this.primaryKeyVal || 'id';
                    let results = this.dropdownList.filter(obj => obj[key] === element);
                    let matchItem = results.length > 0 ? results[0] : null;
                    if (matchItem && matchItem != null) {
                        this.selectedItems.push(matchItem);
                    }
                });
            }
            else {
                // if(this.isValidDataStore){
                //     this.checkIfFieldValueIsExist();
                //     this.changeStoreValues();
                // }
                let results = this.dropdownList.filter(obj => obj[this.primaryKeyVal] === this.fieldValue);
                let matchItem = results.length > 0 ? results[0] : null;
                if (matchItem && matchItem != null) {
                    this.selectedItems = [matchItem];
                }
                else if (this.isValidDataStore) {
                    // if there is no match item, reset field value to show placeholder
                    this.fieldValue = "";
                    this.updateFieldData(this.fieldValue);
                }
            }
        }
        // code for multiselectTooltip
        let listOfItems = [];
        this.selectedItems.forEach(el => {
            if (el && el.hasOwnProperty(this.labelKeyVal)) {
                listOfItems.push(el[this.labelKeyVal]);
            }
        });
        this.multiselectTooltip = listOfItems.join(', ');
    }
    onAPICallback(data) {
        // console.log("onAPICallback Picker: ", this.fieldData.unique_id);
        // throw new Error('Method not implemented.');
        let apiData = null; // contains ids or operational values
        this.fieldDisplayValue = null;
        if (!this.rowData) {
            apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (this.isApiSearchEnabled && this.apiKeyForDisplayValue != '') {
                this.fieldDisplayValue = this.setApiCallBackDataUtil.setApiCallBackData({ "response_api_key": this.apiKeyForDisplayValue }, data);
            }
        }
        else if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            apiData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
        }
        if (apiData !== null) {
            if (Array.isArray(apiData) && this.isSingleApiKey) {
                this.fieldData.possible_values = apiData;
                this.pickerValues = this.fieldData.possible_values;
                this.assignPickerOptionValues();
                this.initSelectPicker();
            }
            else {
                this.fieldValue = apiData;
                this.updateFieldData(this.fieldValue);
                this.assignPickerOptionValues();
                this.cdRef.detectChanges();
            }
        }
        // throw new Error('Method not implemented.');
        // console.log(this.fieldData.unique_id, data);
        // if (!this.rowData) {
        //     const resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        //     if (resData !== null) {
        //         if (Array.isArray(resData) && this.isSingleApiKey) {
        //             this.fieldData.possible_values = resData;
        //             this.pickerValues = this.fieldData.possible_values;
        //             this.assignPickerOptionValues();
        //             this.initSelectPicker();
        //         } else {
        //             this.fieldValue = resData;
        //             this.updateFieldData(this.fieldValue);
        //             this.assignPickerOptionValues();
        //             this.cdRef.detectChanges();
        //         }
        //     }            
        // } else if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
        //     setTimeout(() => {
        //         this.fieldValue = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null
        //         this.updateFieldData(this.fieldValue);
        //     }, 0);
        // }
        //for repeated externalApiOptionValue
        if (this.rowData && this.rowData['externalApiOptionValue'] && this.rowData['externalApiOptionValue'].length > 0) {
            this.additionalParameter['externalApiOptionValue'] = this.rowData['externalApiOptionValue'].join('||');
            // console.log("externalApiOptionValue: ",this.additionalParameter['externalApiOptionValue']);
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        // if(this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
        //     for (const parameter of this.fieldData.additional_parameters) {
        //         if (parameter.parameter_type === 'externalApiOptionValue') {
        //             const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
        //             if (externalApiOptionValue !== null) {
        //                 if (Array.isArray(externalApiOptionValue)) {
        //                     this.fieldData.possible_values = externalApiOptionValue;
        //                     this.pickerValues = this.fieldData.possible_values;
        //                 } else {
        //                     console.error('Something Went Wrong in Picker !!!');
        //                 }
        //             }
        //         }
        //     }
        // }
        if (this.additionalParameter['externalApiOptionValue']) {
            // console.log("call getExternalApiOptionValue");
            const externalApiOptionValue = this.getExternalApiOptionValue(this.additionalParameter['externalApiOptionValue'], data);
            // console.log("getExternalApiOptionValue: ", externalApiOptionValue);
            if (externalApiOptionValue !== null) {
                if (Array.isArray(externalApiOptionValue)) {
                    this.fieldData.possible_values = externalApiOptionValue;
                    this.pickerValues = this.fieldData.possible_values;
                    this.assignPickerOptionValues();
                    this.initSelectPicker();
                    if (this.additionalParameter['default_value']) {
                        this.fieldValue = this.commonUtil.getID(this.additionalParameter['default_value']);
                        this.updateFieldData(this.fieldValue);
                    }
                }
                else {
                    // console.error('Something Went Wrong in Picker !!!');
                }
            }
            else if (this.additionalParameter['externalApiOptionValue'].includes(data.handler_name)) {
                const valueApikeys = this.additionalParameter['externalApiOptionValue'].split('||').map(str => str.trim());
                const keyApiKey = valueApikeys[0].split('##')[0];
                const valueApiKey = valueApikeys[1].split('##')[0];
                if (keyApiKey == data.handler_name || valueApiKey == data.handler_name) {
                    this.fieldData.possible_values = [];
                    this.pickerValues = this.fieldData.possible_values;
                    this.assignPickerOptionValues();
                }
            }
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    getPickerArrOfObject(pickerValues) {
        let listOfPossibleValues = [];
        pickerValues.forEach(element => {
            listOfPossibleValues.push({ id: element.split('||')[0], value: element.split('||')[1] });
        });
        return listOfPossibleValues;
    }
    onEmptySession(get_data) {
        let data = [];
        let unique_id_value = [];
        let api_key_setter = false;
        let skipFieldsIds = get_data.skipFieldsIds;
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
                    ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key),
                    ...get_data.apiKeys
                ];
                api_key_setter = true;
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm) == true) {
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = this.commonUtil.getID(paramter.value);
                            break;
                        }
                        else if (paramter.parameter_type === 'externalApiOptionValue') {
                            this.fieldValue = this.commonUtil.getID(this.additionalParameter['default_value']) || '';
                            this.selectedItems = [];
                            //  console.log("default_value: ", this.fieldValue);
                            let results = this.dropdownList.filter(obj => obj[this.primaryKeyVal] === this.fieldValue);
                            let matchItem = results.length > 0 ? results[0] : null;
                            if (matchItem && matchItem != null) {
                                this.selectedItems = [matchItem];
                            }
                            if (api_key_setter == true) {
                                let parameterList = paramter.value.split('||');
                                if (parameterList.includes(elm)) {
                                    this.fieldData.possible_values = [];
                                    this.pickerValues = [];
                                    this.assignPickerOptionValues();
                                    this.fieldValue = '';
                                    this.selectedItems = [];
                                    this.multiselectTooltip = "";
                                    this.initSelectPicker();
                                }
                            }
                            break;
                        }
                        else {
                            this.fieldValue = '';
                            this.selectedItems = [];
                            this.multiselectTooltip = "";
                            break;
                        }
                    }
                }
                else {
                    if (!skipFieldsIds?.includes(this.fieldData.unique_id)) {
                        this.fieldValue = '';
                        this.selectedItems = [];
                        this.multiselectTooltip = "";
                    }
                }
                this.updateFieldData(this.fieldValue);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.textField.control.reset();
                this.showErrorOnNext = false;
                if (this.fieldName) {
                    this.fieldName.control.markAsUntouched();
                    this.fieldName.control.markAsPristine();
                    this.fieldName.control.updateValueAndValidity();
                }
                this.cdRef.detectChanges();
                return;
            }
            // if(get_data.apiKeys.length > 0) {
            //     if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            //         for (const paramter of this.fieldData.additional_parameters) {
            //             if (paramter.parameter_type === 'externalApiOptionValue') {
            //             let parameterList = paramter.value.split('||');
            //             if(parameterList.includes(elm)){
            //                 this.fieldData.possible_values = [];
            //                 this.pickerValues = [];
            //                 this.fieldValue = '';
            //             }
            //             break;
            //             } else {
            //                 this.fieldValue = '';
            //             }
            //         }
            //     } else {
            //         this.fieldValue = '';
            //     }
            // }
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
            this.fieldValue = this.commonUtil.getID(get_data[unique_id_value]);
            this.updateFieldData(this.fieldValue);
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    getUpdatedValue() {
        const primaryData = this.setPrimaryKey(this.primaryKeyIndex);
        this.valid = (!this.isMandatory || (this.isMandatory && this.fieldValue.length > 0)) ? true : false;
        this.updateFieldData(this.commonUtil.getID(this.fieldValue), this.valid);
        if (this.rowData) {
            this.appDataService.updateAppData(Object.assign({}, this.appData, {
                value: this.commonUtil.getID(this.fieldValue)
            }));
        }
        if (this.fieldData.possible_value_type === 'ExternalApi') {
            this.dependencyHandler('onSelect', {
                uniqueId: this.html_id,
                value: this.commonUtil.getID(this.fieldValue)
            });
        }
        else {
            this.onComponentEvent('onSelect', primaryData, true, {
                uniqueId: this.html_id,
                value: this.commonUtil.getID(this.fieldValue)
            });
        }
        this.onDirty();
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = this.commonUtil.getID(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]);
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                if (this.isValidDataStore) {
                    this.checkIfFieldValueIsExist();
                }
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
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'pickerValues'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    toggleModalCssClass() {
        const modalWrapper = window.document.querySelectorAll('.cdk-overlay-pane');
        if (modalWrapper) {
            modalWrapper.forEach(mw => {
                mw.classList.toggle('modal-picker-wrapper');
                mw.classList.toggle(this.modalGenericCssClass);
            });
        }
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'isEditable');
            if (changes.editableCondition.previousValue !== changes.editableCondition.currentValue) {
                this.processPickerSetting(true);
            }
        }
        // if (changes.editableCondition) {
        //     this.setConditions(changes.editableCondition.currentValue, 'isEditable');
        // }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        if (changes.mandatoryCondition) {
            this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        }
    }
    checkIfFieldValueIsExist() {
        let found = this.getPickerArrOfObject(this.pickerValues).findIndex((i) => i.id === this.fieldValue);
        if (found === -1) {
            this.fieldValue = '';
        }
    }
    performSearch(searchTerm) {
        //console.log('Search Term:', searchTerm);
        this.updateDataOnChange(searchTerm);
        this.onComponentEvent('OnKeyUp', {
            internalAPIResponseEmitter: this.internalAPIResponseEmitter,
        });
    }
    updateDataOnChange(term) {
        const apiData = {
            id: this.requestApiKeyForSearch,
            apiUrl: '',
            apiKey: this.requestApiKeyForSearch,
            value: term
        };
        this.apiDataService.setApiData(Object.assign({}, apiData));
    }
    // Handle dropdown open/close toggle
    handleDropdownToggleClick() {
        // Check if dropdown is open by looking for the dropdown-list element without hidden attribute
        const dropdownList = this.ang2SelectField?.nativeElement?.querySelector('.dropdown-list');
        const isDropdownOpen = dropdownList && !dropdownList.hasAttribute('hidden');
        if (!isDropdownOpen)
            return;
        //console.log('Dropdown is opening');
        // set search input element if not set
        // if (!this.searchInputElement) {
        //console.log('searchInputElement is not set');
        try {
            const timeoutId = setTimeout(() => {
                this.setupSearchInput();
            }, 100);
            this.timeoutIds.push(timeoutId);
        }
        catch (error) {
            throw new Error("Failed to setup search field");
        }
        // }
        // functionality need to fetch api with blank value on opening the dropdown
        this.performSearch('');
    }
    onDropdownClick(event) {
        if (!this.isApiSearchEnabled)
            return;
        const target = event.target;
        // Check if it's the dropdown toggle/header area
        if (target.closest('.c-btn') || target.closest('.dropdown-btn')) {
            //console.log('Dropdown toggle clicked');
            this.handleDropdownToggleClick();
            return;
        }
    }
    setupSearchInput() {
        this.removeSearchEventListeners();
        if (!this.ang2SelectField?.nativeElement) {
            return;
        }
        const searchInput = this.ang2SelectField.nativeElement.querySelector('.list-filter .c-input');
        if (searchInput) {
            this.searchInputElement = searchInput;
            this.searchInputElement.addEventListener('input', this.boundOnSearchInput);
        }
        this.clearButton = this.ang2SelectField.nativeElement.querySelector('.list-filter .c-clear');
        if (this.clearButton) {
            this.clearButton.addEventListener('click', this.onClearClicked.bind(this));
        }
    }
    removeSearchEventListeners() {
        if (this.searchInputElement && this.boundOnSearchInput) {
            this.searchInputElement.removeEventListener('input', this.boundOnSearchInput);
            this.searchInputElement = null;
        }
    }
    onSearchInput(event) {
        const term = event.target.value;
        this.searchSubject.next(term);
    }
    onClearClicked() {
        this.performSearch('');
    }
    static ɵfac = function CeePickerComponent_Factory(t) { return new (t || CeePickerComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.CeeApiService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.Router), i0.ɵɵdirectiveInject(i9.MatDialog), i0.ɵɵdirectiveInject(i10.MatSnackBar), i0.ɵɵdirectiveInject(i11.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeePickerComponent, selectors: [["app-cee-picker"]], viewQuery: function CeePickerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5, ElementRef);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fieldName = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.selectField = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.ang2SelectField = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", primaryKeyIndex: "primaryKeyIndex", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["IsMaterial", ""], ["IsMultipleSelect", ""], ["angularMultiselect", ""], ["errorContainer", ""], ["selectField", "", "fieldName", "ngModel"], ["ang2SelectField", "", "fieldName", "ngModel"], ["singleErrorMessage", ""], [3, "class", "id", 4, "ngIf"], [3, "id"], [4, "ngIf", "ngIfElse"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], [1, "form-field"], [3, "ngModelChange", "change", "ngStyle", "disabled", "ngModel", "required"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "value"], [3, "ngModelChange", "onSelect", "onDeSelect", "onSelectAll", "onDeSelectAll", "onClose", "click", "data", "ngModel", "settings", "title"], [4, "ngFor", "ngForOf"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [3, "ngModelChange", "selectionChange", "openedChange", "placeholder", "value", "ngStyle", "disabled", "ngModel", "aria-label", "required", "multiple"], ["mat-icon-button", "", "matSuffix", "", "style", "display:inline", "type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["mat-icon-button", "", "matSuffix", "", "type", "button", 1, "btn-tooltip", "ml-auto", 2, "display", "inline", 3, "tooltip"]], template: function CeePickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeePickerComponent_div_0_Template, 4, 6, "div", 7);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible || ctx.isSafariClass);
        } }, dependencies: [MatTooltipModule, MatInputModule, i12.MatFormField, i12.MatLabel, i12.MatSuffix, NgStyle, FormsModule, i13.NgSelectOption, i13.ɵNgSelectMultipleOption, i13.SelectControlValueAccessor, i13.NgControlStatus, i13.RequiredValidator, i13.NgModel, MatFormFieldModule, MatSelectModule, i14.MatSelect, i15.MatOption, CommonModule, i16.NgForOf, i16.NgIf, i16.NgTemplateOutlet, i16.KeyValuePipe, TooltipModule, i17.TooltipDirective, AngularMultiSelectModule, i18.AngularMultiSelect], styles: [".custom-select[_ngcontent-%COMP%]{background-size:14px auto;background-position:right .5rem center;background-color:#fff}  .selected-list .c-list .c-token .c-remove svg{fill:#000!important}.invalid[_ngcontent-%COMP%]{border-color:#c13211b8!important}.selected-list[_ngcontent-%COMP%]   .c-btn[_ngcontent-%COMP%]{padding:0!important}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeePickerComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-picker', standalone: true, imports: [MatTooltipModule, MatInputModule, NgStyle, FormsModule, MatFormFieldModule, MatSelectModule, CommonModule, TooltipModule, AngularMultiSelectModule], template: "<div class=\"{{cssClasses}}\" id=\"{{html_id }}\" *ngIf=\"isVisible || isSafariClass\">\r\n\t<!-- Normal Bootstrap UI -->\r\n\t<ng-container *ngIf=\"!is_material; else IsMaterial\">\r\n\t\t<div class=\"form-group\">\r\n\t\t\t<div class=\"form-label\">\r\n\t\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t\t</div>\r\n\t\t\t<ng-container *ngIf=\"!additionalParameter['MultipleSelect'] || additionalParameter['MultipleSelect'] != 'true'; else IsMultipleSelect\">\r\n\t\t\t\t\t<ng-container *ngIf=\"!this.additionalParameter['CEE_Enable_Search_Filter'] || ( this.additionalParameter['CEE_Enable_Search_Filter'] && this.additionalParameter['CEE_Enable_Search_Filter'] == 'false' ); else angularMultiselect\">\r\n\t\t\t\t\t\t<div class=\"form-field\">\r\n\t\t\t\t\t\t\t<select\r\n\t\t\t\t\t\t\t\tclass=\"custom-select {{isCustomClass && custom_class_name ? custom_class_name[0] : ''}} {{ !valid || (fieldName.invalid && isMandatory && (fieldName.dirty || fieldName.touched || showErrorOnNext))  ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t\t\t#selectField [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\t\t\tcolor: fieldData.field_style.font_color,\r\n\t\t\t\t\t\t\t\t\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\t\t\t\t\t\t\t\t\theight: fieldData.field_style.field_height,\r\n\t\t\t\t\t\t\t\t\t\t\twidth: fieldData.field_style.field_width,\r\n\t\t\t\t\t\t\t\t\t\t\t'background-color': fieldData.field_style.background_color\r\n\t\t\t\t\t\t\t\t\t\t\t}\" [disabled]=\"!isEditable\" [(ngModel)]=\"fieldValue\" #fieldName=\"ngModel\"\r\n\t\t\t\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n\t\t\t\t\t\t\t\t[attr.tabindex]=\"tabIndexValue\" [required]=\"isMandatory\" (change)=\"getUpdatedValue()\">\r\n\t\t\t\t\t\t\t\t<option value=\"\" disabled>{{ fieldData.placeholder_text }}</option>\r\n\t\t\t\t\t\t\t\t<option *ngFor=\"let opt of pickerValues\" value=\"{{commonUtil.getID(opt)}}\">\r\n\t\t\t\t\t\t\t\t\t{{commonUtil.getValue(opt)}}</option>\r\n\t\t\t\t\t\t\t</select>\r\n\r\n\t\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"errorContainer; context:{fieldName:fieldName}\"></ng-template>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t</ng-container>\r\n\t\t\t<ng-template #IsMultipleSelect>\r\n\t\t\t\t<div class=\"form-field\">\r\n\t\t\t\t\t<angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" \r\n\t\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t\t(onSelect)=\"onItemSelect($event)\" \r\n\t\t\t\t\t(onDeSelect)=\"OnItemDeSelect($event)\"\r\n\t\t\t\t\t(onSelectAll)=\"onSelectAll($event)\"\r\n\t\t\t\t\t(onDeSelectAll)=\"onDeSelectAll($event)\"\r\n\t\t\t\t\t(onClose)=\"onMultiselectClicked($event)\"\r\n\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n\t\t\t\t\t[attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\t[title]=\"multiselectTooltip\"\r\n\t\t\t\t\t(click)=\"onDropdownClick($event)\"\r\n\t\t\t\t\t#ang2SelectField\r\n\t\t\t\t\t#fieldName=\"ngModel\"></angular2-multiselect>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<!-- <select multiple\r\n\t\t\t\t\t\tclass=\"multi-select {{isCustomClass && custom_class_name ? custom_class_name[0] : ''}} {{ !valid || (fieldName.invalid && isMandatory && (fieldName.dirty || fieldName.touched || showErrorOnNext))  ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t\t\t#selectField [ngStyle]=\"{\r\n\t\t\t\t\t\t\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t\t\t\t\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t\t\t\t\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\t\t\t\t\t\t\tcolor: fieldData.field_style.font_color,\r\n\t\t\t\t\t\t\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\t\t\t\t\t\t\theight: fieldData.field_style.field_height,\r\n\t\t\t\t\t\t\t\t\twidth: fieldData.field_style.field_width,\r\n\t\t\t\t\t\t\t\t\t'background-color': fieldData.field_style.background_color\r\n\t\t\t\t\t\t\t\t\t}\" [disabled]=\"!isEditable\" [(ngModel)]=\"fieldValue\" #fieldName=\"ngModel\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n\t\t\t\t\t\t[attr.tabindex]=\"tabIndexValue\" [required]=\"isMandatory\" (change)=\"getUpdatedValue()\">\r\n\t\t\t\t\t\t<option value=\"\" disabled>{{ fieldData.placeholder_text }}</option>\r\n\t\t\t\t\t\t<option *ngFor=\"let opt of pickerValues\" value=\"{{commonUtil.getID(opt)}}\">\r\n\t\t\t\t\t\t\t{{commonUtil.getValue(opt)}}</option>\r\n\t\t\t\t\t</select> -->\r\n\t\t\t\t\t<!-- <ng-template *ngTemplateOutlet=\"errorContainer; context:{fieldName:fieldName}\"></ng-template>\t\t\t -->\r\n\t\t\t\t\t<div *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\" *ngIf=\"!valid && fieldName.dirty\">\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-template>\r\n\t\t\t<ng-template #angularMultiselect>\r\n\t\t\t\t<angular2-multiselect [data]=\"dropdownList\" [(ngModel)]=\"selectedItems\" \r\n\t\t\t\t[settings]=\"dropdownSettings\"\r\n\t\t\t\t(onSelect)=\"onItemSelect($event)\" \r\n\t\t\t\t(onDeSelect)=\"OnItemDeSelect($event)\"\r\n\t\t\t\t(onSelectAll)=\"onSelectAll($event)\"\r\n\t\t\t\t(onDeSelectAll)=\"onDeSelectAll($event)\"\r\n\t\t\t\t(onClose)=\"onMultiselectClicked($event)\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n                [attr.tabindex]=\"tabIndexValue\"\r\n                [title]=\"multiselectTooltip\"\r\n\t\t\t\t(click)=\"onDropdownClick($event)\"\r\n                #ang2SelectField\r\n                #fieldName=\"ngModel\"></angular2-multiselect>\r\n                <div *ngFor=\"let message of messages\">\r\n                    <div class=\"error-message-wrapper\" *ngIf=\"!valid && fieldName.dirty\">\r\n                        <div>\r\n                            <p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n                                [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                                {{returnMessageData(message.code).message_text}}</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\t\t\t\t<!-- <ng-template *ngTemplateOutlet=\"errorContainer; context:{fieldName:fieldName}\"></ng-template> -->\r\n\t\t\t</ng-template>\r\n\t\t\t<ng-template #errorContainer let-fieldName=\"fieldName\">\r\n\t\t\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t\t*ngIf=\"(showErrorOnNext && !isEditable) || (fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext ))\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"(showErrorOnNext && !isEditable && !fieldValue) || (fieldName.errors && fieldName?.errors.required)\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"fieldName.errors && fieldName?.errors.minlength\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div *ngIf=\"fieldName.errors && fieldName?.errors.pattern\">\r\n\t\t\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-template #singleErrorMessage>\r\n\t\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t\t*ngIf=\"fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext)\">\r\n\t\t\t\t\t\t<div *ngIf=\"fieldName?.errors.required || fieldName?.errors.minlength || fieldName?.errors.pattern\">\r\n\t\t\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\r\n\t\t\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-template>\r\n\t\t</div>\r\n\t</ng-container>\r\n\r\n\t<!-- Material UI -->\r\n\t<ng-template #IsMaterial>\r\n\t\t<mat-form-field>\r\n\t\t\t<mat-label *ngIf=\"fieldData.field_label!=''\">{{fieldData.field_label}}</mat-label>\r\n\t\t\t<mat-select placeholder=\"{{fieldData.placeholder_text}}\"\r\n\t\t\t\tclass=\"{{isCustomClass && custom_class_name ? custom_class_name[0] : ''}} {{ !valid || (fieldName.invalid && isMandatory && (fieldName.dirty || fieldName.touched || showErrorOnNext))  ? 'invalid' : 'valid' }}\"\r\n\t\t\t\t#selectField [value]=\"fieldValue\" [ngStyle]=\"fieldStyle\" [disabled]=\"!isEditable\" [(ngModel)]=\"fieldValue\" #fieldName=\"ngModel\"\r\n\t\t\t\t[aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'].replace('%value%', fieldValue) : 'Select a ' + fieldData.field_label \"\r\n\t\t\t\t[attr.tabindex]=\"tabIndexValue\" [required]=\"isMandatory\" (selectionChange)=\"getUpdatedValue()\"\r\n\t\t\t\t(openedChange)=\"toggleModalCssClass()\"\r\n\t\t\t\t[multiple] = \"additionalParameter['MultipleSelect'] && additionalParameter['MultipleSelect'] == 'true'\" >\r\n\t\t\t\t<mat-option *ngFor=\"let opt of pickerValues; let i = index\" value=\"{{commonUtil.getID(opt)}}\" [attr.aria-label]=\"optionsAriaLabel ? optionsAriaLabel[i] : 'Select ' + opt\">\r\n\t\t\t\t\t{{commonUtil.getValue(opt)}}</mat-option>\r\n\t\t\t</mat-select>\r\n\t\t\t<!-- Tooltip -->\r\n\t\t\t<button mat-icon-button matSuffix style=\"display:inline\" *ngIf=\"hasTooltip\" type=\"button\"\r\n\t\t\t\tclass=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\"\r\n\t\t\t\t[attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n\t\t\t\ti\r\n\t\t\t</button>\r\n\t\t</mat-form-field>\r\n\t\t<ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t\t*ngIf=\"(showErrorOnNext && !isEditable) || (fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext ))\">\r\n\t\t\t\t\t<div *ngIf=\"(showErrorOnNext && !isEditable) || (fieldName.errors && fieldName?.errors.required)\">\r\n\t\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"fieldName.errors && fieldName?.errors.minlength\">\r\n\t\t\t\t\t\t<p *ngIf=\"message.type == 'minlength'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div *ngIf=\"fieldName.errors && fieldName?.errors.pattern\">\r\n\t\t\t\t\t\t<p *ngIf=\"message.type == 'Regex'\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t\t<ng-template #singleErrorMessage>\r\n\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t*ngIf=\"fieldName.invalid && (fieldName.dirty || fieldName.touched || showErrorOnNext)\">\r\n\t\t\t\t<div *ngIf=\"fieldName?.errors.required || fieldName?.errors.minlength || fieldName?.errors.pattern\">\r\n\t\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\r\n\t\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-template>\r\n</div>", styles: [".custom-select{background-size:14px auto;background-position:right .5rem center;background-color:#fff}::ng-deep .selected-list .c-list .c-token .c-remove svg{fill:#000!important}.invalid{border-color:#c13211b8!important}.selected-list .c-btn{padding:0!important}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.CeeApiService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.Router }, { type: i9.MatDialog }, { type: i10.MatSnackBar }, { type: i11.HttpClient }, { type: i0.ChangeDetectorRef }], { fieldName: [{
            type: ViewChild,
            args: ['fieldName', { static: false }]
        }], selectField: [{
            type: ViewChild,
            args: ['selectField', { static: false }]
        }], ang2SelectField: [{
            type: ViewChild,
            args: ['ang2SelectField', { read: ElementRef }]
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], primaryKeyIndex: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeePickerComponent, { className: "CeePickerComponent", filePath: "lib\\field-components\\cee-picker\\cee-picker.component.ts", lineNumber: 34 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXBpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtcGlja2VyL2NlZS1waWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXBpY2tlci9jZWUtcGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUF1QyxTQUFTLEVBQXFCLFVBQVUsRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEosT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVTdDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxFQUFFLE9BQU8sRUFBZ0IsU0FBUyxFQUFFLE1BQU0sTUFBTSxDQUFDO0FBSzlFLE9BQU8sRUFBRSxXQUFXLEVBQVcsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0RCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hF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SWxILFNBQVM7a0JBQW5ELFNBQVM7bUJBQUMsV0FBVyxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNJLFdBQVc7a0JBQXZELFNBQVM7bUJBQUMsYUFBYSxFQUFFLEVBQUUsTUFBTSxFQUFFLEtBQUssRUFBRTtZQUNTLGVBQWU7a0JBQWxFLFNBQVM7bUJBQUMsaUJBQWlCLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO1lBRWpDLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLOztrRkFkRyxrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgU2ltcGxlQ2hhbmdlcywgT25DaGFuZ2VzLCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmLCBFbGVtZW50UmVmLCBFdmVudEVtaXR0ZXIgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tICcuLi9jZWUtYmFzZS1jbGFzcyc7XHJcblxyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZmlsdGVyLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24sIHRha2VVbnRpbCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSwgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFNlbGVjdCBhcyBNYXRTZWxlY3QgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IEFuZ3VsYXJNdWx0aVNlbGVjdE1vZHVsZSB9IGZyb20gJ2FuZ3VsYXIyLW11bHRpc2VsZWN0LWRyb3Bkb3duJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtcGlja2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtcGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1waWNrZXIuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTWF0VG9vbHRpcE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE5nU3R5bGUsIEZvcm1zTW9kdWxlLCBNYXRGb3JtRmllbGRNb2R1bGUsIE1hdFNlbGVjdE1vZHVsZSwgQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlLCBBbmd1bGFyTXVsdGlTZWxlY3RNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVQaWNrZXJDb21wb25lbnQgZXh0ZW5kcyBCYXNlVmlldyBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoJ2ZpZWxkTmFtZScsIHsgc3RhdGljOiBmYWxzZSB9KSBmaWVsZE5hbWU6IE5nTW9kZWw7XHJcbiAgICBAVmlld0NoaWxkKCdzZWxlY3RGaWVsZCcsIHsgc3RhdGljOiBmYWxzZSB9KSBzZWxlY3RGaWVsZDogTWF0U2VsZWN0O1xyXG4gICAgQFZpZXdDaGlsZCgnYW5nMlNlbGVjdEZpZWxkJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGFuZzJTZWxlY3RGaWVsZCE6IEVsZW1lbnRSZWY7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG5cclxuICAgIGRlcGVuZGVudFN1YnNjcmliZXIkOiBTdWJzY3JpcHRpb247XHJcblxyXG4gICAgcGlja2VyVmFsdWVzID0gW107XHJcbiAgICBodG1sX2lkID0gJyc7XHJcbiAgICBtb2RhbEdlbmVyaWNDc3NDbGFzcyA9ICcnO1xyXG4gICAgY3VzdG9tX2NsYXNzX25hbWU6IHN0cmluZ1tdO1xyXG4gICAgb3B0aW9uc0FyaWFMYWJlbDogYW55ID0gW107XHJcblxyXG4gICAgZHJvcGRvd25MaXN0ID0gW107XHJcbiAgICBzZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICBkcm9wZG93blNldHRpbmdzID0ge307XHJcblxyXG4gICAgcHJpbWFyeUtleVZhbDogYW55ID0gJyc7XHJcbiAgICBsYWJlbEtleVZhbDogYW55ID0gJyc7XHJcbiAgICBjbGFzc0xpc3Q6IGFueSA9IFwiZm9ybS1jb250cm9sIG11bHRpLXNlbGVjdCBcIjtcclxuICAgIG11bHRpc2VsZWN0VG9vbHRpcDogYW55ID0gXCJcIjtcclxuICAgIG5vbmVkaXRhYmxlUGxhY2Vob2xkZXIgPSBcIlwiO1xyXG4gICAgZmllbGRQbGFjZWhvbGRlcjogYW55ID0gXCJcIjtcclxuICAgIGlzVmFsaWREYXRhU3RvcmUgPSBmYWxzZTtcclxuICAgIGlzVmFsdWVTZXRGcm9tUm93RGF0YSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSB0aW1lb3V0SWRzOiBhbnlbXSA9IFtdO1xyXG4gICAgLy8gZm9yIGFwaSBzZWFyY2hcclxuICAgIHByaXZhdGUgaXNBcGlTZWFyY2hFbmFibGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNlYXJjaE1pbkNoYXJhY3RlcnM6IG51bWJlciA9IDA7XHJcbiAgICBwcml2YXRlIHNlYXJjaERlYm91bmNlVGltZTogbnVtYmVyID0gMzAwO1xyXG4gICAgcHJpdmF0ZSBzZWFyY2hTdWJqZWN0ID0gbmV3IFN1YmplY3Q8c3RyaW5nPigpO1xyXG4gICAgcHJpdmF0ZSBkZXN0cm95JCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgICByZXF1ZXN0QXBpS2V5Rm9yU2VhcmNoID0gJyc7XHJcbiAgICBwcml2YXRlIHNlYXJjaElucHV0RWxlbWVudDogSFRNTElucHV0RWxlbWVudCB8IG51bGwgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBib3VuZE9uU2VhcmNoSW5wdXQgPSB0aGlzLm9uU2VhcmNoSW5wdXQuYmluZCh0aGlzKTtcclxuICAgIHByaXZhdGUgbGltaXRGb3JTZWFyY2g6IG51bWJlciA9IDEwO1xyXG4gICAgcHJpdmF0ZSBsaW1pdEZvclNlYXJjaEFwcGxpY2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgYXBpS2V5Rm9yRGlzcGxheVZhbHVlID0gXCJcIjtcclxuICAgIHByaXZhdGUgZmllbGREaXNwbGF5VmFsdWU6IGFueSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGNsZWFyQnV0dG9uITogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGludGVybmFsQVBJUmVzcG9uc2VFbWl0dGVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBhcGlEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgd2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIGRpYWxvZyxcclxuICAgICAgICAgICAgc25hY2tCYXIsIGh0dHAsIGNlZUFwaVNlcnZpY2UsIHJvdXRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJCZWZvcmUgZmlsZWQgZGF0YTogXCIsdGhpcy5maWVsZERhdGEuaHRtbF9pZCxcInJvdyBkYXRhOiBcIix0aGlzLnJvd0RhdGEuaHRtbF9pZClcclxuICAgICAgICAvLyB0aGlzLmZpZWxkRGF0YS5odG1sX2lkID0gdGhpcy5yb3dEYXRhLmh0bWxfaWQ7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuc3RlcElkLCB0aGlzLmZpZWxkRGF0YSwgdGhpcy5rZWVwU3RhdGUsIHRoaXMucm93RGF0YSk7XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QgPSBcImZvcm0tY29udHJvbCBtdWx0aS1zZWxlY3QgdmFsaWQgXCI7XHJcbiAgICAgICAgdGhpcy5tb2RhbEdlbmVyaWNDc3NDbGFzcyA9ICdtb2RhbC1waWNrZXItJyArIHRoaXMuc3RlcElkO1xyXG4gICAgICAgIHRoaXMuaXNBcGlTZWFyY2hFbmFibGVkID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX0FQSV9TZWFyY2gnXSA9PT0gJ3RydWUnO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQXBpU2VhcmNoRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVBcGlTZWFyY2hTZXR0aW5ncygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRlcGVuZGVuY3lIYW5kbGVyKCdvbkxvYWQnKTtcclxuICAgICAgICB0aGlzLmZpZWxkUGxhY2Vob2xkZXIgPSB0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0O1xyXG4gICAgICAgIHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlciA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX05vbmVkaXRhYmxlX1BsYWNlaG9sZGVyJ10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9Ob25lZGl0YWJsZV9QbGFjZWhvbGRlciddIDogXCJcIjtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KCdDRUVfU3RvcmVfVmFsaWRfRGF0YScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWYWxpZERhdGFTdG9yZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1N0b3JlX1ZhbGlkX0RhdGEnXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5ub25lZGl0YWJsZVBsYWNlaG9sZGVyICYmICF0aGlzLmlzRWRpdGFibGUpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA9IHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsnZW1pdE9uRWRpdGFibGVTdGF0dXNDaGFuZ2VkXycgKyB0aGlzLmFwcERhdGEuaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkVkaXRhYmxlU3RhdHVzQ2hhbmdlZC5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEudW5pcXVlX2lkID09IHJlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlciAmJiAhdGhpcy5pc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA9IHRoaXMubm9uZWRpdGFibGVQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA9IHRoaXMuZmllbGRQbGFjZWhvbGRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMub3B0aW9uc0FyaWFMYWJlbCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnT3B0aW9ucy1BcmlhLUxhYmVsJ10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ09wdGlvbnMtQXJpYS1MYWJlbCddLnNwbGl0KFwifFwiKSA6IFtdO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmlsZWQgZGF0YTogXCIsdGhpcy5maWVsZERhdGEuaHRtbF9pZCxcInJvdyBkYXRhOiBcIix0aGlzLnJvd0RhdGEuaHRtbF9pZClcclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YVsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddICYmIHRoaXMucm93RGF0YVsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10gPSB0aGlzLnJvd0RhdGFbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXS5qb2luKCd8fCcpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJvd2RhdGEgZXh0ZXJuYWwgdmFsOiBcIix0aGlzLnJvd0RhdGFbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5kcm9wZG93bkxpc3QgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLnByaW1hcnlLZXlWYWwgPSB0aGlzLmdldFZhbHVlRnJvbUV4cHRlcm5hbEFwaSgwKSB8fCAnaWQnO1xyXG4gICAgICAgIHRoaXMubGFiZWxLZXlWYWwgPSB0aGlzLmdldFZhbHVlRnJvbUV4cHRlcm5hbEFwaSgxKSB8fCAnaXRlbU5hbWUnO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZmllbGRWYWx1ZSkgfHwgKHRoaXMucm93RGF0YSAmJiBBcnJheS5pc0FycmF5KHRoaXMucm93RGF0YS52YWx1ZSkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvdXJjZUFycmF5ID0gQXJyYXkuaXNBcnJheSh0aGlzLmZpZWxkVmFsdWUpID8gdGhpcy5maWVsZFZhbHVlIDogdGhpcy5yb3dEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBwcmltYXJ5S2V5ID0gdGhpcy5wcmltYXJ5S2V5VmFsIHx8ICdpZCc7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgc291cmNlQXJyYXkuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBtYXRjaEl0ZW0gPSB0aGlzLmRyb3Bkb3duTGlzdC5maW5kKG9iaiA9PiBvYmpbcHJpbWFyeUtleV0gPT09IGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLnB1c2gobWF0Y2hJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5yb3dEYXRhPy52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlLCB0aGlzLnZhbGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGxpc3RPZkl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwgJiYgZWwuaGFzT3duUHJvcGVydHkodGhpcy5sYWJlbEtleVZhbCkpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RPZkl0ZW1zLnB1c2goZWxbdGhpcy5sYWJlbEtleVZhbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMubXVsdGlzZWxlY3RUb29sdGlwID0gbGlzdE9mSXRlbXMuam9pbignLCAnKVxyXG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgc2luZ2xlU2VsZWN0aW9uOiAhdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNdWx0aXBsZVNlbGVjdCddIHx8ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ011bHRpcGxlU2VsZWN0J10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNdWx0aXBsZVNlbGVjdCddID09ICdmYWxzZScpID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICB0ZXh0OiB0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0ID8gdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA6ICdTZWxlY3QgIEl0ZW0nLFxyXG4gICAgICAgICAgICBlbmFibGVDaGVja0FsbDogdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX0NoZWNrX0FsbCddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VuYWJsZV9DaGVja19BbGwnXSAhPSAnZmFsc2UnID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBzZWxlY3RBbGxUZXh0OiAnU2VsZWN0IEFsbCcsXHJcbiAgICAgICAgICAgIHVuU2VsZWN0QWxsVGV4dDogJ1VuU2VsZWN0IEFsbCcsXHJcbiAgICAgICAgICAgIGVuYWJsZVNlYXJjaEZpbHRlcjogdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX1NlYXJjaF9GaWx0ZXInXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FbmFibGVfU2VhcmNoX0ZpbHRlciddICE9ICdmYWxzZScgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgIGNsYXNzZXM6IHRoaXMuY2xhc3NMaXN0LFxyXG4gICAgICAgICAgICBiYWRnZVNob3dMaW1pdDogdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfQmFkZ2VfU2hvd19MaW1pdCddID8gTnVtYmVyKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0JhZGdlX1Nob3dfTGltaXQnXSkgOiAxLFxyXG4gICAgICAgICAgICBsYWJlbEtleTogdGhpcy5sYWJlbEtleVZhbCxcclxuICAgICAgICAgICAgcHJpbWFyeUtleTogdGhpcy5wcmltYXJ5S2V5VmFsLFxyXG4gICAgICAgICAgICBzZWFyY2hCeTogW3RoaXMubGFiZWxLZXlWYWxdLCAgXHJcbiAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5pc0VkaXRhYmxlXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJTZWxlY3RlZEl0ZW1zOiBcIix0aGlzLnNlbGVjdGVkSXRlbXMpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcmltYXJ5S2V5VmFsOiBcIix0aGlzLnByaW1hcnlLZXlWYWwpXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsYWJlbEtleVZhbDogXCIsdGhpcy5sYWJlbEtleVZhbClcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxpc3RPZkl0ZW1zOiBcIixsaXN0T2ZJdGVtcylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInBsYWNlaG9sZGVyOiBcIix0aGlzLmZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0KVxyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ2VtaXRPbkRhdGFTZXRPclVwZGF0ZWRGb3JTZWN0aW9uJ10gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWVsZERhdGE6IFwiLHRoaXMuZmllbGREYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJyZXM6IFwiLHJlcyk7XHJcbiAgICAgICAgICAgIGxldCBpc0NvbmRpdGlvbkV4aXN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc19lZGl0YWJsZSA9PSAyICYmIHRoaXMuZmllbGREYXRhLmVkaXRhYmxlX2NvbmRpdGlvbiAmJiB0aGlzLmZpZWxkRGF0YS5lZGl0YWJsZV9jb25kaXRpb24uY29uZGl0aW9uICYmIHRoaXMuZmllbGREYXRhLmVkaXRhYmxlX2NvbmRpdGlvbi5jb25kaXRpb24ubGVuZ3RoID4gMCAmJiB0aGlzLmZpZWxkRGF0YS5lZGl0YWJsZV9jb25kaXRpb24uY29uZGl0aW9uLmZpbHRlcih4ID0+IHguZmllbGQgPT0gcmVzLmFwaUtleSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaXNDb25kaXRpb25FeGlzdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZERhdGEuaXNfZGlzcGxheSA9PSAyICYmIHRoaXMuZmllbGREYXRhLmRpc3BsYXlfY29uZGl0aW9uICYmIHRoaXMuZmllbGREYXRhLmRpc3BsYXlfY29uZGl0aW9uLmNvbmRpdGlvbiAmJiB0aGlzLmZpZWxkRGF0YS5kaXNwbGF5X2NvbmRpdGlvbi5jb25kaXRpb24ubGVuZ3RoID4gMCAmJiB0aGlzLmZpZWxkRGF0YS5kaXNwbGF5X2NvbmRpdGlvbi5jb25kaXRpb24uZmlsdGVyKHggPT4geC5maWVsZCA9PSByZXMuYXBpS2V5KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbkV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmZpZWxkRGF0YS5pc19tYW5kYXRvcnkgPT0gMiAmJiB0aGlzLmZpZWxkRGF0YS5tYW5kYXRvcnlfY29uZGl0aW9uICYmIHRoaXMuZmllbGREYXRhLm1hbmRhdG9yeV9jb25kaXRpb24uY29uZGl0aW9uICYmIHRoaXMuZmllbGREYXRhLm1hbmRhdG9yeV9jb25kaXRpb24uY29uZGl0aW9uLmxlbmd0aCA+IDAgJiYgdGhpcy5maWVsZERhdGEubWFuZGF0b3J5X2NvbmRpdGlvbi5jb25kaXRpb24uZmlsdGVyKHggPT4geC5maWVsZCA9PSByZXMuYXBpS2V5KS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBpc0NvbmRpdGlvbkV4aXN0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoKHRoaXMuZmllbGREYXRhLmlzX2VkaXRhYmxlID09IDIgfHwgdGhpcy5maWVsZERhdGEuaXNfZGlzcGxheSA9PSAyIHx8IHRoaXMuZmllbGREYXRhLmlzX21hbmRhdG9yeSA9PSAyKSAmJiBpc0NvbmRpdGlvbkV4aXN0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFzc2lnblBpY2tlck9wdGlvblZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpc0NvbmRpdGlvbkV4aXN0OiBcIixpc0NvbmRpdGlvbkV4aXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZHJvcGRvd25TZXR0aW5ncyA9IHtcclxuICAgICAgICAgICAgICAgICAgICBzaW5nbGVTZWxlY3Rpb246ICF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ011bHRpcGxlU2VsZWN0J10gfHwgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTXVsdGlwbGVTZWxlY3QnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ011bHRpcGxlU2VsZWN0J10gPT0gJ2ZhbHNlJykgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA/IHRoaXMuZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQgOiAnU2VsZWN0ICBJdGVtJyxcclxuICAgICAgICAgICAgICAgICAgICBlbmFibGVDaGVja0FsbDogdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX0NoZWNrX0FsbCddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VuYWJsZV9DaGVja19BbGwnXSAhPSAnZmFsc2UnID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdEFsbFRleHQ6ICdTZWxlY3QgQWxsJyxcclxuICAgICAgICAgICAgICAgICAgICB1blNlbGVjdEFsbFRleHQ6ICdVblNlbGVjdCBBbGwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGVuYWJsZVNlYXJjaEZpbHRlcjogdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX1NlYXJjaF9GaWx0ZXInXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FbmFibGVfU2VhcmNoX0ZpbHRlciddICE9ICdmYWxzZScgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NlczogdGhpcy5jbGFzc0xpc3QsXHJcbiAgICAgICAgICAgICAgICAgICAgYmFkZ2VTaG93TGltaXQ6IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0JhZGdlX1Nob3dfTGltaXQnXSA/IE51bWJlcih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9CYWRnZV9TaG93X0xpbWl0J10pIDogMSxcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbEtleTogdGhpcy5sYWJlbEtleVZhbCxcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5S2V5OiB0aGlzLnByaW1hcnlLZXlWYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgc2VhcmNoQnk6IFt0aGlzLmxhYmVsS2V5VmFsXSwgIFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkOiAhdGhpcy5pc0VkaXRhYmxlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzQXBpU2VhcmNoRW5hYmxlZCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0Wydpc0FwaVNlYXJjaEVuYWJsZWQnICsgdGhpcy5hcHBEYXRhLmlkXSA9IHRoaXMuc2VhcmNoU3ViamVjdC5waXBlKFxyXG4gICAgICAgICAgICAgICAgZGVib3VuY2VUaW1lKHRoaXMuc2VhcmNoRGVib3VuY2VUaW1lKSxcclxuICAgICAgICAgICAgICAgIGZpbHRlcih0ZXJtID0+IHRlcm0ubGVuZ3RoID49IHRoaXMuc2VhcmNoTWluQ2hhcmFjdGVycyB8fCB0ZXJtLmxlbmd0aCA9PT0gMCksXHJcbiAgICAgICAgICAgICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICAgICAgICAgKS5zdWJzY3JpYmUodGVybSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBlcmZvcm1TZWFyY2godGVybSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVBcGlTZWFyY2hTZXR0aW5ncygpOiB2b2lkIHtcclxuICAgICAgICAvLyBJbml0aWFsaXplIHNlYXJjaCB3aXRoIGVtcHR5IHRlcm1cclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFPbkNoYW5nZSgnJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gU2V0IHNlYXJjaCBjb25maWd1cmF0aW9uIHdpdGggZGVmYXVsdHNcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXI7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hNaW5DaGFyYWN0ZXJzID0gcGFyc2VJbnQocGFyYW1zWydDRUVfU2VhcmNoX01pbl9DaGFyYWN0ZXJzJ10pIHx8IDA7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hEZWJvdW5jZVRpbWUgPSBwYXJzZUludChwYXJhbXNbJ0NFRV9TZWFyY2hfRGVib3VuY2VfVGltZSddKSB8fCAzMDA7XHJcbiAgICAgICAgdGhpcy5yZXF1ZXN0QXBpS2V5Rm9yU2VhcmNoID0gcGFyYW1zWydDRUVfU2VhcmNoX1JlcXVlc3RfYXBpX0tleV9Gb3JfU2VhcmNoX2lucHV0J10gfHwgJyc7XHJcbiAgICAgICAgdGhpcy5hcGlLZXlGb3JEaXNwbGF5VmFsdWUgPSBwYXJhbXNbJ0NFRV9TZWFyY2hfcmVzcG9uc2VfYXBpX2tleV9mb3JfZGlzcGxheV9sYWJlbCddIHx8ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEhhbmRsZSBzZWFyY2ggbGltaXQgY29uZmlndXJhdGlvblxyXG4gICAgICAgIHRoaXMuc2V0dXBTZWFyY2hMaW1pdENvbmZpZyhwYXJhbXNbJ0NFRV9TZWFyY2hfbGltaXRfQ29uZmlnJ10pO1xyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ2ludGVybmFsRW1taXR0ZXInICsgdGhpcy5hcHBEYXRhLmlkXSA9IHRoaXMuaW50ZXJuYWxBUElSZXNwb25zZUVtaXR0ZXIuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkFQSUNhbGxiYWNrKHJlc1swXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQVBJQ2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0dXBTZWFyY2hMaW1pdENvbmZpZyhsaW1pdENvbmZpZzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCFsaW1pdENvbmZpZykgcmV0dXJuO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IFtsaW1pdEZvclNlYXJjaEFwcGxpY2FibGUsIGxpbWl0LCBsaW1pdEtleV0gPSBsaW1pdENvbmZpZy5zcGxpdCgnfCcpO1xyXG4gICAgICAgIHRoaXMubGltaXRGb3JTZWFyY2ggPSBwYXJzZUludChsaW1pdCkgfHwgMTA7XHJcbiAgICAgICAgdGhpcy5saW1pdEZvclNlYXJjaEFwcGxpY2FibGUgPSBsaW1pdEZvclNlYXJjaEFwcGxpY2FibGUgPT09ICd0cnVlJztcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5saW1pdEZvclNlYXJjaEFwcGxpY2FibGUgJiYgbGltaXRLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRMaW1pdEFwaURhdGEobGltaXRLZXkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldExpbWl0QXBpRGF0YShsaW1pdEtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IGxpbWl0S2V5LFxyXG4gICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgICAgICBhcGlLZXk6IGxpbWl0S2V5LFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5saW1pdEZvclNlYXJjaFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5zZXRBcGlEYXRhKGFwaURhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgY3NzIGNsYXNzZXMgZm9yIGZpZWxkIHdyYXBwZXJcclxuICAgIG92ZXJyaWRlIGdldCBjc3NDbGFzc2VzKCk6IHN0cmluZyB7XHJcbiAgICAgICAgdmFyIGNsc05hbWUgPSB0aGlzLmlzQ3VzdG9tQ2xhc3MgJiYgdGhpcy5jdXN0b21fY2xhc3NfbmFtZT8ubGVuZ3RoID49IDIgPyB0aGlzLmN1c3RvbV9jbGFzc19uYW1lWzFdIDogJyc7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTYWZhcmlDbGFzcykge1xyXG4gICAgICAgICAgICBjbHNOYW1lICs9ICdzYWZhcmktdmlzaWJpbGl0eS13cmFwcGVyICcgKyAodGhpcy5pc1Zpc2libGUgPyAnc2FmYXJpLXZpc2libGUnIDogJ3NhZmFyaS1oaWRkZW4nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNsc05hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXRyaWV2ZXMgYSB2YWx1ZSAocHJpbWFyeSBrZXkgb3IgbGFiZWwga2V5KSBmcm9tIHRoZSBgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZWAgcGFyYW1ldGVyLlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaSAtIFRoZSBpbmRleCB0byBkZXRlcm1pbmUgd2hpY2ggdmFsdWUgdG8gcmV0cmlldmU6XHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgIDAgZm9yIHRoZSBwcmltYXJ5IGtleSwgMSBmb3IgdGhlIGxhYmVsIGtleS5cclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmcgfCB1bmRlZmluZWR9IC0gVGhlIGV4dHJhY3RlZCB2YWx1ZSBmcm9tIHRoZSBgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZWAgcGFyYW1ldGVyLFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb3IgYHVuZGVmaW5lZGAgaWYgdGhlIHZhbHVlIGlzIG5vdCBmb3VuZCBvciBpbnZhbGlkLlxyXG4gICAgICogXHJcbiAgICAgKiBUaGUgYGV4dGVybmFsQXBpT3B0aW9uVmFsdWVgIGlzIGV4cGVjdGVkIHRvIGJlIGEgc3RyaW5nIGluIHRoZSBmb3JtYXQ6XHJcbiAgICAgKiBcImtleTEua2V5Mnx8a2V5My5rZXk0XCIsIHdoZXJlIGB8fGAgc2VwYXJhdGVzIHRoZSBwcmltYXJ5IGtleSBhbmQgbGFiZWwga2V5LFxyXG4gICAgICogYW5kIGAuYCBzZXBhcmF0ZXMgbmVzdGVkIGtleXMuXHJcbiAgICAgKiBcclxuICAgICAqIEV4YW1wbGU6XHJcbiAgICAgKiBJZiBgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZWAgaXMgXCJkYXRhLmlkfHxkYXRhLm5hbWVcIjpcclxuICAgICAqIC0gQ2FsbGluZyBgZ2V0VmFsdWVGcm9tRXhwdGVybmFsQXBpKDApYCB3aWxsIHJldHVybiBcImlkXCIuXHJcbiAgICAgKiAtIENhbGxpbmcgYGdldFZhbHVlRnJvbUV4cHRlcm5hbEFwaSgxKWAgd2lsbCByZXR1cm4gXCJuYW1lXCIuXHJcbiAgICAgKi9cclxuICAgIGdldFZhbHVlRnJvbUV4cHRlcm5hbEFwaShpID0gMCkge1xyXG4gICAgICAgIGxldCBleHRBcGlWYWx1ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddO1xyXG4gICAgICAgIGlmIChleHRBcGlWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBwYXJ0cyA9IGV4dEFwaVZhbHVlLnNwbGl0KCd8fCcpO1xyXG4gICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViUGFydHMgPSBwYXJ0c1tpXT8uc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgIGlmIChzdWJQYXJ0cz8ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzdWJQYXJ0c1tzdWJQYXJ0cy5sZW5ndGggLSAxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NQaWNrZXJTZXR0aW5nKHZhbHVlID0gZmFsc2UpIHtcclxuICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROYW1lLmNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QgPSBcImZvcm0tY29udHJvbCBtdWx0aS1zZWxlY3RcIjtcclxuICAgICAgICBpZiAodGhpcy5pc0N1c3RvbUNsYXNzICYmIHRoaXMuY3VzdG9tX2NsYXNzX25hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QgPSB0aGlzLmNsYXNzTGlzdCArICcgJyArIHRoaXMuY3VzdG9tX2NsYXNzX25hbWVbMF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy52YWxpZCB8fCAodGhpcy5maWVsZE5hbWUgJiYgdGhpcy5maWVsZE5hbWUuaW52YWxpZCAmJiB0aGlzLmlzTWFuZGF0b3J5ICYmICh0aGlzLmZpZWxkTmFtZS5kaXJ0eSB8fCB0aGlzLmZpZWxkTmFtZS50b3VjaGVkIHx8IHRoaXMuc2hvd0Vycm9yT25OZXh0KSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QgPSB0aGlzLmNsYXNzTGlzdCArICcgaW52YWxpZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QgPSB0aGlzLmNsYXNzTGlzdCArICcgdmFsaWQnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkNsYXNzIExpc3Q6IFwiLCB0aGlzLmNsYXNzTGlzdClcclxuICAgICAgICB0aGlzLmRyb3Bkb3duU2V0dGluZ3MgPSB7XHJcbiAgICAgICAgICAgIHNpbmdsZVNlbGVjdGlvbjogIXRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTXVsdGlwbGVTZWxlY3QnXSB8fCAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNdWx0aXBsZVNlbGVjdCddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTXVsdGlwbGVTZWxlY3QnXSA9PSAnZmFsc2UnKSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5maWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCA/IHRoaXMuZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQgOiAnU2VsZWN0ICBJdGVtJyxcclxuICAgICAgICAgICAgZW5hYmxlQ2hlY2tBbGw6IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VuYWJsZV9DaGVja19BbGwnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FbmFibGVfQ2hlY2tfQWxsJ10gIT0gJ2ZhbHNlJyA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgc2VsZWN0QWxsVGV4dDogJ1NlbGVjdCBBbGwnLFxyXG4gICAgICAgICAgICB1blNlbGVjdEFsbFRleHQ6ICdVblNlbGVjdCBBbGwnLFxyXG4gICAgICAgICAgICBlbmFibGVTZWFyY2hGaWx0ZXI6IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VuYWJsZV9TZWFyY2hfRmlsdGVyJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX1NlYXJjaF9GaWx0ZXInXSAhPSAnZmFsc2UnID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICBjbGFzc2VzOiB0aGlzLmNsYXNzTGlzdCxcclxuICAgICAgICAgICAgYmFkZ2VTaG93TGltaXQ6IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0JhZGdlX1Nob3dfTGltaXQnXSA/IE51bWJlcih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9CYWRnZV9TaG93X0xpbWl0J10pIDogMSxcclxuICAgICAgICAgICAgbGFiZWxLZXk6IHRoaXMubGFiZWxLZXlWYWwsXHJcbiAgICAgICAgICAgIHByaW1hcnlLZXk6IHRoaXMucHJpbWFyeUtleVZhbCxcclxuICAgICAgICAgICAgc2VhcmNoQnk6IFt0aGlzLmxhYmVsS2V5VmFsXSwgIFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogIXRoaXMuaXNFZGl0YWJsZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IGxpc3RPZkl0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zLmZvckVhY2goZWwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZWwgJiYgZWwuaGFzT3duUHJvcGVydHkodGhpcy5sYWJlbEtleVZhbCkpIHtcclxuICAgICAgICAgICAgICAgIGxpc3RPZkl0ZW1zLnB1c2goZWxbdGhpcy5sYWJlbEtleVZhbF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm11bHRpc2VsZWN0VG9vbHRpcCA9IGxpc3RPZkl0ZW1zLmpvaW4oJywgJylcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXMudmFsaWQ6IFwiLCB0aGlzLnZhbGlkKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpcy5tZXNzYWdlczogXCIsIHRoaXMubWVzc2FnZXMpXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGROYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGROYW1lLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB0aGlzIGlzIGJvdW5kIG9uIGNsb3NlIGV2ZW50XHJcbiAgICBvbk11bHRpc2VsZWN0Q2xpY2tlZChldmVudCkge1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YU9uQ2hhbmdlKFwiXCIpO1xyXG4gICAgICAgIHRoaXMuZmllbGROYW1lLmNvbnRyb2wubWFya0FzRGlydHkoKTtcclxuICAgICAgICBpZiAoIXRoaXMuaXNNYW5kYXRvcnkgfHwgKHRoaXMuaXNNYW5kYXRvcnkgJiYgdGhpcy5zZWxlY3RlZEl0ZW1zICYmIEFycmF5LmlzQXJyYXkodGhpcy5zZWxlY3RlZEl0ZW1zKSAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uTXVsdGlzZWxlY3RDbGlja2VkOiBcIiwgdGhpcy52YWxpZClcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUsIHRoaXMudmFsaWQpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1BpY2tlclNldHRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkl0ZW1TZWxlY3QoaXRlbTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdG9yZVZhbHVlcygpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1BpY2tlclNldHRpbmcoKTtcclxuICAgIH1cclxuICAgIE9uSXRlbURlU2VsZWN0KGl0ZW06IGFueSkge1xyXG4gICAgICAgIC8vIHVwZGF0ZSBtYW5kYXRvcnkgZmxhZyBpbiBhcHBEYXRhIGlmIGl0IGhhcyBjaGFuZ2VkIGNvbmRpdGlvbmFsbHlcclxuICAgICAgICAvLyB0aGlzLmlzTWFuZGF0b3J5IGlzIGNoYW5nZWQgY29ycmVjdGx5IGZyb20gYmFzZSBjbGFzcywgYnV0IGFwcERhdGEubWFuZGF0b3J5IGlzIG5vdCB1cGRhdGVkXHJcbiAgICAgICAgaWYgKHRoaXMuYXBwRGF0YS5tYW5kYXRvcnkgIT0gdGhpcy5pc01hbmRhdG9yeSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGEubWFuZGF0b3J5ID0gdGhpcy5pc01hbmRhdG9yeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdG9yZVZhbHVlcygpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1BpY2tlclNldHRpbmcoKTtcclxuICAgIH1cclxuICAgIG9uU2VsZWN0QWxsKGl0ZW1zOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmNoYW5nZVN0b3JlVmFsdWVzKCk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzUGlja2VyU2V0dGluZygpO1xyXG4gICAgfVxyXG4gICAgb25EZVNlbGVjdEFsbChpdGVtczogYW55KSB7XHJcbiAgICAgICAgLy8gdXBkYXRlIG1hbmRhdG9yeSBmbGFnIGluIGFwcERhdGEgaWYgaXQgaGFzIGNoYW5nZWQgY29uZGl0aW9uYWxseVxyXG4gICAgICAgIC8vIHRoaXMuaXNNYW5kYXRvcnkgaXMgY2hhbmdlZCBjb3JyZWN0bHkgZnJvbSBiYXNlIGNsYXNzLCBidXQgYXBwRGF0YS5tYW5kYXRvcnkgaXMgbm90IHVwZGF0ZWRcclxuICAgICAgICBpZiAodGhpcy5hcHBEYXRhLm1hbmRhdG9yeSAhPSB0aGlzLmlzTWFuZGF0b3J5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5tYW5kYXRvcnkgPSB0aGlzLmlzTWFuZGF0b3J5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jaGFuZ2VTdG9yZVZhbHVlcygpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc1BpY2tlclNldHRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VTdG9yZVZhbHVlcygpIHtcclxuICAgICAgICBsZXQgcHJpbWFyeUtleSA9IHRoaXMuZ2V0VmFsdWVGcm9tRXhwdGVybmFsQXBpKCkgfHwgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydQcmltYXJ5S2V5TmFtZSddIHx8ICdpZCc7XHJcbiAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW1zLm1hcChhID0+IGFbcHJpbWFyeUtleV0pO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnZhbGlkIGRlY2lkZXMgd2hldGhlciB0byBzaG93IHRoZSBpbmxpbmUgZXJyb3IgbWVzc2FnZSBvciBub3RcclxuICAgICAgICBpZiAoIXRoaXMuaXNNYW5kYXRvcnkgfHwgKHRoaXMuaXNNYW5kYXRvcnkgJiYgdGhpcy5maWVsZFZhbHVlICYmIEFycmF5LmlzQXJyYXkodGhpcy5maWVsZFZhbHVlKSAmJiB0aGlzLmZpZWxkVmFsdWUubGVuZ3RoID4gMCkpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgZmllbGRWYWx1ZSBpcyBbXSwgdGhlblxyXG4gICAgICAgIC8vIHNldHRpbmcgYmxhbmsgc3BhY2UgaXMgbmVjZXNzYXJ5IHRvIGJyaW5nIGluIG9yaWdpbmFsIHN0YXRlIGZvciB1c2UgY2FzZSBvZiBjb25kaXRpb25hbCBkaXNwbGF5XHJcbiAgICAgICAgLy8gaWYgW10gaXMgc2V0LCB0aGVuIGl0IHdpbGwgY29uc2lkZXIgYXMgdXNlciBoYXMgZW50ZXJlZCB2YWx1ZSBhbmQgbWFuZGF0b3J5IGNoZWNrIHdpbGwgZmFpbFxyXG4gICAgICAgIC8vIGV2ZW4gd2hlbiBmaWVsZCBpcyBub3QgdmlzaWJsZVxyXG4gICAgICAgIGlmIChcclxuICAgICAgICAgICAgKCF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ011bHRpcGxlU2VsZWN0J10gfHwgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTXVsdGlwbGVTZWxlY3QnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ011bHRpcGxlU2VsZWN0J10udG9Mb3dlckNhc2UoKSAhPSAndHJ1ZScpKVxyXG4gICAgICAgICAgICAmJiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX1NlYXJjaF9GaWx0ZXInXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FbmFibGVfU2VhcmNoX0ZpbHRlciddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSgodGhpcy5maWVsZFZhbHVlICYmIHRoaXMuZmllbGRWYWx1ZS5sZW5ndGggPiAwKSA/IHRoaXMuZmllbGRWYWx1ZVswXSA6ICcnLCB0aGlzLnZhbGlkKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSgodGhpcy5maWVsZFZhbHVlICYmIHRoaXMuZmllbGRWYWx1ZS5sZW5ndGggPiAwKSA/IHRoaXMuZmllbGRWYWx1ZSA6ICcnLCB0aGlzLnZhbGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5nZXRVcGRhdGVkVmFsdWUoKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkSXRlbXMpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0RGF0YSgpIHsgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgYXJyYXlzIGFuZCBvYmplY3RzXHJcbiAgICAgICAgdGhpcy5waWNrZXJWYWx1ZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25TZXR0aW5ncyA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jdXN0b21fY2xhc3NfbmFtZSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vcHRpb25zQXJpYUxhYmVsID0gW107XHJcbiAgICAgICAgLy8gY2xlYXIgc2V0VGltZW91dFxyXG4gICAgICAgIHRoaXMudGltZW91dElkcy5mb3JFYWNoKGlkID0+IGNsZWFyVGltZW91dChpZCkpO1xyXG4gICAgICAgIHRoaXMudGltZW91dElkcyA9IFtdO1xyXG4gICAgICAgIC8vIENsZWFuIHVwIFZpZXdDaGlsZCByZWZlcmVuY2VzXHJcbiAgICAgICAgdGhpcy5maWVsZE5hbWUgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RmllbGQgPSBudWxsO1xyXG4gICAgICAgIC8vIENsZWFuIHVwIGV2ZW50IGhhbmRsZXJzXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdERhdGEgJiYgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddICYmIHRoaXMuZmllbGREYXRhKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ11bdGhpcy5maWVsZERhdGEuaHRtbF9pZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsZWFuIHVwIGFueSBvdGhlciBleHRlcm5hbCByZWZlcmVuY2VzXHJcbiAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3QpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXModGhpcy52YXJpYWJsZU9iamVjdCkuZm9yRWFjaChrZXkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3Rba2V5XSAmJiB0eXBlb2YgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICAgICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xyXG4gICAgICAgIHRoaXMuc2VhcmNoU3ViamVjdC5jb21wbGV0ZSgpO1xyXG4gICAgICAgIHRoaXMucmVtb3ZlU2VhcmNoRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgICAgICBpZiAodGhpcy5jbGVhckJ1dHRvbikge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFyQnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsZWFyQ2xpY2tlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEZvciB1bmlxdWUgaHRtbCBpZFxyXG4gICAgICAgIHRoaXMuaHRtbF9pZCA9IHRoaXMuZmllbGREYXRhLmh0bWxfaWQ7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJfX19fX19fX19fX19fPlwiLHRoaXMuZmllbGREYXRhLmh0bWxfaWQpXHJcbiAgICAgICAgLy8gRU5EXHJcbiAgICAgICAgdGhpcy50YWJJbmRleFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUYWJJbmRleCddO1xyXG4gICAgICAgIHRoaXMucGlja2VyVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgIHRoaXMuYXNzaWduUGlja2VyT3B0aW9uVmFsdWVzKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvbiB2aWV3IGRhdGEgaW5pdCBQaWNrZXJWYWx1ZTogXCIsIHRoaXMucGlja2VyVmFsdWVzKVxyXG4gICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFZhbHVlRnJvbVJvd0RhdGEoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSkge1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSlcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbEFwaU9wdGlvblZhbHVlID0gZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgID8gdGhpcy5nZXRFeHRlcm5hbEFwaU9wdGlvblZhbHVlKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddLCBkYXRhWyd2YWx1ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIWV4dGVybmFsQXBpT3B0aW9uVmFsdWUgfHwgIUFycmF5LmlzQXJyYXkoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgV2VudCBXcm9uZyBpbiBQaWNrZXIgISEhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEFzc2lnbiB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IGV4dGVybmFsQXBpT3B0aW9uVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcztcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaWduUGlja2VyT3B0aW9uVmFsdWVzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnBpY2tlclZhbHVlcy5sZW5ndGggfHwgIXRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF92YWx1ZSddKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWx1ZVNldEZyb21Sb3dEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRWYWx1ZUZyb21EZWZhdWx0VmFsdWUodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10sIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFVwZGF0ZSBmaWVsZCBkYXRhXHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy8g4pyFIEFkZCB0aGlzIGJsb2NrIHRvIHNldCBzZWxlY3RlZEl0ZW1zIGV4cGxpY2l0bHlcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZmllbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5wcmltYXJ5S2V5VmFsIHx8ICdpZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuZHJvcGRvd25MaXN0LmZpbHRlcihvYmogPT4gb2JqW2tleV0gPT09IGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoSXRlbSA9IHJlc3VsdHMubGVuZ3RoID4gMCA/IHJlc3VsdHNbMF0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoSXRlbSAmJiBtYXRjaEl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcy5wdXNoKG1hdGNoSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5kcm9wZG93bkxpc3QuZmlsdGVyKG9iaiA9PiBvYmpbdGhpcy5wcmltYXJ5S2V5VmFsXSA9PT0gdGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG1hdGNoSXRlbSA9IHJlc3VsdHMubGVuZ3RoID4gMCA/IHJlc3VsdHNbMF0gOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hJdGVtICYmIG1hdGNoSXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbbWF0Y2hJdGVtXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpOyAvLyDinIUgdHJpZ2dlciBVSSByZWZyZXNoXHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF92YWx1ZSddICYmIHRoaXMuZmllbGRWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5nZXRJRCh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2RlZmF1bHRfdmFsdWUnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5jdXN0b21fY2xhc3NfbmFtZSA9IHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlICYmIHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lID8gdGhpcy5maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUuc3BsaXQoJ3wnKSA6IFtdXHJcbiAgICAgICAgLy9mb3IgVmFsaWRhdGUgQU5EIE1hbmRhdG9yeSBlcnJvclxyXG4gICAgICAgIGlmICh0aGlzLnJvb3REYXRhICYmIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ11bdGhpcy5maWVsZERhdGEuaHRtbF9pZF0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc19tYXRlcmlhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdEZpZWxkICYmIHR5cGVvZiB0aGlzLnNlbGVjdEZpZWxkLmZvY3VzID09PSBcImZ1bmN0aW9uXCIpIHRoaXMuc2VsZWN0RmllbGQuZm9jdXMoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMuZmllbGREYXRhLmh0bWxfaWQpLnF1ZXJ5U2VsZWN0b3IoJ3NlbGVjdCcpKSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKS5xdWVyeVNlbGVjdG9yKCdzZWxlY3QnKS5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdFNlbGVjdFBpY2tlcigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIFNwZWNpYWwgaGFuZGxpbmcgZm9yIHNlYXJjaCBmaWx0ZXIgd2l0aCBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VuYWJsZV9TZWFyY2hfRmlsdGVyJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX1NlYXJjaF9GaWx0ZXInXSAhPSAnZmFsc2UnICYmIFxyXG4gICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2RlZmF1bHRfdmFsdWUnXSAmJiB0aGlzLmZpZWxkVmFsdWUpIHtcclxuICAgICAgICAgICAgLy8gRW5zdXJlIHNlbGVjdGVkSXRlbXMgcmVmbGVjdHMgdGhlIGRlZmF1bHQgdmFsdWUgYWZ0ZXIgdmlldyBpbml0aWFsaXphdGlvblxyXG4gICAgICAgICAgICB0aGlzLmFzc2lnblBpY2tlck9wdGlvblZhbHVlcygpO1xyXG4gICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbml0U2VsZWN0UGlja2VyKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc19tYXRlcmlhbCAmJiAkICYmICQoJy5tdWx0aS1zZWxlY3QnKSAmJiAkKCcubXVsdGktc2VsZWN0JylbJ3NlbGVjdHBpY2tlciddKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgJCgnLm11bHRpLXNlbGVjdCcpLnNlbGVjdHBpY2tlcignZGVzdHJveScpO1xyXG4gICAgICAgICAgICAgICAgJCgnLm11bHRpLXNlbGVjdCcpLnNlbGVjdHBpY2tlcigpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0VmFsdWVGcm9tUm93RGF0YSgpIHtcclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgdGhpcy5yb3dEYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLnJvd0RhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IHRoaXMucm93RGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXNzaWduUGlja2VyT3B0aW9uVmFsdWVzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1ZhbHVlU2V0RnJvbVJvd0RhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCdyZXNJc0RpZmZIYW5kbGVyJykgJiYgdGhpcy5yb3dEYXRhLnJlc0lzRGlmZkhhbmRsZXJcclxuICAgICAgICAgICAgJiYgdGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCdyZXNwb25zZV9hcGlfa2V5JykpIHtcclxuICAgICAgICAgICAgbGV0IHZhbDtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgdGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhbCA9IHRoaXMucmV0dXJuVmFsdWVGcm9tQ2FsbGJhY2soa2V5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsdWVTZXRGcm9tUm93RGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFZhbHVlRnJvbURlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWU6IHN0cmluZywgZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IFtmdWxsQXBpS2V5LCBpc0RlZmF1bHRWYWx1ZSwga2V5TmFtZV0gPSBkZWZhdWx0VmFsdWUuc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgY29uc3QgW2Z1bGxkYXRhQXBpS2V5LCBhcGlLZXldID0gZnVsbEFwaUtleS5zcGxpdCgnLicpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdmFsdWVEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShmdWxsZGF0YUFwaUtleSwgZGF0YVsndmFsdWUnXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRFbnRpdHkgPSB2YWx1ZURhdGEuZmluZChpdGVtID0+IGl0ZW1bYXBpS2V5XSA9PT0gaXNEZWZhdWx0VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRlZmF1bHRFbnRpdHkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTWFzdGVyIGVudGl0eSB2YWx1ZSBmb3IgZGVmYXVsdDpcIiwgZGVmYXVsdEVudGl0eS5tYXN0ZXJfZW50aXR5X3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5nZXRJRChkZWZhdWx0RW50aXR5W2tleU5hbWVdKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiTm8gZGVmYXVsdCBlbnRpdHkgZm91bmRcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoZGVmYXVsdFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXNzaWduUGlja2VyT3B0aW9uVmFsdWVzKCkge1xyXG4gICAgICAgIHRoaXMuZHJvcGRvd25MaXN0ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMucHJpbWFyeUtleVZhbCA9IHRoaXMuZ2V0VmFsdWVGcm9tRXhwdGVybmFsQXBpKCkgfHwgJ2lkJztcclxuICAgICAgICB0aGlzLmxhYmVsS2V5VmFsID0gdGhpcy5nZXRWYWx1ZUZyb21FeHB0ZXJuYWxBcGkoMSkgfHwgJ2l0ZW1OYW1lJztcclxuXHJcbiAgICAgICAgLy8gaWYgaW4gc2VhcmNoIG1vZGUsIGFkZCBwcmV2aW91c2x5IHNlbGVjdGVkIGl0ZW1zIHRvIHBpY2tlciB2YWx1ZXMsIHRvIG1haW50YWluIGxpc3RcclxuICAgICAgICBpZih0aGlzLmlzQXBpU2VhcmNoRW5hYmxlZCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBZGRpbmcgU2VsZWN0ZWQgaXRlbXMgZm9yIHNlYXJjaDogXCIsIHRoaXMuc2VsZWN0ZWRJdGVtcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHNlbGVjdGVkIGl0ZW1zIGludG8gT1BfVkFMVUV8fERJU1BMQVlfVkFMVUUgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgcHZTZWxlY3RlZCA9IHRoaXMuc2VsZWN0ZWRJdGVtcy5tYXAoaXRlbSA9PiBgJHtpdGVtW3RoaXMucHJpbWFyeUtleVZhbF19fHwke2l0ZW1bdGhpcy5sYWJlbEtleVZhbF19YCk7XHJcbiAgICAgICAgICAgICAgICAvLyBtZXJnZSB3aXRoIHBpY2tlciB2YWx1ZXMgYW5kIHJlbW92ZSBkdXBsaWNhdGVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IFsuLi5uZXcgU2V0KFsuLi5wdlNlbGVjdGVkLCAuLi50aGlzLnBpY2tlclZhbHVlc10pXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmZpZWxkVmFsdWUgJiYgdGhpcy5maWVsZERpc3BsYXlWYWx1ZSkgeyAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZmllbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb21iaW5lIGJvdGggYXJyYXlzIG9wZXJhdGlvblZhbHVlcyBhbmQgYXBpRGF0YSAoZGlzcGxheVZhbHVlcykgd2l0aCAnfHwnICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhaXJzID0gdGhpcy5maWVsZFZhbHVlLm1hcCgoaWQsIGluZGV4KSA9PiBgJHtpZH18fCR7dGhpcy5maWVsZERpc3BsYXlWYWx1ZVtpbmRleF19YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbWVyZ2Ugd2l0aCBwaWNrZXIgdmFsdWVzIGFuZCByZW1vdmUgZHVwbGljYXRlc1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyVmFsdWVzID0gWy4uLm5ldyBTZXQoWy4uLnBhaXJzLCAuLi50aGlzLnBpY2tlclZhbHVlc10pXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhaXJzID0gW2Ake3RoaXMuZmllbGRWYWx1ZX18fCR7dGhpcy5maWVsZERpc3BsYXlWYWx1ZX1gXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IFsuLi5uZXcgU2V0KFsuLi5wYWlycywgLi4udGhpcy5waWNrZXJWYWx1ZXNdKV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucGlja2VyVmFsdWVzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgb2JqW3RoaXMucHJpbWFyeUtleVZhbF0gPSBlbGVtZW50LnNwbGl0KCd8fCcpWzBdO1xyXG4gICAgICAgICAgICBvYmpbdGhpcy5sYWJlbEtleVZhbF0gPSBlbGVtZW50LnNwbGl0KCd8fCcpWzFdO1xyXG4gICAgICAgICAgICB0aGlzLmRyb3Bkb3duTGlzdC5wdXNoKG9iaik7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkcm9wZG93bkxpc3Q6IFwiLCB0aGlzLmRyb3Bkb3duTGlzdClcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5maWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZmllbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZS5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJpbWFyeUtleU5hbWUnXSlcclxuICAgICAgICAgICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5wcmltYXJ5S2V5VmFsIHx8ICdpZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdHMgPSB0aGlzLmRyb3Bkb3duTGlzdC5maWx0ZXIob2JqID0+IG9ialtrZXldID09PSBlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2hJdGVtID0gcmVzdWx0cy5sZW5ndGggPiAwID8gcmVzdWx0c1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoSXRlbSAmJiBtYXRjaEl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMucHVzaChtYXRjaEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYodGhpcy5pc1ZhbGlkRGF0YVN0b3JlKXtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmNoZWNrSWZGaWVsZFZhbHVlSXNFeGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuY2hhbmdlU3RvcmVWYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgIGxldCByZXN1bHRzID0gdGhpcy5kcm9wZG93bkxpc3QuZmlsdGVyKG9iaiA9PiBvYmpbdGhpcy5wcmltYXJ5S2V5VmFsXSA9PT0gdGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGxldCBtYXRjaEl0ZW0gPSByZXN1bHRzLmxlbmd0aCA+IDAgPyByZXN1bHRzWzBdIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChtYXRjaEl0ZW0gJiYgbWF0Y2hJdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMgPSBbbWF0Y2hJdGVtXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5pc1ZhbGlkRGF0YVN0b3JlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYgdGhlcmUgaXMgbm8gbWF0Y2ggaXRlbSwgcmVzZXQgZmllbGQgdmFsdWUgdG8gc2hvdyBwbGFjZWhvbGRlclxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb2RlIGZvciBtdWx0aXNlbGVjdFRvb2x0aXBcclxuICAgICAgICBsZXQgbGlzdE9mSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbXMuZm9yRWFjaChlbCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbCAmJiBlbC5oYXNPd25Qcm9wZXJ0eSh0aGlzLmxhYmVsS2V5VmFsKSkge1xyXG4gICAgICAgICAgICAgICAgbGlzdE9mSXRlbXMucHVzaChlbFt0aGlzLmxhYmVsS2V5VmFsXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubXVsdGlzZWxlY3RUb29sdGlwID0gbGlzdE9mSXRlbXMuam9pbignLCAnKVxyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvbkFQSUNhbGxiYWNrIFBpY2tlcjogXCIsIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgICAgIGxldCBhcGlEYXRhID0gbnVsbDsgLy8gY29udGFpbnMgaWRzIG9yIG9wZXJhdGlvbmFsIHZhbHVlc1xyXG4gICAgICAgIHRoaXMuZmllbGREaXNwbGF5VmFsdWUgPSBudWxsO1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGFwaURhdGEgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICAgICAgaWYodGhpcy5pc0FwaVNlYXJjaEVuYWJsZWQgJiYgdGhpcy5hcGlLZXlGb3JEaXNwbGF5VmFsdWUgIT0gJycpIHsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZERpc3BsYXlWYWx1ZSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAge1wicmVzcG9uc2VfYXBpX2tleVwiOiB0aGlzLmFwaUtleUZvckRpc3BsYXlWYWx1ZX0sIFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKHRoaXMucm93RGF0YT8ucmVzcG9uc2VfYXBpX2tleSAmJiB0aGlzLnJvd0RhdGE/LnJlc3BvbnNlX2FwaV9rZXkubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgIGFwaURhdGEgPSBkYXRhLmhhc093blByb3BlcnR5KHRoaXMucm93RGF0YS5yZXNwb25zZV9hcGlfa2V5WzFdKSA/IGRhdGFbdGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXlbMV1dIDogbnVsbFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGFwaURhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXBpRGF0YSkgJiYgdGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gYXBpRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGlja2VyVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hc3NpZ25QaWNrZXJPcHRpb25WYWx1ZXMoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdFBpY2tlcigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gYXBpRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFzc2lnblBpY2tlck9wdGlvblZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIGRhdGEpO1xyXG4gICAgICAgIC8vIGlmICghdGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IHJlc0RhdGEgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICAvLyAgICAgaWYgKHJlc0RhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlc0RhdGEpICYmIHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgPSByZXNEYXRhO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMucGlja2VyVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuYXNzaWduUGlja2VyT3B0aW9uVmFsdWVzKCk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0UGlja2VyKCk7XHJcbiAgICAgICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHJlc0RhdGE7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFzc2lnblBpY2tlck9wdGlvblZhbHVlcygpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfSBlbHNlIGlmICh0aGlzLnJvd0RhdGE/LnJlc3BvbnNlX2FwaV9rZXkgJiYgdGhpcy5yb3dEYXRhPy5yZXNwb25zZV9hcGlfa2V5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgIC8vICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IGRhdGEuaGFzT3duUHJvcGVydHkodGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXlbMV0pID8gZGF0YVt0aGlzLnJvd0RhdGEucmVzcG9uc2VfYXBpX2tleVsxXV0gOiBudWxsXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgIC8vICAgICB9LCAwKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIC8vZm9yIHJlcGVhdGVkIGV4dGVybmFsQXBpT3B0aW9uVmFsdWVcclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YVsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddICYmIHRoaXMucm93RGF0YVsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10gPSB0aGlzLnJvd0RhdGFbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXS5qb2luKCd8fCcpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4dGVybmFsQXBpT3B0aW9uVmFsdWU6IFwiLHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvciBtdWx0aXBsZSBhcGkga2V5cyB0aGUgdmFsdWUgdGhhdCBuZWVkcyB0byBiZSBzZXQgd2lsbCBjb21lXHJcbiAgICAgICAgLy8gZnJvbSBhZGRpdGlvbmFsUGFyYW1ldGVyIHdpdGggdHlwZSBleHRlcm5hbEFwaU9wdGlvblZhbHVlXHJcbiAgICAgICAgLy8gaWYodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHBhcmFtZXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZShwYXJhbWV0ZXIudmFsdWUsIGRhdGEpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmIChleHRlcm5hbEFwaU9wdGlvblZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVybmFsQXBpT3B0aW9uVmFsdWUpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgPSBleHRlcm5hbEFwaU9wdGlvblZhbHVlO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJWYWx1ZXMgPSB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXM7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgV2VudCBXcm9uZyBpbiBQaWNrZXIgISEhJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhbGwgZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZVwiKTtcclxuICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSA9IHRoaXMuZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSwgZGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZTogXCIsIGV4dGVybmFsQXBpT3B0aW9uVmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGV4dGVybmFsQXBpT3B0aW9uVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGV4dGVybmFsQXBpT3B0aW9uVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcztcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2lnblBpY2tlck9wdGlvblZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdFNlbGVjdFBpY2tlcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2RlZmF1bHRfdmFsdWUnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5lcnJvcignU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gUGlja2VyICEhIScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddLmluY2x1ZGVzKGRhdGEuaGFuZGxlcl9uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVBcGlrZXlzID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10uc3BsaXQoJ3x8JykubWFwKHN0ciA9PiBzdHIudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleUFwaUtleSA9IHZhbHVlQXBpa2V5c1swXS5zcGxpdCgnIyMnKVswXTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlQXBpS2V5ID0gdmFsdWVBcGlrZXlzWzFdLnNwbGl0KCcjIycpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleUFwaUtleSA9PSBkYXRhLmhhbmRsZXJfbmFtZSB8fCB2YWx1ZUFwaUtleSA9PSBkYXRhLmhhbmRsZXJfbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXNzaWduUGlja2VyT3B0aW9uVmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldHRpbmcgdGhlIGZpZWxkIGRhdGEgYmVsb3cgYmVjYXVzZSBnZXQgRHluYW1pYyBVdGlsIGlzIGNoZWNraW5nIHRoZSBwb3NzaWJsZSB2YWx1ZXNcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFBpY2tlckFyck9mT2JqZWN0KHBpY2tlclZhbHVlcykge1xyXG4gICAgICAgIGxldCBsaXN0T2ZQb3NzaWJsZVZhbHVlcyA9IFtdO1xyXG4gICAgICAgIHBpY2tlclZhbHVlcy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgICAgICBsaXN0T2ZQb3NzaWJsZVZhbHVlcy5wdXNoKHsgaWQ6IGVsZW1lbnQuc3BsaXQoJ3x8JylbMF0sIHZhbHVlOiBlbGVtZW50LnNwbGl0KCd8fCcpWzFdIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHJldHVybiBsaXN0T2ZQb3NzaWJsZVZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgbGV0IGFwaV9rZXlfc2V0dGVyID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IHNraXBGaWVsZHNJZHMgPSBnZXRfZGF0YS5za2lwRmllbGRzSWRzO1xyXG4gICAgICAgIGlmIChnZXRfZGF0YS51bmlxdWVfaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLnVuaXF1ZV9pZHM7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmFwcERhdGEuaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuZmllbGREYXRhLmFwaV9rZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gWy4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKV07XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAuLi5nZXRfZGF0YS5hcGlLZXlzXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgYXBpX2tleV9zZXR0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICAgICAgICBpZiAodW5pcXVlX2lkX3ZhbHVlLmluY2x1ZGVzKGVsbSkgPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQocGFyYW10ZXIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdleHRlcm5hbEFwaU9wdGlvblZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmdldElEKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF92YWx1ZSddKSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiZGVmYXVsdF92YWx1ZTogXCIsIHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0cyA9IHRoaXMuZHJvcGRvd25MaXN0LmZpbHRlcihvYmogPT4gb2JqW3RoaXMucHJpbWFyeUtleVZhbF0gPT09IHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2hJdGVtID0gcmVzdWx0cy5sZW5ndGggPiAwID8gcmVzdWx0c1swXSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hJdGVtICYmIG1hdGNoSXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW21hdGNoSXRlbV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlfa2V5X3NldHRlciA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlckxpc3QgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfHwnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyTGlzdC5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFzc2lnblBpY2tlck9wdGlvblZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlzZWxlY3RUb29sdGlwID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbml0U2VsZWN0UGlja2VyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tdWx0aXNlbGVjdFRvb2x0aXAgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghc2tpcEZpZWxkc0lkcz8uaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubXVsdGlzZWxlY3RUb29sdGlwID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVzZXR0aW5nIHRoZSBmb3JtIGZpZWxkIGRvZXMgbm90IHdvcmsgYmVjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gb25jZSBpdCBnZXRzIHJlc2V0IGlmIGl0IGlzIG5vdCB0b3VjaGVkIGFnYWluIHRoZW4gdGhlIGZpZWxkIHdvbid0IGdldCBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgZm9ybSBnZXRzIHN1Ym1pdHRlZCBhbmQgZXJyb3JzIHdvbid0IHNob3cgdXBcclxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZSBmaWVsZCBhcyB1blRvdWNoZWQsIFByaXN0aW5lICwgdXBkYXRlIHZhbHVlIGFuIHZhbGlkaXR5IGFuZCBzaG93RXJyb3JPbk5leHQgdG8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50ZXh0RmllbGQuY29udHJvbC5yZXNldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JPbk5leHQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGROYW1lLmNvbnRyb2wubWFya0FzVW50b3VjaGVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE5hbWUuY29udHJvbC5tYXJrQXNQcmlzdGluZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGROYW1lLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYoZ2V0X2RhdGEuYXBpS2V5cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlID09PSAnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZScpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgbGV0IHBhcmFtZXRlckxpc3QgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfHwnKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYocGFyYW1ldGVyTGlzdC5pbmNsdWRlcyhlbG0pKXtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IFtdO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5waWNrZXJWYWx1ZXMgPSBbXTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ2dldF9kYXRhJywgdHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jyk7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRfZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZ2V0X2RhdGEpLmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gdGhpcy5maWVsZERhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5pbmNsdWRlcyh1bmlxdWVfaWRfdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5nZXRJRChnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdKTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdmFsdWUpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBnZXRVcGRhdGVkVmFsdWUoKSB7XHJcbiAgICAgICAgY29uc3QgcHJpbWFyeURhdGEgPSB0aGlzLnNldFByaW1hcnlLZXkodGhpcy5wcmltYXJ5S2V5SW5kZXgpO1xyXG4gICAgICAgIHRoaXMudmFsaWQgPSAoIXRoaXMuaXNNYW5kYXRvcnkgfHwgKHRoaXMuaXNNYW5kYXRvcnkgJiYgdGhpcy5maWVsZFZhbHVlLmxlbmd0aCA+IDApKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmNvbW1vblV0aWwuZ2V0SUQodGhpcy5maWVsZFZhbHVlKSwgdGhpcy52YWxpZCk7XHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcHBEYXRhLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodGhpcy5maWVsZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVfdHlwZSA9PT0gJ0V4dGVybmFsQXBpJykge1xyXG4gICAgICAgICAgICB0aGlzLmRlcGVuZGVuY3lIYW5kbGVyKCdvblNlbGVjdCcsIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZUlkOiB0aGlzLmh0bWxfaWQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5jb21tb25VdGlsLmdldElEKHRoaXMuZmllbGRWYWx1ZSlcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdvblNlbGVjdCcsIHByaW1hcnlEYXRhLCB0cnVlLCB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVJZDogdGhpcy5odG1sX2lkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuY29tbW9uVXRpbC5nZXRJRCh0aGlzLmZpZWxkVmFsdWUpXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVsndW5pcXVlSWRzJ10uaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmdldElEKFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJ3ZhbHVlcyddLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVtkYXRhWyd1bmlxdWVJZHMnXS5pbmRleE9mKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCldIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bMF0pO1xyXG4gICAgICAgICAgICAgICAgLy8gb2YgdHJpZ2dlclVwZGF0ZSBpcyB0cnVlIHRoZW4gdXBkYXRlIHRoZSBmaWVsZCB2YWx1ZSBvciB1cGRhdGUgdmFsdWUgYW5kIGVtaXQgY29uZGl0aW9ucyBldmVudFxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzVmFsaWREYXRhU3RvcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrSWZGaWVsZFZhbHVlSXNFeGlzdCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpc1tkYXRhWyd0cmlnZ2VyVXBkYXRlJ10gPyAndXBkYXRlRmllbGRFbnRpdHknIDogJ3VwZGF0ZUZpZWxkRGF0YSddKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGNoYW5nZU1hcCA9IHtcclxuICAgICAgICAvLyAgICAgZmllbGRfbGFiZWw6ICdmaWVsZERhdGEuZmllbGRfbGFiZWwnLFxyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlcl90ZXh0OiAnZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQnLFxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOiAnZmllbGREYXRhLnRvb2x0aXAnLFxyXG4gICAgICAgIC8vICAgICAnYWRkaXRpb25hbF9wYXJhbWV0ZXJzWypdQXJpYS1MYWJlbCc6ICdhZGRpdGlvbmFsUGFyYW1ldGVyW1xcJ0FyaWEtTGFiZWxcXCddJyxcclxuICAgICAgICAvLyAgICAgJ2ZpZWxkX2RhdGEucG9zc2libGVfdmFsdWVzWypdJzogJ3BpY2tlclZhbHVlcydcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlTWFwKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBsYW5nVmFsID0gdGhpcy5zd2l0Y2hMYW5nKHZhbHVlLCBkYXRhLCBjaGFuZ2VNYXApO1xyXG4gICAgICAgIC8vICAgICBpZiAobGFuZ1ZhbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc1tsYW5nVmFsLmtleV0gPSBsYW5nVmFsLnZhbDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTW9kYWxDc3NDbGFzcygpIHtcclxuICAgICAgICBjb25zdCBtb2RhbFdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmNkay1vdmVybGF5LXBhbmUnKTtcclxuICAgICAgICBpZiAobW9kYWxXcmFwcGVyKSB7XHJcbiAgICAgICAgICAgIG1vZGFsV3JhcHBlci5mb3JFYWNoKG13ID0+IHtcclxuICAgICAgICAgICAgICAgIG13LmNsYXNzTGlzdC50b2dnbGUoJ21vZGFsLXBpY2tlci13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgICAgICBtdy5jbGFzc0xpc3QudG9nZ2xlKHRoaXMubW9kYWxHZW5lcmljQ3NzQ2xhc3MpO1xyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcblxyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhICYmIGNoYW5nZXMucm9vdERhdGEuY3VycmVudFZhbHVlLmxhbmdDaGFuZ2VkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlTGFuZ3VhZ2UoY2hhbmdlcy5maWVsZERhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICAgICAgaWYgKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24ucHJldmlvdXNWYWx1ZSAhPT0gY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1BpY2tlclNldHRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gaWYgKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNFZGl0YWJsZScpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZkZpZWxkVmFsdWVJc0V4aXN0KCkge1xyXG4gICAgICAgIGxldCBmb3VuZCA9IHRoaXMuZ2V0UGlja2VyQXJyT2ZPYmplY3QodGhpcy5waWNrZXJWYWx1ZXMpLmZpbmRJbmRleCgoaSkgPT4gaS5pZCA9PT0gdGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICBpZiAoZm91bmQgPT09IC0xKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwZXJmb3JtU2VhcmNoKHNlYXJjaFRlcm06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1NlYXJjaCBUZXJtOicsIHNlYXJjaFRlcm0pO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRGF0YU9uQ2hhbmdlKHNlYXJjaFRlcm0pO1xyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25LZXlVcCcsIHtcclxuICAgICAgICAgICAgaW50ZXJuYWxBUElSZXNwb25zZUVtaXR0ZXI6IHRoaXMuaW50ZXJuYWxBUElSZXNwb25zZUVtaXR0ZXIsXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVEYXRhT25DaGFuZ2UodGVybTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgaWQ6IHRoaXMucmVxdWVzdEFwaUtleUZvclNlYXJjaCxcclxuICAgICAgICAgICAgYXBpVXJsOiAnJyxcclxuICAgICAgICAgICAgYXBpS2V5OiB0aGlzLnJlcXVlc3RBcGlLZXlGb3JTZWFyY2gsXHJcbiAgICAgICAgICAgIHZhbHVlOiB0ZXJtXHJcbiAgICAgICAgfTsgICAgICAgICAgIFxyXG4gICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSGFuZGxlIGRyb3Bkb3duIG9wZW4vY2xvc2UgdG9nZ2xlXHJcbiAgICBwcml2YXRlIGhhbmRsZURyb3Bkb3duVG9nZ2xlQ2xpY2soKSB7ICAgICAgXHJcbiAgICAgICAgIC8vIENoZWNrIGlmIGRyb3Bkb3duIGlzIG9wZW4gYnkgbG9va2luZyBmb3IgdGhlIGRyb3Bkb3duLWxpc3QgZWxlbWVudCB3aXRob3V0IGhpZGRlbiBhdHRyaWJ1dGVcclxuICAgICAgICBjb25zdCBkcm9wZG93bkxpc3QgPSB0aGlzLmFuZzJTZWxlY3RGaWVsZD8ubmF0aXZlRWxlbWVudD8ucXVlcnlTZWxlY3RvcignLmRyb3Bkb3duLWxpc3QnKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBjb25zdCBpc0Ryb3Bkb3duT3BlbiA9IGRyb3Bkb3duTGlzdCAmJiAhZHJvcGRvd25MaXN0Lmhhc0F0dHJpYnV0ZSgnaGlkZGVuJyk7XHJcbiAgICAgICAgaWYgKCFpc0Ryb3Bkb3duT3BlbilcclxuICAgICAgICAgICAgcmV0dXJuOyBcclxuICAgICAgICBcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdEcm9wZG93biBpcyBvcGVuaW5nJyk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gc2V0IHNlYXJjaCBpbnB1dCBlbGVtZW50IGlmIG5vdCBzZXRcclxuICAgICAgICAvLyBpZiAoIXRoaXMuc2VhcmNoSW5wdXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NlYXJjaElucHV0RWxlbWVudCBpcyBub3Qgc2V0Jyk7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0dXBTZWFyY2hJbnB1dCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIHNldHVwIHNlYXJjaCBmaWVsZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgLy8gZnVuY3Rpb25hbGl0eSBuZWVkIHRvIGZldGNoIGFwaSB3aXRoIGJsYW5rIHZhbHVlIG9uIG9wZW5pbmcgdGhlIGRyb3Bkb3duXHJcbiAgICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoKCcnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgb25Ecm9wZG93bkNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzQXBpU2VhcmNoRW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDaGVjayBpZiBpdCdzIHRoZSBkcm9wZG93biB0b2dnbGUvaGVhZGVyIGFyZWFcclxuICAgICAgICBpZiAodGFyZ2V0LmNsb3Nlc3QoJy5jLWJ0bicpIHx8IHRhcmdldC5jbG9zZXN0KCcuZHJvcGRvd24tYnRuJykpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnRHJvcGRvd24gdG9nZ2xlIGNsaWNrZWQnKTtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVEcm9wZG93blRvZ2dsZUNsaWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBwcml2YXRlIHNldHVwU2VhcmNoSW5wdXQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5yZW1vdmVTZWFyY2hFdmVudExpc3RlbmVycygpO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuYW5nMlNlbGVjdEZpZWxkPy5uYXRpdmVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHNlYXJjaElucHV0ID0gdGhpcy5hbmcyU2VsZWN0RmllbGQubmF0aXZlRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcubGlzdC1maWx0ZXIgLmMtaW5wdXQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICAgIGlmIChzZWFyY2hJbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0RWxlbWVudCA9IHNlYXJjaElucHV0O1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYm91bmRPblNlYXJjaElucHV0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY2xlYXJCdXR0b24gPSB0aGlzLmFuZzJTZWxlY3RGaWVsZC5uYXRpdmVFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5saXN0LWZpbHRlciAuYy1jbGVhcicpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgIGlmICh0aGlzLmNsZWFyQnV0dG9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xlYXJDbGlja2VkLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlbW92ZVNlYXJjaEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaElucHV0RWxlbWVudCAmJiB0aGlzLmJvdW5kT25TZWFyY2hJbnB1dCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaElucHV0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuYm91bmRPblNlYXJjaElucHV0KTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hJbnB1dEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uU2VhcmNoSW5wdXQoZXZlbnQ6IEV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgdGVybSA9IChldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudCkudmFsdWU7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTdWJqZWN0Lm5leHQodGVybSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25DbGVhckNsaWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5wZXJmb3JtU2VhcmNoKCcnKTtcclxuICAgIH1cclxufSIsIjxkaXYgY2xhc3M9XCJ7e2Nzc0NsYXNzZXN9fVwiIGlkPVwie3todG1sX2lkIH19XCIgKm5nSWY9XCJpc1Zpc2libGUgfHwgaXNTYWZhcmlDbGFzc1wiPlxyXG5cdDwhLS0gTm9ybWFsIEJvb3RzdHJhcCBVSSAtLT5cclxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzX21hdGVyaWFsOyBlbHNlIElzTWF0ZXJpYWxcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkRGF0YS5maWVsZF9sYWJlbCE9JydcIj5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCIhaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIj57e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19PC9sYWJlbD5cclxuXHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCJpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiXHJcblx0XHRcdFx0XHRcdFtpbm5lckhUTUxdPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsXCI+PC9sYWJlbD5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG5cdFx0XHRcdDxidXR0b24gKm5nSWY9XCJoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvb2x0aXBcIiBbdG9vbHRpcF09XCJmaWVsZERhdGEudG9vbHRpcFwiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyBmaWVsZERhdGEudG9vbHRpcCBcIj5pPC9idXR0b24+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIWFkZGl0aW9uYWxQYXJhbWV0ZXJbJ011bHRpcGxlU2VsZWN0J10gfHwgYWRkaXRpb25hbFBhcmFtZXRlclsnTXVsdGlwbGVTZWxlY3QnXSAhPSAndHJ1ZSc7IGVsc2UgSXNNdWx0aXBsZVNlbGVjdFwiPlxyXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FbmFibGVfU2VhcmNoX0ZpbHRlciddIHx8ICggdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX1NlYXJjaF9GaWx0ZXInXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FbmFibGVfU2VhcmNoX0ZpbHRlciddID09ICdmYWxzZScgKTsgZWxzZSBhbmd1bGFyTXVsdGlzZWxlY3RcIj5cclxuXHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8c2VsZWN0XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImN1c3RvbS1zZWxlY3Qge3tpc0N1c3RvbUNsYXNzICYmIGN1c3RvbV9jbGFzc19uYW1lID8gY3VzdG9tX2NsYXNzX25hbWVbMF0gOiAnJ319IHt7ICF2YWxpZCB8fCAoZmllbGROYW1lLmludmFsaWQgJiYgaXNNYW5kYXRvcnkgJiYgKGZpZWxkTmFtZS5kaXJ0eSB8fCBmaWVsZE5hbWUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSAgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCJcclxuXHRcdFx0XHRcdFx0XHRcdCNzZWxlY3RGaWVsZCBbbmdTdHlsZV09XCJ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2ZvbnQtc2l6ZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3NpemUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQnZm9udC1zdHlsZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y29sb3I6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X2NvbG9yLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2JvcmRlci1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5ib3JkZXJfY29sb3IsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9oZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR3aWR0aDogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX3dpZHRoLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0J2JhY2tncm91bmQtY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYmFja2dyb3VuZF9jb2xvclxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiIFsobmdNb2RlbCldPVwiZmllbGRWYWx1ZVwiICNmaWVsZE5hbWU9XCJuZ01vZGVsXCJcclxuXHRcdFx0XHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddLnJlcGxhY2UoJyV2YWx1ZSUnLCBmaWVsZFZhbHVlKSA6ICdTZWxlY3QgYSAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsIFwiXHJcblx0XHRcdFx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCIgW3JlcXVpcmVkXT1cImlzTWFuZGF0b3J5XCIgKGNoYW5nZSk9XCJnZXRVcGRhdGVkVmFsdWUoKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPnt7IGZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0IH19PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdFx0XHQ8b3B0aW9uICpuZ0Zvcj1cImxldCBvcHQgb2YgcGlja2VyVmFsdWVzXCIgdmFsdWU9XCJ7e2NvbW1vblV0aWwuZ2V0SUQob3B0KX19XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt7Y29tbW9uVXRpbC5nZXRWYWx1ZShvcHQpfX08L29wdGlvbj5cclxuXHRcdFx0XHRcdFx0XHQ8L3NlbGVjdD5cclxuXHJcblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiZXJyb3JDb250YWluZXI7IGNvbnRleHQ6e2ZpZWxkTmFtZTpmaWVsZE5hbWV9XCI+PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDxuZy10ZW1wbGF0ZSAjSXNNdWx0aXBsZVNlbGVjdD5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxyXG5cdFx0XHRcdFx0PGFuZ3VsYXIyLW11bHRpc2VsZWN0IFtkYXRhXT1cImRyb3Bkb3duTGlzdFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRJdGVtc1wiIFxyXG5cdFx0XHRcdFx0W3NldHRpbmdzXT1cImRyb3Bkb3duU2V0dGluZ3NcIlxyXG5cdFx0XHRcdFx0KG9uU2VsZWN0KT1cIm9uSXRlbVNlbGVjdCgkZXZlbnQpXCIgXHJcblx0XHRcdFx0XHQob25EZVNlbGVjdCk9XCJPbkl0ZW1EZVNlbGVjdCgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdChvblNlbGVjdEFsbCk9XCJvblNlbGVjdEFsbCgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdChvbkRlU2VsZWN0QWxsKT1cIm9uRGVTZWxlY3RBbGwoJGV2ZW50KVwiXHJcblx0XHRcdFx0XHQob25DbG9zZSk9XCJvbk11bHRpc2VsZWN0Q2xpY2tlZCgkZXZlbnQpXCJcclxuXHRcdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddLnJlcGxhY2UoJyV2YWx1ZSUnLCBmaWVsZFZhbHVlKSA6ICdTZWxlY3QgYSAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsIFwiXHJcblx0XHRcdFx0XHRbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCJcclxuXHRcdFx0XHRcdFt0aXRsZV09XCJtdWx0aXNlbGVjdFRvb2x0aXBcIlxyXG5cdFx0XHRcdFx0KGNsaWNrKT1cIm9uRHJvcGRvd25DbGljaygkZXZlbnQpXCJcclxuXHRcdFx0XHRcdCNhbmcyU2VsZWN0RmllbGRcclxuXHRcdFx0XHRcdCNmaWVsZE5hbWU9XCJuZ01vZGVsXCI+PC9hbmd1bGFyMi1tdWx0aXNlbGVjdD5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0PCEtLSA8c2VsZWN0IG11bHRpcGxlXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwibXVsdGktc2VsZWN0IHt7aXNDdXN0b21DbGFzcyAmJiBjdXN0b21fY2xhc3NfbmFtZSA/IGN1c3RvbV9jbGFzc19uYW1lWzBdIDogJyd9fSB7eyAhdmFsaWQgfHwgKGZpZWxkTmFtZS5pbnZhbGlkICYmIGlzTWFuZGF0b3J5ICYmIChmaWVsZE5hbWUuZGlydHkgfHwgZmllbGROYW1lLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSkgID8gJ2ludmFsaWQnIDogJ3ZhbGlkJyB9fVwiXHJcblx0XHRcdFx0XHRcdCNzZWxlY3RGaWVsZCBbbmdTdHlsZV09XCJ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCdmb250LWZhbWlseSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X25hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdmb250LXNpemUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zaXplLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQnZm9udC1zdHlsZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRjb2xvcjogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdib3JkZXItY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYm9yZGVyX2NvbG9yLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRoZWlnaHQ6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9oZWlnaHQsXHJcblx0XHRcdFx0XHRcdFx0XHRcdHdpZHRoOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcblx0XHRcdFx0XHRcdFx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3JcclxuXHRcdFx0XHRcdFx0XHRcdFx0fVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiIFsobmdNb2RlbCldPVwiZmllbGRWYWx1ZVwiICNmaWVsZE5hbWU9XCJuZ01vZGVsXCJcclxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10ucmVwbGFjZSgnJXZhbHVlJScsIGZpZWxkVmFsdWUpIDogJ1NlbGVjdCBhICcgKyBmaWVsZERhdGEuZmllbGRfbGFiZWwgXCJcclxuXHRcdFx0XHRcdFx0W2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiIFtyZXF1aXJlZF09XCJpc01hbmRhdG9yeVwiIChjaGFuZ2UpPVwiZ2V0VXBkYXRlZFZhbHVlKClcIj5cclxuXHRcdFx0XHRcdFx0PG9wdGlvbiB2YWx1ZT1cIlwiIGRpc2FibGVkPnt7IGZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0IH19PC9vcHRpb24+XHJcblx0XHRcdFx0XHRcdDxvcHRpb24gKm5nRm9yPVwibGV0IG9wdCBvZiBwaWNrZXJWYWx1ZXNcIiB2YWx1ZT1cInt7Y29tbW9uVXRpbC5nZXRJRChvcHQpfX1cIj5cclxuXHRcdFx0XHRcdFx0XHR7e2NvbW1vblV0aWwuZ2V0VmFsdWUob3B0KX19PC9vcHRpb24+XHJcblx0XHRcdFx0XHQ8L3NlbGVjdD4gLS0+XHJcblx0XHRcdFx0XHQ8IS0tIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImVycm9yQ29udGFpbmVyOyBjb250ZXh0OntmaWVsZE5hbWU6ZmllbGROYW1lfVwiPjwvbmctdGVtcGxhdGU+XHRcdFx0IC0tPlxyXG5cdFx0XHRcdFx0PGRpdiAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCIgKm5nSWY9XCIhdmFsaWQgJiYgZmllbGROYW1lLmRpcnR5XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnkgJiYgbWVzc2FnZS50eXBlID09ICdNYW5kYXRvcnknXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0W25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0PG5nLXRlbXBsYXRlICNhbmd1bGFyTXVsdGlzZWxlY3Q+XHJcblx0XHRcdFx0PGFuZ3VsYXIyLW11bHRpc2VsZWN0IFtkYXRhXT1cImRyb3Bkb3duTGlzdFwiIFsobmdNb2RlbCldPVwic2VsZWN0ZWRJdGVtc1wiIFxyXG5cdFx0XHRcdFtzZXR0aW5nc109XCJkcm9wZG93blNldHRpbmdzXCJcclxuXHRcdFx0XHQob25TZWxlY3QpPVwib25JdGVtU2VsZWN0KCRldmVudClcIiBcclxuXHRcdFx0XHQob25EZVNlbGVjdCk9XCJPbkl0ZW1EZVNlbGVjdCgkZXZlbnQpXCJcclxuXHRcdFx0XHQob25TZWxlY3RBbGwpPVwib25TZWxlY3RBbGwoJGV2ZW50KVwiXHJcblx0XHRcdFx0KG9uRGVTZWxlY3RBbGwpPVwib25EZVNlbGVjdEFsbCgkZXZlbnQpXCJcclxuXHRcdFx0XHQob25DbG9zZSk9XCJvbk11bHRpc2VsZWN0Q2xpY2tlZCgkZXZlbnQpXCJcclxuICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddLnJlcGxhY2UoJyV2YWx1ZSUnLCBmaWVsZFZhbHVlKSA6ICdTZWxlY3QgYSAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsIFwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCJcclxuICAgICAgICAgICAgICAgIFt0aXRsZV09XCJtdWx0aXNlbGVjdFRvb2x0aXBcIlxyXG5cdFx0XHRcdChjbGljayk9XCJvbkRyb3Bkb3duQ2xpY2soJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAjYW5nMlNlbGVjdEZpZWxkXHJcbiAgICAgICAgICAgICAgICAjZmllbGROYW1lPVwibmdNb2RlbFwiPjwvYW5ndWxhcjItbXVsdGlzZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwiIXZhbGlkICYmIGZpZWxkTmFtZS5kaXJ0eVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeSAmJiBtZXNzYWdlLnR5cGUgPT0gJ01hbmRhdG9yeSdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHRcdFx0XHQ8IS0tIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImVycm9yQ29udGFpbmVyOyBjb250ZXh0OntmaWVsZE5hbWU6ZmllbGROYW1lfVwiPjwvbmctdGVtcGxhdGU+IC0tPlxyXG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHQ8bmctdGVtcGxhdGUgI2Vycm9yQ29udGFpbmVyIGxldC1maWVsZE5hbWU9XCJmaWVsZE5hbWVcIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG5cdFx0XHRcdFx0XHRcdCpuZ0lmPVwiKHNob3dFcnJvck9uTmV4dCAmJiAhaXNFZGl0YWJsZSkgfHwgKGZpZWxkTmFtZS5pbnZhbGlkICYmIChmaWVsZE5hbWUuZGlydHkgfHwgZmllbGROYW1lLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0ICkpXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiAqbmdJZj1cIihzaG93RXJyb3JPbk5leHQgJiYgIWlzRWRpdGFibGUgJiYgIWZpZWxkVmFsdWUpIHx8IChmaWVsZE5hbWUuZXJyb3JzICYmIGZpZWxkTmFtZT8uZXJyb3JzLnJlcXVpcmVkKVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgKm5nSWY9XCJpc01hbmRhdG9yeSAmJiBtZXNzYWdlLnR5cGUgPT0gJ01hbmRhdG9yeSdcIlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJmaWVsZE5hbWUuZXJyb3JzICYmIGZpZWxkTmFtZT8uZXJyb3JzLm1pbmxlbmd0aFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PHAgKm5nSWY9XCJtZXNzYWdlLnR5cGUgPT0gJ21pbmxlbmd0aCdcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJmaWVsZE5hbWUuZXJyb3JzICYmIGZpZWxkTmFtZT8uZXJyb3JzLnBhdHRlcm5cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwibWVzc2FnZS50eXBlID09ICdSZWdleCdcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSAjc2luZ2xlRXJyb3JNZXNzYWdlPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcblx0XHRcdFx0XHRcdCpuZ0lmPVwiZmllbGROYW1lLmludmFsaWQgJiYgKGZpZWxkTmFtZS5kaXJ0eSB8fCBmaWVsZE5hbWUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJmaWVsZE5hbWU/LmVycm9ycy5yZXF1aXJlZCB8fCBmaWVsZE5hbWU/LmVycm9ycy5taW5sZW5ndGggfHwgZmllbGROYW1lPy5lcnJvcnMucGF0dGVyblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogZXJyb3JNZXNzYWdlRGF0YS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdHt7ZXJyb3JNZXNzYWdlRGF0YS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNob3dDb21wYXJpc29uRXJyb3IgfCBrZXl2YWx1ZVwiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDxwIFtuZ1N0eWxlXT1cInsnY29sb3InOiBpdGVtLnZhbHVlLmNvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0e3tpdGVtLnZhbHVlLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdDwhLS0gTWF0ZXJpYWwgVUkgLS0+XHJcblx0PG5nLXRlbXBsYXRlICNJc01hdGVyaWFsPlxyXG5cdFx0PG1hdC1mb3JtLWZpZWxkPlxyXG5cdFx0XHQ8bWF0LWxhYmVsICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L21hdC1sYWJlbD5cclxuXHRcdFx0PG1hdC1zZWxlY3QgcGxhY2Vob2xkZXI9XCJ7e2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0fX1cIlxyXG5cdFx0XHRcdGNsYXNzPVwie3tpc0N1c3RvbUNsYXNzICYmIGN1c3RvbV9jbGFzc19uYW1lID8gY3VzdG9tX2NsYXNzX25hbWVbMF0gOiAnJ319IHt7ICF2YWxpZCB8fCAoZmllbGROYW1lLmludmFsaWQgJiYgaXNNYW5kYXRvcnkgJiYgKGZpZWxkTmFtZS5kaXJ0eSB8fCBmaWVsZE5hbWUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpKSAgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCJcclxuXHRcdFx0XHQjc2VsZWN0RmllbGQgW3ZhbHVlXT1cImZpZWxkVmFsdWVcIiBbbmdTdHlsZV09XCJmaWVsZFN0eWxlXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgWyhuZ01vZGVsKV09XCJmaWVsZFZhbHVlXCIgI2ZpZWxkTmFtZT1cIm5nTW9kZWxcIlxyXG5cdFx0XHRcdFthcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXS5yZXBsYWNlKCcldmFsdWUlJywgZmllbGRWYWx1ZSkgOiAnU2VsZWN0IGEgJyArIGZpZWxkRGF0YS5maWVsZF9sYWJlbCBcIlxyXG5cdFx0XHRcdFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiBbcmVxdWlyZWRdPVwiaXNNYW5kYXRvcnlcIiAoc2VsZWN0aW9uQ2hhbmdlKT1cImdldFVwZGF0ZWRWYWx1ZSgpXCJcclxuXHRcdFx0XHQob3BlbmVkQ2hhbmdlKT1cInRvZ2dsZU1vZGFsQ3NzQ2xhc3MoKVwiXHJcblx0XHRcdFx0W211bHRpcGxlXSA9IFwiYWRkaXRpb25hbFBhcmFtZXRlclsnTXVsdGlwbGVTZWxlY3QnXSAmJiBhZGRpdGlvbmFsUGFyYW1ldGVyWydNdWx0aXBsZVNlbGVjdCddID09ICd0cnVlJ1wiID5cclxuXHRcdFx0XHQ8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIHBpY2tlclZhbHVlczsgbGV0IGkgPSBpbmRleFwiIHZhbHVlPVwie3tjb21tb25VdGlsLmdldElEKG9wdCl9fVwiIFthdHRyLmFyaWEtbGFiZWxdPVwib3B0aW9uc0FyaWFMYWJlbCA/IG9wdGlvbnNBcmlhTGFiZWxbaV0gOiAnU2VsZWN0ICcgKyBvcHRcIj5cclxuXHRcdFx0XHRcdHt7Y29tbW9uVXRpbC5nZXRWYWx1ZShvcHQpfX08L21hdC1vcHRpb24+XHJcblx0XHRcdDwvbWF0LXNlbGVjdD5cclxuXHRcdFx0PCEtLSBUb29sdGlwIC0tPlxyXG5cdFx0XHQ8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBtYXRTdWZmaXggc3R5bGU9XCJkaXNwbGF5OmlubGluZVwiICpuZ0lmPVwiaGFzVG9vbHRpcFwiIHR5cGU9XCJidXR0b25cIlxyXG5cdFx0XHRcdGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0b1wiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCJcclxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+XHJcblx0XHRcdFx0aVxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuXHRcdDwvbWF0LWZvcm0tZmllbGQ+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwibXVsdGlwbGVFcnJvck1lc3NhZ2U7IGVsc2Ugc2luZ2xlRXJyb3JNZXNzYWdlXCI+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuXHRcdFx0XHRcdCpuZ0lmPVwiKHNob3dFcnJvck9uTmV4dCAmJiAhaXNFZGl0YWJsZSkgfHwgKGZpZWxkTmFtZS5pbnZhbGlkICYmIChmaWVsZE5hbWUuZGlydHkgfHwgZmllbGROYW1lLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0ICkpXCI+XHJcblx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiKHNob3dFcnJvck9uTmV4dCAmJiAhaXNFZGl0YWJsZSkgfHwgKGZpZWxkTmFtZS5lcnJvcnMgJiYgZmllbGROYW1lPy5lcnJvcnMucmVxdWlyZWQpXCI+XHJcblx0XHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnkgJiYgbWVzc2FnZS50eXBlID09ICdNYW5kYXRvcnknXCJcclxuXHRcdFx0XHRcdFx0XHRbbmdTdHlsZV09XCJ7J2NvbG9yJzogcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0XHR7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJmaWVsZE5hbWUuZXJyb3JzICYmIGZpZWxkTmFtZT8uZXJyb3JzLm1pbmxlbmd0aFwiPlxyXG5cdFx0XHRcdFx0XHQ8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnbWlubGVuZ3RoJ1wiIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PGRpdiAqbmdJZj1cImZpZWxkTmFtZS5lcnJvcnMgJiYgZmllbGROYW1lPy5lcnJvcnMucGF0dGVyblwiPlxyXG5cdFx0XHRcdFx0XHQ8cCAqbmdJZj1cIm1lc3NhZ2UudHlwZSA9PSAnUmVnZXgnXCIgW25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdFx0e3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiXHJcblx0XHRcdFx0Km5nSWY9XCJmaWVsZE5hbWUuaW52YWxpZCAmJiAoZmllbGROYW1lLmRpcnR5IHx8IGZpZWxkTmFtZS50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dClcIj5cclxuXHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiZmllbGROYW1lPy5lcnJvcnMucmVxdWlyZWQgfHwgZmllbGROYW1lPy5lcnJvcnMubWlubGVuZ3RoIHx8IGZpZWxkTmFtZT8uZXJyb3JzLnBhdHRlcm5cIj5cclxuXHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogZXJyb3JNZXNzYWdlRGF0YS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0e3tlcnJvck1lc3NhZ2VEYXRhLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHRcdDxkaXY+XHJcblx0XHRcdFx0XHQ8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdFx0e3tpdGVtLnZhbHVlLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdDwvbmctdGVtcGxhdGU+XHJcbjwvZGl2PiJdfQ==