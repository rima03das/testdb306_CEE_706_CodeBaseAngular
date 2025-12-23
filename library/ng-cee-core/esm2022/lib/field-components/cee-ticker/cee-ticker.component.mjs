import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { CommonModule } from '@angular/common';
import { CustomTooltipDirective } from '../../directives/app.directive';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { CalculationUtil } from '../../utils/calculation';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
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
import * as i12 from "@angular/router";
import * as i13 from "@angular/common";
import * as i14 from "../../directives/tooltip/tooltip.directive";
function CeeTickerComponent_div_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "iframe", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("src", ctx_r0.iframeLabel, i0.ɵɵsanitizeResourceUrl);
} }
function CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 10);
    i0.ɵɵlistener("click", function CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_1_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.onComponentEvent("OnClick")); });
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("\n\t\t\t\t\t", ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "", "");
    i0.ɵɵattribute("aria-label", fieldLabel_r3)("tabindex", ctx_r0.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1(" ", fieldLabel_r3, " ");
} }
function CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "label", 11);
    i0.ɵɵlistener("click", function CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_2_Template_label_click_0_listener() { i0.ɵɵrestoreView(_r4); const ctx_r0 = i0.ɵɵnextContext(4); return i0.ɵɵresetView(ctx_r0.onComponentEvent("OnClick")); });
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const fieldLabel_r3 = i0.ɵɵnextContext(2).$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMap(ctx_r0.isCustomClass && ctx_r0.fieldData.field_style ? ctx_r0.fieldData.field_style.custom_class_name : "");
    i0.ɵɵproperty("innerHTML", ctx_r0.checkIfIframe(fieldLabel_r3), i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", fieldLabel_r3)("tabindex", ctx_r0.tabIndexValue);
} }
function CeeTickerComponent_div_0_ng_container_3_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 12)(1, "span");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(4);
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(ctx_r0.counter.text);
} }
function CeeTickerComponent_div_0_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_1_Template, 2, 6, "label", 7)(2, CeeTickerComponent_div_0_ng_container_3_ng_container_1_label_2_Template, 1, 6, "label", 8)(3, CeeTickerComponent_div_0_ng_container_3_ng_container_1_div_3_Template, 3, 1, "div", 9);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r3 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(fieldLabel_r3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(fieldLabel_r3));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.counter && ctx_r0.counter.text);
} }
function CeeTickerComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeTickerComponent_div_0_ng_container_3_ng_container_1_Template, 4, 3, "ng-container", 3);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const fieldLabel_r3 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", fieldLabel_r3 && fieldLabel_r3 != "" && fieldLabel_r3 != " ");
} }
function CeeTickerComponent_div_0_button_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 13);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.tooltipText);
} }
function CeeTickerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 1)(1, "div", 2);
    i0.ɵɵtemplate(2, CeeTickerComponent_div_0_ng_container_2_Template, 2, 1, "ng-container", 3)(3, CeeTickerComponent_div_0_ng_container_3_Template, 2, 1, "ng-container", 4)(4, CeeTickerComponent_div_0_button_4_Template, 2, 2, "button", 5);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵpropertyInterpolate("id", ctx_r0.html_id);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.iframeLabel && ctx_r0.iframeLabel != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.fieldLabels);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.hasTooltip);
} }
export class CeeTickerComponent extends BaseView {
    sanitizer;
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
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    html_id = '';
    fieldLabels = [];
    labelEmitter;
    iframeLabel;
    AdditionalParameter = {};
    tooltipText = "";
    flatUnflat;
    counter = { min: 0, sec: 0 };
    intervalId;
    emitKey = {};
    currrentDateTime = new Date().getTime();
    calculationUtil;
    constructor(sanitizer, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.sanitizer = sanitizer;
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
        this.flatUnflat = new FlatUnflat(appDataService);
        this.calculationUtil = new CalculationUtil();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        // ############## Auto Start Ticker ################
        // if(this.AdditionalParameter['AutoStart'] && this.AdditionalParameter['AutoStart'].toLowerCase() == 'true' && fieldData && fieldData['minTimestamp'] && fieldData['maxTimestamp'] && new Date().getTime() >= fieldData['minTimestamp'] && new Date().getTime() <= fieldData['maxTimestamp']) {
        if (this.AdditionalParameter['AutoStart'] && this.AdditionalParameter['AutoStart'].toLowerCase() == 'true') {
            setTimeout(() => {
                // console.log("id: ",this.stepId)
                this.startTimer();
            }, 2000);
        }
        // ############## Auto Start Ticker ###############
    }
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
        clearInterval(this.intervalId);
    }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
        clearInterval(this.intervalId);
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
        }
        for (const key in this.emitKey) {
            if (this.emitKey[key]) {
                this.emitKey[key].unsubscribe();
            }
        }
    }
    concatData() { }
    onViewDataInit() {
        // For unique html id
        // console.log(this.rowData);
        this.html_id = this.fieldData.html_id;
        // END
        this.tooltipText = (this.fieldData && this.fieldData.tooltip) ? this.fieldData.tooltip.toString().replace(/(<([^>]+)>)/ig, '') : "";
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                this.AdditionalParameter[parameter.parameter_type] = parameter.value;
            }
        }
        this.fieldLabels = []; // TODO : Check Implementation
        this.fieldLabels.push(this.fieldData.field_label); // OLD Implementation
        // this.getValue(this.fieldData.field_label);
        const apiKey = localStorage.getItem('singleApiKey') === 'true' ? this.fieldData.api_key : this.fieldData.response_api_key;
        if (apiKey || this.fieldData.field_label.includes('((dynamic))')) {
            if (this.rowData) {
                if (this.rowData.hasOwnProperty('value')) {
                    this.fieldLabels = [];
                    if (this.fieldData.possible_values.length > 0) {
                        for (const val of this.fieldData.possible_values) {
                            if (this.commonUtil.getPossibleId(val) == this.rowData.value) {
                                this.fieldLabels.push(this.commonUtil.getPossibleValue(val));
                            }
                        }
                    }
                    else {
                        if (this.rowData.value !== undefined) {
                            this.fieldLabels.push(this.getDataFormattedValue(this.rowData.value));
                        }
                        else {
                            this.fieldLabels = [this.getDataFormattedValue(this.fieldData.field_label)];
                        }
                    }
                }
            }
            else if (this.fieldValue !== undefined && this.fieldValue !== null) {
                this.fieldLabels = [];
                this.fieldValue = this.fieldValue ? this.getDataFormattedValue(this.fieldValue) : this.fieldValue;
                this.fieldLabels.push(this.fieldValue);
            }
        }
        // set dynamic label on load
        if (!this.rowData) {
            this.getDynamicLabel();
            this.labelEmitter = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                const data = {};
                data[res.apiKey] = res.value;
                this.getDynamicLabel(data);
            });
        }
        if (this.additionalParameter['iframe']) {
            this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(this.additionalParameter['iframe']);
        }
        this.emitKey['startTickerEmitter'] = this.sharedEventsService.startTickerEmitter.subscribe(res => {
            if (res) {
                // console.log(res);
                if (this.fieldData.unique_id == res) {
                    this.startTimer();
                }
            }
        });
        this.emitKey['stopTickerEmitter'] = this.sharedEventsService.stopTickerEmitter.subscribe(res => {
            if (res) {
                // console.log("unique_id: ",this.fieldData.unique_id, "res: ",res);
                if (this.fieldData.unique_id == res) {
                    this.stopTimer();
                }
            }
        });
        this.emitKey['pauseTickerEmitter'] = this.sharedEventsService.pauseTickerEmitter.subscribe(res => {
            if (res) {
                // console.log("unique_id: ",this.fieldData.unique_id, "res: ",res);
                if (this.fieldData.unique_id == res) {
                    this.pauseTimer();
                }
            }
        });
    }
    onAPICallback(data) {
        if (!this.rowData) {
            data = this.flatUnflat.createNestedObject(data);
            this.getDynamicLabel(data);
            let resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (resData !== null && resData !== undefined) {
                // console.log("LINE-133",this.fieldData.unique_id, resData);
                if (Array.isArray(resData)) {
                    this.fieldLabels = this.returnLabelsMapPossibleValues(resData);
                }
                else {
                    resData = this.getDataFormattedValue(resData);
                    this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
                }
            }
        }
    }
    getDataFormattedValue(data) {
        // For Data Format
        try {
            if (this.AdditionalParameter['Data Format']) {
                const formats = this.AdditionalParameter['Data Format'].split('||').map(str => str && str.trim());
                return this.setDynamicLabelUtil.returnFormattedValue(data, formats.shift(), formats);
                // switch (formats[0].toLowerCase()) {
                //     case 'currency':
                //         return `${getCurrencySymbol(formats[1].trim(), 'narrow')}` +
                //             `${Number(data).toFixed(Number(formats[2].trim())).replace(/\d(?=(\d{3})+\.)/g, '$&,')}`;
                //     case 'time':
                //         return moment(Number(data)).format(formats[1].trim());
                //     case 'date':
                //         return moment(data).format(formats[1].trim());
                //     default:
                //         return data;
                // }
            }
        }
        catch (error) {
            console.error(`Something went wrong while transforming data !!!: ${error}`);
        }
        return data;
    }
    getDynamicLabel(data) {
        if (this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
            if (this.fieldData.field_label != null) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.fieldData.field_label);
            }
        }
    }
    /**
     * function returns a map with possible value id to the value
     * @param values api response data
     */
    returnLabelsMapPossibleValues(values) {
        let data = values;
        for (const val of values) {
            if (this.fieldData.possible_values.length > 0) {
                data = this.fieldData.possible_values.map(pv => {
                    if (this.commonUtil.getPossibleId(pv) == val) {
                        return this.commonUtil.getPossibleValue(pv);
                    }
                });
            }
        }
        return data;
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
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
            this.fieldLabels = [get_data[unique_id_value]];
            // this.inputValue = get_data[unique_id_value];
            // this.updateFieldData(this.inputValue);
        }
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    checkIfIframe(value) {
        if (value.includes('iframe')) {
            return this.sanitizer.bypassSecurityTrustHtml(value);
        }
        else {
            return this.getDataFormattedValue(value);
        }
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
    }
    toggleLanguage(data) {
    }
    getTimestampInSeconds() {
        return Math.floor(Date.now() / 1000);
    }
    getCalculatedMaxMinTime(value) {
        var calculatedValue = 0;
        if (value.includes('##')) {
            let apiStoreData = this.apiDataService.getApiDataByHandler(value.split('##')[0]) ? this.apiDataService.getApiDataByHandler(value.split('##')[0]).value : {};
            // console.log("api value: ", apiStoreData[value])
            if (apiStoreData[value]) {
                calculatedValue = new Date(apiStoreData[value]).getTime();
            }
            else {
                calculatedValue = new Date().getTime();
            }
        }
        else if (value.includes("CURR_TIME")) {
            let currTimestamp = new Date().getTime();
            // var calString = value.split('+')[1];
            value = value.replace("CURR_TIME", String(currTimestamp));
            if (value.includes("s")) {
                value = value.replace("s", "*1000");
            }
            if (value.includes("m")) {
                value = value.replace("m", "*60*1000");
            }
            if (value.includes("h")) {
                value = value.replace("h", "*60*60*1000");
            }
            if (value.includes("d")) {
                value = value.replace("d", "*24*60*60*1000");
            }
            if (value.includes("M")) {
                value = value.replace("M", "*30*24*60*60*1000");
            }
            if (value.includes("Y")) {
                value = value.replace("Y", "*365*24*60*60*1000");
            }
            calculatedValue = this.calculationUtil.calculate(value);
        }
        else {
            calculatedValue = new Date(value).getTime();
        }
        return calculatedValue;
    }
    setCounter(maxCalculatedValue, minCalculatedValue, tickerFormat = '{{d}} days {{h}} hours {{m}} minutes {{s}} seconds') {
        var timeDiff = 0;
        // console.log("status: ",this.counter['status']);
        if (this.counter['status'] != 'paused') {
            if (this.AdditionalParameter['TickerType'] != 'increasing') {
                timeDiff = maxCalculatedValue - minCalculatedValue;
            }
            else {
                timeDiff = new Date().getTime() - minCalculatedValue;
            }
        }
        else {
            timeDiff = this.counter.timeDiffrence;
        }
        // console.log("timeDiff: ",timeDiff)
        const years = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365) % 365) >= 1 ? Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 365) % 365) : 0;
        const months = Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30) % 12) >= 1 ? Math.floor(timeDiff / (1000 * 60 * 60 * 24 * 30) % 12) : 0;
        const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24) % 30) >= 1 ? Math.floor(timeDiff / (1000 * 60 * 60 * 24) % 30) : 0;
        const hours = Math.floor(timeDiff / (1000 * 60 * 60) % 24) >= 1 ? Math.floor(timeDiff / (1000 * 60 * 60) % 24) : 0;
        const minutes = Math.floor(timeDiff / (1000 * 60) % 60) >= 1 ? Math.floor(timeDiff / (1000 * 60) % 60) : 0;
        const seconds = Math.ceil(timeDiff / (1000) % 60) >= 1 ? Math.ceil(timeDiff / (1000) % 60) : 0;
        // console.log("months: ", months, " days: ", days, " hours: ", hours, " minutes: ", minutes, " seconds: ", seconds);
        let timerText = '';
        if (years > 0) {
            timerText = timerText + String(years) + ' years ';
        }
        if (months > 0) {
            timerText = timerText + String(months) + ' months ';
        }
        if (days > 0) {
            timerText = timerText + String(days) + ' days ';
        }
        if (hours > 0) {
            timerText = timerText + String(hours) + ' hours ';
        }
        if (minutes > 0) {
            timerText = timerText + String(minutes) + ' minutes ';
        }
        if (seconds > 0) {
            timerText = timerText + String(seconds) + ' seconds ';
        }
        timerText = timerText.trim();
        this.counter = {
            intervalId: '',
            tickerType: this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing',
            maxTimestamp: maxCalculatedValue,
            minTimestamp: minCalculatedValue,
            timeDiffrence: timeDiff,
            year: years,
            month: months,
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds,
            text: tickerFormat.replace("{{dynamic}}", timerText).replace("{{Y}}", String(years)).replace("{{M}}", String(months)).replace("{{d}}", String(days)).replace("{{h}}", String(hours)).replace("{{m}}", String(minutes)).replace("{{s}}", String(seconds)),
            status: ''
        };
        this.updateFieldData({
            intervalId: '',
            tickerType: this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing',
            maxTimestamp: maxCalculatedValue,
            minTimestamp: minCalculatedValue,
            timeDiffrence: timeDiff,
            year: years,
            month: months,
            day: days,
            hour: hours,
            minute: minutes,
            second: seconds,
            text: tickerFormat.replace("{{dynamic}}", timerText).replace("{{Y}}", String(years)).replace("{{M}}", String(months)).replace("{{d}}", String(days)).replace("{{h}}", String(hours)).replace("{{m}}", String(minutes)).replace("{{s}}", String(seconds)),
            status: ''
        });
        this.callOnTickerStart();
    }
    updateCounter(tickerFormat) {
        this.counter['years'] = Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24 * 365) % 365) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24 * 365) % 365) : 0;
        this.counter['months'] = Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24 * 30) % 12) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24 * 30) % 12) : 0;
        this.counter['days'] = Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24) % 30) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60 * 24) % 30) : 0;
        this.counter['hours'] = Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60) % 24) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60 * 60) % 24) : 0;
        this.counter['minutes'] = Math.floor(this.counter.timeDiffrence / (1000 * 60) % 60) >= 1 ? Math.floor(this.counter.timeDiffrence / (1000 * 60) % 60) : 0;
        this.counter['seconds'] = Math.ceil(this.counter.timeDiffrence / (1000) % 60) >= 1 ? Math.ceil(this.counter.timeDiffrence / (1000) % 60) : 0;
        let timerText = '';
        if (this.counter['years'] > 0) {
            timerText = timerText + String(this.counter['years']) + ' years ';
        }
        if (this.counter['months'] > 0) {
            timerText = timerText + String(this.counter['months']) + ' months ';
        }
        if (this.counter['days'] > 0) {
            timerText = timerText + String(this.counter['days']) + ' days ';
        }
        if (this.counter['hours'] > 0) {
            timerText = timerText + String(this.counter['hours']) + ' hours ';
        }
        if (this.counter['minutes'] > 0) {
            timerText = timerText + String(this.counter['minutes']) + ' minutes ';
        }
        if (this.counter['seconds'] > 0) {
            timerText = timerText + String(this.counter['seconds']) + ' seconds ';
        }
        timerText = timerText.trim();
        this.counter['text'] = tickerFormat.replace("{{dynamic}}", timerText).replace("{{Y}}", String(this.counter['years'])).replace("{{M}}", String(this.counter['months'])).replace("{{d}}", String(this.counter['days'])).replace("{{h}}", String(this.counter['hours'])).replace("{{m}}", String(this.counter['minutes'])).replace("{{s}}", String(this.counter['seconds']));
    }
    startTimer() {
        var fieldData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        // console.log("fieldData: ",fieldData)
        var tickerType = this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing';
        var tickerFormat = this.AdditionalParameter['TickerFormat'] ? this.AdditionalParameter['TickerFormat'] : '{{d}} days {{h}} hours {{m}} minutes {{s}} seconds';
        var maxValue = this.AdditionalParameter['MaxValue'] ? this.AdditionalParameter['MaxValue'] : (this.AdditionalParameter['TickerType'] == 'increasing' ? 'CURR_TIME+10m' : 'CURR_TIME');
        var minValue = this.AdditionalParameter['MinValue'] ? this.AdditionalParameter['MinValue'] : (this.AdditionalParameter['TickerType'] == 'increasing' ? 'CURR_TIME' : 'CURR_TIME+10m');
        var maxCalculatedValue = this.getCalculatedMaxMinTime(maxValue);
        var minCalculatedValue = this.getCalculatedMaxMinTime(minValue);
        // console.log("maxValue: ", maxValue, " minValue: ", minValue);
        // console.log("maxCalculatedValue: ", maxCalculatedValue, " minCalculatedValue: ", minCalculatedValue);
        // if(new Date().getTime() < minValue || new Date().getTime() > maxCalculatedValue || this.counter['status'] == 'paused') {
        if (new Date().getTime() < minValue || new Date().getTime() > maxCalculatedValue || this.counter['status'] == 'started') {
            // console.log("true0")
            return;
        }
        else {
            if (tickerType == 'increasing') {
                if (fieldData && fieldData['minTimestamp'] && new Date().getTime() >= minCalculatedValue) {
                    // console.log("true1")
                    this.setCounter(fieldData['maxTimestamp'], fieldData['minTimestamp'], tickerFormat);
                }
                else {
                    // console.log("false1")
                    this.setCounter(maxCalculatedValue, minCalculatedValue, tickerFormat);
                }
            }
            else {
                if (fieldData && fieldData['minTimestamp'] && new Date().getTime() >= minCalculatedValue) {
                    // console.log("true2",fieldData['maxTimestamp']," --- ",new Date().getTime())
                    this.setCounter(fieldData['maxTimestamp'], new Date().getTime(), tickerFormat);
                }
                else {
                    // console.log("false2")
                    this.setCounter(maxCalculatedValue, minCalculatedValue, tickerFormat);
                }
            }
        }
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
        if (tickerType == 'increasing') {
            this.intervalId = setInterval(() => {
                // console.log("###### timeDiffrence",this.counter.timeDiffrence)
                // if((this.counter.timeDiffrence + 1000) < (this.counter.maxTimestamp - this.counter.minTimestamp)) {
                if (this.counter.timeDiffrence < (this.counter.maxTimestamp - this.counter.minTimestamp) && this.counter['status'] != 'paused') {
                    this.counter.timeDiffrence += 1000;
                    // console.log(this.counter.maxTimestamp," - ",this.counter.minTimestamp, " ###### timeDiffrence ",this.counter.timeDiffrence)
                    // console.log("intervalId: ",this.intervalId)
                    this.counter['intervalId'] = this.intervalId;
                    this.counter['status'] = 'started';
                    this.updateCounter(tickerFormat);
                    var apiStoreData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
                    // console.log("intervalId: ",this.counter['intervalId'], " intervalId: ", apiStoreData['intervalId'])
                    if (!apiStoreData['intervalId']) {
                        this.updateFieldData({
                            intervalId: this.counter['intervalId'],
                            tickerType: this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing',
                            maxTimestamp: this.counter['maxTimestamp'],
                            minTimestamp: this.counter['minTimestamp'],
                            timeDiffrence: this.counter['timeDiffrence'],
                            year: this.counter['year'],
                            month: this.counter['month'],
                            day: this.counter['day'],
                            hour: this.counter['hour'],
                            minute: this.counter['minute'],
                            second: this.counter['second'],
                            text: this.counter['text'],
                            status: 'started'
                        });
                    }
                    // console.log("###### text",this.counter.text);
                }
                if ((this.counter.timeDiffrence + 1000) >= (this.counter.maxTimestamp - this.counter.minTimestamp)) {
                    // if (this.counter.timeDiffrence >= (this.counter.maxTimestamp - this.counter.minTimestamp)) {
                    clearInterval(this.intervalId);
                    this.callOnTickerStop();
                }
            }, 1000);
        }
        else {
            this.intervalId = setInterval(() => {
                // console.log("###### timeDiffrence",this.counter.timeDiffrence)
                if (this.counter.timeDiffrence > 0 && this.counter['status'] != 'paused') {
                    this.counter.timeDiffrence -= 1000;
                    // console.log("###### timeDiffrence",this.counter.timeDiffrence)
                    // console.log("intervalId: ",this.intervalId)
                    this.counter['intervalId'] = this.intervalId;
                    this.counter['status'] = 'started';
                    this.updateCounter(tickerFormat);
                    var apiStoreData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
                    // console.log("intervalId: ",this.counter['intervalId'], " intervalId: ", apiStoreData['intervalId'])
                    if (!apiStoreData['intervalId']) {
                        this.updateFieldData({
                            intervalId: this.counter['intervalId'],
                            tickerType: this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing',
                            maxTimestamp: this.counter['maxTimestamp'],
                            minTimestamp: this.counter['minTimestamp'],
                            timeDiffrence: this.counter['timeDiffrence'],
                            year: this.counter['year'],
                            month: this.counter['month'],
                            day: this.counter['day'],
                            hour: this.counter['hour'],
                            minute: this.counter['minute'],
                            second: this.counter['second'],
                            text: this.counter['text'],
                            status: 'started',
                        });
                    }
                    // console.log("###### text",this.counter.text);
                }
                if (this.counter.timeDiffrence <= 0) {
                    clearInterval(this.intervalId);
                    this.callOnTickerStop();
                }
            }, 1000);
        }
    }
    stopTimer() {
        var tickerType = this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing';
        var fieldData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        this.stopTimerUpdateFieldData(tickerType, fieldData);
    }
    stopTimerUpdateFieldData(tickerType, fieldData) {
        this.counter['maxTimestamp'] = (tickerType == 'increasing') ? new Date().getTime() : fieldData['maxTimestamp'];
        this.counter['minTimestamp'] = (tickerType != 'increasing') ? new Date().getTime() : fieldData['minTimestamp'];
        this.counter['status'] = 'stoped';
        this.updateFieldData('');
        clearInterval(fieldData['intervalId']);
        this.callOnTickerStop();
    }
    pauseTimer() {
        var tickerType = this.AdditionalParameter['TickerType'] ? this.AdditionalParameter['TickerType'] : 'increasing';
        var fieldData = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        this.pauseTimerUpdateFieldData(tickerType, fieldData);
    }
    pauseTimerUpdateFieldData(tickerType, fieldData) {
        this.counter['maxTimestamp'] = (tickerType == 'increasing') ? new Date().getTime() : fieldData['maxTimestamp'];
        this.counter['minTimestamp'] = (tickerType != 'increasing') ? new Date().getTime() : fieldData['minTimestamp'];
        // this.counter['timeDiffrence'] = this.counter['maxTimestamp'] - this.counter['minTimestamp'];
        this.counter['status'] = 'paused';
        this.updateFieldData({
            intervalId: fieldData['intervalId'],
            tickerType: tickerType,
            maxTimestamp: fieldData['maxTimestamp'],
            minTimestamp: fieldData['minTimestamp'],
            timeDiffrence: fieldData['timeDiffrence'],
            year: fieldData['year'],
            month: fieldData['month'],
            day: fieldData['day'],
            hour: fieldData['hour'],
            minute: fieldData['minute'],
            second: fieldData['second'],
            text: fieldData['text'],
            status: 'paused'
        });
        clearInterval(fieldData['intervalId']);
        this.callOnTickerPause();
    }
    callOnTickerStop() {
        this.wfeStepLoaderService.loadStepById(this.stepId).subscribe((data) => {
            this.callPerticularEvent(data, 'OnTickerStop');
        });
    }
    callPerticularEvent(data, eventName = 'OnTickerStop') {
        let eventList = data.event_list.filter(event => event.event_name === eventName);
        if (eventList.length > 0) {
            for (const event of JSON.parse(JSON.stringify(eventList))) {
                // console.log("event event: ",event)
                let tickerID = event['event_params'][0]['invoke_event_config']['additional_parameters'].filter(function (el) { return el.parameter_type == 'TickerID'; }).length > 0 ? event['event_params'][0]['invoke_event_config']['additional_parameters'].filter(function (el) { return el.parameter_type == 'TickerID'; })[0].value : '';
                if (event.isDefault === true && tickerID === this.fieldData.unique_id) {
                    // console.log("event event: ",event)
                    this.wfeEventListHandler.switchEventDisplayType(event, eventList, {}, true);
                }
            }
        }
    }
    callOnTickerStart() {
        this.wfeStepLoaderService.loadStepById(this.stepId).subscribe((data) => {
            this.callPerticularEvent(data, 'OnTickerStart');
        });
    }
    callOnTickerPause() {
        this.wfeStepLoaderService.loadStepById(this.stepId).subscribe((data) => {
            this.callPerticularEvent(data, 'OnTickerPause');
        });
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
        if (changes.rowData && changes.rowData.currentValue &&
            this.fieldLabels[0] !== changes.rowData.currentValue.value) {
            if (this.fieldData.possible_values.length > 0) {
                for (const val of this.fieldData.possible_values) {
                    if (this.commonUtil.getPossibleId(val) == changes.rowData.currentValue.value) {
                        this.fieldLabels.push(this.commonUtil.getPossibleValue(val));
                    }
                }
            }
            else {
                // setTimeout(() => { // OLD Implementation
                this.fieldLabels = [changes.rowData.currentValue.value];
                // }, 0); // OLD Implementation
            }
        }
    }
    static ɵfac = function CeeTickerComponent_Factory(t) { return new (t || CeeTickerComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.MatDialog), i0.ɵɵdirectiveInject(i9.MatSnackBar), i0.ɵɵdirectiveInject(i10.HttpClient), i0.ɵɵdirectiveInject(i11.CeeApiService), i0.ɵɵdirectiveInject(i12.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeTickerComponent, selectors: [["app-cee-ticker"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "id", 4, "ngIf"], [1, "field-wrapper", 3, "id"], [1, "form-label"], [4, "ngIf"], [4, "ngFor", "ngForOf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["title", "label-component", "width", "100%", "height", "100%", "allow", "autoplay; encrypted-media", "allowfullscreen", "", 3, "src"], [3, "class", "click", 4, "ngIf"], [3, "innerHTML", "class", "click", 4, "ngIf"], ["class", "form-field", 4, "ngIf"], [3, "click"], [3, "click", "innerHTML"], [1, "form-field"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"]], template: function CeeTickerComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeTickerComponent_div_0_Template, 5, 4, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, CommonModule, i13.NgForOf, i13.NgIf, TooltipModule, i14.TooltipDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeTickerComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-ticker', standalone: true, imports: [MatTooltipModule, CustomTooltipDirective, CommonModule, TooltipModule], template: "<div class=\"field-wrapper\" id=\"{{html_id}}\" *ngIf=\"isVisible\">\r\n\t<div class=\"form-label\">\r\n\t\t<ng-container *ngIf=\"iframeLabel && iframeLabel != ''\">\r\n\t\t\t<iframe title=\"label-component\" width=\"100%\" height=\"100%\" [src]=\"iframeLabel\" allow=\"autoplay; encrypted-media\"\r\n\t\t\t\tallowfullscreen></iframe>\r\n\t\t</ng-container>\r\n\t\t<ng-container *ngFor=\"let fieldLabel of fieldLabels\">\r\n\t\t\t<ng-container *ngIf=\"fieldLabel && fieldLabel !='' && fieldLabel !=' '\">\r\n\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" *ngIf=\"!isHTML(fieldLabel)\" (click)=\"onComponentEvent('OnClick')\" class=\"\r\n\t\t\t\t\t{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t\t\t\t\t{{fieldLabel}}\r\n\t\t\t\t</label>\r\n\t\t\t\t<label [attr.aria-label]=\"fieldLabel\" [attr.tabindex]=\"tabIndexValue\" *ngIf=\"isHTML(fieldLabel)\" [innerHTML]=\"checkIfIframe(fieldLabel)\"\r\n\t\t\t\t\t(click)=\"onComponentEvent('OnClick')\"\r\n\t\t\t\t\tclass=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\"></label>\r\n\t\t\t\t<div class=\"form-field\" *ngIf=\"counter && counter.text\">\r\n\t\t\t\t\t<span>{{counter.text}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</ng-container>\r\n\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\"\r\n\t\t[tooltip]=\"fieldData.tooltip\"\r\n\t\t\t[attr.aria-label]=\"'Tooltip: ' + tooltipText \">i</button>\r\n\r\n\t\t<!-- Tooltip with informaion icon -->\r\n\t\t<!-- <button *ngIf=\"is_material && hasTooltip\" type=\"button\"\r\n\t\t\tclass=\"btn-tooltip ml-auto btn-tooltip-{{fieldData.unique_id}}\"\r\n\t\t\t[attr.aria-label]=\"'Tooltip: ' + tooltipText\" [customTooltip]=\"tooltipTemplate\"\r\n\t\t\t[tooltipId]=\"fieldData.unique_id\" [tooltipAdditionalparameter]=\"additionalParameter\">\r\n\t\t\ti\r\n\t\t</button> -->\r\n\r\n\t\t<!-- Tooltip Template -->\r\n\t\t<!-- <ng-template #tooltipTemplate>\r\n\t\t\t<div class=\"tooltip_container\">\r\n\t\t\t\t<span class=\"tooltip_text\" [innerHTML]=\"fieldData.tooltip\"></span>\r\n\t\t\t</div>\r\n\t\t</ng-template> -->\r\n\t</div>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: i2.UserDataHandlerService }, { type: i3.SharedEventsServiceService }, { type: i4.CEEInternalEmitterService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.MatDialog }, { type: i9.MatSnackBar }, { type: i10.HttpClient }, { type: i11.CeeApiService }, { type: i12.Router }], { stepId: [{
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
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeTickerComponent, { className: "CeeTickerComponent", filePath: "lib\\field-components\\cee-ticker\\cee-ticker.component.ts", lineNumber: 32 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLXRpY2tlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtdGlja2VyL2NlZS10aWNrZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLXRpY2tlci9jZWUtdGlja2VyLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFxRCxNQUFNLGVBQWUsQ0FBQztBQUM1RyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBSTFELE9BQU8sRUFBRSxZQUFZLEVBQXFCLE1BQU0saUJBQWlCLENBQUM7QUFJbEUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7SUNwQnhELDZCQUF1RDtJQUN0RCw0QkFDMEI7Ozs7SUFEaUMsY0FBbUI7SUFBbkIsa0VBQW1COzs7O0lBSzdFLGlDQUMwRjtJQURRLG9OQUFTLHdCQUFpQixTQUFTLENBQUMsS0FBQztJQUV0SSxZQUNEO0lBQUEsaUJBQVE7Ozs7SUFIZ0kseUpBQy9DOztJ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LENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVILE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ILE1BQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMzRyxNQUFNLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQy9GLHFIQUFxSDtRQUNySCxJQUFJLFNBQVMsR0FBRyxFQUFFLENB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QUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3ZMLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDMUssSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxJQUFJLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDakssSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxHQUFHLENBQUMsSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pKLElBQUksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLGFBQWEsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0ksSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNyRTtRQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLFVBQVUsQ0FBQztTQUN2RTtRQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDekIsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLFFBQVEsQ0FBQztTQUNuRTtRQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDMUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLFNBQVMsQ0FBQztTQUNyRTtRQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUN6RTtRQUNELElBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDNUIsU0FBUyxHQUFHLFNBQVMsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFHLFdBQVcsQ0FBQztTQUN6RTtRQUNELFNBQVMsR0FBRyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDN0IsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxZQUFZLENBQUMsT0FBTyxDQUFDLGFBQWEsRUFBRSxTQUFTLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FB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TGlzdGVuZXIsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEZsYXRVbmZsYXQgfSBmcm9tICcuLi8uLi91dGlscy9mbGF0LXVuZmxhdC1qc29uJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlUmVzb3VyY2VVcmwgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBnZXRDdXJyZW5jeVN5bWJvbCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCBtb21lbnQgZnJvbSAnbW9tZW50JztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDdXN0b21Ub29sdGlwRGlyZWN0aXZlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy9hcHAuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgQ2FsY3VsYXRpb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FsY3VsYXRpb24nO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogJ2FwcC1jZWUtdGlja2VyJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtdGlja2VyLmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS10aWNrZXIuY29tcG9uZW50LnNjc3MnLCAnLi4vZmllbGQtY29tbW9uLnNjc3MnXSxcclxuICAgIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgICBpbXBvcnRzOiBbTWF0VG9vbHRpcE1vZHVsZSwgQ3VzdG9tVG9vbHRpcERpcmVjdGl2ZSwgQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlVGlja2VyQ29tcG9uZW50IGV4dGVuZHMgQmFzZVZpZXcgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSwgT25DaGFuZ2VzIHtcclxuXHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2aXNpYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBodG1sX2lkID0gJyc7XHJcbiAgICBmaWVsZExhYmVscyA9IFtdO1xyXG4gICAgbGFiZWxFbWl0dGVyOiBTdWJzY3JpcHRpb247XHJcbiAgICBpZnJhbWVMYWJlbDogU2FmZVJlc291cmNlVXJsO1xyXG4gICAgQWRkaXRpb25hbFBhcmFtZXRlcjogYW55ID0ge307XHJcbiAgICB0b29sdGlwVGV4dDogYW55ID0gXCJcIjtcclxuICAgIHByaXZhdGUgZmxhdFVuZmxhdDogRmxhdFVuZmxhdDtcclxuICAgIGNvdW50ZXI6IGFueSA9IHsgbWluOiAwLCBzZWM6IDAgfTtcclxuICAgIGludGVydmFsSWQ6IGFueTtcclxuICAgIGVtaXRLZXkgPSB7fTtcclxuICAgIGN1cnJyZW50RGF0ZVRpbWU6IGFueSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgY2FsY3VsYXRpb25VdGlsOiBDYWxjdWxhdGlvblV0aWw7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyBjZWVBcGlTZXJ2aWNlOiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI6IFJvdXRlclxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlciwgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCwgY2VlQXBpU2VydmljZSwgcm91dGVyKTtcclxuICAgICAgICB0aGlzLmZsYXRVbmZsYXQgPSBuZXcgRmxhdFVuZmxhdChhcHBEYXRhU2VydmljZSk7XHJcbiAgICAgICAgdGhpcy5jYWxjdWxhdGlvblV0aWwgPSBuZXcgQ2FsY3VsYXRpb25VdGlsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5pbml0KHRoaXMuc3RlcElkLCB0aGlzLmZpZWxkRGF0YSwgdGhpcy5rZWVwU3RhdGUsIHRoaXMucm93RGF0YSk7XHJcbiAgICAgICAgLy8gIyMjIyMjIyMjIyMjIyMgQXV0byBTdGFydCBUaWNrZXIgIyMjIyMjIyMjIyMjIyMjI1xyXG4gICAgICAgIC8vIGlmKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQXV0b1N0YXJ0J10gJiYgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydBdXRvU3RhcnQnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyAmJiBmaWVsZERhdGEgJiYgZmllbGREYXRhWydtaW5UaW1lc3RhbXAnXSAmJiBmaWVsZERhdGFbJ21heFRpbWVzdGFtcCddICYmIG5ldyBEYXRlKCkuZ2V0VGltZSgpID49IGZpZWxkRGF0YVsnbWluVGltZXN0YW1wJ10gJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgPD0gZmllbGREYXRhWydtYXhUaW1lc3RhbXAnXSkge1xyXG4gICAgICAgIGlmKHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnQXV0b1N0YXJ0J10gJiYgdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydBdXRvU3RhcnQnXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJyApIHtcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlkOiBcIix0aGlzLnN0ZXBJZClcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgICB9LCAyMDAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gIyMjIyMjIyMjIyMjIyMgQXV0byBTdGFydCBUaWNrZXIgIyMjIyMjIyMjIyMjIyMjXHJcbiAgICB9XHJcblxyXG4gICAgLy9ASG9zdExpc3RlbmVyKCd3aW5kb3c6YmVmb3JldW5sb2FkJylcclxuICAgIG9uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTsgLy8gdW5zdWJzY3JpYmUgdGhlIGV2ZW50IG9uIGRlc3Ryb3lcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZClcclxuICAgIH1cclxuXHJcbiAgICBuZ09uRGVzdHJveSgpIHtcclxuICAgICAgICB0aGlzLm9uVmlld1VubG9hZCgpO1xyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTsgLy8gdW5zdWJzY3JpYmUgdGhlIGV2ZW50IG9uIGRlc3Ryb3lcclxuICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZClcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbEVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEVtaXR0ZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5lbWl0S2V5KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmVtaXRLZXlba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lbWl0S2V5W2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICAvLyBGb3IgdW5pcXVlIGh0bWwgaWRcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnJvd0RhdGEpO1xyXG4gICAgICAgIHRoaXMuaHRtbF9pZCA9IHRoaXMuZmllbGREYXRhLmh0bWxfaWRcclxuICAgICAgICAvLyBFTkRcclxuICAgICAgICB0aGlzLnRvb2x0aXBUZXh0ID0gKCB0aGlzLmZpZWxkRGF0YSAmJiB0aGlzLmZpZWxkRGF0YS50b29sdGlwICkgPyB0aGlzLmZpZWxkRGF0YS50b29sdGlwLnRvU3RyaW5nKCkucmVwbGFjZSggLyg8KFtePl0rKT4pL2lnLCAnJykgOiBcIlwiO1xyXG4gICAgICAgIHRoaXMudGFiSW5kZXhWYWx1ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnVGFiSW5kZXgnXTtcclxuICAgICAgICBpZih0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbWV0ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW1ldGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtZXRlci52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW107IC8vIFRPRE8gOiBDaGVjayBJbXBsZW1lbnRhdGlvblxyXG4gICAgICAgIHRoaXMuZmllbGRMYWJlbHMucHVzaCh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCk7IC8vIE9MRCBJbXBsZW1lbnRhdGlvblxyXG4gICAgICAgIC8vIHRoaXMuZ2V0VmFsdWUodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IGFwaUtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaW5nbGVBcGlLZXknKSA9PT0gJ3RydWUnID8gdGhpcy5maWVsZERhdGEuYXBpX2tleSA6IHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXk7XHJcbiAgICAgICAgaWYgKGFwaUtleSB8fCB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1vblV0aWwuZ2V0UG9zc2libGVJZCh2YWwpID09IHRoaXMucm93RGF0YS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMucHVzaCh0aGlzLmNvbW1vblV0aWwuZ2V0UG9zc2libGVWYWx1ZSh2YWwpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuZ2V0RGF0YUZvcm1hdHRlZFZhbHVlKHRoaXMucm93RGF0YS52YWx1ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFt0aGlzLmdldERhdGFGb3JtYXR0ZWRWYWx1ZSh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGRWYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5maWVsZFZhbHVlID8gdGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUodGhpcy5maWVsZFZhbHVlKSA6IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMucHVzaCh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgZHluYW1pYyBsYWJlbCBvbiBsb2FkXHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljTGFiZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEVtaXR0ZXIgPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICBkYXRhW3Jlcy5hcGlLZXldID0gcmVzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljTGFiZWwoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnaWZyYW1lJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5pZnJhbWVMYWJlbCA9IHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RSZXNvdXJjZVVybCh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2lmcmFtZSddKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZW1pdEtleVsnc3RhcnRUaWNrZXJFbWl0dGVyJ10gPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uuc3RhcnRUaWNrZXJFbWl0dGVyLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5maWVsZERhdGEudW5pcXVlX2lkID09IHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0S2V5WydzdG9wVGlja2VyRW1pdHRlciddID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnN0b3BUaWNrZXJFbWl0dGVyLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVuaXF1ZV9pZDogXCIsdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCBcInJlczogXCIscmVzKTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCA9PSByZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5lbWl0S2V5WydwYXVzZVRpY2tlckVtaXR0ZXInXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5wYXVzZVRpY2tlckVtaXR0ZXIuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidW5pcXVlX2lkOiBcIix0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIFwicmVzOiBcIixyZXMpO1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5maWVsZERhdGEudW5pcXVlX2lkID09IHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucGF1c2VUaW1lcigpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgb25BUElDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBpZiAoIXRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICBkYXRhID0gdGhpcy5mbGF0VW5mbGF0LmNyZWF0ZU5lc3RlZE9iamVjdChkYXRhKTtcclxuICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljTGFiZWwoZGF0YSk7XHJcbiAgICAgICAgICAgIGxldCByZXNEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChyZXNEYXRhICE9PSBudWxsICYmIHJlc0RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJMSU5FLTEzM1wiLHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgcmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSB0aGlzLnJldHVybkxhYmVsc01hcFBvc3NpYmxlVmFsdWVzKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNEYXRhID0gdGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IHRoaXMucmV0dXJuTGFiZWxzTWFwUG9zc2libGVWYWx1ZXMoW3Jlc0RhdGFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBnZXREYXRhRm9ybWF0dGVkVmFsdWUoZGF0YSkge1xyXG4gICAgICAgIC8vIEZvciBEYXRhIEZvcm1hdFxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0RhdGEgRm9ybWF0J10pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZvcm1hdHMgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0RhdGEgRm9ybWF0J10uc3BsaXQoJ3x8JykubWFwKHN0ciA9PiBzdHIgJiYgc3RyLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLnJldHVybkZvcm1hdHRlZFZhbHVlKGRhdGEsIGZvcm1hdHMuc2hpZnQoKSwgZm9ybWF0cyk7XHJcbiAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggKGZvcm1hdHNbMF0udG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgJ2N1cnJlbmN5JzpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIGAke2dldEN1cnJlbmN5U3ltYm9sKGZvcm1hdHNbMV0udHJpbSgpLCAnbmFycm93Jyl9YCArXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgICAgICBgJHtOdW1iZXIoZGF0YSkudG9GaXhlZChOdW1iZXIoZm9ybWF0c1syXS50cmltKCkpKS5yZXBsYWNlKC9cXGQoPz0oXFxkezN9KStcXC4pL2csICckJiwnKX1gO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGNhc2UgJ3RpbWUnOlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gbW9tZW50KE51bWJlcihkYXRhKSkuZm9ybWF0KGZvcm1hdHNbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXNlICdkYXRlJzpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIG1vbWVudChkYXRhKS5mb3JtYXQoZm9ybWF0c1sxXS50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgU29tZXRoaW5nIHdlbnQgd3Jvbmcgd2hpbGUgdHJhbnNmb3JtaW5nIGRhdGEgISEhOiAke2Vycm9yfWApO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICAgIGdldER5bmFtaWNMYWJlbChkYXRhPykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSB8fFxyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbF9jb25maWcgJiYgdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWxfY29uZmlnLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW107XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzLnB1c2godGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gcmV0dXJucyBhIG1hcCB3aXRoIHBvc3NpYmxlIHZhbHVlIGlkIHRvIHRoZSB2YWx1ZVxyXG4gICAgICogQHBhcmFtIHZhbHVlcyBhcGkgcmVzcG9uc2UgZGF0YVxyXG4gICAgICovXHJcbiAgICByZXR1cm5MYWJlbHNNYXBQb3NzaWJsZVZhbHVlcyh2YWx1ZXM6IEFycmF5PGFueT4pIHtcclxuICAgICAgICBsZXQgZGF0YSA9IHZhbHVlcztcclxuICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB2YWx1ZXMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLm1hcChwdiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZUlkKHB2KSA9PSB2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZVZhbHVlKHB2KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGdldF9kYXRhKS5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXModW5pcXVlX2lkX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW2dldF9kYXRhW3VuaXF1ZV9pZF92YWx1ZV1dO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmlucHV0VmFsdWUgPSBnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdO1xyXG4gICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRTdGF0ZU9uU3RhdGVDaGFuZ2VFdmVudChkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgY2hlY2tJZklmcmFtZSh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKHZhbHVlLmluY2x1ZGVzKCdpZnJhbWUnKSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zYW5pdGl6ZXIuYnlwYXNzU2VjdXJpdHlUcnVzdEh0bWwodmFsdWUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldERhdGFGb3JtYXR0ZWRWYWx1ZSh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlSGlzdG9yeShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMYW5ndWFnZShkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0VGltZXN0YW1wSW5TZWNvbmRzICgpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMClcclxuICAgIH1cclxuXHJcbiAgICBnZXRDYWxjdWxhdGVkTWF4TWluVGltZSh2YWx1ZSkge1xyXG4gICAgICAgIHZhciBjYWxjdWxhdGVkVmFsdWUgPSAwO1xyXG4gICAgICAgIGlmKHZhbHVlLmluY2x1ZGVzKCcjIycpKSB7XHJcbiAgICAgICAgICAgIGxldCBhcGlTdG9yZURhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodmFsdWUuc3BsaXQoJyMjJylbMF0pID8gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKHZhbHVlLnNwbGl0KCcjIycpWzBdKS52YWx1ZSA6IHt9O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFwaSB2YWx1ZTogXCIsIGFwaVN0b3JlRGF0YVt2YWx1ZV0pXHJcbiAgICAgICAgICAgIGlmKGFwaVN0b3JlRGF0YVt2YWx1ZV0pIHtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRWYWx1ZSA9IG5ldyBEYXRlKGFwaVN0b3JlRGF0YVt2YWx1ZV0pLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNhbGN1bGF0ZWRWYWx1ZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlLmluY2x1ZGVzKFwiQ1VSUl9USU1FXCIpKSB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyVGltZXN0YW1wID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgIC8vIHZhciBjYWxTdHJpbmcgPSB2YWx1ZS5zcGxpdCgnKycpWzFdO1xyXG4gICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCJDVVJSX1RJTUVcIixTdHJpbmcoY3VyclRpbWVzdGFtcCkpO1xyXG4gICAgICAgICAgICBpZih2YWx1ZS5pbmNsdWRlcyhcInNcIikpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShcInNcIixcIioxMDAwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmluY2x1ZGVzKFwibVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKFwibVwiLFwiKjYwKjEwMDBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodmFsdWUuaW5jbHVkZXMoXCJoXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCJoXCIsXCIqNjAqNjAqMTAwMFwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZih2YWx1ZS5pbmNsdWRlcyhcImRcIikpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUucmVwbGFjZShcImRcIixcIioyNCo2MCo2MCoxMDAwXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmluY2x1ZGVzKFwiTVwiKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5yZXBsYWNlKFwiTVwiLFwiKjMwKjI0KjYwKjYwKjEwMDBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYodmFsdWUuaW5jbHVkZXMoXCJZXCIpKSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoXCJZXCIsXCIqMzY1KjI0KjYwKjYwKjEwMDBcIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY2FsY3VsYXRlZFZhbHVlID0gdGhpcy5jYWxjdWxhdGlvblV0aWwuY2FsY3VsYXRlKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxjdWxhdGVkVmFsdWUgPSBuZXcgRGF0ZSh2YWx1ZSkuZ2V0VGltZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2FsY3VsYXRlZFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENvdW50ZXIobWF4Q2FsY3VsYXRlZFZhbHVlLG1pbkNhbGN1bGF0ZWRWYWx1ZSx0aWNrZXJGb3JtYXQ9J3t7ZH19IGRheXMge3tofX0gaG91cnMge3ttfX0gbWludXRlcyB7e3N9fSBzZWNvbmRzJykge1xyXG4gICAgICAgIHZhciB0aW1lRGlmZiA9IDA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGF0dXM6IFwiLHRoaXMuY291bnRlclsnc3RhdHVzJ10pO1xyXG4gICAgICAgIGlmKHRoaXMuY291bnRlclsnc3RhdHVzJ10gIT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydUaWNrZXJUeXBlJ10hPSdpbmNyZWFzaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGltZURpZmYgPSBtYXhDYWxjdWxhdGVkVmFsdWUgLSBtaW5DYWxjdWxhdGVkVmFsdWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aW1lRGlmZiA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gbWluQ2FsY3VsYXRlZFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGltZURpZmYgPSB0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aW1lRGlmZjogXCIsdGltZURpZmYpXHJcbiAgICAgICAgY29uc3QgeWVhcnMgPSBNYXRoLmZsb29yKHRpbWVEaWZmIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUpICUgMzY1KSA+PSAxID8gTWF0aC5mbG9vcih0aW1lRGlmZiAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSAlIDM2NSkgOiAwO1xyXG4gICAgICAgIGNvbnN0IG1vbnRocyA9IE1hdGguZmxvb3IodGltZURpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKSAlIDEyKSA+PSAxICA/IE1hdGguZmxvb3IodGltZURpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCAqIDMwKSAlIDEyKSA6IDA7XHJcbiAgICAgICAgY29uc3QgZGF5cyA9IE1hdGguZmxvb3IodGltZURpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkgJSAzMCkgPj0gMSA/IE1hdGguZmxvb3IodGltZURpZmYgLyAoMTAwMCAqIDYwICogNjAgKiAyNCkgJSAzMCkgOiAwO1xyXG4gICAgICAgIGNvbnN0IGhvdXJzID0gTWF0aC5mbG9vcih0aW1lRGlmZiAvICgxMDAwICogNjAgKiA2MCkgJSAyNCkgPj0gMSA/IE1hdGguZmxvb3IodGltZURpZmYgLyAoMTAwMCAqIDYwICogNjApICUgMjQpIDogMDtcclxuICAgICAgICBjb25zdCBtaW51dGVzID0gTWF0aC5mbG9vcih0aW1lRGlmZiAvICgxMDAwICogNjApICUgNjApID49IDEgPyBNYXRoLmZsb29yKHRpbWVEaWZmIC8gKDEwMDAgKiA2MCkgJSA2MCkgOiAwO1xyXG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSBNYXRoLmNlaWwodGltZURpZmYgLyAoMTAwMCkgJSA2MCkgPj0gMSA/IE1hdGguY2VpbCh0aW1lRGlmZiAvICgxMDAwKSAlIDYwKSA6IDA7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb250aHM6IFwiLCBtb250aHMsIFwiIGRheXM6IFwiLCBkYXlzLCBcIiBob3VyczogXCIsIGhvdXJzLCBcIiBtaW51dGVzOiBcIiwgbWludXRlcywgXCIgc2Vjb25kczogXCIsIHNlY29uZHMpO1xyXG4gICAgICAgIGxldCB0aW1lclRleHQgPSAnJztcclxuICAgICAgICBpZih5ZWFycyA+IDApIHtcclxuICAgICAgICAgICAgdGltZXJUZXh0ID0gdGltZXJUZXh0ICsgU3RyaW5nKHllYXJzKSArICcgeWVhcnMgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobW9udGhzID4gMCkge1xyXG4gICAgICAgICAgICB0aW1lclRleHQgPSB0aW1lclRleHQgKyBTdHJpbmcobW9udGhzKSArICcgbW9udGhzICc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGRheXMgPiAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVyVGV4dCA9IHRpbWVyVGV4dCArIFN0cmluZyhkYXlzKSArICcgZGF5cyAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZihob3VycyA+IDApIHtcclxuICAgICAgICAgICAgdGltZXJUZXh0ID0gdGltZXJUZXh0ICsgU3RyaW5nKGhvdXJzKSArICcgaG91cnMgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYobWludXRlcyA+IDApIHtcclxuICAgICAgICAgICAgdGltZXJUZXh0ID0gdGltZXJUZXh0ICsgU3RyaW5nKG1pbnV0ZXMpICsgJyBtaW51dGVzICc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHNlY29uZHMgPiAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVyVGV4dCA9IHRpbWVyVGV4dCArIFN0cmluZyhzZWNvbmRzKSArICcgc2Vjb25kcyAnO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aW1lclRleHQgPSB0aW1lclRleHQudHJpbSgpO1xyXG4gICAgICAgIHRoaXMuY291bnRlciA9IHtcclxuICAgICAgICAgICAgaW50ZXJ2YWxJZDogJycsXHJcbiAgICAgICAgICAgIHRpY2tlclR5cGU6IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnVGlja2VyVHlwZSddID8gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydUaWNrZXJUeXBlJ10gOiAnaW5jcmVhc2luZycsXHJcbiAgICAgICAgICAgIG1heFRpbWVzdGFtcDogbWF4Q2FsY3VsYXRlZFZhbHVlLFxyXG4gICAgICAgICAgICBtaW5UaW1lc3RhbXA6IG1pbkNhbGN1bGF0ZWRWYWx1ZSxcclxuICAgICAgICAgICAgdGltZURpZmZyZW5jZTogdGltZURpZmYsXHJcbiAgICAgICAgICAgIHllYXI6IHllYXJzLFxyXG4gICAgICAgICAgICBtb250aDogbW9udGhzLFxyXG4gICAgICAgICAgICBkYXk6IGRheXMsXHJcbiAgICAgICAgICAgIGhvdXI6IGhvdXJzLFxyXG4gICAgICAgICAgICBtaW51dGU6IG1pbnV0ZXMsXHJcbiAgICAgICAgICAgIHNlY29uZDogc2Vjb25kcyxcclxuICAgICAgICAgICAgdGV4dDogdGlja2VyRm9ybWF0LnJlcGxhY2UoXCJ7e2R5bmFtaWN9fVwiLCB0aW1lclRleHQpLnJlcGxhY2UoXCJ7e1l9fVwiLCBTdHJpbmcoeWVhcnMpKS5yZXBsYWNlKFwie3tNfX1cIiwgU3RyaW5nKG1vbnRocykpLnJlcGxhY2UoXCJ7e2R9fVwiLCBTdHJpbmcoZGF5cykpLnJlcGxhY2UoXCJ7e2h9fVwiLCBTdHJpbmcoaG91cnMpKS5yZXBsYWNlKFwie3ttfX1cIiwgU3RyaW5nKG1pbnV0ZXMpKS5yZXBsYWNlKFwie3tzfX1cIiwgU3RyaW5nKHNlY29uZHMpKSxcclxuICAgICAgICAgICAgc3RhdHVzOiAnJ1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh7XHJcbiAgICAgICAgICAgIGludGVydmFsSWQ6ICcnLFxyXG4gICAgICAgICAgICB0aWNrZXJUeXBlOiB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RpY2tlclR5cGUnXSA/IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnVGlja2VyVHlwZSddIDogJ2luY3JlYXNpbmcnLFxyXG4gICAgICAgICAgICBtYXhUaW1lc3RhbXA6IG1heENhbGN1bGF0ZWRWYWx1ZSxcclxuICAgICAgICAgICAgbWluVGltZXN0YW1wOiBtaW5DYWxjdWxhdGVkVmFsdWUsXHJcbiAgICAgICAgICAgIHRpbWVEaWZmcmVuY2U6IHRpbWVEaWZmLFxyXG4gICAgICAgICAgICB5ZWFyOiB5ZWFycyxcclxuICAgICAgICAgICAgbW9udGg6IG1vbnRocyxcclxuICAgICAgICAgICAgZGF5OiBkYXlzLFxyXG4gICAgICAgICAgICBob3VyOiBob3VycyxcclxuICAgICAgICAgICAgbWludXRlOiBtaW51dGVzLFxyXG4gICAgICAgICAgICBzZWNvbmQ6IHNlY29uZHMsXHJcbiAgICAgICAgICAgIHRleHQ6IHRpY2tlckZvcm1hdC5yZXBsYWNlKFwie3tkeW5hbWljfX1cIiwgdGltZXJUZXh0KS5yZXBsYWNlKFwie3tZfX1cIiwgU3RyaW5nKHllYXJzKSkucmVwbGFjZShcInt7TX19XCIsIFN0cmluZyhtb250aHMpKS5yZXBsYWNlKFwie3tkfX1cIiwgU3RyaW5nKGRheXMpKS5yZXBsYWNlKFwie3tofX1cIiwgU3RyaW5nKGhvdXJzKSkucmVwbGFjZShcInt7bX19XCIsIFN0cmluZyhtaW51dGVzKSkucmVwbGFjZShcInt7c319XCIsIFN0cmluZyhzZWNvbmRzKSksXHJcbiAgICAgICAgICAgIHN0YXR1czogJydcclxuICAgICAgICB9KTtcclxuICAgICAgICB0aGlzLmNhbGxPblRpY2tlclN0YXJ0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ291bnRlcih0aWNrZXJGb3JtYXQpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJbJ3llYXJzJ10gPSBNYXRoLmZsb29yKHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzNjUpICUgMzY1KSA+PSAxID8gTWF0aC5mbG9vcih0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0ICogMzY1KSAlIDM2NSkgOiAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlclsnbW9udGhzJ10gPSBNYXRoLmZsb29yKHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkgJSAxMikgPj0gMSAgPyBNYXRoLmZsb29yKHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlIC8gKDEwMDAgKiA2MCAqIDYwICogMjQgKiAzMCkgJSAxMikgOiAwO1xyXG4gICAgICAgIHRoaXMuY291bnRlclsnZGF5cyddID0gTWF0aC5mbG9vcih0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSAlIDMwKSA+PSAxID8gTWF0aC5mbG9vcih0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSAvICgxMDAwICogNjAgKiA2MCAqIDI0KSAlIDMwKSA6IDA7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyWydob3VycyddID0gTWF0aC5mbG9vcih0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSAvICgxMDAwICogNjAgKiA2MCkgJSAyNCkgPj0gMSA/IE1hdGguZmxvb3IodGhpcy5jb3VudGVyLnRpbWVEaWZmcmVuY2UgLyAoMTAwMCAqIDYwICogNjApICUgMjQpIDogMDtcclxuICAgICAgICB0aGlzLmNvdW50ZXJbJ21pbnV0ZXMnXSA9IE1hdGguZmxvb3IodGhpcy5jb3VudGVyLnRpbWVEaWZmcmVuY2UgLyAoMTAwMCAqIDYwKSAlIDYwKSA+PSAxID8gTWF0aC5mbG9vcih0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSAvICgxMDAwICogNjApICUgNjApIDogMDtcclxuICAgICAgICB0aGlzLmNvdW50ZXJbJ3NlY29uZHMnXSA9IE1hdGguY2VpbCh0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSAvICgxMDAwKSAlIDYwKSA+PSAxID8gTWF0aC5jZWlsKHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlIC8gKDEwMDApICUgNjApIDogMDtcclxuICAgICAgICBsZXQgdGltZXJUZXh0ID0gJyc7XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyWyd5ZWFycyddID4gMCkge1xyXG4gICAgICAgICAgICB0aW1lclRleHQgPSB0aW1lclRleHQgKyBTdHJpbmcodGhpcy5jb3VudGVyWyd5ZWFycyddKSArICcgeWVhcnMgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyWydtb250aHMnXSA+IDApIHtcclxuICAgICAgICAgICAgdGltZXJUZXh0ID0gdGltZXJUZXh0ICsgU3RyaW5nKHRoaXMuY291bnRlclsnbW9udGhzJ10pICsgJyBtb250aHMgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyWydkYXlzJ10gPiAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVyVGV4dCA9IHRpbWVyVGV4dCArIFN0cmluZyh0aGlzLmNvdW50ZXJbJ2RheXMnXSkgKyAnIGRheXMgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyWydob3VycyddID4gMCkge1xyXG4gICAgICAgICAgICB0aW1lclRleHQgPSB0aW1lclRleHQgKyBTdHJpbmcodGhpcy5jb3VudGVyWydob3VycyddKSArICcgaG91cnMgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyWydtaW51dGVzJ10gPiAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVyVGV4dCA9IHRpbWVyVGV4dCArIFN0cmluZyh0aGlzLmNvdW50ZXJbJ21pbnV0ZXMnXSkgKyAnIG1pbnV0ZXMgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYodGhpcy5jb3VudGVyWydzZWNvbmRzJ10gPiAwKSB7XHJcbiAgICAgICAgICAgIHRpbWVyVGV4dCA9IHRpbWVyVGV4dCArIFN0cmluZyh0aGlzLmNvdW50ZXJbJ3NlY29uZHMnXSkgKyAnIHNlY29uZHMgJztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGltZXJUZXh0ID0gdGltZXJUZXh0LnRyaW0oKTtcclxuICAgICAgICB0aGlzLmNvdW50ZXJbJ3RleHQnXSA9IHRpY2tlckZvcm1hdC5yZXBsYWNlKFwie3tkeW5hbWljfX1cIiwgdGltZXJUZXh0KS5yZXBsYWNlKFwie3tZfX1cIiwgU3RyaW5nKHRoaXMuY291bnRlclsneWVhcnMnXSkpLnJlcGxhY2UoXCJ7e019fVwiLCBTdHJpbmcodGhpcy5jb3VudGVyWydtb250aHMnXSkpLnJlcGxhY2UoXCJ7e2R9fVwiLCBTdHJpbmcodGhpcy5jb3VudGVyWydkYXlzJ10pKS5yZXBsYWNlKFwie3tofX1cIiwgU3RyaW5nKHRoaXMuY291bnRlclsnaG91cnMnXSkpLnJlcGxhY2UoXCJ7e219fVwiLCBTdHJpbmcodGhpcy5jb3VudGVyWydtaW51dGVzJ10pKS5yZXBsYWNlKFwie3tzfX1cIiwgU3RyaW5nKHRoaXMuY291bnRlclsnc2Vjb25kcyddKSlcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFRpbWVyKCkge1xyXG4gICAgICAgIHZhciBmaWVsZERhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGREYXRhOiBcIixmaWVsZERhdGEpXHJcbiAgICAgICAgdmFyIHRpY2tlclR5cGUgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RpY2tlclR5cGUnXSA/IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnVGlja2VyVHlwZSddIDogJ2luY3JlYXNpbmcnO1xyXG4gICAgICAgIHZhciB0aWNrZXJGb3JtYXQgPSB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RpY2tlckZvcm1hdCddID8gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydUaWNrZXJGb3JtYXQnXSA6ICd7e2R9fSBkYXlzIHt7aH19IGhvdXJzIHt7bX19IG1pbnV0ZXMge3tzfX0gc2Vjb25kcyc7XHJcbiAgICAgICAgdmFyIG1heFZhbHVlID0gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydNYXhWYWx1ZSddID8gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydNYXhWYWx1ZSddIDogKCB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RpY2tlclR5cGUnXSA9PSAnaW5jcmVhc2luZycgPyAnQ1VSUl9USU1FKzEwbScgOiAnQ1VSUl9USU1FJyk7XHJcbiAgICAgICAgdmFyIG1pblZhbHVlID0gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydNaW5WYWx1ZSddID8gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydNaW5WYWx1ZSddIDogKCB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RpY2tlclR5cGUnXSA9PSAnaW5jcmVhc2luZycgPyAnQ1VSUl9USU1FJyA6ICdDVVJSX1RJTUUrMTBtJyk7XHJcbiAgICAgICAgdmFyIG1heENhbGN1bGF0ZWRWYWx1ZSA9IHRoaXMuZ2V0Q2FsY3VsYXRlZE1heE1pblRpbWUobWF4VmFsdWUpO1xyXG4gICAgICAgIHZhciBtaW5DYWxjdWxhdGVkVmFsdWUgPSB0aGlzLmdldENhbGN1bGF0ZWRNYXhNaW5UaW1lKG1pblZhbHVlKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1heFZhbHVlOiBcIiwgbWF4VmFsdWUsIFwiIG1pblZhbHVlOiBcIiwgbWluVmFsdWUpO1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4Q2FsY3VsYXRlZFZhbHVlOiBcIiwgbWF4Q2FsY3VsYXRlZFZhbHVlLCBcIiBtaW5DYWxjdWxhdGVkVmFsdWU6IFwiLCBtaW5DYWxjdWxhdGVkVmFsdWUpO1xyXG4gICAgICAgIC8vIGlmKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgbWluVmFsdWUgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgPiBtYXhDYWxjdWxhdGVkVmFsdWUgfHwgdGhpcy5jb3VudGVyWydzdGF0dXMnXSA9PSAncGF1c2VkJykge1xyXG4gICAgICAgIGlmKG5ldyBEYXRlKCkuZ2V0VGltZSgpIDwgbWluVmFsdWUgfHwgbmV3IERhdGUoKS5nZXRUaW1lKCkgPiBtYXhDYWxjdWxhdGVkVmFsdWUgfHwgdGhpcy5jb3VudGVyWydzdGF0dXMnXSA9PSAnc3RhcnRlZCcpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0cnVlMFwiKVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICBpZih0aWNrZXJUeXBlID09ICdpbmNyZWFzaW5nJykge1xyXG4gICAgICAgICAgICAgICAgaWYoZmllbGREYXRhICYmIGZpZWxkRGF0YVsnbWluVGltZXN0YW1wJ10gJiYgbmV3IERhdGUoKS5nZXRUaW1lKCkgPj0gIG1pbkNhbGN1bGF0ZWRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHJ1ZTFcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvdW50ZXIoZmllbGREYXRhWydtYXhUaW1lc3RhbXAnXSxmaWVsZERhdGFbJ21pblRpbWVzdGFtcCddLHRpY2tlckZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmFsc2UxXCIpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb3VudGVyKG1heENhbGN1bGF0ZWRWYWx1ZSxtaW5DYWxjdWxhdGVkVmFsdWUsdGlja2VyRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmKGZpZWxkRGF0YSAmJiBmaWVsZERhdGFbJ21pblRpbWVzdGFtcCddICYmIG5ldyBEYXRlKCkuZ2V0VGltZSgpID49ICBtaW5DYWxjdWxhdGVkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRydWUyXCIsZmllbGREYXRhWydtYXhUaW1lc3RhbXAnXSxcIiAtLS0gXCIsbmV3IERhdGUoKS5nZXRUaW1lKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRDb3VudGVyKGZpZWxkRGF0YVsnbWF4VGltZXN0YW1wJ10sbmV3IERhdGUoKS5nZXRUaW1lKCksdGlja2VyRm9ybWF0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmYWxzZTJcIilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldENvdW50ZXIobWF4Q2FsY3VsYXRlZFZhbHVlLG1pbkNhbGN1bGF0ZWRWYWx1ZSx0aWNrZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZih0aGlzLmludGVydmFsSWQpIHtcclxuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLmludGVydmFsSWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGlja2VyVHlwZSA9PSAnaW5jcmVhc2luZycpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIjIyMjIyMgdGltZURpZmZyZW5jZVwiLHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlKVxyXG4gICAgICAgICAgICAgICAgLy8gaWYoKHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlICsgMTAwMCkgPCAodGhpcy5jb3VudGVyLm1heFRpbWVzdGFtcCAtIHRoaXMuY291bnRlci5taW5UaW1lc3RhbXApKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSA8ICh0aGlzLmNvdW50ZXIubWF4VGltZXN0YW1wIC0gdGhpcy5jb3VudGVyLm1pblRpbWVzdGFtcCkgJiYgdGhpcy5jb3VudGVyWydzdGF0dXMnXSAhPSAncGF1c2VkJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlICs9IDEwMDA7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5jb3VudGVyLm1heFRpbWVzdGFtcCxcIiAtIFwiLHRoaXMuY291bnRlci5taW5UaW1lc3RhbXAsIFwiICMjIyMjIyB0aW1lRGlmZnJlbmNlIFwiLHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW50ZXJ2YWxJZDogXCIsdGhpcy5pbnRlcnZhbElkKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlclsnaW50ZXJ2YWxJZCddID0gdGhpcy5pbnRlcnZhbElkO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnRlclsnc3RhdHVzJ10gPSAnc3RhcnRlZCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDb3VudGVyKHRpY2tlckZvcm1hdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFwaVN0b3JlRGF0YSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbnRlcnZhbElkOiBcIix0aGlzLmNvdW50ZXJbJ2ludGVydmFsSWQnXSwgXCIgaW50ZXJ2YWxJZDogXCIsIGFwaVN0b3JlRGF0YVsnaW50ZXJ2YWxJZCddKVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKCFhcGlTdG9yZURhdGFbJ2ludGVydmFsSWQnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnZhbElkOiB0aGlzLmNvdW50ZXJbJ2ludGVydmFsSWQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpY2tlclR5cGU6IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnVGlja2VyVHlwZSddID8gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydUaWNrZXJUeXBlJ10gOiAnaW5jcmVhc2luZycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXhUaW1lc3RhbXA6IHRoaXMuY291bnRlclsnbWF4VGltZXN0YW1wJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5UaW1lc3RhbXA6IHRoaXMuY291bnRlclsnbWluVGltZXN0YW1wJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aW1lRGlmZnJlbmNlOiB0aGlzLmNvdW50ZXJbJ3RpbWVEaWZmcmVuY2UnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHllYXI6IHRoaXMuY291bnRlclsneWVhciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9udGg6IHRoaXMuY291bnRlclsnbW9udGgnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRheTogdGhpcy5jb3VudGVyWydkYXknXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhvdXI6IHRoaXMuY291bnRlclsnaG91ciddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWludXRlOiB0aGlzLmNvdW50ZXJbJ21pbnV0ZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Vjb25kOiB0aGlzLmNvdW50ZXJbJ3NlY29uZCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5jb3VudGVyWyd0ZXh0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0dXM6ICdzdGFydGVkJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIjIyMjIyMgdGV4dFwiLHRoaXMuY291bnRlci50ZXh0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5jb3VudGVyLnRpbWVEaWZmcmVuY2UrMTAwMCkgPj0gKHRoaXMuY291bnRlci5tYXhUaW1lc3RhbXAgLSB0aGlzLmNvdW50ZXIubWluVGltZXN0YW1wKSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgKHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlID49ICh0aGlzLmNvdW50ZXIubWF4VGltZXN0YW1wIC0gdGhpcy5jb3VudGVyLm1pblRpbWVzdGFtcCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsT25UaWNrZXJTdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcnZhbElkID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCIjIyMjIyMgdGltZURpZmZyZW5jZVwiLHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlKVxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5jb3VudGVyLnRpbWVEaWZmcmVuY2UgPiAwICYmIHRoaXMuY291bnRlclsnc3RhdHVzJ10gIT0gJ3BhdXNlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSAtPSAxMDAwO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiIyMjIyMjIHRpbWVEaWZmcmVuY2VcIix0aGlzLmNvdW50ZXIudGltZURpZmZyZW5jZSlcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImludGVydmFsSWQ6IFwiLHRoaXMuaW50ZXJ2YWxJZClcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXJbJ2ludGVydmFsSWQnXSA9IHRoaXMuaW50ZXJ2YWxJZDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvdW50ZXJbJ3N0YXR1cyddID0gJ3N0YXJ0ZWQnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ291bnRlcih0aWNrZXJGb3JtYXQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhcGlTdG9yZURhdGEgPSB0aGlzLmFwcERhdGFTZXJ2aWNlLmdldEZpZWxkRGF0YUJ5RmllbGRJZCh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW50ZXJ2YWxJZDogXCIsdGhpcy5jb3VudGVyWydpbnRlcnZhbElkJ10sIFwiIGludGVydmFsSWQ6IFwiLCBhcGlTdG9yZURhdGFbJ2ludGVydmFsSWQnXSlcclxuICAgICAgICAgICAgICAgICAgICBpZighYXBpU3RvcmVEYXRhWydpbnRlcnZhbElkJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVGaWVsZERhdGEoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJ2YWxJZDogdGhpcy5jb3VudGVyWydpbnRlcnZhbElkJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrZXJUeXBlOiB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RpY2tlclR5cGUnXSA/IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnVGlja2VyVHlwZSddIDogJ2luY3JlYXNpbmcnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF4VGltZXN0YW1wOiB0aGlzLmNvdW50ZXJbJ21heFRpbWVzdGFtcCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluVGltZXN0YW1wOiB0aGlzLmNvdW50ZXJbJ21pblRpbWVzdGFtcCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZURpZmZyZW5jZTogdGhpcy5jb3VudGVyWyd0aW1lRGlmZnJlbmNlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB5ZWFyOiB0aGlzLmNvdW50ZXJbJ3llYXInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vbnRoOiB0aGlzLmNvdW50ZXJbJ21vbnRoJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXk6IHRoaXMuY291bnRlclsnZGF5J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBob3VyOiB0aGlzLmNvdW50ZXJbJ2hvdXInXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZTogdGhpcy5jb3VudGVyWydtaW51dGUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY29uZDogdGhpcy5jb3VudGVyWydzZWNvbmQnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHRoaXMuY291bnRlclsndGV4dCddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiAnc3RhcnRlZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiMjIyMjIyB0ZXh0XCIsdGhpcy5jb3VudGVyLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY291bnRlci50aW1lRGlmZnJlbmNlIDw9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMuaW50ZXJ2YWxJZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYWxsT25UaWNrZXJTdG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDEwMDApXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN0b3BUaW1lcigpIHtcclxuICAgICAgICB2YXIgdGlja2VyVHlwZSA9IHRoaXMuQWRkaXRpb25hbFBhcmFtZXRlclsnVGlja2VyVHlwZSddID8gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydUaWNrZXJUeXBlJ10gOiAnaW5jcmVhc2luZyc7XHJcbiAgICAgICAgdmFyIGZpZWxkRGF0YSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgdGhpcy5zdG9wVGltZXJVcGRhdGVGaWVsZERhdGEodGlja2VyVHlwZSxmaWVsZERhdGEpO1xyXG4gICAgfVxyXG4gICAgc3RvcFRpbWVyVXBkYXRlRmllbGREYXRhKHRpY2tlclR5cGUsZmllbGREYXRhKSB7XHJcbiAgICAgICAgdGhpcy5jb3VudGVyWydtYXhUaW1lc3RhbXAnXSA9ICh0aWNrZXJUeXBlID09ICdpbmNyZWFzaW5nJykgPyBuZXcgRGF0ZSgpLmdldFRpbWUoKSA6IGZpZWxkRGF0YVsnbWF4VGltZXN0YW1wJ107XHJcbiAgICAgICAgdGhpcy5jb3VudGVyWydtaW5UaW1lc3RhbXAnXSA9ICh0aWNrZXJUeXBlICE9ICdpbmNyZWFzaW5nJykgPyBuZXcgRGF0ZSgpLmdldFRpbWUoKSA6IGZpZWxkRGF0YVsnbWluVGltZXN0YW1wJ107XHJcbiAgICAgICAgdGhpcy5jb3VudGVyWydzdGF0dXMnXSA9ICdzdG9wZWQnO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKCcnKTtcclxuICAgICAgICBjbGVhckludGVydmFsKGZpZWxkRGF0YVsnaW50ZXJ2YWxJZCddKTtcclxuICAgICAgICB0aGlzLmNhbGxPblRpY2tlclN0b3AoKTtcclxuICAgIH1cclxuXHJcbiAgICBwYXVzZVRpbWVyKCkge1xyXG4gICAgICAgIHZhciB0aWNrZXJUeXBlID0gdGhpcy5BZGRpdGlvbmFsUGFyYW1ldGVyWydUaWNrZXJUeXBlJ10gPyB0aGlzLkFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RpY2tlclR5cGUnXSA6ICdpbmNyZWFzaW5nJztcclxuICAgICAgICB2YXIgZmllbGREYXRhID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQodGhpcy5maWVsZERhdGEudW5pcXVlX2lkKTtcclxuICAgICAgICB0aGlzLnBhdXNlVGltZXJVcGRhdGVGaWVsZERhdGEodGlja2VyVHlwZSxmaWVsZERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIHBhdXNlVGltZXJVcGRhdGVGaWVsZERhdGEodGlja2VyVHlwZSxmaWVsZERhdGEpIHtcclxuICAgICAgICB0aGlzLmNvdW50ZXJbJ21heFRpbWVzdGFtcCddID0gKHRpY2tlclR5cGUgPT0gJ2luY3JlYXNpbmcnKSA/IG5ldyBEYXRlKCkuZ2V0VGltZSgpIDogZmllbGREYXRhWydtYXhUaW1lc3RhbXAnXTtcclxuICAgICAgICB0aGlzLmNvdW50ZXJbJ21pblRpbWVzdGFtcCddID0gKHRpY2tlclR5cGUgIT0gJ2luY3JlYXNpbmcnKSA/IG5ldyBEYXRlKCkuZ2V0VGltZSgpIDogZmllbGREYXRhWydtaW5UaW1lc3RhbXAnXTtcclxuICAgICAgICAvLyB0aGlzLmNvdW50ZXJbJ3RpbWVEaWZmcmVuY2UnXSA9IHRoaXMuY291bnRlclsnbWF4VGltZXN0YW1wJ10gLSB0aGlzLmNvdW50ZXJbJ21pblRpbWVzdGFtcCddO1xyXG4gICAgICAgIHRoaXMuY291bnRlclsnc3RhdHVzJ10gPSAncGF1c2VkJztcclxuICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh7XHJcbiAgICAgICAgICAgIGludGVydmFsSWQ6IGZpZWxkRGF0YVsnaW50ZXJ2YWxJZCddLFxyXG4gICAgICAgICAgICB0aWNrZXJUeXBlOiB0aWNrZXJUeXBlLFxyXG4gICAgICAgICAgICBtYXhUaW1lc3RhbXA6IGZpZWxkRGF0YVsnbWF4VGltZXN0YW1wJ10sXHJcbiAgICAgICAgICAgIG1pblRpbWVzdGFtcDogZmllbGREYXRhWydtaW5UaW1lc3RhbXAnXSxcclxuICAgICAgICAgICAgdGltZURpZmZyZW5jZTogZmllbGREYXRhWyd0aW1lRGlmZnJlbmNlJ10sXHJcbiAgICAgICAgICAgIHllYXI6IGZpZWxkRGF0YVsneWVhciddLFxyXG4gICAgICAgICAgICBtb250aDogZmllbGREYXRhWydtb250aCddLFxyXG4gICAgICAgICAgICBkYXk6IGZpZWxkRGF0YVsnZGF5J10sXHJcbiAgICAgICAgICAgIGhvdXI6IGZpZWxkRGF0YVsnaG91ciddLFxyXG4gICAgICAgICAgICBtaW51dGU6IGZpZWxkRGF0YVsnbWludXRlJ10sXHJcbiAgICAgICAgICAgIHNlY29uZDogZmllbGREYXRhWydzZWNvbmQnXSxcclxuICAgICAgICAgICAgdGV4dDogZmllbGREYXRhWyd0ZXh0J10sXHJcbiAgICAgICAgICAgIHN0YXR1czogJ3BhdXNlZCdcclxuICAgICAgICB9KTtcclxuICAgICAgICBjbGVhckludGVydmFsKGZpZWxkRGF0YVsnaW50ZXJ2YWxJZCddKTtcclxuICAgICAgICB0aGlzLmNhbGxPblRpY2tlclBhdXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FsbE9uVGlja2VyU3RvcCgpIHtcclxuICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRTdGVwQnlJZCh0aGlzLnN0ZXBJZCkuc3Vic2NyaWJlKChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jYWxsUGVydGljdWxhckV2ZW50KGRhdGEsJ09uVGlja2VyU3RvcCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxQZXJ0aWN1bGFyRXZlbnQoZGF0YSxldmVudE5hbWU9J09uVGlja2VyU3RvcCcpIHtcclxuICAgICAgICBsZXQgZXZlbnRMaXN0ID0gZGF0YS5ldmVudF9saXN0LmZpbHRlcihldmVudCA9PiBldmVudC5ldmVudF9uYW1lID09PSBldmVudE5hbWUpO1xyXG4gICAgICAgIGlmIChldmVudExpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgZm9yIChjb25zdCBldmVudCBvZiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV2ZW50TGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJldmVudCBldmVudDogXCIsZXZlbnQpXHJcbiAgICAgICAgICAgICAgbGV0IHRpY2tlcklEID0gZXZlbnRbJ2V2ZW50X3BhcmFtcyddWzBdWydpbnZva2VfZXZlbnRfY29uZmlnJ11bJ2FkZGl0aW9uYWxfcGFyYW1ldGVycyddLmZpbHRlcihmdW5jdGlvbiAoZWwpIHsgcmV0dXJuIGVsLnBhcmFtZXRlcl90eXBlID09ICdUaWNrZXJJRCcgfSkubGVuZ3RoID4gMCA/IGV2ZW50WydldmVudF9wYXJhbXMnXVswXVsnaW52b2tlX2V2ZW50X2NvbmZpZyddWydhZGRpdGlvbmFsX3BhcmFtZXRlcnMnXS5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5wYXJhbWV0ZXJfdHlwZSA9PSAnVGlja2VySUQnIH0pWzBdLnZhbHVlIDogJyc7XHJcbiAgICAgICAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdCA9PT0gdHJ1ZSAmJiB0aWNrZXJJRCA9PT0gdGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV2ZW50IGV2ZW50OiBcIixldmVudClcclxuICAgICAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCBldmVudExpc3QsIHt9LCB0cnVlKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNhbGxPblRpY2tlclN0YXJ0KCkge1xyXG4gICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZFN0ZXBCeUlkKHRoaXMuc3RlcElkKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxQZXJ0aWN1bGFyRXZlbnQoZGF0YSwnT25UaWNrZXJTdGFydCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbGxPblRpY2tlclBhdXNlKCkge1xyXG4gICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZFN0ZXBCeUlkKHRoaXMuc3RlcElkKS5zdWJzY3JpYmUoKGRhdGE6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNhbGxQZXJ0aWN1bGFyRXZlbnQoZGF0YSwnT25UaWNrZXJQYXVzZScpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc0VkaXRhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc1Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc01hbmRhdG9yeScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5yb3dEYXRhICYmIGNoYW5nZXMucm93RGF0YS5jdXJyZW50VmFsdWUgJiZcclxuICAgICAgICAgICAgdGhpcy5maWVsZExhYmVsc1swXSAhPT0gY2hhbmdlcy5yb3dEYXRhLmN1cnJlbnRWYWx1ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmNvbW1vblV0aWwuZ2V0UG9zc2libGVJZCh2YWwpID09IGNoYW5nZXMucm93RGF0YS5jdXJyZW50VmFsdWUudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZVZhbHVlKHZhbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4geyAvLyBPTEQgSW1wbGVtZW50YXRpb25cclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBbY2hhbmdlcy5yb3dEYXRhLmN1cnJlbnRWYWx1ZS52YWx1ZV07XHJcbiAgICAgICAgICAgICAgICAvLyB9LCAwKTsgLy8gT0xEIEltcGxlbWVudGF0aW9uXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImZpZWxkLXdyYXBwZXJcIiBpZD1cInt7aHRtbF9pZH19XCIgKm5nSWY9XCJpc1Zpc2libGVcIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1sYWJlbFwiPlxyXG5cdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImlmcmFtZUxhYmVsICYmIGlmcmFtZUxhYmVsICE9ICcnXCI+XHJcblx0XHRcdDxpZnJhbWUgdGl0bGU9XCJsYWJlbC1jb21wb25lbnRcIiB3aWR0aD1cIjEwMCVcIiBoZWlnaHQ9XCIxMDAlXCIgW3NyY109XCJpZnJhbWVMYWJlbFwiIGFsbG93PVwiYXV0b3BsYXk7IGVuY3J5cHRlZC1tZWRpYVwiXHJcblx0XHRcdFx0YWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPlxyXG5cdFx0PC9uZy1jb250YWluZXI+XHJcblx0XHQ8bmctY29udGFpbmVyICpuZ0Zvcj1cImxldCBmaWVsZExhYmVsIG9mIGZpZWxkTGFiZWxzXCI+XHJcblx0XHRcdDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZExhYmVsICYmIGZpZWxkTGFiZWwgIT0nJyAmJiBmaWVsZExhYmVsICE9JyAnXCI+XHJcblx0XHRcdFx0PGxhYmVsIFthdHRyLmFyaWEtbGFiZWxdPVwiZmllbGRMYWJlbFwiIFthdHRyLnRhYmluZGV4XT1cInRhYkluZGV4VmFsdWVcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGRMYWJlbClcIiAoY2xpY2spPVwib25Db21wb25lbnRFdmVudCgnT25DbGljaycpXCIgY2xhc3M9XCJcclxuXHRcdFx0XHRcdHt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiPlxyXG5cdFx0XHRcdFx0e3tmaWVsZExhYmVsfX1cclxuXHRcdFx0XHQ8L2xhYmVsPlxyXG5cdFx0XHRcdDxsYWJlbCBbYXR0ci5hcmlhLWxhYmVsXT1cImZpZWxkTGFiZWxcIiBbYXR0ci50YWJpbmRleF09XCJ0YWJJbmRleFZhbHVlXCIgKm5nSWY9XCJpc0hUTUwoZmllbGRMYWJlbClcIiBbaW5uZXJIVE1MXT1cImNoZWNrSWZJZnJhbWUoZmllbGRMYWJlbClcIlxyXG5cdFx0XHRcdFx0KGNsaWNrKT1cIm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snKVwiXHJcblx0XHRcdFx0XHRjbGFzcz1cInt7KGlzQ3VzdG9tQ2xhc3MgJiYgZmllbGREYXRhLmZpZWxkX3N0eWxlKT9maWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWU6Jyd9fVwiPjwvbGFiZWw+XHJcblx0XHRcdFx0PGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIiAqbmdJZj1cImNvdW50ZXIgJiYgY291bnRlci50ZXh0XCI+XHJcblx0XHRcdFx0XHQ8c3Bhbj57e2NvdW50ZXIudGV4dH19PC9zcGFuPlxyXG5cdFx0XHRcdDwvZGl2PlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCJcclxuXHRcdFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCJcclxuXHRcdFx0W2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIHRvb2x0aXBUZXh0IFwiPmk8L2J1dHRvbj5cclxuXHJcblx0XHQ8IS0tIFRvb2x0aXAgd2l0aCBpbmZvcm1haW9uIGljb24gLS0+XHJcblx0XHQ8IS0tIDxidXR0b24gKm5nSWY9XCJpc19tYXRlcmlhbCAmJiBoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiXHJcblx0XHRcdGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0byBidG4tdG9vbHRpcC17e2ZpZWxkRGF0YS51bmlxdWVfaWR9fVwiXHJcblx0XHRcdFthdHRyLmFyaWEtbGFiZWxdPVwiJ1Rvb2x0aXA6ICcgKyB0b29sdGlwVGV4dFwiIFtjdXN0b21Ub29sdGlwXT1cInRvb2x0aXBUZW1wbGF0ZVwiXHJcblx0XHRcdFt0b29sdGlwSWRdPVwiZmllbGREYXRhLnVuaXF1ZV9pZFwiIFt0b29sdGlwQWRkaXRpb25hbHBhcmFtZXRlcl09XCJhZGRpdGlvbmFsUGFyYW1ldGVyXCI+XHJcblx0XHRcdGlcclxuXHRcdDwvYnV0dG9uPiAtLT5cclxuXHJcblx0XHQ8IS0tIFRvb2x0aXAgVGVtcGxhdGUgLS0+XHJcblx0XHQ8IS0tIDxuZy10ZW1wbGF0ZSAjdG9vbHRpcFRlbXBsYXRlPlxyXG5cdFx0XHQ8ZGl2IGNsYXNzPVwidG9vbHRpcF9jb250YWluZXJcIj5cclxuXHRcdFx0XHQ8c3BhbiBjbGFzcz1cInRvb2x0aXBfdGV4dFwiIFtpbm5lckhUTUxdPVwiZmllbGREYXRhLnRvb2x0aXBcIj48L3NwYW4+XHJcblx0XHRcdDwvZGl2PlxyXG5cdFx0PC9uZy10ZW1wbGF0ZT4gLS0+XHJcblx0PC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=