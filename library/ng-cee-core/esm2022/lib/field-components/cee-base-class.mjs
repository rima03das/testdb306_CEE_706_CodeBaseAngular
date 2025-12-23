import { Input, Directive } from '@angular/core';
import { SessionKeyUtil } from '../utils/session-key-util';
import { ConditionalValidator } from '../utils/wfe-conditional-validator';
import { WFEConditionalExecuter } from '../utils/wfe-conditional-query-executer-util';
import { WFEEventListHandler } from '../utils/wfe-event-list-handler-util';
import { SaveFieldValueUtil } from '../utils/save-field-value-util';
import { take } from 'rxjs/operators';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';
import { APIKeyUtil } from '../utils/api-key-util';
import { CommonUtil } from '../utils/common-util';
import { ConditionalUtil } from '../utils/wfe-conditional-util';
import { FlatUnflat } from '../utils/flat-unflat-json';
import { RepeatableBlockData } from '../models/repeatable-block-data/repetableBlockData.util';
import { SetAPICallbackData } from '../utils/set-api-callback-data-util';
import ExternalRequestResponseUtil from '../utils/external-request-response.util';
import { EmptyUtil } from '../utils/empty-util';
import { DynamicLabelUtil } from '../utils/dynamic-label-util';
import { CustomErrorsValidation } from '../static-codes/custom-errors-validation';
import * as i0 from "@angular/core";
import * as i1 from "../services/user-data-handler.service";
import * as i2 from "../services/shared-events-service.service";
import * as i3 from "../services/internal-cee-emitter-service.service";
import * as i4 from "../models/app-data/app-data.service";
import * as i5 from "../models/api-data/api-data.service";
import * as i6 from "../services/wfe-step-loader.service";
import * as i7 from "@angular/material/dialog";
import * as i8 from "@angular/material/snack-bar";
import * as i9 from "@angular/common/http";
import * as i10 from "../services/cee-api-service.service";
import * as i11 from "@angular/router";
import * as i12 from "../services/file-upload-service.service";
export class BaseView {
    userDataHandlerService;
    sharedEventsService;
    internalCEEEmitter;
    appDataService;
    apiDataService;
    wfeStepLoaderService;
    dialog;
    snackBar;
    http;
    _ceeApiService;
    router;
    fileUploadService;
    rootData;
    stepId;
    fieldData;
    hasInitialized = false;
    fieldData$;
    hasTooltip = false;
    tabIndexValue = 0; // By default 0, means tabbing in a sequential order.
    isEditable = false;
    isVisible = false;
    isMandatory = false;
    isCustomClass = true;
    isSafariClass = false;
    hasComments = false;
    hasAttachments = false;
    fieldValue = '';
    apiValue = '';
    additionalParameter = {};
    event_handler;
    isOnSelect = false;
    selectedDataObj = {};
    dependentObj = {};
    manageState = false;
    fromField = null;
    // message declarations
    messages = [];
    modalMessages = [];
    snackBarMessages = [];
    multipleErrorMessage = false;
    errorMessageData = { message_code: '', message_text: '', type: '', color: '' };
    showErrorOnNext = false;
    showComparisonError = {};
    comparisonErrorMessageData = { message_code: '', message_text: '', type: '', color: '' };
    characterCount = {
        display: false,
        type: ''
    };
    characterCountMessageData = {
        left: { message_code: '', message_text: '', type: '', color: '' },
        right: { message_code: '', message_text: '', type: '', color: '' },
    };
    // TODO Next Button error message needs to be done
    // Application Data Declarations
    appDataQuery;
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
    valid = true;
    repetableBlockModel = {
        fieldId: '',
        isMandatory: false
    };
    changeDetectorRef;
    presetData;
    repeatableDataPresent = false;
    variableObject = {}; // variable object
    conditionObj = {}; // object that defines to override conditions
    // Util declarations
    conditionalValidator;
    sessionKeyUtil;
    wfeConditionalExecuter;
    wfeEventListHandler;
    apiKeyUtil;
    commonUtil;
    conditionalUtil;
    saveFieldValueUtil;
    flattenUnflattenUtil;
    repeatableBlockDataUtil;
    setApiCallBackDataUtil;
    setDynamicLabelUtil;
    externalRequestResponseUtil;
    apiConfigPath = 'assets/jsons/api_config.json';
    bindKeyList = [];
    checkEmpty;
    customErrorsValidation;
    is_bootstrap;
    is_material;
    fieldStyle;
    isListView = false;
    isTableView = false;
    ;
    constructor(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, _ceeApiService, router, fileUploadService) {
        this.userDataHandlerService = userDataHandlerService;
        this.sharedEventsService = sharedEventsService;
        this.internalCEEEmitter = internalCEEEmitter;
        this.appDataService = appDataService;
        this.apiDataService = apiDataService;
        this.wfeStepLoaderService = wfeStepLoaderService;
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.http = http;
        this._ceeApiService = _ceeApiService;
        this.router = router;
        this.fileUploadService = fileUploadService;
        this.conditionalValidator = new ConditionalValidator();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.wfeConditionalExecuter = new WFEConditionalExecuter(appDataService, apiDataService);
        this.apiKeyUtil = new APIKeyUtil();
        this.commonUtil = new CommonUtil();
        this.repeatableBlockDataUtil = new RepeatableBlockData();
        this.conditionalUtil = new ConditionalUtil(this.singleCondition, appDataService, apiDataService);
        this.wfeEventListHandler = new WFEEventListHandler(_ceeApiService, router, sharedEventsService, internalCEEEmitter, wfeStepLoaderService, appDataService, apiDataService, dialog, snackBar, http, fileUploadService);
        this.saveFieldValueUtil = new SaveFieldValueUtil();
        this.flattenUnflattenUtil = new FlatUnflat(appDataService);
        this.setApiCallBackDataUtil = new SetAPICallbackData(apiDataService);
        this.setDynamicLabelUtil = new DynamicLabelUtil(apiDataService, appDataService);
        this.externalRequestResponseUtil = new ExternalRequestResponseUtil(http, appDataService, apiDataService, sharedEventsService);
        this.checkEmpty = new EmptyUtil();
        this.customErrorsValidation = new CustomErrorsValidation(this.wfeStepLoaderService.messagesDataMap, this.wfeStepLoaderService.customErrorMessages);
        if (localStorage.getItem('is_bootstrap') === 'true') {
            this.is_bootstrap = true;
        }
        if (localStorage.getItem('is_material') === 'true') {
            this.is_material = true;
        }
    }
    // update star with position in display condition of fieldData
    updateStarWithPositionInFieldData(position) {
        if (this.fieldData.display_condition && this.fieldData.display_condition.condition) {
            this.fieldData.display_condition.condition.forEach((cond) => {
                let op = cond.comparision_operator.toLowerCase();
                if (op == 'e' || op == 'ne') {
                    if (cond.api_key && cond.api_key.includes('[*]')) {
                        cond.api_key = cond.api_key.replace('[*]', `[${position}]`);
                    }
                }
            });
        }
    }
    init(stepId, fieldData, manageState = false, data, ref) {
        if (!fieldData.field_style) {
            fieldData.field_style = {};
        }
        // safari fix - only apply if running in Safari browser
        if (this.isSafari) {
            this.isSafariClass = fieldData.field_style.bootstrap_class_name?.includes('safari-visibility-wrapper');
            if (this.isSafariClass) {
                this.fieldData.field_style.bootstrap_class_name = fieldData.field_style.bootstrap_class_name.replace('safari-visibility-wrapper', '').trim();
            }
        }
        this.changeDetectorRef = ref;
        this.presetData = data;
        this.stepId = stepId;
        this.fieldData = JSON.parse(JSON.stringify(fieldData));
        // update field data when the component is part of repeatable block
        if (data && data.linkedBlockId && data.position !== undefined) {
            this.updateStarWithPositionInFieldData(data.position);
        }
        this.wfeEventListHandler.fieldData = fieldData;
        this.appData.id = this.fieldData.unique_id;
        this.appData.fieldLabel = this.storeLabels ? this.fieldData.field_label : '';
        this.fieldData.html_id = this.presetData ?
            (this.presetData.html_id ? this.presetData.html_id : this.fieldData.unique_id) : this.fieldData.unique_id;
        this.appData.fieldLabel = localStorage.getItem('storeLabels') === 'true' ? this.fieldData.field_label : '';
        this.appData.stepId = stepId;
        this.appData.linkedBlockId = this.presetData ? (this.presetData.linkedBlockId ? this.presetData.linkedBlockId : '') : '';
        this.appData.repeatedBlockFieldId = this.presetData ?
            (this.presetData.repeatedBlockFieldId ? this.presetData.repeatedBlockFieldId : '') : '';
        // backward compatibility support
        if (this.isSingleApiKey) {
            this.appData.apiKey = this.fieldData.api_key;
        }
        else {
            // console.log(this.fieldData.unique_id, this.fieldData.request_api_key, this.fieldData.response_api_key)
            this.appData.requestApiKey = this.apiKeyUtil.getMultipleApiKeys(this.fieldData.request_api_key);
            this.appData.responseApiKey =
                this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
        }
        this.manageState = manageState;
        // console.log('this.appData', this.appData);
        if (typeof (this.presetData) === 'object' && this.presetData !== null) {
            if (this.presetData.unique_id) {
                this.appData.id = this.presetData.unique_id;
            }
            if (this.isSingleApiKey) {
                if (this.presetData.api_key) {
                    this.appData.apiKey = this.presetData.api_key;
                }
            }
            else {
                // console.log('called in init', this.presetData);
                if (this.presetData.request_api_key) {
                    this.appData.requestApiKey = this.presetData.request_api_key;
                }
                if (this.presetData.response_api_key) {
                    this.appData.responseApiKey = this.presetData.response_api_key;
                }
                if (this.presetData.event_list && this.presetData.event_list.length > 0) {
                    this.fieldData.event_list = this.presetData.event_list;
                }
            }
            if (this.presetData.mandatory) {
                this.appData.mandatory = this.presetData.mandatory;
            }
            if (this.presetData.editable) {
                this.appData.editable = this.presetData.editable;
            }
            if (this.presetData.visible) {
                this.appData.visible = this.presetData.visible;
            }
            if (this.presetData.fromField) {
                this.fromField = this.presetData.fromField;
            }
        }
        if (this.fieldData.tooltip && this.fieldData.tooltip.length > 0) {
            this.hasTooltip = true;
        }
        if (this.presetData && this.presetData.hasOwnProperty('fromField')) {
            this.isListView = this.presetData.fromField === 'List' ? true : false;
            this.isTableView = this.presetData.fromField === 'Table' ? true : false;
        }
        // Check if data state present
        if (manageState) {
            const fieldUniqueId = this.presetData ?
                (this.presetData.unique_id ? this.presetData.unique_id : this.fieldData.unique_id) : this.fieldData.unique_id;
            if (this.appData.linkedBlockId) {
                this.repeatableDataPresent = this.repeatableBlockDataUtil.returnIfData(this.appData.linkedBlockId, fieldUniqueId);
            }
            this.fieldData$ = this.appDataService.getAppDataByFieldId(fieldUniqueId);
            this.fieldData$
                .pipe(take(1))
                .subscribe(val => {
                if (!this.hasInitialized) {
                    if (val) {
                        if (val.id === fieldUniqueId) {
                            // State found
                            this.loadLastSavedState(val);
                        }
                    }
                    else {
                        // Create new state
                        this.createNewFieldState(manageState);
                    }
                }
            }, err => {
                console.error(err);
            });
        }
        else {
            this.createNewFieldState(manageState);
        }
        this.multipleErrorMessage = localStorage.getItem('multipleErrorMessage') === 'true' ? true : false;
        if (this.multipleErrorMessage && this.fieldData.validation_messages) {
            // TODO:Recheck code revert if code breaks any old implementation
            // const messages = this.returnMessages(this.fieldData.validation_messages);
            this.fieldData.validation_messages.forEach(message => {
                if (message.type !== 'Conditional') {
                    message = {
                        type: message.type,
                        displayType: message.display_type,
                        code: message.message_code
                    };
                    switch (message.displayType) {
                        case 'POPUP':
                            this.snackBarMessages.push(message);
                            break;
                        case 'MODAL':
                            this.modalMessages.push(message);
                            break;
                        case 'INLINE':
                            this.messages.push(message);
                            break;
                    }
                }
            });
        }
        else {
            const messageData = this.returnMessageData(this.fieldData.message_code);
            if (messageData) {
                this.errorMessageData = messageData;
            }
        }
        // console.log(this.messages);
        if (!this.isListView && !this.isTableView) {
            this.variableObject['showMandatoryErrorMsg_' + this.appData.id] = this.sharedEventsService.showMandatoryErrorMsg.subscribe((res) => {
                if (res) {
                    if (Array.isArray(res.fields) && res.type === 'event') {
                        if (res.fields.includes(this.appData.id)) {
                            this.setMandatoryError();
                        }
                    }
                    else {
                        this.setMandatoryError();
                    }
                    this.setModalorSanckBarMessage(this.fieldData.unique_id, this.appDataService.getFieldDataByFieldId(this.fieldData.unique_id));
                }
            });
        }
        if (this.additionalParameter['Textfield Type'] !== 'Search') {
            if (this.additionalParameter['BindKey']) {
                const keyList = this.additionalParameter['BindKey'].split('|').map(str => str.trim());
                for (const keyCode of keyList) {
                    this.rootData['BindKey'][keyCode] = () => {
                        this.sharedEventsService.emitKeyDown.emit();
                        this.onComponentEvent('OnClick');
                    };
                }
            }
        }
        if (this.fieldData.field_style) {
            this.fieldStyle = {
                'font-family': this.fieldData.field_style.font_name,
                'font-size': this.fieldData.field_style.font_size,
                'font-style': this.fieldData.field_style.font_style,
                color: this.fieldData.field_style.font_color,
                'border-color': this.fieldData.field_style.border_color,
                height: this.fieldData.field_style.field_height,
                width: this.fieldData.field_style.field_width,
                'background-color': this.fieldData.field_style.background_color
            };
        }
    }
    // returns true if the current browser is Safari
    get isSafari() {
        return typeof window !== 'undefined' &&
            /Safari/.test(navigator.userAgent) &&
            /Apple Computer/.test(navigator.vendor) &&
            !/Chrome|Chromium/.test(navigator.userAgent);
    }
    // returns css classes for field wrapper
    get cssClasses() {
        if (this.isSafariClass) {
            return 'field-wrapper safari-visibility-wrapper ' + (this.isVisible ? 'safari-visible' : 'safari-hidden');
        }
        return 'field-wrapper';
    }
    setMandatoryError() {
        if (this.isMandatory) {
            this.showErrorOnNext = this.checkEmpty.isEmpty(this.fieldValue);
            if (this.showErrorOnNext) {
                this.valid = false;
            }
        }
    }
    createNewFieldState(withState) {
        if (this.presetData) {
            if (this.presetData.mandatory) {
                this.isMandatory = this.presetData.mandatory;
            }
            else {
                if (this.fieldData.is_mandatory === 1) {
                    this.isMandatory = true;
                }
            }
            if (this.presetData.editable) {
                this.isEditable = this.presetData.editable;
            }
            else {
                if (this.fieldData.is_editable === 1) {
                    this.isEditable = true;
                }
            }
            if (this.presetData.visible) {
                this.isVisible = this.presetData.visible;
            }
            else {
                if (this.fieldData.is_display === 1) {
                    this.isVisible = true;
                }
            }
        }
        else {
            if (this.fieldData.is_editable === 1) {
                this.isEditable = true;
            }
            if (this.fieldData.is_mandatory === 1) {
                this.isMandatory = true;
            }
            if (this.fieldData.is_display === 1) {
                this.isVisible = true;
            }
        }
        this.conditionObj['isEditable'] = false;
        this.conditionObj['isVisible'] = false;
        this.conditionObj['isMandatory'] = false;
        /**
         * date - 27/05/2020
         * code changed to support External API Handling ESF-14644
         */
        const handlerData = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.fieldData.api_key));
        const value = this.isSingleApiKey ?
            this.hashApiKey ?
                this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.api_key, handlerData ? handlerData.value : {}) :
                this.apiDataService.getApiKeyValueByApiKey(this.fieldData.api_key) :
            this.setFieldValue();
        if (!(this.presetData ? this.presetData.hasOwnProperty('value') : this.presetData) && value) {
            // console.log(this.appData.id);
            if (this.fieldData.field_type == 'Textfield' || this.fieldData.field_type == 'Textarea' || this.fieldData.field_type == 'PhoneNumber') {
                let validationRegex = (this.fieldData.validation_regex && typeof this.fieldData.validation_regex.web == 'object' && this.fieldData.validation_regex.Web !== '') ? this.fieldData.validation_regex.web
                    : (typeof this.fieldData.validation_regex == 'string' && this.fieldData.validation_regex !== '') ? this.fieldData.validation_regex : '';
                if (value && validationRegex) {
                    const patt = new RegExp(validationRegex);
                    this.valid = patt.test(value);
                    this.appData.isValid = this.valid;
                }
            }
            if (this.fieldData.field_type === 'Calendar' || this.fieldData.field_type === 'TimeSlots') {
                this.apiValue = value;
            }
            else {
                this.fieldValue = value;
            }
        }
        else if (this.presetData) {
            // Handle repeatable block data
            if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                for (const paramter of this.fieldData.additional_parameters) {
                    // this.additionalParameter[paramter.parameter_type] = paramter.value;
                    switch (paramter.parameter_type) {
                        case 'default_value':
                            this.presetData.default_value = paramter.value;
                            break;
                        case 'DisplayCharacterCount':
                            this.presetData.DisplayCharacterCount = paramter.value;
                            break;
                        case 'Time Format':
                            this.appData.dataFormatSeparator = ':';
                            break;
                        case 'Date Format':
                            this.appData.dataFormatSeparator = '/';
                            break;
                        case 'Data Format':
                            this.appData.isValid = true;
                            this.valid = true;
                            break;
                    }
                }
            }
            if (typeof (this.presetData) === 'object' && this.presetData !== null && this.presetData.hasOwnProperty('value')) {
                if (!Array.isArray(this.presetData.value)) {
                    // console.log('ADD', this.appData.id, JSON.parse(JSON.stringify(this.presetData)), this.presetData.isApiResponse);
                    this.fieldValue = this.presetData.value;
                    if (this.presetData.isApiResponse) {
                        this.appDataService.updateAppData(Object.assign({}, this.appData, { value: this.fieldValue }));
                    }
                }
            }
            else {
                this.fieldValue = this.presetData;
            }
        }
        else {
            if (this.fieldData.additional_parameters
                && this.fieldData.additional_parameters.length > 0) {
                for (const paramter of this.fieldData.additional_parameters) {
                    // this.additionalParameter[paramter.parameter_type] = paramter.value;
                    switch (paramter.parameter_type) {
                        case 'default_value':
                            this.fieldValue = paramter.value;
                            //Check if it has language change event
                            if (this.fieldData && this.fieldData.event_list && this.fieldData.event_list.length > 0) {
                                for (const event of this.fieldData.event_list) {
                                    if (event && event.event_params
                                        && event.event_params.find(ep => ep.event_config.display_step === "LanguageToggle")) {
                                        this.fieldValue = localStorage.getItem('lang') ? localStorage.getItem('lang').replace('/', '') : this.fieldValue;
                                    }
                                }
                            }
                            //For multiple default value
                            if (typeof (this.fieldValue) === 'string' && this.fieldValue.includes('||')) {
                                this.fieldValue = this.fieldValue.split('||').map(str => str.trim());
                            }
                            break;
                        case 'Time Format':
                            this.appData.dataFormatSeparator = ':';
                            break;
                        case 'Date Format':
                            this.appData.dataFormatSeparator = '/';
                            break;
                    }
                }
            }
        }
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
            }
        }
        // set character count message
        this.setCharacterCountMessage();
        this.getConcatenation();
        if (withState) {
            if (this.fieldData.field_type === 'Attachments' && this.fieldValue == '') {
                this.fieldValue = [];
            }
            // set the repeatable state if with state
            if (this.presetData) {
                if (this.presetData.unique_id) {
                    this.repeatableBlockDataUtil.updateRepeatableLocalStorageData(this.appData.linkedBlockId, {
                        ...this.repetableBlockModel,
                        ...{ fieldId: String(this.appData.id), isMandatory: this.isMandatory }
                    });
                }
            }
            this.appDataService.addAppData(Object.assign({}, this.appData, { visible: this.isVisible, editable: this.isEditable, mandatory: this.isMandatory, value: this.fieldValue }));
        }
        this.unsubscribeAndInit();
    }
    loadLastSavedState(val) {
        this.appData = Object.assign({}, val);
        this.isEditable = this.appData.editable;
        this.isMandatory = this.appData.mandatory;
        this.isVisible = this.appData.visible;
        this.fieldValue = this.appData.value;
        this.valid = this.appData.isValid;
        /**
         * date - 27/05/2020
         * code changed to support External API Handling ESF-14644
         */
        const handlerData = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(this.fieldData.api_key));
        const value = this.isSingleApiKey ?
            this.hashApiKey ?
                this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData.api_key, handlerData ? handlerData.value : {}) :
                this.apiDataService.getApiKeyValueByApiKey(this.fieldData.api_key) :
            this.setFieldValue();
        if (!(this.presetData ? this.presetData.hasOwnProperty('value') : this.presetData) && value) {
            if (this.fieldData.field_type === 'Calendar' || this.fieldData.field_type === 'TimeSlots') {
                this.apiValue = value;
            }
            else {
                this.fieldValue = value;
            }
        }
        else if (typeof (this.presetData) === 'object' && this.presetData !== null) {
            if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                for (const paramter of this.fieldData.additional_parameters) {
                    // this.additionalParameter[paramter.parameter_type] = paramter.value;
                    switch (paramter.parameter_type) {
                        case 'default_value':
                            this.presetData.default_value = paramter.value;
                            break;
                        case 'DisplayCharacterCount':
                            this.presetData.DisplayCharacterCount = paramter.value;
                            break;
                        case 'Time Format':
                            this.appData.dataFormatSeparator = ':';
                            break;
                        case 'Date Format':
                            this.appData.dataFormatSeparator = '/';
                            break;
                    }
                }
            }
            // Handle repeatable block data
            if (this.presetData.hasOwnProperty('value')) {
                // console.log('UPDATE', this.appData.id, JSON.parse(JSON.stringify(this.presetData)));
                if (!Array.isArray(this.presetData.value)) {
                    this.fieldValue = this.presetData.value;
                    if (this.presetData.isApiResponse) {
                        this.appDataService.updateAppData(Object.assign({}, this.appData, { value: this.fieldValue }));
                    }
                }
            }
            else {
                this.fieldValue = this.presetData;
            }
        }
        else {
            // if (this.fieldData.additional_parameters.length > 0) {
            //     for (const paramter of this.fieldData.additional_parameters) {
            //         this.additionalParameter[paramter.parameter_type] = paramter.value;
            //     }
            // }
        }
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const paramter of this.fieldData.additional_parameters) {
                this.additionalParameter[paramter.parameter_type] = paramter.value;
            }
        }
        // set character count message
        this.setCharacterCountMessage();
        this.getConcatenation();
        if (this.changeDetectorRef && !this.changeDetectorRef.destroyed) {
            this.changeDetectorRef.detectChanges();
        }
        this.unsubscribeAndInit();
    }
    unsubscribeAndInit() {
        // Fatching MaxValue and MinValue from repeated field of same row
        if (this.presetData) {
            const targetParams = ['MaxValue', 'MinValue'];
            for (const tParam of targetParams) {
                if (this.additionalParameter[tParam] && this.additionalParameter[tParam].endsWith('$')) {
                    this.additionalParameter[tParam] = this.stepId + '$' + this.additionalParameter[tParam] + this.presetData.position;
                }
            }
        }
        this.hasInitialized = true;
        if (this.fieldData$ && this.fieldData$.length > 0) {
            this.fieldData$.forEach((s) => {
                if (!s.closed) {
                    s.unsubscribe();
                }
            });
        }
        if (!this.isListView && !this.isTableView) {
            // TODO: Separate conditional for all emitters and then subscribe if required
            this.variableObject['emitOnDataSetOrUpdated_' + this.appData.id] = this.sharedEventsService.emitOnDataSetOrUpdated.subscribe(res => {
                if (res.index) {
                    if (res.index === String(this.appData.id).split('$')[2]) {
                        this.onSetSessionData(res.apiKey, res.value);
                        if (this.fieldData.validation_messages !== undefined) {
                            if (!(this.additionalParameter['sin_number'] === 'true')) {
                                this.conditionalErrorMessageCompareFields(res.apiKey, this.fieldData, String(this.appData.id));
                            }
                        }
                    }
                }
                else {
                    this.onSetSessionData(res.apiKey, res.value);
                    this.getConcatenation();
                    this.saveFieldValueUtil.saveListofFieldValues(res.apiKey, res.value, this.fieldData);
                    if (this.fieldData.validation_messages !== undefined) {
                        if (!(this.additionalParameter['sin_number'] === 'true')) {
                            this.conditionalErrorMessageCompareFields(res.apiKey, this.fieldData);
                        }
                    }
                    this.comparisonError();
                }
            });
            this.variableObject['emitSetFieldValueOnEvent_' + this.appData.id] =
                this.sharedEventsService.emitSetFieldValueOnEvent.subscribe(res => {
                    if (res) {
                        const _res = JSON.parse(JSON.stringify(res));
                        for (let i = 0; i < _res?.uniqueIds.length; i++) {
                            if (_res.uniqueIds[i] === this.appData.id) {
                                _res.uniqueIds[i] = this.fieldData.unique_id;
                            }
                        }
                        // set value event filter field for repeated table
                        if (this.appData.repeatedBlockFieldId) {
                            const idSplit = this.appData.id.toString().split('$');
                            if (idSplit.length === 3) {
                                const repeatedTableIndex = localStorage.getItem('repeatedTableIndex');
                                if (this.stepId != idSplit[1]) {
                                    this.setFieldValueOnSetValuesEvent(_res);
                                    return; // optimized to call setFieldValue only once
                                }
                                if (repeatedTableIndex && this.appData.repeatedBlockFieldId === repeatedTableIndex.split('|')[0]) {
                                    if (repeatedTableIndex.split('|')[1] !== idSplit[2]) {
                                        return;
                                    }
                                }
                            }
                        }
                        this.setFieldValueOnSetValuesEvent(_res);
                    }
                });
            if (this.manageState) {
                this.variableObject['stateHistoryEmitter_' + this.appData.id] =
                    this.sharedEventsService.stateHistoryEmitter.subscribe(res => {
                        if (res) {
                            // console.log(res);
                            this.updateStateHistory(res);
                            // updateStateHistory.remove(updateStateHistory);
                        }
                    });
            }
            this.variableObject['emitForEmptySession_' + this.appData.id] = this.sharedEventsService.emitForEmptySession.subscribe(res => {
                if (res) {
                    this.onEmptySession(res);
                }
            });
            this.variableObject['customEventTargetSubscriber_' + this.appData.id] =
                this.sharedEventsService.customEventTargetSubscriber.subscribe((res) => {
                    if (res) {
                        this.handleCustomFunction(res);
                    }
                });
            this.variableObject['emitApiSuccessResponse_' + this.appData.id] =
                this.sharedEventsService.emitApiSuccessResponse.subscribe(res => {
                    if (Array.isArray(res)) {
                        this.onAPICallback(res[0]);
                    }
                    else {
                        this.onAPICallback(res);
                    }
                    this.conditionCheck(this.fieldValue);
                    // this.setSessionData(this.fieldValue);
                });
            this.variableObject['emitFieldStateChangeEventEmitter_' + this.appData.id] =
                this.sharedEventsService.emitFieldStateChangeEventEmitter.subscribe(res => {
                    if (res) {
                        const id = this.returnUniqueId();
                        if (res.ids.includes(id)) {
                            switch (res.type) {
                                case 'ChangeVisibility':
                                    setTimeout(() => {
                                        this.isVisible = (res.value[0]) === 0 ? false : true;
                                    }, 0);
                                    break;
                                case 'ChangeEditable':
                                    setTimeout(() => {
                                        this.isEditable =
                                            (res.value.length > 0 ? res.value[res.ids.indexOf(id)] : res.value[0]) === 0 ? false : true;
                                    }, 0);
                                    break;
                                case 'ChangeMandatory':
                                    setTimeout(() => {
                                        this.isMandatory =
                                            (res.value.length > 0 ? res.value[res.ids.indexOf(id)] : res.value[0]) ? false : true;
                                    }, 0);
                                    break;
                            }
                            this.appDataService.updateAppData(Object.assign({}, this.appData, {
                                visible: this.isVisible,
                                editable: this.isEditable,
                                mandatory: this.isMandatory
                            }));
                        }
                    }
                });
        }
        /**
         * Emit after the code has subscribed the emitter else conditions on the last index of repeatable block
         * won't work
         */
        if (this.manageState) {
            this.setSessionData(this.fieldValue);
        }
        else if (!this.isListView && !this.isTableView) {
            this.onSetSessionData(this.fieldData.unique_id, this.fieldValue);
        }
        this.onViewDataInit();
        let attachmentApiKey = null;
        if (this.fieldData.field_type === 'Attachments') {
            if (this.isSingleApiKey) {
                attachmentApiKey = this.fieldData.api_key;
            }
            else if (this.fieldData.response_api_key) {
                const responseAPIkeyArr = this.fieldData.response_api_key.split('|');
                attachmentApiKey = responseAPIkeyArr[0];
                if (attachmentApiKey.includes('##')) {
                    attachmentApiKey = attachmentApiKey.split('##').pop();
                }
            }
        }
        // console.log('attachmentApiKey', attachmentApiKey);
        this.onComponentEvent('onLoad', {}, true, this.fieldData.field_type === 'Attachments' ? {
            type: 'file',
            fileData: { apiKey: attachmentApiKey }
        } : undefined);
    }
    onViewUnload() {
        if (this.changeDetectorRef && !this.changeDetectorRef.destroyed) {
            this.changeDetectorRef.detectChanges();
        }
        for (const key in this.variableObject) {
            if (this.variableObject[key]) {
                this.variableObject[key].unsubscribe();
            }
        }
    }
    onViewLoaded() { }
    // set attachment message
    /**
     * method sets message for the special
     * attachment data type
     */
    setAttachmentMessage(messageId) {
    }
    conditionCheck(value) {
        let mandatoryCondition;
        let editableCondition;
        let visibilityCondition;
        let customClassCondition;
        if (!this.conditionObj['isMandatory']) {
            mandatoryCondition = this.conditionalUtil.checkMandatory(this.fieldData, String(this.appData.id), value);
        }
        if (!this.conditionObj['isEditable']) {
            editableCondition = this.conditionalUtil.checkEditable(this.fieldData, String(this.appData.id), value);
        }
        if (!this.conditionObj['isVisible']) {
            visibilityCondition = this.conditionalUtil.checkVisibility(this.fieldData, String(this.appData.id), value);
        }
        if (this.fieldData['custom_class_condition'] && this.fieldData['custom_class_condition'].hasOwnProperty('query') && this.fieldData['custom_class_condition']['query'] != '') {
            customClassCondition = this.conditionalUtil.checkCustomClass(this.fieldData, String(this.appData.id), value);
        }
        const conditionalFieldValue = this.conditionalUtil.conditionalValue(this.fieldData, String(this.appData.id), value, this.fieldValue);
        if (mandatoryCondition !== undefined) {
            this.isMandatory = mandatoryCondition;
        }
        if (editableCondition !== undefined) {
            if (this.fromField === null) {
                this.isEditable = editableCondition;
                this.sharedEventsService.emitOnEditableStatusChanged.emit(this.fieldData.unique_id);
            }
        }
        if (visibilityCondition !== undefined) {
            if (this.fromField === null) {
                this.isVisible = visibilityCondition;
            }
        }
        if (customClassCondition !== undefined) {
            if (this.fromField === null) {
                this.isCustomClass = customClassCondition;
            }
        }
        if (this.fieldData.is_conditional_value && this.fieldData.is_conditional_value === 1) {
            if (conditionalFieldValue !== undefined) {
                if (conditionalFieldValue && String(conditionalFieldValue).includes('|')) {
                    this.fieldData.possible_values = conditionalFieldValue.split('|').map(s => s.trim());
                }
                else {
                    this.fieldValue = conditionalFieldValue;
                }
            }
        }
    }
    onSetSessionData(apiKey, value) {
        // console.log(apiKey, this.fieldData.unique_id + ' :: ' + value);
        this.conditionCheck(value);
        // check if preset data
        // Note: preset data only comes from table , list, and repeatable block
        // repeatable block contains unique id
        // if this is present store in another local storage
        // else store in akita store
        if (this.manageState) {
            if (this.presetData) {
                // set the repeatable state if with state
                if (this.appData.linkedBlockId) {
                    this.repeatableBlockDataUtil.updateRepeatableLocalStorageDataAfterSessionSet(this.appData.linkedBlockId, {
                        ...this.repetableBlockModel,
                        ...{ fieldId: String(this.appData.id), isMandatory: this.isMandatory }
                    });
                }
            }
            else {
                if (this.fieldData.is_mandatory === 2) {
                    this.appDataService.updateAppData(Object.assign({}, this.appData, { visible: this.isVisible, editable: this.isEditable, mandatory: this.isMandatory, value: this.fieldValue }));
                }
            }
        }
        if (this.changeDetectorRef && !this.changeDetectorRef.destroyed) {
            this.changeDetectorRef.detectChanges();
        }
    }
    onDirty() {
        if (!this.hasUnsavedData && this.modalOnPageLeave) {
            history.pushState(null, document.title, document.location.toString());
        }
        localStorage.setItem('has_unsaved_data', 'true');
        this.onComponentEvent('OnDirty');
    }
    /**
     * function that only updates a single entity in the akita store
     * and does not update or emit any event
     * @param data the field value that needs to be updated
     */
    updateFieldEntity(data) {
        if (this.manageState) {
            this.appDataService.updateAppData(Object.assign({}, this.appData, { visible: this.isVisible, editable: this.isEditable, mandatory: this.isMandatory, value: data }));
        }
    }
    /**
     * function that updates the attachment data in the akita store
     * special method that merges the new data with the existing data
     * or modifies the existing data based on the type or action
     * data
     */
    updateAttachments(type, fieldUniqueId, data = {}, attachmentId = '', isReplace = false) {
        let existingData = [];
        if (type) {
            const attachmentData = this.appDataService.getFieldDataByFieldId(fieldUniqueId);
            if (attachmentData) {
                // existingData = attachmentData;
                existingData = Object.assign([], attachmentData);
            }
        }
        else {
            existingData = data;
        }
        switch (type) {
            case 'upload':
                // console.log('Called', fieldUniqueId);
                // existingData = [...existingData, ...[data]];
                if (isReplace && existingData.length > 0) {
                    existingData[0] = data;
                }
                else {
                    existingData.push(data);
                }
                break;
            case 'delete':
                for (const [index, attachment] of Object.entries(existingData)) {
                    if (attachment.attachmentId === attachmentId) {
                        existingData.splice(Number(index), 1);
                        break;
                    }
                }
                // console.log('Deleted attachment data', existingData);
                break;
            case 'update':
                // TODO
                break;
            default:
                break;
        }
        // setTimeout(() => {
        this.updateFieldData(existingData);
        // this.appDataService.updateAppData(Object.assign({}, this.appData,
        //     {
        //         visible: this.isVisible,
        //         editable: this.isEditable,
        //         mandatory: this.isMandatory,
        //         isValid: true, value: existingData
        //     }));
        // this.sharedEventsService.buttonValidationEmitter.emit();
        // }, 1500);
    }
    updateFieldData(data, isValid = true) {
        // Perform custom validation check if applicable
        if (this.customCheck && data) {
            isValid = this.customErrorsValidation.getMessages(this.appData.id, data).length === 0 && isValid;
        }
        this.valid = isValid;
        this.fieldValue = data;
        // Update appData with new validation state
        this.appData = { ...this.appData, isValid };
        if (this.manageState) {
            this.appDataService.updateAppData({
                ...this.appData,
                visible: this.isVisible,
                editable: this.isEditable,
                mandatory: this.isMandatory,
                value: this.fieldValue,
            });
        }
        this.setSessionData(this.fieldValue);
        // Emit events asynchronously in a single timeout block
        setTimeout(() => {
            const { validateButtonForTagEmitter, buttonValidationEmitter } = this.sharedEventsService;
            validateButtonForTagEmitter.emit();
            buttonValidationEmitter.emit();
            // Emits Only if field is part of a repeatable block
            if (this.isRepeatable()) {
                this.sharedEventsService.rbCurrentIndex.emit(this.getRepeatableInfo());
            }
        }, 0);
    }
    /**
    * Check if field is part of a repeatable block
    */
    isRepeatable() {
        // Check if ID contains delimiter '$' which indicates repeatable block
        const idParts = String(this.appData.id).split('$');
        return (
        // Check if ID has 4 parts (stepId$blockId$parentPosition$position)
        // OR Check if ID has 3 parts (stepId$blockId$position)
        idParts.length === 3 || idParts.length === 4 ||
            // Check if it has repeatable block ID
            !!this.appData.repeatedBlockFieldId ||
            // Check if it's linked to a block
            !!this.appData.linkedBlockId ||
            // Check if it has preset data with position
            !!(this.presetData && this.presetData.position));
    }
    /**
     * Get repeatable block info if field is repeatable
     */
    getRepeatableInfo() {
        if (!this.isRepeatable()) {
            return null;
        }
        const idParts = String(this.appData.id).split('$');
        // Handle nested repeatable block: stepId$blockId$parentPosition$position
        if (idParts.length === 4) {
            return {
                stepId: idParts[0],
                id: idParts[1],
                parentPosition: parseInt(idParts[2]),
                position: parseInt(idParts[3]),
                isChildBlock: true,
                linkedBlockId: this.appData.linkedBlockId,
                repeatedBlockFieldId: this.appData.repeatedBlockFieldId
            };
        }
        // Handle regular repeatable block: stepId$blockId$position
        else if (idParts.length === 3) {
            return {
                stepId: idParts[0],
                id: idParts[1],
                parentPosition: undefined,
                position: parseInt(idParts[2]),
                isChildBlock: false,
                linkedBlockId: this.appData.linkedBlockId,
                repeatedBlockFieldId: this.appData.repeatedBlockFieldId,
            };
        }
    }
    // Emit on Data Set or Updated
    emitForFieldsSectionBlock(emitObj) {
        this.sharedEventsService.emitOnDataSetOrUpdated.emit(emitObj); // For Fields
        this.sharedEventsService.emitOnDataSetOrUpdatedForSection.emit(emitObj); // For Sections
        this.sharedEventsService.emitOnDataSetOrUpdatedForBlock.emit(emitObj); // For Blocks
        this.sharedEventsService.emitOnDataSetOrUpdatedForGenericBlock.emit(emitObj); // For Generic Blocks
    }
    setSessionData(data) {
        this.fieldValue = data;
        let emitObj = null;
        if (String(this.appData.id).split('$').length === 3) {
            emitObj = {
                apiKey: this.appData.linkedBlockId ? this.appData.id : this.fieldData.unique_id,
                value: data,
                index: String(this.appData.id).split('$')[2]
            };
        }
        else {
            emitObj = {
                apiKey: this.appData.linkedBlockId ? this.appData.id : this.fieldData.unique_id,
                value: data
            };
        }
        this.emitForFieldsSectionBlock(emitObj);
    }
    getSessionData() {
        this.fieldValue = this.userDataHandlerService.getFieldData(this.sessionKeyUtil.generateSessionKey(this.fieldData));
    }
    conditionalErrorMessageCompareFields = (apiKey, fieldData, repeatedFieldId = '', options) => {
        // console.log(this.fieldData.unique_id);
        if (!fieldData.validation_messages || !Array.isArray(fieldData.validation_messages) || fieldData.validation_messages.length === 0) {
            return;
        }
        const ifValid = [];
        for (const [index, validationMessage] of fieldData.validation_messages.entries()) {
            if (!validationMessage || !validationMessage.type) {
                continue;
            }
            if (validationMessage.type) {
                if (validationMessage.type === 'Conditional' || validationMessage.type === 'conditional_message') {
                    let validationMsg = {};
                    const displayMessage = this.wfeConditionalExecuter.evaluateConditionQuery(validationMessage.query, validationMessage.conditions, repeatedFieldId, {}, { unique_id: this.fieldData.unique_id, apiKey: this.fieldData.api_key });
                    if (this.wfeStepLoaderService.messagesDataMap[validationMessage.message_code]) {
                        validationMsg = this.wfeStepLoaderService.messagesDataMap[validationMessage.message_code];
                    }
                    // switch to display type of the message that is configured
                    // console.log("displayMessage", displayMessage);
                    if (displayMessage !== undefined) {
                        // this.updateFieldData(this.fieldData.value, false);
                        // update the app data for the field
                        ifValid.push(!displayMessage);
                    }
                    switch (validationMessage.display_type) {
                        case 'MODAL':
                            // show the error message in the modal
                            if (displayMessage) {
                                this.dialog.closeAll();
                                this.openDialog(validationMsg['message_text']);
                            }
                            break;
                        case 'INLINE':
                            //console.log('this.fieldData.additional param2 - ', this.fieldData.additional_parameters);
                            if (this.fieldData.additional_parameters['sin_number'] != true) {
                                if (displayMessage) {
                                    this.showComparisonError[String(this.appData.id) + '_' + index] = validationMsg;
                                    // this.comparisonErrorMessageData = validationMsg;
                                }
                                else {
                                    if (this.showComparisonError[String(this.appData.id) + '_' + index]) {
                                        delete this.showComparisonError[String(this.appData.id) + '_' + index];
                                    }
                                    // this.showComparisonError = false;
                                }
                            }
                            // console.log(this.fieldData.unique_id, this.showComparisonError);
                            break;
                        case 'POPUP':
                            // show the error message as popup or mat snack bar
                            if (displayMessage) {
                                this.snackBar.dismiss();
                                this.openSanckBar(validationMsg['message_text']);
                            }
                            break;
                        default:
                            // show the error message inline
                            //console.log('this.fieldData.additional param2 - ', this.fieldData.additional_parameters);
                            if (this.fieldData.additional_parameters['sin_number'] != true) {
                                if (displayMessage) {
                                    this.showComparisonError[String(this.appData.id) + '_' + index] = validationMsg;
                                    // this.comparisonErrorMessageData = validationMsg;
                                }
                                else {
                                    if (this.showComparisonError[String(this.appData.id) + '_' + index]) {
                                        delete this.showComparisonError[String(this.appData.id) + '_' + index];
                                    }
                                    // this.showComparisonError = false;
                                }
                            }
                            break;
                    }
                }
                if (validationMessage.type === 'Regex') {
                    let valid;
                    let mask = [];
                    let fieldVal = this.fieldValue;
                    if (this.additionalParameter["Data Format"] && this.additionalParameter["Data Format"] != '') {
                        let maskFormat = this.additionalParameter["Data Format"];
                        maskFormat.split('').forEach(element => {
                            element == 'X' || element == '0' ? mask.push('X') : mask.push(element);
                        });
                    }
                    // fieldVal = this.getMaskedInputValue(fieldVal, mask);
                    if (fieldVal && this.fieldData.validation_regex) {
                        const patt = new RegExp(this.fieldData.validation_regex);
                        valid = patt.test(fieldVal);
                    }
                    if (valid !== undefined) {
                        // this.updateFieldData(this.fieldData.value, false);
                        // update the app data for the field
                        ifValid.push(valid);
                    }
                }
            }
        }
        if (ifValid.length > 0) {
            // if regex validation is passed and has conditional errors
            if ((this.appData.isValid && ifValid.includes(false)) || !this.appData.isValid && !ifValid.includes(false)) {
                this.valid = !ifValid.includes(false);
                this.appData = Object.assign({}, this.appData, { isValid: this.valid });
                this.appDataService.updateAppData(Object.assign({}, this.appData, {
                    visible: this.isVisible,
                    editable: this.isEditable,
                    mandatory: this.isMandatory, isValid: this.valid, value: this.fieldValue
                }));
            }
        }
        this.sharedEventsService.buttonValidationEmitter.emit();
    };
    conditionalErrorMessageCompareFieldsSin = (apiKey, fieldData, repeatedFieldId = '', isMessageDisplay = false) => {
        // console.log(this.fieldData.unique_id);
        const ifValid = [];
        for (const [index, validationMessage] of fieldData.validation_messages.entries()) {
            if (validationMessage.type) {
                if (validationMessage.type === 'Conditional' || validationMessage.type === 'conditional_message') {
                    let validationMsg = {};
                    const displayMessage = isMessageDisplay;
                    if (this.wfeStepLoaderService.messagesDataMap[validationMessage.message_code]) {
                        validationMsg = this.wfeStepLoaderService.messagesDataMap[validationMessage.message_code];
                    }
                    // switch to display type of the message that is configured
                    // console.log("displayMessage", displayMessage); sd
                    if (displayMessage !== undefined) {
                        // this.updateFieldData(this.fieldData.value, false);
                        // update the app data for the field
                        ifValid.push(!displayMessage);
                    }
                    // console.log('validationMessage.display_type - ', validationMsg);
                    //this.showComparisonError[String(this.appData.id) + '_' + index] = validationMsg;
                    // show the error message inline
                    if (displayMessage) {
                        this.valid = false;
                        this.showComparisonError[String(this.appData.id) + '_' + index] = validationMsg;
                        // this.comparisonErrorMessageData = validationMsg;
                        return;
                    }
                    else {
                        this.valid = true;
                        if (this.showComparisonError[String(this.appData.id) + '_' + index]) {
                            delete this.showComparisonError[String(this.appData.id) + '_' + index];
                        }
                    }
                    // console.log(this.fieldData.unique_id, this.showComparisonError);
                }
            }
        }
        // if (ifValid.length > 0) {
        //     // if regex validation is passed and has conditional errors
        //     if ((this.appData.isValid && ifValid.includes(false)) || !this.appData.isValid && !ifValid.includes(false)) {
        //         this.valid = !ifValid.includes(false);
        //         this.appData = Object.assign({}, this.appData, { isValid: this.valid });
        //         this.appDataService.updateAppData(Object.assign({}, this.appData,
        //             {
        //                 visible: this.isVisible,
        //                 editable: this.isEditable,
        //                 mandatory: this.isMandatory, isValid: this.valid, value: this.fieldValue
        //             }));
        //     }
        // }
        // this.sharedEventsService.buttonValidationEmitter.emit();
    };
    getMaskedInputValue(inputValue, mask) {
        if (inputValue && mask && mask.length > 0) {
            let inputValueArr = inputValue.split('');
            let index = 0;
            let maskedInput = [];
            mask.forEach((v) => {
                if (v == 'X') {
                    maskedInput.push(inputValueArr[index++]);
                }
                else {
                    maskedInput.push(v);
                }
            });
            return maskedInput.join('');
            // return conformToMask(inputValue, mask, { guide: false }).conformedValue;
        }
        return inputValue;
    }
    returnMessages(messageArray) {
        const arr = [];
        for (const message of messageArray) {
            if (message.type !== 'Conditional') {
                arr.push({
                    type: message.type,
                    displayType: message.display_type,
                    code: message.message_code
                });
            }
        }
        return arr;
    }
    setData() {
        this.userDataHandlerService.setOrUpdateFieldData(this.fieldData.api_key, this.fieldValue);
    }
    updateConditionField(fieldData, data) {
        let unq = data.unique_id;
        fieldData.event_list.forEach(event => {
            event.event_params.forEach(params => {
                params?.condition?.forEach(condition => {
                    if (condition?.repeatableBlockExist === "true") {
                        if (condition.field) {
                            condition.field = unq;
                        }
                        if (condition.api_key) {
                            condition.api_key = unq;
                        }
                    }
                });
            });
        });
        return fieldData;
    }
    /**
     * function triggers the event list
     * @param type the event type
     * @param primaryData optional mainly the data that is stored in list or table
     * @param isDefault boolean flag to check the event by default it is set to true
     * @param payLoad optional data if required to pass to the event
     * @param displayType optional only required if display_type in the event needs to be matched default empty
     */
    onComponentEvent(type, primaryData = {}, isDefault = true, payLoad, displayType = '') {
        if (this.fieldData.event_list && this.fieldData.event_list.length > 0) {
            if (this.fieldData.field_type == 'Menu' && this.presetData) {
                this.fieldData = this.updateConditionField(this.fieldData, this.presetData);
            }
            const _this = this;
            setTimeout(() => {
                this.wfeEventListHandler.onComponentEventBatch(_this.fieldData, _this.presetData, _this.stepId, type, primaryData, isDefault, payLoad, displayType);
            }, 100);
            // for (const event of JSON.parse(JSON.stringify(this.fieldData.event_list))) {
            //     if (event.isDefault === isDefault &&
            //         event.event_name.toLowerCase() === type.toLowerCase() &&
            //         (displayType ? event.display_type.toLowerCase() === displayType.toLowerCase() : true)) {
            //         this.setNextStepId(event);
            //         window['eventElementId'] = this.fieldData.html_id;
            //         if (this.presetData && this.presetData.repeatedBlockFieldId) {
            //             primaryData = {
            //                 ...primaryData,
            //                 value: {
            //                     ...primaryData.value,
            //                     linkedBlockId: this.presetData.linkedBlockId,
            //                     position: this.presetData.position,
            //                     parentPosition: this.presetData.parentPosition,
            //                     isRepeatable: true
            //                 }
            //             };
            //         }
            //         this.wfeEventListHandler.switchEventDisplayType(event, this.fieldData.event_list, primaryData, payLoad);
            //     }
            // }
        }
    }
    /**
     * function to set next step id for NavigatetoNextPage in onResponse
     * @param event the event
     */
    // setNextStepId(event) {
    //     for (const eventParam of event.event_params) {
    //         if (eventParam.invoke_event_config && eventParam.invoke_event_config.callback_config && eventParam.invoke_event_config.callback_config.onResponse) {
    //             for (const onRes of eventParam.invoke_event_config.callback_config.onResponse) {
    //                 if (onRes.NavigatetoNextPage) {
    //                     onRes.NavigatetoNextPage = this.wfeStepLoaderService.getNextStepInCurrentSequence(this.stepId);
    //                 }
    //             }
    //         }
    //     }
    // }
    dependencyHandler = async (type, payLoad = {}) => {
        if (type == 'onLoad') {
            if (this.fieldData.possible_value_type === 'ExternalApi') {
                const apiType = localStorage.getItem('API_TYPE');
                switch (apiType) {
                    case 'ESB':
                        this._ceeApiService.ESBRequestHandler(this.fieldData.possible_value_api).subscribe(res => {
                            if (res['status'] === 'ok') {
                                const appBaseResult = window.sessionStorage.getItem('ApplicationBaseResultPath');
                                const apiResponse = JSON.parse(res['api_response'])[appBaseResult];
                                this.sharedEventsService.emitApiSuccessResponse.emit(apiResponse);
                            }
                            else {
                                this.sharedEventsService.emitApiErrorResponse.emit(res);
                            }
                        });
                        break;
                    case 'INTERNAL':
                    case 'EXTERNAL':
                        this.externalRequestResponseUtil.prepareObjectToBeSent(this.fieldData.possible_value_api, apiType === 'INTERNAL' ? 'internal' : '');
                        break;
                    default:
                        let appData = [];
                        let apiData = [];
                        // store the appData
                        this.appDataService.getAllAppData().subscribe(res => {
                            // console.log('appData', res);
                            if (this.isSingleApiKey) {
                                appData = res;
                            }
                            else {
                                let finalArr = [];
                                for (const data of res) {
                                    let obj = {};
                                    const arr = [];
                                    for (const requestKey of data['requestApiKey']) {
                                        obj = data;
                                        obj = { ...obj, apiKey: requestKey };
                                        arr.push(obj);
                                    }
                                    finalArr = [...finalArr, ...arr];
                                }
                                appData = finalArr;
                            }
                            // console.log('app Data', appData);
                        });
                        // store the apiData
                        this.apiDataService.getAllApiData().subscribe(res => {
                            // console.log('apiData', res);
                            apiData = res;
                        });
                        const eventHandlerEmitterObject = {
                            handler: this.fieldData.possible_value_api,
                            apiKey: this.fieldData.api_key,
                            appData,
                            apiData
                        };
                        this.sharedEventsService.eventHandlerEmitter.emit(eventHandlerEmitterObject);
                        break;
                }
                this.isOnSelect = true;
            }
        }
        if (type == 'onSelect') {
            // trigger event list
            this.onComponentEvent(type, {}, true, payLoad);
        }
    };
    comparisonError() {
        // Show Comparison Error Messages
        if (this.additionalParameter['ComparisonField']) {
            if (this.fieldValue !== this.appDataService.getFieldDataByFieldId(this.commonUtil.getID(this.additionalParameter['ComparisonField']))) {
                const errorCode = this.commonUtil.getValue(this.additionalParameter['ComparisonField']).trim();
                if (this.wfeStepLoaderService.messagesDataMap[errorCode]) {
                    this.showComparisonError[String(this.appData.id)] = this.wfeStepLoaderService.messagesDataMap[errorCode];
                }
            }
            else {
                if (this.showComparisonError[String(this.appData.id)]) {
                    delete this.showComparisonError[String(this.appData.id)];
                }
            }
        }
    }
    isHTML(value) {
        const regex = /(<([^>]+)>)/ig;
        return regex.test(value);
    }
    setCharacterCountMessage() {
        if (this.additionalParameter['DisplayCharacterCount']) {
            this.characterCount.display = true;
            if (this.additionalParameter['DisplayCharacterCount'].split('|')[0].trim()) {
                if (this.wfeStepLoaderService.messagesDataMap[this.additionalParameter['DisplayCharacterCount'].split('|')[0].trim()]) {
                    this.characterCount.type = this.additionalParameter['DisplayCharacterCount'].split('|')[1].trim();
                    this.characterCountMessageData.left =
                        this.wfeStepLoaderService.messagesDataMap[this.additionalParameter['DisplayCharacterCount'].split('|')[0].trim()];
                }
                else {
                    this.characterCount.type = this.additionalParameter['DisplayCharacterCount'].split('|')[0].trim();
                }
            }
            if (this.additionalParameter['DisplayCharacterCount'].split('|').length > 1 && this.additionalParameter['DisplayCharacterCount'].split('|')[1].trim()) {
                if (this.wfeStepLoaderService.messagesDataMap[this.additionalParameter['DisplayCharacterCount'].split('|')[1].trim()]) {
                    this.characterCount.type = this.additionalParameter['DisplayCharacterCount'].split('|')[0].trim();
                    this.characterCountMessageData.right =
                        this.wfeStepLoaderService.messagesDataMap[this.additionalParameter['DisplayCharacterCount'].split('|')[1].trim()];
                }
                else {
                    this.characterCount.type = this.additionalParameter['DisplayCharacterCount'].split('|')[1].trim();
                }
            }
        }
    }
    openDialog(data, id = '') {
        let dialogRef;
        if (id) {
            dialogRef = this.dialog.open(AlertModalComponent, {
                data: {
                    message: data
                },
                id
            });
        }
        else {
            dialogRef = this.dialog.open(AlertModalComponent, {
                data: {
                    message: data
                }
            });
        }
        dialogRef.afterClosed().subscribe(result => {
            // console.log('The dialog ' + data + ' was closed.');
        });
    }
    openSanckBar(message, messageCode = '') {
        this.snackBar.open(message, 'OK', {
            verticalPosition: 'top',
            panelClass: messageCode ?
                ['mat-toolbar', 'mat-primary', 'error-popup', `error-popup-${messageCode}`] :
                ['mat-toolbar', 'mat-primary', 'error-popup'],
            duration: localStorage.getItem('messageTimeOut') ? Number(localStorage.getItem('messageTimeOut')) : null
        });
    }
    // returns the array of the data
    checkForArray(array, key) {
        const ids = [];
        key = key.substr(1);
        for (const data of array) {
            ids.push(this.checkForObject(data, key));
        }
        return (ids);
    }
    checkForObject(data, key) {
        if (key.indexOf('.') >= 0) {
            const objectKeys = key.split('.');
            for (const singleKey of objectKeys) {
                objectKeys.splice(objectKeys.indexOf(singleKey), 1);
                this.checkForObject(data[singleKey], objectKeys.length > 0 ? objectKeys.join('.') : objectKeys[0]);
            }
        }
        else {
            return data[key] ? data[key] : data;
        }
    }
    getConcatenation = () => {
        if (this.isSingleApiKey) {
            if (this.fieldData.additional_parameters
                && this.fieldData.additional_parameters.length > 0) {
                for (const values of this.fieldData.additional_parameters) {
                    if (values.parameter_type === 'ConcatFields') {
                        const concatenatedValues = values.value.split('+');
                        this.concatData({ fid: this.fieldData.unique_id, concatValues: concatenatedValues });
                    }
                }
            }
        }
        else {
            if (this.appData.responseApiKey[0] && this.appData.responseApiKey[0].includes('+')) {
                const concatenatedValues = this.appData.responseApiKey[0].split('+').map(str => str.trim());
                this.concatData({ fid: this.fieldData.unique_id, concatValues: concatenatedValues });
            }
        }
    };
    setFieldValue() {
        let value = '';
        // TODO: check functionality
        if (this.fieldData.response_api_key && this.fieldData.response_api_key.includes('|')) {
            // set concatenated field values
            const apiKeys = this.apiKeyUtil.getMultipleApiKeys(this.apiKeyUtil.getConcatenatedApiKeys(this.fieldData.response_api_key));
            for (const key of apiKeys) {
                if (key.includes('+')) {
                    let val;
                    const keys = key.split('+');
                    for (const singleKey of keys) {
                        const apiCallbackData = this.returnValueFromCallback(singleKey);
                        if (apiCallbackData !== null && apiCallbackData !== undefined) {
                            val = keys.indexOf(singleKey) === 0 ? apiCallbackData : val + ' ' + apiCallbackData;
                        }
                    }
                    value = val;
                }
                else {
                    const apiCallbackData = this.returnValueFromCallback(key);
                    if (apiCallbackData !== null && apiCallbackData !== undefined) {
                        value = apiCallbackData;
                    }
                }
            }
        }
        else {
            value = this.returnValueFromCallback(this.fieldData.response_api_key);
        }
        return value;
    }
    /**
     * function that returns value from set api callback util
     * @param keyName the api key name
     */
    returnValueFromCallback(keyName) {
        const handlerValue = this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(keyName)) ?
            this.apiDataService.getApiDataByHandler(this.commonUtil.getHandlerName(keyName)).value : {};
        return this.setApiCallBackDataUtil.setApiCallBackData(keyName, handlerValue);
    }
    returnMessageData(messageCode) {
        if (messageCode) {
            if (this.wfeStepLoaderService.messagesDataMap[messageCode]) {
                return this.wfeStepLoaderService.messagesDataMap[messageCode];
            }
        }
    }
    /**
     * open popup or snackbar based on the configuration
     * @param fieldId unique id of the field
     * @param value the current value of the field
     */
    setModalorSanckBarMessage(fieldId, value, messageType = '') {
        if (this.fieldData.unique_id === fieldId) {
            if (this.modalMessages.length > 0) {
                this.modalMessages.forEach(message => {
                    switch (message.type.toLowerCase()) {
                        case 'regex':
                            const regex = value.match(new RegExp(this.fieldData.validation_regex));
                            if (regex == null) {
                                this.dialog.closeAll();
                                this.openDialog(this.returnMessageData(message.code).message_text, message.code);
                            }
                            break;
                        case 'mandatory':
                            if (this.isMandatory && value === '') {
                                this.dialog.closeAll();
                                this.openDialog(this.returnMessageData(message.code).message_text, message.code);
                            }
                            break;
                        case 'individual_file_size':
                        case 'total_file_size':
                        case 'file_type':
                            if (messageType.toLowerCase() === message.type.toLowerCase()) {
                                this.dialog.closeAll();
                                this.openDialog(this.returnMessageData(message.code).message_text, message.code);
                            }
                            break;
                        default:
                            break;
                    }
                });
            }
            if (this.snackBarMessages.length > 0) {
                this.snackBarMessages.forEach(message => {
                    switch (message.type.toLowerCase()) {
                        case 'regex':
                            const regex = value.match(new RegExp(this.fieldData.validation_regex));
                            if (regex == null) {
                                this.snackBar.dismiss();
                                this.openSanckBar(this.returnMessageData(message.code).message_text, message.code);
                            }
                            break;
                        case 'mandatory':
                            if (this.isMandatory && value === '') {
                                this.snackBar.dismiss();
                                this.openSanckBar(this.returnMessageData(message.code).message_text, message.code);
                            }
                            break;
                        case 'individual_file_size':
                        case 'total_file_size':
                        case 'file_type':
                        case 'invalid_file_extension':
                            if (messageType.toLowerCase() === message.type.toLowerCase()) {
                                this.snackBar.dismiss();
                                this.openSanckBar(this.returnMessageData(message.code).message_text, message.code);
                            }
                            break;
                        default:
                            break;
                    }
                });
            }
        }
    }
    setConditions(childConditions, type) {
        let check = this.returnUniqueId() ? true : false;
        if (childConditions && childConditions.exceptionFields && childConditions.exceptionFields.length > 0 && childConditions.exceptionFields.includes(this.returnUniqueId())) {
            check = false;
        }
        if (check && childConditions && childConditions.isActive) {
            if (childConditions.fields.length > 0 && childConditions.fields.includes(this.returnUniqueId())) {
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else if (childConditions.overrideAll) {
                // console.log(type, obj);
                this[type] = childConditions.value;
                this.conditionObj[type] = true;
            }
            else {
                this.conditionObj[type] = false; // The child conditions will work
            }
        }
    }
    /**
     * get associated fields from the conditional mandatory, display, editable
     */
    getAssociatedFields() {
        const dependentFields = [];
        if (this.fieldData.editable_condition.condition) {
            for (const condition of this.fieldData.editable_condition.condition) {
                dependentFields.push(condition.field);
            }
        }
        if (this.fieldData.display_condition.condition) {
            for (const condition of this.fieldData.display_condition.condition) {
                dependentFields.push(condition.field);
            }
        }
        if (this.fieldData.mandatory_condition.condition) {
            for (const condition of this.fieldData.mandatory_condition.condition) {
                dependentFields.push(condition.field);
            }
        }
        return [...new Set(dependentFields)];
    }
    /**
     * function that returns the unique id
     */
    returnUniqueId() {
        const id = String(this.appData.id);
        if (id.split('$').length === 3) {
            return id.split('$')[1];
        }
        return id;
    }
    /**
     * function that set primary key value that comes from cell
     * and returns the cellData
     * @param primaryKeyIndex an object
     */
    setPrimaryKey(primaryKeyIndex) {
        const cellData = {
            type: '',
            stepId: this.stepId,
            value: {}
        };
        if (primaryKeyIndex) {
            if (primaryKeyIndex.value) {
                const apiData = {
                    id: primaryKeyIndex.name,
                    apiUrl: '',
                    apiKey: primaryKeyIndex.name,
                    value: primaryKeyIndex.value
                };
                this.apiDataService.setApiData(Object.assign({}, apiData));
            }
            if (primaryKeyIndex.type && primaryKeyIndex.cellData) {
                cellData.type = primaryKeyIndex.type;
                cellData.value = primaryKeyIndex.cellData;
            }
        }
        return cellData;
    }
    // customValidationCheck(value) {
    //     if (this.customCheck) {
    //         const value
    //         console.log(this.customErrorsValidation.getMessages(this.appData.id, value));
    //     }
    // }
    /**
     * function returns an object with key and value where
     * key is the name of the field/parameter that needs to be
     * changed on language change and value is the data that needs to
     * be set for that param
     * @param value: string the key name that needs to be checked and set
     * @param data: object the current changes field data
     * @param changeMap: object a map that checks which value will change
     * for a specific field
     */
    switchLang(value, data, changeMap) {
        const checkType = value.split('[*]');
        if (data[checkType[0]]) {
            if (checkType[1]) {
                // checking for additional parameter
                data[checkType[0]].forEach((element) => {
                    if (element.parameter_type === checkType[1]) {
                        return { key: changeMap[value], val: element.value };
                    }
                });
            }
            else {
                return { key: changeMap[value], val: checkType[0] };
            }
        }
    }
    /**
     * this function returns the external api option value for picker, menu,
     * @param value the api key from which the value of the picker should come
     * @param data the api data
     */
    getExternalApiOptionValue(value, data) {
        if (value.includes('||')) {
            const valueApikeys = value.split('||').map(str => str.trim());
            var valueData = this.setApiCallBackDataUtil.setApiCallBackData(valueApikeys[0], data);
            var labelData = this.setApiCallBackDataUtil.setApiCallBackData(valueApikeys[1], data);
            // console.log("valueData: ",valueData);
            // console.log("labelData: ",labelData);
            if (value.indexOf('[*]') > -1) {
                const handlerValueData = this.setApiCallBackDataUtil.setApiCallBackData(valueApikeys[0].split('[*]')[0], data);
                const handlerLabelData = this.setApiCallBackDataUtil.setApiCallBackData(valueApikeys[1].split('[*]')[0], data);
                // console.log("handlerValueData: ",handlerValueData);
                // console.log("handlerLabelData: ",handlerLabelData);
                if (Array.isArray(handlerValueData) && handlerValueData.length == 0) {
                    valueData = [];
                }
                if (Array.isArray(handlerLabelData) && handlerLabelData.length == 0) {
                    labelData = [];
                }
            }
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
            return this.setApiCallBackDataUtil.setApiCallBackData(value, data);
        }
    }
    // all getter and setters go here
    get singleCondition() {
        return localStorage.getItem('isSingleCondition') === 'true' ? true : false;
    }
    get storeLabels() {
        return localStorage.getItem('storeLabels') === 'true' ? true : false;
    }
    get isSingleApiKey() {
        return localStorage.getItem('singleApiKey') === 'true' ? true : false;
    }
    get hashApiKey() {
        return localStorage.getItem('hash_api_key') === 'true' ? true : false;
    }
    get hasUnsavedData() {
        return localStorage.getItem('has_unsaved_data') === 'true' ? true : false;
    }
    get modalOnPageLeave() {
        return localStorage.getItem('modal_on_page_leave') ? localStorage.getItem('modal_on_page_leave') : false;
    }
    get customCheck() {
        return localStorage.getItem('customErrorSteps') && localStorage.getItem('customErrorSteps').includes(this.stepId);
    }
    static ɵfac = function BaseView_Factory(t) { return new (t || BaseView)(i0.ɵɵdirectiveInject(i1.UserDataHandlerService), i0.ɵɵdirectiveInject(i2.SharedEventsServiceService), i0.ɵɵdirectiveInject(i3.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i4.AppDataService), i0.ɵɵdirectiveInject(i5.ApiDataService), i0.ɵɵdirectiveInject(i6.WfeStepLoaderService), i0.ɵɵdirectiveInject(i7.MatDialog), i0.ɵɵdirectiveInject(i8.MatSnackBar), i0.ɵɵdirectiveInject(i9.HttpClient), i0.ɵɵdirectiveInject(i10.CeeApiService), i0.ɵɵdirectiveInject(i11.Router), i0.ɵɵdirectiveInject(i12.FileUploadService)); };
    static ɵdir = /*@__PURE__*/ i0.ɵɵdefineDirective({ type: BaseView, inputs: { rootData: "rootData" } });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(BaseView, [{
        type: Directive
    }], () => [{ type: i1.UserDataHandlerService }, { type: i2.SharedEventsServiceService }, { type: i3.CEEInternalEmitterService }, { type: i4.AppDataService }, { type: i5.ApiDataService }, { type: i6.WfeStepLoaderService }, { type: i7.MatDialog }, { type: i8.MatSnackBar }, { type: i9.HttpClient }, { type: i10.CeeApiService }, { type: i11.Router }, { type: i12.FileUploadService }], { rootData: [{
            type: Input
        }] }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWJhc2UtY2xhc3MuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtYmFzZS1jbGFzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQTRDLEtBQUssRUFBRSxTQUFTLEVBQWMsTUFBTSxlQUFlLENBQUM7QUFFdkcsT0FBTyxFQUFFLGNBQWMsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzNELE9BQU8sRUFBRSxvQkFBb0IsRUFBRSxNQUFNLG9DQUFvQyxDQUFDO0FBQzFFLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDhDQUE4QyxDQUFDO0FBQ3RGLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHNDQUFzQyxDQUFDO0FBQzNFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLGdDQUFnQyxDQUFDO0FBWXBFLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUd0QyxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxpREFBaUQsQ0FBQztBQUV0RixPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ2xELE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSwrQkFBK0IsQ0FBQztBQUVoRSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDdkQsT0FBTyxFQUFFLG1CQUFtQixFQUFFLE1BQU0seURBQXlELENBQUM7QUFHOUYsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0scUNBQXFDLENBQUM7QUFDekUsT0FBTywyQkFBMkIsTUFBTSx5Q0FBeUMsQ0FBQztBQUNsRixPQUFPLEVBQUUsU0FBUyxFQUFFLE1B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QUFPLENBQUMsa0JBQWtCLENBQUMsSUFBSSxZQUFZLENBQUMsT0FBTyxDQUFDLGtCQUFrQixDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0SCxDQUFDO2tFQTM0RGlCLFFBQVE7NkRBQVIsUUFBUTs7aUZBQVIsUUFBUTtjQUQ3QixTQUFTO29ZQUVHLFFBQVE7a0JBQWhCLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgVmlld1JlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgRGlyZWN0aXZlLCBmb3J3YXJkUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5pbXBvcnQgeyBTZXNzaW9uS2V5VXRpbCB9IGZyb20gJy4uL3V0aWxzL3Nlc3Npb24ta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBDb25kaXRpb25hbFZhbGlkYXRvciB9IGZyb20gJy4uL3V0aWxzL3dmZS1jb25kaXRpb25hbC12YWxpZGF0b3InO1xyXG5pbXBvcnQgeyBXRkVDb25kaXRpb25hbEV4ZWN1dGVyIH0gZnJvbSAnLi4vdXRpbHMvd2ZlLWNvbmRpdGlvbmFsLXF1ZXJ5LWV4ZWN1dGVyLXV0aWwnO1xyXG5pbXBvcnQgeyBXRkVFdmVudExpc3RIYW5kbGVyIH0gZnJvbSAnLi4vdXRpbHMvd2ZlLWV2ZW50LWxpc3QtaGFuZGxlci11dGlsJztcclxuaW1wb3J0IHsgU2F2ZUZpZWxkVmFsdWVVdGlsIH0gZnJvbSAnLi4vdXRpbHMvc2F2ZS1maWVsZC12YWx1ZS11dGlsJztcclxuXHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgQXBwRGF0YVNlcnZpY2UgfSBmcm9tICcuLi9tb2RlbHMvYXBwLWRhdGEvYXBwLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEFwaURhdGFTZXJ2aWNlIH0gZnJvbSAnLi4vbW9kZWxzL2FwaS1kYXRhL2FwaS1kYXRhLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgdGhyb3dFcnJvciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBBcHBEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgdGFrZSB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcclxuaW1wb3J0IHsgTWF0RGlhbG9nIGFzIE1hdERpYWxvZyB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XHJcbmltcG9ydCB7IE1hdFNuYWNrQmFyIGFzIE1hdFNuYWNrQmFyIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcclxuaW1wb3J0IHsgQWxlcnRNb2RhbENvbXBvbmVudCB9IGZyb20gJy4uL2NvbXBvbmVudHMvYWxlcnQtbW9kYWwvYWxlcnQtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgQVBJS2V5VXRpbCB9IGZyb20gJy4uL3V0aWxzL2FwaS1rZXktdXRpbCc7XHJcbmltcG9ydCB7IENvbW1vblV0aWwgfSBmcm9tICcuLi91dGlscy9jb21tb24tdXRpbCc7XHJcbmltcG9ydCB7IENvbmRpdGlvbmFsVXRpbCB9IGZyb20gJy4uL3V0aWxzL3dmZS1jb25kaXRpb25hbC11dGlsJztcclxuaW1wb3J0IHsgSHR0cENsaWVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcclxuaW1wb3J0IHsgRmxhdFVuZmxhdCB9IGZyb20gJy4uL3V0aWxzL2ZsYXQtdW5mbGF0LWpzb24nO1xyXG5pbXBvcnQgeyBSZXBlYXRhYmxlQmxvY2tEYXRhIH0gZnJvbSAnLi4vbW9kZWxzL3JlcGVhdGFibGUtYmxvY2stZGF0YS9yZXBldGFibGVCbG9ja0RhdGEudXRpbCc7XHJcbmltcG9ydCB7IFJlcGV0YWJsZUJsb2NrRmllbGRNb2RlbCB9IGZyb20gJy4uL21vZGVscy9yZXBlYXRhYmxlLWJsb2NrLWRhdGEvcmVwZWF0YWJsZUJsb2NrRmllbGREYXRhLm1vZGVsJztcclxuaW1wb3J0IHsgQXBwRGF0YVF1ZXJ5IH0gZnJvbSAnLi4vbW9kZWxzL2FwcC1kYXRhL2FwcC1kYXRhLnF1ZXJ5JztcclxuaW1wb3J0IHsgU2V0QVBJQ2FsbGJhY2tEYXRhIH0gZnJvbSAnLi4vdXRpbHMvc2V0LWFwaS1jYWxsYmFjay1kYXRhLXV0aWwnO1xyXG5pbXBvcnQgRXh0ZXJuYWxSZXF1ZXN0UmVzcG9uc2VVdGlsIGZyb20gJy4uL3V0aWxzL2V4dGVybmFsLXJlcXVlc3QtcmVzcG9uc2UudXRpbCc7XHJcbmltcG9ydCB7IEVtcHR5VXRpbCB9IGZyb20gJy4uL3V0aWxzL2VtcHR5LXV0aWwnO1xyXG5pbXBvcnQgeyBEeW5hbWljTGFiZWxVdGlsIH0gZnJvbSAnLi4vdXRpbHMvZHluYW1pYy1sYWJlbC11dGlsJztcclxuaW1wb3J0IHsgQ2hpbGRDb25kaXRpb24gfSBmcm9tICcuLy4uL21vZGVscy9jaGlsZENvbmRpdGlvbi5tb2RlbCc7XHJcbmltcG9ydCB7IEN1c3RvbUVycm9yc1ZhbGlkYXRpb24gfSBmcm9tICcuLi9zdGF0aWMtY29kZXMvY3VzdG9tLWVycm9ycy12YWxpZGF0aW9uJztcclxuaW1wb3J0IHsgRmlsZVVwbG9hZFNlcnZpY2UgfSBmcm9tICcuLi9zZXJ2aWNlcy9maWxlLXVwbG9hZC1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgTWF0Rm9ybUZpZWxkTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZm9ybS1maWVsZCc7XHJcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xyXG5cclxuQERpcmVjdGl2ZSgpXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlVmlldyB7XHJcbiAgICBASW5wdXQoKSByb290RGF0YTogYW55O1xyXG5cclxuICAgIHN0ZXBJZDogc3RyaW5nO1xyXG4gICAgZmllbGREYXRhOiBhbnk7XHJcblxyXG4gICAgaGFzSW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgIGZpZWxkRGF0YSQ7XHJcblxyXG4gICAgaGFzVG9vbHRpcCA9IGZhbHNlO1xyXG4gICAgdGFiSW5kZXhWYWx1ZSA9IDA7IC8vIEJ5IGRlZmF1bHQgMCwgbWVhbnMgdGFiYmluZyBpbiBhIHNlcXVlbnRpYWwgb3JkZXIuXHJcbiAgICBpc0VkaXRhYmxlID0gZmFsc2U7XHJcbiAgICBpc1Zpc2libGUgPSBmYWxzZTtcclxuICAgIGlzTWFuZGF0b3J5ID0gZmFsc2U7XHJcbiAgICBpc0N1c3RvbUNsYXNzID0gdHJ1ZTtcclxuICAgIGlzU2FmYXJpQ2xhc3MgPSBmYWxzZTtcclxuICAgIGhhc0NvbW1lbnRzID0gZmFsc2U7XHJcbiAgICBoYXNBdHRhY2htZW50cyA9IGZhbHNlO1xyXG4gICAgZmllbGRWYWx1ZTogYW55ID0gJyc7XHJcbiAgICBhcGlWYWx1ZTogYW55ID0gJyc7XHJcbiAgICBhZGRpdGlvbmFsUGFyYW1ldGVyID0ge307XHJcbiAgICBldmVudF9oYW5kbGVyOiBhbnk7XHJcbiAgICBpc09uU2VsZWN0ID0gZmFsc2U7XHJcbiAgICBzZWxlY3RlZERhdGFPYmo6IGFueSA9IHt9O1xyXG4gICAgZGVwZW5kZW50T2JqOiBhbnkgPSB7fTtcclxuICAgIG1hbmFnZVN0YXRlID0gZmFsc2U7XHJcbiAgICBmcm9tRmllbGQgPSBudWxsO1xyXG5cclxuICAgIC8vIG1lc3NhZ2UgZGVjbGFyYXRpb25zXHJcbiAgICBtZXNzYWdlcyA9IFtdO1xyXG4gICAgbW9kYWxNZXNzYWdlcyA9IFtdO1xyXG4gICAgc25hY2tCYXJNZXNzYWdlcyA9IFtdO1xyXG4gICAgbXVsdGlwbGVFcnJvck1lc3NhZ2UgPSBmYWxzZTtcclxuICAgIGVycm9yTWVzc2FnZURhdGE6IGFueSA9IHsgbWVzc2FnZV9jb2RlOiAnJywgbWVzc2FnZV90ZXh0OiAnJywgdHlwZTogJycsIGNvbG9yOiAnJyB9O1xyXG4gICAgc2hvd0Vycm9yT25OZXh0ID0gZmFsc2U7XHJcbiAgICBzaG93Q29tcGFyaXNvbkVycm9yID0ge307XHJcbiAgICBjb21wYXJpc29uRXJyb3JNZXNzYWdlRGF0YTogYW55ID0geyBtZXNzYWdlX2NvZGU6ICcnLCBtZXNzYWdlX3RleHQ6ICcnLCB0eXBlOiAnJywgY29sb3I6ICcnIH07XHJcbiAgICBjaGFyYWN0ZXJDb3VudCA9IHtcclxuICAgICAgICBkaXNwbGF5OiBmYWxzZSxcclxuICAgICAgICB0eXBlOiAnJ1xyXG4gICAgfTtcclxuICAgIGNoYXJhY3RlckNvdW50TWVzc2FnZURhdGE6IGFueSA9IHtcclxuICAgICAgICBsZWZ0OiB7IG1lc3NhZ2VfY29kZTogJycsIG1lc3NhZ2VfdGV4dDogJycsIHR5cGU6ICcnLCBjb2xvcjogJycgfSxcclxuICAgICAgICByaWdodDogeyBtZXNzYWdlX2NvZGU6ICcnLCBtZXNzYWdlX3RleHQ6ICcnLCB0eXBlOiAnJywgY29sb3I6ICcnIH0sXHJcbiAgICB9O1xyXG4gICAgLy8gVE9ETyBOZXh0IEJ1dHRvbiBlcnJvciBtZXNzYWdlIG5lZWRzIHRvIGJlIGRvbmVcclxuXHJcbiAgICAvLyBBcHBsaWNhdGlvbiBEYXRhIERlY2xhcmF0aW9uc1xyXG4gICAgYXBwRGF0YVF1ZXJ5OiBBcHBEYXRhUXVlcnk7XHJcbiAgICBhcHBEYXRhOiBBcHBEYXRhID0ge1xyXG4gICAgICAgIGlkOiAnJyxcclxuICAgICAgICBzdGVwSWQ6ICcnLFxyXG4gICAgICAgIGFwaUtleTogJycsXHJcbiAgICAgICAgZmllbGRMYWJlbDogJycsXHJcbiAgICAgICAgbGlua2VkQmxvY2tJZDogJycsXHJcbiAgICAgICAgaXNSZXBlYXRlZEZpZWxkOiBmYWxzZSxcclxuICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogJycsXHJcbiAgICAgICAgcmVxdWVzdEFwaUtleTogW10sXHJcbiAgICAgICAgcmVzcG9uc2VBcGlLZXk6IFtdLFxyXG4gICAgICAgIGRhdGFGb3JtYXRTZXBhcmF0b3I6ICcnLFxyXG4gICAgICAgIG1hbmRhdG9yeTogZmFsc2UsXHJcbiAgICAgICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgICAgIHZpc2libGU6IGZhbHNlLFxyXG4gICAgICAgIHZhbHVlOiAnJyxcclxuICAgICAgICBpc1ZhbGlkOiB0cnVlXHJcbiAgICB9O1xyXG4gICAgdmFsaWQgPSB0cnVlO1xyXG4gICAgcmVwZXRhYmxlQmxvY2tNb2RlbDogUmVwZXRhYmxlQmxvY2tGaWVsZE1vZGVsID0ge1xyXG4gICAgICAgIGZpZWxkSWQ6ICcnLFxyXG4gICAgICAgIGlzTWFuZGF0b3J5OiBmYWxzZVxyXG4gICAgfTtcclxuXHJcbiAgICBjaGFuZ2VEZXRlY3RvclJlZjogQ2hhbmdlRGV0ZWN0b3JSZWY7XHJcbiAgICBwcmVzZXREYXRhOiBhbnk7XHJcbiAgICByZXBlYXRhYmxlRGF0YVByZXNlbnQgPSBmYWxzZTtcclxuICAgIHZhcmlhYmxlT2JqZWN0ID0ge307IC8vIHZhcmlhYmxlIG9iamVjdFxyXG4gICAgY29uZGl0aW9uT2JqID0ge307IC8vIG9iamVjdCB0aGF0IGRlZmluZXMgdG8gb3ZlcnJpZGUgY29uZGl0aW9uc1xyXG5cclxuICAgIC8vIFV0aWwgZGVjbGFyYXRpb25zXHJcbiAgICBjb25kaXRpb25hbFZhbGlkYXRvcjogQ29uZGl0aW9uYWxWYWxpZGF0b3I7XHJcbiAgICBzZXNzaW9uS2V5VXRpbDogU2Vzc2lvbktleVV0aWw7XHJcbiAgICB3ZmVDb25kaXRpb25hbEV4ZWN1dGVyOiBXRkVDb25kaXRpb25hbEV4ZWN1dGVyO1xyXG4gICAgd2ZlRXZlbnRMaXN0SGFuZGxlcjogV0ZFRXZlbnRMaXN0SGFuZGxlcjtcclxuICAgIGFwaUtleVV0aWw6IEFQSUtleVV0aWw7XHJcbiAgICBjb21tb25VdGlsOiBDb21tb25VdGlsO1xyXG4gICAgY29uZGl0aW9uYWxVdGlsOiBDb25kaXRpb25hbFV0aWw7XHJcbiAgICBzYXZlRmllbGRWYWx1ZVV0aWw6IFNhdmVGaWVsZFZhbHVlVXRpbDtcclxuICAgIGZsYXR0ZW5VbmZsYXR0ZW5VdGlsOiBGbGF0VW5mbGF0O1xyXG4gICAgcmVwZWF0YWJsZUJsb2NrRGF0YVV0aWw6IFJlcGVhdGFibGVCbG9ja0RhdGE7XHJcbiAgICBzZXRBcGlDYWxsQmFja0RhdGFVdGlsOiBTZXRBUElDYWxsYmFja0RhdGE7XHJcbiAgICBzZXREeW5hbWljTGFiZWxVdGlsOiBEeW5hbWljTGFiZWxVdGlsO1xyXG4gICAgZXh0ZXJuYWxSZXF1ZXN0UmVzcG9uc2VVdGlsOiBFeHRlcm5hbFJlcXVlc3RSZXNwb25zZVV0aWw7XHJcblxyXG4gICAgYXBpQ29uZmlnUGF0aCA9ICdhc3NldHMvanNvbnMvYXBpX2NvbmZpZy5qc29uJztcclxuICAgIGJpbmRLZXlMaXN0OiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgY2hlY2tFbXB0eTogRW1wdHlVdGlsO1xyXG4gICAgY3VzdG9tRXJyb3JzVmFsaWRhdGlvbjogQ3VzdG9tRXJyb3JzVmFsaWRhdGlvbjtcclxuICAgIGlzX2Jvb3RzdHJhcDogYm9vbGVhbjtcclxuICAgIGlzX21hdGVyaWFsOiBib29sZWFuO1xyXG4gICAgZmllbGRTdHlsZTogYW55O1xyXG4gICAgaXNMaXN0VmlldzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgaXNUYWJsZVZpZXc6IGJvb2xlYW4gPSBmYWxzZTs7XHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwdWJsaWMgdXNlckRhdGFIYW5kbGVyU2VydmljZTogVXNlckRhdGFIYW5kbGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgc2hhcmVkRXZlbnRzU2VydmljZTogU2hhcmVkRXZlbnRzU2VydmljZVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGludGVybmFsQ0VFRW1pdHRlcjogQ0VFSW50ZXJuYWxFbWl0dGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgYXBwRGF0YVNlcnZpY2U6IEFwcERhdGFTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcGlEYXRhU2VydmljZTogQXBpRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIHdmZVN0ZXBMb2FkZXJTZXJ2aWNlOiBXZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2csXHJcbiAgICAgICAgcHVibGljIHNuYWNrQmFyOiBNYXRTbmFja0JhcixcclxuICAgICAgICBwdWJsaWMgaHR0cDogSHR0cENsaWVudCxcclxuICAgICAgICBwdWJsaWMgX2NlZUFwaVNlcnZpY2U/OiBDZWVBcGlTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyByb3V0ZXI/OiBSb3V0ZXIsXHJcbiAgICAgICAgcHVibGljIGZpbGVVcGxvYWRTZXJ2aWNlPzogRmlsZVVwbG9hZFNlcnZpY2VcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uYWxWYWxpZGF0b3IgPSBuZXcgQ29uZGl0aW9uYWxWYWxpZGF0b3IoKTtcclxuICAgICAgICB0aGlzLnNlc3Npb25LZXlVdGlsID0gbmV3IFNlc3Npb25LZXlVdGlsKCk7XHJcbiAgICAgICAgdGhpcy53ZmVDb25kaXRpb25hbEV4ZWN1dGVyID0gbmV3IFdGRUNvbmRpdGlvbmFsRXhlY3V0ZXIoYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLmFwaUtleVV0aWwgPSBuZXcgQVBJS2V5VXRpbCgpO1xyXG4gICAgICAgIHRoaXMuY29tbW9uVXRpbCA9IG5ldyBDb21tb25VdGlsKCk7XHJcbiAgICAgICAgdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbCA9IG5ldyBSZXBlYXRhYmxlQmxvY2tEYXRhKCk7XHJcbiAgICAgICAgdGhpcy5jb25kaXRpb25hbFV0aWwgPSBuZXcgQ29uZGl0aW9uYWxVdGlsKFxyXG4gICAgICAgICAgICB0aGlzLnNpbmdsZUNvbmRpdGlvbixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIgPSBuZXcgV0ZFRXZlbnRMaXN0SGFuZGxlcihcclxuICAgICAgICAgICAgX2NlZUFwaVNlcnZpY2UsXHJcbiAgICAgICAgICAgIHJvdXRlcixcclxuICAgICAgICAgICAgc2hhcmVkRXZlbnRzU2VydmljZSxcclxuICAgICAgICAgICAgaW50ZXJuYWxDRUVFbWl0dGVyLFxyXG4gICAgICAgICAgICB3ZmVTdGVwTG9hZGVyU2VydmljZSxcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgICAgIGFwaURhdGFTZXJ2aWNlLFxyXG4gICAgICAgICAgICBkaWFsb2csXHJcbiAgICAgICAgICAgIHNuYWNrQmFyLFxyXG4gICAgICAgICAgICBodHRwLFxyXG4gICAgICAgICAgICBmaWxlVXBsb2FkU2VydmljZVxyXG4gICAgICAgICk7XHJcbiAgICAgICAgdGhpcy5zYXZlRmllbGRWYWx1ZVV0aWwgPSBuZXcgU2F2ZUZpZWxkVmFsdWVVdGlsKCk7XHJcbiAgICAgICAgdGhpcy5mbGF0dGVuVW5mbGF0dGVuVXRpbCA9IG5ldyBGbGF0VW5mbGF0KGFwcERhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwgPSBuZXcgU2V0QVBJQ2FsbGJhY2tEYXRhKGFwaURhdGFTZXJ2aWNlKTtcclxuICAgICAgICB0aGlzLnNldER5bmFtaWNMYWJlbFV0aWwgPSBuZXcgRHluYW1pY0xhYmVsVXRpbChhcGlEYXRhU2VydmljZSwgYXBwRGF0YVNlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuZXh0ZXJuYWxSZXF1ZXN0UmVzcG9uc2VVdGlsID0gbmV3IEV4dGVybmFsUmVxdWVzdFJlc3BvbnNlVXRpbChodHRwLCBhcHBEYXRhU2VydmljZSwgYXBpRGF0YVNlcnZpY2UsIHNoYXJlZEV2ZW50c1NlcnZpY2UpO1xyXG4gICAgICAgIHRoaXMuY2hlY2tFbXB0eSA9IG5ldyBFbXB0eVV0aWwoKTtcclxuICAgICAgICB0aGlzLmN1c3RvbUVycm9yc1ZhbGlkYXRpb24gPSBuZXcgQ3VzdG9tRXJyb3JzVmFsaWRhdGlvbihcclxuICAgICAgICAgICAgdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5tZXNzYWdlc0RhdGFNYXAsIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UuY3VzdG9tRXJyb3JNZXNzYWdlcyk7XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19ib290c3RyYXAnKSA9PT0gJ3RydWUnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNfYm9vdHN0cmFwID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpc19tYXRlcmlhbCcpID09PSAndHJ1ZScpIHtcclxuICAgICAgICAgICAgdGhpcy5pc19tYXRlcmlhbCA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gICBcclxuICAgIFxyXG4gICAgLy8gdXBkYXRlIHN0YXIgd2l0aCBwb3NpdGlvbiBpbiBkaXNwbGF5IGNvbmRpdGlvbiBvZiBmaWVsZERhdGFcclxuICAgIHVwZGF0ZVN0YXJXaXRoUG9zaXRpb25JbkZpZWxkRGF0YShwb3NpdGlvbjogbnVtYmVyKSB7ICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZGlzcGxheV9jb25kaXRpb24gJiYgdGhpcy5maWVsZERhdGEuZGlzcGxheV9jb25kaXRpb24uY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmRpc3BsYXlfY29uZGl0aW9uLmNvbmRpdGlvbi5mb3JFYWNoKChjb25kOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGxldCBvcCA9IGNvbmQuY29tcGFyaXNpb25fb3BlcmF0b3IudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcCA9PSdlJyB8fCBvcCA9PSduZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZC5hcGlfa2V5ICYmIGNvbmQuYXBpX2tleS5pbmNsdWRlcygnWypdJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uZC5hcGlfa2V5ID0gY29uZC5hcGlfa2V5LnJlcGxhY2UoJ1sqXScsIGBbJHtwb3NpdGlvbn1dYCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXQoc3RlcElkOiBzdHJpbmcsIGZpZWxkRGF0YTogYW55LCBtYW5hZ2VTdGF0ZTogYm9vbGVhbiA9IGZhbHNlLCBkYXRhPzogYW55LCByZWY/OiBDaGFuZ2VEZXRlY3RvclJlZik6IHZvaWQge1xyXG4gICAgICAgIGlmICghZmllbGREYXRhLmZpZWxkX3N0eWxlKSB7XHJcbiAgICAgICAgICAgIGZpZWxkRGF0YS5maWVsZF9zdHlsZSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzYWZhcmkgZml4IC0gb25seSBhcHBseSBpZiBydW5uaW5nIGluIFNhZmFyaSBicm93c2VyXHJcbiAgICAgICAgaWYgKHRoaXMuaXNTYWZhcmkpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1NhZmFyaUNsYXNzID0gZmllbGREYXRhLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lPy5pbmNsdWRlcygnc2FmYXJpLXZpc2liaWxpdHktd3JhcHBlcicpO1xyXG4gICAgICAgICAgICBpZih0aGlzLmlzU2FmYXJpQ2xhc3MpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lID0gZmllbGREYXRhLmZpZWxkX3N0eWxlLmJvb3RzdHJhcF9jbGFzc19uYW1lLnJlcGxhY2UoJ3NhZmFyaS12aXNpYmlsaXR5LXdyYXBwZXInLCAnJykudHJpbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYgPSByZWY7XHJcbiAgICAgICAgdGhpcy5wcmVzZXREYXRhID0gZGF0YTtcclxuICAgICAgICB0aGlzLnN0ZXBJZCA9IHN0ZXBJZDtcclxuICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZmllbGREYXRhKSk7XHJcblxyXG4gICAgICAgIC8vIHVwZGF0ZSBmaWVsZCBkYXRhIHdoZW4gdGhlIGNvbXBvbmVudCBpcyBwYXJ0IG9mIHJlcGVhdGFibGUgYmxvY2tcclxuICAgICAgICBpZihkYXRhICYmIGRhdGEubGlua2VkQmxvY2tJZCAmJiBkYXRhLnBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVTdGFyV2l0aFBvc2l0aW9uSW5GaWVsZERhdGEoZGF0YS5wb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLndmZUV2ZW50TGlzdEhhbmRsZXIuZmllbGREYXRhID0gZmllbGREYXRhO1xyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5pZCA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICB0aGlzLmFwcERhdGEuZmllbGRMYWJlbCA9IHRoaXMuc3RvcmVMYWJlbHMgPyB0aGlzLmZpZWxkRGF0YS5maWVsZF9sYWJlbCA6ICcnO1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhLmh0bWxfaWQgPSB0aGlzLnByZXNldERhdGEgP1xyXG4gICAgICAgICAgICAodGhpcy5wcmVzZXREYXRhLmh0bWxfaWQgPyB0aGlzLnByZXNldERhdGEuaHRtbF9pZCA6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkgOiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQ7XHJcblxyXG4gICAgICAgIHRoaXMuYXBwRGF0YS5maWVsZExhYmVsID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3N0b3JlTGFiZWxzJykgPT09ICd0cnVlJyA/IHRoaXMuZmllbGREYXRhLmZpZWxkX2xhYmVsIDogJyc7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLnN0ZXBJZCA9IHN0ZXBJZDtcclxuICAgICAgICB0aGlzLmFwcERhdGEubGlua2VkQmxvY2tJZCA9IHRoaXMucHJlc2V0RGF0YSA/ICh0aGlzLnByZXNldERhdGEubGlua2VkQmxvY2tJZCA/IHRoaXMucHJlc2V0RGF0YS5saW5rZWRCbG9ja0lkIDogJycpIDogJyc7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhLnJlcGVhdGVkQmxvY2tGaWVsZElkID0gdGhpcy5wcmVzZXREYXRhID9cclxuICAgICAgICAgICAgKHRoaXMucHJlc2V0RGF0YS5yZXBlYXRlZEJsb2NrRmllbGRJZCA/IHRoaXMucHJlc2V0RGF0YS5yZXBlYXRlZEJsb2NrRmllbGRJZCA6ICcnKSA6ICcnO1xyXG4gICAgICAgIC8vIGJhY2t3YXJkIGNvbXBhdGliaWxpdHkgc3VwcG9ydFxyXG4gICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5hcGlLZXkgPSB0aGlzLmZpZWxkRGF0YS5hcGlfa2V5O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5LCB0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KVxyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGEucmVxdWVzdEFwaUtleSA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5maWVsZERhdGEucmVxdWVzdF9hcGlfa2V5KTtcclxuICAgICAgICAgICAgdGhpcy5hcHBEYXRhLnJlc3BvbnNlQXBpS2V5ID1cclxuICAgICAgICAgICAgICAgIHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXMoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXModGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLm1hbmFnZVN0YXRlID0gbWFuYWdlU3RhdGU7XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3RoaXMuYXBwRGF0YScsIHRoaXMuYXBwRGF0YSk7XHJcbiAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5wcmVzZXREYXRhKSA9PT0gJ29iamVjdCcgJiYgdGhpcy5wcmVzZXREYXRhICE9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXNldERhdGEudW5pcXVlX2lkKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGEuaWQgPSB0aGlzLnByZXNldERhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS5hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLmFwaUtleSA9IHRoaXMucHJlc2V0RGF0YS5hcGlfa2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NhbGxlZCBpbiBpbml0JywgdGhpcy5wcmVzZXREYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnByZXNldERhdGEucmVxdWVzdF9hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLnJlcXVlc3RBcGlLZXkgPSB0aGlzLnByZXNldERhdGEucmVxdWVzdF9hcGlfa2V5O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS5yZXNwb25zZV9hcGlfa2V5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLnJlc3BvbnNlQXBpS2V5ID0gdGhpcy5wcmVzZXREYXRhLnJlc3BvbnNlX2FwaV9rZXk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhLmV2ZW50X2xpc3QgJiYgdGhpcy5wcmVzZXREYXRhLmV2ZW50X2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmV2ZW50X2xpc3QgPSB0aGlzLnByZXNldERhdGEuZXZlbnRfbGlzdDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS5tYW5kYXRvcnkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5tYW5kYXRvcnkgPSB0aGlzLnByZXNldERhdGEubWFuZGF0b3J5O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXNldERhdGEuZWRpdGFibGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5lZGl0YWJsZSA9IHRoaXMucHJlc2V0RGF0YS5lZGl0YWJsZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGEudmlzaWJsZSA9IHRoaXMucHJlc2V0RGF0YS52aXNpYmxlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhLmZyb21GaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5mcm9tRmllbGQgPSB0aGlzLnByZXNldERhdGEuZnJvbUZpZWxkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEudG9vbHRpcCAmJiB0aGlzLmZpZWxkRGF0YS50b29sdGlwLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5oYXNUb29sdGlwID0gdHJ1ZTtcclxuICAgICAgICB9ICAgICBcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhICYmIHRoaXMucHJlc2V0RGF0YS5oYXNPd25Qcm9wZXJ0eSgnZnJvbUZpZWxkJykpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0xpc3RWaWV3ID0gdGhpcy5wcmVzZXREYXRhLmZyb21GaWVsZCA9PT0gJ0xpc3QnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmlzVGFibGVWaWV3ID0gdGhpcy5wcmVzZXREYXRhLmZyb21GaWVsZCA9PT0gJ1RhYmxlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB9ICAgXHJcbiAgICAgICAgLy8gQ2hlY2sgaWYgZGF0YSBzdGF0ZSBwcmVzZW50XHJcbiAgICAgICAgaWYgKG1hbmFnZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVW5pcXVlSWQgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmVzZXREYXRhID9cclxuICAgICAgICAgICAgICAgICAgICAodGhpcy5wcmVzZXREYXRhLnVuaXF1ZV9pZCA/IHRoaXMucHJlc2V0RGF0YS51bmlxdWVfaWQgOiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpIDogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hcHBEYXRhLmxpbmtlZEJsb2NrSWQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0YWJsZURhdGFQcmVzZW50ID0gdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC5yZXR1cm5JZkRhdGEodGhpcy5hcHBEYXRhLmxpbmtlZEJsb2NrSWQsIGZpZWxkVW5pcXVlSWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZmllbGREYXRhJCA9IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0QXBwRGF0YUJ5RmllbGRJZChmaWVsZFVuaXF1ZUlkKTtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEkXHJcbiAgICAgICAgICAgICAgICAucGlwZSh0YWtlKDEpKVxyXG4gICAgICAgICAgICAgICAgLnN1YnNjcmliZShcclxuICAgICAgICAgICAgICAgICAgICB2YWwgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaGFzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsLmlkID09PSBmaWVsZFVuaXF1ZUlkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0YXRlIGZvdW5kXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZExhc3RTYXZlZFN0YXRlKHZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDcmVhdGUgbmV3IHN0YXRlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVOZXdGaWVsZFN0YXRlKG1hbmFnZVN0YXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTmV3RmllbGRTdGF0ZShtYW5hZ2VTdGF0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubXVsdGlwbGVFcnJvck1lc3NhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbXVsdGlwbGVFcnJvck1lc3NhZ2UnKSA9PT0gJ3RydWUnID8gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIGlmICh0aGlzLm11bHRpcGxlRXJyb3JNZXNzYWdlICYmIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMpIHtcclxuICAgICAgICAgICAgLy8gVE9ETzpSZWNoZWNrIGNvZGUgcmV2ZXJ0IGlmIGNvZGUgYnJlYWtzIGFueSBvbGQgaW1wbGVtZW50YXRpb25cclxuICAgICAgICAgICAgLy8gY29uc3QgbWVzc2FnZXMgPSB0aGlzLnJldHVybk1lc3NhZ2VzKHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMpO1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAobWVzc2FnZS50eXBlICE9PSAnQ29uZGl0aW9uYWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogbWVzc2FnZS50eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5VHlwZTogbWVzc2FnZS5kaXNwbGF5X3R5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvZGU6IG1lc3NhZ2UubWVzc2FnZV9jb2RlXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UuZGlzcGxheVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnUE9QVVAnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zbmFja0Jhck1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnTU9EQUwnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tb2RhbE1lc3NhZ2VzLnB1c2gobWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnSU5MSU5FJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVzc2FnZXMucHVzaChtZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgY29uc3QgbWVzc2FnZURhdGEgPSB0aGlzLnJldHVybk1lc3NhZ2VEYXRhKHRoaXMuZmllbGREYXRhLm1lc3NhZ2VfY29kZSk7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvck1lc3NhZ2VEYXRhID0gbWVzc2FnZURhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5tZXNzYWdlcyk7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTGlzdFZpZXcgJiYgIXRoaXMuaXNUYWJsZVZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsnc2hvd01hbmRhdG9yeUVycm9yTXNnXycgKyB0aGlzLmFwcERhdGEuaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLnNob3dNYW5kYXRvcnlFcnJvck1zZy5zdWJzY3JpYmUoXHJcbiAgICAgICAgICAgICAgICAocmVzOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KHJlcy5maWVsZHMpICYmIHJlcy50eXBlID09PSAnZXZlbnQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzLmZpZWxkcy5pbmNsdWRlcyh0aGlzLmFwcERhdGEuaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNYW5kYXRvcnlFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRNYW5kYXRvcnlFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydUZXh0ZmllbGQgVHlwZSddICE9PSAnU2VhcmNoJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydCaW5kS2V5J10pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGtleUxpc3QgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0JpbmRLZXknXS5zcGxpdCgnfCcpLm1hcChzdHIgPT4gc3RyLnRyaW0oKSk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleUNvZGUgb2Yga2V5TGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucm9vdERhdGFbJ0JpbmRLZXknXVtrZXlDb2RlXSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRLZXlEb3duLmVtaXQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNsaWNrJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZSkge1xyXG4gICAgICAgICAgICB0aGlzLmZpZWxkU3R5bGUgPSB7XHJcbiAgICAgICAgICAgICAgICAnZm9udC1mYW1pbHknOiB0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X25hbWUsXHJcbiAgICAgICAgICAgICAgICAnZm9udC1zaXplJzogdGhpcy5maWVsZERhdGEuZmllbGRfc3R5bGUuZm9udF9zaXplLFxyXG4gICAgICAgICAgICAgICAgJ2ZvbnQtc3R5bGUnOiB0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5mb250X3N0eWxlLFxyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmZvbnRfY29sb3IsXHJcbiAgICAgICAgICAgICAgICAnYm9yZGVyLWNvbG9yJzogdGhpcy5maWVsZERhdGEuZmllbGRfc3R5bGUuYm9yZGVyX2NvbG9yLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiB0aGlzLmZpZWxkRGF0YS5maWVsZF9zdHlsZS5maWVsZF9oZWlnaHQsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogdGhpcy5maWVsZERhdGEuZmllbGRfc3R5bGUuZmllbGRfd2lkdGgsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6IHRoaXMuZmllbGREYXRhLmZpZWxkX3N0eWxlLmJhY2tncm91bmRfY29sb3JcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgYnJvd3NlciBpcyBTYWZhcmlcclxuICAgIGdldCBpc1NhZmFyaSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgXHJcbiAgICAgICAgICAgICAgIC9TYWZhcmkvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgJiYgXHJcbiAgICAgICAgICAgICAgIC9BcHBsZSBDb21wdXRlci8udGVzdChuYXZpZ2F0b3IudmVuZG9yKSAmJiBcclxuICAgICAgICAgICAgICAgIS9DaHJvbWV8Q2hyb21pdW0vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyBjc3MgY2xhc3NlcyBmb3IgZmllbGQgd3JhcHBlclxyXG4gICAgZ2V0IGNzc0NsYXNzZXMoKTogc3RyaW5nIHtcclxuICAgICAgICBpZih0aGlzLmlzU2FmYXJpQ2xhc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdmaWVsZC13cmFwcGVyIHNhZmFyaS12aXNpYmlsaXR5LXdyYXBwZXIgJyArICh0aGlzLmlzVmlzaWJsZT8nc2FmYXJpLXZpc2libGUnOidzYWZhcmktaGlkZGVuJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiAnZmllbGQtd3JhcHBlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRNYW5kYXRvcnlFcnJvcigpIHtcclxuICAgICAgICBpZiAodGhpcy5pc01hbmRhdG9yeSkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvck9uTmV4dCA9IHRoaXMuY2hlY2tFbXB0eS5pc0VtcHR5KHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNob3dFcnJvck9uTmV4dCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlTmV3RmllbGRTdGF0ZSh3aXRoU3RhdGU6IGJvb2xlYW4pIHtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhLm1hbmRhdG9yeSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01hbmRhdG9yeSA9IHRoaXMucHJlc2V0RGF0YS5tYW5kYXRvcnk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfbWFuZGF0b3J5ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc01hbmRhdG9yeSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS5lZGl0YWJsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc0VkaXRhYmxlID0gdGhpcy5wcmVzZXREYXRhLmVkaXRhYmxlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2VkaXRhYmxlID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pc0VkaXRhYmxlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS52aXNpYmxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRoaXMucHJlc2V0RGF0YS52aXNpYmxlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2Rpc3BsYXkgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfZWRpdGFibGUgPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXNFZGl0YWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX21hbmRhdG9yeSA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pc01hbmRhdG9yeSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5pc19kaXNwbGF5ID09PSAxKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuY29uZGl0aW9uT2JqWydpc0VkaXRhYmxlJ10gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbk9ialsnaXNWaXNpYmxlJ10gPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbk9ialsnaXNNYW5kYXRvcnknXSA9IGZhbHNlO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGRhdGUgLSAyNy8wNS8yMDIwXHJcbiAgICAgICAgICogY29kZSBjaGFuZ2VkIHRvIHN1cHBvcnQgRXh0ZXJuYWwgQVBJIEhhbmRsaW5nIEVTRi0xNDY0NFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKFxyXG4gICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUodGhpcy5maWVsZERhdGEuYXBpX2tleSkpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pc1NpbmdsZUFwaUtleSA/XHJcbiAgICAgICAgICAgIHRoaXMuaGFzaEFwaUtleSA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmFwaV9rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlckRhdGEgPyBoYW5kbGVyRGF0YS52YWx1ZSA6IHt9KSA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaUtleVZhbHVlQnlBcGlLZXkodGhpcy5maWVsZERhdGEuYXBpX2tleSkgOlxyXG4gICAgICAgICAgICB0aGlzLnNldEZpZWxkVmFsdWUoKTtcclxuICAgICAgICBpZiAoISh0aGlzLnByZXNldERhdGEgPyB0aGlzLnByZXNldERhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgOiB0aGlzLnByZXNldERhdGEpICYmIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuYXBwRGF0YS5pZCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF90eXBlID09ICdUZXh0ZmllbGQnIHx8IHRoaXMuZmllbGREYXRhLmZpZWxkX3R5cGUgPT0gJ1RleHRhcmVhJyB8fCB0aGlzLmZpZWxkRGF0YS5maWVsZF90eXBlID09ICdQaG9uZU51bWJlcicpIHtcclxuICAgICAgICAgICAgICAgIGxldCB2YWxpZGF0aW9uUmVnZXggPSAodGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCAmJiB0eXBlb2YgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleC53ZWIgPT0gJ29iamVjdCcgJiYgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleC5XZWIgIT09ICcnKSA/IHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXgud2ViXHJcbiAgICAgICAgICAgICAgICAgICAgOiAodHlwZW9mIHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXggPT0gJ3N0cmluZycgJiYgdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCAhPT0gJycpID8gdGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCA6ICcnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlICYmIHZhbGlkYXRpb25SZWdleCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdHQgPSBuZXcgUmVnRXhwKHZhbGlkYXRpb25SZWdleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IHBhdHQudGVzdCh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLmlzVmFsaWQgPSB0aGlzLnZhbGlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfdHlwZSA9PT0gJ0NhbGVuZGFyJyB8fCB0aGlzLmZpZWxkRGF0YS5maWVsZF90eXBlID09PSAnVGltZVNsb3RzJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlWYWx1ZSA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJlc2V0RGF0YSkge1xyXG4gICAgICAgICAgICAvLyBIYW5kbGUgcmVwZWF0YWJsZSBibG9jayBkYXRhXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW10ZXIucGFyYW1ldGVyX3R5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGVmYXVsdF92YWx1ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNldERhdGEuZGVmYXVsdF92YWx1ZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0Rpc3BsYXlDaGFyYWN0ZXJDb3VudCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXNldERhdGEuRGlzcGxheUNoYXJhY3RlckNvdW50ID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnVGltZSBGb3JtYXQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLmRhdGFGb3JtYXRTZXBhcmF0b3IgPSAnOic7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRGF0ZSBGb3JtYXQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLmRhdGFGb3JtYXRTZXBhcmF0b3IgPSAnLyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRGF0YSBGb3JtYXQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLmlzVmFsaWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHRoaXMucHJlc2V0RGF0YSkgPT09ICdvYmplY3QnICYmIHRoaXMucHJlc2V0RGF0YSAhPT0gbnVsbCAmJiB0aGlzLnByZXNldERhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgIGlmICghQXJyYXkuaXNBcnJheSh0aGlzLnByZXNldERhdGEudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0FERCcsIHRoaXMuYXBwRGF0YS5pZCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLnByZXNldERhdGEpKSwgdGhpcy5wcmVzZXREYXRhLmlzQXBpUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMucHJlc2V0RGF0YS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhLmlzQXBpUmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBwRGF0YSwgeyB2YWx1ZTogdGhpcy5maWVsZFZhbHVlIH0pKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLnByZXNldERhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzXHJcbiAgICAgICAgICAgICAgICAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWZhdWx0X3ZhbHVlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9DaGVjayBpZiBpdCBoYXMgbGFuZ3VhZ2UgY2hhbmdlIGV2ZW50XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih0aGlzLmZpZWxkRGF0YSAmJiB0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0ICYmIHRoaXMuZmllbGREYXRhLmV2ZW50X2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgZXZlbnQgb2YgdGhpcy5maWVsZERhdGEuZXZlbnRfbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnQgJiYgZXZlbnQuZXZlbnRfcGFyYW1zIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJiYgZXZlbnQuZXZlbnRfcGFyYW1zLmZpbmQoZXAgPT4gZXAuZXZlbnRfY29uZmlnLmRpc3BsYXlfc3RlcCA9PT0gXCJMYW5ndWFnZVRvZ2dsZVwiKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYW5nJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGFuZycpLnJlcGxhY2UoJy8nLCAnJykgOiB0aGlzLmZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL0ZvciBtdWx0aXBsZSBkZWZhdWx0IHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLmZpZWxkVmFsdWUpID09PSAnc3RyaW5nJyAmJiB0aGlzLmZpZWxkVmFsdWUuaW5jbHVkZXMoJ3x8JykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmZpZWxkVmFsdWUuc3BsaXQoJ3x8JykubWFwKHN0ciA9PiBzdHIudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUaW1lIEZvcm1hdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGEuZGF0YUZvcm1hdFNlcGFyYXRvciA9ICc6JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdEYXRlIEZvcm1hdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGEuZGF0YUZvcm1hdFNlcGFyYXRvciA9ICcvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW3BhcmFtdGVyLnBhcmFtZXRlcl90eXBlXSA9IHBhcmFtdGVyLnZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldCBjaGFyYWN0ZXIgY291bnQgbWVzc2FnZVxyXG4gICAgICAgIHRoaXMuc2V0Q2hhcmFjdGVyQ291bnRNZXNzYWdlKCk7XHJcbiAgICAgICAgdGhpcy5nZXRDb25jYXRlbmF0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmICh3aXRoU3RhdGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmZpZWxkX3R5cGUgPT09ICdBdHRhY2htZW50cycgJiYgdGhpcy5maWVsZFZhbHVlID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBbXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBzZXQgdGhlIHJlcGVhdGFibGUgc3RhdGUgaWYgd2l0aCBzdGF0ZVxyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhLnVuaXF1ZV9pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVwZWF0YWJsZUJsb2NrRGF0YVV0aWwudXBkYXRlUmVwZWF0YWJsZUxvY2FsU3RvcmFnZURhdGEoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YS5saW5rZWRCbG9ja0lkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLnJlcGV0YWJsZUJsb2NrTW9kZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi57IGZpZWxkSWQ6IFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLCBpc01hbmRhdG9yeTogdGhpcy5pc01hbmRhdG9yeSB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuYWRkQXBwRGF0YShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFwcERhdGEsXHJcbiAgICAgICAgICAgICAgICB7IHZpc2libGU6IHRoaXMuaXNWaXNpYmxlLCBlZGl0YWJsZTogdGhpcy5pc0VkaXRhYmxlLCBtYW5kYXRvcnk6IHRoaXMuaXNNYW5kYXRvcnksIHZhbHVlOiB0aGlzLmZpZWxkVmFsdWUgfSkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnVuc3Vic2NyaWJlQW5kSW5pdCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgbG9hZExhc3RTYXZlZFN0YXRlKHZhbDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5hcHBEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdmFsKTtcclxuICAgICAgICB0aGlzLmlzRWRpdGFibGUgPSB0aGlzLmFwcERhdGEuZWRpdGFibGU7XHJcbiAgICAgICAgdGhpcy5pc01hbmRhdG9yeSA9IHRoaXMuYXBwRGF0YS5tYW5kYXRvcnk7XHJcbiAgICAgICAgdGhpcy5pc1Zpc2libGUgPSB0aGlzLmFwcERhdGEudmlzaWJsZTtcclxuICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLmFwcERhdGEudmFsdWU7XHJcbiAgICAgICAgdGhpcy52YWxpZCA9IHRoaXMuYXBwRGF0YS5pc1ZhbGlkO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIGRhdGUgLSAyNy8wNS8yMDIwXHJcbiAgICAgICAgICogY29kZSBjaGFuZ2VkIHRvIHN1cHBvcnQgRXh0ZXJuYWwgQVBJIEhhbmRsaW5nIEVTRi0xNDY0NFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGNvbnN0IGhhbmRsZXJEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKFxyXG4gICAgICAgICAgICB0aGlzLmNvbW1vblV0aWwuZ2V0SGFuZGxlck5hbWUodGhpcy5maWVsZERhdGEuYXBpX2tleSkpO1xyXG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5pc1NpbmdsZUFwaUtleSA/XHJcbiAgICAgICAgICAgIHRoaXMuaGFzaEFwaUtleSA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmllbGREYXRhLmFwaV9rZXksXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlckRhdGEgPyBoYW5kbGVyRGF0YS52YWx1ZSA6IHt9KSA6XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaUtleVZhbHVlQnlBcGlLZXkodGhpcy5maWVsZERhdGEuYXBpX2tleSkgOlxyXG4gICAgICAgICAgICB0aGlzLnNldEZpZWxkVmFsdWUoKTtcclxuICAgICAgICBpZiAoISh0aGlzLnByZXNldERhdGEgPyB0aGlzLnByZXNldERhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgOiB0aGlzLnByZXNldERhdGEpICYmIHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5maWVsZF90eXBlID09PSAnQ2FsZW5kYXInIHx8IHRoaXMuZmllbGREYXRhLmZpZWxkX3R5cGUgPT09ICdUaW1lU2xvdHMnKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaVZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodHlwZW9mICh0aGlzLnByZXNldERhdGEpID09PSAnb2JqZWN0JyAmJiB0aGlzLnByZXNldERhdGEgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChjb25zdCBwYXJhbXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdkZWZhdWx0X3ZhbHVlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc2V0RGF0YS5kZWZhdWx0X3ZhbHVlID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnRGlzcGxheUNoYXJhY3RlckNvdW50JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucHJlc2V0RGF0YS5EaXNwbGF5Q2hhcmFjdGVyQ291bnQgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdUaW1lIEZvcm1hdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGEuZGF0YUZvcm1hdFNlcGFyYXRvciA9ICc6JztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdEYXRlIEZvcm1hdCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcERhdGEuZGF0YUZvcm1hdFNlcGFyYXRvciA9ICcvJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBIYW5kbGUgcmVwZWF0YWJsZSBibG9jayBkYXRhXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXNldERhdGEuaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykpIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdVUERBVEUnLCB0aGlzLmFwcERhdGEuaWQsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkodGhpcy5wcmVzZXREYXRhKSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHRoaXMucHJlc2V0RGF0YS52YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSB0aGlzLnByZXNldERhdGEudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMucHJlc2V0RGF0YS5pc0FwaVJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFwcERhdGEsIHsgdmFsdWU6IHRoaXMuZmllbGRWYWx1ZSB9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWVsZFZhbHVlID0gdGhpcy5wcmVzZXREYXRhO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZV0gPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzICYmIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcGFyYW10ZXIgb2YgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2V0IGNoYXJhY3RlciBjb3VudCBtZXNzYWdlXHJcbiAgICAgICAgdGhpcy5zZXRDaGFyYWN0ZXJDb3VudE1lc3NhZ2UoKTtcclxuICAgICAgICB0aGlzLmdldENvbmNhdGVuYXRpb24oKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYgJiYgISh0aGlzLmNoYW5nZURldGVjdG9yUmVmIGFzIFZpZXdSZWYpLmRlc3Ryb3llZCkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yUmVmLmRldGVjdENoYW5nZXMoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy51bnN1YnNjcmliZUFuZEluaXQoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVuc3Vic2NyaWJlQW5kSW5pdCgpIHtcclxuICAgICAgICAvLyBGYXRjaGluZyBNYXhWYWx1ZSBhbmQgTWluVmFsdWUgZnJvbSByZXBlYXRlZCBmaWVsZCBvZiBzYW1lIHJvd1xyXG4gICAgICAgIGlmICh0aGlzLnByZXNldERhdGEpIHtcclxuICAgICAgICAgICAgY29uc3QgdGFyZ2V0UGFyYW1zID0gWydNYXhWYWx1ZScsICdNaW5WYWx1ZSddO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRQYXJhbSBvZiB0YXJnZXRQYXJhbXMpIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbdFBhcmFtXSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbdFBhcmFtXS5lbmRzV2l0aCgnJCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW3RQYXJhbV0gPSB0aGlzLnN0ZXBJZCArICckJyArIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclt0UGFyYW1dICsgdGhpcy5wcmVzZXREYXRhLnBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuaGFzSW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YSQgJiYgdGhpcy5maWVsZERhdGEkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEkLmZvckVhY2goKHMpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghcy5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBzLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICBpZiAoIXRoaXMuaXNMaXN0VmlldyAmJiAhdGhpcy5pc1RhYmxlVmlldykge1xyXG4gICAgICAgICAgICAvLyBUT0RPOiBTZXBhcmF0ZSBjb25kaXRpb25hbCBmb3IgYWxsIGVtaXR0ZXJzIGFuZCB0aGVuIHN1YnNjcmliZSBpZiByZXF1aXJlZFxyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0T25EYXRhU2V0T3JVcGRhdGVkXycgKyB0aGlzLmFwcERhdGEuaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzLmluZGV4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pbmRleCA9PT0gU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkuc3BsaXQoJyQnKVsyXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9uU2V0U2Vzc2lvbkRhdGEocmVzLmFwaUtleSwgcmVzLnZhbHVlKTsgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoISh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3Npbl9udW1iZXInXSA9PT0gJ3RydWUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25kaXRpb25hbEVycm9yTWVzc2FnZUNvbXBhcmVGaWVsZHMocmVzLmFwaUtleSwgdGhpcy5maWVsZERhdGEsIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblNldFNlc3Npb25EYXRhKHJlcy5hcGlLZXksIHJlcy52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRDb25jYXRlbmF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zYXZlRmllbGRWYWx1ZVV0aWwuc2F2ZUxpc3RvZkZpZWxkVmFsdWVzKHJlcy5hcGlLZXksIHJlcy52YWx1ZSwgdGhpcy5maWVsZERhdGEpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYoISh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ3Npbl9udW1iZXInXSA9PT0gJ3RydWUnKSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbmFsRXJyb3JNZXNzYWdlQ29tcGFyZUZpZWxkcyhyZXMuYXBpS2V5LCB0aGlzLmZpZWxkRGF0YSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wYXJpc29uRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0U2V0RmllbGRWYWx1ZU9uRXZlbnRfJyArIHRoaXMuYXBwRGF0YS5pZF0gPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRTZXRGaWVsZFZhbHVlT25FdmVudC5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IF9yZXMgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9yZXM/LnVuaXF1ZUlkcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKF9yZXMudW5pcXVlSWRzW2ldID09PSB0aGlzLmFwcERhdGEuaWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfcmVzLnVuaXF1ZUlkc1tpXSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNldCB2YWx1ZSBldmVudCBmaWx0ZXIgZmllbGQgZm9yIHJlcGVhdGVkIHRhYmxlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFwcERhdGEucmVwZWF0ZWRCbG9ja0ZpZWxkSWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkU3BsaXQgPSB0aGlzLmFwcERhdGEuaWQudG9TdHJpbmcoKS5zcGxpdCgnJCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlkU3BsaXQubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVwZWF0ZWRUYWJsZUluZGV4ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3JlcGVhdGVkVGFibGVJbmRleCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuc3RlcElkICE9IGlkU3BsaXRbMV0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KF9yZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47IC8vIG9wdGltaXplZCB0byBjYWxsIHNldEZpZWxkVmFsdWUgb25seSBvbmNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXBlYXRlZFRhYmxlSW5kZXggJiYgdGhpcy5hcHBEYXRhLnJlcGVhdGVkQmxvY2tGaWVsZElkID09PSByZXBlYXRlZFRhYmxlSW5kZXguc3BsaXQoJ3wnKVswXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVwZWF0ZWRUYWJsZUluZGV4LnNwbGl0KCd8JylbMV0gIT09IGlkU3BsaXRbMl0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZpZWxkVmFsdWVPblNldFZhbHVlc0V2ZW50KF9yZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMubWFuYWdlU3RhdGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ3N0YXRlSGlzdG9yeUVtaXR0ZXJfJyArIHRoaXMuYXBwRGF0YS5pZF0gPVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5zdGF0ZUhpc3RvcnlFbWl0dGVyLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVTdGF0ZUhpc3RvcnkocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZVN0YXRlSGlzdG9yeS5yZW1vdmUodXBkYXRlU3RhdGVIaXN0b3J5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0Rm9yRW1wdHlTZXNzaW9uXycgKyB0aGlzLmFwcERhdGEuaWRdID0gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRGb3JFbXB0eVNlc3Npb24uc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkVtcHR5U2Vzc2lvbihyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsnY3VzdG9tRXZlbnRUYXJnZXRTdWJzY3JpYmVyXycgKyB0aGlzLmFwcERhdGEuaWRdID1cclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5jdXN0b21FdmVudFRhcmdldFN1YnNjcmliZXIuc3Vic2NyaWJlKChyZXM6IGFueSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDdXN0b21GdW5jdGlvbihyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsnZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZV8nICsgdGhpcy5hcHBEYXRhLmlkXSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShyZXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25BUElDYWxsYmFjayhyZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub25BUElDYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrKHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5zZXRTZXNzaW9uRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnZhcmlhYmxlT2JqZWN0WydlbWl0RmllbGRTdGF0ZUNoYW5nZUV2ZW50RW1pdHRlcl8nICsgdGhpcy5hcHBEYXRhLmlkXSA9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEZpZWxkU3RhdGVDaGFuZ2VFdmVudEVtaXR0ZXIuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBpZCA9IHRoaXMucmV0dXJuVW5pcXVlSWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5pZHMuaW5jbHVkZXMoaWQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlcy50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnQ2hhbmdlVmlzaWJpbGl0eSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Zpc2libGUgPSAocmVzLnZhbHVlWzBdKSA9PT0gMCA/IGZhbHNlIDogdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0NoYW5nZUVkaXRhYmxlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlzRWRpdGFibGUgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXMudmFsdWUubGVuZ3RoID4gMCA/IHJlcy52YWx1ZVtyZXMuaWRzLmluZGV4T2YoaWQpXSA6IHJlcy52YWx1ZVswXSkgPT09IDAgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdDaGFuZ2VNYW5kYXRvcnknOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNNYW5kYXRvcnkgPVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChyZXMudmFsdWUubGVuZ3RoID4gMCA/IHJlcy52YWx1ZVtyZXMuaWRzLmluZGV4T2YoaWQpXSA6IHJlcy52YWx1ZVswXSkgPyBmYWxzZSA6IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFwcERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aXNpYmxlOiB0aGlzLmlzVmlzaWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRoaXMuaXNFZGl0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiBFbWl0IGFmdGVyIHRoZSBjb2RlIGhhcyBzdWJzY3JpYmVkIHRoZSBlbWl0dGVyIGVsc2UgY29uZGl0aW9ucyBvbiB0aGUgbGFzdCBpbmRleCBvZiByZXBlYXRhYmxlIGJsb2NrXHJcbiAgICAgICAgICogd29uJ3Qgd29ya1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aGlzLm1hbmFnZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U2Vzc2lvbkRhdGEodGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKCF0aGlzLmlzTGlzdFZpZXcgJiYgIXRoaXMuaXNUYWJsZVZpZXcpIHtcclxuICAgICAgICAgICAgdGhpcy5vblNldFNlc3Npb25EYXRhKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgdGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vblZpZXdEYXRhSW5pdCgpO1xyXG4gICAgICAgIGxldCBhdHRhY2htZW50QXBpS2V5ID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfdHlwZSA9PT0gJ0F0dGFjaG1lbnRzJykge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NpbmdsZUFwaUtleSkge1xyXG4gICAgICAgICAgICAgICAgYXR0YWNobWVudEFwaUtleSA9IHRoaXMuZmllbGREYXRhLmFwaV9rZXk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVzcG9uc2VBUElrZXlBcnIgPSB0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5LnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgICAgICAgICBhdHRhY2htZW50QXBpS2V5ID0gcmVzcG9uc2VBUElrZXlBcnJbMF07XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0YWNobWVudEFwaUtleS5pbmNsdWRlcygnIyMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dGFjaG1lbnRBcGlLZXkgPSBhdHRhY2htZW50QXBpS2V5LnNwbGl0KCcjIycpLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdhdHRhY2htZW50QXBpS2V5JywgYXR0YWNobWVudEFwaUtleSk7XHJcbiAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdvbkxvYWQnLCB7fSwgdHJ1ZSwgdGhpcy5maWVsZERhdGEuZmllbGRfdHlwZSA9PT0gJ0F0dGFjaG1lbnRzJyA/IHtcclxuICAgICAgICAgICAgdHlwZTogJ2ZpbGUnLFxyXG4gICAgICAgICAgICBmaWxlRGF0YTogeyBhcGlLZXk6IGF0dGFjaG1lbnRBcGlLZXkgfVxyXG4gICAgICAgIH0gOiB1bmRlZmluZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIGFic3RyYWN0IG9uVmlld0RhdGFJbml0KCk6IHZvaWQ7XHJcblxyXG4gICAgYWJzdHJhY3QgdXBkYXRlU3RhdGVIaXN0b3J5KGRhdGE6IGFueSk6IHZvaWQ7XHJcblxyXG4gICAgYWJzdHJhY3Qgb25BUElDYWxsYmFjayhkYXRhOiBhbnkpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IGNvbmNhdERhdGEoZGF0YTogYW55KTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCBvbkVtcHR5U2Vzc2lvbihkYXRhOiBhbnkpOiB2b2lkO1xyXG5cclxuICAgIGFic3RyYWN0IGhhbmRsZUN1c3RvbUZ1bmN0aW9uKGRhdGE6IGFueSk6IHZvaWQ7XHJcblxyXG4gICAgYWJzdHJhY3Qgc2V0RmllbGRWYWx1ZU9uU2V0VmFsdWVzRXZlbnQoZGF0YTogb2JqZWN0KTogdm9pZDtcclxuXHJcbiAgICBhYnN0cmFjdCBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCk6IHZvaWQ7XHJcblxyXG4gICAgYWJzdHJhY3QgdG9nZ2xlTGFuZ3VhZ2UoZGF0YTogb2JqZWN0KTogdm9pZDtcclxuXHJcbiAgICBwcm90ZWN0ZWQgb25WaWV3VW5sb2FkKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNoYW5nZURldGVjdG9yUmVmICYmICEodGhpcy5jaGFuZ2VEZXRlY3RvclJlZiBhcyBWaWV3UmVmKS5kZXN0cm95ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3RvclJlZi5kZXRlY3RDaGFuZ2VzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIHRoaXMudmFyaWFibGVPYmplY3QpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMudmFyaWFibGVPYmplY3Rba2V5XSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFtrZXldLnVuc3Vic2NyaWJlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uVmlld0xvYWRlZCgpIHsgfVxyXG5cclxuICAgIC8vIHNldCBhdHRhY2htZW50IG1lc3NhZ2VcclxuICAgIC8qKlxyXG4gICAgICogbWV0aG9kIHNldHMgbWVzc2FnZSBmb3IgdGhlIHNwZWNpYWxcclxuICAgICAqIGF0dGFjaG1lbnQgZGF0YSB0eXBlXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBzZXRBdHRhY2htZW50TWVzc2FnZShtZXNzYWdlSWQpIHtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbmRpdGlvbkNoZWNrKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICBsZXQgbWFuZGF0b3J5Q29uZGl0aW9uO1xyXG4gICAgICAgIGxldCBlZGl0YWJsZUNvbmRpdGlvbjtcclxuICAgICAgICBsZXQgdmlzaWJpbGl0eUNvbmRpdGlvbjtcclxuICAgICAgICBsZXQgY3VzdG9tQ2xhc3NDb25kaXRpb247XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmRpdGlvbk9ialsnaXNNYW5kYXRvcnknXSkge1xyXG4gICAgICAgICAgICBtYW5kYXRvcnlDb25kaXRpb24gPSB0aGlzLmNvbmRpdGlvbmFsVXRpbC5jaGVja01hbmRhdG9yeSh0aGlzLmZpZWxkRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmRpdGlvbk9ialsnaXNFZGl0YWJsZSddKSB7XHJcbiAgICAgICAgICAgIGVkaXRhYmxlQ29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tFZGl0YWJsZSh0aGlzLmZpZWxkRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCF0aGlzLmNvbmRpdGlvbk9ialsnaXNWaXNpYmxlJ10pIHtcclxuICAgICAgICAgICAgdmlzaWJpbGl0eUNvbmRpdGlvbiA9IHRoaXMuY29uZGl0aW9uYWxVdGlsLmNoZWNrVmlzaWJpbGl0eSh0aGlzLmZpZWxkRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhWydjdXN0b21fY2xhc3NfY29uZGl0aW9uJ10gJiYgdGhpcy5maWVsZERhdGFbJ2N1c3RvbV9jbGFzc19jb25kaXRpb24nXS5oYXNPd25Qcm9wZXJ0eSgncXVlcnknKSAmJiB0aGlzLmZpZWxkRGF0YVsnY3VzdG9tX2NsYXNzX2NvbmRpdGlvbiddWydxdWVyeSddICE9ICcnKSB7XHJcbiAgICAgICAgICAgIGN1c3RvbUNsYXNzQ29uZGl0aW9uID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY2hlY2tDdXN0b21DbGFzcyh0aGlzLmZpZWxkRGF0YSwgU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksIHZhbHVlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgY29uZGl0aW9uYWxGaWVsZFZhbHVlID0gdGhpcy5jb25kaXRpb25hbFV0aWwuY29uZGl0aW9uYWxWYWx1ZShcclxuICAgICAgICAgICAgdGhpcy5maWVsZERhdGEsXHJcbiAgICAgICAgICAgIFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLFxyXG4gICAgICAgICAgICB2YWx1ZSwgdGhpcy5maWVsZFZhbHVlKTtcclxuICAgICAgICBpZiAobWFuZGF0b3J5Q29uZGl0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc01hbmRhdG9yeSA9IG1hbmRhdG9yeUNvbmRpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVkaXRhYmxlQ29uZGl0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJvbUZpZWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzRWRpdGFibGUgPSBlZGl0YWJsZUNvbmRpdGlvbjtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25FZGl0YWJsZVN0YXR1c0NoYW5nZWQuZW1pdCh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh2aXNpYmlsaXR5Q29uZGl0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJvbUZpZWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmlzaWJsZSA9IHZpc2liaWxpdHlDb25kaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGN1c3RvbUNsYXNzQ29uZGl0aW9uICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZnJvbUZpZWxkID09PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzQ3VzdG9tQ2xhc3MgPSBjdXN0b21DbGFzc0NvbmRpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmlzX2NvbmRpdGlvbmFsX3ZhbHVlICYmIHRoaXMuZmllbGREYXRhLmlzX2NvbmRpdGlvbmFsX3ZhbHVlID09PSAxKSB7XHJcbiAgICAgICAgICAgIGlmIChjb25kaXRpb25hbEZpZWxkVmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbmFsRmllbGRWYWx1ZSAmJiBTdHJpbmcoY29uZGl0aW9uYWxGaWVsZFZhbHVlKS5pbmNsdWRlcygnfCcpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucG9zc2libGVfdmFsdWVzID0gY29uZGl0aW9uYWxGaWVsZFZhbHVlLnNwbGl0KCd8JykubWFwKHMgPT4gcy50cmltKCkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBjb25kaXRpb25hbEZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhhcGlLZXksIHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCArICcgOjogJyArIHZhbHVlKTtcclxuICAgICAgICB0aGlzLmNvbmRpdGlvbkNoZWNrKHZhbHVlKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgaWYgcHJlc2V0IGRhdGFcclxuICAgICAgICAvLyBOb3RlOiBwcmVzZXQgZGF0YSBvbmx5IGNvbWVzIGZyb20gdGFibGUgLCBsaXN0LCBhbmQgcmVwZWF0YWJsZSBibG9ja1xyXG4gICAgICAgIC8vIHJlcGVhdGFibGUgYmxvY2sgY29udGFpbnMgdW5pcXVlIGlkXHJcbiAgICAgICAgLy8gaWYgdGhpcyBpcyBwcmVzZW50IHN0b3JlIGluIGFub3RoZXIgbG9jYWwgc3RvcmFnZVxyXG4gICAgICAgIC8vIGVsc2Ugc3RvcmUgaW4gYWtpdGEgc3RvcmVcclxuICAgICAgICBpZiAodGhpcy5tYW5hZ2VTdGF0ZSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzZXQgdGhlIHJlcGVhdGFibGUgc3RhdGUgaWYgd2l0aCBzdGF0ZVxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYXBwRGF0YS5saW5rZWRCbG9ja0lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXBlYXRhYmxlQmxvY2tEYXRhVXRpbC51cGRhdGVSZXBlYXRhYmxlTG9jYWxTdG9yYWdlRGF0YUFmdGVyU2Vzc2lvblNldChcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhLmxpbmtlZEJsb2NrSWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnRoaXMucmVwZXRhYmxlQmxvY2tNb2RlbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnsgZmllbGRJZDogU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCksIGlzTWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuaXNfbWFuZGF0b3J5ID09PSAyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBwRGF0YSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgeyB2aXNpYmxlOiB0aGlzLmlzVmlzaWJsZSwgZWRpdGFibGU6IHRoaXMuaXNFZGl0YWJsZSwgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5LCB2YWx1ZTogdGhpcy5maWVsZFZhbHVlIH0pKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5jaGFuZ2VEZXRlY3RvclJlZiAmJiAhKHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYgYXMgVmlld1JlZikuZGVzdHJveWVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbmdlRGV0ZWN0b3JSZWYuZGV0ZWN0Q2hhbmdlcygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgb25EaXJ0eSgpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaGFzVW5zYXZlZERhdGEgJiYgdGhpcy5tb2RhbE9uUGFnZUxlYXZlKSB7XHJcbiAgICAgICAgICAgIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIGRvY3VtZW50LnRpdGxlLCBkb2N1bWVudC5sb2NhdGlvbi50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2hhc191bnNhdmVkX2RhdGEnLCAndHJ1ZScpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25EaXJ0eScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCBvbmx5IHVwZGF0ZXMgYSBzaW5nbGUgZW50aXR5IGluIHRoZSBha2l0YSBzdG9yZVxyXG4gICAgICogYW5kIGRvZXMgbm90IHVwZGF0ZSBvciBlbWl0IGFueSBldmVudFxyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGZpZWxkIHZhbHVlIHRoYXQgbmVlZHMgdG8gYmUgdXBkYXRlZFxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlRmllbGRFbnRpdHkoZGF0YSkge1xyXG4gICAgICAgIGlmICh0aGlzLm1hbmFnZVN0YXRlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFwcERhdGEsXHJcbiAgICAgICAgICAgICAgICB7IHZpc2libGU6IHRoaXMuaXNWaXNpYmxlLCBlZGl0YWJsZTogdGhpcy5pc0VkaXRhYmxlLCBtYW5kYXRvcnk6IHRoaXMuaXNNYW5kYXRvcnksIHZhbHVlOiBkYXRhIH0pKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgdXBkYXRlcyB0aGUgYXR0YWNobWVudCBkYXRhIGluIHRoZSBha2l0YSBzdG9yZVxyXG4gICAgICogc3BlY2lhbCBtZXRob2QgdGhhdCBtZXJnZXMgdGhlIG5ldyBkYXRhIHdpdGggdGhlIGV4aXN0aW5nIGRhdGFcclxuICAgICAqIG9yIG1vZGlmaWVzIHRoZSBleGlzdGluZyBkYXRhIGJhc2VkIG9uIHRoZSB0eXBlIG9yIGFjdGlvblxyXG4gICAgICogZGF0YVxyXG4gICAgICovXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlQXR0YWNobWVudHModHlwZSwgZmllbGRVbmlxdWVJZCwgZGF0YTogYW55ID0ge30sIGF0dGFjaG1lbnRJZDogc3RyaW5nID0gJycsIGlzUmVwbGFjZTogYm9vbGVhbiA9IGZhbHNlKSB7XHJcbiAgICAgICAgbGV0IGV4aXN0aW5nRGF0YSA9IFtdO1xyXG4gICAgICAgIGlmICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGF0dGFjaG1lbnREYXRhID0gdGhpcy5hcHBEYXRhU2VydmljZS5nZXRGaWVsZERhdGFCeUZpZWxkSWQoZmllbGRVbmlxdWVJZCk7XHJcbiAgICAgICAgICAgIGlmIChhdHRhY2htZW50RGF0YSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXhpc3RpbmdEYXRhID0gYXR0YWNobWVudERhdGE7XHJcbiAgICAgICAgICAgICAgICBleGlzdGluZ0RhdGEgPSBPYmplY3QuYXNzaWduKFtdLCBhdHRhY2htZW50RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBleGlzdGluZ0RhdGEgPSBkYXRhO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3VwbG9hZCc6XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnQ2FsbGVkJywgZmllbGRVbmlxdWVJZCk7XHJcbiAgICAgICAgICAgICAgICAvLyBleGlzdGluZ0RhdGEgPSBbLi4uZXhpc3RpbmdEYXRhLCAuLi5bZGF0YV1dO1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzUmVwbGFjZSAmJiBleGlzdGluZ0RhdGEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nRGF0YVswXSA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nRGF0YS5wdXNoKGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgJ2RlbGV0ZSc6XHJcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgYXR0YWNobWVudF0gb2YgT2JqZWN0LmVudHJpZXMoZXhpc3RpbmdEYXRhKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhdHRhY2htZW50LmF0dGFjaG1lbnRJZCA9PT0gYXR0YWNobWVudElkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nRGF0YS5zcGxpY2UoTnVtYmVyKGluZGV4KSwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdEZWxldGVkIGF0dGFjaG1lbnQgZGF0YScsIGV4aXN0aW5nRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAndXBkYXRlJzpcclxuICAgICAgICAgICAgICAgIC8vIFRPRE9cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YShleGlzdGluZ0RhdGEpO1xyXG4gICAgICAgICAgICAvLyB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcHBEYXRhLFxyXG4gICAgICAgICAgICAvLyAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHZpc2libGU6IHRoaXMuaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGVkaXRhYmxlOiB0aGlzLmlzRWRpdGFibGUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5LFxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGlzVmFsaWQ6IHRydWUsIHZhbHVlOiBleGlzdGluZ0RhdGFcclxuICAgICAgICAgICAgLy8gICAgIH0pKTtcclxuICAgICAgICAgICAgLy8gdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmJ1dHRvblZhbGlkYXRpb25FbWl0dGVyLmVtaXQoKTtcclxuICAgICAgICAvLyB9LCAxNTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgdXBkYXRlRmllbGREYXRhKGRhdGE6IGFueSwgaXNWYWxpZDogYm9vbGVhbiA9IHRydWUpOiB2b2lkIHtcclxuICAgICAgICAvLyBQZXJmb3JtIGN1c3RvbSB2YWxpZGF0aW9uIGNoZWNrIGlmIGFwcGxpY2FibGVcclxuICAgICAgICBpZiAodGhpcy5jdXN0b21DaGVjayAmJiBkYXRhKSB7XHJcbiAgICAgICAgICAgIGlzVmFsaWQgPSB0aGlzLmN1c3RvbUVycm9yc1ZhbGlkYXRpb24uZ2V0TWVzc2FnZXModGhpcy5hcHBEYXRhLmlkLCBkYXRhKS5sZW5ndGggPT09IDAgJiYgaXNWYWxpZDtcclxuICAgICAgICB9XHJcbiAgICBcclxuICAgICAgICB0aGlzLnZhbGlkID0gaXNWYWxpZDtcclxuICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBkYXRhO1xyXG4gICAgXHJcbiAgICAgICAgLy8gVXBkYXRlIGFwcERhdGEgd2l0aCBuZXcgdmFsaWRhdGlvbiBzdGF0ZVxyXG4gICAgICAgIHRoaXMuYXBwRGF0YSA9IHsgLi4udGhpcy5hcHBEYXRhLCBpc1ZhbGlkIH07XHJcbiAgICBcclxuICAgICAgICBpZiAodGhpcy5tYW5hZ2VTdGF0ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmFwcERhdGFTZXJ2aWNlLnVwZGF0ZUFwcERhdGEoe1xyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcHBEYXRhLFxyXG4gICAgICAgICAgICAgICAgdmlzaWJsZTogdGhpcy5pc1Zpc2libGUsXHJcbiAgICAgICAgICAgICAgICBlZGl0YWJsZTogdGhpcy5pc0VkaXRhYmxlLFxyXG4gICAgICAgICAgICAgICAgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5LFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IHRoaXMuZmllbGRWYWx1ZSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zZXRTZXNzaW9uRGF0YSh0aGlzLmZpZWxkVmFsdWUpO1xyXG4gICAgXHJcbiAgICAgICAgLy8gRW1pdCBldmVudHMgYXN5bmNocm9ub3VzbHkgaW4gYSBzaW5nbGUgdGltZW91dCBibG9ja1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCB7IHZhbGlkYXRlQnV0dG9uRm9yVGFnRW1pdHRlciwgYnV0dG9uVmFsaWRhdGlvbkVtaXR0ZXIgfSA9IHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZTtcclxuICAgICAgICAgICAgdmFsaWRhdGVCdXR0b25Gb3JUYWdFbWl0dGVyLmVtaXQoKTtcclxuICAgICAgICAgICAgYnV0dG9uVmFsaWRhdGlvbkVtaXR0ZXIuZW1pdCgpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIC8vIEVtaXRzIE9ubHkgaWYgZmllbGQgaXMgcGFydCBvZiBhIHJlcGVhdGFibGUgYmxvY2tcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNSZXBlYXRhYmxlKCkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5yYkN1cnJlbnRJbmRleC5lbWl0KHRoaXMuZ2V0UmVwZWF0YWJsZUluZm8oKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCAwKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICogQ2hlY2sgaWYgZmllbGQgaXMgcGFydCBvZiBhIHJlcGVhdGFibGUgYmxvY2tcclxuICAgICovXHJcbiAgICBwcml2YXRlIGlzUmVwZWF0YWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBDaGVjayBpZiBJRCBjb250YWlucyBkZWxpbWl0ZXIgJyQnIHdoaWNoIGluZGljYXRlcyByZXBlYXRhYmxlIGJsb2NrXHJcbiAgICAgICAgY29uc3QgaWRQYXJ0cyA9IFN0cmluZyh0aGlzLmFwcERhdGEuaWQpLnNwbGl0KCckJyk7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgSUQgaGFzIDQgcGFydHMgKHN0ZXBJZCRibG9ja0lkJHBhcmVudFBvc2l0aW9uJHBvc2l0aW9uKVxyXG4gICAgICAgICAgICAvLyBPUiBDaGVjayBpZiBJRCBoYXMgMyBwYXJ0cyAoc3RlcElkJGJsb2NrSWQkcG9zaXRpb24pXHJcbiAgICAgICAgICAgIGlkUGFydHMubGVuZ3RoID09PSAzIHx8IGlkUGFydHMubGVuZ3RoID09PSA0IHx8XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0IGhhcyByZXBlYXRhYmxlIGJsb2NrIElEXHJcbiAgICAgICAgICAgICEhdGhpcy5hcHBEYXRhLnJlcGVhdGVkQmxvY2tGaWVsZElkIHx8XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIGl0J3MgbGlua2VkIHRvIGEgYmxvY2tcclxuICAgICAgICAgICAgISF0aGlzLmFwcERhdGEubGlua2VkQmxvY2tJZCB8fFxyXG4gICAgICAgICAgICAvLyBDaGVjayBpZiBpdCBoYXMgcHJlc2V0IGRhdGEgd2l0aCBwb3NpdGlvblxyXG4gICAgICAgICAgICAhISh0aGlzLnByZXNldERhdGEgJiYgdGhpcy5wcmVzZXREYXRhLnBvc2l0aW9uKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXQgcmVwZWF0YWJsZSBibG9jayBpbmZvIGlmIGZpZWxkIGlzIHJlcGVhdGFibGVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRSZXBlYXRhYmxlSW5mbygpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNSZXBlYXRhYmxlKCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlkUGFydHMgPSBTdHJpbmcodGhpcy5hcHBEYXRhLmlkKS5zcGxpdCgnJCcpO1xyXG4gICAgICAgIC8vIEhhbmRsZSBuZXN0ZWQgcmVwZWF0YWJsZSBibG9jazogc3RlcElkJGJsb2NrSWQkcGFyZW50UG9zaXRpb24kcG9zaXRpb25cclxuICAgICAgICBpZiAoaWRQYXJ0cy5sZW5ndGggPT09IDQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBJZDogaWRQYXJ0c1swXSxcclxuICAgICAgICAgICAgICAgIGlkOiBpZFBhcnRzWzFdLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50UG9zaXRpb246IHBhcnNlSW50KGlkUGFydHNbMl0pLFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHBhcnNlSW50KGlkUGFydHNbM10pLFxyXG4gICAgICAgICAgICAgICAgaXNDaGlsZEJsb2NrOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGlua2VkQmxvY2tJZDogdGhpcy5hcHBEYXRhLmxpbmtlZEJsb2NrSWQsXHJcbiAgICAgICAgICAgICAgICByZXBlYXRlZEJsb2NrRmllbGRJZDogdGhpcy5hcHBEYXRhLnJlcGVhdGVkQmxvY2tGaWVsZElkXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIEhhbmRsZSByZWd1bGFyIHJlcGVhdGFibGUgYmxvY2s6IHN0ZXBJZCRibG9ja0lkJHBvc2l0aW9uXHJcbiAgICAgICAgZWxzZSBpZiAoaWRQYXJ0cy5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHN0ZXBJZDogaWRQYXJ0c1swXSxcclxuICAgICAgICAgICAgICAgIGlkOiBpZFBhcnRzWzFdLFxyXG4gICAgICAgICAgICAgICAgcGFyZW50UG9zaXRpb246IHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBwYXJzZUludChpZFBhcnRzWzJdKSxcclxuICAgICAgICAgICAgICAgIGlzQ2hpbGRCbG9jazogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBsaW5rZWRCbG9ja0lkOiB0aGlzLmFwcERhdGEubGlua2VkQmxvY2tJZCxcclxuICAgICAgICAgICAgICAgIHJlcGVhdGVkQmxvY2tGaWVsZElkOiB0aGlzLmFwcERhdGEucmVwZWF0ZWRCbG9ja0ZpZWxkSWQsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvLyBFbWl0IG9uIERhdGEgU2V0IG9yIFVwZGF0ZWRcclxuICAgIHByaXZhdGUgZW1pdEZvckZpZWxkc1NlY3Rpb25CbG9jayhlbWl0T2JqKSB7XHJcbiAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRPbkRhdGFTZXRPclVwZGF0ZWQuZW1pdChlbWl0T2JqKTsgLy8gRm9yIEZpZWxkc1xyXG4gICAgICAgIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5lbWl0T25EYXRhU2V0T3JVcGRhdGVkRm9yU2VjdGlvbi5lbWl0KGVtaXRPYmopOyAvLyBGb3IgU2VjdGlvbnNcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZEZvckJsb2NrLmVtaXQoZW1pdE9iaik7IC8vIEZvciBCbG9ja3NcclxuICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdE9uRGF0YVNldE9yVXBkYXRlZEZvckdlbmVyaWNCbG9jay5lbWl0KGVtaXRPYmopOyAvLyBGb3IgR2VuZXJpYyBCbG9ja3NcclxuICAgIH1cclxuICAgIHByb3RlY3RlZCBzZXRTZXNzaW9uRGF0YShkYXRhOiBhbnkpIHtcclxuICAgICAgICB0aGlzLmZpZWxkVmFsdWUgPSBkYXRhO1xyXG4gICAgICAgIGxldCBlbWl0T2JqID0gbnVsbDtcclxuICAgICAgICBpZiAoU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkuc3BsaXQoJyQnKS5sZW5ndGggPT09IDMpIHtcclxuICAgICAgICAgICAgZW1pdE9iaiA9IHtcclxuICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5hcHBEYXRhLmxpbmtlZEJsb2NrSWQgPyB0aGlzLmFwcERhdGEuaWQgOiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YSxcclxuICAgICAgICAgICAgICAgIGluZGV4OiBTdHJpbmcodGhpcy5hcHBEYXRhLmlkKS5zcGxpdCgnJCcpWzJdXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZW1pdE9iaiA9IHtcclxuICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5hcHBEYXRhLmxpbmtlZEJsb2NrSWQgPyB0aGlzLmFwcERhdGEuaWQgOiB0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogZGF0YVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmVtaXRGb3JGaWVsZHNTZWN0aW9uQmxvY2soZW1pdE9iaik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIGdldFNlc3Npb25EYXRhKCkge1xyXG4gICAgICAgIHRoaXMuZmllbGRWYWx1ZSA9IHRoaXMudXNlckRhdGFIYW5kbGVyU2VydmljZS5nZXRGaWVsZERhdGEodGhpcy5zZXNzaW9uS2V5VXRpbC5nZW5lcmF0ZVNlc3Npb25LZXkodGhpcy5maWVsZERhdGEpKTtcclxuICAgIH1cclxuXHJcbiAgICBjb25kaXRpb25hbEVycm9yTWVzc2FnZUNvbXBhcmVGaWVsZHMgPSAoYXBpS2V5OiBzdHJpbmcsIGZpZWxkRGF0YTogYW55LCByZXBlYXRlZEZpZWxkSWQ6IHN0cmluZyA9ICcnLCAgb3B0aW9ucz86IHsgaXNTaW4/OiBib29sZWFuIH0pID0+IHtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpO1xyXG4gICAgICAgIGlmICghZmllbGREYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMgfHwgIUFycmF5LmlzQXJyYXkoZmllbGREYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMpIHx8IGZpZWxkRGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGlmVmFsaWQgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IFtpbmRleCwgdmFsaWRhdGlvbk1lc3NhZ2VdIG9mIGZpZWxkRGF0YS52YWxpZGF0aW9uX21lc3NhZ2VzLmVudHJpZXMoKSkge1xyXG4gICAgICAgICAgICBpZiAoIXZhbGlkYXRpb25NZXNzYWdlIHx8ICF2YWxpZGF0aW9uTWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbk1lc3NhZ2UudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlLnR5cGUgPT09ICdDb25kaXRpb25hbCcgfHwgdmFsaWRhdGlvbk1lc3NhZ2UudHlwZSA9PT0gJ2NvbmRpdGlvbmFsX21lc3NhZ2UnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbGlkYXRpb25Nc2cgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkaXNwbGF5TWVzc2FnZSA9IHRoaXMud2ZlQ29uZGl0aW9uYWxFeGVjdXRlci5ldmFsdWF0ZUNvbmRpdGlvblF1ZXJ5KFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTWVzc2FnZS5xdWVyeSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsaWRhdGlvbk1lc3NhZ2UuY29uZGl0aW9ucywgcmVwZWF0ZWRGaWVsZElkLCB7fSwgeyB1bmlxdWVfaWQ6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgYXBpS2V5OiB0aGlzLmZpZWxkRGF0YS5hcGlfa2V5IH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLm1lc3NhZ2VzRGF0YU1hcFt2YWxpZGF0aW9uTWVzc2FnZS5tZXNzYWdlX2NvZGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25Nc2cgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLm1lc3NhZ2VzRGF0YU1hcFt2YWxpZGF0aW9uTWVzc2FnZS5tZXNzYWdlX2NvZGVdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyBzd2l0Y2ggdG8gZGlzcGxheSB0eXBlIG9mIHRoZSBtZXNzYWdlIHRoYXQgaXMgY29uZmlndXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZGlzcGxheU1lc3NhZ2VcIiwgZGlzcGxheU1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5TWVzc2FnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGREYXRhLnZhbHVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYXBwIGRhdGEgZm9yIHRoZSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZlZhbGlkLnB1c2goIWRpc3BsYXlNZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAodmFsaWRhdGlvbk1lc3NhZ2UuZGlzcGxheV90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ01PREFMJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgdGhlIGVycm9yIG1lc3NhZ2UgaW4gdGhlIG1vZGFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcGxheU1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpYWxvZy5jbG9zZUFsbCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh2YWxpZGF0aW9uTXNnWydtZXNzYWdlX3RleHQnXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ0lOTElORSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsIHBhcmFtMiAtICcsIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYodGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzWydzaW5fbnVtYmVyJ10gIT0gdHJ1ZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc3BsYXlNZXNzYWdlKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wYXJpc29uRXJyb3JbU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkgKyAnXycgKyBpbmRleF0gPSB2YWxpZGF0aW9uTXNnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbXBhcmlzb25FcnJvck1lc3NhZ2VEYXRhID0gdmFsaWRhdGlvbk1zZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29tcGFyaXNvbkVycm9yW1N0cmluZyh0aGlzLmFwcERhdGEuaWQpICsgJ18nICsgaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zaG93Q29tcGFyaXNvbkVycm9yW1N0cmluZyh0aGlzLmFwcERhdGEuaWQpICsgJ18nICsgaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0NvbXBhcmlzb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCB0aGlzLnNob3dDb21wYXJpc29uRXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdQT1BVUCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBzaG93IHRoZSBlcnJvciBtZXNzYWdlIGFzIHBvcHVwIG9yIG1hdCBzbmFjayBiYXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5TWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc25hY2tCYXIuZGlzbWlzcygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMub3BlblNhbmNrQmFyKHZhbGlkYXRpb25Nc2dbJ21lc3NhZ2VfdGV4dCddKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gc2hvdyB0aGUgZXJyb3IgbWVzc2FnZSBpbmxpbmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RoaXMuZmllbGREYXRhLmFkZGl0aW9uYWwgcGFyYW0yIC0gJywgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVyc1snc2luX251bWJlciddICE9IHRydWUpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5TWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dDb21wYXJpc29uRXJyb3JbU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkgKyAnXycgKyBpbmRleF0gPSB2YWxpZGF0aW9uTXNnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNvbXBhcmlzb25FcnJvck1lc3NhZ2VEYXRhID0gdmFsaWRhdGlvbk1zZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29tcGFyaXNvbkVycm9yW1N0cmluZyh0aGlzLmFwcERhdGEuaWQpICsgJ18nICsgaW5kZXhdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zaG93Q29tcGFyaXNvbkVycm9yW1N0cmluZyh0aGlzLmFwcERhdGEuaWQpICsgJ18nICsgaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuc2hvd0NvbXBhcmlzb25FcnJvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKHZhbGlkYXRpb25NZXNzYWdlLnR5cGUgPT09ICdSZWdleCcpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IG1hc2sgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgZmllbGRWYWwgPSB0aGlzLmZpZWxkVmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkRhdGEgRm9ybWF0XCJdICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlcltcIkRhdGEgRm9ybWF0XCJdICE9ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBtYXNrRm9ybWF0ID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyW1wiRGF0YSBGb3JtYXRcIl07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hc2tGb3JtYXQuc3BsaXQoJycpLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbGVtZW50ID09ICdYJyB8fCBlbGVtZW50ID09ICcwJyA/IG1hc2sucHVzaCgnWCcpIDogbWFzay5wdXNoKGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmllbGRWYWwgPSB0aGlzLmdldE1hc2tlZElucHV0VmFsdWUoZmllbGRWYWwsIG1hc2spO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZFZhbCAmJiB0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhdHQgPSBuZXcgUmVnRXhwKHRoaXMuZmllbGREYXRhLnZhbGlkYXRpb25fcmVnZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZCA9IHBhdHQudGVzdChmaWVsZFZhbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGREYXRhLnZhbHVlLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHVwZGF0ZSB0aGUgYXBwIGRhdGEgZm9yIHRoZSBmaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZlZhbGlkLnB1c2godmFsaWQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlmVmFsaWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgLy8gaWYgcmVnZXggdmFsaWRhdGlvbiBpcyBwYXNzZWQgYW5kIGhhcyBjb25kaXRpb25hbCBlcnJvcnNcclxuICAgICAgICAgICAgICAgIGlmICgodGhpcy5hcHBEYXRhLmlzVmFsaWQgJiYgaWZWYWxpZC5pbmNsdWRlcyhmYWxzZSkpIHx8ICF0aGlzLmFwcERhdGEuaXNWYWxpZCAmJiAhaWZWYWxpZC5pbmNsdWRlcyhmYWxzZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gIWlmVmFsaWQuaW5jbHVkZXMoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBwRGF0YSwgeyBpc1ZhbGlkOiB0aGlzLnZhbGlkIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UudXBkYXRlQXBwRGF0YShPYmplY3QuYXNzaWduKHt9LCB0aGlzLmFwcERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpc2libGU6IHRoaXMuaXNWaXNpYmxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWRpdGFibGU6IHRoaXMuaXNFZGl0YWJsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hbmRhdG9yeTogdGhpcy5pc01hbmRhdG9yeSwgaXNWYWxpZDogdGhpcy52YWxpZCwgdmFsdWU6IHRoaXMuZmllbGRWYWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmJ1dHRvblZhbGlkYXRpb25FbWl0dGVyLmVtaXQoKTtcclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGNvbmRpdGlvbmFsRXJyb3JNZXNzYWdlQ29tcGFyZUZpZWxkc1NpbiA9IChhcGlLZXk6IHN0cmluZywgZmllbGREYXRhOiBhbnksIHJlcGVhdGVkRmllbGRJZDogc3RyaW5nID0gJycsIGlzTWVzc2FnZURpc3BsYXk6IGJvb2xlYW4gPSBmYWxzZSkgPT4ge1xyXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCk7XHJcbiAgICAgICAgY29uc3QgaWZWYWxpZCA9IFtdO1xyXG4gICAgICAgIGZvciAoY29uc3QgW2luZGV4LCB2YWxpZGF0aW9uTWVzc2FnZV0gb2YgZmllbGREYXRhLnZhbGlkYXRpb25fbWVzc2FnZXMuZW50cmllcygpKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uTWVzc2FnZS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvbk1lc3NhZ2UudHlwZSA9PT0gJ0NvbmRpdGlvbmFsJyB8fCB2YWxpZGF0aW9uTWVzc2FnZS50eXBlID09PSAnY29uZGl0aW9uYWxfbWVzc2FnZScpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsaWRhdGlvbk1zZyA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRpc3BsYXlNZXNzYWdlID0gaXNNZXNzYWdlRGlzcGxheTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5tZXNzYWdlc0RhdGFNYXBbdmFsaWRhdGlvbk1lc3NhZ2UubWVzc2FnZV9jb2RlXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWxpZGF0aW9uTXNnID0gdGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5tZXNzYWdlc0RhdGFNYXBbdmFsaWRhdGlvbk1lc3NhZ2UubWVzc2FnZV9jb2RlXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3dpdGNoIHRvIGRpc3BsYXkgdHlwZSBvZiB0aGUgbWVzc2FnZSB0aGF0IGlzIGNvbmZpZ3VyZWRcclxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRpc3BsYXlNZXNzYWdlXCIsIGRpc3BsYXlNZXNzYWdlKTsgc2RcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZGlzcGxheU1lc3NhZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmZpZWxkRGF0YS52YWx1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGFwcCBkYXRhIGZvciB0aGUgZmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWZWYWxpZC5wdXNoKCFkaXNwbGF5TWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ3ZhbGlkYXRpb25NZXNzYWdlLmRpc3BsYXlfdHlwZSAtICcsIHZhbGlkYXRpb25Nc2cpO1xyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy90aGlzLnNob3dDb21wYXJpc29uRXJyb3JbU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkgKyAnXycgKyBpbmRleF0gPSB2YWxpZGF0aW9uTXNnO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNob3cgdGhlIGVycm9yIG1lc3NhZ2UgaW5saW5lXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaXNwbGF5TWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tcGFyaXNvbkVycm9yW1N0cmluZyh0aGlzLmFwcERhdGEuaWQpICsgJ18nICsgaW5kZXhdID0gdmFsaWRhdGlvbk1zZztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoaXMuY29tcGFyaXNvbkVycm9yTWVzc2FnZURhdGEgPSB2YWxpZGF0aW9uTXNnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnNob3dDb21wYXJpc29uRXJyb3JbU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCkgKyAnXycgKyBpbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5zaG93Q29tcGFyaXNvbkVycm9yW1N0cmluZyh0aGlzLmFwcERhdGEuaWQpICsgJ18nICsgaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIHRoaXMuc2hvd0NvbXBhcmlzb25FcnJvcik7XHJcbiAgXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAvLyBpZiAoaWZWYWxpZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBpZiByZWdleCB2YWxpZGF0aW9uIGlzIHBhc3NlZCBhbmQgaGFzIGNvbmRpdGlvbmFsIGVycm9yc1xyXG4gICAgICAgICAgICAvLyAgICAgaWYgKCh0aGlzLmFwcERhdGEuaXNWYWxpZCAmJiBpZlZhbGlkLmluY2x1ZGVzKGZhbHNlKSkgfHwgIXRoaXMuYXBwRGF0YS5pc1ZhbGlkICYmICFpZlZhbGlkLmluY2x1ZGVzKGZhbHNlKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMudmFsaWQgPSAhaWZWYWxpZC5pbmNsdWRlcyhmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5hcHBEYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgdGhpcy5hcHBEYXRhLCB7IGlzVmFsaWQ6IHRoaXMudmFsaWQgfSk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgdGhpcy5hcHBEYXRhU2VydmljZS51cGRhdGVBcHBEYXRhKE9iamVjdC5hc3NpZ24oe30sIHRoaXMuYXBwRGF0YSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmlzaWJsZTogdGhpcy5pc1Zpc2libGUsXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICBlZGl0YWJsZTogdGhpcy5pc0VkaXRhYmxlLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgbWFuZGF0b3J5OiB0aGlzLmlzTWFuZGF0b3J5LCBpc1ZhbGlkOiB0aGlzLnZhbGlkLCB2YWx1ZTogdGhpcy5maWVsZFZhbHVlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH0pKTtcclxuICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgIC8vIHRoaXMuc2hhcmVkRXZlbnRzU2VydmljZS5idXR0b25WYWxpZGF0aW9uRW1pdHRlci5lbWl0KCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZ2V0TWFza2VkSW5wdXRWYWx1ZShpbnB1dFZhbHVlLCBtYXNrKSB7XHJcbiAgICAgICAgaWYgKGlucHV0VmFsdWUgJiYgbWFzayAmJiBtYXNrLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgbGV0IGlucHV0VmFsdWVBcnIgPSBpbnB1dFZhbHVlLnNwbGl0KCcnKTtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAgICAgbGV0IG1hc2tlZElucHV0ID0gW107XHJcbiAgICAgICAgICAgIG1hc2suZm9yRWFjaCgodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYodiA9PSAnWCcpe1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tlZElucHV0LnB1c2goaW5wdXRWYWx1ZUFycltpbmRleCsrXSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG1hc2tlZElucHV0LnB1c2godik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm4gbWFza2VkSW5wdXQuam9pbignJyk7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBjb25mb3JtVG9NYXNrKGlucHV0VmFsdWUsIG1hc2ssIHsgZ3VpZGU6IGZhbHNlIH0pLmNvbmZvcm1lZFZhbHVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaW5wdXRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm5NZXNzYWdlcyhtZXNzYWdlQXJyYXkpIHtcclxuICAgICAgICBjb25zdCBhcnIgPSBbXTtcclxuICAgICAgICBmb3IgKGNvbnN0IG1lc3NhZ2Ugb2YgbWVzc2FnZUFycmF5KSB7XHJcbiAgICAgICAgICAgIGlmIChtZXNzYWdlLnR5cGUgIT09ICdDb25kaXRpb25hbCcpIHtcclxuICAgICAgICAgICAgICAgIGFyci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiBtZXNzYWdlLnR5cGUsXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheVR5cGU6IG1lc3NhZ2UuZGlzcGxheV90eXBlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IG1lc3NhZ2UubWVzc2FnZV9jb2RlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYXJyO1xyXG4gICAgfVxyXG5cclxuICAgIHNldERhdGEoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy51c2VyRGF0YUhhbmRsZXJTZXJ2aWNlLnNldE9yVXBkYXRlRmllbGREYXRhKHRoaXMuZmllbGREYXRhLmFwaV9rZXksIHRoaXMuZmllbGRWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlQ29uZGl0aW9uRmllbGQoZmllbGREYXRhLCBkYXRhKSB7XHJcbiAgICAgICAgbGV0IHVucSA9IGRhdGEudW5pcXVlX2lkO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGZpZWxkRGF0YS5ldmVudF9saXN0LmZvckVhY2goZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5ldmVudF9wYXJhbXMuZm9yRWFjaChwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgcGFyYW1zPy5jb25kaXRpb24/LmZvckVhY2goY29uZGl0aW9uID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uPy5yZXBlYXRhYmxlQmxvY2tFeGlzdCA9PT0gXCJ0cnVlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbmRpdGlvbi5maWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmZpZWxkID0gdW5xO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb25kaXRpb24uYXBpX2tleSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZGl0aW9uLmFwaV9rZXkgPSB1bnE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICByZXR1cm4gZmllbGREYXRhO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0cmlnZ2VycyB0aGUgZXZlbnQgbGlzdFxyXG4gICAgICogQHBhcmFtIHR5cGUgdGhlIGV2ZW50IHR5cGVcclxuICAgICAqIEBwYXJhbSBwcmltYXJ5RGF0YSBvcHRpb25hbCBtYWlubHkgdGhlIGRhdGEgdGhhdCBpcyBzdG9yZWQgaW4gbGlzdCBvciB0YWJsZVxyXG4gICAgICogQHBhcmFtIGlzRGVmYXVsdCBib29sZWFuIGZsYWcgdG8gY2hlY2sgdGhlIGV2ZW50IGJ5IGRlZmF1bHQgaXQgaXMgc2V0IHRvIHRydWVcclxuICAgICAqIEBwYXJhbSBwYXlMb2FkIG9wdGlvbmFsIGRhdGEgaWYgcmVxdWlyZWQgdG8gcGFzcyB0byB0aGUgZXZlbnRcclxuICAgICAqIEBwYXJhbSBkaXNwbGF5VHlwZSBvcHRpb25hbCBvbmx5IHJlcXVpcmVkIGlmIGRpc3BsYXlfdHlwZSBpbiB0aGUgZXZlbnQgbmVlZHMgdG8gYmUgbWF0Y2hlZCBkZWZhdWx0IGVtcHR5XHJcbiAgICAgKi9cclxuICAgIG9uQ29tcG9uZW50RXZlbnQodHlwZTogc3RyaW5nLCBwcmltYXJ5RGF0YTogYW55ID0ge30sIGlzRGVmYXVsdDogYm9vbGVhbiA9IHRydWUsIHBheUxvYWQ/OiBhbnksIGRpc3BsYXlUeXBlOiBzdHJpbmcgPSAnJyk6IHZvaWQge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0ICYmIHRoaXMuZmllbGREYXRhLmV2ZW50X2xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZmllbGRfdHlwZSA9PSAnTWVudScgJiYgdGhpcy5wcmVzZXREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmZpZWxkRGF0YSA9IHRoaXMudXBkYXRlQ29uZGl0aW9uRmllbGQodGhpcy5maWVsZERhdGEsIHRoaXMucHJlc2V0RGF0YSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc3QgX3RoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5vbkNvbXBvbmVudEV2ZW50QmF0Y2goX3RoaXMuZmllbGREYXRhLCBfdGhpcy5wcmVzZXREYXRhLCBfdGhpcy5zdGVwSWQsIHR5cGUsIHByaW1hcnlEYXRhLCBpc0RlZmF1bHQsIHBheUxvYWQsIGRpc3BsYXlUeXBlKTsgXHJcbiAgICAgICAgICAgIH0sIDEwMCk7XHJcbiAgICAgICAgICAgIC8vIGZvciAoY29uc3QgZXZlbnQgb2YgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0KSkpIHtcclxuICAgICAgICAgICAgLy8gICAgIGlmIChldmVudC5pc0RlZmF1bHQgPT09IGlzRGVmYXVsdCAmJlxyXG4gICAgICAgICAgICAvLyAgICAgICAgIGV2ZW50LmV2ZW50X25hbWUudG9Mb3dlckNhc2UoKSA9PT0gdHlwZS50b0xvd2VyQ2FzZSgpICYmXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgKGRpc3BsYXlUeXBlID8gZXZlbnQuZGlzcGxheV90eXBlLnRvTG93ZXJDYXNlKCkgPT09IGRpc3BsYXlUeXBlLnRvTG93ZXJDYXNlKCkgOiB0cnVlKSkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0TmV4dFN0ZXBJZChldmVudCk7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgd2luZG93WydldmVudEVsZW1lbnRJZCddID0gdGhpcy5maWVsZERhdGEuaHRtbF9pZDtcclxuICAgICAgICAgICAgLy8gICAgICAgICBpZiAodGhpcy5wcmVzZXREYXRhICYmIHRoaXMucHJlc2V0RGF0YS5yZXBlYXRlZEJsb2NrRmllbGRJZCkge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICBwcmltYXJ5RGF0YSA9IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgIC4uLnByaW1hcnlEYXRhLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICAuLi5wcmltYXJ5RGF0YS52YWx1ZSxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBsaW5rZWRCbG9ja0lkOiB0aGlzLnByZXNldERhdGEubGlua2VkQmxvY2tJZCxcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5wcmVzZXREYXRhLnBvc2l0aW9uLFxyXG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAgICAgICAgIHBhcmVudFBvc2l0aW9uOiB0aGlzLnByZXNldERhdGEucGFyZW50UG9zaXRpb24sXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICAgICAgaXNSZXBlYXRhYmxlOiB0cnVlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgICAgIHRoaXMud2ZlRXZlbnRMaXN0SGFuZGxlci5zd2l0Y2hFdmVudERpc3BsYXlUeXBlKGV2ZW50LCB0aGlzLmZpZWxkRGF0YS5ldmVudF9saXN0LCBwcmltYXJ5RGF0YSwgcGF5TG9hZCk7XHJcbiAgICAgICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgICAgIC8vIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRvIHNldCBuZXh0IHN0ZXAgaWQgZm9yIE5hdmlnYXRldG9OZXh0UGFnZSBpbiBvblJlc3BvbnNlXHJcbiAgICAgKiBAcGFyYW0gZXZlbnQgdGhlIGV2ZW50XHJcbiAgICAgKi9cclxuICAgIC8vIHNldE5leHRTdGVwSWQoZXZlbnQpIHtcclxuICAgIC8vICAgICBmb3IgKGNvbnN0IGV2ZW50UGFyYW0gb2YgZXZlbnQuZXZlbnRfcGFyYW1zKSB7XHJcbiAgICAvLyAgICAgICAgIGlmIChldmVudFBhcmFtLmludm9rZV9ldmVudF9jb25maWcgJiYgZXZlbnRQYXJhbS5pbnZva2VfZXZlbnRfY29uZmlnLmNhbGxiYWNrX2NvbmZpZyAmJiBldmVudFBhcmFtLmludm9rZV9ldmVudF9jb25maWcuY2FsbGJhY2tfY29uZmlnLm9uUmVzcG9uc2UpIHtcclxuICAgIC8vICAgICAgICAgICAgIGZvciAoY29uc3Qgb25SZXMgb2YgZXZlbnRQYXJhbS5pbnZva2VfZXZlbnRfY29uZmlnLmNhbGxiYWNrX2NvbmZpZy5vblJlc3BvbnNlKSB7XHJcbiAgICAvLyAgICAgICAgICAgICAgICAgaWYgKG9uUmVzLk5hdmlnYXRldG9OZXh0UGFnZSkge1xyXG4gICAgLy8gICAgICAgICAgICAgICAgICAgICBvblJlcy5OYXZpZ2F0ZXRvTmV4dFBhZ2UgPSB0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLmdldE5leHRTdGVwSW5DdXJyZW50U2VxdWVuY2UodGhpcy5zdGVwSWQpO1xyXG4gICAgLy8gICAgICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgICAgIH1cclxuICAgIC8vICAgICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbiAgICBkZXBlbmRlbmN5SGFuZGxlciA9IGFzeW5jICh0eXBlLCBwYXlMb2FkOiBhbnkgPSB7fSkgPT4ge1xyXG4gICAgICAgIGlmICh0eXBlID09ICdvbkxvYWQnKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZV90eXBlID09PSAnRXh0ZXJuYWxBcGknKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhcGlUeXBlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0FQSV9UWVBFJyk7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGFwaVR5cGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdFU0InOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9jZWVBcGlTZXJ2aWNlLkVTQlJlcXVlc3RIYW5kbGVyKHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlX2FwaSkuc3Vic2NyaWJlKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzWydzdGF0dXMnXSA9PT0gJ29rJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwcEJhc2VSZXN1bHQgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbSgnQXBwbGljYXRpb25CYXNlUmVzdWx0UGF0aCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaVJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXNbJ2FwaV9yZXNwb25zZSddKVthcHBCYXNlUmVzdWx0XTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZW1pdEFwaVN1Y2Nlc3NSZXNwb25zZS5lbWl0KGFwaVJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZWRFdmVudHNTZXJ2aWNlLmVtaXRBcGlFcnJvclJlc3BvbnNlLmVtaXQocmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ0lOVEVSTkFMJzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdFWFRFUk5BTCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0ZXJuYWxSZXF1ZXN0UmVzcG9uc2VVdGlsLnByZXBhcmVPYmplY3RUb0JlU2VudCh0aGlzLmZpZWxkRGF0YS5wb3NzaWJsZV92YWx1ZV9hcGksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlUeXBlID09PSAnSU5URVJOQUwnID8gJ2ludGVybmFsJyA6ICcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFwcERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFwaURhdGEgPSBbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlIHRoZSBhcHBEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0QWxsQXBwRGF0YSgpLnN1YnNjcmliZShyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2FwcERhdGEnLCByZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBEYXRhID0gcmVzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgZmluYWxBcnIgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgcmVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXJyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgcmVxdWVzdEtleSBvZiBkYXRhWydyZXF1ZXN0QXBpS2V5J10pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iaiA9IGRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSB7IC4uLm9iaiwgYXBpS2V5OiByZXF1ZXN0S2V5IH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbmFsQXJyID0gWy4uLmZpbmFsQXJyLCAuLi5hcnJdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcHBEYXRhID0gZmluYWxBcnI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnYXBwIERhdGEnLCBhcHBEYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBzdG9yZSB0aGUgYXBpRGF0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFsbEFwaURhdGEoKS5zdWJzY3JpYmUocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdhcGlEYXRhJywgcmVzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaURhdGEgPSByZXM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXZlbnRIYW5kbGVyRW1pdHRlck9iamVjdCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IHRoaXMuZmllbGREYXRhLnBvc3NpYmxlX3ZhbHVlX2FwaSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwaUtleTogdGhpcy5maWVsZERhdGEuYXBpX2tleSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFwcERhdGEsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcGlEYXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNoYXJlZEV2ZW50c1NlcnZpY2UuZXZlbnRIYW5kbGVyRW1pdHRlci5lbWl0KGV2ZW50SGFuZGxlckVtaXR0ZXJPYmplY3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNPblNlbGVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHR5cGUgPT0gJ29uU2VsZWN0Jykge1xyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIGV2ZW50IGxpc3RcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KHR5cGUsIHt9LCB0cnVlLCBwYXlMb2FkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcGFyaXNvbkVycm9yKCkge1xyXG4gICAgICAgIC8vIFNob3cgQ29tcGFyaXNvbiBFcnJvciBNZXNzYWdlc1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NvbXBhcmlzb25GaWVsZCddKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkVmFsdWUgIT09IHRoaXMuYXBwRGF0YVNlcnZpY2UuZ2V0RmllbGREYXRhQnlGaWVsZElkKFxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb21tb25VdGlsLmdldElEKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ29tcGFyaXNvbkZpZWxkJ10pKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gdGhpcy5jb21tb25VdGlsLmdldFZhbHVlKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ29tcGFyaXNvbkZpZWxkJ10pLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLndmZVN0ZXBMb2FkZXJTZXJ2aWNlLm1lc3NhZ2VzRGF0YU1hcFtlcnJvckNvZGVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93Q29tcGFyaXNvbkVycm9yW1N0cmluZyh0aGlzLmFwcERhdGEuaWQpXSA9IHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWVzc2FnZXNEYXRhTWFwW2Vycm9yQ29kZV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaG93Q29tcGFyaXNvbkVycm9yW1N0cmluZyh0aGlzLmFwcERhdGEuaWQpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLnNob3dDb21wYXJpc29uRXJyb3JbU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCldO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlzSFRNTCh2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcmVnZXggPSAvKDwoW14+XSspPikvaWc7XHJcbiAgICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldENoYXJhY3RlckNvdW50TWVzc2FnZSgpIHtcclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEaXNwbGF5Q2hhcmFjdGVyQ291bnQnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50LmRpc3BsYXkgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEaXNwbGF5Q2hhcmFjdGVyQ291bnQnXS5zcGxpdCgnfCcpWzBdLnRyaW0oKSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWVzc2FnZXNEYXRhTWFwW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGlzcGxheUNoYXJhY3RlckNvdW50J10uc3BsaXQoJ3wnKVswXS50cmltKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jaGFyYWN0ZXJDb3VudC50eXBlID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEaXNwbGF5Q2hhcmFjdGVyQ291bnQnXS5zcGxpdCgnfCcpWzFdLnRyaW0oKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50TWVzc2FnZURhdGEubGVmdCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWVzc2FnZXNEYXRhTWFwW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGlzcGxheUNoYXJhY3RlckNvdW50J10uc3BsaXQoJ3wnKVswXS50cmltKCldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50LnR5cGUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0Rpc3BsYXlDaGFyYWN0ZXJDb3VudCddLnNwbGl0KCd8JylbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0Rpc3BsYXlDaGFyYWN0ZXJDb3VudCddLnNwbGl0KCd8JykubGVuZ3RoID4gMSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0Rpc3BsYXlDaGFyYWN0ZXJDb3VudCddLnNwbGl0KCd8JylbMV0udHJpbSgpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy53ZmVTdGVwTG9hZGVyU2VydmljZS5tZXNzYWdlc0RhdGFNYXBbdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydEaXNwbGF5Q2hhcmFjdGVyQ291bnQnXS5zcGxpdCgnfCcpWzFdLnRyaW0oKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50LnR5cGUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0Rpc3BsYXlDaGFyYWN0ZXJDb3VudCddLnNwbGl0KCd8JylbMF0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2hhcmFjdGVyQ291bnRNZXNzYWdlRGF0YS5yaWdodCA9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWVzc2FnZXNEYXRhTWFwW3RoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnRGlzcGxheUNoYXJhY3RlckNvdW50J10uc3BsaXQoJ3wnKVsxXS50cmltKCldO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNoYXJhY3RlckNvdW50LnR5cGUgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0Rpc3BsYXlDaGFyYWN0ZXJDb3VudCddLnNwbGl0KCd8JylbMV0udHJpbSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9wZW5EaWFsb2coZGF0YTogYW55LCBpZDogYW55ID0gJycpOiB2b2lkIHtcclxuICAgICAgICBsZXQgZGlhbG9nUmVmO1xyXG4gICAgICAgIGlmIChpZCkge1xyXG4gICAgICAgICAgICBkaWFsb2dSZWYgPSB0aGlzLmRpYWxvZy5vcGVuKEFsZXJ0TW9kYWxDb21wb25lbnQsIHtcclxuICAgICAgICAgICAgICAgIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaWRcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGlhbG9nUmVmID0gdGhpcy5kaWFsb2cub3BlbihBbGVydE1vZGFsQ29tcG9uZW50LCB7XHJcbiAgICAgICAgICAgICAgICBkYXRhOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogZGF0YVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdUaGUgZGlhbG9nICcgKyBkYXRhICsgJyB3YXMgY2xvc2VkLicpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG9wZW5TYW5ja0JhcihtZXNzYWdlLCBtZXNzYWdlQ29kZTogc3RyaW5nID0gJycpIHtcclxuICAgICAgICB0aGlzLnNuYWNrQmFyLm9wZW4obWVzc2FnZSwgJ09LJywge1xyXG4gICAgICAgICAgICB2ZXJ0aWNhbFBvc2l0aW9uOiAndG9wJyxcclxuICAgICAgICAgICAgcGFuZWxDbGFzczogbWVzc2FnZUNvZGUgP1xyXG4gICAgICAgICAgICAgICAgWydtYXQtdG9vbGJhcicsICdtYXQtcHJpbWFyeScsICdlcnJvci1wb3B1cCcsIGBlcnJvci1wb3B1cC0ke21lc3NhZ2VDb2RlfWBdIDpcclxuICAgICAgICAgICAgICAgIFsnbWF0LXRvb2xiYXInLCAnbWF0LXByaW1hcnknLCAnZXJyb3ItcG9wdXAnXSxcclxuICAgICAgICAgICAgZHVyYXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZXNzYWdlVGltZU91dCcpID8gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtZXNzYWdlVGltZU91dCcpKSA6IG51bGxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBvZiB0aGUgZGF0YVxyXG4gICAgY2hlY2tGb3JBcnJheShhcnJheSwga2V5KSB7XHJcbiAgICAgICAgY29uc3QgaWRzID0gW107XHJcbiAgICAgICAga2V5ID0ga2V5LnN1YnN0cigxKTtcclxuICAgICAgICBmb3IgKGNvbnN0IGRhdGEgb2YgYXJyYXkpIHtcclxuICAgICAgICAgICAgaWRzLnB1c2godGhpcy5jaGVja0Zvck9iamVjdChkYXRhLCBrZXkpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIChpZHMpO1xyXG4gICAgfVxyXG5cclxuICAgIGNoZWNrRm9yT2JqZWN0KGRhdGEsIGtleSkge1xyXG4gICAgICAgIGlmIChrZXkuaW5kZXhPZignLicpID49IDApIHtcclxuICAgICAgICAgICAgY29uc3Qgb2JqZWN0S2V5cyA9IGtleS5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHNpbmdsZUtleSBvZiBvYmplY3RLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBvYmplY3RLZXlzLnNwbGljZShvYmplY3RLZXlzLmluZGV4T2Yoc2luZ2xlS2V5KSwgMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNoZWNrRm9yT2JqZWN0KFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGFbc2luZ2xlS2V5XSxcclxuICAgICAgICAgICAgICAgICAgICBvYmplY3RLZXlzLmxlbmd0aCA+IDAgPyBvYmplY3RLZXlzLmpvaW4oJy4nKSA6IG9iamVjdEtleXNbMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIGRhdGFba2V5XSA/IGRhdGFba2V5XSA6IGRhdGE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdldENvbmNhdGVuYXRpb24gPSAoKSA9PiB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNTaW5nbGVBcGlLZXkpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVyc1xyXG4gICAgICAgICAgICAgICAgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3QgdmFsdWVzIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMucGFyYW1ldGVyX3R5cGUgPT09ICdDb25jYXRGaWVsZHMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbmNhdGVuYXRlZFZhbHVlcyA9IHZhbHVlcy52YWx1ZS5zcGxpdCgnKycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmNhdERhdGEoeyBmaWQ6IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZCwgY29uY2F0VmFsdWVzOiBjb25jYXRlbmF0ZWRWYWx1ZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuYXBwRGF0YS5yZXNwb25zZUFwaUtleVswXSAmJiB0aGlzLmFwcERhdGEucmVzcG9uc2VBcGlLZXlbMF0uaW5jbHVkZXMoJysnKSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29uY2F0ZW5hdGVkVmFsdWVzID0gdGhpcy5hcHBEYXRhLnJlc3BvbnNlQXBpS2V5WzBdLnNwbGl0KCcrJykubWFwKHN0ciA9PiBzdHIudHJpbSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uY2F0RGF0YSh7IGZpZDogdGhpcy5maWVsZERhdGEudW5pcXVlX2lkLCBjb25jYXRWYWx1ZXM6IGNvbmNhdGVuYXRlZFZhbHVlcyB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlKCkge1xyXG4gICAgICAgIGxldCB2YWx1ZSA9ICcnO1xyXG4gICAgICAgIC8vIFRPRE86IGNoZWNrIGZ1bmN0aW9uYWxpdHlcclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSAmJiB0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5LmluY2x1ZGVzKCd8JykpIHtcclxuICAgICAgICAgICAgLy8gc2V0IGNvbmNhdGVuYXRlZCBmaWVsZCB2YWx1ZXNcclxuICAgICAgICAgICAgY29uc3QgYXBpS2V5cyA9IHRoaXMuYXBpS2V5VXRpbC5nZXRNdWx0aXBsZUFwaUtleXModGhpcy5hcGlLZXlVdGlsLmdldENvbmNhdGVuYXRlZEFwaUtleXModGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpO1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBhcGlLZXlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoa2V5LmluY2x1ZGVzKCcrJykpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGtleXMgPSBrZXkuc3BsaXQoJysnKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNpbmdsZUtleSBvZiBrZXlzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaUNhbGxiYWNrRGF0YSA9IHRoaXMucmV0dXJuVmFsdWVGcm9tQ2FsbGJhY2soc2luZ2xlS2V5KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFwaUNhbGxiYWNrRGF0YSAhPT0gbnVsbCAmJiBhcGlDYWxsYmFja0RhdGEgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0ga2V5cy5pbmRleE9mKHNpbmdsZUtleSkgPT09IDAgPyBhcGlDYWxsYmFja0RhdGEgOiB2YWwgKyAnICcgKyBhcGlDYWxsYmFja0RhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSB2YWw7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGFwaUNhbGxiYWNrRGF0YSA9IHRoaXMucmV0dXJuVmFsdWVGcm9tQ2FsbGJhY2soa2V5KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXBpQ2FsbGJhY2tEYXRhICE9PSBudWxsICYmIGFwaUNhbGxiYWNrRGF0YSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gYXBpQ2FsbGJhY2tEYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhbHVlID0gdGhpcy5yZXR1cm5WYWx1ZUZyb21DYWxsYmFjayh0aGlzLmZpZWxkRGF0YS5yZXNwb25zZV9hcGlfa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogZnVuY3Rpb24gdGhhdCByZXR1cm5zIHZhbHVlIGZyb20gc2V0IGFwaSBjYWxsYmFjayB1dGlsXHJcbiAgICAgKiBAcGFyYW0ga2V5TmFtZSB0aGUgYXBpIGtleSBuYW1lXHJcbiAgICAgKi9cclxuICAgIHJldHVyblZhbHVlRnJvbUNhbGxiYWNrKGtleU5hbWUpIHtcclxuICAgICAgICBjb25zdCBoYW5kbGVyVmFsdWUgPVxyXG4gICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGtleU5hbWUpKSA/XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5jb21tb25VdGlsLmdldEhhbmRsZXJOYW1lKGtleU5hbWUpKS52YWx1ZSA6IHt9O1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKGtleU5hbWUsIGhhbmRsZXJWYWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZUNvZGUpIHtcclxuICAgICAgICBpZiAobWVzc2FnZUNvZGUpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWVzc2FnZXNEYXRhTWFwW21lc3NhZ2VDb2RlXSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMud2ZlU3RlcExvYWRlclNlcnZpY2UubWVzc2FnZXNEYXRhTWFwW21lc3NhZ2VDb2RlXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIG9wZW4gcG9wdXAgb3Igc25hY2tiYXIgYmFzZWQgb24gdGhlIGNvbmZpZ3VyYXRpb25cclxuICAgICAqIEBwYXJhbSBmaWVsZElkIHVuaXF1ZSBpZCBvZiB0aGUgZmllbGRcclxuICAgICAqIEBwYXJhbSB2YWx1ZSB0aGUgY3VycmVudCB2YWx1ZSBvZiB0aGUgZmllbGRcclxuICAgICAqL1xyXG4gICAgc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZShmaWVsZElkLCB2YWx1ZSwgbWVzc2FnZVR5cGUgPSAnJykge1xyXG4gICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQgPT09IGZpZWxkSWQpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMubW9kYWxNZXNzYWdlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1vZGFsTWVzc2FnZXMuZm9yRWFjaChtZXNzYWdlID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1lc3NhZ2UudHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlZ2V4JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2V4ID0gdmFsdWUubWF0Y2gobmV3IFJlZ0V4cCh0aGlzLmZpZWxkRGF0YS52YWxpZGF0aW9uX3JlZ2V4KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVnZXggPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMucmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHQsIG1lc3NhZ2UuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWFuZGF0b3J5JzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTWFuZGF0b3J5ICYmIHZhbHVlID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGlhbG9nLmNsb3NlQWxsKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5vcGVuRGlhbG9nKHRoaXMucmV0dXJuTWVzc2FnZURhdGEobWVzc2FnZS5jb2RlKS5tZXNzYWdlX3RleHQsIG1lc3NhZ2UuY29kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW5kaXZpZHVhbF9maWxlX3NpemUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0b3RhbF9maWxlX3NpemUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmaWxlX3R5cGUnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1lc3NhZ2VUeXBlLnRvTG93ZXJDYXNlKCkgPT09IG1lc3NhZ2UudHlwZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaWFsb2cuY2xvc2VBbGwoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5EaWFsb2codGhpcy5yZXR1cm5NZXNzYWdlRGF0YShtZXNzYWdlLmNvZGUpLm1lc3NhZ2VfdGV4dCwgbWVzc2FnZS5jb2RlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNuYWNrQmFyTWVzc2FnZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zbmFja0Jhck1lc3NhZ2VzLmZvckVhY2gobWVzc2FnZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUudG9Mb3dlckNhc2UoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWdleCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IHZhbHVlLm1hdGNoKG5ldyBSZWdFeHAodGhpcy5maWVsZERhdGEudmFsaWRhdGlvbl9yZWdleCkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2V4ID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWNrQmFyLmRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TYW5ja0Jhcih0aGlzLnJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0LCBtZXNzYWdlLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ21hbmRhdG9yeSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc01hbmRhdG9yeSAmJiB2YWx1ZSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWNrQmFyLmRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TYW5ja0Jhcih0aGlzLnJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0LCBtZXNzYWdlLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2luZGl2aWR1YWxfZmlsZV9zaXplJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAndG90YWxfZmlsZV9zaXplJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZmlsZV90eXBlJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW52YWxpZF9maWxlX2V4dGVuc2lvbic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWVzc2FnZVR5cGUudG9Mb3dlckNhc2UoKSA9PT0gbWVzc2FnZS50eXBlLnRvTG93ZXJDYXNlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNuYWNrQmFyLmRpc21pc3MoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm9wZW5TYW5ja0Jhcih0aGlzLnJldHVybk1lc3NhZ2VEYXRhKG1lc3NhZ2UuY29kZSkubWVzc2FnZV90ZXh0LCBtZXNzYWdlLmNvZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRDb25kaXRpb25zKGNoaWxkQ29uZGl0aW9uczogQ2hpbGRDb25kaXRpb24sIHR5cGUpIHtcclxuICAgICAgICBsZXQgY2hlY2sgPSB0aGlzLnJldHVyblVuaXF1ZUlkKCkgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgaWYgKGNoaWxkQ29uZGl0aW9ucyAmJiBjaGlsZENvbmRpdGlvbnMuZXhjZXB0aW9uRmllbGRzICYmIGNoaWxkQ29uZGl0aW9ucy5leGNlcHRpb25GaWVsZHMubGVuZ3RoID4gMCAmJiBjaGlsZENvbmRpdGlvbnMuZXhjZXB0aW9uRmllbGRzLmluY2x1ZGVzKHRoaXMucmV0dXJuVW5pcXVlSWQoKSkpIHtcclxuICAgICAgICAgICAgY2hlY2sgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGNoZWNrICYmIGNoaWxkQ29uZGl0aW9ucyAmJiBjaGlsZENvbmRpdGlvbnMuaXNBY3RpdmUpIHtcclxuICAgICAgICAgICAgaWYgKGNoaWxkQ29uZGl0aW9ucy5maWVsZHMubGVuZ3RoID4gMCAmJiBjaGlsZENvbmRpdGlvbnMuZmllbGRzLmluY2x1ZGVzKHRoaXMucmV0dXJuVW5pcXVlSWQoKSkpIHtcclxuICAgICAgICAgICAgICAgIHRoaXNbdHlwZV0gPSBjaGlsZENvbmRpdGlvbnMudmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmRpdGlvbk9ialt0eXBlXSA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGRDb25kaXRpb25zLm92ZXJyaWRlQWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0eXBlLCBvYmopO1xyXG4gICAgICAgICAgICAgICAgdGhpc1t0eXBlXSA9IGNoaWxkQ29uZGl0aW9ucy52YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uT2JqW3R5cGVdID0gdHJ1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZGl0aW9uT2JqW3R5cGVdID0gZmFsc2U7IC8vIFRoZSBjaGlsZCBjb25kaXRpb25zIHdpbGwgd29ya1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGdldCBhc3NvY2lhdGVkIGZpZWxkcyBmcm9tIHRoZSBjb25kaXRpb25hbCBtYW5kYXRvcnksIGRpc3BsYXksIGVkaXRhYmxlXHJcbiAgICAgKi9cclxuICAgIGdldEFzc29jaWF0ZWRGaWVsZHMoKSB7XHJcbiAgICAgICAgY29uc3QgZGVwZW5kZW50RmllbGRzID0gW107XHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmVkaXRhYmxlX2NvbmRpdGlvbi5jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgdGhpcy5maWVsZERhdGEuZWRpdGFibGVfY29uZGl0aW9uLmNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgZGVwZW5kZW50RmllbGRzLnB1c2goY29uZGl0aW9uLmZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEuZGlzcGxheV9jb25kaXRpb24uY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgY29uZGl0aW9uIG9mIHRoaXMuZmllbGREYXRhLmRpc3BsYXlfY29uZGl0aW9uLmNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgZGVwZW5kZW50RmllbGRzLnB1c2goY29uZGl0aW9uLmZpZWxkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5maWVsZERhdGEubWFuZGF0b3J5X2NvbmRpdGlvbi5jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBjb25kaXRpb24gb2YgdGhpcy5maWVsZERhdGEubWFuZGF0b3J5X2NvbmRpdGlvbi5jb25kaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGRlcGVuZGVudEZpZWxkcy5wdXNoKGNvbmRpdGlvbi5maWVsZCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIFsuLi4gbmV3IFNldChkZXBlbmRlbnRGaWVsZHMpXTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyB0aGUgdW5pcXVlIGlkXHJcbiAgICAgKi9cclxuICAgIHJldHVyblVuaXF1ZUlkKCkge1xyXG4gICAgICAgIGNvbnN0IGlkID0gU3RyaW5nKHRoaXMuYXBwRGF0YS5pZCk7XHJcbiAgICAgICAgaWYgKGlkLnNwbGl0KCckJykubGVuZ3RoID09PSAzKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBpZC5zcGxpdCgnJCcpWzFdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiB0aGF0IHNldCBwcmltYXJ5IGtleSB2YWx1ZSB0aGF0IGNvbWVzIGZyb20gY2VsbFxyXG4gICAgICogYW5kIHJldHVybnMgdGhlIGNlbGxEYXRhXHJcbiAgICAgKiBAcGFyYW0gcHJpbWFyeUtleUluZGV4IGFuIG9iamVjdFxyXG4gICAgICovXHJcbiAgICBzZXRQcmltYXJ5S2V5KHByaW1hcnlLZXlJbmRleCkge1xyXG4gICAgICAgIGNvbnN0IGNlbGxEYXRhID0ge1xyXG4gICAgICAgICAgICB0eXBlOiAnJyxcclxuICAgICAgICAgICAgc3RlcElkOiB0aGlzLnN0ZXBJZCxcclxuICAgICAgICAgICAgdmFsdWU6IHt9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAocHJpbWFyeUtleUluZGV4KSB7XHJcbiAgICAgICAgICAgIGlmIChwcmltYXJ5S2V5SW5kZXgudmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGFwaURhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHByaW1hcnlLZXlJbmRleC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGFwaVVybDogJycsXHJcbiAgICAgICAgICAgICAgICAgICAgYXBpS2V5OiBwcmltYXJ5S2V5SW5kZXgubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogcHJpbWFyeUtleUluZGV4LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hcGlEYXRhU2VydmljZS5zZXRBcGlEYXRhKE9iamVjdC5hc3NpZ24oe30sIGFwaURhdGEpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAocHJpbWFyeUtleUluZGV4LnR5cGUgJiYgcHJpbWFyeUtleUluZGV4LmNlbGxEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBjZWxsRGF0YS50eXBlID0gcHJpbWFyeUtleUluZGV4LnR5cGU7XHJcbiAgICAgICAgICAgICAgICBjZWxsRGF0YS52YWx1ZSA9IHByaW1hcnlLZXlJbmRleC5jZWxsRGF0YTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gY2VsbERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gY3VzdG9tVmFsaWRhdGlvbkNoZWNrKHZhbHVlKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMuY3VzdG9tQ2hlY2spIHtcclxuICAgIC8vICAgICAgICAgY29uc3QgdmFsdWVcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5jdXN0b21FcnJvcnNWYWxpZGF0aW9uLmdldE1lc3NhZ2VzKHRoaXMuYXBwRGF0YS5pZCwgdmFsdWUpKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBmdW5jdGlvbiByZXR1cm5zIGFuIG9iamVjdCB3aXRoIGtleSBhbmQgdmFsdWUgd2hlcmVcclxuICAgICAqIGtleSBpcyB0aGUgbmFtZSBvZiB0aGUgZmllbGQvcGFyYW1ldGVyIHRoYXQgbmVlZHMgdG8gYmVcclxuICAgICAqIGNoYW5nZWQgb24gbGFuZ3VhZ2UgY2hhbmdlIGFuZCB2YWx1ZSBpcyB0aGUgZGF0YSB0aGF0IG5lZWRzIHRvXHJcbiAgICAgKiBiZSBzZXQgZm9yIHRoYXQgcGFyYW1cclxuICAgICAqIEBwYXJhbSB2YWx1ZTogc3RyaW5nIHRoZSBrZXkgbmFtZSB0aGF0IG5lZWRzIHRvIGJlIGNoZWNrZWQgYW5kIHNldFxyXG4gICAgICogQHBhcmFtIGRhdGE6IG9iamVjdCB0aGUgY3VycmVudCBjaGFuZ2VzIGZpZWxkIGRhdGFcclxuICAgICAqIEBwYXJhbSBjaGFuZ2VNYXA6IG9iamVjdCBhIG1hcCB0aGF0IGNoZWNrcyB3aGljaCB2YWx1ZSB3aWxsIGNoYW5nZVxyXG4gICAgICogZm9yIGEgc3BlY2lmaWMgZmllbGRcclxuICAgICAqL1xyXG4gICAgc3dpdGNoTGFuZyh2YWx1ZTogc3RyaW5nLCBkYXRhOiBvYmplY3QsIGNoYW5nZU1hcDogb2JqZWN0KTogSUxhbmdDaGFuZ2Uge1xyXG4gICAgICAgIGNvbnN0IGNoZWNrVHlwZSA9IHZhbHVlLnNwbGl0KCdbKl0nKTtcclxuICAgICAgICBpZiAoZGF0YVtjaGVja1R5cGVbMF1dKSB7XHJcbiAgICAgICAgICAgIGlmIChjaGVja1R5cGVbMV0pIHtcclxuICAgICAgICAgICAgICAgIC8vIGNoZWNraW5nIGZvciBhZGRpdGlvbmFsIHBhcmFtZXRlclxyXG4gICAgICAgICAgICAgICAgZGF0YVtjaGVja1R5cGVbMF1dLmZvckVhY2goKGVsZW1lbnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsZW1lbnQucGFyYW1ldGVyX3R5cGUgPT09IGNoZWNrVHlwZVsxXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geyBrZXk6IGNoYW5nZU1hcFt2YWx1ZV0sIHZhbDogZWxlbWVudC52YWx1ZSB9O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsga2V5OiBjaGFuZ2VNYXBbdmFsdWVdLCB2YWw6IGNoZWNrVHlwZVswXSB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoZSBleHRlcm5hbCBhcGkgb3B0aW9uIHZhbHVlIGZvciBwaWNrZXIsIG1lbnUsXHJcbiAgICAgKiBAcGFyYW0gdmFsdWUgdGhlIGFwaSBrZXkgZnJvbSB3aGljaCB0aGUgdmFsdWUgb2YgdGhlIHBpY2tlciBzaG91bGQgY29tZVxyXG4gICAgICogQHBhcmFtIGRhdGEgdGhlIGFwaSBkYXRhXHJcbiAgICAgKi9cclxuICAgIGdldEV4dGVybmFsQXBpT3B0aW9uVmFsdWUodmFsdWU6IHN0cmluZywgZGF0YSkge1xyXG4gICAgICAgIGlmICh2YWx1ZS5pbmNsdWRlcygnfHwnKSkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZUFwaWtleXMgPSB2YWx1ZS5zcGxpdCgnfHwnKS5tYXAoc3RyID0+IHN0ci50cmltKCkpO1xyXG4gICAgICAgICAgICB2YXIgdmFsdWVEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh2YWx1ZUFwaWtleXNbMF0sIGRhdGEpO1xyXG4gICAgICAgICAgICB2YXIgbGFiZWxEYXRhID0gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh2YWx1ZUFwaWtleXNbMV0sIGRhdGEpO1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZhbHVlRGF0YTogXCIsdmFsdWVEYXRhKTtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJsYWJlbERhdGE6IFwiLGxhYmVsRGF0YSk7XHJcbiAgICAgICAgICAgIGlmKHZhbHVlLmluZGV4T2YoJ1sqXScpID4gLTEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhbmRsZXJWYWx1ZURhdGEgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHZhbHVlQXBpa2V5c1swXS5zcGxpdCgnWypdJylbMF0sIGRhdGEpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlckxhYmVsRGF0YSA9IHRoaXMuc2V0QXBpQ2FsbEJhY2tEYXRhVXRpbC5zZXRBcGlDYWxsQmFja0RhdGEodmFsdWVBcGlrZXlzWzFdLnNwbGl0KCdbKl0nKVswXSwgZGF0YSk7XHJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImhhbmRsZXJWYWx1ZURhdGE6IFwiLGhhbmRsZXJWYWx1ZURhdGEpO1xyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJoYW5kbGVyTGFiZWxEYXRhOiBcIixoYW5kbGVyTGFiZWxEYXRhKTtcclxuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaGFuZGxlclZhbHVlRGF0YSkgJiYgIGhhbmRsZXJWYWx1ZURhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZURhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmKEFycmF5LmlzQXJyYXkoaGFuZGxlckxhYmVsRGF0YSkgJiYgIGhhbmRsZXJMYWJlbERhdGEubGVuZ3RoID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbERhdGEgPSBbXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBcclxuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWVEYXRhKSAmJiBBcnJheS5pc0FycmF5KGxhYmVsRGF0YSkgJiYgdmFsdWVEYXRhLmxlbmd0aCA9PT0gbGFiZWxEYXRhLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWVzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IHZhbHVlRGF0YS5sZW5ndGg7IHYrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvblZhbHVlcy5wdXNoKHZhbHVlRGF0YVt2XSArICd8fCcgKyBsYWJlbERhdGFbdl0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJvcHRpb25WYWx1ZXM6IFwiLG9wdGlvblZhbHVlcyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb3B0aW9uVmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zZXRBcGlDYWxsQmFja0RhdGFVdGlsLnNldEFwaUNhbGxCYWNrRGF0YSh2YWx1ZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGFsbCBnZXR0ZXIgYW5kIHNldHRlcnMgZ28gaGVyZVxyXG4gICAgZ2V0IHNpbmdsZUNvbmRpdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2lzU2luZ2xlQ29uZGl0aW9uJykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgc3RvcmVMYWJlbHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzdG9yZUxhYmVscycpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGlzU2luZ2xlQXBpS2V5KCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2luZ2xlQXBpS2V5JykgPT09ICd0cnVlJyA/IHRydWUgOiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXQgaGFzaEFwaUtleSgpIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hhc2hfYXBpX2tleScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGhhc1Vuc2F2ZWREYXRhKCkge1xyXG4gICAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaGFzX3Vuc2F2ZWRfZGF0YScpID09PSAndHJ1ZScgPyB0cnVlIDogZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IG1vZGFsT25QYWdlTGVhdmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdtb2RhbF9vbl9wYWdlX2xlYXZlJykgPyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbW9kYWxfb25fcGFnZV9sZWF2ZScpIDogZmFsc2U7XHJcbiAgICB9XHJcbiAgICBnZXQgY3VzdG9tQ2hlY2soKSB7XHJcbiAgICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjdXN0b21FcnJvclN0ZXBzJykgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2N1c3RvbUVycm9yU3RlcHMnKS5pbmNsdWRlcyh0aGlzLnN0ZXBJZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSUxhbmdDaGFuZ2Uge1xyXG4gICAga2V5OiBzdHJpbmc7XHJcbiAgICB2YWw6IHN0cmluZyB8IG51bWJlciB8IEFycmF5PGFueT47XHJcbn1cclxuIl19