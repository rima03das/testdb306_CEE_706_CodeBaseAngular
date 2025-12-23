import { CommonModule } from '@angular/common';
import { Component, HostListener, ViewChild } from '@angular/core';
import { Input, forwardRef } from '@angular/core';
import { CeeButtonComponent } from '../../field-components/cee-button/cee-button.component';
import { BlockRendererComponent } from '../block-renderer/block-renderer.component';
import { StepRendererComponent } from '../step-renderer/step-renderer.component';
import { CommonUtil } from '../../utils/common-util';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared-events-service.service";
import * as i2 from "../../services/loader-service";
import * as i3 from "@angular/common";
const _c0 = ["modal"];
const _c1 = ["dial"];
function DrawerComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 9)(1, "button", 10);
    i0.ɵɵlistener("click", function DrawerComponent_div_4_div_3_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.closeModal()); });
    i0.ɵɵtext(2, "Close");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("stepModalButtons stepModalButtons-", ctx_r1.stepId, "");
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("stepModalClose stepModalClose-", ctx_r1.stepId, "");
} }
function DrawerComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 6);
    i0.ɵɵelement(2, "app-step-renderer", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DrawerComponent_div_4_div_3_Template, 3, 6, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("stepModalContent stepModalContent-", ctx_r1.data.stepId, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("startSession", ctx_r1.startSession);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.startSession !== false);
} }
function DrawerComponent_div_5_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.data.modal.modalMessage);
} }
function DrawerComponent_div_5_label_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 13);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r1.data.modal.modalMessage, i0.ɵɵsanitizeHtml);
} }
function DrawerComponent_div_5_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-block-renderer", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", ctx_r1.templateId)("blockId", ctx_r1.data.modal.inputFormFields)("blockPosition", "modal")("rootData", ctx_r1.rootData);
} }
function DrawerComponent_div_5_div_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "button", 10);
    i0.ɵɵlistener("click", function DrawerComponent_div_5_div_9_ng_container_1_Template_button_click_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r1 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r1.closeModal()); });
    i0.ɵɵtext(2, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("eventModalClose eventModalClose-", ctx_r1.data.modal.modalId, "");
} }
function DrawerComponent_div_5_div_9_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-cee-button", 17);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r4 = ctx.$implicit;
    const bi_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("field-", bi_r5, "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("fieldData", field_r4)("rootData", ctx_r1.rootData)("rowData", ctx_r1.rowData)("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition)("visibleCondition", ctx_r1.visibleCondition);
} }
function DrawerComponent_div_5_div_9_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DrawerComponent_div_5_div_9_ng_template_2_ng_container_0_Template, 2, 10, "ng-container", 16);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.modalButtons);
} }
function DrawerComponent_div_5_div_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 9);
    i0.ɵɵtemplate(1, DrawerComponent_div_5_div_9_ng_container_1_Template, 3, 3, "ng-container", 15)(2, DrawerComponent_div_5_div_9_ng_template_2_Template, 1, 1, "ng-template", null, 2, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const buttonsModal_r6 = i0.ɵɵreference(3);
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("eventModalButtons eventModalButtons-", ctx_r1.data.modal.modalId, "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.data.modal.buttons.length === 0)("ngIfElse", buttonsModal_r6);
} }
function DrawerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div")(2, "div")(3, "h3", 11);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(5, "div", 6);
    i0.ɵɵtemplate(6, DrawerComponent_div_5_label_6_Template, 2, 1, "label", 4)(7, DrawerComponent_div_5_label_7_Template, 1, 1, "label", 12)(8, DrawerComponent_div_5_ng_container_8_Template, 2, 5, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, DrawerComponent_div_5_div_9_Template, 4, 5, "div", 8);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMapInterpolate1("event-body ", ctx_r1.data.modal.modalId, "");
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("float-left modalTitle modalTitle-", ctx_r1.data.modal.modalId, "");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r1.data.modal.modalTitle);
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
export class DrawerComponent {
    sharedEventsService;
    loaderService;
    modal;
    dial;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    stepId;
    templateId;
    rootData;
    rowData;
    data;
    variableObj = {};
    lastClickedElement = null;
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
    commonUtil;
    isLoadingState = false;
    loadingSubscription;
    constructor(sharedEventsService, loaderService) {
        this.sharedEventsService = sharedEventsService;
        this.loaderService = loaderService;
        this.startSession = this.data?.startSession;
        let jsonval = null;
        this.data?.modal && this.data?.modal?.buttons.forEach((button, i) => {
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
        this.sharedEventsService.closeDrawerOnClickExternalUrl.subscribe(res => {
            if (res) {
                this.modal.nativeElement.close();
            }
        });
        this.commonUtil = new CommonUtil();
    }
    ngOnInit() {
        // Subscribe to loading state
        this.loadingSubscription = this.loaderService.isLoading.subscribe(loading => this.isLoadingState = loading);
    }
    // Close modal
    closeModal() {
        localStorage.setItem('isDrawerOpen', '0');
        if (this.modal.nativeElement && this.modal.nativeElement.open) {
            this.modal.nativeElement.close();
            this.commonUtil.moveMatDialogToBody();
            this.sharedEventsService.modelEmitter.emit({ data: { stepId: "", config: { disableClose: true } }, id: ``, panelClass: `` });
        }
    }
    // Listen for ESC key press
    onEscapeKey(event) {
        this.onDialogClose();
    }
    // Handle dialog close event
    onDialogClose() {
        if (this.modal.nativeElement && this.modal.nativeElement.open) {
            this.modal.nativeElement.close();
            this.commonUtil.moveMatDialogToBody();
            this.sharedEventsService.modelEmitter.emit({ data: { stepId: "", config: { disableClose: true } }, id: ``, panelClass: `` });
        }
    }
    openModal() {
        localStorage.setItem('isDrawerOpen', '1');
        if (this.modal.nativeElement && !this.modal.nativeElement.open) {
            this.lastClickedElement = null;
            this.modal.nativeElement.showModal();
        }
    }
    handleDocumentClick(event) {
        // Check if loading - if yes, don't close modal
        if (this.isLoadingState) {
            return;
        }
        const targetElement = event.target, isModalOpen = this.modal?.nativeElement?.open, clickedOutside = this.dial.nativeElement.contains(targetElement), shouldDismiss = this.data.config.dismissModal === 0, 
        //Check if target has class and to resist dropdown clicks as it renders outside component's DOM tree
        targetHasClass = targetElement.classList.contains('dropdown-item');
        if (isModalOpen && !clickedOutside && !targetHasClass && shouldDismiss) {
            this.modal.nativeElement.close();
            this.commonUtil.moveMatDialogToBody();
            this.sharedEventsService.modelEmitter.emit({ data: { stepId: "", config: { disableClose: true } }, id: ``, panelClass: `` });
        }
    }
    ngAfterViewInit() {
        // Only after the view is initialized can we access the nativeElement
        if (this.modal && this.modal.nativeElement && this.stepId) {
            this.modal.nativeElement.addEventListener('close', this.onDialogClose.bind(this));
            this.openModal();
        }
    }
    // Clean up event listeners to prevent memory leaks
    ngOnDestroy() {
        localStorage.setItem('isDrawerOpen', '0');
        if (this.modal && this.modal.nativeElement) {
            this.modal.nativeElement.removeEventListener('close', this.onDialogClose);
        }
        if (this.loadingSubscription) {
            this.loadingSubscription.unsubscribe();
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    static ɵfac = function DrawerComponent_Factory(t) { return new (t || DrawerComponent)(i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.LoaderService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DrawerComponent, selectors: [["cee-drawer-renderer"]], viewQuery: function DrawerComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.modal = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.dial = _t.first);
        } }, hostBindings: function DrawerComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown.escape", function DrawerComponent_keydown_escape_HostBindingHandler($event) { return ctx.onEscapeKey($event); }, false, i0.ɵɵresolveDocument)("click", function DrawerComponent_click_HostBindingHandler($event) { return ctx.handleDocumentClick($event); }, false, i0.ɵɵresolveDocument);
        } }, inputs: { stepId: "stepId", templateId: "templateId", rootData: "rootData", rowData: "rowData", data: "data" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 6, vars: 4, consts: [["modal", ""], ["dial", ""], ["buttonsModal", ""], [1, "drawer", 3, "id"], [4, "ngIf"], [3, "class", 4, "ngIf"], ["mat-dialog-content", ""], [3, "stepId", "startSession"], ["mat-dialog-actions", "", 3, "class", 4, "ngIf"], ["mat-dialog-actions", ""], ["mat-button", "", "aria-label", "Select Close", 3, "click"], ["mat-dialog-title", ""], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "modal-form-content", 3, "stepId", "templateId", "blockId", "blockPosition", "rootData"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], [3, "stepId", "fieldData", "rootData", "rowData", "mandatoryCondition", "editableCondition", "visibleCondition"]], template: function DrawerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "dialog", 3, 0)(2, "div", null, 1);
            i0.ɵɵtemplate(4, DrawerComponent_div_4_Template, 4, 6, "div", 4)(5, DrawerComponent_div_5_Template, 10, 14, "div", 5);
            i0.ɵɵelementEnd()();
        } if (rf & 2) {
            i0.ɵɵpropertyInterpolate1("id", "stepModal-", ctx.data.stepId, "");
            i0.ɵɵadvance(4);
            i0.ɵɵproperty("ngIf", ctx.stepId);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.data == null ? null : ctx.data.modal == null ? null : ctx.data.modal.modalId);
        } }, dependencies: () => [StepRendererComponent, BlockRendererComponent, CeeButtonComponent, CommonModule, i3.NgForOf, i3.NgIf], styles: [".drawer[_ngcontent-%COMP%]{position:fixed;margin-top:2rem;display:flex;justify-content:center;background:#fff;box-shadow:0 0 10px #00000080;overflow:auto;border-radius:.375rem;z-index:9999;display:block;border:0;border:1px solid gray;padding:0!important}dialog[_ngcontent-%COMP%]::backdrop{background:var(--neutral-black, #666);opacity:.7}p[_ngcontent-%COMP%]{font-family:Lato}dialog[_ngcontent-%COMP%]{padding:10px}dialog[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{margin:10px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DrawerComponent, [{
        type: Component,
        args: [{ selector: 'cee-drawer-renderer', standalone: true, imports: [forwardRef(() => StepRendererComponent), forwardRef(() => BlockRendererComponent), CeeButtonComponent, CommonModule], template: "<dialog #modal id=\"stepModal-{{data.stepId}}\" class=\"drawer\">\r\n    <div #dial>\r\n        <div *ngIf=\"stepId\">\r\n            <div mat-dialog-content class=\"stepModalContent stepModalContent-{{data.stepId}}\">\r\n                <app-step-renderer [stepId]=\"stepId\" [startSession]=\"startSession\"></app-step-renderer>\r\n            </div>\r\n            <div mat-dialog-actions class=\"stepModalButtons stepModalButtons-{{stepId}}\" *ngIf=\"startSession!==false\">\r\n                <button mat-button class=\"stepModalClose stepModalClose-{{stepId}}\" (click)=\"closeModal()\" aria-label=\"Select Close\">Close</button>\r\n            </div>\r\n        </div>\r\n        <div *ngIf=\"data?.modal?.modalId\" class=\"event-body {{data.modal.modalId}}\">\r\n            <div>\r\n                <div class=\"float-left modalTitle modalTitle-{{data.modal.modalId}}\">\r\n                    <h3 mat-dialog-title>{{data.modal.modalTitle}}</h3>\r\n                </div>\r\n\r\n                <div mat-dialog-content class=\"eventModalContent eventModalContent-{{data.modal.modalId}}\">\r\n\r\n                    <label *ngIf=\"!isHTML(data.modal.modalMessage)\">{{data.modal.modalMessage}}</label>\r\n                    <label *ngIf=\"isHTML(data.modal.modalMessage)\" [innerHTML]=\"data.modal.modalMessage\"></label>\r\n                    <ng-container *ngIf=\"data.modal.type == 'form'\">\r\n                        <app-block-renderer [stepId]=\"stepId\" [templateId]=\"templateId\" [blockId]=\"data.modal.inputFormFields\" class=\"modal-form-content\" [blockPosition]=\"'modal'\" [rootData]=\"rootData\">\r\n                        </app-block-renderer>\r\n                    </ng-container>\r\n\r\n                </div>\r\n                <div mat-dialog-actions class=\"eventModalButtons eventModalButtons-{{data.modal.modalId}}\" *ngIf=\"startSession!==false\">\r\n\r\n                    <ng-container *ngIf=\"data.modal.buttons.length === 0; else buttonsModal\">\r\n                        <button mat-button class=\"eventModalClose eventModalClose-{{data.modal.modalId}}\" (click)=\"closeModal()\" aria-label=\"Select Close\">Cancel</button>\r\n                    </ng-container>\r\n                    <ng-template #buttonsModal>\r\n                        <ng-container *ngFor=\"let field of modalButtons; index as bi;\">\r\n                            <app-cee-button [stepId]=\"stepId\" [fieldData]=\"field\" [rootData]=\"rootData\" class=\"field-{{ bi }}\" [rowData]=\"rowData\" [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\" [visibleCondition]=\"visibleCondition\">\r\n                            </app-cee-button>\r\n                        </ng-container>\r\n                    </ng-template>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</dialog>\r\n", styles: [".drawer{position:fixed;margin-top:2rem;display:flex;justify-content:center;background:#fff;box-shadow:0 0 10px #00000080;overflow:auto;border-radius:.375rem;z-index:9999;display:block;border:0;border:1px solid gray;padding:0!important}dialog::backdrop{background:var(--neutral-black, #666);opacity:.7}p{font-family:Lato}dialog{padding:10px}dialog div{margin:10px}\n"] }]
    }], () => [{ type: i1.SharedEventsServiceService }, { type: i2.LoaderService }], { modal: [{
            type: ViewChild,
            args: ['modal']
        }], dial: [{
            type: ViewChild,
            args: ['dial']
        }], stepId: [{
            type: Input
        }], templateId: [{
            type: Input
        }], rootData: [{
            type: Input
        }], rowData: [{
            type: Input
        }], data: [{
            type: Input
        }], onEscapeKey: [{
            type: HostListener,
            args: ['document:keydown.escape', ['$event']]
        }], handleDocumentClick: [{
            type: HostListener,
            args: ['document:click', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DrawerComponent, { className: "DrawerComponent", filePath: "lib\\components\\drawer-renderer\\drawer-renderer.component.ts", lineNumber: 22 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhd2VyLXJlbmRlcmVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL2RyYXdlci1yZW5kZXJlci9kcmF3ZXItcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHJhd2VyLXJlbmRlcmVyL2RyYXdlci1yZW5kZXJlci5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFpQixTQUFTLEVBQWMsWUFBWSxFQUFhLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd6RyxPQUFPLEVBQUUsS0FBSyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUVsRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUM1RixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw0Q0FBNEMsQ0FBQztBQUNwRixPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSwwQ0FBMEMsQ0FBQztBQUVqRixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7Ozs7Ozs7OztJQ0hyQyxBQURKLDhCQUEwRyxpQkFDZTtJQUFqRCxrTEFBUyxtQkFBWSxLQUFDO0lBQTJCLHFCQUFLO0lBQzlILEFBRDhILGlCQUFTLEVBQ2pJOzs7SUFGa0Isa0ZBQW9EO0lBQ3JELGNBQWdEO0lBQWhELDhFQUFnRDs7O0lBSnZFLEFBREosMkJBQW9CLGFBQ2tFO0lBQzlFLHVDQUF1RjtJQUMzRixpQkFBTTtJQUNOLHNFQUEwRztJQUc5RyxpQkFBTTs7O0lBTnNCLGNBQXlEO0lBQXpELHVGQUF5RDtJQUMxRCxjQUFpQjtJQUFDLEFBQWxCLHNDQUFpQixxQ0FBOEI7SUFFUSxjQUEwQjtJQUExQixvREFBMEI7OztJQVloRyw2QkFBZ0Q7SUFBQSxZQUEyQjtJQUFBLGlCQUFROzs7SUFBbkMsY0FBMkI7SUFBM0Isb0RBQTJCOzs7SUFDM0UsNEJBQTZGOzs7SUFBOUMsNkVBQXFDOzs7SUFDcEYsNkJBQWdEO0lBQzVDLHlDQUNxQjs7OztJQURELGNBQWlCO0lBQXVILEFBQTFCLEFBQWxFLEFBQTFCLEFBQWxCLHNDQUFpQixpQ0FBMEIsOENBQXVDLDBCQUFxRCw2QkFBc0I7Ozs7SUFPckwsNkJBQXlFO0lBQ3JFLGtDQUFtSTtJQUFqRCxpTUFBUyxtQkFBWSxLQUFDO0lBQTJCLHNCQUFNO0lBQUEsaUJBQVM7Ozs7SUFBL0gsY0FBOEQ7SUFBOUQsNEZBQThEOzs7SUFHakYsNkJBQStEO0lBQzNELHFDQUNpQjs7Ozs7O0lBRDJELGNBQXNCO0lBQXRCLDhDQUFzQjtJQUF1RyxBQUF4QyxBQUExQyxBQUFwQixBQUE3QyxBQUFwQixBQUFsQixzQ0FBaUIsdUJBQW9CLDZCQUFzQiwyQkFBMkMsaURBQTBDLCtDQUF3Qyw2Q0FBc0M7OztJQURsUCw4R0FBK0Q7OztJQUEvQiw2Q0FBaUI7OztJQU56RCw4QkFBd0g7SUFLcEgsQUFIQSwrRkFBeUUsZ0hBRzlDO0lBTS9CLGlCQUFNOzs7O0lBWGtCLGdHQUFrRTtJQUV2RSxjQUF1QztJQUFBLEFBQXZDLDZEQUF1Qyw2QkFBaUI7OztJQWZ2RSxBQURKLEFBREosQUFESiwyQkFBNEUsVUFDbkUsVUFDb0UsYUFDNUM7SUFBQSxZQUF5QjtJQUNsRCxBQURrRCxpQkFBSyxFQUNqRDtJQUVOLDhCQUEyRjtJQUl2RixBQURBLEFBREEsMEVBQWdELDhEQUNxQywyRUFDckM7SUFLcEQsaUJBQU07SUFDTixzRUFBd0g7SUFhaEksQUFESSxpQkFBTSxFQUNKOzs7SUE3QjRCLHVFQUF5QztJQUU5RCxlQUErRDtJQUEvRCw2RkFBK0Q7SUFDM0MsZUFBeUI7SUFBekIsa0RBQXlCO0lBRzFCLGNBQWtFO0lBQWxFLGdHQUFrRTtJQUU5RSxjQUFzQztJQUF0QyxxRUFBc0M7SUFDdEMsY0FBcUM7SUFBckMsb0VBQXFDO0lBQzlCLGNBQStCO0lBQS9CLHVEQUErQjtJQU0wQyxjQUEwQjtJQUExQixvREFBMEI7O0FETHRJLE1BQU0sT0FBTyxlQUFlO0lBNENOO0lBQXlEO0lBM0N6RCxLQUFLLENBQWlDO0lBQ3ZDLElBQUksQ0FBaUM7SUFDeEQscUJBQXFCLEdBQUcsWUFBWSxDQUFDLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLFdBQVcsRUFBRSxJQUFJLE1BQU0sSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDLENBQUMsZUFBZSxDQUFDO0lBQ3ROLGVBQWUsR0FBRyxJQUFJLENBQUMscUJBQXFCLEdBQUcseUNBQXlDLENBQUM7SUFDeEUsTUFBTSxDQUFNO0lBQ3BCLFVBQVUsQ0FBTTtJQUNSLFFBQVEsQ0FBTTtJQUN0QixPQUFPLENBQU07SUFDTCxJQUFJLENBQU07SUFDM0IsV0FBVyxHQUFRLEVBQUUsQ0FBQztJQUN0QixrQkFBa0IsR0FBdUIsSUFBSSxDQUFDO0lBQzlDLGtCQUFrQixHQUFtQjtRQUNuQyxLQUFLLEVBQUUsS0FBSztRQUNaLE1BQU0sRUFBRSxFQUFFO1FBQ1YsZUFBZSxFQUFFLEVBQUU7UUFDbkIsUUFBUSxFQUFFLEtBQUs7UUFDZixRQUFRLEVBQUUsS0FBSztRQUNmLFdBQVcsRUFBRSxLQUFLO0tBQ25CLENBQUM7SUFFRixpQkFBaUIsR0FBbUI7UUFDbEMsS0FBSyxFQUFFLEtBQUs7UUFDWixNQUFNLEVBQUUsRUFBRTtRQUNWLGVBQWUsRUFBRSxFQUFFO1FBQ25CLFFBQVEsRUFBRSxLQUFLO1FBQ2YsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsS0FBSztLQUNuQixDQUFDO0lBRUYsZ0JBQWdCLEdBQW1CO1FBQ2pDLEtBQUssRUFBRSxLQUFLO1FBQ1osTUFBTSxFQUFFLEVBQUU7UUFDVixlQUFlLEVBQUUsRUFBRTtRQUNuQixRQUFRLEVBQUUsS0FBSztRQUNmLFFBQVEsRUFBRSxLQUFLO1FBQ2YsV0FBVyxFQUFFLEtBQUs7S0FDbkIsQ0FBQztJQUNGLFlBQVksQ0FBTTtJQUNsQixZQUFZLEdBQVEsRUFBRSxDQUFDO0lBQ3ZCLFVBQVUsQ0FBYTtJQUNmLGNBQWMsR0FBRyxLQUFLLENBQUM7SUFDdkIsbUJBQW1CLENBQWdCO0lBRTNDLFlBQW9CLG1CQUErQyxFQUFVLGFBQTRCO1FBQXJGLHdCQUFtQixHQUFuQixtQkFBbUIsQ0FBNEI7UUFBVSxrQkFBYSxHQUFiLGFBQWEsQ0FBZTtRQUN2RyxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsWUFBWSxDQUFDO1FBQzVDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQztRQUNuQixJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hFLE9BQU8sR0FBRztnQkFDTixXQUFXLEVBQUUsTUFBTSxDQUFDLEtBQUs7Z0JBQ3pCLFNBQVMsRUFBRSxlQUFlLEdBQUcsQ0FBQztnQkFDOUIsWUFBWSxFQUFFLENBQUM7Z0JBQ2YsV0FBVyxFQUFFLENBQUM7Z0JBQ2QsVUFBVSxFQUFFLENBQUM7Z0JBQ2Isb0JBQW9CLEVBQUUsQ0FBQztnQkFDdkIsVUFBVSxFQUFFLFFBQVE7Z0JBQ3BCLG1CQUFtQixFQUFFLEVBQUU7Z0JBQ3ZCLGdCQUFnQixFQUFFLEVBQUU7Z0JBQ3BCLHFCQUFxQixFQUFFLEVBQUU7Z0JBQ3pCLE9BQU8sRUFBRSxFQUFFO2dCQUNYLGVBQWUsRUFBRSxFQUFFO2dCQUNuQixnQkFBZ0IsRUFBRSxFQUFFO2dCQUNwQixPQUFPLEVBQUUsRUFBRTtnQkFDWCxlQUFlLEVBQUUsRUFBRTtnQkFDbkIsVUFBVSxFQUFFLE1BQU0sQ0FBQyxVQUFVO2FBQ2hDLENBQUM7WUFFRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNwQyxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxtQkFBbUIsQ0FBQyw2QkFBNkIsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDckUsSUFBSSxHQUFHLEVBQUU7Z0JBQ1AsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7YUFDbEM7UUFDSCxDQUFDLENBQUMsQ0FBQztRQUNILElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsUUFBUTtRQUNOLDZCQUE2QjtRQUM3QixJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUMvRCxPQUFPLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFjLEdBQUcsT0FBTyxDQUN6QyxDQUFDO0lBQ0osQ0FBQztJQUNELGNBQWM7SUFDZCxVQUFVO1FBQ1IsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7WUFDN0QsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLENBQUM7WUFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsRUFBRSxDQUFDO1lBQ3RDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFBO1NBQzdIO0lBQ0gsQ0FBQztJQUVELDJCQUEyQjtJQUUzQixXQUFXLENBQUMsS0FBb0I7UUFDOUIsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3ZCLENBQUM7SUFFRCw0QkFBNEI7SUFDNUIsYUFBYTtRQUNYLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFO1lBQzdELElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2pDLElBQUksQ0FBQyxVQUFVLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztZQUN0QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLEVBQUUsTUFBTSxFQUFFLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQTtTQUM3SDtJQUNILENBQUM7SUFFRCxTQUFTO1FBQ1AsWUFBWSxDQUFDLE9BQU8sQ0FBQyxjQUFjLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDMUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLElBQUksRUFBRTtZQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxDQUFDO1NBQ3RDO0lBQ0gsQ0FBQztJQUdELG1CQUFtQixDQUFDLEtBQWlCO1FBQ25DLCtDQUErQztRQUMvQyxJQUFJLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDdkIsT0FBTztTQUNSO1FBQ0QsTUFBTSxhQUFhLEdBQUcsS0FBSyxDQUFDLE1BQXFCLEVBQy9DLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQzdDLGNBQWMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLEVBQ2hFLGFBQWEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLEtBQUssQ0FBQztRQUNuRCxvR0FBb0c7UUFDcEcsY0FBYyxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBRXJFLElBQUksV0FBVyxJQUFJLENBQUMsY0FBYyxJQUFJLENBQUMsY0FBYyxJQUFJLGFBQWEsRUFBRTtZQUN0RSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLG1CQUFtQixFQUFFLENBQUM7WUFDdEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsRUFBRSxNQUFNLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxFQUFFLFlBQVksRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUE7U0FDN0g7SUFDSCxDQUFDO0lBRUQsZUFBZTtRQUNiLHFFQUFxRTtRQUNyRSxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN6RCxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNsRixJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDbEI7SUFDSCxDQUFDO0lBRUQsbURBQW1EO0lBQ25ELFdBQVc7UUFDVCxZQUFZLENBQUMsT0FBTyxDQUFDLGNBQWMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUMxQyxJQUFJLElBQUksQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUU7WUFDMUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztTQUMzRTtRQUNBLElBQUksSUFBSSxDQUFDLG1CQUFtQixFQUFFO1lBQzdCLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxXQUFXLEVBQUUsQ0FBQztTQUN4QztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsS0FBYTtRQUNsQixNQUFNLEtBQUssR0FBRyxlQUFlLENBQUM7UUFDOUIsT0FBTyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzNCLENBQUM7eUVBN0pVLGVBQWU7NkRBQWYsZUFBZTs7Ozs7Ozs7WUFBZiw0R0FBQSx1QkFBbUIsaUNBQUosNkVBQWYsK0JBQTJCLGlDQUFaOztZQ3BCeEIsQUFESixvQ0FBNkQsbUJBQzlDO1lBU1AsQUFSQSxnRUFBb0IscURBUXdEO1lBK0JwRixBQURJLGlCQUFNLEVBQ0Q7O1lBekNNLGtFQUE4QjtZQUUvQixlQUFZO1lBQVosaUNBQVk7WUFRWixjQUEwQjtZQUExQix1R0FBMEI7a0NET1gscUJBQXFCLEVBQW9CLHNCQUFzQixFQUFHLGtCQUFrQixFQUFFLFlBQVk7O2lGQUlsSCxlQUFlO2NBUDNCLFNBQVM7MkJBQ0UscUJBQXFCLGNBQ25CLElBQUksV0FDUCxDQUFDLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxxQkFBcUIsQ0FBQyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQyxFQUFFLGtCQUFrQixFQUFFLFlBQVksQ0FBQzt1RkFLMUcsS0FBSztrQkFBeEIsU0FBUzttQkFBQyxPQUFPO1lBQ0MsSUFBSTtrQkFBdEIsU0FBUzttQkFBQyxNQUFNO1lBR0EsTUFBTTtrQkFBdEIsS0FBSztZQUNHLFVBQVU7a0JBQWxCLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBQ1csSUFBSTtrQkFBcEIsS0FBSztZQXFGTixXQUFXO2tCQURWLFlBQVk7bUJBQUMseUJBQXlCLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUF1Qm5ELG1CQUFtQjtrQkFEbEIsWUFBWTttQkFBQyxnQkFBZ0IsRUFBRSxDQUFDLFFBQVEsQ0FBQzs7a0ZBbkgvQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgQWZ0ZXJWaWV3SW5pdCwgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBIb3N0TGlzdGVuZXIsIE9uRGVzdHJveSwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbi8vIGltcG9ydCB7IFN2Z0ljb25Db21wb25lbnQgfSBmcm9tICcuLi9zdmctaWNvbi9zdmctaWNvbi5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBJbnB1dCwgZm9yd2FyZFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBDaGlsZENvbmRpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVscy9jaGlsZENvbmRpdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IENlZUJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWJ1dHRvbi9jZWUtYnV0dG9uLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEJsb2NrUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9ibG9jay1yZW5kZXJlci9ibG9jay1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTdGVwUmVuZGVyZXJDb21wb25lbnQgfSBmcm9tICcuLi9zdGVwLXJlbmRlcmVyL3N0ZXAtcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMvZGlzdC90eXBlcyc7XHJcbmltcG9ydCB7IExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9sb2FkZXItc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2NlZS1kcmF3ZXItcmVuZGVyZXInLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgaW1wb3J0czogW2ZvcndhcmRSZWYoKCkgPT4gU3RlcFJlbmRlcmVyQ29tcG9uZW50KSwgZm9yd2FyZFJlZigoKSA9PiBCbG9ja1JlbmRlcmVyQ29tcG9uZW50KSwgQ2VlQnV0dG9uQ29tcG9uZW50LCBDb21tb25Nb2R1bGVdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9kcmF3ZXItcmVuZGVyZXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2RyYXdlci1yZW5kZXJlci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhd2VyQ29tcG9uZW50IGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcclxuICBAVmlld0NoaWxkKCdtb2RhbCcpIG1vZGFsITogRWxlbWVudFJlZjxIVE1MRGlhbG9nRWxlbWVudD47XHJcbiAgQFZpZXdDaGlsZCgnZGlhbCcpIGRpYWwhOiBFbGVtZW50UmVmPEhUTUxEaWFsb2dFbGVtZW50PjtcclxuICBhdXRvUHJldmlld0NvbmZpZ1BhdGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnRU5BQkxFX0FVVE9fUFJFVklFVycpPy50b0xvd2VyQ2FzZSgpID09IFwidHJ1ZVwiICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBVVRPX1BSRVZJRVdfQ09ORklHX1BBVEgnKSA/IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBVVRPX1BSRVZJRVdfQ09ORklHX1BBVEgnKSA6ICdhc3NldHMvY29uZmlnJztcclxuICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG4gIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgQElucHV0KCkgdGVtcGxhdGVJZDogYW55O1xyXG4gIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgQElucHV0KCkgZGVjbGFyZSBkYXRhOiBhbnk7XHJcbiAgdmFyaWFibGVPYmo6IGFueSA9IHt9O1xyXG4gIGxhc3RDbGlja2VkRWxlbWVudDogRXZlbnRUYXJnZXQgfCBudWxsID0gbnVsbDtcclxuICBtYW5kYXRvcnlDb25kaXRpb246IENoaWxkQ29uZGl0aW9uID0ge1xyXG4gICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgZmllbGRzOiBbXSxcclxuICAgIGV4Y2VwdGlvbkZpZWxkczogW10sXHJcbiAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICBvdmVycmlkZTogZmFsc2UsXHJcbiAgICBvdmVycmlkZUFsbDogZmFsc2VcclxuICB9O1xyXG5cclxuICBlZGl0YWJsZUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb24gPSB7XHJcbiAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICBmaWVsZHM6IFtdLFxyXG4gICAgZXhjZXB0aW9uRmllbGRzOiBbXSxcclxuICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgIG92ZXJyaWRlOiBmYWxzZSxcclxuICAgIG92ZXJyaWRlQWxsOiBmYWxzZVxyXG4gIH07XHJcblxyXG4gIHZpc2libGVDb25kaXRpb246IENoaWxkQ29uZGl0aW9uID0ge1xyXG4gICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgZmllbGRzOiBbXSxcclxuICAgIGV4Y2VwdGlvbkZpZWxkczogW10sXHJcbiAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICBvdmVycmlkZTogZmFsc2UsXHJcbiAgICBvdmVycmlkZUFsbDogZmFsc2VcclxuICB9O1xyXG4gIHN0YXJ0U2Vzc2lvbjogYW55O1xyXG4gIG1vZGFsQnV0dG9uczogYW55ID0gW107XHJcbiAgY29tbW9uVXRpbDogQ29tbW9uVXRpbDtcclxuICBwcml2YXRlIGlzTG9hZGluZ1N0YXRlID0gZmFsc2U7XHJcbiAgcHJpdmF0ZSBsb2FkaW5nU3Vic2NyaXB0aW9uPzogU3Vic2NyaXB0aW9uO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLCBwcml2YXRlIGxvYWRlclNlcnZpY2U6IExvYWRlclNlcnZpY2UpIHtcclxuICAgIHRoaXMuc3RhcnRTZXNzaW9uID0gdGhpcy5kYXRhPy5zdGFydFNlc3Npb247XHJcbiAgICBsZXQganNvbnZhbCA9IG51bGw7XHJcbiAgICB0aGlzLmRhdGE/Lm1vZGFsICYmIHRoaXMuZGF0YT8ubW9kYWw/LmJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uLCBpKSA9PiB7XHJcbiAgICAgICAganNvbnZhbCA9IHtcclxuICAgICAgICAgICAgZmllbGRfbGFiZWw6IGJ1dHRvbi5sYWJlbCxcclxuICAgICAgICAgICAgdW5pcXVlX2lkOiBcIm1vZGFsX2J1dHRvbl9cIiArIGksXHJcbiAgICAgICAgICAgIGlzX21hbmRhdG9yeTogMCxcclxuICAgICAgICAgICAgaXNfZWRpdGFibGU6IDEsXHJcbiAgICAgICAgICAgIGlzX2Rpc3BsYXk6IDEsXHJcbiAgICAgICAgICAgIGlzX2NvbmRpdGlvbmFsX3ZhbHVlOiAwLFxyXG4gICAgICAgICAgICBmaWVsZF90eXBlOiBcIkJ1dHRvblwiLFxyXG4gICAgICAgICAgICB2YWxpZGF0aW9uX21lc3NhZ2VzOiBbXSxcclxuICAgICAgICAgICAgdmFsaWRhdGlvbl9yZWdleDogXCJcIixcclxuICAgICAgICAgICAgYWRkaXRpb25hbF9wYXJhbWV0ZXJzOiBbXSxcclxuICAgICAgICAgICAgYXBpX2tleTogXCJcIixcclxuICAgICAgICAgICAgcmVxdWVzdF9hcGlfa2V5OiBcIlwiLFxyXG4gICAgICAgICAgICByZXNwb25zZV9hcGlfa2V5OiBcIlwiLFxyXG4gICAgICAgICAgICB0b29sdGlwOiBcIlwiLFxyXG4gICAgICAgICAgICBwb3NzaWJsZV92YWx1ZXM6IFtdLFxyXG4gICAgICAgICAgICBldmVudF9saXN0OiBidXR0b24uZXZlbnRfbGlzdCxcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLm1vZGFsQnV0dG9ucy5wdXNoKGpzb252YWwpO1xyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuY2xvc2VEcmF3ZXJPbkNsaWNrRXh0ZXJuYWxVcmwuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuY2xvc2UoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vIFN1YnNjcmliZSB0byBsb2FkaW5nIHN0YXRlXHJcbiAgICB0aGlzLmxvYWRpbmdTdWJzY3JpcHRpb24gPSB0aGlzLmxvYWRlclNlcnZpY2UuaXNMb2FkaW5nLnN1YnNjcmliZShcclxuICAgICAgbG9hZGluZyA9PiB0aGlzLmlzTG9hZGluZ1N0YXRlID0gbG9hZGluZ1xyXG4gICAgKTtcclxuICB9XHJcbiAgLy8gQ2xvc2UgbW9kYWxcclxuICBjbG9zZU1vZGFsKCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzRHJhd2VyT3BlbicsICcwJyk7XHJcbiAgICBpZiAodGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50ICYmIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5vcGVuKSB7XHJcbiAgICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5jbG9zZSgpO1xyXG4gICAgICB0aGlzLmNvbW1vblV0aWwubW92ZU1hdERpYWxvZ1RvQm9keSgpO1xyXG4gICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UubW9kZWxFbWl0dGVyLmVtaXQoeyBkYXRhOiB7IHN0ZXBJZDogXCJcIiwgY29uZmlnOiB7IGRpc2FibGVDbG9zZTogdHJ1ZSB9IH0sIGlkOiBgYCwgcGFuZWxDbGFzczogYGAgfSlcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgLy8gTGlzdGVuIGZvciBFU0Mga2V5IHByZXNzXHJcbiAgQEhvc3RMaXN0ZW5lcignZG9jdW1lbnQ6a2V5ZG93bi5lc2NhcGUnLCBbJyRldmVudCddKVxyXG4gIG9uRXNjYXBlS2V5KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICB0aGlzLm9uRGlhbG9nQ2xvc2UoKTtcclxuICB9XHJcbiAgXHJcbiAgLy8gSGFuZGxlIGRpYWxvZyBjbG9zZSBldmVudFxyXG4gIG9uRGlhbG9nQ2xvc2UoKSB7XHJcbiAgICBpZiAodGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50ICYmIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5vcGVuKSB7XHJcbiAgICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5jbG9zZSgpO1xyXG4gICAgICB0aGlzLmNvbW1vblV0aWwubW92ZU1hdERpYWxvZ1RvQm9keSgpO1xyXG4gICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UubW9kZWxFbWl0dGVyLmVtaXQoeyBkYXRhOiB7IHN0ZXBJZDogXCJcIiwgY29uZmlnOiB7IGRpc2FibGVDbG9zZTogdHJ1ZSB9IH0sIGlkOiBgYCwgcGFuZWxDbGFzczogYGAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG9wZW5Nb2RhbCgpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpc0RyYXdlck9wZW4nLCAnMScpO1xyXG4gICAgaWYgKHRoaXMubW9kYWwubmF0aXZlRWxlbWVudCAmJiAhdGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50Lm9wZW4pIHtcclxuICAgICAgdGhpcy5sYXN0Q2xpY2tlZEVsZW1lbnQgPSBudWxsO1xyXG4gICAgICB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQuc2hvd01vZGFsKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBASG9zdExpc3RlbmVyKCdkb2N1bWVudDpjbGljaycsIFsnJGV2ZW50J10pXHJcbiAgaGFuZGxlRG9jdW1lbnRDbGljayhldmVudDogTW91c2VFdmVudCk6IHZvaWQge1xyXG4gICAgLy8gQ2hlY2sgaWYgbG9hZGluZyAtIGlmIHllcywgZG9uJ3QgY2xvc2UgbW9kYWxcclxuICAgIGlmICh0aGlzLmlzTG9hZGluZ1N0YXRlKSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGNvbnN0IHRhcmdldEVsZW1lbnQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQsXHJcbiAgICAgIGlzTW9kYWxPcGVuID0gdGhpcy5tb2RhbD8ubmF0aXZlRWxlbWVudD8ub3BlbixcclxuICAgICAgY2xpY2tlZE91dHNpZGUgPSB0aGlzLmRpYWwubmF0aXZlRWxlbWVudC5jb250YWlucyh0YXJnZXRFbGVtZW50KSxcclxuICAgICAgc2hvdWxkRGlzbWlzcyA9IHRoaXMuZGF0YS5jb25maWcuZGlzbWlzc01vZGFsID09PSAwLFxyXG4gICAgICAvL0NoZWNrIGlmIHRhcmdldCBoYXMgY2xhc3MgYW5kIHRvIHJlc2lzdCBkcm9wZG93biBjbGlja3MgYXMgaXQgcmVuZGVycyBvdXRzaWRlIGNvbXBvbmVudCdzIERPTSB0cmVlXHJcbiAgICAgIHRhcmdldEhhc0NsYXNzID0gdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2Ryb3Bkb3duLWl0ZW0nKTtcclxuXHJcbiAgICBpZiAoaXNNb2RhbE9wZW4gJiYgIWNsaWNrZWRPdXRzaWRlICYmICF0YXJnZXRIYXNDbGFzcyAmJiBzaG91bGREaXNtaXNzKSB7XHJcbiAgICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5jbG9zZSgpO1xyXG4gICAgICB0aGlzLmNvbW1vblV0aWwubW92ZU1hdERpYWxvZ1RvQm9keSgpO1xyXG4gICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UubW9kZWxFbWl0dGVyLmVtaXQoeyBkYXRhOiB7IHN0ZXBJZDogXCJcIiwgY29uZmlnOiB7IGRpc2FibGVDbG9zZTogdHJ1ZSB9IH0sIGlkOiBgYCwgcGFuZWxDbGFzczogYGAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcclxuICAgIC8vIE9ubHkgYWZ0ZXIgdGhlIHZpZXcgaXMgaW5pdGlhbGl6ZWQgY2FuIHdlIGFjY2VzcyB0aGUgbmF0aXZlRWxlbWVudFxyXG4gICAgaWYgKHRoaXMubW9kYWwgJiYgdGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50ICYmIHRoaXMuc3RlcElkKSB7XHJcbiAgICAgIHRoaXMubW9kYWwubmF0aXZlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMub25EaWFsb2dDbG9zZS5iaW5kKHRoaXMpKTtcclxuICAgICAgdGhpcy5vcGVuTW9kYWwoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8vIENsZWFuIHVwIGV2ZW50IGxpc3RlbmVycyB0byBwcmV2ZW50IG1lbW9yeSBsZWFrc1xyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzRHJhd2VyT3BlbicsICcwJyk7XHJcbiAgICBpZiAodGhpcy5tb2RhbCAmJiB0aGlzLm1vZGFsLm5hdGl2ZUVsZW1lbnQpIHtcclxuICAgICAgdGhpcy5tb2RhbC5uYXRpdmVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2Nsb3NlJywgdGhpcy5vbkRpYWxvZ0Nsb3NlKTtcclxuICAgIH1cclxuICAgICBpZiAodGhpcy5sb2FkaW5nU3Vic2NyaXB0aW9uKSB7XHJcbiAgICAgIHRoaXMubG9hZGluZ1N1YnNjcmlwdGlvbi51bnN1YnNjcmliZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNIVE1MKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHJlZ2V4ID0gLyg8KFtePl0rKT4pL2lnO1xyXG4gICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xyXG4gIH1cclxufSIsIjxkaWFsb2cgI21vZGFsIGlkPVwic3RlcE1vZGFsLXt7ZGF0YS5zdGVwSWR9fVwiIGNsYXNzPVwiZHJhd2VyXCI+XHJcbiAgICA8ZGl2ICNkaWFsPlxyXG4gICAgICAgIDxkaXYgKm5nSWY9XCJzdGVwSWRcIj5cclxuICAgICAgICAgICAgPGRpdiBtYXQtZGlhbG9nLWNvbnRlbnQgY2xhc3M9XCJzdGVwTW9kYWxDb250ZW50IHN0ZXBNb2RhbENvbnRlbnQte3tkYXRhLnN0ZXBJZH19XCI+XHJcbiAgICAgICAgICAgICAgICA8YXBwLXN0ZXAtcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbc3RhcnRTZXNzaW9uXT1cInN0YXJ0U2Vzc2lvblwiPjwvYXBwLXN0ZXAtcmVuZGVyZXI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IG1hdC1kaWFsb2ctYWN0aW9ucyBjbGFzcz1cInN0ZXBNb2RhbEJ1dHRvbnMgc3RlcE1vZGFsQnV0dG9ucy17e3N0ZXBJZH19XCIgKm5nSWY9XCJzdGFydFNlc3Npb24hPT1mYWxzZVwiPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwic3RlcE1vZGFsQ2xvc2Ugc3RlcE1vZGFsQ2xvc2Ute3tzdGVwSWR9fVwiIChjbGljayk9XCJjbG9zZU1vZGFsKClcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IENsb3NlXCI+Q2xvc2U8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiAqbmdJZj1cImRhdGE/Lm1vZGFsPy5tb2RhbElkXCIgY2xhc3M9XCJldmVudC1ib2R5IHt7ZGF0YS5tb2RhbC5tb2RhbElkfX1cIj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdC1sZWZ0IG1vZGFsVGl0bGUgbW9kYWxUaXRsZS17e2RhdGEubW9kYWwubW9kYWxJZH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgzIG1hdC1kaWFsb2ctdGl0bGU+e3tkYXRhLm1vZGFsLm1vZGFsVGl0bGV9fTwvaDM+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8ZGl2IG1hdC1kaWFsb2ctY29udGVudCBjbGFzcz1cImV2ZW50TW9kYWxDb250ZW50IGV2ZW50TW9kYWxDb250ZW50LXt7ZGF0YS5tb2RhbC5tb2RhbElkfX1cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsICpuZ0lmPVwiIWlzSFRNTChkYXRhLm1vZGFsLm1vZGFsTWVzc2FnZSlcIj57e2RhdGEubW9kYWwubW9kYWxNZXNzYWdlfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCAqbmdJZj1cImlzSFRNTChkYXRhLm1vZGFsLm1vZGFsTWVzc2FnZSlcIiBbaW5uZXJIVE1MXT1cImRhdGEubW9kYWwubW9kYWxNZXNzYWdlXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5tb2RhbC50eXBlID09ICdmb3JtJ1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YXBwLWJsb2NrLXJlbmRlcmVyIFtzdGVwSWRdPVwic3RlcElkXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiIFtibG9ja0lkXT1cImRhdGEubW9kYWwuaW5wdXRGb3JtRmllbGRzXCIgY2xhc3M9XCJtb2RhbC1mb3JtLWNvbnRlbnRcIiBbYmxvY2tQb3NpdGlvbl09XCInbW9kYWwnXCIgW3Jvb3REYXRhXT1cInJvb3REYXRhXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLWJsb2NrLXJlbmRlcmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBtYXQtZGlhbG9nLWFjdGlvbnMgY2xhc3M9XCJldmVudE1vZGFsQnV0dG9ucyBldmVudE1vZGFsQnV0dG9ucy17e2RhdGEubW9kYWwubW9kYWxJZH19XCIgKm5nSWY9XCJzdGFydFNlc3Npb24hPT1mYWxzZVwiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZGF0YS5tb2RhbC5idXR0b25zLmxlbmd0aCA9PT0gMDsgZWxzZSBidXR0b25zTW9kYWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBtYXQtYnV0dG9uIGNsYXNzPVwiZXZlbnRNb2RhbENsb3NlIGV2ZW50TW9kYWxDbG9zZS17e2RhdGEubW9kYWwubW9kYWxJZH19XCIgKGNsaWNrKT1cImNsb3NlTW9kYWwoKVwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgQ2xvc2VcIj5DYW5jZWw8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgICAgICA8bmctdGVtcGxhdGUgI2J1dHRvbnNNb2RhbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgZmllbGQgb2YgbW9kYWxCdXR0b25zOyBpbmRleCBhcyBiaTtcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtY2VlLWJ1dHRvbiBbc3RlcElkXT1cInN0ZXBJZFwiIFtmaWVsZERhdGFdPVwiZmllbGRcIiBbcm9vdERhdGFdPVwicm9vdERhdGFcIiBjbGFzcz1cImZpZWxkLXt7IGJpIH19XCIgW3Jvd0RhdGFdPVwicm93RGF0YVwiIFttYW5kYXRvcnlDb25kaXRpb25dPVwibWFuZGF0b3J5Q29uZGl0aW9uXCIgW2VkaXRhYmxlQ29uZGl0aW9uXT1cImVkaXRhYmxlQ29uZGl0aW9uXCIgW3Zpc2libGVDb25kaXRpb25dPVwidmlzaWJsZUNvbmRpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtY2VlLWJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2RpYWxvZz5cclxuIl19