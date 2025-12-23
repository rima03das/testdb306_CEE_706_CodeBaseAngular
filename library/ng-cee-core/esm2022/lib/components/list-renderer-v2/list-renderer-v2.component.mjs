import { Component, Input } from '@angular/core';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { MatTableDataSource } from '@angular/material/table';
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
// import { CeeLabelComponent } from '../../field-components/cee-label/cee-label.component';
// import { CeeTextfieldComponent } from '../../field-components/cee-textfield/cee-textfield.component';
// import { CeeMenuComponent } from '../../field-components/cee-menu/cee-menu.component';
// import { CeeImageComponent } from '../../field-components/cee-image/cee-image.component';
// import { CeePickerComponent } from '../../field-components/cee-picker/cee-picker.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule, NgStyle, NgSwitch } from '@angular/common';
// import { CeeButtonComponent } from '../../field-components/cee-button/cee-button.component';
// import { CeeLinkComponent } from '../../field-components/cee-link/cee-link.component';
// import { CeeTableComponent } from '../../field-components/cee-table/cee-table.component';
// import { AccordionRendererComponent } from '../accordion-renderer/accordion-renderer.component';
// import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';
import { MatInputModule } from '@angular/material/input';
// import { CeeTableV2Component } from '../../field-components/cee-table-v2/cee-table-v2.component';
import { StylePaginatorDirective } from './paginatorStyleDirective';
import { defer } from 'rxjs';
import { CdkDrag, CdkDropList, moveItemInArray, } from '@angular/cdk/drag-drop';
import { MatCheckboxModule } from '@angular/material/checkbox';
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
import * as i13 from "@angular/material/checkbox";
import * as i14 from "@angular/common";
import * as i15 from "@angular/forms";
import * as i16 from "@angular/material/paginator";
const _c0 = a0 => ({ "d-none": a0 });
const _c1 = a0 => ({ "color": a0 });
const _c2 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3 });
const _c3 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3, expandable: true });
const _c4 = () => ["List-V2", "List-Expandable-V2"];
const _c5 = (a0, a1, a2) => ({ name: a0, value: a1, type: "list", cellData: a2 });
const _c6 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c7 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true, primaryKeyIndex: a4 });
const _c8 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, primaryKeyIndex: a4 });
function ListRendererComponentV2_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 8)(1, "mat-form-field", 9)(2, "input", 10);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponentV2_ng_container_0_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterTxt, $event) || (ctx_r1.filterTxt = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function ListRendererComponentV2_ng_container_0_div_1_Template_input_keyup_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterTxt);
} }
function ListRendererComponentV2_ng_container_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 11);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showHideFilter("show-hide-list-container-", ctx_r1.sectionData.unique_id)); });
    i0.ɵɵtext(1, "\u2630");
    i0.ɵɵelementEnd();
} }
function ListRendererComponentV2_ng_container_0_div_4_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.sectionData.field_label, " Setting");
} }
function ListRendererComponentV2_ng_container_0_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "mat-checkbox", 24);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponentV2_ng_container_0_div_4_div_4_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r5); const i_r6 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.columnShowHideRearrange[i_r6].showColumn, $event) || (ctx_r1.columnShowHideRearrange[i_r6].showColumn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r6 = i0.ɵɵnextContext();
    const f_r8 = ctx_r6.$implicit;
    const i_r6 = ctx_r6.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.columnShowHideRearrange[i_r6].showColumn);
    i0.ɵɵproperty("disabled", ctx_r1.columnShowHideRearrange[i_r6].isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r8.field_label);
} }
function ListRendererComponentV2_ng_container_0_div_4_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r8 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r8.field_label);
} }
function ListRendererComponentV2_ng_container_0_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_div_4_div_4_div_1_Template, 3, 3, "div", 21)(2, ListRendererComponentV2_ng_container_0_div_4_div_4_div_2_Template, 3, 1, "div", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r6 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, !ctx_r1.columnShowHideRearrange[i_r6].isVisible));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("showhide") != -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("showhide") == -1);
} }
function ListRendererComponentV2_ng_container_0_div_4_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.filterErrorMsg);
} }
function ListRendererComponentV2_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 12)(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_container_0_div_4_label_2_Template, 2, 1, "label", 13);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 14);
    i0.ɵɵlistener("cdkDropListDropped", function ListRendererComponentV2_ng_container_0_div_4_Template_div_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.drop($event)); });
    i0.ɵɵtemplate(4, ListRendererComponentV2_ng_container_0_div_4_div_4_Template, 3, 5, "div", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, ListRendererComponentV2_ng_container_0_div_4_label_6_Template, 2, 1, "label", 16);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 17);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_div_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.resetRestructuring()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 18);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_div_4_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyRestructuring()); });
    i0.ɵɵtext(10, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("id", "show-hide-list-container-", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.columnShowHideRearrange);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.filterErrorMsg);
} }
function ListRendererComponentV2_ng_container_0_ng_container_5_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r9 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c1, message_r9.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r9.message_text, " ");
} }
function ListRendererComponentV2_ng_container_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_5_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function ListRendererComponentV2_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_5_div_1_Template, 2, 1, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 34)(1, "span", 35);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 36);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_div_1_div_1_Template_span_click_3_listener() { const chipArray_r11 = i0.ɵɵrestoreView(_r10).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.deleteChips(chipArray_r11)); });
    i0.ɵɵtext(4, "x");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const chipArray_r11 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", chipArray_r11.keyName, " ");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_div_1_div_1_Template, 5, 1, "div", 33);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.chipsArray);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 42)(2, "input", 43);
    i0.ɵɵlistener("change", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r14 = i0.ɵɵnextContext(); const data_r16 = ctx_r14.$implicit; const pos_r17 = ctx_r14.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r16, $event.target.checked, pos_r17)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r17 : "check_" + pos_r17)("id", ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r17 : "check_" + pos_r17)("checked", ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["rowData"]["value"] == "1" : data_r16[ctx_r1.primaryKeyVal] == ctx_r1.checkedItems[pos_r17])("disabled", ctx_r1.selectedObj.checkbox ? !data_r16.fields[ctx_r1.selectedObj.checkbox]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r17);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r17 : "check_" + pos_r17);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.checkbox ? data_r16.fields[ctx_r1.selectedObj.checkbox]["field_label"] : "");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 45)(2, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r18); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.radioValue, $event) || (ctx_r1.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r18); const data_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r16, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r1.selectedObj.radio ? data_r16.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r17 : "radio" + "_" + pos_r17);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.radioValue);
    i0.ɵɵproperty("value", ctx_r1.selectedObj.radio ? pos_r17 : data_r16[ctx_r1.primaryKeyVal])("disabled", ctx_r1.selectedObj.radio ? !data_r16.fields[ctx_r1.selectedObj.radio]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r17);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.radio ? data_r16.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r17 : "radio" + "_" + pos_r17);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.radio ? data_r16.fields[ctx_r1.selectedObj.radio]["field_label"] : "");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r21 = ctx.$implicit;
    const child_position_r22 = ctx.index;
    const ctx_r14 = i0.ɵɵnextContext(3);
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, child_field_r21, data_r16, pos_r17, "child_" + child_position_r22));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext();
    const field_r25 = ctx_r23.$implicit;
    const position_r26 = ctx_r23.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r26, " ", field_r25.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r25.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r25)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r25.child_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_0_Template, 1, 0, null, 49);
} if (rf & 2) {
    const ctx_r23 = i0.ɵɵnextContext();
    const field_r25 = ctx_r23.$implicit;
    const position_r26 = ctx_r23.index;
    const ctx_r14 = i0.ɵɵnextContext();
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r25, data_r16, pos_r17, position_r26));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_container_1_Template, 4, 8, "ng-container", 48)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r25 = ctx.$implicit;
    const elseField_r27 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r25.field_type === "Generic Block")("ngIfElse", elseField_r27);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r29 = ctx.$implicit;
    const child_position_r30 = ctx.index;
    const ctx_r14 = i0.ɵɵnextContext(4);
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, child_field_r29, data_r16, pos_r17, "child_" + child_position_r30));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext();
    const field_r32 = ctx_r30.$implicit;
    const position_r33 = ctx_r30.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r33, " ", field_r32.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r32.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r32)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r32.child_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_0_Template, 1, 0, null, 49);
} if (rf & 2) {
    const ctx_r30 = i0.ɵɵnextContext();
    const field_r32 = ctx_r30.$implicit;
    const position_r33 = ctx_r30.index;
    const ctx_r14 = i0.ɵɵnextContext(2);
    const data_r16 = ctx_r14.$implicit;
    const pos_r17 = ctx_r14.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, field_r32, data_r16, pos_r17, position_r33));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_container_1_Template, 4, 8, "ng-container", 48)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r32 = ctx.$implicit;
    const elseField_r34 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r32.field_type === "Generic Block")("ngIfElse", elseField_r34);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "button", 50);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r28); const data_r16 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r16 ? null : data_r16); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div")(5, "div");
    i0.ɵɵtemplate(6, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_ng_container_6_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r16 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r16["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r16 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r16 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r16.expandable_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 40);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_1_Template, 5, 7, "ng-container", 3)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_2_Template, 5, 7, "ng-container", 3);
    i0.ɵɵelementStart(3, "div", 41);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_Template_div_click_3_listener() { const ctx_r18 = i0.ɵɵrestoreView(_r13); const data_r16 = ctx_r18.$implicit; const pos_r17 = ctx_r18.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r16, pos_r17)); })("keyup.enter", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_Template_div_keyup_enter_3_listener() { const ctx_r19 = i0.ɵɵrestoreView(_r13); const data_r16 = ctx_r19.$implicit; const pos_r17 = ctx_r19.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r16, pos_r17)); });
    i0.ɵɵtemplate(4, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_4_Template, 4, 2, "ng-container", 7)(5, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_ng_container_5_Template, 7, 13, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r16 = ctx.$implicit;
    const pos_r17 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Multi-Select-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Single-Select-V2");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("carousel-item list-item list-item-pos-", pos_r17, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r17 ? "list-item-selected" : "", " ", ctx_r1.type == "List-Multi-Select-V2" ? ctx_r1.storeData.includes(data_r16[ctx_r1.primaryKeyVal]) ? "list-item-checked" : "list-item-unchecked" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r16.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable-V2" && ctx_r1.hidenRows);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 37);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.previous()); });
    i0.ɵɵtext(2, "<");
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_ng_container_3_Template, 6, 12, "ng-container", 38);
    i0.ɵɵelementStart(4, "div", 39);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_Template_div_click_4_listener() { i0.ɵɵrestoreView(_r12); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.next()); });
    i0.ɵɵtext(5, ">");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.rowDataShown);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 42)(2, "input", 43);
    i0.ɵɵlistener("change", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_1_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r36); const ctx_r36 = i0.ɵɵnextContext(); const data_r38 = ctx_r36.$implicit; const pos_r39 = ctx_r36.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r38, $event.target.checked, pos_r39)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 44);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext();
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("name", ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r39 : "check_" + pos_r39)("id", ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r39 : "check_" + pos_r39)("checked", ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["rowData"]["value"] == "1" : data_r38[ctx_r1.primaryKeyVal] == ctx_r1.checkedItems[pos_r39])("disabled", ctx_r1.selectedObj.checkbox ? !data_r38.fields[ctx_r1.selectedObj.checkbox]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r39);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["unique_id"] + "_" + pos_r39 : "check_" + pos_r39);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.checkbox ? data_r38.fields[ctx_r1.selectedObj.checkbox]["field_label"] : "");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 45)(2, "input", 46);
    i0.ɵɵtwoWayListener("ngModelChange", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_2_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(5); i0.ɵɵtwoWayBindingSet(ctx_r1.radioValue, $event) || (ctx_r1.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_2_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r40); const data_r38 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.list_change(data_r38, $event.target.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 47);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r36 = i0.ɵɵnextContext();
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r1.selectedObj.radio ? data_r38.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r39 : "radio" + "_" + pos_r39);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.radioValue);
    i0.ɵɵproperty("value", ctx_r1.selectedObj.radio ? pos_r39 : data_r38[ctx_r1.primaryKeyVal])("disabled", ctx_r1.selectedObj.radio ? !data_r38.fields[ctx_r1.selectedObj.radio]["rowData"]["editable"] : false);
    i0.ɵɵattribute("aria-label", "Order " + pos_r39);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("for", ctx_r1.selectedObj.radio ? data_r38.fields[ctx_r1.selectedObj.radio]["unique_id"] + "_" + pos_r39 : "radio" + "_" + pos_r39);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.selectedObj.radio ? data_r38.fields[ctx_r1.selectedObj.radio]["field_label"] : "");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r43 = ctx.$implicit;
    const child_position_r44 = ctx.index;
    const ctx_r36 = i0.ɵɵnextContext(3);
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, child_field_r43, data_r38, pos_r39, "child_" + child_position_r44));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    const field_r46 = ctx_r44.$implicit;
    const position_r47 = ctx_r44.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r47, " ", field_r46.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r46.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r46)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r46.child_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_0_Template, 1, 0, null, 49);
} if (rf & 2) {
    const ctx_r44 = i0.ɵɵnextContext();
    const field_r46 = ctx_r44.$implicit;
    const position_r47 = ctx_r44.index;
    const ctx_r36 = i0.ɵɵnextContext();
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r46, data_r38, pos_r39, position_r47));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_container_1_Template, 4, 8, "ng-container", 48)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r46 = ctx.$implicit;
    const elseField_r48 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r46.field_type === "Generic Block")("ngIfElse", elseField_r48);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r50 = ctx.$implicit;
    const child_position_r51 = ctx.index;
    const ctx_r36 = i0.ɵɵnextContext(4);
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, child_field_r50, data_r38, pos_r39, "child_" + child_position_r51));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext();
    const field_r53 = ctx_r51.$implicit;
    const position_r54 = ctx_r51.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r54, " ", field_r53.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r53.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r53)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r53.child_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_0_Template, 1, 0, null, 49);
} if (rf & 2) {
    const ctx_r51 = i0.ɵɵnextContext();
    const field_r53 = ctx_r51.$implicit;
    const position_r54 = ctx_r51.index;
    const ctx_r36 = i0.ɵɵnextContext(2);
    const data_r38 = ctx_r36.$implicit;
    const pos_r39 = ctx_r36.index;
    i0.ɵɵnextContext(4);
    const cellData_r23 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r23)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, field_r53, data_r38, pos_r39, position_r54));
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_container_1_Template, 4, 8, "ng-container", 48)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_ng_template_2_Template, 1, 7, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r53 = ctx.$implicit;
    const elseField_r55 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r53.field_type === "Generic Block")("ngIfElse", elseField_r55);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r49 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "button", 50);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r49); const data_r38 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r38 ? null : data_r38); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div")(5, "div");
    i0.ɵɵtemplate(6, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_ng_container_6_Template, 4, 2, "ng-container", 7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r38 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r38["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r38 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r38 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r38.expandable_fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 40);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_1_Template, 5, 7, "ng-container", 3)(2, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_2_Template, 5, 7, "ng-container", 3);
    i0.ɵɵelementStart(3, "div", 41);
    i0.ɵɵlistener("click", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_Template_div_click_3_listener() { const ctx_r40 = i0.ɵɵrestoreView(_r35); const data_r38 = ctx_r40.$implicit; const pos_r39 = ctx_r40.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r38, pos_r39)); })("keyup.enter", function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_Template_div_keyup_enter_3_listener() { const ctx_r41 = i0.ɵɵrestoreView(_r35); const data_r38 = ctx_r41.$implicit; const pos_r39 = ctx_r41.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r38, pos_r39)); });
    i0.ɵɵtemplate(4, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_4_Template, 4, 2, "ng-container", 7)(5, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_ng_container_5_Template, 7, 13, "ng-container", 3);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r38 = ctx.$implicit;
    const pos_r39 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Multi-Select-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "List-Single-Select-V2");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate5("list-item list-item-pos-", pos_r39, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r39 ? "list-item-selected" : "", " ", ctx_r1.type == "List-Multi-Select-V2" ? ctx_r1.storeData.includes(data_r38[ctx_r1.primaryKeyVal]) ? "list-item-checked" : "list-item-unchecked" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r38.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable-V2" && ctx_r1.hidenRows);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_ng_container_1_Template, 6, 12, "ng-container", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.displayValuesLazy);
} }
function ListRendererComponentV2_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_6_div_1_Template, 2, 1, "div", 31);
    i0.ɵɵelement(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_3_Template, 6, 1, "ng-container", 3)(4, ListRendererComponentV2_ng_container_0_ng_container_6_ng_container_4_Template, 2, 1, "ng-container", 3);
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
function ListRendererComponentV2_ng_container_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 51);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_1_Template, 1, 0, null, 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r56 = ctx.$implicit;
    const position_r57 = ctx.index;
    const ctx_r57 = i0.ɵɵnextContext();
    const data_r59 = ctx_r57.$implicit;
    const pos_r60 = ctx_r57.index;
    i0.ɵɵnextContext(3);
    const cellDataLoading_r61 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellDataLoading_r61)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c2, field_r56, data_r59, pos_r60, position_r57));
} }
function ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 53);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_ng_container_2_Template, 2, 7, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r60 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("list-item list-item-pos-", pos_r60, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r60 ? "list-item-selected" : "", "");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionData.fields);
} }
function ListRendererComponentV2_ng_container_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_8_ng_container_1_Template, 3, 8, "ng-container", 52);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.listElements);
} }
function ListRendererComponentV2_ng_container_0_ng_container_9_mat_paginator_1_Template(rf, ctx) { if (rf & 1) {
    const _r62 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 55);
    i0.ɵɵlistener("page", function ListRendererComponentV2_ng_container_0_ng_container_9_mat_paginator_1_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r62); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.pageChangeEvent($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("length", ctx_r1.pagination.itemCount)("pageSize", ctx_r1.pagination.currentItemCount)("showTotalPages", 3)("pageSizeOptions", ctx_r1.pagination.pageItems);
} }
function ListRendererComponentV2_ng_container_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_ng_container_9_mat_paginator_1_Template, 1, 4, "mat-paginator", 54);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && ctx_r1.autoPagination);
} }
function ListRendererComponentV2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_container_0_div_1_Template, 3, 2, "div", 4);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, ListRendererComponentV2_ng_container_0_button_3_Template, 2, 0, "button", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, ListRendererComponentV2_ng_container_0_div_4_Template, 11, 5, "div", 6)(5, ListRendererComponentV2_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 7)(6, ListRendererComponentV2_ng_container_0_ng_container_6_Template, 5, 6, "ng-container", 3)(7, ListRendererComponentV2_ng_container_0_ng_container_7_Template, 3, 1, "ng-container", 3)(8, ListRendererComponentV2_ng_container_0_ng_container_8_Template, 2, 1, "ng-container", 3)(9, ListRendererComponentV2_ng_container_0_ng_container_9_Template, 2, 1, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showFilter);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.noDataFound && !ctx_r1.showLoading && !ctx_r1.showSkeletonLoader && ctx_r1.showNoDataFoundLabel);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && ctx_r1.additionalParameters["ShowSkeletonLoader"] && ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
} }
function ListRendererComponentV2_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c6, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-list-renderer-v2", 59);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("rootData", ctx_r1.rootData)("rowData", field_r64["rowData"])("sectionData", field_r64)("templateId", ctx_r1.templateId)("type", field_r64.field_type)("childList", field_r64["childList"]);
} }
function ListRendererComponentV2_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Toogle Button Container ");
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_1_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_12_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_13_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_ng_container_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function ListRendererComponentV2_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, ListRendererComponentV2_ng_template_1_ng_container_14_ng_container_2_Template, 1, 0, "ng-container", 58);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r62 = i0.ɵɵnextContext();
    const field_r64 = ctx_r62.field;
    const data_r65 = ctx_r62.data;
    const position_r66 = ctx_r62.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r66, " ", field_r64.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r64.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r64)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r64.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r64["rowData"], field_r64, i0.ɵɵpureFunction3(8, _c5, ctx_r1.primaryKeyVal, data_r65[ctx_r1.primaryKeyVal], data_r65)));
} }
function ListRendererComponentV2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 56);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_template_1_ng_container_1_Template, 4, 18, "ng-container", 57)(2, ListRendererComponentV2_ng_template_1_ng_container_2_Template, 4, 18, "ng-container", 57)(3, ListRendererComponentV2_ng_template_1_ng_container_3_Template, 4, 18, "ng-container", 57)(4, ListRendererComponentV2_ng_template_1_ng_container_4_Template, 4, 18, "ng-container", 57)(5, ListRendererComponentV2_ng_template_1_ng_container_5_Template, 4, 18, "ng-container", 57)(6, ListRendererComponentV2_ng_template_1_ng_container_6_Template, 4, 18, "ng-container", 57)(7, ListRendererComponentV2_ng_template_1_ng_container_7_Template, 4, 18, "ng-container", 57)(8, ListRendererComponentV2_ng_template_1_ng_container_8_Template, 4, 18, "ng-container", 57)(9, ListRendererComponentV2_ng_template_1_ng_container_9_Template, 4, 18, "ng-container", 57)(10, ListRendererComponentV2_ng_template_1_ng_container_10_Template, 3, 11, "ng-container", 57)(11, ListRendererComponentV2_ng_template_1_ng_container_11_Template, 2, 0, "ng-container", 57)(12, ListRendererComponentV2_ng_template_1_ng_container_12_Template, 4, 18, "ng-container", 57)(13, ListRendererComponentV2_ng_template_1_ng_container_13_Template, 4, 18, "ng-container", 57)(14, ListRendererComponentV2_ng_template_1_ng_container_14_Template, 4, 18, "ng-container", 57);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r64 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r64.field_type);
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
    i0.ɵɵproperty("ngSwitchCase", "Table-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", i0.ɵɵpureFunction0(15, _c4).includes(field_r64.field_type) ? field_r64.field_type : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "ToggleButton");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Accordion");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DynamicForm");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Attachments");
} }
function ListRendererComponentV2_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 60);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 61);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 62);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 63);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 64);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 65);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 66);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 67);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 68);
    i0.ɵɵelementContainerEnd();
} }
function ListRendererComponentV2_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 56);
    i0.ɵɵtemplate(1, ListRendererComponentV2_ng_template_3_ng_container_1_Template, 2, 0, "ng-container", 57)(2, ListRendererComponentV2_ng_template_3_ng_container_2_Template, 2, 0, "ng-container", 57)(3, ListRendererComponentV2_ng_template_3_ng_container_3_Template, 2, 0, "ng-container", 57)(4, ListRendererComponentV2_ng_template_3_ng_container_4_Template, 2, 0, "ng-container", 57)(5, ListRendererComponentV2_ng_template_3_ng_container_5_Template, 2, 0, "ng-container", 57)(6, ListRendererComponentV2_ng_template_3_ng_container_6_Template, 2, 0, "ng-container", 57)(7, ListRendererComponentV2_ng_template_3_ng_container_7_Template, 2, 0, "ng-container", 57)(8, ListRendererComponentV2_ng_template_3_ng_container_8_Template, 2, 0, "ng-container", 57)(9, ListRendererComponentV2_ng_template_3_ng_container_9_Template, 2, 0, "ng-container", 57);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r67 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r67.field_type);
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
    i0.ɵɵproperty("ngSwitchCase", "Table-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "List-V2");
} }
export class ListRendererComponentV2 {
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
    showNoDataFoundLabel = true;
    showSkeletonLoader = true;
    listElements = [];
    radioValue;
    checkedItems = [];
    storeData = [];
    primaryKeyVal = '';
    showErrorOnNext = false;
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
    paginationFirstLabel;
    paginationLastLabel;
    selectedRowIndex;
    tabIndexValue;
    rowDataShown;
    iRowData;
    itemPerPage;
    hasRowConditionField;
    html_id = '';
    columnFilterType = ['none'];
    columnShowHideRearrange = [];
    fieldDataBack = [];
    filterErrorMsg = "";
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
        "Table-V2": defer(() => {
            if (this.componentList['Table-V2']) {
                return this.componentList['Table-V2'];
            }
            else {
                const c = import('../../field-components/cee-table-v2/cee-table-v2.component').then(m => m.CeeTableV2Component);
                this.componentList['Table-V2'] = c;
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
    }
    updateColumnConfig() {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.sectionData.unique_id)) {
            this.columnShowHideRearrange = setting[this.sectionData.unique_id];
        }
        else {
            this.columnShowHideRearrange = [];
            // console.log("sectionData.fields: ", this.sectionData.fields)
            if (this.sectionData.fields) {
                this.sectionData.fields.forEach((element, i) => {
                    this.columnShowHideRearrange.push({
                        field_label: element.field_label,
                        unique_id: element.unique_id,
                        position: i,
                        showColumn: true,
                        isMandatory: false,
                        isVisible: true
                    });
                });
            }
        }
    }
    drop(event) {
        if (this.columnFilterType.indexOf('rearrange') != -1) {
            moveItemInArray(this.columnShowHideRearrange, event.previousIndex, event.currentIndex);
        }
    }
    resetRestructuring() {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.sectionData.unique_id)) {
            this.columnShowHideRearrange = setting[this.sectionData.unique_id];
        }
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
        }
        this.showHideFilter('show-hide-list-container-', this.sectionData.unique_id);
    }
    applyRestructuring() {
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
            let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
            setting[this.sectionData.unique_id] = this.columnShowHideRearrange;
            localStorage.setItem('columnRstructuringConfig', JSON.stringify(setting));
            let selectedCols = this.columnShowHideRearrange.filter(c => c.showColumn == true).map(ele => ele.unique_id);
            let restuctuedColArr = [];
            selectedCols.forEach(s => {
                let tempFieldData = this.fieldDataBack.filter(ele => ele.unique_id == s);
                if (tempFieldData && tempFieldData.length > 0) {
                    restuctuedColArr.push(tempFieldData[0]);
                }
            });
            this.sectionData.fields = restuctuedColArr;
            this.ngOnInit();
            this.showHideFilter('show-hide-list-container-', this.sectionData.unique_id);
        }
        else {
            this.filterErrorMsg = "Please select atleast one column!";
        }
    }
    showHideFilter(string, id) {
        let containerId = string + id;
        if (!document.getElementById(containerId)) {
            return;
        }
        if (document.getElementById(containerId).classList.contains('d-none')) {
            document.getElementById(containerId).classList.remove('d-none');
        }
        else {
            document.getElementById(containerId).classList.add('d-none');
        }
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
                    case 'CEE_column_filter_type':
                        this.columnFilterType = paramter.value ? paramter.value.split('|') : ['none'];
                        break;
                    case 'Show Chips':
                        this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'Show Pagination':
                        this.showPagination = paramter.value === 'true' ? true : false;
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
                    case 'CEE_ShowNoDataFoundLabel':
                        this.showNoDataFoundLabel = paramter.value === 'false' ? false : true;
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
                            if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.sectionData.response_api_key);
                                for (const apiKey of apiKeys) {
                                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                    if (handlerData) {
                                        fromStore = handlerData.value;
                                        break;
                                    }
                                }
                            }
                        }
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
                // this.blockRenderedData = this.commonUtil.blockBootstrapProcess(this.childList);
                // this.sectionData.fields = this.childList.block_fields;
                if (!this.sectionData.fields) {
                    this.blockRenderedData = this.commonUtil.blockBootstrapProcess(this.childList);
                    this.sectionData.fields = this.fieldDataBack = this.blockRenderedData.block_fields;
                    this.updateColumnConfig();
                    this.applyRestructuring();
                }
            }
            else {
                // const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
                // this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
                // this.sectionData.fields = this.blockRenderedData.block_fields;
                if (!this.sectionData.fields) {
                    const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
                    this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
                    this.sectionData.fields = this.fieldDataBack = this.blockRenderedData.block_fields;
                    this.updateColumnConfig();
                    this.applyRestructuring();
                    this.sharedEventsServiceService.stepLoaderEmitter.emit({ "blockId": this.additionalParameters['default_value'] });
                }
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
        this.updateColumnConfig();
        // console.log("columnShowHideRearrange: ", this.columnShowHideRearrange)
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
        this.eventListHandler.cellAppData.stepId = this.stepId; // Fix: when TF's label in cell clicked, TF's state not removed after going back
        this.eventListHandler.cellAppData.visible = this.appData.visible; // Fix: when TF's label in cell clicked, on page refresh, TF disappears
        this.variableObj['searchFilterEmitter_' + unique_id] = this.sharedEventsServiceService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'] && data['uniqueIds'].includes(this.sectionData.unique_id)) {
                this.filterTxt = data['values'][0] ? data['values'][0] : '';
                this.commonUtil.setFilterKeys(this.searchData, data['filterCol']);
                this.applyFilter();
            }
        });
        // console.log("sectiondata: ", this.sectionData)
        // console.log("fieldData: ", this.sectionData.fields)
        // call the api event success emitter
        if (fromStore) {
            this.setListData(fromStore);
        }
    }
    setShownData() {
        this.rowDataShown = this.displayValuesLazy.slice(this.iRowData, this.iRowData + this.itemPerPage);
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
                data: resData,
                position: list_pos
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
    pageChangeEvent(event) {
        this.setCurrent(event.pageIndex);
    }
    static ɵfac = function ListRendererComponentV2_Factory(t) { return new (t || ListRendererComponentV2)(i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.WfeStepLoaderService), i0.ɵɵdirectiveInject(i6.CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ListRendererComponentV2, selectors: [["app-list-renderer-v2"]], inputs: { sectionData: "sectionData", stepId: "stepId", templateId: "templateId", type: "type", rowData: "rowData", rootData: "rootData", childList: "childList" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["cellData", ""], ["cellDataLoading", ""], ["elseField", ""], [4, "ngIf"], ["class", "filter-container", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary btn-sm mb-1", "title", "Column Filter", 3, "click", 4, "ngIf"], ["class", "show-hide-container col-3 mt-20 d-none", 3, "id", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "filter-container"], ["floatLabel", "never"], ["filterTxt", "", "matInput", "", 3, "ngModelChange", "keyup", "ngModel", "placeholder"], ["type", "button", "title", "Column Filter", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [1, "show-hide-container", "col-3", "mt-20", "d-none", 3, "id"], ["class", "text-secondary m-2", 4, "ngIf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger m-2", 4, "ngIf"], ["mat-button", "", 1, "btn", "btn-outline-primary", "m-2", 3, "click"], ["mat-button", "", 1, "btn", "btn-primary", "m-2", 3, "click"], [1, "text-secondary", "m-2"], ["cdkDrag", "", 1, "example-box", 3, "ngClass"], ["class", "w-100 drag-content", 4, "ngIf"], ["class", "w-100 drag-content p-1", 4, "ngIf"], [1, "w-100", "drag-content"], [3, "ngModelChange", "ngModel", "disabled"], [1, "w-100", "drag-content", "p-1"], [1, "text-danger", "m-2"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["class", "chiplayout", 4, "ngIf"], [1, "chiplayout"], ["class", "chipspace", 4, "ngFor", "ngForOf"], [1, "chipspace"], [1, "chipcss"], [1, "chipdeletecss", 3, "click"], ["title", "Previous", 1, "move-ctrl", "previous", 3, "click"], ["class", "list-conatianer data-row", 4, "ngFor", "ngForOf"], ["title", "Next", 1, "move-ctrl", "next", 3, "click"], [1, "list-conatianer", "data-row"], [3, "click", "keyup.enter"], [1, "list-checkbox-container"], ["type", "checkbox", 1, "list-checkbox", 3, "change", "name", "id", "checked", "disabled"], [1, "custom-list-checkbox", 3, "for"], [1, "list-radio-container"], ["type", "radio", "name", "radio", 1, "list-radio", 3, "ngModelChange", "change", "id", "ngModel", "value", "disabled"], [1, "custom-list-radio", 3, "for"], [4, "ngIf", "ngIfElse"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["role", "button", 3, "click"], [1, "no-data-info", "text-center", "my-5"], ["class", "list-conatianer", 4, "ngFor", "ngForOf"], [1, "list-conatianer"], ["style-paginator", "", "showFirstLastButtons", "", 3, "length", "pageSize", "showTotalPages", "pageSizeOptions", "page", 4, "ngIf"], ["style-paginator", "", "showFirstLastButtons", "", 3, "page", "length", "pageSize", "showTotalPages", "pageSizeOptions"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "rootData", "rowData", "sectionData", "templateId", "type", "childList"], [1, "card__label", "loading"], [1, "card__text", "loading"], [1, "card__menu", "loading"], [1, "card__image", "loading"], [1, "card__picker", "loading"], [1, "card__button", "loading"], [1, "card__link", "loading"], [1, "card__table", "loading"], [1, "card__list", "loading"]], template: function ListRendererComponentV2_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ListRendererComponentV2_ng_container_0_Template, 10, 8, "ng-container", 3)(1, ListRendererComponentV2_ng_template_1_Template, 15, 16, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, ListRendererComponentV2_ng_template_3_Template, 10, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [ListRendererComponentV2, MatFormFieldModule, i11.MatFormField, MatInputModule, i12.MatInput, MatCheckboxModule, i13.MatCheckbox, NgStyle, NgSwitch, CommonModule, i14.NgClass, i14.NgComponentOutlet, i14.NgForOf, i14.NgIf, i14.NgTemplateOutlet, i14.NgSwitchCase, i14.AsyncPipe, FormsModule, i15.DefaultValueAccessor, i15.RadioControlValueAccessor, i15.NgControlStatus, i15.NgModel, YouTubePlayerModule, CdkDropList, CdkDrag, StylePaginatorDirective, MatPaginatorModule, i16.MatPaginator], styles: [".chipcss[_ngcontent-%COMP%]{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss[_ngcontent-%COMP%]{color:red}.chiplayout[_ngcontent-%COMP%]{display:flex}.chipspace[_ngcontent-%COMP%]{margin-right:5px}.cee-list-detail[_ngcontent-%COMP%]{display:none}.cee-list-detail.cee-expanded-row[_ngcontent-%COMP%]{display:block}.list-item[_ngcontent-%COMP%]{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item[_ngcontent-%COMP%]{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:_ngcontent-%COMP%_fadein 2s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0}to{opacity:1}}.move-ctrl[_ngcontent-%COMP%]{float:left;width:15%;text-align:center}.card__title[_ngcontent-%COMP%]{padding:8px;font-size:22px;font-weight:700}.card__title.loading[_ngcontent-%COMP%]{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__description.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__label.loading[_ngcontent-%COMP%]{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__text.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu[_ngcontent-%COMP%]{display:inline;padding:8px;font-size:16px}.card__menu.loading[_ngcontent-%COMP%]{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;padding:8px;height:100%}.card__image.loading[_ngcontent-%COMP%]{height:300px;margin:1rem;width:400px}.card__picker[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__picker.loading[_ngcontent-%COMP%]{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__button.loading[_ngcontent-%COMP%]{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading[_ngcontent-%COMP%]{position:relative;background-color:#e2e2e2}.loading[_ngcontent-%COMP%]:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:_ngcontent-%COMP%_loading .8s infinite}@keyframes _ngcontent-%COMP%_loading{to{transform:translate(100%)}}.data-bar[_ngcontent-%COMP%]{margin-bottom:12px;height:100px;width:100px}.data-row[_ngcontent-%COMP%]{height:50px;width:500px}.data-row[_ngcontent-%COMP%], .data-row-second[_ngcontent-%COMP%]{border:1px solid black}.data-container[_ngcontent-%COMP%]{width:16.667%;height:100px;text-align:center}.show-in-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}.datas-list[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]{min-width:100px}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{color:#00f;cursor:pointer}.show-hide-container[_ngcontent-%COMP%]{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list[_ngcontent-%COMP%]{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.drag-icon[_ngcontent-%COMP%]{position:relative}.drag-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:move}i.disable[_ngcontent-%COMP%]{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box[_ngcontent-%COMP%]{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ListRendererComponentV2, [{
        type: Component,
        args: [{ selector: 'app-list-renderer-v2', standalone: true, imports: [MatFormFieldModule, MatInputModule, MatCheckboxModule, NgStyle, NgSwitch, CommonModule, FormsModule, YouTubePlayerModule, CdkDropList, CdkDrag, StylePaginatorDirective, MatPaginatorModule], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<div *ngIf=\"showFilter\" class=\"filter-container\">\r\n\t\t<mat-form-field floatLabel=\"never\">\r\n\t\t\t<input [(ngModel)]=\"filterTxt\" filterTxt matInput (keyup)=\"applyFilter()\" placeholder=\"{{filterPlaceholderText}}\">\r\n\t\t</mat-form-field>\r\n\t</div>\r\n\t<!-- ################## Show Hide & Rearrange Column Filter #################### -->\r\n    <div><button type=\"button\" class=\"btn btn-secondary btn-sm mb-1\" title=\"Column Filter\" *ngIf=\"columnFilterType.indexOf('none') == -1\" (click)=\"showHideFilter('show-hide-list-container-',sectionData.unique_id)\">\u2630</button></div>\r\n    <div id=\"show-hide-list-container-{{sectionData.unique_id}}\" class=\"show-hide-container col-3 mt-20 d-none\" *ngIf=\"columnFilterType.indexOf('none') == -1\">\r\n        <div><label *ngIf=\"sectionData.field_label\" class=\"text-secondary m-2\">{{sectionData.field_label}} Setting</label></div>\r\n        <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">  \r\n            <div class=\"example-box\" [ngClass]=\"{'d-none': !columnShowHideRearrange[i].isVisible}\" *ngFor=\"let f of columnShowHideRearrange; let i = index\" cdkDrag>\r\n                <div class=\"w-100 drag-content\" *ngIf=\"columnFilterType.indexOf('showhide') != -1\">\r\n                    <mat-checkbox [(ngModel)]=\"columnShowHideRearrange[i].showColumn\" [disabled]=\"columnShowHideRearrange[i].isMandatory\">{{f.field_label}}</mat-checkbox>  \r\n                </div>\r\n                <div class=\"w-100 drag-content p-1\" *ngIf=\"columnFilterType.indexOf('showhide') == -1\">\r\n                    <label>{{f.field_label}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div><label *ngIf=\"filterErrorMsg\" class=\"text-danger m-2\">{{filterErrorMsg}}</label></div>\r\n        <button mat-button class=\"btn btn-outline-primary m-2\" (click)=\"resetRestructuring()\">Cancel</button>\r\n        <button mat-button class=\"btn btn-primary m-2\" (click)=\"applyRestructuring()\">Save</button>\r\n    </div>\r\n\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t{{message.message_text}}\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div *ngIf=\"chipsDisplay\" class=\"chiplayout\">\r\n\t\t\t<div *ngFor=\"let chipArray of chipsArray\" class=\"chipspace\">\r\n\t\t\t\t<span class=\"chipcss\">\r\n\t\t\t\t\t{{ chipArray.keyName }} <span class=\"chipdeletecss\" (click)=\"deleteChips(chipArray)\">x</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"list-loader {{listLoading ? 'list-pending':'list-loaded'}}\"></div>\r\n\t\t<ng-container\r\n\t\t\t*ngIf=\"additionalParameters['ShowCarousel'] && additionalParameters['ShowCarousel'].toLowerCase() == 'true'\">\r\n\t\t\t<div class=\"move-ctrl previous\" title=\"Previous\" (click)=\"previous()\">&lt;</div>\r\n\t\t\t<ng-container *ngFor=\"let data of rowDataShown; index as pos\" class=\"list-conatianer data-row\">\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Multi-Select-V2'\">\r\n\t\t\t\t\t<div class=\"list-checkbox-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"checkbox\"\r\n\t\t\t\t\t\t\t[name]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\tclass=\"list-checkbox\" (change)=\"list_change(data, $event.target.checked, pos)\"\r\n\t\t\t\t\t\t\t[checked]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['rowData']['value'] == '1' : data[primaryKeyVal] == checkedItems[pos]\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.checkbox ? !data.fields[selectedObj.checkbox]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-checkbox\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos}}\">{{selectedObj.checkbox\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.checkbox]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Single-Select-V2'\">\r\n\t\t\t\t\t<div class=\"list-radio-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"radio\" name=\"radio\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos\"\r\n\t\t\t\t\t\t\tclass=\"list-radio\" [(ngModel)]=\"radioValue\" [value]=\"selectedObj.radio ? pos: data[primaryKeyVal]\"\r\n\t\t\t\t\t\t\t(change)=\"list_change(data, $event.target.checked)\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.radio ? !data.fields[selectedObj.radio]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-radio\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos}}\">{{selectedObj.radio\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.radio]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"carousel-item list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} {{type == 'List-Multi-Select-V2' ? (storeData.includes(data[primaryKeyVal])? 'list-item-checked' : 'list-item-unchecked') : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable-V2' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\t\t\t\t\t\t\t<button role=\"button\" (click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t\t<div class=\"move-ctrl next\" title=\"Next\" (click)=\"next()\">&gt;</div>\r\n\t\t</ng-container>\r\n\t\t<ng-container\r\n\t\t\t*ngIf=\"!additionalParameters['ShowCarousel'] || (additionalParameters['ShowCarousel'] && additionalParameters['ShowCarousel'].toLowerCase() != 'true')\">\r\n\t\t\t<ng-container *ngFor=\"let data of displayValuesLazy; index as pos\" class=\"list-conatianer data-row\">\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Multi-Select-V2'\">\r\n\t\t\t\t\t<div class=\"list-checkbox-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"checkbox\"\r\n\t\t\t\t\t\t\t[name]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos\"\r\n\t\t\t\t\t\t\tclass=\"list-checkbox\" (change)=\"list_change(data, $event.target.checked, pos)\"\r\n\t\t\t\t\t\t\t[checked]=\"selectedObj.checkbox ? data.fields[selectedObj.checkbox]['rowData']['value'] == '1' : data[primaryKeyVal] == checkedItems[pos]\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.checkbox ? !data.fields[selectedObj.checkbox]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-checkbox\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.checkbox ? data.fields[selectedObj.checkbox]['unique_id'] +'_' + pos : 'check_' + pos}}\">{{selectedObj.checkbox\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.checkbox]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"type == 'List-Single-Select-V2'\">\r\n\t\t\t\t\t<div class=\"list-radio-container\">\r\n\t\t\t\t\t\t<input [attr.aria-label]=\"'Order '+ pos \" type=\"radio\" name=\"radio\"\r\n\t\t\t\t\t\t\t[id]=\"selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos\"\r\n\t\t\t\t\t\t\tclass=\"list-radio\" [(ngModel)]=\"radioValue\" [value]=\"selectedObj.radio ? pos: data[primaryKeyVal]\"\r\n\t\t\t\t\t\t\t(change)=\"list_change(data, $event.target.checked)\"\r\n\t\t\t\t\t\t\t[disabled]=\"selectedObj.radio ? !data.fields[selectedObj.radio]['rowData']['editable'] : false\" />\r\n\t\t\t\t\t\t<label class=\"custom-list-radio\"\r\n\t\t\t\t\t\t\tfor=\"{{selectedObj.radio ? data.fields[selectedObj.radio]['unique_id']+'_' + pos : 'radio' + '_' +pos}}\">{{selectedObj.radio\r\n\t\t\t\t\t\t\t? data.fields[selectedObj.radio]['field_label'] : ''}}</label>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} {{type == 'List-Multi-Select-V2' ? (storeData.includes(data[primaryKeyVal])? 'list-item-checked' : 'list-item-unchecked') : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable-V2' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\t\t\t\t\t\t\t<button role=\"button\" (click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<!--\r\n\t<div class=\"text-center my-5\" [hidden]=\"!showLoading\">\r\n\t\t<div class=\"lds-ripple\">\r\n\t\t\t<div></div>\r\n\t\t\t<div></div>\r\n\t\t</div>\r\n\t</div> -->\r\n\r\n\t<ng-container *ngIf=\"noDataFound && !showLoading && !showSkeletonLoader && showNoDataFoundLabel\">\r\n\t\t<h5 class=\"no-data-info text-center my-5\">{{noDataFoundLabel}}</h5>\r\n\t</ng-container>\r\n\r\n\t<ng-container\r\n\t\t*ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader'] && additionalParameters['ShowSkeletonLoader'].toLowerCase() == 'true'\">\r\n\t\t<ng-container *ngFor=\"let data of listElements; index as pos\" class=\"list-conatianer\">\r\n\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}}\">\r\n\t\t\t\t<ng-container *ngFor=\"let field of sectionData.fields; index as position\">\r\n\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellDataLoading; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<!-- <div class=\"pagination-container\" *ngIf=\"showPagination && autoPagination\">\r\n\t\t\t<p class=\"pagination-text-container\">{{getRangeLabel}}</p>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationFirstLabel\" [disabled]=\"pagination.currentPage === 1\"\r\n\t\t\t\t(click)=\"setCurrent(1)\" class=\"pagination-btn-first\" aria-label=\"Select First\">{{paginationFirstLabel}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === 1\" (click)=\"paginationPrevious()\"\r\n\t\t\t\tclass=\"pagination-btn-previous\" aria-label=\"Select Previous\">{{paginationPreviousLabel}}</button>\r\n\t\t\t<button *ngFor=\"let pageNumber of pages\" role=\"button\" [disabled]=\"pageNumber === '...'\"\r\n\t\t\t\t(click)=\"setCurrent(pageNumber)\"\r\n\t\t\t\tclass=\"pagination-btn-page {{pageNumber === pagination.currentPage?'active':''}}\"\r\n\t\t\t\tattr.aria-label=\"Select page {{pageNumber}}\">{{pageNumber}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === pagination.pageCount\" (click)=\"paginationNext()\"\r\n\t\t\t\tclass=\"pagination-btn-next\" aria-label=\"Select Next\">{{paginationNextLabel}}</button>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationLastLabel\" [disabled]=\"pagination.currentPage === pagination.pageCount\"\r\n\t\t\t\t(click)=\"setCurrent(pagination.pageCount)\" class=\"pagination-btn-last\"\r\n\t\t\t\taria-label=\"Select Last\">{{paginationLastLabel}}</button>\r\n\t\t\t<select (change)=\"onPaginationCountChange(); setPaginationCount()\"\r\n\t\t\t\t[attr.aria-label]=\"'Select no of items to be displayed'\" [(ngModel)]=\"pagination.currentItemCount\"\r\n\t\t\t\tclass=\"pagination-count-selector\">\r\n\t\t\t\t<option [ngValue]=\"data\" [selected]=\"data == pagination.currentItemCount\"\r\n\t\t\t\t\t*ngFor=\"let data of pagination.pageItems\">\r\n\t\t\t\t\t{{data}}</option>\r\n\t\t\t</select>\r\n\t\t</div> -->\r\n\t\t<mat-paginator *ngIf=\"showPagination && autoPagination\" style-paginator (page)=\"pageChangeEvent($event)\" [length]=\"pagination.itemCount\" [pageSize]=\"pagination.currentItemCount\"\r\n\t\t\t[showTotalPages]=\"3\" [pageSizeOptions]=\"pagination.pageItems\" showFirstLastButtons>\r\n\t\t</mat-paginator>\r\n\t</ng-container>\r\n</ng-container>\r\n\r\n<ng-template #cellData let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-label [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-label> -->\r\n\t\t\t<!-- <ng-template #elseBlock>\r\n\t\t\t\t<ng-container\r\n\t\t\t\t\t*ngIf=\"\">\r\n\t\t\t\t\t<ng-container\r\n\t\t\t\t\t\t*ngIf=\"field.field_label.includes('((dynamic))') || (field.field_label_config && field.field_label_config.includes('((dynamic))')) ; else notDynamic\">\r\n\t\t\t\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t\t\t\t[innerHTML]=\"setDynamicLabelUtil.getDynamicValue(field, data).field_label\"></div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<ng-template #notDynamic>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t{{field.field_label}}</div>\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-template> -->\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, keepState: true,\r\n\t\t\t\tprimaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-textfield [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [rootData]=\"rootData\" [fieldData]=\"field\" [keepState]=\"true\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-textfield> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-menu [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-menu> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-image [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-image> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-picker [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-picker> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-button [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-button> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-link [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-link> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Video'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-video [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-video> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table-V2'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-table-v2 [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\"\r\n\t\t\t\t[type]=\"field.field_type\">\r\n\t\t\t</app-cee-table-v2> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"['List-V2', 'List-Expandable-V2'].includes(field.field_type) ? field.field_type : ''\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<app-list-renderer-v2 [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"field['rowData']\" [sectionData]=\"field\" [templateId]=\"templateId\"\r\n\t\t\t\t[type]=\"field.field_type\" [childList]=\"field['childList']\">\r\n\t\t\t\t</app-list-renderer-v2>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n\t\t\tToogle Button Container\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Accordion'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-accordion-renderer [stepId]=\"stepId\" [rootData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-accordion-renderer> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'DynamicForm'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-dynamic-form [sectionData]=\"field\" [rowData]=\"field['rowData']\" class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\" [stepId]=\"stepId\" [rootData]=\"rootData\">\r\n\t\t\t</app-dynamic-form> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<!-- Attachments -->\r\n\t\t<ng-container *ngSwitchCase=\"'Attachments'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-attachments [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\" [rootData]=\"rootData\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-attachments> -->\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n\r\n<ng-template #cellDataLoading let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"card__label loading\"></div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"card__text loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"card__menu loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"card__image loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"card__picker loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"card__button loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"card__link loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table-V2'\">\r\n\t\t\t<div class=\"card__table loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'List-V2'\">\r\n\t\t\t<div class=\"card__list loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n", styles: [".chipcss{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss{color:red}.chiplayout{display:flex}.chipspace{margin-right:5px}.cee-list-detail{display:none}.cee-list-detail.cee-expanded-row{display:block}.list-item{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:fadein 2s}@keyframes fadein{0%{opacity:0}to{opacity:1}}.move-ctrl{float:left;width:15%;text-align:center}.card__title{padding:8px;font-size:22px;font-weight:700}.card__title.loading{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description{padding:8px;font-size:16px}.card__description.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label{padding:8px;font-size:16px}.card__label.loading{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text{padding:8px;font-size:16px}.card__text.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu{display:inline;padding:8px;font-size:16px}.card__menu.loading{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image img{width:100%;padding:8px;height:100%}.card__image.loading{height:300px;margin:1rem;width:400px}.card__picker{padding:8px;font-size:16px}.card__picker.loading{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button{padding:8px;font-size:16px}.card__button.loading{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading{position:relative;background-color:#e2e2e2}.loading:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:loading .8s infinite}@keyframes loading{to{transform:translate(100%)}}.data-bar{margin-bottom:12px;height:100px;width:100px}.data-row{height:50px;width:500px}.data-row,.data-row-second{border:1px solid black}.data-container{width:16.667%;height:100px;text-align:center}.show-in-row{flex-direction:row;box-sizing:border-box;display:flex}.datas-list .data-container{min-width:100px}.previous,.next{color:#00f;cursor:pointer}.show-hide-container{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container{width:100%;display:flex;align-items:center}.drag-icon{position:relative}.drag-icon i{cursor:move}i.disable{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ListRendererComponentV2, { className: "ListRendererComponentV2", filePath: "lib\\components\\list-renderer-v2\\list-renderer-v2.component.ts", lineNumber: 58 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC1yZW5kZXJlci12Mi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9saXN0LXJlbmRlcmVyLXYyL2xpc3QtcmVuZGVyZXItdjIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbGlzdC1yZW5kZXJlci12Mi9saXN0LXJlbmRlcmVyLXYyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEwRCxNQUFNLGVBQWUsQ0FBQztBQUl6RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFPbkUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDN0QsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbEUsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDOUQs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QUF1QixFQUZ0QixrQkFBa0Isb0JBQUUsY0FBYyxnQkFBRSxpQkFBaUIsbUJBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxZQUFZLG9IQUFFLFdBQVcsNkZBQUUsbUJBQW1CLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSx1QkFBdUIsRUFBRSxrQkFBa0I7O2lGQUU1TCx1QkFBdUI7Y0FQbkMsU0FBUzsyQkFDSSxzQkFBc0IsY0FDcEIsSUFBSSxXQUdQLENBQUMsa0JBQWtCLEVBQUUsY0FBYyxFQUFFLGlCQUFpQixFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLHVCQUF1QixFQUFFLGtCQUFrQixDQUFDOzZUQU83TCxXQUFXO2tCQUFuQixLQUFLO1lBQ1csTUFBTTtrQkFBdEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDVyxJQUFJO2tCQUFwQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ1csUUFBUTtrQkFBeEIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7O2tGQVhHLHVCQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lciwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNldEFQSUNhbGxiYWNrRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3NldC1hcGktY2FsbGJhY2stZGF0YS11dGlsJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXV0aWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9hbGVydC1tb2RhbC9hbGVydC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXRkVFdmVudExpc3RIYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWV2ZW50LWxpc3QtaGFuZGxlci11dGlsJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgQVBJS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1rZXktdXRpbCc7XHJcbmltcG9ydCB7IEVtcHR5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2VtcHR5LXV0aWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGFiZWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHluYW1pYy1sYWJlbC11dGlsJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFlvdVR1YmVQbGF5ZXJNb2R1bGUgfSBmcm9tICdAYW5ndWxhci95b3V0dWJlLXBsYXllcic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG4vLyBpbXBvcnQgeyBDZWVWaWRlb0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXZpZGVvL2NlZS12aWRlby5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVBdHRhY2htZW50c0NvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWF0dGFjaG1lbnRzL2NlZS1hdHRhY2htZW50cy5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVMYWJlbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVUZXh0ZmllbGRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10ZXh0ZmllbGQvY2VlLXRleHRmaWVsZC5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbWVudS9jZWUtbWVudS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVJbWFnZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWltYWdlL2NlZS1pbWFnZS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1waWNrZXIvY2VlLXBpY2tlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlLCBOZ1N3aXRjaCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbi8vIGltcG9ydCB7IENlZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWJ1dHRvbi9jZWUtYnV0dG9uLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZUxpbmtDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1saW5rL2NlZS1saW5rLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRhYmxlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGFibGUvY2VlLXRhYmxlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IEFjY29yZGlvblJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYWNjb3JkaW9uLXJlbmRlcmVyL2FjY29yZGlvbi1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuLy8gaW1wb3J0IHsgQ2VlVGFibGVWMkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlLXYyL2NlZS10YWJsZS12Mi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdHlsZVBhZ2luYXRvckRpcmVjdGl2ZSB9IGZyb20gJy4vcGFnaW5hdG9yU3R5bGVEaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBkZWZlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQge1xyXG4gICAgQ2RrRHJhZyxcclxuICAgIENka0RyYWdEcm9wLFxyXG4gICAgQ2RrRHJvcExpc3QsXHJcbiAgICBtb3ZlSXRlbUluQXJyYXksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCB7IE1hdENoZWNrYm94TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hlY2tib3gnO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWxpc3QtcmVuZGVyZXItdjInLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9saXN0LXJlbmRlcmVyLXYyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2xpc3QtcmVuZGVyZXItdjIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBNYXRDaGVja2JveE1vZHVsZSwgTmdTdHlsZSwgTmdTd2l0Y2gsIENvbW1vbk1vZHVsZSwgRm9ybXNNb2R1bGUsIFlvdVR1YmVQbGF5ZXJNb2R1bGUsIENka0Ryb3BMaXN0LCBDZGtEcmFnLCBTdHlsZVBhZ2luYXRvckRpcmVjdGl2ZSwgTWF0UGFnaW5hdG9yTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgTGlzdFJlbmRlcmVyQ29tcG9uZW50VjIgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XHJcblxyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG5cclxuICAgIEBJbnB1dCgpIHNlY3Rpb25EYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgdGVtcGxhdGVJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSB0eXBlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBjaGlsZExpc3Q6IGFueSA9IHt9O1xyXG5cclxuICAgIHBhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgcGFnZUl0ZW1zOiBbMTAsIDE1LCAyMF0sXHJcbiAgICAgICAgY3VycmVudEl0ZW1Db3VudDogMTAsXHJcbiAgICAgICAgc2hvd05leHQ6IHRydWUsXHJcbiAgICAgICAgc2hvd1ByZXZpb3VzOiBmYWxzZSxcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBwYWdlQ291bnQ6IDEsXHJcbiAgICAgICAgaXRlbUNvdW50OiAxLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgZW5kSW5kZXg6IDAsXHJcbiAgICAgICAgcGFnaW5hdGlvblJhbmdlOiA5XHJcbiAgICB9O1xyXG4gICAgc2hvd1BhZ2luYXRpb24gPSBmYWxzZTtcclxuICAgIGF1dG9QYWdpbmF0aW9uID0gdHJ1ZTtcclxuICAgIHNob3dGaWx0ZXIgPSBmYWxzZTtcclxuICAgIGZpbHRlclBsYWNlaG9sZGVyVGV4dCA9ICdGaWx0ZXInO1xyXG4gICAgY2FuUmVmcmVzaCA9IGZhbHNlO1xyXG5cclxuICAgIGRpc3BsYXlWYWx1ZXM6IGFueSA9IFtdO1xyXG4gICAgZGlzcGxheVZhbHVlc0xhenk6IGFueSA9IFtdO1xyXG4gICAgbGF6eUludGVydmFsOiBhbnkgPSBbXTtcclxuICAgIHNlYXJjaERhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKFtdKTtcclxuICAgIHNob3dMb2FkaW5nID0gdHJ1ZTtcclxuICAgIG5vRGF0YUZvdW5kID0gdHJ1ZTtcclxuICAgIHNob3dOb0RhdGFGb3VuZExhYmVsID0gdHJ1ZTtcclxuICAgIHNob3dTa2VsZXRvbkxvYWRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBsaXN0RWxlbWVudHM6IGFueSA9IFtdO1xyXG4gICAgcmFkaW9WYWx1ZTogYW55O1xyXG4gICAgY2hlY2tlZEl0ZW1zOiBhbnkgPSBbXTtcclxuICAgIHN0b3JlRGF0YTogYW55ID0gW107XHJcbiAgICBwcmltYXJ5S2V5VmFsID0gJyc7XHJcbiAgICBzaG93RXJyb3JPbk5leHQgPSBmYWxzZTtcclxuICAgIG1lc3NhZ2VzID0gW107XHJcbiAgICAvLyBBcHAgRGF0YSBvZiB0aGUgbGlzdCBjZWxsXHJcbiAgICBsaXN0Q2VsbEFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBmaWVsZExhYmVsOiAnJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgZGF0YUZvcm1hdFNlcGFyYXRvcjogJycsXHJcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIGlzVmFsaWQ6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgYXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICAgIGZpZWxkTGFiZWw6ICcnLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICB0b3RhbENvdW50QXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICAgIGZpZWxkTGFiZWw6ICcnLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGlwc0FycmF5OiBhbnkgPSBbXTtcclxuICAgIGNoaXBzRGlzcGxheSA9IGZhbHNlO1xyXG4gICAgY2hpcHNBcGlLZXlUb0Rpc3BsYXk6IGFueSA9IG51bGw7XHJcbiAgICBjb250ZXh0QXJyYXk6IGFueSA9IFtdO1xyXG4gICAgZmllbGRJZE1hcEFwaUtleTogb2JqZWN0ID0ge307IC8vIHRvIG1hcCB0aGUgYXBpIGZpZWxkIGlkIGFuZCB0aGUgYXBpIGtleSBvZiBhIHNpbmdsZSBmaWVsZFxyXG5cclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXJzID0ge307XHJcblxyXG4gICAgc2V0QVBJS2V5VXRpbDogU2V0QVBJQ2FsbGJhY2tEYXRhO1xyXG4gICAgZXZlbnRMaXN0SGFuZGxlcjogV0ZFRXZlbnRMaXN0SGFuZGxlcjtcclxuICAgIGFwaUtleVV0aWw6IEFQSUtleVV0aWw7XHJcbiAgICAvLyBhcGlTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcclxuICAgIHZhcmlhYmxlT2JqID0ge307XHJcbiAgICBjb25kaXRpb25hbFV0aWw6IENvbmRpdGlvbmFsVXRpbDtcclxuICAgIGZpZWxkRGF0YTogYW55O1xyXG4gICAgaXNNYW5kYXRvcnkgPSBmYWxzZTtcclxuICAgIGlzX2Jvb3RzdHJhcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgYmxvY2tSZW5kZXJlZERhdGE6IGFueTtcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcbiAgICBmaWx0ZXJLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZmlsdGVyQVBJS2V5OiBzdHJpbmc7XHJcbiAgICBwYWdpbmF0aW9uU2hvd2luZ1Jlc3VsdEhpbnQ6IHN0cmluZyA9ICcldmFsdWUlJztcclxuICAgIGhpZGVuUm93czogc3RyaW5nO1xyXG4gICAgZXhwYW5kZWRFbGVtZW50O1xyXG4gICAgZXhwYW5kVGl0bGU6IHN0cmluZyA9ICdTaG93JztcclxuICAgIGNvbGxhcHNlVGl0bGU6IHN0cmluZyA9ICdIaWRlJztcclxuICAgIGZpbHRlclR4dDogc3RyaW5nID0gJyc7XHJcbiAgICBpc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIHBhZ2luYXRpb25OZXh0TGFiZWw6IHN0cmluZyA9ICdOZXh0JztcclxuICAgIHBhZ2luYXRpb25QcmV2aW91c0xhYmVsOiBzdHJpbmcgPSAnUHJldmlvdXMnO1xyXG4gICAgcGFnZXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmaWVsZFZhbHVlOiBhbnk7XHJcbiAgICBzZXJ2ZXJQYWdpbmF0aW9uID0gZmFsc2U7IC8vIHNldCB0aGlzIHRvIHRydWUgd2hlbiBQYWdpbmF0aW9uIFR5cGUgaXMgc2VydmVyXHJcbiAgICBzZXJ2ZXJQYWdpbmF0aW9uS2V5cyA9IFtdO1xyXG4gICAgY2hlY2tFbXB0eTogRW1wdHlVdGlsO1xyXG4gICAgc2V0RHluYW1pY0xhYmVsVXRpbDogRHluYW1pY0xhYmVsVXRpbDtcclxuICAgIC8vIHRvIG92ZXJ3cml0ZSB0aGUgcHJvcGVydHkgb2YgY2hlY2sgYm94IGFuZCByYWRpbyBpbiBjYXNlIG9mIGxpc3Qgc2luZ2xlIHNlbGVjdCBhbmQgbXVsdGkgc2VsZWN0XHJcbiAgICBzZWxlY3RlZE9iaiA9IHtcclxuICAgICAgICByYWRpbzogbnVsbCxcclxuICAgICAgICBjaGVja2JveDogbnVsbCxcclxuICAgIH07XHJcbiAgICBub0RhdGFGb3VuZExhYmVsOiBzdHJpbmcgPSAnbm8gcmVjb3JkIGZvdW5kLic7XHJcbiAgICBleHBhbmRhYmxlRGF0YTogYW55O1xyXG4gICAgaXNMaXN0Q2VsbCA9IGZhbHNlOyAvLyBzZXQgdHJ1ZSBpZiB0aGUgZmllbGRzIGluIGdlbmVyaWMgYmxvY2sgaXMgTGlzdENlbGxcclxuICAgIGxpc3RDZWxsRXZlbnRDb25maWcgPSBbXTsgLy8gc2V0IExpc3QgQ2VsbCBFdmVudCBDb25maWdcclxuICAgIGRpc3BsYXllZFVuaXF1ZUlkcyA9IFtdOyAvLyB1bmlxdWUgSURzIGFycmF5IHdoZW4gdGhlIHVzZXIgY29uZmlndXJlcyBhIGxpc3QgY2VsbCBpbnNpZGUgdGhlIGdlbmVyaWMgYmxvY2tcclxuICAgIGxpc3RJbnRlcm5hbEFwaURhdGE6IGFueSA9IHt9O1xyXG4gICAgbGlzdExvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHJlc3VsdENvdW50QVBJS2V5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcGFnaW5hdGlvbkZpcnN0TGFiZWw6IHN0cmluZztcclxuICAgIHBhZ2luYXRpb25MYXN0TGFiZWw6IHN0cmluZztcclxuICAgIHNlbGVjdGVkUm93SW5kZXg6IG51bWJlcjtcclxuICAgIHRhYkluZGV4VmFsdWU6IG51bWJlcjtcclxuXHJcbiAgICByb3dEYXRhU2hvd246IGFueTtcclxuICAgIGlSb3dEYXRhOiBudW1iZXI7XHJcbiAgICBpdGVtUGVyUGFnZTogbnVtYmVyO1xyXG4gICAgaGFzUm93Q29uZGl0aW9uRmllbGQ6IGFueTtcclxuICAgIGh0bWxfaWQ6IGFueSA9ICcnO1xyXG5cclxuICAgIGNvbHVtbkZpbHRlclR5cGU6IHN0cmluZ1tdID0gWydub25lJ107XHJcbiAgICBjb2x1bW5TaG93SGlkZVJlYXJyYW5nZSA9IFtdO1xyXG4gICAgZmllbGREYXRhQmFjayA9IFtdO1xyXG4gICAgZmlsdGVyRXJyb3JNc2cgPSBcIlwiO1xyXG4gICAgXHJcbiAgICBjb21wb25lbnRMaXN0ID0ge307XHJcbiAgICBjb21wb25lbnRNYXAgPSB7XHJcbiAgICAgICAgbGFiZWw6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnbGFiZWwnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnbGFiZWwnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVMYWJlbENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBUZXh0ZmllbGQ6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGZpZWxkJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1RleHRmaWVsZCddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGV4dGZpZWxkL2NlZS10ZXh0ZmllbGQuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlVGV4dGZpZWxkQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGZpZWxkJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBNZW51OiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ01lbnUnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbWVudS9jZWUtbWVudS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVNZW51Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgSW1hZ2U6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnSW1hZ2UnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnSW1hZ2UnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWltYWdlL2NlZS1pbWFnZS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVJbWFnZUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ0ltYWdlJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBQaWNrZXI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1BpY2tlciddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcGlja2VyL2NlZS1waWNrZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlUGlja2VyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCdXR0b246IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnQnV0dG9uJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0J1dHRvbiddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnQnV0dG9uJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBMaW5rOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ0xpbmsnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnTGluayddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbGluay9jZWUtbGluay5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVMaW5rQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnTGluayddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgVmlkZW86IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnVmlkZW8nXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnVmlkZW8nXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXZpZGVvL2NlZS12aWRlby5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVWaWRlb0NvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1ZpZGVvJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBcIlRhYmxlLVYyXCI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnVGFibGUtVjInXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnVGFibGUtVjInXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlLXYyL2NlZS10YWJsZS12Mi5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVUYWJsZVYyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGFibGUtVjInXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEFjY29yZGlvbjogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydBY2NvcmRpb24nXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnQWNjb3JkaW9uJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2FjY29yZGlvbi1yZW5kZXJlci9hY2NvcmRpb24tcmVuZGVyZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQWNjb3JkaW9uUmVuZGVyZXJDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydBY2NvcmRpb24nXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIER5bmFtaWNGb3JtOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ0R5bmFtaWNGb3JtJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0R5bmFtaWNGb3JtJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL2R5bmFtaWMtZm9ybS9keW5hbWljLWZvcm0uY29tcG9uZW50JykudGhlbihtID0+IG0uRHluYW1pY0Zvcm1Db21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydEeW5hbWljRm9ybSddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQXR0YWNobWVudHM6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnQXR0YWNobWVudHMnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnQXR0YWNobWVudHMnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWF0dGFjaG1lbnRzL2NlZS1hdHRhY2htZW50cy5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVBdHRhY2htZW50c0NvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ0F0dGFjaG1lbnRzJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuaVJvd0RhdGEgPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbVBlclBhZ2UgPSA0O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRBUElLZXlVdGlsID0gbmV3IFNldEFQSUNhbGxiYWNrRGF0YShhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsID0gbmV3IER5bmFtaWNMYWJlbFV0aWwoYXBpRGF0YVNlcnZpY2UsIGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVXRpbCA9IG5ldyBDb25kaXRpb25hbFV0aWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdEhhbmRsZXIgPSBuZXcgV0ZFRXZlbnRMaXN0SGFuZGxlcihcclxuICAgICAgICAgICAgY2VlQXBpU2VydmljZSxcclxuICAgICAgICAgICAgcm91dGVyLFxyXG4gICAgICAgICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2csXHJcbiAgICAgICAgICAgIHNuYWNrQmFyLFxyXG4gICAgICAgICAgICBodHRwKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5VXRpbCA9IG5ldyBBUElLZXlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0VtcHR5ID0gbmV3IEVtcHR5VXRpbCgpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNfYm9vdHN0cmFwJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzX2Jvb3RzdHJhcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUNvbHVtbkNvbmZpZygpIHtcclxuICAgICAgICBsZXQgc2V0dGluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbHVtblJzdHJ1Y3R1cmluZ0NvbmZpZycpKSA6IHt9O1xyXG4gICAgICAgIGlmKHNldHRpbmcgJiYgc2V0dGluZy5oYXNPd25Qcm9wZXJ0eSh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5TaG93SGlkZVJlYXJyYW5nZSA9IHNldHRpbmdbdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UgPSBbXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZWN0aW9uRGF0YS5maWVsZHM6IFwiLCB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcylcclxuICAgICAgICAgICAgaWYodGhpcy5zZWN0aW9uRGF0YS5maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzLmZvckVhY2goKGVsZW1lbnQsaSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UucHVzaChcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRfbGFiZWw6IGVsZW1lbnQuZmllbGRfbGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IGVsZW1lbnQudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29sdW1uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNNYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWaXNpYmxlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICAgICAgaWYodGhpcy5jb2x1bW5GaWx0ZXJUeXBlLmluZGV4T2YoJ3JlYXJyYW5nZScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldFJlc3RydWN0dXJpbmcoKSB7XHJcbiAgICAgICAgbGV0IHNldHRpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sdW1uUnN0cnVjdHVyaW5nQ29uZmlnJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnKSkgOiB7fTtcclxuICAgICAgICBpZihzZXR0aW5nICYmIHNldHRpbmcuaGFzT3duUHJvcGVydHkodGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UgPSBzZXR0aW5nW3RoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jb2x1bW5TaG93SGlkZVJlYXJyYW5nZS5maWx0ZXIoYz0+IGMuc2hvd0NvbHVtbiA9PSB0cnVlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXJyb3JNc2cgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dIaWRlRmlsdGVyKCdzaG93LWhpZGUtbGlzdC1jb250YWluZXItJyx0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZClcclxuICAgIH1cclxuXHJcbiAgICBhcHBseVJlc3RydWN0dXJpbmcoKSB7XHJcbiAgICAgICAgaWYodGhpcy5jb2x1bW5TaG93SGlkZVJlYXJyYW5nZS5maWx0ZXIoYz0+IGMuc2hvd0NvbHVtbiA9PSB0cnVlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXJyb3JNc2cgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgc2V0dGluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbHVtblJzdHJ1Y3R1cmluZ0NvbmZpZycpKSA6IHt9O1xyXG4gICAgICAgICAgICBzZXR0aW5nW3RoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkXSA9IHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2U7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnLEpTT04uc3RyaW5naWZ5KHNldHRpbmcpKTtcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ29scyA9IHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UuZmlsdGVyKGM9PiBjLnNob3dDb2x1bW4gPT0gdHJ1ZSkubWFwKGVsZT0+ZWxlLnVuaXF1ZV9pZClcclxuICAgICAgICAgICAgbGV0IHJlc3R1Y3R1ZWRDb2xBcnIgPSBbXTtcclxuICAgICAgICAgICAgc2VsZWN0ZWRDb2xzLmZvckVhY2gocz0+e1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBGaWVsZERhdGEgPSB0aGlzLmZpZWxkRGF0YUJhY2suZmlsdGVyKGVsZT0+ZWxlLnVuaXF1ZV9pZCA9PSBzKTtcclxuICAgICAgICAgICAgICAgIGlmKHRlbXBGaWVsZERhdGEgJiYgdGVtcEZpZWxkRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdHVjdHVlZENvbEFyci5wdXNoKHRlbXBGaWVsZERhdGFbMF0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcyA9IHJlc3R1Y3R1ZWRDb2xBcnI7XHJcbiAgICAgICAgICAgIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGlkZUZpbHRlcignc2hvdy1oaWRlLWxpc3QtY29udGFpbmVyLScsdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXJyb3JNc2cgPSBcIlBsZWFzZSBzZWxlY3QgYXRsZWFzdCBvbmUgY29sdW1uIVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dIaWRlRmlsdGVyKHN0cmluZyxpZCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXJJZCA9IHN0cmluZyArIGlkO1xyXG4gICAgICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLmh0bWxfaWQgPyB0aGlzLnJvd0RhdGEuaHRtbF9pZCA6IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgIGxldCBmcm9tU3RvcmU7XHJcblxyXG4gICAgICAgIHRoaXMubGlzdENlbGxBcHBEYXRhLnN0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgYWRkaXRpb25hbF9wYXJhbWV0ZXJzLFxyXG4gICAgICAgICAgICBldmVudF9saXN0XHJcbiAgICAgICAgfSA9IHRoaXMuc2VjdGlvbkRhdGE7XHJcbiAgICAgICAgbGV0IGtleXMgPSBbXTtcclxuICAgICAgICBpZiAoYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiBhZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX2NvbHVtbl9maWx0ZXJfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uRmlsdGVyVHlwZSA9IHBhcmFtdGVyLnZhbHVlID8gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKSA6IFsnbm9uZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTaG93IENoaXBzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQcmltYXJ5S2V5TmFtZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpbWFyeUtleVZhbCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTaG93IFBhZ2luYXRpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQYWdpbmF0aW9uID0gcGFyYW10ZXIudmFsdWUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBWYWx1ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24ucGFnZUl0ZW1zID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiBOdW1iZXIocy50cmltKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQgPSB0aGlzLnBhZ2luYXRpb24ucGFnZUl0ZW1zWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIE5leHQgTGFiZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25OZXh0TGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdOZXh0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBQcmV2aW91cyBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblByZXZpb3VzTGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdQcmV2aW91cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gRmlyc3QgTGFiZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25GaXJzdExhYmVsID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gTGFzdCBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkxhc3RMYWJlbCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFNob3dpbmcgUmVzdWx0IEhpbnQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25TaG93aW5nUmVzdWx0SGludCA9IHBhcmFtdGVyLnZhbHVlICE9PSAnJyA/IHBhcmFtdGVyLnZhbHVlIDogJyV2YWx1ZSUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdObyBEYXRhIEZvdW5kIExhYmVsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RhdGFGb3VuZExhYmVsID0gcGFyYW10ZXIudmFsdWUgIT09ICcnID8gcGFyYW10ZXIudmFsdWUgOiAnbm8gcmVjb3JkIGZvdW5kLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9TaG93Tm9EYXRhRm91bmRMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05vRGF0YUZvdW5kTGFiZWwgPSBwYXJhbXRlci52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2hvdyBGaWx0ZXInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dGaWx0ZXIgPSBwYXJhbXRlci52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRmlsdGVyIFBsYWNlaG9sZGVyIFRleHQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclBsYWNlaG9sZGVyVGV4dCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdGaWx0ZXJLZXlzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJLZXlzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZpbHRlckFQSUtleSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQVBJS2V5ID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0hpZGVSb3dzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlblJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4cGFuZFRpdGxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLnR5cGUgPT09ICdMaXN0LUV4cGFuZGFibGUnID8gcGFyYW10ZXIudmFsdWUgOiB0aGlzLmV4cGFuZFRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFR5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlcnZlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyUGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2V0IGZyb20gc3RvcmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIudmFsdWUgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBPbmx5IHdvcmtzIGlmIHRoZSBhcGkga2V5IGlzIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIGZvciBsaXN0IHRvIHNob3cgdGhlIGRhdGEgZnJvbSBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIGhhbmRsZXIgZGF0YSBuZWVkcyB0byBiZSBzdG9yZWQgaW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIGFwaSBkYXRhIHN0b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTaW5nbGVBUElLZXkgJiYgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlLZXlzID0gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLnNlY3Rpb25EYXRhLnJlc3BvbnNlX2FwaV9rZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBpS2V5IG9mIGFwaUtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIoYXBpS2V5LnNwbGl0KCcjIycpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhbmRsZXJEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tU3RvcmUgPSBoYW5kbGVyRGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gQVBJIEtleXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3x8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbGxhcHNlVGl0bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlIDogdGhpcy5jb2xsYXBzZVRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdSZXN1bHQgQ291bnQgQVBJIEtleSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0Q291bnRBUElLZXkgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVGFiSW5kZXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkluZGV4VmFsdWUgPSBwYXJzZUludChwYXJhbXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Nhcm91c2VsSXRlbVBlclBhZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1QZXJQYWdlID0gKHBhcmFtdGVyLnZhbHVlICYmICFpc05hTihwYXJhbXRlci52YWx1ZSkpID8gcGFyc2VJbnQocGFyYW10ZXIudmFsdWUpIDogNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1lYW5zIGl0IGlzIGEgZmllbGQgbm90IGEgc2VjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkge1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHBhZ2luYXRpb24ga2V5cyBmb3Igc2VydmVyIGRyaXZlbiBsaXN0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIDAgdGgga2V5IGZvciB0b3RhbCBObyBvZiB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIC8vIDFzdCBrZXkgZm9yIHBhZ2UgbnVtYmVyXHJcbiAgICAgICAgICAgICAgICAvLyAybmQga2V5IGZvciBwYWdlIHNpemVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24gJiYga2V5cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnJ5IHBhZ2luYXRpb24gYXBpIGtleXMgYXJlIG5vdCBjb25maWd1cmVkIHByb3Blcmx5JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdGb3JtYXQgc2hvdWxkIGJlOicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGFwaV9rZXlfZm9yX3RvdGFsX251bWJlcl9vZl92YWx1ZXM+fHw8YXBpX2tleV9mb3JfcGFnZV9udW1iZXI+fHw8YXBpX2tleV9mb3JfcGFnZV9zaXplPicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5cyA9IGtleXMubWFwKChzdHIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc3RyLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluZGV4ID09PSAyID8gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQgOiAnMSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRMaXN0ICYmIE9iamVjdC5rZXlzKHRoaXMuY2hpbGRMaXN0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKHRoaXMuY2hpbGRMaXN0KTtcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzID0gdGhpcy5jaGlsZExpc3QuYmxvY2tfZmllbGRzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKHRoaXMuY2hpbGRMaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcyA9IHRoaXMuZmllbGREYXRhQmFjayA9IHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sdW1uQ29uZmlnKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVJlc3RydWN0dXJpbmcoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydkZWZhdWx0X3ZhbHVlJ10pLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YSA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcyA9IHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKCF0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydkZWZhdWx0X3ZhbHVlJ10pLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzID0gdGhpcy5maWVsZERhdGFCYWNrID0gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb2x1bW5Db25maWcoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5UmVzdHJ1Y3R1cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2Uuc3RlcExvYWRlckVtaXR0ZXIuZW1pdCh7XCJibG9ja0lkXCI6IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2RlZmF1bHRfdmFsdWUnXX0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEVsZW1lbnRzID0gQXJyYXkodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQpO1xyXG4gICAgICAgICAgICAvLyBjaGVjayBpZiB0aGUgbGlzdCBoYXMgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhICYmIHRoaXMuc2VjdGlvbkRhdGEucG9zc2libGVfdmFsdWVzICYmIHRoaXMuc2VjdGlvbkRhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TGlzdERhdGEodGhpcy5tYXBQb3NzaWJsZVZhbHVlcyh0aGlzLnNlY3Rpb25EYXRhLnBvc3NpYmxlX3ZhbHVlcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgRXhwYW5kYWJsZSBmaWVsZCBkZXRhaWxzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVuUm93cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRhYmxlRGF0YSA9IGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKHRoaXMuaGlkZW5Sb3dzKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIGNoaWxkIGdlbmVyaWMgYmxvY2sgZmllbGRzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZXhwYW5kYWJsZURhdGEuYmxvY2tfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kZWZhdWx0X3ZhbHVlID0gZmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihhcCA9PiBhcC5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRlZmF1bHRfdmFsdWUubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZERhdGEgPSBhd2FpdCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZShmaWVsZC5kZWZhdWx0X3ZhbHVlWzBdLnZhbHVlKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGlsZF9maWVsZHMgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGNoaWxkRGF0YSkuYmxvY2tfZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXRyaWV2ZUJsb2NrRmllbGRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSAhPT0gJ0xpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlUHJpbWFyeUtleSgnT05fTE9BRCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnc2hvd01hbmRhdG9yeUVycm9yTXNnXycgKyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF0gPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2Uuc2hvd01hbmRhdG9yeUVycm9yTXNnLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcy5maWVsZHMpICYmIHJlcy50eXBlID09PSAnZXZlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pbmNsdWRlcyh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNYW5kYXRvcnkgJiYgdGhpcy5jaGVja0VtcHR5LmlzRW1wdHkodGhpcy5maWVsZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTWFuZGF0b3J5ICYmIHRoaXMuY2hlY2tFbXB0eS5pc0VtcHR5KHRoaXMuZmllbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZW1wdHkgc2Vzc2lvbiBkYXRhIHdoZW4gdGhlIHNlc3Npb24gY2xlYXJhbmNlIGlzIGVtaXR0ZWRcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ2VtcHR5U2Vzc2lvbkRhdGEnICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRGb3JFbXB0eVNlc3Npb24uc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXF1ZUlkVmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51bmlxdWVfaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gcmVzLnVuaXF1ZV9pZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlSWRWYWx1ZSA9IFt0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByZXMuYXBpS2V5cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFQSUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZFZhbHVlID0gW3RoaXMuc2VjdGlvbkRhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlSWRWYWx1ZSA9IFsuLi51bmlxdWVJZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZFZhbHVlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udW5pcXVlSWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5zZWN0aW9uRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pcXVlSWRWYWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZTsgLy8gdHlwZSBhbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xpc3QtTXVsdGktU2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWRpb1ZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzc2lnbiBhcHAgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIHdpdGggYSBmdW5jdGlvbiBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBwRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5IDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRMYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlTGFiZWxzJykgPT09ICd0cnVlJyA/IHRoaXMuc2VjdGlvbkRhdGEuZmllbGRfbGFiZWwgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVxdWVzdF9hcGlfa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IFtdIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVzcG9uc2VfYXBpX2tleSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogdGhpcy5pc01hbmRhdG9yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdGhpcy5zZWN0aW9uRGF0YS5pc19lZGl0YWJsZSA9PT0gMSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDEgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEodGhpcy5hcHBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudXBkYXRlQ29sdW1uQ29uZmlnKCk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2x1bW5TaG93SGlkZVJlYXJyYW5nZTogXCIsIHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UpXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIC8vIHNldCByYWRpbyB2YWx1ZSBvbiBsb2FkIG9mIGEgZnVuY3Rpb25cclxuICAgICAgICB0aGlzLnNob3dTZWxlY3RlZFJhZGlvVmFsdWVzKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHVuaXF1ZV9pZCA9ICh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA/IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkIDogdGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uX2lkKVxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IHRoaXMuY2hlY2tSb3dWaXNpYmlsaXR5KHRoaXMucm93RGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialtcclxuICAgICAgICAgICAgICAgICdlbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlXycgK1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkXSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRBcGlTdWNjZXNzUmVzcG9uc2Uuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMaXN0RGF0YShyZXMpO1xyXG4gICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrIGlmIHRoZSBjaGVja2JveCBuZWVkcyBjaGlwc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDaGlwcygpO1xyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgICAgICAnZW1pdFNldEZpZWxkVmFsdWVPbkV2ZW50XycgK1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRdID1cclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0U2V0RmllbGRWYWx1ZU9uRXZlbnQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnVuaXF1ZUlkcyAmJiByZXMudW5pcXVlSWRzLmluY2x1ZGVzKCdmaWx0ZXJfY29sdW1uXycgKyB1bmlxdWVfaWQpICYmIHJlcy52YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwuc2V0RmlsdGVyS2V5cyh0aGlzLnNlYXJjaERhdGEsIHJlc1sndmFsdWVzJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy51bmlxdWVJZHMgJiYgcmVzLnVuaXF1ZUlkcy5pbmNsdWRlcygnZmlsdGVyXycgKyB1bmlxdWVfaWQpICYmIHJlcy52YWx1ZXMgJiYgcmVzLnZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclR4dCA9IHJlc1sndmFsdWVzJ10ubGVuZ3RoID4gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc1sndmFsdWVzJ11bcmVzWyd1bmlxdWVJZHMnXS5pbmRleE9mKCdmaWx0ZXJfJyArIHVuaXF1ZV9pZCldIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzWyd2YWx1ZXMnXVswXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgICAgICAgICAnZW1pdE9uRGF0YVNldE9yVXBkYXRlZF8nICsgdW5pcXVlX2lkXHJcbiAgICAgICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmllbGREYXRhVXBkYXRlZChyZXMuYXBpS2V5LCByZXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGEudmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IHRoaXMuY2hlY2tSb3dWaXNpYmlsaXR5KHRoaXMucm93RGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aCA+IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YS52aXNpYmxlID0gdGhpcy5yb3dEYXRhLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Mb2FkJyk7XHJcbiAgICAgICAgLy8gc2V0IHN0ZXAgaWRcclxuICAgICAgICB0aGlzLmFwcERhdGEuc3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcblxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5jZWxsQXBwRGF0YS5zdGVwSWQgPSB0aGlzLnN0ZXBJZDsgLy8gRml4OiB3aGVuIFRGJ3MgbGFiZWwgaW4gY2VsbCBjbGlja2VkLCBURidzIHN0YXRlIG5vdCByZW1vdmVkIGFmdGVyIGdvaW5nIGJhY2tcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdEhhbmRsZXIuY2VsbEFwcERhdGEudmlzaWJsZSA9IHRoaXMuYXBwRGF0YS52aXNpYmxlOyAvLyBGaXg6IHdoZW4gVEYncyBsYWJlbCBpbiBjZWxsIGNsaWNrZWQsIG9uIHBhZ2UgcmVmcmVzaCwgVEYgZGlzYXBwZWFyc1xyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgICAgICAnc2VhcmNoRmlsdGVyRW1pdHRlcl8nICsgdW5pcXVlX2lkXHJcbiAgICAgICAgXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2Uuc2VhcmNoRmlsdGVyRW1pdHRlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXSAmJiBkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVHh0ID0gZGF0YVsndmFsdWVzJ11bMF0gPyBkYXRhWyd2YWx1ZXMnXVswXSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tb25VdGlsLnNldEZpbHRlcktleXModGhpcy5zZWFyY2hEYXRhLCBkYXRhWydmaWx0ZXJDb2wnXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VjdGlvbmRhdGE6IFwiLCB0aGlzLnNlY3Rpb25EYXRhKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGREYXRhOiBcIiwgdGhpcy5zZWN0aW9uRGF0YS5maWVsZHMpXHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGFwaSBldmVudCBzdWNjZXNzIGVtaXR0ZXJcclxuICAgICAgICBpZiAoZnJvbVN0b3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGlzdERhdGEoZnJvbVN0b3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0U2hvd25EYXRhKCkge1xyXG4gICAgICAgIHRoaXMucm93RGF0YVNob3duID0gdGhpcy5kaXNwbGF5VmFsdWVzTGF6eS5zbGljZShcclxuICAgICAgICAgICAgdGhpcy5pUm93RGF0YSxcclxuICAgICAgICAgICAgdGhpcy5pUm93RGF0YSArIHRoaXMuaXRlbVBlclBhZ2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXZpb3VzKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlSb3dEYXRhICE9IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pUm93RGF0YSA9IHRoaXMuaVJvd0RhdGEgLSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaVJvd0RhdGEgPSB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5Lmxlbmd0aCAtIHRoaXMuaXRlbVBlclBhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2V0U2hvd25EYXRhKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5pUm93RGF0YSArIDEgPD0gdGhpcy5kaXNwbGF5VmFsdWVzTGF6eS5sZW5ndGggLSB0aGlzLml0ZW1QZXJQYWdlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaVJvd0RhdGEgPSB0aGlzLmlSb3dEYXRhICsgMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmlSb3dEYXRhID0gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTaG93bkRhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZXRyaWV2ZUJsb2NrRmllbGRzKCkge1xyXG4gICAgICAgIC8vIHJldHJpZXZlIGNoaWxkIGdlbmVyaWMgYmxvY2sgZmllbGRzXHJcbiAgICAgICAgZm9yIChjb25zdCBbaSwgZmllbGRdIG9mIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZFVuaXF1ZUlkcy5wdXNoKGZpZWxkLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIHN3aXRjaCAoZmllbGQuZmllbGRfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnTGlzdCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaXN0LVNpbmdsZS1TZWxlY3QnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnTGlzdC1NdWx0aS1TZWxlY3QnOlxyXG4gICAgICAgICAgICAgICAgY2FzZSAnR2VuZXJpYyBCbG9jayc6XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGVmYXVsdF92YWx1ZSA9IGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoYXAgPT4gYXAucGFyYW1ldGVyX3R5cGUgPT09ICdkZWZhdWx0X3ZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRlZmF1bHRfdmFsdWUubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZERhdGEgPSBhd2FpdCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZShmaWVsZC5kZWZhdWx0X3ZhbHVlWzBdLnZhbHVlKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoaWxkX2ZpZWxkcyA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MoY2hpbGREYXRhKS5ibG9ja19maWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hpbGRMaXN0ID0gY2hpbGREYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0NoZWNrYm94JzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT2JqLmNoZWNrYm94ID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3JhZGlvJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkT2JqLnJhZGlvID0gaTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3RjZWxsJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTGlzdENlbGwgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlzdENlbGxFdmVudENvbmZpZyA9IGZpZWxkLmV2ZW50X2xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmlzX2Rpc3BsYXkgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZCA9IGZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IG1hcHMgc3RhdGljIHBvc3NpYmxlIHZhbHVlc1xyXG4gICAgICogQHBhcmFtIHBvc3NpYmxlVmFsdWVzIHRoZSBmaWVsZCBwb3NzaWJsZSBWYWx1ZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBtYXBQb3NzaWJsZVZhbHVlcyhwb3NzaWJsZVZhbHVlczogQXJyYXk8YW55Pikge1xyXG4gICAgICAgIGNvbnN0IGxpc3RTdGF0aWNEYXRhID0gW107XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IHBvc3NpYmxlVmFsdWVzWzBdLnNwbGl0KCd8fHwnKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gcG9zc2libGVWYWx1ZXMpIHtcclxuICAgICAgICAgICAgaWYgKE51bWJlcihpKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgcG9zc2libGVWYWx1ZXNbaV0uc3BsaXQoJ3x8fCcpLmZvckVhY2goKHZhbHVlLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialtrZXlzW2luZGV4XV0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgbGlzdFN0YXRpY0RhdGEucHVzaChvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBsaXN0U3RhdGljRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgc2V0cyBsaXN0IGRhdGFcclxuICAgICAqIEBwYXJhbSByZXMgYXBpIHJlc3BvbnNlIG9yIHRoZSByZXNwb25zZSBvZiBwb3NzaWJsZSB2YWx1ZXNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRMaXN0RGF0YShyZXMpIHtcclxuICAgICAgICAvLyBjaGVjayBpZiBzZXJ2ZXIgc2lkZSBwYWdpbmF0aW9uIGFuZCB0aGVuIHN0b3JlIHRoZSBkYXRhIGZvciB0aGUgdG90YWxObyBPZiBQYWdlc1xyXG4gICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgLy8gc2V0dGluZyB0b3RhbCBOdW1iZXIgb2YgdmFsdWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzBdLCByZXMpO1xyXG4gICAgICAgICAgICAvLyBzZXR0aW5nIGN1cnJlbnQgcGFnZSBudW1iZXJcclxuICAgICAgICAgICAgY29uc3QgY3VyclBhZ2UgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMV0sIHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyUGFnZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID0gTnVtYmVyKGN1cnJQYWdlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCB0b3RhbCBubyBvZiBwYWdlc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQYWdpbmF0aW9uU3RvcmUodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5c1swXSwgdmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnNob3dMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKCh0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIHRoaXMuc2VjdGlvbkRhdGEuYXBpX2tleSAhPT0gJycpIHx8XHJcbiAgICAgICAgICAgICghdGhpcy5pc1NpbmdsZUFQSUtleSAmJiB0aGlzLnNlY3Rpb25EYXRhLnJlc3BvbnNlX2FwaV9rZXkgIT09ICcnKSkge1xyXG4gICAgICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuc2VjdGlvbkRhdGEsIHJlcyk7XHJcbiAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEgPSB0aGlzLmNoZWNrUm93VmlzaWJpbGl0eShyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShyZXMpKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IHRoaXMuY2hlY2tSb3dWaXNpYmlsaXR5KHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0SW50ZXJuYWxBcGlEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3RJbnRlcm5hbEFwaURhdGEpKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50ID0gdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uID9cclxuICAgICAgICAgICAgdGhpcy5saXN0SW50ZXJuYWxBcGlEYXRhW3RoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMF1dIDogdGhpcy5zZWFyY2hEYXRhLmZpbHRlcmVkRGF0YS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbENvdW50QXBwRGF0YSh0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50KTtcclxuICAgICAgICB0aGlzLm9uUGFnaW5hdGlvbkNvdW50Q2hhbmdlKHRoaXMuc2VydmVyUGFnaW5hdGlvbiA/IDAgOiAxKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwuc2V0RmlsdGVyS2V5cyh0aGlzLnNlYXJjaERhdGEsIHRoaXMuZmlsdGVyS2V5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Jvd1Zpc2liaWxpdHkocmVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzUm93Q29uZGl0aW9uRmllbGQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByZGF0YSBvZiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHlDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZCwgdGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZC51bmlxdWVfaWQsICcnLCB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUocmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aXNpYmlsaXR5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlc3VsdCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUb3RhbENvdW50QXBwRGF0YSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbENvdW50QXBwRGF0YSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy50b3RhbENvdW50QXBwRGF0YSxcclxuICAgICAgICAgICAgLi4uIHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCArICdfdG90YWxfY291bnQnLFxyXG4gICAgICAgICAgICAgICAgc3RlcElkOiB0aGlzLnN0ZXBJZCxcclxuICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IHRoaXMucmVzdWx0Q291bnRBUElLZXkgOiAnJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLnJlc3VsdENvdW50QVBJS2V5KSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMucmVzdWx0Q291bnRBUElLZXkpKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2Uuc2V0QXBwRGF0YSh0aGlzLnRvdGFsQ291bnRBcHBEYXRhKTtcclxuICAgICAgICBjb25zdCBlbWl0T2JqID0ge1xyXG4gICAgICAgICAgICBhcGlLZXk6IHRoaXMucmVzdWx0Q291bnRBUElLZXksXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuZW1pdChlbWl0T2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGREYXRhVXBkYXRlZChmaWVsZElkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuaXNfZGlzcGxheSA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KHRoaXMuc2VjdGlvbkRhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHJlcGVhdGFibGUgYmxvY2sgaWYgcmVxdWlyZWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgdGhlIGZpbHRlcmluZ1xyXG4gICAgICovXHJcbiAgICBhcHBseUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnNlcnZlclBhZ2luYXRpb24gPyB0aGlzLmZpbHRlckFQSUtleSA6IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkICsgJyMjJyArIHRoaXMuZmlsdGVyQVBJS2V5LFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJUeHRcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuZmlsdGVyID0gdGhpcy5maWx0ZXJUeHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvdGFsQ291bnRBcHBEYXRhKHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYWdpbmF0aW9uU3RvcmUodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5c1sxXSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZXZlbnRfbGlzdCB9ID0gdGhpcy5zZWN0aW9uRGF0YTtcclxuICAgICAgICBpZiAoZXZlbnRfbGlzdCAmJiBldmVudF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50X2xpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ09uRmlsdGVyQ2xpY2snLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIGN1cnJlbnQgcGFnZSB0byAxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TGlzdEhhbmRsZXIuc3dpdGNoRXZlbnREaXNwbGF5VHlwZShldmVudCwgZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub0RhdGFGb3VuZCA9IHRoaXMuc2VhcmNoRGF0YS5maWx0ZXJlZERhdGEubGVuZ3RoID8gZmFsc2UgOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJpbWFyeUtleSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEudmFsdWUgJiYgZGF0YS5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEludGVybmFsQXBpRGF0YVtkYXRhLm5hbWVdID0gZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLnNldEFwaURhdGEoT2JqZWN0LmFzc2lnbih7fSwgYXBpRGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQYWdpbmF0aW9uIExvZ2ljIFN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIHRoZSBwYWdpbmF0aW9uIHByZXZpb3VzXHJcbiAgICAgKi9cclxuICAgIHBhZ2luYXRpb25QcmV2aW91cygpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIDwgMSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgUGFnZSBudW1iZXIgZm9yIG5leHRcclxuICAgICAgICB0aGlzLnNldFBhZ2luYXRpb25TdG9yZSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzFdLCB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25QYWdpbmF0aW9uQnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBpZiAoIXRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1QYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBwZXJmb3JtcyB0aGUgcGFnaW5hdGlvbiBuZXh0XHJcbiAgICAgKi9cclxuICAgIHBhZ2luYXRpb25OZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPiB0aGlzLnBhZ2luYXRpb24ucGFnZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9IHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBwYWdlIG51bWJlciBmb3IgcHJldmlvdXNcclxuICAgICAgICB0aGlzLnNldFBhZ2luYXRpb25TdG9yZSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzFdLCB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25QYWdpbmF0aW9uQnV0dG9uQ2xpY2snKTtcclxuICAgICAgICB0aGlzLnBlcmZvcm1QYWdpbmF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZFBhZ2VOdW1iZXIobnVtKSB7XHJcbiAgICAgICAgcmV0dXJuICgvXlxcZCskLy50ZXN0KG51bSkgJiYgKDAgPCBudW0gJiYgbnVtIDw9IHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBwZXJmb3JtcyB0aGUgcGFnaW5hdGlvbiBwYWdlIG51bWJlclxyXG4gICAgICovXHJcbiAgICBzZXRDdXJyZW50KG51bSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRQYWdlTnVtYmVyKG51bSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID0gbnVtO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgb2YgcGFnaW5hdGlvbiB0eXBlIGlzIHNlcnZlciB0aGUgc2V0IHBhZ2UgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvblN0b3JlKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMV0sIG51bSk7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25QYWdpbmF0aW9uQnV0dG9uQ2xpY2snKTtcclxuICAgICAgICAgICAgdGhpcy5wZXJmb3JtUGFnaW5hdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gdGhlIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZSBvZiBwYWdpbmF0aW9uIGxpbmtzIFtpXSwgZmlndXJlIG91dCB3aGF0IHBhZ2UgbnVtYmVyIGNvcnJlc3BvbmRzIHRvIHRoYXQgcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlcclxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZVxyXG4gICAgICogQHBhcmFtIHBhZ2luYXRpb25SYW5nZVxyXG4gICAgICogQHBhcmFtIHRvdGFsUGFnZXNcclxuICAgICAqIEByZXR1cm5zICd7Kn0nXHJcbiAgICAgKi9cclxuICAgIGNhbGN1bGF0ZVBhZ2VOdW1iZXIoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIGlmIChpID09PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXMgLSBwYWdpbmF0aW9uUmFuZ2UgKyBpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhbGZXYXkgPCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYWdlIC0gaGFsZldheSArIGk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgYW4gYXJyYXkgb2YgcGFnZSBudW1iZXJzIChvciB0aGUgJy4uLicgc3RyaW5nKSB3aGljaCBpcyB1c2VkIGluIGFuIG5nLXJlcGVhdCB0byBnZW5lcmF0ZSB0aGVcclxuICAgICAqIGxpbmtzIHVzZWQgaW4gcGFnaW5hdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZVxyXG4gICAgICogQHBhcmFtIHJvd3NQZXJQYWdlXHJcbiAgICAgKiBAcGFyYW0gcGFnaW5hdGlvblJhbmdlXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbkxlbmd0aFxyXG4gICAgICogQHJldHVybnMgJ3tBcnJheX0nXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUGFnZXNBcnJheShjdXJyZW50UGFnZSwgdG90YWxQYWdlcywgcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gW107XHJcbiAgICAgICAgdmFyIGhhbGZXYXkgPSBNYXRoLmNlaWwocGFnaW5hdGlvblJhbmdlIC8gMik7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gaGFsZldheSkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdzdGFydCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFBhZ2VzIC0gaGFsZldheSA8IGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ2VuZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAnbWlkZGxlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBlbGxpcHNlc05lZWRlZCA9IHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgIHdoaWxlIChpIDw9IHRvdGFsUGFnZXMgJiYgaSA8PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VOdW1iZXIgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VOdW1iZXIoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3BlbmluZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IDIgJiYgKHBvc2l0aW9uID09PSAnbWlkZGxlJyB8fCBwb3NpdGlvbiA9PT0gJ2VuZCcpKTtcclxuICAgICAgICAgICAgdmFyIGNsb3NpbmdFbGxpcHNlc05lZWRlZCA9IChpID09PSBwYWdpbmF0aW9uUmFuZ2UgLSAxICYmIChwb3NpdGlvbiA9PT0gJ21pZGRsZScgfHwgcG9zaXRpb24gPT09ICdzdGFydCcpKTtcclxuICAgICAgICAgICAgaWYgKGVsbGlwc2VzTmVlZGVkICYmIChvcGVuaW5nRWxsaXBzZXNOZWVkZWQgfHwgY2xvc2luZ0VsbGlwc2VzTmVlZGVkKSkge1xyXG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCgnLi4uJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHBhZ2VOdW1iZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBwYWdpbmF0aW9uIGNvdW50XHJcbiAgICAgKiBAcGFyYW0gMCB3b250IHJlc2V0IHRoZSBjb3VudCBiZWNhdXNlIGluIHNlcnZlciBzaWRlIHBhZ2luYXRpb25cclxuICAgICAqIHBhZ2UgTnVtYmVyIGNvbWVzIGZyb20gdGhlIGFwaVxyXG4gICAgICovXHJcbiAgICBvblBhZ2luYXRpb25Db3VudENoYW5nZShmbGFnID0gMSkge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgLyB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gUmVzZXQgcG9zaXRpb25cclxuICAgICAgICBpZiAoZmxhZyA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBlcmZvcm1QYWdpbmF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnaW5hdGlvbkNvdW50KCkge1xyXG4gICAgICAgIC8vIHNldCB0aGUgY3VycmVudCBpdGVtIGNvdW50IGlmIHRoZSBwYWdpbmF0aW9uIGlzIHNlcnZlclxyXG4gICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvblN0b3JlKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMl0sIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50KTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uUGFnaW5hdGlvbkJ1dHRvbkNsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgdGhlIHZhbHVlcyBvZiB0aGUgc2VsZWN0ZWQgaXRlbXMgaW4gY2FzZSBvZiBMaXN0LVNpbmdsZS1TZWxlY3RcclxuICAgICAqL1xyXG4gICAgc2hvd1NlbGVjdGVkUmFkaW9WYWx1ZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xpc3QtU2luZ2xlLVNlbGVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFkaW9WYWx1ZSA9IHRoaXMuc3RvcmVEYXRhWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXQgdGhlIG51bWJlciBvZiBjaGVja2VkIGl0ZW1zIHdoZW4gdGhlIGxpc3QgdHlwZSBpcyBMaXN0LU11bHRpLVNlbGVjdFxyXG4gICAgICovXHJcbiAgICBjaGVja0NoZWNrZWRWYWx1ZXMoKSB7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHZhbHVlcyBvZiB0aGUgY2hlY2tlZEl0ZW1zXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xpc3QtTXVsdGktU2VsZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yZURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2luZ2xlUmVzIG9mIHRoaXMuZGlzcGxheVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgodGhpcy5zdG9yZURhdGEpLmluY2x1ZGVzKHNpbmdsZVJlc1t0aGlzLnByaW1hcnlLZXlWYWxdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRJdGVtcy5wdXNoKHNpbmdsZVJlc1t0aGlzLnByaW1hcnlLZXlWYWxdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRJdGVtcy5wdXNoKHt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byBzZXQgcGFnaW5hdGlvbiBhcGkgc3RvcmVcclxuICAgICAqIEBwYXJhbSBuYW1lIHBhZ2luYXRpb24gYXBpIGtleXNcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIGFwaSBrZXlcclxuICAgICAqL1xyXG4gICAgc2V0UGFnaW5hdGlvblN0b3JlKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgdGhlIHBhZ2luYXRpb25cclxuICAgICAqL1xyXG4gICAgcGVyZm9ybVBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnN0YXJ0SW5kZXggPVxyXG4gICAgICAgICAgICAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudDtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXggPVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uc3RhcnRJbmRleCArIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50O1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5lbmRJbmRleCA9XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5lbmRJbmRleCA+IHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5wYWdpbmF0aW9uLml0ZW1Db3VudFxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXg7XHJcbiAgICAgICAgbGV0IHNldERpc3BsYXlWYWx1ZXMgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmdlbmVyYXRlUGFnZXNBcnJheSh0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UsIHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQsIHRoaXMucGFnaW5hdGlvbi5wYWdpbmF0aW9uUmFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheVZhbHVlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWVzID0gdGhpcy5zZWFyY2hEYXRhLmZpbHRlcmVkRGF0YS5zbGljZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXhcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvdyBQYWdpbmF0aW9uJ10gPT09ICdhdXRvJyAmJiB0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50IDw9IHRoaXMucGFnaW5hdGlvbi5wYWdlSXRlbXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9QYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9QYWdpbmF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0RGlzcGxheVZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXMgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25EYXRhKTtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zZXRGaWVsZFByb3BlcnRpZXModGhpcy5kaXNwbGF5VmFsdWVzKTsgLy8gZnVuY3Rpb24gdGhhdCBzZXRzIHNpbmdsZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWVzID0gdGhpcy5zb3J0TGlzdChwcm9wZXJ0aWVzKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhwcm9wZXJ0aWVzKTtcclxuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXMgPSBwcm9wZXJ0aWVzO1xyXG4gICAgICAgIHRoaXMuY2hlY2tDaGVja2VkVmFsdWVzKCk7XHJcbiAgICAgICAgdGhpcy5sYXp5TG9hZGluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHNvcnRMaXN0KHByb3BlcnRpZXMpIHtcclxuICAgICAgICBsZXQgc29ydE9uID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snRW5hYmxlU29ydCddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snRW5hYmxlU29ydCddLnNwbGl0KCd8fCcpWzBdLnNwbGl0KCd8JykucmV2ZXJzZSgpIDogW107XHJcbiAgICAgICAgbGV0IHNvcnRQcmVmZXJhbmNlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snRW5hYmxlU29ydCddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snRW5hYmxlU29ydCddLnNwbGl0KCd8fCcpWzFdIDogXCJhc2NcIjtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNvcnRPbjogXCIsc29ydE9uKVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic29ydFByZWZlcmFuY2U6IFwiLHNvcnRQcmVmZXJhbmNlKVxyXG4gICAgICAgIHNvcnRPbi5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLnNvcnQoKGEsYikgPT4gKGFbaXRlbV0gPiBiW2l0ZW1dKSA/IDEgOiAoKGJbaXRlbV0gPiBhW2l0ZW1dKSA/IC0xIDogMCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmKHNvcnRQcmVmZXJhbmNlICYmIHNvcnRQcmVmZXJhbmNlLnRvTG93ZXJDYXNlKCkgPT0gJ2Rlc2MnKSB7XHJcbiAgICAgICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLnJldmVyc2UoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcm9wZXJ0aWVzOiBcIiwgcHJvcGVydGllcylcclxuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcclxuICAgIH1cclxuXHJcbiAgICBsYXp5TG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhenlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlcy5sZW5ndGggIT09IHRoaXMuZGlzcGxheVZhbHVlc0xhenkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5LnB1c2godGhpcy5kaXNwbGF5VmFsdWVzW3RoaXMuZGlzcGxheVZhbHVlc0xhenkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd0Nhcm91c2VsJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd0Nhcm91c2VsJ10udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQ2Fyb3VzZWxJdGVtUGVyUGFnZSddICYmICFpc05hTih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDYXJvdXNlbEl0ZW1QZXJQYWdlJ10pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXRlbVBlclBhZ2UgPSBwYXJzZUludCh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDYXJvdXNlbEl0ZW1QZXJQYWdlJ10pID4gdGhpcy5kaXNwbGF5VmFsdWVzTGF6eS5sZW5ndGggPyB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5Lmxlbmd0aCA6IHBhcnNlSW50KHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Nhcm91c2VsSXRlbVBlclBhZ2UnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U2hvd25EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTa2VsZXRvbkxvYWRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxhenlJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBASG9zdExpc3RlbmVyKFwid2luZG93OmJlZm9yZXVubG9hZFwiLCBbXCIkZXZlbnRcIl0pIHVubG9hZEhhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAvLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5ID0gW107XHJcbiAgICAvLyB9XHJcblxyXG4gICAgc2V0RmllbGRQcm9wZXJ0aWVzKGRpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlWYWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBkaXNwbGF5VmFsdWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZmllbGRzJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGFbJ2ZpZWxkcyddID0gW107XHJcbiAgICAgICAgICAgIGRhdGFbJ2xpc3RfZGF0YSddID0ge307XHJcbiAgICAgICAgICAgIGRhdGFbJ2V4cGFuZGFibGVfZmllbGRzJ10gPSBbXTtcclxuICAgICAgICAgICAgZGF0YVsnaGFzRXhwYW5kYWJsZURhdGEnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS5maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaiBvZiB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGsgb2YgZmllbGQuY2hpbGRfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEZpZWxkID0gaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRmllbGRbJ3Jvd0RhdGEnXSA9IHRoaXMuZ2VuZXJhdGVSb3dEYXRhKGNoaWxkRmllbGQsIGRhdGEsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbJ3Jvd0RhdGEnXSA9IHRoaXMuZ2VuZXJhdGVSb3dEYXRhKGZpZWxkLCBkYXRhLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsnZmllbGRzJ10ucHVzaChmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuaGlkZW5Sb3dzICYmIHRoaXMuZXhwYW5kYWJsZURhdGEpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaiBvZiB0aGlzLmV4cGFuZGFibGVEYXRhLmJsb2NrX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJyAmJiBmaWVsZC5jaGlsZF9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIGZpZWxkLmNoaWxkX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRGaWVsZCA9IGs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEZpZWxkWydyb3dEYXRhJ10gPSB0aGlzLmdlbmVyYXRlUm93RGF0YShjaGlsZEZpZWxkLCBkYXRhLCBpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkWydyb3dEYXRhJ10gPSB0aGlzLmdlbmVyYXRlUm93RGF0YShmaWVsZCwgZGF0YSwgaSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJ2V4cGFuZGFibGVfZmllbGRzJ10ucHVzaChmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlWYWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gUGFnaW5hdGlvbiBMb2dpYyBFbmQgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSBtZXNzYWdlIG9iamVjdCBmcm9tIHRoZSBtZXNzYWdlIGNvZGVcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlQ29kZSB0aGUgbWVzc2FnZSBjb2RlIGFzIGNvbmZpZ3VyZWQgaW4gdmFsaWRhdGlvbl9tZXNzYWdlcyBtZXNzYWdlX2NvZGVcclxuICAgICAqL1xyXG4gICAgcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZUNvZGUpIHtcclxuICAgICAgICBpZiAobWVzc2FnZUNvZGUpIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGFNYXAgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLm1lc3NhZ2VzRGF0YU1hcFttZXNzYWdlQ29kZV07XHJcbiAgICAgICAgICAgIHJldHVybiAobWVzc2FnZURhdGFNYXApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgc2hvd3MgYW4gZXJyb3IgbWVzc2FnZSBvbiB0aGUgYmFzaXMgb2YgdGhlIGNvbmZpZ3VyZWQgdmFsaWRhdGlvbl9tZXNzYWdlc1xyXG4gICAgICovXHJcbiAgICBzaG93RXJyb3JNZXNzYWdlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtZXNzYWdlIG9mIHRoaXMuc2VjdGlvbkRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSA9PT0gJ01hbmRhdG9yeScpIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UuZGlzcGxheV90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ01PREFMJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wZW4gbW9kYWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5yZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLm1lc3NhZ2VfY29kZSkubWVzc2FnZV90ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdJTkxJTkUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXNzYWdlcy5wdXNoKHRoaXMucmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5tZXNzYWdlX2NvZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yT25OZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdQT1BVUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvcGVuIHNuYWNrYmFyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWNrQmFyLmRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNuYWNrQmFyKHRoaXMucmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5tZXNzYWdlX2NvZGUpLm1lc3NhZ2VfdGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgb3BlbnMgYSBtYXRlcmlhbCBkaWFsb2cgYmFyXHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGUgbWVzc2FnZSB0aGF0IGlzIGNvbmZpZ3VyZSBpbiB0aGUgQ0VFIE1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgb3BlbkRpYWxvZyhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0TW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IG9wZW5zIGEgbWF0ZXJpYWwgc25hY2sgYmFyXHJcbiAgICAgKiBAcGFyYW0gbWVzc2FnZSB0aGUgbWVzc2FnZSB0aGF0IGlzIGNvbmZpZ3VyZSBpbiB0aGUgQ0VFIE1lc3NhZ2VcclxuICAgICAqL1xyXG4gICAgb3BlblNuYWNrQmFyKG1lc3NhZ2UpIHtcclxuICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgJ09LJywge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgcGFuZWxDbGFzczogWydtYXQtdG9vbGJhcicsICdtYXQtcHJpbWFyeSddXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IGdldHMgdHJpZ2dlcmVkIHdoZW4gdGhlcmUgaXMgYSBldmVudChIVE1MIGV2ZW50KSB0cmlnZ2VyZWRcclxuICAgICAqIGluIHRoZSBjYXNlIG9mIExpc3QtU2luZ2xlLVNlbGVjdCBvciBMaXN0LU11bHRpLVNlbGVjdFxyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGN1cnJlbnQgZGF0YSBvZiB0aGUgcm93XHJcbiAgICAgKiBAcGFyYW0gaXNDaGVja2VkIGlmIHRoZSB2YWx1ZSBpcyBjaGVja2VkIG9yIG5vdFxyXG4gICAgICogQHBhcmFtIGNvbnRleHQgdGhlIHBvc2l0aW9uIG9mIHRoZSBzZWxlY3RlZCByb3dcclxuICAgICAqL1xyXG4gICAgbGlzdF9jaGFuZ2UoZGF0YTogYW55LCBpc0NoZWNrZWQ6IGJvb2xlYW4sIGNvbnRleHQ/OiBhbnksIGludGVybmFsPzogYm9vbGVhbikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVt0aGlzLnByaW1hcnlLZXlWYWxdO1xyXG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xpc3QtU2luZ2xlLVNlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVEYXRhID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnN0b3JlRGF0YS5pbmNsdWRlcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVEYXRhID0gdGhpcy5zdG9yZURhdGEuY29uY2F0KFt2YWx1ZV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA+IDAgJiYgdGhpcy5zdG9yZURhdGEuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSA9IFsuLi50aGlzLnN0b3JlRGF0YV07IC8vIGNsb25pbmcgYXJyYXlcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVEYXRhLnNwbGljZSh0aGlzLnN0b3JlRGF0YS5pbmRleE9mKHZhbHVlKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpcHNBcGlLZXlUb0Rpc3BsYXkgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlwc0Rpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAoaXNDaGVja2VkKSA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaXBzQXJyYXkucHVzaCh7IGtleU5hbWU6IGRhdGFbdGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheV0sIGtleVBvczogY29udGV4dCB9KSA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaXBzQXJyYXkgPSB0aGlzLmNoaXBzQXJyYXkuZmlsdGVyKGUgPT4gZS5rZXlOYW1lICE9PSBkYXRhW3RoaXMuY2hpcHNBcGlLZXlUb0Rpc3BsYXldKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdG9yZVByaW1hcnlLZXkoJ09OX0NMSUNLJywgaXNDaGVja2VkKTtcclxuICAgICAgICBpZiAoIWludGVybmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdvbmNsaWNrJyk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgc3RvcmVzIHRoZSB2YWx1ZSBvZiB0aGUgbGlzdCBzaW5nbGUgc2VsZWN0IGFuZCBsaXN0IG11bHRpIHNlbGVjdCBvciBzZXQgdGhlIHZhbHVlIG9uIGxvYWQgb2YgYSBsaXN0XHJcbiAgICAgKiBAcGFyYW0gdHlwZSB0eXBlIGNhbiBiZSBvbmx5IE9OX0xPQUQgc28gdGhhdCB0aGUgdmFsdWUgaXMgYWxyZWFkeSBzZXQgaW5cclxuICAgICAqIHRoZSBsaXN0IG9uIHRoZSBsb2FkIG9mIHRoZSBwYWdlIGlzIHRoZSB1c2VyIGhhcyBhbHJlYWR5IHNlbGVjdGVkIHRoYXRcclxuICAgICAqL1xyXG4gICAgc3RvcmVQcmltYXJ5S2V5KHR5cGU/LCBjaGVja2VkPzogYm9vbGVhbikge1xyXG4gICAgICAgIGZvciAoY29uc3QgYWRkaXRpb25hbFBhcmFtIG9mIHRoaXMuc2VjdGlvbkRhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChhZGRpdGlvbmFsUGFyYW0ucGFyYW1ldGVyX3R5cGUgPT09ICdQcmltYXJ5S2V5TmFtZScpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByaW1hcnlLZXlWYWx1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBzZGF0YSBvZiB0aGlzLnN0b3JlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaW1hcnlLZXlWYWx1ZS5wdXNoKHNkYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwaURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZ2V0UHJpbWFyeUtleShhZGRpdGlvbmFsUGFyYW0udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmdldFByaW1hcnlLZXkoYWRkaXRpb25hbFBhcmFtLnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKHRoaXMudHlwZSA9PT0gJ0xpc3QtU2luZ2xlLVNlbGVjdCcgPyAocHJpbWFyeUtleVZhbHVlWzBdID8gcHJpbWFyeUtleVZhbHVlWzBdIDogJycpIDogcHJpbWFyeUtleVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIC8vIHN0b3JlIGFwcCBkYXRhIG9ubHkgaWYgaXQgaXMgY29uZmlndXJlZCBhcyBhIGZpZWxkXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01hbmRhdG9yeSA9IHRoaXMuc2VjdGlvbkRhdGEuaXNfbWFuZGF0b3J5ID09PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcHBEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IHRoaXMuc2VjdGlvbkRhdGEuYXBpX2tleSA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZExhYmVsOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3RvcmVMYWJlbHMnKSA9PT0gJ3RydWUnID8gdGhpcy5zZWN0aW9uRGF0YS5maWVsZF9sYWJlbCA6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNSZXBlYXRlZEZpZWxkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLnNlY3Rpb25EYXRhLnJlcXVlc3RfYXBpX2tleSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyh0aGlzLnNlY3Rpb25EYXRhLnJlc3BvbnNlX2FwaV9rZXkpKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdGhpcy5zZWN0aW9uRGF0YS5pc19lZGl0YWJsZSA9PT0gMSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdGhpcy5zZWN0aW9uRGF0YS5pc19kaXNwbGF5ID09PSAxID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKHRoaXMudHlwZSA9PT0gJ0xpc3QtU2luZ2xlLVNlbGVjdCcgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuc3RvcmVEYXRhWzBdID8gdGhpcy5zdG9yZURhdGFbMF0gOiAnJykgOiBbLi4ubmV3IFNldCh0aGlzLnN0b3JlRGF0YSldKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gYXBwRGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlID09PSAnT05fTE9BRCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuc3RvcmVEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEgPSBkYXRhID8gQXJyYXkuaXNBcnJheShkYXRhKSA/IGRhdGEgOiBbZGF0YV0gOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYXBwRGF0YSwgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5zdG9yZURhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snU2V0UHJpbWFyeVZhbHVlJ10gPT09ICdBbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hlY2tlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnN0b3JlRGF0YS5sZW5ndGggPT09IHRoaXMuZGlzcGxheVZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKGFwcERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uYXBwRGF0YSwgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IFtdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YShhcHBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuYWRkQXBwRGF0YShhcHBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLnNldEFwaURhdGEoT2JqZWN0LmFzc2lnbih7fSwgYXBpRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJucyB0aGUgcHJpbWFyeSBrZXkgZnJvbSB0aGUgYWRkaXRpb25hbCBwYXJhbWV0ZXIgUHJpbWFyeUtleU5hbWVcclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIHZhbHVlIG9mIGFkZGl0aW9uYWwgcGFyYW1ldGVyIFByaW1hcnlLZXlOYW1lXHJcbiAgICAgKi9cclxuICAgIGdldFByaW1hcnlLZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ga2V5LnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVswXS50cmltKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSBtYWluIGFwaSBrZXkgZnJvbSB0aGUgZ2l2ZW4gYXBpIGtleVxyXG4gICAgICogQHBhcmFtIGtleSB0aGUga2V5IHRoYXQgaXMgcHJvdmlkZWQgYXMgYW4gYWRkaXRpb25hbCBwYXJhbWV0ZXJcclxuICAgICAqL1xyXG4gICAgZ2V0VmFsdWVGcm9tS2V5KGtleSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBrZXkuc3BsaXQoJ3wnKTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWzFdLnNwbGl0KCdbKl0uJykubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbMV0uc3BsaXQoJ1sqXS4nKVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgZGlzcGxheXMgY2hpcHMgaWYgdGhlIGFkZGl0aW9uYWwgcGFyYW1ldGVyIGlzIHNldCB0byBjaGVja2JveCBjaGlwc1xyXG4gICAgICovXHJcbiAgICBjaGVja2JveENoaXBzID0gKCkgPT4ge1xyXG4gICAgICAgIGZvciAoY29uc3QgcGFyYW1ldGVyIG9mIHRoaXMuc2VjdGlvbkRhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdDaGVja2JveCBDaGlwcycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNBcGlLZXlUb0Rpc3BsYXkgPSBwYXJhbWV0ZXIudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJlbW92ZXMgdGhlIGNoaXBzIGZyb20gdGhlIHRvcCBvZiB0aGUgbGlzdCB3aGVuIHNvbWUgb2YgdGhlIGl0ZW1zIGFyZSB1bmNoZWNrZWRcclxuICAgICAqL1xyXG4gICAgZGVsZXRlQ2hpcHMgPSAoY2hpcERhdGEpID0+IHtcclxuICAgICAgICAvLyAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NoZWNrXycgKyBjaGlwRGF0YS5rZXlQb3MpIGFzIEhUTUxJbnB1dEVsZW1lbnQpLmNoZWNrZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNoaXBzQXJyYXkuc3BsaWNlKHRoaXMuY2hpcHNBcnJheS5pbmRleE9mKGNoaXBEYXRhKSwgMSk7XHJcbiAgICAgICAgaWYgKHRoaXMuY2hpcHNBcnJheS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlwc0Rpc3BsYXkgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSByb3cgZGF0YSBvbiB0aGUgYmFzaXMgb2YgdGhlIHR5cGUgb2YgdGhlIGxpc3QgYW5kIHRoZSBlZGl0YWJsZSBhbmQgdmlzaWJsZSBjb25kaXRpb25zXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgdGhlIGNlZSBmaWVsZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBhcGkgcmVzcG9uc2UgZGF0YSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVSb3dEYXRhKGZpZWxkLCBkYXRhLCBsaXN0X3BvcywgZXhwYW5kYWJsZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IGFwaURhdGEgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGZpZWxkLCBkYXRhKTtcclxuICAgICAgICBleHBhbmRhYmxlICYmIGFwaURhdGEgJiYgKGRhdGFbJ2hhc0V4cGFuZGFibGVEYXRhJ10gPSB0cnVlKTtcclxuICAgICAgICBsZXQgbGFiZWxUeXBlID0gJyc7XHJcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgICAgICAgbGFiZWxUeXBlID0gKHRoaXMuaXNTaW5nbGVBUElLZXkgPyBmaWVsZC5hcGlfa2V5IDogZmllbGQucmVzcG9uc2VfYXBpX2tleSkgPyAnJyA6ICdTVEFUSUMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0xpbmsnKSB7XHJcbiAgICAgICAgICAgIGFwaURhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIGxldCBpc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChmaWVsZC5pc19lZGl0YWJsZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBpc0VkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc0RhdGEgPSB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2tleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNEYXRhW2tleV0gPSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkICYmIChmaWVsZC5pc19kaXNwbGF5ID09PSAyIHx8IGZpZWxkLmlzX2VkaXRhYmxlID09PSAyKSkge1xyXG4gICAgICAgICAgICBjb25zdCB1aUFwaVZhbHVlID0gdGhpcy5yZXR1cm5VbmlxdWVJZE1hcEFwaVZhbHVlKGRhdGEpO1xyXG4gICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IGZpZWxkLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgIGh0bWxfaWQ6IHRoaXMuaHRtbF9pZCArICctJyArIGZpZWxkLnVuaXF1ZV9pZCArICctJyArIGxpc3RfcG9zLFxyXG4gICAgICAgICAgICAgICAgZnJvbUZpZWxkOiAnTGlzdCcsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiBmaWVsZC5pc19kaXNwbGF5ID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbmRpdGlvbmFsVmlzaWJsZSh1aUFwaVZhbHVlLCBpc1Zpc2libGUsIGZpZWxkKSA6IGlzVmlzaWJsZSxcclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBmaWVsZC5pc19lZGl0YWJsZSA9PT0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25kaXRpb25hbEVkaXRhYmxlKHVpQXBpVmFsdWUsIGlzRWRpdGFibGUsIGZpZWxkKSA6IGlzRWRpdGFibGUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKGZpZWxkICYmIGZpZWxkLmZpZWxkX3R5cGUgJiYgKChmaWVsZC5maWVsZF90eXBlID09PSAnbGFiZWwnICYmIGZpZWxkLmZpZWxkX2xhYmVsICYmIGZpZWxkLmZpZWxkX2xhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChmaWVsZC5maWVsZF9sYWJlbF9jb25maWcgJiYgZmllbGQuZmllbGRfbGFiZWxfY29uZmlnLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSkpID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKGZpZWxkLCBkYXRhKS5maWVsZF9sYWJlbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUeXBlID09PSAnU1RBVElDJyA/IGZpZWxkLmZpZWxkX2xhYmVsIDogYXBpRGF0YSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc0RhdGFcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkOiBmaWVsZC51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICBodG1sX2lkOiB0aGlzLmh0bWxfaWQgKyAnLScgKyBmaWVsZC51bmlxdWVfaWQgKyAnLScgKyBsaXN0X3BvcyxcclxuICAgICAgICAgICAgICAgIGZyb21GaWVsZDogJ0xpc3QnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IGlzRWRpdGFibGUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKGZpZWxkICYmIGZpZWxkLmZpZWxkX3R5cGUgJiYgKChmaWVsZC5maWVsZF90eXBlID09PSAnbGFiZWwnICYmIGZpZWxkLmZpZWxkX2xhYmVsICYmIGZpZWxkLmZpZWxkX2xhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChmaWVsZC5maWVsZF9sYWJlbF9jb25maWcgJiYgZmllbGQuZmllbGRfbGFiZWxfY29uZmlnLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSkpID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKGZpZWxkLCBkYXRhKS5maWVsZF9sYWJlbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUeXBlID09PSAnU1RBVElDJyA/IGZpZWxkLmZpZWxkX2xhYmVsIDogYXBpRGF0YSxcclxuICAgICAgICAgICAgICAgIGRhdGE6IHJlc0RhdGEsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogbGlzdF9wb3NcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWRPYmouY2hlY2tib3ggJiYgdGhpcy5zZWN0aW9uRGF0YS5maWVsZHNbdGhpcy5zZWxlY3RlZE9iai5jaGVja2JveF0udW5pcXVlX2lkID09PSBmaWVsZC51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgdGhpcy5saXN0X2NoYW5nZShkYXRhLCAob2JqLnZhbHVlID09PSAndHJ1ZScgfHwgb2JqLnZhbHVlID09PSAnMScpLCBsaXN0X3BvcywgdHJ1ZSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiB0aGUgdmlzaWJsZSBjb25kaXRpb25cclxuICAgICAqIEBwYXJhbSBkYXRhIGFwaSByZXNwb25zZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBwcmVzZW50VmFsdWUgcHJlc2VudCB2YWx1ZSBvZiB0aGUgZmllbGRcclxuICAgICAqIEBwYXJhbSBmaWVsZCB0aGUgZmllbGQgcHJvcGVydHkgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldENvbmRpdGlvbmFsVmlzaWJsZShkYXRhLCBwcmVzZW50VmFsdWUsIGZpZWxkKSB7XHJcbiAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eShmaWVsZCwgZmllbGQudW5pcXVlX2lkLCAnJywgZGF0YSk7XHJcbiAgICAgICAgaWYgKHZpc2liaWxpdHlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpc2liaWxpdHlDb25kaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmVzZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGVkaXRhYmxlIGNvbmRpdGlvblxyXG4gICAgICogQHBhcmFtIGRhdGEgYXBpIHJlc3BvbnNlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHByZXNlbnRWYWx1ZSBwcmVzZW50IHZhbHVlIG9mIHRoZSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGZpZWxkIHRoZSBmaWVsZCBwcm9wZXJ0eSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2V0Q29uZGl0aW9uYWxFZGl0YWJsZShkYXRhLCBwcmVzZW50VmFsdWUsIGZpZWxkKSB7XHJcbiAgICAgICAgY29uc3QgZWRpdGFibGVDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKGZpZWxkLCBmaWVsZC51bmlxdWVfaWQsICcnLCBkYXRhKTtcclxuICAgICAgICBpZiAoZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVkaXRhYmxlQ29uZGl0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJlc2VudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRPRE86IERlbGV0ZSB0aGlzIGZ1bmN0aW9uIG9uY2UgdGhlIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMgZGVwZW5kIG9uIHRoZSBhcGkga2V5IHRoZW4gb25seSByZXR1cm4gdGhlIHNpbmdsZSBhcGkgcmVzcG9uc2Ugb2JqXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHJldHVybnMgdGhlIG1hcHBpbmcgb2YgdW5pcXVlIGlkIHRvIHRoZSBhcGkgdmFsdWVcclxuICAgICAqIEBwYXJhbSBhcGlSZXNwb25zZSB0aGUgcmVzcG9uc2Ugb2JqZWN0IGkuZS4gdGhlIHNpbmdsZSBpbmRleCBvZiB0aGUgYXJyYXlcclxuICAgICAqL1xyXG4gICAgcmV0dXJuVW5pcXVlSWRNYXBBcGlWYWx1ZShhcGlSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuZmllbGRJZE1hcEFwaUtleSkpIHtcclxuICAgICAgICAgICAgY29uc3QgdW5pcXVlSWQgPSB0aGlzLmZpZWxkSWRNYXBBcGlLZXlba2V5XTtcclxuICAgICAgICAgICAgb2JqW3VuaXF1ZUlkXSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoa2V5LCBhcGlSZXNwb25zZSkgPyB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGtleSwgYXBpUmVzcG9uc2UpIDogJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSBtYXAgYmV0d2VlbiBmaWVsZElkIGFuZCBhcGkga2V5XHJcbiAgICAgKi9cclxuICAgIHJldHVybkZpZWxkSWRNYXBBcGlLZXkoKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcykge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snICYmIGZpZWxkLmNoaWxkX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZF9maWVsZCBvZiBmaWVsZC5jaGlsZF9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHVybkZpZWxkSWRNYXBBcGlLZXlWYWx1ZShvYmosIGNoaWxkX2ZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleVZhbHVlKG9iaiwgZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmhpZGVuUm93cykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZXhwYW5kYWJsZURhdGEuYmxvY2tfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snICYmIGZpZWxkLmNoaWxkX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGRfZmllbGQgb2YgZmllbGQuY2hpbGRfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleVZhbHVlKG9iaiwgY2hpbGRfZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5GaWVsZElkTWFwQXBpS2V5VmFsdWUob2JqLCBmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5maWVsZElkTWFwQXBpS2V5ID0gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGlubmVyIGZ1bmN0aW9uIG9mIHJldHVybkZpZWxkSWRNYXBBcGlLZXlcclxuICAgIHByaXZhdGUgcmV0dXJuRmllbGRJZE1hcEFwaUtleVZhbHVlKG9iaiwgZmllbGQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFQSUtleSAmJiBmaWVsZC5hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgIG9ialtmaWVsZC5hcGlfa2V5XSA9IGZpZWxkLnVuaXF1ZV9pZDsgLy8gVE9ETzogU3VwcG9ydCBtdWx0aXBsZSBhcGkga2V5c1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5yZXNwb25zZV9hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVzcG9uc2VfYXBpX2tleS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoZmllbGQucmVzcG9uc2VfYXBpX2tleSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBmaWVsZC51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbZmllbGQucmVzcG9uc2VfYXBpX2tleV0gPSBmaWVsZC51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0cmlnZ2VyIGV2ZW50IGlmIHRoZXJlIGhhcyBiZWVuIGFuIGV2ZW50IHRyaWdnZXJlZCBvbiB0aGUgbGlzdFxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIG9uQ29tcG9uZW50RXZlbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gbm90IGEgbGlzdCB0aGF0IGlzIGRlY2xhcmVkIGFzIGEgc2VjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhICYmIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhICYmIHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdCAmJiB0aGlzLnNlY3Rpb25EYXRhLmV2ZW50X2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmlzRGVmYXVsdCAmJiBldmVudC5ldmVudF9uYW1lICYmIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCB0aGlzLnNlY3Rpb25EYXRhLmV2ZW50X2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXR0ZXIgc2V0dGVyIGdvZXMgaGVyZVxyXG4gICAgZ2V0IGlzU2luZ2xlQVBJS2V5KCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRvIHRyaWdnZXIgYW4gZXZlbnQgZm9yIGNsaWNraW5nIG9uIHRoZSBsaXN0IGNlbGxcclxuICAgICAqIEBwYXJhbSBkYXRhIHNpbmdsZSBjZWxsIGRhdGFcclxuICAgICAqL1xyXG4gICAgbGlzdENlbGxDbGljayhkYXRhOiBhbnksIHBvczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd0luZGV4ID0gcG9zO1xyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5nZXRMaXN0Q2VsbERhdGEoZGF0YS5maWVsZHMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmltYXJ5S2V5VmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByaW1hcnlLZXlWYWwsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YVt0aGlzLnByaW1hcnlLZXlWYWxdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0Q2VsbEV2ZW50Q29uZmlnKSkpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdCAmJiBldmVudC5ldmVudF9uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvbmNsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoZXZlbnQsIHRoaXMubGlzdENlbGxFdmVudENvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldFJhbmdlTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMucGFnaW5hdGlvblNob3dpbmdSZXN1bHRIaW50KS5yZXBsYWNlKCcldmFsdWUlJywgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlICsgXCIgLyBcIiArIHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdW5zdWJzY3JpYmUgYWxsIHRoZSBzdWJzY3JpcHRpb25zIG9uIG5nRGVzdHJveVxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAodGhpcy52YXJpYWJsZU9ialtcclxuICAgICAgICAvLyAgICAgJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA/IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkIDogdGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uX2lkXSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgIC8vICAgICAgICAgJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQgPyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA6IHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbl9pZF0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMudmFyaWFibGVPYmpbJ3Nob3dNYW5kYXRvcnlFcnJvck1zZ18nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmFyaWFibGVPYmpbJ3Nob3dNYW5kYXRvcnlFcnJvck1zZ18nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhenlJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubGF6eUludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWVzTGF6eSA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHBhZ2VDaGFuZ2VFdmVudChldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudChldmVudC5wYWdlSW5kZXgpXHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG5cdDxkaXYgKm5nSWY9XCJzaG93RmlsdGVyXCIgY2xhc3M9XCJmaWx0ZXItY29udGFpbmVyXCI+XHJcblx0XHQ8bWF0LWZvcm0tZmllbGQgZmxvYXRMYWJlbD1cIm5ldmVyXCI+XHJcblx0XHRcdDxpbnB1dCBbKG5nTW9kZWwpXT1cImZpbHRlclR4dFwiIGZpbHRlclR4dCBtYXRJbnB1dCAoa2V5dXApPVwiYXBwbHlGaWx0ZXIoKVwiIHBsYWNlaG9sZGVyPVwie3tmaWx0ZXJQbGFjZWhvbGRlclRleHR9fVwiPlxyXG5cdFx0PC9tYXQtZm9ybS1maWVsZD5cclxuXHQ8L2Rpdj5cclxuXHQ8IS0tICMjIyMjIyMjIyMjIyMjIyMjIyBTaG93IEhpZGUgJiBSZWFycmFuZ2UgQ29sdW1uIEZpbHRlciAjIyMjIyMjIyMjIyMjIyMjIyMjIyAtLT5cclxuICAgIDxkaXY+PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4gYnRuLXNlY29uZGFyeSBidG4tc20gbWItMVwiIHRpdGxlPVwiQ29sdW1uIEZpbHRlclwiICpuZ0lmPVwiY29sdW1uRmlsdGVyVHlwZS5pbmRleE9mKCdub25lJykgPT0gLTFcIiAoY2xpY2spPVwic2hvd0hpZGVGaWx0ZXIoJ3Nob3ctaGlkZS1saXN0LWNvbnRhaW5lci0nLHNlY3Rpb25EYXRhLnVuaXF1ZV9pZClcIj7imLA8L2J1dHRvbj48L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJzaG93LWhpZGUtbGlzdC1jb250YWluZXIte3tzZWN0aW9uRGF0YS51bmlxdWVfaWR9fVwiIGNsYXNzPVwic2hvdy1oaWRlLWNvbnRhaW5lciBjb2wtMyBtdC0yMCBkLW5vbmVcIiAqbmdJZj1cImNvbHVtbkZpbHRlclR5cGUuaW5kZXhPZignbm9uZScpID09IC0xXCI+XHJcbiAgICAgICAgPGRpdj48bGFiZWwgKm5nSWY9XCJzZWN0aW9uRGF0YS5maWVsZF9sYWJlbFwiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgbS0yXCI+e3tzZWN0aW9uRGF0YS5maWVsZF9sYWJlbH19IFNldHRpbmc8L2xhYmVsPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJleGFtcGxlLWxpc3RcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPiAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJleGFtcGxlLWJveFwiIFtuZ0NsYXNzXT1cInsnZC1ub25lJzogIWNvbHVtblNob3dIaWRlUmVhcnJhbmdlW2ldLmlzVmlzaWJsZX1cIiAqbmdGb3I9XCJsZXQgZiBvZiBjb2x1bW5TaG93SGlkZVJlYXJyYW5nZTsgbGV0IGkgPSBpbmRleFwiIGNka0RyYWc+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZHJhZy1jb250ZW50XCIgKm5nSWY9XCJjb2x1bW5GaWx0ZXJUeXBlLmluZGV4T2YoJ3Nob3doaWRlJykgIT0gLTFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IFsobmdNb2RlbCldPVwiY29sdW1uU2hvd0hpZGVSZWFycmFuZ2VbaV0uc2hvd0NvbHVtblwiIFtkaXNhYmxlZF09XCJjb2x1bW5TaG93SGlkZVJlYXJyYW5nZVtpXS5pc01hbmRhdG9yeVwiPnt7Zi5maWVsZF9sYWJlbH19PC9tYXQtY2hlY2tib3g+ICBcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGRyYWctY29udGVudCBwLTFcIiAqbmdJZj1cImNvbHVtbkZpbHRlclR5cGUuaW5kZXhPZignc2hvd2hpZGUnKSA9PSAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e2YuZmllbGRfbGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj48bGFiZWwgKm5nSWY9XCJmaWx0ZXJFcnJvck1zZ1wiIGNsYXNzPVwidGV4dC1kYW5nZXIgbS0yXCI+e3tmaWx0ZXJFcnJvck1zZ319PC9sYWJlbD48L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtLTJcIiAoY2xpY2spPVwicmVzZXRSZXN0cnVjdHVyaW5nKClcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS0yXCIgKGNsaWNrKT1cImFwcGx5UmVzdHJ1Y3R1cmluZygpXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwic2hvd0Vycm9yT25OZXh0XCI+XHJcblx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogbWVzc2FnZS5jb2xvcn1cIj5cclxuXHRcdFx0XHR7e21lc3NhZ2UubWVzc2FnZV90ZXh0fX1cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy1jb250YWluZXI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFub0RhdGFGb3VuZFwiPlxyXG5cdFx0PGRpdiAqbmdJZj1cImNoaXBzRGlzcGxheVwiIGNsYXNzPVwiY2hpcGxheW91dFwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjaGlwQXJyYXkgb2YgY2hpcHNBcnJheVwiIGNsYXNzPVwiY2hpcHNwYWNlXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjaGlwY3NzXCI+XHJcblx0XHRcdFx0XHR7eyBjaGlwQXJyYXkua2V5TmFtZSB9fSA8c3BhbiBjbGFzcz1cImNoaXBkZWxldGVjc3NcIiAoY2xpY2spPVwiZGVsZXRlQ2hpcHMoY2hpcEFycmF5KVwiPng8L3NwYW4+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImxpc3QtbG9hZGVyIHt7bGlzdExvYWRpbmcgPyAnbGlzdC1wZW5kaW5nJzonbGlzdC1sb2FkZWQnfX1cIj48L2Rpdj5cclxuXHRcdDxuZy1jb250YWluZXJcclxuXHRcdFx0Km5nSWY9XCJhZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd0Nhcm91c2VsJ10gJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dDYXJvdXNlbCddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJtb3ZlLWN0cmwgcHJldmlvdXNcIiB0aXRsZT1cIlByZXZpb3VzXCIgKGNsaWNrKT1cInByZXZpb3VzKClcIj4mbHQ7PC9kaXY+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGRhdGEgb2Ygcm93RGF0YVNob3duOyBpbmRleCBhcyBwb3NcIiBjbGFzcz1cImxpc3QtY29uYXRpYW5lciBkYXRhLXJvd1wiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09ICdMaXN0LU11bHRpLVNlbGVjdC1WMidcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LWNoZWNrYm94LWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgW2F0dHIuYXJpYS1sYWJlbF09XCInT3JkZXIgJysgcG9zIFwiIHR5cGU9XCJjaGVja2JveFwiXHJcblx0XHRcdFx0XHRcdFx0W25hbWVdPVwic2VsZWN0ZWRPYmouY2hlY2tib3ggPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5jaGVja2JveF1bJ3VuaXF1ZV9pZCddICsnXycgKyBwb3MgOiAnY2hlY2tfJyArIHBvc1wiXHJcblx0XHRcdFx0XHRcdFx0W2lkXT1cInNlbGVjdGVkT2JqLmNoZWNrYm94ID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWyd1bmlxdWVfaWQnXSArJ18nICsgcG9zIDogJ2NoZWNrXycgKyBwb3NcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwibGlzdC1jaGVja2JveFwiIChjaGFuZ2UpPVwibGlzdF9jaGFuZ2UoZGF0YSwgJGV2ZW50LnRhcmdldC5jaGVja2VkLCBwb3MpXCJcclxuXHRcdFx0XHRcdFx0XHRbY2hlY2tlZF09XCJzZWxlY3RlZE9iai5jaGVja2JveCA/IGRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLmNoZWNrYm94XVsncm93RGF0YSddWyd2YWx1ZSddID09ICcxJyA6IGRhdGFbcHJpbWFyeUtleVZhbF0gPT0gY2hlY2tlZEl0ZW1zW3Bvc11cIlxyXG5cdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJzZWxlY3RlZE9iai5jaGVja2JveCA/ICFkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5jaGVja2JveF1bJ3Jvd0RhdGEnXVsnZWRpdGFibGUnXSA6IGZhbHNlXCIgLz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWxpc3QtY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdGZvcj1cInt7c2VsZWN0ZWRPYmouY2hlY2tib3ggPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5jaGVja2JveF1bJ3VuaXF1ZV9pZCddICsnXycgKyBwb3MgOiAnY2hlY2tfJyArIHBvc319XCI+e3tzZWxlY3RlZE9iai5jaGVja2JveFxyXG5cdFx0XHRcdFx0XHRcdD8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWydmaWVsZF9sYWJlbCddIDogJyd9fTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnTGlzdC1TaW5nbGUtU2VsZWN0LVYyJ1wiPlxyXG5cdFx0XHRcdFx0PGRpdiBjbGFzcz1cImxpc3QtcmFkaW8tY29udGFpbmVyXCI+XHJcblx0XHRcdFx0XHRcdDxpbnB1dCBbYXR0ci5hcmlhLWxhYmVsXT1cIidPcmRlciAnKyBwb3MgXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRbaWRdPVwic2VsZWN0ZWRPYmoucmFkaW8gPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5yYWRpb11bJ3VuaXF1ZV9pZCddKydfJyArIHBvcyA6ICdyYWRpbycgKyAnXycgK3Bvc1wiXHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LXJhZGlvXCIgWyhuZ01vZGVsKV09XCJyYWRpb1ZhbHVlXCIgW3ZhbHVlXT1cInNlbGVjdGVkT2JqLnJhZGlvID8gcG9zOiBkYXRhW3ByaW1hcnlLZXlWYWxdXCJcclxuXHRcdFx0XHRcdFx0XHQoY2hhbmdlKT1cImxpc3RfY2hhbmdlKGRhdGEsICRldmVudC50YXJnZXQuY2hlY2tlZClcIlxyXG5cdFx0XHRcdFx0XHRcdFtkaXNhYmxlZF09XCJzZWxlY3RlZE9iai5yYWRpbyA/ICFkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5yYWRpb11bJ3Jvd0RhdGEnXVsnZWRpdGFibGUnXSA6IGZhbHNlXCIgLz5cclxuXHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY3VzdG9tLWxpc3QtcmFkaW9cIlxyXG5cdFx0XHRcdFx0XHRcdGZvcj1cInt7c2VsZWN0ZWRPYmoucmFkaW8gPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5yYWRpb11bJ3VuaXF1ZV9pZCddKydfJyArIHBvcyA6ICdyYWRpbycgKyAnXycgK3Bvc319XCI+e3tzZWxlY3RlZE9iai5yYWRpb1xyXG5cdFx0XHRcdFx0XHRcdD8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmoucmFkaW9dWydmaWVsZF9sYWJlbCddIDogJyd9fTwvbGFiZWw+XHJcblx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8ZGl2IFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJjYXJvdXNlbC1pdGVtIGxpc3QtaXRlbSBsaXN0LWl0ZW0tcG9zLXt7cG9zfX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fSB7e2xpc3RMb2FkaW5nID8gJ2xpc3QtcGVuZGluZyc6J2xpc3QtbG9hZGVkJ319IHt7c2VsZWN0ZWRSb3dJbmRleCA9PT0gcG9zID8gJ2xpc3QtaXRlbS1zZWxlY3RlZCcgOiAnJ319IHt7dHlwZSA9PSAnTGlzdC1NdWx0aS1TZWxlY3QtVjInID8gKHN0b3JlRGF0YS5pbmNsdWRlcyhkYXRhW3ByaW1hcnlLZXlWYWxdKT8gJ2xpc3QtaXRlbS1jaGVja2VkJyA6ICdsaXN0LWl0ZW0tdW5jaGVja2VkJykgOiAnJ319IGRhdGEtbGlzdCBzaG93LWluLXJvd1wiXHJcblx0XHRcdFx0XHQoY2xpY2spPVwibGlzdENlbGxDbGljayhkYXRhLCBwb3MpXCIgKGtleXVwLmVudGVyKT1cImxpc3RDZWxsQ2xpY2soZGF0YSwgcG9zKVwiPlxyXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZGF0YS5maWVsZHM7IGluZGV4IGFzIHBvc2l0aW9uXCI+XHJcblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5maWVsZF90eXBlID09PSAnR2VuZXJpYyBCbG9jayc7IGVsc2UgZWxzZUZpZWxkXCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdlbmVyaWMtYmxvY2stY29udGFpbmVyIHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2hpbGRfZmllbGQgb2YgZmllbGQuY2hpbGRfZmllbGRzOyBpbmRleCBhcyBjaGlsZF9wb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6Y2hpbGRfZmllbGQsZGF0YTpkYXRhLHBvczpwb3MscG9zaXRpb246J2NoaWxkXycrY2hpbGRfcG9zaXRpb259XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAjZWxzZUZpZWxkPlxyXG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmaWVsZDpmaWVsZCxkYXRhOmRhdGEscG9zOnBvcyxwb3NpdGlvbjpwb3NpdGlvbn1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT09ICdMaXN0LUV4cGFuZGFibGUtVjInICYmIGhpZGVuUm93c1wiPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjZWUtbGlzdC1leHBhbmRhYmxlLW9wdGlvbiB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319IHt7ZGF0YVsnaGFzRXhwYW5kYWJsZURhdGEnXT8naGFzLWV4cGFuZGFibGUtZGF0YSc6J25vLWV4cGFuZGFibGUtZGF0YSd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiIChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGRhdGEgPyBudWxsIDogZGF0YVwiPnt7ZXhwYW5kZWRFbGVtZW50XHJcblx0XHRcdFx0XHRcdFx0XHQ9PT0gZGF0YSA/IGNvbGxhcHNlVGl0bGUgOiBleHBhbmRUaXRsZX19PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjZWUtbGlzdC1kZXRhaWwge3tpc19ib290c3RyYXA/J2NvbC0xMic6Jyd9fSB7e2V4cGFuZGVkRWxlbWVudCA9PT0gZGF0YT8nY2VlLWV4cGFuZGVkLXJvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJ7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkYXRhLmV4cGFuZGFibGVfZmllbGRzOyBpbmRleCBhcyBwb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snOyBlbHNlIGVsc2VGaWVsZFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnZW5lcmljLWJsb2NrLWNvbnRhaW5lciB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNoaWxkX2ZpZWxkIG9mIGZpZWxkLmNoaWxkX2ZpZWxkczsgaW5kZXggYXMgY2hpbGRfcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmNoaWxkX2ZpZWxkLCBkYXRhOmRhdGEsIHBvczpwb3MsIHBvc2l0aW9uOidjaGlsZF8nK2NoaWxkX3Bvc2l0aW9uLCBleHBhbmRhYmxlOnRydWV9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAjZWxzZUZpZWxkPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6ZmllbGQsIGRhdGE6ZGF0YSwgcG9zOnBvcywgcG9zaXRpb246cG9zaXRpb24sIGV4cGFuZGFibGU6dHJ1ZX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwibW92ZS1jdHJsIG5leHRcIiB0aXRsZT1cIk5leHRcIiAoY2xpY2spPVwibmV4dCgpXCI+Jmd0OzwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8bmctY29udGFpbmVyXHJcblx0XHRcdCpuZ0lmPVwiIWFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93Q2Fyb3VzZWwnXSB8fCAoYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dDYXJvdXNlbCddICYmIGFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93Q2Fyb3VzZWwnXS50b0xvd2VyQ2FzZSgpICE9ICd0cnVlJylcIj5cclxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBkaXNwbGF5VmFsdWVzTGF6eTsgaW5kZXggYXMgcG9zXCIgY2xhc3M9XCJsaXN0LWNvbmF0aWFuZXIgZGF0YS1yb3dcIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnTGlzdC1NdWx0aS1TZWxlY3QtVjInXCI+XHJcblx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwibGlzdC1jaGVja2JveC1jb250YWluZXJcIj5cclxuXHRcdFx0XHRcdFx0PGlucHV0IFthdHRyLmFyaWEtbGFiZWxdPVwiJ09yZGVyICcrIHBvcyBcIiB0eXBlPVwiY2hlY2tib3hcIlxyXG5cdFx0XHRcdFx0XHRcdFtuYW1lXT1cInNlbGVjdGVkT2JqLmNoZWNrYm94ID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWyd1bmlxdWVfaWQnXSArJ18nICsgcG9zIDogJ2NoZWNrXycgKyBwb3NcIlxyXG5cdFx0XHRcdFx0XHRcdFtpZF09XCJzZWxlY3RlZE9iai5jaGVja2JveCA/IGRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLmNoZWNrYm94XVsndW5pcXVlX2lkJ10gKydfJyArIHBvcyA6ICdjaGVja18nICsgcG9zXCJcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImxpc3QtY2hlY2tib3hcIiAoY2hhbmdlKT1cImxpc3RfY2hhbmdlKGRhdGEsICRldmVudC50YXJnZXQuY2hlY2tlZCwgcG9zKVwiXHJcblx0XHRcdFx0XHRcdFx0W2NoZWNrZWRdPVwic2VsZWN0ZWRPYmouY2hlY2tib3ggPyBkYXRhLmZpZWxkc1tzZWxlY3RlZE9iai5jaGVja2JveF1bJ3Jvd0RhdGEnXVsndmFsdWUnXSA9PSAnMScgOiBkYXRhW3ByaW1hcnlLZXlWYWxdID09IGNoZWNrZWRJdGVtc1twb3NdXCJcclxuXHRcdFx0XHRcdFx0XHRbZGlzYWJsZWRdPVwic2VsZWN0ZWRPYmouY2hlY2tib3ggPyAhZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWydyb3dEYXRhJ11bJ2VkaXRhYmxlJ10gOiBmYWxzZVwiIC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1saXN0LWNoZWNrYm94XCJcclxuXHRcdFx0XHRcdFx0XHRmb3I9XCJ7e3NlbGVjdGVkT2JqLmNoZWNrYm94ID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmouY2hlY2tib3hdWyd1bmlxdWVfaWQnXSArJ18nICsgcG9zIDogJ2NoZWNrXycgKyBwb3N9fVwiPnt7c2VsZWN0ZWRPYmouY2hlY2tib3hcclxuXHRcdFx0XHRcdFx0XHQ/IGRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLmNoZWNrYm94XVsnZmllbGRfbGFiZWwnXSA6ICcnfX08L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInR5cGUgPT0gJ0xpc3QtU2luZ2xlLVNlbGVjdC1WMidcIj5cclxuXHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJsaXN0LXJhZGlvLWNvbnRhaW5lclwiPlxyXG5cdFx0XHRcdFx0XHQ8aW5wdXQgW2F0dHIuYXJpYS1sYWJlbF09XCInT3JkZXIgJysgcG9zIFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJyYWRpb1wiXHJcblx0XHRcdFx0XHRcdFx0W2lkXT1cInNlbGVjdGVkT2JqLnJhZGlvID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmoucmFkaW9dWyd1bmlxdWVfaWQnXSsnXycgKyBwb3MgOiAncmFkaW8nICsgJ18nICtwb3NcIlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwibGlzdC1yYWRpb1wiIFsobmdNb2RlbCldPVwicmFkaW9WYWx1ZVwiIFt2YWx1ZV09XCJzZWxlY3RlZE9iai5yYWRpbyA/IHBvczogZGF0YVtwcmltYXJ5S2V5VmFsXVwiXHJcblx0XHRcdFx0XHRcdFx0KGNoYW5nZSk9XCJsaXN0X2NoYW5nZShkYXRhLCAkZXZlbnQudGFyZ2V0LmNoZWNrZWQpXCJcclxuXHRcdFx0XHRcdFx0XHRbZGlzYWJsZWRdPVwic2VsZWN0ZWRPYmoucmFkaW8gPyAhZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmoucmFkaW9dWydyb3dEYXRhJ11bJ2VkaXRhYmxlJ10gOiBmYWxzZVwiIC8+XHJcblx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImN1c3RvbS1saXN0LXJhZGlvXCJcclxuXHRcdFx0XHRcdFx0XHRmb3I9XCJ7e3NlbGVjdGVkT2JqLnJhZGlvID8gZGF0YS5maWVsZHNbc2VsZWN0ZWRPYmoucmFkaW9dWyd1bmlxdWVfaWQnXSsnXycgKyBwb3MgOiAncmFkaW8nICsgJ18nICtwb3N9fVwiPnt7c2VsZWN0ZWRPYmoucmFkaW9cclxuXHRcdFx0XHRcdFx0XHQ/IGRhdGEuZmllbGRzW3NlbGVjdGVkT2JqLnJhZGlvXVsnZmllbGRfbGFiZWwnXSA6ICcnfX08L2xhYmVsPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0PGRpdiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCJcclxuXHRcdFx0XHRcdGNsYXNzPVwibGlzdC1pdGVtIGxpc3QtaXRlbS1wb3Mte3twb3N9fSB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319IHt7bGlzdExvYWRpbmcgPyAnbGlzdC1wZW5kaW5nJzonbGlzdC1sb2FkZWQnfX0ge3tzZWxlY3RlZFJvd0luZGV4ID09PSBwb3MgPyAnbGlzdC1pdGVtLXNlbGVjdGVkJyA6ICcnfX0ge3t0eXBlID09ICdMaXN0LU11bHRpLVNlbGVjdC1WMicgPyAoc3RvcmVEYXRhLmluY2x1ZGVzKGRhdGFbcHJpbWFyeUtleVZhbF0pPyAnbGlzdC1pdGVtLWNoZWNrZWQnIDogJ2xpc3QtaXRlbS11bmNoZWNrZWQnKSA6ICcnfX0gZGF0YS1saXN0IHNob3ctaW4tcm93XCJcclxuXHRcdFx0XHRcdChjbGljayk9XCJsaXN0Q2VsbENsaWNrKGRhdGEsIHBvcylcIiAoa2V5dXAuZW50ZXIpPVwibGlzdENlbGxDbGljayhkYXRhLCBwb3MpXCI+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkYXRhLmZpZWxkczsgaW5kZXggYXMgcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJzsgZWxzZSBlbHNlRmllbGRcIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2VuZXJpYy1ibG9jay1jb250YWluZXIge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjaGlsZF9maWVsZCBvZiBmaWVsZC5jaGlsZF9maWVsZHM7IGluZGV4IGFzIGNoaWxkX3Bvc2l0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmaWVsZDpjaGlsZF9maWVsZCxkYXRhOmRhdGEscG9zOnBvcyxwb3NpdGlvbjonY2hpbGRfJytjaGlsZF9wb3NpdGlvbn1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlICNlbHNlRmllbGQ+XHJcblx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmZpZWxkLGRhdGE6ZGF0YSxwb3M6cG9zLHBvc2l0aW9uOnBvc2l0aW9ufVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PT0gJ0xpc3QtRXhwYW5kYWJsZS1WMicgJiYgaGlkZW5Sb3dzXCI+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImNlZS1saXN0LWV4cGFuZGFibGUtb3B0aW9uIHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tkYXRhWydoYXNFeHBhbmRhYmxlRGF0YSddPydoYXMtZXhwYW5kYWJsZS1kYXRhJzonbm8tZXhwYW5kYWJsZS1kYXRhJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0PGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImV4cGFuZGVkRWxlbWVudCA9IGV4cGFuZGVkRWxlbWVudCA9PT0gZGF0YSA/IG51bGwgOiBkYXRhXCI+e3tleHBhbmRlZEVsZW1lbnRcclxuXHRcdFx0XHRcdFx0XHRcdD09PSBkYXRhID8gY29sbGFwc2VUaXRsZSA6IGV4cGFuZFRpdGxlfX08L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRjbGFzcz1cImNlZS1saXN0LWRldGFpbCB7e2lzX2Jvb3RzdHJhcD8nY29sLTEyJzonJ319IHt7ZXhwYW5kZWRFbGVtZW50ID09PSBkYXRhPydjZWUtZXhwYW5kZWQtcm93JzonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cInt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGRhdGEuZXhwYW5kYWJsZV9maWVsZHM7IGluZGV4IGFzIHBvc2l0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZC5maWVsZF90eXBlID09PSAnR2VuZXJpYyBCbG9jayc7IGVsc2UgZWxzZUZpZWxkXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImdlbmVyaWMtYmxvY2stY29udGFpbmVyIHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgY2hpbGRfZmllbGQgb2YgZmllbGQuY2hpbGRfZmllbGRzOyBpbmRleCBhcyBjaGlsZF9wb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Km5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6Y2hpbGRfZmllbGQsIGRhdGE6ZGF0YSwgcG9zOnBvcywgcG9zaXRpb246J2NoaWxkXycrY2hpbGRfcG9zaXRpb24sIGV4cGFuZGFibGU6dHJ1ZX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlICNlbHNlRmllbGQ+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmaWVsZDpmaWVsZCwgZGF0YTpkYXRhLCBwb3M6cG9zLCBwb3NpdGlvbjpwb3NpdGlvbiwgZXhwYW5kYWJsZTp0cnVlfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8IS0tXHJcblx0PGRpdiBjbGFzcz1cInRleHQtY2VudGVyIG15LTVcIiBbaGlkZGVuXT1cIiFzaG93TG9hZGluZ1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImxkcy1yaXBwbGVcIj5cclxuXHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdFx0PGRpdj48L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PiAtLT5cclxuXHJcblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIm5vRGF0YUZvdW5kICYmICFzaG93TG9hZGluZyAmJiAhc2hvd1NrZWxldG9uTG9hZGVyICYmIHNob3dOb0RhdGFGb3VuZExhYmVsXCI+XHJcblx0XHQ8aDUgY2xhc3M9XCJuby1kYXRhLWluZm8gdGV4dC1jZW50ZXIgbXktNVwiPnt7bm9EYXRhRm91bmRMYWJlbH19PC9oNT5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0PG5nLWNvbnRhaW5lclxyXG5cdFx0Km5nSWY9XCJzaG93U2tlbGV0b25Mb2FkZXIgJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dTa2VsZXRvbkxvYWRlciddICYmIGFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93U2tlbGV0b25Mb2FkZXInXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJ1wiPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZGF0YSBvZiBsaXN0RWxlbWVudHM7IGluZGV4IGFzIHBvc1wiIGNsYXNzPVwibGlzdC1jb25hdGlhbmVyXCI+XHJcblx0XHRcdDxkaXYgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiXHJcblx0XHRcdFx0Y2xhc3M9XCJsaXN0LWl0ZW0gbGlzdC1pdGVtLXBvcy17e3Bvc319IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tsaXN0TG9hZGluZyA/ICdsaXN0LXBlbmRpbmcnOidsaXN0LWxvYWRlZCd9fSB7e3NlbGVjdGVkUm93SW5kZXggPT09IHBvcyA/ICdsaXN0LWl0ZW0tc2VsZWN0ZWQnIDogJyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIHNlY3Rpb25EYXRhLmZpZWxkczsgaW5kZXggYXMgcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhTG9hZGluZzsgY29udGV4dDp7ZmllbGQ6ZmllbGQsZGF0YTpkYXRhLHBvczpwb3MscG9zaXRpb246cG9zaXRpb259XCI+XHJcblx0XHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIW5vRGF0YUZvdW5kXCI+XHJcblx0XHQ8IS0tIDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd1BhZ2luYXRpb24gJiYgYXV0b1BhZ2luYXRpb25cIj5cclxuXHRcdFx0PHAgY2xhc3M9XCJwYWdpbmF0aW9uLXRleHQtY29udGFpbmVyXCI+e3tnZXRSYW5nZUxhYmVsfX08L3A+XHJcblx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwicGFnaW5hdGlvbkZpcnN0TGFiZWxcIiBbZGlzYWJsZWRdPVwicGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gMVwiXHJcblx0XHRcdFx0KGNsaWNrKT1cInNldEN1cnJlbnQoMSlcIiBjbGFzcz1cInBhZ2luYXRpb24tYnRuLWZpcnN0XCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBGaXJzdFwiPnt7cGFnaW5hdGlvbkZpcnN0TGFiZWx9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHJvbGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwicGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gMVwiIChjbGljayk9XCJwYWdpbmF0aW9uUHJldmlvdXMoKVwiXHJcblx0XHRcdFx0Y2xhc3M9XCJwYWdpbmF0aW9uLWJ0bi1wcmV2aW91c1wiIGFyaWEtbGFiZWw9XCJTZWxlY3QgUHJldmlvdXNcIj57e3BhZ2luYXRpb25QcmV2aW91c0xhYmVsfX08L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiAqbmdGb3I9XCJsZXQgcGFnZU51bWJlciBvZiBwYWdlc1wiIHJvbGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwicGFnZU51bWJlciA9PT0gJy4uLidcIlxyXG5cdFx0XHRcdChjbGljayk9XCJzZXRDdXJyZW50KHBhZ2VOdW1iZXIpXCJcclxuXHRcdFx0XHRjbGFzcz1cInBhZ2luYXRpb24tYnRuLXBhZ2Uge3twYWdlTnVtYmVyID09PSBwYWdpbmF0aW9uLmN1cnJlbnRQYWdlPydhY3RpdmUnOicnfX1cIlxyXG5cdFx0XHRcdGF0dHIuYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlIHt7cGFnZU51bWJlcn19XCI+e3twYWdlTnVtYmVyfX08L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgW2Rpc2FibGVkXT1cInBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09IHBhZ2luYXRpb24ucGFnZUNvdW50XCIgKGNsaWNrKT1cInBhZ2luYXRpb25OZXh0KClcIlxyXG5cdFx0XHRcdGNsYXNzPVwicGFnaW5hdGlvbi1idG4tbmV4dFwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgTmV4dFwiPnt7cGFnaW5hdGlvbk5leHRMYWJlbH19PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwicGFnaW5hdGlvbkxhc3RMYWJlbFwiIFtkaXNhYmxlZF09XCJwYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PSBwYWdpbmF0aW9uLnBhZ2VDb3VudFwiXHJcblx0XHRcdFx0KGNsaWNrKT1cInNldEN1cnJlbnQocGFnaW5hdGlvbi5wYWdlQ291bnQpXCIgY2xhc3M9XCJwYWdpbmF0aW9uLWJ0bi1sYXN0XCJcclxuXHRcdFx0XHRhcmlhLWxhYmVsPVwiU2VsZWN0IExhc3RcIj57e3BhZ2luYXRpb25MYXN0TGFiZWx9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8c2VsZWN0IChjaGFuZ2UpPVwib25QYWdpbmF0aW9uQ291bnRDaGFuZ2UoKTsgc2V0UGFnaW5hdGlvbkNvdW50KClcIlxyXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiJ1NlbGVjdCBubyBvZiBpdGVtcyB0byBiZSBkaXNwbGF5ZWQnXCIgWyhuZ01vZGVsKV09XCJwYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnRcIlxyXG5cdFx0XHRcdGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudC1zZWxlY3RvclwiPlxyXG5cdFx0XHRcdDxvcHRpb24gW25nVmFsdWVdPVwiZGF0YVwiIFtzZWxlY3RlZF09XCJkYXRhID09IHBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudFwiXHJcblx0XHRcdFx0XHQqbmdGb3I9XCJsZXQgZGF0YSBvZiBwYWdpbmF0aW9uLnBhZ2VJdGVtc1wiPlxyXG5cdFx0XHRcdFx0e3tkYXRhfX08L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHQ8L2Rpdj4gLS0+XHJcblx0XHQ8bWF0LXBhZ2luYXRvciAqbmdJZj1cInNob3dQYWdpbmF0aW9uICYmIGF1dG9QYWdpbmF0aW9uXCIgc3R5bGUtcGFnaW5hdG9yIChwYWdlKT1cInBhZ2VDaGFuZ2VFdmVudCgkZXZlbnQpXCIgW2xlbmd0aF09XCJwYWdpbmF0aW9uLml0ZW1Db3VudFwiIFtwYWdlU2l6ZV09XCJwYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnRcIlxyXG5cdFx0XHRbc2hvd1RvdGFsUGFnZXNdPVwiM1wiIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnaW5hdGlvbi5wYWdlSXRlbXNcIiBzaG93Rmlyc3RMYXN0QnV0dG9ucz5cclxuXHRcdDwvbWF0LXBhZ2luYXRvcj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2NlbGxEYXRhIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LXBvcz1cInBvc1wiIGxldC1wb3NpdGlvbj1cInBvc2l0aW9uXCJcclxuXHRsZXQtZXhwYW5kYWJsZT1cImV4cGFuZGFibGVcIj5cclxuXHQ8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC5maWVsZF90eXBlXCI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLWxhYmVsIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtbGFiZWw+IC0tPlxyXG5cdFx0XHQ8IS0tIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXJcclxuXHRcdFx0XHRcdCpuZ0lmPVwiXCI+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyXHJcblx0XHRcdFx0XHRcdCpuZ0lmPVwiZmllbGQuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykgfHwgKGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiBmaWVsZC5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIDsgZWxzZSBub3REeW5hbWljXCI+XHJcblx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0XHRcdFx0W2lubmVySFRNTF09XCJzZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZShmaWVsZCwgZGF0YSkuZmllbGRfbGFiZWxcIj48L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlICNub3REeW5hbWljPlxyXG5cdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdHt7ZmllbGQuZmllbGRfbGFiZWx9fTwvZGl2PlxyXG5cdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9uZy10ZW1wbGF0ZT4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUZXh0ZmllbGQnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIGtlZXBTdGF0ZTogdHJ1ZSxcclxuXHRcdFx0XHRwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS10ZXh0ZmllbGQgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiIFtrZWVwU3RhdGVdPVwidHJ1ZVwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS10ZXh0ZmllbGQ+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ01lbnUnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLW1lbnUgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1tZW51PiAtLT5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidJbWFnZSdcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgZmllbGREYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1jZWUtaW1hZ2UgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1pbWFnZT4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInUGlja2VyJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBmaWVsZERhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS1waWNrZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1waWNrZXI+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0J1dHRvbidcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgZmllbGREYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1jZWUtYnV0dG9uIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtYnV0dG9uPiAtLT5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidMaW5rJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBmaWVsZERhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS1saW5rIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtbGluaz4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVmlkZW8nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLXZpZGVvIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtdmlkZW8+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1RhYmxlLVYyJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBzZWN0aW9uRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLXRhYmxlLXYyIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtzZWN0aW9uRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCJcclxuXHRcdFx0XHRbdHlwZV09XCJmaWVsZC5maWVsZF90eXBlXCI+XHJcblx0XHRcdDwvYXBwLWNlZS10YWJsZS12Mj4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCJbJ0xpc3QtVjInLCAnTGlzdC1FeHBhbmRhYmxlLVYyJ10uaW5jbHVkZXMoZmllbGQuZmllbGRfdHlwZSkgPyBmaWVsZC5maWVsZF90eXBlIDogJydcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PGFwcC1saXN0LXJlbmRlcmVyLXYyIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtzZWN0aW9uRGF0YV09XCJmaWVsZFwiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIlxyXG5cdFx0XHRcdFt0eXBlXT1cImZpZWxkLmZpZWxkX3R5cGVcIiBbY2hpbGRMaXN0XT1cImZpZWxkWydjaGlsZExpc3QnXVwiPlxyXG5cdFx0XHRcdDwvYXBwLWxpc3QtcmVuZGVyZXItdjI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1RvZ2dsZUJ1dHRvbidcIj5cclxuXHRcdFx0VG9vZ2xlIEJ1dHRvbiBDb250YWluZXJcclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidBY2NvcmRpb24nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIHNlY3Rpb25EYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1hY2NvcmRpb24tcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm9vdERhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtzZWN0aW9uRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWFjY29yZGlvbi1yZW5kZXJlcj4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInRHluYW1pY0Zvcm0nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIHNlY3Rpb25EYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1keW5hbWljLWZvcm0gW3NlY3Rpb25EYXRhXT1cImZpZWxkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIiBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb290RGF0YV09XCJyb290RGF0YVwiPlxyXG5cdFx0XHQ8L2FwcC1keW5hbWljLWZvcm0+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PCEtLSBBdHRhY2htZW50cyAtLT5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidBdHRhY2htZW50cydcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgc2VjdGlvbkRhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS1hdHRhY2htZW50cyBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb3dEYXRhXT1cImZpZWxkWydyb3dEYXRhJ11cIiBbZmllbGREYXRhXT1cImZpZWxkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCJcclxuXHRcdFx0XHRbcHJpbWFyeUtleUluZGV4XT1cIntuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX1cIj5cclxuXHRcdFx0PC9hcHAtY2VlLWF0dGFjaG1lbnRzPiAtLT5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY2VsbERhdGFMb2FkaW5nIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LXBvcz1cInBvc1wiIGxldC1wb3NpdGlvbj1cInBvc2l0aW9uXCJcclxuXHRsZXQtZXhwYW5kYWJsZT1cImV4cGFuZGFibGVcIj5cclxuXHQ8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC5maWVsZF90eXBlXCI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19sYWJlbCBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUZXh0ZmllbGQnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX190ZXh0IGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidNZW51J1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fbWVudSBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInSW1hZ2UnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19pbWFnZSBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInUGlja2VyJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fcGlja2VyIGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidCdXR0b24nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19idXR0b24gbG9hZGluZ1wiPjwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0xpbmsnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19saW5rIGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUYWJsZS1WMidcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX3RhYmxlIGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidMaXN0LVYyJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fbGlzdCBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0PC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==