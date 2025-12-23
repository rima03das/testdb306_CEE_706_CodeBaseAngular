import { Component, Input, ViewChild } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { WfeEncryptionUtil } from '../../utils/wfe-encryption-util';
import { CommonUtil } from '../../utils/common-util';
import { CommonModule } from '@angular/common';
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
import * as i10 from "../../services/cee-api-service.service";
import * as i11 from "@angular/router";
import * as i12 from "@angular/common";
const _c0 = ["recaptcha"];
function CeeCaptchaComponent_div_0_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeCaptchaComponent_div_0_label_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeCaptchaComponent_div_0_span_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 10);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeCaptchaComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtemplate(3, CeeCaptchaComponent_div_0_label_3_Template, 2, 1, "label", 5)(4, CeeCaptchaComponent_div_0_label_4_Template, 1, 1, "label", 6)(5, CeeCaptchaComponent_div_0_span_5_Template, 2, 0, "span", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelement(6, "div", null, 0);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
export class CeeCaptchaComponent extends BaseView {
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
    // @ViewChild('txtVal', {static: false}) txtVal: ElementRef
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    recaptchaElement;
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = '';
    buttonLabel = '';
    searchButtonEditable = true;
    isSearch = false;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
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
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        if (this.additionalParameter['provider'] && this.additionalParameter['provider'] == "Google") {
            this.addRecaptchaScript();
        }
    }
    renderReCaptch() {
        let google_sitekey = localStorage.getItem('google_sitekey');
        window['grecaptcha'].render(this.recaptchaElement.nativeElement, {
            'sitekey': google_sitekey,
            'callback': (response) => {
                // console.log(response);
                // this.inputValue = response;
                this.updateFieldData(this.wfeEncryption.getEncryptedData(this.additionalParameter['EncryptionType'], response));
                this.onComponentEvent('OnClick');
                this.onDirty();
            }
        });
    }
    addRecaptchaScript() {
        window['grecaptchaCallback'] = () => {
            this.renderReCaptch();
        };
        (function (d, s, id, obj) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "https://www.google.com/recaptcha/api.js?onload=grecaptchaCallback&amp;render=explicit";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'recaptcha-jssdk', this));
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    ngOnDestroy() {
        // Clear utility object references
        this.wfeEncryption = null;
        this.sessionKeyUtil = null;
        this.commonUtil = null;
        // Clear component-specific properties
        this.inputValue = '';
        this.buttonLabel = '';
        this.validationRegex = '';
        // Clear ViewChild reference
        this.recaptchaElement = null;
        // Clear input properties
        this.primaryKeyIndex = null;
        this.mandatoryCondition = null;
        this.editableCondition = null;
        this.visibleCondition = null;
        this.onViewUnload();
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        // console.log(apiData);
        if (apiData !== null) {
            if (!Array.isArray(apiData)) {
                this.inputValue = apiData;
                this.updateFieldData(this.inputValue);
            }
        }
    }
    setFieldValueOnSetValuesEvent() {
    }
    setFieldStateOnStateChangeEvent() {
    }
    onViewDataInit() {
    }
    concatData = (res) => {
    };
    handleCustomFunction(get_data) {
    }
    onEmptySession(get_data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    static ɵfac = function CeeCaptchaComponent_Factory(t) { return new (t || CeeCaptchaComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeCaptchaComponent, selectors: [["app-cee-captcha"]], viewQuery: function CeeCaptchaComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.recaptchaElement = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["recaptcha", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"]], template: function CeeCaptchaComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeCaptchaComponent_div_0_Template, 8, 3, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [CommonModule, i12.NgIf] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeCaptchaComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-captcha', standalone: true, imports: [CommonModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n\t\t\t\t[innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t</div>\r\n\t\t<div #recaptcha></div>\r\n\t\t<!-- <re-captcha [(ngModel)]=\"inputValue\" name=\"captcha\" required></re-captcha> -->\r\n\t</div>\r\n</div>\r\n" }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.CeeApiService }, { type: i11.Router }], { stepId: [{
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
        }], recaptchaElement: [{
            type: ViewChild,
            args: ['recaptcha']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeCaptchaComponent, { className: "CeeCaptchaComponent", filePath: "lib\\field-components\\cee-captcha\\cee-captcha.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWNhcHRjaGEuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWNhcHRjaGEvY2VlLWNhcHRjaGEuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWNhcHRjaGEvY2VlLWNhcHRjaGEuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXVDLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF6RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFDN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQzlELE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGlDQUFpQyxDQUFDO0FBSXBFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUdyRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNkNUMsZ0NBQXFFO0lBQUEsWUFBeUI7SUFBQSxpQkFBUTs7O0lBQWpDLGNBQXlCO0lBQXpCLGtEQUF5Qjs7O0lBQzlGLDJCQUM2Qzs7O0lBQTVDLDJFQUFtQzs7O0lBQ3BDLGdDQUFpRDtJQUFDLGtCQUFDO0lBQUEsaUJBQU87OztJQUozRCxBQURELEFBREQsOEJBQTZDLGFBQ3BCLGFBQ0M7SUFJdkIsQUFGQSxBQURBLDhFQUFxRSxpRUFFaEMsK0RBQ1k7SUFDbEQsaUJBQU07SUFDTiwrQkFBc0I7SUFHeEIsQUFEQyxpQkFBTSxFQUNEOzs7SUFSNEIsZUFBb0M7SUFBcEMsbUVBQW9DO0lBQ3BDLGNBQW1DO0lBQW5DLGtFQUFtQztJQUUzRCxjQUFpQjtJQUFqQix5Q0FBaUI7O0FEb0IzQixNQUFNLE9BQU8sbUJBQW9CLFNBQVEsUUFBUTtJQW9CbEM7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQTdCWCwyREFBMkQ7SUFDMUMsTUFBTSxDQUFNO0lBQ1osU0FBUyxDQUFNO0lBQ3ZCLGVBQWUsQ0FBTTtJQUNyQixTQUFTLEdBQUcsS0FBSyxDQUFDO0lBQ2xCLE9BQU8sQ0FBTTtJQUNiLGtCQUFrQixDQUFNO0lBQ3hCLGlCQUFpQixDQUFNO0lBQ3ZCLGdCQUFnQixDQUFNO0lBQ1AsZ0JBQWdCLENBQWE7SUFDckQsYUFBYSxDQUFvQjtJQUN6QixjQUFjLENBQWlCO0lBQ3ZDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDckIsVUFBVSxHQUFHLEVBQUUsQ0FBQztJQUNoQixXQUFXLEdBQUcsRUFBRSxDQUFDO0lBQ2pCLG9CQUFvQixHQUFHLElBQUksQ0FBQztJQUM1QixRQUFRLEdBQUcsS0FBSyxDQUFDO0lBRWpCLFlBQ1csc0JBQThDLEVBQzlDLG1CQUErQyxFQUMvQyxrQkFBNkMsRUFDN0MsY0FBOEIsRUFDOUIsY0FBOEIsRUFDOUIsb0JBQTBDLEVBQzFDLE1BQWlCLEVBQ2pCLFFBQXFCLEVBQ3JCLElBQWdCLEVBQ2hCLGFBQTRCLEVBQzVCLE1BQWM7UUFFckIsS0FBSyxDQUNELHNCQUFzQixFQUN0QixtQkFBbUIsRUFDbkIsa0JBQWtCLEVBQ2xCLGNBQWMsRUFDZCxjQUFjLEVBQ2Qsb0JBQW9CLEVBQ3BCLE1BQU0sRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztRQW5CNUMsMkJBQXNCLEdBQXRCLHNCQUFzQixDQUF3QjtRQUM5Qyx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQTRCO1FBQy9DLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBMkI7UUFDN0MsbUJBQWMsR0FBZCxjQUFjLENBQWdCO1FBQzlCLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5Qix5QkFBb0IsR0FBcEIsb0JBQW9CLENBQXNCO1FBQzFDLFdBQU0sR0FBTixNQUFNLENBQVc7UUFDakIsYUFBUSxHQUFSLFFBQVEsQ0FBYTtRQUNyQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2hCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBQzVCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFVckIsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLGlCQUFpQixFQUFFLENBQUM7UUFDN0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLGNBQWMsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztJQUN2QyxDQUFDO0lBRUQsUUFBUTtRQUNKLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JFLElBQUksSUFBSSxDQUFDLG1CQUFtQixDQUFDLFVBQVUsQ0FBQyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxVQUFVLENBQUMsSUFBSSxRQUFRLEVBQUU7WUFDMUYsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7U0FDN0I7SUFDTCxDQUFDO0lBQ0QsY0FBYztRQUNWLElBQUksY0FBYyxHQUFHLFlBQVksQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsQ0FBQTtRQUMzRCxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLEVBQUU7WUFDN0QsU0FBUyxFQUFFLGNBQWM7WUFDekIsVUFBVSxFQUFFLENBQUMsUUFBUSxFQUFFLEVBQUU7Z0JBQ3JCLHlCQUF5QjtnQkFDekIsOEJBQThCO2dCQUM5QixJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQztnQkFDaEgsSUFBSSxDQUFDLGdCQUFnQixDQUFDLFNBQVMsQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDbkIsQ0FBQztTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxrQkFBa0I7UUFFZCxNQUFNLENBQUMsb0JBQW9CLENBQUMsR0FBRyxHQUFHLEVBQUU7WUFDaEMsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQTtRQUNELENBQUMsVUFBVSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHO1lBQ3BCLElBQUksRUFBRSxFQUFFLEdBQUcsR0FBRyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0MsSUFBSSxDQUFDLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUFFLE9BQU87YUFBRTtZQUNyQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUFDLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLEVBQUUsQ0FBQyxHQUFHLEdBQUcsdUZBQXVGLENBQUM7WUFDakcsR0FBRyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsRUFBRSxFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLGlCQUFpQixFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUNELHNDQUFzQztJQUN0QyxTQUFTO1FBQ0wsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxXQUFXO1FBRVAsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1FBQzNCLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXZCLHNDQUFzQztRQUN0QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxHQUFHLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsZUFBZSxHQUFHLEVBQUUsQ0FBQztRQUUxQiw0QkFBNEI7UUFDNUIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztRQUU3Qix5QkFBeUI7UUFHekIsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFFNUIsSUFBSSxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQztRQUMvQixJQUFJLENBQUMsaUJBQWlCLEdBQUcsSUFBSSxDQUFDO1FBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLENBQUM7UUFDN0IsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRCxhQUFhLENBQUMsSUFBUztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNoRixNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsc0JBQXNCLENBQUMsa0JBQWtCLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRix3QkFBd0I7UUFDeEIsSUFBSSxPQUFPLEtBQUssSUFBSSxFQUFFO1lBQ2xCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO2dCQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztnQkFDMUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDekM7U0FDSjtJQUNMLENBQUM7SUFDRCw2QkFBNkI7SUFFN0IsQ0FBQztJQUNELCtCQUErQjtJQUUvQixDQUFDO0lBQ0QsY0FBYztJQUVkLENBQUM7SUFDRCxVQUFVLEdBQUcsQ0FBQyxHQUFHLEVBQUUsRUFBRTtJQUVyQixDQUFDLENBQUE7SUFFRCxvQkFBb0IsQ0FBQyxRQUFhO0lBRWxDLENBQUM7SUFDRCxjQUFjLENBQUMsUUFBYTtJQUU1QixDQUFDO0lBRUQsY0FBYyxDQUFDLElBQVk7SUFFM0IsQ0FBQztJQUVELGtCQUFrQixDQUFDLElBQVM7UUFDeEIsOENBQThDO0lBQ2xELENBQUM7NkVBbEpRLG1CQUFtQjs2REFBbkIsbUJBQW1COzs7Ozs7WUMxQmhDLG9FQUE2Qzs7WUFBakIsb0NBQWU7NEJEd0I3QixZQUFZOztpRkFFYixtQkFBbUI7Y0FQL0IsU0FBUzsyQkFDSSxpQkFBaUIsY0FHZixJQUFJLFdBQ1AsQ0FBQyxZQUFZLENBQUM7bVdBSU4sTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxlQUFlO2tCQUF2QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNrQixnQkFBZ0I7a0JBQXZDLFNBQVM7bUJBQUMsV0FBVzs7a0ZBVmIsbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgU2Vzc2lvbktleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLWtleS11dGlsJztcclxuaW1wb3J0IHsgV2ZlRW5jcnlwdGlvblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtZW5jcnlwdGlvbi11dGlsJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS1jYXB0Y2hhJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtY2FwdGNoYS5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jZWUtY2FwdGNoYS5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtDb21tb25Nb2R1bGVdLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlQ2FwdGNoYUNvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG4gICAgLy8gQFZpZXdDaGlsZCgndHh0VmFsJywge3N0YXRpYzogZmFsc2V9KSB0eHRWYWw6IEVsZW1lbnRSZWZcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgcHJpbWFyeUtleUluZGV4OiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIG1hbmRhdG9yeUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZWRpdGFibGVDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHZpc2libGVDb25kaXRpb246IGFueTtcclxuICAgIEBWaWV3Q2hpbGQoJ3JlY2FwdGNoYScpIHJlY2FwdGNoYUVsZW1lbnQ6IEVsZW1lbnRSZWY7XHJcbiAgICB3ZmVFbmNyeXB0aW9uOiBXZmVFbmNyeXB0aW9uVXRpbDtcclxuICAgIGRlY2xhcmUgc2Vzc2lvbktleVV0aWw6IFNlc3Npb25LZXlVdGlsO1xyXG4gICAgdmFsaWRhdGlvblJlZ2V4ID0gJyc7XHJcbiAgICBpbnB1dFZhbHVlID0gJyc7XHJcbiAgICBidXR0b25MYWJlbCA9ICcnO1xyXG4gICAgc2VhcmNoQnV0dG9uRWRpdGFibGUgPSB0cnVlO1xyXG4gICAgaXNTZWFyY2ggPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXJcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKFxyXG4gICAgICAgICAgICB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBhcGlEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgd2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIGRpYWxvZywgc25hY2tCYXIsIGh0dHAsIGNlZUFwaVNlcnZpY2UsIHJvdXRlcik7XHJcbiAgICAgICAgdGhpcy53ZmVFbmNyeXB0aW9uID0gbmV3IFdmZUVuY3J5cHRpb25VdGlsKCk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uS2V5VXRpbCA9IG5ldyBTZXNzaW9uS2V5VXRpbCgpO1xyXG4gICAgICAgIHRoaXMuY29tbW9uVXRpbCA9IG5ldyBDb21tb25VdGlsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuc3RlcElkLCB0aGlzLmZpZWxkRGF0YSwgdGhpcy5rZWVwU3RhdGUsIHRoaXMucm93RGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsncHJvdmlkZXInXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3Byb3ZpZGVyJ10gPT0gXCJHb29nbGVcIikge1xyXG4gICAgICAgICAgICB0aGlzLmFkZFJlY2FwdGNoYVNjcmlwdCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJlbmRlclJlQ2FwdGNoKCkge1xyXG4gICAgICAgIGxldCBnb29nbGVfc2l0ZWtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdnb29nbGVfc2l0ZWtleScpXHJcbiAgICAgICAgd2luZG93WydncmVjYXB0Y2hhJ10ucmVuZGVyKHRoaXMucmVjYXB0Y2hhRWxlbWVudC5uYXRpdmVFbGVtZW50LCB7XHJcbiAgICAgICAgICAgICdzaXRla2V5JzogZ29vZ2xlX3NpdGVrZXksXHJcbiAgICAgICAgICAgICdjYWxsYmFjayc6IChyZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy5pbnB1dFZhbHVlID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLndmZUVuY3J5cHRpb24uZ2V0RW5jcnlwdGVkRGF0YSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0VuY3J5cHRpb25UeXBlJ10sIHJlc3BvbnNlKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EaXJ0eSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkUmVjYXB0Y2hhU2NyaXB0KCkge1xyXG5cclxuICAgICAgICB3aW5kb3dbJ2dyZWNhcHRjaGFDYWxsYmFjayddID0gKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlclJlQ2FwdGNoKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIChmdW5jdGlvbiAoZCwgcywgaWQsIG9iaikge1xyXG4gICAgICAgICAgICB2YXIganMsIGZqcyA9IGQuZ2V0RWxlbWVudHNCeVRhZ05hbWUocylbMF07XHJcbiAgICAgICAgICAgIGlmIChkLmdldEVsZW1lbnRCeUlkKGlkKSkgeyByZXR1cm47IH1cclxuICAgICAgICAgICAganMgPSBkLmNyZWF0ZUVsZW1lbnQocyk7IGpzLmlkID0gaWQ7XHJcbiAgICAgICAgICAgIGpzLnNyYyA9IFwiaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP29ubG9hZD1ncmVjYXB0Y2hhQ2FsbGJhY2smYW1wO3JlbmRlcj1leHBsaWNpdFwiO1xyXG4gICAgICAgICAgICBmanMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoanMsIGZqcyk7XHJcbiAgICAgICAgfShkb2N1bWVudCwgJ3NjcmlwdCcsICdyZWNhcHRjaGEtanNzZGsnLCB0aGlzKSk7XHJcbiAgICB9XHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYXIgdXRpbGl0eSBvYmplY3QgcmVmZXJlbmNlc1xyXG4gICAgICAgIHRoaXMud2ZlRW5jcnlwdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uS2V5VXRpbCA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbnVsbDtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDbGVhciBjb21wb25lbnQtc3BlY2lmaWMgcHJvcGVydGllc1xyXG4gICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTGFiZWwgPSAnJztcclxuICAgICAgICB0aGlzLnZhbGlkYXRpb25SZWdleCA9ICcnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsZWFyIFZpZXdDaGlsZCByZWZlcmVuY2VcclxuICAgICAgICB0aGlzLnJlY2FwdGNoYUVsZW1lbnQgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsZWFyIGlucHV0IHByb3BlcnRpZXNcclxuXHJcblxyXG4gICAgICAgIHRoaXMucHJpbWFyeUtleUluZGV4ID0gbnVsbDtcclxuXHJcbiAgICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVDb25kaXRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUNvbmRpdGlvbiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgY29uc3QgYXBpRGF0YSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGFwaURhdGEpO1xyXG4gICAgICAgIGlmIChhcGlEYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShhcGlEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gYXBpRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudCgpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG5cclxuICAgIH1cclxuICAgIGNvbmNhdERhdGEgPSAocmVzKSA9PiB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuXHJcbiAgICB9XHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG5cdDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0XHQ8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiICpuZ0lmPVwiIWlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCI+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fTwvbGFiZWw+XHJcblx0XHRcdDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCJpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiXHJcblx0XHRcdFx0W2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG5cdFx0XHQ8c3BhbiAqbmdJZj1cImlzTWFuZGF0b3J5XCIgY2xhc3M9XCJtYW5kZXRvcnktbWFya1wiPiAqPC9zcGFuPlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2ICNyZWNhcHRjaGE+PC9kaXY+XHJcblx0XHQ8IS0tIDxyZS1jYXB0Y2hhIFsobmdNb2RlbCldPVwiaW5wdXRWYWx1ZVwiIG5hbWU9XCJjYXB0Y2hhXCIgcmVxdWlyZWQ+PC9yZS1jYXB0Y2hhPiAtLT5cclxuXHQ8L2Rpdj5cclxuPC9kaXY+XHJcbiJdfQ==