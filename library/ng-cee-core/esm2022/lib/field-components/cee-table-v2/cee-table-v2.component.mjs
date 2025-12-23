import { Component, ChangeDetectionStrategy, Input, ViewChild, HostListener, ViewChildren, forwardRef } from '@angular/core';
import { Constant } from '../../models/constant.model';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SelectionModel } from '@angular/cdk/collections';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import jQuery from 'jquery';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { SortableHeaderDirective } from './cee-table-v2-sorting.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
// import { CeeButtonComponent } from '../../field-components/cee-button/cee-button.component';
// import { CeeLabelComponent } from '../../field-components/cee-label/cee-label.component';
import { CommonModule, NgClass, NgSwitch } from '@angular/common';
// import { CeeImageComponent } from '../../field-components/cee-image/cee-image.component';
// import { CeeToggleButtonComponent } from '../../field-components/cee-toggle-button/cee-toggle-button.component';
// import { CeePickerComponent } from '../../field-components/cee-picker/cee-picker.component';
// import { CeeMenuComponent } from '../../field-components/cee-menu/cee-menu.component';
import { BlockRendererComponent, StepRendererComponent } from '../../ng-cee-core.module';
// import { DynamicFormComponent } from '../../components/dynamic-form/dynamic-form.component';
import { ResizeColumnDirective } from './cee-table-v2-resize-column.directive';
import { MatInputModule } from '@angular/material/input';
// import { TreeRendererComponent } from '../../components/tree-renderer/tree-renderer.component';
// import { ListRendererComponentV2 } from '../../components/list-renderer-v2/list-renderer-v2.component';
// import { ListRendererComponent } from '../../components/list-renderer/list-renderer.component';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import * as moment from 'moment';
import { defer } from 'rxjs';
import { CdkDrag, CdkDropList, DragDropModule, moveItemInArray, } from '@angular/cdk/drag-drop';
import clonedeep from 'lodash.clonedeep';
import { CdkScrollableModule } from '@angular/cdk/scrolling';
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
import * as i13 from "@angular/cdk/scrolling";
import * as i14 from "@angular/cdk/drag-drop";
import * as i15 from "@angular/material/form-field";
import * as i16 from "@angular/material/input";
import * as i17 from "@angular/material/icon";
import * as i18 from "@angular/material/datepicker";
import * as i19 from "@angular/common";
import * as i20 from "@angular/material/checkbox";
import * as i21 from "@angular/forms";
import * as i22 from "@angular/material/radio";
import * as i23 from "@angular/material/paginator";
import * as i24 from "@angular/material/table";
const _c0 = a0 => ({ "d-none": a0 });
const _c1 = a0 => ({ "expandTable": a0 });
const _c2 = () => ["expandedResp"];
const _c3 = () => ["expandedDetail"];
const _c4 = () => ["expandedStep"];
const _c5 = (a0, a1, a2, a3) => ({ f: a0, position: a1, data: a2, method: a3 });
const _c6 = (a0, a1, a2, a3) => ({ f: a0, position: a1, data: a2, expandedDetail: true, method: a3 });
const _c7 = (a0, a1) => ({ data: a0, fields: a1 });
const _c8 = (a0, a1, a2) => ({ name: a0, value: a1, type: "table", cellData: a2 });
const _c9 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c10 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, keepState: true, fieldData: a3, primaryKeyIndex: a4 });
const _c11 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, type: a4 });
const _c12 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3 });
function CeeTableV2Component_ng_container_0_mat_form_field_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-form-field", 19)(1, "input", 20);
    i0.ɵɵlistener("keyup", function CeeTableV2Component_ng_container_0_mat_form_field_1_Template_input_keyup_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTableV2Component_ng_container_0_mat_form_field_1_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterValue, $event) || (ctx_r1.filterValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterValue);
} }
function CeeTableV2Component_ng_container_0_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.toggleFilterBox()); });
    i0.ɵɵelement(1, "mat-icon", 22);
    i0.ɵɵelementEnd();
} }
function CeeTableV2Component_ng_container_0_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "mat-checkbox", 28);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTableV2Component_ng_container_0_div_3_div_5_Template_mat_checkbox_ngModelChange_1_listener($event) { const subtask_r7 = i0.ɵɵrestoreView(_r6).$implicit; i0.ɵɵtwoWayBindingSet(subtask_r7.completed, $event) || (subtask_r7.completed = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("ngModelChange", function CeeTableV2Component_ng_container_0_div_3_div_5_Template_mat_checkbox_ngModelChange_1_listener() { i0.ɵɵrestoreView(_r6); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.updateAllComplete()); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const subtask_r7 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", subtask_r7.completed);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", subtask_r7.name, " ");
} }
function CeeTableV2Component_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 23)(1, "span", 24)(2, "mat-checkbox", 25);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_div_3_Template_mat_checkbox_change_2_listener($event) { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.setAll($event.checked)); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "span", 26);
    i0.ɵɵtemplate(5, CeeTableV2Component_ng_container_0_div_3_div_5_Template, 3, 2, "div", 27);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("checked", ctx_r1.allComplete)("indeterminate", ctx_r1.someComplete());
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.task.name, " ");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.task.subtasks);
} }
function CeeTableV2Component_ng_container_0_table_4_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r8 = i0.ɵɵnextContext().index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.fieldData[i_r8] && ctx_r1.fieldData[i_r8].field_label, " ");
} }
function CeeTableV2Component_ng_container_0_table_4_ng_container_1_td_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 37);
    i0.ɵɵelement(1, "div", 38);
    i0.ɵɵelementEnd();
} }
function CeeTableV2Component_ng_container_0_table_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 33);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_4_ng_container_1_th_1_Template, 2, 1, "th", 34)(2, CeeTableV2Component_ng_container_0_table_4_ng_container_1_td_2_Template, 2, 0, "td", 35);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r9 = ctx.$implicit;
    i0.ɵɵpropertyInterpolate("matColumnDef", f_r9);
} }
function CeeTableV2Component_ng_container_0_table_4_tr_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 39);
} }
function CeeTableV2Component_ng_container_0_table_4_tr_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 40);
} }
function CeeTableV2Component_ng_container_0_table_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "table", 29);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_4_ng_container_1_Template, 3, 1, "ng-container", 30)(2, CeeTableV2Component_ng_container_0_table_4_tr_2_Template, 1, 0, "tr", 31)(3, CeeTableV2Component_ng_container_0_table_4_tr_3_Template, 1, 0, "tr", 32);
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
function CeeTableV2Component_ng_container_0_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 41);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_button_6_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r10); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.showHideFilter("show-hide-container-", ctx_r1.sectionData.unique_id)); });
    i0.ɵɵtext(1, "\u2630");
    i0.ɵɵelementEnd();
} }
function CeeTableV2Component_ng_container_0_div_7_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r1.sectionData.field_label, " Setting");
} }
function CeeTableV2Component_ng_container_0_div_7_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 53)(1, "mat-checkbox", 54);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTableV2Component_ng_container_0_div_7_div_4_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r12); const i_r13 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.columnShowHideRearrange[i_r13].showColumn, $event) || (ctx_r1.columnShowHideRearrange[i_r13].showColumn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r13 = i0.ɵɵnextContext();
    const f_r15 = ctx_r13.$implicit;
    const i_r13 = ctx_r13.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.columnShowHideRearrange[i_r13].showColumn);
    i0.ɵɵproperty("disabled", ctx_r1.columnShowHideRearrange[i_r13].isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r15.field_label);
} }
function CeeTableV2Component_ng_container_0_div_7_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 55)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r15 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r15.field_label);
} }
function CeeTableV2Component_ng_container_0_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 50);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_div_7_div_4_div_1_Template, 3, 3, "div", 51)(2, CeeTableV2Component_ng_container_0_div_7_div_4_div_2_Template, 3, 1, "div", 52);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r13 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, !ctx_r1.columnShowHideRearrange[i_r13].isVisible));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("showhide") != -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("showhide") == -1);
} }
function CeeTableV2Component_ng_container_0_div_7_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 56);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.filterErrorMsg);
} }
function CeeTableV2Component_ng_container_0_div_7_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 42)(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_div_7_label_2_Template, 2, 1, "label", 43);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 44);
    i0.ɵɵlistener("cdkDropListDropped", function CeeTableV2Component_ng_container_0_div_7_Template_div_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.drop($event)); });
    i0.ɵɵtemplate(4, CeeTableV2Component_ng_container_0_div_7_div_4_Template, 3, 5, "div", 45);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, CeeTableV2Component_ng_container_0_div_7_label_6_Template, 2, 1, "label", 46);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 47);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_div_7_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.resetRestructuring()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 48);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_div_7_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r11); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyRestructuring()); });
    i0.ɵɵtext(10, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("id", "show-hide-container-", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.sectionData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.columnShowHideRearrange);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.filterErrorMsg);
} }
function CeeTableV2Component_ng_container_0_table_10_th_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 72);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_10_th_3_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r17); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView($event ? ctx_r1.masterToggle() : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("disabled", ctx_r1.isSeletable == "0")("indeterminate", ctx_r1.isIndeterminateSelected() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function CeeTableV2Component_ng_container_0_table_10_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_th_3_ng_container_1_Template, 2, 4, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tms);
} }
function CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-group", 74)(2, "mat-radio-button", 75);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_1_Template_mat_radio_button_change_2_listener() { i0.ɵɵrestoreView(_r18); const data_r19 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r19, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext();
    const data_r19 = ctx_r19.$implicit;
    const position_r21 = ctx_r19.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "radio_", position_r21, "");
    i0.ɵɵproperty("value", data_r19)("checked", data_r19 == ctx_r1.radioValue)("disabled", !data_r19.isSelectable);
    i0.ɵɵattribute("aria-label", "Select " + position_r21);
} }
function CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 76);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r22); const data_r19 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r19, $event.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r19 = i0.ɵɵnextContext();
    const data_r19 = ctx_r19.$implicit;
    const position_r21 = ctx_r19.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "check_", position_r21, "");
    i0.ɵɵpropertyInterpolate1("id", "check_", position_r21, "");
    i0.ɵɵproperty("disabled", !data_r19.isSelectable)("checked", ctx_r1.primaryKeyValue ? ctx_r1.selection.isSelected(data_r19[ctx_r1.primaryKeyValue]) : false);
    i0.ɵɵattribute("aria-label", ctx_r1.checkboxLabel(data_r19));
} }
function CeeTableV2Component_ng_container_0_table_10_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_1_Template, 3, 6, "ng-container", 71)(2, CeeTableV2Component_ng_container_0_table_10_td_4_ng_container_2_Template, 2, 7, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r19 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tss && (data_r19.isSelectable || ctx_r1.disableRowSelectionValues !== ""));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tms && (data_r19.isSelectable || ctx_r1.disableRowSelectionValues !== ""));
} }
function CeeTableV2Component_ng_container_0_table_10_th_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "th", 77);
} }
function CeeTableV2Component_ng_container_0_table_10_td_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-icon", 78);
    i0.ɵɵtext(2, "reorder");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "span", 79);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r23 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngClass", data_r23.isSelectable ? "example-drag-cursor" : "example-drag-cursor-disable");
} }
function CeeTableV2Component_ng_container_0_table_10_td_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_7_ng_container_1_Template, 4, 1, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dragDropTableRows);
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 83)(1, "span", 84);
    i0.ɵɵlistener("sort", function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_th_1_Template_span_sort_1_listener($event) { i0.ɵɵrestoreView(_r24); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSort($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext(2);
    const f_r26 = ctx_r24.$implicit;
    const i_r27 = ctx_r24.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("resizeColumn", f_r26.resizable)("index", i_r27 + ctx_r1.extraTableCell);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("sortable", f_r26.unique_id);
    i0.ɵɵpropertyInterpolate("sorting", f_r26.sorting);
    i0.ɵɵproperty("ngClass", f_r26.sorting == true ? "ce-label case" : "ce-label");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r26.field_label);
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_th_1_Template, 3, 6, "th", 82);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "input", 90);
    i0.ɵɵlistener("keyup", function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_4_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r28); const f_r26 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterChange(f_r26, $event.target.value, "text")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r26 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("placeholder", "search ", f_r26.unique_id, "");
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r29 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "mat-label");
    i0.ɵɵtext(2, "Choose a date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 91);
    i0.ɵɵlistener("dateChange", function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_5_Template_input_dateChange_3_listener($event) { i0.ɵɵrestoreView(_r29); const f_r26 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterChange(f_r26, $event.target.value, "date")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "mat-datepicker-toggle", 92)(5, "mat-datepicker", null, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const basicDatepicker_r30 = i0.ɵɵreference(6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matDatepicker", basicDatepicker_r30);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", basicDatepicker_r30);
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 86)(1, "div", 87)(2, "div", 88);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_4_Template, 2, 2, "div", 89)(5, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_div_5_Template, 7, 2, "div", 89);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r26 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("disabled", ctx_r1.isSortingDisabled(f_r26.unique_id));
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate(f_r26.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.searchFilterHeaderTextbox.includes(f_r26.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.searchFilterHeaderDate.includes(f_r26.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_th_1_Template, 6, 4, "th", 85);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_1_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 93);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_Template_td_click_0_listener() { const data_r32 = i0.ɵɵrestoreView(_r31).$implicit; const i_r27 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.responsive && i_r27 === 0 && ctx_r1.expandedElement === data_r32 ? ctx_r1.expandedElement = null : ""); });
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_1_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r32 = ctx.$implicit;
    const position_r33 = ctx.dataIndex;
    const f_r26 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c5, f_r26, position_r33, data_r32, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_10_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 80);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_1_Template, 2, 0, "ng-container", 71)(2, CeeTableV2Component_ng_container_0_table_10_ng_container_8_ng_container_2_Template, 2, 0, "ng-container", 71)(3, CeeTableV2Component_ng_container_0_table_10_ng_container_8_td_3_Template, 2, 7, "td", 81);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r26 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matColumnDef", f_r26.unique_id)("sticky", ctx_r1.colSticky.includes(f_r26.unique_id))("stickyEnd", ctx_r1.colStickyEnd.includes(f_r26.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dynamicColumnWidth);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.dynamicColumnWidth);
} }
function CeeTableV2Component_ng_container_0_table_10_th_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36)(1, "span", 95);
    i0.ɵɵtext(2, "Expandable Option");
    i0.ɵɵelementEnd()();
} }
function CeeTableV2Component_ng_container_0_table_10_td_11_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 73)(1, "button", 96);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_10_td_11_Template_button_click_1_listener() { const data_r36 = i0.ɵɵrestoreView(_r35).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r36 ? null : data_r36; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r36[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r36 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r36 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_1_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_1_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r37 = i0.ɵɵnextContext().$implicit;
    const ctx_r37 = i0.ɵɵnextContext(2);
    const data_r39 = ctx_r37.$implicit;
    const position_r40 = ctx_r37.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r37.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r37)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c6, f_r37, position_r40, data_r39, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_div_1_Template, 2, 10, "div", 97);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r37 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hidenRows.includes(f_r37.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100)(1, "button", 96);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r41); const data_r39 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r39 ? null : data_r39; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r39[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r39 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r39 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_ng_container_1_Template, 2, 1, "ng-container", 98)(2, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_div_2_Template, 3, 1, "div", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("cee-table-resp ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "Table-Expandable-V2");
} }
function CeeTableV2Component_ng_container_0_table_10_td_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_13_div_1_Template, 3, 6, "div", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.responsive);
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_2_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_2_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r42 = i0.ɵɵnextContext();
    const data_r44 = ctx_r42.$implicit;
    const position_r45 = ctx_r42.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r42.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r42)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c6, f_r42, position_r45, data_r44, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_ng_container_1_Template, 3, 10, "ng-container", 71);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r42 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hidenRows.includes(f_r42.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-block-renderer", 102);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const position_r45 = i0.ɵɵnextContext().dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", position_r45)("blockId", ctx_r1.hidenRows[0])("blockPosition", position_r45)("rootData", ctx_r1.rootData);
} }
function CeeTableV2Component_ng_container_0_table_10_td_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73)(1, "div", 101);
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_2_Template, 2, 1, "ng-container", 98)(3, CeeTableV2Component_ng_container_0_table_10_td_15_ng_container_3_Template, 2, 5, "ng-container", 71);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r44 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-table-detail ", ctx_r1.is_bootstrap && !ctx_r1.tableHiddenGeneric ? "row" : "", " ", data_r44 !== ctx_r1.expandedElement ? "collapsed" : "", "");
    i0.ɵɵproperty("@detailExpand", data_r44 === ctx_r1.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.tableHiddenGeneric && ctx_r1.hidenRows.length === 1);
} }
function CeeTableV2Component_ng_container_0_table_10_td_17_app_step_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-step-renderer", 105);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("stepId", ctx_r1.inlineEditStepId)("startSession", ctx_r1.startSession);
} }
function CeeTableV2Component_ng_container_0_table_10_td_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 103);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_10_td_17_app_step_renderer_1_Template, 1, 2, "app-step-renderer", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r46 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r46[ctx_r1.primaryKeyValue] == ctx_r1.selectedPrimaryKeyVal);
} }
function CeeTableV2Component_ng_container_0_table_10_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 106);
} }
function CeeTableV2Component_ng_container_0_table_10_tr_19_Template(rf, ctx) { if (rf & 1) {
    const _r47 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 107);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_10_tr_19_Template_tr_click_0_listener() { const row_r48 = i0.ɵɵrestoreView(_r47).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r48)); })("contextmenu", function CeeTableV2Component_ng_container_0_table_10_tr_19_Template_tr_contextmenu_0_listener() { const row_r48 = i0.ɵɵrestoreView(_r47).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r48, true)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r48 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("cee-table-row ", ctx_r1.expandedElement === row_r48 ? "cee-expanded-row" : "", " ", row_r48 && row_r48.rowData && row_r48.rowData.conditionalCustomClass ? row_r48.rowData.conditionalCustomClass : "", " ", ctx_r1.primaryKeyValue && ctx_r1.type == ctx_r1.tms ? ctx_r1.selection.selected.includes(row_r48[ctx_r1.primaryKeyValue]) ? "table-item-checked" : "table-item-unchecked" : "", "");
    i0.ɵɵpropertyInterpolate1("id", "table-row-", row_r48[ctx_r1.primaryKeyValue], "");
    i0.ɵɵproperty("cdkDragData", row_r48)("cdkDragDisabled", ctx_r1.shouldDisableDragAndDropForRow(row_r48));
} }
function CeeTableV2Component_ng_container_0_table_10_tr_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r49 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-resp-row ", row_r49 && row_r49.rowData && row_r49 && row_r49.rowData && row_r49.rowData.conditionalCustomClass ? row_r49.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_10_tr_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r50 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-detail-row ", row_r50 && row_r50.rowData && row_r50 && row_r50.rowData && row_r50.rowData.conditionalCustomClass ? row_r50.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_10_tr_22_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r51 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-step-row ", row_r51 && row_r51.rowData && row_r51 && row_r51.rowData && row_r51.rowData.conditionalCustomClass ? row_r51.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_10_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 57, 2);
    i0.ɵɵlistener("resize", function CeeTableV2Component_ng_container_0_table_10_Template_table_resize_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onResize()); }, false, i0.ɵɵresolveWindow)("matSortChange", function CeeTableV2Component_ng_container_0_table_10_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.onResize(); return i0.ɵɵresetView(ctx_r1.matSortChange($event)); })("click", function CeeTableV2Component_ng_container_0_table_10_Template_table_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.triggerSeeMore()); })("cdkDropListDropped", function CeeTableV2Component_ng_container_0_table_10_Template_table_cdkDropListDropped_0_listener($event) { i0.ɵɵrestoreView(_r16); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.dropRow($event)); });
    i0.ɵɵelementContainerStart(2, 58);
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_container_0_table_10_th_3_Template, 2, 1, "th", 34)(4, CeeTableV2Component_ng_container_0_table_10_td_4_Template, 3, 2, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(5, 60);
    i0.ɵɵtemplate(6, CeeTableV2Component_ng_container_0_table_10_th_6_Template, 1, 0, "th", 61)(7, CeeTableV2Component_ng_container_0_table_10_td_7_Template, 2, 1, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(8, CeeTableV2Component_ng_container_0_table_10_ng_container_8_Template, 4, 5, "ng-container", 62);
    i0.ɵɵelementContainerStart(9, 63);
    i0.ɵɵtemplate(10, CeeTableV2Component_ng_container_0_table_10_th_10_Template, 3, 0, "th", 34)(11, CeeTableV2Component_ng_container_0_table_10_td_11_Template, 3, 1, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(12, 64);
    i0.ɵɵtemplate(13, CeeTableV2Component_ng_container_0_table_10_td_13_Template, 2, 2, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(14, 65);
    i0.ɵɵtemplate(15, CeeTableV2Component_ng_container_0_table_10_td_15_Template, 4, 9, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(16, 66);
    i0.ɵɵtemplate(17, CeeTableV2Component_ng_container_0_table_10_td_17_Template, 2, 2, "td", 67);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(18, CeeTableV2Component_ng_container_0_table_10_tr_18_Template, 1, 0, "tr", 68)(19, CeeTableV2Component_ng_container_0_table_10_tr_19_Template, 1, 9, "tr", 69)(20, CeeTableV2Component_ng_container_0_table_10_tr_20_Template, 1, 3, "tr", 70)(21, CeeTableV2Component_ng_container_0_table_10_tr_21_Template, 1, 3, "tr", 70)(22, CeeTableV2Component_ng_container_0_table_10_tr_22_Template, 1, 3, "tr", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate1("id", "table_", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵproperty("dataSource", ctx_r1.dataSource)("ngClass", i0.ɵɵpureFunction1(14, _c1, ctx_r1.dynamicColumnWidth));
    i0.ɵɵadvance(8);
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData)("ngForTrackBy", ctx_r1.trackByunique_id);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(16, _c2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(17, _c3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(18, _c4));
} }
function CeeTableV2Component_ng_container_0_table_11_th_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r53 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 72);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_11_th_3_ng_container_1_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r53); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView($event ? ctx_r1.masterToggle() : null); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("checked", ctx_r1.selection.hasValue() && ctx_r1.isAllSelected())("disabled", ctx_r1.isSeletable == "0")("indeterminate", ctx_r1.isIndeterminateSelected() && !ctx_r1.isAllSelected())("aria-label", ctx_r1.checkboxLabel());
} }
function CeeTableV2Component_ng_container_0_table_11_th_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_th_3_ng_container_1_Template, 2, 4, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tms);
} }
function CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-radio-group", 74)(2, "mat-radio-button", 75);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_1_Template_mat_radio_button_change_2_listener() { i0.ɵɵrestoreView(_r54); const data_r55 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r55, true)); });
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext();
    const data_r55 = ctx_r55.$implicit;
    const position_r57 = ctx_r55.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate1("id", "radio_", position_r57, "");
    i0.ɵɵproperty("value", data_r55)("checked", data_r55 == ctx_r1.radioValue)("disabled", ctx_r1.isSeletable == "0");
    i0.ɵɵattribute("aria-label", "Select " + position_r57);
} }
function CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r58 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-checkbox", 112);
    i0.ɵɵlistener("change", function CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_2_Template_mat_checkbox_change_1_listener($event) { i0.ɵɵrestoreView(_r58); const data_r55 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.list_change(data_r55, $event.checked)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r55 = i0.ɵɵnextContext();
    const data_r55 = ctx_r55.$implicit;
    const position_r57 = ctx_r55.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("name", "check_", position_r57, "");
    i0.ɵɵpropertyInterpolate1("id", "check_", position_r57, "");
    i0.ɵɵproperty("disabled", ctx_r1.isSeletable == "0")("checked", ctx_r1.primaryKeyValue ? ctx_r1.selection.isSelected(data_r55[ctx_r1.primaryKeyValue]) : false)("aria-label", ctx_r1.checkboxLabel(data_r55));
} }
function CeeTableV2Component_ng_container_0_table_11_td_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_1_Template, 3, 6, "ng-container", 71)(2, CeeTableV2Component_ng_container_0_table_11_td_4_ng_container_2_Template, 2, 7, "ng-container", 71);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r55 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tss && data_r55.isSelectable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type == ctx_r1.tms && data_r55.isSelectable);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_th_1_Template(rf, ctx) { if (rf & 1) {
    const _r59 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "th", 83)(1, "span", 84);
    i0.ɵɵlistener("sort", function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_th_1_Template_span_sort_1_listener($event) { i0.ɵɵrestoreView(_r59); const ctx_r1 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r1.onSort($event)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r59 = i0.ɵɵnextContext(2);
    const f_r61 = ctx_r59.$implicit;
    const i_r62 = ctx_r59.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("resizeColumn", f_r61.resizable)("index", i_r62 + ctx_r1.extraTableCell);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate("sortable", f_r61.unique_id);
    i0.ɵɵpropertyInterpolate("sorting", f_r61.sorting);
    i0.ɵɵproperty("ngClass", f_r61.sorting == true ? "ce-label case" : "ce-label");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r61.field_label);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_th_1_Template, 3, 6, "th", 82);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "span", 113);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r61 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", f_r61.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 88);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r61 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r61.field_label);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r63 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "input", 90);
    i0.ɵɵlistener("keyup", function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_4_Template_input_keyup_1_listener($event) { i0.ɵɵrestoreView(_r63); const f_r61 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterChange(f_r61, $event.target.value, "text")); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r61 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("placeholder", "search ", f_r61.unique_id, "");
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r64 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 88)(1, "mat-label");
    i0.ɵɵtext(2, "Choose a date");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "input", 91);
    i0.ɵɵlistener("dateChange", function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_5_Template_input_dateChange_3_listener($event) { i0.ɵɵrestoreView(_r64); const f_r61 = i0.ɵɵnextContext(3).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.filterChange(f_r61, $event.target.value, "date")); });
    i0.ɵɵelementEnd();
    i0.ɵɵelement(4, "mat-datepicker-toggle", 92)(5, "mat-datepicker", null, 3);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const basicDatepicker_r65 = i0.ɵɵreference(6);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("matDatepicker", basicDatepicker_r65);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", basicDatepicker_r65);
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 86)(1, "div", 87);
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_ng_container_2_Template, 2, 1, "ng-container", 71)(3, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_ng_container_3_Template, 3, 1, "ng-container", 71)(4, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_4_Template, 2, 2, "div", 89)(5, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_div_5_Template, 7, 2, "div", 89);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r61 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("disabled", ctx_r1.isSortingDisabled(f_r61.unique_id));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(f_r61.field_label) == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(f_r61.field_label) == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.searchFilterHeaderTextbox.includes(f_r61.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.searchFilterHeaderDate.includes(f_r61.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_th_1_Template, 6, 5, "th", 85);
    i0.ɵɵelementContainerEnd();
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_1_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_Template(rf, ctx) { if (rf & 1) {
    const _r66 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 93);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_Template_td_click_0_listener() { const data_r67 = i0.ɵɵrestoreView(_r66).$implicit; const i_r62 = i0.ɵɵnextContext().index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.responsive && i_r62 === 0 && ctx_r1.expandedElement === data_r67 ? ctx_r1.expandedElement = null : ""); });
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_1_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r67 = ctx.$implicit;
    const position_r68 = ctx.dataIndex;
    const f_r61 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c5, f_r61, position_r68, data_r67, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_11_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 80);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_1_Template, 2, 0, "ng-container", 71)(2, CeeTableV2Component_ng_container_0_table_11_ng_container_5_ng_container_2_Template, 2, 0, "ng-container", 71)(3, CeeTableV2Component_ng_container_0_table_11_ng_container_5_td_3_Template, 2, 7, "td", 81);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r61 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("matColumnDef", f_r61.unique_id)("sticky", ctx_r1.colSticky.includes(f_r61.unique_id))("stickyEnd", ctx_r1.colStickyEnd.includes(f_r61.unique_id));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.dynamicColumnWidth);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.dynamicColumnWidth);
} }
function CeeTableV2Component_ng_container_0_table_11_th_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "th", 36)(1, "span", 95);
    i0.ɵɵtext(2, "Expandable Option");
    i0.ɵɵelementEnd()();
} }
function CeeTableV2Component_ng_container_0_table_11_td_8_Template(rf, ctx) { if (rf & 1) {
    const _r69 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "td", 73)(1, "button", 96);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_11_td_8_Template_button_click_1_listener() { const data_r70 = i0.ɵɵrestoreView(_r69).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r70 ? null : data_r70; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r70[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r70 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r70 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_1_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_1_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const f_r71 = i0.ɵɵnextContext().$implicit;
    const ctx_r71 = i0.ɵɵnextContext(2);
    const data_r73 = ctx_r71.$implicit;
    const position_r74 = ctx_r71.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r71.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r71)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c6, f_r71, position_r74, data_r73, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_div_1_Template, 2, 10, "div", 97);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r71 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.hidenRows.includes(f_r71.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r75 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 100)(1, "button", 96);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_div_2_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r75); const data_r73 = i0.ɵɵnextContext(2).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.expandedElement = ctx_r1.expandedElement === data_r73 ? null : data_r73; return i0.ɵɵresetView(ctx_r1.setPrimaryKey({ name: ctx_r1.primaryKeyVal, value: data_r73[ctx_r1.primaryKeyVal] })); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r73 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r73 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_ng_container_1_Template, 2, 1, "ng-container", 27)(2, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_div_2_Template, 3, 1, "div", 99);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("cee-table-resp ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "Table-Expandable-V2");
} }
function CeeTableV2Component_ng_container_0_table_11_td_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_10_div_1_Template, 3, 5, "div", 97);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.responsive);
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_2_ng_template_0_Template(rf, ctx) { }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_2_Template, 1, 0, null, 94);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r76 = i0.ɵɵnextContext().$implicit;
    const ctx_r76 = i0.ɵɵnextContext();
    const data_r78 = ctx_r76.$implicit;
    const position_r79 = ctx_r76.dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    const cellData_r34 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("cee-table-detail-cell ", ctx_r1.commonUtil.bootstrapColClass(f_r76.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(f_r76)), "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r34)("ngTemplateOutletContext", i0.ɵɵpureFunction4(5, _c6, f_r76, position_r79, data_r78, ctx_r1.listCellClick));
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_ng_container_1_Template, 3, 10, "ng-container", 71);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r76 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hidenRows.includes(f_r76.unique_id));
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-block-renderer", 102);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const position_r79 = i0.ɵɵnextContext().dataIndex;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", position_r79)("blockId", ctx_r1.hidenRows[0])("blockPosition", position_r79)("rootData", ctx_r1.rootData);
} }
function CeeTableV2Component_ng_container_0_table_11_td_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 73)(1, "div", 101);
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_2_Template, 2, 1, "ng-container", 27)(3, CeeTableV2Component_ng_container_0_table_11_td_12_ng_container_3_Template, 2, 5, "ng-container", 71);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const data_r78 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-table-detail ", ctx_r1.is_bootstrap && !ctx_r1.tableHiddenGeneric ? "row" : "", " ", data_r78 !== ctx_r1.expandedElement ? "collapsed" : "", "");
    i0.ɵɵproperty("@detailExpand", data_r78 === ctx_r1.expandedElement ? "expanded" : "collapsed");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.tableHiddenGeneric && ctx_r1.hidenRows.length === 1);
} }
function CeeTableV2Component_ng_container_0_table_11_td_14_app_step_renderer_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "app-step-renderer", 105);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("stepId", ctx_r1.inlineEditStepId)("startSession", ctx_r1.startSession);
} }
function CeeTableV2Component_ng_container_0_table_11_td_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "td", 103);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_table_11_td_14_app_step_renderer_1_Template, 1, 2, "app-step-renderer", 104);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r80 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵattribute("colspan", ctx_r1.displayedColumns.length);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r80[ctx_r1.primaryKeyValue] == ctx_r1.selectedPrimaryKeyVal);
} }
function CeeTableV2Component_ng_container_0_table_11_tr_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 106);
} }
function CeeTableV2Component_ng_container_0_table_11_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r81 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "tr", 114);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_table_11_tr_16_Template_tr_click_0_listener() { const row_r82 = i0.ɵɵrestoreView(_r81).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r82)); })("contextmenu", function CeeTableV2Component_ng_container_0_table_11_tr_16_Template_tr_contextmenu_0_listener() { const row_r82 = i0.ɵɵrestoreView(_r81).$implicit; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.listCellClick(row_r82, true)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const row_r82 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate3("cee-table-row ", ctx_r1.expandedElement === row_r82 ? "cee-expanded-row" : "", " ", row_r82.rowData ? row_r82.rowData.conditionalCustomClass : "", " ", ctx_r1.primaryKeyValue && ctx_r1.type == ctx_r1.tms ? ctx_r1.selection.selected.includes(row_r82[ctx_r1.primaryKeyValue]) ? "table-item-checked" : "table-item-unchecked" : "", "");
    i0.ɵɵpropertyInterpolate1("id", "table-row-", row_r82[ctx_r1.primaryKeyValue], "");
} }
function CeeTableV2Component_ng_container_0_table_11_tr_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r83 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-resp-row ", row_r83.rowData ? row_r83.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_11_tr_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r84 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-detail-row ", row_r84.rowData ? row_r84.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_11_tr_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "tr", 108);
} if (rf & 2) {
    const row_r85 = ctx.$implicit;
    i0.ɵɵclassMapInterpolate1("cee-step-row ", row_r85.rowData ? row_r85.rowData.conditionalCustomClass : "", "");
} }
function CeeTableV2Component_ng_container_0_table_11_Template(rf, ctx) { if (rf & 1) {
    const _r52 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "table", 109, 2);
    i0.ɵɵlistener("resize", function CeeTableV2Component_ng_container_0_table_11_Template_table_resize_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onResize()); }, false, i0.ɵɵresolveWindow)("matSortChange", function CeeTableV2Component_ng_container_0_table_11_Template_table_matSortChange_0_listener($event) { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(2); ctx_r1.onResize(); return i0.ɵɵresetView(ctx_r1.matSortChange($event)); })("click", function CeeTableV2Component_ng_container_0_table_11_Template_table_click_0_listener() { i0.ɵɵrestoreView(_r52); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.triggerSeeMore()); });
    i0.ɵɵelementContainerStart(2, 58);
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_container_0_table_11_th_3_Template, 2, 1, "th", 34)(4, CeeTableV2Component_ng_container_0_table_11_td_4_Template, 3, 2, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(5, CeeTableV2Component_ng_container_0_table_11_ng_container_5_Template, 4, 5, "ng-container", 110);
    i0.ɵɵelementContainerStart(6, 63);
    i0.ɵɵtemplate(7, CeeTableV2Component_ng_container_0_table_11_th_7_Template, 3, 0, "th", 34)(8, CeeTableV2Component_ng_container_0_table_11_td_8_Template, 3, 1, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(9, 64);
    i0.ɵɵtemplate(10, CeeTableV2Component_ng_container_0_table_11_td_10_Template, 2, 2, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(11, 65);
    i0.ɵɵtemplate(12, CeeTableV2Component_ng_container_0_table_11_td_12_Template, 4, 8, "td", 59);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementContainerStart(13, 66);
    i0.ɵɵtemplate(14, CeeTableV2Component_ng_container_0_table_11_td_14_Template, 2, 2, "td", 67);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵtemplate(15, CeeTableV2Component_ng_container_0_table_11_tr_15_Template, 1, 0, "tr", 68)(16, CeeTableV2Component_ng_container_0_table_11_tr_16_Template, 1, 7, "tr", 111)(17, CeeTableV2Component_ng_container_0_table_11_tr_17_Template, 1, 3, "tr", 70)(18, CeeTableV2Component_ng_container_0_table_11_tr_18_Template, 1, 3, "tr", 70)(19, CeeTableV2Component_ng_container_0_table_11_tr_19_Template, 1, 3, "tr", 70);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.sectionData.field_style ? ctx_r1.sectionData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate1("id", "table_", ctx_r1.sectionData.unique_id, "");
    i0.ɵɵproperty("dataSource", ctx_r1.dataSource)("ngClass", i0.ɵɵpureFunction1(13, _c1, ctx_r1.dynamicColumnWidth));
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData);
    i0.ɵɵadvance(10);
    i0.ɵɵproperty("matHeaderRowDef", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", ctx_r1.displayedColumns);
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(15, _c2));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(16, _c3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("matRowDefColumns", i0.ɵɵpureFunction0(17, _c4));
} }
function CeeTableV2Component_ng_container_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 115);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function CeeTableV2Component_ng_container_0_mat_paginator_13_Template(rf, ctx) { if (rf & 1) {
    const _r86 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-paginator", 116);
    i0.ɵɵlistener("page", function CeeTableV2Component_ng_container_0_mat_paginator_13_Template_mat_paginator_page_0_listener($event) { i0.ɵɵrestoreView(_r86); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onPaginationChange($event)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("pageSizeOptions", ctx_r1.pageItems);
} }
function CeeTableV2Component_ng_container_0_div_14_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r88 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 120);
    i0.ɵɵlistener("click", function CeeTableV2Component_ng_container_0_div_14_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r88); i0.ɵɵnextContext(); const page_r89 = i0.ɵɵreference(2); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.onNextPageChange(page_r89)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationNextLabel);
} }
function CeeTableV2Component_ng_container_0_div_14_Template(rf, ctx) { if (rf & 1) {
    const _r87 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 117)(1, "mat-paginator", 118, 4);
    i0.ɵɵlistener("page", function CeeTableV2Component_ng_container_0_div_14_Template_mat_paginator_page_1_listener($event) { i0.ɵɵrestoreView(_r87); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.pageEvent = $event); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_container_0_div_14_button_3_Template, 2, 1, "button", 119);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("pageSizeOptions", ctx_r1.pageItems)("pageSize", ctx_r1.pageItems[0]);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.SeemoreHide);
} }
function CeeTableV2Component_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0, 6);
    i0.ɵɵlistener("scroll", function CeeTableV2Component_ng_container_0_Template_ng_container_scroll_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onScroll($event)); });
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_container_0_mat_form_field_1_Template, 2, 2, "mat-form-field", 7)(2, CeeTableV2Component_ng_container_0_button_2_Template, 2, 0, "button", 8)(3, CeeTableV2Component_ng_container_0_div_3_Template, 6, 4, "div", 9)(4, CeeTableV2Component_ng_container_0_table_4_Template, 4, 7, "table", 10);
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, CeeTableV2Component_ng_container_0_button_6_Template, 2, 0, "button", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(7, CeeTableV2Component_ng_container_0_div_7_Template, 11, 5, "div", 12);
    i0.ɵɵelementStart(8, "div", 13, 1);
    i0.ɵɵtemplate(10, CeeTableV2Component_ng_container_0_table_10_Template, 23, 19, "table", 14)(11, CeeTableV2Component_ng_container_0_table_11_Template, 20, 18, "table", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CeeTableV2Component_ng_container_0_div_12_Template, 2, 1, "div", 16)(13, CeeTableV2Component_ng_container_0_mat_paginator_13_Template, 1, 1, "mat-paginator", 17)(14, CeeTableV2Component_ng_container_0_div_14_Template, 4, 3, "div", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.checkboxFilter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.togglefilterBox);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.dragDropTableRows && (!ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true" || !ctx_r1.additionalParameters["ShowSkeletonLoader"] || (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) != "true"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.dragDropTableRows && (!ctx_r1.showSkeletonLoader && (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) == "true" || !ctx_r1.additionalParameters["ShowSkeletonLoader"] || (ctx_r1.additionalParameters["ShowSkeletonLoader"] == null ? null : ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase()) != "true"));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.loaded && ctx_r1.dataSource.filteredData.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination == "load_more" && ctx_r1.showSeeMore);
} }
function CeeTableV2Component_ng_template_1_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r90 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r90.field_label);
} }
function CeeTableV2Component_ng_template_1_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_template_1_ng_container_1_label_1_Template, 4, 1, "label", 124);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_template_1_ng_container_1_ng_container_3_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const expandedDetail_r94 = ctx_r90.expandedDetail;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r94 && f_r90.field_label);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(4, 6, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(15, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(11, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(8, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_2_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r90 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r90.field_label);
} }
function CeeTableV2Component_ng_template_1_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_template_1_ng_container_2_label_1_Template, 4, 1, "label", 124);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, CeeTableV2Component_ng_template_1_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(4, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const expandedDetail_r94 = ctx_r90.expandedDetail;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r94 && f_r90.field_label);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(4, 6, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(15, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(11, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(8, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c10, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(14, _c9, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, i0.ɵɵpureFunction3(10, _c8, ctx_r1.primaryKeyVal, data_r93[ctx_r1.primaryKeyVal], i0.ɵɵpureFunction2(7, _c7, data_r93, ctx_r1.displayedFields))));
} }
function CeeTableV2Component_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵelement(2, "app-cee-table-v2", 127);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("sectionData", f_r90)("rootData", ctx_r1.rootData)("rowData", data_r93["rowData"][f_r90.unique_id])("stepId", ctx_r1.stepId)("type", f_r90.field_type);
} }
function CeeTableV2Component_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap["List-V2"]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c11, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, f_r90.field_type));
} }
function CeeTableV2Component_ng_template_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(7, _c11, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90, f_r90.field_type));
} }
function CeeTableV2Component_ng_template_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function CeeTableV2Component_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, CeeTableV2Component_ng_template_1_ng_container_11_ng_container_2_Template, 1, 0, "ng-container", 125);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const position_r92 = ctx_r90.position;
    const data_r93 = ctx_r90.data;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", position_r92, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 5, ctx_r1.componentMap[f_r90.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(7, _c12, ctx_r1.stepId, ctx_r1.rootData, data_r93["rowData"][f_r90.unique_id], f_r90));
} }
function CeeTableV2Component_ng_template_1_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 126);
    i0.ɵɵtext(1);
    i0.ɵɵelementStart(2, "span");
    i0.ɵɵtext(3, ": ");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r90 = i0.ɵɵnextContext(2).f;
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r90.field_label);
} }
function CeeTableV2Component_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_template_1_ng_container_12_div_1_Template, 4, 1, "div", 128);
    i0.ɵɵtext(2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r90 = i0.ɵɵnextContext();
    const f_r90 = ctx_r90.f;
    const data_r93 = ctx_r90.data;
    const expandedDetail_r94 = ctx_r90.expandedDetail;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", expandedDetail_r94);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r93["rowData"][f_r90.unique_id] == null ? null : data_r93["rowData"][f_r90.unique_id].value, " ");
} }
function CeeTableV2Component_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 121);
    i0.ɵɵtemplate(1, CeeTableV2Component_ng_template_1_ng_container_1_Template, 5, 21, "ng-container", 122)(2, CeeTableV2Component_ng_template_1_ng_container_2_Template, 5, 21, "ng-container", 122)(3, CeeTableV2Component_ng_template_1_ng_container_3_Template, 4, 20, "ng-container", 122)(4, CeeTableV2Component_ng_template_1_ng_container_4_Template, 4, 20, "ng-container", 122)(5, CeeTableV2Component_ng_template_1_ng_container_5_Template, 4, 20, "ng-container", 122)(6, CeeTableV2Component_ng_template_1_ng_container_6_Template, 4, 20, "ng-container", 122)(7, CeeTableV2Component_ng_template_1_ng_container_7_Template, 4, 20, "ng-container", 122)(8, CeeTableV2Component_ng_template_1_ng_container_8_Template, 3, 8, "ng-container", 122)(9, CeeTableV2Component_ng_template_1_ng_container_9_Template, 4, 13, "ng-container", 122)(10, CeeTableV2Component_ng_template_1_ng_container_10_Template, 4, 13, "ng-container", 122)(11, CeeTableV2Component_ng_template_1_ng_container_11_Template, 4, 12, "ng-container", 122)(12, CeeTableV2Component_ng_template_1_ng_container_12_Template, 3, 2, "ng-container", 123);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const f_r90 = ctx.f;
    i0.ɵɵproperty("ngSwitch", f_r90.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Attachments");
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
    i0.ɵɵproperty("ngSwitchCase", "Table-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", f_r90.field_type === "List-V2" || f_r90.field_type === "List-Expandable-V2" ? f_r90.field_type : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "TreeView");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "DynamicForm");
} }
var ELEMENT_DATA = Array(10);
var LOAD_MORE = 'load_more';
// if you want to use $ as an alias
const $ = jQuery;
export class CeeTableV2Component {
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
    fieldData;
    sectionData;
    type;
    rowData;
    rootData;
    primaryKeyIndex;
    // @ViewChild('tabledd', {static: true}) tabledd: MatTable<PeriodicElement>;
    sortDirection = '';
    dataSourceLoading = ELEMENT_DATA;
    dataSource = new MatTableDataSource([]);
    displayedColumns = [];
    headers;
    hidenRows = [];
    expandedElement;
    expandTitle = 'Show';
    collapseTitle = 'Hide';
    SeemoreHide = true;
    pageItems;
    paginator;
    sort;
    showPagination = '';
    showFilter = false;
    filterPlaceholderText = 'Filter';
    selection = new SelectionModel(true, []);
    showSkeletonLoader = true;
    apiData = [];
    apiDataCopy = [];
    displayValues = [];
    radioValue;
    checkedItems = [];
    nextPageIndex = 0;
    storeData = [];
    primaryKeyVal = '';
    primaryKeyName = '';
    primaryKeyValue = '';
    primaryKeyRes = '';
    isVisible = false;
    extraTableCell = 0;
    additionalParameters = {};
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
    dropList;
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
    paginationTotalCount;
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
    tss = 'Table-Single-Select-V2';
    tms = 'Table-Multi-Select-V2';
    searchFilterHeaderTextbox = [];
    searchFilterHeaderDate = [];
    filterSelectObj = [];
    filterValues = {};
    filterDateandText = false;
    checkboxFilter = false;
    togglefilterBox = false;
    scrollToTop = false;
    task = {};
    allComplete = false;
    columnFilterType = ['none'];
    columnShowHideRearrange = [];
    fieldDataBack = [];
    filterErrorMsg = "";
    inlineEditStepId = "";
    selectedPrimaryKeyVal = "";
    startSession = true;
    dragDropTableRows = false;
    // MatPaginator Output
    pageEvent;
    pageIndex = 0;
    isShowMoreClicked = false;
    isMatSortClicked = false;
    componentList = {};
    paginationSeparator = "/";
    componentMap = {
        label: defer(() => {
            if (!this.componentList['label']) {
                this.componentList['label'] = import('../../field-components/cee-label/cee-label.component').then(m => m.CeeLabelComponent);
            }
            return this.componentList['label'];
        }),
        Attachments: defer(() => {
            if (!this.componentList['Attachments']) {
                this.componentList['Attachments'] = import('../../field-components/cee-attachments/cee-attachments.component').then(m => m.CeeAttachmentsComponent);
            }
            return this.componentList['Attachments'];
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
        'List-V2': defer(() => {
            if (!this.componentList['List-V2']) {
                this.componentList['List-V2'] = import('../../components/list-renderer-v2/list-renderer-v2.component').then(m => m.ListRendererComponentV2);
            }
            return this.componentList['List-V2'];
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
    colSticky = [];
    colStickyEnd = [];
    blockData;
    fromStore;
    showSeeMore = false;
    disableRowValues = '';
    disableRowSelectionValues = '';
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
        this.fieldDataBack = this.fieldData;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.wfeEventListHandler = new WFEEventListHandler(_ceeApiService, router, sharedEventsService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        const timeoutId = setTimeout(() => {
            // console.log("uniqueID: ",this.sectionData.unique_id)
            this.variableObject['emitOnApplyRearrangeBtnClicked_' + this.sectionData.unique_id] = this.sharedEventsService.emitOnApplyRearrangeBtnClicked.subscribe(res => {
                let tableId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; })[0].value : '';
                // console.log(tableId,"==",this.sectionData.unique_id);
                if (tableId == this.sectionData.unique_id) {
                    // console.log("field found")
                    this.resetRestructuring();
                    this.applyRestructuring();
                    const handlerData = this.returnNestedData(this.apiDataService.getApiDataByHandler(this.sectionData.response_api_key.split('##')[0])?.value);
                    if (handlerData) {
                        this.refreshColumnRowOnDataChange();
                        this.onAPICallback(handlerData);
                    }
                    // console.log("All Process Done!")
                    this.cdRef.detectChanges();
                    // window.location.reload();
                    // document.getElementById(tableId).click();
                }
            });
            this.variableObject['emitOnTableInlineEditCancelClicked_' + this.sectionData.unique_id] = this.sharedEventsService.emitOnTableInlineEditCancelClicked.subscribe(res => {
                let tableId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; })[0].value : '';
                if (tableId == this.sectionData.unique_id) {
                    this.selectedPrimaryKeyVal = '';
                    this.cdRef.detectChanges();
                }
            });
            this.variableObject['emitOnTableInlineEditClicked_' + this.sectionData.unique_id] = this.sharedEventsService.emitOnTableInlineEditClicked.subscribe(res => {
                let tableId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; })[0].value : '';
                let primaryKeyFieldId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_Primary_Key_FieldId'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_Primary_Key_FieldId'; })[0].value : '';
                if (tableId == this.sectionData.unique_id) {
                    this.selectedPrimaryKeyVal = this.appDataService.getFieldDataByFieldId(primaryKeyFieldId);
                    setTimeout(() => {
                        let e = document.getElementById('table-row-' + this.selectedPrimaryKeyVal);
                        if (e) {
                            e.click();
                            e.scrollIntoView();
                        }
                    }, 500);
                    this.timeoutIds.push(timeoutId);
                }
            });
        }, 0);
        this.timeoutIds.push(timeoutId);
    }
    ngAfterViewInit() {
        if (this.dropList) {
            this.dropList.autoScrollDisabled = false;
            this.dropList.autoScrollStep = 10;
        }
    }
    returnNestedData(data) {
        if (Object(data) !== data || Array.isArray(data)) {
            return data;
        }
        const regex = /\.?([^.\[\]]+)|\[(\d+)\]/g;
        const resultholder = {};
        // tslint:disable-next-line: forin
        for (const p in data) {
            let cur = resultholder;
            let prop = "";
            let m;
            while ((m = regex.exec(p))) {
                cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
                prop = m[2] || m[1];
            }
            cur[prop] = data[p];
        }
        return resultholder[""] || resultholder;
    }
    ;
    updateColumnConfig() {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.sectionData.unique_id)) {
            this.columnShowHideRearrange = setting[this.sectionData.unique_id];
        }
        else {
            this.columnShowHideRearrange = [];
            if (this.fieldData) {
                this.fieldData.forEach((element, i) => {
                    this.columnShowHideRearrange.push({
                        field_label: element.field_label,
                        unique_id: element.unique_id,
                        position: i,
                        showColumn: Number(element.is_display) == 0 ? false : true,
                        isMandatory: false,
                        isVisible: Number(element.is_display) == 0 ? false : true
                    });
                });
            }
        }
    }
    dropRow(event) {
        if (this.dragDropTableRows) {
            const previousIndex = this.dataSource.data.findIndex(d => d === event.item.data);
            // console.log("previousIndex: ", previousIndex, " currentIndex: ", event.currentIndex)
            // console.log("dataSource ", this.dataSource.data)
            moveItemInArray(this.dataSource.data, previousIndex, event.currentIndex);
            this.dataSource.data = clonedeep(this.dataSource.data);
            /* ##################### store modified data ######################## */
            let primaryKey = this.additionalParameters['PrimaryKeyName'] ? this.additionalParameters['PrimaryKeyName'] : '';
            let modifyKey = this.additionalParameters['CEE_Drag_Drop_Rows_ModifyKey'] ? this.additionalParameters['CEE_Drag_Drop_Rows_ModifyKey'] : '';
            let modifiedRequestApiKey = this.additionalParameters['CEE_Drag_Drop_Rows_ModifiedRequestKey'] ? this.additionalParameters['CEE_Drag_Drop_Rows_ModifiedRequestKey'] : primaryKey;
            let requestApiKey = this.additionalParameters['CEE_Drag_Drop_Rows_Request_Api_Key'] ? this.additionalParameters['CEE_Drag_Drop_Rows_Request_Api_Key'].split('||') : '';
            if (primaryKey && modifyKey && requestApiKey) {
                let modifyKeyArr = this.dataSource.data.map(function (a) { return Number(a[modifyKey]); }).sort(function (a, b) { return a - b; });
                ;
                // console.log("modifyKeyArr: ",modifyKeyArr)
                let primaryKeyMapping = this.dataSource.data.map(function (a, index) {
                    let obj = {};
                    obj[modifiedRequestApiKey] = a[primaryKey];
                    obj[modifyKey] = modifyKeyArr[index];
                    return obj;
                });
                // console.log("primaryKeyMapping: ", primaryKeyMapping)
                if (this.additionalParameters['PrimaryKeyName'] && this.additionalParameters['Primary Key Field Id']) {
                    let primaryFieldData = this.appData;
                    primaryFieldData = {
                        ...primaryFieldData, ...{
                            id: this.additionalParameters['Primary Key Field Id'],
                            editable: false,
                            visible: false,
                            mandatory: false,
                            value: primaryKeyMapping,
                            apiKey: '',
                            isValid: true,
                            responseApiKey: [],
                            requestApiKey: requestApiKey
                        }
                    };
                    this.appDataService.setAppData(primaryFieldData);
                    // Call event OnRowDragDrop
                    this.onComponentEvent('OnRowDragDrop');
                }
            }
        }
    }
    drop(event) {
        if (this.dragDropTableRows && this.columnFilterType.indexOf('rearrange') != -1) {
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
        this.showHideFilter('show-hide-container-', this.sectionData.unique_id);
    }
    applyRestructuring() {
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
            let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
            setting[this.sectionData.unique_id] = this.columnShowHideRearrange;
            // localStorage.setItem('columnRstructuringConfig',JSON.stringify(setting));
            let selectedCols = this.columnShowHideRearrange.filter(c => c.showColumn == true).map(ele => ele.unique_id);
            let restuctuedColArr = [];
            selectedCols.forEach(s => {
                let tempFieldData = this.fieldDataBack.filter(ele => ele.unique_id == s);
                if (tempFieldData && tempFieldData.length > 0) {
                    restuctuedColArr.push(tempFieldData[0]);
                }
            });
            this.fieldData = restuctuedColArr;
            // this.ngOnInit();
            // *****************************************
            const { event_list } = this.sectionData;
            this.processBlockData(this.blockData, this.fromStore, event_list, true);
            // *****************************************
            this.showHideFilter('show-hide-container-', this.sectionData.unique_id);
            // console.log("All applyRestructuring Process Done!")
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
    triggerSeeMore() {
        if (this.showPagination === LOAD_MORE) {
            this.isMatSortClicked = true;
        }
    }
    matSortChange(sort) {
        this.sortChangeSetValue(sort.active, sort.direction);
    }
    sortChangeSetValue(column, direction) {
        if (this.freezeSort) {
            return;
        }
        if (!direction) {
            let field = this.fieldData.find(f => f.response_api_key === this.sortApiValues[0]);
            direction = this.sortApiValues[1];
            column = field.unique_id;
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
    ngOnInit() {
        this.updateColumnConfig();
        this.html_id = this.rowData && this.rowData.html_id ? this.rowData.html_id : this.sectionData.unique_id;
        let fromStore;
        this.tableCellAppData.stepId = this.stepId;
        const { additional_parameters, unique_id, event_list } = this.sectionData;
        if (additional_parameters && additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'CEE_column_filter_type':
                        this.columnFilterType = paramter.value ? paramter.value.split('|') : ['none'];
                        break;
                    case 'Show Chips':
                        // this.chipsApiKeyToDisplay = paramter.value;
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        this.primaryKeyName = this.getPrimaryKey(paramter.value);
                        this.primaryKeyValue = this.getValueformKey(paramter.value);
                        break;
                    case 'PrimaryKeyValue':
                        this.primaryKeyRes = paramter.value;
                        break;
                    case 'Show Pagination':
                        // this.showPagination = paramter.value === 'false' ? false : true; // Before LOAD_MORE
                        this.showPagination = paramter.value.toLowerCase();
                        break;
                    case 'Pagination Values':
                        this.pageItems = paramter.value.split('|').map(s => +s.trim());
                        break;
                    case 'Show Filter':
                        this.showFilter = paramter.value === 'false' ? false : true;
                        break;
                    case 'Pagination Next Label':
                        this.paginationNextLabel = paramter.value !== '' ? paramter.value : 'Next';
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
                                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.sectionData.response_api_key);
                                for (const apiKey of apiKeys) {
                                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                    if (handlerData) {
                                        this.fromStore = fromStore = handlerData.value;
                                        break;
                                    }
                                }
                            }
                        }
                        break;
                    case 'HideRows':
                        this.hidenRows
                            = this.type === 'Table-Expandable-V2' ? paramter.value
                                .split('|').map(s => s.trim()) : [];
                        break;
                    case 'CEE_Inline_Edit_Step_Id':
                        this.inlineEditStepId = paramter.value;
                        break;
                    case 'expandTitle':
                        this.expandTitle
                            = this.type === 'Table-Expandable-V2' ? paramter.value : this.expandTitle;
                        break;
                    case 'collapseTitle':
                        this.collapseTitle
                            = this.type === 'Table-Expandable-V2' ? paramter.value : this.collapseTitle;
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
                    case 'Search_filter_All_Textboxes':
                        this.filterDateandText = true;
                        this.searchFilterHeaderTextbox = paramter.value.split("||");
                        break;
                    case 'Search_filter_All_Dates':
                        this.filterDateandText = true;
                        this.searchFilterHeaderDate = paramter.value.split("||");
                        break;
                    case 'Search_filter_checkbox':
                        this.filterDateandText = true;
                        this.checkboxFilter = true;
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
                    case 'CEE_COL_STICKY':
                        this.colSticky = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'CEE_COL_STICKY_END':
                        this.colStickyEnd = paramter.value.split('|').map(s => s.trim());
                        break;
                    case 'CEE_Drag_Drop_Rows':
                        this.dragDropTableRows = paramter.value === 'true' ? true : false;
                        break;
                    case 'Pagination Separator':
                        this.paginationSeparator = paramter.value.toLowerCase();
                        break;
                    case 'CEE_scroll_to_top_on_pagination':
                        this.scrollToTop = paramter.value === 'true' ? true : false;
                        break;
                    case 'CEE_Disable_Drag_Rows':
                        this.disableRowValues = paramter.value;
                    case 'CEE_Disable_Selection':
                        this.disableRowSelectionValues = paramter.value;
                }
            }
        }
        if (unique_id) {
            // let blockCache = this.wfeStepLoaderService.searchBlockDataFromCache(this.additionalParameters['default_value']);
            // if(blockCache) {
            //     this.processBlockData(blockCache,fromStore,event_list);
            // } else if(localStorage.getItem('lastBlockLoaded') != this.additionalParameters['default_value']) {
            //     localStorage.setItem('lastBlockLoaded', this.additionalParameters['default_value'])
            this.blockData = {};
            this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise().then((data) => {
                this.blockData = data;
                // let blockData = localStorage.getItem('blockDataCache') ? JSON.parse(localStorage.getItem('blockDataCache'))['data'] : [];
                // let cacheData = ( blockData && blockData.length > 0 ) ? blockData.filter(el => el.block_id == this.additionalParameters['default_value']) : [];
                // if(cacheData && cacheData.length == 0) {
                //     blockData.push({block_id: this.additionalParameters['default_value'], block_data: data});
                //     localStorage.setItem('blockDataCache', JSON.stringify({data : blockData}))
                // }
                // this.processBlockData(data,fromStore,event_list);
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
                if (this.serverPagination && this.paginationApiKeys.length !== 3) {
                    throw new Error('Sorry pagination api keys are not configured properly' +
                        'Format should be:' +
                        '<api_key_for_total_number_of_values>||<api_key_for_page_number>||<api_key_for_page_size>');
                }
                if (this.showPagination === LOAD_MORE) {
                    this.paginationPageIndex = 1;
                    this.paginationPageSize = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[2]);
                    this.paginationTotalCount = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[0]);
                    if (this.paginationPageSize?.value >= this.paginationTotalCount?.value && this.paginationTotalCount?.value > 0) {
                        this.SeemoreHide = false;
                    }
                    // if(this.paginationTotalCount?.value === 0) {
                    //     this.paginationPageSize.value = this.pageItems[0];
                    // }
                }
                else {
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
        if (this.type === this.tss) {
            // if (this.storeData.length > 0) {
            //     this.radioValue = this.storeData[0];
            // }
        }
        // if(this.showPagination === LOAD_MORE){
        //     this.isShowMoreClicked = true;
        // }
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
        // setTimeout(() => {
        //     var elem = document.getElementById("table-cell-inline-step");
        //     if(elem) {
        //         elem.scrollIntoView();
        //     }
        // }, 1000);
    }
    processBlockData(data, fromStore, event_list, skipOnLoad = false) {
        if (!this.fieldData) {
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
            this.fieldData = this.fieldDataBack = this.blockRenderedData.block_fields;
            // this.updateColumnConfig();
            // // this.applyRestructuring();
            // setTimeout(() => {
            //     this.applyRestructuring();
            //     this.cdRef.detectChanges();
            // }, 7000);
        }
        if (this.fieldData && this.fieldData.length > 0) {
            this.fieldData.forEach(x => {
                let filterObj = {
                    name: x.unique_id,
                    columnProp: x.response_api_key,
                };
                this.filterSelectObj.push(filterObj);
                if (x?.additional_parameters && x?.additional_parameters.length > 0) {
                    for (const paramter of x.additional_parameters) {
                        this.additionalParametersfields[paramter.parameter_type] = paramter.value;
                        switch (paramter.parameter_type) {
                            case 'CEE_table_cell_values':
                                x.field_label = x.field_label.includes('((dynamic))') ? this.setDynamicLabelUtil.getDynamicValue(x).field_label : x.field_label;
                                break;
                            case 'search_filter_header_text':
                                this.filterDateandText = true;
                                this.searchFilterHeaderTextbox.push(x.unique_id);
                                break;
                            case 'search_filter_header_date':
                                this.filterDateandText = true;
                                this.searchFilterHeaderDate.push(x.unique_id);
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
        if (this.filterDateandText == true) {
            this.getCheckboxfilterData(this.fieldData);
        }
        this.refreshColumnRowOnDataChange();
        if (this.dragDropTableRows && (this.type == this.tms || this.type == this.tss)) {
            this.displayedColumns.unshift('Rearrange');
            this.extraTableCell ? this.extraTableCell++ : this.extraTableCell = 1;
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
        if (!skipOnLoad && event_list && event_list.length > 0) {
            for (const sevent of JSON.parse(JSON.stringify(event_list))) {
                if (sevent.isDefault && sevent.event_name.toLowerCase() === 'onLoad'.toLowerCase()) {
                    this.wfeEventListHandler.switchEventDisplayType(sevent, event_list);
                }
            }
        }
        // console.log("All init Process Done!")
    }
    refreshColumnRowOnDataChange() {
        if (this.fieldData) {
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
        }
        if (this.dragDropTableRows && (this.type == this.tms || this.type == this.tss)) {
            this.displayedColumns.unshift('Rearrange');
            this.extraTableCell ? this.extraTableCell++ : this.extraTableCell = 1;
        }
        if (this.type == this.tss || this.type == this.tms) {
            this.displayedColumns.unshift('Select');
            this.extraTableCell = 1;
        }
        else if (this.type === 'Table-Expandable-V2') {
            this.displayedColumns.push('expandableOption');
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
        // For See More Button
        if (this.showPagination === LOAD_MORE) {
            if (this.pageItems.length > 0) {
                this.showSeeMore = this.totalCountAppData.value > this.pageItems[0];
            }
            else {
                this.showSeeMore = true;
            }
        }
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
            this.refreshColumnRowOnDataChange();
            this.onAPICallback(res);
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
            this.paginationTotalCount = totalPage;
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
        if (this.showPagination === LOAD_MORE) {
            if (totalPageObj && totalPageObj.hasOwnProperty('value') && this.paginationApiKeys && this.paginationApiKeys.length > 0 && this.paginationApiKeys[0] && this.paginationApiKeys[0].includes(res.handler_name)) {
                this.setTotalCountAppData(totalPageObj['value']);
            }
        }
        else {
            this.setTotalCountAppData(this.serverPagination && totalPageObj['value'] ? totalPageObj['value'] : this.apiData.length);
        }
        if (this.showPagination.toLowerCase() === 'true' && this.paginator) {
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
        }
        else if (this.showPagination.toLowerCase() === LOAD_MORE && this.paginator) {
            // DO ANY ADDITIONAL LOGIC FOR SEE MORE
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
        }
        if (!this.additionalParameters['Set from store'] || (this.additionalParameters['Set from store'] && this.additionalParameters['Set from store'].toLowerCase() != 'true')) {
            const timeoutId = setTimeout(() => {
                this.updateColumnConfig();
                this.applyRestructuring();
                this.cdRef.detectChanges();
            }, 1000);
            this.timeoutIds.push(timeoutId);
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
                if (this.additionalParameters['CEE_Disable_Selection']) {
                    rdata['isSelectable'] = !this.shouldDisableSelectionForRow(rdata);
                }
                else {
                    rdata['isSelectable'] = true;
                }
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
            data['rowData'] = {};
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
        if (this.showPagination.toLowerCase() !== LOAD_MORE) {
            this.dataSource = new MatTableDataSource();
        }
        this.setDefaultSort();
        if (!this.serverSort) {
            this.dataSource.sort = this.sort;
        }
        // this.showSkeletonLoader = false;
        this.loaded = true;
        this.onResize();
        this.lazyLoading();
        if (this.filterDateandText == true) {
            this.dataSource.filterPredicate = this.createFilter();
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
                    if (field.response_api_key.length > 0) {
                        data[field.response_api_key] = dynamicVal;
                    }
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
        }
        this.rowDataLoading = true;
        this.lazyInterval = setInterval(() => {
            const timeoutId = setTimeout(() => {
                this.cdRef.detectChanges();
            }, 0);
            this.timeoutIds.push(timeoutId);
            if (this.tableData.length !== this.tableDataLazy.length) {
                this.tableDataLazy.push(this.tableData[this.tableDataLazy.length]);
                if (this.showPagination === LOAD_MORE) {
                    if (this.isShowMoreClicked === true) {
                        this.appendDataOnSeeMoreClicked([...this.tableData]);
                        this.isShowMoreClicked = false;
                    }
                    else if (this.isMatSortClicked) {
                        this.isMatSortClicked = false;
                        this.dataSource.data = this.tableData;
                    }
                    else {
                        this.dataSource.data = this.tableData;
                    }
                }
                else {
                    this.dataSource.data = this.tableDataLazy;
                }
                this.cdRef.detectChanges();
            }
            else if (this.showPagination === LOAD_MORE && this.tableData.length == 0 && this.tableDataLazy.length == 0) {
                // When Table data is empty after deleting all the records, sets the empty data.
                this.dataSource.data = this.tableData;
                this.cdRef.detectChanges();
            }
            else {
                this.rowDataLoading = false;
                this.showSkeletonLoader = false;
                clearInterval(this.lazyInterval);
                this.lazyInterval = null;
                this.setSelection();
                // Hide the modal popup loader if it running
                const modalWrapper = window.document.querySelector('.loader-overlay');
                if (modalWrapper) {
                    modalWrapper.style.visibility = 'hidden';
                }
            }
        }, 0);
    }
    appendDataOnSeeMoreClicked(newData) {
        // Get the current data
        const currentData = this.dataSource.data;
        // Concatenate new data with existing data
        const updatedData = [...currentData, ...newData];
        // Set the updated data back to the dataSource
        this.dataSource.data = updatedData;
    }
    setSelection() {
        let data;
        if (this.primaryKeyRes) {
            const handlerData = this.apiDataService.getApiDataByHandler(this.primaryKeyRes.split('##')[0]);
            if (handlerData && handlerData.value) {
                data = this.setAPIKeyUtil.setApiCallBackData(this.primaryKeyRes, handlerData.value);
                this.selection.clear();
                this.dataSource.data.forEach((row) => {
                    if (data.includes(row[this.getValueformKey(this.primaryKeyVal)])) {
                        this.selection.select(row);
                    }
                });
                // this.storeData = this.selection.selected;
            }
        }
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
        this.variableObject = {};
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
            this.lazyInterval = null;
        }
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
            this.debounceTimeout = null;
        }
        // Clean up table data
        this.tableDataLazy = [];
        if (this.dataSource) {
            this.dataSource.data = [];
        }
        // Clean up component map observables
        for (const key in this.componentList) {
            if (this.componentList[key]) {
                delete this.componentList[key];
            }
        }
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        // Additional cleanup
        this.apiData = [];
        this.apiDataCopy = [];
        this.displayValues = [];
        this.storeData = [];
        this.checkedItems = [];
        this.filterValues = {};
        this.task = {};
    }
    checkCheckedValues() {
        // store the values of the checkedItems
        // if (this.type === this.tms) {
        //     if (this.storeData.length > 0) {
        //         this.checkedItems = [];
        //         for (const singleRes of this.displayValues) {
        //             if ((this.storeData).includes(singleRes)) {
        //                 this.checkedItems.push(singleRes);
        //             } else {
        //                 this.checkedItems.push({});
        //             }
        //         }
        //     }
        // }
    }
    list_change(data, isChecked) {
        if (this.primaryKeyValue && this.type === this.tms) {
            isChecked ? this.selection.select(data[this.primaryKeyValue]) : this.selection.deselect(data[this.primaryKeyValue]);
        }
        if (isChecked) {
            if (this.type === this.tss) {
                // this.storeData = [];
                this.radioValue = data;
            }
            // this.storeData.push(JSON.stringify(data));
        }
        else {
            // if (this.storeData.length > 0) {
            //     this.storeData.splice(this.storeData.indexOf(JSON.stringify(data)), 1);
            // }
        }
        this.storePrimaryKey();
    }
    clearMultiSelectColumnMappings() {
        // Check if MultiSelectColumnNames are present and clear their values
        const multiSelectColumns = this.additionalParameters?.['MultiSelectColumnNames'];
        if (multiSelectColumns) {
            const columnNames = multiSelectColumns.split('|').map(col => col.trim());
            // Clear each column mapping as separate entries in appDataService
            columnNames.forEach(columnName => {
                const mappingPropertyName = `${columnName}Mapping`;
                const columnAppData = {
                    id: mappingPropertyName,
                    stepId: this.stepId,
                    apiKey: mappingPropertyName,
                    requestApiKey: [],
                    responseApiKey: [],
                    value: [],
                    mandatory: false,
                    editable: false,
                    visible: true,
                    isValid: true
                };
                this.appDataService.setAppData({ ...columnAppData });
            });
        }
    }
    debounceTimeout;
    storePrimaryKey() {
        // for (const additionalParam of this.sectionData.additional_parameters) {
        //     if (additionalParam.parameter_type === 'PrimaryKeyName') {
        //         const primaryKeyValue = [];
        //         for (const data of this.storeData) {
        //             primaryKeyValue.push(data[this.getValueformKey(additionalParam.value)]);
        //         }
        //         const apiData = {
        //             id: this.getPrimaryKey(additionalParam.value),
        //             apiUrl: '',
        //             apiKey: this.getPrimaryKey(additionalParam.value),
        //             value: (this.type === 'Table-Single-Select' ? primaryKeyValue[0] : primaryKeyValue)
        //         };
        //         this.apiDataService.setApiData(Object.assign({}, apiData));
        //         setTimeout(() => {
        //             this.onComponentEvent('OnChangeValue');
        //             this.emitForFieldsSectionBlock(apiData);
        //         }, 0);
        //     }
        // }
        if (this.debounceTimeout) {
            clearTimeout(this.debounceTimeout);
        }
        this.debounceTimeout = setTimeout(() => {
            // Get column names from additionalParameters
            const multiSelectColumns = this.additionalParameters?.['MultiSelectColumnNames'];
            let columnMappings = {};
            if (multiSelectColumns) {
                // Clear previous mappings
                this.clearMultiSelectColumnMappings();
                // Parse pipe-separated column names
                const columnNames = multiSelectColumns.split('|').map(col => col.trim());
                // Create mapping for each column and store separately in appDataService
                columnNames.forEach(columnName => {
                    const columnValues = [];
                    this.selection.selected.forEach(selectedId => {
                        // Find the original row data from dataSource using the selected ID
                        const originalRow = this.dataSource.data.find(row => row[this.primaryKeyValue] === selectedId);
                        if (originalRow) {
                            let columnValue = null;
                            // Check if the column exists and has a value
                            if (originalRow[columnName] !== undefined && originalRow[columnName] !== null) {
                                columnValue = originalRow[columnName].toString();
                            }
                            columnValues.push(columnValue);
                        }
                    });
                    // Store each column mapping as separate entry in appDataService
                    const mappingPropertyName = `${columnName}Mapping`;
                    const columnAppData = {
                        id: mappingPropertyName,
                        stepId: this.stepId,
                        apiKey: mappingPropertyName,
                        requestApiKey: [],
                        responseApiKey: [],
                        value: columnValues,
                        mandatory: false,
                        editable: false,
                        visible: true,
                        isValid: true
                    };
                    this.appDataService.setAppData({ ...columnAppData });
                });
            }
            // Store primary key data separately in apiDataService (without column mappings)
            const apiData = {
                id: this.primaryKeyName,
                apiUrl: '',
                apiKey: this.primaryKeyName,
                value: (this.type === 'Table-Single-Select' ? this.selection.selected[0] : this.selection.selected)
            };
            this.apiDataService.setApiData({ ...apiData });
            this.onComponentEvent('OnChangeValue');
            this.emitForFieldsSectionBlock(apiData);
        }, 50);
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
            this.sharedEventsService.emitOnApplyFilter.emit({
                source: this.sectionData.unique_id,
                highlight: this.filterValue.trim().toLowerCase()
            });
        }
        this.selection.clear();
        // this.storeData = this.selection.selected;
        this.storePrimaryKey();
        if (this.dataSource.paginator) {
            this.dataSource.paginator.firstPage();
        }
        this.onComponentEvent('OnFilterClick');
    }
    /** Whether one or more rows are selected. */
    isIndeterminateSelected() {
        const SelectableItems = this.dataSource.data.filter(function (el) { return el['isSelectable'] == true; })
            .map(r => r[this.primaryKeyValue]);
        let iFound = false;
        for (let i = 0; i < SelectableItems.length; i++) {
            if (this.selection.selected.includes(SelectableItems[i])) {
                iFound = true;
            }
        }
        // console.log(SelectableItems,this.selection.selected, allFound);
        return iFound;
    }
    /** Whether the number of selected elements matches the total number of rows. */
    // isAllSelected() {
    //     const SelectableItems = this.dataSource.data.filter(function (el) {return el['isSelectable']==true})
    //     .map(r => r[this.primaryKeyValue]);
    //     let allFound = true;
    //     for (let i = 0; i < SelectableItems.length; i++) {
    //         if (!this.selection.selected.includes(SelectableItems[i]))
    //         {
    //             allFound = false;
    //             break;
    //         }            
    //     }
    //     // console.log(SelectableItems,this.selection.selected, allFound);
    //     return allFound;
    // }
    isAllSelected() {
        const selectedIds = new Set(this.selection.selected);
        const selectableItems = this.dataSource.data
            .filter(item => item['isSelectable'])
            .map(item => item[this.primaryKeyValue]);
        return selectableItems.every(id => selectedIds.has(id));
    }
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle() {
        if (this.isAllSelected()) {
            this.dataSource.data.forEach((row) => {
                if (this.primaryKeyValue && row['isSelectable']) {
                    this.selection.deselect(row[this.primaryKeyValue]);
                }
            });
        }
        else {
            this.dataSource.data.forEach((row) => {
                if (this.primaryKeyValue && row['isSelectable']) {
                    this.selection.select(row[this.primaryKeyValue]);
                }
            });
        }
        // this.isAllSelected() ?
        //     this.selection.clear() :
        //     this.dataSource.data.forEach((row) => {
        //         if(this.primaryKeyValue && row['isSelectable'])
        //         {
        //             this.selection.select(row[this.primaryKeyValue])
        //         }
        //     });
        // this.storeData = this.selection.selected;
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
    onNexPageChange(event) {
        this.pageIndex = this.pageIndex + 1;
        this.isShowMoreClicked = true;
        event.nextPage();
        let obj = {
            pageIndex: this.pageIndex,
            pageSize: event.pageSize,
            length: event.length
        };
        this.onPaginationChange(obj);
    }
    onNextPageChange(paginator) {
        this.nextPageIndex = this.nextPageIndex + 1;
        const nextPageIndex = this.nextPageIndex;
        this.isShowMoreClicked = true;
        // console.log('total',this.paginationTotalCount);
        // console.log("paginator.getNumberOfPages()--",paginator.getNumberOfPages());
        // var paginationTotalCount = this.apiDataService.getApiDataByApiKey(this.paginationApiKeys[0]);
        if (nextPageIndex <= this.paginationTotalCount || nextPageIndex <= paginator.length) {
            paginator.pageIndex = nextPageIndex;
            const event = {
                pageIndex: 1,
                pageSize: (paginator.pageSize * nextPageIndex) + this.pageItems[0],
                length: paginator.length > 0 ? paginator.length : this.paginationTotalCount
            };
            this.pageEvent = event;
            if ((paginator.pageSize * nextPageIndex) + this.pageItems[0] >= this.paginationTotalCount) {
                this.SeemoreHide = false;
            }
            // Emit manually if you're using a function to fetch data
            this.onPaginationChange(event);
            // event.nextPage()
        }
        else {
            var obj = {
                name: this.paginationApiKeys[1],
                value: Number(1)
            };
            this.setPrimaryKey(obj);
        }
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
                            value: this.isShowMoreClicked ? Number(event[key]) : Number(event[key]) + 1
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
        if (this.scrollToTop) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            document.documentElement.scrollTop = 0;
            document.body.scrollTop = 0;
        }
    }
    /**
     * function to trigger an event for clicking on the list cell
     * @param data single cell data
     */
    listCellClick(data, iscontextMenu = false) {
        // checking the unique ids and storing the data
        this.displayedFields.forEach((field) => {
            if (data[field.unique_id] !== undefined && field.field_type !== "Menu" && field.field_type !== 'ToggleButton') {
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
        // if (this.primaryKeyVal && this.type != 'Table-Multi-Select-V2') {
        //     this.setPrimaryKey({
        //         name: this.primaryKeyVal,
        //         value: data[this.primaryKeyVal]
        //     });
        // }
        if (!iscontextMenu) {
            for (const event of JSON.parse(JSON.stringify(this.listCellEventConfig))) {
                if (event.isDefault && event.event_name.toLowerCase() === 'onclick') {
                    this.wfeEventListHandler.switchEventDisplayType(event, this.listCellEventConfig);
                }
            }
        }
        this.sharedEventsService.tableCellDataSet.emit(true);
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
                // this.storeData = this.selection.selected;
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
    //filter checkbox select all
    updateAllComplete() {
        this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
    }
    //filter checkbox select
    someComplete() {
        if (this.task.subtasks == null) {
            return false;
        }
        return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
    }
    //filter checkbox select all
    setAll(completed) {
        this.allComplete = completed;
        if (this.task.subtasks == null) {
            return;
        }
        this.task.subtasks.forEach(t => (t.completed = completed));
    }
    //filter checkbox select on basis change will happen
    toggleFilterBox() {
        this.togglefilterBox = !this.togglefilterBox;
        if (this.togglefilterBox == false) {
            this.searchFilterHeaderTextbox = [];
            this.searchFilterHeaderDate = [];
            this.task.subtasks.forEach(x => {
                if (x.completed == true && x.value == "textbox") {
                    this.searchFilterHeaderTextbox.push(x.name);
                }
                if (x.completed == true && x.value == "date") {
                    this.searchFilterHeaderDate.push(x.name);
                }
            });
        }
    }
    //check filters applied
    getCheckboxfilterData(fields) {
        this.task = {
            name: 'Toggle All',
            completed: false,
            subtasks: [],
        };
        let subtasks = [];
        fields.forEach(x => {
            let complete = false;
            let value = '';
            if (this.searchFilterHeaderTextbox.includes(x.unique_id)) {
                complete = true;
                value = 'textbox';
            }
            if (this.searchFilterHeaderDate.includes(x.unique_id)) {
                complete = true;
                value = 'date';
            }
            let task = {
                name: x.unique_id,
                completed: complete,
                value: value
            };
            subtasks.push(task);
        });
        this.task.subtasks = subtasks;
    }
    createFilter() {
        let filterFunction = function (data, filter) {
            let searchTerms = JSON.parse(filter);
            let isFilterSet = false;
            for (const col in searchTerms) {
                if (searchTerms[col].toString() !== '') {
                    isFilterSet = true;
                }
                else {
                    delete searchTerms[col];
                }
            }
            let nameSearch = () => {
                let found = false;
                if (isFilterSet) {
                    for (const col in searchTerms) {
                        searchTerms[col].trim().toLowerCase().split(' ').forEach(word => {
                            if (data[col].toString().toLowerCase().indexOf(word) != -1 && isFilterSet) {
                                found = true;
                            }
                        });
                    }
                    return found;
                }
                else {
                    return true;
                }
            };
            return nameSearch();
        };
        return filterFunction;
    }
    filterChange(f, value, type) {
        if (type == "date") {
            value = value != null ? moment.default(new Date(value).toISOString()).format('M/D/YYYY') : '';
        }
        this.filterValues[f.response_api_key] = value.trim().toLowerCase();
        this.dataSource.filter = JSON.stringify(this.filterValues);
    }
    //   resetFilters() {
    //     this.filterValues = {}
    //     this.filterSelectObj.forEach((value, key) => {
    //       value.modelValue = undefined;
    //     })
    //     this.dataSource.filter = "";
    //   }
    isHTML(content) {
        return /<[a-z][\s\S]*>/i.test(content);
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
    transformString(i, input, gBlockId) {
        let parts = input.split('|');
        let result = [];
        parts.map(x => {
            result.push(`${gBlockId}$${x}$${i}`);
        });
        return result.join('|');
    }
    // Generic function to handle both drag-and-drop and selection disabling
    shouldDisableRowForAction(row, disableValues, actionType) {
        if (!disableValues) {
            return actionType === 'drag' ? !this.dragDropTableRows : false;
        }
        try {
            // Split the disable values into individual conditions
            const conditions = disableValues.split("||");
            // Iterate over each condition
            for (const condition of conditions) {
                const [keyPart, valuePart] = condition.split("|");
                // Skip if the condition is invalid (missing key or value)
                if (!keyPart || !valuePart)
                    continue;
                // Get the API keys related to the key part
                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(keyPart);
                // Iterate over each API key
                for (const apiKey of apiKeys) {
                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split("##")[0]);
                    // Skip if no valid handler data or value
                    if (!handlerData || !handlerData.value)
                        continue;
                    // Extract the field path and get the last part (field name)
                    const fieldPath = apiKey.split("##").length > 1 ? apiKey.split("##")[1] : "";
                    const fieldParts = fieldPath.split(".");
                    const fieldName = fieldParts[fieldParts.length - 1];
                    // Get the value of the field in the row
                    const rowFieldValue = row[fieldName];
                    // Enhanced comparison to handle boolean/string conversions
                    if (rowFieldValue !== undefined && this.compareValues(rowFieldValue, valuePart)) {
                        // console.log(`Row ${row[this.primaryKeyVal]} disabled for ${actionType}: ${fieldName}=${rowFieldValue}`);
                        return true;
                    }
                }
            }
            return false;
        }
        catch (error) {
            console.error(`Error checking if row needs to be disabled for ${actionType}:`, error);
            return false;
        }
    }
    // Helper function to handle value comparison with type conversion
    compareValues(rowValue, compareValue) {
        // Direct string comparison
        if (String(rowValue) === String(compareValue)) {
            return true;
        }
        // Handle boolean to string conversions
        if (rowValue === true && (compareValue === "1" || compareValue.toLowerCase() === "true")) {
            return true;
        }
        if (rowValue === false && (compareValue === "0" || compareValue.toLowerCase() === "false")) {
            return true;
        }
        return false;
    }
    // Updated shouldDisableDragAndDropForRow to use the generic function
    shouldDisableDragAndDropForRow(row) {
        return this.shouldDisableRowForAction(row, this.disableRowValues, 'drag');
    }
    // Updated shouldDisableSelectionForRow to use the generic function
    shouldDisableSelectionForRow(row) {
        return this.shouldDisableRowForAction(row, this.disableRowSelectionValues, 'selection');
    }
    static ɵfac = function CeeTableV2Component_Factory(t) { return new (t || CeeTableV2Component)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTableV2Component, selectors: [["app-cee-table-v2"]], viewQuery: function CeeTableV2Component_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(MatPaginator, 5);
            i0.ɵɵviewQuery(MatSort, 5);
            i0.ɵɵviewQuery(CdkDropList, 7);
            i0.ɵɵviewQuery(SortableHeaderDirective, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.paginator = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.sort = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dropList = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.headers = _t);
        } }, hostBindings: function CeeTableV2Component_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function CeeTableV2Component_scroll_HostBindingHandler($event) { return ctx.onScroll($event); });
        } }, inputs: { stepId: "stepId", paginateValue: "paginateValue", fieldData: "fieldData", sectionData: "sectionData", type: "type", rowData: "rowData", rootData: "rootData", primaryKeyIndex: "primaryKeyIndex" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], ["scrollContainer", ""], ["table", ""], ["basicDatepicker", ""], ["page", ""], [3, "scroll", 4, "ngIf"], [3, "scroll"], ["floatLabel", "never", 4, "ngIf"], ["mat-mini-fab", "", "aria-label", "filterIcon", 3, "click", 4, "ngIf"], ["class", "filter-box", 4, "ngIf"], ["aria-describedby", "Skeleton Loader", "mat-table", "", 3, "dataSource", "class", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary btn-sm mb-1", "title", "Column Filter", 3, "click", 4, "ngIf"], ["class", "show-hide-container col-3 mt-20 d-none", 3, "id", 4, "ngIf"], ["cdkScrollable", "", 1, "table-container"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", "cdkDropList", "", "cdkDropListData", "data", "cdkDropListScrollContainer", "scrollContainer", "cdkDropListAutoScrollDisabled", "false", 3, "dataSource", "class", "ngClass", "id", "resize", "matSortChange", "click", "cdkDropListDropped", 4, "ngIf"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 3, "dataSource", "class", "ngClass", "id", "resize", "matSortChange", "click", 4, "ngIf"], ["class", "no-data-info", 4, "ngIf"], ["showFirstLastButtons", "", 3, "pageSizeOptions", "page", 4, "ngIf"], ["class", "seeMoreContainer", 4, "ngIf"], ["floatLabel", "never"], ["matInput", "", 3, "keyup", "ngModelChange", "placeholder", "ngModel"], ["mat-mini-fab", "", "aria-label", "filterIcon", 3, "click"], ["aria-hidden", "false", "aria-label", "icon", "fontIcon", "filter"], [1, "filter-box"], [1, ""], ["color", "primary", 1, "example-margin", 3, "change", "checked", "indeterminate"], [1, "example-list-section"], [4, "ngFor", "ngForOf"], ["color", "primary", 3, "ngModelChange", "ngModel"], ["aria-describedby", "Skeleton Loader", "mat-table", "", 3, "dataSource"], [3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", "class", "cee-table-row", 4, "matRowDef", "matRowDefColumns"], [3, "matColumnDef"], ["mat-header-cell", "", "scope", "col", 4, "matHeaderCellDef"], ["mat-cell", "", "class", "loading", 4, "matCellDef"], ["mat-header-cell", "", "scope", "col"], ["mat-cell", "", 1, "loading"], [1, "bar"], ["mat-header-row", ""], ["mat-row", "", 1, "cee-table-row"], ["type", "button", "title", "Column Filter", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [1, "show-hide-container", "col-3", "mt-20", "d-none", 3, "id"], ["class", "text-secondary m-2", 4, "ngIf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger m-2", 4, "ngIf"], ["mat-button", "", 1, "btn", "btn-outline-primary", "m-2", 3, "click"], ["mat-button", "", 1, "btn", "btn-primary", "m-2", 3, "click"], [1, "text-secondary", "m-2"], ["cdkDrag", "", 1, "example-box", 3, "ngClass"], ["class", "w-100 drag-content", 4, "ngIf"], ["class", "w-100 drag-content p-1", 4, "ngIf"], [1, "w-100", "drag-content"], [3, "ngModelChange", "ngModel", "disabled"], [1, "w-100", "drag-content", "p-1"], [1, "text-danger", "m-2"], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", "cdkDropList", "", "cdkDropListData", "data", "cdkDropListScrollContainer", "scrollContainer", "cdkDropListAutoScrollDisabled", "false", 3, "resize", "matSortChange", "click", "cdkDropListDropped", "dataSource", "ngClass", "id"], ["matColumnDef", "Select"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "Rearrange"], ["mat-header-cell", "", "scope", "col", "class", "drag-column-header", 4, "matHeaderCellDef"], [3, "matColumnDef", "sticky", "stickyEnd", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["matColumnDef", "expandableOption"], ["matColumnDef", "expandedResp"], ["matColumnDef", "expandedDetail"], ["matColumnDef", "expandedStep"], ["mat-cell", "", "id", "table-cell-inline-step", 4, "matCellDef"], ["mat-header-row", "", "class", "cee-table-header", 4, "matHeaderRowDef"], ["mat-row", "", "cdkDrag", "", 3, "id", "cdkDragData", "cdkDragDisabled", "class", "click", "contextmenu", 4, "matRowDef", "matRowDefColumns"], ["mat-row", "", 3, "class", 4, "matRowDef", "matRowDefColumns"], [4, "ngIf"], ["id", "check_static", 1, "table-checkbox", 3, "change", "checked", "disabled", "indeterminate", "aria-label"], ["mat-cell", ""], ["name", "radio"], [1, "table-radio", 3, "change", "id", "value", "checked", "disabled"], [1, "table-checkbox", 3, "change", "name", "id", "disabled", "checked"], ["mat-header-cell", "", "scope", "col", 1, "drag-column-header"], [1, "mat-drag-icon", 3, "ngClass"], [1, "drag-custom-icon"], [3, "matColumnDef", "sticky", "stickyEnd"], ["mat-cell", "", 3, "click", 4, "matCellDef"], ["mat-header-cell", "", "scope", "col", 3, "resizeColumn", "index", 4, "matHeaderCellDef"], ["mat-header-cell", "", "scope", "col", 3, "resizeColumn", "index"], [3, "sort", "ngClass", "sortable", "sorting"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col", "disableClear", "", 4, "matHeaderCellDef"], ["mat-header-cell", "", "mat-sort-header", "", "scope", "col", "disableClear", ""], [1, "input_filter_box"], [1, "width_clear"], ["class", "width_clear", 4, "ngIf"], ["matInput", "", "type", "text", 3, "keyup", "placeholder"], [3, "dateChange", "matDatepicker"], [3, "for"], ["mat-cell", "", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [2, "visibility", "hidden"], ["mat-button", "", 1, "cee-table-expandable-option", 3, "click"], [3, "class", 4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "cee-table-detail-cell", 4, "ngIf"], [1, "cee-table-detail-cell"], [2, "height", "0px", "min-height", "0px"], [1, "hidden-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], ["mat-cell", "", "id", "table-cell-inline-step"], [3, "stepId", "startSession", 4, "ngIf"], [3, "stepId", "startSession"], ["mat-header-row", "", 1, "cee-table-header"], ["mat-row", "", "cdkDrag", "", 3, "click", "contextmenu", "id", "cdkDragData", "cdkDragDisabled"], ["mat-row", ""], ["aria-describedby", "Data Table", "mat-table", "", "matSort", "", "multiTemplateDataRows", "", 3, "resize", "matSortChange", "click", "dataSource", "ngClass", "id"], [3, "matColumnDef", "sticky", "stickyEnd", 4, "ngFor", "ngForOf"], ["mat-row", "", 3, "id", "class", "click", "contextmenu", 4, "matRowDef", "matRowDefColumns"], [1, "table-checkbox", 3, "change", "name", "id", "disabled", "checked", "aria-label"], [3, "innerHTML"], ["mat-row", "", 3, "click", "contextmenu", "id"], [1, "no-data-info"], ["showFirstLastButtons", "", 3, "page", "pageSizeOptions"], [1, "seeMoreContainer"], ["showFirstLastButtons", "", 2, "visibility", "hidden", 3, "page", "pageSizeOptions", "pageSize"], ["mat-button", "", "class", "seeMoreButton", 3, "click", 4, "ngIf"], ["mat-button", "", 1, "seeMoreButton", 3, "click"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["class", "cee-table-detail-label", 4, "ngIf"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [1, "cee-table-detail-label"], [3, "sectionData", "rootData", "rowData", "stepId", "type"], ["class", " cee-table-detail-label", 4, "ngIf"]], template: function CeeTableV2Component_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTableV2Component_ng_container_0_Template, 15, 11, "ng-container", 5)(1, CeeTableV2Component_ng_template_1_Template, 13, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible && (ctx.fieldData == null ? null : ctx.fieldData.length) > 0);
        } }, dependencies: () => [CeeTableV2Component, MatSortModule, i12.MatSort, i12.MatSortHeader, DragDropModule, i13.CdkScrollable, i14.CdkDropList, i14.CdkDrag, MatFormFieldModule, i15.MatFormField, i15.MatLabel, MatInputModule, i16.MatInput, MatIconModule, i17.MatIcon, MatDatepickerModule, i18.MatDatepicker, i18.MatDatepickerInput, i18.MatDatepickerToggle, CommonModule, i19.NgClass, i19.NgComponentOutlet, i19.NgForOf, i19.NgIf, i19.NgTemplateOutlet, i19.NgSwitch, i19.NgSwitchCase, i19.NgSwitchDefault, i19.AsyncPipe, MatCheckboxModule, i20.MatCheckbox, FormsModule, i21.DefaultValueAccessor, i21.NgControlStatus, i21.NgModel, MatRadioModule, i22.MatRadioGroup, i22.MatRadioButton, MatPaginatorModule, i23.MatPaginator, MatTableModule, i24.MatTable, i24.MatHeaderCellDef, i24.MatHeaderRowDef, i24.MatColumnDef, i24.MatCellDef, i24.MatRowDef, i24.MatHeaderCell, i24.MatCell, i24.MatHeaderRow, i24.MatRow, ResizeColumnDirective, SortableHeaderDirective, BlockRendererComponent, TooltipModule, StepRendererComponent, CdkScrollableModule], styles: ["@charset \"UTF-8\";table[_ngcontent-%COMP%]{width:100%}tr.cee-step-row[_ngcontent-%COMP%], tr.cee-detail-row[_ngcontent-%COMP%], tr.cee-resp-row[_ngcontent-%COMP%]{height:0}.cee-step-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .cee-table-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .cee-resp-row[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]{border-bottom-width:0}.cee-table-detail[_ngcontent-%COMP%], .cee-table-resp[_ngcontent-%COMP%]{overflow:hidden;display:flex}.cee-table-detail[_ngcontent-%COMP%]{transition:max-height 2s;max-height:1000px}.cee-table-detail.collapsed[_ngcontent-%COMP%]{max-height:0}.cee-table-resp[_ngcontent-%COMP%]{height:0}.cee-table-detail-label[_ngcontent-%COMP%]{font-weight:500;display:inline}.cee-table-detail-cell[_ngcontent-%COMP%]{padding:5px 0;margin-right:10px}table[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]{position:relative;padding-left:30px;cursor:pointer}table[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]:before{top:50%;left:5px;height:14px;width:14px;margin-top:-9px;display:block;position:absolute;color:#fff;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:14px;content:\"+\";background-color:#31b131}table[_ngcontent-%COMP%]   tr.parent[_ngcontent-%COMP%]   td.r-control[_ngcontent-%COMP%]:before{content:\"-\";background-color:#d33333}@keyframes _ngcontent-%COMP%_loading{40%{background-position:100% 0}to{background-position:100% 0}}.loading[_ngcontent-%COMP%]{position:relative}.loading[_ngcontent-%COMP%]   .bar[_ngcontent-%COMP%]{background-color:#e7e7e7;height:14px;border-radius:7px;width:80%}.loading[_ngcontent-%COMP%]:after{position:absolute;transform:translateY(-50%);top:50%;left:0;content:\"\";display:block;width:100%;height:24px;background-image:linear-gradient(100deg,#fff0,#ffffff80 60%,#fff0 80%);background-size:200px 24px;background-position:-100px 0;background-repeat:no-repeat;animation:_ngcontent-%COMP%_loading 1s infinite}.expandTable[_ngcontent-%COMP%]{width:100%}.expandTable.resizing[_ngcontent-%COMP%]{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:col-resize}.expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{position:relative}.expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:last-child)   .resize-holder[_ngcontent-%COMP%]{cursor:col-resize;width:20px;height:100%;position:absolute;right:-10px;top:0;z-index:1}.expandTable[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%]:not(:nth-child(1)), .expandTable[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]:not(:nth-child(1)){padding:0 10px}span[_ngcontent-%COMP%]{cursor:pointer;user-select:none;-webkit-user-select:none;display:flex}span.ce-label.case[_ngcontent-%COMP%]:hover:after{content:\"\\2191\"}span.ce-label.asc[_ngcontent-%COMP%]:after{content:\"\\2191\"}span.ce-label.desc[_ngcontent-%COMP%]:after{content:\"\\2193\"}.input_filter_box[_ngcontent-%COMP%]{width:100%!important}.width_clear[_ngcontent-%COMP%]{float:left}.filter-box[_ngcontent-%COMP%]{z-index:1000;background-color:#fff;width:40%;position:absolute;display:flex;flex-direction:column;gap:10px;box-shadow:0 2.8px 2.2px #00000009,0 6.7px 5.3px #0000000c,0 12.5px 10px #0000000f,0 22.3px 17.9px #00000012,0 41.8px 33.4px #00000016,0 100px 80px #0000001f}.example-list-section[_ngcontent-%COMP%]{display:flex;flex-wrap:wrap}.show-hide-container[_ngcontent-%COMP%]{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list[_ngcontent-%COMP%]{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.drag-icon[_ngcontent-%COMP%]{position:relative}.drag-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:move}i.disable[_ngcontent-%COMP%]{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box[_ngcontent-%COMP%]{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"], data: { animation: [
                trigger('detailExpand', [
                    state('collapsed', style({ height: '0px', minHeight: '0' })),
                    state('expanded', style({ height: '*' })),
                    transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                ]),
            ] }, changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTableV2Component, [{
        type: Component,
        args: [{ selector: 'app-cee-table-v2', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, animations: [
                    trigger('detailExpand', [
                        state('collapsed', style({ height: '0px', minHeight: '0' })),
                        state('expanded', style({ height: '*' })),
                        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
                    ]),
                ], imports: [MatSortModule, DragDropModule, MatFormFieldModule, MatInputModule, MatIconModule, MatDatepickerModule, CommonModule, MatCheckboxModule, FormsModule, MatRadioModule, MatPaginatorModule, NgSwitch, MatTableModule, NgClass, ResizeColumnDirective, SortableHeaderDirective, forwardRef(() => BlockRendererComponent), TooltipModule, CdkDropList, CdkDrag, forwardRef(() => StepRendererComponent), CdkScrollableModule], template: "<ng-container *ngIf=\"isVisible && fieldData?.length > 0\" (scroll)=\"onScroll($event)\">\r\n    <mat-form-field *ngIf=\"showFilter\" floatLabel=\"never\">\r\n        <input matInput (keyup)=\"applyFilter()\" placeholder=\"{{filterPlaceholderText}}\" [(ngModel)]=\"filterValue\">\r\n    </mat-form-field>\r\n    <button mat-mini-fab aria-label=\"filterIcon\" (click)=\"toggleFilterBox()\" *ngIf=\"checkboxFilter\">\r\n        <mat-icon aria-hidden=\"false\" aria-label=\"icon\" fontIcon=\"filter\"></mat-icon>\r\n    </button>\r\n    <div class=\"filter-box\" *ngIf=\"togglefilterBox\">\r\n        <span class=\"\">\r\n            <mat-checkbox class=\"example-margin\" [checked]=\"allComplete\" color=\"primary\"\r\n                [indeterminate]=\"someComplete()\" (change)=\"setAll($event.checked)\">\r\n                {{task.name}}\r\n            </mat-checkbox>\r\n        </span>\r\n        <span class=\"example-list-section\">\r\n            <div *ngFor=\"let subtask of task.subtasks; let i = index\">\r\n                <mat-checkbox [(ngModel)]=\"subtask.completed\" color=\"primary\" (ngModelChange)=\"updateAllComplete()\">\r\n                    {{subtask.name}}\r\n                </mat-checkbox>\r\n            </div>\r\n        </span>\r\n    </div>\r\n    <!-- ######################## Table For Skeleton Loader ########################### -->\r\n    <table aria-describedby=\"Skeleton Loader\"\r\n        *ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true'\" mat-table\r\n        [dataSource]=\"dataSourceLoading\"\r\n        class=\"{{sectionData.field_style?sectionData.field_style.custom_class_name:''}}\">\r\n        <ng-container matColumnDef=\"{{f}}\" *ngFor=\"let f of displayedColumns; let i = index\">\r\n            <th mat-header-cell *matHeaderCellDef scope=\"col\"> {{fieldData[i] && fieldData[i].field_label}} </th>\r\n            <td mat-cell class=\"loading\" *matCellDef=\"let element\">\r\n                <div class=\"bar\"></div>\r\n            </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row class=\"cee-table-row\" *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n    <!-- ################## Show Hide & Rearrange Column Filter #################### -->\r\n    <div><button type=\"button\" class=\"btn btn-secondary btn-sm mb-1\" title=\"Column Filter\"\r\n            *ngIf=\"columnFilterType.indexOf('none') == -1\"\r\n            (click)=\"showHideFilter('show-hide-container-',sectionData.unique_id)\">\u2630</button></div>\r\n    <div id=\"show-hide-container-{{sectionData.unique_id}}\" class=\"show-hide-container col-3 mt-20 d-none\"\r\n        *ngIf=\"columnFilterType.indexOf('none') == -1\">\r\n        <div><label *ngIf=\"sectionData.field_label\" class=\"text-secondary m-2\">{{sectionData.field_label}}\r\n                Setting</label></div>\r\n        <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"drop($event)\">\r\n            <div class=\"example-box\" [ngClass]=\"{'d-none': !columnShowHideRearrange[i].isVisible}\"\r\n                *ngFor=\"let f of columnShowHideRearrange; let i = index\" cdkDrag>\r\n                <div class=\"w-100 drag-content\" *ngIf=\"columnFilterType.indexOf('showhide') != -1\">\r\n                    <mat-checkbox [(ngModel)]=\"columnShowHideRearrange[i].showColumn\"\r\n                        [disabled]=\"columnShowHideRearrange[i].isMandatory\">{{f.field_label}}</mat-checkbox>\r\n                </div>\r\n                <div class=\"w-100 drag-content p-1\" *ngIf=\"columnFilterType.indexOf('showhide') == -1\">\r\n                    <label>{{f.field_label}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div><label *ngIf=\"filterErrorMsg\" class=\"text-danger m-2\">{{filterErrorMsg}}</label></div>\r\n        <button mat-button class=\"btn btn-outline-primary m-2\" (click)=\"resetRestructuring()\">Cancel</button>\r\n        <button mat-button class=\"btn btn-primary m-2\" (click)=\"applyRestructuring()\">Save</button>\r\n    </div>\r\n    <!-- ######################## Data Table ########################### -->\r\n    <div class=\"table-container\" cdkScrollable #scrollContainer>\r\n        <!-- ######################## Data Table With Drag & Drop Rows  ########################### -->\r\n        <table aria-describedby=\"Data Table\"\r\n            *ngIf=\"(dragDropTableRows && ((!showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true') || !additionalParameters['ShowSkeletonLoader'] || additionalParameters['ShowSkeletonLoader']?.toLowerCase() != 'true'))\"\r\n            mat-table #table [dataSource]=\"dataSource\" matSort multiTemplateDataRows\r\n            class=\"{{isCustomClass && sectionData.field_style?sectionData.field_style.custom_class_name:''}}\"\r\n            [ngClass]=\"{'expandTable': this.dynamicColumnWidth}\" id=\"table_{{sectionData.unique_id}}\"\r\n            (window:resize)=\"onResize()\" (matSortChange)=\"this.onResize(); matSortChange($event); \"\r\n            (click)=\"triggerSeeMore()\" cdkDropList (cdkDropListDropped)=\"dropRow($event)\" cdkDropListData=\"data\" cdkDropListScrollContainer=\"scrollContainer\" cdkDropListAutoScrollDisabled=\"false\">\r\n            <ng-container matColumnDef=\"Select\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\">\r\n                    <ng-container *ngIf=\"type == tms\">\r\n                        <mat-checkbox id=\"check_static\" class=\"table-checkbox\" (change)=\"$event ? masterToggle() : null\"\r\n                            [checked]=\"selection.hasValue() && isAllSelected()\" [disabled]=\"isSeletable=='0'\"\r\n                            [indeterminate]=\"isIndeterminateSelected() && !isAllSelected()\"\r\n                            [aria-label]=\"checkboxLabel()\">\r\n                        </mat-checkbox>\r\n                    </ng-container>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <ng-container *ngIf=\"type == tss && (data.isSelectable || disableRowSelectionValues !== '')\">\r\n                        <mat-radio-group name=\"radio\">\r\n                            <mat-radio-button id=\"radio_{{position}}\" class=\"table-radio\" [value]=\"data\"\r\n                                (change)=\"list_change(data, true)\" [checked]=\"data == radioValue\"\r\n                                [disabled]=\"!data.isSelectable\" [attr.aria-label]=\"'Select '+position\">\r\n                            </mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"type == tms && (data.isSelectable || disableRowSelectionValues !== '')\">\r\n                    <mat-checkbox\r\n                        name=\"check_{{ position }}\"\r\n                        id=\"check_{{ position }}\"\r\n                        class=\"table-checkbox\"\r\n                        (change)=\"list_change(data, $event.checked)\"\r\n                        [disabled]=\"!data.isSelectable\"\r\n                        [checked]=\"primaryKeyValue ? selection.isSelected(data[primaryKeyValue]) : false\"\r\n                        [attr.aria-label]=\"checkboxLabel(data)\">\r\n                    </mat-checkbox>\r\n                    </ng-container>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"Rearrange\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\" class=\"drag-column-header\">\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <ng-container *ngIf=\"dragDropTableRows\" >\r\n                        <mat-icon [ngClass]=\"data.isSelectable ? 'example-drag-cursor' : 'example-drag-cursor-disable'\" class=\"mat-drag-icon\">reorder</mat-icon>\r\n                        <span class=\"drag-custom-icon\">\r\n                        </span>\r\n                    </ng-container>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container [matColumnDef]=\"f.unique_id\"\r\n                *ngFor=\"let f of fieldData; let i = index; trackBy: trackByunique_id;\"\r\n                [sticky]=\"colSticky.includes(f.unique_id)\" [stickyEnd]=\"colStickyEnd.includes(f.unique_id)\">\r\n                <ng-container *ngIf=\"this.dynamicColumnWidth\">\r\n                    <th mat-header-cell *matHeaderCellDef [resizeColumn]=\"f.resizable\" [index]=\"i + extraTableCell\"\r\n                        scope=\"col\">\r\n                        <span [ngClass]=\"f.sorting == true ? 'ce-label case' : 'ce-label'\" sortable={{f.unique_id}}\r\n                            sorting={{f.sorting}} (sort)=\"onSort($event)\">{{f.field_label}}</span>\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!this.dynamicColumnWidth\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                        [attr.disabled]=\"isSortingDisabled(f.unique_id)\" scope=\"col\" disableClear>\r\n                        <div class=\"input_filter_box\">\r\n                            <div class=\"width_clear\">{{f.field_label}}</div>\r\n                            <div class=\"width_clear\" *ngIf=\"searchFilterHeaderTextbox.includes(f.unique_id)\">\r\n                                <input matInput type=\"text\" (keyup)=\"filterChange(f, $event.target.value, 'text')\"\r\n                                    placeholder=\"search {{f.unique_id}}\">\r\n                            </div>\r\n                            <div class=\"width_clear\" *ngIf=\"searchFilterHeaderDate.includes(f.unique_id)\">\r\n                                <mat-label>Choose a date</mat-label>\r\n                                <input [matDatepicker]=\"basicDatepicker\"\r\n                                    (dateChange)=\"filterChange(f, $event.target.value, 'date')\">\r\n                                <mat-datepicker-toggle [for]=\"basicDatepicker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #basicDatepicker></mat-datepicker>\r\n                            </div>\r\n                        </div>\r\n                    </th>\r\n                </ng-container>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\"\r\n                    (click)=\"(this.responsive && i === 0 && expandedElement === data)?expandedElement = null:''\">\r\n                    <ng-template\r\n                        *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data, method: listCellClick}\">\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandableOption\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\"><span style=\"visibility: hidden;\">Expandable\r\n                        Option</span></th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <button mat-button class=\"cee-table-expandable-option\"\r\n                        (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                        === data ? collapseTitle : expandTitle}}</button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedResp\">\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                    <div *ngIf=\"responsive\" class=\"cee-table-resp {{is_bootstrap?'row':''}}\">\r\n                        <ng-container *ngFor=\"let f of fieldData let i = index; trackBy: trackByunique_id;\">\r\n                            <div *ngIf=\"!hidenRows.includes(f.unique_id)\"\r\n                                class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                <ng-template\r\n                                    *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                </ng-template>\r\n                            </div>\r\n                        </ng-container>\r\n                        <div *ngIf=\"this.type === 'Table-Expandable-V2'\" class=\"cee-table-detail-cell\">\r\n                            <button mat-button class=\"cee-table-expandable-option\"\r\n                                (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                                === data ? collapseTitle : expandTitle}}</button>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedDetail\">\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                    <div class=\"cee-table-detail {{is_bootstrap && !tableHiddenGeneric?'row':''}} {{data !== expandedElement?'collapsed':''}}\"\r\n                        [@detailExpand]=\"data === expandedElement ? 'expanded' : 'collapsed'\"\r\n                        style=\"height: 0px; min-height: 0px;\">\r\n                        <ng-container *ngFor=\"let f of fieldData let i = index; trackBy: trackByunique_id;\">\r\n                            <ng-container *ngIf=\"hidenRows.includes(f.unique_id)\">\r\n                                <div\r\n                                    class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                    <ng-template\r\n                                        *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                    </ng-template>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"tableHiddenGeneric && hidenRows.length === 1\">\r\n                            <app-block-renderer [stepId]=\"stepId\" [templateId]=\"position\" [blockId]=\"hidenRows[0]\"\r\n                                class=\"hidden-content\" [blockPosition]=\"position\" [rootData]=\"rootData\">\r\n                            </app-block-renderer>\r\n                        </ng-container>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedStep\">\r\n                <td mat-cell id=\"table-cell-inline-step\" *matCellDef=\"let data; dataIndex as position\"\r\n                    [attr.colspan]=\"displayedColumns.length\">\r\n                    <!--  *ngIf=\"data[primaryKeyValue] == selectedPrimaryKeyVal\" -->\r\n                    <!-- {{inlineEditStepId}} /\r\n                    {{data[primaryKeyValue]}} == {{selectedPrimaryKeyVal}} -->\r\n                    <app-step-renderer *ngIf=\"data[primaryKeyValue] == selectedPrimaryKeyVal\"\r\n                        [stepId]=\"inlineEditStepId\" [startSession]=\"startSession\"></app-step-renderer>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"cee-table-header\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" id=\"table-row-{{row[primaryKeyValue]}}\" cdkDrag\r\n                [cdkDragData]=\"row\"\r\n                [cdkDragDisabled]=\"shouldDisableDragAndDropForRow(row)\"\r\n                class=\"cee-table-row {{expandedElement === row?'cee-expanded-row':''}} {{row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}} {{primaryKeyValue && type == tms ? (selection.selected.includes(row[primaryKeyValue])? 'table-item-checked' : 'table-item-unchecked') : ''}}\"\r\n                (click)=\"listCellClick(row)\" (contextmenu)=\"listCellClick(row, true)\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedResp']\"\r\n                class=\"cee-resp-row {{row && row.rowData && row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\"\r\n                class=\"cee-detail-row {{row && row.rowData && row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedStep']\"\r\n                class=\"cee-step-row {{row && row.rowData && row && row.rowData && row.rowData.conditionalCustomClass ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n        </table>\r\n        <!-- ######################## Data Table Without Drag & Drop Rows  ########################### -->\r\n        <table aria-describedby=\"Data Table\"\r\n            *ngIf=\"(!dragDropTableRows && ((!showSkeletonLoader && additionalParameters['ShowSkeletonLoader']?.toLowerCase() == 'true') || !additionalParameters['ShowSkeletonLoader'] || additionalParameters['ShowSkeletonLoader']?.toLowerCase() != 'true'))\"\r\n            mat-table #table [dataSource]=\"dataSource\" matSort multiTemplateDataRows\r\n            class=\"{{isCustomClass && sectionData.field_style?sectionData.field_style.custom_class_name:''}}\"\r\n            [ngClass]=\"{'expandTable': this.dynamicColumnWidth}\" id=\"table_{{sectionData.unique_id}}\"\r\n            (window:resize)=\"onResize()\" (matSortChange)=\"this.onResize(); matSortChange($event);\"\r\n            (click)=\"triggerSeeMore()\">\r\n            <ng-container matColumnDef=\"Select\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\">\r\n                    <ng-container *ngIf=\"type == tms\">\r\n                        <mat-checkbox id=\"check_static\" class=\"table-checkbox\" (change)=\"$event ? masterToggle() : null\"\r\n                            [checked]=\"selection.hasValue() && isAllSelected()\" [disabled]=\"isSeletable=='0'\"\r\n                            [indeterminate]=\"isIndeterminateSelected() && !isAllSelected()\"\r\n                            [aria-label]=\"checkboxLabel()\">\r\n                        </mat-checkbox>\r\n                    </ng-container>\r\n                </th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <ng-container *ngIf=\"type == tss && data.isSelectable\">\r\n                        <mat-radio-group name=\"radio\">\r\n                            <mat-radio-button id=\"radio_{{position}}\" class=\"table-radio\" [value]=\"data\"\r\n                                (change)=\"list_change(data, true)\" [checked]=\"data == radioValue\"\r\n                                [disabled]=\"isSeletable=='0'\" [attr.aria-label]=\"'Select '+position\">\r\n                            </mat-radio-button>\r\n                        </mat-radio-group>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"type == tms && data.isSelectable\">\r\n                        <mat-checkbox name=\"check_{{position}}\" id=\"check_{{position}}\" class=\"table-checkbox\"\r\n                            (change)=\"list_change(data, $event.checked);\" [disabled]=\"isSeletable=='0'\"\r\n                            [checked]=\"primaryKeyValue? selection.isSelected(data[primaryKeyValue]): false\"\r\n                            [aria-label]=\"checkboxLabel(data)\"></mat-checkbox>\r\n                    </ng-container>\r\n                </td>\r\n            </ng-container>\r\n            <ng-container [matColumnDef]=\"f.unique_id\" *ngFor=\"let f of fieldData; let i = index\"\r\n                [sticky]=\"colSticky.includes(f.unique_id)\" [stickyEnd]=\"colStickyEnd.includes(f.unique_id)\">\r\n                <ng-container *ngIf=\"this.dynamicColumnWidth\">\r\n                    <th mat-header-cell *matHeaderCellDef [resizeColumn]=\"f.resizable\" [index]=\"i + extraTableCell\"\r\n                        scope=\"col\">\r\n                        <span [ngClass]=\"f.sorting == true ? 'ce-label case' : 'ce-label'\" sortable={{f.unique_id}}\r\n                            sorting={{f.sorting}} (sort)=\"onSort($event)\">{{f.field_label}}</span>\r\n                    </th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!this.dynamicColumnWidth\">\r\n                    <th mat-header-cell *matHeaderCellDef mat-sort-header\r\n                        [attr.disabled]=\"isSortingDisabled(f.unique_id)\" scope=\"col\" disableClear>\r\n                        <div class=\"input_filter_box\">\r\n                            <ng-container *ngIf=\"isHTML(f.field_label) == true\">\r\n                                <span [innerHTML]=\"f.field_label\"></span>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"isHTML(f.field_label) == false\">\r\n                                <div class=\"width_clear\">{{f.field_label}}</div>\r\n                            </ng-container>\r\n                            <!-- <div class=\"width_clear\">{{f.field_label}}</div> -->\r\n                            <div class=\"width_clear\" *ngIf=\"searchFilterHeaderTextbox.includes(f.unique_id)\">\r\n                                <input matInput type=\"text\" (keyup)=\"filterChange(f, $event.target.value, 'text')\"\r\n                                    placeholder=\"search {{f.unique_id}}\">\r\n                            </div>\r\n                            <div class=\"width_clear\" *ngIf=\"searchFilterHeaderDate.includes(f.unique_id)\">\r\n                                <mat-label>Choose a date</mat-label>\r\n                                <input [matDatepicker]=\"basicDatepicker\"\r\n                                    (dateChange)=\"filterChange(f, $event.target.value, 'date')\">\r\n                                <mat-datepicker-toggle [for]=\"basicDatepicker\"></mat-datepicker-toggle>\r\n                                <mat-datepicker #basicDatepicker></mat-datepicker>\r\n                            </div>\r\n                        </div>\r\n                    </th>\r\n                </ng-container>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\"\r\n                    (click)=\"(this.responsive && i === 0 && expandedElement === data)?expandedElement = null:''\">\r\n                    <ng-template\r\n                        *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data, method: listCellClick}\">\r\n                    </ng-template>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandableOption\">\r\n                <th mat-header-cell *matHeaderCellDef scope=\"col\"><span style=\"visibility: hidden;\">Expandable\r\n                        Option</span></th>\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\">\r\n                    <button mat-button class=\"cee-table-expandable-option\"\r\n                        (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                        === data ? collapseTitle : expandTitle}}</button>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedResp\">\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                    <div *ngIf=\"responsive\" class=\"cee-table-resp {{is_bootstrap?'row':''}}\">\r\n                        <ng-container *ngFor=\"let f of fieldData\">\r\n                            <div *ngIf=\"!hidenRows.includes(f.unique_id)\"\r\n                                class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                <ng-template\r\n                                    *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                </ng-template>\r\n                            </div>\r\n                        </ng-container>\r\n                        <div *ngIf=\"this.type === 'Table-Expandable-V2'\" class=\"cee-table-detail-cell\">\r\n                            <button mat-button class=\"cee-table-expandable-option\"\r\n                                (click)=\"expandedElement = expandedElement === data ? null : data; setPrimaryKey({name: primaryKeyVal, value: data[primaryKeyVal]})\">{{expandedElement\r\n                                === data ? collapseTitle : expandTitle}}</button>\r\n                        </div>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedDetail\">\r\n                <td mat-cell *matCellDef=\"let data; dataIndex as position\" [attr.colspan]=\"displayedColumns.length\">\r\n                    <div class=\"cee-table-detail {{is_bootstrap && !tableHiddenGeneric?'row':''}} {{data !== expandedElement?'collapsed':''}}\"\r\n                        [@detailExpand]=\"data === expandedElement ? 'expanded' : 'collapsed'\"\r\n                        style=\"height: 0px; min-height: 0px;\">\r\n                        <ng-container *ngFor=\"let f of fieldData\">\r\n                            <ng-container *ngIf=\"hidenRows.includes(f.unique_id)\">\r\n                                <div\r\n                                    class=\"cee-table-detail-cell {{commonUtil.bootstrapColClass(f.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(f))}}\">\r\n                                    <ng-template\r\n                                        *ngTemplateOutlet=\"cellData; context:{f:f,position:position,data:data,expandedDetail:true, method: listCellClick}\">\r\n                                    </ng-template>\r\n                                </div>\r\n                            </ng-container>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"tableHiddenGeneric && hidenRows.length === 1\">\r\n                            <app-block-renderer [stepId]=\"stepId\" [templateId]=\"position\" [blockId]=\"hidenRows[0]\"\r\n                                class=\"hidden-content\" [blockPosition]=\"position\" [rootData]=\"rootData\">\r\n                            </app-block-renderer>\r\n                        </ng-container>\r\n                    </div>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"expandedStep\">\r\n                <td mat-cell id=\"table-cell-inline-step\" *matCellDef=\"let data; dataIndex as position\"\r\n                    [attr.colspan]=\"displayedColumns.length\">\r\n                    <!--  *ngIf=\"data[primaryKeyValue] == selectedPrimaryKeyVal\" -->\r\n                    <!-- {{inlineEditStepId}} /\r\n                    {{data[primaryKeyValue]}} == {{selectedPrimaryKeyVal}} -->\r\n                    <app-step-renderer *ngIf=\"data[primaryKeyValue] == selectedPrimaryKeyVal\"\r\n                        [stepId]=\"inlineEditStepId\" [startSession]=\"startSession\"></app-step-renderer>\r\n                </td>\r\n            </ng-container>\r\n\r\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\" class=\"cee-table-header\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" id=\"table-row-{{row[primaryKeyValue]}}\"\r\n                class=\"cee-table-row {{expandedElement === row?'cee-expanded-row':''}} {{row.rowData ? row.rowData.conditionalCustomClass : ''}} {{primaryKeyValue && type == tms ? (selection.selected.includes(row[primaryKeyValue])? 'table-item-checked' : 'table-item-unchecked') : ''}}\"\r\n                (click)=\"listCellClick(row)\" (contextmenu)=\"listCellClick(row, true)\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedResp']\"\r\n                class=\"cee-resp-row {{row.rowData ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedDetail']\"\r\n                class=\"cee-detail-row {{row.rowData ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n            <tr mat-row *matRowDef=\"let row; columns: ['expandedStep']\"\r\n                class=\"cee-step-row {{row.rowData ? row.rowData.conditionalCustomClass : ''}}\"></tr>\r\n        </table>\r\n    </div>\r\n    <div class=\"no-data-info\" *ngIf=\"loaded && dataSource.filteredData.length === 0\">{{noDataFoundLabel}}</div>\r\n    <mat-paginator *ngIf=\"showPagination == 'true'\" [pageSizeOptions]=\"pageItems\" (page)=\"onPaginationChange($event)\"\r\n        showFirstLastButtons>\r\n    </mat-paginator>\r\n    <!-- More Button (outside the mat-table but inside the table element) -->\r\n    <div *ngIf=\"showPagination == 'load_more' && showSeeMore\" class=\"seeMoreContainer\">\r\n        <mat-paginator #page style=\"visibility:hidden\" [pageSizeOptions]=\"pageItems\" (page)=\"pageEvent = $event\"\r\n            [pageSize]=\"pageItems[0]\" showFirstLastButtons></mat-paginator>\r\n        <button mat-button *ngIf=\"SeemoreHide\" (click)=\"onNextPageChange(page)\"\r\n            class=\"seeMoreButton\">{{paginationNextLabel}}</button>\r\n    </div>\r\n</ng-container>\r\n\r\n\r\n<ng-template #cellData let-f='f' let-position='position' let-data='data' let-expandedDetail='expandedDetail'\r\n    let-method='method'>\r\n    <ng-container [ngSwitch]=\"f.field_type\">\r\n        <ng-container *ngSwitchCase=\"'label'\">\r\n            <label *ngIf=\"expandedDetail && f.field_label\" class=\"cee-table-detail-label\">{{f.field_label}}<span>:\r\n                </span></label>\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-label [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-label> -->\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'Attachments'\">\r\n            <label *ngIf=\"expandedDetail && f.field_label\" class=\"cee-table-detail-label\">{{f.field_label}}<span>:\r\n                </span></label>\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Button'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-button [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-button> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Image'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-image [rowData]=\"data['rowData'][f.unique_id]\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-image> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id],keepState: true, fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-toggle-button [fieldData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" [sectionData]=\"sectionData\"\r\n                class=\"field-{{ position }}\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-toggle-button> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Picker'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-picker [stepId]=\"stepId\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData'][f.unique_id]\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-picker> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Menu'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], fieldData: f, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: {data, fields: displayedFields}},\r\n\t\t\t\t}\"></ng-container>\r\n            </div>\r\n            <!-- <app-cee-menu [stepId]=\"stepId\" [fieldData]=\"f\" class=\"field-{{ position }}\"\r\n                [rowData]=\"data['rowData'][f.unique_id]\"\r\n                [primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'table', cellData: { 'data': data, 'fields': displayedFields}}\">\r\n            </app-cee-menu> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'Table-V2'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <app-cee-table-v2 [sectionData]=\"f\" [rootData]=\"rootData\" [rowData]=\"data['rowData'][f.unique_id]\"\r\n                    [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n                </app-cee-table-v2>\r\n            </div>\r\n        </ng-container>\r\n\r\n        <ng-container\r\n            *ngSwitchCase=\"f.field_type === 'List-V2' || f.field_type === 'List-Expandable-V2' ? f.field_type : '' \">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container\r\n                    *ngComponentOutlet=\"componentMap['List-V2'] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f, type: f.field_type}\"></ng-container>\r\n            </div>\r\n            <!-- <app-list-renderer-v2 [sectionData]=\"f\" [rootData]=\"rootData\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n            </app-list-renderer-v2> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'TreeView'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container\r\n                    *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f, type: f.field_type}\"></ng-container>\r\n            </div>\r\n            <!-- <app-tree-renderer [sectionData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\"\r\n                [stepId]=\"stepId\" [type]=\"f.field_type\">\r\n            </app-tree-renderer> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchCase=\"'DynamicForm'\">\r\n            <div class=\"field-{{ position }}\">\r\n                <ng-container\r\n                    *ngComponentOutlet=\"componentMap[f.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: data['rowData'][f.unique_id], sectionData: f}\"></ng-container>\r\n            </div>\r\n            <!-- <app-dynamic-form [sectionData]=\"f\" [rowData]=\"data['rowData'][f.unique_id]\" class=\"field-{{ position }}\" [stepId]=\"stepId\" [rootData]=\"rootData\">\r\n            </app-dynamic-form> -->\r\n        </ng-container>\r\n\r\n        <ng-container *ngSwitchDefault>\r\n            <div *ngIf='expandedDetail' class=\" cee-table-detail-label\">{{f.field_label}}<span>: </span></div>\r\n            {{data['rowData'][f.unique_id]?.value}}\r\n        </ng-container>\r\n\r\n    </ng-container>\r\n</ng-template>", styles: ["@charset \"UTF-8\";table{width:100%}tr.cee-step-row,tr.cee-detail-row,tr.cee-resp-row{height:0}.cee-step-row td,.cee-table-row td,.cee-resp-row td{border-bottom-width:0}.cee-table-detail,.cee-table-resp{overflow:hidden;display:flex}.cee-table-detail{transition:max-height 2s;max-height:1000px}.cee-table-detail.collapsed{max-height:0}.cee-table-resp{height:0}.cee-table-detail-label{font-weight:500;display:inline}.cee-table-detail-cell{padding:5px 0;margin-right:10px}table td.r-control{position:relative;padding-left:30px;cursor:pointer}table td.r-control:before{top:50%;left:5px;height:14px;width:14px;margin-top:-9px;display:block;position:absolute;color:#fff;border:2px solid white;border-radius:14px;box-shadow:0 0 3px #444;box-sizing:content-box;text-align:center;text-indent:0!important;font-family:Courier New,Courier,monospace;line-height:14px;content:\"+\";background-color:#31b131}table tr.parent td.r-control:before{content:\"-\";background-color:#d33333}@keyframes loading{40%{background-position:100% 0}to{background-position:100% 0}}.loading{position:relative}.loading .bar{background-color:#e7e7e7;height:14px;border-radius:7px;width:80%}.loading:after{position:absolute;transform:translateY(-50%);top:50%;left:0;content:\"\";display:block;width:100%;height:24px;background-image:linear-gradient(100deg,#fff0,#ffffff80 60%,#fff0 80%);background-size:200px 24px;background-position:-100px 0;background-repeat:no-repeat;animation:loading 1s infinite}.expandTable{width:100%}.expandTable.resizing{-moz-user-select:none;-ms-user-select:none;-webkit-user-select:none;user-select:none;cursor:col-resize}.expandTable .mat-header-cell{position:relative}.expandTable .mat-header-cell:not(:last-child) .resize-holder{cursor:col-resize;width:20px;height:100%;position:absolute;right:-10px;top:0;z-index:1}.expandTable .mat-cell:not(:nth-child(1)),.expandTable .mat-header-cell:not(:nth-child(1)){padding:0 10px}span{cursor:pointer;user-select:none;-webkit-user-select:none;display:flex}span.ce-label.case:hover:after{content:\"\\2191\"}span.ce-label.asc:after{content:\"\\2191\"}span.ce-label.desc:after{content:\"\\2193\"}.input_filter_box{width:100%!important}.width_clear{float:left}.filter-box{z-index:1000;background-color:#fff;width:40%;position:absolute;display:flex;flex-direction:column;gap:10px;box-shadow:0 2.8px 2.2px #00000009,0 6.7px 5.3px #0000000c,0 12.5px 10px #0000000f,0 22.3px 17.9px #00000012,0 41.8px 33.4px #00000016,0 100px 80px #0000001f}.example-list-section{display:flex;flex-wrap:wrap}.show-hide-container{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container{width:100%;display:flex;align-items:center}.drag-icon{position:relative}.drag-icon i{cursor:move}i.disable{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
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
        }], dropList: [{
            type: ViewChild,
            args: [CdkDropList, { static: true }]
        }], onScroll: [{
            type: HostListener,
            args: ['scroll', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTableV2Component, { className: "CeeTableV2Component", filePath: "lib\\field-components\\cee-table-v2\\cee-table-v2.component.ts", lineNumber: 83 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRhYmxlLXYyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS10YWJsZS12Mi9jZWUtdGFibGUtdjIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlLXYyL2NlZS10YWJsZS12Mi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFxQix1QkFBdUIsRUFBRyxLQUFLLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBeUMsWUFBWSxFQUFFLFVBQVUsRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDdk0sT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDZCQUE2QixDQUFDO0FBSXZELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBRTVFLE9BQU8sRUFBRSxZQUFZLEVBQUUsa0JBQWtCLEVBQWEsTUFBTSw2QkFBNkIsQ0FBQztBQUUxRixPQUFPLEVBQUUsT0FBTyxFQUFFLGFBQWEsRUFBd0IsTUFBTSx3QkFBd0IsQ0FBQztBQUN0RixPQUFPLEVBQVksa0JBQWtCLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDdkYsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNqRixPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFNMUQsT0FBTyxFQUFFLG1CQUFtQixF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QUFDLHVCQUF1QjtZQU9aLFNBQVM7a0JBQWpDLFNBQVM7bUJBQUMsWUFBWTtZQUNILElBQUk7a0JBQXZCLFNBQVM7bUJBQUMsT0FBTztZQTRDd0IsUUFBUTtrQkFBakQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFO1lBNGV4QyxRQUFRO2tCQURQLFlBQVk7bUJBQUMsUUFBUSxFQUFFLENBQUMsUUFBUSxDQUFDOztrRkFoakJ6QixtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSAsIElucHV0LCBWaWV3Q2hpbGQsIEhvc3RMaXN0ZW5lciwgQ2hhbmdlRGV0ZWN0b3JSZWYsIFZpZXdSZWYsIFF1ZXJ5TGlzdCwgVmlld0NoaWxkcmVuLCBmb3J3YXJkUmVmLCBBZnRlclZpZXdJbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbnN0YW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbnN0YW50Lm1vZGVsJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTZXRBUElDYWxsYmFja0RhdGEgfSBmcm9tICcuLi8uLi91dGlscy9zZXQtYXBpLWNhbGxiYWNrLWRhdGEtdXRpbCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFBhZ2luYXRvciwgTWF0UGFnaW5hdG9yTW9kdWxlLCBQYWdlRXZlbnQgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9wYWdpbmF0b3InO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IE1hdFNvcnQsIE1hdFNvcnRNb2R1bGUsIFNvcnQsIFNvcnREaXJlY3Rpb24gIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc29ydCc7XHJcbmltcG9ydCB7IE1hdFRhYmxlLCBNYXRUYWJsZURhdGFTb3VyY2UsIE1hdFRhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdGFibGUnO1xyXG5pbXBvcnQgeyBhbmltYXRlLCBzdGF0ZSwgc3R5bGUsIHRyYW5zaXRpb24sIHRyaWdnZXIgfSBmcm9tICdAYW5ndWxhci9hbmltYXRpb25zJztcclxuaW1wb3J0IHsgU2VsZWN0aW9uTW9kZWwgfSBmcm9tICdAYW5ndWxhci9jZGsvY29sbGVjdGlvbnMnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgV0ZFRXZlbnRMaXN0SGFuZGxlciB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1ldmVudC1saXN0LWhhbmRsZXItdXRpbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IEFQSUtleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9hcGkta2V5LXV0aWwnO1xyXG5pbXBvcnQgalF1ZXJ5IGZyb20gJ2pxdWVyeSc7XHJcbmltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXV0aWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGFiZWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHluYW1pYy1sYWJlbC11dGlsJztcclxuaW1wb3J0IHtTb3J0YWJsZUhlYWRlckRpcmVjdGl2ZSwgU29ydEV2ZW50LCBjb21wYXJlfSBmcm9tICcuL2NlZS10YWJsZS12Mi1zb3J0aW5nLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRDaGVja2JveE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NoZWNrYm94JztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdFJhZGlvTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcmFkaW8nO1xyXG4vLyBpbXBvcnQgeyBDZWVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1idXR0b24vY2VlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVMYWJlbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nQ2xhc3MsIE5nU3dpdGNoIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuLy8gaW1wb3J0IHsgQ2VlSW1hZ2VDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1pbWFnZS9jZWUtaW1hZ2UuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlVG9nZ2xlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdG9nZ2xlLWJ1dHRvbi9jZWUtdG9nZ2xlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1waWNrZXIvY2VlLXBpY2tlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVNZW51Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbWVudS9jZWUtbWVudS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbG9ja1JlbmRlcmVyQ29tcG9uZW50LCBTdGVwUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9uZy1jZWUtY29yZS5tb2R1bGUnO1xyXG4vLyBpbXBvcnQgeyBEeW5hbWljRm9ybUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvZHluYW1pYy1mb3JtL2R5bmFtaWMtZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBSZXNpemVDb2x1bW5EaXJlY3RpdmUgfSBmcm9tICcuL2NlZS10YWJsZS12Mi1yZXNpemUtY29sdW1uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG4vLyBpbXBvcnQgeyBUcmVlUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3RyZWUtcmVuZGVyZXIvdHJlZS1yZW5kZXJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBMaXN0UmVuZGVyZXJDb21wb25lbnRWMiB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1yZW5kZXJlci12Mi9saXN0LXJlbmRlcmVyLXYyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IExpc3RSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1yZW5kZXJlci9saXN0LXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5pbXBvcnQge01hdERhdGVwaWNrZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RhdGVwaWNrZXInO1xyXG5pbXBvcnQge01hdEljb25Nb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgKiBhcyBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgZGVmZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHtcclxuICAgIENka0RyYWcsXHJcbiAgICBDZGtEcmFnRHJvcCxcclxuICAgIENka0Ryb3BMaXN0LFxyXG4gICAgRHJhZ0Ryb3BNb2R1bGUsXHJcbiAgICBtb3ZlSXRlbUluQXJyYXksXHJcbn0gZnJvbSAnQGFuZ3VsYXIvY2RrL2RyYWctZHJvcCc7XHJcbmltcG9ydCAgY2xvbmVkZWVwIGZyb20gJ2xvZGFzaC5jbG9uZWRlZXAnO1xyXG5pbXBvcnQgeyBDZGtTY3JvbGxhYmxlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3Njcm9sbGluZyc7XHJcbiBcclxuZXhwb3J0IGludGVyZmFjZSBQZXJpb2RpY0VsZW1lbnQgeyB9XHJcblxyXG52YXIgRUxFTUVOVF9EQVRBOiBQZXJpb2RpY0VsZW1lbnRbXSA9IEFycmF5KDEwKTtcclxudmFyIExPQURfTU9SRSA9ICdsb2FkX21vcmUnO1xyXG4vLyBpZiB5b3Ugd2FudCB0byB1c2UgJCBhcyBhbiBhbGlhc1xyXG5jb25zdCAkID0galF1ZXJ5XHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLXRhYmxlLXYyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtdGFibGUtdjIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLXRhYmxlLXYyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBhbmltYXRpb25zOiBbXHJcbiAgICAgICAgdHJpZ2dlcignZGV0YWlsRXhwYW5kJywgW1xyXG4gICAgICAgICAgICBzdGF0ZSgnY29sbGFwc2VkJywgc3R5bGUoeyBoZWlnaHQ6ICcwcHgnLCBtaW5IZWlnaHQ6ICcwJyB9KSksXHJcbiAgICAgICAgICAgIHN0YXRlKCdleHBhbmRlZCcsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxyXG4gICAgICAgICAgICB0cmFuc2l0aW9uKCdleHBhbmRlZCA8PT4gY29sbGFwc2VkJywgYW5pbWF0ZSgnMjI1bXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpJykpLFxyXG4gICAgICAgIF0pLFxyXG4gICAgXSxcclxuICAgIGltcG9ydHMgOiBbTWF0U29ydE1vZHVsZSwgRHJhZ0Ryb3BNb2R1bGUsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdERhdGVwaWNrZXJNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIEZvcm1zTW9kdWxlLCBNYXRSYWRpb01vZHVsZSwgTWF0UGFnaW5hdG9yTW9kdWxlLCBOZ1N3aXRjaCwgTWF0VGFibGVNb2R1bGUsIE5nQ2xhc3MsIFJlc2l6ZUNvbHVtbkRpcmVjdGl2ZSwgU29ydGFibGVIZWFkZXJEaXJlY3RpdmUsIGZvcndhcmRSZWYoKCkgPT4gQmxvY2tSZW5kZXJlckNvbXBvbmVudCksIFRvb2x0aXBNb2R1bGUsIENka0Ryb3BMaXN0LCBDZGtEcmFnLCBmb3J3YXJkUmVmKCgpID0+IFN0ZXBSZW5kZXJlckNvbXBvbmVudCksIENka1Njcm9sbGFibGVNb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlVGFibGVWMkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdJbml0IHtcclxuXHJcbiAgICBhdXRvUHJldmlld0NvbmZpZ1BhdGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRU5BQkxFX0FVVE9fUFJFVklFVycpPy50b0xvd2VyQ2FzZSgpID09IFwidHJ1ZVwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBVVRPX1BSRVZJRVdfQ09ORklHX1BBVEgnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBVVRPX1BSRVZJRVdfQ09ORklHX1BBVEgnKSA6ICdhc3NldHMvY29uZmlnJztcclxuICAgIGNvbmZpZ0Jsb2NrUGF0aCA9IHRoaXMuYXV0b1ByZXZpZXdDb25maWdQYXRoICsgJy9hcHBsaWNhdGlvbl9ibG9ja3MvYXBwbGljYXRpb25fYmxvY2tzXyc7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBwYWdpbmF0ZVZhbHVlOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzZWN0aW9uRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSB0eXBlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcHJpbWFyeUtleUluZGV4OiBhbnk7XHJcbiAgICAvLyBAVmlld0NoaWxkKCd0YWJsZWRkJywge3N0YXRpYzogdHJ1ZX0pIHRhYmxlZGQ6IE1hdFRhYmxlPFBlcmlvZGljRWxlbWVudD47XHJcbiAgICBzb3J0RGlyZWN0aW9uOiBzdHJpbmcgPSAnJztcclxuICAgIGRhdGFTb3VyY2VMb2FkaW5nOiBhbnkgPSBFTEVNRU5UX0RBVEE7XHJcbiAgICBkYXRhU291cmNlID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZShbXSk7XHJcbiAgICBkaXNwbGF5ZWRDb2x1bW5zOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgQFZpZXdDaGlsZHJlbihTb3J0YWJsZUhlYWRlckRpcmVjdGl2ZSloZWFkZXJzOiBRdWVyeUxpc3Q8U29ydGFibGVIZWFkZXJEaXJlY3RpdmU+O1xyXG4gICAgaGlkZW5Sb3dzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZXhwYW5kZWRFbGVtZW50O1xyXG4gICAgZXhwYW5kVGl0bGU6IHN0cmluZyA9ICdTaG93JztcclxuICAgIGNvbGxhcHNlVGl0bGU6IHN0cmluZyA9ICdIaWRlJztcclxuICAgIFNlZW1vcmVIaWRlOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHBhZ2VJdGVtczogbnVtYmVyW107XHJcbiAgICBAVmlld0NoaWxkKE1hdFBhZ2luYXRvcikgcGFnaW5hdG9yOiBNYXRQYWdpbmF0b3I7XHJcbiAgICBAVmlld0NoaWxkKE1hdFNvcnQpIHNvcnQ6IE1hdFNvcnQ7XHJcbiAgICBzaG93UGFnaW5hdGlvbjogc3RyaW5nID0gJyc7XHJcbiAgICBzaG93RmlsdGVyOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBmaWx0ZXJQbGFjZWhvbGRlclRleHQ6IHN0cmluZyA9ICdGaWx0ZXInO1xyXG4gICAgc2VsZWN0aW9uID0gbmV3IFNlbGVjdGlvbk1vZGVsKHRydWUsIFtdKTtcclxuICAgIHNob3dTa2VsZXRvbkxvYWRlcjogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBhcGlEYXRhOiBhbnlbXSA9IFtdO1xyXG4gICAgYXBpRGF0YUNvcHk6IGFueVtdID0gW107XHJcbiAgICBkaXNwbGF5VmFsdWVzOiBhbnkgPSBbXTtcclxuICAgIHJhZGlvVmFsdWU6IGFueTtcclxuICAgIGNoZWNrZWRJdGVtczogYW55ID0gW107XHJcbiAgICBuZXh0UGFnZUluZGV4OiBudW1iZXIgPSAwO1xyXG4gICAgc3RvcmVEYXRhOiBhbnkgPSBbXTtcclxuICAgIHByaW1hcnlLZXlWYWwgPSAnJztcclxuICAgIHByaW1hcnlLZXlOYW1lID0gJyc7XHJcbiAgICBwcmltYXJ5S2V5VmFsdWUgPSAnJztcclxuICAgIHByaW1hcnlLZXlSZXMgPSAnJztcclxuICAgIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgZXh0cmFUYWJsZUNlbGwgPSAwO1xyXG4gICAgYWRkaXRpb25hbFBhcmFtZXRlcnMgPSB7fTsgICBcclxuXHJcbiAgICBzZXRBUElLZXlVdGlsOiBTZXRBUElDYWxsYmFja0RhdGE7XHJcbiAgICB3ZmVFdmVudExpc3RIYW5kbGVyOiBXRkVFdmVudExpc3RIYW5kbGVyO1xyXG4gICAgaGlkZW5Sb3dzRmllbGQ6IE9iamVjdDtcclxuICAgIHRhYmxlSGlkZGVuR2VuZXJpYzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgbG9hZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwYWdpbmF0aW9uTmV4dExhYmVsOiBzdHJpbmcgPSAnTmV4dCc7XHJcbiAgICBwYWdpbmF0aW9uUHJldmlvdXNMYWJlbDogc3RyaW5nID0gJ1ByZXZpb3VzJztcclxuICAgIG5vRGF0YUZvdW5kTGFiZWw6IHN0cmluZyA9ICdubyByZWNvcmQgZm91bmQuJztcclxuICAgIGVuYWJsZVNvcnQ6IHN0cmluZ1tdID0gW107XHJcbiAgICBzZXJ2ZXJQYWdpbmF0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwYWdpbmF0aW9uQXBpS2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIGZpbHRlckFQSUtleTogc3RyaW5nO1xyXG4gICAgcGFnaW5hdGlvblNob3dpbmdSZXN1bHRIaW50OiBzdHJpbmcgPSAnJXZhbHVlJSc7XHJcbiAgICBpc19ib290c3RyYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJvb3RzdHJhcF9jbGFzc19uYW1lOiBzdHJpbmc7XHJcbiAgICBibG9ja1JlbmRlcmVkRGF0YTogYW55O1xyXG4gICAgZmlsdGVyS2V5czogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbW1vblV0aWw6IENvbW1vblV0aWw7XHJcbiAgICBhcGlLZXlVdGlsOiBBUElLZXlVdGlsO1xyXG4gICAgcmVzcG9uc2l2ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNMaXN0Q2VsbCA9IGZhbHNlOyAvLyBzZXQgdHJ1ZSBpZiB0aGUgZmllbGRzIGluIGdlbmVyaWMgYmxvY2sgaXMgTGlzdENlbGxcclxuICAgIGxpc3RDZWxsRXZlbnRDb25maWcgPSBbXTsgLy8gc2V0IExpc3QgQ2VsbCBFdmVudCBDb25maWdcclxuICAgIGRpc3BsYXllZEZpZWxkcyA9IFtdOyAvLyB1bmlxdWUgSURzIGFycmF5IHdoZW4gdGhlIHVzZXIgY29uZmlndXJlcyBhIGxpc3QgY2VsbCBpbnNpZGUgdGhlIGdlbmVyaWMgYmxvY2tcclxuICAgIEBWaWV3Q2hpbGQoQ2RrRHJvcExpc3QsIHsgc3RhdGljOiB0cnVlIH0pIGRyb3BMaXN0OiBDZGtEcm9wTGlzdDtcclxuICAgIHRhYmxlQ2VsbEFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBmaWVsZExhYmVsOiAnJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgZGF0YUZvcm1hdFNlcGFyYXRvcjogJycsXHJcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBhcHBEYXRhOiBBcHBEYXRhID0ge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBzdGVwSWQ6ICcnLFxyXG4gICAgICAgIGFwaUtleTogJycsXHJcbiAgICAgICAgZmllbGRMYWJlbDogJycsXHJcbiAgICAgICAgbGlua2VkQmxvY2tJZDogJycsXHJcbiAgICAgICAgaXNSZXBlYXRlZEZpZWxkOiBmYWxzZSxcclxuICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgcmVxdWVzdEFwaUtleTogW10sXHJcbiAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICB9O1xyXG5wYWdpbmF0aW9uVG90YWxDb3VudFxyXG4gICAgdG90YWxDb3VudEFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6ICcnLFxyXG4gICAgICAgIHN0ZXBJZDogJycsXHJcbiAgICAgICAgYXBpS2V5OiAnJyxcclxuICAgICAgICBmaWVsZExhYmVsOiAnJyxcclxuICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgZGF0YUZvcm1hdFNlcGFyYXRvcjogJycsXHJcbiAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmlzaWJsZTogZmFsc2UsXHJcbiAgICAgICAgdmFsdWU6ICcnLFxyXG4gICAgICAgIGlzVmFsaWQ6IHRydWVcclxuICAgIH07XHJcbiAgICBjb25kaXRpb25hbFV0aWw6IENvbmRpdGlvbmFsVXRpbDtcclxuICAgIHNldER5bmFtaWNMYWJlbFV0aWw6IER5bmFtaWNMYWJlbFV0aWw7XHJcbiAgICBmaWVsZElkTWFwQXBpS2V5OiBvYmplY3QgPSB7fTsgLy8gdG8gbWFwIHRoZSBhcGkgZmllbGQgaWQgYW5kIHRoZSBhcGkga2V5IG9mIGEgc2luZ2xlIGZpZWxkXHJcbiAgICB2YXJpYWJsZU9iamVjdCA9IHt9OyAvLyB2YXJpYWJsZSBvYmplY3RcclxuICAgIGZpbHRlclZhbHVlOiBzdHJpbmcgPSAnJztcclxuICAgIHJlc3VsdENvdW50QVBJS2V5OiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgZHluYW1pY0NvbHVtbldpZHRoO1xyXG5cclxuICAgIHBhZ2luYXRpb25QYWdlSW5kZXg6IGFueTtcclxuICAgIHBhZ2luYXRpb25QYWdlU2l6ZTogYW55OyAgICBcclxuICAgIGZpcnN0TG9hZDogYm9vbGVhbiA9IHRydWU7XHJcbiAgICBoYXNSb3dDb25kaXRpb25GaWVsZDogYW55O1xyXG4gICAgaGFzUm93Q29uZGl0aW9uU2VsZWN0OiBhbnk7XHJcbiAgICBpc1NlbGV0YWJsZTogYW55O1xyXG4gICAgaHRtbF9pZDogYW55ID0gJyc7XHJcbiAgICBpc0N1c3RvbUNsYXNzID0gdHJ1ZTtcclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXJzZmllbGRzID0ge307XHJcbiAgICBjb250ZXh0TWVudSA6IGFueTtcclxuICAgIHByZXNldERhdGE6IGFueTtcclxuICAgIC8vIGlzRGlzcGxheUJsYW5rQ29sdW1uOiBhbnkgPSB0cnVlO1xyXG4gICAgbGF6eUludGVydmFsOiBhbnkgPSBbXTtcclxuICAgIHJvd0RhdGFMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICB0YWJsZURhdGE6b2JqZWN0W10gPSBbXTtcclxuICAgIHRhYmxlRGF0YUxhenk6b2JqZWN0W10gPSBbXTtcclxuICAgIHNlcnZlclNvcnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNvcnRBcGlLZXlzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgZnJlZXplU29ydDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc29ydEFwaVZhbHVlczogc3RyaW5nW10gPSBbXTtcclxuICAgIHN0b3BQYWdpbmF0aW9uRXZlbnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRzczpzdHJpbmcgPSAnVGFibGUtU2luZ2xlLVNlbGVjdC1WMic7XHJcbiAgICB0bXM6c3RyaW5nID0gJ1RhYmxlLU11bHRpLVNlbGVjdC1WMic7XHJcbiAgICBzZWFyY2hGaWx0ZXJIZWFkZXJUZXh0Ym94OiBhbnlbXSA9IFtdO1xyXG4gICAgc2VhcmNoRmlsdGVySGVhZGVyRGF0ZTogYW55W10gPSBbXTtcclxuICAgIGZpbHRlclNlbGVjdE9iaiA9IFtdO1xyXG4gICAgZmlsdGVyVmFsdWVzID0ge307XHJcbiAgICBmaWx0ZXJEYXRlYW5kVGV4dCA9IGZhbHNlO1xyXG4gICAgY2hlY2tib3hGaWx0ZXIgPSBmYWxzZTtcclxuICAgIHRvZ2dsZWZpbHRlckJveCA9IGZhbHNlO1xyXG4gICAgc2Nyb2xsVG9Ub3AgPSBmYWxzZTtcclxuICAgIHRhc2s6IGFueSA9IHt9O1xyXG4gICAgYWxsQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb2x1bW5GaWx0ZXJUeXBlOiBzdHJpbmdbXSA9IFsnbm9uZSddO1xyXG4gICAgY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UgPSBbXTtcclxuICAgIGZpZWxkRGF0YUJhY2sgPSBbXTtcclxuICAgIGZpbHRlckVycm9yTXNnID0gXCJcIjtcclxuICAgIGlubGluZUVkaXRTdGVwSWQgPSBcIlwiO1xyXG4gICAgc2VsZWN0ZWRQcmltYXJ5S2V5VmFsID0gXCJcIjtcclxuICAgIHN0YXJ0U2Vzc2lvbjogYW55ID0gdHJ1ZTtcclxuICAgIGRyYWdEcm9wVGFibGVSb3dzOiBhbnkgPSBmYWxzZTtcclxuICAgIC8vIE1hdFBhZ2luYXRvciBPdXRwdXRcclxuICAgIHBhZ2VFdmVudDogUGFnZUV2ZW50O1xyXG4gICAgcGFnZUluZGV4OiBudW1iZXIgPSAwXHJcbiAgICBpc1Nob3dNb3JlQ2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNNYXRTb3J0Q2xpY2tlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgY29tcG9uZW50TGlzdCA9IHt9O1xyXG4gICAgcGFnaW5hdGlvblNlcGFyYXRvcjogc3RyaW5nID0gXCIvXCI7XHJcbiAgICBjb21wb25lbnRNYXAgPSB7XHJcbiAgICAgICAgbGFiZWw6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnbGFiZWwnXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbGFiZWwvY2VlLWxhYmVsLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUxhYmVsQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydsYWJlbCddO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgICBBdHRhY2htZW50czogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnQXR0YWNobWVudHMnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydBdHRhY2htZW50cyddID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1hdHRhY2htZW50cy9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQXR0YWNobWVudHNDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0F0dGFjaG1lbnRzJ107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgTWVudTogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ01lbnUnXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbWVudS9jZWUtbWVudS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVNZW51Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydNZW51J107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgSW1hZ2U6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ0ltYWdlJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnSW1hZ2UnXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtaW1hZ2UvY2VlLWltYWdlLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUltYWdlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydJbWFnZSddO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFBpY2tlcjogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10gPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXBpY2tlci9jZWUtcGlja2VyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVBpY2tlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQnV0dG9uOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRMaXN0WydCdXR0b24nXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydCdXR0b24nXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydCdXR0b24nXTtcclxuICAgICAgICB9KSxcclxuICAgICAgICAnTGlzdC1WMic6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ0xpc3QtVjInXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydMaXN0LVYyJ10gPSBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1yZW5kZXJlci12Mi9saXN0LXJlbmRlcmVyLXYyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkxpc3RSZW5kZXJlckNvbXBvbmVudFYyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydMaXN0LVYyJ107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgRHluYW1pY0Zvcm06IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ0R5bmFtaWNGb3JtJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnRHluYW1pY0Zvcm0nXSA9IGltcG9ydCgnLi4vLi4vY29tcG9uZW50cy9keW5hbWljLWZvcm0vZHluYW1pYy1mb3JtLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkR5bmFtaWNGb3JtQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydEeW5hbWljRm9ybSddO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFRvZ2dsZUJ1dHRvbjogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnVG9nZ2xlQnV0dG9uJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVG9nZ2xlQnV0dG9uJ10gPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRvZ2dsZS1idXR0b24vY2VlLXRvZ2dsZS1idXR0b24uY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlVG9nZ2xlQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUb2dnbGVCdXR0b24nXTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBUcmVlVmlldzogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnVHJlZVZpZXcnXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydUcmVlVmlldyddID0gaW1wb3J0KCcuLi8uLi9jb21wb25lbnRzL3RyZWUtcmVuZGVyZXIvdHJlZS1yZW5kZXJlci5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5UcmVlUmVuZGVyZXJDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1RyZWVWaWV3J107XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIGNvbFN0aWNreTogc3RyaW5nW10gPSBbXTtcclxuICAgIGNvbFN0aWNreUVuZDogc3RyaW5nW10gPSBbXTtcclxuICAgIGJsb2NrRGF0YTogYW55O1xyXG4gICAgZnJvbVN0b3JlOiBhbnk7XHJcbiAgICBzaG93U2VlTW9yZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZGlzYWJsZVJvd1ZhbHVlczogc3RyaW5nID0nJztcclxuICAgIGRpc2FibGVSb3dTZWxlY3Rpb25WYWx1ZXM6IHN0cmluZyA9Jyc7XHJcbiAgICBwcml2YXRlIHRpbWVvdXRJZHM6IGFueVtdID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHVibGljIF9jZWVBcGlTZXJ2aWNlPzogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyPzogUm91dGVyKSB7XHJcbiAgICAgICAgdGhpcy5maWVsZERhdGFCYWNrID0gdGhpcy5maWVsZERhdGE7XHJcbiAgICAgICAgdGhpcy5zZXRBUElLZXlVdGlsID0gbmV3IFNldEFQSUNhbGxiYWNrRGF0YShhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsID0gbmV3IER5bmFtaWNMYWJlbFV0aWwoYXBpRGF0YVNlcnZpY2UsIGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVXRpbCA9IG5ldyBDb25kaXRpb25hbFV0aWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIgPSBuZXcgV0ZFRXZlbnRMaXN0SGFuZGxlcihcclxuICAgICAgICAgICAgX2NlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgIHJvdXRlcixcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2csXHJcbiAgICAgICAgICAgIHNuYWNrQmFyLFxyXG4gICAgICAgICAgICBodHRwXHJcbiAgICAgICAgKTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5VXRpbCA9IG5ldyBBUElLZXlVdGlsKCk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfYm9vdHN0cmFwID0gdHJ1ZTtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidW5pcXVlSUQ6IFwiLHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKVxyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0W1xyXG4gICAgICAgICAgICAgICAgJ2VtaXRPbkFwcGx5UmVhcnJhbmdlQnRuQ2xpY2tlZF8nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRcclxuICAgICAgICAgICAgXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25BcHBseVJlYXJyYW5nZUJ0bkNsaWNrZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVJZCA9IHJlcy5pbnZva2VfZXZlbnRfY29uZmlnLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5wYXJhbWV0ZXJfdHlwZSA9PSAnQ0VFX1RBQkxFX0lEJyB9KS5sZW5ndGggPiAwID8gcmVzLmludm9rZV9ldmVudF9jb25maWcuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnBhcmFtZXRlcl90eXBlID09ICdDRUVfVEFCTEVfSUQnIH0pWzBdLnZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0YWJsZUlkLFwiPT1cIix0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICBpZih0YWJsZUlkID09IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWVsZCBmb3VuZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRSZXN0cnVjdHVyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBseVJlc3RydWN0dXJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyRGF0YSA9IHRoaXMucmV0dXJuTmVzdGVkRGF0YSh0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5LnNwbGl0KCcjIycpWzBdKT8udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb2x1bW5Sb3dPbkRhdGFDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFQSUNhbGxiYWNrKGhhbmRsZXJEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBbGwgUHJvY2VzcyBEb25lIVwiKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YWJsZUlkKS5jbGljaygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0W1xyXG4gICAgICAgICAgICAgICAgJ2VtaXRPblRhYmxlSW5saW5lRWRpdENhbmNlbENsaWNrZWRfJyArIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkXHJcbiAgICAgICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uVGFibGVJbmxpbmVFZGl0Q2FuY2VsQ2xpY2tlZC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCB0YWJsZUlkID0gcmVzLmludm9rZV9ldmVudF9jb25maWcuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnBhcmFtZXRlcl90eXBlID09ICdDRUVfVEFCTEVfSUQnIH0pLmxlbmd0aCA+IDAgPyByZXMuaW52b2tlX2V2ZW50X2NvbmZpZy5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwucGFyYW1ldGVyX3R5cGUgPT0gJ0NFRV9UQUJMRV9JRCcgfSlbMF0udmFsdWUgOiAnJztcclxuICAgICAgICAgICAgICAgIGlmKHRhYmxlSWQgPT0gdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJpbWFyeUtleVZhbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtcclxuICAgICAgICAgICAgICAgICdlbWl0T25UYWJsZUlubGluZUVkaXRDbGlja2VkXycgKyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZFxyXG4gICAgICAgICAgICBdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPblRhYmxlSW5saW5lRWRpdENsaWNrZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBsZXQgdGFibGVJZCA9IHJlcy5pbnZva2VfZXZlbnRfY29uZmlnLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5wYXJhbWV0ZXJfdHlwZSA9PSAnQ0VFX1RBQkxFX0lEJyB9KS5sZW5ndGggPiAwID8gcmVzLmludm9rZV9ldmVudF9jb25maWcuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnBhcmFtZXRlcl90eXBlID09ICdDRUVfVEFCTEVfSUQnIH0pWzBdLnZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJpbWFyeUtleUZpZWxkSWQgPSByZXMuaW52b2tlX2V2ZW50X2NvbmZpZy5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwucGFyYW1ldGVyX3R5cGUgPT0gJ0NFRV9QcmltYXJ5X0tleV9GaWVsZElkJyB9KS5sZW5ndGggPiAwID8gcmVzLmludm9rZV9ldmVudF9jb25maWcuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnBhcmFtZXRlcl90eXBlID09ICdDRUVfUHJpbWFyeV9LZXlfRmllbGRJZCcgfSlbMF0udmFsdWUgOiAnJztcclxuICAgICAgICAgICAgICAgIGlmKHRhYmxlSWQgPT0gdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkUHJpbWFyeUtleVZhbCA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHByaW1hcnlLZXlGaWVsZElkKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YWJsZS1yb3ctJyt0aGlzLnNlbGVjdGVkUHJpbWFyeUtleVZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGUuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDUwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcclxuICAgIH1cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICBpZiAodGhpcy5kcm9wTGlzdCkge1xyXG4gICAgICAgICAgICB0aGlzLmRyb3BMaXN0LmF1dG9TY3JvbGxEaXNhYmxlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmRyb3BMaXN0LmF1dG9TY3JvbGxTdGVwID0gMTA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuTmVzdGVkRGF0YShkYXRhKSB7XHJcbiAgICAgICAgaWYgKE9iamVjdChkYXRhKSAhPT0gZGF0YSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb25zdCByZWdleCA9IC9cXC4/KFteLlxcW1xcXV0rKXxcXFsoXFxkKylcXF0vZztcclxuICAgICAgICBjb25zdCByZXN1bHRob2xkZXIgPSB7fTtcclxuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGZvcmluXHJcbiAgICAgICAgZm9yIChjb25zdCBwIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGN1ciA9IHJlc3VsdGhvbGRlcjtcclxuICAgICAgICAgICAgbGV0IHByb3AgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgbTtcclxuICAgICAgICAgICAgd2hpbGUgKChtID0gcmVnZXguZXhlYyhwKSkpIHtcclxuICAgICAgICAgICAgY3VyID0gY3VyW3Byb3BdIHx8IChjdXJbcHJvcF0gPSBtWzJdID8gW10gOiB7fSk7XHJcbiAgICAgICAgICAgIHByb3AgPSBtWzJdIHx8IG1bMV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY3VyW3Byb3BdID0gZGF0YVtwXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdGhvbGRlcltcIlwiXSB8fCByZXN1bHRob2xkZXI7XHJcbiAgICB9O1xyXG4gICAgdXBkYXRlQ29sdW1uQ29uZmlnKCkge1xyXG4gICAgICAgIGxldCBzZXR0aW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbHVtblJzdHJ1Y3R1cmluZ0NvbmZpZycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sdW1uUnN0cnVjdHVyaW5nQ29uZmlnJykpIDoge307XHJcbiAgICAgICAgaWYoc2V0dGluZyAmJiBzZXR0aW5nLmhhc093blByb3BlcnR5KHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlID0gc2V0dGluZ1t0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5TaG93SGlkZVJlYXJyYW5nZSA9IFtdO1xyXG4gICAgICAgICAgICBpZih0aGlzLmZpZWxkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEuZm9yRWFjaCgoZWxlbWVudCxpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5TaG93SGlkZVJlYXJyYW5nZS5wdXNoKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZF9sYWJlbDogZWxlbWVudC5maWVsZF9sYWJlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogZWxlbWVudC51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dDb2x1bW46IE51bWJlcihlbGVtZW50LmlzX2Rpc3BsYXkpID09IDAgPyBmYWxzZSA6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1Zpc2libGU6IE51bWJlcihlbGVtZW50LmlzX2Rpc3BsYXkpID09IDAgPyBmYWxzZSA6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkcm9wUm93KGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmc+KSB7XHJcbiAgICAgICAgaWYodGhpcy5kcmFnRHJvcFRhYmxlUm93cykge1xyXG4gICAgICAgICAgICBjb25zdCBwcmV2aW91c0luZGV4ID0gdGhpcy5kYXRhU291cmNlLmRhdGEuZmluZEluZGV4KGQgPT4gZCA9PT0gZXZlbnQuaXRlbS5kYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcmV2aW91c0luZGV4OiBcIiwgcHJldmlvdXNJbmRleCwgXCIgY3VycmVudEluZGV4OiBcIiwgZXZlbnQuY3VycmVudEluZGV4KVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFTb3VyY2UgXCIsIHRoaXMuZGF0YVNvdXJjZS5kYXRhKVxyXG4gICAgICAgICAgICBtb3ZlSXRlbUluQXJyYXkodGhpcy5kYXRhU291cmNlLmRhdGEsIHByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gY2xvbmVkZWVwKHRoaXMuZGF0YVNvdXJjZS5kYXRhKTtcclxuICAgICAgICAgICAgLyogIyMjIyMjIyMjIyMjIyMjIyMjIyMjIHN0b3JlIG1vZGlmaWVkIGRhdGEgIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjICovXHJcbiAgICAgICAgICAgIGxldCBwcmltYXJ5S2V5ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snUHJpbWFyeUtleU5hbWUnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1ByaW1hcnlLZXlOYW1lJ10gOiAnJztcclxuICAgICAgICAgICAgbGV0IG1vZGlmeUtleSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0NFRV9EcmFnX0Ryb3BfUm93c19Nb2RpZnlLZXknXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0NFRV9EcmFnX0Ryb3BfUm93c19Nb2RpZnlLZXknXSA6ICcnO1xyXG4gICAgICAgICAgICBsZXQgbW9kaWZpZWRSZXF1ZXN0QXBpS2V5ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQ0VFX0RyYWdfRHJvcF9Sb3dzX01vZGlmaWVkUmVxdWVzdEtleSddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQ0VFX0RyYWdfRHJvcF9Sb3dzX01vZGlmaWVkUmVxdWVzdEtleSddIDogcHJpbWFyeUtleTtcclxuICAgICAgICAgICAgbGV0IHJlcXVlc3RBcGlLZXkgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDRUVfRHJhZ19Ecm9wX1Jvd3NfUmVxdWVzdF9BcGlfS2V5J10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDRUVfRHJhZ19Ecm9wX1Jvd3NfUmVxdWVzdF9BcGlfS2V5J10uc3BsaXQoJ3x8JykgOiAnJztcclxuICAgICAgICAgICAgaWYocHJpbWFyeUtleSAmJiBtb2RpZnlLZXkgJiYgcmVxdWVzdEFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG1vZGlmeUtleUFyciA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLm1hcChmdW5jdGlvbihhKXtyZXR1cm4gTnVtYmVyKGFbbW9kaWZ5S2V5XSl9KS5zb3J0KGZ1bmN0aW9uKGEsIGIpe3JldHVybiBhIC0gYn0pOztcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW9kaWZ5S2V5QXJyOiBcIixtb2RpZnlLZXlBcnIpXHJcbiAgICAgICAgICAgICAgICBsZXQgcHJpbWFyeUtleU1hcHBpbmcgPSB0aGlzLmRhdGFTb3VyY2UuZGF0YS5tYXAoZnVuY3Rpb24oYSxpbmRleCl7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW21vZGlmaWVkUmVxdWVzdEFwaUtleV0gPSBhW3ByaW1hcnlLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIG9ialttb2RpZnlLZXldID0gbW9kaWZ5S2V5QXJyW2luZGV4XTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gb2JqXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicHJpbWFyeUtleU1hcHBpbmc6IFwiLCBwcmltYXJ5S2V5TWFwcGluZylcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydQcmltYXJ5S2V5TmFtZSddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1ByaW1hcnkgS2V5IEZpZWxkIElkJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcHJpbWFyeUZpZWxkRGF0YSA9IHRoaXMuYXBwRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5RmllbGREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5wcmltYXJ5RmllbGREYXRhLCAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snUHJpbWFyeSBLZXkgRmllbGQgSWQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBwcmltYXJ5S2V5TWFwcGluZyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaUtleTogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFwaUtleTogcmVxdWVzdEFwaUtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnNldEFwcERhdGEocHJpbWFyeUZpZWxkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2FsbCBldmVudCBPblJvd0RyYWdEcm9wXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblJvd0RyYWdEcm9wJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGRyb3AoZXZlbnQ6IENka0RyYWdEcm9wPHN0cmluZ1tdPikge1xyXG4gICAgICAgIGlmKHRoaXMuZHJhZ0Ryb3BUYWJsZVJvd3MgJiYgdGhpcy5jb2x1bW5GaWx0ZXJUeXBlLmluZGV4T2YoJ3JlYXJyYW5nZScpICE9IC0xKSB7XHJcbiAgICAgICAgICAgIG1vdmVJdGVtSW5BcnJheSh0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlLCBldmVudC5wcmV2aW91c0luZGV4LCBldmVudC5jdXJyZW50SW5kZXgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXNldFJlc3RydWN0dXJpbmcoKSB7XHJcbiAgICAgICAgbGV0IHNldHRpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sdW1uUnN0cnVjdHVyaW5nQ29uZmlnJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnKSkgOiB7fTtcclxuICAgICAgICBpZihzZXR0aW5nICYmIHNldHRpbmcuaGFzT3duUHJvcGVydHkodGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UgPSBzZXR0aW5nW3RoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jb2x1bW5TaG93SGlkZVJlYXJyYW5nZS5maWx0ZXIoYz0+IGMuc2hvd0NvbHVtbiA9PSB0cnVlKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXJyb3JNc2cgPSBcIlwiO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNob3dIaWRlRmlsdGVyKCdzaG93LWhpZGUtY29udGFpbmVyLScsdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpXHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlSZXN0cnVjdHVyaW5nKCkge1xyXG4gICAgICAgIGlmKHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UuZmlsdGVyKGM9PiBjLnNob3dDb2x1bW4gPT0gdHJ1ZSkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckVycm9yTXNnID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHNldHRpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sdW1uUnN0cnVjdHVyaW5nQ29uZmlnJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnKSkgOiB7fTtcclxuICAgICAgICAgICAgc2V0dGluZ1t0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF0gPSB0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlO1xyXG4gICAgICAgICAgICAvLyBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY29sdW1uUnN0cnVjdHVyaW5nQ29uZmlnJyxKU09OLnN0cmluZ2lmeShzZXR0aW5nKSk7XHJcbiAgICAgICAgICAgIGxldCBzZWxlY3RlZENvbHMgPSB0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlLmZpbHRlcihjPT4gYy5zaG93Q29sdW1uID09IHRydWUpLm1hcChlbGU9PmVsZS51bmlxdWVfaWQpXHJcbiAgICAgICAgICAgIGxldCByZXN0dWN0dWVkQ29sQXJyID0gW107XHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ29scy5mb3JFYWNoKHM9PntcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wRmllbGREYXRhID0gdGhpcy5maWVsZERhdGFCYWNrLmZpbHRlcihlbGU9PmVsZS51bmlxdWVfaWQgPT0gcyk7XHJcbiAgICAgICAgICAgICAgICBpZih0ZW1wRmllbGREYXRhICYmIHRlbXBGaWVsZERhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3R1Y3R1ZWRDb2xBcnIucHVzaCh0ZW1wRmllbGREYXRhWzBdKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEgPSByZXN0dWN0dWVkQ29sQXJyO1xyXG4gICAgICAgICAgICAvLyB0aGlzLm5nT25Jbml0KCk7XHJcbiAgICAgICAgICAgIC8vICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbiAgICAgICAgICAgIGNvbnN0IHtcclxuICAgICAgICAgICAgICAgIGV2ZW50X2xpc3RcclxuICAgICAgICAgICAgfSA9IHRoaXMuc2VjdGlvbkRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc0Jsb2NrRGF0YSh0aGlzLmJsb2NrRGF0YSx0aGlzLmZyb21TdG9yZSxldmVudF9saXN0LHRydWUpO1xyXG4gICAgICAgICAgICAvLyAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4gICAgICAgICAgICB0aGlzLnNob3dIaWRlRmlsdGVyKCdzaG93LWhpZGUtY29udGFpbmVyLScsdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFsbCBhcHBseVJlc3RydWN0dXJpbmcgUHJvY2VzcyBEb25lIVwiKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyRXJyb3JNc2cgPSBcIlBsZWFzZSBzZWxlY3QgYXRsZWFzdCBvbmUgY29sdW1uIVwiXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNob3dIaWRlRmlsdGVyKHN0cmluZyxpZCkge1xyXG4gICAgICAgIGxldCBjb250YWluZXJJZCA9IHN0cmluZyArIGlkO1xyXG4gICAgICAgIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkuY2xhc3NMaXN0LmNvbnRhaW5zKCdkLW5vbmUnKSkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChjb250YWluZXJJZCkuY2xhc3NMaXN0LnJlbW92ZSgnZC1ub25lJyk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmNsYXNzTGlzdC5hZGQoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHRyYWNrQnl1bmlxdWVfaWQoaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gaXRlbS51bmlxdWVfaWQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIG9uU29ydCh7IGNvbHVtbiwgZGlyZWN0aW9uIH06IFNvcnRFdmVudCkge1xyXG4gICAgICAgIC8vIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XHJcbiAgICAgICAgLy8gdGhpcy5zdG9yZURhdGEgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZDtcclxuICAgICAgICB0aGlzLnN0b3JlUHJpbWFyeUtleSgpO1xyXG4gICAgICAgIC8vIHJlc2V0dGluZyBvdGhlciBoZWFkZXJzXHJcbiAgICAgICAgdGhpcy5oZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaGVhZGVyLnNvcnRhYmxlICE9PSBjb2x1bW4pIHtcclxuICAgICAgICAgICAgaGVhZGVyLmRpcmVjdGlvbiA9ICcnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIC8vIHNvcnRpbmdcclxuICAgICAgICBpZiAoIXRoaXMuc2VydmVyU29ydCkge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAnJyB8fCBjb2x1bW4gPT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFDb3B5ID0gdGhpcy5hcGlEYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhQ29weSA9IFsuLi50aGlzLmFwaURhdGFdLnNvcnQoKGEsIGIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBpc05hTihiW2NvbHVtbl0pID8gYVtjb2x1bW5dLmxvY2FsZUNvbXBhcmUoYltjb2x1bW5dKSA6IGFbY29sdW1uXS0oYltjb2x1bW5dKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGlyZWN0aW9uID09PSAnYXNjJyA/IHJlcyA6IC1yZXM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxvYWRUYWJsZURhdGEodGhpcy5hcGlEYXRhQ29weSk7XHJcbiAgICAgICAgfSAgICAgIFxyXG4gICAgICAgIHRoaXMuc29ydENoYW5nZVNldFZhbHVlKGNvbHVtbiwgZGlyZWN0aW9uKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgdHJpZ2dlclNlZU1vcmUoKXtcclxuICAgICAgICBpZih0aGlzLnNob3dQYWdpbmF0aW9uID09PSBMT0FEX01PUkUpe1xyXG4gICAgICAgICAgICB0aGlzLmlzTWF0U29ydENsaWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgbWF0U29ydENoYW5nZShzb3J0OiBTb3J0KSB7XHJcbiAgICAgICAgdGhpcy5zb3J0Q2hhbmdlU2V0VmFsdWUoc29ydC5hY3RpdmUsIHNvcnQuZGlyZWN0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNvcnRDaGFuZ2VTZXRWYWx1ZShjb2x1bW46IHN0cmluZywgZGlyZWN0aW9uOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5mcmVlemVTb3J0KSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZighZGlyZWN0aW9uKXtcclxuICAgICAgICAgICAgbGV0IGZpZWxkID0gdGhpcy5maWVsZERhdGEuZmluZChmID0+IGYucmVzcG9uc2VfYXBpX2tleSA9PT0gdGhpcy5zb3J0QXBpVmFsdWVzWzBdKTtcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gdGhpcy5zb3J0QXBpVmFsdWVzWzFdO1xyXG4gICAgICAgICAgICBjb2x1bW4gPSBmaWVsZC51bmlxdWVfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNvcnRBcGlLZXlzICYmIHRoaXMuc29ydEFwaUtleXMubGVuZ3RoID09PSAyKSB7ICBcclxuICAgICAgICAgICAgbGV0IHNvcnRGaWVsZCA9IHRoaXMuZmllbGREYXRhLmZpbmQoZiA9PiBmLnVuaXF1ZV9pZCA9PT0gY29sdW1uKTsgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zb3J0QXBpS2V5c1swXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBzb3J0RmllbGQgJiYgc29ydEZpZWxkLnJlc3BvbnNlX2FwaV9rZXkgPyBzb3J0RmllbGQucmVzcG9uc2VfYXBpX2tleSA6ICcnXHJcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5zb3J0QXBpS2V5c1sxXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBkaXJlY3Rpb25cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSAgIFxyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Tb3J0QnV0dG9uQ2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignc2Nyb2xsJywgWyckZXZlbnQnXSlcclxuICAgIG9uU2Nyb2xsKGV2ZW50KSB7XHJcbiAgICB0aGlzLm9uU2Nyb2xsZXZlbnQoJ09uUmlnaHRDbGljaycsIHt9KTtcclxuICAgIH1cclxuXHJcbiAgICBvblNjcm9sbGV2ZW50KHR5cGU6IHN0cmluZywgcHJpbWFyeURhdGE6IGFueSA9IHt9LCBpc0RlZmF1bHQ6IGJvb2xlYW4gPSB0cnVlLCBwYXlMb2FkPzogYW55LCBkaXNwbGF5VHlwZTogc3RyaW5nID0gJycpOiB2b2lkIHtcclxuICAgICAgICBmb3IobGV0IGkgPTA7IGk8PSB0aGlzLmZpZWxkRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGFbaV0gPy5ldmVudF9saXN0ICYmIHRoaXMuZmllbGREYXRhW2ldID8uZXZlbnRfbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIub25Db21wb25lbnRFdmVudEJhdGNoKHRoaXMuZmllbGREYXRhW2ldLCB0aGlzLnByZXNldERhdGEsIHRoaXMuc3RlcElkLCB0eXBlLCBwcmltYXJ5RGF0YSwgaXNEZWZhdWx0LCBwYXlMb2FkLCBkaXNwbGF5VHlwZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25SZXNpemUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMucmVzcG9uc2l2ZSkge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9ICQoJyN0YWJsZV8nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICBlbC5jc3MoeyBkaXNwbGF5OiAnYmxvY2snLCBvdmVyZmxvdzogJ2hpZGRlbicgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbENvdW50ID0gZWwuZmluZCgnPiB0aGVhZCA+IHRyID4gdGgnKS5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICBlbC5maW5kKCc+IHRoZWFkID4gdHIgPiB0aCcpLnNob3coKTtcclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJz4gdGJvZHkgPiB0ci5jZWUtdGFibGUtcm93ID4gdGQnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICBlbC5maW5kKCc+IHRib2R5ID4gdHIuY2VlLXJlc3Atcm93IC5jZWUtdGFibGUtZGV0YWlsLWNlbGwnKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB3aGlsZSAoZWwuaW5uZXJXaWR0aCgpIDwgZWwuZmluZCgnPiB0aGVhZCcpLm91dGVyV2lkdGgoKSAmJiBjb2xDb3VudCA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5maW5kKCc+IHRoZWFkID4gdHIgPiB0aDpudGgtY2hpbGQoJyArIGNvbENvdW50ICsgJyknKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuZmluZCgnPiB0Ym9keSA+IHRyLmNlZS10YWJsZS1yb3cgPiB0ZDpudGgtY2hpbGQoJyArIGNvbENvdW50ICsgJyknKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sQ291bnQtLTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29sQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmZpbmQoJz4gdGJvZHkgPiB0ci5jZWUtcmVzcC1yb3cgLmNlZS10YWJsZS1kZXRhaWwtY2VsbDpudGgtY2hpbGQoJyArIChpICsgMSkgKyAnKScpLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsLmNzcyh7IGRpc3BsYXk6ICd0YWJsZScgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgZWwuZmluZCgnPiB0Ym9keSA+IHRyLmNlZS10YWJsZS1yb3cnKS5yZW1vdmVDbGFzcygncGFyZW50Jyk7XHJcbiAgICAgICAgICAgICAgICBlbC5maW5kKCc+IHRib2R5ID4gdHIuY2VlLXRhYmxlLXJvdyA+IHRkOm50aC1jaGlsZCgxKScpLnJlbW92ZUNsYXNzKCdyLWNvbnRyb2wnKS51bmJpbmQoKTtcclxuICAgICAgICAgICAgICAgIGVsLmZpbmQoJ3RyLmNlZS1yZXNwLXJvdyAuY2VlLXRhYmxlLXJlc3AnKS5hbmltYXRlKHsgaGVpZ2h0OiAnMCcgfSwgMjI1KTtcclxuICAgICAgICAgICAgICAgIGlmIChlbC5maW5kKCc+IHRoZWFkID4gdHIgPiB0aCcpLmxlbmd0aCA+IGNvbENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuZmluZCgnPiB0Ym9keSA+IHRyLmNlZS10YWJsZS1yb3cgPiB0ZDpudGgtY2hpbGQoMSknKS5hZGRDbGFzcygnci1jb250cm9sJykuY2xpY2soZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwYXJlbnQgPSAkKHRoaXMpLnBhcmVudCgndHInKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGQgPSBwYXJlbnQubmV4dCgnLmNlZS1yZXNwLXJvdycpLmZpbmQoJy5jZWUtdGFibGUtcmVzcCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmVudC5oYXNDbGFzcygncGFyZW50JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5hZGRDbGFzcygncGFyZW50Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jc3MoeyBoZWlnaHQ6ICdhdXRvJyB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRlbXBIID0gY2hpbGQuaGVpZ2h0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZC5jc3MoeyBoZWlnaHQ6ICcwJyB9KS5hbmltYXRlKHsgaGVpZ2h0OiB0ZW1wSCB9LCAyMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnJlbW92ZUNsYXNzKCdwYXJlbnQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkLmFuaW1hdGUoeyBoZWlnaHQ6ICcwJyB9LCAyMjUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtbkNvbmZpZygpO1xyXG4gICAgICAgIHRoaXMuaHRtbF9pZCA9IHRoaXMucm93RGF0YSAmJiB0aGlzLnJvd0RhdGEuaHRtbF9pZCA/IHRoaXMucm93RGF0YS5odG1sX2lkIDogdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgbGV0IGZyb21TdG9yZTtcclxuICAgICAgICB0aGlzLnRhYmxlQ2VsbEFwcERhdGEuc3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhZGRpdGlvbmFsX3BhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgZXZlbnRfbGlzdFxyXG4gICAgICAgIH0gPSB0aGlzLnNlY3Rpb25EYXRhO1xyXG5cclxuICAgICAgICBpZiAoYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIGFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9jb2x1bW5fZmlsdGVyX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbkZpbHRlclR5cGUgPSBwYXJhbXRlci52YWx1ZSA/IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykgOiBbJ25vbmUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2hvdyBDaGlwcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY2hpcHNBcGlLZXlUb0Rpc3BsYXkgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUHJpbWFyeUtleU5hbWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW1hcnlLZXlWYWwgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmltYXJ5S2V5TmFtZSA9IHRoaXMuZ2V0UHJpbWFyeUtleShwYXJhbXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJpbWFyeUtleVZhbHVlID0gdGhpcy5nZXRWYWx1ZWZvcm1LZXkocGFyYW10ZXIudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQcmltYXJ5S2V5VmFsdWUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByaW1hcnlLZXlSZXMgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2hvdyBQYWdpbmF0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93UGFnaW5hdGlvbiA9IHBhcmFtdGVyLnZhbHVlID09PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlOyAvLyBCZWZvcmUgTE9BRF9NT1JFXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSBwYXJhbXRlci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFZhbHVlcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnZUl0ZW1zID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiArcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTaG93IEZpbHRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbHRlciA9IHBhcmFtdGVyLnZhbHVlID09PSAnZmFsc2UnID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIE5leHQgTGFiZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25OZXh0TGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdOZXh0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBQcmV2aW91cyBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblByZXZpb3VzTGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdQcmV2aW91cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gU2hvd2luZyBSZXN1bHQgSGludCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblNob3dpbmdSZXN1bHRIaW50ID0gcGFyYW10ZXIudmFsdWUgIT09ICcnID8gcGFyYW10ZXIudmFsdWUgOiAnJXZhbHVlJSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ05vIERhdGEgRm91bmQgTGFiZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kTGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdubyByZWNvcmQgZm91bmQuJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FzZSAnQ0VFX2Rpc3BsYXlfYmxhbmtfY29sdW1uJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5pc0Rpc3BsYXlCbGFua0NvbHVtbiA9IHBhcmFtdGVyLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRmlsdGVyS2V5cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyS2V5cyA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdGaWx0ZXJBUElLZXknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckFQSUtleSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdGaWx0ZXIgUGxhY2Vob2xkZXIgVGV4dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyUGxhY2Vob2xkZXJUZXh0ID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NldCBmcm9tIHN0b3JlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnZhbHVlID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICogT25seSB3b3JrcyBpZiB0aGUgYXBpIGtleSBpcyBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBmb3IgbGlzdCB0byBzaG93IHRoZSBkYXRhIGZyb20gaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBoYW5kbGVyIGRhdGEgbmVlZHMgdG8gYmUgc3RvcmVkIGluIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBhcGkgZGF0YSBzdG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpS2V5cyA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGFwaUtleS5zcGxpdCgnIyMnKVswXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mcm9tU3RvcmUgPSBmcm9tU3RvcmUgPSBoYW5kbGVyRGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0hpZGVSb3dzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWRlblJvd3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnVGFibGUtRXhwYW5kYWJsZS1WMicgPyBwYXJhbXRlci52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfSW5saW5lX0VkaXRfU3RlcF9JZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5saW5lRWRpdFN0ZXBJZCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdleHBhbmRUaXRsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnVGFibGUtRXhwYW5kYWJsZS1WMicgPyBwYXJhbXRlci52YWx1ZSA6IHRoaXMuZXhwYW5kVGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbGxhcHNlVGl0bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnVGFibGUtRXhwYW5kYWJsZS1WMicgPyBwYXJhbXRlci52YWx1ZSA6IHRoaXMuY29sbGFwc2VUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRW5hYmxlU29ydCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW5hYmxlU29ydCA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFR5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIudmFsdWUudG9Mb3dlckNhc2UoKSA9PT0gJ3NlcnZlcicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VydmVyUGFnaW5hdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBBUEkgS2V5cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkFwaUtleXMgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfHwnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Jlc3BvbnNpdmUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNpdmUgPSBwYXJhbXRlci52YWx1ZSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdTZWFyY2hfZmlsdGVyX0FsbF9UZXh0Ym94ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVhbmRUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hGaWx0ZXJIZWFkZXJUZXh0Ym94ID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoXCJ8fFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2VhcmNoX2ZpbHRlcl9BbGxfRGF0ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckRhdGVhbmRUZXh0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hGaWx0ZXJIZWFkZXJEYXRlID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoXCJ8fFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnU2VhcmNoX2ZpbHRlcl9jaGVja2JveCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZWFuZFRleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrYm94RmlsdGVyID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUmVzdWx0IENvdW50IEFQSSBLZXknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3VsdENvdW50QVBJS2V5ID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9leHBhbmRfY29sdW1uX3dpZHRoJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5keW5hbWljQ29sdW1uV2lkdGggPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX3NvcnRfdHlwZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnc2VydmVyJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJTb3J0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfc29ydF9hcGlfa2V5cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc29ydEFwaUtleXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc29ydEFwaUtleUFyciA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8fCcpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNvcnRBcGlLZXlBcnIubGVuZ3RoID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0QXBpS2V5U2V0MSA9IHNvcnRBcGlLZXlBcnJbMF0uc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRBcGlLZXlzLnB1c2goc29ydEFwaUtleVNldDFbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzb3J0QXBpS2V5U2V0MiA9IHNvcnRBcGlLZXlBcnJbMV0uc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRBcGlLZXlzLnB1c2goc29ydEFwaUtleVNldDJbMF0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc29ydEFwaUtleVNldDFbMV0gJiYgc29ydEFwaUtleVNldDJbMV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnRBcGlWYWx1ZXMgPSBbc29ydEFwaUtleVNldDFbMV0sIHNvcnRBcGlLZXlTZXQyWzFdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldERlZmF1bHRTb3J0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ0VFX0NPTF9TVElDS1knOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbFN0aWNreSA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfQ09MX1NUSUNLWV9FTkQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbFN0aWNreUVuZCA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfRHJhZ19Ecm9wX1Jvd3MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRyYWdEcm9wVGFibGVSb3dzID0gcGFyYW10ZXIudmFsdWUgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBTZXBhcmF0b3InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25TZXBhcmF0b3IgPSBwYXJhbXRlci52YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfc2Nyb2xsX3RvX3RvcF9vbl9wYWdpbmF0aW9uJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1RvcCA9IHBhcmFtdGVyLnZhbHVlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9EaXNhYmxlX0RyYWdfUm93cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVJvd1ZhbHVlcyA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9EaXNhYmxlX1NlbGVjdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVJvd1NlbGVjdGlvblZhbHVlcyA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBibG9ja0NhY2hlID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5zZWFyY2hCbG9ja0RhdGFGcm9tQ2FjaGUodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snZGVmYXVsdF92YWx1ZSddKTtcclxuICAgICAgICAgICAgLy8gaWYoYmxvY2tDYWNoZSkge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9jZXNzQmxvY2tEYXRhKGJsb2NrQ2FjaGUsZnJvbVN0b3JlLGV2ZW50X2xpc3QpO1xyXG4gICAgICAgICAgICAvLyB9IGVsc2UgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xhc3RCbG9ja0xvYWRlZCcpICE9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2RlZmF1bHRfdmFsdWUnXSkge1xyXG4gICAgICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xhc3RCbG9ja0xvYWRlZCcsIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2RlZmF1bHRfdmFsdWUnXSlcclxuICAgICAgICAgICAgdGhpcy5ibG9ja0RhdGEgPSB7fTsgICAgXHJcbiAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2RlZmF1bHRfdmFsdWUnXSkudG9Qcm9taXNlKCkudGhlbigoZGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja0RhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGxldCBibG9ja0RhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnYmxvY2tEYXRhQ2FjaGUnKSA/IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Jsb2NrRGF0YUNhY2hlJykpWydkYXRhJ10gOiBbXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBsZXQgY2FjaGVEYXRhID0gKCBibG9ja0RhdGEgJiYgYmxvY2tEYXRhLmxlbmd0aCA+IDAgKSA/IGJsb2NrRGF0YS5maWx0ZXIoZWwgPT4gZWwuYmxvY2tfaWQgPT0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snZGVmYXVsdF92YWx1ZSddKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKGNhY2hlRGF0YSAmJiBjYWNoZURhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgYmxvY2tEYXRhLnB1c2goe2Jsb2NrX2lkOiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydkZWZhdWx0X3ZhbHVlJ10sIGJsb2NrX2RhdGE6IGRhdGF9KTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Jsb2NrRGF0YUNhY2hlJywgSlNPTi5zdHJpbmdpZnkoe2RhdGEgOiBibG9ja0RhdGF9KSlcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wcm9jZXNzQmxvY2tEYXRhKGRhdGEsZnJvbVN0b3JlLGV2ZW50X2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZXREYXRhIDogYW55O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucm93RGF0YSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3SWQgPSB0aGlzLnJvd0RhdGEudW5pcXVlX2lkLnNwbGl0KFwiJFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0RhdGEgPSB0aGlzLmdldE5ld0ZpZWxkcyhuZXdJZFsyXSwgc2V0RGF0YS5ibG9ja19maWVsZHMsIG5ld0lkWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGF0YS5ibG9ja19maWVsZHMgPSBuZXdEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERhdGEgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NCbG9ja0RhdGEoc2V0RGF0YSxmcm9tU3RvcmUsZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAwIHRoIGtleSBmb3IgdG90YWwgTm8gb2YgdmFsdWVzXHJcbiAgICAgICAgICAgICAgICAvLyAxc3Qga2V5IGZvciBwYWdlIG51bWJlclxyXG4gICAgICAgICAgICAgICAgLy8gMm5kIGtleSBmb3IgcGFnZSBzaXplXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uICYmIHRoaXMucGFnaW5hdGlvbkFwaUtleXMubGVuZ3RoICE9PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdTb3JyeSBwYWdpbmF0aW9uIGFwaSBrZXlzIGFyZSBub3QgY29uZmlndXJlZCBwcm9wZXJseScgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnRm9ybWF0IHNob3VsZCBiZTonICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJzxhcGlfa2V5X2Zvcl90b3RhbF9udW1iZXJfb2ZfdmFsdWVzPnx8PGFwaV9rZXlfZm9yX3BhZ2VfbnVtYmVyPnx8PGFwaV9rZXlfZm9yX3BhZ2Vfc2l6ZT4nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbiA9PT0gTE9BRF9NT1JFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uUGFnZUluZGV4ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25QYWdlU2l6ZSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnQgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUFwaUtleSh0aGlzLnBhZ2luYXRpb25BcGlLZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLnBhZ2luYXRpb25QYWdlU2l6ZT8udmFsdWUgPj0gdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudD8udmFsdWUgJiYgdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudD8udmFsdWUgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuU2VlbW9yZUhpZGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaWYodGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudD8udmFsdWUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5wYWdpbmF0aW9uUGFnZVNpemUudmFsdWUgPSB0aGlzLnBhZ2VJdGVtc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25QYWdlSW5kZXggPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUFwaUtleSh0aGlzLnBhZ2luYXRpb25BcGlLZXlzWzFdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25QYWdlU2l6ZSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnQgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUFwaUtleSh0aGlzLnBhZ2luYXRpb25BcGlLZXlzWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIHNldHRpbmcgZGVmYXVsdCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnQgJiYgdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudC52YWx1ZSA/IHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnQudmFsdWUgOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleCAmJiB0aGlzLnBhZ2luYXRpb25QYWdlSW5kZXgudmFsdWUgPyB0aGlzLnBhZ2luYXRpb25QYWdlSW5kZXgudmFsdWUgOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblBhZ2VTaXplICYmIHRoaXMucGFnaW5hdGlvblBhZ2VTaXplLnZhbHVlID8gdGhpcy5wYWdpbmF0aW9uUGFnZVNpemUudmFsdWUgOiB0aGlzLnBhZ2VJdGVtc1swXVxyXG4gICAgICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogZm9yaW5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaSBpbiB0aGlzLnBhZ2luYXRpb25BcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wYWdpbmF0aW9uQXBpS2V5c1tpXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmlzaWJsZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRoaXMucm93RGF0YS52aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtcclxuICAgICAgICAgICAgICAgICAgICAnZW1pdE9uRGF0YVNldE9yVXBkYXRlZF8nICsgdW5pcXVlX2lkXHJcbiAgICAgICAgICAgICAgICBdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29sdW1uUm93T25EYXRhQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkZpZWxkRGF0YVVwZGF0ZWQocmVzLmFwaUtleSwgcmVzLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuaXNfZGlzcGxheSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkKCcnLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5maWVsZERhdGFcclxuICAgICAgICAgICAgICAgIC5tYXAoYyA9PiBjLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgPT09IHRoaXMudHNzKSB7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0b3JlRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnJhZGlvVmFsdWUgPSB0aGlzLnN0b3JlRGF0YVswXTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZih0aGlzLnNob3dQYWdpbmF0aW9uID09PSBMT0FEX01PUkUpe1xyXG4gICAgICAgIC8vICAgICB0aGlzLmlzU2hvd01vcmVDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgdGhpcy5nZXREYXRhKCk7XHJcbiAgICAgICAgdGhpcy5nZXREaXNwbGF5VmFsdWVzKCkudGhlbih2YWx1ZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrUHJvbWlzZVZhbHVlKHZhbHVlcyk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudGFibGVIaWRkZW5HZW5lcmljID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RhYmxlSGlkZGVuR2VuZXJpYycpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgICAgIC8vIHNldCBzdGVwIGlkIHRvIGFwcCBkYXRhXHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLnN0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0Rm9yRW1wdHlTZXNzaW9uJ10gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEZvckVtcHR5U2Vzc2lvbi5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkVtcHR5U2Vzc2lvbihyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHZhciBlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YWJsZS1jZWxsLWlubGluZS1zdGVwXCIpO1xyXG4gICAgICAgIC8vICAgICBpZihlbGVtKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBlbGVtLnNjcm9sbEludG9WaWV3KCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9LCAxMDAwKTtcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBwcm9jZXNzQmxvY2tEYXRhKGRhdGEsZnJvbVN0b3JlLGV2ZW50X2xpc3Qsc2tpcE9uTG9hZD1mYWxzZSkge1xyXG4gICAgICAgIGlmKCF0aGlzLmZpZWxkRGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmJsb2NrUmVuZGVyZWREYXRhID0gdGhpcy5jb21tb25VdGlsLmJsb2NrQm9vdHN0cmFwUHJvY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLmZpZWxkRGF0YUJhY2sgPSB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcztcclxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVDb2x1bW5Db25maWcoKTtcclxuICAgICAgICAgICAgLy8gLy8gdGhpcy5hcHBseVJlc3RydWN0dXJpbmcoKTtcclxuICAgICAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLmFwcGx5UmVzdHJ1Y3R1cmluZygpO1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIC8vIH0sIDcwMDApO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmZpZWxkRGF0YSAmJiB0aGlzLmZpZWxkRGF0YS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBmaWx0ZXJPYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogeC51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sdW1uUHJvcDogeC5yZXNwb25zZV9hcGlfa2V5LFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJTZWxlY3RPYmoucHVzaChmaWx0ZXJPYmopO1xyXG4gICAgICAgICAgICAgICAgaWYoeD8uYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHg/LmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHguYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNmaWVsZHNbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV90YWJsZV9jZWxsX3ZhbHVlcyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgeC5maWVsZF9sYWJlbCA9IHguZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykgPyB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHgpLmZpZWxkX2xhYmVsIDogeC5maWVsZF9sYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlYXJjaF9maWx0ZXJfaGVhZGVyX3RleHQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZWFuZFRleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRmlsdGVySGVhZGVyVGV4dGJveC5wdXNoKHgudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlYXJjaF9maWx0ZXJfaGVhZGVyX2RhdGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyRGF0ZWFuZFRleHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRmlsdGVySGVhZGVyRGF0ZS5wdXNoKHgudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZHluYW1pY0NvbHVtbldpZHRoKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aCA9PSAnQUxMJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHgucmVzaXphYmxlID0gJ3RydWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LndpZHRoID0gMTAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB4LmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lID0geC5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSArIFwiIHJlc2l6ZU5ld1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkeW5hbWljV2lkdGhJZHMgPSB0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aC5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihkeW5hbWljV2lkdGhJZHMuaW5jbHVkZXMoeC51bmlxdWVfaWQpKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHgucmVzaXphYmxlID0gJ3RydWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeC53aWR0aCA9IDEwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHguZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUgPSB4LmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lICsgXCIgcmVzaXplTmV3XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmVuYWJsZVNvcnQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5lbmFibGVTb3J0LmluY2x1ZGVzKHgudW5pcXVlX2lkKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHguc29ydGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB4LnNvcnRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmZpbHRlckRhdGVhbmRUZXh0ID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmdldENoZWNrYm94ZmlsdGVyRGF0YSh0aGlzLmZpZWxkRGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmcmVzaENvbHVtblJvd09uRGF0YUNoYW5nZSgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuZHJhZ0Ryb3BUYWJsZVJvd3MgJiYgKHRoaXMudHlwZSA9PSB0aGlzLnRtcyB8fCB0aGlzLnR5cGUgPT0gdGhpcy50c3MpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkQ29sdW1ucy51bnNoaWZ0KCdSZWFycmFuZ2UnKTtcclxuICAgICAgICAgICAgdGhpcy5leHRyYVRhYmxlQ2VsbCA/IHRoaXMuZXh0cmFUYWJsZUNlbGwrKyA6IHRoaXMuZXh0cmFUYWJsZUNlbGw9MTtcclxuICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleSgpOyAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSAmJiB0aGlzLnJvd0RhdGEudmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnJvd0RhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZFRhYmxlRGF0YSh0aGlzLnJvd0RhdGEudmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBjYWxsIHRoZSBhcGkgZXZlbnQgc3VjY2VzcyBlbWl0dGVyXHJcbiAgICAgICAgICAgIGlmIChmcm9tU3RvcmUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25BUElDYWxsYmFjayhmcm9tU3RvcmUpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXNraXBPbkxvYWQgJiYgZXZlbnRfbGlzdCAmJiBldmVudF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBzZXZlbnQgb2YgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShldmVudF9saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzZXZlbnQuaXNEZWZhdWx0ICYmIHNldmVudC5ldmVudF9uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvbkxvYWQnLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIuc3dpdGNoRXZlbnREaXNwbGF5VHlwZShzZXZlbnQsIGV2ZW50X2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiQWxsIGluaXQgUHJvY2VzcyBEb25lIVwiKVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSByZWZyZXNoQ29sdW1uUm93T25EYXRhQ2hhbmdlKCl7XHJcbiAgICAgICAgaWYodGhpcy5maWVsZERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zID0gdGhpcy5maWVsZERhdGFcclxuICAgICAgICAgICAgPy5maWx0ZXIoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgaXMgbGlzdCBjZWxsIHRvIHRydWUgYW5kXHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgTGlzdCBDZWxsIENvbmZpZ1xyXG4gICAgICAgICAgICAgICAgaWYgKGMuZmllbGRfdHlwZSA9PT0gJ0xpc3RjZWxsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNMaXN0Q2VsbCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5saXN0Q2VsbEV2ZW50Q29uZmlnID0gYy5ldmVudF9saXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTZWxldGFibGUgPSBjLmlzX2VkaXRhYmxlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmlzX2Rpc3BsYXkgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZCA9IGM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmlzX2VkaXRhYmxlID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzUm93Q29uZGl0aW9uU2VsZWN0ID0gYztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNEaXNwbGF5QmxhbmtDb2x1bW4gPSBjLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoYSA9PiB7aWYoYS5wYXJhbWV0ZXJfdHlwZSA9PT0gXCJDRUVfZGlzcGxheV9ibGFua19jb2x1bW5cIil7cmV0dXJuIGE7fX0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzRGlzcGxheUJsYW5rQ29sdW1uLmxlbmd0aCA+IDAgJiYgaXNEaXNwbGF5QmxhbmtDb2x1bW5bMF0udmFsdWUudG9Mb3dlckNhc2UoKSAhPSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjLmlzX2Rpc3BsYXkgPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmlzaWJsZSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eShjLCBjLnVuaXF1ZV9pZCwgJycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdmlzaWJsZSA/IGMgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5oaWRlblJvd3MuaW5jbHVkZXMoYy51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRGaWVsZHMucHVzaChjKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYy51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pLm1hcChjID0+IGMudW5pcXVlX2lkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5kcmFnRHJvcFRhYmxlUm93cyAmJiAodGhpcy50eXBlID09IHRoaXMudG1zIHx8IHRoaXMudHlwZSA9PSB0aGlzLnRzcykpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5ZWRDb2x1bW5zLnVuc2hpZnQoJ1JlYXJyYW5nZScpO1xyXG4gICAgICAgICAgICB0aGlzLmV4dHJhVGFibGVDZWxsID8gdGhpcy5leHRyYVRhYmxlQ2VsbCsrIDogdGhpcy5leHRyYVRhYmxlQ2VsbD0xO1xyXG4gICAgICAgIH0gICAgICBcclxuICAgICAgICBpZiAodGhpcy50eXBlID09IHRoaXMudHNzIHx8IHRoaXMudHlwZSA9PSB0aGlzLnRtcykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMudW5zaGlmdCgnU2VsZWN0Jyk7XHJcbiAgICAgICAgICAgIHRoaXMuZXh0cmFUYWJsZUNlbGwgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLnR5cGUgPT09ICdUYWJsZS1FeHBhbmRhYmxlLVYyJykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXllZENvbHVtbnMucHVzaCgnZXhwYW5kYWJsZU9wdGlvbicpO1xyXG4gICAgICAgIH0gXHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBwcml2YXRlIG9uRmllbGREYXRhVXBkYXRlZChmaWVsZElkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuaXNfZGlzcGxheSA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KHRoaXMuc2VjdGlvbkRhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHJlcGVhdGFibGUgYmxvY2sgaWYgcmVxdWlyZWRcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGFbJ2N1c3RvbV9jbGFzc19jb25kaXRpb24nXSAmJiB0aGlzLnNlY3Rpb25EYXRhWydjdXN0b21fY2xhc3NfY29uZGl0aW9uJ10uaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgdGhpcy5zZWN0aW9uRGF0YVsnY3VzdG9tX2NsYXNzX2NvbmRpdGlvbiddWydxdWVyeSddICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXN0b21DbGFzc0NvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrQ3VzdG9tQ2xhc3ModGhpcy5zZWN0aW9uRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKGN1c3RvbUNsYXNzQ29uZGl0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNDdXN0b21DbGFzcyA9IGN1c3RvbUNsYXNzQ29uZGl0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldFByaW1hcnlLZXkgPSAoZGF0YSkgPT4ge1xyXG4gICAgICAgIGlmIChkYXRhLm5hbWUgJiYgZGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IGRhdGEubmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBkYXRhLnZhbHVlXHJcbiAgICAgICAgICAgIH07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc2V0VG90YWxDb3VudEFwcERhdGEodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudG90YWxDb3VudEFwcERhdGEgPSB7XHJcbiAgICAgICAgICAgIC4uLnRoaXMudG90YWxDb3VudEFwcERhdGEsXHJcbiAgICAgICAgICAgIC4uLiB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQgKyAnX3RvdGFsX2NvdW50JyxcclxuICAgICAgICAgICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyB0aGlzLnJlc3VsdENvdW50QVBJS2V5IDogJycsXHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5yZXN1bHRDb3VudEFQSUtleSksXHJcbiAgICAgICAgICAgICAgICByZXNwb25zZUFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IFtdIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyh0aGlzLnJlc3VsdENvdW50QVBJS2V5KSksXHJcbiAgICAgICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnNldEFwcERhdGEodGhpcy50b3RhbENvdW50QXBwRGF0YSk7XHJcbiAgICAgICAgY29uc3QgZW1pdE9iaiA9IHtcclxuICAgICAgICAgICAgYXBpS2V5OiB0aGlzLnJlc3VsdENvdW50QVBJS2V5LFxyXG4gICAgICAgICAgICB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuZW1pdChlbWl0T2JqKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIFNlZSBNb3JlIEJ1dHRvblxyXG4gICAgICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uID09PSBMT0FEX01PUkUpIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMucGFnZUl0ZW1zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlZU1vcmUgPSB0aGlzLnRvdGFsQ291bnRBcHBEYXRhLnZhbHVlID4gdGhpcy5wYWdlSXRlbXNbMF07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWVNb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREaXNwbGF5VmFsdWVzID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUxvZ2ljKCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5kaXNwbGF5VmFsdWVzKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BsYXlMb2dpYyA9ICgpID0+IHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNbMF0gPSBwYXJzZUludCh0aGlzLnBhZ2luYXRlVmFsdWUpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IENvbnN0YW50Lmxpc3REaXNwbGF5TG9vcExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheVZhbHVlc1tpXSA9IHRoaXMuZGlzcGxheVZhbHVlc1tpIC0gMV0gKyBDb25zdGFudC5saXN0SW5pdGlhbERpc3BsYXlWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jaGVja0NoZWNrZWRWYWx1ZXMoKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5kaXNwbGF5VmFsdWVzO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrUHJvbWlzZVZhbHVlID0gKHByb21pc2VWYWx1ZSkgPT4ge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvbWlzZVZhbHVlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChwcm9taXNlVmFsdWVbaV0gPT09IGZhbHNlIHx8IE51bWJlci5pc05hTihwcm9taXNlVmFsdWVbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRlVmFsdWUgPSBDb25zdGFudC5saXN0RGVmYXVsdFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5TG9naWMoKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGEgPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25SZXNpemUoKTtcclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlJ10gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29sdW1uUm93T25EYXRhQ2hhbmdlKCk7XHJcbiAgICAgICAgICAgIHRoaXMub25BUElDYWxsYmFjayhyZXMpOyBcclxuICAgICAgICB9LCBlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbXHJcbiAgICAgICAgICAgICdzZWFyY2hGaWx0ZXJFbWl0dGVyJ1xyXG4gICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uuc2VhcmNoRmlsdGVyRW1pdHRlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVmFsdWUgPSBkYXRhWyd2YWx1ZXMnXVswXSA/IGRhdGFbJ3ZhbHVlcyddWzBdIDogJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwuc2V0RmlsdGVyS2V5cyh0aGlzLmRhdGFTb3VyY2UsIGRhdGFbJ2ZpbHRlckNvbCddKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgb25BUElDYWxsYmFjayhyZXM6IGFueSk6IHZvaWQgeyAgICAgICAgIFxyXG4gICAgICAgIGxldCB0b3RhbFBhZ2VPYmogPSB7fTtcclxuICAgICAgICAvLyBjaGVjayBpZiBzZXJ2ZXIgc2lkZSBwYWdpbmF0aW9uIGFuZCB0aGVuIHN0b3JlIHRoZSBkYXRhIGZvciB0aGUgdG90YWxObyBPZiBQYWdlc1xyXG4gICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgLy8gc2V0dGluZyB0b3RhbCBOdW1iZXIgb2YgdmFsdWVzXHJcbiAgICAgICAgICAgIGNvbnN0IHRvdGFsUGFnZSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5wYWdpbmF0aW9uQXBpS2V5c1swXSwgcmVzKTsgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnQgPSB0b3RhbFBhZ2U7XHJcbiAgICAgICAgICAgIC8vIHNldHRpbmcgY3VycmVudCBwYWdlIG51bWJlclxyXG4gICAgICAgICAgICBjb25zdCBjdXJyUGFnZSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5wYWdpbmF0aW9uQXBpS2V5c1sxXSwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXggPSBOdW1iZXIoY3VyclBhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0b3RhbFBhZ2UpIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldCB0b3RhbCBubyBvZiBwYWdlc1xyXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlT2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMF0sXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRvdGFsUGFnZVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCh0aGlzLmlzU2luZ2xlQVBJS2V5ID8gdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5IDogdGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KSAhPT0gJycpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLnNlY3Rpb25EYXRhLCByZXMpO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGEgPSByZXN1bHQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGEgPSByZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxvYWRUYWJsZURhdGEodGhpcy5hcGlEYXRhKTsgIFxyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpOyAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24gPT09IExPQURfTU9SRSkge1xyXG4gICAgICAgICAgICBpZiAodG90YWxQYWdlT2JqICYmIHRvdGFsUGFnZU9iai5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiB0aGlzLnBhZ2luYXRpb25BcGlLZXlzICYmIHRoaXMucGFnaW5hdGlvbkFwaUtleXMubGVuZ3RoID4gMCAmJiB0aGlzLnBhZ2luYXRpb25BcGlLZXlzWzBdICYmIHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMF0uaW5jbHVkZXMocmVzLmhhbmRsZXJfbmFtZSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0VG90YWxDb3VudEFwcERhdGEodG90YWxQYWdlT2JqWyd2YWx1ZSddKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG90YWxDb3VudEFwcERhdGEodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uICYmIHRvdGFsUGFnZU9ialsndmFsdWUnXSA/IHRvdGFsUGFnZU9ialsndmFsdWUnXSA6IHRoaXMuYXBpRGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5zaG93UGFnaW5hdGlvbi50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScgJiYgdGhpcy5wYWdpbmF0b3IpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IuX2ludGwubmV4dFBhZ2VMYWJlbCA9IHRoaXMucGFnaW5hdGlvbk5leHRMYWJlbDtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IuX2ludGwucHJldmlvdXNQYWdlTGFiZWwgPSB0aGlzLnBhZ2luYXRpb25QcmV2aW91c0xhYmVsO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5faW50bC5nZXRSYW5nZUxhYmVsID0gdGhpcy5nZXRSYW5nZUxhYmVsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maXJzdExvYWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleCA9IHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleCA/IHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleC52YWx1ZSAtIDEgOiB0aGlzLnBhZ2luYXRvci5wYWdlSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZSA9IHRoaXMucGFnaW5hdGlvblBhZ2VTaXplID8gdGhpcy5wYWdpbmF0aW9uUGFnZVNpemUudmFsdWUgOiB0aGlzLnBhZ2luYXRvci5wYWdlU2l6ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RMb2FkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5wYWdpbmF0b3IgPSB0aGlzLnBhZ2luYXRvcjtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbHRlcktleXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmZpbHRlclByZWRpY2F0ZSA9IChkYXRhOiBFbGVtZW50LCBmaWx0ZXI6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb2wgaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyS2V5cy5pbmNsdWRlcyhjb2wpICYmIGRhdGFbY29sXS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkuaW5kZXhPZihmaWx0ZXIpICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZvdW5kO1xyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModG90YWxQYWdlT2JqKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IubGVuZ3RoID0gdG90YWxQYWdlT2JqWyd2YWx1ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleSh0b3RhbFBhZ2VPYmopO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEVMRU1FTlRfREFUQSA9IEFycmF5KHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplKTtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlTG9hZGluZyA9IEVMRU1FTlRfREFUQTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24udG9Mb3dlckNhc2UoKSA9PT0gTE9BRF9NT1JFICYmIHRoaXMucGFnaW5hdG9yKXtcclxuICAgICAgICAgICAgLy8gRE8gQU5ZIEFERElUSU9OQUwgTE9HSUMgRk9SIFNFRSBNT1JFXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpcnN0TG9hZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0b3IucGFnZUluZGV4ID0gdGhpcy5wYWdpbmF0aW9uUGFnZUluZGV4ID8gdGhpcy5wYWdpbmF0aW9uUGFnZUluZGV4LnZhbHVlIC0gMSA6IHRoaXMucGFnaW5hdG9yLnBhZ2VJbmRleDtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplID0gdGhpcy5wYWdpbmF0aW9uUGFnZVNpemUgPyB0aGlzLnBhZ2luYXRpb25QYWdlU2l6ZS52YWx1ZSA6IHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdExvYWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnBhZ2luYXRvciA9IHRoaXMucGFnaW5hdG9yO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsdGVyS2V5cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gKGRhdGE6IEVsZW1lbnQsIGZpbHRlcjogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbCBpbiBkYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWx0ZXJLZXlzLmluY2x1ZGVzKGNvbCkgJiYgZGF0YVtjb2xdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm91bmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0b3RhbFBhZ2VPYmopLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRvci5sZW5ndGggPSB0b3RhbFBhZ2VPYmpbJ3ZhbHVlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHRvdGFsUGFnZU9iaik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgRUxFTUVOVF9EQVRBID0gQXJyYXkodGhpcy5wYWdpbmF0b3IucGFnZVNpemUpO1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2VMb2FkaW5nID0gRUxFTUVOVF9EQVRBO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIXRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1NldCBmcm9tIHN0b3JlJ10gfHwgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1NldCBmcm9tIHN0b3JlJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snU2V0IGZyb20gc3RvcmUnXS50b0xvd2VyQ2FzZSgpICE9ICd0cnVlJykpIHtcclxuICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtbkNvbmZpZygpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseVJlc3RydWN0dXJpbmcoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Jvd1Zpc2liaWxpdHkocmVzKSB7XHJcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuaGFzUm93Q29uZGl0aW9uRmllbGQpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByZGF0YSBvZiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZpc2liaWxpdHlDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZCwgdGhpcy5oYXNSb3dDb25kaXRpb25GaWVsZC51bmlxdWVfaWQsICcnLCB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUocmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2aXNpYmlsaXR5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjaGVja1Jvd0VkaXRhYmxlKHJlcykge1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLmhhc1Jvd0NvbmRpdGlvblNlbGVjdCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJkYXRhIG9mIHJlcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdGFibGVDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKHRoaXMuaGFzUm93Q29uZGl0aW9uU2VsZWN0LCB0aGlzLmhhc1Jvd0NvbmRpdGlvblNlbGVjdC51bmlxdWVfaWQsICcnLCB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUocmRhdGEpKTtcclxuICAgICAgICAgICAgICAgIHJkYXRhWydpc1NlbGVjdGFibGUnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmRhdGFbJ2lzU2VsZWN0YWJsZSddID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHJkYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlJvdyBTZXQ6IFwiLCByZXN1bHQpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByZGF0YSBvZiByZXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDRUVfRGlzYWJsZV9TZWxlY3Rpb24nXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJkYXRhWydpc1NlbGVjdGFibGUnXSA9ICF0aGlzLnNob3VsZERpc2FibGVTZWxlY3Rpb25Gb3JSb3cocmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZGF0YVsnaXNTZWxlY3RhYmxlJ10gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZFRhYmxlRGF0YShhcGlEYXRhKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmJsb2NrUmVuZGVyZWREYXRhKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcGlEYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gYXBpRGF0YVtpXTtcclxuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoJ3Jvd0RhdGEnKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YVsncm93RGF0YSddID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZiBvZiB0aGlzLmZpZWxkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSA9IHRoaXMuZ2V0Um93RGF0YVZhbHVlKGRhdGEsIGYsIGkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHVpQXBpVmFsdWUgPSB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgICAgIGRhdGFbJ3Jvd0RhdGEnXVsnY29uZGl0aW9uYWxDdXN0b21DbGFzcyddID0gdGhpcy5nZXRDb25kaXRpb25hbENsYXNzKHVpQXBpVmFsdWUsIGZhbHNlKSA/IHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUgOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBBc3NpZ24gdGhlIGRhdGEgdG8gdGhlIGRhdGEgc291cmNlIGZvciB0aGUgdGFibGUgdG8gcmVuZGVyXHJcbiAgICAgICAgdGhpcy50YWJsZURhdGEgPSBhcGlEYXRhO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5jaGVja1Jvd1Zpc2liaWxpdHkodGhpcy50YWJsZURhdGEpO1xyXG4gICAgICAgIHRoaXMudGFibGVEYXRhID0gdGhpcy5jaGVja1Jvd0VkaXRhYmxlKHRoaXMudGFibGVEYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLnNob3dQYWdpbmF0aW9uLnRvTG93ZXJDYXNlKCkgIT09IExPQURfTU9SRSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoKTsgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXREZWZhdWx0U29ydCgpOyBcclxuICAgICAgICBpZiAoIXRoaXMuc2VydmVyU29ydCkge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2Uuc29ydCA9IHRoaXMuc29ydDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gdGhpcy5zaG93U2tlbGV0b25Mb2FkZXIgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5vblJlc2l6ZSgpO1xyXG4gICAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcclxuICAgICAgICBpZih0aGlzLmZpbHRlckRhdGVhbmRUZXh0ID09IHRydWUpe1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyUHJlZGljYXRlID0gdGhpcy5jcmVhdGVGaWx0ZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXREZWZhdWx0U29ydCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zb3J0QXBpS2V5cyAmJiB0aGlzLnNvcnRBcGlLZXlzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBsZXQgc29ydEJ5VmFsdWUsIHNvcnRUeXBlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnN0IHNvcnRCeSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMuc29ydEFwaUtleXNbMF0pO1xyXG4gICAgICAgICAgICBjb25zdCBzb3J0VHlwZSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMuc29ydEFwaUtleXNbMV0pO1xyXG4gICAgICAgICAgICBpZiAoc29ydEJ5ICYmIHNvcnRCeS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSAmJiBzb3J0VHlwZSAmJiBzb3J0VHlwZS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgc29ydEJ5VmFsdWUgPSBzb3J0QnkudmFsdWU7XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZVZhbHVlID0gc29ydFR5cGUudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zb3J0QXBpVmFsdWVzLmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNvcnRBcGlLZXlzWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvcnRBcGlWYWx1ZXNbMF1cclxuICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnNvcnRBcGlLZXlzWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnNvcnRBcGlWYWx1ZXNbMV1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgc29ydEJ5VmFsdWUgPSB0aGlzLnNvcnRBcGlWYWx1ZXNbMF07XHJcbiAgICAgICAgICAgICAgICBzb3J0VHlwZVZhbHVlID0gdGhpcy5zb3J0QXBpVmFsdWVzWzFdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChzb3J0QnlWYWx1ZSAmJiBzb3J0VHlwZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgc29ydEZpZWxkID0gdGhpcy5maWVsZERhdGEgPyB0aGlzLmZpZWxkRGF0YS5maW5kKGYgPT4gZi5yZXNwb25zZV9hcGlfa2V5ID09PSBzb3J0QnlWYWx1ZSkgOiAnJzsgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWV6ZVNvcnQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgbGV0IHNEaXJlY3Rpb246IFNvcnREaXJlY3Rpb24gPSAnJztcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc29ydFR5cGVWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2FzYyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNEaXJlY3Rpb24gPSBcImFzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdkZXNjJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgc0RpcmVjdGlvbiA9IFwiZGVzY1wiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzRGlyZWN0aW9uID0gXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzb3J0U3RhdGU6IFNvcnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aXZlOiBzb3J0RmllbGQgJiYgc29ydEZpZWxkLnVuaXF1ZV9pZCA/IHNvcnRGaWVsZC51bmlxdWVfaWQgOiAnJywgXHJcbiAgICAgICAgICAgICAgICAgICAgZGlyZWN0aW9uOiBzRGlyZWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9OyAgIFxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aCAmJiB0aGlzLnNvcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQuYWN0aXZlID0gc29ydFN0YXRlLmFjdGl2ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQuZGlyZWN0aW9uID0gc29ydFN0YXRlLmRpcmVjdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNvcnQuc29ydENoYW5nZS5lbWl0KHNvcnRTdGF0ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy5oZWFkZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oZWFkZXJzLmZvckVhY2goKGhlYWRlcikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGVhZGVyLnNvcnRhYmxlID09PSBzb3J0U3RhdGUuYWN0aXZlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWFkZXIuZGlyZWN0aW9uID0gc29ydFR5cGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlci5zb3J0aW5nID0gJ3RydWUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhZGVyLnNvcnQuZW1pdCh7IGNvbHVtbjogc29ydFN0YXRlLmFjdGl2ZSwgZGlyZWN0aW9uOiBzb3J0VHlwZVZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZyZWV6ZVNvcnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xyXG4gICAgICAgIGlmICghdGhpcy5zZXJ2ZXJTb3J0ICYmIHRoaXMuc29ydCAmJiAhdGhpcy5kYXRhU291cmNlLnNvcnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLnNvcnQgPSB0aGlzLnNvcnQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFJvd0RhdGFWYWx1ZShkYXRhLCBmaWVsZCwgbGlzdF9wb3MpIHtcclxuICAgICAgICBjb25zdCBhcGlEYXRhID0gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShmaWVsZCwgZGF0YSk7XHJcbiAgICAgICAgZGF0YVtmaWVsZC51bmlxdWVfaWRdID0gYXBpRGF0YTtcclxuICAgICAgICBsZXQgbGFiZWxUeXBlID0gJyc7XHJcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgICAgICAgbGFiZWxUeXBlID0gKHRoaXMuaXNTaW5nbGVBUElLZXkgPyBmaWVsZC5hcGlfa2V5IDogZmllbGQucmVzcG9uc2VfYXBpX2tleSkgPyAnJyA6ICdTVEFUSUMnO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9Gb3IgYWRkaXRpb25hbCBwYXJhbXMgYXMga2V5OnZhbHVlIHBhaXJzIFxyXG4gICAgICAgIGNvbnN0IGFkZGl0aW9uYWxQYXJhbXM6IGFueSA9IGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5yZWR1Y2UoKGFjYywgY3VycikgPT4ge1xyXG4gICAgICAgICAgICBhY2NbY3Vyci5wYXJhbWV0ZXJfdHlwZV0gPSBjdXJyLnZhbHVlO1xyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIHt9KTtcclxuXHJcbiAgICAgICAgLy9DaGVjayBvZiBmaWVsZCBoYXMgcmVzcG9uc2VfYXBpX2tleSAmJiBhZGRpdGlvbmFsUGFyYW1zIGhhcyBDRUVfdGFibGVfY2VsbF92YWx1ZXNcclxuICAgICAgICBpZihhZGRpdGlvbmFsUGFyYW1zLmhhc093blByb3BlcnR5KFwiQ0VFX3RhYmxlX2NlbGxfdmFsdWVzXCIpICYmIGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAoYWRkaXRpb25hbFBhcmFtcy5oYXNPd25Qcm9wZXJ0eShcIkNFRV9UaG91c2FuZF9TZXBhcmF0b3JcIikgJiYgKGFkZGl0aW9uYWxQYXJhbXNbXCJDRUVfVGhvdXNhbmRfU2VwYXJhdG9yXCJdKS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSA9IHRoaXMuY29tbW9uVXRpbC5mb3JtYXROdW1iZXIoZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSAhPSAnJyAmJiBkYXRhW2ZpZWxkLnJlc3BvbnNlX2FwaV9rZXldICE9IG51bGwgJiYgZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSAhPSB1bmRlZmluZWQgJiYgIWRhdGFbZmllbGQucmVzcG9uc2VfYXBpX2tleV0uaW5jbHVkZXMoJy4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbZmllbGQucmVzcG9uc2VfYXBpX2tleV0gKz0gJy4wMCc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc0RhdGEgPSB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2tleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNEYXRhW2tleV0gPSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgICAgIHZhbHVlID0gKGZpZWxkICYmIGZpZWxkLmZpZWxkX3R5cGUgJiYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcgJiYgZmllbGQuZmllbGRfbGFiZWwgJiYgZmllbGQuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykgfHxcclxuICAgICAgICAgICAgKGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiBmaWVsZC5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpKSkgP1xyXG4gICAgICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKGZpZWxkLCBkYXRhKS5maWVsZF9sYWJlbCA6XHJcbiAgICAgICAgICAgIGxhYmVsVHlwZSA9PT0gJ1NUQVRJQycgPyBmaWVsZC5maWVsZF9sYWJlbCA6IGFwaURhdGE7XHJcbiAgICAgICAgaWYoZmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTw9IGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgICBpZihmaWVsZC5hZGRpdGlvbmFsX3BhcmFtZXRlcnNbaV0/LnBhcmFtZXRlcl90eXBlID09PSBcIkNFRV90YWJsZV9jZWxsX3ZhbHVlc1wiKXtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZHluYW1pY1ZhbCA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUoZmllbGQsIGRhdGEpLmFkZGl0aW9uYWxfcGFyYW1ldGVyc19jb25maWc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoZmllbGQucmVzcG9uc2VfYXBpX2tleS5sZW5ndGggPiAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSA9IGR5bmFtaWNWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkeW5hbWljUG9zaXRpb24gPSBkeW5hbWljVmFsLnN1YnN0cihkeW5hbWljVmFsLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsUG9zaXRpb24gPSBkeW5hbWljVmFsLnNsaWNlKDAsLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGR5bmFtaWNQb3NpdGlvbiA9PSAncycpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGxQb3NpdGlvbiArICcgJyArIGFwaURhdGFcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYoZHluYW1pY1Bvc2l0aW9uID09ICdlJyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYXBpRGF0YSArICcgJyArIGxQb3NpdGlvblxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihkeW5hbWljUG9zaXRpb24gPT0gJ24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gbFBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhcGlEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCAmJiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMiB8fCBmaWVsZC5pc19lZGl0YWJsZSA9PT0gMikpIHtcclxuICAgICAgICAgICAgbGV0IGlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgc2tpcGlzRGlzcGxheUNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pc19lZGl0YWJsZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHVpQXBpVmFsdWUgPSB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCBpc0Rpc3BsYXlCbGFua0NvbHVtbiA9IGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoYSA9PiB7aWYoYS5wYXJhbWV0ZXJfdHlwZSA9PT0gXCJDRUVfZGlzcGxheV9ibGFua19jb2x1bW5cIil7cmV0dXJuIGE7fX0pOyAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgaWYoaXNEaXNwbGF5QmxhbmtDb2x1bW4ubGVuZ3RoID4gMCAmJiBpc0Rpc3BsYXlCbGFua0NvbHVtblswXS52YWx1ZS50b0xvd2VyQ2FzZSgpICE9IFwidHJ1ZVwiKSB7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHNraXBpc0Rpc3BsYXlDaGVjayA9IHRydWU7XHJcbiAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogZmllbGQudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgaHRtbF9pZDogdGhpcy5odG1sX2lkICsgJy0nICsgZmllbGQudW5pcXVlX2lkICsgJy0nICsgbGlzdF9wb3MsXHJcbiAgICAgICAgICAgICAgICBmcm9tRmllbGQ6ICdUYWJsZScsXHJcbiAgICAgICAgICAgICAgICB2aXNpYmxlOiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMiAmJiAhc2tpcGlzRGlzcGxheUNoZWNrKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25kaXRpb25hbFZpc2libGUodWlBcGlWYWx1ZSwgaXNWaXNpYmxlLCBmaWVsZCkgOiBpc1Zpc2libGUsXHJcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogZmllbGQuaXNfZWRpdGFibGUgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uZGl0aW9uYWxFZGl0YWJsZSh1aUFwaVZhbHVlLCBpc0VkaXRhYmxlLCBmaWVsZCkgOiBpc0VkaXRhYmxlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IGZpZWxkLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgIGh0bWxfaWQ6IHRoaXMuaHRtbF9pZCArICctJyArIGZpZWxkLnVuaXF1ZV9pZCArICctJyArIGxpc3RfcG9zLFxyXG4gICAgICAgICAgICAgICAgZnJvbUZpZWxkOiAnVGFibGUnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlLFxyXG4gICAgICAgICAgICAgICAgZGF0YTogcmVzRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgbGF6eUxvYWRpbmcoKSB7XHJcbiAgICAgICAgdGhpcy50YWJsZURhdGFMYXp5ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJvd0RhdGFMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhenlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnRhYmxlRGF0YS5sZW5ndGggIT09IHRoaXMudGFibGVEYXRhTGF6eS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudGFibGVEYXRhTGF6eS5wdXNoKHRoaXMudGFibGVEYXRhW3RoaXMudGFibGVEYXRhTGF6eS5sZW5ndGhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uID09PSBMT0FEX01PUkUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTaG93TW9yZUNsaWNrZWQgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kRGF0YU9uU2VlTW9yZUNsaWNrZWQoWy4uLnRoaXMudGFibGVEYXRhXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNTaG93TW9yZUNsaWNrZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmlzTWF0U29ydENsaWNrZWQpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNYXRTb3J0Q2xpY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMudGFibGVEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdGhpcy50YWJsZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMudGFibGVEYXRhTGF6eTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuc2hvd1BhZ2luYXRpb24gPT09IExPQURfTU9SRSAmJiB0aGlzLnRhYmxlRGF0YS5sZW5ndGggPT0gMCAmJiB0aGlzLnRhYmxlRGF0YUxhenkubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgIC8vIFdoZW4gVGFibGUgZGF0YSBpcyBlbXB0eSBhZnRlciBkZWxldGluZyBhbGwgdGhlIHJlY29yZHMsIHNldHMgdGhlIGVtcHR5IGRhdGEuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMudGFibGVEYXRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd0RhdGFMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTa2VsZXRvbkxvYWRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxhenlJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICAgdGhpcy5sYXp5SW50ZXJ2YWwgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRTZWxlY3Rpb24oKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIEhpZGUgdGhlIG1vZGFsIHBvcHVwIGxvYWRlciBpZiBpdCBydW5uaW5nXHJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2RhbFdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvYWRlci1vdmVybGF5JykgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICBpZiAobW9kYWxXcmFwcGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWxXcmFwcGVyLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG4gICAgYXBwZW5kRGF0YU9uU2VlTW9yZUNsaWNrZWQobmV3RGF0YTogYW55W10pIHtcclxuICAgICAgICAvLyBHZXQgdGhlIGN1cnJlbnQgZGF0YVxyXG4gICAgICAgIGNvbnN0IGN1cnJlbnREYXRhID0gdGhpcy5kYXRhU291cmNlLmRhdGE7XHJcbiAgICAgICAgLy8gQ29uY2F0ZW5hdGUgbmV3IGRhdGEgd2l0aCBleGlzdGluZyBkYXRhXHJcbiAgICAgICAgY29uc3QgdXBkYXRlZERhdGEgPSBbLi4uY3VycmVudERhdGEsIC4uLm5ld0RhdGFdO1xyXG4gICAgICAgIC8vIFNldCB0aGUgdXBkYXRlZCBkYXRhIGJhY2sgdG8gdGhlIGRhdGFTb3VyY2VcclxuICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHVwZGF0ZWREYXRhO1xyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0aW9uKCkge1xyXG4gICAgICAgIGxldCBkYXRhO1xyXG4gICAgICAgIGlmICh0aGlzLnByaW1hcnlLZXlSZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5wcmltYXJ5S2V5UmVzLnNwbGl0KCcjIycpWzBdKTtcclxuICAgICAgICAgICAgaWYgKGhhbmRsZXJEYXRhICYmIGhhbmRsZXJEYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLnByaW1hcnlLZXlSZXMsIGhhbmRsZXJEYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YS5mb3JFYWNoKChyb3cpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihkYXRhLmluY2x1ZGVzKHJvd1t0aGlzLmdldFZhbHVlZm9ybUtleSh0aGlzLnByaW1hcnlLZXlWYWwpXSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zdG9yZURhdGEgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICAvLyBASG9zdExpc3RlbmVyKFwid2luZG93OmJlZm9yZXVubG9hZFwiLCBbXCIkZXZlbnRcIl0pIHVubG9hZEhhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAvLyAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICB0aGlzLnRhYmxlRGF0YUxhenkgPSBbXTtcclxuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UuZGF0YSA9IHRoaXMudGFibGVEYXRhTGF6eTtcclxuICAgIC8vIH1cclxuXHJcblxyXG4gICAgLy8gVE9ETzogRGVsZXRlIHRoaXMgZnVuY3Rpb24gb25jZSB0aGUgY29uZGl0aW9uYWwgc3RhdGVtZW50cyBkZXBlbmQgb24gdGhlIGFwaSBrZXkgdGhlbiBvbmx5IHJldHVybiB0aGUgc2luZ2xlIGFwaSByZXNwb25zZSBvYmpcclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyB0aGUgbWFwcGluZyBvZiB1bmlxdWUgaWQgdG8gdGhlIGFwaSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIGFwaVJlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgaS5lLiB0aGUgc2luZ2xlIGluZGV4IG9mIHRoZSBhcnJheVxyXG4gICAgICovXHJcbiAgICByZXR1cm5VbmlxdWVJZE1hcEFwaVZhbHVlKGFwaVJlc3BvbnNlKSB7XHJcbiAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoYXBpUmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLmZpZWxkSWRNYXBBcGlLZXkpLmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gdGhpcy5maWVsZElkTWFwQXBpS2V5W2tleV07XHJcbiAgICAgICAgICAgICAgICBvYmpbdW5pcXVlSWRdID0gYXBpUmVzcG9uc2Vba2V5XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSB2aXNpYmxlIGNvbmRpdGlvblxyXG4gICAgICogQHBhcmFtIGRhdGEgYXBpIHJlc3BvbnNlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHByZXNlbnRWYWx1ZSBwcmVzZW50IHZhbHVlIG9mIHRoZSBmaWVsZFxyXG4gICAgICogQHBhcmFtIGZpZWxkIHRoZSBmaWVsZCBwcm9wZXJ0eSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2V0Q29uZGl0aW9uYWxWaXNpYmxlKGRhdGEsIHByZXNlbnRWYWx1ZSwgZmllbGQpIHtcclxuICAgICAgICBjb25zdCB2aXNpYmlsaXR5Q29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KGZpZWxkLCBmaWVsZC51bmlxdWVfaWQsICcnLCBkYXRhKTtcclxuICAgICAgICBpZiAodmlzaWJpbGl0eUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gdmlzaWJpbGl0eUNvbmRpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByZXNlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybiB0aGUgZWRpdGFibGUgY29uZGl0aW9uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBhcGkgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gcHJlc2VudFZhbHVlIHByZXNlbnQgdmFsdWUgb2YgdGhlIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgdGhlIGZpZWxkIHByb3BlcnR5IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRDb25kaXRpb25hbEVkaXRhYmxlKGRhdGEsIHByZXNlbnRWYWx1ZSwgZmllbGQpIHtcclxuICAgICAgICBjb25zdCBlZGl0YWJsZUNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrRWRpdGFibGUoZmllbGQsIGZpZWxkLnVuaXF1ZV9pZCwgJycsIGRhdGEpO1xyXG4gICAgICAgIGlmIChlZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICByZXR1cm4gZWRpdGFibGVDb25kaXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwcmVzZW50VmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIGVkaXRhYmxlIGNvbmRpdGlvblxyXG4gICAgICogQHBhcmFtIGRhdGEgYXBpIHJlc3BvbnNlIG9iamVjdFxyXG4gICAgICogQHBhcmFtIHByZXNlbnRWYWx1ZSBwcmVzZW50IHZhbHVlIG9mIHRoZSBmaWVsZFxyXG4gICAgICovXHJcbiAgICBnZXRDb25kaXRpb25hbENsYXNzKGRhdGEsIHByZXNlbnRWYWx1ZSkge1xyXG4gICAgICAgIGNvbnN0IENsYXNzQ29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tDbGFzcyhkYXRhLCB0aGlzLmJsb2NrUmVuZGVyZWREYXRhKTtcclxuICAgICAgICBpZiAoQ2xhc3NDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgcmV0dXJuIENsYXNzQ29uZGl0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJlc2VudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbWFwIGJldHdlZW4gZmllbGRJZCBhbmQgYXBpIGtleVxyXG4gICAgICovXHJcbiAgICByZXR1cm5GaWVsZElkTWFwQXBpS2V5KCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZERhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5yZXR1cm5GaWVsZElkTWFwQXBpS2V5VmFsdWUob2JqLCBmaWVsZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmllbGRJZE1hcEFwaUtleSA9IG9iajtcclxuICAgIH1cclxuICAgIC8vIGlubmVyIGZ1bmN0aW9uIG9mIHJldHVybkZpZWxkSWRNYXBBcGlLZXlcclxuICAgIHByaXZhdGUgcmV0dXJuRmllbGRJZE1hcEFwaUtleVZhbHVlKG9iaiwgZmllbGQpIHtcclxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFQSUtleSAmJiBmaWVsZC5hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgIG9ialtmaWVsZC5hcGlfa2V5XSA9IGZpZWxkLnVuaXF1ZV9pZDsgLy8gVE9ETzogU3VwcG9ydCBtdWx0aXBsZSBhcGkga2V5c1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5yZXNwb25zZV9hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQucmVzcG9uc2VfYXBpX2tleS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5cyA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoZmllbGQucmVzcG9uc2VfYXBpX2tleSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBmaWVsZC51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpbZmllbGQucmVzcG9uc2VfYXBpX2tleV0gPSBmaWVsZC51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0UmFuZ2VMYWJlbCA9IChwYWdlOiBudW1iZXIsIHBhZ2VTaXplOiBudW1iZXIsIGxlbmd0aDogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHBJbmZvO1xyXG4gICAgICAgIGlmICh0aGlzLmZpcnN0TG9hZCkge1xyXG4gICAgICAgICAgICBwYWdlID0gdGhpcy5wYWdpbmF0aW9uUGFnZUluZGV4ICYmIHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleC52YWx1ZSA/IHRoaXMucGFnaW5hdGlvblBhZ2VJbmRleC52YWx1ZSAtIDEgOiBwYWdlO1xyXG4gICAgICAgICAgICBwYWdlU2l6ZSA9IHRoaXMucGFnaW5hdGlvblBhZ2VTaXplICYmIHRoaXMucGFnaW5hdGlvblBhZ2VTaXplLnZhbHVlID8gdGhpcy5wYWdpbmF0aW9uUGFnZVNpemUudmFsdWUgOiBwYWdlU2l6ZTtcclxuICAgICAgICAgICAgbGVuZ3RoID0gdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudCAmJiB0aGlzLnBhZ2luYXRpb25Ub3RhbENvdW50LnZhbHVlID8gdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudC52YWx1ZSA6IGxlbmd0aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxlbmd0aCA9PT0gMCB8fCBwYWdlU2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICBwSW5mbyA9IGAwICR7dGhpcy5wYWdpbmF0aW9uU2VwYXJhdG9yfSAke2xlbmd0aH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgbGVuZ3RoID0gTWF0aC5tYXgobGVuZ3RoLCAwKTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRJbmRleCA9IHBhZ2UgKiBwYWdlU2l6ZTtcclxuICAgICAgICAgICAgY29uc3QgZW5kSW5kZXggPSBzdGFydEluZGV4IDwgbGVuZ3RoID8gTWF0aC5taW4oc3RhcnRJbmRleCArIHBhZ2VTaXplLCBsZW5ndGgpIDogc3RhcnRJbmRleCArIHBhZ2VTaXplO1xyXG4gICAgICAgICAgICBwSW5mbyA9IGAke3N0YXJ0SW5kZXggKyAxfSAtICR7ZW5kSW5kZXh9ICR7dGhpcy5wYWdpbmF0aW9uU2VwYXJhdG9yfSAke2xlbmd0aH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMucGFnaW5hdGlvblNob3dpbmdSZXN1bHRIaW50KS5yZXBsYWNlKCcldmFsdWUlJywgcEluZm8pO1xyXG4gICAgfVxyXG5cclxuICAgIGlzU29ydGluZ0Rpc2FibGVkKGNvbHVtbikge1xyXG4gICAgICAgIGlmICh0aGlzLmVuYWJsZVNvcnQubGVuZ3RoID4gMCAmJiAhdGhpcy5lbmFibGVTb3J0LmluY2x1ZGVzKGNvbHVtbikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIERvIG5vdCBmb3JnZXQgdG8gdW5zdWJzY3JpYmUgdGhlIGV2ZW50XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52YXJpYWJsZU9iamVjdCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9iamVjdFtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0W2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0ID0ge307XHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICB0aGlzLmxhenlJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENsZWFuIHVwIHRhYmxlIGRhdGFcclxuICAgICAgICB0aGlzLnRhYmxlRGF0YUxhenkgPSBbXTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDbGVhbiB1cCBjb21wb25lbnQgbWFwIG9ic2VydmFibGVzXHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5jb21wb25lbnRMaXN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3Rba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuY29tcG9uZW50TGlzdFtrZXldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGltZW91dElkcy5mb3JFYWNoKGlkID0+IGNsZWFyVGltZW91dChpZCkpO1xyXG5cdCAgICB0aGlzLnRpbWVvdXRJZHMgPSBbXTtcclxuICAgICAgICAgLy8gQWRkaXRpb25hbCBjbGVhbnVwXHJcbiAgICAgICAgdGhpcy5hcGlEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5hcGlEYXRhQ29weSA9IFtdO1xyXG4gICAgICAgIHRoaXMuZGlzcGxheVZhbHVlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuc3RvcmVEYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMgPSBbXTtcclxuICAgICAgICB0aGlzLmZpbHRlclZhbHVlcyA9IHt9O1xyXG4gICAgICAgIHRoaXMudGFzayA9IHt9O1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrQ2hlY2tlZFZhbHVlcygpIHtcclxuICAgICAgICAvLyBzdG9yZSB0aGUgdmFsdWVzIG9mIHRoZSBjaGVja2VkSXRlbXNcclxuICAgICAgICAvLyBpZiAodGhpcy50eXBlID09PSB0aGlzLnRtcykge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5zdG9yZURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMgPSBbXTtcclxuICAgICAgICAvLyAgICAgICAgIGZvciAoY29uc3Qgc2luZ2xlUmVzIG9mIHRoaXMuZGlzcGxheVZhbHVlcykge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmICgodGhpcy5zdG9yZURhdGEpLmluY2x1ZGVzKHNpbmdsZVJlcykpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMucHVzaChzaW5nbGVSZXMpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zLnB1c2goe30pO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBsaXN0X2NoYW5nZShkYXRhOiBhbnksIGlzQ2hlY2tlZDogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLnByaW1hcnlLZXlWYWx1ZSAmJiB0aGlzLnR5cGUgPT09IHRoaXMudG1zKSB7XHJcbiAgICAgICAgICAgIGlzQ2hlY2tlZD8gdGhpcy5zZWxlY3Rpb24uc2VsZWN0KGRhdGFbdGhpcy5wcmltYXJ5S2V5VmFsdWVdKSA6IHRoaXMuc2VsZWN0aW9uLmRlc2VsZWN0KGRhdGFbdGhpcy5wcmltYXJ5S2V5VmFsdWVdKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaXNDaGVja2VkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09IHRoaXMudHNzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnN0b3JlRGF0YSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yYWRpb1ZhbHVlID0gZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIHRoaXMuc3RvcmVEYXRhLnB1c2goSlNPTi5zdHJpbmdpZnkoZGF0YSkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGlmICh0aGlzLnN0b3JlRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnN0b3JlRGF0YS5zcGxpY2UodGhpcy5zdG9yZURhdGEuaW5kZXhPZihKU09OLnN0cmluZ2lmeShkYXRhKSksIDEpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcmVQcmltYXJ5S2V5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2xlYXJNdWx0aVNlbGVjdENvbHVtbk1hcHBpbmdzKCkge1xyXG4gICAgICAgIC8vIENoZWNrIGlmIE11bHRpU2VsZWN0Q29sdW1uTmFtZXMgYXJlIHByZXNlbnQgYW5kIGNsZWFyIHRoZWlyIHZhbHVlc1xyXG4gICAgICAgIGNvbnN0IG11bHRpU2VsZWN0Q29sdW1ucyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnM/LlsnTXVsdGlTZWxlY3RDb2x1bW5OYW1lcyddO1xyXG4gICAgICAgIGlmIChtdWx0aVNlbGVjdENvbHVtbnMpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uTmFtZXMgPSBtdWx0aVNlbGVjdENvbHVtbnMuc3BsaXQoJ3wnKS5tYXAoY29sID0+IGNvbC50cmltKCkpO1xyXG4gXHJcbiAgICAgICAgICAgIC8vIENsZWFyIGVhY2ggY29sdW1uIG1hcHBpbmcgYXMgc2VwYXJhdGUgZW50cmllcyBpbiBhcHBEYXRhU2VydmljZVxyXG4gICAgICAgICAgICBjb2x1bW5OYW1lcy5mb3JFYWNoKGNvbHVtbk5hbWUgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGluZ1Byb3BlcnR5TmFtZSA9IGAke2NvbHVtbk5hbWV9TWFwcGluZ2A7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW5BcHBEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBtYXBwaW5nUHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiBtYXBwaW5nUHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW10sIC8vIENsZWFyIHRvIGVtcHR5IGFycmF5XHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5zZXRBcHBEYXRhKHsgLi4uY29sdW1uQXBwRGF0YSB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gXHJcbiAgICBwcml2YXRlIGRlYm91bmNlVGltZW91dDogYW55O1xyXG4gICAgc3RvcmVQcmltYXJ5S2V5KCkge1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgYWRkaXRpb25hbFBhcmFtIG9mIHRoaXMuc2VjdGlvbkRhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgLy8gICAgIGlmIChhZGRpdGlvbmFsUGFyYW0ucGFyYW1ldGVyX3R5cGUgPT09ICdQcmltYXJ5S2V5TmFtZScpIHtcclxuICAgICAgICAvLyAgICAgICAgIGNvbnN0IHByaW1hcnlLZXlWYWx1ZSA9IFtdO1xyXG4gICAgICAgIC8vICAgICAgICAgZm9yIChjb25zdCBkYXRhIG9mIHRoaXMuc3RvcmVEYXRhKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgcHJpbWFyeUtleVZhbHVlLnB1c2goZGF0YVt0aGlzLmdldFZhbHVlZm9ybUtleShhZGRpdGlvbmFsUGFyYW0udmFsdWUpXSk7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlkOiB0aGlzLmdldFByaW1hcnlLZXkoYWRkaXRpb25hbFBhcmFtLnZhbHVlKSxcclxuICAgICAgICAvLyAgICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGFwaUtleTogdGhpcy5nZXRQcmltYXJ5S2V5KGFkZGl0aW9uYWxQYXJhbS52YWx1ZSksXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdmFsdWU6ICh0aGlzLnR5cGUgPT09ICdUYWJsZS1TaW5nbGUtU2VsZWN0JyA/IHByaW1hcnlLZXlWYWx1ZVswXSA6IHByaW1hcnlLZXlWYWx1ZSlcclxuICAgICAgICAvLyAgICAgICAgIH07XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLnNldEFwaURhdGEoT2JqZWN0LmFzc2lnbih7fSwgYXBpRGF0YSkpO1xyXG4gICAgICAgIC8vICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNoYW5nZVZhbHVlJyk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5lbWl0Rm9yRmllbGRzU2VjdGlvbkJsb2NrKGFwaURhdGEpO1xyXG4gICAgICAgIC8vICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgIGlmICh0aGlzLmRlYm91bmNlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVRpbWVvdXQpO1xyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIHRoaXMuZGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIC8vIEdldCBjb2x1bW4gbmFtZXMgZnJvbSBhZGRpdGlvbmFsUGFyYW1ldGVyc1xyXG4gICAgICAgICAgICBjb25zdCBtdWx0aVNlbGVjdENvbHVtbnMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzPy5bJ011bHRpU2VsZWN0Q29sdW1uTmFtZXMnXTtcclxuICAgICAgICAgICAgbGV0IGNvbHVtbk1hcHBpbmdzID0ge307XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChtdWx0aVNlbGVjdENvbHVtbnMpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsZWFyIHByZXZpb3VzIG1hcHBpbmdzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNsZWFyTXVsdGlTZWxlY3RDb2x1bW5NYXBwaW5ncygpOyBcclxuICAgICAgICAgICAgICAgIC8vIFBhcnNlIHBpcGUtc2VwYXJhdGVkIGNvbHVtbiBuYW1lc1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uTmFtZXMgPSBtdWx0aVNlbGVjdENvbHVtbnMuc3BsaXQoJ3wnKS5tYXAoY29sID0+IGNvbC50cmltKCkpO1xyXG4gXHJcbiAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbWFwcGluZyBmb3IgZWFjaCBjb2x1bW4gYW5kIHN0b3JlIHNlcGFyYXRlbHkgaW4gYXBwRGF0YVNlcnZpY2VcclxuICAgICAgICAgICAgICAgIGNvbHVtbk5hbWVzLmZvckVhY2goY29sdW1uTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uVmFsdWVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5mb3JFYWNoKHNlbGVjdGVkSWQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBGaW5kIHRoZSBvcmlnaW5hbCByb3cgZGF0YSBmcm9tIGRhdGFTb3VyY2UgdXNpbmcgdGhlIHNlbGVjdGVkIElEXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsUm93ID0gdGhpcy5kYXRhU291cmNlLmRhdGEuZmluZChyb3cgPT4gcm93W3RoaXMucHJpbWFyeUtleVZhbHVlXSA9PT0gc2VsZWN0ZWRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFJvdykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGNvbHVtblZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgY29sdW1uIGV4aXN0cyBhbmQgaGFzIGEgdmFsdWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbFJvd1tjb2x1bW5OYW1lXSAhPT0gdW5kZWZpbmVkICYmIG9yaWdpbmFsUm93W2NvbHVtbk5hbWVdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sdW1uVmFsdWUgPSBvcmlnaW5hbFJvd1tjb2x1bW5OYW1lXS50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbHVtblZhbHVlcy5wdXNoKGNvbHVtblZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RvcmUgZWFjaCBjb2x1bW4gbWFwcGluZyBhcyBzZXBhcmF0ZSBlbnRyeSBpbiBhcHBEYXRhU2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBpbmdQcm9wZXJ0eU5hbWUgPSBgJHtjb2x1bW5OYW1lfU1hcHBpbmdgO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbkFwcERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBtYXBwaW5nUHJvcGVydHlOYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwSWQ6IHRoaXMuc3RlcElkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IG1hcHBpbmdQcm9wZXJ0eU5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUFwaUtleTogW10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBjb2x1bW5WYWx1ZXMsIC8vIEFsd2F5cyBzdG9yZSB0aGUgYXJyYXksIGV2ZW4gaWYgZW1wdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnNldEFwcERhdGEoeyAuLi5jb2x1bW5BcHBEYXRhIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFN0b3JlIHByaW1hcnkga2V5IGRhdGEgc2VwYXJhdGVseSBpbiBhcGlEYXRhU2VydmljZSAod2l0aG91dCBjb2x1bW4gbWFwcGluZ3MpXHJcbiAgICAgICAgICAgIGNvbnN0IGFwaURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICBpZDogdGhpcy5wcmltYXJ5S2V5TmFtZSxcclxuICAgICAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMucHJpbWFyeUtleU5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKHRoaXMudHlwZSA9PT0gJ1RhYmxlLVNpbmdsZS1TZWxlY3QnID8gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWRbMF0gOiB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZClcclxuICAgICAgICAgICAgfTtcclxuIFxyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLnNldEFwaURhdGEoeyAuLi5hcGlEYXRhIH0pO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2hhbmdlVmFsdWUnKTtcclxuICAgICAgICAgICAgdGhpcy5lbWl0Rm9yRmllbGRzU2VjdGlvbkJsb2NrKGFwaURhdGEpOyAgICAgICAgICAgIFxyXG4gICAgICAgIH0sIDUwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbWl0IG9uIERhdGEgU2V0IG9yIFVwZGF0ZWRcclxuICAgIHByaXZhdGUgZW1pdEZvckZpZWxkc1NlY3Rpb25CbG9jayhlbWl0T2JqKSB7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuZW1pdChlbWl0T2JqKTsgLy8gRm9yIEZpZWxkc1xyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yU2VjdGlvbi5lbWl0KGVtaXRPYmopOyAvLyBGb3IgU2VjdGlvbnNcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZEZvckJsb2NrLmVtaXQoZW1pdE9iaik7IC8vIEZvciBCbG9ja3NcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZEZvckdlbmVyaWNCbG9jay5lbWl0KGVtaXRPYmopOyAvLyBGb3IgR2VuZXJpYyBCbG9ja3NcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHRyaWdnZXIgZXZlbnQgaWYgdGhlcmUgaGFzIGJlZW4gYW4gZXZlbnQgdHJpZ2dlcmVkIG9uIHRoZSB0YWJsZVxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIG9uQ29tcG9uZW50RXZlbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEgJiYgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEgJiYgdGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0ICYmIHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUgJiYgZXZlbnQuZXZlbnRfbmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoZXZlbnQsIHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFByaW1hcnlLZXkoa2V5OiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBkYXRhID0ga2V5LnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZGF0YVswXS50cmltKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGtleTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VmFsdWVmb3JtS2V5KGtleSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBrZXkuc3BsaXQoJ3wnKTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWzFdLnNwbGl0KCdbKl0uJykubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGFbMV0uc3BsaXQoJ1sqXS4nKVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsxXS50cmltKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseUZpbHRlcigpIHtcclxuICAgICAgICBpZiAodGhpcy5maWx0ZXJBUElLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuZmlsdGVyQVBJS2V5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZmlsdGVyVmFsdWVcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5maWx0ZXIgPSB0aGlzLmZpbHRlclZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvdGFsQ291bnRBcHBEYXRhKHRoaXMuZGF0YVNvdXJjZS5maWx0ZXJlZERhdGEubGVuZ3RoKTtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkFwcGx5RmlsdGVyLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgc291cmNlOiB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgIGhpZ2hsaWdodDogdGhpcy5maWx0ZXJWYWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNlbGVjdGlvbi5jbGVhcigpO1xyXG4gICAgICAgIC8vIHRoaXMuc3RvcmVEYXRhID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgdGhpcy5zdG9yZVByaW1hcnlLZXkoKTtcclxuICAgICAgICBpZiAodGhpcy5kYXRhU291cmNlLnBhZ2luYXRvcikge1xyXG4gICAgICAgICAgICB0aGlzLmRhdGFTb3VyY2UucGFnaW5hdG9yLmZpcnN0UGFnZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uRmlsdGVyQ2xpY2snKTtcclxuICAgIH1cclxuXHJcbiAgICAvKiogV2hldGhlciBvbmUgb3IgbW9yZSByb3dzIGFyZSBzZWxlY3RlZC4gKi9cclxuICAgIGlzSW5kZXRlcm1pbmF0ZVNlbGVjdGVkKCkge1xyXG4gICAgICAgIGNvbnN0IFNlbGVjdGFibGVJdGVtcyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtyZXR1cm4gZWxbJ2lzU2VsZWN0YWJsZSddPT10cnVlfSlcclxuICAgICAgICAubWFwKHIgPT4gclt0aGlzLnByaW1hcnlLZXlWYWx1ZV0pO1xyXG4gICAgICAgIGxldCBpRm91bmQgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IFNlbGVjdGFibGVJdGVtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQuaW5jbHVkZXMoU2VsZWN0YWJsZUl0ZW1zW2ldKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaUZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhTZWxlY3RhYmxlSXRlbXMsdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQsIGFsbEZvdW5kKTtcclxuICAgICAgICByZXR1cm4gaUZvdW5kO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKiBXaGV0aGVyIHRoZSBudW1iZXIgb2Ygc2VsZWN0ZWQgZWxlbWVudHMgbWF0Y2hlcyB0aGUgdG90YWwgbnVtYmVyIG9mIHJvd3MuICovXHJcbiAgICAvLyBpc0FsbFNlbGVjdGVkKCkge1xyXG4gICAgLy8gICAgIGNvbnN0IFNlbGVjdGFibGVJdGVtcyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZpbHRlcihmdW5jdGlvbiAoZWwpIHtyZXR1cm4gZWxbJ2lzU2VsZWN0YWJsZSddPT10cnVlfSlcclxuICAgIC8vICAgICAubWFwKHIgPT4gclt0aGlzLnByaW1hcnlLZXlWYWx1ZV0pO1xyXG4gICAgLy8gICAgIGxldCBhbGxGb3VuZCA9IHRydWU7XHJcbiAgICAvLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBTZWxlY3RhYmxlSXRlbXMubGVuZ3RoOyBpKyspIHtcclxuICAgIC8vICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZC5pbmNsdWRlcyhTZWxlY3RhYmxlSXRlbXNbaV0pKVxyXG4gICAgLy8gICAgICAgICB7XHJcbiAgICAvLyAgICAgICAgICAgICBhbGxGb3VuZCA9IGZhbHNlO1xyXG4gICAgLy8gICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAvLyAgICAgICAgIH0gICAgICAgICAgICBcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgLy8gY29uc29sZS5sb2coU2VsZWN0YWJsZUl0ZW1zLHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkLCBhbGxGb3VuZCk7XHJcbiAgICAvLyAgICAgcmV0dXJuIGFsbEZvdW5kO1xyXG4gICAgLy8gfVxyXG4gICAgaXNBbGxTZWxlY3RlZCgpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZElkcyA9IG5ldyBTZXQodGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQpO1xyXG4gICAgICAgIGNvbnN0IHNlbGVjdGFibGVJdGVtcyA9IHRoaXMuZGF0YVNvdXJjZS5kYXRhXHJcbiAgICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbVsnaXNTZWxlY3RhYmxlJ10pXHJcbiAgICAgICAgICAubWFwKGl0ZW0gPT4gaXRlbVt0aGlzLnByaW1hcnlLZXlWYWx1ZV0pO1xyXG4gICAgIFxyXG4gICAgICAgIHJldHVybiBzZWxlY3RhYmxlSXRlbXMuZXZlcnkoaWQgPT4gc2VsZWN0ZWRJZHMuaGFzKGlkKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFNlbGVjdHMgYWxsIHJvd3MgaWYgdGhleSBhcmUgbm90IGFsbCBzZWxlY3RlZDsgb3RoZXJ3aXNlIGNsZWFyIHNlbGVjdGlvbi4gKi9cclxuICAgIG1hc3RlclRvZ2dsZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5pc0FsbFNlbGVjdGVkKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhU291cmNlLmRhdGEuZm9yRWFjaCgocm93KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnByaW1hcnlLZXlWYWx1ZSAmJiByb3dbJ2lzU2VsZWN0YWJsZSddKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmRlc2VsZWN0KHJvd1t0aGlzLnByaW1hcnlLZXlWYWx1ZV0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5wcmltYXJ5S2V5VmFsdWUgJiYgcm93Wydpc1NlbGVjdGFibGUnXSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93W3RoaXMucHJpbWFyeUtleVZhbHVlXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHRoaXMuaXNBbGxTZWxlY3RlZCgpID9cclxuICAgICAgICAvLyAgICAgdGhpcy5zZWxlY3Rpb24uY2xlYXIoKSA6XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhLmZvckVhY2goKHJvdykgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYodGhpcy5wcmltYXJ5S2V5VmFsdWUgJiYgcm93Wydpc1NlbGVjdGFibGUnXSlcclxuICAgICAgICAvLyAgICAgICAgIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnNlbGVjdGlvbi5zZWxlY3Qocm93W3RoaXMucHJpbWFyeUtleVZhbHVlXSlcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gdGhpcy5zdG9yZURhdGEgPSB0aGlzLnNlbGVjdGlvbi5zZWxlY3RlZDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIkFsbCBzZWxlY3RlZDogXCIsIHRoaXMuc3RvcmVEYXRhKVxyXG4gICAgICAgIHRoaXMuc3RvcmVQcmltYXJ5S2V5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqIFRoZSBsYWJlbCBmb3IgdGhlIGNoZWNrYm94IG9uIHRoZSBwYXNzZWQgcm93ICovXHJcbiAgICBjaGVja2JveExhYmVsKHJvdz8pOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghcm93KSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgJHt0aGlzLmlzQWxsU2VsZWN0ZWQoKSA/ICdzZWxlY3QnIDogJ2Rlc2VsZWN0J30gYWxsYDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGAke3RoaXMuc2VsZWN0aW9uLmlzU2VsZWN0ZWQocm93KSA/ICdkZXNlbGVjdCcgOiAnc2VsZWN0J30gcm93ICR7cm93LnBvc2l0aW9uICsgMX1gO1xyXG4gICAgfVxyXG4gICAgcHVibGljIG9uTmV4UGFnZUNoYW5nZShldmVudD86IGFueSl7XHJcbiAgICAgICAgdGhpcy5wYWdlSW5kZXggPSB0aGlzLnBhZ2VJbmRleCArIDE7XHJcbiAgICAgICAgdGhpcy5pc1Nob3dNb3JlQ2xpY2tlZCA9IHRydWU7XHJcbiAgICAgICAgZXZlbnQubmV4dFBhZ2UoKVxyXG4gICAgICAgIFxyXG4gICAgICAgIGxldCBvYmogPSB7XHJcbiAgICAgICAgICAgIHBhZ2VJbmRleDogdGhpcy5wYWdlSW5kZXgsXHJcbiAgICAgICAgICAgIHBhZ2VTaXplOiBldmVudC5wYWdlU2l6ZSxcclxuICAgICAgICAgICAgbGVuZ3RoOiBldmVudC5sZW5ndGhcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblBhZ2luYXRpb25DaGFuZ2Uob2JqKTtcclxuICAgIH1cclxuIFxyXG5cclxuICAgIG9uTmV4dFBhZ2VDaGFuZ2UocGFnaW5hdG9yOiBNYXRQYWdpbmF0b3IpOiB2b2lkIHsgXHJcbiAgICAgICAgdGhpcy5uZXh0UGFnZUluZGV4ID0gdGhpcy5uZXh0UGFnZUluZGV4ICsgMTtcclxuICAgICAgICBjb25zdCBuZXh0UGFnZUluZGV4ID0gIHRoaXMubmV4dFBhZ2VJbmRleDtcclxuICAgICAgICB0aGlzLmlzU2hvd01vcmVDbGlja2VkID0gdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndG90YWwnLHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicGFnaW5hdG9yLmdldE51bWJlck9mUGFnZXMoKS0tXCIscGFnaW5hdG9yLmdldE51bWJlck9mUGFnZXMoKSk7XHJcbiAgICAgICAgLy8gdmFyIHBhZ2luYXRpb25Ub3RhbENvdW50ID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlBcGlLZXkodGhpcy5wYWdpbmF0aW9uQXBpS2V5c1swXSk7XHJcbiAgICAgICAgaWYgKG5leHRQYWdlSW5kZXggPD0gdGhpcy5wYWdpbmF0aW9uVG90YWxDb3VudCB8fCBuZXh0UGFnZUluZGV4IDw9IHBhZ2luYXRvci5sZW5ndGgpIHtcclxuICAgICAgICAgICAgcGFnaW5hdG9yLnBhZ2VJbmRleCA9IG5leHRQYWdlSW5kZXg7XHJcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50OiBQYWdlRXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlSW5kZXg6IDEsXHJcbiAgICAgICAgICAgICAgICBwYWdlU2l6ZTogKHBhZ2luYXRvci5wYWdlU2l6ZSAqIG5leHRQYWdlSW5kZXgpICsgdGhpcy5wYWdlSXRlbXNbMF0sXHJcbiAgICAgICAgICAgICAgICBsZW5ndGg6IHBhZ2luYXRvci5sZW5ndGggPiAwID8gcGFnaW5hdG9yLmxlbmd0aCA6IHRoaXMucGFnaW5hdGlvblRvdGFsQ291bnRcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFnZUV2ZW50ID0gZXZlbnQ7XHJcbiAgICAgICAgICAgIGlmICgocGFnaW5hdG9yLnBhZ2VTaXplICogbmV4dFBhZ2VJbmRleCkgKyB0aGlzLnBhZ2VJdGVtc1swXSA+PSB0aGlzLnBhZ2luYXRpb25Ub3RhbENvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLlNlZW1vcmVIaWRlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEVtaXQgbWFudWFsbHkgaWYgeW91J3JlIHVzaW5nIGEgZnVuY3Rpb24gdG8gZmV0Y2ggZGF0YVxyXG4gICAgICAgICAgICB0aGlzLm9uUGFnaW5hdGlvbkNoYW5nZShldmVudCk7XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIGV2ZW50Lm5leHRQYWdlKClcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB2YXIgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wYWdpbmF0aW9uQXBpS2V5c1sxXSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBOdW1iZXIoMSlcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleShvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb25QYWdpbmF0aW9uQ2hhbmdlKGV2ZW50PzogUGFnZUV2ZW50KSB7XHJcbiAgICAgICAgLy8gdGhpcy5zZWxlY3Rpb24uY2xlYXIoKTtcclxuICAgICAgICAvLyB0aGlzLnN0b3JlRGF0YSA9IHRoaXMuc2VsZWN0aW9uLnNlbGVjdGVkO1xyXG4gICAgICAgIHRoaXMuc3RvcmVQcmltYXJ5S2V5KCk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgb2JqID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKGV2ZW50KSkge1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdwYWdlSW5kZXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnBhZ2luYXRpb25BcGlLZXlzWzFdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuaXNTaG93TW9yZUNsaWNrZWQgPyBOdW1iZXIoZXZlbnRba2V5XSkgOiBOdW1iZXIoZXZlbnRba2V5XSkgKyAxXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3BhZ2VTaXplJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdGhpcy5wYWdpbmF0aW9uQXBpS2V5c1syXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBldmVudFtrZXldXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLnN0b3BQYWdpbmF0aW9uRXZlbnQpIHtcclxuICAgICAgICAgICAgY29uc3QgeyBldmVudF9saXN0IH0gPSB0aGlzLnNlY3Rpb25EYXRhO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRfbGlzdCAmJiBldmVudF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXZ0IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXZlbnRfbGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2dC5ldmVudF9uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdPblBhZ2luYXRpb25CdXR0b25DbGljaycudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIuc3dpdGNoRXZlbnREaXNwbGF5VHlwZShldnQsIGV2ZW50X2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuc2Nyb2xsVG9Ub3ApIHtcclxuICAgICAgICAgICAgd2luZG93LnNjcm9sbFRvKHsgdG9wOiAwLCBiZWhhdmlvcjogJ3Ntb290aCcgfSk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSAwO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdG8gdHJpZ2dlciBhbiBldmVudCBmb3IgY2xpY2tpbmcgb24gdGhlIGxpc3QgY2VsbFxyXG4gICAgICogQHBhcmFtIGRhdGEgc2luZ2xlIGNlbGwgZGF0YVxyXG4gICAgICovXHJcbiAgICBsaXN0Q2VsbENsaWNrKGRhdGEsIGlzY29udGV4dE1lbnUgPSBmYWxzZSkge1xyXG4gICAgICAgIC8vIGNoZWNraW5nIHRoZSB1bmlxdWUgaWRzIGFuZCBzdG9yaW5nIHRoZSBkYXRhXHJcbiAgICAgICAgdGhpcy5kaXNwbGF5ZWRGaWVsZHMuZm9yRWFjaCgoZmllbGQ6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVtmaWVsZC51bmlxdWVfaWRdICE9PSB1bmRlZmluZWQgJiYgZmllbGQuZmllbGRfdHlwZSAhPT0gXCJNZW51XCIgJiYgZmllbGQuZmllbGRfdHlwZSAhPT0gJ1RvZ2dsZUJ1dHRvbicpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XHJcbiAgICAgICAgICAgICAgICBvYmouaWQgPSBmaWVsZC51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgICAgICBvYmoudmFsdWUgPSBkYXRhW2ZpZWxkLnVuaXF1ZV9pZF0gfHwgJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBub3QgdXNpbmcgY29uY2F0ZW5hdGlvbiBiZWNhdXNlIGNoaWxkIGZpZWxkIHdpdGhpbiBsaXN0IGRvZXMgbm90IHN1cHBvcnQgY29uY2F0ZW5hdGlvblxyXG4gICAgICAgICAgICAgICAgb2JqLnJlc3BvbnNlQXBpS2V5ID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkpO1xyXG4gICAgICAgICAgICAgICAgb2JqLnJlcXVlc3RBcGlLZXkgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKGZpZWxkLnJlcXVlc3RfYXBpX2tleSk7XHJcbiAgICAgICAgICAgICAgICBvYmouYXBpS2V5ID0gZmllbGQuYXBpX2tleTtcclxuICAgICAgICAgICAgICAgIG9iai5lZGl0YWJsZSA9IGZpZWxkLmlzX2VkaXRhYmxlID09PSAxID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5zZXRBcHBEYXRhKHsgLi4udGhpcy50YWJsZUNlbGxBcHBEYXRhLCAuLi5vYmogfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gaWYgKHRoaXMucHJpbWFyeUtleVZhbCAmJiB0aGlzLnR5cGUgIT0gJ1RhYmxlLU11bHRpLVNlbGVjdC1WMicpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAvLyAgICAgICAgIG5hbWU6IHRoaXMucHJpbWFyeUtleVZhbCxcclxuICAgICAgICAvLyAgICAgICAgIHZhbHVlOiBkYXRhW3RoaXMucHJpbWFyeUtleVZhbF1cclxuICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmKCFpc2NvbnRleHRNZW51KXtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubGlzdENlbGxFdmVudENvbmZpZykpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ29uY2xpY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCB0aGlzLmxpc3RDZWxsRXZlbnRDb25maWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS50YWJsZUNlbGxEYXRhU2V0LmVtaXQodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIHRoZSBjbGVhclNlc3Npb24gZW1pdFxyXG4gICAgICoqL1xyXG4gICAgb25FbXB0eVNlc3Npb24oZ2V0X2RhdGEpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSBbXTtcclxuICAgICAgICBpZiAoZ2V0X2RhdGEudW5pcXVlX2lkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS51bmlxdWVfaWRzO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFQSUtleSkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuc2VjdGlvbkRhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KSldO1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVxdWVzdF9hcGlfa2V5KV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMoZWxtKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBseUZpbHRlcigpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLmNsZWFyKClcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMuc3RvcmVEYXRhID0gdGhpcy5zZWxlY3Rpb24uc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlUHJpbWFyeUtleSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9wUGFnaW5hdGlvbkV2ZW50ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yPy5maXJzdFBhZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnBhZ2VJdGVtcyAmJiB0aGlzLnBhZ2VJdGVtcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucGFnaW5hdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplID0gdGhpcy5wYWdlSXRlbXNbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uQXBpS2V5cy5sZW5ndGggPT0gMykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMucGFnaW5hdGlvbkFwaUtleXNbMl0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMucGFnaW5hdG9yLnBhZ2VTaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KG9iaik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BQYWdpbmF0aW9uRXZlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldHRlciBzZXR0ZXIgZ29lcyBoZXJlXHJcbiAgICBnZXQgaXNTaW5nbGVBUElLZXkoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaW5nbGVBcGlLZXknKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vZmlsdGVyIGNoZWNrYm94IHNlbGVjdCBhbGxcclxuICAgIHVwZGF0ZUFsbENvbXBsZXRlKCkge1xyXG4gICAgICAgIHRoaXMuYWxsQ29tcGxldGUgPSB0aGlzLnRhc2suc3VidGFza3MgIT0gbnVsbCAmJiB0aGlzLnRhc2suc3VidGFza3MuZXZlcnkodCA9PiB0LmNvbXBsZXRlZCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vZmlsdGVyIGNoZWNrYm94IHNlbGVjdFxyXG4gICAgc29tZUNvbXBsZXRlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGlmICh0aGlzLnRhc2suc3VidGFza3MgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLnRhc2suc3VidGFza3MuZmlsdGVyKHQgPT4gdC5jb21wbGV0ZWQpLmxlbmd0aCA+IDAgJiYgIXRoaXMuYWxsQ29tcGxldGU7XHJcbiAgICB9XHJcblxyXG4gICAgLy9maWx0ZXIgY2hlY2tib3ggc2VsZWN0IGFsbFxyXG4gICAgc2V0QWxsKGNvbXBsZXRlZDogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMuYWxsQ29tcGxldGUgPSBjb21wbGV0ZWQ7XHJcbiAgICAgICAgaWYgKHRoaXMudGFzay5zdWJ0YXNrcyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YXNrLnN1YnRhc2tzLmZvckVhY2godCA9PiAodC5jb21wbGV0ZWQgPSBjb21wbGV0ZWQpKTtcclxuICAgIH0gXHJcblxyXG4gICAgLy9maWx0ZXIgY2hlY2tib3ggc2VsZWN0IG9uIGJhc2lzIGNoYW5nZSB3aWxsIGhhcHBlblxyXG4gICAgdG9nZ2xlRmlsdGVyQm94KCl7XHJcbiAgICAgICB0aGlzLnRvZ2dsZWZpbHRlckJveCA9ICF0aGlzLnRvZ2dsZWZpbHRlckJveDtcclxuICAgICAgIGlmKHRoaXMudG9nZ2xlZmlsdGVyQm94ID09IGZhbHNlKXtcclxuICAgICAgICB0aGlzLnNlYXJjaEZpbHRlckhlYWRlclRleHRib3ggPSBbXTtcclxuICAgICAgICB0aGlzLnNlYXJjaEZpbHRlckhlYWRlckRhdGUgPSBbXTtcclxuICAgICAgICB0aGlzLnRhc2suc3VidGFza3MuZm9yRWFjaCh4ID0+IHtcclxuICAgICAgICAgICAgaWYoeC5jb21wbGV0ZWQgPT0gdHJ1ZSAmJiB4LnZhbHVlID09IFwidGV4dGJveFwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRmlsdGVySGVhZGVyVGV4dGJveC5wdXNoKHgubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoeC5jb21wbGV0ZWQgPT0gdHJ1ZSAmJiB4LnZhbHVlID09IFwiZGF0ZVwiKXtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRmlsdGVySGVhZGVyRGF0ZS5wdXNoKHgubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vY2hlY2sgZmlsdGVycyBhcHBsaWVkXHJcbiAgICBnZXRDaGVja2JveGZpbHRlckRhdGEoZmllbGRzKXtcclxuICAgICAgICB0aGlzLnRhc2sgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdUb2dnbGUgQWxsJyxcclxuICAgICAgICAgICAgY29tcGxldGVkOiBmYWxzZSxcclxuICAgICAgICAgICAgc3VidGFza3M6IFtdLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgbGV0IHN1YnRhc2tzID0gW11cclxuICAgICAgICBmaWVsZHMuZm9yRWFjaCh4ID0+e1xyXG4gICAgICAgICAgICBsZXQgY29tcGxldGUgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IHZhbHVlOiBhbnkgPSAnJztcclxuICAgICAgICAgICAgaWYodGhpcy5zZWFyY2hGaWx0ZXJIZWFkZXJUZXh0Ym94LmluY2x1ZGVzKHgudW5pcXVlX2lkKSl7XHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9ICd0ZXh0Ym94JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLnNlYXJjaEZpbHRlckhlYWRlckRhdGUuaW5jbHVkZXMoeC51bmlxdWVfaWQpKXtcclxuICAgICAgICAgICAgICAgIGNvbXBsZXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gJ2RhdGUnO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB0YXNrID0ge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogeC51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICBjb21wbGV0ZWQ6IGNvbXBsZXRlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3VidGFza3MucHVzaCh0YXNrKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy50YXNrLnN1YnRhc2tzID0gc3VidGFza3M7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRmlsdGVyKCkge1xyXG4gICAgICAgIGxldCBmaWx0ZXJGdW5jdGlvbiA9IGZ1bmN0aW9uIChkYXRhOiBhbnksIGZpbHRlcjogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICBsZXQgc2VhcmNoVGVybXMgPSBKU09OLnBhcnNlKGZpbHRlcik7XHJcbiAgICAgICAgICBsZXQgaXNGaWx0ZXJTZXQgPSBmYWxzZTtcclxuICAgICAgICAgIGZvciAoY29uc3QgY29sIGluIHNlYXJjaFRlcm1zKSB7XHJcbiAgICAgICAgICAgIGlmIChzZWFyY2hUZXJtc1tjb2xdLnRvU3RyaW5nKCkgIT09ICcnKSB7XHJcbiAgICAgICAgICAgICAgaXNGaWx0ZXJTZXQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGRlbGV0ZSBzZWFyY2hUZXJtc1tjb2xdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgIGxldCBuYW1lU2VhcmNoID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKGlzRmlsdGVyU2V0KSB7XHJcbiAgICAgICAgICAgICAgZm9yIChjb25zdCBjb2wgaW4gc2VhcmNoVGVybXMpIHtcclxuICAgICAgICAgICAgICAgIHNlYXJjaFRlcm1zW2NvbF0udHJpbSgpLnRvTG93ZXJDYXNlKCkuc3BsaXQoJyAnKS5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBpZiAoZGF0YVtjb2xdLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKHdvcmQpICE9IC0xICYmIGlzRmlsdGVyU2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlXHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICByZXR1cm4gZm91bmRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgcmV0dXJuIG5hbWVTZWFyY2goKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmlsdGVyRnVuY3Rpb25cclxuICAgIH1cclxuXHJcbiAgICBmaWx0ZXJDaGFuZ2UoZiwgdmFsdWUsIHR5cGUpIHtcclxuICAgIGlmKHR5cGUgPT1cImRhdGVcIil7XHJcbiAgICAgICAgdmFsdWUgPSB2YWx1ZSAhPSBudWxsID9tb21lbnQuZGVmYXVsdChuZXcgRGF0ZSh2YWx1ZSkudG9JU09TdHJpbmcoKSkuZm9ybWF0KCdNL0QvWVlZWScpIDogJyc7XHJcbiAgICB9XHJcbiAgICB0aGlzLmZpbHRlclZhbHVlc1tmLnJlc3BvbnNlX2FwaV9rZXldID0gdmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gSlNPTi5zdHJpbmdpZnkodGhpcy5maWx0ZXJWYWx1ZXMpXHJcbiAgICB9XHJcblxyXG4gICAgLy8gICByZXNldEZpbHRlcnMoKSB7XHJcbiAgICAvLyAgICAgdGhpcy5maWx0ZXJWYWx1ZXMgPSB7fVxyXG4gICAgLy8gICAgIHRoaXMuZmlsdGVyU2VsZWN0T2JqLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHtcclxuICAgIC8vICAgICAgIHZhbHVlLm1vZGVsVmFsdWUgPSB1bmRlZmluZWQ7XHJcbiAgICAvLyAgICAgfSlcclxuICAgIC8vICAgICB0aGlzLmRhdGFTb3VyY2UuZmlsdGVyID0gXCJcIjtcclxuICAgIC8vICAgfVxyXG5cclxuICAgIGlzSFRNTChjb250ZW50OiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gLzxbYS16XVtcXHNcXFNdKj4vaS50ZXN0KGNvbnRlbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vZGlmeUZpZWxkVmFsdWUoaSA6IG51bWJlcixvYmo6IGFueSwgZ0Jsb2NrSWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChrZXkgPT09IFwiZmllbGRcIiB8fCBrZXkgPT0gXCJ1bmlxdWVfaWRcIiB8fCAga2V5ID09IFwiYWRkaXRpb25hbF9wYXJhbWV0ZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoa2V5ICE9PSBcImFkZGl0aW9uYWxfcGFyYW1ldGVyc1wiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBgJHtnQmxvY2tJZH0kJHtvYmpba2V5XX0kJHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBvYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlRhcmdldEZpZWxkc1wiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcImJsb2NrRmllbGRzXCIgfHwgcGFyYW0ucGFyYW1ldGVyX3R5cGUgPT09IFwiRXJhc2VTZXNzaW9uRGF0YVwiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlZhcmlhYmxlc1wiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlRhcmdldHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJ0c3MgPSBwYXJhbS52YWx1ZS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkocGFydHNzKSAmJiBwYXJ0c3MubGVuZ3RoID4gMSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLnZhbHVlID0gdGhpcy50cmFuc2Zvcm1TdHJpbmcoaSwgcGFyYW0udmFsdWUsIGdCbG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbS52YWx1ZSA9IGAke2dCbG9ja0lkfSQke3BhcmFtLnZhbHVlfSQke2l9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gXCJvYmplY3RcIiAmJiBvYmpba2V5XSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW9kaWZ5RmllbGRWYWx1ZShpLCBvYmpba2V5XSwgZ0Jsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbiBcclxuICAgIGdldE5ld0ZpZWxkcyhpLCBmaWVsZHMsIGdCbG9ja0lkKXtcclxuICAgICAgICBpZihmaWVsZHMubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgIGZpZWxkcy5tYXAoeCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGlmeUZpZWxkVmFsdWUoaSx4LCBnQmxvY2tJZCk7XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWVsZHM7XHJcbiAgICB9XHJcbiBcclxuICAgIHRyYW5zZm9ybVN0cmluZyhpOiBudW1iZXIsIGlucHV0OiBzdHJpbmcsIGdCbG9ja0lkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBwYXJ0cyA9IGlucHV0LnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHBhcnRzLm1hcCh4ID0+e1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgJHtnQmxvY2tJZH0kJHt4fSQke2l9YClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXN1bHQuam9pbignfCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdlbmVyaWMgZnVuY3Rpb24gdG8gaGFuZGxlIGJvdGggZHJhZy1hbmQtZHJvcCBhbmQgc2VsZWN0aW9uIGRpc2FibGluZ1xyXG4gICAgcHJpdmF0ZSBzaG91bGREaXNhYmxlUm93Rm9yQWN0aW9uKHJvdzogYW55LCBkaXNhYmxlVmFsdWVzOiBzdHJpbmcsIGFjdGlvblR5cGU6ICdkcmFnJyB8ICdzZWxlY3Rpb24nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFkaXNhYmxlVmFsdWVzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBhY3Rpb25UeXBlID09PSAnZHJhZycgPyAhdGhpcy5kcmFnRHJvcFRhYmxlUm93cyA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgLy8gU3BsaXQgdGhlIGRpc2FibGUgdmFsdWVzIGludG8gaW5kaXZpZHVhbCBjb25kaXRpb25zXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBkaXNhYmxlVmFsdWVzLnNwbGl0KFwifHxcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBjb25kaXRpb25cclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgY29uZGl0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgW2tleVBhcnQsIHZhbHVlUGFydF0gPSBjb25kaXRpb24uc3BsaXQoXCJ8XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNraXAgaWYgdGhlIGNvbmRpdGlvbiBpcyBpbnZhbGlkIChtaXNzaW5nIGtleSBvciB2YWx1ZSlcclxuICAgICAgICAgICAgICAgIGlmICgha2V5UGFydCB8fCAhdmFsdWVQYXJ0KSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgdGhlIEFQSSBrZXlzIHJlbGF0ZWQgdG8gdGhlIGtleSBwYXJ0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlLZXlzID0gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhrZXlQYXJ0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBJdGVyYXRlIG92ZXIgZWFjaCBBUEkga2V5XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIoYXBpS2V5LnNwbGl0KFwiIyNcIilbMF0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBTa2lwIGlmIG5vIHZhbGlkIGhhbmRsZXIgZGF0YSBvciB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaGFuZGxlckRhdGEgfHwgIWhhbmRsZXJEYXRhLnZhbHVlKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRXh0cmFjdCB0aGUgZmllbGQgcGF0aCBhbmQgZ2V0IHRoZSBsYXN0IHBhcnQgKGZpZWxkIG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRQYXRoID0gYXBpS2V5LnNwbGl0KFwiIyNcIikubGVuZ3RoID4gMSA/IGFwaUtleS5zcGxpdChcIiMjXCIpWzFdIDogXCJcIjtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFBhcnRzID0gZmllbGRQYXRoLnNwbGl0KFwiLlwiKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZE5hbWUgPSBmaWVsZFBhcnRzW2ZpZWxkUGFydHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEdldCB0aGUgdmFsdWUgb2YgdGhlIGZpZWxkIGluIHRoZSByb3dcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByb3dGaWVsZFZhbHVlID0gcm93W2ZpZWxkTmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEVuaGFuY2VkIGNvbXBhcmlzb24gdG8gaGFuZGxlIGJvb2xlYW4vc3RyaW5nIGNvbnZlcnNpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJvd0ZpZWxkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmNvbXBhcmVWYWx1ZXMocm93RmllbGRWYWx1ZSwgdmFsdWVQYXJ0KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgUm93ICR7cm93W3RoaXMucHJpbWFyeUtleVZhbF19IGRpc2FibGVkIGZvciAke2FjdGlvblR5cGV9OiAke2ZpZWxkTmFtZX09JHtyb3dGaWVsZFZhbHVlfWApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBjaGVja2luZyBpZiByb3cgbmVlZHMgdG8gYmUgZGlzYWJsZWQgZm9yICR7YWN0aW9uVHlwZX06YCwgZXJyb3IpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhlbHBlciBmdW5jdGlvbiB0byBoYW5kbGUgdmFsdWUgY29tcGFyaXNvbiB3aXRoIHR5cGUgY29udmVyc2lvblxyXG4gICAgcHJpdmF0ZSBjb21wYXJlVmFsdWVzKHJvd1ZhbHVlOiBhbnksIGNvbXBhcmVWYWx1ZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gRGlyZWN0IHN0cmluZyBjb21wYXJpc29uXHJcbiAgICAgICAgaWYgKFN0cmluZyhyb3dWYWx1ZSkgPT09IFN0cmluZyhjb21wYXJlVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gSGFuZGxlIGJvb2xlYW4gdG8gc3RyaW5nIGNvbnZlcnNpb25zXHJcbiAgICAgICAgaWYgKHJvd1ZhbHVlID09PSB0cnVlICYmIChjb21wYXJlVmFsdWUgPT09IFwiMVwiIHx8IGNvbXBhcmVWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcInRydWVcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAocm93VmFsdWUgPT09IGZhbHNlICYmIChjb21wYXJlVmFsdWUgPT09IFwiMFwiIHx8IGNvbXBhcmVWYWx1ZS50b0xvd2VyQ2FzZSgpID09PSBcImZhbHNlXCIpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFVwZGF0ZWQgc2hvdWxkRGlzYWJsZURyYWdBbmREcm9wRm9yUm93IHRvIHVzZSB0aGUgZ2VuZXJpYyBmdW5jdGlvblxyXG4gICAgc2hvdWxkRGlzYWJsZURyYWdBbmREcm9wRm9yUm93KHJvdzogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkRGlzYWJsZVJvd0ZvckFjdGlvbihyb3csIHRoaXMuZGlzYWJsZVJvd1ZhbHVlcywgJ2RyYWcnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVcGRhdGVkIHNob3VsZERpc2FibGVTZWxlY3Rpb25Gb3JSb3cgdG8gdXNlIHRoZSBnZW5lcmljIGZ1bmN0aW9uXHJcbiAgICBzaG91bGREaXNhYmxlU2VsZWN0aW9uRm9yUm93KHJvdzogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hvdWxkRGlzYWJsZVJvd0ZvckFjdGlvbihyb3csIHRoaXMuZGlzYWJsZVJvd1NlbGVjdGlvblZhbHVlcywgJ3NlbGVjdGlvbicpO1xyXG4gICAgfVxyXG59XHJcbiIsIjxuZy1jb250YWluZXIgKm5nSWY9XCJpc1Zpc2libGUgJiYgZmllbGREYXRhPy5sZW5ndGggPiAwXCIgKHNjcm9sbCk9XCJvblNjcm9sbCgkZXZlbnQpXCI+XHJcbiAgICA8bWF0LWZvcm0tZmllbGQgKm5nSWY9XCJzaG93RmlsdGVyXCIgZmxvYXRMYWJlbD1cIm5ldmVyXCI+XHJcbiAgICAgICAgPGlucHV0IG1hdElucHV0IChrZXl1cCk9XCJhcHBseUZpbHRlcigpXCIgcGxhY2Vob2xkZXI9XCJ7e2ZpbHRlclBsYWNlaG9sZGVyVGV4dH19XCIgWyhuZ01vZGVsKV09XCJmaWx0ZXJWYWx1ZVwiPlxyXG4gICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgIDxidXR0b24gbWF0LW1pbmktZmFiIGFyaWEtbGFiZWw9XCJmaWx0ZXJJY29uXCIgKGNsaWNrKT1cInRvZ2dsZUZpbHRlckJveCgpXCIgKm5nSWY9XCJjaGVja2JveEZpbHRlclwiPlxyXG4gICAgICAgIDxtYXQtaWNvbiBhcmlhLWhpZGRlbj1cImZhbHNlXCIgYXJpYS1sYWJlbD1cImljb25cIiBmb250SWNvbj1cImZpbHRlclwiPjwvbWF0LWljb24+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxkaXYgY2xhc3M9XCJmaWx0ZXItYm94XCIgKm5nSWY9XCJ0b2dnbGVmaWx0ZXJCb3hcIj5cclxuICAgICAgICA8c3BhbiBjbGFzcz1cIlwiPlxyXG4gICAgICAgICAgICA8bWF0LWNoZWNrYm94IGNsYXNzPVwiZXhhbXBsZS1tYXJnaW5cIiBbY2hlY2tlZF09XCJhbGxDb21wbGV0ZVwiIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJzb21lQ29tcGxldGUoKVwiIChjaGFuZ2UpPVwic2V0QWxsKCRldmVudC5jaGVja2VkKVwiPlxyXG4gICAgICAgICAgICAgICAge3t0YXNrLm5hbWV9fVxyXG4gICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJleGFtcGxlLWxpc3Qtc2VjdGlvblwiPlxyXG4gICAgICAgICAgICA8ZGl2ICpuZ0Zvcj1cImxldCBzdWJ0YXNrIG9mIHRhc2suc3VidGFza3M7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJzdWJ0YXNrLmNvbXBsZXRlZFwiIGNvbG9yPVwicHJpbWFyeVwiIChuZ01vZGVsQ2hhbmdlKT1cInVwZGF0ZUFsbENvbXBsZXRlKClcIj5cclxuICAgICAgICAgICAgICAgICAgICB7e3N1YnRhc2submFtZX19XHJcbiAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUYWJsZSBGb3IgU2tlbGV0b24gTG9hZGVyICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAtLT5cclxuICAgIDx0YWJsZSBhcmlhLWRlc2NyaWJlZGJ5PVwiU2tlbGV0b24gTG9hZGVyXCJcclxuICAgICAgICAqbmdJZj1cInNob3dTa2VsZXRvbkxvYWRlciAmJiBhZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd1NrZWxldG9uTG9hZGVyJ10/LnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnXCIgbWF0LXRhYmxlXHJcbiAgICAgICAgW2RhdGFTb3VyY2VdPVwiZGF0YVNvdXJjZUxvYWRpbmdcIlxyXG4gICAgICAgIGNsYXNzPVwie3tzZWN0aW9uRGF0YS5maWVsZF9zdHlsZT9zZWN0aW9uRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJ7e2Z9fVwiICpuZ0Zvcj1cImxldCBmIG9mIGRpc3BsYXllZENvbHVtbnM7IGxldCBpID0gaW5kZXhcIj5cclxuICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBzY29wZT1cImNvbFwiPiB7e2ZpZWxkRGF0YVtpXSAmJiBmaWVsZERhdGFbaV0uZmllbGRfbGFiZWx9fSA8L3RoPlxyXG4gICAgICAgICAgICA8dGQgbWF0LWNlbGwgY2xhc3M9XCJsb2FkaW5nXCIgKm1hdENlbGxEZWY9XCJsZXQgZWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImJhclwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIj48L3RyPlxyXG4gICAgICAgIDx0ciBtYXQtcm93IGNsYXNzPVwiY2VlLXRhYmxlLXJvd1wiICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBkaXNwbGF5ZWRDb2x1bW5zO1wiPjwvdHI+XHJcbiAgICA8L3RhYmxlPlxyXG4gICAgPCEtLSAjIyMjIyMjIyMjIyMjIyMjIyMgU2hvdyBIaWRlICYgUmVhcnJhbmdlIENvbHVtbiBGaWx0ZXIgIyMjIyMjIyMjIyMjIyMjIyMjIyMgLS0+XHJcbiAgICA8ZGl2PjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIG1iLTFcIiB0aXRsZT1cIkNvbHVtbiBGaWx0ZXJcIlxyXG4gICAgICAgICAgICAqbmdJZj1cImNvbHVtbkZpbHRlclR5cGUuaW5kZXhPZignbm9uZScpID09IC0xXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInNob3dIaWRlRmlsdGVyKCdzaG93LWhpZGUtY29udGFpbmVyLScsc2VjdGlvbkRhdGEudW5pcXVlX2lkKVwiPuKYsDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgPGRpdiBpZD1cInNob3ctaGlkZS1jb250YWluZXIte3tzZWN0aW9uRGF0YS51bmlxdWVfaWR9fVwiIGNsYXNzPVwic2hvdy1oaWRlLWNvbnRhaW5lciBjb2wtMyBtdC0yMCBkLW5vbmVcIlxyXG4gICAgICAgICpuZ0lmPVwiY29sdW1uRmlsdGVyVHlwZS5pbmRleE9mKCdub25lJykgPT0gLTFcIj5cclxuICAgICAgICA8ZGl2PjxsYWJlbCAqbmdJZj1cInNlY3Rpb25EYXRhLmZpZWxkX2xhYmVsXCIgY2xhc3M9XCJ0ZXh0LXNlY29uZGFyeSBtLTJcIj57e3NlY3Rpb25EYXRhLmZpZWxkX2xhYmVsfX1cclxuICAgICAgICAgICAgICAgIFNldHRpbmc8L2xhYmVsPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2RrRHJvcExpc3QgY2xhc3M9XCJleGFtcGxlLWxpc3RcIiAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3AoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXhhbXBsZS1ib3hcIiBbbmdDbGFzc109XCJ7J2Qtbm9uZSc6ICFjb2x1bW5TaG93SGlkZVJlYXJyYW5nZVtpXS5pc1Zpc2libGV9XCJcclxuICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmIG9mIGNvbHVtblNob3dIaWRlUmVhcnJhbmdlOyBsZXQgaSA9IGluZGV4XCIgY2RrRHJhZz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkcmFnLWNvbnRlbnRcIiAqbmdJZj1cImNvbHVtbkZpbHRlclR5cGUuaW5kZXhPZignc2hvd2hpZGUnKSAhPSAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjb2x1bW5TaG93SGlkZVJlYXJyYW5nZVtpXS5zaG93Q29sdW1uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImNvbHVtblNob3dIaWRlUmVhcnJhbmdlW2ldLmlzTWFuZGF0b3J5XCI+e3tmLmZpZWxkX2xhYmVsfX08L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInctMTAwIGRyYWctY29udGVudCBwLTFcIiAqbmdJZj1cImNvbHVtbkZpbHRlclR5cGUuaW5kZXhPZignc2hvd2hpZGUnKSA9PSAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbD57e2YuZmllbGRfbGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj48bGFiZWwgKm5nSWY9XCJmaWx0ZXJFcnJvck1zZ1wiIGNsYXNzPVwidGV4dC1kYW5nZXIgbS0yXCI+e3tmaWx0ZXJFcnJvck1zZ319PC9sYWJlbD48L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtcHJpbWFyeSBtLTJcIiAoY2xpY2spPVwicmVzZXRSZXN0cnVjdHVyaW5nKClcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJidG4gYnRuLXByaW1hcnkgbS0yXCIgKGNsaWNrKT1cImFwcGx5UmVzdHJ1Y3R1cmluZygpXCI+U2F2ZTwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8IS0tICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBEYXRhIFRhYmxlICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAtLT5cclxuICAgIDxkaXYgY2xhc3M9XCJ0YWJsZS1jb250YWluZXJcIiBjZGtTY3JvbGxhYmxlICNzY3JvbGxDb250YWluZXI+XHJcbiAgICAgICAgPCEtLSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRGF0YSBUYWJsZSBXaXRoIERyYWcgJiBEcm9wIFJvd3MgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAtLT5cclxuICAgICAgICA8dGFibGUgYXJpYS1kZXNjcmliZWRieT1cIkRhdGEgVGFibGVcIlxyXG4gICAgICAgICAgICAqbmdJZj1cIihkcmFnRHJvcFRhYmxlUm93cyAmJiAoKCFzaG93U2tlbGV0b25Mb2FkZXIgJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dTa2VsZXRvbkxvYWRlciddPy50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykgfHwgIWFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93U2tlbGV0b25Mb2FkZXInXSB8fCBhZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd1NrZWxldG9uTG9hZGVyJ10/LnRvTG93ZXJDYXNlKCkgIT0gJ3RydWUnKSlcIlxyXG4gICAgICAgICAgICBtYXQtdGFibGUgI3RhYmxlIFtkYXRhU291cmNlXT1cImRhdGFTb3VyY2VcIiBtYXRTb3J0IG11bHRpVGVtcGxhdGVEYXRhUm93c1xyXG4gICAgICAgICAgICBjbGFzcz1cInt7aXNDdXN0b21DbGFzcyAmJiBzZWN0aW9uRGF0YS5maWVsZF9zdHlsZT9zZWN0aW9uRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCJcclxuICAgICAgICAgICAgW25nQ2xhc3NdPVwieydleHBhbmRUYWJsZSc6IHRoaXMuZHluYW1pY0NvbHVtbldpZHRofVwiIGlkPVwidGFibGVfe3tzZWN0aW9uRGF0YS51bmlxdWVfaWR9fVwiXHJcbiAgICAgICAgICAgICh3aW5kb3c6cmVzaXplKT1cIm9uUmVzaXplKClcIiAobWF0U29ydENoYW5nZSk9XCJ0aGlzLm9uUmVzaXplKCk7IG1hdFNvcnRDaGFuZ2UoJGV2ZW50KTsgXCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJTZWVNb3JlKClcIiBjZGtEcm9wTGlzdCAoY2RrRHJvcExpc3REcm9wcGVkKT1cImRyb3BSb3coJGV2ZW50KVwiIGNka0Ryb3BMaXN0RGF0YT1cImRhdGFcIiBjZGtEcm9wTGlzdFNjcm9sbENvbnRhaW5lcj1cInNjcm9sbENvbnRhaW5lclwiIGNka0Ryb3BMaXN0QXV0b1Njcm9sbERpc2FibGVkPVwiZmFsc2VcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJTZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgc2NvcGU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSB0bXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBpZD1cImNoZWNrX3N0YXRpY1wiIGNsYXNzPVwidGFibGUtY2hlY2tib3hcIiAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIiBbZGlzYWJsZWRdPVwiaXNTZWxldGFibGU9PScwJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpc0luZGV0ZXJtaW5hdGVTZWxlY3RlZCgpICYmICFpc0FsbFNlbGVjdGVkKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyaWEtbGFiZWxdPVwiY2hlY2tib3hMYWJlbCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhOyBkYXRhSW5kZXggYXMgcG9zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSB0c3MgJiYgKGRhdGEuaXNTZWxlY3RhYmxlIHx8IGRpc2FibGVSb3dTZWxlY3Rpb25WYWx1ZXMgIT09ICcnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LXJhZGlvLWdyb3VwIG5hbWU9XCJyYWRpb1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1yYWRpby1idXR0b24gaWQ9XCJyYWRpb197e3Bvc2l0aW9ufX1cIiBjbGFzcz1cInRhYmxlLXJhZGlvXCIgW3ZhbHVlXT1cImRhdGFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwibGlzdF9jaGFuZ2UoZGF0YSwgdHJ1ZSlcIiBbY2hlY2tlZF09XCJkYXRhID09IHJhZGlvVmFsdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZGF0YS5pc1NlbGVjdGFibGVcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidTZWxlY3QgJytwb3NpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9tYXQtcmFkaW8tYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1ncm91cD5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSB0bXMgJiYgKGRhdGEuaXNTZWxlY3RhYmxlIHx8IGRpc2FibGVSb3dTZWxlY3Rpb25WYWx1ZXMgIT09ICcnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3hcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cImNoZWNrX3t7IHBvc2l0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJjaGVja197eyBwb3NpdGlvbiB9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwidGFibGUtY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImxpc3RfY2hhbmdlKGRhdGEsICRldmVudC5jaGVja2VkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhZGF0YS5pc1NlbGVjdGFibGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJwcmltYXJ5S2V5VmFsdWUgPyBzZWxlY3Rpb24uaXNTZWxlY3RlZChkYXRhW3ByaW1hcnlLZXlWYWx1ZV0pIDogZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImNoZWNrYm94TGFiZWwoZGF0YSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L21hdC1jaGVja2JveD5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cIlJlYXJyYW5nZVwiPlxyXG4gICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBzY29wZT1cImNvbFwiIGNsYXNzPVwiZHJhZy1jb2x1bW4taGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGRhdGE7IGRhdGFJbmRleCBhcyBwb3NpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkcmFnRHJvcFRhYmxlUm93c1wiID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1pY29uIFtuZ0NsYXNzXT1cImRhdGEuaXNTZWxlY3RhYmxlID8gJ2V4YW1wbGUtZHJhZy1jdXJzb3InIDogJ2V4YW1wbGUtZHJhZy1jdXJzb3ItZGlzYWJsZSdcIiBjbGFzcz1cIm1hdC1kcmFnLWljb25cIj5yZW9yZGVyPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkcmFnLWN1c3RvbS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIFttYXRDb2x1bW5EZWZdPVwiZi51bmlxdWVfaWRcIlxyXG4gICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGYgb2YgZmllbGREYXRhOyBsZXQgaSA9IGluZGV4OyB0cmFja0J5OiB0cmFja0J5dW5pcXVlX2lkO1wiXHJcbiAgICAgICAgICAgICAgICBbc3RpY2t5XT1cImNvbFN0aWNreS5pbmNsdWRlcyhmLnVuaXF1ZV9pZClcIiBbc3RpY2t5RW5kXT1cImNvbFN0aWNreUVuZC5pbmNsdWRlcyhmLnVuaXF1ZV9pZClcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgW3Jlc2l6ZUNvbHVtbl09XCJmLnJlc2l6YWJsZVwiIFtpbmRleF09XCJpICsgZXh0cmFUYWJsZUNlbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzY29wZT1cImNvbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBbbmdDbGFzc109XCJmLnNvcnRpbmcgPT0gdHJ1ZSA/ICdjZS1sYWJlbCBjYXNlJyA6ICdjZS1sYWJlbCdcIiBzb3J0YWJsZT17e2YudW5pcXVlX2lkfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNvcnRpbmc9e3tmLnNvcnRpbmd9fSAoc29ydCk9XCJvblNvcnQoJGV2ZW50KVwiPnt7Zi5maWVsZF9sYWJlbH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhdGhpcy5keW5hbWljQ29sdW1uV2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIG1hdC1zb3J0LWhlYWRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kaXNhYmxlZF09XCJpc1NvcnRpbmdEaXNhYmxlZChmLnVuaXF1ZV9pZClcIiBzY29wZT1cImNvbFwiIGRpc2FibGVDbGVhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0X2ZpbHRlcl9ib3hcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aF9jbGVhclwiPnt7Zi5maWVsZF9sYWJlbH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGhfY2xlYXJcIiAqbmdJZj1cInNlYXJjaEZpbHRlckhlYWRlclRleHRib3guaW5jbHVkZXMoZi51bmlxdWVfaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJ0ZXh0XCIgKGtleXVwKT1cImZpbHRlckNoYW5nZShmLCAkZXZlbnQudGFyZ2V0LnZhbHVlLCAndGV4dCcpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJzZWFyY2gge3tmLnVuaXF1ZV9pZH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aF9jbGVhclwiICpuZ0lmPVwic2VhcmNoRmlsdGVySGVhZGVyRGF0ZS5pbmNsdWRlcyhmLnVuaXF1ZV9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkNob29zZSBhIGRhdGU8L21hdC1sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgW21hdERhdGVwaWNrZXJdPVwiYmFzaWNEYXRlcGlja2VyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRhdGVDaGFuZ2UpPVwiZmlsdGVyQ2hhbmdlKGYsICRldmVudC50YXJnZXQudmFsdWUsICdkYXRlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXItdG9nZ2xlIFtmb3JdPVwiYmFzaWNEYXRlcGlja2VyXCI+PC9tYXQtZGF0ZXBpY2tlci10b2dnbGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1kYXRlcGlja2VyICNiYXNpY0RhdGVwaWNrZXI+PC9tYXQtZGF0ZXBpY2tlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RoPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZGF0YTsgZGF0YUluZGV4IGFzIHBvc2l0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiKHRoaXMucmVzcG9uc2l2ZSAmJiBpID09PSAwICYmIGV4cGFuZGVkRWxlbWVudCA9PT0gZGF0YSk/ZXhwYW5kZWRFbGVtZW50ID0gbnVsbDonJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmOmYscG9zaXRpb246cG9zaXRpb24sZGF0YTpkYXRhLCBtZXRob2Q6IGxpc3RDZWxsQ2xpY2t9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJleHBhbmRhYmxlT3B0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8dGggbWF0LWhlYWRlci1jZWxsICptYXRIZWFkZXJDZWxsRGVmIHNjb3BlPVwiY29sXCI+PHNwYW4gc3R5bGU9XCJ2aXNpYmlsaXR5OiBoaWRkZW47XCI+RXhwYW5kYWJsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBPcHRpb248L3NwYW4+PC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhOyBkYXRhSW5kZXggYXMgcG9zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJjZWUtdGFibGUtZXhwYW5kYWJsZS1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZXhwYW5kZWRFbGVtZW50ID0gZXhwYW5kZWRFbGVtZW50ID09PSBkYXRhID8gbnVsbCA6IGRhdGE7IHNldFByaW1hcnlLZXkoe25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdfSlcIj57e2V4cGFuZGVkRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA9PT0gZGF0YSA/IGNvbGxhcHNlVGl0bGUgOiBleHBhbmRUaXRsZX19PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZXhwYW5kZWRSZXNwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGQgbWF0LWNlbGwgKm1hdENlbGxEZWY9XCJsZXQgZGF0YTsgZGF0YUluZGV4IGFzIHBvc2l0aW9uXCIgW2F0dHIuY29sc3Bhbl09XCJkaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJyZXNwb25zaXZlXCIgY2xhc3M9XCJjZWUtdGFibGUtcmVzcCB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmllbGREYXRhIGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnl1bmlxdWVfaWQ7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWhpZGVuUm93cy5pbmNsdWRlcyhmLnVuaXF1ZV9pZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VlLXRhYmxlLWRldGFpbC1jZWxsIHt7Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmKSl9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmOmYscG9zaXRpb246cG9zaXRpb24sZGF0YTpkYXRhLGV4cGFuZGVkRGV0YWlsOnRydWUsIG1ldGhvZDogbGlzdENlbGxDbGlja31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwidGhpcy50eXBlID09PSAnVGFibGUtRXhwYW5kYWJsZS1WMidcIiBjbGFzcz1cImNlZS10YWJsZS1kZXRhaWwtY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiY2VlLXRhYmxlLWV4cGFuZGFibGUtb3B0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiZXhwYW5kZWRFbGVtZW50ID0gZXhwYW5kZWRFbGVtZW50ID09PSBkYXRhID8gbnVsbCA6IGRhdGE7IHNldFByaW1hcnlLZXkoe25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdfSlcIj57e2V4cGFuZGVkRWxlbWVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID09PSBkYXRhID8gY29sbGFwc2VUaXRsZSA6IGV4cGFuZFRpdGxlfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0Q29sdW1uRGVmPVwiZXhwYW5kZWREZXRhaWxcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhOyBkYXRhSW5kZXggYXMgcG9zaXRpb25cIiBbYXR0ci5jb2xzcGFuXT1cImRpc3BsYXllZENvbHVtbnMubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlZS10YWJsZS1kZXRhaWwge3tpc19ib290c3RyYXAgJiYgIXRhYmxlSGlkZGVuR2VuZXJpYz8ncm93JzonJ319IHt7ZGF0YSAhPT0gZXhwYW5kZWRFbGVtZW50Pydjb2xsYXBzZWQnOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbQGRldGFpbEV4cGFuZF09XCJkYXRhID09PSBleHBhbmRlZEVsZW1lbnQgPyAnZXhwYW5kZWQnIDogJ2NvbGxhcHNlZCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImhlaWdodDogMHB4OyBtaW4taGVpZ2h0OiAwcHg7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGYgb2YgZmllbGREYXRhIGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnl1bmlxdWVfaWQ7XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGlkZW5Sb3dzLmluY2x1ZGVzKGYudW5pcXVlX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtdGFibGUtZGV0YWlsLWNlbGwge3tjb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGYuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGYpKX19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZjpmLHBvc2l0aW9uOnBvc2l0aW9uLGRhdGE6ZGF0YSxleHBhbmRlZERldGFpbDp0cnVlLCBtZXRob2Q6IGxpc3RDZWxsQ2xpY2t9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0YWJsZUhpZGRlbkdlbmVyaWMgJiYgaGlkZW5Sb3dzLmxlbmd0aCA9PT0gMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC1ibG9jay1yZW5kZXJlciBbc3RlcElkXT1cInN0ZXBJZFwiIFt0ZW1wbGF0ZUlkXT1cInBvc2l0aW9uXCIgW2Jsb2NrSWRdPVwiaGlkZW5Sb3dzWzBdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImhpZGRlbi1jb250ZW50XCIgW2Jsb2NrUG9zaXRpb25dPVwicG9zaXRpb25cIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLWJsb2NrLXJlbmRlcmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJleHBhbmRlZFN0ZXBcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCBpZD1cInRhYmxlLWNlbGwtaW5saW5lLXN0ZXBcIiAqbWF0Q2VsbERlZj1cImxldCBkYXRhOyBkYXRhSW5kZXggYXMgcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIFthdHRyLmNvbHNwYW5dPVwiZGlzcGxheWVkQ29sdW1ucy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tICAqbmdJZj1cImRhdGFbcHJpbWFyeUtleVZhbHVlXSA9PSBzZWxlY3RlZFByaW1hcnlLZXlWYWxcIiAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8IS0tIHt7aW5saW5lRWRpdFN0ZXBJZH19IC9cclxuICAgICAgICAgICAgICAgICAgICB7e2RhdGFbcHJpbWFyeUtleVZhbHVlXX19ID09IHt7c2VsZWN0ZWRQcmltYXJ5S2V5VmFsfX0gLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFwcC1zdGVwLXJlbmRlcmVyICpuZ0lmPVwiZGF0YVtwcmltYXJ5S2V5VmFsdWVdID09IHNlbGVjdGVkUHJpbWFyeUtleVZhbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtzdGVwSWRdPVwiaW5saW5lRWRpdFN0ZXBJZFwiIFtzdGFydFNlc3Npb25dPVwic3RhcnRTZXNzaW9uXCI+PC9hcHAtc3RlcC1yZW5kZXJlcj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPHRyIG1hdC1oZWFkZXItcm93ICptYXRIZWFkZXJSb3dEZWY9XCJkaXNwbGF5ZWRDb2x1bW5zXCIgY2xhc3M9XCJjZWUtdGFibGUtaGVhZGVyXCI+PC90cj5cclxuICAgICAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IGRpc3BsYXllZENvbHVtbnM7XCIgaWQ9XCJ0YWJsZS1yb3cte3tyb3dbcHJpbWFyeUtleVZhbHVlXX19XCIgY2RrRHJhZ1xyXG4gICAgICAgICAgICAgICAgW2Nka0RyYWdEYXRhXT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICBbY2RrRHJhZ0Rpc2FibGVkXT1cInNob3VsZERpc2FibGVEcmFnQW5kRHJvcEZvclJvdyhyb3cpXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VlLXRhYmxlLXJvdyB7e2V4cGFuZGVkRWxlbWVudCA9PT0gcm93PydjZWUtZXhwYW5kZWQtcm93JzonJ319IHt7cm93ICYmIHJvdy5yb3dEYXRhICYmIHJvdy5yb3dEYXRhLmNvbmRpdGlvbmFsQ3VzdG9tQ2xhc3MgPyByb3cucm93RGF0YS5jb25kaXRpb25hbEN1c3RvbUNsYXNzIDogJyd9fSB7e3ByaW1hcnlLZXlWYWx1ZSAmJiB0eXBlID09IHRtcyA/IChzZWxlY3Rpb24uc2VsZWN0ZWQuaW5jbHVkZXMocm93W3ByaW1hcnlLZXlWYWx1ZV0pPyAndGFibGUtaXRlbS1jaGVja2VkJyA6ICd0YWJsZS1pdGVtLXVuY2hlY2tlZCcpIDogJyd9fVwiXHJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwibGlzdENlbGxDbGljayhyb3cpXCIgKGNvbnRleHRtZW51KT1cImxpc3RDZWxsQ2xpY2socm93LCB0cnVlKVwiPjwvdHI+XHJcbiAgICAgICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBbJ2V4cGFuZGVkUmVzcCddXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VlLXJlc3Atcm93IHt7cm93ICYmIHJvdy5yb3dEYXRhICYmIHJvdyAmJiByb3cucm93RGF0YSAmJiByb3cucm93RGF0YS5jb25kaXRpb25hbEN1c3RvbUNsYXNzID8gcm93LnJvd0RhdGEuY29uZGl0aW9uYWxDdXN0b21DbGFzcyA6ICcnfX1cIj48L3RyPlxyXG4gICAgICAgICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogWydleHBhbmRlZERldGFpbCddXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VlLWRldGFpbC1yb3cge3tyb3cgJiYgcm93LnJvd0RhdGEgJiYgcm93ICYmIHJvdy5yb3dEYXRhICYmIHJvdy5yb3dEYXRhLmNvbmRpdGlvbmFsQ3VzdG9tQ2xhc3MgPyByb3cucm93RGF0YS5jb25kaXRpb25hbEN1c3RvbUNsYXNzIDogJyd9fVwiPjwvdHI+XHJcbiAgICAgICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBbJ2V4cGFuZGVkU3RlcCddXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VlLXN0ZXAtcm93IHt7cm93ICYmIHJvdy5yb3dEYXRhICYmIHJvdyAmJiByb3cucm93RGF0YSAmJiByb3cucm93RGF0YS5jb25kaXRpb25hbEN1c3RvbUNsYXNzID8gcm93LnJvd0RhdGEuY29uZGl0aW9uYWxDdXN0b21DbGFzcyA6ICcnfX1cIj48L3RyPlxyXG4gICAgICAgIDwvdGFibGU+XHJcbiAgICAgICAgPCEtLSAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgRGF0YSBUYWJsZSBXaXRob3V0IERyYWcgJiBEcm9wIFJvd3MgICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyAtLT5cclxuICAgICAgICA8dGFibGUgYXJpYS1kZXNjcmliZWRieT1cIkRhdGEgVGFibGVcIlxyXG4gICAgICAgICAgICAqbmdJZj1cIighZHJhZ0Ryb3BUYWJsZVJvd3MgJiYgKCghc2hvd1NrZWxldG9uTG9hZGVyICYmIGFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93U2tlbGV0b25Mb2FkZXInXT8udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpIHx8ICFhZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd1NrZWxldG9uTG9hZGVyJ10gfHwgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dTa2VsZXRvbkxvYWRlciddPy50b0xvd2VyQ2FzZSgpICE9ICd0cnVlJykpXCJcclxuICAgICAgICAgICAgbWF0LXRhYmxlICN0YWJsZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgbWF0U29ydCBtdWx0aVRlbXBsYXRlRGF0YVJvd3NcclxuICAgICAgICAgICAgY2xhc3M9XCJ7e2lzQ3VzdG9tQ2xhc3MgJiYgc2VjdGlvbkRhdGEuZmllbGRfc3R5bGU/c2VjdGlvbkRhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiXHJcbiAgICAgICAgICAgIFtuZ0NsYXNzXT1cInsnZXhwYW5kVGFibGUnOiB0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aH1cIiBpZD1cInRhYmxlX3t7c2VjdGlvbkRhdGEudW5pcXVlX2lkfX1cIlxyXG4gICAgICAgICAgICAod2luZG93OnJlc2l6ZSk9XCJvblJlc2l6ZSgpXCIgKG1hdFNvcnRDaGFuZ2UpPVwidGhpcy5vblJlc2l6ZSgpOyBtYXRTb3J0Q2hhbmdlKCRldmVudCk7XCJcclxuICAgICAgICAgICAgKGNsaWNrKT1cInRyaWdnZXJTZWVNb3JlKClcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJTZWxlY3RcIj5cclxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgc2NvcGU9XCJjb2xcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSB0bXNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1jaGVja2JveCBpZD1cImNoZWNrX3N0YXRpY1wiIGNsYXNzPVwidGFibGUtY2hlY2tib3hcIiAoY2hhbmdlKT1cIiRldmVudCA/IG1hc3RlclRvZ2dsZSgpIDogbnVsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbY2hlY2tlZF09XCJzZWxlY3Rpb24uaGFzVmFsdWUoKSAmJiBpc0FsbFNlbGVjdGVkKClcIiBbZGlzYWJsZWRdPVwiaXNTZWxldGFibGU9PScwJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbaW5kZXRlcm1pbmF0ZV09XCJpc0luZGV0ZXJtaW5hdGVTZWxlY3RlZCgpICYmICFpc0FsbFNlbGVjdGVkKClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2FyaWEtbGFiZWxdPVwiY2hlY2tib3hMYWJlbCgpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LWNoZWNrYm94PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhOyBkYXRhSW5kZXggYXMgcG9zaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidHlwZSA9PSB0c3MgJiYgZGF0YS5pc1NlbGVjdGFibGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG1hdC1yYWRpby1ncm91cCBuYW1lPVwicmFkaW9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtcmFkaW8tYnV0dG9uIGlkPVwicmFkaW9fe3twb3NpdGlvbn19XCIgY2xhc3M9XCJ0YWJsZS1yYWRpb1wiIFt2YWx1ZV09XCJkYXRhXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImxpc3RfY2hhbmdlKGRhdGEsIHRydWUpXCIgW2NoZWNrZWRdPVwiZGF0YSA9PSByYWRpb1ZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiaXNTZWxldGFibGU9PScwJ1wiIFthdHRyLmFyaWEtbGFiZWxdPVwiJ1NlbGVjdCAnK3Bvc2l0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L21hdC1yYWRpby1idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbWF0LXJhZGlvLWdyb3VwPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09IHRtcyAmJiBkYXRhLmlzU2VsZWN0YWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWNoZWNrYm94IG5hbWU9XCJjaGVja197e3Bvc2l0aW9ufX1cIiBpZD1cImNoZWNrX3t7cG9zaXRpb259fVwiIGNsYXNzPVwidGFibGUtY2hlY2tib3hcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNoYW5nZSk9XCJsaXN0X2NoYW5nZShkYXRhLCAkZXZlbnQuY2hlY2tlZCk7XCIgW2Rpc2FibGVkXT1cImlzU2VsZXRhYmxlPT0nMCdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2NoZWNrZWRdPVwicHJpbWFyeUtleVZhbHVlPyBzZWxlY3Rpb24uaXNTZWxlY3RlZChkYXRhW3ByaW1hcnlLZXlWYWx1ZV0pOiBmYWxzZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXJpYS1sYWJlbF09XCJjaGVja2JveExhYmVsKGRhdGEpXCI+PC9tYXQtY2hlY2tib3g+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8L3RkPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBbbWF0Q29sdW1uRGVmXT1cImYudW5pcXVlX2lkXCIgKm5nRm9yPVwibGV0IGYgb2YgZmllbGREYXRhOyBsZXQgaSA9IGluZGV4XCJcclxuICAgICAgICAgICAgICAgIFtzdGlja3ldPVwiY29sU3RpY2t5LmluY2x1ZGVzKGYudW5pcXVlX2lkKVwiIFtzdGlja3lFbmRdPVwiY29sU3RpY2t5RW5kLmluY2x1ZGVzKGYudW5pcXVlX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRoaXMuZHluYW1pY0NvbHVtbldpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRoIG1hdC1oZWFkZXItY2VsbCAqbWF0SGVhZGVyQ2VsbERlZiBbcmVzaXplQ29sdW1uXT1cImYucmVzaXphYmxlXCIgW2luZGV4XT1cImkgKyBleHRyYVRhYmxlQ2VsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3BlPVwiY29sXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtuZ0NsYXNzXT1cImYuc29ydGluZyA9PSB0cnVlID8gJ2NlLWxhYmVsIGNhc2UnIDogJ2NlLWxhYmVsJ1wiIHNvcnRhYmxlPXt7Zi51bmlxdWVfaWR9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc29ydGluZz17e2Yuc29ydGluZ319IChzb3J0KT1cIm9uU29ydCgkZXZlbnQpXCI+e3tmLmZpZWxkX2xhYmVsfX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90aD5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0aGlzLmR5bmFtaWNDb2x1bW5XaWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgbWF0LXNvcnQtaGVhZGVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmRpc2FibGVkXT1cImlzU29ydGluZ0Rpc2FibGVkKGYudW5pcXVlX2lkKVwiIHNjb3BlPVwiY29sXCIgZGlzYWJsZUNsZWFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRfZmlsdGVyX2JveFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzSFRNTChmLmZpZWxkX2xhYmVsKSA9PSB0cnVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJmLmZpZWxkX2xhYmVsXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaXNIVE1MKGYuZmllbGRfbGFiZWwpID09IGZhbHNlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoX2NsZWFyXCI+e3tmLmZpZWxkX2xhYmVsfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwid2lkdGhfY2xlYXJcIj57e2YuZmllbGRfbGFiZWx9fTwvZGl2PiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aF9jbGVhclwiICpuZ0lmPVwic2VhcmNoRmlsdGVySGVhZGVyVGV4dGJveC5pbmNsdWRlcyhmLnVuaXF1ZV9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgdHlwZT1cInRleHRcIiAoa2V5dXApPVwiZmlsdGVyQ2hhbmdlKGYsICRldmVudC50YXJnZXQudmFsdWUsICd0ZXh0JylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cInNlYXJjaCB7e2YudW5pcXVlX2lkfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoX2NsZWFyXCIgKm5nSWY9XCJzZWFyY2hGaWx0ZXJIZWFkZXJEYXRlLmluY2x1ZGVzKGYudW5pcXVlX2lkKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+Q2hvb3NlIGEgZGF0ZTwvbWF0LWxhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBbbWF0RGF0ZXBpY2tlcl09XCJiYXNpY0RhdGVwaWNrZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZGF0ZUNoYW5nZSk9XCJmaWx0ZXJDaGFuZ2UoZiwgJGV2ZW50LnRhcmdldC52YWx1ZSwgJ2RhdGUnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxtYXQtZGF0ZXBpY2tlci10b2dnbGUgW2Zvcl09XCJiYXNpY0RhdGVwaWNrZXJcIj48L21hdC1kYXRlcGlja2VyLXRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bWF0LWRhdGVwaWNrZXIgI2Jhc2ljRGF0ZXBpY2tlcj48L21hdC1kYXRlcGlja2VyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGg+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhOyBkYXRhSW5kZXggYXMgcG9zaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgIChjbGljayk9XCIodGhpcy5yZXNwb25zaXZlICYmIGkgPT09IDAgJiYgZXhwYW5kZWRFbGVtZW50ID09PSBkYXRhKT9leHBhbmRlZEVsZW1lbnQgPSBudWxsOicnXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2Y6Zixwb3NpdGlvbjpwb3NpdGlvbixkYXRhOmRhdGEsIG1ldGhvZDogbGlzdENlbGxDbGlja31cIj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV4cGFuZGFibGVPcHRpb25cIj5cclxuICAgICAgICAgICAgICAgIDx0aCBtYXQtaGVhZGVyLWNlbGwgKm1hdEhlYWRlckNlbGxEZWYgc2NvcGU9XCJjb2xcIj48c3BhbiBzdHlsZT1cInZpc2liaWxpdHk6IGhpZGRlbjtcIj5FeHBhbmRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9wdGlvbjwvc3Bhbj48L3RoPlxyXG4gICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGRhdGE7IGRhdGFJbmRleCBhcyBwb3NpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImNlZS10YWJsZS1leHBhbmRhYmxlLW9wdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGRhdGEgPyBudWxsIDogZGF0YTsgc2V0UHJpbWFyeUtleSh7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF19KVwiPnt7ZXhwYW5kZWRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID09PSBkYXRhID8gY29sbGFwc2VUaXRsZSA6IGV4cGFuZFRpdGxlfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJleHBhbmRlZFJlc3BcIj5cclxuICAgICAgICAgICAgICAgIDx0ZCBtYXQtY2VsbCAqbWF0Q2VsbERlZj1cImxldCBkYXRhOyBkYXRhSW5kZXggYXMgcG9zaXRpb25cIiBbYXR0ci5jb2xzcGFuXT1cImRpc3BsYXllZENvbHVtbnMubGVuZ3RoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInJlc3BvbnNpdmVcIiBjbGFzcz1cImNlZS10YWJsZS1yZXNwIHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWVsZERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaGlkZW5Sb3dzLmluY2x1ZGVzKGYudW5pcXVlX2lkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtdGFibGUtZGV0YWlsLWNlbGwge3tjb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGYuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGYpKX19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2Y6Zixwb3NpdGlvbjpwb3NpdGlvbixkYXRhOmRhdGEsZXhwYW5kZWREZXRhaWw6dHJ1ZSwgbWV0aG9kOiBsaXN0Q2VsbENsaWNrfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJ0aGlzLnR5cGUgPT09ICdUYWJsZS1FeHBhbmRhYmxlLVYyJ1wiIGNsYXNzPVwiY2VlLXRhYmxlLWRldGFpbC1jZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gY2xhc3M9XCJjZWUtdGFibGUtZXhwYW5kYWJsZS1vcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJleHBhbmRlZEVsZW1lbnQgPSBleHBhbmRlZEVsZW1lbnQgPT09IGRhdGEgPyBudWxsIDogZGF0YTsgc2V0UHJpbWFyeUtleSh7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF19KVwiPnt7ZXhwYW5kZWRFbGVtZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPT09IGRhdGEgPyBjb2xsYXBzZVRpdGxlIDogZXhwYW5kVGl0bGV9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvdGQ+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciBtYXRDb2x1bW5EZWY9XCJleHBhbmRlZERldGFpbFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsICptYXRDZWxsRGVmPVwibGV0IGRhdGE7IGRhdGFJbmRleCBhcyBwb3NpdGlvblwiIFthdHRyLmNvbHNwYW5dPVwiZGlzcGxheWVkQ29sdW1ucy5sZW5ndGhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2VlLXRhYmxlLWRldGFpbCB7e2lzX2Jvb3RzdHJhcCAmJiAhdGFibGVIaWRkZW5HZW5lcmljPydyb3cnOicnfX0ge3tkYXRhICE9PSBleHBhbmRlZEVsZW1lbnQ/J2NvbGxhcHNlZCc6Jyd9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtAZGV0YWlsRXhwYW5kXT1cImRhdGEgPT09IGV4cGFuZGVkRWxlbWVudCA/ICdleHBhbmRlZCcgOiAnY29sbGFwc2VkJ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPVwiaGVpZ2h0OiAwcHg7IG1pbi1oZWlnaHQ6IDBweDtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZiBvZiBmaWVsZERhdGFcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJoaWRlblJvd3MuaW5jbHVkZXMoZi51bmlxdWVfaWQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImNlZS10YWJsZS1kZXRhaWwtY2VsbCB7e2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZi5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZikpfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmOmYscG9zaXRpb246cG9zaXRpb24sZGF0YTpkYXRhLGV4cGFuZGVkRGV0YWlsOnRydWUsIG1ldGhvZDogbGlzdENlbGxDbGlja31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInRhYmxlSGlkZGVuR2VuZXJpYyAmJiBoaWRlblJvd3MubGVuZ3RoID09PSAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWJsb2NrLXJlbmRlcmVyIFtzdGVwSWRdPVwic3RlcElkXCIgW3RlbXBsYXRlSWRdPVwicG9zaXRpb25cIiBbYmxvY2tJZF09XCJoaWRlblJvd3NbMF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiaGlkZGVuLWNvbnRlbnRcIiBbYmxvY2tQb3NpdGlvbl09XCJwb3NpdGlvblwiIFtyb290RGF0YV09XCJyb290RGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtYmxvY2stcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyIG1hdENvbHVtbkRlZj1cImV4cGFuZGVkU3RlcFwiPlxyXG4gICAgICAgICAgICAgICAgPHRkIG1hdC1jZWxsIGlkPVwidGFibGUtY2VsbC1pbmxpbmUtc3RlcFwiICptYXRDZWxsRGVmPVwibGV0IGRhdGE7IGRhdGFJbmRleCBhcyBwb3NpdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2F0dHIuY29sc3Bhbl09XCJkaXNwbGF5ZWRDb2x1bW5zLmxlbmd0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gICpuZ0lmPVwiZGF0YVtwcmltYXJ5S2V5VmFsdWVdID09IHNlbGVjdGVkUHJpbWFyeUtleVZhbFwiIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0ge3tpbmxpbmVFZGl0U3RlcElkfX0gL1xyXG4gICAgICAgICAgICAgICAgICAgIHt7ZGF0YVtwcmltYXJ5S2V5VmFsdWVdfX0gPT0ge3tzZWxlY3RlZFByaW1hcnlLZXlWYWx9fSAtLT5cclxuICAgICAgICAgICAgICAgICAgICA8YXBwLXN0ZXAtcmVuZGVyZXIgKm5nSWY9XCJkYXRhW3ByaW1hcnlLZXlWYWx1ZV0gPT0gc2VsZWN0ZWRQcmltYXJ5S2V5VmFsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZF09XCJpbmxpbmVFZGl0U3RlcElkXCIgW3N0YXJ0U2Vzc2lvbl09XCJzdGFydFNlc3Npb25cIj48L2FwcC1zdGVwLXJlbmRlcmVyPlxyXG4gICAgICAgICAgICAgICAgPC90ZD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICA8dHIgbWF0LWhlYWRlci1yb3cgKm1hdEhlYWRlclJvd0RlZj1cImRpc3BsYXllZENvbHVtbnNcIiBjbGFzcz1cImNlZS10YWJsZS1oZWFkZXJcIj48L3RyPlxyXG4gICAgICAgICAgICA8dHIgbWF0LXJvdyAqbWF0Um93RGVmPVwibGV0IHJvdzsgY29sdW1uczogZGlzcGxheWVkQ29sdW1ucztcIiBpZD1cInRhYmxlLXJvdy17e3Jvd1twcmltYXJ5S2V5VmFsdWVdfX1cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtdGFibGUtcm93IHt7ZXhwYW5kZWRFbGVtZW50ID09PSByb3c/J2NlZS1leHBhbmRlZC1yb3cnOicnfX0ge3tyb3cucm93RGF0YSA/IHJvdy5yb3dEYXRhLmNvbmRpdGlvbmFsQ3VzdG9tQ2xhc3MgOiAnJ319IHt7cHJpbWFyeUtleVZhbHVlICYmIHR5cGUgPT0gdG1zID8gKHNlbGVjdGlvbi5zZWxlY3RlZC5pbmNsdWRlcyhyb3dbcHJpbWFyeUtleVZhbHVlXSk/ICd0YWJsZS1pdGVtLWNoZWNrZWQnIDogJ3RhYmxlLWl0ZW0tdW5jaGVja2VkJykgOiAnJ319XCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJsaXN0Q2VsbENsaWNrKHJvdylcIiAoY29udGV4dG1lbnUpPVwibGlzdENlbGxDbGljayhyb3csIHRydWUpXCI+PC90cj5cclxuICAgICAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IFsnZXhwYW5kZWRSZXNwJ11cIlxyXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtcmVzcC1yb3cge3tyb3cucm93RGF0YSA/IHJvdy5yb3dEYXRhLmNvbmRpdGlvbmFsQ3VzdG9tQ2xhc3MgOiAnJ319XCI+PC90cj5cclxuICAgICAgICAgICAgPHRyIG1hdC1yb3cgKm1hdFJvd0RlZj1cImxldCByb3c7IGNvbHVtbnM6IFsnZXhwYW5kZWREZXRhaWwnXVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImNlZS1kZXRhaWwtcm93IHt7cm93LnJvd0RhdGEgPyByb3cucm93RGF0YS5jb25kaXRpb25hbEN1c3RvbUNsYXNzIDogJyd9fVwiPjwvdHI+XHJcbiAgICAgICAgICAgIDx0ciBtYXQtcm93ICptYXRSb3dEZWY9XCJsZXQgcm93OyBjb2x1bW5zOiBbJ2V4cGFuZGVkU3RlcCddXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiY2VlLXN0ZXAtcm93IHt7cm93LnJvd0RhdGEgPyByb3cucm93RGF0YS5jb25kaXRpb25hbEN1c3RvbUNsYXNzIDogJyd9fVwiPjwvdHI+XHJcbiAgICAgICAgPC90YWJsZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cIm5vLWRhdGEtaW5mb1wiICpuZ0lmPVwibG9hZGVkICYmIGRhdGFTb3VyY2UuZmlsdGVyZWREYXRhLmxlbmd0aCA9PT0gMFwiPnt7bm9EYXRhRm91bmRMYWJlbH19PC9kaXY+XHJcbiAgICA8bWF0LXBhZ2luYXRvciAqbmdJZj1cInNob3dQYWdpbmF0aW9uID09ICd0cnVlJ1wiIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnZUl0ZW1zXCIgKHBhZ2UpPVwib25QYWdpbmF0aW9uQ2hhbmdlKCRldmVudClcIlxyXG4gICAgICAgIHNob3dGaXJzdExhc3RCdXR0b25zPlxyXG4gICAgPC9tYXQtcGFnaW5hdG9yPlxyXG4gICAgPCEtLSBNb3JlIEJ1dHRvbiAob3V0c2lkZSB0aGUgbWF0LXRhYmxlIGJ1dCBpbnNpZGUgdGhlIHRhYmxlIGVsZW1lbnQpIC0tPlxyXG4gICAgPGRpdiAqbmdJZj1cInNob3dQYWdpbmF0aW9uID09ICdsb2FkX21vcmUnICYmIHNob3dTZWVNb3JlXCIgY2xhc3M9XCJzZWVNb3JlQ29udGFpbmVyXCI+XHJcbiAgICAgICAgPG1hdC1wYWdpbmF0b3IgI3BhZ2Ugc3R5bGU9XCJ2aXNpYmlsaXR5OmhpZGRlblwiIFtwYWdlU2l6ZU9wdGlvbnNdPVwicGFnZUl0ZW1zXCIgKHBhZ2UpPVwicGFnZUV2ZW50ID0gJGV2ZW50XCJcclxuICAgICAgICAgICAgW3BhZ2VTaXplXT1cInBhZ2VJdGVtc1swXVwiIHNob3dGaXJzdExhc3RCdXR0b25zPjwvbWF0LXBhZ2luYXRvcj5cclxuICAgICAgICA8YnV0dG9uIG1hdC1idXR0b24gKm5nSWY9XCJTZWVtb3JlSGlkZVwiIChjbGljayk9XCJvbk5leHRQYWdlQ2hhbmdlKHBhZ2UpXCJcclxuICAgICAgICAgICAgY2xhc3M9XCJzZWVNb3JlQnV0dG9uXCI+e3twYWdpbmF0aW9uTmV4dExhYmVsfX08L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuXHJcblxyXG48bmctdGVtcGxhdGUgI2NlbGxEYXRhIGxldC1mPSdmJyBsZXQtcG9zaXRpb249J3Bvc2l0aW9uJyBsZXQtZGF0YT0nZGF0YScgbGV0LWV4cGFuZGVkRGV0YWlsPSdleHBhbmRlZERldGFpbCdcclxuICAgIGxldC1tZXRob2Q9J21ldGhvZCc+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmLmZpZWxkX3R5cGVcIj5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcbiAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImV4cGFuZGVkRGV0YWlsICYmIGYuZmllbGRfbGFiZWxcIiBjbGFzcz1cImNlZS10YWJsZS1kZXRhaWwtbGFiZWxcIj57e2YuZmllbGRfbGFiZWx9fTxzcGFuPjpcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtbGFiZWwgW2ZpZWxkRGF0YV09XCJmXCIgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXVwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICd0YWJsZScsIGNlbGxEYXRhOiB7ICdkYXRhJzogZGF0YSwgJ2ZpZWxkcyc6IGRpc3BsYXllZEZpZWxkc319XCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWNlZS1sYWJlbD4gLS0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0F0dGFjaG1lbnRzJ1wiPlxyXG4gICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJleHBhbmRlZERldGFpbCAmJiBmLmZpZWxkX2xhYmVsXCIgY2xhc3M9XCJjZWUtdGFibGUtZGV0YWlsLWxhYmVsXCI+e3tmLmZpZWxkX2xhYmVsfX08c3Bhbj46XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+PC9sYWJlbD5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZiwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICd0YWJsZScsIGNlbGxEYXRhOiB7ZGF0YSwgZmllbGRzOiBkaXNwbGF5ZWRGaWVsZHN9fSxcclxuXHRcdFx0XHR9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInQnV0dG9uJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtYnV0dG9uIFtmaWVsZERhdGFdPVwiZlwiIFtyb3dEYXRhXT1cImRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF1cIiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCJcclxuICAgICAgICAgICAgICAgIFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAndGFibGUnLCBjZWxsRGF0YTogeyAnZGF0YSc6IGRhdGEsICdmaWVsZHMnOiBkaXNwbGF5ZWRGaWVsZHN9fVwiPlxyXG4gICAgICAgICAgICA8L2FwcC1jZWUtYnV0dG9uPiAtLT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0ltYWdlJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtaW1hZ2UgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXVwiIFtmaWVsZERhdGFdPVwiZlwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICd0YWJsZScsIGNlbGxEYXRhOiB7ICdkYXRhJzogZGF0YSwgJ2ZpZWxkcyc6IGRpc3BsYXllZEZpZWxkc319XCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWNlZS1pbWFnZT4gLS0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUb2dnbGVCdXR0b24nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZi5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdLGtlZXBTdGF0ZTogdHJ1ZSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtdG9nZ2xlLWJ1dHRvbiBbZmllbGREYXRhXT1cImZcIiBbcm93RGF0YV09XCJkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdXCIgW3NlY3Rpb25EYXRhXT1cInNlY3Rpb25EYXRhXCJcclxuICAgICAgICAgICAgICAgIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICd0YWJsZScsIGNlbGxEYXRhOiB7ICdkYXRhJzogZGF0YSwgJ2ZpZWxkcyc6IGRpc3BsYXllZEZpZWxkc319XCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWNlZS10b2dnbGUtYnV0dG9uPiAtLT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1BpY2tlcidcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGRhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZiwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICd0YWJsZScsIGNlbGxEYXRhOiB7ZGF0YSwgZmllbGRzOiBkaXNwbGF5ZWRGaWVsZHN9fSxcclxuXHRcdFx0XHR9XCI+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8IS0tIDxhcHAtY2VlLXBpY2tlciBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZERhdGFdPVwiZlwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXVwiXHJcbiAgICAgICAgICAgICAgICBbcHJpbWFyeUtleUluZGV4XT1cIntuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHsgJ2RhdGEnOiBkYXRhLCAnZmllbGRzJzogZGlzcGxheWVkRmllbGRzfX1cIj5cclxuICAgICAgICAgICAgPC9hcHAtY2VlLXBpY2tlcj4gLS0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidNZW51J1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2YuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHtkYXRhLCBmaWVsZHM6IGRpc3BsYXllZEZpZWxkc319LFxyXG5cdFx0XHRcdH1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1jZWUtbWVudSBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZERhdGFdPVwiZlwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIlxyXG4gICAgICAgICAgICAgICAgW3Jvd0RhdGFdPVwiZGF0YVsncm93RGF0YSddW2YudW5pcXVlX2lkXVwiXHJcbiAgICAgICAgICAgICAgICBbcHJpbWFyeUtleUluZGV4XT1cIntuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ3RhYmxlJywgY2VsbERhdGE6IHsgJ2RhdGEnOiBkYXRhLCAnZmllbGRzJzogZGlzcGxheWVkRmllbGRzfX1cIj5cclxuICAgICAgICAgICAgPC9hcHAtY2VlLW1lbnU+IC0tPlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVGFibGUtVjInXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1jZWUtdGFibGUtdjIgW3NlY3Rpb25EYXRhXT1cImZcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbcm93RGF0YV09XCJkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdXCJcclxuICAgICAgICAgICAgICAgICAgICBbc3RlcElkXT1cInN0ZXBJZFwiIFt0eXBlXT1cImYuZmllbGRfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPC9hcHAtY2VlLXRhYmxlLXYyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAqbmdTd2l0Y2hDYXNlPVwiZi5maWVsZF90eXBlID09PSAnTGlzdC1WMicgfHwgZi5maWVsZF90eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlLVYyJyA/IGYuZmllbGRfdHlwZSA6ICcnIFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbJ0xpc3QtVjInXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdLCBzZWN0aW9uRGF0YTogZiwgdHlwZTogZi5maWVsZF90eXBlfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSA8YXBwLWxpc3QtcmVuZGVyZXItdjIgW3NlY3Rpb25EYXRhXT1cImZcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBbcm93RGF0YV09XCJkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdXCIgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiXHJcbiAgICAgICAgICAgICAgICBbc3RlcElkXT1cInN0ZXBJZFwiIFt0eXBlXT1cImYuZmllbGRfdHlwZVwiPlxyXG4gICAgICAgICAgICA8L2FwcC1saXN0LXJlbmRlcmVyLXYyPiAtLT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1RyZWVWaWV3J1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZi5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdLCBzZWN0aW9uRGF0YTogZiwgdHlwZTogZi5maWVsZF90eXBlfVwiPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPCEtLSA8YXBwLXRyZWUtcmVuZGVyZXIgW3NlY3Rpb25EYXRhXT1cImZcIiBbcm93RGF0YV09XCJkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdXCIgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiXHJcbiAgICAgICAgICAgICAgICBbc3RlcElkXT1cInN0ZXBJZFwiIFt0eXBlXT1cImYuZmllbGRfdHlwZVwiPlxyXG4gICAgICAgICAgICA8L2FwcC10cmVlLXJlbmRlcmVyPiAtLT5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0R5bmFtaWNGb3JtJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZi5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdLCBzZWN0aW9uRGF0YTogZn1cIj48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwhLS0gPGFwcC1keW5hbWljLWZvcm0gW3NlY3Rpb25EYXRhXT1cImZcIiBbcm93RGF0YV09XCJkYXRhWydyb3dEYXRhJ11bZi51bmlxdWVfaWRdXCIgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fVwiIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWR5bmFtaWMtZm9ybT4gLS0+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoRGVmYXVsdD5cclxuICAgICAgICAgICAgPGRpdiAqbmdJZj0nZXhwYW5kZWREZXRhaWwnIGNsYXNzPVwiIGNlZS10YWJsZS1kZXRhaWwtbGFiZWxcIj57e2YuZmllbGRfbGFiZWx9fTxzcGFuPjogPC9zcGFuPjwvZGl2PlxyXG4gICAgICAgICAgICB7e2RhdGFbJ3Jvd0RhdGEnXVtmLnVuaXF1ZV9pZF0/LnZhbHVlfX1cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT4iXX0=