import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { NgChartsModule } from 'ng2-charts';
import { Ng2GoogleChartsModule } from 'ng2-google-charts';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { C3ChartDirective } from './cee-chart.directive';
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
import * as i10 from "ng2-google-charts";
import * as i11 from "ng2-charts";
import * as i12 from "@angular/common";
import * as i13 from "../../directives/tooltip/tooltip.directive";
function CeeChartComponent_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 7);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function CeeChartComponent_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 8);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeChartComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeChartComponent_ng_container_3_label_1_Template, 2, 1, "label", 5)(2, CeeChartComponent_ng_container_3_label_2_Template, 1, 1, "label", 6);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function CeeChartComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 9);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeChartComponent_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵproperty("tooltip", ctx_r0.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r0.fieldData.tooltip);
} }
function CeeChartComponent_ng_container_6_canvas_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "canvas", 12);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate("id", ctx_r0.fieldData.unique_id);
    i0.ɵɵproperty("datasets", ctx_r0.cjChartData)("labels", ctx_r0.chartLabels)("options", ctx_r0.chartOptions)("legend", ctx_r0.legend)("type", ctx_r0.chartType);
} }
function CeeChartComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeChartComponent_ng_container_6_canvas_1_Template, 1, 6, "canvas", 11);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isVisible);
} }
function CeeChartComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "google-chart", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("data", ctx_r0.gChartData);
} }
function CeeChartComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "div", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("chartData", ctx_r0.c3chartData)("chartColors", ctx_r0.chartColors)("chartType", ctx_r0.chartType)("chartOptions", ctx_r0.c3chartOptions)("xAxisLabels", ctx_r0.c3xAxisLabels)("xAxisLabel", ctx_r0.c3xAxisLabel)("yAxisLabel", ctx_r0.c3yAxisLabel)("backgroundColor", ctx_r0.c3backgroundColor);
} }
export class CeeChartComponent extends BaseView {
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
    keepState = false;
    rowData;
    rootData;
    flatUnflat;
    chartData = [];
    //Labels shown on the x-axis
    chartLabels;
    // Define chart options
    chartOptions = {
        responsive: true,
        scales: {
            y: {
                min: 0 // Custom minimum value for the y-axis
            },
            x: {
                min: 0 // Custom min value for x-axis
            }
        },
        plugins: {
            legend: {
                display: true,
                position: 'top' // 'top', 'left', 'bottom', or 'right'
            }
        }
    };
    // Define colors of chart segments
    chartColors = [];
    // Set true to show legends
    lineChartLegend = true;
    chartType;
    chartProvider;
    chartElement;
    cjChartData = [];
    gChartData = {
        chartType: '',
        dataTable: [],
        options: {}
    };
    showChartJS;
    showGoogleChart;
    showc3Chart;
    legend = true;
    c3chartData;
    c3chartOptions;
    c3xAxisLabels;
    c3xAxisLabel;
    c3yAxisLabel;
    c3backgroundColor;
    subscriptions = [];
    timeoutIds = [];
    chartInstances = []; // Store chart instances for cleanup
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
    ngOnDestroy() {
        // Clean up subscriptions
        this.subscriptions.forEach(sub => {
            if (sub && !sub.closed) {
                sub.unsubscribe();
            }
        });
        this.subscriptions = [];
        // Clear timeouts
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        // Destroy chart instances
        this.destroyChartInstances();
        // Clear large object references
        this.clearDataReferences();
        this.onViewUnload();
    }
    destroyChartInstances() {
        // Destroy Chart.js instances
        this.chartInstances.forEach(chart => {
            if (chart && typeof chart.destroy === 'function') {
                chart.destroy();
            }
        });
        this.chartInstances = [];
    }
    clearDataReferences() {
        this.chartData = [];
        this.chartColors = [];
        this.cjChartData = [];
        this.c3chartData = null;
        this.gChartData = {
            chartType: '',
            dataTable: [],
            options: {}
        };
        this.chartElement = [];
    }
    onViewDataInit() {
        this.chartLabels = this.fieldData.possible_values ? this.fieldData.possible_values.map(function (e) { return e.trim(); }) : [];
        this.chartProvider = this.additionalParameter['provider'] ? this.additionalParameter['provider'].toLowerCase() : 'chartjs';
        this.chartType = this.additionalParameter['type'] ? this.additionalParameter['type'] : 'line';
        this.chartOptions.plugins.legend.position = this.additionalParameter['legend_position_chartjs'] ? this.additionalParameter['legend_position_chartjs'].toLowerCase() : 'top';
        this.chartOptions.scales.y.min = this.additionalParameter['chartjs_Y_axis_min_value'] ? this.additionalParameter['chartjs_Y_axis_min_value'] : 0;
        this.chartOptions.scales.x.min = this.additionalParameter['chartjs_x_axis_min_value'] ? this.additionalParameter['chartjs_x_axis_min_value'] : 0;
        const subscription = this.wfeStepLoaderService.loadBlockByName(this.additionalParameter['default_value']).subscribe({
            next: (data) => {
                this.chartElement = data.block_fields;
                this.randerChartElement();
            },
            error: (error) => {
                console.error('Error loading chart data:', error);
            }
        });
        this.subscriptions.push(subscription);
    }
    randerChartElement() {
        this.chartData = [];
        this.chartColors = [];
        for (const cElmt of this.chartElement) {
            if (cElmt.field_type === 'ChartElement') {
                //set chart data
                let cDataSet = {
                    label: '',
                    data: []
                };
                cDataSet.label = cElmt.field_label;
                const elementValue = cElmt.additional_parameters ? cElmt.additional_parameters.find(p => p.parameter_type === 'default_value') : null;
                const threshold = 0;
                if (elementValue && elementValue.value) {
                    cDataSet.data = elementValue.value.split(',').map(function (e) { return e.trim(); });
                }
                this.chartData.push(cDataSet);
                //set chart style
                let colorData = {};
                for (const cStyle of cElmt.possible_values) {
                    const csArr = cStyle.split('||');
                    colorData[csArr[0]] = csArr[1];
                }
                this.chartColors.push(colorData);
            }
        }
        if (this.chartProvider === 'chartjs') {
            this.randerChartJS();
        }
        if (this.chartProvider === 'googlechart') {
            this.randerGoogleChart();
        }
        if (this.chartProvider === 'c3charts') {
            this.randerc3chart();
        }
    }
    randerChartJS() {
        this.chartData.forEach((y, i) => {
            y['colors'] = this.chartColors[i].colors;
            y['borderColor'] = this.chartColors[i].borderColor;
            y['backgroundColor'] = this.chartColors[i].backgroundColor;
        });
        for (let c = 0; c < this.chartColors.length; c++) {
            const element = this.chartColors[c];
            for (const key in element) {
                if (typeof element[key] === 'string') {
                    if (element[key].includes('{')) {
                        try {
                            element[key] = JSON.parse(element[key]);
                        }
                        catch (error) {
                        }
                    }
                    else if (element[key].includes('|')) {
                        element[key] = element[key].split('|').map(s => s.trim());
                    }
                    else if (key.toLowerCase() === "legend") {
                        this.legend = element[key] === 'false' ? false : true;
                    }
                    else if (key.toLowerCase() === "skipdecimal" && element[key] == 'true') {
                        this.chartData['scales'] = this.chartData['scales'] ? this.chartData['scales'] : {};
                        this.chartData['scales']['yAxes'] = this.chartData['scales']['yAxes'] ? this.chartData['scales']['yAxes'] : [];
                        const yaTicks = this.chartData['scales']['yAxes'].find(ya => ya.ticks);
                        if (yaTicks) {
                        }
                        else {
                            this.chartData['scales']['yAxes'].push({
                                ticks: {
                                    beginAtZero: true,
                                    callback: function (label, index, labels) {
                                        if (Math.floor(Number(label)) == label) {
                                            return label;
                                        }
                                    },
                                }
                            });
                        }
                    }
                }
            }
        }
        this.cjChartData = JSON.parse(JSON.stringify(this.chartData));
        this.showChartJS = true;
    }
    randerGoogleChart() {
        this.gChartData.chartType = this.chartType;
        const dataTable = [];
        const dataTableHead = [''];
        for (let i = 0; i < this.chartData.length; i++) {
            dataTableHead.push(this.chartData[i].label);
            dataTableHead.push({ role: 'style' });
        }
        dataTable.push(dataTableHead);
        // console.log('this.chartData', this.chartData)
        // console.log('this.chartColors', this.chartColors)
        const colorSet = [];
        if (this.chartColors.length > 0) {
            const colorString = this.chartColors[0]['backgroundColor'] || this.chartColors[0]['colors'] || '';
            if (colorString.includes('|')) {
                colorSet.push(...colorString.split('|').map(s => s.trim()));
            }
            else {
                colorSet.push(colorString.trim());
            }
        }
        for (let l = 0; l < this.chartLabels.length; l++) {
            const dataTableitem = [this.chartLabels[l]];
            for (let i = 0; i < this.chartData.length; i++) {
                if (this.chartData[i].data[l]) {
                    const tVal = parseFloat(this.chartData[i].data[l].toString());
                    dataTableitem.push(tVal);
                    const colorIndex = l % colorSet.length;
                    const styleColor = colorSet[colorIndex] || null;
                    dataTableitem.push(styleColor);
                }
            }
            dataTable.push(dataTableitem);
        }
        // console.log('this.chartData 1', dataTable)
        this.gChartData.dataTable = dataTable;
        const options = {};
        for (let c = 0; c < this.chartColors.length; c++) {
            const element = this.chartColors[c];
            for (const key in element) {
                let elementVal = element[key];
                if (elementVal.includes('{')) {
                    try {
                        elementVal = JSON.parse(elementVal);
                    }
                    catch (error) {
                        console.log('error in parse', error, elementVal);
                    }
                }
                if (this.chartColors.length === 1) {
                    options[key] = typeof elementVal === 'string' && elementVal.includes('|') ? elementVal.split('|').map(s => s.trim()) : elementVal;
                }
                else {
                    if (['colors'].includes(key)) {
                        if (!options[key]) {
                            options[key] = [elementVal];
                        }
                        else {
                            options[key].push(elementVal);
                        }
                    }
                    else {
                        options[key] = elementVal;
                    }
                }
            }
        }
        this.gChartData.options = options;
        if (this.gChartData.dataTable.length > 1) {
            const timeoutId = setTimeout(() => {
                this.showGoogleChart = true;
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
    }
    randerc3chart() {
        this.chartData.forEach((y, i) => {
            y['colors'] = this.chartColors[i].colors;
            y['borderColor'] = this.chartColors[i].borderColor;
            y['backgroundColor'] = this.chartColors[i].backgroundColor;
        });
        this.chartData.forEach(x => {
            x.data.unshift(x.label);
        });
        this.c3chartData = JSON.parse(JSON.stringify(this.chartData));
        this.c3xAxisLabels = this.fieldData.possible_values ? this.fieldData.possible_values.map(function (e) { return e.trim(); }) : [];
        this.c3xAxisLabel = 'x axis';
        this.c3yAxisLabel = 'y axis';
        this.c3backgroundColor = '#f0f0f0';
        this.c3chartOptions = {
            legend: {
                position: 'top'
            }
        };
        this.showc3Chart = true;
    }
    onAPICallback(data) {
        if (data && data.handler_name && this.commonUtil.getHandlerName(this.fieldData.response_api_key) === data.handler_name) {
            this.showChartJS = false;
            this.showGoogleChart = false;
            this.showc3Chart = false;
            this.chartLabels = [];
            this.chartData = [];
            const apiChartLabels = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (apiChartLabels && Array.isArray(apiChartLabels)) {
                this.chartLabels = apiChartLabels;
            }
            if (this.chartElement) {
                for (let i = 0; i < this.chartElement.length; i++) {
                    const cElmt = this.chartElement[i];
                    if (cElmt.field_type === 'ChartElement') {
                        const apiChartData = this.setApiCallBackDataUtil.setApiCallBackData(cElmt, data);
                        if (apiChartData && Array.isArray(apiChartData)) {
                            //set chart data
                            let cDataSet = {
                                label: cElmt.field_label,
                                data: apiChartData
                            };
                            this.chartData[i] = cDataSet;
                        }
                    }
                }
                if (this.chartProvider === 'chartjs') {
                    this.randerChartJS();
                }
                if (this.chartProvider === 'googlechart') {
                    this.randerGoogleChart();
                }
                if (this.chartProvider === 'C3Charts') {
                    this.randerc3chart();
                }
            }
        }
    }
    concatData(data) {
        // method not implemented
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(get_data) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    toggleLanguage(data) {
    }
    updateStateHistory(data) {
    }
    ngOnChanges(changes) {
    }
    static ɵfac = function CeeChartComponent_Factory(t) { return new (t || CeeChartComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeChartComponent, selectors: [["app-cee-chart"]], inputs: { stepId: "stepId", fieldData: "fieldData", keepState: "keepState", rowData: "rowData", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 9, vars: 9, consts: [[1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], ["baseChart", "", 3, "id", "datasets", "labels", "options", "legend", "type", 4, "ngIf"], ["baseChart", "", 3, "id", "datasets", "labels", "options", "legend", "type"], [3, "data"], ["appC3Chart", "", 3, "chartData", "chartColors", "chartType", "chartOptions", "xAxisLabels", "xAxisLabel", "yAxisLabel", "backgroundColor"]], template: function CeeChartComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵelementStart(0, "div")(1, "div", 0)(2, "div", 1);
            i0.ɵɵtemplate(3, CeeChartComponent_ng_container_3_Template, 3, 2, "ng-container", 2)(4, CeeChartComponent_span_4_Template, 2, 0, "span", 3)(5, CeeChartComponent_button_5_Template, 2, 2, "button", 4);
            i0.ɵɵelementEnd()();
            i0.ɵɵtemplate(6, CeeChartComponent_ng_container_6_Template, 2, 1, "ng-container", 2)(7, CeeChartComponent_ng_container_7_Template, 2, 1, "ng-container", 2)(8, CeeChartComponent_ng_container_8_Template, 2, 8, "ng-container", 2);
            i0.ɵɵelementEnd();
        } if (rf & 2) {
            i0.ɵɵclassMapInterpolate1("chart-container ", ctx.isCustomClass && ctx.fieldData.field_style ? ctx.fieldData.field_style.custom_class_name : "", "");
            i0.ɵɵadvance(3);
            i0.ɵɵproperty("ngIf", ctx.fieldData.field_label != "");
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.isMandatory);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.hasTooltip);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showChartJS);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showGoogleChart);
            i0.ɵɵadvance();
            i0.ɵɵproperty("ngIf", ctx.showc3Chart);
        } }, dependencies: [MatTooltipModule, Ng2GoogleChartsModule, i10.GoogleChartComponent, NgChartsModule, i11.BaseChartDirective, CommonModule, i12.NgIf, TooltipModule, i13.TooltipDirective, C3ChartDirective], styles: [".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeChartComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-chart', standalone: true, imports: [MatTooltipModule, Ng2GoogleChartsModule, NgChartsModule, CommonModule, TooltipModule, C3ChartDirective], template: "<div class=\"chart-container {{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}\">\r\n\t<div class=\"form-group\">\r\n\t\t<div class=\"form-label\">\r\n\t\t\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t\t\t<label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t\t\t<label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n\t\t\t</ng-container>\r\n\t\t\t<span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n\t\t\t<button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n\t\t</div>\r\n\t</div>\r\n\t<ng-container *ngIf=\"showChartJS\">\r\n\t\t<canvas id=\"{{fieldData.unique_id}}\" *ngIf=\"isVisible\" baseChart [datasets]=\"cjChartData\" [labels]=\"chartLabels\"\r\n\t\t\t[options]=\"chartOptions\" [legend]=\"legend\" [type]=\"chartType\">\r\n\t\t</canvas>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"showGoogleChart\">\r\n\t\t<google-chart [data]=\"gChartData\"></google-chart>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"showc3Chart\">\r\n\t\t<div appC3Chart\r\n\t\t\t[chartData]=\"c3chartData\"\r\n\t\t\t[chartColors]=\"chartColors\"\r\n\t\t\t[chartType]=\"chartType\"\r\n\t\t\t[chartOptions]=\"c3chartOptions\"\r\n\t\t\t[xAxisLabels]=\"c3xAxisLabels\"\r\n\t\t\t[xAxisLabel]=\"c3xAxisLabel\"\r\n\t\t\t[yAxisLabel]=\"c3yAxisLabel\"\r\n\t\t\t[backgroundColor]=\"c3backgroundColor\">\r\n</div>\r\n\t</ng-container>\r\n</div>\r\n", styles: [".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }], { stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeChartComponent, { className: "CeeChartComponent", filePath: "lib\\field-components\\cee-chart\\cee-chart.component.ts", lineNumber: 34 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWNoYXJ0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1jaGFydC9jZWUtY2hhcnQuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWNoYXJ0L2NlZS1jaGFydC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBZ0UsTUFBTSxlQUFlLENBQUM7QUFDdkgsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBVTdDLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUcxRCxPQUFPLEVBQUcsY0FBYyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzdDLE9BQU8sRUFBeUMscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUNqRyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwyQkFBMkIsQ0FBQztBQUM3RCxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBQ3hFLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHVCQUF1QixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0lDZnJELGdDQUFxRTtJQUFBLFlBQXlCO0lBQUEsaUJBQVE7OztJQUFqQyxjQUF5QjtJQUF6QixrREFBeUI7OztJQUM5RiwyQkFBZ0g7OztJQUE1QywyRUFBbUM7OztJQUZ4Ryw2QkFBZ0Q7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QUFZO0lBRTFDLENBQUM7SUFFRCwrQkFBK0IsQ0FBQyxJQUFZO0lBRTVDLENBQUM7SUFFRCxjQUFjLENBQUMsSUFBWTtJQUMzQixDQUFDO0lBRUQsa0JBQWtCLENBQUMsSUFBUztJQUM1QixDQUFDO0lBRUQsV0FBVyxDQUFDLE9BQXNCO0lBQ2xDLENBQUM7MkVBaFpRLGlCQUFpQjs2REFBakIsaUJBQWlCO1lDL0I1QixBQURELEFBREQsMkJBQXFILGFBQzVGLGFBQ0M7WUFNdkIsQUFEQSxBQUpBLG9GQUFnRCx1REFJQywyREFDdUc7WUFFMUosQUFEQyxpQkFBTSxFQUNEO1lBU04sQUFIQSxBQUxBLG9GQUFrQyx1RUFLSSx1RUFHSjtZQVluQyxpQkFBTTs7WUEvQkQsb0pBQStHO1lBR2xHLGVBQStCO1lBQS9CLHNEQUErQjtZQUl2QyxjQUFpQjtZQUFqQixzQ0FBaUI7WUFDZixjQUFnQjtZQUFoQixxQ0FBZ0I7WUFHWixjQUFpQjtZQUFqQixzQ0FBaUI7WUFLakIsY0FBcUI7WUFBckIsMENBQXFCO1lBR3JCLGNBQWlCO1lBQWpCLHNDQUFpQjs0QkRXbkIsZ0JBQWdCLEVBQUUscUJBQXFCLDRCQUFFLGNBQWMsMEJBQUUsWUFBWSxZQUFFLGFBQWEsd0JBQUUsZ0JBQWdCOztpRkFHdkcsaUJBQWlCO2NBUjdCLFNBQVM7MkJBQ0ksZUFBZSxjQUdiLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLHFCQUFxQixFQUFFLGNBQWMsRUFBRSxZQUFZLEVBQUUsYUFBYSxFQUFFLGdCQUFnQixDQUFDO2dUQUtoRyxNQUFNO2tCQUF0QixLQUFLO1lBQ1csU0FBUztrQkFBekIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDVyxRQUFRO2tCQUF4QixLQUFLOztrRkFORyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBWaWV3Q2hpbGQsIE9uQ2hhbmdlcywgU2ltcGxlQ2hhbmdlcyB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBCYXNlVmlldyB9IGZyb20gJy4uL2NlZS1iYXNlLWNsYXNzJztcclxuaW1wb3J0IHsgVXNlckRhdGFIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXItZGF0YS1oYW5kbGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9zaGFyZWQtZXZlbnRzLXNlcnZpY2Uuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdERpYWxvZyBhcyBNYXREaWFsb2cgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5pbXBvcnQgeyBNYXRTbmFja0JhciBhcyBNYXRTbmFja0JhciB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IEZsYXRVbmZsYXQgfSBmcm9tICcuLi8uLi91dGlscy9mbGF0LXVuZmxhdC1qc29uJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7ICBDaGFydE9wdGlvbnMgfSBmcm9tICdjaGFydC5qcyc7XHJcbmltcG9ydCB7ICBOZ0NoYXJ0c01vZHVsZSB9IGZyb20gJ25nMi1jaGFydHMnO1xyXG5pbXBvcnQgeyBHb29nbGVDaGFydEludGVyZmFjZSwgR29vZ2xlQ2hhcnRUeXBlLCBOZzJHb29nbGVDaGFydHNNb2R1bGUgfSBmcm9tICduZzItZ29vZ2xlLWNoYXJ0cyc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IEMzQ2hhcnREaXJlY3RpdmUgfSBmcm9tICcuL2NlZS1jaGFydC5kaXJlY3RpdmUnO1xyXG5pbXBvcnQgKiBhcyBjMyBmcm9tICdjMyc7XHJcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJztcclxuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcy9kaXN0L3R5cGVzJztcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS1jaGFydCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLWNoYXJ0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2NlZS1jaGFydC5jb21wb25lbnQuc2NzcycsICcuLi9maWVsZC1jb21tb24uc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRUb29sdGlwTW9kdWxlLCBOZzJHb29nbGVDaGFydHNNb2R1bGUsIE5nQ2hhcnRzTW9kdWxlLCBDb21tb25Nb2R1bGUsIFRvb2x0aXBNb2R1bGUsIEMzQ2hhcnREaXJlY3RpdmVdICBcclxuXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBDZWVDaGFydENvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBrZWVwU3RhdGUgPSBmYWxzZTtcclxuICAgIEBJbnB1dCgpIHJvd0RhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgcm9vdERhdGE6IGFueTsgICAgXHJcbiAgICBwcml2YXRlIGZsYXRVbmZsYXQ6IEZsYXRVbmZsYXQ7XHJcblxyXG4gICAgY2hhcnREYXRhOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIC8vTGFiZWxzIHNob3duIG9uIHRoZSB4LWF4aXNcclxuICAgIGNoYXJ0TGFiZWxzOiBhbnlbXTsgICBcclxuXHJcbiAgICAvLyBEZWZpbmUgY2hhcnQgb3B0aW9uc1xyXG4gICAgY2hhcnRPcHRpb25zOiBDaGFydE9wdGlvbnMgPSB7XHJcbiAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICBzY2FsZXM6IHtcclxuICAgICAgICAgICAgeToge1xyXG4gICAgICAgICAgICAgIG1pbjogMCAgLy8gQ3VzdG9tIG1pbmltdW0gdmFsdWUgZm9yIHRoZSB5LWF4aXNcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgeDoge1xyXG4gICAgICAgICAgICAgICAgbWluOiAwIC8vIEN1c3RvbSBtaW4gdmFsdWUgZm9yIHgtYXhpc1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIHBsdWdpbnM6IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgZGlzcGxheTogdHJ1ZSwgIC8vIFNob3cgdGhlIGxlZ2VuZFxyXG4gICAgICAgICAgICAgIHBvc2l0aW9uOiAndG9wJyAgLy8gJ3RvcCcsICdsZWZ0JywgJ2JvdHRvbScsIG9yICdyaWdodCdcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9O1xyXG5cclxuICAgIC8vIERlZmluZSBjb2xvcnMgb2YgY2hhcnQgc2VnbWVudHNcclxuICAgIGNoYXJ0Q29sb3JzOiBhbnlbXSA9IFtdO1xyXG5cclxuICAgIC8vIFNldCB0cnVlIHRvIHNob3cgbGVnZW5kc1xyXG4gICAgbGluZUNoYXJ0TGVnZW5kID0gdHJ1ZTtcclxuICAgIGNoYXJ0VHlwZTogc3RyaW5nO1xyXG4gICAgY2hhcnRQcm92aWRlcjogc3RyaW5nO1xyXG4gICAgY2hhcnRFbGVtZW50OiBhbnlbXTtcclxuICAgIGNqQ2hhcnREYXRhOiBhbnlbXSA9IFtdO1xyXG4gICAgcHVibGljIGdDaGFydERhdGE6IEdvb2dsZUNoYXJ0SW50ZXJmYWNlID0ge1xyXG4gICAgICAgIGNoYXJ0VHlwZTogJycsXHJcbiAgICAgICAgZGF0YVRhYmxlOiBbXSxcclxuICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgfVxyXG4gICAgc2hvd0NoYXJ0SlM6IGJvb2xlYW47XHJcbiAgICBzaG93R29vZ2xlQ2hhcnQ6IGJvb2xlYW47XHJcbiAgICBzaG93YzNDaGFydDpib29sZWFuO1xyXG4gICAgbGVnZW5kOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgICBjM2NoYXJ0RGF0YTogYW55O1xyXG4gICAgYzNjaGFydE9wdGlvbnM6YW55O1xyXG4gICAgYzN4QXhpc0xhYmVsczogYW55O1xyXG4gICAgYzN4QXhpc0xhYmVsOiBhbnk7XHJcbiAgICBjM3lBeGlzTGFiZWw6IGFueTtcclxuICAgIGMzYmFja2dyb3VuZENvbG9yOiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XHJcbiAgICBwcml2YXRlIHRpbWVvdXRJZHM6IGFueVtdID0gW107XHJcbiAgICBwcml2YXRlIGNoYXJ0SW5zdGFuY2VzOiBhbnlbXSA9IFtdOyAvLyBTdG9yZSBjaGFydCBpbnN0YW5jZXMgZm9yIGNsZWFudXBcclxuICAgIFxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2U6IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBpbnRlcm5hbENFRUVtaXR0ZXI6IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgICAgIHB1YmxpYyBzbmFja0JhcjogTWF0U25hY2tCYXIsXHJcbiAgICAgICAgcHVibGljIGh0dHA6IEh0dHBDbGllbnRcclxuICAgICkge1xyXG4gICAgICAgIHN1cGVyKHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCk7XHJcbiAgICAgICAgdGhpcy5mbGF0VW5mbGF0ID0gbmV3IEZsYXRVbmZsYXQoYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vQEhvc3RMaXN0ZW5lcignd2luZG93OmJlZm9yZXVubG9hZCcpXHJcblxyXG4gICAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgc3Vic2NyaXB0aW9uc1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKHN1YiA9PiB7XHJcbiAgICAgICAgICAgIGlmIChzdWIgJiYgIXN1Yi5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgIHN1Yi51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zID0gW107XHJcblxyXG4gICAgICAgIC8vIENsZWFyIHRpbWVvdXRzXHJcbiAgICAgICAgdGhpcy50aW1lb3V0SWRzLmZvckVhY2goaWQgPT4gY2xlYXJUaW1lb3V0KGlkKSk7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0SWRzID0gW107XHJcblxyXG4gICAgICAgIC8vIERlc3Ryb3kgY2hhcnQgaW5zdGFuY2VzXHJcbiAgICAgICAgdGhpcy5kZXN0cm95Q2hhcnRJbnN0YW5jZXMoKTtcclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgbGFyZ2Ugb2JqZWN0IHJlZmVyZW5jZXNcclxuICAgICAgICB0aGlzLmNsZWFyRGF0YVJlZmVyZW5jZXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGRlc3Ryb3lDaGFydEluc3RhbmNlcygpOiB2b2lkIHtcclxuICAgICAgICAvLyBEZXN0cm95IENoYXJ0LmpzIGluc3RhbmNlc1xyXG4gICAgICAgIHRoaXMuY2hhcnRJbnN0YW5jZXMuZm9yRWFjaChjaGFydCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChjaGFydCAmJiB0eXBlb2YgY2hhcnQuZGVzdHJveSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgY2hhcnQuZGVzdHJveSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5jaGFydEluc3RhbmNlcyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2xlYXJEYXRhUmVmZXJlbmNlcygpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNoYXJ0RGF0YSA9IFtdO1xyXG4gICAgICAgIHRoaXMuY2hhcnRDb2xvcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmNqQ2hhcnREYXRhID0gW107XHJcbiAgICAgICAgdGhpcy5jM2NoYXJ0RGF0YSA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5nQ2hhcnREYXRhID0ge1xyXG4gICAgICAgICAgICBjaGFydFR5cGU6ICcnLFxyXG4gICAgICAgICAgICBkYXRhVGFibGU6IFtdLFxyXG4gICAgICAgICAgICBvcHRpb25zOiB7fVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgdGhpcy5jaGFydEVsZW1lbnQgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmNoYXJ0TGFiZWxzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID8gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS50cmltKCk7IH0pIDogW107XHJcbiAgICAgICAgdGhpcy5jaGFydFByb3ZpZGVyID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydwcm92aWRlciddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydwcm92aWRlciddLnRvTG93ZXJDYXNlKCkgOiAnY2hhcnRqcyc7XHJcbiAgICAgICAgdGhpcy5jaGFydFR5cGUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3R5cGUnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsndHlwZSddIDogJ2xpbmUnO1xyXG4gICAgICAgIHRoaXMuY2hhcnRPcHRpb25zLnBsdWdpbnMubGVnZW5kLnBvc2l0aW9uID10aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2xlZ2VuZF9wb3NpdGlvbl9jaGFydGpzJ10gPyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2xlZ2VuZF9wb3NpdGlvbl9jaGFydGpzJ10udG9Mb3dlckNhc2UoKSA6ICd0b3AnO1xyXG4gICAgICAgIHRoaXMuY2hhcnRPcHRpb25zLnNjYWxlcy55Lm1pbiA9dGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydjaGFydGpzX1lfYXhpc19taW5fdmFsdWUnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnY2hhcnRqc19ZX2F4aXNfbWluX3ZhbHVlJ10gOiAwO1xyXG4gICAgICAgIHRoaXMuY2hhcnRPcHRpb25zLnNjYWxlcy54Lm1pbiA9dGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydjaGFydGpzX3hfYXhpc19taW5fdmFsdWUnXSA/IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnY2hhcnRqc194X2F4aXNfbWluX3ZhbHVlJ106IDA7XHJcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydkZWZhdWx0X3ZhbHVlJ10pLnN1YnNjcmliZSh7XHJcbiAgICAgICAgICAgIG5leHQ6IChkYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2hhcnRFbGVtZW50ID0gZGF0YS5ibG9ja19maWVsZHM7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJhbmRlckNoYXJ0RWxlbWVudCgpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBsb2FkaW5nIGNoYXJ0IGRhdGE6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1YnNjcmlwdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByYW5kZXJDaGFydEVsZW1lbnQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFydERhdGEgPSBbXTtcclxuICAgICAgICB0aGlzLmNoYXJ0Q29sb3JzID0gW107XHJcbiAgICAgICAgZm9yIChjb25zdCBjRWxtdCBvZiB0aGlzLmNoYXJ0RWxlbWVudCkge1xyXG4gICAgICAgICAgICBpZiAoY0VsbXQuZmllbGRfdHlwZSA9PT0gJ0NoYXJ0RWxlbWVudCcpIHtcclxuICAgICAgICAgICAgICAgIC8vc2V0IGNoYXJ0IGRhdGFcclxuICAgICAgICAgICAgICAgIGxldCBjRGF0YVNldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogW11cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBjRGF0YVNldC5sYWJlbCA9IGNFbG10LmZpZWxkX2xhYmVsO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxlbWVudFZhbHVlID0gY0VsbXQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzID8gY0VsbXQuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmZpbmQocCA9PiBwLnBhcmFtZXRlcl90eXBlID09PSAnZGVmYXVsdF92YWx1ZScpIDogbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRocmVzaG9sZCA9IDA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFZhbHVlICYmIGVsZW1lbnRWYWx1ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNEYXRhU2V0LmRhdGEgPSBlbGVtZW50VmFsdWUudmFsdWUuc3BsaXQoJywnKS5tYXAoZnVuY3Rpb24gKGUpIHsgcmV0dXJuIGUudHJpbSgpOyB9KTsgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YS5wdXNoKGNEYXRhU2V0KTtcclxuICAgICAgICAgICAgICAgIC8vc2V0IGNoYXJ0IHN0eWxlXHJcbiAgICAgICAgICAgICAgICBsZXQgY29sb3JEYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGNTdHlsZSBvZiBjRWxtdC5wb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjc0FyciA9IGNTdHlsZS5zcGxpdCgnfHwnKTtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvckRhdGFbY3NBcnJbMF1dID0gY3NBcnJbMV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0Q29sb3JzLnB1c2goY29sb3JEYXRhKTtcclxufVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGFydFByb3ZpZGVyID09PSAnY2hhcnRqcycpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kZXJDaGFydEpTKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmNoYXJ0UHJvdmlkZXIgPT09ICdnb29nbGVjaGFydCcpIHtcclxuICAgICAgICAgICAgdGhpcy5yYW5kZXJHb29nbGVDaGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGFydFByb3ZpZGVyID09PSAnYzNjaGFydHMnKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZGVyYzNjaGFydCgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmRlckNoYXJ0SlMoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFydERhdGEuZm9yRWFjaCgoeSwgaSk9PntcclxuICAgICAgICAgICAgeVsnY29sb3JzJ10gPSB0aGlzLmNoYXJ0Q29sb3JzW2ldLmNvbG9ycztcclxuICAgICAgICAgICAgeVsnYm9yZGVyQ29sb3InXSA9IHRoaXMuY2hhcnRDb2xvcnNbaV0uYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICAgIHlbJ2JhY2tncm91bmRDb2xvciddID0gdGhpcy5jaGFydENvbG9yc1tpXS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCB0aGlzLmNoYXJ0Q29sb3JzLmxlbmd0aDsgYysrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNoYXJ0Q29sb3JzW2NdO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGVsZW1lbnRba2V5XSA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxlbWVudFtrZXldLmluY2x1ZGVzKCd7JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IEpTT04ucGFyc2UoZWxlbWVudFtrZXldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGVsZW1lbnRba2V5XS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRba2V5XSA9IGVsZW1lbnRba2V5XS5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAoa2V5LnRvTG93ZXJDYXNlKCkgPT09IFwibGVnZW5kXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sZWdlbmQgPSBlbGVtZW50W2tleV0gPT09ICdmYWxzZScgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKGtleS50b0xvd2VyQ2FzZSgpID09PSBcInNraXBkZWNpbWFsXCIgJiYgZWxlbWVudFtrZXldID09ICd0cnVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJ0RGF0YVsnc2NhbGVzJ10gPSB0aGlzLmNoYXJ0RGF0YVsnc2NhbGVzJ10gPyB0aGlzLmNoYXJ0RGF0YVsnc2NhbGVzJ10gOiB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydERhdGFbJ3NjYWxlcyddWyd5QXhlcyddID0gdGhpcy5jaGFydERhdGFbJ3NjYWxlcyddWyd5QXhlcyddID8gdGhpcy5jaGFydERhdGFbJ3NjYWxlcyddWyd5QXhlcyddIDogW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHlhVGlja3MgPSB0aGlzLmNoYXJ0RGF0YVsnc2NhbGVzJ11bJ3lBeGVzJ10uZmluZCh5YSA9PiB5YS50aWNrcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh5YVRpY2tzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcnREYXRhWydzY2FsZXMnXVsneUF4ZXMnXS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aWNrczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBiZWdpbkF0WmVybzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uKGxhYmVsLCBpbmRleCwgbGFiZWxzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5mbG9vcihOdW1iZXIobGFiZWwpKSA9PSBsYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsYWJlbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNqQ2hhcnREYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmNoYXJ0RGF0YSkpO1xyXG4gICAgICAgIHRoaXMuc2hvd0NoYXJ0SlMgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZGVyR29vZ2xlQ2hhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5nQ2hhcnREYXRhLmNoYXJ0VHlwZSA9dGhpcy5jaGFydFR5cGU7XHJcbiAgICAgICAgY29uc3QgZGF0YVRhYmxlOiBhbnlbXSA9IFtdXHJcbiAgICAgICAgY29uc3QgZGF0YVRhYmxlSGVhZCA6YW55W10gPSBbJyddXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYXJ0RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkYXRhVGFibGVIZWFkLnB1c2godGhpcy5jaGFydERhdGFbaV0ubGFiZWwpXHJcbiAgICAgICAgICAgIGRhdGFUYWJsZUhlYWQucHVzaCh7IHJvbGU6ICdzdHlsZScgfSk7IFxyXG4gICAgICAgIH1cclxuICAgICAgICBkYXRhVGFibGUucHVzaChkYXRhVGFibGVIZWFkKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5jaGFydERhdGEnLCB0aGlzLmNoYXJ0RGF0YSlcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygndGhpcy5jaGFydENvbG9ycycsIHRoaXMuY2hhcnRDb2xvcnMpXHJcbiAgICAgICAgY29uc3QgY29sb3JTZXQ6IHN0cmluZ1tdID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuY2hhcnRDb2xvcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvclN0cmluZyA9IHRoaXMuY2hhcnRDb2xvcnNbMF1bJ2JhY2tncm91bmRDb2xvciddIHx8IHRoaXMuY2hhcnRDb2xvcnNbMF1bJ2NvbG9ycyddIHx8ICcnO1xyXG4gICAgICAgICAgICBpZiAoY29sb3JTdHJpbmcuaW5jbHVkZXMoJ3wnKSkge1xyXG4gICAgICAgICAgICAgICAgY29sb3JTZXQucHVzaCguLi5jb2xvclN0cmluZy5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvclNldC5wdXNoKGNvbG9yU3RyaW5nLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgbCA9IDA7IGwgPCB0aGlzLmNoYXJ0TGFiZWxzLmxlbmd0aDsgbCsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGFUYWJsZWl0ZW06IGFueVtdID0gW3RoaXMuY2hhcnRMYWJlbHNbbF1dO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY2hhcnREYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaGFydERhdGFbaV0uZGF0YVtsXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHRWYWwgPSBwYXJzZUZsb2F0KHRoaXMuY2hhcnREYXRhW2ldLmRhdGFbbF0udG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVRhYmxlaXRlbS5wdXNoKHRWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbG9ySW5kZXggPSBsICUgY29sb3JTZXQubGVuZ3RoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0eWxlQ29sb3IgPSBjb2xvclNldFtjb2xvckluZGV4XSB8fCBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFUYWJsZWl0ZW0ucHVzaChzdHlsZUNvbG9yKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBkYXRhVGFibGUucHVzaChkYXRhVGFibGVpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuY2hhcnREYXRhIDEnLCBkYXRhVGFibGUpXHJcbiAgICAgICAgdGhpcy5nQ2hhcnREYXRhLmRhdGFUYWJsZSA9IGRhdGFUYWJsZTtcclxuICAgICAgICBjb25zdCBvcHRpb25zOiBhbnkgPSB7fTtcclxuICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IHRoaXMuY2hhcnRDb2xvcnMubGVuZ3RoOyBjKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY2hhcnRDb2xvcnNbY107XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGxldCBlbGVtZW50VmFsID0gZWxlbWVudFtrZXldO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnRWYWwuaW5jbHVkZXMoJ3snKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnRWYWwgPSBKU09OLnBhcnNlKGVsZW1lbnRWYWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvciBpbiBwYXJzZScsIGVycm9yLCBlbGVtZW50VmFsKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXJ0Q29sb3JzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2tleV0gPSB0eXBlb2YgZWxlbWVudFZhbCA9PT0gJ3N0cmluZycgJiYgZWxlbWVudFZhbC5pbmNsdWRlcygnfCcpID8gZWxlbWVudFZhbC5zcGxpdCgnfCcpLm1hcChzID0+IHMudHJpbSgpKSA6IGVsZW1lbnRWYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoWydjb2xvcnMnXS5pbmNsdWRlcyhrZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb3B0aW9uc1trZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2tleV0gPSBbZWxlbWVudFZhbF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zW2tleV0ucHVzaChlbGVtZW50VmFsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wdGlvbnNba2V5XSA9IGVsZW1lbnRWYWw7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMuZ0NoYXJ0RGF0YS5vcHRpb25zID0gb3B0aW9ucztcclxuICAgICAgICBpZiAodGhpcy5nQ2hhcnREYXRhLmRhdGFUYWJsZS5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCkgPT57XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dHb29nbGVDaGFydCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJhbmRlcmMzY2hhcnQoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFydERhdGEuZm9yRWFjaCgoeSwgaSk9PntcclxuICAgICAgICAgICAgeVsnY29sb3JzJ10gPSB0aGlzLmNoYXJ0Q29sb3JzW2ldLmNvbG9ycztcclxuICAgICAgICAgICAgeVsnYm9yZGVyQ29sb3InXSA9IHRoaXMuY2hhcnRDb2xvcnNbaV0uYm9yZGVyQ29sb3I7XHJcbiAgICAgICAgICAgIHlbJ2JhY2tncm91bmRDb2xvciddID0gdGhpcy5jaGFydENvbG9yc1tpXS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLmNoYXJ0RGF0YS5mb3JFYWNoKCB4ID0+e1xyXG4gICAgICAgICAgICB4LmRhdGEudW5zaGlmdCh4LmxhYmVsKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMuYzNjaGFydERhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuY2hhcnREYXRhKSk7XHJcbiAgICAgICAgdGhpcy5jM3hBeGlzTGFiZWxzID0gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID8gdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLm1hcChmdW5jdGlvbiAoZSkgeyByZXR1cm4gZS50cmltKCk7IH0pIDogW107XHJcbiAgICAgICAgdGhpcy5jM3hBeGlzTGFiZWwgPSAneCBheGlzJztcclxuICAgICAgICB0aGlzLmMzeUF4aXNMYWJlbCA9ICd5IGF4aXMnO1xyXG4gICAgICAgIHRoaXMuYzNiYWNrZ3JvdW5kQ29sb3IgPSAnI2YwZjBmMCc7XHJcbiAgICAgICAgdGhpcy5jM2NoYXJ0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgbGVnZW5kOiB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3RvcCdcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnNob3djM0NoYXJ0ID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmIChkYXRhICYmIGRhdGEuaGFuZGxlcl9uYW1lICYmIHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZSh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KSA9PT0gZGF0YS5oYW5kbGVyX25hbWUpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93Q2hhcnRKUyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3dHb29nbGVDaGFydCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnNob3djM0NoYXJ0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhcnRMYWJlbHMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5jaGFydERhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFwaUNoYXJ0TGFiZWxzID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGlmIChhcGlDaGFydExhYmVscyAmJiBBcnJheS5pc0FycmF5KGFwaUNoYXJ0TGFiZWxzKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jaGFydExhYmVscyA9IGFwaUNoYXJ0TGFiZWxzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNoYXJ0RWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNoYXJ0RWxlbWVudC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNFbG10ID0gdGhpcy5jaGFydEVsZW1lbnRbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNFbG10LmZpZWxkX3R5cGUgPT09ICdDaGFydEVsZW1lbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpQ2hhcnREYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShjRWxtdCwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFwaUNoYXJ0RGF0YSAmJiBBcnJheS5pc0FycmF5KGFwaUNoYXJ0RGF0YSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vc2V0IGNoYXJ0IGRhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjRGF0YVNldCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogY0VsbXQuZmllbGRfbGFiZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YTogYXBpQ2hhcnREYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFydERhdGFbaV0gPSBjRGF0YVNldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXJ0UHJvdmlkZXIgPT09ICdjaGFydGpzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZGVyQ2hhcnRKUygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2hhcnRQcm92aWRlciA9PT0gJ2dvb2dsZWNoYXJ0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmFuZGVyR29vZ2xlQ2hhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNoYXJ0UHJvdmlkZXIgPT09ICdDM0NoYXJ0cycpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhbmRlcmMzY2hhcnQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSAgXHJcbiAgICAgICAgfSAgICAgICAgICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgLy8gbWV0aG9kIG5vdCBpbXBsZW1lbnRlZFxyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIC8vIHRocm93IG5ldyBFcnJvcignTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC4nKTtcclxuICAgIH1cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHRvZ2dsZUxhbmd1YWdlKGRhdGE6IG9iamVjdCkge1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlSGlzdG9yeShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICB9XHJcbn1cclxuIiwiPGRpdiBjbGFzcz1cImNoYXJ0LWNvbnRhaW5lciB7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX1cIj5cclxuXHQ8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG5cdFx0PGRpdiBjbGFzcz1cImZvcm0tbGFiZWxcIj5cclxuXHRcdFx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkRGF0YS5maWVsZF9sYWJlbCE9JydcIj5cclxuXHRcdFx0XHQ8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiICpuZ0lmPVwiIWlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCI+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fTwvbGFiZWw+XHJcblx0XHRcdFx0PGxhYmVsIGNsYXNzPVwiY29sLWZvcm0tbGFiZWxcIiAqbmdJZj1cImlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCIgW2lubmVySFRNTF09XCJmaWVsZERhdGEuZmllbGRfbGFiZWxcIj48L2xhYmVsPlxyXG5cdFx0XHQ8L25nLWNvbnRhaW5lcj5cclxuXHRcdFx0PHNwYW4gKm5nSWY9XCJpc01hbmRhdG9yeVwiIGNsYXNzPVwibWFuZGV0b3J5LW1hcmtcIj4gKjwvc3Bhbj5cclxuXHRcdFx0PGJ1dHRvbiAqbmdJZj1cImhhc1Rvb2x0aXBcIiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJidG4tdG9vbHRpcCBtbC1hdXRvXCIgW3Rvb2x0aXBdPVwiZmllbGREYXRhLnRvb2x0aXBcIiBbYXR0ci5hcmlhLWxhYmVsXT1cIidUb29sdGlwOiAnICsgZmllbGREYXRhLnRvb2x0aXAgXCI+aTwvYnV0dG9uPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cInNob3dDaGFydEpTXCI+XHJcblx0XHQ8Y2FudmFzIGlkPVwie3tmaWVsZERhdGEudW5pcXVlX2lkfX1cIiAqbmdJZj1cImlzVmlzaWJsZVwiIGJhc2VDaGFydCBbZGF0YXNldHNdPVwiY2pDaGFydERhdGFcIiBbbGFiZWxzXT1cImNoYXJ0TGFiZWxzXCJcclxuXHRcdFx0W29wdGlvbnNdPVwiY2hhcnRPcHRpb25zXCIgW2xlZ2VuZF09XCJsZWdlbmRcIiBbdHlwZV09XCJjaGFydFR5cGVcIj5cclxuXHRcdDwvY2FudmFzPlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93R29vZ2xlQ2hhcnRcIj5cclxuXHRcdDxnb29nbGUtY2hhcnQgW2RhdGFdPVwiZ0NoYXJ0RGF0YVwiPjwvZ29vZ2xlLWNoYXJ0PlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG5cdDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93YzNDaGFydFwiPlxyXG5cdFx0PGRpdiBhcHBDM0NoYXJ0XHJcblx0XHRcdFtjaGFydERhdGFdPVwiYzNjaGFydERhdGFcIlxyXG5cdFx0XHRbY2hhcnRDb2xvcnNdPVwiY2hhcnRDb2xvcnNcIlxyXG5cdFx0XHRbY2hhcnRUeXBlXT1cImNoYXJ0VHlwZVwiXHJcblx0XHRcdFtjaGFydE9wdGlvbnNdPVwiYzNjaGFydE9wdGlvbnNcIlxyXG5cdFx0XHRbeEF4aXNMYWJlbHNdPVwiYzN4QXhpc0xhYmVsc1wiXHJcblx0XHRcdFt4QXhpc0xhYmVsXT1cImMzeEF4aXNMYWJlbFwiXHJcblx0XHRcdFt5QXhpc0xhYmVsXT1cImMzeUF4aXNMYWJlbFwiXHJcblx0XHRcdFtiYWNrZ3JvdW5kQ29sb3JdPVwiYzNiYWNrZ3JvdW5kQ29sb3JcIj5cclxuPC9kaXY+XHJcblx0PC9uZy1jb250YWluZXI+XHJcbjwvZGl2PlxyXG4iXX0=