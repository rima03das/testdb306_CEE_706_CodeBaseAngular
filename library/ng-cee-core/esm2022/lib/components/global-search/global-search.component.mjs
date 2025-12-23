import { Component, ViewChild, HostListener, Input, forwardRef } from '@angular/core';
import { TemplatePortal } from '@angular/cdk/portal';
import { CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ConditionalUtil } from '../../utils/wfe-conditional-util';
import { CommonUtil } from '../../utils/common-util';
import { GenerateFieldRow } from '../../utils/generate-field-util';
import { ViewRendererComponent } from '../view-renderer/view-renderer.component';
// import { CeeAttachmentsComponent } from '../../field-components/cee-attachments/cee-attachments.component';
import { debounceTime, filter, Subject, takeUntil, fromEvent } from 'rxjs';
import { ProgressBarRendererComponent } from '../progress-bar-renderer/progress-bar-renderer.component';
import { BlockRendererComponent } from '../../ng-cee-core.module';
import { NavigationEnd, NavigationStart } from '@angular/router';
import { WfeEncryptionUtil } from '../../utils/wfe-encryption-util';
import { CalculationUtil } from '../../utils/calculation';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { WFEEventListHandler } from '../../utils/wfe-event-list-handler-util';
import { APIKeyUtil } from '../../utils/api-key-util';
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
import * as i12 from "@angular/cdk/overlay";
import * as i13 from "../../services/file-upload-service.service";
import * as i14 from "@angular/common";
import * as i15 from "@angular/forms";
const _c0 = ["overlayTemplate"];
const _c1 = ["floatingBox"];
const _c2 = ["searchInput"];
function GlobalSearchComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelementStart(1, "div", 3)(2, "div", 4)(3, "input", 5, 1);
    i0.ɵɵtwoWayListener("ngModelChange", function GlobalSearchComponent_ng_container_0_Template_input_ngModelChange_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.searchTerm, $event) || (ctx_r1.searchTerm = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("click", function GlobalSearchComponent_ng_container_0_Template_input_click_3_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onShowOverlay()); })("keyup", function GlobalSearchComponent_ng_container_0_Template_input_keyup_3_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSearchInput($event)); });
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(5, "button", 6);
    i0.ɵɵlistener("click", function GlobalSearchComponent_ng_container_0_Template_button_click_5_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onSearchInput($event)); });
    i0.ɵɵelement(6, "i", 7);
    i0.ɵɵelementEnd()()();
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵclassMapInterpolate1("search-input ", ctx_r1.fieldData.field_style.custom_class_name, "-input");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text || "Search...");
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.searchTerm);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Search")("aria-expanded", ctx_r1.isOverlayVisible);
    i0.ɵɵadvance(2);
    i0.ɵɵclassMapInterpolate1("search-icon-btn ", ctx_r1.fieldData.field_style.custom_class_name, "-btn");
} }
function GlobalSearchComponent_ng_template_1_div_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 10);
    i0.ɵɵelement(1, "div", 11)(2, "div", 12)(3, "div", 11);
    i0.ɵɵelementEnd();
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r3 = ctx.$implicit;
    const pos_r4 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r1.blockRenderedData.block_id, "-", pos_r4, " ", field_r3.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r3.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r3)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r3)("position", pos_r4)("templateId", ctx_r1.templateId)("rootData", ctx_r1.rootData)("rowData", ctx_r1.generateRowData(field_r3))("mandatoryCondition", ctx_r1.mandatoryCondition)("editableCondition", ctx_r1.editableCondition);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_section_1_ng_container_1_Template, 2, 13, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate5("cee-block generic-block template-", ctx_r1.templateId, " block-", ctx_r1.blockRenderedData.block_id, "  block-", ctx_r1.blockPosition, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.blockRenderedData.block_id);
    i0.ɵɵproperty("ngClass", ctx_r1.blockRenderedData.block_style && ctx_r1.blockRenderedData.block_style.custom_class_name && ctx_r1.customClassCondition ? ctx_r1.blockRenderedData.block_style.custom_class_name : "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.blockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_section_1_Template, 2, 13, "section", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.blockRenderedData && ctx_r1.isVisible);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_section_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵelement(1, "app-view-renderer", 16);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const field_r5 = ctx.$implicit;
    const pos_r6 = ctx.index;
    const ctx_r1 = i0.ɵɵnextContext(5);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("app-view-renderer-", ctx_r1.defaultBlockRenderedData.block_id, "-", pos_r6, " ", field_r5.field_style ? ctx_r1.commonUtil.bootstrapColClass(field_r5.field_style.bootstrap_class_name, ctx_r1.is_bootstrap, "", ctx_r1.conditionalUtil.evaluteBootstrapCondition(field_r5)) : "", "");
    i0.ɵɵproperty("stepId", ctx_r1.stepId)("field", field_r5)("position", pos_r6)("templateId", ctx_r1.templateId)("rootData", ctx_r1.defaultBlockRootData)("rowData", ctx_r1.generateRowData(field_r5))("mandatoryCondition", ctx_r1.defaultBlockMandatoryCondition)("editableCondition", ctx_r1.defaultBlockEditableCondition);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_section_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "section", 14);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_section_1_ng_container_1_Template, 2, 13, "ng-container", 15);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(4);
    i0.ɵɵclassMapInterpolate5("cee-block generic-block template-", ctx_r1.templateId, " block-", ctx_r1.defaultBlockRenderedData.block_id, "  block-", ctx_r1.blockPosition, " ", ctx_r1.is_bootstrap ? "row" : "", " ", ctx_r1.isVisible ? "visable-section" : "", "");
    i0.ɵɵpropertyInterpolate("id", ctx_r1.defaultBlockRenderedData.block_id);
    i0.ɵɵproperty("ngClass", ctx_r1.defaultBlockRenderedData.block_style && ctx_r1.defaultBlockRenderedData.block_style.custom_class_name && ctx_r1.defaultBlockCustomClassCondition ? ctx_r1.defaultBlockRenderedData.block_style.custom_class_name : "");
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : undefined)("role", ctx_r1.additionalParameter["Aria-Role"]);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngForOf", ctx_r1.defaultBlockRenderedData.block_fields)("ngForTrackBy", ctx_r1.trackById);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_section_1_Template, 2, 13, "section", 13);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.defaultBlockRenderedData && ctx_r1.isVisible);
} }
function GlobalSearchComponent_ng_template_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_1_Template, 2, 1, "ng-container", 2)(2, GlobalSearchComponent_ng_template_1_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 2);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.showSearchHistoryBlock);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.showSearchHistoryBlock && ctx_r1.isSearchHistoryBlockApplicable);
} }
function GlobalSearchComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div")(1, "div", 8);
    i0.ɵɵtemplate(2, GlobalSearchComponent_ng_template_1_div_2_Template, 4, 0, "div", 9)(3, GlobalSearchComponent_ng_template_1_ng_container_3_Template, 3, 2, "ng-container", 2);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵclassMap(ctx_r1.fieldData.field_style.custom_class_name);
    i0.ɵɵadvance(2);
    i0.ɵɵproperty("ngIf", (ctx_r1.loaders == null ? null : ctx_r1.loaders.isSearchLoading) || (ctx_r1.loaders == null ? null : ctx_r1.loaders.isHistoryLoading));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !(ctx_r1.loaders == null ? null : ctx_r1.loaders.isSearchLoading) && !(ctx_r1.loaders == null ? null : ctx_r1.loaders.isHistoryLoading));
} }
export class GlobalSearchComponent {
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
    cdr;
    overlay;
    positionBuilder;
    vcr;
    zone;
    elementRef;
    fileUploadService;
    autoPreviewConfigPath = localStorage.getItem('ENABLE_AUTO_PREVIEW')?.toLowerCase() == "true" && localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') ? localStorage.getItem('AUTO_PREVIEW_CONFIG_PATH') : 'assets/config';
    configBlockPath = this.autoPreviewConfigPath + '/application_blocks/application_blocks_';
    overlayTemplate;
    stepId;
    fieldData;
    templateId;
    blockPosition;
    rootData;
    isAttachmentBlock;
    visibleCondition;
    editableCondition;
    mandatoryCondition;
    keepState = false;
    rowData;
    floatingBox;
    searchInput;
    isOpen = true;
    // Search properties
    searchTerm = '';
    searchResults = [];
    isLoading = false;
    searchAttempted = false;
    isOverlayVisible = false;
    // Overlay reference
    overlayRef;
    // Debounce control
    searchSubject = new Subject();
    destroy$ = new Subject();
    fieldName;
    commonUtil;
    apiKeyUtil;
    generateUtil;
    is_bootstrap;
    isVisible;
    conditionalUtil;
    variableObj = {};
    additionalParameter = {};
    searchblockId;
    defaultBlockId;
    skipLoader;
    debounceMs = 300; // Default debounce time in milliseconds
    searchMinLength = 1; // Default minimum search length
    appData = {
        id: '',
        stepId: '',
        apiKey: 'Generic Block',
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
    blockRenderedData;
    defaultBlockRenderedData;
    defaultBlockAdditionalParameter = {};
    defaultBlockCustomClassCondition = true;
    defaultBlockVariableObj = {};
    defaultBlockRootData;
    defaultBlockMandatoryCondition;
    defaultBlockEditableCondition;
    conditionObj = {};
    isEditable = false;
    isMandatory = false;
    //rowData = {};  
    progressBlock = {};
    attachmentFieldData;
    attachmentBlockField = [];
    customClassCondition = true;
    isSearchHistoryBlockApplicable = false;
    showSearchHistoryBlock = false;
    wfeEncryption;
    calculationUtil;
    sessionKeyUtil;
    wfeEventListHandler;
    loaders = {
        isSearchLoading: false,
        isHistoryLoading: false
    };
    presetData;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, cdr, overlay, positionBuilder, vcr, zone, elementRef, fileUploadService) {
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
        this.cdr = cdr;
        this.overlay = overlay;
        this.positionBuilder = positionBuilder;
        this.vcr = vcr;
        this.zone = zone;
        this.elementRef = elementRef;
        this.fileUploadService = fileUploadService;
        this.conditionalUtil = new ConditionalUtil(false, appDataService, apiDataService);
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.commonUtil = new CommonUtil();
        this.apiKeyUtil = new APIKeyUtil();
        this.calculationUtil = new CalculationUtil();
        this.generateUtil = new GenerateFieldRow(this.appDataService);
        this.wfeEventListHandler = new WFEEventListHandler(this.ceeApiService, this.router, this.sharedEventsService, this.internalCEEEmitter, this.wfeStepLoaderService, this.appDataService, this.apiDataService, this.dialog, this.snackBar, this.http, this.fileUploadService);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        this.editableCondition = {
            value: false,
            fields: [],
            exceptionFields: [],
            isActive: false,
            override: false,
            overrideAll: false
        };
        this.mandatoryCondition = {
            value: false,
            fields: [],
            exceptionFields: [],
            isActive: false,
            override: false,
            overrideAll: false
        };
        this.defaultBlockMandatoryCondition = JSON.parse(JSON.stringify(this.mandatoryCondition));
        this.defaultBlockEditableCondition = JSON.parse(JSON.stringify(this.editableCondition));
    }
    get isSingleAPIKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    ngOnInit() {
        this.presetData = this.rowData;
        if (this.fieldData.is_display === 1) {
            this.isVisible = true;
        }
        this.defaultBlockRootData = JSON.parse(JSON.stringify(this.rootData));
        if (this.fieldData.is_display === 2) {
            const emitObj = {
                apiKey: this.fieldData.unique_id,
                value: ''
            };
            this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj);
        }
        this.variableObj['emitOnDataSetOrUpdated_' + this.fieldData.unique_id] =
            this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                this.onFieldDataUpdated(res.apiKey, res.value);
            });
        this.variableObj['emitApiSuccessResponse_' + this.fieldData.unique_id] =
            this.sharedEventsService.emitApiSuccessResponse.subscribe((res) => {
                this.stopLoader();
                this.onFieldDataUpdated(null, null);
            });
        this.fieldName = this.fieldData?.field_label;
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = String(paramter.value);
                switch (paramter.parameter_type) {
                    case 'CEE_Search_Result_Block':
                        this.searchblockId = paramter.value;
                        break;
                    case 'CEE_Search_History_Block':
                        this.defaultBlockId = paramter.value;
                        this.isSearchHistoryBlockApplicable = this.defaultBlockId ? true : false;
                        break;
                    case 'SkipLoader':
                        this.skipLoader = paramter.value === "true" ? true : false;
                        break;
                    case 'CEE_Search_Delay_Ms':
                        this.debounceMs = this.additionalParameter['CEE_Search_Delay_Ms']
                            ? parseInt(this.additionalParameter['CEE_Search_Delay_Ms']) : 100;
                        break;
                    case 'CEE_Min_Search_Length':
                        this.searchMinLength = this.additionalParameter['CEE_Min_Search_Length']
                            ? parseInt(this.additionalParameter['CEE_Min_Search_Length']) : 1;
                }
            }
            if (this.isVisible === true) {
                if (this.searchblockId) {
                    this.renderSearchBolckData();
                }
                if (this.defaultBlockId) {
                    this.renderDefaultBlockData();
                }
            }
            // set progress bar
            this.setProgressBlockRenderer();
            if (this.fieldData.is_display === 2) {
                const emitObj = {
                    apiKey: this.fieldData.unique_id,
                    value: ''
                };
                this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj);
            }
        }
        if (this.fieldData.field_type != "Attachment Block") {
            this.appData = {
                id: this.fieldData.unique_id,
                stepId: this.stepId,
                apiKey: 'Generic Block',
                linkedBlockId: this.fieldData.additional_parameters.filter(e => e.parameter_type === "CEE_Search_Result_Block").length > 0 ? this.fieldData.additional_parameters.filter(e => e.parameter_type === "CEE_Search_Result_Block")[0]['value'] : '',
                isRepeatedField: false,
                repeatedBlockFieldId: '',
                responseApiKey: this.isSingleAPIKey ? [] : this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key)),
                requestApiKey: this.isSingleAPIKey ? [] : this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key),
                dataFormatSeparator: '',
                mandatory: this.isMandatory,
                editable: this.isEditable,
                visible: this.isVisible,
                value: '',
                isValid: true
            };
            this.appDataService.addAppData(this.appData);
        }
        // Set up debounced search
        this.searchSubject.pipe(debounceTime(this.debounceMs), filter(term => term.length >= this.searchMinLength), // Allow empty term for clearing results
        takeUntil(this.destroy$)).subscribe(term => {
            this.performSearch(term);
        });
        // Click outside listener
        this.setupOutsideClickListener();
        //On Navigation End, update search term from appData
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart || event instanceof NavigationEnd) {
                this.getPreviousSearchTerm();
            }
        });
        // Listen for empty session events to refresh search term
        this.sharedEventsService.emitForEmptySession.subscribe((res) => {
            if (res.hasOwnProperty('unique_ids') && res['unique_ids'].includes(this.fieldData.unique_id)) {
                this.getPreviousSearchTerm();
            }
        });
        // Fetch the previous search term
        this.getPreviousSearchTerm();
    }
    // Fetch the previous search term from appData
    getPreviousSearchTerm() {
        //console.log("Called getPreviousSearchTerm");
        const value = this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id);
        if (value) {
            this.searchTerm = value;
        }
        else {
            this.searchTerm = '';
        }
    }
    trackById(index, item) {
        return item.unique_id;
    }
    onFieldDataUpdated(fieldId, value) {
        const display = this.conditionalUtil.checkVisibility(this.fieldData, fieldId, value);
        if (display !== undefined) {
            this.isVisible = display;
            if (this.searchblockId) {
                this.renderSearchBolckData();
            }
            if (this.defaultBlockId) {
                this.renderDefaultBlockData();
            }
        }
    }
    renderSearchBolckData() {
        if (window['blockLogs'] === undefined) {
            window['blockLogs'] = [];
            window['blockDataLogs'] = [];
        }
        if (window['blockLogs'] && window['blockLogs'].indexOf(this.searchblockId) === -1) {
            window['blockLogs'].push(this.searchblockId);
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            this.wfeStepLoaderService.loadBlockByName(this.searchblockId).subscribe((data) => {
                window['blockDataLogs'].push({ searchblockId: this.searchblockId, blockData: data });
                this.processBlockData(data);
            });
        }
        else if (window['blockDataLogs']) {
            let blockData = window['blockDataLogs'].filter(e => { if (e.searchblockId == this.searchblockId)
                return e.blockData; }).length > 0 ? window['blockDataLogs'].filter(e => { if (e.searchblockId == this.searchblockId)
                return e.blockData; })[0].blockData : undefined;
            if (blockData) {
                this.processBlockData(blockData);
            }
        }
    }
    processBlockData(data) {
        this.blockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        if (this.blockRenderedData.additional_parameters && this.blockRenderedData.additional_parameters.length > 0) {
            for (const paramter of this.blockRenderedData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'OverrideConditions':
                        if (paramter.value && paramter.value !== 'NONE' && paramter.value !== 'ALL') {
                            const fields = paramter.value.split('|').map(val => val.trim());
                            this.mandatoryCondition.fields = fields;
                            this.editableCondition.fields = fields;
                            // this.visibleCondition.fields = fields;
                        }
                        break;
                    case 'ExceptionConditions':
                        const fields = paramter.value.split('|').map(val => val.trim());
                        this.mandatoryCondition.exceptionFields = fields;
                        this.editableCondition.exceptionFields = fields;
                        // this.visibleCondition.exceptionFields = fields;
                        break;
                    default:
                        break;
                }
            }
        }
        // subscribe to field changes
        if ((this.blockRenderedData.conditional_visible && this.blockRenderedData.conditional_visible.length > 0) ||
            (this.blockRenderedData.conditional_editable && this.blockRenderedData.conditional_editable.length > 0) ||
            (this.blockRenderedData.conditional_mandatory && this.blockRenderedData.conditional_mandatory.length > 0)) {
            this.variableObj[this.blockRenderedData.block_id + '_emitOnDataSetOrUpdatedForGenericBlock'] =
                this.sharedEventsService.emitOnDataSetOrUpdatedForGenericBlock.subscribe((res) => {
                    this.onFieldDataUpdatedForGenericBlock(res.apiKey, res.value);
                });
        }
        if (this.blockRenderedData['custom_class_condition'] && this.blockRenderedData['custom_class_condition'].hasOwnProperty('query') && this.blockRenderedData['custom_class_condition']['query'] != '') {
            this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
            this.variableObj[this.blockRenderedData.block_id + '_emitOnDataSetOrUpdated'] =
                this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                    this.setFieldValueOnSetValuesEvent(res.value);
                });
        }
        /* if (this.blockRenderedData.conditional_visible && this.blockRenderedData.conditional_visible.length > 0) {
            this.visibleCondition.isActive = true;
        } */
        if (this.blockRenderedData.conditional_editable && this.blockRenderedData.conditional_editable.length > 0) {
            this.editableCondition.isActive = true;
        }
        if (this.blockRenderedData.conditional_mandatory && this.blockRenderedData.conditional_mandatory.length > 0) {
            this.mandatoryCondition.isActive = true;
        }
        this.rootData['blockFields'][this.blockRenderedData.block_id] = [];
        for (let field of this.blockRenderedData.block_fields) {
            this.rootData['blockFields'][this.blockRenderedData.block_id].push(field.unique_id);
        }
        if (this.isAttachmentBlock) {
            this.isAttachmentBlock = this.blockRenderedData.block_fields;
        }
        this.cdr.detectChanges();
    }
    renderDefaultBlockData() {
        if (window['defaultBlockLogs'] === undefined) {
            window['defaultBlockLogs'] = [];
            window['defaultBlockDataLogs'] = [];
        }
        if (window['defaultBlockLogs'] && window['defaultBlockLogs'].indexOf(this.defaultBlockId) === -1) {
            window['defaultBlockLogs'].push(this.defaultBlockId);
            this.wfeStepLoaderService.loaderService.skipLoading = this.skipLoader;
            this.wfeStepLoaderService.loadBlockByName(this.defaultBlockId).subscribe((data) => {
                window['defaultBlockDataLogs'].push({ defaultBlockId: this.defaultBlockId, blockData: data });
                this.processDefaultBlockData(data);
            });
        }
        else if (window['defaultBlockDataLogs']) {
            let blockData = window['defaultBlockDataLogs'].filter(e => { if (e.defaultBlockId == this.defaultBlockId)
                return e.blockData; }).length > 0 ? window['defaultBlockDataLogs'].filter(e => { if (e.defaultBlockId == this.defaultBlockId)
                return e.blockData; })[0].blockData : undefined;
            if (blockData) {
                this.processDefaultBlockData(blockData);
            }
        }
    }
    processDefaultBlockData(data) {
        this.defaultBlockRenderedData = this.commonUtil.blockBootstrapProcess(data);
        if (this.defaultBlockRenderedData.additional_parameters && this.defaultBlockRenderedData.additional_parameters.length > 0) {
            for (const paramter of this.defaultBlockRenderedData.additional_parameters) {
                this.defaultBlockAdditionalParameter[paramter.parameter_type] = paramter.value;
                switch (paramter.parameter_type) {
                    case 'OverrideConditions':
                        if (paramter.value && paramter.value !== 'NONE' && paramter.value !== 'ALL') {
                            const fields = paramter.value.split('|').map(val => val.trim());
                            this.defaultBlockMandatoryCondition.fields = fields;
                            this.defaultBlockEditableCondition.fields = fields;
                            // this.visibleCondition.fields = fields;
                        }
                        break;
                    case 'ExceptionConditions':
                        const fields = paramter.value.split('|').map(val => val.trim());
                        this.defaultBlockMandatoryCondition.exceptionFields = fields;
                        this.defaultBlockEditableCondition.exceptionFields = fields;
                        // this.visibleCondition.exceptionFields = fields;
                        break;
                    default:
                        break;
                }
            }
        }
        // subscribe to field changes
        if ((this.defaultBlockRenderedData.conditional_visible && this.defaultBlockRenderedData.conditional_visible.length > 0) ||
            (this.defaultBlockRenderedData.conditional_editable && this.defaultBlockRenderedData.conditional_editable.length > 0) ||
            (this.defaultBlockRenderedData.conditional_mandatory && this.defaultBlockRenderedData.conditional_mandatory.length > 0)) {
            this.defaultBlockVariableObj[this.defaultBlockRenderedData.block_id + '_emitOnDataSetOrUpdatedForGenericBlock'] =
                this.sharedEventsService.emitOnDataSetOrUpdatedForGenericBlock.subscribe((res) => {
                    this.onDefaultFieldDataUpdatedForGenericBlock(res.apiKey, res.value);
                });
        }
        if (this.defaultBlockRenderedData['custom_class_condition'] && this.defaultBlockRenderedData['custom_class_condition'].hasOwnProperty('query') && this.defaultBlockRenderedData['custom_class_condition']['query'] != '') {
            this.defaultBlockCustomClassCondition = this.conditionalUtil.checkCustomClass(this.defaultBlockRenderedData, String(this.appData.id), '');
            this.defaultBlockVariableObj[this.defaultBlockRenderedData.block_id + '_emitOnDataSetOrUpdated'] =
                this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                    this.setDefaultFieldValueOnSetValuesEvent(res.value);
                });
        }
        /* if (this.defaultBlockRenderedData.conditional_visible && this.defaultBlockRenderedData.conditional_visible.length > 0) {
            this.visibleCondition.isActive = true;
        } */
        if (this.defaultBlockRenderedData.conditional_editable && this.defaultBlockRenderedData.conditional_editable.length > 0) {
            this.defaultBlockEditableCondition.isActive = true;
        }
        if (this.defaultBlockRenderedData.conditional_mandatory && this.defaultBlockRenderedData.conditional_mandatory.length > 0) {
            this.defaultBlockMandatoryCondition.isActive = true;
        }
        this.defaultBlockRootData['blockFields'][this.defaultBlockRenderedData.block_id] = [];
        for (let field of this.defaultBlockRenderedData.block_fields) {
            this.defaultBlockRootData['blockFields'][this.defaultBlockRenderedData.block_id].push(field.unique_id);
        }
        this.cdr.detectChanges();
    }
    setProgressBlockRenderer() {
        let currStep = this.stepId;
        if (this.navigateStepName && this.stepId.includes('-')) {
            const data = currStep.split('-');
            currStep = data[data.length - 1];
        }
        const workflowSequenceIndex = this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(currStep);
        if (!workflowSequenceIndex) {
            return false;
        }
        const progressData = this.wfeStepLoaderService.progressBarMap[workflowSequenceIndex.sequence] || {};
        if (progressData.progress && this.additionalParameter['ProgressBlockId']) {
            if (progressData.progress.progress_bar_id === this.additionalParameter['ProgressBlockId']) {
                this.progressBlock = progressData;
            }
        }
    }
    onFieldDataUpdatedForGenericBlock(fieldId, value) {
        if (this.additionalParameter['OverrideConditions'] !== 'NONE') {
            /* const display = this.conditionalUtil.checkVisibility(this.blockRenderedData, fieldId, value);
            if (display !== undefined && this.isFieldDisplay === false) {
                this.isVisible = display;
                this.visibleCondition.value = display;
                this.setOverride(display, 'visibleCondition');
            } */
            const editable = this.conditionalUtil.checkEditable(this.blockRenderedData, fieldId, value);
            if (editable !== undefined) {
                this.editableCondition.value = editable;
                this.setOverride(editable, 'editableCondition');
            }
            const mandatory = this.conditionalUtil.checkMandatory(this.blockRenderedData, fieldId, value);
            if (mandatory !== undefined) {
                this.mandatoryCondition.value = mandatory;
                this.setOverride(mandatory, 'mandatoryCondition');
            }
            // this.visibleCondition = JSON.parse(JSON.stringify(this.visibleCondition));
            this.editableCondition = JSON.parse(JSON.stringify(this.editableCondition));
            this.mandatoryCondition = JSON.parse(JSON.stringify(this.mandatoryCondition));
        }
    }
    onDefaultFieldDataUpdatedForGenericBlock(fieldId, value) {
        if (this.additionalParameter['OverrideConditions'] !== 'NONE') {
            /* const display = this.conditionalUtil.checkVisibility(this.blockRenderedData, fieldId, value);
            if (display !== undefined && this.isFieldDisplay === false) {
                this.isVisible = display;
                this.visibleCondition.value = display;
                this.setOverride(display, 'visibleCondition');
            } */
            const editable = this.conditionalUtil.checkEditable(this.defaultBlockRenderedData, fieldId, value);
            if (editable !== undefined) {
                this.defaultBlockEditableCondition.value = editable;
                this.setOverride(editable, 'defaultBlockEditableCondition');
            }
            const mandatory = this.conditionalUtil.checkMandatory(this.defaultBlockRenderedData, fieldId, value);
            if (mandatory !== undefined) {
                this.defaultBlockMandatoryCondition.value = mandatory;
                this.setOverride(mandatory, 'defaultBlockMandatoryCondition');
            }
            // this.visibleCondition = JSON.parse(JSON.stringify(this.visibleCondition));
            this.defaultBlockEditableCondition = JSON.parse(JSON.stringify(this.defaultBlockEditableCondition));
            this.defaultBlockMandatoryCondition = JSON.parse(JSON.stringify(this.defaultBlockMandatoryCondition));
        }
    }
    setOverride(editable, arg1) {
        throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
        this.customClassCondition = this.conditionalUtil.checkCustomClass(this.blockRenderedData, String(this.appData.id), '');
    }
    setDefaultFieldValueOnSetValuesEvent(data) {
        this.defaultBlockCustomClassCondition = this.conditionalUtil.checkCustomClass(this.defaultBlockRenderedData, String(this.appData.id), '');
    }
    generateRowData(field) {
        return this.generateUtil.generateRowData(field);
    }
    get navigateStepName() {
        return localStorage.getItem('navigateStepName') === 'true' ? true : false;
    }
    closeOverlay() {
        if (this.overlayRef) {
            this.showSearchHistoryBlock = false;
            this.overlayRef.dispose();
            this.overlayRef = null;
        }
    }
    onWindowScroll() {
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            this.checkShowBlockCondition();
            this.overlayRef.detach();
            this.overlayRef = null;
        }
    }
    onWindowResize() {
        // If overlay is currently open, update its width
        if (this.overlayRef && this.overlayRef.hasAttached()) {
            // Get the new width of the search input
            const newInputWidth = this.searchInput.nativeElement.getBoundingClientRect().width;
            // Update the overlay width
            this.overlayRef.updateSize({ width: `${newInputWidth}px` });
            // Optionally, update the position as well
            this.overlayRef.updatePosition();
        }
    }
    onShowOverlay() {
        if (!this.isSearchHistoryBlockApplicable && !this.searchTerm.trim().length) {
            this.showSearchHistoryBlock = false;
            return;
        }
        this.checkShowBlockCondition();
        if (this.showSearchHistoryBlock) {
            this.loaders.isHistoryLoading = true;
            // Show overlay with loader
            this.viewOverlay();
            // Trigger click event to load history data
            this.onComponentEvent('onClick');
        }
        else {
            this.viewOverlay();
        }
    }
    checkShowBlockCondition() {
        if (this.searchTerm && this.searchTerm.trim().length >= this.searchMinLength) {
            this.showSearchHistoryBlock = false;
        }
        else {
            this.showSearchHistoryBlock = true;
        }
    }
    viewOverlay() {
        if (this.overlayRef) {
            return;
        }
        const inputWidth = this.searchInput.nativeElement.getBoundingClientRect().width;
        const positionStrategy = this.positionBuilder
            .flexibleConnectedTo(this.searchInput)
            .withPositions([
            {
                originX: 'start',
                originY: 'bottom',
                overlayX: 'start',
                overlayY: 'top',
                offsetY: 5,
            },
        ])
            .withFlexibleDimensions(false)
            .withPush(false);
        this.overlayRef = this.overlay.create({
            positionStrategy,
            hasBackdrop: false,
            width: `${inputWidth}px`,
            scrollStrategy: this.overlay.scrollStrategies.reposition(),
        });
        const portal = new TemplatePortal(this.overlayTemplate, this.vcr);
        this.overlayRef.attach(portal);
        this.overlayRef.backdropClick().subscribe(() => this.closeOverlay());
    }
    onSearchInput(event) {
        // Handle Escape key
        if (event.key === 'Escape') {
            this.closeOverlay();
            return;
        }
        const term = this.searchTerm?.trim();
        if (event.key === 'Backspace') {
            this.updateDataOnChange(term);
        }
        if (term.length < this.searchMinLength && term.length !== 0) {
            return;
        }
        // Clear results if term is empty
        if (!term || term.length === 0) {
            if (this.isSearchHistoryBlockApplicable) {
                this.showSearchHistoryBlock = true;
            }
            else {
                this.closeOverlay();
            }
            return;
        }
        // this.viewOverlay();
        // Send term to debounced subject
        this.searchSubject.next(term);
    }
    updateDataOnChange(term) {
        // Update appData with the search term
        this.appDataService.updateAppData({
            ...this.appData,
            value: term,
            visible: this.isVisible,
            editable: this.isEditable,
            mandatory: this.isMandatory
        });
    }
    // Set up click outside listener
    setupOutsideClickListener() {
        fromEvent(document, 'click')
            .pipe(filter(event => {
            const clickTarget = event.target;
            const isOutside = !this.elementRef.nativeElement.contains(clickTarget) &&
                this.overlayRef &&
                !this.overlayRef.overlayElement.contains(clickTarget);
            return isOutside;
        }), takeUntil(this.destroy$))
            .subscribe(() => {
            this.zone.run(() => this.closeOverlay());
        });
    }
    performSearch(term) {
        // Hide the overlay if it's open
        this.checkShowBlockCondition();
        this.loaders.isSearchLoading = true;
        this.viewOverlay();
        this.updateDataOnChange(term);
        this.onComponentEvent('OnKeyUp');
    }
    ngOnChanges(changes) {
        if (changes.editableCondition) {
            this.setConditions(changes.editableCondition.currentValue, 'isEditable');
        }
        if (changes.visibleCondition) {
            this.setConditions(changes.visibleCondition.currentValue, 'isVisible');
        }
        // if (changes.mandatoryCondition) {
        //   this.setConditions(changes.mandatoryCondition.currentValue, 'isMandatory');
        // }
    }
    setConditions(childConditions, type) {
        let check = true;
        if (childConditions && childConditions.exceptionFields && childConditions.exceptionFields.length > 0 && childConditions.exceptionFields.includes(this.fieldData.unique_id)) {
            check = false;
        }
        if (check && childConditions && childConditions.isActive) {
            if (childConditions.fields && childConditions.fields.length > 0 && childConditions.fields.includes(this.fieldData.unique_id)) {
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else if (childConditions.overrideAll) {
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else {
                this.conditionObj[type] = false;
            }
        }
    }
    stopLoader() {
        this.loaders.isSearchLoading = false;
        this.loaders.isHistoryLoading = false;
    }
    onComponentEvent(type, primaryData = {}, isDefault = true, payLoad, displayType = '') {
        if (this.fieldData.event_list && this.fieldData.event_list.length > 0) {
            const _this = this;
            setTimeout(() => {
                _this.wfeEventListHandler.onComponentEventBatch(_this.fieldData, _this.presetData, _this.stepId, type, primaryData, isDefault, payLoad, displayType);
            }, 0);
        }
    }
    ngOnDestroy() {
        // Close the overlay if it's open
        this.closeOverlay();
        // Complete and clean up all RxJS subjects
        this.destroy$.next();
        this.destroy$.complete();
        if (this.searchSubject) {
            this.searchSubject.complete();
        }
        // Unsubscribe from all subscriptions in variableObj
        for (const key in this.variableObj) {
            if (this.variableObj[key]) {
                this.variableObj[key].unsubscribe();
            }
        }
        // Unsubscribe from all subscriptions in defaultBlockVariableObj
        for (const key in this.defaultBlockVariableObj) {
            if (this.defaultBlockVariableObj[key]) {
                this.defaultBlockVariableObj[key].unsubscribe();
            }
        }
    }
    static ɵfac = function GlobalSearchComponent_Factory(t) { return new (t || GlobalSearchComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i12.Overlay), i0.ɵɵdirectiveInject(i12.OverlayPositionBuilder), i0.ɵɵdirectiveInject(i0.ViewContainerRef), i0.ɵɵdirectiveInject(i0.NgZone), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i13.FileUploadService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: GlobalSearchComponent, selectors: [["app-global-search-component"]], viewQuery: function GlobalSearchComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.overlayTemplate = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.floatingBox = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.searchInput = _t.first);
        } }, hostBindings: function GlobalSearchComponent_HostBindings(rf, ctx) { if (rf & 1) {
            i0.ɵɵlistener("scroll", function GlobalSearchComponent_scroll_HostBindingHandler() { return ctx.onWindowScroll(); }, false, i0.ɵɵresolveWindow)("resize", function GlobalSearchComponent_resize_HostBindingHandler() { return ctx.onWindowResize(); }, false, i0.ɵɵresolveWindow);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", templateId: "templateId", blockPosition: "blockPosition", rootData: "rootData", isAttachmentBlock: "isAttachmentBlock", visibleCondition: "visibleCondition", editableCondition: "editableCondition", mandatoryCondition: "mandatoryCondition", keepState: "keepState", rowData: "rowData" }, standalone: true, features: [i0.ɵɵProvidersFeature([
                CommonUtil
            ]), i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 3, vars: 1, consts: [["overlayTemplate", ""], ["searchInput", ""], [4, "ngIf"], [1, "global-search-container"], [1, "search-input-wrapper"], ["type", "text", 3, "ngModelChange", "click", "keyup", "placeholder", "ngModel"], [3, "click"], [1, "search-icon"], [1, "container"], ["class", "shimmer-loader", 4, "ngIf"], [1, "shimmer-loader"], [1, "shimmer-line"], [1, "shimmer-line", "long"], [3, "id", "class", "ngClass", 4, "ngIf"], [3, "id", "ngClass"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "stepId", "field", "position", "templateId", "rootData", "rowData", "mandatoryCondition", "editableCondition"]], template: function GlobalSearchComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, GlobalSearchComponent_ng_container_0_Template, 7, 10, "ng-container", 2)(1, GlobalSearchComponent_ng_template_1_Template, 4, 5, "ng-template", null, 0, i0.ɵɵtemplateRefExtractor);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: () => [CommonModule, i14.NgClass, i14.NgForOf, i14.NgIf, FormsModule, i15.DefaultValueAccessor, i15.NgControlStatus, i15.NgModel, ViewRendererComponent], styles: [".container[_ngcontent-%COMP%]{display:flex}.column[_ngcontent-%COMP%]{padding:10px;display:flex;flex-direction:column;gap:8px}.search-overlay[_ngcontent-%COMP%]{background-color:#fff;border-radius:4px;box-shadow:0 6px 16px #00000026;padding:0;width:100%;max-height:80vh;overflow-y:auto}.search-overlay[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%]{padding:20px}.search-overlay[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;padding-bottom:15px;border-bottom:1px solid #eee;margin-bottom:15px}.search-overlay[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]   .search-term[_ngcontent-%COMP%]{font-size:16px;color:#333}.search-overlay[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]{background:transparent;border:none;font-size:22px;color:#666;cursor:pointer;padding:0;line-height:1}.search-overlay[_ngcontent-%COMP%]   .search-header[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%]:hover{color:#333}.search-overlay[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;padding:30px 0}.search-overlay[_ngcontent-%COMP%]   .loading-indicator[_ngcontent-%COMP%]   .spinner[_ngcontent-%COMP%]{width:24px;height:24px;border:2px solid #f3f3f3;border-top:2px solid #0078d4;border-radius:50%;animation:_ngcontent-%COMP%_spin 1s linear infinite;margin-right:10px}@keyframes _ngcontent-%COMP%_spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.search-overlay[_ngcontent-%COMP%]   .no-results[_ngcontent-%COMP%]{text-align:center;padding:30px 0;color:#666}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]{padding:15px;border-bottom:1px solid #eee;cursor:pointer;transition:background-color .2s}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]:hover{background-color:#f9f9f9}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-title[_ngcontent-%COMP%]{font-size:16px;font-weight:500;color:#0078d4;margin-bottom:5px}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-description[_ngcontent-%COMP%]{font-size:14px;color:#555;margin-bottom:8px}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-metadata[_ngcontent-%COMP%]{display:flex;font-size:12px;color:#777}.search-overlay[_ngcontent-%COMP%]   .search-results[_ngcontent-%COMP%]   .result-item[_ngcontent-%COMP%]   .result-metadata[_ngcontent-%COMP%]   .result-category[_ngcontent-%COMP%]{background-color:#f0f0f0;padding:2px 8px;border-radius:12px;margin-right:10px}.search-overlay[_ngcontent-%COMP%]   .highlight[_ngcontent-%COMP%]{background-color:#fff8c5;font-weight:700}.shimmer-loader[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:10px;padding:16px;max-width:100%;width:100%;margin:0 auto}.shimmer-line[_ngcontent-%COMP%]{height:14px;background:#cecece;border-radius:4px;position:relative;overflow:hidden}.shimmer-line.short[_ngcontent-%COMP%]{width:40%}.shimmer-line.long[_ngcontent-%COMP%]{width:80%}.shimmer-line[_ngcontent-%COMP%]:before{content:\"\";position:absolute;top:0;left:-100px;height:100%;width:150px;background:linear-gradient(90deg,transparent,rgba(81,79,79,.4),transparent);animation:_ngcontent-%COMP%_shimmer 2.5s infinite}@keyframes _ngcontent-%COMP%_shimmer{0%{transform:translate(0)}to{transform:translate(100%)}}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(GlobalSearchComponent, [{
        type: Component,
        args: [{ selector: 'app-global-search-component', standalone: true, providers: [
                    CommonUtil
                ], imports: [CommonModule, FormsModule, ProgressBarRendererComponent, NgIf, forwardRef(() => ViewRendererComponent), forwardRef(() => BlockRendererComponent)], template: "<ng-container *ngIf=\"isVisible\">\r\n    <div class=\"global-search-container\">\r\n        <div class=\"search-input-wrapper\">\r\n            <input type=\"text\" class=\"search-input {{fieldData.field_style.custom_class_name}}-input\"\r\n                placeholder=\"{{fieldData.placeholder_text || 'Search...'}}\" [(ngModel)]=\"searchTerm\"\r\n                (click)=\"onShowOverlay()\" (keyup)=\"onSearchInput($event)\"\r\n                [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Search'\"\r\n                [attr.aria-expanded]=\"isOverlayVisible\" #searchInput>\r\n            <button class=\"search-icon-btn {{fieldData.field_style.custom_class_name}}-btn\"\r\n                (click)=\"onSearchInput($event)\">\r\n                <i class=\"search-icon\"></i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n</ng-container>\r\n<ng-template #overlayTemplate>\r\n    <div class=\"{{fieldData.field_style.custom_class_name}}\">\r\n        <div class=\"container\">\r\n            <!-- Loading Indicator -->\r\n            <div class=\"shimmer-loader\" *ngIf=\"loaders?.isSearchLoading || loaders?.isHistoryLoading\">\r\n                <div class=\"shimmer-line\"></div>\r\n                <div class=\"shimmer-line long\"></div>\r\n                <div class=\"shimmer-line\"></div>\r\n            </div>\r\n\r\n            <!-- HTML FOR ALL GENERIC BLOCK -->\r\n            <ng-container *ngIf=\"!loaders?.isSearchLoading && !loaders?.isHistoryLoading\">\r\n                <ng-container *ngIf=\"!showSearchHistoryBlock\">\r\n                    <section id=\"{{ blockRenderedData.block_id }}\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n                        [attr.role]=\"additionalParameter['Aria-Role']\"\r\n                        class=\"cee-block generic-block template-{{templateId}} block-{{ blockRenderedData.block_id }}  block-{{blockPosition}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\"\r\n                        *ngIf=\"blockRenderedData  && isVisible\"\r\n                        [ngClass]=\"blockRenderedData.block_style && blockRenderedData.block_style.custom_class_name && customClassCondition ? blockRenderedData.block_style.custom_class_name : ''\">\r\n\r\n                        <ng-container\r\n                            *ngFor=\"let field of blockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer\r\n                                class=\"app-view-renderer-{{ blockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n                                [rootData]=\"rootData\" [rowData]=\"generateRowData(field)\"\r\n                                [mandatoryCondition]=\"mandatoryCondition\" [editableCondition]=\"editableCondition\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n\r\n                    </section>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"showSearchHistoryBlock && isSearchHistoryBlockApplicable\">\r\n                    <section id=\"{{ defaultBlockRenderedData.block_id }}\"\r\n                        [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : undefined\"\r\n                        [attr.role]=\"additionalParameter['Aria-Role']\"\r\n                        class=\"cee-block generic-block template-{{templateId}} block-{{ defaultBlockRenderedData.block_id }}  block-{{blockPosition}} {{is_bootstrap?'row':''}} {{isVisible? 'visable-section':''}}\"\r\n                        *ngIf=\"defaultBlockRenderedData && isVisible\"\r\n                        [ngClass]=\"defaultBlockRenderedData.block_style && defaultBlockRenderedData.block_style.custom_class_name && defaultBlockCustomClassCondition ? defaultBlockRenderedData.block_style.custom_class_name : ''\">\r\n\r\n                        <ng-container\r\n                            *ngFor=\"let field of defaultBlockRenderedData.block_fields; index as pos; trackBy: trackById\">\r\n                            <app-view-renderer\r\n                                class=\"app-view-renderer-{{ defaultBlockRenderedData.block_id }}-{{pos}} {{field.field_style?commonUtil.bootstrapColClass(field.field_style.bootstrap_class_name, is_bootstrap, '', conditionalUtil.evaluteBootstrapCondition(field)):''}}\"\r\n                                [stepId]=\"stepId\" [field]=\"field\" [position]=\"pos\" [templateId]=\"templateId\"\r\n                                [rootData]=\"defaultBlockRootData\" [rowData]=\"generateRowData(field)\"\r\n                                [mandatoryCondition]=\"defaultBlockMandatoryCondition\"\r\n                                [editableCondition]=\"defaultBlockEditableCondition\">\r\n                            </app-view-renderer>\r\n                        </ng-container>\r\n\r\n                    </section>\r\n                </ng-container>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</ng-template>", styles: [".container{display:flex}.column{padding:10px;display:flex;flex-direction:column;gap:8px}.search-overlay{background-color:#fff;border-radius:4px;box-shadow:0 6px 16px #00000026;padding:0;width:100%;max-height:80vh;overflow-y:auto}.search-overlay .container{padding:20px}.search-overlay .search-header{display:flex;justify-content:space-between;align-items:center;padding-bottom:15px;border-bottom:1px solid #eee;margin-bottom:15px}.search-overlay .search-header .search-term{font-size:16px;color:#333}.search-overlay .search-header .close-btn{background:transparent;border:none;font-size:22px;color:#666;cursor:pointer;padding:0;line-height:1}.search-overlay .search-header .close-btn:hover{color:#333}.search-overlay .loading-indicator{display:flex;align-items:center;justify-content:center;padding:30px 0}.search-overlay .loading-indicator .spinner{width:24px;height:24px;border:2px solid #f3f3f3;border-top:2px solid #0078d4;border-radius:50%;animation:spin 1s linear infinite;margin-right:10px}@keyframes spin{0%{transform:rotate(0)}to{transform:rotate(360deg)}}.search-overlay .no-results{text-align:center;padding:30px 0;color:#666}.search-overlay .search-results .result-item{padding:15px;border-bottom:1px solid #eee;cursor:pointer;transition:background-color .2s}.search-overlay .search-results .result-item:last-child{border-bottom:none}.search-overlay .search-results .result-item:hover{background-color:#f9f9f9}.search-overlay .search-results .result-item .result-title{font-size:16px;font-weight:500;color:#0078d4;margin-bottom:5px}.search-overlay .search-results .result-item .result-description{font-size:14px;color:#555;margin-bottom:8px}.search-overlay .search-results .result-item .result-metadata{display:flex;font-size:12px;color:#777}.search-overlay .search-results .result-item .result-metadata .result-category{background-color:#f0f0f0;padding:2px 8px;border-radius:12px;margin-right:10px}.search-overlay .highlight{background-color:#fff8c5;font-weight:700}.shimmer-loader{display:flex;flex-direction:column;gap:10px;padding:16px;max-width:100%;width:100%;margin:0 auto}.shimmer-line{height:14px;background:#cecece;border-radius:4px;position:relative;overflow:hidden}.shimmer-line.short{width:40%}.shimmer-line.long{width:80%}.shimmer-line:before{content:\"\";position:absolute;top:0;left:-100px;height:100%;width:150px;background:linear-gradient(90deg,transparent,rgba(81,79,79,.4),transparent);animation:shimmer 2.5s infinite}@keyframes shimmer{0%{transform:translate(0)}to{transform:translate(100%)}}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.CeeApiService }, { type: i11.Router }, { type: i0.ChangeDetectorRef }, { type: i12.Overlay }, { type: i12.OverlayPositionBuilder }, { type: i0.ViewContainerRef }, { type: i0.NgZone }, { type: i0.ElementRef }, { type: i13.FileUploadService }], { overlayTemplate: [{
            type: ViewChild,
            args: ['overlayTemplate']
        }], stepId: [{
            type: Input
        }], fieldData: [{
            type: Input
        }], templateId: [{
            type: Input
        }], blockPosition: [{
            type: Input
        }], rootData: [{
            type: Input
        }], isAttachmentBlock: [{
            type: Input
        }], visibleCondition: [{
            type: Input
        }], editableCondition: [{
            type: Input
        }], mandatoryCondition: [{
            type: Input
        }], keepState: [{
            type: Input
        }], rowData: [{
            type: Input
        }], floatingBox: [{
            type: ViewChild,
            args: ['floatingBox']
        }], searchInput: [{
            type: ViewChild,
            args: ['searchInput']
        }], onWindowScroll: [{
            type: HostListener,
            args: ['window:scroll', []]
        }], onWindowResize: [{
            type: HostListener,
            args: ['window:resize', []]
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(GlobalSearchComponent, { className: "GlobalSearchComponent", filePath: "lib\\components\\global-search\\global-search.component.ts", lineNumber: 52 }); })();
function orwardRef(arg0) {
    throw new Error('Function not implemented.');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsLXNlYXJjaC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvY29tcG9uZW50cy9nbG9iYWwtc2VhcmNoL2dsb2JhbC1zZWFyY2guY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2NvbXBvbmVudHMvZ2xvYmFsLXNlYXJjaC9nbG9iYWwtc2VhcmNoLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQWMsU0FBUyxFQUFlLFlBQVksRUFBRSxLQUFLLEVBQTBDLFVBQVUsRUFBOEQsTUFBTSxlQUFlLENBQUM7QUFRbk4sT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXJELE9BQU8sRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDckQsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBSzdDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxrQ0FBa0MsQ0FBQztBQUNuRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFHckQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFFbkUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFDakYsOEdBQThHO0FBQzlHLE9BQU8sRUFBRSxZQUFZLEVBQXdCLE1BQU0sRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLE1BQU0sQ0FBQztBQUNqRyxPQUFPLEVBQUUsNEJBQTRC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R0FlRjs7WUFmZixvQ0FBZTtrQ0RnRGxCLFlBQVksc0NBQUUsV0FBVyw4REFBdUQscUJBQXFCOztpRkFHcEcscUJBQXFCO2NBWGpDLFNBQVM7MkJBQ0UsNkJBQTZCLGNBRzNCLElBQUksYUFDTDtvQkFDVCxVQUFVO2lCQUNYLFdBQ1EsQ0FBQyxZQUFZLEVBQUUsV0FBVyxFQUFFLDRCQUE0QixFQUFFLElBQUksRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMscUJBQXFCLENBQUMsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsc0JBQXNCLENBQUMsQ0FBQzs4aUJBTzdILGVBQWU7a0JBQTVDLFNBQVM7bUJBQUMsaUJBQWlCO1lBQ1gsTUFBTTtrQkFBdEIsS0FBSztZQUNXLFNBQVM7a0JBQXpCLEtBQUs7WUFDRyxVQUFVO2tCQUFsQixLQUFLO1lBQ0csYUFBYTtrQkFBckIsS0FBSztZQUNXLFFBQVE7a0JBQXhCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxnQkFBZ0I7a0JBQXhCLEtBQUs7WUFDRyxpQkFBaUI7a0JBQXpCLEtBQUs7WUFDRyxrQkFBa0I7a0JBQTFCLEtBQUs7WUFDRyxTQUFTO2tCQUFqQixLQUFLO1lBQ0csT0FBTztrQkFBZixLQUFLO1lBRW9CLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYTtZQUNFLFdBQVc7a0JBQXBDLFNBQVM7bUJBQUMsYUFBYTtZQXVqQnhCLGNBQWM7a0JBRGIsWUFBWTttQkFBQyxlQUFlLEVBQUUsRUFBRTtZQVVqQyxjQUFjO2tCQURiLFlBQVk7bUJBQUMsZUFBZSxFQUFFLEVBQUU7O2tGQWpsQnRCLHFCQUFxQjtBQTJ5QmxDLFNBQVMsU0FBUyxDQUFDLElBQXdDO0lBQ3pELE1BQU0sSUFBSSxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQztBQUMvQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBWaWV3Q2hpbGQsIFRlbXBsYXRlUmVmLCBIb3N0TGlzdGVuZXIsIElucHV0LCBpbXBvcnRQcm92aWRlcnNGcm9tLCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiwgaW5wdXQsIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMsIFNpbXBsZUNoYW5nZXMsIE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuaW1wb3J0IHtcclxuICBPdmVybGF5LFxyXG4gIE92ZXJsYXlSZWYsXHJcbiAgT3ZlcmxheVBvc2l0aW9uQnVpbGRlcixcclxuICBDb25uZWN0ZWRQb3NpdGlvbixcclxufSBmcm9tICdAYW5ndWxhci9jZGsvb3ZlcmxheSc7XHJcbmltcG9ydCB7IFRlbXBsYXRlUG9ydGFsIH0gZnJvbSAnQGFuZ3VsYXIvY2RrL3BvcnRhbCc7XHJcbmltcG9ydCB7IFZpZXdDb250YWluZXJSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlLCBOZ0lmIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgRm9ybXNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbmRpdGlvbmFsVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1jb25kaXRpb25hbC11dGlsJztcclxuaW1wb3J0IHsgQ29tbW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbW1vbi11dGlsJztcclxuaW1wb3J0IHsgQ2hpbGRDb25kaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbHMvY2hpbGRDb25kaXRpb24ubW9kZWwnO1xyXG5pbXBvcnQgeyBXZmVTdGVwTG9hZGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3dmZS1zdGVwLWxvYWRlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgR2VuZXJhdGVGaWVsZFJvdyB9IGZyb20gJy4uLy4uL3V0aWxzL2dlbmVyYXRlLWZpZWxkLXV0aWwnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgVmlld1JlbmRlcmVyQ29tcG9uZW50IH0gZnJvbSAnLi4vdmlldy1yZW5kZXJlci92aWV3LXJlbmRlcmVyLmNvbXBvbmVudCc7XHJcbi8vIGltcG9ydCB7IENlZUF0dGFjaG1lbnRzQ29tcG9uZW50IH0gZnJvbSAnLi4vLi4vZmllbGQtY29tcG9uZW50cy9jZWUtYXR0YWNobWVudHMvY2VlLWF0dGFjaG1lbnRzLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IGRlYm91bmNlVGltZSwgZGlzdGluY3RVbnRpbENoYW5nZWQsIGZpbHRlciwgU3ViamVjdCwgdGFrZVVudGlsLCBmcm9tRXZlbnQgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgUHJvZ3Jlc3NCYXJSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uL3Byb2dyZXNzLWJhci1yZW5kZXJlci9wcm9ncmVzcy1iYXItcmVuZGVyZXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgQmxvY2tSZW5kZXJlckNvbXBvbmVudCB9IGZyb20gJy4uLy4uL25nLWNlZS1jb3JlLm1vZHVsZSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ludGVybmFsLWNlZS1lbWl0dGVyLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIE5hdmlnYXRpb25TdGFydCwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQ2VlQXBpU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1hcGktc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgV2ZlRW5jcnlwdGlvblV0aWwgfSBmcm9tICcuLi8uLi91dGlscy93ZmUtZW5jcnlwdGlvbi11dGlsJztcclxuaW1wb3J0IHsgQ2FsY3VsYXRpb25VdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2FsY3VsYXRpb24nO1xyXG5pbXBvcnQgeyBTZXNzaW9uS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24ta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBXRkVFdmVudExpc3RIYW5kbGVyIH0gZnJvbSAnLi4vLi4vdXRpbHMvd2ZlLWV2ZW50LWxpc3QtaGFuZGxlci11dGlsJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9maWxlLXVwbG9hZC1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBUElLZXlVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBpLWtleS11dGlsJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwLWdsb2JhbC1zZWFyY2gtY29tcG9uZW50JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2xvYmFsLXNlYXJjaC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2xvYmFsLXNlYXJjaC5jb21wb25lbnQuc2NzcyddLFxyXG4gIHN0YW5kYWxvbmU6IHRydWUsXHJcbiAgcHJvdmlkZXJzOiBbXHJcbiAgICBDb21tb25VdGlsXHJcbiAgXSxcclxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBGb3Jtc01vZHVsZSwgUHJvZ3Jlc3NCYXJSZW5kZXJlckNvbXBvbmVudCwgTmdJZiwgZm9yd2FyZFJlZigoKSA9PiBWaWV3UmVuZGVyZXJDb21wb25lbnQpLCBmb3J3YXJkUmVmKCgpID0+IEJsb2NrUmVuZGVyZXJDb21wb25lbnQpXVxyXG5cclxufSlcclxuZXhwb3J0IGNsYXNzIEdsb2JhbFNlYXJjaENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBPbkNoYW5nZXMge1xyXG4gIGF1dG9QcmV2aWV3Q29uZmlnUGF0aCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdFTkFCTEVfQVVUT19QUkVWSUVXJyk/LnRvTG93ZXJDYXNlKCkgPT0gXCJ0cnVlXCIgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FVVE9fUFJFVklFV19DT05GSUdfUEFUSCcpID8gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FVVE9fUFJFVklFV19DT05GSUdfUEFUSCcpIDogJ2Fzc2V0cy9jb25maWcnO1xyXG4gIGNvbmZpZ0Jsb2NrUGF0aCA9IHRoaXMuYXV0b1ByZXZpZXdDb25maWdQYXRoICsgJy9hcHBsaWNhdGlvbl9ibG9ja3MvYXBwbGljYXRpb25fYmxvY2tzXyc7XHJcblxyXG4gIEBWaWV3Q2hpbGQoJ292ZXJsYXlUZW1wbGF0ZScpIG92ZXJsYXlUZW1wbGF0ZSE6IFRlbXBsYXRlUmVmPGFueT47XHJcbiAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICBASW5wdXQoKSBkZWNsYXJlIGZpZWxkRGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIHRlbXBsYXRlSWQ6IGFueTtcclxuICBASW5wdXQoKSBibG9ja1Bvc2l0aW9uOiBudW1iZXI7XHJcbiAgQElucHV0KCkgZGVjbGFyZSByb290RGF0YTogYW55O1xyXG4gIEBJbnB1dCgpIGlzQXR0YWNobWVudEJsb2NrOiBhbnk7XHJcbiAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb247XHJcbiAgQElucHV0KCkgZWRpdGFibGVDb25kaXRpb246IENoaWxkQ29uZGl0aW9uO1xyXG4gIEBJbnB1dCgpIG1hbmRhdG9yeUNvbmRpdGlvbjogQ2hpbGRDb25kaXRpb247XHJcbiAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG5cclxuICBAVmlld0NoaWxkKCdmbG9hdGluZ0JveCcpIGZsb2F0aW5nQm94ITogRWxlbWVudFJlZjtcclxuICBAVmlld0NoaWxkKCdzZWFyY2hJbnB1dCcpIHNlYXJjaElucHV0ITogRWxlbWVudFJlZjtcclxuXHJcbiAgaXNPcGVuID0gdHJ1ZTtcclxuICAvLyBTZWFyY2ggcHJvcGVydGllc1xyXG4gIHNlYXJjaFRlcm06IHN0cmluZyA9ICcnO1xyXG4gIHNlYXJjaFJlc3VsdHM6IGFueVtdID0gW107XHJcbiAgaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgc2VhcmNoQXR0ZW1wdGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgaXNPdmVybGF5VmlzaWJsZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAvLyBPdmVybGF5IHJlZmVyZW5jZVxyXG4gIHByaXZhdGUgb3ZlcmxheVJlZjogT3ZlcmxheVJlZjtcclxuXHJcbiAgLy8gRGVib3VuY2UgY29udHJvbFxyXG4gIHByaXZhdGUgc2VhcmNoU3ViamVjdCA9IG5ldyBTdWJqZWN0PHN0cmluZz4oKTtcclxuICBwcml2YXRlIGRlc3Ryb3kkID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuXHJcblxyXG5cclxuICBmaWVsZE5hbWU6IHN0cmluZztcclxuICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG4gIGFwaUtleVV0aWw6IEFQSUtleVV0aWw7XHJcbiAgZ2VuZXJhdGVVdGlsOiBHZW5lcmF0ZUZpZWxkUm93O1xyXG4gIGlzX2Jvb3RzdHJhcDogYm9vbGVhbjtcclxuICBpc1Zpc2libGU6IGJvb2xlYW47XHJcbiAgY29uZGl0aW9uYWxVdGlsOiBDb25kaXRpb25hbFV0aWw7XHJcblxyXG4gIHZhcmlhYmxlT2JqID0ge307XHJcbiAgYWRkaXRpb25hbFBhcmFtZXRlciA9IHt9O1xyXG4gIHNlYXJjaGJsb2NrSWQ6IGFueTtcclxuICBkZWZhdWx0QmxvY2tJZDogYW55O1xyXG4gIHNraXBMb2FkZXI6IGJvb2xlYW47XHJcbiAgZGVib3VuY2VNczogbnVtYmVyID0gMzAwOyAvLyBEZWZhdWx0IGRlYm91bmNlIHRpbWUgaW4gbWlsbGlzZWNvbmRzXHJcbiAgc2VhcmNoTWluTGVuZ3RoOiBudW1iZXIgPSAxOyAvLyBEZWZhdWx0IG1pbmltdW0gc2VhcmNoIGxlbmd0aFxyXG4gIGFwcERhdGE6IEFwcERhdGEgPSB7XHJcbiAgICBpZDogJycsXHJcbiAgICBzdGVwSWQ6ICcnLFxyXG4gICAgYXBpS2V5OiAnR2VuZXJpYyBCbG9jaycsXHJcbiAgICBsaW5rZWRCbG9ja0lkOiAnJyxcclxuICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICByZXF1ZXN0QXBpS2V5OiBbXSxcclxuICAgIHJlc3BvbnNlQXBpS2V5OiBbXSxcclxuICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgbWFuZGF0b3J5OiBmYWxzZSxcclxuICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgdmFsdWU6ICcnLFxyXG4gICAgaXNWYWxpZDogdHJ1ZVxyXG4gIH07XHJcbiAgYmxvY2tSZW5kZXJlZERhdGE6IGFueTtcclxuICBkZWZhdWx0QmxvY2tSZW5kZXJlZERhdGE6IGFueTtcclxuICBkZWZhdWx0QmxvY2tBZGRpdGlvbmFsUGFyYW1ldGVyID0ge307XHJcbiAgZGVmYXVsdEJsb2NrQ3VzdG9tQ2xhc3NDb25kaXRpb246IGJvb2xlYW4gPSB0cnVlO1xyXG4gIGRlZmF1bHRCbG9ja1ZhcmlhYmxlT2JqID0ge307XHJcbiAgZGVmYXVsdEJsb2NrUm9vdERhdGE6IGFueTtcclxuICBkZWZhdWx0QmxvY2tNYW5kYXRvcnlDb25kaXRpb246IGFueTtcclxuICBkZWZhdWx0QmxvY2tFZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gIGNvbmRpdGlvbk9iaiA9IHt9O1xyXG4gIGlzRWRpdGFibGUgPSBmYWxzZTtcclxuICBpc01hbmRhdG9yeSA9IGZhbHNlO1xyXG4gIC8vcm93RGF0YSA9IHt9OyAgXHJcbiAgcHJvZ3Jlc3NCbG9jazogYW55ID0ge307XHJcbiAgYXR0YWNobWVudEZpZWxkRGF0YTogYW55O1xyXG4gIGF0dGFjaG1lbnRCbG9ja0ZpZWxkOiBhbnkgPSBbXTtcclxuICBjdXN0b21DbGFzc0NvbmRpdGlvbjogYm9vbGVhbiA9IHRydWU7XHJcblxyXG5cclxuICBpc1NlYXJjaEhpc3RvcnlCbG9ja0FwcGxpY2FibGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICBzaG93U2VhcmNoSGlzdG9yeUJsb2NrOiBib29sZWFuID0gZmFsc2U7XHJcbiAgd2ZlRW5jcnlwdGlvbjogV2ZlRW5jcnlwdGlvblV0aWw7XHJcbiAgY2FsY3VsYXRpb25VdGlsOiBDYWxjdWxhdGlvblV0aWw7XHJcbiAgZGVjbGFyZSBzZXNzaW9uS2V5VXRpbDogU2Vzc2lvbktleVV0aWw7XHJcbiAgd2ZlRXZlbnRMaXN0SGFuZGxlcjogV0ZFRXZlbnRMaXN0SGFuZGxlcjtcclxuICBsb2FkZXJzID0ge1xyXG4gICAgaXNTZWFyY2hMb2FkaW5nOiBmYWxzZSxcclxuICAgIGlzSGlzdG9yeUxvYWRpbmc6IGZhbHNlXHJcbiAgfTtcclxuICBwcmVzZXREYXRhOiBhbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgcHVibGljIHVzZXJEYXRhSGFuZGxlclNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgcHVibGljIGRpYWxvZzogTWF0RGlhbG9nLFxyXG4gICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHVibGljIGNlZUFwaVNlcnZpY2U6IENlZUFwaVNlcnZpY2UsXHJcbiAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICBwcml2YXRlIGNkcjogQ2hhbmdlRGV0ZWN0b3JSZWYsXHJcbiAgICBwcml2YXRlIG92ZXJsYXk6IE92ZXJsYXksXHJcbiAgICBwcml2YXRlIHBvc2l0aW9uQnVpbGRlcjogT3ZlcmxheVBvc2l0aW9uQnVpbGRlcixcclxuICAgIHByaXZhdGUgdmNyOiBWaWV3Q29udGFpbmVyUmVmLFxyXG4gICAgcHJpdmF0ZSB6b25lOiBOZ1pvbmUsXHJcbiAgICBwcml2YXRlIGVsZW1lbnRSZWY6IEVsZW1lbnRSZWYsXHJcbiAgICBwdWJsaWMgZmlsZVVwbG9hZFNlcnZpY2U/OiBGaWxlVXBsb2FkU2VydmljZVxyXG4gICkge1xyXG4gICAgdGhpcy5jb25kaXRpb25hbFV0aWwgPSBuZXcgQ29uZGl0aW9uYWxVdGlsKGZhbHNlLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UpO1xyXG4gICAgdGhpcy53ZmVFbmNyeXB0aW9uID0gbmV3IFdmZUVuY3J5cHRpb25VdGlsKCk7XHJcbiAgICB0aGlzLnNlc3Npb25LZXlVdGlsID0gbmV3IFNlc3Npb25LZXlVdGlsKCk7XHJcbiAgICB0aGlzLmNvbW1vblV0aWwgPSBuZXcgQ29tbW9uVXRpbCgpO1xyXG4gICAgdGhpcy5hcGlLZXlVdGlsID0gbmV3IEFQSUtleVV0aWwoKTtcclxuICAgIHRoaXMuY2FsY3VsYXRpb25VdGlsID0gbmV3IENhbGN1bGF0aW9uVXRpbCgpO1xyXG4gICAgdGhpcy5nZW5lcmF0ZVV0aWwgPSBuZXcgR2VuZXJhdGVGaWVsZFJvdyh0aGlzLmFwcERhdGFTZXJ2aWNlKTtcclxuICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlciA9IG5ldyBXRkVFdmVudExpc3RIYW5kbGVyKFxyXG4gICAgICB0aGlzLmNlZUFwaVNlcnZpY2UsXHJcbiAgICAgIHRoaXMucm91dGVyLFxyXG4gICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgIHRoaXMuaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICB0aGlzLmRpYWxvZyxcclxuICAgICAgdGhpcy5zbmFja0JhcixcclxuICAgICAgdGhpcy5odHRwLFxyXG4gICAgICB0aGlzLmZpbGVVcGxvYWRTZXJ2aWNlXHJcbiAgICApO1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgIHRoaXMuaXNfYm9vdHN0cmFwID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uID0ge1xyXG4gICAgICB2YWx1ZTogZmFsc2UsXHJcbiAgICAgIGZpZWxkczogW10sXHJcbiAgICAgIGV4Y2VwdGlvbkZpZWxkczogW10sXHJcbiAgICAgIGlzQWN0aXZlOiBmYWxzZSxcclxuICAgICAgb3ZlcnJpZGU6IGZhbHNlLFxyXG4gICAgICBvdmVycmlkZUFsbDogZmFsc2VcclxuICAgIH07XHJcbiAgICB0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbiA9IHtcclxuICAgICAgdmFsdWU6IGZhbHNlLFxyXG4gICAgICBmaWVsZHM6IFtdLFxyXG4gICAgICBleGNlcHRpb25GaWVsZHM6IFtdLFxyXG4gICAgICBpc0FjdGl2ZTogZmFsc2UsXHJcbiAgICAgIG92ZXJyaWRlOiBmYWxzZSxcclxuICAgICAgb3ZlcnJpZGVBbGw6IGZhbHNlXHJcbiAgICB9O1xyXG5cclxuICAgIHRoaXMuZGVmYXVsdEJsb2NrTWFuZGF0b3J5Q29uZGl0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbikpO1xyXG4gICAgdGhpcy5kZWZhdWx0QmxvY2tFZGl0YWJsZUNvbmRpdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5lZGl0YWJsZUNvbmRpdGlvbikpO1xyXG5cclxuICB9XHJcblxyXG4gIGdldCBpc1NpbmdsZUFQSUtleSgpIHtcclxuICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICB9XHJcblxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMucHJlc2V0RGF0YSA9IHRoaXMucm93RGF0YTtcclxuXHJcbiAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZGlzcGxheSA9PT0gMSkge1xyXG4gICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5kZWZhdWx0QmxvY2tSb290RGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5yb290RGF0YSkpO1xyXG4gICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDIpIHtcclxuICAgICAgY29uc3QgZW1pdE9iaiA9IHtcclxuICAgICAgICBhcGlLZXk6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICB2YWx1ZTogJydcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuZW1pdChlbWl0T2JqKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnZhcmlhYmxlT2JqWydlbWl0T25EYXRhU2V0T3JVcGRhdGVkXycgKyB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWRdID1cclxuICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgIHRoaXMudmFyaWFibGVPYmpbJ2VtaXRBcGlTdWNjZXNzUmVzcG9uc2VfJyArIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZF0gPVxyXG4gICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgdGhpcy5zdG9wTG9hZGVyKCk7XHJcbiAgICAgICAgdGhpcy5vbkZpZWxkRGF0YVVwZGF0ZWQobnVsbCwgbnVsbCk7XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICB0aGlzLmZpZWxkTmFtZSA9IHRoaXMuZmllbGREYXRhPy5maWVsZF9sYWJlbDtcclxuICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gU3RyaW5nKHBhcmFtdGVyLnZhbHVlKTtcclxuICAgICAgICBzd2l0Y2ggKHBhcmFtdGVyLnBhcmFtZXRlcl90eXBlKSB7XHJcbiAgICAgICAgICBjYXNlICdDRUVfU2VhcmNoX1Jlc3VsdF9CbG9jayc6XHJcbiAgICAgICAgICAgIHRoaXMuc2VhcmNoYmxvY2tJZCA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0NFRV9TZWFyY2hfSGlzdG9yeV9CbG9jayc6XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdEJsb2NrSWQgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgdGhpcy5pc1NlYXJjaEhpc3RvcnlCbG9ja0FwcGxpY2FibGUgPSB0aGlzLmRlZmF1bHRCbG9ja0lkID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ1NraXBMb2FkZXInOlxyXG4gICAgICAgICAgICB0aGlzLnNraXBMb2FkZXIgPSBwYXJhbXRlci52YWx1ZSA9PT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnQ0VFX1NlYXJjaF9EZWxheV9Ncyc6XHJcbiAgICAgICAgICAgIHRoaXMuZGVib3VuY2VNcyA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1NlYXJjaF9EZWxheV9NcyddXHJcbiAgICAgICAgICAgICAgPyBwYXJzZUludCh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TZWFyY2hfRGVsYXlfTXMnXSkgOiAxMDA7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnQ0VFX01pbl9TZWFyY2hfTGVuZ3RoJzpcclxuICAgICAgICAgICAgdGhpcy5zZWFyY2hNaW5MZW5ndGggPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NaW5fU2VhcmNoX0xlbmd0aCddXHJcbiAgICAgICAgICAgICAgPyBwYXJzZUludCh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9NaW5fU2VhcmNoX0xlbmd0aCddKSA6IDE7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGlmICh0aGlzLmlzVmlzaWJsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICh0aGlzLnNlYXJjaGJsb2NrSWQpIHtcclxuICAgICAgICAgIHRoaXMucmVuZGVyU2VhcmNoQm9sY2tEYXRhKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5kZWZhdWx0QmxvY2tJZCkge1xyXG4gICAgICAgICAgdGhpcy5yZW5kZXJEZWZhdWx0QmxvY2tEYXRhKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBzZXQgcHJvZ3Jlc3MgYmFyXHJcbiAgICAgIHRoaXMuc2V0UHJvZ3Jlc3NCbG9ja1JlbmRlcmVyKCk7XHJcbiAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc19kaXNwbGF5ID09PSAyKSB7XHJcbiAgICAgICAgY29uc3QgZW1pdE9iaiA9IHtcclxuICAgICAgICAgIGFwaUtleTogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLFxyXG4gICAgICAgICAgdmFsdWU6ICcnXHJcbiAgICAgICAgfTtcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5lbWl0KGVtaXRPYmopO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfdHlwZSAhPSBcIkF0dGFjaG1lbnQgQmxvY2tcIikge1xyXG4gICAgICB0aGlzLmFwcERhdGEgPSB7XHJcbiAgICAgICAgaWQ6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICBzdGVwSWQ6IHRoaXMuc3RlcElkLFxyXG4gICAgICAgIGFwaUtleTogJ0dlbmVyaWMgQmxvY2snLFxyXG4gICAgICAgIGxpbmtlZEJsb2NrSWQ6IHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5maWx0ZXIoZSA9PiBlLnBhcmFtZXRlcl90eXBlID09PSBcIkNFRV9TZWFyY2hfUmVzdWx0X0Jsb2NrXCIpLmxlbmd0aCA+IDAgPyB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmlsdGVyKGUgPT4gZS5wYXJhbWV0ZXJfdHlwZSA9PT0gXCJDRUVfU2VhcmNoX1Jlc3VsdF9CbG9ja1wiKVswXVsndmFsdWUnXSA6ICcnLFxyXG4gICAgICAgIGlzUmVwZWF0ZWRGaWVsZDogZmFsc2UsXHJcbiAgICAgICAgcmVwZWF0ZWRCbG9ja0ZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIHJlc3BvbnNlQXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOiB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuYXBpS2V5VXRpbC5nZXRDb25jYXRlbmF0ZWRBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlc3BvbnNlX2FwaV9rZXkpKSxcclxuICAgICAgICByZXF1ZXN0QXBpS2V5OiB0aGlzLmlzU2luZ2xlQVBJS2V5ID8gW10gOiB0aGlzLmFwaUtleVV0aWwuZ2V0TXVsdGlwbGVBcGlLZXlzKHRoaXMuZmllbGREYXRhLnJlcXVlc3RfYXBpX2tleSksXHJcblxyXG4gICAgICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgICAgIG1hbmRhdG9yeTogdGhpcy5pc01hbmRhdG9yeSxcclxuICAgICAgICBlZGl0YWJsZTogdGhpcy5pc0VkaXRhYmxlLFxyXG4gICAgICAgIHZpc2libGU6IHRoaXMuaXNWaXNpYmxlLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuYWRkQXBwRGF0YSh0aGlzLmFwcERhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFNldCB1cCBkZWJvdW5jZWQgc2VhcmNoXHJcbiAgICB0aGlzLnNlYXJjaFN1YmplY3QucGlwZShcclxuICAgICAgZGVib3VuY2VUaW1lKHRoaXMuZGVib3VuY2VNcyksXHJcbiAgICAgIGZpbHRlcih0ZXJtID0+IHRlcm0ubGVuZ3RoID49IHRoaXMuc2VhcmNoTWluTGVuZ3RoKSwgLy8gQWxsb3cgZW1wdHkgdGVybSBmb3IgY2xlYXJpbmcgcmVzdWx0c1xyXG4gICAgICB0YWtlVW50aWwodGhpcy5kZXN0cm95JClcclxuICAgICkuc3Vic2NyaWJlKHRlcm0gPT4ge1xyXG4gICAgICB0aGlzLnBlcmZvcm1TZWFyY2godGVybSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDbGljayBvdXRzaWRlIGxpc3RlbmVyXHJcbiAgICB0aGlzLnNldHVwT3V0c2lkZUNsaWNrTGlzdGVuZXIoKTtcclxuXHJcbiAgICAvL09uIE5hdmlnYXRpb24gRW5kLCB1cGRhdGUgc2VhcmNoIHRlcm0gZnJvbSBhcHBEYXRhXHJcbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xyXG4gICAgICBpZiAoZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uU3RhcnQgfHwgZXZlbnQgaW5zdGFuY2VvZiBOYXZpZ2F0aW9uRW5kKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQcmV2aW91c1NlYXJjaFRlcm0oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTGlzdGVuIGZvciBlbXB0eSBzZXNzaW9uIGV2ZW50cyB0byByZWZyZXNoIHNlYXJjaCB0ZXJtXHJcbiAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEZvckVtcHR5U2Vzc2lvbi5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgIGlmIChyZXMuaGFzT3duUHJvcGVydHkoJ3VuaXF1ZV9pZHMnKSAmJiByZXNbJ3VuaXF1ZV9pZHMnXS5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgICAgdGhpcy5nZXRQcmV2aW91c1NlYXJjaFRlcm0oKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gRmV0Y2ggdGhlIHByZXZpb3VzIHNlYXJjaCB0ZXJtXHJcbiAgICB0aGlzLmdldFByZXZpb3VzU2VhcmNoVGVybSgpO1xyXG4gIH1cclxuXHJcbiAgLy8gRmV0Y2ggdGhlIHByZXZpb3VzIHNlYXJjaCB0ZXJtIGZyb20gYXBwRGF0YVxyXG4gIGdldFByZXZpb3VzU2VhcmNoVGVybSgpIHtcclxuICAgIC8vY29uc29sZS5sb2coXCJDYWxsZWQgZ2V0UHJldmlvdXNTZWFyY2hUZXJtXCIpO1xyXG4gICAgY29uc3QgdmFsdWU6IGFueSA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICBpZiAodmFsdWUpIHtcclxuICAgICAgdGhpcy5zZWFyY2hUZXJtID0gdmFsdWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlYXJjaFRlcm0gPSAnJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYWNrQnlJZChpbmRleDogbnVtYmVyLCBpdGVtOiBhbnkpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIGl0ZW0udW5pcXVlX2lkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBvbkZpZWxkRGF0YVVwZGF0ZWQoZmllbGRJZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBjb25zdCBkaXNwbGF5ID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KHRoaXMuZmllbGREYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICBpZiAoZGlzcGxheSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIHRoaXMuaXNWaXNpYmxlID0gZGlzcGxheTtcclxuICAgICAgaWYgKHRoaXMuc2VhcmNoYmxvY2tJZCkge1xyXG4gICAgICAgIHRoaXMucmVuZGVyU2VhcmNoQm9sY2tEYXRhKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmRlZmF1bHRCbG9ja0lkKSB7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJEZWZhdWx0QmxvY2tEYXRhKCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcmVuZGVyU2VhcmNoQm9sY2tEYXRhKCkge1xyXG4gICAgaWYgKHdpbmRvd1snYmxvY2tMb2dzJ10gPT09IHVuZGVmaW5lZCkge1xyXG4gICAgICB3aW5kb3dbJ2Jsb2NrTG9ncyddID0gW107XHJcbiAgICAgIHdpbmRvd1snYmxvY2tEYXRhTG9ncyddID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93WydibG9ja0xvZ3MnXSAmJiB3aW5kb3dbJ2Jsb2NrTG9ncyddLmluZGV4T2YodGhpcy5zZWFyY2hibG9ja0lkKSA9PT0gLTEpIHtcclxuICAgICAgd2luZG93WydibG9ja0xvZ3MnXS5wdXNoKHRoaXMuc2VhcmNoYmxvY2tJZCk7XHJcbiAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubG9hZGVyU2VydmljZS5za2lwTG9hZGluZyA9IHRoaXMuc2tpcExvYWRlcjtcclxuICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkQmxvY2tCeU5hbWUodGhpcy5zZWFyY2hibG9ja0lkKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2Jsb2NrRGF0YUxvZ3MnXS5wdXNoKHsgc2VhcmNoYmxvY2tJZDogdGhpcy5zZWFyY2hibG9ja0lkLCBibG9ja0RhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzQmxvY2tEYXRhKGRhdGEpO1xyXG4gICAgICB9KTtcclxuICAgIH0gZWxzZSBpZiAod2luZG93WydibG9ja0RhdGFMb2dzJ10pIHtcclxuICAgICAgbGV0IGJsb2NrRGF0YSA9IHdpbmRvd1snYmxvY2tEYXRhTG9ncyddLmZpbHRlcihlID0+IHsgaWYgKGUuc2VhcmNoYmxvY2tJZCA9PSB0aGlzLnNlYXJjaGJsb2NrSWQpIHJldHVybiBlLmJsb2NrRGF0YSB9KS5sZW5ndGggPiAwID8gd2luZG93WydibG9ja0RhdGFMb2dzJ10uZmlsdGVyKGUgPT4geyBpZiAoZS5zZWFyY2hibG9ja0lkID09IHRoaXMuc2VhcmNoYmxvY2tJZCkgcmV0dXJuIGUuYmxvY2tEYXRhIH0pWzBdLmJsb2NrRGF0YSA6IHVuZGVmaW5lZDtcclxuICAgICAgaWYgKGJsb2NrRGF0YSkge1xyXG4gICAgICAgIHRoaXMucHJvY2Vzc0Jsb2NrRGF0YShibG9ja0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzQmxvY2tEYXRhKGRhdGEpIHtcclxuICAgIHRoaXMuYmxvY2tSZW5kZXJlZERhdGEgPSB0aGlzLmNvbW1vblV0aWwuYmxvY2tCb290c3RyYXBQcm9jZXNzKGRhdGEpO1xyXG5cclxuICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgY2FzZSAnT3ZlcnJpZGVDb25kaXRpb25zJzpcclxuICAgICAgICAgICAgaWYgKHBhcmFtdGVyLnZhbHVlICYmIHBhcmFtdGVyLnZhbHVlICE9PSAnTk9ORScgJiYgcGFyYW10ZXIudmFsdWUgIT09ICdBTEwnKSB7XHJcbiAgICAgICAgICAgICAgY29uc3QgZmllbGRzID0gcGFyYW10ZXIudmFsdWUuc3BsaXQoJ3wnKS5tYXAodmFsID0+IHZhbC50cmltKCkpO1xyXG4gICAgICAgICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLmZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uLmZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgICAvLyB0aGlzLnZpc2libGVDb25kaXRpb24uZmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSAnRXhjZXB0aW9uQ29uZGl0aW9ucyc6XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHZhbCA9PiB2YWwudHJpbSgpKTtcclxuICAgICAgICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24uZXhjZXB0aW9uRmllbGRzID0gZmllbGRzO1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRhYmxlQ29uZGl0aW9uLmV4Y2VwdGlvbkZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgLy8gdGhpcy52aXNpYmxlQ29uZGl0aW9uLmV4Y2VwdGlvbkZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIHN1YnNjcmliZSB0byBmaWVsZCBjaGFuZ2VzXHJcbiAgICBpZiAoKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUubGVuZ3RoID4gMCkgfHxcclxuICAgICAgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9lZGl0YWJsZS5sZW5ndGggPiAwKSB8fFxyXG4gICAgICAodGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkubGVuZ3RoID4gMCkpIHtcclxuICAgICAgdGhpcy52YXJpYWJsZU9ialt0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkICsgJ19lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrJ10gPVxyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMub25GaWVsZERhdGFVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGFbJ2N1c3RvbV9jbGFzc19jb25kaXRpb24nXSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhWydjdXN0b21fY2xhc3NfY29uZGl0aW9uJ10uaGFzT3duUHJvcGVydHkoJ3F1ZXJ5JykgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YVsnY3VzdG9tX2NsYXNzX2NvbmRpdGlvbiddWydxdWVyeSddICE9ICcnKSB7XHJcbiAgICAgIHRoaXMuY3VzdG9tQ2xhc3NDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0N1c3RvbUNsYXNzKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLCAnJyk7XHJcbiAgICAgIHRoaXMudmFyaWFibGVPYmpbdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCArICdfZW1pdE9uRGF0YVNldE9yVXBkYXRlZCddID1cclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICB0aGlzLnNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KHJlcy52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIHRoaXMudmlzaWJsZUNvbmRpdGlvbi5pc0FjdGl2ZSA9IHRydWU7XHJcbiAgICB9ICovXHJcblxyXG4gICAgaWYgKHRoaXMuYmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUgJiYgdGhpcy5ibG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9lZGl0YWJsZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuZWRpdGFibGVDb25kaXRpb24uaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeSAmJiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW3RoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWRdID0gW107XHJcbiAgICBmb3IgKGxldCBmaWVsZCBvZiB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcykge1xyXG4gICAgICB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW3RoaXMuYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWRdLnB1c2goZmllbGQudW5pcXVlX2lkKTtcclxuICAgIH1cclxuICAgIGlmICh0aGlzLmlzQXR0YWNobWVudEJsb2NrKSB7XHJcbiAgICAgIHRoaXMuaXNBdHRhY2htZW50QmxvY2sgPSB0aGlzLmJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkcztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXJEZWZhdWx0QmxvY2tEYXRhKCkge1xyXG4gICAgaWYgKHdpbmRvd1snZGVmYXVsdEJsb2NrTG9ncyddID09PSB1bmRlZmluZWQpIHtcclxuICAgICAgd2luZG93WydkZWZhdWx0QmxvY2tMb2dzJ10gPSBbXTtcclxuICAgICAgd2luZG93WydkZWZhdWx0QmxvY2tEYXRhTG9ncyddID0gW107XHJcbiAgICB9XHJcbiAgICBpZiAod2luZG93WydkZWZhdWx0QmxvY2tMb2dzJ10gJiYgd2luZG93WydkZWZhdWx0QmxvY2tMb2dzJ10uaW5kZXhPZih0aGlzLmRlZmF1bHRCbG9ja0lkKSA9PT0gLTEpIHtcclxuICAgICAgd2luZG93WydkZWZhdWx0QmxvY2tMb2dzJ10ucHVzaCh0aGlzLmRlZmF1bHRCbG9ja0lkKTtcclxuICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkZXJTZXJ2aWNlLnNraXBMb2FkaW5nID0gdGhpcy5za2lwTG9hZGVyO1xyXG4gICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRCbG9ja0J5TmFtZSh0aGlzLmRlZmF1bHRCbG9ja0lkKS5zdWJzY3JpYmUoKGRhdGEpID0+IHtcclxuICAgICAgICB3aW5kb3dbJ2RlZmF1bHRCbG9ja0RhdGFMb2dzJ10ucHVzaCh7IGRlZmF1bHRCbG9ja0lkOiB0aGlzLmRlZmF1bHRCbG9ja0lkLCBibG9ja0RhdGE6IGRhdGEgfSk7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzRGVmYXVsdEJsb2NrRGF0YShkYXRhKTtcclxuICAgICAgfSk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvd1snZGVmYXVsdEJsb2NrRGF0YUxvZ3MnXSkge1xyXG4gICAgICBsZXQgYmxvY2tEYXRhID0gd2luZG93WydkZWZhdWx0QmxvY2tEYXRhTG9ncyddLmZpbHRlcihlID0+IHsgaWYgKGUuZGVmYXVsdEJsb2NrSWQgPT0gdGhpcy5kZWZhdWx0QmxvY2tJZCkgcmV0dXJuIGUuYmxvY2tEYXRhIH0pLmxlbmd0aCA+IDAgPyB3aW5kb3dbJ2RlZmF1bHRCbG9ja0RhdGFMb2dzJ10uZmlsdGVyKGUgPT4geyBpZiAoZS5kZWZhdWx0QmxvY2tJZCA9PSB0aGlzLmRlZmF1bHRCbG9ja0lkKSByZXR1cm4gZS5ibG9ja0RhdGEgfSlbMF0uYmxvY2tEYXRhIDogdW5kZWZpbmVkO1xyXG4gICAgICBpZiAoYmxvY2tEYXRhKSB7XHJcbiAgICAgICAgdGhpcy5wcm9jZXNzRGVmYXVsdEJsb2NrRGF0YShibG9ja0RhdGEpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcm9jZXNzRGVmYXVsdEJsb2NrRGF0YShkYXRhKSB7XHJcbiAgICB0aGlzLmRlZmF1bHRCbG9ja1JlbmRlcmVkRGF0YSA9IHRoaXMuY29tbW9uVXRpbC5ibG9ja0Jvb3RzdHJhcFByb2Nlc3MoZGF0YSk7XHJcbiAgICBpZiAodGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgdGhpcy5kZWZhdWx0QmxvY2tBZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgIHN3aXRjaCAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUpIHtcclxuICAgICAgICAgIGNhc2UgJ092ZXJyaWRlQ29uZGl0aW9ucyc6XHJcbiAgICAgICAgICAgIGlmIChwYXJhbXRlci52YWx1ZSAmJiBwYXJhbXRlci52YWx1ZSAhPT0gJ05PTkUnICYmIHBhcmFtdGVyLnZhbHVlICE9PSAnQUxMJykge1xyXG4gICAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IHBhcmFtdGVyLnZhbHVlLnNwbGl0KCd8JykubWFwKHZhbCA9PiB2YWwudHJpbSgpKTtcclxuICAgICAgICAgICAgICB0aGlzLmRlZmF1bHRCbG9ja01hbmRhdG9yeUNvbmRpdGlvbi5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgdGhpcy5kZWZhdWx0QmxvY2tFZGl0YWJsZUNvbmRpdGlvbi5maWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgICAgLy8gdGhpcy52aXNpYmxlQ29uZGl0aW9uLmZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgJ0V4Y2VwdGlvbkNvbmRpdGlvbnMnOlxyXG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBwYXJhbXRlci52YWx1ZS5zcGxpdCgnfCcpLm1hcCh2YWwgPT4gdmFsLnRyaW0oKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZGVmYXVsdEJsb2NrTWFuZGF0b3J5Q29uZGl0aW9uLmV4Y2VwdGlvbkZpZWxkcyA9IGZpZWxkcztcclxuICAgICAgICAgICAgdGhpcy5kZWZhdWx0QmxvY2tFZGl0YWJsZUNvbmRpdGlvbi5leGNlcHRpb25GaWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgIC8vIHRoaXMudmlzaWJsZUNvbmRpdGlvbi5leGNlcHRpb25GaWVsZHMgPSBmaWVsZHM7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAvLyBzdWJzY3JpYmUgdG8gZmllbGQgY2hhbmdlc1xyXG4gICAgaWYgKCh0aGlzLmRlZmF1bHRCbG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF92aXNpYmxlICYmIHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUubGVuZ3RoID4gMCkgfHxcclxuICAgICAgKHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlICYmIHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX2VkaXRhYmxlLmxlbmd0aCA+IDApIHx8XHJcbiAgICAgICh0aGlzLmRlZmF1bHRCbG9ja1JlbmRlcmVkRGF0YS5jb25kaXRpb25hbF9tYW5kYXRvcnkgJiYgdGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfbWFuZGF0b3J5Lmxlbmd0aCA+IDApKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEJsb2NrVmFyaWFibGVPYmpbdGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgKyAnX2VtaXRPbkRhdGFTZXRPclVwZGF0ZWRGb3JHZW5lcmljQmxvY2snXSA9XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWRGb3JHZW5lcmljQmxvY2suc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5vbkRlZmF1bHRGaWVsZERhdGFVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhWydjdXN0b21fY2xhc3NfY29uZGl0aW9uJ10gJiYgdGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGFbJ2N1c3RvbV9jbGFzc19jb25kaXRpb24nXS5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSAmJiB0aGlzLmRlZmF1bHRCbG9ja1JlbmRlcmVkRGF0YVsnY3VzdG9tX2NsYXNzX2NvbmRpdGlvbiddWydxdWVyeSddICE9ICcnKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEJsb2NrQ3VzdG9tQ2xhc3NDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0N1c3RvbUNsYXNzKHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLCBTdHJpbmcodGhpcy5hcHBEYXRhLmlkKSwgJycpO1xyXG4gICAgICB0aGlzLmRlZmF1bHRCbG9ja1ZhcmlhYmxlT2JqW3RoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkICsgJ19lbWl0T25EYXRhU2V0T3JVcGRhdGVkJ10gPVxyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkLnN1YnNjcmliZSgocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgIHRoaXMuc2V0RGVmYXVsdEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KHJlcy52YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogaWYgKHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX3Zpc2libGUgJiYgdGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfdmlzaWJsZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgdGhpcy52aXNpYmxlQ29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH0gKi9cclxuXHJcbiAgICBpZiAodGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUgJiYgdGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfZWRpdGFibGUubGVuZ3RoID4gMCkge1xyXG4gICAgICB0aGlzLmRlZmF1bHRCbG9ja0VkaXRhYmxlQ29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuY29uZGl0aW9uYWxfbWFuZGF0b3J5ICYmIHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmNvbmRpdGlvbmFsX21hbmRhdG9yeS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEJsb2NrTWFuZGF0b3J5Q29uZGl0aW9uLmlzQWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmRlZmF1bHRCbG9ja1Jvb3REYXRhWydibG9ja0ZpZWxkcyddW3RoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkXSA9IFtdO1xyXG4gICAgZm9yIChsZXQgZmllbGQgb2YgdGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzKSB7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEJsb2NrUm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bdGhpcy5kZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWRdLnB1c2goZmllbGQudW5pcXVlX2lkKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgfVxyXG5cclxuICBzZXRQcm9ncmVzc0Jsb2NrUmVuZGVyZXIoKSB7XHJcbiAgICBsZXQgY3VyclN0ZXAgPSB0aGlzLnN0ZXBJZDtcclxuICAgIGlmICh0aGlzLm5hdmlnYXRlU3RlcE5hbWUgJiYgdGhpcy5zdGVwSWQuaW5jbHVkZXMoJy0nKSkge1xyXG4gICAgICBjb25zdCBkYXRhID0gY3VyclN0ZXAuc3BsaXQoJy0nKTtcclxuICAgICAgY3VyclN0ZXAgPSBkYXRhW2RhdGEubGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcbiAgICBjb25zdCB3b3JrZmxvd1NlcXVlbmNlSW5kZXggPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldFdvcmtmbG93U2VxdWVuY2VJbmRleEZyb21TdGVwKGN1cnJTdGVwKTtcclxuICAgIGlmICghd29ya2Zsb3dTZXF1ZW5jZUluZGV4KSB7XHJcbiAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuICAgIGNvbnN0IHByb2dyZXNzRGF0YSA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UucHJvZ3Jlc3NCYXJNYXBbXHJcbiAgICAgIHdvcmtmbG93U2VxdWVuY2VJbmRleC5zZXF1ZW5jZV0gfHwge307XHJcbiAgICBpZiAocHJvZ3Jlc3NEYXRhLnByb2dyZXNzICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJvZ3Jlc3NCbG9ja0lkJ10pIHtcclxuICAgICAgaWYgKHByb2dyZXNzRGF0YS5wcm9ncmVzcy5wcm9ncmVzc19iYXJfaWQgPT09IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnUHJvZ3Jlc3NCbG9ja0lkJ10pIHtcclxuICAgICAgICB0aGlzLnByb2dyZXNzQmxvY2sgPSBwcm9ncmVzc0RhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgfVxyXG4gIHByaXZhdGUgb25GaWVsZERhdGFVcGRhdGVkRm9yR2VuZXJpY0Jsb2NrKGZpZWxkSWQ6IHN0cmluZywgdmFsdWU6IHN0cmluZykge1xyXG4gICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnT3ZlcnJpZGVDb25kaXRpb25zJ10gIT09ICdOT05FJykge1xyXG4gICAgICAvKiBjb25zdCBkaXNwbGF5ID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tWaXNpYmlsaXR5KHRoaXMuYmxvY2tSZW5kZXJlZERhdGEsIGZpZWxkSWQsIHZhbHVlKTtcclxuICAgICAgaWYgKGRpc3BsYXkgIT09IHVuZGVmaW5lZCAmJiB0aGlzLmlzRmllbGREaXNwbGF5ID09PSBmYWxzZSkge1xyXG4gICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSBkaXNwbGF5O1xyXG4gICAgICAgICAgdGhpcy52aXNpYmxlQ29uZGl0aW9uLnZhbHVlID0gZGlzcGxheTtcclxuICAgICAgICAgIHRoaXMuc2V0T3ZlcnJpZGUoZGlzcGxheSwgJ3Zpc2libGVDb25kaXRpb24nKTtcclxuICAgICAgfSAqL1xyXG4gICAgICBjb25zdCBlZGl0YWJsZSA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrRWRpdGFibGUodGhpcy5ibG9ja1JlbmRlcmVkRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICBpZiAoZWRpdGFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuZWRpdGFibGVDb25kaXRpb24udmFsdWUgPSBlZGl0YWJsZTtcclxuICAgICAgICB0aGlzLnNldE92ZXJyaWRlKGVkaXRhYmxlLCAnZWRpdGFibGVDb25kaXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYW5kYXRvcnkgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja01hbmRhdG9yeSh0aGlzLmJsb2NrUmVuZGVyZWREYXRhLCBmaWVsZElkLCB2YWx1ZSk7XHJcbiAgICAgIGlmIChtYW5kYXRvcnkgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uLnZhbHVlID0gbWFuZGF0b3J5O1xyXG5cclxuICAgICAgICB0aGlzLnNldE92ZXJyaWRlKG1hbmRhdG9yeSwgJ21hbmRhdG9yeUNvbmRpdGlvbicpO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIHRoaXMudmlzaWJsZUNvbmRpdGlvbiA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy52aXNpYmxlQ29uZGl0aW9uKSk7XHJcbiAgICAgIHRoaXMuZWRpdGFibGVDb25kaXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuZWRpdGFibGVDb25kaXRpb24pKTtcclxuICAgICAgdGhpcy5tYW5kYXRvcnlDb25kaXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMubWFuZGF0b3J5Q29uZGl0aW9uKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIG9uRGVmYXVsdEZpZWxkRGF0YVVwZGF0ZWRGb3JHZW5lcmljQmxvY2soZmllbGRJZDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydPdmVycmlkZUNvbmRpdGlvbnMnXSAhPT0gJ05PTkUnKSB7XHJcbiAgICAgIC8qIGNvbnN0IGRpc3BsYXkgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1Zpc2liaWxpdHkodGhpcy5ibG9ja1JlbmRlcmVkRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICBpZiAoZGlzcGxheSAhPT0gdW5kZWZpbmVkICYmIHRoaXMuaXNGaWVsZERpc3BsYXkgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IGRpc3BsYXk7XHJcbiAgICAgICAgICB0aGlzLnZpc2libGVDb25kaXRpb24udmFsdWUgPSBkaXNwbGF5O1xyXG4gICAgICAgICAgdGhpcy5zZXRPdmVycmlkZShkaXNwbGF5LCAndmlzaWJsZUNvbmRpdGlvbicpO1xyXG4gICAgICB9ICovXHJcbiAgICAgIGNvbnN0IGVkaXRhYmxlID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tFZGl0YWJsZSh0aGlzLmRlZmF1bHRCbG9ja1JlbmRlcmVkRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICBpZiAoZWRpdGFibGUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEJsb2NrRWRpdGFibGVDb25kaXRpb24udmFsdWUgPSBlZGl0YWJsZTtcclxuICAgICAgICB0aGlzLnNldE92ZXJyaWRlKGVkaXRhYmxlLCAnZGVmYXVsdEJsb2NrRWRpdGFibGVDb25kaXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgICBjb25zdCBtYW5kYXRvcnkgPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja01hbmRhdG9yeSh0aGlzLmRlZmF1bHRCbG9ja1JlbmRlcmVkRGF0YSwgZmllbGRJZCwgdmFsdWUpO1xyXG4gICAgICBpZiAobWFuZGF0b3J5ICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICB0aGlzLmRlZmF1bHRCbG9ja01hbmRhdG9yeUNvbmRpdGlvbi52YWx1ZSA9IG1hbmRhdG9yeTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRPdmVycmlkZShtYW5kYXRvcnksICdkZWZhdWx0QmxvY2tNYW5kYXRvcnlDb25kaXRpb24nKTtcclxuICAgICAgfVxyXG4gICAgICAvLyB0aGlzLnZpc2libGVDb25kaXRpb24gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMudmlzaWJsZUNvbmRpdGlvbikpO1xyXG4gICAgICB0aGlzLmRlZmF1bHRCbG9ja0VkaXRhYmxlQ29uZGl0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRlZmF1bHRCbG9ja0VkaXRhYmxlQ29uZGl0aW9uKSk7XHJcbiAgICAgIHRoaXMuZGVmYXVsdEJsb2NrTWFuZGF0b3J5Q29uZGl0aW9uID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmRlZmF1bHRCbG9ja01hbmRhdG9yeUNvbmRpdGlvbikpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2V0T3ZlcnJpZGUoZWRpdGFibGU6IGFueSwgYXJnMTogc3RyaW5nKSB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgfVxyXG4gIHNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KGRhdGE6IG9iamVjdCkge1xyXG4gICAgdGhpcy5jdXN0b21DbGFzc0NvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrQ3VzdG9tQ2xhc3ModGhpcy5ibG9ja1JlbmRlcmVkRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksICcnKTtcclxuICB9XHJcblxyXG4gIHNldERlZmF1bHRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgIHRoaXMuZGVmYXVsdEJsb2NrQ3VzdG9tQ2xhc3NDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja0N1c3RvbUNsYXNzKHRoaXMuZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLCBTdHJpbmcodGhpcy5hcHBEYXRhLmlkKSwgJycpO1xyXG4gIH1cclxuXHJcbiAgZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKSB7XHJcbiAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZVV0aWwuZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKTtcclxuICB9XHJcbiAgZ2V0IG5hdmlnYXRlU3RlcE5hbWUoKSB7XHJcbiAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hdmlnYXRlU3RlcE5hbWUnKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VPdmVybGF5KCkge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICB0aGlzLnNob3dTZWFyY2hIaXN0b3J5QmxvY2sgPSBmYWxzZTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmLmRpc3Bvc2UoKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcbiAgQEhvc3RMaXN0ZW5lcignd2luZG93OnNjcm9sbCcsIFtdKVxyXG4gIG9uV2luZG93U2Nyb2xsKCkge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZiAmJiB0aGlzLm92ZXJsYXlSZWYuaGFzQXR0YWNoZWQoKSkge1xyXG4gICAgICB0aGlzLmNoZWNrU2hvd0Jsb2NrQ29uZGl0aW9uKCk7XHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi5kZXRhY2goKTtcclxuICAgICAgdGhpcy5vdmVybGF5UmVmID0gbnVsbDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIEBIb3N0TGlzdGVuZXIoJ3dpbmRvdzpyZXNpemUnLCBbXSlcclxuICBvbldpbmRvd1Jlc2l6ZSgpIHtcclxuICAgIC8vIElmIG92ZXJsYXkgaXMgY3VycmVudGx5IG9wZW4sIHVwZGF0ZSBpdHMgd2lkdGhcclxuICAgIGlmICh0aGlzLm92ZXJsYXlSZWYgJiYgdGhpcy5vdmVybGF5UmVmLmhhc0F0dGFjaGVkKCkpIHtcclxuICAgICAgLy8gR2V0IHRoZSBuZXcgd2lkdGggb2YgdGhlIHNlYXJjaCBpbnB1dFxyXG4gICAgICBjb25zdCBuZXdJbnB1dFdpZHRoID0gdGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG5cclxuICAgICAgLy8gVXBkYXRlIHRoZSBvdmVybGF5IHdpZHRoXHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVTaXplKHsgd2lkdGg6IGAke25ld0lucHV0V2lkdGh9cHhgIH0pO1xyXG5cclxuICAgICAgLy8gT3B0aW9uYWxseSwgdXBkYXRlIHRoZSBwb3NpdGlvbiBhcyB3ZWxsXHJcbiAgICAgIHRoaXMub3ZlcmxheVJlZi51cGRhdGVQb3NpdGlvbigpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25TaG93T3ZlcmxheSgpIHtcclxuICAgIGlmICghdGhpcy5pc1NlYXJjaEhpc3RvcnlCbG9ja0FwcGxpY2FibGUgJiYgIXRoaXMuc2VhcmNoVGVybS50cmltKCkubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2hvd1NlYXJjaEhpc3RvcnlCbG9jayA9IGZhbHNlO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICB0aGlzLmNoZWNrU2hvd0Jsb2NrQ29uZGl0aW9uKCk7XHJcbiAgICBpZiAodGhpcy5zaG93U2VhcmNoSGlzdG9yeUJsb2NrKSB7XHJcbiAgICAgIHRoaXMubG9hZGVycy5pc0hpc3RvcnlMb2FkaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIC8vIFNob3cgb3ZlcmxheSB3aXRoIGxvYWRlclxyXG4gICAgICB0aGlzLnZpZXdPdmVybGF5KCk7XHJcblxyXG4gICAgICAvLyBUcmlnZ2VyIGNsaWNrIGV2ZW50IHRvIGxvYWQgaGlzdG9yeSBkYXRhXHJcbiAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnb25DbGljaycpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52aWV3T3ZlcmxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hlY2tTaG93QmxvY2tDb25kaXRpb24oKSB7XHJcbiAgICBpZiAodGhpcy5zZWFyY2hUZXJtICYmIHRoaXMuc2VhcmNoVGVybS50cmltKCkubGVuZ3RoID49IHRoaXMuc2VhcmNoTWluTGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuc2hvd1NlYXJjaEhpc3RvcnlCbG9jayA9IGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaG93U2VhcmNoSGlzdG9yeUJsb2NrID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHZpZXdPdmVybGF5KCkge1xyXG4gICAgaWYgKHRoaXMub3ZlcmxheVJlZikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBpbnB1dFdpZHRoID0gdGhpcy5zZWFyY2hJbnB1dC5uYXRpdmVFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xyXG4gICAgY29uc3QgcG9zaXRpb25TdHJhdGVneSA9IHRoaXMucG9zaXRpb25CdWlsZGVyXHJcbiAgICAgIC5mbGV4aWJsZUNvbm5lY3RlZFRvKHRoaXMuc2VhcmNoSW5wdXQpXHJcbiAgICAgIC53aXRoUG9zaXRpb25zKFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICBvcmlnaW5YOiAnc3RhcnQnLFxyXG4gICAgICAgICAgb3JpZ2luWTogJ2JvdHRvbScsXHJcbiAgICAgICAgICBvdmVybGF5WDogJ3N0YXJ0JyxcclxuICAgICAgICAgIG92ZXJsYXlZOiAndG9wJyxcclxuICAgICAgICAgIG9mZnNldFk6IDUsXHJcbiAgICAgICAgfSBhcyBDb25uZWN0ZWRQb3NpdGlvbixcclxuICAgICAgXSlcclxuXHJcbiAgICAgIC53aXRoRmxleGlibGVEaW1lbnNpb25zKGZhbHNlKVxyXG4gICAgICAud2l0aFB1c2goZmFsc2UpO1xyXG5cclxuICAgIHRoaXMub3ZlcmxheVJlZiA9IHRoaXMub3ZlcmxheS5jcmVhdGUoe1xyXG4gICAgICBwb3NpdGlvblN0cmF0ZWd5LFxyXG4gICAgICBoYXNCYWNrZHJvcDogZmFsc2UsXHJcbiAgICAgIHdpZHRoOiBgJHtpbnB1dFdpZHRofXB4YCxcclxuICAgICAgc2Nyb2xsU3RyYXRlZ3k6IHRoaXMub3ZlcmxheS5zY3JvbGxTdHJhdGVnaWVzLnJlcG9zaXRpb24oKSxcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IHBvcnRhbCA9IG5ldyBUZW1wbGF0ZVBvcnRhbCh0aGlzLm92ZXJsYXlUZW1wbGF0ZSwgdGhpcy52Y3IpO1xyXG4gICAgdGhpcy5vdmVybGF5UmVmLmF0dGFjaChwb3J0YWwpO1xyXG4gICAgdGhpcy5vdmVybGF5UmVmLmJhY2tkcm9wQ2xpY2soKS5zdWJzY3JpYmUoKCkgPT4gdGhpcy5jbG9zZU92ZXJsYXkoKSk7XHJcbiAgfVxyXG5cclxuICBvblNlYXJjaElucHV0KGV2ZW50OiBLZXlib2FyZEV2ZW50KSB7XHJcbiAgICAvLyBIYW5kbGUgRXNjYXBlIGtleVxyXG4gICAgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScpIHtcclxuICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRlcm0gPSB0aGlzLnNlYXJjaFRlcm0/LnRyaW0oKTtcclxuXHJcbiAgICBpZiAoZXZlbnQua2V5ID09PSAnQmFja3NwYWNlJykge1xyXG4gICAgICB0aGlzLnVwZGF0ZURhdGFPbkNoYW5nZSh0ZXJtKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGVybS5sZW5ndGggPCB0aGlzLnNlYXJjaE1pbkxlbmd0aCAmJiB0ZXJtLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIENsZWFyIHJlc3VsdHMgaWYgdGVybSBpcyBlbXB0eVxyXG4gICAgaWYgKCF0ZXJtIHx8IHRlcm0ubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzU2VhcmNoSGlzdG9yeUJsb2NrQXBwbGljYWJsZSkge1xyXG4gICAgICAgIHRoaXMuc2hvd1NlYXJjaEhpc3RvcnlCbG9jayA9IHRydWU7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jbG9zZU92ZXJsYXkoKTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdGhpcy52aWV3T3ZlcmxheSgpO1xyXG4gICAgLy8gU2VuZCB0ZXJtIHRvIGRlYm91bmNlZCBzdWJqZWN0XHJcbiAgICB0aGlzLnNlYXJjaFN1YmplY3QubmV4dCh0ZXJtKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgdXBkYXRlRGF0YU9uQ2hhbmdlKHRlcm06IHN0cmluZykge1xyXG4gICAgLy8gVXBkYXRlIGFwcERhdGEgd2l0aCB0aGUgc2VhcmNoIHRlcm1cclxuICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YSh7XHJcbiAgICAgIC4uLnRoaXMuYXBwRGF0YSxcclxuICAgICAgdmFsdWU6IHRlcm0sXHJcbiAgICAgIHZpc2libGU6IHRoaXMuaXNWaXNpYmxlLFxyXG4gICAgICBlZGl0YWJsZTogdGhpcy5pc0VkaXRhYmxlLFxyXG4gICAgICBtYW5kYXRvcnk6IHRoaXMuaXNNYW5kYXRvcnlcclxuICAgIH0pO1xyXG4gIH0gXHJcblxyXG4gIC8vIFNldCB1cCBjbGljayBvdXRzaWRlIGxpc3RlbmVyXHJcbiAgcHJpdmF0ZSBzZXR1cE91dHNpZGVDbGlja0xpc3RlbmVyKCkge1xyXG4gICAgZnJvbUV2ZW50PE1vdXNlRXZlbnQ+KGRvY3VtZW50LCAnY2xpY2snKVxyXG4gICAgICAucGlwZShcclxuICAgICAgICBmaWx0ZXIoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgY29uc3QgY2xpY2tUYXJnZXQgPSBldmVudC50YXJnZXQgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgICAgICBjb25zdCBpc091dHNpZGUgPSAhdGhpcy5lbGVtZW50UmVmLm5hdGl2ZUVsZW1lbnQuY29udGFpbnMoY2xpY2tUYXJnZXQpICYmXHJcbiAgICAgICAgICAgIHRoaXMub3ZlcmxheVJlZiAmJlxyXG4gICAgICAgICAgICAhdGhpcy5vdmVybGF5UmVmLm92ZXJsYXlFbGVtZW50LmNvbnRhaW5zKGNsaWNrVGFyZ2V0KTtcclxuICAgICAgICAgIHJldHVybiBpc091dHNpZGU7XHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgdGFrZVVudGlsKHRoaXMuZGVzdHJveSQpXHJcbiAgICAgIClcclxuICAgICAgLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgdGhpcy56b25lLnJ1bigoKSA9PiB0aGlzLmNsb3NlT3ZlcmxheSgpKTtcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBwZXJmb3JtU2VhcmNoKHRlcm06IHN0cmluZykge1xyXG4gICAgLy8gSGlkZSB0aGUgb3ZlcmxheSBpZiBpdCdzIG9wZW5cclxuICAgIHRoaXMuY2hlY2tTaG93QmxvY2tDb25kaXRpb24oKTtcclxuICAgIHRoaXMubG9hZGVycy5pc1NlYXJjaExvYWRpbmcgPSB0cnVlO1xyXG4gICAgXHJcbiAgICB0aGlzLnZpZXdPdmVybGF5KCk7ICAgIFxyXG4gICAgdGhpcy51cGRhdGVEYXRhT25DaGFuZ2UodGVybSk7XHJcbiAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uS2V5VXAnKTtcclxuICB9XHJcblxyXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcclxuICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgIH1cclxuICAgIGlmIChjaGFuZ2VzLnZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbi5jdXJyZW50VmFsdWUsICdpc1Zpc2libGUnKTtcclxuICAgIH1cclxuICAgIC8vIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgLy8gICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgIC8vIH1cclxuICB9XHJcblxyXG4gIHNldENvbmRpdGlvbnMoY2hpbGRDb25kaXRpb25zOiBDaGlsZENvbmRpdGlvbiwgdHlwZSkge1xyXG4gICAgbGV0IGNoZWNrID0gdHJ1ZTtcclxuICAgIGlmIChjaGlsZENvbmRpdGlvbnMgJiYgY2hpbGRDb25kaXRpb25zLmV4Y2VwdGlvbkZpZWxkcyAmJiBjaGlsZENvbmRpdGlvbnMuZXhjZXB0aW9uRmllbGRzLmxlbmd0aCA+IDAgJiYgY2hpbGRDb25kaXRpb25zLmV4Y2VwdGlvbkZpZWxkcy5pbmNsdWRlcyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpKSB7XHJcbiAgICAgIGNoZWNrID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGNoZWNrICYmIGNoaWxkQ29uZGl0aW9ucyAmJiBjaGlsZENvbmRpdGlvbnMuaXNBY3RpdmUpIHtcclxuICAgICAgaWYgKGNoaWxkQ29uZGl0aW9ucy5maWVsZHMgJiYgY2hpbGRDb25kaXRpb25zLmZpZWxkcy5sZW5ndGggPiAwICYmIGNoaWxkQ29uZGl0aW9ucy5maWVsZHMuaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgIHRoaXNbdHlwZV0gPSBjaGlsZENvbmRpdGlvbnMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25PYmpbdHlwZV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2UgaWYgKGNoaWxkQ29uZGl0aW9ucy5vdmVycmlkZUFsbCkge1xyXG4gICAgICAgIHRoaXNbdHlwZV0gPSBjaGlsZENvbmRpdGlvbnMudmFsdWU7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25PYmpbdHlwZV0gPSB0cnVlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uT2JqW3R5cGVdID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BMb2FkZXIoKSB7XHJcbiAgICB0aGlzLmxvYWRlcnMuaXNTZWFyY2hMb2FkaW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLmxvYWRlcnMuaXNIaXN0b3J5TG9hZGluZyA9IGZhbHNlO1xyXG4gIH1cclxuXHJcbiAgb25Db21wb25lbnRFdmVudCh0eXBlOiBzdHJpbmcsIHByaW1hcnlEYXRhOiBhbnkgPSB7fSwgaXNEZWZhdWx0OiBib29sZWFuID0gdHJ1ZSwgcGF5TG9hZD86IGFueSwgZGlzcGxheVR5cGU6IHN0cmluZyA9ICcnKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5maWVsZERhdGEuZXZlbnRfbGlzdCAmJiB0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBfdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLm9uQ29tcG9uZW50RXZlbnRCYXRjaChfdGhpcy5maWVsZERhdGEsIF90aGlzLnByZXNldERhdGEsIF90aGlzLnN0ZXBJZCwgdHlwZSwgcHJpbWFyeURhdGEsIGlzRGVmYXVsdCwgcGF5TG9hZCwgZGlzcGxheVR5cGUpO1xyXG4gICAgICB9LCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG5nT25EZXN0cm95KCkge1xyXG4gICAgLy8gQ2xvc2UgdGhlIG92ZXJsYXkgaWYgaXQncyBvcGVuXHJcbiAgICB0aGlzLmNsb3NlT3ZlcmxheSgpO1xyXG5cclxuICAgIC8vIENvbXBsZXRlIGFuZCBjbGVhbiB1cCBhbGwgUnhKUyBzdWJqZWN0c1xyXG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XHJcbiAgICB0aGlzLmRlc3Ryb3kkLmNvbXBsZXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc2VhcmNoU3ViamVjdCkge1xyXG4gICAgICB0aGlzLnNlYXJjaFN1YmplY3QuY29tcGxldGUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGFsbCBzdWJzY3JpcHRpb25zIGluIHZhcmlhYmxlT2JqXHJcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aGlzLnZhcmlhYmxlT2JqKSB7XHJcbiAgICAgIGlmICh0aGlzLnZhcmlhYmxlT2JqW2tleV0pIHtcclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqW2tleV0udW5zdWJzY3JpYmUoKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIFVuc3Vic2NyaWJlIGZyb20gYWxsIHN1YnNjcmlwdGlvbnMgaW4gZGVmYXVsdEJsb2NrVmFyaWFibGVPYmpcclxuICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMuZGVmYXVsdEJsb2NrVmFyaWFibGVPYmopIHtcclxuICAgICAgaWYgKHRoaXMuZGVmYXVsdEJsb2NrVmFyaWFibGVPYmpba2V5XSkge1xyXG4gICAgICAgIHRoaXMuZGVmYXVsdEJsb2NrVmFyaWFibGVPYmpba2V5XS51bnN1YnNjcmliZSgpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5mdW5jdGlvbiBvcndhcmRSZWYoYXJnMDogKCkgPT4gdHlwZW9mIFZpZXdSZW5kZXJlckNvbXBvbmVudCk6IHJlYWRvbmx5IGFueVtdIHwgaW1wb3J0KFwiQGFuZ3VsYXIvY29yZVwiKS5UeXBlPGFueT4ge1xyXG4gIHRocm93IG5ldyBFcnJvcignRnVuY3Rpb24gbm90IGltcGxlbWVudGVkLicpO1xyXG59XHJcblxyXG5cclxuIiwiPG5nLWNvbnRhaW5lciAqbmdJZj1cImlzVmlzaWJsZVwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImdsb2JhbC1zZWFyY2gtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1pbnB1dC13cmFwcGVyXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGNsYXNzPVwic2VhcmNoLWlucHV0IHt7ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lfX0taW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ7e2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0IHx8ICdTZWFyY2guLi4nfX1cIiBbKG5nTW9kZWwpXT1cInNlYXJjaFRlcm1cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2hvd092ZXJsYXkoKVwiIChrZXl1cCk9XCJvblNlYXJjaElucHV0KCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiAnU2VhcmNoJ1wiXHJcbiAgICAgICAgICAgICAgICBbYXR0ci5hcmlhLWV4cGFuZGVkXT1cImlzT3ZlcmxheVZpc2libGVcIiAjc2VhcmNoSW5wdXQ+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzZWFyY2gtaWNvbi1idG4ge3tmaWVsZERhdGEuZmllbGRfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWV9fS1idG5cIlxyXG4gICAgICAgICAgICAgICAgKGNsaWNrKT1cIm9uU2VhcmNoSW5wdXQoJGV2ZW50KVwiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJzZWFyY2gtaWNvblwiPjwvaT5cclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9uZy1jb250YWluZXI+XHJcbjxuZy10ZW1wbGF0ZSAjb3ZlcmxheVRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cInt7ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lfX1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgIDwhLS0gTG9hZGluZyBJbmRpY2F0b3IgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGltbWVyLWxvYWRlclwiICpuZ0lmPVwibG9hZGVycz8uaXNTZWFyY2hMb2FkaW5nIHx8IGxvYWRlcnM/LmlzSGlzdG9yeUxvYWRpbmdcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGltbWVyLWxpbmVcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaGltbWVyLWxpbmUgbG9uZ1wiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNoaW1tZXItbGluZVwiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0gSFRNTCBGT1IgQUxMIEdFTkVSSUMgQkxPQ0sgLS0+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCIhbG9hZGVycz8uaXNTZWFyY2hMb2FkaW5nICYmICFsb2FkZXJzPy5pc0hpc3RvcnlMb2FkaW5nXCI+XHJcbiAgICAgICAgICAgICAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiIXNob3dTZWFyY2hIaXN0b3J5QmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c2VjdGlvbiBpZD1cInt7IGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5yb2xlXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtUm9sZSddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtYmxvY2sgZ2VuZXJpYy1ibG9jayB0ZW1wbGF0ZS17e3RlbXBsYXRlSWR9fSBibG9jay17eyBibG9ja1JlbmRlcmVkRGF0YS5ibG9ja19pZCB9fSAgYmxvY2ste3tibG9ja1Bvc2l0aW9ufX0ge3tpc19ib290c3RyYXA/J3Jvdyc6Jyd9fSB7e2lzVmlzaWJsZT8gJ3Zpc2FibGUtc2VjdGlvbic6Jyd9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICpuZ0lmPVwiYmxvY2tSZW5kZXJlZERhdGEgICYmIGlzVmlzaWJsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFtuZ0NsYXNzXT1cImJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlICYmIGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lICYmIGN1c3RvbUNsYXNzQ29uZGl0aW9uID8gYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUuY3VzdG9tX2NsYXNzX25hbWUgOiAnJ1wiPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPG5nLWNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKm5nRm9yPVwibGV0IGZpZWxkIG9mIGJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2ZpZWxkczsgaW5kZXggYXMgcG9zOyB0cmFja0J5OiB0cmFja0J5SWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhcHAtdmlldy1yZW5kZXJlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYXBwLXZpZXctcmVuZGVyZXIte3sgYmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX0te3twb3N9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZF09XCJzdGVwSWRcIiBbZmllbGRdPVwiZmllbGRcIiBbcG9zaXRpb25dPVwicG9zXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvb3REYXRhXT1cInJvb3REYXRhXCIgW3Jvd0RhdGFdPVwiZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJtYW5kYXRvcnlDb25kaXRpb25cIiBbZWRpdGFibGVDb25kaXRpb25dPVwiZWRpdGFibGVDb25kaXRpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYXBwLXZpZXctcmVuZGVyZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XHJcbiAgICAgICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJzaG93U2VhcmNoSGlzdG9yeUJsb2NrICYmIGlzU2VhcmNoSGlzdG9yeUJsb2NrQXBwbGljYWJsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzZWN0aW9uIGlkPVwie3sgZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX2lkIH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gPyBhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLUxhYmVsJ10gOiB1bmRlZmluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5yb2xlXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtUm9sZSddXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJjZWUtYmxvY2sgZ2VuZXJpYy1ibG9jayB0ZW1wbGF0ZS17e3RlbXBsYXRlSWR9fSBibG9jay17eyBkZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX0gIGJsb2NrLXt7YmxvY2tQb3NpdGlvbn19IHt7aXNfYm9vdHN0cmFwPydyb3cnOicnfX0ge3tpc1Zpc2libGU/ICd2aXNhYmxlLXNlY3Rpb24nOicnfX1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAqbmdJZj1cImRlZmF1bHRCbG9ja1JlbmRlcmVkRGF0YSAmJiBpc1Zpc2libGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBbbmdDbGFzc109XCJkZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfc3R5bGUgJiYgZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lICYmIGRlZmF1bHRCbG9ja0N1c3RvbUNsYXNzQ29uZGl0aW9uID8gZGVmYXVsdEJsb2NrUmVuZGVyZWREYXRhLmJsb2NrX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lIDogJydcIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxuZy1jb250YWluZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICpuZ0Zvcj1cImxldCBmaWVsZCBvZiBkZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfZmllbGRzOyBpbmRleCBhcyBwb3M7IHRyYWNrQnk6IHRyYWNrQnlJZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGFwcC12aWV3LXJlbmRlcmVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJhcHAtdmlldy1yZW5kZXJlci17eyBkZWZhdWx0QmxvY2tSZW5kZXJlZERhdGEuYmxvY2tfaWQgfX0te3twb3N9fSB7e2ZpZWxkLmZpZWxkX3N0eWxlP2NvbW1vblV0aWwuYm9vdHN0cmFwQ29sQ2xhc3MoZmllbGQuZmllbGRfc3R5bGUuYm9vdHN0cmFwX2NsYXNzX25hbWUsIGlzX2Jvb3RzdHJhcCwgJycsIGNvbmRpdGlvbmFsVXRpbC5ldmFsdXRlQm9vdHN0cmFwQ29uZGl0aW9uKGZpZWxkKSk6Jyd9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3N0ZXBJZF09XCJzdGVwSWRcIiBbZmllbGRdPVwiZmllbGRcIiBbcG9zaXRpb25dPVwicG9zXCIgW3RlbXBsYXRlSWRdPVwidGVtcGxhdGVJZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW3Jvb3REYXRhXT1cImRlZmF1bHRCbG9ja1Jvb3REYXRhXCIgW3Jvd0RhdGFdPVwiZ2VuZXJhdGVSb3dEYXRhKGZpZWxkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW21hbmRhdG9yeUNvbmRpdGlvbl09XCJkZWZhdWx0QmxvY2tNYW5kYXRvcnlDb25kaXRpb25cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtlZGl0YWJsZUNvbmRpdGlvbl09XCJkZWZhdWx0QmxvY2tFZGl0YWJsZUNvbmRpdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hcHAtdmlldy1yZW5kZXJlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICAgICAgICAgIDwvbmctY29udGFpbmVyPlxyXG4gICAgICAgICAgICA8L25nLWNvbnRhaW5lcj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L25nLXRlbXBsYXRlPiJdfQ==