import { Component, Input } from '@angular/core';
import { SetAPICallbackData } from '../../utils/set-api-callback-data-util';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { CommonUtil } from '../../utils/common-util';
import { APIKeyUtil } from '../../utils/api-key-util';
import { DynamicLabelUtil } from '../../utils/dynamic-label-util';
import { NgStyle } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { CdkDrag, CdkDropList, CdkDropListGroup, moveItemInArray, transferArrayItem, } from '@angular/cdk/drag-drop';
import { CeeLabelComponent } from '../../field-components/cee-label/cee-label.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { AlertModalComponent } from '../alert-modal/alert-modal.component';
import * as i0 from "@angular/core";
import * as i1 from "../../services/shared-events-service.service";
import * as i2 from "../../services/internal-cee-emitter-service.service";
import * as i3 from "../../models/api-data/api-data.service";
import * as i4 from "../../models/app-data/app-data.service";
import * as i5 from "../../services/wfe-step-loader.service";
import * as i6 from "../../services/cee-api-service.service";
import * as i7 from "@angular/material/dialog";
import * as i8 from "@angular/material/snack-bar";
import * as i9 from "@angular/common/http";
import * as i10 from "@angular/router";
import * as i11 from "@angular/forms";
import * as i12 from "@angular/material/checkbox";
import * as i13 from "@angular/common";
const _c0 = a0 => ({ "d-none": a0 });
const _c1 = (a0, a1, a2, a3) => ({ field: a0, data: a1, pos: a2, position: a3 });
const _c2 = (a0, a1, a2) => ({ name: a0, value: a1, type: "list", cellData: a2 });
function DragAndDropListComponent_ng_container_0_ng_container_1_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 8);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.fieldData.field_label);
} }
function DragAndDropListComponent_ng_container_0_ng_container_1_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 9);
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r0.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function DragAndDropListComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_ng_container_1_label_1_Template, 2, 1, "label", 6)(2, DragAndDropListComponent_ng_container_0_ng_container_1_label_2_Template, 1, 1, "label", 7);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r0.isHTML(ctx_r0.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.isHTML(ctx_r0.fieldData.field_label));
} }
function DragAndDropListComponent_ng_container_0_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r2 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "button", 10);
    i0.ɵɵlistener("click", function DragAndDropListComponent_ng_container_0_button_3_Template_button_click_0_listener() { i0.ɵɵrestoreView(_r2); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.showHideFilter("show-hide-dd-container-", ctx_r0.fieldData.unique_id)); });
    i0.ɵɵtext(1, "\u2630");
    i0.ɵɵelementEnd();
} }
function DragAndDropListComponent_ng_container_0_div_4_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 18);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate1("", ctx_r0.fieldData.field_label, " Setting");
} }
function DragAndDropListComponent_ng_container_0_div_4_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 22)(1, "mat-checkbox", 23);
    i0.ɵɵtwoWayListener("ngModelChange", function DragAndDropListComponent_ng_container_0_div_4_div_4_div_1_Template_mat_checkbox_ngModelChange_1_listener($event) { i0.ɵɵrestoreView(_r4); const i_r5 = i0.ɵɵnextContext().index; const ctx_r0 = i0.ɵɵnextContext(3); i0.ɵɵtwoWayBindingSet(ctx_r0.columnShowHideRearrange[i_r5].showColumn, $event) || (ctx_r0.columnShowHideRearrange[i_r5].showColumn = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r5 = i0.ɵɵnextContext();
    const f_r7 = ctx_r5.$implicit;
    const i_r5 = ctx_r5.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtwoWayProperty("ngModel", ctx_r0.columnShowHideRearrange[i_r5].showColumn);
    i0.ɵɵproperty("disabled", ctx_r0.columnShowHideRearrange[i_r5].isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(f_r7.field_label);
} }
function DragAndDropListComponent_ng_container_0_div_4_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 24)(1, "label");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const f_r7 = i0.ɵɵnextContext().$implicit;
    i0.ɵɵadvance(2);
    i0.ɵɵtextInterpolate(f_r7.field_label);
} }
function DragAndDropListComponent_ng_container_0_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_div_4_div_4_div_1_Template, 3, 3, "div", 20)(2, DragAndDropListComponent_ng_container_0_div_4_div_4_div_2_Template, 3, 1, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("ngClass", i0.ɵɵpureFunction1(3, _c0, !ctx_r0.columnShowHideRearrange[i_r5].isVisible));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.columnFilterType.indexOf("showhide") != -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.columnFilterType.indexOf("showhide") == -1);
} }
function DragAndDropListComponent_ng_container_0_div_4_label_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 25);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r0.filterErrorMsg);
} }
function DragAndDropListComponent_ng_container_0_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r3 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 11)(1, "div");
    i0.ɵɵtemplate(2, DragAndDropListComponent_ng_container_0_div_4_label_2_Template, 2, 1, "label", 12);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 13);
    i0.ɵɵlistener("cdkDropListDropped", function DragAndDropListComponent_ng_container_0_div_4_Template_div_cdkDropListDropped_3_listener($event) { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.dropFilterItem($event)); });
    i0.ɵɵtemplate(4, DragAndDropListComponent_ng_container_0_div_4_div_4_Template, 3, 5, "div", 14);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "div");
    i0.ɵɵtemplate(6, DragAndDropListComponent_ng_container_0_div_4_label_6_Template, 2, 1, "label", 15);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(7, "button", 16);
    i0.ɵɵlistener("click", function DragAndDropListComponent_ng_container_0_div_4_Template_button_click_7_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.resetRestructuring()); });
    i0.ɵɵtext(8, "Cancel");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(9, "button", 17);
    i0.ɵɵlistener("click", function DragAndDropListComponent_ng_container_0_div_4_Template_button_click_9_listener() { i0.ɵɵrestoreView(_r3); const ctx_r0 = i0.ɵɵnextContext(2); return i0.ɵɵresetView(ctx_r0.applyRestructuring()); });
    i0.ɵɵtext(10, "Save");
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵpropertyInterpolate1("id", "show-hide-dd-container-", ctx_r0.fieldData.unique_id, "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngForOf", ctx_r0.columnShowHideRearrange);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.filterErrorMsg);
} }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_1_ng_template_0_Template(rf, ctx) { }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵtemplate(0, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_1_ng_template_0_Template, 0, 0, "ng-template");
} }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_1_Template, 1, 0, null, 30);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r9 = ctx.$implicit;
    const position_r10 = ctx.index;
    const ctx_r10 = i0.ɵɵnextContext();
    const item_r12 = ctx_r10.$implicit;
    const pos_r13 = ctx_r10.index;
    i0.ɵɵnextContext(4);
    const cellData_r14 = i0.ɵɵreference(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngTemplateOutlet", cellData_r14)("ngTemplateOutletContext", i0.ɵɵpureFunction4(2, _c1, field_r9, item_r12, pos_r13, position_r10));
} }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 28);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_ng_container_1_Template, 2, 7, "ng-container", 29);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const item_r12 = ctx.$implicit;
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", item_r12.fields);
} }
function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 26);
    i0.ɵɵlistener("cdkDropListDropped", function DragAndDropListComponent_ng_container_0_div_6_ng_container_3_Template_div_cdkDropListDropped_1_listener($event) { i0.ɵɵrestoreView(_r8); const ctx_r0 = i0.ɵɵnextContext(3); return i0.ɵɵresetView(ctx_r0.drop($event)); });
    i0.ɵɵtemplate(2, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_div_2_Template, 2, 1, "div", 27);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const status_r15 = i0.ɵɵnextContext().$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("cdkDropListData", ctx_r0.displayData[status_r15.unique_id]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.displayData[status_r15.unique_id]);
} }
function DragAndDropListComponent_ng_container_0_div_6_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "h2");
    i0.ɵɵtext(2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, DragAndDropListComponent_ng_container_0_div_6_ng_container_3_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const status_r15 = ctx.$implicit;
    const ctx_r0 = i0.ɵɵnextContext(2);
    i0.ɵɵclassMapInterpolate1("drag-drop-container ", ctx_r0.fieldData.field_style ? ctx_r0.commonUtil.bootstrapColClass(ctx_r0.fieldData.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(ctx_r0.fieldData)) : "", "");
    i0.ɵɵadvance();
    i0.ɵɵattribute("aria-label", status_r15.field_label);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(status_r15.field_label);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.displayData.hasOwnProperty(status_r15.unique_id));
} }
function DragAndDropListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 1);
    i0.ɵɵelementStart(2, "div");
    i0.ɵɵtemplate(3, DragAndDropListComponent_ng_container_0_button_3_Template, 2, 0, "button", 2);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(4, DragAndDropListComponent_ng_container_0_div_4_Template, 11, 5, "div", 3);
    i0.ɵɵelementStart(5, "div", 4);
    i0.ɵɵtemplate(6, DragAndDropListComponent_ng_container_0_div_6_Template, 4, 6, "div", 5);
    i0.ɵɵelementEnd();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.fieldData.field_label != "");
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", ctx_r0.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r0.columnFilterType.indexOf("none") == -1);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate1(" ", ctx_r0.is_bootstrap ? "row" : "", "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r0.statusList);
} }
function DragAndDropListComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-cee-label", 33);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r15 = i0.ɵɵnextContext();
    const field_r17 = ctx_r15.field;
    const data_r18 = ctx_r15.data;
    const position_r19 = ctx_r15.position;
    const ctx_r0 = i0.ɵɵnextContext();
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate2("field-", position_r19, " ", field_r17.field_style ? ctx_r0.commonUtil.bootstrapColClass(field_r17.field_style.bootstrap_class_name, ctx_r0.is_bootstrap, "", ctx_r0.conditionalUtil.evaluteBootstrapCondition(field_r17)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r0.stepId)("rowData", field_r17["rowData"])("fieldData", field_r17)("primaryKeyIndex", i0.ɵɵpureFunction3(8, _c2, ctx_r0.primaryKeyVal, data_r18[ctx_r0.primaryKeyVal], data_r18));
} }
function DragAndDropListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0, 31);
    i0.ɵɵtemplate(1, DragAndDropListComponent_ng_template_1_ng_container_1_Template, 2, 12, "ng-container", 32);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r17 = ctx.field;
    i0.ɵɵproperty("ngSwitch", field_r17.field_type);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngSwitchCase", "label");
} }
export class DragAndDropListComponent {
    sharedEventsServiceService;
    internalCEEEmitter;
    apiDataService;
    appDataService;
    wfeStepLoaderService;
    ceeApiService;
    dialog;
    snackBar;
    http;
    cdRef;
    router;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    fieldData;
    stepId;
    type;
    rootData;
    primaryKeyVal = '';
    statusKey = '';
    appData = {
        id: '',
        stepId: '',
        apiKey: '',
        fieldLabel: '',
        linkedBlockId: '',
        isRepeatedField: false,
        repeatedBlockFieldId: '',
        requestApiKey: [],
        responseApiKey: [],
        dataFormatSeparator: '',
        mandatory: false,
        editable: false,
        visible: false,
        value: '',
        isValid: true
    };
    additionalParameters = {};
    setAPIKeyUtil;
    eventListHandler;
    apiKeyUtil;
    // apiSubscription: Subscription;
    variableObj = {};
    conditionalUtil;
    is_bootstrap = false;
    blockRenderedData;
    commonUtil;
    isVisible = false;
    fieldValue;
    setDynamicLabelUtil;
    html_id = '';
    statusList = [];
    displayData = {};
    fieldIdMapApiKey = {}; // to map the api field id and the api key of a single field
    columnFilterType = ['none'];
    columnShowHideRearrange = [];
    fieldDataBack = [];
    filterErrorMsg = "";
    constructor(sharedEventsServiceService, internalCEEEmitter, apiDataService, appDataService, wfeStepLoaderService, ceeApiService, dialog, snackBar, http, cdRef, router) {
        this.sharedEventsServiceService = sharedEventsServiceService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.apiDataService = apiDataService;
        this.appDataService = appDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.ceeApiService = ceeApiService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.cdRef = cdRef;
        this.router = router;
        this.setAPIKeyUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.conditionalUtil = new ConditionalUtil(localStorage.getItem('isSingleCondition') === 'true' ? true : false, appDataService, apiDataService);
        this.eventListHandler = new WFEEventListHandler(ceeApiService, router, sharedEventsServiceService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http);
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        setTimeout(() => {
            this.variableObj['emitOnApplyRearrangeBtnClicked_' + this.html_id] =
                this.sharedEventsServiceService.emitOnApplyRearrangeBtnClicked.subscribe(res => {
                    if (res && res.invoke_event_config && res.invoke_event_config.additional_parameters) {
                        let tableId = res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; }).length > 0 ? res.invoke_event_config.additional_parameters.filter(function (el) { return el.parameter_type == 'CEE_TABLE_ID'; })[0].value : '';
                        if (tableId && tableId == this.fieldData.unique_id) {
                            this.resetRestructuring(false);
                            this.applyRestructuring(false);
                            this.cdRef.detectChanges();
                        }
                    }
                });
        }, 0);
    }
    async ngOnInit() {
        this.html_id = this.fieldData.unique_id;
        let fromStore;
        const { additional_parameters, event_list } = this.fieldData;
        if (additional_parameters.length > 0) {
            for (const paramter of additional_parameters) {
                this.additionalParameters[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'CEE_column_filter_type':
                        this.columnFilterType = paramter.value ? paramter.value.split('|') : ['none'];
                        break;
                    case 'PrimaryKeyName':
                        this.primaryKeyVal = paramter.value;
                        break;
                    case 'CEE_STATUS_KEY':
                        this.statusKey = paramter.value;
                        break;
                }
            }
        }
        // Means it is a field not a section
        if (this.html_id) {
            const data = await this.wfeStepLoaderService.loadBlockByName(this.additionalParameters['default_value']).toPromise();
            this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
            this.fieldData.fields = this.blockRenderedData.block_fields;
            // check if the DD has externalApiOptionValue
            if (this.additionalParameters['externalApiOptionValue']) {
                // console.log("call getExternalApiOptionValue");
                let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameters['externalApiOptionValue']));
                const externalApiOptionValue = data ? this.getExternalApiOptionValue(this.additionalParameters['externalApiOptionValue'], data['value']) : null;
                // console.log("getExternalApiOptionValue: ", externalApiOptionValue);
                if (externalApiOptionValue !== null) {
                    if (Array.isArray(externalApiOptionValue)) {
                        this.fieldData.possible_values = externalApiOptionValue;
                        // console.log("fieldData possible_values: ", this.fieldData.possible_values)
                    }
                    else {
                        console.error('Something Went Wrong in Picker !!!');
                    }
                }
            }
            this.processPossibleValues();
            this.applyRestructuring();
            this.returnFieldIdMapApiKey();
            //fetch data from akita's api data
            if (!this.isSingleAPIKey) {
                const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.response_api_key);
                for (const apiKey of apiKeys) {
                    const handlerData = this.apiDataService.getApiDataByHandler(apiKey.split('##')[0]);
                    if (handlerData) {
                        fromStore = handlerData.value;
                        break;
                    }
                }
            }
            this.variableObj['emitApiSuccessResponse_' +
                this.html_id] =
                this.sharedEventsServiceService.emitApiSuccessResponse.subscribe(res => {
                    // console.log("Success Response: ", res)
                    this.setListData(res);
                    // check if the DD has externalApiOptionValue
                    if (this.additionalParameters['externalApiOptionValue']) {
                        // console.log("call getExternalApiOptionValue");
                        let data = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.additionalParameters['externalApiOptionValue']));
                        const externalApiOptionValue = data ? this.getExternalApiOptionValue(this.additionalParameters['externalApiOptionValue'], data['value']) : null;
                        // console.log("getExternalApiOptionValue: ", externalApiOptionValue);
                        if (externalApiOptionValue !== null) {
                            if (Array.isArray(externalApiOptionValue)) {
                                this.fieldData.possible_values = externalApiOptionValue;
                                // console.log("fieldData possible_values: ", this.fieldData.possible_values)
                                this.processPossibleValues();
                                this.applyRestructuring(false);
                            }
                            else {
                                console.error('Something Went Wrong in Picker !!!');
                            }
                        }
                    }
                }, err => {
                    console.error(err);
                });
            this.variableObj['emitOnDataSetOrUpdated_' + this.html_id] = this.sharedEventsServiceService.emitOnDataSetOrUpdated.subscribe(res => {
                this.onFieldDataUpdated(res.apiKey, res.value);
            });
            if (this.fieldData.is_display === 1) {
                this.isVisible = true;
            }
            this.appData = {
                ...this.appData,
                ...{
                    id: this.fieldData.unique_id,
                    stepId: this.stepId,
                    apiKey: this.isSingleAPIKey ? this.fieldData.api_key : '',
                    fieldLabel: localStorage.getItem('storeLabels') === 'true' ? this.fieldData.field_label : '',
                    linkedBlockId: '',
                    isRepeatedField: false,
                    repeatedBlockFieldId: '',
                    requestApiKey: this.isSingleAPIKey ? [] :
                        this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key),
                    responseApiKey: this.isSingleAPIKey ? [] :
                        this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key)),
                    visible: this.fieldData.is_display === 1 ? true : false,
                    isValid: true
                }
            };
            this.appData.visible = this.isVisible;
        }
        this.onComponentEvent('OnLoad');
        // set step id
        this.appData.stepId = this.stepId;
        // call the api event success emitter
        if (fromStore) {
            this.setListData(fromStore);
        }
    }
    processPossibleValues() {
        // check if the DD has possible values
        if (this.fieldData && this.fieldData.possible_values && this.fieldData.possible_values.length > 0) {
            let i = 0;
            this.statusList = [];
            for (const possiVal of this.fieldData.possible_values) {
                const _possiVal = possiVal.split('||');
                if (_possiVal.length === 2) {
                    this.statusList.push({
                        field_label: _possiVal[1],
                        unique_id: _possiVal[0],
                        position: i++,
                        showColumn: true,
                        isMandatory: false,
                        isVisible: true
                    });
                }
            }
            this.fieldDataBack = this.statusList;
            // console.log("onInit >> statusList: ",this.statusList)
            this.updateColumnConfig();
        }
    }
    getExternalApiOptionValue(value, data) {
        if (value.includes('||')) {
            const valueApikeys = value.split('||').map(str => str.trim());
            const valueData = this.setAPIKeyUtil.setApiCallBackData(valueApikeys[0], data);
            const labelData = this.setAPIKeyUtil.setApiCallBackData(valueApikeys[1], data);
            // console.log("valueData: ",valueData);
            // console.log("labelData: ",labelData);
            if (Array.isArray(valueData) && Array.isArray(labelData) && valueData.length === labelData.length) {
                const optionValues = [];
                for (let v = 0; v < valueData.length; v++) {
                    optionValues.push(valueData[v] + '||' + labelData[v]);
                }
                // console.log("optionValues: ",optionValues);
                return optionValues;
            }
            else {
                return null;
            }
        }
        else {
            return this.setAPIKeyUtil.setApiCallBackData(value, data);
        }
    }
    updateColumnConfig() {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.fieldData.unique_id)) {
            this.columnShowHideRearrange = setting[this.fieldData.unique_id];
        }
        else {
            this.columnShowHideRearrange = [];
            this.columnShowHideRearrange = this.statusList;
        }
        // console.log("updateColumnConfig >> columnShowHideRearrange: ",this.columnShowHideRearrange)
    }
    dropFilterItem(event) {
        if (this.columnFilterType.indexOf('rearrange') != -1) {
            moveItemInArray(this.columnShowHideRearrange, event.previousIndex, event.currentIndex);
        }
    }
    resetRestructuring(hideSearchFlag = true) {
        let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
        if (setting && setting.hasOwnProperty(this.fieldData.unique_id)) {
            this.columnShowHideRearrange = setting[this.fieldData.unique_id];
        }
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
        }
        // console.log("resetRestructuring >> columnShowHideRearrange: ",this.columnShowHideRearrange)
        if (hideSearchFlag) {
            this.showHideFilter('show-hide-dd-container-', this.fieldData.unique_id);
        }
    }
    applyRestructuring(hideSearchFlag = true) {
        if (this.columnShowHideRearrange.filter(c => c.showColumn == true).length > 0) {
            this.filterErrorMsg = "";
            let setting = localStorage.getItem('columnRstructuringConfig') ? JSON.parse(localStorage.getItem('columnRstructuringConfig')) : {};
            setting[this.fieldData.unique_id] = this.columnShowHideRearrange;
            localStorage.setItem('columnRstructuringConfig', JSON.stringify(setting));
            // console.log("applyRestructuring >> setting: ",setting)
            let selectedCols = this.columnShowHideRearrange.filter(c => c.showColumn == true).map(ele => ele.unique_id);
            let restuctuedColArr = [];
            // console.log("applyRestructuring >> selectedCols: ",selectedCols)
            selectedCols.forEach(s => {
                let tempFieldData = this.fieldDataBack.filter(ele => ele.unique_id == s);
                // console.log("applyRestructuring >> tempFieldData: ",tempFieldData)
                if (tempFieldData && tempFieldData.length > 0) {
                    restuctuedColArr.push(tempFieldData[0]);
                }
            });
            this.statusList = restuctuedColArr;
            // console.log("applyRestructuring >> restuctuedColArr: ",restuctuedColArr)
            // this.ngOnInit();
            if (hideSearchFlag) {
                this.showHideFilter('show-hide-dd-container-', this.fieldData.unique_id);
            }
            // console.log("All applyRestructuring Process Done!")
        }
        else {
            this.filterErrorMsg = "Please select atleast one column!";
        }
    }
    showHideFilter(string, id) {
        let containerId = string + id;
        if (!document.getElementById(containerId)) {
            return;
        }
        if (document.getElementById(containerId).classList.contains('d-none')) {
            document.getElementById(containerId).classList.remove('d-none');
        }
        else {
            document.getElementById(containerId).classList.add('d-none');
        }
    }
    setListData(res) {
        const result = this.setAPIKeyUtil.setApiCallBackData(this.fieldData, res);
        if (this.statusKey && result && result.length > 0) {
            this.displayData = {};
            for (const row of result.filter(r => r.hasOwnProperty(this.statusKey))) {
                if (!this.displayData.hasOwnProperty(row[this.statusKey])) {
                    this.displayData[row[this.statusKey]] = [];
                }
                this.displayData[row[this.statusKey]].push(row);
            }
            for (const key in this.displayData) {
                const properties = this.setFieldProperties(this.displayData[key]); // function that sets single properties
                this.displayData[key] = properties;
            }
        }
    }
    onFieldDataUpdated(fieldId, value) {
        if (this.fieldData.is_display === 2) {
            const visible = this.conditionalUtil.checkVisibility(this.fieldData, fieldId, value);
            if (visible !== undefined) {
                this.isVisible = visible;
            }
        }
        // update the state of the repeatable block if required
    }
    /**
     * trigger event if there has been an event triggered on the list
     * @param name the name of the event
     */
    onComponentEvent(name) {
        // not a list that is declared as a section
        if (this.fieldData && this.fieldData.unique_id) {
            if (this.fieldData && this.fieldData.event_list && this.fieldData.event_list.length > 0) {
                for (const event of JSON.parse(JSON.stringify(this.fieldData.event_list))) {
                    if (event && event.isDefault && event.event_name && event.event_name.toLowerCase() === name.toLowerCase()) {
                        this.eventListHandler.switchEventDisplayType(event, this.fieldData.event_list);
                    }
                }
            }
        }
    }
    // getter setter goes here
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    /**
     * unsubscribe all the subscriptions on ngDestroy
     */
    ngOnDestroy() {
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
    }
    drop(event) {
        // to check is confirm popup needed while drop
        if (this.additionalParameters['CEE_DRAG_SHOW_CONFIRM_MODAL'] && this.additionalParameters['CEE_DRAG_SHOW_CONFIRM_MODAL'] === 'true') {
            const dialogRef = this.dialog.open(AlertModalComponent, {
                data: {
                    message: this.additionalParameters['CEE_DRAG_SHOW_CONFIRM_MODAL_MESSAGE'] ? this.additionalParameters['CEE_DRAG_SHOW_CONFIRM_MODAL_MESSAGE'] : 'Do you want to proceed?',
                    title: " "
                }
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    // If user confirms the drop, proceed with reordering the items
                    this.proceedToDrop(event);
                }
            });
        }
        else {
            // no confirm popup needed
            this.proceedToDrop(event);
        }
    }
    proceedToDrop(event) {
        if (event.previousContainer === event.container) {
            moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        }
        else {
            transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        }
        this.storeUpdatedList();
        const _this = this;
        setTimeout(() => {
            _this.onComponentEvent('OnChange');
        }, 0);
    }
    storeUpdatedList() {
        const updatedListData = [];
        for (const key in this.displayData) {
            for (const row of this.displayData[key]) {
                const tRow = JSON.parse(JSON.stringify(row));
                tRow[this.statusKey] = key;
                updatedListData.push(tRow);
            }
        }
        this.appData.value = updatedListData;
        this.appDataService.setAppData(this.appData);
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    setFieldProperties(displayValues) {
        for (let i = 0; i < displayValues.length; i++) {
            let data = displayValues[i];
            if (data.hasOwnProperty('fields')) {
                continue;
            }
            data['fields'] = [];
            if (this.fieldData.fields) {
                for (const j of this.fieldData.fields) {
                    const field = JSON.parse(JSON.stringify(j));
                    field['rowData'] = this.generateRowData(field, data, i);
                    data['fields'].push(field);
                }
            }
        }
        return displayValues;
    }
    /**
     * returns the row data on the basis of the type of the list and the editable and visible conditions
     * @param field the cee field object
     * @param data the api response data object
     */
    generateRowData(field, data, list_pos, expandable = false) {
        let apiData = this.setAPIKeyUtil.setApiCallBackData(field, data);
        expandable && apiData && (data['hasExpandableData'] = true);
        let labelType = '';
        if (field.field_type === 'label') {
            labelType = (this.isSingleAPIKey ? field.api_key : field.response_api_key) ? '' : 'STATIC';
        }
        // if (field.field_type === 'Link') {
        //     apiData = data;
        // }
        let obj;
        let isEditable = false;
        let isVisible = false;
        if (field.is_editable === 1) {
            isEditable = true;
        }
        if (field.is_display === 1) {
            isVisible = true;
        }
        const resData = {};
        for (const key in data) {
            if (typeof data[key] === 'string') {
                resData[key] = data[key];
            }
        }
        if (this.fieldData.unique_id && (field.is_display === 2 || field.is_editable === 2)) {
            const uiApiValue = this.returnUniqueIdMapApiValue(data);
            obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'List',
                visible: field.is_display === 2 ?
                    this.getConditionalVisible(uiApiValue, isVisible, field) : isVisible,
                editable: field.is_editable === 2 ?
                    this.getConditionalEditable(uiApiValue, isEditable, field) : isEditable,
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                data: resData
            };
        }
        else {
            obj = {
                unique_id: field.unique_id,
                html_id: this.html_id + '-' + field.unique_id + '-' + list_pos,
                fromField: 'List',
                visible: isVisible,
                editable: isEditable,
                value: (field && field.field_type && ((field.field_type === 'label' && field.field_label && field.field_label.includes('((dynamic))')) ||
                    (field.field_label_config && field.field_label_config.includes('((dynamic))')))) ?
                    this.setDynamicLabelUtil.getDynamicValue(field, data).field_label :
                    labelType === 'STATIC' ? field.field_label : apiData,
                data: resData
            };
        }
        return obj;
    }
    /**
     * return the visible condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalVisible(data, presentValue, field) {
        const visibilityCondition = this.conditionalUtil.checkVisibility(field, field.unique_id, '', data);
        if (visibilityCondition) {
            return visibilityCondition;
        }
        return presentValue;
    }
    /**
     * return the editable condition
     * @param data api response object
     * @param presentValue present value of the field
     * @param field the field property object
     */
    getConditionalEditable(data, presentValue, field) {
        const editableCondition = this.conditionalUtil.checkEditable(field, field.unique_id, '', data);
        if (editableCondition) {
            return editableCondition;
        }
        return presentValue;
    }
    // TODO: Delete this function once the conditional statements depend on the api key then only return the single api response obj
    /**
     * function returns the mapping of unique id to the api value
     * @param apiResponse the response object i.e. the single index of the array
     */
    returnUniqueIdMapApiValue(apiResponse) {
        const obj = {};
        for (const key of Object.keys(this.fieldIdMapApiKey)) {
            const uniqueId = this.fieldIdMapApiKey[key];
            obj[uniqueId] = this.setAPIKeyUtil.setApiCallBackData(key, apiResponse) ? this.setAPIKeyUtil.setApiCallBackData(key, apiResponse) : '';
        }
        return obj;
    }
    /**
     * function that returns a map between fieldId and api key
     */
    returnFieldIdMapApiKey() {
        const obj = {};
        for (const field of this.fieldData.fields) {
            this.returnFieldIdMapApiKeyValue(obj, field);
        }
        this.fieldIdMapApiKey = obj;
    }
    // inner function of returnFieldIdMapApiKey
    returnFieldIdMapApiKeyValue(obj, field) {
        if (!this.isSingleAPIKey && field.response_api_key) {
            if (field.response_api_key.includes('|')) {
                const keys = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(field.response_api_key));
                for (const key of keys) {
                    obj[key] = field.unique_id;
                }
            }
            else {
                obj[field.response_api_key] = field.unique_id;
            }
        }
    }
    static ɵfac = function DragAndDropListComponent_Factory(t) { return new (t || DragAndDropListComponent)(i0.ɵɵdirectiveInject(i1.SharedEventsServiceService), i0.ɵɵdirectiveInject(i2.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i3.ApiDataService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.WfeStepLoaderService), i0.ɵɵdirectiveInject(i6.CeeApiService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i10.Router)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: DragAndDropListComponent, selectors: [["app-drag-and-drop-list"]], inputs: { fieldData: "fieldData", stepId: "stepId", type: "type", rootData: "rootData" }, standalone: true, features: [i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["cellData", ""], [4, "ngIf"], ["type", "button", "class", "btn btn-secondary btn-sm mb-1", "title", "Column Filter", 3, "click", 4, "ngIf"], ["class", "show-hide-dd-container col-3 mt-20 d-none", 3, "id", 4, "ngIf"], ["cdkDropListGroup", ""], [3, "class", 4, "ngFor", "ngForOf"], ["class", "form-label", 4, "ngIf"], ["class", "form-label", 3, "innerHTML", 4, "ngIf"], [1, "form-label"], [1, "form-label", 3, "innerHTML"], ["type", "button", "title", "Column Filter", 1, "btn", "btn-secondary", "btn-sm", "mb-1", 3, "click"], [1, "show-hide-dd-container", "col-3", "mt-20", "d-none", 3, "id"], ["class", "text-secondary m-2", 4, "ngIf"], ["cdkDropList", "", 1, "example-list", 3, "cdkDropListDropped"], ["class", "example-box", "cdkDrag", "", 3, "ngClass", 4, "ngFor", "ngForOf"], ["class", "text-danger m-2", 4, "ngIf"], ["mat-button", "", 1, "btn", "btn-outline-primary", "m-2", 3, "click"], ["mat-button", "", 1, "btn", "btn-primary", "m-2", 3, "click"], [1, "text-secondary", "m-2"], ["cdkDrag", "", 1, "example-box", 3, "ngClass"], ["class", "w-100 drag-content", 4, "ngIf"], ["class", "w-100 drag-content p-1", 4, "ngIf"], [1, "w-100", "drag-content"], [3, "ngModelChange", "ngModel", "disabled"], [1, "w-100", "drag-content", "p-1"], [1, "text-danger", "m-2"], ["cdkDropList", "", 1, "drag-drop-list", 3, "cdkDropListDropped", "cdkDropListData"], ["class", "drag-drop-box", "cdkDrag", "", 4, "ngFor", "ngForOf"], ["cdkDrag", "", 1, "drag-drop-box"], [4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "ngSwitch"], [4, "ngSwitchCase"], [3, "stepId", "rowData", "fieldData", "primaryKeyIndex"]], template: function DragAndDropListComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, DragAndDropListComponent_ng_container_0_Template, 7, 7, "ng-container", 1)(1, DragAndDropListComponent_ng_template_1_Template, 2, 2, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatFormFieldModule, MatInputModule, FormsModule, i11.NgControlStatus, i11.NgModel, MatCheckboxModule, i12.MatCheckbox, CdkDropListGroup, CdkDropList, CdkDrag, CommonModule, i13.NgClass, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgSwitch, i13.NgSwitchCase, CeeLabelComponent], styles: [".drag-drop-container[_ngcontent-%COMP%]{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.drag-drop-list[_ngcontent-%COMP%]{border:solid 1px #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.drag-drop-box[_ngcontent-%COMP%]{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.drag-drop-box[_ngcontent-%COMP%]:last-child{border:none}.drag-drop-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .drag-drop-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.show-hide-dd-container[_ngcontent-%COMP%]{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list[_ngcontent-%COMP%]{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container[_ngcontent-%COMP%]{width:100%;display:flex;align-items:center}.drag-icon[_ngcontent-%COMP%]{position:relative}.drag-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:move}i.disable[_ngcontent-%COMP%]{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box[_ngcontent-%COMP%]{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview[_ngcontent-%COMP%]{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder[_ngcontent-%COMP%]{opacity:0}.cdk-drag-animating[_ngcontent-%COMP%]{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging[_ngcontent-%COMP%]   .example-box[_ngcontent-%COMP%]:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(DragAndDropListComponent, [{
        type: Component,
        args: [{ selector: 'app-drag-and-drop-list', standalone: true, imports: [MatFormFieldModule, MatInputModule, NgStyle, FormsModule, MatCheckboxModule, CdkDropListGroup, CdkDropList, CdkDrag, CommonModule, CeeLabelComponent], template: "<ng-container *ngIf=\"isVisible\">\r\n\t<ng-container *ngIf=\"fieldData.field_label!=''\">\r\n\t\t<label class=\"form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n\t\t<label class=\"form-label\" *ngIf=\"isHTML(fieldData.field_label)\" [innerHTML]=\"fieldData.field_label\"></label>\r\n\t</ng-container>\r\n\t<!-- ################## Show Hide & Rearrange Column Filter #################### -->\r\n    <div><button type=\"button\" class=\"btn btn-secondary btn-sm mb-1\" title=\"Column Filter\" *ngIf=\"columnFilterType.indexOf('none') == -1\" (click)=\"showHideFilter('show-hide-dd-container-',fieldData.unique_id)\">\u2630</button></div>\r\n    <div id=\"show-hide-dd-container-{{fieldData.unique_id}}\" class=\"show-hide-dd-container col-3 mt-20 d-none\" *ngIf=\"columnFilterType.indexOf('none') == -1\">\r\n        <div><label *ngIf=\"fieldData.field_label\" class=\"text-secondary m-2\">{{fieldData.field_label}} Setting</label></div>\r\n        <div cdkDropList class=\"example-list\" (cdkDropListDropped)=\"dropFilterItem($event)\">  \r\n            <div class=\"example-box\" [ngClass]=\"{'d-none': !columnShowHideRearrange[i].isVisible}\" *ngFor=\"let f of columnShowHideRearrange; let i = index\" cdkDrag>\r\n                <div class=\"w-100 drag-content\" *ngIf=\"columnFilterType.indexOf('showhide') != -1\">\r\n                    <mat-checkbox [(ngModel)]=\"columnShowHideRearrange[i].showColumn\" [disabled]=\"columnShowHideRearrange[i].isMandatory\">{{f.field_label}}</mat-checkbox>  \r\n                </div>\r\n                <div class=\"w-100 drag-content p-1\" *ngIf=\"columnFilterType.indexOf('showhide') == -1\">\r\n                    <label>{{f.field_label}}</label>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div><label *ngIf=\"filterErrorMsg\" class=\"text-danger m-2\">{{filterErrorMsg}}</label></div>\r\n        <button mat-button class=\"btn btn-outline-primary m-2\" (click)=\"resetRestructuring()\">Cancel</button>\r\n        <button mat-button class=\"btn btn-primary m-2\" (click)=\"applyRestructuring()\">Save</button>\r\n    </div>\r\n\t<div cdkDropListGroup class=\" {{is_bootstrap?'row':''}}\">\r\n\t\t<div *ngFor=\"let status of statusList;\" class=\"drag-drop-container {{fieldData.field_style?commonUtil.bootstrapColClass(fieldData.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(fieldData)):''}}\">\r\n\t\t\t<h2 [attr.aria-label]=\"status.field_label\">{{status.field_label}}</h2>\r\n\t\t\t<ng-container *ngIf=\"displayData.hasOwnProperty(status.unique_id)\">\r\n\t\t\t\t<div cdkDropList [cdkDropListData]=\"displayData[status.unique_id]\" class=\"drag-drop-list\" (cdkDropListDropped)=\"drop($event)\">\r\n\t\t\t\t\t<div *ngFor=\"let item of displayData[status.unique_id]; index as pos\" class=\"drag-drop-box\" cdkDrag>\r\n\t\t\t\t\t\t<ng-container *ngFor=\"let field of item.fields; index as position\">\r\n\t\t\t\t\t\t\t<ng-template\r\n\t\t\t\t\t\t\t*ngTemplateOutlet=\"cellData; context:{field:field, data:item, pos:pos, position:position}\">\r\n\t\t\t\t\t\t\t</ng-template>\r\n\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t</div>\r\n</ng-container>\r\n\r\n<ng-template #cellData let-field=\"field\" let-data=\"data\" let-pos=\"pos\" let-position=\"position\">\r\n\t<ng-container [ngSwitch]=\"field.field_type\">\r\n\t\t<ng-container *ngSwitchCase=\"'label'\">\r\n\t\t\t<app-cee-label [stepId]=\"stepId\" [rowData]=\"field['rowData']\" [fieldData]=\"field\"\r\n\t\t\t\tclass=\"field-{{ position }} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n\t\t\t\t[primaryKeyIndex]=\"{name: primaryKeyVal, value: data[primaryKeyVal], type: 'list', cellData: data}\">\r\n\t\t\t</app-cee-label>\r\n\t\t</ng-container>\r\n\t</ng-container>\r\n</ng-template>", styles: [".drag-drop-container{width:400px;max-width:100%;margin:0 25px 25px 0;display:inline-block;vertical-align:top}.drag-drop-list{border:solid 1px #ccc;min-height:60px;background:#fff;border-radius:4px;overflow:hidden;display:block}.drag-drop-box{padding:20px 10px;border-bottom:solid 1px #ccc;color:#000000de;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;cursor:move;background:#fff;font-size:14px}.drag-drop-box:last-child{border:none}.drag-drop-list.cdk-drop-list-dragging .drag-drop-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}.show-hide-dd-container{position:fixed;z-index:9999;min-height:275px;top:84px;background:#fff;border:solid 1px #ccc;padding:10px;border-radius:5px}.example-list{max-width:100%;min-height:60px;height:200px;display:block;background:#fff;border-radius:4px;padding:10px;overflow-y:scroll}.container{width:100%;display:flex;align-items:center}.drag-icon{position:relative}.drag-icon i{cursor:move}i.disable{position:absolute;cursor:not-allowed!important;inset:0;color:transparent}.example-box{border:solid 1px #ccc;color:#000000de;display:flex;flex-direction:row;align-items:center;justify-content:space-between;box-sizing:border-box;background:#fff;font-size:14px;margin-bottom:20px}.cdk-drag-preview{box-sizing:border-box;border-radius:4px;box-shadow:0 5px 5px -3px #0003,0 8px 10px 1px #00000024,0 3px 14px 2px #0000001f}.cdk-drag-placeholder{opacity:0}.cdk-drag-animating{transition:transform .25s cubic-bezier(0,0,.2,1)}.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder){transition:transform .25s cubic-bezier(0,0,.2,1)}\n"] }]
    }], () => [{ type: i1.SharedEventsServiceService }, { type: i2.CEEInternalEmitterService }, { type: i3.ApiDataService }, { type: i4.AppDataService }, { type: i5.WfeStepLoaderService }, { type: i6.CeeApiService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i0.ChangeDetectorRef }, { type: i10.Router }], { fieldData: [{
            type: Input
        }], stepId: [{
            type: Input
        }], type: [{
            type: Input
        }], rootData: [{
            type: Input
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(DragAndDropListComponent, { className: "DragAndDropListComponent", filePath: "lib\\components\\drag-and-drop-list\\drag-and-drop-list.component.ts", lineNumber: 52 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHJhZy1hbmQtZHJvcC1saXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL0FuZ3VsYXItMTcvRVNGLUFuZ3VsYXItV0ZFLUxpYnJhcnkvcHJvamVjdHMvbmctY2VlLWNvcmUvc3JjL2xpYi9jb21wb25lbnRzL2RyYWctYW5kLWRyb3AtbGlzdC9kcmFnLWFuZC1kcm9wLWxpc3QuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZHJhZy1hbmQtZHJvcC1saXN0L2RyYWctYW5kLWRyb3AtbGlzdC5jb21wb25lbnQuaHRtbCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBd0MsTUFBTSxlQUFlLENBQUM7QUFJdkYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sd0NBQXdDLENBQUM7QUFDNUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxNQUFNLGtDQUFrQyxDQUFDO0FBTW5FLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRzlFLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUNyRCxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDdEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sZ0NBQWdDLENBQUM7QUFFbEUsT0FBTyxFQUFFLE9BQU8sRUFBWSxNQUFNLGlCQUFpQixDQUFDO0FBQ3BELE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBQ2xFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0seUJBQXlCLENBQUM7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VUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDaEgsS0FBSyxNQUFNLEdBQUcsSUFBSSxJQUFJLEVBQUU7b0JBQ3BCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2lCQUM5QjthQUNKO2lCQUFNO2dCQUNILEdBQUcsQ0FBQyxLQUFLLENBQUMsZ0JBQWdCLENBQUMsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDO2FBQ2pEO1NBQ0o7SUFDTCxDQUFDO2tGQWpuQlEsd0JBQXdCOzZEQUF4Qix3QkFBd0I7WUNWckMsQUF6Q0EsMkZBQWdDLDZHQXlDK0Q7O1lBekNoRixvQ0FBZTs0QkRpRGhCLGtCQUFrQixFQUFFLGNBQWMsRUFBVyxXQUFXLG9DQUFFLGlCQUFpQixtQkFBRSxnQkFBZ0IsRUFBRSxXQUFXLEVBQUUsT0FBTyxFQUFFLFlBQVksNEZBQUUsaUJBQWlCOztpRkFFckosd0JBQXdCO2NBUHBDLFNBQVM7MkJBQ0ksd0JBQXdCLGNBR3RCLElBQUksV0FDUCxDQUFDLGtCQUFrQixFQUFFLGNBQWMsRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLGlCQUFpQixFQUFFLGdCQUFnQixFQUFFLFdBQVcsRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLGlCQUFpQixDQUFDOzZWQU90SixTQUFTO2tCQUFqQixLQUFLO1lBQ1csTUFBTTtrQkFBdEIsS0FBSztZQUNHLElBQUk7a0JBQVosS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7O2tGQVJHLHdCQUF3QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3RvclJlZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3NoYXJlZC1ldmVudHMtc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNldEFQSUNhbGxiYWNrRGF0YSB9IGZyb20gJy4uLy4uL3V0aWxzL3NldC1hcGktY2FsbGJhY2stZGF0YS11dGlsJztcclxuaW1wb3J0IHsgQ29uZGl0aW9uYWxVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXV0aWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvd2ZlLXN0ZXAtbG9hZGVyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBXRkVFdmVudExpc3RIYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWV2ZW50LWxpc3QtaGFuZGxlci11dGlsJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgQVBJS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2FwaS1rZXktdXRpbCc7XHJcbmltcG9ydCB7IER5bmFtaWNMYWJlbFV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9keW5hbWljLWxhYmVsLXV0aWwnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTmdTdHlsZSwgTmdTd2l0Y2ggfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XHJcbmltcG9ydCB7XHJcbiAgICBDZGtEcmFnRHJvcCxcclxuICAgIENka0RyYWcsXHJcbiAgICBDZGtEcm9wTGlzdCxcclxuICAgIENka0Ryb3BMaXN0R3JvdXAsXHJcbiAgICBtb3ZlSXRlbUluQXJyYXksXHJcbiAgICB0cmFuc2ZlckFycmF5SXRlbSxcclxufSBmcm9tICdAYW5ndWxhci9jZGsvZHJhZy1kcm9wJztcclxuaW1wb3J0IHsgQ2VlTGFiZWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9maWVsZC1jb21wb25lbnRzL2NlZS1sYWJlbC9jZWUtbGFiZWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgTWF0Q2hlY2tib3hNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGVja2JveCc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBBbGVydE1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi4vYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY29tcG9uZW50JztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhdHVzVHlwZSB7XHJcbiAgICBmaWVsZF9sYWJlbDogc3RyaW5nLFxyXG4gICAgdW5pcXVlX2lkOiBzdHJpbmc7XHJcbiAgICBwb3NpdGlvbjogYW55O1xyXG4gICAgc2hvd0NvbHVtbjogYm9vbGVhbjtcclxuICAgIGlzTWFuZGF0b3J5OiBib29sZWFuO1xyXG4gICAgaXNWaXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWRyYWctYW5kLWRyb3AtbGlzdCcsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vZHJhZy1hbmQtZHJvcC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICAgIHN0eWxlVXJsczogWycuL2RyYWctYW5kLWRyb3AtbGlzdC5jb21wb25lbnQuc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRGb3JtRmllbGRNb2R1bGUsIE1hdElucHV0TW9kdWxlLCBOZ1N0eWxlLCBGb3Jtc01vZHVsZSwgTWF0Q2hlY2tib3hNb2R1bGUsIENka0Ryb3BMaXN0R3JvdXAsIENka0Ryb3BMaXN0LCBDZGtEcmFnLCBDb21tb25Nb2R1bGUsIENlZUxhYmVsQ29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgRHJhZ0FuZERyb3BMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3kge1xyXG5cclxuICAgIGF1dG9QcmV2aWV3Q29uZmlnUGF0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdFTkFCTEVfQVVUT19QUkVWSUVXJyk/LnRvTG93ZXJDYXNlKCkgPT0gXCJ0cnVlXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FVVE9fUFJFVklFV19DT05GSUdfUEFUSCcpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FVVE9fUFJFVklFV19DT05GSUdfUEFUSCcpIDogJ2Fzc2V0cy9jb25maWcnO1xyXG4gICAgY29uZmlnQmxvY2tQYXRoID0gdGhpcy5hdXRvUHJldmlld0NvbmZpZ1BhdGggKyAnL2FwcGxpY2F0aW9uX2Jsb2Nrcy9hcHBsaWNhdGlvbl9ibG9ja3NfJztcclxuXHJcbiAgICBASW5wdXQoKSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgc3RlcElkOiBhbnk7XHJcbiAgICBASW5wdXQoKSB0eXBlOiBzdHJpbmc7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcblxyXG4gICAgcHJpbWFyeUtleVZhbCA9ICcnO1xyXG4gICAgc3RhdHVzS2V5ID0gJyc7XHJcblxyXG4gICAgYXBwRGF0YTogQXBwRGF0YSA9IHtcclxuICAgICAgICBpZDogJycsXHJcbiAgICAgICAgc3RlcElkOiAnJyxcclxuICAgICAgICBhcGlLZXk6ICcnLFxyXG4gICAgICAgIGZpZWxkTGFiZWw6ICcnLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlcXVlc3RBcGlLZXk6IFtdLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgICAgICBkYXRhRm9ybWF0U2VwYXJhdG9yOiAnJyxcclxuICAgICAgICBtYW5kYXRvcnk6IGZhbHNlLFxyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB2aXNpYmxlOiBmYWxzZSxcclxuICAgICAgICB2YWx1ZTogJycsXHJcbiAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgfTtcclxuXHJcbiAgICBhZGRpdGlvbmFsUGFyYW1ldGVycyA9IHt9O1xyXG5cclxuICAgIHNldEFQSUtleVV0aWw6IFNldEFQSUNhbGxiYWNrRGF0YTtcclxuICAgIGV2ZW50TGlzdEhhbmRsZXI6IFdGRUV2ZW50TGlzdEhhbmRsZXI7XHJcbiAgICBhcGlLZXlVdGlsOiBBUElLZXlVdGlsO1xyXG4gICAgLy8gYXBpU3Vic2NyaXB0aW9uOiBTdWJzY3JpcHRpb247XHJcbiAgICB2YXJpYWJsZU9iaiA9IHt9O1xyXG4gICAgY29uZGl0aW9uYWxVdGlsOiBDb25kaXRpb25hbFV0aWw7XHJcbiAgICBpc19ib290c3RyYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGJsb2NrUmVuZGVyZWREYXRhOiBhbnk7XHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG4gICAgaXNWaXNpYmxlID0gZmFsc2U7XHJcbiAgICBmaWVsZFZhbHVlOiBhbnk7XHJcblxyXG4gICAgc2V0RHluYW1pY0xhYmVsVXRpbDogRHluYW1pY0xhYmVsVXRpbDtcclxuICAgIGh0bWxfaWQ6IGFueSA9ICcnO1xyXG4gICAgc3RhdHVzTGlzdDogU3RhdHVzVHlwZVtdID0gW107XHJcbiAgICBkaXNwbGF5RGF0YTogYW55ID0ge307XHJcbiAgICBmaWVsZElkTWFwQXBpS2V5OiBvYmplY3QgPSB7fTsgLy8gdG8gbWFwIHRoZSBhcGkgZmllbGQgaWQgYW5kIHRoZSBhcGkga2V5IG9mIGEgc2luZ2xlIGZpZWxkXHJcblxyXG4gICAgY29sdW1uRmlsdGVyVHlwZTogc3RyaW5nW10gPSBbJ25vbmUnXTtcclxuICAgIGNvbHVtblNob3dIaWRlUmVhcnJhbmdlID0gW107XHJcbiAgICBmaWVsZERhdGFCYWNrID0gW107XHJcbiAgICBmaWx0ZXJFcnJvck1zZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJpdmF0ZSBzaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwcml2YXRlIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwcml2YXRlIGh0dHA6IEh0dHBDbGllbnQsXHJcbiAgICAgICAgcHJpdmF0ZSBjZFJlZjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICAgICAgcHVibGljIHJvdXRlcjogUm91dGVyKSB7XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNldEFQSUtleVV0aWwgPSBuZXcgU2V0QVBJQ2FsbGJhY2tEYXRhKGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwgPSBuZXcgRHluYW1pY0xhYmVsVXRpbChhcGlEYXRhU2VydmljZSwgYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxVdGlsID0gbmV3IENvbmRpdGlvbmFsVXRpbChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaXNTaW5nbGVDb25kaXRpb24nKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlciA9IG5ldyBXRkVFdmVudExpc3RIYW5kbGVyKFxyXG4gICAgICAgICAgICBjZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgICAgICByb3V0ZXIsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlLFxyXG4gICAgICAgICAgICBpbnRlcm5hbENFRUVtaXR0ZXIsXHJcbiAgICAgICAgICAgIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgYXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGRpYWxvZyxcclxuICAgICAgICAgICAgc25hY2tCYXIsXHJcbiAgICAgICAgICAgIGh0dHApO1xyXG4gICAgICAgIHRoaXMuY29tbW9uVXRpbCA9IG5ldyBDb21tb25VdGlsKCk7XHJcbiAgICAgICAgdGhpcy5hcGlLZXlVdGlsID0gbmV3IEFQSUtleVV0aWwoKTtcclxuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzX2Jvb3RzdHJhcCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5pc19ib290c3RyYXAgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgICAgICAgICAnZW1pdE9uQXBwbHlSZWFycmFuZ2VCdG5DbGlja2VkXycgKyB0aGlzLmh0bWxfaWRdID1cclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0T25BcHBseVJlYXJyYW5nZUJ0bkNsaWNrZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMgJiYgcmVzLmludm9rZV9ldmVudF9jb25maWcgJiYgcmVzLmludm9rZV9ldmVudF9jb25maWcuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHRhYmxlSWQgPSByZXMuaW52b2tlX2V2ZW50X2NvbmZpZy5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmlsdGVyKGZ1bmN0aW9uIChlbCkgeyByZXR1cm4gZWwucGFyYW1ldGVyX3R5cGUgPT0gJ0NFRV9UQUJMRV9JRCcgfSkubGVuZ3RoID4gMCA/IHJlcy5pbnZva2VfZXZlbnRfY29uZmlnLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZnVuY3Rpb24gKGVsKSB7IHJldHVybiBlbC5wYXJhbWV0ZXJfdHlwZSA9PSAnQ0VFX1RBQkxFX0lEJyB9KVswXS52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRhYmxlSWQgJiYgdGFibGVJZCA9PSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFJlc3RydWN0dXJpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5UmVzdHJ1Y3R1cmluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2RSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5odG1sX2lkID0gdGhpcy5maWVsZERhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgIGxldCBmcm9tU3RvcmU7XHJcbiAgICAgICAgY29uc3Qge1xyXG4gICAgICAgICAgICBhZGRpdGlvbmFsX3BhcmFtZXRlcnMsXHJcbiAgICAgICAgICAgIGV2ZW50X2xpc3RcclxuICAgICAgICB9ID0gdGhpcy5maWVsZERhdGE7XHJcblxyXG4gICAgICAgIGlmIChhZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIGFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1twYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdDRUVfY29sdW1uX2ZpbHRlcl90eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5GaWx0ZXJUeXBlID0gcGFyYW10ZXIudmFsdWUgPyBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfCcpIDogWydub25lJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1ByaW1hcnlLZXlOYW1lJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wcmltYXJ5S2V5VmFsID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NFRV9TVEFUVVNfS0VZJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0dXNLZXkgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIE1lYW5zIGl0IGlzIGEgZmllbGQgbm90IGEgc2VjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmh0bWxfaWQpIHtcclxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZEJsb2NrQnlOYW1lKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2RlZmF1bHRfdmFsdWUnXSkudG9Qcm9taXNlKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGRhdGEpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5maWVsZHMgPSB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcztcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGlmIHRoZSBERCBoYXMgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhbGwgZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKHRoaXMuY29tbW9uVXRpbC5nZXRIYW5kbGVyTmFtZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10pKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsQXBpT3B0aW9uVmFsdWUgPSBkYXRhID8gdGhpcy5nZXRFeHRlcm5hbEFwaU9wdGlvblZhbHVlKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSwgZGF0YVsndmFsdWUnXSkgOiBudWxsO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRFeHRlcm5hbEFwaU9wdGlvblZhbHVlOiBcIiwgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSk7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgIGlmIChleHRlcm5hbEFwaU9wdGlvblZhbHVlICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJmaWVsZERhdGEgcG9zc2libGVfdmFsdWVzOiBcIiwgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1NvbWV0aGluZyBXZW50IFdyb25nIGluIFBpY2tlciAhISEnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMucHJvY2Vzc1Bvc3NpYmxlVmFsdWVzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlSZXN0cnVjdHVyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnJldHVybkZpZWxkSWRNYXBBcGlLZXkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vZmV0Y2ggZGF0YSBmcm9tIGFraXRhJ3MgYXBpIGRhdGFcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmlzU2luZ2xlQVBJS2V5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlLZXlzID0gdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgYXBpS2V5IG9mIGFwaUtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoYW5kbGVyRGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5SGFuZGxlcihhcGlLZXkuc3BsaXQoJyMjJylbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChoYW5kbGVyRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tU3RvcmUgPSBoYW5kbGVyRGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmpbXHJcbiAgICAgICAgICAgICAgICAnZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZV8nICtcclxuICAgICAgICAgICAgICAgIHRoaXMuaHRtbF9pZF0gPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZS5lbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiU3VjY2VzcyBSZXNwb25zZTogXCIsIHJlcylcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldExpc3REYXRhKHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIEREIGhhcyBleHRlcm5hbEFwaU9wdGlvblZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNhbGwgZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbEFwaU9wdGlvblZhbHVlID0gZGF0YSA/IHRoaXMuZ2V0RXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10sIGRhdGFbJ3ZhbHVlJ10pIDogbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJnZXRFeHRlcm5hbEFwaU9wdGlvblZhbHVlOiBcIiwgZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMgPSBleHRlcm5hbEFwaU9wdGlvblZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZmllbGREYXRhIHBvc3NpYmxlX3ZhbHVlczogXCIsIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByb2Nlc3NQb3NzaWJsZVZhbHVlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbHlSZXN0cnVjdHVyaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gUGlja2VyICEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSwgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialtcclxuICAgICAgICAgICAgICAgICdlbWl0T25EYXRhU2V0T3JVcGRhdGVkXycgKyB0aGlzLmh0bWxfaWRcclxuICAgICAgICAgICAgXSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLmFwcERhdGEsXHJcbiAgICAgICAgICAgICAgICAuLi4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcElkOiB0aGlzLnN0ZXBJZCxcclxuICAgICAgICAgICAgICAgICAgICBhcGlLZXk6IHRoaXMuaXNTaW5nbGVBUElLZXkgPyB0aGlzLmZpZWxkRGF0YS5hcGlfa2V5IDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGRMYWJlbDogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlTGFiZWxzJykgPT09ICd0cnVlJyA/IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsIDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgbGlua2VkQmxvY2tJZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXBlYXRlZEZpZWxkOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFwaUtleTogdGhpcy5pc1NpbmdsZUFQSUtleSA/IFtdIDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlQXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXModGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpLFxyXG4gICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDEgPyB0cnVlIDogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGEudmlzaWJsZSA9IHRoaXMuaXNWaXNpYmxlO1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Mb2FkJyk7XHJcbiAgICAgICAgLy8gc2V0IHN0ZXAgaWRcclxuICAgICAgICB0aGlzLmFwcERhdGEuc3RlcElkID0gdGhpcy5zdGVwSWQ7XHJcblxyXG4gICAgICAgIC8vIGNhbGwgdGhlIGFwaSBldmVudCBzdWNjZXNzIGVtaXR0ZXJcclxuICAgICAgICBpZiAoZnJvbVN0b3JlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0TGlzdERhdGEoZnJvbVN0b3JlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2Vzc1Bvc3NpYmxlVmFsdWVzKCkge1xyXG4gICAgICAgIC8vIGNoZWNrIGlmIHRoZSBERCBoYXMgcG9zc2libGUgdmFsdWVzXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhICYmIHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlcyAmJiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBsZXQgaT0wO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXR1c0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBwb3NzaVZhbCBvZiB0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IF9wb3NzaVZhbCA9IHBvc3NpVmFsLnNwbGl0KCd8fCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKF9wb3NzaVZhbC5sZW5ndGggPT09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXR1c0xpc3QucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX2xhYmVsOiBfcG9zc2lWYWxbMV0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogX3Bvc3NpVmFsWzBdLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogaSsrLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG93Q29sdW1uOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc01hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzVmlzaWJsZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGFCYWNrID0gdGhpcy5zdGF0dXNMaXN0O1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uSW5pdCA+PiBzdGF0dXNMaXN0OiBcIix0aGlzLnN0YXR1c0xpc3QpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ29sdW1uQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldEV4dGVybmFsQXBpT3B0aW9uVmFsdWUodmFsdWU6IHN0cmluZywgZGF0YSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnfHwnKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUFwaWtleXMgPSB2YWx1ZS5zcGxpdCgnfHwnKS5tYXAoc3RyID0+IHN0ci50cmltKCkpO1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZURhdGEgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHZhbHVlQXBpa2V5c1swXSwgZGF0YSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsRGF0YSA9IHRoaXMuc2V0QVBJS2V5VXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodmFsdWVBcGlrZXlzWzFdLCBkYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2YWx1ZURhdGE6IFwiLHZhbHVlRGF0YSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibGFiZWxEYXRhOiBcIixsYWJlbERhdGEpO1xyXG4gICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZURhdGEpICYmIEFycmF5LmlzQXJyYXkobGFiZWxEYXRhKSAmJiB2YWx1ZURhdGEubGVuZ3RoID09PSBsYWJlbERhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcHRpb25WYWx1ZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IHYgPSAwOyB2IDwgdmFsdWVEYXRhLmxlbmd0aDsgdisrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uVmFsdWVzLnB1c2godmFsdWVEYXRhW3ZdICsgJ3x8JyArIGxhYmVsRGF0YVt2XSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9wdGlvblZhbHVlczogXCIsb3B0aW9uVmFsdWVzKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcHRpb25WYWx1ZXM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHZhbHVlLCBkYXRhKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29sdW1uQ29uZmlnKCkge1xyXG4gICAgICAgIGxldCBzZXR0aW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbHVtblJzdHJ1Y3R1cmluZ0NvbmZpZycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sdW1uUnN0cnVjdHVyaW5nQ29uZmlnJykpIDoge307XHJcbiAgICAgICAgaWYoc2V0dGluZyAmJiBzZXR0aW5nLmhhc093blByb3BlcnR5KHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5TaG93SGlkZVJlYXJyYW5nZSA9IHNldHRpbmdbdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlID0gW107XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UgPSB0aGlzLnN0YXR1c0xpc3Q7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlQ29sdW1uQ29uZmlnID4+IGNvbHVtblNob3dIaWRlUmVhcnJhbmdlOiBcIix0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlKVxyXG4gICAgfVxyXG5cclxuICAgIGRyb3BGaWx0ZXJJdGVtKGV2ZW50OiBDZGtEcmFnRHJvcDxzdHJpbmdbXT4pIHtcclxuICAgICAgICBpZih0aGlzLmNvbHVtbkZpbHRlclR5cGUuaW5kZXhPZigncmVhcnJhbmdlJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgbW92ZUl0ZW1JbkFycmF5KHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UsIGV2ZW50LnByZXZpb3VzSW5kZXgsIGV2ZW50LmN1cnJlbnRJbmRleCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0UmVzdHJ1Y3R1cmluZyhoaWRlU2VhcmNoRmxhZz10cnVlKSB7XHJcbiAgICAgICAgbGV0IHNldHRpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sdW1uUnN0cnVjdHVyaW5nQ29uZmlnJykgPyBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnKSkgOiB7fTtcclxuICAgICAgICBpZihzZXR0aW5nICYmIHNldHRpbmcuaGFzT3duUHJvcGVydHkodGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlID0gc2V0dGluZ1t0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZih0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlLmZpbHRlcihjPT4gYy5zaG93Q29sdW1uID09IHRydWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFcnJvck1zZyA9IFwiXCI7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwicmVzZXRSZXN0cnVjdHVyaW5nID4+IGNvbHVtblNob3dIaWRlUmVhcnJhbmdlOiBcIix0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlKVxyXG4gICAgICAgIGlmKGhpZGVTZWFyY2hGbGFnKXtcclxuICAgICAgICAgICAgdGhpcy5zaG93SGlkZUZpbHRlcignc2hvdy1oaWRlLWRkLWNvbnRhaW5lci0nLHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlSZXN0cnVjdHVyaW5nKGhpZGVTZWFyY2hGbGFnPXRydWUpIHtcclxuICAgICAgICBpZih0aGlzLmNvbHVtblNob3dIaWRlUmVhcnJhbmdlLmZpbHRlcihjPT4gYy5zaG93Q29sdW1uID09IHRydWUpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maWx0ZXJFcnJvck1zZyA9IFwiXCI7XHJcbiAgICAgICAgICAgIGxldCBzZXR0aW5nID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NvbHVtblJzdHJ1Y3R1cmluZ0NvbmZpZycpID8gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY29sdW1uUnN0cnVjdHVyaW5nQ29uZmlnJykpIDoge307XHJcbiAgICAgICAgICAgIHNldHRpbmdbdGhpcy5maWVsZERhdGEudW5pcXVlX2lkXSA9IHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2U7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjb2x1bW5Sc3RydWN0dXJpbmdDb25maWcnLEpTT04uc3RyaW5naWZ5KHNldHRpbmcpKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcHBseVJlc3RydWN0dXJpbmcgPj4gc2V0dGluZzogXCIsc2V0dGluZylcclxuICAgICAgICAgICAgbGV0IHNlbGVjdGVkQ29scyA9IHRoaXMuY29sdW1uU2hvd0hpZGVSZWFycmFuZ2UuZmlsdGVyKGM9PiBjLnNob3dDb2x1bW4gPT0gdHJ1ZSkubWFwKGVsZT0+ZWxlLnVuaXF1ZV9pZClcclxuICAgICAgICAgICAgbGV0IHJlc3R1Y3R1ZWRDb2xBcnIgPSBbXTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhcHBseVJlc3RydWN0dXJpbmcgPj4gc2VsZWN0ZWRDb2xzOiBcIixzZWxlY3RlZENvbHMpXHJcbiAgICAgICAgICAgIHNlbGVjdGVkQ29scy5mb3JFYWNoKHM9PntcclxuICAgICAgICAgICAgICAgIGxldCB0ZW1wRmllbGREYXRhID0gdGhpcy5maWVsZERhdGFCYWNrLmZpbHRlcihlbGU9PmVsZS51bmlxdWVfaWQgPT0gcyk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImFwcGx5UmVzdHJ1Y3R1cmluZyA+PiB0ZW1wRmllbGREYXRhOiBcIix0ZW1wRmllbGREYXRhKVxyXG4gICAgICAgICAgICAgICAgaWYodGVtcEZpZWxkRGF0YSAmJiB0ZW1wRmllbGREYXRhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICByZXN0dWN0dWVkQ29sQXJyLnB1c2godGVtcEZpZWxkRGF0YVswXSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuc3RhdHVzTGlzdCA9IHJlc3R1Y3R1ZWRDb2xBcnI7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiYXBwbHlSZXN0cnVjdHVyaW5nID4+IHJlc3R1Y3R1ZWRDb2xBcnI6IFwiLHJlc3R1Y3R1ZWRDb2xBcnIpXHJcbiAgICAgICAgICAgIC8vIHRoaXMubmdPbkluaXQoKTtcclxuICAgICAgICAgICAgaWYoaGlkZVNlYXJjaEZsYWcpe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93SGlkZUZpbHRlcignc2hvdy1oaWRlLWRkLWNvbnRhaW5lci0nLHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJBbGwgYXBwbHlSZXN0cnVjdHVyaW5nIFByb2Nlc3MgRG9uZSFcIilcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpbHRlckVycm9yTXNnID0gXCJQbGVhc2Ugc2VsZWN0IGF0bGVhc3Qgb25lIGNvbHVtbiFcIlxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzaG93SGlkZUZpbHRlcihzdHJpbmcsaWQpIHtcclxuICAgICAgICBsZXQgY29udGFpbmVySWQgPSBzdHJpbmcgKyBpZDtcclxuICAgICAgICBpZighZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmNsYXNzTGlzdC5jb250YWlucygnZC1ub25lJykpIHtcclxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoY29udGFpbmVySWQpLmNsYXNzTGlzdC5yZW1vdmUoJ2Qtbm9uZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklkKS5jbGFzc0xpc3QuYWRkKCdkLW5vbmUnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRMaXN0RGF0YShyZXM6YW55W10pIHtcclxuICAgICAgICBjb25zdCByZXN1bHQgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCByZXMpO1xyXG4gICAgICAgIGlmICh0aGlzLnN0YXR1c0tleSAmJiByZXN1bHQgJiYgcmVzdWx0Lmxlbmd0aCA+IDApIHsgICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5RGF0YSA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHJvdyBvZiByZXN1bHQuZmlsdGVyKHIgPT4gci5oYXNPd25Qcm9wZXJ0eSh0aGlzLnN0YXR1c0tleSkpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuZGlzcGxheURhdGEuaGFzT3duUHJvcGVydHkocm93W3RoaXMuc3RhdHVzS2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhW3Jvd1t0aGlzLnN0YXR1c0tleV1dID0gW107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhW3Jvd1t0aGlzLnN0YXR1c0tleV1dLnB1c2gocm93KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLmRpc3BsYXlEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gdGhpcy5zZXRGaWVsZFByb3BlcnRpZXModGhpcy5kaXNwbGF5RGF0YVtrZXldKTsgLy8gZnVuY3Rpb24gdGhhdCBzZXRzIHNpbmdsZSBwcm9wZXJ0aWVzXHJcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BsYXlEYXRhW2tleV0gPSBwcm9wZXJ0aWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb25GaWVsZERhdGFVcGRhdGVkKGZpZWxkSWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG5cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZGlzcGxheSA9PT0gMikge1xyXG4gICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KHRoaXMuZmllbGREYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNWaXNpYmxlID0gdmlzaWJsZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyB1cGRhdGUgdGhlIHN0YXRlIG9mIHRoZSByZXBlYXRhYmxlIGJsb2NrIGlmIHJlcXVpcmVkXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB0cmlnZ2VyIGV2ZW50IGlmIHRoZXJlIGhhcyBiZWVuIGFuIGV2ZW50IHRyaWdnZXJlZCBvbiB0aGUgbGlzdFxyXG4gICAgICogQHBhcmFtIG5hbWUgdGhlIG5hbWUgb2YgdGhlIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIG9uQ29tcG9uZW50RXZlbnQobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgLy8gbm90IGEgbGlzdCB0aGF0IGlzIGRlY2xhcmVkIGFzIGEgc2VjdGlvblxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YSAmJiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhICYmIHRoaXMuZmllbGREYXRhLmV2ZW50X2xpc3QgJiYgdGhpcy5maWVsZERhdGEuZXZlbnRfbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5maWVsZERhdGEuZXZlbnRfbGlzdCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50ICYmIGV2ZW50LmlzRGVmYXVsdCAmJiBldmVudC5ldmVudF9uYW1lICYmIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCB0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZ2V0dGVyIHNldHRlciBnb2VzIGhlcmVcclxuICAgIGdldCBpc1NpbmdsZUFQSUtleSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpbmdsZUFwaUtleScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiB1bnN1YnNjcmliZSBhbGwgdGhlIHN1YnNjcmlwdGlvbnMgb24gbmdEZXN0cm95XHJcbiAgICAgKi9cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmopIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmpba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9ialtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZHJvcChldmVudDogQ2RrRHJhZ0Ryb3A8c3RyaW5nW10+KSB7XHJcbiAgICAgICAgLy8gdG8gY2hlY2sgaXMgY29uZmlybSBwb3B1cCBuZWVkZWQgd2hpbGUgZHJvcFxyXG4gICAgICAgIGlmKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0NFRV9EUkFHX1NIT1dfQ09ORklSTV9NT0RBTCddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcnNbJ0NFRV9EUkFHX1NIT1dfQ09ORklSTV9NT0RBTCddID09PSAndHJ1ZScpe1xyXG4gICAgICAgICAgICBjb25zdCBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0TW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJzWydDRUVfRFJBR19TSE9XX0NPTkZJUk1fTU9EQUxfTUVTU0FHRSddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyc1snQ0VFX0RSQUdfU0hPV19DT05GSVJNX01PREFMX01FU1NBR0UnXSA6ICdEbyB5b3Ugd2FudCB0byBwcm9jZWVkPycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IFwiIFwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBkaWFsb2dSZWYuYWZ0ZXJDbG9zZWQoKS5zdWJzY3JpYmUocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQpIHtcclxuICAgICAgICAgICAgICAgICAgLy8gSWYgdXNlciBjb25maXJtcyB0aGUgZHJvcCwgcHJvY2VlZCB3aXRoIHJlb3JkZXJpbmcgdGhlIGl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgIHRoaXMucHJvY2VlZFRvRHJvcChldmVudCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gbm8gY29uZmlybSBwb3B1cCBuZWVkZWRcclxuICAgICAgICAgICAgdGhpcy5wcm9jZWVkVG9Ecm9wKGV2ZW50KTtcclxuICAgICAgICB9ICAgXHJcbiAgICB9XHJcblxyXG4gICAgcHJvY2VlZFRvRHJvcChldmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5wcmV2aW91c0NvbnRhaW5lciA9PT0gZXZlbnQuY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIG1vdmVJdGVtSW5BcnJheShldmVudC5jb250YWluZXIuZGF0YSwgZXZlbnQucHJldmlvdXNJbmRleCwgZXZlbnQuY3VycmVudEluZGV4KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0cmFuc2ZlckFycmF5SXRlbShcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzQ29udGFpbmVyLmRhdGEsXHJcbiAgICAgICAgICAgICAgICBldmVudC5jb250YWluZXIuZGF0YSxcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZpb3VzSW5kZXgsXHJcbiAgICAgICAgICAgICAgICBldmVudC5jdXJyZW50SW5kZXgsXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuc3RvcmVVcGRhdGVkTGlzdCgpO1xyXG4gICAgICAgIGNvbnN0IF90aGlzID0gdGhpcztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNoYW5nZScpO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICBzdG9yZVVwZGF0ZWRMaXN0KCkge1xyXG4gICAgICAgIGNvbnN0IHVwZGF0ZWRMaXN0RGF0YSA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGlzcGxheURhdGEpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCByb3cgb2YgdGhpcy5kaXNwbGF5RGF0YVtrZXldKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0Um93ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShyb3cpKTtcclxuICAgICAgICAgICAgICAgIHRSb3dbdGhpcy5zdGF0dXNLZXldID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgdXBkYXRlZExpc3REYXRhLnB1c2godFJvdylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmFwcERhdGEudmFsdWUgPSB1cGRhdGVkTGlzdERhdGE7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS5zZXRBcHBEYXRhKHRoaXMuYXBwRGF0YSk7XHJcbiAgICB9XHJcblxyXG4gICAgaXNIVE1MKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCByZWdleCA9IC8oPChbXj5dKyk+KS9pZztcclxuICAgICAgICByZXR1cm4gcmVnZXgudGVzdCh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRQcm9wZXJ0aWVzKGRpc3BsYXlWYWx1ZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRpc3BsYXlWYWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgbGV0IGRhdGEgPSBkaXNwbGF5VmFsdWVzW2ldO1xyXG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eSgnZmllbGRzJykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRhdGFbJ2ZpZWxkcyddID0gW107XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgaiBvZiB0aGlzLmZpZWxkRGF0YS5maWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaikpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkWydyb3dEYXRhJ10gPSB0aGlzLmdlbmVyYXRlUm93RGF0YShmaWVsZCwgZGF0YSwgaSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsnZmllbGRzJ10ucHVzaChmaWVsZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGRpc3BsYXlWYWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm5zIHRoZSByb3cgZGF0YSBvbiB0aGUgYmFzaXMgb2YgdGhlIHR5cGUgb2YgdGhlIGxpc3QgYW5kIHRoZSBlZGl0YWJsZSBhbmQgdmlzaWJsZSBjb25kaXRpb25zXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgdGhlIGNlZSBmaWVsZCBvYmplY3RcclxuICAgICAqIEBwYXJhbSBkYXRhIHRoZSBhcGkgcmVzcG9uc2UgZGF0YSBvYmplY3RcclxuICAgICAqL1xyXG4gICAgZ2VuZXJhdGVSb3dEYXRhKGZpZWxkLCBkYXRhLCBsaXN0X3BvcywgZXhwYW5kYWJsZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IGFwaURhdGEgPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGZpZWxkLCBkYXRhKTtcclxuICAgICAgICBleHBhbmRhYmxlICYmIGFwaURhdGEgJiYgKGRhdGFbJ2hhc0V4cGFuZGFibGVEYXRhJ10gPSB0cnVlKTtcclxuICAgICAgICBsZXQgbGFiZWxUeXBlID0gJyc7XHJcbiAgICAgICAgaWYgKGZpZWxkLmZpZWxkX3R5cGUgPT09ICdsYWJlbCcpIHtcclxuICAgICAgICAgICAgbGFiZWxUeXBlID0gKHRoaXMuaXNTaW5nbGVBUElLZXkgPyBmaWVsZC5hcGlfa2V5IDogZmllbGQucmVzcG9uc2VfYXBpX2tleSkgPyAnJyA6ICdTVEFUSUMnO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBpZiAoZmllbGQuZmllbGRfdHlwZSA9PT0gJ0xpbmsnKSB7XHJcbiAgICAgICAgLy8gICAgIGFwaURhdGEgPSBkYXRhO1xyXG4gICAgICAgIC8vIH1cclxuICAgICAgICBsZXQgb2JqO1xyXG4gICAgICAgIGxldCBpc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICAgICAgbGV0IGlzVmlzaWJsZSA9IGZhbHNlO1xyXG4gICAgICAgIGlmIChmaWVsZC5pc19lZGl0YWJsZSA9PT0gMSkge1xyXG4gICAgICAgICAgICBpc0VkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChmaWVsZC5pc19kaXNwbGF5ID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHJlc0RhdGEgPSB7fVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBkYXRhW2tleV0gPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICByZXNEYXRhW2tleV0gPSBkYXRhW2tleV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCAmJiAoZmllbGQuaXNfZGlzcGxheSA9PT0gMiB8fCBmaWVsZC5pc19lZGl0YWJsZSA9PT0gMikpIHtcclxuICAgICAgICAgICAgY29uc3QgdWlBcGlWYWx1ZSA9IHRoaXMucmV0dXJuVW5pcXVlSWRNYXBBcGlWYWx1ZShkYXRhKTtcclxuICAgICAgICAgICAgb2JqID0ge1xyXG4gICAgICAgICAgICAgICAgdW5pcXVlX2lkOiBmaWVsZC51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICBodG1sX2lkOiB0aGlzLmh0bWxfaWQgKyAnLScgKyBmaWVsZC51bmlxdWVfaWQgKyAnLScgKyBsaXN0X3BvcyxcclxuICAgICAgICAgICAgICAgIGZyb21GaWVsZDogJ0xpc3QnLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogZmllbGQuaXNfZGlzcGxheSA9PT0gMiA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25kaXRpb25hbFZpc2libGUodWlBcGlWYWx1ZSwgaXNWaXNpYmxlLCBmaWVsZCkgOiBpc1Zpc2libGUsXHJcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogZmllbGQuaXNfZWRpdGFibGUgPT09IDIgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0Q29uZGl0aW9uYWxFZGl0YWJsZSh1aUFwaVZhbHVlLCBpc0VkaXRhYmxlLCBmaWVsZCkgOiBpc0VkaXRhYmxlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IChmaWVsZCAmJiBmaWVsZC5maWVsZF90eXBlICYmICgoZmllbGQuZmllbGRfdHlwZSA9PT0gJ2xhYmVsJyAmJiBmaWVsZC5maWVsZF9sYWJlbCAmJiBmaWVsZC5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoZmllbGQuZmllbGRfbGFiZWxfY29uZmlnICYmIGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZy5pbmNsdWRlcygnKChkeW5hbWljKSknKSkpKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZShmaWVsZCwgZGF0YSkuZmllbGRfbGFiZWwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVHlwZSA9PT0gJ1NUQVRJQycgPyBmaWVsZC5maWVsZF9sYWJlbCA6IGFwaURhdGEsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNEYXRhXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG9iaiA9IHtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZDogZmllbGQudW5pcXVlX2lkLFxyXG4gICAgICAgICAgICAgICAgaHRtbF9pZDogdGhpcy5odG1sX2lkICsgJy0nICsgZmllbGQudW5pcXVlX2lkICsgJy0nICsgbGlzdF9wb3MsXHJcbiAgICAgICAgICAgICAgICBmcm9tRmllbGQ6ICdMaXN0JyxcclxuICAgICAgICAgICAgICAgIHZpc2libGU6IGlzVmlzaWJsZSxcclxuICAgICAgICAgICAgICAgIGVkaXRhYmxlOiBpc0VkaXRhYmxlLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IChmaWVsZCAmJiBmaWVsZC5maWVsZF90eXBlICYmICgoZmllbGQuZmllbGRfdHlwZSA9PT0gJ2xhYmVsJyAmJiBmaWVsZC5maWVsZF9sYWJlbCAmJiBmaWVsZC5maWVsZF9sYWJlbC5pbmNsdWRlcygnKChkeW5hbWljKSknKSkgfHxcclxuICAgICAgICAgICAgICAgICAgICAoZmllbGQuZmllbGRfbGFiZWxfY29uZmlnICYmIGZpZWxkLmZpZWxkX2xhYmVsX2NvbmZpZy5pbmNsdWRlcygnKChkeW5hbWljKSknKSkpKSA/XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZShmaWVsZCwgZGF0YSkuZmllbGRfbGFiZWwgOlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsVHlwZSA9PT0gJ1NUQVRJQycgPyBmaWVsZC5maWVsZF9sYWJlbCA6IGFwaURhdGEsXHJcbiAgICAgICAgICAgICAgICBkYXRhOiByZXNEYXRhXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiByZXR1cm4gdGhlIHZpc2libGUgY29uZGl0aW9uXHJcbiAgICAgKiBAcGFyYW0gZGF0YSBhcGkgcmVzcG9uc2Ugb2JqZWN0XHJcbiAgICAgKiBAcGFyYW0gcHJlc2VudFZhbHVlIHByZXNlbnQgdmFsdWUgb2YgdGhlIGZpZWxkXHJcbiAgICAgKiBAcGFyYW0gZmllbGQgdGhlIGZpZWxkIHByb3BlcnR5IG9iamVjdFxyXG4gICAgICovXHJcbiAgICBnZXRDb25kaXRpb25hbFZpc2libGUoZGF0YSwgcHJlc2VudFZhbHVlLCBmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IHZpc2liaWxpdHlDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkoZmllbGQsIGZpZWxkLnVuaXF1ZV9pZCwgJycsIGRhdGEpO1xyXG4gICAgICAgIGlmICh2aXNpYmlsaXR5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2aXNpYmlsaXR5Q29uZGl0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcHJlc2VudFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogcmV0dXJuIHRoZSBlZGl0YWJsZSBjb25kaXRpb25cclxuICAgICAqIEBwYXJhbSBkYXRhIGFwaSByZXNwb25zZSBvYmplY3RcclxuICAgICAqIEBwYXJhbSBwcmVzZW50VmFsdWUgcHJlc2VudCB2YWx1ZSBvZiB0aGUgZmllbGRcclxuICAgICAqIEBwYXJhbSBmaWVsZCB0aGUgZmllbGQgcHJvcGVydHkgb2JqZWN0XHJcbiAgICAgKi9cclxuICAgIGdldENvbmRpdGlvbmFsRWRpdGFibGUoZGF0YSwgcHJlc2VudFZhbHVlLCBmaWVsZCkge1xyXG4gICAgICAgIGNvbnN0IGVkaXRhYmxlQ29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tFZGl0YWJsZShmaWVsZCwgZmllbGQudW5pcXVlX2lkLCAnJywgZGF0YSk7XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBlZGl0YWJsZUNvbmRpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHByZXNlbnRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBUT0RPOiBEZWxldGUgdGhpcyBmdW5jdGlvbiBvbmNlIHRoZSBjb25kaXRpb25hbCBzdGF0ZW1lbnRzIGRlcGVuZCBvbiB0aGUgYXBpIGtleSB0aGVuIG9ubHkgcmV0dXJuIHRoZSBzaW5nbGUgYXBpIHJlc3BvbnNlIG9ialxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIHRoZSBtYXBwaW5nIG9mIHVuaXF1ZSBpZCB0byB0aGUgYXBpIHZhbHVlXHJcbiAgICAgKiBAcGFyYW0gYXBpUmVzcG9uc2UgdGhlIHJlc3BvbnNlIG9iamVjdCBpLmUuIHRoZSBzaW5nbGUgaW5kZXggb2YgdGhlIGFycmF5XHJcbiAgICAgKi9cclxuICAgIHJldHVyblVuaXF1ZUlkTWFwQXBpVmFsdWUoYXBpUmVzcG9uc2UpIHtcclxuICAgICAgICBjb25zdCBvYmogPSB7fTtcclxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLmZpZWxkSWRNYXBBcGlLZXkpKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUlkID0gdGhpcy5maWVsZElkTWFwQXBpS2V5W2tleV07XHJcbiAgICAgICAgICAgIG9ialt1bmlxdWVJZF0gPSB0aGlzLnNldEFQSUtleVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGtleSwgYXBpUmVzcG9uc2UpID8gdGhpcy5zZXRBUElLZXlVdGlsLnNldEFwaUNhbGxCYWNrRGF0YShrZXksIGFwaVJlc3BvbnNlKSA6ICcnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbWFwIGJldHdlZW4gZmllbGRJZCBhbmQgYXBpIGtleVxyXG4gICAgICovXHJcbiAgICByZXR1cm5GaWVsZElkTWFwQXBpS2V5KCkge1xyXG4gICAgICAgIGNvbnN0IG9iaiA9IHt9O1xyXG4gICAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgdGhpcy5maWVsZERhdGEuZmllbGRzKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmV0dXJuRmllbGRJZE1hcEFwaUtleVZhbHVlKG9iaiwgZmllbGQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmZpZWxkSWRNYXBBcGlLZXkgPSBvYmo7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW5uZXIgZnVuY3Rpb24gb2YgcmV0dXJuRmllbGRJZE1hcEFwaUtleVxyXG4gICAgcHJpdmF0ZSByZXR1cm5GaWVsZElkTWFwQXBpS2V5VmFsdWUob2JqLCBmaWVsZCkge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1NpbmdsZUFQSUtleSAmJiBmaWVsZC5yZXNwb25zZV9hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgIGlmIChmaWVsZC5yZXNwb25zZV9hcGlfa2V5LmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKGZpZWxkLnJlc3BvbnNlX2FwaV9rZXkpKTtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcclxuICAgICAgICAgICAgICAgICAgICBvYmpba2V5XSA9IGZpZWxkLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIG9ialtmaWVsZC5yZXNwb25zZV9hcGlfa2V5XSA9IGZpZWxkLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCI8bmctY29udGFpbmVyICpuZ0lmPVwiaXNWaXNpYmxlXCI+XHJcblx0PG5nLWNvbnRhaW5lciAqbmdJZj1cImZpZWxkRGF0YS5maWVsZF9sYWJlbCE9JydcIj5cclxuXHRcdDxsYWJlbCBjbGFzcz1cImZvcm0tbGFiZWxcIiAqbmdJZj1cIiFpc0hUTUwoZmllbGREYXRhLmZpZWxkX2xhYmVsKVwiPnt7ZmllbGREYXRhLmZpZWxkX2xhYmVsfX08L2xhYmVsPlxyXG5cdFx0PGxhYmVsIGNsYXNzPVwiZm9ybS1sYWJlbFwiICpuZ0lmPVwiaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIiBbaW5uZXJIVE1MXT1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiPjwvbGFiZWw+XHJcblx0PC9uZy1jb250YWluZXI+XHJcblx0PCEtLSAjIyMjIyMjIyMjIyMjIyMjIyMgU2hvdyBIaWRlICYgUmVhcnJhbmdlIENvbHVtbiBGaWx0ZXIgIyMjIyMjIyMjIyMjIyMjIyMjIyMgLS0+XHJcbiAgICA8ZGl2PjxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuIGJ0bi1zZWNvbmRhcnkgYnRuLXNtIG1iLTFcIiB0aXRsZT1cIkNvbHVtbiBGaWx0ZXJcIiAqbmdJZj1cImNvbHVtbkZpbHRlclR5cGUuaW5kZXhPZignbm9uZScpID09IC0xXCIgKGNsaWNrKT1cInNob3dIaWRlRmlsdGVyKCdzaG93LWhpZGUtZGQtY29udGFpbmVyLScsZmllbGREYXRhLnVuaXF1ZV9pZClcIj7imLA8L2J1dHRvbj48L2Rpdj5cclxuICAgIDxkaXYgaWQ9XCJzaG93LWhpZGUtZGQtY29udGFpbmVyLXt7ZmllbGREYXRhLnVuaXF1ZV9pZH19XCIgY2xhc3M9XCJzaG93LWhpZGUtZGQtY29udGFpbmVyIGNvbC0zIG10LTIwIGQtbm9uZVwiICpuZ0lmPVwiY29sdW1uRmlsdGVyVHlwZS5pbmRleE9mKCdub25lJykgPT0gLTFcIj5cclxuICAgICAgICA8ZGl2PjxsYWJlbCAqbmdJZj1cImZpZWxkRGF0YS5maWVsZF9sYWJlbFwiIGNsYXNzPVwidGV4dC1zZWNvbmRhcnkgbS0yXCI+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fSBTZXR0aW5nPC9sYWJlbD48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNka0Ryb3BMaXN0IGNsYXNzPVwiZXhhbXBsZS1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wRmlsdGVySXRlbSgkZXZlbnQpXCI+ICBcclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImV4YW1wbGUtYm94XCIgW25nQ2xhc3NdPVwieydkLW5vbmUnOiAhY29sdW1uU2hvd0hpZGVSZWFycmFuZ2VbaV0uaXNWaXNpYmxlfVwiICpuZ0Zvcj1cImxldCBmIG9mIGNvbHVtblNob3dIaWRlUmVhcnJhbmdlOyBsZXQgaSA9IGluZGV4XCIgY2RrRHJhZz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3LTEwMCBkcmFnLWNvbnRlbnRcIiAqbmdJZj1cImNvbHVtbkZpbHRlclR5cGUuaW5kZXhPZignc2hvd2hpZGUnKSAhPSAtMVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxtYXQtY2hlY2tib3ggWyhuZ01vZGVsKV09XCJjb2x1bW5TaG93SGlkZVJlYXJyYW5nZVtpXS5zaG93Q29sdW1uXCIgW2Rpc2FibGVkXT1cImNvbHVtblNob3dIaWRlUmVhcnJhbmdlW2ldLmlzTWFuZGF0b3J5XCI+e3tmLmZpZWxkX2xhYmVsfX08L21hdC1jaGVja2JveD4gIFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidy0xMDAgZHJhZy1jb250ZW50IHAtMVwiICpuZ0lmPVwiY29sdW1uRmlsdGVyVHlwZS5pbmRleE9mKCdzaG93aGlkZScpID09IC0xXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsPnt7Zi5maWVsZF9sYWJlbH19PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2PjxsYWJlbCAqbmdJZj1cImZpbHRlckVycm9yTXNnXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlciBtLTJcIj57e2ZpbHRlckVycm9yTXNnfX08L2xhYmVsPjwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1wcmltYXJ5IG0tMlwiIChjbGljayk9XCJyZXNldFJlc3RydWN0dXJpbmcoKVwiPkNhbmNlbDwvYnV0dG9uPlxyXG4gICAgICAgIDxidXR0b24gbWF0LWJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBtLTJcIiAoY2xpY2spPVwiYXBwbHlSZXN0cnVjdHVyaW5nKClcIj5TYXZlPC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuXHQ8ZGl2IGNka0Ryb3BMaXN0R3JvdXAgY2xhc3M9XCIge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fVwiPlxyXG5cdFx0PGRpdiAqbmdGb3I9XCJsZXQgc3RhdHVzIG9mIHN0YXR1c0xpc3Q7XCIgY2xhc3M9XCJkcmFnLWRyb3AtY29udGFpbmVyIHt7ZmllbGREYXRhLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGREYXRhLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLCBpc19ib290c3RyYXAsICcnLCBjb25kaXRpb25hbFV0aWwuZXZhbHV0ZUJvb3RzdHJhcENvbmRpdGlvbihmaWVsZERhdGEpKTonJ319XCI+XHJcblx0XHRcdDxoMiBbYXR0ci5hcmlhLWxhYmVsXT1cInN0YXR1cy5maWVsZF9sYWJlbFwiPnt7c3RhdHVzLmZpZWxkX2xhYmVsfX08L2gyPlxyXG5cdFx0XHQ8bmctY29udGFpbmVyICpuZ0lmPVwiZGlzcGxheURhdGEuaGFzT3duUHJvcGVydHkoc3RhdHVzLnVuaXF1ZV9pZClcIj5cclxuXHRcdFx0XHQ8ZGl2IGNka0Ryb3BMaXN0IFtjZGtEcm9wTGlzdERhdGFdPVwiZGlzcGxheURhdGFbc3RhdHVzLnVuaXF1ZV9pZF1cIiBjbGFzcz1cImRyYWctZHJvcC1saXN0XCIgKGNka0Ryb3BMaXN0RHJvcHBlZCk9XCJkcm9wKCRldmVudClcIj5cclxuXHRcdFx0XHRcdDxkaXYgKm5nRm9yPVwibGV0IGl0ZW0gb2YgZGlzcGxheURhdGFbc3RhdHVzLnVuaXF1ZV9pZF07IGluZGV4IGFzIHBvc1wiIGNsYXNzPVwiZHJhZy1kcm9wLWJveFwiIGNka0RyYWc+XHJcblx0XHRcdFx0XHRcdDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGl0ZW0uZmllbGRzOyBpbmRleCBhcyBwb3NpdGlvblwiPlxyXG5cdFx0XHRcdFx0XHRcdDxuZy10ZW1wbGF0ZVxyXG5cdFx0XHRcdFx0XHRcdCpuZ1RlbXBsYXRlT3V0bGV0PVwiY2VsbERhdGE7IGNvbnRleHQ6e2ZpZWxkOmZpZWxkLCBkYXRhOml0ZW0sIHBvczpwb3MsIHBvc2l0aW9uOnBvc2l0aW9ufVwiPlxyXG5cdFx0XHRcdFx0XHRcdDwvbmctdGVtcGxhdGU+XHJcblx0XHRcdFx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdFx0PC9kaXY+XHJcblx0XHRcdDwvbmctY29udGFpbmVyPlxyXG5cdFx0PC9kaXY+XHJcblx0PC9kaXY+XHJcbjwvbmctY29udGFpbmVyPlxyXG5cclxuPG5nLXRlbXBsYXRlICNjZWxsRGF0YSBsZXQtZmllbGQ9XCJmaWVsZFwiIGxldC1kYXRhPVwiZGF0YVwiIGxldC1wb3M9XCJwb3NcIiBsZXQtcG9zaXRpb249XCJwb3NpdGlvblwiPlxyXG5cdDxuZy1jb250YWluZXIgW25nU3dpdGNoXT1cImZpZWxkLmZpZWxkX3R5cGVcIj5cclxuXHRcdDxuZy1jb250YWluZXIgKm5nU3dpdGNoQ2FzZT1cIidsYWJlbCdcIj5cclxuXHRcdFx0PGFwcC1jZWUtbGFiZWwgW3N0ZXBJZF09XCJzdGVwSWRcIiBbcm93RGF0YV09XCJmaWVsZFsncm93RGF0YSddXCIgW2ZpZWxkRGF0YV09XCJmaWVsZFwiXHJcblx0XHRcdFx0Y2xhc3M9XCJmaWVsZC17eyBwb3NpdGlvbiB9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcblx0XHRcdFx0W3ByaW1hcnlLZXlJbmRleF09XCJ7bmFtZTogcHJpbWFyeUtleVZhbCwgdmFsdWU6IGRhdGFbcHJpbWFyeUtleVZhbF0sIHR5cGU6ICdsaXN0JywgY2VsbERhdGE6IGRhdGF9XCI+XHJcblx0XHRcdDwvYXBwLWNlZS1sYWJlbD5cclxuXHRcdDwvbmctY29udGFpbmVyPlxyXG5cdDwvbmctY29udGFpbmVyPlxyXG48L25nLXRlbXBsYXRlPiJdfQ==