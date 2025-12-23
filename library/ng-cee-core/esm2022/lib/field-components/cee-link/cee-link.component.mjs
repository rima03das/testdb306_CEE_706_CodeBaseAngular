import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { CommonModule, NgStyle } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/router";
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
import * as i12 from "@angular/common";
const _c0 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "font-color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
function CeeLinkComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 4)(1, "a", 5);
    i0.ɵɵlistener("click", function CeeLinkComponent_div_0_div_2_Template_a_click_1_listener() { const links_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.switchEvent(links_r4)); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const links_r4 = ctx.$implicit;
    const pos_r5 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r1.fieldData.html_id, "", ctx_r1.fieldData.link_config.length > 1 ? "-" + pos_r5 : "", "");
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction8(9, _c0, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color));
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : links_r4.link_name);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(links_r4.link_name);
} }
function CeeLinkComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("contextmenu", function CeeLinkComponent_div_0_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onContextMenu($event)); });
    i0.ɵɵelementStart(1, "div", 2);
    i0.ɵɵtemplate(2, CeeLinkComponent_div_0_div_2_Template, 3, 18, "div", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r1.fieldData.link_config);
} }
export class CeeLinkComponent extends BaseView {
    router;
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
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    rootData;
    Target;
    constructor(router, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.router = router;
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
    }
    ngOnInit() {
        if (!this.fieldData.link_config) {
            this.fieldData.link_config = [{}];
        }
        else if (!Array.isArray(this.fieldData.link_config) && typeof (this.fieldData.link_config) === 'object') {
            this.fieldData.link_config = [this.fieldData.link_config];
        }
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        if (this.rowData && this.rowData.hasOwnProperty('value')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.value);
            this.fieldData.link_config.forEach(config => {
                this.setApiData(config, this.rowData.value);
            });
        }
        this.fieldData.link_config.forEach(config => {
            if (!config.link_name && !this.fieldData.field_label.includes('((dynamic))')) {
                config.link_name = this.fieldData.field_label;
            }
        });
        if (this.additionalParameter['Target']) {
            switch (this.additionalParameter['Target']) {
                case 'Blank':
                    this.Target = '_blank';
                    break;
                case 'Top':
                    this.Target = '_top';
                    break;
                default:
                    break;
            }
        }
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        this.fieldData.link_config.forEach(config => {
            this.setApiData(config, data);
            if (!config.link_name && !this.fieldData.field_label.includes('((dynamic))')) {
                config.link_name = this.fieldData.field_label;
            }
        });
    }
    setApiData(config, data) {
        if (config.link_name_api_key) {
            const link_name = this.setApiCallBackDataUtil.setApiCallBackData(config.link_name_api_key, data);
            if (link_name) {
                config.link_name = link_name;
            }
        }
        if (config.link_api_key) {
            const link = this.setApiCallBackDataUtil.setApiCallBackData(config.link_api_key, data);
            if (link) {
                config.link = link;
            }
        }
    }
    onEmptySession(data) {
        //throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    onSetSessionData(apiKey, value) {
    }
    concatData() { }
    /*
     * special event handled for link types
    */
    switchEvent(event) {
        const ModalOnPageLeave = this.additionalParameter['ModalOnPageLeave'] ? this.additionalParameter['ModalOnPageLeave'] : null;
        switch ((event.link_type).toLowerCase()) {
            case 'step':
                this.wfeEventListHandler.redirectTo(event.link, ModalOnPageLeave, this.Target);
                break;
            case 'workflow':
                this.wfeEventListHandler.redirectTo(this.wfeStepLoaderService.getSequenceDefaultStepIdBySequenceId(event.link), ModalOnPageLeave, this.Target);
                break;
            /* istanbul ignore next */
            case 'external_url':
                this.sharedEventsService.closeDrawerOnClickExternalUrl.emit(true);
                setTimeout(() => {
                    this.wfeEventListHandler.redirectToHref(event.link, ModalOnPageLeave, this.Target);
                }, 10);
                break;
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    onContextMenu(event) {
        if (event.button === 2) {
            this.fieldData?.event_list?.forEach(x => {
                if (x.event_name === "OnRightClick" && x.isDefault === true) {
                    event.preventDefault();
                }
            });
            let objectLoc = {
                x: event.clientX + 'px',
                y: event.clientY + 'px'
            };
            this.onComponentEvent('OnRightClick', objectLoc);
        }
    }
    static ɵfac = function CeeLinkComponent_Factory(t) { return new (t || CeeLinkComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.MatDialog), i0.ɵɵdirectiveInject(i9.MatSnackBar), i0.ɵɵdirectiveInject(i10.HttpClient), i0.ɵɵdirectiveInject(i11.CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeLinkComponent, selectors: [["app-cee-link"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "contextmenu", 4, "ngIf"], [1, "field-wrapper", 3, "contextmenu"], [1, "form-group"], ["class", "form-field", 4, "ngFor", "ngForOf"], [1, "form-field"], ["href", "javascript:void(0)", 3, "click", "id", "ngStyle"]], template: function CeeLinkComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeLinkComponent_div_0_Template, 3, 1, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgStyle, CommonModule, i12.NgForOf, i12.NgIf] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeLinkComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-link', standalone: true, imports: [NgStyle, CommonModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\" (contextmenu)=\"onContextMenu($event)\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-field\" *ngFor=\"let links of fieldData.link_config; index as pos\">\r\n            <a id=\"{{fieldData.html_id}}{{fieldData.link_config.length>1?'-'+pos:''}}\" href=\"javascript:void(0)\"\r\n                (click)=\"switchEvent(links)\" [ngStyle]=\"{\r\n                'font-family': fieldData.field_style.font_name,\r\n                'font-size': fieldData.field_style.font_size,\r\n                'font-style': fieldData.field_style.font_style,\r\n                'font-color': fieldData.field_style.font_color,\r\n                'border-color': fieldData.field_style.border_color,\r\n                'height': fieldData.field_style.field_height,\r\n                'width': fieldData.field_style.field_width,\r\n                'background-color': fieldData.field_style.background_color\r\n              }\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : links.link_name\"\r\n                class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">{{links.link_name}}</a>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n" }]
    }], () => [{ type: i1.Router }, { type: i2.UserDataHandlerService }, { type: i3.SharedEventsServiceService }, { type: i4.CEEInternalEmitterService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.MatDialog }, { type: i9.MatSnackBar }, { type: i10.HttpClient }, { type: i11.CeeApiService }], { stepId: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeLinkComponent, { className: "CeeLinkComponent", filePath: "lib\\field-components\\cee-link\\cee-link.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWxpbmsuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxpbmsvY2VlLWxpbmsuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWxpbmsvY2VlLWxpbmsuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQTJCLE1BQU0sZUFBZSxDQUFDO0FBRWxGLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVk3QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7OztJQ1g1QyxBQURKLDhCQUFrRixXQWFzQjtJQVhoRyx5TUFBUyw0QkFBa0IsS0FBQztJQVdvRSxZQUFtQjtJQUMzSCxBQUQySCxpQkFBSSxFQUN6SDs7Ozs7SUFERSxjQUErRjtJQUEvRix5SEFBK0Y7SUFaaEcsa0lBQXVFO0lBQ3pDLHFZQVM3Qjs7SUFFZ0csY0FBbUI7SUFBbkIsd0NBQW1COzs7O0lBZm5JLDhCQUFtRjtJQUF0QywyTEFBZSw0QkFBcUIsS0FBQztJQUM5RSw4QkFBd0I7SUFDcEIsd0VBQWtGO0lBaUIxRixBQUZJLGlCQUFNLEVBRUo7OztJQWpCNEMsZUFBMEI7SUFBMUIsc0RBQTBCOztBRHNCNUUsTUFBTSxPQUFPLGdCQUFpQixTQUFRLFFBQVE7SUFXL0I7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lB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Z0JBQWdCOzZEQUFoQixnQkFBZ0I7WUN4QjdCLGlFQUFtRjs7WUFBdkQsb0NBQWU7NEJEc0I3QixPQUFPLEVBQUUsWUFBWTs7aUZBRXRCLGdCQUFnQjtjQVA1QixTQUFTOzJCQUNJLGNBQWMsY0FHWixJQUFJLFdBQ1AsQ0FBQyxPQUFPLEVBQUUsWUFBWSxDQUFDO21XQUlmLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLOztrRkFQRyxnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtbGluaycsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLWxpbmsuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLWxpbmsuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTmdTdHlsZSwgQ29tbW9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlTGlua0NvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgcHJpbWFyeUtleUluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuXHJcbiAgICBUYXJnZXQ6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIodXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UsIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLCBkaWFsb2csIHNuYWNrQmFyLCBodHRwLCBjZWVBcGlTZXJ2aWNlLCByb3V0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGlmICghdGhpcy5maWVsZERhdGEubGlua19jb25maWcpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEubGlua19jb25maWcgPSBbe31dO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLmZpZWxkRGF0YS5saW5rX2NvbmZpZykgJiYgdHlwZW9mICh0aGlzLmZpZWxkRGF0YS5saW5rX2NvbmZpZykgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmxpbmtfY29uZmlnID0gW3RoaXMuZmllbGREYXRhLmxpbmtfY29uZmlnXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuc3RlcElkLCB0aGlzLmZpZWxkRGF0YSwgdGhpcy5rZWVwU3RhdGUsIHRoaXMucm93RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy9ASG9zdExpc3RlbmVyKCd3aW5kb3c6YmVmb3JldW5sb2FkJylcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSAmJiB0aGlzLnJvd0RhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCB0aGlzLnJvd0RhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5saW5rX2NvbmZpZy5mb3JFYWNoKGNvbmZpZyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFwaURhdGEoY29uZmlnLCB0aGlzLnJvd0RhdGEudmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZmllbGREYXRhLmxpbmtfY29uZmlnLmZvckVhY2goY29uZmlnID0+IHtcclxuICAgICAgICAgICAgaWYgKCFjb25maWcubGlua19uYW1lICYmICF0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmxpbmtfbmFtZSA9IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnVGFyZ2V0J10pIHtcclxuICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RhcmdldCddKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdCbGFuayc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYXJnZXQgPSAnX2JsYW5rJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ1RvcCc6XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5UYXJnZXQgPSAnX3RvcCc7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YS5saW5rX2NvbmZpZy5mb3JFYWNoKGNvbmZpZyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QXBpRGF0YShjb25maWcsIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAoIWNvbmZpZy5saW5rX25hbWUgJiYgIXRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcubGlua19uYW1lID0gdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBzZXRBcGlEYXRhKGNvbmZpZywgZGF0YSkge1xyXG4gICAgICAgIGlmIChjb25maWcubGlua19uYW1lX2FwaV9rZXkpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlua19uYW1lID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShjb25maWcubGlua19uYW1lX2FwaV9rZXksIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAobGlua19uYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBjb25maWcubGlua19uYW1lID0gbGlua19uYW1lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjb25maWcubGlua19hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGNvbmZpZy5saW5rX2FwaV9rZXksIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAobGluaykge1xyXG4gICAgICAgICAgICAgICAgY29uZmlnLmxpbmsgPSBsaW5rO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGRhdGE6IGFueSkge1xyXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcblxyXG4gICAgLypcclxuICAgICAqIHNwZWNpYWwgZXZlbnQgaGFuZGxlZCBmb3IgbGluayB0eXBlc1xyXG4gICAgKi9cclxuICAgIHN3aXRjaEV2ZW50KGV2ZW50KSB7XHJcbiAgICAgICAgY29uc3QgTW9kYWxPblBhZ2VMZWF2ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTW9kYWxPblBhZ2VMZWF2ZSddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNb2RhbE9uUGFnZUxlYXZlJ10gOiBudWxsO1xyXG4gICAgICAgIHN3aXRjaCAoKGV2ZW50LmxpbmtfdHlwZSkudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICBjYXNlICdzdGVwJzpcclxuICAgICAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5yZWRpcmVjdFRvKGV2ZW50LmxpbmssIE1vZGFsT25QYWdlTGVhdmUsIHRoaXMuVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlICd3b3JrZmxvdyc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIucmVkaXJlY3RUbyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldFNlcXVlbmNlRGVmYXVsdFN0ZXBJZEJ5U2VxdWVuY2VJZChldmVudC5saW5rKSwgTW9kYWxPblBhZ2VMZWF2ZSwgdGhpcy5UYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXHJcbiAgICAgICAgICAgIGNhc2UgJ2V4dGVybmFsX3VybCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuY2xvc2VEcmF3ZXJPbkNsaWNrRXh0ZXJuYWxVcmwuZW1pdCh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5yZWRpcmVjdFRvSHJlZihldmVudC5saW5rLCBNb2RhbE9uUGFnZUxlYXZlLCB0aGlzLlRhcmdldCk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGE/LmV2ZW50X2xpc3Q/LmZvckVhY2goeCA9PntcclxuICAgICAgICAgICAgICAgIGlmKHguZXZlbnRfbmFtZSA9PT0gXCJPblJpZ2h0Q2xpY2tcIiAmJiB4LmlzRGVmYXVsdCA9PT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IG9iamVjdExvYyA9IHtcclxuICAgICAgICAgICAgICAgIHggOiBldmVudC5jbGllbnRYICsgJ3B4JyxcclxuICAgICAgICAgICAgICAgIHkgOiBldmVudC5jbGllbnRZICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25SaWdodENsaWNrJywgb2JqZWN0TG9jKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiAqbmdJZj1cImlzVmlzaWJsZVwiIChjb250ZXh0bWVudSk9XCJvbkNvbnRleHRNZW51KCRldmVudClcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIiAqbmdGb3I9XCJsZXQgbGlua3Mgb2YgZmllbGREYXRhLmxpbmtfY29uZmlnOyBpbmRleCBhcyBwb3NcIj5cclxuICAgICAgICAgICAgPGEgaWQ9XCJ7e2ZpZWxkRGF0YS5odG1sX2lkfX17e2ZpZWxkRGF0YS5saW5rX2NvbmZpZy5sZW5ndGg+MT8nLScrcG9zOicnfX1cIiBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCJcclxuICAgICAgICAgICAgICAgIChjbGljayk9XCJzd2l0Y2hFdmVudChsaW5rcylcIiBbbmdTdHlsZV09XCJ7XHJcbiAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9uYW1lLFxyXG4gICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3NpemUsXHJcbiAgICAgICAgICAgICAgICAnZm9udC1zdHlsZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG4gICAgICAgICAgICAgICAgJ2ZvbnQtY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvcixcclxuICAgICAgICAgICAgICAgICdib3JkZXItY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYm9yZGVyX2NvbG9yLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5iYWNrZ3JvdW5kX2NvbG9yXHJcbiAgICAgICAgICAgICAgfVwiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6IGxpbmtzLmxpbmtfbmFtZVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cInt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiPnt7bGlua3MubGlua19uYW1lfX08L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbjwvZGl2PlxyXG4iXX0=