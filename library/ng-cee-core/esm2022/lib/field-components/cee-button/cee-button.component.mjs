import { Component, Input } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { Subscription } from 'rxjs';
import { ApplicationStateStoreUtil } from '../../utils/application-state-store-util';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgClass, NgStyle, CommonModule } from '@angular/common';
import { DebounceClickDirective } from './cee-button.directive';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { AlertModalComponent } from '../../components/alert-modal/alert-modal.component';
import { take } from 'rxjs/operators';
import * as i0 from "@angular/core";
import * as i1 from "../../services/user-data-handler.service";
import * as i2 from "../../services/shared-events-service.service";
import * as i3 from "../../services/internal-cee-emitter-service.service";
import * as i4 from "../../services/cee-api-service.service";
import * as i5 from "@angular/router";
import * as i6 from "../../services/wfe-step-loader.service";
import * as i7 from "../../models/app-data/app-data.service";
import * as i8 from "../../models/api-data/api-data.service";
import * as i9 from "@angular/material/dialog";
import * as i10 from "@angular/material/snack-bar";
import * as i11 from "@angular/common/http";
import * as i12 from "../../services/file-upload-service.service";
import * as i13 from "@angular/common";
import * as i14 from "../../directives/tooltip/tooltip.directive";
const _c0 = () => ({ "Submit": "cee-button success", "Button": "cee-button default", "Previous": "cee-button danger", "Next": "cee-button info" });
const _c1 = (a0, a1, a2, a3, a4, a5, a6, a7) => ({ "font-family": a0, "font-size": a1, "font-style": a2, "color": a3, "border-color": a4, "height": a5, "width": a6, "background-color": a7 });
function CeeButtonComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 5);
    i0.ɵɵtext(1, "i");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeButtonComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 1);
    i0.ɵɵlistener("contextmenu", function CeeButtonComponent_div_0_Template_div_contextmenu_0_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onContextMenu($event)); });
    i0.ɵɵelementStart(1, "div", 2)(2, "button", 3);
    i0.ɵɵlistener("click", function CeeButtonComponent_div_0_Template_button_click_2_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.buttonClickListener()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(3, CeeButtonComponent_div_0_button_3_Template, 2, 2, "button", 4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵproperty("ngClass", ctx_r1.cssClasses);
    i0.ɵɵadvance(2);
    i0.ɵɵpropertyInterpolate("name", ctx_r1.fieldData.api_key);
    i0.ɵɵpropertyInterpolate("id", ctx_r1.html_id);
    i0.ɵɵproperty("ngClass", ctx_r1.fieldData.field_style ? ctx_r1.isCustomClass && ctx_r1.fieldData.field_style.custom_class_name ? ctx_r1.fieldData.field_style.custom_class_name : "btn btn-primary" : i0.ɵɵpureFunction0(11, _c0)[ctx_r1.fieldData.field_type])("ngStyle", i0.ɵɵpureFunction8(12, _c1, ctx_r1.fieldData.field_style.font_name, ctx_r1.fieldData.field_style.font_size, ctx_r1.fieldData.field_style.font_style, ctx_r1.fieldData.field_style.font_color, ctx_r1.fieldData.field_style.border_color, ctx_r1.fieldData.field_style.field_height, ctx_r1.fieldData.field_style.field_width, ctx_r1.fieldData.field_style.background_color))("disabled", !ctx_r1.isEditable || !ctx_r1.validationPassed)("innerHtml", ctx_r1.buttonLabel, i0.ɵɵsanitizeHtml);
    i0.ɵɵattribute("aria-label", ctx_r1.additionalParameter["Aria-Label"] ? ctx_r1.additionalParameter["Aria-Label"] : "Click on " + ctx_r1.fieldData.field_label)("role", ctx_r1.additionalParameter["Aria-Role"] ? ctx_r1.additionalParameter["Aria-Role"] : "button")("tabindex", ctx_r1.tabIndexValue);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
} }
/**
 * CeeButtonComponent - Smart Button with Validation Control
 *
 * Enhanced Force Disable Section Parameter Support:
 * The 'Force Disable Section' parameter now supports multiple section IDs
 * separated by pipe (|) character for comprehensive validation control.
 *
 * Examples:
 * - Single section: "17_34596_contact_view"
 * - Multiple sections: "17_34596_contact_view|0_34596_contact_view"
 * - Complex scenarios: "section1|section2|section3"
 *
 * The button will be disabled if ANY of the specified sections have:
 * - Missing mandatory field values
 * - Invalid field values with validation errors
 *
 * @enhanced Multi-section validation support for Force Disable Section parameter
 */
export class CeeButtonComponent extends BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    ceeApiService;
    router;
    sharedEventsServices;
    wfeStepLoaderService;
    appDataService;
    apiDataService;
    dialog;
    snackBar;
    http;
    fileUploadService;
    cdr;
    storageService;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    buttonLabel = '';
    html_id = '';
    labelEmitter;
    appConfigData = {};
    validationPassed = true;
    sessionKeyUtil;
    $buttonValidationEmitter;
    applicationStateStore;
    checkBlockSection = '';
    fieldLabels = [];
    eventFlag = true;
    pdfUrl = '';
    labelUpdateTimeout;
    validationTimeout;
    buttonListnerTimeout;
    subscriptions = new Subscription();
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, ceeApiService, router, 
    // public ceeInitService: CeeInitServiceService,
    sharedEventsServices, 
    // public ceeLogHandlerService: CeeLogHandlerService,
    wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http, fileUploadService, cdr, storageService) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, ceeApiService, router, fileUploadService);
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.ceeApiService = ceeApiService;
        this.router = router;
        this.sharedEventsServices = sharedEventsServices;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this.fileUploadService = fileUploadService;
        this.cdr = cdr;
        this.storageService = storageService;
        this.sessionKeyUtil = new SessionKeyUtil();
    }
    ngAfterViewInit() {
        this.cdr.detectChanges();
    }
    ngAfterContentChecked() {
        this.cdr.detectChanges();
    }
    ngOnInit() {
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.buttonLabel = this.fieldData.field_label;
        this.applicationStateStore = new ApplicationStateStoreUtil(this.appDataService);
        this.checkConditionOnInit(this.editableCondition, this.visibleCondition, this.mandatoryCondition);
        localStorage.setItem('isButtonInvokeApi', '0');
    }
    //@HostListener('window:beforeunload')
    ngOnDestroy() {
        // Clear all timeouts
        if (this.validationTimeout) {
            clearTimeout(this.validationTimeout);
            this.validationTimeout = null;
        }
        if (this.labelUpdateTimeout) {
            clearTimeout(this.labelUpdateTimeout);
            this.labelUpdateTimeout = null;
        }
        if (this.buttonListnerTimeout) {
            clearTimeout(this.buttonListnerTimeout);
            this.buttonListnerTimeout = null;
        }
        // Unsubscribe from all subscriptions
        if (this.subscriptions) {
            this.subscriptions.unsubscribe();
        }
        // Clean up legacy subscription
        this.unsubscribe();
        // Close any open dialogs created by this component
        const htmlId = this.rowData ? this.rowData.html_id : this.fieldData?.html_id;
        if (htmlId) {
            const id = `previewModal-${htmlId.toLowerCase()}`;
            this.dialog.openDialogs.forEach(dialog => {
                if (dialog.id === id) {
                    dialog.close();
                }
            });
        }
        // Clean up DOM references
        if (this.rootData && this.rootData['FieldErrorFunctions'] && this.fieldData && this.fieldData.html_id) {
            delete this.rootData['FieldErrorFunctions'][this.fieldData.html_id];
        }
        // Clear object references
        this.applicationStateStore = null;
        this.rootData = null;
        this.variableObject = null;
        this.appConfigData = null;
        this.fieldLabels = null;
        // Clear localStorage entries if they were set by this component
        localStorage.removeItem('isButtonInvokeApi');
        // Call parent cleanup
        this.onViewUnload();
    }
    unsubscribe() {
        if (this.labelEmitter) {
            this.labelEmitter.unsubscribe();
        }
    }
    onViewDataInit() {
        // For unique html id
        this.html_id = this.fieldData.html_id;
        // console.log("onViewDataInit---", this.html_id);
        // END
        if (this.labelUpdateTimeout) {
            clearTimeout(this.labelUpdateTimeout);
        }
        this.tabIndexValue = this.additionalParameter['TabIndex'];
        if (this.isSingleApiKey) {
            if (this.rowData) {
                if (this.fieldData.api_key !== '') {
                    if (this.rowData.hasOwnProperty('value')) {
                        this.labelUpdateTimeout = setTimeout(() => {
                            this.buttonLabel = this.rowData.value;
                            this.cdr.detectChanges();
                        }, 0);
                    }
                }
            }
            else {
                if (this.fieldValue) {
                    this.labelUpdateTimeout = setTimeout(() => {
                        this.buttonLabel = this.fieldValue;
                        this.cdr.detectChanges();
                    }, 0);
                }
            }
        }
        else {
            if (this.rowData) {
                if (this.fieldData.response_api_key !== '') {
                    if (this.rowData.hasOwnProperty('value')) {
                        this.labelUpdateTimeout = setTimeout(() => {
                            this.buttonLabel = this.rowData.value;
                            this.cdr.detectChanges();
                        }, 0);
                    }
                }
            }
            else {
                if (this.fieldValue) {
                    this.labelUpdateTimeout = setTimeout(() => {
                        this.buttonLabel = this.fieldValue;
                        this.cdr.detectChanges();
                    }, 0);
                }
            }
        }
        if (this.additionalParameter['Force Disable Section']) {
            this.checkBlockSection = this.additionalParameter['Force Disable Section'];
            // ENHANCED: Log multiple section support with proper parsing
            const sectionIds = this.parseSectionIds(this.checkBlockSection);
            // console.log('🔧 Force Disable Section parameter initialized with sections:', sectionIds);
            if (sectionIds.length === 0) {
                console.warn('⚠️ Force Disable Section parameter is empty or invalid');
                return;
            }
            this.subscriptions.add(this.sharedEventsService.buttonValidationEmitter.subscribe(() => {
                if (this.validationTimeout) {
                    clearTimeout(this.validationTimeout);
                }
                this.validationTimeout = setTimeout(() => {
                    // Enhanced validation now supports multiple sections separated by pipe (|)
                    const validationResult = this.checkValidateANDCheckMandatoryFieldsForSection({ mandatory: true, valid: true }, this.checkBlockSection);
                    const isValidationPassed = validationResult.length === 0;
                    console.log('🎯 Force Disable Section validation result:', {
                        sections: sectionIds,
                        validationIssues: validationResult.length,
                        buttonEnabled: isValidationPassed,
                        failedFields: validationResult
                    });
                    this.forceDisableButtonForSection(isValidationPassed);
                }, 0);
            }));
        }
        if (this.additionalParameter['Force Disable Block']) {
            this.checkBlockSection = this.additionalParameter['Force Disable Block'];
            this.subscriptions.add(this.sharedEventsService.buttonValidationEmitter.subscribe(() => {
                if (this.validationTimeout) {
                    clearTimeout(this.validationTimeout);
                }
                this.validationTimeout = setTimeout(() => {
                    this.forceDisableButtonForBlock(this.checkValidateANDCheckMandatoryFieldsForBlock({ mandatory: true, valid: true }, this.checkBlockSection).length === 0);
                }, 0);
            }));
        }
        if (this.additionalParameter['Force Disable']) {
            if (this.additionalParameter['Force Disable'].toLowerCase() !== 'false') {
                if (this.additionalParameter['Force Disable'].toLowerCase() !== 'true') {
                    this.checkBlockSection = this.additionalParameter['Force Disable'];
                }
                this.subscriptions.add(this.sharedEventsService.buttonValidationEmitter.subscribe(() => {
                    if (this.validationTimeout) {
                        clearTimeout(this.validationTimeout);
                    }
                    this.validationTimeout = setTimeout(() => {
                        this.forceDisableButton(this.checkValidateANDCheckMandatoryFields({ mandatory: true, valid: true }, this.checkBlockSection).length === 0);
                    }, 0);
                }));
            }
        }
        // set dynamic label on load
        if (!this.rowData) {
            this.getDynamicLabel();
            this.subscriptions.add(this.sharedEventsService.emitOnDataSetOrUpdated.subscribe((res) => {
                const data = {};
                data[res.apiKey] = res.value;
                this.getDynamicLabel(data);
            }));
        }
        this.sharedEventsService.buttonValidationEmitter.emit();
        this.sharedEventsService.validateButtonForTagEmitter.emit();
    }
    getDynamicLabel(data) {
        if (this.fieldData.field_label && this.fieldData.field_label.includes('((dynamic))') ||
            this.fieldData.field_label_config && this.fieldData.field_label_config.includes('((dynamic))')) {
            this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
            if (this.fieldData.field_label != null) {
                this.fieldLabels = [];
                this.fieldLabels.push(this.fieldData.field_label);
            }
        }
    }
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        if (this.fieldData.field_label != '' && this.fieldValue == '') {
            this.buttonLabel = this.fieldData.field_label;
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    /* Special check for button click */
    buttonClickListener() {
        // console.log(" this.rowData--", this.rowData)
        // this.ceeLogHandlerService.d('Button Click', btnLabel + ' ' + btnType + ' ' + btnEvent);
        if (this.rowData) {
            this.buttonListnerTimeout = setTimeout(() => this.listener(), 0);
        }
        else {
            this.listener();
        }
    }
    listener() {
        switch (this.fieldData.field_type) {
            case 'Button':
                this.buttonClick();
                break;
            case 'Next':
                this.nextClick();
                break;
            case 'Previous':
                this.previousClick();
                break;
            case 'Submit':
                this.submitClick();
                break;
            default:
                this.buttonClick();
                break;
        }
    }
    concatData() { }
    buttonClick() {
        this.returnMandatoryCheck();
    }
    nextClick() {
        this.returnMandatoryCheck('next');
    }
    previousClick() {
        this.returnMandatoryCheck('previous');
    }
    submitClick() {
        this.returnMandatoryCheck('submit');
    }
    executeEvent(moveTo) {
        let eHandler;
        let flag = false;
        //check InvokeAPI exist or not .
        for (const event of this.fieldData.event_list) {
            if (event.isDefault) {
                for (const eventParam of event.event_params) {
                    if (eventParam && eventParam.event_config && eventParam.event_config.display_step
                        && (eventParam.event_config.display_step === 'InvokeAPI' || eventParam.event_config.display_step === 'stepRedirection')) {
                        eHandler = eventParam.event_handler;
                        flag = true;
                        if (!this.additionalParameter['IS_CONFIRMATION_BOX_SHOW'] ||
                            (this.additionalParameter['IS_CONFIRMATION_BOX_SHOW'] && this.additionalParameter['IS_CONFIRMATION_BOX_SHOW'].toLowerCase() != 'false')) {
                            const isOpenPopup = this.storageService.getFieldData('CEE_CONFIRM_MODAL_ON_CRUD');
                            const isDrawrOpen = localStorage.getItem('isDrawerOpen') || '0';
                            if (isOpenPopup === '1' && isDrawrOpen === '0' &&
                                ['save', 'submit', 'delete', 'cancel'].some(word => this.buttonLabel?.toLowerCase().includes(word))) {
                                localStorage.setItem('isButtonInvokeApi', '1');
                                localStorage.setItem('buttonText', this.buttonLabel);
                            }
                        }
                    }
                }
            }
        }
        if (this.eventFlag && flag) {
            this.eventFlag = false;
            this.subscriptions.add(this.sharedEventsServices.eventConditionalFailureSubscriber.subscribe((res) => {
                if (res.event_handler === eHandler) {
                    this.eventFlag = true;
                }
                if (res.chk === false) {
                    this.eventFlag = true;
                }
            }));
            this.subscriptions.add(this.sharedEventsServices.eventResponseSubscriber.subscribe((res) => {
                if (res.handler === eHandler) {
                    this.eventFlag = true;
                }
            }));
            this.subscriptions.add(this.sharedEventsServices.emitApiSuccessResponse.subscribe((res) => {
                if (res.handler_name === eHandler) {
                    this.eventFlag = true;
                }
            }));
            this.subscriptions.add(this.sharedEventsService.emitApiSuccessResponse.pipe(take(1)).subscribe(res => {
                let data;
                if (Array.isArray(res)) {
                    data = res[0];
                }
                else {
                    data = res;
                }
                const actionResponseParam = this.fieldData.additional_parameters.find(param => param.parameter_type === 'Action_Response_Key');
                const actionTypeParam = this.fieldData.additional_parameters.find(param => param.parameter_type === 'Action_Type');
                const actionResponseValue = actionResponseParam?.value;
                const actionTypeParamValue = actionTypeParam?.value;
                if (actionResponseValue && actionResponseValue.includes(data.handler_name)) {
                    const apiData = this.apiDataService.getApiDataByHandler(data.handler_name);
                    this.pdfUrl = apiData ? apiData.value[actionResponseValue] : '';
                    if (actionTypeParamValue == "downloadpdf") {
                        this.downloadPdf(this.pdfUrl);
                    }
                    if (actionTypeParamValue === 'previewpdf') {
                        this.openPdfPreviewFromUrl(this.pdfUrl);
                    }
                }
            }));
        }
        else if (!this.eventFlag) {
            return;
        }
        const ModalOnPageLeave = this.additionalParameter['ModalOnPageLeave'] ? this.additionalParameter['ModalOnPageLeave'] : null;
        const primaryData = this.setPrimaryKey(this.primaryKeyIndex);
        const fData = Object.assign({}, this.fieldData);
        fData.event_list = fData.event_list ? fData.event_list.map((event) => {
            return {
                ...event,
                event_params: event.event_params.map((i) => {
                    return {
                        ...i,
                        ModalOnPageLeave
                    };
                })
            };
        }) : [];
        this.fieldData = fData;
        if (moveTo === '') {
            this.onComponentEvent('OnClick', primaryData);
        }
        else {
            // set progress bar step status
            this.wfeStepLoaderService.loaderService.skipLoading = true;
            this.setProgressBarStepStatus().then(() => {
                this.wfeStepLoaderService.loaderService.skipLoading = false;
                this.onComponentEvent('OnClick', primaryData);
                /* const navigateStepName = localStorage.getItem('navigateStepName') === 'true' ? true : false;
                const routeMap = JSON.parse(sessionStorage.getItem('CEE_ROUTE_MAP')); */
                if (moveTo === 'next') {
                    this.wfeEventListHandler.redirectTo(this.wfeStepLoaderService.getNextStepInCurrentSequence(this.stepId), ModalOnPageLeave);
                }
                else if (moveTo === 'previous') {
                    this.wfeEventListHandler.redirectTo(this.wfeStepLoaderService.getPreviousStepInCurrentSequence(this.stepId), ModalOnPageLeave);
                }
            });
        }
    }
    setProgressBarStepStatus() {
        const complete = this.checkValidateANDCheckMandatoryFields({ mandatory: true, valid: true }).length === 0;
        const seq = this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(this.stepId);
        if (seq) {
            const progressBar = this.wfeStepLoaderService.progressBarMap[seq.sequence];
            if (progressBar && progressBar['progress']) {
                complete ?
                    this.applicationStateStore.setComplete(progressBar['progress'].progress_bar_id, this.stepId) :
                    this.applicationStateStore.setIncomplete(progressBar['progress'].progress_bar_id, this.stepId);
            }
        }
        return new Promise(resolve => {
            this.setNextDependentProgressBarStepStatus(this.stepId, resolve);
        });
    }
    setNextDependentProgressBarStepStatus(stepId, resolve) {
        const currStep = this.wfeStepLoaderService.getNextStepInCurrentSequence(stepId);
        if (!currStep) {
            resolve();
        }
        else {
            this.subscriptions.add(this.wfeStepLoaderService.loadStepById(currStep).subscribe((currStepData) => {
                if (currStepData && currStepData.conditional && currStepData.dependency_condition.query) {
                    const dependencyCondition = this.conditionalUtil.checkStepDependency(currStepData.dependency_condition);
                    if (!dependencyCondition) {
                        // set the current step as completed
                        const progressBar = this.wfeStepLoaderService.progressBarMap[this.wfeStepLoaderService.getWorkflowSequenceIndexFromStep(currStep).sequence];
                        if (progressBar && progressBar['progress']) {
                            this.applicationStateStore.setComplete(progressBar['progress'].progress_bar_id, currStep);
                        }
                        this.setNextDependentProgressBarStepStatus(currStep, resolve);
                    }
                    else {
                        resolve();
                    }
                }
                else {
                    resolve();
                }
            }));
        }
    }
    returnMandatoryCheck(moveTo = '') {
        // TODO: Mandatory Check for Repeatable Block Needs to be done
        let mandatorySatisfied;
        if ((this.additionalParameter['MandatoryCheck'] &&
            this.additionalParameter['MandatoryCheck'].toLowerCase() === 'true') ||
            (this.additionalParameter['ValidationCheck'] &&
                this.additionalParameter['ValidationCheck'].toLowerCase() === 'true')) {
            mandatorySatisfied = this.checkValidateANDCheckMandatoryFields({
                mandatory: (this.additionalParameter['MandatoryCheck'] &&
                    this.additionalParameter['MandatoryCheck'].toLowerCase() === 'true'),
                valid: (this.additionalParameter['ValidationCheck'] &&
                    this.additionalParameter['ValidationCheck'].toLowerCase() === 'true')
            });
            this.forceDisableButton(mandatorySatisfied.length === 0);
            if (mandatorySatisfied.length === 0) {
                this.executeEvent(moveTo);
                let url = '';
                if (this.rowData && this.rowData.hasOwnProperty('value')) {
                    url = this.rowData.data[this.additionalParameter['Action_Key']];
                }
                else {
                    const apiData = this.apiDataService.getApiDataByApiKey(this.additionalParameter['Action_Key']);
                    url = apiData ? apiData.value : '';
                }
                if (!this.additionalParameter['Action_Response_Key'] && this.additionalParameter['Action_Type'] == "downloadpdf") {
                    this.downloadPdf(url);
                }
                if (!this.additionalParameter['Action_Response_Key'] && this.additionalParameter['Action_Type'] === 'previewpdf') {
                    this.openPdfPreviewFromUrl(url);
                }
            }
            else {
                this.sharedEventsService.showMandatoryErrorMsg.emit({
                    fields: mandatorySatisfied, type: 'click'
                });
            }
        }
        else {
            if (moveTo === 'next') {
                mandatorySatisfied = this.checkValidateANDCheckMandatoryFields({ mandatory: true, valid: false });
                if (mandatorySatisfied.length === 0) {
                    this.executeEvent(moveTo);
                }
                else {
                    this.sharedEventsService.showMandatoryErrorMsg.emit({ fields: mandatorySatisfied, type: 'click' });
                }
            }
            else {
                this.executeEvent(moveTo);
                let url = '';
                if (this.rowData && this.rowData.hasOwnProperty('value')) {
                    url = this.rowData.data[this.additionalParameter['Action_Key']];
                }
                else {
                    const apiData = this.apiDataService.getApiDataByApiKey(this.additionalParameter['Action_Key']);
                    url = apiData ? apiData.value : '';
                }
                if (!this.additionalParameter['Action_Response_Key'] && this.additionalParameter['Action_Type'] == "downloadpdf") {
                    this.downloadPdf(url);
                }
                if (!this.additionalParameter['Action_Response_Key'] && this.additionalParameter['Action_Type'] === 'previewpdf') {
                    this.openPdfPreviewFromUrl(url);
                }
            }
        } //test
        if (mandatorySatisfied && mandatorySatisfied.length) {
            for (const fUID of mandatorySatisfied) {
                if (this.rootData['FieldErrorFunctions'][fUID]) {
                    this.rootData['FieldErrorFunctions'][fUID]();
                    break;
                }
            }
        }
    }
    getValueBetweenDollars(input) {
        return input?.split('$')[1] || '';
    }
    replacePlaceholder(prefix, placeholder, index, subIndex) {
        let newString = `${prefix}$${placeholder}$${index}`;
        if (subIndex) {
            newString = `${prefix}$${placeholder}$${index}$${subIndex}`;
        }
        return newString;
    }
    /**
     * Utility method to validate and parse Force Disable Section parameter values
     * Ensures proper handling of pipe-separated section IDs
     *
     * @param {string} sectionParam - The Force Disable Section parameter value
     * @returns {string[]} Array of cleaned section IDs
     */
    parseSectionIds(sectionParam) {
        if (!sectionParam) {
            return [];
        }
        // Split by pipe and clean up whitespace
        const sectionIds = sectionParam.split('|')
            .map(id => id.trim())
            .filter(id => id.length > 0); // Remove empty strings
        // console.log('📊 Parsed section IDs from parameter:', sectionIds);
        return sectionIds;
    }
    /**
     * Enhanced validation method for Force Disable Section parameter
     * Now supports multiple section IDs separated by pipe (|) character
     *
     * @param {Object} options - Validation options
     * @param {boolean} options.mandatory - Check for mandatory field violations
     * @param {boolean} options.valid - Check for field validation errors
     * @param {string} sectionId - Single section ID or multiple IDs separated by pipe (|)
     * @returns {string[]} Array of field IDs that have validation issues
     *
     * @example
     * // Single section
     * checkValidateANDCheckMandatoryFieldsForSection({mandatory: true, valid: true}, "17_34596_contact_view")
     *
     * @example
     * // Multiple sections
     * checkValidateANDCheckMandatoryFieldsForSection({mandatory: true, valid: true}, "17_34596_contact_view|0_34596_contact_view")
     */
    checkValidateANDCheckMandatoryFieldsForSection({ mandatory, valid }, sectionId) {
        const fields = [];
        // ENHANCED: Support multiple section IDs separated by pipe (|)
        // Use the parser utility for consistent handling
        const sectionIds = this.parseSectionIds(sectionId);
        if (sectionIds.length === 0) {
            console.warn('⚠️ No valid section IDs provided for Force Disable Section');
            return fields;
        }
        // console.log('🔍 Force Disable Section - checking sections:', sectionIds);
        // Loop through each section ID
        for (const currentSectionId of sectionIds) {
            if (this.rootData &&
                this.rootData.sectionFields &&
                this.rootData.sectionFields.hasOwnProperty(currentSectionId)) {
                const sectionFields = this.rootData?.sectionFields?.[currentSectionId] ?? [];
                // console.log(`📋 Section ${currentSectionId} has ${sectionFields.length} fields`);
                for (let index = 0; index < sectionFields.length; index++) {
                    const fieldDetails = this.appDataService.getFieldPropertiesByID(sectionFields[index]);
                    if (mandatory && fieldDetails && fieldDetails.mandatory && this.checkEmpty.isEmpty(fieldDetails.value)) {
                        fields.push(fieldDetails.id);
                        // console.log(`❌ Mandatory field missing in section ${currentSectionId}:`, fieldDetails.id);
                    }
                    if (valid && fieldDetails && !fieldDetails.isValid && fieldDetails.value) {
                        fields.push(fieldDetails.id);
                        // console.log(`❌ Invalid field in section ${currentSectionId}:`, fieldDetails.id);
                    }
                }
            }
            else {
                console.warn(`⚠️ Section ${currentSectionId} not found in rootData.sectionFields`);
            }
        }
        console.log('🎯 Force Disable Section - total validation issues:', fields.length);
        return fields;
    }
    checkValidateANDCheckMandatoryFieldsForBlock({ mandatory, valid }, blockId) {
        const fields = [];
        if (this.rootData &&
            this.rootData.blockFields &&
            this.rootData.blockFields.hasOwnProperty(blockId)) {
            const blockFields = this.rootData?.blockFields?.[blockId] ?? [];
            for (let index = 0; index < blockFields.length; index++) {
                const fieldDetails = this.appDataService.getFieldPropertiesByID(blockFields[index]);
                if (mandatory && fieldDetails && fieldDetails.mandatory && this.checkEmpty.isEmpty(fieldDetails.value)) {
                    fields.push(fieldDetails.id);
                }
                if (valid && fieldDetails && !fieldDetails.isValid && fieldDetails.value) {
                    fields.push(fieldDetails.id);
                }
            }
        }
        return fields;
    }
    checkValidateANDCheckMandatoryFields({ mandatory, valid }, blockId) {
        const fields = [];
        const allStepData = this.appDataService.getAllAppStoreData(blockId);
        for (const fieldData of allStepData) {
            let blockName = this.fieldData.unique_id.split('$');
            if (blockName.length > 1) {
                let blockName = this.fieldData.unique_id.split('$');
                let checkValue = this.checkBlockSection;
                let checkBlockSection;
                if (blockName[3]) {
                    checkBlockSection = this.replacePlaceholder(blockName[0], checkValue, blockName[2], blockName[3]);
                }
                else {
                    checkBlockSection = this.replacePlaceholder(blockName[0], checkValue, blockName[2]);
                }
                if ((checkBlockSection && (this.rootData['blockFields'][checkBlockSection] && ((this.rootData['blockFields'][checkBlockSection].includes(fieldData.id) || this.rootData['blockFields'][checkBlockSection].includes(this.getValueBetweenDollars(fieldData.id))))))) {
                    if (mandatory && fieldData.mandatory && this.checkEmpty.isEmpty(fieldData.value)) {
                        fields.push(fieldData.id);
                    }
                    if (valid && !fieldData.isValid && fieldData.value) {
                        fields.push(fieldData.id);
                    }
                }
            }
            else {
                if ((this.checkBlockSection &&
                    ((this.rootData['sectionFields'][this.checkBlockSection] && ((this.rootData['sectionFields'][this.checkBlockSection].includes(fieldData.id) || this.rootData['sectionFields'][this.checkBlockSection].includes(this.getValueBetweenDollars(fieldData.id)))))
                        || (this.rootData['blockFields'][this.checkBlockSection] && ((this.rootData['blockFields'][this.checkBlockSection].includes(fieldData.id) || this.rootData['blockFields'][this.checkBlockSection].includes(this.getValueBetweenDollars(fieldData.id)))))))
                    || (!this.checkBlockSection && this.stepId === fieldData.stepId)) {
                    if (mandatory && fieldData.mandatory && this.checkEmpty.isEmpty(fieldData.value)) {
                        fields.push(fieldData.id);
                    }
                    if (valid && !fieldData.isValid && fieldData.value) {
                        fields.push(fieldData.id);
                    }
                }
            }
        }
        //console.log("fields",fields);
        return fields;
    }
    forceDisableButtonForBlock(initValidationPassed) {
        if (this.additionalParameter['Force Disable Block']) {
            this.validationTimeout = setTimeout(() => {
                this.validationPassed = initValidationPassed;
            }, 0);
        }
    }
    forceDisableButtonForSection(initValidationPassed) {
        if (this.additionalParameter['Force Disable Section']) {
            this.validationTimeout = setTimeout(() => {
                this.validationPassed = initValidationPassed;
            }, 0);
        }
    }
    forceDisableButton(initValidationPassed) {
        if (this.additionalParameter['Force Disable'] && this.additionalParameter['Force Disable'].toLowerCase() !== 'false') {
            this.validationTimeout = setTimeout(() => {
                this.validationPassed = initValidationPassed;
            }, 0);
        }
    }
    onEmptySession(data) {
        // throw new Error('Method not implemented.');
    }
    handleCustomFunction(getData) {
        // throw new Error('Method not implemented.');
    }
    setFieldValueOnSetValuesEvent(data) {
        // throw new Error('Method not implemented.');
    }
    setFieldStateOnStateChangeEvent(data) {
    }
    updateStateHistory(data) {
        // throw new Error("Method not implemented.");
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
    /**
     * function checks for the condition that comes on the init as well as on the on change
     * @param editableCondition the editable condition
     * @param visibleCondition  the visible condition
     * @param mandatoryCondition the mandatory condition
     */
    checkConditionOnInit(editableCondition = null, visibleCondition = null, mandatoryCondition = null) {
        if (editableCondition) {
            this.setConditions(editableCondition, 'isEditable');
        }
        if (visibleCondition) {
            this.setConditions(visibleCondition, 'isVisible');
        }
        if (mandatoryCondition) {
            this.setConditions(mandatoryCondition, 'isMandatory');
        }
    }
    onContextMenu(event) {
        if (event.button === 2) {
            this.fieldData?.event_list?.forEach(x => {
                if (x.event_name === "OnRightClick" && x.isDefault === true) {
                    event.preventDefault();
                }
            });
            let objectLoc = {
                x: event.clientX + 'px',
                y: event.clientY + 'px'
            };
            this.onComponentEvent('OnRightClick', objectLoc);
        }
    }
    async downloadPdf(pdfUrlLocal) {
        let blobUrl = null;
        try {
            // Fetch the PDF file from the URL
            const response = await fetch(pdfUrlLocal);
            // Check if the response is successful
            if (!response.ok) {
                throw new Error(`Failed to fetch PDF: ${response.statusText}`);
            }
            // Convert the response to a Blob
            const blob = await response.blob();
            // Create a URL for the Blob
            blobUrl = URL.createObjectURL(blob);
            // Create a temporary anchor element to trigger the download
            const anchor = document.createElement("a");
            anchor.setAttribute("href", blobUrl);
            anchor.setAttribute("download", this.generateFilename("pdf")); // Optional: set file extension as needed
            // Append anchor, click it, and then clean up
            document.body.appendChild(anchor);
            anchor.click();
            document.body.removeChild(anchor);
            // console.log("PDF downloaded successfully!");
        }
        catch (error) {
            console.error("Error downloading PDF:", error);
        }
        finally {
            // ✅ FIX: Always cleanup blob URL
            if (blobUrl) {
                URL.revokeObjectURL(blobUrl);
            }
        }
    }
    generateFilename(extension = 'txt') {
        const now = new Date();
        const timestamp = now.getFullYear().toString() +
            this.padZero(now.getMonth() + 1) +
            this.padZero(now.getDate()) + '_' +
            this.padZero(now.getHours()) +
            this.padZero(now.getMinutes()) +
            this.padZero(now.getSeconds());
        return `${timestamp}.${extension}`;
    }
    padZero(value) {
        return value < 10 ? '0' + value : value.toString();
    }
    async openPdfPreviewFromUrl(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch PDF: ${response.statusText}`);
            }
            const blob = await response.blob();
            // Ensure it's treated as a PDF
            const blobType = 'application/pdf';
            const pdfBlob = new Blob([blob], { type: blobType });
            // Create a Blob URL from the PDF blob
            const blobUrl = URL.createObjectURL(pdfBlob);
            const htmlId = this.rowData ? this.rowData.html_id : this.fieldData?.html_id;
            const id = htmlId ? `previewModal-${htmlId.toLowerCase()}` : 'previewModal-default';
            const existingDialog = this.dialog.openDialogs.find(dialog => dialog.id === id);
            if (existingDialog) {
                existingDialog.close(); // Optionally close it, or skip opening a new one
            }
            this.dialog.openDialogs.forEach(dialog => {
                if (dialog.id === id) {
                    dialog.close();
                }
            });
            const dialogRef = this.dialog.open(AlertModalComponent, {
                height: '80vh',
                width: '80vw',
                data: {
                    type: 'PreviewModal',
                    value: blobUrl,
                    config: {
                        disableClose: false,
                        id,
                    },
                    fileType: 'doc',
                    from: "button-pdf",
                },
                id,
                panelClass: 'previewModal-panel',
            });
            this.subscriptions.add(dialogRef.afterOpened().subscribe(() => {
                this.commonUtil.moveMatDialogToStepModalIfExist();
            }));
            this.subscriptions.add(dialogRef.afterClosed().subscribe(() => {
                this.commonUtil.moveMatDialogToBody();
                URL.revokeObjectURL(blobUrl); // Cleanup blob URL
            }));
        }
        catch (error) {
            console.error("Error loading PDF preview:", error);
        }
    }
    static ɵfac = function CeeButtonComponent_Factory(t) { return new (t || CeeButtonComponent)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.CeeApiService), i0.ɵɵdirectiveInject(i5.Router), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.AppDataService), i0.ɵɵdirectiveInject(i8.ApiDataService), i0.ɵɵdirectiveInject(i9.MatDialog), i0.ɵɵdirectiveInject(i10.MatSnackBar), i0.ɵɵdirectiveInject(i11.HttpClient), i0.ɵɵdirectiveInject(i12.FileUploadService), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i1.UserDataHandlerService)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeButtonComponent, selectors: [["app-cee-button"]], inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["class", "field-wrapper", 3, "ngClass", "contextmenu", 4, "ngIf"], [1, "field-wrapper", 3, "contextmenu", "ngClass"], [1, "form-field"], ["type", "button", 3, "click", "name", "id", "ngClass", "ngStyle", "disabled", "innerHtml"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"]], template: function CeeButtonComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeButtonComponent_div_0_Template, 4, 21, "div", 0);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible || ctx.isSafariClass);
        } }, dependencies: [NgClass, NgStyle, MatTooltipModule, CommonModule, i13.NgIf, TooltipModule, i14.TooltipDirective], styles: [".cee-button[_ngcontent-%COMP%]{border:2px solid black;background-color:#fff;padding:10px 31px;margin:5px;cursor:pointer;box-sizing:border-box;font-family:Lato,sans-serif;font-size:14px;color:#555}.cee-button[_ngcontent-%COMP%]:disabled{opacity:.65;cursor:not-allowed}.success[_ngcontent-%COMP%]{border-color:#4caf50;color:#fff;background-color:#4caf50}.success[_ngcontent-%COMP%]:hover{background-color:#4caf50;color:#fff}.info[_ngcontent-%COMP%]{color:#fff;background-color:#007bff;border-color:#007bff}.info[_ngcontent-%COMP%]:hover{background:#2196f3;color:#fff}.danger[_ngcontent-%COMP%]{border-color:#f44336;color:#fff;background-color:#f44336}.danger[_ngcontent-%COMP%]:hover{background:#f44336;color:#fff}.default[_ngcontent-%COMP%]{border-color:#e7e7e7;color:#fff;background-color:#e7e7e7}.default[_ngcontent-%COMP%]:hover{background:#e7e7e7}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeButtonComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-button', standalone: true, imports: [NgClass, NgStyle, MatTooltipModule, CommonModule, DebounceClickDirective, TooltipModule], template: "<div class=\"field-wrapper\" [ngClass]=\"cssClasses\" *ngIf=\"isVisible || isSafariClass\" (contextmenu)=\"onContextMenu($event)\">\r\n    <div class=\"form-field\">\r\n        <button name=\"{{fieldData.api_key}}\" id=\"{{html_id}}\"\r\n            [attr.aria-label]=\"additionalParameter['Aria-Label'] ? additionalParameter['Aria-Label'] : 'Click on ' + fieldData.field_label\"\r\n            [attr.role]=\"additionalParameter['Aria-Role'] ? additionalParameter['Aria-Role'] : 'button'\"\r\n            [ngClass]=\"fieldData.field_style?((isCustomClass && fieldData.field_style.custom_class_name)?fieldData.field_style.custom_class_name:'btn btn-primary'):{ 'Submit':'cee-button success', 'Button':'cee-button default', 'Previous':'cee-button danger', 'Next':'cee-button info'}[this.fieldData.field_type]\"\r\n            [attr.tabindex]=\"tabIndexValue\" [ngStyle]=\"{\r\n                'font-family': fieldData.field_style.font_name,\r\n                'font-size': fieldData.field_style.font_size,\r\n                'font-style': fieldData.field_style.font_style,\r\n                'color': fieldData.field_style.font_color,\r\n                'border-color': fieldData.field_style.border_color,\r\n                'height': fieldData.field_style.field_height,\r\n                'width': fieldData.field_style.field_width,\r\n                'background-color': fieldData.field_style.background_color\r\n            }\" type=\"button\" (click)=\"buttonClickListener()\" [disabled]=\"!isEditable || !validationPassed\" \r\n            [innerHtml]=\"buttonLabel\"></button>\r\n        <!-- <span *ngIf=\"this.isMandatory && this.fieldData.field_type == 'Button'\" class=\"mandetory-mark\"> *</span> -->\r\n\r\n        <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\" [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">i</button>\r\n    </div>\r\n</div>\r\n", styles: [".cee-button{border:2px solid black;background-color:#fff;padding:10px 31px;margin:5px;cursor:pointer;box-sizing:border-box;font-family:Lato,sans-serif;font-size:14px;color:#555}.cee-button:disabled{opacity:.65;cursor:not-allowed}.success{border-color:#4caf50;color:#fff;background-color:#4caf50}.success:hover{background-color:#4caf50;color:#fff}.info{color:#fff;background-color:#007bff;border-color:#007bff}.info:hover{background:#2196f3;color:#fff}.danger{border-color:#f44336;color:#fff;background-color:#f44336}.danger:hover{background:#f44336;color:#fff}.default{border-color:#e7e7e7;color:#fff;background-color:#e7e7e7}.default:hover{background:#e7e7e7}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.CeeApiService }, { type: i5.Router }, { type: i2.SharedEventsServiceService }, { type: i6.WfeStepLoaderService }, { type: i7.AppDataService }, { type: i8.ApiDataService }, { type: i9.MatDialog }, { type: i10.MatSnackBar }, { type: i11.HttpClient }, { type: i12.FileUploadService }, { type: i0.ChangeDetectorRef }, { type: i1.UserDataHandlerService }], { stepId: [{
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
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeButtonComponent, { className: "CeeButtonComponent", filePath: "lib\\field-components\\cee-button\\cee-button.component.ts", lineNumber: 54 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWJ1dHRvbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtYnV0dG9uL2NlZS1idXR0b24uY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWJ1dHRvbi9jZWUtYnV0dG9uLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFvSCxNQUFNLGVBQWUsQ0FBQztBQUMzSyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sbUJBQW1CLENBQUM7QUFTN0MsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDhCQUE4QixDQUFDO0FBTTlELE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxNQUFNLENBQUM7QUFDcEMsT0FBTyxFQUFFLHlCQUF5QixFQUFFLE1BQU0sMENBQTBDLENBQUM7QUFFckYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDN0QsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDakUsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sd0JBQXdCLENBQUM7QUFFaEUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHlDQUF5QyxDQUFDO0FBRXhFLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLG9EQUFvRCxDQUFDO0FBQ3pGLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQzs7Ozs7Ozs7Ozs7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bkRlc3Ryb3ksIEhvc3RMaXN0ZW5lciwgT25DaGFuZ2VzLCBTaW1wbGVDaGFuZ2VzLCBWaWV3UmVmLCBDaGFuZ2VEZXRlY3RvclJlZiwgZm9yd2FyZFJlZiwgQXBwbGljYXRpb25Jbml0U3RhdHVzIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci1kYXRhLWhhbmRsZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgeyBDZWVJbml0U2VydmljZVNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jZWUtaW5pdC1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG4vLyBpbXBvcnQgeyBDZWVMb2dIYW5kbGVyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2NlZS1sb2ctaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcblxyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgU2Vzc2lvbktleVV0aWwgfSBmcm9tICcuLi8uLi91dGlscy9zZXNzaW9uLWtleS11dGlsJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tICdAYW5ndWxhci9jb21tb24vaHR0cCc7XHJcbmltcG9ydCB7IFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsIH0gZnJvbSAnLi4vLi4vdXRpbHMvYXBwbGljYXRpb24tc3RhdGUtc3RvcmUtdXRpbCc7XHJcbmltcG9ydCB7IENFRUludGVybmFsRW1pdHRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9pbnRlcm5hbC1jZWUtZW1pdHRlci1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBNYXRUb29sdGlwTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvdG9vbHRpcCc7XHJcbmltcG9ydCB7IE5nQ2xhc3MsIE5nU3R5bGUsIENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IERlYm91bmNlQ2xpY2tEaXJlY3RpdmUgfSBmcm9tICcuL2NlZS1idXR0b24uZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgRXh0ZXJuYWxSZXNwb25zZSB9IGZyb20gJy4uLy4uL3V0aWxzL2V4dGVybmFsLXJlcXVlc3QtcmVzcG9uc2UudXRpbCc7XHJcbmltcG9ydCB7IFRvb2x0aXBNb2R1bGUgfSBmcm9tICcuLi8uLi9kaXJlY3RpdmVzL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xyXG5pbXBvcnQgeyBGaWxlVXBsb2FkU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2ZpbGUtdXBsb2FkLXNlcnZpY2Uuc2VydmljZSc7XHJcbmltcG9ydCB7IEFsZXJ0TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL2FsZXJ0LW1vZGFsL2FsZXJ0LW1vZGFsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IHRha2UgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XHJcblxyXG4vKipcclxuICogQ2VlQnV0dG9uQ29tcG9uZW50IC0gU21hcnQgQnV0dG9uIHdpdGggVmFsaWRhdGlvbiBDb250cm9sXHJcbiAqIFxyXG4gKiBFbmhhbmNlZCBGb3JjZSBEaXNhYmxlIFNlY3Rpb24gUGFyYW1ldGVyIFN1cHBvcnQ6XHJcbiAqIFRoZSAnRm9yY2UgRGlzYWJsZSBTZWN0aW9uJyBwYXJhbWV0ZXIgbm93IHN1cHBvcnRzIG11bHRpcGxlIHNlY3Rpb24gSURzIFxyXG4gKiBzZXBhcmF0ZWQgYnkgcGlwZSAofCkgY2hhcmFjdGVyIGZvciBjb21wcmVoZW5zaXZlIHZhbGlkYXRpb24gY29udHJvbC5cclxuICogXHJcbiAqIEV4YW1wbGVzOlxyXG4gKiAtIFNpbmdsZSBzZWN0aW9uOiBcIjE3XzM0NTk2X2NvbnRhY3Rfdmlld1wiXHJcbiAqIC0gTXVsdGlwbGUgc2VjdGlvbnM6IFwiMTdfMzQ1OTZfY29udGFjdF92aWV3fDBfMzQ1OTZfY29udGFjdF92aWV3XCJcclxuICogLSBDb21wbGV4IHNjZW5hcmlvczogXCJzZWN0aW9uMXxzZWN0aW9uMnxzZWN0aW9uM1wiXHJcbiAqIFxyXG4gKiBUaGUgYnV0dG9uIHdpbGwgYmUgZGlzYWJsZWQgaWYgQU5ZIG9mIHRoZSBzcGVjaWZpZWQgc2VjdGlvbnMgaGF2ZTpcclxuICogLSBNaXNzaW5nIG1hbmRhdG9yeSBmaWVsZCB2YWx1ZXNcclxuICogLSBJbnZhbGlkIGZpZWxkIHZhbHVlcyB3aXRoIHZhbGlkYXRpb24gZXJyb3JzXHJcbiAqIFxyXG4gKiBAZW5oYW5jZWQgTXVsdGktc2VjdGlvbiB2YWxpZGF0aW9uIHN1cHBvcnQgZm9yIEZvcmNlIERpc2FibGUgU2VjdGlvbiBwYXJhbWV0ZXJcclxuICovXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6ICdhcHAtY2VlLWJ1dHRvbicsXHJcbiAgICB0ZW1wbGF0ZVVybDogJy4vY2VlLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZVVybHM6IFsnLi9jZWUtYnV0dG9uLmNvbXBvbmVudC5zY3NzJywgJy4uL2ZpZWxkLWNvbW1vbi5zY3NzJ10sXHJcbiAgICBzdGFuZGFsb25lOiB0cnVlLFxyXG4gICAgaW1wb3J0czogW05nQ2xhc3MsIE5nU3R5bGUsIE1hdFRvb2x0aXBNb2R1bGUsIENvbW1vbk1vZHVsZSwgRGVib3VuY2VDbGlja0RpcmVjdGl2ZSwgVG9vbHRpcE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZUJ1dHRvbkNvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcblxyXG4gICAgQElucHV0KCkgZGVjbGFyZSBzdGVwSWQ6IGFueTtcclxuICAgIEBJbnB1dCgpIGRlY2xhcmUgZmllbGREYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBwcmltYXJ5S2V5SW5kZXg6IGFueTtcclxuICAgIEBJbnB1dCgpIGtlZXBTdGF0ZSA9IGZhbHNlO1xyXG4gICAgQElucHV0KCkgcm93RGF0YTogYW55O1xyXG4gICAgQElucHV0KCkgbWFuZGF0b3J5Q29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBlZGl0YWJsZUNvbmRpdGlvbjogYW55O1xyXG4gICAgQElucHV0KCkgdmlzaWJsZUNvbmRpdGlvbjogYW55O1xyXG5cclxuICAgIGJ1dHRvbkxhYmVsID0gJyc7XHJcbiAgICBodG1sX2lkID0gJyc7XHJcbiAgICBsYWJlbEVtaXR0ZXI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGFwcENvbmZpZ0RhdGEgPSB7fTtcclxuICAgIHZhbGlkYXRpb25QYXNzZWQgPSB0cnVlO1xyXG4gICAgZGVjbGFyZSBzZXNzaW9uS2V5VXRpbDogU2Vzc2lvbktleVV0aWw7XHJcbiAgICAkYnV0dG9uVmFsaWRhdGlvbkVtaXR0ZXI6IFN1YnNjcmlwdGlvbjtcclxuICAgIGFwcGxpY2F0aW9uU3RhdGVTdG9yZTogQXBwbGljYXRpb25TdGF0ZVN0b3JlVXRpbDtcclxuICAgIGNoZWNrQmxvY2tTZWN0aW9uID0gJyc7XHJcbiAgICBmaWVsZExhYmVscyA9IFtdO1xyXG4gICAgZXZlbnRGbGFnID0gdHJ1ZTtcclxuICAgIHBkZlVybCA9ICcnO1xyXG4gICAgcHJpdmF0ZSBsYWJlbFVwZGF0ZVRpbWVvdXQ6IGFueTtcclxuICAgIHByaXZhdGUgdmFsaWRhdGlvblRpbWVvdXQ6IGFueTtcclxuICAgIHByaXZhdGUgYnV0dG9uTGlzdG5lclRpbWVvdXQ6IGFueTtcclxuICAgIHByaXZhdGUgc3Vic2NyaXB0aW9ucyA9IG5ldyBTdWJzY3JpcHRpb24oKTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgY2VlQXBpU2VydmljZTogQ2VlQXBpU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgcm91dGVyOiBSb3V0ZXIsXHJcbiAgICAgICAgLy8gcHVibGljIGNlZUluaXRTZXJ2aWNlOiBDZWVJbml0U2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHNoYXJlZEV2ZW50c1NlcnZpY2VzOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICAvLyBwdWJsaWMgY2VlTG9nSGFuZGxlclNlcnZpY2U6IENlZUxvZ0hhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyB3ZmVTdGVwTG9hZGVyU2VydmljZTogV2ZlU3RlcExvYWRlclNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwcERhdGFTZXJ2aWNlOiBBcHBEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBpRGF0YVNlcnZpY2U6IEFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHB1YmxpYyBmaWxlVXBsb2FkU2VydmljZTogRmlsZVVwbG9hZFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBjZHI6IENoYW5nZURldGVjdG9yUmVmLFxyXG4gICAgICAgIHByaXZhdGUgc3RvcmFnZVNlcnZpY2U6IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihcclxuICAgICAgICAgICAgdXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICBhcHBEYXRhU2VydmljZSxcclxuICAgICAgICAgICAgYXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2csXHJcbiAgICAgICAgICAgIHNuYWNrQmFyLFxyXG4gICAgICAgICAgICBodHRwLCBjZWVBcGlTZXJ2aWNlLCByb3V0ZXIsIGZpbGVVcGxvYWRTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnNlc3Npb25LZXlVdGlsID0gbmV3IFNlc3Npb25LZXlVdGlsKCk7XHJcbiAgICB9XHJcblxyXG4gICAgbmdBZnRlclZpZXdJbml0KCkge1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICBuZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7XHJcbiAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgICAgIHRoaXMuYnV0dG9uTGFiZWwgPSB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbDtcclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVTdG9yZSA9IG5ldyBBcHBsaWNhdGlvblN0YXRlU3RvcmVVdGlsKHRoaXMuYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tDb25kaXRpb25PbkluaXQodGhpcy5lZGl0YWJsZUNvbmRpdGlvbiwgdGhpcy52aXNpYmxlQ29uZGl0aW9uLCB0aGlzLm1hbmRhdG9yeUNvbmRpdGlvbik7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2lzQnV0dG9uSW52b2tlQXBpJywgJzAnKTtcclxuICAgIH1cclxuXHJcbiAgICAvL0BIb3N0TGlzdGVuZXIoJ3dpbmRvdzpiZWZvcmV1bmxvYWQnKVxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgICAvLyBDbGVhciBhbGwgdGltZW91dHNcclxuICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy52YWxpZGF0aW9uVGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5sYWJlbFVwZGF0ZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubGFiZWxVcGRhdGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbFVwZGF0ZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5idXR0b25MaXN0bmVyVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5idXR0b25MaXN0bmVyVGltZW91dCk7XHJcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uTGlzdG5lclRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBVbnN1YnNjcmliZSBmcm9tIGFsbCBzdWJzY3JpcHRpb25zXHJcbiAgICAgICAgaWYgKHRoaXMuc3Vic2NyaXB0aW9ucykge1xyXG4gICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYW4gdXAgbGVnYWN5IHN1YnNjcmlwdGlvblxyXG4gICAgICAgIHRoaXMudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDbG9zZSBhbnkgb3BlbiBkaWFsb2dzIGNyZWF0ZWQgYnkgdGhpcyBjb21wb25lbnRcclxuICAgICAgICBjb25zdCBodG1sSWQgPSB0aGlzLnJvd0RhdGEgPyB0aGlzLnJvd0RhdGEuaHRtbF9pZCA6IHRoaXMuZmllbGREYXRhPy5odG1sX2lkO1xyXG4gICAgICAgIGlmIChodG1sSWQpIHtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSBgcHJldmlld01vZGFsLSR7aHRtbElkLnRvTG93ZXJDYXNlKCl9YDtcclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cub3BlbkRpYWxvZ3MuZm9yRWFjaChkaWFsb2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZy5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsZWFuIHVwIERPTSByZWZlcmVuY2VzXHJcbiAgICAgICAgaWYgKHRoaXMucm9vdERhdGEgJiYgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddICYmIHRoaXMuZmllbGREYXRhICYmIHRoaXMuZmllbGREYXRhLmh0bWxfaWQpIHtcclxuICAgICAgICAgICAgZGVsZXRlIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVt0aGlzLmZpZWxkRGF0YS5odG1sX2lkXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gQ2xlYXIgb2JqZWN0IHJlZmVyZW5jZXNcclxuICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVTdG9yZSA9IG51bGw7XHJcblxyXG4gICAgICAgIHRoaXMucm9vdERhdGEgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0ID0gbnVsbDtcclxuICAgICAgICB0aGlzLmFwcENvbmZpZ0RhdGEgPSBudWxsO1xyXG4gICAgICAgIHRoaXMuZmllbGRMYWJlbHMgPSBudWxsO1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vIENsZWFyIGxvY2FsU3RvcmFnZSBlbnRyaWVzIGlmIHRoZXkgd2VyZSBzZXQgYnkgdGhpcyBjb21wb25lbnRcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnaXNCdXR0b25JbnZva2VBcGknKTtcclxuICAgICAgICBcclxuICAgICAgICAvLyBDYWxsIHBhcmVudCBjbGVhbnVwXHJcbiAgICAgICAgdGhpcy5vblZpZXdVbmxvYWQoKTtcclxuICAgIH1cclxuXHJcbiAgICB1bnN1YnNjcmliZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5sYWJlbEVtaXR0ZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbEVtaXR0ZXIudW5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25WaWV3RGF0YUluaXQoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gRm9yIHVuaXF1ZSBodG1sIGlkXHJcbiAgICAgICAgdGhpcy5odG1sX2lkID0gdGhpcy5maWVsZERhdGEuaHRtbF9pZDtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm9uVmlld0RhdGFJbml0LS0tXCIsIHRoaXMuaHRtbF9pZCk7XHJcbiAgICAgICAgLy8gRU5EXHJcbiAgICAgICAgaWYgKHRoaXMubGFiZWxVcGRhdGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmxhYmVsVXBkYXRlVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMudGFiSW5kZXhWYWx1ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnVGFiSW5kZXgnXTtcclxuICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYXBpX2tleSAhPT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxVcGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkxhYmVsID0gdGhpcy5yb3dEYXRhLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jZHIuZGV0ZWN0Q2hhbmdlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGFiZWxVcGRhdGVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uTGFiZWwgPSB0aGlzLmZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5ICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnJvd0RhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYWJlbFVwZGF0ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uTGFiZWwgPSB0aGlzLnJvd0RhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxhYmVsVXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkxhYmVsID0gdGhpcy5maWVsZFZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNkci5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0ZvcmNlIERpc2FibGUgU2VjdGlvbiddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2tCbG9ja1NlY3Rpb24gPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0ZvcmNlIERpc2FibGUgU2VjdGlvbiddO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLy8gRU5IQU5DRUQ6IExvZyBtdWx0aXBsZSBzZWN0aW9uIHN1cHBvcnQgd2l0aCBwcm9wZXIgcGFyc2luZ1xyXG4gICAgICAgICAgICBjb25zdCBzZWN0aW9uSWRzID0gdGhpcy5wYXJzZVNlY3Rpb25JZHModGhpcy5jaGVja0Jsb2NrU2VjdGlvbik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCfwn5SnIEZvcmNlIERpc2FibGUgU2VjdGlvbiBwYXJhbWV0ZXIgaW5pdGlhbGl6ZWQgd2l0aCBzZWN0aW9uczonLCBzZWN0aW9uSWRzKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGlmIChzZWN0aW9uSWRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfimqDvuI8gRm9yY2UgRGlzYWJsZSBTZWN0aW9uIHBhcmFtZXRlciBpcyBlbXB0eSBvciBpbnZhbGlkJyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuYnV0dG9uVmFsaWRhdGlvbkVtaXR0ZXIuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudmFsaWRhdGlvblRpbWVvdXQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRW5oYW5jZWQgdmFsaWRhdGlvbiBub3cgc3VwcG9ydHMgbXVsdGlwbGUgc2VjdGlvbnMgc2VwYXJhdGVkIGJ5IHBpcGUgKHwpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGlvblJlc3VsdCA9IHRoaXMuY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5RmllbGRzRm9yU2VjdGlvbih7IG1hbmRhdG9yeTogdHJ1ZSwgdmFsaWQ6IHRydWUgfSwgdGhpcy5jaGVja0Jsb2NrU2VjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNWYWxpZGF0aW9uUGFzc2VkID0gdmFsaWRhdGlvblJlc3VsdC5sZW5ndGggPT09IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ/Cfjq8gRm9yY2UgRGlzYWJsZSBTZWN0aW9uIHZhbGlkYXRpb24gcmVzdWx0OicsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VjdGlvbnM6IHNlY3Rpb25JZHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Jc3N1ZXM6IHZhbGlkYXRpb25SZXN1bHQubGVuZ3RoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25FbmFibGVkOiBpc1ZhbGlkYXRpb25QYXNzZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZhaWxlZEZpZWxkczogdmFsaWRhdGlvblJlc3VsdFxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VEaXNhYmxlQnV0dG9uRm9yU2VjdGlvbihpc1ZhbGlkYXRpb25QYXNzZWQpO1xyXG4gICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydGb3JjZSBEaXNhYmxlIEJsb2NrJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5jaGVja0Jsb2NrU2VjdGlvbiA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRm9yY2UgRGlzYWJsZSBCbG9jayddO1xyXG5cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQodGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmJ1dHRvblZhbGlkYXRpb25FbWl0dGVyLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnZhbGlkYXRpb25UaW1lb3V0KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZm9yY2VEaXNhYmxlQnV0dG9uRm9yQmxvY2sodGhpcy5jaGVja1ZhbGlkYXRlQU5EQ2hlY2tNYW5kYXRvcnlGaWVsZHNGb3JCbG9jayh7IG1hbmRhdG9yeTogdHJ1ZSwgdmFsaWQ6IHRydWUgfSwgdGhpcy5jaGVja0Jsb2NrU2VjdGlvbikubGVuZ3RoID09PSAwKTtcclxuICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB9KSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRm9yY2UgRGlzYWJsZSddKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0ZvcmNlIERpc2FibGUnXS50b0xvd2VyQ2FzZSgpICE9PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydGb3JjZSBEaXNhYmxlJ10udG9Mb3dlckNhc2UoKSAhPT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGVja0Jsb2NrU2VjdGlvbiA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRm9yY2UgRGlzYWJsZSddO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuYnV0dG9uVmFsaWRhdGlvbkVtaXR0ZXIuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0aW9uVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy52YWxpZGF0aW9uVGltZW91dClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZvcmNlRGlzYWJsZUJ1dHRvbih0aGlzLmNoZWNrVmFsaWRhdGVBTkRDaGVja01hbmRhdG9yeUZpZWxkcyh7IG1hbmRhdG9yeTogdHJ1ZSwgdmFsaWQ6IHRydWUgfSwgdGhpcy5jaGVja0Jsb2NrU2VjdGlvbikubGVuZ3RoID09PSAwKTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZXQgZHluYW1pYyBsYWJlbCBvbiBsb2FkXHJcbiAgICAgICAgaWYgKCF0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljTGFiZWwoKTtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZC5zdWJzY3JpYmUoKHJlczogYW55KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICBkYXRhW3Jlcy5hcGlLZXldID0gcmVzLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5nZXREeW5hbWljTGFiZWwoZGF0YSk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmJ1dHRvblZhbGlkYXRpb25FbWl0dGVyLmVtaXQoKTtcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UudmFsaWRhdGVCdXR0b25Gb3JUYWdFbWl0dGVyLmVtaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXREeW5hbWljTGFiZWwoZGF0YT8pIHtcclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwgJiYgdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwuaW5jbHVkZXMoJygoZHluYW1pYykpJykgfHxcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWxfY29uZmlnICYmIHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsX2NvbmZpZy5pbmNsdWRlcygnKChkeW5hbWljKSknKSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMuc2V0RHluYW1pY0xhYmVsVXRpbC5nZXREeW5hbWljVmFsdWUodGhpcy5maWVsZERhdGEsIGRhdGEpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZExhYmVscy5wdXNoKHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsICE9ICcnICYmIHRoaXMuZmllbGRWYWx1ZSA9PSAnJykge1xyXG4gICAgICAgICAgICB0aGlzLmJ1dHRvbkxhYmVsID0gdGhpcy5maWVsZERhdGEuZmllbGRfbGFiZWw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5vblNldFNlc3Npb25EYXRhKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qIFNwZWNpYWwgY2hlY2sgZm9yIGJ1dHRvbiBjbGljayAqL1xyXG4gICAgYnV0dG9uQ2xpY2tMaXN0ZW5lcigpIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIiB0aGlzLnJvd0RhdGEtLVwiLCB0aGlzLnJvd0RhdGEpXHJcbiAgICAgICAgLy8gdGhpcy5jZWVMb2dIYW5kbGVyU2VydmljZS5kKCdCdXR0b24gQ2xpY2snLCBidG5MYWJlbCArICcgJyArIGJ0blR5cGUgKyAnICcgKyBidG5FdmVudCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvd0RhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy5idXR0b25MaXN0bmVyVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4gdGhpcy5saXN0ZW5lcigpLCAwKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbGlzdGVuZXIoKSB7XHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmZpZWxkRGF0YS5maWVsZF90eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ0J1dHRvbic6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJ1dHRvbkNsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAnTmV4dCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5leHRDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1ByZXZpb3VzJzpcclxuICAgICAgICAgICAgICAgIHRoaXMucHJldmlvdXNDbGljaygpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ1N1Ym1pdCc6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1Ym1pdENsaWNrKCk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uQ2xpY2soKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICBjb25jYXREYXRhKCkgeyB9XHJcblxyXG4gICAgcHVibGljIGJ1dHRvbkNsaWNrKCkge1xyXG4gICAgICAgIHRoaXMucmV0dXJuTWFuZGF0b3J5Q2hlY2soKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbmV4dENsaWNrKCkge1xyXG4gICAgICAgIHRoaXMucmV0dXJuTWFuZGF0b3J5Q2hlY2soJ25leHQnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcHJldmlvdXNDbGljaygpIHtcclxuICAgICAgICB0aGlzLnJldHVybk1hbmRhdG9yeUNoZWNrKCdwcmV2aW91cycpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdWJtaXRDbGljaygpIHtcclxuICAgICAgICB0aGlzLnJldHVybk1hbmRhdG9yeUNoZWNrKCdzdWJtaXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBleGVjdXRlRXZlbnQobW92ZVRvKSB7XHJcbiAgICAgICAgbGV0IGVIYW5kbGVyO1xyXG4gICAgICAgIGxldCBmbGFnID0gZmFsc2U7XHJcbiAgICAgICAgLy9jaGVjayBJbnZva2VBUEkgZXhpc3Qgb3Igbm90IC5cclxuICAgICAgICBmb3IgKGNvbnN0IGV2ZW50IG9mIHRoaXMuZmllbGREYXRhLmV2ZW50X2xpc3QpIHtcclxuICAgICAgICAgICAgaWYgKGV2ZW50LmlzRGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBldmVudFBhcmFtIG9mIGV2ZW50LmV2ZW50X3BhcmFtcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChldmVudFBhcmFtICYmIGV2ZW50UGFyYW0uZXZlbnRfY29uZmlnICYmIGV2ZW50UGFyYW0uZXZlbnRfY29uZmlnLmRpc3BsYXlfc3RlcFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAmJiAoZXZlbnRQYXJhbS5ldmVudF9jb25maWcuZGlzcGxheV9zdGVwID09PSAnSW52b2tlQVBJJyB8fCBldmVudFBhcmFtLmV2ZW50X2NvbmZpZy5kaXNwbGF5X3N0ZXAgPT09ICdzdGVwUmVkaXJlY3Rpb24nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlSGFuZGxlciA9IGV2ZW50UGFyYW0uZXZlbnRfaGFuZGxlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydJU19DT05GSVJNQVRJT05fQk9YX1NIT1cnXSB8fFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnSVNfQ09ORklSTUFUSU9OX0JPWF9TSE9XJ10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydJU19DT05GSVJNQVRJT05fQk9YX1NIT1cnXS50b0xvd2VyQ2FzZSgpICE9ICdmYWxzZScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc09wZW5Qb3B1cCA9IHRoaXMuc3RvcmFnZVNlcnZpY2UuZ2V0RmllbGREYXRhKCdDRUVfQ09ORklSTV9NT0RBTF9PTl9DUlVEJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpc0RyYXdyT3BlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc0RyYXdlck9wZW4nKSB8fCAnMCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXNPcGVuUG9wdXAgPT09ICcxJyAmJiBpc0RyYXdyT3BlbiA9PT0gJzAnICYmXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgWydzYXZlJywgJ3N1Ym1pdCcsICdkZWxldGUnLCAnY2FuY2VsJ10uc29tZSh3b3JkID0+IHRoaXMuYnV0dG9uTGFiZWw/LnRvTG93ZXJDYXNlKCkuaW5jbHVkZXMod29yZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnaXNCdXR0b25JbnZva2VBcGknLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdidXR0b25UZXh0JywgdGhpcy5idXR0b25MYWJlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmV2ZW50RmxhZyAmJiBmbGFnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRGbGFnID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZCh0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2VzLmV2ZW50Q29uZGl0aW9uYWxGYWlsdXJlU3Vic2NyaWJlci5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXZlbnRfaGFuZGxlciA9PT0gZUhhbmRsZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmNoayA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ldmVudEZsYWcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZXMuZXZlbnRSZXNwb25zZVN1YnNjcmliZXIuc3Vic2NyaWJlKChyZXM6IEV4dGVybmFsUmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmhhbmRsZXIgPT09IGVIYW5kbGVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXZlbnRGbGFnID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZXMuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuaGFuZGxlcl9uYW1lID09PSBlSGFuZGxlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV2ZW50RmxhZyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0QXBpU3VjY2Vzc1Jlc3BvbnNlLnBpcGUodGFrZSgxKSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkocmVzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhID0gcmVzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvblJlc3BvbnNlUGFyYW0gPSB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmluZChwYXJhbSA9PiBwYXJhbS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ0FjdGlvbl9SZXNwb25zZV9LZXknKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBhY3Rpb25UeXBlUGFyYW0gPSB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMuZmluZChwYXJhbSA9PiBwYXJhbS5wYXJhbWV0ZXJfdHlwZSA9PT0gJ0FjdGlvbl9UeXBlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYWN0aW9uUmVzcG9uc2VWYWx1ZSA9IGFjdGlvblJlc3BvbnNlUGFyYW0/LnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFjdGlvblR5cGVQYXJhbVZhbHVlID0gYWN0aW9uVHlwZVBhcmFtPy52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uUmVzcG9uc2VWYWx1ZSAmJiBhY3Rpb25SZXNwb25zZVZhbHVlLmluY2x1ZGVzKGRhdGEuaGFuZGxlcl9uYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhcGlEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKGRhdGEuaGFuZGxlcl9uYW1lKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBkZlVybCA9IGFwaURhdGEgPyBhcGlEYXRhLnZhbHVlW2FjdGlvblJlc3BvbnNlVmFsdWVdIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25UeXBlUGFyYW1WYWx1ZSA9PSBcImRvd25sb2FkcGRmXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZG93bmxvYWRQZGYodGhpcy5wZGZVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhY3Rpb25UeXBlUGFyYW1WYWx1ZSA9PT0gJ3ByZXZpZXdwZGYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5QZGZQcmV2aWV3RnJvbVVybCh0aGlzLnBkZlVybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSBlbHNlIGlmICghdGhpcy5ldmVudEZsYWcpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgTW9kYWxPblBhZ2VMZWF2ZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTW9kYWxPblBhZ2VMZWF2ZSddID8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNb2RhbE9uUGFnZUxlYXZlJ10gOiBudWxsO1xyXG4gICAgICAgIGNvbnN0IHByaW1hcnlEYXRhID0gdGhpcy5zZXRQcmltYXJ5S2V5KHRoaXMucHJpbWFyeUtleUluZGV4KTtcclxuICAgICAgICBjb25zdCBmRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuZmllbGREYXRhKTtcclxuICAgICAgICBmRGF0YS5ldmVudF9saXN0ID0gZkRhdGEuZXZlbnRfbGlzdCA/IGZEYXRhLmV2ZW50X2xpc3QubWFwKChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uZXZlbnQsXHJcbiAgICAgICAgICAgICAgICBldmVudF9wYXJhbXM6IGV2ZW50LmV2ZW50X3BhcmFtcy5tYXAoKGkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBNb2RhbE9uUGFnZUxlYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSkgOiBbXTtcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IGZEYXRhO1xyXG4gICAgICAgIGlmIChtb3ZlVG8gPT09ICcnKSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DbGljaycsIHByaW1hcnlEYXRhKTtcclxuXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gc2V0IHByb2dyZXNzIGJhciBzdGVwIHN0YXR1c1xyXG4gICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmxvYWRlclNlcnZpY2Uuc2tpcExvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldFByb2dyZXNzQmFyU3RlcFN0YXR1cygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkZXJTZXJ2aWNlLnNraXBMb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uQ2xpY2snLCBwcmltYXJ5RGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvKiBjb25zdCBuYXZpZ2F0ZVN0ZXBOYW1lID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ25hdmlnYXRlU3RlcE5hbWUnKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgcm91dGVNYXAgPSBKU09OLnBhcnNlKHNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ0NFRV9ST1VURV9NQVAnKSk7ICovXHJcbiAgICAgICAgICAgICAgICBpZiAobW92ZVRvID09PSAnbmV4dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIucmVkaXJlY3RUbyh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldE5leHRTdGVwSW5DdXJyZW50U2VxdWVuY2UodGhpcy5zdGVwSWQpLCBNb2RhbE9uUGFnZUxlYXZlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW92ZVRvID09PSAncHJldmlvdXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53ZmVFdmVudExpc3RIYW5kbGVyLnJlZGlyZWN0VG8odGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5nZXRQcmV2aW91c1N0ZXBJbkN1cnJlbnRTZXF1ZW5jZSh0aGlzLnN0ZXBJZCksIE1vZGFsT25QYWdlTGVhdmUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRQcm9ncmVzc0JhclN0ZXBTdGF0dXMoKSB7XHJcbiAgICAgICAgY29uc3QgY29tcGxldGUgPSB0aGlzLmNoZWNrVmFsaWRhdGVBTkRDaGVja01hbmRhdG9yeUZpZWxkcyh7IG1hbmRhdG9yeTogdHJ1ZSwgdmFsaWQ6IHRydWUgfSkubGVuZ3RoID09PSAwO1xyXG4gICAgICAgIGNvbnN0IHNlcSA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuZ2V0V29ya2Zsb3dTZXF1ZW5jZUluZGV4RnJvbVN0ZXAodGhpcy5zdGVwSWQpO1xyXG4gICAgICAgIGlmIChzZXEpIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3NCYXIgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLnByb2dyZXNzQmFyTWFwW3NlcS5zZXF1ZW5jZV07XHJcbiAgICAgICAgICAgIGlmIChwcm9ncmVzc0JhciAmJiBwcm9ncmVzc0JhclsncHJvZ3Jlc3MnXSkge1xyXG4gICAgICAgICAgICAgICAgY29tcGxldGUgP1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwbGljYXRpb25TdGF0ZVN0b3JlLnNldENvbXBsZXRlKHByb2dyZXNzQmFyWydwcm9ncmVzcyddLnByb2dyZXNzX2Jhcl9pZCwgdGhpcy5zdGVwSWQpIDpcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGxpY2F0aW9uU3RhdGVTdG9yZS5zZXRJbmNvbXBsZXRlKHByb2dyZXNzQmFyWydwcm9ncmVzcyddLnByb2dyZXNzX2Jhcl9pZCwgdGhpcy5zdGVwSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0RGVwZW5kZW50UHJvZ3Jlc3NCYXJTdGVwU3RhdHVzKHRoaXMuc3RlcElkLCByZXNvbHZlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHNldE5leHREZXBlbmRlbnRQcm9ncmVzc0JhclN0ZXBTdGF0dXMoc3RlcElkOiBzdHJpbmcsIHJlc29sdmUpIHtcclxuICAgICAgICBjb25zdCBjdXJyU3RlcCA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuZ2V0TmV4dFN0ZXBJbkN1cnJlbnRTZXF1ZW5jZShzdGVwSWQpO1xyXG4gICAgICAgIGlmICghY3VyclN0ZXApIHtcclxuICAgICAgICAgICAgcmVzb2x2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmFkZChcclxuICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5sb2FkU3RlcEJ5SWQoY3VyclN0ZXApLnN1YnNjcmliZSgoY3VyclN0ZXBEYXRhOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChjdXJyU3RlcERhdGEgJiYgY3VyclN0ZXBEYXRhLmNvbmRpdGlvbmFsICYmIGN1cnJTdGVwRGF0YS5kZXBlbmRlbmN5X2NvbmRpdGlvbi5xdWVyeSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3lDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja1N0ZXBEZXBlbmRlbmN5KGN1cnJTdGVwRGF0YS5kZXBlbmRlbmN5X2NvbmRpdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFkZXBlbmRlbmN5Q29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgY3VycmVudCBzdGVwIGFzIGNvbXBsZXRlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzc0JhciA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UucHJvZ3Jlc3NCYXJNYXBbXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldFdvcmtmbG93U2VxdWVuY2VJbmRleEZyb21TdGVwKGN1cnJTdGVwKS5zZXF1ZW5jZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzc0JhciAmJiBwcm9ncmVzc0JhclsncHJvZ3Jlc3MnXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBsaWNhdGlvblN0YXRlU3RvcmUuc2V0Q29tcGxldGUocHJvZ3Jlc3NCYXJbJ3Byb2dyZXNzJ10ucHJvZ3Jlc3NfYmFyX2lkLCBjdXJyU3RlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXROZXh0RGVwZW5kZW50UHJvZ3Jlc3NCYXJTdGVwU3RhdHVzKGN1cnJTdGVwLCByZXNvbHZlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybk1hbmRhdG9yeUNoZWNrKG1vdmVUbyA9ICcnKSB7XHJcbiAgICAgICAgLy8gVE9ETzogTWFuZGF0b3J5IENoZWNrIGZvciBSZXBlYXRhYmxlIEJsb2NrIE5lZWRzIHRvIGJlIGRvbmVcclxuICAgICAgICBsZXQgbWFuZGF0b3J5U2F0aXNmaWVkO1xyXG4gICAgICAgIGlmICgodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYW5kYXRvcnlDaGVjayddICYmXHJcbiAgICAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnTWFuZGF0b3J5Q2hlY2snXS50b0xvd2VyQ2FzZSgpID09PSAndHJ1ZScpIHx8XHJcbiAgICAgICAgICAgICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1ZhbGlkYXRpb25DaGVjayddICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1ZhbGlkYXRpb25DaGVjayddLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJykpIHtcclxuICAgICAgICAgICAgbWFuZGF0b3J5U2F0aXNmaWVkID0gdGhpcy5jaGVja1ZhbGlkYXRlQU5EQ2hlY2tNYW5kYXRvcnlGaWVsZHMoe1xyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYW5kYXRvcnlDaGVjayddICYmXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydNYW5kYXRvcnlDaGVjayddLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJyksXHJcbiAgICAgICAgICAgICAgICB2YWxpZDogKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnVmFsaWRhdGlvbkNoZWNrJ10gJiZcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ1ZhbGlkYXRpb25DaGVjayddLnRvTG93ZXJDYXNlKCkgPT09ICd0cnVlJylcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yY2VEaXNhYmxlQnV0dG9uKG1hbmRhdG9yeVNhdGlzZmllZC5sZW5ndGggPT09IDApO1xyXG4gICAgICAgICAgICBpZiAobWFuZGF0b3J5U2F0aXNmaWVkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5leGVjdXRlRXZlbnQobW92ZVRvKTtcclxuICAgICAgICAgICAgICAgIGxldCB1cmwgPSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhICYmIHRoaXMucm93RGF0YS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHVybCA9IHRoaXMucm93RGF0YS5kYXRhW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQWN0aW9uX0tleSddXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYXBpRGF0YSA9IHRoaXMuYXBpRGF0YVNlcnZpY2UuZ2V0QXBpRGF0YUJ5QXBpS2V5KHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQWN0aW9uX0tleSddKTtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSBhcGlEYXRhID8gYXBpRGF0YS52YWx1ZSA6ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FjdGlvbl9SZXNwb25zZV9LZXknXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FjdGlvbl9UeXBlJ10gPT0gXCJkb3dubG9hZHBkZlwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kb3dubG9hZFBkZih1cmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBY3Rpb25fUmVzcG9uc2VfS2V5J10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBY3Rpb25fVHlwZSddID09PSAncHJldmlld3BkZicpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5QZGZQcmV2aWV3RnJvbVVybCh1cmwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uuc2hvd01hbmRhdG9yeUVycm9yTXNnLmVtaXQoe1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkczogbWFuZGF0b3J5U2F0aXNmaWVkLCB0eXBlOiAnY2xpY2snXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChtb3ZlVG8gPT09ICduZXh0Jykge1xyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5U2F0aXNmaWVkID0gdGhpcy5jaGVja1ZhbGlkYXRlQU5EQ2hlY2tNYW5kYXRvcnlGaWVsZHMoeyBtYW5kYXRvcnk6IHRydWUsIHZhbGlkOiBmYWxzZSB9KVxyXG4gICAgICAgICAgICAgICAgaWYgKG1hbmRhdG9yeVNhdGlzZmllZC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmV4ZWN1dGVFdmVudChtb3ZlVG8pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2Uuc2hvd01hbmRhdG9yeUVycm9yTXNnLmVtaXQoeyBmaWVsZHM6IG1hbmRhdG9yeVNhdGlzZmllZCwgdHlwZTogJ2NsaWNrJyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUV2ZW50KG1vdmVUbyk7XHJcbiAgICAgICAgICAgICAgICBsZXQgdXJsID0gJyc7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm93RGF0YSAmJiB0aGlzLnJvd0RhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB1cmwgPSB0aGlzLnJvd0RhdGEuZGF0YVt0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FjdGlvbl9LZXknXV07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaURhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUFwaUtleSh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FjdGlvbl9LZXknXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdXJsID0gYXBpRGF0YSA/IGFwaURhdGEudmFsdWUgOiAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBY3Rpb25fUmVzcG9uc2VfS2V5J10gJiYgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydBY3Rpb25fVHlwZSddID09IFwiZG93bmxvYWRwZGZcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmRvd25sb2FkUGRmKHVybCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQWN0aW9uX1Jlc3BvbnNlX0tleSddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQWN0aW9uX1R5cGUnXSA9PT0gJ3ByZXZpZXdwZGYnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuUGRmUHJldmlld0Zyb21VcmwodXJsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0vL3Rlc3RcclxuICAgICAgICBpZiAobWFuZGF0b3J5U2F0aXNmaWVkICYmIG1hbmRhdG9yeVNhdGlzZmllZC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBmVUlEIG9mIG1hbmRhdG9yeVNhdGlzZmllZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVtmVUlEXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0ZpZWxkRXJyb3JGdW5jdGlvbnMnXVtmVUlEXSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldFZhbHVlQmV0d2VlbkRvbGxhcnMoaW5wdXQpIHtcclxuICAgICAgICByZXR1cm4gaW5wdXQ/LnNwbGl0KCckJylbMV0gfHwgJyc7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwbGFjZVBsYWNlaG9sZGVyKHByZWZpeDogc3RyaW5nLCBwbGFjZWhvbGRlcjogc3RyaW5nLCBpbmRleDogbnVtYmVyLCBzdWJJbmRleD86IG51bWJlcik6IHN0cmluZyB7XHJcbiAgICAgICAgbGV0IG5ld1N0cmluZyA9IGAke3ByZWZpeH0kJHtwbGFjZWhvbGRlcn0kJHtpbmRleH1gO1xyXG4gICAgICAgIGlmIChzdWJJbmRleCkge1xyXG4gICAgICAgICAgICBuZXdTdHJpbmcgPSBgJHtwcmVmaXh9JCR7cGxhY2Vob2xkZXJ9JCR7aW5kZXh9JCR7c3ViSW5kZXh9YDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5ld1N0cmluZztcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgbWV0aG9kIHRvIHZhbGlkYXRlIGFuZCBwYXJzZSBGb3JjZSBEaXNhYmxlIFNlY3Rpb24gcGFyYW1ldGVyIHZhbHVlc1xyXG4gICAgICogRW5zdXJlcyBwcm9wZXIgaGFuZGxpbmcgb2YgcGlwZS1zZXBhcmF0ZWQgc2VjdGlvbiBJRHNcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlY3Rpb25QYXJhbSAtIFRoZSBGb3JjZSBEaXNhYmxlIFNlY3Rpb24gcGFyYW1ldGVyIHZhbHVlXHJcbiAgICAgKiBAcmV0dXJucyB7c3RyaW5nW119IEFycmF5IG9mIGNsZWFuZWQgc2VjdGlvbiBJRHNcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBwYXJzZVNlY3Rpb25JZHMoc2VjdGlvblBhcmFtOiBzdHJpbmcpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgaWYgKCFzZWN0aW9uUGFyYW0pIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAvLyBTcGxpdCBieSBwaXBlIGFuZCBjbGVhbiB1cCB3aGl0ZXNwYWNlXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbklkcyA9IHNlY3Rpb25QYXJhbS5zcGxpdCgnfCcpXHJcbiAgICAgICAgICAgIC5tYXAoaWQgPT4gaWQudHJpbSgpKVxyXG4gICAgICAgICAgICAuZmlsdGVyKGlkID0+IGlkLmxlbmd0aCA+IDApOyAvLyBSZW1vdmUgZW1wdHkgc3RyaW5nc1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygn8J+TiiBQYXJzZWQgc2VjdGlvbiBJRHMgZnJvbSBwYXJhbWV0ZXI6Jywgc2VjdGlvbklkcyk7XHJcbiAgICAgICAgcmV0dXJuIHNlY3Rpb25JZHM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBFbmhhbmNlZCB2YWxpZGF0aW9uIG1ldGhvZCBmb3IgRm9yY2UgRGlzYWJsZSBTZWN0aW9uIHBhcmFtZXRlclxyXG4gICAgICogTm93IHN1cHBvcnRzIG11bHRpcGxlIHNlY3Rpb24gSURzIHNlcGFyYXRlZCBieSBwaXBlICh8KSBjaGFyYWN0ZXJcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnMgLSBWYWxpZGF0aW9uIG9wdGlvbnNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy5tYW5kYXRvcnkgLSBDaGVjayBmb3IgbWFuZGF0b3J5IGZpZWxkIHZpb2xhdGlvbnNcclxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3B0aW9ucy52YWxpZCAtIENoZWNrIGZvciBmaWVsZCB2YWxpZGF0aW9uIGVycm9yc1xyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHNlY3Rpb25JZCAtIFNpbmdsZSBzZWN0aW9uIElEIG9yIG11bHRpcGxlIElEcyBzZXBhcmF0ZWQgYnkgcGlwZSAofClcclxuICAgICAqIEByZXR1cm5zIHtzdHJpbmdbXX0gQXJyYXkgb2YgZmllbGQgSURzIHRoYXQgaGF2ZSB2YWxpZGF0aW9uIGlzc3Vlc1xyXG4gICAgICogXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogLy8gU2luZ2xlIHNlY3Rpb25cclxuICAgICAqIGNoZWNrVmFsaWRhdGVBTkRDaGVja01hbmRhdG9yeUZpZWxkc0ZvclNlY3Rpb24oe21hbmRhdG9yeTogdHJ1ZSwgdmFsaWQ6IHRydWV9LCBcIjE3XzM0NTk2X2NvbnRhY3Rfdmlld1wiKVxyXG4gICAgICogXHJcbiAgICAgKiBAZXhhbXBsZSAgXHJcbiAgICAgKiAvLyBNdWx0aXBsZSBzZWN0aW9uc1xyXG4gICAgICogY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5RmllbGRzRm9yU2VjdGlvbih7bWFuZGF0b3J5OiB0cnVlLCB2YWxpZDogdHJ1ZX0sIFwiMTdfMzQ1OTZfY29udGFjdF92aWV3fDBfMzQ1OTZfY29udGFjdF92aWV3XCIpXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5RmllbGRzRm9yU2VjdGlvbih7IG1hbmRhdG9yeSwgdmFsaWQgfSwgc2VjdGlvbklkPzogYW55KTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBFTkhBTkNFRDogU3VwcG9ydCBtdWx0aXBsZSBzZWN0aW9uIElEcyBzZXBhcmF0ZWQgYnkgcGlwZSAofClcclxuICAgICAgICAvLyBVc2UgdGhlIHBhcnNlciB1dGlsaXR5IGZvciBjb25zaXN0ZW50IGhhbmRsaW5nXHJcbiAgICAgICAgY29uc3Qgc2VjdGlvbklkcyA9IHRoaXMucGFyc2VTZWN0aW9uSWRzKHNlY3Rpb25JZCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHNlY3Rpb25JZHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqg77iPIE5vIHZhbGlkIHNlY3Rpb24gSURzIHByb3ZpZGVkIGZvciBGb3JjZSBEaXNhYmxlIFNlY3Rpb24nKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZpZWxkcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCfwn5SNIEZvcmNlIERpc2FibGUgU2VjdGlvbiAtIGNoZWNraW5nIHNlY3Rpb25zOicsIHNlY3Rpb25JZHMpO1xyXG5cclxuICAgICAgICAvLyBMb29wIHRocm91Z2ggZWFjaCBzZWN0aW9uIElEXHJcbiAgICAgICAgZm9yIChjb25zdCBjdXJyZW50U2VjdGlvbklkIG9mIHNlY3Rpb25JZHMpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucm9vdERhdGEgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGEuc2VjdGlvbkZpZWxkcyAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb290RGF0YS5zZWN0aW9uRmllbGRzLmhhc093blByb3BlcnR5KGN1cnJlbnRTZWN0aW9uSWQpXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgc2VjdGlvbkZpZWxkcyA9IHRoaXMucm9vdERhdGE/LnNlY3Rpb25GaWVsZHM/LltjdXJyZW50U2VjdGlvbklkXSA/PyBbXTtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGDwn5OLIFNlY3Rpb24gJHtjdXJyZW50U2VjdGlvbklkfSBoYXMgJHtzZWN0aW9uRmllbGRzLmxlbmd0aH0gZmllbGRzYCk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBzZWN0aW9uRmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRGV0YWlscyA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGRQcm9wZXJ0aWVzQnlJRChzZWN0aW9uRmllbGRzW2luZGV4XSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgJiYgZmllbGREZXRhaWxzICYmIGZpZWxkRGV0YWlscy5tYW5kYXRvcnkgJiYgdGhpcy5jaGVja0VtcHR5LmlzRW1wdHkoZmllbGREZXRhaWxzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaChmaWVsZERldGFpbHMuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhg4p2MIE1hbmRhdG9yeSBmaWVsZCBtaXNzaW5nIGluIHNlY3Rpb24gJHtjdXJyZW50U2VjdGlvbklkfTpgLCBmaWVsZERldGFpbHMuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsaWQgJiYgZmllbGREZXRhaWxzICYmICFmaWVsZERldGFpbHMuaXNWYWxpZCAmJiBmaWVsZERldGFpbHMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goZmllbGREZXRhaWxzLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYOKdjCBJbnZhbGlkIGZpZWxkIGluIHNlY3Rpb24gJHtjdXJyZW50U2VjdGlvbklkfTpgLCBmaWVsZERldGFpbHMuaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybihg4pqg77iPIFNlY3Rpb24gJHtjdXJyZW50U2VjdGlvbklkfSBub3QgZm91bmQgaW4gcm9vdERhdGEuc2VjdGlvbkZpZWxkc2ApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygn8J+OryBGb3JjZSBEaXNhYmxlIFNlY3Rpb24gLSB0b3RhbCB2YWxpZGF0aW9uIGlzc3VlczonLCBmaWVsZHMubGVuZ3RoKTtcclxuICAgICAgICByZXR1cm4gZmllbGRzO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5RmllbGRzRm9yQmxvY2soeyBtYW5kYXRvcnksIHZhbGlkIH0sIGJsb2NrSWQ/OiBhbnkpOiBzdHJpbmdbXSB7XHJcbiAgICAgICAgY29uc3QgZmllbGRzID0gW107XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnJvb3REYXRhICYmXHJcbiAgICAgICAgICAgIHRoaXMucm9vdERhdGEuYmxvY2tGaWVsZHMgJiZcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YS5ibG9ja0ZpZWxkcy5oYXNPd25Qcm9wZXJ0eShibG9ja0lkKVxyXG4gICAgICAgICkge1xyXG4gICAgICAgICAgICBjb25zdCBibG9ja0ZpZWxkcyA9IHRoaXMucm9vdERhdGE/LmJsb2NrRmllbGRzPy5bYmxvY2tJZF0gPz8gW107XHJcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBibG9ja0ZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkRGV0YWlscyA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGRQcm9wZXJ0aWVzQnlJRChibG9ja0ZpZWxkc1tpbmRleF0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChtYW5kYXRvcnkgJiYgZmllbGREZXRhaWxzICYmIGZpZWxkRGV0YWlscy5tYW5kYXRvcnkgJiYgdGhpcy5jaGVja0VtcHR5LmlzRW1wdHkoZmllbGREZXRhaWxzLnZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkcy5wdXNoKGZpZWxkRGV0YWlscy5pZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWQgJiYgZmllbGREZXRhaWxzICYmICFmaWVsZERldGFpbHMuaXNWYWxpZCAmJiBmaWVsZERldGFpbHMudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZHMucHVzaChmaWVsZERldGFpbHMuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmaWVsZHM7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHByaXZhdGUgY2hlY2tWYWxpZGF0ZUFORENoZWNrTWFuZGF0b3J5RmllbGRzKHsgbWFuZGF0b3J5LCB2YWxpZCB9LCBibG9ja0lkPzogYW55KTogc3RyaW5nW10ge1xyXG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IFtdO1xyXG4gICAgICAgIGNvbnN0IGFsbFN0ZXBEYXRhID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRBbGxBcHBTdG9yZURhdGEoYmxvY2tJZCk7XHJcbiAgICAgICAgZm9yIChjb25zdCBmaWVsZERhdGEgb2YgYWxsU3RlcERhdGEpIHtcclxuICAgICAgICAgICAgbGV0IGJsb2NrTmFtZSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZC5zcGxpdCgnJCcpO1xyXG4gICAgICAgICAgICBpZiAoYmxvY2tOYW1lLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBibG9ja05hbWUgPSB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQuc3BsaXQoJyQnKTtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja1ZhbHVlID0gdGhpcy5jaGVja0Jsb2NrU2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIGxldCBjaGVja0Jsb2NrU2VjdGlvbjtcclxuICAgICAgICAgICAgICAgIGlmIChibG9ja05hbWVbM10pIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0Jsb2NrU2VjdGlvbiA9IHRoaXMucmVwbGFjZVBsYWNlaG9sZGVyKGJsb2NrTmFtZVswXSwgY2hlY2tWYWx1ZSwgYmxvY2tOYW1lWzJdLCBibG9ja05hbWVbM10pO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGVja0Jsb2NrU2VjdGlvbiA9IHRoaXMucmVwbGFjZVBsYWNlaG9sZGVyKGJsb2NrTmFtZVswXSwgY2hlY2tWYWx1ZSwgYmxvY2tOYW1lWzJdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKGNoZWNrQmxvY2tTZWN0aW9uICYmICh0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW2NoZWNrQmxvY2tTZWN0aW9uXSAmJiAoKHRoaXMucm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bY2hlY2tCbG9ja1NlY3Rpb25dLmluY2x1ZGVzKGZpZWxkRGF0YS5pZCkgfHwgdGhpcy5yb290RGF0YVsnYmxvY2tGaWVsZHMnXVtjaGVja0Jsb2NrU2VjdGlvbl0uaW5jbHVkZXModGhpcy5nZXRWYWx1ZUJldHdlZW5Eb2xsYXJzKGZpZWxkRGF0YS5pZCkpKSkpKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSAmJiBmaWVsZERhdGEubWFuZGF0b3J5ICYmIHRoaXMuY2hlY2tFbXB0eS5pc0VtcHR5KGZpZWxkRGF0YS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goZmllbGREYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkICYmICFmaWVsZERhdGEuaXNWYWxpZCAmJiBmaWVsZERhdGEudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goZmllbGREYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgKHRoaXMuY2hlY2tCbG9ja1NlY3Rpb24gJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgKCh0aGlzLnJvb3REYXRhWydzZWN0aW9uRmllbGRzJ11bdGhpcy5jaGVja0Jsb2NrU2VjdGlvbl0gJiYgKCh0aGlzLnJvb3REYXRhWydzZWN0aW9uRmllbGRzJ11bdGhpcy5jaGVja0Jsb2NrU2VjdGlvbl0uaW5jbHVkZXMoZmllbGREYXRhLmlkKSB8fCB0aGlzLnJvb3REYXRhWydzZWN0aW9uRmllbGRzJ11bdGhpcy5jaGVja0Jsb2NrU2VjdGlvbl0uaW5jbHVkZXModGhpcy5nZXRWYWx1ZUJldHdlZW5Eb2xsYXJzKGZpZWxkRGF0YS5pZCkpKSkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCAodGhpcy5yb290RGF0YVsnYmxvY2tGaWVsZHMnXVt0aGlzLmNoZWNrQmxvY2tTZWN0aW9uXSAmJiAoKHRoaXMucm9vdERhdGFbJ2Jsb2NrRmllbGRzJ11bdGhpcy5jaGVja0Jsb2NrU2VjdGlvbl0uaW5jbHVkZXMoZmllbGREYXRhLmlkKSB8fCB0aGlzLnJvb3REYXRhWydibG9ja0ZpZWxkcyddW3RoaXMuY2hlY2tCbG9ja1NlY3Rpb25dLmluY2x1ZGVzKHRoaXMuZ2V0VmFsdWVCZXR3ZWVuRG9sbGFycyhmaWVsZERhdGEuaWQpKSkpKSlcclxuICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfHwgKCF0aGlzLmNoZWNrQmxvY2tTZWN0aW9uICYmIHRoaXMuc3RlcElkID09PSBmaWVsZERhdGEuc3RlcElkKVxyXG4gICAgICAgICAgICAgICAgKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hbmRhdG9yeSAmJiBmaWVsZERhdGEubWFuZGF0b3J5ICYmIHRoaXMuY2hlY2tFbXB0eS5pc0VtcHR5KGZpZWxkRGF0YS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goZmllbGREYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbGlkICYmICFmaWVsZERhdGEuaXNWYWxpZCAmJiBmaWVsZERhdGEudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRzLnB1c2goZmllbGREYXRhLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcImZpZWxkc1wiLGZpZWxkcyk7XHJcbiAgICAgICAgcmV0dXJuIGZpZWxkcztcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGZvcmNlRGlzYWJsZUJ1dHRvbkZvckJsb2NrKGluaXRWYWxpZGF0aW9uUGFzc2VkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRm9yY2UgRGlzYWJsZSBCbG9jayddKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGlvblBhc3NlZCA9IGluaXRWYWxpZGF0aW9uUGFzc2VkO1xyXG4gICAgICAgICAgICB9LCAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmb3JjZURpc2FibGVCdXR0b25Gb3JTZWN0aW9uKGluaXRWYWxpZGF0aW9uUGFzc2VkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRm9yY2UgRGlzYWJsZSBTZWN0aW9uJ10pIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uUGFzc2VkID0gaW5pdFZhbGlkYXRpb25QYXNzZWQ7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGUgZm9yY2VEaXNhYmxlQnV0dG9uKGluaXRWYWxpZGF0aW9uUGFzc2VkKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRm9yY2UgRGlzYWJsZSddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRm9yY2UgRGlzYWJsZSddLnRvTG93ZXJDYXNlKCkgIT09ICdmYWxzZScpIHtcclxuICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZGF0aW9uUGFzc2VkID0gaW5pdFZhbGlkYXRpb25QYXNzZWQ7XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihkYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcbiAgICBoYW5kbGVDdXN0b21GdW5jdGlvbihnZXREYXRhOiBhbnkpIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoJ01ldGhvZCBub3QgaW1wbGVtZW50ZWQuJyk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcbiAgICAgICAgLy8gdGhyb3cgbmV3IEVycm9yKCdNZXRob2Qgbm90IGltcGxlbWVudGVkLicpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEZpZWxkU3RhdGVPblN0YXRlQ2hhbmdlRXZlbnQoZGF0YTogb2JqZWN0KSB7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlSGlzdG9yeShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMYW5ndWFnZShkYXRhOiBvYmplY3QpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcyk6IHZvaWQge1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLmVkaXRhYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGNoYW5nZXMudmlzaWJsZUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzVmlzaWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMubWFuZGF0b3J5Q29uZGl0aW9uLmN1cnJlbnRWYWx1ZSwgJ2lzTWFuZGF0b3J5Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gY2hlY2tzIGZvciB0aGUgY29uZGl0aW9uIHRoYXQgY29tZXMgb24gdGhlIGluaXQgYXMgd2VsbCBhcyBvbiB0aGUgb24gY2hhbmdlXHJcbiAgICAgKiBAcGFyYW0gZWRpdGFibGVDb25kaXRpb24gdGhlIGVkaXRhYmxlIGNvbmRpdGlvblxyXG4gICAgICogQHBhcmFtIHZpc2libGVDb25kaXRpb24gIHRoZSB2aXNpYmxlIGNvbmRpdGlvblxyXG4gICAgICogQHBhcmFtIG1hbmRhdG9yeUNvbmRpdGlvbiB0aGUgbWFuZGF0b3J5IGNvbmRpdGlvblxyXG4gICAgICovXHJcbiAgICBjaGVja0NvbmRpdGlvbk9uSW5pdChlZGl0YWJsZUNvbmRpdGlvbiA9IG51bGwsIHZpc2libGVDb25kaXRpb24gPSBudWxsLCBtYW5kYXRvcnlDb25kaXRpb24gPSBudWxsKSB7XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhlZGl0YWJsZUNvbmRpdGlvbiwgJ2lzRWRpdGFibGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHZpc2libGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKHZpc2libGVDb25kaXRpb24sICdpc1Zpc2libGUnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKG1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMobWFuZGF0b3J5Q29uZGl0aW9uLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Db250ZXh0TWVudShldmVudDogTW91c2VFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5idXR0b24gPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGE/LmV2ZW50X2xpc3Q/LmZvckVhY2goeCA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoeC5ldmVudF9uYW1lID09PSBcIk9uUmlnaHRDbGlja1wiICYmIHguaXNEZWZhdWx0ID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgbGV0IG9iamVjdExvYyA9IHtcclxuICAgICAgICAgICAgICAgIHg6IGV2ZW50LmNsaWVudFggKyAncHgnLFxyXG4gICAgICAgICAgICAgICAgeTogZXZlbnQuY2xpZW50WSArICdweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uUmlnaHRDbGljaycsIG9iamVjdExvYyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgYXN5bmMgZG93bmxvYWRQZGYocGRmVXJsTG9jYWw6IHN0cmluZykge1xyXG4gICAgICAgICBsZXQgYmxvYlVybDogc3RyaW5nIHwgbnVsbCA9IG51bGw7XHJcbiAgICAgICAgdHJ5IHtcclxuXHJcbiAgICAgICAgICAgIC8vIEZldGNoIHRoZSBQREYgZmlsZSBmcm9tIHRoZSBVUkxcclxuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChwZGZVcmxMb2NhbCk7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSByZXNwb25zZSBpcyBzdWNjZXNzZnVsXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIFBERjogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIENvbnZlcnQgdGhlIHJlc3BvbnNlIHRvIGEgQmxvYlxyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBVUkwgZm9yIHRoZSBCbG9iXHJcbiAgICAgICAgICAgIGJsb2JVcmwgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSB0ZW1wb3JhcnkgYW5jaG9yIGVsZW1lbnQgdG8gdHJpZ2dlciB0aGUgZG93bmxvYWRcclxuICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XHJcbiAgICAgICAgICAgIGFuY2hvci5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGJsb2JVcmwpO1xyXG4gICAgICAgICAgICBhbmNob3Iuc2V0QXR0cmlidXRlKFwiZG93bmxvYWRcIiwgdGhpcy5nZW5lcmF0ZUZpbGVuYW1lKFwicGRmXCIpKTsgLy8gT3B0aW9uYWw6IHNldCBmaWxlIGV4dGVuc2lvbiBhcyBuZWVkZWRcclxuXHJcbiAgICAgICAgICAgIC8vIEFwcGVuZCBhbmNob3IsIGNsaWNrIGl0LCBhbmQgdGhlbiBjbGVhbiB1cFxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGFuY2hvcik7XHJcbiAgICAgICAgICAgIGFuY2hvci5jbGljaygpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGFuY2hvcik7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiUERGIGRvd25sb2FkZWQgc3VjY2Vzc2Z1bGx5IVwiKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZG93bmxvYWRpbmcgUERGOlwiLCBlcnJvcik7XHJcbiAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgLy8g4pyFIEZJWDogQWx3YXlzIGNsZWFudXAgYmxvYiBVUkxcclxuICAgICAgICAgICAgaWYgKGJsb2JVcmwpIHtcclxuICAgICAgICAgICAgICAgIFVSTC5yZXZva2VPYmplY3RVUkwoYmxvYlVybCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2VuZXJhdGVGaWxlbmFtZShleHRlbnNpb246IHN0cmluZyA9ICd0eHQnKTogc3RyaW5nIHtcclxuICAgICAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xyXG5cclxuICAgICAgICBjb25zdCB0aW1lc3RhbXAgPSBub3cuZ2V0RnVsbFllYXIoKS50b1N0cmluZygpICtcclxuICAgICAgICAgICAgdGhpcy5wYWRaZXJvKG5vdy5nZXRNb250aCgpICsgMSkgK1xyXG4gICAgICAgICAgICB0aGlzLnBhZFplcm8obm93LmdldERhdGUoKSkgKyAnXycgK1xyXG4gICAgICAgICAgICB0aGlzLnBhZFplcm8obm93LmdldEhvdXJzKCkpICtcclxuICAgICAgICAgICAgdGhpcy5wYWRaZXJvKG5vdy5nZXRNaW51dGVzKCkpICtcclxuICAgICAgICAgICAgdGhpcy5wYWRaZXJvKG5vdy5nZXRTZWNvbmRzKCkpO1xyXG5cclxuICAgICAgICByZXR1cm4gYCR7dGltZXN0YW1wfS4ke2V4dGVuc2lvbn1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcGFkWmVybyh2YWx1ZTogbnVtYmVyKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdmFsdWUgPCAxMCA/ICcwJyArIHZhbHVlIDogdmFsdWUudG9TdHJpbmcoKTtcclxuICAgIH1cclxuICAgIGFzeW5jIG9wZW5QZGZQcmV2aWV3RnJvbVVybCh1cmw6IHN0cmluZykge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgRmFpbGVkIHRvIGZldGNoIFBERjogJHtyZXNwb25zZS5zdGF0dXNUZXh0fWApO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBibG9iID0gYXdhaXQgcmVzcG9uc2UuYmxvYigpO1xyXG5cclxuICAgICAgICAgICAgLy8gRW5zdXJlIGl0J3MgdHJlYXRlZCBhcyBhIFBERlxyXG4gICAgICAgICAgICBjb25zdCBibG9iVHlwZSA9ICdhcHBsaWNhdGlvbi9wZGYnO1xyXG4gICAgICAgICAgICBjb25zdCBwZGZCbG9iID0gbmV3IEJsb2IoW2Jsb2JdLCB7IHR5cGU6IGJsb2JUeXBlIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gQ3JlYXRlIGEgQmxvYiBVUkwgZnJvbSB0aGUgUERGIGJsb2JcclxuICAgICAgICAgICAgY29uc3QgYmxvYlVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwocGRmQmxvYik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBodG1sSWQgPSB0aGlzLnJvd0RhdGEgPyB0aGlzLnJvd0RhdGEuaHRtbF9pZCA6IHRoaXMuZmllbGREYXRhPy5odG1sX2lkO1xyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGh0bWxJZCA/IGBwcmV2aWV3TW9kYWwtJHtodG1sSWQudG9Mb3dlckNhc2UoKX1gIDogJ3ByZXZpZXdNb2RhbC1kZWZhdWx0JztcclxuICAgICAgICAgICAgY29uc3QgZXhpc3RpbmdEaWFsb2cgPSB0aGlzLmRpYWxvZy5vcGVuRGlhbG9ncy5maW5kKGRpYWxvZyA9PiBkaWFsb2cuaWQgPT09IGlkKTtcclxuICAgICAgICAgICAgaWYgKGV4aXN0aW5nRGlhbG9nKSB7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0RpYWxvZy5jbG9zZSgpOyAvLyBPcHRpb25hbGx5IGNsb3NlIGl0LCBvciBza2lwIG9wZW5pbmcgYSBuZXcgb25lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kaWFsb2cub3BlbkRpYWxvZ3MuZm9yRWFjaChkaWFsb2cgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpYWxvZy5pZCA9PT0gaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaWFsb2cuY2xvc2UoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oQWxlcnRNb2RhbENvbXBvbmVudCwge1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAnODB2aCcsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJzgwdncnLFxyXG4gICAgICAgICAgICAgICAgZGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdQcmV2aWV3TW9kYWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBibG9iVXJsLCAvLyBQYXNzIEJsb2IgVVJMIGhlcmVcclxuICAgICAgICAgICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzYWJsZUNsb3NlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBmaWxlVHlwZTogJ2RvYycsIC8vIFVzZSBjb3JyZWN0IGZpbGUgdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIGZyb206IFwiYnV0dG9uLXBkZlwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGlkLFxyXG4gICAgICAgICAgICAgICAgcGFuZWxDbGFzczogJ3ByZXZpZXdNb2RhbC1wYW5lbCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5hZGQoZGlhbG9nUmVmLmFmdGVyT3BlbmVkKCkuc3Vic2NyaWJlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tbW9uVXRpbC5tb3ZlTWF0RGlhbG9nVG9TdGVwTW9kYWxJZkV4aXN0KCk7XHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuYWRkKGRpYWxvZ1JlZi5hZnRlckNsb3NlZCgpLnN1YnNjcmliZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwubW92ZU1hdERpYWxvZ1RvQm9keSgpO1xyXG4gICAgICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChibG9iVXJsKTsgLy8gQ2xlYW51cCBibG9iIFVSTFxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvYWRpbmcgUERGIHByZXZpZXc6XCIsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcbiIsIjxkaXYgY2xhc3M9XCJmaWVsZC13cmFwcGVyXCIgW25nQ2xhc3NdPVwiY3NzQ2xhc3Nlc1wiICpuZ0lmPVwiaXNWaXNpYmxlIHx8IGlzU2FmYXJpQ2xhc3NcIiAoY29udGV4dG1lbnUpPVwib25Db250ZXh0TWVudSgkZXZlbnQpXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgIDxidXR0b24gbmFtZT1cInt7ZmllbGREYXRhLmFwaV9rZXl9fVwiIGlkPVwie3todG1sX2lkfX1cIlxyXG4gICAgICAgICAgICBbYXR0ci5hcmlhLWxhYmVsXT1cImFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtTGFiZWwnXSA6ICdDbGljayBvbiAnICsgZmllbGREYXRhLmZpZWxkX2xhYmVsXCJcclxuICAgICAgICAgICAgW2F0dHIucm9sZV09XCJhZGRpdGlvbmFsUGFyYW1ldGVyWydBcmlhLVJvbGUnXSA/IGFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0FyaWEtUm9sZSddIDogJ2J1dHRvbidcIlxyXG4gICAgICAgICAgICBbbmdDbGFzc109XCJmaWVsZERhdGEuZmllbGRfc3R5bGU/KChpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZS5jdXN0b21fY2xhc3NfbmFtZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOididG4gYnRuLXByaW1hcnknKTp7ICdTdWJtaXQnOidjZWUtYnV0dG9uIHN1Y2Nlc3MnLCAnQnV0dG9uJzonY2VlLWJ1dHRvbiBkZWZhdWx0JywgJ1ByZXZpb3VzJzonY2VlLWJ1dHRvbiBkYW5nZXInLCAnTmV4dCc6J2NlZS1idXR0b24gaW5mbyd9W3RoaXMuZmllbGREYXRhLmZpZWxkX3R5cGVdXCJcclxuICAgICAgICAgICAgW2F0dHIudGFiaW5kZXhdPVwidGFiSW5kZXhWYWx1ZVwiIFtuZ1N0eWxlXT1cIntcclxuICAgICAgICAgICAgICAgICdmb250LWZhbWlseSc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X25hbWUsXHJcbiAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc2l6ZSxcclxuICAgICAgICAgICAgICAgICdmb250LXN0eWxlJzogZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfc3R5bGUsXHJcbiAgICAgICAgICAgICAgICAnY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9jb2xvcixcclxuICAgICAgICAgICAgICAgICdib3JkZXItY29sb3InOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuYm9yZGVyX2NvbG9yLFxyXG4gICAgICAgICAgICAgICAgJ2hlaWdodCc6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICAnd2lkdGgnOiBmaWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IGZpZWxkRGF0YS5maWVsZF9zdHlsZS5iYWNrZ3JvdW5kX2NvbG9yXHJcbiAgICAgICAgICAgIH1cIiB0eXBlPVwiYnV0dG9uXCIgKGNsaWNrKT1cImJ1dHRvbkNsaWNrTGlzdGVuZXIoKVwiIFtkaXNhYmxlZF09XCIhaXNFZGl0YWJsZSB8fCAhdmFsaWRhdGlvblBhc3NlZFwiIFxyXG4gICAgICAgICAgICBbaW5uZXJIdG1sXT1cImJ1dHRvbkxhYmVsXCI+PC9idXR0b24+XHJcbiAgICAgICAgPCEtLSA8c3BhbiAqbmdJZj1cInRoaXMuaXNNYW5kYXRvcnkgJiYgdGhpcy5maWVsZERhdGEuZmllbGRfdHlwZSA9PSAnQnV0dG9uJ1wiIGNsYXNzPVwibWFuZGV0b3J5LW1hcmtcIj4gKjwvc3Bhbj4gLS0+XHJcblxyXG4gICAgICAgIDxidXR0b24gKm5nSWY9XCJoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0b1wiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCIgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwIFwiPmk8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuIl19