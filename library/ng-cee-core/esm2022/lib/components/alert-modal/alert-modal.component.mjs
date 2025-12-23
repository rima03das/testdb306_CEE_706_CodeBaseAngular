import { CommonModule, NgSwitch } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { DomSanitizePipe } from '../../pipes/dom-sanitize.pipe';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/material/form-field";
import * as i3 from "@angular/material/input";
import * as i4 from "@angular/common";
import * as i5 from "ngx-image-zoom";
import * as i6 from "@angular/forms";
function AlertModalComponent_ng_container_0_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 11);
    i0.ɵɵlistener("click", function AlertModalComponent_ng_container_0_ng_container_2_div_1_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r2); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onNegativeClick()); });
    i0.ɵɵtext(4, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.data.title);
} }
function AlertModalComponent_ng_container_0_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "img", 12);
    i0.ɵɵpipe(2, "domSanitize");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", i0.ɵɵpipeBind2(2, 1, ctx_r2.data.value, "resourceUrl"), i0.ɵɵsanitizeUrl);
} }
function AlertModalComponent_ng_container_0_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "iframe", 13);
    i0.ɵɵpipe(2, "domSanitize");
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("preview preview-", ctx_r2.data.config.id, "");
    i0.ɵɵproperty("src", i0.ɵɵpipeBind2(2, 4, ctx_r2.data.value, "resourceUrl"), i0.ɵɵsanitizeResourceUrl);
} }
function AlertModalComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, AlertModalComponent_ng_container_0_ng_container_2_div_1_Template, 5, 1, "div", 6);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, AlertModalComponent_ng_container_0_ng_container_2_ng_container_3_Template, 3, 4, "ng-container", 7)(4, AlertModalComponent_ng_container_0_ng_container_2_ng_container_4_Template, 3, 7, "ng-container", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 8)(6, "button", 9);
    i0.ɵɵlistener("click", function AlertModalComponent_ng_container_0_ng_container_2_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r1); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onNegativeClick()); });
    i0.ɵɵtext(7, "Close");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.data.title);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("mat-dialog-content previewContent previewContent-", ctx_r2.data.config.id, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.data.fileType == "image");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.data.fileType == "doc");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("previewClose preview-", ctx_r2.data.config.id, "");
} }
function AlertModalComponent_ng_container_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 14)(2, "mat-form-field")(3, "input", 15, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function AlertModalComponent_ng_container_0_ng_container_3_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r4); const ctx_r2 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r2.data.attachmentName, $event) || (ctx_r2.data.attachmentName = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementStart(5, "div", 8)(6, "button", 16);
    i0.ɵɵtext(7, "Save");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r2.data.value);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r2.data.attachmentName);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("mat-dialog-close", ctx_r2.data.attachmentName);
} }
function AlertModalComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0)(1, 4);
    i0.ɵɵtemplate(2, AlertModalComponent_ng_container_0_ng_container_2_Template, 8, 9, "ng-container", 5)(3, AlertModalComponent_ng_container_0_ng_container_3_Template, 8, 3, "ng-container", 5);
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitch", ctx_r2.data.type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "PreviewModal");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "AttachmentNameModal");
} }
function AlertModalComponent_ng_template_1_ng_container_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "mat-label", 22);
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r6 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", field_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(field_r6);
} }
function AlertModalComponent_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 17)(2, "p", 18);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, AlertModalComponent_ng_template_1_ng_container_0_ng_container_4_Template, 3, 2, "ng-container", 19);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div", 20)(6, "button", 21);
    i0.ɵɵlistener("click", function AlertModalComponent_ng_template_1_ng_container_0_Template_button_click_6_listener() { i0.ɵɵrestoreView(_r5); const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onPostiveClick()); });
    i0.ɵɵtext(7, "OK");
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("aria-label", ctx_r2.data.message.heading);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.data.message.heading);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.data.message.fields);
} }
function AlertModalComponent_ng_template_1_ng_template_1_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 10)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 25);
    i0.ɵɵlistener("click", function AlertModalComponent_ng_template_1_ng_template_1_div_0_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r7); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onNegativeClick()); });
    i0.ɵɵtext(4, "\u00D7");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.data.title);
} }
function AlertModalComponent_ng_template_1_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 26)(1, "p");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r2.data.message);
} }
function AlertModalComponent_ng_template_1_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵelement(1, "lib-ngx-image-zoom", 27);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("thumbImage", ctx_r2.data.message.image.image)("fullImage", ctx_r2.data.message.image.highres)("magnification", 2)("enableScrollZoom", true)("zoomMode", ctx_r2.data.message.zoomInEventType)("enableLens", false)("altText", ctx_r2.data.message.image.text)("titleText", ctx_r2.data.message.image.text)("circularLens", true);
} }
function AlertModalComponent_ng_template_1_ng_template_1_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "button", 29);
    i0.ɵɵlistener("click", function AlertModalComponent_ng_template_1_ng_template_1_div_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onPostiveClick()); });
    i0.ɵɵtext(2, "Yes");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "button", 30);
    i0.ɵɵlistener("click", function AlertModalComponent_ng_template_1_ng_template_1_div_3_Template_button_click_3_listener() { i0.ɵɵrestoreView(_r8); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onNegativeClick()); });
    i0.ɵɵtext(4, "No");
    i0.ɵɵelementEnd()();
} }
function AlertModalComponent_ng_template_1_ng_template_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r9 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 28)(1, "button", 31);
    i0.ɵɵlistener("click", function AlertModalComponent_ng_template_1_ng_template_1_div_4_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r9); const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.onNegativeClick()); });
    i0.ɵɵtext(2, "Close");
    i0.ɵɵelementEnd()();
} }
function AlertModalComponent_ng_template_1_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AlertModalComponent_ng_template_1_ng_template_1_div_0_Template, 5, 1, "div", 6)(1, AlertModalComponent_ng_template_1_ng_template_1_div_1_Template, 3, 1, "div", 23)(2, AlertModalComponent_ng_template_1_ng_template_1_div_2_Template, 2, 9, "div", 7)(3, AlertModalComponent_ng_template_1_ng_template_1_div_3_Template, 5, 0, "div", 24)(4, AlertModalComponent_ng_template_1_ng_template_1_div_4_Template, 3, 0, "div", 24);
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", ctx_r2.data.title);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.data && ctx_r2.data.message && !ctx_r2.data.message.zoomImg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.data && ctx_r2.data.message && ctx_r2.data.message.zoomImg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.data && ctx_r2.data.message && !ctx_r2.data.message.zoomImg);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.data && ctx_r2.data.message && ctx_r2.data.message.zoomImg);
} }
function AlertModalComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, AlertModalComponent_ng_template_1_ng_container_0_Template, 8, 3, "ng-container", 3)(1, AlertModalComponent_ng_template_1_ng_template_1_Template, 5, 5, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
} if (rf & 2) {
    const elseBlock_r10 = i0.ɵɵreference(2);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngIf", ctx_r2.data.message.showMandateFields)("ngIfElse", elseBlock_r10);
} }
export class AlertModalComponent {
    dialogRef;
    data;
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        // console.log(data);
        if (data.config && data.config.disableClose) {
            dialogRef.disableClose = data.config.disableClose;
        }
    }
    ngAfterViewInit() {
        if (this.data?.class) {
            const dialogContainer = document.querySelector('.mat-mdc-dialog-container');
            dialogContainer?.classList.add(this.data.class);
        }
    }
    onPostiveClick() {
        this.dialogRef.close(true);
    }
    onNegativeClick() {
        this.dialogRef.close(false);
    }
    static ɵfac = function AlertModalComponent_Factory(t) { return new (t || AlertModalComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: AlertModalComponent, selectors: [["lib-alert-modal"]], standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [["showAlert", ""], ["attachmentNameField", ""], ["elseBlock", ""], [4, "ngIf", "ngIfElse"], [3, "ngSwitch"], [4, "ngSwitchCase"], ["class", "dialog-title d-flex justify-content-between", "mat-dialog-title", "", 4, "ngIf"], [4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "cdkFocusInitial", "", 3, "click"], ["mat-dialog-title", "", 1, "dialog-title", "d-flex", "justify-content-between"], ["mat-button", "", "aria-label", "Close Modal", 1, "alert-modal-no", "float-right", 3, "click"], ["alt", "Image", 3, "src"], ["title", "iframe-content", "name", "iframe-content", 3, "src"], ["mat-dialog-content", ""], ["matInput", "", 3, "ngModelChange", "placeholder", "ngModel"], ["mat-button", "", "cdkFocusInitial", "", 3, "mat-dialog-close"], ["mat-dialog-content", "", 1, "mandatory-fields-modal"], [1, "heading"], [4, "ngFor", "ngForOf"], ["mat-dialog-actions", "", 1, "mandatory-fields-modal-button"], ["mat-button", "", "aria-label", "Select Ok", 1, "mandatory-fields-modal-ok", 3, "click"], [1, "field_label"], ["mat-dialog-content", "", "class", "alert-modal", 4, "ngIf"], ["mat-dialog-actions", "", "class", "alert-modal-button", 4, "ngIf"], ["mat-button", "", "aria-label", "Select No", 1, "alert-modal-no", "float-right", 3, "click"], ["mat-dialog-content", "", 1, "alert-modal"], ["ngClass", "image image_active", 3, "thumbImage", "fullImage", "magnification", "enableScrollZoom", "zoomMode", "enableLens", "altText", "titleText", "circularLens"], ["mat-dialog-actions", "", 1, "alert-modal-button"], ["mat-button", "", "aria-label", "Select Yes", "cdkFocusInitial", "", 1, "alert-modal-yes", 3, "click"], ["mat-button", "", "aria-label", "Select No", 1, "alert-modal-no", 3, "click"], ["mat-button", "", "aria-label", "Close", "cdkFocusInitial", "", 1, "alert-modal-close", 3, "click"]], template: function AlertModalComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, AlertModalComponent_ng_container_0_Template, 4, 3, "ng-container", 3)(1, AlertModalComponent_ng_template_1_Template, 3, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const showAlert_r11 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", !ctx.data.message && ctx.data.config)("ngIfElse", showAlert_r11);
        } }, dependencies: [NgSwitch, MatFormFieldModule, i2.MatFormField, i2.MatLabel, MatInputModule, i3.MatInput, CommonModule, i4.NgClass, i4.NgForOf, i4.NgIf, i4.NgSwitchCase, MatDialogModule, i1.MatDialogClose, i1.MatDialogTitle, i1.MatDialogActions, i1.MatDialogContent, NgxImageZoomModule, i5.NgxImageZoomComponent, DomSanitizePipe, FormsModule, i6.DefaultValueAccessor, i6.NgControlStatus, i6.NgModel] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(AlertModalComponent, [{
        type: Component,
        args: [{ selector: 'lib-alert-modal', standalone: true, imports: [NgSwitch, MatFormFieldModule, MatInputModule, CommonModule, MatDialogModule, NgxImageZoomModule, DomSanitizePipe, FormsModule], template: "<!-- Config and type is passed through attachments for the preview and attachment -->\r\n<ng-container *ngIf=\"!data.message && data.config; else showAlert\">\r\n    <ng-container [ngSwitch]=\"data.type\">\r\n        <ng-container *ngSwitchCase=\"'PreviewModal'\">\r\n            <div class=\"dialog-title d-flex justify-content-between\" mat-dialog-title *ngIf=\"data.title\">\r\n                <span>{{ data.title }}</span>\r\n                <button mat-button class=\"alert-modal-no float-right\" (click)=\"onNegativeClick()\" aria-label=\"Close Modal\">&times;</button>\r\n            </div>\r\n            <div class=\"mat-dialog-content previewContent previewContent-{{data.config.id}}\">\r\n                <ng-container *ngIf=\"data.fileType == 'image'\">\r\n                    <img [src]=\"data.value | domSanitize:'resourceUrl'\" alt=\"Image\"/>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"data.fileType == 'doc'\">\r\n                    <iframe title=\"iframe-content\" name=\"iframe-content\" class=\"preview preview-{{data.config.id}}\" [src]=\"data.value | domSanitize:'resourceUrl'\"></iframe>\r\n                </ng-container>\r\n            </div>\r\n            <div mat-dialog-actions>\r\n                <button mat-button class=\"previewClose preview-{{data.config.id}}\" (click)=\"onNegativeClick()\" cdkFocusInitial>Close</button>\r\n            </div>\r\n        </ng-container>\r\n        <ng-container *ngSwitchCase=\"'AttachmentNameModal'\">\r\n            <div mat-dialog-content>\r\n                <mat-form-field>\r\n                    <input matInput placeholder=\"{{data.value}}\" [(ngModel)]=\"data.attachmentName\" #attachmentNameField>\r\n                </mat-form-field>\r\n            </div>\r\n            <div mat-dialog-actions>\r\n                <button mat-button [mat-dialog-close]=\"data.attachmentName\" cdkFocusInitial>Save</button>\r\n            </div>\r\n        </ng-container>\r\n    </ng-container>\r\n</ng-container>\r\n<!-- Else always show alert modal -->\r\n<ng-template #showAlert>\r\n    <!-- Checks for the mandatory fields and data.message.showMandateFields is passed from event list handler util -->\r\n    <ng-container *ngIf=\"data.message.showMandateFields; else elseBlock\">\r\n        <!-- <h1 mat-dialog-title>{{data.message.heading}}</h1> -->\r\n        <div mat-dialog-content class=\"mandatory-fields-modal\">\r\n            <p class=\"heading\" [attr.aria-label]=\"data.message.heading\">{{data.message.heading}}</p>\r\n            <ng-container *ngFor=\"let field of data.message.fields\">\r\n                <mat-label class=\"field_label\" [attr.aria-label]=\"field\">{{field}}</mat-label>\r\n            </ng-container>\r\n        </div>\r\n        <div mat-dialog-actions class=\"mandatory-fields-modal-button\">\r\n            <button mat-button class=\"mandatory-fields-modal-ok\" (click)=\"onPostiveClick()\" aria-label=\"Select Ok\">OK</button>\r\n        </div>\r\n    </ng-container>\r\n    <!-- Else display the alert messages -->\r\n    <ng-template #elseBlock>\r\n        <div class=\"dialog-title d-flex justify-content-between\" mat-dialog-title *ngIf=\"data.title\">\r\n            <span>{{ data.title }}</span>\r\n            <button mat-button class=\"alert-modal-no float-right\" (click)=\"onNegativeClick()\" aria-label=\"Select No\">&times;</button>\r\n        </div>\r\n        <div mat-dialog-content class=\"alert-modal\" *ngIf=\"data && data.message && !data.message.zoomImg\">\r\n            <p>{{data.message}}</p>\r\n        </div>\r\n        <div *ngIf=\"data && data.message && data.message.zoomImg\">\r\n            <lib-ngx-image-zoom\r\n                [thumbImage]=\"data.message.image.image\"\r\n                [fullImage]=\"data.message.image.highres\"\r\n                [magnification]=\"2\"\r\n                [enableScrollZoom]=\"true\"\r\n                [zoomMode]=\"data.message.zoomInEventType\"\r\n                [enableLens]=\"false\"\r\n                ngClass=\"image image_active\"\r\n                [altText]=\"data.message.image.text\"\r\n                [titleText]=\"data.message.image.text\"\r\n                [circularLens]=\"true\">\r\n            </lib-ngx-image-zoom>\r\n        </div>\r\n        <div mat-dialog-actions class=\"alert-modal-button\" *ngIf=\"data && data.message && !data.message.zoomImg\">\r\n            <!-- yes no button for delete passing value -->\r\n            <button mat-button class=\"alert-modal-yes\" (click)=\"onPostiveClick()\" aria-label=\"Select Yes\" cdkFocusInitial>Yes</button>\r\n            <button mat-button class=\"alert-modal-no\" (click)=\"onNegativeClick()\" aria-label=\"Select No\">No</button>\r\n        </div>\r\n        <div mat-dialog-actions class=\"alert-modal-button\" *ngIf=\"data && data.message && data.message.zoomImg\">\r\n            <button mat-button class=\"alert-modal-close\" (click)=\"onNegativeClick()\" aria-label=\"Close\" cdkFocusInitial>Close</button>\r\n        </div>\r\n    </ng-template>\r\n</ng-template>" }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(AlertModalComponent, { className: "AlertModalComponent", filePath: "lib\\components\\alert-modal\\alert-modal.component.ts", lineNumber: 18 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWxlcnQtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxRQUFRLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN6RCxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sRUFBaUIsTUFBTSxlQUFlLENBQUM7QUFDekUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUMzRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUNsRSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDekQsT0FBTyxFQUFnQyxlQUFlLElBQUksZUFBZSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDNUcsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDcEQsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLCtCQUErQixDQUFDOzs7Ozs7Ozs7O0lDSGhELEFBREosK0JBQTZGLFdBQ25GO0lBQUEsWUFBZ0I7SUFBQSxpQkFBTztJQUM3QixrQ0FBMkc7SUFBckQsOE1BQVMsd0JBQWlCLEtBQUM7SUFBMEIsc0JBQU87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QkRjbkQsUUFBUSxFQUFFLGtCQUFrQixnQ0FBRSxjQUFjLGVBQUUsWUFBWSxvREFBRSxlQUFlLGtGQUFFLGtCQUFrQiw0QkFBRSxlQUFlLEVBQUUsV0FBVzs7aUZBRTlILG1CQUFtQjtjQVAvQixTQUFTOzJCQUNJLGlCQUFpQixjQUdmLElBQUksV0FDUCxDQUFDLFFBQVEsRUFBRSxrQkFBa0IsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxlQUFlLEVBQUUsV0FBVyxDQUFDOztzQkFNbkksTUFBTTt1QkFBQyxlQUFlOztrRkFKbEIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N3aXRjaCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbmplY3QsIEFmdGVyVmlld0luaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xyXG5pbXBvcnQgeyBNYXRJbnB1dE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2lucHV0JztcclxuaW1wb3J0IHsgTWF0RGlhbG9nUmVmIGFzIE1hdERpYWxvZ1JlZiwgTUFUX0RJQUxPR19EQVRBIGFzIE1BVF9ESUFMT0dfREFUQSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE5neEltYWdlWm9vbU1vZHVsZSB9IGZyb20gJ25neC1pbWFnZS16b29tJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVQaXBlIH0gZnJvbSAnLi4vLi4vcGlwZXMvZG9tLXNhbml0aXplLnBpcGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2xpYi1hbGVydC1tb2RhbCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vYWxlcnQtbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vYWxlcnQtbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmdTd2l0Y2gsIE1hdEZvcm1GaWVsZE1vZHVsZSwgTWF0SW5wdXRNb2R1bGUsIENvbW1vbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBOZ3hJbWFnZVpvb21Nb2R1bGUsIERvbVNhbml0aXplUGlwZSwgRm9ybXNNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBbGVydE1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPEFsZXJ0TW9kYWxDb21wb25lbnQ+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICAgICAgaWYgKGRhdGEuY29uZmlnICYmIGRhdGEuY29uZmlnLmRpc2FibGVDbG9zZSkge1xyXG4gICAgICAgICAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gZGF0YS5jb25maWcuZGlzYWJsZUNsb3NlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZGF0YT8uY2xhc3MpIHtcclxuICAgICAgICAgICAgY29uc3QgZGlhbG9nQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1hdC1tZGMtZGlhbG9nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgICAgICBkaWFsb2dDb250YWluZXI/LmNsYXNzTGlzdC5hZGQodGhpcy5kYXRhLmNsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Qb3N0aXZlQ2xpY2soKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25OZWdhdGl2ZUNsaWNrKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKGZhbHNlKTtcclxuICAgIH1cclxufVxyXG4iLCI8IS0tIENvbmZpZyBhbmQgdHlwZSBpcyBwYXNzZWQgdGhyb3VnaCBhdHRhY2htZW50cyBmb3IgdGhlIHByZXZpZXcgYW5kIGF0dGFjaG1lbnQgLS0+XHJcbjxuZy1jb250YWluZXIgKm5nSWY9XCIhZGF0YS5tZXNzYWdlICYmIGRhdGEuY29uZmlnOyBlbHNlIHNob3dBbGVydFwiPlxyXG4gICAgPG5nLWNvbnRhaW5lciBbbmdTd2l0Y2hdPVwiZGF0YS50eXBlXCI+XHJcbiAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdTd2l0Y2hDYXNlPVwiJ1ByZXZpZXdNb2RhbCdcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRpYWxvZy10aXRsZSBkLWZsZXgganVzdGlmeS1jb250ZW50LWJldHdlZW5cIiBtYXQtZGlhbG9nLXRpdGxlICpuZ0lmPVwiZGF0YS50aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+e3sgZGF0YS50aXRsZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImFsZXJ0LW1vZGFsLW5vIGZsb2F0LXJpZ2h0XCIgKGNsaWNrKT1cIm9uTmVnYXRpdmVDbGljaygpXCIgYXJpYS1sYWJlbD1cIkNsb3NlIE1vZGFsXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1hdC1kaWFsb2ctY29udGVudCBwcmV2aWV3Q29udGVudCBwcmV2aWV3Q29udGVudC17e2RhdGEuY29uZmlnLmlkfX1cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJkYXRhLmZpbGVUeXBlID09ICdpbWFnZSdcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIFtzcmNdPVwiZGF0YS52YWx1ZSB8IGRvbVNhbml0aXplOidyZXNvdXJjZVVybCdcIiBhbHQ9XCJJbWFnZVwiLz5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEuZmlsZVR5cGUgPT0gJ2RvYydcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aWZyYW1lIHRpdGxlPVwiaWZyYW1lLWNvbnRlbnRcIiBuYW1lPVwiaWZyYW1lLWNvbnRlbnRcIiBjbGFzcz1cInByZXZpZXcgcHJldmlldy17e2RhdGEuY29uZmlnLmlkfX1cIiBbc3JjXT1cImRhdGEudmFsdWUgfCBkb21TYW5pdGl6ZToncmVzb3VyY2VVcmwnXCI+PC9pZnJhbWU+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwicHJldmlld0Nsb3NlIHByZXZpZXcte3tkYXRhLmNvbmZpZy5pZH19XCIgKGNsaWNrKT1cIm9uTmVnYXRpdmVDbGljaygpXCIgY2RrRm9jdXNJbml0aWFsPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidBdHRhY2htZW50TmFtZU1vZGFsJ1wiPlxyXG4gICAgICAgICAgICA8ZGl2IG1hdC1kaWFsb2ctY29udGVudD5cclxuICAgICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgcGxhY2Vob2xkZXI9XCJ7e2RhdGEudmFsdWV9fVwiIFsobmdNb2RlbCldPVwiZGF0YS5hdHRhY2htZW50TmFtZVwiICNhdHRhY2htZW50TmFtZUZpZWxkPlxyXG4gICAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIFttYXQtZGlhbG9nLWNsb3NlXT1cImRhdGEuYXR0YWNobWVudE5hbWVcIiBjZGtGb2N1c0luaXRpYWw+U2F2ZTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwvbmctY29udGFpbmVyPlxyXG48L25nLWNvbnRhaW5lcj5cclxuPCEtLSBFbHNlIGFsd2F5cyBzaG93IGFsZXJ0IG1vZGFsIC0tPlxyXG48bmctdGVtcGxhdGUgI3Nob3dBbGVydD5cclxuICAgIDwhLS0gQ2hlY2tzIGZvciB0aGUgbWFuZGF0b3J5IGZpZWxkcyBhbmQgZGF0YS5tZXNzYWdlLnNob3dNYW5kYXRlRmllbGRzIGlzIHBhc3NlZCBmcm9tIGV2ZW50IGxpc3QgaGFuZGxlciB1dGlsIC0tPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEubWVzc2FnZS5zaG93TWFuZGF0ZUZpZWxkczsgZWxzZSBlbHNlQmxvY2tcIj5cclxuICAgICAgICA8IS0tIDxoMSBtYXQtZGlhbG9nLXRpdGxlPnt7ZGF0YS5tZXNzYWdlLmhlYWRpbmd9fTwvaDE+IC0tPlxyXG4gICAgICAgIDxkaXYgbWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwibWFuZGF0b3J5LWZpZWxkcy1tb2RhbFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzcz1cImhlYWRpbmdcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImRhdGEubWVzc2FnZS5oZWFkaW5nXCI+e3tkYXRhLm1lc3NhZ2UuaGVhZGluZ319PC9wPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkYXRhLm1lc3NhZ2UuZmllbGRzXCI+XHJcbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsIGNsYXNzPVwiZmllbGRfbGFiZWxcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImZpZWxkXCI+e3tmaWVsZH19PC9tYXQtbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgbWF0LWRpYWxvZy1hY3Rpb25zIGNsYXNzPVwibWFuZGF0b3J5LWZpZWxkcy1tb2RhbC1idXR0b25cIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwibWFuZGF0b3J5LWZpZWxkcy1tb2RhbC1va1wiIChjbGljayk9XCJvblBvc3RpdmVDbGljaygpXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBPa1wiPk9LPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgIDwhLS0gRWxzZSBkaXNwbGF5IHRoZSBhbGVydCBtZXNzYWdlcyAtLT5cclxuICAgIDxuZy10ZW1wbGF0ZSAjZWxzZUJsb2NrPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctdGl0bGUgZC1mbGV4IGp1c3RpZnktY29udGVudC1iZXR3ZWVuXCIgbWF0LWRpYWxvZy10aXRsZSAqbmdJZj1cImRhdGEudGl0bGVcIj5cclxuICAgICAgICAgICAgPHNwYW4+e3sgZGF0YS50aXRsZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiYWxlcnQtbW9kYWwtbm8gZmxvYXQtcmlnaHRcIiAoY2xpY2spPVwib25OZWdhdGl2ZUNsaWNrKClcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IE5vXCI+JnRpbWVzOzwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgbWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwiYWxlcnQtbW9kYWxcIiAqbmdJZj1cImRhdGEgJiYgZGF0YS5tZXNzYWdlICYmICFkYXRhLm1lc3NhZ2Uuem9vbUltZ1wiPlxyXG4gICAgICAgICAgICA8cD57e2RhdGEubWVzc2FnZX19PC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRhICYmIGRhdGEubWVzc2FnZSAmJiBkYXRhLm1lc3NhZ2Uuem9vbUltZ1wiPlxyXG4gICAgICAgICAgICA8bGliLW5neC1pbWFnZS16b29tXHJcbiAgICAgICAgICAgICAgICBbdGh1bWJJbWFnZV09XCJkYXRhLm1lc3NhZ2UuaW1hZ2UuaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgW2Z1bGxJbWFnZV09XCJkYXRhLm1lc3NhZ2UuaW1hZ2UuaGlnaHJlc1wiXHJcbiAgICAgICAgICAgICAgICBbbWFnbmlmaWNhdGlvbl09XCIyXCJcclxuICAgICAgICAgICAgICAgIFtlbmFibGVTY3JvbGxab29tXT1cInRydWVcIlxyXG4gICAgICAgICAgICAgICAgW3pvb21Nb2RlXT1cImRhdGEubWVzc2FnZS56b29tSW5FdmVudFR5cGVcIlxyXG4gICAgICAgICAgICAgICAgW2VuYWJsZUxlbnNdPVwiZmFsc2VcIlxyXG4gICAgICAgICAgICAgICAgbmdDbGFzcz1cImltYWdlIGltYWdlX2FjdGl2ZVwiXHJcbiAgICAgICAgICAgICAgICBbYWx0VGV4dF09XCJkYXRhLm1lc3NhZ2UuaW1hZ2UudGV4dFwiXHJcbiAgICAgICAgICAgICAgICBbdGl0bGVUZXh0XT1cImRhdGEubWVzc2FnZS5pbWFnZS50ZXh0XCJcclxuICAgICAgICAgICAgICAgIFtjaXJjdWxhckxlbnNdPVwidHJ1ZVwiPlxyXG4gICAgICAgICAgICA8L2xpYi1uZ3gtaW1hZ2Utem9vbT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBjbGFzcz1cImFsZXJ0LW1vZGFsLWJ1dHRvblwiICpuZ0lmPVwiZGF0YSAmJiBkYXRhLm1lc3NhZ2UgJiYgIWRhdGEubWVzc2FnZS56b29tSW1nXCI+XHJcbiAgICAgICAgICAgIDwhLS0geWVzIG5vIGJ1dHRvbiBmb3IgZGVsZXRlIHBhc3NpbmcgdmFsdWUgLS0+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImFsZXJ0LW1vZGFsLXllc1wiIChjbGljayk9XCJvblBvc3RpdmVDbGljaygpXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBZZXNcIiBjZGtGb2N1c0luaXRpYWw+WWVzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImFsZXJ0LW1vZGFsLW5vXCIgKGNsaWNrKT1cIm9uTmVnYXRpdmVDbGljaygpXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBOb1wiPk5vPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgY2xhc3M9XCJhbGVydC1tb2RhbC1idXR0b25cIiAqbmdJZj1cImRhdGEgJiYgZGF0YS5tZXNzYWdlICYmIGRhdGEubWVzc2FnZS56b29tSW1nXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImFsZXJ0LW1vZGFsLWNsb3NlXCIgKGNsaWNrKT1cIm9uTmVnYXRpdmVDbGljaygpXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCIgY2RrRm9jdXNJbml0aWFsPkNsb3NlPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L25nLXRlbXBsYXRlPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==