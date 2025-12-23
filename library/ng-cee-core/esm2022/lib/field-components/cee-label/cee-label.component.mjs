import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { MatMenuModule } from '@angular/material/menu';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { NgbTooltipModule } from '@ng-bootstrap/ng-bootstrap';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../services/user-data-handler.service";
import * as i3 from "../../services/shared-events-service.service";
import * as i4 from "../../services/internal-cee-emitter-service.service";
import * as i5 from "../../models/app-data/app-data.service";
import * as i6 from "../../models/api-data/api-data.service";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "@angular/material/dialog";
import * as i9 from "@angular/material/snack-bar";
import * as i10 from "@angular/common/http";
import * as i11 from "../../services/cee-api-service.service";
import * as i12 from "@angular/router";
import * as i13 from "@angular/common";
import * as i14 from "../../directives/tooltip/tooltip.directive";
import * as i15 from "@angular/material/menu";
import * as i16 from "@ng-bootstrap/ng-bootstrap";
function CeeLabelComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "iframe", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("\n\t\t\t\t", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵproperty("src", ctx_r0.iframeLabel, i0.ɵɵsanitizeResourceUrl);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 13);
    i0.ɵɵpipe(1, "highlight");
} if (rf & 2) {
    const labelObj_r3 = i0.ɵɵnextContext(2).$implicit;
    const fieldLabel_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 3, labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]], ctx_r0.highlight), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 12);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r2); const labelObj_r3 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.switchEvent(ctx_r0.prepareLink("%id%", labelObj_r3[ctx_r0.showItemKeys[0]]), ctx_r0.showItemRouteNewTab)); });
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Conditional_1_Template, 2, 6, "label", 13)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Conditional_2_Template, 2, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleProp("pointer-events", !ctx_r0.isEditable ? "none" : "auto");
    i0.ɵɵpropertyInterpolate("title", labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵattribute("aria-label", labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]])("disabled", !ctx_r0.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !ctx_r0.isHTML(labelObj_r3[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]) && ctx_r0.highlight ? 1 : 2);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_a_1_Template, 3, 6, "a", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r5 < ctx_r0.showItemCount);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menu_r6 = i0.ɵɵreference(4);
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matMenuTriggerFor", menu_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("+", fieldLabel_r4.length - ctx_r0.showItemCount, "");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "a", 16);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_a_1_Template_a_click_0_listener() { i0.ɵɵrestoreView(_r7); const labelObj_r8 = i0.ɵɵnextContext().$implicit; const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.switchEvent(ctx_r0.prepareLink("%id%", labelObj_r8[ctx_r0.showItemKeys[0]]), ctx_r0.showItemRouteNewTab)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r8 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵstyleProp("pointer-events", !ctx_r0.isEditable ? "none" : "auto");
    i0.ɵɵpropertyInterpolate("title", labelObj_r8[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵattribute("aria-label", labelObj_r8[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]])("disabled", !ctx_r0.isEditable);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", labelObj_r8[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]], " ");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_a_1_Template, 2, 6, "a", 15);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r9 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r9 >= ctx_r0.showItemCount);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 6)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_button_2_Template, 2, 2, "button", 10);
    i0.ɵɵelementStart(3, "mat-menu", null, 1);
    i0.ɵɵtemplate(5, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_ng_container_5_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", fieldLabel_r4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldLabel_r4.length > ctx_r0.showItemCount);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", fieldLabel_r4);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 13);
    i0.ɵɵpipe(1, "highlight");
} if (rf & 2) {
    const labelObj_r10 = i0.ɵɵnextContext(2).$implicit;
    const fieldLabel_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 3, labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]], ctx_r0.highlight), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r10 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 18);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Conditional_1_Template, 2, 6, "label", 13)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Conditional_2_Template, 2, 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r10 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵpropertyInterpolate("title", labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵattribute("aria-label", labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !ctx_r0.isHTML(labelObj_r10[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]) && ctx_r0.highlight ? 1 : 2);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_div_1_Template, 3, 3, "div", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r11 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r11 < ctx_r0.showItemCount);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 14);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    i0.ɵɵnextContext();
    const menu_r12 = i0.ɵɵreference(4);
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("matMenuTriggerFor", menu_r12);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("+", fieldLabel_r4.length - ctx_r0.showItemCount, "");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const labelObj_r13 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵpropertyInterpolate("title", labelObj_r13[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵattribute("aria-label", labelObj_r13[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(labelObj_r13[ctx_r0.showItemKeys.length > 1 ? ctx_r0.showItemKeys[1] : ctx_r0.showItemKeys[0]]);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_5_div_1_Template, 2, 3, "div", 19);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const j_r14 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", j_r14 >= ctx_r0.showItemCount);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template, 2, 1, "ng-container", 6)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_button_2_Template, 2, 2, "button", 10);
    i0.ɵɵelementStart(3, "mat-menu", null, 1);
    i0.ɵɵtemplate(5, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_ng_container_5_Template, 2, 1, "ng-container", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", fieldLabel_r4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldLabel_r4.length > ctx_r0.showItemCount);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", fieldLabel_r4);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_1_Template, 6, 3, "ng-container", 5)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_ng_container_2_Template, 6, 3, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showItemClickable);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.showItemClickable);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_0_Template(rf, ctx) { if (rf & 1) {
    const _r15 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵpipe(1, "highlight");
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_0_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r15); const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.labelClick()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵproperty("innerHTML", i0.ɵɵpipeBind2(1, 6, fieldLabel_r4, ctx_r0.highlight), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_0_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r16); const ctx_r0 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r0.labelClick()); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("\n\t\t\t\t\t\t\t\t", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", fieldLabel_r4, " ");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 22);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_1_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r17); const ctx_r0 = i0.ɵɵnextContext(7); return i0.ɵɵresetView(ctx_r0.labelClick()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(5).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵproperty("innerHTML", ctx_r0.checkIfIframe(fieldLabel_r4), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_0_Template, 2, 6, "label", 23)(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_label_1_Template, 1, 6, "label", 24);
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(4).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(fieldLabel_r4));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(fieldLabel_r4));
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_0_Template, 2, 9, "label", 21)(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Conditional_1_Template, 2, 2);
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵconditional(0, !ctx_r0.isHTML(fieldLabel_r4) && ctx_r0.highlight ? 0 : 1);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Conditional_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtext(0);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵtextInterpolate1(" ", ctx_r0.truncatedLabel, " ");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 27);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵproperty("innerHTML", ctx_r0.truncatedLabel, i0.ɵɵsanitizeHtml);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r19 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 28);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_button_3_Template_button_click_0_listener($event) { i0.ɵɵrestoreView(_r19); const ctx_r0 = i0.ɵɵnextContext(6); return i0.ɵɵresetView(ctx_r0.toggleShowMoreHideMore($event)); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.isExpanded ? ctx_r0.showLessLabel : ctx_r0.showMoreLabel, " ");
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵlistener("click", function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r18); const ctx_r0 = i0.ɵɵnextContext(5); return i0.ɵɵresetView(ctx_r0.labelClick()); });
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Conditional_1_Template, 1, 1)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Conditional_2_Template, 1, 1)(3, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_button_3_Template, 2, 1, "button", 26);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r4 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("\n\t\t\t\t\t\t\t", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵattribute("aria-label", fieldLabel_r4)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !ctx_r0.isHTML(fieldLabel_r4) ? 1 : 2);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.showTruncatedLabel && ctx_r0.displayShowMoreLabel);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_1_Template, 2, 1)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Conditional_2_Template, 4, 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵconditional(1, !ctx_r0.showTruncatedLabel ? 1 : 2);
} }
function CeeLabelComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 5)(2, CeeLabelComponent_div_0_ng_container_3_ng_container_1_ng_container_2_Template, 3, 1, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.showTruncatedList);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.showTruncatedList);
} }
function CeeLabelComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeLabelComponent_div_0_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r4 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldLabel_r4 && fieldLabel_r4 != "" && fieldLabel_r4 != " ");
} }
function CeeLabelComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 29);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.tooltipText);
} }
function CeeLabelComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 30);
} if (rf & 2) {
    i0.ɵɵnextContext();
    const tooltipTemplate_r20 = i0.ɵɵreference(7);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngbTooltip", tooltipTemplate_r20)("placement", ctx_r0.contentTooltip.position)("innerHTML", ctx_r0.contentTooltip.iconText, i0.ɵɵsanitizeHtml);
} }
function CeeLabelComponent_div_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31);
    i0.ɵɵelement(1, "span", 32);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.tooltip, i0.ɵɵsanitizeHtml);
} }
function CeeLabelComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4);
    i0.ɵɵtemplate(2, CeeLabelComponent_div_0_ng_container_2_Template, 2, 4, "ng-container", 5)(3, CeeLabelComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 6)(4, CeeLabelComponent_div_0_button_4_Template, 2, 2, "button", 7)(5, CeeLabelComponent_div_0_span_5_Template, 1, 3, "span", 8)(6, CeeLabelComponent_div_0_ng_template_6_Template, 2, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.iframeLabel && ctx_r0.iframeLabel != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fieldLabels);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip && !ctx_r0.contentTooltip.enabled);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip && ctx_r0.contentTooltip.enabled);
} }
export class CeeLabelComponent extends BaseView {
    sanitizer;
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    ceeApiService;
    router;
    cdRef;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    activePosition;
    html_id = '';
    fieldLabels = [];
    labelEmitter;
    _iframeLabel;
    iframeLabel;
    tooltipText = "";
    showTruncatedList = false;
    showItemCount = 1;
    showItemKeys = ['id', 'value'];
    showItemClickable = false;
    showItemRoute = '';
    showItemRouteNewTab = false;
    highlight;
    labelRefreshSubscriber;
    applyFilterSubscriber;
    showTruncatedLabel = false;
    truncatedLabelMaxLen = 0;
    truncatedLabel = [];
    isExpanded = false;
    showMoreLabel = 'Show More';
    showLessLabel = 'Show Less';
    displayShowMoreLabel = true;
    isWaitForDataSet = false;
    contentTooltip = {
        enabled: false,
        position: 'top',
        iconText: 'i'
    };
    flatUnflat;
    dynamicIframeTimeout;
    constructor(sanitizer, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, cdRef) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.sanitizer = sanitizer;
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.cdRef = cdRef;
        this.flatUnflat = new FlatUnflat(appDataService);
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData, this.cdRef);
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    //     this.unsubscribe(); // unsubscribe the event on destroy
    // }
    ngOnDestroy() {
        if (this.dynamicIframeTimeout) {
            clearTimeout(this.dynamicIframeTimeout);
            this.dynamicIframeTimeout = null;
        }
        // Clean up arrays and objects
        this.fieldLabels = [];
        this.truncatedLabel = [];
        this.showItemKeys = null;
        this.contentTooltip = null;
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
            this.labelEmitter = null;
        }
        if (this.labelRefreshSubscriber) {
            this.labelRefreshSubscriber.unsubscribe();
            this.labelRefreshSubscriber = null;
        }
        if (this.applyFilterSubscriber) {
            this.applyFilterSubscriber.unsubscribe();
            this.applyFilterSubscriber = null;
        }
    }
    concatData() { }
    onViewDataInit() {
        // For unique html id
        // console.log("rowData: ",this.rowData);
        if (this.fieldData.unique_id === "deals-label-field") {
            // console.log(this.fieldData);
        }
        this.html_id = this.fieldData.html_id;
        // END
        this.tooltipText = (this.fieldData && this.fieldData.tooltip) ? this.fieldData.tooltip.toString().replace(/(<([^>]+)>)/ig, '') : "";
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.isWaitForDataSet = this.additionalParameter['CEE_label_wait_for_data_set']?.toLowerCase() == 'true';
        this.contentTooltip.enabled = (this.additionalParameter['CEE_label_show_content_tooltip'] && this.additionalParameter['CEE_label_show_content_tooltip'].toLowerCase() == 'true') ? true : false;
        this.contentTooltip.position = this.additionalParameter['CEE_label_content_tooltip_position'] || 'top';
        this.contentTooltip.iconText = this.additionalParameter['CEE_label_content_tooltip_icon'] || 'i';
        this.fieldData['field_label'] += " ";
        this.fieldLabels = []; // TODO : Check Implementation
        this.fieldLabels.push(this.getDataFormattedValue(this.fieldData.field_label)); // OLD Implementation
        // this.getValue(this.fieldData.field_label);
        const apiKey = localStorage.getItem('singleApiKey') === 'true' ? this.fieldData.api_key : this.fieldData.response_api_key;
        if (apiKey || (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))'))) {
            if (this.rowData) {
                if (this.rowData.hasOwnProperty('data')) {
                    this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.data);
                }
                if (this.rowData.hasOwnProperty('value')) {
                    this.fieldLabels = [];
                    if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                        for (const val of this.fieldData.possible_values) {
                            if (this.commonUtil.getPossibleId(val) == this.rowData.value) {
                                this.fieldLabels.push(this.getDataFormattedValue(this.commonUtil.getPossibleValue(val)));
                            }
                        }
                    }
                    else {
                        if (this.rowData.value !== undefined) {
                            if (this.rowData.value && this.rowData.value.includes('((dynamic))')) {
                                this.fieldLabels.push(this.getDataFormattedValue(this.setDynamicLabelUtil.getDynamicValue({ field_label: this.rowData.value }).field_label));
                            }
                            else {
                                this.fieldLabels.push(this.getDataFormattedValue(this.rowData.value));
                            }
                        }
                        else {
                            this.fieldLabels = [this.getDataFormattedValue(this.fieldData.field_label)];
                        }
                    }
                }
                if (this.fieldData.hasOwnProperty('additional_parameters_config') && this.fieldData.additional_parameters_config && !Array.isArray(this.fieldData.additional_parameters_config)) {
                    this.fieldLabels = [this.fieldData.additional_parameters_config];
                }
            }
            else if (this.fieldValue !== undefined && this.fieldValue !== null) {
                this.fieldLabels = [];
                this.fieldValue = this.fieldValue ? this.getDataFormattedValue(this.fieldValue) : this.fieldValue;
                this.fieldLabels.push(this.getDataFormattedValue(this.fieldValue));
            }
        }
        // set dynamic label on load
        if (!this.rowData) {
            this.setDynamicLabel();
            this.labelEmitter = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                const data = {};
                // console.log("res.apiKey:", res.apiKey);
                data[res.apiKey] = res.value;
                this.setDynamicLabel(data);
                this.getDynamicIframe(data);
            });
        }
        else if (this.fieldData.field_label.includes('%repeatablePos%')) {
            this.setDynamicFieldLabel();
        }
        if (this.additionalParameter['iframe']) {
            if (!this.additionalParameter['iframe'].includes('((dynamic))')) {
                this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(this.additionalParameter['iframe']);
            }
            this.getDynamicIframe();
        }
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
            let field_box = this.commonUtil.getMaskedData(this.fieldLabels[0], formats[0], formats[1], formats[2]);
            this.fieldLabels = [field_box];
        }
        // commented as this feature is no longer needed
        // if (this.rowData) {            
        //     this.applyFilterSubscriber = this.sharedEventsService.emitOnApplyFilter.subscribe(data => {
        //         if (this.rowData.html_id.includes(data.source)) {
        //             this.highlight = data.highlight
        //         }
        //     })
        // }
        this.showTruncatedList = (this.additionalParameter['CEE_show_list_items_trancated'] && this.additionalParameter['CEE_show_list_items_trancated'].toLowerCase() == 'true') ? true : this.showTruncatedList;
        this.showItemCount = (this.additionalParameter['CEE_show_list_items_limit'] && !isNaN(this.additionalParameter['CEE_show_list_items_limit'])) ? Number(this.additionalParameter['CEE_show_list_items_limit']) : 1;
        this.showItemKeys = this.additionalParameter['CEE_show_list_items_key'] ? this.additionalParameter['CEE_show_list_items_key'].split('||') : this.showItemKeys;
        this.showItemClickable = (this.additionalParameter['CEE_show_list_items_clickable'] && this.additionalParameter['CEE_show_list_items_clickable'].toLowerCase() == 'true') ? true : this.showItemClickable;
        this.showItemRoute = this.additionalParameter['CEE_show_list_items_route'] ? this.additionalParameter['CEE_show_list_items_route'] : '#';
        this.showItemRouteNewTab = (this.additionalParameter['CEE_show_list_items_route_new_tab'] && this.additionalParameter['CEE_show_list_items_route_new_tab'].toLowerCase() == 'true') ? true : this.showItemRouteNewTab;
        if (this.additionalParameter.hasOwnProperty('CEE_GetIndexFromRB') && this.additionalParameter['CEE_GetIndexFromRB'] == "true") {
            this.labelRefreshSubscriber = this.sharedEventsService.emitOnAddOrRemoveRB.subscribe((res) => {
                this.setDynamicFieldLabel();
            });
        }
        this.showItemRouteNewTab = (this.additionalParameter['CEE_show_list_items_route_new_tab'] && this.additionalParameter['CEE_show_list_items_route_new_tab'].toLowerCase() == 'true') ? true : this.showItemRouteNewTab;
        if (this.additionalParameter['CEE_truncated_label']) {
            let isTruncateSettingEnabled = (this.additionalParameter['CEE_truncated_label'].toLowerCase() === 'true') ? true : false;
            if (!isTruncateSettingEnabled)
                return;
            this.truncatedLabelMaxLen = parseInt(this.additionalParameter['CEE_truncated_label_char_count']) || 0;
            // console.log(this.truncatedLabelMaxLen, this.additionalParameter);
            this.showMoreLabel = this.additionalParameter['CEE_truncated_show_more_label'] || this.showMoreLabel;
            this.showLessLabel = this.additionalParameter['CEE_truncated_show_less_label'] || this.showLessLabel;
            this.displayShowMoreLabel = (this.additionalParameter['CEE_display_show_more_label'] && this.additionalParameter['CEE_display_show_more_label'].toLowerCase() === 'false') ? false : true;
            if (this.fieldLabels[0].length >= this.truncatedLabelMaxLen) {
                this.showTruncatedLabel = true;
                if (this.isHTML(this.fieldLabels[0])) {
                    const label = this.fieldLabels[0];
                    if (label && label.length >= this.truncatedLabelMaxLen) {
                        this.showTruncatedLabel = true;
                        const containsHtmlTags = /<\/?[a-z][\s\S]*>/i.test(label);
                        if (containsHtmlTags) {
                            this.truncatedLabel = [this.truncateHtmlPreservingTags(label, this.truncatedLabelMaxLen)];
                        }
                        else {
                            this.truncatedLabel = [label.substring(0, this.truncatedLabelMaxLen) + '...'];
                        }
                    }
                }
                else {
                    this.truncatedLabel = [this.fieldLabels[0].substring(0, this.truncatedLabelMaxLen) + "..."];
                }
            }
        }
        // setTimeout(() => {
        //     this.cdRef.detectChanges();
        // }, 2000);
    }
    truncateHtmlPreservingTags(html, maxLen) {
        if (typeof window === 'undefined') {
            return html;
        }
        const div = document.createElement('div');
        div.innerHTML = html;
        let truncated = '';
        let charCount = 0;
        function traverse(node) {
            if (charCount >= maxLen)
                return false;
            if (node.nodeType === Node.TEXT_NODE) {
                const text = node.textContent || '';
                const remaining = maxLen - charCount;
                if (text.length <= remaining) {
                    truncated += text;
                    charCount += text.length;
                }
                else {
                    truncated += text.substring(0, remaining) + '...';
                    charCount = maxLen;
                    return false;
                }
            }
            else if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node;
                const tagName = element.tagName.toLowerCase();
                // Start tag with attributes
                truncated += `<${tagName}`;
                Array.from(element.attributes).forEach(attr => {
                    truncated += ` ${attr.name}="${attr.value}"`;
                });
                truncated += `>`;
                // Traverse children
                for (const child of Array.from(element.childNodes)) {
                    if (!traverse(child))
                        break;
                }
                // Close tag
                truncated += `</${tagName}>`;
            }
            return true;
        }
        traverse(div);
        // Clean up DOM element to prevent memory leak
        div.innerHTML = '';
        div.remove();
        return truncated;
    }
    isHTML(str) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(str);
    }
    updateTruncatedLabel() {
        if (this.isExpanded) { // Show More
            this.truncatedLabel = this.fieldLabels;
        }
        else { // Show Less
            const containsHtmlTags = /<\/?[a-z][\s\S]*>/i.test(this.fieldLabels[0]);
            if (containsHtmlTags) {
                this.truncatedLabel = [this.truncateHtmlPreservingTags(this.fieldLabels[0], this.truncatedLabelMaxLen)];
            }
            else {
                this.truncatedLabel = [this.fieldLabels[0].substring(0, this.truncatedLabelMaxLen) + '...'];
            }
        }
    }
    toggleShowMoreHideMore(event) {
        event.stopPropagation();
        this.isExpanded = !this.isExpanded;
        this.updateTruncatedLabel();
    }
    setDynamicFieldLabel() {
        // For Resetting ActiveIndex On Adding or Removing 
        if (this.additionalParameter.hasOwnProperty('CEE_GetIndexFromRB') && this.additionalParameter['CEE_GetIndexFromRB'] == "true") {
            this.fieldLabels[0] = this.fieldData.field_label.replace('%repeatablePos%', this.activePosition.activeIndex);
        }
        else {
            this.fieldLabels[0] = this.fieldData.field_label.replace('%repeatablePos%', this.rowData.position + 1);
        }
    }
    prepareLink(searchStr, replaceStr) {
        return this.showItemRoute.replaceAll(searchStr, replaceStr);
    }
    getDynamicIframe(data) {
        if (this.additionalParameter['iframe'] && this.additionalParameter['iframe'].includes('((dynamic))')) {
            const iframeLabel = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.additionalParameter['iframe'] }, data).field_label;
            if (this._iframeLabel !== iframeLabel) {
                this._iframeLabel = iframeLabel;
                this.iframeLabel = '';
                const _this = this;
                // Clear any existing timeout to prevent multiple timeouts
                if (this.dynamicIframeTimeout) {
                    clearTimeout(this.dynamicIframeTimeout);
                }
                this.dynamicIframeTimeout = setTimeout(() => {
                    _this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(iframeLabel);
                }, 0);
            }
        }
    }
    onAPICallback(data) {
        if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            let resData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
            resData = this.getDataFormattedValue(resData);
            this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
        }
        if (!this.rowData) { // if rowData is null
            data = this.flatUnflat.createNestedObject(data);
            this.setDynamicLabel(data);
            let resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (resData !== null && resData !== undefined) {
                // console.log("LINE-133",this.fieldData.unique_id, resData);
                if (!Array.isArray(resData) && this.additionalParameter['CEE_STRING_FORMAT']) {
                    resData = this.wfeStepLoaderService.manipulateString(this.additionalParameter['CEE_STRING_FORMAT'], resData);
                }
                if (Array.isArray(resData)) {
                    this.fieldLabels = this.returnLabelsMapPossibleValues(resData);
                }
                else {
                    resData = this.getDataFormattedValue(resData);
                    this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
                }
            }
        }
        else {
            const useSecondaryApiKey = !this.isHTML(this.fieldData.field_label);
            this.setDynamicLabel(data, useSecondaryApiKey);
        }
    }
    getDataFormattedValue(data) {
        // For Data Format
        try {
            if (this.additionalParameter['Data Format']) {
                const formats = this.additionalParameter['Data Format'].split('||').map(str => str && str.trim());
                const transformType = formats[0] == "mask" ? "maskLabel" : formats[0];
                formats.shift();
                return this.setDynamicLabelUtil.returnFormattedValue(data, transformType, formats);
                // switch (formats[0].toLowerCase()) {
                //     case 'currency':
                //         return `${getCurrencySymbol(formats[1].trim(), 'narrow')}` +
                //             `${Number(data).toFixed(Number(formats[2].trim())).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
                //     case 'time':
                //         return moment(Number(data)).format(formats[1].trim());
                //     case 'date':
                //         return moment(data).format(formats[1].trim());
                //     default:
                //         return data;
                // }
            }
            // if (this.additionalParameter.hasOwnProperty('CEE_Thousand_Separator') && this.additionalParameter['CEE_Thousand_Separator'].toLowerCase() == 'true') {
            //     return this.commonUtil.formatNumber(data);
            // }
        }
        catch (error) {
            console.error(`Something went wrong while transforming data !!!: ${error}`);
        }
        return data;
    }
    getDynamicLabel(data, useSecondaryApiKey = false) {
        // substitutue repeatablePos and [*]
        if (this.fieldData.html_id && this.fieldData.field_label.includes("[*]")) {
            let i = this.commonUtil.extractLastValue(this.fieldData.html_id, "$");
            let key = this.fieldData.field_label;
            if (key.includes('%repeatablePos%')) {
                key = key.replace('%repeatablePos%', (Number(i) + 1));
            }
            let unique_id = this.fieldData.html_id;
            key = this.commonUtil.findIndicesAndSubstituteStars(key, unique_id, "$");
            this.fieldData.field_label = key;
        }
        return this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data, useSecondaryApiKey);
    }
    setDynamicLabel(data, useSecondaryApiKey = false) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            const existingLabel = this.fieldData.field_label;
            this.fieldData = this.getDynamicLabel(data, useSecondaryApiKey);
            if (this.fieldData.field_label != null && this.fieldData.field_label !== existingLabel) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.getDataFormattedValue(this.fieldData.field_label));
            }
        }
    }
    ngAfterViewInit() {
        this.cdRef.detectChanges();
    }
    /**
     * function returns a map with possible value id to the value
     * @param values api response data
     */
    returnLabelsMapPossibleValues(values) {
        let data = values;
        for (const val of values) {
            if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                data = this.fieldData.possible_values.map(pv => {
                    if (this.commonUtil.getPossibleId(pv) == val) {
                        return this.commonUtil.getPossibleValue(pv);
                    }
                });
            }
        }
        return data;
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        let data = [];
        let unique_id_value = '';
        if (typeof get_data === 'object') {
            Object.keys(get_data).forEach((key, value) => {
                data.push(key);
            });
            unique_id_value = this.fieldData.unique_id;
        }
        if (data.includes(unique_id_value)) {
            this.fieldLabels = [get_data[unique_id_value]];
            // this.inputValue = get_data[unique_id_value];
            // this.updateFieldData(this.inputValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    checkIfIframe(value) {
        if (value.includes('iframe')) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
        }
        else {
            return this.getDataFormattedValue(value);
        }
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
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
        if (changes.rowData && changes.rowData.currentValue &&
            this.fieldLabels[0] !== changes.rowData.currentValue.value) {
            if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                for (const val of this.fieldData.possible_values) {
                    if (this.commonUtil.getPossibleId(val) == changes.rowData.currentValue.value) {
                        this.fieldLabels.push(this.getDataFormattedValue(this.commonUtil.getPossibleValue(val)));
                    }
                }
            }
            else {
                // setTimeout(() => { // OLD Implementation
                const existingValue = changes.rowData.currentValue.value;
                if (existingValue && existingValue.includes('((dynamic))')) {
                    let newFieldData = this.getDynamicLabel(existingValue);
                    if (newFieldData.field_label) {
                        this.fieldLabels = [newFieldData.field_label];
                    }
                }
                else {
                    this.fieldLabels = [existingValue];
                }
                // }, 0); // OLD Implementation
            }
        }
    }
    switchEvent(event, showItemRouteNewTab) {
        const ModalOnPageLeave = this.additionalParameter['ModalOnPageLeave'] ? this.additionalParameter['ModalOnPageLeave'] : null;
        if (showItemRouteNewTab == false) {
            let eventName = event.split('||');
            let resqt = eventName[1] + "##id";
            let primaryFieldData = this.appData;
            primaryFieldData = {
                ...primaryFieldData, ...{
                    id: "newTabId",
                    editable: false,
                    visible: false,
                    mandatory: false,
                    value: eventName[0],
                    apiKey: resqt,
                    isValid: true,
                    responseApiKey: [],
                    requestApiKey: [resqt]
                }
            };
            this.appDataService.setAppData(primaryFieldData);
            this.onComponentEvent('OnClick');
        }
        else {
            let target = showItemRouteNewTab ? '_blank' : '';
            this.wfeEventListHandler.redirectToHref(event, ModalOnPageLeave, target);
        }
    }
    labelClick() {
        if (this.isWaitForDataSet) {
            const subscription = this.sharedEventsService.tableCellDataSet.subscribe(() => {
                subscription.unsubscribe();
                this.onComponentEvent('OnClick');
            });
        }
        else {
            this.onComponentEvent('OnClick');
        }
    }
    static ɵfac = function CeeLabelComponent_Factory(t) { return new (t || CeeLabelComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.MatDialog), i0.ɵɵdirectiveInject(i9.MatSnackBar), i0.ɵɵdirectiveInject(i10.HttpClient), i0.ɵɵdirectiveInject(i11.CeeApiService), i0.ɵɵdirectiveInject(i12.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeLabelComponent, selectors: [["app-cee-label"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", activePosition: "activePosition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["tooltipTemplate", ""], ["menu", "matMenu"], ["class", "field-wrapper", 3, "id", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-label", "row"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["container", "body", "tooltipClass", "label-toolip-custom-class", 3, "ngbTooltip", "placement", "innerHTML", 4, "ngIf"], ["title", "label-component", "width", "100%", "height", "100%", "allow", "autoplay; encrypted-media", "allowfullscreen", "", 3, "src"], ["class", "col-6 btn btn-primary menuBtn", 3, "matMenuTriggerFor", 4, "ngIf"], ["href", "javascript:void(0)", "class", "col-6 initial-item", "mat-menu-item", "", 3, "title", "pointer-events", "click", 4, "ngIf"], ["href", "javascript:void(0)", "mat-menu-item", "", 1, "col-6", "initial-item", 3, "click", "title"], [1, "cee-label-highlight", 3, "innerHTML"], [1, "col-6", "btn", "btn-primary", "menuBtn", 3, "matMenuTriggerFor"], ["href", "javascript:void(0)", "mat-menu-item", "", 3, "title", "pointer-events", "click", 4, "ngIf"], ["href", "javascript:void(0)", "mat-menu-item", "", 3, "click", "title"], ["class", "col-6 initial-item alert alert-warning", "role", "alert", 3, "title", 4, "ngIf"], ["role", "alert", 1, "col-6", "initial-item", "alert", "alert-warning", 3, "title"], ["class", "extra-items alert alert-warning", "role", "alert", 3, "title", 4, "ngIf"], ["role", "alert", 1, "extra-items", "alert", "alert-warning", 3, "title"], [3, "innerHTML", "class"], [3, "click", "innerHTML"], [3, "class", "click", 4, "ngIf"], [3, "innerHTML", "class", "click", 4, "ngIf"], [3, "click"], ["class", "see-more-btn", 3, "click", 4, "ngIf"], [3, "innerHTML"], [1, "see-more-btn", 3, "click"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], ["container", "body", "tooltipClass", "label-toolip-custom-class", 3, "ngbTooltip", "placement", "innerHTML"], [1, "tooltip_container"], [1, "tooltip_text", 3, "innerHTML"]], template: function CeeLabelComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeLabelComponent_div_0_Template, 8, 5, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, CommonModule, i13.NgForOf, i13.NgIf, TooltipModule, i14.TooltipDirective, MatMenuModule, i15.MatMenu, i15.MatMenuItem, i15.MatMenuTrigger, HighlightPipe, NgbTooltipModule, i16.NgbTooltip], styles: [".initial-item[_ngcontent-%COMP%]{width:34%!important;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:5px;margin:5px}.extra-items[_ngcontent-%COMP%], .menuBtn[_ngcontent-%COMP%]{margin:5px}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeLabelComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-label', standalone: true, imports: [MatTooltipModule, CommonModule, TooltipModule, MatMenuModule, HighlightPipe, NgbTooltipModule], template: "<div class=\"field-wrapper\" id=\"{{html_id}}\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-label row\">\r\n\t\t<ng-container *ngIf=\"iframeLabel && iframeLabel != ''\">\r\n\t\t\t<iframe title=\"label-component\" width=\"100%\" height=\"100%\" [src]=\"iframeLabel\" allow=\"autoplay; encrypted-media\"\r\n\t\t\t\tallowfullscreen  class=\"\r\n\t\t\t\t{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\"></iframe>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngFor=\"let fieldLabel of fieldLabels; let i = index\">\r\n\t\t\t<!-- {{fieldLabels.length}} -->\r\n\t\t\t<ng-container *ngIf=\"fieldLabel && fieldLabel !='' && fieldLabel !=' '\">\r\n\t\t\t\t<!-- ################## Show Truncated List ################## -->\r\n\t\t\t\t<ng-container *ngIf=\"showTruncatedList\">\r\n\t\t\t\t\t<!-- ################## Clickable List ################## -->\r\n\t\t\t\t\t<ng-container *ngIf=\"showItemClickable\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let labelObj of fieldLabel; let j = index\">\r\n\t\t\t\t\t\t\t<a *ngIf=\"j<showItemCount\" \r\n\t\t\t\t\t\t\t\thref=\"javascript:void(0)\" \r\n\t\t\t\t\t\t\t\t(click)=\"switchEvent(prepareLink('%id%', labelObj[showItemKeys[0]]), showItemRouteNewTab)\" \r\n\t\t\t\t\t\t\t\tattr.aria-label=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" \r\n\t\t\t\t\t\t\t\ttitle=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" \r\n\t\t\t\t\t\t\t\tclass=\"col-6 initial-item\" \r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t[attr.disabled]=\"!isEditable\" \r\n\t\t\t\t\t\t\t\t[style.pointer-events]=\"!isEditable ? 'none' : 'auto'\" \r\n\t\t\t\t\t\t\t\tmat-menu-item>\r\n\t\t\t\t\t\t\t\t@if(!isHTML(labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]) && highlight) {\r\n\t\t\t\t\t\t\t\t\t<label class=\"cee-label-highlight \" [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" [innerHTML]=\"labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]] | highlight : highlight\"></label>\r\n\t\t\t\t\t\t\t\t}@else {\r\n\t\t\t\t\t\t\t\t\t<label>{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}</label>\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<button *ngIf=\"fieldLabel.length > showItemCount\" class=\"col-6 btn btn-primary menuBtn\" [matMenuTriggerFor]=\"menu\">+{{fieldLabel.length - showItemCount}}</button>\r\n\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let labelObj of fieldLabel; let j = index\">\r\n\t\t\t\t\t\t\t\t<a *ngIf=\"j>=showItemCount\" \r\n\t\t\t\t\t\t\t\t\tattr.aria-label=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" \r\n\t\t\t\t\t\t\t\t\ttitle=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" \r\n\t\t\t\t\t\t\t\t\thref=\"javascript:void(0)\" \r\n\t\t\t\t\t\t\t\t\t(click)=\"switchEvent(prepareLink('%id%', labelObj[showItemKeys[0]]), showItemRouteNewTab)\" \r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t[attr.disabled]=\"!isEditable\" \r\n\t\t\t\t\t\t\t\t\t[style.pointer-events]=\"!isEditable ? 'none' : 'auto'\" \r\n\t\t\t\t\t\t\t\t\tmat-menu-item>\r\n\t\t\t\t\t\t\t\t\t{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\r\n\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t<!-- ################## Non Clickable List ################## -->\r\n\t\t\t\t\t<ng-container *ngIf=\"!showItemClickable\">\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let labelObj of fieldLabel; let j = index\">\r\n\t\t\t\t\t\t\t<div *ngIf=\"j<showItemCount\" attr.aria-label=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" title=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" class=\"col-6 initial-item alert alert-warning\" role=\"alert\">\r\n\t\t\t\t\t\t\t\t@if(!isHTML(labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]) && highlight) {\r\n\t\t\t\t\t\t\t\t\t<label class=\"cee-label-highlight \" [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" [innerHTML]=\"labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]] | highlight : highlight\"></label>\r\n\t\t\t\t\t\t\t\t}@else {\r\n\t\t\t\t\t\t\t\t\t<label>{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}</label>\r\n\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t<button *ngIf=\"fieldLabel.length > showItemCount\" class=\"col-6 btn btn-primary menuBtn\" [matMenuTriggerFor]=\"menu\">+{{fieldLabel.length - showItemCount}}</button>\r\n\t\t\t\t\t\t<mat-menu #menu=\"matMenu\">\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let labelObj of fieldLabel; let j = index\">\r\n\t\t\t\t\t\t\t\t<div *ngIf=\"j>=showItemCount\" attr.aria-label=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" title=\"{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}\" class=\"extra-items alert alert-warning\" role=\"alert\">{{labelObj[showItemKeys.length > 1 ? showItemKeys[1] : showItemKeys[0]]}}</div>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t</mat-menu>\r\n\t\t\t\t\t</ng-container>\r\n\t\t\t\t</ng-container>\r\n\t\t\t\t<ng-container *ngIf=\"!showTruncatedList\">\r\n\t\t\t\t\t@if (!showTruncatedLabel) {\r\n\t\t\t\t\t\t@if (!isHTML(fieldLabel) && highlight) {\r\n\t\t\t\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" [innerHTML]=\"fieldLabel | highlight : highlight\"\r\n\t\t\t\t\t\t\t\t(click)=\"labelClick()\"\r\n\t\t\t\t\t\t\t\tclass=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\"></label>\r\n\t\t\t\t\t\t} @else {\r\n\t\t\t\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" *ngIf=\"!isHTML(fieldLabel)\" (click)=\"labelClick()\" class=\"\r\n\t\t\t\t\t\t\t\t{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t\t\t\t\t\t\t\t{{fieldLabel}}\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" *ngIf=\"isHTML(fieldLabel)\" [innerHTML]=\"checkIfIframe(fieldLabel)\"\r\n\t\t\t\t\t\t\t\t(click)=\"labelClick()\"\r\n\t\t\t\t\t\t\t\tclass=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\"></label>\r\n\t\t\t\t\t\t}\r\n\t\t\t\t\t} @else {\r\n\t\t\t\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" (click)=\"labelClick()\" class=\"\r\n\t\t\t\t\t\t\t{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t\t\t\t\t\t\t\t \r\n\t\t\t\t\t\t\t\t@if(!isHTML(fieldLabel)) {\r\n\t\t\t\t\t\t\t\t\t\t{{truncatedLabel}}\r\n\t\t\t\t\t\t\t\t\t} @else {\r\n\t\t\t\t\t\t\t\t\t\t<span [innerHTML]=\"truncatedLabel\"></span>\r\n\t\t\t\t\t\t\t\t\t}\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t<button (click)=\"this.toggleShowMoreHideMore($event)\" class=\"see-more-btn\" *ngIf=\"showTruncatedLabel && displayShowMoreLabel\">\r\n\t\t\t\t\t\t\t\t\t{{ isExpanded ? showLessLabel : showMoreLabel }}\r\n\t\t\t\t\t\t\t\t</button>\r\n\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t}\r\n\t\t\t\t\t\r\n\t\t\t\t</ng-container>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t\t<button *ngIf=\"hasTooltip && !contentTooltip.enabled\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\"\r\n\t\t\t[attr.aria-label]=\"'Tooltip: ' + tooltipText \">i</button>\r\n\t\t<span *ngIf=\"hasTooltip && contentTooltip.enabled\" [ngbTooltip]=\"tooltipTemplate\" [placement]=\"contentTooltip.position\" container=\"body\" tooltipClass=\"label-toolip-custom-class\" [innerHTML]=\"contentTooltip.iconText\">\r\n\t\t</span>\r\n\t\t\r\n\r\n\t\t<!-- Tooltip with informaion icon -->\r\n\t\t<!-- <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n\t\t\tclass=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n\t\t\t[attr.aria-label]=\"'Tooltip: ' + tooltipText\" [customTooltip]=\"tooltipTemplate\"\r\n\t\t\t[tooltipId]=\"fieldData.unique_id\" [tooltipAdditionalparameter]=\"additionalParameter\">\r\n\t\t\ti\r\n\t\t</button> -->\r\n\r\n\t\t<!-- Tooltip Template -->\r\n\t\t<ng-template #tooltipTemplate>\r\n\t\t\t<div class=\"tooltip_container\">\r\n\t\t\t\t<span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n\t\t\t</div>\r\n\t\t</ng-template>\r\n\t</div>\r\n</div>\r\n", styles: [".initial-item{width:34%!important;overflow:hidden;white-space:nowrap;text-overflow:ellipsis;padding:5px;margin:5px}.extra-items,.menuBtn{margin:5px}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: i2.UserDataHandlerService }, { type: i3.SharedEventsServiceService }, { type: i4.CEEInternalEmitterService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.MatDialog }, { type: i9.MatSnackBar }, { type: i10.HttpClient }, { type: i11.CeeApiService }, { type: i12.Router }, { type: i0.ChangeDetectorRef }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
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
        }], activePosition: [{
            type: Input,
            args: ['activePosition']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeLabelComponent, { className: "CeeLabelComponent", filePath: "lib\\field-components\\cee-label\\cee-label.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWxhYmVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1sYWJlbC9jZWUtbGFiZWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxhYmVsL2NlZS1sYWJlbC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUcsTUFBTSxlQUFlLENBQUM7QUFDeEosT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVTdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQU0xRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUN2RCxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDM0QsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNEJBQTRCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwQjVELDZCQUF1RDtJQUN0RCw0QkFFbUc7Ozs7SUFEakYsY0FDdUU7SUFEdkUsdUpBQ3VFO0lBRjlCLGtFQUFtQjs7O0lBdUJ4RSw0QkFBdU47Ozs7OztJQUFwSCxvTEFBMkc7Ozs7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UyxDQUFDLEdBQUcsRUFBRTtnQkFDMUUsWUFBWSxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUMzQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFDLENBQUM7U0FDTjthQUNJO1lBQ0QsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQ3BDO0lBQ0wsQ0FBQzsyRUFwbEJRLGlCQUFpQjs2REFBakIsaUJBQWlCO1lDL0I5QixrRUFBOEQ7O1lBQWpCLG9DQUFlOzRCRDZCN0MsZ0JBQWdCLEVBQUUsWUFBWSx5QkFBRSxhQUFhLHdCQUFFLGFBQWEsb0RBQUUsYUFBYSxFQUFFLGdCQUFnQjs7aUZBRS9GLGlCQUFpQjtjQVA3QixTQUFTOzJCQUNJLGVBQWUsY0FHYixJQUFJLFdBQ04sQ0FBQyxnQkFBZ0IsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZ0JBQWdCLENBQUM7K1pBSXhGLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDbUIsY0FBYztrQkFBdEMsS0FBSzttQkFBQyxnQkFBZ0I7O2tGQVZkLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcywgQ2hhbmdlRGV0ZWN0b3JSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRmxhdFVuZmxhdCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZsYXQtdW5mbGF0LWpzb24nO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL2hpZ2hsaWdodC5waXBlJztcclxuaW1wb3J0IHsgTmdiVG9vbHRpcE1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLWxhYmVsJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtbGFiZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLWxhYmVsLmNvbXBvbmVudC5zY3NzJywgJy4uL2ZpZWxkLWNvbW1vbi5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0cyA6IFtNYXRUb29sdGlwTW9kdWxlLCBDb21tb25Nb2R1bGUsIFRvb2x0aXBNb2R1bGUsIE1hdE1lbnVNb2R1bGUsIEhpZ2hsaWdodFBpcGUsIE5nYlRvb2x0aXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVMYWJlbENvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwcmltYXJ5S2V5SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCdhY3RpdmVQb3NpdGlvbicpIGFjdGl2ZVBvc2l0aW9uOiBhbnk7XHJcbiAgICBodG1sX2lkID0gJyc7XHJcbiAgICBmaWVsZExhYmVscyA9IFtdO1xyXG4gICAgbGFiZWxFbWl0dGVyOiBTdWJzY3JpcHRpb247XHJcbiAgICBfaWZyYW1lTGFiZWw6IHN0cmluZztcclxuICAgIGlmcmFtZUxhYmVsOiBTYWZlUmVzb3VyY2VVcmw7XHJcbiAgICB0b29sdGlwVGV4dDogYW55ID0gXCJcIjtcclxuXHJcbiAgICBzaG93VHJ1bmNhdGVkTGlzdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd0l0ZW1Db3VudDogbnVtYmVyID0gMTtcclxuICAgIHNob3dJdGVtS2V5czogYW55ID0gWydpZCcsICd2YWx1ZSddO1xyXG4gICAgc2hvd0l0ZW1DbGlja2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dJdGVtUm91dGU6IGFueSA9ICcnO1xyXG4gICAgc2hvd0l0ZW1Sb3V0ZU5ld1RhYjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaGlnaGxpZ2h0OiBzdHJpbmc7XHJcbiAgICBsYWJlbFJlZnJlc2hTdWJzY3JpYmVyOiBTdWJzY3JpcHRpb247XHJcbiAgICBhcHBseUZpbHRlclN1YnNjcmliZXI6IFN1YnNjcmlwdGlvbjtcclxuXHJcbiAgICBzaG93VHJ1bmNhdGVkTGFiZWw6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHRydW5jYXRlZExhYmVsTWF4TGVuOiBudW1iZXIgPSAwO1xyXG4gICAgdHJ1bmNhdGVkTGFiZWw6IGFueSA9IFtdO1xyXG4gICAgaXNFeHBhbmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2hvd01vcmVMYWJlbDogc3RyaW5nID0gJ1Nob3cgTW9yZSc7XHJcbiAgICBzaG93TGVzc0xhYmVsOiBzdHJpbmcgPSAnU2hvdyBMZXNzJztcclxuICAgIGRpc3BsYXlTaG93TW9yZUxhYmVsOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIGlzV2FpdEZvckRhdGFTZXQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGNvbnRlbnRUb29sdGlwID0gIHtcclxuICAgICAgICBlbmFibGVkOiBmYWxzZSxcclxuICAgICAgICBwb3NpdGlvbjogJ3RvcCcsXHJcbiAgICAgICAgaWNvblRleHQ6ICdpJ1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmxhdFVuZmxhdDogRmxhdFVuZmxhdDtcclxuICAgIHByaXZhdGUgZHluYW1pY0lmcmFtZVRpbWVvdXQ6IGFueTtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyBzYW5pdGl6ZXI6IERvbVNhbml0aXplcixcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWZcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSwgd2ZlU3RlcExvYWRlclNlcnZpY2UsIGRpYWxvZywgc25hY2tCYXIsIGh0dHAsIGNlZUFwaVNlcnZpY2UsIHJvdXRlcik7XHJcbiAgICAgICAgdGhpcy5mbGF0VW5mbGF0ID0gbmV3IEZsYXRVbmZsYXQoYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEsIHRoaXMuY2RSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICAvLyBvbkRlc3Ryb3koKSB7XHJcbiAgICAvLyAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIC8vICAgICB0aGlzLnVuc3Vic2NyaWJlKCk7IC8vIHVuc3Vic2NyaWJlIHRoZSBldmVudCBvbiBkZXN0cm95XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgaWYodGhpcy5keW5hbWljSWZyYW1lVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5keW5hbWljSWZyYW1lVGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuZHluYW1pY0lmcmFtZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDbGVhbiB1cCBhcnJheXMgYW5kIG9iamVjdHNcclxuICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW107XHJcbiAgICAgICAgdGhpcy50cnVuY2F0ZWRMYWJlbCA9IFtdO1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1LZXlzID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbnRlbnRUb29sdGlwID0gbnVsbDtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTsgLy8gdW5zdWJzY3JpYmUgdGhlIGV2ZW50IG9uIGRlc3Ryb3lcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbEVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEVtaXR0ZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEVtaXR0ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubGFiZWxSZWZyZXNoU3Vic2NyaWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsUmVmcmVzaFN1YnNjcmliZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbFJlZnJlc2hTdWJzY3JpYmVyID0gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFwcGx5RmlsdGVyU3Vic2NyaWJlcikge1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyU3Vic2NyaWJlci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmFwcGx5RmlsdGVyU3Vic2NyaWJlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIEZvciB1bmlxdWUgaHRtbCBpZFxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicm93RGF0YTogXCIsdGhpcy5yb3dEYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBpZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQgPT09IFwiZGVhbHMtbGFiZWwtZmllbGRcIil7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmllbGREYXRhKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5odG1sX2lkID0gdGhpcy5maWVsZERhdGEuaHRtbF9pZFxyXG4gICAgICAgIC8vIEVORFxyXG4gICAgICAgIHRoaXMudG9vbHRpcFRleHQgPSAoIHRoaXMuZmllbGREYXRhICYmIHRoaXMuZmllbGREYXRhLnRvb2x0aXAgKSA/IHRoaXMuZmllbGREYXRhLnRvb2x0aXAudG9TdHJpbmcoKS5yZXBsYWNlKCAvKDwoW14+XSspPikvaWcsICcnKSA6IFwiXCI7XHJcbiAgICAgICAgdGhpcy50YWJJbmRleFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUYWJJbmRleCddO1xyXG4gICAgICAgIHRoaXMuaXNXYWl0Rm9yRGF0YVNldCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX2xhYmVsX3dhaXRfZm9yX2RhdGFfc2V0J10/LnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnO1xyXG4gICAgICAgIHRoaXMuY29udGVudFRvb2x0aXAuZW5hYmxlZCA9ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9sYWJlbF9zaG93X2NvbnRlbnRfdG9vbHRpcCddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX2xhYmVsX3Nob3dfY29udGVudF90b29sdGlwJ10udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY29udGVudFRvb2x0aXAucG9zaXRpb24gPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9sYWJlbF9jb250ZW50X3Rvb2x0aXBfcG9zaXRpb24nXSB8fCAndG9wJztcclxuICAgICAgICB0aGlzLmNvbnRlbnRUb29sdGlwLmljb25UZXh0ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfbGFiZWxfY29udGVudF90b29sdGlwX2ljb24nXSAgfHwgJ2knO1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhWydmaWVsZF9sYWJlbCddICs9IFwiIFwiO1xyXG4gICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBbXTsgLy8gVE9ETyA6IENoZWNrIEltcGxlbWVudGF0aW9uXHJcbiAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuZ2V0RGF0YUZvcm1hdHRlZFZhbHVlKHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsKSk7IC8vIE9MRCBJbXBsZW1lbnRhdGlvblxyXG4gICAgICAgIC8vIHRoaXMuZ2V0VmFsdWUodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IGFwaUtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaW5nbGVBcGlLZXknKSA9PT0gJ3RydWUnID8gdGhpcy5maWVsZERhdGEuYXBpX2tleSA6IHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXk7XHJcbiAgICAgICAgaWYgKGFwaUtleSB8fCAodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwgJiYgdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykpKSB7ICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgdGhpcy5yb3dEYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzICYmIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZUlkKHZhbCkgPT0gdGhpcy5yb3dEYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuZ2V0RGF0YUZvcm1hdHRlZFZhbHVlKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZVZhbHVlKHZhbCkpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS52YWx1ZSAmJiB0aGlzLnJvd0RhdGEudmFsdWUuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzLnB1c2godGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUodGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh7ZmllbGRfbGFiZWw6dGhpcy5yb3dEYXRhLnZhbHVlfSkuZmllbGRfbGFiZWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuZ2V0RGF0YUZvcm1hdHRlZFZhbHVlKHRoaXMucm93RGF0YS52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFt0aGlzLmdldERhdGFGb3JtYXR0ZWRWYWx1ZSh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmhhc093blByb3BlcnR5KCdhZGRpdGlvbmFsX3BhcmFtZXRlcnNfY29uZmlnJykgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzX2NvbmZpZyAmJiAhQXJyYXkuaXNBcnJheSh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnNfY29uZmlnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBbdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzX2NvbmZpZ107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5maWVsZFZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUgPyB0aGlzLmdldERhdGFGb3JtYXR0ZWRWYWx1ZSh0aGlzLmZpZWxkVmFsdWUpIDogdGhpcy5maWVsZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuZ2V0RGF0YUZvcm1hdHRlZFZhbHVlKHRoaXMuZmllbGRWYWx1ZSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgZHluYW1pYyBsYWJlbCBvbiBsb2FkXHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEVtaXR0ZXIgPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInJlcy5hcGlLZXk6XCIsIHJlcy5hcGlLZXkpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtyZXMuYXBpS2V5XSA9IHJlcy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2V0RHluYW1pY0xhYmVsKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljSWZyYW1lKGRhdGEpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwuaW5jbHVkZXMoJyVyZXBlYXRhYmxlUG9zJScpKSB7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNldER5bmFtaWNGaWVsZExhYmVsKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydpZnJhbWUnXSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnaWZyYW1lJ10uaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWZyYW1lTGFiZWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydpZnJhbWUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljSWZyYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX01hc2tOdW1iZXJMaW1pdCddKXtcclxuICAgICAgICAgICAgbGV0IGZvcm1hdHMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NYXNrTnVtYmVyTGltaXQnXS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICBsZXQgZmllbGRfYm94ID0gdGhpcy5jb21tb25VdGlsLmdldE1hc2tlZERhdGEodGhpcy5maWVsZExhYmVsc1swXSxmb3JtYXRzWzBdLCBmb3JtYXRzWzFdLGZvcm1hdHNbMl0pO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW2ZpZWxkX2JveF07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbW1lbnRlZCBhcyB0aGlzIGZlYXR1cmUgaXMgbm8gbG9uZ2VyIG5lZWRlZFxyXG4gICAgICAgIC8vIGlmICh0aGlzLnJvd0RhdGEpIHsgICAgICAgICAgICBcclxuICAgICAgICAvLyAgICAgdGhpcy5hcHBseUZpbHRlclN1YnNjcmliZXIgPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uQXBwbHlGaWx0ZXIuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgaWYgKHRoaXMucm93RGF0YS5odG1sX2lkLmluY2x1ZGVzKGRhdGEuc291cmNlKSkge1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuaGlnaGxpZ2h0ID0gZGF0YS5oaWdobGlnaHRcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgfSlcclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd1RydW5jYXRlZExpc3QgPSAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX3RyYW5jYXRlZCddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc190cmFuY2F0ZWQnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykgPyB0cnVlIDogdGhpcy5zaG93VHJ1bmNhdGVkTGlzdDtcclxuICAgICAgICB0aGlzLnNob3dJdGVtQ291bnQgPSAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX2xpbWl0J10gJiYgIWlzTmFOKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc19saW1pdCddKSkgPyBOdW1iZXIodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX2xpbWl0J10pIDogMTtcclxuICAgICAgICB0aGlzLnNob3dJdGVtS2V5cyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc19rZXknXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc19rZXknXS5zcGxpdCgnfHwnKSA6IHRoaXMuc2hvd0l0ZW1LZXlzO1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1DbGlja2FibGUgPSAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX2NsaWNrYWJsZSddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc19jbGlja2FibGUnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykgPyB0cnVlIDogdGhpcy5zaG93SXRlbUNsaWNrYWJsZTtcclxuICAgICAgICB0aGlzLnNob3dJdGVtUm91dGUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9zaG93X2xpc3RfaXRlbXNfcm91dGUnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc19yb3V0ZSddIDogJyMnO1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1Sb3V0ZU5ld1RhYiA9ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9zaG93X2xpc3RfaXRlbXNfcm91dGVfbmV3X3RhYiddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc19yb3V0ZV9uZXdfdGFiJ10udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpID8gdHJ1ZSA6IHRoaXMuc2hvd0l0ZW1Sb3V0ZU5ld1RhYjtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlci5oYXNPd25Qcm9wZXJ0eSgnQ0VFX0dldEluZGV4RnJvbVJCJykgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfR2V0SW5kZXhGcm9tUkInXSA9PSBcInRydWVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsUmVmcmVzaFN1YnNjcmliZXIgPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uQWRkT3JSZW1vdmVSQi5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXREeW5hbWljRmllbGRMYWJlbCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1Sb3V0ZU5ld1RhYiA9ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9zaG93X2xpc3RfaXRlbXNfcm91dGVfbmV3X3RhYiddICAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9zaG93X2xpc3RfaXRlbXNfcm91dGVfbmV3X3RhYiddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnKSA/IHRydWUgOiB0aGlzLnNob3dJdGVtUm91dGVOZXdUYWI7XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3RydW5jYXRlZF9sYWJlbCddKXtcclxuICAgICAgICAgICAgbGV0IGlzVHJ1bmNhdGVTZXR0aW5nRW5hYmxlZCA9ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV90cnVuY2F0ZWRfbGFiZWwnXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpID8gdHJ1ZSA6IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYoIWlzVHJ1bmNhdGVTZXR0aW5nRW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50cnVuY2F0ZWRMYWJlbE1heExlbiA9IHBhcnNlSW50KHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3RydW5jYXRlZF9sYWJlbF9jaGFyX2NvdW50J10pIHx8IDA7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudHJ1bmNhdGVkTGFiZWxNYXhMZW4sIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dNb3JlTGFiZWwgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV90cnVuY2F0ZWRfc2hvd19tb3JlX2xhYmVsJ10gfHwgdGhpcy5zaG93TW9yZUxhYmVsO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dMZXNzTGFiZWwgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV90cnVuY2F0ZWRfc2hvd19sZXNzX2xhYmVsJ10gfHwgdGhpcy5zaG93TGVzc0xhYmVsO1xyXG4gICAgICAgICAgICB0aGlzLmRpc3BsYXlTaG93TW9yZUxhYmVsID0gKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX2Rpc3BsYXlfc2hvd19tb3JlX2xhYmVsJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfZGlzcGxheV9zaG93X21vcmVfbGFiZWwnXS50b0xvd2VyQ2FzZSgpID09PSAnZmFsc2UnKSA/IGZhbHNlIDogdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuZmllbGRMYWJlbHNbMF0ubGVuZ3RoID49IHRoaXMudHJ1bmNhdGVkTGFiZWxNYXhMZW4pe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VHJ1bmNhdGVkTGFiZWwgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzSFRNTCh0aGlzLmZpZWxkTGFiZWxzWzBdKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGxhYmVsID0gdGhpcy5maWVsZExhYmVsc1swXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxhYmVsICYmIGxhYmVsLmxlbmd0aCA+PSB0aGlzLnRydW5jYXRlZExhYmVsTWF4TGVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RydW5jYXRlZExhYmVsID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5zSHRtbFRhZ3MgPSAvPFxcLz9bYS16XVtcXHNcXFNdKj4vaS50ZXN0KGxhYmVsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5zSHRtbFRhZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudHJ1bmNhdGVkTGFiZWwgPSBbdGhpcy50cnVuY2F0ZUh0bWxQcmVzZXJ2aW5nVGFncyhsYWJlbCwgdGhpcy50cnVuY2F0ZWRMYWJlbE1heExlbildO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRydW5jYXRlZExhYmVsID0gW2xhYmVsLnN1YnN0cmluZygwLCB0aGlzLnRydW5jYXRlZExhYmVsTWF4TGVuKSArICcuLi4nXTsgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRydW5jYXRlZExhYmVsID0gW3RoaXMuZmllbGRMYWJlbHNbMF0uc3Vic3RyaW5nKDAsIHRoaXMudHJ1bmNhdGVkTGFiZWxNYXhMZW4pICsgXCIuLi5cIl07ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIC8vIH0sIDIwMDApO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0cnVuY2F0ZUh0bWxQcmVzZXJ2aW5nVGFncyhodG1sOiBzdHJpbmcsIG1heExlbjogbnVtYmVyKTogc3RyaW5nIHsgICAgICAgIFxyXG4gICAgICAgIGlmICh0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICByZXR1cm4gaHRtbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xyXG5cclxuICAgICAgICBsZXQgdHJ1bmNhdGVkID0gJyc7XHJcbiAgICAgICAgbGV0IGNoYXJDb3VudCA9IDA7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGU6IE5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgaWYgKGNoYXJDb3VudCA+PSBtYXhMZW4pIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLlRFWFRfTk9ERSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IG5vZGUudGV4dENvbnRlbnQgfHwgJyc7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1haW5pbmcgPSBtYXhMZW4gLSBjaGFyQ291bnQ7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRleHQubGVuZ3RoIDw9IHJlbWFpbmluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRydW5jYXRlZCArPSB0ZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNoYXJDb3VudCArPSB0ZXh0Lmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1bmNhdGVkICs9IHRleHQuc3Vic3RyaW5nKDAsIHJlbWFpbmluZykgKyAnLi4uJztcclxuICAgICAgICAgICAgICAgICAgICBjaGFyQ291bnQgPSBtYXhMZW47XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKG5vZGUubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbm9kZSBhcyBFbGVtZW50O1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGFnTmFtZSA9IGVsZW1lbnQudGFnTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0YXJ0IHRhZyB3aXRoIGF0dHJpYnV0ZXNcclxuICAgICAgICAgICAgICAgIHRydW5jYXRlZCArPSBgPCR7dGFnTmFtZX1gO1xyXG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShlbGVtZW50LmF0dHJpYnV0ZXMpLmZvckVhY2goYXR0ciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ1bmNhdGVkICs9IGAgJHthdHRyLm5hbWV9PVwiJHthdHRyLnZhbHVlfVwiYDtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgdHJ1bmNhdGVkICs9IGA+YDtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBUcmF2ZXJzZSBjaGlsZHJlblxyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBjaGlsZCBvZiBBcnJheS5mcm9tKGVsZW1lbnQuY2hpbGROb2RlcykpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRyYXZlcnNlKGNoaWxkKSkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQ2xvc2UgdGFnXHJcbiAgICAgICAgICAgICAgICB0cnVuY2F0ZWQgKz0gYDwvJHt0YWdOYW1lfT5gO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRyYXZlcnNlKGRpdik7XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgRE9NIGVsZW1lbnQgdG8gcHJldmVudCBtZW1vcnkgbGVha1xyXG4gICAgICAgIGRpdi5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICBkaXYucmVtb3ZlKCk7XHJcbiAgICAgICAgcmV0dXJuIHRydW5jYXRlZDsgICAgICAgIFxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpc0hUTUwoc3RyOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IC8oPChbXj5dKyk+KS9pZztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdChzdHIpO1xyXG4gICAgfVxyXG4gICAgdXBkYXRlVHJ1bmNhdGVkTGFiZWwoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFeHBhbmRlZCkgeyAvLyBTaG93IE1vcmVcclxuICAgICAgICAgICAgdGhpcy50cnVuY2F0ZWRMYWJlbCA9IHRoaXMuZmllbGRMYWJlbHM7XHJcbiAgICAgICAgfSBlbHNlIHsgLy8gU2hvdyBMZXNzXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjb250YWluc0h0bWxUYWdzID0gLzxcXC8/W2Etel1bXFxzXFxTXSo+L2kudGVzdCh0aGlzLmZpZWxkTGFiZWxzWzBdKTtcclxuICAgICAgICAgICAgaWYgKGNvbnRhaW5zSHRtbFRhZ3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJ1bmNhdGVkTGFiZWwgPSBbdGhpcy50cnVuY2F0ZUh0bWxQcmVzZXJ2aW5nVGFncyh0aGlzLmZpZWxkTGFiZWxzWzBdLCB0aGlzLnRydW5jYXRlZExhYmVsTWF4TGVuKV07XHJcblxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cnVuY2F0ZWRMYWJlbCA9IFt0aGlzLmZpZWxkTGFiZWxzWzBdLnN1YnN0cmluZygwLCB0aGlzLnRydW5jYXRlZExhYmVsTWF4TGVuKSArICcuLi4nXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVTaG93TW9yZUhpZGVNb3JlKGV2ZW50OiBFdmVudCkge1xyXG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgIHRoaXMuaXNFeHBhbmRlZCA9ICF0aGlzLmlzRXhwYW5kZWQ7XHJcbiAgICAgICAgdGhpcy51cGRhdGVUcnVuY2F0ZWRMYWJlbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldER5bmFtaWNGaWVsZExhYmVsKCkge1xyXG4gICAgICAgIC8vIEZvciBSZXNldHRpbmcgQWN0aXZlSW5kZXggT24gQWRkaW5nIG9yIFJlbW92aW5nIFxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuaGFzT3duUHJvcGVydHkoJ0NFRV9HZXRJbmRleEZyb21SQicpICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0dldEluZGV4RnJvbVJCJ10gPT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZExhYmVsc1swXSA9IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLnJlcGxhY2UoJyVyZXBlYXRhYmxlUG9zJScsIHRoaXMuYWN0aXZlUG9zaXRpb24uYWN0aXZlSW5kZXgpXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZExhYmVsc1swXSA9IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLnJlcGxhY2UoJyVyZXBlYXRhYmxlUG9zJScsIHRoaXMucm93RGF0YS5wb3NpdGlvbiArIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVMaW5rKHNlYXJjaFN0ciwgcmVwbGFjZVN0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3dJdGVtUm91dGUucmVwbGFjZUFsbChzZWFyY2hTdHIsIHJlcGxhY2VTdHIpXHJcbiAgICB9XHJcblxyXG4gICAgXHJcbiAgICBnZXREeW5hbWljSWZyYW1lKGRhdGE/KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnaWZyYW1lJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydpZnJhbWUnXS5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICBjb25zdCBpZnJhbWVMYWJlbCA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUoe2ZpZWxkX2xhYmVsOnRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnaWZyYW1lJ119LCBkYXRhKS5maWVsZF9sYWJlbDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lmcmFtZUxhYmVsICE9PSBpZnJhbWVMYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faWZyYW1lTGFiZWwgPSBpZnJhbWVMYWJlbDtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWZyYW1lTGFiZWwgPSAnJztcclxuICAgICAgICAgICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAvLyBDbGVhciBhbnkgZXhpc3RpbmcgdGltZW91dCB0byBwcmV2ZW50IG11bHRpcGxlIHRpbWVvdXRzXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5keW5hbWljSWZyYW1lVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmR5bmFtaWNJZnJhbWVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuZHluYW1pY0lmcmFtZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBfdGhpcy5pZnJhbWVMYWJlbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybChpZnJhbWVMYWJlbCk7XHJcbiAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGE/LnJlc3BvbnNlX2FwaV9rZXkgJiYgdGhpcy5yb3dEYXRhPy5yZXNwb25zZV9hcGlfa2V5Lmxlbmd0aCA9PT0gMikge1xyXG4gICAgICAgICAgICBsZXQgcmVzRGF0YSA9IGRhdGEuaGFzT3duUHJvcGVydHkodGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXlbMV0pID8gZGF0YVt0aGlzLnJvd0RhdGEucmVzcG9uc2VfYXBpX2tleVsxXV0gOiBudWxsO1xyXG4gICAgICAgICAgICByZXNEYXRhID0gdGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUocmVzRGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSB0aGlzLnJldHVybkxhYmVsc01hcFBvc3NpYmxlVmFsdWVzKFtyZXNEYXRhXSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghdGhpcy5yb3dEYXRhKSB7IC8vIGlmIHJvd0RhdGEgaXMgbnVsbFxyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5mbGF0VW5mbGF0LmNyZWF0ZU5lc3RlZE9iamVjdChkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWwoZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCByZXNEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNEYXRhICE9PSBudWxsICYmIHJlc0RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMSU5FLTEzM1wiLHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgcmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzRGF0YSkgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfU1RSSU5HX0ZPUk1BVCddKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzRGF0YSA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWFuaXB1bGF0ZVN0cmluZyh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TVFJJTkdfRk9STUFUJ10sIHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzRGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gdGhpcy5yZXR1cm5MYWJlbHNNYXBQb3NzaWJsZVZhbHVlcyhyZXNEYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzRGF0YSA9IHRoaXMuZ2V0RGF0YUZvcm1hdHRlZFZhbHVlKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSB0aGlzLnJldHVybkxhYmVsc01hcFBvc3NpYmxlVmFsdWVzKFtyZXNEYXRhXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVzZVNlY29uZGFyeUFwaUtleSA9ICF0aGlzLmlzSFRNTCh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0RHluYW1pY0xhYmVsKGRhdGEsIHVzZVNlY29uZGFyeUFwaUtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGFGb3JtYXR0ZWRWYWx1ZShkYXRhKSB7XHJcbiAgICAgICAgLy8gRm9yIERhdGEgRm9ybWF0XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGF0YSBGb3JtYXQnXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0cyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGF0YSBGb3JtYXQnXS5zcGxpdCgnfHwnKS5tYXAoc3RyID0+IHN0ciAmJiBzdHIudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybVR5cGUgPSBmb3JtYXRzWzBdID09IFwibWFza1wiID8gXCJtYXNrTGFiZWxcIiA6IGZvcm1hdHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLnJldHVybkZvcm1hdHRlZFZhbHVlKGRhdGEsIHRyYW5zZm9ybVR5cGUsIGZvcm1hdHMpO1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpdGNoIChmb3JtYXRzWzBdLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXNlICdjdXJyZW5jeSc6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBgJHtnZXRDdXJyZW5jeVN5bWJvbChmb3JtYXRzWzFdLnRyaW0oKSwgJ25hcnJvdycpfWAgK1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYCR7TnVtYmVyKGRhdGEpLnRvRml4ZWQoTnVtYmVyKGZvcm1hdHNbMl0udHJpbSgpKSkucmVwbGFjZSgvXFxkKD89KFxcZHszfSkrXFwuKS9nLCAnJCYsJyl9YDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXNlICd0aW1lJzpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIG1vbWVudChOdW1iZXIoZGF0YSkpLmZvcm1hdChmb3JtYXRzWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBtb21lbnQoZGF0YSkuZm9ybWF0KGZvcm1hdHNbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmhhc093blByb3BlcnR5KCdDRUVfVGhvdXNhbmRfU2VwYXJhdG9yJykgJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfVGhvdXNhbmRfU2VwYXJhdG9yJ10udG9Mb3dlckNhc2UoKSA9PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgLy8gICAgIHJldHVybiB0aGlzLmNvbW1vblV0aWwuZm9ybWF0TnVtYmVyKGRhdGEpO1xyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgdHJhbnNmb3JtaW5nIGRhdGEgISEhOiAke2Vycm9yfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGdldER5bmFtaWNMYWJlbChkYXRhPywgdXNlU2Vjb25kYXJ5QXBpS2V5OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICAvLyBzdWJzdGl0dXR1ZSByZXBlYXRhYmxlUG9zIGFuZCBbKl1cclxuICAgICAgICBpZih0aGlzLmZpZWxkRGF0YS5odG1sX2lkICYmIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLmluY2x1ZGVzKFwiWypdXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5jb21tb25VdGlsLmV4dHJhY3RMYXN0VmFsdWUodGhpcy5maWVsZERhdGEuaHRtbF9pZCwgXCIkXCIpO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWw7XHJcbiAgICAgICAgICAgIGlmKGtleS5pbmNsdWRlcygnJXJlcGVhdGFibGVQb3MlJykpIHtcclxuICAgICAgICAgICAgICAgIGtleSA9IGtleS5yZXBsYWNlKCclcmVwZWF0YWJsZVBvcyUnLCAoTnVtYmVyKGkpICsgMSkpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB1bmlxdWVfaWQgPSB0aGlzLmZpZWxkRGF0YS5odG1sX2lkO1xyXG4gICAgICAgICAgICBrZXkgPSB0aGlzLmNvbW1vblV0aWwuZmluZEluZGljZXNBbmRTdWJzdGl0dXRlU3RhcnMoa2V5LCB1bmlxdWVfaWQsIFwiJFwiKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwgPSBrZXk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcblxyXG4gICAgICAgIHJldHVybiB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhLCB1c2VTZWNvbmRhcnlBcGlLZXkpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzZXREeW5hbWljTGFiZWwoZGF0YT8sIHVzZVNlY29uZGFyeUFwaUtleTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsICYmIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nTGFiZWwgPSB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5nZXREeW5hbWljTGFiZWwoZGF0YSwgdXNlU2Vjb25kYXJ5QXBpS2V5KTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCAhPSBudWxsICYmIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsICE9PSBleGlzdGluZ0xhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMucHVzaCh0aGlzLmdldERhdGFGb3JtYXR0ZWRWYWx1ZSh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHJldHVybnMgYSBtYXAgd2l0aCBwb3NzaWJsZSB2YWx1ZSBpZCB0byB0aGUgdmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZXMgYXBpIHJlc3BvbnNlIGRhdGFcclxuICAgICAqL1xyXG4gICAgcmV0dXJuTGFiZWxzTWFwUG9zc2libGVWYWx1ZXModmFsdWVzOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB2YWx1ZXM7XHJcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgJiYgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMubWFwKHB2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlSWQocHYpID09IHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlVmFsdWUocHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDdXN0b21GdW5jdGlvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRfZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZ2V0X2RhdGEpLmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gdGhpcy5maWVsZERhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5pbmNsdWRlcyh1bmlxdWVfaWRfdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBbZ2V0X2RhdGFbdW5pcXVlX2lkX3ZhbHVlXV07XHJcbiAgICAgICAgICAgIC8vIHRoaXMuaW5wdXRWYWx1ZSA9IGdldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV07XHJcbiAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjaGVja0lmSWZyYW1lKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodmFsdWUuaW5jbHVkZXMoJ2lmcmFtZScpKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh2YWx1ZSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0RGF0YUZvcm1hdHRlZFZhbHVlKHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNFZGl0YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMucm93RGF0YSAmJiBjaGFuZ2VzLnJvd0RhdGEuY3VycmVudFZhbHVlICYmXHJcbiAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHNbMF0gIT09IGNoYW5nZXMucm93RGF0YS5jdXJyZW50VmFsdWUudmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyAmJiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZUlkKHZhbCkgPT0gY2hhbmdlcy5yb3dEYXRhLmN1cnJlbnRWYWx1ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzLnB1c2godGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUodGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlVmFsdWUodmFsKSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4geyAvLyBPTEQgSW1wbGVtZW50YXRpb25cclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsdWUgPSBjaGFuZ2VzLnJvd0RhdGEuY3VycmVudFZhbHVlLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nVmFsdWUgJiYgZXhpc3RpbmdWYWx1ZS5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdGaWVsZERhdGEgPSB0aGlzLmdldER5bmFtaWNMYWJlbChleGlzdGluZ1ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihuZXdGaWVsZERhdGEuZmllbGRfbGFiZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtuZXdGaWVsZERhdGEuZmllbGRfbGFiZWxdOyAgICBcclxuICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBbZXhpc3RpbmdWYWx1ZV07XHJcbiAgICAgICAgICAgICAgICB9ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gfSwgMCk7IC8vIE9MRCBJbXBsZW1lbnRhdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaEV2ZW50KGV2ZW50LCBzaG93SXRlbVJvdXRlTmV3VGFiKSB7XHJcbiAgICAgICAgY29uc3QgTW9kYWxPblBhZ2VMZWF2ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTW9kYWxPblBhZ2VMZWF2ZSddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNb2RhbE9uUGFnZUxlYXZlJ10gOiBudWxsO1xyXG4gICAgICAgIGlmIChzaG93SXRlbVJvdXRlTmV3VGFiID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGxldCBldmVudE5hbWUgPSBldmVudC5zcGxpdCgnfHwnKTtcclxuICAgICAgICAgICAgbGV0IHJlc3F0ID0gZXZlbnROYW1lWzFdICsgXCIjI2lkXCI7XHJcbiAgICAgICAgICAgIGxldCBwcmltYXJ5RmllbGREYXRhID0gdGhpcy5hcHBEYXRhO1xyXG4gICAgICAgICAgICBwcmltYXJ5RmllbGREYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgLi4ucHJpbWFyeUZpZWxkRGF0YSwgLi4ue1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBcIm5ld1RhYklkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGV2ZW50TmFtZVswXSxcclxuICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IHJlc3F0LFxyXG4gICAgICAgICAgICAgICAgICAgIGlzVmFsaWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBcGlLZXk6IFtyZXNxdF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5zZXRBcHBEYXRhKHByaW1hcnlGaWVsZERhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gc2hvd0l0ZW1Sb3V0ZU5ld1RhYiA/ICdfYmxhbmsnIDogJyc7XHJcbiAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5yZWRpcmVjdFRvSHJlZihldmVudCwgTW9kYWxPblBhZ2VMZWF2ZSwgdGFyZ2V0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGxhYmVsQ2xpY2soKSB7ICAgICAgIFxyXG4gICAgICAgIGlmKHRoaXMuaXNXYWl0Rm9yRGF0YVNldCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdWJzY3JpcHRpb24gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UudGFibGVDZWxsRGF0YVNldC5zdWJzY3JpYmUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snKTtcclxuICAgICAgICAgICAgfSk7ICAgIFxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNsaWNrJyk7XHJcbiAgICAgICAgfSAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiBpZD1cInt7aHRtbF9pZH19XCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbCByb3dcIj5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJpZnJhbWVMYWJlbCAmJiBpZnJhbWVMYWJlbCAhPSAnJ1wiPlxyXG5cdFx0XHQ8aWZyYW1lIHRpdGxlPVwibGFiZWwtY29tcG9uZW50XCIgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIFtzcmNdPVwiaWZyYW1lTGFiZWxcIiBhbGxvdz1cImF1dG9wbGF5OyBlbmNyeXB0ZWQtbWVkaWFcIlxyXG5cdFx0XHRcdGFsbG93ZnVsbHNjcmVlbiAgY2xhc3M9XCJcclxuXHRcdFx0XHR7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIj48L2lmcmFtZT5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGRMYWJlbCBvZiBmaWVsZExhYmVsczsgbGV0IGkgPSBpbmRleFwiPlxyXG5cdFx0XHQ8IS0tIHt7ZmllbGRMYWJlbHMubGVuZ3RofX0gLS0+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZExhYmVsICYmIGZpZWxkTGFiZWwgIT0nJyAmJiBmaWVsZExhYmVsICE9JyAnXCI+XHJcblx0XHRcdFx0PCEtLSAjIyMjIyMjIyMjIyMjIyMjIyMgU2hvdyBUcnVuY2F0ZWQgTGlzdCAjIyMjIyMjIyMjIyMjIyMjIyMgLS0+XHJcblx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dUcnVuY2F0ZWRMaXN0XCI+XHJcblx0XHRcdFx0XHQ8IS0tICMjIyMjIyMjIyMjIyMjIyMjIyBDbGlja2FibGUgTGlzdCAjIyMjIyMjIyMjIyMjIyMjIyMgLS0+XHJcblx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwic2hvd0l0ZW1DbGlja2FibGVcIj5cclxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbGFiZWxPYmogb2YgZmllbGRMYWJlbDsgbGV0IGogPSBpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxhICpuZ0lmPVwiajxzaG93SXRlbUNvdW50XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgXHJcblx0XHRcdFx0XHRcdFx0XHQoY2xpY2spPVwic3dpdGNoRXZlbnQocHJlcGFyZUxpbmsoJyVpZCUnLCBsYWJlbE9ialtzaG93SXRlbUtleXNbMF1dKSwgc2hvd0l0ZW1Sb3V0ZU5ld1RhYilcIiBcclxuXHRcdFx0XHRcdFx0XHRcdGF0dHIuYXJpYS1sYWJlbD1cInt7bGFiZWxPYmpbc2hvd0l0ZW1LZXlzLmxlbmd0aCA+IDEgPyBzaG93SXRlbUtleXNbMV0gOiBzaG93SXRlbUtleXNbMF1dfX1cIiBcclxuXHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwie3tsYWJlbE9ialtzaG93SXRlbUtleXMubGVuZ3RoID4gMSA/IHNob3dJdGVtS2V5c1sxXSA6IHNob3dJdGVtS2V5c1swXV19fVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJjb2wtNiBpbml0aWFsLWl0ZW1cIiBcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFtzdHlsZS5wb2ludGVyLWV2ZW50c109XCIhaXNFZGl0YWJsZSA/ICdub25lJyA6ICdhdXRvJ1wiIFxyXG5cdFx0XHRcdFx0XHRcdFx0bWF0LW1lbnUtaXRlbT5cclxuXHRcdFx0XHRcdFx0XHRcdEBpZighaXNIVE1MKGxhYmVsT2JqW3Nob3dJdGVtS2V5cy5sZW5ndGggPiAxID8gc2hvd0l0ZW1LZXlzWzFdIDogc2hvd0l0ZW1LZXlzWzBdXSkgJiYgaGlnaGxpZ2h0KSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbCBjbGFzcz1cImNlZS1sYWJlbC1oaWdobGlnaHQgXCIgW2F0dHIuYXJpYS1sYWJlbF09XCJmaWVsZExhYmVsXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiIFtpbm5lckhUTUxdPVwibGFiZWxPYmpbc2hvd0l0ZW1LZXlzLmxlbmd0aCA+IDEgPyBzaG93SXRlbUtleXNbMV0gOiBzaG93SXRlbUtleXNbMF1dIHwgaGlnaGxpZ2h0IDogaGlnaGxpZ2h0XCI+PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdH1AZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdDxsYWJlbD57e2xhYmVsT2JqW3Nob3dJdGVtS2V5cy5sZW5ndGggPiAxID8gc2hvd0l0ZW1LZXlzWzFdIDogc2hvd0l0ZW1LZXlzWzBdXX19PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHQ8L2E+XHJcblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0XHQ8YnV0dG9uICpuZ0lmPVwiZmllbGRMYWJlbC5sZW5ndGggPiBzaG93SXRlbUNvdW50XCIgY2xhc3M9XCJjb2wtNiBidG4gYnRuLXByaW1hcnkgbWVudUJ0blwiIFttYXRNZW51VHJpZ2dlckZvcl09XCJtZW51XCI+K3t7ZmllbGRMYWJlbC5sZW5ndGggLSBzaG93SXRlbUNvdW50fX08L2J1dHRvbj5cclxuXHRcdFx0XHRcdFx0PG1hdC1tZW51ICNtZW51PVwibWF0TWVudVwiPlxyXG5cdFx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGxhYmVsT2JqIG9mIGZpZWxkTGFiZWw7IGxldCBqID0gaW5kZXhcIj5cclxuXHRcdFx0XHRcdFx0XHRcdDxhICpuZ0lmPVwiaj49c2hvd0l0ZW1Db3VudFwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRhdHRyLmFyaWEtbGFiZWw9XCJ7e2xhYmVsT2JqW3Nob3dJdGVtS2V5cy5sZW5ndGggPiAxID8gc2hvd0l0ZW1LZXlzWzFdIDogc2hvd0l0ZW1LZXlzWzBdXX19XCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdHRpdGxlPVwie3tsYWJlbE9ialtzaG93SXRlbUtleXMubGVuZ3RoID4gMSA/IHNob3dJdGVtS2V5c1sxXSA6IHNob3dJdGVtS2V5c1swXV19fVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJzd2l0Y2hFdmVudChwcmVwYXJlTGluaygnJWlkJScsIGxhYmVsT2JqW3Nob3dJdGVtS2V5c1swXV0pLCBzaG93SXRlbVJvdXRlTmV3VGFiKVwiIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdFx0W2F0dHIuZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIiBcclxuXHRcdFx0XHRcdFx0XHRcdFx0W3N0eWxlLnBvaW50ZXItZXZlbnRzXT1cIiFpc0VkaXRhYmxlID8gJ25vbmUnIDogJ2F1dG8nXCIgXHJcblx0XHRcdFx0XHRcdFx0XHRcdG1hdC1tZW51LWl0ZW0+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt7bGFiZWxPYmpbc2hvd0l0ZW1LZXlzLmxlbmd0aCA+IDEgPyBzaG93SXRlbUtleXNbMV0gOiBzaG93SXRlbUtleXNbMF1dfX1cclxuXHRcdFx0XHRcdFx0XHRcdDwvYT5cclxuXHRcdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PC9tYXQtbWVudT5cclxuXHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PCEtLSAjIyMjIyMjIyMjIyMjIyMjIyMgTm9uIENsaWNrYWJsZSBMaXN0ICMjIyMjIyMjIyMjIyMjIyMjIyAtLT5cclxuXHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCIhc2hvd0l0ZW1DbGlja2FibGVcIj5cclxuXHRcdFx0XHRcdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbGFiZWxPYmogb2YgZmllbGRMYWJlbDsgbGV0IGogPSBpbmRleFwiPlxyXG5cdFx0XHRcdFx0XHRcdDxkaXYgKm5nSWY9XCJqPHNob3dJdGVtQ291bnRcIiBhdHRyLmFyaWEtbGFiZWw9XCJ7e2xhYmVsT2JqW3Nob3dJdGVtS2V5cy5sZW5ndGggPiAxID8gc2hvd0l0ZW1LZXlzWzFdIDogc2hvd0l0ZW1LZXlzWzBdXX19XCIgdGl0bGU9XCJ7e2xhYmVsT2JqW3Nob3dJdGVtS2V5cy5sZW5ndGggPiAxID8gc2hvd0l0ZW1LZXlzWzFdIDogc2hvd0l0ZW1LZXlzWzBdXX19XCIgY2xhc3M9XCJjb2wtNiBpbml0aWFsLWl0ZW0gYWxlcnQgYWxlcnQtd2FybmluZ1wiIHJvbGU9XCJhbGVydFwiPlxyXG5cdFx0XHRcdFx0XHRcdFx0QGlmKCFpc0hUTUwobGFiZWxPYmpbc2hvd0l0ZW1LZXlzLmxlbmd0aCA+IDEgPyBzaG93SXRlbUtleXNbMV0gOiBzaG93SXRlbUtleXNbMF1dKSAmJiBoaWdobGlnaHQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY2VlLWxhYmVsLWhpZ2hsaWdodCBcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImZpZWxkTGFiZWxcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCIgW2lubmVySFRNTF09XCJsYWJlbE9ialtzaG93SXRlbUtleXMubGVuZ3RoID4gMSA/IHNob3dJdGVtS2V5c1sxXSA6IHNob3dJdGVtS2V5c1swXV0gfCBoaWdobGlnaHQgOiBoaWdobGlnaHRcIj48L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0fUBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0PGxhYmVsPnt7bGFiZWxPYmpbc2hvd0l0ZW1LZXlzLmxlbmd0aCA+IDEgPyBzaG93SXRlbUtleXNbMV0gOiBzaG93SXRlbUtleXNbMF1dfX08L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHRcdFx0PGJ1dHRvbiAqbmdJZj1cImZpZWxkTGFiZWwubGVuZ3RoID4gc2hvd0l0ZW1Db3VudFwiIGNsYXNzPVwiY29sLTYgYnRuIGJ0bi1wcmltYXJ5IG1lbnVCdG5cIiBbbWF0TWVudVRyaWdnZXJGb3JdPVwibWVudVwiPit7e2ZpZWxkTGFiZWwubGVuZ3RoIC0gc2hvd0l0ZW1Db3VudH19PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdDxtYXQtbWVudSAjbWVudT1cIm1hdE1lbnVcIj5cclxuXHRcdFx0XHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBsYWJlbE9iaiBvZiBmaWVsZExhYmVsOyBsZXQgaiA9IGluZGV4XCI+XHJcblx0XHRcdFx0XHRcdFx0XHQ8ZGl2ICpuZ0lmPVwiaj49c2hvd0l0ZW1Db3VudFwiIGF0dHIuYXJpYS1sYWJlbD1cInt7bGFiZWxPYmpbc2hvd0l0ZW1LZXlzLmxlbmd0aCA+IDEgPyBzaG93SXRlbUtleXNbMV0gOiBzaG93SXRlbUtleXNbMF1dfX1cIiB0aXRsZT1cInt7bGFiZWxPYmpbc2hvd0l0ZW1LZXlzLmxlbmd0aCA+IDEgPyBzaG93SXRlbUtleXNbMV0gOiBzaG93SXRlbUtleXNbMF1dfX1cIiBjbGFzcz1cImV4dHJhLWl0ZW1zIGFsZXJ0IGFsZXJ0LXdhcm5pbmdcIiByb2xlPVwiYWxlcnRcIj57e2xhYmVsT2JqW3Nob3dJdGVtS2V5cy5sZW5ndGggPiAxID8gc2hvd0l0ZW1LZXlzWzFdIDogc2hvd0l0ZW1LZXlzWzBdXX19PC9kaXY+XHJcblx0XHRcdFx0XHRcdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHRcdFx0XHRcdDwvbWF0LW1lbnU+XHJcblx0XHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dUcnVuY2F0ZWRMaXN0XCI+XHJcblx0XHRcdFx0XHRAaWYgKCFzaG93VHJ1bmNhdGVkTGFiZWwpIHtcclxuXHRcdFx0XHRcdFx0QGlmICghaXNIVE1MKGZpZWxkTGFiZWwpICYmIGhpZ2hsaWdodCkge1xyXG5cdFx0XHRcdFx0XHRcdDxsYWJlbCBbYXR0ci5hcmlhLWxhYmVsXT1cImZpZWxkTGFiZWxcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCIgW2lubmVySFRNTF09XCJmaWVsZExhYmVsIHwgaGlnaGxpZ2h0IDogaGlnaGxpZ2h0XCJcclxuXHRcdFx0XHRcdFx0XHRcdChjbGljayk9XCJsYWJlbENsaWNrKClcIlxyXG5cdFx0XHRcdFx0XHRcdFx0Y2xhc3M9XCJ7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIj48L2xhYmVsPlxyXG5cdFx0XHRcdFx0XHR9IEBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHQ8bGFiZWwgW2F0dHIuYXJpYS1sYWJlbF09XCJmaWVsZExhYmVsXCIgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiICpuZ0lmPVwiIWlzSFRNTChmaWVsZExhYmVsKVwiIChjbGljayk9XCJsYWJlbENsaWNrKClcIiBjbGFzcz1cIlxyXG5cdFx0XHRcdFx0XHRcdFx0e3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcblx0XHRcdFx0XHRcdFx0XHR7e2ZpZWxkTGFiZWx9fVxyXG5cdFx0XHRcdFx0XHRcdDwvbGFiZWw+XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIFthdHRyLmFyaWEtbGFiZWxdPVwiZmllbGRMYWJlbFwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiAqbmdJZj1cImlzSFRNTChmaWVsZExhYmVsKVwiIFtpbm5lckhUTUxdPVwiY2hlY2tJZklmcmFtZShmaWVsZExhYmVsKVwiXHJcblx0XHRcdFx0XHRcdFx0XHQoY2xpY2spPVwibGFiZWxDbGljaygpXCJcclxuXHRcdFx0XHRcdFx0XHRcdGNsYXNzPVwie3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+PC9sYWJlbD5cclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSBAZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0PGxhYmVsIFthdHRyLmFyaWEtbGFiZWxdPVwiZmllbGRMYWJlbFwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiAoY2xpY2spPVwibGFiZWxDbGljaygpXCIgY2xhc3M9XCJcclxuXHRcdFx0XHRcdFx0XHR7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIj5cclxuXHRcdFx0XHRcdFx0XHRcdCBcclxuXHRcdFx0XHRcdFx0XHRcdEBpZighaXNIVE1MKGZpZWxkTGFiZWwpKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0e3t0cnVuY2F0ZWRMYWJlbH19XHJcblx0XHRcdFx0XHRcdFx0XHRcdH0gQGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIFtpbm5lckhUTUxdPVwidHJ1bmNhdGVkTGFiZWxcIj48L3NwYW4+XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiAoY2xpY2spPVwidGhpcy50b2dnbGVTaG93TW9yZUhpZGVNb3JlKCRldmVudClcIiBjbGFzcz1cInNlZS1tb3JlLWJ0blwiICpuZ0lmPVwic2hvd1RydW5jYXRlZExhYmVsICYmIGRpc3BsYXlTaG93TW9yZUxhYmVsXCI+XHJcblx0XHRcdFx0XHRcdFx0XHRcdHt7IGlzRXhwYW5kZWQgPyBzaG93TGVzc0xhYmVsIDogc2hvd01vcmVMYWJlbCB9fVxyXG5cdFx0XHRcdFx0XHRcdFx0PC9idXR0b24+XHJcblx0XHRcdFx0XHRcdFx0PC9sYWJlbD5cclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXAgJiYgIWNvbnRlbnRUb29sdGlwLmVuYWJsZWRcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIlxyXG5cdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgdG9vbHRpcFRleHQgXCI+aTwvYnV0dG9uPlxyXG5cdFx0PHNwYW4gKm5nSWY9XCJoYXNUb29sdGlwICYmIGNvbnRlbnRUb29sdGlwLmVuYWJsZWRcIiBbbmdiVG9vbHRpcF09XCJ0b29sdGlwVGVtcGxhdGVcIiBbcGxhY2VtZW50XT1cImNvbnRlbnRUb29sdGlwLnBvc2l0aW9uXCIgY29udGFpbmVyPVwiYm9keVwiIHRvb2x0aXBDbGFzcz1cImxhYmVsLXRvb2xpcC1jdXN0b20tY2xhc3NcIiBbaW5uZXJIVE1MXT1cImNvbnRlbnRUb29sdGlwLmljb25UZXh0XCI+XHJcblx0XHQ8L3NwYW4+XHJcblx0XHRcclxuXHJcblx0XHQ8IS0tIFRvb2x0aXAgd2l0aCBpbmZvcm1haW9uIGljb24gLS0+XHJcblx0XHQ8IS0tIDxidXR0b24gKm5nSWY9XCJpc19tYXRlcmlhbCAmJiBoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0byBidG4tdG9vbHRpcC17e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiXHJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyB0b29sdGlwVGV4dFwiIFtjdXN0b21Ub29sdGlwXT1cInRvb2x0aXBUZW1wbGF0ZVwiXHJcblx0XHRcdFt0b29sdGlwSWRdPVwiZmllbGREYXRhLnVuaXF1ZV9pZFwiIFt0b29sdGlwQWRkaXRpb25hbHBhcmFtZXRlcl09XCJhZGRpdGlvbmFsUGFyYW1ldGVyXCI+XHJcblx0XHRcdGlcclxuXHRcdDwvYnV0dG9uPiAtLT5cclxuXHJcblx0XHQ8IS0tIFRvb2x0aXAgVGVtcGxhdGUgLS0+XHJcblx0XHQ8bmctdGVtcGxhdGUgI3Rvb2x0aXBUZW1wbGF0ZT5cclxuXHRcdFx0PGRpdiBjbGFzcz1cInRvb2x0aXBfY29udGFpbmVyXCI+XHJcblx0XHRcdFx0PHNwYW4gY2xhc3M9XCJ0b29sdGlwX3RleHRcIiBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS50b29sdGlwXCI+PC9zcGFuPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvbmctdGVtcGxhdGU+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=