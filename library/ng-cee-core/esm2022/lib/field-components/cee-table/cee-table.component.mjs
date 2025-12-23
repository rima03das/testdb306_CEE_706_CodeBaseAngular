import { Component, ChangeDetectionStrategy, Input, ViewChild, HostListener, ViewChildren, forwardRef } from '@angular/core';
import { Constant } from '../../models/constant.model';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { MatPaginator as MatPaginator } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import jQuery from 'jquery';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { SortableHeaderDirective } from './cee-table-sorting.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CeeSwitchComponent } from '../cee-switch/cee-switch.component';
// import { CeeButtonComponent } from '../cee-button/cee-button.component';
// import { CeeLabelComponent } from '../cee-label/cee-label.component';
import { CommonModule, NgClass, NgSwitch } from '@angular/common';
// import { CeeImageComponent } from '../cee-image/cee-image.component';
// import { CeeToggleButtonComponent } from '../cee-toggle-button/cee-toggle-button.component';
// import { CeePickerComponent } from '../cee-picker/cee-picker.component';
// import { CeeMenuComponent } from '../cee-menu/cee-menu.component';
// import { ListRendererComponent } from '../../components/list-renderer/list-renderer.component';
// import { TreeRendererComponent } from '../../components/tree-renderer/tree-renderer.component';
import { BlockRendererComponent } from '../../ng-cee-core.module';
// import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';
import { MatTableModule } from '@angular/material/table';
import { ResizeColumnDirective } from './cee-table-resize-column.directive';
import { MatInputModule } from '@angular/material/input';
import { defer } from 'rxjs';
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
import * as i12 from "@angular/material/sort";
import * as i13 from "@angular/material/form-field";
import * as i14 from "@angular/material/input";
import * as i15 from "@angular/material/checkbox";
import * as i16 from "@angular/forms";
import * as i17 from "@angular/common";
import * as i18 from "@angular/material/radio";
import * as i19 from "@angular/material/paginator";
import * as i20 from "@angular/material/table";
const _c0 = a0 => ({ "expandTable": a0 });
const _c1 = () => ["expandedResp"];
const _c2 = () => ["expandedDetail"];
const _c3 = (a0, a1, a2, a3) => ({ f: a0, position: a1, data: a2, method: a3 });
const _c4 = (a0, a1, a2, a3) => ({ f: a0, position: a1, data: a2, expandedDetail: true, method: a3 });
const _c5 = () => ({});
const _c6 = (a0, a1) => ({ data: a0, fields: a1 });
const _c7 = (a0, a1, a2) => ({ name: a0, value: a1, type: "table", cellData: a2 });
const _c8 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c9 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, type: a4 });
const _c10 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3 });
function CeeTableComponent_ng_container_0_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 9)(1, "input", 10);
    i0.ɵɵlistener("keyup", function CeeTableComponent_ng_container_0_mat_form_field_1_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTableComponent_ng_container_0_mat_form_field_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterValue, $event) || (ctx_r1.filterValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterValue);
} }
function CeeTableComponent_ng_container_0_table_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r4 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.fieldData[i_r4] && ctx_r1.fieldData[i_r4].field_label, " ");
} }
function CeeTableComponent_ng_container_0_table_2_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 19);
    i0.ɵɵelement(1, "div", 20);
    i0.ɵɵelementEnd();
} }
function CeeTableComponent_ng_container_0_table_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 15);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_2_ng_container_1_th_1_Template, 2, 1, "th", 16)(2, CeeTableComponent_ng_container_0_table_2_ng_container_1_td_2_Template, 2, 0, "td", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r5 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", f_r5);
} }
function CeeTableComponent_ng_container_0_table_2_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 21);
} }
function CeeTableComponent_ng_container_0_table_2_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 22);
} }
function CeeTableComponent_ng_container_0_table_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 11);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_2_ng_container_1_Template, 3, 1, "ng-container", 12)(2, CeeTableComponent_ng_container_0_table_2_tr_2_Template, 1, 0, "tr", 13)(3, CeeTableComponent_ng_container_0_table_2_tr_3_Template, 1, 0, "tr", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "");
    i0.ɵɵproperty("dataSource", ctx_r1.dataSourceLoading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.displayedColumns);
} }
function CeeTableComponent_ng_container_0_table_3_th_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 33);
    i0.ɵɵlistener("change", function CeeTableComponent_ng_container_0_table_3_th_3_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r7); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView($event ? ctx_r1.masterToggle() : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("disabled", ctx_r1.isSeletable == "0")("indeterminate", ctx_r1.selection.hasValue() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function CeeTableComponent_ng_container_0_table_3_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_th_3_ng_container_1_Template, 2, 4, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Table-Multi-Select");
} }
function CeeTableComponent_ng_container_0_table_3_td_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-group", 35)(2, "mat-radio-button", 36);
    i0.ɵɵlistener("change", function CeeTableComponent_ng_container_0_table_3_td_4_ng_container_1_Template_mat_radio_button_change_2_listener() { i0.ɵɵrestoreView(_r8); const data_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r9, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const data_r9 = ctx_r9.$implicit;
    const position_r11 = ctx_r9.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "radio_", position_r11, "");
    i0.ɵɵproperty("value", data_r9)("checked", data_r9 == ctx_r1.radioValue)("disabled", ctx_r1.isSeletable == "0");
    i0.ɵɵattribute("aria-label", "Select " + position_r11);
} }
function CeeTableComponent_ng_container_0_table_3_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 37);
    i0.ɵɵlistener("change", function CeeTableComponent_ng_container_0_table_3_td_4_ng_container_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r12); const data_r9 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.list_change(data_r9, $event.checked); return i0.ɵɵresetView($event ? ctx_r1.selection.toggle(data_r9) : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r9 = i0.ɵɵnextContext();
    const data_r9 = ctx_r9.$implicit;
    const position_r11 = ctx_r9.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "check_", position_r11, "");
    i0.ɵɵpropertyInterpolate1("id", "check_", position_r11, "");
    i0.ɵɵproperty("disabled", ctx_r1.isSeletable == "0")("checked", ctx_r1.selection.isSelected(data_r9))("aria-label", ctx_r1.checkboxLabel(data_r9));
} }
function CeeTableComponent_ng_container_0_table_3_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_4_ng_container_1_Template, 3, 6, "ng-container", 8)(2, CeeTableComponent_ng_container_0_table_3_td_4_ng_container_2_Template, 2, 7, "ng-container", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r9 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Table-Single-Select" && data_r9.isSelectable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == "Table-Multi-Select" && data_r9.isSelectable);
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 40)(1, "span", 41);
    i0.ɵɵlistener("sort", function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_th_1_Template_span_sort_1_listener($event) { i0.ɵɵrestoreView(_r13); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSort($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext(2);
    const f_r15 = ctx_r13.$implicit;
    const i_r16 = ctx_r13.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("resizeColumn", f_r15.resizable)("index", i_r16 + ctx_r1.extraTableCell);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("sortable", f_r15.unique_id);
    i0.ɵɵpropertyInterpolate("sorting", f_r15.sorting);
    i0.ɵɵproperty("ngClass", f_r15.sorting == true ? "ce-label case" : "ce-label");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r15.field_label);
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_th_1_Template, 3, 6, "th", 39);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 43);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r15 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("disabled", ctx_r1.isSortingDisabled(f_r15.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", f_r15.field_label, " ");
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_1_th_1_Template, 2, 2, "th", 42);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 43);
    i0.ɵɵelement(1, "span", 44);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r15 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("disabled", ctx_r1.isSortingDisabled(f_r15.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", f_r15.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_2_th_1_Template, 2, 2, "th", 42);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_1_Template, 2, 0, "ng-container", 8)(2, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_ng_container_2_Template, 2, 0, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(f_r15.field_label) == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(f_r15.field_label) == true);
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_1_ng_template_0_Template(rf, ctx) { }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 45);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_Template_td_click_0_listener() { const data_r18 = i0.ɵɵrestoreView(_r17).$implicit; const i_r16 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.responsive && i_r16 === 0 && ctx_r1.expandedElement === data_r18 ? ctx_r1.expandedElement = null : ""); });
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_1_Template, 1, 0, null, 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r18 = ctx.$implicit;
    const position_r19 = ctx.dataIndex;
    const f_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r20 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r20)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, f_r15, position_r19, data_r18, ctx_r1.listCellClick));
} }
function CeeTableComponent_ng_container_0_table_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 15);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_1_Template, 2, 0, "ng-container", 8)(2, CeeTableComponent_ng_container_0_table_3_ng_container_5_ng_container_2_Template, 3, 2, "ng-container", 8)(3, CeeTableComponent_ng_container_0_table_3_ng_container_5_td_3_Template, 2, 7, "td", 38);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r15 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matColumnDef", f_r15.unique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dynamicColumnWidth);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.dynamicColumnWidth);
} }
function CeeTableComponent_ng_container_0_table_3_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 18)(1, "span", 47);
    i0.ɵɵtext(2, "Expandable Option");
    i0.ɵɵelementEnd()();
} }
function CeeTableComponent_ng_container_0_table_3_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 34)(1, "button", 48);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_table_3_td_8_Template_button_click_1_listener() { const data_r22 = i0.ɵɵrestoreView(_r21).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r22 ? null : data_r22; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r22[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r22 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r22 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_1_ng_template_0_Template(rf, ctx) { }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_1_Template, 1, 0, null, 46);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r23 = i0.ɵɵnextContext().$implicit;
    const ctx_r23 = i0.ɵɵnextContext(2);
    const data_r25 = ctx_r23.$implicit;
    const position_r26 = ctx_r23.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r20 = i0.ɵɵreference(2);
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r23.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r23)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r20)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c4, f_r23, position_r26, data_r25, ctx_r1.listCellClick));
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_div_1_Template, 2, 10, "div", 49);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r23 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hidenRows.includes(f_r23.unique_id));
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 52)(1, "button", 48);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_table_3_td_10_div_1_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r27); const data_r25 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r25 ? null : data_r25; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r25[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r25 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r25 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableComponent_ng_container_0_table_3_td_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_10_div_1_ng_container_1_Template, 2, 1, "ng-container", 50)(2, CeeTableComponent_ng_container_0_table_3_td_10_div_1_div_2_Template, 3, 1, "div", 51);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("cee-table-resp ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "Table-Expandable");
} }
function CeeTableComponent_ng_container_0_table_3_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_10_div_1_Template, 3, 6, "div", 49);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.responsive);
} }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_2_ng_template_0_Template(rf, ctx) { }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_2_Template, 1, 0, null, 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r28 = i0.ɵɵnextContext().$implicit;
    const ctx_r28 = i0.ɵɵnextContext();
    const data_r30 = ctx_r28.$implicit;
    const position_r31 = ctx_r28.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r20 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r28.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r28)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r20)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c4, f_r28, position_r31, data_r30, ctx_r1.listCellClick));
} }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_ng_container_1_Template, 3, 10, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r28 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hidenRows.includes(f_r28.unique_id));
} }
function CeeTableComponent_ng_container_0_table_3_td_12_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-block-renderer", 54);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const position_r31 = i0.ɵɵnextContext().dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", position_r31)("blockId", ctx_r1.hidenRows[0])("blockPosition", position_r31)("rootData", ctx_r1.rootData);
} }
function CeeTableComponent_ng_container_0_table_3_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 34)(1, "div", 53);
    i0.ɵɵtemplate(2, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_2_Template, 2, 1, "ng-container", 50)(3, CeeTableComponent_ng_container_0_table_3_td_12_ng_container_3_Template, 2, 5, "ng-container", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r30 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-table-detail ", ctx_r1.is_bootstrap && !ctx_r1.tableHiddenGeneric ? "row" : "", " ", data_r30 !== ctx_r1.expandedElement ? "collapsed" : "", "");
    i0.ɵɵproperty("@detailExpand", data_r30 === ctx_r1.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.tableHiddenGeneric && ctx_r1.hidenRows.length === 1);
} }
function CeeTableComponent_ng_container_0_table_3_tr_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 55);
} }
function CeeTableComponent_ng_container_0_table_3_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r32 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 56);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_table_3_tr_14_Template_tr_click_0_listener() { const row_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r33)); })("contextmenu", function CeeTableComponent_ng_container_0_table_3_tr_14_Template_tr_contextmenu_0_listener() { const row_r33 = i0.ɵɵrestoreView(_r32).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r33, true)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r33 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate4("cee-table-row ", ctx_r1.selctedRow === row_r33 ? "cee-selected-row" : "", " ", ctx_r1.expandedElement === row_r33 ? "cee-expanded-row" : "", " ", row_r33 && row_r33.rowData && row_r33.rowData.conditionalCustomClass ? row_r33.rowData.conditionalCustomClass : "", " ", ctx_r1.type == "Table-Multi-Select" ? ctx_r1.storeData.includes(row_r33) ? "table-item-checked" : "table-item-unchecked" : "", "");
} }
function CeeTableComponent_ng_container_0_table_3_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 57);
} if (rf & 2) {
    const row_r34 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-resp-row ", row_r34 && row_r34.rowData && row_r34.rowData.conditionalCustomClass ? row_r34.rowData.conditionalCustomClass : "", "");
} }
function CeeTableComponent_ng_container_0_table_3_tr_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 57);
} if (rf & 2) {
    const row_r35 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-detail-row ", row_r35 && row_r35.rowData && row_r35.rowData.conditionalCustomClass ? row_r35.rowData.conditionalCustomClass : "", "");
} }
function CeeTableComponent_ng_container_0_table_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 23, 1);
    i0.ɵɵlistener("resize", function CeeTableComponent_ng_container_0_table_3_Template_table_resize_0_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onResize()); }, false, i0.ɵɵresolveWindow)("matSortChange", function CeeTableComponent_ng_container_0_table_3_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.onResize(); return i0.ɵɵresetView(ctx_r1.matSortChange($event)); });
    i0.ɵɵelementContainerStart(2, 24);
    i0.ɵɵtemplate(3, CeeTableComponent_ng_container_0_table_3_th_3_Template, 2, 1, "th", 16)(4, CeeTableComponent_ng_container_0_table_3_td_4_Template, 3, 2, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(5, CeeTableComponent_ng_container_0_table_3_ng_container_5_Template, 4, 3, "ng-container", 26);
    i0.ɵɵelementContainerStart(6, 27);
    i0.ɵɵtemplate(7, CeeTableComponent_ng_container_0_table_3_th_7_Template, 3, 0, "th", 16)(8, CeeTableComponent_ng_container_0_table_3_td_8_Template, 3, 1, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(9, 28);
    i0.ɵɵtemplate(10, CeeTableComponent_ng_container_0_table_3_td_10_Template, 2, 2, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(11, 29);
    i0.ɵɵtemplate(12, CeeTableComponent_ng_container_0_table_3_td_12_Template, 4, 9, "td", 25);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(13, CeeTableComponent_ng_container_0_table_3_tr_13_Template, 1, 0, "tr", 30)(14, CeeTableComponent_ng_container_0_table_3_tr_14_Template, 1, 6, "tr", 31)(15, CeeTableComponent_ng_container_0_table_3_tr_15_Template, 1, 3, "tr", 32)(16, CeeTableComponent_ng_container_0_table_3_tr_16_Template, 1, 3, "tr", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate1("id", "table_", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵproperty("dataSource", ctx_r1.dataSource)("ngClass", i0.ɵɵpureFunction1(13, _c0, ctx_r1.dynamicColumnWidth));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(15, _c1));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(16, _c2));
} }
function CeeTableComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 58);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function CeeTableComponent_ng_container_0_ng_container_5_div_1_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 63);
    i0.ɵɵlistener("click", function CeeTableComponent_ng_container_0_ng_container_5_div_1_button_1_Template_button_click_0_listener() { const pageNumber_r37 = i0.ɵɵrestoreView(_r36).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(pageNumber_r37)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r37 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassProp("active", pageNumber_r37 === ctx_r1.pagination.currentPage);
    i0.ɵɵattributeInterpolate1("aria-label", "Select page ", pageNumber_r37, "");
    i0.ɵɵproperty("disabled", pageNumber_r37 === "...");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", pageNumber_r37, " ");
} }
function CeeTableComponent_ng_container_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 61);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_ng_container_5_div_1_button_1_Template, 2, 6, "button", 62);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.pages);
} }
function CeeTableComponent_ng_container_0_ng_container_5_mat_paginator_2_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 64);
    i0.ɵɵlistener("page", function CeeTableComponent_ng_container_0_ng_container_5_mat_paginator_2_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r38); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.onPaginationChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("pageSizeOptions", ctx_r1.pageItems);
} }
function CeeTableComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_ng_container_5_div_1_Template, 2, 1, "div", 59)(2, CeeTableComponent_ng_container_0_ng_container_5_mat_paginator_2_Template, 1, 1, "mat-paginator", 60);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.paginationStyle !== "material" && ctx_r1.autoPagination);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && ctx_r1.paginationStyle === "material");
} }
function CeeTableComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 3);
    i0.ɵɵlistener("scroll", function CeeTableComponent_ng_container_0_Template_ng_container_scroll_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onScroll($event)); });
    i0.ɵɵtemplate(1, CeeTableComponent_ng_container_0_mat_form_field_1_Template, 2, 2, "mat-form-field", 4)(2, CeeTableComponent_ng_container_0_table_2_Template, 4, 7, "table", 5)(3, CeeTableComponent_ng_container_0_table_3_Template, 17, 17, "table", 6)(4, CeeTableComponent_ng_container_0_div_4_Template, 2, 1, "div", 7)(5, CeeTableComponent_ng_container_0_ng_container_5_Template, 3, 2, "ng-container", 8);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true" || !ctx_r1.additionalParameters["ShowSkeletonLoader"] || (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) != "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loaded && ctx_r1.dataSource.filteredData.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound && ctx_r1.showPagination);
} }
function CeeTableComponent_ng_template_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r39 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r39.field_label);
} }
function CeeTableComponent_ng_template_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_template_1_ng_container_1_label_1_Template, 4, 1, "label", 68);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, CeeTableComponent_ng_template_1_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const expandedDetail_r43 = ctx_r39.expandedDetail;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r43 && f_r39.field_label);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(4, 6, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(16, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42 && data_r42["rowData"] && data_r42["rowData"][f_r39.unique_id] ? data_r42["rowData"][f_r39.unique_id] : i0.ɵɵpureFunction0(8, _c5), f_r39, i0.ɵɵpureFunction3(12, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(9, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-cee-switch", 71);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("fieldData", f_r39)("rootData", ctx_r1.rootData)("rowData", data_r42["rowData"])("keepState", true);
} }
function CeeTableComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c8, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, i0.ɵɵpureFunction3(10, _c7, ctx_r1.primaryKeyVal, data_r42[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c6, data_r42, ctx_r1.displayedFields))));
} }
function CeeTableComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-cee-table", 72);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("sectionData", f_r39)("rootData", ctx_r1.rootData)("rowData", data_r42["rowData"][f_r39.unique_id])("stepId", ctx_r1.stepId)("type", f_r39.field_type);
} }
function CeeTableComponent_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap["List"]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, f_r39.field_type));
} }
function CeeTableComponent_ng_template_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39, f_r39.field_type));
} }
function CeeTableComponent_ng_template_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableComponent_ng_template_1_ng_container_11_ng_container_2_Template, 1, 0, "ng-container", 69);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const position_r41 = ctx_r39.position;
    const data_r42 = ctx_r39.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r41, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r39.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(7, _c10, ctx_r1.stepId, ctx_r1.rootData, data_r42["rowData"][f_r39.unique_id], f_r39));
} }
function CeeTableComponent_ng_template_1_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 70);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r39 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r39.field_label);
} }
function CeeTableComponent_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_template_1_ng_container_12_div_1_Template, 4, 1, "div", 73);
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r39 = i0.ɵɵnextContext();
    const f_r39 = ctx_r39.f;
    const data_r42 = ctx_r39.data;
    const expandedDetail_r43 = ctx_r39.expandedDetail;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r43);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r42["rowData"][f_r39.unique_id].value, " ");
} }
function CeeTableComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 65);
    i0.ɵɵtemplate(1, CeeTableComponent_ng_template_1_ng_container_1_Template, 5, 22, "ng-container", 66)(2, CeeTableComponent_ng_template_1_ng_container_2_Template, 2, 8, "ng-container", 66)(3, CeeTableComponent_ng_template_1_ng_container_3_Template, 4, 20, "ng-container", 66)(4, CeeTableComponent_ng_template_1_ng_container_4_Template, 4, 20, "ng-container", 66)(5, CeeTableComponent_ng_template_1_ng_container_5_Template, 4, 20, "ng-container", 66)(6, CeeTableComponent_ng_template_1_ng_container_6_Template, 4, 20, "ng-container", 66)(7, CeeTableComponent_ng_template_1_ng_container_7_Template, 4, 20, "ng-container", 66)(8, CeeTableComponent_ng_template_1_ng_container_8_Template, 3, 8, "ng-container", 66)(9, CeeTableComponent_ng_template_1_ng_container_9_Template, 4, 13, "ng-container", 66)(10, CeeTableComponent_ng_template_1_ng_container_10_Template, 4, 13, "ng-container", 66)(11, CeeTableComponent_ng_template_1_ng_container_11_Template, 4, 12, "ng-container", 66)(12, CeeTableComponent_ng_template_1_ng_container_12_Template, 3, 2, "ng-container", 67);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r39 = ctx.f;
    i0.ɵɵproperty("ngSwitch", f_r39.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Switch");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Image");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "ToggleButton");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Picker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", f_r39.field_type === "List" || f_r39.field_type === "List-Expandable" ? f_r39.field_type : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "TreeView");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DynamicForm");
} }
var ELEMENT_DATA = Array(10);
// if you want to use $ as an alias
const $ = jQuery;
export class CeeTableComponent {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    cdRef;
    _ceeApiService;
    router;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    paginateValue;
    fieldData = [];
    sectionData;
    type;
    rowData;
    rootData;
    primaryKeyIndex;
    sortDirection = '';
    dataSourceLoading = ELEMENT_DATA;
    dataSource = new MatTableDataSource([]);
    displayedColumns = [];
    headers;
    hidenRows = [];
    expandedElement;
    expandTitle = 'Show';
    collapseTitle = 'Hide';
    pageItems;
    paginator;
    sort;
    showPagination = false;
    showFilter = false;
    filterPlaceholderText = 'Filter';
    selection = new SelectionModel(true, []);
    showSkeletonLoader = true;
    apiData = [];
    apiDataCopy = [];
    displayValues = [];
    radioValue;
    checkedItems = [];
    storeData = [];
    primaryKeyVal = '';
    isVisible = false;
    extraTableCell = 0;
    additionalParameters = {};
    selctedRow;
    currentPage = 1;
    pageSize = 10; // default, can be from pageItems
    totalPages = 0;
    pagesToShow = [];
    fullData = []; // will store all rows
    paginationStyle = 'material';
    autoPagination = true;
    pagination = {
        currentPage: 1,
        currentItemCount: 10,
        pageCount: 1,
        itemCount: 0,
        pageItems: [10, 20, 50, 100],
        startIndex: 0,
        endIndex: 10,
        paginationRange: 10
    };
    pages = [];
    totalItems = 0;
    noDataFound = false;
    paginationFirstLabel = 'First';
    paginationLastLabel = 'Last';
    setAPIKeyUtil;
    wfeEventListHandler;
    hidenRowsField;
    tableHiddenGeneric = false;
    loaded = false;
    paginationNextLabel = 'Next';
    paginationPreviousLabel = 'Previous';
    noDataFoundLabel = 'no record found.';
    enableSort = [];
    serverPagination = false;
    paginationApiKeys = [];
    filterAPIKey;
    paginationShowingResultHint = '%value%';
    is_bootstrap = false;
    bootstrap_class_name;
    blockRenderedData;
    filterKeys = [];
    commonUtil;
    apiKeyUtil;
    responsive = false;
    isListCell = false; // set true if the fields in generic block is ListCell
    listCellEventConfig = []; // set List Cell Event Config
    displayedFields = []; // unique IDs array when the user configures a list cell inside the generic block
    tableCellAppData = {
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
        visible: true,
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
    conditionalUtil;
    setDynamicLabelUtil;
    fieldIdMapApiKey = {}; // to map the api field id and the api key of a single field
    variableObject = {}; // variable object
    filterValue = '';
    resultCountAPIKey = "";
    dynamicColumnWidth;
    paginationPageIndex;
    paginationPageSize;
    paginationTotalCount;
    firstLoad = true;
    hasRowConditionField;
    hasRowConditionSelect;
    isSeletable;
    html_id = '';
    isCustomClass = true;
    additionalParametersfields = {};
    contextMenu;
    presetData;
    // isDisplayBlankColumn: any = true;
    lazyInterval = [];
    rowDataLoading = false;
    tableData = [];
    tableDataLazy = [];
    serverSort = false;
    sortApiKeys = [];
    freezeSort = false;
    sortApiValues = [];
    stopPaginationEvent = false;
    paginationSeparator = "/";
    componentList = {};
    componentMap = {
        label: defer(() => {
            if (!this.componentList['label']) {
                this.componentList['label'] = import('../../field-components/cee-label/cee-label.component').then(m => m.CeeLabelComponent);
            }
            return this.componentList['label'];
        }),
        Menu: defer(() => {
            if (!this.componentList['Menu']) {
                this.componentList['Menu'] = import('../../field-components/cee-menu/cee-menu.component').then(m => m.CeeMenuComponent);
            }
            return this.componentList['Menu'];
        }),
        Image: defer(() => {
            if (!this.componentList['Image']) {
                this.componentList['Image'] = import('../../field-components/cee-image/cee-image.component').then(m => m.CeeImageComponent);
            }
            return this.componentList['Image'];
        }),
        Picker: defer(() => {
            if (!this.componentList['Picker']) {
                this.componentList['Picker'] = import('../../field-components/cee-picker/cee-picker.component').then(m => m.CeePickerComponent);
            }
            return this.componentList['Picker'];
        }),
        Button: defer(() => {
            if (!this.componentList['Button']) {
                this.componentList['Button'] = import('../../field-components/cee-button/cee-button.component').then(m => m.CeeButtonComponent);
            }
            return this.componentList['Button'];
        }),
        List: defer(() => {
            if (!this.componentList['List']) {
                this.componentList['List'] = import('../../components/list-renderer/list-renderer.component').then(m => m.ListRendererComponent);
            }
            return this.componentList['List'];
        }),
        DynamicForm: defer(() => {
            if (!this.componentList['DynamicForm']) {
                this.componentList['DynamicForm'] = import('../../components/dynamic-form/dynamic-form.component').then(m => m.DynamicFormComponent);
            }
            return this.componentList['DynamicForm'];
        }),
        ToggleButton: defer(() => {
            if (!this.componentList['ToggleButton']) {
                this.componentList['ToggleButton'] = import('../../field-components/cee-toggle-button/cee-toggle-button.component').then(m => m.CeeToggleButtonComponent);
            }
            return this.componentList['ToggleButton'];
        }),
        TreeView: defer(() => {
            if (!this.componentList['TreeView']) {
                this.componentList['TreeView'] = import('../../components/tree-renderer/tree-renderer.component').then(m => m.TreeRendererComponent);
            }
            return this.componentList['TreeView'];
        })
    };
    setFromStoreInfo = {
        enabled: false,
        apiKey: ""
    };
    timeoutIds = [];
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, cdRef, _ceeApiService, router) {
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdRef = cdRef;
        this._ceeApiService = _ceeApiService;
        this.router = router;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.wfeEventListHandler = new WFEEventListHandler(_ceeApiService, router, sharedEventsService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
    }
    trackByunique_id(index, item) {
        return item.unique_id;
    }
    onSort({ column, direction }) {
        // this.selection.clear();
        // this.storeData = this.selection.selected;
        this.storePrimaryKey();
        // resetting other headers
        this.headers.forEach((header) => {
            if (header.sortable !== column) {
                header.direction = '';
            }
        });
        // sorting
        if (!this.serverSort) {
            if (direction === '' || column === '') {
                this.apiDataCopy = this.apiData;
            }
            else {
                this.apiDataCopy = [...this.apiData].sort((a, b) => {
                    const res = isNaN(b[column]) ? a[column].localeCompare(b[column]) : a[column] - (b[column]);
                    return direction === 'asc' ? res : -res;
                });
            }
            this.loadTableData(this.apiDataCopy);
        }
        this.sortChangeSetValue(column, direction);
    }
    matSortChange(sort) {
        this.sortChangeSetValue(sort.active, sort.direction);
    }
    sortChangeSetValue(column, direction) {
        if (this.freezeSort) {
            return;
        }
        if (this.sortApiKeys && this.sortApiKeys.length === 2) {
            let sortField = this.fieldData.find(f => f.unique_id === column);
            this.setPrimaryKey({
                name: this.sortApiKeys[0],
                value: sortField && sortField.response_api_key ? sortField.response_api_key : ''
            });
            this.setPrimaryKey({
                name: this.sortApiKeys[1],
                value: direction
            });
        }
        this.onComponentEvent('OnSortButtonClick');
    }
    ngAfterContentChecked() {
        this.cdRef.detectChanges();
    }
    onScroll(event) {
        this.onScrollevent('OnRightClick', {});
    }
    onScrollevent(type, primaryData = {}, isDefault = true, payLoad, displayType = '') {
        for (let i = 0; i <= this.fieldData.length; i++) {
            if (this.fieldData[i]?.event_list && this.fieldData[i]?.event_list.length > 0) {
                this.wfeEventListHandler.onComponentEventBatch(this.fieldData[i], this.presetData, this.stepId, type, primaryData, isDefault, payLoad, displayType);
            }
        }
    }
    onResize() {
        if (this.responsive) {
            const el = $('#table_' + this.sectionData.unique_id);
            el.css({ display: 'block', overflow: 'hidden' });
            const timeoutId = setTimeout(() => {
                let colCount = el.find('> thead > tr > th').length;
                el.find('> thead > tr > th').show();
                el.find('> tbody > tr.cee-table-row > td').show();
                el.find('> tbody > tr.cee-resp-row .cee-table-detail-cell').show();
                while (el.innerWidth() < el.find('> thead').outerWidth() && colCount > 1) {
                    el.find('> thead > tr > th:nth-child(' + colCount + ')').hide();
                    el.find('> tbody > tr.cee-table-row > td:nth-child(' + colCount + ')').hide();
                    colCount--;
                }
                for (let i = 0; i < colCount; i++) {
                    el.find('> tbody > tr.cee-resp-row .cee-table-detail-cell:nth-child(' + (i + 1) + ')').hide();
                }
                el.css({ display: 'table' });
                el.find('> tbody > tr.cee-table-row').removeClass('parent');
                el.find('> tbody > tr.cee-table-row > td:nth-child(1)').removeClass('r-control').unbind();
                el.find('tr.cee-resp-row .cee-table-resp').animate({ height: '0' }, 225);
                if (el.find('> thead > tr > th').length > colCount) {
                    el.find('> tbody > tr.cee-table-row > td:nth-child(1)').addClass('r-control').click(function () {
                        const parent = $(this).parent('tr');
                        const child = parent.next('.cee-resp-row').find('.cee-table-resp');
                        if (!parent.hasClass('parent')) {
                            parent.addClass('parent');
                            child.css({ height: 'auto' });
                            const tempH = child.height();
                            child.css({ height: '0' }).animate({ height: tempH }, 225);
                        }
                        else {
                            parent.removeClass('parent');
                            child.animate({ height: '0' }, 225);
                        }
                    });
                }
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
    }
    transformString(i, input, gBlockId) {
        let parts = input.split('|');
        let result = [];
        parts.map(x => {
            result.push(`${gBlockId}$${x}$${i}`);
        });
        return result.join('|');
    }
    modifyFieldValue(i, obj, gBlockId) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ((key === "field" || key == "unique_id" || key == "additional_parameters")) {
                    if (key !== "additional_parameters") {
                        obj[key] = `${gBlockId}$${obj[key]}$${i}`;
                    }
                    else {
                        for (const param of obj[key]) {
                            if (param.parameter_type === "TargetFields" || param.parameter_type === "blockFields" || param.parameter_type === "EraseSessionData" || param.parameter_type === "Variables" || param.parameter_type === "Targets") {
                                let partss = param.value.split('|');
                                if (Array.isArray(partss) && partss.length > 1) {
                                    param.value = this.transformString(i, param.value, gBlockId);
                                }
                                else {
                                    param.value = `${gBlockId}$${param.value}$${i}`;
                                }
                            }
                        }
                    }
                }
                else if (typeof obj[key] === "object" && obj[key] !== null) {
                    this.modifyFieldValue(i, obj[key], gBlockId);
                }
            }
        }
        return obj;
    }
    getNewFields(i, fields, gBlockId) {
        if (fields.length > 0) {
            fields.map(x => {
                this.modifyFieldValue(i, x, gBlockId);
            });
        }
        return fields;
    }
    ngOnInit() {
        this.html_id = this.rowData && this.rowData.html_id ? this.rowData.html_id : this.sectionData.unique_id;
        let fromStore;
        this.tableCellAppData.stepId = this.stepId;
        const { additional_parameters, unique_id, event_list } = this.sectionData;
        if (additional_parameters && additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'Show Chips':
                        // this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'Show Pagination':
                        this.showPagination = paramter.value === 'false' ? false : true;
                        break;
                    case 'Pagination Values':
                        this.pageItems = paramter.value.split('|').map(s => +s.trim());
                        this.pagination.currentItemCount = this.pagination.pageItems[0];
                        break;
                    case 'Show Filter':
                        this.showFilter = paramter.value === 'false' ? false : true;
                        break;
                    case 'Pagination Next Label':
                        this.paginationNextLabel = paramter.value !== '' ? paramter.value : 'Next';
                        break;
                    case 'Pagination Style':
                        this.paginationStyle = (paramter.value === 'material') ? 'material' : 'bootstrap';
                        break;
                    case 'Pagination Previous Label':
                        this.paginationPreviousLabel = paramter.value !== '' ? paramter.value : 'Previous';
                        break;
                    case 'Pagination Showing Result Hint':
                        this.paginationShowingResultHint = paramter.value !== '' ? paramter.value : '%value%';
                        break;
                    case 'No Data Found Label':
                        this.noDataFoundLabel = paramter.value !== '' ? paramter.value : 'no record found.';
                        break;
                    // case 'CEE_display_blank_column':
                    //     this.isDisplayBlankColumn = paramter.value.toLowerCase() === 'true' ? true : false;
                    //     break;
                    case 'FilterKeys':
                        this.filterKeys = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'FilterAPIKey':
                        this.filterAPIKey = paramter.value;
                        break;
                    case 'Filter Placeholder Text':
                        this.filterPlaceholderText = paramter.value;
                        break;
                    case 'Set from store':
                        if (paramter.value === 'true') {
                            // * Only works if the api key is multiple
                            // * for list to show the data from handler
                            // * handler data needs to be stored in the
                            // * api data store
                            if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                this.setFromStoreInfo = {
                                    enabled: true,
                                    apiKey: this.sectionData.response_api_key
                                };
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
                    case 'HideRows':
                        this.hidenRows
                            = this.type === 'Table-Expandable' ? paramter.value
                                .split('|').map(s => s.trim()) : [];
                        break;
                    case 'expandTitle':
                        this.expandTitle
                            = this.type === 'Table-Expandable' ? paramter.value : this.expandTitle;
                        break;
                    case 'collapseTitle':
                        this.collapseTitle
                            = this.type === 'Table-Expandable' ? paramter.value : this.collapseTitle;
                        break;
                    case 'EnableSort':
                        this.enableSort = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'Pagination Type':
                        if (paramter.value.toLowerCase() === 'server') {
                            this.serverPagination = true;
                        }
                        break;
                    case 'Pagination API Keys':
                        this.paginationApiKeys = paramter.value.split('||').map(s => s.trim());
                        break;
                    case 'Responsive':
                        this.responsive = paramter.value === 'true' ? true : false;
                        break;
                    case 'Result Count API Key':
                        this.resultCountAPIKey = paramter.value;
                        break;
                    case 'CEE_expand_column_width':
                        this.dynamicColumnWidth = paramter.value;
                        break;
                    case 'CEE_sort_type':
                        if (paramter.value.toLowerCase() === 'server') {
                            this.serverSort = true;
                        }
                        break;
                    case 'CEE_sort_api_keys':
                        this.sortApiKeys = [];
                        const sortApiKeyArr = paramter.value.split('||').map(s => s.trim());
                        if (sortApiKeyArr.length === 2) {
                            const sortApiKeySet1 = sortApiKeyArr[0].split('|').map(s => s.trim());
                            this.sortApiKeys.push(sortApiKeySet1[0]);
                            const sortApiKeySet2 = sortApiKeyArr[1].split('|').map(s => s.trim());
                            this.sortApiKeys.push(sortApiKeySet2[0]);
                            if (sortApiKeySet1[1] && sortApiKeySet2[1]) {
                                this.sortApiValues = [sortApiKeySet1[1], sortApiKeySet2[1]];
                                this.setDefaultSort();
                            }
                        }
                        break;
                    case 'Pagination Separator':
                        this.paginationSeparator = paramter.value.toLowerCase();
                        break;
                }
            }
        }
        if (unique_id) {
            // let blockCache = this.wfeStepLoaderService.searchBlockDataFromCache(this.additionalParameters['default_value']);
            // if(blockCache) {
            //     this.processBlockData(blockCache,fromStore,event_list);
            // } else if(localStorage.getItem('lastBlockLoaded') != this.additionalParameters['default_value']) {
            //     localStorage.setItem('lastBlockLoaded', this.additionalParameters['default_value'])
            this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise().then((data) => {
                // let blockData = localStorage.getItem('blockDataCache') ? JSON.parse(localStorage.getItem('blockDataCache'))['data'] : [];
                // let cacheData = ( blockData && blockData.length > 0 ) ? blockData.filter(el => el.block_id == this.additionalParameters['default_value']) : [];
                // if(cacheData && cacheData.length == 0) {
                //     blockData.push({block_id: this.additionalParameters['default_value'], block_data: data});
                //     localStorage.setItem('blockDataCache', JSON.stringify({data : blockData}))
                // }
                let setData;
                if (this.rowData) {
                    setData = data;
                    let newId = this.rowData.unique_id.split("$");
                    let newData = this.getNewFields(newId[2], setData.block_fields, newId[0]);
                    setData.block_fields = newData;
                }
                else {
                    setData = data;
                }
                this.processBlockData(setData, fromStore, event_list);
            });
            // }
            if (this.serverPagination) {
                // 0 th key for total No of values
                // 1st key for page number
                // 2nd key for page size
                if (this.serverPagination && this.paginationApiKeys.length < 3) {
                    throw new Error('Sorry pagination api keys are not configured properly' +
                        'Format should be:' +
                        '<api_key_for_total_number_of_values>||<api_key_for_page_number>||<api_key_for_page_size>');
                }
                if (this.paginationApiKeys[3] !== 'false') {
                    this.paginationPageIndex = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[1]);
                    this.paginationPageSize = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[2]);
                    this.paginationTotalCount = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[0]);
                }
                // setting default value
                const values = [
                    this.paginationTotalCount && this.paginationTotalCount.value ? this.paginationTotalCount.value : 0,
                    this.paginationPageIndex && this.paginationPageIndex.value ? this.paginationPageIndex.value : 1,
                    this.paginationPageSize && this.paginationPageSize.value ? this.paginationPageSize.value : this.pageItems[0]
                ];
                // tslint:disable-next-line: forin
                for (const i in this.paginationApiKeys) {
                    this.setPrimaryKey({
                        name: this.paginationApiKeys[i],
                        value: values[i]
                    });
                }
            }
            if (this.rowData && this.rowData.hasOwnProperty('visible')) {
                this.isVisible = this.rowData.visible;
            }
            else {
                this.variableObject['emitOnDataSetOrUpdated_' + unique_id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
                    this.refreshColumnRowOnDataChange();
                    this.onFieldDataUpdated(res.apiKey, res.value);
                });
                if (this.sectionData.is_display === 1) {
                    this.isVisible = true;
                }
                else {
                    this.onFieldDataUpdated('', null);
                }
            }
        }
        else {
            this.displayedColumns = this.fieldData
                .map(c => c.unique_id);
            this.isVisible = true;
        }
        if (this.type === 'Table-Single-Select') {
            if (this.storeData.length > 0) {
                this.radioValue = this.storeData[0];
            }
        }
        this.getData();
        this.getDisplayValues().then(values => {
            this.checkPromiseValue(values);
        });
        this.tableHiddenGeneric = localStorage.getItem('tableHiddenGeneric') === 'true' ? true : false;
        // set step id to app data
        this.appData.stepId = this.stepId;
        this.variableObject['emitForEmptySession'] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
            if (res) {
                this.onEmptySession(res);
            }
        });
        if (this.pageItems && this.pageItems.length > 0) {
            this.pagination.pageItems = this.pageItems;
            this.pagination.currentItemCount = this.pageItems[0];
        }
    }
    processBlockData(data, fromStore, event_list) {
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        this.fieldData = this.blockRenderedData.block_fields;
        if (this.fieldData && this.fieldData.length > 0) {
            this.fieldData.forEach(x => {
                if (x?.additional_parameters && x?.additional_parameters.length > 0) {
                    for (const paramter of x.additional_parameters) {
                        this.additionalParametersfields[paramter.parameter_type] = paramter.value;
                        switch (paramter.parameter_type) {
                            case 'CEE_table_cell_values':
                                x.field_label = x.field_label.includes('((dynamic))') ? this.setDynamicLabelUtil.getDynamicValue(x).field_label : x.field_label;
                                break;
                        }
                    }
                }
                if (this.dynamicColumnWidth) {
                    if (this.dynamicColumnWidth == 'ALL') {
                        x.resizable = 'true',
                            x.width = 100,
                            x.field_style.custom_class_name = x.field_style.custom_class_name + " resizeNew";
                    }
                    else {
                        let dynamicWidthIds = this.dynamicColumnWidth.split('|');
                        if (dynamicWidthIds.includes(x.unique_id)) {
                            x.resizable = 'true',
                                x.width = 100,
                                x.field_style.custom_class_name = x.field_style.custom_class_name + " resizeNew";
                        }
                    }
                }
                if (this.enableSort.length > 0) {
                    if (this.enableSort.includes(x.unique_id)) {
                        x.sorting = true;
                    }
                }
                else {
                    x.sorting = true;
                }
            });
        }
        this.refreshColumnRowOnDataChange();
        if (this.type == 'Table-Single-Select' || this.type == 'Table-Multi-Select') {
            this.displayedColumns.unshift('Select');
            this.extraTableCell = 1;
        }
        else if (this.type === 'Table-Expandable') {
            this.displayedColumns.push('expandableOption');
        }
        this.returnFieldIdMapApiKey();
        if (this.rowData && this.rowData.value && Array.isArray(this.rowData.value)) {
            this.loadTableData(this.rowData.value);
        }
        else {
            // call the api event success emitter
            if (fromStore) {
                const _this = this;
                const timeoutId = setTimeout(() => {
                    this.onAPICallback(fromStore);
                }, 0);
                this.timeoutIds.push(timeoutId);
            }
        }
        if (event_list && event_list.length > 0) {
            for (const sevent of JSON.parse(JSON.stringify(event_list))) {
                if (sevent.isDefault && sevent.event_name.toLowerCase() === 'onLoad'.toLowerCase()) {
                    this.wfeEventListHandler.switchEventDisplayType(sevent, event_list);
                }
            }
        }
    }
    onFieldDataUpdated(fieldId, value) {
        if (this.sectionData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.sectionData, fieldId, value);
            if (visible !== undefined) {
                this.isVisible = visible;
            }
        }
        // update the state of the repeatable block if required
        if (this.sectionData['custom_class_condition'] && this.sectionData['custom_class_condition'].hasOwnProperty('query') && this.sectionData['custom_class_condition']['query'] != '') {
            let customClassCondition = this.conditionalUtil.checkCustomClass(this.sectionData, String(this.appData.id), value);
            if (customClassCondition !== undefined) {
                this.isCustomClass = customClassCondition;
            }
        }
    }
    refreshColumnRowOnDataChange() {
        if (!Array.isArray(this.fieldData)) {
            return;
        }
        var displayedColTmp = this.displayedColumns;
        this.displayedColumns = this.fieldData
            ?.filter(c => {
            // set is list cell to true and
            // set List Cell Config
            if (c.field_type === 'Listcell') {
                this.isListCell = true;
                this.listCellEventConfig = c.event_list;
                this.isSeletable = c.is_editable;
                if (c.is_display === 2) {
                    this.hasRowConditionField = c;
                }
                if (c.is_editable === 2) {
                    this.hasRowConditionSelect = c;
                }
            }
            let isDisplayBlankColumn = c.additional_parameters.filter(a => { if (a.parameter_type === "CEE_display_blank_column") {
                return a;
            } });
            if (isDisplayBlankColumn.length > 0 && isDisplayBlankColumn[0].value.toLowerCase() != "true") {
                if (c.is_display === 2) {
                    const visible = this.conditionalUtil.checkVisibility(c, c.unique_id, '');
                    return visible ? c : null;
                }
            }
            if (!this.hidenRows.includes(c.unique_id)) {
                this.displayedFields.push(c);
                return c.unique_id;
            }
        }).map(c => c.unique_id);
        if (displayedColTmp.includes('expandableOption') && !this.displayedColumns.includes('expandableOption')) {
            this.displayedColumns.push('expandableOption');
        }
    }
    setPrimaryKey = (data) => {
        if (data.name && data.hasOwnProperty('value')) {
            const apiData = {
                id: data.name,
                apiUrl: '',
                apiKey: data.name,
                value: data.value
            };
            this.apiDataService.setApiData(Object.assign({}, apiData));
        }
    };
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
        this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj);
    }
    getDisplayValues = () => {
        return new Promise((resolve, reject) => {
            this.displayLogic();
            resolve(this.displayValues);
        });
    };
    displayLogic = () => {
        this.displayValues[0] = parseInt(this.paginateValue);
        for (let i = 1; i <= Constant.listDisplayLoopLength; i++) {
            this.displayValues[i] = this.displayValues[i - 1] + Constant.listInitialDisplayValue;
        }
        this.checkCheckedValues();
        return this.displayValues;
    };
    checkPromiseValue = (promiseValue) => {
        for (let i = 0; i < promiseValue.length; i++) {
            if (promiseValue[i] === false || Number.isNaN(promiseValue[i])) {
                this.paginateValue = Constant.listDefaultValue;
                this.displayLogic();
                break;
            }
        }
    };
    getData = () => {
        if (this.rowData) {
            return;
        }
        this.onResize();
        this.variableObject['emitApiSuccessResponse'] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
            if (this.rowData?.response_api_key && this.rowData.response_api_key.length === 2) {
                const result = this.setAPIKeyUtil.setApiCallBackData({
                    response_api_key: this.rowData.response_api_key[1]
                }, res);
                if (result) {
                    this.apiData = result;
                }
                this.loadTableData(this.apiData);
            }
            else if (!this.rowData) {
                if (typeof this.selctedRow === 'undefined') {
                    this.refreshColumnRowOnDataChange();
                    const timeoutId = setTimeout(() => {
                        this.onAPICallback(res);
                    }, 0);
                    this.timeoutIds.push(timeoutId);
                }
                else if (this.setFromStoreInfo.enabled) {
                    if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                        const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.setFromStoreInfo.apiKey);
                        const handlerExists = apiKeys.find(item => item.includes(res.handler_name));
                        if (handlerExists) {
                            this.onAPICallback(res);
                        }
                    }
                }
            }
        }, err => {
            console.error(err);
        });
        this.variableObject['searchFilterEmitter'] = this.sharedEventsService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.sectionData.unique_id)) {
                this.filterValue = data['values'][0] ? data['values'][0] : '';
                this.commonUtil.setFilterKeys(this.dataSource, data['filterCol']);
                this.applyFilter();
            }
        });
    };
    onAPICallback(res) {
        let totalPageObj = {};
        // check if server side pagination and then store the data for the totalNo Of Pages
        if (this.serverPagination) {
            // setting total Number of values
            const totalPage = this.setAPIKeyUtil.setApiCallBackData(this.paginationApiKeys[0], res);
            // setting current page number
            const currPage = this.setAPIKeyUtil.setApiCallBackData(this.paginationApiKeys[1], res);
            if (currPage) {
                this.paginator.pageIndex = Number(currPage);
            }
            if (totalPage) {
                // set total no of pages
                totalPageObj = {
                    name: this.paginationApiKeys[0],
                    value: totalPage
                };
            }
        }
        if ((this.isSingleAPIKey ? this.sectionData.api_key : this.sectionData.response_api_key) !== '') {
            const result = this.setAPIKeyUtil.setApiCallBackData(this.sectionData, res);
            if (result) {
                this.apiData = result;
            }
        }
        else if (Array.isArray(res)) {
            this.apiData = res;
        }
        else {
            return;
        }
        this.loadTableData(this.apiData);
        this.cdRef.detectChanges();
        this.setTotalCountAppData(this.serverPagination && totalPageObj['value'] ? totalPageObj['value'] : this.apiData.length);
        if (this.showPagination && this.paginator) {
            this.paginator._intl.nextPageLabel = this.paginationNextLabel;
            this.paginator._intl.previousPageLabel = this.paginationPreviousLabel;
            this.paginator._intl.getRangeLabel = this.getRangeLabel;
            if (this.firstLoad) {
                this.paginator.pageIndex = this.paginationPageIndex ? this.paginationPageIndex.value - 1 : this.paginator.pageIndex;
                this.paginator.pageSize = this.paginationPageSize ? this.paginationPageSize.value : this.paginator.pageSize;
                this.firstLoad = false;
            }
            if (!this.serverPagination) {
                this.dataSource.paginator = this.paginator;
                if (this.filterKeys.length) {
                    this.dataSource.filterPredicate = (data, filter) => {
                        let found = false;
                        for (const col in data) {
                            if (this.filterKeys.includes(col) && data[col].toString().toLowerCase().indexOf(filter) != -1) {
                                found = true;
                            }
                        }
                        return found;
                    };
                }
            }
            else {
                if (Object.keys(totalPageObj).length > 0) {
                    this.paginator.length = totalPageObj['value'];
                    this.setPrimaryKey(totalPageObj);
                }
            }
            ELEMENT_DATA = Array(this.paginator.pageSize);
            this.dataSourceLoading = ELEMENT_DATA;
            this.cdRef.detectChanges();
        }
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
            return result;
        }
        else {
            return res;
        }
    }
    checkRowEditable(res) {
        const result = [];
        if (this.hasRowConditionSelect) {
            for (const rdata of res) {
                const editableCondition = this.conditionalUtil.checkEditable(this.hasRowConditionSelect, this.hasRowConditionSelect.unique_id, '', this.returnUniqueIdMapApiValue(rdata));
                rdata['isSelectable'] = false;
                if (editableCondition) {
                    rdata['isSelectable'] = true;
                }
                result.push(rdata);
            }
            // console.log("Row Set: ", result)
        }
        else {
            for (const rdata of res) {
                rdata['isSelectable'] = true;
                result.push(rdata);
            }
        }
        return result;
    }
    loadTableData(apiData) {
        if (!this.blockRenderedData) {
            return;
        }
        for (let i = 0; i < apiData.length; i++) {
            let data = apiData[i];
            if (data.hasOwnProperty('rowData')) {
                continue;
            }
            // data['rowData'] = {}; existing line for extensible
            // new block is below
            if (!Object.isExtensible(data)) {
                data = { ...data, rowData: {} };
                apiData[i] = data;
            }
            else {
                data['rowData'] = {};
            }
            for (const f of this.fieldData) {
                data['rowData'][f.unique_id] = this.getRowDataValue(data, f, i);
            }
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            data['rowData']['conditionalCustomClass'] = this.getConditionalClass(uiApiValue, false) ? this.blockRenderedData.block_style.custom_class_name : '';
        }
        // Assign the data to the data source for the table to render
        this.tableData = apiData;
        this.tableData = this.checkRowVisibility(this.tableData);
        this.tableData = this.checkRowEditable(this.tableData);
        this.dataSource = new MatTableDataSource();
        this.setDefaultSort();
        if (!this.serverSort) {
            this.dataSource.sort = this.sort;
        }
        // this.showSkeletonLoader = false;
        this.loaded = true;
        this.onResize();
        // Skip lazy loading for bootstrap pagination
        if (this.paginationStyle === 'bootstrap' && this.showPagination) {
            // Directly set tableDataLazy and initialize pagination
            this.tableDataLazy = [...this.tableData];
            this.rowDataLoading = false;
            this.showSkeletonLoader = false;
            this.pagination.itemCount = this.tableDataLazy.length;
            this.totalItems = this.tableDataLazy.length;
            this.noDataFound = this.tableDataLazy.length === 0;
            this.onPaginationCountChange(); // This will call performPagination()
            // Hide the modal popup loader if it running
            const modalWrapper = window.document.querySelector('.loader-overlay');
            if (modalWrapper) {
                modalWrapper.style.visibility = 'hidden';
            }
        }
        else {
            // Use lazy loading for material pagination
            this.lazyLoading();
        }
    }
    setDefaultSort() {
        if (this.sortApiKeys && this.sortApiKeys.length === 2) {
            let sortByValue, sortTypeValue;
            const sortBy = this.apiDataService.getApiDataByApiKey(this.sortApiKeys[0]);
            const sortType = this.apiDataService.getApiDataByApiKey(this.sortApiKeys[1]);
            if (sortBy && sortBy.hasOwnProperty('value') && sortType && sortType.hasOwnProperty('value')) {
                sortByValue = sortBy.value;
                sortTypeValue = sortType.value;
            }
            else if (this.sortApiValues.length === 2) {
                this.setPrimaryKey({
                    name: this.sortApiKeys[0],
                    value: this.sortApiValues[0]
                });
                this.setPrimaryKey({
                    name: this.sortApiKeys[1],
                    value: this.sortApiValues[1]
                });
                sortByValue = this.sortApiValues[0];
                sortTypeValue = this.sortApiValues[1];
            }
            if (sortByValue && sortTypeValue) {
                let sortField = this.fieldData ? this.fieldData.find(f => f.response_api_key === sortByValue) : '';
                this.freezeSort = true;
                let sDirection = '';
                switch (sortTypeValue) {
                    case 'asc':
                        sDirection = "asc";
                        break;
                    case 'desc':
                        sDirection = "desc";
                        break;
                    default:
                        sDirection = "";
                        break;
                }
                const sortState = {
                    active: sortField && sortField.unique_id ? sortField.unique_id : '',
                    direction: sDirection
                };
                if (!this.dynamicColumnWidth && this.sort) {
                    this.sort.active = sortState.active;
                    this.sort.direction = sortState.direction;
                    this.sort.sortChange.emit(sortState);
                }
                else if (this.headers) {
                    this.headers.forEach((header) => {
                        if (header.sortable === sortState.active) {
                            header.direction = sortTypeValue;
                            header.sorting = 'true';
                            header.sort.emit({ column: sortState.active, direction: sortTypeValue });
                        }
                    });
                }
                this.freezeSort = false;
            }
        }
    }
    ngAfterViewChecked() {
        if (!this.serverSort && this.sort && !this.dataSource.sort) {
            this.dataSource.sort = this.sort;
        }
    }
    getRowDataValue(data, field, list_pos) {
        const apiData = this.setAPIKeyUtil.setApiCallBackData(field, data);
        data[field.unique_id] = apiData;
        let labelType = '';
        if (field.field_type === 'label') {
            labelType = (this.isSingleAPIKey ? field.api_key : field.response_api_key) ? '' : 'STATIC';
        }
        //For additional params as key:value pairs 
        const additionalParams = field.additional_parameters.reduce((acc, curr) => {
            acc[curr.parameter_type] = curr.value;
            return acc;
        }, {});
        //Check of field has response_api_key && additionalParams has CEE_table_cell_values
        if (additionalParams.hasOwnProperty("CEE_table_cell_values") && field.response_api_key.length > 0) {
            if (additionalParams.hasOwnProperty("CEE_Thousand_Separator") && (additionalParams["CEE_Thousand_Separator"]).toLowerCase() == 'true') {
                data[field.response_api_key] = this.commonUtil.formatNumber(data[field.response_api_key]);
                if (data[field.response_api_key] != '' && data[field.response_api_key] != null && data[field.response_api_key] != undefined && !data[field.response_api_key].includes('.')) {
                    data[field.response_api_key] += '.00';
                }
            }
        }
        const resData = {};
        for (const key in data) {
            if (typeof data[key] === 'string') {
                resData[key] = data[key];
            }
        }
        let value = '';
        value = (field && field.field_type && (field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))') ||
            (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
            this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
            labelType === 'STATIC' ? field.field_label : apiData;
        if (field.additional_parameters && field.additional_parameters.length > 0) {
            for (let i = 0; i <= field.additional_parameters.length; i++) {
                if (field.additional_parameters[i]?.parameter_type === "CEE_table_cell_values") {
                    let dynamicVal = this.setDynamicLabelUtil.getDynamicValue(field, data).additional_parameters_config;
                    let dynamicPosition = dynamicVal.substr(dynamicVal.length - 1);
                    let lPosition = dynamicVal.slice(0, -1);
                    if (dynamicPosition == 's') {
                        value = lPosition + ' ' + apiData;
                    }
                    else if (dynamicPosition == 'e') {
                        value = apiData + ' ' + lPosition;
                    }
                    else if (dynamicPosition == 'n') {
                        value = lPosition;
                    }
                    else {
                        value = apiData;
                    }
                }
            }
        }
        if (this.sectionData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            let isEditable = false;
            let isVisible = false;
            let skipisDisplayCheck = false;
            if (field.is_editable === 1) {
                isEditable = true;
            }
            if (field.is_display === 1) {
                isVisible = true;
            }
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            let isDisplayBlankColumn = field.additional_parameters.filter(a => { if (a.parameter_type === "CEE_display_blank_column") {
                return a;
            } });
            if (isDisplayBlankColumn.length > 0 && isDisplayBlankColumn[0].value.toLowerCase() != "true") {
                isVisible = true;
                skipisDisplayCheck = true;
            }
            const obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'Table',
                visible: (field.is_display === 2 && !skipisDisplayCheck) ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: value,
                data: resData
            };
            return obj;
        }
        else {
            return {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'Table',
                value: value,
                data: resData
            };
        }
    }
    lazyLoading() {
        this.tableDataLazy = [];
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
            this.lazyInterval = null;
        }
        this.rowDataLoading = true;
        this.lazyInterval = setInterval(() => {
            if (this.tableData.length !== this.tableDataLazy.length) {
                this.tableDataLazy.push(this.tableData[this.tableDataLazy.length]);
                this.dataSource.data = this.tableDataLazy;
                this.cdRef.detectChanges();
            }
            else {
                this.rowDataLoading = false;
                this.showSkeletonLoader = false;
                if (this.paginationStyle === 'bootstrap' && this.showPagination) {
                    this.pagination.itemCount = this.tableDataLazy.length;
                    this.totalItems = this.tableDataLazy.length;
                    this.noDataFound = this.tableDataLazy.length === 0;
                    this.onPaginationCountChange(); // This will call performPagination()
                }
                else {
                    this.dataSource.data = this.tableDataLazy;
                }
                this.cdRef.detectChanges();
                clearInterval(this.lazyInterval);
                // Hide the modal popup loader if it running
                const modalWrapper = window.document.querySelector('.loader-overlay');
                if (modalWrapper) {
                    modalWrapper.style.visibility = 'hidden';
                }
            }
        }, 100);
    }
    // @HostListener("window:beforeunload", ["$event"]) unloadHandler(event: Event) {
    //     if (this.lazyInterval) {
    //         clearInterval(this.lazyInterval);
    //     }
    //     this.tableDataLazy = [];
    //     this.dataSource.data = this.tableDataLazy;
    // }
    // TODO: Delete this function once the conditional statements depend on the api key then only return the single api response obj
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse) {
        const obj = {};
        for (const key of Object.keys(apiResponse)) {
            if (Object.keys(this.fieldIdMapApiKey).includes(key)) {
                const uniqueId = this.fieldIdMapApiKey[key];
                obj[uniqueId] = apiResponse[key];
            }
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
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     */
    getConditionalClass(data, presentValue) {
        const ClassCondition = this.conditionalUtil.checkClass(data, this.blockRenderedData);
        if (ClassCondition) {
            return ClassCondition;
        }
        return presentValue;
    }
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey() {
        const obj = {};
        for (const field of this.fieldData) {
            this.returnFieldIdMapApiKeyValue(obj, field);
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
    getRangeLabel = (page, pageSize, length) => {
        let pInfo;
        if (this.firstLoad) {
            page = this.paginationPageIndex && this.paginationPageIndex.value ? this.paginationPageIndex.value - 1 : page;
            pageSize = this.paginationPageSize && this.paginationPageSize.value ? this.paginationPageSize.value : pageSize;
            length = this.paginationTotalCount && this.paginationTotalCount.value ? this.paginationTotalCount.value : length;
        }
        if (length === 0 || pageSize === 0) {
            pInfo = `0 ${this.paginationSeparator} ${length}`;
        }
        else {
            length = Math.max(length, 0);
            const startIndex = page * pageSize;
            const endIndex = startIndex < length ? Math.min(startIndex + pageSize, length) : startIndex + pageSize;
            pInfo = `${startIndex + 1} - ${endIndex} ${this.paginationSeparator} ${length}`;
        }
        return String(this.paginationShowingResultHint).replace('%value%', pInfo);
    };
    isSortingDisabled(column) {
        if (this.enableSort.length > 0 && !this.enableSort.includes(column)) {
            return true;
        }
        else {
            return false;
        }
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
            this.lazyInterval = null;
        }
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        this.tableDataLazy = [];
        this.dataSource.data = this.tableDataLazy;
        // Clear component references
        this.componentList = {};
        this.componentMap = null;
        // Clear large data structures
        this.apiData = null;
        this.apiDataCopy = null;
        this.tableData = [];
        this.tableDataLazy = [];
        this.blockRenderedData = null;
        this.dataSource.data = [];
        // Clear utility class references
        this.setAPIKeyUtil = null;
        this.wfeEventListHandler = null;
        this.conditionalUtil = null;
        this.setDynamicLabelUtil = null;
        this.commonUtil = null;
        this.apiKeyUtil = null;
        // Clear other object references
        this.fieldIdMapApiKey = {};
        this.variableObject = {};
        this.additionalParameters = {};
        this.additionalParametersfields = {};
    }
    checkCheckedValues() {
        // store the values of the checkedItems
        if (this.type === 'Table-Multi-Select') {
            if (this.storeData.length > 0) {
                this.checkedItems = [];
                for (const singleRes of this.displayValues) {
                    if ((this.storeData).includes(singleRes)) {
                        this.checkedItems.push(singleRes);
                    }
                    else {
                        this.checkedItems.push({});
                    }
                }
            }
        }
    }
    list_change(data, isChecked) {
        if (isChecked) {
            if (this.type === 'Table-Single-Select') {
                this.storeData = [];
                this.radioValue = data;
            }
            this.storeData.push(data);
        }
        else {
            if (this.storeData.length > 0) {
                this.storeData.splice(this.storeData.indexOf(data), 1);
            }
        }
        this.storePrimaryKey();
    }
    storePrimaryKey() {
        for (const additionalParam of this.sectionData.additional_parameters) {
            if (additionalParam.parameter_type === 'PrimaryKeyName') {
                const primaryKeyValue = [];
                for (const data of this.storeData) {
                    primaryKeyValue.push(data[this.getValueformKey(additionalParam.value)]);
                }
                const apiData = {
                    id: this.getPrimaryKey(additionalParam.value),
                    apiUrl: '',
                    apiKey: this.getPrimaryKey(additionalParam.value),
                    value: (this.type === 'Table-Single-Select' ? primaryKeyValue[0] : primaryKeyValue)
                };
                this.apiDataService.setApiData(Object.assign({}, apiData));
                const timeoutId = setTimeout(() => {
                    this.onComponentEvent('OnChangeValue');
                    this.emitForFieldsSectionBlock(apiData);
                }, 0);
                this.timeoutIds.push(timeoutId);
            }
        }
    }
    // Emit on Data Set or Updated
    emitForFieldsSectionBlock(emitObj) {
        this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj); // For Fields
        this.sharedEventsService.emitOnDataSetOrUpdatedForSection.emit(emitObj); // For Sections
        this.sharedEventsService.emitOnDataSetOrUpdatedForBlock.emit(emitObj); // For Blocks
        this.sharedEventsService.emitOnDataSetOrUpdatedForGenericBlock.emit(emitObj); // For Generic Blocks
    }
    /**
     * trigger event if there has been an event triggered on the table
     * @param name the name of the event
     */
    onComponentEvent(name) {
        if (this.sectionData && this.sectionData.unique_id) {
            if (this.sectionData && this.sectionData.event_list && this.sectionData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                    if (event && event.isDefault && event.event_name && event.event_name.toLowerCase() === name.toLowerCase()) {
                        this.wfeEventListHandler.switchEventDisplayType(event, this.sectionData.event_list);
                    }
                }
            }
        }
    }
    getPrimaryKey(key) {
        const data = key.split('|');
        if (data.length > 1) {
            return data[0].trim();
        }
        else {
            return key;
        }
    }
    getValueformKey(key) {
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
    applyFilter() {
        if (this.filterAPIKey) {
            this.setPrimaryKey({
                name: this.filterAPIKey,
                value: this.filterValue
            });
        }
        if (!this.serverPagination) {
            this.dataSource.filter = this.filterValue.trim().toLowerCase();
            this.setTotalCountAppData(this.dataSource.filteredData.length);
        }
        this.selection.clear();
        this.storeData = this.selection.selected;
        this.storePrimaryKey();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.onComponentEvent('OnFilterClick');
    }
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {
        const numSelected = this.selection.selected.length;
        const numRows = this.dataSource.data.filter(function (el) { return el['isSelectable'] == true; }).length;
        // console.log("isAllSelected: ",numSelected,"-", numRows,"-", numSelected === numRows)
        return numSelected === numRows;
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        this.isAllSelected() ?
            this.selection.clear() :
            this.dataSource.data.forEach((row) => { if (row['isSelectable']) {
                this.selection.select(row);
            } });
        this.storeData = this.selection.selected;
        // console.log("All selected: ", this.storeData)
        this.storePrimaryKey();
    }
    /** The label for the checkbox on the passed row */
    checkboxLabel(row) {
        if (!row) {
            return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
        }
        return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
    }
    onPaginationChange(event) {
        // this.selection.clear();
        // this.storeData = this.selection.selected;
        this.storePrimaryKey();
        if (this.serverPagination) {
            let obj = {};
            for (const key of Object.keys(event)) {
                switch (key) {
                    case 'pageIndex':
                        obj = {
                            name: this.paginationApiKeys[1],
                            value: Number(event[key]) + 1
                        };
                        break;
                    case 'pageSize':
                        obj = {
                            name: this.paginationApiKeys[2],
                            value: event[key]
                        };
                        break;
                    default:
                        break;
                }
                this.setPrimaryKey(obj);
            }
        }
        if (!this.stopPaginationEvent) {
            const { event_list } = this.sectionData;
            if (event_list && event_list.length > 0) {
                for (const evt of JSON.parse(JSON.stringify(event_list))) {
                    if (evt.event_name.toLowerCase() === 'OnPaginationButtonClick'.toLowerCase()) {
                        this.wfeEventListHandler.switchEventDisplayType(evt, event_list);
                    }
                }
            }
        }
    }
    /**
     * function to trigger an event for clicking on the list cell
     * @param data single cell data
     */
    listCellClick(data, iscontextMenu = false) {
        this.selctedRow = data;
        // checking the unique ids and storing the data
        this.displayedFields.forEach((field) => {
            if (data[field.unique_id] !== undefined && field.field_type !== "Menu") {
                const obj = {};
                obj.id = field.unique_id;
                obj.value = data[field.unique_id] || '';
                // not using concatenation because child field within list does not support concatenation
                obj.responseApiKey =
                    this.apiKeyUtil.getMultipleApiKeys(field.response_api_key);
                obj.requestApiKey = this.apiKeyUtil.getMultipleApiKeys(field.request_api_key);
                obj.apiKey = field.api_key;
                obj.editable = field.is_editable === 1 ? true : false;
                this.appDataService.setAppData({ ...this.tableCellAppData, ...obj });
            }
        });
        // set unique identifier for repeated table
        const repeatedTableIndex = this.rowData ? this.rowData.repeatedBlockFieldId +
            '|' + this.rowData.position : '';
        localStorage.setItem('repeatedTableIndex', repeatedTableIndex);
        if (this.primaryKeyVal && this.type != 'Table-Multi-Select') {
            this.setPrimaryKey({
                name: this.primaryKeyVal,
                value: data[this.primaryKeyVal]
            });
        }
        if (!iscontextMenu) {
            for (const event of JSON.parse(JSON.stringify(this.listCellEventConfig))) {
                if (event.isDefault && event.event_name.toLowerCase() === 'onclick') {
                    this.wfeEventListHandler.switchEventDisplayType(event, this.listCellEventConfig);
                }
            }
        }
    }
    /**
     * function returns the clearSession emit
     **/
    onEmptySession(get_data) {
        let data = [];
        let unique_id_value = [];
        if (get_data.unique_ids.length > 0) {
            data = get_data.unique_ids;
            unique_id_value = [this.sectionData.unique_id];
        }
        else {
            data = get_data.apiKeys;
            if (this.isSingleAPIKey) {
                unique_id_value = [this.sectionData.api_key];
            }
            else {
                unique_id_value = [...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.sectionData.response_api_key))];
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.sectionData.request_api_key)
                ];
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                this.filterValue = '';
                this.applyFilter();
                this.selection.clear();
                this.storeData = this.selection.selected;
                this.storePrimaryKey();
                this.stopPaginationEvent = true;
                this.paginator?.firstPage();
                if (this.pageItems && this.pageItems.length > 0) {
                    if (this.paginator) {
                        this.paginator.pageSize = this.pageItems[0];
                        if (this.paginationApiKeys.length == 3) {
                            let obj = {};
                            obj = {
                                name: this.paginationApiKeys[2],
                                value: this.paginator.pageSize
                            };
                            this.setPrimaryKey(obj);
                        }
                    }
                }
                const timeoutId = setTimeout(() => {
                    this.stopPaginationEvent = false;
                }, 1000);
                this.timeoutIds.push(timeoutId);
                return;
            }
        });
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    isHTML(content) {
        return /<[a-z][\s\S]*>/i.test(content);
    }
    // Bootstrap pagination methods
    paginationPrevious() {
        if (this.pagination.currentPage <= 1) {
            this.pagination.currentPage = 1;
        }
        else {
            this.pagination.currentPage--;
        }
        this.performPagination();
    }
    paginationNext() {
        if (this.pagination.currentPage >= this.pagination.pageCount) {
            this.pagination.currentPage = this.pagination.pageCount;
        }
        else {
            this.pagination.currentPage++;
        }
        this.performPagination();
    }
    setCurrent(num) {
        if (this.isValidPageNumber(num)) {
            this.pagination.currentPage = num;
            this.performPagination();
        }
    }
    isValidPageNumber(num) {
        return (/^\d+$/.test(num) && (0 < num && num <= this.pagination.pageCount));
    }
    onPaginationCountChange(flag = 1) {
        this.pagination.pageCount = Math.ceil(this.pagination.itemCount / this.pagination.currentItemCount);
        if (flag === 1) {
            this.pagination.currentPage = 1;
        }
        this.performPagination();
    }
    setPaginationCount() {
        this.onPaginationCountChange(0);
    }
    performPagination() {
        this.pagination.startIndex = (this.pagination.currentPage - 1) * this.pagination.currentItemCount;
        this.pagination.endIndex = this.pagination.startIndex + this.pagination.currentItemCount;
        this.pagination.endIndex = this.pagination.endIndex > this.pagination.itemCount
            ? this.pagination.itemCount
            : this.pagination.endIndex;
        if (this.pagination.pageCount > 1) {
            this.pages = this.generatePagesArray(this.pagination.currentPage, this.pagination.pageCount, this.pagination.paginationRange);
        }
        else {
            this.pages = [1]; // Show at least page 1 if only one page
        }
        // Apply pagination to data source for bootstrap pagination
        if (this.paginationStyle === 'bootstrap' && this.tableDataLazy && this.tableDataLazy.length > 0) {
            const paginatedData = this.tableDataLazy.slice(this.pagination.startIndex, this.pagination.endIndex);
            this.dataSource.data = paginatedData;
            this.cdRef.detectChanges();
        }
    }
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
    static ɵfac = function CeeTableComponent_Factory(t) { return new (t || CeeTableComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTableComponent, selectors: [["app-cee-table"]], viewQuery: function CeeTableComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatPaginator, 5);
            i0.ɵɵviewQuery(MatSort, 5);
            i0.ɵɵviewQuery(SortableHeaderDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headers = _t);
        } }, hostBindings: function CeeTableComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function CeeTableComponent_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { stepId: "stepId", paginateValue: "paginateValue", fieldData: "fieldData", sectionData: "sectionData", type: "type", rowData: "rowData", rootData: "rootData", primaryKeyIndex: "primaryKeyIndex" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], ["table", ""], [3, "scroll", 4, "ngIf"], [3, "scroll"], ["floatLabel", "never", 4, "ngIf"], ["aria-describedby", "Skeleton Loader", "mat-table", "", 3, "dataSource", "class", 4, "ngIf"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 3, "dataSource", "class", "ngClass", "id", "resize", "matSortChange", 4, "ngIf"], ["class", "no-data-info", 4, "ngIf"], [4, "ngIf"], ["floatLabel", "never"], ["matInput", "", 3, "keyup", "ngModelChange", "placeholder", "ngModel"], ["aria-describedby", "Skeleton Loader", "mat-table", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "cee-table-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "scope", "col", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "loading", 4, "matCellDef"], ["mat-header-cell", "", "scope", "col"], ["mat-cell", "", 1, "loading"], [1, "bar"], ["mat-header-row", ""], ["mat-row", "", 1, "cee-table-row"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 3, "resize", "matSortChange", "dataSource", "ngClass", "id"], ["matColumnDef", "Select"], ["mat-cell", "", 4, "matCellDef"], [3, "matColumnDef", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "expandableOption"], ["matColumnDef", "expandedResp"], ["matColumnDef", "expandedDetail"], ["mat-header-row", "", "class", "cee-table-header", 4, "matHeaderRowDef"], ["mat-row", "", 3, "class", "click", "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 3, "class", 4, "matRowDef", "matRowDefColumns"], ["id", "check_static", 1, "table-checkbox", 3, "change", "checked", "disabled", "indeterminate", "aria-label"], ["mat-cell", ""], ["name", "radio"], [1, "table-radio", 3, "change", "id", "value", "checked", "disabled"], [1, "table-checkbox", 3, "change", "name", "id", "disabled", "checked", "aria-label"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-cell", "", "scope", "col", 3, "resizeColumn", "index", 4, "matHeaderCellDef"], ["mat-header-cell", "", "scope", "col", 3, "resizeColumn", "index"], [3, "sort", "ngClass", "sortable", "sorting"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col"], [3, "innerHTML"], ["mat-cell", "", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [2, "visibility", "hidden"], ["mat-button", "", 1, "cee-table-expandable-option", 3, "click"], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cee-table-detail-cell", 4, "ngIf"], [1, "cee-table-detail-cell"], [2, "height", "0px", "min-height", "0px"], [1, "hidden-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], ["mat-header-row", "", 1, "cee-table-header"], ["mat-row", "", 3, "click", "contextmenu"], ["mat-row", ""], [1, "no-data-info"], ["class", "pagination-container", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "page", 4, "ngIf"], [1, "pagination-container"], ["type", "button", "class", "pagination-btn-page", 3, "disabled", "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 1, "pagination-btn-page", 3, "click", "disabled"], ["showFirstLastButtons", "", 3, "page", "pageSizeOptions"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "cee-table-detail-label", 4, "ngIf"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [1, "cee-table-detail-label"], [3, "stepId", "fieldData", "rootData", "rowData", "keepState"], [3, "sectionData", "rootData", "rowData", "stepId", "type"], ["class", " cee-table-detail-label", 4, "ngIf"]], template: function CeeTableComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTableComponent_ng_container_0_Template, 6, 5, "ng-container", 2)(1, CeeTableComponent_ng_template_1_Template, 13, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible && ctx.fieldData.length > 0);
        } }, dependencies: () => [CeeTableComponent, MatSortModule, i12.MatSort, i12.MatSortHeader, MatFormFieldModule, i13.MatFormField, MatInputModule, i14.MatInput, MatCheckboxModule, i15.MatCheckbox, FormsModule, i16.DefaultValueAccessor, i16.NgControlStatus, i16.NgModel, CommonModule, i17.NgClass, i17.NgComponentOutlet, i17.NgForOf, i17.NgIf, i17.NgTemplateOutlet, i17.NgSwitch, i17.NgSwitchCase, i17.NgSwitchDefault, i17.AsyncPipe, MatRadioModule, i18.MatRadioGroup, i18.MatRadioButton, MatPaginatorModule, i19.MatPaginator, MatTableModule, i20.MatTable, i20.MatHeaderCellDef, i20.MatHeaderRowDef, i20.MatColumnDef, i20.MatCellDef, i20.MatRowDef, i20.MatHeaderCell, i20.MatCell, i20.MatHeaderRow, i20.MatRow, ResizeColumnDirective, SortableHeaderDirective, CeeSwitchComponent, BlockRendererComponent], styles: ["@charset \"UTF-8\";table[_ngcontent-%COMP%]{width:100%}tr.cee-detail-row[_ngcontent-%COMP%], tr.cee-resp-row[_ngcontent-%COMP%]{height:0}.cee-table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .cee-resp-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.cee-table-detail[_ngcontent-%COMP%], .cee-table-resp[_ngcontent-%COMP%]{overflow:hidden;display:flex}.cee-table-detail[_ngcontent-%COMP%]{transition:max-height 2s;max-height:1000px}.cee-table-detail.collapsed[_ngcontent-%COMP%]{max-height:0}.cee-table-resp[_ngcontent-%COMP%]{height:0}.cee-table-detail-label[_ngcontent-%COMP%]{font-weight:500;display:inline}.cee-table-detail-cell[_ngcontent-%COMP%]{padding:5px 0;margin-right:10px}table[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]{position:relative;padding-left:30px;cursor:pointer}table[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]:before{top:50%;left:5px;height:14px;width:14px;margin-top:-9px;display:block;position:absolute;color:#fff;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:14px;content:\"+\";background-color:#31b131}table[_ngcontent-%COMP%]   tr.parent[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]:before{content:\"-\";background-color:#d33333}@keyframes _ngcontent-%COMP%_loading{40%{background-position:100% 0}to{background-position:100% 0}}.loading[_ngcontent-%COMP%]{position:relative}.loading[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#e7e7e7;height:14px;border-radius:7px;width:80%}.loading[_ngcontent-%COMP%]:after{position:absolute;transform:translateY(-50%);top:50%;left:0;content:\"\";display:block;width:100%;height:24px;background-image:linear-gradient(100deg,#fff0,#ffffff80 60%,#fff0 80%);background-size:200px 24px;background-position:-100px 0;background-repeat:no-repeat;animation:_ngcontent-%COMP%_loading 1s infinite}.expandTable[_ngcontent-%COMP%]{width:100%}.expandTable.resizing[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:col-resize}.expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{position:relative}.expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:last-child)   .resize-holder[_ngcontent-%COMP%]{cursor:col-resize;width:20px;height:100%;position:absolute;right:-10px;top:0;z-index:1}.expandTable[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:not(:nth-child(1)), .expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:nth-child(1)){padding:0 10px}span[_ngcontent-%COMP%]{cursor:pointer;user-select:none;-webkit-user-select:none;display:flex}span.ce-label.case[_ngcontent-%COMP%]:hover:after{content:\"\\2191\"}span.ce-label.asc[_ngcontent-%COMP%]:after{content:\"\\2191\"}span.ce-label.desc[_ngcontent-%COMP%]:after{content:\"\\2193\"}.mat-mdc-cell[_ngcontent-%COMP%]     .switch-container .form-label{display:none!important}"], data: { animation: [
                trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ] }, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTableComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-table', changeDetection: ChangeDetectionStrategy.OnPush, animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ], standalone: true, imports: [MatSortModule, MatFormFieldModule, MatInputModule, MatCheckboxModule, FormsModule, CommonModule, MatRadioModule, MatPaginatorModule, NgSwitch, MatTableModule, NgClass, ResizeColumnDirective, SortableHeaderDirective, CeeSwitchComponent, forwardRef(() => BlockRendererComponent)], template: "<ng-container *ngIf=\"isVisible && fieldData.length > 0\" (scroll)=\"onScroll($event)\">\r\n    <mat-form-field *ngIf=\"showFilter\" floatLabel=\"never\">\r\n        <input matInput (keyup)=\"applyFilter()\" placeholder=\"{{filterPlaceholderText}}\" [(ngModel)]=\"filterValue\">\r\n    </mat-form-field>\r\n    <!-- ######################## Table For Skeleton Loader ########################### -->\r\n    <table aria-describedby=\"Skeleton Loader\" *ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true'\" mat-table\r\n        [dataSource]=\"dataSourceLoading\"\r\n        class=\"{{sectionData.field_style?sectionData.field_style.custom_class_name:''}}\">\r\n        <ng-container matColumnDef=\"{{f}}\" *ngFor=\"let f of displayedColumns; let i = index\">\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\"> {{fieldData[i] && fieldData[i].field_label}} </th>\r\n            <td mat-cell class=\"loading\" *matCellDef=\"let element\">\r\n                <div class=\"bar\"></div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row class=\"cee-table-row\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <!-- ######################## Data Table ########################### -->\r\n    <table aria-describedby=\"Data Table\" *ngIf=\"((!showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true') || !additionalParameters['ShowSkeletonLoader'] || additionalParameters['ShowSkeletonLoader']?.toLowerCase() != 'true')\" mat-table #table [dataSource]=\"dataSource\" matSort multiTemplateDataRows\r\n        class=\"{{isCustomClass && sectionData.field_style?sectionData.field_style.custom_class_name:''}}\" [ngClass]=\"{'expandTable': this.dynamicColumnWidth}\"\r\n        id=\"table_{{sectionData.unique_id}}\" (window:resize)=\"onResize()\" (matSortChange)=\"this.onResize(); matSortChange($event)\">\r\n        <ng-container matColumnDef=\"Select\">\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\">\r\n                <ng-container *ngIf=\"type == 'Table-Multi-Select'\">\r\n                    <mat-checkbox id=\"check_static\" class=\"table-checkbox\" (change)=\"$event ? masterToggle() : null\"\r\n                        [checked]=\"selection.hasValue() && isAllSelected()\"  [disabled]=\"isSeletable=='0'\"\r\n                        [indeterminate]=\"selection.hasValue() && !isAllSelected()\" [aria-label]=\"checkboxLabel()\">\r\n                    </mat-checkbox>\r\n                </ng-container>\r\n            </th>\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                <ng-container *ngIf=\"type == 'Table-Single-Select' && data.isSelectable\">\r\n                    <mat-radio-group name=\"radio\">\r\n                        <mat-radio-button id=\"radio_{{position}}\" class=\"table-radio\" [value]=\"data\"\r\n                            (change)=\"list_change(data, true)\" [checked]=\"data == radioValue\" [disabled]=\"isSeletable=='0'\"\r\n                            [attr.aria-label]=\"'Select '+position\">\r\n                        </mat-radio-button>\r\n                    </mat-radio-group>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"type == 'Table-Multi-Select' && data.isSelectable\">\r\n                    <mat-checkbox name=\"check_{{position}}\" id=\"check_{{position}}\" class=\"table-checkbox\"\r\n                        (change)=\"list_change(data, $event.checked); $event ? selection.toggle(data) : null\" [disabled]=\"isSeletable=='0'\"\r\n                        [checked]=\"selection.isSelected(data)\" [aria-label]=\"checkboxLabel(data)\"></mat-checkbox>\r\n                </ng-container>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container [matColumnDef]=\"f.unique_id\" *ngFor=\"let f of fieldData; let i = index; trackBy: trackByunique_id;\">\r\n            <ng-container *ngIf=\"this.dynamicColumnWidth\">\r\n                <th mat-header-cell *matHeaderCellDef  [resizeColumn]=\"f.resizable\" [index]=\"i + extraTableCell\" scope=\"col\">\r\n                    <span [ngClass]=\"f.sorting == true ? 'ce-label case' : 'ce-label'\" sortable={{f.unique_id}} sorting={{f.sorting}} (sort)=\"onSort($event)\">{{f.field_label}}</span>\r\n                </th>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!this.dynamicColumnWidth\">\r\n                <ng-container *ngIf=\"isHTML(f.field_label) == false\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header [attr.disabled]=\"isSortingDisabled(f.unique_id)\" scope=\"col\">\r\n                        {{ f.field_label }}\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"isHTML(f.field_label) == true\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header [attr.disabled]=\"isSortingDisabled(f.unique_id)\" scope=\"col\">\r\n                        <span [innerHTML]=\"f.field_label\"></span>\r\n                    </th>\r\n                </ng-container>\r\n            </ng-container>\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\"\r\n                (click)=\"(this.responsive && i === 0 && expandedElement === data)?expandedElement = null:''\">\r\n                <ng-template\r\n                    *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data, method: listCellClick}\">\r\n                </ng-template>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandableOption\">\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\"><span style=\"visibility: hidden;\">Expandable Option</span></th>\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                <button mat-button class=\"cee-table-expandable-option\"\r\n                    (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                    === data ? collapseTitle : expandTitle}}</button>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandedResp\">\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                <div *ngIf=\"responsive\" class=\"cee-table-resp {{is_bootstrap?'row':''}}\">\r\n                    <ng-container *ngFor=\"let f of fieldData; let i = index; trackBy: trackByunique_id;\">\r\n                        <div *ngIf=\"!hidenRows.includes(f.unique_id)\"\r\n                            class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                            <ng-template\r\n                                *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                            </ng-template>\r\n                        </div>\r\n                    </ng-container>\r\n                    <div *ngIf=\"this.type === 'Table-Expandable'\" class=\"cee-table-detail-cell\">\r\n                        <button mat-button class=\"cee-table-expandable-option\"\r\n                            (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                            === data ? collapseTitle : expandTitle}}</button>\r\n                    </div>\r\n                </div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <ng-container matColumnDef=\"expandedDetail\">\r\n            <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                <div class=\"cee-table-detail {{is_bootstrap && !tableHiddenGeneric?'row':''}} {{data !== expandedElement?'collapsed':''}}\"\r\n                    [@detailExpand]=\"data === expandedElement ? 'expanded' : 'collapsed'\"\r\n                    style=\"height: 0px; min-height: 0px;\">\r\n                    <ng-container *ngFor=\"let f of fieldData; let i = index; trackBy: trackByunique_id;\">\r\n                        <ng-container *ngIf=\"hidenRows.includes(f.unique_id)\">\r\n                            <div\r\n                                class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                <ng-template\r\n                                    *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                </ng-template>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"tableHiddenGeneric && hidenRows.length === 1\">\r\n                        <app-block-renderer [stepId]=\"stepId\" [templateId]=\"position\" [blockId]=\"hidenRows[0]\"\r\n                            class=\"hidden-content\" [blockPosition]=\"position\" [rootData]=\"rootData\">\r\n                        </app-block-renderer>\r\n                    </ng-container>\r\n                </div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"cee-table-header\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"\r\n            class=\"cee-table-row {{selctedRow === row?'cee-selected-row':''}} {{expandedElement === row?'cee-expanded-row':''}} {{row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}} {{type == 'Table-Multi-Select' ? (storeData.includes(row)? 'table-item-checked' : 'table-item-unchecked') : ''}}\"\r\n            (click)=\"listCellClick(row)\" (contextmenu)=\"listCellClick(row, true)\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedResp']\"\r\n            class=\"cee-resp-row {{row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\"\r\n            class=\"cee-detail-row {{row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n    </table>\r\n    <div class=\"no-data-info\" *ngIf=\"loaded && dataSource.filteredData.length === 0\">{{noDataFoundLabel}}</div>\r\n\r\n\r\n    <ng-container *ngIf=\"!noDataFound && showPagination\">\r\n        <!-- Bootstrap Pagination -->\r\n        <div *ngIf=\"paginationStyle !== 'material' && autoPagination\" class=\"pagination-container\">           \r\n    \r\n            <!-- Page numbers -->\r\n            <button *ngFor=\"let pageNumber of pages\" type=\"button\" [disabled]=\"pageNumber === '...'\"\r\n                (click)=\"setCurrent(pageNumber)\" class=\"pagination-btn-page\"\r\n                [class.active]=\"pageNumber === pagination.currentPage\" attr.aria-label=\"Select page {{pageNumber}}\">\r\n                {{pageNumber}}\r\n            </button>\r\n        </div>\r\n    \r\n        <!-- Material Pagination-->\r\n        <mat-paginator *ngIf=\"showPagination && paginationStyle === 'material'\" [pageSizeOptions]=\"pageItems\" (page)=\"onPaginationChange($event)\"\r\n            showFirstLastButtons>\r\n        </mat-paginator>\r\n    </ng-container>\r\n    \r\n</ng-container>\r\n\r\n\r\n<ng-template #cellData let-f='f' let-position='position' let-data='data' let-expandedDetail='expandedDetail'\r\n    let-method='method'>\r\n    <ng-container [ngSwitch]=\"f.field_type\">\r\n        <ng-container *ngSwitchCase=\"'label'\">\r\n            <label *ngIf=\"expandedDetail && f.field_label\" class=\"cee-table-detail-label\">{{f.field_label}}<span>: </span></label>\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data && data['rowData'] && data['rowData'][f.unique_id] ? data['rowData'][f.unique_id] : {}, fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-label [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-label> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Switch'\">\r\n            <app-cee-switch [stepId]=\"stepId\" [fieldData]=\"f\" [rootData]=\"rootData\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData']\" [keepState]=\"true\">\r\n            </app-cee-switch>\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-button [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-button> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-image [rowData]=\"data['rowData'][f.unique_id]\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-image> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-toggle-button [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" [sectionData]=\"sectionData\"\r\n                class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-toggle-button> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-picker [stepId]=\"stepId\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData'][f.unique_id]\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-picker> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-cee-menu [stepId]=\"stepId\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData'][f.unique_id]\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-menu> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n                <app-cee-table [sectionData]=\"f\" [rootData]=\"rootData\" [rowData]=\"data['rowData'][f.unique_id]\"\r\n                    [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n                </app-cee-table>\r\n\t\t\t</div>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n            *ngSwitchCase=\"f.field_type === 'List' || f.field_type === 'List-Expandable' ? f.field_type : '' \">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap['List'] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f, type: f.field_type}\"></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-list-renderer [sectionData]=\"f\" [rootData]=\"rootData\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n            </app-list-renderer> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'TreeView'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f, type: f.field_type}\"></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-tree-renderer [sectionData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n            </app-tree-renderer> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'DynamicForm'\">\r\n\t\t\t<div class=\"field-{{ position }}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f}\"></ng-container>\r\n\t\t\t</div>\r\n            <!-- <app-dynamic-form [sectionData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\" [stepId]=\"stepId\" [rootData]=\"rootData\">\r\n            </app-dynamic-form> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchDefault>\r\n            <div *ngIf='expandedDetail' class=\" cee-table-detail-label\">{{f.field_label}}<span>: </span></div>\r\n            {{data['rowData'][f.unique_id].value}}\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</ng-template>\r\n", styles: ["@charset \"UTF-8\";table{width:100%}tr.cee-detail-row,tr.cee-resp-row{height:0}.cee-table-row td,.cee-resp-row td{border-bottom-width:0}.cee-table-detail,.cee-table-resp{overflow:hidden;display:flex}.cee-table-detail{transition:max-height 2s;max-height:1000px}.cee-table-detail.collapsed{max-height:0}.cee-table-resp{height:0}.cee-table-detail-label{font-weight:500;display:inline}.cee-table-detail-cell{padding:5px 0;margin-right:10px}table td.r-control{position:relative;padding-left:30px;cursor:pointer}table td.r-control:before{top:50%;left:5px;height:14px;width:14px;margin-top:-9px;display:block;position:absolute;color:#fff;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:14px;content:\"+\";background-color:#31b131}table tr.parent td.r-control:before{content:\"-\";background-color:#d33333}@keyframes loading{40%{background-position:100% 0}to{background-position:100% 0}}.loading{position:relative}.loading .bar{background-color:#e7e7e7;height:14px;border-radius:7px;width:80%}.loading:after{position:absolute;transform:translateY(-50%);top:50%;left:0;content:\"\";display:block;width:100%;height:24px;background-image:linear-gradient(100deg,#fff0,#ffffff80 60%,#fff0 80%);background-size:200px 24px;background-position:-100px 0;background-repeat:no-repeat;animation:loading 1s infinite}.expandTable{width:100%}.expandTable.resizing{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:col-resize}.expandTable .mat-header-cell{position:relative}.expandTable .mat-header-cell:not(:last-child) .resize-holder{cursor:col-resize;width:20px;height:100%;position:absolute;right:-10px;top:0;z-index:1}.expandTable .mat-cell:not(:nth-child(1)),.expandTable .mat-header-cell:not(:nth-child(1)){padding:0 10px}span{cursor:pointer;user-select:none;-webkit-user-select:none;display:flex}span.ce-label.case:hover:after{content:\"\\2191\"}span.ce-label.asc:after{content:\"\\2191\"}span.ce-label.desc:after{content:\"\\2193\"}.mat-mdc-cell ::ng-deep .switch-container .form-label{display:none!important}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ChangeDetectorRef }, { type: i10.CeeApiService }, { type: i11.Router }], { stepId: [{
            type: Input
        }], paginateValue: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], sectionData: [{
            type: Input
        }], type: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], headers: [{
            type: ViewChildren,
            args: [SortableHeaderDirective]
        }], paginator: [{
            type: ViewChild,
            args: [MatPaginator]
        }], sort: [{
            type: ViewChild,
            args: [MatSort]
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTableComponent, { className: "CeeTableComponent", filePath: "lib\\field-components\\cee-table\\cee-table.component.ts", lineNumber: 71 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRhYmxlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS10YWJsZS9jZWUtdGFibGUuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlL2NlZS10YWJsZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQix1QkFBdUIsRUFBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBeUMsWUFBWSxFQUFFLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUN2TCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFJdkQsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFFNUUsT0FBTyxFQUFFLFlBQVksSUFBSSxZQUFZLEVBQTBCLE1BQU0sNkJBQTZCLENBQUM7QUFFbkcsT0FBTyxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQXdCLE1BQU0sd0JBQXdCLENBQUM7QUFDdEYsT0FBTyxFQUFFLGtCQUFrQixJQUFJLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlD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LEtBQUs7WUFLZ0MsT0FBTztrQkFBNUMsWUFBWTttQkFBQyx1QkFBdUI7WUFNWixTQUFTO2tCQUFqQyxTQUFTO21CQUFDLFlBQVk7WUFDSCxJQUFJO2tCQUF2QixTQUFTO21CQUFDLE9BQU87WUFrVGxCLFFBQVE7a0JBRFAsWUFBWTttQkFBQyxRQUFRLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tGQXhVekIsaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgLCBJbnB1dCwgVmlld0NoaWxkLCBIb3N0TGlzdGVuZXIsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3UmVmLCBRdWVyeUxpc3QsIFZpZXdDaGlsZHJlbiwgZm9yd2FyZFJlZn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnN0YW50Lm1vZGVsJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTZXRBUElDYWxsYmFja0RhdGEgfSBmcm9tICcuLi8uLi91dGlscy9zZXQtYXBpLWNhbGxiYWNrLWRhdGEtdXRpbCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3IgYXMgTWF0UGFnaW5hdG9yLCBQYWdlRXZlbnQgYXMgUGFnZUV2ZW50IH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcGFnaW5hdG9yJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBNYXRTb3J0LCBNYXRTb3J0TW9kdWxlLCBTb3J0LCBTb3J0RGlyZWN0aW9uICB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NvcnQnO1xyXG5pbXBvcnQgeyBNYXRUYWJsZURhdGFTb3VyY2UgYXMgTWF0VGFibGVEYXRhU291cmNlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV0ZFRXZlbnRMaXN0SGFuZGxlciB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1ldmVudC1saXN0LWhhbmRsZXItdXRpbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IEFQSUtleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9hcGkta2V5LXV0aWwnO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXV0aWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGFiZWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHluYW1pYy1sYWJlbC11dGlsJztcclxuaW1wb3J0IHtTb3J0YWJsZUhlYWRlckRpcmVjdGl2ZSwgU29ydEV2ZW50LCBjb21wYXJlfSBmcm9tICcuL2NlZS10YWJsZS1zb3J0aW5nLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG5pbXBvcnQgeyBNYXRQYWdpbmF0b3JNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBDZWVTd2l0Y2hDb21wb25lbnQgfSBmcm9tICcuLi9jZWUtc3dpdGNoL2NlZS1zd2l0Y2guY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vY2VlLWJ1dHRvbi9jZWUtYnV0dG9uLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZUxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nQ2xhc3MsIE5nU3dpdGNoIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuLy8gaW1wb3J0IHsgQ2VlSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi9jZWUtaW1hZ2UvY2VlLWltYWdlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRvZ2dsZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uL2NlZS10b2dnbGUtYnV0dG9uL2NlZS10b2dnbGUtYnV0dG9uLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVBpY2tlckNvbXBvbmVudCB9IGZyb20gJy4uL2NlZS1waWNrZXIvY2VlLXBpY2tlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vY2VlLW1lbnUvY2VlLW1lbnUuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgTGlzdFJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9saXN0LXJlbmRlcmVyL2xpc3QtcmVuZGVyZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgVHJlZVJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy90cmVlLXJlbmRlcmVyL3RyZWUtcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmxvY2tSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL25nLWNlZS1jb3JlLm1vZHVsZSc7XHJcbi8vIGltcG9ydCB7IER5bmFtaWNGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBSZXNpemVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuL2NlZS10YWJsZS1yZXNpemUtY29sdW1uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBkZWZlciB9IGZyb20gJ3J4anMnO1xyXG5leHBvcnQgaW50ZXJmYWNlIFBlcmlvZGljRWxlbWVudCB7IH1cclxuXHJcbnZhciBFTEVNRU5UX0RBVEE6IFBlcmlvZGljRWxlbWVudFtdID0gQXJyYXkoMTApO1xyXG5cclxuLy8gaWYgeW91IHdhbnQgdG8gdXNlICQgYXMgYW4gYWxpYXNcclxuY29uc3QgJCA9IGpRdWVyeVxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS10YWJsZScsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLXRhYmxlLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS10YWJsZS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJyB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzIDogW01hdFNvcnRNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdENoZWNrYm94TW9kdWxlLCBGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBNYXRSYWRpb01vZHVsZSwgTWF0UGFnaW5hdG9yTW9kdWxlLCBOZ1N3aXRjaCwgTWF0VGFibGVNb2R1bGUsIE5nQ2xhc3MsIFJlc2l6ZUNvbHVtbkRpcmVjdGl2ZSwgU29ydGFibGVIZWFkZXJEaXJlY3RpdmUsIENlZVN3aXRjaENvbXBvbmVudCwgZm9yd2FyZFJlZigoKSA9PiBCbG9ja1JlbmRlcmVyQ29tcG9uZW50KV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZVRhYmxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3l7XHJcblxyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHBhZ2luYXRlVmFsdWU6IGFueTtcclxuICAgIEBJbnB1dCgpIGZpZWxkRGF0YTogYW55ID0gW107XHJcbiAgICBASW5wdXQoKSBzZWN0aW9uRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgdHlwZTogc3RyaW5nO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgcHJpbWFyeUtleUluZGV4OiBhbnk7XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGRhdGFTb3VyY2VMb2FkaW5nOiBhbnkgPSBFTEVNRU5UX0RBVEE7XHJcbiAgICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XHJcbiAgICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZHJlbihTb3J0YWJsZUhlYWRlckRpcmVjdGl2ZSloZWFkZXJzOiBRdWVyeUxpc3Q8U29ydGFibGVIZWFkZXJEaXJlY3RpdmU+O1xyXG4gICAgaGlkZW5Sb3dzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZXhwYW5kZWRFbGVtZW50O1xyXG4gICAgZXhwYW5kVGl0bGU6IHN0cmluZyA9ICdTaG93JztcclxuICAgIGNvbGxhcHNlVGl0bGU6IHN0cmluZyA9ICdIaWRlJztcclxuICAgIHBhZ2VJdGVtczogbnVtYmVyW107XHJcbiAgICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XHJcbiAgICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XHJcbiAgICBzaG93UGFnaW5hdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0ZpbHRlcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZmlsdGVyUGxhY2Vob2xkZXJUZXh0OiBzdHJpbmcgPSAnRmlsdGVyJztcclxuICAgIHNlbGVjdGlvbiA9IG5ldyBTZWxlY3Rpb25Nb2RlbCh0cnVlLCBbXSk7XHJcbiAgICBzaG93U2tlbGV0b25Mb2FkZXI6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgYXBpRGF0YTogYW55W10gPSBbXTtcclxuICAgIGFwaURhdGFDb3B5OiBhbnlbXSA9IFtdO1xyXG4gICAgZGlzcGxheVZhbHVlczogYW55ID0gW107XHJcbiAgICByYWRpb1ZhbHVlOiBhbnk7XHJcbiAgICBjaGVja2VkSXRlbXM6IGFueSA9IFtdO1xyXG4gICAgc3RvcmVEYXRhOiBhbnkgPSBbXTtcclxuICAgIHByaW1hcnlLZXlWYWwgPSAnJztcclxuICAgIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgZXh0cmFUYWJsZUNlbGwgPSAwO1xyXG4gICAgYWRkaXRpb25hbFBhcmFtZXRlcnMgPSB7fTtcclxuICAgIHNlbGN0ZWRSb3c7IFxyXG4gICAgY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgcGFnZVNpemUgPSAxMDsgLy8gZGVmYXVsdCwgY2FuIGJlIGZyb20gcGFnZUl0ZW1zXHJcbiAgICB0b3RhbFBhZ2VzID0gMDtcclxuICAgIHBhZ2VzVG9TaG93OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgZnVsbERhdGE6IGFueVtdID0gW107IC8vIHdpbGwgc3RvcmUgYWxsIHJvd3NcclxuICAgIHBhZ2luYXRpb25TdHlsZTogc3RyaW5nID0gJ21hdGVyaWFsJztcclxuICAgIGF1dG9QYWdpbmF0aW9uID0gdHJ1ZTtcclxuXHJcbiAgICBwYWdpbmF0aW9uID0ge1xyXG4gICAgICAgIGN1cnJlbnRQYWdlOiAxLFxyXG4gICAgICAgIGN1cnJlbnRJdGVtQ291bnQ6IDEwLFxyXG4gICAgICAgIHBhZ2VDb3VudDogMSxcclxuICAgICAgICBpdGVtQ291bnQ6IDAsXHJcbiAgICAgICAgcGFnZUl0ZW1zOiBbMTAsIDIwLCA1MCwgMTAwXSxcclxuICAgICAgICBzdGFydEluZGV4OiAwLFxyXG4gICAgICAgIGVuZEluZGV4OiAxMCxcclxuICAgICAgICBwYWdpbmF0aW9uUmFuZ2U6IDEwXHJcbiAgICB9O1xyXG4gICAgcGFnZXM6IGFueVtdID0gW107XHJcbiAgICB0b3RhbEl0ZW1zOiBudW1iZXIgPSAwO1xyXG4gICAgbm9EYXRhRm91bmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHBhZ2luYXRpb25GaXJzdExhYmVsOiBzdHJpbmcgPSAnRmlyc3QnO1xyXG4gICAgcGFnaW5hdGlvbkxhc3RMYWJlbDogc3RyaW5nID0gJ0xhc3QnO1xyXG5cclxuICAgIHNldEFQSUtleVV0aWw6IFNldEFQSUNhbGxiYWNrRGF0YTtcclxuICAgIHdmZUV2ZW50TGlzdEhhbmRsZXI6IFdGRUV2ZW50TGlzdEhhbmRsZXI7XHJcbiAgICBoaWRlblJvd3NGaWVsZDogT2JqZWN0O1xyXG4gICAgdGFibGVIaWRkZW5HZW5lcmljOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBsb2FkZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHBhZ2luYXRpb25OZXh0TGFiZWw6IHN0cmluZyA9ICdOZXh0JztcclxuICAgIHBhZ2luYXRpb25QcmV2aW91c0xhYmVsOiBzdHJpbmcgPSAnUHJldmlvdXMnO1xyXG4gICAgbm9EYXRhRm91bmRMYWJlbDogc3RyaW5nID0gJ25vIHJlY29yZCBmb3VuZC4nO1xyXG4gICAgZW5hYmxlU29ydDogc3RyaW5nW10gPSBbXTtcclxuICAgIHNlcnZlclBhZ2luYXRpb246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHBhZ2luYXRpb25BcGlLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZmlsdGVyQVBJS2V5OiBzdHJpbmc7XHJcbiAgICBwYWdpbmF0aW9uU2hvd2luZ1Jlc3VsdEhpbnQ6IHN0cmluZyA9ICcldmFsdWUlJztcclxuICAgIGlzX2Jvb3RzdHJhcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgYm9vdHN0cmFwX2NsYXNzX25hbWU6IHN0cmluZztcclxuICAgIGJsb2NrUmVuZGVyZWREYXRhOiBhbnk7XHJcbiAgICBmaWx0ZXJLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY29tbW9uVXRpbDogQ29tbW9uVXRpbDtcclxuICAgIGFwaUtleVV0aWw6IEFQSUtleVV0aWw7XHJcbiAgICByZXNwb25zaXZlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0xpc3RDZWxsID0gZmFsc2U7IC8vIHNldCB0cnVlIGlmIHRoZSBmaWVsZHMgaW4gZ2VuZXJpYyBibG9jayBpcyBMaXN0Q2VsbFxyXG4gICAgbGlzdENlbGxFdmVudENvbmZpZyA9IFtdOyAvLyBzZXQgTGlzdCBDZWxsIEV2ZW50IENvbmZpZ1xyXG4gICAgZGlzcGxheWVkRmllbGRzID0gW107IC8vIHVuaXF1ZSBJRHMgYXJyYXkgd2hlbiB0aGUgdXNlciBjb25maWd1cmVzIGEgbGlzdCBjZWxsIGluc2lkZSB0aGUgZ2VuZXJpYyBibG9ja1xyXG4gICAgdGFibGVDZWxsQXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICAgIGZpZWxkTGFiZWw6ICcnLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBmaWVsZExhYmVsOiAnJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgZGF0YUZvcm1hdFNlcGFyYXRvcjogJycsXHJcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIGlzVmFsaWQ6IHRydWVcclxuICAgIH07XHJcblxyXG4gICAgdG90YWxDb3VudEFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBmaWVsZExhYmVsOiAnJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgZGF0YUZvcm1hdFNlcGFyYXRvcjogJycsXHJcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIGlzVmFsaWQ6IHRydWVcclxuICAgIH07XHJcbiAgICBjb25kaXRpb25hbFV0aWw6IENvbmRpdGlvbmFsVXRpbDtcclxuICAgIHNldER5bmFtaWNMYWJlbFV0aWw6IER5bmFtaWNMYWJlbFV0aWw7XHJcbiAgICBmaWVsZElkTWFwQXBpS2V5OiBvYmplY3QgPSB7fTsgLy8gdG8gbWFwIHRoZSBhcGkgZmllbGQgaWQgYW5kIHRoZSBhcGkga2V5IG9mIGEgc2luZ2xlIGZpZWxkXHJcbiAgICB2YXJpYWJsZU9iamVjdCA9IHt9OyAvLyB2YXJpYWJsZSBvYmplY3RcclxuICAgIGZpbHRlclZhbHVlOiBzdHJpbmcgPSAnJztcclxuICAgIHJlc3VsdENvdW50QVBJS2V5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZHluYW1pY0NvbHVtbldpZHRoO1xyXG4gICAgcGFnaW5hdGlvblBhZ2VJbmRleDogYW55O1xyXG4gICAgcGFnaW5hdGlvblBhZ2VTaXplOiBhbnk7XHJcbiAgICBwYWdpbmF0aW9uVG90YWxDb3VudDogYW55O1xyXG4gICAgZmlyc3RMb2FkOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGhhc1Jvd0NvbmRpdGlvbkZpZWxkOiBhbnk7XHJcbiAgICBoYXNSb3dDb25kaXRpb25TZWxlY3Q6IGFueTtcclxuICAgIGlzU2VsZXRhYmxlOiBhbnk7XHJcbiAgICBodG1sX2lkOiBhbnkgPSAnJztcclxuICAgIGlzQ3VzdG9tQ2xhc3MgPSB0cnVlO1xyXG4gICAgYWRkaXRpb25hbFBhcmFtZXRlcnNmaWVsZHMgPSB7fTtcclxuICAgIGNvbnRleHRNZW51IDogYW55O1xyXG4gICAgcHJlc2V0RGF0YTogYW55O1xyXG4gICAgLy8gaXNEaXNwbGF5QmxhbmtDb2x1bW46IGFueSA9IHRydWU7XHJcbiAgICBsYXp5SW50ZXJ2YWw6IGFueSA9IFtdO1xyXG4gICAgcm93RGF0YUxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRhYmxlRGF0YTpvYmplY3RbXSA9IFtdO1xyXG4gICAgdGFibGVEYXRhTGF6eTpvYmplY3RbXSA9IFtdO1xyXG4gICAgc2VydmVyU29ydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc29ydEFwaUtleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmcmVlemVTb3J0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzb3J0QXBpVmFsdWVzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgc3RvcFBhZ2luYXRpb25FdmVudDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcGFnaW5hdGlvblNlcGFyYXRvcjogc3RyaW5nID0gXCIvXCI7XHJcblxyXG4gICAgY29tcG9uZW50TGlzdCA9IHt9O1xyXG4gICAgY29tcG9uZW50TWFwID0ge1xyXG4gICAgICAgIGxhYmVsOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRMaXN0WydsYWJlbCddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ10gPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVMYWJlbENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnbGFiZWwnXTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBNZW51OiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRMaXN0WydNZW51J10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1tZW51L2NlZS1tZW51LmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZU1lbnVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ01lbnUnXTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBJbWFnZTogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnSW1hZ2UnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydJbWFnZSddID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1pbWFnZS9jZWUtaW1hZ2UuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlSW1hZ2VDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0ltYWdlJ107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgUGlja2VyOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRMaXN0WydQaWNrZXInXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydQaWNrZXInXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcGlja2VyL2NlZS1waWNrZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlUGlja2VyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydQaWNrZXInXTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBCdXR0b246IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ0J1dHRvbiddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ0J1dHRvbiddID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1idXR0b24vY2VlLWJ1dHRvbi5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVCdXR0b25Db21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0J1dHRvbiddO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIExpc3Q6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ0xpc3QnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydMaXN0J10gPSBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1yZW5kZXJlci9saXN0LXJlbmRlcmVyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkxpc3RSZW5kZXJlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnTGlzdCddO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIER5bmFtaWNGb3JtOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRMaXN0WydEeW5hbWljRm9ybSddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ0R5bmFtaWNGb3JtJ10gPSBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5EeW5hbWljRm9ybUNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnRHluYW1pY0Zvcm0nXTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBUb2dnbGVCdXR0b246IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ1RvZ2dsZUJ1dHRvbiddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1RvZ2dsZUJ1dHRvbiddID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10b2dnbGUtYnV0dG9uL2NlZS10b2dnbGUtYnV0dG9uLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRvZ2dsZUJ1dHRvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnVG9nZ2xlQnV0dG9uJ107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgVHJlZVZpZXc6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ1RyZWVWaWV3J10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVHJlZVZpZXcnXSA9IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy90cmVlLXJlbmRlcmVyL3RyZWUtcmVuZGVyZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uVHJlZVJlbmRlcmVyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUcmVlVmlldyddO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBzZXRGcm9tU3RvcmVJbmZvOiB7XHJcbiAgICAgICAgZW5hYmxlZDogYm9vbGVhbixcclxuICAgICAgICBhcGlLZXk6IHN0cmluZ1xyXG4gICAgfSA9IHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBhcGlLZXk6IFwiXCJcclxuICAgIH07XHJcbiAgICBwcml2YXRlIHRpbWVvdXRJZHM6IGFueVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHVibGljIF9jZWVBcGlTZXJ2aWNlPzogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyPzogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBUElLZXlVdGlsID0gbmV3IFNldEFQSUNhbGxiYWNrRGF0YShhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsID0gbmV3IER5bmFtaWNMYWJlbFV0aWwoYXBpRGF0YVNlcnZpY2UsIGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVXRpbCA9IG5ldyBDb25kaXRpb25hbFV0aWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIgPSBuZXcgV0ZFRXZlbnRMaXN0SGFuZGxlcihcclxuICAgICAgICAgICAgX2NlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgIHJvdXRlcixcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2csXHJcbiAgICAgICAgICAgIHNuYWNrQmFyLFxyXG4gICAgICAgICAgICBodHRwXHJcbiAgICAgICAgKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5VXRpbCA9IG5ldyBBUElLZXlVdGlsKCk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfYm9vdHN0cmFwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9IFxyXG4gICAgIFxyXG4gICAgdHJhY2tCeXVuaXF1ZV9pZChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBpdGVtLnVuaXF1ZV9pZDtcclxuICAgIH1cclxuXHJcbiAgICBvblNvcnQoeyBjb2x1bW4sIGRpcmVjdGlvbiB9OiBTb3J0RXZlbnQpIHtcclxuICAgICAgICAvLyB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RvcmVEYXRhID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5zdG9yZVByaW1hcnlLZXkoKTtcclxuICAgICAgICAvLyByZXNldHRpbmcgb3RoZXIgaGVhZGVyc1xyXG4gICAgICAgIHRoaXMuaGVhZGVycy5mb3JFYWNoKChoZWFkZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKGhlYWRlci5zb3J0YWJsZSAhPT0gY29sdW1uKSB7XHJcbiAgICAgICAgICAgIGhlYWRlci5kaXJlY3Rpb24gPSAnJztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBzb3J0aW5nXHJcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZlclNvcnQpIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbiA9PT0gJycgfHwgY29sdW1uID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhQ29weSA9IHRoaXMuYXBpRGF0YTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YUNvcHkgPSBbLi4udGhpcy5hcGlEYXRhXS5zb3J0KChhLCBiKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gaXNOYU4oYltjb2x1bW5dKSA/IGFbY29sdW1uXS5sb2NhbGVDb21wYXJlKGJbY29sdW1uXSkgOiBhW2NvbHVtbl0tKGJbY29sdW1uXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRpcmVjdGlvbiA9PT0gJ2FzYycgPyByZXMgOiAtcmVzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sb2FkVGFibGVEYXRhKHRoaXMuYXBpRGF0YUNvcHkpO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICB0aGlzLnNvcnRDaGFuZ2VTZXRWYWx1ZShjb2x1bW4sIGRpcmVjdGlvbik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG1hdFNvcnRDaGFuZ2Uoc29ydDogU29ydCkge1xyXG4gICAgICAgIHRoaXMuc29ydENoYW5nZVNldFZhbHVlKHNvcnQuYWN0aXZlLCBzb3J0LmRpcmVjdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzb3J0Q2hhbmdlU2V0VmFsdWUoY29sdW1uOiBzdHJpbmcsIGRpcmVjdGlvbjogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZnJlZXplU29ydCkge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc29ydEFwaUtleXMgJiYgdGhpcy5zb3J0QXBpS2V5cy5sZW5ndGggPT09IDIpIHsgIFxyXG4gICAgICAgICAgICBsZXQgc29ydEZpZWxkID0gdGhpcy5maWVsZERhdGEuZmluZChmID0+IGYudW5pcXVlX2lkID09PSBjb2x1bW4pOyAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNvcnRBcGlLZXlzWzBdLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHNvcnRGaWVsZCAmJiBzb3J0RmllbGQucmVzcG9uc2VfYXBpX2tleSA/IHNvcnRGaWVsZC5yZXNwb25zZV9hcGlfa2V5IDogJydcclxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNvcnRBcGlLZXlzWzFdLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRpcmVjdGlvblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblNvcnRCdXR0b25DbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdzY3JvbGwnLCBbJyRldmVudCddKVxyXG4gICAgb25TY3JvbGwoZXZlbnQpIHtcclxuICAgIHRoaXMub25TY3JvbGxldmVudCgnT25SaWdodENsaWNrJywge30pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2Nyb2xsZXZlbnQodHlwZTogc3RyaW5nLCBwcmltYXJ5RGF0YTogYW55ID0ge30sIGlzRGVmYXVsdDogYm9vbGVhbiA9IHRydWUsIHBheUxvYWQ/OiBhbnksIGRpc3BsYXlUeXBlOiBzdHJpbmcgPSAnJyk6IHZvaWQge1xyXG4gICAgICAgIGZvcihsZXQgaSA9MDsgaTw9IHRoaXMuZmllbGREYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YVtpXSA/LmV2ZW50X2xpc3QgJiYgdGhpcy5maWVsZERhdGFbaV0gPy5ldmVudF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5vbkNvbXBvbmVudEV2ZW50QmF0Y2godGhpcy5maWVsZERhdGFbaV0sIHRoaXMucHJlc2V0RGF0YSwgdGhpcy5zdGVwSWQsIHR5cGUsIHByaW1hcnlEYXRhLCBpc0RlZmF1bHQsIHBheUxvYWQsIGRpc3BsYXlUeXBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlc2l6ZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5yZXNwb25zaXZlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gJCgnI3RhYmxlXycgKyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIGVsLmNzcyh7IGRpc3BsYXk6ICdibG9jaycsIG92ZXJmbG93OiAnaGlkZGVuJyB9KTtcclxuICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29sQ291bnQgPSBlbC5maW5kKCc+IHRoZWFkID4gdHIgPiB0aCcpLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJz4gdGhlYWQgPiB0ciA+IHRoJykuc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnPiB0Ym9keSA+IHRyLmNlZS10YWJsZS1yb3cgPiB0ZCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJz4gdGJvZHkgPiB0ci5jZWUtcmVzcC1yb3cgLmNlZS10YWJsZS1kZXRhaWwtY2VsbCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChlbC5pbm5lcldpZHRoKCkgPCBlbC5maW5kKCc+IHRoZWFkJykub3V0ZXJXaWR0aCgpICYmIGNvbENvdW50ID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmZpbmQoJz4gdGhlYWQgPiB0ciA+IHRoOm50aC1jaGlsZCgnICsgY29sQ291bnQgKyAnKScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5maW5kKCc+IHRib2R5ID4gdHIuY2VlLXRhYmxlLXJvdyA+IHRkOm50aC1jaGlsZCgnICsgY29sQ291bnQgKyAnKScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xDb3VudC0tO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb2xDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuZmluZCgnPiB0Ym9keSA+IHRyLmNlZS1yZXNwLXJvdyAuY2VlLXRhYmxlLWRldGFpbC1jZWxsOm50aC1jaGlsZCgnICsgKGkgKyAxKSArICcpJykuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWwuY3NzKHsgZGlzcGxheTogJ3RhYmxlJyB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBlbC5maW5kKCc+IHRib2R5ID4gdHIuY2VlLXRhYmxlLXJvdycpLnJlbW92ZUNsYXNzKCdwYXJlbnQnKTtcclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJz4gdGJvZHkgPiB0ci5jZWUtdGFibGUtcm93ID4gdGQ6bnRoLWNoaWxkKDEpJykucmVtb3ZlQ2xhc3MoJ3ItY29udHJvbCcpLnVuYmluZCgpO1xyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgndHIuY2VlLXJlc3Atcm93IC5jZWUtdGFibGUtcmVzcCcpLmFuaW1hdGUoeyBoZWlnaHQ6ICcwJyB9LCAyMjUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLmZpbmQoJz4gdGhlYWQgPiB0ciA+IHRoJykubGVuZ3RoID4gY29sQ291bnQpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5maW5kKCc+IHRib2R5ID4gdHIuY2VlLXRhYmxlLXJvdyA+IHRkOm50aC1jaGlsZCgxKScpLmFkZENsYXNzKCdyLWNvbnRyb2wnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmVudCA9ICQodGhpcykucGFyZW50KCd0cicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZCA9IHBhcmVudC5uZXh0KCcuY2VlLXJlc3Atcm93JykuZmluZCgnLmNlZS10YWJsZS1yZXNwJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFyZW50Lmhhc0NsYXNzKCdwYXJlbnQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LmFkZENsYXNzKCdwYXJlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNzcyh7IGhlaWdodDogJ2F1dG8nIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdGVtcEggPSBjaGlsZC5oZWlnaHQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmNzcyh7IGhlaWdodDogJzAnIH0pLmFuaW1hdGUoeyBoZWlnaHQ6IHRlbXBIIH0sIDIyNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnQucmVtb3ZlQ2xhc3MoJ3BhcmVudCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGQuYW5pbWF0ZSh7IGhlaWdodDogJzAnIH0sIDIyNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZW91dElkcy5wdXNoKHRpbWVvdXRJZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYW5zZm9ybVN0cmluZyhpOiBudW1iZXIsIGlucHV0OiBzdHJpbmcsIGdCbG9ja0lkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBwYXJ0cyA9IGlucHV0LnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHBhcnRzLm1hcCh4ID0+e1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgJHtnQmxvY2tJZH0kJHt4fSQke2l9YClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXN1bHQuam9pbignfCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZGlmeUZpZWxkVmFsdWUoaSA6IG51bWJlcixvYmo6IGFueSwgZ0Jsb2NrSWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChrZXkgPT09IFwiZmllbGRcIiB8fCBrZXkgPT0gXCJ1bmlxdWVfaWRcIiB8fCAga2V5ID09IFwiYWRkaXRpb25hbF9wYXJhbWV0ZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoa2V5ICE9PSBcImFkZGl0aW9uYWxfcGFyYW1ldGVyc1wiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBgJHtnQmxvY2tJZH0kJHtvYmpba2V5XX0kJHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBvYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlRhcmdldEZpZWxkc1wiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcImJsb2NrRmllbGRzXCIgfHwgcGFyYW0ucGFyYW1ldGVyX3R5cGUgPT09IFwiRXJhc2VTZXNzaW9uRGF0YVwiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlZhcmlhYmxlc1wiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlRhcmdldHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0c3MgPSBwYXJhbS52YWx1ZS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkocGFydHNzKSAmJiBwYXJ0c3MubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLnZhbHVlID0gdGhpcy50cmFuc2Zvcm1TdHJpbmcoaSwgcGFyYW0udmFsdWUsIGdCbG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbS52YWx1ZSA9IGAke2dCbG9ja0lkfSQke3BhcmFtLnZhbHVlfSQke2l9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gXCJvYmplY3RcIiAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5RmllbGRWYWx1ZShpLCBvYmpba2V5XSwgZ0Jsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TmV3RmllbGRzKGksIGZpZWxkcywgZ0Jsb2NrSWQpe1xyXG4gICAgICAgIGlmKGZpZWxkcy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZmllbGRzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5RmllbGRWYWx1ZShpLHgsIGdCbG9ja0lkKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sX2lkID0gdGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YS5odG1sX2lkID8gdGhpcy5yb3dEYXRhLmh0bWxfaWQgOiB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICBsZXQgZnJvbVN0b3JlO1xyXG4gICAgICAgIHRoaXMudGFibGVDZWxsQXBwRGF0YS5zdGVwSWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxfcGFyYW1ldGVycyxcclxuICAgICAgICAgICAgdW5pcXVlX2lkLFxyXG4gICAgICAgICAgICBldmVudF9saXN0XHJcbiAgICAgICAgfSA9IHRoaXMuc2VjdGlvbkRhdGE7XHJcblxyXG4gICAgICAgIGlmIChhZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiBhZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2hvdyBDaGlwcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hpcHNBcGlLZXlUb0Rpc3BsYXkgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUHJpbWFyeUtleU5hbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW1hcnlLZXlWYWwgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2hvdyBQYWdpbmF0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UGFnaW5hdGlvbiA9IHBhcmFtdGVyLnZhbHVlID09PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFZhbHVlcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUl0ZW1zID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiArcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudCA9IHRoaXMucGFnaW5hdGlvbi5wYWdlSXRlbXNbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Nob3cgRmlsdGVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RmlsdGVyID0gcGFyYW10ZXIudmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gTmV4dCBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbk5leHRMYWJlbCA9IHBhcmFtdGVyLnZhbHVlICE9PSAnJyA/IHBhcmFtdGVyLnZhbHVlIDogJ05leHQnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFN0eWxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uU3R5bGUgPSAocGFyYW10ZXIudmFsdWUgPT09ICdtYXRlcmlhbCcpID8gJ21hdGVyaWFsJyA6ICdib290c3RyYXAnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFByZXZpb3VzIExhYmVsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uUHJldmlvdXNMYWJlbCA9IHBhcmFtdGVyLnZhbHVlICE9PSAnJyA/IHBhcmFtdGVyLnZhbHVlIDogJ1ByZXZpb3VzJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBTaG93aW5nIFJlc3VsdCBIaW50JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uU2hvd2luZ1Jlc3VsdEhpbnQgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICcldmFsdWUlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnTm8gRGF0YSBGb3VuZCBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmRMYWJlbCA9IHBhcmFtdGVyLnZhbHVlICE9PSAnJyA/IHBhcmFtdGVyLnZhbHVlIDogJ25vIHJlY29yZCBmb3VuZC4nO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYXNlICdDRUVfZGlzcGxheV9ibGFua19jb2x1bW4nOlxyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmlzRGlzcGxheUJsYW5rQ29sdW1uID0gcGFyYW10ZXIudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdGaWx0ZXJLZXlzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJLZXlzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZpbHRlckFQSUtleSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyQVBJS2V5ID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZpbHRlciBQbGFjZWhvbGRlciBUZXh0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJQbGFjZWhvbGRlclRleHQgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2V0IGZyb20gc3RvcmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIudmFsdWUgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBPbmx5IHdvcmtzIGlmIHRoZSBhcGkga2V5IGlzIG11bHRpcGxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIGZvciBsaXN0IHRvIHNob3cgdGhlIGRhdGEgZnJvbSBoYW5kbGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIGhhbmRsZXIgZGF0YSBuZWVkcyB0byBiZSBzdG9yZWQgaW4gdGhlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAqIGFwaSBkYXRhIHN0b3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNTaW5nbGVBUElLZXkgJiYgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGcm9tU3RvcmVJbmZvID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuc2VjdGlvbkRhdGEucmVzcG9uc2VfYXBpX2tleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaUtleXMgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVzcG9uc2VfYXBpX2tleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhcGlLZXkgb2YgYXBpS2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyRGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcihhcGlLZXkuc3BsaXQoJyMjJylbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlckRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21TdG9yZSA9IGhhbmRsZXJEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnSGlkZVJvd3MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGVuUm93c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLnR5cGUgPT09ICdUYWJsZS1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2V4cGFuZFRpdGxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBhbmRUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLnR5cGUgPT09ICdUYWJsZS1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlIDogdGhpcy5leHBhbmRUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29sbGFwc2VUaXRsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VUaXRsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPSB0aGlzLnR5cGUgPT09ICdUYWJsZS1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlIDogdGhpcy5jb2xsYXBzZVRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdFbmFibGVTb3J0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbmFibGVTb3J0ID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gVHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnc2VydmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIEFQSSBLZXlzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uQXBpS2V5cyA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8fCcpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUmVzcG9uc2l2ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2l2ZSA9IHBhcmFtdGVyLnZhbHVlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Jlc3VsdCBDb3VudCBBUEkgS2V5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHRDb3VudEFQSUtleSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfZXhwYW5kX2NvbHVtbl93aWR0aCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0NvbHVtbldpZHRoID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9zb3J0X3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlcnZlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyU29ydCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX3NvcnRfYXBpX2tleXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRBcGlLZXlzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNvcnRBcGlLZXlBcnIgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfHwnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzb3J0QXBpS2V5QXJyLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydEFwaUtleVNldDEgPSBzb3J0QXBpS2V5QXJyWzBdLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0QXBpS2V5cy5wdXNoKHNvcnRBcGlLZXlTZXQxWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydEFwaUtleVNldDIgPSBzb3J0QXBpS2V5QXJyWzFdLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0QXBpS2V5cy5wdXNoKHNvcnRBcGlLZXlTZXQyWzBdKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRBcGlLZXlTZXQxWzFdICYmIHNvcnRBcGlLZXlTZXQyWzFdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zb3J0QXBpVmFsdWVzID0gW3NvcnRBcGlLZXlTZXQxWzFdLCBzb3J0QXBpS2V5U2V0MlsxXV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREZWZhdWx0U29ydCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gU2VwYXJhdG9yJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uU2VwYXJhdG9yID0gcGFyYW10ZXIudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh1bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgLy8gbGV0IGJsb2NrQ2FjaGUgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnNlYXJjaEJsb2NrRGF0YUZyb21DYWNoZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydkZWZhdWx0X3ZhbHVlJ10pO1xyXG4gICAgICAgICAgICAvLyBpZihibG9ja0NhY2hlKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnByb2Nlc3NCbG9ja0RhdGEoYmxvY2tDYWNoZSxmcm9tU3RvcmUsZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFzdEJsb2NrTG9hZGVkJykgIT0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snZGVmYXVsdF92YWx1ZSddKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGFzdEJsb2NrTG9hZGVkJywgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snZGVmYXVsdF92YWx1ZSddKVxyXG4gICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snZGVmYXVsdF92YWx1ZSddKS50b1Byb21pc2UoKS50aGVuKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgYmxvY2tEYXRhID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2NrRGF0YUNhY2hlJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdibG9ja0RhdGFDYWNoZScpKVsnZGF0YSddIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gbGV0IGNhY2hlRGF0YSA9ICggYmxvY2tEYXRhICYmIGJsb2NrRGF0YS5sZW5ndGggPiAwICkgPyBibG9ja0RhdGEuZmlsdGVyKGVsID0+IGVsLmJsb2NrX2lkID09IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2RlZmF1bHRfdmFsdWUnXSkgOiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBpZihjYWNoZURhdGEgJiYgY2FjaGVEYXRhLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGJsb2NrRGF0YS5wdXNoKHtibG9ja19pZDogdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snZGVmYXVsdF92YWx1ZSddLCBibG9ja19kYXRhOiBkYXRhfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdibG9ja0RhdGFDYWNoZScsIEpTT04uc3RyaW5naWZ5KHtkYXRhIDogYmxvY2tEYXRhfSkpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZXREYXRhIDogYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucm93RGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SWQgPSB0aGlzLnJvd0RhdGEudW5pcXVlX2lkLnNwbGl0KFwiJFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB0aGlzLmdldE5ld0ZpZWxkcyhuZXdJZFsyXSwgc2V0RGF0YS5ibG9ja19maWVsZHMsIG5ld0lkWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YS5ibG9ja19maWVsZHMgPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NCbG9ja0RhdGEoc2V0RGF0YSxmcm9tU3RvcmUsZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAwIHRoIGtleSBmb3IgdG90YWwgTm8gb2YgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAvLyAxc3Qga2V5IGZvciBwYWdlIG51bWJlclxyXG4gICAgICAgICAgICAgICAgLy8gMm5kIGtleSBmb3IgcGFnZSBzaXplXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uICYmIHRoaXMucGFnaW5hdGlvbkFwaUtleXMubGVuZ3RoIDwgMykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignU29ycnkgcGFnaW5hdGlvbiBhcGkga2V5cyBhcmUgbm90IGNvbmZpZ3VyZWQgcHJvcGVybHknICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJ0Zvcm1hdCBzaG91bGQgYmU6JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YXBpX2tleV9mb3JfdG90YWxfbnVtYmVyX29mX3ZhbHVlcz58fDxhcGlfa2V5X2Zvcl9wYWdlX251bWJlcj58fDxhcGlfa2V5X2Zvcl9wYWdlX3NpemU+Jyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uQXBpS2V5c1szXSAhPT0gJ2ZhbHNlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleCA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblBhZ2VTaXplID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlBcGlLZXkodGhpcy5wYWdpbmF0aW9uQXBpS2V5c1syXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudCA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gc2V0dGluZyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudCAmJiB0aGlzLnBhZ2luYXRpb25Ub3RhbENvdW50LnZhbHVlID8gdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudC52YWx1ZSA6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uUGFnZUluZGV4ICYmIHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleC52YWx1ZSA/IHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleC52YWx1ZSA6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uUGFnZVNpemUgJiYgdGhpcy5wYWdpbmF0aW9uUGFnZVNpemUudmFsdWUgPyB0aGlzLnBhZ2luYXRpb25QYWdlU2l6ZS52YWx1ZSA6IHRoaXMucGFnZUl0ZW1zWzBdXHJcbiAgICAgICAgICAgICAgICBdO1xyXG4gICAgICAgICAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBmb3JpblxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBpIGluIHRoaXMucGFnaW5hdGlvbkFwaUtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnBhZ2luYXRpb25BcGlLZXlzW2ldLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVzW2ldXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCd2aXNpYmxlJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdGhpcy5yb3dEYXRhLnZpc2libGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0W1xyXG4gICAgICAgICAgICAgICAgICAgICdlbWl0T25EYXRhU2V0T3JVcGRhdGVkXycgKyB1bmlxdWVfaWRcclxuICAgICAgICAgICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb2x1bW5Sb3dPbkRhdGFDaGFuZ2UoKTsgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uRmllbGREYXRhVXBkYXRlZCgnJywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucyA9IHRoaXMuZmllbGREYXRhXHJcbiAgICAgICAgICAgICAgICAubWFwKGMgPT4gYy51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09PSAnVGFibGUtU2luZ2xlLVNlbGVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFkaW9WYWx1ZSA9IHRoaXMuc3RvcmVEYXRhWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2V0RGF0YSgpO1xyXG4gICAgICAgIHRoaXMuZ2V0RGlzcGxheVZhbHVlcygpLnRoZW4odmFsdWVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja1Byb21pc2VWYWx1ZSh2YWx1ZXMpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnRhYmxlSGlkZGVuR2VuZXJpYyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YWJsZUhpZGRlbkdlbmVyaWMnKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBzZXQgc3RlcCBpZCB0byBhcHAgZGF0YVxyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5zdGVwSWQgPSB0aGlzLnN0ZXBJZDtcclxuXHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsnZW1pdEZvckVtcHR5U2Vzc2lvbiddID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRGb3JFbXB0eVNlc3Npb24uc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25FbXB0eVNlc3Npb24ocmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wYWdlSXRlbXMgJiYgdGhpcy5wYWdlSXRlbXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24ucGFnZUl0ZW1zID0gdGhpcy5wYWdlSXRlbXM7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50ID0gdGhpcy5wYWdlSXRlbXNbMF07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NCbG9ja0RhdGEoZGF0YSxmcm9tU3RvcmUsZXZlbnRfbGlzdCkge1xyXG4gICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGRhdGEpO1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHM7XHJcbiAgICAgICAgaWYodGhpcy5maWVsZERhdGEgJiYgdGhpcy5maWVsZERhdGEubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih4Py5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgeD8uYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgeC5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc2ZpZWxkc1twYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX3RhYmxlX2NlbGxfdmFsdWVzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LmZpZWxkX2xhYmVsID0geC5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSA/IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUoeCkuZmllbGRfbGFiZWwgOiB4LmZpZWxkX2xhYmVsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5keW5hbWljQ29sdW1uV2lkdGgpe1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZHluYW1pY0NvbHVtbldpZHRoID09ICdBTEwnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeC5yZXNpemFibGUgPSAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgud2lkdGggPSAxMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHguZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUgPSB4LmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lICsgXCIgcmVzaXplTmV3XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGR5bmFtaWNXaWR0aElkcyA9IHRoaXMuZHluYW1pY0NvbHVtbldpZHRoLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGR5bmFtaWNXaWR0aElkcy5pbmNsdWRlcyh4LnVuaXF1ZV9pZCkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5yZXNpemFibGUgPSAndHJ1ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB4LndpZHRoID0gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSA9IHguZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUgKyBcIiByZXNpemVOZXdcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZW5hYmxlU29ydC5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmVuYWJsZVNvcnQuaW5jbHVkZXMoeC51bmlxdWVfaWQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgeC5zb3J0aW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHguc29ydGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcmVzaENvbHVtblJvd09uRGF0YUNoYW5nZSgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy50eXBlID09ICdUYWJsZS1TaW5nbGUtU2VsZWN0JyB8fCB0aGlzLnR5cGUgPT0gJ1RhYmxlLU11bHRpLVNlbGVjdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ1NlbGVjdCcpO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhVGFibGVDZWxsID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy50eXBlID09PSAnVGFibGUtRXhwYW5kYWJsZScpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnB1c2goJ2V4cGFuZGFibGVPcHRpb24nKTsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleSgpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSAmJiB0aGlzLnJvd0RhdGEudmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnJvd0RhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRhYmxlRGF0YSh0aGlzLnJvd0RhdGEudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjYWxsIHRoZSBhcGkgZXZlbnQgc3VjY2VzcyBlbWl0dGVyXHJcbiAgICAgICAgICAgIGlmIChmcm9tU3RvcmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BUElDYWxsYmFjayhmcm9tU3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnRfbGlzdCAmJiBldmVudF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzZXZlbnQgb2YgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShldmVudF9saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXZlbnQuaXNEZWZhdWx0ICYmIHNldmVudC5ldmVudF9uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvbkxvYWQnLnRvTG93ZXJDYXNlKCkpIHsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoc2V2ZW50LCBldmVudF9saXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBvbkZpZWxkRGF0YVVwZGF0ZWQoZmllbGRJZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgdmlzaWJsZSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eSh0aGlzLnNlY3Rpb25EYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSByZXBlYXRhYmxlIGJsb2NrIGlmIHJlcXVpcmVkXHJcblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhWydjdXN0b21fY2xhc3NfY29uZGl0aW9uJ10gJiYgdGhpcy5zZWN0aW9uRGF0YVsnY3VzdG9tX2NsYXNzX2NvbmRpdGlvbiddLmhhc093blByb3BlcnR5KCdxdWVyeScpICYmIHRoaXMuc2VjdGlvbkRhdGFbJ2N1c3RvbV9jbGFzc19jb25kaXRpb24nXVsncXVlcnknXSAhPSAnJykge1xyXG4gICAgICAgICAgICBsZXQgY3VzdG9tQ2xhc3NDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0N1c3RvbUNsYXNzKHRoaXMuc2VjdGlvbkRhdGEsIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmIChjdXN0b21DbGFzc0NvbmRpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzc0NvbmRpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlZnJlc2hDb2x1bW5Sb3dPbkRhdGFDaGFuZ2UoKXtcclxuICAgICAgICBpZighQXJyYXkuaXNBcnJheSh0aGlzLmZpZWxkRGF0YSkpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBkaXNwbGF5ZWRDb2xUbXA6IHN0cmluZ1tdID0gdGhpcy5kaXNwbGF5ZWRDb2x1bW5zO1xyXG5cclxuICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMgPSB0aGlzLmZpZWxkRGF0YVxyXG4gICAgICAgICAgICA/LmZpbHRlcihjID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCBpcyBsaXN0IGNlbGwgdG8gdHJ1ZSBhbmRcclxuICAgICAgICAgICAgICAgIC8vIHNldCBMaXN0IENlbGwgQ29uZmlnXHJcbiAgICAgICAgICAgICAgICBpZiAoYy5maWVsZF90eXBlID09PSAnTGlzdGNlbGwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xpc3RDZWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDZWxsRXZlbnRDb25maWcgPSBjLmV2ZW50X2xpc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1NlbGV0YWJsZSA9IGMuaXNfZWRpdGFibGU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuaXNfZGlzcGxheSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhc1Jvd0NvbmRpdGlvbkZpZWxkID0gYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuaXNfZWRpdGFibGUgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNSb3dDb25kaXRpb25TZWxlY3QgPSBjO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBpc0Rpc3BsYXlCbGFua0NvbHVtbiA9IGMuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihhID0+IHtpZihhLnBhcmFtZXRlcl90eXBlID09PSBcIkNFRV9kaXNwbGF5X2JsYW5rX2NvbHVtblwiKXtyZXR1cm4gYTt9fSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNEaXNwbGF5QmxhbmtDb2x1bW4ubGVuZ3RoID4gMCAmJiBpc0Rpc3BsYXlCbGFua0NvbHVtblswXS52YWx1ZS50b0xvd2VyQ2FzZSgpICE9IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGMuaXNfZGlzcGxheSA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KGMsIGMudW5pcXVlX2lkLCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlID8gYyA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmhpZGVuUm93cy5pbmNsdWRlcyhjLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXllZEZpZWxkcy5wdXNoKGMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pLm1hcChjID0+IGMudW5pcXVlX2lkKTtcclxuXHJcbiAgICAgICAgaWYgKGRpc3BsYXllZENvbFRtcC5pbmNsdWRlcygnZXhwYW5kYWJsZU9wdGlvbicpICYmICF0aGlzLmRpc3BsYXllZENvbHVtbnMuaW5jbHVkZXMoJ2V4cGFuZGFibGVPcHRpb24nKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy5wdXNoKCdleHBhbmRhYmxlT3B0aW9uJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByaW1hcnlLZXkgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLm5hbWUgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLnZhbHVlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG90YWxDb3VudEFwcERhdGEodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudG90YWxDb3VudEFwcERhdGEgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMudG90YWxDb3VudEFwcERhdGEsXHJcbiAgICAgICAgICAgIC4uLiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQgKyAnX3RvdGFsX2NvdW50JyxcclxuICAgICAgICAgICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyB0aGlzLnJlc3VsdENvdW50QVBJS2V5IDogJycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5yZXN1bHRDb3VudEFQSUtleSksXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZUFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IFtdIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyh0aGlzLnJlc3VsdENvdW50QVBJS2V5KSksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnNldEFwcERhdGEodGhpcy50b3RhbENvdW50QXBwRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZW1pdE9iaiA9IHtcclxuICAgICAgICAgICAgYXBpS2V5OiB0aGlzLnJlc3VsdENvdW50QVBJS2V5LFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuZW1pdChlbWl0T2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREaXNwbGF5VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUxvZ2ljKCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5kaXNwbGF5VmFsdWVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlMb2dpYyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNbMF0gPSBwYXJzZUludCh0aGlzLnBhZ2luYXRlVmFsdWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IENvbnN0YW50Lmxpc3REaXNwbGF5TG9vcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlc1tpXSA9IHRoaXMuZGlzcGxheVZhbHVlc1tpIC0gMV0gKyBDb25zdGFudC5saXN0SW5pdGlhbERpc3BsYXlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja0NoZWNrZWRWYWx1ZXMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5VmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUHJvbWlzZVZhbHVlID0gKHByb21pc2VWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbWlzZVZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlVmFsdWVbaV0gPT09IGZhbHNlIHx8IE51bWJlci5pc05hTihwcm9taXNlVmFsdWVbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRlVmFsdWUgPSBDb25zdGFudC5saXN0RGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TG9naWMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlJ10gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YT8ucmVzcG9uc2VfYXBpX2tleSAmJiB0aGlzLnJvd0RhdGEucmVzcG9uc2VfYXBpX2tleS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlX2FwaV9rZXk6IHRoaXMucm93RGF0YS5yZXNwb25zZV9hcGlfa2V5WzFdXHJcbiAgICAgICAgICAgICAgICB9LCByZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFRhYmxlRGF0YSh0aGlzLmFwaURhdGEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLnJvd0RhdGEpe1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzLnNlbGN0ZWRSb3cgPT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29sdW1uUm93T25EYXRhQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25BUElDYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudGltZW91dElkcy5wdXNoKHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2V0RnJvbVN0b3JlSW5mby5lbmFibGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaUtleXMgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuc2V0RnJvbVN0b3JlSW5mby5hcGlLZXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyRXhpc3RzID0gYXBpS2V5cy5maW5kKGl0ZW0gPT4gaXRlbS5pbmNsdWRlcyhyZXMuaGFuZGxlcl9uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyRXhpc3RzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQVBJQ2FsbGJhY2socmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgICAgICAgXHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0W1xyXG4gICAgICAgICAgICAnc2VhcmNoRmlsdGVyRW1pdHRlcidcclxuICAgICAgICBdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnNlYXJjaEZpbHRlckVtaXR0ZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVsndW5pcXVlSWRzJ10uaW5jbHVkZXModGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclZhbHVlID0gZGF0YVsndmFsdWVzJ11bMF0gPyBkYXRhWyd2YWx1ZXMnXVswXSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tb25VdGlsLnNldEZpbHRlcktleXModGhpcy5kYXRhU291cmNlLCBkYXRhWydmaWx0ZXJDb2wnXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2socmVzOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdG90YWxQYWdlT2JqID0ge307XHJcbiAgICAgICAgLy8gY2hlY2sgaWYgc2VydmVyIHNpZGUgcGFnaW5hdGlvbiBhbmQgdGhlbiBzdG9yZSB0aGUgZGF0YSBmb3IgdGhlIHRvdGFsTm8gT2YgUGFnZXNcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIHNldHRpbmcgdG90YWwgTnVtYmVyIG9mIHZhbHVlc1xyXG4gICAgICAgICAgICBjb25zdCB0b3RhbFBhZ2UgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMF0sIHJlcyk7XHJcbiAgICAgICAgICAgIC8vIHNldHRpbmcgY3VycmVudCBwYWdlIG51bWJlclxyXG4gICAgICAgICAgICBjb25zdCBjdXJyUGFnZSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5wYWdpbmF0aW9uQXBpS2V5c1sxXSwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggPSBOdW1iZXIoY3VyclBhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCB0b3RhbCBubyBvZiBwYWdlc1xyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlT2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRvdGFsUGFnZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLmlzU2luZ2xlQVBJS2V5ID8gdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5IDogdGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLnNlY3Rpb25EYXRhLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGEgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGEgPSByZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRUYWJsZURhdGEodGhpcy5hcGlEYXRhKTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB0aGlzLnNldFRvdGFsQ291bnRBcHBEYXRhKHRoaXMuc2VydmVyUGFnaW5hdGlvbiAmJiB0b3RhbFBhZ2VPYmpbJ3ZhbHVlJ10gPyB0b3RhbFBhZ2VPYmpbJ3ZhbHVlJ10gOiB0aGlzLmFwaURhdGEubGVuZ3RoKTtcclxuICAgICAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbiAmJiB0aGlzLnBhZ2luYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5faW50bC5uZXh0UGFnZUxhYmVsID0gdGhpcy5wYWdpbmF0aW9uTmV4dExhYmVsO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5faW50bC5wcmV2aW91c1BhZ2VMYWJlbCA9IHRoaXMucGFnaW5hdGlvblByZXZpb3VzTGFiZWw7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLl9pbnRsLmdldFJhbmdlTGFiZWwgPSB0aGlzLmdldFJhbmdlTGFiZWw7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0TG9hZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IucGFnZUluZGV4ID0gdGhpcy5wYWdpbmF0aW9uUGFnZUluZGV4ID8gdGhpcy5wYWdpbmF0aW9uUGFnZUluZGV4LnZhbHVlIC0gMSA6IHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplID0gdGhpcy5wYWdpbmF0aW9uUGFnZVNpemUgPyB0aGlzLnBhZ2luYXRpb25QYWdlU2l6ZS52YWx1ZSA6IHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdExvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyS2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gKGRhdGE6IEVsZW1lbnQsIGZpbHRlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbCBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJLZXlzLmluY2x1ZGVzKGNvbCkgJiYgZGF0YVtjb2xdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0b3RhbFBhZ2VPYmopLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5sZW5ndGggPSB0b3RhbFBhZ2VPYmpbJ3ZhbHVlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHRvdGFsUGFnZU9iaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRUxFTUVOVF9EQVRBID0gQXJyYXkodGhpcy5wYWdpbmF0b3IucGFnZVNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VMb2FkaW5nID0gRUxFTUVOVF9EQVRBOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Jvd1Zpc2liaWxpdHkocmVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzUm93Q29uZGl0aW9uRmllbGQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByZGF0YSBvZiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHlDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZCwgdGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZC51bmlxdWVfaWQsICcnLCB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUocmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aXNpYmlsaXR5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Jvd0VkaXRhYmxlKHJlcykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1Jvd0NvbmRpdGlvblNlbGVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJkYXRhIG9mIHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdGFibGVDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKHRoaXMuaGFzUm93Q29uZGl0aW9uU2VsZWN0LCB0aGlzLmhhc1Jvd0NvbmRpdGlvblNlbGVjdC51bmlxdWVfaWQsICcnLCB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUocmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIHJkYXRhWydpc1NlbGVjdGFibGUnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmRhdGFbJ2lzU2VsZWN0YWJsZSddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJvdyBTZXQ6IFwiLCByZXN1bHQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByZGF0YSBvZiByZXMpIHtcclxuICAgICAgICAgICAgICAgIHJkYXRhWydpc1NlbGVjdGFibGUnXSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChyZGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkVGFibGVEYXRhKGFwaURhdGEpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmxvY2tSZW5kZXJlZERhdGEpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFwaURhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBhcGlEYXRhW2ldO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgncm93RGF0YScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBkYXRhWydyb3dEYXRhJ10gPSB7fTsgZXhpc3RpbmcgbGluZSBmb3IgZXh0ZW5zaWJsZVxyXG4gICAgICAgICAgICAvLyBuZXcgYmxvY2sgaXMgYmVsb3dcclxuICAgICAgICAgICAgaWYgKCFPYmplY3QuaXNFeHRlbnNpYmxlKGRhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0geyAuLi5kYXRhLCByb3dEYXRhOiB7fSB9O1xyXG4gICAgICAgICAgICAgICAgYXBpRGF0YVtpXSA9IGRhdGE7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhWydyb3dEYXRhJ10gPSB7fTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmIG9mIHRoaXMuZmllbGREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdID0gdGhpcy5nZXRSb3dEYXRhVmFsdWUoZGF0YSwgZiwgaSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgdWlBcGlWYWx1ZSA9IHRoaXMucmV0dXJuVW5pcXVlSWRNYXBBcGlWYWx1ZShkYXRhKTtcclxuICAgICAgICAgICAgZGF0YVsncm93RGF0YSddWydjb25kaXRpb25hbEN1c3RvbUNsYXNzJ10gPSB0aGlzLmdldENvbmRpdGlvbmFsQ2xhc3ModWlBcGlWYWx1ZSwgZmFsc2UpID8gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSA6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIEFzc2lnbiB0aGUgZGF0YSB0byB0aGUgZGF0YSBzb3VyY2UgZm9yIHRoZSB0YWJsZSB0byByZW5kZXJcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YSA9IGFwaURhdGE7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmNoZWNrUm93VmlzaWJpbGl0eSh0aGlzLnRhYmxlRGF0YSk7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPSB0aGlzLmNoZWNrUm93RWRpdGFibGUodGhpcy50YWJsZURhdGEpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoKTsgICBcclxuICAgICAgICB0aGlzLnNldERlZmF1bHRTb3J0KCk7IFxyXG4gICAgICAgIGlmICghdGhpcy5zZXJ2ZXJTb3J0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5zb3J0ID0gdGhpcy5zb3J0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB0aGlzLnNob3dTa2VsZXRvbkxvYWRlciA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm9uUmVzaXplKCk7XHJcblxyXG4gICAgICAgIC8vIFNraXAgbGF6eSBsb2FkaW5nIGZvciBib290c3RyYXAgcGFnaW5hdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2luYXRpb25TdHlsZSA9PT0gJ2Jvb3RzdHJhcCcgJiYgdGhpcy5zaG93UGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAvLyBEaXJlY3RseSBzZXQgdGFibGVEYXRhTGF6eSBhbmQgaW5pdGlhbGl6ZSBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIHRoaXMudGFibGVEYXRhTGF6eSA9IFsuLi50aGlzLnRhYmxlRGF0YV07XHJcbiAgICAgICAgICAgIHRoaXMucm93RGF0YUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zaG93U2tlbGV0b25Mb2FkZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgPSB0aGlzLnRhYmxlRGF0YUxhenkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSB0aGlzLnRhYmxlRGF0YUxhenkubGVuZ3RoO1xyXG4gICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gdGhpcy50YWJsZURhdGFMYXp5Lmxlbmd0aCA9PT0gMDtcclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpOyAvLyBUaGlzIHdpbGwgY2FsbCBwZXJmb3JtUGFnaW5hdGlvbigpXHJcblxyXG4gICAgICAgICAgICAvLyBIaWRlIHRoZSBtb2RhbCBwb3B1cCBsb2FkZXIgaWYgaXQgcnVubmluZ1xyXG4gICAgICAgICAgICBjb25zdCBtb2RhbFdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci1vdmVybGF5JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIGlmIChtb2RhbFdyYXBwZXIpIHtcclxuICAgICAgICAgICAgICAgIG1vZGFsV3JhcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBVc2UgbGF6eSBsb2FkaW5nIGZvciBtYXRlcmlhbCBwYWdpbmF0aW9uXHJcbiAgICAgICAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0U29ydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3J0QXBpS2V5cyAmJiB0aGlzLnNvcnRBcGlLZXlzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBsZXQgc29ydEJ5VmFsdWUsIHNvcnRUeXBlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMuc29ydEFwaUtleXNbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0VHlwZSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMuc29ydEFwaUtleXNbMV0pO1xyXG4gICAgICAgICAgICBpZiAoc29ydEJ5ICYmIHNvcnRCeS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiBzb3J0VHlwZSAmJiBzb3J0VHlwZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgc29ydEJ5VmFsdWUgPSBzb3J0QnkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZVZhbHVlID0gc29ydFR5cGUudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zb3J0QXBpVmFsdWVzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNvcnRBcGlLZXlzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvcnRBcGlWYWx1ZXNbMF1cclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNvcnRBcGlLZXlzWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvcnRBcGlWYWx1ZXNbMV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc29ydEJ5VmFsdWUgPSB0aGlzLnNvcnRBcGlWYWx1ZXNbMF07XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZVZhbHVlID0gdGhpcy5zb3J0QXBpVmFsdWVzWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzb3J0QnlWYWx1ZSAmJiBzb3J0VHlwZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc29ydEZpZWxkID0gdGhpcy5maWVsZERhdGEgPyB0aGlzLmZpZWxkRGF0YS5maW5kKGYgPT4gZi5yZXNwb25zZV9hcGlfa2V5ID09PSBzb3J0QnlWYWx1ZSkgOiAnJzsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWV6ZVNvcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNEaXJlY3Rpb246IFNvcnREaXJlY3Rpb24gPSAnJztcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc29ydFR5cGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FzYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNEaXJlY3Rpb24gPSBcImFzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZXNjJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc0RpcmVjdGlvbiA9IFwiZGVzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzRGlyZWN0aW9uID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0U3RhdGU6IFNvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBzb3J0RmllbGQgJiYgc29ydEZpZWxkLnVuaXF1ZV9pZCA/IHNvcnRGaWVsZC51bmlxdWVfaWQgOiAnJywgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzRGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9OyAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aCAmJiB0aGlzLnNvcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQuYWN0aXZlID0gc29ydFN0YXRlLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQuZGlyZWN0aW9uID0gc29ydFN0YXRlLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydENoYW5nZS5lbWl0KHNvcnRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyLnNvcnRhYmxlID09PSBzb3J0U3RhdGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIuZGlyZWN0aW9uID0gc29ydFR5cGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5zb3J0aW5nID0gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnNvcnQuZW1pdCh7IGNvbHVtbjogc29ydFN0YXRlLmFjdGl2ZSwgZGlyZWN0aW9uOiBzb3J0VHlwZVZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWV6ZVNvcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXJ2ZXJTb3J0ICYmIHRoaXMuc29ydCAmJiAhdGhpcy5kYXRhU291cmNlLnNvcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0RhdGFWYWx1ZShkYXRhLCBmaWVsZCwgbGlzdF9wb3MpIHtcclxuICAgICAgICBjb25zdCBhcGlEYXRhID0gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShmaWVsZCwgZGF0YSk7XHJcbiAgICAgICAgZGF0YVtmaWVsZC51bmlxdWVfaWRdID0gYXBpRGF0YTtcclxuICAgICAgICBsZXQgbGFiZWxUeXBlID0gJyc7XHJcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgICAgICAgbGFiZWxUeXBlID0gKHRoaXMuaXNTaW5nbGVBUElLZXkgPyBmaWVsZC5hcGlfa2V5IDogZmllbGQucmVzcG9uc2VfYXBpX2tleSkgPyAnJyA6ICdTVEFUSUMnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9Gb3IgYWRkaXRpb25hbCBwYXJhbXMgYXMga2V5OnZhbHVlIHBhaXJzIFxyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQYXJhbXM6IGFueSA9IGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgICAgICBhY2NbY3Vyci5wYXJhbWV0ZXJfdHlwZV0gPSBjdXJyLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgLy9DaGVjayBvZiBmaWVsZCBoYXMgcmVzcG9uc2VfYXBpX2tleSAmJiBhZGRpdGlvbmFsUGFyYW1zIGhhcyBDRUVfdGFibGVfY2VsbF92YWx1ZXNcclxuICAgICAgICBpZihhZGRpdGlvbmFsUGFyYW1zLmhhc093blByb3BlcnR5KFwiQ0VFX3RhYmxlX2NlbGxfdmFsdWVzXCIpICYmIGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoYWRkaXRpb25hbFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShcIkNFRV9UaG91c2FuZF9TZXBhcmF0b3JcIikgJiYgKGFkZGl0aW9uYWxQYXJhbXNbXCJDRUVfVGhvdXNhbmRfU2VwYXJhdG9yXCJdKS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSA9IHRoaXMuY29tbW9uVXRpbC5mb3JtYXROdW1iZXIoZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSAhPSAnJyAmJiBkYXRhW2ZpZWxkLnJlc3BvbnNlX2FwaV9rZXldICE9IG51bGwgJiYgZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSAhPSB1bmRlZmluZWQgJiYgIWRhdGFbZmllbGQucmVzcG9uc2VfYXBpX2tleV0uaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZmllbGQucmVzcG9uc2VfYXBpX2tleV0gKz0gJy4wMCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc0RhdGEgPSB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2tleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNEYXRhW2tleV0gPSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgICAgIHZhbHVlID0gKGZpZWxkICYmIGZpZWxkLmZpZWxkX3R5cGUgJiYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcgJiYgZmllbGQuZmllbGRfbGFiZWwgJiYgZmllbGQuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykgfHxcclxuICAgICAgICAgICAgKGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiBmaWVsZC5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpKSkgP1xyXG4gICAgICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKGZpZWxkLCBkYXRhKS5maWVsZF9sYWJlbCA6XHJcbiAgICAgICAgICAgIGxhYmVsVHlwZSA9PT0gJ1NUQVRJQycgPyBmaWVsZC5maWVsZF9sYWJlbCA6IGFwaURhdGE7XHJcbiAgICAgICAgaWYoZmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTw9IGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZihmaWVsZC5hZGRpdGlvbmFsX3BhcmFtZXRlcnNbaV0/LnBhcmFtZXRlcl90eXBlID09PSBcIkNFRV90YWJsZV9jZWxsX3ZhbHVlc1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHluYW1pY1ZhbCA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUoZmllbGQsIGRhdGEpLmFkZGl0aW9uYWxfcGFyYW1ldGVyc19jb25maWc7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR5bmFtaWNQb3NpdGlvbiA9IGR5bmFtaWNWYWwuc3Vic3RyKGR5bmFtaWNWYWwubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxQb3NpdGlvbiA9IGR5bmFtaWNWYWwuc2xpY2UoMCwtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZHluYW1pY1Bvc2l0aW9uID09ICdzJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbFBvc2l0aW9uICsgJyAnICsgYXBpRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkeW5hbWljUG9zaXRpb24gPT0gJ2UnKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhcGlEYXRhICsgJyAnICsgbFBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKGR5bmFtaWNQb3NpdGlvbiA9PSAnbicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBsUG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFwaURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkICYmIChmaWVsZC5pc19kaXNwbGF5ID09PSAyIHx8IGZpZWxkLmlzX2VkaXRhYmxlID09PSAyKSkge1xyXG4gICAgICAgICAgICBsZXQgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCBza2lwaXNEaXNwbGF5Q2hlY2sgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pc19lZGl0YWJsZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHVpQXBpVmFsdWUgPSB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBpc0Rpc3BsYXlCbGFua0NvbHVtbiA9IGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoYSA9PiB7aWYoYS5wYXJhbWV0ZXJfdHlwZSA9PT0gXCJDRUVfZGlzcGxheV9ibGFua19jb2x1bW5cIil7cmV0dXJuIGE7fX0pOyAgXHJcbiAgICAgICAgICAgICBpZihpc0Rpc3BsYXlCbGFua0NvbHVtbi5sZW5ndGggPiAwICYmIGlzRGlzcGxheUJsYW5rQ29sdW1uWzBdLnZhbHVlLnRvTG93ZXJDYXNlKCkgIT0gXCJ0cnVlXCIpIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgc2tpcGlzRGlzcGxheUNoZWNrID0gdHJ1ZTtcclxuICAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogZmllbGQudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgaHRtbF9pZDogdGhpcy5odG1sX2lkICsgJy0nICsgZmllbGQudW5pcXVlX2lkICsgJy0nICsgbGlzdF9wb3MsXHJcbiAgICAgICAgICAgICAgICBmcm9tRmllbGQ6ICdUYWJsZScsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMiAmJiAhc2tpcGlzRGlzcGxheUNoZWNrKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25kaXRpb25hbFZpc2libGUodWlBcGlWYWx1ZSwgaXNWaXNpYmxlLCBmaWVsZCkgOiBpc1Zpc2libGUsXHJcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogZmllbGQuaXNfZWRpdGFibGUgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uZGl0aW9uYWxFZGl0YWJsZSh1aUFwaVZhbHVlLCBpc0VkaXRhYmxlLCBmaWVsZCkgOiBpc0VkaXRhYmxlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IGZpZWxkLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgIGh0bWxfaWQ6IHRoaXMuaHRtbF9pZCArICctJyArIGZpZWxkLnVuaXF1ZV9pZCArICctJyArIGxpc3RfcG9zLFxyXG4gICAgICAgICAgICAgICAgZnJvbUZpZWxkOiAnVGFibGUnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbGF6eUxvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFMYXp5ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB0aGlzLmxhenlJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucm93RGF0YUxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubGF6eUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50YWJsZURhdGEubGVuZ3RoICE9PSB0aGlzLnRhYmxlRGF0YUxhenkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRhYmxlRGF0YUxhenkucHVzaCh0aGlzLnRhYmxlRGF0YVt0aGlzLnRhYmxlRGF0YUxhenkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMudGFibGVEYXRhTGF6eTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3dEYXRhTG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2tlbGV0b25Mb2FkZXIgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uU3R5bGUgPT09ICdib290c3RyYXAnICYmIHRoaXMuc2hvd1BhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50ID0gdGhpcy50YWJsZURhdGFMYXp5Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRvdGFsSXRlbXMgPSB0aGlzLnRhYmxlRGF0YUxhenkubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0aGlzLnRhYmxlRGF0YUxhenkubGVuZ3RoID09PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25QYWdpbmF0aW9uQ291bnRDaGFuZ2UoKTsgLy8gVGhpcyB3aWxsIGNhbGwgcGVyZm9ybVBhZ2luYXRpb24oKVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMudGFibGVEYXRhTGF6eTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyBIaWRlIHRoZSBtb2RhbCBwb3B1cCBsb2FkZXIgaWYgaXQgcnVubmluZ1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbW9kYWxXcmFwcGVyID0gd2luZG93LmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sb2FkZXItb3ZlcmxheScpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgaWYgKG1vZGFsV3JhcHBlcikge1xyXG4gICAgICAgICAgICAgICAgICAgIG1vZGFsV3JhcHBlci5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAxMDApOyAgXHJcbiAgICB9XHJcblxyXG4gICAgLy8gQEhvc3RMaXN0ZW5lcihcIndpbmRvdzpiZWZvcmV1bmxvYWRcIiwgW1wiJGV2ZW50XCJdKSB1bmxvYWRIYW5kbGVyKGV2ZW50OiBFdmVudCkge1xyXG4gICAgLy8gICAgIGlmICh0aGlzLmxhenlJbnRlcnZhbCkge1xyXG4gICAgLy8gICAgICAgICBjbGVhckludGVydmFsKHRoaXMubGF6eUludGVydmFsKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgdGhpcy50YWJsZURhdGFMYXp5ID0gW107XHJcbiAgICAvLyAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSB0aGlzLnRhYmxlRGF0YUxhenk7XHJcbiAgICAvLyB9XHJcblxyXG5cclxuICAgIC8vIFRPRE86IERlbGV0ZSB0aGlzIGZ1bmN0aW9uIG9uY2UgdGhlIGNvbmRpdGlvbmFsIHN0YXRlbWVudHMgZGVwZW5kIG9uIHRoZSBhcGkga2V5IHRoZW4gb25seSByZXR1cm4gdGhlIHNpbmdsZSBhcGkgcmVzcG9uc2Ugb2JqXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHJldHVybnMgdGhlIG1hcHBpbmcgb2YgdW5pcXVlIGlkIHRvIHRoZSBhcGkgdmFsdWVcclxuICAgICAqIEBwYXJhbSBhcGlSZXNwb25zZSB0aGUgcmVzcG9uc2Ugb2JqZWN0IGkuZS4gdGhlIHNpbmdsZSBpbmRleCBvZiB0aGUgYXJyYXlcclxuICAgICAqL1xyXG4gICAgcmV0dXJuVW5pcXVlSWRNYXBBcGlWYWx1ZShhcGlSZXNwb25zZSkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGFwaVJlc3BvbnNlKSkge1xyXG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModGhpcy5maWVsZElkTWFwQXBpS2V5KS5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1bmlxdWVJZCA9IHRoaXMuZmllbGRJZE1hcEFwaUtleVtrZXldO1xyXG4gICAgICAgICAgICAgICAgb2JqW3VuaXF1ZUlkXSA9IGFwaVJlc3BvbnNlW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiB0aGUgdmlzaWJsZSBjb25kaXRpb25cclxuICAgICAqIEBwYXJhbSBkYXRhIGFwaSByZXNwb25zZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBwcmVzZW50VmFsdWUgcHJlc2VudCB2YWx1ZSBvZiB0aGUgZmllbGRcclxuICAgICAqIEBwYXJhbSBmaWVsZCB0aGUgZmllbGQgcHJvcGVydHkgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldENvbmRpdGlvbmFsVmlzaWJsZShkYXRhLCBwcmVzZW50VmFsdWUsIGZpZWxkKSB7XHJcbiAgICAgICAgY29uc3QgdmlzaWJpbGl0eUNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eShmaWVsZCwgZmllbGQudW5pcXVlX2lkLCAnJywgZGF0YSk7XHJcbiAgICAgICAgaWYgKHZpc2liaWxpdHlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZpc2liaWxpdHlDb25kaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmVzZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGVkaXRhYmxlIGNvbmRpdGlvblxyXG4gICAgICogQHBhcmFtIGRhdGEgYXBpIHJlc3BvbnNlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHByZXNlbnRWYWx1ZSBwcmVzZW50IHZhbHVlIG9mIHRoZSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGZpZWxkIHRoZSBmaWVsZCBwcm9wZXJ0eSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2V0Q29uZGl0aW9uYWxFZGl0YWJsZShkYXRhLCBwcmVzZW50VmFsdWUsIGZpZWxkKSB7XHJcbiAgICAgICAgY29uc3QgZWRpdGFibGVDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKGZpZWxkLCBmaWVsZC51bmlxdWVfaWQsICcnLCBkYXRhKTtcclxuICAgICAgICBpZiAoZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIGVkaXRhYmxlQ29uZGl0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJlc2VudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSBlZGl0YWJsZSBjb25kaXRpb25cclxuICAgICAqIEBwYXJhbSBkYXRhIGFwaSByZXNwb25zZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBwcmVzZW50VmFsdWUgcHJlc2VudCB2YWx1ZSBvZiB0aGUgZmllbGRcclxuICAgICAqL1xyXG4gICAgZ2V0Q29uZGl0aW9uYWxDbGFzcyhkYXRhLCBwcmVzZW50VmFsdWUpIHtcclxuICAgICAgICBjb25zdCBDbGFzc0NvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrQ2xhc3MoZGF0YSwgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YSk7XHJcbiAgICAgICAgaWYgKENsYXNzQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBDbGFzc0NvbmRpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByZXNlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG1hcCBiZXR3ZWVuIGZpZWxkSWQgYW5kIGFwaSBrZXlcclxuICAgICAqL1xyXG4gICAgcmV0dXJuRmllbGRJZE1hcEFwaUtleSgpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZmllbGREYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleVZhbHVlKG9iaiwgZmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpZWxkSWRNYXBBcGlLZXkgPSBvYmo7XHJcbiAgICB9XHJcbiAgICAvLyBpbm5lciBmdW5jdGlvbiBvZiByZXR1cm5GaWVsZElkTWFwQXBpS2V5XHJcbiAgICBwcml2YXRlIHJldHVybkZpZWxkSWRNYXBBcGlLZXlWYWx1ZShvYmosIGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBUElLZXkgJiYgZmllbGQuYXBpX2tleSkge1xyXG4gICAgICAgICAgICBvYmpbZmllbGQuYXBpX2tleV0gPSBmaWVsZC51bmlxdWVfaWQ7IC8vIFRPRE86IFN1cHBvcnQgbXVsdGlwbGUgYXBpIGtleXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQucmVzcG9uc2VfYXBpX2tleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkuaW5jbHVkZXMoJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gZmllbGQudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ZpZWxkLnJlc3BvbnNlX2FwaV9rZXldID0gZmllbGQudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJhbmdlTGFiZWwgPSAocGFnZTogbnVtYmVyLCBwYWdlU2l6ZTogbnVtYmVyLCBsZW5ndGg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGxldCBwSW5mbztcclxuICAgICAgICBpZiAodGhpcy5maXJzdExvYWQpIHtcclxuICAgICAgICAgICAgcGFnZSA9IHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleCAmJiB0aGlzLnBhZ2luYXRpb25QYWdlSW5kZXgudmFsdWUgPyB0aGlzLnBhZ2luYXRpb25QYWdlSW5kZXgudmFsdWUgLSAxIDogcGFnZTtcclxuICAgICAgICAgICAgcGFnZVNpemUgPSB0aGlzLnBhZ2luYXRpb25QYWdlU2l6ZSAmJiB0aGlzLnBhZ2luYXRpb25QYWdlU2l6ZS52YWx1ZSA/IHRoaXMucGFnaW5hdGlvblBhZ2VTaXplLnZhbHVlIDogcGFnZVNpemU7XHJcbiAgICAgICAgICAgIGxlbmd0aCA9IHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnQgJiYgdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudC52YWx1ZSA/IHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnQudmFsdWUgOiBsZW5ndGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChsZW5ndGggPT09IDAgfHwgcGFnZVNpemUgPT09IDApIHtcclxuICAgICAgICAgICAgcEluZm8gPSBgMCAke3RoaXMucGFnaW5hdGlvblNlcGFyYXRvcn0gJHtsZW5ndGh9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGxlbmd0aCA9IE1hdGgubWF4KGxlbmd0aCwgMCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0SW5kZXggPSBwYWdlICogcGFnZVNpemU7XHJcbiAgICAgICAgICAgIGNvbnN0IGVuZEluZGV4ID0gc3RhcnRJbmRleCA8IGxlbmd0aCA/IE1hdGgubWluKHN0YXJ0SW5kZXggKyBwYWdlU2l6ZSwgbGVuZ3RoKSA6IHN0YXJ0SW5kZXggKyBwYWdlU2l6ZTtcclxuICAgICAgICAgICAgcEluZm8gPSBgJHtzdGFydEluZGV4ICsgMX0gLSAke2VuZEluZGV4fSAke3RoaXMucGFnaW5hdGlvblNlcGFyYXRvcn0gJHtsZW5ndGh9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFN0cmluZyh0aGlzLnBhZ2luYXRpb25TaG93aW5nUmVzdWx0SGludCkucmVwbGFjZSgnJXZhbHVlJScsIHBJbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBpc1NvcnRpbmdEaXNhYmxlZChjb2x1bW4pIHtcclxuICAgICAgICBpZiAodGhpcy5lbmFibGVTb3J0Lmxlbmd0aCA+IDAgJiYgIXRoaXMuZW5hYmxlU29ydC5pbmNsdWRlcyhjb2x1bW4pKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBEbyBub3QgZm9yZ2V0IHRvIHVuc3Vic2NyaWJlIHRoZSBldmVudFxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3Rba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmxhenlJbnRlcnZhbCkge1xyXG4gICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubGF6eUludGVydmFsKTtcclxuICAgICAgICAgICAgIHRoaXMubGF6eUludGVydmFsID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50aW1lb3V0SWRzLmZvckVhY2goaWQgPT4gY2xlYXJUaW1lb3V0KGlkKSk7XHJcblx0XHR0aGlzLnRpbWVvdXRJZHMgPSBbXTtcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YUxhenkgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMudGFibGVEYXRhTGF6eTtcclxuICAgICAgICAvLyBDbGVhciBjb21wb25lbnQgcmVmZXJlbmNlc1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50TGlzdCA9IHt9O1xyXG4gICAgICAgIHRoaXMuY29tcG9uZW50TWFwID0gbnVsbDtcclxuICAgICAgICAvLyBDbGVhciBsYXJnZSBkYXRhIHN0cnVjdHVyZXNcclxuICAgICAgICB0aGlzLmFwaURhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuYXBpRGF0YUNvcHkgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFMYXp5ID0gW107XHJcblxyXG4gICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYXIgdXRpbGl0eSBjbGFzcyByZWZlcmVuY2VzXHJcbiAgICAgICAgdGhpcy5zZXRBUElLZXlVdGlsID0gbnVsbDtcclxuICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxVdGlsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuY29tbW9uVXRpbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5hcGlLZXlVdGlsID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDbGVhciBvdGhlciBvYmplY3QgcmVmZXJlbmNlc1xyXG4gICAgICAgIHRoaXMuZmllbGRJZE1hcEFwaUtleSA9IHt9O1xyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmplY3QgPSB7fTtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzID0ge307XHJcbiAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc2ZpZWxkcyA9IHt9O1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0NoZWNrZWRWYWx1ZXMoKSB7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHZhbHVlcyBvZiB0aGUgY2hlY2tlZEl0ZW1zXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ1RhYmxlLU11bHRpLVNlbGVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpbmdsZVJlcyBvZiB0aGlzLmRpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuc3RvcmVEYXRhKS5pbmNsdWRlcyhzaW5nbGVSZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zLnB1c2goc2luZ2xlUmVzKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRJdGVtcy5wdXNoKHt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbGlzdF9jaGFuZ2UoZGF0YTogYW55LCBpc0NoZWNrZWQ6IGJvb2xlYW4pIHtcclxuICAgICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdUYWJsZS1TaW5nbGUtU2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFkaW9WYWx1ZSA9IGRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0b3JlRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlRGF0YS5zcGxpY2UodGhpcy5zdG9yZURhdGEuaW5kZXhPZihkYXRhKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zdG9yZVByaW1hcnlLZXkoKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yZVByaW1hcnlLZXkoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBhZGRpdGlvbmFsUGFyYW0gb2YgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxQYXJhbS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ1ByaW1hcnlLZXlOYW1lJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpbWFyeUtleVZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgdGhpcy5zdG9yZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5S2V5VmFsdWUucHVzaChkYXRhW3RoaXMuZ2V0VmFsdWVmb3JtS2V5KGFkZGl0aW9uYWxQYXJhbS52YWx1ZSldKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwaURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuZ2V0UHJpbWFyeUtleShhZGRpdGlvbmFsUGFyYW0udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmdldFByaW1hcnlLZXkoYWRkaXRpb25hbFBhcmFtLnZhbHVlKSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogKHRoaXMudHlwZSA9PT0gJ1RhYmxlLVNpbmdsZS1TZWxlY3QnID8gcHJpbWFyeUtleVZhbHVlWzBdIDogcHJpbWFyeUtleVZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2hhbmdlVmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRGb3JGaWVsZHNTZWN0aW9uQmxvY2soYXBpRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dElkcy5wdXNoKHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEVtaXQgb24gRGF0YSBTZXQgb3IgVXBkYXRlZFxyXG4gICAgcHJpdmF0ZSBlbWl0Rm9yRmllbGRzU2VjdGlvbkJsb2NrKGVtaXRPYmopIHtcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5lbWl0KGVtaXRPYmopOyAvLyBGb3IgRmllbGRzXHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWRGb3JTZWN0aW9uLmVtaXQoZW1pdE9iaik7IC8vIEZvciBTZWN0aW9uc1xyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yQmxvY2suZW1pdChlbWl0T2JqKTsgLy8gRm9yIEJsb2Nrc1xyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrLmVtaXQoZW1pdE9iaik7IC8vIEZvciBHZW5lcmljIEJsb2Nrc1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdHJpZ2dlciBldmVudCBpZiB0aGVyZSBoYXMgYmVlbiBhbiBldmVudCB0cmlnZ2VyZWQgb24gdGhlIHRhYmxlXHJcbiAgICAgKiBAcGFyYW0gbmFtZSB0aGUgbmFtZSBvZiB0aGUgZXZlbnRcclxuICAgICAqL1xyXG4gICAgb25Db21wb25lbnRFdmVudChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YSAmJiB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YSAmJiB0aGlzLnNlY3Rpb25EYXRhLmV2ZW50X2xpc3QgJiYgdGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnNlY3Rpb25EYXRhLmV2ZW50X2xpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiBldmVudC5pc0RlZmF1bHQgJiYgZXZlbnQuZXZlbnRfbmFtZSAmJiBldmVudC5ldmVudF9uYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIuc3dpdGNoRXZlbnREaXNwbGF5VHlwZShldmVudCwgdGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UHJpbWFyeUtleShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBrZXkuc3BsaXQoJ3wnKTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhWzBdLnRyaW0oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXRWYWx1ZWZvcm1LZXkoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGtleS5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbMV0uc3BsaXQoJ1sqXS4nKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsxXS5zcGxpdCgnWypdLicpWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFwcGx5RmlsdGVyKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpbHRlckFQSUtleSkge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5maWx0ZXJBUElLZXksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJWYWx1ZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlciA9IHRoaXMuZmlsdGVyVmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG90YWxDb3VudEFwcERhdGEodGhpcy5kYXRhU291cmNlLmZpbHRlcmVkRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xyXG4gICAgICAgIHRoaXMuc3RvcmVEYXRhID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5zdG9yZVByaW1hcnlLZXkoKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uRmlsdGVyQ2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogV2hldGhlciB0aGUgbnVtYmVyIG9mIHNlbGVjdGVkIGVsZW1lbnRzIG1hdGNoZXMgdGhlIHRvdGFsIG51bWJlciBvZiByb3dzLiAqL1xyXG4gICAgaXNBbGxTZWxlY3RlZCgpIHtcclxuICAgICAgICBjb25zdCBudW1TZWxlY3RlZCA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLmxlbmd0aDtcclxuICAgICAgICBjb25zdCBudW1Sb3dzID0gdGhpcy5kYXRhU291cmNlLmRhdGEuZmlsdGVyKGZ1bmN0aW9uIChlbCkge3JldHVybiBlbFsnaXNTZWxlY3RhYmxlJ109PXRydWV9KS5sZW5ndGg7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpc0FsbFNlbGVjdGVkOiBcIixudW1TZWxlY3RlZCxcIi1cIiwgbnVtUm93cyxcIi1cIiwgbnVtU2VsZWN0ZWQgPT09IG51bVJvd3MpXHJcbiAgICAgICAgcmV0dXJuIG51bVNlbGVjdGVkID09PSBudW1Sb3dzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBTZWxlY3RzIGFsbCByb3dzIGlmIHRoZXkgYXJlIG5vdCBhbGwgc2VsZWN0ZWQ7IG90aGVyd2lzZSBjbGVhciBzZWxlY3Rpb24uICovXHJcbiAgICBtYXN0ZXJUb2dnbGUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FsbFNlbGVjdGVkKCkgP1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpIDpcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaCgocm93KSA9PiB7aWYocm93Wydpc1NlbGVjdGFibGUnXSl7dGhpcy5zZWxlY3Rpb24uc2VsZWN0KHJvdyl9fSk7XHJcbiAgICAgICAgdGhpcy5zdG9yZURhdGEgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFsbCBzZWxlY3RlZDogXCIsIHRoaXMuc3RvcmVEYXRhKVxyXG4gICAgICAgIHRoaXMuc3RvcmVQcmltYXJ5S2V5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94IG9uIHRoZSBwYXNzZWQgcm93ICovXHJcbiAgICBjaGVja2JveExhYmVsKHJvdz8pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghcm93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0J30gYWxsYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KSA/ICdkZXNlbGVjdCcgOiAnc2VsZWN0J30gcm93ICR7cm93LnBvc2l0aW9uICsgMX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvblBhZ2luYXRpb25DaGFuZ2UoZXZlbnQ/OiBQYWdlRXZlbnQpIHtcclxuICAgICAgICAvLyB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RvcmVEYXRhID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5zdG9yZVByaW1hcnlLZXkoKTtcclxuICAgICAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoZXZlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2VJbmRleCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogTnVtYmVyKGV2ZW50W2tleV0pICsgMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwYWdlU2l6ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogZXZlbnRba2V5XVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleShvYmopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zdG9wUGFnaW5hdGlvbkV2ZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHsgZXZlbnRfbGlzdCB9ID0gdGhpcy5zZWN0aW9uRGF0YTtcclxuICAgICAgICAgICAgaWYgKGV2ZW50X2xpc3QgJiYgZXZlbnRfbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2dCBvZiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50X2xpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldnQuZXZlbnRfbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnT25QYWdpbmF0aW9uQnV0dG9uQ2xpY2snLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoZXZ0LCBldmVudF9saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdG8gdHJpZ2dlciBhbiBldmVudCBmb3IgY2xpY2tpbmcgb24gdGhlIGxpc3QgY2VsbFxyXG4gICAgICogQHBhcmFtIGRhdGEgc2luZ2xlIGNlbGwgZGF0YVxyXG4gICAgICovXHJcbiAgICBsaXN0Q2VsbENsaWNrKGRhdGEsIGlzY29udGV4dE1lbnUgPSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc2VsY3RlZFJvdyA9IGRhdGE7XHJcbiAgICAgICAgLy8gY2hlY2tpbmcgdGhlIHVuaXF1ZSBpZHMgYW5kIHN0b3JpbmcgdGhlIGRhdGFcclxuICAgICAgICB0aGlzLmRpc3BsYXllZEZpZWxkcy5mb3JFYWNoKChmaWVsZDogYW55KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhW2ZpZWxkLnVuaXF1ZV9pZF0gIT09IHVuZGVmaW5lZCAmJiBmaWVsZC5maWVsZF90eXBlICE9PSBcIk1lbnVcIikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcclxuICAgICAgICAgICAgICAgIG9iai5pZCA9IGZpZWxkLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgICAgIG9iai52YWx1ZSA9IGRhdGFbZmllbGQudW5pcXVlX2lkXSB8fCAnJztcclxuICAgICAgICAgICAgICAgIC8vIG5vdCB1c2luZyBjb25jYXRlbmF0aW9uIGJlY2F1c2UgY2hpbGQgZmllbGQgd2l0aGluIGxpc3QgZG9lcyBub3Qgc3VwcG9ydCBjb25jYXRlbmF0aW9uXHJcbiAgICAgICAgICAgICAgICBvYmoucmVzcG9uc2VBcGlLZXkgPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoZmllbGQucmVzcG9uc2VfYXBpX2tleSk7XHJcbiAgICAgICAgICAgICAgICBvYmoucmVxdWVzdEFwaUtleSA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoZmllbGQucmVxdWVzdF9hcGlfa2V5KTtcclxuICAgICAgICAgICAgICAgIG9iai5hcGlLZXkgPSBmaWVsZC5hcGlfa2V5O1xyXG4gICAgICAgICAgICAgICAgb2JqLmVkaXRhYmxlID0gZmllbGQuaXNfZWRpdGFibGUgPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnNldEFwcERhdGEoeyAuLi50aGlzLnRhYmxlQ2VsbEFwcERhdGEsIC4uLm9iaiB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8vIHNldCB1bmlxdWUgaWRlbnRpZmllciBmb3IgcmVwZWF0ZWQgdGFibGVcclxuICAgICAgICBjb25zdCByZXBlYXRlZFRhYmxlSW5kZXggPSB0aGlzLnJvd0RhdGEgPyB0aGlzLnJvd0RhdGEucmVwZWF0ZWRCbG9ja0ZpZWxkSWQgK1xyXG4gICAgICAgICd8JyArIHRoaXMucm93RGF0YS5wb3NpdGlvbiA6ICcnO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdyZXBlYXRlZFRhYmxlSW5kZXgnLCByZXBlYXRlZFRhYmxlSW5kZXgpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmltYXJ5S2V5VmFsICYmIHRoaXMudHlwZSAhPSAnVGFibGUtTXVsdGktU2VsZWN0Jykge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wcmltYXJ5S2V5VmFsLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGRhdGFbdGhpcy5wcmltYXJ5S2V5VmFsXVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoIWlzY29udGV4dE1lbnUpe1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0Q2VsbEV2ZW50Q29uZmlnKSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudC5pc0RlZmF1bHQgJiYgZXZlbnQuZXZlbnRfbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnb25jbGljaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoZXZlbnQsIHRoaXMubGlzdENlbGxFdmVudENvbmZpZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIHRoZSBjbGVhclNlc3Npb24gZW1pdFxyXG4gICAgICoqL1xyXG4gICAgb25FbXB0eVNlc3Npb24oZ2V0X2RhdGEpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSBbXTtcclxuICAgICAgICBpZiAoZ2V0X2RhdGEudW5pcXVlX2lkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS51bmlxdWVfaWRzO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFQSUtleSkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuc2VjdGlvbkRhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KSldO1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVxdWVzdF9hcGlfa2V5KV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMoZWxtKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUZpbHRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVEYXRhID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlUHJpbWFyeUtleSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wUGFnaW5hdGlvbkV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yPy5maXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VJdGVtcyAmJiB0aGlzLnBhZ2VJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5hdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplID0gdGhpcy5wYWdlSXRlbXNbMF07ICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbkFwaUtleXMubGVuZ3RoID09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnBhZ2luYXRpb25BcGlLZXlzWzJdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleShvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9wUGFnaW5hdGlvbkV2ZW50ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudGltZW91dElkcy5wdXNoKHRpbWVvdXRJZCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXR0ZXIgc2V0dGVyIGdvZXMgaGVyZVxyXG4gICAgZ2V0IGlzU2luZ2xlQVBJS2V5KCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBpc0hUTUwoY29udGVudDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIC88W2Etel1bXFxzXFxTXSo+L2kudGVzdChjb250ZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBCb290c3RyYXAgcGFnaW5hdGlvbiBtZXRob2RzXHJcbiAgICBwYWdpbmF0aW9uUHJldmlvdXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA8PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlLS07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGVyZm9ybVBhZ2luYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwYWdpbmF0aW9uTmV4dCgpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID49IHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID0gdGhpcy5wYWdpbmF0aW9uLnBhZ2VDb3VudDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5wZXJmb3JtUGFnaW5hdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEN1cnJlbnQobnVtKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZFBhZ2VOdW1iZXIobnVtKSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSBudW07XHJcbiAgICAgICAgICAgIHRoaXMucGVyZm9ybVBhZ2luYXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZFBhZ2VOdW1iZXIobnVtKSB7XHJcbiAgICAgICAgcmV0dXJuICgvXlxcZCskLy50ZXN0KG51bSkgJiYgKDAgPCBudW0gJiYgbnVtIDw9IHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQpKTtcclxuICAgIH1cclxuXHJcbiAgICBvblBhZ2luYXRpb25Db3VudENoYW5nZShmbGFnID0gMSkge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgLyB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIGlmIChmbGFnID09PSAxKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucGVyZm9ybVBhZ2luYXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQYWdpbmF0aW9uQ291bnQoKSB7XHJcbiAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgwKTtcclxuICAgIH1cclxuXHJcbiAgICBwZXJmb3JtUGFnaW5hdGlvbigpIHtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uc3RhcnRJbmRleCA9ICh0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgLSAxKSAqIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50O1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5lbmRJbmRleCA9IHRoaXMucGFnaW5hdGlvbi5zdGFydEluZGV4ICsgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQ7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmVuZEluZGV4ID0gdGhpcy5wYWdpbmF0aW9uLmVuZEluZGV4ID4gdGhpcy5wYWdpbmF0aW9uLml0ZW1Db3VudFxyXG4gICAgICAgICAgICA/IHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnRcclxuICAgICAgICAgICAgOiB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXg7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24ucGFnZUNvdW50ID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2VzID0gdGhpcy5nZW5lcmF0ZVBhZ2VzQXJyYXkoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24ucGFnZUNvdW50LFxyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnBhZ2luYXRpb25SYW5nZVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSBbMV07IC8vIFNob3cgYXQgbGVhc3QgcGFnZSAxIGlmIG9ubHkgb25lIHBhZ2VcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEFwcGx5IHBhZ2luYXRpb24gdG8gZGF0YSBzb3VyY2UgZm9yIGJvb3RzdHJhcCBwYWdpbmF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMucGFnaW5hdGlvblN0eWxlID09PSAnYm9vdHN0cmFwJyAmJiB0aGlzLnRhYmxlRGF0YUxhenkgJiYgdGhpcy50YWJsZURhdGFMYXp5Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgcGFnaW5hdGVkRGF0YSA9IHRoaXMudGFibGVEYXRhTGF6eS5zbGljZSh0aGlzLnBhZ2luYXRpb24uc3RhcnRJbmRleCwgdGhpcy5wYWdpbmF0aW9uLmVuZEluZGV4KTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEgPSBwYWdpbmF0ZWREYXRhO1xyXG4gICAgICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVQYWdlc0FycmF5KGN1cnJlbnRQYWdlLCB0b3RhbFBhZ2VzLCBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICB2YXIgcGFnZXMgPSBbXTtcclxuICAgICAgICB2YXIgaGFsZldheSA9IE1hdGguY2VpbChwYWdpbmF0aW9uUmFuZ2UgLyAyKTtcclxuICAgICAgICB2YXIgcG9zaXRpb247XHJcblxyXG4gICAgICAgIGlmIChjdXJyZW50UGFnZSA8PSBoYWxmV2F5KSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ3N0YXJ0JztcclxuICAgICAgICB9IGVsc2UgaWYgKHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAnZW5kJztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdtaWRkbGUnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIGVsbGlwc2VzTmVlZGVkID0gcGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcztcclxuICAgICAgICB2YXIgaSA9IDE7XHJcbiAgICAgICAgd2hpbGUgKGkgPD0gdG90YWxQYWdlcyAmJiBpIDw9IHBhZ2luYXRpb25SYW5nZSkge1xyXG4gICAgICAgICAgICB2YXIgcGFnZU51bWJlciA9IHRoaXMuY2FsY3VsYXRlUGFnZU51bWJlcihpLCBjdXJyZW50UGFnZSwgcGFnaW5hdGlvblJhbmdlLCB0b3RhbFBhZ2VzKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvcGVuaW5nRWxsaXBzZXNOZWVkZWQgPSAoaSA9PT0gMiAmJiAocG9zaXRpb24gPT09ICdtaWRkbGUnIHx8IHBvc2l0aW9uID09PSAnZW5kJykpO1xyXG4gICAgICAgICAgICB2YXIgY2xvc2luZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IHBhZ2luYXRpb25SYW5nZSAtIDEgJiYgKHBvc2l0aW9uID09PSAnbWlkZGxlJyB8fCBwb3NpdGlvbiA9PT0gJ3N0YXJ0JykpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsbGlwc2VzTmVlZGVkICYmIChvcGVuaW5nRWxsaXBzZXNOZWVkZWQgfHwgY2xvc2luZ0VsbGlwc2VzTmVlZGVkKSkge1xyXG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCgnLi4uJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHBhZ2VOdW1iZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGN1bGF0ZVBhZ2VOdW1iZXIoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG5cclxuICAgICAgICBpZiAoaSA9PT0gcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9IGVsc2UgaWYgKHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRvdGFsUGFnZXMgLSBoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b3RhbFBhZ2VzIC0gcGFnaW5hdGlvblJhbmdlICsgaTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChoYWxmV2F5IDwgY3VycmVudFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjdXJyZW50UGFnZSAtIGhhbGZXYXkgKyBpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmlzaWJsZSAmJiBmaWVsZERhdGEubGVuZ3RoID4gMFwiIChzY3JvbGwpPVwib25TY3JvbGwoJGV2ZW50KVwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkICpuZ0lmPVwic2hvd0ZpbHRlclwiIGZsb2F0TGFiZWw9XCJuZXZlclwiPlxyXG4gICAgICAgIDxpbnB1dCBtYXRJbnB1dCAoa2V5dXApPVwiYXBwbHlGaWx0ZXIoKVwiIHBsYWNlaG9sZGVyPVwie3tmaWx0ZXJQbGFjZWhvbGRlclRleHR9fVwiIFsobmdNb2RlbCldPVwiZmlsdGVyVmFsdWVcIj5cclxuICAgIDwvbWF0LWZvcm0tZmllbGQ+XHJcbiAgICA8IS0tICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUYWJsZSBGb3IgU2tlbGV0b24gTG9hZGVyICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAtLT5cclxuICAgIDx0YWJsZSBhcmlhLWRlc2NyaWJlZGJ5PVwiU2tlbGV0b24gTG9hZGVyXCIgKm5nSWY9XCJzaG93U2tlbGV0b25Mb2FkZXIgJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dTa2VsZXRvbkxvYWRlciddPy50b0xvd2VyQ2FzZSgpID09ICd0cnVlJ1wiIG1hdC10YWJsZVxyXG4gICAgICAgIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VMb2FkaW5nXCJcclxuICAgICAgICBjbGFzcz1cInt7c2VjdGlvbkRhdGEuZmllbGRfc3R5bGU/c2VjdGlvbkRhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwie3tmfX1cIiAqbmdGb3I9XCJsZXQgZiBvZiBkaXNwbGF5ZWRDb2x1bW5zOyBsZXQgaSA9IGluZGV4XCI+XHJcbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgc2NvcGU9XCJjb2xcIj4ge3tmaWVsZERhdGFbaV0gJiYgZmllbGREYXRhW2ldLmZpZWxkX2xhYmVsfX0gPC90aD5cclxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsIGNsYXNzPVwibG9hZGluZ1wiICptYXRDZWxsRGVmPVwibGV0IGVsZW1lbnRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJiYXJcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCI+PC90cj5cclxuICAgICAgICA8dHIgbWF0LXJvdyBjbGFzcz1cImNlZS10YWJsZS1yb3dcIiAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIj48L3RyPlxyXG4gICAgPC90YWJsZT5cclxuICAgIDwhLS0gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIERhdGEgVGFibGUgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIC0tPlxyXG4gICAgPHRhYmxlIGFyaWEtZGVzY3JpYmVkYnk9XCJEYXRhIFRhYmxlXCIgKm5nSWY9XCIoKCFzaG93U2tlbGV0b25Mb2FkZXIgJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dTa2VsZXRvbkxvYWRlciddPy50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykgfHwgIWFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93U2tlbGV0b25Mb2FkZXInXSB8fCBhZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd1NrZWxldG9uTG9hZGVyJ10/LnRvTG93ZXJDYXNlKCkgIT0gJ3RydWUnKVwiIG1hdC10YWJsZSAjdGFibGUgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZVwiIG1hdFNvcnQgbXVsdGlUZW1wbGF0ZURhdGFSb3dzXHJcbiAgICAgICAgY2xhc3M9XCJ7e2lzQ3VzdG9tQ2xhc3MgJiYgc2VjdGlvbkRhdGEuZmllbGRfc3R5bGU/c2VjdGlvbkRhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiIFtuZ0NsYXNzXT1cInsnZXhwYW5kVGFibGUnOiB0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aH1cIlxyXG4gICAgICAgIGlkPVwidGFibGVfe3tzZWN0aW9uRGF0YS51bmlxdWVfaWR9fVwiICh3aW5kb3c6cmVzaXplKT1cIm9uUmVzaXplKClcIiAobWF0U29ydENoYW5nZSk9XCJ0aGlzLm9uUmVzaXplKCk7IG1hdFNvcnRDaGFuZ2UoJGV2ZW50KVwiPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiU2VsZWN0XCI+XHJcbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgc2NvcGU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09ICdUYWJsZS1NdWx0aS1TZWxlY3QnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBpZD1cImNoZWNrX3N0YXRpY1wiIGNsYXNzPVwidGFibGUtY2hlY2tib3hcIiAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtjaGVja2VkXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmIGlzQWxsU2VsZWN0ZWQoKVwiICBbZGlzYWJsZWRdPVwiaXNTZWxldGFibGU9PScwJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtpbmRldGVybWluYXRlXT1cInNlbGVjdGlvbi5oYXNWYWx1ZSgpICYmICFpc0FsbFNlbGVjdGVkKClcIiBbYXJpYS1sYWJlbF09XCJjaGVja2JveExhYmVsKClcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZGF0YTsgZGF0YUluZGV4IGFzIHBvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnVGFibGUtU2luZ2xlLVNlbGVjdCcgJiYgZGF0YS5pc1NlbGVjdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWJ1dHRvbiBpZD1cInJhZGlvX3t7cG9zaXRpb259fVwiIGNsYXNzPVwidGFibGUtcmFkaW9cIiBbdmFsdWVdPVwiZGF0YVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImxpc3RfY2hhbmdlKGRhdGEsIHRydWUpXCIgW2NoZWNrZWRdPVwiZGF0YSA9PSByYWRpb1ZhbHVlXCIgW2Rpc2FibGVkXT1cImlzU2VsZXRhYmxlPT0nMCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInU2VsZWN0ICcrcG9zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSAnVGFibGUtTXVsdGktU2VsZWN0JyAmJiBkYXRhLmlzU2VsZWN0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggbmFtZT1cImNoZWNrX3t7cG9zaXRpb259fVwiIGlkPVwiY2hlY2tfe3twb3NpdGlvbn19XCIgY2xhc3M9XCJ0YWJsZS1jaGVja2JveFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwibGlzdF9jaGFuZ2UoZGF0YSwgJGV2ZW50LmNoZWNrZWQpOyAkZXZlbnQgPyBzZWxlY3Rpb24udG9nZ2xlKGRhdGEpIDogbnVsbFwiIFtkaXNhYmxlZF09XCJpc1NlbGV0YWJsZT09JzAnXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwic2VsZWN0aW9uLmlzU2VsZWN0ZWQoZGF0YSlcIiBbYXJpYS1sYWJlbF09XCJjaGVja2JveExhYmVsKGRhdGEpXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImYudW5pcXVlX2lkXCIgKm5nRm9yPVwibGV0IGYgb2YgZmllbGREYXRhOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5dW5pcXVlX2lkO1wiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidGhpcy5keW5hbWljQ29sdW1uV2lkdGhcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgIFtyZXNpemVDb2x1bW5dPVwiZi5yZXNpemFibGVcIiBbaW5kZXhdPVwiaSArIGV4dHJhVGFibGVDZWxsXCIgc2NvcGU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJmLnNvcnRpbmcgPT0gdHJ1ZSA/ICdjZS1sYWJlbCBjYXNlJyA6ICdjZS1sYWJlbCdcIiBzb3J0YWJsZT17e2YudW5pcXVlX2lkfX0gc29ydGluZz17e2Yuc29ydGluZ319IChzb3J0KT1cIm9uU29ydCgkZXZlbnQpXCI+e3tmLmZpZWxkX2xhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzSFRNTChmLmZpZWxkX2xhYmVsKSA9PSBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyIFthdHRyLmRpc2FibGVkXT1cImlzU29ydGluZ0Rpc2FibGVkKGYudW5pcXVlX2lkKVwiIHNjb3BlPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHt7IGYuZmllbGRfbGFiZWwgfX1cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNIVE1MKGYuZmllbGRfbGFiZWwpID09IHRydWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlciBbYXR0ci5kaXNhYmxlZF09XCJpc1NvcnRpbmdEaXNhYmxlZChmLnVuaXF1ZV9pZClcIiBzY29wZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbaW5uZXJIVE1MXT1cImYuZmllbGRfbGFiZWxcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGRhdGE7IGRhdGFJbmRleCBhcyBwb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwiKHRoaXMucmVzcG9uc2l2ZSAmJiBpID09PSAwICYmIGV4cGFuZGVkRWxlbWVudCA9PT0gZGF0YSk/ZXhwYW5kZWRFbGVtZW50ID0gbnVsbDonJ1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZjpmLHBvc2l0aW9uOnBvc2l0aW9uLGRhdGE6ZGF0YSwgbWV0aG9kOiBsaXN0Q2VsbENsaWNrfVwiPlxyXG4gICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJleHBhbmRhYmxlT3B0aW9uXCI+XHJcbiAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgc2NvcGU9XCJjb2xcIj48c3BhbiBzdHlsZT1cInZpc2liaWxpdHk6IGhpZGRlbjtcIj5FeHBhbmRhYmxlIE9wdGlvbjwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZGF0YTsgZGF0YUluZGV4IGFzIHBvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJjZWUtdGFibGUtZXhwYW5kYWJsZS1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGRhdGEgPyBudWxsIDogZGF0YTsgc2V0UHJpbWFyeUtleSh7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF19KVwiPnt7ZXhwYW5kZWRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgPT09IGRhdGEgPyBjb2xsYXBzZVRpdGxlIDogZXhwYW5kVGl0bGV9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV4cGFuZGVkUmVzcFwiPlxyXG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZGF0YTsgZGF0YUluZGV4IGFzIHBvc2l0aW9uXCIgW2F0dHIuY29sc3Bhbl09XCJkaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlc3BvbnNpdmVcIiBjbGFzcz1cImNlZS10YWJsZS1yZXNwIHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmIG9mIGZpZWxkRGF0YTsgbGV0IGkgPSBpbmRleDsgdHJhY2tCeTogdHJhY2tCeXVuaXF1ZV9pZDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cIiFoaWRlblJvd3MuaW5jbHVkZXMoZi51bmlxdWVfaWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VlLXRhYmxlLWRldGFpbC1jZWxsIHt7Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmKSl9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZjpmLHBvc2l0aW9uOnBvc2l0aW9uLGRhdGE6ZGF0YSxleHBhbmRlZERldGFpbDp0cnVlLCBtZXRob2Q6IGxpc3RDZWxsQ2xpY2t9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy50eXBlID09PSAnVGFibGUtRXhwYW5kYWJsZSdcIiBjbGFzcz1cImNlZS10YWJsZS1kZXRhaWwtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJjZWUtdGFibGUtZXhwYW5kYWJsZS1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImV4cGFuZGVkRWxlbWVudCA9IGV4cGFuZGVkRWxlbWVudCA9PT0gZGF0YSA/IG51bGwgOiBkYXRhOyBzZXRQcmltYXJ5S2V5KHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXX0pXCI+e3tleHBhbmRlZEVsZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID09PSBkYXRhID8gY29sbGFwc2VUaXRsZSA6IGV4cGFuZFRpdGxlfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV4cGFuZGVkRGV0YWlsXCI+XHJcbiAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhOyBkYXRhSW5kZXggYXMgcG9zaXRpb25cIiBbYXR0ci5jb2xzcGFuXT1cImRpc3BsYXllZENvbHVtbnMubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VlLXRhYmxlLWRldGFpbCB7e2lzX2Jvb3RzdHJhcCAmJiAhdGFibGVIaWRkZW5HZW5lcmljPydyb3cnOicnfX0ge3tkYXRhICE9PSBleHBhbmRlZEVsZW1lbnQ/J2NvbGxhcHNlZCc6Jyd9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW0BkZXRhaWxFeHBhbmRdPVwiZGF0YSA9PT0gZXhwYW5kZWRFbGVtZW50ID8gJ2V4cGFuZGVkJyA6ICdjb2xsYXBzZWQnXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMHB4OyBtaW4taGVpZ2h0OiAwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWVsZERhdGE7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnl1bmlxdWVfaWQ7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoaWRlblJvd3MuaW5jbHVkZXMoZi51bmlxdWVfaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtdGFibGUtZGV0YWlsLWNlbGwge3tjb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGYuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGYpKX19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2Y6Zixwb3NpdGlvbjpwb3NpdGlvbixkYXRhOmRhdGEsZXhwYW5kZWREZXRhaWw6dHJ1ZSwgbWV0aG9kOiBsaXN0Q2VsbENsaWNrfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRhYmxlSGlkZGVuR2VuZXJpYyAmJiBoaWRlblJvd3MubGVuZ3RoID09PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtYmxvY2stcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbdGVtcGxhdGVJZF09XCJwb3NpdGlvblwiIFtibG9ja0lkXT1cImhpZGVuUm93c1swXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhpZGRlbi1jb250ZW50XCIgW2Jsb2NrUG9zaXRpb25dPVwicG9zaXRpb25cIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtYmxvY2stcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCIgY2xhc3M9XCJjZWUtdGFibGUtaGVhZGVyXCI+PC90cj5cclxuICAgICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIlxyXG4gICAgICAgICAgICBjbGFzcz1cImNlZS10YWJsZS1yb3cge3tzZWxjdGVkUm93ID09PSByb3c/J2NlZS1zZWxlY3RlZC1yb3cnOicnfX0ge3tleHBhbmRlZEVsZW1lbnQgPT09IHJvdz8nY2VlLWV4cGFuZGVkLXJvdyc6Jyd9fSB7e3JvdyAmJiByb3cucm93RGF0YSAmJiByb3cucm93RGF0YS5jb25kaXRpb25hbEN1c3RvbUNsYXNzID8gcm93LnJvd0RhdGEuY29uZGl0aW9uYWxDdXN0b21DbGFzcyA6ICcnfX0ge3t0eXBlID09ICdUYWJsZS1NdWx0aS1TZWxlY3QnID8gKHN0b3JlRGF0YS5pbmNsdWRlcyhyb3cpPyAndGFibGUtaXRlbS1jaGVja2VkJyA6ICd0YWJsZS1pdGVtLXVuY2hlY2tlZCcpIDogJyd9fVwiXHJcbiAgICAgICAgICAgIChjbGljayk9XCJsaXN0Q2VsbENsaWNrKHJvdylcIiAoY29udGV4dG1lbnUpPVwibGlzdENlbGxDbGljayhyb3csIHRydWUpXCI+PC90cj5cclxuICAgICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogWydleHBhbmRlZFJlc3AnXVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY2VlLXJlc3Atcm93IHt7cm93ICYmIHJvdy5yb3dEYXRhICYmIHJvdy5yb3dEYXRhLmNvbmRpdGlvbmFsQ3VzdG9tQ2xhc3MgPyByb3cucm93RGF0YS5jb25kaXRpb25hbEN1c3RvbUNsYXNzIDogJyd9fVwiPjwvdHI+XHJcbiAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IFsnZXhwYW5kZWREZXRhaWwnXVwiXHJcbiAgICAgICAgICAgIGNsYXNzPVwiY2VlLWRldGFpbC1yb3cge3tyb3cgJiYgcm93LnJvd0RhdGEgJiYgcm93LnJvd0RhdGEuY29uZGl0aW9uYWxDdXN0b21DbGFzcyA/IHJvdy5yb3dEYXRhLmNvbmRpdGlvbmFsQ3VzdG9tQ2xhc3MgOiAnJ319XCI+PC90cj5cclxuICAgIDwvdGFibGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwibm8tZGF0YS1pbmZvXCIgKm5nSWY9XCJsb2FkZWQgJiYgZGF0YVNvdXJjZS5maWx0ZXJlZERhdGEubGVuZ3RoID09PSAwXCI+e3tub0RhdGFGb3VuZExhYmVsfX08L2Rpdj5cclxuXHJcblxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFub0RhdGFGb3VuZCAmJiBzaG93UGFnaW5hdGlvblwiPlxyXG4gICAgICAgIDwhLS0gQm9vdHN0cmFwIFBhZ2luYXRpb24gLS0+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cInBhZ2luYXRpb25TdHlsZSAhPT0gJ21hdGVyaWFsJyAmJiBhdXRvUGFnaW5hdGlvblwiIGNsYXNzPVwicGFnaW5hdGlvbi1jb250YWluZXJcIj4gICAgICAgICAgIFxyXG4gICAgXHJcbiAgICAgICAgICAgIDwhLS0gUGFnZSBudW1iZXJzIC0tPlxyXG4gICAgICAgICAgICA8YnV0dG9uICpuZ0Zvcj1cImxldCBwYWdlTnVtYmVyIG9mIHBhZ2VzXCIgdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCJwYWdlTnVtYmVyID09PSAnLi4uJ1wiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwic2V0Q3VycmVudChwYWdlTnVtYmVyKVwiIGNsYXNzPVwicGFnaW5hdGlvbi1idG4tcGFnZVwiXHJcbiAgICAgICAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cInBhZ2VOdW1iZXIgPT09IHBhZ2luYXRpb24uY3VycmVudFBhZ2VcIiBhdHRyLmFyaWEtbGFiZWw9XCJTZWxlY3QgcGFnZSB7e3BhZ2VOdW1iZXJ9fVwiPlxyXG4gICAgICAgICAgICAgICAge3twYWdlTnVtYmVyfX1cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICBcclxuICAgICAgICA8IS0tIE1hdGVyaWFsIFBhZ2luYXRpb24tLT5cclxuICAgICAgICA8bWF0LXBhZ2luYXRvciAqbmdJZj1cInNob3dQYWdpbmF0aW9uICYmIHBhZ2luYXRpb25TdHlsZSA9PT0gJ21hdGVyaWFsJ1wiIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnZUl0ZW1zXCIgKHBhZ2UpPVwib25QYWdpbmF0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgICAgICBzaG93Rmlyc3RMYXN0QnV0dG9ucz5cclxuICAgICAgICA8L21hdC1wYWdpbmF0b3I+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIFxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG48bmctdGVtcGxhdGUgI2NlbGxEYXRhIGxldC1mPSdmJyBsZXQtcG9zaXRpb249J3Bvc2l0aW9uJyBsZXQtZGF0YT0nZGF0YScgbGV0LWV4cGFuZGVkRGV0YWlsPSdleHBhbmRlZERldGFpbCdcclxuICAgIGxldC1tZXRob2Q9J21ldGhvZCc+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmLmZpZWxkX3R5cGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImV4cGFuZGVkRGV0YWlsICYmIGYuZmllbGRfbGFiZWxcIiBjbGFzcz1cImNlZS10YWJsZS1kZXRhaWwtbGFiZWxcIj57e2YuZmllbGRfbGFiZWx9fTxzcGFuPjogPC9zcGFuPjwvbGFiZWw+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YSAmJiBkYXRhWydyb3dEYXRhJ10gJiYgZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSA/IGRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF0gOiB7fSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtbGFiZWwgW2ZpZWxkRGF0YV09XCJmXCIgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXVwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICd0YWJsZScsIGNlbGxEYXRhOiB7ICdkYXRhJzogZGF0YSwgJ2ZpZWxkcyc6IGRpc3BsYXllZEZpZWxkc319XCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWNlZS1sYWJlbD4gLS0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidTd2l0Y2gnXCI+XHJcbiAgICAgICAgICAgIDxhcHAtY2VlLXN3aXRjaCBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZERhdGFdPVwiZlwiIFtyb290RGF0YV09XCJyb290RGF0YVwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddXCIgW2tlZXBTdGF0ZV09XCJ0cnVlXCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWNlZS1zd2l0Y2g+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidCdXR0b24nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtYnV0dG9uIFtmaWVsZERhdGFdPVwiZlwiIFtyb3dEYXRhXT1cImRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF1cIiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgIFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAndGFibGUnLCBjZWxsRGF0YTogeyAnZGF0YSc6IGRhdGEsICdmaWVsZHMnOiBkaXNwbGF5ZWRGaWVsZHN9fVwiPlxyXG4gICAgICAgICAgICA8L2FwcC1jZWUtYnV0dG9uPiAtLT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0ltYWdlJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZiwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICd0YWJsZScsIGNlbGxEYXRhOiB7ZGF0YSwgZmllbGRzOiBkaXNwbGF5ZWRGaWVsZHN9fSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIDxhcHAtY2VlLWltYWdlIFtyb3dEYXRhXT1cImRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF1cIiBbZmllbGREYXRhXT1cImZcIiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgIFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAndGFibGUnLCBjZWxsRGF0YTogeyAnZGF0YSc6IGRhdGEsICdmaWVsZHMnOiBkaXNwbGF5ZWRGaWVsZHN9fVwiPlxyXG4gICAgICAgICAgICA8L2FwcC1jZWUtaW1hZ2U+IC0tPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVG9nZ2xlQnV0dG9uJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZiwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICd0YWJsZScsIGNlbGxEYXRhOiB7ZGF0YSwgZmllbGRzOiBkaXNwbGF5ZWRGaWVsZHN9fSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIDxhcHAtY2VlLXRvZ2dsZS1idXR0b24gW2ZpZWxkRGF0YV09XCJmXCIgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXVwiIFtzZWN0aW9uRGF0YV09XCJzZWN0aW9uRGF0YVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgIFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAndGFibGUnLCBjZWxsRGF0YTogeyAnZGF0YSc6IGRhdGEsICdmaWVsZHMnOiBkaXNwbGF5ZWRGaWVsZHN9fVwiPlxyXG4gICAgICAgICAgICA8L2FwcC1jZWUtdG9nZ2xlLWJ1dHRvbj4gLS0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidQaWNrZXInXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtcGlja2VyIFtzdGVwSWRdPVwic3RlcElkXCIgW2ZpZWxkRGF0YV09XCJmXCIgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiXHJcbiAgICAgICAgICAgICAgICBbcm93RGF0YV09XCJkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdXCJcclxuICAgICAgICAgICAgICAgIFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAndGFibGUnLCBjZWxsRGF0YTogeyAnZGF0YSc6IGRhdGEsICdmaWVsZHMnOiBkaXNwbGF5ZWRGaWVsZHN9fVwiPlxyXG4gICAgICAgICAgICA8L2FwcC1jZWUtcGlja2VyPiAtLT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ01lbnUnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtbWVudSBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZERhdGFdPVwiZlwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXVwiXHJcbiAgICAgICAgICAgICAgICBbcHJpbWFyeUtleUluZGV4XT1cIntuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHsgJ2RhdGEnOiBkYXRhLCAnZmllbGRzJzogZGlzcGxheWVkRmllbGRzfX1cIj5cclxuICAgICAgICAgICAgPC9hcHAtY2VlLW1lbnU+IC0tPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVGFibGUnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1jZWUtdGFibGUgW3NlY3Rpb25EYXRhXT1cImZcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbcm93RGF0YV09XCJkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkXT1cInN0ZXBJZFwiIFt0eXBlXT1cImYuZmllbGRfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9hcHAtY2VlLXRhYmxlPlxyXG5cdFx0XHQ8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiZi5maWVsZF90eXBlID09PSAnTGlzdCcgfHwgZi5maWVsZF90eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyA/IGYuZmllbGRfdHlwZSA6ICcnIFwiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFsnTGlzdCddIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF0sIHNlY3Rpb25EYXRhOiBmLCB0eXBlOiBmLmZpZWxkX3R5cGV9XCI+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIDxhcHAtbGlzdC1yZW5kZXJlciBbc2VjdGlvbkRhdGFdPVwiZlwiIFtyb290RGF0YV09XCJyb290RGF0YVwiIFtyb3dEYXRhXT1cImRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF1cIiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgIFtzdGVwSWRdPVwic3RlcElkXCIgW3R5cGVdPVwiZi5maWVsZF90eXBlXCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWxpc3QtcmVuZGVyZXI+IC0tPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVHJlZVZpZXcnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSwgc2VjdGlvbkRhdGE6IGYsIHR5cGU6IGYuZmllbGRfdHlwZX1cIj48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC10cmVlLXJlbmRlcmVyIFtzZWN0aW9uRGF0YV09XCJmXCIgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXVwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3N0ZXBJZF09XCJzdGVwSWRcIiBbdHlwZV09XCJmLmZpZWxkX3R5cGVcIj5cclxuICAgICAgICAgICAgPC9hcHAtdHJlZS1yZW5kZXJlcj4gLS0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidEeW5hbWljRm9ybSdcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZi5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdLCBzZWN0aW9uRGF0YTogZn1cIj48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1keW5hbWljLWZvcm0gW3NlY3Rpb25EYXRhXT1cImZcIiBbcm93RGF0YV09XCJkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdXCIgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWR5bmFtaWMtZm9ybT4gLS0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj0nZXhwYW5kZWREZXRhaWwnIGNsYXNzPVwiIGNlZS10YWJsZS1kZXRhaWwtbGFiZWxcIj57e2YuZmllbGRfbGFiZWx9fTxzcGFuPjogPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICB7e2RhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF0udmFsdWV9fVxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPlxyXG4iXX0=