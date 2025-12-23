import { Component, Input, HostListener, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { CdkContextMenuTrigger, CdkMenuModule } from '@angular/cdk/menu';
import { CommonModule, NgStyle } from '@angular/common';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../services/shared-events-service.service";
import * as i3 from "../../services/internal-cee-emitter-service.service";
import * as i4 from "../../services/cee-api-service.service";
import * as i5 from "../../models/app-data/app-data.service";
import * as i6 from "../../models/api-data/api-data.service";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "@angular/router";
import * as i9 from "@angular/material/dialog";
import * as i10 from "@angular/material/snack-bar";
import * as i11 from "@angular/common/http";
import * as i12 from "@angular/cdk/menu";
import * as i13 from "@angular/common";
function CeeMenucontextComponent_div_0_ng_template_4_button_1_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 8);
    i0.ɵɵlistener("click", function CeeMenucontextComponent_div_0_ng_template_4_button_1_Template_button_click_0_listener() { const opt_r2 = i0.ɵɵrestoreView(_r1).$implicit; const ctx_r2 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r2.getUpdatedValue(ctx_r2.commonUtil.getID(opt_r2))); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r2 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(3);
    i0.ɵɵclassMapInterpolate1("menu_item_", ctx_r2.fieldData.unique_id, "");
    i0.ɵɵattribute("aria-label", "Menu Item: " + ctx_r2.commonUtil.getValue(opt_r2));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r2.commonUtil.getValue(opt_r2));
} }
function CeeMenucontextComponent_div_0_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 6);
    i0.ɵɵtemplate(1, CeeMenucontextComponent_div_0_ng_template_4_button_1_Template, 2, 5, "button", 7);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngStyle", ctx_r2.getStyle());
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r2.pickerValues);
} }
function CeeMenucontextComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵelement(3, "div", 5);
    i0.ɵɵtemplate(4, CeeMenucontextComponent_div_0_ng_template_4_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const inner_r4 = i0.ɵɵreference(5);
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r2.fieldData.unique_id);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("cdkContextMenuTriggerFor", inner_r4);
} }
export class CeeMenucontextComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    ceeApiService;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    router;
    dialog;
    snackBar;
    http;
    cdr;
    contextMenuTrigger;
    stepId;
    fieldData;
    keepState = false;
    primaryKeyIndex;
    rowData;
    rootData;
    pickerValues = [];
    wfeEventListHandler;
    positonData = [];
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, appDataService, apiDataService, wfeStepLoaderService, router, dialog, snackBar, http, cdr) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.ceeApiService = ceeApiService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.router = router;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.dependencyHandler('onLoad');
    }
    ngAfterViewInit() {
        this.cdr.detach();
    }
    onScroll() {
        this.contextMenuTrigger && this.contextMenuTrigger.close();
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.contextMenuTrigger && this.contextMenuTrigger.close();
        this.onViewUnload();
        this.variableObject['emitContextMenuOnEvent_' + this.appData.id].unsubscribe();
    }
    concatData() { }
    ngOnDestroy() {
        this.contextMenuTrigger && this.contextMenuTrigger.close();
        this.onViewUnload();
        this.variableObject['emitContextMenuOnEvent_' + this.appData.id].unsubscribe();
    }
    onViewDataInit() {
        this.pickerValues = this.fieldData.possible_values;
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                if (Array.isArray(this.rowData.value)) {
                    this.pickerValues = this.rowData.value;
                }
                else {
                    this.fieldValue = this.rowData.value;
                }
            }
        }
        const _this = this;
        this.variableObject['emitContextMenuOnEvent_' + this.appData.id] =
            this.sharedEventsService.contextMenuEmitter.subscribe(res => {
                if (res && res[0] && _this.fieldData.unique_id === res[0]) {
                    _this.contextMenuChange(res);
                }
            });
    }
    onAPICallback(data) {
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            if (Array.isArray(apiValue) && this.isSingleApiKey) {
                this.fieldData.possible_values = apiValue;
                this.pickerValues = this.fieldData.possible_values;
            }
            else {
                this.fieldValue = apiValue;
                this.updateFieldData(this.fieldValue);
            }
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        if (Array.isArray(externalApiOptionValue)) {
                            this.fieldData.possible_values = externalApiOptionValue;
                            this.pickerValues = this.fieldData.possible_values;
                        }
                        else {
                            console.error('Something Went Wrong in Menu !!!');
                        }
                    }
                }
            }
        }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    onEmptySession(get_data) {
        // let data = [];
        // let unique_id_value = [];
        // if (get_data.unique_ids.length > 0) {
        //     data = get_data.unique_ids;
        //     unique_id_value = [this.appData.id];
        // } else {
        //     data = get_data.apiKeys;
        //     if (this.isSingleApiKey) {
        //         unique_id_value = [this.fieldData.api_key];
        //     } else {
        //         unique_id_value = [...unique_id_value,
        //         ...this.apiKeyUtil.getMultipleApiKeys(
        //             this.apiKeyUtil.getConcatenatedApiKeys(
        //                 this.fieldData.response_api_key))];
        //         unique_id_value = [
        //             ...unique_id_value,
        //             ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key)];
        //     }
        // }
        // data.forEach(elm => {
        //     if (unique_id_value.includes(elm)) {
        //         // default value
        //         if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
        //             for (const paramter of this.fieldData.additional_parameters) {
        //                 if (paramter.parameter_type === 'default_value') {
        //                     this.fieldValue = this.commonUtil.getID(paramter.value);
        //                     break;
        //                 } else {
        //                     this.fieldValue = '';
        //                 }
        //             }
        //         } else {
        //             this.fieldValue = '';
        //         }
        //         this.updateFieldData(this.fieldValue);
        //         return;
        //     }
        // });
    }
    handleCustomFunction(get_data) {
        //console.log('get_data', typeof get_data === 'object');
        // let data = [];
        // let unique_id_value = '';
        // if (typeof get_data === 'object') {
        //     Object.keys(get_data).forEach((key, value) => {
        //         data.push(key);
        //     });
        //     unique_id_value = this.fieldData.unique_id;
        // }
        // if (data.includes(unique_id_value)) {
        //     this.fieldValue = get_data[unique_id_value];
        //     this.updateFieldData(this.fieldValue);
        // }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
        // this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
    }
    getUpdatedValue(value) {
        this.contextMenuTrigger && this.contextMenuTrigger.close();
        this.updateFieldData(this.commonUtil.getID(value));
        if (this.rowData) {
            this.appDataService.setAppData(Object.assign({}, this.appData, {
                value: this.commonUtil.getID(value)
            }));
        }
        const primaryData = this.setPrimaryKey(this.primaryKeyIndex);
        this.onComponentEvent('onClick', primaryData);
        this.onDirty();
    }
    contextMenuChange(data) {
        this.positonData = data;
        if (data[0].includes(this.fieldData.unique_id)) {
            if (data[1]) {
                this.openContextMenu({
                    x: data[1],
                    y: data[2]
                });
            }
            else {
                this.contextMenuTrigger && this.contextMenuTrigger.close();
            }
        }
    }
    getStyle() {
        if (this.positonData.length > 0) {
            return { 'position': 'absolute', 'top': this.positonData[2], 'left': this.positonData[1] };
        }
        else {
            return {};
        }
    }
    openContextMenu(event) {
        if (this.contextMenuTrigger) {
            if (this.wfeEventListHandler.detectOperatingSystem() == "Mac OS") {
                setTimeout(() => {
                    const eventx = new MouseEvent('mousemove', {
                        clientX: 30,
                        clientY: 0,
                        bubbles: true
                    });
                    this.contextMenuTrigger.open(eventx);
                }, 250);
            }
            else {
                this.contextMenuTrigger.open(event);
            }
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'additionalParameter[\'Aria-Label\']',
        //     'field_data.possible_values[*]': 'pickerValues'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
    }
    static ɵfac = function CeeMenucontextComponent_Factory(t) { return new (t || CeeMenucontextComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.CeeApiService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.Router), i0.ɵɵdirectiveInject(i9.MatDialog), i0.ɵɵdirectiveInject(i10.MatSnackBar), i0.ɵɵdirectiveInject(i11.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeMenucontextComponent, selectors: [["app-cee-menucontext"]], viewQuery: function CeeMenucontextComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(CdkContextMenuTrigger, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contextMenuTrigger = _t.first);
        } }, hostBindings: function CeeMenucontextComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function CeeMenucontextComponent_scroll_HostBindingHandler() { return ctx.onScroll(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", primaryKeyIndex: "primaryKeyIndex", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["inner", ""], ["class", "", 3, "id", 4, "ngIf"], [1, "", 3, "id"], [1, "form-group"], [1, "form-field"], [1, "example-context-area", 3, "cdkContextMenuTriggerFor"], ["cdkMenu", "", 1, "example-menu", 3, "ngStyle"], ["class", "example-menu-item", "cdkMenuItem", "", 3, "class", "click", 4, "ngFor", "ngForOf"], ["cdkMenuItem", "", 1, "example-menu-item", 3, "click"]], template: function CeeMenucontextComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeMenucontextComponent_div_0_Template, 6, 2, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [NgStyle, CdkMenuModule, i12.CdkMenu, i12.CdkMenuItem, i12.CdkContextMenuTrigger, CommonModule, i13.NgForOf, i13.NgIf], styles: [".example-context-area[_ngcontent-%COMP%]{display:none}.example-menu[_ngcontent-%COMP%]{display:inline-flex;flex-direction:column;min-width:180px;max-width:280px;background-color:#fff;padding:6px 0}.example-menu-item[_ngcontent-%COMP%]{background-color:transparent;cursor:pointer;border:none;-webkit-user-select:none;user-select:none;min-width:64px;line-height:36px;padding:0 16px;display:flex;align-items:center;flex-direction:row;flex:1}.example-menu-item[_ngcontent-%COMP%]:hover{background-color:#d0d0d0}.example-menu-item[_ngcontent-%COMP%]:active{background-color:#aaa}"], changeDetection: 0 });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeMenucontextComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-menucontext', changeDetection: ChangeDetectionStrategy.OnPush, standalone: true, imports: [NgStyle, CdkMenuModule, CommonModule], template: "<div class=\"\" id=\"{{ fieldData.unique_id }}\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-field\">\r\n\t\t\t\t<div class=\"example-context-area\" [cdkContextMenuTriggerFor]=\"inner\"></div>\r\n\t\t\t\t<ng-template #inner>\r\n\t\t\t\t<div class=\"example-menu\" [ngStyle]=\"getStyle()\"  cdkMenu>\r\n\t\t\t\t  <button class=\"example-menu-item\" cdkMenuItem class=\"menu_item_{{fieldData.unique_id}}\"  [attr.aria-label]=\"'Menu Item: ' + commonUtil.getValue(opt)\" *ngFor=\"let opt of pickerValues\" (click)=\"getUpdatedValue(commonUtil.getID(opt))\">{{commonUtil.getValue(opt)}}</button>\r\n\t\t\t\t</div>\r\n\t\t\t  </ng-template>\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n", styles: [".example-context-area{display:none}.example-menu{display:inline-flex;flex-direction:column;min-width:180px;max-width:280px;background-color:#fff;padding:6px 0}.example-menu-item{background-color:transparent;cursor:pointer;border:none;-webkit-user-select:none;user-select:none;min-width:64px;line-height:36px;padding:0 16px;display:flex;align-items:center;flex-direction:row;flex:1}.example-menu-item:hover{background-color:#d0d0d0}.example-menu-item:active{background-color:#aaa}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.CeeApiService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.Router }, { type: i9.MatDialog }, { type: i10.MatSnackBar }, { type: i11.HttpClient }, { type: i0.ChangeDetectorRef }], { contextMenuTrigger: [{
            type: ViewChild,
            args: [CdkContextMenuTrigger]
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], primaryKeyIndex: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], onScroll: [{
            type: HostListener,
            args: ['window:scroll']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeMenucontextComponent, { className: "CeeMenucontextComponent", filePath: "lib\\field-components\\cee-menucontext\\cee-menucontext.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLW1lbnVjb250ZXh0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1tZW51Y29udGV4dC9jZWUtbWVudWNvbnRleHQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLW1lbnVjb250ZXh0L2NlZS1tZW51Y29udGV4dC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBYSxZQUFZLEVBQUUsU0FBUyxFQUE4RCx1QkFBdUIsRUFBRyxNQUFNLGVBQWUsQ0FBQztBQVluTCxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFFN0MsT0FBTyxFQUFFLHFCQUFxQixFQUFFLGFBQWEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBRXpFLE9BQU8sRUFBRSxZQUFZLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDVmxELGlDQUF3TztJQUFqRCxvT0FBUyx1QkFBZ0IsK0JBQXFCLENBQUMsS0FBQztJQUFDLFlBQTRCO0lBQUEsaUJBQVM7Ozs7SUFBL04sdUVBQXlDOztJQUFpSixjQUE0QjtJQUE1Qix3REFBNEI7OztJQUR0USw4QkFBMEQ7SUFDeEQsa0dBQXdPO0lBQzFPLGlCQUFNOzs7SUFGb0IsMkNBQXNCO0lBQ3dILGNBQWU7SUFBZiw2Q0FBZTs7O0lBSnpMLEFBREQsQUFERCw4QkFBK0QsYUFDdEMsYUFDQztJQUN0Qix5QkFBMkU7SUFD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Q0FBQyxPQUFzQjtRQUM5Qiw0RkFBNEY7UUFDNUYsMkRBQTJEO1FBQzNELElBQUk7SUFDUixDQUFDO2lGQTVRUSx1QkFBdUI7NkRBQXZCLHVCQUF1QjsyQkFDckIscUJBQXFCOzs7OztZQUR2Qiw4RkFBQSxjQUFVLCtCQUFhOztZQzFCcEMsd0VBQStEOztZQUFqQixvQ0FBZTs0QkR3QmhELE9BQU8sRUFBRSxhQUFhLDJEQUFFLFlBQVk7O2lGQUVwQyx1QkFBdUI7Y0FSbkMsU0FBUzsyQkFDSSxxQkFBcUIsbUJBR2QsdUJBQXVCLENBQUMsTUFBTSxjQUNuQyxJQUFJLFdBQ1IsQ0FBQyxPQUFPLEVBQUUsYUFBYSxFQUFFLFlBQVksQ0FBQzttWUFHWixrQkFBa0I7a0JBQW5ELFNBQVM7bUJBQUMscUJBQXFCO1lBQ2YsTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7WUF5Q04sUUFBUTtrQkFEUCxZQUFZO21CQUFDLGVBQWU7O2tGQS9DcEIsdUJBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgVmlld0NoaWxkLCBPbkNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmLCBBZnRlclZpZXdJbml0LCBTaW1wbGVDaGFuZ2VzLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENlZUFwaVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtYXBpLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRNZW51VHJpZ2dlciBhcyBNYXRNZW51VHJpZ2dlciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL21lbnUnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tICcuLi9jZWUtYmFzZS1jbGFzcyc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZGtDb250ZXh0TWVudVRyaWdnZXIsIENka01lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jZGsvbWVudSc7XHJcbmltcG9ydCB7IFdGRUV2ZW50TGlzdEhhbmRsZXIgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtZXZlbnQtbGlzdC1oYW5kbGVyLXV0aWwnO1xyXG5pbXBvcnQgeyBDb21tb25Nb2R1bGUsIE5nU3R5bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtbWVudWNvbnRleHQnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1tZW51Y29udGV4dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jZWUtbWVudWNvbnRleHQuY29tcG9uZW50LnNjc3MnXSxcclxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6W05nU3R5bGUsIENka01lbnVNb2R1bGUsIENvbW1vbk1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZU1lbnVjb250ZXh0Q29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzLCBBZnRlclZpZXdJbml0IHtcclxuICAgIEBWaWV3Q2hpbGQoQ2RrQ29udGV4dE1lbnVUcmlnZ2VyKSBjb250ZXh0TWVudVRyaWdnZXI6IENka0NvbnRleHRNZW51VHJpZ2dlcjtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSBwcmltYXJ5S2V5SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIHBpY2tlclZhbHVlcyA9IFtdO1xyXG4gICAgZGVjbGFyZSB3ZmVFdmVudExpc3RIYW5kbGVyOiBXRkVFdmVudExpc3RIYW5kbGVyO1xyXG5cclxuICAgIHBvc2l0b25EYXRhID0gW107XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLFxyXG4gICAgICAgICAgICBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgICAgICB0aGlzLmRlcGVuZGVuY3lIYW5kbGVyKCdvbkxvYWQnKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0YWNoKCk7XHJcbiAgICB9XHJcblxyXG4gICAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcpXHJcbiAgICBvblNjcm9sbCgpIHtcclxuICAgICAgICB0aGlzLmNvbnRleHRNZW51VHJpZ2dlciAmJiB0aGlzLmNvbnRleHRNZW51VHJpZ2dlci5jbG9zZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcbiAgICBvbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudVRyaWdnZXIgJiYgdGhpcy5jb250ZXh0TWVudVRyaWdnZXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ2VtaXRDb250ZXh0TWVudU9uRXZlbnRfJyArIHRoaXMuYXBwRGF0YS5pZF0udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5jb250ZXh0TWVudVRyaWdnZXIgJiYgdGhpcy5jb250ZXh0TWVudVRyaWdnZXIuY2xvc2UoKTtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ2VtaXRDb250ZXh0TWVudU9uRXZlbnRfJyArIHRoaXMuYXBwRGF0YS5pZF0udW5zdWJzY3JpYmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcztcclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMucm93RGF0YS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBpY2tlclZhbHVlcyA9IHRoaXMucm93RGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5yb3dEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0Q29udGV4dE1lbnVPbkV2ZW50XycgKyB0aGlzLmFwcERhdGEuaWRdID1cclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmNvbnRleHRNZW51RW1pdHRlci5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMgJiYgcmVzWzBdICYmIF90aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQgPT09IHJlc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIF90aGlzLmNvbnRleHRNZW51Q2hhbmdlKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYXBpVmFsdWUgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBpZiAoYXBpVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXBpVmFsdWUpICYmIHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyA9IGFwaVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5waWNrZXJWYWx1ZXMgPSB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXM7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBhcGlWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZvciBtdWx0aXBsZSBhcGkga2V5cyB0aGUgdmFsdWUgdGhhdCBuZWVkcyB0byBiZSBzZXQgd2lsbCBjb21lXHJcbiAgICAgICAgLy8gZnJvbSBhZGRpdGlvbmFsUGFyYW1ldGVyIHdpdGggdHlwZSBleHRlcm5hbEFwaU9wdGlvblZhbHVlXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdleHRlcm5hbEFwaU9wdGlvblZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsQXBpT3B0aW9uVmFsdWUgPSB0aGlzLmdldEV4dGVybmFsQXBpT3B0aW9uVmFsdWUocGFyYW1ldGVyLnZhbHVlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShleHRlcm5hbEFwaU9wdGlvblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGlja2VyVmFsdWVzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gTWVudSAhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXR0aW5nIHRoZSBmaWVsZCBkYXRhIGJlbG93IGJlY2F1c2UgZ2V0IER5bmFtaWMgVXRpbCBpcyBjaGVja2luZyB0aGUgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy8gbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICAvLyBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgLy8gaWYgKGdldF9kYXRhLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIC8vICAgICBkYXRhID0gZ2V0X2RhdGEudW5pcXVlX2lkcztcclxuICAgICAgICAvLyAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuYXBwRGF0YS5pZF07XHJcbiAgICAgICAgLy8gfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgZGF0YSA9IGdldF9kYXRhLmFwaUtleXM7XHJcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgLy8gICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgIC8vICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICAvLyAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFtcclxuICAgICAgICAvLyAgICAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgLy8gICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgICAgICAvLyBkYXRhLmZvckVhY2goZWxtID0+IHtcclxuICAgICAgICAvLyAgICAgaWYgKHVuaXF1ZV9pZF92YWx1ZS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAvLyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5nZXRJRChwYXJhbXRlci52YWx1ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9ICcnO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSAnJztcclxuICAgICAgICAvLyAgICAgICAgIH1cclxuICAgICAgICAvLyAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgLy8gICAgICAgICByZXR1cm47XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDdXN0b21GdW5jdGlvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZygnZ2V0X2RhdGEnLCB0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKTtcclxuICAgICAgICAvLyBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIC8vIGxldCB1bmlxdWVfaWRfdmFsdWUgPSAnJztcclxuICAgICAgICAvLyBpZiAodHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIC8vICAgICBPYmplY3Qua2V5cyhnZXRfZGF0YSkuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZGF0YS5wdXNoKGtleSk7XHJcbiAgICAgICAgLy8gICAgIH0pO1xyXG4gICAgICAgIC8vICAgICB1bmlxdWVfaWRfdmFsdWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIC8vIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZV9pZF92YWx1ZSkpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy5maWVsZFZhbHVlID0gZ2V0X2RhdGFbdW5pcXVlX2lkX3ZhbHVlXTtcclxuICAgICAgICAvLyAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICAgICAgLy8gdGhpcy5zZXRNb2RhbG9yU2FuY2tCYXJNZXNzYWdlKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGdldFVwZGF0ZWRWYWx1ZSh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnVUcmlnZ2VyICYmIHRoaXMuY29udGV4dE1lbnVUcmlnZ2VyLmNsb3NlKCk7XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5jb21tb25VdGlsLmdldElEKHZhbHVlKSk7XHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnNldEFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcHBEYXRhLFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0aGlzLmNvbW1vblV0aWwuZ2V0SUQodmFsdWUpXHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHByaW1hcnlEYXRhID0gdGhpcy5zZXRQcmltYXJ5S2V5KHRoaXMucHJpbWFyeUtleUluZGV4KTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ29uQ2xpY2snLCBwcmltYXJ5RGF0YSk7XHJcbiAgICAgICAgdGhpcy5vbkRpcnR5KCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dE1lbnVDaGFuZ2UoZGF0YTogYW55W10pIHtcclxuICAgICAgICB0aGlzLnBvc2l0b25EYXRhID0gZGF0YTtcclxuICAgICAgICBpZiAoZGF0YVswXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWzFdKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9wZW5Db250ZXh0TWVudSh7XHJcbiAgICAgICAgICAgICAgICAgICAgeDogZGF0YVsxXSxcclxuICAgICAgICAgICAgICAgICAgICB5OiBkYXRhWzJdXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVUcmlnZ2VyICYmIHRoaXMuY29udGV4dE1lbnVUcmlnZ2VyLmNsb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0U3R5bGUoKTogYW55IHtcclxuICAgICAgICBpZiAodGhpcy5wb3NpdG9uRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7ICdwb3NpdGlvbic6ICdhYnNvbHV0ZScsICd0b3AnOiB0aGlzLnBvc2l0b25EYXRhWzJdLCAnbGVmdCc6IHRoaXMucG9zaXRvbkRhdGFbMV0gfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4ge307XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5Db250ZXh0TWVudShldmVudDogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuY29udGV4dE1lbnVUcmlnZ2VyKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5kZXRlY3RPcGVyYXRpbmdTeXN0ZW0oKSA9PSBcIk1hYyBPU1wiKXtcclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV2ZW50eCA9IG5ldyBNb3VzZUV2ZW50KCdtb3VzZW1vdmUnLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsaWVudFg6IDMwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGllbnRZOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidWJibGVzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb250ZXh0TWVudVRyaWdnZXIub3BlbihldmVudHgpO1xyXG4gICAgICAgICAgICAgICAgfSwyNTApXHJcbiAgICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29udGV4dE1lbnVUcmlnZ2VyLm9wZW4oZXZlbnQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMYW5ndWFnZShkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICAvLyBjb25zdCBjaGFuZ2VNYXAgPSB7XHJcbiAgICAgICAgLy8gICAgIGZpZWxkX2xhYmVsOiAnZmllbGREYXRhLmZpZWxkX2xhYmVsJyxcclxuICAgICAgICAvLyAgICAgcGxhY2Vob2xkZXJfdGV4dDogJ2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0JyxcclxuICAgICAgICAvLyAgICAgdG9vbHRpcDogJ2ZpZWxkRGF0YS50b29sdGlwJyxcclxuICAgICAgICAvLyAgICAgJ2FkZGl0aW9uYWxfcGFyYW1ldGVyc1sqXUFyaWEtTGFiZWwnOiAnYWRkaXRpb25hbFBhcmFtZXRlcltcXCdBcmlhLUxhYmVsXFwnXScsXHJcbiAgICAgICAgLy8gICAgICdmaWVsZF9kYXRhLnBvc3NpYmxlX3ZhbHVlc1sqXSc6ICdwaWNrZXJWYWx1ZXMnXHJcbiAgICAgICAgLy8gfTtcclxuICAgICAgICAvLyBmb3IgKGNvbnN0IHZhbHVlIG9mIE9iamVjdC5rZXlzKGNoYW5nZU1hcCkpIHtcclxuICAgICAgICAvLyAgICAgY29uc3QgbGFuZ1ZhbCA9IHRoaXMuc3dpdGNoTGFuZyh2YWx1ZSwgZGF0YSwgY2hhbmdlTWFwKTtcclxuICAgICAgICAvLyAgICAgaWYgKGxhbmdWYWwpIHtcclxuICAgICAgICAvLyAgICAgICAgIHRoaXNbbGFuZ1ZhbC5rZXldID0gbGFuZ1ZhbC52YWw7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlSGlzdG9yeShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gaWYgKGNoYW5nZXMuZmllbGREYXRhICYmIGNoYW5nZXMucm9vdERhdGEgJiYgY2hhbmdlcy5yb290RGF0YS5jdXJyZW50VmFsdWUubGFuZ0NoYW5nZWQpIHtcclxuICAgICAgICAvLyAgICAgdGhpcy50b2dnbGVMYW5ndWFnZShjaGFuZ2VzLmZpZWxkRGF0YS5jdXJyZW50VmFsdWUpO1xyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiXCIgaWQ9XCJ7eyBmaWVsZERhdGEudW5pcXVlX2lkIH19XCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXhhbXBsZS1jb250ZXh0LWFyZWFcIiBbY2RrQ29udGV4dE1lbnVUcmlnZ2VyRm9yXT1cImlubmVyXCI+PC9kaXY+XHJcblx0XHRcdFx0PG5nLXRlbXBsYXRlICNpbm5lcj5cclxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwiZXhhbXBsZS1tZW51XCIgW25nU3R5bGVdPVwiZ2V0U3R5bGUoKVwiICBjZGtNZW51PlxyXG5cdFx0XHRcdCAgPGJ1dHRvbiBjbGFzcz1cImV4YW1wbGUtbWVudS1pdGVtXCIgY2RrTWVudUl0ZW0gY2xhc3M9XCJtZW51X2l0ZW1fe3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIiAgW2F0dHIuYXJpYS1sYWJlbF09XCInTWVudSBJdGVtOiAnICsgY29tbW9uVXRpbC5nZXRWYWx1ZShvcHQpXCIgKm5nRm9yPVwibGV0IG9wdCBvZiBwaWNrZXJWYWx1ZXNcIiAoY2xpY2spPVwiZ2V0VXBkYXRlZFZhbHVlKGNvbW1vblV0aWwuZ2V0SUQob3B0KSlcIj57e2NvbW1vblV0aWwuZ2V0VmFsdWUob3B0KX19PC9idXR0b24+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdCAgPC9uZy10ZW1wbGF0ZT5cclxuXHRcdDwvZGl2PlxyXG5cdDwvZGl2PlxyXG48L2Rpdj5cclxuIl19