import { Component, Input, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { WfeEncryptionUtil } from '../../utils/wfe-encryption-util';
import { map, startWith, take } from 'rxjs/operators';
import { CommonUtil } from '../../utils/common-util';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { UntypedFormControl } from '@angular/forms';
import { CommonModule, NgStyle } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { CustomTooltipDirective } from '../../directives/app.directive';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
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
import * as i10 from "../../services/cee-api-service.service";
import * as i11 from "@angular/router";
import * as i12 from "@angular/material/form-field";
import * as i13 from "@angular/material/chips";
import * as i14 from "@angular/material/icon";
import * as i15 from "@angular/material/autocomplete";
import * as i16 from "@angular/material/core";
import * as i17 from "@angular/forms";
import * as i18 from "@angular/common";
import * as i19 from "../../directives/tooltip/tooltip.directive";
const _c0 = ["fieldName"];
const _c1 = ["tabInput"];
const _c2 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, color: a3, "border-color": a4, height: a5, width: a6, "background-color": a7 });
const _c3 = a0 => ({ "color": a0 });
function CeeTagComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("btn-tooltip pull-right ml-auto btn-tooltip-", ctx_r1.fieldData.unique_id, "");
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeTagComponent_div_0_mat_label_3_span_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 20);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTagComponent_div_0_mat_label_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-label");
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CeeTagComponent_div_0_mat_label_3_span_2_Template, 2, 0, "span", 19);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.fieldData.field_label, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTagComponent_div_0_mat_chip_row_6_button_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 23)(1, "mat-icon");
    i0.ɵɵtext(2, "cancel");
    i0.ɵɵelementEnd()();
} }
function CeeTagComponent_div_0_mat_chip_row_6_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-chip-row", 21);
    i0.ɵɵlistener("removed", function CeeTagComponent_div_0_mat_chip_row_6_Template_mat_chip_row_removed_0_listener() { const fruit_r4 = i0.ɵɵrestoreView(_r3).$implicit; const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.remove(fruit_r4.value, ctx_r1.tabCtrl)); });
    i0.ɵɵtext(1);
    i0.ɵɵtemplate(2, CeeTagComponent_div_0_mat_chip_row_6_button_2_Template, 3, 0, "button", 22);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fruit_r4 = ctx.$implicit;
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", fruit_r4.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.canDeleteTagsFlag);
} }
function CeeTagComponent_div_0_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 24);
    i0.ɵɵlistener("click", function CeeTagComponent_div_0_button_9_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r5); const ctx_r1 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r1.add(ctx_r1.tabCtrl.value, ctx_r1.tabCtrl)); });
    i0.ɵɵelement(1, "mat-icon", 25);
    i0.ɵɵelementEnd();
} }
function CeeTagComponent_div_0_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-option", 26);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const opt_r6 = ctx.$implicit;
    i0.ɵɵproperty("value", opt_r6);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", opt_r6.name, " ");
} }
function CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(3).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r1.returnMessageData(message_r7.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.returnMessageData(message_r7.code).message_text, "");
} }
function CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r7 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory && message_r7.type == "Mandatory");
} }
function CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_div_1_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext && !ctx_r1.isEditable || !ctx_r1.isValid);
} }
function CeeTagComponent_div_0_ng_container_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_container_14_ng_container_1_div_1_Template, 2, 1, "div", 27);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showErrorOnNext && !ctx_r1.isEditable || !ctx_r1.isValid && (ctx_r1.fieldName && (ctx_r1.fieldName.dirty || ctx_r1.fieldName.touched) || ctx_r1.showErrorOnNext));
} }
function CeeTagComponent_div_0_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_container_14_ng_container_1_Template, 2, 1, "ng-container", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.messages);
} }
function CeeTagComponent_div_0_ng_template_15_div_0_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 30);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, ctx_r1.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r1.errorMessageData.message_text, "");
} }
function CeeTagComponent_div_0_ng_template_15_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div");
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_template_15_div_0_div_1_p_1_Template, 2, 4, "p", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
} }
function CeeTagComponent_div_0_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, CeeTagComponent_div_0_ng_template_15_div_0_div_1_Template, 2, 1, "div", 8);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isValid);
} }
function CeeTagComponent_div_0_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTagComponent_div_0_ng_template_15_div_0_Template, 2, 1, "div", 27);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r1.isValid && (ctx_r1.fieldName && (ctx_r1.fieldName.dirty || ctx_r1.fieldName.touched) || ctx_r1.showErrorOnNext));
} }
function CeeTagComponent_div_0_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 28)(2, "div")(3, "p", 30);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r8 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c3, item_r8.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r8.value.message_text, "");
} }
function CeeTagComponent_div_0_div_20_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 32);
    i0.ɵɵtext(2, "Please hit enter after inserting the value to the tag");
    i0.ɵɵelementEnd()();
} }
function CeeTagComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 31)(1, "div", 33)(2, "strong");
    i0.ɵɵtext(3, "Warning:");
    i0.ɵɵelementEnd();
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate1(" ", ctx_r1.infoMsg, "");
} }
function CeeTagComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 5)(1, "mat-form-field", 6);
    i0.ɵɵtemplate(2, CeeTagComponent_div_0_button_2_Template, 2, 5, "button", 7)(3, CeeTagComponent_div_0_mat_label_3_Template, 3, 2, "mat-label", 8);
    i0.ɵɵelementStart(4, "mat-chip-grid", 9, 0);
    i0.ɵɵtemplate(6, CeeTagComponent_div_0_mat_chip_row_6_Template, 3, 2, "mat-chip-row", 10);
    i0.ɵɵelementStart(7, "input", 11, 1);
    i0.ɵɵlistener("click", function CeeTagComponent_div_0_Template_input_click_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onTagClick($event)); })("ngModelChange", function CeeTagComponent_div_0_Template_input_ngModelChange_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onChange($event)); })("matChipInputTokenEnd", function CeeTagComponent_div_0_Template_input_matChipInputTokenEnd_7_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.add($event, ctx_r1.tabCtrl)); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(9, CeeTagComponent_div_0_button_9_Template, 2, 0, "button", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(10, "mat-autocomplete", 13, 2);
    i0.ɵɵlistener("optionSelected", function CeeTagComponent_div_0_Template_mat_autocomplete_optionSelected_10_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.selected($event, ctx_r1.tabCtrl)); });
    i0.ɵɵtemplate(12, CeeTagComponent_div_0_mat_option_12_Template, 2, 2, "mat-option", 14);
    i0.ɵɵpipe(13, "async");
    i0.ɵɵelementEnd()();
    i0.ɵɵtemplate(14, CeeTagComponent_div_0_ng_container_14_Template, 2, 1, "ng-container", 15)(15, CeeTagComponent_div_0_ng_template_15_Template, 1, 1, "ng-template", null, 3, i0.ɵɵtemplateRefExtractor)(17, CeeTagComponent_div_0_ng_container_17_Template, 5, 4, "ng-container", 16);
    i0.ɵɵpipe(18, "keyvalue");
    i0.ɵɵelementContainerStart(19);
    i0.ɵɵtemplate(20, CeeTagComponent_div_0_div_20_Template, 3, 0, "div", 17)(21, CeeTagComponent_div_0_div_21_Template, 5, 1, "div", 17);
    i0.ɵɵelementContainerEnd();
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const chipList_r9 = i0.ɵɵreference(5);
    const auto_r10 = i0.ɵɵreference(11);
    const singleErrorMessage_r11 = i0.ɵɵreference(16);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", ctx_r1.possibleOptions);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("form-control ", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", " ", !ctx_r1.isValid && (ctx_r1.tabCtrl.dirty || ctx_r1.tabCtrl.touched || ctx_r1.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵproperty("required", ctx_r1.isMandatory)("ngStyle", i0.ɵɵpureFunction8(32, _c2, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color))("formControl", ctx_r1.tabCtrl)("matAutocomplete", auto_r10)("matChipInputFor", chipList_r9)("matChipInputSeparatorKeyCodes", ctx_r1.separatorKeysCodes);
    i0.ɵɵattribute("disabled", !ctx_r1.isEditable)("aria-label", "Select a " + ctx_r1.fieldData.field_label)("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.tabCtrl && ctx_r1.tabCtrl.value);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 28, ctx_r1.filteredOptions));
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r1.multipleErrorMessage)("ngIfElse", singleErrorMessage_r11);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(18, 30, ctx_r1.showComparisonError));
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.tabCtrl && ctx_r1.tabCtrl.value);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.infoMsg != "");
} }
export class CeeTagComponent extends BaseView {
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
    fieldName;
    tabInput;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    variableObject = {}; // variable object
    wfeEncryption;
    sessionKeyUtil;
    validationRegex = '';
    inputValue = [];
    buttonLabel = '';
    searchButtonEditable = true;
    isSearch = false;
    isValid = false;
    // When "Data Format" available
    mask = false;
    maskDirty = false;
    // When "API Data Format" available
    apiDataFormat = '';
    apiDataFormatMask = false;
    // $emitKeyDown: Subscription;
    timer = null;
    timer1 = null;
    html_id = '';
    autocomplete = false;
    showCross = false;
    AdditionalParameter = {};
    hide = false;
    oldFieldData = {};
    isSet = false;
    inputType = 'text';
    oldInputValue = '';
    canDeleteTagsFlag = true;
    canAddDuplicateTagsFlag = true;
    infoMsg = "";
    storeInternalValue = false;
    separatorKeysCodes = [ENTER, COMMA];
    tabCtrl = new UntypedFormControl();
    filteredOptions;
    possibleOptions = [];
    allOptions = [];
    custom_class_name;
    maxValue;
    minValue;
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
        this.filteredOptions = this.tabCtrl.valueChanges.pipe(startWith(null), map((fruit) => (fruit ? this._filter(fruit) : this.allOptions.slice())));
        // console.log("allOptions: ",this.allOptions);
    }
    add(event, state) {
        let elementValue = typeof (event) == 'string' ? event : event.value;
        this.setMaxMin();
        const new_value = (elementValue || '').trim();
        let result = this.possibleOptions.map(a => a.value);
        if (result.indexOf(new_value) !== -1 && !this.canAddDuplicateTagsFlag) {
            this.infoMsg = "Duplicate tags are not allowed!";
            return;
        }
        else {
            this.infoMsg = "";
        }
        if (this.maxValue) {
            if (this.possibleOptions.length < Number(this.maxValue ? this.maxValue : 0)) {
                this.infoMsg = "";
                if (!this.AdditionalParameter["onlyFromDropdown"] || (this.AdditionalParameter["onlyFromDropdown"] && this.AdditionalParameter["onlyFromDropdown"].toLowerCase() != "true")) {
                    // Add our fruit
                    // console.log("this.possibleOptions: ",this.possibleOptions)
                    if (new_value) {
                        this.possibleOptions.push({ value: new_value, name: new_value });
                    }
                    let oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
                    // console.log("Value: ",this.possibleOptions[this.possibleOptions.length - 1]['value'])
                    // console.log("oldArr: ",oldArr,this.possibleOptions[this.possibleOptions.length - 1]['value'])
                    let newArr = oldArr ? [...oldArr, this.possibleOptions[this.possibleOptions.length - 1]['value']] : [this.possibleOptions[this.possibleOptions.length - 1]['value']];
                    this.onSessionDataUpdated(newArr, state);
                    // Clear the input value
                    // event.chipInput!.clear();
                    this.tabInput.nativeElement.value = '';
                    this.tabCtrl.setValue('');
                }
                else {
                    this.infoMsg = "Tags can be added from dropdown only!";
                }
            }
            else {
                this.infoMsg = "Maximum " + this.maxValue + " tags are allowed!";
            }
        }
        else {
            if (new_value) {
                this.possibleOptions.push({ value: new_value, name: new_value });
            }
            let oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
            let newArr = oldArr ? [...oldArr, this.possibleOptions[this.possibleOptions.length - 1]['value']] : [this.possibleOptions[this.possibleOptions.length - 1]['value']];
            this.onSessionDataUpdated(newArr, state);
            this.tabInput.nativeElement.value = '';
            this.tabCtrl.setValue('');
        }
    }
    remove(fruit, state) {
        this.setMaxMin();
        if (this.canDeleteTagsFlag) {
            const index = this.possibleOptions.findIndex(p => p.value == fruit);
            if (index >= 0) {
                this.possibleOptions.splice(index, 1);
            }
            // Remove from App Data
            var oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
            var newArr = oldArr.filter(function (item) {
                return item !== fruit;
            });
            this.onSessionDataUpdated(newArr, state);
            this.infoMsg = "";
        }
        if (this.minValue) {
            if (this.possibleOptions.length <= Number(this.minValue ? this.minValue : 1)) {
                this.infoMsg = "Minimum " + this.minValue + " tags needed!";
                // return;
            }
            else {
                this.infoMsg = "";
            }
        }
    }
    selected(event, state) {
        if (event && event.option && event.option.value && this.possibleOptions.indexOf(event.option.value) !== -1 && !this.canAddDuplicateTagsFlag) {
            this.infoMsg = "Duplicate tags are not allowed!";
            return;
        }
        else {
            this.infoMsg = "";
        }
        if (this.maxValue) {
            if (this.possibleOptions.length < Number(this.maxValue ? this.maxValue : 0) && event && event.option && event.option.value) {
                this.infoMsg = "";
                this.possibleOptions.push(event.option.value);
            }
            else {
                this.infoMsg = "Maximum " + this.maxValue + " tags are allowed!";
            }
        }
        else {
            this.possibleOptions.push(event.option.value);
        }
        this.tabInput.nativeElement.value = '';
        this.tabCtrl.setValue('');
        let oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
        let newArr = [...oldArr, this.possibleOptions[this.possibleOptions.length - 1]['value']];
        this.onSessionDataUpdated(newArr, state);
        // console.log("multipleErrorMessage: ", this.tabCtrl)
    }
    updateWarning() {
        if (this.maxValue) {
            if (this.possibleOptions.length > Number(this.maxValue ? this.maxValue : 0)) {
                this.infoMsg = "Maximum " + this.maxValue + " tags are allowed!";
            }
            else {
                this.infoMsg = "";
            }
        }
        if (this.minValue) {
            if (this.possibleOptions.length < Number(this.minValue ? this.minValue : 1)) {
                this.infoMsg = "Minimum " + this.minValue + " tags needed!";
            }
            else if (!this.maxValue || (this.maxValue && this.possibleOptions.length <= Number(this.maxValue ? this.maxValue : 0))) {
                this.infoMsg = "";
            }
        }
        // console.log("html_id: ",this.fieldData.html_id)
        let oldArr = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
        oldArr = oldArr ? oldArr : [];
        // console.log("oldArr: ",oldArr)
        this.isValid = (this.isMandatory && this.possibleOptions.length == 0) || (this.minValue && this.possibleOptions.length < Number(this.minValue ? this.minValue : 1)) || (this.maxValue && this.possibleOptions.length > Number(this.maxValue ? this.maxValue : 1)) ? false : true;
        // console.log("isValid: ",this.isValid)
        this.updateTagFieldData([...oldArr], this.isValid);
    }
    updateTagFieldData(data, isValid = true) {
        // check if the validation is custom validation page
        if (this.customCheck && data != '') {
            isValid = this.customErrorsValidation.getMessages(this.appData.id, data).length ? false : isValid;
        }
        this.valid = isValid; // assign passed or failed
        this.fieldValue = data;
        this.appData = Object.assign({}, this.appData, { isValid });
        if (this.manageState) {
            this.appDataService.updateAppData(Object.assign({}, this.appData, {
                visible: this.isVisible,
                editable: this.isEditable, mandatory: this.isMandatory, isValid, value: this.fieldValue
            }));
        }
    }
    _filter(value) {
        if (!value) {
            return this.allOptions;
        }
        const filterValue = value && typeof value == "string" ? value.toLowerCase() : (value['name'] && typeof value['name'] == "string" ? value['name'].toLowerCase() : '');
        return this.allOptions.filter(fruit => fruit['name'].toLowerCase().includes(filterValue));
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        if (this.AdditionalParameter["canDeleteTags"]) {
            this.canDeleteTagsFlag = this.AdditionalParameter["canDeleteTags"].toLowerCase() == "true" ? true : false;
        }
        if (!this.isEditable) {
            this.canDeleteTagsFlag = false;
        }
        if (this.AdditionalParameter["canAddDuplicateTags"]) {
            this.canAddDuplicateTagsFlag = this.AdditionalParameter["canAddDuplicateTags"].toLowerCase() == "true" ? true : false;
        }
        if (this.AdditionalParameter["StoreInternalValue"]) {
            this.storeInternalValue = this.AdditionalParameter["StoreInternalValue"].toLowerCase() == "true" ? true : false;
        }
        this.setMaxMin();
        this.variableObject['emitOnButtonValidation_' + this.fieldData.html_id] = this.sharedEventsService.validateButtonForTagEmitter.subscribe(() => {
            this.setMaxMin();
            this.updateWarning();
        });
    }
    setMaxMin() {
        if (this.AdditionalParameter["MaxValue"] && this.AdditionalParameter["MaxValue"] != '') {
            if (this.AdditionalParameter["MaxValue"] && !isNaN(this.AdditionalParameter["MaxValue"])) {
                this.maxValue = Number(this.AdditionalParameter["MaxValue"]);
            }
            else if (this.AdditionalParameter["MaxValue"].includes('##')) {
                const values = this.AdditionalParameter["MaxValue"].match(new RegExp(/[^{}]+/g));
                const key = values ? values[0] : this.AdditionalParameter["MaxValue"];
                const handlerData = this.apiDataService.getApiDataByHandler(this.AdditionalParameter["MaxValue"].split('##')[0]);
                this.maxValue = handlerData ? handlerData.value[key] : '';
            }
            else {
                this.maxValue = this.appDataService.getFieldDataByFieldId(this.AdditionalParameter["MaxValue"]);
            }
            // console.log("maxValue: ", this.maxValue);
        }
        if (this.AdditionalParameter["MinValue"] && this.AdditionalParameter["MinValue"] != '') {
            if (this.AdditionalParameter["MinValue"] && !isNaN(this.AdditionalParameter["MinValue"])) {
                this.minValue = Number(this.AdditionalParameter["MinValue"]);
            }
            else if (this.AdditionalParameter["MinValue"].includes('##')) {
                const values = this.AdditionalParameter["MinValue"].match(new RegExp(/[^{}]+/g));
                const key = values ? values[0] : this.AdditionalParameter["MinValue"];
                const handlerData = this.apiDataService.getApiDataByHandler(this.AdditionalParameter["MinValue"].split('##')[0]);
                this.minValue = handlerData ? handlerData.value[key] : '';
            }
            else {
                this.minValue = this.appDataService.getFieldDataByFieldId(this.AdditionalParameter["MinValue"]);
            }
            // console.log("maxValue: ", this.maxValue);
        }
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
        this.onViewUnload();
    }
    ngOnDestroy() {
        // Do not forget to unsubscribe the event
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
        this.onViewUnload();
    }
    // ngAfterViewInit() {
    //   console.log(this.txtVal.nativeElement);
    // }
    // function returns the value whether to stop copy or paste event (return false means pause)
    // { "parameter_type": "Override", "value":"COPY||PASTE||CUT"} whichever event you want to stop
    onOverrideHandler(event) {
        if (this.AdditionalParameter["Override"]) {
            let returnValue = true;
            this.AdditionalParameter["Override"].split('||').map((value, i) => {
                if (value.toLowerCase() == event.type) {
                    returnValue = false;
                }
            });
            return returnValue;
        }
        else {
            return true;
        }
    }
    onViewDataInit() {
        this.oldFieldData = this.fieldData;
        let oldData = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
        oldData = oldData ? oldData : [];
        oldData.forEach((value) => {
            this.possibleOptions.push(value);
        });
        this.isValid = this.isMandatory && this.possibleOptions.length == 0 ? false : true;
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // from possible values with type Options
        if (this.fieldData.possible_value_type == "Options" && Array.isArray(this.fieldData.possible_values)) {
            this.fieldData.possible_values.forEach((val) => {
                // this.allOptions.push(val.split('||')[val.split('||').length - 1]);
                this.allOptions.push({ value: val.split('||')[0], name: val.split('||')[val.split('||').length - 1] });
            });
        }
        this.custom_class_name = this.fieldData.field_style && this.fieldData.field_style.custom_class_name ? this.fieldData.field_style.custom_class_name.split('|') : [];
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
            : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
        this.inputValue = this.possibleOptions && Array.isArray(this.possibleOptions) ? this.possibleOptions : [];
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                this.AdditionalParameter[parameter.parameter_type] = parameter.value;
            }
        }
        if (this.AdditionalParameter["AutoCompleteText"] && this.AdditionalParameter["AutoCompleteText"] == "OFF") {
            this.autocomplete = true;
        }
        //for Validate AND Mandatory error
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                document.getElementById(this.fieldData.html_id).focus();
            };
        }
    }
    onValueChange(event) {
        // console.log("onValueChange: ",event)
    }
    onTagClick(event) {
        this.filteredOptions = this.tabCtrl.valueChanges.pipe(startWith(null), map((fruit) => (fruit ? this._filter(fruit) : this.allOptions.slice())));
        // console.log("On Click: ",this.filteredOptions)
    }
    onChange(event) {
        // this.setSessionData(newValue);
        // console.log("onChange",event);
    }
    onSessionDataUpdated(value, state) {
        // this.isValid = state.valid;
        this.isValid = (this.isMandatory && this.possibleOptions.length == 0) || (this.minValue && this.possibleOptions.length < Number(this.minValue ? this.minValue : 1)) || (this.maxValue && this.possibleOptions.length > Number(this.maxValue ? this.maxValue : 1)) ? false : true;
        // if (this.$emitKeyDown) {
        //     this.$emitKeyDown.unsubscribe();
        // }
        this.updateFieldData(value, this.isValid);
        // Hide _ in input box
        /* if (this.AdditionalParameter["Data Format"]) {
            if (this.AdditionalParameter["Data Format"].length != value.length) {
                this.clearValue(state);
            }
        } */
        // trigger event list of focus out
        if (this.AdditionalParameter['ValidationCheck'] && this.AdditionalParameter['ValidationCheck'].toLowerCase() === 'true') {
            if (this.isValid) {
                if (this.oldInputValue !== value) {
                    this.onComponentEvent('OnChangeValue');
                }
                this.onComponentEvent('OnFocusOut');
            }
            else {
                return;
            }
        }
        else {
            if (this.oldInputValue !== value) {
                this.onComponentEvent('OnChangeValue');
            }
            this.onComponentEvent('OnFocusOut');
        }
    }
    concatData = (res) => {
        if (res.fid === this.fieldData.unique_id) {
            let success = false;
            let data;
            this.appDataService.getIndividualAppData(res['fid']).pipe(take(1)).subscribe(r => {
                if (r.length > 0) {
                    if (res['fid'] == r[0].id) {
                        success = true;
                        data = r[0];
                    }
                }
            });
            if (success) {
                let concatArrays = [];
                for (let i = 0; i < res.concatValues.length; i++) {
                    if (localStorage.getItem('singleApiKey') === 'true') {
                        concatArrays.push(this.appDataService.getFieldDataByFieldId(res.concatValues[i]));
                    }
                    else {
                        concatArrays.push(this.appDataService.getFieldDataByApiKey(res.concatValues[i], 'request'));
                    }
                }
                this.appDataService.updateAppData(Object.assign({}, data, { visible: data.visible, editable: data.editable, mandatory: data.mandatory, value: concatArrays }));
                this.inputValue = concatArrays;
            }
        }
    };
    clearValue(event) {
        this.showCross = false;
        this.inputValue = [];
        this.updateFieldData('');
    }
    onAPICallback(data) {
        // console.log("onAPICallback",data);
        // throw new Error('Method not implemented.');
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (resData !== null) {
            if (Array.isArray(resData) && this.isSingleApiKey) {
                this.fieldData.possible_values = resData;
                this.fieldData.possible_values.forEach((val) => {
                    // this.allOptions.push(val.split('||')[val.split('||').length - 1]);
                    this.allOptions.push({ value: val.split('||')[0], name: val.split('||')[val.split('||').length - 1] });
                });
                // this.allOptions = resData;
            }
            else {
                this.fieldValue = resData;
                this.updateFieldData(this.fieldValue);
            }
        }
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        if (Array.isArray(externalApiOptionValue)) {
                            this.fieldData.possible_values = externalApiOptionValue;
                            this.fieldData.possible_values.forEach((val) => {
                                if (parameter.value && parameter.value.split('[*]')[parameter.value.split('[*]').length - 1] == '' && typeof val == 'object') {
                                    this.allOptions.push({ value: val['value'], name: val['name'] });
                                }
                                else {
                                    // this.allOptions.push(val.split('||')[val.split('||').length - 1]);
                                    this.allOptions.push({ value: val.split('||')[0], name: val.split('||')[val.split('||').length - 1] });
                                }
                            });
                            // this.allOptions = resData;
                            // this.fieldData.possible_values = externalApiOptionValue;
                            // this.allOptions = externalApiOptionValue;
                        }
                        else {
                            console.error('Something Went Wrong in Picker !!!');
                        }
                    }
                }
            }
        }
        let oldData = this.appDataService.getFieldDataByFieldId(this.fieldData.html_id);
        oldData = oldData ? oldData : [];
        this.possibleOptions = [];
        oldData.forEach((value) => {
            let selectedObj = this.allOptions.filter(val => { if (val.value == value)
                return val; });
            if (selectedObj.length > 0) {
                this.possibleOptions.push(selectedObj[0]);
            }
        });
        // console.log("possibleOptions: ",this.possibleOptions)
    }
    onSetSessionData(apiKey, value) {
        // console.log("onSetSessionData",value);
        super.onSetSessionData(apiKey, value);
        this.setModalorSanckBarMessage(apiKey, value);
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
                // TODO Update
                let value = [];
                this.inputValue = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.AdditionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.inputValue = paramter.value;
                            value = paramter.value;
                        }
                    }
                }
                this.updateFieldData(value);
                // resetting the form field does not work because
                // once it gets reset if it is not touched again then the field won't get invalid
                // after the form gets submitted and errors won't show up
                // so we need to manually set the field as unTouched, Pristine , update value an validity and showErrorOnNext to true
                // this.tagField.control.reset();
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.fieldName) {
                    this.fieldName.reset(value);
                    this.fieldName.control.markAsUntouched();
                    this.fieldName.control.markAsPristine();
                    this.fieldName.control.updateValueAndValidity();
                }
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
            this.inputValue = get_data[unique_id_value];
            this.updateFieldData(this.inputValue);
        }
    }
    triggerEvent() {
        if (this.searchButtonEditable) {
            this.onComponentEvent('OnClick');
        }
    }
    setFieldValueOnSetValuesEvent(data) {
        // console.log("setFieldValueOnSetValuesEvent",data);
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // console.log('Data', data);
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
                if (this.inputValue && Array.isArray(this.inputValue)) {
                    this.inputValue.forEach(element => {
                        if (element) {
                            this.possibleOptions.push({ value: element, name: element });
                        }
                    });
                }
            }
        }
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
        // const changeMap = {
        //     field_label: 'fieldData.field_label',
        //     placeholder_text: 'fieldData.placeholder_text',
        //     tooltip: 'fieldData.tooltip',
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    ngOnChanges(changes) {
        // console.log(changes, changes.editableCondition)
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
        if (!this.isEditable) {
            this.canDeleteTagsFlag = false;
        }
        else {
            if (this.AdditionalParameter["canDeleteTags"]) {
                this.canDeleteTagsFlag = this.AdditionalParameter["canDeleteTags"].toLowerCase() == "true" ? true : false;
            }
        }
        if (changes.rowData && changes.rowData.currentValue && this.inputValue !== changes.rowData.currentValue.value) {
            this.inputValue = changes.rowData.currentValue.value;
        }
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
    static ɵfac = function CeeTagComponent_Factory(t) { return new (t || CeeTagComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTagComponent, selectors: [["app-cee-tag"]], viewQuery: function CeeTagComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.fieldName = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.tabInput = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["chipList", ""], ["tabInput", ""], ["auto", "matAutocomplete"], ["singleErrorMessage", ""], [3, "class", "id", 4, "ngIf"], [3, "id"], ["appearance", "fill", 1, "example-chip-list"], ["type", "button", 3, "class", "tooltip", 4, "ngIf"], [4, "ngIf"], ["aria-label", "Fruit selection"], [3, "removed", 4, "ngFor", "ngForOf"], [3, "click", "ngModelChange", "matChipInputTokenEnd", "placeholder", "required", "ngStyle", "formControl", "matAutocomplete", "matChipInputFor", "matChipInputSeparatorKeyCodes"], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Add", 3, "click", 4, "ngIf"], [3, "optionSelected"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], [4, "ngFor", "ngForOf"], ["class", "info-message-wrapper", 4, "ngIf"], ["type", "button", 3, "tooltip"], ["class", "mandetory-mark", 4, "ngIf"], [1, "mandetory-mark"], [3, "removed"], ["matChipRemove", "", 4, "ngIf"], ["matChipRemove", ""], ["matSuffix", "", "mat-icon-button", "", "aria-label", "Add", 3, "click"], ["fontIcon", "add"], [3, "value"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"], [1, "info-message-wrapper"], [1, "alert", "alert-dark"], [1, "alert", "alert-warning"]], template: function CeeTagComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTagComponent_div_0_Template, 22, 41, "div", 4);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatFormFieldModule, i12.MatFormField, i12.MatLabel, i12.MatSuffix, MatInputModule, MatChipsModule, i13.MatChipGrid, i13.MatChipInput, i13.MatChipRemove, i13.MatChipRow, MatIconModule, i14.MatIcon, MatAutocompleteModule, i15.MatAutocomplete, i16.MatOption, i15.MatAutocompleteTrigger, NgStyle, ReactiveFormsModule, i17.DefaultValueAccessor, i17.NgControlStatus, i17.RequiredValidator, i17.FormControlDirective, CommonModule, i18.NgForOf, i18.NgIf, i18.AsyncPipe, i18.KeyValuePipe, TooltipModule, i19.TooltipDirective], styles: [".mat-full-width[_ngcontent-%COMP%], .example-chip-list[_ngcontent-%COMP%]{width:100%}  .example-chip-list .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent!important;padding:.5em 0 0!important}  .example-chip-list .mat-form-field-infix{border-top:.84375em solid #fff}  .example-chip-list .mat-chip.mat-standard-chip .mat-chip-remove{color:#dc3545!important;opacity:1!important}  .example-chip-list .mat-standard-chip .mat-chip-remove, .mat-standard-chip[_ngcontent-%COMP%]   .mat-chip-trailing-icon[_ngcontent-%COMP%]{margin:-10px 10px 0 0!important;border:none;background:transparent}  .example-chip-list .custom-select, .form-control[_ngcontent-%COMP%]{box-shadow:0 3px 3px #00000029!important;border-radius:4px!important}  .example-chip-list .mat-form-field-underline{display:none!important}  .example-chip-list .mat-form-field-appearance-fill .mat-form-field-label{transform:translateY(14px);padding-left:3px}  .example-chip-list input.form-control.invalid{border:1px solid #eb1122!important}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTagComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-tag', standalone: true, imports: [MatFormFieldModule, MatInputModule, CustomTooltipDirective, MatChipsModule, MatIconModule, MatAutocompleteModule, NgStyle, ReactiveFormsModule, MatChipsModule, CommonModule, TooltipModule], template: "<div class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\" id=\"{{html_id }}\" *ngIf=\"isVisible\">\r\n    <mat-form-field class=\"example-chip-list\" appearance=\"fill\">\r\n\t\t<!-- Tooltip with informaion icon -->\r\n\t\t<button *ngIf=\"hasTooltip\" type=\"button\"\r\n\t\tclass=\"btn-tooltip pull-right ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n\t\t[attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip\" [tooltip]=\"fieldData.tooltip\">\r\n\t\ti\r\n\t\t</button>\r\n        <mat-label *ngIf=\"fieldData.field_label!=''\">\r\n            {{fieldData.field_label}}\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n        </mat-label>\r\n        <mat-chip-grid #chipList aria-label=\"Fruit selection\">\r\n          <mat-chip-row\r\n            *ngFor=\"let fruit of possibleOptions\"\r\n            (removed)=\"remove(fruit.value, tabCtrl)\">\r\n            {{fruit.name}}\r\n            <button matChipRemove *ngIf=\"canDeleteTagsFlag\">\r\n              <mat-icon>cancel</mat-icon>\r\n            </button>\r\n          </mat-chip-row>\r\n          <input\r\n            placeholder=\"{{fieldData.placeholder_text}}\" #tabInput\r\n            class=\"form-control {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}} {{ ( !isValid && (tabCtrl.dirty || tabCtrl.touched || showErrorOnNext)) ? 'invalid' : 'valid' }}\"\r\n            [attr.disabled]=\"!isEditable\"\r\n            [attr.aria-label]=\"'Select a ' + fieldData.field_label \" [attr.tabindex]=\"tabIndexValue\"\r\n            [required]=\"isMandatory\"\r\n            [ngStyle]=\"{\r\n\t\t\t'font-family': fieldData.field_style.font_name,\r\n\t\t\t'font-size': fieldData.field_style.font_size,\r\n\t\t\t'font-style': fieldData.field_style.font_style,\r\n\t\t\tcolor: fieldData.field_style.font_color,\r\n\t\t\t'border-color': fieldData.field_style.border_color,\r\n\t\t\theight: fieldData.field_style.field_height,\r\n\t\t\twidth: fieldData.field_style.field_width,\r\n\t\t\t'background-color': fieldData.field_style.background_color\r\n\t\t\t}\"\r\n\t\t\t(click)=\"onTagClick($event)\"\r\n            (ngModelChange)=\"onChange($event)\"\r\n            [formControl]=\"tabCtrl\"\r\n            [matAutocomplete]=\"auto\"\r\n            [matChipInputFor]=\"chipList\"\r\n            [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\"\r\n            (matChipInputTokenEnd)=\"add($event,tabCtrl)\">\r\n\t\t\t<button *ngIf=\"tabCtrl && tabCtrl.value\" matSuffix mat-icon-button aria-label=\"Add\" (click)=\"add(tabCtrl.value,tabCtrl)\">\r\n\t\t\t\t<mat-icon fontIcon=\"add\"></mat-icon>\r\n\t\t\t</button>\r\n        </mat-chip-grid>\r\n        <mat-autocomplete #auto=\"matAutocomplete\" (optionSelected)=\"selected($event,tabCtrl)\">\r\n          <mat-option *ngFor=\"let opt of filteredOptions | async\" [value]=\"opt\">\r\n            {{opt.name}}\r\n          </mat-option>\r\n        </mat-autocomplete>\r\n\t\t\r\n\t\t<!-- Tooltip Template -->\r\n        <!-- <ng-template #tooltipTemplate>\r\n            <div class=\"tooltip_container\">\r\n                <span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n            </div>\r\n        </ng-template> -->\r\n    </mat-form-field>\r\n    <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n\t\t<ng-container *ngFor=\"let message of messages\">\r\n\t\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t\t*ngIf=\"(showErrorOnNext && !isEditable) || (!isValid && ((fieldName && (fieldName.dirty || fieldName.touched)) || showErrorOnNext ))\">\r\n\t\t\t\t<div *ngIf=\"(showErrorOnNext && !isEditable) || (!isValid)\">\r\n\t\t\t\t\t<p *ngIf=\"isMandatory && message.type == 'Mandatory'\"\r\n\t\t\t\t\t\t[ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n\t\t\t\t\t\t{{returnMessageData(message.code).message_text}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n\t<ng-template #singleErrorMessage>\r\n\t\t<div class=\"error-message-wrapper\"\r\n\t\t\t*ngIf=\"!isValid && ((fieldName && (fieldName.dirty || fieldName.touched)) || showErrorOnNext)\">\r\n\t\t\t<div *ngIf=\"!isValid\">\r\n\t\t\t\t<p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n\t\t\t\t\t{{errorMessageData.message_text}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-template>\r\n\r\n\t<ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n\t\t<div class=\"error-message-wrapper\">\r\n\t\t\t<div>\r\n\t\t\t\t<p [ngStyle]=\"{'color': item.value.color}\">\r\n\t\t\t\t\t{{item.value.message_text}}</p>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\r\n\t<ng-container>\r\n\t\t<div class=\"info-message-wrapper\" *ngIf=\"tabCtrl && tabCtrl.value\">\r\n\t\t\t<div class=\"alert alert-dark\">Please hit enter after inserting the value to the tag</div>\r\n\t\t</div>\r\n\t\t<div class=\"info-message-wrapper\" *ngIf=\"infoMsg != ''\">\r\n\t\t\t<div class=\"alert alert-warning\"><strong>Warning:</strong> {{infoMsg}}</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n</div>", styles: [".mat-full-width,.example-chip-list{width:100%}::ng-deep .example-chip-list .mat-form-field-appearance-fill .mat-form-field-flex{background-color:transparent!important;padding:.5em 0 0!important}::ng-deep .example-chip-list .mat-form-field-infix{border-top:.84375em solid #fff}::ng-deep .example-chip-list .mat-chip.mat-standard-chip .mat-chip-remove{color:#dc3545!important;opacity:1!important}::ng-deep .example-chip-list .mat-standard-chip .mat-chip-remove,.mat-standard-chip .mat-chip-trailing-icon{margin:-10px 10px 0 0!important;border:none;background:transparent}::ng-deep .example-chip-list .custom-select,.form-control{box-shadow:0 3px 3px #00000029!important;border-radius:4px!important}::ng-deep .example-chip-list .mat-form-field-underline{display:none!important}::ng-deep .example-chip-list .mat-form-field-appearance-fill .mat-form-field-label{transform:translateY(14px);padding-left:3px}::ng-deep .example-chip-list input.form-control.invalid{border:1px solid #eb1122!important}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.CeeApiService }, { type: i11.Router }], { fieldName: [{
            type: ViewChild,
            args: ['fieldName', { static: false }]
        }], tabInput: [{
            type: ViewChild,
            args: ['tabInput', { static: false }]
        }], stepId: [{
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
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTagComponent, { className: "CeeTagComponent", filePath: "lib\\field-components\\cee-tag\\cee-tag.component.ts", lineNumber: 41 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRhZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtdGFnL2NlZS10YWcuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRhZy9jZWUtdGFnLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE2RCxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFLM0ksT0FBTyxFQUFlLG1CQUFtQixFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFHbEUsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUdwRSxPQUFPLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUV0RCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFNckQsT0FBTyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUVyRCxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNwRCxPQUFPLEVBQUUsWUFBWSxFQUFFLE9BQU8sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxxQkFBcUIsRUFBRSxNQUFNLGdDQUFn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QixZQUFZLDBEQUFFLGFBQWE7O2lGQUc1TCxlQUFlO2NBUjNCLFNBQVM7MkJBQ0ksYUFBYSxjQUdYLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxzQkFBc0IsRUFBRSxjQUFjLEVBQUUsYUFBYSxFQUFFLHFCQUFxQixFQUFFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxjQUFjLEVBQUUsWUFBWSxFQUFFLGFBQWEsQ0FBQzttV0FJM0osU0FBUztrQkFBbkQsU0FBUzttQkFBQyxXQUFXLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBQ0MsUUFBUTtrQkFBakQsU0FBUzttQkFBQyxVQUFVLEVBQUUsRUFBRSxNQUFNLEVBQUUsS0FBSyxFQUFFO1lBRXZCLE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLOztrRkFaRyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0LCBPbkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgT3V0cHV0LCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIFZpZXdDaGlsZCwgRWxlbWVudFJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUsIFJlYWN0aXZlRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tICcuLi9jZWUtYmFzZS1jbGFzcyc7XHJcbmltcG9ydCB7IFNlc3Npb25LZXlVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2Vzc2lvbi1rZXktdXRpbCc7XHJcbmltcG9ydCB7IFdmZUVuY3J5cHRpb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWVuY3J5cHRpb24tdXRpbCc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IG1hcCwgc3RhcnRXaXRoLCB0YWtlIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDb21tb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29tbW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgTmdNb2RlbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ09NTUEsIEVOVEVSIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL2tleWNvZGVzJztcclxuXHJcbmltcG9ydCB7IFVudHlwZWRGb3JtQ29udHJvbCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0QXV0b2NvbXBsZXRlTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYXV0b2NvbXBsZXRlJztcclxuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xyXG5pbXBvcnQgeyBNYXRDaGlwTGlzdGJveENoYW5nZSwgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XHJcbmltcG9ydCB7IEN1c3RvbVRvb2x0aXBEaXJlY3RpdmUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL2FwcC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS10YWcnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS10YWcuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLXRhZy5jb21wb25lbnQuc2NzcycsICcuLi9maWVsZC1jb21tb24uc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBDdXN0b21Ub29sdGlwRGlyZWN0aXZlLCBNYXRDaGlwc01vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0QXV0b2NvbXBsZXRlTW9kdWxlLCBOZ1N0eWxlLCBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBNYXRDaGlwc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENlZVRhZ0NvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBAVmlld0NoaWxkKCdmaWVsZE5hbWUnLCB7IHN0YXRpYzogZmFsc2UgfSkgZmllbGROYW1lOiBOZ01vZGVsO1xyXG4gICAgQFZpZXdDaGlsZCgndGFiSW5wdXQnLCB7IHN0YXRpYzogZmFsc2UgfSkgdGFiSW5wdXQ6IEVsZW1lbnRSZWY8SFRNTElucHV0RWxlbWVudD47XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwcmltYXJ5S2V5SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogb2JqZWN0O1xyXG5cclxuICAgIHZhcmlhYmxlT2JqZWN0ID0ge307IC8vIHZhcmlhYmxlIG9iamVjdFxyXG5cclxuICAgIHdmZUVuY3J5cHRpb246IFdmZUVuY3J5cHRpb25VdGlsO1xyXG4gICAgZGVjbGFyZSBzZXNzaW9uS2V5VXRpbDogU2Vzc2lvbktleVV0aWw7XHJcbiAgICB2YWxpZGF0aW9uUmVnZXggPSAnJztcclxuICAgIGlucHV0VmFsdWUgPSBbXTtcclxuICAgIGJ1dHRvbkxhYmVsID0gJyc7XHJcbiAgICBzZWFyY2hCdXR0b25FZGl0YWJsZSA9IHRydWU7XHJcbiAgICBpc1NlYXJjaCA9IGZhbHNlO1xyXG4gICAgaXNWYWxpZCA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFdoZW4gXCJEYXRhIEZvcm1hdFwiIGF2YWlsYWJsZVxyXG4gICAgbWFzazogYW55ID0gZmFsc2U7XHJcbiAgICBtYXNrRGlydHk6IGFueSA9IGZhbHNlO1xyXG5cclxuICAgIC8vIFdoZW4gXCJBUEkgRGF0YSBGb3JtYXRcIiBhdmFpbGFibGVcclxuICAgIGFwaURhdGFGb3JtYXQgPSAnJztcclxuICAgIGFwaURhdGFGb3JtYXRNYXNrOiBhbnkgPSBmYWxzZTtcclxuXHJcbiAgICAvLyAkZW1pdEtleURvd246IFN1YnNjcmlwdGlvbjtcclxuICAgIHRpbWVyID0gbnVsbDtcclxuICAgIHRpbWVyMSA9IG51bGw7XHJcbiAgICBodG1sX2lkID0gJyc7XHJcbiAgICBhdXRvY29tcGxldGUgPSBmYWxzZTtcclxuICAgIHNob3dDcm9zcyA9IGZhbHNlO1xyXG4gICAgQWRkaXRpb25hbFBhcmFtZXRlcjogYW55ID0ge307XHJcbiAgICBoaWRlID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIG9sZEZpZWxkRGF0YTogYW55ID0ge307XHJcbiAgICBpc1NldCA9IGZhbHNlO1xyXG4gICAgaW5wdXRUeXBlID0gJ3RleHQnO1xyXG4gICAgb2xkSW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgY2FuRGVsZXRlVGFnc0ZsYWc6IGFueSA9IHRydWU7XHJcbiAgICBjYW5BZGREdXBsaWNhdGVUYWdzRmxhZzogYW55ID0gdHJ1ZTtcclxuICAgIGluZm9Nc2c6IGFueSA9IFwiXCI7XHJcbiAgICBzdG9yZUludGVybmFsVmFsdWU6IGFueSA9IGZhbHNlO1xyXG5cclxuICAgIHNlcGFyYXRvcktleXNDb2RlczogbnVtYmVyW10gPSBbRU5URVIsIENPTU1BXTtcclxuICAgIHRhYkN0cmwgPSBuZXcgVW50eXBlZEZvcm1Db250cm9sKCk7XHJcbiAgICBmaWx0ZXJlZE9wdGlvbnM6IE9ic2VydmFibGU8c3RyaW5nW10+O1xyXG4gICAgcG9zc2libGVPcHRpb25zOiBhbnkgPSBbXTtcclxuICAgIGFsbE9wdGlvbnM6IGFueSA9IFtdO1xyXG5cclxuICAgIGN1c3RvbV9jbGFzc19uYW1lOiBzdHJpbmdbXTtcclxuICAgIG1heFZhbHVlOiBhbnk7XHJcbiAgICBtaW5WYWx1ZTogYW55O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgZGlhbG9nLCBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyKTtcclxuICAgICAgICB0aGlzLndmZUVuY3J5cHRpb24gPSBuZXcgV2ZlRW5jcnlwdGlvblV0aWwoKTtcclxuICAgICAgICB0aGlzLnNlc3Npb25LZXlVdGlsID0gbmV3IFNlc3Npb25LZXlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy5jb21tb25VdGlsID0gbmV3IENvbW1vblV0aWwoKTtcclxuICAgICAgICB0aGlzLmZpbHRlcmVkT3B0aW9ucyA9IHRoaXMudGFiQ3RybC52YWx1ZUNoYW5nZXMucGlwZShcclxuICAgICAgICAgICAgc3RhcnRXaXRoKG51bGwpLFxyXG4gICAgICAgICAgICBtYXAoKGZydWl0OiBzdHJpbmcgfCBudWxsKSA9PiAoZnJ1aXQgPyB0aGlzLl9maWx0ZXIoZnJ1aXQpIDogdGhpcy5hbGxPcHRpb25zLnNsaWNlKCkpKSxcclxuICAgICAgICApO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYWxsT3B0aW9uczogXCIsdGhpcy5hbGxPcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoZXZlbnQ6IGFueSwgc3RhdGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGxldCBlbGVtZW50VmFsdWUgPSB0eXBlb2YoZXZlbnQpID09ICdzdHJpbmcnID8gZXZlbnQgOiBldmVudC52YWx1ZTtcclxuICAgICAgICB0aGlzLnNldE1heE1pbigpO1xyXG4gICAgICAgIGNvbnN0IG5ld192YWx1ZSA9IChlbGVtZW50VmFsdWUgfHwgJycpLnRyaW0oKTtcclxuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5wb3NzaWJsZU9wdGlvbnMubWFwKGEgPT4gYS52YWx1ZSk7XHJcbiAgICAgICAgaWYgKHJlc3VsdC5pbmRleE9mKG5ld192YWx1ZSkgIT09IC0xICYmICF0aGlzLmNhbkFkZER1cGxpY2F0ZVRhZ3NGbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb01zZyA9IFwiRHVwbGljYXRlIHRhZ3MgYXJlIG5vdCBhbGxvd2VkIVwiO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbmZvTXNnID0gXCJcIjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLm1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wb3NzaWJsZU9wdGlvbnMubGVuZ3RoIDwgTnVtYmVyKHRoaXMubWF4VmFsdWUgPyB0aGlzLm1heFZhbHVlIDogMCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9Nc2cgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wib25seUZyb21Ecm9wZG93blwiXSB8fCAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wib25seUZyb21Ecm9wZG93blwiXSAmJiB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJvbmx5RnJvbURyb3Bkb3duXCJdLnRvTG93ZXJDYXNlKCkgIT0gXCJ0cnVlXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFkZCBvdXIgZnJ1aXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzLnBvc3NpYmxlT3B0aW9uczogXCIsdGhpcy5wb3NzaWJsZU9wdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChuZXdfdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVPcHRpb25zLnB1c2goe3ZhbHVlOiBuZXdfdmFsdWUsIG5hbWU6IG5ld192YWx1ZX0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvbGRBcnIgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlZhbHVlOiBcIix0aGlzLnBvc3NpYmxlT3B0aW9uc1t0aGlzLnBvc3NpYmxlT3B0aW9ucy5sZW5ndGggLSAxXVsndmFsdWUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvbGRBcnI6IFwiLG9sZEFycix0aGlzLnBvc3NpYmxlT3B0aW9uc1t0aGlzLnBvc3NpYmxlT3B0aW9ucy5sZW5ndGggLSAxXVsndmFsdWUnXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FyciA9IG9sZEFyciA/IFsuLi5vbGRBcnIsIHRoaXMucG9zc2libGVPcHRpb25zW3RoaXMucG9zc2libGVPcHRpb25zLmxlbmd0aCAtIDFdWyd2YWx1ZSddXSA6IFt0aGlzLnBvc3NpYmxlT3B0aW9uc1t0aGlzLnBvc3NpYmxlT3B0aW9ucy5sZW5ndGggLSAxXVsndmFsdWUnXV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZChuZXdBcnIsIHN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgdGhlIGlucHV0IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGV2ZW50LmNoaXBJbnB1dCEuY2xlYXIoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudGFiSW5wdXQubmF0aXZlRWxlbWVudC52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRhYkN0cmwuc2V0VmFsdWUoJycpXHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbmZvTXNnID0gXCJUYWdzIGNhbiBiZSBhZGRlZCBmcm9tIGRyb3Bkb3duIG9ubHkhXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmluZm9Nc2cgPSBcIk1heGltdW0gXCIgKyB0aGlzLm1heFZhbHVlICsgXCIgdGFncyBhcmUgYWxsb3dlZCFcIjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAobmV3X3ZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc3NpYmxlT3B0aW9ucy5wdXNoKHt2YWx1ZTogbmV3X3ZhbHVlLCBuYW1lOiBuZXdfdmFsdWV9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgb2xkQXJyID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5maWVsZERhdGEuaHRtbF9pZClcclxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IG9sZEFyciA/IFsuLi5vbGRBcnIsIHRoaXMucG9zc2libGVPcHRpb25zW3RoaXMucG9zc2libGVPcHRpb25zLmxlbmd0aCAtIDFdWyd2YWx1ZSddXSA6IFt0aGlzLnBvc3NpYmxlT3B0aW9uc1t0aGlzLnBvc3NpYmxlT3B0aW9ucy5sZW5ndGggLSAxXVsndmFsdWUnXV1cclxuICAgICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZChuZXdBcnIsIHN0YXRlKTtcclxuICAgICAgICAgICAgdGhpcy50YWJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgIHRoaXMudGFiQ3RybC5zZXRWYWx1ZSgnJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlKGZydWl0OiBhbnksIHN0YXRlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnNldE1heE1pbigpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLmNhbkRlbGV0ZVRhZ3NGbGFnKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5wb3NzaWJsZU9wdGlvbnMuZmluZEluZGV4KHAgPT4gcC52YWx1ZSA9PSBmcnVpdCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZU9wdGlvbnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gUmVtb3ZlIGZyb20gQXBwIERhdGFcclxuICAgICAgICAgICAgdmFyIG9sZEFyciA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuZmllbGREYXRhLmh0bWxfaWQpXHJcbiAgICAgICAgICAgIHZhciBuZXdBcnIgPSBvbGRBcnIuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbSAhPT0gZnJ1aXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgdGhpcy5vblNlc3Npb25EYXRhVXBkYXRlZChuZXdBcnIsIHN0YXRlKTtcclxuICAgICAgICAgICAgdGhpcy5pbmZvTXNnID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMubWluVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zc2libGVPcHRpb25zLmxlbmd0aCA8PSBOdW1iZXIodGhpcy5taW5WYWx1ZSA/IHRoaXMubWluVmFsdWUgOiAxKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvTXNnID0gXCJNaW5pbXVtIFwiICsgdGhpcy5taW5WYWx1ZSArIFwiIHRhZ3MgbmVlZGVkIVwiO1xyXG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvTXNnID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZWxlY3RlZChldmVudDogYW55LCBzdGF0ZTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50Lm9wdGlvbiAmJiBldmVudC5vcHRpb24udmFsdWUgJiYgdGhpcy5wb3NzaWJsZU9wdGlvbnMuaW5kZXhPZihldmVudC5vcHRpb24udmFsdWUpICE9PSAtMSAmJiAhdGhpcy5jYW5BZGREdXBsaWNhdGVUYWdzRmxhZykge1xyXG4gICAgICAgICAgICB0aGlzLmluZm9Nc2cgPSBcIkR1cGxpY2F0ZSB0YWdzIGFyZSBub3QgYWxsb3dlZCFcIjtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5mb01zZyA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLm1heFZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvc3NpYmxlT3B0aW9ucy5sZW5ndGggPCBOdW1iZXIodGhpcy5tYXhWYWx1ZSA/IHRoaXMubWF4VmFsdWUgOiAwKSAmJiBldmVudCAmJiBldmVudC5vcHRpb24gJiYgZXZlbnQub3B0aW9uLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9Nc2cgPSBcIlwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZU9wdGlvbnMucHVzaChldmVudC5vcHRpb24udmFsdWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvTXNnID0gXCJNYXhpbXVtIFwiICsgdGhpcy5tYXhWYWx1ZSArIFwiIHRhZ3MgYXJlIGFsbG93ZWQhXCI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zc2libGVPcHRpb25zLnB1c2goZXZlbnQub3B0aW9uLnZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy50YWJJbnB1dC5uYXRpdmVFbGVtZW50LnZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy50YWJDdHJsLnNldFZhbHVlKCcnKVxyXG4gICAgICAgIGxldCBvbGRBcnIgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKVxyXG4gICAgICAgIGxldCBuZXdBcnIgPSBbLi4ub2xkQXJyLCB0aGlzLnBvc3NpYmxlT3B0aW9uc1t0aGlzLnBvc3NpYmxlT3B0aW9ucy5sZW5ndGggLSAxXVsndmFsdWUnXV1cclxuICAgICAgICB0aGlzLm9uU2Vzc2lvbkRhdGFVcGRhdGVkKG5ld0Fyciwgc3RhdGUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibXVsdGlwbGVFcnJvck1lc3NhZ2U6IFwiLCB0aGlzLnRhYkN0cmwpXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlV2FybmluZygpIHtcclxuICAgICAgICBpZiAodGhpcy5tYXhWYWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb3NzaWJsZU9wdGlvbnMubGVuZ3RoID4gTnVtYmVyKHRoaXMubWF4VmFsdWUgPyB0aGlzLm1heFZhbHVlIDogMCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5mb01zZyA9IFwiTWF4aW11bSBcIiArIHRoaXMubWF4VmFsdWUgKyBcIiB0YWdzIGFyZSBhbGxvd2VkIVwiO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvTXNnID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWluVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9zc2libGVPcHRpb25zLmxlbmd0aCA8IE51bWJlcih0aGlzLm1pblZhbHVlID8gdGhpcy5taW5WYWx1ZSA6IDEpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluZm9Nc2cgPSBcIk1pbmltdW0gXCIgKyB0aGlzLm1pblZhbHVlICsgXCIgdGFncyBuZWVkZWQhXCI7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIXRoaXMubWF4VmFsdWUgfHwgKHRoaXMubWF4VmFsdWUgJiYgdGhpcy5wb3NzaWJsZU9wdGlvbnMubGVuZ3RoIDw9IE51bWJlcih0aGlzLm1heFZhbHVlID8gdGhpcy5tYXhWYWx1ZSA6IDApKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmZvTXNnID0gXCJcIjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImh0bWxfaWQ6IFwiLHRoaXMuZmllbGREYXRhLmh0bWxfaWQpXHJcbiAgICAgICAgbGV0IG9sZEFyciA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuZmllbGREYXRhLmh0bWxfaWQpXHJcbiAgICAgICAgb2xkQXJyID0gb2xkQXJyID8gb2xkQXJyIDogW107XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJvbGRBcnI6IFwiLG9sZEFycilcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSAodGhpcy5pc01hbmRhdG9yeSAmJiB0aGlzLnBvc3NpYmxlT3B0aW9ucy5sZW5ndGggPT0gMCkgfHwgKHRoaXMubWluVmFsdWUgJiYgdGhpcy5wb3NzaWJsZU9wdGlvbnMubGVuZ3RoIDwgTnVtYmVyKHRoaXMubWluVmFsdWUgPyB0aGlzLm1pblZhbHVlIDogMSkpIHx8ICh0aGlzLm1heFZhbHVlICYmIHRoaXMucG9zc2libGVPcHRpb25zLmxlbmd0aCA+IE51bWJlcih0aGlzLm1heFZhbHVlID8gdGhpcy5tYXhWYWx1ZSA6IDEpKSA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlzVmFsaWQ6IFwiLHRoaXMuaXNWYWxpZClcclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVUYWdGaWVsZERhdGEoWy4uLm9sZEFycl0sIHRoaXMuaXNWYWxpZCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlVGFnRmllbGREYXRhKGRhdGE6IGFueSwgaXNWYWxpZDogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICAvLyBjaGVjayBpZiB0aGUgdmFsaWRhdGlvbiBpcyBjdXN0b20gdmFsaWRhdGlvbiBwYWdlXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmN1c3RvbUNoZWNrICYmIGRhdGEgIT0gJycpIHtcclxuICAgICAgICAgICAgaXNWYWxpZCA9IHRoaXMuY3VzdG9tRXJyb3JzVmFsaWRhdGlvbi5nZXRNZXNzYWdlcyh0aGlzLmFwcERhdGEuaWQsIGRhdGEpLmxlbmd0aCA/IGZhbHNlIDogaXNWYWxpZDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMudmFsaWQgPSBpc1ZhbGlkOyAvLyBhc3NpZ24gcGFzc2VkIG9yIGZhaWxlZFxyXG4gICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IGRhdGE7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcHBEYXRhLCB7IGlzVmFsaWQgfSk7XHJcbiAgICAgICAgaWYgKHRoaXMubWFuYWdlU3RhdGUpIHtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBwRGF0YSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0aGlzLmlzVmlzaWJsZSxcclxuICAgICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdGhpcy5pc0VkaXRhYmxlLCBtYW5kYXRvcnk6IHRoaXMuaXNNYW5kYXRvcnksIGlzVmFsaWQsIHZhbHVlOiB0aGlzLmZpZWxkVmFsdWVcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfZmlsdGVyKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgaWYoIXZhbHVlKSB7IHJldHVybiB0aGlzLmFsbE9wdGlvbnM7IH1cclxuICAgICAgICBjb25zdCBmaWx0ZXJWYWx1ZSA9IHZhbHVlICYmIHR5cGVvZiB2YWx1ZSA9PSBcInN0cmluZ1wiID8gdmFsdWUudG9Mb3dlckNhc2UoKSA6ICggdmFsdWVbJ25hbWUnXSAmJiB0eXBlb2YgdmFsdWVbJ25hbWUnXSA9PSBcInN0cmluZ1wiID8gdmFsdWVbJ25hbWUnXS50b0xvd2VyQ2FzZSgpIDogJycgKTtcclxuICAgICAgICByZXR1cm4gdGhpcy5hbGxPcHRpb25zLmZpbHRlcihmcnVpdCA9PiBmcnVpdFsnbmFtZSddLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMoZmlsdGVyVmFsdWUpKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgICAgICBpZiAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiY2FuRGVsZXRlVGFnc1wiXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRlbGV0ZVRhZ3NGbGFnID0gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiY2FuRGVsZXRlVGFnc1wiXS50b0xvd2VyQ2FzZSgpID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZighdGhpcy5pc0VkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGVsZXRlVGFnc0ZsYWcgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcImNhbkFkZER1cGxpY2F0ZVRhZ3NcIl0pIHtcclxuICAgICAgICAgICAgdGhpcy5jYW5BZGREdXBsaWNhdGVUYWdzRmxhZyA9IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcImNhbkFkZER1cGxpY2F0ZVRhZ3NcIl0udG9Mb3dlckNhc2UoKSA9PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIlN0b3JlSW50ZXJuYWxWYWx1ZVwiXSkge1xyXG4gICAgICAgICAgICB0aGlzLnN0b3JlSW50ZXJuYWxWYWx1ZSA9IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIlN0b3JlSW50ZXJuYWxWYWx1ZVwiXS50b0xvd2VyQ2FzZSgpID09IFwidHJ1ZVwiID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zZXRNYXhNaW4oKTtcclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0W1xyXG4gICAgICAgICAgICAnZW1pdE9uQnV0dG9uVmFsaWRhdGlvbl8nICsgdGhpcy5maWVsZERhdGEuaHRtbF9pZFxyXG4gICAgICAgIF0gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UudmFsaWRhdGVCdXR0b25Gb3JUYWdFbWl0dGVyLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TWF4TWluKCk7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlV2FybmluZygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHNldE1heE1pbigpIHtcclxuICAgICAgICBpZih0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJNYXhWYWx1ZVwiXSAmJiB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJNYXhWYWx1ZVwiXSAhPSAnJykge1xyXG4gICAgICAgICAgICBpZih0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJNYXhWYWx1ZVwiXSAmJiAhaXNOYU4odGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiTWF4VmFsdWVcIl0pKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1heFZhbHVlID0gTnVtYmVyKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk1heFZhbHVlXCJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJNYXhWYWx1ZVwiXS5pbmNsdWRlcygnIyMnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWVzID0gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiTWF4VmFsdWVcIl0ubWF0Y2gobmV3IFJlZ0V4cCgvW157fV0rL2cpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHZhbHVlcyA/IHZhbHVlc1swXSA6IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk1heFZhbHVlXCJdO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlckRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiTWF4VmFsdWVcIl0uc3BsaXQoJyMjJylbMF0pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IGhhbmRsZXJEYXRhID8gaGFuZGxlckRhdGEudmFsdWVba2V5XSA6ICcnO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tYXhWYWx1ZSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk1heFZhbHVlXCJdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4VmFsdWU6IFwiLCB0aGlzLm1heFZhbHVlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk1pblZhbHVlXCJdICYmIHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk1pblZhbHVlXCJdICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk1pblZhbHVlXCJdICYmICFpc05hTih0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJNaW5WYWx1ZVwiXSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWluVmFsdWUgPSBOdW1iZXIodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiTWluVmFsdWVcIl0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk1pblZhbHVlXCJdLmluY2x1ZGVzKCcjIycpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJNaW5WYWx1ZVwiXS5tYXRjaChuZXcgUmVnRXhwKC9bXnt9XSsvZykpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qga2V5ID0gdmFsdWVzID8gdmFsdWVzWzBdIDogdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiTWluVmFsdWVcIl07XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyRGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcih0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJNaW5WYWx1ZVwiXS5zcGxpdCgnIyMnKVswXSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pblZhbHVlID0gaGFuZGxlckRhdGEgPyBoYW5kbGVyRGF0YS52YWx1ZVtrZXldIDogJyc7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pblZhbHVlID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiTWluVmFsdWVcIl0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJtYXhWYWx1ZTogXCIsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3Rba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpOiB2b2lkIHtcclxuICAgICAgICAvLyBEbyBub3QgZm9yZ2V0IHRvIHVuc3Vic2NyaWJlIHRoZSBldmVudFxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3Rba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMudHh0VmFsLm5hdGl2ZUVsZW1lbnQpO1xyXG4gICAgLy8gfVxyXG4gICAgLy8gZnVuY3Rpb24gcmV0dXJucyB0aGUgdmFsdWUgd2hldGhlciB0byBzdG9wIGNvcHkgb3IgcGFzdGUgZXZlbnQgKHJldHVybiBmYWxzZSBtZWFucyBwYXVzZSlcclxuICAgIC8vIHsgXCJwYXJhbWV0ZXJfdHlwZVwiOiBcIk92ZXJyaWRlXCIsIFwidmFsdWVcIjpcIkNPUFl8fFBBU1RFfHxDVVRcIn0gd2hpY2hldmVyIGV2ZW50IHlvdSB3YW50IHRvIHN0b3BcclxuICAgIG9uT3ZlcnJpZGVIYW5kbGVyKGV2ZW50KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk92ZXJyaWRlXCJdKSB7XHJcbiAgICAgICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIk92ZXJyaWRlXCJdLnNwbGl0KCd8fCcpLm1hcCgodmFsdWUsIGkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZS50b0xvd2VyQ2FzZSgpID09IGV2ZW50LnR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uVmlld0RhdGFJbml0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMub2xkRmllbGREYXRhID0gdGhpcy5maWVsZERhdGE7XHJcbiAgICAgICAgbGV0IG9sZERhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKTtcclxuICAgICAgICBvbGREYXRhID0gb2xkRGF0YSA/IG9sZERhdGEgOiBbXTtcclxuICAgICAgICBvbGREYXRhLmZvckVhY2goKHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucG9zc2libGVPcHRpb25zLnB1c2godmFsdWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9IHRoaXMuaXNNYW5kYXRvcnkgJiYgdGhpcy5wb3NzaWJsZU9wdGlvbnMubGVuZ3RoID09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgLy8gRm9yIHVuaXF1ZSBodG1sIGlkXHJcbiAgICAgICAgdGhpcy5odG1sX2lkID0gdGhpcy5maWVsZERhdGEuaHRtbF9pZDtcclxuICAgICAgICAvLyBmcm9tIHBvc3NpYmxlIHZhbHVlcyB3aXRoIHR5cGUgT3B0aW9uc1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZV90eXBlID09IFwiT3B0aW9uc1wiICYmIEFycmF5LmlzQXJyYXkodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFsbE9wdGlvbnMucHVzaCh2YWwuc3BsaXQoJ3x8JylbdmFsLnNwbGl0KCd8fCcpLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsT3B0aW9ucy5wdXNoKHt2YWx1ZTogdmFsLnNwbGl0KCd8fCcpWzBdLCBuYW1lOiB2YWwuc3BsaXQoJ3x8JylbdmFsLnNwbGl0KCd8fCcpLmxlbmd0aCAtIDFdfSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmN1c3RvbV9jbGFzc19uYW1lID0gdGhpcy5maWVsZERhdGEuZmllbGRfc3R5bGUgJiYgdGhpcy5maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUgPyB0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZS5zcGxpdCgnfCcpIDogW11cclxuXHJcbiAgICAgICAgdGhpcy50YWJJbmRleFZhbHVlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUYWJJbmRleCddO1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGlvblJlZ2V4ID0gKHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggJiYgdHlwZW9mIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXgud2ViID09ICdvYmplY3QnICYmIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXguV2ViICE9PSAnJykgPyB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4LndlYlxyXG4gICAgICAgICAgICA6ICh0eXBlb2YgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCA9PSAnc3RyaW5nJyAmJiB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4ICE9PSAnJykgPyB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4IDogJyc7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdGhpcy5wb3NzaWJsZU9wdGlvbnMgJiYgQXJyYXkuaXNBcnJheSh0aGlzLnBvc3NpYmxlT3B0aW9ucykgPyB0aGlzLnBvc3NpYmxlT3B0aW9ucyA6IFtdO1xyXG5cclxuICAgICAgICBpZih0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW1ldGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtZXRlci52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiQXV0b0NvbXBsZXRlVGV4dFwiXSAmJiB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJBdXRvQ29tcGxldGVUZXh0XCJdID09IFwiT0ZGXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5hdXRvY29tcGxldGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9mb3IgVmFsaWRhdGUgQU5EIE1hbmRhdG9yeSBlcnJvclxyXG4gICAgICAgIGlmICh0aGlzLnJvb3REYXRhICYmIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXSkge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ11bdGhpcy5maWVsZERhdGEuaHRtbF9pZF0gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKS5mb2N1cygpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblZhbHVlQ2hhbmdlKGV2ZW50OiBhbnkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uVmFsdWVDaGFuZ2U6IFwiLGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIG9uVGFnQ2xpY2soZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIHRoaXMuZmlsdGVyZWRPcHRpb25zID0gdGhpcy50YWJDdHJsLnZhbHVlQ2hhbmdlcy5waXBlKFxyXG4gICAgICAgICAgICBzdGFydFdpdGgobnVsbCksXHJcbiAgICAgICAgICAgIG1hcCgoZnJ1aXQ6IHN0cmluZyB8IG51bGwpID0+IChmcnVpdCA/IHRoaXMuX2ZpbHRlcihmcnVpdCkgOiB0aGlzLmFsbE9wdGlvbnMuc2xpY2UoKSkpLFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJPbiBDbGljazogXCIsdGhpcy5maWx0ZXJlZE9wdGlvbnMpXHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIC8vIHRoaXMuc2V0U2Vzc2lvbkRhdGEobmV3VmFsdWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwib25DaGFuZ2VcIixldmVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgb25TZXNzaW9uRGF0YVVwZGF0ZWQodmFsdWU6IGFueSwgc3RhdGU6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRoaXMuaXNWYWxpZCA9IHN0YXRlLnZhbGlkO1xyXG4gICAgICAgIHRoaXMuaXNWYWxpZCA9ICh0aGlzLmlzTWFuZGF0b3J5ICYmIHRoaXMucG9zc2libGVPcHRpb25zLmxlbmd0aCA9PSAwKSB8fCAodGhpcy5taW5WYWx1ZSAmJiB0aGlzLnBvc3NpYmxlT3B0aW9ucy5sZW5ndGggPCBOdW1iZXIodGhpcy5taW5WYWx1ZSA/IHRoaXMubWluVmFsdWUgOiAxKSkgfHwgKHRoaXMubWF4VmFsdWUgJiYgdGhpcy5wb3NzaWJsZU9wdGlvbnMubGVuZ3RoID4gTnVtYmVyKHRoaXMubWF4VmFsdWUgPyB0aGlzLm1heFZhbHVlIDogMSkpID8gZmFsc2UgOiB0cnVlO1xyXG4gICAgICAgIC8vIGlmICh0aGlzLiRlbWl0S2V5RG93bikge1xyXG4gICAgICAgIC8vICAgICB0aGlzLiRlbWl0S2V5RG93bi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodmFsdWUsIHRoaXMuaXNWYWxpZCk7XHJcblxyXG4gICAgICAgIC8vIEhpZGUgXyBpbiBpbnB1dCBib3hcclxuICAgICAgICAvKiBpZiAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW1wiRGF0YSBGb3JtYXRcIl0pIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcIkRhdGEgRm9ybWF0XCJdLmxlbmd0aCAhPSB2YWx1ZS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYXJWYWx1ZShzdGF0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9ICovXHJcblxyXG4gICAgICAgIC8vIHRyaWdnZXIgZXZlbnQgbGlzdCBvZiBmb2N1cyBvdXRcclxuICAgICAgICBpZiAodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydWYWxpZGF0aW9uQ2hlY2snXSAmJiB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1ZhbGlkYXRpb25DaGVjayddLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5vbGRJbnB1dFZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DaGFuZ2VWYWx1ZScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkZvY3VzT3V0Jyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5vbGRJbnB1dFZhbHVlICE9PSB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNoYW5nZVZhbHVlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkZvY3VzT3V0Jyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhID0gKHJlcykgPT4ge1xyXG4gICAgICAgIGlmIChyZXMuZmlkID09PSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgbGV0IHN1Y2Nlc3MgPSBmYWxzZTtcclxuICAgICAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0SW5kaXZpZHVhbEFwcERhdGEocmVzWydmaWQnXSkucGlwZSh0YWtlKDEpKS5zdWJzY3JpYmUociA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoci5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc1snZmlkJ10gPT0gclswXS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdWNjZXNzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHJbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgaWYgKHN1Y2Nlc3MpIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb25jYXRBcnJheXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcmVzLmNvbmNhdFZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25jYXRBcnJheXMucHVzaCh0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZChyZXMuY29uY2F0VmFsdWVzW2ldKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uY2F0QXJyYXlzLnB1c2godGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUFwaUtleShyZXMuY29uY2F0VmFsdWVzW2ldLCAncmVxdWVzdCcpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgZGF0YSxcclxuICAgICAgICAgICAgICAgICAgICB7IHZpc2libGU6IGRhdGEudmlzaWJsZSwgZWRpdGFibGU6IGRhdGEuZWRpdGFibGUsIG1hbmRhdG9yeTogZGF0YS5tYW5kYXRvcnksIHZhbHVlOiBjb25jYXRBcnJheXMgfSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gY29uY2F0QXJyYXlzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY2xlYXJWYWx1ZShldmVudCkge1xyXG4gICAgICAgIHRoaXMuc2hvd0Nyb3NzID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gW107XHJcbiAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoJycpO1xyXG4gICAgfVxyXG4gICAgb25BUElDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uQVBJQ2FsbGJhY2tcIixkYXRhKTtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBjb25zdCByZXNEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHJlc0RhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzRGF0YSkgJiYgdGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gcmVzRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFsbE9wdGlvbnMucHVzaCh2YWwuc3BsaXQoJ3x8JylbdmFsLnNwbGl0KCd8fCcpLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbE9wdGlvbnMucHVzaCh7dmFsdWU6IHZhbC5zcGxpdCgnfHwnKVswXSwgbmFtZTogdmFsLnNwbGl0KCd8fCcpW3ZhbC5zcGxpdCgnfHwnKS5sZW5ndGggLSAxXX0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAvLyB0aGlzLmFsbE9wdGlvbnMgPSByZXNEYXRhO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gcmVzRGF0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZyb20gYWRkaXRpb25hbFBhcmFtZXRlciB3aXRoIHR5cGUgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZVxyXG4gICAgICAgIGlmKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdleHRlcm5hbEFwaU9wdGlvblZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsQXBpT3B0aW9uVmFsdWUgPSB0aGlzLmdldEV4dGVybmFsQXBpT3B0aW9uVmFsdWUocGFyYW1ldGVyLnZhbHVlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShleHRlcm5hbEFwaU9wdGlvblZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5mb3JFYWNoKCh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihwYXJhbWV0ZXIudmFsdWUgJiYgcGFyYW1ldGVyLnZhbHVlLnNwbGl0KCdbKl0nKVtwYXJhbWV0ZXIudmFsdWUuc3BsaXQoJ1sqXScpLmxlbmd0aC0xXSA9PSAnJyAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsT3B0aW9ucy5wdXNoKHt2YWx1ZTogdmFsWyd2YWx1ZSddLCBuYW1lOiB2YWxbJ25hbWUnXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFsbE9wdGlvbnMucHVzaCh2YWwuc3BsaXQoJ3x8JylbdmFsLnNwbGl0KCd8fCcpLmxlbmd0aCAtIDFdKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxPcHRpb25zLnB1c2goe3ZhbHVlOiB2YWwuc3BsaXQoJ3x8JylbMF0sIG5hbWU6IHZhbC5zcGxpdCgnfHwnKVt2YWwuc3BsaXQoJ3x8JykubGVuZ3RoIC0gMV19KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuYWxsT3B0aW9ucyA9IHJlc0RhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgPSBleHRlcm5hbEFwaU9wdGlvblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hbGxPcHRpb25zID0gZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyBXZW50IFdyb25nIGluIFBpY2tlciAhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IG9sZERhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS5odG1sX2lkKTtcclxuICAgICAgICBvbGREYXRhID0gb2xkRGF0YSA/IG9sZERhdGEgOiBbXTtcclxuICAgICAgICB0aGlzLnBvc3NpYmxlT3B0aW9ucyA9IFtdXHJcbiAgICAgICAgb2xkRGF0YS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRPYmogPSB0aGlzLmFsbE9wdGlvbnMuZmlsdGVyKHZhbD0+eyBpZih2YWwudmFsdWUgPT0gdmFsdWUpIHJldHVybiB2YWw7IH0pXHJcbiAgICAgICAgICAgIGlmKHNlbGVjdGVkT2JqLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zc2libGVPcHRpb25zLnB1c2goc2VsZWN0ZWRPYmpbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwb3NzaWJsZU9wdGlvbnM6IFwiLHRoaXMucG9zc2libGVPcHRpb25zKVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uU2V0U2Vzc2lvbkRhdGFcIix2YWx1ZSk7XHJcbiAgICAgICAgc3VwZXIub25TZXRTZXNzaW9uRGF0YShhcGlLZXksIHZhbHVlKTtcclxuICAgICAgICB0aGlzLnNldE1vZGFsb3JTYW5ja0Jhck1lc3NhZ2UoYXBpS2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25FbXB0eVNlc3Npb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9IFtdO1xyXG4gICAgICAgIGlmIChnZXRfZGF0YS51bmlxdWVfaWRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLnVuaXF1ZV9pZHM7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmFwcERhdGEuaWRdO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS5hcGlLZXlzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuZmllbGREYXRhLmFwaV9rZXldO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gWy4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKV07XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICh1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMoZWxtKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gVE9ETyBVcGRhdGVcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdkZWZhdWx0X3ZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgLy8gcmVzZXR0aW5nIHRoZSBmb3JtIGZpZWxkIGRvZXMgbm90IHdvcmsgYmVjYXVzZVxyXG4gICAgICAgICAgICAgICAgLy8gb25jZSBpdCBnZXRzIHJlc2V0IGlmIGl0IGlzIG5vdCB0b3VjaGVkIGFnYWluIHRoZW4gdGhlIGZpZWxkIHdvbid0IGdldCBpbnZhbGlkXHJcbiAgICAgICAgICAgICAgICAvLyBhZnRlciB0aGUgZm9ybSBnZXRzIHN1Ym1pdHRlZCBhbmQgZXJyb3JzIHdvbid0IHNob3cgdXBcclxuICAgICAgICAgICAgICAgIC8vIHNvIHdlIG5lZWQgdG8gbWFudWFsbHkgc2V0IHRoZSBmaWVsZCBhcyB1blRvdWNoZWQsIFByaXN0aW5lICwgdXBkYXRlIHZhbHVlIGFuIHZhbGlkaXR5IGFuZCBzaG93RXJyb3JPbk5leHQgdG8gdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gdGhpcy50YWdGaWVsZC5jb250cm9sLnJlc2V0KCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTmFtZS5yZXNldCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE5hbWUuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTmFtZS5jb250cm9sLm1hcmtBc1ByaXN0aW5lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZE5hbWUuY29udHJvbC51cGRhdGVWYWx1ZUFuZFZhbGlkaXR5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVDdXN0b21GdW5jdGlvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gJyc7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBnZXRfZGF0YSA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgT2JqZWN0LmtleXMoZ2V0X2RhdGEpLmZvckVhY2goKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGRhdGEucHVzaChrZXkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gdGhpcy5maWVsZERhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGF0YS5pbmNsdWRlcyh1bmlxdWVfaWRfdmFsdWUpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IGdldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV07XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyaWdnZXJFdmVudCgpIHtcclxuICAgICAgICBpZiAodGhpcy5zZWFyY2hCdXR0b25FZGl0YWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudFwiLGRhdGEpO1xyXG4gICAgICAgIGlmIChkYXRhKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhWyd1bmlxdWVJZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBkYXRhWyd2YWx1ZXMnXS5sZW5ndGggPiAwID9cclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVtkYXRhWyd1bmlxdWVJZHMnXS5pbmRleE9mKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCldIDpcclxuICAgICAgICAgICAgICAgICAgICBkYXRhWyd2YWx1ZXMnXVswXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdEYXRhJywgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10odGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5wdXRWYWx1ZSAmJiBBcnJheS5pc0FycmF5KHRoaXMuaW5wdXRWYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NzaWJsZU9wdGlvbnMucHVzaCh7dmFsdWU6IGVsZW1lbnQsIG5hbWU6IGVsZW1lbnR9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgICAgIC8vIGNvbnN0IGNoYW5nZU1hcCA9IHtcclxuICAgICAgICAvLyAgICAgZmllbGRfbGFiZWw6ICdmaWVsZERhdGEuZmllbGRfbGFiZWwnLFxyXG4gICAgICAgIC8vICAgICBwbGFjZWhvbGRlcl90ZXh0OiAnZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHQnLFxyXG4gICAgICAgIC8vICAgICB0b29sdGlwOiAnZmllbGREYXRhLnRvb2x0aXAnLFxyXG4gICAgICAgIC8vICAgICAnYWRkaXRpb25hbF9wYXJhbWV0ZXJzWypdQXJpYS1MYWJlbCc6ICdBZGRpdGlvbmFsUGFyYW1ldGVyW1xcJ0FyaWEtTGFiZWxcXCddJ1xyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCB2YWx1ZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VNYXApKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGxhbmdWYWwgPSB0aGlzLnN3aXRjaExhbmcodmFsdWUsIGRhdGEsIGNoYW5nZU1hcCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChsYW5nVmFsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzW2xhbmdWYWwua2V5XSA9IGxhbmdWYWwudmFsO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhjaGFuZ2VzLCBjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKVxyXG4gICAgICAgIC8vIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhICYmIGNoYW5nZXMucm9vdERhdGEuY3VycmVudFZhbHVlLmxhbmdDaGFuZ2VkKSB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMudG9nZ2xlTGFuZ3VhZ2UoY2hhbmdlcy5maWVsZERhdGEuY3VycmVudFZhbHVlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgaWYoIXRoaXMuaXNFZGl0YWJsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRlbGV0ZVRhZ3NGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlcltcImNhbkRlbGV0ZVRhZ3NcIl0pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2FuRGVsZXRlVGFnc0ZsYWcgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbXCJjYW5EZWxldGVUYWdzXCJdLnRvTG93ZXJDYXNlKCkgPT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMucm93RGF0YSAmJiBjaGFuZ2VzLnJvd0RhdGEuY3VycmVudFZhbHVlICYmIHRoaXMuaW5wdXRWYWx1ZSAhPT0gY2hhbmdlcy5yb3dEYXRhLmN1cnJlbnRWYWx1ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBjaGFuZ2VzLnJvd0RhdGEuY3VycmVudFZhbHVlLnZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc0VkaXRhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc1Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc01hbmRhdG9yeScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwie3soaXNDdXN0b21DbGFzcyAmJiBmaWVsZERhdGEuZmllbGRfc3R5bGUpP2ZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZTonJ319XCIgaWQ9XCJ7e2h0bWxfaWQgfX1cIiAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG4gICAgPG1hdC1mb3JtLWZpZWxkIGNsYXNzPVwiZXhhbXBsZS1jaGlwLWxpc3RcIiBhcHBlYXJhbmNlPVwiZmlsbFwiPlxyXG5cdFx0PCEtLSBUb29sdGlwIHdpdGggaW5mb3JtYWlvbiBpY29uIC0tPlxyXG5cdFx0PGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCJcclxuXHRcdGNsYXNzPVwiYnRuLXRvb2x0aXAgcHVsbC1yaWdodCBtbC1hdXRvIGJ0bi10b29sdGlwLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCJcclxuXHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyBmaWVsZERhdGEudG9vbHRpcFwiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCI+XHJcblx0XHRpXHJcblx0XHQ8L2J1dHRvbj5cclxuICAgICAgICA8bWF0LWxhYmVsICpuZ0lmPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsIT0nJ1wiPlxyXG4gICAgICAgICAgICB7e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBjbGFzcz1cIm1hbmRldG9yeS1tYXJrXCI+ICo8L3NwYW4+XHJcbiAgICAgICAgPC9tYXQtbGFiZWw+XHJcbiAgICAgICAgPG1hdC1jaGlwLWdyaWQgI2NoaXBMaXN0IGFyaWEtbGFiZWw9XCJGcnVpdCBzZWxlY3Rpb25cIj5cclxuICAgICAgICAgIDxtYXQtY2hpcC1yb3dcclxuICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZydWl0IG9mIHBvc3NpYmxlT3B0aW9uc1wiXHJcbiAgICAgICAgICAgIChyZW1vdmVkKT1cInJlbW92ZShmcnVpdC52YWx1ZSwgdGFiQ3RybClcIj5cclxuICAgICAgICAgICAge3tmcnVpdC5uYW1lfX1cclxuICAgICAgICAgICAgPGJ1dHRvbiBtYXRDaGlwUmVtb3ZlICpuZ0lmPVwiY2FuRGVsZXRlVGFnc0ZsYWdcIj5cclxuICAgICAgICAgICAgICA8bWF0LWljb24+Y2FuY2VsPC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8L21hdC1jaGlwLXJvdz5cclxuICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cInt7ZmllbGREYXRhLnBsYWNlaG9sZGVyX3RleHR9fVwiICN0YWJJbnB1dFxyXG4gICAgICAgICAgICBjbGFzcz1cImZvcm0tY29udHJvbCB7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX0ge3sgKCAhaXNWYWxpZCAmJiAodGFiQ3RybC5kaXJ0eSB8fCB0YWJDdHJsLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCJcclxuICAgICAgICAgICAgW2F0dHIuZGlzYWJsZWRdPVwiIWlzRWRpdGFibGVcIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cIidTZWxlY3QgYSAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsIFwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIlxyXG4gICAgICAgICAgICBbcmVxdWlyZWRdPVwiaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICBbbmdTdHlsZV09XCJ7XHJcblx0XHRcdCdmb250LWZhbWlseSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X25hbWUsXHJcblx0XHRcdCdmb250LXNpemUnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zaXplLFxyXG5cdFx0XHQnZm9udC1zdHlsZSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG5cdFx0XHRjb2xvcjogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcblx0XHRcdCdib3JkZXItY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYm9yZGVyX2NvbG9yLFxyXG5cdFx0XHRoZWlnaHQ6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9oZWlnaHQsXHJcblx0XHRcdHdpZHRoOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcblx0XHRcdCdiYWNrZ3JvdW5kLWNvbG9yJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3JcclxuXHRcdFx0fVwiXHJcblx0XHRcdChjbGljayk9XCJvblRhZ0NsaWNrKCRldmVudClcIlxyXG4gICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJvbkNoYW5nZSgkZXZlbnQpXCJcclxuICAgICAgICAgICAgW2Zvcm1Db250cm9sXT1cInRhYkN0cmxcIlxyXG4gICAgICAgICAgICBbbWF0QXV0b2NvbXBsZXRlXT1cImF1dG9cIlxyXG4gICAgICAgICAgICBbbWF0Q2hpcElucHV0Rm9yXT1cImNoaXBMaXN0XCJcclxuICAgICAgICAgICAgW21hdENoaXBJbnB1dFNlcGFyYXRvcktleUNvZGVzXT1cInNlcGFyYXRvcktleXNDb2Rlc1wiXHJcbiAgICAgICAgICAgIChtYXRDaGlwSW5wdXRUb2tlbkVuZCk9XCJhZGQoJGV2ZW50LHRhYkN0cmwpXCI+XHJcblx0XHRcdDxidXR0b24gKm5nSWY9XCJ0YWJDdHJsICYmIHRhYkN0cmwudmFsdWVcIiBtYXRTdWZmaXggbWF0LWljb24tYnV0dG9uIGFyaWEtbGFiZWw9XCJBZGRcIiAoY2xpY2spPVwiYWRkKHRhYkN0cmwudmFsdWUsdGFiQ3RybClcIj5cclxuXHRcdFx0XHQ8bWF0LWljb24gZm9udEljb249XCJhZGRcIj48L21hdC1pY29uPlxyXG5cdFx0XHQ8L2J1dHRvbj5cclxuICAgICAgICA8L21hdC1jaGlwLWdyaWQ+XHJcbiAgICAgICAgPG1hdC1hdXRvY29tcGxldGUgI2F1dG89XCJtYXRBdXRvY29tcGxldGVcIiAob3B0aW9uU2VsZWN0ZWQpPVwic2VsZWN0ZWQoJGV2ZW50LHRhYkN0cmwpXCI+XHJcbiAgICAgICAgICA8bWF0LW9wdGlvbiAqbmdGb3I9XCJsZXQgb3B0IG9mIGZpbHRlcmVkT3B0aW9ucyB8IGFzeW5jXCIgW3ZhbHVlXT1cIm9wdFwiPlxyXG4gICAgICAgICAgICB7e29wdC5uYW1lfX1cclxuICAgICAgICAgIDwvbWF0LW9wdGlvbj5cclxuICAgICAgICA8L21hdC1hdXRvY29tcGxldGU+XHJcblx0XHRcclxuXHRcdDwhLS0gVG9vbHRpcCBUZW1wbGF0ZSAtLT5cclxuICAgICAgICA8IS0tIDxuZy10ZW1wbGF0ZSAjdG9vbHRpcFRlbXBsYXRlPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidG9vbHRpcF9jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidG9vbHRpcF90ZXh0XCIgW2lubmVySFRNTF09XCJmaWVsZERhdGEudG9vbHRpcFwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9uZy10ZW1wbGF0ZT4gLS0+XHJcbiAgICA8L21hdC1mb3JtLWZpZWxkPlxyXG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cIm11bHRpcGxlRXJyb3JNZXNzYWdlOyBlbHNlIHNpbmdsZUVycm9yTWVzc2FnZVwiPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuXHRcdFx0XHQqbmdJZj1cIihzaG93RXJyb3JPbk5leHQgJiYgIWlzRWRpdGFibGUpIHx8ICghaXNWYWxpZCAmJiAoKGZpZWxkTmFtZSAmJiAoZmllbGROYW1lLmRpcnR5IHx8IGZpZWxkTmFtZS50b3VjaGVkKSkgfHwgc2hvd0Vycm9yT25OZXh0ICkpXCI+XHJcblx0XHRcdFx0PGRpdiAqbmdJZj1cIihzaG93RXJyb3JPbk5leHQgJiYgIWlzRWRpdGFibGUpIHx8ICghaXNWYWxpZClcIj5cclxuXHRcdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnkgJiYgbWVzc2FnZS50eXBlID09ICdNYW5kYXRvcnknXCJcclxuXHRcdFx0XHRcdFx0W25nU3R5bGVdPVwieydjb2xvcic6IHJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkuY29sb3J9XCI+XHJcblx0XHRcdFx0XHRcdHt7cmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0XHQ8L2Rpdj5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuXHQ8bmctdGVtcGxhdGUgI3NpbmdsZUVycm9yTWVzc2FnZT5cclxuXHRcdDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIlxyXG5cdFx0XHQqbmdJZj1cIiFpc1ZhbGlkICYmICgoZmllbGROYW1lICYmIChmaWVsZE5hbWUuZGlydHkgfHwgZmllbGROYW1lLnRvdWNoZWQpKSB8fCBzaG93RXJyb3JPbk5leHQpXCI+XHJcblx0XHRcdDxkaXYgKm5nSWY9XCIhaXNWYWxpZFwiPlxyXG5cdFx0XHRcdDxwICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBbbmdTdHlsZV09XCJ7J2NvbG9yJzogZXJyb3JNZXNzYWdlRGF0YS5jb2xvcn1cIj5cclxuXHRcdFx0XHRcdHt7ZXJyb3JNZXNzYWdlRGF0YS5tZXNzYWdlX3RleHR9fTwvcD5cclxuXHRcdFx0PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLXRlbXBsYXRlPlxyXG5cclxuXHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBpdGVtIG9mIHNob3dDb21wYXJpc29uRXJyb3IgfCBrZXl2YWx1ZVwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImVycm9yLW1lc3NhZ2Utd3JhcHBlclwiPlxyXG5cdFx0XHQ8ZGl2PlxyXG5cdFx0XHRcdDxwIFtuZ1N0eWxlXT1cInsnY29sb3InOiBpdGVtLnZhbHVlLmNvbG9yfVwiPlxyXG5cdFx0XHRcdFx0e3tpdGVtLnZhbHVlLm1lc3NhZ2VfdGV4dH19PC9wPlxyXG5cdFx0XHQ8L2Rpdj5cclxuXHRcdDwvZGl2PlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cclxuXHQ8bmctY29udGFpbmVyPlxyXG5cdFx0PGRpdiBjbGFzcz1cImluZm8tbWVzc2FnZS13cmFwcGVyXCIgKm5nSWY9XCJ0YWJDdHJsICYmIHRhYkN0cmwudmFsdWVcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LWRhcmtcIj5QbGVhc2UgaGl0IGVudGVyIGFmdGVyIGluc2VydGluZyB0aGUgdmFsdWUgdG8gdGhlIHRhZzwvZGl2PlxyXG5cdFx0PC9kaXY+XHJcblx0XHQ8ZGl2IGNsYXNzPVwiaW5mby1tZXNzYWdlLXdyYXBwZXJcIiAqbmdJZj1cImluZm9Nc2cgIT0gJydcIj5cclxuXHRcdFx0PGRpdiBjbGFzcz1cImFsZXJ0IGFsZXJ0LXdhcm5pbmdcIj48c3Ryb25nPldhcm5pbmc6PC9zdHJvbmc+IHt7aW5mb01zZ319PC9kaXY+XHJcblx0XHQ8L2Rpdj5cclxuXHQ8L25nLWNvbnRhaW5lcj5cclxuPC9kaXY+Il19