import { Component, Input } from '@angular/core';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { BreadcrumbCellRendererComponent } from '../breadcrumb-cell-renderer/breadcrumb-cell-renderer.component';
import { CommonModule } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "@angular/common/http";
import * as i2 from "../../models/api-data/api-data.service";
import * as i3 from "../../models/app-data/app-data.service";
import * as i4 from "../../services/wfe-step-loader.service";
import * as i5 from "@angular/router";
import * as i6 from "../../services/shared-events-service.service";
import * as i7 from "../../services/internal-cee-emitter-service.service";
import * as i8 from "@angular/material/snack-bar";
import * as i9 from "@angular/material/dialog";
import * as i10 from "../../services/cee-api-service.service";
import * as i11 from "@angular/common";
function BreadcrumbRendererComponent_app_breadcrumb_cell_renderer_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "app-breadcrumb-cell-renderer", 1);
    i0.ɵɵlistener("click", function BreadcrumbRendererComponent_app_breadcrumb_cell_renderer_0_Template_app_breadcrumb_cell_renderer_click_0_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.triggerComponentEvent()); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const block_r3 = ctx.$implicit;
    const i_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("templateId", "breadcrumb-cell")("blockId", block_r3)("blockPosition", i_r4)("mappingValues", ctx_r1.progressBarMappingData);
} }
export class BreadcrumbRendererComponent {
    http;
    apiDataService;
    appDataService;
    stepLoaderService;
    router;
    sharedEventService;
    internalCEEEmitter;
    snackBar;
    dialog;
    ceeApiService;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    fieldData;
    stepId;
    childBlockIds;
    progressBarMappingData = {};
    eventListHandlerUtil;
    constructor(http, apiDataService, appDataService, stepLoaderService, router, sharedEventService, internalCEEEmitter, snackBar, dialog, ceeApiService) {
        this.http = http;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.stepLoaderService = stepLoaderService;
        this.router = router;
        this.sharedEventService = sharedEventService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.ceeApiService = ceeApiService;
        this.eventListHandlerUtil = new WFEEventListHandler(ceeApiService, router, sharedEventService, internalCEEEmitter, stepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
    }
    ngOnInit() {
        if (this.fieldData.possible_values) {
            for (const value of this.fieldData.possible_values) {
                this.progressBarMappingData[value.split('|')[0].trim()] = {
                    apiValue: value.split('|')[0].trim(),
                    label: value.split('|')[1].trim(),
                    color: value.split('|')[2].trim()
                };
            }
        }
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                switch (parameter.parameter_type) {
                    case 'default_value':
                        this.childBlockIds = parameter.value.split('|');
                        break;
                }
            }
        }
    }
    triggerComponentEvent() {
        for (const event of this.fieldData.event_list) {
            if (event.isDefault && event.event_name.toLowerCase() === 'onclick') {
                this.eventListHandlerUtil.switchEventDisplayType(event, this.fieldData.event_list);
            }
        }
    }
    static ɵfac = function BreadcrumbRendererComponent_Factory(t) { return new (t || BreadcrumbRendererComponent)(i0.ɵɵdirectiveInject(i1.HttpClient), i0.ɵɵdirectiveInject(i2.ApiDataService), i0.ɵɵdirectiveInject(i3.AppDataService), i0.ɵɵdirectiveInject(i4.WfeStepLoaderService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i6.SharedEventsServiceService), i0.ɵɵdirectiveInject(i7.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.MatDialog), i0.ɵɵdirectiveInject(i10.CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: BreadcrumbRendererComponent, selectors: [["app-breadcrumb-renderer"]], inputs: { fieldData: "fieldData", stepId: "stepId" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[3, "stepId", "templateId", "blockId", "blockPosition", "mappingValues", "click", 4, "ngFor", "ngForOf"], [3, "click", "stepId", "templateId", "blockId", "blockPosition", "mappingValues"]], template: function BreadcrumbRendererComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, BreadcrumbRendererComponent_app_breadcrumb_cell_renderer_0_Template, 1, 5, "app-breadcrumb-cell-renderer", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngForOf", ctx.childBlockIds);
        } }, dependencies: [CommonModule, i11.NgForOf, BreadcrumbCellRendererComponent] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BreadcrumbRendererComponent, [{
        type: Component,
        args: [{ selector: 'app-breadcrumb-renderer', standalone: true, imports: [CommonModule, BreadcrumbCellRendererComponent], template: "<app-breadcrumb-cell-renderer [stepId]=\"stepId\" [templateId]=\"'breadcrumb-cell'\" [blockId]=\"block\"\r\n\t*ngFor=\"let block of childBlockIds; index as i\" [blockPosition]=\"i\" [mappingValues]=\"progressBarMappingData\"\r\n\t(click)=\"triggerComponentEvent()\">\r\n</app-breadcrumb-cell-renderer>" }]
    }], () => [{ type: i1.HttpClient }, { type: i2.ApiDataService }, { type: i3.AppDataService }, { type: i4.WfeStepLoaderService }, { type: i5.Router }, { type: i6.SharedEventsServiceService }, { type: i7.CEEInternalEmitterService }, { type: i8.MatSnackBar }, { type: i9.MatDialog }, { type: i10.CeeApiService }], { fieldData: [{
            type: Input
        }], stepId: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(BreadcrumbRendererComponent, { className: "BreadcrumbRendererComponent", filePath: "lib\\components\\breadcrumb-renderer\\breadcrumb-renderer.component.ts", lineNumber: 24 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJlYWRjcnVtYi1yZW5kZXJlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9icmVhZGNydW1iLXJlbmRlcmVyL2JyZWFkY3J1bWItcmVuZGVyZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvYnJlYWRjcnVtYi1yZW5kZXJlci9icmVhZGNydW1iLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3pELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzlFLE9BQU8sRUFBRSwrQkFBK0IsRUFBRSxNQUFNLGdFQUFnRSxDQUFDO0FBQ2pILE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0lDYi9DLHVEQUVtQztJQUFsQyxzT0FBUyw4QkFBdUIsS0FBQztJQUNsQyxpQkFBK0I7Ozs7O0lBRnNDLEFBQXBCLEFBRGdDLEFBQWpDLEFBQWxCLHNDQUFpQixpQ0FBaUMscUJBQWtCLHVCQUM5QixnREFBeUM7O0FEc0I3RyxNQUFNLE9BQU8sMkJBQTJCO0lBWXhCO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNEO0lBQ0M7SUFDQTtJQUNBO0lBcEJaLHFCQUFxQixHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMscUJBQXFCLENBQUMsRUFBRSxXQUFXLEVBQUUsSUFBSSxNQUFNLElBQUksWUFBWSxDQUFDLE9B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QVUsQ0FBQyxDQUFDO2FBQ3RGO1NBQ0o7SUFDTCxDQUFDO3FGQWhFUSwyQkFBMkI7NkRBQTNCLDJCQUEyQjtZQ3ZCeEMsOEhBRW1DOztZQURoQiwyQ0FBa0I7NEJEbUJ2QixZQUFZLGVBQUcsK0JBQStCOztpRkFHL0MsMkJBQTJCO2NBUnZDLFNBQVM7MkJBQ0kseUJBQXlCLGNBR3ZCLElBQUksV0FDUCxDQUFDLFlBQVksRUFBRywrQkFBK0IsQ0FBQzs2VEFPeEMsU0FBUztrQkFBekIsS0FBSztZQUNXLE1BQU07a0JBQXRCLEtBQUs7O2tGQUxHLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgV0ZFRXZlbnRMaXN0SGFuZGxlciB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1ldmVudC1saXN0LWhhbmRsZXItdXRpbCc7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCcmVhZGNydW1iQ2VsbFJlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vYnJlYWRjcnVtYi1jZWxsLXJlbmRlcmVyL2JyZWFkY3J1bWItY2VsbC1yZW5kZXJlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1icmVhZGNydW1iLXJlbmRlcmVyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9icmVhZGNydW1iLXJlbmRlcmVyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2JyZWFkY3J1bWItcmVuZGVyZXIuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlICwgQnJlYWRjcnVtYkNlbGxSZW5kZXJlckNvbXBvbmVudF1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCcmVhZGNydW1iUmVuZGVyZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gICAgYXV0b1ByZXZpZXdDb25maWdQYXRoID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0VOQUJMRV9BVVRPX1BSRVZJRVcnKT8udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQVVUT19QUkVWSUVXX0NPTkZJR19QQVRIJykgOiAnYXNzZXRzL2NvbmZpZyc7XHJcbiAgICBjb25maWdCbG9ja1BhdGggPSB0aGlzLmF1dG9QcmV2aWV3Q29uZmlnUGF0aCArICcvYXBwbGljYXRpb25fYmxvY2tzL2FwcGxpY2F0aW9uX2Jsb2Nrc18nO1xyXG5cclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG5cclxuICAgIGNoaWxkQmxvY2tJZHM6IGFueTtcclxuICAgIHByb2dyZXNzQmFyTWFwcGluZ0RhdGEgPSB7fTtcclxuICAgIGV2ZW50TGlzdEhhbmRsZXJVdGlsOiBXRkVFdmVudExpc3RIYW5kbGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHByaXZhdGUgc2hhcmVkRXZlbnRTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHByaXZhdGUgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHJpdmF0ZSBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLmV2ZW50TGlzdEhhbmRsZXJVdGlsID0gbmV3IFdGRUV2ZW50TGlzdEhhbmRsZXIoXHJcbiAgICAgICAgICAgIGNlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgIHJvdXRlcixcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIHN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgYXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGRpYWxvZyxcclxuICAgICAgICAgICAgc25hY2tCYXIsXHJcbiAgICAgICAgICAgIGh0dHApXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHZhbHVlIG9mIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Jhck1hcHBpbmdEYXRhW3ZhbHVlLnNwbGl0KCd8JylbMF0udHJpbSgpXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICBhcGlWYWx1ZTogdmFsdWUuc3BsaXQoJ3wnKVswXS50cmltKCksXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IHZhbHVlLnNwbGl0KCd8JylbMV0udHJpbSgpLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YWx1ZS5zcGxpdCgnfCcpWzJdLnRyaW0oKVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW1ldGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVmYXVsdF92YWx1ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hpbGRCbG9ja0lkcyA9IHBhcmFtZXRlci52YWx1ZS5zcGxpdCgnfCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmlnZ2VyQ29tcG9uZW50RXZlbnQoKSB7XHJcbiAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiB0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0KSB7XHJcbiAgICAgICAgICAgIGlmIChldmVudC5pc0RlZmF1bHQgJiYgZXZlbnQuZXZlbnRfbmFtZS50b0xvd2VyQ2FzZSgpID09PSAnb25jbGljaycpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlclV0aWwuc3dpdGNoRXZlbnREaXNwbGF5VHlwZShldmVudCwgdGhpcy5maWVsZERhdGEuZXZlbnRfbGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGFwcC1icmVhZGNydW1iLWNlbGwtcmVuZGVyZXIgW3N0ZXBJZF09XCJzdGVwSWRcIiBbdGVtcGxhdGVJZF09XCInYnJlYWRjcnVtYi1jZWxsJ1wiIFtibG9ja0lkXT1cImJsb2NrXCJcclxuXHQqbmdGb3I9XCJsZXQgYmxvY2sgb2YgY2hpbGRCbG9ja0lkczsgaW5kZXggYXMgaVwiIFtibG9ja1Bvc2l0aW9uXT1cImlcIiBbbWFwcGluZ1ZhbHVlc109XCJwcm9ncmVzc0Jhck1hcHBpbmdEYXRhXCJcclxuXHQoY2xpY2spPVwidHJpZ2dlckNvbXBvbmVudEV2ZW50KClcIj5cclxuPC9hcHAtYnJlYWRjcnVtYi1jZWxsLXJlbmRlcmVyPiJdfQ==