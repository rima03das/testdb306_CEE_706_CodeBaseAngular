import { Component, Input, EventEmitter } from '@angular/core';
import { BaseView } from '../cee-base-class';
import { SessionKeyUtil } from '../../utils/session-key-util';
import { WfeEncryptionUtil } from '../../utils/wfe-encryption-util';
import { UndoRedo } from './../../utils/undo-redo.util';
import { ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';
import { QuillModule } from 'ngx-quill';
import Quill from 'quill';
import ImageResize from 'quill-image-resize';
import { Mention, MentionBlot } from "quill-mention";
import heic2any from "heic2any";
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
import * as i11 from "@angular/forms";
import * as i12 from "@angular/common";
import * as i13 from "../../directives/tooltip/tooltip.directive";
import * as i14 from "ngx-quill";
const _c0 = ["contentCtrl"];
const _c1 = ["quillFile"];
const _c2 = ["quillEditor"];
function CeeEditorComponent_div_0_ng_container_3_label_1_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "label", 15);
    i0.ɵɵtext(1);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵadvance();
    i0.ɵɵtextInterpolate(ctx_r1.fieldData.field_label);
} }
function CeeEditorComponent_div_0_ng_container_3_label_2_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelement(0, "label", 16);
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.fieldData.field_label, i0.ɵɵsanitizeHtml);
} }
function CeeEditorComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementContainerStart(0);
    i0.ɵɵtemplate(1, CeeEditorComponent_div_0_ng_container_3_label_1_Template, 2, 1, "label", 13)(2, CeeEditorComponent_div_0_ng_container_3_label_2_Template, 1, 1, "label", 14);
    i0.ɵɵelementContainerEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", !ctx_r1.isHTML(ctx_r1.fieldData.field_label));
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isHTML(ctx_r1.fieldData.field_label));
} }
function CeeEditorComponent_div_0_span_4_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "span", 17);
    i0.ɵɵtext(1, " *");
    i0.ɵɵelementEnd();
} }
function CeeEditorComponent_div_0_button_5_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "button", 18);
    i0.ɵɵtext(1, " i ");
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵproperty("tooltip", ctx_r1.fieldData.tooltip);
    i0.ɵɵattribute("aria-label", "Tooltip: " + ctx_r1.fieldData.tooltip);
} }
function CeeEditorComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 19);
    i0.ɵɵtext(1, " Field is required. ");
    i0.ɵɵelementEnd();
} }
function CeeEditorComponent_div_0_div_12_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "h6");
    i0.ɵɵtext(2, "Preview");
    i0.ɵɵelementEnd();
    i0.ɵɵelement(3, "div", 21);
    i0.ɵɵelementEnd();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("innerHTML", ctx_r1.sanitizedContent, i0.ɵɵsanitizeHtml);
} }
function CeeEditorComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    i0.ɵɵelementStart(0, "div", 20)(1, "h6");
    i0.ɵɵtext(2, "Format-Html");
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(3, "div", 22);
    i0.ɵɵtext(4);
    i0.ɵɵelementEnd()();
} if (rf & 2) {
    const ctx_r1 = i0.ɵɵnextContext(2);
    i0.ɵɵadvance(4);
    i0.ɵɵtextInterpolate(ctx_r1.inputValue);
} }
function CeeEditorComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r1 = i0.ɵɵgetCurrentView();
    i0.ɵɵelementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    i0.ɵɵtemplate(3, CeeEditorComponent_div_0_ng_container_3_Template, 3, 2, "ng-container", 5)(4, CeeEditorComponent_div_0_span_4_Template, 2, 0, "span", 6)(5, CeeEditorComponent_div_0_button_5_Template, 2, 2, "button", 7);
    i0.ɵɵelementEnd();
    i0.ɵɵelementStart(6, "div", 8)(7, "div", 9)(8, "quill-editor", 10, 0);
    i0.ɵɵlistener("dragover", function CeeEditorComponent_div_0_Template_quill_editor_dragover_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onDragOver($event)); })("dragleave", function CeeEditorComponent_div_0_Template_quill_editor_dragleave_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.enableUploadOnDragOver(false)); })("drop", function CeeEditorComponent_div_0_Template_quill_editor_drop_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.handleDrop($event)); });
    i0.ɵɵtwoWayListener("ngModelChange", function CeeEditorComponent_div_0_Template_quill_editor_ngModelChange_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); i0.ɵɵtwoWayBindingSet(ctx_r1.inputValue, $event) || (ctx_r1.inputValue = $event); return i0.ɵɵresetView($event); });
    i0.ɵɵlistener("onEditorCreated", function CeeEditorComponent_div_0_Template_quill_editor_onEditorCreated_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.getEditorInstance($event)); })("onContentChanged", function CeeEditorComponent_div_0_Template_quill_editor_onContentChanged_8_listener($event) { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onContentChanged($event)); })("onFocus", function CeeEditorComponent_div_0_Template_quill_editor_onFocus_8_listener() { i0.ɵɵrestoreView(_r1); const contentCtrl_r3 = i0.ɵɵreference(9); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.onTouched(contentCtrl_r3)); })("ngModelChange", function CeeEditorComponent_div_0_Template_quill_editor_ngModelChange_8_listener() { i0.ɵɵrestoreView(_r1); const ctx_r1 = i0.ɵɵnextContext(); return i0.ɵɵresetView(ctx_r1.updatePreview()); });
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(11, CeeEditorComponent_div_0_div_11_Template, 2, 0, "div", 11);
    i0.ɵɵelementEnd();
    i0.ɵɵtemplate(12, CeeEditorComponent_div_0_div_12_Template, 4, 1, "div", 12)(13, CeeEditorComponent_div_0_div_13_Template, 5, 1, "div", 12);
    i0.ɵɵelementEnd()()();
} if (rf & 2) {
    const contentCtrl_r3 = i0.ɵɵreference(9);
    const ctx_r1 = i0.ɵɵnextContext();
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", ctx_r1.fieldData.field_label != "");
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.isMandatory);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.hasTooltip);
    i0.ɵɵadvance(2);
    i0.ɵɵattribute("data-component-key", ctx_r1.componentKey);
    i0.ɵɵadvance();
    i0.ɵɵclassMapInterpolate3("", ctx_r1.isCustomClass && ctx_r1.fieldData.field_style ? ctx_r1.fieldData.field_style.custom_class_name : "", "  ", !ctx_r1.valid || contentCtrl_r3.invalid && ctx_r1.isMandatory && contentCtrl_r3.dirty ? "invalid" : "valid", " ", contentCtrl_r3.invalid && contentCtrl_r3.touched ? "invalid-editor" : "", "");
    i0.ɵɵpropertyInterpolate("placeholder", ctx_r1.fieldData.placeholder_text);
    i0.ɵɵtwoWayProperty("ngModel", ctx_r1.inputValue);
    i0.ɵɵproperty("modules", ctx_r1.editorModules)("required", ctx_r1.isMandatory)("disabled", !ctx_r1.isEditable);
    i0.ɵɵattribute("data-editor-key", ctx_r1.componentKey);
    i0.ɵɵadvance(3);
    i0.ɵɵproperty("ngIf", contentCtrl_r3.invalid && contentCtrl_r3.touched);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewContent);
    i0.ɵɵadvance();
    i0.ɵɵproperty("ngIf", ctx_r1.previewHtml);
} }
// import "quill-mention";
// import "quill-mention/autoregister";
let globalDefaultKeyboardBindings = null;
try {
    if (!globalDefaultKeyboardBindings) {
        const Keyboard = Quill.import('modules/keyboard');
        if (Keyboard && Keyboard.DEFAULTS && Keyboard.DEFAULTS.bindings) {
            // Safely copy keyboard bindings with validation
            const originalBindings = Keyboard.DEFAULTS.bindings;
            if (originalBindings && typeof originalBindings === 'object') {
                globalDefaultKeyboardBindings = JSON.parse(JSON.stringify(originalBindings));
            }
        }
    }
    Quill.register('modules/imageResize', ImageResize.default);
    Quill.register({ "blots/mention": MentionBlot, "modules/mention": Mention });
    const imports = Quill.imports;
    const imageResizeRegistered = !!imports['modules/imageResize'];
    const mentionRegistered = !!imports['modules/mention'];
}
catch (e) {
    console.error('❌ Error registering Quill modules:', e);
    // Reset global bindings on error to prevent corruption
    globalDefaultKeyboardBindings = null;
}
export class CeeEditorComponent extends BaseView {
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
    cdr;
    stepId;
    fieldData;
    primaryKeyIndex;
    keepState = false;
    rowData;
    mandatoryCondition;
    editableCondition;
    visibleCondition;
    rootData;
    contentCtrl;
    wfeEncryption;
    sessionKeyUtil;
    inputValue = '';
    html_id = '';
    isValid = true;
    undoRedoUtil;
    imageResize = ImageResize.default;
    isReadOnly = false;
    quillFileRef;
    quillFile;
    meQuillRef;
    sanitizedContent = '';
    previewContent = false;
    previewHtml = false;
    editorModules = {};
    allOptions = [];
    quillEditor;
    uploadOutOfEditor = false;
    searchStr = null;
    // Component instance tracking for generic blocks
    componentKey = '';
    isInitialized = false;
    lastModifiedImage = "";
    timeoutIds = [];
    // Essential functionality variables (not debug counters)
    lastEventTimestamp = 0;
    eventCallsInShortTime = 0;
    isUpdatingFieldData = false;
    debounceUpdateTimeout = null;
    isProgrammaticallySettingContent = false;
    urlDetectionTimeout = null;
    isApiSearchEnabledForMention = false;
    searchDebounceTime = 300;
    requestApiKeyForSearch = '';
    internalAPIResponseEmitter = new EventEmitter();
    currentRenderList = [];
    currentSearchTerm = '';
    mentionSearchTimeout = null;
    lastMentionSearchTerm = '';
    constructor(sanitizer, userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http, cdr) {
        super(userDataHandlerService, sharedEventsService, internalCEEEmitter, appDataService, apiDataService, wfeStepLoaderService, dialog, snackBar, http);
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
        this.cdr = cdr;
        this.wfeEncryption = new WfeEncryptionUtil();
        this.sessionKeyUtil = new SessionKeyUtil();
        this.undoRedoUtil = new UndoRedo();
        this.verifyQuillModules();
    }
    ngOnInit() {
        this.componentKey = `cee-editor-${this.fieldData?.html_id || 'unknown'}-${Date.now()}`;
        // Ensure keyboard bindings are preserved before initialization
        this.ensureKeyboardBindingsIntegrity();
        // Initialize editor modules early so they're available for template binding
        this.initializeEditorModules();
        this.init(this.stepId, this.fieldData, this.keepState, this.rowData);
        this.isInitialized = true;
    }
    setupSearchApiCallback() {
        if (this.variableObject['internalEmmitter' + this.appData.id]) {
            this.variableObject['internalEmmitter' + this.appData.id].unsubscribe();
        }
        // Subscribe to internal API response emitter
        this.variableObject['internalEmmitter' + this.appData.id] = this.internalAPIResponseEmitter.subscribe((res) => {
            // Process the API response and update mention list
            this.handleApiMentionResponse(res);
        });
    }
    ngOnDestroy() {
        this.timeoutIds.forEach(id => clearTimeout(id));
        this.timeoutIds = [];
        // Clear URL detection timeout
        if (this.urlDetectionTimeout) {
            clearTimeout(this.urlDetectionTimeout);
            this.urlDetectionTimeout = null;
        }
        // Clear debounce timeout
        if (this.debounceUpdateTimeout) {
            clearTimeout(this.debounceUpdateTimeout);
            this.debounceUpdateTimeout = null;
        }
        if (this.variableObject['internalEmmitter' + this.appData.id]) {
            this.variableObject['internalEmmitter' + this.appData.id].unsubscribe();
        }
        if (this.meQuillRef) {
            try {
                this.cleanupMentionModule();
                this.meQuillRef.off('text-change');
                this.meQuillRef.off('selection-change');
                this.meQuillRef.off('editor-change');
                const toolbar = this.meQuillRef.getModule('toolbar');
                if (toolbar) {
                    if (toolbar.container) {
                        toolbar.container.innerHTML = '';
                    }
                    if (toolbar.handlers) {
                        toolbar.handlers = {};
                    }
                }
                this.meQuillRef.setContents([]);
                const editorElement = this.meQuillRef.root;
                if (editorElement && editorElement.parentNode) {
                    editorElement.innerHTML = '';
                }
            }
            catch (e) {
                console.warn('Error during Quill cleanup:', e);
            }
            this.meQuillRef = null;
        }
        this.quillEditor = null;
        this.contentCtrl = null;
        this.quillFileRef = null;
        this.editorModules = {};
        this.inputValue = '';
        this.html_id = '';
        this.searchStr = null;
        this.undoRedoUtil = null;
        this.wfeEncryption = null;
        this.sessionKeyUtil = null;
    }
    async onViewDataInit() {
        this.html_id = this.fieldData.html_id;
        this.searchStr = null;
        if (this.fieldValue) {
            this.inputValue = this.fieldValue;
        }
        if (this.rowData) {
            if (this.rowData.hasOwnProperty('value')) {
                this.updateFieldData(this.inputValue);
            }
        }
        this.previewContent = this.additionalParameter['CEE_editor_preview'] === "true" ? true : false;
        this.previewHtml = this.additionalParameter['CEE_editor_preview_html'] === "true" ? true : false;
        this.requestApiKeyForSearch = this.additionalParameter['CEE_Search_Request_api_Key_For_Search_input'] || '';
        if (this.requestApiKeyForSearch) {
            this.updateDataOnChange('');
        }
        // Re-initialize editor modules in case additional parameters changed
        this.initializeEditorModules();
        if (this.rootData && this.rootData['FieldErrorFunctions']) {
            this.rootData['FieldErrorFunctions'][this.fieldData.html_id] = () => {
                // Focus on the quill editor instead of a non-existent DOM element
                if (this.quillEditor && this.quillEditor.quillEditor) {
                    this.quillEditor.quillEditor.focus();
                }
            };
        }
        // Note: Don't create manual Quill instance here - let quill-editor component handle it
        // The meQuillRef will be set in getEditorInstance() callback
    }
    /**
     * Validates and normalizes mention items to ensure consistent structure
     */
    validateMentionItem(item, index, type = 'item') {
        if (!item || typeof item !== 'object') {
            return {
                id: index + 1,
                value: `Invalid ${type.charAt(0).toUpperCase() + type.slice(1)}`
            };
        }
        const normalizedItem = {
            id: item.id !== undefined && item.id !== null ? item.id : index + 1,
            value: item.value && typeof item.value === 'string' && item.value.length > 0
                ? item.value
                : `${type.charAt(0).toUpperCase() + type.slice(1)} ${index + 1}`
        };
        if (typeof normalizedItem.value !== 'string' || normalizedItem.value.length === 0) {
            normalizedItem.value = `Default ${type.charAt(0).toUpperCase() + type.slice(1)} ${index + 1}`;
        }
        return normalizedItem;
    }
    /**
     * Safely renders list with error handling and fallbacks
     */
    safeRenderList(renderList, items, searchTerm, type = 'values') {
        const normalizedItems = items.map((item, index) => this.validateMentionItem(item, index, type === 'values' ? 'item' : 'match'));
        this.safeExecute(() => {
            renderList(normalizedItems, searchTerm);
            this.addSafeTimeout(() => this.applyMentionStylingFixes(), 100);
        }, `Failed to render normalized ${type} list`, () => {
            this.renderFallbackList(renderList, searchTerm, type);
        });
    }
    /**
     * Renders fallback list when main rendering fails
     */
    renderFallbackList(renderList, searchTerm, type) {
        this.safeExecute(() => {
            const safeFallbackList = [
                { id: 1, value: `Safe ${type === 'matches' ? 'Match' : 'Item'} 1` },
                { id: 2, value: `Safe ${type === 'matches' ? 'Match' : 'Item'} 2` }
            ];
            renderList(safeFallbackList, searchTerm);
        }, `Even safe fallback render failed`);
    }
    /**
     * Validates entry data for search operations
     */
    isValidEntry(entry, index) {
        if (!entry ||
            !entry.value ||
            typeof entry.value !== 'string' ||
            entry.value.length === 0) {
            return false;
        }
        return true;
    }
    /**
     * Safe array validation utility
     */
    isValidArray(arr, name = 'array') {
        if (!Array.isArray(arr)) {
            return false;
        }
        return true;
    }
    /**
     * Safe array validation with length check
     */
    isNonEmptyArray(arr, name = 'array') {
        return this.isValidArray(arr, name) && arr.length > 0;
    }
    /**
     * Utility for managing timeouts safely
     */
    addSafeTimeout(callback, delay) {
        const timeoutId = setTimeout(callback, delay);
        this.timeoutIds.push(timeoutId);
    }
    /**
     * Utility method to clean up mention module references and event listeners
     */
    cleanupMentionModule(quillInstance) {
        const instance = quillInstance || this.meQuillRef;
        if (!instance)
            return;
        try {
            const mentionModule = instance.getModule('mention');
            if (mentionModule) {
                // Clean up mention event listeners and references
                const propertiesToCleanup = [
                    'onContainerMouseDown',
                    'selectHandler',
                    'mentionList',
                    'values',
                    'existingValues'
                ];
                propertiesToCleanup.forEach(prop => {
                    if (mentionModule[prop]) {
                        if (prop === 'mentionList' || prop === 'values' || prop === 'existingValues') {
                            mentionModule[prop] = null;
                        }
                        else {
                            delete mentionModule[prop];
                        }
                    }
                });
            }
        }
        catch (error) {
            console.error('Error during mention module cleanup:', error);
        }
    }
    /**
     * Try-catch wrapper for safe execution
     */
    safeExecute(operation, errorMessage, fallback) {
        try {
            return operation();
        }
        catch (error) {
            if (typeof fallback === 'function') {
                return fallback();
            }
            return fallback;
        }
    }
    /**
     * Validates and ensures data is array with non-empty string values
     */
    validateDataArray(data, context) {
        if (!this.isValidArray(data, context)) {
            return [];
        }
        return data.filter((item, index) => {
            if (!item || typeof item !== 'object') {
                return false;
            }
            if (!item.hasOwnProperty('value') || !item.value) {
                return false;
            }
            if (typeof item.value !== 'string') {
                this.safeExecute(() => {
                    item.value = String(item.value);
                }, `${context}: Failed to convert value to string at index ${index}`);
                if (typeof item.value !== 'string') {
                    return false;
                }
            }
            if (item.value.length === 0) {
                return false;
            }
            return true;
        });
    }
    /**
     * Utility to check if Quill modules are properly registered (for debugging)
     */
    verifyQuillModules() {
        try {
            const imports = Quill.imports;
            const hasImageResize = !!imports['modules/imageResize'];
            const hasMention = !!imports['modules/mention'];
            return hasImageResize && hasMention;
        }
        catch (e) {
            return false;
        }
    }
    /**
     * Validates keyboard binding structure to prevent errors
     */
    validateKeyboardBinding(binding) {
        if (!binding || typeof binding !== 'object') {
            return false;
        }
        // Check if prefix/suffix are properly formed (should be RegExp or undefined)
        if (binding.prefix && typeof binding.prefix !== 'object') {
            return false;
        }
        if (binding.suffix && typeof binding.suffix !== 'object') {
            return false;
        }
        // Ensure prefix/suffix are not empty objects (which cause the .test error)
        if (binding.prefix && Object.keys(binding.prefix).length === 0 && !binding.prefix.test) {
            delete binding.prefix;
        }
        if (binding.suffix && Object.keys(binding.suffix).length === 0 && !binding.suffix.test) {
            delete binding.suffix;
        }
        return true;
    }
    /**
     * Ensures keyboard bindings integrity at the global level
     */
    ensureKeyboardBindingsIntegrity() {
        try {
            if (globalDefaultKeyboardBindings) {
                const Keyboard = Quill.import('modules/keyboard');
                if (Keyboard && Keyboard.DEFAULTS && Keyboard.DEFAULTS.bindings) {
                    // Validate and restore original bindings if they've been modified
                    const cleanBindings = JSON.parse(JSON.stringify(globalDefaultKeyboardBindings));
                    // Validate each binding category
                    for (const key in cleanBindings) {
                        if (Array.isArray(cleanBindings[key])) {
                            cleanBindings[key] = cleanBindings[key].filter((binding) => this.validateKeyboardBinding(binding));
                        }
                    }
                    Keyboard.DEFAULTS.bindings = cleanBindings;
                }
            }
        }
        catch (error) {
            console.warn('⚠️ Could not restore global keyboard bindings:', error);
        }
    }
    /**
     * Forces restoration of keyboard bindings to ensure consistent Enter key behavior
     */
    forceKeyboardBindingRestoration(editor) {
        try {
            const keyboard = editor.getModule('keyboard');
            if (keyboard && keyboard.bindings) {
                // Restore the correct Enter key binding order
                const correctEnterBindings = [
                    {
                        key: 'Enter'
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['blockquote'],
                        empty: true
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['list'],
                        empty: true
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: {
                            'list': 'checked'
                        }
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['header']
                    },
                    {
                        key: 'Enter',
                        shiftKey: null,
                        format: ['table']
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['code-block']
                    },
                    {
                        key: 'Enter',
                        shiftKey: null
                    },
                    {
                        key: 'Enter',
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null
                    }
                ];
                // Validate and force overwrite the Enter bindings
                if (keyboard.bindings) {
                    const validatedBindings = correctEnterBindings.filter(binding => this.validateKeyboardBinding(binding));
                    keyboard.bindings.Enter = validatedBindings;
                    keyboard.bindings[13] = validatedBindings;
                }
            }
        }
        catch (error) {
            console.error('❌ Error forcing keyboard binding restoration:', error);
        }
    }
    /**
     * Debug method to log keyboard bindings structure
     */
    debugKeyboardBindings(editor) {
        try {
            const keyboard = editor.getModule('keyboard');
            if (keyboard && keyboard.bindings) {
                if (keyboard.bindings.Enter || keyboard.bindings[13]) {
                    const enterBindings = keyboard.bindings.Enter || keyboard.bindings[13];
                }
            }
        }
        catch (error) {
            console.error('🐛 Error debugging keyboard bindings:', error);
        }
    }
    /**
     * Restores default keyboard bindings to ensure consistent Enter key behavior
     */
    restoreDefaultKeyboardBindings() {
        if (globalDefaultKeyboardBindings) {
            try {
                const cleanBindings = JSON.parse(JSON.stringify(globalDefaultKeyboardBindings));
                // Validate all bindings before returning
                for (const key in cleanBindings) {
                    if (Array.isArray(cleanBindings[key])) {
                        cleanBindings[key] = cleanBindings[key].filter((binding) => this.validateKeyboardBinding(binding));
                    }
                }
                return {
                    bindings: cleanBindings
                };
            }
            catch (error) {
                console.warn('⚠️ Error processing global keyboard bindings, using fallback:', error);
            }
        }
        // Fallback to safe default bindings
        // Comprehensive keyboard configuration with proper Enter key handling
        return {
            bindings: {
                'Enter': [
                    {
                        key: 'Enter'
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['blockquote'],
                        empty: true
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['list'],
                        empty: true
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: {
                            'list': 'checked'
                        }
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['header']
                    },
                    {
                        key: 'Enter',
                        shiftKey: null,
                        format: ['table']
                    },
                    {
                        key: 'Enter',
                        collapsed: true,
                        format: ['code-block']
                    },
                    {
                        key: 'Enter',
                        shiftKey: null
                    },
                    {
                        key: 'Enter',
                        metaKey: null,
                        ctrlKey: null,
                        altKey: null
                    }
                ]
            }
        };
    }
    /**
     * Creates default toolbar configuration
     */
    createDefaultToolbarConfig() {
        return {
            toolbar: {
                container: [
                    ['bold', 'italic', 'underline'],
                    ['blockquote', 'code-block', 'code'],
                    [{ 'header': 1 }, { 'header': 2 }],
                    [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                    [{ 'script': 'sub' }, { 'script': 'super' }],
                    [{ 'indent': '-1' }, { 'indent': '+1' }],
                    [{ 'direction': 'rtl' }],
                    [{ 'size': ['small', false, 'large', 'huge'] }],
                    [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                    [{ 'color': [] }, { 'background': [] }],
                    [{ 'font': [] }],
                    [{ 'align': [] }],
                    ['clean'],
                    ['link', 'image'] // No video in default configuration
                ],
                handlers: {
                    image: () => this.selectImage(),
                    link: (value) => this.handleLinkClick(value)
                }
            },
            clipboard: {
                magicPaste: false,
                matchVisual: false
            },
            keyboard: this.restoreDefaultKeyboardBindings(),
            imageResize: true
        };
    }
    /**
     * Creates custom toolbar configuration from additionalParameter
     */
    createCustomToolbarConfig() {
        const jsonString = this.additionalParameter['CEE_editor_options'].replace(/\\"/g, '"');
        let obj = JSON.parse(jsonString);
        obj.handlers = {
            image: () => this.selectImage(),
            link: (value) => this.handleLinkClick(value)
        };
        if (obj.container) {
            obj.container = obj.container.map((group) => {
                if (Array.isArray(group)) {
                    return group.filter((item) => item !== 'video');
                }
                return group;
            });
        }
        return {
            toolbar: {
                ...obj
            },
            clipboard: {
                magicPaste: false,
                matchVisual: false
            },
            keyboard: this.restoreDefaultKeyboardBindings()
        };
    }
    /**
     * Creates mention configuration for tagging functionality
     */
    createMentionConfig() {
        return {
            allowedChars: /^[A-Za-z\sÅÄÖåäö0-9]*$/,
            mentionDenotationChars: ["@", "#"],
            showDenotationChar: true,
            isolateCharacter: false,
            fixMentionsToQuill: true,
            positioningStrategy: 'absolute',
            defaultMenuOrientation: 'bottom',
            // selectKeys: [13, 9],
            minChars: 0,
            maxChars: 50,
            renderLoading: () => 'Loading...',
            linkTarget: '_blank',
            listItemClass: 'ql-mention-list-item',
            mentionContainerClass: 'ql-mention-list-container',
            mentionListClass: 'ql-mention-list',
            blotName: 'mention',
            hoverClass: 'selected',
            selectClass: 'selected',
            spaceAfterInsert: true,
            stripHTML: true,
            dataAttributes: ['id', 'value'],
            onSelect: (item, insertItem) => this.handleMentionSelect(item, insertItem),
            renderItem: (item, searchTerm) => this.renderMentionItem(item, searchTerm),
            source: (searchTerm, renderList, mentionChar) => this.handleMentionSource(searchTerm, renderList, mentionChar),
            _uniqueKey: `mention_${Date.now()}_${Math.random()}_${this.componentKey || 'default'}`
        };
    }
    /**
     * Handles mention item selection
     */
    handleMentionSelect(item, insertItem) {
        if (!item || typeof item !== 'object' || !item.value || typeof item.value !== 'string') {
            item = { id: 'fallback', value: 'Unknown Mention' };
        }
        this.searchStr = null;
        insertItem(item);
    }
    /**
     * Renders mention item display
     */
    renderMentionItem(item, searchTerm) {
        if (!item || typeof item !== 'object') {
            return 'Invalid Item';
        }
        const displayValue = item.value && typeof item.value === 'string' && item.value.length > 0
            ? item.value
            : 'Unknown Item';
        const itemDisplay = `👤 ${displayValue}`;
        return itemDisplay;
    }
    /**
     * Handles mention source data retrieval and filtering
     */
    handleMentionSource(searchTerm, renderList, mentionChar) {
        this.safeExecute(() => {
            // Validate renderList function
            if (typeof renderList !== 'function') {
                return;
            }
            const safeSearchTerm = searchTerm === null || searchTerm === undefined ? '' : String(searchTerm);
            const safeMentionChar = mentionChar === null || mentionChar === undefined ? '@' : String(mentionChar);
            // Reset searchStr for fresh processing
            if (safeMentionChar === '@' || safeMentionChar === '#') {
                this.searchStr = null;
                this.lastMentionSearchTerm = ' ';
            }
            // If API search is enabled, handle API-based search
            if (this.isApiSearchEnabledForMention) {
                // Check if search term has actually changed
                if (this.lastMentionSearchTerm === safeSearchTerm) {
                    return; // Skip duplicate calls with same search term
                }
                if (this.mentionSearchTimeout) {
                    clearTimeout(this.mentionSearchTimeout);
                }
                // Store current render list and search term
                this.currentRenderList = renderList;
                this.currentSearchTerm = safeSearchTerm;
                this.lastMentionSearchTerm = safeSearchTerm;
                // Show loading state immediately
                renderList([{ id: 'loading', value: 'Loading...' }], safeSearchTerm);
                // Debounce the API call
                this.mentionSearchTimeout = setTimeout(() => {
                    this.handleApiBasedMentionSearch(safeSearchTerm, renderList, safeMentionChar);
                }, this.searchDebounceTime); // 300ms debounce delay
                this.timeoutIds.push(this.mentionSearchTimeout);
                return;
            }
            let values = this.getMentionValues();
            if (!this.isValidArray(values, 'mention values')) {
                values = [];
            }
            values = this.sanitizeMentionValues(values);
            if (values.length === 0) {
                this.handleEmptyMentionValues(renderList, safeSearchTerm);
                return;
            }
            const isEmptySearch = !safeSearchTerm || safeSearchTerm.length === 0 || safeSearchTerm.trim() === '';
            if (isEmptySearch) {
                this.handleEmptySearch(values, renderList, safeSearchTerm);
            }
            else {
                this.handleFilteredSearch(values, renderList, safeSearchTerm);
            }
            this.searchStr = safeSearchTerm;
        }, 'CRITICAL ERROR in mention source function', () => {
            this.renderEmergencyFallback(renderList);
        });
    }
    handleApiBasedMentionSearch(searchTerm, renderList, mentionChar) {
        this.currentRenderList = renderList;
        this.currentSearchTerm = searchTerm;
        this.updateDataOnChange(searchTerm);
        setTimeout(() => {
            this.onComponentEvent('OnKeyUp', {
                internalAPIResponseEmitter: this.internalAPIResponseEmitter
            });
        }, 100);
    }
    updateDataOnChange(term) {
        const apiData = {
            id: this.requestApiKeyForSearch,
            apiUrl: '',
            apiKey: this.requestApiKeyForSearch,
            value: term
        };
        this.apiDataService.setApiData(Object.assign({}, apiData));
    }
    /**
     * Gets mention values from allOptions or external API
     */
    getMentionValues() {
        let values = this.allOptions || [];
        if (values.length === 0 && this.additionalParameter['externalApiOptionValue']) {
            const externalOptions = this.additionalParameter['externalApiOptionValue'] || [];
            if (this.isNonEmptyArray(externalOptions, 'external options')) {
                values = externalOptions;
                this.allOptions = values;
            }
        }
        // if (values.length === 0) {
        //     if (this.refreshMentionData() && this.isNonEmptyArray(this.allOptions, 'refreshed options')) {
        //         values = this.allOptions;
        //     }
        // }
        return values;
    }
    /**
     * Sanitizes mention values array
     */
    sanitizeMentionValues(values) {
        return this.validateDataArray(values, 'mention values');
    }
    /**
     * Handles empty mention values scenario
     */
    handleEmptyMentionValues(renderList, searchTerm) {
        try {
            renderList([], searchTerm);
        }
        catch (e) {
            console.error('Failed to render empty list:', e);
        }
    }
    /**
     * Handles empty search (show all values)
     */
    handleEmptySearch(values, renderList, searchTerm) {
        try {
            const valueStrings = values.map(v => v && v.value && typeof v.value === 'string' ? `"${v.value}"` : '"Invalid"').join(', ');
        }
        catch (e) {
            console.warn('Error creating value string:', e);
        }
        this.safeRenderList(renderList, values, searchTerm, 'values');
    }
    /**
     * Handles filtered search (search with term)
     */
    handleFilteredSearch(values, renderList, searchTerm) {
        const matches = [];
        values.forEach((entry, index) => {
            try {
                if (this.isValidEntry(entry, index)) {
                    const entryValue = entry.value.toLowerCase();
                    const searchTermLower = searchTerm.toLowerCase();
                    if (entryValue.indexOf(searchTermLower) !== -1) {
                        matches.push(entry);
                    }
                }
            }
            catch (error) {
                console.error(`Error processing entry at index ${index}:`, error);
            }
        });
        if (matches.length > 0) {
            try {
                const matchStrings = matches.map(m => m && m.value && typeof m.value === 'string' ? `"${m.value}"` : '"Invalid"').join(', ');
            }
            catch (e) {
                console.warn('Error creating match string:', e);
            }
        }
        this.safeRenderList(renderList, matches, searchTerm, 'matches');
    }
    /**
     * Renders emergency fallback when everything fails
     */
    renderEmergencyFallback(renderList) {
        try {
            const emergencyFallback = [
                { id: 1, value: 'Emergency Item 1' },
                { id: 2, value: 'Emergency Item 2' }
            ];
            renderList(emergencyFallback, '');
        }
        catch (fallbackError) {
            try {
                renderList([], '');
            }
            catch (lastResortError) {
                console.error('Complete failure - cannot render anything:', lastResortError);
            }
        }
    }
    selectImage() {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.click();
        input.onchange = async () => {
            const file = input.files?.[0];
            if (file) {
                let fileToCompress = file;
                if (this.isHEIC(file)) {
                    try {
                        fileToCompress = await this.convertHEICToPNG(file);
                    }
                    catch (error) {
                        console.error(error);
                        return;
                    }
                }
                const compressedImage = await this.compressImage(fileToCompress, 800, 600, 0.6);
                const reader = new FileReader();
                reader.readAsDataURL(compressedImage);
                reader.onload = () => {
                    const quillInstance = this.meQuillRef;
                    if (!quillInstance) {
                        return;
                    }
                    const range = quillInstance.getSelection();
                    if (!range) {
                        quillInstance.insertEmbed(quillInstance.getLength(), 'image', reader.result);
                        this.updateEditorField();
                    }
                    else {
                        quillInstance.insertEmbed(range.index, 'image', reader.result);
                        this.updateEditorField();
                    }
                };
            }
        };
    }
    isHEIC(file) {
        return (file.type === "image/heic" || file.name.split('.').pop().toLowerCase() === "heic"); // Check MIME type (it might be available in some browsers)
    }
    convertHEICToPNG(file) {
        return new Promise((resolve, reject) => {
            heic2any({
                blob: file,
                toType: "image/png",
            }).then((convertedBlob) => {
                const pngFile = new File([convertedBlob], file.name.replace(/\.heic$/i, ".png"), {
                    type: "image/png",
                    lastModified: new Date().getTime()
                });
                resolve(pngFile); // Resolve the promise with the pngFile
            }).catch((error) => {
                console.error("Error converting HEIC to PNG:", error);
                reject(error); // Reject the promise in case of an error
            });
        });
    }
    updateEditorField() {
        // after image upload need trigger change
        const editor = this.quillEditor && this.quillEditor.quillEditor;
        if (editor) {
            editor.insertText(editor.getLength() - 1, '', 'user');
            // Clear clipboard after editor field update
            // setTimeout(() => {
            //     this.clearClipboard();
            // }, 100);
        }
    }
    async compressImage(file, maxWidth, maxHeight, quality) {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target?.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    let width = img.width;
                    let height = img.height;
                    // Resize logic
                    if (width > maxWidth) {
                        height = (maxWidth / width) * height;
                        width = maxWidth;
                    }
                    if (height > maxHeight) {
                        width = (maxHeight / height) * width;
                        height = maxHeight;
                    }
                    canvas.width = width;
                    canvas.height = height;
                    const ctx = canvas.getContext('2d');
                    ctx?.drawImage(img, 0, 0, width, height);
                    // Convert canvas to Blob
                    canvas.toBlob((blob) => {
                        if (blob) {
                            resolve(new File([blob], file.name, { type: file.type, lastModified: Date.now() }));
                        }
                    }, file.type, quality);
                };
            };
        });
    }
    updatePreview() {
        this.sanitizedContent = this.sanitizer.bypassSecurityTrustHtml(this.inputValue);
    }
    /**
     * Initialize editor modules early for template binding
     */
    initializeEditorModules() {
        this.editorModules = {}; // Reset to completely empty object
        // Use utility methods for toolbar configuration
        if (this.additionalParameter['CEE_editor_options']) {
            this.editorModules = this.createCustomToolbarConfig();
        }
        else {
            this.editorModules = this.createDefaultToolbarConfig();
        }
        this.isApiSearchEnabledForMention = this.additionalParameter['CEE_Enable_API_Search_For_Mention'] && this.additionalParameter['CEE_Enable_API_Search_For_Mention'] === 'true';
        this.searchDebounceTime = this.additionalParameter['CEE_Search_Debounce_Time'] ? parseInt(this.additionalParameter['CEE_Search_Debounce_Time']) : 300;
        let ceeTagging = this.additionalParameter['CEE_tagging'] && this.additionalParameter['CEE_tagging'] === "true" ? true : false;
        if (this.isApiSearchEnabledForMention && ceeTagging) {
            this.setupSearchApiCallback();
        }
        if (ceeTagging) {
            this.setupMentionSystem();
        }
        // Trigger change detection to update template binding
        this.cdr.detectChanges();
    }
    /**
     * Sets up the mention system for tagging functionality
     */
    setupMentionSystem() {
        if (!this.isNonEmptyArray(this.allOptions, 'mention options')) {
            this.allOptions = [];
            this.loadMentionOptions();
        }
        // Ensure we have valid mention options
        if (!this.isValidArray(this.allOptions, 'mention options')) {
            this.allOptions = [];
        }
        // Deep validate each option
        this.allOptions = this.allOptions.map((option, index) => {
            if (!option || typeof option !== 'object') {
                return { id: index + 1, value: `Option ${index + 1}` };
            }
            return {
                id: option.id !== undefined && option.id !== null ? option.id : index + 1,
                value: option.value && typeof option.value === 'string' && option.value.length > 0
                    ? option.value
                    : `Option ${index + 1}`
            };
        });
        this.editorModules['mention'] = this.createMentionConfig();
    }
    /**
     * Loads mention options from external API
     */
    loadMentionOptions() {
        if (this.additionalParameter['externalApiOptionValue']) {
            this.addSafeTimeout(() => {
                this.safeExecute(() => {
                    var runtimeDropDownData = this.apiDataService.getApiDataByHandler(this.additionalParameter['externalApiOptionValue']);
                    if (this.isNonEmptyArray(runtimeDropDownData, 'runtime dropdown data')) {
                        this.allOptions = runtimeDropDownData;
                    }
                    else {
                        const externalOptions = this.additionalParameter['externalApiOptionValue'];
                        if (this.isNonEmptyArray(externalOptions, 'external options')) {
                            this.allOptions = externalOptions;
                        }
                    }
                }, 'Error loading API data asynchronously');
            }, 500);
            // Also try immediate sync call in case data is already available
            this.safeExecute(() => {
                var immediateTryData = this.apiDataService.getApiDataByHandler(this.additionalParameter['externalApiOptionValue']);
                if (this.isNonEmptyArray(immediateTryData, 'immediate API data')) {
                    this.allOptions = immediateTryData;
                }
            }, 'Immediate API call not ready, will try async');
        }
    }
    getEditorInstance(editor) {
        // Set the meQuillRef to the editor instance provided by quill-editor component
        this.meQuillRef = editor;
        // Ensure modules are properly configured before proceeding
        if (!this.editorModules || Object.keys(this.editorModules).length === 0) {
            this.initializeEditorModules();
        }
        this.forceKeyboardBindingRestoration(editor);
        this.debugKeyboardBindings(editor);
        this.addSafeTimeout(() => {
            this.safeExecute(() => {
                const toolbar = editor.getModule('toolbar');
                if (toolbar && toolbar.container) {
                    const videoButtons = toolbar.container.querySelectorAll('.ql-video');
                    if (videoButtons.length > 0) {
                        videoButtons.forEach((btn) => {
                            btn.remove();
                        });
                    }
                }
            }, 'Error checking for video buttons');
        }, 100);
        if (this.additionalParameter['CEE_tagging'] === "true") {
            const mentionModule = editor.getModule('mention');
        }
        // Load existing content if available
        if (this.inputValue && this.inputValue.trim() !== '') {
            // Set flag to prevent event loops during programmatic content setting
            this.isProgrammaticallySettingContent = true;
            this.meQuillRef.clipboard.dangerouslyPasteHTML(this.inputValue);
            setTimeout(() => {
                if (this.meQuillRef) {
                    const length = this.meQuillRef.getLength();
                    this.meQuillRef.setSelection(length - 1, 0);
                    // Clear clipboard after content is loaded
                    // this.clearClipboard();
                    // Reset flag after content is set
                    setTimeout(() => {
                        this.isProgrammaticallySettingContent = false;
                    }, 100);
                }
            }, 100);
        }
        setTimeout(() => {
            const mentionModule = editor.getModule('mention');
            if (!mentionModule && this.additionalParameter['CEE_tagging'] === "true") {
                try {
                    const availableModules = [];
                    ['toolbar', 'keyboard', 'history', 'clipboard', 'uploader', 'mention', 'imageResize'].forEach(moduleName => {
                        const module = editor.getModule(moduleName);
                        if (module) {
                            availableModules.push(moduleName);
                        }
                    });
                }
                catch (e) {
                    console.warn('⚠️ Error checking available modules:', e);
                }
                try {
                    const MentionClass = Quill.imports['modules/mention'];
                    if (MentionClass) {
                        const mentionConfig = this.editorModules['mention'];
                        const mentionInstance = new MentionClass(editor, mentionConfig);
                    }
                }
                catch (e) {
                    console.error('❌ Failed to manually instantiate mention module:', e);
                }
            }
            if (mentionModule && this.additionalParameter['CEE_tagging'] === "true") {
                // Force reset mention module to ensure denotation chars work
                const mentionConfig = this.editorModules['mention'];
                if (mentionConfig) {
                    mentionModule.mentionDenotationChars = mentionConfig.mentionDenotationChars;
                    mentionModule.allowedChars = mentionConfig.allowedChars;
                    // Force re-bind the source function
                    if (mentionConfig.source) {
                        mentionModule.options.source = mentionConfig.source;
                    }
                }
                setTimeout(() => {
                    this.applyMentionStylingFixes();
                }, 1000);
            }
        }, 500); // Increased timeout to ensure module is fully loaded
        // Add keyboard event listener to debug mention character detection
        editor.root.addEventListener('input', (event) => {
            const text = editor.getText();
            const selection = editor.getSelection();
            if (selection) {
                const currentChar = text.charAt(selection.index - 1);
            }
        });
        // Auto-detect URLs and convert to links - OPTIMIZED to reduce cursor jumping  
        editor.on('text-change', (delta, oldDelta, source) => {
            // Check for excessive text-change events
            if (this.detectExcessiveEvents('text-change')) {
                // Don't return here as text-change is critical, but log the issue  
            }
            // Skip URL detection if we're programmatically setting content
            if (this.isProgrammaticallySettingContent) {
                return;
            }
            if (source === 'user') {
                const currentSelection = editor.getSelection();
                // Clear previous timeout to debounce
                if (this.urlDetectionTimeout) {
                    clearTimeout(this.urlDetectionTimeout);
                }
                const text = editor.getText();
                const hasUrl = /(https?:\/\/[^\s]+|www\.[^\s]+)/i.test(text);
                if (hasUrl && currentSelection) {
                    // Only detect URLs if user has stopped typing for a moment
                    this.urlDetectionTimeout = setTimeout(() => {
                        // Check if cursor is still in a reasonable position
                        const newSelection = editor.getSelection();
                        if (newSelection && currentSelection) {
                            // Only auto-detect if cursor hasn't moved significantly or if it's at the end of a potential URL
                            const textBeforeCursor = text.substring(0, newSelection.index);
                            const isAtEndOfUrl = /[^\s]$/.test(textBeforeCursor) &&
                                /(https?:\/\/[^\s]+|www\.[^\s]+)$/.test(textBeforeCursor);
                            if (Math.abs(newSelection.index - currentSelection.index) < 3 || isAtEndOfUrl) {
                                this.autoDetectLinks(this.meQuillRef);
                            }
                        }
                    }, 1000); // Longer delay to allow user to finish typing
                }
            }
        });
        // Handle paste events specifically with logging
        editor.root.addEventListener('paste', (event) => {
            event.preventDefault();
            // Clear clipboard after preventing default paste
            // this.clearClipboard();
        });
        // Handle input events for better coverage
        editor.root.addEventListener('input', (event) => {
            const selectionBeforeInput = editor.getSelection();
        });
        // For handling Drag n Drop inside Quill Editor
        editor.root.addEventListener('drop', (event) => {
            event.preventDefault();
            event.stopPropagation();
            this.enableUploadOnDragOver(false);
            if (event.dataTransfer && event.dataTransfer.files.length > 0) {
                const validFiles = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('image/'));
                if (validFiles.length == 0)
                    return;
                const timeoutId = setTimeout(() => {
                    this.setFilesToEditor(validFiles);
                }, 100);
                this.timeoutIds.push(timeoutId);
            }
        }, true);
    }
    autoDetectLinks(editor) {
        const delta = editor.getContents();
        // Store current cursor position
        const currentSelection = editor.getSelection();
        const currentIndex = currentSelection ? currentSelection.index : editor.getLength() - 1;
        // Track position in the editor
        let currentPos = 0;
        let hasChanges = false;
        // Process each operation in the delta
        if (delta && delta.ops) {
            for (let i = 0; i < delta.ops.length; i++) {
                const op = delta.ops[i];
                if (op.insert && typeof op.insert === 'string') {
                    const text = op.insert;
                    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+|[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}[^\s]*)/g;
                    let match;
                    // Reset regex for this text segment
                    urlRegex.lastIndex = 0;
                    while ((match = urlRegex.exec(text)) !== null) {
                        const url = match[0];
                        const urlStartInText = match.index;
                        const urlStartInEditor = currentPos + urlStartInText;
                        const urlLength = url.length;
                        // Check if this URL is already formatted as a link
                        const urlFormat = editor.getFormat(urlStartInEditor, urlLength);
                        if (!urlFormat.link) {
                            // Look backwards from current operation to find mentions to include
                            let linkStartPos = urlStartInEditor;
                            let mentionsFound = [];
                            // Check preceding operations for mentions
                            for (let j = i - 1; j >= 0; j--) {
                                const prevOp = delta.ops[j];
                                if (prevOp.insert && typeof prevOp.insert === 'string') {
                                    // Check if this is just whitespace
                                    if (prevOp.insert.trim() === '') {
                                        // Skip whitespace, continue looking for mentions
                                        continue;
                                    }
                                    else {
                                        // Non-whitespace text without mention formatting - stop here
                                        if (!prevOp.attributes || !prevOp.attributes.mention) {
                                            break;
                                        }
                                    }
                                }
                                // If this operation has mention formatting, include it
                                if (prevOp.attributes && prevOp.attributes.mention) {
                                    const mentionLength = typeof prevOp.insert === 'string' ? prevOp.insert.length : 1;
                                    linkStartPos -= mentionLength;
                                    mentionsFound.unshift(prevOp);
                                }
                                else {
                                    // Stop if we hit an operation without mention formatting
                                    break;
                                }
                            }
                            // Calculate total link length including mentions
                            const totalLinkLength = (urlStartInEditor + urlLength) - linkStartPos;
                            // Ensure URL has proper protocol
                            const validUrl = this.ensureProtocol(url);
                            // Format the entire range (mentions + URL) as a link
                            editor.formatText(linkStartPos, totalLinkLength, 'link', validUrl);
                            hasChanges = true;
                        }
                    }
                    // Update position tracker
                    currentPos += text.length;
                }
                else if (op.insert) {
                    // Handle non-string inserts (like embeds)
                    currentPos += 1;
                }
            }
        }
        if (hasChanges) {
            this.updateEditorField();
            // IMPROVED: Better cursor position preservation
            setTimeout(() => {
                if (editor && currentSelection) {
                    const newSelection = editor.getSelection();
                    const newLength = editor.getLength();
                    // Determine the best position to restore cursor
                    let restoreIndex = currentIndex;
                    // If cursor moved significantly or is at position 0, try to restore intelligently
                    if (!newSelection || newSelection.index === 0 || Math.abs(newSelection.index - currentIndex) > 5) {
                        // Check if we're at the end of the text
                        if (currentIndex >= newLength - 1) {
                            restoreIndex = Math.max(0, newLength - 1);
                        }
                        else {
                            // Try to maintain relative position, but ensure it's valid
                            restoreIndex = Math.min(Math.max(0, currentIndex), newLength - 1);
                        }
                        editor.setSelection(restoreIndex, 0);
                    }
                }
            }, 10);
        }
    }
    handleLinkClick(value) {
        const range = this.meQuillRef.getSelection();
        if (value) {
            let currentLink = '';
            if (range && range.length > 0) {
                const currentFormat = this.meQuillRef.getFormat(range);
                currentLink = currentFormat.link || '';
            }
            this.openLinkDialog(currentLink).then((href) => {
                if (href !== null && href !== undefined) {
                    if (href === '') {
                        if (range && range.length > 0) {
                            this.meQuillRef.format('link', false);
                        }
                    }
                    else {
                        const validUrl = this.ensureProtocol(href);
                        if (range && range.length > 0) {
                            const selectedContent = this.meQuillRef.getContents(range.index, range.length);
                            let hasMentions = false;
                            if (selectedContent && selectedContent.ops) {
                                selectedContent.ops.forEach((op, index) => {
                                    if (op.attributes && op.attributes.mention) {
                                        hasMentions = true;
                                    }
                                });
                            }
                            if (hasMentions) {
                                this.meQuillRef.formatText(range.index, range.length, 'link', validUrl);
                                setTimeout(() => {
                                    const updatedContent = this.meQuillRef.getContents(range.index, range.length);
                                    if (updatedContent && updatedContent.ops) {
                                        updatedContent.ops.forEach((op, opIndex) => {
                                            if (op.attributes && op.attributes.mention && (!op.attributes.link || op.attributes.link !== validUrl)) {
                                                // Re-apply mention formatting if it was lost
                                                const opStart = range.index + this.getOpOffset(updatedContent.ops, opIndex);
                                                const opLength = typeof op.insert === 'string' ? op.insert.length : 1;
                                                this.meQuillRef.formatText(opStart, opLength, 'mention', op.attributes.mention);
                                                this.meQuillRef.formatText(opStart, opLength, 'link', validUrl);
                                            }
                                        });
                                    }
                                }, 50);
                            }
                            else {
                                // No mentions, standard link formatting
                                this.meQuillRef.format('link', validUrl);
                            }
                        }
                        else {
                            const insertIndex = range ? range.index : this.meQuillRef.getLength();
                            this.meQuillRef.insertText(insertIndex, href, 'user');
                            this.meQuillRef.formatText(insertIndex, href.length, 'link', validUrl);
                            this.meQuillRef.setSelection(insertIndex + href.length);
                        }
                    }
                    this.onTouched(this.contentCtrl);
                    this.triggerContentChange();
                    this.updateEditorField();
                }
            });
        }
        else {
            if (range && range.length > 0) {
                this.meQuillRef.format('link', false);
                this.onTouched(this.contentCtrl);
                this.triggerContentChange();
                this.updateEditorField();
            }
        }
    }
    // Helper function to calculate offset for operations in Delta
    getOpOffset(ops, targetIndex) {
        let offset = 0;
        for (let i = 0; i < targetIndex && i < ops.length; i++) {
            const op = ops[i];
            if (op.insert) {
                offset += typeof op.insert === 'string' ? op.insert.length : 1;
            }
        }
        return offset;
    }
    ensureProtocol(url) {
        if (!url)
            return '';
        // Check if URL already has a protocol
        if (!/^https?:\/\//i.test(url)) {
            // Add https:// if no protocol is present
            return 'https://' + url;
        }
        return url;
    }
    openLinkDialog(currentUrl = '') {
        return new Promise((resolve) => {
            // Create a simple input dialog
            const url = window.prompt('Enter the URL:', currentUrl);
            resolve(url);
        });
    }
    triggerContentChange() {
        // Check for excessive events that might cause freezing
        if (this.detectExcessiveEvents('triggerContentChange')) {
            console.error('🛑 BLOCKING triggerContentChange due to potential infinite loop');
            return;
        }
        // Trigger a content change event to save the updated content
        const html = this.meQuillRef.root.innerHTML;
        this.inputValue = html;
        this.isValid = this.contentCtrl.valid;
        // CRITICAL FIX: Use debounced updateFieldData
        this.debouncedUpdateFieldData(this.inputValue, this.isValid, 200);
        this.onComponentEvent('OnChangeValue');
        this.onComponentEvent('OnFocusOut');
        this.onDirty();
        this.contentCtrl.control.markAsDirty();
        // Clear clipboard after content changes
        // setTimeout(() => {
        //     this.clearClipboard();
        // }, 200);
    }
    onContentChanged(event) {
        // Check for excessive events that might cause freezing
        if (this.detectExcessiveEvents('onContentChanged')) {
            console.error('🛑 BLOCKING onContentChanged due to potential infinite loop');
            return;
        }
        // CRITICAL FIX: Skip if this is an API-triggered event to break circular dependency
        if (event?.source === 'api') {
            return;
        }
        if (event && (event.source == "user" || event.source == "api")) {
            this.isValid = this.contentCtrl.valid;
            this.inputValue = event.html; // Make sure to update inputValue
            this.onChange(event.html);
            const newContent = event.html;
            const oldContent = event.oldDelta?.ops.map(op => op.insert).join('') || '';
            if (newContent !== oldContent) {
                // CRITICAL FIX: Use debounced updateFieldData to prevent circular dependency
                this.debouncedUpdateFieldData(this.inputValue, this.isValid, 150);
                this.onComponentEvent('OnChangeValue');
                this.onComponentEvent('OnFocusOut');
                this.onDirty();
                this.contentCtrl.control.markAsDirty();
            }
        }
    }
    onChange(newValue) {
    }
    onTouched(control) {
        // Check for excessive events that might cause freezing
        if (this.detectExcessiveEvents('onTouched')) {
            console.error('🛑 BLOCKING onTouched due to potential infinite loop');
            return;
        }
        if (control && control.control) {
            control.control.markAsTouched();
            if (this.meQuillRef) {
                this.inputValue = this.meQuillRef.root.innerHTML;
                this.isValid = control.valid;
                // CRITICAL FIX: Use debounced updateFieldData
                this.debouncedUpdateFieldData(this.inputValue, this.isValid, 100);
            }
        }
    }
    onSessionDataUpdated(value) {
        this.isValid = this.contentCtrl.valid;
        this.updateFieldData(value, this.isValid);
        this.onComponentEvent('OnChangeValue');
        this.onComponentEvent('OnFocusOut');
        this.setModalorSanckBarMessage(this.fieldData.unique_id, value);
        this.onDirty();
    }
    onEmptySession(get_data) {
        let data = [];
        let associatedData = [];
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
        if (get_data.isAssociated) {
            if (data.some(r => unique_id_value.includes(r))) {
                const values = this.getAssociatedFields();
                if (values.includes(this.undoRedoUtil.getCurrentId())) {
                    // associatedData = new Array(unique_id_value);
                    associatedData = unique_id_value;
                }
            }
        }
        (get_data.isAssociated ? associatedData : data).forEach(elm => {
            if ((unique_id_value).includes(elm)) {
                // TODO Update
                let value = '';
                this.inputValue = value;
                if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
                    for (const paramter of this.fieldData.additional_parameters) {
                        this.additionalParameter[paramter.parameter_type] = paramter.value;
                        if (paramter.parameter_type === 'default_value') {
                            this.inputValue = paramter.value;
                            value = paramter.value;
                        }
                    }
                }
                this.updateFieldData(value);
                this.showErrorOnNext = false;
                this.valid = true;
                if (this.contentCtrl) {
                    this.contentCtrl.reset(value);
                    this.contentCtrl.control.markAsUntouched();
                    this.contentCtrl.control.markAsPristine();
                    this.contentCtrl.control.updateValueAndValidity();
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
    onAPICallback(data) {
        this.fieldData = this.setDynamicLabelUtil.getDynamicValue(this.fieldData, data);
        const apiValue = this.setApiCallBackDataUtil.setApiCallBackData(this.fieldData, data);
        if (apiValue !== null) {
            this.isValid = true;
            this.inputValue = apiValue;
            this.updateFieldData(this.inputValue, this.isValid);
            const timeoutId = setTimeout(() => {
                if (this.meQuillRef) {
                    this.meQuillRef.clipboard.dangerouslyPasteHTML(this.inputValue);
                    // CRITICAL: Set cursor to the end after API content load
                    setTimeout(() => {
                        if (this.meQuillRef) {
                            const length = this.meQuillRef.getLength();
                            this.meQuillRef.setSelection(length - 1, 0);
                            // Clear clipboard after API content is loaded
                            // this.clearClipboard();
                        }
                    }, 50);
                }
            }, 0);
            this.timeoutIds.push(timeoutId);
        }
        // from additionalParameter with type externalApiOptionValue
        if (this.fieldData.additional_parameters && this.fieldData.additional_parameters.length > 0) {
            for (const parameter of this.fieldData.additional_parameters) {
                if (parameter.parameter_type === 'externalApiOptionValue') {
                    const externalApiOptionValue = this.getExternalApiOptionValue(parameter.value, data);
                    if (externalApiOptionValue !== null) {
                        // CRITICAL FIX: Ensure allOptions is always an array before pushing
                        if (!this.allOptions || !Array.isArray(this.allOptions)) {
                            this.allOptions = [];
                        }
                        if (Array.isArray(externalApiOptionValue)) {
                            externalApiOptionValue.forEach((val) => {
                                if (parameter.value && parameter.value.split('[*]')[parameter.value.split('[*]').length - 1] == '' && typeof val == 'object') {
                                    this.allOptions.push({ id: val['value'], value: val['name'] });
                                }
                                else {
                                    this.allOptions.push({ id: val.split('||')[0], value: val.split('||')[val.split('||').length - 1] });
                                }
                            });
                        }
                        else {
                            console.error('Something Went Wrong in editor !!!');
                        }
                    }
                }
            }
        }
    }
    onSetSessionData(apiKey, value) {
        super.onSetSessionData(apiKey, value);
    }
    concatData() { }
    setFieldValueOnSetValuesEvent(data) {
        if (data) {
            if (data['uniqueIds'].includes(this.fieldData.unique_id)) {
                this.inputValue = data['values'].length > 0 ?
                    data['values'][data['uniqueIds'].indexOf(this.fieldData.unique_id)] :
                    data['values'][0];
                // of triggerUpdate is true then update the field value or update value and emit conditions event
                this[data['triggerUpdate'] ? 'updateFieldEntity' : 'updateFieldData'](this.inputValue);
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
        // Handle critical changes that require component reinitialization for generic blocks
        if (changes.fieldData && !changes.fieldData.firstChange && this.isInitialized) {
            this.reinitializeEditor();
        }
        if (changes.additionalParameter && !changes.additionalParameter.firstChange && this.isInitialized) {
            // Check if tagging configuration changed
            const oldTagging = changes.additionalParameter.previousValue?.['CEE_tagging'];
            const newTagging = changes.additionalParameter.currentValue?.['CEE_tagging'];
            if (oldTagging !== newTagging) {
                this.reinitializeEditor();
            }
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
    reinitializeEditor() {
        // Generate new component key to force recreation
        this.componentKey = `cee-editor-${this.fieldData?.html_id || 'unknown'}-${Date.now()}`;
        // Clean up current state
        if (this.meQuillRef) {
            try {
                // CRITICAL: Clean up mention module thoroughly
                this.cleanupMentionModule();
                this.meQuillRef.off('text-change');
                this.meQuillRef.off('selection-change');
                this.meQuillRef.setContents([]);
            }
            catch (e) {
                console.warn('⚠️ Error during Quill cleanup:', e);
            }
            this.meQuillRef = null;
        }
        this.editorModules = {};
        this.searchStr = null;
        if (this.allOptions && Array.isArray(this.allOptions)) {
            this.allOptions = this.allOptions.filter((entry, index) => {
                if (!entry || typeof entry !== 'object') {
                    return false;
                }
                if (!entry.hasOwnProperty('value') || entry.value === null || entry.value === undefined) {
                    return false;
                }
                if (typeof entry.value !== 'string') {
                    try {
                        entry.value = String(entry.value);
                    }
                    catch (e) {
                        return false;
                    }
                }
                return entry.value.length > 0;
            });
        }
        else {
            this.allOptions = [];
        }
        // Trigger fresh initialization
        setTimeout(() => {
            this.onViewDataInit();
        }, 100);
    }
    /**
     * Apply additional styling fixes to mention dropdowns after initialization
     */
    applyMentionStylingFixes() {
        try {
            const mentionContainers = document.querySelectorAll('.ql-mention-list-container');
            mentionContainers.forEach((container, index) => {
                if (this.meQuillRef) {
                    const selection = this.meQuillRef.getSelection();
                    if (selection) {
                        const bounds = this.meQuillRef.getBounds(selection.index);
                        const editorElement = this.meQuillRef.root;
                        const editorRect = editorElement.getBoundingClientRect();
                        // Calculate position relative to the editor container
                        const leftPosition = bounds.left;
                        const topPosition = bounds.top + bounds.height - 5;
                        container.style.left = `${leftPosition}px`;
                        container.style.top = `${topPosition}px`;
                    }
                }
                // Ensure proper z-index and other styling
                container.style.zIndex = '9999';
                container.style.position = 'absolute';
                container.style.backgroundColor = 'white';
                container.style.border = '1px solid #ddd';
                container.style.borderRadius = '4px';
                container.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
                container.style.maxHeight = '200px';
                container.style.overflowY = 'auto';
                container.style.minWidth = '200px';
                container.style.maxWidth = '300px';
                // Apply styling to list items
                const listItems = container.querySelectorAll('.ql-mention-list-item');
                listItems.forEach((item) => {
                    item.style.padding = '10px 12px';
                    item.style.cursor = 'pointer';
                    item.style.borderBottom = '1px solid #f0f0f0';
                    item.style.fontSize = '14px';
                    item.style.color = '#333';
                    item.style.display = 'flex';
                    item.style.alignItems = 'center';
                    item.style.backgroundColor = 'white';
                    // Add hover effects
                    item.addEventListener('mouseenter', () => {
                        item.style.backgroundColor = '#e8f4f8';
                        item.style.color = '#0066cc';
                    });
                    item.addEventListener('mouseleave', () => {
                        if (!item.classList.contains('selected')) {
                            item.style.backgroundColor = 'white';
                            item.style.color = '#333';
                        }
                    });
                });
            });
        }
        catch (error) {
            console.warn('⚠️ Error applying mention styling fixes:', error);
        }
    }
    /**
     * Detect if we're in a potential infinite loop or excessive event firing
     */
    detectExcessiveEvents(methodName) {
        const now = Date.now();
        const timeDiff = now - this.lastEventTimestamp;
        if (timeDiff < 100) { // Less than 100ms between calls
            this.eventCallsInShortTime++;
            if (this.eventCallsInShortTime > 10) {
                // Reset counter after logging
                this.eventCallsInShortTime = 0;
                return true;
            }
        }
        else {
            this.eventCallsInShortTime = 0;
        }
        this.lastEventTimestamp = now;
        return false;
    }
    /**
     * Debounced version of updateFieldData to prevent rapid successive calls
     */
    debouncedUpdateFieldData(inputValue, isValid, delay = 100) {
        // Clear any existing timeout
        if (this.debounceUpdateTimeout) {
            clearTimeout(this.debounceUpdateTimeout);
        }
        // Set new timeout
        this.debounceUpdateTimeout = setTimeout(() => {
            if (!this.isUpdatingFieldData) {
                this.isUpdatingFieldData = true;
                try {
                    this.updateFieldData(inputValue, isValid);
                }
                finally {
                    setTimeout(() => {
                        this.isUpdatingFieldData = false;
                    }, 50);
                }
            }
        }, delay);
        this.timeoutIds.push(this.debounceUpdateTimeout);
    }
    /**
     * Log comprehensive event statistics for debugging (removed for production)
     */
    logEventSummary() {
        // Removed verbose logging for production
    }
    /**
     * Clear the clipboard content to prevent unwanted pasting
     */
    // private clearClipboard(): void {
    //     try {
    //         console.log('🧹 Attempting to clear clipboard:', {
    //             timestamp: new Date().toISOString(),
    //             componentKey: this.componentKey
    //         });
    //         // Method 1: Try using the modern Clipboard API
    //         if (navigator.clipboard && navigator.clipboard.writeText) {
    //             navigator.clipboard.writeText('').then(() => {
    //                 console.log('✅ Clipboard cleared successfully using Clipboard API');
    //             }).catch((error) => {
    //                 console.warn('⚠️ Error clearing clipboard with Clipboard API:', error);
    //                 this.fallbackClearClipboard();
    //             });
    //         } else {
    //             // Method 2: Fallback for older browsers
    //             this.fallbackClearClipboard();
    //         }
    //     } catch (error) {
    //         console.error('❌ Error in clearClipboard method:', error);
    //     }
    // }
    /**
     * Fallback method to clear clipboard for older browsers
     */
    // private fallbackClearClipboard(): void {
    //     try {
    //         // Create a temporary input element
    //         const tempInput = document.createElement('input');
    //         tempInput.style.position = 'absolute';
    //         tempInput.style.left = '-9999px';
    //         tempInput.style.opacity = '0';
    //         tempInput.value = '';
    //         document.body.appendChild(tempInput);
    //         tempInput.select();
    //         tempInput.setSelectionRange(0, 0);
    //         // Try to execute copy command to clear clipboard
    //         const success = document.execCommand('copy');
    //         if (success) {
    //             console.log('✅ Clipboard cleared using fallback method');
    //         } else {
    //             console.warn('⚠️ Fallback clipboard clear may not have worked');
    //         }
    //         // Clean up
    //         document.body.removeChild(tempInput);
    //     } catch (error) {
    //         console.error('❌ Error in fallback clipboard clear:', error);
    //     }
    // }
    /* *********************************************************
    *  Methods for Handling Drag n Drops inside editor block
    *  including toolbar and remaining parts of editor
    * **********************************************************/
    //Handles Drag n Dropped files
    async handleDrop(event) {
        event.preventDefault();
        if (event.dataTransfer && event.dataTransfer.files.length > 0) {
            const validFiles = Array.from(event.dataTransfer.files).filter(file => file.type.startsWith('image/'));
            if (validFiles.length == 0)
                return;
            const timeoutId = setTimeout(() => {
                if (this.uploadOutOfEditor) {
                    this.setFilesToEditor(validFiles);
                }
            }, 100);
            this.timeoutIds.push(timeoutId);
        }
    }
    // Set files to editor
    async setFilesToEditor(files) {
        for (const file of files) {
            await this.readImageFile(file);
        }
    }
    // Read files
    async readImageFile(file) {
        const compressedImage = await this.compressImage(file, 800, 600, 0.6);
        // console.log('Compressed file:', compressedImage);
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result;
            this.insertImageIntoEditor(base64);
        };
        reader.readAsDataURL(compressedImage);
    }
    // Inserts images in to editor
    insertImageIntoEditor(imageUrl) {
        const quill = this.quillEditor.quillEditor;
        if (!quill) {
            console.error('Quill editor instance not found.');
            return;
        }
        // Get current selection or set to end if there's no selection
        const range = quill.getSelection(true) || { index: quill.getLength(), length: 0 };
        quill.insertEmbed(range.index, 'image', imageUrl, 'user');
        quill.setSelection(range.index + 1, 'user'); // move cursor after image
    }
    enableUploadOnDragOver(flag) {
        this.uploadOutOfEditor = flag;
    }
    // Allows drag n drops
    onDragOver(event) {
        event.preventDefault(); // allow drop        
        this.enableUploadOnDragOver(true);
    }
    /* *********************************************************
    *  Methods for Dynamic Mention Data Loading
    * **********************************************************/
    // Refresh mention data from API - called when data becomes available
    refreshMentionData() {
        if (this.additionalParameter['externalApiOptionValue']) {
            try {
                var runtimeDropDownData = this.apiDataService.getApiDataByHandler(this.additionalParameter['externalApiOptionValue']);
                if (runtimeDropDownData && Array.isArray(runtimeDropDownData) && runtimeDropDownData.length > 0) {
                    this.allOptions = runtimeDropDownData;
                    return true;
                }
                else {
                    const externalOptions = this.additionalParameter['externalApiOptionValue'];
                    if (externalOptions && Array.isArray(externalOptions) && externalOptions.length > 0) {
                        this.allOptions = externalOptions;
                        return true;
                    }
                }
            }
            catch (error) {
                console.warn('⚠️ Error refreshing mention data:', error);
            }
        }
        return false;
    }
    handleApiMentionResponse(response) {
        if (this.additionalParameter['externalApiOptionValue']) {
            let parameter = this.additionalParameter['externalApiOptionValue'];
            const externalApiOptionValue = this.getExternalApiOptionValue(parameter, response);
            if (externalApiOptionValue !== null) {
                // CRITICAL FIX: Ensure allOptions is always an array before pushing
                this.allOptions = [];
                if (Array.isArray(externalApiOptionValue)) {
                    externalApiOptionValue.forEach((val) => {
                        if (parameter.value && parameter.value.split('[*]')[parameter.value.split('[*]').length - 1] == '' && typeof val == 'object') {
                            this.allOptions.push({ id: val['value'], value: val['name'] });
                        }
                        else {
                            this.allOptions.push({ id: val.split('||')[0], value: val.split('||')[val.split('||').length - 1] });
                        }
                    });
                    let values = this.getMentionValues();
                    if (!this.isValidArray(values, 'mention values')) {
                        values = [];
                    }
                    values = this.sanitizeMentionValues(values);
                    if (values.length === 0) {
                        this.handleEmptyMentionValues(this.currentRenderList, this.currentSearchTerm);
                        return;
                    }
                    const isEmptySearch = !this.currentSearchTerm || this.currentSearchTerm.length === 0 || this.currentSearchTerm.trim() === '';
                    if (isEmptySearch) {
                        this.handleEmptySearch(values, this.currentRenderList, this.currentSearchTerm);
                    }
                    else {
                        this.safeRenderList(this.currentRenderList, values, this.currentSearchTerm, 'values');
                    }
                }
                else {
                    console.error('Something Went Wrong in editor !!!');
                }
            }
        }
    }
    static ɵfac = function CeeEditorComponent_Factory(t) { return new (t || CeeEditorComponent)(i0.ɵɵdirectiveInject(i1.DomSanitizer), i0.ɵɵdirectiveInject(i2.UserDataHandlerService), i0.ɵɵdirectiveInject(i3.SharedEventsServiceService), i0.ɵɵdirectiveInject(i4.CEEInternalEmitterService), i0.ɵɵdirectiveInject(i5.AppDataService), i0.ɵɵdirectiveInject(i6.ApiDataService), i0.ɵɵdirectiveInject(i7.WfeStepLoaderService), i0.ɵɵdirectiveInject(i8.MatDialog), i0.ɵɵdirectiveInject(i9.MatSnackBar), i0.ɵɵdirectiveInject(i10.HttpClient), i0.ɵɵdirectiveInject(i0.ChangeDetectorRef)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: CeeEditorComponent, selectors: [["app-cee-editor"]], viewQuery: function CeeEditorComponent_Query(rf, ctx) { if (rf & 1) {
            i0.ɵɵviewQuery(_c0, 5);
            i0.ɵɵviewQuery(_c1, 5);
            i0.ɵɵviewQuery(_c2, 5);
        } if (rf & 2) {
            let _t;
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.contentCtrl = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.quillFileRef = _t.first);
            i0.ɵɵqueryRefresh(_t = i0.ɵɵloadQuery()) && (ctx.quillEditor = _t.first);
        } }, inputs: { stepId: "stepId", fieldData: "fieldData", primaryKeyIndex: "primaryKeyIndex", keepState: "keepState", rowData: "rowData", mandatoryCondition: "mandatoryCondition", editableCondition: "editableCondition", visibleCondition: "visibleCondition", rootData: "rootData" }, standalone: true, features: [i0.ɵɵInheritDefinitionFeature, i0.ɵɵNgOnChangesFeature, i0.ɵɵStandaloneFeature], decls: 1, vars: 1, consts: [["contentCtrl", "ngModel", "quillEditor", ""], ["class", "field-wrapper", 4, "ngIf"], [1, "field-wrapper"], [1, "form-group"], [1, "form-label"], [4, "ngIf"], ["class", "mandetory-mark", 4, "ngIf"], ["type", "button", "class", "btn-tooltip ml-auto", 3, "tooltip", 4, "ngIf"], [1, "form-field"], [1, "editor-container"], ["name", "meQuillRef", "theme", "snow", "format", "html", 3, "dragover", "dragleave", "drop", "ngModelChange", "onEditorCreated", "onContentChanged", "onFocus", "ngModel", "modules", "required", "disabled", "placeholder"], ["class", "text-danger", 4, "ngIf"], ["class", "preview-container", 4, "ngIf"], ["class", "col-form-label", 4, "ngIf"], ["class", "col-form-label", 3, "innerHTML", 4, "ngIf"], [1, "col-form-label"], [1, "col-form-label", 3, "innerHTML"], [1, "mandetory-mark"], ["type", "button", 1, "btn-tooltip", "ml-auto", 3, "tooltip"], [1, "text-danger"], [1, "preview-container"], [1, "preview-content", 3, "innerHTML"], [1, "preview-content"]], template: function CeeEditorComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵtemplate(0, CeeEditorComponent_div_0_Template, 14, 18, "div", 1);
        } if (rf & 2) {
            i0.ɵɵproperty("ngIf", ctx.isVisible);
        } }, dependencies: [MatTooltipModule, FormsModule, i11.NgControlStatus, i11.RequiredValidator, i11.NgModel, CommonModule, i12.NgIf, TooltipModule, i13.TooltipDirective, QuillModule, i14.QuillEditorComponent], styles: [".invisible-input-cont[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]{width:0px;height:0px}.invalid-editor[_ngcontent-%COMP%]{border:1px solid red!important}.text-danger[_ngcontent-%COMP%]{color:#dc1a1d!important;font-size:12px}.editor-container[_ngcontent-%COMP%]{margin-bottom:20px;position:relative}.preview-container[_ngcontent-%COMP%]{border:1px solid #ccc;padding:10px;border-radius:4px}.preview-content[_ngcontent-%COMP%]{white-space:pre-wrap;word-break:break-all;overflow:hidden;display:flex;justify-content:center;align-items:center}img[_ngcontent-%COMP%]{max-width:100%;height:auto}.ql-mention-list-container[_ngcontent-%COMP%]{border:1px solid #ddd;border-radius:4px;max-height:200px;overflow-y:auto;background-color:#fff;box-shadow:0 4px 12px #00000026;z-index:9999!important;position:absolute;min-width:200px;max-width:300px;font-family:inherit;margin-top:-42px!important;transform:translateY(-100%)!important}.ql-mention-list[_ngcontent-%COMP%]{list-style:none;margin:0;padding:0;max-height:200px;overflow-y:auto}.ql-mention-list-item[_ngcontent-%COMP%]{padding:8px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;transition:all .2s ease;font-size:14px;color:#333;display:flex;align-items:center;position:relative;-webkit-user-select:none;user-select:none}.ql-mention-list-item[_ngcontent-%COMP%]:last-child{border-bottom:none}.ql-mention-list-item[_ngcontent-%COMP%]:hover, .ql-mention-list-item.selected[_ngcontent-%COMP%]{background-color:#e8f4f8;color:#06c;transform:translate(2px)}.ql-mention-list-item.selected[_ngcontent-%COMP%]{background-color:#06c;color:#fff}.ql-mention-list-item.selected[_ngcontent-%COMP%]   .mention-avatar[_ngcontent-%COMP%]{background-color:#fff3}.mention-avatar[_ngcontent-%COMP%]{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background-color:#f0f0f0;font-size:12px;margin-right:8px;transition:background-color .2s ease}.mention-text[_ngcontent-%COMP%]{flex:1;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ql-mention-list-item[_ngcontent-%COMP%]:hover   .mention-avatar[_ngcontent-%COMP%]{background-color:#d4edda}.mention[_ngcontent-%COMP%]{background-color:#e8f4f8;color:#06c;padding:2px 4px;border-radius:3px;font-weight:500;text-decoration:none;display:inline-block}.mention[_ngcontent-%COMP%]:hover{background-color:#d4edda;text-decoration:none}.ql-editor.ql-dark[_ngcontent-%COMP%]   .mention[_ngcontent-%COMP%]{background-color:#1e3a8a;color:#93c5fd}@media (max-width: 768px){.ql-mention-list-container[_ngcontent-%COMP%]{min-width:150px;max-height:150px}.ql-mention-list-item[_ngcontent-%COMP%]{padding:6px 10px;font-size:13px}}.ql-mention-loading[_ngcontent-%COMP%]{padding:8px 12px;text-align:center;color:#666;font-style:italic}.ql-mention-no-results[_ngcontent-%COMP%]{padding:8px 12px;text-align:center;color:#999;font-style:italic}", ".custom-control-input[_ngcontent-%COMP%]:checked ~ .custom-control-label[_ngcontent-%COMP%]:before{background-color:#0071eb}.custom-control-input[_ngcontent-%COMP%]:disabled + .custom-control-label[_ngcontent-%COMP%]{cursor:not-allowed}input[_ngcontent-%COMP%]:disabled, select[_ngcontent-%COMP%]:disabled, textarea[_ngcontent-%COMP%]:disabled{cursor:not-allowed}.btn-tooltip[_ngcontent-%COMP%]{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control[_ngcontent-%COMP%], .custom-select[_ngcontent-%COMP%]{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark[_ngcontent-%COMP%]{color:#eb1122}input.form-control.invalid[_ngcontent-%COMP%]{border:2px solid rgba(193,50,17,.72)}"] });
}
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(CeeEditorComponent, [{
        type: Component,
        args: [{ selector: 'app-cee-editor', standalone: true, imports: [MatTooltipModule, FormsModule, CommonModule, TooltipModule, QuillModule], template: "<div class=\"field-wrapper\" *ngIf=\"isVisible\">\r\n    <div class=\"form-group\">\r\n        <div class=\"form-label\">\r\n            <ng-container *ngIf=\"fieldData.field_label!=''\">\r\n                <label class=\"col-form-label\" *ngIf=\"!isHTML(fieldData.field_label)\">{{fieldData.field_label}}</label>\r\n                <label class=\"col-form-label\" *ngIf=\"isHTML(fieldData.field_label)\"\r\n                    [innerHTML]=\"fieldData.field_label\"></label>\r\n            </ng-container>\r\n            <span *ngIf=\"isMandatory\" class=\"mandetory-mark\"> *</span>\r\n            <button *ngIf=\"hasTooltip\" type=\"button\" class=\"btn-tooltip ml-auto\" [tooltip]=\"fieldData.tooltip\"\r\n         [attr.aria-label]=\"'Tooltip: ' + fieldData.tooltip \">\r\n                i\r\n            </button>\r\n        </div>\r\n        <div class=\"form-field\">\r\n            <!-- <div class=\"invisible-input-cont\">\r\n                <input #quillFile type=\"file\" (change)=\"quillFileSelected($event)\">\r\n            </div> -->\r\n            <div class=\"editor-container\" [attr.data-component-key]=\"componentKey\">\r\n              <quill-editor #contentCtrl=\"ngModel\"\r\n                            #quillEditor\r\n                            [attr.data-editor-key]=\"componentKey\"\r\n                            (dragover)=\"onDragOver($event)\"\r\n                            (dragleave)=\"enableUploadOnDragOver(false)\"\r\n                            (drop)=\"handleDrop($event)\"\r\n                            [(ngModel)]=\"inputValue\"\r\n                            [modules]=\"editorModules\"\r\n                            name=\"meQuillRef\"\r\n                            class=\"{{(isCustomClass && fieldData.field_style)?fieldData.field_style.custom_class_name:''}}  {{ !valid || (contentCtrl.invalid && isMandatory && contentCtrl.dirty) ? 'invalid' : 'valid' }} {{(contentCtrl.invalid && contentCtrl.touched) ? 'invalid-editor' : ''}}\"\r\n                            theme=\"snow\"\r\n                            format=\"html\"\r\n                            [required]=\"isMandatory\"\r\n                            [disabled]=\"!isEditable\"\r\n                            placeholder=\"{{fieldData.placeholder_text}}\"\r\n                            (onEditorCreated)=\"getEditorInstance($event)\"\r\n                            (onContentChanged)=\"onContentChanged($event)\"\r\n                            (onFocus)=\"onTouched(contentCtrl)\"\r\n                            (ngModelChange)=\"updatePreview()\">\r\n              </quill-editor>\r\n              <div *ngIf=\"contentCtrl.invalid && contentCtrl.touched\" class=\"text-danger\">\r\n                Field is required.\r\n              </div>\r\n            </div>\r\n            <div class=\"preview-container\" *ngIf=\"previewContent\">\r\n                <h6>Preview</h6>\r\n                <div class=\"preview-content\" [innerHTML]=\"sanitizedContent\"></div>\r\n            </div>\r\n            <div class=\"preview-container\" *ngIf=\"previewHtml\">\r\n              <h6>Format-Html</h6>\r\n              <div class=\"preview-content\">{{inputValue}}</div>\r\n          </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n", styles: [".invisible-input-cont input{width:0px;height:0px}.invalid-editor{border:1px solid red!important}.text-danger{color:#dc1a1d!important;font-size:12px}.editor-container{margin-bottom:20px;position:relative}.preview-container{border:1px solid #ccc;padding:10px;border-radius:4px}.preview-content{white-space:pre-wrap;word-break:break-all;overflow:hidden;display:flex;justify-content:center;align-items:center}img{max-width:100%;height:auto}.ql-mention-list-container{border:1px solid #ddd;border-radius:4px;max-height:200px;overflow-y:auto;background-color:#fff;box-shadow:0 4px 12px #00000026;z-index:9999!important;position:absolute;min-width:200px;max-width:300px;font-family:inherit;margin-top:-42px!important;transform:translateY(-100%)!important}.ql-mention-list{list-style:none;margin:0;padding:0;max-height:200px;overflow-y:auto}.ql-mention-list-item{padding:8px 12px;cursor:pointer;border-bottom:1px solid #f0f0f0;transition:all .2s ease;font-size:14px;color:#333;display:flex;align-items:center;position:relative;-webkit-user-select:none;user-select:none}.ql-mention-list-item:last-child{border-bottom:none}.ql-mention-list-item:hover,.ql-mention-list-item.selected{background-color:#e8f4f8;color:#06c;transform:translate(2px)}.ql-mention-list-item.selected{background-color:#06c;color:#fff}.ql-mention-list-item.selected .mention-avatar{background-color:#fff3}.mention-avatar{display:inline-flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background-color:#f0f0f0;font-size:12px;margin-right:8px;transition:background-color .2s ease}.mention-text{flex:1;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ql-mention-list-item:hover .mention-avatar{background-color:#d4edda}.mention{background-color:#e8f4f8;color:#06c;padding:2px 4px;border-radius:3px;font-weight:500;text-decoration:none;display:inline-block}.mention:hover{background-color:#d4edda;text-decoration:none}.ql-editor.ql-dark .mention{background-color:#1e3a8a;color:#93c5fd}@media (max-width: 768px){.ql-mention-list-container{min-width:150px;max-height:150px}.ql-mention-list-item{padding:6px 10px;font-size:13px}}.ql-mention-loading{padding:8px 12px;text-align:center;color:#666;font-style:italic}.ql-mention-no-results{padding:8px 12px;text-align:center;color:#999;font-style:italic}\n", ".custom-control-input:checked~.custom-control-label:before{background-color:#0071eb}.custom-control-input:disabled+.custom-control-label{cursor:not-allowed}input:disabled,select:disabled,textarea:disabled{cursor:not-allowed}.btn-tooltip{padding:0;line-height:0;font-weight:600;color:#a0a0a0;width:24px;height:24px;border:0;background-size:10px auto}.form-control,.custom-select{border-radius:0;border-color:#d1d1d1;font-style:italic}.mandetory-mark{color:#eb1122}input.form-control.invalid{border:2px solid rgba(193,50,17,.72)}\n"] }]
    }], () => [{ type: i1.DomSanitizer }, { type: i2.UserDataHandlerService }, { type: i3.SharedEventsServiceService }, { type: i4.CEEInternalEmitterService }, { type: i5.AppDataService }, { type: i6.ApiDataService }, { type: i7.WfeStepLoaderService }, { type: i8.MatDialog }, { type: i9.MatSnackBar }, { type: i10.HttpClient }, { type: i0.ChangeDetectorRef }], { stepId: [{
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
        }], contentCtrl: [{
            type: ViewChild,
            args: ['contentCtrl']
        }], quillFileRef: [{
            type: ViewChild,
            args: ['quillFile']
        }], quillEditor: [{
            type: ViewChild,
            args: ['quillEditor']
        }] }); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(CeeEditorComponent, { className: "CeeEditorComponent", filePath: "lib\\field-components\\cee-editor\\cee-editor.component.ts", lineNumber: 63 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2VlLWVkaXRvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Bbmd1bGFyLTE3L0VTRi1Bbmd1bGFyLVdGRS1MaWJyYXJ5L3Byb2plY3RzL25nLWNlZS1jb3JlL3NyYy9saWIvZmllbGQtY29tcG9uZW50cy9jZWUtZWRpdG9yL2NlZS1lZGl0b3IuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vQW5ndWxhci0xNy9FU0YtQW5ndWxhci1XRkUtTGlicmFyeS9wcm9qZWN0cy9uZy1jZWUtY29yZS9zcmMvbGliL2ZpZWxkLWNvbXBvbmVudHMvY2VlLWVkaXRvci9jZWUtZWRpdG9yLmNvbXBvbmVudC5odG1sIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUE2RyxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPbEwsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUtwRSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sOEJBQThCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsV0FBVyxFQUFXLE1BQU0sZ0JBQWdCLENBQUM7QUFFdEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQzdELE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSx5Q0FBeUMsQ0FBQztBQUV4RSxPQUFPLEVBQUUsV0FBVyxFQUF3QixNQUFNLFdBQVcsQ0FBQztBQUM5RCxPQUFPLEtBQUssTUFBTSxPQUFP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LFdBQVc7WUFRSSxXQUFXO2tCQUFwQyxTQUFTO21CQUFDLGFBQWE7O2tGQTVCZixrQkFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE9uRGVzdHJveSwgSG9zdExpc3RlbmVyLCBTaW1wbGVDaGFuZ2VzLCBPbkNoYW5nZXMsIEVsZW1lbnRSZWYsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5LCBDaGFuZ2VEZXRlY3RvclJlZiwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJEYXRhSGFuZGxlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLWRhdGEtaGFuZGxlci5zZXJ2aWNlJztcclxuaW1wb3J0IHsgV2ZlU3RlcExvYWRlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy93ZmUtc3RlcC1sb2FkZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFNoYXJlZEV2ZW50c1NlcnZpY2VTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvc2hhcmVkLWV2ZW50cy1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDZWVBcGlTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2VlLWFwaS1zZXJ2aWNlLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBBcHBEYXRhU2VydmljZSB9IGZyb20gJy4uLy4uL21vZGVscy9hcHAtZGF0YS9hcHAtZGF0YS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQXBpRGF0YVNlcnZpY2UgfSBmcm9tICcuLi8uLi9tb2RlbHMvYXBpLWRhdGEvYXBpLWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IEJhc2VWaWV3IH0gZnJvbSAnLi4vY2VlLWJhc2UtY2xhc3MnO1xyXG5pbXBvcnQgeyBTZXNzaW9uS2V5VXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3Nlc3Npb24ta2V5LXV0aWwnO1xyXG5pbXBvcnQgeyBXZmVFbmNyeXB0aW9uVXRpbCB9IGZyb20gJy4uLy4uL3V0aWxzL3dmZS1lbmNyeXB0aW9uLXV0aWwnO1xyXG5pbXBvcnQgeyBNYXREaWFsb2cgYXMgTWF0RGlhbG9nIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcclxuaW1wb3J0IHsgTWF0U25hY2tCYXIgYXMgTWF0U25hY2tCYXIgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zbmFjay1iYXInO1xyXG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xyXG5pbXBvcnQgeyBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgVW5kb1JlZG8gfSBmcm9tICcuLy4uLy4uL3V0aWxzL3VuZG8tcmVkby51dGlsJztcclxuaW1wb3J0IHsgVmlld0NoaWxkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlLCBOZ01vZGVsIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvaW50ZXJuYWwtY2VlLWVtaXR0ZXItc2VydmljZS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcclxuaW1wb3J0IHsgTWF0VG9vbHRpcE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Rvb2x0aXAnO1xyXG5pbXBvcnQgeyBUb29sdGlwTW9kdWxlIH0gZnJvbSAnLi4vLi4vZGlyZWN0aXZlcy90b29sdGlwL3Rvb2x0aXAubW9kdWxlJztcclxuaW1wb3J0IHsgRG9tU2FuaXRpemVyLCBTYWZlSHRtbCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBRdWlsbE1vZHVsZSwgUXVpbGxFZGl0b3JDb21wb25lbnQgfSBmcm9tICduZ3gtcXVpbGwnO1xyXG5pbXBvcnQgUXVpbGwgZnJvbSAncXVpbGwnO1xyXG5pbXBvcnQgSW1hZ2VSZXNpemUgZnJvbSAncXVpbGwtaW1hZ2UtcmVzaXplJztcclxuaW1wb3J0IHsgTWVudGlvbiwgTWVudGlvbkJsb3QgfSBmcm9tIFwicXVpbGwtbWVudGlvblwiO1xyXG5pbXBvcnQgaGVpYzJhbnkgZnJvbSBcImhlaWMyYW55XCI7XHJcbi8vIGltcG9ydCBcInF1aWxsLW1lbnRpb25cIjtcclxuLy8gaW1wb3J0IFwicXVpbGwtbWVudGlvbi9hdXRvcmVnaXN0ZXJcIjtcclxubGV0IGdsb2JhbERlZmF1bHRLZXlib2FyZEJpbmRpbmdzOiBhbnkgPSBudWxsO1xyXG5cclxudHJ5IHtcclxuICAgIGlmICghZ2xvYmFsRGVmYXVsdEtleWJvYXJkQmluZGluZ3MpIHtcclxuICAgICAgICBjb25zdCBLZXlib2FyZCA9IFF1aWxsLmltcG9ydCgnbW9kdWxlcy9rZXlib2FyZCcpIGFzIGFueTtcclxuICAgICAgICBpZiAoS2V5Ym9hcmQgJiYgS2V5Ym9hcmQuREVGQVVMVFMgJiYgS2V5Ym9hcmQuREVGQVVMVFMuYmluZGluZ3MpIHtcclxuICAgICAgICAgICAgLy8gU2FmZWx5IGNvcHkga2V5Ym9hcmQgYmluZGluZ3Mgd2l0aCB2YWxpZGF0aW9uXHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsQmluZGluZ3MgPSBLZXlib2FyZC5ERUZBVUxUUy5iaW5kaW5ncztcclxuICAgICAgICAgICAgaWYgKG9yaWdpbmFsQmluZGluZ3MgJiYgdHlwZW9mIG9yaWdpbmFsQmluZGluZ3MgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBnbG9iYWxEZWZhdWx0S2V5Ym9hcmRCaW5kaW5ncyA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkob3JpZ2luYWxCaW5kaW5ncykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFF1aWxsLnJlZ2lzdGVyKCdtb2R1bGVzL2ltYWdlUmVzaXplJywgSW1hZ2VSZXNpemUuZGVmYXVsdCk7XHJcbiAgICBRdWlsbC5yZWdpc3Rlcih7IFwiYmxvdHMvbWVudGlvblwiOiBNZW50aW9uQmxvdCwgXCJtb2R1bGVzL21lbnRpb25cIjogTWVudGlvbn0pO1xyXG4gICAgY29uc3QgaW1wb3J0cyA9IChRdWlsbCBhcyBhbnkpLmltcG9ydHM7XHJcbiAgICBjb25zdCBpbWFnZVJlc2l6ZVJlZ2lzdGVyZWQgPSAhIWltcG9ydHNbJ21vZHVsZXMvaW1hZ2VSZXNpemUnXTtcclxuICAgIGNvbnN0IG1lbnRpb25SZWdpc3RlcmVkID0gISFpbXBvcnRzWydtb2R1bGVzL21lbnRpb24nXTtcclxuXHJcbn0gY2F0Y2ggKGUpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ+KdjCBFcnJvciByZWdpc3RlcmluZyBRdWlsbCBtb2R1bGVzOicsIGUpO1xyXG4gICAgLy8gUmVzZXQgZ2xvYmFsIGJpbmRpbmdzIG9uIGVycm9yIHRvIHByZXZlbnQgY29ycnVwdGlvblxyXG4gICAgZ2xvYmFsRGVmYXVsdEtleWJvYXJkQmluZGluZ3MgPSBudWxsO1xyXG59XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiAnYXBwLWNlZS1lZGl0b3InLFxyXG4gICAgdGVtcGxhdGVVcmw6ICcuL2NlZS1lZGl0b3IuY29tcG9uZW50Lmh0bWwnLFxyXG4gICAgc3R5bGVVcmxzOiBbJy4vY2VlLWVkaXRvci5jb21wb25lbnQuc2NzcycsICcuLi9maWVsZC1jb21tb24uc2NzcyddLFxyXG4gICAgc3RhbmRhbG9uZTogdHJ1ZSxcclxuICAgIGltcG9ydHM6IFtNYXRUb29sdGlwTW9kdWxlLCBGb3Jtc01vZHVsZSwgQ29tbW9uTW9kdWxlLCBUb29sdGlwTW9kdWxlLCBRdWlsbE1vZHVsZV1cclxufSlcclxuZXhwb3J0IGNsYXNzIENlZUVkaXRvckNvbXBvbmVudCBleHRlbmRzIEJhc2VWaWV3IGltcGxlbWVudHMgT25Jbml0LCBPbkRlc3Ryb3ksIE9uQ2hhbmdlcyB7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHN0ZXBJZDogYW55O1xyXG4gICAgQElucHV0KCkgZGVjbGFyZSBmaWVsZERhdGE6IGFueTtcclxuICAgIEBJbnB1dCgpIHByaW1hcnlLZXlJbmRleDogYW55O1xyXG4gICAgQElucHV0KCkga2VlcFN0YXRlID0gZmFsc2U7XHJcbiAgICBASW5wdXQoKSByb3dEYXRhOiBhbnk7XHJcbiAgICBASW5wdXQoKSBtYW5kYXRvcnlDb25kaXRpb246IGFueTtcclxuICAgIEBJbnB1dCgpIGVkaXRhYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSB2aXNpYmxlQ29uZGl0aW9uOiBhbnk7XHJcbiAgICBASW5wdXQoKSBkZWNsYXJlIHJvb3REYXRhOiBhbnk7XHJcbiAgICBAVmlld0NoaWxkKCdjb250ZW50Q3RybCcpIGNvbnRlbnRDdHJsOiBOZ01vZGVsO1xyXG5cclxuICAgIHdmZUVuY3J5cHRpb246IFdmZUVuY3J5cHRpb25VdGlsO1xyXG4gICAgZGVjbGFyZSBzZXNzaW9uS2V5VXRpbDogU2Vzc2lvbktleVV0aWw7XHJcbiAgICBpbnB1dFZhbHVlOiBzdHJpbmcgPSAnJztcclxuICAgIGh0bWxfaWQgPSAnJztcclxuICAgIGlzVmFsaWQgPSB0cnVlO1xyXG4gICAgdW5kb1JlZG9VdGlsOiBVbmRvUmVkbztcclxuICAgIGltYWdlUmVzaXplID0gSW1hZ2VSZXNpemUuZGVmYXVsdDtcclxuICAgIGlzUmVhZE9ubHk6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIEBWaWV3Q2hpbGQoJ3F1aWxsRmlsZScpIHF1aWxsRmlsZVJlZjogRWxlbWVudFJlZjtcclxuICAgIHF1aWxsRmlsZTogYW55O1xyXG4gICAgbWVRdWlsbFJlZiE6IFF1aWxsO1xyXG4gICAgc2FuaXRpemVkQ29udGVudDogU2FmZUh0bWwgPSAnJztcclxuICAgIHByZXZpZXdDb250ZW50OiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcmV2aWV3SHRtbDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgZWRpdG9yTW9kdWxlcyA9IHt9O1xyXG4gICAgYWxsT3B0aW9uczogYW55ID0gW107XHJcbiAgICBAVmlld0NoaWxkKCdxdWlsbEVkaXRvcicpIHF1aWxsRWRpdG9yITogUXVpbGxFZGl0b3JDb21wb25lbnQ7XHJcbiAgICB1cGxvYWRPdXRPZkVkaXRvcjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgc2VhcmNoU3RyOiBhbnkgPSBudWxsO1xyXG5cclxuICAgIC8vIENvbXBvbmVudCBpbnN0YW5jZSB0cmFja2luZyBmb3IgZ2VuZXJpYyBibG9ja3NcclxuICAgIGNvbXBvbmVudEtleTogc3RyaW5nID0gJyc7XHJcbiAgICBwcml2YXRlIGlzSW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIGxhc3RNb2RpZmllZEltYWdlID0gXCJcIjtcclxuICAgIHByaXZhdGUgdGltZW91dElkczogYW55W10gPSBbXTtcclxuXHJcbiAgICAvLyBFc3NlbnRpYWwgZnVuY3Rpb25hbGl0eSB2YXJpYWJsZXMgKG5vdCBkZWJ1ZyBjb3VudGVycylcclxuICAgIHByaXZhdGUgbGFzdEV2ZW50VGltZXN0YW1wID0gMDtcclxuICAgIHByaXZhdGUgZXZlbnRDYWxsc0luU2hvcnRUaW1lID0gMDtcclxuICAgIHByaXZhdGUgaXNVcGRhdGluZ0ZpZWxkRGF0YSA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBkZWJvdW5jZVVwZGF0ZVRpbWVvdXQ6IGFueSA9IG51bGw7XHJcbiAgICBwcml2YXRlIGlzUHJvZ3JhbW1hdGljYWxseVNldHRpbmdDb250ZW50ID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHVybERldGVjdGlvblRpbWVvdXQ6IGFueSA9IG51bGw7XHJcblxyXG4gICAgcHJpdmF0ZSBpc0FwaVNlYXJjaEVuYWJsZWRGb3JNZW50aW9uOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNlYXJjaERlYm91bmNlVGltZTogbnVtYmVyID0gMzAwO1xyXG4gICAgcmVxdWVzdEFwaUtleUZvclNlYXJjaCA9ICcnO1xyXG4gICAgcHJpdmF0ZSBpbnRlcm5hbEFQSVJlc3BvbnNlRW1pdHRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XHJcblxyXG4gICAgY3VycmVudFJlbmRlckxpc3Q6IGFueSA9IFtdO1xyXG4gICAgY3VycmVudFNlYXJjaFRlcm06IGFueSA9ICcnO1xyXG4gICAgcHJpdmF0ZSBtZW50aW9uU2VhcmNoVGltZW91dDogYW55ID0gbnVsbDtcclxuICAgIHByaXZhdGUgbGFzdE1lbnRpb25TZWFyY2hUZXJtOiBzdHJpbmcgPSAnJztcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBwcml2YXRlIHNhbml0aXplcjogRG9tU2FuaXRpemVyLFxyXG4gICAgICAgIHB1YmxpYyB1c2VyRGF0YUhhbmRsZXJTZXJ2aWNlOiBVc2VyRGF0YUhhbmRsZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBzaGFyZWRFdmVudHNTZXJ2aWNlOiBTaGFyZWRFdmVudHNTZXJ2aWNlU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgaW50ZXJuYWxDRUVFbWl0dGVyOiBDRUVJbnRlcm5hbEVtaXR0ZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBhcHBEYXRhU2VydmljZTogQXBwRGF0YVNlcnZpY2UsXHJcbiAgICAgICAgcHVibGljIGFwaURhdGFTZXJ2aWNlOiBBcGlEYXRhU2VydmljZSxcclxuICAgICAgICBwdWJsaWMgd2ZlU3RlcExvYWRlclNlcnZpY2U6IFdmZVN0ZXBMb2FkZXJTZXJ2aWNlLFxyXG4gICAgICAgIHB1YmxpYyBkaWFsb2c6IE1hdERpYWxvZyxcclxuICAgICAgICBwdWJsaWMgc25hY2tCYXI6IE1hdFNuYWNrQmFyLFxyXG4gICAgICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgICAgIHByaXZhdGUgY2RyOiBDaGFuZ2VEZXRlY3RvclJlZlxyXG4gICAgKSB7XHJcbiAgICAgICAgc3VwZXIoXHJcbiAgICAgICAgICAgIHVzZXJEYXRhSGFuZGxlclNlcnZpY2UsXHJcbiAgICAgICAgICAgIHNoYXJlZEV2ZW50c1NlcnZpY2UsXHJcbiAgICAgICAgICAgIGludGVybmFsQ0VFRW1pdHRlcixcclxuICAgICAgICAgICAgYXBwRGF0YVNlcnZpY2UsIGFwaURhdGFTZXJ2aWNlLCB3ZmVTdGVwTG9hZGVyU2VydmljZSwgZGlhbG9nLCBzbmFja0JhciwgaHR0cCk7XHJcbiAgICAgICAgdGhpcy53ZmVFbmNyeXB0aW9uID0gbmV3IFdmZUVuY3J5cHRpb25VdGlsKCk7XHJcbiAgICAgICAgdGhpcy5zZXNzaW9uS2V5VXRpbCA9IG5ldyBTZXNzaW9uS2V5VXRpbCgpO1xyXG4gICAgICAgIHRoaXMudW5kb1JlZG9VdGlsID0gbmV3IFVuZG9SZWRvKCk7XHJcbiAgICAgICAgdGhpcy52ZXJpZnlRdWlsbE1vZHVsZXMoKTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgbmdPbkluaXQoKSB7XHJcbiAgICAgICAgdGhpcy5jb21wb25lbnRLZXkgPSBgY2VlLWVkaXRvci0ke3RoaXMuZmllbGREYXRhPy5odG1sX2lkIHx8ICd1bmtub3duJ30tJHtEYXRlLm5vdygpfWA7XHJcblxyXG4gICAgICAgIC8vIEVuc3VyZSBrZXlib2FyZCBiaW5kaW5ncyBhcmUgcHJlc2VydmVkIGJlZm9yZSBpbml0aWFsaXphdGlvblxyXG4gICAgICAgIHRoaXMuZW5zdXJlS2V5Ym9hcmRCaW5kaW5nc0ludGVncml0eSgpO1xyXG4gICAgICAgIC8vIEluaXRpYWxpemUgZWRpdG9yIG1vZHVsZXMgZWFybHkgc28gdGhleSdyZSBhdmFpbGFibGUgZm9yIHRlbXBsYXRlIGJpbmRpbmdcclxuICAgICAgICB0aGlzLmluaXRpYWxpemVFZGl0b3JNb2R1bGVzKCk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnN0ZXBJZCwgdGhpcy5maWVsZERhdGEsIHRoaXMua2VlcFN0YXRlLCB0aGlzLnJvd0RhdGEpO1xyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0dXBTZWFyY2hBcGlDYWxsYmFjaygpIHtcclxuICAgICAgICBcclxuICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9iamVjdFsnaW50ZXJuYWxFbW1pdHRlcicgKyB0aGlzLmFwcERhdGEuaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ2ludGVybmFsRW1taXR0ZXInICsgdGhpcy5hcHBEYXRhLmlkXS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gU3Vic2NyaWJlIHRvIGludGVybmFsIEFQSSByZXNwb25zZSBlbWl0dGVyXHJcbiAgICAgICAgdGhpcy52YXJpYWJsZU9iamVjdFsnaW50ZXJuYWxFbW1pdHRlcicgKyB0aGlzLmFwcERhdGEuaWRdID0gdGhpcy5pbnRlcm5hbEFQSVJlc3BvbnNlRW1pdHRlci5zdWJzY3JpYmUoKHJlcykgPT4ge1xyXG4gICAgICAgICAgICAvLyBQcm9jZXNzIHRoZSBBUEkgcmVzcG9uc2UgYW5kIHVwZGF0ZSBtZW50aW9uIGxpc3RcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVBcGlNZW50aW9uUmVzcG9uc2UocmVzKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIG5nT25EZXN0cm95KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMudGltZW91dElkcy5mb3JFYWNoKGlkID0+IGNsZWFyVGltZW91dChpZCkpO1xyXG4gICAgICAgIHRoaXMudGltZW91dElkcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBDbGVhciBVUkwgZGV0ZWN0aW9uIHRpbWVvdXRcclxuICAgICAgICBpZiAodGhpcy51cmxEZXRlY3Rpb25UaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLnVybERldGVjdGlvblRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLnVybERldGVjdGlvblRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gQ2xlYXIgZGVib3VuY2UgdGltZW91dFxyXG4gICAgICAgIGlmICh0aGlzLmRlYm91bmNlVXBkYXRlVGltZW91dCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy5kZWJvdW5jZVVwZGF0ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy52YXJpYWJsZU9iamVjdFsnaW50ZXJuYWxFbW1pdHRlcicgKyB0aGlzLmFwcERhdGEuaWRdKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFyaWFibGVPYmplY3RbJ2ludGVybmFsRW1taXR0ZXInICsgdGhpcy5hcHBEYXRhLmlkXS51bnN1YnNjcmliZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMubWVRdWlsbFJlZikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGVhbnVwTWVudGlvbk1vZHVsZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLm9mZigndGV4dC1jaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVRdWlsbFJlZi5vZmYoJ3NlbGVjdGlvbi1jaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVRdWlsbFJlZi5vZmYoJ2VkaXRvci1jaGFuZ2UnKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRvb2xiYXIgPSB0aGlzLm1lUXVpbGxSZWYuZ2V0TW9kdWxlKCd0b29sYmFyJykgYXMgYW55O1xyXG4gICAgICAgICAgICAgICAgaWYgKHRvb2xiYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodG9vbGJhci5jb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdG9vbGJhci5jb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0b29sYmFyLmhhbmRsZXJzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvb2xiYXIuaGFuZGxlcnMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lUXVpbGxSZWYuc2V0Q29udGVudHMoW10pO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWRpdG9yRWxlbWVudCA9IHRoaXMubWVRdWlsbFJlZi5yb290O1xyXG4gICAgICAgICAgICAgICAgaWYgKGVkaXRvckVsZW1lbnQgJiYgZWRpdG9yRWxlbWVudC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWRpdG9yRWxlbWVudC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCdFcnJvciBkdXJpbmcgUXVpbGwgY2xlYW51cDonLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLm1lUXVpbGxSZWYgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnF1aWxsRWRpdG9yID0gbnVsbDtcclxuICAgICAgICB0aGlzLmNvbnRlbnRDdHJsID0gbnVsbDtcclxuICAgICAgICB0aGlzLnF1aWxsRmlsZVJlZiA9IG51bGw7XHJcbiAgICAgICAgdGhpcy5lZGl0b3JNb2R1bGVzID0ge307XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gJyc7XHJcbiAgICAgICAgdGhpcy5odG1sX2lkID0gJyc7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTdHIgPSBudWxsO1xyXG4gICAgICAgIHRoaXMudW5kb1JlZG9VdGlsID0gbnVsbDtcclxuICAgICAgICB0aGlzLndmZUVuY3J5cHRpb24gPSBudWxsO1xyXG4gICAgICAgIHRoaXMuc2Vzc2lvbktleVV0aWwgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG9uVmlld0RhdGFJbml0KCkge1xyXG4gICAgICAgIHRoaXMuaHRtbF9pZCA9IHRoaXMuZmllbGREYXRhLmh0bWxfaWQ7XHJcbiAgICAgICAgdGhpcy5zZWFyY2hTdHIgPSBudWxsO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5maWVsZFZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXRWYWx1ZSA9IHRoaXMuZmllbGRWYWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRoaXMucm93RGF0YSkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yb3dEYXRhLmhhc093blByb3BlcnR5KCd2YWx1ZScpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucHJldmlld0NvbnRlbnQgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9lZGl0b3JfcHJldmlldyddID09PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnByZXZpZXdIdG1sID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfZWRpdG9yX3ByZXZpZXdfaHRtbCddID09PSBcInRydWVcIiA/IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnJlcXVlc3RBcGlLZXlGb3JTZWFyY2ggPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TZWFyY2hfUmVxdWVzdF9hcGlfS2V5X0Zvcl9TZWFyY2hfaW5wdXQnXSB8fCAnJztcclxuICAgICAgICBpZiAodGhpcy5yZXF1ZXN0QXBpS2V5Rm9yU2VhcmNoKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRGF0YU9uQ2hhbmdlKCcnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gUmUtaW5pdGlhbGl6ZSBlZGl0b3IgbW9kdWxlcyBpbiBjYXNlIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBjaGFuZ2VkXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRWRpdG9yTW9kdWxlcygpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5yb290RGF0YSAmJiB0aGlzLnJvb3REYXRhWydGaWVsZEVycm9yRnVuY3Rpb25zJ10pIHtcclxuICAgICAgICAgICAgdGhpcy5yb290RGF0YVsnRmllbGRFcnJvckZ1bmN0aW9ucyddW3RoaXMuZmllbGREYXRhLmh0bWxfaWRdID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gRm9jdXMgb24gdGhlIHF1aWxsIGVkaXRvciBpbnN0ZWFkIG9mIGEgbm9uLWV4aXN0ZW50IERPTSBlbGVtZW50XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5xdWlsbEVkaXRvciAmJiB0aGlzLnF1aWxsRWRpdG9yLnF1aWxsRWRpdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5xdWlsbEVkaXRvci5xdWlsbEVkaXRvci5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gTm90ZTogRG9uJ3QgY3JlYXRlIG1hbnVhbCBRdWlsbCBpbnN0YW5jZSBoZXJlIC0gbGV0IHF1aWxsLWVkaXRvciBjb21wb25lbnQgaGFuZGxlIGl0XHJcbiAgICAgICAgLy8gVGhlIG1lUXVpbGxSZWYgd2lsbCBiZSBzZXQgaW4gZ2V0RWRpdG9ySW5zdGFuY2UoKSBjYWxsYmFja1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIGFuZCBub3JtYWxpemVzIG1lbnRpb24gaXRlbXMgdG8gZW5zdXJlIGNvbnNpc3RlbnQgc3RydWN0dXJlXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdmFsaWRhdGVNZW50aW9uSXRlbShpdGVtOiBhbnksIGluZGV4OiBudW1iZXIsIHR5cGU6ICdpdGVtJyB8ICdtYXRjaCcgPSAnaXRlbScpOiBhbnkge1xyXG4gICAgICAgIGlmICghaXRlbSB8fCB0eXBlb2YgaXRlbSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGlkOiBpbmRleCArIDEsXHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogYEludmFsaWQgJHt0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKX1gXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBub3JtYWxpemVkSXRlbSA9IHtcclxuICAgICAgICAgICAgaWQ6IGl0ZW0uaWQgIT09IHVuZGVmaW5lZCAmJiBpdGVtLmlkICE9PSBudWxsID8gaXRlbS5pZCA6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgdmFsdWU6IGl0ZW0udmFsdWUgJiYgdHlwZW9mIGl0ZW0udmFsdWUgPT09ICdzdHJpbmcnICYmIGl0ZW0udmFsdWUubGVuZ3RoID4gMFxyXG4gICAgICAgICAgICAgICAgPyBpdGVtLnZhbHVlXHJcbiAgICAgICAgICAgICAgICA6IGAke3R5cGUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eXBlLnNsaWNlKDEpfSAke2luZGV4ICsgMX1gXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKHR5cGVvZiBub3JtYWxpemVkSXRlbS52YWx1ZSAhPT0gJ3N0cmluZycgfHwgbm9ybWFsaXplZEl0ZW0udmFsdWUubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIG5vcm1hbGl6ZWRJdGVtLnZhbHVlID0gYERlZmF1bHQgJHt0eXBlLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHlwZS5zbGljZSgxKX0gJHtpbmRleCArIDF9YDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub3JtYWxpemVkSXRlbTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhZmVseSByZW5kZXJzIGxpc3Qgd2l0aCBlcnJvciBoYW5kbGluZyBhbmQgZmFsbGJhY2tzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgc2FmZVJlbmRlckxpc3QocmVuZGVyTGlzdDogRnVuY3Rpb24sIGl0ZW1zOiBhbnlbXSwgc2VhcmNoVGVybTogc3RyaW5nLCB0eXBlOiAndmFsdWVzJyB8ICdtYXRjaGVzJyA9ICd2YWx1ZXMnKTogdm9pZCB7XHJcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZEl0ZW1zID0gaXRlbXMubWFwKChpdGVtLCBpbmRleCkgPT4gdGhpcy52YWxpZGF0ZU1lbnRpb25JdGVtKGl0ZW0sIGluZGV4LCB0eXBlID09PSAndmFsdWVzJyA/ICdpdGVtJyA6ICdtYXRjaCcpKTtcclxuXHJcbiAgICAgICAgdGhpcy5zYWZlRXhlY3V0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgIHJlbmRlckxpc3Qobm9ybWFsaXplZEl0ZW1zLCBzZWFyY2hUZXJtKTtcclxuICAgICAgICAgICAgdGhpcy5hZGRTYWZlVGltZW91dCgoKSA9PiB0aGlzLmFwcGx5TWVudGlvblN0eWxpbmdGaXhlcygpLCAxMDApO1xyXG4gICAgICAgIH0sIGBGYWlsZWQgdG8gcmVuZGVyIG5vcm1hbGl6ZWQgJHt0eXBlfSBsaXN0YCwgKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnJlbmRlckZhbGxiYWNrTGlzdChyZW5kZXJMaXN0LCBzZWFyY2hUZXJtLCB0eXBlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcnMgZmFsbGJhY2sgbGlzdCB3aGVuIG1haW4gcmVuZGVyaW5nIGZhaWxzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgcmVuZGVyRmFsbGJhY2tMaXN0KHJlbmRlckxpc3Q6IEZ1bmN0aW9uLCBzZWFyY2hUZXJtOiBzdHJpbmcsIHR5cGU6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2FmZUV4ZWN1dGUoKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBzYWZlRmFsbGJhY2tMaXN0ID0gW1xyXG4gICAgICAgICAgICAgICAgeyBpZDogMSwgdmFsdWU6IGBTYWZlICR7dHlwZSA9PT0gJ21hdGNoZXMnID8gJ01hdGNoJyA6ICdJdGVtJ30gMWAgfSxcclxuICAgICAgICAgICAgICAgIHsgaWQ6IDIsIHZhbHVlOiBgU2FmZSAke3R5cGUgPT09ICdtYXRjaGVzJyA/ICdNYXRjaCcgOiAnSXRlbSd9IDJgIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcmVuZGVyTGlzdChzYWZlRmFsbGJhY2tMaXN0LCBzZWFyY2hUZXJtKTtcclxuICAgICAgICB9LCBgRXZlbiBzYWZlIGZhbGxiYWNrIHJlbmRlciBmYWlsZWRgKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFZhbGlkYXRlcyBlbnRyeSBkYXRhIGZvciBzZWFyY2ggb3BlcmF0aW9uc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzVmFsaWRFbnRyeShlbnRyeTogYW55LCBpbmRleDogbnVtYmVyKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFlbnRyeSB8fFxyXG4gICAgICAgICAgICAhZW50cnkudmFsdWUgfHxcclxuICAgICAgICAgICAgdHlwZW9mIGVudHJ5LnZhbHVlICE9PSAnc3RyaW5nJyB8fFxyXG4gICAgICAgICAgICBlbnRyeS52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhZmUgYXJyYXkgdmFsaWRhdGlvbiB1dGlsaXR5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaXNWYWxpZEFycmF5KGFycjogYW55LCBuYW1lOiBzdHJpbmcgPSAnYXJyYXknKTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGFycikpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNhZmUgYXJyYXkgdmFsaWRhdGlvbiB3aXRoIGxlbmd0aCBjaGVja1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGlzTm9uRW1wdHlBcnJheShhcnI6IGFueSwgbmFtZTogc3RyaW5nID0gJ2FycmF5Jyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzVmFsaWRBcnJheShhcnIsIG5hbWUpICYmIGFyci5sZW5ndGggPiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXRpbGl0eSBmb3IgbWFuYWdpbmcgdGltZW91dHMgc2FmZWx5XHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYWRkU2FmZVRpbWVvdXQoY2FsbGJhY2s6ICgpID0+IHZvaWQsIGRlbGF5OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KGNhbGxiYWNrLCBkZWxheSk7XHJcbiAgICAgICAgdGhpcy50aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFV0aWxpdHkgbWV0aG9kIHRvIGNsZWFuIHVwIG1lbnRpb24gbW9kdWxlIHJlZmVyZW5jZXMgYW5kIGV2ZW50IGxpc3RlbmVyc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNsZWFudXBNZW50aW9uTW9kdWxlKHF1aWxsSW5zdGFuY2U/OiBRdWlsbCk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gcXVpbGxJbnN0YW5jZSB8fCB0aGlzLm1lUXVpbGxSZWY7XHJcbiAgICAgICAgaWYgKCFpbnN0YW5jZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBtZW50aW9uTW9kdWxlOiBhbnkgPSBpbnN0YW5jZS5nZXRNb2R1bGUoJ21lbnRpb24nKTtcclxuICAgICAgICAgICAgaWYgKG1lbnRpb25Nb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgIC8vIENsZWFuIHVwIG1lbnRpb24gZXZlbnQgbGlzdGVuZXJzIGFuZCByZWZlcmVuY2VzXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzVG9DbGVhbnVwID0gW1xyXG4gICAgICAgICAgICAgICAgICAgICdvbkNvbnRhaW5lck1vdXNlRG93bicsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3NlbGVjdEhhbmRsZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICdtZW50aW9uTGlzdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgJ3ZhbHVlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgJ2V4aXN0aW5nVmFsdWVzJ1xyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICBwcm9wZXJ0aWVzVG9DbGVhbnVwLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnRpb25Nb2R1bGVbcHJvcF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb3AgPT09ICdtZW50aW9uTGlzdCcgfHwgcHJvcCA9PT0gJ3ZhbHVlcycgfHwgcHJvcCA9PT0gJ2V4aXN0aW5nVmFsdWVzJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVudGlvbk1vZHVsZVtwcm9wXSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgbWVudGlvbk1vZHVsZVtwcm9wXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZHVyaW5nIG1lbnRpb24gbW9kdWxlIGNsZWFudXA6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFRyeS1jYXRjaCB3cmFwcGVyIGZvciBzYWZlIGV4ZWN1dGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHNhZmVFeGVjdXRlPFQ+KG9wZXJhdGlvbjogKCkgPT4gVCwgZXJyb3JNZXNzYWdlOiBzdHJpbmcsIGZhbGxiYWNrPzogKCgpID0+IFQpIHwgVCk6IFQgfCB1bmRlZmluZWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiBvcGVyYXRpb24oKTtcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGZhbGxiYWNrID09PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gKGZhbGxiYWNrIGFzICgpID0+IFQpKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbGxiYWNrIGFzIFQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIGFuZCBlbnN1cmVzIGRhdGEgaXMgYXJyYXkgd2l0aCBub24tZW1wdHkgc3RyaW5nIHZhbHVlc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHZhbGlkYXRlRGF0YUFycmF5KGRhdGE6IGFueSwgY29udGV4dDogc3RyaW5nKTogYW55W10ge1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkQXJyYXkoZGF0YSwgY29udGV4dCkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGRhdGEuZmlsdGVyKChpdGVtOiBhbnksIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFpdGVtIHx8IHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIWl0ZW0uaGFzT3duUHJvcGVydHkoJ3ZhbHVlJykgfHwgIWl0ZW0udmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiBpdGVtLnZhbHVlICE9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYWZlRXhlY3V0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IFN0cmluZyhpdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0sIGAke2NvbnRleHR9OiBGYWlsZWQgdG8gY29udmVydCB2YWx1ZSB0byBzdHJpbmcgYXQgaW5kZXggJHtpbmRleH1gKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGl0ZW0udmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoaXRlbS52YWx1ZS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBVdGlsaXR5IHRvIGNoZWNrIGlmIFF1aWxsIG1vZHVsZXMgYXJlIHByb3Blcmx5IHJlZ2lzdGVyZWQgKGZvciBkZWJ1Z2dpbmcpXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdmVyaWZ5UXVpbGxNb2R1bGVzKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltcG9ydHMgPSAoUXVpbGwgYXMgYW55KS5pbXBvcnRzO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNJbWFnZVJlc2l6ZSA9ICEhaW1wb3J0c1snbW9kdWxlcy9pbWFnZVJlc2l6ZSddO1xyXG4gICAgICAgICAgICBjb25zdCBoYXNNZW50aW9uID0gISFpbXBvcnRzWydtb2R1bGVzL21lbnRpb24nXTtcclxuICAgICAgICAgICAgcmV0dXJuIGhhc0ltYWdlUmVzaXplICYmIGhhc01lbnRpb247XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVmFsaWRhdGVzIGtleWJvYXJkIGJpbmRpbmcgc3RydWN0dXJlIHRvIHByZXZlbnQgZXJyb3JzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgdmFsaWRhdGVLZXlib2FyZEJpbmRpbmcoYmluZGluZzogYW55KTogYm9vbGVhbiB7XHJcbiAgICAgICAgaWYgKCFiaW5kaW5nIHx8IHR5cGVvZiBiaW5kaW5nICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBDaGVjayBpZiBwcmVmaXgvc3VmZml4IGFyZSBwcm9wZXJseSBmb3JtZWQgKHNob3VsZCBiZSBSZWdFeHAgb3IgdW5kZWZpbmVkKVxyXG4gICAgICAgIGlmIChiaW5kaW5nLnByZWZpeCAmJiB0eXBlb2YgYmluZGluZy5wcmVmaXggIT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGJpbmRpbmcuc3VmZml4ICYmIHR5cGVvZiBiaW5kaW5nLnN1ZmZpeCAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gRW5zdXJlIHByZWZpeC9zdWZmaXggYXJlIG5vdCBlbXB0eSBvYmplY3RzICh3aGljaCBjYXVzZSB0aGUgLnRlc3QgZXJyb3IpXHJcbiAgICAgICAgaWYgKGJpbmRpbmcucHJlZml4ICYmIE9iamVjdC5rZXlzKGJpbmRpbmcucHJlZml4KS5sZW5ndGggPT09IDAgJiYgIWJpbmRpbmcucHJlZml4LnRlc3QpIHtcclxuICAgICAgICAgICAgZGVsZXRlIGJpbmRpbmcucHJlZml4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoYmluZGluZy5zdWZmaXggJiYgT2JqZWN0LmtleXMoYmluZGluZy5zdWZmaXgpLmxlbmd0aCA9PT0gMCAmJiAhYmluZGluZy5zdWZmaXgudGVzdCkge1xyXG4gICAgICAgICAgICBkZWxldGUgYmluZGluZy5zdWZmaXg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEVuc3VyZXMga2V5Ym9hcmQgYmluZGluZ3MgaW50ZWdyaXR5IGF0IHRoZSBnbG9iYWwgbGV2ZWxcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBlbnN1cmVLZXlib2FyZEJpbmRpbmdzSW50ZWdyaXR5KCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChnbG9iYWxEZWZhdWx0S2V5Ym9hcmRCaW5kaW5ncykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgS2V5Ym9hcmQgPSBRdWlsbC5pbXBvcnQoJ21vZHVsZXMva2V5Ym9hcmQnKSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBpZiAoS2V5Ym9hcmQgJiYgS2V5Ym9hcmQuREVGQVVMVFMgJiYgS2V5Ym9hcmQuREVGQVVMVFMuYmluZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgcmVzdG9yZSBvcmlnaW5hbCBiaW5kaW5ncyBpZiB0aGV5J3ZlIGJlZW4gbW9kaWZpZWRcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGVhbkJpbmRpbmdzID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShnbG9iYWxEZWZhdWx0S2V5Ym9hcmRCaW5kaW5ncykpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBlYWNoIGJpbmRpbmcgY2F0ZWdvcnlcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IGtleSBpbiBjbGVhbkJpbmRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGNsZWFuQmluZGluZ3Nba2V5XSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuQmluZGluZ3Nba2V5XSA9IGNsZWFuQmluZGluZ3Nba2V5XS5maWx0ZXIoKGJpbmRpbmc6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlS2V5Ym9hcmRCaW5kaW5nKGJpbmRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBLZXlib2FyZC5ERUZBVUxUUy5iaW5kaW5ncyA9IGNsZWFuQmluZGluZ3M7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBDb3VsZCBub3QgcmVzdG9yZSBnbG9iYWwga2V5Ym9hcmQgYmluZGluZ3M6JywgZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIEZvcmNlcyByZXN0b3JhdGlvbiBvZiBrZXlib2FyZCBiaW5kaW5ncyB0byBlbnN1cmUgY29uc2lzdGVudCBFbnRlciBrZXkgYmVoYXZpb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBmb3JjZUtleWJvYXJkQmluZGluZ1Jlc3RvcmF0aW9uKGVkaXRvcjogUXVpbGwpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBrZXlib2FyZCA9IGVkaXRvci5nZXRNb2R1bGUoJ2tleWJvYXJkJykgYXMgYW55O1xyXG4gICAgICAgICAgICBpZiAoa2V5Ym9hcmQgJiYga2V5Ym9hcmQuYmluZGluZ3MpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBSZXN0b3JlIHRoZSBjb3JyZWN0IEVudGVyIGtleSBiaW5kaW5nIG9yZGVyXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb3JyZWN0RW50ZXJCaW5kaW5ncyA9IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0VudGVyJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdFbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBbJ2Jsb2NrcXVvdGUnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogWydsaXN0J10sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdsaXN0JzogJ2NoZWNrZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogWydoZWFkZXInXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdFbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFsndGFibGUnXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdFbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBbJ2NvZGUtYmxvY2snXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdFbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoaWZ0S2V5OiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWV0YUtleTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3RybEtleTogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0S2V5OiBudWxsXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBhbmQgZm9yY2Ugb3ZlcndyaXRlIHRoZSBFbnRlciBiaW5kaW5nc1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleWJvYXJkLmJpbmRpbmdzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRhdGVkQmluZGluZ3MgPSBjb3JyZWN0RW50ZXJCaW5kaW5ncy5maWx0ZXIoYmluZGluZyA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbGlkYXRlS2V5Ym9hcmRCaW5kaW5nKGJpbmRpbmcpXHJcbiAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICBrZXlib2FyZC5iaW5kaW5ncy5FbnRlciA9IHZhbGlkYXRlZEJpbmRpbmdzO1xyXG4gICAgICAgICAgICAgICAgICAgIGtleWJvYXJkLmJpbmRpbmdzWzEzXSA9IHZhbGlkYXRlZEJpbmRpbmdzO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign4p2MIEVycm9yIGZvcmNpbmcga2V5Ym9hcmQgYmluZGluZyByZXN0b3JhdGlvbjonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogRGVidWcgbWV0aG9kIHRvIGxvZyBrZXlib2FyZCBiaW5kaW5ncyBzdHJ1Y3R1cmVcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBkZWJ1Z0tleWJvYXJkQmluZGluZ3MoZWRpdG9yOiBRdWlsbCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGtleWJvYXJkID0gZWRpdG9yLmdldE1vZHVsZSgna2V5Ym9hcmQnKSBhcyBhbnk7XHJcbiAgICAgICAgICAgIGlmIChrZXlib2FyZCAmJiBrZXlib2FyZC5iaW5kaW5ncykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGtleWJvYXJkLmJpbmRpbmdzLkVudGVyIHx8IGtleWJvYXJkLmJpbmRpbmdzWzEzXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGVudGVyQmluZGluZ3MgPSBrZXlib2FyZC5iaW5kaW5ncy5FbnRlciB8fCBrZXlib2FyZC5iaW5kaW5nc1sxM107XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfwn5CbIEVycm9yIGRlYnVnZ2luZyBrZXlib2FyZCBiaW5kaW5nczonLCBlcnJvcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVzdG9yZXMgZGVmYXVsdCBrZXlib2FyZCBiaW5kaW5ncyB0byBlbnN1cmUgY29uc2lzdGVudCBFbnRlciBrZXkgYmVoYXZpb3JcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSByZXN0b3JlRGVmYXVsdEtleWJvYXJkQmluZGluZ3MoKTogYW55IHtcclxuICAgICAgICBpZiAoZ2xvYmFsRGVmYXVsdEtleWJvYXJkQmluZGluZ3MpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNsZWFuQmluZGluZ3MgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGdsb2JhbERlZmF1bHRLZXlib2FyZEJpbmRpbmdzKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgYWxsIGJpbmRpbmdzIGJlZm9yZSByZXR1cm5pbmdcclxuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGNsZWFuQmluZGluZ3MpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShjbGVhbkJpbmRpbmdzW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsZWFuQmluZGluZ3Nba2V5XSA9IGNsZWFuQmluZGluZ3Nba2V5XS5maWx0ZXIoKGJpbmRpbmc6IGFueSkgPT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsaWRhdGVLZXlib2FyZEJpbmRpbmcoYmluZGluZylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nczogY2xlYW5CaW5kaW5nc1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqg77iPIEVycm9yIHByb2Nlc3NpbmcgZ2xvYmFsIGtleWJvYXJkIGJpbmRpbmdzLCB1c2luZyBmYWxsYmFjazonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEZhbGxiYWNrIHRvIHNhZmUgZGVmYXVsdCBiaW5kaW5nc1xyXG4gICAgICAgIC8vIENvbXByZWhlbnNpdmUga2V5Ym9hcmQgY29uZmlndXJhdGlvbiB3aXRoIHByb3BlciBFbnRlciBrZXkgaGFuZGxpbmdcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBiaW5kaW5nczoge1xyXG4gICAgICAgICAgICAgICAgJ0VudGVyJzogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRW50ZXInXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFsnYmxvY2txdW90ZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdFbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBbJ2xpc3QnXSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHk6IHRydWVcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xsYXBzZWQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2xpc3QnOiAnY2hlY2tlZCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICdFbnRlcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxhcHNlZDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0OiBbJ2hlYWRlciddXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm1hdDogWyd0YWJsZSddXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29sbGFwc2VkOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtYXQ6IFsnY29kZS1ibG9jayddXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogJ0VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hpZnRLZXk6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiAnRW50ZXInLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXRhS2V5OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdHJsS2V5OiBudWxsLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHRLZXk6IG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBkZWZhdWx0IHRvb2xiYXIgY29uZmlndXJhdGlvblxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZURlZmF1bHRUb29sYmFyQ29uZmlnKCk6IGFueSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyOiBbXHJcbiAgICAgICAgICAgICAgICAgICAgWydib2xkJywgJ2l0YWxpYycsICd1bmRlcmxpbmUnXSxcclxuICAgICAgICAgICAgICAgICAgICBbJ2Jsb2NrcXVvdGUnLCAnY29kZS1ibG9jaycsICdjb2RlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2hlYWRlcic6IDEgfSwgeyAnaGVhZGVyJzogMiB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbeyAnbGlzdCc6ICdvcmRlcmVkJyB9LCB7ICdsaXN0JzogJ2J1bGxldCcgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ3NjcmlwdCc6ICdzdWInIH0sIHsgJ3NjcmlwdCc6ICdzdXBlcicgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2luZGVudCc6ICctMScgfSwgeyAnaW5kZW50JzogJysxJyB9XSxcclxuICAgICAgICAgICAgICAgICAgICBbeyAnZGlyZWN0aW9uJzogJ3J0bCcgfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ3NpemUnOiBbJ3NtYWxsJywgZmFsc2UsICdsYXJnZScsICdodWdlJ10gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2hlYWRlcic6IFsxLCAyLCAzLCA0LCA1LCA2LCBmYWxzZV0gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2NvbG9yJzogW10gfSwgeyAnYmFja2dyb3VuZCc6IFtdIH1dLFxyXG4gICAgICAgICAgICAgICAgICAgIFt7ICdmb250JzogW10gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgW3sgJ2FsaWduJzogW10gfV0sXHJcbiAgICAgICAgICAgICAgICAgICAgWydjbGVhbiddLFxyXG4gICAgICAgICAgICAgICAgICAgIFsnbGluaycsICdpbWFnZSddIC8vIE5vIHZpZGVvIGluIGRlZmF1bHQgY29uZmlndXJhdGlvblxyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXJzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2U6ICgpID0+IHRoaXMuc2VsZWN0SW1hZ2UoKSxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAodmFsdWUpID0+IHRoaXMuaGFuZGxlTGlua0NsaWNrKHZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjbGlwYm9hcmQ6IHtcclxuICAgICAgICAgICAgICAgIG1hZ2ljUGFzdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgbWF0Y2hWaXN1YWw6IGZhbHNlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGtleWJvYXJkOiB0aGlzLnJlc3RvcmVEZWZhdWx0S2V5Ym9hcmRCaW5kaW5ncygpLFxyXG4gICAgICAgICAgICBpbWFnZVJlc2l6ZTogdHJ1ZVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDcmVhdGVzIGN1c3RvbSB0b29sYmFyIGNvbmZpZ3VyYXRpb24gZnJvbSBhZGRpdGlvbmFsUGFyYW1ldGVyXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgY3JlYXRlQ3VzdG9tVG9vbGJhckNvbmZpZygpOiBhbnkge1xyXG4gICAgICAgIGNvbnN0IGpzb25TdHJpbmcgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9lZGl0b3Jfb3B0aW9ucyddLnJlcGxhY2UoL1xcXFxcIi9nLCAnXCInKTtcclxuICAgICAgICBsZXQgb2JqID0gSlNPTi5wYXJzZShqc29uU3RyaW5nKTtcclxuICAgICAgICBvYmouaGFuZGxlcnMgPSB7XHJcbiAgICAgICAgICAgIGltYWdlOiAoKSA9PiB0aGlzLnNlbGVjdEltYWdlKCksXHJcbiAgICAgICAgICAgIGxpbms6ICh2YWx1ZSkgPT4gdGhpcy5oYW5kbGVMaW5rQ2xpY2sodmFsdWUpXHJcbiAgICAgICAgfTtcclxuICAgICAgICBpZiAob2JqLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICBvYmouY29udGFpbmVyID0gb2JqLmNvbnRhaW5lci5tYXAoKGdyb3VwOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGdyb3VwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBncm91cC5maWx0ZXIoKGl0ZW06IGFueSkgPT4gaXRlbSAhPT0gJ3ZpZGVvJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZ3JvdXA7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdG9vbGJhcjoge1xyXG4gICAgICAgICAgICAgICAgLi4ub2JqXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNsaXBib2FyZDoge1xyXG4gICAgICAgICAgICAgICAgbWFnaWNQYXN0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBtYXRjaFZpc3VhbDogZmFsc2VcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAga2V5Ym9hcmQ6IHRoaXMucmVzdG9yZURlZmF1bHRLZXlib2FyZEJpbmRpbmdzKClcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ3JlYXRlcyBtZW50aW9uIGNvbmZpZ3VyYXRpb24gZm9yIHRhZ2dpbmcgZnVuY3Rpb25hbGl0eVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGNyZWF0ZU1lbnRpb25Db25maWcoKTogYW55IHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBhbGxvd2VkQ2hhcnM6IC9eW0EtWmEtelxcc8OFw4TDlsOlw6TDtjAtOV0qJC8sXHJcbiAgICAgICAgICAgIG1lbnRpb25EZW5vdGF0aW9uQ2hhcnM6IFtcIkBcIiwgXCIjXCJdLFxyXG4gICAgICAgICAgICBzaG93RGVub3RhdGlvbkNoYXI6IHRydWUsXHJcbiAgICAgICAgICAgIGlzb2xhdGVDaGFyYWN0ZXI6IGZhbHNlLFxyXG4gICAgICAgICAgICBmaXhNZW50aW9uc1RvUXVpbGw6IHRydWUsXHJcbiAgICAgICAgICAgIHBvc2l0aW9uaW5nU3RyYXRlZ3k6ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIGRlZmF1bHRNZW51T3JpZW50YXRpb246ICdib3R0b20nLFxyXG4gICAgICAgICAgICAvLyBzZWxlY3RLZXlzOiBbMTMsIDldLFxyXG4gICAgICAgICAgICBtaW5DaGFyczogMCxcclxuICAgICAgICAgICAgbWF4Q2hhcnM6IDUwLFxyXG4gICAgICAgICAgICByZW5kZXJMb2FkaW5nOiAoKSA9PiAnTG9hZGluZy4uLicsXHJcbiAgICAgICAgICAgIGxpbmtUYXJnZXQ6ICdfYmxhbmsnLFxyXG4gICAgICAgICAgICBsaXN0SXRlbUNsYXNzOiAncWwtbWVudGlvbi1saXN0LWl0ZW0nLFxyXG4gICAgICAgICAgICBtZW50aW9uQ29udGFpbmVyQ2xhc3M6ICdxbC1tZW50aW9uLWxpc3QtY29udGFpbmVyJyxcclxuICAgICAgICAgICAgbWVudGlvbkxpc3RDbGFzczogJ3FsLW1lbnRpb24tbGlzdCcsXHJcbiAgICAgICAgICAgIGJsb3ROYW1lOiAnbWVudGlvbicsXHJcbiAgICAgICAgICAgIGhvdmVyQ2xhc3M6ICdzZWxlY3RlZCcsXHJcbiAgICAgICAgICAgIHNlbGVjdENsYXNzOiAnc2VsZWN0ZWQnLFxyXG4gICAgICAgICAgICBzcGFjZUFmdGVySW5zZXJ0OiB0cnVlLFxyXG4gICAgICAgICAgICBzdHJpcEhUTUw6IHRydWUsXHJcbiAgICAgICAgICAgIGRhdGFBdHRyaWJ1dGVzOiBbJ2lkJywgJ3ZhbHVlJ10sXHJcbiAgICAgICAgICAgIG9uU2VsZWN0OiAoaXRlbTogYW55LCBpbnNlcnRJdGVtOiBhbnkpID0+IHRoaXMuaGFuZGxlTWVudGlvblNlbGVjdChpdGVtLCBpbnNlcnRJdGVtKSxcclxuICAgICAgICAgICAgcmVuZGVySXRlbTogKGl0ZW06IGFueSwgc2VhcmNoVGVybTogYW55KSA9PiB0aGlzLnJlbmRlck1lbnRpb25JdGVtKGl0ZW0sIHNlYXJjaFRlcm0pLFxyXG4gICAgICAgICAgICBzb3VyY2U6IChzZWFyY2hUZXJtOiBhbnksIHJlbmRlckxpc3Q6IGFueSwgbWVudGlvbkNoYXI6IGFueSkgPT4gdGhpcy5oYW5kbGVNZW50aW9uU291cmNlKHNlYXJjaFRlcm0sIHJlbmRlckxpc3QsIG1lbnRpb25DaGFyKSxcclxuICAgICAgICAgICAgX3VuaXF1ZUtleTogYG1lbnRpb25fJHtEYXRlLm5vdygpfV8ke01hdGgucmFuZG9tKCl9XyR7dGhpcy5jb21wb25lbnRLZXkgfHwgJ2RlZmF1bHQnfWBcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyBtZW50aW9uIGl0ZW0gc2VsZWN0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlTWVudGlvblNlbGVjdChpdGVtOiBhbnksIGluc2VydEl0ZW06IGFueSk6IHZvaWQge1xyXG4gICAgICAgIGlmICghaXRlbSB8fCB0eXBlb2YgaXRlbSAhPT0gJ29iamVjdCcgfHwgIWl0ZW0udmFsdWUgfHwgdHlwZW9mIGl0ZW0udmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGl0ZW0gPSB7IGlkOiAnZmFsbGJhY2snLCB2YWx1ZTogJ1Vua25vd24gTWVudGlvbicgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuc2VhcmNoU3RyID0gbnVsbDtcclxuICAgICAgICBpbnNlcnRJdGVtKGl0ZW0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVuZGVycyBtZW50aW9uIGl0ZW0gZGlzcGxheVxyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlbmRlck1lbnRpb25JdGVtKGl0ZW06IGFueSwgc2VhcmNoVGVybTogYW55KTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgaWYgKCFpdGVtIHx8IHR5cGVvZiBpdGVtICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICByZXR1cm4gJ0ludmFsaWQgSXRlbSc7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBkaXNwbGF5VmFsdWUgPSBpdGVtLnZhbHVlICYmIHR5cGVvZiBpdGVtLnZhbHVlID09PSAnc3RyaW5nJyAmJiBpdGVtLnZhbHVlLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgPyBpdGVtLnZhbHVlXHJcbiAgICAgICAgICAgIDogJ1Vua25vd24gSXRlbSc7XHJcblxyXG4gICAgICAgIGNvbnN0IGl0ZW1EaXNwbGF5ID0gYPCfkaQgJHtkaXNwbGF5VmFsdWV9YDtcclxuICAgICAgICByZXR1cm4gaXRlbURpc3BsYXk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBIYW5kbGVzIG1lbnRpb24gc291cmNlIGRhdGEgcmV0cmlldmFsIGFuZCBmaWx0ZXJpbmdcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVNZW50aW9uU291cmNlKHNlYXJjaFRlcm06IGFueSwgcmVuZGVyTGlzdDogYW55LCBtZW50aW9uQ2hhcjogYW55KTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zYWZlRXhlY3V0ZSgoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAvLyBWYWxpZGF0ZSByZW5kZXJMaXN0IGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVuZGVyTGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBzYWZlU2VhcmNoVGVybSA9IHNlYXJjaFRlcm0gPT09IG51bGwgfHwgc2VhcmNoVGVybSA9PT0gdW5kZWZpbmVkID8gJycgOiBTdHJpbmcoc2VhcmNoVGVybSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNhZmVNZW50aW9uQ2hhciA9IG1lbnRpb25DaGFyID09PSBudWxsIHx8IG1lbnRpb25DaGFyID09PSB1bmRlZmluZWQgPyAnQCcgOiBTdHJpbmcobWVudGlvbkNoYXIpO1xyXG5cclxuICAgICAgICAgICAgLy8gUmVzZXQgc2VhcmNoU3RyIGZvciBmcmVzaCBwcm9jZXNzaW5nXHJcbiAgICAgICAgICAgIGlmIChzYWZlTWVudGlvbkNoYXIgPT09ICdAJyB8fCBzYWZlTWVudGlvbkNoYXIgPT09ICcjJykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZWFyY2hTdHIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYXN0TWVudGlvblNlYXJjaFRlcm0gPSAnICc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIElmIEFQSSBzZWFyY2ggaXMgZW5hYmxlZCwgaGFuZGxlIEFQSS1iYXNlZCBzZWFyY2hcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNBcGlTZWFyY2hFbmFibGVkRm9yTWVudGlvbikge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHNlYXJjaCB0ZXJtIGhhcyBhY3R1YWxseSBjaGFuZ2VkXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5sYXN0TWVudGlvblNlYXJjaFRlcm0gPT09IHNhZmVTZWFyY2hUZXJtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuOyAvLyBTa2lwIGR1cGxpY2F0ZSBjYWxscyB3aXRoIHNhbWUgc2VhcmNoIHRlcm1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lbnRpb25TZWFyY2hUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMubWVudGlvblNlYXJjaFRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIFN0b3JlIGN1cnJlbnQgcmVuZGVyIGxpc3QgYW5kIHNlYXJjaCB0ZXJtXHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRSZW5kZXJMaXN0ID0gcmVuZGVyTGlzdDtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudFNlYXJjaFRlcm0gPSBzYWZlU2VhcmNoVGVybTtcclxuICAgICAgICAgICAgICAgIHRoaXMubGFzdE1lbnRpb25TZWFyY2hUZXJtID0gc2FmZVNlYXJjaFRlcm07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2hvdyBsb2FkaW5nIHN0YXRlIGltbWVkaWF0ZWx5XHJcbiAgICAgICAgICAgICAgICByZW5kZXJMaXN0KFt7IGlkOiAnbG9hZGluZycsIHZhbHVlOiAnTG9hZGluZy4uLicgfV0sIHNhZmVTZWFyY2hUZXJtKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBEZWJvdW5jZSB0aGUgQVBJIGNhbGxcclxuICAgICAgICAgICAgICAgIHRoaXMubWVudGlvblNlYXJjaFRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUFwaUJhc2VkTWVudGlvblNlYXJjaChzYWZlU2VhcmNoVGVybSwgcmVuZGVyTGlzdCwgc2FmZU1lbnRpb25DaGFyKTtcclxuICAgICAgICAgICAgICAgIH0sICB0aGlzLnNlYXJjaERlYm91bmNlVGltZSk7IC8vIDMwMG1zIGRlYm91bmNlIGRlbGF5XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SWRzLnB1c2godGhpcy5tZW50aW9uU2VhcmNoVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLmdldE1lbnRpb25WYWx1ZXMoKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5pc1ZhbGlkQXJyYXkodmFsdWVzLCAnbWVudGlvbiB2YWx1ZXMnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhbHVlcyA9IHRoaXMuc2FuaXRpemVNZW50aW9uVmFsdWVzKHZhbHVlcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbXB0eU1lbnRpb25WYWx1ZXMocmVuZGVyTGlzdCwgc2FmZVNlYXJjaFRlcm0pO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpc0VtcHR5U2VhcmNoID0gIXNhZmVTZWFyY2hUZXJtIHx8IHNhZmVTZWFyY2hUZXJtLmxlbmd0aCA9PT0gMCB8fCBzYWZlU2VhcmNoVGVybS50cmltKCkgPT09ICcnO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzRW1wdHlTZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlRW1wdHlTZWFyY2godmFsdWVzLCByZW5kZXJMaXN0LCBzYWZlU2VhcmNoVGVybSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUZpbHRlcmVkU2VhcmNoKHZhbHVlcywgcmVuZGVyTGlzdCwgc2FmZVNlYXJjaFRlcm0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlYXJjaFN0ciA9IHNhZmVTZWFyY2hUZXJtO1xyXG5cclxuICAgICAgICB9LCAnQ1JJVElDQUwgRVJST1IgaW4gbWVudGlvbiBzb3VyY2UgZnVuY3Rpb24nLCAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMucmVuZGVyRW1lcmdlbmN5RmFsbGJhY2socmVuZGVyTGlzdCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQXBpQmFzZWRNZW50aW9uU2VhcmNoKHNlYXJjaFRlcm06IHN0cmluZywgcmVuZGVyTGlzdDogRnVuY3Rpb24sIG1lbnRpb25DaGFyOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRSZW5kZXJMaXN0ID0gcmVuZGVyTGlzdDtcclxuICAgICAgICB0aGlzLmN1cnJlbnRTZWFyY2hUZXJtID0gc2VhcmNoVGVybTtcclxuICAgICAgICB0aGlzLnVwZGF0ZURhdGFPbkNoYW5nZShzZWFyY2hUZXJtKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbktleVVwJywge1xyXG4gICAgICAgICAgICAgICAgaW50ZXJuYWxBUElSZXNwb25zZUVtaXR0ZXI6IHRoaXMuaW50ZXJuYWxBUElSZXNwb25zZUVtaXR0ZXJcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSwgMTAwKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHVwZGF0ZURhdGFPbkNoYW5nZSh0ZXJtOiBzdHJpbmcpIHtcclxuICAgICAgICBjb25zdCBhcGlEYXRhID0ge1xyXG4gICAgICAgICAgICBpZDogdGhpcy5yZXF1ZXN0QXBpS2V5Rm9yU2VhcmNoLFxyXG4gICAgICAgICAgICBhcGlVcmw6ICcnLFxyXG4gICAgICAgICAgICBhcGlLZXk6IHRoaXMucmVxdWVzdEFwaUtleUZvclNlYXJjaCxcclxuICAgICAgICAgICAgdmFsdWU6IHRlcm1cclxuICAgICAgICB9O1xyXG4gICAgICAgIHRoaXMuYXBpRGF0YVNlcnZpY2Uuc2V0QXBpRGF0YShPYmplY3QuYXNzaWduKHt9LCBhcGlEYXRhKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBHZXRzIG1lbnRpb24gdmFsdWVzIGZyb20gYWxsT3B0aW9ucyBvciBleHRlcm5hbCBBUElcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBnZXRNZW50aW9uVmFsdWVzKCk6IGFueVtdIHtcclxuICAgICAgICBsZXQgdmFsdWVzID0gdGhpcy5hbGxPcHRpb25zIHx8IFtdO1xyXG5cclxuICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSkge1xyXG4gICAgICAgICAgICBjb25zdCBleHRlcm5hbE9wdGlvbnMgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSB8fCBbXTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNOb25FbXB0eUFycmF5KGV4dGVybmFsT3B0aW9ucywgJ2V4dGVybmFsIG9wdGlvbnMnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gZXh0ZXJuYWxPcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gdmFsdWVzO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIC8vICAgICBpZiAodGhpcy5yZWZyZXNoTWVudGlvbkRhdGEoKSAmJiB0aGlzLmlzTm9uRW1wdHlBcnJheSh0aGlzLmFsbE9wdGlvbnMsICdyZWZyZXNoZWQgb3B0aW9ucycpKSB7XHJcbiAgICAgICAgLy8gICAgICAgICB2YWx1ZXMgPSB0aGlzLmFsbE9wdGlvbnM7XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG4gICAgICAgIHJldHVybiB2YWx1ZXM7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTYW5pdGl6ZXMgbWVudGlvbiB2YWx1ZXMgYXJyYXlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzYW5pdGl6ZU1lbnRpb25WYWx1ZXModmFsdWVzOiBhbnlbXSk6IGFueVtdIHtcclxuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZURhdGFBcnJheSh2YWx1ZXMsICdtZW50aW9uIHZhbHVlcycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyBlbXB0eSBtZW50aW9uIHZhbHVlcyBzY2VuYXJpb1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGhhbmRsZUVtcHR5TWVudGlvblZhbHVlcyhyZW5kZXJMaXN0OiBGdW5jdGlvbiwgc2VhcmNoVGVybTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmVuZGVyTGlzdChbXSwgc2VhcmNoVGVybSk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gcmVuZGVyIGVtcHR5IGxpc3Q6JywgZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyBlbXB0eSBzZWFyY2ggKHNob3cgYWxsIHZhbHVlcylcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBoYW5kbGVFbXB0eVNlYXJjaCh2YWx1ZXM6IGFueVtdLCByZW5kZXJMaXN0OiBGdW5jdGlvbiwgc2VhcmNoVGVybTogc3RyaW5nKTogdm9pZCB7XHJcblxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlU3RyaW5ncyA9IHZhbHVlcy5tYXAodiA9PiB2ICYmIHYudmFsdWUgJiYgdHlwZW9mIHYudmFsdWUgPT09ICdzdHJpbmcnID8gYFwiJHt2LnZhbHVlfVwiYCA6ICdcIkludmFsaWRcIicpLmpvaW4oJywgJyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGNyZWF0aW5nIHZhbHVlIHN0cmluZzonLCBlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICB0aGlzLnNhZmVSZW5kZXJMaXN0KHJlbmRlckxpc3QsIHZhbHVlcywgc2VhcmNoVGVybSwgJ3ZhbHVlcycpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSGFuZGxlcyBmaWx0ZXJlZCBzZWFyY2ggKHNlYXJjaCB3aXRoIHRlcm0pXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgaGFuZGxlRmlsdGVyZWRTZWFyY2godmFsdWVzOiBhbnlbXSwgcmVuZGVyTGlzdDogRnVuY3Rpb24sIHNlYXJjaFRlcm06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGNvbnN0IG1hdGNoZXM6IGFueVtdID0gW107XHJcbiAgICAgICAgdmFsdWVzLmZvckVhY2goKGVudHJ5LCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaXNWYWxpZEVudHJ5KGVudHJ5LCBpbmRleCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBlbnRyeVZhbHVlID0gZW50cnkudmFsdWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWFyY2hUZXJtTG93ZXIgPSBzZWFyY2hUZXJtLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeVZhbHVlLmluZGV4T2Yoc2VhcmNoVGVybUxvd2VyKSAhPT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlcy5wdXNoKGVudHJ5KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBwcm9jZXNzaW5nIGVudHJ5IGF0IGluZGV4ICR7aW5kZXh9OmAsIGVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGlmIChtYXRjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoU3RyaW5ncyA9IG1hdGNoZXMubWFwKG0gPT4gbSAmJiBtLnZhbHVlICYmIHR5cGVvZiBtLnZhbHVlID09PSAnc3RyaW5nJyA/IGBcIiR7bS52YWx1ZX1cImAgOiAnXCJJbnZhbGlkXCInKS5qb2luKCcsICcpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ0Vycm9yIGNyZWF0aW5nIG1hdGNoIHN0cmluZzonLCBlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHRoaXMuc2FmZVJlbmRlckxpc3QocmVuZGVyTGlzdCwgbWF0Y2hlcywgc2VhcmNoVGVybSwgJ21hdGNoZXMnKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFJlbmRlcnMgZW1lcmdlbmN5IGZhbGxiYWNrIHdoZW4gZXZlcnl0aGluZyBmYWlsc1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIHJlbmRlckVtZXJnZW5jeUZhbGxiYWNrKHJlbmRlckxpc3Q6IEZ1bmN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgZW1lcmdlbmN5RmFsbGJhY2sgPSBbXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAxLCB2YWx1ZTogJ0VtZXJnZW5jeSBJdGVtIDEnIH0sXHJcbiAgICAgICAgICAgICAgICB7IGlkOiAyLCB2YWx1ZTogJ0VtZXJnZW5jeSBJdGVtIDInIH1cclxuICAgICAgICAgICAgXTtcclxuICAgICAgICAgICAgcmVuZGVyTGlzdChlbWVyZ2VuY3lGYWxsYmFjaywgJycpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGZhbGxiYWNrRXJyb3IpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHJlbmRlckxpc3QoW10sICcnKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAobGFzdFJlc29ydEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDb21wbGV0ZSBmYWlsdXJlIC0gY2Fubm90IHJlbmRlciBhbnl0aGluZzonLCBsYXN0UmVzb3J0RXJyb3IpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHNlbGVjdEltYWdlKCkge1xyXG4gICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgICAgIGlucHV0LmFjY2VwdCA9ICdpbWFnZS8qJztcclxuICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgICAgIGlucHV0Lm9uY2hhbmdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXM/LlswXTtcclxuICAgICAgICAgICAgaWYgKGZpbGUpIHtcclxuICAgICAgICAgICAgICAgIGxldCBmaWxlVG9Db21wcmVzcyA9IGZpbGU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pc0hFSUMoZmlsZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmaWxlVG9Db21wcmVzcyA9IGF3YWl0IHRoaXMuY29udmVydEhFSUNUb1BORyhmaWxlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXByZXNzZWRJbWFnZSA9IGF3YWl0IHRoaXMuY29tcHJlc3NJbWFnZShmaWxlVG9Db21wcmVzcywgODAwLCA2MDAsIDAuNik7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG4gICAgICAgICAgICAgICAgcmVhZGVyLnJlYWRBc0RhdGFVUkwoY29tcHJlc3NlZEltYWdlKTtcclxuICAgICAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcXVpbGxJbnN0YW5jZSA9IHRoaXMubWVRdWlsbFJlZjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXF1aWxsSW5zdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByYW5nZSA9IHF1aWxsSW5zdGFuY2UuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyYW5nZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWlsbEluc3RhbmNlLmluc2VydEVtYmVkKHF1aWxsSW5zdGFuY2UuZ2V0TGVuZ3RoKCksICdpbWFnZScsIHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1aWxsSW5zdGFuY2UuaW5zZXJ0RW1iZWQocmFuZ2UuaW5kZXgsICdpbWFnZScsIHJlYWRlci5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUVkaXRvckZpZWxkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpc0hFSUMoZmlsZTogRmlsZSk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiAoZmlsZS50eXBlID09PSBcImltYWdlL2hlaWNcIiB8fCBmaWxlLm5hbWUuc3BsaXQoJy4nKS5wb3AoKS50b0xvd2VyQ2FzZSgpID09PSBcImhlaWNcIik7ICAvLyBDaGVjayBNSU1FIHR5cGUgKGl0IG1pZ2h0IGJlIGF2YWlsYWJsZSBpbiBzb21lIGJyb3dzZXJzKVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29udmVydEhFSUNUb1BORyhmaWxlOiBhbnkpOiBQcm9taXNlPEZpbGU+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBoZWljMmFueSh7XHJcbiAgICAgICAgICAgICAgICBibG9iOiBmaWxlLFxyXG4gICAgICAgICAgICAgICAgdG9UeXBlOiBcImltYWdlL3BuZ1wiLFxyXG4gICAgICAgICAgICB9KS50aGVuKChjb252ZXJ0ZWRCbG9iOiBCbG9iKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwbmdGaWxlID0gbmV3IEZpbGUoW2NvbnZlcnRlZEJsb2JdLCBmaWxlLm5hbWUucmVwbGFjZSgvXFwuaGVpYyQvaSwgXCIucG5nXCIpLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcclxuICAgICAgICAgICAgICAgICAgICBsYXN0TW9kaWZpZWQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUocG5nRmlsZSk7ICAvLyBSZXNvbHZlIHRoZSBwcm9taXNlIHdpdGggdGhlIHBuZ0ZpbGVcclxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycm9yOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjb252ZXJ0aW5nIEhFSUMgdG8gUE5HOlwiLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpOyAgLy8gUmVqZWN0IHRoZSBwcm9taXNlIGluIGNhc2Ugb2YgYW4gZXJyb3JcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHVwZGF0ZUVkaXRvckZpZWxkKCkge1xyXG4gICAgICAgIC8vIGFmdGVyIGltYWdlIHVwbG9hZCBuZWVkIHRyaWdnZXIgY2hhbmdlXHJcbiAgICAgICAgY29uc3QgZWRpdG9yID0gdGhpcy5xdWlsbEVkaXRvciAmJiB0aGlzLnF1aWxsRWRpdG9yLnF1aWxsRWRpdG9yO1xyXG4gICAgICAgIGlmIChlZGl0b3IpIHtcclxuICAgICAgICAgICAgZWRpdG9yLmluc2VydFRleHQoZWRpdG9yLmdldExlbmd0aCgpIC0gMSwgJycsICd1c2VyJyk7XHJcblxyXG4gICAgICAgICAgICAvLyBDbGVhciBjbGlwYm9hcmQgYWZ0ZXIgZWRpdG9yIGZpZWxkIHVwZGF0ZVxyXG4gICAgICAgICAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMuY2xlYXJDbGlwYm9hcmQoKTtcclxuICAgICAgICAgICAgLy8gfSwgMTAwKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgY29tcHJlc3NJbWFnZShmaWxlOiBGaWxlLCBtYXhXaWR0aDogbnVtYmVyLCBtYXhIZWlnaHQ6IG51bWJlciwgcXVhbGl0eTogbnVtYmVyKTogUHJvbWlzZTxGaWxlPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGZpbGUpO1xyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgIGltZy5zcmMgPSBldmVudC50YXJnZXQ/LnJlc3VsdCBhcyBzdHJpbmc7XHJcblxyXG4gICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGggPSBpbWcud2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGhlaWdodCA9IGltZy5oZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2l6ZSBsb2dpY1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3aWR0aCA+IG1heFdpZHRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IChtYXhXaWR0aCAvIHdpZHRoKSAqIGhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGggPSBtYXhXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGhlaWdodCA+IG1heEhlaWdodCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aCA9IChtYXhIZWlnaHQgLyBoZWlnaHQpICogd2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodCA9IG1heEhlaWdodDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY3R4Py5kcmF3SW1hZ2UoaW1nLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ29udmVydCBjYW52YXMgdG8gQmxvYlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbnZhcy50b0Jsb2IoKGJsb2IpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJsb2IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUobmV3IEZpbGUoW2Jsb2JdLCBmaWxlLm5hbWUsIHsgdHlwZTogZmlsZS50eXBlLCBsYXN0TW9kaWZpZWQ6IERhdGUubm93KCkgfSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgZmlsZS50eXBlLCBxdWFsaXR5KTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlUHJldmlldygpIHtcclxuICAgICAgICB0aGlzLnNhbml0aXplZENvbnRlbnQgPSB0aGlzLnNhbml0aXplci5ieXBhc3NTZWN1cml0eVRydXN0SHRtbCh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5pdGlhbGl6ZSBlZGl0b3IgbW9kdWxlcyBlYXJseSBmb3IgdGVtcGxhdGUgYmluZGluZ1xyXG4gICAgICovXHJcbiAgICBwcml2YXRlIGluaXRpYWxpemVFZGl0b3JNb2R1bGVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZWRpdG9yTW9kdWxlcyA9IHt9OyAvLyBSZXNldCB0byBjb21wbGV0ZWx5IGVtcHR5IG9iamVjdFxyXG5cclxuICAgICAgICAvLyBVc2UgdXRpbGl0eSBtZXRob2RzIGZvciB0b29sYmFyIGNvbmZpZ3VyYXRpb25cclxuICAgICAgICBpZiAodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfZWRpdG9yX29wdGlvbnMnXSkge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZHVsZXMgPSB0aGlzLmNyZWF0ZUN1c3RvbVRvb2xiYXJDb25maWcoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmVkaXRvck1vZHVsZXMgPSB0aGlzLmNyZWF0ZURlZmF1bHRUb29sYmFyQ29uZmlnKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmlzQXBpU2VhcmNoRW5hYmxlZEZvck1lbnRpb24gPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9FbmFibGVfQVBJX1NlYXJjaF9Gb3JfTWVudGlvbiddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX0VuYWJsZV9BUElfU2VhcmNoX0Zvcl9NZW50aW9uJ10gPT09ICd0cnVlJztcclxuICAgICAgICB0aGlzLnNlYXJjaERlYm91bmNlVGltZSA9IHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX1NlYXJjaF9EZWJvdW5jZV9UaW1lJ10gPyBwYXJzZUludCh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV9TZWFyY2hfRGVib3VuY2VfVGltZSddKTogMzAwO1xyXG4gICAgICAgIGxldCBjZWVUYWdnaW5nID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydDRUVfdGFnZ2luZyddICYmIHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnQ0VFX3RhZ2dpbmcnXSA9PT0gXCJ0cnVlXCIgPyB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgXHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKHRoaXMuaXNBcGlTZWFyY2hFbmFibGVkRm9yTWVudGlvbiAmJiBjZWVUYWdnaW5nKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0dXBTZWFyY2hBcGlDYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNlZVRhZ2dpbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXR1cE1lbnRpb25TeXN0ZW0oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFRyaWdnZXIgY2hhbmdlIGRldGVjdGlvbiB0byB1cGRhdGUgdGVtcGxhdGUgYmluZGluZ1xyXG4gICAgICAgIHRoaXMuY2RyLmRldGVjdENoYW5nZXMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFNldHMgdXAgdGhlIG1lbnRpb24gc3lzdGVtIGZvciB0YWdnaW5nIGZ1bmN0aW9uYWxpdHlcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBzZXR1cE1lbnRpb25TeXN0ZW0oKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzTm9uRW1wdHlBcnJheSh0aGlzLmFsbE9wdGlvbnMsICdtZW50aW9uIG9wdGlvbnMnKSkge1xyXG4gICAgICAgICAgICB0aGlzLmFsbE9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5sb2FkTWVudGlvbk9wdGlvbnMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEVuc3VyZSB3ZSBoYXZlIHZhbGlkIG1lbnRpb24gb3B0aW9uc1xyXG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkQXJyYXkodGhpcy5hbGxPcHRpb25zLCAnbWVudGlvbiBvcHRpb25zJykpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBEZWVwIHZhbGlkYXRlIGVhY2ggb3B0aW9uXHJcbiAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLm1hcCgob3B0aW9uLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIW9wdGlvbiB8fCB0eXBlb2Ygb3B0aW9uICE9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgaWQ6IGluZGV4ICsgMSwgdmFsdWU6IGBPcHRpb24gJHtpbmRleCArIDF9YCB9O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgaWQ6IG9wdGlvbi5pZCAhPT0gdW5kZWZpbmVkICYmIG9wdGlvbi5pZCAhPT0gbnVsbCA/IG9wdGlvbi5pZCA6IGluZGV4ICsgMSxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBvcHRpb24udmFsdWUgJiYgdHlwZW9mIG9wdGlvbi52YWx1ZSA9PT0gJ3N0cmluZycgJiYgb3B0aW9uLnZhbHVlLmxlbmd0aCA+IDBcclxuICAgICAgICAgICAgICAgICAgICA/IG9wdGlvbi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIDogYE9wdGlvbiAke2luZGV4ICsgMX1gXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMuZWRpdG9yTW9kdWxlc1snbWVudGlvbiddID0gdGhpcy5jcmVhdGVNZW50aW9uQ29uZmlnKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2FkcyBtZW50aW9uIG9wdGlvbnMgZnJvbSBleHRlcm5hbCBBUElcclxuICAgICAqL1xyXG4gICAgcHJpdmF0ZSBsb2FkTWVudGlvbk9wdGlvbnMoKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkU2FmZVRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zYWZlRXhlY3V0ZSgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJ1bnRpbWVEcm9wRG93bkRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5pc05vbkVtcHR5QXJyYXkocnVudGltZURyb3BEb3duRGF0YSwgJ3J1bnRpbWUgZHJvcGRvd24gZGF0YScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IHJ1bnRpbWVEcm9wRG93bkRhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxPcHRpb25zID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTm9uRW1wdHlBcnJheShleHRlcm5hbE9wdGlvbnMsICdleHRlcm5hbCBvcHRpb25zJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IGV4dGVybmFsT3B0aW9ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sICdFcnJvciBsb2FkaW5nIEFQSSBkYXRhIGFzeW5jaHJvbm91c2x5Jyk7XHJcbiAgICAgICAgICAgIH0sIDUwMCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBbHNvIHRyeSBpbW1lZGlhdGUgc3luYyBjYWxsIGluIGNhc2UgZGF0YSBpcyBhbHJlYWR5IGF2YWlsYWJsZVxyXG4gICAgICAgICAgICB0aGlzLnNhZmVFeGVjdXRlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIHZhciBpbW1lZGlhdGVUcnlEYXRhID0gdGhpcy5hcGlEYXRhU2VydmljZS5nZXRBcGlEYXRhQnlIYW5kbGVyKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmlzTm9uRW1wdHlBcnJheShpbW1lZGlhdGVUcnlEYXRhLCAnaW1tZWRpYXRlIEFQSSBkYXRhJykpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbE9wdGlvbnMgPSBpbW1lZGlhdGVUcnlEYXRhO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAnSW1tZWRpYXRlIEFQSSBjYWxsIG5vdCByZWFkeSwgd2lsbCB0cnkgYXN5bmMnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0RWRpdG9ySW5zdGFuY2UoZWRpdG9yOiBRdWlsbCkge1xyXG4gICAgICAgIC8vIFNldCB0aGUgbWVRdWlsbFJlZiB0byB0aGUgZWRpdG9yIGluc3RhbmNlIHByb3ZpZGVkIGJ5IHF1aWxsLWVkaXRvciBjb21wb25lbnRcclxuICAgICAgICB0aGlzLm1lUXVpbGxSZWYgPSBlZGl0b3I7XHJcblxyXG4gICAgICAgIC8vIEVuc3VyZSBtb2R1bGVzIGFyZSBwcm9wZXJseSBjb25maWd1cmVkIGJlZm9yZSBwcm9jZWVkaW5nXHJcbiAgICAgICAgaWYgKCF0aGlzLmVkaXRvck1vZHVsZXMgfHwgT2JqZWN0LmtleXModGhpcy5lZGl0b3JNb2R1bGVzKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplRWRpdG9yTW9kdWxlcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5mb3JjZUtleWJvYXJkQmluZGluZ1Jlc3RvcmF0aW9uKGVkaXRvcik7XHJcbiAgICAgICAgdGhpcy5kZWJ1Z0tleWJvYXJkQmluZGluZ3MoZWRpdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5hZGRTYWZlVGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2FmZUV4ZWN1dGUoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdG9vbGJhciA9IGVkaXRvci5nZXRNb2R1bGUoJ3Rvb2xiYXInKSBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICBpZiAodG9vbGJhciAmJiB0b29sYmFyLmNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHZpZGVvQnV0dG9ucyA9IHRvb2xiYXIuY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJy5xbC12aWRlbycpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2aWRlb0J1dHRvbnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2aWRlb0J1dHRvbnMuZm9yRWFjaCgoYnRuOiBhbnkpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5yZW1vdmUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAnRXJyb3IgY2hlY2tpbmcgZm9yIHZpZGVvIGJ1dHRvbnMnKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV90YWdnaW5nJ10gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnRpb25Nb2R1bGUgPSBlZGl0b3IuZ2V0TW9kdWxlKCdtZW50aW9uJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBMb2FkIGV4aXN0aW5nIGNvbnRlbnQgaWYgYXZhaWxhYmxlXHJcbiAgICAgICAgaWYgKHRoaXMuaW5wdXRWYWx1ZSAmJiB0aGlzLmlucHV0VmFsdWUudHJpbSgpICE9PSAnJykge1xyXG4gICAgICAgICAgICAvLyBTZXQgZmxhZyB0byBwcmV2ZW50IGV2ZW50IGxvb3BzIGR1cmluZyBwcm9ncmFtbWF0aWMgY29udGVudCBzZXR0aW5nXHJcbiAgICAgICAgICAgIHRoaXMuaXNQcm9ncmFtbWF0aWNhbGx5U2V0dGluZ0NvbnRlbnQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm1lUXVpbGxSZWYuY2xpcGJvYXJkLmRhbmdlcm91c2x5UGFzdGVIVE1MKHRoaXMuaW5wdXRWYWx1ZSk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lUXVpbGxSZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBsZW5ndGggPSB0aGlzLm1lUXVpbGxSZWYuZ2V0TGVuZ3RoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLnNldFNlbGVjdGlvbihsZW5ndGggLSAxLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gQ2xlYXIgY2xpcGJvYXJkIGFmdGVyIGNvbnRlbnQgaXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5jbGVhckNsaXBib2FyZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBSZXNldCBmbGFnIGFmdGVyIGNvbnRlbnQgaXMgc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaXNQcm9ncmFtbWF0aWNhbGx5U2V0dGluZ0NvbnRlbnQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnRpb25Nb2R1bGUgPSBlZGl0b3IuZ2V0TW9kdWxlKCdtZW50aW9uJyk7XHJcbiAgICAgICAgICAgIGlmICghbWVudGlvbk1vZHVsZSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV90YWdnaW5nJ10gPT09IFwidHJ1ZVwiKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGF2YWlsYWJsZU1vZHVsZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBbJ3Rvb2xiYXInLCAna2V5Ym9hcmQnLCAnaGlzdG9yeScsICdjbGlwYm9hcmQnLCAndXBsb2FkZXInLCAnbWVudGlvbicsICdpbWFnZVJlc2l6ZSddLmZvckVhY2gobW9kdWxlTmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGVkaXRvci5nZXRNb2R1bGUobW9kdWxlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb2R1bGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YWlsYWJsZU1vZHVsZXMucHVzaChtb2R1bGVOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqg77iPIEVycm9yIGNoZWNraW5nIGF2YWlsYWJsZSBtb2R1bGVzOicsIGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBNZW50aW9uQ2xhc3MgPSAoUXVpbGwgYXMgYW55KS5pbXBvcnRzWydtb2R1bGVzL21lbnRpb24nXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoTWVudGlvbkNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lbnRpb25Db25maWcgPSB0aGlzLmVkaXRvck1vZHVsZXNbJ21lbnRpb24nXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVudGlvbkluc3RhbmNlID0gbmV3IE1lbnRpb25DbGFzcyhlZGl0b3IsIG1lbnRpb25Db25maWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgRmFpbGVkIHRvIG1hbnVhbGx5IGluc3RhbnRpYXRlIG1lbnRpb24gbW9kdWxlOicsIGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAobWVudGlvbk1vZHVsZSAmJiB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ0NFRV90YWdnaW5nJ10gPT09IFwidHJ1ZVwiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gRm9yY2UgcmVzZXQgbWVudGlvbiBtb2R1bGUgdG8gZW5zdXJlIGRlbm90YXRpb24gY2hhcnMgd29ya1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbWVudGlvbkNvbmZpZyA9IHRoaXMuZWRpdG9yTW9kdWxlc1snbWVudGlvbiddO1xyXG4gICAgICAgICAgICAgICAgaWYgKG1lbnRpb25Db25maWcpIHtcclxuICAgICAgICAgICAgICAgICAgICAobWVudGlvbk1vZHVsZSBhcyBhbnkpLm1lbnRpb25EZW5vdGF0aW9uQ2hhcnMgPSBtZW50aW9uQ29uZmlnLm1lbnRpb25EZW5vdGF0aW9uQ2hhcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgKG1lbnRpb25Nb2R1bGUgYXMgYW55KS5hbGxvd2VkQ2hhcnMgPSBtZW50aW9uQ29uZmlnLmFsbG93ZWRDaGFycztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gRm9yY2UgcmUtYmluZCB0aGUgc291cmNlIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1lbnRpb25Db25maWcuc291cmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChtZW50aW9uTW9kdWxlIGFzIGFueSkub3B0aW9ucy5zb3VyY2UgPSBtZW50aW9uQ29uZmlnLnNvdXJjZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwcGx5TWVudGlvblN0eWxpbmdGaXhlcygpO1xyXG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTAwKTsgLy8gSW5jcmVhc2VkIHRpbWVvdXQgdG8gZW5zdXJlIG1vZHVsZSBpcyBmdWxseSBsb2FkZWRcclxuXHJcbiAgICAgICAgLy8gQWRkIGtleWJvYXJkIGV2ZW50IGxpc3RlbmVyIHRvIGRlYnVnIG1lbnRpb24gY2hhcmFjdGVyIGRldGVjdGlvblxyXG4gICAgICAgIGVkaXRvci5yb290LmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHQgPSBlZGl0b3IuZ2V0VGV4dCgpO1xyXG4gICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmIChzZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRDaGFyID0gdGV4dC5jaGFyQXQoc2VsZWN0aW9uLmluZGV4IC0gMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gQXV0by1kZXRlY3QgVVJMcyBhbmQgY29udmVydCB0byBsaW5rcyAtIE9QVElNSVpFRCB0byByZWR1Y2UgY3Vyc29yIGp1bXBpbmcgIFxyXG4gICAgICAgIGVkaXRvci5vbigndGV4dC1jaGFuZ2UnLCAoZGVsdGEsIG9sZERlbHRhLCBzb3VyY2UpID0+IHtcclxuICAgICAgICAgICAgLy8gQ2hlY2sgZm9yIGV4Y2Vzc2l2ZSB0ZXh0LWNoYW5nZSBldmVudHNcclxuICAgICAgICAgICAgaWYgKHRoaXMuZGV0ZWN0RXhjZXNzaXZlRXZlbnRzKCd0ZXh0LWNoYW5nZScpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBEb24ndCByZXR1cm4gaGVyZSBhcyB0ZXh0LWNoYW5nZSBpcyBjcml0aWNhbCwgYnV0IGxvZyB0aGUgaXNzdWUgIFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBTa2lwIFVSTCBkZXRlY3Rpb24gaWYgd2UncmUgcHJvZ3JhbW1hdGljYWxseSBzZXR0aW5nIGNvbnRlbnRcclxuICAgICAgICAgICAgaWYgKHRoaXMuaXNQcm9ncmFtbWF0aWNhbGx5U2V0dGluZ0NvbnRlbnQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ3VzZXInKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdXJyZW50U2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENsZWFyIHByZXZpb3VzIHRpbWVvdXQgdG8gZGVib3VuY2VcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVybERldGVjdGlvblRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy51cmxEZXRlY3Rpb25UaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0ID0gZWRpdG9yLmdldFRleHQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGhhc1VybCA9IC8oaHR0cHM/OlxcL1xcL1teXFxzXSt8d3d3XFwuW15cXHNdKykvaS50ZXN0KHRleHQpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChoYXNVcmwgJiYgY3VycmVudFNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgZGV0ZWN0IFVSTHMgaWYgdXNlciBoYXMgc3RvcHBlZCB0eXBpbmcgZm9yIGEgbW9tZW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cmxEZXRlY3Rpb25UaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIGN1cnNvciBpcyBzdGlsbCBpbiBhIHJlYXNvbmFibGUgcG9zaXRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3U2VsZWN0aW9uID0gZWRpdG9yLmdldFNlbGVjdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobmV3U2VsZWN0aW9uICYmIGN1cnJlbnRTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIE9ubHkgYXV0by1kZXRlY3QgaWYgY3Vyc29yIGhhc24ndCBtb3ZlZCBzaWduaWZpY2FudGx5IG9yIGlmIGl0J3MgYXQgdGhlIGVuZCBvZiBhIHBvdGVudGlhbCBVUkxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHRleHRCZWZvcmVDdXJzb3IgPSB0ZXh0LnN1YnN0cmluZygwLCBuZXdTZWxlY3Rpb24uaW5kZXgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNBdEVuZE9mVXJsID0gL1teXFxzXSQvLnRlc3QodGV4dEJlZm9yZUN1cnNvcikgJiZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvKGh0dHBzPzpcXC9cXC9bXlxcc10rfHd3d1xcLlteXFxzXSspJC8udGVzdCh0ZXh0QmVmb3JlQ3Vyc29yKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoTWF0aC5hYnMobmV3U2VsZWN0aW9uLmluZGV4IC0gY3VycmVudFNlbGVjdGlvbi5pbmRleCkgPCAzIHx8IGlzQXRFbmRPZlVybCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYXV0b0RldGVjdExpbmtzKHRoaXMubWVRdWlsbFJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTsgLy8gTG9uZ2VyIGRlbGF5IHRvIGFsbG93IHVzZXIgdG8gZmluaXNoIHR5cGluZ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEhhbmRsZSBwYXN0ZSBldmVudHMgc3BlY2lmaWNhbGx5IHdpdGggbG9nZ2luZ1xyXG4gICAgICAgIGVkaXRvci5yb290LmFkZEV2ZW50TGlzdGVuZXIoJ3Bhc3RlJywgKGV2ZW50OiBDbGlwYm9hcmRFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgLy8gQ2xlYXIgY2xpcGJvYXJkIGFmdGVyIHByZXZlbnRpbmcgZGVmYXVsdCBwYXN0ZVxyXG4gICAgICAgICAgICAvLyB0aGlzLmNsZWFyQ2xpcGJvYXJkKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgLy8gSGFuZGxlIGlucHV0IGV2ZW50cyBmb3IgYmV0dGVyIGNvdmVyYWdlXHJcbiAgICAgICAgZWRpdG9yLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc2VsZWN0aW9uQmVmb3JlSW5wdXQgPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIEZvciBoYW5kbGluZyBEcmFnIG4gRHJvcCBpbnNpZGUgUXVpbGwgRWRpdG9yXHJcbiAgICAgICAgZWRpdG9yLnJvb3QuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIChldmVudDogRHJhZ0V2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZVVwbG9hZE9uRHJhZ092ZXIoZmFsc2UpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWxpZEZpbGVzOiBGaWxlW10gPSBBcnJheS5mcm9tKGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcykuZmlsdGVyKGZpbGUgPT4gZmlsZS50eXBlLnN0YXJ0c1dpdGgoJ2ltYWdlLycpKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZEZpbGVzLmxlbmd0aCA9PSAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEZpbGVzVG9FZGl0b3IodmFsaWRGaWxlcyk7XHJcbiAgICAgICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICAgICAgdGhpcy50aW1lb3V0SWRzLnB1c2godGltZW91dElkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHRydWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGF1dG9EZXRlY3RMaW5rcyhlZGl0b3IpIHtcclxuICAgICAgICBjb25zdCBkZWx0YSA9IGVkaXRvci5nZXRDb250ZW50cygpO1xyXG4gICAgICAgIC8vIFN0b3JlIGN1cnJlbnQgY3Vyc29yIHBvc2l0aW9uXHJcbiAgICAgICAgY29uc3QgY3VycmVudFNlbGVjdGlvbiA9IGVkaXRvci5nZXRTZWxlY3Rpb24oKTtcclxuICAgICAgICBjb25zdCBjdXJyZW50SW5kZXggPSBjdXJyZW50U2VsZWN0aW9uID8gY3VycmVudFNlbGVjdGlvbi5pbmRleCA6IGVkaXRvci5nZXRMZW5ndGgoKSAtIDE7XHJcblxyXG4gICAgICAgIC8vIFRyYWNrIHBvc2l0aW9uIGluIHRoZSBlZGl0b3JcclxuICAgICAgICBsZXQgY3VycmVudFBvcyA9IDA7XHJcbiAgICAgICAgbGV0IGhhc0NoYW5nZXMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gUHJvY2VzcyBlYWNoIG9wZXJhdGlvbiBpbiB0aGUgZGVsdGFcclxuICAgICAgICBpZiAoZGVsdGEgJiYgZGVsdGEub3BzKSB7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsdGEub3BzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcCA9IGRlbHRhLm9wc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAob3AuaW5zZXJ0ICYmIHR5cGVvZiBvcC5pbnNlcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdGV4dCA9IG9wLmluc2VydDtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmxSZWdleCA9IC8oaHR0cHM/OlxcL1xcL1teXFxzXSt8d3d3XFwuW15cXHNdK3xbYS16QS1aMC05XVthLXpBLVowLTktXXsxLDYxfVthLXpBLVowLTldXFwuW2EtekEtWl17Mix9W15cXHNdKikvZztcclxuICAgICAgICAgICAgICAgICAgICBsZXQgbWF0Y2g7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIFJlc2V0IHJlZ2V4IGZvciB0aGlzIHRleHQgc2VnbWVudFxyXG4gICAgICAgICAgICAgICAgICAgIHVybFJlZ2V4Lmxhc3RJbmRleCA9IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHdoaWxlICgobWF0Y2ggPSB1cmxSZWdleC5leGVjKHRleHQpKSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBtYXRjaFswXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsU3RhcnRJblRleHQgPSBtYXRjaC5pbmRleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsU3RhcnRJbkVkaXRvciA9IGN1cnJlbnRQb3MgKyB1cmxTdGFydEluVGV4dDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsTGVuZ3RoID0gdXJsLmxlbmd0aDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgVVJMIGlzIGFscmVhZHkgZm9ybWF0dGVkIGFzIGEgbGlua1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmxGb3JtYXQgPSBlZGl0b3IuZ2V0Rm9ybWF0KHVybFN0YXJ0SW5FZGl0b3IsIHVybExlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdXJsRm9ybWF0LmxpbmspIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBMb29rIGJhY2t3YXJkcyBmcm9tIGN1cnJlbnQgb3BlcmF0aW9uIHRvIGZpbmQgbWVudGlvbnMgdG8gaW5jbHVkZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGxpbmtTdGFydFBvcyA9IHVybFN0YXJ0SW5FZGl0b3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbWVudGlvbnNGb3VuZCA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIHByZWNlZGluZyBvcGVyYXRpb25zIGZvciBtZW50aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IGkgLSAxOyBqID49IDA7IGotLSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByZXZPcCA9IGRlbHRhLm9wc1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZPcC5pbnNlcnQgJiYgdHlwZW9mIHByZXZPcC5pbnNlcnQgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoaXMgaXMganVzdCB3aGl0ZXNwYWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2T3AuaW5zZXJ0LnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFNraXAgd2hpdGVzcGFjZSwgY29udGludWUgbG9va2luZyBmb3IgbWVudGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm9uLXdoaXRlc3BhY2UgdGV4dCB3aXRob3V0IG1lbnRpb24gZm9ybWF0dGluZyAtIHN0b3AgaGVyZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFwcmV2T3AuYXR0cmlidXRlcyB8fCAhcHJldk9wLmF0dHJpYnV0ZXMubWVudGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBJZiB0aGlzIG9wZXJhdGlvbiBoYXMgbWVudGlvbiBmb3JtYXR0aW5nLCBpbmNsdWRlIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByZXZPcC5hdHRyaWJ1dGVzICYmIHByZXZPcC5hdHRyaWJ1dGVzLm1lbnRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVudGlvbkxlbmd0aCA9IHR5cGVvZiBwcmV2T3AuaW5zZXJ0ID09PSAnc3RyaW5nJyA/IHByZXZPcC5pbnNlcnQubGVuZ3RoIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlua1N0YXJ0UG9zIC09IG1lbnRpb25MZW5ndGg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lbnRpb25zRm91bmQudW5zaGlmdChwcmV2T3ApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3AgaWYgd2UgaGl0IGFuIG9wZXJhdGlvbiB3aXRob3V0IG1lbnRpb24gZm9ybWF0dGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2FsY3VsYXRlIHRvdGFsIGxpbmsgbGVuZ3RoIGluY2x1ZGluZyBtZW50aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG90YWxMaW5rTGVuZ3RoID0gKHVybFN0YXJ0SW5FZGl0b3IgKyB1cmxMZW5ndGgpIC0gbGlua1N0YXJ0UG9zO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEVuc3VyZSBVUkwgaGFzIHByb3BlciBwcm90b2NvbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdmFsaWRVcmwgPSB0aGlzLmVuc3VyZVByb3RvY29sKHVybCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gRm9ybWF0IHRoZSBlbnRpcmUgcmFuZ2UgKG1lbnRpb25zICsgVVJMKSBhcyBhIGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVkaXRvci5mb3JtYXRUZXh0KGxpbmtTdGFydFBvcywgdG90YWxMaW5rTGVuZ3RoLCAnbGluaycsIHZhbGlkVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NoYW5nZXMgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBVcGRhdGUgcG9zaXRpb24gdHJhY2tlclxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgKz0gdGV4dC5sZW5ndGg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9wLmluc2VydCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBub24tc3RyaW5nIGluc2VydHMgKGxpa2UgZW1iZWRzKVxyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRQb3MgKz0gMTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGhhc0NoYW5nZXMpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGVFZGl0b3JGaWVsZCgpO1xyXG4gICAgICAgICAgICAvLyBJTVBST1ZFRDogQmV0dGVyIGN1cnNvciBwb3NpdGlvbiBwcmVzZXJ2YXRpb25cclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWRpdG9yICYmIGN1cnJlbnRTZWxlY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdTZWxlY3Rpb24gPSBlZGl0b3IuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3TGVuZ3RoID0gZWRpdG9yLmdldExlbmd0aCgpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBEZXRlcm1pbmUgdGhlIGJlc3QgcG9zaXRpb24gdG8gcmVzdG9yZSBjdXJzb3JcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdG9yZUluZGV4ID0gY3VycmVudEluZGV4O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBjdXJzb3IgbW92ZWQgc2lnbmlmaWNhbnRseSBvciBpcyBhdCBwb3NpdGlvbiAwLCB0cnkgdG8gcmVzdG9yZSBpbnRlbGxpZ2VudGx5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFuZXdTZWxlY3Rpb24gfHwgbmV3U2VsZWN0aW9uLmluZGV4ID09PSAwIHx8IE1hdGguYWJzKG5ld1NlbGVjdGlvbi5pbmRleCAtIGN1cnJlbnRJbmRleCkgPiA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHdlJ3JlIGF0IHRoZSBlbmQgb2YgdGhlIHRleHRcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRJbmRleCA+PSBuZXdMZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0b3JlSW5kZXggPSBNYXRoLm1heCgwLCBuZXdMZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRyeSB0byBtYWludGFpbiByZWxhdGl2ZSBwb3NpdGlvbiwgYnV0IGVuc3VyZSBpdCdzIHZhbGlkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN0b3JlSW5kZXggPSBNYXRoLm1pbihNYXRoLm1heCgwLCBjdXJyZW50SW5kZXgpLCBuZXdMZW5ndGggLSAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdG9yLnNldFNlbGVjdGlvbihyZXN0b3JlSW5kZXgsIDApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwgMTApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVMaW5rQ2xpY2sodmFsdWU6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IHJhbmdlID0gdGhpcy5tZVF1aWxsUmVmLmdldFNlbGVjdGlvbigpO1xyXG5cclxuICAgICAgICBpZiAodmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnRMaW5rID0gJyc7XHJcblxyXG4gICAgICAgICAgICBpZiAocmFuZ2UgJiYgcmFuZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY3VycmVudEZvcm1hdCA9IHRoaXMubWVRdWlsbFJlZi5nZXRGb3JtYXQocmFuZ2UpO1xyXG4gICAgICAgICAgICAgICAgY3VycmVudExpbmsgPSAoY3VycmVudEZvcm1hdC5saW5rIGFzIHN0cmluZykgfHwgJyc7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMub3BlbkxpbmtEaWFsb2coY3VycmVudExpbmspLnRoZW4oKGhyZWYpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChocmVmICE9PSBudWxsICYmIGhyZWYgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChocmVmID09PSAnJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmFuZ2UgJiYgcmFuZ2UubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLmZvcm1hdCgnbGluaycsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHZhbGlkVXJsID0gdGhpcy5lbnN1cmVQcm90b2NvbChocmVmKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyYW5nZSAmJiByYW5nZS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZENvbnRlbnQgPSB0aGlzLm1lUXVpbGxSZWYuZ2V0Q29udGVudHMocmFuZ2UuaW5kZXgsIHJhbmdlLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgaGFzTWVudGlvbnMgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRDb250ZW50ICYmIHNlbGVjdGVkQ29udGVudC5vcHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZENvbnRlbnQub3BzLmZvckVhY2goKG9wLCBpbmRleCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob3AuYXR0cmlidXRlcyAmJiBvcC5hdHRyaWJ1dGVzLm1lbnRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01lbnRpb25zID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChoYXNNZW50aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVRdWlsbFJlZi5mb3JtYXRUZXh0KHJhbmdlLmluZGV4LCByYW5nZS5sZW5ndGgsICdsaW5rJywgdmFsaWRVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cGRhdGVkQ29udGVudCA9IHRoaXMubWVRdWlsbFJlZi5nZXRDb250ZW50cyhyYW5nZS5pbmRleCwgcmFuZ2UubGVuZ3RoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0ZWRDb250ZW50ICYmIHVwZGF0ZWRDb250ZW50Lm9wcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZENvbnRlbnQub3BzLmZvckVhY2goKG9wLCBvcEluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9wLmF0dHJpYnV0ZXMgJiYgb3AuYXR0cmlidXRlcy5tZW50aW9uICYmICghb3AuYXR0cmlidXRlcy5saW5rIHx8IG9wLmF0dHJpYnV0ZXMubGluayAhPT0gdmFsaWRVcmwpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFJlLWFwcGx5IG1lbnRpb24gZm9ybWF0dGluZyBpZiBpdCB3YXMgbG9zdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBvcFN0YXJ0ID0gcmFuZ2UuaW5kZXggKyB0aGlzLmdldE9wT2Zmc2V0KHVwZGF0ZWRDb250ZW50Lm9wcywgb3BJbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG9wTGVuZ3RoID0gdHlwZW9mIG9wLmluc2VydCA9PT0gJ3N0cmluZycgPyBvcC5pbnNlcnQubGVuZ3RoIDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLmZvcm1hdFRleHQob3BTdGFydCwgb3BMZW5ndGgsICdtZW50aW9uJywgb3AuYXR0cmlidXRlcy5tZW50aW9uKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLmZvcm1hdFRleHQob3BTdGFydCwgb3BMZW5ndGgsICdsaW5rJywgdmFsaWRVcmwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBObyBtZW50aW9ucywgc3RhbmRhcmQgbGluayBmb3JtYXR0aW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLmZvcm1hdCgnbGluaycsIHZhbGlkVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc2VydEluZGV4ID0gcmFuZ2UgPyByYW5nZS5pbmRleCA6IHRoaXMubWVRdWlsbFJlZi5nZXRMZW5ndGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVRdWlsbFJlZi5pbnNlcnRUZXh0KGluc2VydEluZGV4LCBocmVmLCAndXNlcicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLmZvcm1hdFRleHQoaW5zZXJ0SW5kZXgsIGhyZWYubGVuZ3RoLCAnbGluaycsIHZhbGlkVXJsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubWVRdWlsbFJlZi5zZXRTZWxlY3Rpb24oaW5zZXJ0SW5kZXggKyBocmVmLmxlbmd0aCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vblRvdWNoZWQodGhpcy5jb250ZW50Q3RybCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy50cmlnZ2VyQ29udGVudENoYW5nZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdG9yRmllbGQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKHJhbmdlICYmIHJhbmdlLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubWVRdWlsbFJlZi5mb3JtYXQoJ2xpbmsnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uVG91Y2hlZCh0aGlzLmNvbnRlbnRDdHJsKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudHJpZ2dlckNvbnRlbnRDaGFuZ2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRWRpdG9yRmllbGQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBIZWxwZXIgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIG9mZnNldCBmb3Igb3BlcmF0aW9ucyBpbiBEZWx0YVxyXG4gICAgcHJpdmF0ZSBnZXRPcE9mZnNldChvcHM6IGFueVtdLCB0YXJnZXRJbmRleDogbnVtYmVyKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldEluZGV4ICYmIGkgPCBvcHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3Qgb3AgPSBvcHNbaV07XHJcbiAgICAgICAgICAgIGlmIChvcC5pbnNlcnQpIHtcclxuICAgICAgICAgICAgICAgIG9mZnNldCArPSB0eXBlb2Ygb3AuaW5zZXJ0ID09PSAnc3RyaW5nJyA/IG9wLmluc2VydC5sZW5ndGggOiAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBvZmZzZXQ7XHJcbiAgICB9XHJcblxyXG4gICAgZW5zdXJlUHJvdG9jb2wodXJsOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIGlmICghdXJsKSByZXR1cm4gJyc7XHJcblxyXG4gICAgICAgIC8vIENoZWNrIGlmIFVSTCBhbHJlYWR5IGhhcyBhIHByb3RvY29sXHJcbiAgICAgICAgaWYgKCEvXmh0dHBzPzpcXC9cXC8vaS50ZXN0KHVybCkpIHtcclxuICAgICAgICAgICAgLy8gQWRkIGh0dHBzOi8vIGlmIG5vIHByb3RvY29sIGlzIHByZXNlbnRcclxuICAgICAgICAgICAgcmV0dXJuICdodHRwczovLycgKyB1cmw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdXJsO1xyXG4gICAgfVxyXG4gICAgcHJpdmF0ZSBvcGVuTGlua0RpYWxvZyhjdXJyZW50VXJsOiBzdHJpbmcgPSAnJyk6IFByb21pc2U8c3RyaW5nIHwgbnVsbD4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyBDcmVhdGUgYSBzaW1wbGUgaW5wdXQgZGlhbG9nXHJcbiAgICAgICAgICAgIGNvbnN0IHVybCA9IHdpbmRvdy5wcm9tcHQoJ0VudGVyIHRoZSBVUkw6JywgY3VycmVudFVybCk7XHJcbiAgICAgICAgICAgIHJlc29sdmUodXJsKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuICAgIHRyaWdnZXJDb250ZW50Q2hhbmdlKCkge1xyXG4gICAgICAgIC8vIENoZWNrIGZvciBleGNlc3NpdmUgZXZlbnRzIHRoYXQgbWlnaHQgY2F1c2UgZnJlZXppbmdcclxuICAgICAgICBpZiAodGhpcy5kZXRlY3RFeGNlc3NpdmVFdmVudHMoJ3RyaWdnZXJDb250ZW50Q2hhbmdlJykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign8J+bkSBCTE9DS0lORyB0cmlnZ2VyQ29udGVudENoYW5nZSBkdWUgdG8gcG90ZW50aWFsIGluZmluaXRlIGxvb3AnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVHJpZ2dlciBhIGNvbnRlbnQgY2hhbmdlIGV2ZW50IHRvIHNhdmUgdGhlIHVwZGF0ZWQgY29udGVudFxyXG4gICAgICAgIGNvbnN0IGh0bWwgPSB0aGlzLm1lUXVpbGxSZWYucm9vdC5pbm5lckhUTUw7XHJcbiAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gaHRtbDtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmNvbnRlbnRDdHJsLnZhbGlkO1xyXG5cclxuICAgICAgICAvLyBDUklUSUNBTCBGSVg6IFVzZSBkZWJvdW5jZWQgdXBkYXRlRmllbGREYXRhXHJcbiAgICAgICAgdGhpcy5kZWJvdW5jZWRVcGRhdGVGaWVsZERhdGEodGhpcy5pbnB1dFZhbHVlLCB0aGlzLmlzVmFsaWQsIDIwMCk7XHJcblxyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DaGFuZ2VWYWx1ZScpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Gb2N1c091dCcpO1xyXG4gICAgICAgIHRoaXMub25EaXJ0eSgpO1xyXG4gICAgICAgIHRoaXMuY29udGVudEN0cmwuY29udHJvbC5tYXJrQXNEaXJ0eSgpO1xyXG5cclxuICAgICAgICAvLyBDbGVhciBjbGlwYm9hcmQgYWZ0ZXIgY29udGVudCBjaGFuZ2VzXHJcbiAgICAgICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuY2xlYXJDbGlwYm9hcmQoKTtcclxuICAgICAgICAvLyB9LCAyMDApO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQ29udGVudENoYW5nZWQoZXZlbnQ6IGFueSkge1xyXG4gICAgICAgIC8vIENoZWNrIGZvciBleGNlc3NpdmUgZXZlbnRzIHRoYXQgbWlnaHQgY2F1c2UgZnJlZXppbmdcclxuICAgICAgICBpZiAodGhpcy5kZXRlY3RFeGNlc3NpdmVFdmVudHMoJ29uQ29udGVudENoYW5nZWQnKSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCfwn5uRIEJMT0NLSU5HIG9uQ29udGVudENoYW5nZWQgZHVlIHRvIHBvdGVudGlhbCBpbmZpbml0ZSBsb29wJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIENSSVRJQ0FMIEZJWDogU2tpcCBpZiB0aGlzIGlzIGFuIEFQSS10cmlnZ2VyZWQgZXZlbnQgdG8gYnJlYWsgY2lyY3VsYXIgZGVwZW5kZW5jeVxyXG4gICAgICAgIGlmIChldmVudD8uc291cmNlID09PSAnYXBpJykge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoZXZlbnQgJiYgKGV2ZW50LnNvdXJjZSA9PSBcInVzZXJcIiB8fCBldmVudC5zb3VyY2UgPT0gXCJhcGlcIikpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdGhpcy5jb250ZW50Q3RybC52YWxpZDtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZXZlbnQuaHRtbDsgLy8gTWFrZSBzdXJlIHRvIHVwZGF0ZSBpbnB1dFZhbHVlXHJcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZXZlbnQuaHRtbCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBuZXdDb250ZW50ID0gZXZlbnQuaHRtbDtcclxuICAgICAgICAgICAgY29uc3Qgb2xkQ29udGVudCA9IGV2ZW50Lm9sZERlbHRhPy5vcHMubWFwKG9wID0+IG9wLmluc2VydCkuam9pbignJykgfHwgJyc7XHJcbiAgICAgICAgICAgIGlmIChuZXdDb250ZW50ICE9PSBvbGRDb250ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBDUklUSUNBTCBGSVg6IFVzZSBkZWJvdW5jZWQgdXBkYXRlRmllbGREYXRhIHRvIHByZXZlbnQgY2lyY3VsYXIgZGVwZW5kZW5jeVxyXG4gICAgICAgICAgICAgICAgdGhpcy5kZWJvdW5jZWRVcGRhdGVGaWVsZERhdGEodGhpcy5pbnB1dFZhbHVlLCB0aGlzLmlzVmFsaWQsIDE1MCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vbkNvbXBvbmVudEV2ZW50KCdPbkNoYW5nZVZhbHVlJyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ29tcG9uZW50RXZlbnQoJ09uRm9jdXNPdXQnKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub25EaXJ0eSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jb250ZW50Q3RybC5jb250cm9sLm1hcmtBc0RpcnR5KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25DaGFuZ2UobmV3VmFsdWUpIHtcclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoZWQoY29udHJvbDogYW55KSB7XHJcbiAgICAgICAgLy8gQ2hlY2sgZm9yIGV4Y2Vzc2l2ZSBldmVudHMgdGhhdCBtaWdodCBjYXVzZSBmcmVlemluZ1xyXG4gICAgICAgIGlmICh0aGlzLmRldGVjdEV4Y2Vzc2l2ZUV2ZW50cygnb25Ub3VjaGVkJykpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcign8J+bkSBCTE9DS0lORyBvblRvdWNoZWQgZHVlIHRvIHBvdGVudGlhbCBpbmZpbml0ZSBsb29wJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjb250cm9sICYmIGNvbnRyb2wuY29udHJvbCkge1xyXG4gICAgICAgICAgICBjb250cm9sLmNvbnRyb2wubWFya0FzVG91Y2hlZCgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tZVF1aWxsUmVmKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB0aGlzLm1lUXVpbGxSZWYucm9vdC5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlzVmFsaWQgPSBjb250cm9sLnZhbGlkO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIENSSVRJQ0FMIEZJWDogVXNlIGRlYm91bmNlZCB1cGRhdGVGaWVsZERhdGFcclxuICAgICAgICAgICAgICAgIHRoaXMuZGVib3VuY2VkVXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5pc1ZhbGlkLCAxMDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2Vzc2lvbkRhdGFVcGRhdGVkKHZhbHVlOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLmlzVmFsaWQgPSB0aGlzLmNvbnRlbnRDdHJsLnZhbGlkO1xyXG4gICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHZhbHVlLCB0aGlzLmlzVmFsaWQpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25DaGFuZ2VWYWx1ZScpO1xyXG4gICAgICAgIHRoaXMub25Db21wb25lbnRFdmVudCgnT25Gb2N1c091dCcpO1xyXG4gICAgICAgIHRoaXMuc2V0TW9kYWxvclNhbmNrQmFyTWVzc2FnZSh0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQsIHZhbHVlKTtcclxuICAgICAgICB0aGlzLm9uRGlydHkoKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkVtcHR5U2Vzc2lvbihnZXRfZGF0YTogYW55KSB7XHJcbiAgICAgICAgbGV0IGRhdGEgPSBbXTtcclxuICAgICAgICBsZXQgYXNzb2NpYXRlZERhdGEgPSBbXTtcclxuICAgICAgICBsZXQgdW5pcXVlX2lkX3ZhbHVlID0gW107XHJcbiAgICAgICAgaWYgKGdldF9kYXRhLnVuaXF1ZV9pZHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBkYXRhID0gZ2V0X2RhdGEudW5pcXVlX2lkcztcclxuICAgICAgICAgICAgdW5pcXVlX2lkX3ZhbHVlID0gW3RoaXMuYXBwRGF0YS5pZF07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZGF0YSA9IGdldF9kYXRhLmFwaUtleXM7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmlzU2luZ2xlQXBpS2V5KSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbdGhpcy5maWVsZERhdGEuYXBpX2tleV07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB1bmlxdWVfaWRfdmFsdWUgPSBbLi4udW5pcXVlX2lkX3ZhbHVlLFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFwaUtleVV0aWwuZ2V0Q29uY2F0ZW5hdGVkQXBpS2V5cyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5maWVsZERhdGEucmVzcG9uc2VfYXBpX2tleSkpXTtcclxuICAgICAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IFtcclxuICAgICAgICAgICAgICAgICAgICAuLi51bmlxdWVfaWRfdmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5hcGlLZXlVdGlsLmdldE11bHRpcGxlQXBpS2V5cyh0aGlzLmZpZWxkRGF0YS5yZXF1ZXN0X2FwaV9rZXkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZ2V0X2RhdGEuaXNBc3NvY2lhdGVkKSB7XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnNvbWUociA9PiB1bmlxdWVfaWRfdmFsdWUuaW5jbHVkZXMocikpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmdldEFzc29jaWF0ZWRGaWVsZHMoKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWx1ZXMuaW5jbHVkZXModGhpcy51bmRvUmVkb1V0aWwuZ2V0Q3VycmVudElkKCkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYXNzb2NpYXRlZERhdGEgPSBuZXcgQXJyYXkodW5pcXVlX2lkX3ZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICBhc3NvY2lhdGVkRGF0YSA9IHVuaXF1ZV9pZF92YWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAoZ2V0X2RhdGEuaXNBc3NvY2lhdGVkID8gYXNzb2NpYXRlZERhdGEgOiBkYXRhKS5mb3JFYWNoKGVsbSA9PiB7XHJcbiAgICAgICAgICAgIGlmICgodW5pcXVlX2lkX3ZhbHVlKS5pbmNsdWRlcyhlbG0pKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUT0RPIFVwZGF0ZVxyXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gJyc7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMgJiYgdGhpcy5maWVsZERhdGEuYWRkaXRpb25hbF9wYXJhbWV0ZXJzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtdGVyIG9mIHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbcGFyYW10ZXIucGFyYW1ldGVyX3R5cGVdID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJhbXRlci5wYXJhbWV0ZXJfdHlwZSA9PT0gJ2RlZmF1bHRfdmFsdWUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBwYXJhbXRlci52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gcGFyYW10ZXIudmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dFcnJvck9uTmV4dCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52YWxpZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb250ZW50Q3RybCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEN0cmwucmVzZXQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29udGVudEN0cmwuY29udHJvbC5tYXJrQXNVbnRvdWNoZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRDdHJsLmNvbnRyb2wubWFya0FzUHJpc3RpbmUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnRDdHJsLmNvbnRyb2wudXBkYXRlVmFsdWVBbmRWYWxpZGl0eSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFuZGxlQ3VzdG9tRnVuY3Rpb24oZ2V0X2RhdGE6IGFueSkge1xyXG4gICAgICAgIGxldCBkYXRhID0gW107XHJcbiAgICAgICAgbGV0IHVuaXF1ZV9pZF92YWx1ZSA9ICcnO1xyXG4gICAgICAgIGlmICh0eXBlb2YgZ2V0X2RhdGEgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGdldF9kYXRhKS5mb3JFYWNoKChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBkYXRhLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHVuaXF1ZV9pZF92YWx1ZSA9IHRoaXMuZmllbGREYXRhLnVuaXF1ZV9pZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGRhdGEuaW5jbHVkZXModW5pcXVlX2lkX3ZhbHVlKSkge1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0VmFsdWUgPSBnZXRfZGF0YVt1bmlxdWVfaWRfdmFsdWVdO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUZpZWxkRGF0YSh0aGlzLmlucHV0VmFsdWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvbkFQSUNhbGxiYWNrKGRhdGE6IGFueSk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuZmllbGREYXRhID0gdGhpcy5zZXREeW5hbWljTGFiZWxVdGlsLmdldER5bmFtaWNWYWx1ZSh0aGlzLmZpZWxkRGF0YSwgZGF0YSk7XHJcbiAgICAgICAgY29uc3QgYXBpVmFsdWUgPSB0aGlzLnNldEFwaUNhbGxCYWNrRGF0YVV0aWwuc2V0QXBpQ2FsbEJhY2tEYXRhKHRoaXMuZmllbGREYXRhLCBkYXRhKTtcclxuICAgICAgICBpZiAoYXBpVmFsdWUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1ZhbGlkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gYXBpVmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKHRoaXMuaW5wdXRWYWx1ZSwgdGhpcy5pc1ZhbGlkKTtcclxuICAgICAgICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tZVF1aWxsUmVmKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLmNsaXBib2FyZC5kYW5nZXJvdXNseVBhc3RlSFRNTCh0aGlzLmlucHV0VmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBDUklUSUNBTDogU2V0IGN1cnNvciB0byB0aGUgZW5kIGFmdGVyIEFQSSBjb250ZW50IGxvYWRcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMubWVRdWlsbFJlZikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgbGVuZ3RoID0gdGhpcy5tZVF1aWxsUmVmLmdldExlbmd0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLnNldFNlbGVjdGlvbihsZW5ndGggLSAxLCAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBDbGVhciBjbGlwYm9hcmQgYWZ0ZXIgQVBJIGNvbnRlbnQgaXMgbG9hZGVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNsZWFyQ2xpcGJvYXJkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIDApO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZnJvbSBhZGRpdGlvbmFsUGFyYW1ldGVyIHdpdGggdHlwZSBleHRlcm5hbEFwaU9wdGlvblZhbHVlXHJcbiAgICAgICAgaWYgKHRoaXMuZmllbGREYXRhLmFkZGl0aW9uYWxfcGFyYW1ldGVycyAmJiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IgKGNvbnN0IHBhcmFtZXRlciBvZiB0aGlzLmZpZWxkRGF0YS5hZGRpdGlvbmFsX3BhcmFtZXRlcnMpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwYXJhbWV0ZXIucGFyYW1ldGVyX3R5cGUgPT09ICdleHRlcm5hbEFwaU9wdGlvblZhbHVlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGV4dGVybmFsQXBpT3B0aW9uVmFsdWUgPSB0aGlzLmdldEV4dGVybmFsQXBpT3B0aW9uVmFsdWUocGFyYW1ldGVyLnZhbHVlLCBkYXRhKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBDUklUSUNBTCBGSVg6IEVuc3VyZSBhbGxPcHRpb25zIGlzIGFsd2F5cyBhbiBhcnJheSBiZWZvcmUgcHVzaGluZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuYWxsT3B0aW9ucyB8fCAhQXJyYXkuaXNBcnJheSh0aGlzLmFsbE9wdGlvbnMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbE9wdGlvbnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4dGVybmFsQXBpT3B0aW9uVmFsdWUuZm9yRWFjaCgodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmFtZXRlci52YWx1ZSAmJiBwYXJhbWV0ZXIudmFsdWUuc3BsaXQoJ1sqXScpW3BhcmFtZXRlci52YWx1ZS5zcGxpdCgnWypdJykubGVuZ3RoIC0gMV0gPT0gJycgJiYgdHlwZW9mIHZhbCA9PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbE9wdGlvbnMucHVzaCh7IGlkOiB2YWxbJ3ZhbHVlJ10sIHZhbHVlOiB2YWxbJ25hbWUnXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbE9wdGlvbnMucHVzaCh7IGlkOiB2YWwuc3BsaXQoJ3x8JylbMF0sIHZhbHVlOiB2YWwuc3BsaXQoJ3x8JylbdmFsLnNwbGl0KCd8fCcpLmxlbmd0aCAtIDFdIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignU29tZXRoaW5nIFdlbnQgV3JvbmcgaW4gZWRpdG9yICEhIScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIG9uU2V0U2Vzc2lvbkRhdGEoYXBpS2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcclxuICAgICAgICBzdXBlci5vblNldFNlc3Npb25EYXRhKGFwaUtleSwgdmFsdWUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbmNhdERhdGEoKSB7IH1cclxuXHJcbiAgICBzZXRGaWVsZFZhbHVlT25TZXRWYWx1ZXNFdmVudChkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICBpZiAoZGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoZGF0YVsndW5pcXVlSWRzJ10uaW5jbHVkZXModGhpcy5maWVsZERhdGEudW5pcXVlX2lkKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dFZhbHVlID0gZGF0YVsndmFsdWVzJ10ubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bZGF0YVsndW5pcXVlSWRzJ10uaW5kZXhPZih0aGlzLmZpZWxkRGF0YS51bmlxdWVfaWQpXSA6XHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YVsndmFsdWVzJ11bMF07XHJcbiAgICAgICAgICAgICAgICAvLyBvZiB0cmlnZ2VyVXBkYXRlIGlzIHRydWUgdGhlbiB1cGRhdGUgdGhlIGZpZWxkIHZhbHVlIG9yIHVwZGF0ZSB2YWx1ZSBhbmQgZW1pdCBjb25kaXRpb25zIGV2ZW50XHJcbiAgICAgICAgICAgICAgICB0aGlzW2RhdGFbJ3RyaWdnZXJVcGRhdGUnXSA/ICd1cGRhdGVGaWVsZEVudGl0eScgOiAndXBkYXRlRmllbGREYXRhJ10odGhpcy5pbnB1dFZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRGaWVsZFN0YXRlT25TdGF0ZUNoYW5nZUV2ZW50KGRhdGE6IG9iamVjdCkge1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVN0YXRlSGlzdG9yeShkYXRhOiBhbnkpOiB2b2lkIHtcclxuICAgICAgICAvLyB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuXHJcbiAgICB0b2dnbGVMYW5ndWFnZShkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICAvLyBjb25zdCBjaGFuZ2VNYXAgPSB7XHJcbiAgICAgICAgLy8gICAgIGZpZWxkX2xhYmVsOiAnZmllbGREYXRhLmZpZWxkX2xhYmVsJyxcclxuICAgICAgICAvLyAgICAgcGxhY2Vob2xkZXJfdGV4dDogJ2ZpZWxkRGF0YS5wbGFjZWhvbGRlcl90ZXh0JyxcclxuICAgICAgICAvLyAgICAgdG9vbHRpcDogJ2ZpZWxkRGF0YS50b29sdGlwJyxcclxuICAgICAgICAvLyAgICAgJ2FkZGl0aW9uYWxfcGFyYW1ldGVyc1sqXUFyaWEtTGFiZWwnOiAnQWRkaXRpb25hbFBhcmFtZXRlcltcXCdBcmlhLUxhYmVsXFwnXSdcclxuICAgICAgICAvLyB9O1xyXG4gICAgICAgIC8vIGZvciAoY29uc3QgdmFsdWUgb2YgT2JqZWN0LmtleXMoY2hhbmdlTWFwKSkge1xyXG4gICAgICAgIC8vICAgICBjb25zdCBsYW5nVmFsID0gdGhpcy5zd2l0Y2hMYW5nKHZhbHVlLCBkYXRhLCBjaGFuZ2VNYXApO1xyXG4gICAgICAgIC8vICAgICBpZiAobGFuZ1ZhbCkge1xyXG4gICAgICAgIC8vICAgICAgICAgdGhpc1tsYW5nVmFsLmtleV0gPSBsYW5nVmFsLnZhbDtcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuICAgIH1cclxuXHJcbiAgICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKTogdm9pZCB7XHJcbiAgICAgICAgLy8gSGFuZGxlIGNyaXRpY2FsIGNoYW5nZXMgdGhhdCByZXF1aXJlIGNvbXBvbmVudCByZWluaXRpYWxpemF0aW9uIGZvciBnZW5lcmljIGJsb2Nrc1xyXG4gICAgICAgIGlmIChjaGFuZ2VzLmZpZWxkRGF0YSAmJiAhY2hhbmdlcy5maWVsZERhdGEuZmlyc3RDaGFuZ2UgJiYgdGhpcy5pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVpbml0aWFsaXplRWRpdG9yKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoY2hhbmdlcy5hZGRpdGlvbmFsUGFyYW1ldGVyICYmICFjaGFuZ2VzLmFkZGl0aW9uYWxQYXJhbWV0ZXIuZmlyc3RDaGFuZ2UgJiYgdGhpcy5pc0luaXRpYWxpemVkKSB7XHJcbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRhZ2dpbmcgY29uZmlndXJhdGlvbiBjaGFuZ2VkXHJcbiAgICAgICAgICAgIGNvbnN0IG9sZFRhZ2dpbmcgPSBjaGFuZ2VzLmFkZGl0aW9uYWxQYXJhbWV0ZXIucHJldmlvdXNWYWx1ZT8uWydDRUVfdGFnZ2luZyddO1xyXG4gICAgICAgICAgICBjb25zdCBuZXdUYWdnaW5nID0gY2hhbmdlcy5hZGRpdGlvbmFsUGFyYW1ldGVyLmN1cnJlbnRWYWx1ZT8uWydDRUVfdGFnZ2luZyddO1xyXG4gICAgICAgICAgICBpZiAob2xkVGFnZ2luZyAhPT0gbmV3VGFnZ2luZykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWluaXRpYWxpemVFZGl0b3IoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRDb25kaXRpb25zKGNoYW5nZXMuZWRpdGFibGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNFZGl0YWJsZScpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY2hhbmdlcy52aXNpYmxlQ29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0Q29uZGl0aW9ucyhjaGFuZ2VzLnZpc2libGVDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNWaXNpYmxlJyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChjaGFuZ2VzLm1hbmRhdG9yeUNvbmRpdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLnNldENvbmRpdGlvbnMoY2hhbmdlcy5tYW5kYXRvcnlDb25kaXRpb24uY3VycmVudFZhbHVlLCAnaXNNYW5kYXRvcnknKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWluaXRpYWxpemVFZGl0b3IoKTogdm9pZCB7XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgbmV3IGNvbXBvbmVudCBrZXkgdG8gZm9yY2UgcmVjcmVhdGlvblxyXG4gICAgICAgIHRoaXMuY29tcG9uZW50S2V5ID0gYGNlZS1lZGl0b3ItJHt0aGlzLmZpZWxkRGF0YT8uaHRtbF9pZCB8fCAndW5rbm93bid9LSR7RGF0ZS5ub3coKX1gO1xyXG5cclxuICAgICAgICAvLyBDbGVhbiB1cCBjdXJyZW50IHN0YXRlXHJcbiAgICAgICAgaWYgKHRoaXMubWVRdWlsbFJlZikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ1JJVElDQUw6IENsZWFuIHVwIG1lbnRpb24gbW9kdWxlIHRob3JvdWdobHlcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xlYW51cE1lbnRpb25Nb2R1bGUoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLm1lUXVpbGxSZWYub2ZmKCd0ZXh0LWNoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLm9mZignc2VsZWN0aW9uLWNoYW5nZScpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmLnNldENvbnRlbnRzKFtdKTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKCfimqDvuI8gRXJyb3IgZHVyaW5nIFF1aWxsIGNsZWFudXA6JywgZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5tZVF1aWxsUmVmID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5lZGl0b3JNb2R1bGVzID0ge31cclxuICAgICAgICB0aGlzLnNlYXJjaFN0ciA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuYWxsT3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KHRoaXMuYWxsT3B0aW9ucykpIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gdGhpcy5hbGxPcHRpb25zLmZpbHRlcigoZW50cnksIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVudHJ5IHx8IHR5cGVvZiBlbnRyeSAhPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKCFlbnRyeS5oYXNPd25Qcm9wZXJ0eSgndmFsdWUnKSB8fCBlbnRyeS52YWx1ZSA9PT0gbnVsbCB8fCBlbnRyeS52YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZW50cnkudmFsdWUgIT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudmFsdWUgPSBTdHJpbmcoZW50cnkudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZW50cnkudmFsdWUubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gW107XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBUcmlnZ2VyIGZyZXNoIGluaXRpYWxpemF0aW9uXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMub25WaWV3RGF0YUluaXQoKTtcclxuICAgICAgICB9LCAxMDApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogQXBwbHkgYWRkaXRpb25hbCBzdHlsaW5nIGZpeGVzIHRvIG1lbnRpb24gZHJvcGRvd25zIGFmdGVyIGluaXRpYWxpemF0aW9uXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgYXBwbHlNZW50aW9uU3R5bGluZ0ZpeGVzKCk6IHZvaWQge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1lbnRpb25Db250YWluZXJzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnFsLW1lbnRpb24tbGlzdC1jb250YWluZXInKTtcclxuXHJcbiAgICAgICAgICAgIG1lbnRpb25Db250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lciwgaW5kZXgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1lUXVpbGxSZWYpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3Rpb24gPSB0aGlzLm1lUXVpbGxSZWYuZ2V0U2VsZWN0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHNlbGVjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBib3VuZHMgPSB0aGlzLm1lUXVpbGxSZWYuZ2V0Qm91bmRzKHNlbGVjdGlvbi5pbmRleCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVkaXRvckVsZW1lbnQgPSB0aGlzLm1lUXVpbGxSZWYucm9vdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWRpdG9yUmVjdCA9IGVkaXRvckVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGN1bGF0ZSBwb3NpdGlvbiByZWxhdGl2ZSB0byB0aGUgZWRpdG9yIGNvbnRhaW5lclxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBsZWZ0UG9zaXRpb24gPSBib3VuZHMubGVmdDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wUG9zaXRpb24gPSBib3VuZHMudG9wICsgYm91bmRzLmhlaWdodCAtIDU7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoY29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5sZWZ0ID0gYCR7bGVmdFBvc2l0aW9ufXB4YDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRhaW5lciBhcyBIVE1MRWxlbWVudCkuc3R5bGUudG9wID0gYCR7dG9wUG9zaXRpb259cHhgO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBFbnN1cmUgcHJvcGVyIHotaW5kZXggYW5kIG90aGVyIHN0eWxpbmdcclxuICAgICAgICAgICAgICAgIChjb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnpJbmRleCA9ICc5OTk5JztcclxuICAgICAgICAgICAgICAgIChjb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgIChjb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICAoY29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5ib3JkZXIgPSAnMXB4IHNvbGlkICNkZGQnO1xyXG4gICAgICAgICAgICAgICAgKGNvbnRhaW5lciBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm9yZGVyUmFkaXVzID0gJzRweCc7XHJcbiAgICAgICAgICAgICAgICAoY29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5ib3hTaGFkb3cgPSAnMCA0cHggMTJweCByZ2JhKDAsIDAsIDAsIDAuMTUpJztcclxuICAgICAgICAgICAgICAgIChjb250YWluZXIgYXMgSFRNTEVsZW1lbnQpLnN0eWxlLm1heEhlaWdodCA9ICcyMDBweCc7XHJcbiAgICAgICAgICAgICAgICAoY29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5vdmVyZmxvd1kgPSAnYXV0byc7XHJcbiAgICAgICAgICAgICAgICAoY29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5taW5XaWR0aCA9ICcyMDBweCc7XHJcbiAgICAgICAgICAgICAgICAoY29udGFpbmVyIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5tYXhXaWR0aCA9ICczMDBweCc7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gQXBwbHkgc3R5bGluZyB0byBsaXN0IGl0ZW1zXHJcbiAgICAgICAgICAgICAgICBjb25zdCBsaXN0SXRlbXMgPSBjb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnLnFsLW1lbnRpb24tbGlzdC1pdGVtJyk7XHJcbiAgICAgICAgICAgICAgICBsaXN0SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5wYWRkaW5nID0gJzEwcHggMTJweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuYm9yZGVyQm90dG9tID0gJzFweCBzb2xpZCAjZjBmMGYwJztcclxuICAgICAgICAgICAgICAgICAgICAoaXRlbSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuZm9udFNpemUgPSAnMTRweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmNvbG9yID0gJyMzMzMnO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5kaXNwbGF5ID0gJ2ZsZXgnO1xyXG4gICAgICAgICAgICAgICAgICAgIChpdGVtIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5hbGlnbkl0ZW1zID0gJ2NlbnRlcic7XHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBob3ZlciBlZmZlY3RzXHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAnI2U4ZjRmOCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpdGVtIGFzIEhUTUxFbGVtZW50KS5zdHlsZS5jb2xvciA9ICcjMDA2NmNjJztcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLmNsYXNzTGlzdC5jb250YWlucygnc2VsZWN0ZWQnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGl0ZW0gYXMgSFRNTEVsZW1lbnQpLnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd3aGl0ZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoaXRlbSBhcyBIVE1MRWxlbWVudCkuc3R5bGUuY29sb3IgPSAnIzMzMyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKCfimqDvuI8gRXJyb3IgYXBwbHlpbmcgbWVudGlvbiBzdHlsaW5nIGZpeGVzOicsIGVycm9yKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZXRlY3QgaWYgd2UncmUgaW4gYSBwb3RlbnRpYWwgaW5maW5pdGUgbG9vcCBvciBleGNlc3NpdmUgZXZlbnQgZmlyaW5nXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGV0ZWN0RXhjZXNzaXZlRXZlbnRzKG1ldGhvZE5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XHJcbiAgICAgICAgY29uc3QgdGltZURpZmYgPSBub3cgLSB0aGlzLmxhc3RFdmVudFRpbWVzdGFtcDtcclxuXHJcbiAgICAgICAgaWYgKHRpbWVEaWZmIDwgMTAwKSB7IC8vIExlc3MgdGhhbiAxMDBtcyBiZXR3ZWVuIGNhbGxzXHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRDYWxsc0luU2hvcnRUaW1lKys7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5ldmVudENhbGxzSW5TaG9ydFRpbWUgPiAxMCkge1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFJlc2V0IGNvdW50ZXIgYWZ0ZXIgbG9nZ2luZ1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ldmVudENhbGxzSW5TaG9ydFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmV2ZW50Q2FsbHNJblNob3J0VGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmxhc3RFdmVudFRpbWVzdGFtcCA9IG5vdztcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBEZWJvdW5jZWQgdmVyc2lvbiBvZiB1cGRhdGVGaWVsZERhdGEgdG8gcHJldmVudCByYXBpZCBzdWNjZXNzaXZlIGNhbGxzXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgZGVib3VuY2VkVXBkYXRlRmllbGREYXRhKGlucHV0VmFsdWU6IHN0cmluZywgaXNWYWxpZDogYm9vbGVhbiwgZGVsYXk6IG51bWJlciA9IDEwMCk6IHZvaWQge1xyXG4gICAgICAgIC8vIENsZWFyIGFueSBleGlzdGluZyB0aW1lb3V0XHJcbiAgICAgICAgaWYgKHRoaXMuZGVib3VuY2VVcGRhdGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aGlzLmRlYm91bmNlVXBkYXRlVGltZW91dCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBTZXQgbmV3IHRpbWVvdXRcclxuICAgICAgICB0aGlzLmRlYm91bmNlVXBkYXRlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaXNVcGRhdGluZ0ZpZWxkRGF0YSkge1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNVcGRhdGluZ0ZpZWxkRGF0YSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlRmllbGREYXRhKGlucHV0VmFsdWUsIGlzVmFsaWQpO1xyXG4gICAgICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1VwZGF0aW5nRmllbGREYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgZGVsYXkpO1xyXG5cclxuICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aGlzLmRlYm91bmNlVXBkYXRlVGltZW91dCk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBMb2cgY29tcHJlaGVuc2l2ZSBldmVudCBzdGF0aXN0aWNzIGZvciBkZWJ1Z2dpbmcgKHJlbW92ZWQgZm9yIHByb2R1Y3Rpb24pXHJcbiAgICAgKi9cclxuICAgIHByaXZhdGUgbG9nRXZlbnRTdW1tYXJ5KCk6IHZvaWQge1xyXG4gICAgICAgIC8vIFJlbW92ZWQgdmVyYm9zZSBsb2dnaW5nIGZvciBwcm9kdWN0aW9uXHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDbGVhciB0aGUgY2xpcGJvYXJkIGNvbnRlbnQgdG8gcHJldmVudCB1bndhbnRlZCBwYXN0aW5nXHJcbiAgICAgKi9cclxuICAgIC8vIHByaXZhdGUgY2xlYXJDbGlwYm9hcmQoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coJ/Cfp7kgQXR0ZW1wdGluZyB0byBjbGVhciBjbGlwYm9hcmQ6Jywge1xyXG4gICAgLy8gICAgICAgICAgICAgdGltZXN0YW1wOiBuZXcgRGF0ZSgpLnRvSVNPU3RyaW5nKCksXHJcbiAgICAvLyAgICAgICAgICAgICBjb21wb25lbnRLZXk6IHRoaXMuY29tcG9uZW50S2V5XHJcbiAgICAvLyAgICAgICAgIH0pO1xyXG5cclxuICAgIC8vICAgICAgICAgLy8gTWV0aG9kIDE6IFRyeSB1c2luZyB0aGUgbW9kZXJuIENsaXBib2FyZCBBUElcclxuICAgIC8vICAgICAgICAgaWYgKG5hdmlnYXRvci5jbGlwYm9hcmQgJiYgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQpIHtcclxuICAgIC8vICAgICAgICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KCcnKS50aGVuKCgpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn4pyFIENsaXBib2FyZCBjbGVhcmVkIHN1Y2Nlc3NmdWxseSB1c2luZyBDbGlwYm9hcmQgQVBJJyk7XHJcbiAgICAvLyAgICAgICAgICAgICB9KS5jYXRjaCgoZXJyb3IpID0+IHtcclxuICAgIC8vICAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBFcnJvciBjbGVhcmluZyBjbGlwYm9hcmQgd2l0aCBDbGlwYm9hcmQgQVBJOicsIGVycm9yKTtcclxuICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLmZhbGxiYWNrQ2xlYXJDbGlwYm9hcmQoKTtcclxuICAgIC8vICAgICAgICAgICAgIH0pO1xyXG4gICAgLy8gICAgICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICAgICAgLy8gTWV0aG9kIDI6IEZhbGxiYWNrIGZvciBvbGRlciBicm93c2Vyc1xyXG4gICAgLy8gICAgICAgICAgICAgdGhpcy5mYWxsYmFja0NsZWFyQ2xpcGJvYXJkKCk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgRXJyb3IgaW4gY2xlYXJDbGlwYm9hcmQgbWV0aG9kOicsIGVycm9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGYWxsYmFjayBtZXRob2QgdG8gY2xlYXIgY2xpcGJvYXJkIGZvciBvbGRlciBicm93c2Vyc1xyXG4gICAgICovXHJcbiAgICAvLyBwcml2YXRlIGZhbGxiYWNrQ2xlYXJDbGlwYm9hcmQoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgdHJ5IHtcclxuICAgIC8vICAgICAgICAgLy8gQ3JlYXRlIGEgdGVtcG9yYXJ5IGlucHV0IGVsZW1lbnRcclxuICAgIC8vICAgICAgICAgY29uc3QgdGVtcElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIC8vICAgICAgICAgdGVtcElucHV0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIC8vICAgICAgICAgdGVtcElucHV0LnN0eWxlLmxlZnQgPSAnLTk5OTlweCc7XHJcbiAgICAvLyAgICAgICAgIHRlbXBJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gICAgLy8gICAgICAgICB0ZW1wSW5wdXQudmFsdWUgPSAnJztcclxuXHJcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGVtcElucHV0KTtcclxuICAgIC8vICAgICAgICAgdGVtcElucHV0LnNlbGVjdCgpO1xyXG4gICAgLy8gICAgICAgICB0ZW1wSW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoMCwgMCk7XHJcblxyXG4gICAgLy8gICAgICAgICAvLyBUcnkgdG8gZXhlY3V0ZSBjb3B5IGNvbW1hbmQgdG8gY2xlYXIgY2xpcGJvYXJkXHJcbiAgICAvLyAgICAgICAgIGNvbnN0IHN1Y2Nlc3MgPSBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xyXG4gICAgLy8gICAgICAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgLy8gICAgICAgICAgICAgY29uc29sZS5sb2coJ+KchSBDbGlwYm9hcmQgY2xlYXJlZCB1c2luZyBmYWxsYmFjayBtZXRob2QnKTtcclxuICAgIC8vICAgICAgICAgfSBlbHNlIHtcclxuICAgIC8vICAgICAgICAgICAgIGNvbnNvbGUud2Fybign4pqg77iPIEZhbGxiYWNrIGNsaXBib2FyZCBjbGVhciBtYXkgbm90IGhhdmUgd29ya2VkJyk7XHJcbiAgICAvLyAgICAgICAgIH1cclxuXHJcbiAgICAvLyAgICAgICAgIC8vIENsZWFuIHVwXHJcbiAgICAvLyAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGVtcElucHV0KTtcclxuICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgLy8gICAgICAgICBjb25zb2xlLmVycm9yKCfinYwgRXJyb3IgaW4gZmFsbGJhY2sgY2xpcGJvYXJkIGNsZWFyOicsIGVycm9yKTtcclxuICAgIC8vICAgICB9XHJcbiAgICAvLyB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFxyXG4gICAgKiAgTWV0aG9kcyBmb3IgSGFuZGxpbmcgRHJhZyBuIERyb3BzIGluc2lkZSBlZGl0b3IgYmxvY2sgXHJcbiAgICAqICBpbmNsdWRpbmcgdG9vbGJhciBhbmQgcmVtYWluaW5nIHBhcnRzIG9mIGVkaXRvclxyXG4gICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8vSGFuZGxlcyBEcmFnIG4gRHJvcHBlZCBmaWxlc1xyXG4gICAgYXN5bmMgaGFuZGxlRHJvcChldmVudDogRHJhZ0V2ZW50KSB7XHJcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZiAoZXZlbnQuZGF0YVRyYW5zZmVyICYmIGV2ZW50LmRhdGFUcmFuc2Zlci5maWxlcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkRmlsZXM6IEZpbGVbXSA9IEFycmF5LmZyb20oZXZlbnQuZGF0YVRyYW5zZmVyLmZpbGVzKS5maWx0ZXIoZmlsZSA9PiBmaWxlLnR5cGUuc3RhcnRzV2l0aCgnaW1hZ2UvJykpO1xyXG4gICAgICAgICAgICBpZiAodmFsaWRGaWxlcy5sZW5ndGggPT0gMCkgcmV0dXJuO1xyXG4gICAgICAgICAgICBjb25zdCB0aW1lb3V0SWQgPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnVwbG9hZE91dE9mRWRpdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRGaWxlc1RvRWRpdG9yKHZhbGlkRmlsZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCAxMDApO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWVvdXRJZHMucHVzaCh0aW1lb3V0SWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyBTZXQgZmlsZXMgdG8gZWRpdG9yXHJcbiAgICBhc3luYyBzZXRGaWxlc1RvRWRpdG9yKGZpbGVzOiBGaWxlW10pIHtcclxuICAgICAgICBmb3IgKGNvbnN0IGZpbGUgb2YgZmlsZXMpIHtcclxuICAgICAgICAgICAgYXdhaXQgdGhpcy5yZWFkSW1hZ2VGaWxlKGZpbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC8vIFJlYWQgZmlsZXNcclxuICAgIGFzeW5jIHJlYWRJbWFnZUZpbGUoZmlsZTogRmlsZSkge1xyXG4gICAgICAgIGNvbnN0IGNvbXByZXNzZWRJbWFnZSA9IGF3YWl0IHRoaXMuY29tcHJlc3NJbWFnZShmaWxlLCA4MDAsIDYwMCwgMC42KTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZygnQ29tcHJlc3NlZCBmaWxlOicsIGNvbXByZXNzZWRJbWFnZSk7XHJcbiAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuICAgICAgICByZWFkZXIub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBiYXNlNjQgPSByZWFkZXIucmVzdWx0IGFzIHN0cmluZztcclxuICAgICAgICAgICAgdGhpcy5pbnNlcnRJbWFnZUludG9FZGl0b3IoYmFzZTY0KTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIHJlYWRlci5yZWFkQXNEYXRhVVJMKGNvbXByZXNzZWRJbWFnZSk7XHJcbiAgICB9XHJcbiAgICAvLyBJbnNlcnRzIGltYWdlcyBpbiB0byBlZGl0b3JcclxuICAgIGluc2VydEltYWdlSW50b0VkaXRvcihpbWFnZVVybDogc3RyaW5nKSB7XHJcbiAgICAgICAgY29uc3QgcXVpbGwgPSB0aGlzLnF1aWxsRWRpdG9yLnF1aWxsRWRpdG9yO1xyXG5cclxuICAgICAgICBpZiAoIXF1aWxsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1F1aWxsIGVkaXRvciBpbnN0YW5jZSBub3QgZm91bmQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIEdldCBjdXJyZW50IHNlbGVjdGlvbiBvciBzZXQgdG8gZW5kIGlmIHRoZXJlJ3Mgbm8gc2VsZWN0aW9uXHJcbiAgICAgICAgY29uc3QgcmFuZ2UgPSBxdWlsbC5nZXRTZWxlY3Rpb24odHJ1ZSkgfHwgeyBpbmRleDogcXVpbGwuZ2V0TGVuZ3RoKCksIGxlbmd0aDogMCB9O1xyXG5cclxuICAgICAgICBxdWlsbC5pbnNlcnRFbWJlZChyYW5nZS5pbmRleCwgJ2ltYWdlJywgaW1hZ2VVcmwsICd1c2VyJyk7XHJcbiAgICAgICAgcXVpbGwuc2V0U2VsZWN0aW9uKHJhbmdlLmluZGV4ICsgMSwgJ3VzZXInKTsgLy8gbW92ZSBjdXJzb3IgYWZ0ZXIgaW1hZ2VcclxuICAgIH1cclxuXHJcbiAgICBlbmFibGVVcGxvYWRPbkRyYWdPdmVyKGZsYWc6IGJvb2xlYW4pIHtcclxuICAgICAgICB0aGlzLnVwbG9hZE91dE9mRWRpdG9yID0gZmxhZztcclxuICAgIH1cclxuXHJcbiAgICAvLyBBbGxvd3MgZHJhZyBuIGRyb3BzXHJcbiAgICBvbkRyYWdPdmVyKGV2ZW50OiBEcmFnRXZlbnQpIHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpOyAvLyBhbGxvdyBkcm9wICAgICAgICBcclxuICAgICAgICB0aGlzLmVuYWJsZVVwbG9hZE9uRHJhZ092ZXIodHJ1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqIFxyXG4gICAgKiAgTWV0aG9kcyBmb3IgRHluYW1pYyBNZW50aW9uIERhdGEgTG9hZGluZ1xyXG4gICAgKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuICAgIC8vIFJlZnJlc2ggbWVudGlvbiBkYXRhIGZyb20gQVBJIC0gY2FsbGVkIHdoZW4gZGF0YSBiZWNvbWVzIGF2YWlsYWJsZVxyXG4gICAgcmVmcmVzaE1lbnRpb25EYXRhKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJ1bnRpbWVEcm9wRG93bkRhdGEgPSB0aGlzLmFwaURhdGFTZXJ2aWNlLmdldEFwaURhdGFCeUhhbmRsZXIodGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ10pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChydW50aW1lRHJvcERvd25EYXRhICYmIEFycmF5LmlzQXJyYXkocnVudGltZURyb3BEb3duRGF0YSkgJiYgcnVudGltZURyb3BEb3duRGF0YS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gcnVudGltZURyb3BEb3duRGF0YTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxPcHRpb25zID0gdGhpcy5hZGRpdGlvbmFsUGFyYW1ldGVyWydleHRlcm5hbEFwaU9wdGlvblZhbHVlJ107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dGVybmFsT3B0aW9ucyAmJiBBcnJheS5pc0FycmF5KGV4dGVybmFsT3B0aW9ucykgJiYgZXh0ZXJuYWxPcHRpb25zLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hbGxPcHRpb25zID0gZXh0ZXJuYWxPcHRpb25zO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oJ+KaoO+4jyBFcnJvciByZWZyZXNoaW5nIG1lbnRpb24gZGF0YTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUFwaU1lbnRpb25SZXNwb25zZShyZXNwb25zZTogYW55KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuYWRkaXRpb25hbFBhcmFtZXRlclsnZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSddKSB7XHJcbiAgICAgICAgICAgIGxldCBwYXJhbWV0ZXIgPSB0aGlzLmFkZGl0aW9uYWxQYXJhbWV0ZXJbJ2V4dGVybmFsQXBpT3B0aW9uVmFsdWUnXVxyXG4gICAgICAgICAgICBjb25zdCBleHRlcm5hbEFwaU9wdGlvblZhbHVlID0gdGhpcy5nZXRFeHRlcm5hbEFwaU9wdGlvblZhbHVlKHBhcmFtZXRlciwgcmVzcG9uc2UpO1xyXG4gICAgICAgICAgICBpZiAoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy8gQ1JJVElDQUwgRklYOiBFbnN1cmUgYWxsT3B0aW9ucyBpcyBhbHdheXMgYW4gYXJyYXkgYmVmb3JlIHB1c2hpbmdcclxuICAgICAgICAgICAgICAgIHRoaXMuYWxsT3B0aW9ucyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXh0ZXJuYWxBcGlPcHRpb25WYWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBleHRlcm5hbEFwaU9wdGlvblZhbHVlLmZvckVhY2goKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyYW1ldGVyLnZhbHVlICYmIHBhcmFtZXRlci52YWx1ZS5zcGxpdCgnWypdJylbcGFyYW1ldGVyLnZhbHVlLnNwbGl0KCdbKl0nKS5sZW5ndGggLSAxXSA9PSAnJyAmJiB0eXBlb2YgdmFsID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFsbE9wdGlvbnMucHVzaCh7IGlkOiB2YWxbJ3ZhbHVlJ10sIHZhbHVlOiB2YWxbJ25hbWUnXSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWxsT3B0aW9ucy5wdXNoKHsgaWQ6IHZhbC5zcGxpdCgnfHwnKVswXSwgdmFsdWU6IHZhbC5zcGxpdCgnfHwnKVt2YWwuc3BsaXQoJ3x8JykubGVuZ3RoIC0gMV0gfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHZhbHVlcyA9IHRoaXMuZ2V0TWVudGlvblZhbHVlcygpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZEFycmF5KHZhbHVlcywgJ21lbnRpb24gdmFsdWVzJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXMgPSB0aGlzLnNhbml0aXplTWVudGlvblZhbHVlcyh2YWx1ZXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUVtcHR5TWVudGlvblZhbHVlcyh0aGlzLmN1cnJlbnRSZW5kZXJMaXN0LCB0aGlzLmN1cnJlbnRTZWFyY2hUZXJtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaXNFbXB0eVNlYXJjaCA9ICF0aGlzLmN1cnJlbnRTZWFyY2hUZXJtIHx8IHRoaXMuY3VycmVudFNlYXJjaFRlcm0ubGVuZ3RoID09PSAwIHx8IHRoaXMuY3VycmVudFNlYXJjaFRlcm0udHJpbSgpID09PSAnJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzRW1wdHlTZWFyY2gpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVFbXB0eVNlYXJjaCh2YWx1ZXMsIHRoaXMuY3VycmVudFJlbmRlckxpc3QsIHRoaXMuY3VycmVudFNlYXJjaFRlcm0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2FmZVJlbmRlckxpc3QodGhpcy5jdXJyZW50UmVuZGVyTGlzdCwgdmFsdWVzLCB0aGlzLmN1cnJlbnRTZWFyY2hUZXJtLCAndmFsdWVzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdTb21ldGhpbmcgV2VudCBXcm9uZyBpbiBlZGl0b3IgISEhJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG4iLCI8ZGl2IGNsYXNzPVwiZmllbGQtd3JhcHBlclwiICpuZ0lmPVwiaXNWaXNpYmxlXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWxhYmVsXCI+XHJcbiAgICAgICAgICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJmaWVsZERhdGEuZmllbGRfbGFiZWwhPScnXCI+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiICpuZ0lmPVwiIWlzSFRNTChmaWVsZERhdGEuZmllbGRfbGFiZWwpXCI+e3tmaWVsZERhdGEuZmllbGRfbGFiZWx9fTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJjb2wtZm9ybS1sYWJlbFwiICpuZ0lmPVwiaXNIVE1MKGZpZWxkRGF0YS5maWVsZF9sYWJlbClcIlxyXG4gICAgICAgICAgICAgICAgICAgIFtpbm5lckhUTUxdPVwiZmllbGREYXRhLmZpZWxkX2xhYmVsXCI+PC9sYWJlbD5cclxuICAgICAgICAgICAgPC9uZy1jb250YWluZXI+XHJcbiAgICAgICAgICAgIDxzcGFuICpuZ0lmPVwiaXNNYW5kYXRvcnlcIiBjbGFzcz1cIm1hbmRldG9yeS1tYXJrXCI+ICo8L3NwYW4+XHJcbiAgICAgICAgICAgIDxidXR0b24gKm5nSWY9XCJoYXNUb29sdGlwXCIgdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYnRuLXRvb2x0aXAgbWwtYXV0b1wiIFt0b29sdGlwXT1cImZpZWxkRGF0YS50b29sdGlwXCJcclxuICAgICAgICAgW2F0dHIuYXJpYS1sYWJlbF09XCInVG9vbHRpcDogJyArIGZpZWxkRGF0YS50b29sdGlwIFwiPlxyXG4gICAgICAgICAgICAgICAgaVxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZFwiPlxyXG4gICAgICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJpbnZpc2libGUtaW5wdXQtY29udFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0ICNxdWlsbEZpbGUgdHlwZT1cImZpbGVcIiAoY2hhbmdlKT1cInF1aWxsRmlsZVNlbGVjdGVkKCRldmVudClcIj5cclxuICAgICAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZWRpdG9yLWNvbnRhaW5lclwiIFthdHRyLmRhdGEtY29tcG9uZW50LWtleV09XCJjb21wb25lbnRLZXlcIj5cclxuICAgICAgICAgICAgICA8cXVpbGwtZWRpdG9yICNjb250ZW50Q3RybD1cIm5nTW9kZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgI3F1aWxsRWRpdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbYXR0ci5kYXRhLWVkaXRvci1rZXldPVwiY29tcG9uZW50S2V5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChkcmFnb3Zlcik9XCJvbkRyYWdPdmVyKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGRyYWdsZWF2ZSk9XCJlbmFibGVVcGxvYWRPbkRyYWdPdmVyKGZhbHNlKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZHJvcCk9XCJoYW5kbGVEcm9wKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgWyhuZ01vZGVsKV09XCJpbnB1dFZhbHVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFttb2R1bGVzXT1cImVkaXRvck1vZHVsZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZT1cIm1lUXVpbGxSZWZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJ7eyhpc0N1c3RvbUNsYXNzICYmIGZpZWxkRGF0YS5maWVsZF9zdHlsZSk/ZmllbGREYXRhLmZpZWxkX3N0eWxlLmN1c3RvbV9jbGFzc19uYW1lOicnfX0gIHt7ICF2YWxpZCB8fCAoY29udGVudEN0cmwuaW52YWxpZCAmJiBpc01hbmRhdG9yeSAmJiBjb250ZW50Q3RybC5kaXJ0eSkgPyAnaW52YWxpZCcgOiAndmFsaWQnIH19IHt7KGNvbnRlbnRDdHJsLmludmFsaWQgJiYgY29udGVudEN0cmwudG91Y2hlZCkgPyAnaW52YWxpZC1lZGl0b3InIDogJyd9fVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGVtZT1cInNub3dcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybWF0PVwiaHRtbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbcmVxdWlyZWRdPVwiaXNNYW5kYXRvcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cIiFpc0VkaXRhYmxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwie3tmaWVsZERhdGEucGxhY2Vob2xkZXJfdGV4dH19XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChvbkVkaXRvckNyZWF0ZWQpPVwiZ2V0RWRpdG9ySW5zdGFuY2UoJGV2ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAob25Db250ZW50Q2hhbmdlZCk9XCJvbkNvbnRlbnRDaGFuZ2VkKCRldmVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKG9uRm9jdXMpPVwib25Ub3VjaGVkKGNvbnRlbnRDdHJsKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAobmdNb2RlbENoYW5nZSk9XCJ1cGRhdGVQcmV2aWV3KClcIj5cclxuICAgICAgICAgICAgICA8L3F1aWxsLWVkaXRvcj5cclxuICAgICAgICAgICAgICA8ZGl2ICpuZ0lmPVwiY29udGVudEN0cmwuaW52YWxpZCAmJiBjb250ZW50Q3RybC50b3VjaGVkXCIgY2xhc3M9XCJ0ZXh0LWRhbmdlclwiPlxyXG4gICAgICAgICAgICAgICAgRmllbGQgaXMgcmVxdWlyZWQuXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jb250YWluZXJcIiAqbmdJZj1cInByZXZpZXdDb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICA8aDY+UHJldmlldzwvaDY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jb250ZW50XCIgW2lubmVySFRNTF09XCJzYW5pdGl6ZWRDb250ZW50XCI+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jb250YWluZXJcIiAqbmdJZj1cInByZXZpZXdIdG1sXCI+XHJcbiAgICAgICAgICAgICAgPGg2PkZvcm1hdC1IdG1sPC9oNj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJldmlldy1jb250ZW50XCI+e3tpbnB1dFZhbHVlfX08L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG4iXX0=