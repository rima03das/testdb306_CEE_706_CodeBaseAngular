import { Component, Input, forwardRef } from '@angular/core';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { RepeatableBlockData } from '../../models/repeatable-block-data/repetableBlockData.util';
import { take, concatMap } from 'rxjs/operators';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { AssociatedMapUtil } from '../../utils/associated-map-utils';
import { UndoRedo } from '../../utils/undo-redo.util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
// import { CeeAttachmentsComponent } from '../../field-components/cee-attachments/cee-attachments.component';
// import { CeeNumberComponent } from '../../field-components/cee-number/cee-number.component';
// import { CeeButtonComponent } from '../../field-components/cee-button/cee-button.component';
// import { CeePhoneNumberComponent } from '../../field-components/cee-phone-number/cee-phone-number.component';
// import { CeePickerComponent } from '../../field-components/cee-picker/cee-picker.component';
// import { CeeTimePickerComponent } from '../../field-components/cee-time-picker/cee-time-picker.component';
// import { CeeCheckboxComponent } from '../../field-components/cee-checkbox/cee-checkbox.component';
// import { CeeRadioComponent } from '../../field-components/cee-radio/cee-radio.component';
// import { CeeDateComponent } from '../../field-components/cee-date/cee-date.component';
import { CommonModule, NgClass, NgSwitch } from '@angular/common';
// import { CeeTextareaComponent } from '../../field-components/cee-textarea/cee-textarea.component';
// import { CeeTextfieldComponent } from '../../field-components/cee-textfield/cee-textfield.component';
// import { CeeLabelComponent } from '../../field-components/cee-label/cee-label.component';
import { ViewRendererComponent } from '../../components/view-renderer/view-renderer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { defer, of } from 'rxjs';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { AccordionRendererComponent } from '../accordion-renderer/accordion-renderer.component';
import { GenericBlockRendererComponent } from '../generic-block-renderer/generic-block-renderer.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "@angular/common/http";
import * as i3 from "../../models/app-data/app-data.service";
import * as i4 from "../../models/api-data/api-data.service";
import * as i5 from "../../services/internal-cee-emitter-service.service";
import * as i6 from "../../services/shared-events-service.service";
import * as i7 from "@angular/material/dialog";
import * as i8 from "@angular/material/snack-bar";
import * as i9 from "../../services/wfe-step-loader.service";
import * as i10 from "../../services/accordian-services";
import * as i11 from "@angular/router";
import * as i12 from "../../services/cee-api-service.service";
import * as i13 from "../../services/web-worker-service";
import * as i14 from "@angular/forms";
import * as i15 from "@angular/common";
const _c0 = (a0, a1, a2, a3) => ({ field: a0, position: a1, i: a2, activePosition: a3 });
const _c1 = a0 => ({ "disabled-remove-btn": a0 });
const _c2 = a0 => ({ "disabled-add-btn": a0 });
const _c3 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, mandatoryCondition: a4, editableCondition: a5, visibleCondition: a6, activePosition: a7 });
const _c4 = (a0, a1, a2, a3, a4, a5, a6) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true, mandatoryCondition: a4, editableCondition: a5, visibleCondition: a6 });
const _c5 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true });
const _c6 = (a0, a1, a2) => ({ name: a0, value: a1, type: "repeatable", cellData: a2 });
const _c7 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ stepId: a0, rootData: a1, rowData: a2, fieldData: a3, keepState: true, mandatoryCondition: a4, editableCondition: a5, visibleCondition: a6, primaryKeyIndex: a7 });
const _c8 = (a0, a1, a2, a3) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3 });
const _c9 = (a0, a1, a2, a3, a4) => ({ stepId: a0, rootData: a1, rowData: a2, sectionData: a3, type: a4 });
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 7);
    i0.ɵɵlistener("change", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_1_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r1); const i_r2 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.repeatableBlockChange(i_r2, $event.target.checked)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("name", "check_", i_r2, "");
    i0.ɵɵpropertyInterpolate1("id", "check_", i_r2, "");
    i0.ɵɵproperty("checked", ctx_r2.storeData.indexOf(i_r2) >= 0);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "input", 8);
    i0.ɵɵtwoWayListener("ngModelChange", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_2_Template_input_ngModelChange_0_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(4); i0.ɵɵtwoWayBindingSet(ctx_r2.radioValue, $event) || (ctx_r2.radioValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("change", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_2_Template_input_change_0_listener($event) { i0.ɵɵrestoreView(_r4); const i_r2 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.repeatableBlockChange(i_r2, $event.target.checked)); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("name", "radio_", i_r2, "");
    i0.ɵɵpropertyInterpolate1("id", "radio_", i_r2, "");
    i0.ɵɵpropertyInterpolate("value", i_r2);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.radioValue);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r4 = i0.ɵɵnextContext();
    const innerField_r6 = ctx_r4.$implicit;
    const innerPosition_r7 = ctx_r4.index;
    const position_r8 = i0.ɵɵnextContext(3).index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, innerField_r6, position_r8 + "-" + innerPosition_r7, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id]);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section");
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(2).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate2("row generic-block generic-block-", field_r12.unique_id, " ", field_r12.field_style ? field_r12.field_style.custom_class_name : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r12 == null ? null : field_r12.field_values[i_r2])("ngForTrackBy", ctx_r2.trackByIndex(i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_section_2_Template, 2, 6, "section", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    const field_r12 = ctx_r12.$implicit;
    const position_r8 = ctx_r12.index;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r8, " ", field_r12.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r12.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r12)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (field_r12 == null ? null : field_r12.field_values[i_r2] == null ? null : field_r12.field_values[i_r2].length) > 0);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 22);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.name);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "div", 23);
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.name, i0.ɵɵsanitizeHtml);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.collapseTitle, " ");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.expandTitle, " ");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r14 = i0.ɵɵnextContext();
    const innerField_r16 = ctx_r14.$implicit;
    const innerPosition_r17 = ctx_r14.index;
    const position_r8 = i0.ɵɵnextContext(4).index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, innerField_r16, position_r8 + "-" + innerPosition_r17, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const innerField_r16 = ctx.$implicit;
    const field_r12 = i0.ɵɵnextContext(4).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.subHeaderFields.includes(innerField_r16.unique_id));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r12 == null ? null : field_r12.field_values[i_r2])("ngForTrackBy", ctx_r2.trackByIndex(i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r17 = i0.ɵɵnextContext();
    const innerField_r19 = ctx_r17.$implicit;
    const innerPosition_r20 = ctx_r17.index;
    const position_r8 = i0.ɵɵnextContext(4).index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, innerField_r19, position_r8 + "-" + innerPosition_r20, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const innerField_r19 = ctx.$implicit;
    const field_r12 = i0.ɵɵnextContext(4).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.subHeaderFields.includes(innerField_r19.unique_id)) && !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.footerFields.includes(innerField_r19.unique_id)));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 27);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r12 == null ? null : field_r12.field_values[i_r2])("ngForTrackBy", ctx_r2.trackByIndex(i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r20 = i0.ɵɵnextContext();
    const innerField_r22 = ctx_r20.$implicit;
    const innerPosition_r23 = ctx_r20.index;
    const position_r8 = i0.ɵɵnextContext(4).index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, innerField_r22, position_r8 + "-" + innerPosition_r23, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_ng_container_1_Template, 2, 7, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const innerField_r22 = ctx.$implicit;
    const field_r12 = i0.ɵɵnextContext(4).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.subHeaderFields.includes(innerField_r22.unique_id)) && (ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.footerFields.includes(innerField_r22.unique_id)));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_ng_container_1_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext(3).$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("hidden", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", field_r12 == null ? null : field_r12.field_values[i_r2])("ngForTrackBy", ctx_r2.trackByIndex(i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "section", 4)(3, "div", 14);
    i0.ɵɵlistener("click", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_Template_div_click_3_listener() { i0.ɵɵrestoreView(_r14); const field_r12 = i0.ɵɵnextContext(2).$implicit; const i_r2 = i0.ɵɵnextContext(2).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.openAccordionClicked(field_r12, i_r2)); });
    i0.ɵɵtemplate(4, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_4_Template, 2, 1, "div", 15)(5, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_5_Template, 1, 1, "div", 16)(6, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_6_Template, 2, 1, "div", 17)(7, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_7_Template, 2, 1, "div", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_8_Template, 2, 3, "div", 19)(9, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_9_Template, 2, 3, "div", 20)(10, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_div_10_Template, 2, 3, "div", 21);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext(2);
    const field_r12 = ctx_r12.$implicit;
    const position_r8 = ctx_r12.index;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r8, " ", field_r12.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r12.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r12)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate4("accordion-section accordion-section-", field_r12.unique_id, "-", i_r2, " accordion-section-", field_r12.unique_id, " ", field_r12.field_style ? field_r12.field_style.custom_class_name : "", "");
    i0.ɵɵpropertyInterpolate2("id", "", field_r12.unique_id, "-", i_r2, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r2.isHTML(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.isHTML(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.name));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id].accordionInfo.showSection));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (field_r12 == null ? null : field_r12.field_values[i_r2] == null ? null : field_r12.field_values[i_r2].length) > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (field_r12 == null ? null : field_r12.field_values[i_r2] == null ? null : field_r12.field_values[i_r2].length) > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (field_r12 == null ? null : field_r12.field_values[i_r2] == null ? null : field_r12.field_values[i_r2].length) > 0);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_ng_container_1_Template, 11, 20, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r12 = i0.ɵɵnextContext().$implicit;
    const i_r2 = i0.ɵɵnextContext(2).index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.checkAccordionVisibility(field_r12, ctx_r2.repeatebleFieldsRows[i_r2] == null ? null : ctx_r2.repeatebleFieldsRows[i_r2][field_r12.unique_id], i_r2));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_1_ng_template_0_Template(rf, ctx) { }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_1_Template, 1, 0, null, 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r12 = i0.ɵɵnextContext();
    const field_r12 = ctx_r12.$implicit;
    const position_r8 = ctx_r12.index;
    const ctx_r8 = i0.ɵɵnextContext(2);
    const pos_r10 = ctx_r8.$implicit;
    const i_r2 = ctx_r8.index;
    i0.ɵɵnextContext(2);
    const cellData_r11 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r11)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c0, field_r12, position_r8, i_r2, pos_r10));
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 9);
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_2_Template, 3, 5, "ng-container", 10)(3, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_3_Template, 2, 1, "ng-container", 10)(4, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_ng_container_4_Template, 2, 7, "ng-container", 11);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const field_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", field_r12.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Generic Block");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Accordion");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const i_r2 = i0.ɵɵnextContext(3).index; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onDeleteBlock(i_r2)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c1, ctx_r2.disableRemoveBtnIfArrayEmpty()))("disabled", !ctx_r2.buttonEditable);
    i0.ɵɵattribute("aria-label", "Click on " + ctx_r2.remove_field_label);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.remove_field_label);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_button_1_Template, 2, 6, "button", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.remove_field_label !== "none");
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 4);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_1_Template, 1, 5, "input", 5)(2, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_input_2_Template, 1, 6, "input", 6)(3, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_3_Template, 5, 3, "ng-container", 2)(4, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_ng_container_4_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r2 = i0.ɵɵnextContext().index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolateV(["cee-block sectionRb-", i_r2, " ", ctx_r2.blockRenderedData.block_id, "-sidebar-item-", i_r2, "  ", ctx_r2.parentPosition ? ctx_r2.blockRenderedData.block_id + "-p-" + ctx_r2.parentPosition + "-c-" + i_r2 : ctx_r2.blockRenderedData.block_id + "-c-" + i_r2, "  template-", ctx_r2.templateId, " block-", ctx_r2.blockRenderedData.block_id, " ", ctx_r2.storeData.length > 1 ? ctx_r2.storeData.indexOf(i_r2) >= 0 ? "selected" : "" : ctx_r2.storeData[0] == i_r2 ? "selected" : "", " ", ctx_r2.is_bootstrap ? "row" : "", " ", ctx_r2.reapeatableLoading ? "reapeatable-pending" : "reapeatable-loaded", " ", ctx_r2.sectionCustomClass[i_r2] ? ctx_r2.sectionCustomClass[i_r2] : "", " "]);
    i0.ɵɵpropertyInterpolate("id", ctx_r2.blockRenderedData.block_id);
    i0.ɵɵattribute("aria-label", ctx_r2.additionalParameter["Aria-Label"] ? ctx_r2.additionalParameter["Aria-Label"] : undefined)("role", ctx_r2.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.type == "Multi");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.type == "Single");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.blockRenderedData.block_fields)("ngForTrackBy", ctx_r2.trackByIdBlock);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hideActionButton);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_section_1_Template, 5, 20, "section", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const pos_r10 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", pos_r10.active && ctx_r2.blockRenderedData && ctx_r2.repeatebleFieldsRows[i_r2]);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_3_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 30);
    i0.ɵɵlistener("click", function RepeatableBlockRendererComponent_ng_container_0_ng_container_3_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onBlockAdd()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(4, _c2, !ctx_r2.buttonEditable || ctx_r2.disableAddButton))("disabled", !ctx_r2.buttonEditable || ctx_r2.disableAddButton);
    i0.ɵɵattribute("aria-label", "Click on " + ctx_r2.add_more_field_label);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.add_more_field_label);
} }
function RepeatableBlockRendererComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_container_0_ng_container_3_button_1_Template, 2, 6, "button", 29);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.add_more_field_label !== "none");
} }
function RepeatableBlockRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_container_0_ng_container_2_Template, 2, 1, "ng-container", 2)(3, RepeatableBlockRendererComponent_ng_container_0_ng_container_3_Template, 2, 1, "ng-container", 1);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("reapeatable-loader ", ctx_r2.reapeatableLoading ? "reapeatable-pending" : "reapeatable-loaded", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.counterData)("ngForTrackBy", ctx_r2.trackByIdCounter);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.hideActionButton);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_1_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const activePosition_r30 = ctx_r25.activePosition;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction8(8, _c3, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition, activePosition_r30));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_2_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_3_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_4_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_5_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_6_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_6_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_7_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_8_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_9_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_10_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_11_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_11_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_12_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_12_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction8(12, _c7, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition, i0.ɵɵpureFunction3(8, _c6, field_r27.unique_id, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id]["value"], ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id])));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_13_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_13_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_14_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_14_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "repeatable-block-renderer", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r2.stepId)("rootData", ctx_r2.rootData)("rowData", ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id])("parentBlock", ctx_r2.fieldData.unique_id)("parentPosition", i_r29)("fieldData", field_r27)("templateId", ctx_r2.templateId)("mandatoryCondition", ctx_r2.mandatoryCondition)("editableCondition", ctx_r2.editableCondition)("visibleCondition", ctx_r2.visibleCondition);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_16_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_16_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_16_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c8, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_17_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_17_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c8, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_18_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_18_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction5(8, _c9, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, field_r27.field_type));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_19_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_19_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction4(8, _c5, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27));
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_20_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainer(0);
} }
function RepeatableBlockRendererComponent_ng_template_1_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div");
    i0.ɵɵtemplate(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_20_ng_container_2_Template, 1, 0, "ng-container", 31);
    i0.ɵɵpipe(3, "async");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r25 = i0.ɵɵnextContext();
    const field_r27 = ctx_r25.field;
    const position_r28 = ctx_r25.position;
    const i_r29 = ctx_r25.i;
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r28, " ", field_r27.field_style ? ctx_r2.commonUtil.bootstrapColClass(field_r27.field_style.bootstrap_class_name, ctx_r2.is_bootstrap, "", ctx_r2.conditionalUtil.evaluteBootstrapCondition(field_r27)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngComponentOutlet", i0.ɵɵpipeBind1(3, 6, ctx_r2.componentMap[field_r27.field_type]))("ngComponentOutletInputs", i0.ɵɵpureFunction7(8, _c4, ctx_r2.stepId, ctx_r2.rootData, ctx_r2.repeatebleFieldsRows[i_r29] == null ? null : ctx_r2.repeatebleFieldsRows[i_r29][field_r27.unique_id], field_r27, ctx_r2.mandatoryCondition, ctx_r2.editableCondition, ctx_r2.visibleCondition));
} }
function RepeatableBlockRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 9);
    i0.ɵɵtemplate(1, RepeatableBlockRendererComponent_ng_template_1_ng_container_1_Template, 4, 17, "ng-container", 10)(2, RepeatableBlockRendererComponent_ng_template_1_ng_container_2_Template, 4, 16, "ng-container", 10)(3, RepeatableBlockRendererComponent_ng_template_1_ng_container_3_Template, 4, 16, "ng-container", 10)(4, RepeatableBlockRendererComponent_ng_template_1_ng_container_4_Template, 4, 16, "ng-container", 10)(5, RepeatableBlockRendererComponent_ng_template_1_ng_container_5_Template, 4, 16, "ng-container", 10)(6, RepeatableBlockRendererComponent_ng_template_1_ng_container_6_Template, 4, 16, "ng-container", 10)(7, RepeatableBlockRendererComponent_ng_template_1_ng_container_7_Template, 4, 16, "ng-container", 10)(8, RepeatableBlockRendererComponent_ng_template_1_ng_container_8_Template, 4, 16, "ng-container", 10)(9, RepeatableBlockRendererComponent_ng_template_1_ng_container_9_Template, 4, 13, "ng-container", 10)(10, RepeatableBlockRendererComponent_ng_template_1_ng_container_10_Template, 4, 13, "ng-container", 10)(11, RepeatableBlockRendererComponent_ng_template_1_ng_container_11_Template, 4, 16, "ng-container", 10)(12, RepeatableBlockRendererComponent_ng_template_1_ng_container_12_Template, 4, 21, "ng-container", 10)(13, RepeatableBlockRendererComponent_ng_template_1_ng_container_13_Template, 4, 13, "ng-container", 10)(14, RepeatableBlockRendererComponent_ng_template_1_ng_container_14_Template, 4, 13, "ng-container", 10)(15, RepeatableBlockRendererComponent_ng_template_1_ng_container_15_Template, 2, 14, "ng-container", 10)(16, RepeatableBlockRendererComponent_ng_template_1_ng_container_16_Template, 4, 13, "ng-container", 10)(17, RepeatableBlockRendererComponent_ng_template_1_ng_container_17_Template, 4, 13, "ng-container", 10)(18, RepeatableBlockRendererComponent_ng_template_1_ng_container_18_Template, 4, 14, "ng-container", 10)(19, RepeatableBlockRendererComponent_ng_template_1_ng_container_19_Template, 4, 13, "ng-container", 10)(20, RepeatableBlockRendererComponent_ng_template_1_ng_container_20_Template, 4, 16, "ng-container", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r27 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r27.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Textfield");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Autocomplete Textfield");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Textarea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Date");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "radio");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Menu");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Checkbox");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Timepicker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "PhoneNumber");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Picker");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Button");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Number");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Attachments");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Repeatable Block");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Table-V2");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "List");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Switch");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "Editor");
} }
export class RepeatableBlockRendererComponent {
    userDataHandlerService;
    http;
    appDataService;
    apiDataService;
    internalCEEEmitter;
    sharedEventsService;
    dialog;
    snackBar;
    wfeStepLoaderService;
    accordionService;
    router;
    cdr;
    _ceeApiService;
    ngZone;
    workerService;
    renderer;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    fieldData;
    templateId;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    parentPosition;
    rowData;
    parentBlock;
    blockRenderedData;
    childArr = [];
    additionalParameter = {};
    counter = [{ active: true }];
    childCounter = {};
    maxBlocksCount = 0;
    radioValue;
    checkedItems;
    storeData = [];
    type = '';
    sectionSubscription;
    hideActionButton = true;
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        linkedBlockId: '',
        isRepeatedField: true,
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
    conditionObj = {};
    variableObj = {}; // variableObject
    dataMap = {};
    responseMap = {};
    isEditable = false;
    buttonEditable = false;
    isVisible = false;
    isMandatory = false;
    blockId = '';
    flatten;
    conditionalUtil;
    repeatableBlockDataUtil;
    isApiResponse = false;
    add_more_field_label = 'Add';
    remove_field_label = 'Delete';
    wfeEventListHandler;
    undoredoUtil;
    associatedMapUtil; // TODO: Remove this import and update the code once the map comes from the WFE End
    is_bootstrap = false;
    commonUtil;
    apiKeyUtil;
    lazyInterval = []; //setInterval for lazy loading
    counterTemp = [];
    presetData;
    setApiCallBackDataUtil;
    repeatebleFieldsRows = [];
    reapeatableLoading = false;
    sectionCustomClass = {};
    skipLoader = false;
    delimiter = '$';
    noIds = false;
    addRowByDefault = true;
    enableDeleteLastRow = false;
    componentList = {};
    storeBlockIdIfNull;
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
        'Autocomplete Textfield': defer(() => {
            if (this.componentList['Autocomplete Textfield']) {
                return this.componentList['Autocomplete Textfield'];
            }
            else {
                const c = import('../../field-components/cee-auto-complete/cee-auto-complete.component').then(m => m.CeeAutoCompleteComponent);
                this.componentList['Autocomplete Textfield'] = c;
                return c;
            }
        }),
        Textarea: defer(() => {
            if (this.componentList['Textarea']) {
                return this.componentList['Textarea'];
            }
            else {
                const c = import('../../field-components/cee-textarea/cee-textarea.component').then(m => m.CeeTextareaComponent);
                this.componentList['Textarea'] = c;
                return c;
            }
        }),
        Date: defer(() => {
            if (this.componentList['Date']) {
                return this.componentList['Date'];
            }
            else {
                const c = import('../../field-components/cee-date/cee-date.component').then(m => m.CeeDateComponent);
                this.componentList['Date'] = c;
                return c;
            }
        }),
        radio: defer(() => {
            if (this.componentList['radio']) {
                return this.componentList['radio'];
            }
            else {
                const c = import('../../field-components/cee-radio/cee-radio.component').then(m => m.CeeRadioComponent);
                this.componentList['radio'] = c;
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
        Checkbox: defer(() => {
            if (this.componentList['Checkbox']) {
                return this.componentList['Checkbox'];
            }
            else {
                const c = import('../../field-components/cee-checkbox/cee-checkbox.component').then(m => m.CeeCheckboxComponent);
                this.componentList['Checkbox'] = c;
                return c;
            }
        }),
        Timepicker: defer(() => {
            if (this.componentList['Timepicker']) {
                return this.componentList['Timepicker'];
            }
            else {
                const c = import('../../field-components/cee-time-picker/cee-time-picker.component').then(m => m.CeeTimePickerComponent);
                this.componentList['Timepicker'] = c;
                return c;
            }
        }),
        PhoneNumber: defer(() => {
            if (this.componentList['PhoneNumber']) {
                return this.componentList['PhoneNumber'];
            }
            else {
                const c = import('../../field-components/cee-phone-number/cee-phone-number.component').then(m => m.CeePhoneNumberComponent);
                this.componentList['PhoneNumber'] = c;
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
        Number: defer(() => {
            if (this.componentList['Number']) {
                return this.componentList['Number'];
            }
            else {
                const c = import('../../field-components/cee-number/cee-number.component').then(m => m.CeeNumberComponent);
                this.componentList['Number'] = c;
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
        'Table-V2': defer(() => {
            if (this.componentList['Table-V2']) {
                return this.componentList['Table-V2'];
            }
            else {
                const c = import('../../field-components/cee-table-v2/cee-table-v2.component').then(m => m.CeeTableV2Component);
                this.componentList['Table-V2'] = c;
                return c;
            }
        }),
        List: defer(() => {
            if (this.componentList['List']) {
                return this.componentList['List'];
            }
            else {
                const c = import('../../components/list-renderer/list-renderer.component').then(m => m.ListRendererComponent);
                this.componentList['List'] = c;
                return c;
            }
        }),
        Switch: defer(() => {
            if (this.componentList['Switch']) {
                return this.componentList['Switch'];
            }
            else {
                const c = import('../../field-components/cee-switch/cee-switch.component').then(m => m.CeeSwitchComponent);
                this.componentList['Switch'] = c;
                return c;
            }
        }),
        Editor: defer(() => {
            if (this.componentList['Editor']) {
                return this.componentList['Editor'];
            }
            else {
                const c = import('../../field-components/cee-editor/cee-editor.component').then(m => m.CeeEditorComponent);
                this.componentList['Editor'] = c;
                return c;
            }
        })
    };
    setDynamicLabelUtil;
    dummyBlocks = {};
    resetIndexOnAddOrRemove = false;
    activeBlocksCount = 0;
    disableAddButton = false;
    focusChildView = false;
    constructor(userDataHandlerService, http, appDataService, apiDataService, internalCEEEmitter, sharedEventsService, dialog, snackBar, wfeStepLoaderService, accordionService, router, cdr, _ceeApiService, ngZone, workerService, renderer) {
        this.userDataHandlerService = userDataHandlerService;
        this.http = http;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.sharedEventsService = sharedEventsService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.accordionService = accordionService;
        this.router = router;
        this.cdr = cdr;
        this._ceeApiService = _ceeApiService;
        this.ngZone = ngZone;
        this.workerService = workerService;
        this.renderer = renderer;
        this.flatten = new FlatUnflat(appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.repeatableBlockDataUtil = new RepeatableBlockData();
        this.wfeEventListHandler = new WFEEventListHandler(_ceeApiService, router, sharedEventsService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.undoredoUtil = new UndoRedo();
        // TODO: Remove this import and update the code once the map comes from the WFE End
        this.associatedMapUtil = new AssociatedMapUtil();
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        this.setApiCallBackDataUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
    }
    ngAfterContentChecked() {
        this.cdr.detectChanges();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    getTrackByFunction(param) {
        return (index, item) => {
            return item?.field_values[param];
        };
    }
    trackByIdBlock(index, item) {
        return item.message_code;
    }
    trackByIdCounter(index, item) {
        // console.log(item);
        const lastChar = item.message_code?.slice(-1);
        return lastChar;
    }
    trackByIndex(param) {
        return (index, item) => {
            return param;
        };
    }
    //Counts Active Parent and Child Blocks and
    countActiveBlocks() {
        this.maxBlocksCount = this.fieldData.repeatable_block_configuration.no_of_allowed_blocks;
        if (this.isChildBlock()) {
            this.activeBlocksCount = this.childCounter[this.parentPosition].reduce((acc, rec) => rec.active ? acc + 1 : acc, 0);
        }
        else {
            this.activeBlocksCount = this.counter.reduce((acc, rec) => rec.active ? acc + 1 : acc, 0);
        }
        this.disableAddButton = this.activeBlocksCount == Number(this.maxBlocksCount) ? true : false;
    }
    // Get all fields in the current repeatable block
    getCurrentBlockFields() {
        if (!this.blockRenderedData?.block_fields) {
            return [];
        }
        return this.blockRenderedData.block_fields.map(field => field);
    }
    ;
    // Get fields for a specific row/position
    getFieldsForPosition(position) {
        if (!this.repeatebleFieldsRows[position]) {
            return [];
        }
        return Object.values(this.repeatebleFieldsRows[position]).map((field) => field.html_id);
    }
    ;
    // Get active block count and data
    getBlockInfo = () => {
        return {
            totalBlocks: this.maxBlocksCount,
            activeBlocks: this.activeBlocksCount,
            currentRows: this.repeatebleFieldsRows.length,
            blockId: this.blockId,
            isChildBlock: this.isChildBlock(),
            parentPosition: this.parentPosition
        };
    };
    // Set the current block data in the Akita store
    async setCurrBlockAppData(ids, otherInfo) {
        const apiData = {
            fields: {},
            isChildBlock: otherInfo.isChildBlock,
            linkedBlockId: otherInfo.linkedBlockId,
            parentPosition: otherInfo.parentPosition,
            position: otherInfo.position,
            repeatedBlockFieldId: otherInfo.repeatedBlockFieldId,
            stepId: otherInfo.stepId
        };
        const entitiesByRB = await this.appDataService.getFieldIdMapFieldValueByRepeatedBlockFieldId(otherInfo.repeatedBlockFieldId);
        for (const id of ids) {
            const actualId = await id.split("$")[1];
            apiData['fields'][actualId] = await entitiesByRB[id];
        }
        // console.log("apiData ::::", apiData);
        // Set the API data in the Akita store
        this.apiDataService.setApiData({
            id: 'RepeatableBlock/CurrentIndex',
            apiUrl: '',
            apiKey: 'RepeatableBlock/CurrentIndex',
            value: Object.assign({}, apiData),
        });
    }
    ngOnInit() {
        this.presetData = this.rowData;
        this.maxBlocksCount = this.fieldData.repeatable_block_configuration.no_of_allowed_blocks;
        this.blockId = this.fieldData.repeatable_block_configuration.linked_block_id;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'SkipLoader':
                        this.skipLoader = paramter.value === "true" ? true : false;
                        break;
                }
            }
        }
        if (this.additionalParameter['CEE_Add_Row_By_Default']) {
            this.addRowByDefault = this.additionalParameter['CEE_Add_Row_By_Default'].toLowerCase() == 'false' ? false : true;
        }
        if (this.additionalParameter['CEE_Enable_Delete_Last_Row']) {
            this.enableDeleteLastRow = this.additionalParameter['CEE_Enable_Delete_Last_Row'].toLowerCase() == 'true' ? true : false;
            ;
        }
        // Reset ActiveIndex On Adding or Removing RB
        if (this.additionalParameter.hasOwnProperty('CEE_ResetRBIndexOnAction')) {
            this.resetIndexOnAddOrRemove = this.additionalParameter['CEE_ResetRBIndexOnAction'].toLowerCase() == 'true' ? true : false;
        }
        // Reset ActiveIndex On Adding or Removing RB
        if (this.additionalParameter.hasOwnProperty('CEE_ScrollIntoViewOnAction')) {
            this.focusChildView = this.additionalParameter['CEE_ScrollIntoViewOnAction'].toLowerCase() == 'true' ? true : false;
        }
        if (this.blockId) {
            // console.log(this.blockId);
            // console.log(" - rowData: ", this.rowData);
            // console.log(" - parentPosition: ", this.parentPosition);
            // console.log(" - parentBlock: ", this.parentBlock);
            let newCount = this.addRowByDefault ? [{ active: true, activeIndex: 1 }] : [];
            if (this.presetData && this.presetData.value && Array.isArray(this.presetData.value)) {
                newCount = [];
                for (const pIndex in this.presetData.value) {
                    newCount.push({ active: true, activeIndex: Number(pIndex) + 1 });
                }
            }
            // get the max count from the local storage for the repeatable block            
            if (this.isChildBlock()) {
                let childCount = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
                if (!childCount || !childCount[this.parentPosition]) {
                    if (!childCount) {
                        childCount = {};
                    }
                    if (!childCount[this.parentPosition]) {
                        childCount[this.parentPosition] = newCount;
                    }
                    this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, childCount);
                }
                this.counterTemp = childCount[this.parentPosition];
            }
            else {
                this.counterTemp = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
                if (!this.counterTemp) {
                    this.counterTemp = newCount;
                    this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, this.counterTemp);
                }
            }
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            this.processOutsideOfAngularZone();
        }
        else {
            console.error('linked_block_id not found');
            return false;
        }
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        if (this.fieldData.is_editable === 1) {
            this.buttonEditable = true;
        }
        // if (this.fieldData.is_mandatory === 1) {
        //     this.isMandatory = true;
        // }
        // create the associated map
        if (this.fieldData.is_editable === 2 || this.fieldData.is_display === 2) {
            this.setAssociatedMap();
        }
        this.variableObj['eventDeleteSubscriber_' + this.fieldData.unique_id] = this.sharedEventsService.eventDeleteRepeatedBlockSubscriber.subscribe(res => {
            if (res.primaryData.value?.repeatedBlockFieldId === this.fieldData.unique_id) {
                this.deleteBlock(res.primaryData.value?.position);
            }
        });
        this.variableObj['emitApiSuccessResponse_' + this.fieldData.unique_id] = this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
            this.sharedEventsService.stepLoaderEmitter.emit({ "blockId": this.blockId });
            let repeatedBlockFieldIdFromRes = res[`${res.handler_name}##data.primaryData.repeatedBlockFieldId`];
            if (repeatedBlockFieldIdFromRes !== undefined) {
                if (repeatedBlockFieldIdFromRes !== this.fieldData.unique_id) {
                    //console.log(" - NOT my blockId:", this.fieldData.unique_id, " != ", repeatedBlockFieldIdFromRes);                    
                    return;
                }
                // is cancel event
                let isCancelEvent = res[`${res.handler_name}##data.primaryData.isCancelEvent`];
                if (isCancelEvent == "true") {
                    if (this.counterTemp.length > 0) {
                        let newAdditionCancel = this.counterTemp[this.counterTemp.length - 1]?.activeIndex == 0;
                        if (newAdditionCancel) {
                            //console.log("-- reverting new addition cancellation");
                            this.lazyLoading();
                        }
                        else {
                            //console.log("-- reverting existing cancellation");
                            // way-1
                            this.lazyLoading();
                            // way-2
                            // let unique_id = res[`${res.handler_name}##data.primaryData.unique_id`];
                            // let positionFromRes = res[`${res.handler_name}##data.primaryData.position`];
                            // if(unique_id && positionFromRes) {
                            //     positionFromRes = Number(positionFromRes);
                            //     let gBlockId = unique_id.split("$")[0];
                            //     this.processRowData(this.counterTemp, positionFromRes, gBlockId);
                            //     // Trigger change detection
                            //     if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                            //         this.cdr.detectChanges();
                            //     }
                            // }                                
                        }
                        return;
                    }
                }
            }
            else {
                // console.log("-- rb is undefined");
                // return;
            }
            const response = this.flatten.flattenJSON(res);
            // The data is reset to remove inner doms already rendered.
            // If not done the values from API will not get reflected.
            if (this.checkIfResHasRepeatedData(response)) {
                // console.log("- YES my blockId and key:", this.fieldData.unique_id);
                this.rootData['FieldLoadStack']['add']();
                // this.dataMap = {};
                this.responseMap = {};
                // console.log('API RESPONSE', response);
                this.counter = [];
                this.childCounter = {};
                // render accordions' info-blocks when a new parent repeatable block is added
                let oldLength = this.counterTemp.length;
                this.counterTemp = this.getMaxIndex(response); // existing line  
                if (this.counterTemp.length > oldLength) {
                    this.addDummyBlocksForNewlyAddedAccordion();
                }
                // console.log("cc: ", (this.isChildBlock()) ? this.childCounter : this.counterTemp);
                this.processRowData(this.counterTemp);
                // console.log(`counter ${this.counterData}`);
                // console.log(`${this.fieldData.api_key} count ${this.counter}`, res);
                this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, (this.isChildBlock()) ? this.childCounter : this.counterTemp);
                this.rootData['FieldLoadStack']['remove']();
                this.lazyLoading();
            }
            else if (this.checkIfResHasBlankData(response)) {
                this.onAllBlockRemove([this.fieldData.unique_id]);
            }
            this.conditionCheck(null);
            // this.labelInfoCheck(res);
        });
        this.variableObj['repeatableBlockSessionClearanceEmitter_' + this.fieldData.unique_id] = this.sharedEventsService.repeatableBlockSessionClearanceEmitter.subscribe(res => {
            if (res) {
                this.onAllBlockRemove([res]);
            }
        });
        this.variableObj['associatedRepeatableBlockSessionClearanceEmitter_' + this.fieldData.unique_id] = this.sharedEventsService.associatedRepeatableBlockSessionClearanceEmitter.subscribe(res => {
            if (res) {
                const fieldId = this.associatedMapUtil.getAssociatedBlockById(this.undoredoUtil.getCurrentId());
                if (fieldId) {
                    this.onAllBlockRemove(new Array(fieldId));
                }
            }
        });
        this.variableObj['currentRepeatableBlockEmitter_' + this.fieldData.unique_id]
            = this.sharedEventsService.rbCurrentIndex.subscribe((res) => {
                // Get block info
                const blockInfo = this.getBlockInfo();
                // Check if the linkedBlockId matches the current blockId
                if (res.linkedBlockId == this.blockId) {
                    // Check if the current block is a child block
                    if (!blockInfo.isChildBlock) {
                        const fields = this.getFieldsForPosition(res.position);
                        if (fields.length > 0) {
                            this.setCurrBlockAppData(fields, res);
                        }
                    }
                    else {
                        // If it's a child block, check if the parentPosition matches
                        if (res.parentPosition === blockInfo.parentPosition) {
                            // Get fields by position
                            const fields = this.getFieldsForPosition(res.position);
                            if (fields.length > 0) {
                                this.setCurrBlockAppData(fields, res);
                            }
                        }
                    }
                }
            });
        // TODO: Set Conditional Value on the Repeatable Block
        this.variableObj['emitOnDataSetOrUpdated_' + this.fieldData.unique_id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
            this.onFieldDataUpdated(res.apiKey, res.value);
        });
        // if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
        //     for (const paramter of this.fieldData.additional_parameters) {
        //         this.additionalParameter[paramter.parameter_type] = paramter.value;
        //     }
        // }
        if (this.additionalParameter['renderType']) {
            this.type = this.additionalParameter['renderType'];
        }
        // add the app data to the akita store
        this.radioValue = '0';
        this.storeData = [0];
        this.appData.id = this.fieldData.unique_id;
        this.appData.mandatory = this.isMandatory;
        this.appData.stepId = this.stepId;
        this.appData.apiKey = this.isSingleAPIKey ? this.fieldData.api_key : '';
        this.appData.responseApiKey = this.isSingleAPIKey ? [] :
            this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
        this.appData.requestApiKey = this.isSingleAPIKey ? [] : this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key);
        this.appData.editable = this.isEditable;
        this.appData.visible = this.isVisible;
        this.appData.value = (this.type === 'Single' ? this.storeData[0] : this.type === '' ? '' : this.storeData);
        this.fieldData.html_id = this.presetData ?
            (this.presetData.html_id ? this.presetData.html_id : this.fieldData.unique_id) : this.fieldData.unique_id;
        this.appData.linkedBlockId = this.presetData ? (this.presetData.linkedBlockId ? this.presetData.linkedBlockId : this.fieldData['repeatable_block_configuration']['linked_block_id']) : this.fieldData['repeatable_block_configuration']['linked_block_id'];
        this.appData.repeatedBlockFieldId = this.presetData ?
            (this.presetData.repeatedBlockFieldId ? this.presetData.repeatedBlockFieldId : '') : '';
        if (typeof (this.presetData) === 'object' && this.presetData !== null) {
            if (this.presetData.unique_id) {
                this.appData.id = this.presetData.unique_id;
            }
            if (this.presetData.mandatory) {
                this.appData.mandatory = this.presetData.mandatory;
            }
            if (this.presetData.editable) {
                this.appData.editable = this.presetData.editable;
            }
            if (this.presetData.visible) {
                this.appData.visible = this.presetData.visible;
            }
        }
        this.validateState(this.appData);
        const { add_more_field_label, remove_field_label } = this.fieldData.repeatable_block_configuration;
        if (add_more_field_label) {
            this.add_more_field_label = add_more_field_label;
        }
        if (remove_field_label) {
            this.remove_field_label = remove_field_label;
        }
        if (this.fieldData.event_list && this.fieldData.event_list.length > 0) {
            for (const event of JSON.parse(JSON.stringify(this.fieldData.event_list))) {
                if (event.isDefault && event.event_name.toLowerCase() === 'onLoad'.toLowerCase()) {
                    this.wfeEventListHandler.switchEventDisplayType(event, this.fieldData.event_list);
                }
            }
        }
        let emitObj = null;
        if (String(this.appData.id).split('$').length === 3) {
            emitObj = {
                apiKey: this.appData.linkedBlockId ? this.appData.id : this.fieldData.unique_id,
                value: this.appData.value,
                index: String(this.appData.id).split('$')[2]
            };
        }
        else {
            emitObj = {
                apiKey: this.appData.linkedBlockId ? this.appData.id : this.fieldData.unique_id,
                value: this.appData.value
            };
        }
        this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj);
        // this.sectionSubscription = this.accordionService.sectionOpen$.subscribe(sectionId => {
        //     console.log("entered through service");        
        //     console.log(`📢 Received request to open section: ${sectionId}`);
        //             this.appDataService.getFieldDataByFieldId(sectionId);
        //             const apiKey = localStorage.getItem('selectedApiKey');
        //             //this.fieldData = this.appDataService.getFieldDataByApiKey(apiKey);
        //             //this.appDataService.getFieldIdMapFieldValueByRepeatedBlockFieldId
        //             //this.appDataService.getFieldDataByApiKey("sample api key sad");
        //             this.openAccordionClickedNew(sectionId,0);
        //         });
        this.accordionService.sectionOpenWithParent$.subscribe(({ sectionIds, parentId, defaultValue, iCounter }) => {
            // ✅ Use parentId and sections together
            this.appDataService.getFieldDataByFieldId(sectionIds);
            const apiKey = localStorage.getItem('selectedApiKey');
            //this.fieldData = this.appDataService.getFieldDataByApiKey(apiKey);
            //this.appDataService.getFieldIdMapFieldValueByRepeatedBlockFieldId
            //this.appDataService.getFieldDataByApiKey("sample api key sad");
            this.openAccordionClickedNew(parentId, sectionIds, defaultValue, iCounter);
        });
    }
    openAccordionClickedNew(blockId, uniqueId, defaultValue, iCounter) {
        console.log("TEST parentBlock - ", blockId);
        console.log("TEST uniqueId - ", uniqueId);
        if (iCounter == undefined) {
            iCounter = 0;
        }
        //const dummyBlock = "block_34612_living_address";
        const dummyBlock = defaultValue;
        this.wfeStepLoaderService.loadBlockByName(blockId).subscribe((blockData) => {
            //console.log("Loaded Block Data: ", blockData);
            let loadedBlock = blockData;
            // Find position of field with matching uniqueId
            let fieldIndex = loadedBlock?.block_fields?.findIndex((field) => field.unique_id === uniqueId);
            //console.log("TEST fieldIndex- ", fieldIndex);
            if (fieldIndex !== -1 && dummyBlock) {
                const gBlockId = dummyBlock;
                const pos = fieldIndex;
                this.storeBlockIdIfNull = gBlockId;
                //console.log("Loading block at position:", pos);
                this.onLoadRepeatBlock(gBlockId, pos, iCounter, "");
            }
            else {
                //console.warn(`Field with unique_id '${uniqueId}' not found or dummyBlock is missing`);
            }
        });
    }
    // openAccordionClickedNew(blockId: any, pos: number) {
    //     // remove initial field_values that are configured originally
    //     console.log("TEST parentBlock - ", this.parentBlock);
    //     console.log("TEST parentPosition- ", this.parentPosition);
    //     //this.wfeStepLoaderService.loadBlockByName("");
    //         let dummyBlock = "block_34612_living_address";
    //         this.wfeStepLoaderService.loadBlockByName('block_34612_applicant_details').subscribe((blockData) => {
    //             console.log("Loaded Block Data: ", blockData);
    //             // Process the block data as needed
    //         });
    //         if(dummyBlock) {
    //             let gBlockId = "block_34612_living_address";
    //             let pos = 8;
    //             this.storeBlockIdIfNull = gBlockId;
    //             console.log("loadig block...");
    //             this.onLoadRepeatBlock(gBlockId, pos, 0, "");
    //             console.log("nd reached");
    //         }
    //         else {
    //             console.log("something went wrong");
    //         }
    // }
    labelInfoCheck(data) {
        for (let i = 0; i < this.repeatebleFieldsRows.length; i++) {
            const rowDataList = this.repeatebleFieldsRows[i];
            for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
                const field = this.blockRenderedData.block_fields[position];
                if (field.field_type === 'Accordion') {
                    rowDataList[field.unique_id]['accordionInfo'] = JSON.parse(JSON.stringify(field.accordionInfo));
                    let name = rowDataList[field.unique_id]['accordionInfo'].config_name;
                    // if(name.includes('%repeatablePos%')) {
                    //     let newName = name.replace('%repeatablePos%', (i + 1));
                    //     var key = rowDataList[field.unique_id]['accordionInfo'].dynamic_repeatable_title;
                    //     if(key != "") {
                    //         key = this.substituteStars(key, rowDataList[field.unique_id].unique_id);
                    //         newName = newName + this.setDynamicLabelUtil.getDynamicValue({ field_label: key }).field_label;
                    //     }
                    //     rowDataList[field.unique_id]['accordionInfo'].name = newName;
                    // }                    
                    if (name.includes('((dynamic))')) {
                        let key = rowDataList[field.unique_id]['accordionInfo'].config_name;
                        rowDataList[field.unique_id]['accordionInfo'].name = this.setDynamicLabelUtil.getDynamicValue({ field_label: key }, data, true).field_label;
                    }
                }
            }
        }
    }
    /**
     * Render dummy blocks or info-blocks for newly added block having accordion
     */
    addDummyBlocksForNewlyAddedAccordion() {
        // console.log("Res update:", this.counterTemp, " - ", this.blockId);                            
        for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
            const field = this.blockRenderedData.block_fields[position];
            if (field.field_type === "Accordion") {
                let gBlockId = "";
                for (const paramter of field.additional_parameters) {
                    switch (paramter.parameter_type) {
                        case 'default_value':
                            gBlockId = paramter.value;
                            break;
                    }
                }
                let lastDummyBlockInfo = this.rootData[gBlockId];
                if (lastDummyBlockInfo) {
                    let lastLen = lastDummyBlockInfo["len"];
                    let dummyBlockId = gBlockId + this.delimiter + lastLen;
                    if (!this.dummyBlocks[dummyBlockId]) {
                        this.dummyBlocks[dummyBlockId] = this.createInputDataForDummyBlock(gBlockId, position);
                        lastDummyBlockInfo["len"] += 1;
                        this.rootData[gBlockId] = lastDummyBlockInfo;
                    }
                }
            }
        }
    }
    scrollToSection(fieldId, iCounter) {
        if (fieldId != "") {
            const menuElement = document.querySelector(`.accordion-section-${fieldId}-${iCounter}`);
            if (menuElement) {
                const errorField = this.renderer.selectRootElement(menuElement, true);
                if (errorField) {
                    errorField.scrollIntoView({ behavior: 'auto', block: 'center', inline: 'center' });
                }
            }
        }
    }
    onLoadRepeatBlock(gBlockId, position, iCounter = -1, fieldId = "") {
        if (gBlockId) {
            this.wfeStepLoaderService.loadBlockByName(gBlockId).subscribe((blockData) => {
                let bsBockFields = this.commonUtil.blockBootstrapProcess(blockData)?.block_fields;
                this.blockRenderedData.block_fields[position]['block_fields'] = bsBockFields;
                this.rootData['blockFields'][gBlockId] = [];
                for (let field of bsBockFields) {
                    this.rootData['blockFields'][gBlockId].push(field.unique_id);
                }
                this.processRowData(this.counterTemp, iCounter, gBlockId);
                this.scrollToSection(fieldId, iCounter);
                // Trigger change detection
                if (this.cdr && !this.cdr.destroyed) {
                    this.cdr.detectChanges();
                }
                if (iCounter === -1) {
                    this.lazyLoading();
                }
                this.wfeStepLoaderService.loaderService.skipLoading = false;
            });
        }
        else {
            this.wfeStepLoaderService.loaderService.skipLoading = false;
        }
    }
    // generateUniqueID(arrayPos: any) : string {
    //     let id = '$' + arrayPos;
    //     if (this.isChildBlock()) {            
    //         id = '$' + this.parentPosition + id;
    //     }
    //     return id;        
    // }
    createInputDataForDummyBlock(gBlockId, position) {
        let inputData = {
            blockId: gBlockId,
            position: position,
            show: true
        };
        return inputData;
    }
    initialLoadingOfSubBlocks(field, position) {
        let gBlockId;
        let collapseTitle = 'Collapse';
        let expandTitle = 'Open';
        let showSection = false;
        let name = field.field_label;
        let footerFields = [];
        let skipLoad = "false";
        let applicationDetails = '';
        let subHeaderFields = [];
        let dynamic_repeatable_title = "";
        for (const paramter of field.additional_parameters) {
            switch (paramter.parameter_type) {
                case 'default_value':
                    gBlockId = paramter.value;
                    break;
                case 'collapseTitle':
                    collapseTitle = paramter.value;
                    break;
                case 'expandTitle':
                    expandTitle = paramter.value;
                    break;
                case 'CEE_FOOTER_FIELDS':
                    footerFields = paramter.value.split('|').map(s => s.trim());
                    break;
                case 'CEE_Skip_rb_accordion_load':
                    skipLoad = paramter.value;
                    // showSection = true;
                    break;
                case 'CEE_rb_accordion_InfoBlock':
                    applicationDetails = paramter.value ? paramter.value : '';
                    break;
                case 'CEE_SUB_HEADER_FIELDS':
                    subHeaderFields = paramter.value.split('|').map(s => s.trim());
                    break;
                case 'CEE_dynamic_repeatable_title':
                    dynamic_repeatable_title = paramter.value;
                    break;
                case 'noIds':
                    this.noIds = paramter.value === "true" ? true : false;
                    break;
            }
        }
        if (field.field_type === 'Accordion') {
            field['accordionInfo'] = {
                collapseTitle,
                expandTitle,
                showSection,
                name,
                footerFields,
                subHeaderFields,
                dynamic_repeatable_title
            };
        }
        if (gBlockId) {
            if (skipLoad == "true") {
                for (let i = 0; i < this.counterTemp.length; i++) {
                    let dummyBlockId = gBlockId + this.delimiter + i;
                    this.dummyBlocks[dummyBlockId] = this.createInputDataForDummyBlock(gBlockId, position);
                }
                // save particular accodion's data in rootData to track the count
                this.rootData[gBlockId] = {
                    "len": this.counterTemp.length,
                    "applicationDetails": applicationDetails
                };
            }
            else {
                this.onLoadRepeatBlock(gBlockId, position);
            }
        }
    }
    processOutsideOfAngularZone() {
        this.wfeStepLoaderService.loadBlockByName(this.blockId).subscribe((res) => {
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(res);
            for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
                const field = this.blockRenderedData.block_fields[position];
                if (field.field_type === "Attachments") {
                    this.rootData['repeatable-' + field.unique_id] = {};
                }
                else if (field.field_type === "Generic Block" || field.field_type === "Accordion") {
                    this.initialLoadingOfSubBlocks(field, position);
                }
                if (field.field_type === 'label') {
                    field['copyOfFieldLabel'] = field.field_label;
                }
            }
            this.processRowData(this.counterTemp);
            this.lazyLoading();
        });
    }
    scrollIntoChildView(index) {
        try {
            if (index) {
                let childBlock = '';
                if (this.isChildBlock()) {
                    childBlock = `${this.blockId}-p-${this.parentPosition}-c-${index}`;
                }
                else {
                    childBlock = `${this.blockId}-c-${index}`;
                }
                if (childBlock) {
                    const interval = setInterval(() => {
                        const addedBlock = document.getElementsByClassName(childBlock);
                        if (addedBlock[0]) {
                            addedBlock[0].scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                            });
                            clearInterval(interval);
                        }
                    }, 200);
                    setTimeout(() => { clearInterval(interval); }, 2000);
                }
            }
        }
        catch (error) { }
    }
    // getApplicationInfo(data, i) {
    //     let words = data?.split("$$");
    //     let accordData:any = {};
    //     if(words[0]) {
    //         let titleValue: string;
    //         if(words[0].includes('%repeatablePos%')) {
    //             titleValue = words[0].replace('%repeatablePos%', i + 1);
    //         }
    //         else {
    //             titleValue = words[0];
    //         }
    //         if(titleValue.includes('((dynamic))')) {
    //             accordData.title = this.setDynamicLabelUtil.getDynamicValue({ field_label: titleValue}).field_label;
    //         }
    //         else {
    //             accordData.title = titleValue;
    //         }
    //     }
    //     if(words[1]) {
    //         if(words[1].includes('((dynamic))')) {
    //             accordData.subtitle = this.setDynamicLabelUtil.getDynamicValue({ field_label: words[1]}).field_label;
    //         }
    //         else {
    //             accordData.subtitle = words[1];
    //         }
    //     }
    //     return accordData;
    // }
    lazyLoading() {
        // stop existing interval and start new interval for lazy loading
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.reapeatableLoading = true;
        this.counter = [];
        this.childCounter[this.parentPosition] = [];
        this.lazyInterval = setInterval(() => {
            if (this.isChildBlock()) {
                if (this.childCounter && this.childCounter[this.parentPosition] && this.childCounter[this.parentPosition].length !== this.counterTemp.length) {
                    this.childCounter[this.parentPosition].push(this.counterTemp[this.childCounter[this.parentPosition].length]);
                }
                else {
                    this.reapeatableLoading = false;
                    clearInterval(this.lazyInterval);
                }
            }
            else {
                if (this.counter.length !== this.counterTemp.length) {
                    this.counter.push(this.counterTemp[this.counter.length]);
                }
                else {
                    this.reapeatableLoading = false;
                    clearInterval(this.lazyInterval);
                }
            }
            if (this.cdr && !this.cdr.destroyed) {
                this.cdr.detectChanges();
            }
            // To Enable or Disable 
            this.countActiveBlocks();
            // Emit to Reset ActiveIndex On Adding or Removing RB
            if (this.resetIndexOnAddOrRemove) {
                this.sharedEventsService.emitOnAddOrRemoveRB.emit();
            }
        }, 0);
    }
    // @HostListener('window:beforeunload', ['$event']) 
    // unloadHandler(event: Event) {
    //     // if (this.lazyInterval) {
    //     //     clearInterval(this.lazyInterval);
    //     // }
    //     // this.counter = [];
    //     // this.childCounter = {};
    //     this.processRowData();
    // }
    // accordion
    transformString(i, input, gBlockId) {
        let parts = input.split('|');
        let result = [];
        parts.map(x => {
            result.push(`${gBlockId}$${x}$${i}`);
        });
        return result.join('|');
    }
    // accordion
    modifyFieldValue2(i, obj, gBlockId) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ((key === "field" || key == "unique_id" || key == "additional_parameters")) {
                    if (key !== "additional_parameters") {
                        obj[key] = `${gBlockId}$${obj[key]}$${i}`;
                    }
                    else {
                        for (const param of obj[key]) {
                            if (param.parameter_type === "TargetFields" || param.parameter_type === "blockFields" || param.parameter_type === "EraseSessionData" || param.parameter_type === "Variables" || param.parameter_type === "Targets") {
                                let paramSplitValue = param.value.split("|");
                                if (paramSplitValue.length > 0 && paramSplitValue[0] !== 'NR') {
                                    param.value = this.transformString(i, param.value, gBlockId);
                                }
                                else if (paramSplitValue.length > 0 && paramSplitValue[0] === 'NR') {
                                    param.value = param.value.replace(/NR\|/g, "");
                                }
                                else {
                                    param.value = `${gBlockId}$${param.value}$${i}`;
                                }
                            }
                        }
                    }
                }
                else if (typeof obj[key] === "object" && obj[key] !== null) {
                    this.modifyFieldValue2(i, obj[key], gBlockId);
                }
            }
        }
        return obj;
    }
    modifyFieldValue(i, obj, gBlockId) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (key === "field") {
                    const isConditionContext = Array.isArray(obj["condition"]);
                    const isValidationCondition = Array.isArray(obj["conditions"]);
                    if (obj[key] === "") {
                        obj[key] = "";
                    }
                    else if (isConditionContext) {
                        // We are inside something like event_params with a condition array
                        for (const condition of obj["condition"]) {
                            if (condition.hasOwnProperty("field") &&
                                condition.choose_one === "step" &&
                                typeof condition.field === "string" &&
                                condition.field.startsWith("NR|")) {
                                // Don't transform, just clean NR|
                                condition.field = condition.field.replace(/^NR\|/, "");
                                continue;
                            }
                            if (condition.hasOwnProperty("field")) {
                                condition.field = `${gBlockId}$${condition.field}$${i}`;
                            }
                        }
                        if (isValidationCondition) {
                            for (const condition of obj["conditions"]) {
                                if (condition.hasOwnProperty("field") &&
                                    condition.choose_one === "step" &&
                                    typeof condition.field === "string" &&
                                    condition.field.startsWith("NR|")) {
                                    condition.field = condition.field.replace(/^NR\|/, "");
                                    continue;
                                }
                                if (condition.hasOwnProperty("field")) {
                                    condition.field = `${gBlockId}$${condition.field}$${i}`;
                                }
                            }
                        }
                    }
                    else {
                        // Regular field transformation
                        if (typeof obj[key] === 'string') {
                            if (obj[key].startsWith("NR|")) {
                                obj[key] = obj[key].replace(/^NR\|/, "");
                            }
                            else {
                                obj[key] = `${gBlockId}$${obj[key]}$${i}`;
                            }
                        }
                    }
                }
                else if (key === "unique_id") {
                    obj[key] = `${gBlockId}$${obj[key]}$${i}`;
                }
                else if (key === "additional_parameters") {
                    for (const param of obj[key]) {
                        if (["TargetFields", "blockFields", "EraseSessionData", "Variables", "Targets"].includes(param.parameter_type)) {
                            const paramSplitValue = param.value.split("|");
                            if (paramSplitValue.length > 0 && paramSplitValue[0] === 'NR') {
                                param.value = param.value.replace(/^NR\|/, "");
                            }
                            else {
                                param.value = this.transformString(i, param.value, gBlockId);
                            }
                        }
                    }
                }
                else if (typeof obj[key] === "object" && obj[key] !== null) {
                    // Recurse into nested objects
                    this.modifyFieldValue(i, obj[key], gBlockId);
                }
            }
        }
        return obj;
    }
    // repeatable
    transformStringRb(i, input, gBlockId) {
        let parts = input.split('|');
        let result = [];
        parts.map(x => {
            result.push(`${this.stepId}$${x}$${this.parentPosition}$${i}`);
        });
        return result.join('|');
    }
    modifyFieldValueRb(i, obj, gBlockId) {
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                if ((key === "field" || key == "unique_id" || key == "additional_parameters")) {
                    if (key !== "additional_parameters") {
                        if (obj[key] == "") {
                            continue;
                        }
                        obj[key] = `${this.stepId}$${obj[key]}$${this.parentPosition}$${i}`;
                    }
                    else {
                        for (const param of obj[key]) {
                            if (param.parameter_type === "TargetFields" || param.parameter_type === "blockFields" || param.parameter_type === "EraseSessionData" || param.parameter_type === "Variables" || param.parameter_type === "Targets") {
                                let paramSplitValue = param.value.split("|");
                                if (paramSplitValue.length > 0 && paramSplitValue[0] !== 'NR') {
                                    param.value = this.transformStringRb(i, param.value, gBlockId);
                                }
                                else if (paramSplitValue.length > 0 && paramSplitValue[0] === 'NR') {
                                    param.value = param.value.replace(/NR\|/g, "");
                                }
                                else {
                                    param.value = `${this.stepId}$${param.value}$${this.parentPosition}$${i}`;
                                }
                            }
                        }
                    }
                }
                else if (typeof obj[key] === "object" && obj[key] !== null) {
                    this.modifyFieldValueRb(i, obj[key], gBlockId);
                }
            }
        }
        return obj;
    }
    getNewFields(i, fields, gBlockId, type) {
        let finalFields = [];
        if (this.noIds === false) {
            let fieldUnq = [];
            if (fields.length > 0) {
                if (type == "Accordion") {
                    fields.map(x => {
                        let newField = this.modifyFieldValue(i, x, gBlockId);
                        finalFields.push(newField);
                        fieldUnq.push(x.unique_id);
                    });
                }
                if (type == "Generic Block") {
                    fields.map(x => {
                        let newField = this.modifyFieldValue2(i, x, gBlockId);
                        finalFields.push(newField);
                        fieldUnq.push(x.unique_id);
                    });
                }
            }
            let blockname = `${gBlockId}$${gBlockId}$${i}`;
            this.rootData['blockFields'][blockname] = fieldUnq;
        }
        else {
            let fieldUnq = [];
            if (fields.length > 0) {
                fields.map(x => {
                    let newField = this.modifyFieldValueRb(i, x, gBlockId);
                    finalFields.push(newField);
                    fieldUnq.push(x.unique_id);
                });
            }
            let blockname = `${this.stepId}$${gBlockId}$${this.parentPosition}$${i}`;
            this.rootData['blockFields'][blockname] = fieldUnq;
        }
        return finalFields;
    }
    // gBlockId and iCounter is needed when to expand particular accordion
    getRowDataList(i, iCounter, gBlockId, existingRowData = {}) {
        const rowDataList = {};
        const uniqueIds = {};
        for (let position = 0; position < this.blockRenderedData?.block_fields.length; position++) {
            const field = this.blockRenderedData.block_fields[position];
            // field.block_fields this will exist when Accordioan is opened
            if ((field.field_type === 'Generic Block' || field.field_type === 'Accordion') && field.block_fields) {
                const blockIds = JSON.parse(JSON.stringify(field.block_fields));
                if (gBlockId == field.possible_values[0] && field.field_type === 'Accordion') {
                    if (typeof i === 'number' && !isNaN(i)) {
                        let newFields = this.getNewFields(i, blockIds, gBlockId, field.field_type) || [];
                        field.field_values[i] = newFields;
                    }
                }
                if (gBlockId == field.possible_values[0] && field.field_type === 'Generic Block') {
                    if (typeof i === 'number' && !isNaN(i)) {
                        let newFields = this.getNewFields(i, blockIds, gBlockId, field.field_type) || [];
                        field.field_values[i] = newFields;
                    }
                }
                let arrOfFields = field.field_values[i];
                for (let pos = 0; pos < arrOfFields?.length; pos++) {
                    const innerField = arrOfFields[pos];
                    rowDataList[innerField?.unique_id] = this.generateRowData(i, innerField, "superBlocks");
                    uniqueIds[innerField?.unique_id] = rowDataList[innerField?.unique_id]?.unique_id;
                }
            }
            rowDataList[field.unique_id] = existingRowData?.hasOwnProperty(field.unique_id) ? existingRowData[field.unique_id] : this.generateRowData(i, field);
            uniqueIds[field.unique_id] = rowDataList[field.unique_id].unique_id;
            if (field.field_type === 'Accordion') {
                rowDataList[field.unique_id]['accordionInfo'] = JSON.parse(JSON.stringify(field.accordionInfo));
                if (gBlockId && iCounter == i) {
                    var pValues = field.possible_values;
                    if (pValues.includes(gBlockId)) {
                        rowDataList[field.unique_id]['accordionInfo'].showSection = true;
                    }
                }
                let name = rowDataList[field.unique_id]['accordionInfo'].name;
                if (name.includes('%repeatablePos%')) {
                    let newName = name.replace('%repeatablePos%', (i + 1));
                    var key = rowDataList[field.unique_id]['accordionInfo'].dynamic_repeatable_title;
                    if (key != "") {
                        key = this.commonUtil.findIndicesAndSubstituteStars(key, rowDataList[field.unique_id].unique_id, "$");
                        newName = newName + this.setDynamicLabelUtil.getDynamicValue({ field_label: key }).field_label;
                    }
                    rowDataList[field.unique_id]['accordionInfo'].name = newName;
                }
                if (name.includes('((dynamic))')) {
                    let key = rowDataList[field.unique_id]['accordionInfo'].name;
                    key = this.commonUtil.findIndicesAndSubstituteStars(key, rowDataList[field.unique_id].unique_id, "$");
                    rowDataList[field.unique_id]['accordionInfo'].name = this.setDynamicLabelUtil.getDynamicValue({ field_label: key }).field_label;
                }
                rowDataList[field.unique_id]['accordionInfo'].footerFields = this.getFooterFields(gBlockId, rowDataList[field.unique_id]['accordionInfo'].footerFields, i);
            }
        }
        this.processEventList(rowDataList, uniqueIds);
        return rowDataList;
    }
    getFooterFields(gBlock, footerFields = [], counter) {
        let footerArray = [];
        if (gBlock == null) {
            gBlock = this.storeBlockIdIfNull;
        }
        footerFields.map(x => {
            footerArray.push(`${gBlock}$${x}$${counter}`);
        });
        return footerArray;
    }
    processRowData(c = this.counterData, iCounter = -1, gBlockId = null) {
        if (iCounter !== -1) {
            if (iCounter < this.repeatebleFieldsRows.length) {
                // new way with RxJS
                of(iCounter)
                    .pipe(concatMap((index) => {
                    const rowDataList = this.getRowDataList(index, index, gBlockId, this.repeatebleFieldsRows[index]);
                    return of(rowDataList);
                }))
                    .subscribe((rowDataList) => {
                    this.repeatebleFieldsRows[iCounter] = rowDataList;
                    // Trigger change detection for this row
                    // if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                    //     this.cdr.detectChanges();
                    // }
                });
            }
        }
        else {
            this.repeatebleFieldsRows = [];
            // TODO: Need to remove static code
            // if(this.blockId == "block_34612_applicant_details") {
            // older way
            for (let i = 0; i < c.length; i++) {
                const rowDataList = this.getRowDataList(i, iCounter, gBlockId);
                this.repeatebleFieldsRows.push(rowDataList);
                // Trigger change detection for each row
                // setTimeout(() => {
                //     if (this.cdr && !(this.cdr as ViewRef).destroyed) {
                //         this.cdr.detectChanges();
                //     }
                // }, 0);
            }
            //console.log("repeatebleFieldsRows:", this.repeatebleFieldsRows);
            // }
            // else {
            //     // new way with RxJS
            //     of(...c)
            //         .pipe(
            //             concatMap((_, i) => {
            //                 const rowDataList = this.getRowDataList(i, iCounter, gBlockId);
            //                 return of(rowDataList);//.pipe(delay(5));
            //             })
            //         )
            //         .subscribe((rowDataList) => {
            //             // Trigger change detection for each row
            //             this.repeatebleFieldsRows.push(rowDataList);
            //             if (this.cdr && !(this.cdr as ViewRef).destroyed) {
            //                 this.cdr.detectChanges();
            //             }
            //         });
            // }
            // console.log("repeatebleFieldsRows:------->", this.repeatebleFieldsRows);
            this.sharedEventsService.stepLoaderEmitter.emit({ "blockId": this.blockId });
        }
    }
    /* Checks if an accordion should be visible based on its display conditions */
    checkAccordionVisibility(field, rowData, i) {
        // console.log("checkAccordionVisibility");
        if (field.is_display === 0) { // If is_display is 0, always hide
            return false;
        }
        else if (field.is_display === 1) { // If is_display is 1, always show
            return true;
        }
        else if (field.is_display === 2) { // If is_display is 2, check conditions
            let conditionValue = null;
            // Handle API response data for conditions
            if (field.display_condition && field.display_condition.condition) {
                for (const condition of field.display_condition.condition) {
                    if (!condition.field)
                        continue;
                    // Replace wildcards with actual indices
                    let modifiedField = condition.field;
                    if (modifiedField.includes('[*]')) {
                        // Extract indices from rowData.unique_id (e.g., "stepId$fieldId$0$1")
                        const indices = rowData.unique_id.split('$');
                        const rowIndex = indices.length >= 3 ? indices[2] : '0';
                        // Replace [*] with actual index
                        modifiedField = modifiedField.replace(/\[\*\]/g, `[${rowIndex}]`);
                    }
                    else {
                        modifiedField = this.stepId + '$' + modifiedField + '$' + i;
                    }
                    // Check API response data
                    if (this.responseMap[modifiedField] !== undefined) {
                        conditionValue = this.responseMap[modifiedField];
                        break;
                    }
                    console.log("modifiedField", modifiedField);
                    // Check app data for field value - skip if null/undefined
                    const fieldValue = this.appDataService.getFieldDataByFieldId(modifiedField);
                    console.log(modifiedField, "==>", fieldValue);
                    if (fieldValue === null || fieldValue === undefined) {
                        continue; // Skip this condition check if value is null/undefined
                    }
                    conditionValue = fieldValue;
                    break;
                }
            }
            // If we have a valid condition value, evaluate visibility
            if (conditionValue !== null) {
                const fieldId = rowData.unique_id || field.unique_id;
                const visible = this.conditionalUtil.checkVisibility(field, fieldId, conditionValue);
                if (visible !== undefined) {
                    return visible;
                }
            }
        }
        // Default fallback to visible
        return false;
    }
    generateRowData(arrayPos, fieldTemp, type = "") {
        const value = '[' + arrayPos + ']';
        let apiKey;
        let id = type != "superBlocks" ? this.stepId + '$' + fieldTemp.unique_id + '$' + arrayPos : fieldTemp?.unique_id;
        let deleteIndex = arrayPos;
        if (this.isChildBlock()) {
            // console.log("type:", type);
            deleteIndex = '_' + this.parentPosition + '_' + arrayPos;
            if (type != "superBlocks") {
                id = this.stepId + '$' + fieldTemp.unique_id + '$' + this.parentPosition + '$' + arrayPos;
            }
            else {
                id = fieldTemp.unique_id;
            }
            apiKey = fieldTemp.api_key ? fieldTemp?.api_key.replace('[**]', this.parentPosition) : '';
        }
        apiKey = fieldTemp?.api_key ? fieldTemp?.api_key.replace('[*]', value) : '';
        const formattedVal = {
            api_key: this.isSingleAPIKey ? apiKey : '',
            unique_id: id,
            html_id: id,
            response_api_key: this.returnRequestOrResponseApiKeys('response', fieldTemp?.response_api_key, value, this.parentPosition),
            request_api_key: this.returnRequestOrResponseApiKeys('request', fieldTemp?.request_api_key, value, this.parentPosition),
            linkedBlockId: this.blockId,
            repeatedBlockFieldId: this.fieldData.unique_id,
            isApiResponse: this.isApiResponse,
            value: this.returnFieldDataForLabel(fieldTemp, this.isSingleAPIKey ? apiKey :
                this.returnRequestOrResponseApiKeys('response', fieldTemp?.response_api_key, value, this.parentPosition), id, value),
            position: arrayPos,
            parentPosition: this.parentPosition,
            parentBlockId: this.parentBlock,
            event_list: fieldTemp?.event_list ? JSON.parse(JSON.stringify(fieldTemp?.event_list)) : [],
            resIsDiffHandler: fieldTemp?.response_api_key && this.commonUtil.getHandlerName(this.fieldData?.response_api_key)
                !== this.commonUtil.getHandlerName(fieldTemp?.response_api_key) ? true : false
        };
        if (type != "superBlocks") {
            // formattedVal.mandatory = fieldTemp?.is_mandatory === 1 || fieldTemp?.is_mandatory === 2;
            formattedVal.mandatory = fieldTemp?.is_mandatory === 1; // By defalt mandatory should be false for conditional mandatory fields 
            formattedVal.editable = fieldTemp?.is_editable === 1 || fieldTemp?.is_editable === 2;
            formattedVal.visible = fieldTemp?.is_display === 1 || fieldTemp?.is_display === 2;
        }
        // if (this.presetData && this.presetData.value && Array.isArray(this.presetData.value)) {
        //     formattedVal.value = this.presetData.value[arrayPos] &&
        //         this.presetData.value[arrayPos][fieldTemp?.response_api_key] ?
        //         this.presetData.value[arrayPos][fieldTemp?.response_api_key] : formattedVal.value;
        // }
        if (this.presetData && this.presetData.value && Array.isArray(this.presetData.value)) {
            formattedVal.value = this.presetData.value[arrayPos] &&
                this.presetData.value[arrayPos][fieldTemp.response_api_key] ?
                this.presetData.value[arrayPos][fieldTemp.response_api_key] : formattedVal.value;
            let currentValueNew = this.appDataService.getFieldDataByFieldId(formattedVal.unique_id);
            if (currentValueNew && currentValueNew != undefined && currentValueNew != null && currentValueNew != '') {
                formattedVal.value = currentValueNew ? currentValueNew : formattedVal.value;
            }
        }
        else {
            let currentValueNew = this.appDataService.getFieldDataByFieldId(formattedVal.unique_id);
            if (currentValueNew && currentValueNew != undefined && currentValueNew != null && currentValueNew != '') {
                formattedVal.value = currentValueNew ? currentValueNew : formattedVal.value;
            }
        }
        const eaoValue = fieldTemp?.additional_parameters ? fieldTemp?.additional_parameters.find(pv => pv.parameter_type === 'externalApiOptionValue') : null;
        if (eaoValue) {
            formattedVal['externalApiOptionValue'] = this.returnRequestOrResponseApiKeys('request', eaoValue.value, value, this.parentPosition);
        }
        if (this.dataMap[deleteIndex]) {
            if (this.dataMap[deleteIndex].indexOf(id) === -1) {
                this.dataMap[deleteIndex].push(id);
            }
        }
        else {
            this.dataMap[deleteIndex] = [id];
        }
        return formattedVal;
    }
    processEventList(rowData, uniqueIds) {
        for (const uId in rowData) {
            const fieldData = rowData[uId];
            for (const event of fieldData?.event_list) {
                for (const eParam of event?.event_params) {
                    switch (eParam?.event_config?.display_step) {
                        case "SetValues":
                        case "CustomFunctions":
                            const pTypes = ['TargetFields', 'ValueFields', 'Variables', 'Targets'];
                            for (const addi_param of eParam?.invoke_event_config?.additional_parameters) {
                                if (addi_param.parameter_type && addi_param.value && pTypes.includes(addi_param.parameter_type)) {
                                    let addiParamValNew = [];
                                    const addiParamVals = addi_param.value.split('|').map(val => val.trim());
                                    for (const addiParamVal of addiParamVals) {
                                        if (Object.keys(uniqueIds).includes(addiParamVal)) {
                                            addiParamValNew.push(uniqueIds[addiParamVal]);
                                        }
                                        else {
                                            addiParamValNew.push(addiParamVal);
                                        }
                                    }
                                    addi_param.value = addiParamValNew.join('|');
                                }
                            }
                            break;
                        default:
                            break;
                    }
                }
            }
        }
    }
    isChildBlock() {
        return (this.parentPosition != undefined && this.parentPosition != null);
    }
    get counterData() {
        const isChild = this.isChildBlock();
        if (isChild) {
            return this.childCounter?.[this.parentPosition] ?? null;
        }
        else {
            return this.counter ?? null;
        }
    }
    onBlockAdd() {
        // console.log("blockId:", this.blockId);
        if (this.isChildBlock()) {
            this.childCounter = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
            if (this.childCounter[this.parentPosition] && this.childCounter[this.parentPosition].filter(e => e.active === true).length < this.maxBlocksCount) {
                this.childCounter[this.parentPosition].push({ active: true, activeIndex: 0 });
            }
            // For Resetting ActiveIndex On Adding or Removing 
            if (this.resetIndexOnAddOrRemove) {
                this.childCounter = this.resetSequenceOnAction(this.childCounter);
            }
            this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, this.childCounter);
            this.counterTemp = this.childCounter[this.parentPosition];
            // To Enable or Disable 
            this.countActiveBlocks();
            // Focus added view
            if (this.focusChildView) {
                this.scrollIntoChildView(this.counterTemp.length - 1);
            }
        }
        else {
            this.counter = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
            if (this.counter.filter(e => e.active === true).length < this.maxBlocksCount) {
                this.counter.push({ active: true, activeIndex: 0 });
            }
            // For Resetting ActiveIndex On Adding or Removing 
            if (this.resetIndexOnAddOrRemove) {
                this.counter = this.resetSequenceOnAction(this.counter);
            }
            this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, this.counter);
            this.counterTemp = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
            // To Enable or Disable 
            this.countActiveBlocks();
            // Focus added view
            if (this.focusChildView) {
                this.scrollIntoChildView((this.counterTemp.length - 1));
            }
        }
        this.wfeEventListHandler.onComponentEventBatch(this.fieldData, this.presetData, this.stepId, "OnAdd", {}, false);
        // this.processRowData(this.counterData, -1, false);
        this.processOutsideOfAngularZone();
    }
    /**
     * function to remove all the repetable blocks except the one with the index 0
     */
    onAllBlockRemove(repetableBlockFieldIds) {
        for (const id of repetableBlockFieldIds) {
            // console.log(id === this.fieldData.unique_id);
            if (id === this.fieldData.unique_id) {
                this.responseMap = {};
                let counterData = this.counter;
                if (this.isChildBlock()) {
                    this.childCounter = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
                    counterData = this.childCounter[this.parentPosition];
                }
                if ((this.enableDeleteLastRow && (counterData.filter(e => e.active === true).length >= (this.isVisible ? 1 : 0))) || (!this.enableDeleteLastRow && (counterData.filter(e => e.active === true).length > (this.isVisible ? 1 : 0)))) {
                    let arrayMap = [];
                    for (let index = this.enableDeleteLastRow ? 0 : this.isVisible ? 1 : 0; index < counterData.length; index++) {
                        const element = counterData[index];
                        if (element.active) {
                            arrayMap = [...arrayMap, ...this.dataMap[this.isChildBlock() ? '_' + this.parentPosition + '_' + index : index]];
                            delete this.dataMap[index];
                        }
                    }
                    this.counter = [];
                    this.processRowData();
                    // // console.log(this.dataMap[this.counter]);
                    this.appDataService.deleteMultipleAppData(arrayMap);
                    const _this = this;
                    setTimeout(() => {
                        _this.counter = [];
                        if (!this.enableDeleteLastRow) {
                            _this.counter.push({ active: true });
                        }
                        _this.processRowData();
                    }, 0);
                    // console.log(this.dataMap);
                    if (!this.isChildBlock()) {
                        this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, this.counter);
                        this.blockRenderedData.block_fields.filter((bf) => {
                            return bf.field_type == 'Repeatable Block';
                        }).map((block) => {
                            let childBlockId = block.repeatable_block_configuration.linked_block_id;
                            this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(childBlockId, { '0': [{ active: true }] });
                        });
                    }
                    else {
                        this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, { '0': [{ active: true }] });
                    }
                    if (this.type !== '') {
                        this.radioValue = '0';
                        this.storeData = [0];
                        // this.appData.value = (this.type === 'Single' ? this.storeData[0] : this.storeData);
                        this.updateFieldState({
                            ...this.appData, ...{
                                value: (this.type === 'Single' ? this.storeData[0] : this.storeData)
                            }
                        });
                    }
                }
                if (this.dataMap[0]) {
                    const uniqueIds = [];
                    for (const ids of this.dataMap[0]) {
                        uniqueIds.push(ids.split('$')[1]);
                    }
                    // console.log({ unique_ids: uniqueIds, apiKeys: [] });
                    this.sharedEventsService.emitForEmptySession.emit({ unique_ids: uniqueIds, apiKeys: [] });
                }
            }
        }
    }
    onDeleteBlock(pos) {
        // console.log(this.additionalParameter);
        if (this.additionalParameter['PromptDelete']) {
            const dialogRef = this.dialog.open(AlertModalComponent, {
                data: {
                    message: this.additionalParameter['PromptDelete']
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.deleteBlock(pos);
                }
            });
        }
        else {
            this.deleteBlock(pos);
        }
    }
    deleteBlock(pos) {
        let counterData = [];
        let prevCounterData = [];
        let prevCounterIndices = [];
        let deletePosition = pos;
        let leastCount = this.enableDeleteLastRow ? 0 : 1;
        if (this.isChildBlock()) {
            this.childCounter = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(this.blockId);
            counterData = this.childCounter[this.parentPosition];
            deletePosition = '_' + this.parentPosition + '_' + pos;
        }
        else {
            counterData = this.counter;
        }
        if (counterData.filter(e => e.active === true).length > leastCount) {
            prevCounterData = [...counterData];
            prevCounterIndices = prevCounterData.reduce((acc, item, index) => { if (item.active) {
                acc.push(index);
            } return acc; }, []);
            counterData[pos].active = false;
            if (this.isChildBlock()) {
                this.childCounter[this.parentPosition] = counterData;
                counterData = this.childCounter;
            }
            // For Resetting ActiveIndex On Adding or Removing 
            if (this.resetIndexOnAddOrRemove) {
                counterData = this.resetSequenceOnAction(counterData);
            }
            //*** remove all child block on main block delete *****//
            if (!this.isChildBlock()) {
                this.blockRenderedData.block_fields.filter((bf) => {
                    return bf.field_type == 'Repeatable Block';
                }).map((block) => {
                    let childBlockId = block.repeatable_block_configuration.linked_block_id;
                    let repeatBlockIdLocaData = this.repeatableBlockDataUtil.getRepeatableLocalStorageDataByBlockId(childBlockId);
                    if (repeatBlockIdLocaData) {
                        const filterIds = Object.keys(repeatBlockIdLocaData).filter(i => i.includes('$' + pos + '$'));
                        this.repeatableBlockDataUtil.removeDataUsingMultipleIds(childBlockId, filterIds);
                        this.appDataService.deleteMultipleAppData(filterIds);
                    }
                    let childCountData = this.repeatableBlockDataUtil.localStorageGetMaxBlockCount(childBlockId);
                    childCountData[pos] = childCountData[pos].map((i) => {
                        return { active: false, activeIndex: 0 };
                    });
                    this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(childBlockId, childCountData);
                });
            }
            // ****** //
            this.repeatableBlockDataUtil.removeDataUsingMultipleIds(this.blockId, this.dataMap[deletePosition]);
            this.appDataService.deleteMultipleAppData(this.dataMap[deletePosition]);
            this.repeatableBlockDataUtil.localStorageSetMaxBlockCount(this.blockId, counterData);
            delete this.dataMap[deletePosition];
            // for radio select
            if (this.type === 'Single') {
                if (Number(this.radioValue) === pos) {
                    for (let i = counterData.length - 1; i >= 0; i--) {
                        if (i <= pos) {
                            if (counterData[i].active) {
                                this.radioValue = String(i);
                                break;
                            }
                        }
                    }
                    this.storeData = [Number(this.radioValue)];
                    this.updateFieldState({ ...this.appData, ...{ value: Number(this.radioValue) } });
                }
            }
            setTimeout(() => {
                this.wfeEventListHandler.onComponentEventBatch(this.fieldData, this.presetData, this.stepId, "OnRemove", {}, false);
                this.sharedEventsService.validateButtonForTagEmitter.emit();
                this.sharedEventsService.buttonValidationEmitter.emit();
                // Emit to Reset ActiveIndex On Adding or Removing RB
                if (this.resetIndexOnAddOrRemove) {
                    this.sharedEventsService.emitOnAddOrRemoveRB.emit();
                }
                // To Enable or Disable 
                this.countActiveBlocks();
                // Focus added view
                if (this.focusChildView) {
                    if (prevCounterIndices && prevCounterIndices.length > 0) {
                        const curIndex = prevCounterIndices.indexOf(pos), prev = (curIndex > 0 ? prevCounterIndices[curIndex - 1] : null), next = (curIndex < prevCounterIndices.length - 1 ? prevCounterIndices[curIndex + 1] : null);
                        if (next) {
                            this.scrollIntoChildView(next);
                        }
                        else if (prev) {
                            this.scrollIntoChildView(prev);
                        }
                    }
                }
            }, 0);
        }
        // console.log(this.dataMap);
    }
    resetSequenceOnAction(counterData) {
        if (Array.isArray(counterData)) {
            let count = 0;
            return counterData.map((c) => {
                if (c.active) {
                    count = count + 1;
                    c['activeIndex'] = count;
                }
                else {
                    c['activeIndex'] = 0;
                }
                return c;
            });
        }
        else {
            for (const key in counterData) {
                if (counterData.hasOwnProperty(key)) {
                    counterData[key] = this.resetSequenceOnAction(counterData[key]);
                }
            }
            return counterData;
        }
    }
    // getBlockData(field: any): any {
    //     let blockData = {};
    //     if (field.additional_parameters.length > 0) {
    //         for (const paramter of field.additional_parameters) {
    //             switch (paramter.parameter_type) {
    //                 case 'default_value':
    //                     blockData = paramter.value;
    //                     break;
    //             }
    //         }
    //     }
    //     return blockData;
    // }
    onFieldDataUpdated(fieldId, value) {
        // console.log("f:", fieldId);
        this.conditionCheck(value);
        // update the state of the repeatable block if required
        if (this.counterData) {
            for (let i = 0; i < this.counterData.length; i++) {
                this.sectionCustomClass[i] = this.blockRenderedData?.block_style ? this.blockRenderedData?.block_style?.custom_class_name : '';
                if (this.blockRenderedData?.custom_class_condition && this.blockRenderedData?.custom_class_condition['query'] != '') {
                    const customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, this.stepId + '$' + this.blockRenderedData.block_id + '$' + i, value);
                    if (!customClassCondition) {
                        this.sectionCustomClass[i] = '';
                    }
                }
            }
        }
    }
    conditionCheck(value) {
        if (this.fieldData.is_editable === 2) {
            const editable = this.conditionalUtil.checkEditable(this.fieldData, String(this.appData.id), value);
            if (editable !== undefined) {
                this.buttonEditable = editable;
                this.hideActionButton = editable;
            }
        }
        if (this.fieldData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.fieldData, String(this.appData.id), value);
            if (visible !== undefined) {
                // if(visible) {
                //     this.processRowData();
                // }
                this.isVisible = visible;
                // If the block is not visible, check and set the mandatory condition for fields
                this.setMandatoryConditionForBlockFields();
            }
        }
    }
    /**
     * Sets the mandatory condition for all fields in the block when the block is not visible.
     * This ensures that if the block is hidden, any fields that were mandatory are set to non-mandatory.
     */
    setMandatoryConditionForBlockFields() {
        if (!this.blockRenderedData)
            return;
        const appData = this.appDataService.getAllAppStoreData();
        if (!appData)
            return;
        if (this.isVisible) {
            // Filter fields that belong to this block and were mandatory originally
            const fieldsToUpdate = appData.filter(field => this.blockRenderedData.block_id === field.linkedBlockId && field.mandatoryOriginal && field.visible);
            // Batch update all fields that need changes
            if (fieldsToUpdate.length > 0) {
                fieldsToUpdate.forEach(field => {
                    this.appDataService.updateAppData({
                        ...field,
                        mandatory: true,
                    });
                });
            }
        }
        else {
            // Filter fields that belong to this block and are mandatory
            const fieldsToUpdate = appData.filter(field => this.blockRenderedData.block_id === field.linkedBlockId && field.mandatory);
            // Batch update all fields that need changes
            if (fieldsToUpdate.length > 0) {
                fieldsToUpdate.forEach(field => {
                    this.appDataService.updateAppData({
                        ...field,
                        mandatory: false,
                        mandatoryOriginal: true,
                    });
                });
            }
        }
    }
    checkFieldVisibility(field, rowData) {
        if (field.is_display === 0)
            return false;
        if (field.is_display === 2)
            return this.conditionalUtil.checkVisibility(field, rowData.api_key, rowData.value);
        return true;
    }
    getMaxIndex(res) {
        let hasAPIKey = false;
        if (res) {
            let max = 0;
            let apiKeys = [];
            // console.log(this.fieldData.unique_id, this.fieldData.response_api_key);
            if (this.isSingleAPIKey) {
                apiKeys = [this.fieldData.api_key];
            }
            else {
                apiKeys = this.returnAPIKeyForMultipleApiKeys();
            }
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const regex = apiKey.replace('*', '\\d+')
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]');
                for (const key of Object.keys(res)) {
                    const result = key.match(new RegExp(regex));
                    if (result) {
                        hasAPIKey = true;
                        this.responseMap[key] = res[key];
                        const currIndex = result[0].replace(apiKey.replace('[*]', ''), '').replace('[', '').replace(']', '');
                        if (max < Number(currIndex)) {
                            max = Number(currIndex);
                        }
                    }
                }
            }
            if (hasAPIKey) {
                const tCounter = [];
                for (let index = 0; index < Number(max) + 1; index++) {
                    tCounter.push({ active: true, activeIndex: Number(index) + 1 });
                }
                this.isApiResponse = true;
                this.repeatableBlockDataUtil.removeByBlockId(this.blockId);
                let dataMapIds = [];
                for (const key of Object.keys(this.dataMap)) {
                    const dataMapId = this.dataMap[key];
                    dataMapIds = dataMapIds.concat(dataMapId);
                }
                this.appDataService.deleteMultipleAppData(dataMapIds);
                return tCounter;
            }
            else {
                if (this.isChildBlock()) {
                    return this.childCounter;
                }
                return this.counter;
            }
        }
        else {
            if (this.isChildBlock()) {
                return this.childCounter;
            }
            return this.counter;
        }
    }
    checkIfResHasBlankData(res) {
        let flag = false;
        if (res) {
            let apiKeys;
            if (this.isSingleAPIKey) {
                apiKeys = [this.fieldData.api_key];
            }
            else {
                apiKeys = this.returnAPIKeyForMultipleApiKeys();
            }
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const key = apiKey.replace('[*]', '');
                if (res[key] && res[key].length === 0) {
                    flag = true;
                    break;
                }
            }
        }
        return flag;
    }
    checkIfResHasRepeatedData(res) {
        let hasAPIKey = false;
        if (res) {
            let apiKeys;
            if (this.isSingleAPIKey) {
                apiKeys = [this.fieldData.api_key];
            }
            else {
                apiKeys = this.returnAPIKeyForMultipleApiKeys();
            }
            for (const apiKey of apiKeys) {
                if (!apiKey) {
                    continue;
                }
                const regex = apiKey.replace('*', '\\d+')
                    .replace(/\[/g, '\\[')
                    .replace(/\]/g, '\\]');
                for (const key of Object.keys(res)) {
                    if (key.indexOf('[*]') <= -1) {
                        const result = key.match(new RegExp(regex));
                        if (result) {
                            hasAPIKey = true;
                        }
                    }
                    else {
                        hasAPIKey = false;
                        break;
                    }
                }
            }
        }
        return hasAPIKey;
    }
    repeatableBlockChange(data, isChecked) {
        if (isChecked) {
            if (this.type === 'Single') {
                this.storeData = [];
            }
            this.storeData = [...this.storeData, ...[data]];
        }
        else {
            if (this.storeData.length > 0) {
                const arr = [];
                for (const i of this.storeData) {
                    if (i !== data) {
                        arr.push(i);
                    }
                }
                this.storeData = arr;
            }
        }
        this.storePrimaryKey();
    }
    storePrimaryKey() {
        this.updateFieldState({
            ...this.appData, ...{
                value: (this.type === 'Single' ? this.storeData[0] : this.storeData)
            }
        });
    }
    validateState(appData) {
        this.appDataService.getAppDataByFieldId(String(appData.id)).pipe(take(1)).subscribe(val => {
            if (val) {
                if (val.id === appData.id) {
                    // State found
                    this.appData.value = val.value;
                    setTimeout(() => {
                        if (this.type === 'Single') {
                            this.radioValue = String(val.value);
                        }
                        this.storeData = [val.value];
                    }, 0);
                    this.updateFieldState(appData);
                }
            }
            else {
                // Create new state
                this.createNewFieldState(appData);
            }
        });
    }
    createNewFieldState(appData) {
        this.appDataService.addAppData(appData);
    }
    updateFieldState(appData) {
        this.appDataService.updateAppData(appData);
    }
    disableRemoveBtnIfArrayEmpty() {
        if (this.counter.filter(e => e.active === true).length === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    // TODO: Remove this function when once the map comes from the WFE End
    setAssociatedMap() {
        const dependentFields = [];
        if (this.fieldData.editable_condition && this.fieldData.editable_condition.condition) {
            for (const condition of this.fieldData.editable_condition.condition) {
                dependentFields.push(condition.field);
            }
        }
        if (this.fieldData.display_condition && this.fieldData.display_condition.condition) {
            for (const condition of this.fieldData.display_condition.condition) {
                dependentFields.push(condition.field);
            }
        }
        this.associatedMapUtil.set(this.fieldData.unique_id, [...new Set(dependentFields)]);
    }
    /**
     * function that returns field label or the value of the label
     * @param fieldTemp field Data
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    returnFieldDataForLabel(fieldTemp, apiKey, id, posVal) {
        let returnValue;
        if (fieldTemp?.field_type === 'label' && !(this.isSingleAPIKey ? fieldTemp?.api_key : fieldTemp?.response_api_key)) {
            returnValue = fieldTemp?.field_label;
            if (returnValue && returnValue.includes('((dynamic))')) {
                const keys = (returnValue.split('((dynamic))')[1]).match(new RegExp(/\%(.*?)\%/g));
                if (keys) {
                    for (const apiKey1 of keys) {
                        let apiKey = apiKey1.split('%')[1];
                        const keyValue = this.returnRequestOrResponseApiKeys('response', apiKey, posVal, this.parentPosition);
                        returnValue = returnValue.replace('%' + apiKey + '%', keyValue !== undefined ? '%' + keyValue + '%' : '');
                    }
                }
            }
        }
        else {
            returnValue = this.returnFieldValue(apiKey, id);
            if (returnValue === undefined) {
                const defaultValue = fieldTemp?.additional_parameters ? fieldTemp?.additional_parameters.find(i => i.parameter_type === 'default_value') : null;
                if (defaultValue) {
                    returnValue = defaultValue.value;
                }
            }
        }
        return returnValue ? returnValue : '';
    }
    /**
     * function that returns value in respect ot the api key based on the
     * condition if it uses single or multiple api key
     * @param apiKey the api key response api key or normal api key
     * @param id field id
     */
    returnFieldValue(apiKey, id) {
        // TODO: Check functionality
        let value;
        if (this.isSingleAPIKey) {
            value = this.responseMap[apiKey];
        }
        else {
            for (const key of apiKey) {
                if (key.includes('+')) {
                    let val;
                    const concatKeys = key.split('+');
                    for (const singleKey of concatKeys) {
                        val = concatKeys.indexOf(singleKey) === 0 ? this.responseMap[singleKey] : value + ' ' + this.responseMap[singleKey];
                    }
                    value = val;
                }
                else if (this.responseMap.hasOwnProperty(key)) {
                    value = this.responseMap[key];
                }
                else {
                    const valTemp = this.setApiCallBackDataUtil.getArrayWithIndex(this.responseMap, key);
                    if (valTemp) {
                        value = valTemp;
                    }
                }
            }
        }
        if (value === undefined) {
            value = this.appDataService.getFieldDataByFieldId(id);
        }
        return value;
    }
    /**
     * returns the multiple api keys based on the type of the key
     * @param type the type of the key
     * @param key the api key
     */
    returnRequestOrResponseApiKeys(type, key, position, parentPosition = null) {
        if (!this.isSingleAPIKey && key) {
            if (!key.includes('||')) {
                key = key.replace(/\[\*\]/g, position); // change [*] with [ index ]
                if (this.isChildBlock()) {
                    key = key.replace(/\[\*\*\]/g, '[' + parentPosition + ']'); // change [**] with [ parentindex ]
                }
                return this.apiKeyUtil.getMultipleApiKeys(type === 'response' ?
                    this.apiKeyUtil.getConcatenatedApiKeys(key) : key);
            }
            else {
                let newKeyArr = [];
                key.split('||').forEach(element => {
                    let starCount = element.split('[*]');
                    if (starCount && starCount.length > 2) {
                        newKeyArr.push(element.replace(/\[\*\]/, position)); // change [*] with [ index ]
                    }
                    else {
                        newKeyArr.push(element);
                    }
                });
                return this.apiKeyUtil.getMultipleApiKeys(type === 'response' ?
                    this.apiKeyUtil.getConcatenatedApiKeys(newKeyArr.join('|')) : newKeyArr.join('|'));
            }
        }
        else {
            return [];
        }
    }
    /**
     * function returns the last index of the api key
     */
    returnAPIKeyForMultipleApiKeys() {
        if (this.fieldData.response_api_key.includes('||')) {
            // return all response keys separately so the
            // data map stores the values of each and every key
            return this.fieldData.response_api_key.split('||').map(str => str.trim());
        }
        else {
            const keys = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.response_api_key);
            return keys;
        }
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        if (this.lazyInterval) {
            clearInterval(this.lazyInterval);
        }
        this.counter = [];
        this.childCounter = {};
        this.repeatebleFieldsRows = [];
        this.dataMap = {};
    }
    ngOnChanges(changes) {
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'buttonEditable');
        }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        /* if (changes.mandatoryCondition) {
            this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        } */
    }
    setConditions(childConditions, type) {
        let check = true;
        if (childConditions && childConditions.exceptionFields && childConditions.exceptionFields.length > 0 && childConditions.exceptionFields.includes(this.fieldData.unique_id)) {
            check = false;
        }
        if (check && childConditions && childConditions.isActive) {
            if (childConditions.fields && childConditions.fields.length > 0 && childConditions.fields.includes(this.fieldData.unique_id)) {
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else if (childConditions.overrideAll) {
                // console.log(type, obj);
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else {
                this.conditionObj[type] = false;
            }
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    openAccordionClicked(field, i) {
        // remove initial field_values that are configured originally
        if (field.field_values[0]?.hasOwnProperty("value")) {
            delete field.field_values[0];
        }
        if (field?.field_values[i]?.length > 0) {
            this.displayAccordion(field.unique_id, i);
        }
        else {
            // reverrted original 
            let dummyBlock = this.dummyBlocks[field.possible_values[0] + '$' + i];
            // commented
            // let dummyBlock = Object.entries(this.dummyBlocks).filter(([blockKey, _]) => 
            //     blockKey.includes('$'+i)
            //   )[0][1];
            if (dummyBlock) {
                let gBlockId = dummyBlock.blockId;
                let pos = dummyBlock.position;
                this.storeBlockIdIfNull = gBlockId;
                this.onLoadRepeatBlock(gBlockId, pos, i, field.unique_id);
            }
            else if (dummyBlock == undefined) {
                Object.keys(this.dummyBlocks).map(x => {
                    if (x.includes(field.possible_values[0])) {
                        let dummyBlock = this.dummyBlocks[field.possible_values[0] + '$' + 0];
                        let gBlockId = dummyBlock.blockId;
                        let pos = dummyBlock.position;
                        this.storeBlockIdIfNull = gBlockId;
                        this.onLoadRepeatBlock(gBlockId, pos, i, field.unique_id);
                    }
                });
            }
            else {
                console.log("something went wrong");
            }
        }
    }
    displayAccordion(unique_id, i) {
        this.repeatebleFieldsRows[i][unique_id].accordionInfo.showSection = !this.repeatebleFieldsRows[i][unique_id].accordionInfo.showSection;
    }
    static ɵfac = function RepeatableBlockRendererComponent_Factory(t) { return new (t || RepeatableBlockRendererComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.HttpClient), i0.ɵɵdirectiveInject(i3.AppDataService), i0.ɵɵdirectiveInject(i4.ApiDataService), i0.ɵɵdirectiveInject(i5.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i6.SharedEventsServiceService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.WfeStepLoaderService), i0.ɵɵdirectiveInject(i10.AccordionService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i12.CeeApiService), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i13.WebworkerService), i0.ɵɵdirectiveInject(i0.Renderer2)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: RepeatableBlockRendererComponent, selectors: [["repeatable-block-renderer"]], inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData", parentPosition: "parentPosition", rowData: "rowData", parentBlock: "parentBlock" }, standalone: true, features: [i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], [4, "ngIf"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "id", "class", 4, "ngIf"], [3, "id"], ["type", "checkbox", "class", "repeated-checkbox", 3, "name", "id", "checked", "change", 4, "ngIf"], ["type", "radio", "class", "repeated-radio", 3, "name", "id", "ngModel", "value", "ngModelChange", "change", 4, "ngIf"], ["type", "checkbox", 1, "repeated-checkbox", 3, "change", "name", "id", "checked"], ["type", "radio", 1, "repeated-radio", 3, "ngModelChange", "change", "name", "id", "ngModel", "value"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "class", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "accordion-header", 3, "click"], ["class", "accordion-header-text", 4, "ngIf"], ["class", "accordion-header-text", 3, "innerHTML", 4, "ngIf"], ["class", "accordion-header-collapse-btn", 4, "ngIf"], ["class", "accordion-header-open-btn", 4, "ngIf"], ["class", "accordion-sub-header row", 3, "hidden", 4, "ngIf"], ["class", "accordion-content row", 3, "hidden", 4, "ngIf"], ["class", "accordion-footer row", 3, "hidden", 4, "ngIf"], [1, "accordion-header-text"], [1, "accordion-header-text", 3, "innerHTML"], [1, "accordion-header-collapse-btn"], [1, "accordion-header-open-btn"], [1, "accordion-sub-header", "row", 3, "hidden"], [1, "accordion-content", "row", 3, "hidden"], [1, "accordion-footer", "row", 3, "hidden"], [3, "ngClass", "disabled", "click", 4, "ngIf"], [3, "click", "ngClass", "disabled"], [4, "ngComponentOutlet", "ngComponentOutletInputs"], [3, "stepId", "rootData", "rowData", "parentBlock", "parentPosition", "fieldData", "templateId", "mandatoryCondition", "editableCondition", "visibleCondition"]], template: function RepeatableBlockRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, RepeatableBlockRendererComponent_ng_container_0_Template, 4, 6, "ng-container", 1)(1, RepeatableBlockRendererComponent_ng_template_1_Template, 21, 21, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [RepeatableBlockRendererComponent, NgSwitch, NgClass, MatFormFieldModule, FormsModule, i14.DefaultValueAccessor, i14.RadioControlValueAccessor, i14.NgControlStatus, i14.NgModel, CommonModule, i15.NgComponentOutlet, i15.NgForOf, i15.NgIf, i15.NgTemplateOutlet, i15.NgSwitchCase, i15.NgSwitchDefault, i15.AsyncPipe] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(RepeatableBlockRendererComponent, [{
        type: Component,
        args: [{ selector: 'repeatable-block-renderer', standalone: true, imports: [ViewRendererComponent, NgSwitch, NgClass, MatFormFieldModule, FormsModule, CommonModule, forwardRef(() => AccordionRendererComponent), forwardRef(() => GenericBlockRendererComponent)], template: "<ng-container *ngIf=\"isVisible\">\r\n    <div class=\"reapeatable-loader {{reapeatableLoading ? 'reapeatable-pending':'reapeatable-loaded'}}\"></div>\r\n    <ng-container *ngFor=\"let pos of counterData; let i = index; trackBy: trackByIdCounter;\">\r\n        <section *ngIf=\"pos.active && blockRenderedData && repeatebleFieldsRows[i]\" id=\"{{ blockRenderedData.block_id }}\" [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\" [attr.role]=\"additionalParameter['Aria-Role']\" class=\"cee-block sectionRb-{{i}} {{blockRenderedData.block_id}}-sidebar-item-{{i}}  {{parentPosition ? (blockRenderedData.block_id+'-p-'+parentPosition+'-c-'+i) : (blockRenderedData.block_id+'-c-'+i)}}  template-{{templateId}} block-{{ blockRenderedData.block_id }} {{storeData.length > 1 ? storeData.indexOf(i) >= 0 ? 'selected' : '' : storeData[0] == i ? 'selected' : ''}} {{is_bootstrap ? 'row': ''}} {{reapeatableLoading ? 'reapeatable-pending':'reapeatable-loaded'}} {{sectionCustomClass[i] ? sectionCustomClass[i]: ''}} \">            \r\n            <input *ngIf=\"type == 'Multi'\" type=\"checkbox\" name=\"check_{{i}}\" id=\"check_{{i}}\" class=\"repeated-checkbox\" (change)=\"repeatableBlockChange(i, $event.target.checked)\" [checked]=\"storeData.indexOf(i) >= 0\" />\r\n            <input *ngIf=\"type == 'Single'\" type=\"radio\" name=\"radio_{{i}}\" id=\"radio_{{i}}\" class=\"repeated-radio\" [(ngModel)]=\"radioValue\" value=\"{{i}}\" (change)=\"repeatableBlockChange(i, $event.target.checked)\">\r\n            <ng-container *ngFor=\"let field of blockRenderedData.block_fields; index as position; trackBy: trackByIdBlock;\">\r\n                <ng-container [ngSwitch]=\"field.field_type\">\r\n                    <ng-container *ngSwitchCase=\"'Generic Block'\">\r\n                        <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                            <section class=\"row generic-block generic-block-{{ field.unique_id }} {{(field.field_style)?field.field_style.custom_class_name:''}}\" *ngIf=\"field?.field_values[i]?.length > 0\">\r\n                                <!-- <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                    <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                    </ng-template>\r\n                                </ng-container> -->\r\n                                <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                    <ng-container  *ngIf=\"repeatebleFieldsRows[i]?.[field.unique_id]\">\r\n                                        <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                        </ng-template>\r\n                                    </ng-container>\r\n                                </ng-container>\r\n                            </section>\r\n                        </div>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchCase=\"'Accordion'\">\r\n                        <ng-container *ngIf=\"checkAccordionVisibility(field, repeatebleFieldsRows[i]?.[field.unique_id], i)\">\r\n                            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                                <!-- <section id=\"{{field.possible_values[0]}}\" class=\"accordion-section accordion-section-{{ field.unique_id }} {{(field.field_style)?field.field_style.custom_class_name:''}}\"> -->\r\n                                <section id=\"{{field.unique_id}}-{{i}}\" class=\"accordion-section accordion-section-{{field.unique_id}}-{{i}} accordion-section-{{ field.unique_id }} {{(field.field_style)?field.field_style.custom_class_name:''}}\">\r\n                                    <div class=\"accordion-header\"\r\n                                    (click)=\"openAccordionClicked(field, i)\">\r\n                                        <div *ngIf=\"!isHTML(repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.name)\" class=\"accordion-header-text\">{{repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.name}}</div>\r\n                                        <div *ngIf=\"isHTML(repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.name)\" class=\"accordion-header-text\" [innerHTML]=\"repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.name\"></div>\r\n                                        <div class=\"accordion-header-collapse-btn\" *ngIf=\"repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\">\r\n                                            {{repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.collapseTitle}}\r\n                                        </div>\r\n                                        <div class=\"accordion-header-open-btn\" *ngIf=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\">\r\n                                            {{repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.expandTitle}}\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"accordion-sub-header row\" [hidden]=\"repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\" *ngIf=\"field?.field_values[i]?.length > 0\">\r\n                                        <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                            <ng-container  *ngIf=\"repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.subHeaderFields.includes(innerField.unique_id)\">\r\n                                                <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                                </ng-template>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                    <div class=\"accordion-content row\" [hidden]=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\" *ngIf=\"field?.field_values[i]?.length > 0\">\r\n                                        <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                            <ng-container  *ngIf=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.subHeaderFields.includes(innerField.unique_id) && !repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.footerFields.includes(innerField.unique_id)\">\r\n                                                <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                                </ng-template>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                    <div class=\"accordion-footer row\" [hidden]=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.showSection\" *ngIf=\"field?.field_values[i]?.length > 0\">\r\n                                        <ng-container *ngFor=\"let innerField of field?.field_values[i]; index as innerPosition; trackBy: trackByIndex(i);\">\r\n                                            <ng-container  *ngIf=\"!repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.subHeaderFields.includes(innerField.unique_id) && repeatebleFieldsRows[i]?.[field.unique_id]?.accordionInfo.footerFields.includes(innerField.unique_id)\">                                            \r\n                                                <ng-template *ngTemplateOutlet=\"cellData; context:{field:innerField,position:position+'-'+innerPosition,i:i, activePosition: pos}\">\r\n                                                </ng-template>\r\n                                            </ng-container>\r\n                                        </ng-container>\r\n                                    </div>\r\n                                </section>\r\n                            </div>\r\n                        </ng-container>\r\n                    </ng-container>\r\n                    <ng-container *ngSwitchDefault>\r\n                        <ng-template *ngTemplateOutlet=\"cellData; context:{field:field,position:position,i:i, activePosition: pos}\">\r\n                        </ng-template>\r\n                    </ng-container>\r\n            </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"hideActionButton\">\r\n            <button *ngIf=\"remove_field_label !== 'none'\" [ngClass]=\"{'disabled-remove-btn': disableRemoveBtnIfArrayEmpty()}\" (click)=\"onDeleteBlock(i)\" [disabled]= \"!buttonEditable\" [attr.aria-label]=\"'Click on ' + remove_field_label \">{{remove_field_label}}</button>\r\n            </ng-container>\r\n        </section>\r\n    </ng-container>\r\n    <ng-container *ngIf=\"hideActionButton\">\r\n    <button *ngIf=\"add_more_field_label !== 'none'\" [ngClass]=\"{'disabled-add-btn': !buttonEditable || disableAddButton}\" [disabled]=\"!buttonEditable || disableAddButton\" (click)=\"onBlockAdd()\" [attr.aria-label]=\"'Click on ' + add_more_field_label \">{{add_more_field_label}}</button>\r\n    </ng-container>\r\n</ng-container>\r\n \r\n<ng-template #cellData let-field=\"field\" let-position=\"position\" let-i=\"i\" let-activePosition=\"activePosition\">\r\n    <ng-container [ngSwitch]=\"field.field_type\">\r\n        <ng-container *ngSwitchCase=\"'label'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition, activePosition: activePosition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Textfield'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Autocomplete Textfield'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Textarea'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Date'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'radio'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Menu'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Checkbox'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Timepicker'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'PhoneNumber'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Picker'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Button'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true,\r\n                    mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition,\r\n                    primaryKeyIndex: {name: field.unique_id, value: repeatebleFieldsRows[i]?.[field.unique_id]?.['value'], type: 'repeatable', cellData: repeatebleFieldsRows[i]?.[field.unique_id]}}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Number'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Attachments'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Repeatable Block'\">\r\n            <repeatable-block-renderer [stepId]=\"stepId\" [rootData]=\"rootData\" [rowData]=\"repeatebleFieldsRows[i]?.[field.unique_id]\" [parentBlock]=\"fieldData.unique_id\" [parentPosition]=\"i\" [fieldData]=\"field\" [templateId]=\"templateId\" class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n            </repeatable-block-renderer>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Table'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], sectionData: field }\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n        \r\n        <ng-container *ngSwitchCase=\"'Table-V2'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], sectionData: field }\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'List'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], sectionData: field, type: field.field_type }\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Switch'\">\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n        <ng-container *ngSwitchCase=\"'Editor'\">\r\n            <!-- <app-cee-editor [stepId]=\"stepId\" [rowData]=\"repeatebleFieldsRows[i][field.unique_id]\" [fieldData]=\"field\" [keepState]=\"true\" class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap):''}}\"\r\n                [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n            </app-cee-editor> -->\r\n            <div class=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\">\r\n                <ng-container *ngComponentOutlet=\"componentMap[field.field_type] | async;\r\n                inputs: {stepId: stepId, rootData: rootData, rowData: repeatebleFieldsRows[i]?.[field.unique_id], fieldData: field, keepState: true, mandatoryCondition: mandatoryCondition, editableCondition: editableCondition, visibleCondition: visibleCondition}\"\r\n                ></ng-container>\r\n            </div>\r\n        </ng-container>\r\n \r\n    </ng-container>\r\n</ng-template>\r\n \r\n " }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.HttpClient }, { type: i3.AppDataService }, { type: i4.ApiDataService }, { type: i5.CEEInternalEmitterService }, { type: i6.SharedEventsServiceService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.WfeStepLoaderService }, { type: i10.AccordionService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }, { type: i12.CeeApiService }, { type: i0.NgZone }, { type: i13.WebworkerService }, { type: i0.Renderer2 }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], templateId: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], rootData: [{
            type: Input
        }], parentPosition: [{
            type: Input
        }], rowData: [{
            type: Input
        }], parentBlock: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(RepeatableBlockRendererComponent, { className: "RepeatableBlockRendererComponent", filePath: "lib\\components\\repeatable-block-renderer\\repeatable-block-renderer.component.ts", lineNumber: 58 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVwZWF0YWJsZS1ibG9jay1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9yZXBlYXRhYmxlLWJsb2NrLXJlbmRlcmVyL3JlcGVhdGFibGUtYmxvY2stcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvcmVwZWF0YWJsZS1ibG9jay1yZW5kZXJlci9yZXBlYXRhYmxlLWJsb2NrLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQXFCLEtBQUssRUFBeUYsVUFBVSxFQUEyQixNQUFNLGVBQWUsQ0FBQztBQUloTSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFFMUQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sc0NBQXNDLENBQUM7QUFDM0UsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBQ25FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLDREQUE0RCxDQUFDO0FBRWpHLE9BQU8sRUFBRSxJQUFJLEVBQVMsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFeEQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFNOUUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFDckUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLDRCQUE0QixDQUFDO0FBQ3RELE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFB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SSwyQkFBMkIsY0FHekIsSUFBSSxXQUNQLENBQUMscUJBQXFCLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQywwQkFBMEIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO2dmQUtoTCxNQUFNO2tCQUF0QixLQUFLO1lBQ1csU0FBUztrQkFBekIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLO1lBQ0csY0FBYztrQkFBdEIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLFdBQVc7a0JBQW5CLEtBQUs7O2tGQVpHLGdDQUFnQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgUmVuZGVyZXIyLCBPbkluaXQsIElucHV0LCBDaGFuZ2VEZXRlY3RvclJlZiwgTmdab25lLCBPbkRlc3Ryb3ksIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgSG9zdExpc3RlbmVyLCBWaWV3UmVmLCBmb3J3YXJkUmVmLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEZsYXRVbmZsYXQgfSBmcm9tICcuLi8uLi91dGlscy9mbGF0LXVuZmxhdC1qc29uJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9hbGVydC1tb2RhbC9hbGVydC1tb2RhbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25hbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtY29uZGl0aW9uYWwtdXRpbCc7XHJcbmltcG9ydCB7IFJlcGVhdGFibGVCbG9ja0RhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvcmVwZWF0YWJsZS1ibG9jay1kYXRhL3JlcGV0YWJsZUJsb2NrRGF0YS51dGlsJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IHRha2UsIGRlbGF5LCBjb25jYXRNYXAgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IEFwcERhdGEgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEubW9kZWwnO1xyXG5pbXBvcnQgeyBXRkVFdmVudExpc3RIYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWV2ZW50LWxpc3QtaGFuZGxlci11dGlsJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBc3NvY2lhdGVkTWFwVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2Fzc29jaWF0ZWQtbWFwLXV0aWxzJztcclxuaW1wb3J0IHsgVW5kb1JlZG8gfSBmcm9tICcuLi8uLi91dGlscy91bmRvLXJlZG8udXRpbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IEFQSUtleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9hcGkta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBDaGlsZENvbmRpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jaGlsZENvbmRpdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpc09iamVjdCB9IGZyb20gJ0BkYXRvcmFtYS9ha2l0YSc7XHJcbmltcG9ydCB7IFNldEFQSUNhbGxiYWNrRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3NldC1hcGktY2FsbGJhY2stZGF0YS11dGlsJztcclxuLy8gaW1wb3J0IHsgQ2VlQXR0YWNobWVudHNDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1hdHRhY2htZW50cy9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlTnVtYmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbnVtYmVyL2NlZS1udW1iZXIuY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlQnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uY29tcG9uZW50JztcclxuLy8gaW1wb3J0IHsgQ2VlUGhvbmVOdW1iZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1waG9uZS1udW1iZXIvY2VlLXBob25lLW51bWJlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVQaWNrZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1waWNrZXIvY2VlLXBpY2tlci5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVUaW1lUGlja2VyQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGltZS1waWNrZXIvY2VlLXRpbWUtcGlja2VyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZUNoZWNrYm94Q29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtY2hlY2tib3gvY2VlLWNoZWNrYm94LmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZVJhZGlvQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcmFkaW8vY2VlLXJhZGlvLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZURhdGVDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1kYXRlL2NlZS1kYXRlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdDbGFzcywgTmdTd2l0Y2ggfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG4vLyBpbXBvcnQgeyBDZWVUZXh0YXJlYUNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRleHRhcmVhL2NlZS10ZXh0YXJlYS5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVUZXh0ZmllbGRDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10ZXh0ZmllbGQvY2VlLXRleHRmaWVsZC5jb21wb25lbnQnO1xyXG4vLyBpbXBvcnQgeyBDZWVMYWJlbENvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBWaWV3UmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL3ZpZXctcmVuZGVyZXIvdmlldy1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IGRlZmVyLCBTdWJzY3JpcHRpb24sIG9mIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IER5bmFtaWNMYWJlbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9keW5hbWljLWxhYmVsLXV0aWwnO1xyXG5pbXBvcnQgeyBBY2NvcmRpb25SZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL2FjY29yZGlvbi1yZW5kZXJlci9hY2NvcmRpb24tcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgV2Vid29ya2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dlYi13b3JrZXItc2VydmljZSc7XHJcbmltcG9ydCB7IFBST0NFU1NfU0NSSVBUIH0gZnJvbSAnLi9yZXBlYXRhYmxlLWJsb2NrLXByb2Nlc3NEYXRhd29ya2VyJztcclxuaW1wb3J0IHsgR2VuZXJpY0Jsb2NrUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9nZW5lcmljLWJsb2NrLXJlbmRlcmVyL2dlbmVyaWMtYmxvY2stcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY29yZGlhbi1zZXJ2aWNlcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAncmVwZWF0YWJsZS1ibG9jay1yZW5kZXJlcicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vcmVwZWF0YWJsZS1ibG9jay1yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9yZXBlYXRhYmxlLWJsb2NrLXJlbmRlcmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW1ZpZXdSZW5kZXJlckNvbXBvbmVudCwgTmdTd2l0Y2gsIE5nQ2xhc3MsIE1hdEZvcm1GaWVsZE1vZHVsZSwgRm9ybXNNb2R1bGUsIENvbW1vbk1vZHVsZSwgZm9yd2FyZFJlZigoKSA9PiBBY2NvcmRpb25SZW5kZXJlckNvbXBvbmVudCksIGZvcndhcmRSZWYoKCkgPT4gR2VuZXJpY0Jsb2NrUmVuZGVyZXJDb21wb25lbnQpXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgUmVwZWF0YWJsZUJsb2NrUmVuZGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuICAgIGF1dG9QcmV2aWV3Q29uZmlnUGF0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdFTkFCTEVfQVVUT19QUkVWSUVXJyk/LnRvTG93ZXJDYXNlKCkgPT0gXCJ0cnVlXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FVVE9fUFJFVklFV19DT05GSUdfUEFUSCcpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FVVE9fUFJFVklFV19DT05GSUdfUEFUSCcpIDogJ2Fzc2V0cy9jb25maWcnO1xyXG4gICAgY29uZmlnQmxvY2tQYXRoID0gdGhpcy5hdXRvUHJldmlld0NvbmZpZ1BhdGggKyAnL2FwcGxpY2F0aW9uX2Jsb2Nrcy9hcHBsaWNhdGlvbl9ibG9ja3NfJztcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgdGVtcGxhdGVJZDogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgcGFyZW50UG9zaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHBhcmVudEJsb2NrOiBhbnk7XHJcbiAgICBibG9ja1JlbmRlcmVkRGF0YTogYW55O1xyXG4gICAgY2hpbGRBcnIgPSBbXTtcclxuICAgIGFkZGl0aW9uYWxQYXJhbWV0ZXIgPSB7fTtcclxuICAgIGNvdW50ZXI6IGFueSA9IFt7IGFjdGl2ZTogdHJ1ZSB9XTtcclxuICAgIGNoaWxkQ291bnRlcjogYW55ID0ge307XHJcbiAgICBtYXhCbG9ja3NDb3VudCA9IDA7XHJcbiAgICByYWRpb1ZhbHVlOiBzdHJpbmc7XHJcbiAgICBjaGVja2VkSXRlbXM6IEFycmF5PGFueT47XHJcbiAgICBzdG9yZURhdGE6IGFueSA9IFtdO1xyXG4gICAgdHlwZSA9ICcnO1xyXG4gICAgcHJpdmF0ZSBzZWN0aW9uU3Vic2NyaXB0aW9uITogU3Vic2NyaXB0aW9uO1xyXG4gICAgaGlkZUFjdGlvbkJ1dHRvbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICAgYXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogdHJ1ZSxcclxuICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgcmVxdWVzdEFwaUtleTogW10sXHJcbiAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgY29uZGl0aW9uT2JqID0ge307XHJcbiAgICB2YXJpYWJsZU9iaiA9IHt9OyAvLyB2YXJpYWJsZU9iamVjdFxyXG4gICAgZGF0YU1hcCA9IHt9O1xyXG4gICAgcmVzcG9uc2VNYXAgPSB7fTtcclxuICAgIGlzRWRpdGFibGUgPSBmYWxzZTtcclxuICAgIGJ1dHRvbkVkaXRhYmxlID0gZmFsc2U7XHJcbiAgICBpc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIGlzTWFuZGF0b3J5ID0gZmFsc2U7XHJcbiAgICBibG9ja0lkID0gJyc7XHJcbiAgICBmbGF0dGVuOiBGbGF0VW5mbGF0O1xyXG4gICAgY29uZGl0aW9uYWxVdGlsOiBDb25kaXRpb25hbFV0aWw7XHJcbiAgICByZXBlYXRhYmxlQmxvY2tEYXRhVXRpbDogUmVwZWF0YWJsZUJsb2NrRGF0YTtcclxuICAgIGlzQXBpUmVzcG9uc2UgPSBmYWxzZTtcclxuICAgIGFkZF9tb3JlX2ZpZWxkX2xhYmVsID0gJ0FkZCc7XHJcbiAgICByZW1vdmVfZmllbGRfbGFiZWwgPSAnRGVsZXRlJztcclxuICAgIHdmZUV2ZW50TGlzdEhhbmRsZXI6IFdGRUV2ZW50TGlzdEhhbmRsZXI7XHJcbiAgICB1bmRvcmVkb1V0aWw6IFVuZG9SZWRvO1xyXG4gICAgYXNzb2NpYXRlZE1hcFV0aWw6IEFzc29jaWF0ZWRNYXBVdGlsOyAvLyBUT0RPOiBSZW1vdmUgdGhpcyBpbXBvcnQgYW5kIHVwZGF0ZSB0aGUgY29kZSBvbmNlIHRoZSBtYXAgY29tZXMgZnJvbSB0aGUgV0ZFIEVuZFxyXG4gICAgaXNfYm9vdHN0cmFwOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG4gICAgYXBpS2V5VXRpbDogQVBJS2V5VXRpbDtcclxuXHJcbiAgICBsYXp5SW50ZXJ2YWw6IGFueSA9IFtdOyAgLy9zZXRJbnRlcnZhbCBmb3IgbGF6eSBsb2FkaW5nXHJcbiAgICBjb3VudGVyVGVtcDogYW55W10gPSBbXTtcclxuICAgIHByZXNldERhdGE6IGFueTtcclxuICAgIHNldEFwaUNhbGxCYWNrRGF0YVV0aWw6IFNldEFQSUNhbGxiYWNrRGF0YTtcclxuICAgIHJlcGVhdGVibGVGaWVsZHNSb3dzID0gW107XHJcbiAgICByZWFwZWF0YWJsZUxvYWRpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNlY3Rpb25DdXN0b21DbGFzcyA9IHt9O1xyXG4gICAgc2tpcExvYWRlciA9IGZhbHNlO1xyXG4gICAgZGVsaW1pdGVyID0gJyQnO1xyXG4gICAgbm9JZHM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBhZGRSb3dCeURlZmF1bHQ6IGFueSA9IHRydWU7XHJcbiAgICBlbmFibGVEZWxldGVMYXN0Um93OiBhbnkgPSBmYWxzZTtcclxuICAgIGNvbXBvbmVudExpc3QgPSB7fTtcclxuICAgIHN0b3JlQmxvY2tJZElmTnVsbDogYW55O1xyXG4gICAgY29tcG9uZW50TWFwID0ge1xyXG4gICAgICAgIGxhYmVsOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ2xhYmVsJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1sYWJlbC9jZWUtbGFiZWwuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlTGFiZWxDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydsYWJlbCddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgVGV4dGZpZWxkOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ1RleHRmaWVsZCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUZXh0ZmllbGQnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRleHRmaWVsZC9jZWUtdGV4dGZpZWxkLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRleHRmaWVsZENvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1RleHRmaWVsZCddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgJ0F1dG9jb21wbGV0ZSBUZXh0ZmllbGQnOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ0F1dG9jb21wbGV0ZSBUZXh0ZmllbGQnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnQXV0b2NvbXBsZXRlIFRleHRmaWVsZCddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYXV0by1jb21wbGV0ZS9jZWUtYXV0by1jb21wbGV0ZS5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVBdXRvQ29tcGxldGVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydBdXRvY29tcGxldGUgVGV4dGZpZWxkJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBUZXh0YXJlYTogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydUZXh0YXJlYSddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUZXh0YXJlYSddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGV4dGFyZWEvY2VlLXRleHRhcmVhLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRleHRhcmVhQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnVGV4dGFyZWEnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIERhdGU6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnRGF0ZSddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydEYXRlJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1kYXRlL2NlZS1kYXRlLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZURhdGVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydEYXRlJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICByYWRpbzogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydyYWRpbyddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydyYWRpbyddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcmFkaW8vY2VlLXJhZGlvLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVJhZGlvQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsncmFkaW8nXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIE1lbnU6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnTWVudSddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydNZW51J107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1tZW51L2NlZS1tZW51LmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZU1lbnVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydNZW51J10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBDaGVja2JveDogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydDaGVja2JveCddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydDaGVja2JveCddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtY2hlY2tib3gvY2VlLWNoZWNrYm94LmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUNoZWNrYm94Q29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnQ2hlY2tib3gnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFRpbWVwaWNrZXI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnVGltZXBpY2tlciddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUaW1lcGlja2VyJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10aW1lLXBpY2tlci9jZWUtdGltZS1waWNrZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlVGltZVBpY2tlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1RpbWVwaWNrZXInXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFBob25lTnVtYmVyOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ1Bob25lTnVtYmVyJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1Bob25lTnVtYmVyJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1waG9uZS1udW1iZXIvY2VlLXBob25lLW51bWJlci5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVQaG9uZU51bWJlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ1Bob25lTnVtYmVyJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBQaWNrZXI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1BpY2tlciddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtcGlja2VyL2NlZS1waWNrZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlUGlja2VyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnUGlja2VyJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBCdXR0b246IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnQnV0dG9uJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0J1dHRvbiddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlQnV0dG9uQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnQnV0dG9uJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBOdW1iZXI6IGRlZmVyKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY29tcG9uZW50TGlzdFsnTnVtYmVyJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ051bWJlciddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtbnVtYmVyL2NlZS1udW1iZXIuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlTnVtYmVyQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnTnVtYmVyJ10gPSBjO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSxcclxuICAgICAgICBBdHRhY2htZW50czogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydBdHRhY2htZW50cyddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydBdHRhY2htZW50cyddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYXR0YWNobWVudHMvY2VlLWF0dGFjaG1lbnRzLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZUF0dGFjaG1lbnRzQ29tcG9uZW50KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcG9uZW50TGlzdFsnQXR0YWNobWVudHMnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFRhYmxlOiBkZWZlcigoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBvbmVudExpc3RbJ1RhYmxlJ10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ1RhYmxlJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS10YWJsZS9jZWUtdGFibGUuY29tcG9uZW50JykudGhlbihtID0+IG0uQ2VlVGFibGVDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZSddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgJ1RhYmxlLVYyJzogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydUYWJsZS1WMiddKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZS1WMiddO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IGltcG9ydCgnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtdGFibGUtdjIvY2VlLXRhYmxlLXYyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkNlZVRhYmxlVjJDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydUYWJsZS1WMiddID0gYztcclxuICAgICAgICAgICAgICAgIHJldHVybiBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgTGlzdDogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydMaXN0J10pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudExpc3RbJ0xpc3QnXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSBpbXBvcnQoJy4uLy4uL2NvbXBvbmVudHMvbGlzdC1yZW5kZXJlci9saXN0LXJlbmRlcmVyLmNvbXBvbmVudCcpLnRoZW4obSA9PiBtLkxpc3RSZW5kZXJlckNvbXBvbmVudCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBvbmVudExpc3RbJ0xpc3QnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIFN3aXRjaDogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydTd2l0Y2gnXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnU3dpdGNoJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1zd2l0Y2gvY2VlLXN3aXRjaC5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVTd2l0Y2hDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydTd2l0Y2gnXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pLFxyXG4gICAgICAgIEVkaXRvcjogZGVmZXIoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jb21wb25lbnRMaXN0WydFZGl0b3InXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50TGlzdFsnRWRpdG9yJ107XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gaW1wb3J0KCcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1lZGl0b3IvY2VlLWVkaXRvci5jb21wb25lbnQnKS50aGVuKG0gPT4gbS5DZWVFZGl0b3JDb21wb25lbnQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21wb25lbnRMaXN0WydFZGl0b3InXSA9IGM7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RHluYW1pY0xhYmVsVXRpbDogRHluYW1pY0xhYmVsVXRpbDtcclxuICAgIGR1bW15QmxvY2tzID0ge307XHJcbiAgICByZXNldEluZGV4T25BZGRPclJlbW92ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgYWN0aXZlQmxvY2tzQ291bnQ6IG51bWJlciA9IDA7XHJcbiAgICBkaXNhYmxlQWRkQnV0dG9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBmb2N1c0NoaWxkVmlldzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCwgICAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYWNjb3JkaW9uU2VydmljZTogQWNjb3JkaW9uU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHB1YmxpYyBfY2VlQXBpU2VydmljZT86IENlZUFwaVNlcnZpY2UsICAgICAgICBcclxuICAgICAgICBwcml2YXRlIG5nWm9uZT86IE5nWm9uZSxcclxuICAgICAgICBwcml2YXRlIHdvcmtlclNlcnZpY2U/OiBXZWJ3b3JrZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgcmVuZGVyZXI/OiBSZW5kZXJlcjIsXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmZsYXR0ZW4gPSBuZXcgRmxhdFVuZmxhdChhcHBEYXRhU2VydmljZSk7XHJcblxyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxVdGlsID0gbmV3IENvbmRpdGlvbmFsVXRpbChcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZSwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsID0gbmV3IFJlcGVhdGFibGVCbG9ja0RhdGEoKTtcclxuXHJcbiAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyID0gbmV3IFdGRUV2ZW50TGlzdEhhbmRsZXIoXHJcbiAgICAgICAgICAgIF9jZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgd2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBhcGlEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLFxyXG4gICAgICAgICAgICBzbmFja0JhcixcclxuICAgICAgICAgICAgaHR0cFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy51bmRvcmVkb1V0aWwgPSBuZXcgVW5kb1JlZG8oKTtcclxuICAgICAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBpbXBvcnQgYW5kIHVwZGF0ZSB0aGUgY29kZSBvbmNlIHRoZSBtYXAgY29tZXMgZnJvbSB0aGUgV0ZFIEVuZFxyXG4gICAgICAgIHRoaXMuYXNzb2NpYXRlZE1hcFV0aWwgPSBuZXcgQXNzb2NpYXRlZE1hcFV0aWwoKTtcclxuICAgICAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgICAgIHRoaXMuYXBpS2V5VXRpbCA9IG5ldyBBUElLZXlVdGlsKCk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfYm9vdHN0cmFwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsID0gbmV3IFNldEFQSUNhbGxiYWNrRGF0YShhcGlEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsID0gbmV3IER5bmFtaWNMYWJlbFV0aWwoYXBpRGF0YVNlcnZpY2UsIGFwcERhdGFTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VHJhY2tCeUZ1bmN0aW9uKHBhcmFtOiBhbnkpIHtcclxuICAgICAgICByZXR1cm4gKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbT8uZmllbGRfdmFsdWVzW3BhcmFtXTtcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG4gICAgdHJhY2tCeUlkQmxvY2soaW5kZXg6IG51bWJlciwgaXRlbTogYW55KTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gaXRlbS5tZXNzYWdlX2NvZGU7XHJcbiAgICB9XHJcblxyXG4gICAgdHJhY2tCeUlkQ291bnRlcihpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGl0ZW0pO1xyXG4gICAgICAgIGNvbnN0IGxhc3RDaGFyID0gaXRlbS5tZXNzYWdlX2NvZGU/LnNsaWNlKC0xKTsgXHJcbiAgICAgICAgcmV0dXJuIGxhc3RDaGFyO1xyXG4gICAgfVxyXG5cclxuICAgIHRyYWNrQnlJbmRleChwYXJhbTogYW55KXtcclxuICAgICAgICByZXR1cm4gKGluZGV4OiBudW1iZXIsIGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyYW07XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICAvL0NvdW50cyBBY3RpdmUgUGFyZW50IGFuZCBDaGlsZCBCbG9ja3MgYW5kXHJcbiAgICBjb3VudEFjdGl2ZUJsb2NrcygpIHtcclxuICAgICAgICB0aGlzLm1heEJsb2Nrc0NvdW50ID0gdGhpcy5maWVsZERhdGEucmVwZWF0YWJsZV9ibG9ja19jb25maWd1cmF0aW9uLm5vX29mX2FsbG93ZWRfYmxvY2tzO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2hpbGRCbG9jaygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWN0aXZlQmxvY2tzQ291bnQgPSB0aGlzLmNoaWxkQ291bnRlclt0aGlzLnBhcmVudFBvc2l0aW9uXS5yZWR1Y2UoKGFjYywgcmVjKSA9PiByZWMuYWN0aXZlID8gYWNjICsgMSA6IGFjYywgMCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hY3RpdmVCbG9ja3NDb3VudCA9IHRoaXMuY291bnRlci5yZWR1Y2UoKGFjYywgcmVjKSA9PiByZWMuYWN0aXZlID8gYWNjICsgMSA6IGFjYywgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZGlzYWJsZUFkZEJ1dHRvbiA9IHRoaXMuYWN0aXZlQmxvY2tzQ291bnQgPT0gTnVtYmVyKHRoaXMubWF4QmxvY2tzQ291bnQpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEdldCBhbGwgZmllbGRzIGluIHRoZSBjdXJyZW50IHJlcGVhdGFibGUgYmxvY2tcclxuICAgIGdldEN1cnJlbnRCbG9ja0ZpZWxkcygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuYmxvY2tSZW5kZXJlZERhdGE/LmJsb2NrX2ZpZWxkcykge1xyXG4gICAgICAgICAgICByZXR1cm4gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcy5tYXAoZmllbGQgPT4gZmllbGQpO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBHZXQgZmllbGRzIGZvciBhIHNwZWNpZmljIHJvdy9wb3NpdGlvblxyXG4gICAgZ2V0RmllbGRzRm9yUG9zaXRpb24ocG9zaXRpb246IG51bWJlcikge1xyXG4gICAgICAgIGlmICghdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93c1twb3NpdGlvbl0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnJlcGVhdGVibGVGaWVsZHNSb3dzW3Bvc2l0aW9uXSkubWFwKChmaWVsZDogYW55KSA9PiBmaWVsZC5odG1sX2lkKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gR2V0IGFjdGl2ZSBibG9jayBjb3VudCBhbmQgZGF0YVxyXG4gICAgZ2V0QmxvY2tJbmZvID0gKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvdGFsQmxvY2tzOiB0aGlzLm1heEJsb2Nrc0NvdW50LFxyXG4gICAgICAgICAgICBhY3RpdmVCbG9ja3M6IHRoaXMuYWN0aXZlQmxvY2tzQ291bnQsXHJcbiAgICAgICAgICAgIGN1cnJlbnRSb3dzOiB0aGlzLnJlcGVhdGVibGVGaWVsZHNSb3dzLmxlbmd0aCxcclxuICAgICAgICAgICAgYmxvY2tJZDogdGhpcy5ibG9ja0lkLFxyXG4gICAgICAgICAgICBpc0NoaWxkQmxvY2s6IHRoaXMuaXNDaGlsZEJsb2NrKCksXHJcbiAgICAgICAgICAgIHBhcmVudFBvc2l0aW9uOiB0aGlzLnBhcmVudFBvc2l0aW9uXHJcbiAgICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gU2V0IHRoZSBjdXJyZW50IGJsb2NrIGRhdGEgaW4gdGhlIEFraXRhIHN0b3JlXHJcbiAgICBhc3luYyBzZXRDdXJyQmxvY2tBcHBEYXRhKGlkczogYW55W10sIG90aGVySW5mbykge1xyXG4gICAgICAgIGNvbnN0IGFwaURhdGE6IGFueSA9IHtcclxuICAgICAgICAgICAgZmllbGRzOiB7fSxcclxuICAgICAgICAgICAgaXNDaGlsZEJsb2NrOiBvdGhlckluZm8uaXNDaGlsZEJsb2NrLFxyXG4gICAgICAgICAgICBsaW5rZWRCbG9ja0lkOiBvdGhlckluZm8ubGlua2VkQmxvY2tJZCxcclxuICAgICAgICAgICAgcGFyZW50UG9zaXRpb246IG90aGVySW5mby5wYXJlbnRQb3NpdGlvbixcclxuICAgICAgICAgICAgcG9zaXRpb246IG90aGVySW5mby5wb3NpdGlvbixcclxuICAgICAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6IG90aGVySW5mby5yZXBlYXRlZEJsb2NrRmllbGRJZCxcclxuICAgICAgICAgICAgc3RlcElkOiBvdGhlckluZm8uc3RlcElkXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBlbnRpdGllc0J5UkI6IGFueSA9IGF3YWl0IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGRJZE1hcEZpZWxkVmFsdWVCeVJlcGVhdGVkQmxvY2tGaWVsZElkKG90aGVySW5mby5yZXBlYXRlZEJsb2NrRmllbGRJZClcclxuICAgICAgICBmb3IgKGNvbnN0IGlkIG9mIGlkcykge1xyXG4gICAgICAgICAgICBjb25zdCBhY3R1YWxJZCA9IGF3YWl0IGlkLnNwbGl0KFwiJFwiKVsxXTtcclxuICAgICAgICAgICAgYXBpRGF0YVsnZmllbGRzJ11bYWN0dWFsSWRdID0gYXdhaXQgZW50aXRpZXNCeVJCW2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcGlEYXRhIDo6OjpcIiwgYXBpRGF0YSk7XHJcbiAgICAgICAgLy8gU2V0IHRoZSBBUEkgZGF0YSBpbiB0aGUgQWtpdGEgc3RvcmVcclxuICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLnNldEFwaURhdGEoe1xyXG4gICAgICAgICAgICBpZDogJ1JlcGVhdGFibGVCbG9jay9DdXJyZW50SW5kZXgnLFxyXG4gICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgICAgICBhcGlLZXk6ICdSZXBlYXRhYmxlQmxvY2svQ3VycmVudEluZGV4JyxcclxuICAgICAgICAgICAgdmFsdWU6IE9iamVjdC5hc3NpZ24oe30sIGFwaURhdGEpLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMucHJlc2V0RGF0YSA9IHRoaXMucm93RGF0YTtcclxuICAgICAgICB0aGlzLm1heEJsb2Nrc0NvdW50ID0gdGhpcy5maWVsZERhdGEucmVwZWF0YWJsZV9ibG9ja19jb25maWd1cmF0aW9uLm5vX29mX2FsbG93ZWRfYmxvY2tzO1xyXG4gICAgICAgIHRoaXMuYmxvY2tJZCA9IHRoaXMuZmllbGREYXRhLnJlcGVhdGFibGVfYmxvY2tfY29uZmlndXJhdGlvbi5saW5rZWRfYmxvY2tfaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1NraXBMb2FkZXInOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNraXBMb2FkZXIgPSBwYXJhbXRlci52YWx1ZSA9PT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9BZGRfUm93X0J5X0RlZmF1bHQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFJvd0J5RGVmYXVsdCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0FkZF9Sb3dfQnlfRGVmYXVsdCddLnRvTG93ZXJDYXNlKCkgPT0gJ2ZhbHNlJyA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FbmFibGVfRGVsZXRlX0xhc3RfUm93J10pIHtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVEZWxldGVMYXN0Um93ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfRW5hYmxlX0RlbGV0ZV9MYXN0X1JvdyddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlOztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFJlc2V0IEFjdGl2ZUluZGV4IE9uIEFkZGluZyBvciBSZW1vdmluZyBSQlxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoJ0NFRV9SZXNldFJCSW5kZXhPbkFjdGlvbicpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVzZXRJbmRleE9uQWRkT3JSZW1vdmUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9SZXNldFJCSW5kZXhPbkFjdGlvbiddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gUmVzZXQgQWN0aXZlSW5kZXggT24gQWRkaW5nIG9yIFJlbW92aW5nIFJCXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eSgnQ0VFX1Njcm9sbEludG9WaWV3T25BY3Rpb24nKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZvY3VzQ2hpbGRWaWV3ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU2Nyb2xsSW50b1ZpZXdPbkFjdGlvbiddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYmxvY2tJZCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmJsb2NrSWQpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtIHJvd0RhdGE6IFwiLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiAtIHBhcmVudFBvc2l0aW9uOiBcIiwgdGhpcy5wYXJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIC0gcGFyZW50QmxvY2s6IFwiLCB0aGlzLnBhcmVudEJsb2NrKTtcclxuICAgICAgICAgICAgbGV0IG5ld0NvdW50OiBhbnkgPSB0aGlzLmFkZFJvd0J5RGVmYXVsdCA/IFt7IGFjdGl2ZTogdHJ1ZSwgYWN0aXZlSW5kZXg6IDEgfV0gOiBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YSAmJiB0aGlzLnByZXNldERhdGEudmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByZXNldERhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBuZXdDb3VudCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwSW5kZXggaW4gdGhpcy5wcmVzZXREYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3Q291bnQucHVzaCh7IGFjdGl2ZTogdHJ1ZSwgYWN0aXZlSW5kZXg6IE51bWJlcihwSW5kZXgpICsgMSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBnZXQgdGhlIG1heCBjb3VudCBmcm9tIHRoZSBsb2NhbCBzdG9yYWdlIGZvciB0aGUgcmVwZWF0YWJsZSBibG9jayAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNoaWxkQ291bnQgPSB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsLmxvY2FsU3RvcmFnZUdldE1heEJsb2NrQ291bnQodGhpcy5ibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb3VudCB8fCAhY2hpbGRDb3VudFt0aGlzLnBhcmVudFBvc2l0aW9uXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvdW50ID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghY2hpbGRDb3VudFt0aGlzLnBhcmVudFBvc2l0aW9uXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENvdW50W3RoaXMucGFyZW50UG9zaXRpb25dID0gbmV3Q291bnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0YWJsZUJsb2NrRGF0YVV0aWwubG9jYWxTdG9yYWdlU2V0TWF4QmxvY2tDb3VudCh0aGlzLmJsb2NrSWQsIGNoaWxkQ291bnQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudGVyVGVtcCA9IGNoaWxkQ291bnRbdGhpcy5wYXJlbnRQb3NpdGlvbl1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlclRlbXAgPSB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsLmxvY2FsU3RvcmFnZUdldE1heEJsb2NrQ291bnQodGhpcy5ibG9ja0lkKTtcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5jb3VudGVyVGVtcCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlclRlbXAgPSBuZXdDb3VudDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsLmxvY2FsU3RvcmFnZVNldE1heEJsb2NrQ291bnQodGhpcy5ibG9ja0lkLCB0aGlzLmNvdW50ZXJUZW1wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRlclNlcnZpY2Uuc2tpcExvYWRpbmcgPSB0aGlzLnNraXBMb2FkZXI7XHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc091dHNpZGVPZkFuZ3VsYXJab25lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdsaW5rZWRfYmxvY2tfaWQgbm90IGZvdW5kJylcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZWRpdGFibGUgPT09IDEpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25FZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmZpZWxkRGF0YS5pc19tYW5kYXRvcnkgPT09IDEpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5pc01hbmRhdG9yeSA9IHRydWU7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBjcmVhdGUgdGhlIGFzc29jaWF0ZWQgbWFwXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2VkaXRhYmxlID09PSAyIHx8IHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRBc3NvY2lhdGVkTWFwKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW1xyXG4gICAgICAgICAgICAnZXZlbnREZWxldGVTdWJzY3JpYmVyXycgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRcclxuICAgICAgICBdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmV2ZW50RGVsZXRlUmVwZWF0ZWRCbG9ja1N1YnNjcmliZXIuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMucHJpbWFyeURhdGEudmFsdWU/LnJlcGVhdGVkQmxvY2tGaWVsZElkID09PSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQmxvY2socmVzLnByaW1hcnlEYXRhLnZhbHVlPy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9ialtcclxuICAgICAgICAgICAgJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZFxyXG4gICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnN0ZXBMb2FkZXJFbWl0dGVyLmVtaXQoe1wiYmxvY2tJZFwiOiB0aGlzLmJsb2NrSWR9KTtcclxuICAgICAgICAgICAgbGV0IHJlcGVhdGVkQmxvY2tGaWVsZElkRnJvbVJlcyA9IHJlc1tgJHtyZXMuaGFuZGxlcl9uYW1lfSMjZGF0YS5wcmltYXJ5RGF0YS5yZXBlYXRlZEJsb2NrRmllbGRJZGBdO1xyXG4gICAgICAgICAgICBpZihyZXBlYXRlZEJsb2NrRmllbGRJZEZyb21SZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcGVhdGVkQmxvY2tGaWVsZElkRnJvbVJlcyAhPT0gdGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIiAtIE5PVCBteSBibG9ja0lkOlwiLCB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIFwiICE9IFwiLCByZXBlYXRlZEJsb2NrRmllbGRJZEZyb21SZXMpOyAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGlzIGNhbmNlbCBldmVudFxyXG4gICAgICAgICAgICAgICAgbGV0IGlzQ2FuY2VsRXZlbnQgPSByZXNbYCR7cmVzLmhhbmRsZXJfbmFtZX0jI2RhdGEucHJpbWFyeURhdGEuaXNDYW5jZWxFdmVudGBdO1xyXG4gICAgICAgICAgICAgICAgaWYoaXNDYW5jZWxFdmVudCA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuY291bnRlclRlbXAubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3QWRkaXRpb25DYW5jZWwgPSB0aGlzLmNvdW50ZXJUZW1wW3RoaXMuY291bnRlclRlbXAubGVuZ3RoLTFdPy5hY3RpdmVJbmRleCA9PSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihuZXdBZGRpdGlvbkNhbmNlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tIHJldmVydGluZyBuZXcgYWRkaXRpb24gY2FuY2VsbGF0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXp5TG9hZGluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIi0tIHJldmVydGluZyBleGlzdGluZyBjYW5jZWxsYXRpb25cIik7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2F5LTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB3YXktMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gbGV0IHVuaXF1ZV9pZCA9IHJlc1tgJHtyZXMuaGFuZGxlcl9uYW1lfSMjZGF0YS5wcmltYXJ5RGF0YS51bmlxdWVfaWRgXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBwb3NpdGlvbkZyb21SZXMgPSByZXNbYCR7cmVzLmhhbmRsZXJfbmFtZX0jI2RhdGEucHJpbWFyeURhdGEucG9zaXRpb25gXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmKHVuaXF1ZV9pZCAmJiBwb3NpdGlvbkZyb21SZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBwb3NpdGlvbkZyb21SZXMgPSBOdW1iZXIocG9zaXRpb25Gcm9tUmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBsZXQgZ0Jsb2NrSWQgPSB1bmlxdWVfaWQuc3BsaXQoXCIkXCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMucHJvY2Vzc1Jvd0RhdGEodGhpcy5jb3VudGVyVGVtcCwgcG9zaXRpb25Gcm9tUmVzLCBnQmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgLy8gVHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgaWYgKHRoaXMuY2RyICYmICEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0tIHJiIGlzIHVuZGVmaW5lZFwiKTtcclxuICAgICAgICAgICAgICAgIC8vIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IHRoaXMuZmxhdHRlbi5mbGF0dGVuSlNPTihyZXMpO1xyXG4gICAgICAgICAgICAvLyBUaGUgZGF0YSBpcyByZXNldCB0byByZW1vdmUgaW5uZXIgZG9tcyBhbHJlYWR5IHJlbmRlcmVkLlxyXG4gICAgICAgICAgICAvLyBJZiBub3QgZG9uZSB0aGUgdmFsdWVzIGZyb20gQVBJIHdpbGwgbm90IGdldCByZWZsZWN0ZWQuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrSWZSZXNIYXNSZXBlYXRlZERhdGEocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIi0gWUVTIG15IGJsb2NrSWQgYW5kIGtleTpcIiwgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0ZpZWxkTG9hZFN0YWNrJ11bJ2FkZCddKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmRhdGFNYXAgPSB7fTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzcG9uc2VNYXAgPSB7fTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdBUEkgUkVTUE9OU0UnLCByZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXIgPSBbXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRDb3VudGVyID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcmVuZGVyIGFjY29yZGlvbnMnIGluZm8tYmxvY2tzIHdoZW4gYSBuZXcgcGFyZW50IHJlcGVhdGFibGUgYmxvY2sgaXMgYWRkZWRcclxuICAgICAgICAgICAgICAgIGxldCBvbGRMZW5ndGggPSB0aGlzLmNvdW50ZXJUZW1wLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlclRlbXAgPSB0aGlzLmdldE1heEluZGV4KHJlc3BvbnNlKTsgIC8vIGV4aXN0aW5nIGxpbmUgIFxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRlclRlbXAubGVuZ3RoID4gb2xkTGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGREdW1teUJsb2Nrc0Zvck5ld2x5QWRkZWRBY2NvcmRpb24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNjOiBcIiwgKHRoaXMuaXNDaGlsZEJsb2NrKCkpID8gdGhpcy5jaGlsZENvdW50ZXIgOiB0aGlzLmNvdW50ZXJUZW1wKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jvd0RhdGEodGhpcy5jb3VudGVyVGVtcCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBjb3VudGVyICR7dGhpcy5jb3VudGVyRGF0YX1gKTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGAke3RoaXMuZmllbGREYXRhLmFwaV9rZXl9IGNvdW50ICR7dGhpcy5jb3VudGVyfWAsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsLmxvY2FsU3RvcmFnZVNldE1heEJsb2NrQ291bnQodGhpcy5ibG9ja0lkLCAodGhpcy5pc0NoaWxkQmxvY2soKSkgPyB0aGlzLmNoaWxkQ291bnRlciA6IHRoaXMuY291bnRlclRlbXApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnRmllbGRMb2FkU3RhY2snXVsncmVtb3ZlJ10oKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLmNoZWNrSWZSZXNIYXNCbGFua0RhdGEocmVzcG9uc2UpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWxsQmxvY2tSZW1vdmUoW3RoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uQ2hlY2sobnVsbCk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMubGFiZWxJbmZvQ2hlY2socmVzKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9ialtcclxuICAgICAgICAgICAgJ3JlcGVhdGFibGVCbG9ja1Nlc3Npb25DbGVhcmFuY2VFbWl0dGVyXycgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRcclxuICAgICAgICBdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnJlcGVhdGFibGVCbG9ja1Nlc3Npb25DbGVhcmFuY2VFbWl0dGVyLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQWxsQmxvY2tSZW1vdmUoW3Jlc10pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgICAgICdhc3NvY2lhdGVkUmVwZWF0YWJsZUJsb2NrU2Vzc2lvbkNsZWFyYW5jZUVtaXR0ZXJfJyArIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZFxyXG4gICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuYXNzb2NpYXRlZFJlcGVhdGFibGVCbG9ja1Nlc3Npb25DbGVhcmFuY2VFbWl0dGVyLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZElkID0gdGhpcy5hc3NvY2lhdGVkTWFwVXRpbC5nZXRBc3NvY2lhdGVkQmxvY2tCeUlkKHRoaXMudW5kb3JlZG9VdGlsLmdldEN1cnJlbnRJZCgpKTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFsbEJsb2NrUmVtb3ZlKG5ldyBBcnJheShmaWVsZElkKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnY3VycmVudFJlcGVhdGFibGVCbG9ja0VtaXR0ZXJfJyArIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF1cclxuICAgICAgICAgICAgPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UucmJDdXJyZW50SW5kZXguc3Vic2NyaWJlKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEdldCBibG9jayBpbmZvXHJcbiAgICAgICAgICAgICAgICBjb25zdCBibG9ja0luZm8gPSB0aGlzLmdldEJsb2NrSW5mbygpO1xyXG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGxpbmtlZEJsb2NrSWQgbWF0Y2hlcyB0aGUgY3VycmVudCBibG9ja0lkXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmxpbmtlZEJsb2NrSWQgPT0gdGhpcy5ibG9ja0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGN1cnJlbnQgYmxvY2sgaXMgYSBjaGlsZCBibG9ja1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYmxvY2tJbmZvLmlzQ2hpbGRCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkc0ZvclBvc2l0aW9uKHJlcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDdXJyQmxvY2tBcHBEYXRhKGZpZWxkcywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIGl0J3MgYSBjaGlsZCBibG9jaywgY2hlY2sgaWYgdGhlIHBhcmVudFBvc2l0aW9uIG1hdGNoZXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5wYXJlbnRQb3NpdGlvbiA9PT0gYmxvY2tJbmZvLnBhcmVudFBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBHZXQgZmllbGRzIGJ5IHBvc2l0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZHMgPSB0aGlzLmdldEZpZWxkc0ZvclBvc2l0aW9uKHJlcy5wb3NpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEN1cnJCbG9ja0FwcERhdGEoZmllbGRzLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gVE9ETzogU2V0IENvbmRpdGlvbmFsIFZhbHVlIG9uIHRoZSBSZXBlYXRhYmxlIEJsb2NrXHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9ialsnZW1pdE9uRGF0YVNldE9yVXBkYXRlZF8nICsgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLm9uRmllbGREYXRhVXBkYXRlZChyZXMuYXBpS2V5LCByZXMudmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3JlbmRlclR5cGUnXSkge1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3JlbmRlclR5cGUnXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgYXBwIGRhdGEgdG8gdGhlIGFraXRhIHN0b3JlXHJcbiAgICAgICAgdGhpcy5yYWRpb1ZhbHVlID0gJzAnO1xyXG4gICAgICAgIHRoaXMuc3RvcmVEYXRhID0gWzBdO1xyXG5cclxuICAgICAgICB0aGlzLmFwcERhdGEuaWQgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLm1hbmRhdG9yeSA9IHRoaXMuaXNNYW5kYXRvcnk7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLnN0ZXBJZCA9IHRoaXMuc3RlcElkO1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5hcGlLZXkgPSB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gdGhpcy5maWVsZERhdGEuYXBpX2tleSA6ICcnO1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5yZXNwb25zZUFwaUtleSA9IHRoaXMuaXNTaW5nbGVBUElLZXkgPyBbXSA6XHJcbiAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXModGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpO1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5yZXF1ZXN0QXBpS2V5ID0gdGhpcy5pc1NpbmdsZUFQSUtleSA/IFtdIDogdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpO1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5lZGl0YWJsZSA9IHRoaXMuaXNFZGl0YWJsZTtcclxuICAgICAgICB0aGlzLmFwcERhdGEudmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YS52YWx1ZSA9ICh0aGlzLnR5cGUgPT09ICdTaW5nbGUnID8gdGhpcy5zdG9yZURhdGFbMF0gOiB0aGlzLnR5cGUgPT09ICcnID8gJycgOiB0aGlzLnN0b3JlRGF0YSk7XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGREYXRhLmh0bWxfaWQgPSB0aGlzLnByZXNldERhdGEgP1xyXG4gICAgICAgICAgICAodGhpcy5wcmVzZXREYXRhLmh0bWxfaWQgPyB0aGlzLnByZXNldERhdGEuaHRtbF9pZCA6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkgOiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLmxpbmtlZEJsb2NrSWQgPSB0aGlzLnByZXNldERhdGEgPyAodGhpcy5wcmVzZXREYXRhLmxpbmtlZEJsb2NrSWQgPyB0aGlzLnByZXNldERhdGEubGlua2VkQmxvY2tJZCA6IHRoaXMuZmllbGREYXRhWydyZXBlYXRhYmxlX2Jsb2NrX2NvbmZpZ3VyYXRpb24nXVsnbGlua2VkX2Jsb2NrX2lkJ10pIDogdGhpcy5maWVsZERhdGFbJ3JlcGVhdGFibGVfYmxvY2tfY29uZmlndXJhdGlvbiddWydsaW5rZWRfYmxvY2tfaWQnXTtcclxuICAgICAgICB0aGlzLmFwcERhdGEucmVwZWF0ZWRCbG9ja0ZpZWxkSWQgPSB0aGlzLnByZXNldERhdGEgP1xyXG4gICAgICAgICAgICAodGhpcy5wcmVzZXREYXRhLnJlcGVhdGVkQmxvY2tGaWVsZElkID8gdGhpcy5wcmVzZXREYXRhLnJlcGVhdGVkQmxvY2tGaWVsZElkIDogJycpIDogJyc7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgKHRoaXMucHJlc2V0RGF0YSkgPT09ICdvYmplY3QnICYmIHRoaXMucHJlc2V0RGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhLnVuaXF1ZV9pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLmlkID0gdGhpcy5wcmVzZXREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhLm1hbmRhdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLm1hbmRhdG9yeSA9IHRoaXMucHJlc2V0RGF0YS5tYW5kYXRvcnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLmVkaXRhYmxlID0gdGhpcy5wcmVzZXREYXRhLmVkaXRhYmxlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXNldERhdGEudmlzaWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLnZpc2libGUgPSB0aGlzLnByZXNldERhdGEudmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnZhbGlkYXRlU3RhdGUodGhpcy5hcHBEYXRhKTtcclxuXHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhZGRfbW9yZV9maWVsZF9sYWJlbCxcclxuICAgICAgICAgICAgcmVtb3ZlX2ZpZWxkX2xhYmVsXHJcbiAgICAgICAgfSA9IHRoaXMuZmllbGREYXRhLnJlcGVhdGFibGVfYmxvY2tfY29uZmlndXJhdGlvblxyXG5cclxuICAgICAgICBpZiAoYWRkX21vcmVfZmllbGRfbGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5hZGRfbW9yZV9maWVsZF9sYWJlbCA9IGFkZF9tb3JlX2ZpZWxkX2xhYmVsXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChyZW1vdmVfZmllbGRfbGFiZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVfZmllbGRfbGFiZWwgPSByZW1vdmVfZmllbGRfbGFiZWxcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0ICYmIHRoaXMuZmllbGREYXRhLmV2ZW50X2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5maWVsZERhdGEuZXZlbnRfbGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQuaXNEZWZhdWx0ICYmIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ29uTG9hZCcudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCB0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGVtaXRPYmogPSBudWxsO1xyXG4gICAgICAgIGlmIChTdHJpbmcodGhpcy5hcHBEYXRhLmlkKS5zcGxpdCgnJCcpLmxlbmd0aCA9PT0gMykge1xyXG4gICAgICAgICAgICBlbWl0T2JqID0ge1xyXG4gICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmFwcERhdGEubGlua2VkQmxvY2tJZCA/IHRoaXMuYXBwRGF0YS5pZCA6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmFwcERhdGEudmFsdWUsXHJcbiAgICAgICAgICAgICAgICBpbmRleDogU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkuc3BsaXQoJyQnKVsyXVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVtaXRPYmogPSB7XHJcbiAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuYXBwRGF0YS5saW5rZWRCbG9ja0lkID8gdGhpcy5hcHBEYXRhLmlkIDogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuYXBwRGF0YS52YWx1ZVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5lbWl0KGVtaXRPYmopO1xyXG5cclxuICAgICAgICAvLyB0aGlzLnNlY3Rpb25TdWJzY3JpcHRpb24gPSB0aGlzLmFjY29yZGlvblNlcnZpY2Uuc2VjdGlvbk9wZW4kLnN1YnNjcmliZShzZWN0aW9uSWQgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZyhcImVudGVyZWQgdGhyb3VnaCBzZXJ2aWNlXCIpOyAgICAgICAgXHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGDwn5OiIFJlY2VpdmVkIHJlcXVlc3QgdG8gb3BlbiBzZWN0aW9uOiAke3NlY3Rpb25JZH1gKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChzZWN0aW9uSWQpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGNvbnN0IGFwaUtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzZWxlY3RlZEFwaUtleScpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vdGhpcy5maWVsZERhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5QXBpS2V5KGFwaUtleSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLy90aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkSWRNYXBGaWVsZFZhbHVlQnlSZXBlYXRlZEJsb2NrRmllbGRJZFxyXG4gICAgICAgIC8vICAgICAgICAgICAgIC8vdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUFwaUtleShcInNhbXBsZSBhcGkga2V5IHNhZFwiKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLm9wZW5BY2NvcmRpb25DbGlja2VkTmV3KHNlY3Rpb25JZCwwKTtcclxuICAgICAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmFjY29yZGlvblNlcnZpY2Uuc2VjdGlvbk9wZW5XaXRoUGFyZW50JC5zdWJzY3JpYmUoKHsgc2VjdGlvbklkcywgcGFyZW50SWQsIGRlZmF1bHRWYWx1ZSwgaUNvdW50ZXJ9KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIOKchSBVc2UgcGFyZW50SWQgYW5kIHNlY3Rpb25zIHRvZ2V0aGVyXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChzZWN0aW9uSWRzKTtcclxuICAgICAgICAgICAgY29uc3QgYXBpS2V5ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NlbGVjdGVkQXBpS2V5Jyk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5maWVsZERhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5QXBpS2V5KGFwaUtleSk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZElkTWFwRmllbGRWYWx1ZUJ5UmVwZWF0ZWRCbG9ja0ZpZWxkSWRcclxuICAgICAgICAgICAgLy90aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5QXBpS2V5KFwic2FtcGxlIGFwaSBrZXkgc2FkXCIpO1xyXG4gICAgICAgICAgICB0aGlzLm9wZW5BY2NvcmRpb25DbGlja2VkTmV3KHBhcmVudElkLHNlY3Rpb25JZHMsZGVmYXVsdFZhbHVlLGlDb3VudGVyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuQWNjb3JkaW9uQ2xpY2tlZE5ldyhibG9ja0lkOiBhbnksIHVuaXF1ZUlkOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpQ291bnRlcj86IG51bWJlcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiVEVTVCBwYXJlbnRCbG9jayAtIFwiLCBibG9ja0lkKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIlRFU1QgdW5pcXVlSWQgLSBcIiwgdW5pcXVlSWQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKGlDb3VudGVyID09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICBpQ291bnRlciA9IDA7ICAgXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc3QgZHVtbXlCbG9jayA9IFwiYmxvY2tfMzQ2MTJfbGl2aW5nX2FkZHJlc3NcIjtcclxuICAgICAgICBjb25zdCBkdW1teUJsb2NrID0gZGVmYXVsdFZhbHVlO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUoYmxvY2tJZCkuc3Vic2NyaWJlKChibG9ja0RhdGEpID0+IHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxvYWRlZCBCbG9jayBEYXRhOiBcIiwgYmxvY2tEYXRhKTtcclxuICAgICAgICAgICAgbGV0IGxvYWRlZEJsb2NrOiBhbnkgPSBibG9ja0RhdGE7XHJcbiAgICAgICAgICAgIC8vIEZpbmQgcG9zaXRpb24gb2YgZmllbGQgd2l0aCBtYXRjaGluZyB1bmlxdWVJZFxyXG4gICAgICAgICAgICBsZXQgZmllbGRJbmRleCA9IGxvYWRlZEJsb2NrPy5ibG9ja19maWVsZHM/LmZpbmRJbmRleCgoZmllbGQ6IGFueSkgPT4gZmllbGQudW5pcXVlX2lkID09PSB1bmlxdWVJZCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJURVNUIGZpZWxkSW5kZXgtIFwiLCBmaWVsZEluZGV4KTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkSW5kZXggIT09IC0xICYmIGR1bW15QmxvY2spIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdCbG9ja0lkID0gZHVtbXlCbG9jaztcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IGZpZWxkSW5kZXg7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlQmxvY2tJZElmTnVsbCA9IGdCbG9ja0lkO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxvYWRpbmcgYmxvY2sgYXQgcG9zaXRpb246XCIsIHBvcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZFJlcGVhdEJsb2NrKGdCbG9ja0lkLCBwb3MsIGlDb3VudGVyLCBcIlwiKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS53YXJuKGBGaWVsZCB3aXRoIHVuaXF1ZV9pZCAnJHt1bmlxdWVJZH0nIG5vdCBmb3VuZCBvciBkdW1teUJsb2NrIGlzIG1pc3NpbmdgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLy8gb3BlbkFjY29yZGlvbkNsaWNrZWROZXcoYmxvY2tJZDogYW55LCBwb3M6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIHJlbW92ZSBpbml0aWFsIGZpZWxkX3ZhbHVlcyB0aGF0IGFyZSBjb25maWd1cmVkIG9yaWdpbmFsbHlcclxuICAgIC8vICAgICBjb25zb2xlLmxvZyhcIlRFU1QgcGFyZW50QmxvY2sgLSBcIiwgdGhpcy5wYXJlbnRCbG9jayk7XHJcbiAgICAvLyAgICAgY29uc29sZS5sb2coXCJURVNUIHBhcmVudFBvc2l0aW9uLSBcIiwgdGhpcy5wYXJlbnRQb3NpdGlvbik7XHJcbiAgICAvLyAgICAgLy90aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZShcIlwiKTtcclxuICAgIC8vICAgICAgICAgbGV0IGR1bW15QmxvY2sgPSBcImJsb2NrXzM0NjEyX2xpdmluZ19hZGRyZXNzXCI7XHJcblxyXG4gICAgLy8gICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSgnYmxvY2tfMzQ2MTJfYXBwbGljYW50X2RldGFpbHMnKS5zdWJzY3JpYmUoKGJsb2NrRGF0YSkgPT4ge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJMb2FkZWQgQmxvY2sgRGF0YTogXCIsIGJsb2NrRGF0YSk7XHJcbiAgICAvLyAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBibG9jayBkYXRhIGFzIG5lZWRlZFxyXG4gICAgLy8gICAgICAgICB9KTtcclxuICAgIC8vICAgICAgICAgaWYoZHVtbXlCbG9jaykge1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IGdCbG9ja0lkID0gXCJibG9ja18zNDYxMl9saXZpbmdfYWRkcmVzc1wiO1xyXG4gICAgLy8gICAgICAgICAgICAgbGV0IHBvcyA9IDg7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLnN0b3JlQmxvY2tJZElmTnVsbCA9IGdCbG9ja0lkO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJsb2FkaWcgYmxvY2suLi5cIik7XHJcbiAgICAvLyAgICAgICAgICAgICB0aGlzLm9uTG9hZFJlcGVhdEJsb2NrKGdCbG9ja0lkLCBwb3MsIDAsIFwiXCIpO1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZCByZWFjaGVkXCIpO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICAgIGxhYmVsSW5mb0NoZWNrKGRhdGE6IGFueSkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCByb3dEYXRhTGlzdCA9IHRoaXMucmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV07XHJcbiAgICAgICAgICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCB0aGlzLmJsb2NrUmVuZGVyZWREYXRhPy5ibG9ja19maWVsZHMubGVuZ3RoOyBwb3NpdGlvbisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzW3Bvc2l0aW9uXTtcclxuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnQWNjb3JkaW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd0RhdGFMaXN0W2ZpZWxkLnVuaXF1ZV9pZF1bJ2FjY29yZGlvbkluZm8nXSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmllbGQuYWNjb3JkaW9uSW5mbykpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXVsnYWNjb3JkaW9uSW5mbyddLmNvbmZpZ19uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGlmKG5hbWUuaW5jbHVkZXMoJyVyZXBlYXRhYmxlUG9zJScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGxldCBuZXdOYW1lID0gbmFtZS5yZXBsYWNlKCclcmVwZWF0YWJsZVBvcyUnLCAoaSArIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgdmFyIGtleSA9IHJvd0RhdGFMaXN0W2ZpZWxkLnVuaXF1ZV9pZF1bJ2FjY29yZGlvbkluZm8nXS5keW5hbWljX3JlcGVhdGFibGVfdGl0bGU7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIGlmKGtleSAhPSBcIlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgICAgICBrZXkgPSB0aGlzLnN1YnN0aXR1dGVTdGFycyhrZXksIHJvd0RhdGFMaXN0W2ZpZWxkLnVuaXF1ZV9pZF0udW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5ld05hbWUgPSBuZXdOYW1lICsgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh7IGZpZWxkX2xhYmVsOiBrZXkgfSkuZmllbGRfbGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXVsnYWNjb3JkaW9uSW5mbyddLm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSByb3dEYXRhTGlzdFtmaWVsZC51bmlxdWVfaWRdWydhY2NvcmRpb25JbmZvJ10uY29uZmlnX25hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvd0RhdGFMaXN0W2ZpZWxkLnVuaXF1ZV9pZF1bJ2FjY29yZGlvbkluZm8nXS5uYW1lID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh7IGZpZWxkX2xhYmVsOiBrZXkgfSwgZGF0YSwgdHJ1ZSkuZmllbGRfbGFiZWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVyIGR1bW15IGJsb2NrcyBvciBpbmZvLWJsb2NrcyBmb3IgbmV3bHkgYWRkZWQgYmxvY2sgaGF2aW5nIGFjY29yZGlvblxyXG4gICAgICovXHJcbiAgICBhZGREdW1teUJsb2Nrc0Zvck5ld2x5QWRkZWRBY2NvcmRpb24oKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJSZXMgdXBkYXRlOlwiLCB0aGlzLmNvdW50ZXJUZW1wLCBcIiAtIFwiLCB0aGlzLmJsb2NrSWQpOyAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICBmb3IgKGxldCBwb3NpdGlvbiA9IDA7IHBvc2l0aW9uIDwgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YT8uYmxvY2tfZmllbGRzLmxlbmd0aDsgcG9zaXRpb24rKykge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzW3Bvc2l0aW9uXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmKGZpZWxkLmZpZWxkX3R5cGUgPT09IFwiQWNjb3JkaW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIGxldCBnQmxvY2tJZCA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVmYXVsdF92YWx1ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnQmxvY2tJZCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBsYXN0RHVtbXlCbG9ja0luZm8gPSB0aGlzLnJvb3REYXRhW2dCbG9ja0lkXTtcclxuICAgICAgICAgICAgICAgIGlmKGxhc3REdW1teUJsb2NrSW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0TGVuID0gbGFzdER1bW15QmxvY2tJbmZvW1wibGVuXCJdO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkdW1teUJsb2NrSWQgPSBnQmxvY2tJZCArIHRoaXMuZGVsaW1pdGVyICsgbGFzdExlbjtcclxuICAgICAgICAgICAgICAgICAgICBpZighdGhpcy5kdW1teUJsb2Nrc1tkdW1teUJsb2NrSWRdKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmR1bW15QmxvY2tzW2R1bW15QmxvY2tJZF0gPSB0aGlzLmNyZWF0ZUlucHV0RGF0YUZvckR1bW15QmxvY2soZ0Jsb2NrSWQsIHBvc2l0aW9uKTsgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3REdW1teUJsb2NrSW5mb1tcImxlblwiXSArPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhW2dCbG9ja0lkXSA9IGxhc3REdW1teUJsb2NrSW5mbztcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvU2VjdGlvbihmaWVsZElkLCBpQ291bnRlcikge1xyXG4gICAgICAgIGlmKGZpZWxkSWQgIT0gXCJcIil7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnVFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmFjY29yZGlvbi1zZWN0aW9uLSR7ZmllbGRJZH0tJHtpQ291bnRlcn1gKTtcclxuICAgICAgICAgICAgaWYgKG1lbnVFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlcnJvckZpZWxkID0gdGhpcy5yZW5kZXJlci5zZWxlY3RSb290RWxlbWVudChtZW51RWxlbWVudCx0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yRmllbGQpe1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yRmllbGQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ2F1dG8nLCBibG9jazogJ2NlbnRlcicsIGlubGluZTogJ2NlbnRlcicgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Mb2FkUmVwZWF0QmxvY2soZ0Jsb2NrSWQsIHBvc2l0aW9uLCBpQ291bnRlciA9IC0xLCBmaWVsZElkPVwiXCIpIHtcclxuICAgICAgICBpZiAoZ0Jsb2NrSWQpIHtcclxuICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUoZ0Jsb2NrSWQpLnN1YnNjcmliZSgoYmxvY2tEYXRhKSA9PiB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBic0JvY2tGaWVsZHMgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGJsb2NrRGF0YSk/LmJsb2NrX2ZpZWxkc1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHNbcG9zaXRpb25dWydibG9ja19maWVsZHMnXSA9IGJzQm9ja0ZpZWxkcztcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnYmxvY2tGaWVsZHMnXVtnQmxvY2tJZF0gPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGZpZWxkIG9mIGJzQm9ja0ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bZ0Jsb2NrSWRdLnB1c2goZmllbGQudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NSb3dEYXRhKHRoaXMuY291bnRlclRlbXAsIGlDb3VudGVyLCBnQmxvY2tJZCk7ICBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWN0aW9uKGZpZWxkSWQsIGlDb3VudGVyKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jZHIgJiYgISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGlDb3VudGVyID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGF6eUxvYWRpbmcoKTtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRlclNlcnZpY2Uuc2tpcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRlclNlcnZpY2Uuc2tpcExvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2VuZXJhdGVVbmlxdWVJRChhcnJheVBvczogYW55KSA6IHN0cmluZyB7XHJcbiAgICAvLyAgICAgbGV0IGlkID0gJyQnICsgYXJyYXlQb3M7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuaXNDaGlsZEJsb2NrKCkpIHsgICAgICAgICAgICBcclxuICAgIC8vICAgICAgICAgaWQgPSAnJCcgKyB0aGlzLnBhcmVudFBvc2l0aW9uICsgaWQ7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gICAgIHJldHVybiBpZDsgICAgICAgIFxyXG4gICAgLy8gfVxyXG5cclxuICAgIGNyZWF0ZUlucHV0RGF0YUZvckR1bW15QmxvY2soZ0Jsb2NrSWQsIHBvc2l0aW9uKSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgbGV0IGlucHV0RGF0YSA9IHtcclxuICAgICAgICAgICAgYmxvY2tJZCA6IGdCbG9ja0lkLFxyXG4gICAgICAgICAgICBwb3NpdGlvbiA6IHBvc2l0aW9uLFxyXG4gICAgICAgICAgICBzaG93OiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBpbnB1dERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgaW5pdGlhbExvYWRpbmdPZlN1YkJsb2NrcyhmaWVsZCwgcG9zaXRpb24pIHtcclxuICAgICAgICBsZXQgZ0Jsb2NrSWQ7XHJcbiAgICAgICAgbGV0IGNvbGxhcHNlVGl0bGUgPSAnQ29sbGFwc2UnO1xyXG4gICAgICAgIGxldCBleHBhbmRUaXRsZSA9ICdPcGVuJztcclxuICAgICAgICBsZXQgc2hvd1NlY3Rpb24gPSBmYWxzZTtcclxuICAgICAgICBsZXQgbmFtZSA9IGZpZWxkLmZpZWxkX2xhYmVsO1xyXG4gICAgICAgIGxldCBmb290ZXJGaWVsZHMgPSBbXTtcclxuICAgICAgICBsZXQgc2tpcExvYWQgPSBcImZhbHNlXCI7XHJcbiAgICAgICAgbGV0IGFwcGxpY2F0aW9uRGV0YWlscyA9ICcnO1xyXG4gICAgICAgIGxldCBzdWJIZWFkZXJGaWVsZHMgPSBbXTtcclxuICAgICAgICBsZXQgZHluYW1pY19yZXBlYXRhYmxlX3RpdGxlID0gXCJcIjtcclxuICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkZWZhdWx0X3ZhbHVlJzpcclxuICAgICAgICAgICAgICAgICAgICBnQmxvY2tJZCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnY29sbGFwc2VUaXRsZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VUaXRsZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZXhwYW5kVGl0bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGV4cGFuZFRpdGxlID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDRUVfRk9PVEVSX0ZJRUxEUyc6XHJcbiAgICAgICAgICAgICAgICAgICAgZm9vdGVyRmllbGRzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAocyA9PiBzLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDRUVfU2tpcF9yYl9hY2NvcmRpb25fbG9hZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgc2tpcExvYWQgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzaG93U2VjdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdDRUVfcmJfYWNjb3JkaW9uX0luZm9CbG9jayc6XHJcbiAgICAgICAgICAgICAgICAgICAgYXBwbGljYXRpb25EZXRhaWxzID0gcGFyYW10ZXIudmFsdWUgPyBwYXJhbXRlci52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnQ0VFX1NVQl9IRUFERVJfRklFTERTJzpcclxuICAgICAgICAgICAgICAgICAgICBzdWJIZWFkZXJGaWVsZHMgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9keW5hbWljX3JlcGVhdGFibGVfdGl0bGUnOlxyXG4gICAgICAgICAgICAgICAgICAgIGR5bmFtaWNfcmVwZWF0YWJsZV90aXRsZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnbm9JZHMnOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9JZHMgPSBwYXJhbXRlci52YWx1ZSA9PT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaWVsZC5maWVsZF90eXBlID09PSAnQWNjb3JkaW9uJykge1xyXG4gICAgICAgICAgICBmaWVsZFsnYWNjb3JkaW9uSW5mbyddID0ge1xyXG4gICAgICAgICAgICAgICAgY29sbGFwc2VUaXRsZSxcclxuICAgICAgICAgICAgICAgIGV4cGFuZFRpdGxlLFxyXG4gICAgICAgICAgICAgICAgc2hvd1NlY3Rpb24sXHJcbiAgICAgICAgICAgICAgICBuYW1lLFxyXG4gICAgICAgICAgICAgICAgZm9vdGVyRmllbGRzLFxyXG4gICAgICAgICAgICAgICAgc3ViSGVhZGVyRmllbGRzLFxyXG4gICAgICAgICAgICAgICAgZHluYW1pY19yZXBlYXRhYmxlX3RpdGxlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYoZ0Jsb2NrSWQpIHtcclxuICAgICAgICAgICAgaWYoc2tpcExvYWQgPT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50ZXJUZW1wLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGR1bW15QmxvY2tJZCA9IGdCbG9ja0lkICsgdGhpcy5kZWxpbWl0ZXIgKyBpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZHVtbXlCbG9ja3NbZHVtbXlCbG9ja0lkXSA9IHRoaXMuY3JlYXRlSW5wdXREYXRhRm9yRHVtbXlCbG9jayhnQmxvY2tJZCwgcG9zaXRpb24pOyBcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vIHNhdmUgcGFydGljdWxhciBhY2NvZGlvbidzIGRhdGEgaW4gcm9vdERhdGEgdG8gdHJhY2sgdGhlIGNvdW50XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvb3REYXRhW2dCbG9ja0lkXSA9IHsgXHJcbiAgICAgICAgICAgICAgICAgICAgXCJsZW5cIjogdGhpcy5jb3VudGVyVGVtcC5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgXCJhcHBsaWNhdGlvbkRldGFpbHNcIjogYXBwbGljYXRpb25EZXRhaWxzXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZFJlcGVhdEJsb2NrKGdCbG9ja0lkLCBwb3NpdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NPdXRzaWRlT2ZBbmd1bGFyWm9uZSgpIHtcclxuICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh0aGlzLmJsb2NrSWQpLnN1YnNjcmliZSgocmVzKSA9PntcclxuICAgICAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YSA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MocmVzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IHRoaXMuYmxvY2tSZW5kZXJlZERhdGE/LmJsb2NrX2ZpZWxkcy5sZW5ndGg7IHBvc2l0aW9uKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHNbcG9zaXRpb25dO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09IFwiQXR0YWNobWVudHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ3JlcGVhdGFibGUtJyArIGZpZWxkLnVuaXF1ZV9pZF0gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgaWYoZmllbGQuZmllbGRfdHlwZSA9PT0gXCJHZW5lcmljIEJsb2NrXCIgfHwgZmllbGQuZmllbGRfdHlwZSA9PT0gXCJBY2NvcmRpb25cIikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbExvYWRpbmdPZlN1YkJsb2NrcyhmaWVsZCwgcG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZmllbGQuZmllbGRfdHlwZSA9PT0gJ2xhYmVsJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkWydjb3B5T2ZGaWVsZExhYmVsJ10gPSBmaWVsZC5maWVsZF9sYWJlbDtcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzUm93RGF0YSh0aGlzLmNvdW50ZXJUZW1wKTtcclxuICAgICAgICAgICAgdGhpcy5sYXp5TG9hZGluZygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbEludG9DaGlsZFZpZXcoaW5kZXgpIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjaGlsZEJsb2NrID0gJyc7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQmxvY2sgPSBgJHt0aGlzLmJsb2NrSWR9LXAtJHt0aGlzLnBhcmVudFBvc2l0aW9ufS1jLSR7aW5kZXh9YDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRCbG9jayA9IGAke3RoaXMuYmxvY2tJZH0tYy0ke2luZGV4fWA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhZGRlZEJsb2NrID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShjaGlsZEJsb2NrKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZGVkQmxvY2tbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFkZGVkQmxvY2tbMF0uc2Nyb2xsSW50b1ZpZXcoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJlaGF2aW9yOiBcInNtb290aFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJsb2NrOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDIwMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7Y2xlYXJJbnRlcnZhbChpbnRlcnZhbCl9LCAyMDAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7fVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldEFwcGxpY2F0aW9uSW5mbyhkYXRhLCBpKSB7XHJcbiAgICAvLyAgICAgbGV0IHdvcmRzID0gZGF0YT8uc3BsaXQoXCIkJFwiKTtcclxuICAgIC8vICAgICBsZXQgYWNjb3JkRGF0YTphbnkgPSB7fTtcclxuICAgIC8vICAgICBpZih3b3Jkc1swXSkge1xyXG4gICAgLy8gICAgICAgICBsZXQgdGl0bGVWYWx1ZTogc3RyaW5nO1xyXG4gICAgLy8gICAgICAgICBpZih3b3Jkc1swXS5pbmNsdWRlcygnJXJlcGVhdGFibGVQb3MlJykpIHtcclxuICAgIC8vICAgICAgICAgICAgIHRpdGxlVmFsdWUgPSB3b3Jkc1swXS5yZXBsYWNlKCclcmVwZWF0YWJsZVBvcyUnLCBpICsgMSk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICB0aXRsZVZhbHVlID0gd29yZHNbMF07XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgaWYodGl0bGVWYWx1ZS5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgLy8gICAgICAgICAgICAgYWNjb3JkRGF0YS50aXRsZSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUoeyBmaWVsZF9sYWJlbDogdGl0bGVWYWx1ZX0pLmZpZWxkX2xhYmVsO1xyXG4gICAgLy8gICAgICAgICB9XHJcbiAgICAvLyAgICAgICAgIGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgYWNjb3JkRGF0YS50aXRsZSA9IHRpdGxlVmFsdWU7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgaWYod29yZHNbMV0pIHtcclxuICAgIC8vICAgICAgICAgaWYod29yZHNbMV0uaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHtcclxuICAgIC8vICAgICAgICAgICAgIGFjY29yZERhdGEuc3VidGl0bGUgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHsgZmllbGRfbGFiZWw6IHdvcmRzWzFdfSkuZmllbGRfbGFiZWw7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgZWxzZSB7XHJcbiAgICAvLyAgICAgICAgICAgICBhY2NvcmREYXRhLnN1YnRpdGxlID0gd29yZHNbMV07XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9XHJcbiAgICAvLyAgICAgcmV0dXJuIGFjY29yZERhdGE7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbGF6eUxvYWRpbmcoKSB7XHJcbiAgICAgICAgLy8gc3RvcCBleGlzdGluZyBpbnRlcnZhbCBhbmQgc3RhcnQgbmV3IGludGVydmFsIGZvciBsYXp5IGxvYWRpbmdcclxuICAgICAgICBpZiAodGhpcy5sYXp5SW50ZXJ2YWwpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxhenlJbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVhcGVhdGFibGVMb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSBbXTtcclxuICAgICAgICB0aGlzLmNoaWxkQ291bnRlclt0aGlzLnBhcmVudFBvc2l0aW9uXSA9IFtdO1xyXG4gICAgICAgIHRoaXMubGF6eUludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRDb3VudGVyICYmIHRoaXMuY2hpbGRDb3VudGVyW3RoaXMucGFyZW50UG9zaXRpb25dICYmIHRoaXMuY2hpbGRDb3VudGVyW3RoaXMucGFyZW50UG9zaXRpb25dLmxlbmd0aCAhPT0gdGhpcy5jb3VudGVyVGVtcC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ291bnRlclt0aGlzLnBhcmVudFBvc2l0aW9uXS5wdXNoKHRoaXMuY291bnRlclRlbXBbdGhpcy5jaGlsZENvdW50ZXJbdGhpcy5wYXJlbnRQb3NpdGlvbl0ubGVuZ3RoXSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWFwZWF0YWJsZUxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMubGF6eUludGVydmFsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ZXIubGVuZ3RoICE9PSB0aGlzLmNvdW50ZXJUZW1wLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlci5wdXNoKHRoaXMuY291bnRlclRlbXBbdGhpcy5jb3VudGVyLmxlbmd0aF0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVhcGVhdGFibGVMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmxhenlJbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2RyICYmICEodGhpcy5jZHIgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRvIEVuYWJsZSBvciBEaXNhYmxlIFxyXG4gICAgICAgICAgICB0aGlzLmNvdW50QWN0aXZlQmxvY2tzKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBFbWl0IHRvIFJlc2V0IEFjdGl2ZUluZGV4IE9uIEFkZGluZyBvciBSZW1vdmluZyBSQlxyXG4gICAgICAgICAgICBpZiAodGhpcy5yZXNldEluZGV4T25BZGRPclJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkFkZE9yUmVtb3ZlUkIuZW1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgMCk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIC8vIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnLCBbJyRldmVudCddKSBcclxuICAgIC8vIHVubG9hZEhhbmRsZXIoZXZlbnQ6IEV2ZW50KSB7XHJcbiAgICAvLyAgICAgLy8gaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAvLyAgICAgLy8gICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgLy8gICAgIC8vIH1cclxuICAgIC8vICAgICAvLyB0aGlzLmNvdW50ZXIgPSBbXTtcclxuICAgIC8vICAgICAvLyB0aGlzLmNoaWxkQ291bnRlciA9IHt9O1xyXG4gICAgLy8gICAgIHRoaXMucHJvY2Vzc1Jvd0RhdGEoKTtcclxuICAgIC8vIH1cclxuXHJcbiAgICAvLyBhY2NvcmRpb25cclxuICAgIHRyYW5zZm9ybVN0cmluZyhpOiBudW1iZXIsIGlucHV0OiBzdHJpbmcsIGdCbG9ja0lkOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCBwYXJ0cyA9IGlucHV0LnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xyXG4gICAgICAgIHBhcnRzLm1hcCh4ID0+e1xyXG4gICAgICAgICAgICByZXN1bHQucHVzaChgJHtnQmxvY2tJZH0kJHt4fSQke2l9YClcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVybiByZXN1bHQuam9pbignfCcpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFjY29yZGlvblxyXG4gICAgbW9kaWZ5RmllbGRWYWx1ZTIoaSA6IG51bWJlcixvYmo6IGFueSwgZ0Jsb2NrSWQ6IHN0cmluZyk6IGFueSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gb2JqKSB7XHJcbiAgICAgICAgICAgIGlmIChvYmouaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKChrZXkgPT09IFwiZmllbGRcIiB8fCBrZXkgPT0gXCJ1bmlxdWVfaWRcIiB8fCAga2V5ID09IFwiYWRkaXRpb25hbF9wYXJhbWV0ZXJzXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoa2V5ICE9PSBcImFkZGl0aW9uYWxfcGFyYW1ldGVyc1wiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBgJHtnQmxvY2tJZH0kJHtvYmpba2V5XX0kJHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBvYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlRhcmdldEZpZWxkc1wiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcImJsb2NrRmllbGRzXCIgfHwgcGFyYW0ucGFyYW1ldGVyX3R5cGUgPT09IFwiRXJhc2VTZXNzaW9uRGF0YVwiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlZhcmlhYmxlc1wiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlRhcmdldHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVNwbGl0VmFsdWUgPSBwYXJhbS52YWx1ZS5zcGxpdChcInxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyYW1TcGxpdFZhbHVlLmxlbmd0aCA+IDAgJiYgcGFyYW1TcGxpdFZhbHVlWzBdICE9PSAnTlInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLnZhbHVlID0gdGhpcy50cmFuc2Zvcm1TdHJpbmcoaSwgcGFyYW0udmFsdWUsIGdCbG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYocGFyYW1TcGxpdFZhbHVlLmxlbmd0aCA+IDAgJiYgcGFyYW1TcGxpdFZhbHVlWzBdID09PSAnTlInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLnZhbHVlID0gcGFyYW0udmFsdWUucmVwbGFjZSgvTlJcXHwvZywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJhbS52YWx1ZSA9IGAke2dCbG9ja0lkfSQke3BhcmFtLnZhbHVlfSQke2l9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqW2tleV0gPT09IFwib2JqZWN0XCIgJiYgb2JqW2tleV0gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vZGlmeUZpZWxkVmFsdWUyKGksIG9ialtrZXldLCBnQmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG9iajtcclxuICAgIH1cclxuXHJcbiAgICBtb2RpZnlGaWVsZFZhbHVlKGk6IG51bWJlciwgb2JqOiBhbnksIGdCbG9ja0lkOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChrZXkgPT09IFwiZmllbGRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlzQ29uZGl0aW9uQ29udGV4dCA9IEFycmF5LmlzQXJyYXkob2JqW1wiY29uZGl0aW9uXCJdKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpc1ZhbGlkYXRpb25Db25kaXRpb24gPSBBcnJheS5pc0FycmF5KG9ialtcImNvbmRpdGlvbnNcIl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9ialtrZXldID09PSBcIlwiKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNDb25kaXRpb25Db250ZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFdlIGFyZSBpbnNpZGUgc29tZXRoaW5nIGxpa2UgZXZlbnRfcGFyYW1zIHdpdGggYSBjb25kaXRpb24gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2Ygb2JqW1wiY29uZGl0aW9uXCJdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmhhc093blByb3BlcnR5KFwiZmllbGRcIikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb24uY2hvb3NlX29uZSA9PT0gXCJzdGVwXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgY29uZGl0aW9uLmZpZWxkID09PSBcInN0cmluZ1wiICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmZpZWxkLnN0YXJ0c1dpdGgoXCJOUnxcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIERvbid0IHRyYW5zZm9ybSwganVzdCBjbGVhbiBOUnxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb24uZmllbGQgPSBjb25kaXRpb24uZmllbGQucmVwbGFjZSgvXk5SXFx8LywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uaGFzT3duUHJvcGVydHkoXCJmaWVsZFwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbi5maWVsZCA9IGAke2dCbG9ja0lkfSQke2NvbmRpdGlvbi5maWVsZH0kJHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNWYWxpZGF0aW9uQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgY29uZGl0aW9uIG9mIG9ialtcImNvbmRpdGlvbnNcIl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb24uaGFzT3duUHJvcGVydHkoXCJmaWVsZFwiKSAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvbi5jaG9vc2Vfb25lID09PSBcInN0ZXBcIiAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVvZiBjb25kaXRpb24uZmllbGQgPT09IFwic3RyaW5nXCIgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25kaXRpb24uZmllbGQuc3RhcnRzV2l0aChcIk5SfFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmZpZWxkID0gY29uZGl0aW9uLmZpZWxkLnJlcGxhY2UoL15OUlxcfC8sIFwiXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5oYXNPd25Qcm9wZXJ0eShcImZpZWxkXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmZpZWxkID0gYCR7Z0Jsb2NrSWR9JCR7Y29uZGl0aW9uLmZpZWxkfSQke2l9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlZ3VsYXIgZmllbGQgdHJhbnNmb3JtYXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvYmpba2V5XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvYmpba2V5XS5zdGFydHNXaXRoKFwiTlJ8XCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBvYmpba2V5XS5yZXBsYWNlKC9eTlJcXHwvLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBgJHtnQmxvY2tJZH0kJHtvYmpba2V5XX0kJHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcInVuaXF1ZV9pZFwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb2JqW2tleV0gPSBgJHtnQmxvY2tJZH0kJHtvYmpba2V5XX0kJHtpfWA7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoa2V5ID09PSBcImFkZGl0aW9uYWxfcGFyYW1ldGVyc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBvYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoW1wiVGFyZ2V0RmllbGRzXCIsIFwiYmxvY2tGaWVsZHNcIiwgXCJFcmFzZVNlc3Npb25EYXRhXCIsIFwiVmFyaWFibGVzXCIsIFwiVGFyZ2V0c1wiXS5pbmNsdWRlcyhwYXJhbS5wYXJhbWV0ZXJfdHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFtU3BsaXRWYWx1ZSA9IHBhcmFtLnZhbHVlLnNwbGl0KFwifFwiKTtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtU3BsaXRWYWx1ZS5sZW5ndGggPiAwICYmIHBhcmFtU3BsaXRWYWx1ZVswXSA9PT0gJ05SJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLnZhbHVlID0gcGFyYW0udmFsdWUucmVwbGFjZSgvXk5SXFx8LywgXCJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLnZhbHVlID0gdGhpcy50cmFuc2Zvcm1TdHJpbmcoaSwgcGFyYW0udmFsdWUsIGdCbG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtrZXldID09PSBcIm9iamVjdFwiICYmIG9ialtrZXldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVjdXJzZSBpbnRvIG5lc3RlZCBvYmplY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlGaWVsZFZhbHVlKGksIG9ialtrZXldLCBnQmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlcGVhdGFibGVcclxuICAgIHRyYW5zZm9ybVN0cmluZ1JiKGk6IG51bWJlciwgaW5wdXQ6IHN0cmluZywgZ0Jsb2NrSWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IHBhcnRzID0gaW5wdXQuc3BsaXQoJ3wnKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gW107XHJcbiAgICAgICAgcGFydHMubWFwKHggPT57XHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKGAke3RoaXMuc3RlcElkfSQke3h9JCR7dGhpcy5wYXJlbnRQb3NpdGlvbn0kJHtpfWApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5qb2luKCd8Jyk7XHJcbiAgICB9XHJcbiBcclxuICAgIG1vZGlmeUZpZWxkVmFsdWVSYihpIDogbnVtYmVyLG9iajogYW55LCBnQmxvY2tJZDogc3RyaW5nKTogYW55IHtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBvYmopIHtcclxuICAgICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoKGtleSA9PT0gXCJmaWVsZFwiIHx8IGtleSA9PSBcInVuaXF1ZV9pZFwiIHx8IGtleSA9PSBcImFkZGl0aW9uYWxfcGFyYW1ldGVyc1wiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKGtleSAhPT0gXCJhZGRpdGlvbmFsX3BhcmFtZXRlcnNcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9ialtrZXldID09IFwiXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtrZXldID0gYCR7dGhpcy5zdGVwSWR9JCR7b2JqW2tleV19JCR7dGhpcy5wYXJlbnRQb3NpdGlvbn0kJHtpfWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbSBvZiBvYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlRhcmdldEZpZWxkc1wiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcImJsb2NrRmllbGRzXCIgfHwgcGFyYW0ucGFyYW1ldGVyX3R5cGUgPT09IFwiRXJhc2VTZXNzaW9uRGF0YVwiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlZhcmlhYmxlc1wiIHx8IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIlRhcmdldHNcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJhbVNwbGl0VmFsdWUgPSBwYXJhbS52YWx1ZS5zcGxpdChcInxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYocGFyYW1TcGxpdFZhbHVlLmxlbmd0aCA+IDAgJiYgcGFyYW1TcGxpdFZhbHVlWzBdICE9PSAnTlInKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLnZhbHVlID0gdGhpcy50cmFuc2Zvcm1TdHJpbmdSYihpLCBwYXJhbS52YWx1ZSwgZ0Jsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihwYXJhbVNwbGl0VmFsdWUubGVuZ3RoID4gMCAmJiBwYXJhbVNwbGl0VmFsdWVbMF0gPT09ICdOUicpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW0udmFsdWUgPSBwYXJhbS52YWx1ZS5yZXBsYWNlKC9OUlxcfC9nLCBcIlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtLnZhbHVlID1gJHt0aGlzLnN0ZXBJZH0kJHtwYXJhbS52YWx1ZX0kJHt0aGlzLnBhcmVudFBvc2l0aW9ufSQke2l9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodHlwZW9mIG9ialtrZXldID09PSBcIm9iamVjdFwiICYmIG9ialtrZXldICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RpZnlGaWVsZFZhbHVlUmIoaSwgb2JqW2tleV0sIGdCbG9ja0lkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG4gXHJcbiAgICBnZXROZXdGaWVsZHMoaSwgZmllbGRzLCBnQmxvY2tJZCwgdHlwZSl7XHJcbiAgICAgICAgbGV0IGZpbmFsRmllbGRzID0gW107XHJcbiAgICAgICAgaWYodGhpcy5ub0lkcyA9PT0gZmFsc2Upe1xyXG4gICAgICAgICAgICBsZXQgZmllbGRVbnEgPSBbXTtcclxuICAgICAgICAgICAgaWYoZmllbGRzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSBcIkFjY29yZGlvblwiKXtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMubWFwKHggPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSB0aGlzLm1vZGlmeUZpZWxkVmFsdWUoaSx4LCBnQmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsRmllbGRzLnB1c2gobmV3RmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZFVucS5wdXNoKHgudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYodHlwZSA9PSBcIkdlbmVyaWMgQmxvY2tcIil7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0ZpZWxkID0gdGhpcy5tb2RpZnlGaWVsZFZhbHVlMihpLHgsIGdCbG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxGaWVsZHMucHVzaChuZXdGaWVsZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkVW5xLnB1c2goeC51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgYmxvY2tuYW1lID0gYCR7Z0Jsb2NrSWR9JCR7Z0Jsb2NrSWR9JCR7aX1gO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW2Jsb2NrbmFtZV0gPSBmaWVsZFVucTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgZmllbGRVbnEgPSBbXTtcclxuICAgICAgICAgICAgaWYoZmllbGRzLmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICAgICAgZmllbGRzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbmV3RmllbGQgPSB0aGlzLm1vZGlmeUZpZWxkVmFsdWVSYihpLHgsIGdCbG9ja0lkKTtcclxuICAgICAgICAgICAgICAgICAgICBmaW5hbEZpZWxkcy5wdXNoKG5ld0ZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZFVucS5wdXNoKHgudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGJsb2NrbmFtZSA9IGAke3RoaXMuc3RlcElkfSQke2dCbG9ja0lkfSQke3RoaXMucGFyZW50UG9zaXRpb259JCR7aX1gO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW2Jsb2NrbmFtZV0gPSBmaWVsZFVucTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbmFsRmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGdCbG9ja0lkIGFuZCBpQ291bnRlciBpcyBuZWVkZWQgd2hlbiB0byBleHBhbmQgcGFydGljdWxhciBhY2NvcmRpb25cclxuICAgIGdldFJvd0RhdGFMaXN0KGksIGlDb3VudGVyLCBnQmxvY2tJZCwgZXhpc3RpbmdSb3dEYXRhID0ge30pIHtcclxuICAgICAgICBjb25zdCByb3dEYXRhTGlzdCA9IHt9O1xyXG4gICAgICAgIGNvbnN0IHVuaXF1ZUlkcyA9IHt9O1xyXG4gICAgICAgIGZvciAobGV0IHBvc2l0aW9uID0gMDsgcG9zaXRpb24gPCB0aGlzLmJsb2NrUmVuZGVyZWREYXRhPy5ibG9ja19maWVsZHMubGVuZ3RoOyBwb3NpdGlvbisrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHNbcG9zaXRpb25dO1xyXG4gICAgICAgICAgICAvLyBmaWVsZC5ibG9ja19maWVsZHMgdGhpcyB3aWxsIGV4aXN0IHdoZW4gQWNjb3JkaW9hbiBpcyBvcGVuZWRcclxuICAgICAgICAgICAgaWYgKChmaWVsZC5maWVsZF90eXBlID09PSAnR2VuZXJpYyBCbG9jaycgfHwgZmllbGQuZmllbGRfdHlwZSA9PT0gJ0FjY29yZGlvbicpICYmIGZpZWxkLmJsb2NrX2ZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYmxvY2tJZHMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpZWxkLmJsb2NrX2ZpZWxkcykpO1xyXG4gICAgICAgICAgICAgICAgaWYoZ0Jsb2NrSWQgPT0gZmllbGQucG9zc2libGVfdmFsdWVzWzBdICYmIGZpZWxkLmZpZWxkX3R5cGUgPT09ICdBY2NvcmRpb24nKXtcclxuICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2YgaSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKGkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZHMgPSB0aGlzLmdldE5ld0ZpZWxkcyhpLCBibG9ja0lkcywgZ0Jsb2NrSWQsIGZpZWxkLmZpZWxkX3R5cGUpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5maWVsZF92YWx1ZXNbaV0gPSBuZXdGaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYoZ0Jsb2NrSWQgPT0gZmllbGQucG9zc2libGVfdmFsdWVzWzBdICYmIGZpZWxkLmZpZWxkX3R5cGUgPT09ICdHZW5lcmljIEJsb2NrJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBpID09PSAnbnVtYmVyJyAmJiAhaXNOYU4oaSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZHMgPSB0aGlzLmdldE5ld0ZpZWxkcyhpLCBibG9ja0lkcywgZ0Jsb2NrSWQsIGZpZWxkLmZpZWxkX3R5cGUpIHx8IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZC5maWVsZF92YWx1ZXNbaV0gPSBuZXdGaWVsZHM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBsZXQgYXJyT2ZGaWVsZHMgPSBmaWVsZC5maWVsZF92YWx1ZXNbaV07XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBwb3MgPSAwOyBwb3MgPCBhcnJPZkZpZWxkcz8ubGVuZ3RoOyBwb3MrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlubmVyRmllbGQgPSBhcnJPZkZpZWxkc1twb3NdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd0RhdGFMaXN0W2lubmVyRmllbGQ/LnVuaXF1ZV9pZF0gPSB0aGlzLmdlbmVyYXRlUm93RGF0YShpLCBpbm5lckZpZWxkLCBcInN1cGVyQmxvY2tzXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZUlkc1tpbm5lckZpZWxkPy51bmlxdWVfaWRdID0gcm93RGF0YUxpc3RbaW5uZXJGaWVsZD8udW5pcXVlX2lkXT8udW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICByb3dEYXRhTGlzdFtmaWVsZC51bmlxdWVfaWRdID0gZXhpc3RpbmdSb3dEYXRhPy5oYXNPd25Qcm9wZXJ0eShmaWVsZC51bmlxdWVfaWQpID8gZXhpc3RpbmdSb3dEYXRhW2ZpZWxkLnVuaXF1ZV9pZF0gOiB0aGlzLmdlbmVyYXRlUm93RGF0YShpLCBmaWVsZCk7XHJcbiAgICAgICAgICAgIHVuaXF1ZUlkc1tmaWVsZC51bmlxdWVfaWRdID0gcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXS51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgIGlmKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdBY2NvcmRpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByb3dEYXRhTGlzdFtmaWVsZC51bmlxdWVfaWRdWydhY2NvcmRpb25JbmZvJ10gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpZWxkLmFjY29yZGlvbkluZm8pKTtcclxuICAgICAgICAgICAgICAgIGlmKGdCbG9ja0lkICYmIGlDb3VudGVyID09IGkpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcFZhbHVlcyA9IDxBcnJheTxhbnk+PiBmaWVsZC5wb3NzaWJsZV92YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocFZhbHVlcy5pbmNsdWRlcyhnQmxvY2tJZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXVsnYWNjb3JkaW9uSW5mbyddLnNob3dTZWN0aW9uID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGxldCBuYW1lID0gcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXVsnYWNjb3JkaW9uSW5mbyddLm5hbWU7XHJcbiAgICAgICAgICAgICAgICBpZihuYW1lLmluY2x1ZGVzKCclcmVwZWF0YWJsZVBvcyUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdOYW1lID0gbmFtZS5yZXBsYWNlKCclcmVwZWF0YWJsZVBvcyUnLCAoaSArIDEpKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIga2V5ID0gcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXVsnYWNjb3JkaW9uSW5mbyddLmR5bmFtaWNfcmVwZWF0YWJsZV90aXRsZTtcclxuICAgICAgICAgICAgICAgICAgICBpZihrZXkgIT0gXCJcIikgeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5ID0gdGhpcy5jb21tb25VdGlsLmZpbmRJbmRpY2VzQW5kU3Vic3RpdHV0ZVN0YXJzKGtleSwgcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXS51bmlxdWVfaWQsIFwiJFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3TmFtZSA9IG5ld05hbWUgKyB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHsgZmllbGRfbGFiZWw6IGtleSB9KS5maWVsZF9sYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXVsnYWNjb3JkaW9uSW5mbyddLm5hbWUgPSBuZXdOYW1lO1xyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZihuYW1lLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IHJvd0RhdGFMaXN0W2ZpZWxkLnVuaXF1ZV9pZF1bJ2FjY29yZGlvbkluZm8nXS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleSA9IHRoaXMuY29tbW9uVXRpbC5maW5kSW5kaWNlc0FuZFN1YnN0aXR1dGVTdGFycyhrZXksIHJvd0RhdGFMaXN0W2ZpZWxkLnVuaXF1ZV9pZF0udW5pcXVlX2lkLCBcIiRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXVsnYWNjb3JkaW9uSW5mbyddLm5hbWUgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHsgZmllbGRfbGFiZWw6IGtleSB9KS5maWVsZF9sYWJlbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJvd0RhdGFMaXN0W2ZpZWxkLnVuaXF1ZV9pZF1bJ2FjY29yZGlvbkluZm8nXS5mb290ZXJGaWVsZHMgPSB0aGlzLmdldEZvb3RlckZpZWxkcyhnQmxvY2tJZCwgcm93RGF0YUxpc3RbZmllbGQudW5pcXVlX2lkXVsnYWNjb3JkaW9uSW5mbyddLmZvb3RlckZpZWxkcywgaSk7ICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJvY2Vzc0V2ZW50TGlzdChyb3dEYXRhTGlzdCwgdW5pcXVlSWRzKTtcclxuICAgICAgICByZXR1cm4gcm93RGF0YUxpc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0Rm9vdGVyRmllbGRzKGdCbG9jaywgZm9vdGVyRmllbGRzID0gW10sIGNvdW50ZXIpe1xyXG4gICAgICAgIGxldCBmb290ZXJBcnJheSA9IFtdO1xyXG4gICAgICAgIGlmIChnQmxvY2sgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICBnQmxvY2sgPSB0aGlzLnN0b3JlQmxvY2tJZElmTnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9vdGVyRmllbGRzLm1hcCh4ID0+IHtcclxuICAgICAgICAgICAgZm9vdGVyQXJyYXkucHVzaChgJHtnQmxvY2t9JCR7eH0kJHtjb3VudGVyfWApO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuIGZvb3RlckFycmF5O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcHJvY2Vzc1Jvd0RhdGEoYzogYW55ID0gdGhpcy5jb3VudGVyRGF0YSwgaUNvdW50ZXIgPSAtMSwgZ0Jsb2NrSWQgPSBudWxsKSB7ICAgXHJcbiAgICAgICAgaWYoaUNvdW50ZXIgIT09IC0xKXtcclxuICAgICAgICAgICAgaWYgKGlDb3VudGVyIDwgdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93cy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIC8vIG5ldyB3YXkgd2l0aCBSeEpTXHJcbiAgICAgICAgICAgICAgICBvZihpQ291bnRlcilcclxuICAgICAgICAgICAgICAgICAgICAucGlwZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uY2F0TWFwKChpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgcm93RGF0YUxpc3QgPSB0aGlzLmdldFJvd0RhdGFMaXN0KGluZGV4LCBpbmRleCwgZ0Jsb2NrSWQsIHRoaXMucmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaW5kZXhdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBvZihyb3dEYXRhTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIC5zdWJzY3JpYmUoKHJvd0RhdGFMaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaUNvdW50ZXJdID0gcm93RGF0YUxpc3Q7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBUcmlnZ2VyIGNoYW5nZSBkZXRlY3Rpb24gZm9yIHRoaXMgcm93XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmICh0aGlzLmNkciAmJiAhKHRoaXMuY2RyIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93cyA9IFtdO1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBOZWVkIHRvIHJlbW92ZSBzdGF0aWMgY29kZVxyXG4gICAgICAgICAgICAvLyBpZih0aGlzLmJsb2NrSWQgPT0gXCJibG9ja18zNDYxMl9hcHBsaWNhbnRfZGV0YWlsc1wiKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBvbGRlciB3YXlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0RhdGFMaXN0ID0gdGhpcy5nZXRSb3dEYXRhTGlzdChpLCBpQ291bnRlciwgZ0Jsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0ZWJsZUZpZWxkc1Jvd3MucHVzaChyb3dEYXRhTGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIGZvciBlYWNoIHJvd1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vICAgICBpZiAodGhpcy5jZHIgJiYgISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcInJlcGVhdGVibGVGaWVsZHNSb3dzOlwiLCB0aGlzLnJlcGVhdGVibGVGaWVsZHNSb3dzKTtcclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICAvLyBlbHNlIHtcclxuICAgICAgICAgICAgLy8gICAgIC8vIG5ldyB3YXkgd2l0aCBSeEpTXHJcbiAgICAgICAgICAgIC8vICAgICBvZiguLi5jKVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIC5waXBlKFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBjb25jYXRNYXAoKF8sIGkpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGNvbnN0IHJvd0RhdGFMaXN0ID0gdGhpcy5nZXRSb3dEYXRhTGlzdChpLCBpQ291bnRlciwgZ0Jsb2NrSWQpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuIG9mKHJvd0RhdGFMaXN0KTsvLy5waXBlKGRlbGF5KDUpKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLy8gICAgICAgICApXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgLnN1YnNjcmliZSgocm93RGF0YUxpc3QpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgLy8gVHJpZ2dlciBjaGFuZ2UgZGV0ZWN0aW9uIGZvciBlYWNoIHJvd1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLnJlcGVhdGVibGVGaWVsZHNSb3dzLnB1c2gocm93RGF0YUxpc3QpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAodGhpcy5jZHIgJiYgISh0aGlzLmNkciBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVwZWF0ZWJsZUZpZWxkc1Jvd3M6LS0tLS0tLT5cIiwgdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93cyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5zdGVwTG9hZGVyRW1pdHRlci5lbWl0KHtcImJsb2NrSWRcIjogdGhpcy5ibG9ja0lkfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qIENoZWNrcyBpZiBhbiBhY2NvcmRpb24gc2hvdWxkIGJlIHZpc2libGUgYmFzZWQgb24gaXRzIGRpc3BsYXkgY29uZGl0aW9ucyAqL1xyXG4gICAgY2hlY2tBY2NvcmRpb25WaXNpYmlsaXR5KGZpZWxkOiBhbnksIHJvd0RhdGE6IGFueSwgaSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY2hlY2tBY2NvcmRpb25WaXNpYmlsaXR5XCIpO1xyXG4gICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAwKSB7IC8vIElmIGlzX2Rpc3BsYXkgaXMgMCwgYWx3YXlzIGhpZGVcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMSkgeyAvLyBJZiBpc19kaXNwbGF5IGlzIDEsIGFsd2F5cyBzaG93XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMikgeyAvLyBJZiBpc19kaXNwbGF5IGlzIDIsIGNoZWNrIGNvbmRpdGlvbnNcclxuICAgICAgICAgICAgbGV0IGNvbmRpdGlvblZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSBBUEkgcmVzcG9uc2UgZGF0YSBmb3IgY29uZGl0aW9uc1xyXG4gICAgICAgICAgICBpZiAoZmllbGQuZGlzcGxheV9jb25kaXRpb24gJiYgZmllbGQuZGlzcGxheV9jb25kaXRpb24uY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNvbmRpdGlvbiBvZiBmaWVsZC5kaXNwbGF5X2NvbmRpdGlvbi5jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbmRpdGlvbi5maWVsZCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gUmVwbGFjZSB3aWxkY2FyZHMgd2l0aCBhY3R1YWwgaW5kaWNlc1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBtb2RpZmllZEZpZWxkID0gY29uZGl0aW9uLmZpZWxkO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtb2RpZmllZEZpZWxkLmluY2x1ZGVzKCdbKl0nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGluZGljZXMgZnJvbSByb3dEYXRhLnVuaXF1ZV9pZCAoZS5nLiwgXCJzdGVwSWQkZmllbGRJZCQwJDFcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IHJvd0RhdGEudW5pcXVlX2lkLnNwbGl0KCckJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJvd0luZGV4ID0gaW5kaWNlcy5sZW5ndGggPj0gMyA/IGluZGljZXNbMl0gOiAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXBsYWNlIFsqXSB3aXRoIGFjdHVhbCBpbmRleFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEZpZWxkID0gbW9kaWZpZWRGaWVsZC5yZXBsYWNlKC9cXFtcXCpcXF0vZywgYFske3Jvd0luZGV4fV1gKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb2RpZmllZEZpZWxkID0gdGhpcy5zdGVwSWQgKyAnJCcgKyBtb2RpZmllZEZpZWxkICsgJyQnICsgaTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgQVBJIHJlc3BvbnNlIGRhdGFcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNwb25zZU1hcFttb2RpZmllZEZpZWxkXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmRpdGlvblZhbHVlID0gdGhpcy5yZXNwb25zZU1hcFttb2RpZmllZEZpZWxkXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibW9kaWZpZWRGaWVsZFwiLCBtb2RpZmllZEZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBhcHAgZGF0YSBmb3IgZmllbGQgdmFsdWUgLSBza2lwIGlmIG51bGwvdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKG1vZGlmaWVkRmllbGQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1vZGlmaWVkRmllbGQsXCI9PT5cIixmaWVsZFZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbHVlID09PSBudWxsIHx8IGZpZWxkVmFsdWUgPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTsgLy8gU2tpcCB0aGlzIGNvbmRpdGlvbiBjaGVjayBpZiB2YWx1ZSBpcyBudWxsL3VuZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICBjb25kaXRpb25WYWx1ZSA9IGZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYSB2YWxpZCBjb25kaXRpb24gdmFsdWUsIGV2YWx1YXRlIHZpc2liaWxpdHlcclxuICAgICAgICAgICAgaWYgKGNvbmRpdGlvblZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZElkID0gcm93RGF0YS51bmlxdWVfaWQgfHwgZmllbGQudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmlzaWJsZSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eShmaWVsZCwgZmllbGRJZCwgY29uZGl0aW9uVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZpc2libGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2aXNpYmxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIERlZmF1bHQgZmFsbGJhY2sgdG8gdmlzaWJsZVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZW5lcmF0ZVJvd0RhdGEoYXJyYXlQb3M6IGFueSwgZmllbGRUZW1wOiBhbnksIHR5cGU9XCJcIikge1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gJ1snICsgYXJyYXlQb3MgKyAnXSc7XHJcbiAgICAgICAgbGV0IGFwaUtleTtcclxuICAgICAgICBsZXQgaWQgPSB0eXBlICE9IFwic3VwZXJCbG9ja3NcIiA/IHRoaXMuc3RlcElkICsgJyQnICsgZmllbGRUZW1wLnVuaXF1ZV9pZCArICckJyArIGFycmF5UG9zIDogZmllbGRUZW1wPy51bmlxdWVfaWQ7XHJcbiAgICAgICAgbGV0IGRlbGV0ZUluZGV4ID0gYXJyYXlQb3M7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEJsb2NrKCkpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0eXBlOlwiLCB0eXBlKTtcclxuICAgICAgICAgICAgZGVsZXRlSW5kZXggPSAnXycgKyB0aGlzLnBhcmVudFBvc2l0aW9uICsgJ18nICsgYXJyYXlQb3M7XHJcbiAgICAgICAgICAgIGlmKHR5cGUhPVwic3VwZXJCbG9ja3NcIikge1xyXG4gICAgICAgICAgICAgICAgaWQgPSB0aGlzLnN0ZXBJZCArICckJyArIGZpZWxkVGVtcC51bmlxdWVfaWQgKyAnJCcgKyB0aGlzLnBhcmVudFBvc2l0aW9uICsgJyQnICsgYXJyYXlQb3M7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGlkID0gZmllbGRUZW1wLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhcGlLZXkgPSBmaWVsZFRlbXAuYXBpX2tleSA/IGZpZWxkVGVtcD8uYXBpX2tleS5yZXBsYWNlKCdbKipdJywgdGhpcy5wYXJlbnRQb3NpdGlvbikgOiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgYXBpS2V5ID0gZmllbGRUZW1wPy5hcGlfa2V5ID8gZmllbGRUZW1wPy5hcGlfa2V5LnJlcGxhY2UoJ1sqXScsIHZhbHVlKSA6ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGNvbnN0IGZvcm1hdHRlZFZhbDogYW55ID0ge1xyXG4gICAgICAgICAgICBhcGlfa2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gYXBpS2V5IDogJycsXHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZDogaWQsXHJcbiAgICAgICAgICAgIGh0bWxfaWQ6ICBpZCxcclxuICAgICAgICAgICAgcmVzcG9uc2VfYXBpX2tleTogdGhpcy5yZXR1cm5SZXF1ZXN0T3JSZXNwb25zZUFwaUtleXMoJ3Jlc3BvbnNlJywgZmllbGRUZW1wPy5yZXNwb25zZV9hcGlfa2V5LCB2YWx1ZSwgdGhpcy5wYXJlbnRQb3NpdGlvbiksXHJcbiAgICAgICAgICAgIHJlcXVlc3RfYXBpX2tleTogdGhpcy5yZXR1cm5SZXF1ZXN0T3JSZXNwb25zZUFwaUtleXMoJ3JlcXVlc3QnLCBmaWVsZFRlbXA/LnJlcXVlc3RfYXBpX2tleSwgdmFsdWUsIHRoaXMucGFyZW50UG9zaXRpb24pLFxyXG4gICAgICAgICAgICBsaW5rZWRCbG9ja0lkOiB0aGlzLmJsb2NrSWQsXHJcbiAgICAgICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgIGlzQXBpUmVzcG9uc2U6IHRoaXMuaXNBcGlSZXNwb25zZSxcclxuICAgICAgICAgICAgdmFsdWU6IHRoaXMucmV0dXJuRmllbGREYXRhRm9yTGFiZWwoZmllbGRUZW1wLCB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gYXBpS2V5IDpcclxuICAgICAgICAgICAgICAgIHRoaXMucmV0dXJuUmVxdWVzdE9yUmVzcG9uc2VBcGlLZXlzKCdyZXNwb25zZScsIGZpZWxkVGVtcD8ucmVzcG9uc2VfYXBpX2tleSwgdmFsdWUsIHRoaXMucGFyZW50UG9zaXRpb24pLCBpZCwgdmFsdWUpLFxyXG4gICAgICAgICAgICBwb3NpdGlvbjogYXJyYXlQb3MsXHJcbiAgICAgICAgICAgIHBhcmVudFBvc2l0aW9uOiB0aGlzLnBhcmVudFBvc2l0aW9uLFxyXG4gICAgICAgICAgICBwYXJlbnRCbG9ja0lkOiB0aGlzLnBhcmVudEJsb2NrLFxyXG4gICAgICAgICAgICBldmVudF9saXN0OiBmaWVsZFRlbXA/LmV2ZW50X2xpc3QgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGZpZWxkVGVtcD8uZXZlbnRfbGlzdCkpIDogW10sXHJcbiAgICAgICAgICAgIHJlc0lzRGlmZkhhbmRsZXI6IGZpZWxkVGVtcD8ucmVzcG9uc2VfYXBpX2tleSAmJiB0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUodGhpcy5maWVsZERhdGE/LnJlc3BvbnNlX2FwaV9rZXkpXHJcbiAgICAgICAgICAgICAgICAhPT0gdGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGZpZWxkVGVtcD8ucmVzcG9uc2VfYXBpX2tleSkgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmKHR5cGUgIT0gXCJzdXBlckJsb2Nrc1wiKXtcclxuICAgICAgICAgICAgLy8gZm9ybWF0dGVkVmFsLm1hbmRhdG9yeSA9IGZpZWxkVGVtcD8uaXNfbWFuZGF0b3J5ID09PSAxIHx8IGZpZWxkVGVtcD8uaXNfbWFuZGF0b3J5ID09PSAyO1xyXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWwubWFuZGF0b3J5ID0gZmllbGRUZW1wPy5pc19tYW5kYXRvcnkgPT09IDE7IC8vIEJ5IGRlZmFsdCBtYW5kYXRvcnkgc2hvdWxkIGJlIGZhbHNlIGZvciBjb25kaXRpb25hbCBtYW5kYXRvcnkgZmllbGRzIFxyXG4gICAgICAgICAgICBmb3JtYXR0ZWRWYWwuZWRpdGFibGUgPSBmaWVsZFRlbXA/LmlzX2VkaXRhYmxlID09PSAxIHx8IGZpZWxkVGVtcD8uaXNfZWRpdGFibGUgPT09IDI7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbC52aXNpYmxlID0gZmllbGRUZW1wPy5pc19kaXNwbGF5ID09PSAxIHx8IGZpZWxkVGVtcD8uaXNfZGlzcGxheSA9PT0gMjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmICh0aGlzLnByZXNldERhdGEgJiYgdGhpcy5wcmVzZXREYXRhLnZhbHVlICYmIEFycmF5LmlzQXJyYXkodGhpcy5wcmVzZXREYXRhLnZhbHVlKSkge1xyXG4gICAgICAgIC8vICAgICBmb3JtYXR0ZWRWYWwudmFsdWUgPSB0aGlzLnByZXNldERhdGEudmFsdWVbYXJyYXlQb3NdICYmXHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzLnByZXNldERhdGEudmFsdWVbYXJyYXlQb3NdW2ZpZWxkVGVtcD8ucmVzcG9uc2VfYXBpX2tleV0gP1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpcy5wcmVzZXREYXRhLnZhbHVlW2FycmF5UG9zXVtmaWVsZFRlbXA/LnJlc3BvbnNlX2FwaV9rZXldIDogZm9ybWF0dGVkVmFsLnZhbHVlO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YSAmJiB0aGlzLnByZXNldERhdGEudmFsdWUgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnByZXNldERhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgIGZvcm1hdHRlZFZhbC52YWx1ZSA9IHRoaXMucHJlc2V0RGF0YS52YWx1ZVthcnJheVBvc10gJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc2V0RGF0YS52YWx1ZVthcnJheVBvc11bZmllbGRUZW1wLnJlc3BvbnNlX2FwaV9rZXldID9cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlc2V0RGF0YS52YWx1ZVthcnJheVBvc11bZmllbGRUZW1wLnJlc3BvbnNlX2FwaV9rZXldIDogZm9ybWF0dGVkVmFsLnZhbHVlO1xyXG5cclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRWYWx1ZU5ldyA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKGZvcm1hdHRlZFZhbC51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICBpZiAoY3VycmVudFZhbHVlTmV3ICYmIGN1cnJlbnRWYWx1ZU5ldyAhPSB1bmRlZmluZWQgJiYgY3VycmVudFZhbHVlTmV3ICE9IG51bGwgJiYgY3VycmVudFZhbHVlTmV3ICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICBmb3JtYXR0ZWRWYWwudmFsdWUgPSBjdXJyZW50VmFsdWVOZXcgPyBjdXJyZW50VmFsdWVOZXcgOiBmb3JtYXR0ZWRWYWwudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudFZhbHVlTmV3ID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQoZm9ybWF0dGVkVmFsLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIGlmIChjdXJyZW50VmFsdWVOZXcgJiYgY3VycmVudFZhbHVlTmV3ICE9IHVuZGVmaW5lZCAmJiBjdXJyZW50VmFsdWVOZXcgIT0gbnVsbCAmJiBjdXJyZW50VmFsdWVOZXcgIT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGZvcm1hdHRlZFZhbC52YWx1ZSA9IGN1cnJlbnRWYWx1ZU5ldyA/IGN1cnJlbnRWYWx1ZU5ldyA6IGZvcm1hdHRlZFZhbC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGNvbnN0IGVhb1ZhbHVlID0gZmllbGRUZW1wPy5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgPyBmaWVsZFRlbXA/LmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maW5kKHB2ID0+IHB2LnBhcmFtZXRlcl90eXBlID09PSAnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZScpIDogbnVsbDtcclxuICAgICAgICBpZiAoZWFvVmFsdWUpIHtcclxuICAgICAgICAgICAgZm9ybWF0dGVkVmFsWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10gPSB0aGlzLnJldHVyblJlcXVlc3RPclJlc3BvbnNlQXBpS2V5cygncmVxdWVzdCcsIGVhb1ZhbHVlLnZhbHVlLCB2YWx1ZSwgdGhpcy5wYXJlbnRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YU1hcFtkZWxldGVJbmRleF0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGF0YU1hcFtkZWxldGVJbmRleF0uaW5kZXhPZihpZCkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGFNYXBbZGVsZXRlSW5kZXhdLnB1c2goaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5kYXRhTWFwW2RlbGV0ZUluZGV4XSA9IFtpZF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmb3JtYXR0ZWRWYWw7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHByb2Nlc3NFdmVudExpc3Qocm93RGF0YSwgdW5pcXVlSWRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCB1SWQgaW4gcm93RGF0YSkge1xyXG4gICAgICAgICAgICBjb25zdCBmaWVsZERhdGEgPSByb3dEYXRhW3VJZF07XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgZmllbGREYXRhPy5ldmVudF9saXN0KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGVQYXJhbSBvZiBldmVudD8uZXZlbnRfcGFyYW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChlUGFyYW0/LmV2ZW50X2NvbmZpZz8uZGlzcGxheV9zdGVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgXCJTZXRWYWx1ZXNcIjpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSBcIkN1c3RvbUZ1bmN0aW9uc1wiOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcFR5cGVzID0gWydUYXJnZXRGaWVsZHMnLCAnVmFsdWVGaWVsZHMnLCAnVmFyaWFibGVzJywgJ1RhcmdldHMnXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBhZGRpX3BhcmFtIG9mIGVQYXJhbT8uaW52b2tlX2V2ZW50X2NvbmZpZz8uYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFkZGlfcGFyYW0ucGFyYW1ldGVyX3R5cGUgJiYgYWRkaV9wYXJhbS52YWx1ZSAmJiBwVHlwZXMuaW5jbHVkZXMoYWRkaV9wYXJhbS5wYXJhbWV0ZXJfdHlwZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFkZGlQYXJhbVZhbE5ldzogc3RyaW5nW10gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYWRkaVBhcmFtVmFscyA9IGFkZGlfcGFyYW0udmFsdWUuc3BsaXQoJ3wnKS5tYXAodmFsID0+IHZhbC50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGFkZGlQYXJhbVZhbCBvZiBhZGRpUGFyYW1WYWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoT2JqZWN0LmtleXModW5pcXVlSWRzKS5pbmNsdWRlcyhhZGRpUGFyYW1WYWwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaVBhcmFtVmFsTmV3LnB1c2godW5pcXVlSWRzW2FkZGlQYXJhbVZhbF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWRkaVBhcmFtVmFsTmV3LnB1c2goYWRkaVBhcmFtVmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhZGRpX3BhcmFtLnZhbHVlID0gYWRkaVBhcmFtVmFsTmV3LmpvaW4oJ3wnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaXNDaGlsZEJsb2NrKCkge1xyXG4gICAgICAgIHJldHVybiAodGhpcy5wYXJlbnRQb3NpdGlvbiAhPSB1bmRlZmluZWQgJiYgdGhpcy5wYXJlbnRQb3NpdGlvbiAhPSBudWxsKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgY291bnRlckRhdGEoKSB7XHJcbiAgICAgICAgY29uc3QgaXNDaGlsZCA9IHRoaXMuaXNDaGlsZEJsb2NrKCk7XHJcbiAgICAgICAgaWYgKGlzQ2hpbGQpIHsgXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkQ291bnRlcj8uW3RoaXMucGFyZW50UG9zaXRpb25dID8/IG51bGw7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuY291bnRlciA/PyBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG4gICAgb25CbG9ja0FkZCgpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImJsb2NrSWQ6XCIsIHRoaXMuYmxvY2tJZCk7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEJsb2NrKCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGlsZENvdW50ZXIgPSB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsLmxvY2FsU3RvcmFnZUdldE1heEJsb2NrQ291bnQodGhpcy5ibG9ja0lkKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuY2hpbGRDb3VudGVyW3RoaXMucGFyZW50UG9zaXRpb25dICYmIHRoaXMuY2hpbGRDb3VudGVyW3RoaXMucGFyZW50UG9zaXRpb25dLmZpbHRlcihlID0+IGUuYWN0aXZlID09PSB0cnVlKS5sZW5ndGggPCB0aGlzLm1heEJsb2Nrc0NvdW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ291bnRlclt0aGlzLnBhcmVudFBvc2l0aW9uXS5wdXNoKHsgYWN0aXZlOiB0cnVlLCBhY3RpdmVJbmRleDogMCB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRm9yIFJlc2V0dGluZyBBY3RpdmVJbmRleCBPbiBBZGRpbmcgb3IgUmVtb3ZpbmcgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2V0SW5kZXhPbkFkZE9yUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ291bnRlciA9IHRoaXMucmVzZXRTZXF1ZW5jZU9uQWN0aW9uKHRoaXMuY2hpbGRDb3VudGVyKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5sb2NhbFN0b3JhZ2VTZXRNYXhCbG9ja0NvdW50KHRoaXMuYmxvY2tJZCwgdGhpcy5jaGlsZENvdW50ZXIpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ZXJUZW1wID0gdGhpcy5jaGlsZENvdW50ZXJbdGhpcy5wYXJlbnRQb3NpdGlvbl07ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIFRvIEVuYWJsZSBvciBEaXNhYmxlIFxyXG4gICAgICAgICAgICB0aGlzLmNvdW50QWN0aXZlQmxvY2tzKCk7XHJcbiAgICAgICAgICAgIC8vIEZvY3VzIGFkZGVkIHZpZXdcclxuICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNDaGlsZFZpZXcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsSW50b0NoaWxkVmlldyh0aGlzLmNvdW50ZXJUZW1wLmxlbmd0aCAtIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyID0gdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5sb2NhbFN0b3JhZ2VHZXRNYXhCbG9ja0NvdW50KHRoaXMuYmxvY2tJZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50ZXIuZmlsdGVyKGUgPT4gZS5hY3RpdmUgPT09IHRydWUpLmxlbmd0aCA8IHRoaXMubWF4QmxvY2tzQ291bnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlci5wdXNoKHsgYWN0aXZlOiB0cnVlLCBhY3RpdmVJbmRleDogMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBGb3IgUmVzZXR0aW5nIEFjdGl2ZUluZGV4IE9uIEFkZGluZyBvciBSZW1vdmluZyBcclxuICAgICAgICAgICAgaWYgKHRoaXMucmVzZXRJbmRleE9uQWRkT3JSZW1vdmUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY291bnRlciA9IHRoaXMucmVzZXRTZXF1ZW5jZU9uQWN0aW9uKHRoaXMuY291bnRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5sb2NhbFN0b3JhZ2VTZXRNYXhCbG9ja0NvdW50KHRoaXMuYmxvY2tJZCwgdGhpcy5jb3VudGVyKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudGVyVGVtcCA9IHRoaXMucmVwZWF0YWJsZUJsb2NrRGF0YVV0aWwubG9jYWxTdG9yYWdlR2V0TWF4QmxvY2tDb3VudCh0aGlzLmJsb2NrSWQpO1xyXG4gICAgICAgICAgICAvLyBUbyBFbmFibGUgb3IgRGlzYWJsZSBcclxuICAgICAgICAgICAgdGhpcy5jb3VudEFjdGl2ZUJsb2NrcygpO1xyXG4gICAgICAgICAgICAvLyBGb2N1cyBhZGRlZCB2aWV3XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZvY3VzQ2hpbGRWaWV3KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9DaGlsZFZpZXcoKHRoaXMuY291bnRlclRlbXAubGVuZ3RoIC0gMSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5vbkNvbXBvbmVudEV2ZW50QmF0Y2godGhpcy5maWVsZERhdGEsIHRoaXMucHJlc2V0RGF0YSwgdGhpcy5zdGVwSWQsIFwiT25BZGRcIiwge30sIGZhbHNlKTsgXHJcbiAgICAgICAgLy8gdGhpcy5wcm9jZXNzUm93RGF0YSh0aGlzLmNvdW50ZXJEYXRhLCAtMSwgZmFsc2UpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc091dHNpZGVPZkFuZ3VsYXJab25lKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byByZW1vdmUgYWxsIHRoZSByZXBldGFibGUgYmxvY2tzIGV4Y2VwdCB0aGUgb25lIHdpdGggdGhlIGluZGV4IDBcclxuICAgICAqL1xyXG4gICAgb25BbGxCbG9ja1JlbW92ZShyZXBldGFibGVCbG9ja0ZpZWxkSWRzKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBpZCBvZiByZXBldGFibGVCbG9ja0ZpZWxkSWRzKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGlkID09PSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICBpZiAoaWQgPT09IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNwb25zZU1hcCA9IHt9O1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvdW50ZXJEYXRhID0gdGhpcy5jb3VudGVyO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEJsb2NrKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ291bnRlciA9IHRoaXMucmVwZWF0YWJsZUJsb2NrRGF0YVV0aWwubG9jYWxTdG9yYWdlR2V0TWF4QmxvY2tDb3VudCh0aGlzLmJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXJEYXRhID0gdGhpcy5jaGlsZENvdW50ZXJbdGhpcy5wYXJlbnRQb3NpdGlvbl07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCh0aGlzLmVuYWJsZURlbGV0ZUxhc3RSb3cgJiYgKGNvdW50ZXJEYXRhLmZpbHRlcihlID0+IGUuYWN0aXZlID09PSB0cnVlKS5sZW5ndGggPj0gKHRoaXMuaXNWaXNpYmxlID8gMSA6IDApKSkgfHwgKCF0aGlzLmVuYWJsZURlbGV0ZUxhc3RSb3cgJiYgKGNvdW50ZXJEYXRhLmZpbHRlcihlID0+IGUuYWN0aXZlID09PSB0cnVlKS5sZW5ndGggPiAodGhpcy5pc1Zpc2libGUgPyAxIDogMCkpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJheU1hcCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5lbmFibGVEZWxldGVMYXN0Um93ID8gMCA6IHRoaXMuaXNWaXNpYmxlID8gMSA6IDA7IGluZGV4IDwgY291bnRlckRhdGEubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBjb3VudGVyRGF0YVtpbmRleF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50LmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXJyYXlNYXAgPSBbLi4uYXJyYXlNYXAsIC4uLnRoaXMuZGF0YU1hcFt0aGlzLmlzQ2hpbGRCbG9jaygpID8gJ18nICsgdGhpcy5wYXJlbnRQb3NpdGlvbiArICdfJyArIGluZGV4IDogaW5kZXhdXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmRhdGFNYXBbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Jvd0RhdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gLy8gY29uc29sZS5sb2codGhpcy5kYXRhTWFwW3RoaXMuY291bnRlcl0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuZGVsZXRlTXVsdGlwbGVBcHBEYXRhKGFycmF5TWFwKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBfdGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvdW50ZXIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZURlbGV0ZUxhc3RSb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLmNvdW50ZXIucHVzaCh7IGFjdGl2ZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIF90aGlzLnByb2Nlc3NSb3dEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5kYXRhTWFwKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNDaGlsZEJsb2NrKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5sb2NhbFN0b3JhZ2VTZXRNYXhCbG9ja0NvdW50KHRoaXMuYmxvY2tJZCwgdGhpcy5jb3VudGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHMuZmlsdGVyKChiZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJmLmZpZWxkX3R5cGUgPT0gJ1JlcGVhdGFibGUgQmxvY2snO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5tYXAoKGJsb2NrKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRCbG9ja0lkID0gYmxvY2sucmVwZWF0YWJsZV9ibG9ja19jb25maWd1cmF0aW9uLmxpbmtlZF9ibG9ja19pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0YWJsZUJsb2NrRGF0YVV0aWwubG9jYWxTdG9yYWdlU2V0TWF4QmxvY2tDb3VudChjaGlsZEJsb2NrSWQsIHsgJzAnOiBbeyBhY3RpdmU6IHRydWUgfV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0YWJsZUJsb2NrRGF0YVV0aWwubG9jYWxTdG9yYWdlU2V0TWF4QmxvY2tDb3VudCh0aGlzLmJsb2NrSWQsIHsgJzAnOiBbeyBhY3RpdmU6IHRydWUgfV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy50eXBlICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZGlvVmFsdWUgPSAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVEYXRhID0gWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFwcERhdGEudmFsdWUgPSAodGhpcy50eXBlID09PSAnU2luZ2xlJyA/IHRoaXMuc3RvcmVEYXRhWzBdIDogdGhpcy5zdG9yZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkU3RhdGUoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcHBEYXRhLCAuLi57XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICh0aGlzLnR5cGUgPT09ICdTaW5nbGUnID8gdGhpcy5zdG9yZURhdGFbMF0gOiB0aGlzLnN0b3JlRGF0YSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZGF0YU1hcFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUlkcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaWRzIG9mIHRoaXMuZGF0YU1hcFswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB1bmlxdWVJZHMucHVzaChpZHMuc3BsaXQoJyQnKVsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHsgdW5pcXVlX2lkczogdW5pcXVlSWRzLCBhcGlLZXlzOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEZvckVtcHR5U2Vzc2lvbi5lbWl0KHsgdW5pcXVlX2lkczogdW5pcXVlSWRzLCBhcGlLZXlzOiBbXSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkRlbGV0ZUJsb2NrKHBvczogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyKTtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydQcm9tcHREZWxldGUnXSkge1xyXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0TW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1Byb21wdERlbGV0ZSddXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUJsb2NrKHBvcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlQmxvY2socG9zKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVCbG9jayhwb3M6IG51bWJlcikge1xyXG4gICAgICAgIGxldCBjb3VudGVyRGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCBwcmV2Q291bnRlckRhdGE6IGFueVtdID0gW107XHJcbiAgICAgICAgbGV0IHByZXZDb3VudGVySW5kaWNlczogbnVtYmVyW10gPSBbXTtcclxuICAgICAgICBsZXQgZGVsZXRlUG9zaXRpb246IGFueSA9IHBvcztcclxuICAgICAgICBsZXQgbGVhc3RDb3VudCA9IHRoaXMuZW5hYmxlRGVsZXRlTGFzdFJvdyA/IDAgOiAxO1xyXG4gICAgICAgIGlmICh0aGlzLmlzQ2hpbGRCbG9jaygpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hpbGRDb3VudGVyID0gdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5sb2NhbFN0b3JhZ2VHZXRNYXhCbG9ja0NvdW50KHRoaXMuYmxvY2tJZCk7XHJcbiAgICAgICAgICAgIGNvdW50ZXJEYXRhID0gdGhpcy5jaGlsZENvdW50ZXJbdGhpcy5wYXJlbnRQb3NpdGlvbl07XHJcbiAgICAgICAgICAgIGRlbGV0ZVBvc2l0aW9uID0gJ18nICsgdGhpcy5wYXJlbnRQb3NpdGlvbiArICdfJyArIHBvcztcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb3VudGVyRGF0YSA9IHRoaXMuY291bnRlcjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb3VudGVyRGF0YS5maWx0ZXIoZSA9PiBlLmFjdGl2ZSA9PT0gdHJ1ZSkubGVuZ3RoID4gbGVhc3RDb3VudCkge1xyXG5cclxuICAgICAgICAgICAgcHJldkNvdW50ZXJEYXRhID0gWy4uLmNvdW50ZXJEYXRhXTtcclxuICAgICAgICAgICAgcHJldkNvdW50ZXJJbmRpY2VzID0gcHJldkNvdW50ZXJEYXRhLnJlZHVjZSgoYWNjLCBpdGVtLCBpbmRleCkgPT4geyBpZiAoaXRlbS5hY3RpdmUpIHsgYWNjLnB1c2goaW5kZXgpOyB9IHJldHVybiBhY2M7IH0sIFtdKTtcclxuXHJcbiAgICAgICAgICAgIGNvdW50ZXJEYXRhW3Bvc10uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hpbGRCbG9jaygpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoaWxkQ291bnRlclt0aGlzLnBhcmVudFBvc2l0aW9uXSA9IGNvdW50ZXJEYXRhO1xyXG4gICAgICAgICAgICAgICAgY291bnRlckRhdGEgPSB0aGlzLmNoaWxkQ291bnRlcjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gRm9yIFJlc2V0dGluZyBBY3RpdmVJbmRleCBPbiBBZGRpbmcgb3IgUmVtb3ZpbmcgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJlc2V0SW5kZXhPbkFkZE9yUmVtb3ZlKSB7XHJcbiAgICAgICAgICAgICAgICBjb3VudGVyRGF0YSA9IHRoaXMucmVzZXRTZXF1ZW5jZU9uQWN0aW9uKGNvdW50ZXJEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8qKiogcmVtb3ZlIGFsbCBjaGlsZCBibG9jayBvbiBtYWluIGJsb2NrIGRlbGV0ZSAqKioqKi8vXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc0NoaWxkQmxvY2soKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHMuZmlsdGVyKChiZikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiZi5maWVsZF90eXBlID09ICdSZXBlYXRhYmxlIEJsb2NrJztcclxuICAgICAgICAgICAgICAgIH0pLm1hcCgoYmxvY2spID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY2hpbGRCbG9ja0lkID0gYmxvY2sucmVwZWF0YWJsZV9ibG9ja19jb25maWd1cmF0aW9uLmxpbmtlZF9ibG9ja19pZDtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVwZWF0QmxvY2tJZExvY2FEYXRhID0gdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5nZXRSZXBlYXRhYmxlTG9jYWxTdG9yYWdlRGF0YUJ5QmxvY2tJZChjaGlsZEJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXBlYXRCbG9ja0lkTG9jYURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsdGVySWRzID0gT2JqZWN0LmtleXMocmVwZWF0QmxvY2tJZExvY2FEYXRhKS5maWx0ZXIoaSA9PiBpLmluY2x1ZGVzKCckJyArIHBvcyArICckJykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsLnJlbW92ZURhdGFVc2luZ011bHRpcGxlSWRzKGNoaWxkQmxvY2tJZCwgZmlsdGVySWRzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5kZWxldGVNdWx0aXBsZUFwcERhdGEoZmlsdGVySWRzKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGNoaWxkQ291bnREYXRhID0gdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5sb2NhbFN0b3JhZ2VHZXRNYXhCbG9ja0NvdW50KGNoaWxkQmxvY2tJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDb3VudERhdGFbcG9zXSA9IGNoaWxkQ291bnREYXRhW3Bvc10ubWFwKChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7IGFjdGl2ZTogZmFsc2UsIGFjdGl2ZUluZGV4OiAwIH07XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsLmxvY2FsU3RvcmFnZVNldE1heEJsb2NrQ291bnQoY2hpbGRCbG9ja0lkLCBjaGlsZENvdW50RGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAqKioqKiogLy9cclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5yZW1vdmVEYXRhVXNpbmdNdWx0aXBsZUlkcyh0aGlzLmJsb2NrSWQsIHRoaXMuZGF0YU1hcFtkZWxldGVQb3NpdGlvbl0pO1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLmRlbGV0ZU11bHRpcGxlQXBwRGF0YSh0aGlzLmRhdGFNYXBbZGVsZXRlUG9zaXRpb25dKTtcclxuICAgICAgICAgICAgdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5sb2NhbFN0b3JhZ2VTZXRNYXhCbG9ja0NvdW50KHRoaXMuYmxvY2tJZCwgY291bnRlckRhdGEpO1xyXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5kYXRhTWFwW2RlbGV0ZVBvc2l0aW9uXTtcclxuICAgICAgICAgICAgLy8gZm9yIHJhZGlvIHNlbGVjdFxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMudHlwZSA9PT0gJ1NpbmdsZScpIHtcclxuICAgICAgICAgICAgICAgIGlmIChOdW1iZXIodGhpcy5yYWRpb1ZhbHVlKSA9PT0gcG9zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IGNvdW50ZXJEYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDw9IHBvcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJEYXRhW2ldLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmFkaW9WYWx1ZSA9IFN0cmluZyhpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSA9IFtOdW1iZXIodGhpcy5yYWRpb1ZhbHVlKV07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZFN0YXRlKHsgLi4udGhpcy5hcHBEYXRhLCAuLi57IHZhbHVlOiBOdW1iZXIodGhpcy5yYWRpb1ZhbHVlKSB9IH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLm9uQ29tcG9uZW50RXZlbnRCYXRjaCh0aGlzLmZpZWxkRGF0YSwgdGhpcy5wcmVzZXREYXRhLCB0aGlzLnN0ZXBJZCwgXCJPblJlbW92ZVwiLCB7fSwgZmFsc2UpOyBcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS52YWxpZGF0ZUJ1dHRvbkZvclRhZ0VtaXR0ZXIuZW1pdCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmJ1dHRvblZhbGlkYXRpb25FbWl0dGVyLmVtaXQoKTtcclxuICAgICAgICAgICAgICAgIC8vIEVtaXQgdG8gUmVzZXQgQWN0aXZlSW5kZXggT24gQWRkaW5nIG9yIFJlbW92aW5nIFJCXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yZXNldEluZGV4T25BZGRPclJlbW92ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25BZGRPclJlbW92ZVJCLmVtaXQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gVG8gRW5hYmxlIG9yIERpc2FibGUgXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50QWN0aXZlQmxvY2tzKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9jdXMgYWRkZWQgdmlld1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZm9jdXNDaGlsZFZpZXcpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldkNvdW50ZXJJbmRpY2VzICYmIHByZXZDb3VudGVySW5kaWNlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1ckluZGV4ID0gcHJldkNvdW50ZXJJbmRpY2VzLmluZGV4T2YocG9zKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByZXYgPSAoY3VySW5kZXggPiAwID8gcHJldkNvdW50ZXJJbmRpY2VzW2N1ckluZGV4IC0gMV0gOiBudWxsKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5leHQgPSAoY3VySW5kZXggPCBwcmV2Q291bnRlckluZGljZXMubGVuZ3RoIC0gMSA/IHByZXZDb3VudGVySW5kaWNlc1tjdXJJbmRleCArIDFdIDogbnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXh0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbEludG9DaGlsZFZpZXcobmV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocHJldikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxJbnRvQ2hpbGRWaWV3KHByZXYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZGF0YU1hcCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXRTZXF1ZW5jZU9uQWN0aW9uKGNvdW50ZXJEYXRhOiBhbnkpIHtcclxuXHJcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoY291bnRlckRhdGEpKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIHJldHVybiBjb3VudGVyRGF0YS5tYXAoKGMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjLmFjdGl2ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvdW50ID0gY291bnQgKyAxOyBjWydhY3RpdmVJbmRleCddID0gY291bnQ7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNbJ2FjdGl2ZUluZGV4J10gPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjb3VudGVyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvdW50ZXJEYXRhLmhhc093blByb3BlcnR5KGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb3VudGVyRGF0YVtrZXldID0gdGhpcy5yZXNldFNlcXVlbmNlT25BY3Rpb24oY291bnRlckRhdGFba2V5XSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY291bnRlckRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGdldEJsb2NrRGF0YShmaWVsZDogYW55KTogYW55IHtcclxuICAgIC8vICAgICBsZXQgYmxvY2tEYXRhID0ge307XHJcbiAgICAvLyAgICAgaWYgKGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAvLyAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgZmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAvLyAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgY2FzZSAnZGVmYXVsdF92YWx1ZSc6XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgICAgIGJsb2NrRGF0YSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgICByZXR1cm4gYmxvY2tEYXRhO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIHByaXZhdGUgb25GaWVsZERhdGFVcGRhdGVkKGZpZWxkSWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZjpcIiwgZmllbGRJZCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25DaGVjayh2YWx1ZSk7XHJcbiAgICAgICAgLy8gdXBkYXRlIHRoZSBzdGF0ZSBvZiB0aGUgcmVwZWF0YWJsZSBibG9jayBpZiByZXF1aXJlZFxyXG4gICAgICAgIGlmICh0aGlzLmNvdW50ZXJEYXRhKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudGVyRGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWN0aW9uQ3VzdG9tQ2xhc3NbaV0gPSB0aGlzLmJsb2NrUmVuZGVyZWREYXRhPy5ibG9ja19zdHlsZSA/IHRoaXMuYmxvY2tSZW5kZXJlZERhdGE/LmJsb2NrX3N0eWxlPy5jdXN0b21fY2xhc3NfbmFtZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGE/LmN1c3RvbV9jbGFzc19jb25kaXRpb24gJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YT8uY3VzdG9tX2NsYXNzX2NvbmRpdGlvblsncXVlcnknXSAhPSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGN1c3RvbUNsYXNzQ29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tDdXN0b21DbGFzcyh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLCB0aGlzLnN0ZXBJZCArICckJyArIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgKyAnJCcgKyBpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXN0b21DbGFzc0NvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlY3Rpb25DdXN0b21DbGFzc1tpXSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbmRpdGlvbkNoZWNrKHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZWRpdGFibGUgPT09IDIpIHtcclxuICAgICAgICAgICAgY29uc3QgZWRpdGFibGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0VkaXRhYmxlKHRoaXMuZmllbGREYXRhLCBTdHJpbmcodGhpcy5hcHBEYXRhLmlkKSwgdmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoZWRpdGFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5idXR0b25FZGl0YWJsZSA9IGVkaXRhYmxlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oaWRlQWN0aW9uQnV0dG9uID0gZWRpdGFibGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc19kaXNwbGF5ID09PSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZpc2libGUgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5maWVsZERhdGEsIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmKHZpc2libGUpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLnByb2Nlc3NSb3dEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHZpc2libGU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIGJsb2NrIGlzIG5vdCB2aXNpYmxlLCBjaGVjayBhbmQgc2V0IHRoZSBtYW5kYXRvcnkgY29uZGl0aW9uIGZvciBmaWVsZHNcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0TWFuZGF0b3J5Q29uZGl0aW9uRm9yQmxvY2tGaWVsZHMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdGhlIG1hbmRhdG9yeSBjb25kaXRpb24gZm9yIGFsbCBmaWVsZHMgaW4gdGhlIGJsb2NrIHdoZW4gdGhlIGJsb2NrIGlzIG5vdCB2aXNpYmxlLlxyXG4gICAgICogVGhpcyBlbnN1cmVzIHRoYXQgaWYgdGhlIGJsb2NrIGlzIGhpZGRlbiwgYW55IGZpZWxkcyB0aGF0IHdlcmUgbWFuZGF0b3J5IGFyZSBzZXQgdG8gbm9uLW1hbmRhdG9yeS5cclxuICAgICAqL1xyXG4gICAgc2V0TWFuZGF0b3J5Q29uZGl0aW9uRm9yQmxvY2tGaWVsZHMoKSB7XHJcbiAgICAgICAgaWYoIXRoaXMuYmxvY2tSZW5kZXJlZERhdGEpIFxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgXHJcbiAgICAgICAgY29uc3QgYXBwRGF0YSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0QWxsQXBwU3RvcmVEYXRhKCk7XHJcbiAgICAgICAgaWYgKCFhcHBEYXRhKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSkge1xyXG4gICAgICAgICAgICAvLyBGaWx0ZXIgZmllbGRzIHRoYXQgYmVsb25nIHRvIHRoaXMgYmxvY2sgYW5kIHdlcmUgbWFuZGF0b3J5IG9yaWdpbmFsbHlcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzVG9VcGRhdGUgPSBhcHBEYXRhLmZpbHRlcihmaWVsZCA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCA9PT0gZmllbGQubGlua2VkQmxvY2tJZCAmJiBmaWVsZC5tYW5kYXRvcnlPcmlnaW5hbCAmJiBmaWVsZC52aXNpYmxlXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAvLyBCYXRjaCB1cGRhdGUgYWxsIGZpZWxkcyB0aGF0IG5lZWQgY2hhbmdlc1xyXG4gICAgICAgICAgICBpZiAoZmllbGRzVG9VcGRhdGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZmllbGRzVG9VcGRhdGUuZm9yRWFjaChmaWVsZCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBGaWx0ZXIgZmllbGRzIHRoYXQgYmVsb25nIHRvIHRoaXMgYmxvY2sgYW5kIGFyZSBtYW5kYXRvcnlcclxuICAgICAgICAgICAgY29uc3QgZmllbGRzVG9VcGRhdGUgPSBhcHBEYXRhLmZpbHRlcihmaWVsZCA9PlxyXG4gICAgICAgICAgICAgICAgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCA9PT0gZmllbGQubGlua2VkQmxvY2tJZCAmJiBmaWVsZC5tYW5kYXRvcnlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIEJhdGNoIHVwZGF0ZSBhbGwgZmllbGRzIHRoYXQgbmVlZCBjaGFuZ2VzXHJcbiAgICAgICAgICAgIGlmIChmaWVsZHNUb1VwZGF0ZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmaWVsZHNUb1VwZGF0ZS5mb3JFYWNoKGZpZWxkID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5maWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5T3JpZ2luYWw6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgY2hlY2tGaWVsZFZpc2liaWxpdHkoZmllbGQ6IGFueSwgcm93RGF0YTogYW55KSB7ICAgICAgICBcclxuICAgICAgICBpZiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAyKVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KGZpZWxkLCByb3dEYXRhLmFwaV9rZXksIHJvd0RhdGEudmFsdWUpO1xyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0TWF4SW5kZXgocmVzOiBhbnkpIHtcclxuICAgICAgICBsZXQgaGFzQVBJS2V5ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgbWF4ID0gMDtcclxuICAgICAgICAgICAgbGV0IGFwaUtleXMgPSBbXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCB0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBUElLZXkpIHtcclxuICAgICAgICAgICAgICAgIGFwaUtleXMgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcGlLZXlzID0gdGhpcy5yZXR1cm5BUElLZXlGb3JNdWx0aXBsZUFwaUtleXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBhcGlLZXkucmVwbGFjZSgnKicsICdcXFxcZCsnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFsvZywgJ1xcXFxbJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxdL2csICdcXFxcXScpO1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMocmVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGtleS5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBUElLZXkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlTWFwW2tleV0gPSByZXNba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgY3VyckluZGV4ID0gcmVzdWx0WzBdLnJlcGxhY2UoYXBpS2V5LnJlcGxhY2UoJ1sqXScsICcnKSwgJycpLnJlcGxhY2UoJ1snLCAnJykucmVwbGFjZSgnXScsICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1heCA8IE51bWJlcihjdXJySW5kZXgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXggPSBOdW1iZXIoY3VyckluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaGFzQVBJS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0Q291bnRlciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IE51bWJlcihtYXgpICsgMTsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRDb3VudGVyLnB1c2goeyBhY3RpdmU6IHRydWUsIGFjdGl2ZUluZGV4OiBOdW1iZXIoaW5kZXgpICsgMSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNBcGlSZXNwb25zZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGVhdGFibGVCbG9ja0RhdGFVdGlsLnJlbW92ZUJ5QmxvY2tJZCh0aGlzLmJsb2NrSWQpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRhdGFNYXBJZHMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMuZGF0YU1hcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhTWFwSWQgPSB0aGlzLmRhdGFNYXBba2V5XTtcclxuICAgICAgICAgICAgICAgICAgICBkYXRhTWFwSWRzID0gZGF0YU1hcElkcy5jb25jYXQoZGF0YU1hcElkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuZGVsZXRlTXVsdGlwbGVBcHBEYXRhKGRhdGFNYXBJZHMpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRDb3VudGVyO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEJsb2NrKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jaGlsZENvdW50ZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNDaGlsZEJsb2NrKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNoaWxkQ291bnRlcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jb3VudGVyO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNoZWNrSWZSZXNIYXNCbGFua0RhdGEocmVzKSB7XHJcbiAgICAgICAgbGV0IGZsYWcgPSBmYWxzZTtcclxuICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgIGxldCBhcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFQSUtleSkge1xyXG4gICAgICAgICAgICAgICAgYXBpS2V5cyA9IFt0aGlzLmZpZWxkRGF0YS5hcGlfa2V5XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGFwaUtleXMgPSB0aGlzLnJldHVybkFQSUtleUZvck11bHRpcGxlQXBpS2V5cygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYXBpS2V5IG9mIGFwaUtleXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICghYXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBhcGlLZXkucmVwbGFjZSgnWypdJywgJycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc1trZXldICYmIHJlc1trZXldLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmbGFnO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tJZlJlc0hhc1JlcGVhdGVkRGF0YShyZXMpIHtcclxuICAgICAgICBsZXQgaGFzQVBJS2V5ID0gZmFsc2U7XHJcbiAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICBsZXQgYXBpS2V5cztcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBUElLZXkpIHtcclxuICAgICAgICAgICAgICAgIGFwaUtleXMgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhcGlLZXlzID0gdGhpcy5yZXR1cm5BUElLZXlGb3JNdWx0aXBsZUFwaUtleXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGFwaUtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVnZXggPSBhcGlLZXkucmVwbGFjZSgnKicsICdcXFxcZCsnKVxyXG4gICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cXFsvZywgJ1xcXFxbJylcclxuICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXFxdL2csICdcXFxcXScpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHJlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoa2V5LmluZGV4T2YoJ1sqXScpIDw9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGtleS5tYXRjaChuZXcgUmVnRXhwKHJlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0FQSUtleSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYXNBUElLZXkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBoYXNBUElLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwZWF0YWJsZUJsb2NrQ2hhbmdlKGRhdGE6IGFueSwgaXNDaGVja2VkOiBib29sZWFuKSB7XHJcbiAgICAgICAgaWYgKGlzQ2hlY2tlZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy50eXBlID09PSAnU2luZ2xlJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdG9yZURhdGEgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSA9IFsuLi50aGlzLnN0b3JlRGF0YSwgLi4uW2RhdGFdXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zdG9yZURhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGkgb2YgdGhpcy5zdG9yZURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaSAhPT0gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSA9IGFycjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0b3JlUHJpbWFyeUtleSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0b3JlUHJpbWFyeUtleSgpIHtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkU3RhdGUoe1xyXG4gICAgICAgICAgICAuLi50aGlzLmFwcERhdGEsIC4uLntcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAodGhpcy50eXBlID09PSAnU2luZ2xlJyA/IHRoaXMuc3RvcmVEYXRhWzBdIDogdGhpcy5zdG9yZURhdGEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVN0YXRlKGFwcERhdGE6IEFwcERhdGEpIHtcclxuICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEFwcERhdGFCeUZpZWxkSWQoU3RyaW5nKGFwcERhdGEuaWQpKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZSh2YWwgPT4ge1xyXG4gICAgICAgICAgICBpZiAodmFsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsLmlkID09PSBhcHBEYXRhLmlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gU3RhdGUgZm91bmRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGEudmFsdWUgPSB2YWwudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnR5cGUgPT09ICdTaW5nbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJhZGlvVmFsdWUgPSBTdHJpbmcodmFsLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3JlRGF0YSA9IFt2YWwudmFsdWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGRTdGF0ZShhcHBEYXRhKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIENyZWF0ZSBuZXcgc3RhdGVcclxuICAgICAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3RmllbGRTdGF0ZShhcHBEYXRhKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU5ld0ZpZWxkU3RhdGUoYXBwRGF0YSkge1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuYWRkQXBwRGF0YShhcHBEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVGaWVsZFN0YXRlKGFwcERhdGEpIHtcclxuICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoYXBwRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgZGlzYWJsZVJlbW92ZUJ0bklmQXJyYXlFbXB0eSgpIHtcclxuICAgICAgICBpZiAodGhpcy5jb3VudGVyLmZpbHRlcihlID0+IGUuYWN0aXZlID09PSB0cnVlKS5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBSZW1vdmUgdGhpcyBmdW5jdGlvbiB3aGVuIG9uY2UgdGhlIG1hcCBjb21lcyBmcm9tIHRoZSBXRkUgRW5kXHJcbiAgICBzZXRBc3NvY2lhdGVkTWFwKCkge1xyXG4gICAgICAgIGNvbnN0IGRlcGVuZGVudEZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5lZGl0YWJsZV9jb25kaXRpb24gJiYgdGhpcy5maWVsZERhdGEuZWRpdGFibGVfY29uZGl0aW9uLmNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbmRpdGlvbiBvZiB0aGlzLmZpZWxkRGF0YS5lZGl0YWJsZV9jb25kaXRpb24uY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBkZXBlbmRlbnRGaWVsZHMucHVzaChjb25kaXRpb24uZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5kaXNwbGF5X2NvbmRpdGlvbiAmJiB0aGlzLmZpZWxkRGF0YS5kaXNwbGF5X2NvbmRpdGlvbi5jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgdGhpcy5maWVsZERhdGEuZGlzcGxheV9jb25kaXRpb24uY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBkZXBlbmRlbnRGaWVsZHMucHVzaChjb25kaXRpb24uZmllbGQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXNzb2NpYXRlZE1hcFV0aWwuc2V0KHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgWy4uLiBuZXcgU2V0KGRlcGVuZGVudEZpZWxkcyldKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBmaWVsZCBsYWJlbCBvciB0aGUgdmFsdWUgb2YgdGhlIGxhYmVsXHJcbiAgICAgKiBAcGFyYW0gZmllbGRUZW1wIGZpZWxkIERhdGFcclxuICAgICAqIEBwYXJhbSBhcGlLZXkgdGhlIGFwaSBrZXkgcmVzcG9uc2UgYXBpIGtleSBvciBub3JtYWwgYXBpIGtleVxyXG4gICAgICogQHBhcmFtIGlkIGZpZWxkIGlkXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmV0dXJuRmllbGREYXRhRm9yTGFiZWwoZmllbGRUZW1wLCBhcGlLZXksIGlkLCBwb3NWYWwpIHtcclxuICAgICAgICBsZXQgcmV0dXJuVmFsdWU7XHJcbiAgICAgICAgaWYgKGZpZWxkVGVtcD8uZmllbGRfdHlwZSA9PT0gJ2xhYmVsJyAmJiAhKHRoaXMuaXNTaW5nbGVBUElLZXkgPyBmaWVsZFRlbXA/LmFwaV9rZXkgOiBmaWVsZFRlbXA/LnJlc3BvbnNlX2FwaV9rZXkpKSB7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gZmllbGRUZW1wPy5maWVsZF9sYWJlbDtcclxuICAgICAgICAgICAgaWYgKHJldHVyblZhbHVlICYmIHJldHVyblZhbHVlLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBrZXlzID0gKHJldHVyblZhbHVlLnNwbGl0KCcoKGR5bmFtaWMpKScpWzFdKS5tYXRjaChuZXcgUmVnRXhwKC9cXCUoLio/KVxcJS9nKSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBpS2V5MSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhcGlLZXkgPSBhcGlLZXkxLnNwbGl0KCclJylbMV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleVZhbHVlID0gdGhpcy5yZXR1cm5SZXF1ZXN0T3JSZXNwb25zZUFwaUtleXMoJ3Jlc3BvbnNlJywgYXBpS2V5LCBwb3NWYWwsIHRoaXMucGFyZW50UG9zaXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHJldHVyblZhbHVlLnJlcGxhY2UoJyUnICsgYXBpS2V5ICsgJyUnLCBrZXlWYWx1ZSAhPT0gdW5kZWZpbmVkID8gJyUnICsga2V5VmFsdWUgKyAnJScgOiAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0aGlzLnJldHVybkZpZWxkVmFsdWUoYXBpS2V5LCBpZCk7XHJcbiAgICAgICAgICAgIGlmIChyZXR1cm5WYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWZhdWx0VmFsdWUgPSBmaWVsZFRlbXA/LmFkZGl0aW9uYWxfcGFyYW1ldGVycyA/IGZpZWxkVGVtcD8uYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbmQoaSA9PiBpLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGlmIChkZWZhdWx0VmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGRlZmF1bHRWYWx1ZS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmV0dXJuVmFsdWUgPyByZXR1cm5WYWx1ZSA6ICcnO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIHZhbHVlIGluIHJlc3BlY3Qgb3QgdGhlIGFwaSBrZXkgYmFzZWQgb24gdGhlXHJcbiAgICAgKiBjb25kaXRpb24gaWYgaXQgdXNlcyBzaW5nbGUgb3IgbXVsdGlwbGUgYXBpIGtleVxyXG4gICAgICogQHBhcmFtIGFwaUtleSB0aGUgYXBpIGtleSByZXNwb25zZSBhcGkga2V5IG9yIG5vcm1hbCBhcGkga2V5XHJcbiAgICAgKiBAcGFyYW0gaWQgZmllbGQgaWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5GaWVsZFZhbHVlKGFwaUtleSwgaWQpIHtcclxuICAgICAgICAvLyBUT0RPOiBDaGVjayBmdW5jdGlvbmFsaXR5XHJcbiAgICAgICAgbGV0IHZhbHVlO1xyXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQVBJS2V5KSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXNwb25zZU1hcFthcGlLZXldO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleS5pbmNsdWRlcygnKycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25jYXRLZXlzID0ga2V5LnNwbGl0KCcrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBzaW5nbGVLZXkgb2YgY29uY2F0S2V5cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBjb25jYXRLZXlzLmluZGV4T2Yoc2luZ2xlS2V5KSA9PT0gMCA/IHRoaXMucmVzcG9uc2VNYXBbc2luZ2xlS2V5XSA6IHZhbHVlICsgJyAnICsgdGhpcy5yZXNwb25zZU1hcFtzaW5nbGVLZXldO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5yZXNwb25zZU1hcC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0aGlzLnJlc3BvbnNlTWFwW2tleV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB2YWxUZW1wID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLmdldEFycmF5V2l0aEluZGV4KHRoaXMucmVzcG9uc2VNYXAsIGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbFRlbXApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWxUZW1wO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdmFsdWUgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB2YWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHJldHVybnMgdGhlIG11bHRpcGxlIGFwaSBrZXlzIGJhc2VkIG9uIHRoZSB0eXBlIG9mIHRoZSBrZXlcclxuICAgICAqIEBwYXJhbSB0eXBlIHRoZSB0eXBlIG9mIHRoZSBrZXlcclxuICAgICAqIEBwYXJhbSBrZXkgdGhlIGFwaSBrZXlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5SZXF1ZXN0T3JSZXNwb25zZUFwaUtleXModHlwZSwga2V5LCBwb3NpdGlvbiwgcGFyZW50UG9zaXRpb24gPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xlQVBJS2V5ICYmIGtleSkge1xyXG4gICAgICAgICAgICBpZiAoIWtleS5pbmNsdWRlcygnfHwnKSkge1xyXG4gICAgICAgICAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcKlxcXS9nLCBwb3NpdGlvbik7IC8vIGNoYW5nZSBbKl0gd2l0aCBbIGluZGV4IF1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzQ2hpbGRCbG9jaygpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAga2V5ID0ga2V5LnJlcGxhY2UoL1xcW1xcKlxcKlxcXS9nLCAnWycgKyBwYXJlbnRQb3NpdGlvbiArICddJyk7IC8vIGNoYW5nZSBbKipdIHdpdGggWyBwYXJlbnRpbmRleCBdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0eXBlID09PSAncmVzcG9uc2UnID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoa2V5KSA6IGtleSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbmV3S2V5QXJyID0gW107XHJcbiAgICAgICAgICAgICAgICBrZXkuc3BsaXQoJ3x8JykuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgc3RhckNvdW50ID0gZWxlbWVudC5zcGxpdCgnWypdJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXJDb3VudCAmJiBzdGFyQ291bnQubGVuZ3RoID4gMikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdLZXlBcnIucHVzaChlbGVtZW50LnJlcGxhY2UoL1xcW1xcKlxcXS8sIHBvc2l0aW9uKSk7IC8vIGNoYW5nZSBbKl0gd2l0aCBbIGluZGV4IF1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdLZXlBcnIucHVzaChlbGVtZW50KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGUgPT09ICdyZXNwb25zZScgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhuZXdLZXlBcnIuam9pbignfCcpKSA6IG5ld0tleUFyci5qb2luKCd8JykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHJldHVybnMgdGhlIGxhc3QgaW5kZXggb2YgdGhlIGFwaSBrZXlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXR1cm5BUElLZXlGb3JNdWx0aXBsZUFwaUtleXMoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkuaW5jbHVkZXMoJ3x8JykpIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGFsbCByZXNwb25zZSBrZXlzIHNlcGFyYXRlbHkgc28gdGhlXHJcbiAgICAgICAgICAgIC8vIGRhdGEgbWFwIHN0b3JlcyB0aGUgdmFsdWVzIG9mIGVhY2ggYW5kIGV2ZXJ5IGtleVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleS5zcGxpdCgnfHwnKS5tYXAoc3RyID0+IHN0ci50cmltKCkpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpO1xyXG4gICAgICAgICAgICByZXR1cm4ga2V5cztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0dGVyIHNldHRlciBnb2VzIGhlcmVcclxuICAgIGdldCBpc1NpbmdsZUFQSUtleSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpbmdsZUFwaUtleScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy52YXJpYWJsZU9iaikge1xyXG4gICAgICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9ialtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGF6eUludGVydmFsKSB7XHJcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy5sYXp5SW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNvdW50ZXIgPSBbXTtcclxuICAgICAgICB0aGlzLmNoaWxkQ291bnRlciA9IHt9O1xyXG4gICAgICAgIHRoaXMucmVwZWF0ZWJsZUZpZWxkc1Jvd3MgPSBbXTtcclxuICAgICAgICB0aGlzLmRhdGFNYXAgPSB7fTtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdidXR0b25FZGl0YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9ICovXHJcbiAgICB9XHJcbiAgICBzZXRDb25kaXRpb25zKGNoaWxkQ29uZGl0aW9uczogQ2hpbGRDb25kaXRpb24sIHR5cGUpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0cnVlO1xyXG4gICAgICAgIGlmIChjaGlsZENvbmRpdGlvbnMgJiYgY2hpbGRDb25kaXRpb25zLmV4Y2VwdGlvbkZpZWxkcyAmJiBjaGlsZENvbmRpdGlvbnMuZXhjZXB0aW9uRmllbGRzLmxlbmd0aCA+IDAgJiYgY2hpbGRDb25kaXRpb25zLmV4Y2VwdGlvbkZpZWxkcy5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hlY2sgJiYgY2hpbGRDb25kaXRpb25zICYmIGNoaWxkQ29uZGl0aW9ucy5pc0FjdGl2ZSkge1xyXG4gICAgICAgICAgICBpZiAoY2hpbGRDb25kaXRpb25zLmZpZWxkcyAmJiBjaGlsZENvbmRpdGlvbnMuZmllbGRzLmxlbmd0aCA+IDAgJiYgY2hpbGRDb25kaXRpb25zLmZpZWxkcy5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzW3R5cGVdID0gY2hpbGRDb25kaXRpb25zLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25PYmpbdHlwZV0gPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZGl0aW9ucy5vdmVycmlkZUFsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codHlwZSwgb2JqKTtcclxuICAgICAgICAgICAgICAgIHRoaXNbdHlwZV0gPSBjaGlsZENvbmRpdGlvbnMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbk9ialt0eXBlXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbk9ialt0eXBlXSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcblxyXG4gICAgaXNIVE1MKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IC8oPChbXj5dKyk+KS9pZztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb3BlbkFjY29yZGlvbkNsaWNrZWQoZmllbGQ6IGFueSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGluaXRpYWwgZmllbGRfdmFsdWVzIHRoYXQgYXJlIGNvbmZpZ3VyZWQgb3JpZ2luYWxseVxyXG4gICAgICAgIGlmKGZpZWxkLmZpZWxkX3ZhbHVlc1swXT8uaGFzT3duUHJvcGVydHkoXCJ2YWx1ZVwiKSkge1xyXG4gICAgICAgICAgICBkZWxldGUgZmllbGQuZmllbGRfdmFsdWVzWzBdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihmaWVsZD8uZmllbGRfdmFsdWVzW2ldPy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzcGxheUFjY29yZGlvbihmaWVsZC51bmlxdWVfaWQsIGkpO1xyXG4gICAgICAgIH0gIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyByZXZlcnJ0ZWQgb3JpZ2luYWwgXHJcbiAgICAgICAgICAgIGxldCBkdW1teUJsb2NrID0gdGhpcy5kdW1teUJsb2Nrc1tmaWVsZC5wb3NzaWJsZV92YWx1ZXNbMF0rJyQnK2ldO1xyXG4gICAgICAgICAgICAvLyBjb21tZW50ZWRcclxuICAgICAgICAgICAgLy8gbGV0IGR1bW15QmxvY2sgPSBPYmplY3QuZW50cmllcyh0aGlzLmR1bW15QmxvY2tzKS5maWx0ZXIoKFtibG9ja0tleSwgX10pID0+IFxyXG4gICAgICAgICAgICAvLyAgICAgYmxvY2tLZXkuaW5jbHVkZXMoJyQnK2kpXHJcbiAgICAgICAgICAgIC8vICAgKVswXVsxXTtcclxuICAgICAgICAgICAgaWYoZHVtbXlCbG9jaykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGdCbG9ja0lkID0gKGR1bW15QmxvY2sgYXMgeyBibG9ja0lkOiBzdHJpbmcgfSkuYmxvY2tJZDtcclxuICAgICAgICAgICAgICAgIGxldCBwb3MgPShkdW1teUJsb2NrIGFzIHsgcG9zaXRpb246IHN0cmluZyB9KS5wb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVCbG9ja0lkSWZOdWxsID0gZ0Jsb2NrSWQ7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uTG9hZFJlcGVhdEJsb2NrKGdCbG9ja0lkLCBwb3MsIGksIGZpZWxkLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIH1lbHNlIGlmKGR1bW15QmxvY2sgPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMuZHVtbXlCbG9ja3MpLm1hcCh4ID0+e1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHguaW5jbHVkZXMoZmllbGQucG9zc2libGVfdmFsdWVzWzBdKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBkdW1teUJsb2NrID0gdGhpcy5kdW1teUJsb2Nrc1tmaWVsZC5wb3NzaWJsZV92YWx1ZXNbMF0rJyQnKzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ0Jsb2NrSWQgPSAoZHVtbXlCbG9jayBhcyB7IGJsb2NrSWQ6IHN0cmluZyB9KS5ibG9ja0lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0oZHVtbXlCbG9jayBhcyB7IHBvc2l0aW9uOiBzdHJpbmcgfSkucG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RvcmVCbG9ja0lkSWZOdWxsID0gZ0Jsb2NrSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25Mb2FkUmVwZWF0QmxvY2soZ0Jsb2NrSWQsIHBvcywgaSwgZmllbGQudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzb21ldGhpbmcgd2VudCB3cm9uZ1wiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICB9XHJcblxyXG4gICAgZGlzcGxheUFjY29yZGlvbih1bmlxdWVfaWQ6IHN0cmluZywgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93c1tpXVt1bmlxdWVfaWRdLmFjY29yZGlvbkluZm8uc2hvd1NlY3Rpb24gPSAhdGhpcy5yZXBlYXRlYmxlRmllbGRzUm93c1tpXVt1bmlxdWVfaWRdLmFjY29yZGlvbkluZm8uc2hvd1NlY3Rpb247XHJcbiAgICB9XHJcblxyXG59IiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInJlYXBlYXRhYmxlLWxvYWRlciB7e3JlYXBlYXRhYmxlTG9hZGluZyA/ICdyZWFwZWF0YWJsZS1wZW5kaW5nJzoncmVhcGVhdGFibGUtbG9hZGVkJ319XCI+PC9kaXY+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBwb3Mgb2YgY291bnRlckRhdGE7IGxldCBpID0gaW5kZXg7IHRyYWNrQnk6IHRyYWNrQnlJZENvdW50ZXI7XCI+XHJcbiAgICAgICAgPHNlY3Rpb24gKm5nSWY9XCJwb3MuYWN0aXZlICYmIGJsb2NrUmVuZGVyZWREYXRhICYmIHJlcGVhdGVibGVGaWVsZHNSb3dzW2ldXCIgaWQ9XCJ7eyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCB9fVwiIFthdHRyLmFyaWEtbGFiZWxdPVwiYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gYWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogdW5kZWZpbmVkXCIgW2F0dHIucm9sZV09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLVJvbGUnXVwiIGNsYXNzPVwiY2VlLWJsb2NrIHNlY3Rpb25SYi17e2l9fSB7e2Jsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkfX0tc2lkZWJhci1pdGVtLXt7aX19ICB7e3BhcmVudFBvc2l0aW9uID8gKGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkKyctcC0nK3BhcmVudFBvc2l0aW9uKyctYy0nK2kpIDogKGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkKyctYy0nK2kpfX0gIHRlbXBsYXRlLXt7dGVtcGxhdGVJZH19IGJsb2NrLXt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19IHt7c3RvcmVEYXRhLmxlbmd0aCA+IDEgPyBzdG9yZURhdGEuaW5kZXhPZihpKSA+PSAwID8gJ3NlbGVjdGVkJyA6ICcnIDogc3RvcmVEYXRhWzBdID09IGkgPyAnc2VsZWN0ZWQnIDogJyd9fSB7e2lzX2Jvb3RzdHJhcCA/ICdyb3cnOiAnJ319IHt7cmVhcGVhdGFibGVMb2FkaW5nID8gJ3JlYXBlYXRhYmxlLXBlbmRpbmcnOidyZWFwZWF0YWJsZS1sb2FkZWQnfX0ge3tzZWN0aW9uQ3VzdG9tQ2xhc3NbaV0gPyBzZWN0aW9uQ3VzdG9tQ2xhc3NbaV06ICcnfX0gXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxpbnB1dCAqbmdJZj1cInR5cGUgPT0gJ011bHRpJ1wiIHR5cGU9XCJjaGVja2JveFwiIG5hbWU9XCJjaGVja197e2l9fVwiIGlkPVwiY2hlY2tfe3tpfX1cIiBjbGFzcz1cInJlcGVhdGVkLWNoZWNrYm94XCIgKGNoYW5nZSk9XCJyZXBlYXRhYmxlQmxvY2tDaGFuZ2UoaSwgJGV2ZW50LnRhcmdldC5jaGVja2VkKVwiIFtjaGVja2VkXT1cInN0b3JlRGF0YS5pbmRleE9mKGkpID49IDBcIiAvPlxyXG4gICAgICAgICAgICA8aW5wdXQgKm5nSWY9XCJ0eXBlID09ICdTaW5nbGUnXCIgdHlwZT1cInJhZGlvXCIgbmFtZT1cInJhZGlvX3t7aX19XCIgaWQ9XCJyYWRpb197e2l9fVwiIGNsYXNzPVwicmVwZWF0ZWQtcmFkaW9cIiBbKG5nTW9kZWwpXT1cInJhZGlvVmFsdWVcIiB2YWx1ZT1cInt7aX19XCIgKGNoYW5nZSk9XCJyZXBlYXRhYmxlQmxvY2tDaGFuZ2UoaSwgJGV2ZW50LnRhcmdldC5jaGVja2VkKVwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19maWVsZHM7IGluZGV4IGFzIHBvc2l0aW9uOyB0cmFja0J5OiB0cmFja0J5SWRCbG9jaztcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLmZpZWxkX3R5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInR2VuZXJpYyBCbG9jaydcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInJvdyBnZW5lcmljLWJsb2NrIGdlbmVyaWMtYmxvY2ste3sgZmllbGQudW5pcXVlX2lkIH19IHt7KGZpZWxkLmZpZWxkX3N0eWxlKT9maWVsZC5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCIgKm5nSWY9XCJmaWVsZD8uZmllbGRfdmFsdWVzW2ldPy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpbm5lckZpZWxkIG9mIGZpZWxkPy5maWVsZF92YWx1ZXNbaV07IGluZGV4IGFzIGlubmVyUG9zaXRpb247IHRyYWNrQnk6IHRyYWNrQnlJbmRleChpKTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmlubmVyRmllbGQscG9zaXRpb246cG9zaXRpb24rJy0nK2lubmVyUG9zaXRpb24saTppLCBhY3RpdmVQb3NpdGlvbjogcG9zfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpbm5lckZpZWxkIG9mIGZpZWxkPy5maWVsZF92YWx1ZXNbaV07IGluZGV4IGFzIGlubmVyUG9zaXRpb247IHRyYWNrQnk6IHRyYWNrQnlJbmRleChpKTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAgKm5nSWY9XCJyZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmaWVsZDppbm5lckZpZWxkLHBvc2l0aW9uOnBvc2l0aW9uKyctJytpbm5lclBvc2l0aW9uLGk6aSwgYWN0aXZlUG9zaXRpb246IHBvc31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInQWNjb3JkaW9uJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiY2hlY2tBY2NvcmRpb25WaXNpYmlsaXR5KGZpZWxkLCByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0sIGkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIDxzZWN0aW9uIGlkPVwie3tmaWVsZC5wb3NzaWJsZV92YWx1ZXNbMF19fVwiIGNsYXNzPVwiYWNjb3JkaW9uLXNlY3Rpb24gYWNjb3JkaW9uLXNlY3Rpb24te3sgZmllbGQudW5pcXVlX2lkIH19IHt7KGZpZWxkLmZpZWxkX3N0eWxlKT9maWVsZC5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwie3tmaWVsZC51bmlxdWVfaWR9fS17e2l9fVwiIGNsYXNzPVwiYWNjb3JkaW9uLXNlY3Rpb24gYWNjb3JkaW9uLXNlY3Rpb24te3tmaWVsZC51bmlxdWVfaWR9fS17e2l9fSBhY2NvcmRpb24tc2VjdGlvbi17eyBmaWVsZC51bmlxdWVfaWQgfX0ge3soZmllbGQuZmllbGRfc3R5bGUpP2ZpZWxkLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlbkFjY29yZGlvbkNsaWNrZWQoZmllbGQsIGkpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiIWlzSFRNTChyZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0/LmFjY29yZGlvbkluZm8ubmFtZSlcIiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXItdGV4dFwiPnt7cmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdPy5hY2NvcmRpb25JbmZvLm5hbWV9fTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzSFRNTChyZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0/LmFjY29yZGlvbkluZm8ubmFtZSlcIiBjbGFzcz1cImFjY29yZGlvbi1oZWFkZXItdGV4dFwiIFtpbm5lckhUTUxdPVwicmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdPy5hY2NvcmRpb25JbmZvLm5hbWVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLWNvbGxhcHNlLWJ0blwiICpuZ0lmPVwicmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdPy5hY2NvcmRpb25JbmZvLnNob3dTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0/LmFjY29yZGlvbkluZm8uY29sbGFwc2VUaXRsZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhY2NvcmRpb24taGVhZGVyLW9wZW4tYnRuXCIgKm5nSWY9XCIhcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdPy5hY2NvcmRpb25JbmZvLnNob3dTZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0/LmFjY29yZGlvbkluZm8uZXhwYW5kVGl0bGV9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLXN1Yi1oZWFkZXIgcm93XCIgW2hpZGRlbl09XCJyZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0/LmFjY29yZGlvbkluZm8uc2hvd1NlY3Rpb25cIiAqbmdJZj1cImZpZWxkPy5maWVsZF92YWx1ZXNbaV0/Lmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGlubmVyRmllbGQgb2YgZmllbGQ/LmZpZWxkX3ZhbHVlc1tpXTsgaW5kZXggYXMgaW5uZXJQb3NpdGlvbjsgdHJhY2tCeTogdHJhY2tCeUluZGV4KGkpO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgICpuZ0lmPVwicmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdPy5hY2NvcmRpb25JbmZvLnN1YkhlYWRlckZpZWxkcy5pbmNsdWRlcyhpbm5lckZpZWxkLnVuaXF1ZV9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmlubmVyRmllbGQscG9zaXRpb246cG9zaXRpb24rJy0nK2lubmVyUG9zaXRpb24saTppLCBhY3RpdmVQb3NpdGlvbjogcG9zfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWNvbnRlbnQgcm93XCIgW2hpZGRlbl09XCIhcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdPy5hY2NvcmRpb25JbmZvLnNob3dTZWN0aW9uXCIgKm5nSWY9XCJmaWVsZD8uZmllbGRfdmFsdWVzW2ldPy5sZW5ndGggPiAwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpbm5lckZpZWxkIG9mIGZpZWxkPy5maWVsZF92YWx1ZXNbaV07IGluZGV4IGFzIGlubmVyUG9zaXRpb247IHRyYWNrQnk6IHRyYWNrQnlJbmRleChpKTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICAqbmdJZj1cIiFyZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0/LmFjY29yZGlvbkluZm8uc3ViSGVhZGVyRmllbGRzLmluY2x1ZGVzKGlubmVyRmllbGQudW5pcXVlX2lkKSAmJiAhcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdPy5hY2NvcmRpb25JbmZvLmZvb3RlckZpZWxkcy5pbmNsdWRlcyhpbm5lckZpZWxkLnVuaXF1ZV9pZClcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmlubmVyRmllbGQscG9zaXRpb246cG9zaXRpb24rJy0nK2lubmVyUG9zaXRpb24saTppLCBhY3RpdmVQb3NpdGlvbjogcG9zfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYWNjb3JkaW9uLWZvb3RlciByb3dcIiBbaGlkZGVuXT1cIiFyZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0/LmFjY29yZGlvbkluZm8uc2hvd1NlY3Rpb25cIiAqbmdJZj1cImZpZWxkPy5maWVsZF92YWx1ZXNbaV0/Lmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGlubmVyRmllbGQgb2YgZmllbGQ/LmZpZWxkX3ZhbHVlc1tpXTsgaW5kZXggYXMgaW5uZXJQb3NpdGlvbjsgdHJhY2tCeTogdHJhY2tCeUluZGV4KGkpO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgICpuZ0lmPVwiIXJlcGVhdGVibGVGaWVsZHNSb3dzW2ldPy5bZmllbGQudW5pcXVlX2lkXT8uYWNjb3JkaW9uSW5mby5zdWJIZWFkZXJGaWVsZHMuaW5jbHVkZXMoaW5uZXJGaWVsZC51bmlxdWVfaWQpICYmIHJlcGVhdGVibGVGaWVsZHNSb3dzW2ldPy5bZmllbGQudW5pcXVlX2lkXT8uYWNjb3JkaW9uSW5mby5mb290ZXJGaWVsZHMuaW5jbHVkZXMoaW5uZXJGaWVsZC51bmlxdWVfaWQpXCI+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLXRlbXBsYXRlICpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmlubmVyRmllbGQscG9zaXRpb246cG9zaXRpb24rJy0nK2lubmVyUG9zaXRpb24saTppLCBhY3RpdmVQb3NpdGlvbjogcG9zfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLXRlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaERlZmF1bHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAqbmdUZW1wbGF0ZU91dGxldD1cImNlbGxEYXRhOyBjb250ZXh0OntmaWVsZDpmaWVsZCxwb3NpdGlvbjpwb3NpdGlvbixpOmksIGFjdGl2ZVBvc2l0aW9uOiBwb3N9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImhpZGVBY3Rpb25CdXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cInJlbW92ZV9maWVsZF9sYWJlbCAhPT0gJ25vbmUnXCIgW25nQ2xhc3NdPVwieydkaXNhYmxlZC1yZW1vdmUtYnRuJzogZGlzYWJsZVJlbW92ZUJ0bklmQXJyYXlFbXB0eSgpfVwiIChjbGljayk9XCJvbkRlbGV0ZUJsb2NrKGkpXCIgW2Rpc2FibGVkXT0gXCIhYnV0dG9uRWRpdGFibGVcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidDbGljayBvbiAnICsgcmVtb3ZlX2ZpZWxkX2xhYmVsIFwiPnt7cmVtb3ZlX2ZpZWxkX2xhYmVsfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiaGlkZUFjdGlvbkJ1dHRvblwiPlxyXG4gICAgPGJ1dHRvbiAqbmdJZj1cImFkZF9tb3JlX2ZpZWxkX2xhYmVsICE9PSAnbm9uZSdcIiBbbmdDbGFzc109XCJ7J2Rpc2FibGVkLWFkZC1idG4nOiAhYnV0dG9uRWRpdGFibGUgfHwgZGlzYWJsZUFkZEJ1dHRvbn1cIiBbZGlzYWJsZWRdPVwiIWJ1dHRvbkVkaXRhYmxlIHx8IGRpc2FibGVBZGRCdXR0b25cIiAoY2xpY2spPVwib25CbG9ja0FkZCgpXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInQ2xpY2sgb24gJyArIGFkZF9tb3JlX2ZpZWxkX2xhYmVsIFwiPnt7YWRkX21vcmVfZmllbGRfbGFiZWx9fTwvYnV0dG9uPlxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctY29udGFpbmVyPlxyXG4gXHJcbjxuZy10ZW1wbGF0ZSAjY2VsbERhdGEgbGV0LWZpZWxkPVwiZmllbGRcIiBsZXQtcG9zaXRpb249XCJwb3NpdGlvblwiIGxldC1pPVwiaVwiIGxldC1hY3RpdmVQb3NpdGlvbj1cImFjdGl2ZVBvc2l0aW9uXCI+XHJcbiAgICA8bmctY29udGFpbmVyIFtuZ1N3aXRjaF09XCJmaWVsZC5maWVsZF90eXBlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ2xhYmVsJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZmllbGQsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5Q29uZGl0aW9uOiBtYW5kYXRvcnlDb25kaXRpb24sIGVkaXRhYmxlQ29uZGl0aW9uOiBlZGl0YWJsZUNvbmRpdGlvbiwgdmlzaWJsZUNvbmRpdGlvbjogdmlzaWJsZUNvbmRpdGlvbiwgYWN0aXZlUG9zaXRpb246IGFjdGl2ZVBvc2l0aW9ufVwiXHJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1RleHRmaWVsZCdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdLCBmaWVsZERhdGE6IGZpZWxkLCBrZWVwU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5Q29uZGl0aW9uOiBtYW5kYXRvcnlDb25kaXRpb24sIGVkaXRhYmxlQ29uZGl0aW9uOiBlZGl0YWJsZUNvbmRpdGlvbiwgdmlzaWJsZUNvbmRpdGlvbjogdmlzaWJsZUNvbmRpdGlvbn1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidBdXRvY29tcGxldGUgVGV4dGZpZWxkJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZmllbGQsIGtlZXBTdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYW5kYXRvcnlDb25kaXRpb246IG1hbmRhdG9yeUNvbmRpdGlvbiwgZWRpdGFibGVDb25kaXRpb246IGVkaXRhYmxlQ29uZGl0aW9uLCB2aXNpYmxlQ29uZGl0aW9uOiB2aXNpYmxlQ29uZGl0aW9ufVwiXHJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1RleHRhcmVhJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZmllbGQsIGtlZXBTdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYW5kYXRvcnlDb25kaXRpb246IG1hbmRhdG9yeUNvbmRpdGlvbiwgZWRpdGFibGVDb25kaXRpb246IGVkaXRhYmxlQ29uZGl0aW9uLCB2aXNpYmxlQ29uZGl0aW9uOiB2aXNpYmxlQ29uZGl0aW9ufVwiXHJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0RhdGUnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYztcclxuICAgICAgICAgICAgICAgIGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IHJlcGVhdGVibGVGaWVsZHNSb3dzW2ldPy5bZmllbGQudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmaWVsZCwga2VlcFN0YXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeUNvbmRpdGlvbjogbWFuZGF0b3J5Q29uZGl0aW9uLCBlZGl0YWJsZUNvbmRpdGlvbjogZWRpdGFibGVDb25kaXRpb24sIHZpc2libGVDb25kaXRpb246IHZpc2libGVDb25kaXRpb259XCJcclxuICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiBcclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCIncmFkaW8nXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYztcclxuICAgICAgICAgICAgICAgIGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IHJlcGVhdGVibGVGaWVsZHNSb3dzW2ldPy5bZmllbGQudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmaWVsZCwga2VlcFN0YXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeUNvbmRpdGlvbjogbWFuZGF0b3J5Q29uZGl0aW9uLCBlZGl0YWJsZUNvbmRpdGlvbjogZWRpdGFibGVDb25kaXRpb24sIHZpc2libGVDb25kaXRpb246IHZpc2libGVDb25kaXRpb259XCJcclxuICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiBcclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInTWVudSdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdLCBmaWVsZERhdGE6IGZpZWxkLCBrZWVwU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5Q29uZGl0aW9uOiBtYW5kYXRvcnlDb25kaXRpb24sIGVkaXRhYmxlQ29uZGl0aW9uOiBlZGl0YWJsZUNvbmRpdGlvbiwgdmlzaWJsZUNvbmRpdGlvbjogdmlzaWJsZUNvbmRpdGlvbn1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidDaGVja2JveCdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdLCBmaWVsZERhdGE6IGZpZWxkLCBrZWVwU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5Q29uZGl0aW9uOiBtYW5kYXRvcnlDb25kaXRpb24sIGVkaXRhYmxlQ29uZGl0aW9uOiBlZGl0YWJsZUNvbmRpdGlvbiwgdmlzaWJsZUNvbmRpdGlvbjogdmlzaWJsZUNvbmRpdGlvbn1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUaW1lcGlja2VyJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZmllbGQsIGtlZXBTdGF0ZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidQaG9uZU51bWJlcidcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdLCBmaWVsZERhdGE6IGZpZWxkLCBrZWVwU3RhdGU6IHRydWV9XCJcclxuICAgICAgICAgICAgICAgID48L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiBcclxuICAgICAgICA8bmctY29udGFpbmVyICpuZ1N3aXRjaENhc2U9XCInUGlja2VyJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZmllbGQsIGtlZXBTdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBtYW5kYXRvcnlDb25kaXRpb246IG1hbmRhdG9yeUNvbmRpdGlvbiwgZWRpdGFibGVDb25kaXRpb246IGVkaXRhYmxlQ29uZGl0aW9uLCB2aXNpYmxlQ29uZGl0aW9uOiB2aXNpYmxlQ29uZGl0aW9ufVwiXHJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0J1dHRvbidcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdLCBmaWVsZERhdGE6IGZpZWxkLCBrZWVwU3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5Q29uZGl0aW9uOiBtYW5kYXRvcnlDb25kaXRpb24sIGVkaXRhYmxlQ29uZGl0aW9uOiBlZGl0YWJsZUNvbmRpdGlvbiwgdmlzaWJsZUNvbmRpdGlvbjogdmlzaWJsZUNvbmRpdGlvbixcclxuICAgICAgICAgICAgICAgICAgICBwcmltYXJ5S2V5SW5kZXg6IHtuYW1lOiBmaWVsZC51bmlxdWVfaWQsIHZhbHVlOiByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0/LlsndmFsdWUnXSwgdHlwZTogJ3JlcGVhdGFibGUnLCBjZWxsRGF0YTogcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdfX1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidOdW1iZXInXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYztcclxuICAgICAgICAgICAgICAgIGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IHJlcGVhdGVibGVGaWVsZHNSb3dzW2ldPy5bZmllbGQudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmaWVsZCwga2VlcFN0YXRlOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0F0dGFjaG1lbnRzJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZmllbGQsIGtlZXBTdGF0ZTogdHJ1ZX1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidSZXBlYXRhYmxlIEJsb2NrJ1wiPlxyXG4gICAgICAgICAgICA8cmVwZWF0YWJsZS1ibG9jay1yZW5kZXJlciBbc3RlcElkXT1cInN0ZXBJZFwiIFtyb290RGF0YV09XCJyb290RGF0YVwiIFtyb3dEYXRhXT1cInJlcGVhdGVibGVGaWVsZHNSb3dzW2ldPy5bZmllbGQudW5pcXVlX2lkXVwiIFtwYXJlbnRCbG9ja109XCJmaWVsZERhdGEudW5pcXVlX2lkXCIgW3BhcmVudFBvc2l0aW9uXT1cImlcIiBbZmllbGREYXRhXT1cImZpZWxkXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJtYW5kYXRvcnlDb25kaXRpb25cIiBbZWRpdGFibGVDb25kaXRpb25dPVwiZWRpdGFibGVDb25kaXRpb25cIiBbdmlzaWJsZUNvbmRpdGlvbl09XCJ2aXNpYmxlQ29uZGl0aW9uXCI+XHJcbiAgICAgICAgICAgIDwvcmVwZWF0YWJsZS1ibG9jay1yZW5kZXJlcj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUYWJsZSdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdLCBzZWN0aW9uRGF0YTogZmllbGQgfVwiXHJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidUYWJsZS1WMidcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZpZWxkLXt7IHBvc2l0aW9uIH19IHt7ZmllbGQuZmllbGRfc3R5bGU/Y29tbW9uVXRpbC5ib290c3RyYXBDb2xDbGFzcyhmaWVsZC5maWVsZF9zdHlsZS5ib290c3RyYXBfY2xhc3NfbmFtZSwgaXNfYm9vdHN0cmFwLCAnJywgY29uZGl0aW9uYWxVdGlsLmV2YWx1dGVCb290c3RyYXBDb25kaXRpb24oZmllbGQpKTonJ319XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0NvbXBvbmVudE91dGxldD1cImNvbXBvbmVudE1hcFtmaWVsZC5maWVsZF90eXBlXSB8IGFzeW5jO1xyXG4gICAgICAgICAgICAgICAgaW5wdXRzOiB7c3RlcElkOiBzdGVwSWQsIHJvb3REYXRhOiByb290RGF0YSwgcm93RGF0YTogcmVwZWF0ZWJsZUZpZWxkc1Jvd3NbaV0/LltmaWVsZC51bmlxdWVfaWRdLCBzZWN0aW9uRGF0YTogZmllbGQgfVwiXHJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0xpc3QnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYztcclxuICAgICAgICAgICAgICAgIGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IHJlcGVhdGVibGVGaWVsZHNSb3dzW2ldPy5bZmllbGQudW5pcXVlX2lkXSwgc2VjdGlvbkRhdGE6IGZpZWxkLCB0eXBlOiBmaWVsZC5maWVsZF90eXBlIH1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidTd2l0Y2gnXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdDb21wb25lbnRPdXRsZXQ9XCJjb21wb25lbnRNYXBbZmllbGQuZmllbGRfdHlwZV0gfCBhc3luYztcclxuICAgICAgICAgICAgICAgIGlucHV0czoge3N0ZXBJZDogc3RlcElkLCByb290RGF0YTogcm9vdERhdGEsIHJvd0RhdGE6IHJlcGVhdGVibGVGaWVsZHNSb3dzW2ldPy5bZmllbGQudW5pcXVlX2lkXSwgZmllbGREYXRhOiBmaWVsZCwga2VlcFN0YXRlOiB0cnVlfVwiXHJcbiAgICAgICAgICAgICAgICA+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gXHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ0VkaXRvcidcIj5cclxuICAgICAgICAgICAgPCEtLSA8YXBwLWNlZS1lZGl0b3IgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJyZXBlYXRlYmxlRmllbGRzUm93c1tpXVtmaWVsZC51bmlxdWVfaWRdXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiIFtrZWVwU3RhdGVdPVwidHJ1ZVwiIGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXApOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJtYW5kYXRvcnlDb25kaXRpb25cIiBbZWRpdGFibGVDb25kaXRpb25dPVwiZWRpdGFibGVDb25kaXRpb25cIiBbdmlzaWJsZUNvbmRpdGlvbl09XCJ2aXNpYmxlQ29uZGl0aW9uXCI+XHJcbiAgICAgICAgICAgIDwvYXBwLWNlZS1lZGl0b3I+IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmllbGQte3sgcG9zaXRpb24gfX0ge3tmaWVsZC5maWVsZF9zdHlsZT9jb21tb25VdGlsLmJvb3RzdHJhcENvbENsYXNzKGZpZWxkLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZCkpOicnfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nQ29tcG9uZW50T3V0bGV0PVwiY29tcG9uZW50TWFwW2ZpZWxkLmZpZWxkX3R5cGVdIHwgYXN5bmM7XHJcbiAgICAgICAgICAgICAgICBpbnB1dHM6IHtzdGVwSWQ6IHN0ZXBJZCwgcm9vdERhdGE6IHJvb3REYXRhLCByb3dEYXRhOiByZXBlYXRlYmxlRmllbGRzUm93c1tpXT8uW2ZpZWxkLnVuaXF1ZV9pZF0sIGZpZWxkRGF0YTogZmllbGQsIGtlZXBTdGF0ZTogdHJ1ZSwgbWFuZGF0b3J5Q29uZGl0aW9uOiBtYW5kYXRvcnlDb25kaXRpb24sIGVkaXRhYmxlQ29uZGl0aW9uOiBlZGl0YWJsZUNvbmRpdGlvbiwgdmlzaWJsZUNvbmRpdGlvbjogdmlzaWJsZUNvbmRpdGlvbn1cIlxyXG4gICAgICAgICAgICAgICAgPjwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuIFxyXG4gICAgPC9uZy1jb250YWluZXI+XHJcbjwvbmctdGVtcGxhdGU+XHJcbiBcclxuICJdfQ==