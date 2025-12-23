import { Component, Inject, Input, ViewEncapsulation, forwardRef } from '@angular/core';
import { MAT_DIALOG_DATA as MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CeeButtonComponent } from '../../field-components/cee-button/cee-button.component';
import { BlockRendererComponent } from '../block-renderer/block-renderer.component';
import { StepRendererComponent } from '../step-renderer/step-renderer.component';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import * as i0 from "@angular/core";
import * as i1 from "@angular/material/dialog";
import * as i2 from "@angular/common";
function ModalRendererComponent_ng_container_0_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 6)(1, "button", 7);
    i0.ɵɵlistener("click", function ModalRendererComponent_ng_container_0_div_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵtext(2, "Close");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("stepModalButtons stepModalButtons-", ctx_r1.data.stepId, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("stepModalClose stepModalClose-", ctx_r1.data.stepId, "");
} }
function ModalRendererComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3);
    i0.ɵɵelement(2, "app-step-renderer", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, ModalRendererComponent_ng_container_0_div_3_Template, 3, 6, "div", 5);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("stepModalContent stepModalContent-", ctx_r1.data.stepId, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.data.stepId)("startSession", ctx_r1.startSession);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.startSession !== false);
} }
function ModalRendererComponent_ng_template_1_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 13);
    i0.ɵɵtext(1, "\u00D7");
    i0.ɵɵelementEnd();
} }
function ModalRendererComponent_ng_template_1_label_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 13);
    i0.ɵɵelement(1, "img", 14);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate1("src", "../../../../assets/images/", ctx_r1.data.modal.closeButtonImgUrl, "", i0.ɵɵsanitizeUrl);
} }
function ModalRendererComponent_ng_template_1_label_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.data.modal.modalMessage);
} }
function ModalRendererComponent_ng_template_1_label_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 15);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.data.modal.modalMessage, i0.ɵɵsanitizeHtml);
} }
function ModalRendererComponent_ng_template_1_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-block-renderer", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", ctx_r1.templateId)("blockId", ctx_r1.data.modal.inputFormFields)("blockPosition", "modal")("rootData", ctx_r1.rootData);
} }
function ModalRendererComponent_ng_template_1_div_12_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 7);
    i0.ɵɵlistener("click", function ModalRendererComponent_ng_template_1_div_12_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r4); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵtext(2, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("eventModalClose eventModalClose-", ctx_r1.data.modal.modalId, "");
} }
function ModalRendererComponent_ng_template_1_div_12_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-cee-button", 18);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    const bi_r6 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", bi_r6, "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("fieldData", field_r5)("rootData", ctx_r1.rootData)("rowData", ctx_r1.rowData)("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition)("visibleCondition", ctx_r1.visibleCondition);
} }
function ModalRendererComponent_ng_template_1_div_12_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, ModalRendererComponent_ng_template_1_div_12_ng_template_2_ng_container_0_Template, 2, 10, "ng-container", 17);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.modalButtons);
} }
function ModalRendererComponent_ng_template_1_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, ModalRendererComponent_ng_template_1_div_12_ng_container_1_Template, 3, 3, "ng-container", 2)(2, ModalRendererComponent_ng_template_1_div_12_ng_template_2_Template, 1, 1, "ng-template", null, 1, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const buttonsModal_r7 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("eventModalButtons eventModalButtons-", ctx_r1.data.modal.modalId, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.data.modal.buttons.length === 0)("ngIfElse", buttonsModal_r7);
} }
function ModalRendererComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "div")(3, "h3", 8);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 9);
    i0.ɵɵlistener("click", function ModalRendererComponent_ng_template_1_Template_div_click_5_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.closeDialog()); });
    i0.ɵɵtemplate(6, ModalRendererComponent_ng_template_1_label_6_Template, 2, 0, "label", 10)(7, ModalRendererComponent_ng_template_1_label_7_Template, 2, 2, "label", 10);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "div", 3);
    i0.ɵɵtemplate(9, ModalRendererComponent_ng_template_1_label_9_Template, 2, 1, "label", 11)(10, ModalRendererComponent_ng_template_1_label_10_Template, 1, 1, "label", 12)(11, ModalRendererComponent_ng_template_1_ng_container_11_Template, 2, 5, "ng-container", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, ModalRendererComponent_ng_template_1_div_12_Template, 4, 5, "div", 5);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("event-body ", ctx_r1.data.modal.modalId, "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("float-left modalTitle modalTitle-", ctx_r1.data.modal.modalId, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.data.modal.modalTitle);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("float-right modalCloseCrossButton modalTitle-", ctx_r1.data.modal.modalId, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.data.modal.closeButtonImgUrl);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.data.modal.closeButtonImgUrl);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("eventModalContent eventModalContent-", ctx_r1.data.modal.modalId, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.data.modal.modalMessage));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.data.modal.modalMessage));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.data.modal.type == "form");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.startSession !== false);
} }
export class ModalRendererComponent {
    dialogRef;
    data;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    templateId;
    rootData;
    rowData;
    mandatoryCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    editableCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    visibleCondition = {
        value: false,
        fields: [],
        exceptionFields: [],
        isActive: false,
        override: false,
        overrideAll: false
    };
    startSession;
    modalButtons = [];
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        if (data.config && data.config.disableClose) {
            dialogRef.disableClose = data.config.disableClose;
        }
        this.startSession = data.startSession;
        if (this.startSession === false) {
            dialogRef.disableClose = true;
        }
        let jsonval = null;
        data.modal && data.modal.buttons.forEach((button, i) => {
            jsonval = {
                field_label: button.label,
                unique_id: "modal_button_" + i,
                is_mandatory: 0,
                is_editable: 1,
                is_display: 1,
                is_conditional_value: 0,
                field_type: "Button",
                validation_messages: [],
                validation_regex: "",
                additional_parameters: [],
                api_key: "",
                request_api_key: "",
                response_api_key: "",
                tooltip: "",
                possible_values: [],
                event_list: button.event_list,
            };
            this.modalButtons.push(jsonval);
        });
    }
    closeDialog() {
        this.dialogRef.close();
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    toggleModalCssClass(cssclass) {
        const modalWrapper = window.document.querySelector('.cdk-overlay-pane');
        if (modalWrapper) {
            modalWrapper.classList.add('modal-wrapper');
            modalWrapper.classList.add(cssclass);
        }
    }
    static ɵfac = function ModalRendererComponent_Factory(t) { return new (t || ModalRendererComponent)(i0.ɵɵdirectiveInject(i1.MatDialogRef), i0.ɵɵdirectiveInject(MAT_DIALOG_DATA)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: ModalRendererComponent, selectors: [["lib-modal-renderer"]], hostAttrs: [1, "stepModal"], inputs: { stepId: "stepId", templateId: "templateId", rootData: "rootData", rowData: "rowData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 2, consts: [["eventModal", ""], ["buttonsModal", ""], [4, "ngIf", "ngIfElse"], ["mat-dialog-content", ""], [3, "stepId", "startSession"], ["mat-dialog-actions", "", 3, "class", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "aria-label", "Select Close", 3, "click"], ["mat-dialog-title", ""], [3, "click"], ["mat-button", "", 4, "ngIf"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], ["mat-button", ""], ["alt", "close-button", 3, "src"], [3, "innerHTML"], [1, "modal-form-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], [4, "ngFor", "ngForOf"], [3, "stepId", "fieldData", "rootData", "rowData", "mandatoryCondition", "editableCondition", "visibleCondition"]], template: function ModalRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, ModalRendererComponent_ng_container_0_Template, 4, 6, "ng-container", 2)(1, ModalRendererComponent_ng_template_1_Template, 13, 19, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            const eventModal_r8 = i0.ɵɵreference(2);
            i0.ɵɵproperty("ngIf", ctx.data.stepId)("ngIfElse", eventModal_r8);
        } }, dependencies: () => [StepRendererComponent, BlockRendererComponent, MatDialogModule, i1.MatDialogTitle, i1.MatDialogActions, i1.MatDialogContent, CeeButtonComponent, CommonModule, i2.NgForOf, i2.NgIf], encapsulation: 2 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(ModalRendererComponent, [{
        type: Component,
        args: [{ selector: 'lib-modal-renderer', standalone: true, imports: [forwardRef(() => StepRendererComponent), forwardRef(() => BlockRendererComponent), MatDialogModule, CeeButtonComponent, CommonModule], host: { class: 'stepModal' }, encapsulation: ViewEncapsulation.None, template: "<ng-container *ngIf=\"data.stepId; else eventModal\">\r\n    <div mat-dialog-content class=\"stepModalContent stepModalContent-{{data.stepId}}\">\r\n        <app-step-renderer [stepId]=\"data.stepId\" [startSession]=\"startSession\"></app-step-renderer>\r\n    </div>\r\n    <div mat-dialog-actions class=\"stepModalButtons stepModalButtons-{{data.stepId}}\" *ngIf=\"startSession!==false\">\r\n        <button mat-button class=\"stepModalClose stepModalClose-{{data.stepId}}\" (click)=\"closeDialog()\" aria-label=\"Select Close\">Close</button>\r\n    </div>\r\n</ng-container>\r\n<ng-template #eventModal>\r\n    <div class=\"event-body {{data.modal.modalId}}\">\r\n\r\n        <div>\r\n            <div class=\"float-left modalTitle modalTitle-{{data.modal.modalId}}\">\r\n                <h3 mat-dialog-title>{{data.modal.modalTitle}}</h3>\r\n            </div>\r\n            <div (click)=\"closeDialog()\" class=\"float-right modalCloseCrossButton modalTitle-{{data.modal.modalId}}\">\r\n                <label mat-button *ngIf=\"!data.modal.closeButtonImgUrl\">&times;</label>\r\n                <label mat-button *ngIf=\"data.modal.closeButtonImgUrl\">\r\n\t\t\t\t\t<img alt=\"close-button\" src=\"../../../../assets/images/{{data.modal.closeButtonImgUrl}}\" />\r\n\t\t\t\t</label>\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <div mat-dialog-content class=\"eventModalContent eventModalContent-{{data.modal.modalId}}\">\r\n\r\n            <label *ngIf=\"!isHTML(data.modal.modalMessage)\">{{data.modal.modalMessage}}</label>\r\n            <label *ngIf=\"isHTML(data.modal.modalMessage)\" [innerHTML]=\"data.modal.modalMessage\"></label>\r\n            <ng-container *ngIf=\"data.modal.type == 'form'\">\r\n                <app-block-renderer [stepId]=\"stepId\" [templateId]=\"templateId\" [blockId]=\"data.modal.inputFormFields\" class=\"modal-form-content\" [blockPosition]=\"'modal'\" [rootData]=\"rootData\">\r\n                </app-block-renderer>\r\n            </ng-container>\r\n\r\n        </div>\r\n        <div mat-dialog-actions class=\"eventModalButtons eventModalButtons-{{data.modal.modalId}}\" *ngIf=\"startSession!==false\">\r\n\r\n            <ng-container *ngIf=\"data.modal.buttons.length === 0; else buttonsModal\">\r\n                <button mat-button class=\"eventModalClose eventModalClose-{{data.modal.modalId}}\" (click)=\"closeDialog()\" aria-label=\"Select Close\">Cancel</button>\r\n            </ng-container>\r\n            <ng-template #buttonsModal>\r\n                <ng-container *ngFor=\"let field of modalButtons; index as bi;\">\r\n                    <!-- <button mat-button class=\"eventModalButton eventModalButton-{{data.modal.modalId}}\"\r\n\t\t\t\t\t\t(click)=\"handleButtonEvent(button.event_list)\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"button.label\">{{button.label}}</button> -->\r\n                    <app-cee-button [stepId]=\"stepId\" [fieldData]=\"field\" [rootData]=\"rootData\" class=\"field-{{ bi }}\" [rowData]=\"rowData\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n                    </app-cee-button>\r\n                </ng-container>\r\n\r\n            </ng-template>\r\n\r\n\r\n        </div>\r\n    </div>\r\n</ng-template>" }]
    }], () => [{ type: i1.MatDialogRef }, { type: undefined, decorators: [{
                type: Inject,
                args: [MAT_DIALOG_DATA]
            }] }], { stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], rootData: [{
            type: Input
        }], rowData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(ModalRendererComponent, { className: "ModalRendererComponent", filePath: "lib\\components\\modal-renderer\\modal-renderer.component.ts", lineNumber: 21 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9kYWwtcmVuZGVyZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwtcmVuZGVyZXIvbW9kYWwtcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvbW9kYWwtcmVuZGVyZXIvbW9kYWwtcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBZ0IsTUFBTSxFQUFvQixLQUFLLEVBQWtCLGlCQUFpQixFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV4SSxPQUFPLEVBQXdELGVBQWUsSUFBSSxlQUFlLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUVwSSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUNqRixPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLDBCQUEwQixDQUFDOzs7Ozs7SUNKakQsQUFESiw4QkFBK0csZ0JBQ2dCO0lBQWxELGtNQUFTLG9CQUFhLEtBQUM7SUFBMkIscUJBQUs7SUFDcEksQUFEb0ksaUJBQVMsRUFDdkk7OztJQUZrQix1RkFBeUQ7SUFDMUQsY0FBcUQ7SUFBckQsbUZBQXFEOzs7SUFMaEYsNkJBQW1EO0lBQy9D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bkIsc0NBQW1CLDJCQUFlO2tDRGVsQixxQkFBcUIsRUFBb0Isc0JBQXNCLEVBQUcsZUFBZSwrREFBRSxrQkFBa0IsRUFBRSxZQUFZOztpRkFLckksc0JBQXNCO2NBVmxDLFNBQVM7MkJBQ0ksb0JBQW9CLGNBR2xCLElBQUksV0FDUCxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLGVBQWUsRUFBRSxrQkFBa0IsRUFBRSxZQUFZLENBQUMsUUFFekksRUFBRSxLQUFLLEVBQUUsV0FBVyxFQUFFLGlCQUNiLGlCQUFpQixDQUFDLElBQUk7O3NCQXVDaEMsTUFBTTt1QkFBQyxlQUFlO3FCQWxDVixNQUFNO2tCQUF0QixLQUFLO1lBQ0csVUFBVTtrQkFBbEIsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7O2tGQU5HLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgRXZlbnRFbWl0dGVyLCBJbmplY3QsIE5nWm9uZSwgSW5qZWN0b3IsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0VuY2Fwc3VsYXRpb24sIGZvcndhcmRSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nLCBNYXREaWFsb2dSZWYgYXMgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgYXMgTUFUX0RJQUxPR19EQVRBIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgQ2hpbGRDb25kaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hpbGRDb25kaXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBDZWVCdXR0b25Db21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1idXR0b24vY2VlLWJ1dHRvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBCbG9ja1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYmxvY2stcmVuZGVyZXIvYmxvY2stcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU3RlcFJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vc3RlcC1yZW5kZXJlci9zdGVwLXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7TWF0RGlhbG9nTW9kdWxlfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnbGliLW1vZGFsLXJlbmRlcmVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9tb2RhbC1yZW5kZXJlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9tb2RhbC1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtmb3J3YXJkUmVmKCgpID0+IFN0ZXBSZW5kZXJlckNvbXBvbmVudCksIGZvcndhcmRSZWYoKCkgPT4gQmxvY2tSZW5kZXJlckNvbXBvbmVudCksIE1hdERpYWxvZ01vZHVsZSwgQ2VlQnV0dG9uQ29tcG9uZW50LCBDb21tb25Nb2R1bGVdLFxyXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOiBuby1ob3N0LW1ldGFkYXRhLXByb3BlcnR5XHJcbiAgICBob3N0OiB7IGNsYXNzOiAnc3RlcE1vZGFsJyB9LFxyXG4gICAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsUmVuZGVyZXJDb21wb25lbnQge1xyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIHRlbXBsYXRlSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIG1hbmRhdG9yeUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb24gPSB7XHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgZXhjZXB0aW9uRmllbGRzOiBbXSxcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlQWxsOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBlZGl0YWJsZUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb24gPSB7XHJcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICAgIGZpZWxkczogW10sXHJcbiAgICAgICAgZXhjZXB0aW9uRmllbGRzOiBbXSxcclxuICAgICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICAgIG92ZXJyaWRlQWxsOiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICB2aXNpYmxlQ29uZGl0aW9uOiBDaGlsZENvbmRpdGlvbiA9IHtcclxuICAgICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgICAgZmllbGRzOiBbXSxcclxuICAgICAgICBleGNlcHRpb25GaWVsZHM6IFtdLFxyXG4gICAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgICBvdmVycmlkZTogZmFsc2UsXHJcbiAgICAgICAgb3ZlcnJpZGVBbGw6IGZhbHNlXHJcbiAgICB9O1xyXG4gICAgc3RhcnRTZXNzaW9uOiBhbnk7XHJcbiAgICBtb2RhbEJ1dHRvbnM6IGFueSA9IFtdO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGRpYWxvZ1JlZjogTWF0RGlhbG9nUmVmPE1vZGFsUmVuZGVyZXJDb21wb25lbnQ+LFxyXG4gICAgICAgIEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgZGF0YTogYW55KSB7XHJcbiAgICAgICAgaWYgKGRhdGEuY29uZmlnICYmIGRhdGEuY29uZmlnLmRpc2FibGVDbG9zZSkge1xyXG4gICAgICAgICAgICBkaWFsb2dSZWYuZGlzYWJsZUNsb3NlID0gZGF0YS5jb25maWcuZGlzYWJsZUNsb3NlO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnN0YXJ0U2Vzc2lvbiA9IGRhdGEuc3RhcnRTZXNzaW9uO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXJ0U2Vzc2lvbiA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZGlhbG9nUmVmLmRpc2FibGVDbG9zZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCBqc29udmFsID0gbnVsbDtcclxuICAgICAgICBkYXRhLm1vZGFsICYmIGRhdGEubW9kYWwuYnV0dG9ucy5mb3JFYWNoKChidXR0b24sIGkpID0+IHtcclxuICAgICAgICAgICAganNvbnZhbCA9IHtcclxuICAgICAgICAgICAgICAgIGZpZWxkX2xhYmVsOiBidXR0b24ubGFiZWwsXHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWQ6IFwibW9kYWxfYnV0dG9uX1wiICsgaSxcclxuICAgICAgICAgICAgICAgIGlzX21hbmRhdG9yeTogMCxcclxuICAgICAgICAgICAgICAgIGlzX2VkaXRhYmxlOiAxLFxyXG4gICAgICAgICAgICAgICAgaXNfZGlzcGxheTogMSxcclxuICAgICAgICAgICAgICAgIGlzX2NvbmRpdGlvbmFsX3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICAgICAgZmllbGRfdHlwZTogXCJCdXR0b25cIixcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25fbWVzc2FnZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGlvbl9yZWdleDogXCJcIixcclxuICAgICAgICAgICAgICAgIGFkZGl0aW9uYWxfcGFyYW1ldGVyczogW10sXHJcbiAgICAgICAgICAgICAgICBhcGlfa2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmVxdWVzdF9hcGlfa2V5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2VfYXBpX2tleTogXCJcIixcclxuICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBwb3NzaWJsZV92YWx1ZXM6IFtdLFxyXG4gICAgICAgICAgICAgICAgZXZlbnRfbGlzdDogYnV0dG9uLmV2ZW50X2xpc3QsXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1vZGFsQnV0dG9ucy5wdXNoKGpzb252YWwpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNsb3NlRGlhbG9nKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZGlhbG9nUmVmLmNsb3NlKCk7XHJcbiAgICB9XHJcbiAgICBpc0hUTUwodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGNvbnN0IHJlZ2V4ID0gLyg8KFtePl0rKT4pL2lnO1xyXG4gICAgICAgIHJldHVybiByZWdleC50ZXN0KHZhbHVlKTtcclxuICAgIH1cclxuICAgIHRvZ2dsZU1vZGFsQ3NzQ2xhc3MoY3NzY2xhc3MpIHtcclxuICAgICAgICBjb25zdCBtb2RhbFdyYXBwZXIgPSB3aW5kb3cuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNkay1vdmVybGF5LXBhbmUnKTtcclxuICAgICAgICBpZiAobW9kYWxXcmFwcGVyKSB7XHJcbiAgICAgICAgICAgIG1vZGFsV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdtb2RhbC13cmFwcGVyJyk7XHJcbiAgICAgICAgICAgIG1vZGFsV3JhcHBlci5jbGFzc0xpc3QuYWRkKGNzc2NsYXNzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImRhdGEuc3RlcElkOyBlbHNlIGV2ZW50TW9kYWxcIj5cclxuICAgIDxkaXYgbWF0LWRpYWxvZy1jb250ZW50IGNsYXNzPVwic3RlcE1vZGFsQ29udGVudCBzdGVwTW9kYWxDb250ZW50LXt7ZGF0YS5zdGVwSWR9fVwiPlxyXG4gICAgICAgIDxhcHAtc3RlcC1yZW5kZXJlciBbc3RlcElkXT1cImRhdGEuc3RlcElkXCIgW3N0YXJ0U2Vzc2lvbl09XCJzdGFydFNlc3Npb25cIj48L2FwcC1zdGVwLXJlbmRlcmVyPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBjbGFzcz1cInN0ZXBNb2RhbEJ1dHRvbnMgc3RlcE1vZGFsQnV0dG9ucy17e2RhdGEuc3RlcElkfX1cIiAqbmdJZj1cInN0YXJ0U2Vzc2lvbiE9PWZhbHNlXCI+XHJcbiAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwic3RlcE1vZGFsQ2xvc2Ugc3RlcE1vZGFsQ2xvc2Ute3tkYXRhLnN0ZXBJZH19XCIgKGNsaWNrKT1cImNsb3NlRGlhbG9nKClcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IENsb3NlXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L25nLWNvbnRhaW5lcj5cclxuPG5nLXRlbXBsYXRlICNldmVudE1vZGFsPlxyXG4gICAgPGRpdiBjbGFzcz1cImV2ZW50LWJvZHkge3tkYXRhLm1vZGFsLm1vZGFsSWR9fVwiPlxyXG5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXQtbGVmdCBtb2RhbFRpdGxlIG1vZGFsVGl0bGUte3tkYXRhLm1vZGFsLm1vZGFsSWR9fVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzIG1hdC1kaWFsb2ctdGl0bGU+e3tkYXRhLm1vZGFsLm1vZGFsVGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgY2xhc3M9XCJmbG9hdC1yaWdodCBtb2RhbENsb3NlQ3Jvc3NCdXR0b24gbW9kYWxUaXRsZS17e2RhdGEubW9kYWwubW9kYWxJZH19XCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgbWF0LWJ1dHRvbiAqbmdJZj1cIiFkYXRhLm1vZGFsLmNsb3NlQnV0dG9uSW1nVXJsXCI+JnRpbWVzOzwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgbWF0LWJ1dHRvbiAqbmdJZj1cImRhdGEubW9kYWwuY2xvc2VCdXR0b25JbWdVcmxcIj5cclxuXHRcdFx0XHRcdDxpbWcgYWx0PVwiY2xvc2UtYnV0dG9uXCIgc3JjPVwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltYWdlcy97e2RhdGEubW9kYWwuY2xvc2VCdXR0b25JbWdVcmx9fVwiIC8+XHJcblx0XHRcdFx0PC9sYWJlbD5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cImV2ZW50TW9kYWxDb250ZW50IGV2ZW50TW9kYWxDb250ZW50LXt7ZGF0YS5tb2RhbC5tb2RhbElkfX1cIj5cclxuXHJcbiAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cIiFpc0hUTUwoZGF0YS5tb2RhbC5tb2RhbE1lc3NhZ2UpXCI+e3tkYXRhLm1vZGFsLm1vZGFsTWVzc2FnZX19PC9sYWJlbD5cclxuICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiaXNIVE1MKGRhdGEubW9kYWwubW9kYWxNZXNzYWdlKVwiIFtpbm5lckhUTUxdPVwiZGF0YS5tb2RhbC5tb2RhbE1lc3NhZ2VcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5tb2RhbC50eXBlID09ICdmb3JtJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGFwcC1ibG9jay1yZW5kZXJlciBbc3RlcElkXT1cInN0ZXBJZFwiIFt0ZW1wbGF0ZUlkXT1cInRlbXBsYXRlSWRcIiBbYmxvY2tJZF09XCJkYXRhLm1vZGFsLmlucHV0Rm9ybUZpZWxkc1wiIGNsYXNzPVwibW9kYWwtZm9ybS1jb250ZW50XCIgW2Jsb2NrUG9zaXRpb25dPVwiJ21vZGFsJ1wiIFtyb290RGF0YV09XCJyb290RGF0YVwiPlxyXG4gICAgICAgICAgICAgICAgPC9hcHAtYmxvY2stcmVuZGVyZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBjbGFzcz1cImV2ZW50TW9kYWxCdXR0b25zIGV2ZW50TW9kYWxCdXR0b25zLXt7ZGF0YS5tb2RhbC5tb2RhbElkfX1cIiAqbmdJZj1cInN0YXJ0U2Vzc2lvbiE9PWZhbHNlXCI+XHJcblxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5tb2RhbC5idXR0b25zLmxlbmd0aCA9PT0gMDsgZWxzZSBidXR0b25zTW9kYWxcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImV2ZW50TW9kYWxDbG9zZSBldmVudE1vZGFsQ2xvc2Ute3tkYXRhLm1vZGFsLm1vZGFsSWR9fVwiIChjbGljayk9XCJjbG9zZURpYWxvZygpXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCBDbG9zZVwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNidXR0b25zTW9kYWw+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBtb2RhbEJ1dHRvbnM7IGluZGV4IGFzIGJpO1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwhLS0gPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZXZlbnRNb2RhbEJ1dHRvbiBldmVudE1vZGFsQnV0dG9uLXt7ZGF0YS5tb2RhbC5tb2RhbElkfX1cIlxyXG5cdFx0XHRcdFx0XHQoY2xpY2spPVwiaGFuZGxlQnV0dG9uRXZlbnQoYnV0dG9uLmV2ZW50X2xpc3QpXCJcclxuXHRcdFx0XHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCJidXR0b24ubGFiZWxcIj57e2J1dHRvbi5sYWJlbH19PC9idXR0b24+IC0tPlxyXG4gICAgICAgICAgICAgICAgICAgIDxhcHAtY2VlLWJ1dHRvbiBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZERhdGFdPVwiZmllbGRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBjbGFzcz1cImZpZWxkLXt7IGJpIH19XCIgW3Jvd0RhdGFdPVwicm93RGF0YVwiIFttYW5kYXRvcnlDb25kaXRpb25dPVwibWFuZGF0b3J5Q29uZGl0aW9uXCIgW2VkaXRhYmxlQ29uZGl0aW9uXT1cImVkaXRhYmxlQ29uZGl0aW9uXCIgW3Zpc2libGVDb25kaXRpb25dPVwidmlzaWJsZUNvbmRpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvYXBwLWNlZS1idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDwvbmctdGVtcGxhdGU+XHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==