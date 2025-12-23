import { Component, Input } from '@angular/core';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { MatTableDataSource as MatTableDataSource } from '@angular/material/table';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { EmptyUtil } from '../../utils/empty-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { FormsModule } from '@angular/forms';
// import { CeeTableComponent } from '../../field-components/cee-table/cee-table.component';
// import { CeeLinkComponent } from '../../field-components/cee-link/cee-link.component';
// import { CeeButtonComponent } from '../../field-components/cee-button/cee-button.component';
// import { CeePickerComponent } from '../../field-components/cee-picker/cee-picker.component';
// import { CeeTimePickerComponent } from '../../field-components/cee-time-picker/cee-time-picker.component';
// import { CeeImageComponent } from '../../field-components/cee-image/cee-image.component';
// import { CeeMenuComponent } from '../../field-components/cee-menu/cee-menu.component';
// import { CeeTextfieldComponent } from '../../field-components/cee-textfield/cee-textfield.component';
// import { CeeLabelComponent } from '../../field-components/cee-label/cee-label.component';
import { CommonModule, NgClass, NgStyle, NgSwitch } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
// import { CeeVideoComponent } from '../../field-components/cee-video/cee-video.component';
import { MatInputModule } from '@angular/material/input';
import { defer } from 'rxjs';
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
const _c0 = a0 => ({ "color": a0 });
const _c1 = a0 => ({ list: a0, parent_index: "" });
const _c2 = a0 => ({ "active": a0 });
const _c3 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3 });
const _c4 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3, expandable: true });
const _c5 = (a0, a1) => ({ list: a0, parent_index: a1 });
const _c6 = (a0, a1, a2) => ({ name: a0, value: a1, type: "list", cellData: a2 });
const _c7 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, primaryKeyIndex: a4 });
const _c8 = (a0, a1, a2, a3, a4, a5) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, type: a4, primaryKeyIndex: a5 });
function TreeRendererComponent_ng_container_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "mat-form-field", 12)(2, "input", 13);
    i0.ɵɵtwoWayListener("ngModelChange", function TreeRendererComponent_ng_container_0_div_1_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r1.filterTxt, $event) || (ctx_r1.filterTxt = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("keyup", function TreeRendererComponent_ng_container_0_div_1_Template_input_keyup_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.applyFilter()); });
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.filterPlaceholderText);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.filterTxt);
} }
function TreeRendererComponent_ng_container_0_ng_container_2_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 17);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r3 = i0.ɵɵnextContext(2).$implicit;
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, message_r3.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", message_r3.message_text, " ");
} }
function TreeRendererComponent_ng_container_0_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 15);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_2_div_1_p_1_Template, 2, 4, "p", 16);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function TreeRendererComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_2_div_1_Template, 2, 1, "div", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "span", 23);
    i0.ɵɵtext(2);
    i0.ɵɵelementStart(3, "span", 24);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template_span_click_3_listener() { const chipArray_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.deleteChips(chipArray_r5)); });
    i0.ɵɵtext(4, "x");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const chipArray_r5 = ctx.$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", chipArray_r5.keyName, " ");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_div_1_div_1_Template, 5, 1, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.chipsArray);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul");
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_3_ng_container_1_Template, 1, 0, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const recursiveListTmpl_r6 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", recursiveListTmpl_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r1.displayValuesLazy));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ol");
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_5_ng_container_1_Template, 1, 0, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const recursiveListTmpl_r6 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", recursiveListTmpl_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction1(2, _c1, ctx_r1.displayValuesLazy));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_div_1_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r8); const pos_r9 = i0.ɵɵnextContext().index; const parentIndex_r10 = i0.ɵɵnextContext().parent_index; const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.toggle("list_item" + parentIndex_r10 + "_" + pos_r9)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pos_r9 = i0.ɵɵnextContext().index;
    const parentIndex_r10 = i0.ɵɵnextContext().parent_index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(1, _c2, ctx_r1.getExpandedStatus("list_item" + parentIndex_r10 + "_" + pos_r9)));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_1_Template, 1, 0, null, 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r14 = ctx.$implicit;
    const child_position_r15 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext(3);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, child_field_r14, data_r12, pos_r9, "child_" + child_position_r15));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 10);
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
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_0_Template, 1, 0, null, 25);
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const field_r19 = ctx_r17.$implicit;
    const position_r20 = ctx_r17.index;
    const ctx_r15 = i0.ɵɵnextContext();
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, field_r19, data_r12, pos_r9, position_r20));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_container_1_Template, 4, 8, "ng-container", 29)(2, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_ng_template_2_Template, 1, 7, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r19 = ctx.$implicit;
    const elseField_r21 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r19.field_type === "Generic Block")("ngIfElse", elseField_r21);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_1_Template, 1, 0, null, 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const child_field_r23 = ctx.$implicit;
    const child_position_r24 = ctx.index;
    const ctx_r15 = i0.ɵɵnextContext(4);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c4, child_field_r23, data_r12, pos_r9, "child_" + child_position_r24));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "div");
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_ng_container_3_Template, 2, 7, "ng-container", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    const field_r26 = ctx_r24.$implicit;
    const position_r27 = ctx_r24.index;
    const ctx_r1 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r27, " ", field_r26.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r26.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r26)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("generic-block-container ", ctx_r1.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r26.child_fields);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_0_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_0_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_0_Template, 1, 0, null, 25);
} if (rf & 2) {
    const ctx_r24 = i0.ɵɵnextContext();
    const field_r26 = ctx_r24.$implicit;
    const position_r27 = ctx_r24.index;
    const ctx_r15 = i0.ɵɵnextContext(2);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    i0.ɵɵnextContext(4);
    const cellData_r17 = i0.ɵɵreference(2);
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r17)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c4, field_r26, data_r12, pos_r9, position_r27));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_container_1_Template, 4, 8, "ng-container", 29)(2, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_ng_template_2_Template, 1, 7, "ng-template", null, 7, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r26 = ctx.$implicit;
    const elseField_r28 = i0.ɵɵreference(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", field_r26.field_type === "Generic Block")("ngIfElse", elseField_r28);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "button", 30);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r22); const data_r12 = i0.ɵɵnextContext().$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.expandedElement = ctx_r1.expandedElement === data_r12 ? null : data_r12); });
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(4, "div")(5, "div");
    i0.ɵɵtemplate(6, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_ng_container_6_Template, 4, 2, "ng-container", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const data_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-expandable-option ", ctx_r1.is_bootstrap ? "row" : "", " ", data_r12["hasExpandableData"] ? "has-expandable-data" : "no-expandable-data", "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.expandedElement === data_r12 ? ctx_r1.collapseTitle : ctx_r1.expandTitle);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("cee-list-detail ", ctx_r1.is_bootstrap ? "col-12" : "", " ", ctx_r1.expandedElement === data_r12 ? "cee-expanded-row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.is_bootstrap ? "row" : "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r12.expandable_fields);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_ul_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_ul_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ul", 32);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_ul_0_ng_container_1_Template, 1, 0, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    const parentIndex_r10 = i0.ɵɵnextContext().parent_index;
    i0.ɵɵnextContext();
    const recursiveListTmpl_r6 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("d-none", ctx_r1.additionalParameters["isTreeExpandable"] && ctx_r1.additionalParameters["isTreeExpandable"].toLowerCase() == "true");
    i0.ɵɵpropertyInterpolate2("id", "list_item", parentIndex_r10, "_", pos_r9, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", recursiveListTmpl_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction2(7, _c5, data_r12[ctx_r1.additionalParameters["TreeViewKey"]], "_" + pos_r9));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_ul_0_Template, 2, 10, "ul", 31);
} if (rf & 2) {
    const data_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", data_r12[ctx_r1.additionalParameters["TreeViewKey"]].length > 0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_ol_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_ol_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "ol", 32);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_ol_0_ng_container_1_Template, 1, 0, "ng-container", 25);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext(2);
    const data_r12 = ctx_r15.$implicit;
    const pos_r9 = ctx_r15.index;
    const parentIndex_r10 = i0.ɵɵnextContext().parent_index;
    i0.ɵɵnextContext();
    const recursiveListTmpl_r6 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassProp("d-none", ctx_r1.additionalParameters["isTreeExpandable"] && ctx_r1.additionalParameters["isTreeExpandable"].toLowerCase() == "true");
    i0.ɵɵpropertyInterpolate2("id", "list_item", parentIndex_r10, "_", pos_r9, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", recursiveListTmpl_r6)("ngTemplateOutletContext", i0.ɵɵpureFunction2(7, _c5, data_r12[ctx_r1.additionalParameters["TreeViewKey"]], "_" + pos_r9));
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_ol_0_Template, 2, 10, "ol", 31);
} if (rf & 2) {
    const data_r12 = i0.ɵɵnextContext().$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngIf", data_r12[ctx_r1.additionalParameters["TreeViewKey"]].length > 0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "li");
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_div_1_Template, 1, 3, "div", 26);
    i0.ɵɵelementStart(2, "div", 27);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_Template_div_click_2_listener() { const ctx_r10 = i0.ɵɵrestoreView(_r7); const data_r12 = ctx_r10.$implicit; const pos_r9 = ctx_r10.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r12, pos_r9)); })("keyup.enter", function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_Template_div_keyup_enter_2_listener() { const ctx_r12 = i0.ɵɵrestoreView(_r7); const data_r12 = ctx_r12.$implicit; const pos_r9 = ctx_r12.index; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.listCellClick(data_r12, pos_r9)); });
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_3_Template, 4, 2, "ng-container", 10)(4, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_4_Template, 7, 13, "ng-container", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_5_Template, 1, 1, "ng-template", null, 5, i0.ɵɵtemplateRefExtractor)(7, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_template_7_Template, 1, 1, "ng-template", null, 6, i0.ɵɵtemplateRefExtractor)(9, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_ng_container_9_Template, 1, 0, "ng-container", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r12 = ctx.$implicit;
    const pos_r9 = ctx.index;
    const defaultList_r29 = i0.ɵɵreference(6);
    const orderedList_r30 = i0.ɵɵreference(8);
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", data_r12[ctx_r1.additionalParameters["TreeViewKey"]].length > 0 && ctx_r1.additionalParameters["isTreeExpandable"] && ctx_r1.additionalParameters["isTreeExpandable"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("list-item list-item-pos-", pos_r9, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r9 ? "list-item-selected" : "", " data-list show-in-row");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", data_r12.fields);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.type === "List-Expandable" && ctx_r1.hidenRows);
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.additionalParameters["TreeViewType"] && ctx_r1.additionalParameters["TreeViewType"] == "ol" ? orderedList_r30 : defaultList_r29);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_li_0_Template, 10, 11, "li", 10);
} if (rf & 2) {
    const list_r31 = ctx.list;
    i0.ɵɵproperty("ngForOf", list_r31);
} }
function TreeRendererComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_3_div_1_Template, 2, 1, "div", 18);
    i0.ɵɵelement(2, "div");
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_3_Template, 2, 4, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor)(5, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_5_Template, 2, 4, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(7, TreeRendererComponent_ng_container_0_ng_container_3_ng_container_7_Template, 1, 0, "ng-container", 19)(8, TreeRendererComponent_ng_container_0_ng_container_3_ng_template_8_Template, 1, 1, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const defaultListTop_r32 = i0.ɵɵreference(4);
    const orderedListTop_r33 = i0.ɵɵreference(6);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.chipsDisplay);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("list-loader ", ctx_r1.listLoading ? "list-pending" : "list-loaded", "");
    i0.ɵɵadvance(5);
    i0.ɵɵproperty("ngTemplateOutlet", ctx_r1.additionalParameters["TreeViewType"] && ctx_r1.additionalParameters["TreeViewType"] == "ol" ? orderedListTop_r33 : defaultListTop_r32);
} }
function TreeRendererComponent_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "h5", 33);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.noDataFoundLabel);
} }
function TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_ng_template_0_Template(rf, ctx) { }
function TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_1_Template, 1, 0, null, 25);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r34 = ctx.$implicit;
    const position_r35 = ctx.index;
    const ctx_r35 = i0.ɵɵnextContext();
    const data_r37 = ctx_r35.$implicit;
    const pos_r38 = ctx_r35.index;
    i0.ɵɵnextContext(3);
    const cellDataLoading_r39 = i0.ɵɵreference(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellDataLoading_r39)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c3, field_r34, data_r37, pos_r38, position_r35));
} }
function TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 35);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_ng_container_2_Template, 2, 7, "ng-container", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r38 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("list-item list-item-pos-", pos_r38, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.listLoading ? "list-pending" : "list-loaded", " ", ctx_r1.selectedRowIndex === pos_r38 ? "list-item-selected" : "", "");
    i0.ɵɵattribute("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.sectionData.fields);
} }
function TreeRendererComponent_ng_container_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_5_ng_container_1_Template, 3, 8, "ng-container", 34);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.listElements);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 46);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r41); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(1)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === 1);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationFirstLabel);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template(rf, ctx) { if (rf & 1) {
    const _r42 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 47);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template_button_click_0_listener() { const pageNumber_r43 = i0.ɵɵrestoreView(_r42).$implicit; const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(pageNumber_r43)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const pageNumber_r43 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate1("pagination-btn-page ", pageNumber_r43 === ctx_r1.pagination.currentPage ? "active" : "", "");
    i0.ɵɵattributeInterpolate1("aria-label", "Select page ", pageNumber_r43, "");
    i0.ɵɵproperty("disabled", pageNumber_r43 === "...");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(pageNumber_r43);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r44 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 48);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r44); const ctx_r1 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r1.setCurrent(ctx_r1.pagination.pageCount)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", ctx_r1.pagination.currentPage === ctx_r1.pagination.pageCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.paginationLastLabel);
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_option_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "option", 49);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const data_r45 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngValue", data_r45)("selected", data_r45 == ctx_r1.pagination.currentItemCount);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", data_r45, "");
} }
function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 37)(1, "p", 38);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_3_Template, 2, 2, "button", 39);
    i0.ɵɵelementStart(4, "button", 40);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template_button_click_4_listener() { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.paginationPrevious()); });
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(6, TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_6_Template, 2, 7, "button", 41);
    i0.ɵɵelementStart(7, "button", 42);
    i0.ɵɵlistener("click", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.paginationNext()); });
    i0.ɵɵtext(8);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, TreeRendererComponent_ng_container_0_ng_container_6_div_1_button_9_Template, 2, 2, "button", 43);
    i0.ɵɵelementStart(10, "select", 44);
    i0.ɵɵlistener("change", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template_select_change_10_listener() { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(3); ctx_r1.onPaginationCountChange(); return i0.ɵɵresetView(ctx_r1.setPaginationCount()); });
    i0.ɵɵtwoWayListener("ngModelChange", function TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template_select_ngModelChange_10_listener($event) { i0.ɵɵrestoreView(_r40); const ctx_r1 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r1.pagination.currentItemCount, $event) || (ctx_r1.pagination.currentItemCount = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtemplate(11, TreeRendererComponent_ng_container_0_ng_container_6_div_1_option_11_Template, 2, 3, "option", 45);
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
function TreeRendererComponent_ng_container_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_ng_container_6_div_1_Template, 12, 11, "div", 36);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showPagination && ctx_r1.autoPagination);
} }
function TreeRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_container_0_div_1_Template, 3, 2, "div", 9)(2, TreeRendererComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 10)(3, TreeRendererComponent_ng_container_0_ng_container_3_Template, 10, 5, "ng-container", 8)(4, TreeRendererComponent_ng_container_0_ng_container_4_Template, 3, 1, "ng-container", 8)(5, TreeRendererComponent_ng_container_0_ng_container_5_Template, 2, 1, "ng-container", 8)(6, TreeRendererComponent_ng_container_0_ng_container_6_Template, 2, 1, "ng-container", 8);
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
    i0.ɵɵproperty("ngIf", ctx_r1.noDataFound && !ctx_r1.showLoading && !ctx_r1.showSkeletonLoader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSkeletonLoader && ctx_r1.additionalParameters["ShowSkeletonLoader"] && ctx_r1.additionalParameters["ShowSkeletonLoader"].toLowerCase() == "true");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.noDataFound);
} }
function TreeRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(12, _c7, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function TreeRendererComponent_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, TreeRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 52);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const data_r48 = ctx_r45.data;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r1.componentMap[field_r47.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction6(12, _c8, ctx_r1.stepId, ctx_r1.rootData, field_r47["rowData"], field_r47, field_r47.field_type, i0.ɵɵpureFunction3(8, _c6, ctx_r1.primaryKeyVal, data_r48[ctx_r1.primaryKeyVal], data_r48)));
} }
function TreeRendererComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-tree-renderer", 53);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r45 = i0.ɵɵnextContext();
    const field_r47 = ctx_r45.field;
    const position_r49 = ctx_r45.position;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r49, " ", field_r47.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r47.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r47)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("rowData", field_r47["rowData"])("sectionData", field_r47)("templateId", ctx_r1.templateId)("type", field_r47.field_type)("childList", ctx_r1.childList);
} }
function TreeRendererComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtext(1, " Toogle Button Container ");
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 50);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_template_1_ng_container_1_Template, 4, 18, "ng-container", 51)(2, TreeRendererComponent_ng_template_1_ng_container_2_Template, 4, 18, "ng-container", 51)(3, TreeRendererComponent_ng_template_1_ng_container_3_Template, 4, 18, "ng-container", 51)(4, TreeRendererComponent_ng_template_1_ng_container_4_Template, 4, 18, "ng-container", 51)(5, TreeRendererComponent_ng_template_1_ng_container_5_Template, 4, 18, "ng-container", 51)(6, TreeRendererComponent_ng_template_1_ng_container_6_Template, 4, 18, "ng-container", 51)(7, TreeRendererComponent_ng_template_1_ng_container_7_Template, 4, 18, "ng-container", 51)(8, TreeRendererComponent_ng_template_1_ng_container_8_Template, 4, 18, "ng-container", 51)(9, TreeRendererComponent_ng_template_1_ng_container_9_Template, 4, 19, "ng-container", 51)(10, TreeRendererComponent_ng_template_1_ng_container_10_Template, 2, 10, "ng-container", 51)(11, TreeRendererComponent_ng_template_1_ng_container_11_Template, 2, 0, "ng-container", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r47 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r47.field_type);
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
    i0.ɵɵproperty("ngSwitchCase", "TreeView");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "ToggleButton");
} }
function TreeRendererComponent_ng_template_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 54);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 55);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 56);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 57);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 58);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 59);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 60);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 61);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 62);
    i0.ɵɵelementContainerEnd();
} }
function TreeRendererComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 50);
    i0.ɵɵtemplate(1, TreeRendererComponent_ng_template_3_ng_container_1_Template, 2, 0, "ng-container", 51)(2, TreeRendererComponent_ng_template_3_ng_container_2_Template, 2, 0, "ng-container", 51)(3, TreeRendererComponent_ng_template_3_ng_container_3_Template, 2, 0, "ng-container", 51)(4, TreeRendererComponent_ng_template_3_ng_container_4_Template, 2, 0, "ng-container", 51)(5, TreeRendererComponent_ng_template_3_ng_container_5_Template, 2, 0, "ng-container", 51)(6, TreeRendererComponent_ng_template_3_ng_container_6_Template, 2, 0, "ng-container", 51)(7, TreeRendererComponent_ng_template_3_ng_container_7_Template, 2, 0, "ng-container", 51)(8, TreeRendererComponent_ng_template_3_ng_container_8_Template, 2, 0, "ng-container", 51)(9, TreeRendererComponent_ng_template_3_ng_container_9_Template, 2, 0, "ng-container", 51);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r50 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r50.field_type);
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
export class TreeRendererComponent {
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
    showPagination = true;
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
    panelOpenState = false;
    items = [{
            title: 'title1',
            description: 'desc1',
            content: 'content1'
        }, {
            title: 'title2',
            description: 'desc2',
            content: 'content2'
        }];
    componentList = {};
    componentMap = {
        label: defer(() => {
            if (!this.componentList['label']) {
                this.componentList['label'] = import('../../field-components/cee-label/cee-label.component').then(m => m.CeeLabelComponent);
            }
            return this.componentList['label'];
        }),
        Textfield: defer(() => {
            if (!this.componentList['Textfield']) {
                this.componentList['Textfield'] = import('../../field-components/cee-textfield/cee-textfield.component').then(m => m.CeeTextfieldComponent);
            }
            return this.componentList['Textfield'];
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
        Link: defer(() => {
            if (!this.componentList['Link']) {
                this.componentList['Link'] = import('../../field-components/cee-link/cee-link.component').then(m => m.CeeLinkComponent);
            }
            return this.componentList['Link'];
        }),
        Video: defer(() => {
            if (!this.componentList['Video']) {
                this.componentList['Video'] = import('../../field-components/cee-video/cee-video.component').then(m => m.CeeVideoComponent);
            }
            return this.componentList['Video'];
        }),
        Table: defer(() => {
            if (!this.componentList['Table']) {
                this.componentList['Table'] = import('../../field-components/cee-table/cee-table.component').then(m => m.CeeTableComponent);
            }
            return this.componentList['Table'];
        }),
        TreeView: defer(() => {
            if (!this.componentList['TreeView']) {
                this.componentList['TreeView'] = import('../../components/tree-renderer/tree-renderer.component').then(m => m.TreeRendererComponent);
            }
            return this.componentList['TreeView'];
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
    async ngOnInit() {
        let fromStore;
        let preRes;
        const tempApiRes = this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
            preRes = res;
        }, err => {
            console.error(err);
        });
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
                        this.showPagination = paramter.value === 'false' ? false : true;
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
                            if (!this.isSingleAPIKey && this.sectionData.unique_id) {
                                const apiKey = this.sectionData.response_api_key.split('|')[0];
                                const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                                if (handlerData) {
                                    fromStore = handlerData.value;
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
            if (Object.keys(this.childList).length) {
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
            if (this.sectionData.possible_values && this.sectionData.possible_values.length > 0) {
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
        this.variableObj['emitApiSuccessResponse_' +
            unique_id] =
            this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                this.setListData(res);
            }, err => {
                console.error(err);
                this.showLoading = false;
                this.noDataFound = true;
            });
        /**
         * check pre API response
         */
        tempApiRes.unsubscribe();
        if (preRes) {
            this.setListData(preRes);
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
            this.noDataFound = false;
            this.searchData = new MatTableDataSource(this.rowData.value);
            this.pagination.itemCount = this.rowData.value.length;
            this.onPaginationCountChange();
        }
        if (this.rowData) {
            this.appData.visible = this.rowData.visible;
        }
        this.onComponentEvent('OnLoad');
        // set step id
        this.appData.stepId = this.stepId;
        // call the api event success emitter
        if (fromStore) {
            this.sharedEventsServiceService.emitApiSuccessResponse.emit(fromStore);
        }
        this.variableObj['searchFilterEmitter_' + unique_id] = this.sharedEventsServiceService.searchFilterEmitter.subscribe(data => {
            if (data['uniqueIds'].includes(this.sectionData.unique_id)) {
                this.filterTxt = data['values'][0] ? data['values'][0] : '';
                this.commonUtil.setFilterKeys(this.searchData, data['filterCol']);
                this.applyFilter();
            }
        });
    }
    setShownData() {
        // console.log(this.displayValuesLazy," -- ",this.iRowData," -- ",this.itemPerPage)
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
                        this.childList = childData;
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
                    // console.log("result: ",result);
                    this.searchData = new MatTableDataSource(result);
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
                this.searchData = new MatTableDataSource(res);
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
        // console.log(properties);
        this.displayValues = properties;
        this.checkCheckedValues();
        this.lazyLoading();
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
                // console.log("displayValuesLazy: ",this.displayValuesLazy);
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
    setRecursiveData(displayValues) {
        var dataSet = [];
        for (let i = 0; i < displayValues.length; i++) {
            let data = displayValues[i];
            // console.log("i: ",i);
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
                    // this.setRecursiveData(field.child_fields)
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
            if (this.additionalParameters['TreeViewKey'] in data && data[this.additionalParameters['TreeViewKey']].length > 0) {
                data[this.additionalParameters['TreeViewKey']] = this.setRecursiveData(data[this.additionalParameters['TreeViewKey']]);
            }
            dataSet.push(data);
        }
        return dataSet;
    }
    setFieldProperties(displayValues) {
        for (let i = 0; i < displayValues.length; i++) {
            let data = displayValues[i];
            // console.log("i: ",i);
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
                    // this.setRecursiveData(field.child_fields)
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
            if (this.additionalParameters['TreeViewKey'] in data && data[this.additionalParameters['TreeViewKey']].length > 0) {
                data[this.additionalParameters['TreeViewKey']] = this.setRecursiveData(data[this.additionalParameters['TreeViewKey']]);
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
    list_change(data, isChecked, context) {
        const value = data[this.primaryKeyVal];
        if (isChecked) {
            if (this.type === 'List-Single-Select') {
                this.storeData = [];
            }
            this.storeData = this.storeData.concat([value]);
        }
        else {
            if (this.storeData.length > 0) {
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
        this.onComponentEvent('onclick');
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
        if (this.sectionData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            let isEditable = false;
            let isVisible = false;
            if (field.is_editable === 1) {
                isEditable = true;
            }
            if (field.is_display === 1) {
                isVisible = true;
            }
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            obj = {
                unique_id: field.unique_id,
                html_id: field.unique_id + '-' + list_pos,
                fromField: 'Tree',
                visible: field.is_display === 2 ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: (field && field.field_type && (field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))') ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData
            };
        }
        else {
            obj = {
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                html_id: field.unique_id + '-' + list_pos
            };
        }
        if (this.selectedObj.checkbox && this.sectionData.fields[this.selectedObj.checkbox].unique_id === field.unique_id) {
            this.list_change(data, obj.value, list_pos);
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
        if (this.sectionData.unique_id) {
            if (this.sectionData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.sectionData.event_list))) {
                    if (event.isDefault && event.event_name.toLowerCase() === name.toLowerCase()) {
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
    getExpandedStatus(elementId) {
        // console.log("elementId: ",elementId);
        var ele = document.getElementById(elementId);
        if (ele && !ele.classList.contains("d-none")) {
            return true;
        }
        else {
            return false;
        }
    }
    toggle(elementId) {
        if (this.additionalParameters['isTreeExpandable'] && this.additionalParameters['isTreeExpandable'].toLowerCase() == 'true') {
            // console.log("elementId: ",elementId)
            var ele = document.getElementById(elementId);
            if (!ele.classList.contains("d-none")) {
                ele.classList.add("d-none");
            }
            else {
                ele.classList.remove("d-none");
            }
        }
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
    static ɵfac = function TreeRendererComponent_Factory(t) { return new (t || TreeRendererComponent)(i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.WfeStepLoaderService), i0.ɵɵdirectiveInject(i6.CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: TreeRendererComponent, selectors: [["app-tree-renderer"]], inputs: { sectionData: "sectionData", stepId: "stepId", templateId: "templateId", type: "type", rowData: "rowData", rootData: "rootData", childList: "childList" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 5, vars: 1, consts: [["cellData", ""], ["cellDataLoading", ""], ["defaultListTop", ""], ["orderedListTop", ""], ["recursiveListTmpl", ""], ["defaultList", ""], ["orderedList", ""], ["elseField", ""], [4, "ngIf"], ["class", "filter-container", 4, "ngIf"], [4, "ngFor", "ngForOf"], [1, "filter-container"], ["floatLabel", "never"], ["filterTxt", "", "matInput", "", 3, "ngModelChange", "keyup", "ngModel", "placeholder"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], ["class", "chiplayout", 4, "ngIf"], [4, "ngTemplateOutlet"], [1, "chiplayout"], ["class", "chipspace", 4, "ngFor", "ngForOf"], [1, "chipspace"], [1, "chipcss"], [1, "chipdeletecss", 3, "click"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["class", "expand-child", "aria-hidden", "expand", 3, "ngClass", "click", 4, "ngIf"], [3, "click", "keyup.enter"], ["aria-hidden", "expand", 1, "expand-child", 3, "click", "ngClass"], [4, "ngIf", "ngIfElse"], ["role", "button", 3, "click"], [3, "d-none", "id", 4, "ngIf"], [3, "id"], [1, "no-data-info", "text-center", "my-5"], ["class", "list-conatianer", 4, "ngFor", "ngForOf"], [1, "list-conatianer"], ["class", "pagination-container", 4, "ngIf"], [1, "pagination-container"], [1, "pagination-text-container"], ["role", "button", "class", "pagination-btn-first", "aria-label", "Select First", 3, "disabled", "click", 4, "ngIf"], ["role", "button", "aria-label", "Select Previous", 1, "pagination-btn-previous", 3, "click", "disabled"], ["role", "button", 3, "disabled", "class", "click", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "Select Next", 1, "pagination-btn-next", 3, "click", "disabled"], ["role", "button", "class", "pagination-btn-last", "aria-label", "Select Last", 3, "disabled", "click", 4, "ngIf"], [1, "pagination-count-selector", 3, "change", "ngModelChange", "ngModel"], [3, "ngValue", "selected", 4, "ngFor", "ngForOf"], ["role", "button", "aria-label", "Select First", 1, "pagination-btn-first", 3, "click", "disabled"], ["role", "button", 3, "click", "disabled"], ["role", "button", "aria-label", "Select Last", 1, "pagination-btn-last", 3, "click", "disabled"], [3, "ngValue", "selected"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "rowData", "sectionData", "templateId", "type", "childList"], [1, "card__label", "loading"], [1, "card__text", "loading"], [1, "card__menu", "loading"], [1, "card__image", "loading"], [1, "card__picker", "loading"], [1, "card__button", "loading"], [1, "card__link", "loading"], [1, "card__table", "loading"], [1, "card__list", "loading"]], template: function TreeRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, TreeRendererComponent_ng_container_0_Template, 7, 6, "ng-container", 8)(1, TreeRendererComponent_ng_template_1_Template, 12, 12, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(3, TreeRendererComponent_ng_template_3_Template, 10, 10, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [TreeRendererComponent, MatFormFieldModule, i11.MatFormField, MatInputModule, i12.MatInput, NgStyle, NgClass, CommonModule, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitch, i13.NgSwitchCase, i13.AsyncPipe, FormsModule, i14.NgSelectOption, i14.ɵNgSelectMultipleOption, i14.DefaultValueAccessor, i14.SelectControlValueAccessor, i14.NgControlStatus, i14.NgModel], styles: ["@charset \"UTF-8\";div.expand-child[_ngcontent-%COMP%]:after{content:\"+\";color:#777;font-weight:700;float:right;margin-left:5px}div.expand-child.active[_ngcontent-%COMP%]:after{content:\"\\2212\"}div.expand-child[_ngcontent-%COMP%]{background-color:#fff;color:#777;cursor:pointer;border:none;text-align:left;outline:none;font-size:15px}div.expand-child.active[_ngcontent-%COMP%], div.expand-child[_ngcontent-%COMP%]:hover{background-color:#fff;color:#555}.expand-child[_ngcontent-%COMP%]{font-size:large;font-weight:700;float:left;cursor:pointer}.chipcss[_ngcontent-%COMP%]{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss[_ngcontent-%COMP%]{color:red}.chiplayout[_ngcontent-%COMP%]{display:flex}.chipspace[_ngcontent-%COMP%]{margin-right:5px}.cee-list-detail[_ngcontent-%COMP%]{display:none}.cee-list-detail.cee-expanded-row[_ngcontent-%COMP%]{display:block}.list-item[_ngcontent-%COMP%]{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item[_ngcontent-%COMP%]{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:_ngcontent-%COMP%_fadein 2s}@keyframes _ngcontent-%COMP%_fadein{0%{opacity:0}to{opacity:1}}.move-ctrl[_ngcontent-%COMP%]{float:left;width:15%;text-align:center}.card__title[_ngcontent-%COMP%]{padding:8px;font-size:22px;font-weight:700}.card__title.loading[_ngcontent-%COMP%]{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__description.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__label.loading[_ngcontent-%COMP%]{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__text.loading[_ngcontent-%COMP%]{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu[_ngcontent-%COMP%]{display:inline;padding:8px;font-size:16px}.card__menu.loading[_ngcontent-%COMP%]{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;padding:8px;height:100%}.card__image.loading[_ngcontent-%COMP%]{height:300px;margin:1rem;width:400px}.card__picker[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__picker.loading[_ngcontent-%COMP%]{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button[_ngcontent-%COMP%]{padding:8px;font-size:16px}.card__button.loading[_ngcontent-%COMP%]{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading[_ngcontent-%COMP%]{position:relative;background-color:#e2e2e2}.loading[_ngcontent-%COMP%]:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:_ngcontent-%COMP%_loading .8s infinite}@keyframes _ngcontent-%COMP%_loading{to{transform:translate(100%)}}.data-bar[_ngcontent-%COMP%]{margin-bottom:12px;height:100px;width:100px}.data-row[_ngcontent-%COMP%]{height:50px;width:500px}.data-row[_ngcontent-%COMP%], .data-row-second[_ngcontent-%COMP%]{border:1px solid black}.data-container[_ngcontent-%COMP%]{width:16.667%;height:100px;text-align:center}.show-in-row[_ngcontent-%COMP%]{flex-direction:row;box-sizing:border-box;display:flex}.datas-list[_ngcontent-%COMP%]   .data-container[_ngcontent-%COMP%]{min-width:100px}.previous[_ngcontent-%COMP%], .next[_ngcontent-%COMP%]{color:#00f;cursor:pointer}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(TreeRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-tree-renderer', standalone: true, imports: [MatFormFieldModule, MatInputModule, NgStyle, NgClass, CommonModule, NgSwitch, FormsModule], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<div *ngIf=\"showFilter\" class=\"filter-container\">\r\n\t\t<mat-form-field floatLabel=\"never\">\r\n\t\t\t<input [(ngModel)]=\"filterTxt\" filterTxt matInput (keyup)=\"applyFilter()\" placeholder=\"{{filterPlaceholderText}}\">\r\n\t\t</mat-form-field>\r\n\t</div>\r\n\r\n\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t<div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': message.color}\">\r\n\t\t\t\t{{message.message_text}}\r\n\t\t\t</p>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div *ngIf=\"chipsDisplay\" class=\"chiplayout\">\r\n\t\t\t<div *ngFor=\"let chipArray of chipsArray\" class=\"chipspace\">\r\n\t\t\t\t<span class=\"chipcss\">\r\n\t\t\t\t\t{{ chipArray.keyName }} <span class=\"chipdeletecss\" (click)=\"deleteChips(chipArray)\">x</span>\r\n\t\t\t\t</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class=\"list-loader {{listLoading ? 'list-pending':'list-loaded'}}\"></div>\r\n\t\t<!-- ######################## Tree View List ######################### -->\r\n\t\t<ng-template #defaultListTop>\r\n\t\t\t<ul>\r\n\t\t\t\t<ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: displayValuesLazy, parent_index: '' }\"></ng-container>\r\n\t\t\t</ul>\r\n\t\t</ng-template>\r\n\t\t<ng-template #orderedListTop>\r\n\t\t\t<ol>\r\n\t\t\t\t<ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: displayValuesLazy, parent_index: '' }\"></ng-container>\r\n\t\t\t</ol>\r\n\t\t</ng-template>\r\n\t\t<ng-container *ngTemplateOutlet=\"additionalParameters['TreeViewType'] && additionalParameters['TreeViewType'] == 'ol' ? orderedListTop: defaultListTop\"></ng-container>\r\n\t\t<ng-template #recursiveListTmpl let-list=\"list\" let-parentIndex=\"parent_index\">\r\n\t\t\t<li *ngFor=\"let data of list; index as pos\">\r\n\t\t\t\t<div class=\"expand-child\" *ngIf=\"data[additionalParameters['TreeViewKey']].length > 0 && additionalParameters['isTreeExpandable'] && additionalParameters['isTreeExpandable'].toLowerCase() == 'true'\" (click)=\"toggle('list_item'+parentIndex+'_'+pos)\" [ngClass]=\"{'active': getExpandedStatus('list_item'+parentIndex+'_'+pos)}\" aria-hidden=\"expand\"></div>\r\n\t\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}} data-list show-in-row\"\r\n\t\t\t\t\t(click)=\"listCellClick(data, pos)\" (keyup.enter)=\"listCellClick(data, pos)\">\r\n\t\t\t\t\t<ng-container *ngFor=\"let field of data.fields; index as position\">\r\n\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field,data:data,pos:pos,position:'child_'+child_position}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellData; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t</ng-container>\r\n\r\n\t\t\t\t\t<ng-container *ngIf=\"type === 'List-Expandable' && hidenRows\">\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-expandable-option {{is_bootstrap?'row':''}} {{data['hasExpandableData']?'has-expandable-data':'no-expandable-data'}}\">\r\n\t\t\t\t\t\t\t<button role=\"button\" (click)=\"expandedElement = expandedElement === data ? null : data\">{{expandedElement\r\n\t\t\t\t\t\t\t\t=== data ? collapseTitle : expandTitle}}</button>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\tclass=\"cee-list-detail {{is_bootstrap?'col-12':''}} {{expandedElement === data?'cee-expanded-row':''}}\">\r\n\t\t\t\t\t\t\t<div class=\"{{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let field of data.expandable_fields; index as position\">\r\n\t\t\t\t\t\t\t\t\t<ng-container *ngIf=\"field.field_type === 'Generic Block'; else elseField\">\r\n\t\t\t\t\t\t\t\t\t\t<div\r\n\t\t\t\t\t\t\t\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"generic-block-container {{is_bootstrap?'row':''}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<ng-container *ngFor=\"let child_field of field.child_fields; index as child_position\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:child_field, data:data, pos:pos, position:'child_'+child_position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t\t<ng-template #elseField>\r\n\t\t\t\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:data, pos:pos, position:position, expandable:true}\">\r\n\t\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</div>\r\n\t\t\t\t<ng-template #defaultList>\r\n    \t\t\t\t<ul *ngIf=\"data[additionalParameters['TreeViewKey']].length > 0\" [class.d-none]=\"additionalParameters['isTreeExpandable'] && additionalParameters['isTreeExpandable'].toLowerCase() == 'true'\" id=\"list_item{{parentIndex}}_{{pos}}\">\r\n\t\t\t\t\t\t<ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: data[additionalParameters['TreeViewKey']], parent_index: '_'+pos }\">\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-template #orderedList>\r\n    \t\t\t\t<ol *ngIf=\"data[additionalParameters['TreeViewKey']].length > 0\" [class.d-none]=\"additionalParameters['isTreeExpandable'] && additionalParameters['isTreeExpandable'].toLowerCase() == 'true'\" id=\"list_item{{parentIndex}}_{{pos}}\">\r\n\t\t\t\t\t\t<ng-container *ngTemplateOutlet=\"recursiveListTmpl; context:{ list: data[additionalParameters['TreeViewKey']], parent_index: '_'+pos }\">\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</ol>\r\n\t\t\t\t</ng-template>\r\n\t\t\t\t<ng-container *ngTemplateOutlet=\"additionalParameters['TreeViewType'] && additionalParameters['TreeViewType'] == 'ol' ? orderedList: defaultList\"></ng-container>\r\n\t\t\t</li>\r\n\t\t</ng-template>\r\n\t\t<!-- ######################## Tree View List ######################### -->\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"noDataFound && !showLoading && !showSkeletonLoader\">\r\n\t\t<h5 class=\"no-data-info text-center my-5\">{{noDataFoundLabel}}</h5>\r\n\t</ng-container>\r\n\r\n\t<ng-container\r\n\t\t*ngIf=\"showSkeletonLoader && additionalParameters['ShowSkeletonLoader'] && additionalParameters['ShowSkeletonLoader'].toLowerCase() == 'true'\">\r\n\t\t<ng-container *ngFor=\"let data of listElements; index as pos\" class=\"list-conatianer\">\r\n\t\t\t<div [attr.tabindex]=\"tabIndexValue\"\r\n\t\t\t\tclass=\"list-item list-item-pos-{{pos}} {{is_bootstrap?'row':''}} {{listLoading ? 'list-pending':'list-loaded'}} {{selectedRowIndex === pos ? 'list-item-selected' : ''}}\">\r\n\t\t\t\t<ng-container *ngFor=\"let field of sectionData.fields; index as position\">\r\n\t\t\t\t\t<ng-template *ngTemplateOutlet=\"cellDataLoading; context:{field:field,data:data,pos:pos,position:position}\">\r\n\t\t\t\t\t</ng-template>\r\n\t\t\t\t</ng-container>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"!noDataFound\">\r\n\t\t<div class=\"pagination-container\" *ngIf=\"showPagination && autoPagination\">\r\n\t\t\t<p class=\"pagination-text-container\">{{getRangeLabel}}</p>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationFirstLabel\" [disabled]=\"pagination.currentPage === 1\"\r\n\t\t\t\t(click)=\"setCurrent(1)\" class=\"pagination-btn-first\" aria-label=\"Select First\">{{paginationFirstLabel}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === 1\" (click)=\"paginationPrevious()\"\r\n\t\t\t\tclass=\"pagination-btn-previous\" aria-label=\"Select Previous\">{{paginationPreviousLabel}}</button>\r\n\t\t\t<button *ngFor=\"let pageNumber of pages\" role=\"button\" [disabled]=\"pageNumber === '...'\"\r\n\t\t\t\t(click)=\"setCurrent(pageNumber)\"\r\n\t\t\t\tclass=\"pagination-btn-page {{pageNumber === pagination.currentPage?'active':''}}\"\r\n\t\t\t\tattr.aria-label=\"Select page {{pageNumber}}\">{{pageNumber}}</button>\r\n\t\t\t<button role=\"button\" [disabled]=\"pagination.currentPage === pagination.pageCount\" (click)=\"paginationNext()\"\r\n\t\t\t\tclass=\"pagination-btn-next\" aria-label=\"Select Next\">{{paginationNextLabel}}</button>\r\n\t\t\t<button role=\"button\" *ngIf=\"paginationLastLabel\" [disabled]=\"pagination.currentPage === pagination.pageCount\"\r\n\t\t\t\t(click)=\"setCurrent(pagination.pageCount)\" class=\"pagination-btn-last\"\r\n\t\t\t\taria-label=\"Select Last\">{{paginationLastLabel}}</button>\r\n\t\t\t<select (change)=\"onPaginationCountChange(); setPaginationCount()\"\r\n\t\t\t\t[attr.aria-label]=\"'Select no of items to be displayed'\" [(ngModel)]=\"pagination.currentItemCount\"\r\n\t\t\t\tclass=\"pagination-count-selector\">\r\n\t\t\t\t<option [ngValue]=\"data\" [selected]=\"data == pagination.currentItemCount\"\r\n\t\t\t\t\t*ngFor=\"let data of pagination.pageItems\">\r\n\t\t\t\t\t{{data}}</option>\r\n\t\t\t</select>\r\n\t\t</div>\r\n\t</ng-container>\r\n</ng-container>\r\n\r\n<ng-template #cellData let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-label [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\" tabindex=\"0\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-label> -->\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-textfield [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-textfield> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-menu [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-menu> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-image [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-image> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-picker [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-picker> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-button [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-button> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-link [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-link> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Video'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], fieldData: field, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-video [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-video> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n\t\t\t\t<ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async; \r\n\t\t\t\tinputs: {stepId: stepId, rootData: rootData, rowData: field['rowData'], sectionData: field, type: field.field_type, primaryKeyIndex: {name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data},\r\n\t\t\t\t}\"\r\n\t\t\t\t></ng-container>\r\n\t\t\t</div>\r\n\t\t\t<!-- <app-cee-table [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [sectionData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\"\r\n\t\t\t\t[type]=\"field.field_type\">\r\n\t\t\t</app-cee-table> -->\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'TreeView'\">\r\n\t\t\t<app-tree-renderer [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [sectionData]=\"field\" [templateId]=\"templateId\"\r\n\t\t\t\t[type]=\"field.field_type\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[childList]=\"childList\">\r\n\t\t\t</app-tree-renderer>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'ToggleButton'\">\r\n\t\t\tToogle Button Container\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n\r\n<ng-template #cellDataLoading let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\"\r\n\tlet-expandable=\"expandable\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<div class=\"card__label loading\"></div>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngSwitchCase=\"'Textfield'\">\r\n\t\t\t<div class=\"card__text loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Menu'\">\r\n\t\t\t<div class=\"card__menu loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Image'\">\r\n\t\t\t<div class=\"card__image loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Picker'\">\r\n\t\t\t<div class=\"card__picker loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Button'\">\r\n\t\t\t<div class=\"card__button loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Link'\">\r\n\t\t\t<div class=\"card__link loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'Table'\">\r\n\t\t\t<div class=\"card__table loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t\t<ng-container *ngSwitchCase=\"'List'\">\r\n\t\t\t<div class=\"card__list loading\"></div>\r\n\t\t</ng-container>\r\n\r\n\t</ng-container>\r\n</ng-template>\r\n", styles: ["@charset \"UTF-8\";div.expand-child:after{content:\"+\";color:#777;font-weight:700;float:right;margin-left:5px}div.expand-child.active:after{content:\"\\2212\"}div.expand-child{background-color:#fff;color:#777;cursor:pointer;border:none;text-align:left;outline:none;font-size:15px}div.expand-child.active,div.expand-child:hover{background-color:#fff;color:#555}.expand-child{font-size:large;font-weight:700;float:left;cursor:pointer}.chipcss{background:#80808052;padding:0 15px;border-radius:10px}.chipdeletecss{color:red}.chiplayout{display:flex}.chipspace{margin-right:5px}.cee-list-detail{display:none}.cee-list-detail.cee-expanded-row{display:block}.list-item{background-color:#fff;height:auto;width:auto;overflow:hidden;margin:12px 0;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070}.carousel-item{float:left!important;height:auto;width:15%!important;overflow:hidden;border-radius:5px;box-shadow:9px 17px 45px -29px #00000070;background-color:#f0f0f0!important;padding:10px!important;margin:5px!important;animation:fadein 2s}@keyframes fadein{0%{opacity:0}to{opacity:1}}.move-ctrl{float:left;width:15%;text-align:center}.card__title{padding:8px;font-size:22px;font-weight:700}.card__title.loading{height:.5rem;width:50%;margin:1rem;border-radius:3px}.card__description{padding:8px;font-size:16px}.card__description.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__label{padding:8px;font-size:16px}.card__label.loading{width:70%;height:.5rem;margin:1rem;border-radius:3px}.card__text{padding:8px;font-size:16px}.card__text.loading{width:100%;height:.5rem;margin:1rem;border-radius:3px}.card__menu{display:inline;padding:8px;font-size:16px}.card__menu.loading{width:5%;height:1rem;margin:1rem;border-radius:3px}.card__image img{width:100%;padding:8px;height:100%}.card__image.loading{height:300px;margin:1rem;width:400px}.card__picker{padding:8px;font-size:16px}.card__picker.loading{width:50%;height:1rem;margin:1rem;border-radius:3px}.card__button{padding:8px;font-size:16px}.card__button.loading{width:7%;height:1rem;margin:1rem;border-radius:3px}.loading{position:relative;background-color:#e2e2e2}.loading:after{display:block;content:\"\";position:absolute;width:100%;height:100%;transform:translate(-100%);background:-webkit-gradient(linear,left top,right top,from(transparent),color-stop(rgba(255,255,255,.2)),to(transparent));background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:loading .8s infinite}@keyframes loading{to{transform:translate(100%)}}.data-bar{margin-bottom:12px;height:100px;width:100px}.data-row{height:50px;width:500px}.data-row,.data-row-second{border:1px solid black}.data-container{width:16.667%;height:100px;text-align:center}.show-in-row{flex-direction:row;box-sizing:border-box;display:flex}.datas-list .data-container{min-width:100px}.previous,.next{color:#00f;cursor:pointer}\n"] }]
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(TreeRendererComponent, { className: "TreeRendererComponent", filePath: "lib\\components\\tree-renderer\\tree-renderer.component.ts", lineNumber: 46 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHJlZS1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy90cmVlLXJlbmRlcmVyL3RyZWUtcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvdHJlZS1yZW5kZXJlci90cmVlLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUEwRCxNQUFNLGVBQWUsQ0FBQztBQUl6RyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3Q0FBd0MsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFNbkUsT0FBTyxFQUFFLGtCQUFrQixJQUFJLGtCQUFrQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDbkYsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFHOUUsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQ3JELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFHbEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLDRGQUE0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LE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxxSEFBWSxXQUFXOztpRkFFMUYscUJBQXFCO2NBUGpDLFNBQVM7MkJBQ0ksbUJBQW1CLGNBR2pCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsV0FBVyxDQUFDOzZUQU8zRixXQUFXO2tCQUFuQixLQUFLO1lBQ1csTUFBTTtrQkFBdEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxJQUFJO2tCQUFaLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSzs7a0ZBWEcscUJBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBPbkRlc3Ryb3ksIFZpZXdDaGlsZCwgSG9zdExpc3RlbmVyLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgU2V0QVBJQ2FsbGJhY2tEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0LWFwaS1jYWxsYmFjay1kYXRhLXV0aWwnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25hbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtY29uZGl0aW9uYWwtdXRpbCc7XHJcbmltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IE1hdFRhYmxlRGF0YVNvdXJjZSBhcyBNYXRUYWJsZURhdGFTb3VyY2UgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJsZSc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9hbGVydC1tb2RhbC9hbGVydC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBXRkVFdmVudExpc3RIYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWV2ZW50LWxpc3QtaGFuZGxlci11dGlsJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgQVBJS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1rZXktdXRpbCc7XHJcbmltcG9ydCB7IEVtcHR5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2VtcHR5LXV0aWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGFiZWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvZHluYW1pYy1sYWJlbC11dGlsJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG4vLyBpbXBvcnQgeyBDZWVUYWJsZUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhYmxlL2NlZS10YWJsZS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVMaW5rQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbGluay9jZWUtbGluay5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1idXR0b24vY2VlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1waWNrZXIvY2VlLXBpY2tlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGltZS1waWNrZXIvY2VlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZUltYWdlQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtaW1hZ2UvY2VlLWltYWdlLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZU1lbnVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1tZW51L2NlZS1tZW51LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVRleHRmaWVsZENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRleHRmaWVsZC9jZWUtdGV4dGZpZWxkLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZUxhYmVsQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbGFiZWwvY2VlLWxhYmVsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdDbGFzcywgTmdTdHlsZSwgTmdTd2l0Y2ggfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBFIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbi8vIGltcG9ydCB7IENlZVZpZGVvQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdmlkZW8vY2VlLXZpZGVvLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5pbXBvcnQgeyBkZWZlciB9IGZyb20gJ3J4anMnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLXRyZWUtcmVuZGVyZXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL3RyZWUtcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vdHJlZS1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBOZ1N0eWxlLCBOZ0NsYXNzLCBDb21tb25Nb2R1bGUsIE5nU3dpdGNoLCBGb3Jtc01vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIFRyZWVSZW5kZXJlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcclxuXHJcbiAgICBhdXRvUHJldmlld0NvbmZpZ1BhdGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRU5BQkxFX0FVVE9fUFJFVklFVycpPy50b0xvd2VyQ2FzZSgpID09IFwidHJ1ZVwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBVVRPX1BSRVZJRVdfQ09ORklHX1BBVEgnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBVVRPX1BSRVZJRVdfQ09ORklHX1BBVEgnKSA6ICdhc3NldHMvY29uZmlnJztcclxuICAgIGNvbmZpZ0Jsb2NrUGF0aCA9IHRoaXMuYXV0b1ByZXZpZXdDb25maWdQYXRoICsgJy9hcHBsaWNhdGlvbl9ibG9ja3MvYXBwbGljYXRpb25fYmxvY2tzXyc7XHJcblxyXG4gICAgQElucHV0KCkgc2VjdGlvbkRhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSB0ZW1wbGF0ZUlkOiBhbnk7XHJcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBjaGlsZExpc3Q6IGFueSA9IHt9O1xyXG5cclxuICAgIHBhZ2luYXRpb24gPSB7XHJcbiAgICAgICAgcGFnZUl0ZW1zOiBbMTAsIDE1LCAyMF0sXHJcbiAgICAgICAgY3VycmVudEl0ZW1Db3VudDogMTAsXHJcbiAgICAgICAgc2hvd05leHQ6IHRydWUsXHJcbiAgICAgICAgc2hvd1ByZXZpb3VzOiBmYWxzZSxcclxuICAgICAgICBjdXJyZW50UGFnZTogMSxcclxuICAgICAgICBwYWdlQ291bnQ6IDEsXHJcbiAgICAgICAgaXRlbUNvdW50OiAxLFxyXG4gICAgICAgIHN0YXJ0SW5kZXg6IDAsXHJcbiAgICAgICAgZW5kSW5kZXg6IDAsXHJcbiAgICAgICAgcGFnaW5hdGlvblJhbmdlOiA5XHJcbiAgICB9O1xyXG4gICAgc2hvd1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gICAgYXV0b1BhZ2luYXRpb24gPSB0cnVlO1xyXG4gICAgc2hvd0ZpbHRlciA9IGZhbHNlO1xyXG4gICAgZmlsdGVyUGxhY2Vob2xkZXJUZXh0ID0gJ0ZpbHRlcic7XHJcbiAgICBjYW5SZWZyZXNoID0gZmFsc2U7XHJcblxyXG4gICAgZGlzcGxheVZhbHVlczogYW55ID0gW107XHJcbiAgICBkaXNwbGF5VmFsdWVzTGF6eTogYW55ID0gW107XHJcbiAgICBsYXp5SW50ZXJ2YWw6IGFueSA9IFtdO1xyXG4gICAgc2VhcmNoRGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UoW10pO1xyXG4gICAgc2hvd0xvYWRpbmcgPSB0cnVlO1xyXG4gICAgbm9EYXRhRm91bmQgPSB0cnVlO1xyXG4gICAgc2hvd1NrZWxldG9uTG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGxpc3RFbGVtZW50czogYW55ID0gW107XHJcbiAgICByYWRpb1ZhbHVlOiBhbnk7XHJcbiAgICBjaGVja2VkSXRlbXM6IGFueSA9IFtdO1xyXG4gICAgc3RvcmVEYXRhOiBhbnkgPSBbXTtcclxuICAgIHByaW1hcnlLZXlWYWwgPSAnJztcclxuICAgIHNob3dFcnJvck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgbWVzc2FnZXMgPSBbXTtcclxuICAgIC8vIEFwcCBEYXRhIG9mIHRoZSBsaXN0IGNlbGxcclxuICAgIGxpc3RDZWxsQXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICAgIGZpZWxkTGFiZWw6ICcnLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBhcHBEYXRhOiBBcHBEYXRhID0ge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBzdGVwSWQ6ICcnLFxyXG4gICAgICAgIGFwaUtleTogJycsXHJcbiAgICAgICAgZmllbGRMYWJlbDogJycsXHJcbiAgICAgICAgbGlua2VkQmxvY2tJZDogJycsXHJcbiAgICAgICAgaXNSZXBlYXRlZEZpZWxkOiBmYWxzZSxcclxuICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgcmVxdWVzdEFwaUtleTogW10sXHJcbiAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIHRvdGFsQ291bnRBcHBEYXRhOiBBcHBEYXRhID0ge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBzdGVwSWQ6ICcnLFxyXG4gICAgICAgIGFwaUtleTogJycsXHJcbiAgICAgICAgZmllbGRMYWJlbDogJycsXHJcbiAgICAgICAgbGlua2VkQmxvY2tJZDogJycsXHJcbiAgICAgICAgaXNSZXBlYXRlZEZpZWxkOiBmYWxzZSxcclxuICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgcmVxdWVzdEFwaUtleTogW10sXHJcbiAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICB9O1xyXG5cclxuICAgIGNoaXBzQXJyYXk6IGFueSA9IFtdO1xyXG4gICAgY2hpcHNEaXNwbGF5ID0gZmFsc2U7XHJcbiAgICBjaGlwc0FwaUtleVRvRGlzcGxheTogYW55ID0gbnVsbDtcclxuICAgIGNvbnRleHRBcnJheTogYW55ID0gW107XHJcbiAgICBmaWVsZElkTWFwQXBpS2V5OiBvYmplY3QgPSB7fTsgLy8gdG8gbWFwIHRoZSBhcGkgZmllbGQgaWQgYW5kIHRoZSBhcGkga2V5IG9mIGEgc2luZ2xlIGZpZWxkXHJcblxyXG4gICAgYWRkaXRpb25hbFBhcmFtZXRlcnMgPSB7fTtcclxuXHJcbiAgICBzZXRBUElLZXlVdGlsOiBTZXRBUElDYWxsYmFja0RhdGE7XHJcbiAgICBldmVudExpc3RIYW5kbGVyOiBXRkVFdmVudExpc3RIYW5kbGVyO1xyXG4gICAgYXBpS2V5VXRpbDogQVBJS2V5VXRpbDtcclxuICAgIC8vIGFwaVN1YnNjcmlwdGlvbjogU3Vic2NyaXB0aW9uO1xyXG4gICAgdmFyaWFibGVPYmogPSB7fTtcclxuICAgIGNvbmRpdGlvbmFsVXRpbDogQ29uZGl0aW9uYWxVdGlsO1xyXG4gICAgZmllbGREYXRhOiBhbnk7XHJcbiAgICBpc01hbmRhdG9yeSA9IGZhbHNlO1xyXG4gICAgaXNfYm9vdHN0cmFwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBibG9ja1JlbmRlcmVkRGF0YTogYW55O1xyXG4gICAgY29tbW9uVXRpbDogQ29tbW9uVXRpbDtcclxuICAgIGZpbHRlcktleXM6IHN0cmluZ1tdID0gW107XHJcbiAgICBmaWx0ZXJBUElLZXk6IHN0cmluZztcclxuICAgIHBhZ2luYXRpb25TaG93aW5nUmVzdWx0SGludDogc3RyaW5nID0gJyV2YWx1ZSUnO1xyXG4gICAgaGlkZW5Sb3dzOiBzdHJpbmc7XHJcbiAgICBleHBhbmRlZEVsZW1lbnQ7XHJcbiAgICBleHBhbmRUaXRsZTogc3RyaW5nID0gJ1Nob3cnO1xyXG4gICAgY29sbGFwc2VUaXRsZTogc3RyaW5nID0gJ0hpZGUnO1xyXG4gICAgZmlsdGVyVHh0OiBzdHJpbmcgPSAnJztcclxuICAgIGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgcGFnaW5hdGlvbk5leHRMYWJlbDogc3RyaW5nID0gJ05leHQnO1xyXG4gICAgcGFnaW5hdGlvblByZXZpb3VzTGFiZWw6IHN0cmluZyA9ICdQcmV2aW91cyc7XHJcbiAgICBwYWdlczogc3RyaW5nW10gPSBbXTtcclxuICAgIGZpZWxkVmFsdWU6IGFueTtcclxuICAgIHNlcnZlclBhZ2luYXRpb24gPSBmYWxzZTsgLy8gc2V0IHRoaXMgdG8gdHJ1ZSB3aGVuIFBhZ2luYXRpb24gVHlwZSBpcyBzZXJ2ZXJcclxuICAgIHNlcnZlclBhZ2luYXRpb25LZXlzID0gW107XHJcbiAgICBjaGVja0VtcHR5OiBFbXB0eVV0aWw7XHJcbiAgICBzZXREeW5hbWljTGFiZWxVdGlsOiBEeW5hbWljTGFiZWxVdGlsO1xyXG4gICAgLy8gdG8gb3ZlcndyaXRlIHRoZSBwcm9wZXJ0eSBvZiBjaGVjayBib3ggYW5kIHJhZGlvIGluIGNhc2Ugb2YgbGlzdCBzaW5nbGUgc2VsZWN0IGFuZCBtdWx0aSBzZWxlY3RcclxuICAgIHNlbGVjdGVkT2JqID0ge1xyXG4gICAgICAgIHJhZGlvOiBudWxsLFxyXG4gICAgICAgIGNoZWNrYm94OiBudWxsLFxyXG4gICAgfTtcclxuICAgIG5vRGF0YUZvdW5kTGFiZWw6IHN0cmluZyA9ICdubyByZWNvcmQgZm91bmQuJztcclxuICAgIGV4cGFuZGFibGVEYXRhOiBhbnk7XHJcbiAgICBpc0xpc3RDZWxsID0gZmFsc2U7IC8vIHNldCB0cnVlIGlmIHRoZSBmaWVsZHMgaW4gZ2VuZXJpYyBibG9jayBpcyBMaXN0Q2VsbFxyXG4gICAgbGlzdENlbGxFdmVudENvbmZpZyA9IFtdOyAvLyBzZXQgTGlzdCBDZWxsIEV2ZW50IENvbmZpZ1xyXG4gICAgZGlzcGxheWVkVW5pcXVlSWRzID0gW107IC8vIHVuaXF1ZSBJRHMgYXJyYXkgd2hlbiB0aGUgdXNlciBjb25maWd1cmVzIGEgbGlzdCBjZWxsIGluc2lkZSB0aGUgZ2VuZXJpYyBibG9ja1xyXG4gICAgbGlzdEludGVybmFsQXBpRGF0YTogYW55ID0ge307XHJcbiAgICBsaXN0TG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcmVzdWx0Q291bnRBUElLZXk6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwYWdpbmF0aW9uRmlyc3RMYWJlbDogc3RyaW5nO1xyXG4gICAgcGFnaW5hdGlvbkxhc3RMYWJlbDogc3RyaW5nO1xyXG4gICAgc2VsZWN0ZWRSb3dJbmRleDogbnVtYmVyO1xyXG4gICAgdGFiSW5kZXhWYWx1ZTogbnVtYmVyO1xyXG5cclxuICAgIHJvd0RhdGFTaG93bjogYW55O1xyXG4gICAgaVJvd0RhdGE6IG51bWJlcjtcclxuICAgIGl0ZW1QZXJQYWdlOiBudW1iZXI7XHJcblxyXG4gICAgcGFuZWxPcGVuU3RhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGl0ZW1zID0gW3tcclxuICAgICAgICB0aXRsZTogJ3RpdGxlMScsXHJcbiAgICAgICAgZGVzY3JpcHRpb246ICdkZXNjMScsXHJcbiAgICAgICAgY29udGVudDogJ2NvbnRlbnQxJ1xyXG4gICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAndGl0bGUyJyxcclxuICAgICAgICBkZXNjcmlwdGlvbjogJ2Rlc2MyJyxcclxuICAgICAgICBjb250ZW50OiAnY29udGVudDInXHJcbiAgICB9XTtcclxuXHJcbiAgICBjb21wb25lbnRMaXN0ID0ge307XHJcbiAgICBjb21wb25lbnRNYXAgPSB7XHJcbiAgICAgICAgbGFiZWw6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnbGFiZWwnXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbGFiZWwvY2VlLWxhYmVsLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUxhYmVsQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydsYWJlbCddO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFRleHRmaWVsZDogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGZpZWxkJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGZpZWxkJ10gPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRleHRmaWVsZC9jZWUtdGV4dGZpZWxkLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRleHRmaWVsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGZpZWxkJ107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgTWVudTogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ01lbnUnXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbWVudS9jZWUtbWVudS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVNZW51Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydNZW51J107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgSW1hZ2U6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ0ltYWdlJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnSW1hZ2UnXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtaW1hZ2UvY2VlLWltYWdlLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUltYWdlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydJbWFnZSddO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFBpY2tlcjogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10gPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXBpY2tlci9jZWUtcGlja2VyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVBpY2tlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgQnV0dG9uOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRMaXN0WydCdXR0b24nXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydCdXR0b24nXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydCdXR0b24nXTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBMaW5rOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRMaXN0WydMaW5rJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnTGluayddID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1saW5rL2NlZS1saW5rLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUxpbmtDb21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0xpbmsnXTtcclxuICAgICAgICB9KSxcclxuICAgICAgICBWaWRlbzogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50TGlzdFsnVmlkZW8nXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydWaWRlbyddID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS12aWRlby9jZWUtdmlkZW8uY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlVmlkZW9Db21wb25lbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1ZpZGVvJ107XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgVGFibGU6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmNvbXBvbmVudExpc3RbJ1RhYmxlJ10pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGFibGUnXSA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGFibGUvY2VlLXRhYmxlLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRhYmxlQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZSddO1xyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFRyZWVWaWV3OiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5jb21wb25lbnRMaXN0WydUcmVlVmlldyddKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1RyZWVWaWV3J10gPSBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvdHJlZS1yZW5kZXJlci90cmVlLXJlbmRlcmVyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLlRyZWVSZW5kZXJlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnVHJlZVZpZXcnXTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHJpdmF0ZSBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcikge1xyXG4gICAgICAgIHRoaXMuaVJvd0RhdGEgPSAwO1xyXG4gICAgICAgIHRoaXMuaXRlbVBlclBhZ2UgPSA0O1xyXG5cclxuXHJcbiAgICAgICAgdGhpcy5zZXRBUElLZXlVdGlsID0gbmV3IFNldEFQSUNhbGxiYWNrRGF0YShhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsID0gbmV3IER5bmFtaWNMYWJlbFV0aWwoYXBpRGF0YVNlcnZpY2UsIGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbmFsVXRpbCA9IG5ldyBDb25kaXRpb25hbFV0aWwobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdEhhbmRsZXIgPSBuZXcgV0ZFRXZlbnRMaXN0SGFuZGxlcihcclxuICAgICAgICAgICAgY2VlQXBpU2VydmljZSxcclxuICAgICAgICAgICAgcm91dGVyLFxyXG4gICAgICAgICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2csXHJcbiAgICAgICAgICAgIHNuYWNrQmFyLFxyXG4gICAgICAgICAgICBodHRwKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5VXRpbCA9IG5ldyBBUElLZXlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy5jaGVja0VtcHR5ID0gbmV3IEVtcHR5VXRpbCgpO1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNfYm9vdHN0cmFwJykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLmlzX2Jvb3RzdHJhcCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCBmcm9tU3RvcmU7XHJcbiAgICAgICAgbGV0IHByZVJlcztcclxuICAgICAgICBjb25zdCB0ZW1wQXBpUmVzID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBwcmVSZXMgPSByZXM7XHJcbiAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmxpc3RDZWxsQXBwRGF0YS5zdGVwSWQgPSB0aGlzLnN0ZXBJZDtcclxuICAgICAgICBjb25zdCB7XHJcbiAgICAgICAgICAgIGFkZGl0aW9uYWxfcGFyYW1ldGVycyxcclxuICAgICAgICAgICAgZXZlbnRfbGlzdFxyXG4gICAgICAgIH0gPSB0aGlzLnNlY3Rpb25EYXRhO1xyXG4gICAgICAgIGxldCBrZXlzID0gW107XHJcbiAgICAgICAgaWYgKGFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Nob3cgQ2hpcHMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaXBzQXBpS2V5VG9EaXNwbGF5ID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ByaW1hcnlLZXlOYW1lJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmltYXJ5S2V5VmFsID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Nob3cgUGFnaW5hdGlvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BhZ2luYXRpb24gPSBwYXJhbXRlci52YWx1ZSA9PT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBWYWx1ZXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24ucGFnZUl0ZW1zID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiBOdW1iZXIocy50cmltKCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQgPSB0aGlzLnBhZ2luYXRpb24ucGFnZUl0ZW1zWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIE5leHQgTGFiZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25OZXh0TGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdOZXh0JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBQcmV2aW91cyBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvblByZXZpb3VzTGFiZWwgPSBwYXJhbXRlci52YWx1ZSAhPT0gJycgPyBwYXJhbXRlci52YWx1ZSA6ICdQcmV2aW91cyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gRmlyc3QgTGFiZWwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25GaXJzdExhYmVsID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gTGFzdCBMYWJlbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbkxhc3RMYWJlbCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdQYWdpbmF0aW9uIFNob3dpbmcgUmVzdWx0IEhpbnQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb25TaG93aW5nUmVzdWx0SGludCA9IHBhcmFtdGVyLnZhbHVlICE9PSAnJyA/IHBhcmFtdGVyLnZhbHVlIDogJyV2YWx1ZSUnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdObyBEYXRhIEZvdW5kIExhYmVsJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RhdGFGb3VuZExhYmVsID0gcGFyYW10ZXIudmFsdWUgIT09ICcnID8gcGFyYW10ZXIudmFsdWUgOiAnbm8gcmVjb3JkIGZvdW5kLic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1Nob3cgRmlsdGVyJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RmlsdGVyID0gcGFyYW10ZXIudmFsdWUgPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0ZpbHRlciBQbGFjZWhvbGRlciBUZXh0JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJQbGFjZWhvbGRlclRleHQgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnRmlsdGVyS2V5cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyS2V5cyA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdGaWx0ZXJBUElLZXknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlckFQSUtleSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdIaWRlUm93cyc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaGlkZW5Sb3dzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA9IHRoaXMudHlwZSA9PT0gJ0xpc3QtRXhwYW5kYWJsZScgPyBwYXJhbXRlci52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdleHBhbmRUaXRsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlIDogdGhpcy5leHBhbmRUaXRsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnUGFnaW5hdGlvbiBUeXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdzZXJ2ZXInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlcnZlclBhZ2luYXRpb24gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NldCBmcm9tIHN0b3JlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnZhbHVlID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICogT25seSB3b3JrcyBpZiB0aGUgYXBpIGtleSBpcyBtdWx0aXBsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBmb3IgbGlzdCB0byBzaG93IHRoZSBkYXRhIGZyb20gaGFuZGxlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBoYW5kbGVyIGRhdGEgbmVlZHMgdG8gYmUgc3RvcmVkIGluIHRoZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gKiBhcGkgZGF0YSBzdG9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpS2V5ID0gdGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5LnNwbGl0KCd8JylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIoYXBpS2V5LnNwbGl0KCcjIycpWzBdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFuZGxlckRhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbVN0b3JlID0gaGFuZGxlckRhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BhZ2luYXRpb24gQVBJIEtleXMnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXlzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3x8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2NvbGxhcHNlVGl0bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlVGl0bGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID0gdGhpcy50eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyA/IHBhcmFtdGVyLnZhbHVlIDogdGhpcy5jb2xsYXBzZVRpdGxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdSZXN1bHQgQ291bnQgQVBJIEtleSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVzdWx0Q291bnRBUElLZXkgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnVGFiSW5kZXgnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkluZGV4VmFsdWUgPSBwYXJzZUludChwYXJhbXRlci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Nhcm91c2VsSXRlbVBlclBhZ2UnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1QZXJQYWdlID0gKHBhcmFtdGVyLnZhbHVlICYmICFpc05hTihwYXJhbXRlci52YWx1ZSkpID8gcGFyc2VJbnQocGFyYW10ZXIudmFsdWUpIDogNDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1lYW5zIGl0IGlzIGEgZmllbGQgbm90IGEgc2VjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkge1xyXG5cclxuICAgICAgICAgICAgLy8gc2V0IHBhZ2luYXRpb24ga2V5cyBmb3Igc2VydmVyIGRyaXZlbiBsaXN0XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vIDAgdGgga2V5IGZvciB0b3RhbCBObyBvZiB2YWx1ZXNcclxuICAgICAgICAgICAgICAgIC8vIDFzdCBrZXkgZm9yIHBhZ2UgbnVtYmVyXHJcbiAgICAgICAgICAgICAgICAvLyAybmQga2V5IGZvciBwYWdlIHNpemVcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNlcnZlclBhZ2luYXRpb24gJiYga2V5cy5sZW5ndGggIT09IDMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1NvcnJ5IHBhZ2luYXRpb24gYXBpIGtleXMgYXJlIG5vdCBjb25maWd1cmVkIHByb3Blcmx5JyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICdGb3JtYXQgc2hvdWxkIGJlOicgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGFwaV9rZXlfZm9yX3RvdGFsX251bWJlcl9vZl92YWx1ZXM+fHw8YXBpX2tleV9mb3JfcGFnZV9udW1iZXI+fHw8YXBpX2tleV9mb3JfcGFnZV9zaXplPicpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5cyA9IGtleXMubWFwKChzdHIsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRQcmltYXJ5S2V5KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogc3RyLnRyaW0oKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGluZGV4ID09PSAyID8gdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnQgOiAnMSdcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RyLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMuY2hpbGRMaXN0KS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKHRoaXMuY2hpbGRMaXN0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzID0gdGhpcy5jaGlsZExpc3QuYmxvY2tfZmllbGRzO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2RlZmF1bHRfdmFsdWUnXSkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJsb2NrUmVuZGVyZWREYXRhID0gdGhpcy5jb21tb25VdGlsLmJsb2NrQm9vdHN0cmFwUHJvY2VzcyhkYXRhKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzID0gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5saXN0RWxlbWVudHMgPSBBcnJheSh0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudCk7XHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBsaXN0IGhhcyBwb3NzaWJsZSB2YWx1ZXNcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEucG9zc2libGVfdmFsdWVzICYmIHRoaXMuc2VjdGlvbkRhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TGlzdERhdGEodGhpcy5tYXBQb3NzaWJsZVZhbHVlcyh0aGlzLnNlY3Rpb25EYXRhLnBvc3NpYmxlX3ZhbHVlcykpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgRXhwYW5kYWJsZSBmaWVsZCBkZXRhaWxzXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVuUm93cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leHBhbmRhYmxlRGF0YSA9IGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKHRoaXMuaGlkZW5Sb3dzKS50b1Byb21pc2UoKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHJpZXZlIGNoaWxkIGdlbmVyaWMgYmxvY2sgZmllbGRzXHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIHRoaXMuZXhwYW5kYWJsZURhdGEuYmxvY2tfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5kZWZhdWx0X3ZhbHVlID0gZmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihhcCA9PiBhcC5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRlZmF1bHRfdmFsdWUubGVuZ3RoICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZERhdGEgPSBhd2FpdCB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZShmaWVsZC5kZWZhdWx0X3ZhbHVlWzBdLnZhbHVlKS50b1Byb21pc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5jaGlsZF9maWVsZHMgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGNoaWxkRGF0YSkuYmxvY2tfZmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZXRyaWV2ZUJsb2NrRmllbGRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSAhPT0gJ0xpc3QnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlUHJpbWFyeUtleSgnT05fTE9BRCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnc2hvd01hbmRhdG9yeUVycm9yTXNnXycgKyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF0gPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2Uuc2hvd01hbmRhdG9yeUVycm9yTXNnLnN1YnNjcmliZSgocmVzKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcy5maWVsZHMpICYmIHJlcy50eXBlID09PSAnZXZlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pbmNsdWRlcyh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNNYW5kYXRvcnkgJiYgdGhpcy5jaGVja0VtcHR5LmlzRW1wdHkodGhpcy5maWVsZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTWFuZGF0b3J5ICYmIHRoaXMuY2hlY2tFbXB0eS5pc0VtcHR5KHRoaXMuZmllbGRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZW1wdHkgc2Vzc2lvbiBkYXRhIHdoZW4gdGhlIHNlc3Npb24gY2xlYXJhbmNlIGlzIGVtaXR0ZWRcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbJ2VtcHR5U2Vzc2lvbkRhdGEnICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdID1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRGb3JFbXB0eVNlc3Npb24uc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHVuaXF1ZUlkVmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy51bmlxdWVfaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gcmVzLnVuaXF1ZV9pZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlSWRWYWx1ZSA9IFt0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByZXMuYXBpS2V5cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFQSUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZFZhbHVlID0gW3RoaXMuc2VjdGlvbkRhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5pcXVlSWRWYWx1ZSA9IFsuLi51bmlxdWVJZFZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uRGF0YS5yZXNwb25zZV9hcGlfa2V5KSldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZFZhbHVlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udW5pcXVlSWRWYWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5zZWN0aW9uRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodW5pcXVlSWRWYWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZTsgLy8gdHlwZSBhbnlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xpc3QtTXVsdGktU2VsZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hlY2tlZEl0ZW1zID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yYWRpb1ZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGFzc2lnbiBhcHAgZGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBSZXBsYWNlIHdpdGggYSBmdW5jdGlvbiBjb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBwRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXBJZDogdGhpcy5zdGVwSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5IDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRMYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlTGFiZWxzJykgPT09ICd0cnVlJyA/IHRoaXMuc2VjdGlvbkRhdGEuZmllbGRfbGFiZWwgOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVxdWVzdF9hcGlfa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IFtdIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVzcG9uc2VfYXBpX2tleSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogdGhpcy5pc01hbmRhdG9yeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdGhpcy5zZWN0aW9uRGF0YS5pc19lZGl0YWJsZSA9PT0gMSA/IHRydWUgOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDEgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEodGhpcy5hcHBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgcmFkaW8gdmFsdWUgb24gbG9hZCBvZiBhIGZ1bmN0aW9uXHJcbiAgICAgICAgdGhpcy5zaG93U2VsZWN0ZWRSYWRpb1ZhbHVlcygpO1xyXG5cclxuICAgICAgICBjb25zdCB1bmlxdWVfaWQgPSAodGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQgPyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA6IHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbl9pZClcclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgICAgICAnZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZV8nICtcclxuICAgICAgICAgICAgdW5pcXVlX2lkXSA9XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TGlzdERhdGEocmVzKTtcclxuICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGNoZWNrIHByZSBBUEkgcmVzcG9uc2VcclxuICAgICAgICAgKi9cclxuICAgICAgICB0ZW1wQXBpUmVzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgaWYgKHByZVJlcykge1xyXG4gICAgICAgICAgICB0aGlzLnNldExpc3REYXRhKHByZVJlcyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIENoZWNrIGlmIHRoZSBjaGVja2JveCBuZWVkcyBjaGlwc1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHRoaXMuY2hlY2tib3hDaGlwcygpO1xyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgICAgICAnZW1pdFNldEZpZWxkVmFsdWVPbkV2ZW50XycgK1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRdID1cclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0U2V0RmllbGRWYWx1ZU9uRXZlbnQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnVuaXF1ZUlkcyAmJiByZXMudW5pcXVlSWRzLmluY2x1ZGVzKCdmaWx0ZXJfY29sdW1uXycgKyB1bmlxdWVfaWQpICYmIHJlcy52YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwuc2V0RmlsdGVyS2V5cyh0aGlzLnNlYXJjaERhdGEsIHJlc1sndmFsdWVzJ10pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy51bmlxdWVJZHMgJiYgcmVzLnVuaXF1ZUlkcy5pbmNsdWRlcygnZmlsdGVyXycgKyB1bmlxdWVfaWQpICYmIHJlcy52YWx1ZXMgJiYgcmVzLnZhbHVlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbHRlclR4dCA9IHJlc1sndmFsdWVzJ10ubGVuZ3RoID4gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc1sndmFsdWVzJ11bcmVzWyd1bmlxdWVJZHMnXS5pbmRleE9mKCdmaWx0ZXJfJyArIHVuaXF1ZV9pZCldIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzWyd2YWx1ZXMnXVswXVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlGaWx0ZXIoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgICAgICAgICAnZW1pdE9uRGF0YVNldE9yVXBkYXRlZF8nICsgdW5pcXVlX2lkXHJcbiAgICAgICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRmllbGREYXRhVXBkYXRlZChyZXMuYXBpS2V5LCByZXMudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGEudmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEgJiYgdGhpcy5yb3dEYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hEYXRhID0gbmV3IE1hdFRhYmxlRGF0YVNvdXJjZSh0aGlzLnJvd0RhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50ID0gdGhpcy5yb3dEYXRhLnZhbHVlLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YS52aXNpYmxlID0gdGhpcy5yb3dEYXRhLnZpc2libGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Mb2FkJyk7XHJcbiAgICAgICAgLy8gc2V0IHN0ZXAgaWRcclxuICAgICAgICB0aGlzLmFwcERhdGEuc3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGFwaSBldmVudCBzdWNjZXNzIGVtaXR0ZXJcclxuICAgICAgICBpZiAoZnJvbVN0b3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5lbWl0KGZyb21TdG9yZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgICAgICAnc2VhcmNoRmlsdGVyRW1pdHRlcl8nICsgdW5pcXVlX2lkXHJcbiAgICAgICAgXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2Uuc2VhcmNoRmlsdGVyRW1pdHRlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsdGVyVHh0ID0gZGF0YVsndmFsdWVzJ11bMF0gPyBkYXRhWyd2YWx1ZXMnXVswXSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tb25VdGlsLnNldEZpbHRlcktleXModGhpcy5zZWFyY2hEYXRhLCBkYXRhWydmaWx0ZXJDb2wnXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIHNldFNob3duRGF0YSgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5LFwiIC0tIFwiLHRoaXMuaVJvd0RhdGEsXCIgLS0gXCIsdGhpcy5pdGVtUGVyUGFnZSlcclxuICAgICAgICB0aGlzLnJvd0RhdGFTaG93biA9IHRoaXMuZGlzcGxheVZhbHVlc0xhenkuc2xpY2UoXHJcbiAgICAgICAgICAgIHRoaXMuaVJvd0RhdGEsXHJcbiAgICAgICAgICAgIHRoaXMuaVJvd0RhdGEgKyB0aGlzLml0ZW1QZXJQYWdlXHJcbiAgICAgICAgKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJvd0RhdGFTaG93bik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJldmlvdXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaVJvd0RhdGEgIT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmlSb3dEYXRhID0gdGhpcy5pUm93RGF0YSAtIDE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pUm93RGF0YSA9IHRoaXMuZGlzcGxheVZhbHVlc0xhenkubGVuZ3RoIC0gdGhpcy5pdGVtUGVyUGFnZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRTaG93bkRhdGEoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLmlSb3dEYXRhICsgMSA8PSB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5Lmxlbmd0aCAtIHRoaXMuaXRlbVBlclBhZ2UpIHtcclxuICAgICAgICAgICAgdGhpcy5pUm93RGF0YSA9IHRoaXMuaVJvd0RhdGEgKyAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaVJvd0RhdGEgPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNldFNob3duRGF0YSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJldHJpZXZlQmxvY2tGaWVsZHMoKSB7XHJcbiAgICAgICAgLy8gcmV0cmlldmUgY2hpbGQgZ2VuZXJpYyBibG9jayBmaWVsZHNcclxuICAgICAgICBmb3IgKGNvbnN0IFtpLCBmaWVsZF0gb2YgdGhpcy5zZWN0aW9uRGF0YS5maWVsZHMuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheWVkVW5pcXVlSWRzLnB1c2goZmllbGQudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgc3dpdGNoIChmaWVsZC5maWVsZF90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaXN0JzpcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0xpc3QtU2luZ2xlLVNlbGVjdCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaXN0LU11bHRpLVNlbGVjdCc6XHJcbiAgICAgICAgICAgICAgICBjYXNlICdHZW5lcmljIEJsb2NrJzpcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kZWZhdWx0X3ZhbHVlID0gZmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbHRlcihhcCA9PiBhcC5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZGVmYXVsdF92YWx1ZS5sZW5ndGggIT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRGF0YSA9IGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKGZpZWxkLmRlZmF1bHRfdmFsdWVbMF0udmFsdWUpLnRvUHJvbWlzZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnR2VuZXJpYyBCbG9jaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hpbGRfZmllbGRzID0gdGhpcy5jb21tb25VdGlsLmJsb2NrQm9vdHN0cmFwUHJvY2VzcyhjaGlsZERhdGEpLmJsb2NrX2ZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkTGlzdCA9IGNoaWxkRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDaGVja2JveCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9iai5jaGVja2JveCA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdyYWRpbyc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZE9iai5yYWRpbyA9IGk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdMaXN0Y2VsbCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0xpc3RDZWxsID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpc3RDZWxsRXZlbnRDb25maWcgPSBmaWVsZC5ldmVudF9saXN0O1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgbWFwcyBzdGF0aWMgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgKiBAcGFyYW0gcG9zc2libGVWYWx1ZXMgdGhlIGZpZWxkIHBvc3NpYmxlIFZhbHVlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIG1hcFBvc3NpYmxlVmFsdWVzKHBvc3NpYmxlVmFsdWVzOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgY29uc3QgbGlzdFN0YXRpY0RhdGEgPSBbXTtcclxuICAgICAgICBjb25zdCBrZXlzID0gcG9zc2libGVWYWx1ZXNbMF0uc3BsaXQoJ3x8fCcpO1xyXG4gICAgICAgIGZvciAoY29uc3QgaSBpbiBwb3NzaWJsZVZhbHVlcykge1xyXG4gICAgICAgICAgICBpZiAoTnVtYmVyKGkpID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0ge307XHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZVZhbHVlc1tpXS5zcGxpdCgnfHx8JykuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleXNbaW5kZXhdXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBsaXN0U3RhdGljRGF0YS5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGxpc3RTdGF0aWNEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXRzIGxpc3QgZGF0YVxyXG4gICAgICogQHBhcmFtIHJlcyBhcGkgcmVzcG9uc2Ugb3IgdGhlIHJlc3BvbnNlIG9mIHBvc3NpYmxlIHZhbHVlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNldExpc3REYXRhKHJlcykge1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHNlcnZlciBzaWRlIHBhZ2luYXRpb24gYW5kIHRoZW4gc3RvcmUgdGhlIGRhdGEgZm9yIHRoZSB0b3RhbE5vIE9mIFBhZ2VzXHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAvLyBzZXR0aW5nIHRvdGFsIE51bWJlciBvZiB2YWx1ZXNcclxuICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMF0sIHJlcyk7XHJcbiAgICAgICAgICAgIC8vIHNldHRpbmcgY3VycmVudCBwYWdlIG51bWJlclxyXG4gICAgICAgICAgICBjb25zdCBjdXJyUGFnZSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5c1sxXSwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJQYWdlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSBOdW1iZXIoY3VyclBhZ2UpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0IHRvdGFsIG5vIG9mIHBhZ2VzXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFBhZ2luYXRpb25TdG9yZSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzBdLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0xvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICBpZiAoKHRoaXMuaXNTaW5nbGVBUElLZXkgJiYgdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5ICE9PSAnJykgfHxcclxuICAgICAgICAgICAgKCF0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIHRoaXMuc2VjdGlvbkRhdGEucmVzcG9uc2VfYXBpX2tleSAhPT0gJycpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5zZWN0aW9uRGF0YSwgcmVzKTtcclxuICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RhdGFGb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzdWx0OiBcIixyZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoRGF0YSA9IG5ldyBNYXRUYWJsZURhdGFTb3VyY2UocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub0RhdGFGb3VuZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkocmVzKSkge1xyXG4gICAgICAgICAgICBpZiAocmVzICYmIHJlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEgPSBuZXcgTWF0VGFibGVEYXRhU291cmNlKHJlcyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vRGF0YUZvdW5kID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5saXN0SW50ZXJuYWxBcGlEYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmxpc3RJbnRlcm5hbEFwaURhdGEpKTtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50ID0gdGhpcy5zZXJ2ZXJQYWdpbmF0aW9uID9cclxuICAgICAgICAgICAgdGhpcy5saXN0SW50ZXJuYWxBcGlEYXRhW3RoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMF1dIDogdGhpcy5zZWFyY2hEYXRhLmZpbHRlcmVkRGF0YS5sZW5ndGg7XHJcbiAgICAgICAgdGhpcy5zZXRUb3RhbENvdW50QXBwRGF0YSh0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50KTtcclxuICAgICAgICB0aGlzLm9uUGFnaW5hdGlvbkNvdW50Q2hhbmdlKHRoaXMuc2VydmVyUGFnaW5hdGlvbiA/IDAgOiAxKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwuc2V0RmlsdGVyS2V5cyh0aGlzLnNlYXJjaERhdGEsIHRoaXMuZmlsdGVyS2V5cyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRUb3RhbENvdW50QXBwRGF0YSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy50b3RhbENvdW50QXBwRGF0YSA9IHtcclxuICAgICAgICAgICAgLi4udGhpcy50b3RhbENvdW50QXBwRGF0YSxcclxuICAgICAgICAgICAgLi4uIHtcclxuICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCArICdfdG90YWxfY291bnQnLFxyXG4gICAgICAgICAgICAgICAgc3RlcElkOiB0aGlzLnN0ZXBJZCxcclxuICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IHRoaXMucmVzdWx0Q291bnRBUElLZXkgOiAnJyxcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLnJlc3VsdENvdW50QVBJS2V5KSxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMucmVzdWx0Q291bnRBUElLZXkpKSxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2Uuc2V0QXBwRGF0YSh0aGlzLnRvdGFsQ291bnRBcHBEYXRhKTtcclxuICAgICAgICBjb25zdCBlbWl0T2JqID0ge1xyXG4gICAgICAgICAgICBhcGlLZXk6IHRoaXMucmVzdWx0Q291bnRBUElLZXksXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuZW1pdChlbWl0T2JqKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uRmllbGREYXRhVXBkYXRlZChmaWVsZElkOiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcpIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuaXNfZGlzcGxheSA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KHRoaXMuc2VjdGlvbkRhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgaWYgKHZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB2aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHVwZGF0ZSB0aGUgc3RhdGUgb2YgdGhlIHJlcGVhdGFibGUgYmxvY2sgaWYgcmVxdWlyZWRcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgdGhlIGZpbHRlcmluZ1xyXG4gICAgICovXHJcbiAgICBhcHBseUZpbHRlcigpIHtcclxuICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICBuYW1lOiB0aGlzLnNlcnZlclBhZ2luYXRpb24gPyB0aGlzLmZpbHRlckFQSUtleSA6IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkICsgJyMjJyArIHRoaXMuZmlsdGVyQVBJS2V5LFxyXG4gICAgICAgICAgICB2YWx1ZTogdGhpcy5maWx0ZXJUeHRcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIXRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaERhdGEuZmlsdGVyID0gdGhpcy5maWx0ZXJUeHQudHJpbSgpLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhLmxlbmd0aDtcclxuICAgICAgICAgICAgdGhpcy5vblBhZ2luYXRpb25Db3VudENoYW5nZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNldFRvdGFsQ291bnRBcHBEYXRhKHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRQYWdpbmF0aW9uU3RvcmUodGhpcy5zZXJ2ZXJQYWdpbmF0aW9uS2V5c1sxXSwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHsgZXZlbnRfbGlzdCB9ID0gdGhpcy5zZWN0aW9uRGF0YTtcclxuICAgICAgICBpZiAoZXZlbnRfbGlzdCAmJiBldmVudF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50X2xpc3QpKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ09uRmlsdGVyQ2xpY2snLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXR0aW5nIGN1cnJlbnQgcGFnZSB0byAxXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50TGlzdEhhbmRsZXIuc3dpdGNoRXZlbnREaXNwbGF5VHlwZShldmVudCwgZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ub0RhdGFGb3VuZCA9IHRoaXMuc2VhcmNoRGF0YS5maWx0ZXJlZERhdGEubGVuZ3RoID8gZmFsc2UgOiB0cnVlXHJcbiAgICB9XHJcblxyXG4gICAgc2V0UHJpbWFyeUtleSA9IChkYXRhKSA9PiB7XHJcbiAgICAgICAgaWYgKGRhdGEudmFsdWUgJiYgZGF0YS5uYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdEludGVybmFsQXBpRGF0YVtkYXRhLm5hbWVdID0gZGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIGlkOiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiBkYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YS52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLnNldEFwaURhdGEoT2JqZWN0LmFzc2lnbih7fSwgYXBpRGF0YSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQYWdpbmF0aW9uIExvZ2ljIFN0YXJ0IC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHBlcmZvcm1zIHRoZSBwYWdpbmF0aW9uIHByZXZpb3VzXHJcbiAgICAgKi9cclxuICAgIHBhZ2luYXRpb25QcmV2aW91cygpIHtcclxuICAgICAgICBpZiAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIDwgMSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZS0tO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgUGFnZSBudW1iZXIgZm9yIG5leHRcclxuICAgICAgICB0aGlzLnNldFBhZ2luYXRpb25TdG9yZSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzFdLCB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25QYWdpbmF0aW9uQnV0dG9uQ2xpY2snKTtcclxuICAgICAgICBpZiAoIXRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnBlcmZvcm1QYWdpbmF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBwZXJmb3JtcyB0aGUgcGFnaW5hdGlvbiBuZXh0XHJcbiAgICAgKi9cclxuICAgIHBhZ2luYXRpb25OZXh0KCkge1xyXG4gICAgICAgIGlmICh0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPiB0aGlzLnBhZ2luYXRpb24ucGFnZUNvdW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9IHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQ7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBwYWdlIG51bWJlciBmb3IgcHJldmlvdXNcclxuICAgICAgICB0aGlzLnNldFBhZ2luYXRpb25TdG9yZSh0aGlzLnNlcnZlclBhZ2luYXRpb25LZXlzWzFdLCB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25QYWdpbmF0aW9uQnV0dG9uQ2xpY2snKTtcclxuICAgICAgICB0aGlzLnBlcmZvcm1QYWdpbmF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNWYWxpZFBhZ2VOdW1iZXIobnVtKSB7XHJcbiAgICAgICAgcmV0dXJuICgvXlxcZCskLy50ZXN0KG51bSkgJiYgKDAgPCBudW0gJiYgbnVtIDw9IHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQpKTtcclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBwZXJmb3JtcyB0aGUgcGFnaW5hdGlvbiBwYWdlIG51bWJlclxyXG4gICAgICovXHJcbiAgICBzZXRDdXJyZW50KG51bSkge1xyXG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWRQYWdlTnVtYmVyKG51bSkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlID0gbnVtO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgb2YgcGFnaW5hdGlvbiB0eXBlIGlzIHNlcnZlciB0aGUgc2V0IHBhZ2UgbnVtYmVyXHJcbiAgICAgICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvblN0b3JlKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMV0sIG51bSk7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25QYWdpbmF0aW9uQnV0dG9uQ2xpY2snKTtcclxuICAgICAgICAgICAgdGhpcy5wZXJmb3JtUGFnaW5hdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2l2ZW4gdGhlIHBvc2l0aW9uIGluIHRoZSBzZXF1ZW5jZSBvZiBwYWdpbmF0aW9uIGxpbmtzIFtpXSwgZmlndXJlIG91dCB3aGF0IHBhZ2UgbnVtYmVyIGNvcnJlc3BvbmRzIHRvIHRoYXQgcG9zaXRpb24uXHJcbiAgICAgKlxyXG4gICAgICogQHBhcmFtIGlcclxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZVxyXG4gICAgICogQHBhcmFtIHBhZ2luYXRpb25SYW5nZVxyXG4gICAgICogQHBhcmFtIHRvdGFsUGFnZXNcclxuICAgICAqIEByZXR1cm5zICd7Kn0nXHJcbiAgICAgKi9cclxuICAgIGNhbGN1bGF0ZVBhZ2VOdW1iZXIoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcykge1xyXG4gICAgICAgIHZhciBoYWxmV2F5ID0gTWF0aC5jZWlsKHBhZ2luYXRpb25SYW5nZSAvIDIpO1xyXG4gICAgICAgIGlmIChpID09PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXM7XHJcbiAgICAgICAgfSBlbHNlIGlmIChpID09PSAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocGFnaW5hdGlvblJhbmdlIDwgdG90YWxQYWdlcykge1xyXG4gICAgICAgICAgICBpZiAodG90YWxQYWdlcyAtIGhhbGZXYXkgPCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRvdGFsUGFnZXMgLSBwYWdpbmF0aW9uUmFuZ2UgKyBpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGhhbGZXYXkgPCBjdXJyZW50UGFnZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGN1cnJlbnRQYWdlIC0gaGFsZldheSArIGk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8qKlxyXG4gICAgICogR2VuZXJhdGUgYW4gYXJyYXkgb2YgcGFnZSBudW1iZXJzIChvciB0aGUgJy4uLicgc3RyaW5nKSB3aGljaCBpcyB1c2VkIGluIGFuIG5nLXJlcGVhdCB0byBnZW5lcmF0ZSB0aGVcclxuICAgICAqIGxpbmtzIHVzZWQgaW4gcGFnaW5hdGlvblxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSBjdXJyZW50UGFnZVxyXG4gICAgICogQHBhcmFtIHJvd3NQZXJQYWdlXHJcbiAgICAgKiBAcGFyYW0gcGFnaW5hdGlvblJhbmdlXHJcbiAgICAgKiBAcGFyYW0gY29sbGVjdGlvbkxlbmd0aFxyXG4gICAgICogQHJldHVybnMgJ3tBcnJheX0nXHJcbiAgICAgKi9cclxuICAgIGdlbmVyYXRlUGFnZXNBcnJheShjdXJyZW50UGFnZSwgdG90YWxQYWdlcywgcGFnaW5hdGlvblJhbmdlKSB7XHJcbiAgICAgICAgdmFyIHBhZ2VzID0gW107XHJcbiAgICAgICAgdmFyIGhhbGZXYXkgPSBNYXRoLmNlaWwocGFnaW5hdGlvblJhbmdlIC8gMik7XHJcbiAgICAgICAgdmFyIHBvc2l0aW9uO1xyXG5cclxuICAgICAgICBpZiAoY3VycmVudFBhZ2UgPD0gaGFsZldheSkge1xyXG4gICAgICAgICAgICBwb3NpdGlvbiA9ICdzdGFydCc7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0b3RhbFBhZ2VzIC0gaGFsZldheSA8IGN1cnJlbnRQYWdlKSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uID0gJ2VuZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9zaXRpb24gPSAnbWlkZGxlJztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZhciBlbGxpcHNlc05lZWRlZCA9IHBhZ2luYXRpb25SYW5nZSA8IHRvdGFsUGFnZXM7XHJcbiAgICAgICAgdmFyIGkgPSAxO1xyXG4gICAgICAgIHdoaWxlIChpIDw9IHRvdGFsUGFnZXMgJiYgaSA8PSBwYWdpbmF0aW9uUmFuZ2UpIHtcclxuICAgICAgICAgICAgdmFyIHBhZ2VOdW1iZXIgPSB0aGlzLmNhbGN1bGF0ZVBhZ2VOdW1iZXIoaSwgY3VycmVudFBhZ2UsIHBhZ2luYXRpb25SYW5nZSwgdG90YWxQYWdlcyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgb3BlbmluZ0VsbGlwc2VzTmVlZGVkID0gKGkgPT09IDIgJiYgKHBvc2l0aW9uID09PSAnbWlkZGxlJyB8fCBwb3NpdGlvbiA9PT0gJ2VuZCcpKTtcclxuICAgICAgICAgICAgdmFyIGNsb3NpbmdFbGxpcHNlc05lZWRlZCA9IChpID09PSBwYWdpbmF0aW9uUmFuZ2UgLSAxICYmIChwb3NpdGlvbiA9PT0gJ21pZGRsZScgfHwgcG9zaXRpb24gPT09ICdzdGFydCcpKTtcclxuICAgICAgICAgICAgaWYgKGVsbGlwc2VzTmVlZGVkICYmIChvcGVuaW5nRWxsaXBzZXNOZWVkZWQgfHwgY2xvc2luZ0VsbGlwc2VzTmVlZGVkKSkge1xyXG4gICAgICAgICAgICAgICAgcGFnZXMucHVzaCgnLi4uJyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBwYWdlcy5wdXNoKHBhZ2VOdW1iZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGkrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHBhZ2VzO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXRzIHRoZSBwYWdpbmF0aW9uIGNvdW50XHJcbiAgICAgKiBAcGFyYW0gMCB3b250IHJlc2V0IHRoZSBjb3VudCBiZWNhdXNlIGluIHNlcnZlciBzaWRlIHBhZ2luYXRpb25cclxuICAgICAqIHBhZ2UgTnVtYmVyIGNvbWVzIGZyb20gdGhlIGFwaVxyXG4gICAgICovXHJcbiAgICBvblBhZ2luYXRpb25Db3VudENoYW5nZShmbGFnID0gMSkge1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQgPSBNYXRoLmNlaWwoXHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnQgLyB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gUmVzZXQgcG9zaXRpb25cclxuICAgICAgICBpZiAoZmxhZyA9PT0gMSkge1xyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UgPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnBlcmZvcm1QYWdpbmF0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0UGFnaW5hdGlvbkNvdW50KCkge1xyXG4gICAgICAgIC8vIHNldCB0aGUgY3VycmVudCBpdGVtIGNvdW50IGlmIHRoZSBwYWdpbmF0aW9uIGlzIHNlcnZlclxyXG4gICAgICAgIHRoaXMuc2V0UGFnaW5hdGlvblN0b3JlKHRoaXMuc2VydmVyUGFnaW5hdGlvbktleXNbMl0sIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50KTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uUGFnaW5hdGlvbkJ1dHRvbkNsaWNrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBzZXQgdGhlIHZhbHVlcyBvZiB0aGUgc2VsZWN0ZWQgaXRlbXMgaW4gY2FzZSBvZiBMaXN0LVNpbmdsZS1TZWxlY3RcclxuICAgICAqL1xyXG4gICAgc2hvd1NlbGVjdGVkUmFkaW9WYWx1ZXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xpc3QtU2luZ2xlLVNlbGVjdCcpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFkaW9WYWx1ZSA9IHRoaXMuc3RvcmVEYXRhWzBdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzZXQgdGhlIG51bWJlciBvZiBjaGVja2VkIGl0ZW1zIHdoZW4gdGhlIGxpc3QgdHlwZSBpcyBMaXN0LU11bHRpLVNlbGVjdFxyXG4gICAgICovXHJcbiAgICBjaGVja0NoZWNrZWRWYWx1ZXMoKSB7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIHZhbHVlcyBvZiB0aGUgY2hlY2tlZEl0ZW1zXHJcbiAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xpc3QtTXVsdGktU2VsZWN0Jykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yZURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGVja2VkSXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2luZ2xlUmVzIG9mIHRoaXMuZGlzcGxheVZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgodGhpcy5zdG9yZURhdGEpLmluY2x1ZGVzKHNpbmdsZVJlc1t0aGlzLnByaW1hcnlLZXlWYWxdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRJdGVtcy5wdXNoKHNpbmdsZVJlc1t0aGlzLnByaW1hcnlLZXlWYWxdKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoZWNrZWRJdGVtcy5wdXNoKHt9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byBzZXQgcGFnaW5hdGlvbiBhcGkgc3RvcmVcclxuICAgICAqIEBwYXJhbSBuYW1lIHBhZ2luYXRpb24gYXBpIGtleXNcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgdmFsdWUgb2YgdGhlIGFwaSBrZXlcclxuICAgICAqL1xyXG4gICAgc2V0UGFnaW5hdGlvblN0b3JlKG5hbWUsIHZhbHVlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldFByaW1hcnlLZXkoe1xyXG4gICAgICAgICAgICAgICAgbmFtZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcGVyZm9ybXMgdGhlIHBhZ2luYXRpb25cclxuICAgICAqL1xyXG4gICAgcGVyZm9ybVBhZ2luYXRpb24oKSB7XHJcbiAgICAgICAgdGhpcy5wYWdpbmF0aW9uLnN0YXJ0SW5kZXggPVxyXG4gICAgICAgICAgICAodGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlIC0gMSkgKiB0aGlzLnBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudDtcclxuICAgICAgICB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXggPVxyXG4gICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uc3RhcnRJbmRleCArIHRoaXMucGFnaW5hdGlvbi5jdXJyZW50SXRlbUNvdW50O1xyXG4gICAgICAgIHRoaXMucGFnaW5hdGlvbi5lbmRJbmRleCA9XHJcbiAgICAgICAgICAgIHRoaXMucGFnaW5hdGlvbi5lbmRJbmRleCA+IHRoaXMucGFnaW5hdGlvbi5pdGVtQ291bnRcclxuICAgICAgICAgICAgICAgID8gdGhpcy5wYWdpbmF0aW9uLml0ZW1Db3VudFxyXG4gICAgICAgICAgICAgICAgOiB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXg7XHJcbiAgICAgICAgbGV0IHNldERpc3BsYXlWYWx1ZXMgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLnNob3dQYWdpbmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGFnZXMgPSB0aGlzLmdlbmVyYXRlUGFnZXNBcnJheSh0aGlzLnBhZ2luYXRpb24uY3VycmVudFBhZ2UsIHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQsIHRoaXMucGFnaW5hdGlvbi5wYWdpbmF0aW9uUmFuZ2UpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VydmVyUGFnaW5hdGlvbikge1xyXG4gICAgICAgICAgICAgICAgc2V0RGlzcGxheVZhbHVlcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWVzID0gdGhpcy5zZWFyY2hEYXRhLmZpbHRlcmVkRGF0YS5zbGljZShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uc3RhcnRJbmRleCxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBhZ2luYXRpb24uZW5kSW5kZXhcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvdyBQYWdpbmF0aW9uJ10gPT09ICdhdXRvJyAmJiB0aGlzLnBhZ2luYXRpb24uaXRlbUNvdW50IDw9IHRoaXMucGFnaW5hdGlvbi5wYWdlSXRlbXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9QYWdpbmF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmF1dG9QYWdpbmF0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoc2V0RGlzcGxheVZhbHVlcykge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXMgPSB0aGlzLnNlYXJjaERhdGEuZmlsdGVyZWREYXRhO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNlY3Rpb25EYXRhKTtcclxuICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zZXRGaWVsZFByb3BlcnRpZXModGhpcy5kaXNwbGF5VmFsdWVzKTsgLy8gZnVuY3Rpb24gdGhhdCBzZXRzIHNpbmdsZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2cocHJvcGVydGllcyk7XHJcbiAgICAgICAgdGhpcy5kaXNwbGF5VmFsdWVzID0gcHJvcGVydGllcztcclxuICAgICAgICB0aGlzLmNoZWNrQ2hlY2tlZFZhbHVlcygpO1xyXG4gICAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBsYXp5TG9hZGluZygpIHtcclxuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5ID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmxpc3RMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhenlJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGlzcGxheVZhbHVlcy5sZW5ndGggIT09IHRoaXMuZGlzcGxheVZhbHVlc0xhenkubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5LnB1c2godGhpcy5kaXNwbGF5VmFsdWVzW3RoaXMuZGlzcGxheVZhbHVlc0xhenkubGVuZ3RoXSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BsYXlWYWx1ZXNMYXp5OiBcIix0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93Q2Fyb3VzZWwnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTaG93Q2Fyb3VzZWwnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDYXJvdXNlbEl0ZW1QZXJQYWdlJ10gJiYgIWlzTmFOKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Nhcm91c2VsSXRlbVBlclBhZ2UnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtUGVyUGFnZSA9IHBhcnNlSW50KHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0Nhcm91c2VsSXRlbVBlclBhZ2UnXSkgPiB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5Lmxlbmd0aCA/IHRoaXMuZGlzcGxheVZhbHVlc0xhenkubGVuZ3RoIDogcGFyc2VJbnQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQ2Fyb3VzZWxJdGVtUGVyUGFnZSddKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTaG93bkRhdGEoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NrZWxldG9uTG9hZGVyID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubGF6eUludGVydmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEBIb3N0TGlzdGVuZXIoXCJ3aW5kb3c6YmVmb3JldW5sb2FkXCIsIFtcIiRldmVudFwiXSkgdW5sb2FkSGFuZGxlcihldmVudDogRXZlbnQpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5sYXp5SW50ZXJ2YWwpIHtcclxuICAgIC8vICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxhenlJbnRlcnZhbCk7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHRoaXMuZGlzcGxheVZhbHVlc0xhenkgPSBbXTtcclxuICAgIC8vIH1cclxuXHJcbiAgICBzZXRSZWN1cnNpdmVEYXRhKGRpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgICB2YXIgZGF0YVNldCA9IFtdO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheVZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBsZXQgZGF0YSA9IGRpc3BsYXlWYWx1ZXNbaV07XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaTogXCIsaSk7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KCdmaWVsZHMnKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZGF0YVsnZmllbGRzJ10gPSBbXTtcclxuICAgICAgICAgICAgZGF0YVsnbGlzdF9kYXRhJ10gPSB7fTtcclxuICAgICAgICAgICAgZGF0YVsnZXhwYW5kYWJsZV9maWVsZHMnXSA9IFtdO1xyXG4gICAgICAgICAgICBkYXRhWydoYXNFeHBhbmRhYmxlRGF0YSddID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBqIG9mIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGopKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnNldFJlY3Vyc2l2ZURhdGEoZmllbGQuY2hpbGRfZmllbGRzKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnR2VuZXJpYyBCbG9jaycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBrIG9mIGZpZWxkLmNoaWxkX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY2hpbGRGaWVsZCA9IGs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZEZpZWxkWydyb3dEYXRhJ10gPSB0aGlzLmdlbmVyYXRlUm93RGF0YShjaGlsZEZpZWxkLCBkYXRhLCBpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkWydyb3dEYXRhJ10gPSB0aGlzLmdlbmVyYXRlUm93RGF0YShmaWVsZCwgZGF0YSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbJ2ZpZWxkcyddLnB1c2goZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmhpZGVuUm93cyAmJiB0aGlzLmV4cGFuZGFibGVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGogb2YgdGhpcy5leHBhbmRhYmxlRGF0YS5ibG9ja19maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnR2VuZXJpYyBCbG9jaycgJiYgZmllbGQuY2hpbGRfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgayBvZiBmaWVsZC5jaGlsZF9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRmllbGQgPSBrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRGaWVsZFsncm93RGF0YSddID0gdGhpcy5nZW5lcmF0ZVJvd0RhdGEoY2hpbGRGaWVsZCwgZGF0YSwgaSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFsncm93RGF0YSddID0gdGhpcy5nZW5lcmF0ZVJvd0RhdGEoZmllbGQsIGRhdGEsIGksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhWydleHBhbmRhYmxlX2ZpZWxkcyddLnB1c2goZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydUcmVlVmlld0tleSddIGluIGRhdGEgJiYgZGF0YVt0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydUcmVlVmlld0tleSddXS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1RyZWVWaWV3S2V5J11dID0gdGhpcy5zZXRSZWN1cnNpdmVEYXRhKGRhdGFbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snVHJlZVZpZXdLZXknXV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGFTZXQucHVzaChkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGFTZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRQcm9wZXJ0aWVzKGRpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlWYWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBkaXNwbGF5VmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImk6IFwiLGkpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZmllbGRzJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGFbJ2ZpZWxkcyddID0gW107XHJcbiAgICAgICAgICAgIGRhdGFbJ2xpc3RfZGF0YSddID0ge307XHJcbiAgICAgICAgICAgIGRhdGFbJ2V4cGFuZGFibGVfZmllbGRzJ10gPSBbXTtcclxuICAgICAgICAgICAgZGF0YVsnaGFzRXhwYW5kYWJsZURhdGEnXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS5maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaiBvZiB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShqKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRSZWN1cnNpdmVEYXRhKGZpZWxkLmNoaWxkX2ZpZWxkcylcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgayBvZiBmaWVsZC5jaGlsZF9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNoaWxkRmllbGQgPSBrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRGaWVsZFsncm93RGF0YSddID0gdGhpcy5nZW5lcmF0ZVJvd0RhdGEoY2hpbGRGaWVsZCwgZGF0YSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFsncm93RGF0YSddID0gdGhpcy5nZW5lcmF0ZVJvd0RhdGEoZmllbGQsIGRhdGEsIGkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBkYXRhWydmaWVsZHMnXS5wdXNoKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5oaWRlblJvd3MgJiYgdGhpcy5leHBhbmRhYmxlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBqIG9mIHRoaXMuZXhwYW5kYWJsZURhdGEuYmxvY2tfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGopKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snICYmIGZpZWxkLmNoaWxkX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGsgb2YgZmllbGQuY2hpbGRfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjaGlsZEZpZWxkID0gaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkRmllbGRbJ3Jvd0RhdGEnXSA9IHRoaXMuZ2VuZXJhdGVSb3dEYXRhKGNoaWxkRmllbGQsIGRhdGEsIGksIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRbJ3Jvd0RhdGEnXSA9IHRoaXMuZ2VuZXJhdGVSb3dEYXRhKGZpZWxkLCBkYXRhLCBpLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsnZXhwYW5kYWJsZV9maWVsZHMnXS5wdXNoKGZpZWxkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snVHJlZVZpZXdLZXknXSBpbiBkYXRhICYmIGRhdGFbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snVHJlZVZpZXdLZXknXV0ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZGF0YVt0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydUcmVlVmlld0tleSddXSA9IHRoaXMuc2V0UmVjdXJzaXZlRGF0YShkYXRhW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1RyZWVWaWV3S2V5J11dKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGlzcGxheVZhbHVlcztcclxuICAgIH1cclxuXHJcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBQYWdpbmF0aW9uIExvZ2ljIEVuZCAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIG1lc3NhZ2Ugb2JqZWN0IGZyb20gdGhlIG1lc3NhZ2UgY29kZVxyXG4gICAgICogQHBhcmFtIG1lc3NhZ2VDb2RlIHRoZSBtZXNzYWdlIGNvZGUgYXMgY29uZmlndXJlZCBpbiB2YWxpZGF0aW9uX21lc3NhZ2VzIG1lc3NhZ2VfY29kZVxyXG4gICAgICovXHJcbiAgICByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlQ29kZSkge1xyXG4gICAgICAgIGlmIChtZXNzYWdlQ29kZSkge1xyXG4gICAgICAgICAgICBjb25zdCBtZXNzYWdlRGF0YU1hcCA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWVzc2FnZXNEYXRhTWFwW21lc3NhZ2VDb2RlXTtcclxuICAgICAgICAgICAgcmV0dXJuIChtZXNzYWdlRGF0YU1hcCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzaG93cyBhbiBlcnJvciBtZXNzYWdlIG9uIHRoZSBiYXNpcyBvZiB0aGUgY29uZmlndXJlZCB2YWxpZGF0aW9uX21lc3NhZ2VzXHJcbiAgICAgKi9cclxuICAgIHNob3dFcnJvck1lc3NhZ2UoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudmFsaWRhdGlvbl9tZXNzYWdlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgdGhpcy5zZWN0aW9uRGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlID09PSAnTWFuZGF0b3J5Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAobWVzc2FnZS5kaXNwbGF5X3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnTU9EQUwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gb3BlbiBtb2RhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UubWVzc2FnZV9jb2RlKS5tZXNzYWdlX3RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0lOTElORSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1lc3NhZ2VzLnB1c2godGhpcy5yZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLm1lc3NhZ2VfY29kZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JPbk5leHQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1BPUFVQJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9wZW4gc25hY2tiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIuZGlzbWlzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuU25hY2tCYXIodGhpcy5yZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLm1lc3NhZ2VfY29kZSkubWVzc2FnZV90ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBvcGVucyBhIG1hdGVyaWFsIGRpYWxvZyBiYXJcclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBtZXNzYWdlIHRoYXQgaXMgY29uZmlndXJlIGluIHRoZSBDRUUgTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBvcGVuRGlhbG9nKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBkYXRhXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgb3BlbnMgYSBtYXRlcmlhbCBzbmFjayBiYXJcclxuICAgICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRoYXQgaXMgY29uZmlndXJlIGluIHRoZSBDRUUgTWVzc2FnZVxyXG4gICAgICovXHJcbiAgICBvcGVuU25hY2tCYXIobWVzc2FnZSkge1xyXG4gICAgICAgIHRoaXMuc25hY2tCYXIub3BlbihtZXNzYWdlLCAnT0snLCB7XHJcbiAgICAgICAgICAgIHZlcnRpY2FsUG9zaXRpb246ICd0b3AnLFxyXG4gICAgICAgICAgICBwYW5lbENsYXNzOiBbJ21hdC10b29sYmFyJywgJ21hdC1wcmltYXJ5J11cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgZ2V0cyB0cmlnZ2VyZWQgd2hlbiB0aGVyZSBpcyBhIGV2ZW50KEhUTUwgZXZlbnQpIHRyaWdnZXJlZFxyXG4gICAgICogaW4gdGhlIGNhc2Ugb2YgTGlzdC1TaW5nbGUtU2VsZWN0IG9yIExpc3QtTXVsdGktU2VsZWN0XHJcbiAgICAgKiBAcGFyYW0gZGF0YSB0aGUgY3VycmVudCBkYXRhIG9mIHRoZSByb3dcclxuICAgICAqIEBwYXJhbSBpc0NoZWNrZWQgaWYgdGhlIHZhbHVlIGlzIGNoZWNrZWQgb3Igbm90XHJcbiAgICAgKiBAcGFyYW0gY29udGV4dCB0aGUgcG9zaXRpb24gb2YgdGhlIHNlbGVjdGVkIHJvd1xyXG4gICAgICovXHJcbiAgICBsaXN0X2NoYW5nZShkYXRhOiBhbnksIGlzQ2hlY2tlZDogYm9vbGVhbiwgY29udGV4dD86IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gZGF0YVt0aGlzLnByaW1hcnlLZXlWYWxdO1xyXG4gICAgICAgIGlmIChpc0NoZWNrZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ0xpc3QtU2luZ2xlLVNlbGVjdCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVEYXRhID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEgPSB0aGlzLnN0b3JlRGF0YS5jb25jYXQoW3ZhbHVlXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVEYXRhID0gWy4uLnRoaXMuc3RvcmVEYXRhXTsgLy8gY2xvbmluZyBhcnJheVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEuc3BsaWNlKHRoaXMuc3RvcmVEYXRhLmluZGV4T2YodmFsdWUpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaXBzRGlzcGxheSA9IHRydWU7XHJcbiAgICAgICAgICAgIChpc0NoZWNrZWQpID9cclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNBcnJheS5wdXNoKHsga2V5TmFtZTogZGF0YVt0aGlzLmNoaXBzQXBpS2V5VG9EaXNwbGF5XSwga2V5UG9zOiBjb250ZXh0IH0pIDpcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpcHNBcnJheSA9IHRoaXMuY2hpcHNBcnJheS5maWx0ZXIoZSA9PiBlLmtleU5hbWUgIT09IGRhdGFbdGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3JlUHJpbWFyeUtleSgnT05fQ0xJQ0snLCBpc0NoZWNrZWQpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnb25jbGljaycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBzdG9yZXMgdGhlIHZhbHVlIG9mIHRoZSBsaXN0IHNpbmdsZSBzZWxlY3QgYW5kIGxpc3QgbXVsdGkgc2VsZWN0IG9yIHNldCB0aGUgdmFsdWUgb24gbG9hZCBvZiBhIGxpc3RcclxuICAgICAqIEBwYXJhbSB0eXBlIHR5cGUgY2FuIGJlIG9ubHkgT05fTE9BRCBzbyB0aGF0IHRoZSB2YWx1ZSBpcyBhbHJlYWR5IHNldCBpblxyXG4gICAgICogdGhlIGxpc3Qgb24gdGhlIGxvYWQgb2YgdGhlIHBhZ2UgaXMgdGhlIHVzZXIgaGFzIGFscmVhZHkgc2VsZWN0ZWQgdGhhdFxyXG4gICAgICovXHJcbiAgICBzdG9yZVByaW1hcnlLZXkodHlwZT8sIGNoZWNrZWQ/OiBib29sZWFuKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBhZGRpdGlvbmFsUGFyYW0gb2YgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgaWYgKGFkZGl0aW9uYWxQYXJhbS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ1ByaW1hcnlLZXlOYW1lJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJpbWFyeUtleVZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNkYXRhIG9mIHRoaXMuc3RvcmVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJpbWFyeUtleVZhbHVlLnB1c2goc2RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBpZDogdGhpcy5nZXRQcmltYXJ5S2V5KGFkZGl0aW9uYWxQYXJhbS52YWx1ZSksXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpVXJsOiAnJyxcclxuICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuZ2V0UHJpbWFyeUtleShhZGRpdGlvbmFsUGFyYW0udmFsdWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnTGlzdC1TaW5nbGUtU2VsZWN0JyA/IChwcmltYXJ5S2V5VmFsdWVbMF0gPyBwcmltYXJ5S2V5VmFsdWVbMF0gOiAnJykgOiBwcmltYXJ5S2V5VmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgLy8gc3RvcmUgYXBwIGRhdGEgb25seSBpZiBpdCBpcyBjb25maWd1cmVkIGFzIGEgZmllbGRcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTWFuZGF0b3J5ID0gdGhpcy5zZWN0aW9uRGF0YS5pc19tYW5kYXRvcnkgPT09IDEgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFwcERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcElkOiB0aGlzLnN0ZXBJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gdGhpcy5zZWN0aW9uRGF0YS5hcGlfa2V5IDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkTGFiZWw6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZUxhYmVscycpID09PSAndHJ1ZScgPyB0aGlzLnNlY3Rpb25EYXRhLmZpZWxkX2xhYmVsIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1JlcGVhdGVkRmllbGQ6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVxdWVzdF9hcGlfa2V5KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMuc2VjdGlvbkRhdGEucmVzcG9uc2VfYXBpX2tleSkpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5kYXRvcnk6IHRoaXMuaXNNYW5kYXRvcnksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRhYmxlOiB0aGlzLnNlY3Rpb25EYXRhLmlzX2VkaXRhYmxlID09PSAxID8gdHJ1ZSA6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0aGlzLnNlY3Rpb25EYXRhLmlzX2Rpc3BsYXkgPT09IDEgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnTGlzdC1TaW5nbGUtU2VsZWN0JyA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAodGhpcy5zdG9yZURhdGFbMF0gPyB0aGlzLnN0b3JlRGF0YVswXSA6ICcnKSA6IFsuLi5uZXcgU2V0KHRoaXMuc3RvcmVEYXRhKV0pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBhcHBEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGUgPT09ICdPTl9MT0FEJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5zdG9yZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSA9IGRhdGEgPyBBcnJheS5pc0FycmF5KGRhdGEpID8gZGF0YSA6IFtkYXRhXSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hcHBEYXRhLCAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLnN0b3JlRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydTZXRQcmltYXJ5VmFsdWUnXSA9PT0gJ0FsbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjaGVja2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RvcmVEYXRhLmxlbmd0aCA9PT0gdGhpcy5kaXNwbGF5VmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoYXBwRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5hcHBEYXRhLCAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogW11cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKGFwcERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5hZGRBcHBEYXRhKGFwcERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSBwcmltYXJ5IGtleSBmcm9tIHRoZSBhZGRpdGlvbmFsIHBhcmFtZXRlciBQcmltYXJ5S2V5TmFtZVxyXG4gICAgICogQHBhcmFtIGtleSB0aGUgdmFsdWUgb2YgYWRkaXRpb25hbCBwYXJhbWV0ZXIgUHJpbWFyeUtleU5hbWVcclxuICAgICAqL1xyXG4gICAgZ2V0UHJpbWFyeUtleShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBrZXkuc3BsaXQoJ3wnKTtcclxuICAgICAgICBpZiAoZGF0YS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkYXRhWzBdLnRyaW0oKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIG1haW4gYXBpIGtleSBmcm9tIHRoZSBnaXZlbiBhcGkga2V5XHJcbiAgICAgKiBAcGFyYW0ga2V5IHRoZSBrZXkgdGhhdCBpcyBwcm92aWRlZCBhcyBhbiBhZGRpdGlvbmFsIHBhcmFtZXRlclxyXG4gICAgICovXHJcbiAgICBnZXRWYWx1ZUZyb21LZXkoa2V5KSB7XHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGtleS5zcGxpdCgnfCcpO1xyXG4gICAgICAgIGlmIChkYXRhLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbMV0uc3BsaXQoJ1sqXS4nKS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YVsxXS5zcGxpdCgnWypdLicpWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBrZXk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBkaXNwbGF5cyBjaGlwcyBpZiB0aGUgYWRkaXRpb25hbCBwYXJhbWV0ZXIgaXMgc2V0IHRvIGNoZWNrYm94IGNoaXBzXHJcbiAgICAgKi9cclxuICAgIGNoZWNrYm94Q2hpcHMgPSAoKSA9PiB7XHJcbiAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgdGhpcy5zZWN0aW9uRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgaWYgKHBhcmFtZXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ0NoZWNrYm94IENoaXBzJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGlwc0FwaUtleVRvRGlzcGxheSA9IHBhcmFtZXRlci52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmVtb3ZlcyB0aGUgY2hpcHMgZnJvbSB0aGUgdG9wIG9mIHRoZSBsaXN0IHdoZW4gc29tZSBvZiB0aGUgaXRlbXMgYXJlIHVuY2hlY2tlZFxyXG4gICAgICovXHJcbiAgICBkZWxldGVDaGlwcyA9IChjaGlwRGF0YSkgPT4ge1xyXG4gICAgICAgIC8vIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2hlY2tfJyArIGNoaXBEYXRhLmtleVBvcykgYXMgSFRNTElucHV0RWxlbWVudCkuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2hpcHNBcnJheS5zcGxpY2UodGhpcy5jaGlwc0FycmF5LmluZGV4T2YoY2hpcERhdGEpLCAxKTtcclxuICAgICAgICBpZiAodGhpcy5jaGlwc0FycmF5Lmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoaXBzRGlzcGxheSA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIHJvdyBkYXRhIG9uIHRoZSBiYXNpcyBvZiB0aGUgdHlwZSBvZiB0aGUgbGlzdCBhbmQgdGhlIGVkaXRhYmxlIGFuZCB2aXNpYmxlIGNvbmRpdGlvbnNcclxuICAgICAqIEBwYXJhbSBmaWVsZCB0aGUgY2VlIGZpZWxkIG9iamVjdFxyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGFwaSByZXNwb25zZSBkYXRhIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZW5lcmF0ZVJvd0RhdGEoZmllbGQsIGRhdGEsIGxpc3RfcG9zLCBleHBhbmRhYmxlID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgYXBpRGF0YSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoZmllbGQsIGRhdGEpO1xyXG4gICAgICAgIGV4cGFuZGFibGUgJiYgYXBpRGF0YSAmJiAoZGF0YVsnaGFzRXhwYW5kYWJsZURhdGEnXSA9IHRydWUpO1xyXG4gICAgICAgIGxldCBsYWJlbFR5cGUgPSAnJztcclxuICAgICAgICBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ2xhYmVsJykge1xyXG4gICAgICAgICAgICBsYWJlbFR5cGUgPSAodGhpcy5pc1NpbmdsZUFQSUtleSA/IGZpZWxkLmFwaV9rZXkgOiBmaWVsZC5yZXNwb25zZV9hcGlfa2V5KSA/ICcnIDogJ1NUQVRJQyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnTGluaycpIHtcclxuICAgICAgICAgICAgYXBpRGF0YSA9IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBvYmo7XHJcbiAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkICYmIChmaWVsZC5pc19kaXNwbGF5ID09PSAyIHx8IGZpZWxkLmlzX2VkaXRhYmxlID09PSAyKSkge1xyXG4gICAgICAgICAgICBsZXQgaXNFZGl0YWJsZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICBsZXQgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pc19lZGl0YWJsZSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaXNFZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICBpc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnN0IHVpQXBpVmFsdWUgPSB0aGlzLnJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUoZGF0YSk7XHJcbiAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogZmllbGQudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgaHRtbF9pZDogZmllbGQudW5pcXVlX2lkICsgJy0nICsgbGlzdF9wb3MsXHJcbiAgICAgICAgICAgICAgICBmcm9tRmllbGQ6ICdUcmVlJyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGZpZWxkLmlzX2Rpc3BsYXkgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uZGl0aW9uYWxWaXNpYmxlKHVpQXBpVmFsdWUsIGlzVmlzaWJsZSwgZmllbGQpIDogaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgZWRpdGFibGU6IGZpZWxkLmlzX2VkaXRhYmxlID09PSAyID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldENvbmRpdGlvbmFsRWRpdGFibGUodWlBcGlWYWx1ZSwgaXNFZGl0YWJsZSwgZmllbGQpIDogaXNFZGl0YWJsZSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAoZmllbGQgJiYgZmllbGQuZmllbGRfdHlwZSAmJiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ2xhYmVsJyAmJiBmaWVsZC5maWVsZF9sYWJlbCAmJiBmaWVsZC5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChmaWVsZC5maWVsZF9sYWJlbF9jb25maWcgJiYgZmllbGQuZmllbGRfbGFiZWxfY29uZmlnLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSkpID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKGZpZWxkLCBkYXRhKS5maWVsZF9sYWJlbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUeXBlID09PSAnU1RBVElDJyA/IGZpZWxkLmZpZWxkX2xhYmVsIDogYXBpRGF0YVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmogPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKGZpZWxkICYmIGZpZWxkLmZpZWxkX3R5cGUgJiYgKChmaWVsZC5maWVsZF90eXBlID09PSAnbGFiZWwnICYmIGZpZWxkLmZpZWxkX2xhYmVsICYmIGZpZWxkLmZpZWxkX2xhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB8fFxyXG4gICAgICAgICAgICAgICAgICAgIChmaWVsZC5maWVsZF9sYWJlbF9jb25maWcgJiYgZmllbGQuZmllbGRfbGFiZWxfY29uZmlnLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSkpID9cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKGZpZWxkLCBkYXRhKS5maWVsZF9sYWJlbCA6XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWxUeXBlID09PSAnU1RBVElDJyA/IGZpZWxkLmZpZWxkX2xhYmVsIDogYXBpRGF0YSxcclxuICAgICAgICAgICAgICAgIGh0bWxfaWQ6IGZpZWxkLnVuaXF1ZV9pZCArICctJyArIGxpc3RfcG9zXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnNlbGVjdGVkT2JqLmNoZWNrYm94ICYmIHRoaXMuc2VjdGlvbkRhdGEuZmllbGRzW3RoaXMuc2VsZWN0ZWRPYmouY2hlY2tib3hdLnVuaXF1ZV9pZCA9PT0gZmllbGQudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdF9jaGFuZ2UoZGF0YSwgb2JqLnZhbHVlLCBsaXN0X3BvcylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIHZpc2libGUgY29uZGl0aW9uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBhcGkgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gcHJlc2VudFZhbHVlIHByZXNlbnQgdmFsdWUgb2YgdGhlIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgdGhlIGZpZWxkIHByb3BlcnR5IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRDb25kaXRpb25hbFZpc2libGUoZGF0YSwgcHJlc2VudFZhbHVlLCBmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHlDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkoZmllbGQsIGZpZWxkLnVuaXF1ZV9pZCwgJycsIGRhdGEpO1xyXG4gICAgICAgIGlmICh2aXNpYmlsaXR5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aXNpYmlsaXR5Q29uZGl0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJlc2VudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSBlZGl0YWJsZSBjb25kaXRpb25cclxuICAgICAqIEBwYXJhbSBkYXRhIGFwaSByZXNwb25zZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBwcmVzZW50VmFsdWUgcHJlc2VudCB2YWx1ZSBvZiB0aGUgZmllbGRcclxuICAgICAqIEBwYXJhbSBmaWVsZCB0aGUgZmllbGQgcHJvcGVydHkgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldENvbmRpdGlvbmFsRWRpdGFibGUoZGF0YSwgcHJlc2VudFZhbHVlLCBmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlQ29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tFZGl0YWJsZShmaWVsZCwgZmllbGQudW5pcXVlX2lkLCAnJywgZGF0YSk7XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlZGl0YWJsZUNvbmRpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByZXNlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBEZWxldGUgdGhpcyBmdW5jdGlvbiBvbmNlIHRoZSBjb25kaXRpb25hbCBzdGF0ZW1lbnRzIGRlcGVuZCBvbiB0aGUgYXBpIGtleSB0aGVuIG9ubHkgcmV0dXJuIHRoZSBzaW5nbGUgYXBpIHJlc3BvbnNlIG9ialxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIHRoZSBtYXBwaW5nIG9mIHVuaXF1ZSBpZCB0byB0aGUgYXBpIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gYXBpUmVzcG9uc2UgdGhlIHJlc3BvbnNlIG9iamVjdCBpLmUuIHRoZSBzaW5nbGUgaW5kZXggb2YgdGhlIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUoYXBpUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmZpZWxkSWRNYXBBcGlLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gdGhpcy5maWVsZElkTWFwQXBpS2V5W2tleV07XHJcbiAgICAgICAgICAgIG9ialt1bmlxdWVJZF0gPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGtleSwgYXBpUmVzcG9uc2UpID8gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShrZXksIGFwaVJlc3BvbnNlKSA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbWFwIGJldHdlZW4gZmllbGRJZCBhbmQgYXBpIGtleVxyXG4gICAgICovXHJcbiAgICByZXR1cm5GaWVsZElkTWFwQXBpS2V5KCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5zZWN0aW9uRGF0YS5maWVsZHMpIHtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJyAmJiBmaWVsZC5jaGlsZF9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY2hpbGRfZmllbGQgb2YgZmllbGQuY2hpbGRfZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXR1cm5GaWVsZElkTWFwQXBpS2V5VmFsdWUob2JqLCBjaGlsZF9maWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJldHVybkZpZWxkSWRNYXBBcGlLZXlWYWx1ZShvYmosIGZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5oaWRlblJvd3MpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZCBvZiB0aGlzLmV4cGFuZGFibGVEYXRhLmJsb2NrX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJyAmJiBmaWVsZC5jaGlsZF9maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNoaWxkX2ZpZWxkIG9mIGZpZWxkLmNoaWxkX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJldHVybkZpZWxkSWRNYXBBcGlLZXlWYWx1ZShvYmosIGNoaWxkX2ZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleVZhbHVlKG9iaiwgZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmllbGRJZE1hcEFwaUtleSA9IG9iajtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbm5lciBmdW5jdGlvbiBvZiByZXR1cm5GaWVsZElkTWFwQXBpS2V5XHJcbiAgICBwcml2YXRlIHJldHVybkZpZWxkSWRNYXBBcGlLZXlWYWx1ZShvYmosIGZpZWxkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBUElLZXkgJiYgZmllbGQuYXBpX2tleSkge1xyXG4gICAgICAgICAgICBvYmpbZmllbGQuYXBpX2tleV0gPSBmaWVsZC51bmlxdWVfaWQ7IC8vIFRPRE86IFN1cHBvcnQgbXVsdGlwbGUgYXBpIGtleXNcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZmllbGQucmVzcG9uc2VfYXBpX2tleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkuaW5jbHVkZXMoJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gZmllbGQudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2ZpZWxkLnJlc3BvbnNlX2FwaV9rZXldID0gZmllbGQudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdHJpZ2dlciBldmVudCBpZiB0aGVyZSBoYXMgYmVlbiBhbiBldmVudCB0cmlnZ2VyZWQgb24gdGhlIGxpc3RcclxuICAgICAqIEBwYXJhbSBuYW1lIHRoZSBuYW1lIG9mIHRoZSBldmVudFxyXG4gICAgICovXHJcbiAgICBvbkNvbXBvbmVudEV2ZW50KG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vIG5vdCBhIGxpc3QgdGhhdCBpcyBkZWNsYXJlZCBhcyBhIHNlY3Rpb25cclxuICAgICAgICBpZiAodGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VjdGlvbkRhdGEuZXZlbnRfbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5zZWN0aW9uRGF0YS5ldmVudF9saXN0KSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCB0aGlzLnNlY3Rpb25EYXRhLmV2ZW50X2xpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBnZXR0ZXIgc2V0dGVyIGdvZXMgaGVyZVxyXG4gICAgZ2V0IGlzU2luZ2xlQVBJS2V5KCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRvIHRyaWdnZXIgYW4gZXZlbnQgZm9yIGNsaWNraW5nIG9uIHRoZSBsaXN0IGNlbGxcclxuICAgICAqIEBwYXJhbSBkYXRhIHNpbmdsZSBjZWxsIGRhdGFcclxuICAgICAqL1xyXG4gICAgbGlzdENlbGxDbGljayhkYXRhOiBhbnksIHBvczogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zZWxlY3RlZFJvd0luZGV4ID0gcG9zO1xyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5nZXRMaXN0Q2VsbERhdGEoZGF0YS5maWVsZHMpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5wcmltYXJ5S2V5VmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0UHJpbWFyeUtleSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLnByaW1hcnlLZXlWYWwsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YVt0aGlzLnByaW1hcnlLZXlWYWxdXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5saXN0Q2VsbEV2ZW50Q29uZmlnKSkpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdCAmJiBldmVudC5ldmVudF9uYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdvbmNsaWNrJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudExpc3RIYW5kbGVyLnN3aXRjaEV2ZW50RGlzcGxheVR5cGUoZXZlbnQsIHRoaXMubGlzdENlbGxFdmVudENvbmZpZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGdldFJhbmdlTGFiZWwoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gU3RyaW5nKHRoaXMucGFnaW5hdGlvblNob3dpbmdSZXN1bHRIaW50KS5yZXBsYWNlKCcldmFsdWUlJywgdGhpcy5wYWdpbmF0aW9uLmN1cnJlbnRQYWdlICsgXCIgLyBcIiArIHRoaXMucGFnaW5hdGlvbi5wYWdlQ291bnQpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEV4cGFuZGVkU3RhdHVzKGVsZW1lbnRJZCkge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZWxlbWVudElkOiBcIixlbGVtZW50SWQpO1xyXG4gICAgICAgIHZhciBlbGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG4gICAgICAgIGlmIChlbGUgJiYgIWVsZS5jbGFzc0xpc3QuY29udGFpbnMoXCJkLW5vbmVcIikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZShlbGVtZW50SWQpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snaXNUcmVlRXhwYW5kYWJsZSddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2lzVHJlZUV4cGFuZGFibGUnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVsZW1lbnRJZDogXCIsZWxlbWVudElkKVxyXG4gICAgICAgICAgICB2YXIgZWxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZWxlbWVudElkKTtcclxuICAgICAgICAgICAgaWYgKCFlbGUuY2xhc3NMaXN0LmNvbnRhaW5zKFwiZC1ub25lXCIpKSB7XHJcbiAgICAgICAgICAgICAgICBlbGUuY2xhc3NMaXN0LmFkZChcImQtbm9uZVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVsZS5jbGFzc0xpc3QucmVtb3ZlKFwiZC1ub25lXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdW5zdWJzY3JpYmUgYWxsIHRoZSBzdWJzY3JpcHRpb25zIG9uIG5nRGVzdHJveVxyXG4gICAgICovXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAodGhpcy52YXJpYWJsZU9ialtcclxuICAgICAgICAvLyAgICAgJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA/IHRoaXMuc2VjdGlvbkRhdGEudW5pcXVlX2lkIDogdGhpcy5zZWN0aW9uRGF0YS5zZWN0aW9uX2lkXSkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgIC8vICAgICAgICAgJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWQgPyB0aGlzLnNlY3Rpb25EYXRhLnVuaXF1ZV9pZCA6IHRoaXMuc2VjdGlvbkRhdGEuc2VjdGlvbl9pZF0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gaWYgKHRoaXMudmFyaWFibGVPYmpbJ3Nob3dNYW5kYXRvcnlFcnJvck1zZ18nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudmFyaWFibGVPYmpbJ3Nob3dNYW5kYXRvcnlFcnJvck1zZ18nICsgdGhpcy5zZWN0aW9uRGF0YS51bmlxdWVfaWRdLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmRpc3BsYXlWYWx1ZXNMYXp5ID0gW107XHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG5cdDxkaXYgKm5nSWY9XCJzaG93RmlsdGVyXCIgY2xhc3M9XCJmaWx0ZXItY29udGFpbmVyXCI+XHJcblx0XHQ8bWF0LWZvcm0tZmllbGQgZmxvYXRMYWJlbD1cIm5ldmVyXCI+XHJcblx0XHRcdDxpbnB1dCBbKG5nTW9kZWwpXT1cImZpbHRlclR4dFwiIGZpbHRlclR4dCBtYXRJbnB1dCAoa2V5dXApPVwiYXBwbHlGaWx0ZXIoKVwiIHBsYWNlaG9sZGVyPVwie3tmaWx0ZXJQbGFjZWhvbGRlclRleHR9fVwiPlxyXG5cdFx0PC9tYXQtZm9ybS1maWVsZD5cclxuXHQ8L2Rpdj5cclxuXHJcblx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiICpuZ0lmPVwic2hvd0Vycm9yT25OZXh0XCI+XHJcblx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogbWVzc2FnZS5jb2xvcn1cIj5cclxuXHRcdFx0XHR7e21lc3NhZ2UubWVzc2FnZV90ZXh0fX1cclxuXHRcdFx0PC9wPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9uZy1jb250YWluZXI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cIiFub0RhdGFGb3VuZFwiPlxyXG5cdFx0PGRpdiAqbmdJZj1cImNoaXBzRGlzcGxheVwiIGNsYXNzPVwiY2hpcGxheW91dFwiPlxyXG5cdFx0XHQ8ZGl2ICpuZ0Zvcj1cImxldCBjaGlwQXJyYXkgb2YgY2hpcHNBcnJheVwiIGNsYXNzPVwiY2hpcHNwYWNlXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJjaGlwY3NzXCI+XHJcblx0XHRcdFx0XHR7eyBjaGlwQXJyYXkua2V5TmFtZSB9fSA8c3BhbiBjbGFzcz1cImNoaXBkZWxldGVjc3NcIiAoY2xpY2spPVwiZGVsZXRlQ2hpcHMoY2hpcEFycmF5KVwiPng8L3NwYW4+XHJcblx0XHRcdFx0PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdFx0PGRpdiBjbGFzcz1cImxpc3QtbG9hZGVyIHt7bGlzdExvYWRpbmcgPyAnbGlzdC1wZW5kaW5nJzonbGlzdC1sb2FkZWQnfX1cIj48L2Rpdj5cclxuXHRcdDwhLS0gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIFRyZWUgVmlldyBMaXN0ICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMgLS0+XHJcblx0XHQ8bmctdGVtcGxhdGUgI2RlZmF1bHRMaXN0VG9wPlxyXG5cdFx0XHQ8dWw+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJlY3Vyc2l2ZUxpc3RUbXBsOyBjb250ZXh0OnsgbGlzdDogZGlzcGxheVZhbHVlc0xhenksIHBhcmVudF9pbmRleDogJycgfVwiPjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdDxuZy10ZW1wbGF0ZSAjb3JkZXJlZExpc3RUb3A+XHJcblx0XHRcdDxvbD5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ1RlbXBsYXRlT3V0bGV0PVwicmVjdXJzaXZlTGlzdFRtcGw7IGNvbnRleHQ6eyBsaXN0OiBkaXNwbGF5VmFsdWVzTGF6eSwgcGFyZW50X2luZGV4OiAnJyB9XCI+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvb2w+XHJcblx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cImFkZGl0aW9uYWxQYXJhbWV0ZXJzWydUcmVlVmlld1R5cGUnXSAmJiBhZGRpdGlvbmFsUGFyYW1ldGVyc1snVHJlZVZpZXdUeXBlJ10gPT0gJ29sJyA/IG9yZGVyZWRMaXN0VG9wOiBkZWZhdWx0TGlzdFRvcFwiPjwvbmctY29udGFpbmVyPlxyXG5cdFx0PG5nLXRlbXBsYXRlICNyZWN1cnNpdmVMaXN0VG1wbCBsZXQtbGlzdD1cImxpc3RcIiBsZXQtcGFyZW50SW5kZXg9XCJwYXJlbnRfaW5kZXhcIj5cclxuXHRcdFx0PGxpICpuZ0Zvcj1cImxldCBkYXRhIG9mIGxpc3Q7IGluZGV4IGFzIHBvc1wiPlxyXG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJleHBhbmQtY2hpbGRcIiAqbmdJZj1cImRhdGFbYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1RyZWVWaWV3S2V5J11dLmxlbmd0aCA+IDAgJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2lzVHJlZUV4cGFuZGFibGUnXSAmJiBhZGRpdGlvbmFsUGFyYW1ldGVyc1snaXNUcmVlRXhwYW5kYWJsZSddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnXCIgKGNsaWNrKT1cInRvZ2dsZSgnbGlzdF9pdGVtJytwYXJlbnRJbmRleCsnXycrcG9zKVwiIFtuZ0NsYXNzXT1cInsnYWN0aXZlJzogZ2V0RXhwYW5kZWRTdGF0dXMoJ2xpc3RfaXRlbScrcGFyZW50SW5kZXgrJ18nK3Bvcyl9XCIgYXJpYS1oaWRkZW49XCJleHBhbmRcIj48L2Rpdj5cclxuXHRcdFx0XHQ8ZGl2IFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG5cdFx0XHRcdFx0Y2xhc3M9XCJsaXN0LWl0ZW0gbGlzdC1pdGVtLXBvcy17e3Bvc319IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tsaXN0TG9hZGluZyA/ICdsaXN0LXBlbmRpbmcnOidsaXN0LWxvYWRlZCd9fSB7e3NlbGVjdGVkUm93SW5kZXggPT09IHBvcyA/ICdsaXN0LWl0ZW0tc2VsZWN0ZWQnIDogJyd9fSBkYXRhLWxpc3Qgc2hvdy1pbi1yb3dcIlxyXG5cdFx0XHRcdFx0KGNsaWNrKT1cImxpc3RDZWxsQ2xpY2soZGF0YSwgcG9zKVwiIChrZXl1cC5lbnRlcik9XCJsaXN0Q2VsbENsaWNrKGRhdGEsIHBvcylcIj5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGRhdGEuZmllbGRzOyBpbmRleCBhcyBwb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGQuZmllbGRfdHlwZSA9PT0gJ0dlbmVyaWMgQmxvY2snOyBlbHNlIGVsc2VGaWVsZFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXZcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxkaXYgY2xhc3M9XCJnZW5lcmljLWJsb2NrLWNvbnRhaW5lciB7e2lzX2Jvb3RzdHJhcD8ncm93JzonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGNoaWxkX2ZpZWxkIG9mIGZpZWxkLmNoaWxkX2ZpZWxkczsgaW5kZXggYXMgY2hpbGRfcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmNoaWxkX2ZpZWxkLGRhdGE6ZGF0YSxwb3M6cG9zLHBvc2l0aW9uOidjaGlsZF8nK2NoaWxkX3Bvc2l0aW9ufVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgI2Vsc2VGaWVsZD5cclxuXHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgKm5nVGVtcGxhdGVPdXRsZXQ9XCJjZWxsRGF0YTsgY29udGV4dDp7ZmllbGQ6ZmllbGQsZGF0YTpkYXRhLHBvczpwb3MscG9zaXRpb246cG9zaXRpb259XCI+XHJcblx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJ0eXBlID09PSAnTGlzdC1FeHBhbmRhYmxlJyAmJiBoaWRlblJvd3NcIj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiY2VlLWxpc3QtZXhwYW5kYWJsZS1vcHRpb24ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fSB7e2RhdGFbJ2hhc0V4cGFuZGFibGVEYXRhJ10/J2hhcy1leHBhbmRhYmxlLWRhdGEnOiduby1leHBhbmRhYmxlLWRhdGEnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8YnV0dG9uIHJvbGU9XCJidXR0b25cIiAoY2xpY2spPVwiZXhwYW5kZWRFbGVtZW50ID0gZXhwYW5kZWRFbGVtZW50ID09PSBkYXRhID8gbnVsbCA6IGRhdGFcIj57e2V4cGFuZGVkRWxlbWVudFxyXG5cdFx0XHRcdFx0XHRcdFx0PT09IGRhdGEgPyBjb2xsYXBzZVRpdGxlIDogZXhwYW5kVGl0bGV9fTwvYnV0dG9uPlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdFx0PGRpdlxyXG5cdFx0XHRcdFx0XHRcdGNsYXNzPVwiY2VlLWxpc3QtZGV0YWlsIHt7aXNfYm9vdHN0cmFwPydjb2wtMTInOicnfX0ge3tleHBhbmRlZEVsZW1lbnQgPT09IGRhdGE/J2NlZS1leHBhbmRlZC1yb3cnOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwie3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgZGF0YS5leHBhbmRhYmxlX2ZpZWxkczsgaW5kZXggYXMgcG9zaXRpb25cIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJzsgZWxzZSBlbHNlRmllbGRcIj5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZ2VuZXJpYy1ibG9jay1jb250YWluZXIge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBjaGlsZF9maWVsZCBvZiBmaWVsZC5jaGlsZF9maWVsZHM7IGluZGV4IGFzIGNoaWxkX3Bvc2l0aW9uXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0PG5nLXRlbXBsYXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmaWVsZDpjaGlsZF9maWVsZCwgZGF0YTpkYXRhLCBwb3M6cG9zLCBwb3NpdGlvbjonY2hpbGRfJytjaGlsZF9wb3NpdGlvbiwgZXhwYW5kYWJsZTp0cnVlfVwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGUgI2Vsc2VGaWVsZD5cclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQ8bmctdGVtcGxhdGVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmZpZWxkLCBkYXRhOmRhdGEsIHBvczpwb3MsIHBvc2l0aW9uOnBvc2l0aW9uLCBleHBhbmRhYmxlOnRydWV9XCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHRcdFx0PC9uZy10ZW1wbGF0ZT5cclxuXHRcdFx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSAjZGVmYXVsdExpc3Q+XHJcbiAgICBcdFx0XHRcdDx1bCAqbmdJZj1cImRhdGFbYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1RyZWVWaWV3S2V5J11dLmxlbmd0aCA+IDBcIiBbY2xhc3MuZC1ub25lXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJzWydpc1RyZWVFeHBhbmRhYmxlJ10gJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2lzVHJlZUV4cGFuZGFibGUnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJ1wiIGlkPVwibGlzdF9pdGVte3twYXJlbnRJbmRleH19X3t7cG9zfX1cIj5cclxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJlY3Vyc2l2ZUxpc3RUbXBsOyBjb250ZXh0OnsgbGlzdDogZGF0YVthZGRpdGlvbmFsUGFyYW1ldGVyc1snVHJlZVZpZXdLZXknXV0sIHBhcmVudF9pbmRleDogJ18nK3BvcyB9XCI+XHJcblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PC91bD5cclxuXHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdDxuZy10ZW1wbGF0ZSAjb3JkZXJlZExpc3Q+XHJcbiAgICBcdFx0XHRcdDxvbCAqbmdJZj1cImRhdGFbYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1RyZWVWaWV3S2V5J11dLmxlbmd0aCA+IDBcIiBbY2xhc3MuZC1ub25lXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJzWydpc1RyZWVFeHBhbmRhYmxlJ10gJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2lzVHJlZUV4cGFuZGFibGUnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJ1wiIGlkPVwibGlzdF9pdGVte3twYXJlbnRJbmRleH19X3t7cG9zfX1cIj5cclxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdUZW1wbGF0ZU91dGxldD1cInJlY3Vyc2l2ZUxpc3RUbXBsOyBjb250ZXh0OnsgbGlzdDogZGF0YVthZGRpdGlvbmFsUGFyYW1ldGVyc1snVHJlZVZpZXdLZXknXV0sIHBhcmVudF9pbmRleDogJ18nK3BvcyB9XCI+XHJcblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PC9vbD5cclxuXHRcdFx0XHQ8L25nLXRlbXBsYXRlPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nVGVtcGxhdGVPdXRsZXQ9XCJhZGRpdGlvbmFsUGFyYW1ldGVyc1snVHJlZVZpZXdUeXBlJ10gJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1RyZWVWaWV3VHlwZSddID09ICdvbCcgPyBvcmRlcmVkTGlzdDogZGVmYXVsdExpc3RcIj48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9saT5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHQ8IS0tICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyBUcmVlIFZpZXcgTGlzdCAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIC0tPlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8bmctY29udGFpbmVyICpuZ0lmPVwibm9EYXRhRm91bmQgJiYgIXNob3dMb2FkaW5nICYmICFzaG93U2tlbGV0b25Mb2FkZXJcIj5cclxuXHRcdDxoNSBjbGFzcz1cIm5vLWRhdGEtaW5mbyB0ZXh0LWNlbnRlciBteS01XCI+e3tub0RhdGFGb3VuZExhYmVsfX08L2g1PlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8bmctY29udGFpbmVyXHJcblx0XHQqbmdJZj1cInNob3dTa2VsZXRvbkxvYWRlciAmJiBhZGRpdGlvbmFsUGFyYW1ldGVyc1snU2hvd1NrZWxldG9uTG9hZGVyJ10gJiYgYWRkaXRpb25hbFBhcmFtZXRlcnNbJ1Nob3dTa2VsZXRvbkxvYWRlciddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnXCI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBkYXRhIG9mIGxpc3RFbGVtZW50czsgaW5kZXggYXMgcG9zXCIgY2xhc3M9XCJsaXN0LWNvbmF0aWFuZXJcIj5cclxuXHRcdFx0PGRpdiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCJcclxuXHRcdFx0XHRjbGFzcz1cImxpc3QtaXRlbSBsaXN0LWl0ZW0tcG9zLXt7cG9zfX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fSB7e2xpc3RMb2FkaW5nID8gJ2xpc3QtcGVuZGluZyc6J2xpc3QtbG9hZGVkJ319IHt7c2VsZWN0ZWRSb3dJbmRleCA9PT0gcG9zID8gJ2xpc3QtaXRlbS1zZWxlY3RlZCcgOiAnJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2Ygc2VjdGlvbkRhdGEuZmllbGRzOyBpbmRleCBhcyBwb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0PG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGFMb2FkaW5nOyBjb250ZXh0OntmaWVsZDpmaWVsZCxkYXRhOmRhdGEscG9zOnBvcyxwb3NpdGlvbjpwb3NpdGlvbn1cIj5cclxuXHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCIhbm9EYXRhRm91bmRcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJwYWdpbmF0aW9uLWNvbnRhaW5lclwiICpuZ0lmPVwic2hvd1BhZ2luYXRpb24gJiYgYXV0b1BhZ2luYXRpb25cIj5cclxuXHRcdFx0PHAgY2xhc3M9XCJwYWdpbmF0aW9uLXRleHQtY29udGFpbmVyXCI+e3tnZXRSYW5nZUxhYmVsfX08L3A+XHJcblx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwicGFnaW5hdGlvbkZpcnN0TGFiZWxcIiBbZGlzYWJsZWRdPVwicGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gMVwiXHJcblx0XHRcdFx0KGNsaWNrKT1cInNldEN1cnJlbnQoMSlcIiBjbGFzcz1cInBhZ2luYXRpb24tYnRuLWZpcnN0XCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBGaXJzdFwiPnt7cGFnaW5hdGlvbkZpcnN0TGFiZWx9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8YnV0dG9uIHJvbGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwicGFnaW5hdGlvbi5jdXJyZW50UGFnZSA9PT0gMVwiIChjbGljayk9XCJwYWdpbmF0aW9uUHJldmlvdXMoKVwiXHJcblx0XHRcdFx0Y2xhc3M9XCJwYWdpbmF0aW9uLWJ0bi1wcmV2aW91c1wiIGFyaWEtbGFiZWw9XCJTZWxlY3QgUHJldmlvdXNcIj57e3BhZ2luYXRpb25QcmV2aW91c0xhYmVsfX08L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiAqbmdGb3I9XCJsZXQgcGFnZU51bWJlciBvZiBwYWdlc1wiIHJvbGU9XCJidXR0b25cIiBbZGlzYWJsZWRdPVwicGFnZU51bWJlciA9PT0gJy4uLidcIlxyXG5cdFx0XHRcdChjbGljayk9XCJzZXRDdXJyZW50KHBhZ2VOdW1iZXIpXCJcclxuXHRcdFx0XHRjbGFzcz1cInBhZ2luYXRpb24tYnRuLXBhZ2Uge3twYWdlTnVtYmVyID09PSBwYWdpbmF0aW9uLmN1cnJlbnRQYWdlPydhY3RpdmUnOicnfX1cIlxyXG5cdFx0XHRcdGF0dHIuYXJpYS1sYWJlbD1cIlNlbGVjdCBwYWdlIHt7cGFnZU51bWJlcn19XCI+e3twYWdlTnVtYmVyfX08L2J1dHRvbj5cclxuXHRcdFx0PGJ1dHRvbiByb2xlPVwiYnV0dG9uXCIgW2Rpc2FibGVkXT1cInBhZ2luYXRpb24uY3VycmVudFBhZ2UgPT09IHBhZ2luYXRpb24ucGFnZUNvdW50XCIgKGNsaWNrKT1cInBhZ2luYXRpb25OZXh0KClcIlxyXG5cdFx0XHRcdGNsYXNzPVwicGFnaW5hdGlvbi1idG4tbmV4dFwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgTmV4dFwiPnt7cGFnaW5hdGlvbk5leHRMYWJlbH19PC9idXR0b24+XHJcblx0XHRcdDxidXR0b24gcm9sZT1cImJ1dHRvblwiICpuZ0lmPVwicGFnaW5hdGlvbkxhc3RMYWJlbFwiIFtkaXNhYmxlZF09XCJwYWdpbmF0aW9uLmN1cnJlbnRQYWdlID09PSBwYWdpbmF0aW9uLnBhZ2VDb3VudFwiXHJcblx0XHRcdFx0KGNsaWNrKT1cInNldEN1cnJlbnQocGFnaW5hdGlvbi5wYWdlQ291bnQpXCIgY2xhc3M9XCJwYWdpbmF0aW9uLWJ0bi1sYXN0XCJcclxuXHRcdFx0XHRhcmlhLWxhYmVsPVwiU2VsZWN0IExhc3RcIj57e3BhZ2luYXRpb25MYXN0TGFiZWx9fTwvYnV0dG9uPlxyXG5cdFx0XHQ8c2VsZWN0IChjaGFuZ2UpPVwib25QYWdpbmF0aW9uQ291bnRDaGFuZ2UoKTsgc2V0UGFnaW5hdGlvbkNvdW50KClcIlxyXG5cdFx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiJ1NlbGVjdCBubyBvZiBpdGVtcyB0byBiZSBkaXNwbGF5ZWQnXCIgWyhuZ01vZGVsKV09XCJwYWdpbmF0aW9uLmN1cnJlbnRJdGVtQ291bnRcIlxyXG5cdFx0XHRcdGNsYXNzPVwicGFnaW5hdGlvbi1jb3VudC1zZWxlY3RvclwiPlxyXG5cdFx0XHRcdDxvcHRpb24gW25nVmFsdWVdPVwiZGF0YVwiIFtzZWxlY3RlZF09XCJkYXRhID09IHBhZ2luYXRpb24uY3VycmVudEl0ZW1Db3VudFwiXHJcblx0XHRcdFx0XHQqbmdGb3I9XCJsZXQgZGF0YSBvZiBwYWdpbmF0aW9uLnBhZ2VJdGVtc1wiPlxyXG5cdFx0XHRcdFx0e3tkYXRhfX08L29wdGlvbj5cclxuXHRcdFx0PC9zZWxlY3Q+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuPC9uZy1jb250YWluZXI+XHJcblxyXG48bmctdGVtcGxhdGUgI2NlbGxEYXRhIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LXBvcz1cInBvc1wiIGxldC1wb3NpdGlvbj1cInBvc2l0aW9uXCJcclxuXHRsZXQtZXhwYW5kYWJsZT1cImV4cGFuZGFibGVcIj5cclxuXHQ8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC5maWVsZF90eXBlXCI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLWxhYmVsIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIiB0YWJpbmRleD1cIjBcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtbGFiZWw+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVGV4dGZpZWxkJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBmaWVsZERhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS10ZXh0ZmllbGQgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS10ZXh0ZmllbGQ+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ01lbnUnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLW1lbnUgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1tZW51PiAtLT5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidJbWFnZSdcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgZmllbGREYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1jZWUtaW1hZ2UgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1pbWFnZT4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInUGlja2VyJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBmaWVsZERhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS1waWNrZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1waWNrZXI+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0J1dHRvbidcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYzsgXHJcblx0XHRcdFx0aW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogZmllbGRbJ3Jvd0RhdGEnXSwgZmllbGREYXRhOiBmaWVsZCwgcHJpbWFyeUtleUluZGV4OiB7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9LFxyXG5cdFx0XHRcdH1cIlxyXG5cdFx0XHRcdD48L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHRcdDwhLS0gPGFwcC1jZWUtYnV0dG9uIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtYnV0dG9uPiAtLT5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidMaW5rJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBmaWVsZERhdGE6IGZpZWxkLCBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBwcmltYXJ5S2V5VmFsLCB2YWx1ZTogZGF0YVtwcmltYXJ5S2V5VmFsXSwgdHlwZTogJ2xpc3QnLCBjZWxsRGF0YTogZGF0YX0sXHJcblx0XHRcdFx0fVwiXHJcblx0XHRcdFx0PjwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PCEtLSA8YXBwLWNlZS1saW5rIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtbGluaz4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVmlkZW8nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG5cdFx0XHRcdDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7IFxyXG5cdFx0XHRcdGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IGZpZWxkWydyb3dEYXRhJ10sIGZpZWxkRGF0YTogZmllbGQsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLXZpZGVvIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtmaWVsZERhdGFdPVwiZmllbGRcIlxyXG5cdFx0XHRcdGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG5cdFx0XHRcdFtwcmltYXJ5S2V5SW5kZXhdPVwie25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfVwiPlxyXG5cdFx0XHQ8L2FwcC1jZWUtdmlkZW8+IC0tPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1RhYmxlJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jOyBcclxuXHRcdFx0XHRpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiBmaWVsZFsncm93RGF0YSddLCBzZWN0aW9uRGF0YTogZmllbGQsIHR5cGU6IGZpZWxkLmZpZWxkX3R5cGUsIHByaW1hcnlLZXlJbmRleDoge25hbWU6IHByaW1hcnlLZXlWYWwsIHZhbHVlOiBkYXRhW3ByaW1hcnlLZXlWYWxdLCB0eXBlOiAnbGlzdCcsIGNlbGxEYXRhOiBkYXRhfSxcclxuXHRcdFx0XHR9XCJcclxuXHRcdFx0XHQ+PC9uZy1jb250YWluZXI+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8IS0tIDxhcHAtY2VlLXRhYmxlIFtzdGVwSWRdPVwic3RlcElkXCIgW3Jvd0RhdGFdPVwiZmllbGRbJ3Jvd0RhdGEnXVwiIFtzZWN0aW9uRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCJcclxuXHRcdFx0XHRbdHlwZV09XCJmaWVsZC5maWVsZF90eXBlXCI+XHJcblx0XHRcdDwvYXBwLWNlZS10YWJsZT4gLS0+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInVHJlZVZpZXcnXCI+XHJcblx0XHRcdDxhcHAtdHJlZS1yZW5kZXJlciBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb3dEYXRhXT1cImZpZWxkWydyb3dEYXRhJ11cIiBbc2VjdGlvbkRhdGFdPVwiZmllbGRcIiBbdGVtcGxhdGVJZF09XCJ0ZW1wbGF0ZUlkXCJcclxuXHRcdFx0XHRbdHlwZV09XCJmaWVsZC5maWVsZF90eXBlXCJcclxuXHRcdFx0XHRjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCJcclxuXHRcdFx0XHRbY2hpbGRMaXN0XT1cImNoaWxkTGlzdFwiPlxyXG5cdFx0XHQ8L2FwcC10cmVlLXJlbmRlcmVyPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1RvZ2dsZUJ1dHRvbidcIj5cclxuXHRcdFx0VG9vZ2xlIEJ1dHRvbiBDb250YWluZXJcclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuPC9uZy10ZW1wbGF0ZT5cclxuXHJcbjxuZy10ZW1wbGF0ZSAjY2VsbERhdGFMb2FkaW5nIGxldC1maWVsZD1cImZpZWxkXCIgbGV0LWRhdGE9XCJkYXRhXCIgbGV0LXBvcz1cInBvc1wiIGxldC1wb3NpdGlvbj1cInBvc2l0aW9uXCJcclxuXHRsZXQtZXhwYW5kYWJsZT1cImV4cGFuZGFibGVcIj5cclxuXHQ8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC5maWVsZF90eXBlXCI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInbGFiZWwnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19sYWJlbCBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUZXh0ZmllbGQnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX190ZXh0IGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidNZW51J1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fbWVudSBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInSW1hZ2UnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19pbWFnZSBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0XHQ8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInUGlja2VyJ1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fcGlja2VyIGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidCdXR0b24nXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19idXR0b24gbG9hZGluZ1wiPjwvZGl2PlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0xpbmsnXCI+XHJcblx0XHRcdDxkaXYgY2xhc3M9XCJjYXJkX19saW5rIGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUYWJsZSdcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImNhcmRfX3RhYmxlIGxvYWRpbmdcIj48L2Rpdj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidMaXN0J1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiY2FyZF9fbGlzdCBsb2FkaW5nXCI+PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHJcblx0PC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiJdfQ==