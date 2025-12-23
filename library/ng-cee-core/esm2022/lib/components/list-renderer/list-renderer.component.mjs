import { Component, Input, afterRender } from '@angular/core';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { EmptyUtil } from '../../utils/empty-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { YouTubePlayerModule } from '@angular/youtube-player';
import { FormsModule } from '@angular/forms';
// import { CeeVideoComponent } from '../../field-components/cee-video/cee-video.component';
// import { CeeAttachmentsComponent } from '../../field-components/cee-attachments/cee-attachments.component';
// import { DynamicFormComponent } from '../dynamic-form/dynamic-form.component';
// import { AccordionRendererComponent } from '../accordion-renderer/accordion-renderer.component';
// import { CeeTableComponent } from '../../field-components/cee-table/cee-table.component';
// import { CeeLinkComponent } from '../../field-components/cee-link/cee-link.component';
// import { CeeButtonComponent } from '../../field-components/cee-button/cee-button.component';
// import { CeePickerComponent } from '../../field-components/cee-picker/cee-picker.component';
// import { CeeImageComponent } from '../../field-components/cee-image/cee-image.component';
// import { CeeMenuComponent } from '../../field-components/cee-menu/cee-menu.component';
// import { CeeTextfieldComponent } from '../../field-components/cee-textfield/cee-textfield.component';
// import { CeeLabelComponent } from '../../field-components/cee-label/cee-label.component';
import { NgStyle, NgSwitch } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, NgComponentOutlet } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
// import { CeeTableV2Component } from '../../field-components/cee-table-v2/cee-table-v2.component';
import { defer } from 'rxjs';
import { MatPaginatorModule } from '@angular/material/paginator';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared-events-service.service";
import * as i2 from "../../services/internal-cee-emitter-service.service";
import * as i3 from "../../models/api-data/api-data.service";
import * as i4 from "../../models/app-data/app-data.service";
import * as i5 from "../../services/wfe-step-loader.service";
import * as i6 from "../../services/cee-api-service.service";
import * as i7 from "@angular/material/dialog";
import * as i8 from "@angular/material/snack-bar";
import * as i9 from "@angular/common/http";
import * as i10 from "@angular/router";
import * as i11 from "@angular/material/form-field";
import * as i12 from "@angular/material/input";
import * as i13 from "@angular/common";
import * as i14 from "@angular/forms";
import * as i15 from "@angular/material/paginator";
const _c0 = a0 => ({ "color": a0 });
const _c1 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3 });
const _c2 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3, expandable: true });
const _c3 = () => ["List", "List-Expandable"];
const _c4 = (a0, a1, a2) => ({ name: a0, value: a1, type: "list", cellData: a2 });
const _c5 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c6 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true, primaryKeyIndex: a4 });
const _c7 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, primaryKeyIndex: a4 });
function ListRendererComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "mat-form-field", 7)(2, "input", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponent_ng_container_0_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterTxt, $event) || (ctx_r1.filterTxt = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function ListRendererComponent_ng_container_0_div_1_Template_input_keyup_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterTxt);
} }
function ListRendererComponent_ng_container_0_ng_container_2_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 12);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, message_r3.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r3.message_text, " ");
} }
function ListRendererComponent_ng_container_0_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_2_div_1_p_1_Template, 2, 4, "p", 11);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function ListRendererComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_2_div_1_Template, 2, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext);
} }
function ListRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 16)(1, "span", 17);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 18);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template_span_click_3_listener() { const chipArray_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.deleteChips(chipArray_r5)); });
    i0.ɵɵtext(4, "x");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const chipArray_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", chipArray_r5.keyName, " ");
} }
function ListRendererComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 14);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template, 5, 1, "div", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.chipsArray);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24)(2, "input", 25);
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r8 = i0.ɵɵnextContext(); const data_r10 = ctx_r8.$implicit; const pos_r11 = ctx_r8.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r10, $event.target.checked, pos_r11)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r11 : "check_" + pos_r11)("id", ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r11 : "check_" + pos_r11)("checked", ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["rowData"]["value"] == "1" : data_r10[ctx_r1.primaryKeyVal] == ctx_r1.checkedItems[pos_r11])("disabled", ctx_r1.selectedObj.checkbox ? !data_r10.fields[ctx_r1.selectedObj.checkbox]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r11);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r11 : "check_" + pos_r11);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.checkbox ? data_r10.fields[ctx_r1.selectedObj.checkbox]["field_label"] : "");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27)(2, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.radioValue, $event) || (ctx_r1.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r12); const data_r10 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r10, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r8 = i0.ɵɵnextContext();
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r1.selectedObj.radio ? data_r10.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r11 : "radio" + "_" + pos_r11);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.radioValue);
    i0.ɵɵproperty("value", ctx_r1.selectedObj.radio ? pos_r11 : data_r10[ctx_r1.primaryKeyVal])("disabled", ctx_r1.selectedObj.radio ? !data_r10.fields[ctx_r1.selectedObj.radio]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r11);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.radio ? data_r10.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r11 : "radio" + "_" + pos_r11);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.radio ? data_r10.fields[ctx_r1.selectedObj.radio]["field_label"] : "");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r15 = ctx.$implicit;
    const child_position_r16 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(3);
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, child_field_r15, data_r10, pos_r11, "child_" + child_position_r16));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const field_r19 = ctx_r17.$implicit;
    const position_r20 = ctx_r17.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r20, " ", field_r19.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r19.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r19)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r19.child_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_Template, 1, 0, null, 31);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const field_r19 = ctx_r17.$implicit;
    const position_r20 = ctx_r17.index;
    const ctx_r8 = i0.ɵɵnextContext();
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, field_r19, data_r10, pos_r11, position_r20));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_container_1_Template, 4, 8, "ng-container", 30)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const elseField_r21 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r19.field_type === "Generic Block")("ngIfElse", elseField_r21);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const data_r10 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r10 ? null : data_r10); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r10 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r23); const data_r10 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r10 ? null : data_r10); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.collapseTitle, i0.ɵɵsanitizeHtml);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r24); const data_r10 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r10 ? null : data_r10); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.expandTitle, i0.ɵɵsanitizeHtml);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r25 = ctx.$implicit;
    const child_position_r26 = ctx.index;
    const ctx_r8 = i0.ɵɵnextContext(4);
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, child_field_r25, data_r10, pos_r11, "child_" + child_position_r26));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext();
    const field_r28 = ctx_r26.$implicit;
    const position_r29 = ctx_r26.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r29, " ", field_r28.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r28.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r28)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r28.child_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_0_Template, 1, 0, null, 31);
} if (rf & 2) {
    const ctx_r26 = i0.ɵɵnextContext();
    const field_r28 = ctx_r26.$implicit;
    const position_r29 = ctx_r26.index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const data_r10 = ctx_r8.$implicit;
    const pos_r11 = ctx_r8.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r28, data_r10, pos_r11, position_r29));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_container_1_Template, 4, 8, "ng-container", 30)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r28 = ctx.$implicit;
    const elseField_r30 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r28.field_type === "Generic Block")("ngIfElse", elseField_r30);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_button_2_Template, 2, 1, "button", 32)(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_3_Template, 2, 1, "ng-container", 3)(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "div");
    i0.ɵɵtemplate(7, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_ng_container_7_Template, 4, 2, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r10["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.collapseTitle) && !ctx_r1.isHTML(ctx_r1.expandTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandedElement === data_r10 && ctx_r1.isHTML(ctx_r1.collapseTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandedElement !== data_r10 && ctx_r1.isHTML(ctx_r1.expandTitle));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r10 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r10.expandable_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_1_Template, 5, 7, "ng-container", 3)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_2_Template, 5, 7, "ng-container", 3);
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_Template_div_click_3_listener() { const ctx_r12 = i0.ɵɵrestoreView(_r7); const data_r10 = ctx_r12.$implicit; const pos_r11 = ctx_r12.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r10, pos_r11)); })("keyup.enter", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_Template_div_keyup_enter_3_listener() { const ctx_r13 = i0.ɵɵrestoreView(_r7); const data_r10 = ctx_r13.$implicit; const pos_r11 = ctx_r13.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r10, pos_r11)); });
    i0.ɵɵtemplate(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_4_Template, 4, 2, "ng-container", 5)(5, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_ng_container_5_Template, 8, 15, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r10 = ctx.$implicit;
    const pos_r11 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Multi-Select");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Single-Select");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("carousel-item list-item list-item-pos-", pos_r11, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r11 ? "list-item-selected" : "", " ", ctx_r1.type == "List-Multi-Select" ? ctx_r1.storeData.includes(data_r10[ctx_r1.primaryKeyVal]) ? "list-item-checked" : "list-item-unchecked" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r10.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable" && ctx_r1.hidenRows);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 19);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.previous()); });
    i0.ɵɵtext(2, "<");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_ng_container_3_Template, 6, 12, "ng-container", 20);
    i0.ɵɵelementStart(4, "div", 21);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵtext(5, ">");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.rowDataShown);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 24)(2, "input", 25);
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r32); const ctx_r32 = i0.ɵɵnextContext(); const data_r34 = ctx_r32.$implicit; const pos_r35 = ctx_r32.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r34, $event.target.checked, pos_r35)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 26);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext();
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r35 : "check_" + pos_r35)("id", ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r35 : "check_" + pos_r35)("checked", ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["rowData"]["value"] == "1" : data_r34[ctx_r1.primaryKeyVal] == ctx_r1.checkedItems[pos_r35])("disabled", ctx_r1.selectedObj.checkbox ? !data_r34.fields[ctx_r1.selectedObj.checkbox]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r35 : "check_" + pos_r35);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.checkbox ? data_r34.fields[ctx_r1.selectedObj.checkbox]["field_label"] : "");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 27)(2, "input", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.radioValue, $event) || (ctx_r1.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r36); const data_r34 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r34, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 29);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r32 = i0.ɵɵnextContext();
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r1.selectedObj.radio ? data_r34.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r35 : "radio" + "_" + pos_r35);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.radioValue);
    i0.ɵɵproperty("value", ctx_r1.selectedObj.radio ? pos_r35 : data_r34[ctx_r1.primaryKeyVal])("disabled", ctx_r1.selectedObj.radio ? !data_r34.fields[ctx_r1.selectedObj.radio]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r35);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.radio ? data_r34.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r35 : "radio" + "_" + pos_r35);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.radio ? data_r34.fields[ctx_r1.selectedObj.radio]["field_label"] : "");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r39 = ctx.$implicit;
    const child_position_r40 = ctx.index;
    const ctx_r32 = i0.ɵɵnextContext(3);
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, child_field_r39, data_r34, pos_r35, "child_" + child_position_r40));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext();
    const field_r42 = ctx_r40.$implicit;
    const position_r43 = ctx_r40.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r43, " ", field_r42.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r42.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r42)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r42.child_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_Template, 1, 0, null, 31);
} if (rf & 2) {
    const ctx_r40 = i0.ɵɵnextContext();
    const field_r42 = ctx_r40.$implicit;
    const position_r43 = ctx_r40.index;
    const ctx_r32 = i0.ɵɵnextContext();
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, field_r42, data_r34, pos_r35, position_r43));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_container_1_Template, 4, 8, "ng-container", 30)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r42 = ctx.$implicit;
    const elseField_r44 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r42.field_type === "Generic Block")("ngIfElse", elseField_r44);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 33);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r45); const data_r34 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r34 ? null : data_r34); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r34 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r34 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r46 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r46); const data_r34 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r34 ? null : data_r34); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.collapseTitle, i0.ɵɵsanitizeHtml);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 34);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_4_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r47); const data_r34 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r34 ? null : data_r34); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r1.expandTitle, i0.ɵɵsanitizeHtml);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r48 = ctx.$implicit;
    const child_position_r49 = ctx.index;
    const ctx_r32 = i0.ɵɵnextContext(4);
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, child_field_r48, data_r34, pos_r35, "child_" + child_position_r49));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext();
    const field_r51 = ctx_r49.$implicit;
    const position_r52 = ctx_r49.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r52, " ", field_r51.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r51.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r51)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r51.child_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_0_Template, 1, 0, null, 31);
} if (rf & 2) {
    const ctx_r49 = i0.ɵɵnextContext();
    const field_r51 = ctx_r49.$implicit;
    const position_r52 = ctx_r49.index;
    const ctx_r32 = i0.ɵɵnextContext(2);
    const data_r34 = ctx_r32.$implicit;
    const pos_r35 = ctx_r32.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r51, data_r34, pos_r35, position_r52));
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_container_1_Template, 4, 8, "ng-container", 30)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r51 = ctx.$implicit;
    const elseField_r53 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r51.field_type === "Generic Block")("ngIfElse", elseField_r53);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_button_2_Template, 2, 1, "button", 32)(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_3_Template, 2, 1, "ng-container", 3)(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div")(6, "div");
    i0.ɵɵtemplate(7, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_ng_container_7_Template, 4, 2, "ng-container", 5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r34 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r34["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.collapseTitle) && !ctx_r1.isHTML(ctx_r1.expandTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandedElement === data_r34 && ctx_r1.isHTML(ctx_r1.collapseTitle));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.expandedElement !== data_r34 && ctx_r1.isHTML(ctx_r1.expandTitle));
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r34 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r34.expandable_fields);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 22);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_1_Template, 5, 7, "ng-container", 3)(2, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_2_Template, 5, 7, "ng-container", 3);
    i0.ɵɵelementStart(3, "div", 23);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_Template_div_click_3_listener() { const ctx_r36 = i0.ɵɵrestoreView(_r31); const data_r34 = ctx_r36.$implicit; const pos_r35 = ctx_r36.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r34, pos_r35)); })("keyup.enter", function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_Template_div_keyup_enter_3_listener() { const ctx_r37 = i0.ɵɵrestoreView(_r31); const data_r34 = ctx_r37.$implicit; const pos_r35 = ctx_r37.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r34, pos_r35)); });
    i0.ɵɵtemplate(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_4_Template, 4, 2, "ng-container", 5)(5, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_ng_container_5_Template, 8, 15, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r34 = ctx.$implicit;
    const pos_r35 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Multi-Select");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Single-Select");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("list-item list-item-pos-", pos_r35, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r35 ? "list-item-selected" : "", " ", ctx_r1.type == "List-Multi-Select" ? ctx_r1.storeData.includes(data_r34[ctx_r1.primaryKeyVal]) ? "list-item-checked" : "list-item-unchecked" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r34.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable" && ctx_r1.hidenRows);
} }
function ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_ng_container_1_Template, 6, 12, "ng-container", 20);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.displayValuesLazy);
} }
function ListRendererComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_3_div_1_Template, 2, 1, "div", 13);
    i0.ɵɵelement(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_3_ng_container_3_Template, 6, 1, "ng-container", 3)(4, ListRendererComponent_ng_container_0_ng_container_3_ng_container_4_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.chipsDisplay);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("list-loader ", ctx_r1.listLoading ? "list-pending" : "list-loaded", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.additionalParameters["ShowCarousel"] && ctx_r1.additionalParameters["ShowCarousel"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.additionalParameters["ShowCarousel"] || ctx_r1.additionalParameters["ShowCarousel"] && ctx_r1.additionalParameters["ShowCarousel"].toLowerCase() != "true");
} }
function ListRendererComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_Template, 1, 0, null, 31);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r54 = ctx.$implicit;
    const position_r55 = ctx.index;
    const ctx_r55 = i0.ɵɵnextContext();
    const data_r57 = ctx_r55.$implicit;
    const pos_r58 = ctx_r55.index;
    i0.ɵɵnextContext(3);
    const cellDataLoading_r59 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellDataLoading_r59)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, field_r54, data_r57, pos_r58, position_r55));
} }
function ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 37);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_Template, 2, 7, "ng-container", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r58 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("list-item list-item-pos-", pos_r58, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r58 ? "list-item-selected" : "", "");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionData.fields);
} }
function ListRendererComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_5_ng_container_1_Template, 3, 8, "ng-container", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.listElements);
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r61 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 51);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r61); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationFirstLabel);
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 52);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template_button_click_0_listener() { const pageNumber_r63 = i0.ɵɵrestoreView(_r62).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(pageNumber_r63)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r63 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("pagination-btn-page ", pageNumber_r63 === ctx_r1.pagination.currentPage ? "active" : "", "");
    i0.ɵɵattributeInterpolate1("aria-label", "Select page ", pageNumber_r63, "");
    i0.ɵɵproperty("disabled", pageNumber_r63 === "...");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(pageNumber_r63);
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 53);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r64); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(ctx_r1.pagination.pageCount)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === ctx_r1.pagination.pageCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationLastLabel);
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 54);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r65 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngValue", data_r65)("selected", data_r65 == ctx_r1.pagination.currentItemCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r65, "");
} }
function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r60 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "p", 43);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template, 2, 2, "button", 44);
    i0.ɵɵelementStart(4, "button", 45);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.paginationPrevious()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, ListRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template, 2, 7, "button", 46);
    i0.ɵɵelementStart(7, "button", 47);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.paginationNext()); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, ListRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template, 2, 2, "button", 48);
    i0.ɵɵelementStart(10, "select", 49);
    i0.ɵɵlistener("change", function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template_select_change_10_listener() { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onPaginationCountChange(); return i0.ɵɵresetView(ctx_r1.setPaginationCount()); });
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponent_ng_container_0_ng_container_6_div_1_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r60); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.pagination.currentItemCount, $event) || (ctx_r1.pagination.currentItemCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(11, ListRendererComponent_ng_container_0_ng_container_6_div_1_option_11_Template, 2, 3, "option", 50);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.getRangeLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.paginationFirstLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationPreviousLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === ctx_r1.pagination.pageCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationNextLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.paginationLastLabel);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.pagination.currentItemCount);
    i0.ɵɵattribute("aria-label", "Select no of items to be displayed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pagination.pageItems);
} }
function ListRendererComponent_ng_container_0_ng_container_6_mat_paginator_2_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 55);
    i0.ɵɵlistener("page", function ListRendererComponent_ng_container_0_ng_container_6_mat_paginator_2_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r66); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onMaterialPageChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("pageIndex", ctx_r1.pagination.currentPage - 1)("pageSizeOptions", ctx_r1.pagination.pageItems)("length", ctx_r1.pagination.itemCount);
} }
function ListRendererComponent_ng_container_0_ng_container_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r67 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 56);
    i0.ɵɵlistener("click", function ListRendererComponent_ng_container_0_ng_container_6_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r67); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.showMore()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.btnShowMoreName);
} }
function ListRendererComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_ng_container_6_div_1_Template, 12, 11, "div", 38)(2, ListRendererComponent_ng_container_0_ng_container_6_mat_paginator_2_Template, 1, 3, "mat-paginator", 39);
    i0.ɵɵelementStart(3, "div", 40);
    i0.ɵɵtemplate(4, ListRendererComponent_ng_container_0_ng_container_6_button_4_Template, 2, 1, "button", 41);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && !ctx_r1.ShowMore && ctx_r1.autoPagination && ctx_r1.paginationStyle !== "material");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && !ctx_r1.ShowMore && ctx_r1.autoPagination && ctx_r1.paginationStyle === "material");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.ShowMore && ctx_r1.ShowMoreHide);
} }
function ListRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_container_0_div_1_Template, 3, 2, "div", 4)(2, ListRendererComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 5)(3, ListRendererComponent_ng_container_0_ng_container_3_Template, 5, 6, "ng-container", 3)(4, ListRendererComponent_ng_container_0_ng_container_4_Template, 3, 1, "ng-container", 3)(5, ListRendererComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 3)(6, ListRendererComponent_ng_container_0_ng_container_6_Template, 5, 3, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.noDataFound && !ctx_r1.showLoading && !ctx_r1.showSkeletonLoader || ctx_r1.setFromStore && ctx_r1.noDataFound && !ctx_r1.showLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && ctx_r1.additionalParameters["ShowSkeletonLoader"] && ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
} }
function ListRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_6_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, ListRendererComponent_ng_template_1_ng_container_6_div_1_ng_container_1_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(2, "async");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext(2);
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(2, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_template_1_ng_container_6_div_1_Template, 3, 18, "div", 60);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasEmittedCompletion);
} }
function ListRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c5, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-list-renderer", 61);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("rootData", ctx_r1.rootData)("rowData", field_r69["rowData"])("sectionData", field_r69)("templateId", ctx_r1.templateId)("type", field_r69.field_type)("childList", field_r69["childList"]);
} }
function ListRendererComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Toogle Button Container ");
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_1_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_12_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_13_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_ng_container_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponent_ng_template_1_ng_container_14_ng_container_2_Template, 1, 0, "ng-container", 59);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r67 = i0.ɵɵnextContext();
    const field_r69 = ctx_r67.field;
    const data_r70 = ctx_r67.data;
    const position_r71 = ctx_r67.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r71, " ", field_r69.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r69.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r69)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r69.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r69["rowData"], field_r69, i0.ɵɵpureFunction3(8, _c4, ctx_r1.primaryKeyVal, data_r70[ctx_r1.primaryKeyVal], data_r70)));
} }
function ListRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 57);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_template_1_ng_container_1_Template, 4, 18, "ng-container", 58)(2, ListRendererComponent_ng_template_1_ng_container_2_Template, 4, 18, "ng-container", 58)(3, ListRendererComponent_ng_template_1_ng_container_3_Template, 4, 18, "ng-container", 58)(4, ListRendererComponent_ng_template_1_ng_container_4_Template, 4, 18, "ng-container", 58)(5, ListRendererComponent_ng_template_1_ng_container_5_Template, 4, 18, "ng-container", 58)(6, ListRendererComponent_ng_template_1_ng_container_6_Template, 2, 1, "ng-container", 58)(7, ListRendererComponent_ng_template_1_ng_container_7_Template, 4, 18, "ng-container", 58)(8, ListRendererComponent_ng_template_1_ng_container_8_Template, 4, 18, "ng-container", 58)(9, ListRendererComponent_ng_template_1_ng_container_9_Template, 4, 18, "ng-container", 58)(10, ListRendererComponent_ng_template_1_ng_container_10_Template, 3, 11, "ng-container", 58)(11, ListRendererComponent_ng_template_1_ng_container_11_Template, 2, 0, "ng-container", 58)(12, ListRendererComponent_ng_template_1_ng_container_12_Template, 4, 18, "ng-container", 58)(13, ListRendererComponent_ng_template_1_ng_container_13_Template, 4, 18, "ng-container", 58)(14, ListRendererComponent_ng_template_1_ng_container_14_Template, 4, 18, "ng-container", 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r69 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r69.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Textfield");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Image");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Picker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Video");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(15, _c3).includes(field_r69.field_type) ? field_r69.field_type : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "ToggleButton");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Accordion");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DynamicForm");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Attachments");
} }
function ListRendererComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 62);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 63);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 64);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 65);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 66);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 67);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 68);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 69);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 70);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 57);
    i0.ɵɵtemplate(1, ListRendererComponent_ng_template_3_ng_container_1_Template, 2, 0, "ng-container", 58)(2, ListRendererComponent_ng_template_3_ng_container_2_Template, 2, 0, "ng-container", 58)(3, ListRendererComponent_ng_template_3_ng_container_3_Template, 2, 0, "ng-container", 58)(4, ListRendererComponent_ng_template_3_ng_container_4_Template, 2, 0, "ng-container", 58)(5, ListRendererComponent_ng_template_3_ng_container_5_Template, 2, 0, "ng-container", 58)(6, ListRendererComponent_ng_template_3_ng_container_6_Template, 2, 0, "ng-container", 58)(7, ListRendererComponent_ng_template_3_ng_container_7_Template, 2, 0, "ng-container", 58)(8, ListRendererComponent_ng_template_3_ng_container_8_Template, 2, 0, "ng-container", 58)(9, ListRendererComponent_ng_template_3_ng_container_9_Template, 2, 0, "ng-container", 58);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r72 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r72.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Textfield");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Image");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Picker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Link");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "List");
} }
export class ListRendererComponent {
    sharedEventsServiceService;
    internalCEEEmitter;
    apiDataService;
    appDataService;
    wfeStepLoaderService;
    ceeApiService;
    dialog;
    snackBar;
    http;
    router;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    sectionData;
    stepId;
    templateId;
    type;
    rowData;
    rootData;
    childList = {};
    pagination = {
        pageItems: [10, 15, 20],
        currentItemCount: 10,
        showNext: true,
        showPrevious: false,
        currentPage: 1,
        pageCount: 1,
        itemCount: 1,
        startIndex: 0,
        endIndex: 0,
        paginationRange: 9
    };
    showPagination = false;
    autoPagination = true;
    showFilter = false;
    filterPlaceholderText = 'Filter';
    canRefresh = false;
    displayValues = [];
    displayValuesLazy = [];
    lazyInterval = [];
    searchData = new MatTableDataSource([]);
    showLoading = true;
    noDataFound = true;
    showSkeletonLoader = true;
    listElements = [];
    radioValue;
    checkedItems = [];
    storeData = [];
    primaryKeyVal = '';
    showErrorOnNext = false;
    cdRef;
    hasEmittedCompletion = false; // Flag to track completion emission
    messages = [];
    // App Data of the list cell
    listCellAppData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
        linkedBlockId: '',
        isRepeatedField: false,
        repeatedBlockFieldId: '',
        requestApiKey: [],
        responseApiKey: [],
        dataFormatSeparator: '',
        mandatory: false,
        editable: false,
        visible: false,
        value: '',
        isValid: true
    };
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
        linkedBlockId: '',
        isRepeatedField: false,
        repeatedBlockFieldId: '',
        requestApiKey: [],
        responseApiKey: [],
        dataFormatSeparator: '',
        mandatory: false,
        editable: false,
        visible: false,
        value: '',
        isValid: true
    };
    totalCountAppData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
        linkedBlockId: '',
        isRepeatedField: false,
        repeatedBlockFieldId: '',
        requestApiKey: [],
        responseApiKey: [],
        dataFormatSeparator: '',
        mandatory: false,
        editable: false,
        visible: false,
        value: '',
        isValid: true
    };
    chipsArray = [];
    chipsDisplay = false;
    chipsApiKeyToDisplay = null;
    contextArray = [];
    fieldIdMapApiKey = {}; // to map the api field id and the api key of a single field
    additionalParameters = {};
    setAPIKeyUtil;
    eventListHandler;
    apiKeyUtil;
    // apiSubscription: Subscription;
    variableObj = {};
    conditionalUtil;
    fieldData;
    isMandatory = false;
    is_bootstrap = false;
    blockRenderedData;
    commonUtil;
    filterKeys = [];
    filterAPIKey;
    paginationShowingResultHint = '%value%';
    hidenRows;
    expandedElement;
    expandTitle = 'Show';
    collapseTitle = 'Hide';
    filterTxt = '';
    isVisible = false;
    paginationNextLabel = 'Next';
    paginationPreviousLabel = 'Previous';
    paginationStyle = 'bootstrap';
    pages = [];
    fieldValue;
    serverPagination = false; // set this to true when Pagination Type is server
    serverPaginationKeys = [];
    checkEmpty;
    setDynamicLabelUtil;
    // to overwrite the property of check box and radio in case of list single select and multi select
    selectedObj = {
        radio: null,
        checkbox: null,
    };
    noDataFoundLabel = 'no record found.';
    expandableData;
    isListCell = false; // set true if the fields in generic block is ListCell
    listCellEventConfig = []; // set List Cell Event Config
    displayedUniqueIds = []; // unique IDs array when the user configures a list cell inside the generic block
    listInternalApiData = {};
    listLoading = false;
    resultCountAPIKey = "";
    ShowMore = false;
    btnShowMoreName;
    ShowMoreHide = true;
    paginationFirstLabel;
    paginationLastLabel;
    selectedRowIndex;
    tabIndexValue;
    rowDataShown;
    iRowData;
    itemPerPage;
    hasRowConditionField;
    html_id = '';
    componentList = {};
    componentMap = {
        label: defer(() => {
            if (this.componentList['label']) {
                return this.componentList['label'];
            }
            else {
                const c = import('../../field-components/cee-label/cee-label.component').then(m => m.CeeLabelComponent);
                this.componentList['label'] = c;
                return c;
            }
        }),
        Textfield: defer(() => {
            if (this.componentList['Textfield']) {
                return this.componentList['Textfield'];
            }
            else {
                const c = import('../../field-components/cee-textfield/cee-textfield.component').then(m => m.CeeTextfieldComponent);
                this.componentList['Textfield'] = c;
                return c;
            }
        }),
        Menu: defer(() => {
            if (this.componentList['Menu']) {
                return this.componentList['Menu'];
            }
            else {
                const c = import('../../field-components/cee-menu/cee-menu.component').then(m => m.CeeMenuComponent);
                this.componentList['Menu'] = c;
                return c;
            }
        }),
        Image: defer(() => {
            if (this.componentList['Image']) {
                return this.componentList['Image'];
            }
            else {
                const c = import('../../field-components/cee-image/cee-image.component').then(m => m.CeeImageComponent);
                this.componentList['Image'] = c;
                return c;
            }
        }),
        Picker: defer(() => {
            if (this.componentList['Picker']) {
                return this.componentList['Picker'];
            }
            else {
                const c = import('../../field-components/cee-picker/cee-picker.component').then(m => m.CeePickerComponent);
                this.componentList['Picker'] = c;
                return c;
            }
        }),
        Button: defer(() => {
            if (this.componentList['Button']) {
                return this.componentList['Button'];
            }
            else {
                const c = import('../../field-components/cee-button/cee-button.component').then(m => m.CeeButtonComponent);
                this.componentList['Button'] = c;
                return c;
            }
        }),
        Link: defer(() => {
            if (this.componentList['Link']) {
                return this.componentList['Link'];
            }
            else {
                const c = import('../../field-components/cee-link/cee-link.component').then(m => m.CeeLinkComponent);
                this.componentList['Link'] = c;
                return c;
            }
        }),
        Video: defer(() => {
            if (this.componentList['Video']) {
                return this.componentList['Video'];
            }
            else {
                const c = import('../../field-components/cee-video/cee-video.component').then(m => m.CeeVideoComponent);
                this.componentList['Video'] = c;
                return c;
            }
        }),
        Table: defer(() => {
            if (this.componentList['Table']) {
                return this.componentList['Table'];
            }
            else {
                const c = import('../../field-components/cee-table/cee-table.component').then(m => m.CeeTableComponent);
                this.componentList['Table'] = c;
                return c;
            }
        }),
        Accordion: defer(() => {
            if (this.componentList['Accordion']) {
                return this.componentList['Accordion'];
            }
            else {
                const c = import('../../components/accordion-renderer/accordion-renderer.component').then(m => m.AccordionRendererComponent);
                this.componentList['Accordion'] = c;
                return c;
            }
        }),
        DynamicForm: defer(() => {
            if (this.componentList['DynamicForm']) {
                return this.componentList['DynamicForm'];
            }
            else {
                const c = import('../../components/dynamic-form/dynamic-form.component').then(m => m.DynamicFormComponent);
                this.componentList['DynamicForm'] = c;
                return c;
            }
        }),
        Attachments: defer(() => {
            if (this.componentList['Attachments']) {
                return this.componentList['Attachments'];
            }
            else {
                const c = import('../../field-components/cee-attachments/cee-attachments.component').then(m => m.CeeAttachmentsComponent);
                this.componentList['Attachments'] = c;
                return c;
            }
        })
    };
    pageItems;
    setFromStore = false;
    constructor(sharedEventsServiceService, internalCEEEmitter, apiDataService, appDataService, wfeStepLoaderService, ceeApiService, dialog, snackBar, http, router) {
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.ceeApiService = ceeApiService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.router = router;
        this.iRowData = 0;
        this.itemPerPage = 4;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.eventListHandler = new WFEEventListHandler(ceeApiService, router, sharedEventsServiceService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        this.checkEmpty = new EmptyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        afterRender(() => {
            // Check if all items are rendered and we haven't emitted completion yet
            if (!this.hasEmittedCompletion &&
                this.displayValues.length > 0 &&
                this.displayValuesLazy.length === this.displayValues.length &&
                !this.listLoading) {
                setTimeout(() => {
                    // console.log("All list items rendered, emitting stepLoaderEmitter");
                    this.hasEmittedCompletion = true;
                }, 1000);
            }
        });
    }
    async ngOnInit() {
        this.html_id = this.rowData && this.rowData.html_id ? this.rowData.html_id : this.sectionData.unique_id;
        let fromStore;
        this.listCellAppData.stepId = this.stepId;
        const { additional_parameters, event_list } = this.sectionData;
        let keys = [];
        if (additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'Show Chips':
                        this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'Show Pagination':
                        this.showPagination = paramter.value === 'true' ? true : false;
                        break;
                    case 'Pagination Style':
                        this.paginationStyle = (paramter.value === 'material') ? 'material' : 'bootstrap';
                        break;
                    case 'Pagination Values':
                        this.pagination.pageItems = paramter.value.split('|').map(s => Number(s.trim()));
                        this.pagination.currentItemCount = this.pagination.pageItems[0];
                        break;
                    case 'Pagination Next Label':
                        this.paginationNextLabel = paramter.value !== '' ? paramter.value : 'Next';
                        break;
                    case 'Pagination Previous Label':
                        this.paginationPreviousLabel = paramter.value !== '' ? paramter.value : 'Previous';
                        break;
                    case 'Pagination First Label':
                        this.paginationFirstLabel = paramter.value;
                        break;
                    case 'Pagination Last Label':
                        this.paginationLastLabel = paramter.value;
                        break;
                    case 'Pagination Showing Result Hint':
                        this.paginationShowingResultHint = paramter.value !== '' ? paramter.value : '%value%';
                        break;
                    case 'No Data Found Label':
                        this.noDataFoundLabel = paramter.value !== '' ? paramter.value : 'no record found.';
                        break;
                    case 'Show Filter':
                        this.showFilter = paramter.value === 'false' ? false : true;
                        break;
                    case 'Filter Placeholder Text':
                        this.filterPlaceholderText = paramter.value;
                        break;
                    case 'FilterKeys':
                        this.filterKeys = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'FilterAPIKey':
                        this.filterAPIKey = paramter.value;
                        break;
                    case 'HideRows':
                        this.hidenRows
                            = this.type === 'List-Expandable' ? paramter.value : '';
                        break;
                    case 'expandTitle':
                        this.expandTitle
                            = this.type === 'List-Expandable' ? paramter.value : this.expandTitle;
                        break;
                    case 'Pagination Type':
                        if (paramter.value.toLowerCase() === 'server') {
                            this.serverPagination = true;
                        }
                        break;
                    case 'Set from store':
                        if (paramter.value === 'true') {
                            // * Only works if the api key is multiple
                            // * for list to show the data from handler
                            // * handler data needs to be stored in the
                            // * api data store
                            /* if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.sectionData.response_api_key);
                                for (const apiKey of apiKeys) {
                                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                    if (handlerData) {
                                        fromStore = handlerData.value;
                                        break;
                                    }
                                }
                            } */
                            // Set From store Enabled
                            this.setFromStore = true;
                            if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.sectionData.response_api_key);
                                for (const apiKey of apiKeys) {
                                    if (this.rowData) {
                                        break;
                                    }
                                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                    if (handlerData) {
                                        fromStore = handlerData.value;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    case 'ShowMore':
                        this.ShowMore = paramter.value === 'true' ? true : false;
                        break;
                    case 'BtnShowMore_Name':
                        this.btnShowMoreName = paramter.value;
                        break;
                    case 'Pagination API Keys':
                        keys = paramter.value.split('||');
                        break;
                    case 'collapseTitle':
                        this.collapseTitle
                            = this.type === 'List-Expandable' ? paramter.value : this.collapseTitle;
                        break;
                    case 'Result Count API Key':
                        this.resultCountAPIKey = paramter.value;
                        break;
                    case 'TabIndex':
                        this.tabIndexValue = parseInt(paramter.value);
                        break;
                    case 'CarouselItemPerPage':
                        this.itemPerPage = (paramter.value && !isNaN(paramter.value)) ? parseInt(paramter.value) : 4;
                        break;
                    case 'ShowMore':
                        this.ShowMore = paramter.value;
                        break;
                    case 'BtnShowMore_Name':
                        this.btnShowMoreName = paramter.value;
                        break;
                }
            }
        }
        // Means it is a field not a section
        if (this.sectionData.unique_id) {
            // set pagination keys for server driven list
            if (this.serverPagination) {
                // 0 th key for total No of values
                // 1st key for page number
                // 2nd key for page size
                if (this.serverPagination && keys.length !== 3) {
                    throw new Error('Sorry pagination api keys are not configured properly' +
                        'Format should be:' +
                        '<api_key_for_total_number_of_values>||<api_key_for_page_number>||<api_key_for_page_size>');
                }
                this.serverPaginationKeys = keys.map((str, index) => {
                    this.setPrimaryKey({
                        name: str.trim(),
                        value: index === 2 ? this.pagination.currentItemCount : '1'
                    });
                    return str.trim();
                });
            }
            if (this.childList && Object.keys(this.childList).length) {
                this.blockRenderedData = this.commonUtil.blockBootstrapProcess(this.childList);
                this.sectionData.fields = this.childList.block_fields;
            }
            else {
                const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
                this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
                this.sectionData.fields = this.blockRenderedData.block_fields;
            }
            this.listElements = Array(this.pagination.currentItemCount);
            // check if the list has possible values
            if (this.sectionData && this.sectionData.possible_values && this.sectionData.possible_values.length > 0) {
                this.setListData(this.mapPossibleValues(this.sectionData.possible_values));
            }
            // Get Expandable field details
            if (this.hidenRows) {
                this.expandableData = await this.wfeStepLoaderService.loadBlockByName(this.hidenRows).toPromise();
                // retrieve child generic block fields
                for (const field of this.expandableData.block_fields) {
                    if (field.field_type === 'Generic Block') {
                        field.default_value = field.additional_parameters.filter(ap => ap.parameter_type === 'default_value');
                        if (field.default_value.length !== 1) {
                            continue;
                        }
                        const childData = await this.wfeStepLoaderService.loadBlockByName(field.default_value[0].value).toPromise();
                        field.child_fields = this.commonUtil.blockBootstrapProcess(childData).block_fields;
                    }
                }
            }
            await this.retrieveBlockFields();
            this.returnFieldIdMapApiKey();
            if (this.type !== 'List') {
                this.storePrimaryKey('ON_LOAD', true);
                this.variableObj['showMandatoryErrorMsg_' + this.sectionData.unique_id] =
                    this.sharedEventsServiceService.showMandatoryErrorMsg.subscribe((res) => {
                        if (res) {
                            if (Array.isArray(res.fields) && res.type === 'event') {
                                if (res.includes(this.sectionData.unique_id)) {
                                    if (this.isMandatory && this.checkEmpty.isEmpty(this.fieldValue)) {
                                        this.showErrorMessage();
                                    }
                                }
                            }
                            else {
                                if (this.isMandatory && this.checkEmpty.isEmpty(this.fieldValue)) {
                                    this.showErrorMessage();
                                }
                            }
                        }
                    });
                // empty session data when the session clearance is emitted
                this.variableObj['emptySessionData' + this.sectionData.unique_id] =
                    this.sharedEventsServiceService.emitForEmptySession.subscribe((res) => {
                        let data = [];
                        let uniqueIdValue = [];
                        if (res) {
                            if (res.unique_ids.length > 0) {
                                data = res.unique_ids;
                                uniqueIdValue = [this.sectionData.unique_id];
                            }
                            else {
                                data = res.apiKeys;
                                if (this.isSingleAPIKey) {
                                    uniqueIdValue = [this.sectionData.api_key];
                                }
                                else {
                                    uniqueIdValue = [...uniqueIdValue,
                                        ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.sectionData.response_api_key))];
                                    uniqueIdValue = [
                                        ...uniqueIdValue,
                                        ...this.apiKeyUtil.getMultipleApiKeys(this.sectionData.request_api_key)
                                    ];
                                }
                            }
                            data.forEach(elm => {
                                if (uniqueIdValue.includes(elm)) {
                                    let value; // type any
                                    if (this.type === 'List-Multi-Select') {
                                        value = [];
                                        this.checkedItems = [];
                                    }
                                    else {
                                        value = '';
                                        this.radioValue = '';
                                    }
                                    this.storeData = [];
                                    // assign app data
                                    // TODO: Replace with a function code
                                    this.appData = {
                                        ...this.appData,
                                        ...{
                                            id: this.sectionData.unique_id,
                                            stepId: this.stepId,
                                            apiKey: this.isSingleAPIKey ? this.sectionData.api_key : '',
                                            fieldLabel: localStorage.getItem('storeLabels') === 'true' ? this.sectionData.field_label : '',
                                            linkedBlockId: '',
                                            isRepeatedField: false,
                                            repeatedBlockFieldId: '',
                                            requestApiKey: this.isSingleAPIKey ? [] :
                                                this.apiKeyUtil.getMultipleApiKeys(this.sectionData.request_api_key),
                                            responseApiKey: this.isSingleAPIKey ? [] :
                                                this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.sectionData.response_api_key)),
                                            mandatory: this.isMandatory,
                                            editable: this.sectionData.is_editable === 1 ? true : false,
                                            visible: this.sectionData.is_display === 1 ? true : false,
                                            value,
                                            isValid: true
                                        }
                                    };
                                    this.appDataService.updateAppData(this.appData);
                                }
                            });
                        }
                    });
            }
        }
        // set radio value on load of a function
        this.showSelectedRadioValues();
        const unique_id = (this.sectionData.unique_id ? this.sectionData.unique_id : this.sectionData.section_id);
        if (this.rowData && this.rowData.value) {
            this.searchData = this.checkRowVisibility(this.rowData.value);
            this.noDataFound = this.searchData.filteredData.length > 0 ? false : true;
            this.pagination.itemCount = this.searchData.filteredData.length;
            this.onPaginationCountChange();
            this.showLoading = false;
        }
        else {
            this.variableObj['emitApiSuccessResponse_' +
                unique_id] =
                this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                    this.setListData(res);
                }, err => {
                    console.error(err);
                    this.showLoading = false;
                    this.noDataFound = true;
                });
        }
        /**
         * Check if the checkbox needs chips
         */
        this.checkboxChips();
        this.variableObj['emitSetFieldValueOnEvent_' +
            unique_id] =
            this.sharedEventsServiceService.emitSetFieldValueOnEvent.subscribe(res => {
                if (res.uniqueIds && res.uniqueIds.includes('filter_column_' + unique_id) && res.values) {
                    this.commonUtil.setFilterKeys(this.searchData, res['values']);
                }
                if (res.uniqueIds && res.uniqueIds.includes('filter_' + unique_id) && res.values && res.values.length) {
                    this.filterTxt = res['values'].length > 1 ?
                        res['values'][res['uniqueIds'].indexOf('filter_' + unique_id)] :
                        res['values'][0];
                    this.applyFilter();
                }
            });
        if (this.sectionData.unique_id) {
            this.variableObj['emitOnDataSetOrUpdated_' + unique_id] = this.sharedEventsServiceService.emitOnDataSetOrUpdated.subscribe(res => {
                this.onFieldDataUpdated(res.apiKey, res.value);
            });
            if (this.sectionData.is_display === 1) {
                this.isVisible = true;
            }
            this.appData.visible = this.isVisible;
        }
        else {
            this.isVisible = true;
        }
        if (this.rowData && this.rowData.value) {
            this.searchData = this.checkRowVisibility(this.rowData.value);
            this.noDataFound = this.searchData.filteredData.length > 0 ? false : true;
            this.pagination.itemCount = this.searchData.filteredData.length;
            this.onPaginationCountChange();
        }
        if (this.rowData) {
            this.appData.visible = this.rowData.visible;
        }
        this.onComponentEvent('OnLoad');
        // set step id
        this.appData.stepId = this.stepId;
        this.variableObj['searchFilterEmitter_' + unique_id] = this.sharedEventsServiceService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'] && data['uniqueIds'].includes(this.sectionData.unique_id)) {
                this.filterTxt = data['values'][0] ? data['values'][0] : '';
                this.commonUtil.setFilterKeys(this.searchData, data['filterCol']);
                this.applyFilter();
            }
        });
        // call the api event success emitter
        if (fromStore) {
            this.setListData(fromStore);
        }
    }
    setShownData() {
        this.rowDataShown = this.displayValuesLazy.slice(this.iRowData, this.iRowData + this.itemPerPage);
        // console.log(this.rowDataShown);
    }
    previous() {
        if (this.iRowData != 0) {
            this.iRowData = this.iRowData - 1;
        }
        else {
            this.iRowData = this.displayValuesLazy.length - this.itemPerPage;
        }
        this.setShownData();
    }
    next() {
        if (this.iRowData + 1 <= this.displayValuesLazy.length - this.itemPerPage) {
            this.iRowData = this.iRowData + 1;
        }
        else {
            this.iRowData = 0;
        }
        this.setShownData();
    }
    async retrieveBlockFields() {
        // retrieve child generic block fields
        for (const [i, field] of this.sectionData.fields.entries()) {
            this.displayedUniqueIds.push(field.unique_id);
            switch (field.field_type) {
                case 'List':
                case 'List-Single-Select':
                case 'List-Multi-Select':
                case 'Generic Block':
                    field.default_value = field.additional_parameters.filter(ap => ap.parameter_type === 'default_value');
                    if (field.default_value.length !== 1) {
                        continue;
                    }
                    const childData = await this.wfeStepLoaderService.loadBlockByName(field.default_value[0].value).toPromise();
                    if (field.field_type === 'Generic Block') {
                        field.child_fields = this.commonUtil.blockBootstrapProcess(childData).block_fields;
                    }
                    else {
                        field.childList = childData;
                    }
                    break;
                case 'Checkbox':
                    this.selectedObj.checkbox = i;
                    break;
                case 'radio':
                    this.selectedObj.radio = i;
                    break;
                case 'Listcell':
                    this.isListCell = true;
                    this.listCellEventConfig = field.event_list;
                    if (field.is_display === 2) {
                        this.hasRowConditionField = field;
                    }
                    break;
                default:
                    break;
            }
        }
    }
    /**
     * function that maps static possible values
     * @param possibleValues the field possible Values
     */
    mapPossibleValues(possibleValues) {
        const listStaticData = [];
        const keys = possibleValues[0].split('|||');
        for (const i in possibleValues) {
            if (Number(i) > 0) {
                const obj = {};
                possibleValues[i].split('|||').forEach((value, index) => {
                    obj[keys[index]] = value;
                });
                listStaticData.push(obj);
            }
        }
        return listStaticData;
    }
    /**
     * function that sets list data
     * @param res api response or the response of possible values
     */
    setListData(res) {
        // Reset completion flag when new data is loaded
        this.hasEmittedCompletion = false;
        // check if server side pagination and then store the data for the totalNo Of Pages
        if (this.serverPagination) {
            // setting total Number of values
            const value = this.setAPIKeyUtil.setApiCallBackData(this.serverPaginationKeys[0], res);
            // setting current page number
            const currPage = this.setAPIKeyUtil.setApiCallBackData(this.serverPaginationKeys[1], res);
            if (currPage) {
                this.pagination.currentPage = Number(currPage);
            }
            if (value) {
                // set total no of pages
                this.setPaginationStore(this.serverPaginationKeys[0], value);
            }
        }
        this.showLoading = false;
        if ((this.isSingleAPIKey && this.sectionData.api_key !== '') ||
            (!this.isSingleAPIKey && this.sectionData.response_api_key !== '')) {
            const result = this.setAPIKeyUtil.setApiCallBackData(this.sectionData, res);
            if (result) {
                if (result.length > 0) {
                    this.noDataFound = false;
                    this.searchData = this.checkRowVisibility(result);
                }
                else {
                    this.noDataFound = true;
                }
            }
            else {
                return;
            }
        }
        else if (Array.isArray(res)) {
            if (res && res.length > 0) {
                this.noDataFound = false;
                this.searchData = this.checkRowVisibility(res);
            }
            else {
                this.noDataFound = true;
            }
        }
        else {
            return;
        }
        this.listInternalApiData = JSON.parse(JSON.stringify(this.listInternalApiData));
        this.pagination.itemCount = this.serverPagination ?
            this.listInternalApiData[this.serverPaginationKeys[0]] : this.searchData.filteredData.length;
        this.setTotalCountAppData(this.pagination.itemCount);
        this.onPaginationCountChange(this.serverPagination ? 0 : 1);
        this.commonUtil.setFilterKeys(this.searchData, this.filterKeys);
    }
    checkRowVisibility(res) {
        const result = [];
        if (this.hasRowConditionField) {
            for (const rdata of res) {
                const visibilityCondition = this.conditionalUtil.checkVisibility(this.hasRowConditionField, this.hasRowConditionField.unique_id, '', this.returnUniqueIdMapApiValue(rdata));
                if (visibilityCondition) {
                    result.push(rdata);
                }
            }
            return new MatTableDataSource(result);
        }
        else {
            return new MatTableDataSource(res);
        }
    }
    setTotalCountAppData(value) {
        this.totalCountAppData = {
            ...this.totalCountAppData,
            ...{
                id: this.sectionData.unique_id + '_total_count',
                stepId: this.stepId,
                apiKey: this.isSingleAPIKey ? this.resultCountAPIKey : '',
                requestApiKey: this.isSingleAPIKey ? [] :
                    this.apiKeyUtil.getMultipleApiKeys(this.resultCountAPIKey),
                responseApiKey: this.isSingleAPIKey ? [] :
                    this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.resultCountAPIKey)),
                value
            }
        };
        this.appDataService.setAppData(this.totalCountAppData);
        const emitObj = {
            apiKey: this.resultCountAPIKey,
            value
        };
        this.sharedEventsServiceService.emitOnDataSetOrUpdated.emit(emitObj);
    }
    onFieldDataUpdated(fieldId, value) {
        if (this.sectionData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.sectionData, fieldId, value);
            if (visible !== undefined) {
                this.isVisible = visible;
            }
        }
        // update the state of the repeatable block if required
    }
    /**
     * function that performs the filtering
     */
    applyFilter() {
        this.setPrimaryKey({
            name: this.serverPagination ? this.filterAPIKey : this.sectionData.unique_id + '##' + this.filterAPIKey,
            value: this.filterTxt
        });
        if (!this.serverPagination) {
            this.searchData.filter = this.filterTxt.trim().toLowerCase();
            this.pagination.itemCount = this.searchData.filteredData.length;
            this.onPaginationCountChange();
            this.setTotalCountAppData(this.pagination.itemCount);
        }
        else {
            this.setPaginationStore(this.serverPaginationKeys[1], 1);
        }
        const { event_list } = this.sectionData;
        if (event_list && event_list.length > 0) {
            for (const event of JSON.parse(JSON.stringify(event_list))) {
                if (event.event_name.toLowerCase() === 'OnFilterClick'.toLowerCase()) {
                    // setting current page to 1
                    if (this.serverPagination) {
                        this.pagination.currentPage = 1;
                    }
                    this.eventListHandler.switchEventDisplayType(event, event_list);
                }
            }
        }
        this.noDataFound = this.searchData.filteredData.length ? false : true;
    }
    setPrimaryKey = (data) => {
        if (data.value && data.name) {
            this.listInternalApiData[data.name] = data.value;
            const apiData = {
                id: data.name,
                apiUrl: '',
                apiKey: data.name,
                value: data.value
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
    };
    // -------------------------- Pagination Logic Start ----------------------------//
    /**
     * function that performs the pagination previous
     */
    paginationPrevious() {
        if (this.pagination.currentPage < 1) {
            this.pagination.currentPage = 1;
        }
        else {
            this.pagination.currentPage--;
        }
        // set Page number for next
        this.setPaginationStore(this.serverPaginationKeys[1], this.pagination.currentPage);
        this.onComponentEvent('OnPaginationButtonClick');
        if (!this.serverPagination) {
            this.performPagination();
        }
    }
    /**
     * function that performs the pagination next
     */
    paginationNext() {
        if (this.pagination.currentPage > this.pagination.pageCount) {
            this.pagination.currentPage = this.pagination.pageCount;
        }
        else {
            this.pagination.currentPage++;
        }
        // set page number for previous
        this.setPaginationStore(this.serverPaginationKeys[1], this.pagination.currentPage);
        this.onComponentEvent('OnPaginationButtonClick');
        this.performPagination();
    }
    isValidPageNumber(num) {
        return (/^\d+$/.test(num) && (0 < num && num <= this.pagination.pageCount));
    }
    /**
     * function that performs the pagination page number
     */
    setCurrent(num) {
        if (this.isValidPageNumber(num)) {
            this.pagination.currentPage = num;
            // check of pagination type is server the set page number
            this.setPaginationStore(this.serverPaginationKeys[1], num);
            this.onComponentEvent('OnPaginationButtonClick');
            this.performPagination();
        }
    }
    /**
     * Given the position in the sequence of pagination links [i], figure out what page number corresponds to that position.
     *
     * @param i
     * @param currentPage
     * @param paginationRange
     * @param totalPages
     * @returns '{*}'
     */
    calculatePageNumber(i, currentPage, paginationRange, totalPages) {
        var halfWay = Math.ceil(paginationRange / 2);
        if (i === paginationRange) {
            return totalPages;
        }
        else if (i === 1) {
            return i;
        }
        else if (paginationRange < totalPages) {
            if (totalPages - halfWay < currentPage) {
                return totalPages - paginationRange + i;
            }
            else if (halfWay < currentPage) {
                return currentPage - halfWay + i;
            }
            else {
                return i;
            }
        }
        else {
            return i;
        }
    }
    /**
     * Generate an array of page numbers (or the '...' string) which is used in an ng-repeat to generate the
     * links used in pagination
     *
     * @param currentPage
     * @param rowsPerPage
     * @param paginationRange
     * @param collectionLength
     * @returns '{Array}'
     */
    generatePagesArray(currentPage, totalPages, paginationRange) {
        var pages = [];
        var halfWay = Math.ceil(paginationRange / 2);
        var position;
        if (currentPage <= halfWay) {
            position = 'start';
        }
        else if (totalPages - halfWay < currentPage) {
            position = 'end';
        }
        else {
            position = 'middle';
        }
        var ellipsesNeeded = paginationRange < totalPages;
        var i = 1;
        while (i <= totalPages && i <= paginationRange) {
            var pageNumber = this.calculatePageNumber(i, currentPage, paginationRange, totalPages);
            var openingEllipsesNeeded = (i === 2 && (position === 'middle' || position === 'end'));
            var closingEllipsesNeeded = (i === paginationRange - 1 && (position === 'middle' || position === 'start'));
            if (ellipsesNeeded && (openingEllipsesNeeded || closingEllipsesNeeded)) {
                pages.push('...');
            }
            else {
                pages.push(pageNumber);
            }
            i++;
        }
        return pages;
    }
    /**
     * function that sets the pagination count
     * @param 0 wont reset the count because in server side pagination
     * page Number comes from the api
     */
    onPaginationCountChange(flag = 1) {
        this.pagination.pageCount = Math.ceil(this.pagination.itemCount / this.pagination.currentItemCount);
        // Reset position
        if (flag === 1) {
            this.pagination.currentPage = 1;
        }
        this.performPagination();
    }
    showMore(flag = 1) {
        if (this.ShowMoreHide) {
            this.pagination.currentItemCount = this.pagination?.currentItemCount + this.pagination?.pageItems[0];
            this.onPaginationCountChange();
            if (this.pagination.currentItemCount >= this.pagination.itemCount) {
                this.ShowMoreHide = false;
            }
        }
    }
    setPaginationCount() {
        // set the current item count if the pagination is server
        this.setPaginationStore(this.serverPaginationKeys[2], this.pagination.currentItemCount);
        this.onComponentEvent('OnPaginationButtonClick');
    }
    /**
     * set the values of the selected items in case of List-Single-Select
     */
    showSelectedRadioValues() {
        if (this.type === 'List-Single-Select') {
            if (this.storeData.length > 0) {
                this.radioValue = this.storeData[0];
            }
        }
    }
    /**
     * function that set the number of checked items when the list type is List-Multi-Select
     */
    checkCheckedValues() {
        // store the values of the checkedItems
        if (this.type === 'List-Multi-Select') {
            if (this.storeData.length > 0) {
                this.checkedItems = [];
                for (const singleRes of this.displayValues) {
                    if ((this.storeData).includes(singleRes[this.primaryKeyVal])) {
                        this.checkedItems.push(singleRes[this.primaryKeyVal]);
                    }
                    else {
                        this.checkedItems.push({});
                    }
                }
            }
        }
    }
    /**
     * function to set pagination api store
     * @param name pagination api keys
     * @param value the value of the api key
     */
    setPaginationStore(name, value) {
        if (this.serverPagination) {
            this.setPrimaryKey({
                name,
                value
            });
        }
    }
    /**
     * function that performs the pagination
     */
    performPagination() {
        this.pagination.startIndex =
            (this.pagination.currentPage - 1) * this.pagination.currentItemCount;
        this.pagination.endIndex =
            this.pagination.startIndex + this.pagination.currentItemCount;
        this.pagination.endIndex =
            this.pagination.endIndex > this.pagination.itemCount
                ? this.pagination.itemCount
                : this.pagination.endIndex;
        let setDisplayValues = true;
        if (this.showPagination) {
            this.pages = this.generatePagesArray(this.pagination.currentPage, this.pagination.pageCount, this.pagination.paginationRange);
            if (!this.serverPagination) {
                setDisplayValues = false;
                this.displayValues = this.searchData.filteredData.slice(this.pagination.startIndex, this.pagination.endIndex);
                if (this.additionalParameters['Show Pagination'] === 'auto' && this.pagination.itemCount <= this.pagination.pageItems[0]) {
                    this.autoPagination = false;
                }
                else {
                    this.autoPagination = true;
                }
            }
        }
        if (setDisplayValues) {
            this.displayValues = this.searchData.filteredData;
        }
        // console.log(this.sectionData);
        const properties = this.setFieldProperties(this.displayValues); // function that sets single properties
        this.displayValues = this.sortList(properties);
        // console.log(properties);
        this.displayValues = properties;
        this.checkCheckedValues();
        this.lazyLoading();
    }
    sortList(properties) {
        let sortOn = this.additionalParameters['EnableSort'] ? this.additionalParameters['EnableSort'].split('||')[0].split('|').reverse() : [];
        let sortPreferance = this.additionalParameters['EnableSort'] ? this.additionalParameters['EnableSort'].split('||')[1] : "asc";
        // console.log("sortOn: ",sortOn)
        // console.log("sortPreferance: ",sortPreferance)
        sortOn.forEach((item) => {
            properties = properties.sort((a, b) => (a[item] > b[item]) ? 1 : ((b[item] > a[item]) ? -1 : 0));
        });
        if (sortPreferance && sortPreferance.toLowerCase() == 'desc') {
            properties = properties.reverse();
        }
        // console.log("properties: ", properties)
        return properties;
    }
    lazyLoading() {
        this.displayValuesLazy = [];
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.listLoading = true;
        this.lazyInterval = setInterval(() => {
            if (this.displayValues.length !== this.displayValuesLazy.length) {
                this.displayValuesLazy.push(this.displayValues[this.displayValuesLazy.length]);
                if (this.additionalParameters['ShowCarousel'] && this.additionalParameters['ShowCarousel'].toLowerCase() == 'true') {
                    if (this.additionalParameters['CarouselItemPerPage'] && !isNaN(this.additionalParameters['CarouselItemPerPage'])) {
                        this.itemPerPage = parseInt(this.additionalParameters['CarouselItemPerPage']) > this.displayValuesLazy.length ? this.displayValuesLazy.length : parseInt(this.additionalParameters['CarouselItemPerPage']);
                    }
                    this.setShownData();
                }
            }
            else {
                this.listLoading = false;
                this.showSkeletonLoader = false;
                clearInterval(this.lazyInterval);
            } //test
            if (this.cdRef && !this.cdRef.destroyed) {
                this.cdRef.detectChanges();
            }
        }, 0);
    }
    // @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    //     if (this.lazyInterval) {
    //         clearInterval(this.lazyInterval);
    //     }
    //     this.displayValuesLazy = [];
    // }
    setFieldProperties(displayValues) {
        for (let i = 0; i < displayValues.length; i++) {
            let data = displayValues[i];
            if (data.hasOwnProperty('fields')) {
                continue;
            }
            data['fields'] = [];
            data['list_data'] = {};
            data['expandable_fields'] = [];
            data['hasExpandableData'] = false;
            if (this.sectionData.fields) {
                for (const j of this.sectionData.fields) {
                    const field = JSON.parse(JSON.stringify(j));
                    if (field.field_type === 'Generic Block') {
                        for (const k of field.child_fields) {
                            const childField = k;
                            childField['rowData'] = this.generateRowData(childField, data, i);
                        }
                    }
                    else {
                        field['rowData'] = this.generateRowData(field, data, i);
                    }
                    data['fields'].push(field);
                }
            }
            if (this.hidenRows && this.expandableData) {
                for (const j of this.expandableData.block_fields) {
                    const field = JSON.parse(JSON.stringify(j));
                    if (field.field_type === 'Generic Block' && field.child_fields) {
                        for (const k of field.child_fields) {
                            const childField = k;
                            childField['rowData'] = this.generateRowData(childField, data, i, true);
                        }
                    }
                    else {
                        field['rowData'] = this.generateRowData(field, data, i, true);
                    }
                    data['expandable_fields'].push(field);
                }
            }
        }
        return displayValues;
    }
    // -------------------------- Pagination Logic End ----------------------------//
    /**
     * returns the message object from the message code
     * @param messageCode the message code as configured in validation_messages message_code
     */
    returnMessageData(messageCode) {
        if (messageCode) {
            const messageDataMap = this.wfeStepLoaderService.messagesDataMap[messageCode];
            return (messageDataMap);
        }
    }
    /**
     * function that shows an error message on the basis of the configured validation_messages
     */
    showErrorMessage() {
        if (this.sectionData.validation_messages) {
            for (const message of this.sectionData.validation_messages) {
                if (message.type === 'Mandatory') {
                    switch (message.display_type) {
                        case 'MODAL':
                            // open modal
                            this.dialog.closeAll();
                            this.openDialog(this.returnMessageData(message.message_code).message_text);
                            break;
                        case 'INLINE':
                            this.messages.push(this.returnMessageData(message.message_code));
                            this.showErrorOnNext = true;
                            break;
                        case 'POPUP':
                            // open snackbar
                            this.snackBar.dismiss();
                            this.openSnackBar(this.returnMessageData(message.message_code).message_text);
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    /**
     * function that opens a material dialog bar
     * @param data the message that is configure in the CEE Message
     */
    openDialog(data) {
        this.dialog.open(AlertModalComponent, {
            data: {
                message: data
            }
        });
    }
    /**
     * function that opens a material snack bar
     * @param message the message that is configure in the CEE Message
     */
    openSnackBar(message) {
        this.snackBar.open(message, 'OK', {
            verticalPosition: 'top',
            panelClass: ['mat-toolbar', 'mat-primary']
        });
    }
    /**
     * function that gets triggered when there is a event(HTML event) triggered
     * in the case of List-Single-Select or List-Multi-Select
     * @param data the current data of the row
     * @param isChecked if the value is checked or not
     * @param context the position of the selected row
     */
    list_change(data, isChecked, context, internal) {
        const value = data[this.primaryKeyVal];
        if (isChecked) {
            if (this.type === 'List-Single-Select') {
                this.storeData = [];
            }
            if (!this.storeData.includes(value)) {
                this.storeData = this.storeData.concat([value]);
            }
        }
        else {
            if (this.storeData.length > 0 && this.storeData.indexOf(value) !== -1) {
                this.storeData = [...this.storeData]; // cloning array
                this.storeData.splice(this.storeData.indexOf(value), 1);
            }
        }
        if (this.chipsApiKeyToDisplay !== null) {
            this.chipsDisplay = true;
            (isChecked) ?
                this.chipsArray.push({ keyName: data[this.chipsApiKeyToDisplay], keyPos: context }) :
                this.chipsArray = this.chipsArray.filter(e => e.keyName !== data[this.chipsApiKeyToDisplay]);
        }
        this.storePrimaryKey('ON_CLICK', isChecked);
        if (!internal) {
            const _this = this;
            setTimeout(() => {
                _this.onComponentEvent('onclick');
            }, 0);
        }
    }
    /**
     * function that stores the value of the list single select and list multi select or set the value on load of a list
     * @param type type can be only ON_LOAD so that the value is already set in
     * the list on the load of the page is the user has already selected that
     */
    storePrimaryKey(type, checked) {
        for (const additionalParam of this.sectionData.additional_parameters) {
            if (additionalParam.parameter_type === 'PrimaryKeyName') {
                const primaryKeyValue = [];
                for (const sdata of this.storeData) {
                    primaryKeyValue.push(sdata);
                }
                const apiData = {
                    id: this.getPrimaryKey(additionalParam.value),
                    apiUrl: '',
                    apiKey: this.getPrimaryKey(additionalParam.value),
                    value: (this.type === 'List-Single-Select' ? (primaryKeyValue[0] ? primaryKeyValue[0] : '') : primaryKeyValue)
                };
                // store app data only if it is configured as a field
                const data = this.appDataService.getFieldDataByFieldId(this.sectionData.unique_id);
                if (this.sectionData.unique_id) {
                    this.isMandatory = this.sectionData.is_mandatory === 1 ? true : false;
                    let appData = {
                        id: this.sectionData.unique_id,
                        stepId: this.stepId,
                        apiKey: this.isSingleAPIKey ? this.sectionData.api_key : '',
                        fieldLabel: localStorage.getItem('storeLabels') === 'true' ? this.sectionData.field_label : '',
                        linkedBlockId: '',
                        isRepeatedField: false,
                        repeatedBlockFieldId: '',
                        requestApiKey: this.isSingleAPIKey ? [] :
                            this.apiKeyUtil.getMultipleApiKeys(this.sectionData.request_api_key),
                        responseApiKey: this.isSingleAPIKey ? [] :
                            this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.sectionData.response_api_key)),
                        mandatory: this.isMandatory,
                        editable: this.sectionData.is_editable === 1 ? true : false,
                        visible: this.sectionData.is_display === 1 ? true : false,
                        value: (this.type === 'List-Single-Select' ?
                            (this.storeData[0] ? this.storeData[0] : '') : [...new Set(this.storeData)]),
                        isValid: true
                    };
                    this.fieldValue = appData.value;
                    if (data !== undefined) {
                        if (type === 'ON_LOAD') {
                            this.fieldValue = this.storeData;
                            this.storeData = data ? Array.isArray(data) ? data : [data] : '';
                            appData = {
                                ...appData, ...{
                                    value: this.storeData
                                }
                            };
                        }
                        if (this.additionalParameters['SetPrimaryValue'] === 'All') {
                            if (checked) {
                                if (this.storeData.length === this.displayValues.length) {
                                    this.appDataService.updateAppData(appData);
                                }
                            }
                            else {
                                this.fieldValue = [];
                                this.appDataService.updateAppData({
                                    ...appData, ...{
                                        value: []
                                    }
                                });
                            }
                        }
                        else {
                            this.appDataService.updateAppData(appData);
                        }
                    }
                    else {
                        this.appDataService.addAppData(appData);
                    }
                }
                this.apiDataService.setApiData(Object.assign({}, apiData));
            }
        }
    }
    /**
     * returns the primary key from the additional parameter PrimaryKeyName
     * @param key the value of additional parameter PrimaryKeyName
     */
    getPrimaryKey(key) {
        const data = key.split('|');
        if (data.length > 1) {
            return data[0].trim();
        }
        else {
            return key;
        }
    }
    /**
     * returns the main api key from the given api key
     * @param key the key that is provided as an additional parameter
     */
    getValueFromKey(key) {
        const data = key.split('|');
        if (data.length > 1) {
            if (data[1].split('[*].').length > 1) {
                return data[1].split('[*].')[1].trim();
            }
            else {
                return data[1].trim();
            }
        }
        else {
            return key;
        }
    }
    /**
     * function that displays chips if the additional parameter is set to checkbox chips
     */
    checkboxChips = () => {
        for (const parameter of this.sectionData.additional_parameters) {
            if (parameter.parameter_type === 'Checkbox Chips') {
                this.chipsApiKeyToDisplay = parameter.value;
            }
        }
    };
    /**
     * function that removes the chips from the top of the list when some of the items are unchecked
     */
    deleteChips = (chipData) => {
        // (document.querySelector('#check_' + chipData.keyPos) as HTMLInputElement).checked = false;
        this.chipsArray.splice(this.chipsArray.indexOf(chipData), 1);
        if (this.chipsArray.length === 0) {
            this.chipsDisplay = false;
        }
    };
    /**
     * returns the row data on the basis of the type of the list and the editable and visible conditions
     * @param field the cee field object
     * @param data the api response data object
     */
    generateRowData(field, data, list_pos, expandable = false) {
        let apiData = this.setAPIKeyUtil.setApiCallBackData(field, data);
        expandable && apiData && (data['hasExpandableData'] = true);
        let labelType = '';
        if (field.field_type === 'label') {
            labelType = (this.isSingleAPIKey ? field.api_key : field.response_api_key) ? '' : 'STATIC';
        }
        if (field.field_type === 'Link') {
            apiData = data;
        }
        let obj;
        let isEditable = false;
        let isVisible = false;
        if (field.is_editable === 1) {
            isEditable = true;
        }
        if (field.is_display === 1) {
            isVisible = true;
        }
        const resData = {};
        for (const key in data) {
            if (typeof data[key] === 'string') {
                resData[key] = data[key];
            }
        }
        if (this.sectionData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'List',
                visible: field.is_display === 2 ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                data: resData
            };
        }
        else {
            obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'List',
                visible: isVisible,
                editable: isEditable,
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                data: resData
            };
        }
        if (this.selectedObj.checkbox && this.sectionData.fields[this.selectedObj.checkbox].unique_id === field.unique_id) {
            this.list_change(data, (obj.value === 'true' || obj.value === '1'), list_pos, true);
        }
        return obj;
    }
    /**
     * return the visible condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalVisible(data, presentValue, field) {
        const visibilityCondition = this.conditionalUtil.checkVisibility(field, field.unique_id, '', data);
        if (visibilityCondition) {
            return visibilityCondition;
        }
        return presentValue;
    }
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalEditable(data, presentValue, field) {
        const editableCondition = this.conditionalUtil.checkEditable(field, field.unique_id, '', data);
        if (editableCondition) {
            return editableCondition;
        }
        return presentValue;
    }
    // TODO: Delete this function once the conditional statements depend on the api key then only return the single api response obj
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse) {
        const obj = {};
        for (const key of Object.keys(this.fieldIdMapApiKey)) {
            const uniqueId = this.fieldIdMapApiKey[key];
            obj[uniqueId] = this.setAPIKeyUtil.setApiCallBackData(key, apiResponse) ? this.setAPIKeyUtil.setApiCallBackData(key, apiResponse) : '';
        }
        return obj;
    }
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey() {
        const obj = {};
        for (const field of this.sectionData.fields) {
            if (field.field_type === 'Generic Block' && field.child_fields) {
                for (const child_field of field.child_fields) {
                    this.returnFieldIdMapApiKeyValue(obj, child_field);
                }
            }
            else {
                this.returnFieldIdMapApiKeyValue(obj, field);
            }
        }
        if (this.hidenRows) {
            for (const field of this.expandableData.block_fields) {
                if (field.field_type === 'Generic Block' && field.child_fields) {
                    for (const child_field of field.child_fields) {
                        this.returnFieldIdMapApiKeyValue(obj, child_field);
                    }
                }
                else {
                    this.returnFieldIdMapApiKeyValue(obj, field);
                }
            }
        }
        this.fieldIdMapApiKey = obj;
    }
    // inner function of returnFieldIdMapApiKey
    returnFieldIdMapApiKeyValue(obj, field) {
        if (this.isSingleAPIKey && field.api_key) {
            obj[field.api_key] = field.unique_id; // TODO: Support multiple api keys
        }
        else {
            if (field.response_api_key) {
                if (field.response_api_key.includes('|')) {
                    const keys = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(field.response_api_key));
                    for (const key of keys) {
                        obj[key] = field.unique_id;
                    }
                }
                else {
                    obj[field.response_api_key] = field.unique_id;
                }
            }
        }
    }
    /**
     * trigger event if there has been an event triggered on the list
     * @param name the name of the event
     */
    onComponentEvent(name) {
        // not a list that is declared as a section
        if (this.sectionData && this.sectionData.unique_id) {
            if (this.sectionData && this.sectionData.event_list && this.sectionData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                    if (event && event.isDefault && event.event_name && event.event_name.toLowerCase() === name.toLowerCase()) {
                        this.eventListHandler.switchEventDisplayType(event, this.sectionData.event_list);
                    }
                }
            }
        }
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    /**
     * function to trigger an event for clicking on the list cell
     * @param data single cell data
     */
    listCellClick(data, pos) {
        this.selectedRowIndex = pos;
        this.eventListHandler.getListCellData(data.fields);
        if (this.primaryKeyVal) {
            this.setPrimaryKey({
                name: this.primaryKeyVal,
                value: data[this.primaryKeyVal]
            });
        }
        for (const event of JSON.parse(JSON.stringify(this.listCellEventConfig))) {
            if (event.isDefault && event.event_name.toLowerCase() === 'onclick') {
                this.eventListHandler.switchEventDisplayType(event, this.listCellEventConfig);
            }
        }
    }
    get getRangeLabel() {
        return String(this.paginationShowingResultHint).replace('%value%', this.pagination.currentPage + " / " + this.pagination.pageCount);
    }
    /**
     * unsubscribe all the subscriptions on ngDestroy
     */
    ngOnDestroy() {
        // if (this.variableObj[
        //     'emitApiSuccessResponse_' +
        //         this.sectionData.unique_id ? this.sectionData.unique_id : this.sectionData.section_id]) {
        //     this.variableObj[
        //         'emitApiSuccessResponse_' +
        //             this.sectionData.unique_id ? this.sectionData.unique_id : this.sectionData.section_id].unsubscribe();
        // }
        // if (this.variableObj['showMandatoryErrorMsg_' + this.sectionData.unique_id]) {
        //     this.variableObj['showMandatoryErrorMsg_' + this.sectionData.unique_id].unsubscribe();
        // }
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.displayValuesLazy = [];
    }
    onMaterialPageChange(event) {
        const newPage = event.pageIndex + 1;
        const newSize = event.pageSize;
        const pageSizeChanged = newSize !== this.pagination.currentItemCount;
        this.pagination.currentItemCount = newSize;
        if (pageSizeChanged) {
            this.setPaginationCount(); // Already in your select change
            this.onPaginationCountChange(); // Already used
        }
        this.setCurrent(newPage); // Core pagination logic
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    static ɵfac = function ListRendererComponent_Factory(t) { return new (t || ListRendererComponent)(i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.WfeStepLoaderService), i0.ɵɵdirectiveInject(i6.CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListRendererComponent, selectors: [["app-list-renderer"]], inputs: { sectionData: "sectionData", stepId: "stepId", templateId: "templateId", type: "type", rowData: "rowData", rootData: "rootData", childList: "childList" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["cellData", ""], ["cellDataLoading", ""], ["elseField", ""], [4, "ngIf"], ["class", "filter-container", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "filter-container"], ["floatLabel", "never"], ["filterTxt", "", "matInput", "", 3, "ngModelChange", "keyup", "ngModel", "placeholder"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["class", "chiplayout", 4, "ngIf"], [1, "chiplayout"], ["class", "chipspace", 4, "ngFor", "ngForOf"], [1, "chipspace"], [1, "chipcss"], [1, "chipdeletecss", 3, "click"], ["title", "Previous", 1, "move-ctrl", "previous", 3, "click"], ["class", "list-conatianer data-row", 4, "ngFor", "ngForOf"], ["title", "Next", 1, "move-ctrl", "next", 3, "click"], [1, "list-conatianer", "data-row"], [3, "click", "keyup.enter"], [1, "list-checkbox-container"], ["type", "checkbox", 1, "list-checkbox", 3, "change", "name", "id", "checked", "disabled"], [1, "custom-list-checkbox", 3, "for"], [1, "list-radio-container"], ["type", "radio", "name", "radio", 1, "list-radio", 3, "ngModelChange", "change", "id", "ngModel", "value", "disabled"], [1, "custom-list-radio", 3, "for"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", 3, "click", 4, "ngIf"], ["role", "button", 3, "click"], [3, "click", "innerHTML"], [1, "no-data-info", "text-center", "my-5"], ["class", "list-conatianer", 4, "ngFor", "ngForOf"], [1, "list-conatianer"], ["class", "pagination-container", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageIndex", "pageSizeOptions", "length", "page", 4, "ngIf"], [1, "pagination-container-showmore"], ["role", "button", "class", "pagination-btn-showmore", 3, "click", 4, "ngIf"], [1, "pagination-container"], [1, "pagination-text-container"], ["role", "button", "class", "pagination-btn-first", "aria-label", "Select First", 3, "disabled", "click", 4, "ngIf"], ["role", "button", "aria-label", "Select Previous", 1, "pagination-btn-previous", 3, "click", "disabled"], ["role", "button", 3, "disabled", "class", "click", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "Select Next", 1, "pagination-btn-next", 3, "click", "disabled"], ["role", "button", "class", "pagination-btn-last", "aria-label", "Select Last", 3, "disabled", "click", 4, "ngIf"], [1, "pagination-count-selector", 3, "change", "ngModelChange", "ngModel"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "Select First", 1, "pagination-btn-first", 3, "click", "disabled"], ["role", "button", 3, "click", "disabled"], ["role", "button", "aria-label", "Select Last", 1, "pagination-btn-last", 3, "click", "disabled"], [3, "ngValue", "selected"], ["showFirstLastButtons", "", 3, "page", "pageIndex", "pageSizeOptions", "length"], ["role", "button", 1, "pagination-btn-showmore", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "class", 4, "ngIf"], [3, "stepId", "rootData", "rowData", "sectionData", "templateId", "type", "childList"], [1, "card__label", "loading"], [1, "card__text", "loading"], [1, "card__menu", "loading"], [1, "card__image", "loading"], [1, "card__picker", "loading"], [1, "card__button", "loading"], [1, "card__link", "loading"], [1, "card__table", "loading"], [1, "card__list", "loading"]], template: function ListRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListRendererComponent_ng_container_0_Template, 7, 6, "ng-container", 3)(1, ListRendererComponent_ng_template_1_Template, 15, 16, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ListRendererComponent_ng_template_3_Template, 10, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [ListRendererComponent, NgComponentOutlet, MatFormFieldModule, i11.MatFormField, MatInputModule, i12.MatInput, NgStyle, CommonModule, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitch, i13.NgSwitchCase, i13.AsyncPipe, FormsModule, i14.NgSelectOption, i14.ɵNgSelectMultipleOption, i14.DefaultValueAccessor, i14.SelectControlValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgModel, YouTubePlayerModule, MatPaginatorModule, i15.MatPaginator], styles: [".chipcss[_ngcontent-%COMP%]{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss[_ngcontent-%COMP%]{color:red}.chiplayout[_ngcontent-%COMP%]{display:flex}.chipspace[_ngcontent-%COMP%]{margin-right:5px}.cee-list-detail[_ngcontent-%COMP%]{display:none}.cee-list-detail.cee-expanded-row[_ngcontent-%COMP%]{display:block}.list-item[_ngcontent-%COMP%]{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item[_ngcontent-%COMP%]{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:_ngcontent-%COMP%_fadein 2s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0}to{opacity:1}}.move-ctrl[_ngcontent-%COMP%]{float:left;width:15%;text-align:center}.card__title[_ngcontent-%COMP%]{padding:8px;font-size:22px;font-weight:700}.card__title.loading[_ngcontent-%COMP%]{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__description.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__label.loading[_ngcontent-%COMP%]{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__text.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu[_ngcontent-%COMP%]{display:inline;padding:8px;font-size:16px}.card__menu.loading[_ngcontent-%COMP%]{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;padding:8px;height:100%}.card__image.loading[_ngcontent-%COMP%]{height:300px;margin:1rem;width:400px}.card__picker[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__picker.loading[_ngcontent-%COMP%]{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__button.loading[_ngcontent-%COMP%]{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading[_ngcontent-%COMP%]{position:relative;background-color:#e2e2e2}.loading[_ngcontent-%COMP%]:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:_ngcontent-%COMP%_loading .8s infinite}@keyframes _ngcontent-%COMP%_loading{to{transform:translate(100%)}}.data-bar[_ngcontent-%COMP%]{margin-bottom:12px;height:100px;width:100px}.data-row[_ngcontent-%COMP%]{height:50px;width:500px}.data-row[_ngcontent-%COMP%], .data-row-second[_ngcontent-%COMP%]{border:1px solid black}.data-container[_ngcontent-%COMP%]{width:16.667%;height:100px;text-align:center}.show-in-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}.datas-list[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]{min-width:100px}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{color:#00f;cursor:pointer}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-list-renderer', standalone: true, imports: [NgComponentOutlet, MatFormFieldModule, MatInputModule, NgStyle, CommonModule, NgSwitch, FormsModule, YouTubePlayerModule, MatPaginatorModule], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<div *ngIf=\"showFilter\" class=\"filter-container\">\r\n\t\t<mat-form-field floatLabel=\"never\">\r\n\t\t\t<input [(ngModel)]=\"filterTxt\" filterTxt matInput (keyup)=\"applyFilter()\"\r\n\t\t\t\tplaceholder=\"{{filterPlaceholderText}}\">\r\n\t\t</mat-form-field>\r\n\t</div>\r\n\r\n\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t{{message.message_text}}\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div *ngIf=\"chipsDisplay\" class=\"chiplayout\">\r\n\t\t\t<div *ngFor=\"let chipArray of chipsArray\" class=\"chipspace\">\r\n\t\t\t\t<span class=\"chipcss\">\r\n\t\t\t\t\t{{ chipArray.keyName }} <span class=\"chipdeletecss\" (click)=\"deleteChips(chipArray)\">x</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"list-loader {{listLoading ? 'list-pending':'list-loaded'}}\"></div>\r\n\t\t<ng-container\r\n\t\t\t*ngIf=\"additionalParameters['ShowCarousel'] && additionalParameters['ShowCarousel'].toLowerCase() == 'true'\">\r\n\t\t\t<div class=\"move-ctrl previous\" title=\"Previous\" (click)=\"previous()\">&lt;</div>\r\n\t\t\t<ng-container *ngFor=\"let data of rowDataShown; index as pos\" class=\"list-conatianer data-row\">\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Multi-Select'\">\r\n\t\t\t\t\t<div class=\"list-checkbox-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"checkbox\"\r\n\t\t\t\t\t\t\t[name]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\tclass=\"list-checkbox\" (change)=\"list_change(data, $event.target.checked, pos)\"\r\n\t\t\t\t\t\t\t[checked]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['rowData']['value'] == '1' : data[primaryKeyVal] == checkedItems[pos]\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.checkbox ? !data.fields[selectedObj.checkbox]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-checkbox\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos}}\">{{selectedObj.checkbox\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.checkbox]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Single-Select'\">\r\n\t\t\t\t\t<div class=\"list-radio-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"radio\" name=\"radio\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos\"\r\n\t\t\t\t\t\t\tclass=\"list-radio\" [(ngModel)]=\"radioValue\"\r\n\t\t\t\t\t\t\t[value]=\"selectedObj.radio ? pos: data[primaryKeyVal]\"\r\n\t\t\t\t\t\t\t(change)=\"list_change(data, $event.target.checked)\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.radio ? !data.fields[selectedObj.radio]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-radio\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos}}\">{{selectedObj.radio\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.radio]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"carousel-item list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} {{type == 'List-Multi-Select' ? (storeData.includes(data[primaryKeyVal])? 'list-item-checked' : 'list-item-unchecked') : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\t\t\t\t\t\t\t<button *ngIf=\"!isHTML(collapseTitle) && !isHTML(expandTitle)\" role=\"button\"\r\n\t\t\t\t\t\t\t\t(click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"expandedElement\r\n\t\t\t\t\t\t\t\t=== data && isHTML(collapseTitle)\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"expandedElement = expandedElement === data ? null : data\"\r\n\t\t\t\t\t\t\t\t\t[innerHTML]=\"collapseTitle\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"expandedElement\r\n\t\t\t\t\t\t\t\t!== data && isHTML(expandTitle)\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"expandedElement = expandedElement === data ? null : data\"\r\n\t\t\t\t\t\t\t\t\t[innerHTML]=\"expandTitle\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<div class=\"move-ctrl next\" title=\"Next\" (click)=\"next()\">&gt;</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container\r\n\t\t\t*ngIf=\"!additionalParameters['ShowCarousel'] || (additionalParameters['ShowCarousel'] && additionalParameters['ShowCarousel'].toLowerCase() != 'true')\">\r\n\t\t\t<ng-container *ngFor=\"let data of displayValuesLazy; index as pos\" class=\"list-conatianer data-row\">\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Multi-Select'\">\r\n\t\t\t\t\t<div class=\"list-checkbox-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"checkbox\"\r\n\t\t\t\t\t\t\t[name]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\tclass=\"list-checkbox\" (change)=\"list_change(data, $event.target.checked, pos)\"\r\n\t\t\t\t\t\t\t[checked]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['rowData']['value'] == '1' : data[primaryKeyVal] == checkedItems[pos]\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.checkbox ? !data.fields[selectedObj.checkbox]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-checkbox\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos}}\">{{selectedObj.checkbox\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.checkbox]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Single-Select'\">\r\n\t\t\t\t\t<div class=\"list-radio-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"radio\" name=\"radio\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos\"\r\n\t\t\t\t\t\t\tclass=\"list-radio\" [(ngModel)]=\"radioValue\"\r\n\t\t\t\t\t\t\t[value]=\"selectedObj.radio ? pos: data[primaryKeyVal]\"\r\n\t\t\t\t\t\t\t(change)=\"list_change(data, $event.target.checked)\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.radio ? !data.fields[selectedObj.radio]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-radio\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos}}\">{{selectedObj.radio\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.radio]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} {{type == 'List-Multi-Select' ? (storeData.includes(data[primaryKeyVal])? 'list-item-checked' : 'list-item-unchecked') : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t*ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\r\n\t\t\t\t\t\t\t<button *ngIf=\"!isHTML(collapseTitle) && !isHTML(expandTitle)\" role=\"button\"\r\n\t\t\t\t\t\t\t\t(click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"expandedElement\r\n\t\t\t\t\t\t\t\t=== data && isHTML(collapseTitle)\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"expandedElement = expandedElement === data ? null : data\"\r\n\t\t\t\t\t\t\t\t\t[innerHTML]=\"collapseTitle\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t<ng-container *ngIf=\"expandedElement\r\n\t\t\t\t\t\t\t\t!== data && isHTML(expandTitle)\">\r\n\t\t\t\t\t\t\t\t<div (click)=\"expandedElement = expandedElement === data ? null : data\"\r\n\t\t\t\t\t\t\t\t\t[innerHTML]=\"expandTitle\"></div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t*ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<!--\r\n\t<div class=\"text-center my-5\" [hidden]=\"!showLoading\">\r\n\t\t<div class=\"lds-ripple\">\r\n\t\t\t<div></div>\r\n\t\t\t<div></div>\r\n\t\t</div>\r\n\t</div> -->\r\n\t<ng-container *ngIf=\"(noDataFound && !showLoading && !showSkeletonLoader) || (setFromStore && noDataFound && !showLoading)\">\r\n\t\t<h5 class=\"no-data-info text-center my-5\">{{noDataFoundLabel}}</h5>\r\n\t</ng-container>\r\n\r\n\t<ng-container\r\n\t\t*ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader'] && additionalParameters['ShowSkeletonLoader'].toLowerCase() == 'true'\">\r\n\t\t<ng-container *ngFor=\"let data of listElements; index as pos\" class=\"list-conatianer\">\r\n\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}}\">\r\n\t\t\t\t<ng-container *ngFor=\"let field of sectionData.fields; index as position\">\r\n\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t*ngTemplateOutlet=\"cellDataLoading; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div class=\"pagination-container\" *ngIf=\"showPagination && !ShowMore && autoPagination && paginationStyle !== 'material'\">\r\n\t\t\t<p class=\"pagination-text-container\">{{getRangeLabel}}</p>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationFirstLabel\" [disabled]=\"pagination.currentPage === 1\"\r\n\t\t\t\t(click)=\"setCurrent(1)\" class=\"pagination-btn-first\"\r\n\t\t\t\taria-label=\"Select First\">{{paginationFirstLabel}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === 1\" (click)=\"paginationPrevious()\"\r\n\t\t\t\tclass=\"pagination-btn-previous\" aria-label=\"Select Previous\">{{paginationPreviousLabel}}</button>\r\n\t\t\t<button *ngFor=\"let pageNumber of pages\" role=\"button\" [disabled]=\"pageNumber === '...'\"\r\n\t\t\t\t(click)=\"setCurrent(pageNumber)\"\r\n\t\t\t\tclass=\"pagination-btn-page {{pageNumber === pagination.currentPage?'active':''}}\"\r\n\t\t\t\tattr.aria-label=\"Select page {{pageNumber}}\">{{pageNumber}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === pagination.pageCount\"\r\n\t\t\t\t(click)=\"paginationNext()\" class=\"pagination-btn-next\"\r\n\t\t\t\taria-label=\"Select Next\">{{paginationNextLabel}}</button>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationLastLabel\"\r\n\t\t\t\t[disabled]=\"pagination.currentPage === pagination.pageCount\" (click)=\"setCurrent(pagination.pageCount)\"\r\n\t\t\t\tclass=\"pagination-btn-last\" aria-label=\"Select Last\">{{paginationLastLabel}}</button>\r\n\t\t\t<select (change)=\"onPaginationCountChange(); setPaginationCount()\"\r\n\t\t\t\t[attr.aria-label]=\"'Select no of items to be displayed'\" [(ngModel)]=\"pagination.currentItemCount\"\r\n\t\t\t\tclass=\"pagination-count-selector\">\r\n\t\t\t\t<option [ngValue]=\"data\" [selected]=\"data == pagination.currentItemCount\"\r\n\t\t\t\t\t*ngFor=\"let data of pagination.pageItems\">\r\n\t\t\t\t\t{{data}}</option>\r\n\t\t\t</select>\r\n\t\t\t\r\n\t\t</div>\t\t\r\n\t\t<mat-paginator *ngIf=\"showPagination && !ShowMore && autoPagination && (paginationStyle === 'material')\"\r\n\t\t\t[pageIndex]=\"pagination.currentPage - 1\" [pageSizeOptions]=\"pagination.pageItems\"\r\n\t\t\t[length]=\"pagination.itemCount\" (page)=\"onMaterialPageChange($event)\" showFirstLastButtons>\r\n\t\t</mat-paginator>\r\n\t\t<div class=\"pagination-container-showmore\">\r\n\t\t\t<button role=\"button\" *ngIf= \"ShowMore && ShowMoreHide\" (click)=\"showMore()\" class=\"pagination-btn-showmore\">{{btnShowMoreName}}</button>\r\n\t\t\t</div>\r\n\t</ng-container>\r\n</ng-container>\r\n\r\n<ng-template #cellData let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-label [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-label> -->\r\n\t\t\t<!-- <ng-template #elseBlock>\r\n\t\t\t\t<ng-container\r\n\t\t\t\t\t*ngIf=\"\">\r\n\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t*ngIf=\"field.field_label.includes('((dynamic))') || (field.field_label_config && field.field_label_config.includes('((dynamic))')) ; else notDynamic\">\r\n\t\t\t\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t\t\t\t[innerHTML]=\"setDynamicLabelUtil.getDynamicValue(field, data).field_label\"></div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #notDynamic>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t{{field.field_label}}</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-template> -->\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, keepState: true,\r\n\t\t\t\tprimaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-textfield [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [rootData]=\"rootData\" [fieldData]=\"field\" [keepState]=\"true\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-textfield> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-menu [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-menu> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-image [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-image> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-picker [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-picker> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div *ngIf=\"hasEmittedCompletion\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-button [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-button> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-link [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-link> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Video'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-video [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-video> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-table [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\"\r\n\t\t\t\t[type]=\"field.field_type\">\r\n\t\t\t</app-cee-table> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"['List', 'List-Expandable'].includes(field.field_type) ? field.field_type : ''\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<app-list-renderer [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"field['rowData']\"\r\n\t\t\t\t\t[sectionData]=\"field\" [templateId]=\"templateId\" [type]=\"field.field_type\"\r\n\t\t\t\t\t[childList]=\"field['childList']\"></app-list-renderer>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n\t\t\tToogle Button Container\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Accordion'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-accordion-renderer [stepId]=\"stepId\" [rootData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-accordion-renderer> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'DynamicForm'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-dynamic-form [sectionData]=\"field\" [rowData]=\"field['rowData']\" class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [rootData]=\"rootData\">\r\n\t\t\t</app-dynamic-form> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<!-- Attachments -->\r\n\t\t<ng-container *ngSwitchCase=\"'Attachments'\">\r\n\t\t\t<div\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-attachments [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\" [rootData]=\"rootData\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-attachments> -->\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n\r\n<ng-template #cellDataLoading let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"card__label loading\"></div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"card__text loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"card__menu loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"card__image loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"card__picker loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"card__button loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"card__link loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div class=\"card__table loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'List'\">\r\n\t\t\t<div class=\"card__list loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>", styles: [".chipcss{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss{color:red}.chiplayout{display:flex}.chipspace{margin-right:5px}.cee-list-detail{display:none}.cee-list-detail.cee-expanded-row{display:block}.list-item{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:fadein 2s}@keyframes fadein{0%{opacity:0}to{opacity:1}}.move-ctrl{float:left;width:15%;text-align:center}.card__title{padding:8px;font-size:22px;font-weight:700}.card__title.loading{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description{padding:8px;font-size:16px}.card__description.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label{padding:8px;font-size:16px}.card__label.loading{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text{padding:8px;font-size:16px}.card__text.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu{display:inline;padding:8px;font-size:16px}.card__menu.loading{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image img{width:100%;padding:8px;height:100%}.card__image.loading{height:300px;margin:1rem;width:400px}.card__picker{padding:8px;font-size:16px}.card__picker.loading{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button{padding:8px;font-size:16px}.card__button.loading{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading{position:relative;background-color:#e2e2e2}.loading:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:loading .8s infinite}@keyframes loading{to{transform:translate(100%)}}.data-bar{margin-bottom:12px;height:100px;width:100px}.data-row{height:50px;width:500px}.data-row,.data-row-second{border:1px solid black}.data-container{width:16.667%;height:100px;text-align:center}.show-in-row{flex-direction:row;box-sizing:border-box;display:flex}.datas-list .data-container{min-width:100px}.previous,.next{color:#00f;cursor:pointer}\n"] }]
    }], () => [{ type: i1.SharedEventsServiceService }, { type: i2.CEEInternalEmitterService }, { type: i3.ApiDataService }, { type: i4.AppDataService }, { type: i5.WfeStepLoaderService }, { type: i6.CeeApiService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.Router }], { sectionData: [{
            type: Input
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], type: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], childList: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListRendererComponent, { className: "ListRendererComponent", filePath: "lib\\components\\list-renderer\\list-renderer.component.ts", lineNumber: 52 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9saXN0LXJlbmRlcmVyL2xpc3QtcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbGlzdC1yZW5kZXJlci9saXN0LXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFzRixXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJbEosT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBT25FLE9BQU8sRUFBRSxrQkFBa0IsSUFBSSxrQkFBa0IsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ25GLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ25ELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBRWxFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUM3Qyw0RkFBNEY7QUFDNUYsOEdBQThHO0FBQzlHLGlGQUFpRjtBQUNqRixtR0FBbUc7QUFDbkcsNEZBQTRGO0FBQzVGLHlGQUF5RjtBQUN6RiwrRkFBK0Y7QUFDL0YsK0ZBQStGO0FBQy9GLDRGQUE0RjtBQUM1Rix5RkFBeUY7QUFDekYsd0dBQXdHO0FBQ3hHLDRGQUE0RjtBQUM1RixPQUFPLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsb0dBQW9HO0FBQ3BHLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFFN0IsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ3hDOUQsQUFERCxBQURELDhCQUFpRCx3QkFDYixlQUVPO0lBRGxDLHVUQUF1QjtJQUFvQixnTUFBUyxvQkFBYSxLQUFDO0lBRzNFLEFBREMsQUFGQyxpQkFDeUMsRUFDekIsRUFDWjs7O0lBRkgsZUFBdUM7SUFBdkMscUVBQXVDO0lBRGpDLGdEQUF1Qjs7O0lBTzlCLDZCQUE0RDtJQUMzRCxZQUNEO0lBQUEsaUJBQUk7OztJQUZtQixzRUFBb0M7SUFDMUQsY0FDRDtJQURDLHdEQUNEOzs7SUFIRCwrQkFBMkQ7SUFDMUQsdUdBQTREO0lBRzdELGlCQUFNOzs7SUFIRCxjQUFpQjtJQUFqQix5Q0FBaUI7OztJQUZ2Qiw2QkFBK0M7SUFDOUMsb0dBQTJEOzs7O0lBQXZCLGNBQXFCO0lBQXJCLDZDQUFxQjs7OztJQVN2RCxBQURELCtCQUE0RCxlQUNyQztJQUNyQixZQUF3QjtJQUFBLGdDQUE2RDtJQUFqQyxtUEFBUyxnQ0FBc0IsS0FBQztJQUFDLGlCQUFDO0lBRXhGLEFBREMsQUFEdUYsaUJBQU8sRUFDdkYsRUFDRjs7O0lBRkosZUFBd0I7SUFBeEIscURBQXdCOzs7SUFIM0IsK0JBQTZDO0lBQzVDLDJHQUE0RDtJQUs3RCxpQkFBTTs7O0lBTHNCLGNBQWE7SUFBYiwyQ0FBYTs7OztJQVd2Qyw2QkFBa0Q7SUFFaEQsQUFERCwrQkFBcUMsZ0JBTXFFO0lBRmxGLGtXQUFVLDREQUE2QyxLQUFDO0lBSC9FLGlCQUt5RztJQUN6RyxpQ0FDNkc7SUFBQSxZQUNuRDtJQUMzRCxBQUQyRCxpQkFBUSxFQUM3RDs7Ozs7OztJQVJKLGVBQTBHO0lBSTFHLEFBREEsQUFGQSxBQURBLG1KQUEwRyxvSUFDRixtTEFFa0Msd0hBQ3JDOztJQUVyRyxjQUEyRztJQUEzRyw2SkFBMkc7SUFBQyxjQUNuRDtJQURtRCxvSEFDbkQ7Ozs7SUFHNUQsNkJBQW1EO0lBRWpELEFBREQsK0JBQWtDLGdCQU1rRTtJQUgvRSxnWEFBd0I7SUFFM0MsOFNBQVUsbURBQXdDLEtBQUM7SUFKcEQsaUJBS21HO0lBQ25HLGlDQUMwRztJQUFBLFlBQ25EO0lBQ3hELEFBRHdELGlCQUFRLEVBQzFEOzs7Ozs7O0lBUkosZUFBcUc7SUFBckcsZ0pBQXFHO0lBQ2xGLGlEQUF3QjtJQUczQyxBQUZBLDJGQUFzRCxrSEFFeUM7O0lBRS9GLGNBQXdHO0lBQXhHLDRKQUF3RztJQUFDLGNBQ25EO0lBRG1ELDhHQUNuRDs7OztJQWFuRCw4TEFDOEc7OztJQUgvRyw2QkFDeUU7SUFDeEUsMktBQzhHOzs7Ozs7Ozs7O0lBQTVHLGNBQTRCO0lBQUEsQUFBNUIsK0NBQTRCLDBIQUE4RTs7O0lBUGhILDZCQUEyRTtJQUd6RSxBQUZELDJCQUNnTSxVQUNoSTtJQUM5RCxrTEFDeUU7SUFNM0UsQUFEQyxpQkFBTSxFQUNEOzs7Ozs7O0lBVEwsY0FBOEw7SUFBOUwsOFBBQThMO0lBQ3pMLGNBQXlEO0lBQXpELDJGQUF5RDtJQUVwQyxjQUF1QjtJQUF2QixnREFBdUI7Ozs7SUFTbEQsOEtBQ3lGOzs7SUFEekYsMkpBQ3lGOzs7Ozs7Ozs7O0lBQTNELEFBQTVCLCtDQUE0QixtR0FBeUQ7OztJQWhCekYsNkJBQW1FO0lBY2xFLEFBYkEsb0tBQTJFLHFMQWFuRDs7Ozs7SUFiVCxjQUE0QztJQUFBLEFBQTVDLCtEQUE0QywyQkFBYzs7OztJQXVCeEUsa0NBQ29FO0lBQW5FLGdYQUFzRCxJQUFJLGdCQUFRO0lBQUMsWUFDM0I7SUFBQSxpQkFBUzs7OztJQURrQixjQUMzQjtJQUQyQixxR0FDM0I7Ozs7SUFDekMsNkJBQ29DO0lBQ25DLCtCQUM2QjtJQUR4QixtWEFBc0QsSUFBSSxnQkFBUTtJQUMxQyxpQkFBTTs7OztJQUFsQyxjQUEyQjtJQUEzQixtRUFBMkI7Ozs7SUFFN0IsNkJBQ2tDO0lBQ2pDLCtCQUMyQjtJQUR0QixtWEFBc0QsSUFBSSxnQkFBUTtJQUM1QyxpQkFBTTs7OztJQUFoQyxjQUF5QjtJQUF6QixpRUFBeUI7Ozs7SUFhckIsNk1BQ2tJOzs7SUFIbkksNkJBQ3lFO0lBQ3hFLDBMQUNrSTs7Ozs7Ozs7OztJQUFoSSxjQUE0QjtJQUFBLEFBQTVCLCtDQUE0QiwwSEFBa0c7OztJQVBwSSw2QkFBMkU7SUFHekUsQUFGRCwyQkFDZ00sVUFDaEk7SUFDOUQsaU1BQ3lFO0lBTTNFLEFBREMsaUJBQU0sRUFDRDs7Ozs7OztJQVRMLGNBQThMO0lBQTlMLDhQQUE4TDtJQUN6TCxjQUF5RDtJQUF6RCwyRkFBeUQ7SUFFcEMsY0FBdUI7SUFBdkIsZ0RBQXVCOzs7O0lBU2xELDZMQUM2Rzs7O0lBRDdHLDBLQUM2Rzs7Ozs7Ozs7OztJQUEvRSxBQUE1QiwrQ0FBNEIsbUdBQTZFOzs7SUFoQjdHLDZCQUE4RTtJQWM3RSxBQWJBLG1MQUEyRSxvTUFhbkQ7Ozs7O0lBYlQsY0FBNEM7SUFBQSxBQUE1QywrREFBNEMsMkJBQWM7OztJQXJCN0UsNkJBQThEO0lBQzdELDJCQUN1STtJQVN0SSxBQUxBLEFBSEEsd0pBQ29FLHNKQUdoQyxzSkFLRjtJQUluQyxpQkFBTTtJQUdMLEFBRkQsMkJBQ3lHLFVBQ2pFO0lBQ3RDLG1LQUE4RTtJQXFCaEYsQUFEQyxpQkFBTSxFQUNEOzs7OztJQXZDTCxjQUFxSTtJQUFySSxpTEFBcUk7SUFDNUgsY0FBb0Q7SUFBcEQsaUdBQW9EO0lBRzlDLGNBQ2tCO0lBRGxCLGlHQUNrQjtJQUlsQixjQUNnQjtJQURoQiwrRkFDZ0I7SUFNL0IsY0FBdUc7SUFBdkcsMEpBQXVHO0lBQ2xHLGNBQWlDO0lBQWpDLCtDQUFpQztJQUNMLGNBQTJCO0lBQTNCLG9EQUEyQjs7OztJQXZFaEUsaUNBQStGO0lBYzlGLEFBYkEsb0pBQWtELHVJQWFDO0lBYW5ELCtCQUU2RTtJQUF6QyxBQUFuQyx3VEFBUyx1Q0FBd0IsS0FBQyx1VEFBZ0IsdUNBQXdCLEtBQUM7SUFzQjNFLEFBckJBLG9KQUFtRSx3SUFxQkw7SUEyQy9ELGlCQUFNOzs7Ozs7SUE3RlMsY0FBaUM7SUFBakMseURBQWlDO0lBYWpDLGNBQWtDO0lBQWxDLDBEQUFrQztJQWNoRCxjQUEyVTtJQUEzVSxxYUFBMlU7O0lBRTNTLGNBQWdCO0lBQWhCLHlDQUFnQjtJQXFCakMsY0FBNkM7SUFBN0MsNEVBQTZDOzs7O0lBdEQvRCw2QkFDOEc7SUFDN0csK0JBQXNFO0lBQXJCLHNOQUFTLGlCQUFVLEtBQUM7SUFBQyxpQkFBSTtJQUFBLGlCQUFNO0lBQ2hGLHVJQUErRjtJQWdHL0YsK0JBQTBEO0lBQWpCLHNOQUFTLGFBQU0sS0FBQztJQUFDLGlCQUFJO0lBQUEsaUJBQU07Ozs7SUFoR3JDLGVBQWlCO0lBQWpCLDZDQUFpQjs7OztJQXFHL0MsNkJBQWtEO0lBRWhELEFBREQsK0JBQXFDLGdCQU1xRTtJQUZsRixzV0FBVSw0REFBNkMsS0FBQztJQUgvRSxpQkFLeUc7SUFDekcsaUNBQzZHO0lBQUEsWUFDbkQ7SUFDM0QsQUFEMkQsaUJBQVEsRUFDN0Q7Ozs7Ozs7SUFSSixlQUEwRztJQUkxRyxBQURBLEFBRkEsQUFEQSxtSkFBMEcsb0lBQ0YsbUxBRWtDLHdIQUNyQzs7SUFFckcsY0FBMkc7SUFBM0csNkpBQTJHO0lBQUMsY0FDbkQ7SUFEbUQsb0hBQ25EOzs7O0lBRzVELDZCQUFtRDtJQUVqRCxBQURELCtCQUFrQyxnQkFNa0U7SUFIL0UsZ1hBQXdCO0lBRTNDLDhTQUFVLG1EQUF3QyxLQUFDO0lBSnBELGlCQUttRztJQUNuRyxpQ0FDMEc7SUFBQSxZQUNuRDtJQUN4RCxBQUR3RCxpQkFBUSxFQUMxRDs7Ozs7OztJQVJKLGVBQXFHO0lBQXJHLGdKQUFxRztJQUNsRixpREFBd0I7SUFHM0MsQUFGQSwyRkFBc0Qsa0hBRXlDOztJQUUvRixjQUF3RztJQUF4Ryw0SkFBd0c7SUFBQyxjQUNuRDtJQURtRCw4R0FDbkQ7Ozs7SUFhbkQsOExBQzhHOzs7SUFIL0csNkJBQ3lFO0lBQ3hFLDJLQUM4Rzs7Ozs7Ozs7OztJQUE1RyxjQUE0QjtJQUFBLEFBQTVCLCtDQUE0QiwwSEFBOEU7OztJQVBoSCw2QkFBMkU7SUFHekUsQUFGRCwyQkFDZ00sVUFDaEk7SUFDOUQsa0xBQ3lFO0lBTTNFLEFBREMsaUJBQU0sRUFDRDs7Ozs7OztJQVRMLGNBQThMO0lBQTlMLDhQQUE4TDtJQUN6TCxjQUF5RDtJQUF6RCwyRkFBeUQ7SUFFcEMsY0FBdUI7SUFBdkIsZ0RBQXVCOzs7O0lBU2xELDhLQUN5Rjs7O0lBRHpGLDJKQUN5Rjs7Ozs7Ozs7OztJQUEzRCxBQUE1QiwrQ0FBNEIsbUdBQXlEOzs7SUFoQnpGLDZCQUFtRTtJQWNsRSxBQWJBLG9LQUEyRSxxTEFhbkQ7Ozs7O0lBYlQsY0FBNEM7SUFBQSxBQUE1QywrREFBNEMsMkJBQWM7Ozs7SUF3QnhFLGtDQUNvRTtJQUFuRSxnWEFBc0QsSUFBSSxnQkFBUTtJQUFDLFlBQzNCO0lBQUEsaUJBQVM7Ozs7SUFEa0IsY0FDM0I7SUFEMkIscUdBQzNCOzs7O0lBQ3pDLDZCQUNvQztJQUNuQywrQkFDNkI7SUFEeEIsbVhBQXNELElBQUksZ0JBQVE7SUFDMUMsaUJBQU07Ozs7SUFBbEMsY0FBMkI7SUFBM0IsbUVBQTJCOzs7O0lBRTdCLDZCQUNrQztJQUNqQywrQkFDMkI7SUFEdEIsbVhBQXNELElBQUksZ0JBQVE7SUFDNUMsaUJBQU07Ozs7SUFBaEMsY0FBeUI7SUFBekIsaUVBQXlCOzs7O0lBYXJCLDZNQUNrSTs7O0lBSG5JLDZCQUN5RTtJQUN4RSwwTEFDa0k7Ozs7Ozs7Ozs7SUFBaEksY0FBNEI7SUFBQSxBQUE1QiwrQ0FBNEIsMEhBQWtHOzs7SUFQcEksNkJBQTJFO0lBR3pFLEFBRkQsMkJBQ2dNLFVBQ2hJO0lBQzlELGlNQUN5RTtJQU0zRSxBQURDLGlCQUFNLEVBQ0Q7Ozs7Ozs7SUFUTCxjQUE4TDtJQUE5TCw4UEFBOEw7SUFDekwsY0FBeUQ7SUFBekQsMkZBQXlEO0lBRXBDLGNBQXVCO0lBQXZCLGdEQUF1Qjs7OztJQVNsRCw2TEFDNkc7OztJQUQ3RywwS0FDNkc7Ozs7Ozs7Ozs7SUFBL0UsQUFBNUIsK0NBQTRCLG1HQUE2RTs7O0lBaEI3Ryw2QkFBOEU7SUFjN0UsQUFiQSxtTEFBMkUsb01BYW5EOzs7OztJQWJULGNBQTRDO0lBQUEsQUFBNUMsK0RBQTRDLDJCQUFjOzs7SUF0QjdFLDZCQUE4RDtJQUM3RCwyQkFDdUk7SUFVdEksQUFMQSxBQUhBLHdKQUNvRSxzSkFHaEMsc0pBS0Y7SUFJbkMsaUJBQU07SUFHTCxBQUZELDJCQUN5RyxVQUNqRTtJQUN0QyxtS0FBOEU7SUFxQmhGLEFBREMsaUJBQU0sRUFDRDs7Ozs7SUF4Q0wsY0FBcUk7SUFBckksaUxBQXFJO0lBRTVILGNBQW9EO0lBQXBELGlHQUFvRDtJQUc5QyxjQUNrQjtJQURsQixpR0FDa0I7SUFJbEIsY0FDZ0I7SUFEaEIsK0ZBQ2dCO0lBTS9CLGNBQXVHO0lBQXZHLDBKQUF1RztJQUNsRyxjQUFpQztJQUFqQywrQ0FBaUM7SUFDTCxjQUEyQjtJQUEzQixvREFBMkI7Ozs7SUF4RWhFLGlDQUFvRztJQWNuRyxBQWJBLG9KQUFrRCx1SUFhQztJQWFuRCwrQkFFNkU7SUFBekMsQUFBbkMseVRBQVMsdUNBQXdCLEtBQUMsd1RBQWdCLHVDQUF3QixLQUFDO0lBc0IzRSxBQXJCQSxvSkFBbUUsd0lBcUJMO0lBNEMvRCxpQkFBTTs7Ozs7O0lBOUZTLGNBQWlDO0lBQWpDLHlEQUFpQztJQWFqQyxjQUFrQztJQUFsQywwREFBa0M7SUFjaEQsY0FBNlQ7SUFBN1QsdVpBQTZUOztJQUU3UixjQUFnQjtJQUFoQix5Q0FBZ0I7SUFxQmpDLGNBQTZDO0lBQTdDLDRFQUE2Qzs7O0lBckQvRCw2QkFDeUo7SUFDeEosdUlBQW9HOzs7O0lBQXJFLGNBQXNCO0lBQXRCLGtEQUFzQjs7O0lBaEh2RCw2QkFBbUM7SUFDbEMscUdBQTZDO0lBTzdDLHNCQUE4RTtJQXNHOUUsQUFyR0Esc0hBQzhHLHlHQXFHMkM7Ozs7SUE5R25KLGNBQWtCO0lBQWxCLDBDQUFrQjtJQU9uQixjQUFrRTtJQUFsRSxrR0FBa0U7SUFFckUsY0FBMEc7SUFBMUcseUlBQTBHO0lBcUcxRyxjQUFxSjtJQUFySix5TEFBcUo7OztJQTJHeEosNkJBQTRIO0lBQzNILDhCQUEwQztJQUFBLFlBQW9CO0lBQUEsaUJBQUs7Ozs7SUFBekIsZUFBb0I7SUFBcEIsNkNBQW9COzs7O0lBUzNELGlKQUNnRzs7O0lBRmpHLDZCQUEwRTtJQUN6RSw4SEFDZ0c7Ozs7Ozs7Ozs7SUFBOUYsY0FBbUM7SUFBQSxBQUFuQyxzREFBbUMsbUdBQXlEOzs7SUFMakcsaUNBQXNGO0lBQ3JGLDJCQUMySztJQUMxSyxxSUFBMEU7SUFLM0UsaUJBQU07Ozs7O0lBTkwsY0FBeUs7SUFBeksseU9BQXlLOztJQUN6SSxjQUF1QjtJQUF2QixtREFBdUI7OztJQUwxRCw2QkFDZ0o7SUFDL0ksdUhBQXNGOzs7O0lBQXZELGNBQWlCO0lBQWpCLDZDQUFpQjs7OztJQWUvQyxrQ0FFMkI7SUFEMUIsME5BQVMsa0JBQVcsQ0FBQyxDQUFDLEtBQUM7SUFDRyxZQUF3QjtJQUFBLGlCQUFTOzs7SUFGVCw4REFBeUM7SUFFakUsY0FBd0I7SUFBeEIsaURBQXdCOzs7O0lBR25ELGtDQUc4QztJQUY3QywyUEFBUyxpQ0FBc0IsS0FBQztJQUVhLFlBQWM7SUFBQSxpQkFBUzs7OztJQURwRSx1SEFBaUY7SUFDakYsNEVBQTRDO0lBSFUsbURBQWlDO0lBRzFDLGNBQWM7SUFBZCxvQ0FBYzs7OztJQUk1RCxrQ0FFc0Q7SUFEUSwwTkFBUyw4Q0FBZ0MsS0FBQztJQUNsRCxZQUF1QjtJQUFBLGlCQUFTOzs7SUFEckYsd0ZBQTREO0lBQ1AsY0FBdUI7SUFBdkIsZ0RBQXVCOzs7SUFJNUUsa0NBQzJDO0lBQzFDLFlBQVE7SUFBQSxpQkFBUzs7OztJQUZPLEFBQWpCLGtDQUFnQiw0REFBaUQ7SUFFeEUsY0FBUTtJQUFSLHdDQUFROzs7O0lBckJWLEFBREQsK0JBQTBILFlBQ3BGO0lBQUEsWUFBaUI7SUFBQSxpQkFBSTtJQUMxRCxpSEFFMkI7SUFDM0Isa0NBQzhEO0lBREUsaU5BQVMsMkJBQW9CLEtBQUM7SUFDaEMsWUFBMkI7SUFBQSxpQkFBUztJQUNsRyxpSEFHOEM7SUFDOUMsa0NBRTBCO0lBRHpCLGlOQUFTLHVCQUFnQixLQUFDO0lBQ0QsWUFBdUI7SUFBQSxpQkFBUztJQUMxRCxpSEFFc0Q7SUFDdEQsbUNBRW1DO0lBRjNCLDhMQUFVLGdDQUF5Qix3QkFBRSwyQkFBb0IsS0FBQztJQUNSLDZXQUF5QztJQUVsRyxtSEFDMkM7SUFJN0MsQUFGQyxpQkFBUyxFQUVKOzs7SUF4QmdDLGVBQWlCO0lBQWpCLDBDQUFpQjtJQUMvQixjQUEwQjtJQUExQixrREFBMEI7SUFHM0IsY0FBeUM7SUFBekMsOERBQXlDO0lBQ0QsY0FBMkI7SUFBM0Isb0RBQTJCO0lBQzFELGNBQVE7SUFBUixzQ0FBUTtJQUlqQixjQUE0RDtJQUE1RCx3RkFBNEQ7SUFFeEQsY0FBdUI7SUFBdkIsZ0RBQXVCO0lBQzFCLGNBQXlCO0lBQXpCLGlEQUF5QjtJQUlVLGNBQXlDO0lBQXpDLGtFQUF5Qzs7SUFHaEYsY0FBdUI7SUFBdkIscURBQXVCOzs7O0lBSzNDLHlDQUU0RjtJQUEzRCxzT0FBUSxtQ0FBNEIsS0FBQztJQUN0RSxpQkFBZ0I7OztJQURmLEFBRHlDLEFBQXpDLDZEQUF3QyxnREFBeUMsdUNBQ2xEOzs7O0lBRy9CLGtDQUE2RztJQUFyRCxvTkFBUyxpQkFBVSxLQUFDO0lBQWlDLFlBQW1CO0lBQUEsaUJBQVM7OztJQUE1QixjQUFtQjtJQUFuQiw0Q0FBbUI7OztJQWhDbEksNkJBQW1DO0lBMkJsQyxBQTFCQSx1R0FBMEgsNEdBNEI5QjtJQUU1RiwrQkFBMkM7SUFDMUMsMkdBQTZHO0lBQzdHLGlCQUFNOzs7O0lBaEM0QixjQUFxRjtJQUFyRixrSUFBcUY7SUEwQnhHLGNBQXVGO0lBQXZGLGtJQUF1RjtJQUsvRSxlQUErQjtJQUEvQiw2REFBK0I7OztJQTNSekQsNkJBQWdDO0lBMlAvQixBQWRBLEFBSkEsQUExTkEsQUFQQSxBQVBBLHFGQUFpRCwwRkFPRiwwRkFPWiwwRkEwTnlGLDBGQUtvQiwwRkFhN0c7Ozs7SUExUDdCLGNBQWdCO0lBQWhCLHdDQUFnQjtJQU9ZLGNBQVc7SUFBWCx5Q0FBVztJQU85QixjQUFrQjtJQUFsQiwwQ0FBa0I7SUEwTmxCLGNBQTJHO0lBQTNHLGtLQUEyRztJQUt4SCxjQUE0STtJQUE1SSxrTEFBNEk7SUFhL0gsY0FBa0I7SUFBbEIsMENBQWtCOzs7SUEyQzlCLHdCQUVrQjs7O0lBTHBCLDZCQUFzQztJQUNyQywyQkFDZ007SUFDL0wsc0hBRUc7O0lBQ0osaUJBQU07Ozs7Ozs7O0lBSkwsY0FBOEw7SUFBOUwsOFBBQThMO0lBQy9LLGNBQ2hCO0lBQUEsQUFEZ0IsbUdBQ2hCLHFOQUNBOzs7SUF5QkMsd0JBR2tCOzs7SUFOcEIsNkJBQTBDO0lBQ3pDLDJCQUNnTTtJQUMvTCxzSEFHRzs7SUFDSixpQkFBTTs7Ozs7Ozs7SUFMTCxjQUE4TDtJQUE5TCw4UEFBOEw7SUFDL0ssY0FDaEI7SUFBQSxBQURnQixtR0FDaEIscU5BRUQ7OztJQVdFLHdCQUVrQjs7O0lBTHBCLDZCQUFxQztJQUNwQywyQkFDZ007SUFDL0wsc0hBRUc7O0lBQ0osaUJBQU07Ozs7Ozs7O0lBSkwsY0FBOEw7SUFBOUwsOFBBQThMO0lBQy9LLGNBQ2hCO0lBQUEsQUFEZ0IsbUdBQ2hCLHFOQUNBOzs7SUFXQyx3QkFFa0I7OztJQUxwQiw2QkFBc0M7SUFDckMsMkJBQ2dNO0lBQy9MLHNIQUVHOztJQUNKLGlCQUFNOzs7Ozs7OztJQUpMLGNBQThMO0lBQTlMLDhQQUE4TDtJQUMvSyxjQUNoQjtJQUFBLEFBRGdCLG1HQUNoQixxTkFDQTs7O0lBV0Msd0JBRWtCOzs7SUFMcEIsNkJBQXVDO0lBQ3RDLDJCQUNnTTtJQUMvTCxzSEFFRzs7SUFDSixpQkFBTTs7Ozs7Ozs7SUFKTCxjQUE4TDtJQUE5TCw4UEFBOEw7SUFDL0ssY0FDaEI7SUFBQSxBQURnQixtR0FDaEIscU5BQ0E7OztJQVdDLHdCQUVrQjs7O0lBSm5CLDJCQUNnTTtJQUMvTCw0SEFFRzs7SUFDSixpQkFBTTs7Ozs7OztJQUpMLDhQQUE4TDtJQUMvSyxjQUNoQjtJQUFBLEFBRGdCLG1HQUNoQixxTkFDQTs7O0lBTEQsNkJBQXVDO0lBQ3RDLHFHQUNnTTs7OztJQUQxTCxjQUEwQjtJQUExQixrREFBMEI7OztJQWUvQix3QkFFa0I7OztJQUxwQiw2QkFBcUM7SUFDcEMsMkJBQ2dNO0lBQy9MLHNIQUVHOztJQUNKLGlCQUFNOzs7Ozs7OztJQUpMLGNBQThMO0lBQTlMLDhQQUE4TDtJQUMvSyxjQUNoQjtJQUFBLEFBRGdCLG1HQUNoQixxTkFDQTs7O0lBV0Msd0JBRWtCOzs7SUFMcEIsNkJBQXNDO0lBQ3JDLDJCQUNnTTtJQUMvTCxzSEFFRzs7SUFDSixpQkFBTTs7Ozs7Ozs7SUFKTCxjQUE4TDtJQUE5TCw4UEFBOEw7SUFDL0ssY0FDaEI7SUFBQSxBQURnQixtR0FDaEIscU5BQ0E7OztJQVdDLHdCQUVrQjs7O0lBTHBCLDZCQUFzQztJQUNyQywyQkFDZ007SUFDL0wsc0hBRUc7O0lBQ0osaUJBQU07Ozs7Ozs7O0lBSkwsY0FBOEw7SUFBOUwsOFBBQThMO0lBQy9LLGNBQ2hCO0lBQUEsQUFEZ0IsbUdBQ2hCLHFOQUNBOzs7SUFTRCw2QkFBNkc7SUFDNUcsMkJBQ2dNO0lBQy9MLHdDQUVzRDtJQUN2RCxpQkFBTTs7Ozs7OztJQUpMLGNBQThMO0lBQTlMLDhQQUE4TDtJQUMzSyxjQUFpQjtJQUVuQyxBQURnRCxBQUExQixBQUF0QixBQUQwRCxBQUF0QixBQUFsQixzQ0FBaUIsNkJBQXNCLGlDQUE2QiwwQkFDakUsaUNBQTBCLDhCQUEwQixxQ0FDekM7OztJQUluQyw2QkFBNkM7SUFDNUMseUNBQ0Q7Ozs7SUFLRSx3QkFFa0I7OztJQUxwQiw2QkFBMEM7SUFDekMsMkJBQ2dNO0lBQy9MLHVIQUVHOztJQUNKLGlCQUFNOzs7Ozs7OztJQUpMLGNBQThMO0lBQTlMLDhQQUE4TDtJQUMvSyxjQUNoQjtJQUFBLEFBRGdCLG1HQUNoQixxTkFDQTs7O0lBV0Msd0JBRWtCOzs7SUFMcEIsNkJBQTRDO0lBQzNDLDJCQUNnTTtJQUMvTCx1SEFFRzs7SUFDSixpQkFBTTs7Ozs7Ozs7SUFKTCxjQUE4TDtJQUE5TCw4UEFBOEw7SUFDL0ssY0FDaEI7SUFBQSxBQURnQixtR0FDaEIscU5BQ0E7OztJQVVDLHdCQUVrQjs7O0lBTHBCLDZCQUE0QztJQUMzQywyQkFDZ007SUFDL0wsdUhBRUc7O0lBQ0osaUJBQU07Ozs7Ozs7O0lBSkwsY0FBOEw7SUFBOUwsOFBBQThMO0lBQy9LLGNBQ2hCO0lBQUEsQUFEZ0IsbUdBQ2hCLHFOQUNBOzs7SUFqTEYsaUNBQTRDO0lBNEszQyxBQVpBLEFBYkEsQUFKQSxBQVRBLEFBZEEsQUFiQSxBQWJBLEFBYkEsQUFiQSxBQWJBLEFBYkEsQUFkQSxBQTNCQSx3R0FBc0MsMkZBMkJJLDJGQWNMLDJGQWFDLDJGQWFDLDBGQWFBLDJGQWFGLDJGQWFDLDJGQWFBLDZGQWN1RSw0RkFTaEUsNkZBSUgsNkZBYUUsNkZBWUE7Ozs7SUE1Sy9CLCtDQUE2QjtJQUMzQixjQUFxQjtJQUFyQixzQ0FBcUI7SUEyQnJCLGNBQXlCO0lBQXpCLDBDQUF5QjtJQWN6QixjQUFvQjtJQUFwQixxQ0FBb0I7SUFhcEIsY0FBcUI7SUFBckIsc0NBQXFCO0lBYXJCLGNBQXNCO0lBQXRCLHVDQUFzQjtJQWF0QixjQUFzQjtJQUF0Qix1Q0FBc0I7SUFhdEIsY0FBb0I7SUFBcEIscUNBQW9CO0lBYXBCLGNBQXFCO0lBQXJCLHNDQUFxQjtJQWFyQixjQUFxQjtJQUFyQixzQ0FBcUI7SUFjckIsY0FBNEY7SUFBNUYscUhBQTRGO0lBUzVGLGNBQTRCO0lBQTVCLDZDQUE0QjtJQUk1QixjQUF5QjtJQUF6QiwwQ0FBeUI7SUFhekIsY0FBMkI7SUFBM0IsNENBQTJCO0lBWTNCLGNBQTJCO0lBQTNCLDRDQUEyQjs7O0lBbUIxQyw2QkFBc0M7SUFDckMsMEJBQXVDOzs7O0lBRXhDLDZCQUEwQztJQUN6QywwQkFBc0M7Ozs7SUFHdkMsNkJBQXFDO0lBQ3BDLDBCQUFzQzs7OztJQUd2Qyw2QkFBc0M7SUFDckMsMEJBQXVDOzs7O0lBR3hDLDZCQUF1QztJQUN0QywwQkFBd0M7Ozs7SUFHekMsNkJBQXVDO0lBQ3RDLDBCQUF3Qzs7OztJQUd6Qyw2QkFBcUM7SUFDcEMsMEJBQXNDOzs7O0lBR3ZDLDZCQUFzQztJQUNyQywwQkFBdUM7Ozs7SUFHeEMsNkJBQXFDO0lBQ3BDLDBCQUFzQzs7OztJQWpDeEMsaUNBQTRDO0lBZ0MzQyxBQUpBLEFBSkEsQUFKQSxBQUpBLEFBSkEsQUFKQSxBQUpBLEFBSEEsdUdBQXNDLDBGQUdJLDBGQUlMLDBGQUlDLDBGQUlDLDBGQUlBLDBGQUlGLDBGQUlDLDBGQUlEOzs7O0lBaEN4QiwrQ0FBNkI7SUFDM0IsY0FBcUI7SUFBckIsc0NBQXFCO0lBR3JCLGNBQXlCO0lBQXpCLDBDQUF5QjtJQUl6QixjQUFvQjtJQUFwQixxQ0FBb0I7SUFJcEIsY0FBcUI7SUFBckIsc0NBQXFCO0lBSXJCLGNBQXNCO0lBQXRCLHVDQUFzQjtJQUl0QixjQUFzQjtJQUF0Qix1Q0FBc0I7SUFJdEIsY0FBb0I7SUFBcEIscUNBQW9CO0lBSXBCLGNBQXFCO0lBQXJCLHNDQUFxQjtJQUlyQixjQUFvQjtJQUFwQixxQ0FBb0I7O0FEN2NyQyxNQUFNLE9BQU8scUJBQXFCO0lBMFJsQjtJQUNEO0lBQ0M7SUFDQTtJQUNBO0lBQ0Q7SUFDQTtJQUNBO0lBQ0M7SUFDRDtJQWpTWCxxQkFBcUIsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLHFCQUFxQixDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksTUFBTSxJQUFJLFlBQVksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7SUFDdE4sZUFBZSxHQUFHLElBQUksQ0FBQyxxQkFBcUIsR0FBRyx5Q0FBeUMsQ0FBQztJQUVoRixXQUFXLENBQU07SUFDVCxNQUFNLENBQU07SUFDcEIsVUFBVSxDQUFNO0lBQ2hCLElBQUksQ0FBUztJQUNiLE9BQU8sQ0FBTTtJQUNMLFFBQVEsQ0FBTTtJQUN0QixTQUFTLEdBQVEsRUFBRSxDQUFDO0lBRTdCLFVBQVUsR0FBRztRQUNULFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO1FBQ3ZCLGdCQUFnQixFQUFFLEVBQUU7UUFDcEIsUUFBUSxFQUFFLElBQUk7UUFDZCxZQUFZLEVBQUUsS0FBSztRQUNuQixXQUFXLEVBQUUsQ0FBQztRQUNkLFNBQVMsRUFBRSxDQUFDO1FBQ1osU0FBUyxFQUFFLENBQUM7UUFDWixVQUFVLEVBQUUsQ0FBQztRQUNiLFFBQVEsRUFBRSxDQUFDO1FBQ1gsZUFBZSxFQUFFLENBQUM7S0FDckIsQ0FBQztJQUNGLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDdkIsY0FBYyxHQUFHLElBQUksQ0FBQztJQUN0QixVQUFVLEdBQUcsS0FBSyxDQUFDO0lBQ25CLHFCQUFxQixHQUFHLFFBQVEsQ0FBQztJQUNqQyxVQUFVLEdBQUcsS0FBSyxDQUFDO0lBRW5CLGFBQWEsR0FBUSxFQUFFLENBQUM7SUFDeEIsaUJBQWlCLEdBQVEsRUFBRSxDQUFDO0lBQzVCLFlBQVksR0FBUSxFQUFFLENBQUM7SUFDdkIsVUFBVSxHQUFHLElBQUksa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDeEMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUNuQixXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQ25CLGtCQUFrQixHQUFZLElBQUksQ0FBQztJQUNuQyxZQUFZLEdBQVEsRUFBRSxDQUFDO0lBQ3ZCLFVBQVUsQ0FBTTtJQUNoQixZQUFZLEdBQVEsRUFBRSxDQUFDO0lBQ3ZCLFNBQVMsR0FBUSxFQUFFLENBQUM7SUFDcEIsYUFBYSxHQUFHLEVBQUUsQ0FBQztJQUNuQixlQUFlLEdBQUcsS0FBSyxDQUFDO0lBQ2hCLEtBQUssQ0FBb0I7SUFDMUIsb0JBQW9CLEdBQUcsS0FBSyxDQUFDLENBQUMsb0NBQW9DO0lBQ3pFLFFBQVEsR0FBRyxFQUFFLENBQUM7SUFDZCw0QkFBNEI7SUFDNUIsZUFBZSxHQUFZO1FBQ3ZCLEVBQUUsRUFBRSxFQUFFO1FBQ04sTUFBTSxFQUFFLEVBQUU7UUFDVixNQUFNLEVBQUUsRUFBRTtRQUNWLFVBQVUsRUFBRSxFQUFFO1FBQ2QsYUFBYSxFQUFFLEVBQUU7UUFDakIsZUFBZSxFQUFFLEtBQUs7UUFDdEIsb0JBQW9CLEVBQUUsRUFBRTtRQUN4QixhQUFhLEVBQUUsRUFBRTtRQUNqQixjQUFjLEVBQUUsRUFBRTtRQUNsQixtQkFBbUIsRUFBRSxFQUFFO1FBQ3ZCLFNBQVMsRUFBRSxLQUFLO1FBQ2hCLFFBQVEsRUFBRSxLQUFLO1FBQ2YsT0FBTyxFQUFFLEtBQUs7UUFDZCxLQUFLLEVBQUUsRUFBRTtRQUNULE9BQU8sRUFBRSxJQUFJO0tBQ2hCLENBQUM7SUFFRixPQUFPLEdBQVk7UUFDZixFQUFFLEVBQUUsRUFBRTtRQUNOLE1BQU0sRUFBRSxFQUFFO1FBQ1YsTUFBTSxFQUFFLEVBQUU7UUFDVixVQUFVLEVBQUUsRUFBRTtRQUNkLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGVBQWUsRUFBRSxLQUFLO1FBQ3RCLG9CQUFvQixFQUFFLEVBQUU7UUFDeEIsYUFBYSxFQUFFLEVBQUU7UUFDakIsY0FBYyxFQUFFLEVBQUU7UUFDbEIsbUJBQW1CLEVBQUUsRUFBRTtRQUN2QixTQUFTLEVBQUUsS0FBSztRQUNoQixRQUFRLEVBQUUsS0FBSztRQUNmLE9BQU8sRUFBRSxLQUFLO1FBQ2QsS0FBSyxFQUFFLEVBQUU7UUFDVCxPQUFPLEVBQUUsSUFBSTtLQUNoQixDQUFDO0lBRUYsaUJBQWlCLEdBQVk7UUFDekIsRUFBRSxFQUFFLEVBQUU7UUFDTixNQUFNLEVBQUUsRUFBRTtRQUNWLE1BQU0sRUFBRSxFQUFFO1FBQ1YsVUFBVSxFQUFFLEVBQUU7UUFDZCxhQUFhLEVBQUUsRUFBRTtRQUNqQixlQUFlLEVBQUUsS0FBSztRQUN0QixvQkFBb0IsRUFBRSxFQUFFO1FBQ3hCLGFBQWEsRUFBRSxFQUFFO1FBQ2pCLGNBQWMsRUFBRSxFQUFFO1FBQ2xCLG1CQUFtQixFQUFFLEVBQUU7UUFDdkIsU0FBUyxFQUFFLEtBQUs7UUFDaEIsUUFBUSxFQUFFLEtBQUs7UUFDZixPQUFPLEVBQUUsS0FBSztRQUNkLEtBQUssRUFBRSxFQUFFO1FBQ1QsT0FBTyxFQUFFLElBQUk7S0FDaEIsQ0FBQztJQUVGLFVBQVUsR0FBUSxFQUFFLENBQUM7SUFDckIsWUFBWSxHQUFHLEtBQUssQ0FBQztJQUNyQixvQkFBb0IsR0FBUSxJQUFJLENBQUM7SUFDakMsWUFBWSxHQUFRLEVBQUUsQ0FBQztJQUN2QixnQkFBZ0IsR0FBVyxFQUFFLENBQUMsQ0FBQyw0REFBNEQ7SUFFM0Ysb0JBQW9CLEdBQUcsRUFBRSxDQUFDO0lBRTFCLGFBQWEsQ0FBcUI7SUFDbEMsZ0JBQWdCLENBQXNCO0lBQ3RDLFVBQVUsQ0FBYTtJQUN2QixpQ0FBaUM7SUFDakMsV0FBVyxHQUFHLEVBQUUsQ0FBQztJQUNqQixlQUFlLENBQWtCO0lBQ2pDLFNBQVMsQ0FBTTtJQUNmLFdBQVcsR0FBRyxLQUFLLENBQUM7SUFDcEIsWUFBWSxHQUFZLEtBQUssQ0FBQztJQUM5QixpQkFBaUIsQ0FBTTtJQUN2QixVQUFVLENBQWE7SUFDdkIsVUFBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQixZQUFZLENBQVM7SUFDckIsMkJBQTJCLEdBQVcsU0FBUyxDQUFDO0lBQ2hELFNBQVMsQ0FBUztJQUNsQixlQUFlLENBQUM7SUFDaEIsV0FBVyxHQUFXLE1BQU0sQ0FBQztJQUM3QixhQUFhLEdBQVcsTUFBTSxDQUFDO0lBQy9CLFNBQVMsR0FBVyxFQUFFLENBQUM7SUFDdkIsU0FBUyxHQUFHLEtBQUssQ0FBQztJQUNsQixtQkFBbUIsR0FBVyxNQUFNLENBQUM7SUFDckMsdUJBQXVCLEdBQVcsVUFBVSxDQUFDO0lBQzdDLGVBQWUsR0FBVyxXQUFXLENBQUM7SUFDdEMsS0FBSyxHQUFhLEVBQUUsQ0FBQztJQUNyQixVQUFVLENBQU07SUFDaEIsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDLENBQUMsa0RBQWtEO0lBQzVFLG9CQUFvQixHQUFHLEVBQUUsQ0FBQztJQUMxQixVQUFVLENBQVk7SUFDdEIsbUJBQW1CLENBQW1CO0lBQ3RDLGtHQUFrRztJQUNsRyxXQUFXLEdBQUc7UUFDVixLQUFLLEVBQUUsSUFBSTtRQUNYLFFBQVEsRUFBRSxJQUFJO0tBQ2pCLENBQUM7SUFDRixnQkFBZ0IsR0FBVyxrQkFBa0IsQ0FBQztJQUM5QyxjQUFjLENBQU07SUFDcEIsVUFBVSxHQUFHLEtBQUssQ0FBQyxDQUFDLHNEQUFzRDtJQUMxRSxtQkFBbUIsR0FBRyxFQUFFLENBQUMsQ0FBQyw2QkFBNkI7SUFDdkQsa0JBQWtCLEdBQUcsRUFBRSxDQUFDLENBQUMsaUZBQWlGO0lBQzFHLG1CQUFtQixHQUFRLEVBQUUsQ0FBQztJQUM5QixXQUFXLEdBQVksS0FBSyxDQUFDO0lBQzdCLGlCQUFpQixHQUFXLEVBQUUsQ0FBQztJQUMvQixRQUFRLEdBQVcsS0FBSyxDQUFDO0lBQ3pCLGVBQWUsQ0FBUztJQUN4QixZQUFZLEdBQVcsSUFBSSxDQUFDO0lBQzVCLG9CQUFvQixDQUFTO0lBQzdCLG1CQUFtQixDQUFTO0lBQzVCLGdCQUFnQixDQUFTO0lBQ3pCLGFBQWEsQ0FBUztJQUV0QixZQUFZLENBQU07SUFDbEIsUUFBUSxDQUFTO0lBQ2pCLFdBQVcsQ0FBUztJQUNwQixvQkFBb0IsQ0FBTTtJQUMxQixPQUFPLEdBQVEsRUFBRSxDQUFDO0lBRWxCLGFBQWEsR0FBRyxFQUFFLENBQUM7SUFFbkIsWUFBWSxHQUFHO1FBQ1gsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsc0RBQXNELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixTQUFTLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNsQixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQ2pDLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQzthQUMxQztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsOERBQThELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMscUJBQXFCLENBQUMsQ0FBQztnQkFDcEgsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3BDLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixJQUFJLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxvREFBb0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUNyRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQztRQUNGLEtBQUssRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2QsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUM3QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDdEM7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLHNEQUFzRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3hHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUNoQyxPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsTUFBTSxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDZixJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0JBQzlCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUN2QztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsd0RBQXdELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsa0JBQWtCLENBQUMsQ0FBQztnQkFDM0csSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2pDLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixNQUFNLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNmLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsRUFBRTtnQkFDOUIsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ3ZDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyx3REFBd0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDO2dCQUMzRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDakMsT0FBTyxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQztRQUNGLElBQUksRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM1QixPQUFPLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDckM7aUJBQU07Z0JBQ0gsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDLG9EQUFvRCxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUM7Z0JBQ3JHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixPQUFPLENBQUMsQ0FBQzthQUNaO1FBQ0wsQ0FBQyxDQUFDO1FBQ0YsS0FBSyxFQUFFLEtBQUssQ0FBQyxHQUFHLEVBQUU7WUFDZCxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUU7Z0JBQzdCLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsc0RBQXNELENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUMsQ0FBQztnQkFDeEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ2hDLE9BQU8sQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUM7UUFDRixLQUFLLEVBQUUsS0FBSyxDQUFDLEdBQUcsRUFBRTtZQUNkLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsRUFBRTtnQkFDN0IsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQ3RDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUN4RyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDaEMsT0FBTyxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQztRQUNGLFNBQVMsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ2xCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDakMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2FBQzFDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO2dCQUM3SCxJQUFJLENBQUMsYUFBYSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDcEMsT0FBTyxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQztRQUNGLFdBQVcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxzREFBc0QsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO2dCQUMzRyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQztRQUNGLFdBQVcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFFO1lBQ3BCLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUMsRUFBRTtnQkFDbkMsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQzVDO2lCQUFNO2dCQUNILE1BQU0sQ0FBQyxHQUFHLE1BQU0sQ0FBQyxrRUFBa0UsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2dCQUMxSCxJQUFJLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsQ0FBQztnQkFDdEMsT0FBTyxDQUFDLENBQUM7YUFDWjtRQUNMLENBQUMsQ0FBQztLQUNMLENBQUE7SUFDRCxTQUFTLENBQU07SUFDZixZQUFZLEdBQVksS0FBSyxDQUFDO0lBRTlCLFlBQ1ksMEJBQXNELEVBQ3ZELGtCQUE2QyxFQUM1QyxjQUE4QixFQUM5QixjQUE4QixFQUM5QixvQkFBMEMsRUFDM0MsYUFBNEIsRUFDNUIsTUFBaUIsRUFDakIsUUFBcUIsRUFDcEIsSUFBZ0IsRUFDakIsTUFBYztRQVRiLCtCQUEwQixHQUExQiwwQkFBMEIsQ0FBNEI7UUFDdkQsdUJBQWtCLEdBQWxCLGtCQUFrQixDQUEyQjtRQUM1QyxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7UUFDOUIsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLHlCQUFvQixHQUFwQixvQkFBb0IsQ0FBc0I7UUFDM0Msa0JBQWEsR0FBYixhQUFhLENBQWU7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBVztRQUNqQixhQUFRLEdBQVIsUUFBUSxDQUFhO1FBQ3BCLFNBQUksR0FBSixJQUFJLENBQVk7UUFDakIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNyQixJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUNsQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQztRQUdyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksa0JBQWtCLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksZ0JBQWdCLENBQUMsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxlQUFlLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsY0FBYyxFQUFFLGNBQWMsQ0FBQyxDQUFDO1FBQ2hKLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLG1CQUFtQixDQUMzQyxhQUFhLEVBQ2IsTUFBTSxFQUNOLDBCQUEwQixFQUMxQixrQkFBa0IsRUFDbEIsb0JBQW9CLEVBQ3BCLGNBQWMsRUFDZCxjQUFjLEVBQ2QsTUFBTSxFQUNOLFFBQVEsRUFDUixJQUFJLENBQUMsQ0FBQztRQUNWLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztRQUNuQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksVUFBVSxFQUFFLENBQUM7UUFDbkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUksWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsS0FBSyxNQUFNLEVBQUU7WUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7U0FDNUI7UUFFRCxXQUFXLENBQUMsR0FBRyxFQUFFO1lBQ2Isd0VBQXdFO1lBQ3hFLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CO2dCQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUM3QixJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTTtnQkFDM0QsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFO2dCQUVuQixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNaLHNFQUFzRTtvQkFDdEUsSUFBSSxDQUFDLG9CQUFvQixHQUFHLElBQUksQ0FBQztnQkFDckMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1o7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxLQUFLLENBQUMsUUFBUTtRQUNWLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO1FBQ3hHLElBQUksU0FBUyxDQUFDO1FBRWQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUMxQyxNQUFNLEVBQ0YscUJBQXFCLEVBQ3JCLFVBQVUsRUFDYixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDckIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxxQkFBcUIsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2xDLEtBQUssTUFBTSxRQUFRLElBQUkscUJBQXFCLEVBQUU7Z0JBQzFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztnQkFDcEUsUUFBUSxRQUFRLENBQUMsY0FBYyxFQUFFO29CQUM3QixLQUFLLFlBQVk7d0JBQ2IsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQzNDLE1BQU07b0JBQ1YsS0FBSyxnQkFBZ0I7d0JBQ2pCLElBQUksQ0FBQyxhQUFhLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDcEMsTUFBTTtvQkFDVixLQUFLLGlCQUFpQjt3QkFDbEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxRQUFRLENBQUMsS0FBSyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7d0JBQy9ELE1BQU07b0JBQ1YsS0FBSyxrQkFBa0I7d0JBQ25CLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxRQUFRLENBQUMsS0FBSyxLQUFLLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQzt3QkFDbEYsTUFBTTtvQkFDVixLQUFLLG1CQUFtQjt3QkFDcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7d0JBQ2pGLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hFLE1BQU07b0JBQ1YsS0FBSyx1QkFBdUI7d0JBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsS0FBSyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO3dCQUMzRSxNQUFNO29CQUNWLEtBQUssMkJBQTJCO3dCQUM1QixJQUFJLENBQUMsdUJBQXVCLEdBQUcsUUFBUSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQzt3QkFDbkYsTUFBTTtvQkFDVixLQUFLLHdCQUF3Qjt3QkFDekIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQzNDLE1BQU07b0JBQ1YsS0FBSyx1QkFBdUI7d0JBQ3hCLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO3dCQUMxQyxNQUFNO29CQUNWLEtBQUssZ0NBQWdDO3dCQUNqQyxJQUFJLENBQUMsMkJBQTJCLEdBQUcsUUFBUSxDQUFDLEtBQUssS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQzt3QkFDdEYsTUFBTTtvQkFDVixLQUFLLHFCQUFxQjt3QkFDdEIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLFFBQVEsQ0FBQyxLQUFLLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsQ0FBQzt3QkFDcEYsTUFBTTtvQkFDVixLQUFLLGFBQWE7d0JBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7d0JBQzVELE1BQU07b0JBQ1YsS0FBSyx5QkFBeUI7d0JBQzFCLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO3dCQUM1QyxNQUFNO29CQUNWLEtBQUssWUFBWTt3QkFDYixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO3dCQUMvRCxNQUFNO29CQUNWLEtBQUssY0FBYzt3QkFDZixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQ25DLE1BQU07b0JBQ1YsS0FBSyxVQUFVO3dCQUNYLElBQUksQ0FBQyxTQUFTOzhCQUNSLElBQUksQ0FBQyxJQUFJLEtBQUssaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDNUQsTUFBTTtvQkFDVixLQUFLLGFBQWE7d0JBQ2QsSUFBSSxDQUFDLFdBQVc7OEJBQ1YsSUFBSSxDQUFDLElBQUksS0FBSyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDMUUsTUFBTTtvQkFDVixLQUFLLGlCQUFpQjt3QkFDbEIsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFdBQVcsRUFBRSxLQUFLLFFBQVEsRUFBRTs0QkFDM0MsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQzt5QkFDaEM7d0JBQ0QsTUFBTTtvQkFDVixLQUFLLGdCQUFnQjt3QkFDakIsSUFBSSxRQUFRLENBQUMsS0FBSyxLQUFLLE1BQU0sRUFBRTs0QkFDM0IsMENBQTBDOzRCQUMxQywyQ0FBMkM7NEJBQzNDLDJDQUEyQzs0QkFDM0MsbUJBQW1COzRCQUNuQjs7Ozs7Ozs7O2dDQVNJOzRCQUVKLHlCQUF5Qjs0QkFDekIsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7NEJBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxFQUFFO2dDQUNwRCxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztnQ0FDdEYsS0FBSyxNQUFNLE1BQU0sSUFBSSxPQUFPLEVBQUU7b0NBQzFCLElBQUksSUFBSSxDQUFDLE9BQU8sRUFBRTt3Q0FDZCxNQUFNO3FDQUNUO29DQUNELE1BQU0sV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29DQUNuRixJQUFJLFdBQVcsRUFBRTt3Q0FDYixTQUFTLEdBQUcsV0FBVyxDQUFDLEtBQUssQ0FBQzt3Q0FDOUIsTUFBTTtxQ0FDVDtpQ0FDSjs2QkFDSjt5QkFDSjt3QkFDRCxNQUFNO29CQUNWLEtBQUssVUFBVTt3QkFDVCxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQzt3QkFDMUQsTUFBTTtvQkFDWCxLQUFLLGtCQUFrQjt3QkFDbEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO3dCQUN2QyxNQUFNO29CQUNWLEtBQUsscUJBQXFCO3dCQUN0QixJQUFJLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ2xDLE1BQU07b0JBQ1YsS0FBSyxlQUFlO3dCQUNoQixJQUFJLENBQUMsYUFBYTs4QkFDWixJQUFJLENBQUMsSUFBSSxLQUFLLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO3dCQUM1RSxNQUFNO29CQUNWLEtBQUssc0JBQXNCO3dCQUN2QixJQUFJLENBQUMsaUJBQWlCLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDeEMsTUFBTTtvQkFDVixLQUFLLFVBQVU7d0JBQ1gsSUFBSSxDQUFDLGFBQWEsR0FBRyxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUM5QyxNQUFNO29CQUNWLEtBQUsscUJBQXFCO3dCQUN0QixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUM3RixNQUFNO29CQUNWLEtBQUssVUFBVTt3QkFDVixJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7d0JBQy9CLE1BQU07b0JBQ1gsS0FBSyxrQkFBa0I7d0JBQ2xCLElBQUksQ0FBQyxlQUFlLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQzt3QkFDdEMsTUFBTTtpQkFDZDthQUNKO1NBQ0o7UUFFRCxvQ0FBb0M7UUFDcEMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUU1Qiw2Q0FBNkM7WUFDN0MsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3ZCLGtDQUFrQztnQkFDbEMsMEJBQTBCO2dCQUMxQix3QkFBd0I7Z0JBQ3hCLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO29CQUM1QyxNQUFNLElBQUksS0FBSyxDQUFDLHVEQUF1RDt3QkFDbkUsbUJBQW1CO3dCQUNuQiwwRkFBMEYsQ0FBQyxDQUFDO2lCQUNuRztnQkFDRCxJQUFJLENBQUMsb0JBQW9CLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsRUFBRTtvQkFDaEQsSUFBSSxDQUFDLGFBQWEsQ0FBQzt3QkFDZixJQUFJLEVBQUUsR0FBRyxDQUFDLElBQUksRUFBRTt3QkFDaEIsS0FBSyxFQUFFLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEdBQUc7cUJBQzlELENBQUMsQ0FBQztvQkFDSCxPQUFPLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUM7YUFDTjtZQUdELElBQUksSUFBSSxDQUFDLFNBQVMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxNQUFNLEVBQUU7Z0JBQ3RELElBQUksQ0FBQyxpQkFBaUIsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDL0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUM7YUFDekQ7aUJBQU07Z0JBQ0gsTUFBTSxJQUFJLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUNySCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDckUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQzthQUNqRTtZQUNELElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUM1RCx3Q0FBd0M7WUFDeEMsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ3JHLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQzthQUM5RTtZQUVELCtCQUErQjtZQUMvQixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2hCLElBQUksQ0FBQyxjQUFjLEdBQUcsTUFBTSxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDbEcsc0NBQXNDO2dCQUN0QyxLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFO29CQUNsRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssZUFBZSxFQUFFO3dCQUN0QyxLQUFLLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsY0FBYyxLQUFLLGVBQWUsQ0FBQyxDQUFDO3dCQUN0RyxJQUFJLEtBQUssQ0FBQyxhQUFhLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTs0QkFDbEMsU0FBUzt5QkFDWjt3QkFDRCxNQUFNLFNBQVMsR0FBRyxNQUFNLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxlQUFlLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQTt3QkFDM0csS0FBSyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0FBQyxDQUFDLFlBQVksQ0FBQztxQkFDdEY7aUJBQ0o7YUFDSjtZQUVELE1BQU0sSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLHNCQUFzQixFQUFFLENBQUM7WUFFOUIsSUFBSSxJQUFJLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtnQkFDdEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3RDLElBQUksQ0FBQyxXQUFXLENBQUMsd0JBQXdCLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUM7b0JBQ25FLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTt3QkFDcEUsSUFBSSxHQUFHLEVBQUU7NEJBQ0wsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQ0FDbkQsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUU7b0NBQzFDLElBQUksSUFBSSxDQUFDLFdBQVcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUU7d0NBQzlELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFDO3FDQUMzQjtpQ0FDSjs2QkFDSjtpQ0FBTTtnQ0FDSCxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxFQUFFO29DQUM5RCxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztpQ0FDM0I7NkJBQ0o7eUJBQ0o7b0JBQ0wsQ0FBQyxDQUFDLENBQUM7Z0JBRVAsMkRBQTJEO2dCQUMzRCxJQUFJLENBQUMsV0FBVyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDO29CQUM3RCxJQUFJLENBQUMsMEJBQTBCLENBQUMsbUJBQW1CLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7d0JBQ2xFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQzt3QkFDZCxJQUFJLGFBQWEsR0FBRyxFQUFFLENBQUM7d0JBQ3ZCLElBQUksR0FBRyxFQUFFOzRCQUNMLElBQUksR0FBRyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO2dDQUMzQixJQUFJLEdBQUcsR0FBRyxDQUFDLFVBQVUsQ0FBQztnQ0FDdEIsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQzs2QkFDaEQ7aUNBQU07Z0NBQ0gsSUFBSSxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0NBQ25CLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtvQ0FDckIsYUFBYSxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQ0FDOUM7cUNBQU07b0NBQ0gsYUFBYSxHQUFHLENBQUMsR0FBRyxhQUFhO3dDQUNqQyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUM7b0NBQzdDLGFBQWEsR0FBRzt3Q0FDWixHQUFHLGFBQWE7d0NBQ2hCLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGVBQWUsQ0FBQztxQ0FBQyxDQUFDO2lDQUNoRjs2QkFDSjs0QkFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dDQUNmLElBQUksYUFBYSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQ0FDN0IsSUFBSSxLQUFLLENBQUMsQ0FBQyxXQUFXO29DQUN0QixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssbUJBQW1CLEVBQUU7d0NBQ25DLEtBQUssR0FBRyxFQUFFLENBQUM7d0NBQ1gsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7cUNBQzFCO3lDQUFNO3dDQUNILEtBQUssR0FBRyxFQUFFLENBQUM7d0NBQ1gsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7cUNBQ3hCO29DQUNELElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO29DQUVwQixrQkFBa0I7b0NBQ2xCLHFDQUFxQztvQ0FDckMsSUFBSSxDQUFDLE9BQU8sR0FBRzt3Q0FDWCxHQUFHLElBQUksQ0FBQyxPQUFPO3dDQUNmLEdBQUk7NENBQ0EsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUzs0Q0FDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNOzRDQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7NENBQzNELFVBQVUsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7NENBQzlGLGFBQWEsRUFBRSxFQUFFOzRDQUNqQixlQUFlLEVBQUUsS0FBSzs0Q0FDdEIsb0JBQW9CLEVBQUUsRUFBRTs0Q0FDeEIsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dEQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDOzRDQUN4RSxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0RBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDOzRDQUNsRixTQUFTLEVBQUUsSUFBSSxDQUFDLFdBQVc7NENBQzNCLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSzs0Q0FDM0QsT0FBTyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLOzRDQUN6RCxLQUFLOzRDQUNMLE9BQU8sRUFBRSxJQUFJO3lDQUNoQjtxQ0FDSixDQUFDO29DQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztpQ0FDbkQ7NEJBQ0wsQ0FBQyxDQUFDLENBQUM7eUJBQ047b0JBQ0wsQ0FBQyxDQUFDLENBQUM7YUFDVjtTQUNKO1FBRUQsd0NBQXdDO1FBQ3hDLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1FBRS9CLE1BQU0sU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxDQUFBO1FBQ3pHLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2hFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1NBQzVCO2FBQU07WUFDSCxJQUFJLENBQUMsV0FBVyxDQUNaLHlCQUF5QjtnQkFDekIsU0FBUyxDQUFDO2dCQUNWLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxzQkFBc0IsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7b0JBQ25FLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRTtvQkFDTCxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNuQixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO1NBQ1Y7UUFDRDs7V0FFRztRQUNILElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsV0FBVyxDQUNaLDJCQUEyQjtZQUMzQixTQUFTLENBQUM7WUFDVixJQUFJLENBQUMsMEJBQTBCLENBQUMsd0JBQXdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUNyRSxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksR0FBRyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLEdBQUcsU0FBUyxDQUFDLElBQUksR0FBRyxDQUFDLE1BQU0sRUFBRTtvQkFDckYsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztpQkFDakU7Z0JBQ0QsSUFBSSxHQUFHLENBQUMsU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUNuRyxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUM7d0JBQ3ZDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2hFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtvQkFDcEIsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2lCQUN0QjtZQUNMLENBQUMsQ0FBQyxDQUFDO1FBQ1AsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUNaLHlCQUF5QixHQUFHLFNBQVMsQ0FDeEMsR0FBRyxJQUFJLENBQUMsMEJBQTBCLENBQUMsc0JBQXNCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN2RSxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkQsQ0FBQyxDQUFDLENBQUM7WUFFSCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtnQkFDbkMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7YUFDekI7WUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ3pDO2FBQU07WUFDSCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQztTQUN6QjtRQUVELElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRTtZQUNwQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDMUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2hFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxJQUFJLENBQUMsT0FBTyxFQUFFO1lBQ2QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7U0FDL0M7UUFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsY0FBYztRQUNkLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7UUFFbEMsSUFBSSxDQUFDLFdBQVcsQ0FDWixzQkFBc0IsR0FBRyxTQUFTLENBQ3JDLEdBQUcsSUFBSSxDQUFDLDBCQUEwQixDQUFDLG1CQUFtQixDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRTtZQUNyRSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUU7Z0JBQzdFLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDNUQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztnQkFDbEUsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO2FBQ3RCO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixxQ0FBcUM7UUFDckMsSUFBSSxTQUFTLEVBQUU7WUFDWCxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELFlBQVk7UUFDUixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQzVDLElBQUksQ0FBQyxRQUFRLEVBQ2IsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUNuQyxDQUFDO1FBQ0Ysa0NBQWtDO0lBQ3RDLENBQUM7SUFFRCxRQUFRO1FBQ0osSUFBSSxJQUFJLENBQUMsUUFBUSxJQUFJLENBQUMsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ3JDO2FBQU07WUFDSCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNwRTtRQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRUQsSUFBSTtRQUNBLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7U0FDckM7YUFBTTtZQUNILElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxLQUFLLENBQUMsbUJBQW1CO1FBQ3JCLHNDQUFzQztRQUN0QyxLQUFLLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDeEQsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDOUMsUUFBUSxLQUFLLENBQUMsVUFBVSxFQUFFO2dCQUN0QixLQUFLLE1BQU0sQ0FBQztnQkFDWixLQUFLLG9CQUFvQixDQUFDO2dCQUMxQixLQUFLLG1CQUFtQixDQUFDO2dCQUN6QixLQUFLLGVBQWU7b0JBQ2hCLEtBQUssQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxjQUFjLEtBQUssZUFBZSxDQUFDLENBQUM7b0JBQ3RHLElBQUksS0FBSyxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO3dCQUNsQyxTQUFTO3FCQUNaO29CQUNELE1BQU0sU0FBUyxHQUFHLE1BQU0sSUFBSSxDQUFDLG9CQUFvQixDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsRUFBRSxDQUFDO29CQUM1RyxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssZUFBZSxFQUFFO3dCQUN0QyxLQUFLLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMscUJBQXFCLENBQUMsU0FBUyxDQUFDLENBQUMsWUFBWSxDQUFDO3FCQUN0Rjt5QkFBTTt3QkFDSCxLQUFLLENBQUMsU0FBUyxHQUFHLFNBQVMsQ0FBQztxQkFDL0I7b0JBQ0QsTUFBTTtnQkFDVixLQUFLLFVBQVU7b0JBQ1gsSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDO29CQUM5QixNQUFNO2dCQUNWLEtBQUssT0FBTztvQkFDUixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7b0JBQzNCLE1BQU07Z0JBQ1YsS0FBSyxVQUFVO29CQUNYLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO29CQUN2QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsS0FBSyxDQUFDLFVBQVUsQ0FBQztvQkFDNUMsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTt3QkFDeEIsSUFBSSxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQztxQkFDckM7b0JBQ0QsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7U0FDSjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSyxpQkFBaUIsQ0FBQyxjQUEwQjtRQUNoRCxNQUFNLGNBQWMsR0FBRyxFQUFFLENBQUM7UUFDMUIsTUFBTSxJQUFJLEdBQUcsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1QyxLQUFLLE1BQU0sQ0FBQyxJQUFJLGNBQWMsRUFBRTtZQUM1QixJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ2YsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO2dCQUNmLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxFQUFFO29CQUNwRCxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixDQUFDLENBQUMsQ0FBQztnQkFDSCxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7UUFDRCxPQUFPLGNBQWMsQ0FBQztJQUMxQixDQUFDO0lBRUQ7OztPQUdHO0lBQ0ssV0FBVyxDQUFDLEdBQUc7UUFDbkIsZ0RBQWdEO1FBQ2hELElBQUksQ0FBQyxvQkFBb0IsR0FBRyxLQUFLLENBQUM7UUFFbEMsbUZBQW1GO1FBQ25GLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLGlDQUFpQztZQUNqQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztZQUN2Riw4QkFBOEI7WUFDOUIsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDMUYsSUFBSSxRQUFRLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xEO1lBQ0QsSUFBSSxLQUFLLEVBQUU7Z0JBQ1Asd0JBQXdCO2dCQUN4QixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO2FBQ2hFO1NBQ0o7UUFFRCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7WUFDeEQsQ0FBQyxDQUFDLElBQUksQ0FBQyxjQUFjLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsS0FBSyxFQUFFLENBQUMsRUFBRTtZQUNwRSxNQUFNLE1BQU0sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDNUUsSUFBSSxNQUFNLEVBQUU7Z0JBQ1IsSUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtvQkFDbkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7b0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUNyRDtxQkFBTTtvQkFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztpQkFDM0I7YUFDSjtpQkFDSTtnQkFDRCxPQUFPO2FBQ1Y7U0FDSjthQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUMzQixJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xEO2lCQUFNO2dCQUNILElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO2FBQzNCO1NBQ0o7YUFBTTtZQUNILE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxtQkFBbUIsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztRQUNoRixJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztZQUMvQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUNqRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxVQUFVLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3BFLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxHQUFHO1FBQzFCLE1BQU0sTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLElBQUksQ0FBQyxvQkFBb0IsRUFBRTtZQUMzQixLQUFLLE1BQU0sS0FBSyxJQUFJLEdBQUcsRUFBRTtnQkFDckIsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLHlCQUF5QixDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzVLLElBQUksbUJBQW1CLEVBQUU7b0JBQ3JCLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ3RCO2FBQ0o7WUFDRCxPQUFPLElBQUksa0JBQWtCLENBQUMsTUFBTSxDQUFDLENBQUM7U0FDekM7YUFBTTtZQUNILE9BQU8sSUFBSSxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUN0QztJQUNMLENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxLQUFhO1FBQ3RDLElBQUksQ0FBQyxpQkFBaUIsR0FBRztZQUNyQixHQUFHLElBQUksQ0FBQyxpQkFBaUI7WUFDekIsR0FBSTtnQkFDQSxFQUFFLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsY0FBYztnQkFDL0MsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO2dCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6RCxhQUFhLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3JDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDO2dCQUM5RCxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7b0JBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQzlCLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7Z0JBQ3ZFLEtBQUs7YUFDUjtTQUNKLENBQUM7UUFDRixJQUFJLENBQUMsY0FBYyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztRQUN2RCxNQUFNLE9BQU8sR0FBRztZQUNaLE1BQU0sRUFBRSxJQUFJLENBQUMsaUJBQWlCO1lBQzlCLEtBQUs7U0FDUixDQUFDO1FBQ0YsSUFBSSxDQUFDLDBCQUEwQixDQUFDLHNCQUFzQixDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRU8sa0JBQWtCLENBQUMsT0FBZSxFQUFFLEtBQWE7UUFFckQsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDbkMsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkYsSUFBSSxPQUFPLEtBQUssU0FBUyxFQUFFO2dCQUN2QixJQUFJLENBQUMsU0FBUyxHQUFHLE9BQU8sQ0FBQzthQUM1QjtTQUNKO1FBQ0QsdURBQXVEO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDUCxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQ2YsSUFBSSxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxZQUFZO1lBQ3ZHLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUztTQUN4QixDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3hCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDN0QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1lBQ2hFLElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3hEO2FBQ0k7WUFDRCxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQzVEO1FBQ0QsTUFBTSxFQUFFLFVBQVUsRUFBRSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUM7UUFDeEMsSUFBSSxVQUFVLElBQUksVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckMsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtnQkFDeEQsSUFBSSxLQUFLLENBQUMsVUFBVSxDQUFDLFdBQVcsRUFBRSxLQUFLLGVBQWUsQ0FBQyxXQUFXLEVBQUUsRUFBRTtvQkFDbEUsNEJBQTRCO29CQUM1QixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsRUFBRTt3QkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEdBQUcsQ0FBQyxDQUFDO3FCQUNuQztvQkFDRCxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2lCQUNuRTthQUNKO1NBQ0o7UUFDRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUE7SUFDekUsQ0FBQztJQUVELGFBQWEsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFO1FBQ3JCLElBQUksSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3pCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUNqRCxNQUFNLE9BQU8sR0FBRztnQkFDWixFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUk7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJO2dCQUNqQixLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7YUFDcEIsQ0FBQztZQUNGLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7U0FDOUQ7SUFDTCxDQUFDLENBQUE7SUFFRCxtRkFBbUY7SUFDbkY7O09BRUc7SUFDSCxrQkFBa0I7UUFDZCxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDbkM7YUFBTTtZQUNILElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLENBQUM7U0FDakM7UUFDRCwyQkFBMkI7UUFDM0IsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ25GLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7WUFDeEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxjQUFjO1FBQ1YsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsRUFBRTtZQUN6RCxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQztTQUMzRDthQUFNO1lBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUNqQztRQUNELCtCQUErQjtRQUMvQixJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDbkYsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVELGlCQUFpQixDQUFDLEdBQUc7UUFDakIsT0FBTyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEdBQUcsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDaEYsQ0FBQztJQUNEOztPQUVHO0lBQ0gsVUFBVSxDQUFDLEdBQUc7UUFDVixJQUFJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM3QixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUM7WUFFbEMseURBQXlEO1lBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDM0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLHlCQUF5QixDQUFDLENBQUM7WUFDakQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7U0FDNUI7SUFDTCxDQUFDO0lBQ0Q7Ozs7Ozs7O09BUUc7SUFDSCxtQkFBbUIsQ0FBQyxDQUFDLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxVQUFVO1FBQzNELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzdDLElBQUksQ0FBQyxLQUFLLGVBQWUsRUFBRTtZQUN2QixPQUFPLFVBQVUsQ0FBQztTQUNyQjthQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNoQixPQUFPLENBQUMsQ0FBQztTQUNaO2FBQU0sSUFBSSxlQUFlLEdBQUcsVUFBVSxFQUFFO1lBQ3JDLElBQUksVUFBVSxHQUFHLE9BQU8sR0FBRyxXQUFXLEVBQUU7Z0JBQ3BDLE9BQU8sVUFBVSxHQUFHLGVBQWUsR0FBRyxDQUFDLENBQUM7YUFDM0M7aUJBQU0sSUFBSSxPQUFPLEdBQUcsV0FBVyxFQUFFO2dCQUM5QixPQUFPLFdBQVcsR0FBRyxPQUFPLEdBQUcsQ0FBQyxDQUFDO2FBQ3BDO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxDQUFDO2FBQ1o7U0FDSjthQUFNO1lBQ0gsT0FBTyxDQUFDLENBQUM7U0FDWjtJQUNMLENBQUM7SUFDRDs7Ozs7Ozs7O09BU0c7SUFDSCxrQkFBa0IsQ0FBQyxXQUFXLEVBQUUsVUFBVSxFQUFFLGVBQWU7UUFDdkQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ2YsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDN0MsSUFBSSxRQUFRLENBQUM7UUFFYixJQUFJLFdBQVcsSUFBSSxPQUFPLEVBQUU7WUFDeEIsUUFBUSxHQUFHLE9BQU8sQ0FBQztTQUN0QjthQUFNLElBQUksVUFBVSxHQUFHLE9BQU8sR0FBRyxXQUFXLEVBQUU7WUFDM0MsUUFBUSxHQUFHLEtBQUssQ0FBQztTQUNwQjthQUFNO1lBQ0gsUUFBUSxHQUFHLFFBQVEsQ0FBQztTQUN2QjtRQUVELElBQUksY0FBYyxHQUFHLGVBQWUsR0FBRyxVQUFVLENBQUM7UUFDbEQsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1YsT0FBTyxDQUFDLElBQUksVUFBVSxJQUFJLENBQUMsSUFBSSxlQUFlLEVBQUU7WUFDNUMsSUFBSSxVQUFVLEdBQUcsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRSxXQUFXLEVBQUUsZUFBZSxFQUFFLFVBQVUsQ0FBQyxDQUFDO1lBRXZGLElBQUkscUJBQXFCLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxLQUFLLFFBQVEsSUFBSSxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztZQUN2RixJQUFJLHFCQUFxQixHQUFHLENBQUMsQ0FBQyxLQUFLLGVBQWUsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssUUFBUSxJQUFJLFFBQVEsS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQzNHLElBQUksY0FBYyxJQUFJLENBQUMscUJBQXFCLElBQUkscUJBQXFCLENBQUMsRUFBRTtnQkFDcEUsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQjtpQkFBTTtnQkFDSCxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQzFCO1lBQ0QsQ0FBQyxFQUFFLENBQUM7U0FDUDtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0gsdUJBQXVCLENBQUMsSUFBSSxHQUFHLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FDL0QsQ0FBQztRQUNGLGlCQUFpQjtRQUNqQixJQUFJLElBQUksS0FBSyxDQUFDLEVBQUU7WUFDWixJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7U0FDbkM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBQ0QsUUFBUSxDQUFDLElBQUksR0FBRyxDQUFDO1FBQ2IsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtZQUNwRyxJQUFJLENBQUMsdUJBQXVCLEVBQUUsQ0FBQztZQUMvQixJQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQ2hFO2dCQUNJLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2FBQzdCO1NBQ0o7SUFFTCxDQUFDO0lBR0Qsa0JBQWtCO1FBQ2QseURBQXlEO1FBQ3pELElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBQ3hGLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0lBQ3JELENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUF1QjtRQUNuQixJQUFJLElBQUksQ0FBQyxJQUFJLEtBQUssb0JBQW9CLEVBQUU7WUFDcEMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNKO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsa0JBQWtCO1FBQ2QsdUNBQXVDO1FBQ3ZDLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxtQkFBbUIsRUFBRTtZQUNuQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDM0IsSUFBSSxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7Z0JBQ3ZCLEtBQUssTUFBTSxTQUFTLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtvQkFDeEMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxFQUFFO3dCQUMxRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7cUJBQ3pEO3lCQUFNO3dCQUNILElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3FCQUM5QjtpQkFDSjthQUNKO1NBQ0o7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGtCQUFrQixDQUFDLElBQUksRUFBRSxLQUFLO1FBQzFCLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUM7Z0JBQ2YsSUFBSTtnQkFDSixLQUFLO2FBQ1IsQ0FBQyxDQUFDO1NBQ047SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSCxpQkFBaUI7UUFDYixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVU7WUFDdEIsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBQ2xFLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUTtZQUNwQixJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7Z0JBQ2hELENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVM7Z0JBQzNCLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQztRQUNuQyxJQUFJLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUM1QixJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxlQUFlLENBQUMsQ0FBQztZQUM5SCxJQUFJLENBQUMsSUFBSSxDQUFDLGdCQUFnQixFQUFFO2dCQUN4QixnQkFBZ0IsR0FBRyxLQUFLLENBQUM7Z0JBQ3pCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUNuRCxJQUFJLENBQUMsVUFBVSxDQUFDLFVBQVUsRUFDMUIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQzNCLENBQUM7Z0JBQ0YsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsaUJBQWlCLENBQUMsS0FBSyxNQUFNLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ3RILElBQUksQ0FBQyxjQUFjLEdBQUcsS0FBSyxDQUFDO2lCQUMvQjtxQkFDSTtvQkFDRCxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztpQkFDOUI7YUFDSjtTQUNKO1FBQ0QsSUFBSSxnQkFBZ0IsRUFBRTtZQUNsQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDO1NBQ3JEO1FBQ0QsaUNBQWlDO1FBQ2pDLE1BQU0sVUFBVSxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyx1Q0FBdUM7UUFDdkcsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQy9DLDJCQUEyQjtRQUMzQixJQUFJLENBQUMsYUFBYSxHQUFHLFVBQVUsQ0FBQztRQUNoQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztRQUMxQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDdkIsQ0FBQztJQUVELFFBQVEsQ0FBQyxVQUFVO1FBQ2YsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsWUFBWSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBQ3hJLElBQUksY0FBYyxHQUFHLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFlBQVksQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1FBQzlILGlDQUFpQztRQUNqQyxpREFBaUQ7UUFDakQsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3BCLFVBQVUsR0FBRyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckcsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLGNBQWMsSUFBSSxjQUFjLENBQUMsV0FBVyxFQUFFLElBQUksTUFBTSxFQUFFO1lBQzFELFVBQVUsR0FBRyxVQUFVLENBQUMsT0FBTyxFQUFFLENBQUM7U0FDckM7UUFDRCwwQ0FBMEM7UUFDMUMsT0FBTyxVQUFVLENBQUM7SUFDdEIsQ0FBQztJQUVELFdBQVc7UUFDUCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRTtZQUNuQixhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsR0FBRyxFQUFFO1lBRWpDLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sRUFBRTtnQkFDN0QsSUFBSSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUMvRSxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxjQUFjLENBQUMsSUFBSSxJQUFJLENBQUMsb0JBQW9CLENBQUMsY0FBYyxDQUFDLENBQUMsV0FBVyxFQUFFLElBQUksTUFBTSxFQUFFO29CQUNoSCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEVBQUU7d0JBQzlHLElBQUksQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7cUJBQzlNO29CQUNELElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDdkI7YUFDSjtpQkFBTTtnQkFDSCxJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLEtBQUssQ0FBQztnQkFDaEMsYUFBYSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQzthQUNwQyxDQUFBLE1BQU07WUFFUCxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksQ0FBRSxJQUFJLENBQUMsS0FBaUIsQ0FBQyxTQUFTLEVBQUU7Z0JBQ2xELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxFQUFFLENBQUM7YUFDOUI7UUFDTCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDVixDQUFDO0lBRUQsaUZBQWlGO0lBQ2pGLCtCQUErQjtJQUMvQiw0Q0FBNEM7SUFDNUMsUUFBUTtJQUNSLG1DQUFtQztJQUNuQyxJQUFJO0lBRUosa0JBQWtCLENBQUMsYUFBYTtRQUM1QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsYUFBYSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUMzQyxJQUFJLElBQUksR0FBRyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUIsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxFQUFFO2dCQUMvQixTQUFTO2FBQ1o7WUFDRCxJQUFJLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ3BCLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLENBQUM7WUFDdkIsSUFBSSxDQUFDLG1CQUFtQixDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQy9CLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNsQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO2dCQUN6QixLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO29CQUNyQyxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUMsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLGVBQWUsRUFBRTt3QkFDdEMsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFOzRCQUNoQyxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7eUJBQ3JFO3FCQUNKO3lCQUFNO3dCQUNILEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7cUJBQzNEO29CQUNELElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQzlCO2FBQ0o7WUFDRCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRTtnQkFDdkMsS0FBSyxNQUFNLENBQUMsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRTtvQkFDOUMsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVDLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxlQUFlLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTt3QkFDNUQsS0FBSyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFOzRCQUNoQyxNQUFNLFVBQVUsR0FBRyxDQUFDLENBQUM7NEJBQ3JCLFVBQVUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsRUFBRSxJQUFJLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3lCQUMzRTtxQkFDSjt5QkFBTTt3QkFDSCxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztxQkFDakU7b0JBQ0QsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lCQUN6QzthQUNKO1NBQ0o7UUFDRCxPQUFPLGFBQWEsQ0FBQztJQUN6QixDQUFDO0lBRUQsaUZBQWlGO0lBRWpGOzs7T0FHRztJQUNILGlCQUFpQixDQUFDLFdBQVc7UUFDekIsSUFBSSxXQUFXLEVBQUU7WUFDYixNQUFNLGNBQWMsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUMsZUFBZSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztTQUMzQjtJQUNMLENBQUM7SUFFRDs7T0FFRztJQUNILGdCQUFnQjtRQUNaLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRTtZQUN0QyxLQUFLLE1BQU0sT0FBTyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsbUJBQW1CLEVBQUU7Z0JBQ3hELElBQUksT0FBTyxDQUFDLElBQUksS0FBSyxXQUFXLEVBQUU7b0JBQzlCLFFBQVEsT0FBTyxDQUFDLFlBQVksRUFBRTt3QkFDMUIsS0FBSyxPQUFPOzRCQUNSLGFBQWE7NEJBQ2IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0QkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDOzRCQUMzRSxNQUFNO3dCQUNWLEtBQUssUUFBUTs0QkFDVCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7NEJBQ2pFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDOzRCQUM1QixNQUFNO3dCQUNWLEtBQUssT0FBTzs0QkFDUixnQkFBZ0I7NEJBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7NEJBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQzs0QkFDN0UsTUFBTTt3QkFDVjs0QkFDSSxNQUFNO3FCQUNiO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxVQUFVLENBQUMsSUFBUztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUNsQyxJQUFJLEVBQUU7Z0JBQ0YsT0FBTyxFQUFFLElBQUk7YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsWUFBWSxDQUFDLE9BQU87UUFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksRUFBRTtZQUM5QixnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLFVBQVUsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUM7U0FDN0MsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNILFdBQVcsQ0FBQyxJQUFTLEVBQUUsU0FBa0IsRUFBRSxPQUFhLEVBQUUsUUFBa0I7UUFDeEUsTUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUN2QyxJQUFJLFNBQVMsRUFBRTtZQUNYLElBQUksSUFBSSxDQUFDLElBQUksS0FBSyxvQkFBb0IsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7YUFDdkI7WUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLEVBQUU7Z0JBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQ25EO1NBQ0o7YUFBTTtZQUNILElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO2dCQUNuRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0I7Z0JBQ3RELElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzNEO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxvQkFBb0IsS0FBSyxJQUFJLEVBQUU7WUFDcEMsSUFBSSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7WUFDekIsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNyRixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQztTQUNwRztRQUNELElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDWCxNQUFNLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbkIsVUFBVSxDQUFDLEdBQUcsRUFBRTtnQkFDWixLQUFLLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDdEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1NBQ1Q7SUFDTCxDQUFDO0lBRUQ7Ozs7T0FJRztJQUNILGVBQWUsQ0FBQyxJQUFLLEVBQUUsT0FBaUI7UUFDcEMsS0FBSyxNQUFNLGVBQWUsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLHFCQUFxQixFQUFFO1lBQ2xFLElBQUksZUFBZSxDQUFDLGNBQWMsS0FBSyxnQkFBZ0IsRUFBRTtnQkFDckQsTUFBTSxlQUFlLEdBQUcsRUFBRSxDQUFDO2dCQUMzQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7b0JBQ2hDLGVBQWUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQy9CO2dCQUNELE1BQU0sT0FBTyxHQUFHO29CQUNaLEVBQUUsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7b0JBQzdDLE1BQU0sRUFBRSxFQUFFO29CQUNWLE1BQU0sRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUM7b0JBQ2pELEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxlQUFlLENBQUM7aUJBQ2pILENBQUM7Z0JBQ0YscURBQXFEO2dCQUNyRCxNQUFNLElBQUksR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLENBQUM7Z0JBQ25GLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7b0JBQzVCLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztvQkFDdEUsSUFBSSxPQUFPLEdBQUc7d0JBQ1YsRUFBRSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUzt3QkFDOUIsTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO3dCQUNuQixNQUFNLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzNELFVBQVUsRUFBRSxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQzlGLGFBQWEsRUFBRSxFQUFFO3dCQUNqQixlQUFlLEVBQUUsS0FBSzt3QkFDdEIsb0JBQW9CLEVBQUUsRUFBRTt3QkFDeEIsYUFBYSxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDOzRCQUNyQyxJQUFJLENBQUMsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsZUFBZSxDQUFDO3dCQUN4RSxjQUFjLEVBQUUsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7NEJBQ3RDLElBQUksQ0FBQyxVQUFVLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGdCQUFnQixDQUFDLENBQUM7d0JBQ2pILFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVzt3QkFDM0IsUUFBUSxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO3dCQUMzRCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUs7d0JBQ3pELEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssb0JBQW9CLENBQUMsQ0FBQzs0QkFDeEMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO3dCQUNoRixPQUFPLEVBQUUsSUFBSTtxQkFDaEIsQ0FBQztvQkFDRixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQyxLQUFLLENBQUM7b0JBQ2hDLElBQUksSUFBSSxLQUFLLFNBQVMsRUFBRTt3QkFDcEIsSUFBSSxJQUFJLEtBQUssU0FBUyxFQUFFOzRCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7NEJBQ2pDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDakUsT0FBTyxHQUFHO2dDQUNOLEdBQUcsT0FBTyxFQUFFLEdBQUc7b0NBQ1gsS0FBSyxFQUFFLElBQUksQ0FBQyxTQUFTO2lDQUN4Qjs2QkFDSixDQUFDO3lCQUNMO3dCQUVELElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDLGlCQUFpQixDQUFDLEtBQUssS0FBSyxFQUFFOzRCQUN4RCxJQUFJLE9BQU8sRUFBRTtnQ0FDVCxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFFO29DQUNyRCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztpQ0FDOUM7NkJBQ0o7aUNBQU07Z0NBQ0gsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7Z0NBQ3JCLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxDQUFDO29DQUM5QixHQUFHLE9BQU8sRUFBRSxHQUFHO3dDQUNYLEtBQUssRUFBRSxFQUFFO3FDQUNaO2lDQUNKLENBQUMsQ0FBQzs2QkFDTjt5QkFDSjs2QkFBTTs0QkFDSCxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQzt5QkFDOUM7cUJBQ0o7eUJBQU07d0JBQ0gsSUFBSSxDQUFDLGNBQWMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7cUJBQzNDO2lCQUNKO2dCQUNELElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7YUFDOUQ7U0FDSjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxhQUFhLENBQUMsR0FBVztRQUNyQixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDekI7YUFBTTtZQUNILE9BQU8sR0FBRyxDQUFDO1NBQ2Q7SUFDTCxDQUFDO0lBRUQ7OztPQUdHO0lBQ0gsZUFBZSxDQUFDLEdBQUc7UUFDZixNQUFNLElBQUksR0FBRyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDakIsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2xDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMxQztpQkFBTTtnQkFDSCxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUN6QjtTQUNKO2FBQU07WUFDSCxPQUFPLEdBQUcsQ0FBQztTQUNkO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsYUFBYSxHQUFHLEdBQUcsRUFBRTtRQUNqQixLQUFLLE1BQU0sU0FBUyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMscUJBQXFCLEVBQUU7WUFDNUQsSUFBSSxTQUFTLENBQUMsY0FBYyxLQUFLLGdCQUFnQixFQUFFO2dCQUMvQyxJQUFJLENBQUMsb0JBQW9CLEdBQUcsU0FBUyxDQUFDLEtBQUssQ0FBQzthQUMvQztTQUNKO0lBQ0wsQ0FBQyxDQUFBO0lBRUQ7O09BRUc7SUFDSCxXQUFXLEdBQUcsQ0FBQyxRQUFRLEVBQUUsRUFBRTtRQUN2Qiw2RkFBNkY7UUFDN0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0QsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDOUIsSUFBSSxDQUFDLFlBQVksR0FBRyxLQUFLLENBQUM7U0FDN0I7SUFDTCxDQUFDLENBQUE7SUFFRDs7OztPQUlHO0lBQ0gsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsUUFBUSxFQUFFLFVBQVUsR0FBRyxLQUFLO1FBQ3JELElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ2pFLFVBQVUsSUFBSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLE9BQU8sRUFBRTtZQUM5QixTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUM7U0FDOUY7UUFDRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssTUFBTSxFQUFFO1lBQzdCLE9BQU8sR0FBRyxJQUFJLENBQUM7U0FDbEI7UUFDRCxJQUFJLEdBQUcsQ0FBQztRQUNSLElBQUksVUFBVSxHQUFHLEtBQUssQ0FBQztRQUN2QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDdEIsSUFBSSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsRUFBRTtZQUN6QixVQUFVLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBRUQsSUFBSSxLQUFLLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN4QixTQUFTLEdBQUcsSUFBSSxDQUFDO1NBQ3BCO1FBQ0QsTUFBTSxPQUFPLEdBQUcsRUFBRSxDQUFBO1FBQ2xCLEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO1lBQ3BCLElBQUksT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssUUFBUSxFQUFFO2dCQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzVCO1NBQ0o7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxJQUFJLENBQUMsS0FBSyxDQUFDLFVBQVUsS0FBSyxDQUFDLElBQUksS0FBSyxDQUFDLFdBQVcsS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNuRixNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMseUJBQXlCLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDeEQsR0FBRyxHQUFHO2dCQUNGLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLFFBQVE7Z0JBQzlELFNBQVMsRUFBRSxNQUFNO2dCQUNqQixPQUFPLEVBQUUsS0FBSyxDQUFDLFVBQVUsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDN0IsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVM7Z0JBQ3hFLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxLQUFLLENBQUMsQ0FBQyxDQUFDO29CQUMvQixJQUFJLENBQUMsc0JBQXNCLENBQUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsVUFBVTtnQkFDM0UsS0FBSyxFQUFFLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxVQUFVLElBQUksQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLEtBQUssT0FBTyxJQUFJLEtBQUssQ0FBQyxXQUFXLElBQUksS0FBSyxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2xJLENBQUMsS0FBSyxDQUFDLGtCQUFrQixJQUFJLEtBQUssQ0FBQyxrQkFBa0IsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEYsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUMsV0FBVyxDQUFDLENBQUM7b0JBQ25FLFNBQVMsS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLE9BQU87Z0JBQ3hELElBQUksRUFBRSxPQUFPO2FBQ2hCLENBQUM7U0FFTDthQUFNO1lBQ0gsR0FBRyxHQUFHO2dCQUNGLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztnQkFDMUIsT0FBTyxFQUFFLElBQUksQ0FBQyxPQUFPLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxTQUFTLEdBQUcsR0FBRyxHQUFHLFFBQVE7Z0JBQzlELFNBQVMsRUFBRSxNQUFNO2dCQUNqQixPQUFPLEVBQUUsU0FBUztnQkFDbEIsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLEtBQUssRUFBRSxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsVUFBVSxLQUFLLE9BQU8sSUFBSSxLQUFLLENBQUMsV0FBVyxJQUFJLEtBQUssQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNsSSxDQUFDLEtBQUssQ0FBQyxrQkFBa0IsSUFBSSxLQUFLLENBQUMsa0JBQWtCLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2xGLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUNuRSxTQUFTLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxPQUFPO2dCQUN4RCxJQUFJLEVBQUUsT0FBTzthQUNoQixDQUFDO1NBQ0w7UUFDRCxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxLQUFLLEtBQUssQ0FBQyxTQUFTLEVBQUU7WUFDL0csSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBSyxLQUFLLE1BQU0sSUFBSSxHQUFHLENBQUMsS0FBSyxLQUFLLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQTtTQUN0RjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2YsQ0FBQztJQUVEOzs7OztPQUtHO0lBQ0gscUJBQXFCLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxLQUFLO1FBQzNDLE1BQU0sbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxlQUFlLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxTQUFTLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ25HLElBQUksbUJBQW1CLEVBQUU7WUFDckIsT0FBTyxtQkFBbUIsQ0FBQztTQUM5QjtRQUNELE9BQU8sWUFBWSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7Ozs7T0FLRztJQUNILHNCQUFzQixDQUFDLElBQUksRUFBRSxZQUFZLEVBQUUsS0FBSztRQUM1QyxNQUFNLGlCQUFpQixHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMvRixJQUFJLGlCQUFpQixFQUFFO1lBQ25CLE9BQU8saUJBQWlCLENBQUM7U0FDNUI7UUFDRCxPQUFPLFlBQVksQ0FBQztJQUN4QixDQUFDO0lBRUQsZ0lBQWdJO0lBQ2hJOzs7T0FHRztJQUNILHlCQUF5QixDQUFDLFdBQVc7UUFDakMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2YsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFO1lBQ2xELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM1QyxHQUFHLENBQUMsUUFBUSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLEVBQUUsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7U0FDMUk7UUFDRCxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILHNCQUFzQjtRQUNsQixNQUFNLEdBQUcsR0FBRyxFQUFFLENBQUM7UUFDZixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFO1lBQ3pDLElBQUksS0FBSyxDQUFDLFVBQVUsS0FBSyxlQUFlLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTtnQkFDNUQsS0FBSyxNQUFNLFdBQVcsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFO29CQUMxQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsR0FBRyxFQUFFLFdBQVcsQ0FBQyxDQUFDO2lCQUN0RDthQUNKO2lCQUFNO2dCQUNILElBQUksQ0FBQywyQkFBMkIsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7YUFDaEQ7U0FDSjtRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNoQixLQUFLLE1BQU0sS0FBSyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsWUFBWSxFQUFFO2dCQUNsRCxJQUFJLEtBQUssQ0FBQyxVQUFVLEtBQUssZUFBZSxJQUFJLEtBQUssQ0FBQyxZQUFZLEVBQUU7b0JBQzVELEtBQUssTUFBTSxXQUFXLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRTt3QkFDMUMsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxXQUFXLENBQUMsQ0FBQztxQkFDdEQ7aUJBQ0o7cUJBQU07b0JBQ0gsSUFBSSxDQUFDLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDaEQ7YUFDSjtTQUNKO1FBQ0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEdBQUcsQ0FBQztJQUNoQyxDQUFDO0lBRUQsMkNBQTJDO0lBQ25DLDJCQUEyQixDQUFDLEdBQUcsRUFBRSxLQUFLO1FBQzFDLElBQUksSUFBSSxDQUFDLGNBQWMsSUFBSSxLQUFLLENBQUMsT0FBTyxFQUFFO1lBQ3RDLEdBQUcsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLGtDQUFrQztTQUMzRTthQUFNO1lBQ0gsSUFBSSxLQUFLLENBQUMsZ0JBQWdCLEVBQUU7Z0JBQ3hCLElBQUksS0FBSyxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRTtvQkFDdEMsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7b0JBQ2hILEtBQUssTUFBTSxHQUFHLElBQUksSUFBSSxFQUFFO3dCQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSyxDQUFDLFNBQVMsQ0FBQztxQkFDOUI7aUJBQ0o7cUJBQU07b0JBQ0gsR0FBRyxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUM7aUJBQ2pEO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRDs7O09BR0c7SUFDSCxnQkFBZ0IsQ0FBQyxJQUFZO1FBQ3pCLDJDQUEyQztRQUMzQyxJQUFJLElBQUksQ0FBQyxXQUFXLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLEVBQUU7WUFDaEQsSUFBSSxJQUFJLENBQUMsV0FBVyxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQzNGLEtBQUssTUFBTSxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUMsRUFBRTtvQkFDekUsSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFNBQVMsSUFBSSxLQUFLLENBQUMsVUFBVSxJQUFJLEtBQUssQ0FBQyxVQUFVLENBQUMsV0FBVyxFQUFFLEtBQUssSUFBSSxDQUFDLFdBQVcsRUFBRSxFQUFFO3dCQUN2RyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsc0JBQXNCLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLENBQUM7cUJBQ3BGO2lCQUNKO2FBQ0o7U0FDSjtJQUNMLENBQUM7SUFFRCwwQkFBMEI7SUFDMUIsSUFBSSxjQUFjO1FBQ2QsT0FBTyxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsQ0FBQyxLQUFLLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDMUUsQ0FBQztJQUVEOzs7T0FHRztJQUNILGFBQWEsQ0FBQyxJQUFTLEVBQUUsR0FBVztRQUNoQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsR0FBRyxDQUFDO1FBQzVCLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRW5ELElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNwQixJQUFJLENBQUMsYUFBYSxDQUFDO2dCQUNmLElBQUksRUFBRSxJQUFJLENBQUMsYUFBYTtnQkFDeEIsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDO2FBQ2xDLENBQUMsQ0FBQztTQUNOO1FBQ0QsS0FBSyxNQUFNLEtBQUssSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsRUFBRTtZQUN0RSxJQUFJLEtBQUssQ0FBQyxTQUFTLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxXQUFXLEVBQUUsS0FBSyxTQUFTLEVBQUU7Z0JBQ2pFLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxzQkFBc0IsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7YUFDakY7U0FDSjtJQUNMLENBQUM7SUFFRCxJQUFJLGFBQWE7UUFDYixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsV0FBVyxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3hJLENBQUM7SUFFRDs7T0FFRztJQUNILFdBQVc7UUFDUCx3QkFBd0I7UUFDeEIsa0NBQWtDO1FBQ2xDLG9HQUFvRztRQUNwRyx3QkFBd0I7UUFDeEIsc0NBQXNDO1FBQ3RDLG9IQUFvSDtRQUNwSCxJQUFJO1FBQ0osaUZBQWlGO1FBQ2pGLDZGQUE2RjtRQUM3RixJQUFJO1FBQ0osS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ2hDLElBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDdkIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN2QztTQUNKO1FBRUQsSUFBSSxJQUFJLENBQUMsWUFBWSxFQUFFO1lBQ25CLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7U0FDcEM7UUFDRCxJQUFJLENBQUMsaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFDRCxvQkFBb0IsQ0FBQyxLQUFnQjtRQUNqQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUNwQyxNQUFNLE9BQU8sR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDO1FBRS9CLE1BQU0sZUFBZSxHQUFHLE9BQU8sS0FBSyxJQUFJLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDO1FBRXJFLElBQUksQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLEdBQUcsT0FBTyxDQUFDO1FBRTNDLElBQUksZUFBZSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxrQkFBa0IsRUFBRSxDQUFDLENBQUMsZ0NBQWdDO1lBQzNELElBQUksQ0FBQyx1QkFBdUIsRUFBRSxDQUFDLENBQUMsZUFBZTtTQUNsRDtRQUVELElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyx3QkFBd0I7SUFDdEQsQ0FBQztJQUdELE1BQU0sQ0FBQyxLQUFhO1FBQ2hCLE1BQU0sS0FBSyxHQUFHLGVBQWUsQ0FBQztRQUM5QixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDN0IsQ0FBQzsrRUE3c0RRLHFCQUFxQjs2REFBckIscUJBQXFCO1lDMmFsQyxBQTlMQSxBQWhTQSx3RkFBZ0MsNEdBaVNILDRHQThMQTs7WUEvZGQsb0NBQWU7NEJEbURqQixxQkFBcUIsRUFGcEIsaUJBQWlCLEVBQUUsa0JBQWtCLG9CQUFFLGNBQWMsZ0JBQUUsT0FBTyxFQUFFLFlBQVksOEZBQVksV0FBVyw4S0FBRSxtQkFBbUIsRUFBRSxrQkFBa0I7O2lGQUU3SSxxQkFBcUI7Y0FQakMsU0FBUzsyQkFDSSxtQkFBbUIsY0FHakIsSUFBSSxXQUNQLENBQUMsaUJBQWlCLEVBQUUsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxrQkFBa0IsQ0FBQzs2VEFPOUksV0FBVztrQkFBbkIsS0FBSztZQUNXLE1BQU07a0JBQXRCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csSUFBSTtrQkFBWixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7O2tGQVhHLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lciwgZm9yd2FyZFJlZiwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdSZWYsIGFmdGVyUmVuZGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2V0QVBJQ2FsbGJhY2tEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0LWFwaS1jYWxsYmFjay1kYXRhLXV0aWwnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25hbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtY29uZGl0aW9uYWwtdXRpbCc7XHJcbmltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dCBhcyBNYXRJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBBbGVydE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV0ZFRXZlbnRMaXN0SGFuZGxlciB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1ldmVudC1saXN0LWhhbmRsZXItdXRpbCc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IEFQSUtleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9hcGkta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBFbXB0eVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9lbXB0eS11dGlsJztcclxuaW1wb3J0IHsgRHluYW1pY0xhYmVsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2R5bmFtaWMtbGFiZWwtdXRpbCc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBZb3VUdWJlUGxheWVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIveW91dHViZS1wbGF5ZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuLy8gaW1wb3J0IHsgQ2VlVmlkZW9Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS12aWRlby9jZWUtdmlkZW8uY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlQXR0YWNobWVudHNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1hdHRhY2htZW50cy9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgRHluYW1pY0Zvcm1Db21wb25lbnQgfSBmcm9tICcuLi9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IEFjY29yZGlvblJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYWNjb3JkaW9uLXJlbmRlcmVyL2FjY29yZGlvbi1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlL2NlZS10YWJsZS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbGluay9jZWUtbGluay5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1idXR0b24vY2VlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1waWNrZXIvY2VlLXBpY2tlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWltYWdlL2NlZS1pbWFnZS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbWVudS9jZWUtbWVudS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVUZXh0ZmllbGRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10ZXh0ZmllbGQvY2VlLXRleHRmaWVsZC5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVMYWJlbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBOZ1N0eWxlLCBOZ1N3aXRjaCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nQ29tcG9uZW50T3V0bGV0IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbi8vIGltcG9ydCB7IENlZVRhYmxlVjJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10YWJsZS12Mi9jZWUtdGFibGUtdjIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgZGVmZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUGFnZUV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0UGFnaW5hdG9yTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1saXN0LXJlbmRlcmVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2xpc3QtcmVuZGVyZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmdDb21wb25lbnRPdXRsZXQsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE5nU3R5bGUsIENvbW1vbk1vZHVsZSwgTmdTd2l0Y2gsIEZvcm1zTW9kdWxlLCBZb3VUdWJlUGxheWVyTW9kdWxlLCBNYXRQYWdpbmF0b3JNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBMaXN0UmVuZGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG5cclxuICAgIEBJbnB1dCgpIHNlY3Rpb25EYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgdGVtcGxhdGVJZDogYW55O1xyXG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgY2hpbGRMaXN0OiBhbnkgPSB7fTtcclxuXHJcbiAgICBwYWdpbmF0aW9uID0ge1xyXG4gICAgICAgIHBhZ2VJdGVtczogWzEwLCAxNSwgMjBdLFxyXG4gICAgICAgIGN1cnJlbnRJdGVtQ291bnQ6IDEwLFxyXG4gICAgICAgIHNob3dOZXh0OiB0cnVlLFxyXG4gICAgICAgIHNob3dQcmV2aW91czogZmFsc2UsXHJcbiAgICAgICAgY3VycmVudFBhZ2U6IDEsXHJcbiAgICAgICAgcGFnZUNvdW50OiAxLFxyXG4gICAgICAgIGl0ZW1Db3VudDogMSxcclxuICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgIGVuZEluZGV4OiAwLFxyXG4gICAgICAgIHBhZ2luYXRpb25SYW5nZTogOVxyXG4gICAgfTtcclxuICAgIHNob3dQYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICBhdXRvUGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICBzaG93RmlsdGVyID0gZmFsc2U7XHJcbiAgICBmaWx0ZXJQbGFjZWhvbGRlclRleHQgPSAnRmlsdGVyJztcclxuICAgIGNhblJlZnJlc2ggPSBmYWxzZTtcclxuXHJcbiAgICBkaXNwbGF5VmFsdWVzOiBhbnkgPSBbXTtcclxuICAgIGRpc3BsYXlWYWx1ZXNMYXp5OiBhbnkgPSBbXTtcclxuICAgIGxhenlJbnRlcnZhbDogYW55ID0gW107XHJcbiAgICBzZWFyY2hEYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XHJcbiAgICBzaG93TG9hZGluZyA9IHRydWU7XHJcbiAgICBub0RhdGFGb3VuZCA9IHRydWU7XHJcbiAgICBzaG93U2tlbGV0b25Mb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgbGlzdEVsZW1lbnRzOiBhbnkgPSBbXTtcclxuICAgIHJhZGlvVmFsdWU6IGFueTtcclxuICAgIGNoZWNrZWRJdGVtczogYW55ID0gW107XHJcbiAgICBzdG9yZURhdGE6IGFueSA9IFtdO1xyXG4gICAgcHJpbWFyeUtleVZhbCA9ICcnO1xyXG4gICAgc2hvd0Vycm9yT25OZXh0ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIGNkUmVmOiBDaGFuZ2VEZXRlY3RvclJlZjtcclxuICAgIHB1YmxpYyBoYXNFbWl0dGVkQ29tcGxldGlvbiA9IGZhbHNlOyAvLyBGbGFnIHRvIHRyYWNrIGNvbXBsZXRpb24gZW1pc3Npb25cclxuICAgIG1lc3NhZ2VzID0gW107XHJcbiAgICAvLyBBcHAgRGF0YSBvZiB0aGUgbGlzdCBjZWxsXHJcbiAgICBsaXN0Q2VsbEFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBmaWVsZExhYmVsOiAnJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgZGF0YUZvcm1hdFNlcGFyYXRvcjogJycsXHJcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIGlzVmFsaWQ6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgYXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICAgIGZpZWxkTGFiZWw6ICcnLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB0b3RhbENvdW50QXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICAgIGZpZWxkTGFiZWw6ICcnLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGlwc0FycmF5OiBhbnkgPSBbXTtcclxuICAgIGNoaXBzRGlzcGxheSA9IGZhbHNlO1xyXG4gICAgY2hpcHNBcGlLZXlUb0Rpc3BsYXk6IGFueSA9IG51bGw7XHJcbiAgICBjb250ZXh0QXJyYXk6IGFueSA9IFtdO1xyXG4gICAgZmllbGRJZE1hcEFwaUtleTogb2JqZWN0ID0ge307IC8vIHRvIG1hcCB0aGUgYXBpIGZpZWxkIGlkIGFuZCB0aGUgYXBpIGtleSBvZiBhIHNpbmdsZSBmaWVsZFxyXG5cclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXJzID0ge307XHJcblxyXG4gICAgc2V0QVBJS2V5VXRpbDogU2V0QVBJQ2FsbGJhY2tEYXRhO1xyXG4gICAgZXZlbnRMaXN0SGFuZGxlcjogV0ZFRXZlbnRMaXN0SGFuZGxlcjtcclxuICAgIGFwaUtleVV0aWw6IEFQSUtleVV0aWw7XHJcbiAgICAvLyBhcGlTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHZhcmlhYmxlT2JqID0ge307XHJcbiAgICBjb25kaXRpb25hbFV0aWw6IENvbmRpdGlvbmFsVXRpbDtcclxuICAgIGZpZWxkRGF0YTogYW55O1xyXG4gICAgaXNNYW5kYXRvcnkgPSBmYWxzZTtcclxuICAgIGlzX2Jvb3RzdHJhcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgYmxvY2tSZW5kZXJlZERhdGE6IGFueTtcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcbiAgICBmaWx0ZXJLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZmlsdGVyQVBJS2V5OiBzdHJpbmc7XHJcbiAgICBwYWdpbmF0aW9uU2hvd2luZ1Jlc3VsdEhpbnQ6IHN0cmluZyA9ICcldmFsdWUlJztcclxuICAgIGhpZGVuUm93czogc3RyaW5nO1xyXG4gICAgZXhwYW5kZWRFbGVtZW50O1xyXG4gICAgZXhwYW5kVGl0bGU6IHN0cmluZyA9ICdTaG93JztcclxuICAgIGNvbGxhcHNlVGl0bGU6IHN0cmluZyA9ICdIaWRlJztcclxuICAgIGZpbHRlclR4dDogc3RyaW5nID0gJyc7XHJcbiAgICBpc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIHBhZ2luYXRpb25OZXh0TGFiZWw6IHN0cmluZyA9ICdOZXh0JztcclxuICAgIHBhZ2luYXRpb25QcmV2aW91c0xhYmVsOiBzdHJpbmcgPSAnUHJldmlvdXMnO1xyXG4gICAgcGFnaW5hdGlvblN0eWxlOiBzdHJpbmcgPSAnYm9vdHN0cmFwJztcclxuICAgIHBhZ2VzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZmllbGRWYWx1ZTogYW55O1xyXG4gICAgc2VydmVyUGFnaW5hdGlvbiA9IGZhbHNlOyAvLyBzZXQgdGhpcyB0byB0cnVlIHdoZW4gUGFnaW5hdGlvbiBUeXBlIGlzIHNlcnZlclxyXG4gICAgc2VydmVyUGFnaW5hdGlvbktleXMgPSBbXTtcclxuICAgIGNoZWNrRW1wdHk6IEVtcHR5VXRpbDtcclxuICAgIHNldER5bmFtaWNMYWJlbFV0aWw6IER5bmFtaWNMYWJlbFV0aWw7XHJcbiAgICAvLyB0byBvdmVyd3JpdGUgdGhlIHByb3BlcnR5IG9mIGNoZWNrIGJveCBhbmQgcmFkaW8gaW4gY2FzZSBvZiBsaXN0IHNpbmdsZSBzZWxlY3QgYW5kIG11bHRpIHNlbGVjdFxyXG4gICAgc2VsZWN0ZWRPYmogPSB7XHJcbiAgICAgICAgcmFkaW86IG51bGwsXHJcbiAgICAgICAgY2hlY2tib3g6IG51bGwsXHJcbiAgICB9O1xyXG4gICAgbm9EYXRhRm91bmRMYWJlbDogc3RyaW5nID0gJ25vIHJlY29yZCBmb3VuZC4nO1xyXG4gICAgZXhwYW5kYWJsZURhdGE6IGFueTtcclxuICAgIGlzTGlzdENlbGwgPSBmYWxzZTsgLy8gc2V0IHRydWUgaWYgdGhlIGZpZWxkcyBpbiBnZW5lcmljIGJsb2NrIGlzIExpc3RDZWxsXHJcbiAgICBsaXN0Q2VsbEV2ZW50Q29uZmlnID0gW107IC8vIHNldCBMaXN0IENlbGwgRXZlbnQgQ29uZmlnXHJcbiAgICBkaXNwbGF5ZWRVbmlxdWVJZHMgPSBbXTsgLy8gdW5pcXVlIElEcyBhcnJheSB3aGVuIHRoZSB1c2VyIGNvbmZpZ3VyZXMgYSBsaXN0IGNlbGwgaW5zaWRlIHRoZSBnZW5lcmljIGJsb2NrXHJcbiAgICBsaXN0SW50ZXJuYWxBcGlEYXRhOiBhbnkgPSB7fTtcclxuICAgIGxpc3RMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICByZXN1bHRDb3VudEFQSUtleTogc3RyaW5nID0gXCJcIjtcclxuICAgIFNob3dNb3JlOiBib29sZWFuID1mYWxzZTtcclxuICAgIGJ0blNob3dNb3JlTmFtZTogc3RyaW5nO1xyXG4gICAgU2hvd01vcmVIaWRlOiBib29sZWFuID10cnVlO1xyXG4gICAgcGFnaW5hdGlvbkZpcnN0TGFiZWw6IHN0cmluZztcclxuICAgIHBhZ2luYXRpb25MYXN0TGFiZWw6IHN0cmluZztcclxuICAgIHNlbGVjdGVkUm93SW5kZXg6IG51bWJlcjtcclxuICAgIHRhYkluZGV4VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICByb3dEYXRhU2hvd246IGFueTtcclxuICAgIGlSb3dEYXRhOiBudW1iZXI7XHJcbiAgICBpdGVtUGVyUGFnZTogbnVtYmVyO1xyXG4gICAgaGFzUm93Q29uZGl0aW9uRmllbGQ6IGFueTtcclxuICAgIGh0bWxfaWQ6IGFueSA9ICcnO1xyXG5cclxuICAgIGNvbXBvbmVudExpc3QgPSB7fTtcclxuXHJcbiAgICBjb21wb25lbnRNYXAgPSB7XHJcbiAgICAgICAgbGFiZWw6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnbGFiZWwnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnbGFiZWwnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVMYWJlbENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBUZXh0ZmllbGQ6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGZpZWxkJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1RleHRmaWVsZCddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGV4dGZpZWxkL2NlZS10ZXh0ZmllbGQuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlVGV4dGZpZWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGZpZWxkJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBNZW51OiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ01lbnUnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbWVudS9jZWUtbWVudS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVNZW51Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgSW1hZ2U6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnSW1hZ2UnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnSW1hZ2UnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWltYWdlL2NlZS1pbWFnZS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVJbWFnZUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ0ltYWdlJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBQaWNrZXI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1BpY2tlciddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcGlja2VyL2NlZS1waWNrZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlUGlja2VyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCdXR0b246IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnQnV0dG9uJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0J1dHRvbiddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnQnV0dG9uJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBMaW5rOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ0xpbmsnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnTGluayddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbGluay9jZWUtbGluay5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVMaW5rQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnTGluayddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgVmlkZW86IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnVmlkZW8nXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnVmlkZW8nXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXZpZGVvL2NlZS12aWRlby5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVWaWRlb0NvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1ZpZGVvJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBUYWJsZTogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydUYWJsZSddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZSddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGFibGUvY2VlLXRhYmxlLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRhYmxlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGFibGUnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEFjY29yZGlvbjogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydBY2NvcmRpb24nXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnQWNjb3JkaW9uJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2FjY29yZGlvbi1yZW5kZXJlci9hY2NvcmRpb24tcmVuZGVyZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQWNjb3JkaW9uUmVuZGVyZXJDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydBY2NvcmRpb24nXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIER5bmFtaWNGb3JtOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ0R5bmFtaWNGb3JtJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0R5bmFtaWNGb3JtJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JykudGhlbihtID0+IG0uRHluYW1pY0Zvcm1Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydEeW5hbWljRm9ybSddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQXR0YWNobWVudHM6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnQXR0YWNobWVudHMnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnQXR0YWNobWVudHMnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWF0dGFjaG1lbnRzL2NlZS1hdHRhY2htZW50cy5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVBdHRhY2htZW50c0NvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ0F0dGFjaG1lbnRzJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcGFnZUl0ZW1zOiBhbnk7XHJcbiAgICBzZXRGcm9tU3RvcmU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIpIHtcclxuICAgICAgICB0aGlzLmlSb3dEYXRhID0gMDtcclxuICAgICAgICB0aGlzLml0ZW1QZXJQYWdlID0gNDtcclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2V0QVBJS2V5VXRpbCA9IG5ldyBTZXRBUElDYWxsYmFja0RhdGEoYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbCA9IG5ldyBEeW5hbWljTGFiZWxVdGlsKGFwaURhdGFTZXJ2aWNlLCBhcHBEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25hbFV0aWwgPSBuZXcgQ29uZGl0aW9uYWxVdGlsKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc1NpbmdsZUNvbmRpdGlvbicpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2UsIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RIYW5kbGVyID0gbmV3IFdGRUV2ZW50TGlzdEhhbmRsZXIoXHJcbiAgICAgICAgICAgIGNlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgIHJvdXRlcixcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgd2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBhcGlEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLFxyXG4gICAgICAgICAgICBzbmFja0JhcixcclxuICAgICAgICAgICAgaHR0cCk7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLmFwaUtleVV0aWwgPSBuZXcgQVBJS2V5VXRpbCgpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tFbXB0eSA9IG5ldyBFbXB0eVV0aWwoKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzX2Jvb3RzdHJhcCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5pc19ib290c3RyYXAgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWZ0ZXJSZW5kZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhbGwgaXRlbXMgYXJlIHJlbmRlcmVkIGFuZCB3ZSBoYXZlbid0IGVtaXR0ZWQgY29tcGxldGlvbiB5ZXRcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmhhc0VtaXR0ZWRDb21wbGV0aW9uICYmIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWVzLmxlbmd0aCA+IDAgJiYgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5Lmxlbmd0aCA9PT0gdGhpcy5kaXNwbGF5VmFsdWVzLmxlbmd0aCAmJlxyXG4gICAgICAgICAgICAgICAgIXRoaXMubGlzdExvYWRpbmcpIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBbGwgbGlzdCBpdGVtcyByZW5kZXJlZCwgZW1pdHRpbmcgc3RlcExvYWRlckVtaXR0ZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNFbWl0dGVkQ29tcGxldGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaHRtbF9pZCA9IHRoaXMucm93RGF0YSAmJiB0aGlzLnJvd0RhdGEuaHRtbF9pZCA/IHRoaXMucm93RGF0YS5odG1sX2lkIDogdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgbGV0IGZyb21TdG9yZTtcclxuXHJcbiAgICAgICAgdGhpcy5saXN0Q2VsbEFwcERhdGEuc3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhZGRpdGlvbmFsX3BhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGV2ZW50X2xpc3RcclxuICAgICAgICB9ID0gdGhpcy5zZWN0aW9uRGF0YTtcclxuICAgICAgICBsZXQga2V5cyA9IFtdO1xyXG4gICAgICAgIGlmIChhZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIGFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1twYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTaG93IENoaXBzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQcmltYXJ5S2V5TmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpbWFyeUtleVZhbCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTaG93IFBhZ2luYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gcGFyYW10ZXIudmFsdWUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBTdHlsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblN0eWxlID0gKHBhcmFtdGVyLnZhbHVlID09PSAnbWF0ZXJpYWwnKSA/ICdtYXRlcmlhbCcgOiAnYm9vdHN0cmFwJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBWYWx1ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24ucGFnZUl0ZW1zID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiBOdW1iZXIocy50cmltKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQgPSB0aGlzLnBhZ2luYXRpb24ucGFnZUl0ZW1zWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIE5leHQgTGFiZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25OZXh0TGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdOZXh0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBQcmV2aW91cyBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblByZXZpb3VzTGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdQcmV2aW91cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gRmlyc3QgTGFiZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25GaXJzdExhYmVsID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gTGFzdCBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkxhc3RMYWJlbCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFNob3dpbmcgUmVzdWx0IEhpbnQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25TaG93aW5nUmVzdWx0SGludCA9IHBhcmFtdGVyLnZhbHVlICE9PSAnJyA/IHBhcmFtdGVyLnZhbHVlIDogJyV2YWx1ZSUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdObyBEYXRhIEZvdW5kIExhYmVsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RhdGFGb3VuZExhYmVsID0gcGFyYW10ZXIudmFsdWUgIT09ICcnID8gcGFyYW10ZXIudmFsdWUgOiAnbm8gcmVjb3JkIGZvdW5kLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Nob3cgRmlsdGVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RmlsdGVyID0gcGFyYW10ZXIudmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZpbHRlciBQbGFjZWhvbGRlciBUZXh0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJQbGFjZWhvbGRlclRleHQgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRmlsdGVyS2V5cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyS2V5cyA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdGaWx0ZXJBUElLZXknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckFQSUtleSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdIaWRlUm93cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZW5Sb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMudHlwZSA9PT0gJ0xpc3QtRXhwYW5kYWJsZScgPyBwYXJhbXRlci52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdleHBhbmRUaXRsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlIDogdGhpcy5leHBhbmRUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBUeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdzZXJ2ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZlclBhZ2luYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NldCBmcm9tIHN0b3JlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnZhbHVlID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICogT25seSB3b3JrcyBpZiB0aGUgYXBpIGtleSBpcyBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBmb3IgbGlzdCB0byBzaG93IHRoZSBkYXRhIGZyb20gaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBoYW5kbGVyIGRhdGEgbmVlZHMgdG8gYmUgc3RvcmVkIGluIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBhcGkgZGF0YSBzdG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLyogaWYgKCF0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpS2V5cyA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGFwaUtleS5zcGxpdCgnIyMnKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVN0b3JlID0gaGFuZGxlckRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gKi9cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTZXQgRnJvbSBzdG9yZSBFbmFibGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZyb21TdG9yZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTaW5nbGVBUElLZXkgJiYgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlLZXlzID0gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLnNlY3Rpb25EYXRhLnJlc3BvbnNlX2FwaV9rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBpS2V5IG9mIGFwaUtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIoYXBpS2V5LnNwbGl0KCcjIycpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tU3RvcmUgPSBoYW5kbGVyRGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Nob3dNb3JlJzogICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlNob3dNb3JlID0gcGFyYW10ZXIudmFsdWUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0J0blNob3dNb3JlX05hbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5idG5TaG93TW9yZU5hbWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gQVBJIEtleXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3x8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbGxhcHNlVGl0bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlIDogdGhpcy5jb2xsYXBzZVRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdSZXN1bHQgQ291bnQgQVBJIEtleSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0Q291bnRBUElLZXkgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVGFiSW5kZXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkluZGV4VmFsdWUgPSBwYXJzZUludChwYXJhbXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Nhcm91c2VsSXRlbVBlclBhZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1QZXJQYWdlID0gKHBhcmFtdGVyLnZhbHVlICYmICFpc05hTihwYXJhbXRlci52YWx1ZSkpID8gcGFyc2VJbnQocGFyYW10ZXIudmFsdWUpIDogNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2hvd01vcmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5TaG93TW9yZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQnRuU2hvd01vcmVfTmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ0blNob3dNb3JlTmFtZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1lYW5zIGl0IGlzIGEgZmllbGQgbm90IGEgc2VjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkge1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHBhZ2luYXRpb24ga2V5cyBmb3Igc2VydmVyIGRyaXZlbiBsaXN0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIDAgdGgga2V5IGZvciB0b3RhbCBObyBvZiB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIC8vIDFzdCBrZXkgZm9yIHBhZ2UgbnVtYmVyXHJcbiAgICAgICAgICAgICAgICAvLyAybmQga2V5IGZvciBwYWdlIHNpemVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24gJiYga2V5cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnJ5IHBhZ2luYXRpb24gYXBpIGtleXMgYXJlIG5vdCBjb25maWd1cmVkIHByb3Blcmx5JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdGb3JtYXQgc2hvdWxkIGJlOicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGFwaV9rZXlfZm9yX3RvdGFsX251bWJlcl9vZl92YWx1ZXM+fHw8YXBpX2tleV9mb3JfcGFnZV9udW1iZXI+fHw8YXBpX2tleV9mb3JfcGFnZV9zaXplPicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5cyA9IGtleXMubWFwKChzdHIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc3RyLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluZGV4ID09PSAyID8gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQgOiAnMSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRMaXN0ICYmIE9iamVjdC5rZXlzKHRoaXMuY2hpbGRMaXN0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKHRoaXMuY2hpbGRMaXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzID0gdGhpcy5jaGlsZExpc3QuYmxvY2tfZmllbGRzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2RlZmF1bHRfdmFsdWUnXSkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrUmVuZGVyZWREYXRhID0gdGhpcy5jb21tb25VdGlsLmJsb2NrQm9vdHN0cmFwUHJvY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzID0gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5saXN0RWxlbWVudHMgPSBBcnJheSh0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudCk7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBsaXN0IGhhcyBwb3NzaWJsZSB2YWx1ZXNcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEgJiYgdGhpcy5zZWN0aW9uRGF0YS5wb3NzaWJsZV92YWx1ZXMgJiYgdGhpcy5zZWN0aW9uRGF0YS5wb3NzaWJsZV92YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRMaXN0RGF0YSh0aGlzLm1hcFBvc3NpYmxlVmFsdWVzKHRoaXMuc2VjdGlvbkRhdGEucG9zc2libGVfdmFsdWVzKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEdldCBFeHBhbmRhYmxlIGZpZWxkIGRldGFpbHNcclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZW5Sb3dzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZGFibGVEYXRhID0gYXdhaXQgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUodGhpcy5oaWRlblJvd3MpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0cmlldmUgY2hpbGQgZ2VuZXJpYyBibG9jayBmaWVsZHNcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5leHBhbmRhYmxlRGF0YS5ibG9ja19maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmRlZmF1bHRfdmFsdWUgPSBmaWVsZC5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmlsdGVyKGFwID0+IGFwLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGVmYXVsdF92YWx1ZS5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKGZpZWxkLmRlZmF1bHRfdmFsdWVbMF0udmFsdWUpLnRvUHJvbWlzZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoaWxkX2ZpZWxkcyA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MoY2hpbGREYXRhKS5ibG9ja19maWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLnJldHJpZXZlQmxvY2tGaWVsZHMoKTtcclxuICAgICAgICAgICAgdGhpcy5yZXR1cm5GaWVsZElkTWFwQXBpS2V5KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlICE9PSAnTGlzdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVQcmltYXJ5S2V5KCdPTl9MT0FEJywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqWydzaG93TWFuZGF0b3J5RXJyb3JNc2dfJyArIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkXSA9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5zaG93TWFuZGF0b3J5RXJyb3JNc2cuc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzLmZpZWxkcykgJiYgcmVzLnR5cGUgPT09ICdldmVudCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmluY2x1ZGVzKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01hbmRhdG9yeSAmJiB0aGlzLmNoZWNrRW1wdHkuaXNFbXB0eSh0aGlzLmZpZWxkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNYW5kYXRvcnkgJiYgdGhpcy5jaGVja0VtcHR5LmlzRW1wdHkodGhpcy5maWVsZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck1lc3NhZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBlbXB0eSBzZXNzaW9uIGRhdGEgd2hlbiB0aGUgc2Vzc2lvbiBjbGVhcmFuY2UgaXMgZW1pdHRlZFxyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnZW1wdHlTZXNzaW9uRGF0YScgKyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF0gPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdEZvckVtcHR5U2Vzc2lvbi5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdW5pcXVlSWRWYWx1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByZXMudW5pcXVlX2lkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZFZhbHVlID0gW3RoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJlcy5hcGlLZXlzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQVBJS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUlkVmFsdWUgPSBbdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZFZhbHVlID0gWy4uLnVuaXF1ZUlkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25EYXRhLnJlc3BvbnNlX2FwaV9rZXkpKV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZUlkVmFsdWUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi51bmlxdWVJZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLnNlY3Rpb25EYXRhLnJlcXVlc3RfYXBpX2tleSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1bmlxdWVJZFZhbHVlLmluY2x1ZGVzKGVsbSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlOyAvLyB0eXBlIGFueVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnTGlzdC1NdWx0aS1TZWxlY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZGlvVmFsdWUgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gYXNzaWduIGFwcCBkYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRPRE86IFJlcGxhY2Ugd2l0aCBhIGZ1bmN0aW9uIGNvZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcHBEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RlcElkOiB0aGlzLnN0ZXBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyB0aGlzLnNlY3Rpb25EYXRhLmFwaV9rZXkgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZExhYmVsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVMYWJlbHMnKSA9PT0gJ3RydWUnID8gdGhpcy5zZWN0aW9uRGF0YS5maWVsZF9sYWJlbCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5zZWN0aW9uRGF0YS5yZXF1ZXN0X2FwaV9rZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXModGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0aGlzLnNlY3Rpb25EYXRhLmlzX2VkaXRhYmxlID09PSAxID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRoaXMuc2VjdGlvbkRhdGEuaXNfZGlzcGxheSA9PT0gMSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YSh0aGlzLmFwcERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNldCByYWRpbyB2YWx1ZSBvbiBsb2FkIG9mIGEgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RlZFJhZGlvVmFsdWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXF1ZV9pZCA9ICh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA/IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkIDogdGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uX2lkKVxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IHRoaXMuY2hlY2tSb3dWaXNpYmlsaXR5KHRoaXMucm93RGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialtcclxuICAgICAgICAgICAgICAgICdlbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlXycgK1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkXSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRBcGlTdWNjZXNzUmVzcG9uc2Uuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMaXN0RGF0YShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrIGlmIHRoZSBjaGVja2JveCBuZWVkcyBjaGlwc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDaGlwcygpO1xyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgICAgICAnZW1pdFNldEZpZWxkVmFsdWVPbkV2ZW50XycgK1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRdID1cclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0U2V0RmllbGRWYWx1ZU9uRXZlbnQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnVuaXF1ZUlkcyAmJiByZXMudW5pcXVlSWRzLmluY2x1ZGVzKCdmaWx0ZXJfY29sdW1uXycgKyB1bmlxdWVfaWQpICYmIHJlcy52YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwuc2V0RmlsdGVyS2V5cyh0aGlzLnNlYXJjaERhdGEsIHJlc1sndmFsdWVzJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy51bmlxdWVJZHMgJiYgcmVzLnVuaXF1ZUlkcy5pbmNsdWRlcygnZmlsdGVyXycgKyB1bmlxdWVfaWQpICYmIHJlcy52YWx1ZXMgJiYgcmVzLnZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclR4dCA9IHJlc1sndmFsdWVzJ10ubGVuZ3RoID4gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc1sndmFsdWVzJ11bcmVzWyd1bmlxdWVJZHMnXS5pbmRleE9mKCdmaWx0ZXJfJyArIHVuaXF1ZV9pZCldIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzWyd2YWx1ZXMnXVswXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgICAgICAgICAnZW1pdE9uRGF0YVNldE9yVXBkYXRlZF8nICsgdW5pcXVlX2lkXHJcbiAgICAgICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmllbGREYXRhVXBkYXRlZChyZXMuYXBpS2V5LCByZXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGEudmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IHRoaXMuY2hlY2tSb3dWaXNpYmlsaXR5KHRoaXMucm93RGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YS52aXNpYmxlID0gdGhpcy5yb3dEYXRhLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Mb2FkJyk7XHJcbiAgICAgICAgLy8gc2V0IHN0ZXAgaWRcclxuICAgICAgICB0aGlzLmFwcERhdGEuc3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcblxyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgICAgICdzZWFyY2hGaWx0ZXJFbWl0dGVyXycgKyB1bmlxdWVfaWRcclxuICAgICAgICBdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5zZWFyY2hGaWx0ZXJFbWl0dGVyLnN1YnNjcmliZShkYXRhID0+IHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbJ3VuaXF1ZUlkcyddICYmIGRhdGFbJ3VuaXF1ZUlkcyddLmluY2x1ZGVzKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJUeHQgPSBkYXRhWyd2YWx1ZXMnXVswXSA/IGRhdGFbJ3ZhbHVlcyddWzBdIDogJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwuc2V0RmlsdGVyS2V5cyh0aGlzLnNlYXJjaERhdGEsIGRhdGFbJ2ZpbHRlckNvbCddKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGFwaSBldmVudCBzdWNjZXNzIGVtaXR0ZXJcclxuICAgICAgICBpZiAoZnJvbVN0b3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGlzdERhdGEoZnJvbVN0b3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2hvd25EYXRhKCkge1xyXG4gICAgICAgIHRoaXMucm93RGF0YVNob3duID0gdGhpcy5kaXNwbGF5VmFsdWVzTGF6eS5zbGljZShcclxuICAgICAgICAgICAgdGhpcy5pUm93RGF0YSxcclxuICAgICAgICAgICAgdGhpcy5pUm93RGF0YSArIHRoaXMuaXRlbVBlclBhZ2VcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMucm93RGF0YVNob3duKTtcclxuICAgIH1cclxuXHJcbiAgICBwcmV2aW91cygpIHtcclxuICAgICAgICBpZiAodGhpcy5pUm93RGF0YSAhPSAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaVJvd0RhdGEgPSB0aGlzLmlSb3dEYXRhIC0gMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlSb3dEYXRhID0gdGhpcy5kaXNwbGF5VmFsdWVzTGF6eS5sZW5ndGggLSB0aGlzLml0ZW1QZXJQYWdlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFNob3duRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5leHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaVJvd0RhdGEgKyAxIDw9IHRoaXMuZGlzcGxheVZhbHVlc0xhenkubGVuZ3RoIC0gdGhpcy5pdGVtUGVyUGFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlSb3dEYXRhID0gdGhpcy5pUm93RGF0YSArIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pUm93RGF0YSA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U2hvd25EYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgcmV0cmlldmVCbG9ja0ZpZWxkcygpIHtcclxuICAgICAgICAvLyByZXRyaWV2ZSBjaGlsZCBnZW5lcmljIGJsb2NrIGZpZWxkc1xyXG4gICAgICAgIGZvciAoY29uc3QgW2ksIGZpZWxkXSBvZiB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRVbmlxdWVJZHMucHVzaChmaWVsZC51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKGZpZWxkLmZpZWxkX3R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3QnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnTGlzdC1TaW5nbGUtU2VsZWN0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3QtTXVsdGktU2VsZWN0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0dlbmVyaWMgQmxvY2snOlxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRlZmF1bHRfdmFsdWUgPSBmaWVsZC5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmlsdGVyKGFwID0+IGFwLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kZWZhdWx0X3ZhbHVlLmxlbmd0aCAhPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGREYXRhID0gYXdhaXQgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUoZmllbGQuZGVmYXVsdF92YWx1ZVswXS52YWx1ZSkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGlsZF9maWVsZHMgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGNoaWxkRGF0YSkuYmxvY2tfZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoaWxkTGlzdCA9IGNoaWxkRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDaGVja2JveCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9iai5jaGVja2JveCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9iai5yYWRpbyA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaXN0Y2VsbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xpc3RDZWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDZWxsRXZlbnRDb25maWcgPSBmaWVsZC5ldmVudF9saXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzUm93Q29uZGl0aW9uRmllbGQgPSBmaWVsZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBtYXBzIHN0YXRpYyBwb3NzaWJsZSB2YWx1ZXNcclxuICAgICAqIEBwYXJhbSBwb3NzaWJsZVZhbHVlcyB0aGUgZmllbGQgcG9zc2libGUgVmFsdWVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbWFwUG9zc2libGVWYWx1ZXMocG9zc2libGVWYWx1ZXM6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBjb25zdCBsaXN0U3RhdGljRGF0YSA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGtleXMgPSBwb3NzaWJsZVZhbHVlc1swXS5zcGxpdCgnfHx8Jyk7XHJcbiAgICAgICAgZm9yIChjb25zdCBpIGluIHBvc3NpYmxlVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaSkgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICAgICAgICAgIHBvc3NpYmxlVmFsdWVzW2ldLnNwbGl0KCd8fHwnKS5mb3JFYWNoKCh2YWx1ZSwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5c1tpbmRleF1dID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGxpc3RTdGF0aWNEYXRhLnB1c2gob2JqKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbGlzdFN0YXRpY0RhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHNldHMgbGlzdCBkYXRhXHJcbiAgICAgKiBAcGFyYW0gcmVzIGFwaSByZXNwb25zZSBvciB0aGUgcmVzcG9uc2Ugb2YgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2V0TGlzdERhdGEocmVzKSB7XHJcbiAgICAgICAgLy8gUmVzZXQgY29tcGxldGlvbiBmbGFnIHdoZW4gbmV3IGRhdGEgaXMgbG9hZGVkXHJcbiAgICAgICAgdGhpcy5oYXNFbWl0dGVkQ29tcGxldGlvbiA9IGZhbHNlO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIGNoZWNrIGlmIHNlcnZlciBzaWRlIHBhZ2luYXRpb24gYW5kIHRoZW4gc3RvcmUgdGhlIGRhdGEgZm9yIHRoZSB0b3RhbE5vIE9mIFBhZ2VzXHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRvdGFsIE51bWJlciBvZiB2YWx1ZXNcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMF0sIHJlcyk7XHJcbiAgICAgICAgICAgIC8vIHNldHRpbmcgY3VycmVudCBwYWdlIG51bWJlclxyXG4gICAgICAgICAgICBjb25zdCBjdXJyUGFnZSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5c1sxXSwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSBOdW1iZXIoY3VyclBhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0IHRvdGFsIG5vIG9mIHBhZ2VzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhZ2luYXRpb25TdG9yZSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzBdLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoKHRoaXMuaXNTaW5nbGVBUElLZXkgJiYgdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5ICE9PSAnJykgfHxcclxuICAgICAgICAgICAgKCF0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIHRoaXMuc2VjdGlvbkRhdGEucmVzcG9uc2VfYXBpX2tleSAhPT0gJycpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5zZWN0aW9uRGF0YSwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RhdGFGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IHRoaXMuY2hlY2tSb3dWaXNpYmlsaXR5KHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHJlcykpIHtcclxuICAgICAgICAgICAgaWYgKHJlcyAmJiByZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub0RhdGFGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhID0gdGhpcy5jaGVja1Jvd1Zpc2liaWxpdHkocmVzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RJbnRlcm5hbEFwaURhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdEludGVybmFsQXBpRGF0YSkpO1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgPSB0aGlzLnNlcnZlclBhZ2luYXRpb24gP1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RJbnRlcm5hbEFwaURhdGFbdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5c1swXV0gOiB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgICB0aGlzLnNldFRvdGFsQ291bnRBcHBEYXRhKHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQpO1xyXG4gICAgICAgIHRoaXMub25QYWdpbmF0aW9uQ291bnRDaGFuZ2UodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uID8gMCA6IDEpO1xyXG4gICAgICAgIHRoaXMuY29tbW9uVXRpbC5zZXRGaWx0ZXJLZXlzKHRoaXMuc2VhcmNoRGF0YSwgdGhpcy5maWx0ZXJLZXlzKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrUm93VmlzaWJpbGl0eShyZXMpIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJkYXRhIG9mIHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eSh0aGlzLmhhc1Jvd0NvbmRpdGlvbkZpZWxkLCB0aGlzLmhhc1Jvd0NvbmRpdGlvbkZpZWxkLnVuaXF1ZV9pZCwgJycsIHRoaXMucmV0dXJuVW5pcXVlSWRNYXBBcGlWYWx1ZShyZGF0YSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpc2liaWxpdHlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChyZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShyZXMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldFRvdGFsQ291bnRBcHBEYXRhKHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnRvdGFsQ291bnRBcHBEYXRhID0ge1xyXG4gICAgICAgICAgICAuLi50aGlzLnRvdGFsQ291bnRBcHBEYXRhLFxyXG4gICAgICAgICAgICAuLi4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkICsgJ190b3RhbF9jb3VudCcsXHJcbiAgICAgICAgICAgICAgICBzdGVwSWQ6IHRoaXMuc3RlcElkLFxyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gdGhpcy5yZXN1bHRDb3VudEFQSUtleSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IFtdIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMucmVzdWx0Q291bnRBUElLZXkpLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VBcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXModGhpcy5yZXN1bHRDb3VudEFQSUtleSkpLFxyXG4gICAgICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5zZXRBcHBEYXRhKHRoaXMudG90YWxDb3VudEFwcERhdGEpO1xyXG4gICAgICAgIGNvbnN0IGVtaXRPYmogPSB7XHJcbiAgICAgICAgICAgIGFwaUtleTogdGhpcy5yZXN1bHRDb3VudEFQSUtleSxcclxuICAgICAgICAgICAgdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5lbWl0KGVtaXRPYmopO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GaWVsZERhdGFVcGRhdGVkKGZpZWxkSWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS5pc19kaXNwbGF5ID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5zZWN0aW9uRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAodmlzaWJsZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHZpc2libGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgcmVwZWF0YWJsZSBibG9jayBpZiByZXF1aXJlZFxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBwZXJmb3JtcyB0aGUgZmlsdGVyaW5nXHJcbiAgICAgKi9cclxuICAgIGFwcGx5RmlsdGVyKCkge1xyXG4gICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleSh7XHJcbiAgICAgICAgICAgIG5hbWU6IHRoaXMuc2VydmVyUGFnaW5hdGlvbiA/IHRoaXMuZmlsdGVyQVBJS2V5IDogdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQgKyAnIyMnICsgdGhpcy5maWx0ZXJBUElLZXksXHJcbiAgICAgICAgICAgIHZhbHVlOiB0aGlzLmZpbHRlclR4dFxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmICghdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YS5maWx0ZXIgPSB0aGlzLmZpbHRlclR4dC50cmltKCkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLml0ZW1Db3VudCA9IHRoaXMuc2VhcmNoRGF0YS5maWx0ZXJlZERhdGEubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLm9uUGFnaW5hdGlvbkNvdW50Q2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG90YWxDb3VudEFwcERhdGEodGhpcy5wYWdpbmF0aW9uLml0ZW1Db3VudCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNldFBhZ2luYXRpb25TdG9yZSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzFdLCAxKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgeyBldmVudF9saXN0IH0gPSB0aGlzLnNlY3Rpb25EYXRhO1xyXG4gICAgICAgIGlmIChldmVudF9saXN0ICYmIGV2ZW50X2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZlbnRfbGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuZXZlbnRfbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnT25GaWx0ZXJDbGljaycudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldHRpbmcgY3VycmVudCBwYWdlIHRvIDFcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCBldmVudF9saXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gdGhpcy5zZWFyY2hEYXRhLmZpbHRlcmVkRGF0YS5sZW5ndGggPyBmYWxzZSA6IHRydWVcclxuICAgIH1cclxuXHJcbiAgICBzZXRQcmltYXJ5S2V5ID0gKGRhdGEpID0+IHtcclxuICAgICAgICBpZiAoZGF0YS52YWx1ZSAmJiBkYXRhLm5hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0SW50ZXJuYWxBcGlEYXRhW2RhdGEubmFtZV0gPSBkYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFBhZ2luYXRpb24gTG9naWMgU3RhcnQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgdGhlIHBhZ2luYXRpb24gcHJldmlvdXNcclxuICAgICAqL1xyXG4gICAgcGFnaW5hdGlvblByZXZpb3VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPCAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBQYWdlIG51bWJlciBmb3IgbmV4dFxyXG4gICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvblN0b3JlKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMV0sIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblBhZ2luYXRpb25CdXR0b25DbGljaycpO1xyXG4gICAgICAgIGlmICghdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVBhZ2luYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIHRoZSBwYWdpbmF0aW9uIG5leHRcclxuICAgICAqL1xyXG4gICAgcGFnaW5hdGlvbk5leHQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA+IHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdpbmF0aW9uLnBhZ2VDb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IHBhZ2UgbnVtYmVyIGZvciBwcmV2aW91c1xyXG4gICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvblN0b3JlKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMV0sIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblBhZ2luYXRpb25CdXR0b25DbGljaycpO1xyXG4gICAgICAgIHRoaXMucGVyZm9ybVBhZ2luYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1ZhbGlkUGFnZU51bWJlcihudW0pIHtcclxuICAgICAgICByZXR1cm4gKC9eXFxkKyQvLnRlc3QobnVtKSAmJiAoMCA8IG51bSAmJiBudW0gPD0gdGhpcy5wYWdpbmF0aW9uLnBhZ2VDb3VudCkpO1xyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIHRoZSBwYWdpbmF0aW9uIHBhZ2UgbnVtYmVyXHJcbiAgICAgKi9cclxuICAgIHNldEN1cnJlbnQobnVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFBhZ2VOdW1iZXIobnVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSBudW07XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBvZiBwYWdpbmF0aW9uIHR5cGUgaXMgc2VydmVyIHRoZSBzZXQgcGFnZSBudW1iZXJcclxuICAgICAgICAgICAgdGhpcy5zZXRQYWdpbmF0aW9uU3RvcmUodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5c1sxXSwgbnVtKTtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblBhZ2luYXRpb25CdXR0b25DbGljaycpO1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1QYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHaXZlbiB0aGUgcG9zaXRpb24gaW4gdGhlIHNlcXVlbmNlIG9mIHBhZ2luYXRpb24gbGlua3MgW2ldLCBmaWd1cmUgb3V0IHdoYXQgcGFnZSBudW1iZXIgY29ycmVzcG9uZHMgdG8gdGhhdCBwb3NpdGlvbi5cclxuICAgICAqXHJcbiAgICAgKiBAcGFyYW0gaVxyXG4gICAgICogQHBhcmFtIGN1cnJlbnRQYWdlXHJcbiAgICAgKiBAcGFyYW0gcGFnaW5hdGlvblJhbmdlXHJcbiAgICAgKiBAcGFyYW0gdG90YWxQYWdlc1xyXG4gICAgICogQHJldHVybnMgJ3sqfSdcclxuICAgICAqL1xyXG4gICAgY2FsY3VsYXRlUGFnZU51bWJlcihpLCBjdXJyZW50UGFnZSwgcGFnaW5hdGlvblJhbmdlLCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgdmFyIGhhbGZXYXkgPSBNYXRoLmNlaWwocGFnaW5hdGlvblJhbmdlIC8gMik7XHJcbiAgICAgICAgaWYgKGkgPT09IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG90YWxQYWdlcztcclxuICAgICAgICB9IGVsc2UgaWYgKGkgPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChwYWdpbmF0aW9uUmFuZ2UgPCB0b3RhbFBhZ2VzKSB7XHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2VzIC0gaGFsZldheSA8IGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG90YWxQYWdlcyAtIHBhZ2luYXRpb25SYW5nZSArIGk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaGFsZldheSA8IGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY3VycmVudFBhZ2UgLSBoYWxmV2F5ICsgaTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBHZW5lcmF0ZSBhbiBhcnJheSBvZiBwYWdlIG51bWJlcnMgKG9yIHRoZSAnLi4uJyBzdHJpbmcpIHdoaWNoIGlzIHVzZWQgaW4gYW4gbmctcmVwZWF0IHRvIGdlbmVyYXRlIHRoZVxyXG4gICAgICogbGlua3MgdXNlZCBpbiBwYWdpbmF0aW9uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGN1cnJlbnRQYWdlXHJcbiAgICAgKiBAcGFyYW0gcm93c1BlclBhZ2VcclxuICAgICAqIEBwYXJhbSBwYWdpbmF0aW9uUmFuZ2VcclxuICAgICAqIEBwYXJhbSBjb2xsZWN0aW9uTGVuZ3RoXHJcbiAgICAgKiBAcmV0dXJucyAne0FycmF5fSdcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVQYWdlc0FycmF5KGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2VzLCBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcclxuICAgICAgICB2YXIgaGFsZldheSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUmFuZ2UgLyAyKTtcclxuICAgICAgICB2YXIgcG9zaXRpb247XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSBoYWxmV2F5KSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ3N0YXJ0JztcclxuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAnZW5kJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdtaWRkbGUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVsbGlwc2VzTmVlZGVkID0gcGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcztcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gdG90YWxQYWdlcyAmJiBpIDw9IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgcGFnZU51bWJlciA9IHRoaXMuY2FsY3VsYXRlUGFnZU51bWJlcihpLCBjdXJyZW50UGFnZSwgcGFnaW5hdGlvblJhbmdlLCB0b3RhbFBhZ2VzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcGVuaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gMiAmJiAocG9zaXRpb24gPT09ICdtaWRkbGUnIHx8IHBvc2l0aW9uID09PSAnZW5kJykpO1xyXG4gICAgICAgICAgICB2YXIgY2xvc2luZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IHBhZ2luYXRpb25SYW5nZSAtIDEgJiYgKHBvc2l0aW9uID09PSAnbWlkZGxlJyB8fCBwb3NpdGlvbiA9PT0gJ3N0YXJ0JykpO1xyXG4gICAgICAgICAgICBpZiAoZWxsaXBzZXNOZWVkZWQgJiYgKG9wZW5pbmdFbGxpcHNlc05lZWRlZCB8fCBjbG9zaW5nRWxsaXBzZXNOZWVkZWQpKSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKCcuLi4nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBhZ2VzLnB1c2gocGFnZU51bWJlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaSsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcGFnZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHNldHMgdGhlIHBhZ2luYXRpb24gY291bnRcclxuICAgICAqIEBwYXJhbSAwIHdvbnQgcmVzZXQgdGhlIGNvdW50IGJlY2F1c2UgaW4gc2VydmVyIHNpZGUgcGFnaW5hdGlvblxyXG4gICAgICogcGFnZSBOdW1iZXIgY29tZXMgZnJvbSB0aGUgYXBpXHJcbiAgICAgKi9cclxuICAgIG9uUGFnaW5hdGlvbkNvdW50Q2hhbmdlKGZsYWcgPSAxKSB7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnBhZ2VDb3VudCA9IE1hdGguY2VpbChcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLml0ZW1Db3VudCAvIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50XHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBSZXNldCBwb3NpdGlvblxyXG4gICAgICAgIGlmIChmbGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGVyZm9ybVBhZ2luYXRpb24oKTtcclxuICAgIH1cclxuICAgIHNob3dNb3JlKGZsYWcgPSAxKXsgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuU2hvd01vcmVIaWRlKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50ID0gdGhpcy5wYWdpbmF0aW9uPy5jdXJyZW50SXRlbUNvdW50ICsgdGhpcy5wYWdpbmF0aW9uPy5wYWdlSXRlbXNbMF1cclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpO1xyXG4gICAgICAgICAgICBpZih0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudCA+PSB0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50IClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5TaG93TW9yZUhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gICAgIFxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldFBhZ2luYXRpb25Db3VudCgpIHtcclxuICAgICAgICAvLyBzZXQgdGhlIGN1cnJlbnQgaXRlbSBjb3VudCBpZiB0aGUgcGFnaW5hdGlvbiBpcyBzZXJ2ZXJcclxuICAgICAgICB0aGlzLnNldFBhZ2luYXRpb25TdG9yZSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzJdLCB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudCk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblBhZ2luYXRpb25CdXR0b25DbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogc2V0IHRoZSB2YWx1ZXMgb2YgdGhlIHNlbGVjdGVkIGl0ZW1zIGluIGNhc2Ugb2YgTGlzdC1TaW5nbGUtU2VsZWN0XHJcbiAgICAgKi9cclxuICAgIHNob3dTZWxlY3RlZFJhZGlvVmFsdWVzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdMaXN0LVNpbmdsZS1TZWxlY3QnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3JlRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhZGlvVmFsdWUgPSB0aGlzLnN0b3JlRGF0YVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgc2V0IHRoZSBudW1iZXIgb2YgY2hlY2tlZCBpdGVtcyB3aGVuIHRoZSBsaXN0IHR5cGUgaXMgTGlzdC1NdWx0aS1TZWxlY3RcclxuICAgICAqL1xyXG4gICAgY2hlY2tDaGVja2VkVmFsdWVzKCkge1xyXG4gICAgICAgIC8vIHN0b3JlIHRoZSB2YWx1ZXMgb2YgdGhlIGNoZWNrZWRJdGVtc1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdMaXN0LU11bHRpLVNlbGVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpbmdsZVJlcyBvZiB0aGlzLmRpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuc3RvcmVEYXRhKS5pbmNsdWRlcyhzaW5nbGVSZXNbdGhpcy5wcmltYXJ5S2V5VmFsXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMucHVzaChzaW5nbGVSZXNbdGhpcy5wcmltYXJ5S2V5VmFsXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMucHVzaCh7fSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdG8gc2V0IHBhZ2luYXRpb24gYXBpIHN0b3JlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSBwYWdpbmF0aW9uIGFwaSBrZXlzXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIHZhbHVlIG9mIHRoZSBhcGkga2V5XHJcbiAgICAgKi9cclxuICAgIHNldFBhZ2luYXRpb25TdG9yZShuYW1lLCB2YWx1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgIG5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIHRoZSBwYWdpbmF0aW9uXHJcbiAgICAgKi9cclxuICAgIHBlcmZvcm1QYWdpbmF0aW9uKCkge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5zdGFydEluZGV4ID1cclxuICAgICAgICAgICAgKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSAtIDEpICogdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQ7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmVuZEluZGV4ID1cclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnN0YXJ0SW5kZXggKyB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudDtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXggPVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXggPiB0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50XHJcbiAgICAgICAgICAgICAgICA/IHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnRcclxuICAgICAgICAgICAgICAgIDogdGhpcy5wYWdpbmF0aW9uLmVuZEluZGV4O1xyXG4gICAgICAgIGxldCBzZXREaXNwbGF5VmFsdWVzID0gdHJ1ZTtcclxuICAgICAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZW5lcmF0ZVBhZ2VzQXJyYXkodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlLCB0aGlzLnBhZ2luYXRpb24ucGFnZUNvdW50LCB0aGlzLnBhZ2luYXRpb24ucGFnaW5hdGlvblJhbmdlKTtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHNldERpc3BsYXlWYWx1ZXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlcyA9IHRoaXMuc2VhcmNoRGF0YS5maWx0ZXJlZERhdGEuc2xpY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnN0YXJ0SW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmVuZEluZGV4XHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3cgUGFnaW5hdGlvbiddID09PSAnYXV0bycgJiYgdGhpcy5wYWdpbmF0aW9uLml0ZW1Db3VudCA8PSB0aGlzLnBhZ2luYXRpb24ucGFnZUl0ZW1zWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGFnaW5hdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hdXRvUGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHNldERpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWVzID0gdGhpcy5zZWFyY2hEYXRhLmZpbHRlcmVkRGF0YTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zZWN0aW9uRGF0YSk7XHJcbiAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHRoaXMuc2V0RmllbGRQcm9wZXJ0aWVzKHRoaXMuZGlzcGxheVZhbHVlcyk7IC8vIGZ1bmN0aW9uIHRoYXQgc2V0cyBzaW5nbGUgcHJvcGVydGllc1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVZhbHVlcyA9IHRoaXMuc29ydExpc3QocHJvcGVydGllcyk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcGVydGllcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWVzID0gcHJvcGVydGllcztcclxuICAgICAgICB0aGlzLmNoZWNrQ2hlY2tlZFZhbHVlcygpO1xyXG4gICAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzb3J0TGlzdChwcm9wZXJ0aWVzKSB7XHJcbiAgICAgICAgbGV0IHNvcnRPbiA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0VuYWJsZVNvcnQnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0VuYWJsZVNvcnQnXS5zcGxpdCgnfHwnKVswXS5zcGxpdCgnfCcpLnJldmVyc2UoKSA6IFtdO1xyXG4gICAgICAgIGxldCBzb3J0UHJlZmVyYW5jZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0VuYWJsZVNvcnQnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0VuYWJsZVNvcnQnXS5zcGxpdCgnfHwnKVsxXSA6IFwiYXNjXCI7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzb3J0T246IFwiLHNvcnRPbilcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvcnRQcmVmZXJhbmNlOiBcIixzb3J0UHJlZmVyYW5jZSlcclxuICAgICAgICBzb3J0T24uZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzID0gcHJvcGVydGllcy5zb3J0KChhLCBiKSA9PiAoYVtpdGVtXSA+IGJbaXRlbV0pID8gMSA6ICgoYltpdGVtXSA+IGFbaXRlbV0pID8gLTEgOiAwKSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHNvcnRQcmVmZXJhbmNlICYmIHNvcnRQcmVmZXJhbmNlLnRvTG93ZXJDYXNlKCkgPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLnJldmVyc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcm9wZXJ0aWVzOiBcIiwgcHJvcGVydGllcylcclxuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbiAgICBsYXp5TG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RMb2FkaW5nID0gdHJ1ZTtcclxuIFxyXG4gICAgICAgIHRoaXMubGF6eUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5kaXNwbGF5VmFsdWVzLmxlbmd0aCAhPT0gdGhpcy5kaXNwbGF5VmFsdWVzTGF6eS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlc0xhenkucHVzaCh0aGlzLmRpc3BsYXlWYWx1ZXNbdGhpcy5kaXNwbGF5VmFsdWVzTGF6eS5sZW5ndGhdKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93Q2Fyb3VzZWwnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93Q2Fyb3VzZWwnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDYXJvdXNlbEl0ZW1QZXJQYWdlJ10gJiYgIWlzTmFOKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Nhcm91c2VsSXRlbVBlclBhZ2UnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtUGVyUGFnZSA9IHBhcnNlSW50KHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Nhcm91c2VsSXRlbVBlclBhZ2UnXSkgPiB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5Lmxlbmd0aCA/IHRoaXMuZGlzcGxheVZhbHVlc0xhenkubGVuZ3RoIDogcGFyc2VJbnQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQ2Fyb3VzZWxJdGVtUGVyUGFnZSddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTaG93bkRhdGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NrZWxldG9uTG9hZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubGF6eUludGVydmFsKTtcclxuICAgICAgICAgICAgfS8vdGVzdFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5jZFJlZiAmJiAhKHRoaXMuY2RSZWYgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEBIb3N0TGlzdGVuZXIoXCJ3aW5kb3c6YmVmb3JldW5sb2FkXCIsIFtcIiRldmVudFwiXSkgdW5sb2FkSGFuZGxlcihldmVudDogRXZlbnQpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5sYXp5SW50ZXJ2YWwpIHtcclxuICAgIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxhenlJbnRlcnZhbCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuZGlzcGxheVZhbHVlc0xhenkgPSBbXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZXRGaWVsZFByb3BlcnRpZXMoZGlzcGxheVZhbHVlcykge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheVZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGRpc3BsYXlWYWx1ZXNbaV07XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmaWVsZHMnKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YVsnZmllbGRzJ10gPSBbXTtcclxuICAgICAgICAgICAgZGF0YVsnbGlzdF9kYXRhJ10gPSB7fTtcclxuICAgICAgICAgICAgZGF0YVsnZXhwYW5kYWJsZV9maWVsZHMnXSA9IFtdO1xyXG4gICAgICAgICAgICBkYXRhWydoYXNFeHBhbmRhYmxlRGF0YSddID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBqIG9mIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGopKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgayBvZiBmaWVsZC5jaGlsZF9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRmllbGQgPSBrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRGaWVsZFsncm93RGF0YSddID0gdGhpcy5nZW5lcmF0ZVJvd0RhdGEoY2hpbGRGaWVsZCwgZGF0YSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFsncm93RGF0YSddID0gdGhpcy5nZW5lcmF0ZVJvd0RhdGEoZmllbGQsIGRhdGEsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhWydmaWVsZHMnXS5wdXNoKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5oaWRlblJvd3MgJiYgdGhpcy5leHBhbmRhYmxlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBqIG9mIHRoaXMuZXhwYW5kYWJsZURhdGEuYmxvY2tfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGopKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snICYmIGZpZWxkLmNoaWxkX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGsgb2YgZmllbGQuY2hpbGRfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEZpZWxkID0gaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRmllbGRbJ3Jvd0RhdGEnXSA9IHRoaXMuZ2VuZXJhdGVSb3dEYXRhKGNoaWxkRmllbGQsIGRhdGEsIGksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbJ3Jvd0RhdGEnXSA9IHRoaXMuZ2VuZXJhdGVSb3dEYXRhKGZpZWxkLCBkYXRhLCBpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsnZXhwYW5kYWJsZV9maWVsZHMnXS5wdXNoKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGxheVZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQYWdpbmF0aW9uIExvZ2ljIEVuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIG1lc3NhZ2Ugb2JqZWN0IGZyb20gdGhlIG1lc3NhZ2UgY29kZVxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2VDb2RlIHRoZSBtZXNzYWdlIGNvZGUgYXMgY29uZmlndXJlZCBpbiB2YWxpZGF0aW9uX21lc3NhZ2VzIG1lc3NhZ2VfY29kZVxyXG4gICAgICovXHJcbiAgICByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlQ29kZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlQ29kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YU1hcCA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWVzc2FnZXNEYXRhTWFwW21lc3NhZ2VDb2RlXTtcclxuICAgICAgICAgICAgcmV0dXJuIChtZXNzYWdlRGF0YU1hcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzaG93cyBhbiBlcnJvciBtZXNzYWdlIG9uIHRoZSBiYXNpcyBvZiB0aGUgY29uZmlndXJlZCB2YWxpZGF0aW9uX21lc3NhZ2VzXHJcbiAgICAgKi9cclxuICAgIHNob3dFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgdGhpcy5zZWN0aW9uRGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnTWFuZGF0b3J5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZS5kaXNwbGF5X3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnTU9EQUwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3BlbiBtb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UubWVzc2FnZV9jb2RlKS5tZXNzYWdlX3RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0lOTElORSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2godGhpcy5yZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLm1lc3NhZ2VfY29kZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JPbk5leHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BPUFVQJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wZW4gc25hY2tiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIuZGlzbWlzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIodGhpcy5yZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLm1lc3NhZ2VfY29kZSkubWVzc2FnZV90ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBvcGVucyBhIG1hdGVyaWFsIGRpYWxvZyBiYXJcclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBtZXNzYWdlIHRoYXQgaXMgY29uZmlndXJlIGluIHRoZSBDRUUgTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBvcGVuRGlhbG9nKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgb3BlbnMgYSBtYXRlcmlhbCBzbmFjayBiYXJcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRoYXQgaXMgY29uZmlndXJlIGluIHRoZSBDRUUgTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBvcGVuU25hY2tCYXIobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCAnT0snLCB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICBwYW5lbENsYXNzOiBbJ21hdC10b29sYmFyJywgJ21hdC1wcmltYXJ5J11cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGVyZSBpcyBhIGV2ZW50KEhUTUwgZXZlbnQpIHRyaWdnZXJlZFxyXG4gICAgICogaW4gdGhlIGNhc2Ugb2YgTGlzdC1TaW5nbGUtU2VsZWN0IG9yIExpc3QtTXVsdGktU2VsZWN0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGUgY3VycmVudCBkYXRhIG9mIHRoZSByb3dcclxuICAgICAqIEBwYXJhbSBpc0NoZWNrZWQgaWYgdGhlIHZhbHVlIGlzIGNoZWNrZWQgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgcG9zaXRpb24gb2YgdGhlIHNlbGVjdGVkIHJvd1xyXG4gICAgICovXHJcbiAgICBsaXN0X2NoYW5nZShkYXRhOiBhbnksIGlzQ2hlY2tlZDogYm9vbGVhbiwgY29udGV4dD86IGFueSwgaW50ZXJuYWw/OiBib29sZWFuKSB7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBkYXRhW3RoaXMucHJpbWFyeUtleVZhbF07XHJcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnTGlzdC1TaW5nbGUtU2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc3RvcmVEYXRhLmluY2x1ZGVzKHZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEgPSB0aGlzLnN0b3JlRGF0YS5jb25jYXQoW3ZhbHVlXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yZURhdGEubGVuZ3RoID4gMCAmJiB0aGlzLnN0b3JlRGF0YS5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVEYXRhID0gWy4uLnRoaXMuc3RvcmVEYXRhXTsgLy8gY2xvbmluZyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEuc3BsaWNlKHRoaXMuc3RvcmVEYXRhLmluZGV4T2YodmFsdWUpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaXBzRGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIChpc0NoZWNrZWQpID9cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNBcnJheS5wdXNoKHsga2V5TmFtZTogZGF0YVt0aGlzLmNoaXBzQXBpS2V5VG9EaXNwbGF5XSwga2V5UG9zOiBjb250ZXh0IH0pIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNBcnJheSA9IHRoaXMuY2hpcHNBcnJheS5maWx0ZXIoZSA9PiBlLmtleU5hbWUgIT09IGRhdGFbdGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3JlUHJpbWFyeUtleSgnT05fQ0xJQ0snLCBpc0NoZWNrZWQpO1xyXG4gICAgICAgIGlmICghaW50ZXJuYWwpIHtcclxuICAgICAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIF90aGlzLm9uQ29tcG9uZW50RXZlbnQoJ29uY2xpY2snKTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzdG9yZXMgdGhlIHZhbHVlIG9mIHRoZSBsaXN0IHNpbmdsZSBzZWxlY3QgYW5kIGxpc3QgbXVsdGkgc2VsZWN0IG9yIHNldCB0aGUgdmFsdWUgb24gbG9hZCBvZiBhIGxpc3RcclxuICAgICAqIEBwYXJhbSB0eXBlIHR5cGUgY2FuIGJlIG9ubHkgT05fTE9BRCBzbyB0aGF0IHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHNldCBpblxyXG4gICAgICogdGhlIGxpc3Qgb24gdGhlIGxvYWQgb2YgdGhlIHBhZ2UgaXMgdGhlIHVzZXIgaGFzIGFscmVhZHkgc2VsZWN0ZWQgdGhhdFxyXG4gICAgICovXHJcbiAgICBzdG9yZVByaW1hcnlLZXkodHlwZT8sIGNoZWNrZWQ/OiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBhZGRpdGlvbmFsUGFyYW0gb2YgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxQYXJhbS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ1ByaW1hcnlLZXlOYW1lJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpbWFyeUtleVZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNkYXRhIG9mIHRoaXMuc3RvcmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUtleVZhbHVlLnB1c2goc2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5nZXRQcmltYXJ5S2V5KGFkZGl0aW9uYWxQYXJhbS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpVXJsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuZ2V0UHJpbWFyeUtleShhZGRpdGlvbmFsUGFyYW0udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnTGlzdC1TaW5nbGUtU2VsZWN0JyA/IChwcmltYXJ5S2V5VmFsdWVbMF0gPyBwcmltYXJ5S2V5VmFsdWVbMF0gOiAnJykgOiBwcmltYXJ5S2V5VmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgYXBwIGRhdGEgb25seSBpZiBpdCBpcyBjb25maWd1cmVkIGFzIGEgZmllbGRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTWFuZGF0b3J5ID0gdGhpcy5zZWN0aW9uRGF0YS5pc19tYW5kYXRvcnkgPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFwcERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcElkOiB0aGlzLnN0ZXBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5IDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTGFiZWw6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZUxhYmVscycpID09PSAndHJ1ZScgPyB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkX2xhYmVsIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVxdWVzdF9hcGlfa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVzcG9uc2VfYXBpX2tleSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IHRoaXMuaXNNYW5kYXRvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0aGlzLnNlY3Rpb25EYXRhLmlzX2VkaXRhYmxlID09PSAxID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDEgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnTGlzdC1TaW5nbGUtU2VsZWN0JyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdG9yZURhdGFbMF0gPyB0aGlzLnN0b3JlRGF0YVswXSA6ICcnKSA6IFsuLi5uZXcgU2V0KHRoaXMuc3RvcmVEYXRhKV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBhcHBEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdPTl9MT0FEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5zdG9yZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSA9IGRhdGEgPyBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hcHBEYXRhLCAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0b3JlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTZXRQcmltYXJ5VmFsdWUnXSA9PT0gJ0FsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA9PT0gdGhpcy5kaXNwbGF5VmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoYXBwRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hcHBEYXRhLCAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKGFwcERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5hZGRBcHBEYXRhKGFwcERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSBwcmltYXJ5IGtleSBmcm9tIHRoZSBhZGRpdGlvbmFsIHBhcmFtZXRlciBQcmltYXJ5S2V5TmFtZVxyXG4gICAgICogQHBhcmFtIGtleSB0aGUgdmFsdWUgb2YgYWRkaXRpb25hbCBwYXJhbWV0ZXIgUHJpbWFyeUtleU5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0UHJpbWFyeUtleShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBrZXkuc3BsaXQoJ3wnKTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhWzBdLnRyaW0oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIG1haW4gYXBpIGtleSBmcm9tIHRoZSBnaXZlbiBhcGkga2V5XHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdGhhdCBpcyBwcm92aWRlZCBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlclxyXG4gICAgICovXHJcbiAgICBnZXRWYWx1ZUZyb21LZXkoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGtleS5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbMV0uc3BsaXQoJ1sqXS4nKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsxXS5zcGxpdCgnWypdLicpWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBkaXNwbGF5cyBjaGlwcyBpZiB0aGUgYWRkaXRpb25hbCBwYXJhbWV0ZXIgaXMgc2V0IHRvIGNoZWNrYm94IGNoaXBzXHJcbiAgICAgKi9cclxuICAgIGNoZWNrYm94Q2hpcHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ0NoZWNrYm94IENoaXBzJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheSA9IHBhcmFtZXRlci52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgY2hpcHMgZnJvbSB0aGUgdG9wIG9mIHRoZSBsaXN0IHdoZW4gc29tZSBvZiB0aGUgaXRlbXMgYXJlIHVuY2hlY2tlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVDaGlwcyA9IChjaGlwRGF0YSkgPT4ge1xyXG4gICAgICAgIC8vIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tfJyArIGNoaXBEYXRhLmtleVBvcykgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hpcHNBcnJheS5zcGxpY2UodGhpcy5jaGlwc0FycmF5LmluZGV4T2YoY2hpcERhdGEpLCAxKTtcclxuICAgICAgICBpZiAodGhpcy5jaGlwc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaXBzRGlzcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIHJvdyBkYXRhIG9uIHRoZSBiYXNpcyBvZiB0aGUgdHlwZSBvZiB0aGUgbGlzdCBhbmQgdGhlIGVkaXRhYmxlIGFuZCB2aXNpYmxlIGNvbmRpdGlvbnNcclxuICAgICAqIEBwYXJhbSBmaWVsZCB0aGUgY2VlIGZpZWxkIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGFwaSByZXNwb25zZSBkYXRhIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVJvd0RhdGEoZmllbGQsIGRhdGEsIGxpc3RfcG9zLCBleHBhbmRhYmxlID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgYXBpRGF0YSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoZmllbGQsIGRhdGEpO1xyXG4gICAgICAgIGV4cGFuZGFibGUgJiYgYXBpRGF0YSAmJiAoZGF0YVsnaGFzRXhwYW5kYWJsZURhdGEnXSA9IHRydWUpO1xyXG4gICAgICAgIGxldCBsYWJlbFR5cGUgPSAnJztcclxuICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ2xhYmVsJykge1xyXG4gICAgICAgICAgICBsYWJlbFR5cGUgPSAodGhpcy5pc1NpbmdsZUFQSUtleSA/IGZpZWxkLmFwaV9rZXkgOiBmaWVsZC5yZXNwb25zZV9hcGlfa2V5KSA/ICcnIDogJ1NUQVRJQyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnTGluaycpIHtcclxuICAgICAgICAgICAgYXBpRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvYmo7XHJcbiAgICAgICAgbGV0IGlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKGZpZWxkLmlzX2VkaXRhYmxlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlzRWRpdGFibGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGZpZWxkLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcmVzRGF0YSA9IHt9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGRhdGFba2V5XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIHJlc0RhdGFba2V5XSA9IGRhdGFba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQgJiYgKGZpZWxkLmlzX2Rpc3BsYXkgPT09IDIgfHwgZmllbGQuaXNfZWRpdGFibGUgPT09IDIpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVpQXBpVmFsdWUgPSB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogZmllbGQudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgaHRtbF9pZDogdGhpcy5odG1sX2lkICsgJy0nICsgZmllbGQudW5pcXVlX2lkICsgJy0nICsgbGlzdF9wb3MsXHJcbiAgICAgICAgICAgICAgICBmcm9tRmllbGQ6ICdMaXN0JyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZpZWxkLmlzX2Rpc3BsYXkgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uZGl0aW9uYWxWaXNpYmxlKHVpQXBpVmFsdWUsIGlzVmlzaWJsZSwgZmllbGQpIDogaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IGZpZWxkLmlzX2VkaXRhYmxlID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbmRpdGlvbmFsRWRpdGFibGUodWlBcGlWYWx1ZSwgaXNFZGl0YWJsZSwgZmllbGQpIDogaXNFZGl0YWJsZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoZmllbGQgJiYgZmllbGQuZmllbGRfdHlwZSAmJiAoKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcgJiYgZmllbGQuZmllbGRfbGFiZWwgJiYgZmllbGQuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiBmaWVsZC5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpKSkgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUoZmllbGQsIGRhdGEpLmZpZWxkX2xhYmVsIDpcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFR5cGUgPT09ICdTVEFUSUMnID8gZmllbGQuZmllbGRfbGFiZWwgOiBhcGlEYXRhLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IGZpZWxkLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgIGh0bWxfaWQ6IHRoaXMuaHRtbF9pZCArICctJyArIGZpZWxkLnVuaXF1ZV9pZCArICctJyArIGxpc3RfcG9zLFxyXG4gICAgICAgICAgICAgICAgZnJvbUZpZWxkOiAnTGlzdCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBpc1Zpc2libGUsXHJcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogaXNFZGl0YWJsZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoZmllbGQgJiYgZmllbGQuZmllbGRfdHlwZSAmJiAoKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcgJiYgZmllbGQuZmllbGRfbGFiZWwgJiYgZmllbGQuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgKGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiBmaWVsZC5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpKSkgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUoZmllbGQsIGRhdGEpLmZpZWxkX2xhYmVsIDpcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbFR5cGUgPT09ICdTVEFUSUMnID8gZmllbGQuZmllbGRfbGFiZWwgOiBhcGlEYXRhLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zZWxlY3RlZE9iai5jaGVja2JveCAmJiB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkc1t0aGlzLnNlbGVjdGVkT2JqLmNoZWNrYm94XS51bmlxdWVfaWQgPT09IGZpZWxkLnVuaXF1ZV9pZCkge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RfY2hhbmdlKGRhdGEsIChvYmoudmFsdWUgPT09ICd0cnVlJyB8fCBvYmoudmFsdWUgPT09ICcxJyksIGxpc3RfcG9zLCB0cnVlKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSB2aXNpYmxlIGNvbmRpdGlvblxyXG4gICAgICogQHBhcmFtIGRhdGEgYXBpIHJlc3BvbnNlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHByZXNlbnRWYWx1ZSBwcmVzZW50IHZhbHVlIG9mIHRoZSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGZpZWxkIHRoZSBmaWVsZCBwcm9wZXJ0eSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2V0Q29uZGl0aW9uYWxWaXNpYmxlKGRhdGEsIHByZXNlbnRWYWx1ZSwgZmllbGQpIHtcclxuICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KGZpZWxkLCBmaWVsZC51bmlxdWVfaWQsICcnLCBkYXRhKTtcclxuICAgICAgICBpZiAodmlzaWJpbGl0eUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlzaWJpbGl0eUNvbmRpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByZXNlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiB0aGUgZWRpdGFibGUgY29uZGl0aW9uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBhcGkgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gcHJlc2VudFZhbHVlIHByZXNlbnQgdmFsdWUgb2YgdGhlIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgdGhlIGZpZWxkIHByb3BlcnR5IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRDb25kaXRpb25hbEVkaXRhYmxlKGRhdGEsIHByZXNlbnRWYWx1ZSwgZmllbGQpIHtcclxuICAgICAgICBjb25zdCBlZGl0YWJsZUNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrRWRpdGFibGUoZmllbGQsIGZpZWxkLnVuaXF1ZV9pZCwgJycsIGRhdGEpO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZWRpdGFibGVDb25kaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmVzZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVE9ETzogRGVsZXRlIHRoaXMgZnVuY3Rpb24gb25jZSB0aGUgY29uZGl0aW9uYWwgc3RhdGVtZW50cyBkZXBlbmQgb24gdGhlIGFwaSBrZXkgdGhlbiBvbmx5IHJldHVybiB0aGUgc2luZ2xlIGFwaSByZXNwb25zZSBvYmpcclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyB0aGUgbWFwcGluZyBvZiB1bmlxdWUgaWQgdG8gdGhlIGFwaSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGFwaVJlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgaS5lLiB0aGUgc2luZ2xlIGluZGV4IG9mIHRoZSBhcnJheVxyXG4gICAgICovXHJcbiAgICByZXR1cm5VbmlxdWVJZE1hcEFwaVZhbHVlKGFwaVJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5maWVsZElkTWFwQXBpS2V5KSkge1xyXG4gICAgICAgICAgICBjb25zdCB1bmlxdWVJZCA9IHRoaXMuZmllbGRJZE1hcEFwaUtleVtrZXldO1xyXG4gICAgICAgICAgICBvYmpbdW5pcXVlSWRdID0gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShrZXksIGFwaVJlc3BvbnNlKSA/IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoa2V5LCBhcGlSZXNwb25zZSkgOiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG1hcCBiZXR3ZWVuIGZpZWxkSWQgYW5kIGFwaSBrZXlcclxuICAgICAqL1xyXG4gICAgcmV0dXJuRmllbGRJZE1hcEFwaUtleSgpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzKSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnR2VuZXJpYyBCbG9jaycgJiYgZmllbGQuY2hpbGRfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkX2ZpZWxkIG9mIGZpZWxkLmNoaWxkX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleVZhbHVlKG9iaiwgY2hpbGRfZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5GaWVsZElkTWFwQXBpS2V5VmFsdWUob2JqLCBmaWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaGlkZW5Sb3dzKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5leHBhbmRhYmxlRGF0YS5ibG9ja19maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnR2VuZXJpYyBCbG9jaycgJiYgZmllbGQuY2hpbGRfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZF9maWVsZCBvZiBmaWVsZC5jaGlsZF9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5GaWVsZElkTWFwQXBpS2V5VmFsdWUob2JqLCBjaGlsZF9maWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHVybkZpZWxkSWRNYXBBcGlLZXlWYWx1ZShvYmosIGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpZWxkSWRNYXBBcGlLZXkgPSBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5uZXIgZnVuY3Rpb24gb2YgcmV0dXJuRmllbGRJZE1hcEFwaUtleVxyXG4gICAgcHJpdmF0ZSByZXR1cm5GaWVsZElkTWFwQXBpS2V5VmFsdWUob2JqLCBmaWVsZCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIGZpZWxkLmFwaV9rZXkpIHtcclxuICAgICAgICAgICAgb2JqW2ZpZWxkLmFwaV9rZXldID0gZmllbGQudW5pcXVlX2lkOyAvLyBUT0RPOiBTdXBwb3J0IG11bHRpcGxlIGFwaSBrZXlzXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5yZXNwb25zZV9hcGlfa2V5LmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhmaWVsZC5yZXNwb25zZV9hcGlfa2V5KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGZpZWxkLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSA9IGZpZWxkLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRyaWdnZXIgZXZlbnQgaWYgdGhlcmUgaGFzIGJlZW4gYW4gZXZlbnQgdHJpZ2dlcmVkIG9uIHRoZSBsaXN0XHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgICAqL1xyXG4gICAgb25Db21wb25lbnRFdmVudChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICAvLyBub3QgYSBsaXN0IHRoYXQgaXMgZGVjbGFyZWQgYXMgYSBzZWN0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEgJiYgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEgJiYgdGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0ICYmIHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUgJiYgZXZlbnQuZXZlbnRfbmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoZXZlbnQsIHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldHRlciBzZXR0ZXIgZ29lcyBoZXJlXHJcbiAgICBnZXQgaXNTaW5nbGVBUElLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaW5nbGVBcGlLZXknKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdG8gdHJpZ2dlciBhbiBldmVudCBmb3IgY2xpY2tpbmcgb24gdGhlIGxpc3QgY2VsbFxyXG4gICAgICogQHBhcmFtIGRhdGEgc2luZ2xlIGNlbGwgZGF0YVxyXG4gICAgICovXHJcbiAgICBsaXN0Q2VsbENsaWNrKGRhdGE6IGFueSwgcG9zOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdGVkUm93SW5kZXggPSBwb3M7XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RIYW5kbGVyLmdldExpc3RDZWxsRGF0YShkYXRhLmZpZWxkcyk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnByaW1hcnlLZXlWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucHJpbWFyeUtleVZhbCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhW3RoaXMucHJpbWFyeUtleVZhbF1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3RDZWxsRXZlbnRDb25maWcpKSkge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ29uY2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TGlzdEhhbmRsZXIuc3dpdGNoRXZlbnREaXNwbGF5VHlwZShldmVudCwgdGhpcy5saXN0Q2VsbEV2ZW50Q29uZmlnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXQgZ2V0UmFuZ2VMYWJlbCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBTdHJpbmcodGhpcy5wYWdpbmF0aW9uU2hvd2luZ1Jlc3VsdEhpbnQpLnJlcGxhY2UoJyV2YWx1ZSUnLCB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgKyBcIiAvIFwiICsgdGhpcy5wYWdpbmF0aW9uLnBhZ2VDb3VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1bnN1YnNjcmliZSBhbGwgdGhlIHN1YnNjcmlwdGlvbnMgb24gbmdEZXN0cm95XHJcbiAgICAgKi9cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIGlmICh0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgIC8vICAgICAnZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZV8nICtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkID8gdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQgOiB0aGlzLnNlY3Rpb25EYXRhLnNlY3Rpb25faWRdKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgLy8gICAgICAgICAnZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZV8nICtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA/IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkIDogdGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uX2lkXS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBpZiAodGhpcy52YXJpYWJsZU9ialsnc2hvd01hbmRhdG9yeUVycm9yTXNnXycgKyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF0pIHtcclxuICAgICAgICAvLyAgICAgdGhpcy52YXJpYWJsZU9ialsnc2hvd01hbmRhdG9yeUVycm9yTXNnXycgKyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52YXJpYWJsZU9iaikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9ialtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5ID0gW107XHJcbiAgICB9XHJcbiAgICBvbk1hdGVyaWFsUGFnZUNoYW5nZShldmVudDogUGFnZUV2ZW50KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgbmV3UGFnZSA9IGV2ZW50LnBhZ2VJbmRleCArIDE7XHJcbiAgICAgICAgY29uc3QgbmV3U2l6ZSA9IGV2ZW50LnBhZ2VTaXplO1xyXG5cclxuICAgICAgICBjb25zdCBwYWdlU2l6ZUNoYW5nZWQgPSBuZXdTaXplICE9PSB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudDtcclxuXHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQgPSBuZXdTaXplO1xyXG5cclxuICAgICAgICBpZiAocGFnZVNpemVDaGFuZ2VkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvbkNvdW50KCk7IC8vIEFscmVhZHkgaW4geW91ciBzZWxlY3QgY2hhbmdlXHJcbiAgICAgICAgICAgIHRoaXMub25QYWdpbmF0aW9uQ291bnRDaGFuZ2UoKTsgLy8gQWxyZWFkeSB1c2VkXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNldEN1cnJlbnQobmV3UGFnZSk7IC8vIENvcmUgcGFnaW5hdGlvbiBsb2dpY1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBpc0hUTUwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gLyg8KFtePl0rKT4pL2lnO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxufSIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuXHQ8ZGl2ICpuZ0lmPVwic2hvd0ZpbHRlclwiIGNsYXNzPVwiZmlsdGVyLWNvbnRhaW5lclwiPlxyXG5cdFx0PG1hdC1mb3JtLWZpZWxkIGZsb2F0TGFiZWw9XCJuZXZlclwiPlxyXG5cdFx0XHQ8aW5wdXQgWyhuZ01vZGVsKV09XCJmaWx0ZXJUeHRcIiBmaWx0ZXJUeHQgbWF0SW5wdXQgKGtleXVwKT1cImFwcGx5RmlsdGVyKClcIlxyXG5cdFx0XHRcdHBsYWNlaG9sZGVyPVwie3tmaWx0ZXJQbGFjZWhvbGRlclRleHR9fVwiPlxyXG5cdFx0PC9tYXQtZm9ybS1maWVsZD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwic2hvd0Vycm9yT25OZXh0XCI+XHJcblx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogbWVzc2FnZS5jb2xvcn1cIj5cclxuXHRcdFx0XHR7e21lc3NhZ2UubWVzc2FnZV90ZXh0fX1cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy1jb250YWluZXI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFub0RhdGFGb3VuZFwiPlxyXG5cdFx0PGRpdiAqbmdJZj1cImNoaXBzRGlzcGxheVwiIGNsYXNzPVwiY2hpcGxheW91dFwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjaGlwQXJyYXkgb2YgY2hpcHNBcnJheVwiIGNsYXNzPVwiY2hpcHNwYWNlXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjaGlwY3NzXCI+XHJcblx0XHRcdFx0XHR7eyBjaGlwQXJyYXkua2V5TmFtZSB9fSA8c3BhbiBjbGFzcz1cImNoaXBkZWxldGVjc3NcIiAoY2xpY2spPVwiZGVsZXRlQ2hpcHMoY2hpcEFycmF5KVwiPng8L3NwYW4+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImxpc3QtbG9hZGVyIHt7bGlzdExvYWRpbmcgPyAnbGlzdC1wZW5kaW5nJzonbGlzdC1sb2FkZWQnfX1cIj48L2Rpdj5cclxuXHRcdDxuZy1jb250YWluZXJcclxuXHRcdFx0Km5nSWY9XCJhZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd0Nhcm91c2VsJ10gJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dDYXJvdXNlbCddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtb3ZlLWN0cmwgcHJldmlvdXNcIiB0aXRsZT1cIlByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZpb3VzKClcIj4mbHQ7PC9kaXY+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRhdGEgb2Ygcm93RGF0YVNob3duOyBpbmRleCBhcyBwb3NcIiBjbGFzcz1cImxpc3QtY29uYXRpYW5lciBkYXRhLXJvd1wiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09ICdMaXN0LU11bHRpLVNlbGVjdCdcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWNoZWNrYm94LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgW2F0dHIuYXJpYS1sYWJlbF09XCInT3JkZXIgJysgcG9zIFwiIHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdFx0W25hbWVdPVwic2VsZWN0ZWRPYmouY2hlY2tib3ggPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5jaGVja2JveF1bJ3VuaXF1ZV9pZCddICsnXycgKyBwb3MgOiAnY2hlY2tfJyArIHBvc1wiXHJcblx0XHRcdFx0XHRcdFx0W2lkXT1cInNlbGVjdGVkT2JqLmNoZWNrYm94ID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWyd1bmlxdWVfaWQnXSArJ18nICsgcG9zIDogJ2NoZWNrXycgKyBwb3NcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwibGlzdC1jaGVja2JveFwiIChjaGFuZ2UpPVwibGlzdF9jaGFuZ2UoZGF0YSwgJGV2ZW50LnRhcmdldC5jaGVja2VkLCBwb3MpXCJcclxuXHRcdFx0XHRcdFx0XHRbY2hlY2tlZF09XCJzZWxlY3RlZE9iai5jaGVja2JveCA/IGRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLmNoZWNrYm94XVsncm93RGF0YSddWyd2YWx1ZSddID09ICcxJyA6IGRhdGFbcHJpbWFyeUtleVZhbF0gPT0gY2hlY2tlZEl0ZW1zW3Bvc11cIlxyXG5cdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJzZWxlY3RlZE9iai5jaGVja2JveCA/ICFkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5jaGVja2JveF1bJ3Jvd0RhdGEnXVsnZWRpdGFibGUnXSA6IGZhbHNlXCIgLz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWxpc3QtY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdGZvcj1cInt7c2VsZWN0ZWRPYmouY2hlY2tib3ggPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5jaGVja2JveF1bJ3VuaXF1ZV9pZCddICsnXycgKyBwb3MgOiAnY2hlY2tfJyArIHBvc319XCI+e3tzZWxlY3RlZE9iai5jaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdD8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWydmaWVsZF9sYWJlbCddIDogJyd9fTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnTGlzdC1TaW5nbGUtU2VsZWN0J1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxpc3QtcmFkaW8tY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCBbYXR0ci5hcmlhLWxhYmVsXT1cIidPcmRlciAnKyBwb3MgXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRbaWRdPVwic2VsZWN0ZWRPYmoucmFkaW8gPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5yYWRpb11bJ3VuaXF1ZV9pZCddKydfJyArIHBvcyA6ICdyYWRpbycgKyAnXycgK3Bvc1wiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LXJhZGlvXCIgWyhuZ01vZGVsKV09XCJyYWRpb1ZhbHVlXCJcclxuXHRcdFx0XHRcdFx0XHRbdmFsdWVdPVwic2VsZWN0ZWRPYmoucmFkaW8gPyBwb3M6IGRhdGFbcHJpbWFyeUtleVZhbF1cIlxyXG5cdFx0XHRcdFx0XHRcdChjaGFuZ2UpPVwibGlzdF9jaGFuZ2UoZGF0YSwgJGV2ZW50LnRhcmdldC5jaGVja2VkKVwiXHJcblx0XHRcdFx0XHRcdFx0W2Rpc2FibGVkXT1cInNlbGVjdGVkT2JqLnJhZGlvID8gIWRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLnJhZGlvXVsncm93RGF0YSddWydlZGl0YWJsZSddIDogZmFsc2VcIiAvPlxyXG5cdFx0XHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjdXN0b20tbGlzdC1yYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0Zm9yPVwie3tzZWxlY3RlZE9iai5yYWRpbyA/IGRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLnJhZGlvXVsndW5pcXVlX2lkJ10rJ18nICsgcG9zIDogJ3JhZGlvJyArICdfJyArcG9zfX1cIj57e3NlbGVjdGVkT2JqLnJhZGlvXHJcblx0XHRcdFx0XHRcdFx0PyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5yYWRpb11bJ2ZpZWxkX2xhYmVsJ10gOiAnJ319PC9sYWJlbD5cclxuXHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDxkaXYgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiXHJcblx0XHRcdFx0XHRjbGFzcz1cImNhcm91c2VsLWl0ZW0gbGlzdC1pdGVtIGxpc3QtaXRlbS1wb3Mte3twb3N9fSB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319IHt7bGlzdExvYWRpbmcgPyAnbGlzdC1wZW5kaW5nJzonbGlzdC1sb2FkZWQnfX0ge3tzZWxlY3RlZFJvd0luZGV4ID09PSBwb3MgPyAnbGlzdC1pdGVtLXNlbGVjdGVkJyA6ICcnfX0ge3t0eXBlID09ICdMaXN0LU11bHRpLVNlbGVjdCcgPyAoc3RvcmVEYXRhLmluY2x1ZGVzKGRhdGFbcHJpbWFyeUtleVZhbF0pPyAnbGlzdC1pdGVtLWNoZWNrZWQnIDogJ2xpc3QtaXRlbS11bmNoZWNrZWQnKSA6ICcnfX0gZGF0YS1saXN0IHNob3ctaW4tcm93XCJcclxuXHRcdFx0XHRcdChjbGljayk9XCJsaXN0Q2VsbENsaWNrKGRhdGEsIHBvcylcIiAoa2V5dXAuZW50ZXIpPVwibGlzdENlbGxDbGljayhkYXRhLCBwb3MpXCI+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkYXRhLmZpZWxkczsgaW5kZXggYXMgcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJzsgZWxzZSBlbHNlRmllbGRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2VuZXJpYy1ibG9jay1jb250YWluZXIge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nRm9yPVwibGV0IGNoaWxkX2ZpZWxkIG9mIGZpZWxkLmNoaWxkX2ZpZWxkczsgaW5kZXggYXMgY2hpbGRfcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmNoaWxkX2ZpZWxkLGRhdGE6ZGF0YSxwb3M6cG9zLHBvc2l0aW9uOidjaGlsZF8nK2NoaWxkX3Bvc2l0aW9ufVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgI2Vsc2VGaWVsZD5cclxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcclxuXHRcdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmZpZWxkLGRhdGE6ZGF0YSxwb3M6cG9zLHBvc2l0aW9uOnBvc2l0aW9ufVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ0xpc3QtRXhwYW5kYWJsZScgJiYgaGlkZW5Sb3dzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImNlZS1saXN0LWV4cGFuZGFibGUtb3B0aW9uIHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tkYXRhWydoYXNFeHBhbmRhYmxlRGF0YSddPydoYXMtZXhwYW5kYWJsZS1kYXRhJzonbm8tZXhwYW5kYWJsZS1kYXRhJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cIiFpc0hUTUwoY29sbGFwc2VUaXRsZSkgJiYgIWlzSFRNTChleHBhbmRUaXRsZSlcIiByb2xlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGRhdGEgPyBudWxsIDogZGF0YVwiPnt7ZXhwYW5kZWRFbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0XHQ9PT0gZGF0YSA/IGNvbGxhcHNlVGl0bGUgOiBleHBhbmRUaXRsZX19PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGVkRWxlbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0PT09IGRhdGEgJiYgaXNIVE1MKGNvbGxhcHNlVGl0bGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGRhdGEgPyBudWxsIDogZGF0YVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFtpbm5lckhUTUxdPVwiY29sbGFwc2VUaXRsZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJleHBhbmRlZEVsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdCE9PSBkYXRhICYmIGlzSFRNTChleHBhbmRUaXRsZSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgKGNsaWNrKT1cImV4cGFuZGVkRWxlbWVudCA9IGV4cGFuZGVkRWxlbWVudCA9PT0gZGF0YSA/IG51bGwgOiBkYXRhXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0W2lubmVySFRNTF09XCJleHBhbmRUaXRsZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiY2VlLWxpc3QtZGV0YWlsIHt7aXNfYm9vdHN0cmFwPydjb2wtMTInOicnfX0ge3tleHBhbmRlZEVsZW1lbnQgPT09IGRhdGE/J2NlZS1leHBhbmRlZC1yb3cnOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwie3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZGF0YS5leHBhbmRhYmxlX2ZpZWxkczsgaW5kZXggYXMgcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJzsgZWxzZSBlbHNlRmllbGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2VuZXJpYy1ibG9jay1jb250YWluZXIge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nRm9yPVwibGV0IGNoaWxkX2ZpZWxkIG9mIGZpZWxkLmNoaWxkX2ZpZWxkczsgaW5kZXggYXMgY2hpbGRfcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmNoaWxkX2ZpZWxkLCBkYXRhOmRhdGEsIHBvczpwb3MsIHBvc2l0aW9uOidjaGlsZF8nK2NoaWxkX3Bvc2l0aW9uLCBleHBhbmRhYmxlOnRydWV9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAjZWxzZUZpZWxkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6ZmllbGQsIGRhdGE6ZGF0YSwgcG9zOnBvcywgcG9zaXRpb246cG9zaXRpb24sIGV4cGFuZGFibGU6dHJ1ZX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW92ZS1jdHJsIG5leHRcIiB0aXRsZT1cIk5leHRcIiAoY2xpY2spPVwibmV4dCgpXCI+Jmd0OzwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8bmctY29udGFpbmVyXHJcblx0XHRcdCpuZ0lmPVwiIWFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93Q2Fyb3VzZWwnXSB8fCAoYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dDYXJvdXNlbCddICYmIGFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93Q2Fyb3VzZWwnXS50b0xvd2VyQ2FzZSgpICE9ICd0cnVlJylcIj5cclxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBkaXNwbGF5VmFsdWVzTGF6eTsgaW5kZXggYXMgcG9zXCIgY2xhc3M9XCJsaXN0LWNvbmF0aWFuZXIgZGF0YS1yb3dcIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnTGlzdC1NdWx0aS1TZWxlY3QnXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlzdC1jaGVja2JveC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IFthdHRyLmFyaWEtbGFiZWxdPVwiJ09yZGVyICcrIHBvcyBcIiB0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdFtuYW1lXT1cInNlbGVjdGVkT2JqLmNoZWNrYm94ID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWyd1bmlxdWVfaWQnXSArJ18nICsgcG9zIDogJ2NoZWNrXycgKyBwb3NcIlxyXG5cdFx0XHRcdFx0XHRcdFtpZF09XCJzZWxlY3RlZE9iai5jaGVja2JveCA/IGRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLmNoZWNrYm94XVsndW5pcXVlX2lkJ10gKydfJyArIHBvcyA6ICdjaGVja18nICsgcG9zXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImxpc3QtY2hlY2tib3hcIiAoY2hhbmdlKT1cImxpc3RfY2hhbmdlKGRhdGEsICRldmVudC50YXJnZXQuY2hlY2tlZCwgcG9zKVwiXHJcblx0XHRcdFx0XHRcdFx0W2NoZWNrZWRdPVwic2VsZWN0ZWRPYmouY2hlY2tib3ggPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5jaGVja2JveF1bJ3Jvd0RhdGEnXVsndmFsdWUnXSA9PSAnMScgOiBkYXRhW3ByaW1hcnlLZXlWYWxdID09IGNoZWNrZWRJdGVtc1twb3NdXCJcclxuXHRcdFx0XHRcdFx0XHRbZGlzYWJsZWRdPVwic2VsZWN0ZWRPYmouY2hlY2tib3ggPyAhZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWydyb3dEYXRhJ11bJ2VkaXRhYmxlJ10gOiBmYWxzZVwiIC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1saXN0LWNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRmb3I9XCJ7e3NlbGVjdGVkT2JqLmNoZWNrYm94ID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWyd1bmlxdWVfaWQnXSArJ18nICsgcG9zIDogJ2NoZWNrXycgKyBwb3N9fVwiPnt7c2VsZWN0ZWRPYmouY2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHQ/IGRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLmNoZWNrYm94XVsnZmllbGRfbGFiZWwnXSA6ICcnfX08L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT0gJ0xpc3QtU2luZ2xlLVNlbGVjdCdcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LXJhZGlvLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgW2F0dHIuYXJpYS1sYWJlbF09XCInT3JkZXIgJysgcG9zIFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0W2lkXT1cInNlbGVjdGVkT2JqLnJhZGlvID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmoucmFkaW9dWyd1bmlxdWVfaWQnXSsnXycgKyBwb3MgOiAncmFkaW8nICsgJ18nICtwb3NcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwibGlzdC1yYWRpb1wiIFsobmdNb2RlbCldPVwicmFkaW9WYWx1ZVwiXHJcblx0XHRcdFx0XHRcdFx0W3ZhbHVlXT1cInNlbGVjdGVkT2JqLnJhZGlvID8gcG9zOiBkYXRhW3ByaW1hcnlLZXlWYWxdXCJcclxuXHRcdFx0XHRcdFx0XHQoY2hhbmdlKT1cImxpc3RfY2hhbmdlKGRhdGEsICRldmVudC50YXJnZXQuY2hlY2tlZClcIlxyXG5cdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJzZWxlY3RlZE9iai5yYWRpbyA/ICFkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5yYWRpb11bJ3Jvd0RhdGEnXVsnZWRpdGFibGUnXSA6IGZhbHNlXCIgLz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWxpc3QtcmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdGZvcj1cInt7c2VsZWN0ZWRPYmoucmFkaW8gPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5yYWRpb11bJ3VuaXF1ZV9pZCddKydfJyArIHBvcyA6ICdyYWRpbycgKyAnXycgK3Bvc319XCI+e3tzZWxlY3RlZE9iai5yYWRpb1xyXG5cdFx0XHRcdFx0XHRcdD8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmoucmFkaW9dWydmaWVsZF9sYWJlbCddIDogJyd9fTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8ZGl2IFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LWl0ZW0gbGlzdC1pdGVtLXBvcy17e3Bvc319IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tsaXN0TG9hZGluZyA/ICdsaXN0LXBlbmRpbmcnOidsaXN0LWxvYWRlZCd9fSB7e3NlbGVjdGVkUm93SW5kZXggPT09IHBvcyA/ICdsaXN0LWl0ZW0tc2VsZWN0ZWQnIDogJyd9fSB7e3R5cGUgPT0gJ0xpc3QtTXVsdGktU2VsZWN0JyA/IChzdG9yZURhdGEuaW5jbHVkZXMoZGF0YVtwcmltYXJ5S2V5VmFsXSk/ICdsaXN0LWl0ZW0tY2hlY2tlZCcgOiAnbGlzdC1pdGVtLXVuY2hlY2tlZCcpIDogJyd9fSBkYXRhLWxpc3Qgc2hvdy1pbi1yb3dcIlxyXG5cdFx0XHRcdFx0KGNsaWNrKT1cImxpc3RDZWxsQ2xpY2soZGF0YSwgcG9zKVwiIChrZXl1cC5lbnRlcik9XCJsaXN0Q2VsbENsaWNrKGRhdGEsIHBvcylcIj5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGRhdGEuZmllbGRzOyBpbmRleCBhcyBwb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snOyBlbHNlIGVsc2VGaWVsZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnZW5lcmljLWJsb2NrLWNvbnRhaW5lciB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXJcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQqbmdGb3I9XCJsZXQgY2hpbGRfZmllbGQgb2YgZmllbGQuY2hpbGRfZmllbGRzOyBpbmRleCBhcyBjaGlsZF9wb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6Y2hpbGRfZmllbGQsZGF0YTpkYXRhLHBvczpwb3MscG9zaXRpb246J2NoaWxkXycrY2hpbGRfcG9zaXRpb259XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAjZWxzZUZpZWxkPlxyXG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6ZmllbGQsZGF0YTpkYXRhLHBvczpwb3MscG9zaXRpb246cG9zaXRpb259XCI+XHJcblx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyAmJiBoaWRlblJvd3NcIj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiY2VlLWxpc3QtZXhwYW5kYWJsZS1vcHRpb24ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fSB7e2RhdGFbJ2hhc0V4cGFuZGFibGVEYXRhJ10/J2hhcy1leHBhbmRhYmxlLWRhdGEnOiduby1leHBhbmRhYmxlLWRhdGEnfX1cIj5cclxuXHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cIiFpc0hUTUwoY29sbGFwc2VUaXRsZSkgJiYgIWlzSFRNTChleHBhbmRUaXRsZSlcIiByb2xlPVwiYnV0dG9uXCJcclxuXHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGRhdGEgPyBudWxsIDogZGF0YVwiPnt7ZXhwYW5kZWRFbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0XHQ9PT0gZGF0YSA/IGNvbGxhcHNlVGl0bGUgOiBleHBhbmRUaXRsZX19PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImV4cGFuZGVkRWxlbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0PT09IGRhdGEgJiYgaXNIVE1MKGNvbGxhcHNlVGl0bGUpXCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGRhdGEgPyBudWxsIDogZGF0YVwiXHJcblx0XHRcdFx0XHRcdFx0XHRcdFtpbm5lckhUTUxdPVwiY29sbGFwc2VUaXRsZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJleHBhbmRlZEVsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdCE9PSBkYXRhICYmIGlzSFRNTChleHBhbmRUaXRsZSlcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgKGNsaWNrKT1cImV4cGFuZGVkRWxlbWVudCA9IGV4cGFuZGVkRWxlbWVudCA9PT0gZGF0YSA/IG51bGwgOiBkYXRhXCJcclxuXHRcdFx0XHRcdFx0XHRcdFx0W2lubmVySFRNTF09XCJleHBhbmRUaXRsZVwiPjwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiY2VlLWxpc3QtZGV0YWlsIHt7aXNfYm9vdHN0cmFwPydjb2wtMTInOicnfX0ge3tleHBhbmRlZEVsZW1lbnQgPT09IGRhdGE/J2NlZS1leHBhbmRlZC1yb3cnOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwie3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZGF0YS5leHBhbmRhYmxlX2ZpZWxkczsgaW5kZXggYXMgcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJzsgZWxzZSBlbHNlRmllbGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2VuZXJpYy1ibG9jay1jb250YWluZXIge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nRm9yPVwibGV0IGNoaWxkX2ZpZWxkIG9mIGZpZWxkLmNoaWxkX2ZpZWxkczsgaW5kZXggYXMgY2hpbGRfcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmNoaWxkX2ZpZWxkLCBkYXRhOmRhdGEsIHBvczpwb3MsIHBvc2l0aW9uOidjaGlsZF8nK2NoaWxkX3Bvc2l0aW9uLCBleHBhbmRhYmxlOnRydWV9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAjZWxzZUZpZWxkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6ZmllbGQsIGRhdGE6ZGF0YSwgcG9zOnBvcywgcG9zaXRpb246cG9zaXRpb24sIGV4cGFuZGFibGU6dHJ1ZX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0PC9uZy1jb250YWluZXI+XHJcblx0PCEtLVxyXG5cdDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciBteS01XCIgW2hpZGRlbl09XCIhc2hvd0xvYWRpbmdcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJsZHMtcmlwcGxlXCI+XHJcblx0XHRcdDxkaXY+PC9kaXY+XHJcblx0XHRcdDxkaXY+PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L2Rpdj4gLS0+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIihub0RhdGFGb3VuZCAmJiAhc2hvd0xvYWRpbmcgJiYgIXNob3dTa2VsZXRvbkxvYWRlcikgfHwgKHNldEZyb21TdG9yZSAmJiBub0RhdGFGb3VuZCAmJiAhc2hvd0xvYWRpbmcpXCI+XHJcblx0XHQ8aDUgY2xhc3M9XCJuby1kYXRhLWluZm8gdGV4dC1jZW50ZXIgbXktNVwiPnt7bm9EYXRhRm91bmRMYWJlbH19PC9oNT5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0PG5nLWNvbnRhaW5lclxyXG5cdFx0Km5nSWY9XCJzaG93U2tlbGV0b25Mb2FkZXIgJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dTa2VsZXRvbkxvYWRlciddICYmIGFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93U2tlbGV0b25Mb2FkZXInXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJ1wiPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBsaXN0RWxlbWVudHM7IGluZGV4IGFzIHBvc1wiIGNsYXNzPVwibGlzdC1jb25hdGlhbmVyXCI+XHJcblx0XHRcdDxkaXYgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiXHJcblx0XHRcdFx0Y2xhc3M9XCJsaXN0LWl0ZW0gbGlzdC1pdGVtLXBvcy17e3Bvc319IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tsaXN0TG9hZGluZyA/ICdsaXN0LXBlbmRpbmcnOidsaXN0LWxvYWRlZCd9fSB7e3NlbGVjdGVkUm93SW5kZXggPT09IHBvcyA/ICdsaXN0LWl0ZW0tc2VsZWN0ZWQnIDogJyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNlY3Rpb25EYXRhLmZpZWxkczsgaW5kZXggYXMgcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhTG9hZGluZzsgY29udGV4dDp7ZmllbGQ6ZmllbGQsZGF0YTpkYXRhLHBvczpwb3MscG9zaXRpb246cG9zaXRpb259XCI+XHJcblx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIW5vRGF0YUZvdW5kXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwicGFnaW5hdGlvbi1jb250YWluZXJcIiAqbmdJZj1cInNob3dQYWdpbmF0aW9uICYmICFTaG93TW9yZSAmJiBhdXRvUGFnaW5hdGlvbiAmJiBwYWdpbmF0aW9uU3R5bGUgIT09ICdtYXRlcmlhbCdcIj5cclxuXHRcdFx0PHAgY2xhc3M9XCJwYWdpbmF0aW9uLXRleHQtY29udGFpbmVyXCI+e3tnZXRSYW5nZUxhYmVsfX08L3A+XHJcblx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwicGFnaW5hdGlvbkZpcnN0TGFiZWxcIiBbZGlzYWJsZWRdPVwicGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gMVwiXHJcblx0XHRcdFx0KGNsaWNrKT1cInNldEN1cnJlbnQoMSlcIiBjbGFzcz1cInBhZ2luYXRpb24tYnRuLWZpcnN0XCJcclxuXHRcdFx0XHRhcmlhLWxhYmVsPVwiU2VsZWN0IEZpcnN0XCI+e3twYWdpbmF0aW9uRmlyc3RMYWJlbH19PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCJwYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PSAxXCIgKGNsaWNrKT1cInBhZ2luYXRpb25QcmV2aW91cygpXCJcclxuXHRcdFx0XHRjbGFzcz1cInBhZ2luYXRpb24tYnRuLXByZXZpb3VzXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBQcmV2aW91c1wiPnt7cGFnaW5hdGlvblByZXZpb3VzTGFiZWx9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uICpuZ0Zvcj1cImxldCBwYWdlTnVtYmVyIG9mIHBhZ2VzXCIgcm9sZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCJwYWdlTnVtYmVyID09PSAnLi4uJ1wiXHJcblx0XHRcdFx0KGNsaWNrKT1cInNldEN1cnJlbnQocGFnZU51bWJlcilcIlxyXG5cdFx0XHRcdGNsYXNzPVwicGFnaW5hdGlvbi1idG4tcGFnZSB7e3BhZ2VOdW1iZXIgPT09IHBhZ2luYXRpb24uY3VycmVudFBhZ2U/J2FjdGl2ZSc6Jyd9fVwiXHJcblx0XHRcdFx0YXR0ci5hcmlhLWxhYmVsPVwiU2VsZWN0IHBhZ2Uge3twYWdlTnVtYmVyfX1cIj57e3BhZ2VOdW1iZXJ9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHJvbGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwicGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gcGFnaW5hdGlvbi5wYWdlQ291bnRcIlxyXG5cdFx0XHRcdChjbGljayk9XCJwYWdpbmF0aW9uTmV4dCgpXCIgY2xhc3M9XCJwYWdpbmF0aW9uLWJ0bi1uZXh0XCJcclxuXHRcdFx0XHRhcmlhLWxhYmVsPVwiU2VsZWN0IE5leHRcIj57e3BhZ2luYXRpb25OZXh0TGFiZWx9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAqbmdJZj1cInBhZ2luYXRpb25MYXN0TGFiZWxcIlxyXG5cdFx0XHRcdFtkaXNhYmxlZF09XCJwYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PSBwYWdpbmF0aW9uLnBhZ2VDb3VudFwiIChjbGljayk9XCJzZXRDdXJyZW50KHBhZ2luYXRpb24ucGFnZUNvdW50KVwiXHJcblx0XHRcdFx0Y2xhc3M9XCJwYWdpbmF0aW9uLWJ0bi1sYXN0XCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBMYXN0XCI+e3twYWdpbmF0aW9uTGFzdExhYmVsfX08L2J1dHRvbj5cclxuXHRcdFx0PHNlbGVjdCAoY2hhbmdlKT1cIm9uUGFnaW5hdGlvbkNvdW50Q2hhbmdlKCk7IHNldFBhZ2luYXRpb25Db3VudCgpXCJcclxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIidTZWxlY3Qgbm8gb2YgaXRlbXMgdG8gYmUgZGlzcGxheWVkJ1wiIFsobmdNb2RlbCldPVwicGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50XCJcclxuXHRcdFx0XHRjbGFzcz1cInBhZ2luYXRpb24tY291bnQtc2VsZWN0b3JcIj5cclxuXHRcdFx0XHQ8b3B0aW9uIFtuZ1ZhbHVlXT1cImRhdGFcIiBbc2VsZWN0ZWRdPVwiZGF0YSA9PSBwYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnRcIlxyXG5cdFx0XHRcdFx0Km5nRm9yPVwibGV0IGRhdGEgb2YgcGFnaW5hdGlvbi5wYWdlSXRlbXNcIj5cclxuXHRcdFx0XHRcdHt7ZGF0YX19PC9vcHRpb24+XHJcblx0XHRcdDwvc2VsZWN0PlxyXG5cdFx0XHRcclxuXHRcdDwvZGl2Plx0XHRcclxuXHRcdDxtYXQtcGFnaW5hdG9yICpuZ0lmPVwic2hvd1BhZ2luYXRpb24gJiYgIVNob3dNb3JlICYmIGF1dG9QYWdpbmF0aW9uICYmIChwYWdpbmF0aW9uU3R5bGUgPT09ICdtYXRlcmlhbCcpXCJcclxuXHRcdFx0W3BhZ2VJbmRleF09XCJwYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC0gMVwiIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnaW5hdGlvbi5wYWdlSXRlbXNcIlxyXG5cdFx0XHRbbGVuZ3RoXT1cInBhZ2luYXRpb24uaXRlbUNvdW50XCIgKHBhZ2UpPVwib25NYXRlcmlhbFBhZ2VDaGFuZ2UoJGV2ZW50KVwiIHNob3dGaXJzdExhc3RCdXR0b25zPlxyXG5cdFx0PC9tYXQtcGFnaW5hdG9yPlxyXG5cdFx0PGRpdiBjbGFzcz1cInBhZ2luYXRpb24tY29udGFpbmVyLXNob3dtb3JlXCI+XHJcblx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPSBcIlNob3dNb3JlICYmIFNob3dNb3JlSGlkZVwiIChjbGljayk9XCJzaG93TW9yZSgpXCIgY2xhc3M9XCJwYWdpbmF0aW9uLWJ0bi1zaG93bW9yZVwiPnt7YnRuU2hvd01vcmVOYW1lfX08L2J1dHRvbj5cclxuXHRcdFx0PC9kaXY+XHJcblx0PC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjZWxsRGF0YSBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1wb3M9XCJwb3NcIiBsZXQtcG9zaXRpb249XCJwb3NpdGlvblwiXHJcblx0bGV0LWV4cGFuZGFibGU9XCJleHBhbmRhYmxlXCI+XHJcblx0PG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZmllbGQuZmllbGRfdHlwZVwiPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCI+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLWxhYmVsIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtbGFiZWw+IC0tPlxyXG5cdFx0XHQ8IS0tIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXJcclxuXHRcdFx0XHRcdCpuZ0lmPVwiXCI+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyXHJcblx0XHRcdFx0XHRcdCpuZ0lmPVwiZmllbGQuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykgfHwgKGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiBmaWVsZC5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIDsgZWxzZSBub3REeW5hbWljXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0XHRcdFx0W2lubmVySFRNTF09XCJzZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZShmaWVsZCwgZGF0YSkuZmllbGRfbGFiZWxcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlICNub3REeW5hbWljPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7ZmllbGQuZmllbGRfbGFiZWx9fTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9uZy10ZW1wbGF0ZT4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUZXh0ZmllbGQnXCI+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgZmllbGREYXRhOiBmaWVsZCwga2VlcFN0YXRlOiB0cnVlLFxyXG5cdFx0XHRcdHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCI+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLXRleHRmaWVsZCBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb3dEYXRhXT1cImZpZWxkWydyb3dEYXRhJ11cIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbZmllbGREYXRhXT1cImZpZWxkXCIgW2tlZXBTdGF0ZV09XCJ0cnVlXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCJcclxuXHRcdFx0XHRbcHJpbWFyeUtleUluZGV4XT1cIntuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX1cIj5cclxuXHRcdFx0PC9hcHAtY2VlLXRleHRmaWVsZD4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInTWVudSdcIj5cclxuXHRcdFx0PGRpdlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBmaWVsZERhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiPjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS1tZW51IFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtbWVudT4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInSW1hZ2UnXCI+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgZmllbGREYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1jZWUtaW1hZ2UgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1pbWFnZT4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInUGlja2VyJ1wiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCI+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLXBpY2tlciBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb3dEYXRhXT1cImZpZWxkWydyb3dEYXRhJ11cIiBbZmllbGREYXRhXT1cImZpZWxkXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCJcclxuXHRcdFx0XHRbcHJpbWFyeUtleUluZGV4XT1cIntuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX1cIj5cclxuXHRcdFx0PC9hcHAtY2VlLXBpY2tlcj4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInQnV0dG9uJ1wiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0lmPVwiaGFzRW1pdHRlZENvbXBsZXRpb25cIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBmaWVsZERhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiPjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS1idXR0b24gW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1idXR0b24+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0xpbmsnXCI+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgZmllbGREYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1jZWUtbGluayBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb3dEYXRhXT1cImZpZWxkWydyb3dEYXRhJ11cIiBbZmllbGREYXRhXT1cImZpZWxkXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCJcclxuXHRcdFx0XHRbcHJpbWFyeUtleUluZGV4XT1cIntuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX1cIj5cclxuXHRcdFx0PC9hcHAtY2VlLWxpbms+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1ZpZGVvJ1wiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCI+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLXZpZGVvIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtdmlkZW8+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1RhYmxlJ1wiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIHNlY3Rpb25EYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1jZWUtdGFibGUgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW3NlY3Rpb25EYXRhXT1cImZpZWxkXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCJcclxuXHRcdFx0XHRbcHJpbWFyeUtleUluZGV4XT1cIntuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX1cIlxyXG5cdFx0XHRcdFt0eXBlXT1cImZpZWxkLmZpZWxkX3R5cGVcIj5cclxuXHRcdFx0PC9hcHAtY2VlLXRhYmxlPiAtLT5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIlsnTGlzdCcsICdMaXN0LUV4cGFuZGFibGUnXS5pbmNsdWRlcyhmaWVsZC5maWVsZF90eXBlKSA/IGZpZWxkLmZpZWxkX3R5cGUgOiAnJ1wiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxhcHAtbGlzdC1yZW5kZXJlciBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb290RGF0YV09XCJyb290RGF0YVwiIFtyb3dEYXRhXT1cImZpZWxkWydyb3dEYXRhJ11cIlxyXG5cdFx0XHRcdFx0W3NlY3Rpb25EYXRhXT1cImZpZWxkXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiIFt0eXBlXT1cImZpZWxkLmZpZWxkX3R5cGVcIlxyXG5cdFx0XHRcdFx0W2NoaWxkTGlzdF09XCJmaWVsZFsnY2hpbGRMaXN0J11cIj48L2FwcC1saXN0LXJlbmRlcmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUb2dnbGVCdXR0b24nXCI+XHJcblx0XHRcdFRvb2dsZSBCdXR0b24gQ29udGFpbmVyXHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInQWNjb3JkaW9uJ1wiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIHNlY3Rpb25EYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1hY2NvcmRpb24tcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm9vdERhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtzZWN0aW9uRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWFjY29yZGlvbi1yZW5kZXJlcj4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInRHluYW1pY0Zvcm0nXCI+XHJcblx0XHRcdDxkaXZcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgc2VjdGlvbkRhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiPjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWR5bmFtaWMtZm9ybSBbc2VjdGlvbkRhdGFdPVwiZmllbGRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcblx0XHRcdDwvYXBwLWR5bmFtaWMtZm9ybT4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8IS0tIEF0dGFjaG1lbnRzIC0tPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0F0dGFjaG1lbnRzJ1wiPlxyXG5cdFx0XHQ8ZGl2XHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIHNlY3Rpb25EYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1jZWUtYXR0YWNobWVudHMgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiIFtyb290RGF0YV09XCJyb290RGF0YVwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1hdHRhY2htZW50cz4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0PC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcblxyXG48bmctdGVtcGxhdGUgI2NlbGxEYXRhTG9hZGluZyBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1wb3M9XCJwb3NcIiBsZXQtcG9zaXRpb249XCJwb3NpdGlvblwiXHJcblx0bGV0LWV4cGFuZGFibGU9XCJleHBhbmRhYmxlXCI+XHJcblx0PG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZmllbGQuZmllbGRfdHlwZVwiPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fbGFiZWwgbG9hZGluZ1wiPjwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVGV4dGZpZWxkJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fdGV4dCBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInTWVudSdcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX21lbnUgbG9hZGluZ1wiPjwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0ltYWdlJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9faW1hZ2UgbG9hZGluZ1wiPjwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1BpY2tlcidcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX3BpY2tlciBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInQnV0dG9uJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fYnV0dG9uIGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidMaW5rJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fbGluayBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVGFibGUnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX190YWJsZSBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInTGlzdCdcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX2xpc3QgbG9hZGluZ1wiPjwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==