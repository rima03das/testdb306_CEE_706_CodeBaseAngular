import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { UndoRedo } from '../../utils/undo-redo.util';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { BarRatingModule } from 'ngx-bar-rating';
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
import * as i10 from "@angular/router";
import * as i11 from "../../services/cee-api-service.service";
import * as i12 from "ngx-bar-rating";
import * as i13 from "@angular/common";
function CeeStarComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeStarComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeStarComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeStarComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 6)(2, CeeStarComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeStarComponent_div_0_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bar-rating", 10);
    i0.ɵɵtwoWayListener("rateChange", function CeeStarComponent_div_0_ng_container_5_ng_container_1_Template_bar_rating_rateChange_1_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("rateChange", function CeeStarComponent_div_0_ng_container_5_ng_container_1_Template_bar_rating_rateChange_1_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.submitRating()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("rate", ctx_r0.inputValue);
    i0.ɵɵproperty("max", ctx_r0.numStars);
} }
function CeeStarComponent_div_0_ng_container_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "bar-rating", 11);
    i0.ɵɵtwoWayListener("rateChange", function CeeStarComponent_div_0_ng_container_5_ng_container_2_Template_bar_rating_rateChange_1_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.totalRate, $event) || (ctx_r0.totalRate = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("rateChange", function CeeStarComponent_div_0_ng_container_5_ng_container_2_Template_bar_rating_rateChange_1_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.submitRating()); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(2, "span", 12);
    i0.ɵɵtext(3);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4, "\u00A0\u00A0 ");
    i0.ɵɵelementStart(5, "span", 12);
    i0.ɵɵtext(6);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("rate", ctx_r0.totalRate);
    i0.ɵɵproperty("max", ctx_r0.numStars);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate2("", ctx_r0.totalRate, "/", ctx_r0.numStars, "");
    i0.ɵɵadvance(3);
    i0.ɵɵtextInterpolate1("", ctx_r0.totalRating, " Rating");
} }
function CeeStarComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeStarComponent_div_0_ng_container_5_ng_container_1_Template, 2, 2, "ng-container", 4)(2, CeeStarComponent_div_0_ng_container_5_ng_container_2_Template, 7, 5, "ng-container", 4);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.totalRate);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.totalRate);
} }
function CeeStarComponent_div_0_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0)(1);
    i0.ɵɵelementStart(2, "button", 13);
    i0.ɵɵlistener("click", function CeeStarComponent_div_0_ng_container_6_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.increment()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(3, "svg", 14);
    i0.ɵɵelement(4, "path", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(5, " Like | ");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(6, "span", 16);
    i0.ɵɵtext(7);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementStart(8, "button", 13);
    i0.ɵɵlistener("click", function CeeStarComponent_div_0_ng_container_6_Template_button_click_8_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.decrement()); });
    i0.ɵɵnamespaceSVG();
    i0.ɵɵelementStart(9, "svg", 17);
    i0.ɵɵelement(10, "path", 18);
    i0.ɵɵelementEnd();
    i0.ɵɵtext(11, " Dislike | ");
    i0.ɵɵnamespaceHTML();
    i0.ɵɵelementStart(12, "span", 19);
    i0.ɵɵtext(13);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMap(ctx_r0.likeS);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.TotalnumberofLikes);
    i0.ɵɵadvance();
    i0.ɵɵclassMap(ctx_r0.dislikeS);
    i0.ɵɵadvance(5);
    i0.ɵɵtextInterpolate(ctx_r0.TotalnumberofDisLikes);
} }
function CeeStarComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    i0.ɵɵtemplate(3, CeeStarComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 4);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "div", 5);
    i0.ɵɵtemplate(5, CeeStarComponent_div_0_ng_container_5_Template, 3, 2, "ng-container", 4)(6, CeeStarComponent_div_0_ng_container_6_Template, 14, 6, "ng-container", 4);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.starRatingshow);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.starRatingshow);
} }
export class CeeStarComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    router;
    ceeApiService;
    stepId;
    fieldData;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    TotalnumberofLikes;
    TotalnumberofDisLikes;
    flag = 0;
    dislikeS = "dislike-button";
    likeS = "like-button";
    inputValue = 5;
    undoRedoUtil;
    numStars = 5;
    starRatingshow = true;
    totalRating;
    totalRate;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, router, ceeApiService) {
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
        this.router = router;
        this.ceeApiService = ceeApiService;
        this.undoRedoUtil = new UndoRedo();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    ngOnDestroy() {
        this.onViewUnload();
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
    }
    increment() {
        this.likeS = "like-button liked";
        this.dislikeS = "dislike-button";
        if (this.flag == 0) {
            this.TotalnumberofLikes++;
            this.flag = 1;
        }
        else if (this.flag == 1) {
            this.TotalnumberofLikes--;
            this.likeS = "like-button";
            this.flag = 0;
        }
        else if (this.flag == 2) {
            this.TotalnumberofLikes++;
            this.TotalnumberofDisLikes--;
            this.flag = 1;
        }
        this.updateFieldData(1);
        this.onComponentEvent('onStarRatingClicked');
    }
    decrement() {
        this.dislikeS = "dislike-button disliked";
        this.likeS = "like-button";
        if (this.flag == 0) {
            this.TotalnumberofDisLikes++;
            this.flag = 2;
        }
        else if (this.flag == 2) {
            this.TotalnumberofDisLikes--;
            this.flag = 0;
            this.dislikeS = "dislike-button";
        }
        else if (this.flag == 1) {
            this.TotalnumberofDisLikes++;
            this.TotalnumberofLikes--;
            this.flag = 2;
        }
        this.updateFieldData(0);
        this.onComponentEvent('onStarRatingClicked');
    }
    onViewDataInit() {
        if (this.additionalParameter["CEE_like_dislike"] == "true") {
            this.starRatingshow = false;
        }
        if (this.additionalParameter["CEE_star_number"]) {
            this.numStars = this.additionalParameter["CEE_star_number"];
        }
        if (this.additionalParameter["default_value"]) {
            this.inputValue = this.additionalParameter["default_value"];
        }
        if (this.additionalParameter['externalApiOptionValue']) {
            let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameter['externalApiOptionValue']));
            const valueApikeys = this.additionalParameter['externalApiOptionValue'].split('||').map(str => str.trim());
            if (this.additionalParameter["CEE_like_dislike"] == "true") {
                this.TotalnumberofLikes = data.value[valueApikeys[0]];
                this.TotalnumberofDisLikes = data.value[valueApikeys[1]];
            }
            if (this.additionalParameter["CEE_like_dislike"] == "false") {
                this.totalRate = data && data.value[valueApikeys[0]];
                this.totalRating = data && data.value[valueApikeys[1]];
            }
        }
    }
    submitRating() {
        this.updateFieldData(this.inputValue);
        this.onComponentEvent('onStarRatingClicked');
    }
    onAPICallback(data) {
        // throw new Error('Method not implemented.');
        if (!this.rowData) {
            const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (apiValue !== null) {
                if (Array.isArray(apiValue) && this.isSingleApiKey) {
                    this.fieldData.possible_values = apiValue;
                    this.inputValue = this.fieldData.possible_values;
                }
                else {
                    this.fieldValue = apiValue;
                    this.inputValue = this.fieldValue;
                    this.updateFieldData(this.fieldValue);
                    this.undoRedoUtil.push(this.appData.id, this.fieldValue);
                }
            }
        }
        // for multiple api keys the value that needs to be set will come
        // from additionalParameter with type externalApiOptionValue
        // if(this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
        //     for (const parameter of this.fieldData.additional_parameters) {
        //         if (parameter.parameter_type === 'externalApiOptionValue') {
        //             let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameter['externalApiOptionValue']));
        //             const valueApikeys = this.additionalParameter['externalApiOptionValue'].split('||').map(str => str.trim());
        //             if(this.additionalParameter["CEE_like_dislike"] == "true"){
        //                 this.TotalnumberofLikes = data.value[valueApikeys[0]];
        //                 this.TotalnumberofDisLikes = data.value[valueApikeys[1]];
        //             }
        //             if(this.additionalParameter["CEE_like_dislike"] == "false"){
        //                 this.totalRate = data.value[valueApikeys[0]];
        //                 this.totalRating = data.value[valueApikeys[1]];
        //             }
        //         }
        //     }
        // }
        // setting the field data below because get Dynamic Util is checking the possible values
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
    }
    concatData() { }
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
                unique_id_value = [...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key))];
                unique_id_value = [
                    ...unique_id_value,
                    ...this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key)
                ];
            }
        }
        data.forEach(elm => {
            if (unique_id_value.includes(elm)) {
                this.fieldValue = '';
                // default value
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.fieldValue = this.commonUtil.getID(paramter.value);
                        }
                    }
                }
                this.inputValue = this.fieldValue;
                this.updateFieldData(this.fieldValue);
                this.showErrorOnNext = false;
                return;
            }
        });
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
            this.fieldValue = this.commonUtil.getID(get_data[unique_id_value]);
            this.inputValue = this.fieldValue;
            this.updateFieldData(this.fieldValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.fieldValue = this.commonUtil.getID(data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0]);
                this.inputValue = this.fieldValue;
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.fieldValue);
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        if (data.includes(this.fieldData.unique_id)) {
            const stateValue = this.undoRedoUtil.getPresentValue(this.fieldData.unique_id);
            const fieldValue = this.commonUtil.getID(this.fieldValue);
            if (stateValue !== null || stateValue !== undefined) {
                if (stateValue !== fieldValue) {
                    this.fieldValue = stateValue;
                    this.inputValue = this.fieldValue;
                    this.updateFieldData(this.fieldValue);
                }
            }
        }
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
    }
    static ɵfac = function CeeStarComponent_Factory(t) { return new (t || CeeStarComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.Router), i0.ɵɵdirectiveInject(i11.CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeStarComponent, selectors: [["app-cee-star"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "class", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], [1, "form-field"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [3, "rateChange", "rate", "max"], ["disabled", "", 3, "rateChange", "rate", "max"], [1, "totalRating"], [3, "click"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hand-thumbs-up"], ["d", "M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"], [1, "likes-counter"], ["xmlns", "http://www.w3.org/2000/svg", "width", "16", "height", "16", "fill", "currentColor", "viewBox", "0 0 16 16", 1, "bi", "bi-hand-thumbs-down"], ["d", "M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1"], [1, "dislikes-counter"]], template: function CeeStarComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeStarComponent_div_0_Template, 7, 6, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [BarRatingModule, i12.BarRating, FormsModule, NgbModule, CommonModule, i13.NgIf], styles: [".like-button[_ngcontent-%COMP%], .dislike-button[_ngcontent-%COMP%]{font-size:1rem;padding:5px 10px;color:#585858}.liked[_ngcontent-%COMP%], .disliked[_ngcontent-%COMP%]{font-weight:700;color:#1565c0}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeStarComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-star', standalone: true, imports: [BarRatingModule, FormsModule, NgStyle, NgbModule, CommonModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <ng-container *ngIf=\"starRatingshow\">\r\n                <ng-container *ngIf=\"!totalRate\">\r\n                    <bar-rating [(rate)]=\"inputValue\" [max]=\"numStars\" (rateChange)=\"submitRating()\" />\r\n                </ng-container>\r\n                <ng-container *ngIf=\"totalRate\">\r\n                    <bar-rating [(rate)]=\"totalRate\" [max]=\"numStars\" (rateChange)=\"submitRating()\" disabled/>\r\n                    <span class=\"totalRating\">{{totalRate}}/{{numStars}}</span>&nbsp;&nbsp;\r\n                    <span class=\"totalRating\">{{totalRating}} Rating</span>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"!starRatingshow\">\r\n                <ng-container>\r\n                    <button  [class]=\"likeS\" (click)=\"increment()\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-hand-thumbs-up\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2 2 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a10 10 0 0 0-.443.05 9.4 9.4 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a9 9 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.2 2.2 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.9.9 0 0 1-.121.416c-.165.288-.503.56-1.066.56z\"/>\r\n                      </svg> Like | <span class=\"likes-counter\">{{TotalnumberofLikes}}</span> </button>\r\n                    <button  [class]=\"dislikeS\" (click)=\"decrement()\"><svg xmlns=\"http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-hand-thumbs-down\" viewBox=\"0 0 16 16\">\r\n                        <path d=\"M8.864 15.674c-.956.24-1.843-.484-1.908-1.42-.072-1.05-.23-2.015-.428-2.59-.125-.36-.479-1.012-1.04-1.638-.557-.624-1.282-1.179-2.131-1.41C2.685 8.432 2 7.85 2 7V3c0-.845.682-1.464 1.448-1.546 1.07-.113 1.564-.415 2.068-.723l.048-.029c.272-.166.578-.349.97-.484C6.931.08 7.395 0 8 0h3.5c.937 0 1.599.478 1.934 1.064.164.287.254.607.254.913 0 .152-.023.312-.077.464.201.262.38.577.488.9.11.33.172.762.004 1.15.069.13.12.268.159.403.077.27.113.567.113.856s-.036.586-.113.856c-.035.12-.08.244-.138.363.394.571.418 1.2.234 1.733-.206.592-.682 1.1-1.2 1.272-.847.283-1.803.276-2.516.211a10 10 0 0 1-.443-.05 9.36 9.36 0 0 1-.062 4.51c-.138.508-.55.848-1.012.964zM11.5 1H8c-.51 0-.863.068-1.14.163-.281.097-.506.229-.776.393l-.04.025c-.555.338-1.198.73-2.49.868-.333.035-.554.29-.554.55V7c0 .255.226.543.62.65 1.095.3 1.977.997 2.614 1.709.635.71 1.064 1.475 1.238 1.977.243.7.407 1.768.482 2.85.025.362.36.595.667.518l.262-.065c.16-.04.258-.144.288-.255a8.34 8.34 0 0 0-.145-4.726.5.5 0 0 1 .595-.643h.003l.014.004.058.013a9 9 0 0 0 1.036.157c.663.06 1.457.054 2.11-.163.175-.059.45-.301.57-.651.107-.308.087-.67-.266-1.021L12.793 7l.353-.354c.043-.042.105-.14.154-.315.048-.167.075-.37.075-.581s-.027-.414-.075-.581c-.05-.174-.111-.273-.154-.315l-.353-.354.353-.354c.047-.047.109-.176.005-.488a2.2 2.2 0 0 0-.505-.804l-.353-.354.353-.354c.006-.005.041-.05.041-.17a.9.9 0 0 0-.121-.415C12.4 1.272 12.063 1 11.5 1\"/>\r\n                      </svg> Dislike | <span class=\"dislikes-counter\">{{TotalnumberofDisLikes}}</span> </button>\r\n                </ng-container>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".like-button,.dislike-button{font-size:1rem;padding:5px 10px;color:#585858}.liked,.disliked{font-weight:700;color:#1565c0}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.Router }, { type: i11.CeeApiService }], { stepId: [{
            type: Input
        }], fieldData: [{
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
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeStarComponent, { className: "CeeStarComponent", filePath: "lib\\field-components\\cee-star\\cee-star.component.ts", lineNumber: 27 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXN0YXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXN0YXIvY2VlLXN0YXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXN0YXIvY2VlLXN0YXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQWdFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZILE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVM3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFJdEQsT0FBTyxFQUFFLFNBQVMsRUFBb0IsTUFBTSw0QkFBNEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFlBQVksRUFBRSxPQUFPLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUN4RCxPQUFPLEVBQVksZUFBZSxFQUFDLE1BQU0sZ0JBQWdCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7SUNaMUMsZ0NBQXFFO0lBQUEsWUFBeUI7SUFBQSxpQkFBUTs7O0lBQWpDLGNBQXlCO0lBQXpCLGtEQUF5Qjs7O0lBQzlGLDJCQUNnRDs7O0lBQTVDLDJFQUFtQzs7O0lBSDNDLDZCQUFnRDtJQUU1QyxBQURBLDBGQUFxRSw2RUFFN0I7Ozs7SUFGVCxjQUFvQztJQUFwQyxtRUFBb0M7SUFDcEMsY0FBbUM7SUFBbkMsa0VBQW1DOzs7O0lBTWxF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QVk7SUFDM0IsQ0FBQztJQUVELFdBQVcsQ0FBQyxPQUFzQjtRQUM5QixJQUFJLE9BQU8sQ0FBQyxpQkFBaUIsRUFBRTtZQUMzQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxZQUFZLEVBQUUsWUFBWSxDQUFDLENBQUM7U0FDNUU7UUFDRCxJQUFJLE9BQU8sQ0FBQyxnQkFBZ0IsRUFBRTtZQUMxQixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxnQkFBZ0IsQ0FBQyxZQUFZLEVBQUUsV0FBVyxDQUFDLENBQUM7U0FDMUU7UUFDRCxJQUFJLE9BQU8sQ0FBQyxrQkFBa0IsRUFBRTtZQUM1QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLEVBQUUsYUFBYSxDQUFDLENBQUM7U0FDOUU7SUFDTCxDQUFDOzBFQTlRUSxnQkFBZ0I7NkRBQWhCLGdCQUFnQjtZQzFCN0IsaUVBQ29HOztZQUR4RSxvQ0FBZTs0QkR3QjdCLGVBQWUsaUJBQUUsV0FBVyxFQUFXLFNBQVMsRUFBRSxZQUFZOztpRkFFL0QsZ0JBQWdCO2NBUDVCLFNBQVM7MkJBQ0ksY0FBYyxjQUdaLElBQUksV0FDUCxDQUFDLGVBQWUsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxZQUFZLENBQUM7bVdBR3hELE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csU0FBUztrQkFBakIsS0FBSztZQUNHLE9BQU87a0JBQWYsS0FBSztZQUNHLGtCQUFrQjtrQkFBMUIsS0FBSztZQUNHLGlCQUFpQjtrQkFBekIsS0FBSztZQUNHLGdCQUFnQjtrQkFBeEIsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7O2tGQVJHLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgT25EZXN0cm95LCBIb3N0TGlzdGVuZXIsIFNpbXBsZUNoYW5nZXMsIE9uQ2hhbmdlcywgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBVbmRvUmVkbyB9IGZyb20gJy4uLy4uL3V0aWxzL3VuZG8tcmVkby51dGlsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE5nYk1vZHVsZSwgTmdiVG9vbHRpcE1vZHVsZSB9IGZyb20gJ0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSwgTmdTdHlsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7QmFyUmF0aW5nLCBCYXJSYXRpbmdNb2R1bGV9IGZyb20gJ25neC1iYXItcmF0aW5nJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLXN0YXInLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1zdGFyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1zdGFyLmNvbXBvbmVudC5zY3NzJywgJy4uL2ZpZWxkLWNvbW1vbi5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW0JhclJhdGluZ01vZHVsZSwgRm9ybXNNb2R1bGUsIE5nU3R5bGUsIE5nYk1vZHVsZSwgQ29tbW9uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlU3RhckNvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG4gICAgVG90YWxudW1iZXJvZkxpa2VzOm51bWJlcjtcclxuICAgIFRvdGFsbnVtYmVyb2ZEaXNMaWtlczpudW1iZXI7XHJcbiAgICBmbGFnOm51bWJlcj0wO1xyXG4gICAgZGlzbGlrZVMgOnN0cmluZyA9IFwiZGlzbGlrZS1idXR0b25cIjtcclxuICAgIGxpa2VTIDogc3RyaW5nID0gXCJsaWtlLWJ1dHRvblwiO1xyXG5cclxuICAgIGlucHV0VmFsdWUgPSA1O1xyXG4gICAgdW5kb1JlZG9VdGlsOiBVbmRvUmVkbztcclxuICAgIG51bVN0YXJzOiBhbnkgPSA1O1xyXG4gICAgc3RhclJhdGluZ3Nob3cgOiBib29sZWFuID0gdHJ1ZTtcclxuICAgIHRvdGFsUmF0aW5nOiBudW1iZXI7XHJcbiAgICB0b3RhbFJhdGU6IG51bWJlcjtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZVxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIodXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UsIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLCBkaWFsb2csIHNuYWNrQmFyLCBodHRwLCBjZWVBcGlTZXJ2aWNlLCByb3V0ZXIpO1xyXG4gICAgICAgIHRoaXMudW5kb1JlZG9VdGlsID0gbmV3IFVuZG9SZWRvKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuc3RlcElkLCB0aGlzLmZpZWxkRGF0YSwgdGhpcy5rZWVwU3RhdGUsIHRoaXMucm93RGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaW5jcmVtZW50KCkge1xyXG4gICAgICAgIHRoaXMubGlrZVMgPSBcImxpa2UtYnV0dG9uIGxpa2VkXCI7XHJcbiAgICAgICAgdGhpcy5kaXNsaWtlUyA9IFwiZGlzbGlrZS1idXR0b25cIjtcclxuICAgICAgICBpZiAodGhpcy5mbGFnID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLlRvdGFsbnVtYmVyb2ZMaWtlcysrO1xyXG4gICAgICAgICAgICB0aGlzLmZsYWc9MTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmxhZyA9PSAxKXtcclxuICAgICAgICAgICAgdGhpcy5Ub3RhbG51bWJlcm9mTGlrZXMtLTtcclxuICAgICAgICAgICAgdGhpcy5saWtlUyA9IFwibGlrZS1idXR0b25cIjtcclxuICAgICAgICAgICAgdGhpcy5mbGFnID0gMDtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5mbGFnPT0yKXtcclxuICAgICAgICAgICAgdGhpcy5Ub3RhbG51bWJlcm9mTGlrZXMrKztcclxuICAgICAgICAgICAgdGhpcy5Ub3RhbG51bWJlcm9mRGlzTGlrZXMtLTtcclxuICAgICAgICAgICAgdGhpcy5mbGFnID0gMTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoMSk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdvblN0YXJSYXRpbmdDbGlja2VkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZGVjcmVtZW50KCkge1xyXG4gICAgICAgIHRoaXMuZGlzbGlrZVMgPSBcImRpc2xpa2UtYnV0dG9uIGRpc2xpa2VkXCI7XHJcbiAgICAgICAgdGhpcy5saWtlUyA9IFwibGlrZS1idXR0b25cIjtcclxuICAgICAgICBpZiAodGhpcy5mbGFnID09IDApe1xyXG4gICAgICAgICAgICB0aGlzLlRvdGFsbnVtYmVyb2ZEaXNMaWtlcysrO1xyXG4gICAgICAgICAgICB0aGlzLmZsYWcgPSAyO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLmZsYWcgPT0gMil7XHJcbiAgICAgICAgICAgIHRoaXMuVG90YWxudW1iZXJvZkRpc0xpa2VzLS07XHJcbiAgICAgICAgICAgIHRoaXMuZmxhZyA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZGlzbGlrZVMgPSBcImRpc2xpa2UtYnV0dG9uXCI7XHJcbiAgICAgICAgfSBlbHNlIGlmICAodGhpcy5mbGFnID09IDEpe1xyXG4gICAgICAgICAgICB0aGlzLlRvdGFsbnVtYmVyb2ZEaXNMaWtlcysrO1xyXG4gICAgICAgICAgICB0aGlzLlRvdGFsbnVtYmVyb2ZMaWtlcy0tO1xyXG4gICAgICAgICAgICB0aGlzLmZsYWcgPSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSgwKTtcclxuICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ29uU3RhclJhdGluZ0NsaWNrZWQnKTtcclxuICAgICB9XHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiQ0VFX2xpa2VfZGlzbGlrZVwiXSA9PSBcInRydWVcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhclJhdGluZ3Nob3cgPSBmYWxzZTtcclxuICAgICAgICB9IFxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfc3Rhcl9udW1iZXJcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5udW1TdGFycyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9zdGFyX251bWJlclwiXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJkZWZhdWx0X3ZhbHVlXCJdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcImRlZmF1bHRfdmFsdWVcIl07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10pIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlQXBpa2V5cyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddLnNwbGl0KCd8fCcpLm1hcChzdHIgPT4gc3RyLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9saWtlX2Rpc2xpa2VcIl0gPT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5Ub3RhbG51bWJlcm9mTGlrZXMgPSBkYXRhLnZhbHVlW3ZhbHVlQXBpa2V5c1swXV07XHJcbiAgICAgICAgICAgICAgICB0aGlzLlRvdGFsbnVtYmVyb2ZEaXNMaWtlcyA9IGRhdGEudmFsdWVbdmFsdWVBcGlrZXlzWzFdXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJDRUVfbGlrZV9kaXNsaWtlXCJdID09IFwiZmFsc2VcIil7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnRvdGFsUmF0ZSA9IGRhdGEgJiYgZGF0YS52YWx1ZVt2YWx1ZUFwaWtleXNbMF1dO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50b3RhbFJhdGluZyA9IGRhdGEgJiYgZGF0YS52YWx1ZVt2YWx1ZUFwaWtleXNbMV1dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBzdWJtaXRSYXRpbmcoKXtcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnb25TdGFyUmF0aW5nQ2xpY2tlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgICAgIGlmICghdGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFwaVZhbHVlID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChhcGlWYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXBpVmFsdWUpICYmIHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgPSBhcGlWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXM7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IGFwaVZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5kb1JlZG9VdGlsLnB1c2godGhpcy5hcHBEYXRhLmlkLCB0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAgICAgLy8gZm9yIG11bHRpcGxlIGFwaSBrZXlzIHRoZSB2YWx1ZSB0aGF0IG5lZWRzIHRvIGJlIHNldCB3aWxsIGNvbWVcclxuICAgICAgICAvLyBmcm9tIGFkZGl0aW9uYWxQYXJhbWV0ZXIgd2l0aCB0eXBlIGV4dGVybmFsQXBpT3B0aW9uVmFsdWVcclxuICAgICAgICAvLyBpZih0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAvLyAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgLy8gICAgICAgICBpZiAocGFyYW1ldGVyLnBhcmFtZXRlcl90eXBlID09PSAnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZScpIHtcclxuICAgICAgICAvLyAgICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcih0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10pKTtcclxuICAgICAgICAvLyAgICAgICAgICAgICBjb25zdCB2YWx1ZUFwaWtleXMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXS5zcGxpdCgnfHwnKS5tYXAoc3RyID0+IHN0ci50cmltKCkpO1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9saWtlX2Rpc2xpa2VcIl0gPT0gXCJ0cnVlXCIpe1xyXG4gICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLlRvdGFsbnVtYmVyb2ZMaWtlcyA9IGRhdGEudmFsdWVbdmFsdWVBcGlrZXlzWzBdXTtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5Ub3RhbG51bWJlcm9mRGlzTGlrZXMgPSBkYXRhLnZhbHVlW3ZhbHVlQXBpa2V5c1sxXV07XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgICAgIGlmKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkNFRV9saWtlX2Rpc2xpa2VcIl0gPT0gXCJmYWxzZVwiKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy50b3RhbFJhdGUgPSBkYXRhLnZhbHVlW3ZhbHVlQXBpa2V5c1swXV07XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMudG90YWxSYXRpbmcgPSBkYXRhLnZhbHVlW3ZhbHVlQXBpa2V5c1sxXV07XHJcbiAgICAgICAgLy8gICAgICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICAvLyBzZXR0aW5nIHRoZSBmaWVsZCBkYXRhIGJlbG93IGJlY2F1c2UgZ2V0IER5bmFtaWMgVXRpbCBpcyBjaGVja2luZyB0aGUgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcblxyXG4gICAgb25TZXRTZXNzaW9uRGF0YShhcGlLZXk6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLm9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbXB0eVNlc3Npb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9IFtdO1xyXG4gICAgICAgIGlmIChnZXRfZGF0YS51bmlxdWVfaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLnVuaXF1ZV9pZHM7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmFwcERhdGEuaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuZmllbGREYXRhLmFwaV9rZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gWy4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKV07XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMoZWxtKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICAvLyBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdkZWZhdWx0X3ZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5jb21tb25VdGlsLmdldElEKHBhcmFtdGVyLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGdldF9kYXRhKS5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXModW5pcXVlX2lkX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmNvbW1vblV0aWwuZ2V0SUQoZ2V0X2RhdGFbdW5pcXVlX2lkX3ZhbHVlXSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKGRhdGFbJ3VuaXF1ZUlkcyddLmluY2x1ZGVzKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5nZXRJRChcclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bZGF0YVsndW5pcXVlSWRzJ10uaW5kZXhPZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFbJ3ZhbHVlcyddWzBdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIG9mIHRyaWdnZXJVcGRhdGUgaXMgdHJ1ZSB0aGVuIHVwZGF0ZSB0aGUgZmllbGQgdmFsdWUgb3IgdXBkYXRlIHZhbHVlIGFuZCBlbWl0IGNvbmRpdGlvbnMgZXZlbnRcclxuICAgICAgICAgICAgICAgIHRoaXNbZGF0YVsndHJpZ2dlclVwZGF0ZSddID8gJ3VwZGF0ZUZpZWxkRW50aXR5JyA6ICd1cGRhdGVGaWVsZERhdGEnXSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlSGlzdG9yeShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoZGF0YS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXRlVmFsdWUgPSB0aGlzLnVuZG9SZWRvVXRpbC5nZXRQcmVzZW50VmFsdWUodGhpcy5maWVsZERhdGEudW5pcXVlX2lkKTtcclxuICAgICAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9IHRoaXMuY29tbW9uVXRpbC5nZXRJRCh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICBpZiAoc3RhdGVWYWx1ZSAhPT0gbnVsbCB8fCBzdGF0ZVZhbHVlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZVZhbHVlICE9PSBmaWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gc3RhdGVWYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMYW5ndWFnZShkYXRhOiBvYmplY3QpIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNFZGl0YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiAqbmdJZj1cImlzVmlzaWJsZVwiXHJcbiAgICBjbGFzcz1cInt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCJcclxuICAgICAgICAgICAgICAgICAgICBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzdGFyUmF0aW5nc2hvd1wiPlxyXG4gICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIiF0b3RhbFJhdGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YmFyLXJhdGluZyBbKHJhdGUpXT1cImlucHV0VmFsdWVcIiBbbWF4XT1cIm51bVN0YXJzXCIgKHJhdGVDaGFuZ2UpPVwic3VibWl0UmF0aW5nKClcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwidG90YWxSYXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJhci1yYXRpbmcgWyhyYXRlKV09XCJ0b3RhbFJhdGVcIiBbbWF4XT1cIm51bVN0YXJzXCIgKHJhdGVDaGFuZ2UpPVwic3VibWl0UmF0aW5nKClcIiBkaXNhYmxlZC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0b3RhbFJhdGluZ1wiPnt7dG90YWxSYXRlfX0ve3tudW1TdGFyc319PC9zcGFuPiZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG90YWxSYXRpbmdcIj57e3RvdGFsUmF0aW5nfX0gUmF0aW5nPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXN0YXJSYXRpbmdzaG93XCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gIFtjbGFzc109XCJsaWtlU1wiIChjbGljayk9XCJpbmNyZW1lbnQoKVwiPjxzdmcgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIxNlwiIGZpbGw9XCJjdXJyZW50Q29sb3JcIiBjbGFzcz1cImJpIGJpLWhhbmQtdGh1bWJzLXVwXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODY0LjA0NkM3LjkwOC0uMTkzIDcuMDIuNTMgNi45NTYgMS40NjZjLS4wNzIgMS4wNTEtLjIzIDIuMDE2LS40MjggMi41OS0uMTI1LjM2LS40NzkgMS4wMTMtMS4wNCAxLjYzOS0uNTU3LjYyMy0xLjI4MiAxLjE3OC0yLjEzMSAxLjQxQzIuNjg1IDcuMjg4IDIgNy44NyAyIDguNzJ2NC4wMDFjMCAuODQ1LjY4MiAxLjQ2NCAxLjQ0OCAxLjU0NSAxLjA3LjExNCAxLjU2NC40MTUgMi4wNjguNzIzbC4wNDguMDNjLjI3Mi4xNjUuNTc4LjM0OC45Ny40ODQuMzk3LjEzNi44NjEuMjE3IDEuNDY2LjIxN2gzLjVjLjkzNyAwIDEuNTk5LS40NzcgMS45MzQtMS4wNjRhMS44NiAxLjg2IDAgMCAwIC4yNTQtLjkxMmMwLS4xNTItLjAyMy0uMzEyLS4wNzctLjQ2NC4yMDEtLjI2My4zOC0uNTc4LjQ4OC0uOTAxLjExLS4zMy4xNzItLjc2Mi4wMDQtMS4xNDkuMDY5LS4xMy4xMi0uMjY5LjE1OS0uNDAzLjA3Ny0uMjcuMTEzLS41NjguMTEzLS44NTcgMC0uMjg4LS4wMzYtLjU4NS0uMTEzLS44NTZhMiAyIDAgMCAwLS4xMzgtLjM2MiAxLjkgMS45IDAgMCAwIC4yMzQtMS43MzRjLS4yMDYtLjU5Mi0uNjgyLTEuMS0xLjItMS4yNzItLjg0Ny0uMjgyLTEuODAzLS4yNzYtMi41MTYtLjIxMWExMCAxMCAwIDAgMC0uNDQzLjA1IDkuNCA5LjQgMCAwIDAtLjA2Mi00LjUwOUExLjM4IDEuMzggMCAwIDAgOS4xMjUuMTExek0xMS41IDE0LjcyMUg4Yy0uNTEgMC0uODYzLS4wNjktMS4xNC0uMTY0LS4yODEtLjA5Ny0uNTA2LS4yMjgtLjc3Ni0uMzkzbC0uMDQtLjAyNGMtLjU1NS0uMzM5LTEuMTk4LS43MzEtMi40OS0uODY4LS4zMzMtLjAzNi0uNTU0LS4yOS0uNTU0LS41NVY4LjcyYzAtLjI1NC4yMjYtLjU0My42Mi0uNjUgMS4wOTUtLjMgMS45NzctLjk5NiAyLjYxNC0xLjcwOC42MzUtLjcxIDEuMDY0LTEuNDc1IDEuMjM4LTEuOTc4LjI0My0uNy40MDctMS43NjguNDgyLTIuODUuMDI1LS4zNjIuMzYtLjU5NC42NjctLjUxOGwuMjYyLjA2NmMuMTYuMDQuMjU4LjE0My4yODguMjU1YTguMzQgOC4zNCAwIDAgMS0uMTQ1IDQuNzI1LjUuNSAwIDAgMCAuNTk1LjY0NGwuMDAzLS4wMDEuMDE0LS4wMDMuMDU4LS4wMTRhOSA5IDAgMCAxIDEuMDM2LS4xNTdjLjY2My0uMDYgMS40NTctLjA1NCAyLjExLjE2NC4xNzUuMDU4LjQ1LjMuNTcuNjUuMTA3LjMwOC4wODcuNjctLjI2NiAxLjAyMmwtLjM1My4zNTMuMzUzLjM1NGMuMDQzLjA0My4xMDUuMTQxLjE1NC4zMTUuMDQ4LjE2Ny4wNzUuMzcuMDc1LjU4MSAwIC4yMTItLjAyNy40MTQtLjA3NS41ODItLjA1LjE3NC0uMTExLjI3Mi0uMTU0LjMxNWwtLjM1My4zNTMuMzUzLjM1NGMuMDQ3LjA0Ny4xMDkuMTc3LjAwNS40ODhhMi4yIDIuMiAwIDAgMS0uNTA1LjgwNWwtLjM1My4zNTMuMzUzLjM1NGMuMDA2LjAwNS4wNDEuMDUuMDQxLjE3YS45LjkgMCAwIDEtLjEyMS40MTZjLS4xNjUuMjg4LS41MDMuNTYtMS4wNjYuNTZ6XCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+IExpa2UgfCA8c3BhbiBjbGFzcz1cImxpa2VzLWNvdW50ZXJcIj57e1RvdGFsbnVtYmVyb2ZMaWtlc319PC9zcGFuPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uICBbY2xhc3NdPVwiZGlzbGlrZVNcIiAoY2xpY2spPVwiZGVjcmVtZW50KClcIj48c3ZnIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMTZcIiBmaWxsPVwiY3VycmVudENvbG9yXCIgY2xhc3M9XCJiaSBiaS1oYW5kLXRodW1icy1kb3duXCIgdmlld0JveD1cIjAgMCAxNiAxNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBkPVwiTTguODY0IDE1LjY3NGMtLjk1Ni4yNC0xLjg0My0uNDg0LTEuOTA4LTEuNDItLjA3Mi0xLjA1LS4yMy0yLjAxNS0uNDI4LTIuNTktLjEyNS0uMzYtLjQ3OS0xLjAxMi0xLjA0LTEuNjM4LS41NTctLjYyNC0xLjI4Mi0xLjE3OS0yLjEzMS0xLjQxQzIuNjg1IDguNDMyIDIgNy44NSAyIDdWM2MwLS44NDUuNjgyLTEuNDY0IDEuNDQ4LTEuNTQ2IDEuMDctLjExMyAxLjU2NC0uNDE1IDIuMDY4LS43MjNsLjA0OC0uMDI5Yy4yNzItLjE2Ni41NzgtLjM0OS45Ny0uNDg0QzYuOTMxLjA4IDcuMzk1IDAgOCAwaDMuNWMuOTM3IDAgMS41OTkuNDc4IDEuOTM0IDEuMDY0LjE2NC4yODcuMjU0LjYwNy4yNTQuOTEzIDAgLjE1Mi0uMDIzLjMxMi0uMDc3LjQ2NC4yMDEuMjYyLjM4LjU3Ny40ODguOS4xMS4zMy4xNzIuNzYyLjAwNCAxLjE1LjA2OS4xMy4xMi4yNjguMTU5LjQwMy4wNzcuMjcuMTEzLjU2Ny4xMTMuODU2cy0uMDM2LjU4Ni0uMTEzLjg1NmMtLjAzNS4xMi0uMDguMjQ0LS4xMzguMzYzLjM5NC41NzEuNDE4IDEuMi4yMzQgMS43MzMtLjIwNi41OTItLjY4MiAxLjEtMS4yIDEuMjcyLS44NDcuMjgzLTEuODAzLjI3Ni0yLjUxNi4yMTFhMTAgMTAgMCAwIDEtLjQ0My0uMDUgOS4zNiA5LjM2IDAgMCAxLS4wNjIgNC41MWMtLjEzOC41MDgtLjU1Ljg0OC0xLjAxMi45NjR6TTExLjUgMUg4Yy0uNTEgMC0uODYzLjA2OC0xLjE0LjE2My0uMjgxLjA5Ny0uNTA2LjIyOS0uNzc2LjM5M2wtLjA0LjAyNWMtLjU1NS4zMzgtMS4xOTguNzMtMi40OS44NjgtLjMzMy4wMzUtLjU1NC4yOS0uNTU0LjU1VjdjMCAuMjU1LjIyNi41NDMuNjIuNjUgMS4wOTUuMyAxLjk3Ny45OTcgMi42MTQgMS43MDkuNjM1LjcxIDEuMDY0IDEuNDc1IDEuMjM4IDEuOTc3LjI0My43LjQwNyAxLjc2OC40ODIgMi44NS4wMjUuMzYyLjM2LjU5NS42NjcuNTE4bC4yNjItLjA2NWMuMTYtLjA0LjI1OC0uMTQ0LjI4OC0uMjU1YTguMzQgOC4zNCAwIDAgMC0uMTQ1LTQuNzI2LjUuNSAwIDAgMSAuNTk1LS42NDNoLjAwM2wuMDE0LjAwNC4wNTguMDEzYTkgOSAwIDAgMCAxLjAzNi4xNTdjLjY2My4wNiAxLjQ1Ny4wNTQgMi4xMS0uMTYzLjE3NS0uMDU5LjQ1LS4zMDEuNTctLjY1MS4xMDctLjMwOC4wODctLjY3LS4yNjYtMS4wMjFMMTIuNzkzIDdsLjM1My0uMzU0Yy4wNDMtLjA0Mi4xMDUtLjE0LjE1NC0uMzE1LjA0OC0uMTY3LjA3NS0uMzcuMDc1LS41ODFzLS4wMjctLjQxNC0uMDc1LS41ODFjLS4wNS0uMTc0LS4xMTEtLjI3My0uMTU0LS4zMTVsLS4zNTMtLjM1NC4zNTMtLjM1NGMuMDQ3LS4wNDcuMTA5LS4xNzYuMDA1LS40ODhhMi4yIDIuMiAwIDAgMC0uNTA1LS44MDRsLS4zNTMtLjM1NC4zNTMtLjM1NGMuMDA2LS4wMDUuMDQxLS4wNS4wNDEtLjE3YS45LjkgMCAwIDAtLjEyMS0uNDE1QzEyLjQgMS4yNzIgMTIuMDYzIDEgMTEuNSAxXCIvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9zdmc+IERpc2xpa2UgfCA8c3BhbiBjbGFzcz1cImRpc2xpa2VzLWNvdW50ZXJcIj57e1RvdGFsbnVtYmVyb2ZEaXNMaWtlc319PC9zcGFuPiA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19