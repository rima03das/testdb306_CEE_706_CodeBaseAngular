import { Component, HostListener, Input, ViewChild } from '@angular/core';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal.component';
import { BaseView } from '../cee-base-class';
import moment from 'moment';
import { take } from 'rxjs/operators';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule, NgStyle } from '@angular/common';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { FormsModule } from '@angular/forms';
import { jsPDF } from 'jspdf';
import { NgxImageCompressService } from 'ngx-image-compress';
import heic2any from "heic2any";
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../services/shared-events-service.service";
import * as i3 from "../../models/app-data/app-data.service";
import * as i4 from "../../models/api-data/api-data.service";
import * as i5 from "../../services/wfe-step-loader.service";
import * as i6 from "@angular/material/dialog";
import * as i7 from "@angular/material/snack-bar";
import * as i8 from "@angular/common/http";
import * as i9 from "../../services/cee-api-service.service";
import * as i10 from "@angular/router";
import * as i11 from "../../services/file-upload-service.service";
import * as i12 from "../../services/internal-cee-emitter-service.service";
import * as i13 from "ngx-image-compress";
import * as i14 from "@angular/common";
import * as i15 from "../../directives/tooltip/tooltip.directive";
import * as i16 from "@angular/forms";
const _c0 = ["file"];
const _c1 = a0 => ({ "clickable": a0 });
const _c2 = a0 => ({ "color": a0 });
function CeeAttachmentsComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeAttachmentsComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_ng_container_3_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeAttachmentsComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 15)(2, CeeAttachmentsComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 16)(3, CeeAttachmentsComponent_div_0_ng_container_3_span_3_Template, 2, 0, "span", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeAttachmentsComponent_div_0_ng_container_4_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeAttachmentsComponent_div_0_ng_container_4_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 19);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_ng_container_4_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeAttachmentsComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_4_label_1_Template, 2, 1, "label", 15)(2, CeeAttachmentsComponent_div_0_ng_container_4_label_2_Template, 1, 1, "label", 16)(3, CeeAttachmentsComponent_div_0_ng_container_4_span_3_Template, 2, 0, "span", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeAttachmentsComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 21);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r3); i0.ɵɵnextContext(); const file_r4 = i0.ɵɵreference(7); return i0.ɵɵresetView(file_r4.click()); });
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.onAnchorClick($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldLable, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldLable);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_label_5_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 34);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_label_5_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r5); i0.ɵɵnextContext(); const file_r4 = i0.ɵɵreference(7); return i0.ɵɵresetView(file_r4.click()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.selectFileText, " ");
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    i0.ɵɵtemplate(3, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_3_Template, 2, 1, "div", 29)(4, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_div_4_Template, 2, 1, "div", 9)(5, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_label_5_Template, 2, 1, "label", 30);
    i0.ɵɵelementStart(6, "input", 31, 1);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_Template_input_click_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkValidation($event)); })("change", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_Template_input_change_6_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.handleFileInput($event, $event.target.files)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("ngClass", ctx_r0.dragAreaClass);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.uploadMode == "all" || ctx_r0.uploadMode == "") && !ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.html_id)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Select a file for " + ctx_r0.fieldData.field_label);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "input", 37);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_3_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkValidation($event)); })("change", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_3_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r6); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.handleFileInput($event, $event.target.files)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 38);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r0.html_id)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Select a file for " + ctx_r0.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", ctx_r0.html_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.selectFileText);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 39);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r7); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.singleFileUploadAction()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.files.length > 0 ? "Replace" : "Upload");
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 22);
    i0.ɵɵtemplate(2, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_2_Template, 8, 7, "div", 23)(3, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_div_3_Template, 5, 5, "div", 24)(4, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_button_4_Template, 2, 2, "button", 25);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dragAreaClass == "dragarea" || ctx_r0.dragAreaClass == "droparea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.dragAreaClass != "dragarea" && ctx_r0.dragAreaClass != "droparea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.autoUpload);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r11 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 32);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_3_Template_div_click_0_listener() { i0.ɵɵrestoreView(_r11); i0.ɵɵnextContext(); const file_r12 = i0.ɵɵreference(7); return i0.ɵɵresetView(file_r12.click()); });
    i0.ɵɵelementStart(1, "div", 33);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_3_Template_div_click_1_listener($event) { i0.ɵɵrestoreView(_r11); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.onAnchorClick($event)); });
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldLable, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldLable);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_label_5_Template(rf, ctx) { if (rf & 1) {
    const _r13 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 34);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_label_5_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r13); i0.ɵɵnextContext(); const file_r12 = i0.ɵɵreference(7); return i0.ɵɵresetView(file_r12.click()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.selectFileText, " ");
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r10 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 26)(1, "div", 27)(2, "div", 28);
    i0.ɵɵtemplate(3, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_3_Template, 2, 1, "div", 29)(4, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_div_4_Template, 2, 1, "div", 9)(5, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_label_5_Template, 2, 1, "label", 30);
    i0.ɵɵelementStart(6, "input", 42, 1);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_Template_input_click_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkValidation($event)); })("change", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_Template_input_change_6_listener($event) { i0.ɵɵrestoreView(_r10); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.handleFileInput($event, $event.target.files)); });
    i0.ɵɵelementEnd()()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵpropertyInterpolate("ngClass", ctx_r0.dragAreaClass);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (ctx_r0.uploadMode == "all" || ctx_r0.uploadMode == "") && !ctx_r0.isFieldLableHTML);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", ctx_r0.html_id)("multiple", ctx_r0.isMultiple)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Select a file for " + ctx_r0.fieldData.field_label);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r14 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 35)(1, "div", 36)(2, "input", 43);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_5_Template_input_click_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.checkValidation($event)); })("change", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_5_Template_input_change_2_listener($event) { i0.ɵɵrestoreView(_r14); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.handleFileInput($event, $event.target.files)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "label", 38);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("multiple", ctx_r0.isMultiple)("id", ctx_r0.html_id)("disabled", !ctx_r0.isEditable);
    i0.ɵɵattribute("aria-label", ctx_r0.AdditionalParameter["Aria-Label"] ? ctx_r0.AdditionalParameter["Aria-Label"] : "Select a file for " + ctx_r0.fieldData.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("for", ctx_r0.html_id);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.selectFileText);
} }
function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 40);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_Template_div_click_1_listener() { i0.ɵɵrestoreView(_r8); const files_r9 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleClick(files_r9)); });
    i0.ɵɵelement(2, "input", 41, 2);
    i0.ɵɵtemplate(4, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_4_Template, 8, 8, "div", 23)(5, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_div_5_Template, 5, 6, "div", 24);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("id", ctx_r0.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.dragAreaClass == "dragarea" || ctx_r0.dragAreaClass == "droparea");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.dragAreaClass != "dragarea" && ctx_r0.dragAreaClass != "droparea");
} }
function CeeAttachmentsComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_1_Template, 5, 3, "ng-container", 9)(2, CeeAttachmentsComponent_div_0_ng_container_7_ng_container_2_Template, 6, 3, "ng-container", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isListView && ctx_r0.isSingleUploader);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isListView && !ctx_r0.isSingleUploader);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_img_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 57);
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate1("alt", "Custom File Icon for ", selectedFile_r15.file.type, "");
    i0.ɵɵproperty("src", ctx_r0.fileUploads[selectedFile_r15.file.type].iconImage, i0.ɵɵsanitizeUrl);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_span_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_span_5_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r16 = i0.ɵɵnextContext(2); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleAction(selectedFile_r15, i_r18, "preview")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-name selected-file-name-", i_r18, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r0.clickable_filename));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", selectedFile_r15.file.name, " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59)(1, "input", 60);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r19); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; i0.ɵɵtwoWayBindingSet(selectedFile_r15.newName, $event) || (selectedFile_r15.newName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r19); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onFilenameInput($event, selectedFile_r15)); })("paste", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template_input_paste_1_listener($event) { i0.ɵɵrestoreView(_r19); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onFilenamePaste($event, selectedFile_r15)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 61);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("selected-file-name selected-file-name-", i_r18, "");
    i0.ɵɵtwoWayProperty("ngModel", selectedFile_r15.newName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(selectedFile_r15.originalExtension);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 65);
} if (rf & 2) {
    const metaItem_r20 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", metaItem_r20.label, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 63);
    i0.ɵɵtemplate(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_ng_container_1_label_2_Template, 1, 1, "label", 64);
    i0.ɵɵelement(3, "span", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const metaItem_r20 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-title", metaItem_r20.key);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", metaItem_r20.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", metaItem_r20.value, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 62);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_ng_container_1_Template, 4, 3, "ng-container", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("id", "metadata-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", selectedFile_r15.custom);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_progress_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "progress", 69);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", selectedFile_r15.progress);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", selectedFile_r15.progress, "% ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r21); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "clear")); });
    i0.ɵɵtext(1, "Clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r22 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r22); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "upload")); });
    i0.ɵɵtext(1, "Upload");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_progress_1_Template, 2, 2, "progress", 66)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_2_Template, 2, 1, "button", 67)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_button_3_Template, 2, 1, "button", 68);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.progress);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.progress && !ctx_r0.autoUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.progress && !ctx_r0.autoUpload);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r23 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r23); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "reset")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-reset selected-file-reset-", i_r18, " btn btn-info");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["reset_label"] ? ctx_r0.AdditionalParameter["CEE_reset_label"] : "Reset", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r24 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r24); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "update")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-update selected-file-update-", i_r18, " btn btn-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["CEE_update_label"] ? ctx_r0.AdditionalParameter["CEE_update_label"] : "Update", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r25 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r25); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "rename")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-rename selected-file-rename-", i_r18, " btn btn-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["CEE_rename_label"] ? ctx_r0.AdditionalParameter["CEE_rename_label"] : "Edit", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r26 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r26); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "remove")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-remove selected-file-remove-", i_r18, " btn btn-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["remove_label"] ? ctx_r0.AdditionalParameter["remove_label"] : "Remove", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r27); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "preview")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-preview selected-file-preview-", i_r18, " btn btn-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["preview_label"] ? ctx_r0.AdditionalParameter["preview_label"] : "Preview", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r28 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r28); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "download")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-download selected-file-download-", i_r18, " btn btn-primary");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.AdditionalParameter["download_label"] ? ctx_r0.AdditionalParameter["download_label"] : "Download", " ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_0_Template, 2, 4, "button", 72)(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_1_Template, 2, 4, "button", 72)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_2_Template, 2, 4, "button", 72)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_3_Template, 2, 4, "button", 72)(4, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_4_Template, 2, 4, "button", 72)(5, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_button_5_Template, 2, 4, "button", 72);
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && !selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isListView || ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].preview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isListView || ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].canDownload);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47)(1, "div", 48)(2, "div", 49);
    i0.ɵɵtemplate(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_img_3_Template, 1, 3, "img", 50);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 51);
    i0.ɵɵtemplate(5, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_span_5_Template, 2, 7, "span", 52)(6, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_6_Template, 4, 5, "div", 53);
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(7, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_div_7_Template, 2, 2, "div", 54);
    i0.ɵɵelementStart(8, "div", 55);
    i0.ɵɵtemplate(9, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_container_9_Template, 4, 3, "ng-container", 56)(10, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_ng_template_10_Template, 6, 6, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const uploadedActions_r29 = i0.ɵɵreference(11);
    const ctx_r16 = i0.ɵɵnextContext();
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "document-info-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "file-icon-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].iconImage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "file-name-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.custom && selectedFile_r15.custom.length > 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("id", "action-buttons-" + ctx_r0.fieldData.unique_id + "-" + i_r18);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.uploaded)("ngIfElse", uploadedActions_r29);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_span_1_Template(rf, ctx) { if (rf & 1) {
    const _r30 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "span", 58);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_span_1_Template_span_click_0_listener() { i0.ɵɵrestoreView(_r30); const ctx_r16 = i0.ɵɵnextContext(2); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.handleAction(selectedFile_r15, i_r18, "preview")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-name selected-file-name-", i_r18, "");
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(5, _c1, ctx_r0.clickable_filename));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(selectedFile_r15.file.name);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r31 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 59)(1, "input", 60);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template_input_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r31); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; i0.ɵɵtwoWayBindingSet(selectedFile_r15.newName, $event) || (selectedFile_r15.newName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("input", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template_input_input_1_listener($event) { i0.ɵɵrestoreView(_r31); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onFilenameInput($event, selectedFile_r15)); })("paste", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template_input_paste_1_listener($event) { i0.ɵɵrestoreView(_r31); const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.onFilenamePaste($event, selectedFile_r15)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 61);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r16 = i0.ɵɵnextContext(2);
    const selectedFile_r15 = ctx_r16.$implicit;
    const i_r18 = ctx_r16.index;
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("selected-file-name selected-file-name-", i_r18, "");
    i0.ɵɵtwoWayProperty("ngModel", selectedFile_r15.newName);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(selectedFile_r15.originalExtension);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 65);
} if (rf & 2) {
    const metaItem_r32 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("innerHTML", metaItem_r32.label, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 63);
    i0.ɵɵtemplate(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_3_label_2_Template, 1, 1, "label", 64);
    i0.ɵɵelement(3, "span", 65);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const metaItem_r32 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("data-title", metaItem_r32.key);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", metaItem_r32.label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", metaItem_r32.value, i0.ɵɵsanitizeHtml);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_img_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "img", 57);
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵpropertyInterpolate1("alt", "Custom File Icon for ", selectedFile_r15.file.type, "");
    i0.ɵɵproperty("src", ctx_r0.fileUploads[selectedFile_r15.file.type].iconImage, i0.ɵɵsanitizeUrl);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_progress_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "progress", 75);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(3).$implicit;
    i0.ɵɵproperty("value", selectedFile_r15.progress);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", selectedFile_r15.progress, "% ");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r33 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 70);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r33); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "clear")); });
    i0.ɵɵtext(1, "Clear");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r34 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 71);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r34); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "upload")); });
    i0.ɵɵtext(1, "Upload");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("disabled", !ctx_r0.isEditable);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_progress_1_Template, 2, 2, "progress", 74)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_2_Template, 2, 1, "button", 67)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_button_3_Template, 2, 1, "button", 68);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.progress);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.progress && !ctx_r0.autoUpload);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.progress && !ctx_r0.autoUpload);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_0_Template(rf, ctx) { if (rf & 1) {
    const _r35 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_0_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r35); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "reset")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-reset selected-file-reset-", i_r18, " btn btn-info");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["reset_label"] ? ctx_r0.AdditionalParameter["CEE_reset_label"] : "Reset");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r36 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_1_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r36); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "update")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-update selected-file-update-", i_r18, " btn btn-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["CEE_update_label"] ? ctx_r0.AdditionalParameter["CEE_update_label"] : "Update");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_2_Template(rf, ctx) { if (rf & 1) {
    const _r37 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_2_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r37); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "rename")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-rename selected-file-rename-", i_r18, " btn btn-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["CEE_rename_label"] ? ctx_r0.AdditionalParameter["CEE_rename_label"] : "Edit");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r38 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r38); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "remove")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-remove selected-file-remove-", i_r18, " btn btn-danger");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["remove_label"] ? ctx_r0.AdditionalParameter["remove_label"] : "Remove");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_4_Template(rf, ctx) { if (rf & 1) {
    const _r39 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_4_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r39); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "preview")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-preview selected-file-preview-", i_r18, " btn btn-success");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["preview_label"] ? ctx_r0.AdditionalParameter["preview_label"] : "Preview");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r40 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 73);
    i0.ɵɵlistener("click", function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r40); const ctx_r16 = i0.ɵɵnextContext(3); const selectedFile_r15 = ctx_r16.$implicit; const i_r18 = ctx_r16.index; const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.action(selectedFile_r15, i_r18, "download")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r18 = i0.ɵɵnextContext(3).index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("selected-file-download selected-file-download-", i_r18, " btn btn-primary");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.AdditionalParameter["download_label"] ? ctx_r0.AdditionalParameter["download_label"] : "Download");
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_0_Template, 2, 4, "button", 72)(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_1_Template, 2, 4, "button", 72)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_2_Template, 2, 4, "button", 72)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_3_Template, 2, 4, "button", 72)(4, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_4_Template, 2, 4, "button", 72)(5, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_button_5_Template, 2, 4, "button", 72);
} if (rf & 2) {
    const selectedFile_r15 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView && !selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isEditable && !ctx_r0.isListView);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isListView || ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].preview);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isListView || ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].canDownload);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 47);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_span_1_Template, 2, 7, "span", 52)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_div_2_Template, 4, 5, "div", 53)(3, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_3_Template, 4, 3, "ng-container", 14)(4, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_img_4_Template, 1, 3, "img", 50)(5, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_container_5_Template, 4, 3, "ng-container", 56)(6, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_ng_template_6_Template, 6, 6, "ng-template", null, 4, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const otherAction_r41 = i0.ɵɵreference(7);
    const selectedFile_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", selectedFile_r15.rename);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", selectedFile_r15.custom);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fileUploads[selectedFile_r15.file.type] && ctx_r0.fileUploads[selectedFile_r15.file.type].iconImage);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !selectedFile_r15.uploaded)("ngIfElse", otherAction_r41);
} }
function CeeAttachmentsComponent_div_0_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_1_Template, 12, 10, "div", 46)(2, CeeAttachmentsComponent_div_0_div_9_ng_container_1_div_2_Template, 8, 6, "div", 46);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const selectedFile_r15 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (!ctx_r0.isSingleUploader || ctx_r0.isSingleUploader && selectedFile_r15.uploaded) && ctx_r0.fieldData.isAttachmentBlock);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", (!ctx_r0.isSingleUploader || ctx_r0.isSingleUploader && selectedFile_r15.uploaded) && !ctx_r0.fieldData.isAttachmentBlock);
} }
function CeeAttachmentsComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 44);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_div_9_ng_container_1_Template, 3, 2, "ng-container", 45);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.files)("ngForTrackBy", ctx_r0.trackByFile);
} }
function CeeAttachmentsComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 76);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.fieldData.placeholder_text, " ");
} }
function CeeAttachmentsComponent_div_0_ng_container_12_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 80);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r42 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r42.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r42.code).message_text, "");
} }
function CeeAttachmentsComponent_div_0_ng_container_12_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_12_div_1_p_1_Template, 2, 4, "p", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory && message_r42.type == "Mandatory" && ctx_r0.files.length <= 0);
} }
function CeeAttachmentsComponent_div_0_ng_container_12_div_2_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 80);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r42 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c2, ctx_r0.returnMessageData(message_r42.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r42.code).message_text, "");
} }
function CeeAttachmentsComponent_div_0_ng_container_12_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 78);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_12_div_2_p_1_Template, 2, 4, "p", 79);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r42 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", message_r42.type == ctx_r0.errorType);
} }
function CeeAttachmentsComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeAttachmentsComponent_div_0_ng_container_12_div_1_Template, 2, 1, "div", 77)(2, CeeAttachmentsComponent_div_0_ng_container_12_div_2_Template, 2, 1, "div", 77);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showErrorOnNext);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.errorType);
} }
function CeeAttachmentsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    i0.ɵɵtemplate(3, CeeAttachmentsComponent_div_0_ng_container_3_Template, 4, 3, "ng-container", 9)(4, CeeAttachmentsComponent_div_0_ng_container_4_Template, 4, 3, "ng-container", 9)(5, CeeAttachmentsComponent_div_0_button_5_Template, 2, 2, "button", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 11);
    i0.ɵɵtemplate(7, CeeAttachmentsComponent_div_0_ng_container_7_Template, 3, 2, "ng-container", 9);
    i0.ɵɵelementStart(8, "div", 12);
    i0.ɵɵtemplate(9, CeeAttachmentsComponent_div_0_div_9_Template, 2, 2, "div", 13)(10, CeeAttachmentsComponent_div_0_ng_template_10_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CeeAttachmentsComponent_div_0_ng_container_12_Template, 3, 2, "ng-container", 14);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const placeHolder_r43 = i0.ɵɵreference(11);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "" && ctx_r0.isCameraMode == false);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "" && ctx_r0.files.length > 0 && ctx_r0.isCameraMode == true);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isCameraInput && !ctx_r0.isCameraMode);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.files.length > 0)("ngIfElse", placeHolder_r43);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
export class CeeAttachmentsComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    ceeApiService;
    router;
    fileUploadService;
    ceeInternalEmitter;
    imageCompress;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    rootData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    metaFields = [];
    metadataFields = {};
    fileUploads = {};
    files = [];
    AdditionalParameter = {};
    uploadMore = true;
    autoUpload = false;
    uploadedCount = 0;
    totalCount = 0;
    totalSize = 0;
    html_id = '';
    fileInput;
    payLoad = {
        type: 'file',
        fileData: {}
    };
    fieldLabels = [];
    errorType = ''; // set the type of the error message e.g: file_type, individual_file_size, total_file_size
    customKey = '';
    preDefineMimeType = {
        csv: 'text/csv',
        heic: 'image/heic',
        heif: 'image/heif',
    };
    preDefineMimeTypeCheck = {
        csv: ['', 'application/vnd.ms-excel'],
        heic: ['', 'image/heic'],
        heif: ['', 'image/heif'],
    };
    dragAreaClass = 'plain-upload';
    uploadMode = '';
    fieldLable = '';
    isFieldLableHTML = false;
    encrypted = window.sessionStorage.getItem('CEE_Encrypt') &&
        (window.sessionStorage.getItem('CEE_Encrypt_Values') || '').includes('user_attachments') ? true : false;
    // fileUploadEmitter: Subscription;
    selectFileText = '';
    isSingleUploader = false;
    hasUploadedData = false;
    singleUploadFileData;
    isAttachmentInModal = false;
    isMultiple = false;
    isCameraMode = false;
    isCameraInput = false;
    errorMsgBox = false;
    isRename = false;
    previewDirectly = false;
    previewDirectlyInNewTab = false;
    clickable_filename = false;
    rbPosition = 0;
    constructor(userDataHandlerService, sharedEventsService, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService, ceeInternalEmitter, imageCompress) {
        super(userDataHandlerService, sharedEventsService, ceeInternalEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.fileUploadService = fileUploadService;
        this.ceeInternalEmitter = ceeInternalEmitter;
        this.imageCompress = imageCompress;
    }
    ngOnInit() {
        this.variableObject['emitForEmptySession_' + this.fieldData.unique_id] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
            if (res) {
                this.onEmptySession(res);
            }
        });
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        // For repeatable block, if rowData is present, set the position
        if (this.rowData) {
            this.rbPosition = this.rowData.position ? this.rowData.position : 0;
        }
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
    }
    trackByFile(index, file) {
        return file?.id || file?.name || index; // something uniquely identifying the file
    }
    clearFileInput() {
        // Reset the file input value
        if (this.fileInput) {
            this.fileInput.nativeElement.value = '';
        }
    }
    onDragOver(event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    onDragEnter(event) {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    onDragEnd(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    onDragLeave(event) {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    onDrop(event) {
        if (this.uploadMode == "all" || this.uploadMode == "drag_drop") {
            // console.log("event:",event)
            this.dragAreaClass = "dragarea";
            event.preventDefault();
            event.stopPropagation();
            if (event.dataTransfer.files) {
                //   let files: FileList = event.dataTransfer.files;
                this.handleFileInput(event, event.dataTransfer.files);
            }
        }
    }
    onPaste(event) {
        if (this.uploadMode == "all" || this.uploadMode == "copy_paste") {
            const data = localStorage.getItem('pasteid');
            if (data && data != this.fieldData.unique_id) {
                // console.log("paste id not match", data, this.fieldData.unique_id)
                localStorage.removeItem('pasteid');
                return;
            }
            else {
                if (event && event.clipboardData && event.clipboardData.files.length > 0) {
                    var result = Object.keys(event.clipboardData.files).map((key) => event.clipboardData.files[key]);
                    this.handleFileInput(event, result);
                }
            }
        }
    }
    handleClick(input) {
        const clickedId = input.id;
        //console.log('Clicked element ID:', clickedId);
        localStorage.setItem('pasteid', clickedId);
    }
    ngOnDestroy() {
        this.onViewUnload();
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
        // if (this.fileUploadEmitter) {
        //     this.fileUploadEmitter.unsubscribe();
        // }
    }
    // handle click from html element and open file input dialog
    onAnchorClick(event) {
        let target = event.target;
        if (target.tagName.toLowerCase() === 'a') {
            event.preventDefault();
        }
    }
    onViewDataInit() {
        this.html_id = this.fieldData.html_id;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const param of this.fieldData.additional_parameters) {
                this.AdditionalParameter[param.parameter_type] = param.value;
            }
        }
        if (this.AdditionalParameter['CEE_UPLOAD_MODE'] && this.AdditionalParameter['CEE_UPLOAD_MODE'] != '') {
            this.uploadMode = this.AdditionalParameter['CEE_UPLOAD_MODE'];
            if (this.AdditionalParameter['CEE_UPLOAD_MODE_SELECTION_TEXT'] && this.AdditionalParameter['CEE_UPLOAD_MODE_SELECTION_TEXT'] != "") {
                this.fieldLable = this.AdditionalParameter['CEE_UPLOAD_MODE_SELECTION_TEXT'];
                this.isFieldLableHTML = this.isHTML(this.fieldLable);
            }
            else {
                if (this.uploadMode.toLowerCase() == 'all' || this.uploadMode.toLowerCase() == '') {
                    this.fieldLable = 'Drag / paste files here';
                }
                else if (this.uploadMode.toLowerCase() == 'copy_paste') {
                    this.fieldLable = 'paste files here';
                }
                else if (this.uploadMode.toLowerCase() == 'drag_drop') {
                    this.fieldLable = 'Drag files here';
                }
            }
        }
        if (this.AdditionalParameter['clickable_filename'] === "true") {
            this.clickable_filename = true;
        }
        this.dragAreaClass = (this.uploadMode.toLowerCase() == 'all' || this.uploadMode.toLowerCase() == 'copy_paste' || this.uploadMode.toLowerCase() == 'drag_drop') ? 'dragarea' : 'plain-upload';
        // console.log("this.dragAreaClass: ",this.dragAreaClass, " -- ", this.uploadMode.toLowerCase())
        if (this.fieldData.attachment && this.fieldData.attachment.length == 2 &&
            this.fieldData.attachment[1] && this.fieldData.attachment[1] > 1) {
            this.isMultiple = true;
        }
        this.isSingleUploader = (this.AdditionalParameter['singleUploader'] === "true") ? true : false;
        this.autoUpload = (this.AdditionalParameter['AutoUpload'] === "true") ? true : false;
        this.selectFileText = (this.AdditionalParameter['selectFileText']) ? this.AdditionalParameter['selectFileText'] : "Select a file";
        this.isAttachmentInModal = (this.AdditionalParameter['AttachmentInModal'] && this.AdditionalParameter['AttachmentInModal'].toLowerCase() == 'true') ? true : false;
        for (const [i, possibleValue] of this.fieldData.possible_values.entries()) {
            const values = possibleValue.split('|');
            if (values.length == 6) {
                const obj = {
                    id: `${this.fieldData.html_id}-${i}`,
                    type: values[0],
                    iconImage: values[1],
                    size: Number(values[2]),
                    count: Number(values[3]),
                    preview: values[4] == 'true',
                    canDownload: values[5] == 'true'
                };
                this.fileUploads = { ...this.fileUploads, ...{ [obj.type]: obj } };
            }
            else {
                console.error(`Something is wrong in the configuration for ${possibleValue}`);
            }
        }
        // set the default payLoad
        if (this.isSingleApiKey) {
            this.payLoad.fileData.apiKey = this.fieldData.api_key;
        }
        else {
            this.payLoad.fileData.apiKey = this.fieldData.request_api_key;
        }
        // set custom key if the api key is blank
        if (!this.payLoad.fileData.apiKey) {
            this.customKey = 'FILE_UPLOAD_DATA';
        }
        // for upload set attachment path
        if (this.AdditionalParameter.AttachmentPathname) {
            this.payLoad.fileData.attachmentPath = this.getName(this.AdditionalParameter.AttachmentPathname, '', /\{(.*?)\}/g);
        }
        // set the attachment data on init
        if ((!this.rowData || !this.rowData.hasOwnProperty('value') || !Array.isArray(this.rowData.value))
            && this.fieldValue && typeof this.fieldValue !== 'string') {
            Promise.resolve(this.setAttachmentData(this.fieldValue));
        }
        if (this.additionalParameter['ShowProgress'] && this.additionalParameter['ShowProgress'].toLowerCase() === 'true') {
            this.sharedEventsService.httpProgressEmitter.subscribe(httpProgress => {
                for (let i = 0; i < this.files.length; i++) {
                    const file = this.files[i];
                    if (file.uId === httpProgress.uId) {
                        file.progress = httpProgress.progress;
                    }
                }
            });
        }
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.hasUploadedData = true;
                    this.isListView = this.rowData.fromField && this.rowData.fromField === 'List' ? true : false;
                    this.setAttachmentData(this.rowData.value);
                    this.updateAttachments('', this.html_id, this.rowData.value);
                }
            }
            if (this.rootData && this.rootData['repeatable-' + this.fieldData.unique_id] && this.rootData['repeatable-' + this.fieldData.unique_id][this.html_id]) {
                this.files = this.rootData['repeatable-' + this.fieldData.unique_id][this.html_id];
            }
        }
        if (this.additionalParameter['CameraId']) {
            this.isCameraMode = true;
            this.rootData[this.additionalParameter['CameraId']] = (val) => {
                this.isCameraMode = false;
                this.isCameraInput = true;
                this.files = [val];
                this.uploadMore = false;
                const fileObj = val.file;
                const fileData = this.fileUploads[fileObj.type];
                this.autoUpload = val.autoUpload;
                this.setFileData(fileObj, fileData);
                if (this.autoUpload === true) {
                    const i = this.files.length - 1;
                    const selectedFile = this.files[i];
                    this.action(selectedFile, i, 'upload');
                }
            };
        }
        if (this.additionalParameter['editorId']) {
            this.rootData[this.additionalParameter['editorId']] = (val) => {
                this.files = [val];
                this.uploadMore = false;
                const fileObj = val.file;
                const fileData = this.fileUploads[fileObj.type];
                this.autoUpload = val.autoUpload;
                this.setFileData(fileObj, fileData);
                if (this.autoUpload === true) {
                    const i = this.files.length - 1;
                    const selectedFile = this.files[i];
                    this.action(selectedFile, i, 'upload');
                }
            };
        }
        // For Previewing using Signed URL
        if (this.additionalParameter.hasOwnProperty('CEE_PreviewWithURL')) {
            this.previewDirectly = this.additionalParameter['CEE_PreviewWithURL'] == "true" ? true : false;
        }
        // For Previewing File in New Tab
        if (this.additionalParameter.hasOwnProperty('CEE_Preview_InNewTab')) {
            this.previewDirectlyInNewTab = this.additionalParameter['CEE_Preview_InNewTab'] == "true" ? true : false;
        }
    }
    getDynamicLabel(data) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            const existingLabel = this.fieldData.field_label;
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
            if (this.fieldData.field_label != null && this.fieldData.field_label !== existingLabel) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.fieldData.field_label);
            }
        }
    }
    onSessionDataUpdated(value, state) { }
    convertReadableCSVFile(file) {
        const ext = file.name?.split('.').pop()?.toLowerCase();
        if (file && file.size > 0 && this.preDefineMimeType[ext] && this.preDefineMimeTypeCheck[ext].includes(file.type)) {
            file = new File([file], file.name, { type: this.preDefineMimeType[ext] });
        }
        return file;
    }
    checkValidation(event) {
        if (this.metaFields.length > 0) {
            const checkValidation = this.checkValidateANDCheckMandatory({ mandatory: true, valid: true });
            if (!checkValidation) {
                this.sharedEventsService.showMandatoryErrorMsg.emit({ fields: [], type: 'click' });
            }
            return checkValidation;
        }
        return true;
    }
    checkValidateANDCheckMandatory({ mandatory, valid }) {
        const allStepData = this.appDataService.getAllAppStoreData();
        for (const fieldData of this.metaFields) {
            if (fieldData.field_type != 'label') {
                const field = allStepData.find(i => i.id === fieldData.unique_id);
                if (mandatory && field.mandatory && this.checkEmpty.isEmpty(field.value)) {
                    return false;
                }
                if (valid && !field.isValid) {
                    return false;
                }
            }
        }
        return true;
    }
    showFileSelectError(event, errType) {
        // Added this condition to filter out the invalid files when Regex or invalid_file_extension error occurs
        if (errType == "invalid_file_extension") {
            this.files = this.files.filter(file => file.uploaded);
        }
        this.setModalorSanckBarMessage(this.html_id, this.files, errType);
        this.errorType = errType;
        this.emptyFileData();
        if (event.target) {
            event.target.value = ''; // Clear the input value
        }
    }
    /**
     * function that selects the file and
     * upload the file if and when minimum requirements are met
     */
    handleFileInput = async (event, files) => {
        this.errorType = '';
        // if multiUploader, check for total size and total no of files else return
        if (!this.isSingleUploader) {
            const sizeLimit = this.fieldData.attachment[0] ? this.fieldData.attachment[0] * 1024 : Number.MAX_SAFE_INTEGER; // Convert KB to Bytes
            const countLimit = (this.fieldData.attachment[1] && this.fieldData.attachment[1] !== "") ? this.fieldData.attachment[1] : Number.MAX_SAFE_INTEGER;
            const anyLimitExceeded = this.totalCount >= countLimit || this.totalSize >= sizeLimit;
            if (anyLimitExceeded || !files[0]) {
                this.showFileSelectError(event, 'total_file_size');
                return;
            }
        }
        let emptyFDflag = false;
        for (const file of files) {
            const fileObj = this.convertReadableCSVFile(file);
            const fileData = this.fileUploads[fileObj.type];
            const fileName = file['name'];
            // Allow only filenames with exactly one dot (e.g., abc.pdf)
            const dotCount = (fileName.match(/\./g) || []).length;
            if (dotCount !== 1) {
                this.showFileSelectError(event, 'invalid_file_extension');
                return;
            }
            // Block dangerous extensions
            const disallowedExtensions = ['exe', 'js', 'html', 'htm', 'svg', 'php', 'aspx', 'jsp', 'bat', 'sh'];
            const fileExtension = fileName.split('.').pop()?.toLowerCase();
            if (disallowedExtensions.includes(fileExtension)) {
                this.showFileSelectError(event, 'invalid_file_extension');
                return;
            }
            if (this.fieldData.validation_regex && file['name']) {
                const patt = new RegExp(this.fieldData.validation_regex);
                let valid = patt.test(file['name']);
                if (!valid) {
                    this.showFileSelectError(event, 'Regex');
                    return;
                }
            }
            if (!fileData) {
                this.showFileSelectError(event, 'file_type');
                return;
            }
            const isFileTypeValid = fileData.type.toLowerCase() == fileObj.type.toLowerCase();
            const isFileSizeValid = fileData.size == -1 || fileObj.size <= (fileData.size * 1024);
            const isFileCountValid = fileData.count == -1 || this.getTotalCount(fileData.type) <= fileData.count;
            if (isFileTypeValid && isFileSizeValid && isFileCountValid) {
                // single file upload
                if (this.isSingleUploader) {
                    this.selectFileText = event.target.value;
                    if (this.AdditionalParameter.Attachmentfixes) {
                        const file = fileObj.name.split('.');
                        const extension = file.splice(-1)[0];
                        let resultFileName = this.getfixes(this.AdditionalParameter.Attachmentfixes, file[0], this.getTotalCount(fileData.type));
                        resultFileName = `${resultFileName}.${extension}`;
                        const oldFile = fileObj;
                        const newFile = new File([oldFile], resultFileName, { type: oldFile.type });
                        this.setFileData(newFile, fileData);
                        this.emptyFileData();
                    }
                    else if (this.AdditionalParameter.AttachmentFilename) {
                        // check for the file name as concatenation of api keys
                        /**
                         * * File name can be {FileName}_{SomeAPIKey}_{TimeStamp}
                         * * or file-{application/renewal-create-record##currentEnrollmentId}_{YYYYMMDDHHMMSS}
                         * * here first searching would be done using FileName
                         * * and TimeStamp then need to check if there are any apiKey
                         * * then join
                         */
                        const file = fileObj.name.split('.');
                        const extension = file.splice(-1)[0];
                        let resultFileName = this.getName(this.AdditionalParameter.AttachmentFilename, file[0], /\{(.*?)\}/g);
                        resultFileName = `${resultFileName}.${extension}`;
                        const oldFile = fileObj;
                        const newFile = new File([oldFile], resultFileName, { type: oldFile.type });
                        this.setFileData(newFile, fileData);
                        this.emptyFileData();
                    }
                    else {
                        this.setFileData(fileObj, fileData);
                        this.emptyFileData();
                    }
                }
                else { // multiple file upload
                    // check for the file name as open as modal
                    if (this.AdditionalParameter.PromptFilename) {
                        const id = `addNameModal-${fileData.id}`;
                        if (!this.isAttachmentInModal) {
                            this.dialog.closeAll();
                        }
                        const dialogRef = this.dialog.open(AlertModalComponent, {
                            data: {
                                type: 'AttachmentNameModal',
                                value: this.AdditionalParameter.PromptFilename,
                                config: {
                                    disableClose: true,
                                    id
                                }
                            },
                            id
                        });
                        dialogRef.afterClosed().subscribe(result => {
                            if (result) {
                                const oldFile = fileObj;
                                const newFile = new File([oldFile], result, { type: oldFile.type });
                                this.setFileData(newFile, fileData);
                            }
                            emptyFDflag = true;
                        });
                    }
                    else if (this.AdditionalParameter.AttachmentFilename) {
                        // check for the file name as concatenation of api keys
                        /**
                         * * File name can be {FileName}_{SomeAPIKey}_{TimeStamp}
                         * * or file-{application/renewal-create-record##currentEnrollmentId}_{YYYYMMDDHHMMSS}
                         * * here first searching would be done using FileName
                         * * and TimeStamp then need to check if there are any apiKey
                         * * then join
                         */
                        const file = fileObj.name.split('.');
                        const extension = file.splice(-1)[0];
                        let resultFileName = this.getName(this.AdditionalParameter.AttachmentFilename, file[0], /\{(.*?)\}/g);
                        resultFileName = `${resultFileName}.${extension}`;
                        const oldFile = fileObj;
                        const newFile = new File([oldFile], resultFileName, { type: oldFile.type });
                        this.setFileData(newFile, fileData);
                        emptyFDflag = true;
                    }
                    else if (this.AdditionalParameter.Attachmentfixes) {
                        const file = fileObj.name.split('.');
                        const extension = file.splice(-1)[0];
                        let resultFileName = this.getfixes(this.AdditionalParameter.Attachmentfixes, file[0], this.getTotalCount(fileData.type));
                        resultFileName = `${resultFileName}.${extension}`;
                        const oldFile = fileObj;
                        const newFile = new File([oldFile], resultFileName, { type: oldFile.type });
                        this.setFileData(newFile, fileData);
                        emptyFDflag = true;
                    }
                    else {
                        this.setFileData(fileObj, fileData);
                        emptyFDflag = true;
                    }
                }
            }
            else {
                this.showFileSelectError(event, 'individual_file_size');
                return;
            }
        }
        if (this.AdditionalParameter.Attachmentfixes) {
            const fileCount = this.files.length;
            if (fileCount > 0) {
                let maxCounter = 0;
                let allFiles = [...this.files];
                // Get previous files if defined
                let previousFiles = [];
                const hasPrevious = this.AdditionalParameter?.CEE_PREVIOUS_COUNT;
                const fileKeyName = this.AdditionalParameter?.CEE_FILE_KEY_NAME || 'name'; // Fallback to 'name'
                if (hasPrevious) {
                    const prev = this.getDataByHandlerOrApiKey(hasPrevious);
                    if (prev && Array.isArray(prev) && prev.length > 0) {
                        previousFiles = prev;
                        allFiles = [...allFiles, ...prev];
                    }
                }
                // Find highest counter from all files with (n) suffix
                allFiles.forEach(f => {
                    const fileName = f?.file?.name || f?.[fileKeyName];
                    if (typeof fileName === 'string') {
                        const match = fileName.match(/\((\d+)\)\.[a-zA-Z0-9]+$/);
                        if (match) {
                            const num = Number(match[1]);
                            if (num > maxCounter)
                                maxCounter = num;
                        }
                    }
                });
                let counter = maxCounter;
                // Decide whether to rename the 0th file based on previous file existence
                const startIndex = previousFiles.length > 0 ? 0 : 1;
                for (let i = startIndex; i < fileCount; i++) {
                    const originalFile = this.files[i].file;
                    const originalName = originalFile?.name;
                    if (!originalFile || !originalName)
                        continue;
                    const lastDot = originalName.lastIndexOf('.');
                    const baseName = originalName.substring(0, lastDot);
                    const extension = originalName.substring(lastDot);
                    const alreadyHasParenCounter = /\(\d+\)$/.test(baseName);
                    if (!alreadyHasParenCounter) {
                        counter++;
                        // Remove any existing (n) before adding a new one
                        const cleanedBaseName = baseName.replace(/\(\d+\)$/, '');
                        const newName = `${cleanedBaseName} (${counter})${extension}`;
                        const renamedFile = new File([originalFile], newName, { type: originalFile.type });
                        this.files[i].file = renamedFile;
                    }
                }
            }
        }
        if (this.autoUpload) {
            if (this.isSingleUploader) {
                await this.singleFileUploadAction();
            }
            else {
                for (let i = 0; i < this.files.length; i++) {
                    const selectedFile = this.files[i];
                    if (!selectedFile.uploaded) {
                        await this.action(selectedFile, i, 'upload');
                    }
                }
            }
        }
        if (emptyFDflag) {
            this.emptyFileData();
        }
        this.clearFileInput();
    };
    getDataByHandlerOrApiKey(handlerOrApiKey) {
        if (!handlerOrApiKey?.includes('##'))
            return [];
        const results = [];
        const keys = handlerOrApiKey
            .split('|')
            .map(k => k.trim())
            .filter(k => k.includes('##'));
        for (let key of keys) {
            if (key.includes('*')) {
                key = key.replace('*', this.rowData?.position ?? 0);
            }
            const [handlerKey, pathRaw] = key.split('##');
            const handlerData = this.apiDataService.getApiDataByHandler(handlerKey);
            if (!handlerData?.value || typeof handlerData.value !== 'object')
                continue;
            // Create a nested object from flat keys
            const nested = {};
            for (const flatKey in handlerData.value) {
                if (!flatKey.startsWith(`${handlerKey}##`))
                    continue;
                const strippedKey = flatKey.replace(`${handlerKey}##`, '');
                setNestedValue(nested, strippedKey, handlerData.value[flatKey]);
            }
            // Use the raw path to reach the nested array (e.g., data[0].document_types[1].draft_documents)
            const targetArray = resolvePath(nested, pathRaw);
            if (Array.isArray(targetArray)) {
                results.push(...targetArray);
            }
        }
        return results;
        // Converts flat key with [index] and dots into nested structure
        function setNestedValue(obj, path, value) {
            const parts = path.replace(/\[(\d+)]/g, '.$1').split('.');
            let current = obj;
            for (let i = 0; i < parts.length - 1; i++) {
                const part = parts[i];
                if (!(part in current)) {
                    const nextPart = parts[i + 1];
                    current[part] = /^\d+$/.test(nextPart) ? [] : {};
                }
                current = current[part];
            }
            current[parts[parts.length - 1]] = value;
        }
        // Traverses the nested object using the path (e.g., data[0].document_types[1].draft_documents)
        function resolvePath(obj, path) {
            const parts = path.replace(/\[(\d+)]/g, '.$1').split('.');
            return parts.reduce((acc, part) => (acc && acc[part] !== undefined ? acc[part] : undefined), obj);
        }
    }
    /**
     * method returns the name based on the configuration
     * @param originalName the original name from where
     * @param fileName the file name of the file
     * @param regex the regex from which the dynamic variables needs to be extracted
     * @returns the result name
     */
    getName(originalName, fileName, regex) {
        let result = originalName;
        const matched = originalName.match(new RegExp(regex));
        if (matched) {
            for (const name of matched) {
                let val = '';
                switch (name.toLowerCase()) {
                    case '{filename}':
                        val = fileName;
                        break;
                    case '{yyyymmddhhmmss}':
                    case '{timestamp}':
                        val = String(new Date().getTime());
                        break;
                    default:
                        if (name.includes('##')) {
                            const values = name.match(new RegExp(/[^{}]+/g));
                            const key = values ? values[0] : name;
                            const handlerData = this.apiDataService.getApiDataByHandler(key.split('##')[0]);
                            val = handlerData ? handlerData.value[key] : '';
                        }
                        else {
                            const apiData = this.apiDataService.getApiDataByApiKey(name);
                            val = apiData ? apiData.value : '';
                        }
                        break;
                }
                result = result.split(name).join(val);
            }
        }
        return result;
    }
    /**
     * Stores the file in memory
     * @param file the current file
     * @param fileData the IFileData object
     */
    setFileData(file, fileData) {
        // add total count and total size
        // if only one file upload then just replace the file else push in an array.
        const newBlankFile = { rename: false, uploaded: false, progress: null, uId: Date.now().toString(), attachmentId: '', attachmentPath: '', url: '', custom: [], file };
        for (const metaItem of Object.keys(this.metadataFields)) {
            newBlankFile[metaItem] = '';
        }
        if (this.isSingleUploader) {
            this.singleUploadFileData = newBlankFile;
        }
        else if (Array.isArray(this.files)) {
            if (this.fieldData.attachment && this.fieldData.attachment.length == 2 &&
                (this.fieldData.attachment[0] && this.fieldData.attachment[1]) &&
                (this.fieldData.attachment[1] == 1)) {
                if (this.files.length) {
                    this.files[0] = newBlankFile;
                }
                else {
                    this.files = [newBlankFile];
                }
            }
            else {
                this.files = [...this.files, newBlankFile];
                // this.files.push(newBlankFile);
            }
            this.setTotalSizeAndCount(file.size, 1);
        }
        this.errorType = "file_not_uploaded";
        this.updateAttachmentAppData(false);
        if (this.rootData['repeatable-' + this.fieldData.unique_id]) {
            this.rootData['repeatable-' + this.fieldData.unique_id][this.html_id] = this.files;
        }
    }
    /**
     * Empty the field input after the
     * file gets uploaded
     */
    emptyFileData() {
        // const elm: any = document.querySelector(`#${this.html_id}`);
        // elm.value = '';
        try {
            // Escape the special characters in the selector
            const escapedSelector = CSS.escape(this.html_id);
            // Now use querySelector with the escaped selector
            const element = document.querySelector(`#${escapedSelector}`);
            if (element) {
                element.value = '';
            }
            else {
                console.log("Element not found");
            }
        }
        catch (error) {
            console.error("An error occurred:", error);
        }
    }
    /**
     * set the total count of uploaded files
     * @param size the size of the current uploaded or removed file
     * @param count the count of the current uploaded or removed file
     */
    setTotalSizeAndCount(size, count) {
        if (size) {
            this.totalSize = this.totalSize + size;
        }
        if (count) {
            this.totalCount = this.totalCount + count;
        }
    }
    /**
     * function to get the total count of files for each file type
     * @param fileType the current chosen file type
     */
    getTotalCount(fileType) {
        let totalNumberOfFiles = 0;
        if (this.files.length) {
            totalNumberOfFiles = this.files.reduce((accumulator, currentValue) => Number(accumulator) + (currentValue.file.type == fileType ? 1 : 0), 0);
        }
        else {
            totalNumberOfFiles = totalNumberOfFiles + 1;
        }
        return totalNumberOfFiles;
    }
    removePercentSymbols = (str) => {
        return str.replace(/%/g, ""); // Remove all % symbols
    };
    // Function to check if a string starts with %
    startsWithPercent = (str) => {
        return str.startsWith("%");
    };
    getDynamicValueFromApiKey(value) {
        let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.removePercentSymbols(value)));
        const val = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(value), data['value']);
        return val ? val : '';
    }
    /**
     * Returns a string based on the fixInput, supporting repeatable blocks.
     * For repeatable blocks, if the handler returns an array, it will use the value at the current row index (primaryKeyIndex).
     */
    getFixesString(fixInput) {
        const names = fixInput.split('|');
        let result = '';
        let value = '';
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            const startsWithPercent = this.startsWithPercent(name);
            if (name && !startsWithPercent) {
                value = `${name}`;
            }
            else if (name && startsWithPercent) {
                let handler = this.commonUtil.getHandlerName(this.removePercentSymbols(name));
                const tmpData = this.apiDataService.getApiDataByHandler(handler);
                let tmpVal = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(name), tmpData?.['value']);
                // Handle repeatable block: if tmpVal is array, use rbPosition if available
                if (Array.isArray(tmpVal)) {
                    // Use rbPosition if available, otherwise join all
                    if (typeof this.rbPosition === 'number' && tmpVal[this.rbPosition] !== undefined) {
                        value = `${tmpVal[this.rbPosition]}`;
                    }
                    else {
                        value = tmpVal.map(item => (typeof item === 'string' ? item : JSON.stringify(item))).join('_');
                    }
                }
                else {
                    value = tmpVal ? `${tmpVal}` : '';
                }
            }
            if (name) {
                if (!result.endsWith('_'))
                    result += value.endsWith('_') ? value : '_' + value;
                else
                    result += value;
            }
        }
        // Remove leading/trailing underscores and collapse multiple underscores
        return result.replace(/_+/g, '_').replace(/^_+|_+$/g, '');
    }
    getfixes(fixName, fileName, count) {
        let result = fileName;
        let value = '';
        result = this.getFixesString(fixName);
        result = result.replace(/_+/g, '_').replace(/^_+|_+$/g, '');
        return result;
    }
    /**
    * method returns the prefix and suffix based on the configuration
    * @returns the result prefix and suffix
    */
    getfixes_old(fixName, fileName, count) {
        // Split the fixName into prefix, suffix, firstname, lastname, and commitment
        const [prefix, suffix, firstname, lastname, commitment] = fixName.split("|");
        // Initialize the result with the original fileName
        let result = fileName;
        if (prefix && !this.startsWithPercent(prefix)) {
            result = `${prefix}`;
        }
        if (prefix && this.startsWithPercent(prefix)) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.removePercentSymbols(prefix)));
            const val = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(prefix), data['value']);
            result = val ? `${val}` : '';
        }
        // If either firstname or lastname is provided, replace the result with "firstname_lastname" (or just one if only one exists)
        if ((firstname && !this.startsWithPercent(firstname)) || (lastname && !this.startsWithPercent(lastname))) {
            result = [firstname, lastname].filter(Boolean).join("_"); // Join non-empty values with underscore
        }
        if ((firstname && this.startsWithPercent(firstname)) || (lastname && this.startsWithPercent(lastname))) {
            // If firstname or lastname starts with %, fetch dynamic data from API
            const dynamicFirstName = firstname && this.startsWithPercent(firstname)
                ? this.getDynamicValueFromApiKey(firstname)
                : firstname;
            const dynamicLastName = lastname && this.startsWithPercent(lastname)
                ? this.getDynamicValueFromApiKey(lastname)
                : lastname;
            // Use the dynamic values (or original values if no %)
            let firstLastName = [dynamicFirstName, dynamicLastName].filter(Boolean).join("_");
            result = firstLastName ? `${result}_${firstLastName}` : result;
            console.log('result***', result);
        }
        // Add prefix if it exists
        // Add commitment if it exists
        if (commitment && !this.startsWithPercent(commitment)) {
            result = `${result}_${commitment}`;
        }
        if (commitment && this.startsWithPercent(commitment)) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.removePercentSymbols(commitment)));
            const val = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(commitment), data['value']);
            result = val ? `${result}_${val}` : result;
        }
        // Add suffix if it exists
        if (suffix && !this.startsWithPercent(suffix)) {
            result = `${result}_${suffix}`;
        }
        if (suffix && this.startsWithPercent(suffix)) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.removePercentSymbols(suffix)));
            const val = this.setApiCallBackDataUtil.setApiCallBackData(this.removePercentSymbols(suffix), data['value']);
            result = val ? `${result}_${val}` : result;
        }
        if (count >= 0) {
            result = `${result}_${this.totalCount + 1}`;
        }
        return result;
    }
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    convertImageToPDF(file, index) {
        return new Promise((resolve, reject) => {
            if (!file) {
                resolve();
                return;
            }
            // Check if the file is HEIC format and convert it first
            if (file.name.toLowerCase().endsWith(".heic") || file.type === 'image/heic') {
                this.convertHEICToPDF(file, index).then(resolve).catch(reject);
                return;
            }
            // Handle regular image formats
            this.processImageToPDF(file, index).then(resolve).catch(reject);
        });
    }
    convertHEICToPDF(file, index) {
        return new Promise((resolve, reject) => {
            heic2any({
                blob: file,
                toType: "image/png",
            }).then((convertedBlob) => {
                const pngFile = new File([convertedBlob], file.name.replace(/\.heic$/i, ".png"), {
                    type: "image/png",
                    lastModified: new Date().getTime()
                });
                // Process the converted PNG file to PDF
                this.processImageToPDF(pngFile, index).then(resolve).catch(reject);
            }).catch((error) => {
                console.error("Error converting HEIC to PNG for PDF conversion:", error);
                // Fallback: try to process the original file anyway
                this.processImageToPDF(file, index).then(resolve).catch(reject);
            });
        });
    }
    processImageToPDF(file, index) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                const img = new Image();
                img.src = reader.result;
                img.onload = () => {
                    try {
                        const canvas = document.createElement('canvas');
                        const ctx = canvas.getContext('2d');
                        // Define max width based on A4 size while maintaining aspect ratio
                        const pageWidth = 210; // A4 width in mm
                        const pageHeight = 297; // A4 height in mm
                        const margin = 10; // Margins on each side
                        let imgWidth = pageWidth - 2 * margin; // Max width within margins
                        let imgHeight = (img.height * imgWidth) / img.width; // Maintain aspect ratio
                        // If image height exceeds the page height, scale it down
                        if (imgHeight > pageHeight - 2 * margin) {
                            imgHeight = pageHeight - 2 * margin;
                            imgWidth = (img.width * imgHeight) / img.height; // Adjust width accordingly
                        }
                        // Set canvas size to match the adjusted image size
                        canvas.width = imgWidth * 4; // Increase resolution for better quality
                        canvas.height = imgHeight * 4;
                        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                        // Compress image using lower quality setting
                        const compressedImg = canvas.toDataURL('image/jpeg', 0.8); // 80% quality
                        // Create PDF with original HEIC filename but .pdf extension
                        const originalFileName = this.files[index]?.file?.name || file.name;
                        const pdfFileName = originalFileName.replace(/\.(heic|png|jpg|jpeg|gif|bmp|webp)$/i, '.pdf');
                        const pdf = new jsPDF('p', 'mm', 'a4'); // .setProperties({ title: pdfFileName });
                        pdf.addImage(compressedImg, 'JPEG', margin, margin, imgWidth, imgHeight, '', 'FAST');
                        const pdfBlob = pdf.output('blob');
                        const pdfFile = new File([pdfBlob], pdfFileName, { type: 'application/pdf' });
                        this.payLoad.fileData.attachmentName = pdfFile.name;
                        this.payLoad.fileData.fileSize = pdfFile.size;
                        this.payLoad.fileData.file = pdfFile;
                        this.files[index].file = pdfFile;
                        resolve();
                    }
                    catch (error) {
                        reject(error);
                    }
                };
                img.onerror = () => {
                    const error = new Error(`Error loading image for PDF conversion: ${file.name}`);
                    console.error(error.message);
                    reject(error);
                };
            };
            reader.onerror = () => {
                const error = new Error(`Error reading file for PDF conversion: ${file.name}`);
                console.error(error.message);
                reject(error);
            };
        });
    }
    // Function to convert Base64 string to Blob and trigger download
    base64ToFile(base64String, mimeType, fileName) {
        // Remove data URL scheme if present
        const base64Data = base64String.replace(/^data:.+;base64,/, '');
        const byteCharacters = atob(base64Data); // Decode Base64 string
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: mimeType });
        return blob;
    }
    compressedImage = "";
    compressImage(file, index) {
        if (!file)
            return;
        // If uploaded file size is smaller then skip compression 
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImage_IfSizeExceedsInKB") && this.additionalParameter["CEE_CompressImage_IfSizeExceedsInKB"] !== "") {
            const imageSize = Number(this.additionalParameter["CEE_CompressImage_IfSizeExceedsInKB"].match(/\d+/));
            //console.log(file)
            if ((file.size / 1000) < imageSize) {
                return;
            }
        }
        const settings = {
            orientation: 1,
            ratio: 50,
            quality: 50
        };
        // for orientation
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_Orientation") && this.additionalParameter["CEE_CompressImg_Orientation"] !== "") {
            settings.orientation = this.additionalParameter["CEE_CompressImg_Orientation"];
        }
        // for ratio
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_AspectRatio") && this.additionalParameter["CEE_CompressImg_AspectRatio"] !== "") {
            settings.ratio = this.additionalParameter["CEE_CompressImg_AspectRatio"];
        }
        // for quality
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_Quality") && this.additionalParameter["CEE_CompressImg_Quality"] !== "") {
            settings.quality = this.additionalParameter["CEE_CompressImg_Quality"];
        }
        // for maxWidth
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_maxHeight") && this.additionalParameter["CEE_CompressImg_maxHeight"] !== "") {
            settings.maxWidth = this.additionalParameter["CEE_CompressImg_maxHeight"];
        }
        // for maxHeight
        if (this.additionalParameter.hasOwnProperty("CEE_CompressImg_maxWidth") && this.additionalParameter["CEE_CompressImg_maxWidth"] !== "") {
            settings.maxHeight = this.additionalParameter["CEE_CompressImg_maxWidth"];
        }
        const reader = new FileReader();
        reader.readAsDataURL(file);
        //console.log("Before Compression : " + file.size)
        reader.onload = () => {
            this.imageCompress.compressFile(reader.result, settings.orientation, settings.ratio, settings.quality, settings.maxWidth, settings.maxHeight).then((result) => {
                //console.log('Compressed image: ', result);  // Base64 compressed image
                this.compressedImage = result;
                const image = new File([this.base64ToFile(result, file.type, file.name)], file.name, { type: file.type });
                this.payLoad.fileData.attachmentName = image.name;
                this.payLoad.fileData.fileSize = image.size;
                this.payLoad.fileData.file = image;
                this.files[index].file = image;
                //console.log("After Compression : " + image.size)
            }).catch(error => {
                console.log(error);
            });
        };
    }
    showPreviewDialog(url, fileData, index) {
        const id = `previewModal-${fileData.name.toLowerCase().replace(/[^a-zA-Z]|\s/g, '_')}-${index}`, dialogRef = this.dialog.open(AlertModalComponent, {
            data: {
                type: 'PreviewModal',
                value: url,
                config: {
                    disableClose: false,
                    id
                },
                fileType: (fileData.type.includes('image')) ? 'image' : 'doc',
                title: fileData.name
            }, id,
            panelClass: 'previewModal-panel'
        });
        dialogRef.afterOpened().subscribe(() => {
            this.commonUtil.moveMatDialogToStepModalIfExist();
        });
        dialogRef.afterClosed().subscribe(result => {
            this.commonUtil.moveMatDialogToBody();
        });
        return dialogRef;
    }
    handleAction(item, index, type) {
        if (this.clickable_filename) {
            this.action(item, index, type);
        }
    }
    // Open URL in a new browser tab
    openUrlInNewTab(url) {
        window.open(url, '_blank');
    }
    /**
     * the function is basically the actions on the buttons
     * i.e. download, preview, click
     *
     * Security Enhancement: File Extension Protection
     * - When renaming files (type='rename'), only the filename (without extension) is editable
     * - The original file extension is preserved and displayed as read-only
     * - This prevents users from changing file types accidentally or maliciously
     * - Input validation prevents typing or pasting file extensions
     *
     * @param selectedFile the current file object containing file data and metadata
     * @param index the index of the file in the files array
     * @param type the type of the action (rename, reset, update, preview, download, etc.)
     */
    async action(selectedFile, index, type) {
        let fileData = selectedFile.file;
        let attachmentId = selectedFile.attachmentId;
        let url = selectedFile.url;
        let attachmentPath = selectedFile.attachmentPath;
        let uId = selectedFile.uId;
        try {
            if (type == 'rename') {
                // Extract filename without extension for editing
                const fullFileName = selectedFile.file.name;
                const lastDotIndex = fullFileName.lastIndexOf('.');
                if (lastDotIndex > 0) {
                    // Store the filename without extension and the original extension separately
                    selectedFile.newName = fullFileName.substring(0, lastDotIndex);
                    selectedFile.originalExtension = fullFileName.substring(lastDotIndex);
                }
                else {
                    // Handle files without extension (edge case)
                    selectedFile.newName = fullFileName;
                    selectedFile.originalExtension = '';
                }
                selectedFile.rename = !selectedFile.rename;
            }
            if (type == 'reset') {
                // Reset to original filename without extension
                const fullFileName = selectedFile.file.name;
                const lastDotIndex = fullFileName.lastIndexOf('.');
                if (lastDotIndex > 0) {
                    selectedFile.newName = fullFileName.substring(0, lastDotIndex);
                }
                else {
                    selectedFile.newName = fullFileName;
                }
                selectedFile.rename = !selectedFile.rename;
            }
            if (type == 'update') {
                selectedFile.rename = !selectedFile.rename;
            }
            // if (!this.isSingleUploader) {
            if (['preview', 'download'].includes(type)) {
                const data = await this.getCurrentFile(fileData, attachmentId, url, attachmentPath, index, type);
                if (data.success) {
                    fileData = this.previewDirectly && type == 'preview' ? fileData : data.fileData;
                    url = data.url;
                }
            }
            // }
            this.payLoad = {
                type: 'file',
                fileData: {
                    attachmentName: fileData.name,
                    file: fileData,
                    uId: uId,
                    fileSize: fileData.size,
                    apiKey: this.isSingleApiKey ? this.fieldData.api_key : this.fieldData.request_api_key
                }
            };
            switch (type) {
                case 'remove':
                    // check for additional parameter
                    if (this.AdditionalParameter.PromptDelete) {
                        const id = `removeModal-${fileData.name.toLowerCase().replace(/[^a-zA-Z]|\s/g, '_')}-${index}`;
                        if (!this.isAttachmentInModal) {
                            this.dialog.closeAll();
                        }
                        const dialogRef = this.dialog.open(AlertModalComponent, {
                            data: {
                                message: this.AdditionalParameter.PromptDelete,
                                config: {
                                    disableClose: true,
                                    id
                                }
                            },
                            id
                        });
                        dialogRef.afterOpened().subscribe(() => {
                            this.commonUtil.moveMatDialogToStepModalIfExist();
                        });
                        dialogRef.afterClosed().subscribe(result => {
                            this.commonUtil.moveMatDialogToBody();
                            if (result) {
                                this.deleteData(fileData, index);
                            }
                        });
                    }
                    else {
                        this.deleteData(fileData, index);
                    }
                    break;
                case 'update':
                    // Validate that filename is not empty
                    if (!selectedFile.newName || selectedFile.newName.trim() === '') {
                        // Show error message or reset to original name
                        console.error('Filename cannot be empty');
                        selectedFile.rename = false;
                        return;
                    }
                    // Combine the edited filename with the original extension
                    const fullNewName = selectedFile.newName.trim() + (selectedFile.originalExtension || '');
                    this.payLoad.fileData.newName = fullNewName;
                    this.payLoad.fileData.attachmentId = selectedFile.attachmentId;
                    this.updateFileName(fileData, index);
                    break;
                case 'preview':
                    // calling on Preview
                    if (!this.isAttachmentInModal) {
                        this.dialog.closeAll();
                    }
                    if (this.previewDirectlyInNewTab) {
                        this.openUrlInNewTab(url);
                    }
                    else {
                        // For Previewing Documents Directly with Signed URL having Header (Content-Disposition: inline)                    
                        if (this.previewDirectly) {
                            this.showPreviewDialog(url, fileData, index);
                        }
                        else {
                            const previewUrl = await this.readFileAsDataURL(fileData);
                            this.showPreviewDialog(previewUrl, fileData, index);
                        }
                    }
                    break;
                case 'download':
                    const fileUrl = await this.readFileAsDataURL(fileData);
                    const downloadLink = document.createElement('a');
                    downloadLink.href = fileUrl;
                    downloadLink.download = fileData.name;
                    downloadLink.click();
                    break;
                case 'upload':
                    this.onComponentEvent('BeforeUpload');
                    // for upload set attachment path
                    if (this.AdditionalParameter.AttachmentPathname) {
                        this.payLoad.fileData.attachmentPath = this.getName(this.AdditionalParameter.AttachmentPathname, '', /\{(.*?)\}/g);
                    }
                    else {
                        this.payLoad.fileData.attachmentPath = '';
                    }
                    if (this.fieldData.isAttachmentBlock) {
                        for (const metaItem of Object.keys(this.metadataFields)) {
                            if (this.metadataFields[metaItem].field_type != 'label') {
                                const keyValue = this.appDataService.getFieldDataByFieldId(this.metadataFields[metaItem].unique_id);
                                this.payLoad.fileData[metaItem] = keyValue;
                            }
                        }
                    }
                    if (fileData.type.includes('image')) {
                        if (this.additionalParameter['CompressAndConvertToPdf']?.toLowerCase() === 'true') {
                            await this.convertImageToPDF(fileData, index);
                            await this.delay(1000); // 1 second delay
                        }
                        else if (this.additionalParameter['CEE_CompressImage']?.toLowerCase() === 'true') {
                            await this.compressImage(fileData, index);
                        }
                    }
                    // Check if upload type flag is needed
                    if (this.additionalParameter.hasOwnProperty('CEE_upload_type') && this.additionalParameter['CEE_upload_type'] == "true") {
                        //To identify new uploaded file
                        this.payLoad['uploadType'] = "New";
                    }
                    const _payload = this.payLoad;
                    const res = await new Promise((resolve) => {
                        const uploadSub = this.ceeInternalEmitter.fileUploadActionEmitter.subscribe(res => {
                            if (res.type === 'OnUpload' && res.payLoad.fileData.uId === _payload.fileData.uId) {
                                uploadSub.unsubscribe();
                                resolve(res);
                            }
                        });
                        this.onComponentEvent('OnUpload', {}, false, _payload);
                    });
                    if (res.responseData.statusCode == 200) {
                        const responseMultipleAPIKey = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
                        let responseKey = responseMultipleAPIKey.find(i => i.includes(res.responseData.handler));
                        if (responseKey && responseKey.includes('##')) {
                            responseKey = responseKey.split('##').pop();
                        }
                        let responseData, hasCustomEventHandler = res.responseData?.hasCustomEventHandler || false;
                        if (res.responseData.handler === 'file/upload' || hasCustomEventHandler) {
                            responseData = _payload.fileData.apiKey ? res.responseData.data : (res.responseData.data['FILE_UPLOAD_DATA']);
                        }
                        else {
                            _payload.fileData.apiKey = this.isSingleApiKey ? this.fieldData.api_key : responseKey;
                            responseData = (res.responseData.data[_payload.fileData.apiKey || 'FILE_UPLOAD_DATA']);
                        }
                        this.sharedEventsService.uploadEmitter.emit(res.responseData.data);
                        if (res.responseData.handler === 'file/upload' || hasCustomEventHandler) {
                            responseData = {
                                ...responseData,
                                ...{
                                    attachmentId: responseData['id'],
                                    attachmentType: responseData['type'],
                                    attachmentUrl: responseData['url'],
                                    attachmentSize: responseData['size'],
                                    attachmentName: responseData['name'],
                                    uploadAttachmentPath: responseData['attachmentPath'],
                                }
                            };
                            // Check if upload type flag is needed
                            if (this.additionalParameter.hasOwnProperty('CEE_upload_type') && this.additionalParameter['CEE_upload_type'] == "true") {
                                //To identify new uploaded file
                                responseData['uploadType'] = "New";
                            }
                            delete responseData['id'];
                            delete responseData['type'];
                            delete responseData['url'];
                            delete responseData['size'];
                            delete responseData['attachmentPath'];
                            responseData = [responseData];
                        }
                        if (Array.isArray(responseData)) {
                            const len = Number(responseData.length) - 1;
                            if (this.isSingleUploader) {
                                this.files = [];
                                this.files.push(this.singleUploadFileData);
                                // this.files.push(this.singleUploadFileData);
                            }
                            this.uploadedCount++;
                            if (this.files[index] && responseData[len] && responseData[len]['attachmentId']) {
                                this.files[index].attachmentId = responseData[len]['attachmentId'];
                                this.files[index].url = responseData[len]['attachmentUrl'];
                                this.files[index].attachmentPath = responseData[len]['uploadAttachmentPath'];
                                for (const metaItem of Object.keys(this.metadataFields)) {
                                    const { label, value } = this.getDynamicValue(metaItem, responseData[len][metaItem]);
                                    this.files[index]['custom'].push({
                                        label: label,
                                        key: metaItem,
                                        value: value
                                    });
                                }
                                // const data = this.files;
                                // data[index].uploaded = true;
                                // this.files = data;
                                this.files[index].uploaded = true;
                                if (this.files.length <= 0 && this.autoUpload) {
                                    this.errorMsgBox = true;
                                }
                                if (this.isSingleUploader && this.files && this.files.length > 0) {
                                    this.hasUploadedData = true;
                                }
                                if ((this.isSingleUploader && this.files && this.files.length > 0) || (!this.isSingleUploader && this.files && this.files.length == this.uploadedCount)) {
                                    this.errorType = "";
                                    if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                                        this.updateAttachmentAppData(true);
                                    }
                                }
                                this.updateAttachments('upload', this.html_id, responseData[len], '', this.isSingleUploader);
                                setTimeout(() => {
                                    if (this.files && this.files.length > 0 && this.files.length != this.uploadedCount) {
                                        if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                                            this.updateAttachmentAppData(true);
                                        }
                                        else {
                                            this.updateAttachmentAppData(false);
                                        }
                                    }
                                }, 2000);
                            }
                        }
                        this.clearBlockData();
                        if (this.isSingleUploader) {
                            this.selectFileText = (this.AdditionalParameter['selectFileText']) ? this.AdditionalParameter['selectFileText'] : "Select a file";
                        }
                        // this.onComponentEvent('OnLoad', {}, true, this.payLoad);
                    }
                    break;
                case 'clear':
                    this.setTotalSizeAndCount(-fileData.size, -1);
                    this.files.splice(index, 1);
                    if ((this.totalCount - this.uploadedCount) == 0 && this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                        this.updateAttachmentAppData(true);
                    }
                    break;
                default:
                    break;
            }
        }
        catch (error) {
            console.error(`Error occurred while performing operation: ${type} for attachment ${attachmentId}`);
        }
        if (this.rootData['repeatable-' + this.fieldData.unique_id]) {
            this.rootData['repeatable-' + this.fieldData.unique_id][this.html_id] = this.files;
        }
    }
    readFileAsDataURL(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }
    updateAttachmentAppData(isAttachmentValid) {
        this.appDataService.getIndividualAppData(this.fieldData.html_id).pipe(take(1)).subscribe(r => {
            if (r.length > 0 && this.fieldData.html_id == r[0].id) {
                this.updateFieldData(r[0].value, isAttachmentValid);
            }
            else {
                this.updateFieldData([], isAttachmentValid);
            }
        });
    }
    renameAttachmentAppData(newName, index) {
        if (newName !== "") {
            const attachmentData = this.appDataService.getFieldDataByFieldId(this.html_id);
            if (attachmentData) {
                let values = [];
                if (Array.isArray(attachmentData)) {
                    attachmentData.forEach((val, i) => {
                        if (i == index) {
                            val = Object.assign({}, {
                                ...val,
                                attachmentName: newName,
                                document_name: newName,
                                name: newName
                            });
                        }
                        values.push(val);
                    });
                    this.updateFieldData(values, true);
                }
            }
        }
    }
    singleFileUploadAction() {
        if (this.files && this.files.length > 0 && this.AdditionalParameter.PromptReplace) {
            const id = `replaceModal`;
            if (!this.isAttachmentInModal) {
                this.dialog.closeAll();
            }
            const dialogRef = this.dialog.open(AlertModalComponent, {
                data: {
                    title: 'Alert',
                    message: this.AdditionalParameter.PromptReplace,
                },
                panelClass: 'replace-alert-panel',
                id
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    const selectedFile = this.singleUploadFileData;
                    this.uploadedCount--;
                    this.action(selectedFile, 0, 'upload');
                }
            });
        }
        else {
            const selectedFile = this.singleUploadFileData;
            if (this.singleUploadFileData) {
                this.action(selectedFile, 0, 'upload');
            }
        }
    }
    getDynamicValue(key, value) {
        let label = this.metadataFields[key].label;
        if (label.includes('((dynamic))')) {
            let returnValue = label.replace('((dynamic))', '');
            const valueArr = returnValue.split(/[%%]/);
            returnValue = '';
            for (let v of valueArr) {
                if (v.includes(key)) {
                    if (v.includes(':::') && value) {
                        const format = v.split(':::').pop();
                        // returnValue += moment.unix(value / 1000).format(format);
                        returnValue += moment(Number(value)).format(format);
                    }
                }
                else {
                    returnValue += v;
                }
            }
            label = '';
            value = returnValue;
        }
        return {
            label,
            value
        };
    }
    clearBlockData() {
        const metaFieldIds = [];
        for (const metaItem of Object.keys(this.metadataFields)) {
            const field = this.metadataFields[metaItem];
            if (field.additional_parameters.findIndex(i => i.parameter_type === 'metadata_skip_remove' && i.value === 'true') === -1) {
                metaFieldIds.push(field.unique_id);
            }
        }
        this.appDataService.clearDataUsingUniqueIds(metaFieldIds, () => {
            this.sharedEventsService.emitForEmptySession.emit({ unique_ids: metaFieldIds, apiKeys: [] });
        });
    }
    getCurrentFile(fileData, attachmentId, url, attachmentPath, index, type) {
        let success = false;
        return new Promise((resolve, reject) => {
            this.payLoad.fileData.attachmentPath = attachmentPath;
            this.payLoad.fileData.attachmentId = attachmentId;
            const fileUploadEmitter = this.ceeInternalEmitter.fileUploadActionEmitter.subscribe(async (res) => {
                if (res.type.toLowerCase() === 'onpreview') {
                    fileUploadEmitter.unsubscribe();
                    try {
                        if (res.responseData.statusCode == 200) {
                            let responseData, hasCustomEventHandler = res.responseData?.hasCustomEventHandler || false;
                            if ((res.responseData.handler === 'file/fetch' || hasCustomEventHandler) && res.responseData.data) {
                                if (res.responseData.data['url']) {
                                    responseData = res.responseData.data;
                                    url = responseData['url'];
                                }
                                else if (res.responseData.data['FILE_UPLOAD_DATA'] && res.responseData.data['FILE_UPLOAD_DATA']['url']) {
                                    responseData = res.responseData.data['FILE_UPLOAD_DATA'];
                                    url = responseData['url'];
                                }
                            }
                            else {
                                responseData = (res.responseData.data[this.payLoad.fileData.apiKey || 'FILE_UPLOAD_DATA']) === undefined ? res.responseData.data : res.responseData.data[this.payLoad.fileData.apiKey || 'document/preview'];
                                if (Array.isArray(responseData) && responseData[0] && responseData[0]['attachmentUrl']) {
                                    url = responseData[0]['attachmentUrl'];
                                }
                            }
                            if ((res.responseData.handler === 'file/fetch' || hasCustomEventHandler) && res.responseData.data && (res.responseData.data).hasOwnProperty('api_response')) {
                                const apiResponse = JSON.parse(res.responseData.data.api_response);
                                if (apiResponse.hasOwnProperty('result') && (apiResponse.result).hasOwnProperty('url')) {
                                    url = apiResponse.result.url;
                                }
                            }
                            if (url) {
                                if (this.previewDirectly && type == "preview") {
                                    success = true;
                                    resolve({ success, fileData, url });
                                    return;
                                }
                                const response = await fetch(url);
                                let blob = await response.blob();
                                // if encrypted is true
                                // then only go ahead and decrypt b
                                if (this.encrypted) {
                                    // convert to the string from blob
                                    const strFile = await Promise.resolve(this.fileUploadService.createStringFromBlob(blob, 'decrypt'));
                                    // decrypt the string
                                    const decryptRes = await this.fileUploadService.encryptDecrypt('decrypt', strFile).toPromise();
                                    if (decryptRes.status == 200 &&
                                        decryptRes.body['credentials'] &&
                                        decryptRes.body['credentials']['plainText']) {
                                        // decode the text
                                        const decryptedString = this.fileUploadService.returnDecryptedResult(strFile, decryptRes.body['credentials']['plainText']);
                                        // fetch the base64 string
                                        const decodedRes = await fetch(decryptedString);
                                        // get the blob
                                        blob = await decodedRes.blob();
                                    }
                                }
                                fileData = new File([blob], fileData.name, { type: fileData.type });
                                // TODO: check local caching the data when clicked once
                                // FIXME: Fix the caching when once download is clicked
                                // if (res.type.toLowerCase() !== 'onpreview') {
                                //     this.files[index].file = fileData;
                                //     this.files[index].url = '';
                                // }
                                this.files[index].file = fileData;
                                this.files[index].url = url;
                                success = true;
                            }
                        }
                        if (success) {
                            resolve({ success, fileData, url });
                        }
                        else {
                            console.error(`Error while fetching file for attachmentId: ${attachmentId}`);
                            reject({ success, fileData, url });
                        }
                    }
                    catch (error) {
                        console.error(`Error while fetching file for attachmentId: ${attachmentId}, error is ${error}`);
                        reject({ success, fileData, url });
                    }
                }
            });
            if (['preview', 'download'].includes(type)) {
                this.payLoad['extraQueryParams'] = {
                    "preview_download": type == "preview" ? true : false
                };
            }
            this.onComponentEvent('OnPreview', {}, false, this.payLoad);
        });
    }
    /**
     * function that deletes the current file from the memory and
     * calls the onRemove Handler
     * @param fileData the current file data
     * @param index the current index of the file that
     * is needed to be removed
     */
    deleteData(fileData, index) {
        this.payLoad.fileData.attachmentPath = this.files[index].attachmentPath;
        this.payLoad.fileData.attachmentId = this.files[index].attachmentId;
        const handlerFunc = res => {
            if (res.type == 'OnRemove') {
                fileUploadEmitter.unsubscribe();
                uploadEmitter.unsubscribe();
                if (res.responseData.statusCode == 200) {
                    this.sharedEventsService.removeFileEmitter.emit(this.payLoad.fileData);
                    this.setTotalSizeAndCount(-fileData.size, -1);
                    this.files.splice(index, 1);
                    // set the files
                    this.updateAttachments('delete', this.html_id, {}, this.payLoad.fileData.attachmentId);
                    // this.updateFieldData(this.files.length ? this.files : {});
                    setTimeout(() => {
                        this.uploadedCount--;
                        if (this.files && this.files.length > 0 && this.files.length != this.uploadedCount) {
                            this.updateAttachmentAppData(false);
                        }
                        else if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                            this.updateAttachmentAppData(true);
                        }
                    }, 2500);
                }
            }
        };
        const fileUploadEmitter = this.ceeInternalEmitter.fileUploadActionEmitter.subscribe(handlerFunc);
        const uploadEmitter = this.sharedEventsService.uploadEmitter.subscribe(handlerFunc);
        this.onComponentEvent('OnRemove', {}, false, this.payLoad);
    }
    updateFileName(fileData, index) {
        const fileUploadEmitter = this.ceeInternalEmitter.fileUploadActionEmitter.subscribe(res => {
            fileUploadEmitter.unsubscribe();
            const actualIndex = this.files.findIndex(f => f.attachmentId == res.payLoad.fileData.attachmentId);
            if (actualIndex != index)
                return; // Ignore if the response is not for the current file being renamed
            if (res.type == 'OnRename') {
                if (res.responseData.statusCode == 200) {
                    this.errorType = "";
                    setTimeout(() => {
                        const file = this.files[index].file;
                        const newName = this.payLoad.fileData.newName;
                        // // Create a new File object with the updated name
                        const updatedFile = new File([file], newName, { type: file.type });
                        // // Replace the original file in the array
                        this.files[index].file = updatedFile;
                        this.renameAttachmentAppData(newName, index);
                    }, 0);
                }
                else if (res.responseData.statusCode == 500) {
                    this.showFileSelectError('', 'duplicate_file_name_error');
                    // Show error message or reset to original name
                }
            }
        });
        this.onComponentEvent('OnRename', {}, false, this.payLoad);
    }
    concatData = (res) => {
        // Not Needed
    };
    clearValue(event) {
        // Not Needed
    }
    onAPICallback(data) {
        // const field = this.customKey ? { ...this.fieldData, ...{ 'response_api_key': this.customKey } } : this.fieldData;
        const field = this.fieldData;
        this.getDynamicLabel(data);
        const apiData = this.setApiCallBackDataUtil.setApiCallBackData(field, data);
        if (apiData !== null) {
            this.hasUploadedData = true;
            if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                this.updateAttachmentAppData(true);
            }
            this.setAttachmentData(apiData);
            this.updateAttachments('', this.html_id, apiData);
            // this.updateFieldData(this.files.length ? this.files : {});
        }
    }
    async checkMetaData() {
        return new Promise((resolve) => {
            if (this.metadataFields) {
                if (Object.keys(this.metadataFields).length === 0) {
                    for (const mField of this.metaFields) {
                        const metaKey = mField.additional_parameters.find((i) => {
                            return i.parameter_type === 'metadata_key';
                        });
                        if (metaKey && metaKey.value) {
                            const keyValue = metaKey.value.split('|');
                            const key = keyValue[0];
                            const label = (keyValue.length === 2) ? keyValue[1] : '';
                            this.metadataFields[key] = {
                                ...mField,
                                label
                            };
                        }
                    }
                }
                resolve(true);
            }
        });
    }
    async setAttachmentData(apiData) {
        if (this.fieldData.isAttachmentBlock) {
            await this.checkMetaData();
        }
        this.totalCount = 0;
        this.totalSize = 0;
        this.uploadedCount = 0;
        this.files = [];
        const f = [];
        for (const d of apiData) {
            const uploadedFileData = {
                rename: false,
                uploaded: true,
                attachmentId: d.attachmentId,
                url: d.attachmentUrl,
                attachmentPath: d.uploadAttachmentPath,
                file: new File([new ArrayBuffer(parseInt(d.attachmentSize))], d.attachmentName, { type: d.attachmentType }),
                custom: [],
                uId: Date.now().toString()
            };
            this.uploadedCount++;
            for (const metaItem of Object.keys(this.metadataFields)) {
                const { label, value } = this.getDynamicValue(metaItem, d[metaItem]);
                uploadedFileData.custom.push({
                    label: label,
                    key: metaItem,
                    value: value
                });
            }
            this.setTotalSizeAndCount(Number(d.attachmentSize), 1);
            // const response = await fetch(d.attachmentUrl);
            // const fileData = await response.blob();
            const metadata = {
                type: d.attachmentType
            };
            // uploadedFileData.file = new File([fileData], d.attachmentName, metadata);
            f.push(uploadedFileData);
        }
        if (this.isSingleUploader && f.length > 0) {
            this.hasUploadedData = true;
            if (this.checkValidateANDCheckMandatory({ mandatory: true, valid: false })) {
                this.updateAttachmentAppData(true);
            }
        }
        this.files = f;
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
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
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key))
                ];
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key)
                ];
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                this.uploadMore = true;
                this.totalCount = 0;
                this.totalSize = 0;
                // TODO Update
                let value = [];
                this.files = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.AdditionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.files = paramter.value;
                            value = paramter.value;
                        }
                        if (paramter.parameter_type === 'clickable_filename') {
                            this.clickable_filename = paramter.value === 'true' ? true : false;
                        }
                    }
                }
                this.updateAttachments(value.length > 0 ? 'upload' : '', this.html_id, value);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.textField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                return;
            }
        });
    }
    handleCustomFunction(getData) {
        const data = [];
        let uniqueIdValue = '';
        if (typeof getData == 'object') {
            Object.keys(getData).forEach((key, value) => {
                data.push(key);
            });
            uniqueIdValue = this.fieldData.unique_id;
        }
        if (data.includes(uniqueIdValue)) {
            this.files = Array.isArray(getData[uniqueIdValue]) ? getData[uniqueIdValue] : [getData[uniqueIdValue]];
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        // As Data is not stored so this is not required
    }
    setFieldStateOnStateChangeEvent(data) {
        // Not Needed
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
    }
    ngOnChanges(changes) {
        if (this.fieldData.isAttachmentBlock && this.metadataFields) {
            if (Object.keys(this.metadataFields).length === 0) {
                for (const mField of this.metaFields) {
                    const metaKey = mField.additional_parameters.find((i) => {
                        return i.parameter_type === 'metadata_key';
                    });
                    if (metaKey && metaKey.value) {
                        const keyValue = metaKey.value.split('|');
                        const key = keyValue[0];
                        const label = (keyValue.length === 2) ? keyValue[1] : '';
                        this.metadataFields[key] = {
                            ...mField,
                            label
                        };
                    }
                }
            }
        }
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
    /**
     * Validates the filename input to prevent extension editing
     * @param event The input event
     * @param selectedFile The file being renamed
     */
    onFilenameInput(event, selectedFile) {
        const input = event.target;
        const value = input.value;
        // Check if user is trying to add a file extension
        if (value.includes('.')) {
            // Remove any dots and everything after them
            const cleanValue = value.split('.')[0];
            selectedFile.newName = cleanValue;
            // Update the input value to reflect the cleaned version
            setTimeout(() => {
                input.value = cleanValue;
            }, 0);
        }
    }
    /**
     * Validates the filename on paste to prevent extension pasting
     * @param event The paste event
     * @param selectedFile The file being renamed
     */
    onFilenamePaste(event, selectedFile) {
        event.preventDefault();
        const pastedText = event.clipboardData?.getData('text') || '';
        // Remove any file extension from pasted text
        const cleanText = pastedText.includes('.') ? pastedText.split('.')[0] : pastedText;
        selectedFile.newName = cleanText;
    }
    static ɵfac = function CeeAttachmentsComponent_Factory(t) { return new (t || CeeAttachmentsComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.AppDataService), i0.ɵɵdirectiveInject(i4.ApiDataService), i0.ɵɵdirectiveInject(i5.WfeStepLoaderService), i0.ɵɵdirectiveInject(i6.MatDialog), i0.ɵɵdirectiveInject(i7.MatSnackBar), i0.ɵɵdirectiveInject(i8.HttpClient), i0.ɵɵdirectiveInject(i9.CeeApiService), i0.ɵɵdirectiveInject(i10.Router), i0.ɵɵdirectiveInject(i11.FileUploadService), i0.ɵɵdirectiveInject(i12.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i13.NgxImageCompressService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeAttachmentsComponent, selectors: [["app-cee-attachments"]], viewQuery: function CeeAttachmentsComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fileInput = _t.first);
        } }, hostBindings: function CeeAttachmentsComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("dragover", function CeeAttachmentsComponent_dragover_HostBindingHandler($event) { return ctx.onDragOver($event); })("dragenter", function CeeAttachmentsComponent_dragenter_HostBindingHandler($event) { return ctx.onDragEnter($event); })("dragend", function CeeAttachmentsComponent_dragend_HostBindingHandler($event) { return ctx.onDragEnd($event); })("dragleave", function CeeAttachmentsComponent_dragleave_HostBindingHandler($event) { return ctx.onDragLeave($event); })("drop", function CeeAttachmentsComponent_drop_HostBindingHandler($event) { return ctx.onDrop($event); })("paste", function CeeAttachmentsComponent_paste_HostBindingHandler($event) { return ctx.onPaste($event); }, false, i0.ɵɵresolveBody);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", rootData: "rootData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", metaFields: "metaFields" }, standalone: true, features: [i0.ɵɵProvidersFeature([NgxImageCompressService]), i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["placeHolder", ""], ["file", ""], ["files", ""], ["uploadedActions", ""], ["otherAction", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [1, "file-container"], ["class", "selected-files", 4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "single-file-uploader-container", "d-flex"], ["draggable", "true", 3, "ngClass", 4, "ngIf"], ["class", "input-group", 4, "ngIf"], ["class", "upload-btn", 3, "disabled", "click", 4, "ngIf"], ["draggable", "true", 3, "ngClass"], [1, "row"], [1, "col-md-12", "text-center"], [3, "click", 4, "ngIf"], ["class", "link-primary clickable custom-file-label", 3, "click", 4, "ngIf"], ["type", "file", 2, "display", "none", 3, "click", "change", "id", "disabled"], [3, "click"], [3, "click", "innerHTML"], [1, "link-primary", "clickable", "custom-file-label", 3, "click"], [1, "input-group"], [1, "custom-file"], ["type", "file", 1, "custom-file-input", 3, "click", "change", "id", "disabled"], [1, "custom-file-label", 3, "for"], [1, "upload-btn", 3, "click", "disabled"], [1, "file-upload-container", 3, "click"], ["type", "text", 2, "display", "none", 3, "id"], ["type", "file", 1, "custom-file-input", 2, "display", "none", 3, "click", "change", "id", "multiple", "disabled"], ["type", "file", 1, "custom-file-input", 3, "click", "change", "multiple", "id", "disabled"], [1, "selected-files"], [4, "ngFor", "ngForOf", "ngForTrackBy"], ["class", "selected-file", 4, "ngIf"], [1, "selected-file"], [1, "document-info-container", 3, "id"], [1, "file-icon-wrapper", 3, "id"], ["class", "custom-file-icon", 3, "alt", "src", 4, "ngIf"], [1, "file-name-wrapper", 3, "id"], [3, "class", "ngClass", "click", 4, "ngIf"], ["class", "file-rename-container", 4, "ngIf"], ["class", "metadata-container", 3, "id", 4, "ngIf"], [1, "action-buttons-container", 3, "id"], [4, "ngIf", "ngIfElse"], [1, "custom-file-icon", 3, "alt", "src"], [3, "click", "ngClass"], [1, "file-rename-container"], ["type", "text", "placeholder", "Enter filename", "title", "Enter filename without extension", 3, "ngModelChange", "input", "paste", "ngModel"], ["title", "File extension cannot be changed", 1, "file-extension-readonly"], [1, "metadata-container", 3, "id"], [1, "attachment-meta-item"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], ["max", "100", "min", "0", 3, "value", 4, "ngIf"], ["class", "btn btn-outline-secondary clear", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["class", "btn btn-outline-secondary upload", "type", "button", 3, "disabled", "click", 4, "ngIf"], ["max", "100", "min", "0", 3, "value"], ["type", "button", 1, "btn", "btn-outline-secondary", "clear", 3, "click", "disabled"], ["type", "button", 1, "btn", "btn-outline-secondary", "upload", 3, "click", "disabled"], ["type", "button", 3, "class", "click", 4, "ngIf"], ["type", "button", 3, "click"], ["max", "100", "min", " 0", 3, "value", 4, "ngIf"], ["max", "100", "min", " 0", 3, "value"], [1, "add-more"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeAttachmentsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeAttachmentsComponent_div_0_Template, 13, 7, "div", 5);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, NgStyle, CommonModule, i14.NgClass, i14.NgForOf, i14.NgIf, TooltipModule, i15.TooltipDirective, FormsModule, i16.DefaultValueAccessor, i16.NgControlStatus, i16.NgModel], styles: ["@charset \"UTF-8\";.file-rename-container[_ngcontent-%COMP%]{display:flex;align-items:center;gap:.25rem}.file-rename-container[_ngcontent-%COMP%]   .selected-file-name[_ngcontent-%COMP%]{flex:1;border:1px solid #ced4da;padding:.375rem .75rem;border-radius:.25rem;font-size:.875rem}.file-rename-container[_ngcontent-%COMP%]   .selected-file-name[_ngcontent-%COMP%]:focus{outline:none;border-color:#80bdff;box-shadow:0 0 0 .2rem #007bff40}.file-rename-container[_ngcontent-%COMP%]   .file-extension-readonly[_ngcontent-%COMP%]{color:#6c757d;font-size:.875rem;font-weight:500;padding:.375rem .5rem;background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:.25rem;-webkit-user-select:none;user-select:none;cursor:not-allowed;position:relative}.file-rename-container[_ngcontent-%COMP%]   .file-extension-readonly[_ngcontent-%COMP%]:before{content:\"\\1f512\";margin-right:.25rem;font-size:.75rem}.file-rename-container[_ngcontent-%COMP%]   .file-extension-readonly[_ngcontent-%COMP%]:hover{background-color:#e9ecef}.selected-file[_ngcontent-%COMP%]   .file-rename-container[_ngcontent-%COMP%], .document-info-container[_ngcontent-%COMP%]   .file-rename-container[_ngcontent-%COMP%]{width:100%}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeAttachmentsComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-attachments', standalone: true, imports: [MatTooltipModule, NgStyle, CommonModule, TooltipModule, FormsModule], providers: [NgxImageCompressService], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!='' && isCameraMode == false\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n                <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"fieldData.field_label!='' && files.length > 0 && isCameraMode == true\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\" >{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n                <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            </ng-container>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"form-field\">            \r\n            <ng-container *ngIf=\"!isCameraInput && !isCameraMode\">\r\n                <ng-container *ngIf=\"!isListView && isSingleUploader\">\r\n                    <div class=\"single-file-uploader-container d-flex\">\r\n                        <div *ngIf=\"dragAreaClass == 'dragarea' || dragAreaClass == 'droparea'\" draggable=\"true\" ngClass=\"{{dragAreaClass}}\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <div *ngIf=\"isFieldLableHTML\" (click)=\"file.click()\">\r\n                                        <div (click)=\"onAnchorClick($event)\" [innerHTML]=\"fieldLable\"></div>\r\n                                    </div>\r\n                                    <div *ngIf=\"!isFieldLableHTML\">{{fieldLable}}</div>\r\n                                    <label (click)=\"file.click()\" class=\"link-primary clickable custom-file-label\" *ngIf=\"(uploadMode == 'all' || uploadMode == '') && !isFieldLableHTML\">\r\n                                        {{ selectFileText  }}\r\n                                    </label>\r\n                                    <input type=\"file\"\r\n                                        #file\r\n                                        [id]=\"html_id\"\r\n                                        (click)=\"checkValidation($event)\" \r\n                                        (change)=\"handleFileInput($event, $event.target.files)\" \r\n                                        [disabled]=\"!isEditable\" \r\n                                        [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Select a file for ' + fieldData.field_label\"\r\n                                        style=\"display:none\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"dragAreaClass != 'dragarea' && dragAreaClass != 'droparea'\" class=\"input-group\">\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"file\" class=\"custom-file-input\" [id]=\"html_id\" (click)=\"checkValidation($event)\" (change)=\"handleFileInput($event, $event.target.files)\" [disabled]=\"!isEditable\" [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Select a file for ' + fieldData.field_label\">\r\n                                <label class=\"custom-file-label\" [for]=\"html_id\">{{ selectFileText  }}</label>\r\n                            </div>\r\n                        </div>\r\n                        <button *ngIf=\"!autoUpload\" class=\"upload-btn\" [disabled]=\"!isEditable\" (click)=\"singleFileUploadAction();\">{{ files.length > 0 ? 'Replace' : 'Upload' }}</button>\r\n                    </div>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!isListView && !isSingleUploader\">\r\n                    <div class=\"file-upload-container\"  (click) = 'handleClick(files)'>\r\n                        <input type=\"text\" #files [id]=\"html_id\" style=\"display:none\"/>\r\n                        <div *ngIf=\"dragAreaClass == 'dragarea' || dragAreaClass == 'droparea'\" draggable=\"true\" ngClass=\"{{dragAreaClass}}\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col-md-12 text-center\">\r\n                                    <div *ngIf=\"isFieldLableHTML\" (click)=\"file.click()\">\r\n                                        <div (click)=\"onAnchorClick($event)\" [innerHTML]=\"fieldLable\"></div>\r\n                                    </div>\r\n                                    <div *ngIf=\"!isFieldLableHTML\">{{fieldLable}}</div>                                    \r\n                                    <label (click)=\"file.click()\" class=\"link-primary clickable custom-file-label\" *ngIf=\"(uploadMode == 'all' || uploadMode == '') && !isFieldLableHTML\">\r\n                                        {{ selectFileText  }}\r\n                                    </label>\r\n                                    <input type=\"file\"\r\n                                        #file\r\n                                        [id]=\"html_id\"\r\n                                        [multiple]=\"isMultiple\"\r\n                                        class=\"custom-file-input\"\r\n                                        (click)=\"checkValidation($event)\" \r\n                                        (change)=\"handleFileInput($event, $event.target.files)\" \r\n                                        [disabled]=\"!isEditable\" \r\n                                        [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Select a file for ' + fieldData.field_label\"\r\n                                        style=\"display:none\" />\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div *ngIf=\"dragAreaClass != 'dragarea' && dragAreaClass != 'droparea'\" class=\"input-group\">\r\n                            <div class=\"custom-file\">\r\n                                <input type=\"file\" [multiple]=\"isMultiple\" class=\"custom-file-input\" [id]=\"html_id\" (click)=\"checkValidation($event)\" (change)=\"handleFileInput($event, $event.target.files)\" [disabled]=\"!isEditable\" [attr.aria-label]=\"AdditionalParameter['Aria-Label'] ? AdditionalParameter['Aria-Label'] : 'Select a file for ' + fieldData.field_label\">\r\n                                <label class=\"custom-file-label\" [for]=\"html_id\">{{ selectFileText  }}</label>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <div class=\"file-container\">\r\n                <div class=\"selected-files\" *ngIf=\"files.length > 0; else placeHolder\">\r\n                    <ng-container *ngFor=\"let selectedFile of files; let i=index trackBy: trackByFile\">\r\n\r\n                        <!-- Restructured layout for attachment blocks -->\r\n                        <div class=\"selected-file\" *ngIf=\"(!isSingleUploader || (isSingleUploader && selectedFile.uploaded)) && fieldData.isAttachmentBlock\">\r\n                            \r\n                            <!-- Document Info Container -->\r\n                            <div [id]=\"'document-info-' + fieldData.unique_id + '-' + i\" class=\"document-info-container\">\r\n                                <!-- File Icon -->\r\n                                <div [id]=\"'file-icon-' + fieldData.unique_id + '-' + i\" class=\"file-icon-wrapper\">\r\n                                    <img class=\"custom-file-icon\" \r\n                                         alt=\"Custom File Icon for {{selectedFile.file.type}}\" \r\n                                         *ngIf=\"fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].iconImage\" \r\n                                         [src]=\"fileUploads[selectedFile.file.type].iconImage\" />\r\n                                </div>\r\n                                \r\n                                <!-- File Name -->\r\n                                <div [id]=\"'file-name-' + fieldData.unique_id + '-' + i\" class=\"file-name-wrapper\">\r\n                                    <span *ngIf=\"!selectedFile.rename\" \r\n                                          class=\"selected-file-name selected-file-name-{{i}}\"\r\n                                          (click)=\"handleAction(selectedFile, i, 'preview')\"\r\n                                          [ngClass]=\"{ 'clickable': clickable_filename }\">\r\n                                        {{selectedFile.file.name}}\r\n                                    </span>\r\n                                    <div *ngIf=\"selectedFile.rename\" class=\"file-rename-container\">\r\n                                        <input class=\"selected-file-name selected-file-name-{{i}}\" \r\n                                               type=\"text\" \r\n                                               [(ngModel)]=\"selectedFile.newName\"\r\n                                               (input)=\"onFilenameInput($event, selectedFile)\"\r\n                                               (paste)=\"onFilenamePaste($event, selectedFile)\"\r\n                                               placeholder=\"Enter filename\"\r\n                                               title=\"Enter filename without extension\">\r\n                                        <span class=\"file-extension-readonly\" \r\n                                              title=\"File extension cannot be changed\">{{selectedFile.originalExtension}}</span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Metadata Container -->\r\n                            <div [id]=\"'metadata-' + fieldData.unique_id + '-' + i\" class=\"metadata-container\" *ngIf=\"selectedFile.custom && selectedFile.custom.length > 0\">\r\n                                <ng-container *ngFor=\"let metaItem of selectedFile.custom\">\r\n                                    <div [attr.data-title]=\"metaItem.key\" class=\"attachment-meta-item\">\r\n                                        <label *ngIf=\"metaItem.label\" [innerHTML]=\"metaItem.label\"></label>\r\n                                        <span [innerHTML]=\"metaItem.value\"></span>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n\r\n                            <!-- Action Buttons Container -->\r\n                            <div [id]=\"'action-buttons-' + fieldData.unique_id + '-' + i\" class=\"action-buttons-container\">\r\n                                <!-- Upload Progress or Clear/Upload buttons for non-uploaded files -->\r\n                                <ng-container *ngIf=\"!selectedFile.uploaded; else uploadedActions\">\r\n                                    <progress *ngIf=\"selectedFile.progress\" [value]=\"selectedFile.progress\" max=\"100\" min=\"0\"> {{selectedFile.progress}}% </progress>\r\n                                    <button *ngIf=\"!selectedFile.progress && !autoUpload\" \r\n                                            class=\"btn btn-outline-secondary clear\" \r\n                                            type=\"button\" \r\n                                            [disabled]=\"!isEditable\" \r\n                                            (click)=\"action(selectedFile, i, 'clear');\">Clear</button>\r\n                                    <button *ngIf=\"!selectedFile.progress && !autoUpload\" \r\n                                            class=\"btn btn-outline-secondary upload\" \r\n                                            type=\"button\" \r\n                                            [disabled]=\"!isEditable\" \r\n                                            (click)=\"action(selectedFile, i, 'upload');\">Upload</button>\r\n                                </ng-container>\r\n                                \r\n                                <!-- Action buttons for uploaded files -->\r\n                                <ng-template #uploadedActions>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-reset selected-file-reset-{{i}} btn btn-info\" \r\n                                            *ngIf=\"isEditable && !isListView && selectedFile.rename\" \r\n                                            (click)=\"action(selectedFile, i, 'reset')\">\r\n                                        {{(AdditionalParameter['reset_label']) ? AdditionalParameter['CEE_reset_label'] : 'Reset'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-update selected-file-update-{{i}} btn btn-success\" \r\n                                            *ngIf=\"isEditable && !isListView && selectedFile.rename\" \r\n                                            (click)=\"action(selectedFile, i, 'update')\">\r\n                                        {{(AdditionalParameter['CEE_update_label']) ? AdditionalParameter['CEE_update_label'] : 'Update'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-rename selected-file-rename-{{i}} btn btn-danger\" \r\n                                            *ngIf=\"isEditable && !isListView && !selectedFile.rename\" \r\n                                            (click)=\"action(selectedFile, i, 'rename')\">\r\n                                        {{(AdditionalParameter['CEE_rename_label']) ? AdditionalParameter['CEE_rename_label'] : 'Edit'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-remove selected-file-remove-{{i}} btn btn-danger\" \r\n                                            *ngIf=\"isEditable && !isListView\" \r\n                                            (click)=\"action(selectedFile, i, 'remove')\">\r\n                                        {{(AdditionalParameter['remove_label']) ? AdditionalParameter['remove_label'] : 'Remove'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-preview selected-file-preview-{{i}} btn btn-success\" \r\n                                            *ngIf=\"isListView || (fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].preview)\" \r\n                                            (click)=\"action(selectedFile, i, 'preview')\">\r\n                                        {{(AdditionalParameter['preview_label']) ? AdditionalParameter['preview_label'] : 'Preview'}}\r\n                                    </button>\r\n                                    <button type=\"button\" \r\n                                            class=\"selected-file-download selected-file-download-{{i}} btn btn-primary\" \r\n                                            *ngIf=\"isListView || (fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].canDownload)\" \r\n                                            (click)=\"action(selectedFile, i, 'download')\">\r\n                                        {{(AdditionalParameter['download_label']) ? AdditionalParameter['download_label'] : 'Download'}}\r\n                                    </button>\r\n                                </ng-template>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <!-- Original layout for non-attachment blocks -->\r\n                        <div class=\"selected-file\" *ngIf=\"(!isSingleUploader || (isSingleUploader && selectedFile.uploaded)) && !fieldData.isAttachmentBlock\">\r\n                            <!-- <span *ngIf=\"!selectedFile.rename\" class=\"selected-file-name selected-file-name-{{i}}\">{{selectedFile.file.name}}</span> -->\r\n                            <span *ngIf=\"!selectedFile.rename\" class=\"selected-file-name selected-file-name-{{i}}\"\r\n                                (click)=\"handleAction(selectedFile, i, 'preview')\"\r\n                                [ngClass]=\"{ 'clickable': clickable_filename }\">{{selectedFile.file.name}}</span>\r\n                            <div *ngIf=\"selectedFile.rename\" class=\"file-rename-container\">\r\n                                <input class=\"selected-file-name selected-file-name-{{i}}\" \r\n                                       type=\"text\" \r\n                                       [(ngModel)]=\"selectedFile.newName\"\r\n                                       (input)=\"onFilenameInput($event, selectedFile)\"\r\n                                       (paste)=\"onFilenamePaste($event, selectedFile)\"\r\n                                       placeholder=\"Enter filename\"\r\n                                       title=\"Enter filename without extension\">\r\n                                <span class=\"file-extension-readonly\" \r\n                                      title=\"File extension cannot be changed\">{{selectedFile.originalExtension}}</span>\r\n                            </div>\r\n                            <ng-container *ngFor=\"let metaItem of selectedFile.custom\">\r\n                                <div [attr.data-title]=\"metaItem.key\" class=\"attachment-meta-item\">\r\n                                    <label *ngIf=\"metaItem.label\" [innerHTML]=\"metaItem.label\"></label>\r\n                                    <span [innerHTML]=\"metaItem.value\"></span>\r\n                                </div>\r\n                            </ng-container>\r\n                            <img class=\"custom-file-icon\" alt=\"Custom File Icon for {{selectedFile.file.type}}\" *ngIf=\"fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].iconImage\" [src]=\"fileUploads[selectedFile.file.type].iconImage\" />\r\n                            <ng-container *ngIf=\"!selectedFile.uploaded; else otherAction\">\r\n                                <progress *ngIf=\"selectedFile.progress\" [value]=\"selectedFile.progress\" max=\"100\" min=\" 0\"> {{selectedFile.progress}}% </progress>\r\n                                <button *ngIf=\"!selectedFile.progress && !autoUpload\" class=\"btn btn-outline-secondary clear\" type=\"button\" [disabled]=\"!isEditable\" (click)=\"action(selectedFile, i, 'clear');\">Clear</button>\r\n                                <button *ngIf=\"!selectedFile.progress && !autoUpload\" class=\"btn btn-outline-secondary upload\" type=\"button\" [disabled]=\"!isEditable\" (click)=\"action(selectedFile, i, 'upload');\">Upload</button>\r\n                            </ng-container>\r\n                            <ng-template #otherAction>\r\n                                <button type=\"button\" class=\"selected-file-reset selected-file-reset-{{i}} btn btn-info\" *ngIf=\"isEditable && !isListView && selectedFile.rename\" (click)=\"action(selectedFile, i, 'reset')\">{{(AdditionalParameter['reset_label']) ? AdditionalParameter['CEE_reset_label'] : 'Reset'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-update selected-file-update-{{i}} btn btn-success\" *ngIf=\"isEditable && !isListView && selectedFile.rename\" (click)=\"action(selectedFile, i, 'update')\">{{(AdditionalParameter['CEE_update_label']) ? AdditionalParameter['CEE_update_label'] : 'Update'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-rename selected-file-rename-{{i}} btn btn-danger\" *ngIf=\"isEditable && !isListView && !selectedFile.rename\" (click)=\"action(selectedFile, i, 'rename')\">{{(AdditionalParameter['CEE_rename_label']) ? AdditionalParameter['CEE_rename_label'] : 'Edit'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-remove selected-file-remove-{{i}} btn btn-danger\" *ngIf=\"isEditable && !isListView\" (click)=\"action(selectedFile, i, 'remove')\">{{(AdditionalParameter['remove_label']) ? AdditionalParameter['remove_label'] : 'Remove'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-preview selected-file-preview-{{i}} btn btn-success\" *ngIf=\"isListView || (fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].preview)\" (click)=\"action(selectedFile, i, 'preview')\">{{(AdditionalParameter['preview_label']) ? AdditionalParameter['preview_label'] : 'Preview'}}</button>\r\n                                <button type=\"button\" class=\"selected-file-download selected-file-download-{{i}} btn btn-primary\" *ngIf=\"isListView || (fileUploads[selectedFile.file.type] && fileUploads[selectedFile.file.type].canDownload)\" (click)=\"action(selectedFile, i, 'download')\">{{(AdditionalParameter['download_label']) ? AdditionalParameter['download_label'] : 'Download'}}</button>\r\n                            </ng-template>\r\n                        </div>\r\n                    </ng-container>\r\n                </div>\r\n                <ng-template #placeHolder>\r\n                    <div class=\"add-more\">\r\n                        {{fieldData.placeholder_text}}\r\n                    </div>\r\n                </ng-template>\r\n            </div>\r\n            <ng-container *ngFor=\"let message of messages\">\r\n                <div class=\"error-message-wrapper\" *ngIf=\"showErrorOnNext\">\r\n                    <p *ngIf=\"isMandatory && message.type == 'Mandatory' && files.length <= 0\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                        {{returnMessageData(message.code).message_text}}</p>\r\n                </div>\r\n                <div class=\"error-message-wrapper\" *ngIf=\"errorType\">\r\n                    <p *ngIf=\"message.type == errorType\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                        {{returnMessageData(message.code).message_text}}</p>\r\n                </div>\r\n            </ng-container>\r\n            </div>\r\n    </div>\r\n</div>\r\n", styles: ["@charset \"UTF-8\";.file-rename-container{display:flex;align-items:center;gap:.25rem}.file-rename-container .selected-file-name{flex:1;border:1px solid #ced4da;padding:.375rem .75rem;border-radius:.25rem;font-size:.875rem}.file-rename-container .selected-file-name:focus{outline:none;border-color:#80bdff;box-shadow:0 0 0 .2rem #007bff40}.file-rename-container .file-extension-readonly{color:#6c757d;font-size:.875rem;font-weight:500;padding:.375rem .5rem;background-color:#f8f9fa;border:1px solid #dee2e6;border-radius:.25rem;-webkit-user-select:none;user-select:none;cursor:not-allowed;position:relative}.file-rename-container .file-extension-readonly:before{content:\"\\1f512\";margin-right:.25rem;font-size:.75rem}.file-rename-container .file-extension-readonly:hover{background-color:#e9ecef}.selected-file .file-rename-container,.document-info-container .file-rename-container{width:100%}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.AppDataService }, { type: i4.ApiDataService }, { type: i5.WfeStepLoaderService }, { type: i6.MatDialog }, { type: i7.MatSnackBar }, { type: i8.HttpClient }, { type: i9.CeeApiService }, { type: i10.Router }, { type: i11.FileUploadService }, { type: i12.CEEInternalEmitterService }, { type: i13.NgxImageCompressService }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], metaFields: [{
            type: Input
        }], fileInput: [{
            type: ViewChild,
            args: ['file']
        }], onDragOver: [{
            type: HostListener,
            args: ["dragover", ["$event"]]
        }], onDragEnter: [{
            type: HostListener,
            args: ["dragenter", ["$event"]]
        }], onDragEnd: [{
            type: HostListener,
            args: ["dragend", ["$event"]]
        }], onDragLeave: [{
            type: HostListener,
            args: ["dragleave", ["$event"]]
        }], onDrop: [{
            type: HostListener,
            args: ["drop", ["$event"]]
        }], onPaste: [{
            type: HostListener,
            args: ['body:paste', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeAttachmentsComponent, { className: "CeeAttachmentsComponent", filePath: "lib\\field-components\\cee-attachments\\cee-attachments.component.ts", lineNumber: 72 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWF0dGFjaG1lbnRzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1hdHRhY2htZW50cy9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWF0dGFjaG1lbnRzL2NlZS1hdHRhY2htZW50cy5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQSxPQUFPLEVBQUUsU0FBUyxFQUEwQixZQUFZLEVBQVUsS0FBSyxFQUErQyxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFLdkosT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0sb0RBQW9ELENBQUM7QUFTekYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sTUFBTSxNQUFNLFFBQVEsQ0FBQztBQUM1QixPQUFPLEVBQUUsSUFBSSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDdEMsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxPQUFPLENBQUM7QUFDOUIsT0FBTyxFQUFtQix1QkFBdUIsRUFBRSxNQUFN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b250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgZm9yd2FyZFJlZiwgSG9zdExpc3RlbmVyLCBJbmplY3QsIElucHV0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSwgT25Jbml0LCBTaW1wbGVDaGFuZ2VzLCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FsZXJ0LW1vZGFsL2FsZXJ0LW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maWxlLXVwbG9hZC1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gJ21vbWVudCc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBqc1BERiB9IGZyb20gJ2pzcGRmJztcclxuaW1wb3J0IHsgRE9DX09SSUVOVEFUSU9OLCBOZ3hJbWFnZUNvbXByZXNzU2VydmljZSB9IGZyb20gJ25neC1pbWFnZS1jb21wcmVzcyc7XHJcbmltcG9ydCBoZWljMmFueSBmcm9tIFwiaGVpYzJhbnlcIjtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVEYXRhIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbiAgICB0eXBlOiBzdHJpbmc7XHJcbiAgICBpY29uSW1hZ2U6IHN0cmluZztcclxuICAgIHNpemU6IG51bWJlcjtcclxuICAgIGNvdW50OiBudW1iZXI7XHJcbiAgICBwcmV2aWV3OiBib29sZWFuO1xyXG4gICAgY2FuRG93bmxvYWQ6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGVQYXlsb2FkIHtcclxuICAgIHR5cGU6IHN0cmluZztcclxuICAgIGZpbGVEYXRhOiBhbnk7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUZpbGUge1xyXG4gICAgcmVuYW1lOiBib29sZWFuO1xyXG4gICAgdXBsb2FkZWQ6IGJvb2xlYW47XHJcbiAgICBwcm9ncmVzcz86IG51bWJlcjtcclxuICAgIG5ld05hbWU/OiBzdHJpbmc7XHJcbiAgICBvcmlnaW5hbEV4dGVuc2lvbj86IHN0cmluZzsgLy8gU3RvcmUgdGhlIG9yaWdpbmFsIGZpbGUgZXh0ZW5zaW9uXHJcbiAgICB1SWQ6IHN0cmluZztcclxuICAgIGF0dGFjaG1lbnRJZDogc3RyaW5nO1xyXG4gICAgYXR0YWNobWVudFBhdGg6IHN0cmluZztcclxuICAgIHVybDogc3RyaW5nO1xyXG4gICAgZmlsZTogRmlsZTtcclxuICAgIGN1c3RvbTogQXJyYXk8YW55PjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJQ29tcHJlc3NJbWFnZSB7XHJcbiAgICBvcmllbnRhdGlvbjogRE9DX09SSUVOVEFUSU9OLFxyXG4gICAgcmF0aW8/OiBudW1iZXIsXHJcbiAgICBxdWFsaXR5PzogbnVtYmVyLFxyXG4gICAgbWF4V2lkdGg/OiBudW1iZXIsXHJcbiAgICBtYXhIZWlnaHQ/OiBudW1iZXJcclxufVxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtYXR0YWNobWVudHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1hdHRhY2htZW50cy5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jZWUtYXR0YWNobWVudHMuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTWF0VG9vbHRpcE1vZHVsZSwgTmdTdHlsZSwgQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlLCBGb3Jtc01vZHVsZV0sXHJcbiAgICBwcm92aWRlcnM6IFtOZ3hJbWFnZUNvbXByZXNzU2VydmljZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVBdHRhY2htZW50c0NvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMsIE9uRGVzdHJveSB7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2aXNpYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtZXRhRmllbGRzOiBhbnkgPSBbXTtcclxuICAgIG1ldGFkYXRhRmllbGRzOiBhbnkgPSB7fTtcclxuICAgIGZpbGVVcGxvYWRzOiBhbnkgPSB7fTtcclxuICAgIGZpbGVzOiBBcnJheTxJRmlsZT4gPSBbXTtcclxuICAgIEFkZGl0aW9uYWxQYXJhbWV0ZXI6IGFueSA9IHt9O1xyXG4gICAgdXBsb2FkTW9yZSA9IHRydWU7XHJcbiAgICBhdXRvVXBsb2FkID0gZmFsc2U7XHJcbiAgICB1cGxvYWRlZENvdW50ID0gMDtcclxuICAgIHRvdGFsQ291bnQgPSAwO1xyXG4gICAgdG90YWxTaXplID0gMDtcclxuICAgIGh0bWxfaWQgPSAnJztcclxuICAgIEBWaWV3Q2hpbGQoJ2ZpbGUnKSBmaWxlSW5wdXQhOiBFbGVtZW50UmVmPEhUTUxJbnB1dEVsZW1lbnQ+O1xyXG4gICAgcGF5TG9hZDogSUZpbGVQYXlsb2FkID0ge1xyXG4gICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICBmaWxlRGF0YToge31cclxuICAgIH07XHJcbiAgICBmaWVsZExhYmVscyA9IFtdO1xyXG4gICAgZXJyb3JUeXBlID0gJyc7IC8vIHNldCB0aGUgdHlwZSBvZiB0aGUgZXJyb3IgbWVzc2FnZSBlLmc6IGZpbGVfdHlwZSwgaW5kaXZpZHVhbF9maWxlX3NpemUsIHRvdGFsX2ZpbGVfc2l6ZVxyXG4gICAgY3VzdG9tS2V5ID0gJyc7XHJcbiAgICBwcmVEZWZpbmVNaW1lVHlwZTogYW55ID0ge1xyXG4gICAgICAgIGNzdjogJ3RleHQvY3N2JyxcclxuICAgICAgICBoZWljOiAnaW1hZ2UvaGVpYycsXHJcbiAgICAgICAgaGVpZjogJ2ltYWdlL2hlaWYnLFxyXG4gICAgfTtcclxuICAgIHByZURlZmluZU1pbWVUeXBlQ2hlY2s6IGFueSA9IHtcclxuICAgICAgICBjc3Y6IFsnJywgJ2FwcGxpY2F0aW9uL3ZuZC5tcy1leGNlbCddLFxyXG4gICAgICAgIGhlaWM6IFsnJywgJ2ltYWdlL2hlaWMnXSxcclxuICAgICAgICBoZWlmOiBbJycsICdpbWFnZS9oZWlmJ10sXHJcbiAgICB9O1xyXG4gICAgZHJhZ0FyZWFDbGFzczogc3RyaW5nID0gJ3BsYWluLXVwbG9hZCc7XHJcbiAgICB1cGxvYWRNb2RlOiBhbnkgPSAnJztcclxuICAgIGZpZWxkTGFibGU6IGFueSA9ICcnO1xyXG4gICAgaXNGaWVsZExhYmxlSFRNTCA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBlbmNyeXB0ZWQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX0VuY3J5cHQnKSAmJlxyXG4gICAgICAgICh3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQ0VFX0VuY3J5cHRfVmFsdWVzJykgfHwgJycpLmluY2x1ZGVzKCd1c2VyX2F0dGFjaG1lbnRzJykgPyB0cnVlIDogZmFsc2U7XHJcblxyXG4gICAgLy8gZmlsZVVwbG9hZEVtaXR0ZXI6IFN1YnNjcmlwdGlvbjtcclxuICAgIHNlbGVjdEZpbGVUZXh0OiBhbnkgPSAnJztcclxuICAgIGlzU2luZ2xlVXBsb2FkZXIgPSBmYWxzZTtcclxuICAgIGhhc1VwbG9hZGVkRGF0YSA9IGZhbHNlO1xyXG4gICAgc2luZ2xlVXBsb2FkRmlsZURhdGE6IElGaWxlO1xyXG4gICAgaXNBdHRhY2htZW50SW5Nb2RhbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNNdWx0aXBsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNDYW1lcmFNb2RlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBpc0NhbWVyYUlucHV0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBlcnJvck1zZ0JveDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNSZW5hbWU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByZXZpZXdEaXJlY3RseTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJldmlld0RpcmVjdGx5SW5OZXdUYWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNsaWNrYWJsZV9maWxlbmFtZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcmJQb3NpdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBmaWxlVXBsb2FkU2VydmljZTogRmlsZVVwbG9hZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZWVJbnRlcm5hbEVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBpbWFnZUNvbXByZXNzOiBOZ3hJbWFnZUNvbXByZXNzU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGNlZUludGVybmFsRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLCBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyLCBmaWxlVXBsb2FkU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsnZW1pdEZvckVtcHR5U2Vzc2lvbl8nICsgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0Rm9yRW1wdHlTZXNzaW9uLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uRW1wdHlTZXNzaW9uKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuXHJcbiAgICAgICAgLy8gRm9yIHJlcGVhdGFibGUgYmxvY2ssIGlmIHJvd0RhdGEgaXMgcHJlc2VudCwgc2V0IHRoZSBwb3NpdGlvblxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5yYlBvc2l0aW9uID0gdGhpcy5yb3dEYXRhLnBvc2l0aW9uID8gdGhpcy5yb3dEYXRhLnBvc2l0aW9uIDogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy9ASG9zdExpc3RlbmVyKCd3aW5kb3c6YmVmb3JldW5sb2FkJylcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3Rba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB0cmFja0J5RmlsZShpbmRleDogbnVtYmVyLCBmaWxlOiBhbnkpOiBhbnkge1xyXG4gICAgICAgIHJldHVybiBmaWxlPy5pZCB8fCBmaWxlPy5uYW1lIHx8IGluZGV4OyAvLyBzb21ldGhpbmcgdW5pcXVlbHkgaWRlbnRpZnlpbmcgdGhlIGZpbGVcclxuICAgIH1cclxuICAgIGNsZWFyRmlsZUlucHV0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFJlc2V0IHRoZSBmaWxlIGlucHV0IHZhbHVlXHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZUlucHV0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZUlucHV0Lm5hdGl2ZUVsZW1lbnQudmFsdWUgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBASG9zdExpc3RlbmVyKFwiZHJhZ292ZXJcIiwgW1wiJGV2ZW50XCJdKSBvbkRyYWdPdmVyKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICB0aGlzLmRyYWdBcmVhQ2xhc3MgPSBcImRyb3BhcmVhXCI7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIEBIb3N0TGlzdGVuZXIoXCJkcmFnZW50ZXJcIiwgW1wiJGV2ZW50XCJdKSBvbkRyYWdFbnRlcihldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kcmFnQXJlYUNsYXNzID0gXCJkcm9wYXJlYVwiO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBASG9zdExpc3RlbmVyKFwiZHJhZ2VuZFwiLCBbXCIkZXZlbnRcIl0pIG9uRHJhZ0VuZChldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5kcmFnQXJlYUNsYXNzID0gXCJkcmFnYXJlYVwiO1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9XHJcbiAgICBASG9zdExpc3RlbmVyKFwiZHJhZ2xlYXZlXCIsIFtcIiRldmVudFwiXSkgb25EcmFnTGVhdmUoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZHJhZ0FyZWFDbGFzcyA9IFwiZHJhZ2FyZWFcIjtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgQEhvc3RMaXN0ZW5lcihcImRyb3BcIiwgW1wiJGV2ZW50XCJdKSBvbkRyb3AoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIGlmICh0aGlzLnVwbG9hZE1vZGUgPT0gXCJhbGxcIiB8fCB0aGlzLnVwbG9hZE1vZGUgPT0gXCJkcmFnX2Ryb3BcIikge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV2ZW50OlwiLGV2ZW50KVxyXG4gICAgICAgICAgICB0aGlzLmRyYWdBcmVhQ2xhc3MgPSBcImRyYWdhcmVhXCI7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyAgIGxldCBmaWxlczogRmlsZUxpc3QgPSBldmVudC5kYXRhVHJhbnNmZXIuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVJbnB1dChldmVudCwgZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBASG9zdExpc3RlbmVyKCdib2R5OnBhc3RlJywgWyckZXZlbnQnXSkgb25QYXN0ZShldmVudDogQ2xpcGJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAodGhpcy51cGxvYWRNb2RlID09IFwiYWxsXCIgfHwgdGhpcy51cGxvYWRNb2RlID09IFwiY29weV9wYXN0ZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgncGFzdGVpZCcpO1xyXG4gICAgICAgICAgICBpZiAoZGF0YSAmJiBkYXRhICE9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJwYXN0ZSBpZCBub3QgbWF0Y2hcIiwgZGF0YSwgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkKVxyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3Bhc3RlaWQnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChldmVudCAmJiBldmVudC5jbGlwYm9hcmREYXRhICYmIGV2ZW50LmNsaXBib2FyZERhdGEuZmlsZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBPYmplY3Qua2V5cyhldmVudC5jbGlwYm9hcmREYXRhLmZpbGVzKS5tYXAoKGtleSkgPT4gZXZlbnQuY2xpcGJvYXJkRGF0YS5maWxlc1trZXldKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZpbGVJbnB1dChldmVudCwgcmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ2xpY2soaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCBjbGlja2VkSWQgPSBpbnB1dC5pZDtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdDbGlja2VkIGVsZW1lbnQgSUQ6JywgY2xpY2tlZElkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFzdGVpZCcsIGNsaWNrZWRJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnZhcmlhYmxlT2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhcmlhYmxlT2JqZWN0W2tleV0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmplY3Rba2V5XS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGlmICh0aGlzLmZpbGVVcGxvYWRFbWl0dGVyKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZmlsZVVwbG9hZEVtaXR0ZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaGFuZGxlIGNsaWNrIGZyb20gaHRtbCBlbGVtZW50IGFuZCBvcGVuIGZpbGUgaW5wdXQgZGlhbG9nXHJcbiAgICBvbkFuY2hvckNsaWNrKGV2ZW50OiBNb3VzZUV2ZW50KSB7XHJcbiAgICAgICAgbGV0IHRhcmdldCA9IGV2ZW50LnRhcmdldCBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBpZiAodGFyZ2V0LnRhZ05hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2EnKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuaHRtbF9pZCA9IHRoaXMuZmllbGREYXRhLmh0bWxfaWQ7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfVVBMT0FEX01PREUnXSAmJiB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9VUExPQURfTU9ERSddICE9ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBsb2FkTW9kZSA9IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1VQTE9BRF9NT0RFJ107XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9VUExPQURfTU9ERV9TRUxFQ1RJT05fVEVYVCddICYmIHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1VQTE9BRF9NT0RFX1NFTEVDVElPTl9URVhUJ10gIT0gXCJcIikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmxlID0gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfVVBMT0FEX01PREVfU0VMRUNUSU9OX1RFWFQnXTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNGaWVsZExhYmxlSFRNTCA9IHRoaXMuaXNIVE1MKHRoaXMuZmllbGRMYWJsZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51cGxvYWRNb2RlLnRvTG93ZXJDYXNlKCkgPT0gJ2FsbCcgfHwgdGhpcy51cGxvYWRNb2RlLnRvTG93ZXJDYXNlKCkgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFibGUgPSAnRHJhZyAvIHBhc3RlIGZpbGVzIGhlcmUnO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnVwbG9hZE1vZGUudG9Mb3dlckNhc2UoKSA9PSAnY29weV9wYXN0ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFibGUgPSAncGFzdGUgZmlsZXMgaGVyZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMudXBsb2FkTW9kZS50b0xvd2VyQ2FzZSgpID09ICdkcmFnX2Ryb3AnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmxlID0gJ0RyYWcgZmlsZXMgaGVyZSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnY2xpY2thYmxlX2ZpbGVuYW1lJ10gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xpY2thYmxlX2ZpbGVuYW1lID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5kcmFnQXJlYUNsYXNzID0gKHRoaXMudXBsb2FkTW9kZS50b0xvd2VyQ2FzZSgpID09ICdhbGwnIHx8IHRoaXMudXBsb2FkTW9kZS50b0xvd2VyQ2FzZSgpID09ICdjb3B5X3Bhc3RlJyB8fCB0aGlzLnVwbG9hZE1vZGUudG9Mb3dlckNhc2UoKSA9PSAnZHJhZ19kcm9wJykgPyAnZHJhZ2FyZWEnIDogJ3BsYWluLXVwbG9hZCc7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLmRyYWdBcmVhQ2xhc3M6IFwiLHRoaXMuZHJhZ0FyZWFDbGFzcywgXCIgLS0gXCIsIHRoaXMudXBsb2FkTW9kZS50b0xvd2VyQ2FzZSgpKVxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hdHRhY2htZW50ICYmIHRoaXMuZmllbGREYXRhLmF0dGFjaG1lbnQubGVuZ3RoID09IDIgJiZcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEuYXR0YWNobWVudFsxXSAmJiB0aGlzLmZpZWxkRGF0YS5hdHRhY2htZW50WzFdID4gMSkge1xyXG4gICAgICAgICAgICB0aGlzLmlzTXVsdGlwbGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5pc1NpbmdsZVVwbG9hZGVyID0gKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnc2luZ2xlVXBsb2FkZXInXSA9PT0gXCJ0cnVlXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYXV0b1VwbG9hZCA9ICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0F1dG9VcGxvYWQnXSA9PT0gXCJ0cnVlXCIpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RmlsZVRleHQgPSAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydzZWxlY3RGaWxlVGV4dCddKSA/IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnc2VsZWN0RmlsZVRleHQnXSA6IFwiU2VsZWN0IGEgZmlsZVwiO1xyXG4gICAgICAgIHRoaXMuaXNBdHRhY2htZW50SW5Nb2RhbCA9ICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0F0dGFjaG1lbnRJbk1vZGFsJ10gJiYgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydBdHRhY2htZW50SW5Nb2RhbCddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnKSA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpLCBwb3NzaWJsZVZhbHVlXSBvZiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IHBvc3NpYmxlVmFsdWUuc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT0gNikge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqOiBJRmlsZURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGAke3RoaXMuZmllbGREYXRhLmh0bWxfaWR9LSR7aX1gLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IHZhbHVlc1swXSxcclxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2U6IHZhbHVlc1sxXSxcclxuICAgICAgICAgICAgICAgICAgICBzaXplOiBOdW1iZXIodmFsdWVzWzJdKSxcclxuICAgICAgICAgICAgICAgICAgICBjb3VudDogTnVtYmVyKHZhbHVlc1szXSksXHJcbiAgICAgICAgICAgICAgICAgICAgcHJldmlldzogdmFsdWVzWzRdID09ICd0cnVlJyxcclxuICAgICAgICAgICAgICAgICAgICBjYW5Eb3dubG9hZDogdmFsdWVzWzVdID09ICd0cnVlJ1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZVVwbG9hZHMgPSB7IC4uLnRoaXMuZmlsZVVwbG9hZHMsIC4uLnsgW29iai50eXBlXTogb2JqIH0gfTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFNvbWV0aGluZyBpcyB3cm9uZyBpbiB0aGUgY29uZmlndXJhdGlvbiBmb3IgJHtwb3NzaWJsZVZhbHVlfWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCB0aGUgZGVmYXVsdCBwYXlMb2FkXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5wYXlMb2FkLmZpbGVEYXRhLmFwaUtleSA9IHRoaXMuZmllbGREYXRhLmFwaV9rZXk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5wYXlMb2FkLmZpbGVEYXRhLmFwaUtleSA9IHRoaXMuZmllbGREYXRhLnJlcXVlc3RfYXBpX2tleTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGN1c3RvbSBrZXkgaWYgdGhlIGFwaSBrZXkgaXMgYmxhbmtcclxuICAgICAgICBpZiAoIXRoaXMucGF5TG9hZC5maWxlRGF0YS5hcGlLZXkpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXN0b21LZXkgPSAnRklMRV9VUExPQURfREFUQSc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvciB1cGxvYWQgc2V0IGF0dGFjaG1lbnQgcGF0aFxyXG4gICAgICAgIGlmICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXIuQXR0YWNobWVudFBhdGhuYW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMucGF5TG9hZC5maWxlRGF0YS5hdHRhY2htZW50UGF0aCA9IHRoaXMuZ2V0TmFtZSh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXIuQXR0YWNobWVudFBhdGhuYW1lLCAnJywgL1xceyguKj8pXFx9L2cpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc2V0IHRoZSBhdHRhY2htZW50IGRhdGEgb24gaW5pdFxyXG5cclxuICAgICAgICBpZiAoKCF0aGlzLnJvd0RhdGEgfHwgIXRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLnJvd0RhdGEudmFsdWUpKVxyXG4gICAgICAgICAgICAmJiB0aGlzLmZpZWxkVmFsdWUgJiYgdHlwZW9mIHRoaXMuZmllbGRWYWx1ZSAhPT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgUHJvbWlzZS5yZXNvbHZlKHRoaXMuc2V0QXR0YWNobWVudERhdGEodGhpcy5maWVsZFZhbHVlKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydTaG93UHJvZ3Jlc3MnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1Nob3dQcm9ncmVzcyddLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuaHR0cFByb2dyZXNzRW1pdHRlci5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICBodHRwUHJvZ3Jlc3MgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gdGhpcy5maWxlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpbGUudUlkID09PSBodHRwUHJvZ3Jlc3MudUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWxlLnByb2dyZXNzID0gaHR0cFByb2dyZXNzLnByb2dyZXNzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5yb3dEYXRhLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaGFzVXBsb2FkZWREYXRhID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzTGlzdFZpZXcgPSB0aGlzLnJvd0RhdGEuZnJvbUZpZWxkICYmIHRoaXMucm93RGF0YS5mcm9tRmllbGQgPT09ICdMaXN0JyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEF0dGFjaG1lbnREYXRhKHRoaXMucm93RGF0YS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRhY2htZW50cygnJywgdGhpcy5odG1sX2lkLCB0aGlzLnJvd0RhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvb3REYXRhICYmIHRoaXMucm9vdERhdGFbJ3JlcGVhdGFibGUtJyArIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF0gJiYgdGhpcy5yb290RGF0YVsncmVwZWF0YWJsZS0nICsgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXVt0aGlzLmh0bWxfaWRdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzID0gdGhpcy5yb290RGF0YVsncmVwZWF0YWJsZS0nICsgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXVt0aGlzLmh0bWxfaWRdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NhbWVyYUlkJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5pc0NhbWVyYU1vZGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ2FtZXJhSWQnXV0gPSAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ2FtZXJhTW9kZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0NhbWVyYUlucHV0ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBbdmFsXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkTW9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU9iaiA9IHZhbC5maWxlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZURhdGEgPSB0aGlzLmZpbGVVcGxvYWRzW2ZpbGVPYmoudHlwZV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9VcGxvYWQgPSB2YWwuYXV0b1VwbG9hZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsZURhdGEoZmlsZU9iaiwgZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1VwbG9hZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLmZpbGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gdGhpcy5maWxlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihzZWxlY3RlZEZpbGUsIGksICd1cGxvYWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydlZGl0b3JJZCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydlZGl0b3JJZCddXSA9ICh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBbdmFsXTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBsb2FkTW9yZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZU9iaiA9IHZhbC5maWxlO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZURhdGEgPSB0aGlzLmZpbGVVcGxvYWRzW2ZpbGVPYmoudHlwZV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLmF1dG9VcGxvYWQgPSB2YWwuYXV0b1VwbG9hZDtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsZURhdGEoZmlsZU9iaiwgZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXV0b1VwbG9hZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGkgPSB0aGlzLmZpbGVzLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRGaWxlID0gdGhpcy5maWxlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihzZWxlY3RlZEZpbGUsIGksICd1cGxvYWQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRm9yIFByZXZpZXdpbmcgdXNpbmcgU2lnbmVkIFVSTFxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoJ0NFRV9QcmV2aWV3V2l0aFVSTCcpKSB7XHJcbiAgICAgICAgICAgIHRoaXMucHJldmlld0RpcmVjdGx5ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfUHJldmlld1dpdGhVUkwnXSA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZvciBQcmV2aWV3aW5nIEZpbGUgaW4gTmV3IFRhYlxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoJ0NFRV9QcmV2aWV3X0luTmV3VGFiJykpIHtcclxuICAgICAgICAgICAgdGhpcy5wcmV2aWV3RGlyZWN0bHlJbk5ld1RhYiA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1ByZXZpZXdfSW5OZXdUYWInXSA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RHluYW1pY0xhYmVsKGRhdGE/KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsICYmIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdMYWJlbCA9IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwgIT0gbnVsbCAmJiB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCAhPT0gZXhpc3RpbmdMYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuXHJcbiAgICBvblNlc3Npb25EYXRhVXBkYXRlZCh2YWx1ZTogYW55LCBzdGF0ZTogYW55KTogdm9pZCB7IH1cclxuICAgIGNvbnZlcnRSZWFkYWJsZUNTVkZpbGUoZmlsZTogYW55KSB7XHJcbiAgICAgICAgY29uc3QgZXh0ID0gZmlsZS5uYW1lPy5zcGxpdCgnLicpLnBvcCgpPy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChmaWxlICYmIGZpbGUuc2l6ZSA+IDAgJiYgdGhpcy5wcmVEZWZpbmVNaW1lVHlwZVtleHRdICYmIHRoaXMucHJlRGVmaW5lTWltZVR5cGVDaGVja1tleHRdLmluY2x1ZGVzKGZpbGUudHlwZSkpIHtcclxuICAgICAgICAgICAgZmlsZSA9IG5ldyBGaWxlKFtmaWxlXSwgZmlsZS5uYW1lLCB7IHR5cGU6IHRoaXMucHJlRGVmaW5lTWltZVR5cGVbZXh0XSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZpbGU7XHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tWYWxpZGF0aW9uKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICBpZiAodGhpcy5tZXRhRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgY2hlY2tWYWxpZGF0aW9uID0gdGhpcy5jaGVja1ZhbGlkYXRlQU5EQ2hlY2tNYW5kYXRvcnkoeyBtYW5kYXRvcnk6IHRydWUsIHZhbGlkOiB0cnVlIH0pO1xyXG4gICAgICAgICAgICBpZiAoIWNoZWNrVmFsaWRhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnNob3dNYW5kYXRvcnlFcnJvck1zZy5lbWl0KHsgZmllbGRzOiBbXSwgdHlwZTogJ2NsaWNrJyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gY2hlY2tWYWxpZGF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICAgIHByaXZhdGUgY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5KHsgbWFuZGF0b3J5LCB2YWxpZCB9KSB7XHJcbiAgICAgICAgY29uc3QgYWxsU3RlcERhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEFsbEFwcFN0b3JlRGF0YSgpO1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGREYXRhIG9mIHRoaXMubWV0YUZpZWxkcykge1xyXG4gICAgICAgICAgICBpZiAoZmllbGREYXRhLmZpZWxkX3R5cGUgIT0gJ2xhYmVsJykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBhbGxTdGVwRGF0YS5maW5kKGkgPT4gaS5pZCA9PT0gZmllbGREYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5ICYmIGZpZWxkLm1hbmRhdG9yeSAmJiB0aGlzLmNoZWNrRW1wdHkuaXNFbXB0eShmaWVsZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZCAmJiAhZmllbGQuaXNWYWxpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNob3dGaWxlU2VsZWN0RXJyb3IoZXZlbnQ6IGFueSwgZXJyVHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gQWRkZWQgdGhpcyBjb25kaXRpb24gdG8gZmlsdGVyIG91dCB0aGUgaW52YWxpZCBmaWxlcyB3aGVuIFJlZ2V4IG9yIGludmFsaWRfZmlsZV9leHRlbnNpb24gZXJyb3Igb2NjdXJzXHJcbiAgICAgICAgaWYgKGVyclR5cGUgPT0gXCJpbnZhbGlkX2ZpbGVfZXh0ZW5zaW9uXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWxlcyA9IHRoaXMuZmlsZXMuZmlsdGVyKGZpbGUgPT4gZmlsZS51cGxvYWRlZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZSh0aGlzLmh0bWxfaWQsIHRoaXMuZmlsZXMsIGVyclR5cGUpO1xyXG4gICAgICAgIHRoaXMuZXJyb3JUeXBlID0gZXJyVHlwZTtcclxuICAgICAgICB0aGlzLmVtcHR5RmlsZURhdGEoKTtcclxuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9ICcnOyAvLyBDbGVhciB0aGUgaW5wdXQgdmFsdWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHNlbGVjdHMgdGhlIGZpbGUgYW5kXHJcbiAgICAgKiB1cGxvYWQgdGhlIGZpbGUgaWYgYW5kIHdoZW4gbWluaW11bSByZXF1aXJlbWVudHMgYXJlIG1ldFxyXG4gICAgICovXHJcbiAgICBoYW5kbGVGaWxlSW5wdXQgPSBhc3luYyAoZXZlbnQ6IGFueSwgZmlsZXM6IEZpbGVMaXN0W10pID0+IHtcclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9ICcnO1xyXG5cclxuICAgICAgICAvLyBpZiBtdWx0aVVwbG9hZGVyLCBjaGVjayBmb3IgdG90YWwgc2l6ZSBhbmQgdG90YWwgbm8gb2YgZmlsZXMgZWxzZSByZXR1cm5cclxuICAgICAgICBpZiAoIXRoaXMuaXNTaW5nbGVVcGxvYWRlcikge1xyXG4gICAgICAgICAgICBjb25zdCBzaXplTGltaXQgPSB0aGlzLmZpZWxkRGF0YS5hdHRhY2htZW50WzBdID8gdGhpcy5maWVsZERhdGEuYXR0YWNobWVudFswXSAqIDEwMjQgOiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUjsgLy8gQ29udmVydCBLQiB0byBCeXRlc1xyXG4gICAgICAgICAgICBjb25zdCBjb3VudExpbWl0ID0gKHRoaXMuZmllbGREYXRhLmF0dGFjaG1lbnRbMV0gJiYgdGhpcy5maWVsZERhdGEuYXR0YWNobWVudFsxXSAhPT0gXCJcIikgPyB0aGlzLmZpZWxkRGF0YS5hdHRhY2htZW50WzFdIDogTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVI7XHJcbiAgICAgICAgICAgIGNvbnN0IGFueUxpbWl0RXhjZWVkZWQgPSB0aGlzLnRvdGFsQ291bnQgPj0gY291bnRMaW1pdCB8fCB0aGlzLnRvdGFsU2l6ZSA+PSBzaXplTGltaXQ7XHJcbiAgICAgICAgICAgIGlmIChhbnlMaW1pdEV4Y2VlZGVkIHx8ICFmaWxlc1swXSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RmlsZVNlbGVjdEVycm9yKGV2ZW50LCAndG90YWxfZmlsZV9zaXplJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGVtcHR5RkRmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVPYmogPSB0aGlzLmNvbnZlcnRSZWFkYWJsZUNTVkZpbGUoZmlsZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpbGVEYXRhID0gdGhpcy5maWxlVXBsb2Fkc1tmaWxlT2JqLnR5cGVdO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlTmFtZSA9IGZpbGVbJ25hbWUnXTtcclxuICAgICAgICAgICAgLy8gQWxsb3cgb25seSBmaWxlbmFtZXMgd2l0aCBleGFjdGx5IG9uZSBkb3QgKGUuZy4sIGFiYy5wZGYpXHJcbiAgICAgICAgICAgIGNvbnN0IGRvdENvdW50ID0gKGZpbGVOYW1lLm1hdGNoKC9cXC4vZykgfHwgW10pLmxlbmd0aDtcclxuICAgICAgICAgICAgaWYgKGRvdENvdW50ICE9PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGaWxlU2VsZWN0RXJyb3IoZXZlbnQsICdpbnZhbGlkX2ZpbGVfZXh0ZW5zaW9uJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gQmxvY2sgZGFuZ2Vyb3VzIGV4dGVuc2lvbnNcclxuICAgICAgICAgICAgY29uc3QgZGlzYWxsb3dlZEV4dGVuc2lvbnMgPSBbJ2V4ZScsICdqcycsICdodG1sJywgJ2h0bScsICdzdmcnLCAncGhwJywgJ2FzcHgnLCAnanNwJywgJ2JhdCcsICdzaCddO1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlRXh0ZW5zaW9uID0gZmlsZU5hbWUuc3BsaXQoJy4nKS5wb3AoKT8udG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXNhbGxvd2VkRXh0ZW5zaW9ucy5pbmNsdWRlcyhmaWxlRXh0ZW5zaW9uKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RmlsZVNlbGVjdEVycm9yKGV2ZW50LCAnaW52YWxpZF9maWxlX2V4dGVuc2lvbicpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4ICYmIGZpbGVbJ25hbWUnXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGF0dCA9IG5ldyBSZWdFeHAodGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSBwYXR0LnRlc3QoZmlsZVsnbmFtZSddKTtcclxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dGaWxlU2VsZWN0RXJyb3IoZXZlbnQsICdSZWdleCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWZpbGVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dGaWxlU2VsZWN0RXJyb3IoZXZlbnQsICdmaWxlX3R5cGUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgaXNGaWxlVHlwZVZhbGlkID0gZmlsZURhdGEudHlwZS50b0xvd2VyQ2FzZSgpID09IGZpbGVPYmoudHlwZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0ZpbGVTaXplVmFsaWQgPSBmaWxlRGF0YS5zaXplID09IC0xIHx8IGZpbGVPYmouc2l6ZSA8PSAoZmlsZURhdGEuc2l6ZSAqIDEwMjQpO1xyXG4gICAgICAgICAgICBjb25zdCBpc0ZpbGVDb3VudFZhbGlkID0gZmlsZURhdGEuY291bnQgPT0gLTEgfHwgdGhpcy5nZXRUb3RhbENvdW50KGZpbGVEYXRhLnR5cGUpIDw9IGZpbGVEYXRhLmNvdW50O1xyXG4gICAgICAgICAgICBpZiAoaXNGaWxlVHlwZVZhbGlkICYmIGlzRmlsZVNpemVWYWxpZCAmJiBpc0ZpbGVDb3VudFZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzaW5nbGUgZmlsZSB1cGxvYWRcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlVXBsb2FkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEZpbGVUZXh0ID0gZXZlbnQudGFyZ2V0LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXIuQXR0YWNobWVudGZpeGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlT2JqLm5hbWUuc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gZmlsZS5zcGxpY2UoLTEpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0RmlsZU5hbWUgPSB0aGlzLmdldGZpeGVzKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5BdHRhY2htZW50Zml4ZXMsIGZpbGVbMF0sIHRoaXMuZ2V0VG90YWxDb3VudChmaWxlRGF0YS50eXBlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZpbGVOYW1lID0gYCR7cmVzdWx0RmlsZU5hbWV9LiR7ZXh0ZW5zaW9ufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZEZpbGU6IEZpbGUgPSBmaWxlT2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlOiBGaWxlID0gbmV3IEZpbGUoW29sZEZpbGVdLCByZXN1bHRGaWxlTmFtZSwgeyB0eXBlOiBvbGRGaWxlLnR5cGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsZURhdGEobmV3RmlsZSwgZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5RmlsZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5BdHRhY2htZW50RmlsZW5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgZm9yIHRoZSBmaWxlIG5hbWUgYXMgY29uY2F0ZW5hdGlvbiBvZiBhcGkga2V5c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvKipcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogKiBGaWxlIG5hbWUgY2FuIGJlIHtGaWxlTmFtZX1fe1NvbWVBUElLZXl9X3tUaW1lU3RhbXB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICogb3IgZmlsZS17YXBwbGljYXRpb24vcmVuZXdhbC1jcmVhdGUtcmVjb3JkIyNjdXJyZW50RW5yb2xsbWVudElkfV97WVlZWU1NRERISE1NU1N9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICogaGVyZSBmaXJzdCBzZWFyY2hpbmcgd291bGQgYmUgZG9uZSB1c2luZyBGaWxlTmFtZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqIGFuZCBUaW1lU3RhbXAgdGhlbiBuZWVkIHRvIGNoZWNrIGlmIHRoZXJlIGFyZSBhbnkgYXBpS2V5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICogdGhlbiBqb2luXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqL1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWxlID0gZmlsZU9iai5uYW1lLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVuc2lvbiA9IGZpbGUuc3BsaWNlKC0xKVswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdEZpbGVOYW1lID0gdGhpcy5nZXROYW1lKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5BdHRhY2htZW50RmlsZW5hbWUsIGZpbGVbMF0sIC9cXHsoLio/KVxcfS9nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0RmlsZU5hbWUgPSBgJHtyZXN1bHRGaWxlTmFtZX0uJHtleHRlbnNpb259YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkRmlsZTogRmlsZSA9IGZpbGVPYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGU6IEZpbGUgPSBuZXcgRmlsZShbb2xkRmlsZV0sIHJlc3VsdEZpbGVOYW1lLCB7IHR5cGU6IG9sZEZpbGUudHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGaWxlRGF0YShuZXdGaWxlLCBmaWxlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1wdHlGaWxlRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsZURhdGEoZmlsZU9iaiwgZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtcHR5RmlsZURhdGEoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gbXVsdGlwbGUgZmlsZSB1cGxvYWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgdGhlIGZpbGUgbmFtZSBhcyBvcGVuIGFzIG1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5Qcm9tcHRGaWxlbmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGBhZGROYW1lTW9kYWwtJHtmaWxlRGF0YS5pZH1gO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNBdHRhY2htZW50SW5Nb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0TW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnQXR0YWNobWVudE5hbWVNb2RhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5Qcm9tcHRGaWxlbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkRmlsZTogRmlsZSA9IGZpbGVPYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3RmlsZTogRmlsZSA9IG5ldyBGaWxlKFtvbGRGaWxlXSwgcmVzdWx0LCB7IHR5cGU6IG9sZEZpbGUudHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZpbGVEYXRhKG5ld0ZpbGUsIGZpbGVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5RkRmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXIuQXR0YWNobWVudEZpbGVuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNoZWNrIGZvciB0aGUgZmlsZSBuYW1lIGFzIGNvbmNhdGVuYXRpb24gb2YgYXBpIGtleXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgLyoqXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAqICogRmlsZSBuYW1lIGNhbiBiZSB7RmlsZU5hbWV9X3tTb21lQVBJS2V5fV97VGltZVN0YW1wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqIG9yIGZpbGUte2FwcGxpY2F0aW9uL3JlbmV3YWwtY3JlYXRlLXJlY29yZCMjY3VycmVudEVucm9sbG1lbnRJZH1fe1lZWVlNTURESEhNTVNTfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqIGhlcmUgZmlyc3Qgc2VhcmNoaW5nIHdvdWxkIGJlIGRvbmUgdXNpbmcgRmlsZU5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICogKiBhbmQgVGltZVN0YW1wIHRoZW4gbmVlZCB0byBjaGVjayBpZiB0aGVyZSBhcmUgYW55IGFwaUtleVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKiAqIHRoZW4gam9pblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgKi9cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVPYmoubmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBmaWxlLnNwbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRGaWxlTmFtZSA9IHRoaXMuZ2V0TmFtZSh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXIuQXR0YWNobWVudEZpbGVuYW1lLCBmaWxlWzBdLCAvXFx7KC4qPylcXH0vZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdEZpbGVOYW1lID0gYCR7cmVzdWx0RmlsZU5hbWV9LiR7ZXh0ZW5zaW9ufWA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9sZEZpbGU6IEZpbGUgPSBmaWxlT2JqO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdGaWxlOiBGaWxlID0gbmV3IEZpbGUoW29sZEZpbGVdLCByZXN1bHRGaWxlTmFtZSwgeyB0eXBlOiBvbGRGaWxlLnR5cGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsZURhdGEobmV3RmlsZSwgZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eUZEZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5BdHRhY2htZW50Zml4ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGZpbGVPYmoubmFtZS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlbnNpb24gPSBmaWxlLnNwbGljZSgtMSlbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXN1bHRGaWxlTmFtZSA9IHRoaXMuZ2V0Zml4ZXModGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLkF0dGFjaG1lbnRmaXhlcywgZmlsZVswXSwgdGhpcy5nZXRUb3RhbENvdW50KGZpbGVEYXRhLnR5cGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0RmlsZU5hbWUgPSBgJHtyZXN1bHRGaWxlTmFtZX0uJHtleHRlbnNpb259YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2xkRmlsZTogRmlsZSA9IGZpbGVPYmo7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0ZpbGU6IEZpbGUgPSBuZXcgRmlsZShbb2xkRmlsZV0sIHJlc3VsdEZpbGVOYW1lLCB7IHR5cGU6IG9sZEZpbGUudHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGaWxlRGF0YShuZXdGaWxlLCBmaWxlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5RkRmbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0RmlsZURhdGEoZmlsZU9iaiwgZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eUZEZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93RmlsZVNlbGVjdEVycm9yKGV2ZW50LCAnaW5kaXZpZHVhbF9maWxlX3NpemUnKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlci5BdHRhY2htZW50Zml4ZXMpIHtcclxuICAgICAgICAgICAgY29uc3QgZmlsZUNvdW50ID0gdGhpcy5maWxlcy5sZW5ndGg7XHJcbiAgICAgICAgICAgIGlmIChmaWxlQ291bnQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbWF4Q291bnRlciA9IDA7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsRmlsZXM6IGFueSA9IFsuLi50aGlzLmZpbGVzXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBHZXQgcHJldmlvdXMgZmlsZXMgaWYgZGVmaW5lZFxyXG4gICAgICAgICAgICAgICAgbGV0IHByZXZpb3VzRmlsZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNQcmV2aW91cyA9IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcj8uQ0VFX1BSRVZJT1VTX0NPVU5UO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZmlsZUtleU5hbWUgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXI/LkNFRV9GSUxFX0tFWV9OQU1FIHx8ICduYW1lJzsgLy8gRmFsbGJhY2sgdG8gJ25hbWUnXHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGhhc1ByZXZpb3VzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJldiA9IHRoaXMuZ2V0RGF0YUJ5SGFuZGxlck9yQXBpS2V5KGhhc1ByZXZpb3VzKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJldiAmJiBBcnJheS5pc0FycmF5KHByZXYpICYmIHByZXYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c0ZpbGVzID0gcHJldjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsRmlsZXMgPSBbLi4uYWxsRmlsZXMsIC4uLnByZXZdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBGaW5kIGhpZ2hlc3QgY291bnRlciBmcm9tIGFsbCBmaWxlcyB3aXRoIChuKSBzdWZmaXhcclxuICAgICAgICAgICAgICAgIGFsbEZpbGVzLmZvckVhY2goZiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZU5hbWUgPSBmPy5maWxlPy5uYW1lIHx8IGY/LltmaWxlS2V5TmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBmaWxlTmFtZSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBmaWxlTmFtZS5tYXRjaCgvXFwoKFxcZCspXFwpXFwuW2EtekEtWjAtOV0rJC8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG51bSA9IE51bWJlcihtYXRjaFsxXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobnVtID4gbWF4Q291bnRlcikgbWF4Q291bnRlciA9IG51bTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBjb3VudGVyID0gbWF4Q291bnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWNpZGUgd2hldGhlciB0byByZW5hbWUgdGhlIDB0aCBmaWxlIGJhc2VkIG9uIHByZXZpb3VzIGZpbGUgZXhpc3RlbmNlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBzdGFydEluZGV4ID0gcHJldmlvdXNGaWxlcy5sZW5ndGggPiAwID8gMCA6IDE7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IHN0YXJ0SW5kZXg7IGkgPCBmaWxlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsRmlsZSA9IHRoaXMuZmlsZXNbaV0uZmlsZTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbE5hbWUgPSBvcmlnaW5hbEZpbGU/Lm5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcmlnaW5hbEZpbGUgfHwgIW9yaWdpbmFsTmFtZSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhc3REb3QgPSBvcmlnaW5hbE5hbWUubGFzdEluZGV4T2YoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBiYXNlTmFtZSA9IG9yaWdpbmFsTmFtZS5zdWJzdHJpbmcoMCwgbGFzdERvdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gb3JpZ2luYWxOYW1lLnN1YnN0cmluZyhsYXN0RG90KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWxyZWFkeUhhc1BhcmVuQ291bnRlciA9IC9cXChcXGQrXFwpJC8udGVzdChiYXNlTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWxyZWFkeUhhc1BhcmVuQ291bnRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZW1vdmUgYW55IGV4aXN0aW5nIChuKSBiZWZvcmUgYWRkaW5nIGEgbmV3IG9uZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbmVkQmFzZU5hbWUgPSBiYXNlTmFtZS5yZXBsYWNlKC9cXChcXGQrXFwpJC8sICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TmFtZSA9IGAke2NsZWFuZWRCYXNlTmFtZX0gKCR7Y291bnRlcn0pJHtleHRlbnNpb259YDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbmFtZWRGaWxlID0gbmV3IEZpbGUoW29yaWdpbmFsRmlsZV0sIG5ld05hbWUsIHsgdHlwZTogb3JpZ2luYWxGaWxlLnR5cGUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaV0uZmlsZSA9IHJlbmFtZWRGaWxlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYXV0b1VwbG9hZCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVVwbG9hZGVyKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLnNpbmdsZUZpbGVVcGxvYWRBY3Rpb24oKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5maWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IHRoaXMuZmlsZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFzZWxlY3RlZEZpbGUudXBsb2FkZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5hY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAndXBsb2FkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZW1wdHlGRGZsYWcpIHtcclxuICAgICAgICAgICAgdGhpcy5lbXB0eUZpbGVEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2xlYXJGaWxlSW5wdXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhQnlIYW5kbGVyT3JBcGlLZXkoaGFuZGxlck9yQXBpS2V5OiBzdHJpbmcpOiBhbnlbXSB7XHJcbiAgICAgICAgaWYgKCFoYW5kbGVyT3JBcGlLZXk/LmluY2x1ZGVzKCcjIycpKSByZXR1cm4gW107XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdHM6IGFueVtdID0gW107XHJcbiAgICAgICAgY29uc3Qga2V5cyA9IGhhbmRsZXJPckFwaUtleVxyXG4gICAgICAgICAgICAuc3BsaXQoJ3wnKVxyXG4gICAgICAgICAgICAubWFwKGsgPT4gay50cmltKCkpXHJcbiAgICAgICAgICAgIC5maWx0ZXIoayA9PiBrLmluY2x1ZGVzKCcjIycpKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgaWYgKGtleS5pbmNsdWRlcygnKicpKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgnKicsIHRoaXMucm93RGF0YT8ucG9zaXRpb24gPz8gMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IFtoYW5kbGVyS2V5LCBwYXRoUmF3XSA9IGtleS5zcGxpdCgnIyMnKTtcclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIoaGFuZGxlcktleSk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWhhbmRsZXJEYXRhPy52YWx1ZSB8fCB0eXBlb2YgaGFuZGxlckRhdGEudmFsdWUgIT09ICdvYmplY3QnKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5lc3RlZCBvYmplY3QgZnJvbSBmbGF0IGtleXNcclxuICAgICAgICAgICAgY29uc3QgbmVzdGVkID0ge307XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgZmxhdEtleSBpbiBoYW5kbGVyRGF0YS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmbGF0S2V5LnN0YXJ0c1dpdGgoYCR7aGFuZGxlcktleX0jI2ApKSBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHN0cmlwcGVkS2V5ID0gZmxhdEtleS5yZXBsYWNlKGAke2hhbmRsZXJLZXl9IyNgLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBzZXROZXN0ZWRWYWx1ZShuZXN0ZWQsIHN0cmlwcGVkS2V5LCBoYW5kbGVyRGF0YS52YWx1ZVtmbGF0S2V5XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgcmF3IHBhdGggdG8gcmVhY2ggdGhlIG5lc3RlZCBhcnJheSAoZS5nLiwgZGF0YVswXS5kb2N1bWVudF90eXBlc1sxXS5kcmFmdF9kb2N1bWVudHMpXHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEFycmF5ID0gcmVzb2x2ZVBhdGgobmVzdGVkLCBwYXRoUmF3KTtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGFyZ2V0QXJyYXkpKSB7XHJcbiAgICAgICAgICAgICAgICByZXN1bHRzLnB1c2goLi4udGFyZ2V0QXJyYXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gcmVzdWx0cztcclxuXHJcbiAgICAgICAgLy8gQ29udmVydHMgZmxhdCBrZXkgd2l0aCBbaW5kZXhdIGFuZCBkb3RzIGludG8gbmVzdGVkIHN0cnVjdHVyZVxyXG4gICAgICAgIGZ1bmN0aW9uIHNldE5lc3RlZFZhbHVlKG9iajogYW55LCBwYXRoOiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICAgICAgY29uc3QgcGFydHMgPSBwYXRoLnJlcGxhY2UoL1xcWyhcXGQrKV0vZywgJy4kMScpLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gb2JqO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGFydCA9IHBhcnRzW2ldO1xyXG4gICAgICAgICAgICAgICAgaWYgKCEocGFydCBpbiBjdXJyZW50KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5leHRQYXJ0ID0gcGFydHNbaSArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbcGFydF0gPSAvXlxcZCskLy50ZXN0KG5leHRQYXJ0KSA/IFtdIDoge307XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwYXJ0XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjdXJyZW50W3BhcnRzW3BhcnRzLmxlbmd0aCAtIDFdXSA9IHZhbHVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJhdmVyc2VzIHRoZSBuZXN0ZWQgb2JqZWN0IHVzaW5nIHRoZSBwYXRoIChlLmcuLCBkYXRhWzBdLmRvY3VtZW50X3R5cGVzWzFdLmRyYWZ0X2RvY3VtZW50cylcclxuICAgICAgICBmdW5jdGlvbiByZXNvbHZlUGF0aChvYmo6IGFueSwgcGF0aDogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gcGF0aC5yZXBsYWNlKC9cXFsoXFxkKyldL2csICcuJDEnKS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICByZXR1cm4gcGFydHMucmVkdWNlKChhY2MsIHBhcnQpID0+IChhY2MgJiYgYWNjW3BhcnRdICE9PSB1bmRlZmluZWQgPyBhY2NbcGFydF0gOiB1bmRlZmluZWQpLCBvYmopO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG1ldGhvZCByZXR1cm5zIHRoZSBuYW1lIGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uXHJcbiAgICAgKiBAcGFyYW0gb3JpZ2luYWxOYW1lIHRoZSBvcmlnaW5hbCBuYW1lIGZyb20gd2hlcmVcclxuICAgICAqIEBwYXJhbSBmaWxlTmFtZSB0aGUgZmlsZSBuYW1lIG9mIHRoZSBmaWxlXHJcbiAgICAgKiBAcGFyYW0gcmVnZXggdGhlIHJlZ2V4IGZyb20gd2hpY2ggdGhlIGR5bmFtaWMgdmFyaWFibGVzIG5lZWRzIHRvIGJlIGV4dHJhY3RlZFxyXG4gICAgICogQHJldHVybnMgdGhlIHJlc3VsdCBuYW1lXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXROYW1lKG9yaWdpbmFsTmFtZTogc3RyaW5nLCBmaWxlTmFtZTogc3RyaW5nLCByZWdleDogUmVnRXhwKSB7XHJcbiAgICAgICAgbGV0IHJlc3VsdCA9IG9yaWdpbmFsTmFtZTtcclxuICAgICAgICBjb25zdCBtYXRjaGVkID0gb3JpZ2luYWxOYW1lLm1hdGNoKG5ldyBSZWdFeHAocmVnZXgpKTtcclxuICAgICAgICBpZiAobWF0Y2hlZCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IG5hbWUgb2YgbWF0Y2hlZCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChuYW1lLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICd7ZmlsZW5hbWV9JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gZmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3t5eXl5bW1kZGhobW1zc30nOlxyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3t0aW1lc3RhbXB9JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gU3RyaW5nKG5ldyBEYXRlKCkuZ2V0VGltZSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUuaW5jbHVkZXMoJyMjJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlcyA9IG5hbWUubWF0Y2gobmV3IFJlZ0V4cCgvW157fV0rL2cpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHZhbHVlcyA/IHZhbHVlc1swXSA6IG5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyRGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcihrZXkuc3BsaXQoJyMjJylbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gaGFuZGxlckRhdGEgPyBoYW5kbGVyRGF0YS52YWx1ZVtrZXldIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlBcGlLZXkobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWwgPSBhcGlEYXRhID8gYXBpRGF0YS52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNwbGl0KG5hbWUpLmpvaW4odmFsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogU3RvcmVzIHRoZSBmaWxlIGluIG1lbW9yeVxyXG4gICAgICogQHBhcmFtIGZpbGUgdGhlIGN1cnJlbnQgZmlsZVxyXG4gICAgICogQHBhcmFtIGZpbGVEYXRhIHRoZSBJRmlsZURhdGEgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRGaWxlRGF0YShmaWxlOiBGaWxlLCBmaWxlRGF0YTogSUZpbGVEYXRhKSB7XHJcbiAgICAgICAgLy8gYWRkIHRvdGFsIGNvdW50IGFuZCB0b3RhbCBzaXplXHJcbiAgICAgICAgLy8gaWYgb25seSBvbmUgZmlsZSB1cGxvYWQgdGhlbiBqdXN0IHJlcGxhY2UgdGhlIGZpbGUgZWxzZSBwdXNoIGluIGFuIGFycmF5LlxyXG4gICAgICAgIGNvbnN0IG5ld0JsYW5rRmlsZTogSUZpbGUgPSB7IHJlbmFtZTogZmFsc2UsIHVwbG9hZGVkOiBmYWxzZSwgcHJvZ3Jlc3M6IG51bGwsIHVJZDogRGF0ZS5ub3coKS50b1N0cmluZygpLCBhdHRhY2htZW50SWQ6ICcnLCBhdHRhY2htZW50UGF0aDogJycsIHVybDogJycsIGN1c3RvbTogW10sIGZpbGUgfTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1ldGFJdGVtIG9mIE9iamVjdC5rZXlzKHRoaXMubWV0YWRhdGFGaWVsZHMpKSB7XHJcbiAgICAgICAgICAgIG5ld0JsYW5rRmlsZVttZXRhSXRlbV0gPSAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVVcGxvYWRlcikge1xyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZVVwbG9hZEZpbGVEYXRhID0gbmV3QmxhbmtGaWxlO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheSh0aGlzLmZpbGVzKSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmF0dGFjaG1lbnQgJiYgdGhpcy5maWVsZERhdGEuYXR0YWNobWVudC5sZW5ndGggPT0gMiAmJlxyXG4gICAgICAgICAgICAgICAgKHRoaXMuZmllbGREYXRhLmF0dGFjaG1lbnRbMF0gJiYgdGhpcy5maWVsZERhdGEuYXR0YWNobWVudFsxXSkgJiZcclxuICAgICAgICAgICAgICAgICh0aGlzLmZpZWxkRGF0YS5hdHRhY2htZW50WzFdID09IDEpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlcy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzWzBdID0gbmV3QmxhbmtGaWxlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IFtuZXdCbGFua0ZpbGVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBbLi4udGhpcy5maWxlcywgbmV3QmxhbmtGaWxlXVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5maWxlcy5wdXNoKG5ld0JsYW5rRmlsZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRUb3RhbFNpemVBbmRDb3VudChmaWxlLnNpemUsIDEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVycm9yVHlwZSA9IFwiZmlsZV9ub3RfdXBsb2FkZWRcIjtcclxuICAgICAgICB0aGlzLnVwZGF0ZUF0dGFjaG1lbnRBcHBEYXRhKGZhbHNlKTtcclxuICAgICAgICBpZiAodGhpcy5yb290RGF0YVsncmVwZWF0YWJsZS0nICsgdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydyZXBlYXRhYmxlLScgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdW3RoaXMuaHRtbF9pZF0gPSB0aGlzLmZpbGVzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVtcHR5IHRoZSBmaWVsZCBpbnB1dCBhZnRlciB0aGVcclxuICAgICAqIGZpbGUgZ2V0cyB1cGxvYWRlZFxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGVtcHR5RmlsZURhdGEoKSB7XHJcbiAgICAgICAgLy8gY29uc3QgZWxtOiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHt0aGlzLmh0bWxfaWR9YCk7XHJcbiAgICAgICAgLy8gZWxtLnZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8vIEVzY2FwZSB0aGUgc3BlY2lhbCBjaGFyYWN0ZXJzIGluIHRoZSBzZWxlY3RvclxyXG4gICAgICAgICAgICBjb25zdCBlc2NhcGVkU2VsZWN0b3IgPSBDU1MuZXNjYXBlKHRoaXMuaHRtbF9pZCk7XHJcblxyXG4gICAgICAgICAgICAvLyBOb3cgdXNlIHF1ZXJ5U2VsZWN0b3Igd2l0aCB0aGUgZXNjYXBlZCBzZWxlY3RvclxyXG4gICAgICAgICAgICBjb25zdCBlbGVtZW50OiBhbnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAjJHtlc2NhcGVkU2VsZWN0b3J9YCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFbGVtZW50IG5vdCBmb3VuZFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJBbiBlcnJvciBvY2N1cnJlZDpcIiwgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIHNldCB0aGUgdG90YWwgY291bnQgb2YgdXBsb2FkZWQgZmlsZXNcclxuICAgICAqIEBwYXJhbSBzaXplIHRoZSBzaXplIG9mIHRoZSBjdXJyZW50IHVwbG9hZGVkIG9yIHJlbW92ZWQgZmlsZVxyXG4gICAgICogQHBhcmFtIGNvdW50IHRoZSBjb3VudCBvZiB0aGUgY3VycmVudCB1cGxvYWRlZCBvciByZW1vdmVkIGZpbGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXRUb3RhbFNpemVBbmRDb3VudChzaXplPywgY291bnQ/KSB7XHJcbiAgICAgICAgaWYgKHNpemUpIHtcclxuICAgICAgICAgICAgdGhpcy50b3RhbFNpemUgPSB0aGlzLnRvdGFsU2l6ZSArIHNpemU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb3VudCkge1xyXG4gICAgICAgICAgICB0aGlzLnRvdGFsQ291bnQgPSB0aGlzLnRvdGFsQ291bnQgKyBjb3VudDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0byBnZXQgdGhlIHRvdGFsIGNvdW50IG9mIGZpbGVzIGZvciBlYWNoIGZpbGUgdHlwZVxyXG4gICAgICogQHBhcmFtIGZpbGVUeXBlIHRoZSBjdXJyZW50IGNob3NlbiBmaWxlIHR5cGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRUb3RhbENvdW50KGZpbGVUeXBlKSB7XHJcbiAgICAgICAgbGV0IHRvdGFsTnVtYmVyT2ZGaWxlcyA9IDA7XHJcbiAgICAgICAgaWYgKHRoaXMuZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZGaWxlcyA9IHRoaXMuZmlsZXMucmVkdWNlKFxyXG4gICAgICAgICAgICAgICAgKGFjY3VtdWxhdG9yLCBjdXJyZW50VmFsdWU6IElGaWxlKSA9PiBOdW1iZXIoYWNjdW11bGF0b3IpICsgKGN1cnJlbnRWYWx1ZS5maWxlLnR5cGUgPT0gZmlsZVR5cGUgPyAxIDogMCksIDApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRvdGFsTnVtYmVyT2ZGaWxlcyA9IHRvdGFsTnVtYmVyT2ZGaWxlcyArIDE7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0b3RhbE51bWJlck9mRmlsZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlUGVyY2VudFN5bWJvbHMgPSAoc3RyOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvJS9nLCBcIlwiKTsgLy8gUmVtb3ZlIGFsbCAlIHN5bWJvbHNcclxuICAgIH07XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY2hlY2sgaWYgYSBzdHJpbmcgc3RhcnRzIHdpdGggJVxyXG4gICAgc3RhcnRzV2l0aFBlcmNlbnQgPSAoc3RyOiBzdHJpbmcpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gc3RyLnN0YXJ0c1dpdGgoXCIlXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBnZXREeW5hbWljVmFsdWVGcm9tQXBpS2V5KHZhbHVlKSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKHRoaXMucmVtb3ZlUGVyY2VudFN5bWJvbHModmFsdWUpKSk7XHJcbiAgICAgICAgY29uc3QgdmFsID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShcclxuICAgICAgICAgICAgdGhpcy5yZW1vdmVQZXJjZW50U3ltYm9scyh2YWx1ZSksIGRhdGFbJ3ZhbHVlJ10pO1xyXG4gICAgICAgIHJldHVybiB2YWwgPyB2YWwgOiAnJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGEgc3RyaW5nIGJhc2VkIG9uIHRoZSBmaXhJbnB1dCwgc3VwcG9ydGluZyByZXBlYXRhYmxlIGJsb2Nrcy5cclxuICAgICAqIEZvciByZXBlYXRhYmxlIGJsb2NrcywgaWYgdGhlIGhhbmRsZXIgcmV0dXJucyBhbiBhcnJheSwgaXQgd2lsbCB1c2UgdGhlIHZhbHVlIGF0IHRoZSBjdXJyZW50IHJvdyBpbmRleCAocHJpbWFyeUtleUluZGV4KS5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGdldEZpeGVzU3RyaW5nKGZpeElucHV0OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IG5hbWVzID0gZml4SW5wdXQuc3BsaXQoJ3wnKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gJyc7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gJyc7XHJcblxyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBuYW1lcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5hbWVzW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRzV2l0aFBlcmNlbnQgPSB0aGlzLnN0YXJ0c1dpdGhQZXJjZW50KG5hbWUpO1xyXG5cclxuICAgICAgICAgICAgaWYgKG5hbWUgJiYgIXN0YXJ0c1dpdGhQZXJjZW50KSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IGAke25hbWV9YDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlIGlmIChuYW1lICYmIHN0YXJ0c1dpdGhQZXJjZW50KSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaGFuZGxlciA9IHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZSh0aGlzLnJlbW92ZVBlcmNlbnRTeW1ib2xzKG5hbWUpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRtcERhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIoaGFuZGxlcik7XHJcbiAgICAgICAgICAgICAgICBsZXQgdG1wVmFsID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVBlcmNlbnRTeW1ib2xzKG5hbWUpLFxyXG4gICAgICAgICAgICAgICAgICAgIHRtcERhdGE/LlsndmFsdWUnXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBIYW5kbGUgcmVwZWF0YWJsZSBibG9jazogaWYgdG1wVmFsIGlzIGFycmF5LCB1c2UgcmJQb3NpdGlvbiBpZiBhdmFpbGFibGVcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRtcFZhbCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBVc2UgcmJQb3NpdGlvbiBpZiBhdmFpbGFibGUsIG90aGVyd2lzZSBqb2luIGFsbFxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5yYlBvc2l0aW9uID09PSAnbnVtYmVyJyAmJiB0bXBWYWxbdGhpcy5yYlBvc2l0aW9uXSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYCR7dG1wVmFsW3RoaXMucmJQb3NpdGlvbl19YDtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHRtcFZhbC5tYXAoaXRlbSA9PiAodHlwZW9mIGl0ZW0gPT09ICdzdHJpbmcnID8gaXRlbSA6IEpTT04uc3RyaW5naWZ5KGl0ZW0pKSkuam9pbignXycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB0bXBWYWwgPyBgJHt0bXBWYWx9YCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChuYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5lbmRzV2l0aCgnXycpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZS5lbmRzV2l0aCgnXycpID8gdmFsdWUgOiAnXycgKyB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmVtb3ZlIGxlYWRpbmcvdHJhaWxpbmcgdW5kZXJzY29yZXMgYW5kIGNvbGxhcHNlIG11bHRpcGxlIHVuZGVyc2NvcmVzXHJcbiAgICAgICAgcmV0dXJuIHJlc3VsdC5yZXBsYWNlKC9fKy9nLCAnXycpLnJlcGxhY2UoL15fK3xfKyQvZywgJycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRmaXhlcyhmaXhOYW1lOiBzdHJpbmcsIGZpbGVOYW1lOiBzdHJpbmcsIGNvdW50OiBhbnkpOiBzdHJpbmcge1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBmaWxlTmFtZTtcclxuICAgICAgICBsZXQgdmFsdWUgPSAnJztcclxuXHJcbiAgICAgICAgcmVzdWx0ID0gdGhpcy5nZXRGaXhlc1N0cmluZyhmaXhOYW1lKTtcclxuXHJcbiAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoL18rL2csICdfJykucmVwbGFjZSgvXl8rfF8rJC9nLCAnJyk7XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICogbWV0aG9kIHJldHVybnMgdGhlIHByZWZpeCBhbmQgc3VmZml4IGJhc2VkIG9uIHRoZSBjb25maWd1cmF0aW9uXHJcbiAgICAqIEByZXR1cm5zIHRoZSByZXN1bHQgcHJlZml4IGFuZCBzdWZmaXhcclxuICAgICovXHJcbiAgICBwdWJsaWMgZ2V0Zml4ZXNfb2xkKGZpeE5hbWU6IHN0cmluZywgZmlsZU5hbWU6IHN0cmluZywgY291bnQ6IGFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgLy8gU3BsaXQgdGhlIGZpeE5hbWUgaW50byBwcmVmaXgsIHN1ZmZpeCwgZmlyc3RuYW1lLCBsYXN0bmFtZSwgYW5kIGNvbW1pdG1lbnRcclxuICAgICAgICBjb25zdCBbcHJlZml4LCBzdWZmaXgsIGZpcnN0bmFtZSwgbGFzdG5hbWUsIGNvbW1pdG1lbnRdID0gZml4TmFtZS5zcGxpdChcInxcIik7XHJcblxyXG4gICAgICAgIC8vIEluaXRpYWxpemUgdGhlIHJlc3VsdCB3aXRoIHRoZSBvcmlnaW5hbCBmaWxlTmFtZVxyXG4gICAgICAgIGxldCByZXN1bHQgPSBmaWxlTmFtZTtcclxuXHJcbiAgICAgICAgaWYgKHByZWZpeCAmJiAhdGhpcy5zdGFydHNXaXRoUGVyY2VudChwcmVmaXgpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGAke3ByZWZpeH1gO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHByZWZpeCAmJiB0aGlzLnN0YXJ0c1dpdGhQZXJjZW50KHByZWZpeCkpIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKHRoaXMucmVtb3ZlUGVyY2VudFN5bWJvbHMocHJlZml4KSkpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWwgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVQZXJjZW50U3ltYm9scyhwcmVmaXgpLCBkYXRhWyd2YWx1ZSddKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsID8gYCR7dmFsfWAgOiAnJztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gSWYgZWl0aGVyIGZpcnN0bmFtZSBvciBsYXN0bmFtZSBpcyBwcm92aWRlZCwgcmVwbGFjZSB0aGUgcmVzdWx0IHdpdGggXCJmaXJzdG5hbWVfbGFzdG5hbWVcIiAob3IganVzdCBvbmUgaWYgb25seSBvbmUgZXhpc3RzKVxyXG4gICAgICAgIGlmICgoZmlyc3RuYW1lICYmICF0aGlzLnN0YXJ0c1dpdGhQZXJjZW50KGZpcnN0bmFtZSkpIHx8IChsYXN0bmFtZSAmJiAhdGhpcy5zdGFydHNXaXRoUGVyY2VudChsYXN0bmFtZSkpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IFtmaXJzdG5hbWUsIGxhc3RuYW1lXS5maWx0ZXIoQm9vbGVhbikuam9pbihcIl9cIik7IC8vIEpvaW4gbm9uLWVtcHR5IHZhbHVlcyB3aXRoIHVuZGVyc2NvcmVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKChmaXJzdG5hbWUgJiYgdGhpcy5zdGFydHNXaXRoUGVyY2VudChmaXJzdG5hbWUpKSB8fCAobGFzdG5hbWUgJiYgdGhpcy5zdGFydHNXaXRoUGVyY2VudChsYXN0bmFtZSkpKSB7XHJcbiAgICAgICAgICAgIC8vIElmIGZpcnN0bmFtZSBvciBsYXN0bmFtZSBzdGFydHMgd2l0aCAlLCBmZXRjaCBkeW5hbWljIGRhdGEgZnJvbSBBUElcclxuICAgICAgICAgICAgY29uc3QgZHluYW1pY0ZpcnN0TmFtZSA9IGZpcnN0bmFtZSAmJiB0aGlzLnN0YXJ0c1dpdGhQZXJjZW50KGZpcnN0bmFtZSlcclxuICAgICAgICAgICAgICAgID8gdGhpcy5nZXREeW5hbWljVmFsdWVGcm9tQXBpS2V5KGZpcnN0bmFtZSlcclxuICAgICAgICAgICAgICAgIDogZmlyc3RuYW1lO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZHluYW1pY0xhc3ROYW1lID0gbGFzdG5hbWUgJiYgdGhpcy5zdGFydHNXaXRoUGVyY2VudChsYXN0bmFtZSlcclxuICAgICAgICAgICAgICAgID8gdGhpcy5nZXREeW5hbWljVmFsdWVGcm9tQXBpS2V5KGxhc3RuYW1lKVxyXG4gICAgICAgICAgICAgICAgOiBsYXN0bmFtZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFVzZSB0aGUgZHluYW1pYyB2YWx1ZXMgKG9yIG9yaWdpbmFsIHZhbHVlcyBpZiBubyAlKVxyXG4gICAgICAgICAgICBsZXQgZmlyc3RMYXN0TmFtZSA9IFtkeW5hbWljRmlyc3ROYW1lLCBkeW5hbWljTGFzdE5hbWVdLmZpbHRlcihCb29sZWFuKS5qb2luKFwiX1wiKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gZmlyc3RMYXN0TmFtZSA/IGAke3Jlc3VsdH1fJHtmaXJzdExhc3ROYW1lfWAgOiByZXN1bHQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQqKionLCByZXN1bHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgcHJlZml4IGlmIGl0IGV4aXN0c1xyXG5cclxuICAgICAgICAvLyBBZGQgY29tbWl0bWVudCBpZiBpdCBleGlzdHNcclxuICAgICAgICBpZiAoY29tbWl0bWVudCAmJiAhdGhpcy5zdGFydHNXaXRoUGVyY2VudChjb21taXRtZW50KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9XyR7Y29tbWl0bWVudH1gO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY29tbWl0bWVudCAmJiB0aGlzLnN0YXJ0c1dpdGhQZXJjZW50KGNvbW1pdG1lbnQpKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZSh0aGlzLnJlbW92ZVBlcmNlbnRTeW1ib2xzKGNvbW1pdG1lbnQpKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVBlcmNlbnRTeW1ib2xzKGNvbW1pdG1lbnQpLCBkYXRhWyd2YWx1ZSddKTtcclxuICAgICAgICAgICAgcmVzdWx0ID0gdmFsID8gYCR7cmVzdWx0fV8ke3ZhbH1gIDogcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgc3VmZml4IGlmIGl0IGV4aXN0c1xyXG4gICAgICAgIGlmIChzdWZmaXggJiYgIXRoaXMuc3RhcnRzV2l0aFBlcmNlbnQoc3VmZml4KSkge1xyXG4gICAgICAgICAgICByZXN1bHQgPSBgJHtyZXN1bHR9XyR7c3VmZml4fWA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzdWZmaXggJiYgdGhpcy5zdGFydHNXaXRoUGVyY2VudChzdWZmaXgpKSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZSh0aGlzLnJlbW92ZVBlcmNlbnRTeW1ib2xzKHN1ZmZpeCkpKTtcclxuICAgICAgICAgICAgY29uc3QgdmFsID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUGVyY2VudFN5bWJvbHMoc3VmZml4KSwgZGF0YVsndmFsdWUnXSk7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IHZhbCA/IGAke3Jlc3VsdH1fJHt2YWx9YCA6IHJlc3VsdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNvdW50ID49IDApIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYCR7cmVzdWx0fV8ke3RoaXMudG90YWxDb3VudCArIDF9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHJlc29sdmUgPT4gc2V0VGltZW91dChyZXNvbHZlLCBtcykpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnZlcnRJbWFnZVRvUERGKGZpbGU6IGFueSwgaW5kZXg6IG51bWJlcik6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZmlsZSkge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiB0aGUgZmlsZSBpcyBIRUlDIGZvcm1hdCBhbmQgY29udmVydCBpdCBmaXJzdFxyXG4gICAgICAgICAgICBpZiAoZmlsZS5uYW1lLnRvTG93ZXJDYXNlKCkuZW5kc1dpdGgoXCIuaGVpY1wiKSB8fCBmaWxlLnR5cGUgPT09ICdpbWFnZS9oZWljJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb252ZXJ0SEVJQ1RvUERGKGZpbGUsIGluZGV4KS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIEhhbmRsZSByZWd1bGFyIGltYWdlIGZvcm1hdHNcclxuICAgICAgICAgICAgdGhpcy5wcm9jZXNzSW1hZ2VUb1BERihmaWxlLCBpbmRleCkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29udmVydEhFSUNUb1BERihmaWxlOiBhbnksIGluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBoZWljMmFueSh7XHJcbiAgICAgICAgICAgICAgICBibG9iOiBmaWxlLFxyXG4gICAgICAgICAgICAgICAgdG9UeXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICB9KS50aGVuKChjb252ZXJ0ZWRCbG9iOiBCbG9iKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbmdGaWxlID0gbmV3IEZpbGUoW2NvbnZlcnRlZEJsb2JdLCBmaWxlLm5hbWUucmVwbGFjZSgvXFwuaGVpYyQvaSwgXCIucG5nXCIpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBjb252ZXJ0ZWQgUE5HIGZpbGUgdG8gUERGXHJcbiAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NJbWFnZVRvUERGKHBuZ0ZpbGUsIGluZGV4KS50aGVuKHJlc29sdmUpLmNhdGNoKHJlamVjdCk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcjogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY29udmVydGluZyBIRUlDIHRvIFBORyBmb3IgUERGIGNvbnZlcnNpb246XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIC8vIEZhbGxiYWNrOiB0cnkgdG8gcHJvY2VzcyB0aGUgb3JpZ2luYWwgZmlsZSBhbnl3YXlcclxuICAgICAgICAgICAgICAgIHRoaXMucHJvY2Vzc0ltYWdlVG9QREYoZmlsZSwgaW5kZXgpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBwcm9jZXNzSW1hZ2VUb1BERihmaWxlOiBhbnksIGluZGV4OiBudW1iZXIpOiBQcm9taXNlPHZvaWQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuXHJcbiAgICAgICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKSE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBEZWZpbmUgbWF4IHdpZHRoIGJhc2VkIG9uIEE0IHNpemUgd2hpbGUgbWFpbnRhaW5pbmcgYXNwZWN0IHJhdGlvXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhZ2VXaWR0aCA9IDIxMDsgLy8gQTQgd2lkdGggaW4gbW1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGFnZUhlaWdodCA9IDI5NzsgLy8gQTQgaGVpZ2h0IGluIG1tXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1hcmdpbiA9IDEwOyAvLyBNYXJnaW5zIG9uIGVhY2ggc2lkZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZ1dpZHRoID0gcGFnZVdpZHRoIC0gMiAqIG1hcmdpbjsgLy8gTWF4IHdpZHRoIHdpdGhpbiBtYXJnaW5zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWdIZWlnaHQgPSAoaW1nLmhlaWdodCAqIGltZ1dpZHRoKSAvIGltZy53aWR0aDsgLy8gTWFpbnRhaW4gYXNwZWN0IHJhdGlvXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiBpbWFnZSBoZWlnaHQgZXhjZWVkcyB0aGUgcGFnZSBoZWlnaHQsIHNjYWxlIGl0IGRvd25cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGltZ0hlaWdodCA+IHBhZ2VIZWlnaHQgLSAyICogbWFyZ2luKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWdIZWlnaHQgPSBwYWdlSGVpZ2h0IC0gMiAqIG1hcmdpbjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltZ1dpZHRoID0gKGltZy53aWR0aCAqIGltZ0hlaWdodCkgLyBpbWcuaGVpZ2h0OyAvLyBBZGp1c3Qgd2lkdGggYWNjb3JkaW5nbHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2V0IGNhbnZhcyBzaXplIHRvIG1hdGNoIHRoZSBhZGp1c3RlZCBpbWFnZSBzaXplXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IGltZ1dpZHRoICogNDsgLy8gSW5jcmVhc2UgcmVzb2x1dGlvbiBmb3IgYmV0dGVyIHF1YWxpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGltZ0hlaWdodCAqIDQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENvbXByZXNzIGltYWdlIHVzaW5nIGxvd2VyIHF1YWxpdHkgc2V0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb21wcmVzc2VkSW1nID0gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvanBlZycsIDAuOCk7IC8vIDgwJSBxdWFsaXR5XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgUERGIHdpdGggb3JpZ2luYWwgSEVJQyBmaWxlbmFtZSBidXQgLnBkZiBleHRlbnNpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxGaWxlTmFtZSA9IHRoaXMuZmlsZXNbaW5kZXhdPy5maWxlPy5uYW1lIHx8IGZpbGUubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGRmRmlsZU5hbWUgPSBvcmlnaW5hbEZpbGVOYW1lLnJlcGxhY2UoL1xcLihoZWljfHBuZ3xqcGd8anBlZ3xnaWZ8Ym1wfHdlYnApJC9pLCAnLnBkZicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcGRmID0gbmV3IGpzUERGKCdwJywgJ21tJywgJ2E0Jyk7IC8vIC5zZXRQcm9wZXJ0aWVzKHsgdGl0bGU6IHBkZkZpbGVOYW1lIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwZGYuYWRkSW1hZ2UoY29tcHJlc3NlZEltZywgJ0pQRUcnLCBtYXJnaW4sIG1hcmdpbiwgaW1nV2lkdGgsIGltZ0hlaWdodCwgJycsICdGQVNUJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBkZkJsb2IgPSBwZGYub3V0cHV0KCdibG9iJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBkZkZpbGUgPSBuZXcgRmlsZShbcGRmQmxvYl0sIHBkZkZpbGVOYW1lLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9wZGYnIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXlMb2FkLmZpbGVEYXRhLmF0dGFjaG1lbnROYW1lID0gcGRmRmlsZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBheUxvYWQuZmlsZURhdGEuZmlsZVNpemUgPSBwZGZGaWxlLnNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGF5TG9hZC5maWxlRGF0YS5maWxlID0gcGRmRmlsZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0uZmlsZSA9IHBkZkZpbGU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yID0gbmV3IEVycm9yKGBFcnJvciBsb2FkaW5nIGltYWdlIGZvciBQREYgY29udmVyc2lvbjogJHtmaWxlLm5hbWV9YCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoYEVycm9yIHJlYWRpbmcgZmlsZSBmb3IgUERGIGNvbnZlcnNpb246ICR7ZmlsZS5uYW1lfWApO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRnVuY3Rpb24gdG8gY29udmVydCBCYXNlNjQgc3RyaW5nIHRvIEJsb2IgYW5kIHRyaWdnZXIgZG93bmxvYWRcclxuICAgIGJhc2U2NFRvRmlsZShiYXNlNjRTdHJpbmcsIG1pbWVUeXBlLCBmaWxlTmFtZSkge1xyXG4gICAgICAgIC8vIFJlbW92ZSBkYXRhIFVSTCBzY2hlbWUgaWYgcHJlc2VudFxyXG4gICAgICAgIGNvbnN0IGJhc2U2NERhdGEgPSBiYXNlNjRTdHJpbmcucmVwbGFjZSgvXmRhdGE6Lis7YmFzZTY0LC8sICcnKTtcclxuICAgICAgICBjb25zdCBieXRlQ2hhcmFjdGVycyA9IGF0b2IoYmFzZTY0RGF0YSk7IC8vIERlY29kZSBCYXNlNjQgc3RyaW5nXHJcbiAgICAgICAgY29uc3QgYnl0ZU51bWJlcnMgPSBuZXcgQXJyYXkoYnl0ZUNoYXJhY3RlcnMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBieXRlQ2hhcmFjdGVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBieXRlTnVtYmVyc1tpXSA9IGJ5dGVDaGFyYWN0ZXJzLmNoYXJDb2RlQXQoaSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBieXRlQXJyYXkgPSBuZXcgVWludDhBcnJheShieXRlTnVtYmVycyk7XHJcblxyXG4gICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbYnl0ZUFycmF5XSwgeyB0eXBlOiBtaW1lVHlwZSB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIGJsb2I7XHJcbiAgICB9XHJcblxyXG4gICAgY29tcHJlc3NlZEltYWdlOiBhbnkgPSBcIlwiO1xyXG5cclxuICAgIGNvbXByZXNzSW1hZ2UoZmlsZTogYW55LCBpbmRleDogbnVtYmVyKSB7XHJcblxyXG4gICAgICAgIGlmICghZmlsZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAvLyBJZiB1cGxvYWRlZCBmaWxlIHNpemUgaXMgc21hbGxlciB0aGVuIHNraXAgY29tcHJlc3Npb24gXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eShcIkNFRV9Db21wcmVzc0ltYWdlX0lmU2l6ZUV4Y2VlZHNJbktCXCIpICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9Db21wcmVzc0ltYWdlX0lmU2l6ZUV4Y2VlZHNJbktCXCJdICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltYWdlU2l6ZTogbnVtYmVyID0gTnVtYmVyKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9Db21wcmVzc0ltYWdlX0lmU2l6ZUV4Y2VlZHNJbktCXCJdLm1hdGNoKC9cXGQrLykpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGZpbGUpXHJcbiAgICAgICAgICAgIGlmICgoZmlsZS5zaXplIC8gMTAwMCkgPCBpbWFnZVNpemUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3Qgc2V0dGluZ3M6IElDb21wcmVzc0ltYWdlID0ge1xyXG4gICAgICAgICAgICBvcmllbnRhdGlvbjogMSxcclxuICAgICAgICAgICAgcmF0aW86IDUwLFxyXG4gICAgICAgICAgICBxdWFsaXR5OiA1MFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZm9yIG9yaWVudGF0aW9uXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eShcIkNFRV9Db21wcmVzc0ltZ19PcmllbnRhdGlvblwiKSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfQ29tcHJlc3NJbWdfT3JpZW50YXRpb25cIl0gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3Mub3JpZW50YXRpb24gPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfQ29tcHJlc3NJbWdfT3JpZW50YXRpb25cIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvciByYXRpb1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoXCJDRUVfQ29tcHJlc3NJbWdfQXNwZWN0UmF0aW9cIikgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX0FzcGVjdFJhdGlvXCJdICE9PSBcIlwiKSB7XHJcbiAgICAgICAgICAgIHNldHRpbmdzLnJhdGlvID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX0FzcGVjdFJhdGlvXCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IgcXVhbGl0eVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoXCJDRUVfQ29tcHJlc3NJbWdfUXVhbGl0eVwiKSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfQ29tcHJlc3NJbWdfUXVhbGl0eVwiXSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBzZXR0aW5ncy5xdWFsaXR5ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX1F1YWxpdHlcIl07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvciBtYXhXaWR0aFxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoXCJDRUVfQ29tcHJlc3NJbWdfbWF4SGVpZ2h0XCIpICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9Db21wcmVzc0ltZ19tYXhIZWlnaHRcIl0gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MubWF4V2lkdGggPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfQ29tcHJlc3NJbWdfbWF4SGVpZ2h0XCJdO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBmb3IgbWF4SGVpZ2h0XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eShcIkNFRV9Db21wcmVzc0ltZ19tYXhXaWR0aFwiKSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfQ29tcHJlc3NJbWdfbWF4V2lkdGhcIl0gIT09IFwiXCIpIHtcclxuICAgICAgICAgICAgc2V0dGluZ3MubWF4SGVpZ2h0ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX0NvbXByZXNzSW1nX21heFdpZHRoXCJdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgcmVhZGVyOiBhbnkgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICByZWFkZXIucmVhZEFzRGF0YVVSTChmaWxlKTtcclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIkJlZm9yZSBDb21wcmVzc2lvbiA6IFwiICsgZmlsZS5zaXplKVxyXG5cclxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlQ29tcHJlc3MuY29tcHJlc3NGaWxlKFxyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlc3VsdCxcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzLm9yaWVudGF0aW9uLFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MucmF0aW8sXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5xdWFsaXR5LFxyXG4gICAgICAgICAgICAgICAgc2V0dGluZ3MubWF4V2lkdGgsXHJcbiAgICAgICAgICAgICAgICBzZXR0aW5ncy5tYXhIZWlnaHRcclxuICAgICAgICAgICAgKS50aGVuKChyZXN1bHQ6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnQ29tcHJlc3NlZCBpbWFnZTogJywgcmVzdWx0KTsgIC8vIEJhc2U2NCBjb21wcmVzc2VkIGltYWdlXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXByZXNzZWRJbWFnZSA9IHJlc3VsdDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlOiBhbnkgPSBuZXcgRmlsZShbdGhpcy5iYXNlNjRUb0ZpbGUocmVzdWx0LCBmaWxlLnR5cGUsIGZpbGUubmFtZSldLCBmaWxlLm5hbWUsIHsgdHlwZTogZmlsZS50eXBlIH0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wYXlMb2FkLmZpbGVEYXRhLmF0dGFjaG1lbnROYW1lID0gaW1hZ2UubmFtZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucGF5TG9hZC5maWxlRGF0YS5maWxlU2l6ZSA9IGltYWdlLnNpemU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBheUxvYWQuZmlsZURhdGEuZmlsZSA9IGltYWdlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0uZmlsZSA9IGltYWdlO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkFmdGVyIENvbXByZXNzaW9uIDogXCIgKyBpbWFnZS5zaXplKVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93UHJldmlld0RpYWxvZyh1cmwsIGZpbGVEYXRhLCBpbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gYHByZXZpZXdNb2RhbC0ke2ZpbGVEYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWl18XFxzL2csICdfJyl9LSR7aW5kZXh9YCxcclxuICAgICAgICAgICAgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBbGVydE1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ1ByZXZpZXdNb2RhbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHVybCwvLyB1cmwsXHJcbiAgICAgICAgICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVDbG9zZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlVHlwZTogKGZpbGVEYXRhLnR5cGUuaW5jbHVkZXMoJ2ltYWdlJykpID8gJ2ltYWdlJyA6ICdkb2MnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBmaWxlRGF0YS5uYW1lXHJcbiAgICAgICAgICAgICAgICB9LCBpZCxcclxuICAgICAgICAgICAgICAgIHBhbmVsQ2xhc3M6ICdwcmV2aWV3TW9kYWwtcGFuZWwnXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIGRpYWxvZ1JlZi5hZnRlck9wZW5lZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbW9uVXRpbC5tb3ZlTWF0RGlhbG9nVG9TdGVwTW9kYWxJZkV4aXN0KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tbW9uVXRpbC5tb3ZlTWF0RGlhbG9nVG9Cb2R5KCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgcmV0dXJuIGRpYWxvZ1JlZjtcclxuICAgIH1cclxuICAgIGhhbmRsZUFjdGlvbihpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh0aGlzLmNsaWNrYWJsZV9maWxlbmFtZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFjdGlvbihpdGVtLCBpbmRleCwgdHlwZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIE9wZW4gVVJMIGluIGEgbmV3IGJyb3dzZXIgdGFiXHJcbiAgICBvcGVuVXJsSW5OZXdUYWIodXJsOnN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHdpbmRvdy5vcGVuKHVybCwgJ19ibGFuaycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhlIGZ1bmN0aW9uIGlzIGJhc2ljYWxseSB0aGUgYWN0aW9ucyBvbiB0aGUgYnV0dG9uc1xyXG4gICAgICogaS5lLiBkb3dubG9hZCwgcHJldmlldywgY2xpY2tcclxuICAgICAqIFxyXG4gICAgICogU2VjdXJpdHkgRW5oYW5jZW1lbnQ6IEZpbGUgRXh0ZW5zaW9uIFByb3RlY3Rpb25cclxuICAgICAqIC0gV2hlbiByZW5hbWluZyBmaWxlcyAodHlwZT0ncmVuYW1lJyksIG9ubHkgdGhlIGZpbGVuYW1lICh3aXRob3V0IGV4dGVuc2lvbikgaXMgZWRpdGFibGVcclxuICAgICAqIC0gVGhlIG9yaWdpbmFsIGZpbGUgZXh0ZW5zaW9uIGlzIHByZXNlcnZlZCBhbmQgZGlzcGxheWVkIGFzIHJlYWQtb25seVxyXG4gICAgICogLSBUaGlzIHByZXZlbnRzIHVzZXJzIGZyb20gY2hhbmdpbmcgZmlsZSB0eXBlcyBhY2NpZGVudGFsbHkgb3IgbWFsaWNpb3VzbHlcclxuICAgICAqIC0gSW5wdXQgdmFsaWRhdGlvbiBwcmV2ZW50cyB0eXBpbmcgb3IgcGFzdGluZyBmaWxlIGV4dGVuc2lvbnNcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHNlbGVjdGVkRmlsZSB0aGUgY3VycmVudCBmaWxlIG9iamVjdCBjb250YWluaW5nIGZpbGUgZGF0YSBhbmQgbWV0YWRhdGFcclxuICAgICAqIEBwYXJhbSBpbmRleCB0aGUgaW5kZXggb2YgdGhlIGZpbGUgaW4gdGhlIGZpbGVzIGFycmF5XHJcbiAgICAgKiBAcGFyYW0gdHlwZSB0aGUgdHlwZSBvZiB0aGUgYWN0aW9uIChyZW5hbWUsIHJlc2V0LCB1cGRhdGUsIHByZXZpZXcsIGRvd25sb2FkLCBldGMuKVxyXG4gICAgICovXHJcbiAgICBhc3luYyBhY3Rpb24oc2VsZWN0ZWRGaWxlOiBhbnksIGluZGV4OiBudW1iZXIsIHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGxldCBmaWxlRGF0YTogRmlsZSA9IHNlbGVjdGVkRmlsZS5maWxlO1xyXG4gICAgICAgIGxldCBhdHRhY2htZW50SWQ6IHN0cmluZyA9IHNlbGVjdGVkRmlsZS5hdHRhY2htZW50SWQ7XHJcbiAgICAgICAgbGV0IHVybDogc3RyaW5nID0gc2VsZWN0ZWRGaWxlLnVybDtcclxuICAgICAgICBsZXQgYXR0YWNobWVudFBhdGg6IHN0cmluZyA9IHNlbGVjdGVkRmlsZS5hdHRhY2htZW50UGF0aDtcclxuICAgICAgICBsZXQgdUlkOiBzdHJpbmcgPSBzZWxlY3RlZEZpbGUudUlkO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdyZW5hbWUnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBFeHRyYWN0IGZpbGVuYW1lIHdpdGhvdXQgZXh0ZW5zaW9uIGZvciBlZGl0aW5nXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsRmlsZU5hbWUgPSBzZWxlY3RlZEZpbGUuZmlsZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdERvdEluZGV4ID0gZnVsbEZpbGVOYW1lLmxhc3RJbmRleE9mKCcuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3REb3RJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTdG9yZSB0aGUgZmlsZW5hbWUgd2l0aG91dCBleHRlbnNpb24gYW5kIHRoZSBvcmlnaW5hbCBleHRlbnNpb24gc2VwYXJhdGVseVxyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZS5uZXdOYW1lID0gZnVsbEZpbGVOYW1lLnN1YnN0cmluZygwLCBsYXN0RG90SW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZS5vcmlnaW5hbEV4dGVuc2lvbiA9IGZ1bGxGaWxlTmFtZS5zdWJzdHJpbmcobGFzdERvdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gSGFuZGxlIGZpbGVzIHdpdGhvdXQgZXh0ZW5zaW9uIChlZGdlIGNhc2UpXHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlLm5ld05hbWUgPSBmdWxsRmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlLm9yaWdpbmFsRXh0ZW5zaW9uID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlLnJlbmFtZSA9ICFzZWxlY3RlZEZpbGUucmVuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICdyZXNldCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IHRvIG9yaWdpbmFsIGZpbGVuYW1lIHdpdGhvdXQgZXh0ZW5zaW9uXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmdWxsRmlsZU5hbWUgPSBzZWxlY3RlZEZpbGUuZmlsZS5uYW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbGFzdERvdEluZGV4ID0gZnVsbEZpbGVOYW1lLmxhc3RJbmRleE9mKCcuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGxhc3REb3RJbmRleCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGUubmV3TmFtZSA9IGZ1bGxGaWxlTmFtZS5zdWJzdHJpbmcoMCwgbGFzdERvdEluZGV4KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlLm5ld05hbWUgPSBmdWxsRmlsZU5hbWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWxlLnJlbmFtZSA9ICFzZWxlY3RlZEZpbGUucmVuYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0eXBlID09ICd1cGRhdGUnKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEZpbGUucmVuYW1lID0gIXNlbGVjdGVkRmlsZS5yZW5hbWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgKCF0aGlzLmlzU2luZ2xlVXBsb2FkZXIpIHtcclxuICAgICAgICAgICAgaWYgKFsncHJldmlldycsICdkb3dubG9hZCddLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhOiBhbnkgPSBhd2FpdCB0aGlzLmdldEN1cnJlbnRGaWxlKGZpbGVEYXRhLCBhdHRhY2htZW50SWQsIHVybCwgYXR0YWNobWVudFBhdGgsIGluZGV4LCB0eXBlKTtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhLnN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWxlRGF0YSA9IHRoaXMucHJldmlld0RpcmVjdGx5ICYmIHR5cGUgPT0gJ3ByZXZpZXcnID8gZmlsZURhdGEgOiBkYXRhLmZpbGVEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IGRhdGEudXJsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucGF5TG9hZCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlJyxcclxuICAgICAgICAgICAgICAgIGZpbGVEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudE5hbWU6IGZpbGVEYXRhLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZTogZmlsZURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgdUlkOiB1SWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsZVNpemU6IGZpbGVEYXRhLnNpemUsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiB0aGlzLmlzU2luZ2xlQXBpS2V5ID8gdGhpcy5maWVsZERhdGEuYXBpX2tleSA6IHRoaXMuZmllbGREYXRhLnJlcXVlc3RfYXBpX2tleVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAncmVtb3ZlJzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBjaGVjayBmb3IgYWRkaXRpb25hbCBwYXJhbWV0ZXJcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLlByb21wdERlbGV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGByZW1vdmVNb2RhbC0ke2ZpbGVEYXRhLm5hbWUudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9bXmEtekEtWl18XFxzL2csICdfJyl9LSR7aW5kZXh9YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXR0YWNobWVudEluTW9kYWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBbGVydE1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLlByb21wdERlbGV0ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsb3NlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlhbG9nUmVmLmFmdGVyT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uVXRpbC5tb3ZlTWF0RGlhbG9nVG9TdGVwTW9kYWxJZkV4aXN0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uVXRpbC5tb3ZlTWF0RGlhbG9nVG9Cb2R5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVEYXRhKGZpbGVEYXRhLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlRGF0YShmaWxlRGF0YSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgdGhhdCBmaWxlbmFtZSBpcyBub3QgZW1wdHlcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXNlbGVjdGVkRmlsZS5uZXdOYW1lIHx8IHNlbGVjdGVkRmlsZS5uZXdOYW1lLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gU2hvdyBlcnJvciBtZXNzYWdlIG9yIHJlc2V0IHRvIG9yaWdpbmFsIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRmlsZW5hbWUgY2Fubm90IGJlIGVtcHR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmlsZS5yZW5hbWUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29tYmluZSB0aGUgZWRpdGVkIGZpbGVuYW1lIHdpdGggdGhlIG9yaWdpbmFsIGV4dGVuc2lvblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZ1bGxOZXdOYW1lID0gc2VsZWN0ZWRGaWxlLm5ld05hbWUudHJpbSgpICsgKHNlbGVjdGVkRmlsZS5vcmlnaW5hbEV4dGVuc2lvbiB8fCAnJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXlMb2FkLmZpbGVEYXRhLm5ld05hbWUgPSBmdWxsTmV3TmFtZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBheUxvYWQuZmlsZURhdGEuYXR0YWNobWVudElkID0gc2VsZWN0ZWRGaWxlLmF0dGFjaG1lbnRJZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpbGVOYW1lKGZpbGVEYXRhLCBpbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdwcmV2aWV3JzpcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsaW5nIG9uIFByZXZpZXdcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNBdHRhY2htZW50SW5Nb2RhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld0RpcmVjdGx5SW5OZXdUYWIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuVXJsSW5OZXdUYWIodXJsKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9yIFByZXZpZXdpbmcgRG9jdW1lbnRzIERpcmVjdGx5IHdpdGggU2lnbmVkIFVSTCBoYXZpbmcgSGVhZGVyIChDb250ZW50LURpc3Bvc2l0aW9uOiBpbmxpbmUpICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld0RpcmVjdGx5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQcmV2aWV3RGlhbG9nKHVybCwgZmlsZURhdGEsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZpZXdVcmwgPSBhd2FpdCB0aGlzLnJlYWRGaWxlQXNEYXRhVVJMKGZpbGVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1ByZXZpZXdEaWFsb2cocHJldmlld1VybCwgZmlsZURhdGEsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdkb3dubG9hZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZmlsZVVybCA9IGF3YWl0IHRoaXMucmVhZEZpbGVBc0RhdGFVUkwoZmlsZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvd25sb2FkTGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZExpbmsuaHJlZiA9IGZpbGVVcmw7XHJcbiAgICAgICAgICAgICAgICAgICAgZG93bmxvYWRMaW5rLmRvd25sb2FkID0gZmlsZURhdGEubmFtZTtcclxuICAgICAgICAgICAgICAgICAgICBkb3dubG9hZExpbmsuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ3VwbG9hZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdCZWZvcmVVcGxvYWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmb3IgdXBsb2FkIHNldCBhdHRhY2htZW50IHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLkF0dGFjaG1lbnRQYXRobmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBheUxvYWQuZmlsZURhdGEuYXR0YWNobWVudFBhdGggPSB0aGlzLmdldE5hbWUodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLkF0dGFjaG1lbnRQYXRobmFtZSwgJycsIC9cXHsoLio/KVxcfS9nKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBheUxvYWQuZmlsZURhdGEuYXR0YWNobWVudFBhdGggPSAnJztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzQXR0YWNobWVudEJsb2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWV0YUl0ZW0gb2YgT2JqZWN0LmtleXModGhpcy5tZXRhZGF0YUZpZWxkcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm1ldGFkYXRhRmllbGRzW21ldGFJdGVtXS5maWVsZF90eXBlICE9ICdsYWJlbCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMubWV0YWRhdGFGaWVsZHNbbWV0YUl0ZW1dLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXlMb2FkLmZpbGVEYXRhW21ldGFJdGVtXSA9IGtleVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmlsZURhdGEudHlwZS5pbmNsdWRlcygnaW1hZ2UnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDb21wcmVzc0FuZENvbnZlcnRUb1BkZiddPy50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuY29udmVydEltYWdlVG9QREYoZmlsZURhdGEsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMTAwMCk7IC8vIDEgc2Vjb25kIGRlbGF5XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0NvbXByZXNzSW1hZ2UnXT8udG9Mb3dlckNhc2UoKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLmNvbXByZXNzSW1hZ2UoZmlsZURhdGEsIGluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdXBsb2FkIHR5cGUgZmxhZyBpcyBuZWVkZWRcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KCdDRUVfdXBsb2FkX3R5cGUnKSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV91cGxvYWRfdHlwZSddID09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vVG8gaWRlbnRpZnkgbmV3IHVwbG9hZGVkIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXlMb2FkWyd1cGxvYWRUeXBlJ10gPSBcIk5ld1wiO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgX3BheWxvYWQgPSB0aGlzLnBheUxvYWQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkU3ViID0gdGhpcy5jZWVJbnRlcm5hbEVtaXR0ZXIuZmlsZVVwbG9hZEFjdGlvbkVtaXR0ZXIuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnR5cGUgPT09ICdPblVwbG9hZCcgJiYgcmVzLnBheUxvYWQuZmlsZURhdGEudUlkID09PSBfcGF5bG9hZC5maWxlRGF0YS51SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGxvYWRTdWIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblVwbG9hZCcsIHt9LCBmYWxzZSwgX3BheWxvYWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3BvbnNlRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZU11bHRpcGxlQVBJS2V5ID0gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3BvbnNlS2V5ID0gcmVzcG9uc2VNdWx0aXBsZUFQSUtleS5maW5kKGkgPT4gaS5pbmNsdWRlcyhyZXMucmVzcG9uc2VEYXRhLmhhbmRsZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlS2V5ICYmIHJlc3BvbnNlS2V5LmluY2x1ZGVzKCcjIycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZUtleSA9IHJlc3BvbnNlS2V5LnNwbGl0KCcjIycpLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYXNDdXN0b21FdmVudEhhbmRsZXI6IGJvb2xlYW4gPSByZXMucmVzcG9uc2VEYXRhPy5oYXNDdXN0b21FdmVudEhhbmRsZXIgfHwgZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3BvbnNlRGF0YS5oYW5kbGVyID09PSAnZmlsZS91cGxvYWQnIHx8IGhhc0N1c3RvbUV2ZW50SGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VEYXRhID0gX3BheWxvYWQuZmlsZURhdGEuYXBpS2V5ID8gcmVzLnJlc3BvbnNlRGF0YS5kYXRhIDogKHJlcy5yZXNwb25zZURhdGEuZGF0YVsnRklMRV9VUExPQURfREFUQSddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9wYXlsb2FkLmZpbGVEYXRhLmFwaUtleSA9IHRoaXMuaXNTaW5nbGVBcGlLZXkgPyB0aGlzLmZpZWxkRGF0YS5hcGlfa2V5IDogcmVzcG9uc2VLZXk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSAocmVzLnJlc3BvbnNlRGF0YS5kYXRhW19wYXlsb2FkLmZpbGVEYXRhLmFwaUtleSB8fCAnRklMRV9VUExPQURfREFUQSddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UudXBsb2FkRW1pdHRlci5lbWl0KHJlcy5yZXNwb25zZURhdGEuZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzcG9uc2VEYXRhLmhhbmRsZXIgPT09ICdmaWxlL3VwbG9hZCcgfHwgaGFzQ3VzdG9tRXZlbnRIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ucmVzcG9uc2VEYXRhLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLntcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudElkOiByZXNwb25zZURhdGFbJ2lkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRUeXBlOiByZXNwb25zZURhdGFbJ3R5cGUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudFVybDogcmVzcG9uc2VEYXRhWyd1cmwnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudFNpemU6IHJlc3BvbnNlRGF0YVsnc2l6ZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50TmFtZTogcmVzcG9uc2VEYXRhWyduYW1lJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwbG9hZEF0dGFjaG1lbnRQYXRoOiByZXNwb25zZURhdGFbJ2F0dGFjaG1lbnRQYXRoJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBpZiB1cGxvYWQgdHlwZSBmbGFnIGlzIG5lZWRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eSgnQ0VFX3VwbG9hZF90eXBlJykgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfdXBsb2FkX3R5cGUnXSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vVG8gaWRlbnRpZnkgbmV3IHVwbG9hZGVkIGZpbGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGFbJ3VwbG9hZFR5cGUnXSA9IFwiTmV3XCI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3BvbnNlRGF0YVsnaWQnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZURhdGFbJ3R5cGUnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSByZXNwb25zZURhdGFbJ3VybCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3BvbnNlRGF0YVsnc2l6ZSddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHJlc3BvbnNlRGF0YVsnYXR0YWNobWVudFBhdGgnXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSBbcmVzcG9uc2VEYXRhXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNwb25zZURhdGEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW46IG51bWJlciA9IE51bWJlcihyZXNwb25zZURhdGEubGVuZ3RoKSAtIDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVVwbG9hZGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMucHVzaCh0aGlzLnNpbmdsZVVwbG9hZEZpbGVEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmZpbGVzLnB1c2godGhpcy5zaW5nbGVVcGxvYWRGaWxlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVkQ291bnQrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpbGVzW2luZGV4XSAmJiByZXNwb25zZURhdGFbbGVuXSAmJiByZXNwb25zZURhdGFbbGVuXVsnYXR0YWNobWVudElkJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS5hdHRhY2htZW50SWQgPSByZXNwb25zZURhdGFbbGVuXVsnYXR0YWNobWVudElkJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0udXJsID0gcmVzcG9uc2VEYXRhW2xlbl1bJ2F0dGFjaG1lbnRVcmwnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS5hdHRhY2htZW50UGF0aCA9IHJlc3BvbnNlRGF0YVtsZW5dWyd1cGxvYWRBdHRhY2htZW50UGF0aCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbWV0YUl0ZW0gb2YgT2JqZWN0LmtleXModGhpcy5tZXRhZGF0YUZpZWxkcykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWwsIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gPSB0aGlzLmdldER5bmFtaWNWYWx1ZShtZXRhSXRlbSwgcmVzcG9uc2VEYXRhW2xlbl1bbWV0YUl0ZW1dKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XVsnY3VzdG9tJ10ucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBrZXk6IG1ldGFJdGVtLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgZGF0YSA9IHRoaXMuZmlsZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGF0YVtpbmRleF0udXBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuZmlsZXMgPSBkYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXNbaW5kZXhdLnVwbG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWxlcy5sZW5ndGggPD0gMCAmJiB0aGlzLmF1dG9VcGxvYWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvck1zZ0JveCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlVXBsb2FkZXIgJiYgdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYXNVcGxvYWRlZERhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoKHRoaXMuaXNTaW5nbGVVcGxvYWRlciAmJiB0aGlzLmZpbGVzICYmIHRoaXMuZmlsZXMubGVuZ3RoID4gMCkgfHwgKCF0aGlzLmlzU2luZ2xlVXBsb2FkZXIgJiYgdGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA9PSB0aGlzLnVwbG9hZGVkQ291bnQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JUeXBlID0gXCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGVja1ZhbGlkYXRlQU5EQ2hlY2tNYW5kYXRvcnkoeyBtYW5kYXRvcnk6IHRydWUsIHZhbGlkOiBmYWxzZSB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRhY2htZW50QXBwRGF0YSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF0dGFjaG1lbnRzKCd1cGxvYWQnLCB0aGlzLmh0bWxfaWQsIHJlc3BvbnNlRGF0YVtsZW5dLCAnJywgdGhpcy5pc1NpbmdsZVVwbG9hZGVyKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwICYmIHRoaXMuZmlsZXMubGVuZ3RoICE9IHRoaXMudXBsb2FkZWRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5KHsgbWFuZGF0b3J5OiB0cnVlLCB2YWxpZDogZmFsc2UgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF0dGFjaG1lbnRBcHBEYXRhKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF0dGFjaG1lbnRBcHBEYXRhKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDIwMDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsZWFyQmxvY2tEYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlVXBsb2FkZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0RmlsZVRleHQgPSAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydzZWxlY3RGaWxlVGV4dCddKSA/IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnc2VsZWN0RmlsZVRleHQnXSA6IFwiU2VsZWN0IGEgZmlsZVwiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Mb2FkJywge30sIHRydWUsIHRoaXMucGF5TG9hZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2NsZWFyJzpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFRvdGFsU2l6ZUFuZENvdW50KC1maWxlRGF0YS5zaXplLCAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICgodGhpcy50b3RhbENvdW50IC0gdGhpcy51cGxvYWRlZENvdW50KSA9PSAwICYmIHRoaXMuY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5KHsgbWFuZGF0b3J5OiB0cnVlLCB2YWxpZDogZmFsc2UgfSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRhY2htZW50QXBwRGF0YSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3Igb2NjdXJyZWQgd2hpbGUgcGVyZm9ybWluZyBvcGVyYXRpb246ICR7dHlwZX0gZm9yIGF0dGFjaG1lbnQgJHthdHRhY2htZW50SWR9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnJvb3REYXRhWydyZXBlYXRhYmxlLScgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ3JlcGVhdGFibGUtJyArIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF1bdGhpcy5odG1sX2lkXSA9IHRoaXMuZmlsZXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlYWRGaWxlQXNEYXRhVVJMKGZpbGU6IEZpbGUpOiBQcm9taXNlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWRlbmQgPSAoKSA9PiByZXNvbHZlKHJlYWRlci5yZXN1bHQgYXMgc3RyaW5nKTtcclxuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSByZWplY3Q7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZUF0dGFjaG1lbnRBcHBEYXRhKGlzQXR0YWNobWVudFZhbGlkKSB7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5nZXRJbmRpdmlkdWFsQXBwRGF0YSh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKS5waXBlKHRha2UoMSkpLnN1YnNjcmliZShyID0+IHtcclxuICAgICAgICAgICAgaWYgKHIubGVuZ3RoID4gMCAmJiB0aGlzLmZpZWxkRGF0YS5odG1sX2lkID09IHJbMF0uaWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHJbMF0udmFsdWUsIGlzQXR0YWNobWVudFZhbGlkKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKFtdLCBpc0F0dGFjaG1lbnRWYWxpZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5hbWVBdHRhY2htZW50QXBwRGF0YShuZXdOYW1lOiBzdHJpbmcsIGluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAobmV3TmFtZSAhPT0gXCJcIikge1xyXG4gICAgICAgICAgICBjb25zdCBhdHRhY2htZW50RGF0YSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuaHRtbF9pZCk7XHJcbiAgICAgICAgICAgIGlmIChhdHRhY2htZW50RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlczogYW55ID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhdHRhY2htZW50RGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBhdHRhY2htZW50RGF0YS5mb3JFYWNoKCh2YWwsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbCA9IE9iamVjdC5hc3NpZ24oe30sIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi52YWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0YWNobWVudE5hbWU6IG5ld05hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnRfbmFtZTogbmV3TmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiBuZXdOYW1lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaCh2YWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHZhbHVlcywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2luZ2xlRmlsZVVwbG9hZEFjdGlvbigpIHtcclxuICAgICAgICBpZiAodGhpcy5maWxlcyAmJiB0aGlzLmZpbGVzLmxlbmd0aCA+IDAgJiYgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLlByb21wdFJlcGxhY2UpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBgcmVwbGFjZU1vZGFsYDtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzQXR0YWNobWVudEluTW9kYWwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBbGVydE1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdBbGVydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyLlByb21wdFJlcGxhY2UsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcGFuZWxDbGFzczogJ3JlcGxhY2UtYWxlcnQtcGFuZWwnLFxyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZShyZXN1bHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IHRoaXMuc2luZ2xlVXBsb2FkRmlsZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGxvYWRlZENvdW50LS07XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY3Rpb24oc2VsZWN0ZWRGaWxlLCAwLCAndXBsb2FkJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkRmlsZSA9IHRoaXMuc2luZ2xlVXBsb2FkRmlsZURhdGE7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNpbmdsZVVwbG9hZEZpbGVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFjdGlvbihzZWxlY3RlZEZpbGUsIDAsICd1cGxvYWQnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREeW5hbWljVmFsdWUoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBsZXQgbGFiZWwgPSB0aGlzLm1ldGFkYXRhRmllbGRzW2tleV0ubGFiZWw7XHJcbiAgICAgICAgaWYgKGxhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGxhYmVsLnJlcGxhY2UoJygoZHluYW1pYykpJywgJycpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUFyciA9IHJldHVyblZhbHVlLnNwbGl0KC9bJSVdLyk7XHJcbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIGZvciAobGV0IHYgb2YgdmFsdWVBcnIpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2LmluY2x1ZGVzKGtleSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodi5pbmNsdWRlcygnOjo6JykgJiYgdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0ID0gdi5zcGxpdCgnOjo6JykucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHJldHVyblZhbHVlICs9IG1vbWVudC51bml4KHZhbHVlIC8gMTAwMCkuZm9ybWF0KGZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlICs9IG1vbWVudChOdW1iZXIodmFsdWUpKS5mb3JtYXQoZm9ybWF0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblZhbHVlICs9IHY7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGFiZWwgPSAnJztcclxuICAgICAgICAgICAgdmFsdWUgPSByZXR1cm5WYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgbGFiZWwsXHJcbiAgICAgICAgICAgIHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhckJsb2NrRGF0YSgpIHtcclxuICAgICAgICBjb25zdCBtZXRhRmllbGRJZHM6IGFueSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgbWV0YUl0ZW0gb2YgT2JqZWN0LmtleXModGhpcy5tZXRhZGF0YUZpZWxkcykpIHtcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSB0aGlzLm1ldGFkYXRhRmllbGRzW21ldGFJdGVtXTtcclxuICAgICAgICAgICAgaWYgKGZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maW5kSW5kZXgoaSA9PiBpLnBhcmFtZXRlcl90eXBlID09PSAnbWV0YWRhdGFfc2tpcF9yZW1vdmUnICYmIGkudmFsdWUgPT09ICd0cnVlJykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBtZXRhRmllbGRJZHMucHVzaChmaWVsZC51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuY2xlYXJEYXRhVXNpbmdVbmlxdWVJZHMobWV0YUZpZWxkSWRzLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0Rm9yRW1wdHlTZXNzaW9uLmVtaXQoeyB1bmlxdWVfaWRzOiBtZXRhRmllbGRJZHMsIGFwaUtleXM6IFtdIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q3VycmVudEZpbGUoZmlsZURhdGE6IEZpbGUsIGF0dGFjaG1lbnRJZDogc3RyaW5nLCB1cmw6IHN0cmluZywgYXR0YWNobWVudFBhdGg6IHN0cmluZywgaW5kZXg6IG51bWJlciwgdHlwZTogc3RyaW5nKSB7XHJcbiAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnBheUxvYWQuZmlsZURhdGEuYXR0YWNobWVudFBhdGggPSBhdHRhY2htZW50UGF0aDtcclxuICAgICAgICAgICAgdGhpcy5wYXlMb2FkLmZpbGVEYXRhLmF0dGFjaG1lbnRJZCA9IGF0dGFjaG1lbnRJZDtcclxuICAgICAgICAgICAgY29uc3QgZmlsZVVwbG9hZEVtaXR0ZXIgPSB0aGlzLmNlZUludGVybmFsRW1pdHRlci5maWxlVXBsb2FkQWN0aW9uRW1pdHRlci5zdWJzY3JpYmUoYXN5bmMgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMudHlwZS50b0xvd2VyQ2FzZSgpID09PSAnb25wcmV2aWV3Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpbGVVcGxvYWRFbWl0dGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5yZXNwb25zZURhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZXNwb25zZURhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ3VzdG9tRXZlbnRIYW5kbGVyOiBib29sZWFuID0gcmVzLnJlc3BvbnNlRGF0YT8uaGFzQ3VzdG9tRXZlbnRIYW5kbGVyIHx8IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChyZXMucmVzcG9uc2VEYXRhLmhhbmRsZXIgPT09ICdmaWxlL2ZldGNoJyB8fCBoYXNDdXN0b21FdmVudEhhbmRsZXIpICYmIHJlcy5yZXNwb25zZURhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMucmVzcG9uc2VEYXRhLmRhdGFbJ3VybCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlRGF0YSA9IHJlcy5yZXNwb25zZURhdGEuZGF0YTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gcmVzcG9uc2VEYXRhWyd1cmwnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5yZXNwb25zZURhdGEuZGF0YVsnRklMRV9VUExPQURfREFUQSddICYmIHJlcy5yZXNwb25zZURhdGEuZGF0YVsnRklMRV9VUExPQURfREFUQSddWyd1cmwnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSByZXMucmVzcG9uc2VEYXRhLmRhdGFbJ0ZJTEVfVVBMT0FEX0RBVEEnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gcmVzcG9uc2VEYXRhWyd1cmwnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZURhdGEgPSAocmVzLnJlc3BvbnNlRGF0YS5kYXRhW3RoaXMucGF5TG9hZC5maWxlRGF0YS5hcGlLZXkgfHwgJ0ZJTEVfVVBMT0FEX0RBVEEnXSkgPT09IHVuZGVmaW5lZCA/IHJlcy5yZXNwb25zZURhdGEuZGF0YSA6IHJlcy5yZXNwb25zZURhdGEuZGF0YVt0aGlzLnBheUxvYWQuZmlsZURhdGEuYXBpS2V5IHx8ICdkb2N1bWVudC9wcmV2aWV3J107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzcG9uc2VEYXRhKSAmJiByZXNwb25zZURhdGFbMF0gJiYgcmVzcG9uc2VEYXRhWzBdWydhdHRhY2htZW50VXJsJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsID0gcmVzcG9uc2VEYXRhWzBdWydhdHRhY2htZW50VXJsJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICgocmVzLnJlc3BvbnNlRGF0YS5oYW5kbGVyID09PSAnZmlsZS9mZXRjaCcgfHwgaGFzQ3VzdG9tRXZlbnRIYW5kbGVyKSAmJiByZXMucmVzcG9uc2VEYXRhLmRhdGEgJiYgKHJlcy5yZXNwb25zZURhdGEuZGF0YSkuaGFzT3duUHJvcGVydHkoJ2FwaV9yZXNwb25zZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpUmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcy5yZXNwb25zZURhdGEuZGF0YS5hcGlfcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhcGlSZXNwb25zZS5oYXNPd25Qcm9wZXJ0eSgncmVzdWx0JykgJiYgKGFwaVJlc3BvbnNlLnJlc3VsdCkuaGFzT3duUHJvcGVydHkoJ3VybCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCA9IGFwaVJlc3BvbnNlLnJlc3VsdC51cmw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh1cmwpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJldmlld0RpcmVjdGx5ICYmIHR5cGUgPT0gXCJwcmV2aWV3XCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzcyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyBzdWNjZXNzLCBmaWxlRGF0YSwgdXJsIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsb2IgPSBhd2FpdCByZXNwb25zZS5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gaWYgZW5jcnlwdGVkIGlzIHRydWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGVuIG9ubHkgZ28gYWhlYWQgYW5kIGRlY3J5cHQgYlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVuY3J5cHRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRvIHRoZSBzdHJpbmcgZnJvbSBibG9iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0ckZpbGUgPSBhd2FpdCBQcm9taXNlLnJlc29sdmUodGhpcy5maWxlVXBsb2FkU2VydmljZS5jcmVhdGVTdHJpbmdGcm9tQmxvYihibG9iLCAnZGVjcnlwdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZGVjcnlwdCB0aGUgc3RyaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY3J5cHRSZXMgPSBhd2FpdCB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlLmVuY3J5cHREZWNyeXB0KCdkZWNyeXB0Jywgc3RyRmlsZSkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlY3J5cHRSZXMuc3RhdHVzID09IDIwMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVjcnlwdFJlcy5ib2R5WydjcmVkZW50aWFscyddICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWNyeXB0UmVzLmJvZHlbJ2NyZWRlbnRpYWxzJ11bJ3BsYWluVGV4dCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBkZWNvZGUgdGhlIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY3J5cHRlZFN0cmluZyA9IHRoaXMuZmlsZVVwbG9hZFNlcnZpY2UucmV0dXJuRGVjcnlwdGVkUmVzdWx0KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ckZpbGUsIGRlY3J5cHRSZXMuYm9keVsnY3JlZGVudGlhbHMnXVsncGxhaW5UZXh0J10pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZmV0Y2ggdGhlIGJhc2U2NCBzdHJpbmdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlY29kZWRSZXMgPSBhd2FpdCBmZXRjaChkZWNyeXB0ZWRTdHJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ2V0IHRoZSBibG9iXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBibG9iID0gYXdhaXQgZGVjb2RlZFJlcy5ibG9iKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsZURhdGEgPSBuZXcgRmlsZShbYmxvYl0sIGZpbGVEYXRhLm5hbWUsIHsgdHlwZTogZmlsZURhdGEudHlwZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBUT0RPOiBjaGVjayBsb2NhbCBjYWNoaW5nIHRoZSBkYXRhIHdoZW4gY2xpY2tlZCBvbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRklYTUU6IEZpeCB0aGUgY2FjaGluZyB3aGVuIG9uY2UgZG93bmxvYWQgaXMgY2xpY2tlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIChyZXMudHlwZS50b0xvd2VyQ2FzZSgpICE9PSAnb25wcmV2aWV3Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aGlzLmZpbGVzW2luZGV4XS5maWxlID0gZmlsZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIHRoaXMuZmlsZXNbaW5kZXhdLnVybCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS5maWxlID0gZmlsZURhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlc1tpbmRleF0udXJsID0gdXJsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsgc3VjY2VzcywgZmlsZURhdGEsIHVybCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoaWxlIGZldGNoaW5nIGZpbGUgZm9yIGF0dGFjaG1lbnRJZDogJHthdHRhY2htZW50SWR9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdCh7IHN1Y2Nlc3MsIGZpbGVEYXRhLCB1cmwgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciB3aGlsZSBmZXRjaGluZyBmaWxlIGZvciBhdHRhY2htZW50SWQ6ICR7YXR0YWNobWVudElkfSwgZXJyb3IgaXMgJHtlcnJvcn1gKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KHsgc3VjY2VzcywgZmlsZURhdGEsIHVybCB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKFsncHJldmlldycsICdkb3dubG9hZCddLmluY2x1ZGVzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBheUxvYWRbJ2V4dHJhUXVlcnlQYXJhbXMnXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBcInByZXZpZXdfZG93bmxvYWRcIjogdHlwZSA9PSBcInByZXZpZXdcIiA/IHRydWUgOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uUHJldmlldycsIHt9LCBmYWxzZSwgdGhpcy5wYXlMb2FkKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgZGVsZXRlcyB0aGUgY3VycmVudCBmaWxlIGZyb20gdGhlIG1lbW9yeSBhbmRcclxuICAgICAqIGNhbGxzIHRoZSBvblJlbW92ZSBIYW5kbGVyXHJcbiAgICAgKiBAcGFyYW0gZmlsZURhdGEgdGhlIGN1cnJlbnQgZmlsZSBkYXRhXHJcbiAgICAgKiBAcGFyYW0gaW5kZXggdGhlIGN1cnJlbnQgaW5kZXggb2YgdGhlIGZpbGUgdGhhdFxyXG4gICAgICogaXMgbmVlZGVkIHRvIGJlIHJlbW92ZWRcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWxldGVEYXRhKGZpbGVEYXRhLCBpbmRleCkge1xyXG4gICAgICAgIHRoaXMucGF5TG9hZC5maWxlRGF0YS5hdHRhY2htZW50UGF0aCA9IHRoaXMuZmlsZXNbaW5kZXhdLmF0dGFjaG1lbnRQYXRoO1xyXG4gICAgICAgIHRoaXMucGF5TG9hZC5maWxlRGF0YS5hdHRhY2htZW50SWQgPSB0aGlzLmZpbGVzW2luZGV4XS5hdHRhY2htZW50SWQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJGdW5jID0gcmVzID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlcy50eXBlID09ICdPblJlbW92ZScpIHtcclxuICAgICAgICAgICAgICAgIGZpbGVVcGxvYWRFbWl0dGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB1cGxvYWRFbWl0dGVyLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLnJlc3BvbnNlRGF0YS5zdGF0dXNDb2RlID09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5yZW1vdmVGaWxlRW1pdHRlci5lbWl0KHRoaXMucGF5TG9hZC5maWxlRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRUb3RhbFNpemVBbmRDb3VudCgtZmlsZURhdGEuc2l6ZSwgLTEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmlsZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIGZpbGVzXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRhY2htZW50cygnZGVsZXRlJywgdGhpcy5odG1sX2lkLCB7fSwgdGhpcy5wYXlMb2FkLmZpbGVEYXRhLmF0dGFjaG1lbnRJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWxlcy5sZW5ndGggPyB0aGlzLmZpbGVzIDoge30pO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwbG9hZGVkQ291bnQtLTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmlsZXMgJiYgdGhpcy5maWxlcy5sZW5ndGggPiAwICYmIHRoaXMuZmlsZXMubGVuZ3RoICE9IHRoaXMudXBsb2FkZWRDb3VudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRhY2htZW50QXBwRGF0YShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jaGVja1ZhbGlkYXRlQU5EQ2hlY2tNYW5kYXRvcnkoeyBtYW5kYXRvcnk6IHRydWUsIHZhbGlkOiBmYWxzZSB9KSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBdHRhY2htZW50QXBwRGF0YSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIDI1MDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGZpbGVVcGxvYWRFbWl0dGVyID0gdGhpcy5jZWVJbnRlcm5hbEVtaXR0ZXIuZmlsZVVwbG9hZEFjdGlvbkVtaXR0ZXIuc3Vic2NyaWJlKGhhbmRsZXJGdW5jKTtcclxuICAgICAgICBjb25zdCB1cGxvYWRFbWl0dGVyID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnVwbG9hZEVtaXR0ZXIuc3Vic2NyaWJlKGhhbmRsZXJGdW5jKTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uUmVtb3ZlJywge30sIGZhbHNlLCB0aGlzLnBheUxvYWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlRmlsZU5hbWUoZmlsZURhdGEsIGluZGV4KSB7XHJcbiAgICAgICAgY29uc3QgZmlsZVVwbG9hZEVtaXR0ZXIgPSB0aGlzLmNlZUludGVybmFsRW1pdHRlci5maWxlVXBsb2FkQWN0aW9uRW1pdHRlci5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgZmlsZVVwbG9hZEVtaXR0ZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgY29uc3QgYWN0dWFsSW5kZXggPSB0aGlzLmZpbGVzLmZpbmRJbmRleChmID0+IGYuYXR0YWNobWVudElkID09IHJlcy5wYXlMb2FkLmZpbGVEYXRhLmF0dGFjaG1lbnRJZClcclxuICAgICAgICAgICAgaWYoYWN0dWFsSW5kZXggIT0gaW5kZXgpIHJldHVybjsgLy8gSWdub3JlIGlmIHRoZSByZXNwb25zZSBpcyBub3QgZm9yIHRoZSBjdXJyZW50IGZpbGUgYmVpbmcgcmVuYW1lZFxyXG4gICAgICAgICAgICBpZiAocmVzLnR5cGUgPT0gJ09uUmVuYW1lJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlcy5yZXNwb25zZURhdGEuc3RhdHVzQ29kZSA9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9yVHlwZSA9IFwiXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSB0aGlzLmZpbGVzW2luZGV4XS5maWxlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdOYW1lID0gdGhpcy5wYXlMb2FkLmZpbGVEYXRhLm5ld05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIC8vIENyZWF0ZSBhIG5ldyBGaWxlIG9iamVjdCB3aXRoIHRoZSB1cGRhdGVkIG5hbWVcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZEZpbGUgPSBuZXcgRmlsZShbZmlsZV0sIG5ld05hbWUsIHsgdHlwZTogZmlsZS50eXBlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyAvLyBSZXBsYWNlIHRoZSBvcmlnaW5hbCBmaWxlIGluIHRoZSBhcnJheVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpbGVzW2luZGV4XS5maWxlID0gdXBkYXRlZEZpbGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVuYW1lQXR0YWNobWVudEFwcERhdGEobmV3TmFtZSwgaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZSBpZiAocmVzLnJlc3BvbnNlRGF0YS5zdGF0dXNDb2RlID09IDUwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZpbGVTZWxlY3RFcnJvcignJywgJ2R1cGxpY2F0ZV9maWxlX25hbWVfZXJyb3InKTtcclxuICAgICAgICAgICAgICAgICAgICAvLyBTaG93IGVycm9yIG1lc3NhZ2Ugb3IgcmVzZXQgdG8gb3JpZ2luYWwgbmFtZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPblJlbmFtZScsIHt9LCBmYWxzZSwgdGhpcy5wYXlMb2FkKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhID0gKHJlcykgPT4ge1xyXG4gICAgICAgIC8vIE5vdCBOZWVkZWRcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclZhbHVlKGV2ZW50KSB7XHJcbiAgICAgICAgLy8gTm90IE5lZWRlZFxyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc3QgZmllbGQgPSB0aGlzLmN1c3RvbUtleSA/IHsgLi4udGhpcy5maWVsZERhdGEsIC4uLnsgJ3Jlc3BvbnNlX2FwaV9rZXknOiB0aGlzLmN1c3RvbUtleSB9IH0gOiB0aGlzLmZpZWxkRGF0YTtcclxuICAgICAgICBjb25zdCBmaWVsZCA9IHRoaXMuZmllbGREYXRhO1xyXG4gICAgICAgIHRoaXMuZ2V0RHluYW1pY0xhYmVsKGRhdGEpO1xyXG4gICAgICAgIGNvbnN0IGFwaURhdGEgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGZpZWxkLCBkYXRhKTtcclxuICAgICAgICBpZiAoYXBpRGF0YSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhc1VwbG9hZGVkRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrVmFsaWRhdGVBTkRDaGVja01hbmRhdG9yeSh7IG1hbmRhdG9yeTogdHJ1ZSwgdmFsaWQ6IGZhbHNlIH0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF0dGFjaG1lbnRBcHBEYXRhKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXR0YWNobWVudERhdGEoYXBpRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQXR0YWNobWVudHMoJycsIHRoaXMuaHRtbF9pZCwgYXBpRGF0YSk7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmlsZXMubGVuZ3RoID8gdGhpcy5maWxlcyA6IHt9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBjaGVja01ldGFEYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZXRhZGF0YUZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKHRoaXMubWV0YWRhdGFGaWVsZHMpLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbUZpZWxkIG9mIHRoaXMubWV0YUZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXRhS2V5ID0gbUZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maW5kKChpKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ21ldGFkYXRhX2tleSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWV0YUtleSAmJiBtZXRhS2V5LnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXlWYWx1ZSA9IG1ldGFLZXkudmFsdWUuc3BsaXQoJ3wnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVZhbHVlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGFiZWwgPSAoa2V5VmFsdWUubGVuZ3RoID09PSAyKSA/IGtleVZhbHVlWzFdIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm1ldGFkYXRhRmllbGRzW2tleV0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubUZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgc2V0QXR0YWNobWVudERhdGEoYXBpRGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc0F0dGFjaG1lbnRCbG9jaykge1xyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLmNoZWNrTWV0YURhdGEoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50b3RhbENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnRvdGFsU2l6ZSA9IDA7XHJcbiAgICAgICAgdGhpcy51cGxvYWRlZENvdW50ID0gMDtcclxuICAgICAgICB0aGlzLmZpbGVzID0gW107XHJcbiAgICAgICAgY29uc3QgZiA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgZCBvZiBhcGlEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVwbG9hZGVkRmlsZURhdGE6IElGaWxlID0ge1xyXG4gICAgICAgICAgICAgICAgcmVuYW1lOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVwbG9hZGVkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudElkOiBkLmF0dGFjaG1lbnRJZCxcclxuICAgICAgICAgICAgICAgIHVybDogZC5hdHRhY2htZW50VXJsLFxyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudFBhdGg6IGQudXBsb2FkQXR0YWNobWVudFBhdGgsXHJcbiAgICAgICAgICAgICAgICBmaWxlOiBuZXcgRmlsZShbbmV3IEFycmF5QnVmZmVyKHBhcnNlSW50KGQuYXR0YWNobWVudFNpemUpKV0sIGQuYXR0YWNobWVudE5hbWUsIHsgdHlwZTogZC5hdHRhY2htZW50VHlwZSB9KSxcclxuICAgICAgICAgICAgICAgIGN1c3RvbTogW10sXHJcbiAgICAgICAgICAgICAgICB1SWQ6IERhdGUubm93KCkudG9TdHJpbmcoKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnVwbG9hZGVkQ291bnQrKztcclxuICAgICAgICAgICAgZm9yIChjb25zdCBtZXRhSXRlbSBvZiBPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhRmllbGRzKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsLCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSA9IHRoaXMuZ2V0RHluYW1pY1ZhbHVlKG1ldGFJdGVtLCBkW21ldGFJdGVtXSk7XHJcbiAgICAgICAgICAgICAgICB1cGxvYWRlZEZpbGVEYXRhLmN1c3RvbS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogbGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAga2V5OiBtZXRhSXRlbSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdmFsdWVcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VG90YWxTaXplQW5kQ291bnQoTnVtYmVyKGQuYXR0YWNobWVudFNpemUpLCAxKTtcclxuICAgICAgICAgICAgLy8gY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChkLmF0dGFjaG1lbnRVcmwpO1xyXG4gICAgICAgICAgICAvLyBjb25zdCBmaWxlRGF0YSA9IGF3YWl0IHJlc3BvbnNlLmJsb2IoKTtcclxuICAgICAgICAgICAgY29uc3QgbWV0YWRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBkLmF0dGFjaG1lbnRUeXBlXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vIHVwbG9hZGVkRmlsZURhdGEuZmlsZSA9IG5ldyBGaWxlKFtmaWxlRGF0YV0sIGQuYXR0YWNobWVudE5hbWUsIG1ldGFkYXRhKTtcclxuICAgICAgICAgICAgZi5wdXNoKHVwbG9hZGVkRmlsZURhdGEpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZVVwbG9hZGVyICYmIGYubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmhhc1VwbG9hZGVkRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoZWNrVmFsaWRhdGVBTkRDaGVja01hbmRhdG9yeSh7IG1hbmRhdG9yeTogdHJ1ZSwgdmFsaWQ6IGZhbHNlIH0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF0dGFjaG1lbnRBcHBEYXRhKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZmlsZXMgPSBmO1xyXG4gICAgfVxyXG5cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzdXBlci5vblNldFNlc3Npb25EYXRhKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWU6IGFueSA9IFtdO1xyXG4gICAgICAgIGlmIChnZXRfZGF0YS51bmlxdWVfaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLnVuaXF1ZV9pZHM7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmFwcERhdGEuaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuZmllbGREYXRhLmFwaV9rZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKV07XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMoZWxtKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGxvYWRNb3JlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudG90YWxDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsU2l6ZSA9IDA7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpbGVzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdkZWZhdWx0X3ZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWxlcyA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdjbGlja2FibGVfZmlsZW5hbWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrYWJsZV9maWxlbmFtZSA9IHBhcmFtdGVyLnZhbHVlID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUF0dGFjaG1lbnRzKHZhbHVlLmxlbmd0aCA+IDAgPyAndXBsb2FkJyA6ICcnLCB0aGlzLmh0bWxfaWQsIHZhbHVlKTtcclxuICAgICAgICAgICAgICAgIC8vIHJlc2V0dGluZyB0aGUgZm9ybSBmaWVsZCBkb2VzIG5vdCB3b3JrIGJlY2F1c2VcclxuICAgICAgICAgICAgICAgIC8vIG9uY2UgaXQgZ2V0cyByZXNldCBpZiBpdCBpcyBub3QgdG91Y2hlZCBhZ2FpbiB0aGVuIHRoZSBmaWVsZCB3b24ndCBnZXQgaW52YWxpZFxyXG4gICAgICAgICAgICAgICAgLy8gYWZ0ZXIgdGhlIGZvcm0gZ2V0cyBzdWJtaXR0ZWQgYW5kIGVycm9ycyB3b24ndCBzaG93IHVwXHJcbiAgICAgICAgICAgICAgICAvLyBzbyB3ZSBuZWVkIHRvIG1hbnVhbGx5IHNldCB0aGUgZmllbGQgYXMgdW5Ub3VjaGVkLCBQcmlzdGluZSAsIHVwZGF0ZSB2YWx1ZSBhbiB2YWxpZGl0eSBhbmQgc2hvd0Vycm9yT25OZXh0IHRvIHRydWVcclxuICAgICAgICAgICAgICAgIC8vIHRoaXMudGV4dEZpZWxkLmNvbnRyb2wucmVzZXQoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0Vycm9yT25OZXh0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldERhdGE6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlSWRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0RGF0YSA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhnZXREYXRhKS5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVuaXF1ZUlkVmFsdWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZUlkVmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsZXMgPSBBcnJheS5pc0FycmF5KGdldERhdGFbdW5pcXVlSWRWYWx1ZV0pID8gZ2V0RGF0YVt1bmlxdWVJZFZhbHVlXSA6IFtnZXREYXRhW3VuaXF1ZUlkVmFsdWVdXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gQXMgRGF0YSBpcyBub3Qgc3RvcmVkIHNvIHRoaXMgaXMgbm90IHJlcXVpcmVkXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICAvLyBOb3QgTmVlZGVkXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc0F0dGFjaG1lbnRCbG9jayAmJiB0aGlzLm1ldGFkYXRhRmllbGRzKSB7XHJcbiAgICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLm1ldGFkYXRhRmllbGRzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgbUZpZWxkIG9mIHRoaXMubWV0YUZpZWxkcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1ldGFLZXkgPSBtRmllbGQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbmQoKGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGkucGFyYW1ldGVyX3R5cGUgPT09ICdtZXRhZGF0YV9rZXknO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRhS2V5ICYmIG1ldGFLZXkudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qga2V5VmFsdWUgPSBtZXRhS2V5LnZhbHVlLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGtleVZhbHVlWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsYWJlbCA9IChrZXlWYWx1ZS5sZW5ndGggPT09IDIpID8ga2V5VmFsdWVbMV0gOiAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZXRhZGF0YUZpZWxkc1trZXldID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubUZpZWxkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNFZGl0YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBWYWxpZGF0ZXMgdGhlIGZpbGVuYW1lIGlucHV0IHRvIHByZXZlbnQgZXh0ZW5zaW9uIGVkaXRpbmdcclxuICAgICAqIEBwYXJhbSBldmVudCBUaGUgaW5wdXQgZXZlbnRcclxuICAgICAqIEBwYXJhbSBzZWxlY3RlZEZpbGUgVGhlIGZpbGUgYmVpbmcgcmVuYW1lZFxyXG4gICAgICovXHJcbiAgICBvbkZpbGVuYW1lSW5wdXQoZXZlbnQ6IEV2ZW50LCBzZWxlY3RlZEZpbGU6IElGaWxlKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQgYXMgSFRNTElucHV0RWxlbWVudDtcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IGlucHV0LnZhbHVlO1xyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiB1c2VyIGlzIHRyeWluZyB0byBhZGQgYSBmaWxlIGV4dGVuc2lvblxyXG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnLicpKSB7XHJcbiAgICAgICAgICAgIC8vIFJlbW92ZSBhbnkgZG90cyBhbmQgZXZlcnl0aGluZyBhZnRlciB0aGVtXHJcbiAgICAgICAgICAgIGNvbnN0IGNsZWFuVmFsdWUgPSB2YWx1ZS5zcGxpdCgnLicpWzBdO1xyXG4gICAgICAgICAgICBzZWxlY3RlZEZpbGUubmV3TmFtZSA9IGNsZWFuVmFsdWU7XHJcblxyXG4gICAgICAgICAgICAvLyBVcGRhdGUgdGhlIGlucHV0IHZhbHVlIHRvIHJlZmxlY3QgdGhlIGNsZWFuZWQgdmVyc2lvblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gY2xlYW5WYWx1ZTtcclxuICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIHRoZSBmaWxlbmFtZSBvbiBwYXN0ZSB0byBwcmV2ZW50IGV4dGVuc2lvbiBwYXN0aW5nXHJcbiAgICAgKiBAcGFyYW0gZXZlbnQgVGhlIHBhc3RlIGV2ZW50XHJcbiAgICAgKiBAcGFyYW0gc2VsZWN0ZWRGaWxlIFRoZSBmaWxlIGJlaW5nIHJlbmFtZWRcclxuICAgICAqL1xyXG4gICAgb25GaWxlbmFtZVBhc3RlKGV2ZW50OiBDbGlwYm9hcmRFdmVudCwgc2VsZWN0ZWRGaWxlOiBJRmlsZSk6IHZvaWQge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHBhc3RlZFRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhPy5nZXREYXRhKCd0ZXh0JykgfHwgJyc7XHJcbiAgICAgICAgLy8gUmVtb3ZlIGFueSBmaWxlIGV4dGVuc2lvbiBmcm9tIHBhc3RlZCB0ZXh0XHJcbiAgICAgICAgY29uc3QgY2xlYW5UZXh0ID0gcGFzdGVkVGV4dC5pbmNsdWRlcygnLicpID8gcGFzdGVkVGV4dC5zcGxpdCgnLicpWzBdIDogcGFzdGVkVGV4dDtcclxuXHJcbiAgICAgICAgc2VsZWN0ZWRGaWxlLm5ld05hbWUgPSBjbGVhblRleHQ7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiICpuZ0lmPVwiaXNWaXNpYmxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZERhdGEuZmllbGRfbGFiZWwhPScnICYmIGlzQ2FtZXJhTW9kZSA9PSBmYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCIgW2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc01hbmRhdG9yeVwiIGNsYXNzPVwibWFuZGV0b3J5LW1hcmtcIj4gKjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZERhdGEuZmllbGRfbGFiZWwhPScnICYmIGZpbGVzLmxlbmd0aCA+IDAgJiYgaXNDYW1lcmFNb2RlID09IHRydWVcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCIhaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIiA+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiICpuZ0lmPVwiaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIiBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+XHJcbiAgICAgICAgICAgICAgICBpXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhaXNDYW1lcmFJbnB1dCAmJiAhaXNDYW1lcmFNb2RlXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTGlzdFZpZXcgJiYgaXNTaW5nbGVVcGxvYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaW5nbGUtZmlsZS11cGxvYWRlci1jb250YWluZXIgZC1mbGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkcmFnQXJlYUNsYXNzID09ICdkcmFnYXJlYScgfHwgZHJhZ0FyZWFDbGFzcyA9PSAnZHJvcGFyZWEnXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG5nQ2xhc3M9XCJ7e2RyYWdBcmVhQ2xhc3N9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzRmllbGRMYWJsZUhUTUxcIiAoY2xpY2spPVwiZmlsZS5jbGljaygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJvbkFuY2hvckNsaWNrKCRldmVudClcIiBbaW5uZXJIVE1MXT1cImZpZWxkTGFibGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaXNGaWVsZExhYmxlSFRNTFwiPnt7ZmllbGRMYWJsZX19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAoY2xpY2spPVwiZmlsZS5jbGljaygpXCIgY2xhc3M9XCJsaW5rLXByaW1hcnkgY2xpY2thYmxlIGN1c3RvbS1maWxlLWxhYmVsXCIgKm5nSWY9XCIodXBsb2FkTW9kZSA9PSAnYWxsJyB8fCB1cGxvYWRNb2RlID09ICcnKSAmJiAhaXNGaWVsZExhYmxlSFRNTFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VsZWN0RmlsZVRleHQgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImh0bWxfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImNoZWNrVmFsaWRhdGlvbigkZXZlbnQpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImhhbmRsZUZpbGVJbnB1dCgkZXZlbnQsICRldmVudC50YXJnZXQuZmlsZXMpXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiQWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddID8gQWRkaXRpb25hbFBhcmFtZXRlclsnQXJpYS1MYWJlbCddIDogJ1NlbGVjdCBhIGZpbGUgZm9yICcgKyBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiZHJhZ0FyZWFDbGFzcyAhPSAnZHJhZ2FyZWEnICYmIGRyYWdBcmVhQ2xhc3MgIT0gJ2Ryb3BhcmVhJ1wiIGNsYXNzPVwiaW5wdXQtZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjdXN0b20tZmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiIGNsYXNzPVwiY3VzdG9tLWZpbGUtaW5wdXRcIiBbaWRdPVwiaHRtbF9pZFwiIChjbGljayk9XCJjaGVja1ZhbGlkYXRpb24oJGV2ZW50KVwiIChjaGFuZ2UpPVwiaGFuZGxlRmlsZUlucHV0KCRldmVudCwgJGV2ZW50LnRhcmdldC5maWxlcylcIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6ICdTZWxlY3QgYSBmaWxlIGZvciAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY3VzdG9tLWZpbGUtbGFiZWxcIiBbZm9yXT1cImh0bWxfaWRcIj57eyBzZWxlY3RGaWxlVGV4dCAgfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIWF1dG9VcGxvYWRcIiBjbGFzcz1cInVwbG9hZC1idG5cIiBbZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiAoY2xpY2spPVwic2luZ2xlRmlsZVVwbG9hZEFjdGlvbigpO1wiPnt7IGZpbGVzLmxlbmd0aCA+IDAgPyAnUmVwbGFjZScgOiAnVXBsb2FkJyB9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIWlzTGlzdFZpZXcgJiYgIWlzU2luZ2xlVXBsb2FkZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmlsZS11cGxvYWQtY29udGFpbmVyXCIgIChjbGljaykgPSAnaGFuZGxlQ2xpY2soZmlsZXMpJz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2ZpbGVzIFtpZF09XCJodG1sX2lkXCIgc3R5bGU9XCJkaXNwbGF5Om5vbmVcIi8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkcmFnQXJlYUNsYXNzID09ICdkcmFnYXJlYScgfHwgZHJhZ0FyZWFDbGFzcyA9PSAnZHJvcGFyZWEnXCIgZHJhZ2dhYmxlPVwidHJ1ZVwiIG5nQ2xhc3M9XCJ7e2RyYWdBcmVhQ2xhc3N9fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtMTIgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cImlzRmllbGRMYWJsZUhUTUxcIiAoY2xpY2spPVwiZmlsZS5jbGljaygpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IChjbGljayk9XCJvbkFuY2hvckNsaWNrKCRldmVudClcIiBbaW5uZXJIVE1MXT1cImZpZWxkTGFibGVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCIhaXNGaWVsZExhYmxlSFRNTFwiPnt7ZmllbGRMYWJsZX19PC9kaXY+ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAoY2xpY2spPVwiZmlsZS5jbGljaygpXCIgY2xhc3M9XCJsaW5rLXByaW1hcnkgY2xpY2thYmxlIGN1c3RvbS1maWxlLWxhYmVsXCIgKm5nSWY9XCIodXBsb2FkTW9kZSA9PSAnYWxsJyB8fCB1cGxvYWRNb2RlID09ICcnKSAmJiAhaXNGaWVsZExhYmxlSFRNTFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3sgc2VsZWN0RmlsZVRleHQgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZmlsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAjZmlsZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2lkXT1cImh0bWxfaWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW211bHRpcGxlXT1cImlzTXVsdGlwbGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjdXN0b20tZmlsZS1pbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiY2hlY2tWYWxpZGF0aW9uKCRldmVudClcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjaGFuZ2UpPVwiaGFuZGxlRmlsZUlucHV0KCRldmVudCwgJGV2ZW50LnRhcmdldC5maWxlcylcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJBZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBBZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiAnU2VsZWN0IGEgZmlsZSBmb3IgJyArIGZpZWxkRGF0YS5maWVsZF9sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT1cImRpc3BsYXk6bm9uZVwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgKm5nSWY9XCJkcmFnQXJlYUNsYXNzICE9ICdkcmFnYXJlYScgJiYgZHJhZ0FyZWFDbGFzcyAhPSAnZHJvcGFyZWEnXCIgY2xhc3M9XCJpbnB1dC1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImN1c3RvbS1maWxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJmaWxlXCIgW211bHRpcGxlXT1cImlzTXVsdGlwbGVcIiBjbGFzcz1cImN1c3RvbS1maWxlLWlucHV0XCIgW2lkXT1cImh0bWxfaWRcIiAoY2xpY2spPVwiY2hlY2tWYWxpZGF0aW9uKCRldmVudClcIiAoY2hhbmdlKT1cImhhbmRsZUZpbGVJbnB1dCgkZXZlbnQsICRldmVudC50YXJnZXQuZmlsZXMpXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJBZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBBZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiAnU2VsZWN0IGEgZmlsZSBmb3IgJyArIGZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImN1c3RvbS1maWxlLWxhYmVsXCIgW2Zvcl09XCJodG1sX2lkXCI+e3sgc2VsZWN0RmlsZVRleHQgIH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmaWxlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLWZpbGVzXCIgKm5nSWY9XCJmaWxlcy5sZW5ndGggPiAwOyBlbHNlIHBsYWNlSG9sZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgc2VsZWN0ZWRGaWxlIG9mIGZpbGVzOyBsZXQgaT1pbmRleCB0cmFja0J5OiB0cmFja0J5RmlsZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBSZXN0cnVjdHVyZWQgbGF5b3V0IGZvciBhdHRhY2htZW50IGJsb2NrcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlbGVjdGVkLWZpbGVcIiAqbmdJZj1cIighaXNTaW5nbGVVcGxvYWRlciB8fCAoaXNTaW5nbGVVcGxvYWRlciAmJiBzZWxlY3RlZEZpbGUudXBsb2FkZWQpKSAmJiBmaWVsZERhdGEuaXNBdHRhY2htZW50QmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPCEtLSBEb2N1bWVudCBJbmZvIENvbnRhaW5lciAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2lkXT1cIidkb2N1bWVudC1pbmZvLScgKyBmaWVsZERhdGEudW5pcXVlX2lkICsgJy0nICsgaVwiIGNsYXNzPVwiZG9jdW1lbnQtaW5mby1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEZpbGUgSWNvbiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IFtpZF09XCInZmlsZS1pY29uLScgKyBmaWVsZERhdGEudW5pcXVlX2lkICsgJy0nICsgaVwiIGNsYXNzPVwiZmlsZS1pY29uLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzcz1cImN1c3RvbS1maWxlLWljb25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJDdXN0b20gRmlsZSBJY29uIGZvciB7e3NlbGVjdGVkRmlsZS5maWxlLnR5cGV9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiZmlsZVVwbG9hZHNbc2VsZWN0ZWRGaWxlLmZpbGUudHlwZV0gJiYgZmlsZVVwbG9hZHNbc2VsZWN0ZWRGaWxlLmZpbGUudHlwZV0uaWNvbkltYWdlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3NyY109XCJmaWxlVXBsb2Fkc1tzZWxlY3RlZEZpbGUuZmlsZS50eXBlXS5pY29uSW1hZ2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gRmlsZSBOYW1lIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2lkXT1cIidmaWxlLW5hbWUtJyArIGZpZWxkRGF0YS51bmlxdWVfaWQgKyAnLScgKyBpXCIgY2xhc3M9XCJmaWxlLW5hbWUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIiFzZWxlY3RlZEZpbGUucmVuYW1lXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0ZWQtZmlsZS1uYW1lIHNlbGVjdGVkLWZpbGUtbmFtZS17e2l9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVBY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAncHJldmlldycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW25nQ2xhc3NdPVwieyAnY2xpY2thYmxlJzogY2xpY2thYmxlX2ZpbGVuYW1lIH1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7c2VsZWN0ZWRGaWxlLmZpbGUubmFtZX19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkRmlsZS5yZW5hbWVcIiBjbGFzcz1cImZpbGUtcmVuYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IGNsYXNzPVwic2VsZWN0ZWQtZmlsZS1uYW1lIHNlbGVjdGVkLWZpbGUtbmFtZS17e2l9fVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZEZpbGUubmV3TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGlucHV0KT1cIm9uRmlsZW5hbWVJbnB1dCgkZXZlbnQsIHNlbGVjdGVkRmlsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXN0ZSk9XCJvbkZpbGVuYW1lUGFzdGUoJGV2ZW50LCBzZWxlY3RlZEZpbGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkVudGVyIGZpbGVuYW1lIHdpdGhvdXQgZXh0ZW5zaW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGUtZXh0ZW5zaW9uLXJlYWRvbmx5XCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZpbGUgZXh0ZW5zaW9uIGNhbm5vdCBiZSBjaGFuZ2VkXCI+e3tzZWxlY3RlZEZpbGUub3JpZ2luYWxFeHRlbnNpb259fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE1ldGFkYXRhIENvbnRhaW5lciAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2lkXT1cIidtZXRhZGF0YS0nICsgZmllbGREYXRhLnVuaXF1ZV9pZCArICctJyArIGlcIiBjbGFzcz1cIm1ldGFkYXRhLWNvbnRhaW5lclwiICpuZ0lmPVwic2VsZWN0ZWRGaWxlLmN1c3RvbSAmJiBzZWxlY3RlZEZpbGUuY3VzdG9tLmxlbmd0aCA+IDBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZXRhSXRlbSBvZiBzZWxlY3RlZEZpbGUuY3VzdG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2F0dHIuZGF0YS10aXRsZV09XCJtZXRhSXRlbS5rZXlcIiBjbGFzcz1cImF0dGFjaG1lbnQtbWV0YS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgKm5nSWY9XCJtZXRhSXRlbS5sYWJlbFwiIFtpbm5lckhUTUxdPVwibWV0YUl0ZW0ubGFiZWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gW2lubmVySFRNTF09XCJtZXRhSXRlbS52YWx1ZVwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFjdGlvbiBCdXR0b25zIENvbnRhaW5lciAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2lkXT1cIidhY3Rpb24tYnV0dG9ucy0nICsgZmllbGREYXRhLnVuaXF1ZV9pZCArICctJyArIGlcIiBjbGFzcz1cImFjdGlvbi1idXR0b25zLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gVXBsb2FkIFByb2dyZXNzIG9yIENsZWFyL1VwbG9hZCBidXR0b25zIGZvciBub24tdXBsb2FkZWQgZmlsZXMgLS0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiFzZWxlY3RlZEZpbGUudXBsb2FkZWQ7IGVsc2UgdXBsb2FkZWRBY3Rpb25zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwcm9ncmVzcyAqbmdJZj1cInNlbGVjdGVkRmlsZS5wcm9ncmVzc1wiIFt2YWx1ZV09XCJzZWxlY3RlZEZpbGUucHJvZ3Jlc3NcIiBtYXg9XCIxMDBcIiBtaW49XCIwXCI+IHt7c2VsZWN0ZWRGaWxlLnByb2dyZXNzfX0lIDwvcHJvZ3Jlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCIhc2VsZWN0ZWRGaWxlLnByb2dyZXNzICYmICFhdXRvVXBsb2FkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtc2Vjb25kYXJ5IGNsZWFyXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAnY2xlYXInKTtcIj5DbGVhcjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICpuZ0lmPVwiIXNlbGVjdGVkRmlsZS5wcm9ncmVzcyAmJiAhYXV0b1VwbG9hZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLXNlY29uZGFyeSB1cGxvYWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNsaWNrKT1cImFjdGlvbihzZWxlY3RlZEZpbGUsIGksICd1cGxvYWQnKTtcIj5VcGxvYWQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8IS0tIEFjdGlvbiBidXR0b25zIGZvciB1cGxvYWRlZCBmaWxlcyAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3VwbG9hZGVkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3RlZC1maWxlLXJlc2V0IHNlbGVjdGVkLWZpbGUtcmVzZXQte3tpfX0gYnRuIGJ0bi1pbmZvXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc0VkaXRhYmxlICYmICFpc0xpc3RWaWV3ICYmIHNlbGVjdGVkRmlsZS5yZW5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWN0aW9uKHNlbGVjdGVkRmlsZSwgaSwgJ3Jlc2V0JylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7KEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3Jlc2V0X2xhYmVsJ10pID8gQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Jlc2V0X2xhYmVsJ10gOiAnUmVzZXQnfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwic2VsZWN0ZWQtZmlsZS11cGRhdGUgc2VsZWN0ZWQtZmlsZS11cGRhdGUte3tpfX0gYnRuIGJ0bi1zdWNjZXNzXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCJpc0VkaXRhYmxlICYmICFpc0xpc3RWaWV3ICYmIHNlbGVjdGVkRmlsZS5yZW5hbWVcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWN0aW9uKHNlbGVjdGVkRmlsZSwgaSwgJ3VwZGF0ZScpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7eyhBZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfdXBkYXRlX2xhYmVsJ10pID8gQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3VwZGF0ZV9sYWJlbCddIDogJ1VwZGF0ZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3RlZC1maWxlLXJlbmFtZSBzZWxlY3RlZC1maWxlLXJlbmFtZS17e2l9fSBidG4gYnRuLWRhbmdlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNFZGl0YWJsZSAmJiAhaXNMaXN0VmlldyAmJiAhc2VsZWN0ZWRGaWxlLnJlbmFtZVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAncmVuYW1lJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7KEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9yZW5hbWVfbGFiZWwnXSkgPyBBZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfcmVuYW1lX2xhYmVsJ10gOiAnRWRpdCd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3RlZC1maWxlLXJlbW92ZSBzZWxlY3RlZC1maWxlLXJlbW92ZS17e2l9fSBidG4gYnRuLWRhbmdlclwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNFZGl0YWJsZSAmJiAhaXNMaXN0Vmlld1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAncmVtb3ZlJylcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7KEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3JlbW92ZV9sYWJlbCddKSA/IEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3JlbW92ZV9sYWJlbCddIDogJ1JlbW92ZSd9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJzZWxlY3RlZC1maWxlLXByZXZpZXcgc2VsZWN0ZWQtZmlsZS1wcmV2aWV3LXt7aX19IGJ0biBidG4tc3VjY2Vzc1wiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiaXNMaXN0VmlldyB8fCAoZmlsZVVwbG9hZHNbc2VsZWN0ZWRGaWxlLmZpbGUudHlwZV0gJiYgZmlsZVVwbG9hZHNbc2VsZWN0ZWRGaWxlLmZpbGUudHlwZV0ucHJldmlldylcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY2xpY2spPVwiYWN0aW9uKHNlbGVjdGVkRmlsZSwgaSwgJ3ByZXZpZXcnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3soQWRkaXRpb25hbFBhcmFtZXRlclsncHJldmlld19sYWJlbCddKSA/IEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3ByZXZpZXdfbGFiZWwnXSA6ICdQcmV2aWV3J319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInNlbGVjdGVkLWZpbGUtZG93bmxvYWQgc2VsZWN0ZWQtZmlsZS1kb3dubG9hZC17e2l9fSBidG4gYnRuLXByaW1hcnlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImlzTGlzdFZpZXcgfHwgKGZpbGVVcGxvYWRzW3NlbGVjdGVkRmlsZS5maWxlLnR5cGVdICYmIGZpbGVVcGxvYWRzW3NlbGVjdGVkRmlsZS5maWxlLnR5cGVdLmNhbkRvd25sb2FkKVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJhY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAnZG93bmxvYWQnKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3soQWRkaXRpb25hbFBhcmFtZXRlclsnZG93bmxvYWRfbGFiZWwnXSkgPyBBZGRpdGlvbmFsUGFyYW1ldGVyWydkb3dubG9hZF9sYWJlbCddIDogJ0Rvd25sb2FkJ319XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8IS0tIE9yaWdpbmFsIGxheW91dCBmb3Igbm9uLWF0dGFjaG1lbnQgYmxvY2tzIC0tPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VsZWN0ZWQtZmlsZVwiICpuZ0lmPVwiKCFpc1NpbmdsZVVwbG9hZGVyIHx8IChpc1NpbmdsZVVwbG9hZGVyICYmIHNlbGVjdGVkRmlsZS51cGxvYWRlZCkpICYmICFmaWVsZERhdGEuaXNBdHRhY2htZW50QmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwhLS0gPHNwYW4gKm5nSWY9XCIhc2VsZWN0ZWRGaWxlLnJlbmFtZVwiIGNsYXNzPVwic2VsZWN0ZWQtZmlsZS1uYW1lIHNlbGVjdGVkLWZpbGUtbmFtZS17e2l9fVwiPnt7c2VsZWN0ZWRGaWxlLmZpbGUubmFtZX19PC9zcGFuPiAtLT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiIXNlbGVjdGVkRmlsZS5yZW5hbWVcIiBjbGFzcz1cInNlbGVjdGVkLWZpbGUtbmFtZSBzZWxlY3RlZC1maWxlLW5hbWUte3tpfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjbGljayk9XCJoYW5kbGVBY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAncHJldmlldycpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7ICdjbGlja2FibGUnOiBjbGlja2FibGVfZmlsZW5hbWUgfVwiPnt7c2VsZWN0ZWRGaWxlLmZpbGUubmFtZX19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAqbmdJZj1cInNlbGVjdGVkRmlsZS5yZW5hbWVcIiBjbGFzcz1cImZpbGUtcmVuYW1lLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCBjbGFzcz1cInNlbGVjdGVkLWZpbGUtbmFtZSBzZWxlY3RlZC1maWxlLW5hbWUte3tpfX1cIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJzZWxlY3RlZEZpbGUubmV3TmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChpbnB1dCk9XCJvbkZpbGVuYW1lSW5wdXQoJGV2ZW50LCBzZWxlY3RlZEZpbGUpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhc3RlKT1cIm9uRmlsZW5hbWVQYXN0ZSgkZXZlbnQsIHNlbGVjdGVkRmlsZSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVudGVyIGZpbGVuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJFbnRlciBmaWxlbmFtZSB3aXRob3V0IGV4dGVuc2lvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZmlsZS1leHRlbnNpb24tcmVhZG9ubHlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkZpbGUgZXh0ZW5zaW9uIGNhbm5vdCBiZSBjaGFuZ2VkXCI+e3tzZWxlY3RlZEZpbGUub3JpZ2luYWxFeHRlbnNpb259fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWV0YUl0ZW0gb2Ygc2VsZWN0ZWRGaWxlLmN1c3RvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgW2F0dHIuZGF0YS10aXRsZV09XCJtZXRhSXRlbS5rZXlcIiBjbGFzcz1cImF0dGFjaG1lbnQtbWV0YS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIm1ldGFJdGVtLmxhYmVsXCIgW2lubmVySFRNTF09XCJtZXRhSXRlbS5sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIFtpbm5lckhUTUxdPVwibWV0YUl0ZW0udmFsdWVcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9XCJjdXN0b20tZmlsZS1pY29uXCIgYWx0PVwiQ3VzdG9tIEZpbGUgSWNvbiBmb3Ige3tzZWxlY3RlZEZpbGUuZmlsZS50eXBlfX1cIiAqbmdJZj1cImZpbGVVcGxvYWRzW3NlbGVjdGVkRmlsZS5maWxlLnR5cGVdICYmIGZpbGVVcGxvYWRzW3NlbGVjdGVkRmlsZS5maWxlLnR5cGVdLmljb25JbWFnZVwiIFtzcmNdPVwiZmlsZVVwbG9hZHNbc2VsZWN0ZWRGaWxlLmZpbGUudHlwZV0uaWNvbkltYWdlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2VsZWN0ZWRGaWxlLnVwbG9hZGVkOyBlbHNlIG90aGVyQWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHByb2dyZXNzICpuZ0lmPVwic2VsZWN0ZWRGaWxlLnByb2dyZXNzXCIgW3ZhbHVlXT1cInNlbGVjdGVkRmlsZS5wcm9ncmVzc1wiIG1heD1cIjEwMFwiIG1pbj1cIiAwXCI+IHt7c2VsZWN0ZWRGaWxlLnByb2dyZXNzfX0lIDwvcHJvZ3Jlc3M+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFzZWxlY3RlZEZpbGUucHJvZ3Jlc3MgJiYgIWF1dG9VcGxvYWRcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgY2xlYXJcIiB0eXBlPVwiYnV0dG9uXCIgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCIgKGNsaWNrKT1cImFjdGlvbihzZWxlY3RlZEZpbGUsIGksICdjbGVhcicpO1wiPkNsZWFyPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cIiFzZWxlY3RlZEZpbGUucHJvZ3Jlc3MgJiYgIWF1dG9VcGxvYWRcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1zZWNvbmRhcnkgdXBsb2FkXCIgdHlwZT1cImJ1dHRvblwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZVwiIChjbGljayk9XCJhY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAndXBsb2FkJyk7XCI+VXBsb2FkPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxuZy10ZW1wbGF0ZSAjb3RoZXJBY3Rpb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzZWxlY3RlZC1maWxlLXJlc2V0IHNlbGVjdGVkLWZpbGUtcmVzZXQte3tpfX0gYnRuIGJ0bi1pbmZvXCIgKm5nSWY9XCJpc0VkaXRhYmxlICYmICFpc0xpc3RWaWV3ICYmIHNlbGVjdGVkRmlsZS5yZW5hbWVcIiAoY2xpY2spPVwiYWN0aW9uKHNlbGVjdGVkRmlsZSwgaSwgJ3Jlc2V0JylcIj57eyhBZGRpdGlvbmFsUGFyYW1ldGVyWydyZXNldF9sYWJlbCddKSA/IEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9yZXNldF9sYWJlbCddIDogJ1Jlc2V0J319PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzZWxlY3RlZC1maWxlLXVwZGF0ZSBzZWxlY3RlZC1maWxlLXVwZGF0ZS17e2l9fSBidG4gYnRuLXN1Y2Nlc3NcIiAqbmdJZj1cImlzRWRpdGFibGUgJiYgIWlzTGlzdFZpZXcgJiYgc2VsZWN0ZWRGaWxlLnJlbmFtZVwiIChjbGljayk9XCJhY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAndXBkYXRlJylcIj57eyhBZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfdXBkYXRlX2xhYmVsJ10pID8gQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3VwZGF0ZV9sYWJlbCddIDogJ1VwZGF0ZSd9fTwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2VsZWN0ZWQtZmlsZS1yZW5hbWUgc2VsZWN0ZWQtZmlsZS1yZW5hbWUte3tpfX0gYnRuIGJ0bi1kYW5nZXJcIiAqbmdJZj1cImlzRWRpdGFibGUgJiYgIWlzTGlzdFZpZXcgJiYgIXNlbGVjdGVkRmlsZS5yZW5hbWVcIiAoY2xpY2spPVwiYWN0aW9uKHNlbGVjdGVkRmlsZSwgaSwgJ3JlbmFtZScpXCI+e3soQWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3JlbmFtZV9sYWJlbCddKSA/IEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9yZW5hbWVfbGFiZWwnXSA6ICdFZGl0J319PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzZWxlY3RlZC1maWxlLXJlbW92ZSBzZWxlY3RlZC1maWxlLXJlbW92ZS17e2l9fSBidG4gYnRuLWRhbmdlclwiICpuZ0lmPVwiaXNFZGl0YWJsZSAmJiAhaXNMaXN0Vmlld1wiIChjbGljayk9XCJhY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAncmVtb3ZlJylcIj57eyhBZGRpdGlvbmFsUGFyYW1ldGVyWydyZW1vdmVfbGFiZWwnXSkgPyBBZGRpdGlvbmFsUGFyYW1ldGVyWydyZW1vdmVfbGFiZWwnXSA6ICdSZW1vdmUnfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNlbGVjdGVkLWZpbGUtcHJldmlldyBzZWxlY3RlZC1maWxlLXByZXZpZXcte3tpfX0gYnRuIGJ0bi1zdWNjZXNzXCIgKm5nSWY9XCJpc0xpc3RWaWV3IHx8IChmaWxlVXBsb2Fkc1tzZWxlY3RlZEZpbGUuZmlsZS50eXBlXSAmJiBmaWxlVXBsb2Fkc1tzZWxlY3RlZEZpbGUuZmlsZS50eXBlXS5wcmV2aWV3KVwiIChjbGljayk9XCJhY3Rpb24oc2VsZWN0ZWRGaWxlLCBpLCAncHJldmlldycpXCI+e3soQWRkaXRpb25hbFBhcmFtZXRlclsncHJldmlld19sYWJlbCddKSA/IEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3ByZXZpZXdfbGFiZWwnXSA6ICdQcmV2aWV3J319PC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzZWxlY3RlZC1maWxlLWRvd25sb2FkIHNlbGVjdGVkLWZpbGUtZG93bmxvYWQte3tpfX0gYnRuIGJ0bi1wcmltYXJ5XCIgKm5nSWY9XCJpc0xpc3RWaWV3IHx8IChmaWxlVXBsb2Fkc1tzZWxlY3RlZEZpbGUuZmlsZS50eXBlXSAmJiBmaWxlVXBsb2Fkc1tzZWxlY3RlZEZpbGUuZmlsZS50eXBlXS5jYW5Eb3dubG9hZClcIiAoY2xpY2spPVwiYWN0aW9uKHNlbGVjdGVkRmlsZSwgaSwgJ2Rvd25sb2FkJylcIj57eyhBZGRpdGlvbmFsUGFyYW1ldGVyWydkb3dubG9hZF9sYWJlbCddKSA/IEFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2Rvd25sb2FkX2xhYmVsJ10gOiAnRG93bmxvYWQnfX08L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI3BsYWNlSG9sZGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhZGQtbW9yZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBtZXNzYWdlIG9mIG1lc3NhZ2VzXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCIgKm5nSWY9XCJzaG93RXJyb3JPbk5leHRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8cCAqbmdJZj1cImlzTWFuZGF0b3J5ICYmIG1lc3NhZ2UudHlwZSA9PSAnTWFuZGF0b3J5JyAmJiBmaWxlcy5sZW5ndGggPD0gMFwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIiAqbmdJZj1cImVycm9yVHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwICpuZ0lmPVwibWVzc2FnZS50eXBlID09IGVycm9yVHlwZVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e3JldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0fX08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=