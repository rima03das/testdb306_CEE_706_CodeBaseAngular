import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { UndoRedo } from '../../utils/undo-redo.util';
import { CommonModule, formatDate, NgStyle } from '@angular/common';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { FormsModule } from '@angular/forms';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
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
import * as i12 from "@angular/forms";
import * as i13 from "@angular/common";
import * as i14 from "../../directives/tooltip/tooltip.directive";
const _c0 = a0 => ({ "color": a0 });
function CeeTimeSlotsComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeTimeSlotsComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 16);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeTimeSlotsComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 13)(2, CeeTimeSlotsComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeTimeSlotsComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeTimeSlotsComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeTimeSlotsComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.noDataFoundLabel);
} }
function CeeTimeSlotsComponent_div_0_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div")(2, "input", 20, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function CeeTimeSlotsComponent_div_0_ng_container_8_Template_input_ngModelChange_2_listener($event) { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); i0.ɵɵtwoWayBindingSet(ctx_r0.inputValue, $event) || (ctx_r0.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("focus", function CeeTimeSlotsComponent_div_0_ng_container_8_Template_input_focus_2_listener() { i0.ɵɵrestoreView(_r2); const radioControl_r3 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r3)); })("blur", function CeeTimeSlotsComponent_div_0_ng_container_8_Template_input_blur_2_listener() { i0.ɵɵrestoreView(_r2); const radioControl_r3 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r3)); })("change", function CeeTimeSlotsComponent_div_0_ng_container_8_Template_input_change_2_listener() { i0.ɵɵrestoreView(_r2); const radioControl_r3 = i0.ɵɵreference(3); const ctx_r0 = i0.ɵɵnextContext(2); ctx_r0.changedVal(); return i0.ɵɵresetView(ctx_r0.setState(radioControl_r3)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(4, "label", 21);
    i0.ɵɵtext(5);
    i0.ɵɵelementEnd()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const slot_r4 = ctx.$implicit;
    const i_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1("time-slot-container ", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext) ? "invalid" : "valid", "");
    i0.ɵɵadvance();
    i0.ɵɵpropertyInterpolate2("id", "", ctx_r0.fieldData.unique_id, "", i_r5, "");
    i0.ɵɵpropertyInterpolate("name", ctx_r0.fieldData.unique_id);
    i0.ɵɵproperty("value", slot_r4["value"])("disabled", !slot_r4["available"]);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.inputValue);
    i0.ɵɵattribute("aria-label", ctx_r0.additionalParameter["Aria-Label"] ? ctx_r0.additionalParameter["Aria-Label"] : ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate2("for", "", ctx_r0.fieldData.unique_id, "", i_r5, "");
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(slot_r4["label"]);
} }
function CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const message_r6 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r0.returnMessageData(message_r6.code).color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.returnMessageData(message_r6.code).message_text, " ");
} }
function CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_div_1_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_div_1_Template, 2, 1, "div", 22);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const message_r6 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext) && message_r6.type == "Mandatory");
} }
function CeeTimeSlotsComponent_div_0_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_container_9_ng_container_1_Template, 2, 1, "ng-container", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.messages);
} }
function CeeTimeSlotsComponent_div_0_ng_template_10_div_0_p_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "p", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, ctx_r0.errorMessageData.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", ctx_r0.errorMessageData.message_text, " ");
} }
function CeeTimeSlotsComponent_div_0_ng_template_10_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 23);
    i0.ɵɵtemplate(1, CeeTimeSlotsComponent_div_0_ng_template_10_div_0_p_1_Template, 2, 4, "p", 24);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
} }
function CeeTimeSlotsComponent_div_0_ng_template_10_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, CeeTimeSlotsComponent_div_0_ng_template_10_div_0_Template, 2, 1, "div", 22);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("ngIf", !ctx_r0.inputValue && ctx_r0.isMandatory && (ctx_r0.radioState.dirty || ctx_r0.radioState.touched || ctx_r0.showErrorOnNext));
} }
function CeeTimeSlotsComponent_div_0_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 23)(2, "div")(3, "p", 25);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngStyle", i0.ɵɵpureFunction1(2, _c0, item_r7.value.color));
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", item_r7.value.message_text, "");
} }
function CeeTimeSlotsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    i0.ɵɵtemplate(3, CeeTimeSlotsComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 6)(4, CeeTimeSlotsComponent_div_0_span_4_Template, 2, 0, "span", 7)(5, CeeTimeSlotsComponent_div_0_button_5_Template, 2, 2, "button", 8);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 9);
    i0.ɵɵtemplate(7, CeeTimeSlotsComponent_div_0_div_7_Template, 2, 1, "div", 10)(8, CeeTimeSlotsComponent_div_0_ng_container_8_Template, 6, 15, "ng-container", 11)(9, CeeTimeSlotsComponent_div_0_ng_container_9_Template, 2, 1, "ng-container", 12)(10, CeeTimeSlotsComponent_div_0_ng_template_10_Template, 1, 1, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor)(12, CeeTimeSlotsComponent_div_0_ng_container_12_Template, 5, 4, "ng-container", 11);
    i0.ɵɵpipe(13, "keyvalue");
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const singleErrorMessage_r8 = i0.ɵɵreference(11);
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.slots.length === 0);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.slots);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.multipleErrorMessage)("ngIfElse", singleErrorMessage_r8);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngForOf", i0.ɵɵpipeBind1(13, 11, ctx_r0.showComparisonError));
} }
export class CeeTimeSlotsComponent extends BaseView {
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
    keepState = false;
    rowData;
    rootData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    now = new Date();
    nowDate = new Date(this.now.getFullYear(), this.now.getMonth(), this.now.getDate());
    selectedDateAPI = '';
    selectedDate = this.nowDate;
    slots = [];
    radioState = {
        touched: false,
        dirty: false
    };
    inputValue = '';
    undoRedoUtil;
    colorAvailable;
    colorNotAvailable;
    colorSelected;
    setAPIKeyUtil;
    noDataFoundLabel = 'no record found.';
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
        this.undoRedoUtil = new UndoRedo();
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
    }
    createDate(dateStr) {
        const dateArr = dateStr.split('/').map(str => +str);
        if (dateArr.length === 3) {
            return new Date(dateArr[2], (dateArr[1] - 1), dateArr[0]);
        }
        else {
            return this.nowDate;
        }
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
    }
    createTimeSlots() {
        this.slots = [];
        if (Array.isArray(this.fieldData.possible_values)) {
            for (const val of this.fieldData.possible_values) {
                const slot = {};
                const vData = val.split('|').map(str => str.trim());
                // slot['label'] = formatDate(new Date(formatDate(this.selectedDate, 'yyyy-MM-dd ', 'en-US', 'UTC') + vData[0] + ' UTC'), this.additionalParameter['time_format'] || 'HH:mm', 'en-US', this.additionalParameter['timezone'] || 'UTC')
                try {
                    slot['label'] = formatDate(new Date(formatDate(this.selectedDate, 'yyyy-MM-dd ', 'en-US', 'UTC') + vData[0] + ' UTC'), this.additionalParameter['time_format'] || 'HH:mm', 'en-US', this.additionalParameter['timezone'] || 'UTC');
                }
                catch (err) {
                    // console.log(moment("2000-03-24 11:15:34 UTC").format("HH:mm A"))
                    // slot['label'] = moment(moment(new Date(this.selectedDate)).format('yyyy-MM-dd') + ' ' + vData[0] + this.additionalParameter['timezone'] || 'UTC').format(this.additionalParameter['time_format'] || 'HH:mm');
                    let timeArr = vData[0].split(':');
                    slot['label'] = this.tConvert(timeArr[0] + ':' + timeArr[1]);
                }
                slot['value'] = vData[0];
                slot['available'] = (vData[1] && vData[1] === 'Y') ? true : false;
                this.slots.push(slot);
            }
        }
    }
    tConvert(time) {
        // Check correct time format and split into components
        time = time.toString().match(/^([01]\d|2[0-3])(:)([0-5]\d)(:[0-5]\d)?$/) || [time];
        if (time.length > 1) { // If time format correct
            time = time.slice(1); // Remove full string match value
            time[5] = +time[0] < 12 ? ' AM' : ' PM'; // Set AM/PM
            time[0] = +time[0] % 12 || 12; // Adjust hours
        }
        return time.join(''); // return adjusted time or original string
    }
    setState(value) {
        this.radioState.touched !== value.touched && (this.radioState.touched = value.touched);
        this.radioState.dirty !== value.dirty && (this.radioState.dirty = value.dirty);
    }
    changedVal() {
        let value = this.inputValue;
        this.updateFieldData(value); // set the session value on checked
        // on click event on radio
        this.onComponentEvent('OnClick');
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.onDirty();
    }
    // //@HostListener('window:beforeunload')
    // onDestroy() {
    //     this.onViewUnload();
    // }
    ngOnDestroy() {
        this.onViewUnload();
    }
    onViewDataInit() {
        if (this.fieldValue !== undefined && !Array.isArray(this.fieldValue)) {
            this.inputValue = this.fieldValue;
        }
        if (this.additionalParameter['default_date']) {
            const default_date = this.additionalParameter['default_date'].split('||').map(str => str.trim());
            this.selectedDateAPI = default_date[0];
            this.selectedDate = (default_date[1]) ? (default_date[1] === 'CURR_DATE') ? this.nowDate : this.createDate(default_date[1])
                : this.nowDate;
        }
        this.createTimeSlots();
        if (this.additionalParameter['default_color']) {
            this.additionalParameter['default_color'].split('||').map(str => str.trim()).forEach(colorCode => {
                if (!colorCode.includes('|')) {
                    this.colorSelected = colorCode;
                }
                else {
                    const colorCodeArr = colorCode.split('|').map(str => str.trim());
                    if (colorCodeArr[0] === 'Y') {
                        this.colorAvailable = colorCodeArr[1];
                    }
                    else {
                        this.colorNotAvailable = colorCodeArr[1];
                    }
                }
            });
        }
        if (this.additionalParameter['No Data Found Label']) {
            this.noDataFoundLabel = this.additionalParameter['No Data Found Label'];
        }
        /*----------  Dynamic style  ----------*/
        const style = document.createElement('style');
        style.innerHTML = `.radio {
            background: ${this.colorAvailable} !important;
        }
        input[type="radio"]:checked + .radio {
            background: ${this.colorSelected} !important;
          }
          input[type="radio"]:disabled + .radio {
            background: ${this.colorNotAvailable} !important;
          }
     `;
        document.body.appendChild(style);
        /*----------  Dynamic style END ----------*/
        this.processApiRes(this.apiValue);
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        this.processApiRes(apiValue);
    }
    processApiRes(apiValue) {
        if (apiValue && Array.isArray(apiValue)) {
            this.fieldData.possible_values = [];
            for (const apiDate of apiValue) {
                if (apiDate[this.additionalParameter['timeslot_slot']] && apiDate[this.additionalParameter['timeslot_status']]) {
                    this.fieldData.possible_values.push(apiDate[this.additionalParameter['timeslot_slot']] + '|' + apiDate[this.additionalParameter['timeslot_status']]);
                }
            }
            this.createTimeSlots();
        }
    }
    onEmptySession(get_data) {
        //throw new Error('Method not implemented.');
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
                this.inputValue = '';
                this.updateFieldData(this.inputValue);
            }
        });
    }
    handleCustomFunction(get_data) {
        //throw new Error('Method not implemented.');
    }
    onSetSessionData(apiKey, value) {
    }
    concatData() { }
    setFieldValueOnSetValuesEvent(data) {
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
        //     'additional_parameters[*]Aria-Label': 'AdditionalParameter[\'Aria-Label\']',
        //     'fieldData.possible_values[*]': 'fieldData.possible_values'
        // };
        // for (const value of Object.keys(changeMap)) {
        //     const langVal = this.switchLang(value, data, changeMap);
        //     if (langVal) {
        //         this[langVal.key] = langVal.val;
        //     }
        // }
    }
    ngOnChanges(changes) {
        // if (changes.fieldData && changes.rootData && changes.rootData.currentValue.langChanged) {
        //     this.toggleLanguage(changes.fieldData.currentValue);
        // }
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
    static ɵfac = function CeeTimeSlotsComponent_Factory(t) { return new (t || CeeTimeSlotsComponent)(i0.ɵɵdirectiveInject(i1.Router), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.MatDialog), i0.ɵɵdirectiveInject(i9.MatSnackBar), i0.ɵɵdirectiveInject(i10.HttpClient), i0.ɵɵdirectiveInject(i11.CeeApiService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTimeSlotsComponent, selectors: [["app-cee-time-slots"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["singleErrorMessage", ""], ["radioControl", "ngModel"], ["class", "field-wrapper", 3, "class", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], ["class", "no-data-info", 4, "ngIf"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "no-data-info"], ["type", "radio", 3, "ngModelChange", "focus", "blur", "change", "id", "name", "value", "disabled", "ngModel"], [1, "radio", 3, "for"], ["class", "error-message-wrapper", 4, "ngIf"], [1, "error-message-wrapper"], [3, "ngStyle", 4, "ngIf"], [3, "ngStyle"]], template: function CeeTimeSlotsComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTimeSlotsComponent_div_0_Template, 14, 13, "div", 2);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, FormsModule, i12.DefaultValueAccessor, i12.RadioControlValueAccessor, i12.NgControlStatus, i12.NgModel, NgStyle, CommonModule, i13.NgForOf, i13.NgIf, i13.KeyValuePipe, TooltipModule, i14.TooltipDirective], styles: [".radio[_ngcontent-%COMP%]{display:inline-block;position:relative;margin-bottom:12px;cursor:pointer;font-size:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #C0C4CA;text-align:center;width:100px;padding-top:5px;padding-bottom:5px}input[_ngcontent-%COMP%]{position:absolute;opacity:0;cursor:pointer}input[type=radio][_ngcontent-%COMP%]:checked + .radio[_ngcontent-%COMP%]{background:#3974af;border-color:#d2e2ef;color:#fff}input[type=radio][_ngcontent-%COMP%]:disabled + .radio[_ngcontent-%COMP%]{background:#ddd;color:#737373;border-color:#f4f4f4}input[type=radio][_ngcontent-%COMP%]:focus-visible + .radio[_ngcontent-%COMP%]{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}.time-slot-container[_ngcontent-%COMP%]{display:inline;margin-right:10px}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTimeSlotsComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-time-slots', standalone: true, imports: [MatTooltipModule, FormsModule, NgStyle, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\"\r\n    class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <div class=\"no-data-info\" *ngIf=\"slots.length === 0\">{{noDataFoundLabel}}</div>\r\n            <ng-container *ngFor=\"let slot of slots; index as i\">\r\n                <div\r\n                    class=\"time-slot-container {{ !inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext) ? 'invalid' : 'valid' }}\">\r\n                    <input id=\"{{fieldData.unique_id}}{{i}}\" type=\"radio\" name=\"{{fieldData.unique_id}}\"\r\n                        [value]=\"slot['value']\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : fieldData.field_label\"\r\n                        [disabled]=\"!slot['available']\" [(ngModel)]=\"inputValue\" #radioControl=\"ngModel\"\r\n                        (focus)=\"setState(radioControl)\" (blur)=\"setState(radioControl)\"\r\n                        (change)=\"changedVal(); setState(radioControl)\">\r\n                    <label for=\"{{fieldData.unique_id}}{{i}}\" class=\"radio\">{{slot['label']}}</label>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"multipleErrorMessage; else singleErrorMessage\">\r\n                <ng-container *ngFor=\"let message of messages\">\r\n                    <div class=\"error-message-wrapper\"\r\n                        *ngIf=\"!inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext) && message.type == 'Mandatory'\">\r\n                        <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': returnMessageData(message.code).color}\">\r\n                            {{returnMessageData(message.code).message_text}}\r\n                        </p>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n            <ng-template #singleErrorMessage>\r\n                <div class=\"error-message-wrapper\"\r\n                    *ngIf=\"!inputValue && isMandatory && (radioState.dirty || radioState.touched || showErrorOnNext)\">\r\n                    <p *ngIf=\"isMandatory\" [ngStyle]=\"{'color': errorMessageData.color}\">\r\n                        {{errorMessageData.message_text}}\r\n                    </p>\r\n                </div>\r\n            </ng-template>\r\n            <ng-container *ngFor=\"let item of showComparisonError | keyvalue\">\r\n                <div class=\"error-message-wrapper\">\r\n                    <div>\r\n                        <p [ngStyle]=\"{'color': item.value.color}\">\r\n                            {{item.value.message_text}}</p>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n", styles: [".radio{display:inline-block;position:relative;margin-bottom:12px;cursor:pointer;font-size:18px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;border:1px solid #C0C4CA;text-align:center;width:100px;padding-top:5px;padding-bottom:5px}input{position:absolute;opacity:0;cursor:pointer}input[type=radio]:checked+.radio{background:#3974af;border-color:#d2e2ef;color:#fff}input[type=radio]:disabled+.radio{background:#ddd;color:#737373;border-color:#f4f4f4}input[type=radio]:focus-visible+.radio{outline:1px solid black;outline:1px auto -webkit-focus-ring-color}.time-slot-container{display:inline;margin-right:10px}\n"] }]
    }], () => [{ type: i1.Router }, { type: i2.UserDataHandlerService }, { type: i3.SharedEventsServiceService }, { type: i4.CEEInternalEmitterService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.MatDialog }, { type: i9.MatSnackBar }, { type: i10.HttpClient }, { type: i11.CeeApiService }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTimeSlotsComponent, { className: "CeeTimeSlotsComponent", filePath: "lib\\field-components\\cee-time-slots\\cee-time-slots.component.ts", lineNumber: 30 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRpbWUtc2xvdHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRpbWUtc2xvdHMvY2VlLXRpbWUtc2xvdHMuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRpbWUtc2xvdHMvY2VlLXRpbWUtc2xvdHMuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQXFELE1BQU0sZUFBZSxDQUFDO0FBRTVHLE9BQU8sRUFBRSxRQUFRLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQVc3QyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sNEJBQTRCLENBQUM7QUFDdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDcEUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFHNUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDZnhELGlDQUFxRTtJQUFBLFlBQXlCO0lBQUEsaUJBQVE7OztJQUFqQyxjQUF5QjtJQUF6QixrREFBeUI7OztJQUM5Riw0QkFDZ0Q7OztJQUE1QywyRUFBbUM7OztJQUgzQyw2QkFB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QXFCOzZEQUFyQixxQkFBcUI7WUM3QmxDLHdFQUNvRzs7WUFEeEUsb0NBQWU7NEJEMkI3QixnQkFBZ0IsRUFBRSxXQUFXLDZGQUFFLE9BQU8sRUFBRSxZQUFZLDJDQUFDLGFBQWE7O2lGQUVuRSxxQkFBcUI7Y0FQakMsU0FBUzsyQkFDSSxvQkFBb0IsY0FHbEIsSUFBSSxXQUNQLENBQUMsZ0JBQWdCLEVBQUUsV0FBVyxFQUFFLE9BQU8sRUFBRSxZQUFZLEVBQUMsYUFBYSxDQUFDO21XQUk1RCxNQUFNO2tCQUF0QixLQUFLO1lBQ1csU0FBUztrQkFBekIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLO1lBQ0csa0JBQWtCO2tCQUExQixLQUFLO1lBQ0csaUJBQWlCO2tCQUF6QixLQUFLO1lBQ0csZ0JBQWdCO2tCQUF4QixLQUFLOztrRkFURyxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQmFzZVZpZXcgfSBmcm9tICcuLi9jZWUtYmFzZS1jbGFzcyc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVbmRvUmVkbyB9IGZyb20gJy4uLy4uL3V0aWxzL3VuZG8tcmVkby51dGlsJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBmb3JtYXREYXRlLCBOZ1N0eWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgU2V0QVBJQ2FsbGJhY2tEYXRhIH0gZnJvbSAnLi4vLi4vdXRpbHMvc2V0LWFwaS1jYWxsYmFjay1kYXRhLXV0aWwnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IG1vbWVudCBmcm9tICdtb21lbnQnO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLXRpbWUtc2xvdHMnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS10aW1lLXNsb3RzLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS10aW1lLXNsb3RzLmNvbXBvbmVudC5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW01hdFRvb2x0aXBNb2R1bGUsIEZvcm1zTW9kdWxlLCBOZ1N0eWxlLCBDb21tb25Nb2R1bGUsVG9vbHRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZVRpbWVTbG90c0NvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIG1hbmRhdG9yeUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgZWRpdGFibGVDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIHZpc2libGVDb25kaXRpb246IGFueTtcclxuXHJcbiAgICBub3c6IERhdGUgPSBuZXcgRGF0ZSgpO1xyXG4gICAgbm93RGF0ZTogRGF0ZSA9IG5ldyBEYXRlKHRoaXMubm93LmdldEZ1bGxZZWFyKCksIHRoaXMubm93LmdldE1vbnRoKCksIHRoaXMubm93LmdldERhdGUoKSk7XHJcbiAgICBzZWxlY3RlZERhdGVBUEk6IHN0cmluZyA9ICcnO1xyXG4gICAgc2VsZWN0ZWREYXRlOiBEYXRlID0gdGhpcy5ub3dEYXRlO1xyXG4gICAgc2xvdHM6IGFueVtdID0gW107XHJcbiAgICByYWRpb1N0YXRlID0ge1xyXG4gICAgICAgIHRvdWNoZWQ6IGZhbHNlLFxyXG4gICAgICAgIGRpcnR5OiBmYWxzZVxyXG4gICAgfTtcclxuICAgIGlucHV0VmFsdWU6IHN0cmluZyA9ICcnO1xyXG4gICAgdW5kb1JlZG9VdGlsOiBVbmRvUmVkbztcclxuICAgIGNvbG9yQXZhaWxhYmxlOiBzdHJpbmc7XHJcbiAgICBjb2xvck5vdEF2YWlsYWJsZTogc3RyaW5nO1xyXG4gICAgY29sb3JTZWxlY3RlZDogc3RyaW5nO1xyXG4gICAgc2V0QVBJS2V5VXRpbDogU2V0QVBJQ2FsbGJhY2tEYXRhO1xyXG4gICAgbm9EYXRhRm91bmRMYWJlbDogc3RyaW5nID0gJ25vIHJlY29yZCBmb3VuZC4nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlcixcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZSxcclxuXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcih1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBzaGFyZWRFdmVudHNTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIGFwcERhdGFTZXJ2aWNlLCBhcGlEYXRhU2VydmljZSwgd2ZlU3RlcExvYWRlclNlcnZpY2UsIGRpYWxvZywgc25hY2tCYXIsIGh0dHAsIGNlZUFwaVNlcnZpY2UsIHJvdXRlcik7XHJcbiAgICAgICAgdGhpcy51bmRvUmVkb1V0aWwgPSBuZXcgVW5kb1JlZG8oKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRBUElLZXlVdGlsID0gbmV3IFNldEFQSUNhbGxiYWNrRGF0YShhcGlEYXRhU2VydmljZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlRGF0ZShkYXRlU3RyOiBzdHJpbmcpOiBEYXRlIHtcclxuICAgICAgICBjb25zdCBkYXRlQXJyID0gZGF0ZVN0ci5zcGxpdCgnLycpLm1hcChzdHIgPT4gK3N0cik7XHJcbiAgICAgICAgaWYgKGRhdGVBcnIubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlQXJyWzJdLCAoZGF0ZUFyclsxXSAtIDEpLCBkYXRlQXJyWzBdKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5ub3dEYXRlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmluaXQodGhpcy5zdGVwSWQsIHRoaXMuZmllbGREYXRhLCB0aGlzLmtlZXBTdGF0ZSwgdGhpcy5yb3dEYXRhKTtcclxuICAgIH1cclxuXHJcbiAgICBjcmVhdGVUaW1lU2xvdHMoKSB7XHJcbiAgICAgICAgdGhpcy5zbG90cyA9IFtdO1xyXG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBzbG90ID0ge307XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2RGF0YSA9IHZhbC5zcGxpdCgnfCcpLm1hcChzdHIgPT4gc3RyLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAvLyBzbG90WydsYWJlbCddID0gZm9ybWF0RGF0ZShuZXcgRGF0ZShmb3JtYXREYXRlKHRoaXMuc2VsZWN0ZWREYXRlLCAneXl5eS1NTS1kZCAnLCAnZW4tVVMnLCAnVVRDJykgKyB2RGF0YVswXSArICcgVVRDJyksIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsndGltZV9mb3JtYXQnXSB8fCAnSEg6bW0nLCAnZW4tVVMnLCB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3RpbWV6b25lJ10gfHwgJ1VUQycpXHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNsb3RbJ2xhYmVsJ10gPSBmb3JtYXREYXRlKG5ldyBEYXRlKGZvcm1hdERhdGUodGhpcy5zZWxlY3RlZERhdGUsICd5eXl5LU1NLWRkICcsICdlbi1VUycsICdVVEMnKSArIHZEYXRhWzBdICsgJyBVVEMnKSwgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWyd0aW1lX2Zvcm1hdCddIHx8ICdISDptbScsICdlbi1VUycsIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsndGltZXpvbmUnXSB8fCAnVVRDJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNhdGNoKGVycikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKG1vbWVudChcIjIwMDAtMDMtMjQgMTE6MTU6MzQgVVRDXCIpLmZvcm1hdChcIkhIOm1tIEFcIikpXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc2xvdFsnbGFiZWwnXSA9IG1vbWVudChtb21lbnQobmV3IERhdGUodGhpcy5zZWxlY3RlZERhdGUpKS5mb3JtYXQoJ3l5eXktTU0tZGQnKSArICcgJyArIHZEYXRhWzBdICsgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWyd0aW1lem9uZSddIHx8ICdVVEMnKS5mb3JtYXQodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWyd0aW1lX2Zvcm1hdCddIHx8ICdISDptbScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCB0aW1lQXJyID0gdkRhdGFbMF0uc3BsaXQoJzonKTtcclxuICAgICAgICAgICAgICAgICAgICBzbG90WydsYWJlbCddID0gdGhpcy50Q29udmVydCh0aW1lQXJyWzBdKyc6Jyt0aW1lQXJyWzFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNsb3RbJ3ZhbHVlJ10gPSB2RGF0YVswXTtcclxuICAgICAgICAgICAgICAgIHNsb3RbJ2F2YWlsYWJsZSddID0gKHZEYXRhWzFdICYmIHZEYXRhWzFdID09PSAnWScpID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbG90cy5wdXNoKHNsb3QpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRDb252ZXJ0ICh0aW1lKSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgY29ycmVjdCB0aW1lIGZvcm1hdCBhbmQgc3BsaXQgaW50byBjb21wb25lbnRzXHJcbiAgICAgICAgdGltZSA9IHRpbWUudG9TdHJpbmcgKCkubWF0Y2ggKC9eKFswMV1cXGR8MlswLTNdKSg6KShbMC01XVxcZCkoOlswLTVdXFxkKT8kLykgfHwgW3RpbWVdO1xyXG4gICAgICBcclxuICAgICAgICBpZiAodGltZS5sZW5ndGggPiAxKSB7IC8vIElmIHRpbWUgZm9ybWF0IGNvcnJlY3RcclxuICAgICAgICAgIHRpbWUgPSB0aW1lLnNsaWNlICgxKTsgIC8vIFJlbW92ZSBmdWxsIHN0cmluZyBtYXRjaCB2YWx1ZVxyXG4gICAgICAgICAgdGltZVs1XSA9ICt0aW1lWzBdIDwgMTIgPyAnIEFNJyA6ICcgUE0nOyAvLyBTZXQgQU0vUE1cclxuICAgICAgICAgIHRpbWVbMF0gPSArdGltZVswXSAlIDEyIHx8IDEyOyAvLyBBZGp1c3QgaG91cnNcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRpbWUuam9pbiAoJycpOyAvLyByZXR1cm4gYWRqdXN0ZWQgdGltZSBvciBvcmlnaW5hbCBzdHJpbmdcclxuICAgIH1cclxuXHJcbiAgICBzZXRTdGF0ZSh2YWx1ZTogYW55KSB7XHJcbiAgICAgICAgdGhpcy5yYWRpb1N0YXRlLnRvdWNoZWQgIT09IHZhbHVlLnRvdWNoZWQgJiYgKHRoaXMucmFkaW9TdGF0ZS50b3VjaGVkID0gdmFsdWUudG91Y2hlZCk7XHJcbiAgICAgICAgdGhpcy5yYWRpb1N0YXRlLmRpcnR5ICE9PSB2YWx1ZS5kaXJ0eSAmJiAodGhpcy5yYWRpb1N0YXRlLmRpcnR5ID0gdmFsdWUuZGlydHkpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoYW5nZWRWYWwoKSB7XHJcbiAgICAgICAgbGV0IHZhbHVlID0gdGhpcy5pbnB1dFZhbHVlO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHZhbHVlKTsgLy8gc2V0IHRoZSBzZXNzaW9uIHZhbHVlIG9uIGNoZWNrZWRcclxuICAgICAgICAvLyBvbiBjbGljayBldmVudCBvbiByYWRpb1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DbGljaycpO1xyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZSh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgLy8gb25EZXN0cm95KCkge1xyXG4gICAgLy8gICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICAvLyB9XHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5maWVsZFZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLmZpZWxkVmFsdWVcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF9kYXRlJ10pIHtcclxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdF9kYXRlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X2RhdGUnXS5zcGxpdCgnfHwnKS5tYXAoc3RyID0+IHN0ci50cmltKCkpO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZUFQSSA9IGRlZmF1bHRfZGF0ZVswXTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSAoZGVmYXVsdF9kYXRlWzFdKSA/IChkZWZhdWx0X2RhdGVbMV0gPT09ICdDVVJSX0RBVEUnKSA/IHRoaXMubm93RGF0ZSA6IHRoaXMuY3JlYXRlRGF0ZShkZWZhdWx0X2RhdGVbMV0pXHJcbiAgICAgICAgICAgICAgICA6IHRoaXMubm93RGF0ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jcmVhdGVUaW1lU2xvdHMoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF9jb2xvciddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZGVmYXVsdF9jb2xvciddLnNwbGl0KCd8fCcpLm1hcChzdHIgPT4gc3RyLnRyaW0oKSkuZm9yRWFjaChjb2xvckNvZGUgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb2xvckNvZGUuaW5jbHVkZXMoJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sb3JTZWxlY3RlZCA9IGNvbG9yQ29kZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sb3JDb2RlQXJyID0gY29sb3JDb2RlLnNwbGl0KCd8JykubWFwKHN0ciA9PiBzdHIudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29sb3JDb2RlQXJyWzBdID09PSAnWScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2xvckF2YWlsYWJsZSA9IGNvbG9yQ29kZUFyclsxXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbG9yTm90QXZhaWxhYmxlID0gY29sb3JDb2RlQXJyWzFdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTm8gRGF0YSBGb3VuZCBMYWJlbCddKSB7XHJcbiAgICAgICAgICAgIHRoaXMubm9EYXRhRm91bmRMYWJlbCA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTm8gRGF0YSBGb3VuZCBMYWJlbCddO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyotLS0tLS0tLS0tICBEeW5hbWljIHN0eWxlICAtLS0tLS0tLS0tKi9cclxuXHJcbiAgICAgICAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgIHN0eWxlLmlubmVySFRNTCA9IGAucmFkaW8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMuY29sb3JBdmFpbGFibGV9ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlucHV0W3R5cGU9XCJyYWRpb1wiXTpjaGVja2VkICsgLnJhZGlvIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHt0aGlzLmNvbG9yU2VsZWN0ZWR9ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBpbnB1dFt0eXBlPVwicmFkaW9cIl06ZGlzYWJsZWQgKyAucmFkaW8ge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAke3RoaXMuY29sb3JOb3RBdmFpbGFibGV9ICFpbXBvcnRhbnQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgYDtcclxuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHN0eWxlKTtcclxuXHJcbiAgICAgICAgLyotLS0tLS0tLS0tICBEeW5hbWljIHN0eWxlIEVORCAtLS0tLS0tLS0tKi9cclxuXHJcbiAgICAgICAgdGhpcy5wcm9jZXNzQXBpUmVzKHRoaXMuYXBpVmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBjb25zdCBhcGlWYWx1ZSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0FwaVJlcyhhcGlWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc0FwaVJlcyhhcGlWYWx1ZSkge1xyXG4gICAgICAgIGlmIChhcGlWYWx1ZSAmJiBBcnJheS5pc0FycmF5KGFwaVZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhcGlEYXRlIG9mIGFwaVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXBpRGF0ZVt0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3RpbWVzbG90X3Nsb3QnXV0gJiYgYXBpRGF0ZVt0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3RpbWVzbG90X3N0YXR1cyddXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5wdXNoKGFwaURhdGVbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWyd0aW1lc2xvdF9zbG90J11dICsgJ3wnICsgYXBpRGF0ZVt0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3RpbWVzbG90X3N0YXR1cyddXSlcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVUaW1lU2xvdHMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25FbXB0eVNlc3Npb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIC8vdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG5cclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSBbXTtcclxuICAgICAgICBpZiAoZ2V0X2RhdGEudW5pcXVlX2lkcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGRhdGEgPSBnZXRfZGF0YS51bmlxdWVfaWRzO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5hcHBEYXRhLmlkXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEuYXBpS2V5cztcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFt0aGlzLmZpZWxkRGF0YS5hcGlfa2V5XTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFsuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KSldO1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW1xyXG4gICAgICAgICAgICAgICAgICAgIC4uLnVuaXF1ZV9pZF92YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlcXVlc3RfYXBpX2tleSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRhdGEuZm9yRWFjaChlbG0gPT4ge1xyXG4gICAgICAgICAgICBpZiAodW5pcXVlX2lkX3ZhbHVlLmluY2x1ZGVzKGVsbSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICAvL3Rocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY29uY2F0RGF0YSgpIHsgfVxyXG5cclxuICAgIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG5cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gY29uc3QgY2hhbmdlTWFwID0ge1xyXG4gICAgICAgIC8vICAgICBmaWVsZF9sYWJlbDogJ2ZpZWxkRGF0YS5maWVsZF9sYWJlbCcsXHJcbiAgICAgICAgLy8gICAgIHBsYWNlaG9sZGVyX3RleHQ6ICdmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dCcsXHJcbiAgICAgICAgLy8gICAgIHRvb2x0aXA6ICdmaWVsZERhdGEudG9vbHRpcCcsXHJcbiAgICAgICAgLy8gICAgICdhZGRpdGlvbmFsX3BhcmFtZXRlcnNbKl1BcmlhLUxhYmVsJzogJ0FkZGl0aW9uYWxQYXJhbWV0ZXJbXFwnQXJpYS1MYWJlbFxcJ10nLFxyXG4gICAgICAgIC8vICAgICAnZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlc1sqXSc6ICdmaWVsZERhdGEucG9zc2libGVfdmFsdWVzJ1xyXG4gICAgICAgIC8vIH07XHJcbiAgICAgICAgLy8gZm9yIChjb25zdCB2YWx1ZSBvZiBPYmplY3Qua2V5cyhjaGFuZ2VNYXApKSB7XHJcbiAgICAgICAgLy8gICAgIGNvbnN0IGxhbmdWYWwgPSB0aGlzLnN3aXRjaExhbmcodmFsdWUsIGRhdGEsIGNoYW5nZU1hcCk7XHJcbiAgICAgICAgLy8gICAgIGlmIChsYW5nVmFsKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB0aGlzW2xhbmdWYWwua2V5XSA9IGxhbmdWYWwudmFsO1xyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICAvLyBpZiAoY2hhbmdlcy5maWVsZERhdGEgJiYgY2hhbmdlcy5yb290RGF0YSAmJiBjaGFuZ2VzLnJvb3REYXRhLmN1cnJlbnRWYWx1ZS5sYW5nQ2hhbmdlZCkge1xyXG4gICAgICAgIC8vICAgICB0aGlzLnRvZ2dsZUxhbmd1YWdlKGNoYW5nZXMuZmllbGREYXRhLmN1cnJlbnRWYWx1ZSk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCIgKm5nSWY9XCJpc1Zpc2libGVcIlxyXG4gICAgY2xhc3M9XCJ7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIj5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkRGF0YS5maWVsZF9sYWJlbCE9JydcIj5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCIhaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIj57e2ZpZWxkRGF0YS5maWVsZF9sYWJlbH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDxsYWJlbCBjbGFzcz1cImNvbC1mb3JtLWxhYmVsXCIgKm5nSWY9XCJpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgW2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJpc01hbmRhdG9yeVwiIGNsYXNzPVwibWFuZGV0b3J5LW1hcmtcIj4gKjwvc3Bhbj5cclxuICAgICAgICAgICAgPGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+aTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuby1kYXRhLWluZm9cIiAqbmdJZj1cInNsb3RzLmxlbmd0aCA9PT0gMFwiPnt7bm9EYXRhRm91bmRMYWJlbH19PC9kaXY+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNsb3Qgb2Ygc2xvdHM7IGluZGV4IGFzIGlcIj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cInRpbWUtc2xvdC1jb250YWluZXIge3sgIWlucHV0VmFsdWUgJiYgaXNNYW5kYXRvcnkgJiYgKHJhZGlvU3RhdGUuZGlydHkgfHwgcmFkaW9TdGF0ZS50b3VjaGVkIHx8IHNob3dFcnJvck9uTmV4dCkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX17e2l9fVwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJ7e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFt2YWx1ZV09XCJzbG90Wyd2YWx1ZSddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiBmaWVsZERhdGEuZmllbGRfbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwiIXNsb3RbJ2F2YWlsYWJsZSddXCIgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCIgI3JhZGlvQ29udHJvbD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoZm9jdXMpPVwic2V0U3RhdGUocmFkaW9Db250cm9sKVwiIChibHVyKT1cInNldFN0YXRlKHJhZGlvQ29udHJvbClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY2hhbmdlKT1cImNoYW5nZWRWYWwoKTsgc2V0U3RhdGUocmFkaW9Db250cm9sKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJ7e2ZpZWxkRGF0YS51bmlxdWVfaWR9fXt7aX19XCIgY2xhc3M9XCJyYWRpb1wiPnt7c2xvdFsnbGFiZWwnXX19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuXHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJtdWx0aXBsZUVycm9yTWVzc2FnZTsgZWxzZSBzaW5nbGVFcnJvck1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IG1lc3NhZ2Ugb2YgbWVzc2FnZXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKm5nSWY9XCIhaW5wdXRWYWx1ZSAmJiBpc01hbmRhdG9yeSAmJiAocmFkaW9TdGF0ZS5kaXJ0eSB8fCByYWRpb1N0YXRlLnRvdWNoZWQgfHwgc2hvd0Vycm9yT25OZXh0KSAmJiBtZXNzYWdlLnR5cGUgPT0gJ01hbmRhdG9yeSdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiByZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3tyZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlICNzaW5nbGVFcnJvck1lc3NhZ2U+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItbWVzc2FnZS13cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAqbmdJZj1cIiFpbnB1dFZhbHVlICYmIGlzTWFuZGF0b3J5ICYmIChyYWRpb1N0YXRlLmRpcnR5IHx8IHJhZGlvU3RhdGUudG91Y2hlZCB8fCBzaG93RXJyb3JPbk5leHQpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHAgKm5nSWY9XCJpc01hbmRhdG9yeVwiIFtuZ1N0eWxlXT1cInsnY29sb3InOiBlcnJvck1lc3NhZ2VEYXRhLmNvbG9yfVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7e2Vycm9yTWVzc2FnZURhdGEubWVzc2FnZV90ZXh0fX1cclxuICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9uZy10ZW1wbGF0ZT5cclxuICAgICAgICAgICAgPG5nLWNvbnRhaW5lciAqbmdGb3I9XCJsZXQgaXRlbSBvZiBzaG93Q29tcGFyaXNvbkVycm9yIHwga2V5dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvci1tZXNzYWdlLXdyYXBwZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBbbmdTdHlsZV09XCJ7J2NvbG9yJzogaXRlbS52YWx1ZS5jb2xvcn1cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt7aXRlbS52YWx1ZS5tZXNzYWdlX3RleHR9fTwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuPC9kaXY+XHJcbiJdfQ==