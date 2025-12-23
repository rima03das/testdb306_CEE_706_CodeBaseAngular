import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgIf, NgFor } from '@angular/common';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
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
import * as i10 from "../../directives/tooltip/tooltip.directive";
function CeeImageComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label");
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-form-label_", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeImageComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 11);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("col-form-label_", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeImageComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeImageComponent_div_0_ng_container_3_label_1_Template, 2, 4, "label", 9)(2, CeeImageComponent_div_0_ng_container_3_label_2_Template, 1, 4, "label", 10);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeImageComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 12);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeImageComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeImageComponent_div_0_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "figure");
    i0.ɵɵelement(2, "img", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const image_r2 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("src", image_r2, i0.ɵɵsanitizeUrl);
    i0.ɵɵpropertyInterpolate("alt", ctx_r0.fieldData.field_label);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
} }
function CeeImageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    i0.ɵɵtemplate(3, CeeImageComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 4)(4, CeeImageComponent_div_0_span_4_Template, 2, 0, "span", 5)(5, CeeImageComponent_div_0_button_5_Template, 2, 2, "button", 6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 7);
    i0.ɵɵtemplate(7, CeeImageComponent_div_0_ng_container_7_Template, 3, 6, "ng-container", 8);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.images);
} }
export class CeeImageComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    images = [];
    flatUnflat;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.flatUnflat = new FlatUnflat(appDataService);
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    concatData() { }
    onViewDataInit() {
        if (this.fieldData.field_style.field_assets !== undefined) {
            if (this.fieldData.field_style.field_assets.length > 0) {
                for (const fieldAsset of this.fieldData.field_style.field_assets) {
                    this.images.push(fieldAsset.path);
                }
            }
        }
        if (this.rowData) {
            this.images = [];
            if (this.rowData.hasOwnProperty('value')) {
                if (this.fieldData.possible_values.length > 0) {
                    for (const val of this.fieldData.possible_values) {
                        if (this.commonUtil.getPossibleId(val) == this.rowData.value) {
                            this.images.push(this.commonUtil.getPossibleValue(val));
                        }
                    }
                }
                else {
                    this.images.push(this.rowData.value);
                }
            }
        }
    }
    onSessionDataUpdated(apiKey, value) {
        // throw new Error('Method not implemented.');
    }
    onAPICallback(data) {
        data = this.flatUnflat.createNestedObject(data);
        if (localStorage.getItem('singleApiKey') === 'true') {
            this.images = [...this.images, ...this.returnImageData(this.fieldData.api_key, data)];
        }
        else {
            if (this.fieldData.response_api_key.includes('|')) {
                let multipleImages = [];
                for (const singleData of this.fieldData.response_api_key.split('||').map(str => str.trim())) {
                    multipleImages = [...multipleImages, ...this.returnImageData(singleData, data)];
                }
                this.images = [...this.images, ...multipleImages];
            }
            else {
                this.images = [...this.images, ...this.returnImageData(this.fieldData.response_api_key, data)];
            }
        }
    }
    onSetSessionData(apiKey, value) {
        // throw new Error('Method not implemented.');
    }
    returnImageData(apiKey, data) {
        const imageData = [];
        if (apiKey !== '') {
            if (apiKey.indexOf('[*]') >= 0) {
                const key = apiKey.split('[*]');
                const possibleIds = (this.checkForArray(this.checkForObject(data, key[0]), key[1]));
                for (const ids of possibleIds) {
                    if (this.fieldData.possible_values.length > 0) {
                        for (const possibleValues of this.fieldData.possible_values) {
                            if (this.commonUtil.getPossibleId(possibleValues) == ids) {
                                imageData.push(this.commonUtil.getPossibleValue(possibleValues));
                            }
                        }
                    }
                    else {
                        imageData.push(ids);
                    }
                }
            }
            else if (data[apiKey]) {
                if (this.fieldData.possible_values.length > 0) {
                    for (const val of this.fieldData.possible_values) {
                        if (this.commonUtil.getPossibleId(val) == data[apiKey]) {
                            imageData.push(this.commonUtil.getPossibleValue(val));
                        }
                    }
                }
                else {
                    imageData.push(data[apiKey]);
                }
            }
        }
        return imageData;
    }
    onEmptySession(getData) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(getData) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
    }
    static ɵfac = function CeeImageComponent_Factory(t) { return new (t || CeeImageComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeImageComponent, selectors: [["app-cee-image"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [4, "ngFor", "ngForOf"], [3, "class", 4, "ngIf"], [3, "class", "innerHTML", 4, "ngIf"], [3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", 3, "tooltip"], [3, "src", "alt"]], template: function CeeImageComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeImageComponent_div_0_Template, 8, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, NgIf, NgFor, TooltipModule, i10.TooltipDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeImageComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-image', standalone: true, imports: [MatTooltipModule, NgIf, NgFor, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t<label class=\"col-form-label_{{fieldData.unique_id}}\"\r\n\t\t\t\t\t*ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t<label class=\"col-form-label_{{fieldData.unique_id}}\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t</ng-container>\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip\" [tooltip]=\"fieldData.tooltip\"\r\n\t\t\t\t[attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t</div>\r\n\t\t<div class=\"form-field\">\r\n\t\t\t<ng-container *ngFor=\"let image of images\">\r\n\t\t\t\t<figure>\r\n\t\t\t\t\t<img class=\"img-fluid {{fieldData.unique_id}}\" src=\"{{image}}\" alt=\"{{fieldData.field_label}}\"\r\n\t\t\t\t\t\t[attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n\t\t\t\t\t\tclass=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t\t\t\t</figure>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeImageComponent, { className: "CeeImageComponent", filePath: "lib\\field-components\\cee-image\\cee-image.component.ts", lineNumber: 25 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWltYWdlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1pbWFnZS9jZWUtaW1hZ2UuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWltYWdlL2NlZS1pbWFnZS5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBMkIsTUFBTSxlQUFlLENBQUM7QUFDbEYsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBUzdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcxRCxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQzlDLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7OztJQ1hwRSw2QkFDd0M7SUFBQSxZQUF5QjtJQUFBLGlCQUFROzs7SUFEbEUsNEVBQThDO0lBQ2IsY0FBeUI7SUFBekIsa0RBQXlCOzs7SUFDakUsNEJBQzZDOzs7SUFEdEMsNEVBQThDO0lBQ3BELDJFQUFtQzs7O0lBSnJDLDZCQUFnRDtJQUcvQyxBQUZBLDJGQUN3QywrRUFFSDs7OztJQUZuQyxjQUFvQztJQUFwQyxtRUFBb0M7SUFDaUIsY0FBbUM7SUFBbkMsa0VBQW1DOzs7SUFHM0YsZ0NBQWlEO0lBQUMsa0JB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QzdCLDhDQUE4QztJQUNsRCxDQUFDO0lBRUQsNkJBQTZCLENBQUMsSUFBWTtJQUUxQyxDQUFDO0lBRUQsK0JBQStCLENBQUMsSUFBWTtJQUU1QyxDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBUztRQUN4Qiw4Q0FBOEM7SUFDbEQsQ0FBQztJQUVELGNBQWMsQ0FBQyxJQUFZO0lBRTNCLENBQUM7MkVBL0lRLGlCQUFpQjs2REFBakIsaUJBQWlCO1lDeEI5QixrRUFBNkM7O1lBQWpCLG9DQUFlOzRCRHNCN0IsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxhQUFhOztpRkFFN0MsaUJBQWlCO2NBUDdCLFNBQVM7MkJBQ0ksZUFBZSxjQUdiLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLElBQUksRUFBRSxLQUFLLEVBQUUsYUFBYSxDQUFDO2dUQUl0QyxNQUFNO2tCQUF0QixLQUFLO1lBQ1csU0FBUztrQkFBekIsS0FBSztZQUNHLGVBQWU7a0JBQXZCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLOztrRkFORyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgRmxhdFVuZmxhdCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZsYXQtdW5mbGF0LWpzb24nO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBOZ0lmLCBOZ0ZvciB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtaW1hZ2UnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1pbWFnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jZWUtaW1hZ2UuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTWF0VG9vbHRpcE1vZHVsZSwgTmdJZiwgTmdGb3IsIFRvb2x0aXBNb2R1bGVdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVJbWFnZUNvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgcHJpbWFyeUtleUluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuXHJcbiAgICBpbWFnZXMgPSBbXTtcclxuICAgIHByaXZhdGUgZmxhdFVuZmxhdDogRmxhdFVuZmxhdDtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50XHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcih1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSwgd2ZlU3RlcExvYWRlclNlcnZpY2UsIGRpYWxvZywgc25hY2tCYXIsIGh0dHApO1xyXG4gICAgICAgIHRoaXMuZmxhdFVuZmxhdCA9IG5ldyBGbGF0VW5mbGF0KGFwcERhdGFTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX2Fzc2V0cyAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9hc3NldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBmaWVsZEFzc2V0IG9mIHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmZpZWxkX2Fzc2V0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2goZmllbGRBc3NldC5wYXRoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gW107XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlSWQodmFsKSA9PSB0aGlzLnJvd0RhdGEudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2godGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlVmFsdWUodmFsKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzLnB1c2godGhpcy5yb3dEYXRhLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uU2Vzc2lvbkRhdGFVcGRhdGVkKGFwaUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG4gICAgb25BUElDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBkYXRhID0gdGhpcy5mbGF0VW5mbGF0LmNyZWF0ZU5lc3RlZE9iamVjdChkYXRhKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpbmdsZUFwaUtleScpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSBbLi4udGhpcy5pbWFnZXMsIC4uLnRoaXMucmV0dXJuSW1hZ2VEYXRhKHRoaXMuZmllbGREYXRhLmFwaV9rZXksIGRhdGEpXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXVsdGlwbGVJbWFnZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgc2luZ2xlRGF0YSBvZiB0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5LnNwbGl0KCd8fCcpLm1hcChzdHIgPT4gc3RyLnRyaW0oKSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBtdWx0aXBsZUltYWdlcyA9IFsuLi5tdWx0aXBsZUltYWdlcywgLi4udGhpcy5yZXR1cm5JbWFnZURhdGEoc2luZ2xlRGF0YSwgZGF0YSldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pbWFnZXMgPSBbLi4udGhpcy5pbWFnZXMsIC4uLm11bHRpcGxlSW1hZ2VzXTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW1hZ2VzID0gWy4uLnRoaXMuaW1hZ2VzLCAuLi50aGlzLnJldHVybkltYWdlRGF0YSh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5LCBkYXRhKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvblNldFNlc3Npb25EYXRhKGFwaUtleTogc3RyaW5nLCB2YWx1ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybkltYWdlRGF0YShhcGlLZXksIGRhdGEpIHtcclxuICAgICAgICBjb25zdCBpbWFnZURhdGEgPSBbXTtcclxuICAgICAgICBpZiAoYXBpS2V5ICE9PSAnJykge1xyXG4gICAgICAgICAgICBpZiAoYXBpS2V5LmluZGV4T2YoJ1sqXScpID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IGFwaUtleS5zcGxpdCgnWypdJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NzaWJsZUlkcyA9ICh0aGlzLmNoZWNrRm9yQXJyYXkodGhpcy5jaGVja0Zvck9iamVjdChkYXRhLCBrZXlbMF0pLCBrZXlbMV0pKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaWRzIG9mIHBvc3NpYmxlSWRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcG9zc2libGVWYWx1ZXMgb2YgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlSWQocG9zc2libGVWYWx1ZXMpID09IGlkcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5wdXNoKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZVZhbHVlKHBvc3NpYmxlVmFsdWVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEucHVzaChpZHMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIGlmIChkYXRhW2FwaUtleV0pIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlSWQodmFsKSA9PSBkYXRhW2FwaUtleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlRGF0YS5wdXNoKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZVZhbHVlKHZhbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZURhdGEucHVzaChkYXRhW2FwaUtleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gaW1hZ2VEYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGdldERhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldERhdGE6IGFueSkge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiICpuZ0lmPVwiaXNWaXNpYmxlXCI+XHJcblx0PGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuXHRcdDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZERhdGEuZmllbGRfbGFiZWwhPScnXCI+XHJcblx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxfe3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIlxyXG5cdFx0XHRcdFx0Km5nSWY9XCIhaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIj57e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19PC9sYWJlbD5cclxuXHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbF97e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiICpuZ0lmPVwiaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIlxyXG5cdFx0XHRcdFx0W2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PHNwYW4gKm5nSWY9XCJpc01hbmRhdG9yeVwiIGNsYXNzPVwibWFuZGV0b3J5LW1hcmtcIj4gKjwvc3Bhbj5cclxuXHRcdFx0PGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcFwiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCJcclxuXHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+aTwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxyXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpbWFnZSBvZiBpbWFnZXNcIj5cclxuXHRcdFx0XHQ8ZmlndXJlPlxyXG5cdFx0XHRcdFx0PGltZyBjbGFzcz1cImltZy1mbHVpZCB7e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiIHNyYz1cInt7aW1hZ2V9fVwiIGFsdD1cInt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX1cIlxyXG5cdFx0XHRcdFx0XHRbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6IGZpZWxkRGF0YS5maWVsZF9sYWJlbFwiXHJcblx0XHRcdFx0XHRcdGNsYXNzPVwie3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCI+XHJcblx0XHRcdFx0PC9maWd1cmU+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=