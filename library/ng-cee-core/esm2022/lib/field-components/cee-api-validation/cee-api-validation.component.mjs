import { Component, Input, HostListener } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { FlatUnflat } from '../../utils/flat-unflat-json';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CommonModule } from '@angular/common';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { MatMenuModule } from '@angular/material/menu';
import { HighlightPipe } from '../../pipes/highlight.pipe';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTreeModule } from '@angular/material/tree';
import * as i0 from "@angular/core";
import * as i1 from "@angular/platform-browser";
import * as i2 from "../../services/user-data-handler.service";
import * as i3 from "../../services/shared-events-service.service";
import * as i4 from "../../services/internal-cee-emitter-service.service";
import * as i5 from "../../models/app-data/app-data.service";
import * as i6 from "../../models/api-data/api-data.service";
import * as i7 from "../../services/wfe-step-loader.service";
import * as i8 from "../../services/accordian-services";
import * as i9 from "@angular/material/dialog";
import * as i10 from "@angular/material/snack-bar";
import * as i11 from "@angular/common/http";
import * as i12 from "../../services/cee-api-service.service";
import * as i13 from "@angular/router";
import * as i14 from "../../utils/wfe-event-list-handler-util";
import * as i15 from "@angular/common";
import * as i16 from "@angular/material/tree";
import * as i17 from "@angular/material/button";
import * as i18 from "@angular/material/icon";
const _c0 = (a0, a1) => ({ "error-circle": a0, "warning-circle": a1 });
function CeeApiValidationComponent_div_0_mat_tree_node_2_span_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "span", 12);
} if (rf & 2) {
    const node_r1 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction2(1, _c0, node_r1.errorType === "error", node_r1.errorType === "warning"));
} }
function CeeApiValidationComponent_div_0_mat_tree_node_2_span_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 13);
    i0.ɵɵtext(1, "(error)");
    i0.ɵɵelementEnd();
} }
function CeeApiValidationComponent_div_0_mat_tree_node_2_span_7_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 14);
    i0.ɵɵtext(1, "(warning)");
    i0.ɵɵelementEnd();
} }
function CeeApiValidationComponent_div_0_mat_tree_node_2_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 15);
    i0.ɵɵlistener("click", function CeeApiValidationComponent_div_0_mat_tree_node_2_button_8_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const node_r1 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onEditClick(node_r1)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "edit");
    i0.ɵɵelementEnd()();
} }
function CeeApiValidationComponent_div_0_mat_tree_node_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "mat-tree-node", 4)(1, "li", 5);
    i0.ɵɵelement(2, "button", 6);
    i0.ɵɵtemplate(3, CeeApiValidationComponent_div_0_mat_tree_node_2_span_3_Template, 1, 4, "span", 7);
    i0.ɵɵelementStart(4, "span", 8);
    i0.ɵɵtext(5);
    i0.ɵɵtemplate(6, CeeApiValidationComponent_div_0_mat_tree_node_2_span_6_Template, 2, 0, "span", 9)(7, CeeApiValidationComponent_div_0_mat_tree_node_2_span_7_Template, 2, 0, "span", 10);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(8, CeeApiValidationComponent_div_0_mat_tree_node_2_button_8_Template, 3, 0, "button", 11);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const node_r1 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", node_r1.type === "child");
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate1(" ", node_r1.name, " ");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", node_r1.errorType === "error");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", node_r1.errorType === "warning");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.shouldShowEditButton(node_r1));
} }
function CeeApiValidationComponent_div_0_mat_nested_tree_node_3_button_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 23);
    i0.ɵɵlistener("click", function CeeApiValidationComponent_div_0_mat_nested_tree_node_3_button_5_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r6); const node_r5 = i0.ɵɵnextContext().$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onEditClick(node_r5)); });
    i0.ɵɵelementStart(1, "mat-icon");
    i0.ɵɵtext(2, "edit");
    i0.ɵɵelementEnd()();
} }
function CeeApiValidationComponent_div_0_mat_nested_tree_node_3_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "mat-nested-tree-node", 16)(1, "li", 17)(2, "div", 18);
    i0.ɵɵlistener("click", function CeeApiValidationComponent_div_0_mat_nested_tree_node_3_Template_div_click_2_listener($event) { const node_r5 = i0.ɵɵrestoreView(_r4).$implicit; const ctx_r2 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r2.onNodeClick(node_r5, $event)); });
    i0.ɵɵelementStart(3, "span", 19);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(5, CeeApiValidationComponent_div_0_mat_nested_tree_node_3_button_5_Template, 3, 0, "button", 20);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "ul", 21);
    i0.ɵɵelementContainer(7, 22);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const node_r5 = ctx.$implicit;
    const ctx_r2 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(node_r5.name);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r2.shouldShowEditButton(node_r5));
    i0.ɵɵadvance();
    i0.ɵɵclassProp("example-tree-invisible", !ctx_r2.treeControl.isExpanded(node_r5));
} }
function CeeApiValidationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "mat-tree", 1);
    i0.ɵɵtemplate(2, CeeApiValidationComponent_div_0_mat_tree_node_2_Template, 9, 5, "mat-tree-node", 2)(3, CeeApiValidationComponent_div_0_mat_nested_tree_node_3_Template, 8, 4, "mat-nested-tree-node", 3);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r2 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("dataSource", ctx_r2.dataSource)("treeControl", ctx_r2.treeControl);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("matTreeNodeDefWhen", ctx_r2.hasChild);
} }
function transformResponseToTree(data) {
    if (!data?.result?.main_parent)
        return [];
    const treeMap = new Map();
    data.result.main_parent.forEach((item) => {
        const fieldChildren = item.fieldInfo?.map((field) => ({
            name: `${field.errorMessage}`,
            borrower_id: item.borrower_id,
            blockName: field.block_name,
            stepName: field.step_name,
            api_key: field.api_key || "",
            children: [],
            type: 'child',
            errorType: field.type
        })) || [];
        if (item.borrower_id) {
            // ✅ Store borrower_id at the parent level
            if (!treeMap.has(item.parent)) {
                treeMap.set(item.parent, {
                    name: item.parent,
                    borrower_id: item.borrower_id,
                    blockName: fieldChildren.length > 0 ? fieldChildren[0].blockName : null,
                    stepName: fieldChildren.length > 0 ? fieldChildren[0].stepName : null,
                    children: fieldChildren,
                    type: 'parent'
                });
            }
        }
        else {
            treeMap.set(item.parent, {
                name: item.parent,
                borrower_id: "",
                blockName: fieldChildren.length > 0 ? fieldChildren[0].blockName : null,
                stepName: fieldChildren.length > 0 ? fieldChildren[0].stepName : null,
                children: fieldChildren,
                type: 'parent'
            });
        }
    });
    return Array.from(treeMap.values());
}
export class CeeApiValidationComponent extends BaseView {
    sanitizer;
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    accordionService;
    dialog;
    snackBar;
    http;
    ceeApiService;
    router;
    cdRef;
    renderer;
    eventListHandler;
    route;
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
    _iframeLabel;
    iframeLabel;
    tooltipText = "";
    expandAll = true;
    showTruncatedList = false;
    showItemCount = 1;
    showItemKeys = ['id', 'value'];
    showItemClickable = false;
    showItemRoute = '';
    showItemRouteNewTab = false;
    highlight;
    treeControl = new NestedTreeControl(node => node.children);
    dataSource = new MatTreeNestedDataSource();
    keyValueMap = new Map();
    borrowerIdMap = new Map();
    responseResult;
    mainParentArray = [];
    flatUnflat;
    constructor(sanitizer, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, accordionService, dialog, snackBar, http, ceeApiService, router, cdRef, renderer, eventListHandler, route) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router);
        this.sanitizer = sanitizer;
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.accordionService = accordionService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.cdRef = cdRef;
        this.renderer = renderer;
        this.eventListHandler = eventListHandler;
        this.route = route;
        this.flatUnflat = new FlatUnflat(appDataService);
    }
    ngOnInit() {
        this.http.get('./assets/jsons/lender_mapping.json').subscribe({
            next: (response) => {
                if (response.result && Array.isArray(response.result)) {
                    this.keyValueMap.clear(); // Clear previous data
                    this.responseResult = response.result;
                    response.result.forEach(obj => {
                        const key = obj.response_value; // Extract response_value as key
                        const value = obj.unique_id; // Extract unique_id as value
                        this.keyValueMap.set(key, value); // Store in Map
                    });
                }
            },
            error: (error) => {
                console.error("Error fetching API data:", error);
            }
        });
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData, this.cdRef);
    }
    hasChild = (_, node) => !!node.children && node.children.length > 0;
    //@HostListener('window:beforeunload')
    onDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    ngOnDestroy() {
        this.onViewUnload();
        this.unsubscribe(); // unsubscribe the event on destroy
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
        }
    }
    concatData() { }
    onViewDataInit() {
        this.html_id = this.fieldData.html_id;
        // END
        this.tooltipText = (this.fieldData && this.fieldData.tooltip) ? this.fieldData.tooltip.toString().replace(/(<([^>]+)>)/ig, '') : "";
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        this.fieldData['field_label'] += " ";
        this.fieldLabels = []; // TODO : Check Implementation
        this.fieldLabels.push(this.fieldData.field_label);
        const apiKey = localStorage.getItem('singleApiKey') === 'true' ? this.fieldData.api_key : this.fieldData.response_api_key;
        if (apiKey || (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))'))) {
            if (this.rowData) {
                if (this.rowData.hasOwnProperty('data')) {
                    this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, this.rowData.data);
                }
                if (this.rowData.hasOwnProperty('value')) {
                    this.fieldLabels = [];
                    if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                        for (const val of this.fieldData.possible_values) {
                            if (this.commonUtil.getPossibleId(val) == this.rowData.value) {
                                this.fieldLabels.push(this.commonUtil.getPossibleValue(val));
                            }
                        }
                    }
                    else {
                        if (this.rowData.value !== undefined) {
                            if (this.rowData.value && this.rowData.value.includes('((dynamic))')) {
                                this.fieldLabels.push(this.setDynamicLabelUtil.getDynamicValue({ field_label: this.rowData.value }).field_label);
                            }
                            else {
                                this.fieldLabels.push(this.getDataFormattedValue(this.rowData.value));
                            }
                        }
                        else {
                            this.fieldLabels = [this.getDataFormattedValue(this.fieldData.field_label)];
                        }
                    }
                }
                if (this.fieldData.hasOwnProperty('additional_parameters_config') && this.fieldData.additional_parameters_config && !Array.isArray(this.fieldData.additional_parameters_config)) {
                    this.fieldLabels = [this.fieldData.additional_parameters_config];
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
                this.getDynamicIframe(data);
            });
        }
        else if (this.fieldData.field_label.includes('%repeatablePos%')) {
            this.fieldLabels[0] = this.fieldData.field_label.replace('%repeatablePos%', this.rowData.position + 1);
        }
        if (this.additionalParameter['iframe']) {
            if (!this.additionalParameter['iframe'].includes('((dynamic))')) {
                this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(this.additionalParameter['iframe']);
            }
            this.getDynamicIframe();
        }
        if (this.additionalParameter['CEE_MaskNumberLimit']) {
            let formats = this.additionalParameter['CEE_MaskNumberLimit'].split('|');
            let field_box = this.commonUtil.getMaskedData(this.fieldLabels[0], formats[0], formats[1], formats[2]);
            this.fieldLabels = [field_box];
        }
        if (this.rowData) {
            this.sharedEventsService.emitOnApplyFilter.subscribe(data => {
                if (this.rowData.html_id.includes(data.source)) {
                    this.highlight = data.highlight;
                }
            });
        }
        this.showTruncatedList = (this.additionalParameter['CEE_show_list_items_trancated'] && this.additionalParameter['CEE_show_list_items_trancated'].toLowerCase() == 'true') ? true : this.showTruncatedList;
        this.showItemCount = (this.additionalParameter['CEE_show_list_items_limit'] && !isNaN(this.additionalParameter['CEE_show_list_items_limit'])) ? Number(this.additionalParameter['CEE_show_list_items_limit']) : 1;
        this.showItemKeys = this.additionalParameter['CEE_show_list_items_key'] ? this.additionalParameter['CEE_show_list_items_key'].split('||') : this.showItemKeys;
        this.showItemClickable = (this.additionalParameter['CEE_show_list_items_clickable'] && this.additionalParameter['CEE_show_list_items_clickable'].toLowerCase() == 'true') ? true : this.showItemClickable;
        this.showItemRoute = this.additionalParameter['CEE_show_list_items_route'] ? this.additionalParameter['CEE_show_list_items_route'] : '#';
        this.showItemRouteNewTab = (this.additionalParameter['CEE_show_list_items_route_new_tab'] && this.additionalParameter['CEE_show_list_items_route_new_tab'].toLowerCase() == 'true') ? true : this.showItemRouteNewTab;
    }
    prepareLink(searchStr, replaceStr) {
        return this.showItemRoute.replaceAll(searchStr, replaceStr);
    }
    getDynamicIframe(data) {
        if (this.additionalParameter['iframe'] && this.additionalParameter['iframe'].includes('((dynamic))')) {
            const iframeLabel = this.setDynamicLabelUtil.getDynamicValue({ field_label: this.additionalParameter['iframe'] }, data).field_label;
            if (this._iframeLabel !== iframeLabel) {
                this._iframeLabel = iframeLabel;
                this.iframeLabel = '';
                const _this = this;
                setTimeout(() => {
                    _this.iframeLabel = this.sanitizer.bypassSecurityTrustResourceUrl(iframeLabel);
                }, 0);
            }
        }
    }
    onAPICallbackData(data) {
        const apiKey = this.fieldData.response_api_key.split('|')[0];
        const handlerData2 = this.apiDataService.getApiDataByHandler('getDealBorrowers'); //getDealBorrowers
        const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
        this.borrowerIdMap = new Map(); // Store borrower_id -> index
        if (handlerData2?.value) {
            Object.keys(handlerData2.value).forEach(key => {
                const match = key.match(/getDealBorrowers##data\[(\d+)\]\.borrower_id/);
                if (match) {
                    const index = parseInt(match[1]); // Extract index
                    const borrowerId = handlerData2.value[key]; // Get borrower_id value
                    this.borrowerIdMap.set(borrowerId, index);
                }
            });
        }
        // Transform the API response using getApiKeyValuePair()
        var apiKeyValue = this.getApiKeyValuePair(handlerData);
        this.dataSource.data = transformResponseToTree(apiKeyValue);
        const expandAllParam = this.fieldData.additional_parameters?.find(param => param.parameter_type === "CEE_ExpandAll");
        this.expandAll = expandAllParam ? expandAllParam.value.toLowerCase() === 'true' : false;
        setTimeout(() => {
            this.treeControl.dataNodes = this.dataSource.data;
            this.treeControl.expandAll();
            if (this.expandAll) {
                this.expandAllNodes();
            }
            else {
                this.collapseAllNodes();
            }
        }, 100);
    }
    onAPICallback(data) {
        this.onAPICallbackData(data);
        if (this.rowData?.response_api_key && this.rowData?.response_api_key.length === 2) {
            let resData = data.hasOwnProperty(this.rowData.response_api_key[1]) ? data[this.rowData.response_api_key[1]] : null;
            resData = this.getDataFormattedValue(resData);
            this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
        }
        if (!this.rowData) { // if rowData is null
            data = this.flatUnflat.createNestedObject(data);
            this.getDynamicLabel(data);
            let resData = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
            if (resData !== null && resData !== undefined) {
                if (!Array.isArray(resData) && this.additionalParameter['CEE_STRING_FORMAT']) {
                    resData = this.wfeStepLoaderService.manipulateString(this.additionalParameter['CEE_STRING_FORMAT'], resData);
                }
                if (Array.isArray(resData)) {
                    this.fieldLabels = this.returnLabelsMapPossibleValues(resData);
                }
                else {
                    resData = this.getDataFormattedValue(resData);
                    this.fieldLabels = this.returnLabelsMapPossibleValues([resData]);
                }
            }
        }
        else {
            this.getDynamicLabel(data, true);
        }
    }
    getDataFormattedValue(data) {
        // For Data Format
        try {
            if (this.additionalParameter['Data Format']) {
                const formats = this.additionalParameter['Data Format'].split('||').map(str => str && str.trim());
                const transformType = formats[0] == "mask" ? "maskLabel" : formats[0];
                formats.shift();
                return this.setDynamicLabelUtil.returnFormattedValue(data, transformType, formats);
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
    getDynamicLabel(data, useSecondaryApiKey = false) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            const existingLabel = this.fieldData.field_label;
            // substitutue repeatablePos and [*]
            let i = this.commonUtil.extractLastValue(this.fieldData.html_id, "-");
            let key = this.fieldData.field_label;
            if (key.includes('%repeatablePos%')) {
                key = key.replace('%repeatablePos%', (Number(i) + 1));
            }
            let unique_id = this.fieldData.html_id;
            key = this.commonUtil.findIndicesAndSubstituteStars(key, unique_id, "-");
            this.fieldData.field_label = key;
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data, useSecondaryApiKey);
            if (this.fieldData.field_label != null && this.fieldData.field_label !== existingLabel) {
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
            if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
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
        if (changes.rowData && changes.rowData.currentValue &&
            this.fieldLabels[0] !== changes.rowData.currentValue.value) {
            if (this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
                for (const val of this.fieldData.possible_values) {
                    if (this.commonUtil.getPossibleId(val) == changes.rowData.currentValue.value) {
                        this.fieldLabels.push(this.commonUtil.getPossibleValue(val));
                    }
                }
            }
            else {
                this.fieldLabels = [changes.rowData.currentValue.value];
            }
        }
    }
    onButtonClick(node) {
    }
    isMainParent(node) {
        return this.dataSource.data.some(parent => parent.name === node.name);
    }
    shouldShowEditButton(node) {
        const additionalParameters = this.fieldData.additional_parameters || [];
        const editOnFieldLevelParam = additionalParameters.find(param => param.parameter_type === "CEE_EditOnFieldLevel");
        let editOnFieldLevel = editOnFieldLevelParam ? editOnFieldLevelParam.value : "0";
        if (node.type === 'main_parent') {
            return false;
        }
        if (editOnFieldLevel === "1") {
            return node.type === 'child';
        }
        else {
            return node.type === 'parent';
        }
    }
    isFieldLavel(node) {
        const additionalParameters = this.fieldData.additional_parameters || [];
        const editOnFieldLevelParam = additionalParameters.find(param => param.parameter_type === "CEE_EditOnFieldLevel");
        let editOnFieldLevel = editOnFieldLevelParam ? editOnFieldLevelParam.value : "0"; // Default to 0 if not found
        if (editOnFieldLevel === "1") {
            return true;
        }
        else {
            return false;
        }
    }
    getFirstPathSegment(url) {
        const pathSegments = url.split('/').filter(segment => segment !== "");
        return pathSegments.length > 0 ? pathSegments[0] : "";
    }
    onEditClick(node) {
        let stepData = this.wfeStepLoaderService.stepData;
        let stepNameCurrent = stepData.step_name.replace(/\s+/g, '-').toLowerCase();
        var extractedPath;
        const apiKey = node.api_key;
        let customNode = JSON.parse(JSON.stringify(node));
        const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key) ? this.responseResult.find(entry => entry.response_value === node.api_key) : this.responseResult.find(entry => entry.response_value === node.blockName);
        const hasUniqueId = mappingEntry && !!mappingEntry.unique_id;
        const hasUniquestepId = mappingEntry && !!mappingEntry.step_name;
        customNode.blockName = hasUniqueId ? mappingEntry.unique_id : null;
        if (customNode.stepName == "") {
            customNode.stepName = hasUniquestepId ? mappingEntry.step_name : null;
        }
        if (apiKey) {
            localStorage.setItem('selectedApiKey', apiKey);
        }
        let stepName = customNode.stepName.replace(/_/g, "-");
        if (stepName == this.getFirstPathSegment(this.router.url)) {
            let stepReact = stepName == "deal-information" ? true : false;
            if (stepReact) {
                let customEvent = {
                    type: "error_actions",
                    data: customNode
                };
                this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            }
            else {
                this.scrollToView(customNode, stepReact);
            }
        }
        else {
            localStorage.setItem('borrowerIdMap', JSON.stringify(Object.fromEntries(this.borrowerIdMap)));
            localStorage.setItem('keyValueMap', JSON.stringify(Object.fromEntries(this.keyValueMap)));
            localStorage.setItem('isScroll', "true");
            const isFieldLevel = this.isFieldLavel(customNode);
            localStorage.setItem('isFieldLevel', '' + isFieldLevel);
            setTimeout(() => {
                if (this.route && this.route.snapshot && this.route.snapshot['_routerState']) {
                    const fullPath = this.route.snapshot['_routerState'].url || '';
                    // const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key) ? this.responseResult.find(entry => entry.response_value === node.api_key) : this.responseResult.find(entry => entry.response_value === node.blockName);
                    // const hasUniqueId = mappingEntry && !!mappingEntry.unique_id;
                    // const hasUniquestepId = mappingEntry && !!mappingEntry.step_name;
                    // // const stepName = hasUniquestepId ? mappingEntry.step_name : '';
                    // let customNode: ITreeNode = JSON.parse(JSON.stringify(node));
                    // // node.blockName = hasUniqueId ? mappingEntry.unique_id : null;
                    // customNode.blockName = hasUniqueId ? mappingEntry.unique_id : null;
                    // customNode.stepName = hasUniquestepId ? mappingEntry.step_name : null;
                    let customEvent = {
                        type: "error_actions",
                        data: customNode
                    };
                    localStorage.setItem('lender-data', JSON.stringify(customNode));
                    this.sharedEventsService.emitToreactEmitter.emit(customEvent);
                    if (fullPath) {
                        extractedPath = fullPath.replace(`/${stepNameCurrent}/`, `/${customNode.stepName}/`);
                    }
                }
                const newUrl = extractedPath;
                // const newUrl = `/${stepName}/${extractedPath}`;
                this.eventListHandler.redirectToHref(newUrl, null, "_self");
            }, 100);
        }
    }
    scrollWithRetryParent(elementId, borrowerIndex, retries = 30, delay = 3000) {
        if (!elementId)
            return;
        const fullId = `${elementId}$${borrowerIndex}`;
        const allElements = document.querySelectorAll('[id]');
        let target = null;
        allElements.forEach(el => {
            if (el.id.includes(fullId)) {
                target = el;
            }
        });
        if (target) {
            this.scrollToSection(target.id);
        }
        else if (retries > 0) {
            setTimeout(() => this.scrollWithRetryParent(elementId, borrowerIndex, retries - 1, delay), delay);
        }
        else {
            console.error(`Element containing "${fullId}" not found after multiple retries.`);
        }
    }
    scrollWithRetry(elementId, retries = 30, delay = 3000) {
        if (!elementId)
            return;
        const target = document.getElementById(elementId);
        if (target) {
            this.scrollToSection(elementId);
        }
        else if (retries > 0) {
            console.warn(`⏳ Waiting for element "${elementId}" to appear. Retries left: ${retries}`);
            setTimeout(() => this.scrollWithRetry(elementId, retries - 1, delay), delay);
        }
    }
    scrollToReactSection(blockName) {
        if (!blockName)
            return;
        const targetElement = document.querySelector("." + blockName);
        ;
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
    }
    scrollToView(customNode, isReact = false) {
        let finalScrollTarget = null;
        let mainParentName = customNode.borrower_id || "";
        let borrowerIndex = null;
        const isFieldLevel = this.isFieldLavel(customNode);
        const hasBorrowerId = !!customNode.borrower_id;
        if (isReact) {
            // let customNode: ITreeNode = JSON.parse(JSON.stringify(node));
            // if (!hasBorrowerId && isFieldLevel) {
            //     // const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key) ? this.responseResult.find(entry => entry.response_value === node.api_key):this.responseResult.find(entry => entry.response_value === node.blockName);
            //     // const hasUniqueId = mappingEntry && !!mappingEntry.unique_id;
            //     // customNode.blockName = hasUniqueId ? mappingEntry.unique_id : null;
            //     let customEvent = {
            //         type : "error_actions",
            //         data : customNode
            //     }
            //     // this.scrollToReactSection(customNode.blockName);
            //     this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            // } else if (hasBorrowerId && isFieldLevel) {
            //     const mappingEntry = this.responseResult.find(entry => entry.response_value === node.api_key) ? this.responseResult.find(entry => entry.response_value === node.api_key) : this.responseResult.find(entry => entry.response_value === node.blockName);
            //     const hasUniqueId = mappingEntry && !!mappingEntry.unique_id;
            //     customNode.blockName = hasUniqueId ? `${mappingEntry.unique_id}-${mainParentName}` : null;
            //     let customEvent = {
            //         type : "error_actions",
            //         data : customNode
            //     }
            //     this.scrollToReactSection(customNode.blockName);
            //     this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            // } else {
            //     if (mainParentName) {
            //         if (this.keyValueMap.has(customNode.blockName)) {
            //             let mappedValue = this.keyValueMap.get(customNode.blockName);
            //             finalScrollTarget = `${mappedValue}-${mainParentName}`;
            //             if (finalScrollTarget) {
            //                 customNode.blockName = mappedValue;
            //                 let customEvent = {
            //                     type : "error_actions",
            //                     data : customNode
            //                 }
            //                 this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            //                 this.scrollToReactSection(finalScrollTarget);
            //                 return;
            //             }
            //         }
            //     }
            //     if (!finalScrollTarget) {
            //         if (customNode.blockName && this.keyValueMap.has(customNode.blockName)) {
            //             finalScrollTarget = this.keyValueMap.get(customNode.blockName);
            //             if (finalScrollTarget) {
            //                 customNode.blockName = finalScrollTarget;
            //                 let customEvent = {
            //                     type : "error_actions",
            //                     data : customNode
            //                 }
            //                 this.sharedEventsService.emitToreactEmitter.emit(customEvent);
            //                 this.scrollToReactSection(finalScrollTarget);
            //                 return;
            //             }
            //         }
            //     }
            // }
        }
        else {
            if (!hasBorrowerId && isFieldLevel) {
                const mappingEntry = this.responseResult.find(entry => entry.response_value === customNode.api_key);
                const hasParentId = mappingEntry && !!mappingEntry.parent_id;
                if (hasParentId) {
                    this.wfeStepLoaderService.loadBlockByName(mappingEntry.parent_id).subscribe((parentBlockData) => {
                        const targetField = parentBlockData?.block_fields?.find((field) => field.unique_id === mappingEntry.unique_id);
                        if (targetField) {
                            const defaultParam = targetField.additional_parameters?.find(param => param.parameter_type === 'default_value');
                            const defaultValue = defaultParam?.value;
                            if (defaultValue) {
                                borrowerIndex = this.borrowerIdMap.get(mainParentName);
                                this.accordionService.openMultipleSectionsWithParent(mappingEntry.unique_id, mappingEntry.parent_id, defaultValue, borrowerIndex);
                                this.loadBlockAndScrollToField(defaultValue, customNode.api_key, true, borrowerIndex);
                            }
                        }
                    });
                    return;
                }
                else {
                    const sectionsToOpen = [mappingEntry.unique_id]; // Dynamically use parent_id
                    this.accordionService.openMultipleSections(sectionsToOpen);
                    this.loadBlockAndScrollToField(mappingEntry.unique_id, customNode.api_key, false, 0);
                    return;
                }
            }
            else if (hasBorrowerId && isFieldLevel) {
                const mappingEntry = this.responseResult.find(entry => entry.response_value === customNode.api_key);
                const hasParentId = mappingEntry && !!mappingEntry.parent_id;
                if (hasParentId) {
                    this.wfeStepLoaderService.loadBlockByName(mappingEntry.parent_id).subscribe((parentBlockData) => {
                        const targetField = parentBlockData?.block_fields?.find((field) => field.unique_id === mappingEntry.unique_id);
                        if (targetField) {
                            const defaultParam = targetField.additional_parameters?.find(param => param.parameter_type === 'default_value');
                            const defaultValue = defaultParam?.value;
                            if (defaultValue) {
                                borrowerIndex = this.borrowerIdMap.get(mainParentName);
                                this.accordionService.openMultipleSectionsWithParent(mappingEntry.unique_id, mappingEntry.parent_id, defaultValue, borrowerIndex);
                                this.loadBlockAndScrollToField(defaultValue, customNode.api_key, true, borrowerIndex);
                            }
                        }
                    });
                    return;
                }
            }
            else {
                if (mainParentName && this.borrowerIdMap.has(mainParentName)) {
                    borrowerIndex = this.borrowerIdMap.get(mainParentName);
                    if (this.keyValueMap.has(customNode.blockName)) {
                        let mappedValue = this.keyValueMap.get(customNode.blockName);
                        finalScrollTarget = `${mappedValue}-${borrowerIndex}`;
                    }
                    if (finalScrollTarget) {
                        this.scrollToSection(finalScrollTarget);
                        return;
                    }
                }
                if (!finalScrollTarget) {
                    if (customNode.blockName && this.keyValueMap.has(customNode.blockName)) {
                        finalScrollTarget = this.keyValueMap.get(customNode.blockName);
                        if (finalScrollTarget) {
                            this.scrollToSection(finalScrollTarget);
                            return;
                        }
                    }
                }
            }
        }
    }
    loadBlockAndScrollToField(uniqueId, apiKey, isFieldLevelWithParent, borrowerIndex) {
        this.wfeStepLoaderService.loadBlockByName(uniqueId).subscribe((blockData) => {
            let loadedBlock = blockData;
            const targetField = loadedBlock?.block_fields?.find(field => field.api_key === apiKey);
            if (targetField) {
                const scrollTargetId = targetField.unique_id;
                if (isFieldLevelWithParent) {
                    this.scrollWithRetryParent(scrollTargetId, borrowerIndex);
                }
                else {
                    this.scrollWithRetry(scrollTargetId);
                }
            }
        }, (error) => {
        });
    }
    getMainParentName(node) {
        let parentNode = node;
        while (parentNode && parentNode.type !== 'main_parent') {
            parentNode = this.findParentNode(parentNode);
        }
        return parentNode ? parentNode.name : null;
    }
    findParentNode(node) {
        return this.treeControl.dataNodes.find(parent => parent.children && parent.children.includes(node)) || null;
    }
    expandAllNodes() {
        this.treeControl.dataNodes?.forEach(node => {
            this.treeControl.expand(node);
        });
    }
    collapseAllNodes() {
        this.treeControl.dataNodes?.forEach(node => {
            this.treeControl.collapse(node);
        });
    }
    onKeydown(event) {
        if (!this.treeControl)
            return;
        const focusedNode = document.activeElement?.closest('.mat-tree-node');
        if (!focusedNode)
            return;
        // Find the corresponding node from the tree data
        const node = this.treeControl.dataNodes.find(n => focusedNode.textContent?.includes(n.name));
        if (!node)
            return;
        if (event.key === 'ArrowRight') {
            this.expandAllChildren(node);
        }
        else if (event.key === 'ArrowLeft') {
            this.collapseAllChildren(node);
        }
    }
    onNodeClick(node, event) {
        if (!this.hasChild(0, node))
            return;
        if (event) {
            event.stopPropagation();
        }
        if (this.treeControl.isExpanded(node)) {
            this.collapseAllChildren(node);
        }
        else {
            this.expandAllChildren(node);
        }
        this.cdRef.detectChanges();
    }
    collapseAllChildren(node) {
        this.treeControl.collapse(node); // Collapse the parent first
        if (node.children) {
            node.children.forEach(child => {
                this.treeControl.collapse(child); // Collapse each child
                this.collapseAllChildren(child); // Recursively collapse all children
            });
        }
        this.cdRef.detectChanges();
    }
    expandAllChildren(node) {
        this.treeControl.expand(node);
        if (node.children) {
            node.children.forEach(child => {
                this.treeControl.expand(child); // Expand each child
                this.expandAllChildren(child); // Recursively expand all children
            });
        }
        this.cdRef.detectChanges();
    }
    scrollToSections(item, i) {
        if (item.attchedmenuClass) {
            const menuElement = document.querySelector("." + item.attchedmenuClass);
            if (menuElement) {
                const errorField = this.renderer.selectRootElement("." + item.attchedmenuClass, true);
                if (errorField) {
                    errorField.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                }
            }
            else {
                let attachtoStepParts = item.attachtoStep.split('#');
                if (attachtoStepParts.length > 1) {
                    let part = attachtoStepParts[1];
                    if (part && part.indexOf('{{i}}') !== -1) {
                        part = part.replace('{{i}}', i - 1);
                        const errorField = this.renderer.selectRootElement("." + part, true);
                        if (errorField) {
                            errorField.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
                        }
                    }
                }
            }
        }
    }
    scrollToSection(blockName) {
        if (!blockName)
            return;
        const targetElement = document.getElementById(blockName);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' });
        }
    }
    ensureElementVisible(element) {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
        if (!isVisible) {
            setTimeout(() => this.ensureElementVisible(element), 200);
        }
        else {
            if (element instanceof HTMLInputElement && !element.disabled) {
                element.focus();
            }
            this.selectView(element);
        }
    }
    selectView(element) {
        if (element instanceof HTMLInputElement && !element.disabled) {
            element.focus();
        }
        element.classList.add("highlighted");
        this.cdRef.detectChanges();
        setTimeout(() => {
            element.classList.remove("highlighted");
            this.cdRef.detectChanges();
        }, 2000);
    }
    getApiKeyValuePair(apiDatas) {
        let mainObject = {};
        if (apiDatas && apiDatas.value) {
            Object.keys(apiDatas.value).forEach(key => {
                if (key === "handler_name")
                    return;
                // Split the key by ##
                const keyParts = key.split('##');
                if (keyParts.length < 2)
                    return;
                // Extract root object and nested path
                const rootKey = keyParts[0];
                let nestedPath = keyParts[1];
                nestedPath = nestedPath.replace(/^response\./, '');
                const pathParts = nestedPath.split('.');
                let currentObj = mainObject;
                for (let i = 0; i < pathParts.length; i++) {
                    let part = pathParts[i];
                    const arrayMatch = part.match(/(\w+)\[(\d+)\]/);
                    if (arrayMatch) {
                        const arrayKey = arrayMatch[1];
                        const arrayIndex = parseInt(arrayMatch[2]);
                        if (!currentObj[arrayKey]) {
                            currentObj[arrayKey] = [];
                        }
                        if (!currentObj[arrayKey][arrayIndex]) {
                            currentObj[arrayKey][arrayIndex] = {};
                        }
                        currentObj = currentObj[arrayKey][arrayIndex];
                    }
                    else {
                        if (!currentObj[part]) {
                            currentObj[part] = (i === pathParts.length - 1) ? apiDatas.value[key] : {};
                        }
                        currentObj = currentObj[part];
                    }
                }
            });
        }
        return mainObject;
    }
    getFieldUniqueIdByApiKey(blockName, apiKey) {
        this.wfeStepLoaderService.loadBlockByName(blockName).subscribe((blockData) => {
            //console.log("Loaded Block Data: ", blockData);
            let loadedBlockData = blockData;
            // Search for the field with the matching api_key
            const field = loadedBlockData?.block_fields?.find((field) => field.api_key === apiKey);
        });
    }
    static ɵfac = function CeeApiValidationComponent_Factory(t) { return new (t || CeeApiValidationComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.AccordionService), i0.ɵɵdirectiveInject(i9.MatDialog), i0.ɵɵdirectiveInject(i10.MatSnackBar), i0.ɵɵdirectiveInject(i11.HttpClient), i0.ɵɵdirectiveInject(i12.CeeApiService), i0.ɵɵdirectiveInject(i13.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.Renderer2), i0.ɵɵdirectiveInject(i14.WFEEventListHandler), i0.ɵɵdirectiveInject(i13.ActivatedRoute)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeApiValidationComponent, selectors: [["app-cee-api-validation"]], hostBindings: function CeeApiValidationComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("keydown", function CeeApiValidationComponent_keydown_HostBindingHandler($event) { return ctx.onKeydown($event); });
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "example-tree", 3, "dataSource", "treeControl"], ["class", "tree-leaf-node", 4, "matTreeNodeDef"], ["class", "tree-parent-node", 4, "matTreeNodeDef", "matTreeNodeDefWhen"], [1, "tree-leaf-node"], [1, "mat-tree-node", "leaf-node"], ["mat-icon-button", "", "disabled", "", 1, "leaf-icon-button"], ["class", "error-indicator error-indicator-leaf", 3, "ngClass", 4, "ngIf"], [1, "leaf-text"], ["class", "api-validation-label api-label-error", 4, "ngIf"], ["class", "api-validation-label api-label-warning", 4, "ngIf"], ["mat-icon-button", "", "class", "edit-button-leaf", 3, "click", 4, "ngIf"], [1, "error-indicator", "error-indicator-leaf", 3, "ngClass"], [1, "api-validation-label", "api-label-error"], [1, "api-validation-label", "api-label-warning"], ["mat-icon-button", "", 1, "edit-button-leaf", 3, "click"], [1, "tree-parent-node"], [1, "parent-node"], [1, "mat-tree-node", "parent-content", 3, "click"], [1, "parent-text"], ["mat-icon-button", "", "class", "edit-button-parent", 3, "click", 4, "ngIf"], [1, "parent-children"], ["matTreeNodeOutlet", ""], ["mat-icon-button", "", 1, "edit-button-parent", 3, "click"]], template: function CeeApiValidationComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeApiValidationComponent_div_0_Template, 4, 3, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, CommonModule, i15.NgClass, i15.NgIf, TooltipModule, MatMenuModule, MatTreeModule, i16.MatNestedTreeNode, i16.MatTreeNodeDef, i16.MatTree, i16.MatTreeNode, i16.MatTreeNodeOutlet, MatButtonModule, i17.MatIconButton, MatIconModule, i18.MatIcon], styles: [".leaf-node[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px}.error-indicator-leaf[_ngcontent-%COMP%]{width:12px;height:12px;border-radius:50%;margin-right:8px}.leaf-text[_ngcontent-%COMP%]{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin-right:5px}.edit-button-leaf[_ngcontent-%COMP%]{margin-left:5px}.parent-node[_ngcontent-%COMP%]{list-style:none}.parent-content[_ngcontent-%COMP%]{display:flex;align-items:center;padding:5px;cursor:pointer}.parent-text[_ngcontent-%COMP%]{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:5px}.edit-button-parent[_ngcontent-%COMP%]{margin-left:5px}.parent-children[_ngcontent-%COMP%]{margin-left:20px}.error-indicator[_ngcontent-%COMP%]{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:8px}.error-circle[_ngcontent-%COMP%]{background-color:red}.warning-circle[_ngcontent-%COMP%]{background-color:orange}.api-validation-error-text[_ngcontent-%COMP%]{color:red;font-weight:700}.api-validation-warning-text[_ngcontent-%COMP%]{color:orange;font-weight:700}.api-validation-label[_ngcontent-%COMP%]{display:inline-block;padding:2px 6px;font-size:11px;font-weight:600;border-radius:4px;margin-left:6px;text-transform:uppercase}.api-label-error[_ngcontent-%COMP%]{background-color:#f8d7da;color:#721c24}.api-label-warning[_ngcontent-%COMP%]{background-color:#fff3cd;color:#856404}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeApiValidationComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-api-validation', standalone: true, imports: [MatTooltipModule, CommonModule, TooltipModule, MatMenuModule, HighlightPipe, MatTreeModule, MatButtonModule, MatIconModule], template: "<div *ngIf=\"isVisible\">\r\n<mat-tree [dataSource]=\"dataSource\" [treeControl]=\"treeControl\" class=\"example-tree\">\r\n    <!-- Leaf node template (No children) -->\r\n    <mat-tree-node *matTreeNodeDef=\"let node\" class=\"tree-leaf-node\">\r\n        <li class=\"mat-tree-node leaf-node\">\r\n            <button mat-icon-button disabled class=\"leaf-icon-button\"></button>\r\n\r\n            <!-- Show solid circle before child nodes -->\r\n            <span *ngIf=\"node.type === 'child'\" \r\n                  class=\"error-indicator error-indicator-leaf\" \r\n                  [ngClass]=\"{'error-circle': node.errorType === 'error', 'warning-circle': node.errorType === 'warning'}\">\r\n            </span>\r\n\r\n            <span class=\"leaf-text\">\r\n                {{ node.name }}\r\n                <span *ngIf=\"node.errorType === 'error'\" class=\"api-validation-label api-label-error\">(error)</span>\r\n                <span *ngIf=\"node.errorType === 'warning'\" class=\"api-validation-label api-label-warning\">(warning)</span>\r\n              </span>\r\n            <button *ngIf=\"shouldShowEditButton(node)\" mat-icon-button (click)=\"onEditClick(node)\" class=\"edit-button-leaf\">\r\n                <mat-icon>edit</mat-icon>\r\n            </button>\r\n        </li>\r\n    </mat-tree-node>\r\n\r\n    <!-- Expandable node template (Parent with children) -->\r\n    <mat-nested-tree-node *matTreeNodeDef=\"let node; when: hasChild\" class=\"tree-parent-node\">\r\n        <li class=\"parent-node\">\r\n            <div class=\"mat-tree-node parent-content\" (click)=\"onNodeClick(node, $event)\">\r\n                <!-- Removed the arrow button -->\r\n                <span class=\"parent-text\">{{ node.name }}</span>\r\n                <button *ngIf=\"shouldShowEditButton(node)\" mat-icon-button (click)=\"onEditClick(node)\" class=\"edit-button-parent\">\r\n                    <mat-icon>edit</mat-icon>\r\n                </button>\r\n            </div>\r\n            <ul [class.example-tree-invisible]=\"!treeControl.isExpanded(node)\" class=\"parent-children\">\r\n                <ng-container matTreeNodeOutlet></ng-container>\r\n            </ul>\r\n        </li>\r\n    </mat-nested-tree-node>\r\n</mat-tree>\r\n</div>", styles: [".leaf-node{display:flex;align-items:center;padding:5px}.error-indicator-leaf{width:12px;height:12px;border-radius:50%;margin-right:8px}.leaf-text{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:200px;margin-right:5px}.edit-button-leaf{margin-left:5px}.parent-node{list-style:none}.parent-content{display:flex;align-items:center;padding:5px;cursor:pointer}.parent-text{font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;margin-right:5px}.edit-button-parent{margin-left:5px}.parent-children{margin-left:20px}.error-indicator{display:inline-block;width:12px;height:12px;border-radius:50%;margin-right:8px}.error-circle{background-color:red}.warning-circle{background-color:orange}.api-validation-error-text{color:red;font-weight:700}.api-validation-warning-text{color:orange;font-weight:700}.api-validation-label{display:inline-block;padding:2px 6px;font-size:11px;font-weight:600;border-radius:4px;margin-left:6px;text-transform:uppercase}.api-label-error{background-color:#f8d7da;color:#721c24}.api-label-warning{background-color:#fff3cd;color:#856404}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: i2.UserDataHandlerService }, { type: i3.SharedEventsServiceService }, { type: i4.CEEInternalEmitterService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.AccordionService }, { type: i9.MatDialog }, { type: i10.MatSnackBar }, { type: i11.HttpClient }, { type: i12.CeeApiService }, { type: i13.Router }, { type: i0.ChangeDetectorRef }, { type: i0.Renderer2 }, { type: i14.WFEEventListHandler }, { type: i13.ActivatedRoute }], { stepId: [{
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
        }], onKeydown: [{
            type: HostListener,
            args: ['keydown', ['$event']]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeApiValidationComponent, { className: "CeeApiValidationComponent", filePath: "lib\\field-components\\cee-api-validation\\cee-api-validation.component.ts", lineNumber: 99 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWFwaS12YWxpZGF0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9maWVsZC1jb21wb25lbnRzL2NlZS1hcGktdmFsaWRhdGlvbi9jZWUtYXBpLXZhbGlkYXRpb24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWFwaS12YWxpZGF0aW9uL2NlZS1hcGktdmFsaWRhdGlvbi5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFvQixLQUFLLEVBQWEsWUFBWSxFQUErQyxNQUFNLGVBQWUsQ0FBQztBQUN6SSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFVN0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTTFELE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDeEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUzRCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQztBQUN0RCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3QkFBd0IsQ0FBQztBQUNqRSxPQUFPLEVBQUUsYUFBYSxF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LG9DQUFlOzRCRGdHUCxnQkFBZ0IsRUFBRSxZQUFZLHlCQUFFLGFBQWEsRUFBRSxhQUFhLEVBQWlCLGFBQWEsa0dBQUUsZUFBZSxxQkFBRSxhQUFhOztpRkFFM0gseUJBQXlCO2NBUHJDLFNBQVM7MkJBQ0ksd0JBQXdCLGNBR3RCLElBQUksV0FDUCxDQUFDLGdCQUFnQixFQUFFLFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsZUFBZSxFQUFFLGFBQWEsQ0FBQzt3aEJBSXBILE1BQU07a0JBQXRCLEtBQUs7WUFDVyxTQUFTO2tCQUF6QixLQUFLO1lBQ0csZUFBZTtrQkFBdkIsS0FBSztZQUNHLFNBQVM7a0JBQWpCLEtBQUs7WUFDRyxPQUFPO2tCQUFmLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFzdUJOLFNBQVM7a0JBRFIsWUFBWTttQkFBQyxTQUFTLEVBQUUsQ0FBQyxRQUFRLENBQUM7O2tGQTl1QjFCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LFJlbmRlcmVyMiwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IEFwcERhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcGlEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcGktZGF0YS9hcGktZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRmxhdFVuZmxhdCB9IGZyb20gJy4uLy4uL3V0aWxzL2ZsYXQtdW5mbGF0LWpzb24nO1xyXG5pbXBvcnQgeyBEb21TYW5pdGl6ZXIsIFNhZmVSZXNvdXJjZVVybCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE1hdFRvb2x0aXBNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90b29sdGlwJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgVG9vbHRpcE1vZHVsZSB9IGZyb20gJy4uLy4uL2RpcmVjdGl2ZXMvdG9vbHRpcC90b29sdGlwLm1vZHVsZSc7XHJcbmltcG9ydCB7IE1hdE1lbnVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9tZW51JztcclxuaW1wb3J0IHsgSGlnaGxpZ2h0UGlwZSB9IGZyb20gJy4uLy4uL3BpcGVzL2hpZ2hsaWdodC5waXBlJztcclxuXHJcbmltcG9ydCB7IE5lc3RlZFRyZWVDb250cm9sIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3RyZWUnO1xyXG5pbXBvcnQgeyBNYXRUcmVlTmVzdGVkRGF0YVNvdXJjZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RyZWUnO1xyXG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XHJcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XHJcbmltcG9ydCB7IE1hdFRyZWVNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90cmVlJztcclxuaW1wb3J0IHsgV0ZFRXZlbnRMaXN0SGFuZGxlciB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1ldmVudC1saXN0LWhhbmRsZXItdXRpbCc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQWNjb3JkaW9uU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2FjY29yZGlhbi1zZXJ2aWNlcyc7XHJcbmltcG9ydCB7IEV4dGVybmFsUmVzcG9uc2UgfSBmcm9tICcuLi8uLi91dGlscy9leHRlcm5hbC1yZXF1ZXN0LXJlc3BvbnNlLnV0aWwnO1xyXG5cclxuXHJcblxyXG5pbnRlcmZhY2UgSVRyZWVOb2RlIHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGJvcnJvd2VyX2lkPzogc3RyaW5nOyAvLyDinIUgRW5zdXJlIGJvcnJvd2VyX2lkIGV4aXN0c1xyXG4gICAgbWFpbl9wYXJlbnRfbmFtZT86IHN0cmluZztcclxuICAgIGNoaWxkcmVuPzogSVRyZWVOb2RlW107XHJcbiAgICB0eXBlPzogJ21haW5fcGFyZW50JyB8ICdwYXJlbnQnIHwgJ2NoaWxkJztcclxuICAgIGVycm9yVHlwZT86ICdlcnJvcicgfCAnd2FybmluZyc7IFxyXG4gICAgYmxvY2tOYW1lPzogc3RyaW5nO1xyXG4gICAgc3RlcE5hbWU/OnN0cmluZztcclxuICAgIGFwaV9rZXk/OiBzdHJpbmc7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHRyYW5zZm9ybVJlc3BvbnNlVG9UcmVlKGRhdGE6IGFueSk6IElUcmVlTm9kZVtdIHtcclxuICAgIGlmICghZGF0YT8ucmVzdWx0Py5tYWluX3BhcmVudCkgcmV0dXJuIFtdO1xyXG5cclxuICAgIGNvbnN0IHRyZWVNYXAgPSBuZXcgTWFwPHN0cmluZywgSVRyZWVOb2RlPigpO1xyXG5cclxuICAgIGRhdGEucmVzdWx0Lm1haW5fcGFyZW50LmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkQ2hpbGRyZW46IElUcmVlTm9kZVtdID0gaXRlbS5maWVsZEluZm8/Lm1hcCgoZmllbGQ6IGFueSkgPT4gKHtcclxuICAgICAgICAgICAgbmFtZTogYCR7ZmllbGQuZXJyb3JNZXNzYWdlfWAsXHJcbiAgICAgICAgICAgIGJvcnJvd2VyX2lkOiBpdGVtLmJvcnJvd2VyX2lkLFxyXG4gICAgICAgICAgICBibG9ja05hbWU6IGZpZWxkLmJsb2NrX25hbWUsXHJcbiAgICAgICAgICAgIHN0ZXBOYW1lOiBmaWVsZC5zdGVwX25hbWUsXHJcbiAgICAgICAgICAgIGFwaV9rZXk6IGZpZWxkLmFwaV9rZXkgfHwgXCJcIixcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICB0eXBlOiAnY2hpbGQnLFxyXG4gICAgICAgICAgICBlcnJvclR5cGU6IGZpZWxkLnR5cGVcclxuICAgICAgICB9KSkgfHwgW107XHJcblxyXG4gICAgICAgIGlmIChpdGVtLmJvcnJvd2VyX2lkKSB7XHJcbiAgICAgICAgICAgIC8vIOKchSBTdG9yZSBib3Jyb3dlcl9pZCBhdCB0aGUgcGFyZW50IGxldmVsXHJcbiAgICAgICAgICAgIGlmICghdHJlZU1hcC5oYXMoaXRlbS5wYXJlbnQpKSB7XHJcbiAgICAgICAgICAgICAgICB0cmVlTWFwLnNldChpdGVtLnBhcmVudCwge1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IGl0ZW0ucGFyZW50LFxyXG4gICAgICAgICAgICAgICAgICAgIGJvcnJvd2VyX2lkOiBpdGVtLmJvcnJvd2VyX2lkLCAvLyDinIUgQXNzaWduIGJvcnJvd2VyX2lkXHJcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tOYW1lOiBmaWVsZENoaWxkcmVuLmxlbmd0aCA+IDAgPyBmaWVsZENoaWxkcmVuWzBdLmJsb2NrTmFtZSA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcE5hbWU6IGZpZWxkQ2hpbGRyZW4ubGVuZ3RoID4gMCA/IGZpZWxkQ2hpbGRyZW5bMF0uc3RlcE5hbWUgOiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBmaWVsZENoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdwYXJlbnQnXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRyZWVNYXAuc2V0KGl0ZW0ucGFyZW50LCB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBpdGVtLnBhcmVudCxcclxuICAgICAgICAgICAgICAgIGJvcnJvd2VyX2lkOiBcIlwiLCAvLyBFbnN1cmUgYm9ycm93ZXJfaWQgZXhpc3RzXHJcbiAgICAgICAgICAgICAgICBibG9ja05hbWU6IGZpZWxkQ2hpbGRyZW4ubGVuZ3RoID4gMCA/IGZpZWxkQ2hpbGRyZW5bMF0uYmxvY2tOYW1lIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIHN0ZXBOYW1lOiBmaWVsZENoaWxkcmVuLmxlbmd0aCA+IDAgPyBmaWVsZENoaWxkcmVuWzBdLnN0ZXBOYW1lIDogbnVsbCxcclxuICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBmaWVsZENoaWxkcmVuLFxyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3BhcmVudCdcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIEFycmF5LmZyb20odHJlZU1hcC52YWx1ZXMoKSk7XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLWFwaS12YWxpZGF0aW9uJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9jZWUtYXBpLXZhbGlkYXRpb24uY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLWFwaS12YWxpZGF0aW9uLmNvbXBvbmVudC5zY3NzJywgJy4uL2ZpZWxkLWNvbW1vbi5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW01hdFRvb2x0aXBNb2R1bGUsIENvbW1vbk1vZHVsZSwgVG9vbHRpcE1vZHVsZSwgTWF0TWVudU1vZHVsZSwgSGlnaGxpZ2h0UGlwZSwgTWF0VHJlZU1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQ2VlQXBpVmFsaWRhdGlvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwcmltYXJ5S2V5SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgaHRtbF9pZCA9ICcnO1xyXG4gICAgZmllbGRMYWJlbHMgPSBbXTtcclxuICAgIGxhYmVsRW1pdHRlcjogU3Vic2NyaXB0aW9uO1xyXG4gICAgX2lmcmFtZUxhYmVsOiBzdHJpbmc7XHJcbiAgICBpZnJhbWVMYWJlbDogU2FmZVJlc291cmNlVXJsO1xyXG4gICAgdG9vbHRpcFRleHQ6IGFueSA9IFwiXCI7XHJcbiAgICBleHBhbmRBbGw6IGFueSA9IHRydWU7XHJcblxyXG4gICAgc2hvd1RydW5jYXRlZExpc3Q6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHNob3dJdGVtQ291bnQ6IG51bWJlciA9IDE7XHJcbiAgICBzaG93SXRlbUtleXM6IGFueSA9IFsnaWQnLCAndmFsdWUnXTtcclxuICAgIHNob3dJdGVtQ2xpY2thYmxlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBzaG93SXRlbVJvdXRlOiBhbnkgPSAnJztcclxuICAgIHNob3dJdGVtUm91dGVOZXdUYWI6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGhpZ2hsaWdodDogc3RyaW5nO1xyXG5cclxuICAgIHRyZWVDb250cm9sID0gbmV3IE5lc3RlZFRyZWVDb250cm9sPElUcmVlTm9kZT4obm9kZSA9PiBub2RlLmNoaWxkcmVuKTtcclxuICAgIGRhdGFTb3VyY2UgPSBuZXcgTWF0VHJlZU5lc3RlZERhdGFTb3VyY2U8SVRyZWVOb2RlPigpO1xyXG4gICAga2V5VmFsdWVNYXA6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7XHJcbiAgICBib3Jyb3dlcklkTWFwOiBNYXA8c3RyaW5nLCBudW1iZXI+ID0gbmV3IE1hcCgpO1xyXG4gICAgcmVzcG9uc2VSZXN1bHQ6IGFueTtcclxuXHJcbiAgICBtYWluUGFyZW50QXJyYXk6IGFueVtdID0gW107XHJcblxyXG4gICAgcHJpdmF0ZSBmbGF0VW5mbGF0OiBGbGF0VW5mbGF0O1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYWNjb3JkaW9uU2VydmljZTogQWNjb3JkaW9uU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLFxyXG4gICAgICAgIHB1YmxpYyBldmVudExpc3RIYW5kbGVyOiBXRkVFdmVudExpc3RIYW5kbGVyLFxyXG4gICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgdXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UsIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLCBkaWFsb2csIHNuYWNrQmFyLCBodHRwLCBjZWVBcGlTZXJ2aWNlLCByb3V0ZXIpO1xyXG4gICAgICAgIHRoaXMuZmxhdFVuZmxhdCA9IG5ldyBGbGF0VW5mbGF0KGFwcERhdGFTZXJ2aWNlKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICB0aGlzLmh0dHAuZ2V0PGFueT4oJy4vYXNzZXRzL2pzb25zL2xlbmRlcl9tYXBwaW5nLmpzb24nKS5zdWJzY3JpYmUoe1xyXG4gICAgICAgICAgICBuZXh0OiAocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5yZXN1bHQgJiYgQXJyYXkuaXNBcnJheShyZXNwb25zZS5yZXN1bHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5rZXlWYWx1ZU1hcC5jbGVhcigpOyAvLyBDbGVhciBwcmV2aW91cyBkYXRhXHJcbiAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc3BvbnNlUmVzdWx0ID0gcmVzcG9uc2UucmVzdWx0O1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlLnJlc3VsdC5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IG9iai5yZXNwb25zZV92YWx1ZTsgLy8gRXh0cmFjdCByZXNwb25zZV92YWx1ZSBhcyBrZXlcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBvYmoudW5pcXVlX2lkOyAvLyBFeHRyYWN0IHVuaXF1ZV9pZCBhcyB2YWx1ZVxyXG4gICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMua2V5VmFsdWVNYXAuc2V0KGtleSwgdmFsdWUpOyAvLyBTdG9yZSBpbiBNYXBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBlcnJvcjogKGVycm9yKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgQVBJIGRhdGE6XCIsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gXHJcbiAgICAgICBcclxuIFxyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEsIHRoaXMuY2RSZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc0NoaWxkID0gKF86IG51bWJlciwgbm9kZTogSVRyZWVOb2RlKSA9PiAhIW5vZGUuY2hpbGRyZW4gJiYgbm9kZS5jaGlsZHJlbi5sZW5ndGggPiAwO1xyXG5cclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG4gICAgb25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpOyAvLyB1bnN1YnNjcmliZSB0aGUgZXZlbnQgb24gZGVzdHJveVxyXG4gICAgfVxyXG5cclxuICAgIG5nT25EZXN0cm95KCkge1xyXG4gICAgICAgIHRoaXMub25WaWV3VW5sb2FkKCk7XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZSgpOyAvLyB1bnN1YnNjcmliZSB0aGUgZXZlbnQgb24gZGVzdHJveVxyXG4gICAgfVxyXG5cclxuICAgIHVuc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmxhYmVsRW1pdHRlcikge1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsRW1pdHRlci51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcbiAgICBvblZpZXdEYXRhSW5pdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmh0bWxfaWQgPSB0aGlzLmZpZWxkRGF0YS5odG1sX2lkXHJcbiAgICAgICAgLy8gRU5EXHJcbiAgICAgICAgdGhpcy50b29sdGlwVGV4dCA9ICh0aGlzLmZpZWxkRGF0YSAmJiB0aGlzLmZpZWxkRGF0YS50b29sdGlwKSA/IHRoaXMuZmllbGREYXRhLnRvb2x0aXAudG9TdHJpbmcoKS5yZXBsYWNlKC8oPChbXj5dKyk+KS9pZywgJycpIDogXCJcIjtcclxuICAgICAgICB0aGlzLnRhYkluZGV4VmFsdWUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1RhYkluZGV4J107XHJcbiAgICAgICAgdGhpcy5maWVsZERhdGFbJ2ZpZWxkX2xhYmVsJ10gKz0gXCIgXCI7XHJcbiAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtdOyAvLyBUT0RPIDogQ2hlY2sgSW1wbGVtZW50YXRpb25cclxuICAgICAgICB0aGlzLmZpZWxkTGFiZWxzLnB1c2godGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwpO1xyXG4gICAgICAgIGNvbnN0IGFwaUtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaW5nbGVBcGlLZXknKSA9PT0gJ3RydWUnID8gdGhpcy5maWVsZERhdGEuYXBpX2tleSA6IHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXk7XHJcbiAgICAgICAgaWYgKGFwaUtleSB8fCAodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwgJiYgdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykpKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEuaGFzT3duUHJvcGVydHkoJ2RhdGEnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgdGhpcy5yb3dEYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzICYmIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsIG9mIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZUlkKHZhbCkgPT0gdGhpcy5yb3dEYXRhLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuY29tbW9uVXRpbC5nZXRQb3NzaWJsZVZhbHVlKHZhbCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YS52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhLnZhbHVlICYmIHRoaXMucm93RGF0YS52YWx1ZS5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMucHVzaCh0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHsgZmllbGRfbGFiZWw6IHRoaXMucm93RGF0YS52YWx1ZSB9KS5maWVsZF9sYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMucHVzaCh0aGlzLmdldERhdGFGb3JtYXR0ZWRWYWx1ZSh0aGlzLnJvd0RhdGEudmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBbdGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5oYXNPd25Qcm9wZXJ0eSgnYWRkaXRpb25hbF9wYXJhbWV0ZXJzX2NvbmZpZycpICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVyc19jb25maWcgJiYgIUFycmF5LmlzQXJyYXkodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzX2NvbmZpZykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW3RoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVyc19jb25maWddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuZmllbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZmllbGRWYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5maWVsZFZhbHVlID8gdGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUodGhpcy5maWVsZFZhbHVlKSA6IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMucHVzaCh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzZXQgZHluYW1pYyBsYWJlbCBvbiBsb2FkXHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljTGFiZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEVtaXR0ZXIgPSB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICBkYXRhW3Jlcy5hcGlLZXldID0gcmVzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljTGFiZWwoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmdldER5bmFtaWNJZnJhbWUoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbC5pbmNsdWRlcygnJXJlcGVhdGFibGVQb3MlJykpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZExhYmVsc1swXSA9IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLnJlcGxhY2UoJyVyZXBlYXRhYmxlUG9zJScsIHRoaXMucm93RGF0YS5wb3NpdGlvbiArIDEpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydpZnJhbWUnXSkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnaWZyYW1lJ10uaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaWZyYW1lTGFiZWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydpZnJhbWUnXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljSWZyYW1lKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NYXNrTnVtYmVyTGltaXQnXSkge1xyXG4gICAgICAgICAgICBsZXQgZm9ybWF0cyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX01hc2tOdW1iZXJMaW1pdCddLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgIGxldCBmaWVsZF9ib3ggPSB0aGlzLmNvbW1vblV0aWwuZ2V0TWFza2VkRGF0YSh0aGlzLmZpZWxkTGFiZWxzWzBdLCBmb3JtYXRzWzBdLCBmb3JtYXRzWzFdLCBmb3JtYXRzWzJdKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtmaWVsZF9ib3hdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25BcHBseUZpbHRlci5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhLmh0bWxfaWQuaW5jbHVkZXMoZGF0YS5zb3VyY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5oaWdobGlnaHQgPSBkYXRhLmhpZ2hsaWdodFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zaG93VHJ1bmNhdGVkTGlzdCA9ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9zaG93X2xpc3RfaXRlbXNfdHJhbmNhdGVkJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX3RyYW5jYXRlZCddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnKSA/IHRydWUgOiB0aGlzLnNob3dUcnVuY2F0ZWRMaXN0O1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1Db3VudCA9ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9zaG93X2xpc3RfaXRlbXNfbGltaXQnXSAmJiAhaXNOYU4odGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX2xpbWl0J10pKSA/IE51bWJlcih0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9zaG93X2xpc3RfaXRlbXNfbGltaXQnXSkgOiAxO1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1LZXlzID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX2tleSddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX2tleSddLnNwbGl0KCd8fCcpIDogdGhpcy5zaG93SXRlbUtleXM7XHJcbiAgICAgICAgdGhpcy5zaG93SXRlbUNsaWNrYWJsZSA9ICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9zaG93X2xpc3RfaXRlbXNfY2xpY2thYmxlJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX2NsaWNrYWJsZSddLnRvTG93ZXJDYXNlKCkgPT0gJ3RydWUnKSA/IHRydWUgOiB0aGlzLnNob3dJdGVtQ2xpY2thYmxlO1xyXG4gICAgICAgIHRoaXMuc2hvd0l0ZW1Sb3V0ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc19yb3V0ZSddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX3JvdXRlJ10gOiAnIyc7XHJcbiAgICAgICAgdGhpcy5zaG93SXRlbVJvdXRlTmV3VGFiID0gKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3Nob3dfbGlzdF9pdGVtc19yb3V0ZV9uZXdfdGFiJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfc2hvd19saXN0X2l0ZW1zX3JvdXRlX25ld190YWInXS50b0xvd2VyQ2FzZSgpID09ICd0cnVlJykgPyB0cnVlIDogdGhpcy5zaG93SXRlbVJvdXRlTmV3VGFiO1xyXG4gICAgfVxyXG5cclxuICAgIHByZXBhcmVMaW5rKHNlYXJjaFN0ciwgcmVwbGFjZVN0cikge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNob3dJdGVtUm91dGUucmVwbGFjZUFsbChzZWFyY2hTdHIsIHJlcGxhY2VTdHIpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIGdldER5bmFtaWNJZnJhbWUoZGF0YT8pIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydpZnJhbWUnXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2lmcmFtZSddLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlmcmFtZUxhYmVsID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh7IGZpZWxkX2xhYmVsOiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2lmcmFtZSddIH0sIGRhdGEpLmZpZWxkX2xhYmVsO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5faWZyYW1lTGFiZWwgIT09IGlmcmFtZUxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pZnJhbWVMYWJlbCA9IGlmcmFtZUxhYmVsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pZnJhbWVMYWJlbCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgX3RoaXMuaWZyYW1lTGFiZWwgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0UmVzb3VyY2VVcmwoaWZyYW1lTGFiZWwpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25BUElDYWxsYmFja0RhdGEoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgY29uc3QgYXBpS2V5ID0gdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleS5zcGxpdCgnfCcpWzBdO1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhMiA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcignZ2V0RGVhbEJvcnJvd2VycycpOy8vZ2V0RGVhbEJvcnJvd2Vyc1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGFwaUtleS5zcGxpdCgnIyMnKVswXSk7XHJcblxyXG4gICAgICAgIHRoaXMuYm9ycm93ZXJJZE1hcCA9IG5ldyBNYXA8c3RyaW5nLCBudW1iZXI+KCk7IC8vIFN0b3JlIGJvcnJvd2VyX2lkIC0+IGluZGV4XHJcbiAgICAgICAgaWYgKGhhbmRsZXJEYXRhMj8udmFsdWUpIHtcclxuICAgICAgICBPYmplY3Qua2V5cyhoYW5kbGVyRGF0YTIudmFsdWUpLmZvckVhY2goa2V5ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBrZXkubWF0Y2goL2dldERlYWxCb3Jyb3dlcnMjI2RhdGFcXFsoXFxkKylcXF1cXC5ib3Jyb3dlcl9pZC8pO1xyXG4gICAgICAgICAgICBpZiAobWF0Y2gpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gcGFyc2VJbnQobWF0Y2hbMV0pOyAvLyBFeHRyYWN0IGluZGV4XHJcbiAgICAgICAgICAgICAgICBjb25zdCBib3Jyb3dlcklkID0gaGFuZGxlckRhdGEyLnZhbHVlW2tleV07IC8vIEdldCBib3Jyb3dlcl9pZCB2YWx1ZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5ib3Jyb3dlcklkTWFwLnNldChib3Jyb3dlcklkLCBpbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgICAgIC8vIFRyYW5zZm9ybSB0aGUgQVBJIHJlc3BvbnNlIHVzaW5nIGdldEFwaUtleVZhbHVlUGFpcigpXHJcbiAgICAgICAgdmFyIGFwaUtleVZhbHVlID0gdGhpcy5nZXRBcGlLZXlWYWx1ZVBhaXIoaGFuZGxlckRhdGEpO1xyXG4gICAgICAgIHRoaXMuZGF0YVNvdXJjZS5kYXRhID0gdHJhbnNmb3JtUmVzcG9uc2VUb1RyZWUoYXBpS2V5VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IGV4cGFuZEFsbFBhcmFtID0gdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzPy5maW5kKHBhcmFtID0+IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIkNFRV9FeHBhbmRBbGxcIik7XHJcbiAgICAgICAgdGhpcy5leHBhbmRBbGwgPSBleHBhbmRBbGxQYXJhbSA/IGV4cGFuZEFsbFBhcmFtLnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyA6IGZhbHNlO1xyXG4gICAgXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzID0gdGhpcy5kYXRhU291cmNlLmRhdGE7XHJcbiAgICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kQWxsKCk7XHJcbiAgICBcclxuICAgICAgICAgICAgaWYgKHRoaXMuZXhwYW5kQWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmV4cGFuZEFsbE5vZGVzKCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbGxhcHNlQWxsTm9kZXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDEwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIG9uQVBJQ2FsbGJhY2soZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5vbkFQSUNhbGxiYWNrRGF0YShkYXRhKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5yb3dEYXRhPy5yZXNwb25zZV9hcGlfa2V5ICYmIHRoaXMucm93RGF0YT8ucmVzcG9uc2VfYXBpX2tleS5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgbGV0IHJlc0RhdGEgPSBkYXRhLmhhc093blByb3BlcnR5KHRoaXMucm93RGF0YS5yZXNwb25zZV9hcGlfa2V5WzFdKSA/IGRhdGFbdGhpcy5yb3dEYXRhLnJlc3BvbnNlX2FwaV9rZXlbMV1dIDogbnVsbDtcclxuICAgICAgICAgICAgcmVzRGF0YSA9IHRoaXMuZ2V0RGF0YUZvcm1hdHRlZFZhbHVlKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gdGhpcy5yZXR1cm5MYWJlbHNNYXBQb3NzaWJsZVZhbHVlcyhbcmVzRGF0YV0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIXRoaXMucm93RGF0YSkgeyAvLyBpZiByb3dEYXRhIGlzIG51bGxcclxuICAgICAgICAgICAgZGF0YSA9IHRoaXMuZmxhdFVuZmxhdC5jcmVhdGVOZXN0ZWRPYmplY3QoZGF0YSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0RHluYW1pY0xhYmVsKGRhdGEpO1xyXG4gICAgICAgICAgICBsZXQgcmVzRGF0YSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAocmVzRGF0YSAhPT0gbnVsbCAmJiByZXNEYXRhICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXNEYXRhKSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TVFJJTkdfRk9STUFUJ10pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNEYXRhID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5tYW5pcHVsYXRlU3RyaW5nKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1NUUklOR19GT1JNQVQnXSwgcmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXNEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSB0aGlzLnJldHVybkxhYmVsc01hcFBvc3NpYmxlVmFsdWVzKHJlc0RhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNEYXRhID0gdGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUocmVzRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IHRoaXMucmV0dXJuTGFiZWxzTWFwUG9zc2libGVWYWx1ZXMoW3Jlc0RhdGFdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljTGFiZWwoZGF0YSwgdHJ1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldERhdGFGb3JtYXR0ZWRWYWx1ZShkYXRhKSB7XHJcbiAgICAgICAgLy8gRm9yIERhdGEgRm9ybWF0XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGF0YSBGb3JtYXQnXSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZm9ybWF0cyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGF0YSBGb3JtYXQnXS5zcGxpdCgnfHwnKS5tYXAoc3RyID0+IHN0ciAmJiBzdHIudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRyYW5zZm9ybVR5cGUgPSBmb3JtYXRzWzBdID09IFwibWFza1wiID8gXCJtYXNrTGFiZWxcIiA6IGZvcm1hdHNbMF07XHJcbiAgICAgICAgICAgICAgICBmb3JtYXRzLnNoaWZ0KCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLnJldHVybkZvcm1hdHRlZFZhbHVlKGRhdGEsIHRyYW5zZm9ybVR5cGUsIGZvcm1hdHMpO1xyXG4gICAgICAgICAgICAgICAgLy8gc3dpdGNoIChmb3JtYXRzWzBdLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXNlICdjdXJyZW5jeSc6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBgJHtnZXRDdXJyZW5jeVN5bWJvbChmb3JtYXRzWzFdLnRyaW0oKSwgJ25hcnJvdycpfWAgK1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICAgICAgYCR7TnVtYmVyKGRhdGEpLnRvRml4ZWQoTnVtYmVyKGZvcm1hdHNbMl0udHJpbSgpKSkucmVwbGFjZSgvXFxkKD89KFxcZHszfSkrXFwuKS9nLCAnJCYsJyl9YDtcclxuICAgICAgICAgICAgICAgIC8vICAgICBjYXNlICd0aW1lJzpcclxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgcmV0dXJuIG1vbWVudChOdW1iZXIoZGF0YSkpLmZvcm1hdChmb3JtYXRzWzFdLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgY2FzZSAnZGF0ZSc6XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHJldHVybiBtb21lbnQoZGF0YSkuZm9ybWF0KGZvcm1hdHNbMV0udHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIC8vICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFNvbWV0aGluZyB3ZW50IHdyb25nIHdoaWxlIHRyYW5zZm9ybWluZyBkYXRhICEhITogJHtlcnJvcn1gKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBnZXREeW5hbWljTGFiZWwoZGF0YT8sIHVzZVNlY29uZGFyeUFwaUtleTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsICYmIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsLmluY2x1ZGVzKCcoKGR5bmFtaWMpKScpIHx8XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsX2NvbmZpZyAmJiB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbF9jb25maWcuaW5jbHVkZXMoJygoZHluYW1pYykpJykpIHtcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdMYWJlbCA9IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsO1xyXG5cclxuICAgICAgICAgICAgLy8gc3Vic3RpdHV0dWUgcmVwZWF0YWJsZVBvcyBhbmQgWypdXHJcbiAgICAgICAgICAgIGxldCBpID0gdGhpcy5jb21tb25VdGlsLmV4dHJhY3RMYXN0VmFsdWUodGhpcy5maWVsZERhdGEuaHRtbF9pZCwgXCItXCIpO1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWw7XHJcbiAgICAgICAgICAgIGlmIChrZXkuaW5jbHVkZXMoJyVyZXBlYXRhYmxlUG9zJScpKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkucmVwbGFjZSgnJXJlcGVhdGFibGVQb3MlJywgKE51bWJlcihpKSArIDEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdW5pcXVlX2lkID0gdGhpcy5maWVsZERhdGEuaHRtbF9pZDtcclxuICAgICAgICAgICAga2V5ID0gdGhpcy5jb21tb25VdGlsLmZpbmRJbmRpY2VzQW5kU3Vic3RpdHV0ZVN0YXJzKGtleSwgdW5pcXVlX2lkLCBcIi1cIik7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsID0ga2V5O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEgPSB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwuZ2V0RHluYW1pY1ZhbHVlKHRoaXMuZmllbGREYXRhLCBkYXRhLCB1c2VTZWNvbmRhcnlBcGlLZXkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwgIT0gbnVsbCAmJiB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCAhPT0gZXhpc3RpbmdMYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHJldHVybnMgYSBtYXAgd2l0aCBwb3NzaWJsZSB2YWx1ZSBpZCB0byB0aGUgdmFsdWVcclxuICAgICAqIEBwYXJhbSB2YWx1ZXMgYXBpIHJlc3BvbnNlIGRhdGFcclxuICAgICAqL1xyXG4gICAgcmV0dXJuTGFiZWxzTWFwUG9zc2libGVWYWx1ZXModmFsdWVzOiBBcnJheTxhbnk+KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSB2YWx1ZXM7XHJcbiAgICAgICAgZm9yIChjb25zdCB2YWwgb2YgdmFsdWVzKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgJiYgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGRhdGEgPSB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMubWFwKHB2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlSWQocHYpID09IHZhbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlVmFsdWUocHYpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG5cclxuICAgIG9uRW1wdHlTZXNzaW9uKGRhdGE6IGFueSkge1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGdldF9kYXRhOiBhbnkpIHtcclxuICAgICAgICBsZXQgZGF0YSA9IFtdO1xyXG4gICAgICAgIGxldCB1bmlxdWVfaWRfdmFsdWUgPSAnJztcclxuICAgICAgICBpZiAodHlwZW9mIGdldF9kYXRhID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICBPYmplY3Qua2V5cyhnZXRfZGF0YSkuZm9yRWFjaCgoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGF0YS5wdXNoKGtleSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChkYXRhLmluY2x1ZGVzKHVuaXF1ZV9pZF92YWx1ZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdXTtcclxuICAgICAgICAgICAgLy8gdGhpcy5pbnB1dFZhbHVlID0gZ2V0X2RhdGFbdW5pcXVlX2lkX3ZhbHVlXTtcclxuICAgICAgICAgICAgLy8gdGhpcy51cGRhdGVGaWVsZERhdGEodGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrSWZJZnJhbWUodmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnaWZyYW1lJykpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuc2FuaXRpemVyLmJ5cGFzc1NlY3VyaXR5VHJ1c3RIdG1sKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5nZXREYXRhRm9ybWF0dGVkVmFsdWUodmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGVTdGF0ZUhpc3RvcnkoZGF0YTogYW55KTogdm9pZCB7XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpOiB2b2lkIHtcclxuICAgICAgICBpZiAoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5lZGl0YWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc0VkaXRhYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLnZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc1Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc01hbmRhdG9yeScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5yb3dEYXRhICYmIGNoYW5nZXMucm93RGF0YS5jdXJyZW50VmFsdWUgJiZcclxuICAgICAgICAgICAgdGhpcy5maWVsZExhYmVsc1swXSAhPT0gY2hhbmdlcy5yb3dEYXRhLmN1cnJlbnRWYWx1ZS52YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzICYmIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5jb21tb25VdGlsLmdldFBvc3NpYmxlSWQodmFsKSA9PSBjaGFuZ2VzLnJvd0RhdGEuY3VycmVudFZhbHVlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRMYWJlbHMucHVzaCh0aGlzLmNvbW1vblV0aWwuZ2V0UG9zc2libGVWYWx1ZSh2YWwpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkTGFiZWxzID0gW2NoYW5nZXMucm93RGF0YS5jdXJyZW50VmFsdWUudmFsdWVdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uQnV0dG9uQ2xpY2sobm9kZTogSVRyZWVOb2RlKSB7XHJcbiAgICB9XHJcblxyXG4gICAgaXNNYWluUGFyZW50KG5vZGU6IElUcmVlTm9kZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFTb3VyY2UuZGF0YS5zb21lKHBhcmVudCA9PiBwYXJlbnQubmFtZSA9PT0gbm9kZS5uYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG91bGRTaG93RWRpdEJ1dHRvbihub2RlOiBJVHJlZU5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsUGFyYW1ldGVycyA9IHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyB8fCBbXTtcclxuICAgICAgICBjb25zdCBlZGl0T25GaWVsZExldmVsUGFyYW0gPSBhZGRpdGlvbmFsUGFyYW1ldGVycy5maW5kKHBhcmFtID0+IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIkNFRV9FZGl0T25GaWVsZExldmVsXCIpO1xyXG5cclxuICAgICAgICBsZXQgZWRpdE9uRmllbGRMZXZlbCA9IGVkaXRPbkZpZWxkTGV2ZWxQYXJhbSA/IGVkaXRPbkZpZWxkTGV2ZWxQYXJhbS52YWx1ZSA6IFwiMFwiO1xyXG4gICAgICAgIGlmIChub2RlLnR5cGUgPT09ICdtYWluX3BhcmVudCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGVkaXRPbkZpZWxkTGV2ZWwgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBub2RlLnR5cGUgPT09ICdjaGlsZCc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5vZGUudHlwZSA9PT0gJ3BhcmVudCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzRmllbGRMYXZlbChub2RlOiBJVHJlZU5vZGUpOiBib29sZWFuIHtcclxuICAgICAgICBjb25zdCBhZGRpdGlvbmFsUGFyYW1ldGVycyA9IHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyB8fCBbXTtcclxuICAgICAgICBjb25zdCBlZGl0T25GaWVsZExldmVsUGFyYW0gPSBhZGRpdGlvbmFsUGFyYW1ldGVycy5maW5kKHBhcmFtID0+IHBhcmFtLnBhcmFtZXRlcl90eXBlID09PSBcIkNFRV9FZGl0T25GaWVsZExldmVsXCIpO1xyXG4gICAgICAgIGxldCBlZGl0T25GaWVsZExldmVsID0gZWRpdE9uRmllbGRMZXZlbFBhcmFtID8gZWRpdE9uRmllbGRMZXZlbFBhcmFtLnZhbHVlIDogXCIwXCI7IC8vIERlZmF1bHQgdG8gMCBpZiBub3QgZm91bmRcclxuICAgXHJcbiAgICAgICAgaWYgKGVkaXRPbkZpZWxkTGV2ZWwgPT09IFwiMVwiKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgIGdldEZpcnN0UGF0aFNlZ21lbnQodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGNvbnN0IHBhdGhTZWdtZW50cyA9IHVybC5zcGxpdCgnLycpLmZpbHRlcihzZWdtZW50ID0+IHNlZ21lbnQgIT09IFwiXCIpO1xyXG4gICAgICAgIHJldHVybiBwYXRoU2VnbWVudHMubGVuZ3RoID4gMCA/IHBhdGhTZWdtZW50c1swXSA6IFwiXCI7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIG9uRWRpdENsaWNrKG5vZGU6IElUcmVlTm9kZSkge1xyXG4gICAgICAgICAgICBsZXQgc3RlcERhdGE6IGFueSA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2Uuc3RlcERhdGFcclxuICAgICAgICAgICAgbGV0IHN0ZXBOYW1lQ3VycmVudDogYW55ID0gc3RlcERhdGEuc3RlcF9uYW1lLnJlcGxhY2UoL1xccysvZywgJy0nKS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICB2YXIgZXh0cmFjdGVkUGF0aDogYW55O1xyXG4gICAgICAgICAgICBjb25zdCBhcGlLZXkgPSBub2RlLmFwaV9rZXk7XHJcbiAgICAgICAgICAgIGxldCBjdXN0b21Ob2RlOiBJVHJlZU5vZGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vZGUpKTtcclxuICAgICAgICAgICAgY29uc3QgbWFwcGluZ0VudHJ5ID0gdGhpcy5yZXNwb25zZVJlc3VsdC5maW5kKGVudHJ5ID0+IGVudHJ5LnJlc3BvbnNlX3ZhbHVlID09PSBub2RlLmFwaV9rZXkpID8gdGhpcy5yZXNwb25zZVJlc3VsdC5maW5kKGVudHJ5ID0+IGVudHJ5LnJlc3BvbnNlX3ZhbHVlID09PSBub2RlLmFwaV9rZXkpIDogdGhpcy5yZXNwb25zZVJlc3VsdC5maW5kKGVudHJ5ID0+IGVudHJ5LnJlc3BvbnNlX3ZhbHVlID09PSBub2RlLmJsb2NrTmFtZSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1VuaXF1ZUlkID0gbWFwcGluZ0VudHJ5ICYmICEhbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgY29uc3QgaGFzVW5pcXVlc3RlcElkID0gbWFwcGluZ0VudHJ5ICYmICEhbWFwcGluZ0VudHJ5LnN0ZXBfbmFtZTtcclxuICAgICAgICAgICAgY3VzdG9tTm9kZS5ibG9ja05hbWUgPSBoYXNVbmlxdWVJZCA/IG1hcHBpbmdFbnRyeS51bmlxdWVfaWQgOiBudWxsO1xyXG4gICAgICAgICAgICBpZihjdXN0b21Ob2RlLnN0ZXBOYW1lID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgY3VzdG9tTm9kZS5zdGVwTmFtZSA9IGhhc1VuaXF1ZXN0ZXBJZCA/IG1hcHBpbmdFbnRyeS5zdGVwX25hbWUgOiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChhcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzZWxlY3RlZEFwaUtleScsIGFwaUtleSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IHN0ZXBOYW1lID0gY3VzdG9tTm9kZS5zdGVwTmFtZS5yZXBsYWNlKC9fL2csIFwiLVwiKTtcclxuICAgICAgICAgICAgaWYoc3RlcE5hbWUgPT0gdGhpcy5nZXRGaXJzdFBhdGhTZWdtZW50KHRoaXMucm91dGVyLnVybCkpe1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0ZXBSZWFjdCA9IHN0ZXBOYW1lID09IFwiZGVhbC1pbmZvcm1hdGlvblwiID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0ZXBSZWFjdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tRXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImVycm9yX2FjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YSA6IGN1c3RvbU5vZGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdFRvcmVhY3RFbWl0dGVyLmVtaXQoY3VzdG9tRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFRvVmlldyhjdXN0b21Ob2RlLCBzdGVwUmVhY3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdib3Jyb3dlcklkTWFwJywgSlNPTi5zdHJpbmdpZnkoT2JqZWN0LmZyb21FbnRyaWVzKHRoaXMuYm9ycm93ZXJJZE1hcCkpKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdrZXlWYWx1ZU1hcCcsIEpTT04uc3RyaW5naWZ5KE9iamVjdC5mcm9tRW50cmllcyh0aGlzLmtleVZhbHVlTWFwKSkpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzU2Nyb2xsJywgXCJ0cnVlXCIpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaXNGaWVsZExldmVsID0gdGhpcy5pc0ZpZWxkTGF2ZWwoY3VzdG9tTm9kZSk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNGaWVsZExldmVsJywnJytpc0ZpZWxkTGV2ZWwpO1xyXG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucm91dGUgJiYgdGhpcy5yb3V0ZS5zbmFwc2hvdCAmJiB0aGlzLnJvdXRlLnNuYXBzaG90Wydfcm91dGVyU3RhdGUnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmdWxsUGF0aCA9IHRoaXMucm91dGUuc25hcHNob3RbJ19yb3V0ZXJTdGF0ZSddLnVybCB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgbWFwcGluZ0VudHJ5ID0gdGhpcy5yZXNwb25zZVJlc3VsdC5maW5kKGVudHJ5ID0+IGVudHJ5LnJlc3BvbnNlX3ZhbHVlID09PSBub2RlLmFwaV9rZXkpID8gdGhpcy5yZXNwb25zZVJlc3VsdC5maW5kKGVudHJ5ID0+IGVudHJ5LnJlc3BvbnNlX3ZhbHVlID09PSBub2RlLmFwaV9rZXkpIDogdGhpcy5yZXNwb25zZVJlc3VsdC5maW5kKGVudHJ5ID0+IGVudHJ5LnJlc3BvbnNlX3ZhbHVlID09PSBub2RlLmJsb2NrTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnN0IGhhc1VuaXF1ZUlkID0gbWFwcGluZ0VudHJ5ICYmICEhbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc3QgaGFzVW5pcXVlc3RlcElkID0gbWFwcGluZ0VudHJ5ICYmICEhbWFwcGluZ0VudHJ5LnN0ZXBfbmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gY29uc3Qgc3RlcE5hbWUgPSBoYXNVbmlxdWVzdGVwSWQgPyBtYXBwaW5nRW50cnkuc3RlcF9uYW1lIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxldCBjdXN0b21Ob2RlOiBJVHJlZU5vZGUgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG5vZGUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gLy8gbm9kZS5ibG9ja05hbWUgPSBoYXNVbmlxdWVJZCA/IG1hcHBpbmdFbnRyeS51bmlxdWVfaWQgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjdXN0b21Ob2RlLmJsb2NrTmFtZSA9IGhhc1VuaXF1ZUlkID8gbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZCA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGN1c3RvbU5vZGUuc3RlcE5hbWUgPSBoYXNVbmlxdWVzdGVwSWQgPyBtYXBwaW5nRW50cnkuc3RlcF9uYW1lIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbUV2ZW50OiBhbnkgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiZXJyb3JfYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiBjdXN0b21Ob2RlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xlbmRlci1kYXRhJywgSlNPTi5zdHJpbmdpZnkoY3VzdG9tTm9kZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdFRvcmVhY3RFbWl0dGVyLmVtaXQoY3VzdG9tRXZlbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZnVsbFBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dHJhY3RlZFBhdGggPSBmdWxsUGF0aC5yZXBsYWNlKGAvJHtzdGVwTmFtZUN1cnJlbnR9L2AsICBgLyR7Y3VzdG9tTm9kZS5zdGVwTmFtZX0vYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VXJsID0gZXh0cmFjdGVkUGF0aDtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zdCBuZXdVcmwgPSBgLyR7c3RlcE5hbWV9LyR7ZXh0cmFjdGVkUGF0aH1gO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5yZWRpcmVjdFRvSHJlZihuZXdVcmwsIG51bGwsIFwiX3NlbGZcIik7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsV2l0aFJldHJ5UGFyZW50KGVsZW1lbnRJZDogc3RyaW5nLCBib3Jyb3dlckluZGV4OiBudW1iZXIsIHJldHJpZXM6IG51bWJlciA9IDMwLCBkZWxheTogbnVtYmVyID0gMzAwMCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudElkKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCBmdWxsSWQgPSBgJHtlbGVtZW50SWR9JCR7Ym9ycm93ZXJJbmRleH1gO1xyXG4gICAgICAgIGNvbnN0IGFsbEVsZW1lbnRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbDxIVE1MRWxlbWVudD4oJ1tpZF0nKTtcclxuICAgIFxyXG4gICAgICAgIGxldCB0YXJnZXQ6IEhUTUxFbGVtZW50IHwgbnVsbCA9IG51bGw7XHJcbiAgICBcclxuICAgICAgICBhbGxFbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICAgICAgaWYgKGVsLmlkLmluY2x1ZGVzKGZ1bGxJZCkpIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IGVsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICBpZiAodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWN0aW9uKHRhcmdldC5pZCk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChyZXRyaWVzID4gMCkge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc2Nyb2xsV2l0aFJldHJ5UGFyZW50KGVsZW1lbnRJZCxib3Jyb3dlckluZGV4LCByZXRyaWVzIC0gMSwgZGVsYXkpLCBkZWxheSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihgRWxlbWVudCBjb250YWluaW5nIFwiJHtmdWxsSWR9XCIgbm90IGZvdW5kIGFmdGVyIG11bHRpcGxlIHJldHJpZXMuYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICBzY3JvbGxXaXRoUmV0cnkoZWxlbWVudElkOiBzdHJpbmcsIHJldHJpZXM6IG51bWJlciA9IDMwLCBkZWxheTogbnVtYmVyID0gMzAwMCkge1xyXG4gICAgICAgIGlmICghZWxlbWVudElkKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbGVtZW50SWQpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKHRhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRvU2VjdGlvbihlbGVtZW50SWQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAocmV0cmllcyA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGDij7MgV2FpdGluZyBmb3IgZWxlbWVudCBcIiR7ZWxlbWVudElkfVwiIHRvIGFwcGVhci4gUmV0cmllcyBsZWZ0OiAke3JldHJpZXN9YCk7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zY3JvbGxXaXRoUmV0cnkoZWxlbWVudElkLCByZXRyaWVzIC0gMSwgZGVsYXkpLCBkZWxheSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNjcm9sbFRvUmVhY3RTZWN0aW9uKGJsb2NrTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFibG9ja05hbWUpIHJldHVybjtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5cIiArIGJsb2NrTmFtZSk7O1xyXG4gICAgICAgIGlmICh0YXJnZXRFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRhcmdldEVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoeyBiZWhhdmlvcjogJ3Ntb290aCcsIGJsb2NrOiAnc3RhcnQnLCBpbmxpbmU6ICdzdGFydCcgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzY3JvbGxUb1ZpZXcoY3VzdG9tTm9kZTogYW55LCBpc1JlYWN0OiBib29sZWFuID0gZmFsc2UpIHtcclxuICAgICAgICBsZXQgZmluYWxTY3JvbGxUYXJnZXQ6IHN0cmluZyB8IG51bGwgPSBudWxsO1xyXG4gICAgICAgIGxldCBtYWluUGFyZW50TmFtZSA9IGN1c3RvbU5vZGUuYm9ycm93ZXJfaWQgfHwgXCJcIjtcclxuICAgICAgICBsZXQgYm9ycm93ZXJJbmRleDogbnVtYmVyIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgaXNGaWVsZExldmVsID0gdGhpcy5pc0ZpZWxkTGF2ZWwoY3VzdG9tTm9kZSk7XHJcbiAgICAgICAgY29uc3QgaGFzQm9ycm93ZXJJZCA9ICEhY3VzdG9tTm9kZS5ib3Jyb3dlcl9pZDtcclxuICAgICAgICBpZihpc1JlYWN0KXtcclxuICAgICAgICAgICAgLy8gbGV0IGN1c3RvbU5vZGU6IElUcmVlTm9kZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobm9kZSkpO1xyXG4gICAgICAgICAgICAvLyBpZiAoIWhhc0JvcnJvd2VySWQgJiYgaXNGaWVsZExldmVsKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBjb25zdCBtYXBwaW5nRW50cnkgPSB0aGlzLnJlc3BvbnNlUmVzdWx0LmZpbmQoZW50cnkgPT4gZW50cnkucmVzcG9uc2VfdmFsdWUgPT09IG5vZGUuYXBpX2tleSkgPyB0aGlzLnJlc3BvbnNlUmVzdWx0LmZpbmQoZW50cnkgPT4gZW50cnkucmVzcG9uc2VfdmFsdWUgPT09IG5vZGUuYXBpX2tleSk6dGhpcy5yZXNwb25zZVJlc3VsdC5maW5kKGVudHJ5ID0+IGVudHJ5LnJlc3BvbnNlX3ZhbHVlID09PSBub2RlLmJsb2NrTmFtZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBjb25zdCBoYXNVbmlxdWVJZCA9IG1hcHBpbmdFbnRyeSAmJiAhIW1hcHBpbmdFbnRyeS51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBjdXN0b21Ob2RlLmJsb2NrTmFtZSA9IGhhc1VuaXF1ZUlkID8gbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZCA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgY3VzdG9tRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdHlwZSA6IFwiZXJyb3JfYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGEgOiBjdXN0b21Ob2RlXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAvLyB0aGlzLnNjcm9sbFRvUmVhY3RTZWN0aW9uKGN1c3RvbU5vZGUuYmxvY2tOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0VG9yZWFjdEVtaXR0ZXIuZW1pdChjdXN0b21FdmVudCk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSBpZiAoaGFzQm9ycm93ZXJJZCAmJiBpc0ZpZWxkTGV2ZWwpIHtcclxuICAgICAgICAgICAgLy8gICAgIGNvbnN0IG1hcHBpbmdFbnRyeSA9IHRoaXMucmVzcG9uc2VSZXN1bHQuZmluZChlbnRyeSA9PiBlbnRyeS5yZXNwb25zZV92YWx1ZSA9PT0gbm9kZS5hcGlfa2V5KSA/IHRoaXMucmVzcG9uc2VSZXN1bHQuZmluZChlbnRyeSA9PiBlbnRyeS5yZXNwb25zZV92YWx1ZSA9PT0gbm9kZS5hcGlfa2V5KSA6IHRoaXMucmVzcG9uc2VSZXN1bHQuZmluZChlbnRyeSA9PiBlbnRyeS5yZXNwb25zZV92YWx1ZSA9PT0gbm9kZS5ibG9ja05hbWUpO1xyXG4gICAgICAgICAgICAvLyAgICAgY29uc3QgaGFzVW5pcXVlSWQgPSBtYXBwaW5nRW50cnkgJiYgISFtYXBwaW5nRW50cnkudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICAvLyAgICAgY3VzdG9tTm9kZS5ibG9ja05hbWUgPSBoYXNVbmlxdWVJZCA/IGAke21hcHBpbmdFbnRyeS51bmlxdWVfaWR9LSR7bWFpblBhcmVudE5hbWV9YCA6IG51bGw7XHJcbiAgICAgICAgICAgIC8vICAgICBsZXQgY3VzdG9tRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdHlwZSA6IFwiZXJyb3JfYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGRhdGEgOiBjdXN0b21Ob2RlXHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB0aGlzLnNjcm9sbFRvUmVhY3RTZWN0aW9uKGN1c3RvbU5vZGUuYmxvY2tOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0VG9yZWFjdEVtaXR0ZXIuZW1pdChjdXN0b21FdmVudCk7XHJcbiAgICAgICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAobWFpblBhcmVudE5hbWUpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5rZXlWYWx1ZU1hcC5oYXMoY3VzdG9tTm9kZS5ibG9ja05hbWUpKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGxldCBtYXBwZWRWYWx1ZSA9IHRoaXMua2V5VmFsdWVNYXAuZ2V0KGN1c3RvbU5vZGUuYmxvY2tOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZmluYWxTY3JvbGxUYXJnZXQgPSBgJHttYXBwZWRWYWx1ZX0tJHttYWluUGFyZW50TmFtZX1gO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBpZiAoZmluYWxTY3JvbGxUYXJnZXQpIHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIGN1c3RvbU5vZGUuYmxvY2tOYW1lID0gbWFwcGVkVmFsdWU7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBsZXQgY3VzdG9tRXZlbnQgPSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgdHlwZSA6IFwiZXJyb3JfYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIGRhdGEgOiBjdXN0b21Ob2RlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdFRvcmVhY3RFbWl0dGVyLmVtaXQoY3VzdG9tRXZlbnQpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1JlYWN0U2VjdGlvbihmaW5hbFNjcm9sbFRhcmdldCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICBpZiAoIWZpbmFsU2Nyb2xsVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgaWYgKGN1c3RvbU5vZGUuYmxvY2tOYW1lICYmIHRoaXMua2V5VmFsdWVNYXAuaGFzKGN1c3RvbU5vZGUuYmxvY2tOYW1lKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBmaW5hbFNjcm9sbFRhcmdldCA9IHRoaXMua2V5VmFsdWVNYXAuZ2V0KGN1c3RvbU5vZGUuYmxvY2tOYW1lKTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgaWYgKGZpbmFsU2Nyb2xsVGFyZ2V0KSB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBjdXN0b21Ob2RlLmJsb2NrTmFtZSA9IGZpbmFsU2Nyb2xsVGFyZ2V0O1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbGV0IGN1c3RvbUV2ZW50ID0ge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHR5cGUgOiBcImVycm9yX2FjdGlvbnNcIixcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBkYXRhIDogY3VzdG9tTm9kZVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRUb3JlYWN0RW1pdHRlci5lbWl0KGN1c3RvbUV2ZW50KTtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9SZWFjdFNlY3Rpb24oZmluYWxTY3JvbGxUYXJnZXQpO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAvLyB9XHJcbiAgICAgICAgfSBlbHNle1xyXG4gICAgICAgICAgICBpZiAoIWhhc0JvcnJvd2VySWQgJiYgaXNGaWVsZExldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwaW5nRW50cnkgPSB0aGlzLnJlc3BvbnNlUmVzdWx0LmZpbmQoZW50cnkgPT4gZW50cnkucmVzcG9uc2VfdmFsdWUgPT09IGN1c3RvbU5vZGUuYXBpX2tleSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNQYXJlbnRJZCA9IG1hcHBpbmdFbnRyeSAmJiAhIW1hcHBpbmdFbnRyeS5wYXJlbnRfaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzUGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZShtYXBwaW5nRW50cnkucGFyZW50X2lkKS5zdWJzY3JpYmUoKHBhcmVudEJsb2NrRGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEZpZWxkID0gcGFyZW50QmxvY2tEYXRhPy5ibG9ja19maWVsZHM/LmZpbmQoKGZpZWxkOiBhbnkpID0+IGZpZWxkLnVuaXF1ZV9pZCA9PT0gbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQYXJhbSA9IHRhcmdldEZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycz8uZmluZChwYXJhbSA9PiBwYXJhbS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRQYXJhbT8udmFsdWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcnJvd2VySW5kZXggPSB0aGlzLmJvcnJvd2VySWRNYXAuZ2V0KG1haW5QYXJlbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvblNlcnZpY2Uub3Blbk11bHRpcGxlU2VjdGlvbnNXaXRoUGFyZW50KG1hcHBpbmdFbnRyeS51bmlxdWVfaWQsIG1hcHBpbmdFbnRyeS5wYXJlbnRfaWQsZGVmYXVsdFZhbHVlLCBib3Jyb3dlckluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQmxvY2tBbmRTY3JvbGxUb0ZpZWxkKGRlZmF1bHRWYWx1ZSwgY3VzdG9tTm9kZS5hcGlfa2V5LCB0cnVlLCBib3Jyb3dlckluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlY3Rpb25zVG9PcGVuID0gW21hcHBpbmdFbnRyeS51bmlxdWVfaWRdOyAvLyBEeW5hbWljYWxseSB1c2UgcGFyZW50X2lkXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hY2NvcmRpb25TZXJ2aWNlLm9wZW5NdWx0aXBsZVNlY3Rpb25zKHNlY3Rpb25zVG9PcGVuKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRCbG9ja0FuZFNjcm9sbFRvRmllbGQobWFwcGluZ0VudHJ5LnVuaXF1ZV9pZCwgY3VzdG9tTm9kZS5hcGlfa2V5LGZhbHNlLDApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgfWVsc2UgaWYgKGhhc0JvcnJvd2VySWQgJiYgaXNGaWVsZExldmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwaW5nRW50cnkgPSB0aGlzLnJlc3BvbnNlUmVzdWx0LmZpbmQoZW50cnkgPT4gZW50cnkucmVzcG9uc2VfdmFsdWUgPT09IGN1c3RvbU5vZGUuYXBpX2tleSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoYXNQYXJlbnRJZCA9IG1hcHBpbmdFbnRyeSAmJiAhIW1hcHBpbmdFbnRyeS5wYXJlbnRfaWQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBpZiAoaGFzUGFyZW50SWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZShtYXBwaW5nRW50cnkucGFyZW50X2lkKS5zdWJzY3JpYmUoKHBhcmVudEJsb2NrRGF0YTogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRhcmdldEZpZWxkID0gcGFyZW50QmxvY2tEYXRhPy5ibG9ja19maWVsZHM/LmZpbmQoKGZpZWxkOiBhbnkpID0+IGZpZWxkLnVuaXF1ZV9pZCA9PT0gbWFwcGluZ0VudHJ5LnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0RmllbGQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRQYXJhbSA9IHRhcmdldEZpZWxkLmFkZGl0aW9uYWxfcGFyYW1ldGVycz8uZmluZChwYXJhbSA9PiBwYXJhbS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRWYWx1ZSA9IGRlZmF1bHRQYXJhbT8udmFsdWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcnJvd2VySW5kZXggPSB0aGlzLmJvcnJvd2VySWRNYXAuZ2V0KG1haW5QYXJlbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFjY29yZGlvblNlcnZpY2Uub3Blbk11bHRpcGxlU2VjdGlvbnNXaXRoUGFyZW50KG1hcHBpbmdFbnRyeS51bmlxdWVfaWQsIG1hcHBpbmdFbnRyeS5wYXJlbnRfaWQsZGVmYXVsdFZhbHVlLCBib3Jyb3dlckluZGV4KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkQmxvY2tBbmRTY3JvbGxUb0ZpZWxkKGRlZmF1bHRWYWx1ZSwgY3VzdG9tTm9kZS5hcGlfa2V5LCB0cnVlLCBib3Jyb3dlckluZGV4KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGlmIChtYWluUGFyZW50TmFtZSAmJiB0aGlzLmJvcnJvd2VySWRNYXAuaGFzKG1haW5QYXJlbnROYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcnJvd2VySW5kZXggPSB0aGlzLmJvcnJvd2VySWRNYXAuZ2V0KG1haW5QYXJlbnROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5rZXlWYWx1ZU1hcC5oYXMoY3VzdG9tTm9kZS5ibG9ja05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXBwZWRWYWx1ZSA9IHRoaXMua2V5VmFsdWVNYXAuZ2V0KGN1c3RvbU5vZGUuYmxvY2tOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxTY3JvbGxUYXJnZXQgPSBgJHttYXBwZWRWYWx1ZX0tJHtib3Jyb3dlckluZGV4fWA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmluYWxTY3JvbGxUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zY3JvbGxUb1NlY3Rpb24oZmluYWxTY3JvbGxUYXJnZXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCFmaW5hbFNjcm9sbFRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXN0b21Ob2RlLmJsb2NrTmFtZSAmJiB0aGlzLmtleVZhbHVlTWFwLmhhcyhjdXN0b21Ob2RlLmJsb2NrTmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxTY3JvbGxUYXJnZXQgPSB0aGlzLmtleVZhbHVlTWFwLmdldChjdXN0b21Ob2RlLmJsb2NrTmFtZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmluYWxTY3JvbGxUYXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsVG9TZWN0aW9uKGZpbmFsU2Nyb2xsVGFyZ2V0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBsb2FkQmxvY2tBbmRTY3JvbGxUb0ZpZWxkKHVuaXF1ZUlkOiBzdHJpbmcsIGFwaUtleTogc3RyaW5nLCBpc0ZpZWxkTGV2ZWxXaXRoUGFyZW50OiBib29sZWFuLCBib3Jyb3dlckluZGV4OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh1bmlxdWVJZCkuc3Vic2NyaWJlKChibG9ja0RhdGEpID0+IHtcclxuICAgICAgICAgICAgbGV0IGxvYWRlZEJsb2NrOiBhbnkgPSBibG9ja0RhdGE7XHJcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEZpZWxkID0gbG9hZGVkQmxvY2s/LmJsb2NrX2ZpZWxkcz8uZmluZChmaWVsZCA9PiBmaWVsZC5hcGlfa2V5ID09PSBhcGlLZXkpO1xyXG4gICAgXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXRGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2Nyb2xsVGFyZ2V0SWQgPSB0YXJnZXRGaWVsZC51bmlxdWVfaWQ7XHJcbiAgICAgICAgICAgICAgICBpZiAoaXNGaWVsZExldmVsV2l0aFBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2Nyb2xsV2l0aFJldHJ5UGFyZW50KHNjcm9sbFRhcmdldElkLGJvcnJvd2VySW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjcm9sbFdpdGhSZXRyeShzY3JvbGxUYXJnZXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAoZXJyb3IpID0+IHtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBcclxuICAgIGdldE1haW5QYXJlbnROYW1lKG5vZGU6IElUcmVlTm9kZSk6IHN0cmluZyB8IG51bGwge1xyXG4gICAgICAgIGxldCBwYXJlbnROb2RlID0gbm9kZTtcclxuICAgICAgICB3aGlsZSAocGFyZW50Tm9kZSAmJiBwYXJlbnROb2RlLnR5cGUgIT09ICdtYWluX3BhcmVudCcpIHtcclxuICAgICAgICAgICAgcGFyZW50Tm9kZSA9IHRoaXMuZmluZFBhcmVudE5vZGUocGFyZW50Tm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBwYXJlbnROb2RlID8gcGFyZW50Tm9kZS5uYW1lIDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBmaW5kUGFyZW50Tm9kZShub2RlOiBJVHJlZU5vZGUpOiBJVHJlZU5vZGUgfCBudWxsIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50cmVlQ29udHJvbC5kYXRhTm9kZXMuZmluZChwYXJlbnQgPT4gXHJcbiAgICAgICAgICAgIHBhcmVudC5jaGlsZHJlbiAmJiBwYXJlbnQuY2hpbGRyZW4uaW5jbHVkZXMobm9kZSlcclxuICAgICAgICApIHx8IG51bGw7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIFxyXG5cclxuICAgIGV4cGFuZEFsbE5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzPy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmV4cGFuZChub2RlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb2xsYXBzZUFsbE5vZGVzKCkge1xyXG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZGF0YU5vZGVzPy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKG5vZGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIFxyXG4gICAgQEhvc3RMaXN0ZW5lcigna2V5ZG93bicsIFsnJGV2ZW50J10pXHJcbiAgICBvbktleWRvd24oZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMudHJlZUNvbnRyb2wpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgZm9jdXNlZE5vZGUgPSBkb2N1bWVudC5hY3RpdmVFbGVtZW50Py5jbG9zZXN0KCcubWF0LXRyZWUtbm9kZScpO1xyXG4gICAgICAgIGlmICghZm9jdXNlZE5vZGUpIHJldHVybjtcclxuXHJcbiAgICAgICAgLy8gRmluZCB0aGUgY29ycmVzcG9uZGluZyBub2RlIGZyb20gdGhlIHRyZWUgZGF0YVxyXG4gICAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLnRyZWVDb250cm9sLmRhdGFOb2Rlcy5maW5kKG4gPT4gZm9jdXNlZE5vZGUudGV4dENvbnRlbnQ/LmluY2x1ZGVzKG4ubmFtZSkpO1xyXG4gICAgICAgIGlmICghbm9kZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoZXZlbnQua2V5ID09PSAnQXJyb3dSaWdodCcpIHtcclxuICAgICAgICAgICAgdGhpcy5leHBhbmRBbGxDaGlsZHJlbihub2RlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0Fycm93TGVmdCcpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbENoaWxkcmVuKG5vZGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbk5vZGVDbGljayhub2RlOiBJVHJlZU5vZGUsIGV2ZW50PzogRXZlbnQpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzQ2hpbGQoMCwgbm9kZSkpIHJldHVybjtcclxuICAgICAgICBpZiAoZXZlbnQpIHtcclxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLnRyZWVDb250cm9sLmlzRXhwYW5kZWQobm9kZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2xsYXBzZUFsbENoaWxkcmVuKG5vZGUpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhwYW5kQWxsQ2hpbGRyZW4obm9kZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIFxyXG4gICAgY29sbGFwc2VBbGxDaGlsZHJlbihub2RlOiBJVHJlZU5vZGUpIHtcclxuICAgICAgICB0aGlzLnRyZWVDb250cm9sLmNvbGxhcHNlKG5vZGUpOyAvLyBDb2xsYXBzZSB0aGUgcGFyZW50IGZpcnN0XHJcbiAgICBcclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy50cmVlQ29udHJvbC5jb2xsYXBzZShjaGlsZCk7IC8vIENvbGxhcHNlIGVhY2ggY2hpbGRcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sbGFwc2VBbGxDaGlsZHJlbihjaGlsZCk7IC8vIFJlY3Vyc2l2ZWx5IGNvbGxhcHNlIGFsbCBjaGlsZHJlblxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5jZFJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGV4cGFuZEFsbENoaWxkcmVuKG5vZGU6IElUcmVlTm9kZSkge1xyXG4gICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKG5vZGUpO1xyXG4gICAgXHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJlZUNvbnRyb2wuZXhwYW5kKGNoaWxkKTsgLy8gRXhwYW5kIGVhY2ggY2hpbGRcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhwYW5kQWxsQ2hpbGRyZW4oY2hpbGQpOyAvLyBSZWN1cnNpdmVseSBleHBhbmQgYWxsIGNoaWxkcmVuXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuICAgIFxyXG5cclxuICAgIHNjcm9sbFRvU2VjdGlvbnMoaXRlbSwgaTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKGl0ZW0uYXR0Y2hlZG1lbnVDbGFzcykge1xyXG4gICAgICAgICAgICBjb25zdCBtZW51RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuXCIgKyBpdGVtLmF0dGNoZWRtZW51Q2xhc3MpO1xyXG4gICAgICAgICAgICBpZiAobWVudUVsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yRmllbGQgPSB0aGlzLnJlbmRlcmVyLnNlbGVjdFJvb3RFbGVtZW50KFwiLlwiICsgaXRlbS5hdHRjaGVkbWVudUNsYXNzLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvckZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JGaWVsZC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcsIGlubGluZTogJ3N0YXJ0JyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNle1xyXG4gICAgICAgICAgICBsZXQgYXR0YWNodG9TdGVwUGFydHMgPSBpdGVtLmF0dGFjaHRvU3RlcC5zcGxpdCgnIycpO1xyXG4gICAgICAgICAgICBpZiAoYXR0YWNodG9TdGVwUGFydHMubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHBhcnQgPSBhdHRhY2h0b1N0ZXBQYXJ0c1sxXTtcclxuICAgICAgICAgICAgICAgICAgaWYocGFydCAmJiBwYXJ0LmluZGV4T2YoJ3t7aX19JykgIT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnQucmVwbGFjZSgne3tpfX0nLGktMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JGaWVsZCA9IHRoaXMucmVuZGVyZXIuc2VsZWN0Um9vdEVsZW1lbnQoXCIuXCIgKyBwYXJ0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3JGaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvckZpZWxkLnNjcm9sbEludG9WaWV3KHsgYmVoYXZpb3I6ICdzbW9vdGgnLCBibG9jazogJ3N0YXJ0JywgaW5saW5lOiAnc3RhcnQnIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc2Nyb2xsVG9TZWN0aW9uKGJsb2NrTmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYgKCFibG9ja05hbWUpIHJldHVybjtcclxuICAgICAgICBjb25zdCB0YXJnZXRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYmxvY2tOYW1lKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgICBpZiAodGFyZ2V0RWxlbWVudCkgeyBcclxuICAgICAgICAgICAgdGFyZ2V0RWxlbWVudC5zY3JvbGxJbnRvVmlldyh7IGJlaGF2aW9yOiAnc21vb3RoJywgYmxvY2s6ICdzdGFydCcsIGlubGluZTogJ3N0YXJ0JyB9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZW5zdXJlRWxlbWVudFZpc2libGUoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBjb25zdCByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgICAgICBjb25zdCBpc1Zpc2libGUgPSByZWN0LnRvcCA+PSAwICYmIHJlY3QuYm90dG9tIDw9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuICAgIFxyXG4gICAgICAgIGlmICghaXNWaXNpYmxlKSB7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5lbnN1cmVFbGVtZW50VmlzaWJsZShlbGVtZW50KSwgMjAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgIWVsZW1lbnQuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgICAgIGVsZW1lbnQuZm9jdXMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdFZpZXcoZWxlbWVudCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdFZpZXcoZWxlbWVudDogSFRNTEVsZW1lbnQpIHtcclxuICAgICAgICBpZiAoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQgJiYgIWVsZW1lbnQuZGlzYWJsZWQpIHtcclxuICAgICAgICAgICAgZWxlbWVudC5mb2N1cygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWdobGlnaHRlZFwiKTtcclxuICAgICAgICB0aGlzLmNkUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlnaGxpZ2h0ZWRcIik7XHJcbiAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH0sIDIwMDApO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBcclxuICAgIHB1YmxpYyBnZXRBcGlLZXlWYWx1ZVBhaXIoYXBpRGF0YXMpIHtcclxuICAgICAgICBsZXQgbWFpbk9iamVjdCA9IHt9O1xyXG4gICAgXHJcbiAgICAgICAgaWYgKGFwaURhdGFzICYmIGFwaURhdGFzLnZhbHVlKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGFwaURhdGFzLnZhbHVlKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5ID09PSBcImhhbmRsZXJfbmFtZVwiKSByZXR1cm47XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIC8vIFNwbGl0IHRoZSBrZXkgYnkgIyNcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleVBhcnRzID0ga2V5LnNwbGl0KCcjIycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleVBhcnRzLmxlbmd0aCA8IDIpIHJldHVybjtcclxuICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gRXh0cmFjdCByb290IG9iamVjdCBhbmQgbmVzdGVkIHBhdGhcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJvb3RLZXkgPSBrZXlQYXJ0c1swXTtcclxuICAgICAgICAgICAgICAgIGxldCBuZXN0ZWRQYXRoID0ga2V5UGFydHNbMV07XHJcbiAgICAgICAgICAgICAgICBuZXN0ZWRQYXRoID0gbmVzdGVkUGF0aC5yZXBsYWNlKC9ecmVzcG9uc2VcXC4vLCAnJyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRoUGFydHMgPSBuZXN0ZWRQYXRoLnNwbGl0KCcuJyk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50T2JqID0gbWFpbk9iamVjdDtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aFBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcnQgPSBwYXRoUGFydHNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlNYXRjaCA9IHBhcnQubWF0Y2goLyhcXHcrKVxcWyhcXGQrKVxcXS8pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJheU1hdGNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFycmF5S2V5ID0gYXJyYXlNYXRjaFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyYXlJbmRleCA9IHBhcnNlSW50KGFycmF5TWF0Y2hbMl0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRPYmpbYXJyYXlLZXldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50T2JqW2FycmF5S2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudE9ialthcnJheUtleV1bYXJyYXlJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRPYmpbYXJyYXlLZXldW2FycmF5SW5kZXhdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9iaiA9IGN1cnJlbnRPYmpbYXJyYXlLZXldW2FycmF5SW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudE9ialtwYXJ0XSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9ialtwYXJ0XSA9IChpID09PSBwYXRoUGFydHMubGVuZ3RoIC0gMSkgPyBhcGlEYXRhcy52YWx1ZVtrZXldIDoge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudE9iaiA9IGN1cnJlbnRPYmpbcGFydF07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gbWFpbk9iamVjdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgXHJcbiAgICBnZXRGaWVsZFVuaXF1ZUlkQnlBcGlLZXkoYmxvY2tOYW1lOiBzdHJpbmcsIGFwaUtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUoYmxvY2tOYW1lKS5zdWJzY3JpYmUoKGJsb2NrRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiTG9hZGVkIEJsb2NrIERhdGE6IFwiLCBibG9ja0RhdGEpO1xyXG4gICAgICAgICAgICBsZXQgbG9hZGVkQmxvY2tEYXRhOiBhbnkgPSBibG9ja0RhdGE7XHJcbiAgICAgICAgICAgIC8vIFNlYXJjaCBmb3IgdGhlIGZpZWxkIHdpdGggdGhlIG1hdGNoaW5nIGFwaV9rZXlcclxuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBsb2FkZWRCbG9ja0RhdGE/LmJsb2NrX2ZpZWxkcz8uZmluZCgoZmllbGQ6IGFueSkgPT4gZmllbGQuYXBpX2tleSA9PT0gYXBpS2V5KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIFxyXG5cclxufVxyXG4iLCI8ZGl2ICpuZ0lmPVwiaXNWaXNpYmxlXCI+XHJcbjxtYXQtdHJlZSBbZGF0YVNvdXJjZV09XCJkYXRhU291cmNlXCIgW3RyZWVDb250cm9sXT1cInRyZWVDb250cm9sXCIgY2xhc3M9XCJleGFtcGxlLXRyZWVcIj5cclxuICAgIDwhLS0gTGVhZiBub2RlIHRlbXBsYXRlIChObyBjaGlsZHJlbikgLS0+XHJcbiAgICA8bWF0LXRyZWUtbm9kZSAqbWF0VHJlZU5vZGVEZWY9XCJsZXQgbm9kZVwiIGNsYXNzPVwidHJlZS1sZWFmLW5vZGVcIj5cclxuICAgICAgICA8bGkgY2xhc3M9XCJtYXQtdHJlZS1ub2RlIGxlYWYtbm9kZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG1hdC1pY29uLWJ1dHRvbiBkaXNhYmxlZCBjbGFzcz1cImxlYWYtaWNvbi1idXR0b25cIj48L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gU2hvdyBzb2xpZCBjaXJjbGUgYmVmb3JlIGNoaWxkIG5vZGVzIC0tPlxyXG4gICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm5vZGUudHlwZSA9PT0gJ2NoaWxkJ1wiIFxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImVycm9yLWluZGljYXRvciBlcnJvci1pbmRpY2F0b3ItbGVhZlwiIFxyXG4gICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJ7J2Vycm9yLWNpcmNsZSc6IG5vZGUuZXJyb3JUeXBlID09PSAnZXJyb3InLCAnd2FybmluZy1jaXJjbGUnOiBub2RlLmVycm9yVHlwZSA9PT0gJ3dhcm5pbmcnfVwiPlxyXG4gICAgICAgICAgICA8L3NwYW4+XHJcblxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImxlYWYtdGV4dFwiPlxyXG4gICAgICAgICAgICAgICAge3sgbm9kZS5uYW1lIH19XHJcbiAgICAgICAgICAgICAgICA8c3BhbiAqbmdJZj1cIm5vZGUuZXJyb3JUeXBlID09PSAnZXJyb3InXCIgY2xhc3M9XCJhcGktdmFsaWRhdGlvbi1sYWJlbCBhcGktbGFiZWwtZXJyb3JcIj4oZXJyb3IpPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gKm5nSWY9XCJub2RlLmVycm9yVHlwZSA9PT0gJ3dhcm5pbmcnXCIgY2xhc3M9XCJhcGktdmFsaWRhdGlvbi1sYWJlbCBhcGktbGFiZWwtd2FybmluZ1wiPih3YXJuaW5nKTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG91bGRTaG93RWRpdEJ1dHRvbihub2RlKVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwib25FZGl0Q2xpY2sobm9kZSlcIiBjbGFzcz1cImVkaXQtYnV0dG9uLWxlYWZcIj5cclxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9saT5cclxuICAgIDwvbWF0LXRyZWUtbm9kZT5cclxuXHJcbiAgICA8IS0tIEV4cGFuZGFibGUgbm9kZSB0ZW1wbGF0ZSAoUGFyZW50IHdpdGggY2hpbGRyZW4pIC0tPlxyXG4gICAgPG1hdC1uZXN0ZWQtdHJlZS1ub2RlICptYXRUcmVlTm9kZURlZj1cImxldCBub2RlOyB3aGVuOiBoYXNDaGlsZFwiIGNsYXNzPVwidHJlZS1wYXJlbnQtbm9kZVwiPlxyXG4gICAgICAgIDxsaSBjbGFzcz1cInBhcmVudC1ub2RlXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYXQtdHJlZS1ub2RlIHBhcmVudC1jb250ZW50XCIgKGNsaWNrKT1cIm9uTm9kZUNsaWNrKG5vZGUsICRldmVudClcIj5cclxuICAgICAgICAgICAgICAgIDwhLS0gUmVtb3ZlZCB0aGUgYXJyb3cgYnV0dG9uIC0tPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwYXJlbnQtdGV4dFwiPnt7IG5vZGUubmFtZSB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJzaG91bGRTaG93RWRpdEJ1dHRvbihub2RlKVwiIG1hdC1pY29uLWJ1dHRvbiAoY2xpY2spPVwib25FZGl0Q2xpY2sobm9kZSlcIiBjbGFzcz1cImVkaXQtYnV0dG9uLXBhcmVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtaWNvbj5lZGl0PC9tYXQtaWNvbj5cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHVsIFtjbGFzcy5leGFtcGxlLXRyZWUtaW52aXNpYmxlXT1cIiF0cmVlQ29udHJvbC5pc0V4cGFuZGVkKG5vZGUpXCIgY2xhc3M9XCJwYXJlbnQtY2hpbGRyZW5cIj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgbWF0VHJlZU5vZGVPdXRsZXQ+PC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgPC9saT5cclxuICAgIDwvbWF0LW5lc3RlZC10cmVlLW5vZGU+XHJcbjwvbWF0LXRyZWU+XHJcbjwvZGl2PiJdfQ==